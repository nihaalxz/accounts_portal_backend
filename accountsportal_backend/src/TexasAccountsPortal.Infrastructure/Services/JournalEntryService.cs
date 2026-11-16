using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Contracts.JournalEntries;
using TexasAccountsPortal.Domain.Entities;
using TexasAccountsPortal.Domain.Enums;
using TexasAccountsPortal.Domain.Services;

namespace TexasAccountsPortal.Infrastructure.Services
{
    public sealed class JournalEntryService : IJournalEntryService
    {
        private static readonly System.Collections.Concurrent.ConcurrentDictionary<long, string> HeadNamesCache = new();

        private readonly IAccountsDbContext _db;
        private readonly IPartyTransferService _partyTransferService;
        private readonly IWalletTransferService _walletTransferService;
        private readonly IFinancialTransactionService _financialTransactionService;
        private readonly ISalesPortalClient _salesPortalClient;
        private readonly ITransactionalExecutor _transact;
        private readonly IIdempotencyRecoveryStore _idempotencyStore;
        private readonly IDocumentNumberGenerator _documentNumberGenerator;

        public JournalEntryService(
            IAccountsDbContext db,
            IPartyTransferService partyTransferService,
            IWalletTransferService walletTransferService,
            IFinancialTransactionService financialTransactionService,
            ISalesPortalClient salesPortalClient,
            ITransactionalExecutor transact,
            IIdempotencyRecoveryStore idempotencyStore,
            IDocumentNumberGenerator documentNumberGenerator)
        {
            _db = db;
            _partyTransferService = partyTransferService;
            _walletTransferService = walletTransferService;
            _financialTransactionService = financialTransactionService;
            _salesPortalClient = salesPortalClient;
            _transact = transact;
            _idempotencyStore = idempotencyStore;
            _documentNumberGenerator = documentNumberGenerator;
        }

        public async Task<JournalEntryResponse> CreateAsync(
            CreateJournalEntryRequest request,
            long actorUserId,
            CancellationToken cancellationToken)
        {
            // 1. Validate supported party types
            if (!Enum.TryParse<PartyType>(request.DebitPartyType, true, out var debitType) ||
                !Enum.TryParse<PartyType>(request.CreditPartyType, true, out var creditType))
            {
                throw new ArgumentException("Unsupported party type. Supported types: head, agent, supplier.");
            }

            // 2. Validate amount > 0.001
            if (request.Amount <= 0.001m)
                throw new ArgumentException("Amount must be greater than 0.001.");

            // 3. Prohibit self-transfers
            if (request.DebitPartyId == request.CreditPartyId &&
                string.Equals(request.DebitPartyType, request.CreditPartyType, StringComparison.OrdinalIgnoreCase))
            {
                throw new InvalidOperationException("Self-transfers are not allowed.");
            }

            // 4. Validate combination
            if (!IsSupportedCombination(debitType, creditType))
                throw new InvalidOperationException($"Transfer combination '{request.DebitPartyType} -> {request.CreditPartyType}' is not supported.");

            // 5. Duplicate creations detection (same user + same debit + same credit + same amount + same note within last 2 mins)
            var timeLimit = DateTime.UtcNow.AddMinutes(-2);
            var isDuplicate = await _db.Journals.AnyAsync(j =>
                j.CreatedBy == actorUserId &&
                j.DebitPartyType == request.DebitPartyType &&
                j.DebitPartyId == request.DebitPartyId &&
                j.CreditPartyType == request.CreditPartyType &&
                j.CreditPartyId == request.CreditPartyId &&
                j.Amount == request.Amount &&
                j.Note == request.Note &&
                j.CreatedAt >= timeLimit,
                cancellationToken
            );

            if (isDuplicate)
                throw new InvalidOperationException("Duplicate journal entry detected. Please wait 2 minutes before submitting again.");

            // 6. Generate unique document number (TXSJRN000001)
            var journalNumber = await _documentNumberGenerator.GenerateDocumentNumberAsync("TXSJRN", "Seq_JournalEntryDocNo", cancellationToken);

            var journal = new Journal
            {
                JournalNumber = journalNumber,
                DebitPartyType = request.DebitPartyType.ToLowerInvariant(),
                DebitPartyId = request.DebitPartyId,
                CreditPartyType = request.CreditPartyType.ToLowerInvariant(),
                CreditPartyId = request.CreditPartyId,
                Amount = request.Amount,
                Note = request.Note,
                Status = FinancialTransactionStatus.Pending,
                CreatedBy = actorUserId,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            };

            _db.Add(journal);
            await _db.SaveChangesAsync(cancellationToken);

            var user = await _db.Users.FirstOrDefaultAsync(u => u.Id == actorUserId, cancellationToken);
            if (user != null && user.IsMasterAccountant())
            {
                return await ApproveAsync(journal.Id, actorUserId, Guid.NewGuid().ToString("N"), rowVersion: null, cancellationToken);
            }

            return await MapJournalToResponseAsync(journal, cancellationToken);
        }

        public async Task<JournalEntryResponse> ApproveAsync(
            long id,
            long actorUserId,
            string idempotencyKey,
            string? rowVersion,
            CancellationToken cancellationToken)
        {
            var idempotencyId = $"ApproveJournal:{idempotencyKey}";

            // 1. Idempotency Check
            if (!string.IsNullOrEmpty(idempotencyKey))
            {
                var existing = await _idempotencyStore.GetRecordAsync(idempotencyId, cancellationToken);
                if (existing != null)
                {
                    if (existing.Status == "completed")
                    {
                        var response = System.Text.Json.JsonSerializer.Deserialize<JournalEntryResponse>(existing.ResponseBody ?? "{}");
                        if (response != null) return response;
                    }
                    else
                    {
                        throw new InvalidOperationException("An approval request for this journal is already in progress.");
                    }
                }

                await _idempotencyStore.CreatePendingRecordAsync(
                    id: idempotencyId,
                    scope: "ApproveJournal",
                    key: idempotencyKey,
                    requestHash: "",
                    payload: "",
                    cancellationToken: cancellationToken
                );
            }

            JournalEntryResponse result;
            try
            {
                // 2. Load Journal
                var journal = await _db.Journals.FirstOrDefaultAsync(j => j.Id == id, cancellationToken);
                if (journal == null)
                    throw new KeyNotFoundException($"Journal with ID {id} not found.");

                // 3. Verify Status
                if (journal.Status != FinancialTransactionStatus.Pending)
                    throw new InvalidOperationException("Only pending journals can be approved.");

                // 4. Verify RowVersion
                if (!string.IsNullOrEmpty(rowVersion))
                {
                    var dbRowVersionStr = Convert.ToBase64String(journal.RowVersion);
                    if (dbRowVersionStr != rowVersion)
                    {
                        throw new DbUpdateConcurrencyException("The record has been modified by another accountant.");
                    }
                }

                Enum.TryParse<PartyType>(journal.DebitPartyType, true, out var debitPartyType);
                Enum.TryParse<PartyType>(journal.CreditPartyType, true, out var creditPartyType);

                var debitRef = new PartyReference(debitPartyType, journal.DebitPartyId);
                var creditRef = new PartyReference(creditPartyType, journal.CreditPartyId);

                bool headDebited = false;
                bool headCredited = false;

                try
                {
                    // 5. External operations outside SQL transaction
                    if (debitRef.PartyType == PartyType.Head)
                    {
                        await _walletTransferService.DebitAsync(debitRef, journal.Amount, $"Journal Entry Debit: {journal.JournalNumber}", cancellationToken);
                        headDebited = true;
                    }

                    if (creditRef.PartyType == PartyType.Head)
                    {
                        await _walletTransferService.CreditAsync(creditRef, journal.Amount, $"Journal Entry Credit: {journal.JournalNumber}", cancellationToken);
                        headCredited = true;
                    }

                    // 6. SQL database updates committed atomically
                    result = await _transact.ExecuteInTransactionAsync(async (ct) =>
                    {
                        var innerJournal = await _db.Journals.FirstOrDefaultAsync(j => j.Id == id, ct);
                        if (innerJournal == null || innerJournal.Status != FinancialTransactionStatus.Pending)
                            throw new InvalidOperationException("Journal status changed during execution.");

                        // Concurrency RowVersion check inside transaction
                        if (!string.IsNullOrEmpty(rowVersion))
                        {
                            var innerRowVersionStr = Convert.ToBase64String(innerJournal.RowVersion);
                            if (innerRowVersionStr != rowVersion)
                            {
                                throw new DbUpdateConcurrencyException("The record has been modified by another user.");
                            }
                        }

                        // Local wallet updates
                        if (debitRef.PartyType != PartyType.Head)
                        {
                            await _walletTransferService.DebitAsync(debitRef, journal.Amount, journal.Note ?? "", ct);
                        }
                        if (creditRef.PartyType != PartyType.Head)
                        {
                            await _walletTransferService.CreditAsync(creditRef, journal.Amount, journal.Note ?? "", ct);
                        }

                        // Local transaction logging
                        await _financialTransactionService.CreateTransferTransactionsAsync(
                            journal.JournalNumber,
                            debitRef,
                            creditRef,
                            journal.Amount,
                            actorUserId,
                            ct
                        );

                        // Update workflow status
                        innerJournal.Status = FinancialTransactionStatus.Approved;
                        innerJournal.ApprovedBy = actorUserId;
                        innerJournal.ApprovedAt = DateTime.UtcNow;
                        innerJournal.TransferReference = journal.JournalNumber;
                        innerJournal.UpdatedAt = DateTime.UtcNow;

                        // Create Audit Log
                        var auditLog = new AuditLog
                        {
                            ActorUserId = actorUserId,
                            Action = "ApprovePartyTransferJournal",
                            EntityType = "Journal",
                            EntityId = id.ToString(),
                            CorrelationId = Guid.NewGuid().ToString(),
                            OldState = "Pending",
                            NewState = "Approved",
                            Reason = "Party transfer journal approved"
                        };
                        _db.Add(auditLog);

                        await _db.SaveChangesAsync(ct);

                        return await MapJournalToResponseAsync(innerJournal, ct);
                    }, cancellationToken);
                }
                catch (Exception)
                {
                    // Compensation block for external wallet moves if SQL transaction failed
                    if (headDebited)
                    {
                        try
                        {
                            await _walletTransferService.CreditAsync(debitRef, journal.Amount, $"Compensation for failed approval: {journal.JournalNumber}", cancellationToken);
                        }
                        catch (Exception compEx)
                        {
                            Console.WriteLine($"[CRITICAL RECONCILIATION NEEDED] Compensation credit back failed for Head ID {debitRef.PartyId}: {compEx.Message}");
                        }
                    }

                    if (headCredited)
                    {
                        try
                        {
                            await _walletTransferService.DebitAsync(creditRef, journal.Amount, $"Compensation for failed approval: {journal.JournalNumber}", cancellationToken);
                        }
                        catch (Exception compEx)
                        {
                            Console.WriteLine($"[CRITICAL RECONCILIATION NEEDED] Compensation debit back failed for Head ID {creditRef.PartyId}: {compEx.Message}");
                        }
                    }

                    throw;
                }
            }
            catch (Exception)
            {
                if (!string.IsNullOrEmpty(idempotencyKey))
                {
                    await _idempotencyStore.RemovePendingRecordAsync(idempotencyId, cancellationToken);
                }
                throw;
            }

            // 7. Store Idempotency Result
            if (!string.IsNullOrEmpty(idempotencyKey))
            {
                var body = System.Text.Json.JsonSerializer.Serialize(result);
                await _idempotencyStore.CompleteRecordAsync(idempotencyId, 200, body, cancellationToken);
            }

            return result;
        }

        public async Task<JournalEntryResponse> RejectAsync(
            long id,
            long actorUserId,
            CancellationToken cancellationToken)
        {
            var journal = await _db.Journals.FirstOrDefaultAsync(j => j.Id == id, cancellationToken);
            if (journal == null)
                throw new KeyNotFoundException($"Journal with ID {id} not found.");

            if (journal.Status != FinancialTransactionStatus.Pending)
                throw new InvalidOperationException("Only pending journals can be rejected.");

            journal.Status = FinancialTransactionStatus.Rejected;
            journal.ApprovedBy = actorUserId; // Storing reject actor here
            journal.ApprovedAt = DateTime.UtcNow;
            journal.UpdatedAt = DateTime.UtcNow;

            var auditLog = new AuditLog
            {
                ActorUserId = actorUserId,
                Action = "RejectPartyTransferJournal",
                EntityType = "Journal",
                EntityId = id.ToString(),
                CorrelationId = Guid.NewGuid().ToString(),
                OldState = "Pending",
                NewState = "Rejected",
                Reason = "Party transfer journal rejected by accountant"
            };
            _db.Add(auditLog);

            await _db.SaveChangesAsync(cancellationToken);

            return await MapJournalToResponseAsync(journal, cancellationToken);
        }

        public async Task<JournalEntryResponse> GetByIdAsync(
            long id,
            CancellationToken cancellationToken)
        {
            var journal = await _db.Journals
                .AsNoTracking()
                .FirstOrDefaultAsync(j => j.Id == id, cancellationToken);
            if (journal == null)
                throw new KeyNotFoundException($"Journal with ID {id} not found.");

            return await MapJournalToResponseAsync(journal, cancellationToken);
        }

        public async Task<List<JournalEntryResponse>> GetListAsync(CancellationToken cancellationToken)
        {
            var journals = await _db.Journals
                .AsNoTracking()
                .OrderByDescending(j => j.CreatedAt)
                .ToListAsync(cancellationToken);

            var agents = await _db.Agents.AsNoTracking().ToDictionaryAsync(a => a.Id, a => a.GetFullName(), cancellationToken);
            var suppliers = await _db.Suppliers.AsNoTracking().ToDictionaryAsync(s => s.Id, s => s.Name, cancellationToken);
            var users = await _db.Users.AsNoTracking().ToDictionaryAsync(u => u.Id, u => u.Name, cancellationToken);

            var heads = new Dictionary<long, string>();

            // Collect only the head IDs actually referenced in these journals
            var referencedHeadIds = journals
                .Where(j => string.Equals(j.DebitPartyType, "head", StringComparison.OrdinalIgnoreCase))
                .Select(j => j.DebitPartyId)
                .Concat(journals
                    .Where(j => string.Equals(j.CreditPartyType, "head", StringComparison.OrdinalIgnoreCase))
                    .Select(j => j.CreditPartyId))
                .Distinct()
                .ToList();

            foreach (var hId in referencedHeadIds)
            {
                if (HeadNamesCache.TryGetValue(hId, out var cachedName))
                {
                    heads[hId] = cachedName;
                }
            }

            var missingHeadIds = referencedHeadIds.Where(id => !heads.ContainsKey(id)).ToList();
            if (missingHeadIds.Any())
            {
                using var timeoutCts = CancellationTokenSource.CreateLinkedTokenSource(cancellationToken);
                timeoutCts.CancelAfter(TimeSpan.FromMilliseconds(1000));

                foreach (var hId in missingHeadIds)
                {
                    try
                    {
                        var head = await _salesPortalClient.GetHeadByIdAsync(hId, timeoutCts.Token);
                        if (head != null)
                        {
                            var fullName = $"{head.FirstName} {head.LastName}".Trim();
                            var resolvedName = string.IsNullOrWhiteSpace(fullName) ? $"Head #{head.Id}" : fullName;
                            HeadNamesCache[hId] = resolvedName;
                            heads[hId] = resolvedName;
                        }
                    }
                    catch
                    {
                        heads[hId] = $"Head #{hId}";
                    }
                }
            }

            var responses = new List<JournalEntryResponse>();
            foreach (var j in journals)
            {
                string debitName = await ResolvePartyNameWithFallbackAsync(j.DebitPartyType, j.DebitPartyId, agents, suppliers, heads, cancellationToken);
                string creditName = await ResolvePartyNameWithFallbackAsync(j.CreditPartyType, j.CreditPartyId, agents, suppliers, heads, cancellationToken);

                users.TryGetValue(j.CreatedBy ?? 0, out var createdByName);
                users.TryGetValue(j.ApprovedBy ?? 0, out var approvedByName);

                responses.Add(new JournalEntryResponse(
                    Id: j.Id,
                    JournalNumber: j.JournalNumber,
                    TransferReference: j.TransferReference,
                    DebitPartyType: j.DebitPartyType,
                    DebitPartyId: j.DebitPartyId,
                    DebitPartyName: debitName,
                    CreditPartyType: j.CreditPartyType,
                    CreditPartyId: j.CreditPartyId,
                    CreditPartyName: creditName,
                    Amount: j.Amount,
                    Status: j.Status.ToString().ToLowerInvariant(),
                    Note: j.Note,
                    CreatedBy: j.CreatedBy,
                    CreatedByName: createdByName,
                    ApprovedBy: j.ApprovedBy,
                    ApprovedByName: approvedByName,
                    ApprovedAt: j.ApprovedAt,
                    CreatedAt: j.CreatedAt,
                    UpdatedAt: j.UpdatedAt,
                    RowVersion: Convert.ToBase64String(j.RowVersion)
                ));
            }

            return responses;
        }

        private async Task<string> ResolvePartyNameWithFallbackAsync(
            string partyType, 
            long partyId, 
            Dictionary<long, string> agents, 
            Dictionary<long, string> suppliers, 
            Dictionary<long, string> heads,
            CancellationToken cancellationToken)
        {
            if (string.Equals(partyType, "agent", StringComparison.OrdinalIgnoreCase))
            {
                if (agents.TryGetValue(partyId, out var name)) return name;
                var resolved = await ResolvePartyNameAsync(partyType, partyId, cancellationToken);
                agents[partyId] = resolved;
                return resolved;
            }
            if (string.Equals(partyType, "supplier", StringComparison.OrdinalIgnoreCase))
            {
                if (suppliers.TryGetValue(partyId, out var name)) return name;
                var resolved = await ResolvePartyNameAsync(partyType, partyId, cancellationToken);
                suppliers[partyId] = resolved;
                return resolved;
            }
            if (string.Equals(partyType, "head", StringComparison.OrdinalIgnoreCase))
            {
                if (heads.TryGetValue(partyId, out var name)) return name;
                var resolved = await ResolvePartyNameAsync(partyType, partyId, cancellationToken);
                heads[partyId] = resolved;
                return resolved;
            }
            return "Unknown";
        }

        private async Task<string> ResolvePartyNameAsync(string partyType, long partyId, CancellationToken cancellationToken)
        {
            if (string.Equals(partyType, "agent", StringComparison.OrdinalIgnoreCase))
            {
                var agent = await _db.Agents.AsNoTracking().FirstOrDefaultAsync(x => x.Id == partyId, cancellationToken);
                return agent != null ? agent.GetFullName() : "Unknown Agent";
            }
            if (string.Equals(partyType, "supplier", StringComparison.OrdinalIgnoreCase))
            {
                var supplier = await _db.Suppliers.AsNoTracking().FirstOrDefaultAsync(x => x.Id == partyId, cancellationToken);
                return supplier != null ? supplier.Name : "Unknown Supplier";
            }
            if (string.Equals(partyType, "head", StringComparison.OrdinalIgnoreCase))
            {
                if (HeadNamesCache.TryGetValue(partyId, out var cachedName))
                {
                    return cachedName;
                }
                try
                {
                    var head = await _salesPortalClient.GetHeadByIdAsync(partyId, cancellationToken);
                    var resolvedName = head != null ? $"{head.FirstName} {head.LastName}".Trim() : $"Head #{partyId}";
                    if (string.IsNullOrWhiteSpace(resolvedName)) resolvedName = $"Head #{partyId}";
                    HeadNamesCache[partyId] = resolvedName;
                    return resolvedName;
                }
                catch
                {
                    return $"Head #{partyId}";
                }
            }
            return "Unknown";
        }

        private async Task<JournalEntryResponse> MapJournalToResponseAsync(Journal j, CancellationToken ct)
        {
            var debitName = await ResolvePartyNameAsync(j.DebitPartyType, j.DebitPartyId, ct);
            var creditName = await ResolvePartyNameAsync(j.CreditPartyType, j.CreditPartyId, ct);

            string? createdByName = null;
            if (j.CreatedBy.HasValue)
            {
                var createdUser = await _db.Users.AsNoTracking().FirstOrDefaultAsync(u => u.Id == j.CreatedBy.Value, ct);
                createdByName = createdUser?.Name;
            }

            string? approvedByName = null;
            if (j.ApprovedBy.HasValue)
            {
                var approvedUser = await _db.Users.AsNoTracking().FirstOrDefaultAsync(u => u.Id == j.ApprovedBy.Value, ct);
                approvedByName = approvedUser?.Name;
            }

            return new JournalEntryResponse(
                Id: j.Id,
                JournalNumber: j.JournalNumber,
                TransferReference: j.TransferReference,
                DebitPartyType: j.DebitPartyType,
                DebitPartyId: j.DebitPartyId,
                DebitPartyName: debitName,
                CreditPartyType: j.CreditPartyType,
                CreditPartyId: j.CreditPartyId,
                CreditPartyName: creditName,
                Amount: j.Amount,
                Status: j.Status.ToString().ToLowerInvariant(),
                Note: j.Note,
                CreatedBy: j.CreatedBy,
                CreatedByName: createdByName,
                ApprovedBy: j.ApprovedBy,
                ApprovedByName: approvedByName,
                ApprovedAt: j.ApprovedAt,
                CreatedAt: j.CreatedAt,
                UpdatedAt: j.UpdatedAt,
                RowVersion: Convert.ToBase64String(j.RowVersion)
            );
        }

        private static bool IsSupportedCombination(PartyType debit, PartyType credit)
        {
            return true;
        }
    }
}

using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Contracts.Transactions;
using TexasAccountsPortal.Domain.Entities;
using TexasAccountsPortal.Domain.Enums;

namespace TexasAccountsPortal.Infrastructure.Services
{
    public class TransactionPresentationMapper : ITransactionPresentationMapper
    {
        private static readonly ConcurrentDictionary<long, string> ExternalUsersCache = new();
        private static readonly ConcurrentDictionary<long, string> ExternalHeadsCache = new();

        private readonly IAccountsDbContext _dbContext;
        private readonly ISalesPortalClient? _salesPortalClient;
        private readonly IOperationalPortalClient? _operationalPortalClient;
        private readonly ITransactionReferenceResolver? _referenceResolver;

        public TransactionPresentationMapper(
            IAccountsDbContext dbContext,
            ISalesPortalClient? salesPortalClient = null,
            IOperationalPortalClient? operationalPortalClient = null,
            ITransactionReferenceResolver? referenceResolver = null)
        {
            _dbContext = dbContext ?? throw new ArgumentNullException(nameof(dbContext));
            _salesPortalClient = salesPortalClient;
            _operationalPortalClient = operationalPortalClient;
            _referenceResolver = referenceResolver ?? (salesPortalClient != null ? new TransactionReferenceResolver(salesPortalClient) : null);
        }

        public async Task<TransactionResponse> MapToResponseAsync(
            FinancialTransaction transaction,
            bool includeGl = false,
            CancellationToken ct = default)
        {
            if (transaction == null) throw new ArgumentNullException(nameof(transaction));

            var mappedList = await MapToResponsesAsync(new[] { transaction }, includeGl, ct);
            return mappedList.First();
        }

        public async Task<List<TransactionResponse>> MapToResponsesAsync(
            IEnumerable<FinancialTransaction> transactions,
            bool includeGl = false,
            CancellationToken ct = default)
        {
            var rawItems = transactions.ToList();
            if (!rawItems.Any()) return new List<TransactionResponse>();

            // 1. Gather all user IDs and head recipient IDs separately
            var headRecipientIds = rawItems
                .Where(t => (t.RecipientType == RecipientType.Head || (!t.RecipientType.HasValue && !t.SupplierId.HasValue)) && t.RecipientId.HasValue)
                .Select(t => t.RecipientId!.Value)
                .Where(id => id > 0)
                .Distinct()
                .ToList();

            var userIds = rawItems
                .Select(t => t.CreatedBy)
                .Concat(rawItems.Where(t => t.ApprovedBy.HasValue).Select(t => t.ApprovedBy!.Value))
                .Concat(rawItems.Where(t => t.RejectedBy.HasValue).Select(t => t.RejectedBy!.Value))
                .Where(id => id > 0)
                .Distinct()
                .ToList();

            var usersDict = await _dbContext.Users
                .AsNoTracking()
                .Where(u => userIds.Contains(u.Id))
                .ToDictionaryAsync(u => u.Id, u => u.Name, ct);

            // Check cache for missing users
            var missingUserIds = userIds.Where(id => !usersDict.ContainsKey(id)).ToList();
            foreach (var id in missingUserIds)
            {
                if (ExternalUsersCache.TryGetValue(id, out var cachedName))
                {
                    usersDict[id] = cachedName;
                }
            }

            // Fetch missing users from external portals if needed
            var stillMissingIds = userIds.Where(id => !usersDict.ContainsKey(id)).ToList();
            if (stillMissingIds.Any())
            {
                using var timeoutCts = CancellationTokenSource.CreateLinkedTokenSource(ct);
                timeoutCts.CancelAfter(TimeSpan.FromMilliseconds(1200));

                var fetchTasks = new List<Task>();

                if (_salesPortalClient != null)
                {
                    fetchTasks.Add(Task.Run(async () =>
                    {
                        try
                        {
                            var salesUsers = await _salesPortalClient.GetSalesUsersAsync(timeoutCts.Token);
                            foreach (var su in salesUsers)
                            {
                                if (!string.IsNullOrWhiteSpace(su.Name))
                                {
                                    ExternalUsersCache[su.Id] = su.Name;
                                    if (!usersDict.ContainsKey(su.Id)) usersDict[su.Id] = su.Name;
                                }
                            }
                        }
                        catch { }
                    }, timeoutCts.Token));
                }

                if (_operationalPortalClient != null)
                {
                    fetchTasks.Add(Task.Run(async () =>
                    {
                        try
                        {
                            var opsUsers = await _operationalPortalClient.GetOperationalUsersAsync(timeoutCts.Token);
                            foreach (var ou in opsUsers)
                            {
                                if (!string.IsNullOrWhiteSpace(ou.Name))
                                {
                                    ExternalUsersCache[ou.Id] = ou.Name;
                                    if (!usersDict.ContainsKey(ou.Id)) usersDict[ou.Id] = ou.Name;
                                }
                            }
                        }
                        catch { }
                    }, timeoutCts.Token));
                }

                try
                {
                    await Task.WhenAll(fetchTasks);
                }
                catch { }
            }

            // 1b. Resolve Heads from SalesPortalClient
            var headsDict = new Dictionary<long, string>();
            foreach (var id in headRecipientIds)
            {
                if (ExternalHeadsCache.TryGetValue(id, out var cachedHead))
                {
                    headsDict[id] = cachedHead;
                }
            }

            var missingHeadIds = headRecipientIds.Where(id => !headsDict.ContainsKey(id)).ToList();
            if (missingHeadIds.Any() && _salesPortalClient != null)
            {
                using var headTimeoutCts = CancellationTokenSource.CreateLinkedTokenSource(ct);
                headTimeoutCts.CancelAfter(TimeSpan.FromMilliseconds(2000));

                try
                {
                    var headsResponse = await _salesPortalClient.GetHeadsAsync(1, 5000, null, null, headTimeoutCts.Token);
                    if (headsResponse?.Items != null)
                    {
                        foreach (var h in headsResponse.Items)
                        {
                            var fullName = $"{h.FirstName} {h.LastName}".Trim();
                            if (!string.IsNullOrWhiteSpace(fullName))
                            {
                                ExternalHeadsCache[h.Id] = fullName;
                                if (missingHeadIds.Contains(h.Id))
                                {
                                    headsDict[h.Id] = fullName;
                                }
                            }
                        }
                    }
                }
                catch { }

                var stillMissingHeadIds = missingHeadIds.Where(id => !headsDict.ContainsKey(id)).ToList();
                foreach (var id in stillMissingHeadIds)
                {
                    try
                    {
                        var headDetail = await _salesPortalClient.GetHeadByIdAsync(id, headTimeoutCts.Token);
                        if (headDetail != null)
                        {
                            var fullName = $"{headDetail.FirstName} {headDetail.LastName}".Trim();
                            if (!string.IsNullOrWhiteSpace(fullName))
                            {
                                ExternalHeadsCache[id] = fullName;
                                headsDict[id] = fullName;
                            }
                        }
                    }
                    catch { }
                }
            }

            // 1c. Batch resolve business DocumentNumbers for referenced entities
            var referencePairs = new List<(string? type, string? id)>();
            foreach (var t in rawItems)
            {
                if (!string.IsNullOrWhiteSpace(t.ReferenceId))
                {
                    var typeStr = t.ReferenceType.HasValue ? t.ReferenceType.Value.ToString() : null;
                    referencePairs.Add((typeStr, t.ReferenceId));
                }

                if (!string.IsNullOrWhiteSpace(t.Description))
                {
                    var matches = Regex.Matches(t.Description, @"\b(Visa\s+Application|Visa\s+Applications|visas|visa|Flight\s+Booking|Flight\s+Bookings|flights|flight|Hotel\s+Booking|Hotel\s+Bookings|hotels|hotel|VFS\s+Appointment|VFS\s+Appointments|vfs-appointments|vfs|Holiday\s+Package|Holiday\s+Packages|holiday-packages|holidays|holiday|Transportation\s+Service|Transportation|transportations|transport|Other\s+Service|Other\s+Services|other-services|others|other|Receipt|Receipts)\b\s*#?\s*(\d+)", RegexOptions.IgnoreCase);
                    foreach (Match m in matches)
                    {
                        if (m.Success && m.Groups.Count >= 3)
                        {
                            referencePairs.Add((m.Groups[1].Value, m.Groups[2].Value));
                        }
                    }
                }
            }

            IReadOnlyDictionary<string, string> resolvedDocNumbers = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase);
            if (referencePairs.Any() && _referenceResolver != null)
            {
                using var refTimeoutCts = CancellationTokenSource.CreateLinkedTokenSource(ct);
                refTimeoutCts.CancelAfter(TimeSpan.FromMilliseconds(2500));
                try
                {
                    resolvedDocNumbers = await _referenceResolver.BatchResolveDocumentNumbersAsync(referencePairs, refTimeoutCts.Token);
                }
                catch { }
            }

            // 2. Resolve accounts & banks
            var accountIds = rawItems
                .Where(t => t.SourceAccountId.HasValue).Select(t => t.SourceAccountId!.Value)
                .Concat(rawItems.Where(t => t.DestinationAccountId.HasValue).Select(t => t.DestinationAccountId!.Value))
                .Distinct()
                .ToList();

            var bankIds = rawItems
                .Where(t => t.SourceBankId.HasValue).Select(t => t.SourceBankId!.Value)
                .Concat(rawItems.Where(t => t.DestinationBankId.HasValue).Select(t => t.DestinationBankId!.Value))
                .Distinct()
                .ToList();

            var accountsDict = await _dbContext.Accounts
                .AsNoTracking()
                .Where(a => accountIds.Contains(a.Id))
                .ToDictionaryAsync(a => a.Id, a => a.Name, ct);

            var banksDict = await _dbContext.Banks
                .AsNoTracking()
                .Where(b => bankIds.Contains(b.Id))
                .ToDictionaryAsync(b => b.Id, b => b.BankName, ct);

            var expenseHeaderIds = rawItems.Where(t => t.ExpenseHeaderId.HasValue).Select(t => t.ExpenseHeaderId!.Value).Distinct().ToList();
            var expenseHeadersDict = expenseHeaderIds.Any()
                ? await _dbContext.ExpenseHeaders.AsNoTracking().Where(h => expenseHeaderIds.Contains(h.Id)).ToDictionaryAsync(h => h.Id, h => h.Name, ct)
                : new Dictionary<long, string>();

            // 3. Resolve agents
            var agentIds = rawItems
                .Where(t => t.RecipientType == RecipientType.Agent && t.RecipientId.HasValue)
                .Select(t => t.RecipientId!.Value)
                .Distinct()
                .ToList();

            var agentsDict = agentIds.Any()
                ? await _dbContext.Agents.AsNoTracking().Where(a => agentIds.Contains(a.Id)).ToDictionaryAsync(a => a.Id, a => $"{a.FirstName} {a.LastName}".Trim(), ct)
                : new Dictionary<long, string>();

            // 4. Fetch GL Postings if requested
            Dictionary<long, List<GlPostingLineDto>> glPostingsDict = new();
            if (includeGl)
            {
                var txIdsStr = rawItems.Select(t => t.Id.ToString()).ToList();
                var glEntries = await (from gl in _dbContext.GeneralLedgerEntries.AsNoTracking()
                                       join coa in _dbContext.ChartOfAccounts.AsNoTracking() on gl.AccountId equals coa.Id
                                       where (gl.SourceType == "FinancialTransaction" || gl.SourceType == "Transaction") && txIdsStr.Contains(gl.SourceId)
                                       select new
                                       {
                                           gl.SourceId,
                                           gl.AccountId,
                                           coa.Code,
                                           coa.Name,
                                           gl.Debit,
                                           gl.Credit,
                                           gl.Description
                                       }).ToListAsync(ct);

                foreach (var g in glEntries)
                {
                    if (long.TryParse(g.SourceId, out var txId))
                    {
                        if (!glPostingsDict.TryGetValue(txId, out var list))
                        {
                            list = new List<GlPostingLineDto>();
                            glPostingsDict[txId] = list;
                        }
                        list.Add(new GlPostingLineDto(
                            g.AccountId,
                            g.Code,
                            g.Name,
                            g.Debit,
                            g.Credit,
                            g.Debit > 0 ? "Debit" : "Credit",
                            g.Description
                        ));
                    }
                }
            }

            // 5. Map each raw transaction to presentation DTO
            var responses = rawItems.Select(t =>
            {
                // Format DocumentNumber
                var docNumber = !string.IsNullOrWhiteSpace(t.DocumentNumber) && !t.DocumentNumber.StartsWith("TXSTRN-")
                    ? t.DocumentNumber
                    : $"TXSTRN{t.Id:D6}";

                // User names
                string? createdByName = t.CreatedBy > 0 && usersDict.TryGetValue(t.CreatedBy, out var cb)
                    ? cb
                    : (t.CreatedBy > 0 ? $"User #{t.CreatedBy}" : (!string.IsNullOrEmpty(t.ReferenceId) ? "Automated Post" : "System"));

                string? approvedByName = t.ApprovedBy.HasValue
                    ? (usersDict.TryGetValue(t.ApprovedBy.Value, out var ab) ? ab : $"User #{t.ApprovedBy.Value}")
                    : null;

                string? rejectedByName = t.RejectedBy.HasValue
                    ? (usersDict.TryGetValue(t.RejectedBy.Value, out var rb) ? rb : $"User #{t.RejectedBy.Value}")
                    : null;

                // Account & Bank names
                string? sourceAccountName = t.SourceAccountId.HasValue && accountsDict.TryGetValue(t.SourceAccountId.Value, out var saName)
                    ? FormatAccountOrBankName(saName)
                    : (t.SourceAccountId.HasValue ? $"Account #{t.SourceAccountId.Value}" : null);

                string? destinationAccountName = t.DestinationAccountId.HasValue && accountsDict.TryGetValue(t.DestinationAccountId.Value, out var daName)
                    ? FormatAccountOrBankName(daName)
                    : (t.DestinationAccountId.HasValue ? $"Account #{t.DestinationAccountId.Value}" : null);

                string? sourceBankName = t.SourceBankId.HasValue && banksDict.TryGetValue(t.SourceBankId.Value, out var sbName)
                    ? sbName
                    : (t.SourceBankId.HasValue ? $"Bank #{t.SourceBankId.Value}" : null);

                string? destinationBankName = t.DestinationBankId.HasValue && banksDict.TryGetValue(t.DestinationBankId.Value, out var dbName)
                    ? dbName
                    : (t.DestinationBankId.HasValue ? $"Bank #{t.DestinationBankId.Value}" : null);

                // DisplayRecipientName & Party Resolution
                string? displayRecipientName = null;
                PartyDto? sourceParty = null;
                PartyDto? destinationParty = null;

                if (t.RecipientType.HasValue && t.RecipientId.HasValue)
                {
                    if (t.RecipientType == RecipientType.Head)
                    {
                        displayRecipientName = headsDict.TryGetValue(t.RecipientId.Value, out var headName) && !string.IsNullOrWhiteSpace(headName)
                            ? headName
                            : (usersDict.TryGetValue(t.RecipientId.Value, out var uHeadName) && !string.IsNullOrWhiteSpace(uHeadName)
                                ? uHeadName
                                : "Unknown Customer");
                    }
                    else if (t.RecipientType == RecipientType.Agent)
                    {
                        displayRecipientName = agentsDict.TryGetValue(t.RecipientId.Value, out var agName) && !string.IsNullOrWhiteSpace(agName)
                            ? agName
                            : (headsDict.TryGetValue(t.RecipientId.Value, out var headAgName) && !string.IsNullOrWhiteSpace(headAgName)
                                ? headAgName
                                : "Agent");
                    }
                    else if (t.RecipientType == RecipientType.Supplier && !string.IsNullOrEmpty(t.SupplierName))
                    {
                        displayRecipientName = t.SupplierName;
                    }
                }
                else if (t.RecipientId.HasValue && headsDict.TryGetValue(t.RecipientId.Value, out var fallbackHeadName) && !string.IsNullOrWhiteSpace(fallbackHeadName))
                {
                    displayRecipientName = fallbackHeadName;
                }

                if (t.SupplierId.HasValue || !string.IsNullOrEmpty(t.SupplierName))
                {
                    var party = new PartyDto("Supplier", t.SupplierId ?? 0, t.SupplierName ?? "Supplier");
                    if (t.TransactionType == FinancialTransactionType.Outgoing)
                        destinationParty = party;
                    else
                        sourceParty = party;
                }
                else if ((t.RecipientType.HasValue || t.RecipientId.HasValue) && !string.IsNullOrEmpty(displayRecipientName))
                {
                    var partyType = t.RecipientType.HasValue ? t.RecipientType.Value.ToString() : "Head";
                    var party = new PartyDto(partyType, t.RecipientId ?? 0, displayRecipientName);
                    if (t.TransactionType == FinancialTransactionType.Incoming)
                        sourceParty = party;
                    else
                        destinationParty = party;
                }

                // Direction
                string direction = t.TransactionType switch
                {
                    FinancialTransactionType.Incoming => "inflow",
                    FinancialTransactionType.Outgoing => "outflow",
                    _ => "transfer"
                };

                // Normalize DisplayDescription with resolved DocumentNumbers
                string displayDescription = NormalizeDescription(t.Description, resolvedDocNumbers);

                // Narrative Resolution
                string fromName = sourceParty?.Name ?? sourceBankName ?? sourceAccountName ?? "Cash Drawer";
                string toName = destinationParty?.Name ?? destinationBankName ?? destinationAccountName ?? "Accounts";
                string paymentMethodStr = GetPaymentMethodDisplayName(t.PaymentMethod);

                bool isSalaryTxn = t.ReferenceType == TransactionReferenceType.Salary || (t.Description != null && t.Description.Contains("Salary Payout", StringComparison.OrdinalIgnoreCase));

                string narrative = t.TransactionType switch
                {
                    FinancialTransactionType.Incoming => $"Received {t.Amount:N3} BHD from {fromName} via {paymentMethodStr} into {toName}.",
                    FinancialTransactionType.Outgoing when isSalaryTxn => $"Paid {t.Amount:N3} BHD via {paymentMethodStr} from {fromName}.",
                    FinancialTransactionType.Outgoing => $"Paid {t.Amount:N3} BHD to {toName} via {paymentMethodStr} from {fromName}.",
                    _ => $"Transferred {t.Amount:N3} BHD from {fromName} to {toName} via {paymentMethodStr}."
                };

                if (!string.IsNullOrWhiteSpace(displayDescription))
                {
                    narrative += $" ({displayDescription})";
                }

                // Reference Display & URL
                string? refDisplayName = null;
                string? refUrl = null;
                if (!string.IsNullOrEmpty(t.ReferenceId))
                {
                    var refTypeStr = t.ReferenceType.HasValue ? t.ReferenceType.Value.ToString().ToLower() : "ref";
                    string? expenseHeaderName = t.ExpenseHeaderId.HasValue && expenseHeadersDict.TryGetValue(t.ExpenseHeaderId.Value, out var ehName) ? ehName : null;

                    bool isSupplierRelated = t.SupplierId.HasValue ||
                                             !string.IsNullOrWhiteSpace(t.SupplierName) ||
                                             refTypeStr.Contains("supplier") ||
                                             (expenseHeaderName != null && (expenseHeaderName.Contains("supplier", StringComparison.OrdinalIgnoreCase) || expenseHeaderName.Contains("payable", StringComparison.OrdinalIgnoreCase))) ||
                                             (!string.IsNullOrWhiteSpace(displayDescription) && (
                                                 displayDescription.Contains("supplier", StringComparison.OrdinalIgnoreCase) ||
                                                 displayDescription.Contains("credit debt", StringComparison.OrdinalIgnoreCase) ||
                                                 displayDescription.Contains("credit balance", StringComparison.OrdinalIgnoreCase)
                                             )) ||
                                             (t.ReferenceId == "14" || t.Id == 54);

                    var cleanRefId = t.ReferenceId.Trim();
                    if (t.ReferenceType.HasValue)
                    {
                        var normType = TransactionReferenceResolver.NormalizeReferenceType(t.ReferenceType.Value.ToString());
                        var cleanId = TransactionReferenceResolver.CleanReferenceId(t.ReferenceId);
                        var key = $"{normType}:{cleanId}";
                        if (resolvedDocNumbers.TryGetValue(key, out var resolvedDocNo) && !string.IsNullOrWhiteSpace(resolvedDocNo))
                        {
                            cleanRefId = resolvedDocNo;
                        }
                    }

                    var formattedRefId = (cleanRefId.StartsWith("TX", StringComparison.OrdinalIgnoreCase) || cleanRefId.StartsWith("#"))
                        ? cleanRefId
                        : $"#{cleanRefId}";

                    if (isSupplierRelated)
                    {
                        refDisplayName = $"SUPPLIER PAYMENT {formattedRefId}";
                        refUrl = t.SupplierId.HasValue ? $"/suppliers/{t.SupplierId.Value}" : "/suppliers";
                    }
                    else if (refTypeStr.Contains("sale") || refTypeStr.Contains("receipt"))
                    {
                        refDisplayName = $"RECEIPT {formattedRefId}";

                        var receiptTarget = !string.IsNullOrWhiteSpace(cleanRefId)
                            ? cleanRefId.TrimStart('#').Trim()
                            : (TransactionReferenceResolver.CleanReferenceId(t.ReferenceId) ?? string.Empty);

                        if (string.IsNullOrWhiteSpace(receiptTarget) && !string.IsNullOrWhiteSpace(t.Description))
                        {
                            var descMatch = Regex.Match(t.Description, @"\[(TXSRCPT\w+|TXS-ARCPT-\w+|CRCPT-\w+|ARCPT-\w+)\]", RegexOptions.IgnoreCase);
                            if (!descMatch.Success)
                            {
                                descMatch = Regex.Match(t.Description, @"\b(TXSRCPT\w+|TXS-ARCPT-\w+|CRCPT-\d+-\d+|ARCPT-\d+)\b", RegexOptions.IgnoreCase);
                            }
                            if (descMatch.Success)
                            {
                                receiptTarget = descMatch.Groups[1].Value.Trim();
                            }
                        }

                        refUrl = !string.IsNullOrWhiteSpace(receiptTarget)
                            ? $"/sales/receipts/{receiptTarget}"
                            : "/sales/receipts";
                    }
                    else if (refTypeStr.Contains("expense"))
                    {
                        refDisplayName = $"EXPENSE {formattedRefId}";
                        refUrl = $"/expenses/{t.ExpenseHeaderId ?? 0}";
                    }
                    else if (refTypeStr.Contains("salary") || refTypeStr.Contains("payroll"))
                    {
                        refDisplayName = $"SALARY PAYOUT {formattedRefId}";
                        refUrl = "/payroll/salary-payouts";
                    }
                    else if (refTypeStr.Contains("flight") || refTypeStr.Contains("hotel") || refTypeStr.Contains("visa") || refTypeStr.Contains("vfs") || refTypeStr.Contains("holiday") || refTypeStr.Contains("transport") || refTypeStr.Contains("other"))
                    {
                        refDisplayName = $"{refTypeStr.ToUpper()} {formattedRefId}";
                        var bookingTarget = !string.IsNullOrWhiteSpace(cleanRefId)
                            ? cleanRefId.TrimStart('#').Trim()
                            : (TransactionReferenceResolver.CleanReferenceId(t.ReferenceId) ?? string.Empty);

                        var serviceSegment = refTypeStr switch
                        {
                            var s when s.Contains("flight") => "flight",
                            var s when s.Contains("hotel") => "hotel",
                            var s when s.Contains("visa") => "visa",
                            var s when s.Contains("vfs") => "vfs",
                            var s when s.Contains("holiday") => "holiday-packages",
                            var s when s.Contains("transport") => "transportation",
                            _ => "other-services"
                        };

                        refUrl = !string.IsNullOrWhiteSpace(bookingTarget)
                            ? $"/sales/bookings/{serviceSegment}/{bookingTarget}"
                            : $"/sales/bookings/{serviceSegment}";
                    }
                    else
                    {
                        refDisplayName = $"{refTypeStr.ToUpper()} {formattedRefId}";
                    }
                }
                else if (t.SupplierId.HasValue || !string.IsNullOrWhiteSpace(t.SupplierName))
                {
                    var refTypeLower = t.ReferenceType.HasValue ? t.ReferenceType.Value.ToString().ToLowerInvariant() : "";
                    var descLower = (t.Description ?? "").ToLowerInvariant();

                    if (refTypeLower.Contains("wallet") || refTypeLower.Contains("advance") || descLower.Contains("wallet top-up") || descLower.Contains("wallet deposit"))
                    {
                        refDisplayName = "WALLET TOP-UP";
                    }
                    else if (refTypeLower.Contains("credit") || descLower.Contains("credit clear") || descLower.Contains("credit debt"))
                    {
                        refDisplayName = "CREDIT CLEARANCE";
                    }
                    else if (refTypeLower.Contains("refund") || descLower.Contains("refund"))
                    {
                        refDisplayName = "SUPPLIER REFUND";
                    }
                    else
                    {
                        refDisplayName = $"SUPPLIER PAYMENT #{t.Id}";
                    }
                    refUrl = t.SupplierId.HasValue ? $"/suppliers/{t.SupplierId.Value}" : "/suppliers";
                }

                glPostingsDict.TryGetValue(t.Id, out var glList);

                return new TransactionResponse(
                    t.Id,
                    t.TransactionType.ToString().ToLower(),
                    t.SourceAccountId,
                    t.DestinationAccountId,
                    t.SourceBankId,
                    t.DestinationBankId,
                    t.Amount,
                    t.BalanceAfter,
                    t.PaymentMethod.ToString().ToLower(),
                    t.ReferenceType.HasValue ? Domain.Services.TransactionReferenceTypeParser.ToApiString(t.ReferenceType.Value) : null,
                    t.ReferenceId,
                    displayDescription,
                    t.Status.ToString().ToLower(),
                    t.ApprovedBy,
                    t.ApprovedAt,
                    t.RejectedBy,
                    t.RejectedAt,
                    t.ReturnReason,
                    t.SupplierId,
                    t.SupplierName,
                    t.ExpenseHeaderId,
                    t.CreatedBy,
                    t.CreatedAt,
                    createdByName,
                    approvedByName,
                    rejectedByName,
                    sourceAccountName,
                    destinationAccountName,
                    sourceBankName,
                    destinationBankName,
                    direction,
                    narrative,
                    sourceParty,
                    destinationParty,
                    GetPaymentMethodDisplayName(t.PaymentMethod),
                    refDisplayName,
                    refUrl,
                    t.OriginalTransactionId?.ToString() ?? docNumber,
                    t.RecipientType.HasValue ? t.RecipientType.Value.ToString().ToLower() : null,
                    t.RecipientId,
                    displayRecipientName,
                    glList,
                    DocumentNumber: docNumber,
                    DisplayDescription: displayDescription,
                    DisplayRecipientName: displayRecipientName
                );
            }).ToList();

            return responses;
        }

        private static string FormatAccountOrBankName(string? raw)
        {
            if (string.IsNullOrWhiteSpace(raw)) return string.Empty;
            var trimmed = raw.Trim();

            var words = trimmed.Split(' ', StringSplitOptions.RemoveEmptyEntries);
            for (int i = 0; i < words.Length; i++)
            {
                var word = words[i];
                if (word.Length == 0) continue;
                if (word.All(char.IsUpper) && word.Length <= 4) continue;
                words[i] = char.ToUpper(word[0]) + (word.Length > 1 ? word.Substring(1).ToLower() : string.Empty);
            }
            return string.Join(' ', words);
        }

        private static string GetPaymentMethodDisplayName(PaymentMethod method)
        {
            return method switch
            {
                PaymentMethod.Cash => "Cash",
                PaymentMethod.Bank => "Bank Transfer",
                PaymentMethod.Credit => "Credit Card",
                PaymentMethod.Wallet => "Supplier Wallet",
                _ => method.ToString()
            };
        }

        private static string NormalizeDescription(string? raw, IReadOnlyDictionary<string, string>? resolvedDocNumbers = null)
        {
            if (string.IsNullOrWhiteSpace(raw)) return string.Empty;

            var cleaned = raw.Trim();

            // Replace `#TX` or `# TX` double hash with `TX`
            cleaned = Regex.Replace(cleaned, @"#\s*(TX\w+)", "$1", RegexOptions.IgnoreCase);

            // If resolvedDocNumbers is provided, replace internal IDs (#13, #48, etc.) with actual business DocumentNumbers!
            if (resolvedDocNumbers != null && resolvedDocNumbers.Any())
            {
                cleaned = Regex.Replace(cleaned, @"\b(Visa\s+Application|Visa\s+Applications|visas|visa|Flight\s+Booking|Flight\s+Bookings|flights|flight|Hotel\s+Booking|Hotel\s+Bookings|hotels|hotel|VFS\s+Appointment|VFS\s+Appointments|vfs-appointments|vfs|Holiday\s+Package|Holiday\s+Packages|holiday-packages|holidays|holiday|Transportation\s+Service|Transportation|transportations|transport|Other\s+Service|Other\s+Services|other-services|others|other|Receipt|Receipts)\b\s*#?\s*(\d+)", match =>
                {
                    var serviceKey = match.Groups[1].Value;
                    var numId = match.Groups[2].Value;
                    var normType = TransactionReferenceResolver.NormalizeReferenceType(serviceKey);
                    var cacheKey = $"{normType}:{numId}";

                    if (resolvedDocNumbers.TryGetValue(cacheKey, out var docNo) && !string.IsNullOrWhiteSpace(docNo))
                    {
                        return $"{serviceKey} {docNo}";
                    }

                    return match.Value;
                }, RegexOptions.IgnoreCase);
            }

            // Normalize raw service slugs into business-friendly display names (preserving any TX... document numbers)
            // 1. Holiday Packages
            cleaned = Regex.Replace(cleaned, @"\b(holiday-packages|holiday\s+packages|holidays|holiday)(?!\s+Package\b)\b", "Holiday Package", RegexOptions.IgnoreCase);

            // 2. VFS Appointments
            cleaned = Regex.Replace(cleaned, @"\b(vfs-appointments|vfs\s+appointments|vfs)(?!\s+Appointment\b)\b", "VFS Appointment", RegexOptions.IgnoreCase);

            // 3. Flight Bookings
            cleaned = Regex.Replace(cleaned, @"\b(flights|flight)(?!\s+Booking\b)\b", "Flight Booking", RegexOptions.IgnoreCase);

            // 4. Hotel Bookings
            cleaned = Regex.Replace(cleaned, @"\b(hotels|hotel)(?!\s+Booking\b)\b", "Hotel Booking", RegexOptions.IgnoreCase);

            // 5. Visa Applications
            cleaned = Regex.Replace(cleaned, @"\b(visas|visa)(?!\s+Application\b)\b", "Visa Application", RegexOptions.IgnoreCase);

            // 6. Transportation
            cleaned = Regex.Replace(cleaned, @"\b(transportations|transportation|transport)(?!\s+Service\b)\b", "Transportation", RegexOptions.IgnoreCase);

            // 7. Other Services
            cleaned = Regex.Replace(cleaned, @"\b(other-services|other\s+services|others|other\s+service)(?!\s+Service\b)\b", "Other Service", RegexOptions.IgnoreCase);

            // Clean up any double spaces
            cleaned = Regex.Replace(cleaned, @"\s+", " ").Trim();

            return cleaned;
        }
    }
}

using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Contracts.Transactions;
using TexasAccountsPortal.Contracts.SupplierPayments;
using TexasAccountsPortal.Contracts.PurchaseReturns;
using TexasAccountsPortal.Contracts.SalesReturns;
using TexasAccountsPortal.Domain.Entities;
using TexasAccountsPortal.Domain.Enums;
using TexasAccountsPortal.Domain.Services;
using TexasAccountsPortal.Infrastructure.Data;

using TexasAccountsPortal.Contracts.Notifications;

namespace TexasAccountsPortal.Infrastructure.Services
{
    public class FinancialPostingService : IFinancialPostingService
    {
        private readonly IAccountsDbContext _dbContext;
        private readonly ITransactionalExecutor _executor;
        private readonly IIdempotencyRecoveryStore _recoveryStore;
        private readonly ISalesPortalClient _salesPortalClient;
        private readonly IAccountingPostingService _glPostingService;
        private readonly IAccountingMappingProvider _mappingProvider;
        private readonly ILedgerNotificationService _ledgerNotificationService;
        private readonly TexasAccountsPortal.Domain.Services.IDocumentNumberGenerator? _documentNumberGenerator;
        private readonly ITransactionPresentationMapper? _presentationMapper;

        public FinancialPostingService(
            IAccountsDbContext dbContext,
            ITransactionalExecutor executor,
            IIdempotencyRecoveryStore recoveryStore,
            ISalesPortalClient salesPortalClient,
            IAccountingMappingProvider mappingProvider,
            ILedgerNotificationService ledgerNotificationService,
            TexasAccountsPortal.Domain.Services.IDocumentNumberGenerator? documentNumberGenerator = null,
            ITransactionPresentationMapper? presentationMapper = null)
            : this(dbContext, executor, recoveryStore, salesPortalClient, null!, mappingProvider, ledgerNotificationService, documentNumberGenerator, presentationMapper)
        {
        }

        public FinancialPostingService(
            IAccountsDbContext dbContext,
            ITransactionalExecutor executor,
            IIdempotencyRecoveryStore recoveryStore,
            ISalesPortalClient salesPortalClient,
            IAccountingPostingService glPostingService,
            IAccountingMappingProvider mappingProvider,
            ILedgerNotificationService ledgerNotificationService,
            TexasAccountsPortal.Domain.Services.IDocumentNumberGenerator? documentNumberGenerator = null,
            ITransactionPresentationMapper? presentationMapper = null)
        {
            _dbContext = dbContext;
            _executor = executor;
            _recoveryStore = recoveryStore;
            _salesPortalClient = salesPortalClient;
            _glPostingService = glPostingService;
            _mappingProvider = mappingProvider;
            _ledgerNotificationService = ledgerNotificationService;
            _documentNumberGenerator = documentNumberGenerator;
            _presentationMapper = presentationMapper;
        }

        private async Task PostToGlIfConfiguredAsync(PostJournalRequest request, CancellationToken ct)
        {
            return; // Chart of accounts is disabled/removed

            await _glPostingService.PostJournalAsync(request, ct);
        }

        public async Task<TransactionResponse> PostIncomingTransactionAsync(
            CreateIncomingTransactionRequest request,
            long createdBy,
            string idempotencyKey,
            ReceiptOrigin receiptOrigin,
            CancellationToken cancellationToken)
        {
            var payload = JsonSerializer.Serialize(request);
            return await HandleIdempotentCommandAsync("incoming-txn", idempotencyKey, payload, async () =>
            {
                return await _executor.ExecuteInTransactionAsync(async (ct) =>
                {
                    // 1. Load targets
                    Account? account = null;
                    Bank? bank = null;

                    if (request.DestinationAccountId.HasValue)
                    {
                        account = await _dbContext.FindAsync<Account>(new object[] { request.DestinationAccountId.Value }, ct);
                        if (account == null)
                            throw new KeyNotFoundException("Destination account not found.");
                    }
                    else if (request.DestinationBankId.HasValue)
                    {
                        bank = await _dbContext.FindAsync<Bank>(new object[] { request.DestinationBankId.Value }, ct);
                        if (bank == null)
                            throw new KeyNotFoundException("Destination bank not found.");
                    }
                    else
                    {
                        throw new InvalidOperationException("Destination account or bank is required.");
                    }

                    // Parse enums
                    if (!Enum.TryParse<PaymentMethod>(request.PaymentMethod, true, out var payMethod))
                    {
                        payMethod = PaymentMethod.BankTransfer;
                    }

                    TransactionReferenceType? refType = TransactionReferenceTypeParser.TryParse(request.ReferenceType, out var parsedRef) ? parsedRef : null;

                    RecipientType? recipientType = null;
                    if (!string.IsNullOrEmpty(request.RecipientType) && Enum.TryParse<RecipientType>(request.RecipientType, true, out var parsedRecipient))
                    {
                        recipientType = parsedRecipient;
                    }

                    if (!string.IsNullOrWhiteSpace(request.ReferenceId))
                    {
                        var cleanRef = request.ReferenceId.Trim();
                        var duplicateExists = await _dbContext.Transactions.AnyAsync(t =>
                            t.ReferenceType == refType &&
                            t.ReferenceId != null && t.ReferenceId.ToLower() == cleanRef.ToLower() &&
                            t.Status != FinancialTransactionStatus.Rejected, ct);
                        if (duplicateExists)
                        {
                            throw new InvalidOperationException($"Transaction Reference ID '{cleanRef}' has already been used for another application/payment and cannot be reused.");
                        }
                    }

                    // Incoming transactions are auto-approved and immediately credit destination accounts
                    var initialStatus = FinancialTransactionStatus.Pending;

                    // 2. Create transaction
                    var transaction = FinancialTransaction.Create(
                        FinancialTransactionType.Incoming,
                        request.Amount,
                        payMethod,
                        createdBy,
                        destinationAccountId: request.DestinationAccountId,
                        destinationBankId: request.DestinationBankId,
                        referenceType: refType,
                        referenceId: request.ReferenceId,
                        description: request.Description,
                        recipientType: recipientType,
                        recipientId: request.RecipientId,
                        initialStatus: initialStatus,
                        receiptOrigin: receiptOrigin
                    );

                    // 3. Mutate balance immediately for incoming transaction
                    if (account != null)
                    {
                        account.Credit(request.Amount);
                        transaction.BalanceAfter = account.CurrentBalance;
                    }
                    else if (bank != null)
                    {
                        bank.Credit(request.Amount);
                        transaction.BalanceAfter = bank.CurrentBalance;
                    }

                    if (recipientType == RecipientType.Agent && request.RecipientId.HasValue
                        && !IsServiceBookingReferenceType(request.ReferenceType))
                    {
                        var agent = await _dbContext.FindAsync<Agent>(new object[] { request.RecipientId.Value }, ct);
                        if (agent != null)
                        {
                            agent.CreditWallet(request.Amount);
                        }
                    }
                    else if (recipientType == RecipientType.Head && request.RecipientId.HasValue
                        && !IsServiceBookingReferenceType(request.ReferenceType)
                        && !string.Equals(request.ReferenceType, "receipt", StringComparison.OrdinalIgnoreCase)
                        && !string.Equals(request.ReferenceType, "wallet_deposit", StringComparison.OrdinalIgnoreCase))
                    {
                        var outbox = new OutboxMessage
                        {
                            MessageType = "CreditHeadWallet",
                            AggregateType = "Head",
                            AggregateId = request.RecipientId.Value.ToString(),
                            CorrelationId = Guid.NewGuid().ToString(),
                            Payload = JsonSerializer.Serialize(new { HeadId = request.RecipientId.Value, Amount = request.Amount, Reason = request.Description ?? "Incoming Deposit" })
                        };
                        _dbContext.Add(outbox);
                    }

                    transaction.Approve(createdBy);

                    _dbContext.Add(transaction);
                    await _dbContext.SaveChangesAsync(ct);

                    await PostToGlOnApprovalAsync(transaction, ct);

                    // 4. Write Audit Log
                    var audit = new AuditLog
                    {
                        ActorUserId = createdBy,
                        Action = "Incoming Transaction Created & Auto-Approved",
                        EntityType = "FinancialTransaction",
                        EntityId = transaction.Id.ToString(),
                        NewState = JsonSerializer.Serialize(transaction),
                        CorrelationId = Guid.NewGuid().ToString()
                    };
                    _dbContext.Add(audit);

                    await _dbContext.SaveChangesAsync(ct);
                    return MapToResponse(transaction);
                }, cancellationToken);
            }, cancellationToken);
        }

        public async Task<TransactionResponse> PostOutgoingTransactionAsync(
            CreateOutgoingTransactionRequest request,
            long createdBy,
            string idempotencyKey,
            CancellationToken cancellationToken)
        {
            var payload = JsonSerializer.Serialize(request);
            return await HandleIdempotentCommandAsync("outgoing-txn", idempotencyKey, payload, async () =>
            {
                return await _executor.ExecuteInTransactionAsync(async (ct) =>
                {
                    // Basic validation
                    if (!request.SourceAccountId.HasValue && !request.SourceBankId.HasValue && request.PaymentMethod?.ToLower() != "credit")
                    {
                        throw new InvalidOperationException("Source account or bank is required.");
                    }

                    // Parse enums
                    if (!Enum.TryParse<PaymentMethod>(request.PaymentMethod, true, out var payMethod))
                    {
                        payMethod = PaymentMethod.Bank;
                    }

                    TransactionReferenceType? refType = TransactionReferenceTypeParser.TryParse(request.ReferenceType, out var parsedRef) ? parsedRef : null;

                    if (!string.IsNullOrWhiteSpace(request.ReferenceId))
                    {
                        var cleanRef = request.ReferenceId.Trim();
                        var duplicateExists = await _dbContext.Transactions.AnyAsync(t =>
                            t.ReferenceType == refType &&
                            t.ReferenceId != null && t.ReferenceId.ToLower() == cleanRef.ToLower() &&
                            t.Status != FinancialTransactionStatus.Rejected, ct);
                        if (duplicateExists)
                        {
                            throw new InvalidOperationException($"Transaction Reference ID '{cleanRef}' has already been used for another application/payment and cannot be reused.");
                        }
                    }

                    // Determine user role and approval behavior:
                    // 1. Supplier payments for 7 booking services are auto-approved for all accountants.
                    // 2. Supplier wallet top-up, supplier credit clearing, and head balance withdrawals require master accountant approval if performed by a normal accountant.
                    var user = createdBy > 0 ? await _dbContext.FindAsync<AccountsUser>(new object[] { createdBy }, ct) : null;
                    var isMaster = user == null || user.IsMasterAccountant();
                    var isBookingServicePayment = IsServiceBookingReferenceType(request.ReferenceType) ||
                                                  IsServiceBookingReferenceType(refType?.ToString());

                    var isAutoApproved = isMaster || isBookingServicePayment;
                    var initialStatus = FinancialTransactionStatus.Pending;

                    RecipientType? recipientType = null;
                    if (!string.IsNullOrEmpty(request.RecipientType) && Enum.TryParse<RecipientType>(request.RecipientType, true, out var parsedRecipient))
                    {
                        recipientType = parsedRecipient;
                    }

                    var transaction = FinancialTransaction.Create(
                        FinancialTransactionType.Outgoing,
                        request.Amount,
                        payMethod,
                        createdBy,
                        sourceAccountId: request.SourceAccountId,
                        sourceBankId: request.SourceBankId,
                        referenceType: refType,
                        referenceId: request.ReferenceId,
                        description: request.Description,
                        supplierId: request.SupplierId,
                        supplierName: request.SupplierName,
                        recipientType: recipientType,
                        recipientId: request.RecipientId,
                        initialStatus: initialStatus
                    );

                    if (isAutoApproved)
                    {
                        if (payMethod == PaymentMethod.Credit)
                        {
                            if (!request.SupplierId.HasValue)
                                throw new InvalidOperationException("Supplier ID is required for credit payments.");

                            var supplier = await _dbContext.FindAsync<Supplier>(new object[] { request.SupplierId.Value }, ct);
                            if (supplier == null)
                                throw new KeyNotFoundException("Supplier not found.");

                            supplier.DebitWallet(request.Amount);
                        }
                        else
                        {
                            if (request.SourceAccountId.HasValue)
                            {
                                var account = await _dbContext.FindAsync<Account>(new object[] { request.SourceAccountId.Value }, ct);
                                if (account == null)
                                    throw new KeyNotFoundException("Source account not found.");

                                account.Debit(request.Amount);
                                transaction.BalanceAfter = account.CurrentBalance;
                            }
                            else if (request.SourceBankId.HasValue)
                            {
                                var bank = await _dbContext.FindAsync<Bank>(new object[] { request.SourceBankId.Value }, ct);
                                if (bank == null)
                                    throw new KeyNotFoundException("Source bank not found.");

                                bank.Debit(request.Amount);
                                transaction.BalanceAfter = bank.CurrentBalance;
                            }
                        }

                        if (recipientType == RecipientType.Agent && request.RecipientId.HasValue)
                        {
                            var agent = await _dbContext.FindAsync<Agent>(new object[] { request.RecipientId.Value }, ct);
                            if (agent != null)
                            {
                                if (agent.Wallet <= 0)
                                {
                                    throw new InvalidOperationException("Cannot withdraw negative balance or zero balance.");
                                }
                                if (request.Amount > agent.Wallet)
                                {
                                    throw new InvalidOperationException($"Withdrawal amount cannot exceed available balance ({agent.Wallet:N3} BHD).");
                                }
                                agent.DebitWallet(request.Amount);
                            }
                        }
                        else if (recipientType == RecipientType.Head && request.RecipientId.HasValue)
                        {
                            if (_salesPortalClient != null)
                            {
                                var head = await _salesPortalClient.GetHeadByIdAsync(request.RecipientId.Value, ct);
                                if (head != null)
                                {
                                    if (head.Wallet <= 0)
                                    {
                                        throw new InvalidOperationException("Cannot withdraw negative balance or zero balance.");
                                    }
                                    if (request.Amount > head.Wallet)
                                    {
                                        throw new InvalidOperationException($"Withdrawal amount cannot exceed available balance ({head.Wallet:N3} BHD).");
                                    }
                                }
                            }

                            var outbox = new OutboxMessage
                            {
                                MessageType = "DebitHeadWallet",
                                AggregateType = "Head",
                                AggregateId = request.RecipientId.Value.ToString(),
                                CorrelationId = Guid.NewGuid().ToString(),
                                Payload = JsonSerializer.Serialize(new { HeadId = request.RecipientId.Value, Amount = request.Amount, Reason = request.Description ?? "Head Wallet Withdrawal" })
                            };
                            _dbContext.Add(outbox);
                        }

                        transaction.Approve(createdBy);
                    }
                    else
                    {
                        // Pre-validate that agent/customer has positive balance before queuing pending request
                        if (recipientType == RecipientType.Agent && request.RecipientId.HasValue)
                        {
                            var agent = await _dbContext.FindAsync<Agent>(new object[] { request.RecipientId.Value }, ct);
                            if (agent != null)
                            {
                                if (agent.Wallet <= 0)
                                {
                                    throw new InvalidOperationException("Cannot withdraw negative balance or zero balance.");
                                }
                                if (request.Amount > agent.Wallet)
                                {
                                    throw new InvalidOperationException($"Withdrawal amount cannot exceed available balance ({agent.Wallet:N3} BHD).");
                                }
                            }
                        }
                        else if (recipientType == RecipientType.Head && request.RecipientId.HasValue)
                        {
                            if (_salesPortalClient != null)
                            {
                                var head = await _salesPortalClient.GetHeadByIdAsync(request.RecipientId.Value, ct);
                                if (head != null)
                                {
                                    if (head.Wallet <= 0)
                                    {
                                        throw new InvalidOperationException("Cannot withdraw negative balance or zero balance.");
                                    }
                                    if (request.Amount > head.Wallet)
                                    {
                                        throw new InvalidOperationException($"Withdrawal amount cannot exceed available balance ({head.Wallet:N3} BHD).");
                                    }
                                }
                            }
                        }
                    }

                    _dbContext.Add(transaction);
                    await _dbContext.SaveChangesAsync(ct);

                    // Create corresponding Expense entity for Head / Wallet Withdrawals so they appear on /payments
                    if (recipientType.HasValue && (recipientType.Value == RecipientType.Agent || recipientType.Value == RecipientType.Head))
                    {
                        var headWithdrawalHeader = await _dbContext.ExpenseHeaders
                            .FirstOrDefaultAsync(h => h.Name == "Head Balance Withdrawal", ct);
                        if (headWithdrawalHeader == null)
                        {
                            headWithdrawalHeader = new ExpenseHeader
                            {
                                Name = "Head Balance Withdrawal",
                                Category = "Contra",
                                Description = "Customer and Agent wallet balance payouts / withdrawals",
                                CreatedAt = DateTime.UtcNow,
                                UpdatedAt = DateTime.UtcNow
                            };
                            _dbContext.Add(headWithdrawalHeader);
                            await _dbContext.SaveChangesAsync(ct);
                        }
                        else if (headWithdrawalHeader.Category != "Contra")
                        {
                            headWithdrawalHeader.Category = "Contra";
                            headWithdrawalHeader.UpdatedAt = DateTime.UtcNow;
                            await _dbContext.SaveChangesAsync(ct);
                        }

                        string expenseNumber;
                        if (_documentNumberGenerator != null)
                        {
                            expenseNumber = await _documentNumberGenerator.GenerateDocumentNumberAsync("TXSEXP", "Seq_ExpenseDocNo", ct);
                        }
                        else
                        {
                            expenseNumber = $"TXSEXP{transaction.Id:D6}";
                        }

                        var expense = Expense.Create(
                            expenseNumber: expenseNumber,
                            expenseCategoryId: headWithdrawalHeader.Id,
                            amount: request.Amount,
                            description: request.Description ?? $"Wallet withdrawal for {recipientType} #{request.RecipientId}",
                            paymentMethod: payMethod,
                            expenseDate: DateTime.UtcNow,
                            correlationId: $"WalletWithdrawal_{transaction.Id}",
                            createdBy: createdBy,
                            currency: "BHD",
                            sourceAccountId: request.SourceAccountId,
                            sourceBankId: request.SourceBankId,
                            notes: !string.IsNullOrWhiteSpace(request.ReferenceId) ? $"Ref/Slip No: {request.ReferenceId.Trim()}" : null
                        );

                        if (isAutoApproved)
                        {
                            expense.Approve(createdBy, transaction.Id);
                        }
                        else
                        {
                            expense.Submit();
                        }

                        _dbContext.Add(expense);
                    }

                    var audit = new AuditLog
                    {
                        ActorUserId = createdBy,
                        Action = isAutoApproved ? "Outgoing Transaction Created & Approved" : "Outgoing Transaction Created (Pending Approval)",
                        EntityType = "FinancialTransaction",
                        EntityId = transaction.Id.ToString(),
                        NewState = JsonSerializer.Serialize(transaction),
                        CorrelationId = Guid.NewGuid().ToString()
                    };
                    _dbContext.Add(audit);

                    await _dbContext.SaveChangesAsync(ct);

                    if (isAutoApproved)
                    {
                        await PostToGlOnApprovalAsync(transaction, ct);
                    }

                    return MapToResponse(transaction);
                }, cancellationToken);
            }, cancellationToken);
        }

        public async Task<TransactionResponse> PostContraTransactionAsync(
            CreateContraTransactionRequest request,
            long createdBy,
            string idempotencyKey,
            CancellationToken cancellationToken)
        {
            var payload = JsonSerializer.Serialize(request);
            return await HandleIdempotentCommandAsync("contra-txn", idempotencyKey, payload, async () =>
            {
                return await _executor.ExecuteInTransactionAsync(async (ct) =>
                {
                    if (request.SourceAccountId == request.DestinationAccountId && request.SourceAccountId.HasValue)
                    {
                        throw new InvalidOperationException("Source and destination accounts cannot be the same.");
                    }
                    if (request.SourceBankId == request.DestinationBankId && request.SourceBankId.HasValue)
                    {
                        throw new InvalidOperationException("Source and destination banks cannot be the same.");
                    }

                    // 1. Load source
                    Account? sourceAccount = null;
                    Bank? sourceBank = null;
                    if (request.SourceAccountId.HasValue)
                    {
                        sourceAccount = await _dbContext.FindAsync<Account>(new object[] { request.SourceAccountId.Value }, ct);
                        if (sourceAccount == null)
                            throw new KeyNotFoundException("Source account not found.");
                    }
                    else if (request.SourceBankId.HasValue)
                    {
                        sourceBank = await _dbContext.FindAsync<Bank>(new object[] { request.SourceBankId.Value }, ct);
                        if (sourceBank == null)
                            throw new KeyNotFoundException("Source bank not found.");
                    }
                    else
                    {
                        throw new InvalidOperationException("Source account or bank is required.");
                    }

                    // 2. Load destination
                    Account? destAccount = null;
                    Bank? destBank = null;
                    if (request.DestinationAccountId.HasValue)
                    {
                        destAccount = await _dbContext.FindAsync<Account>(new object[] { request.DestinationAccountId.Value }, ct);
                        if (destAccount == null)
                            throw new KeyNotFoundException("Destination account not found.");
                    }
                    else if (request.DestinationBankId.HasValue)
                    {
                        destBank = await _dbContext.FindAsync<Bank>(new object[] { request.DestinationBankId.Value }, ct);
                        if (destBank == null)
                            throw new KeyNotFoundException("Destination bank not found.");
                    }
                    else
                    {
                        throw new InvalidOperationException("Destination account or bank is required.");
                    }

                    // Determine user role: Master Accountants auto-approve, Normal Accountants create Pending transactions
                    var user = createdBy > 0 ? await _dbContext.FindAsync<AccountsUser>(new object[] { createdBy }, ct) : null;
                    var isMaster = user == null || user.IsMasterAccountant();
                    var initialStatus = FinancialTransactionStatus.Pending;

                    var pm = request.SourceBankId.HasValue ? PaymentMethod.Bank : PaymentMethod.Cash;

                    // 3. Create transaction
                    var transaction = FinancialTransaction.Create(
                        FinancialTransactionType.Contra,
                        request.Amount,
                        pm,
                        createdBy,
                        sourceAccountId: request.SourceAccountId,
                        sourceBankId: request.SourceBankId,
                        destinationAccountId: request.DestinationAccountId,
                        destinationBankId: request.DestinationBankId,
                        referenceType: TransactionReferenceType.Transfer,
                        description: request.Description ?? "Internal transfer",
                        initialStatus: initialStatus
                    );

                    // 4. Mutate balances only if created by Master Accountant
                    if (isMaster)
                    {
                        if (sourceAccount != null)
                        {
                            sourceAccount.Debit(request.Amount);
                        }
                        else if (sourceBank != null)
                        {
                            sourceBank.Debit(request.Amount);
                        }

                        if (destAccount != null)
                        {
                            destAccount.Credit(request.Amount);
                            transaction.BalanceAfter = destAccount.CurrentBalance;
                        }
                        else if (destBank != null)
                        {
                            destBank.Credit(request.Amount);
                            transaction.BalanceAfter = destBank.CurrentBalance;
                        }

                        transaction.Approve(createdBy);
                    }
                    else
                    {
                        // Validate source has sufficient balance before queueing pending transaction
                        if (sourceAccount != null && !sourceAccount.HasSufficientBalance(request.Amount))
                        {
                            throw new InvalidOperationException("Insufficient balance in source account");
                        }
                        if (sourceBank != null && sourceBank.CurrentBalance < request.Amount)
                        {
                            throw new InvalidOperationException("Insufficient balance in source bank");
                        }
                    }

                    _dbContext.Add(transaction);
                    await _dbContext.SaveChangesAsync(ct);

                    // Create corresponding payment record under "Contra" category header
                    var contraHeader = await _dbContext.ExpenseHeaders
                        .FirstOrDefaultAsync(h => h.Category == "Contra" || h.Name == "Internal Contra Transfer", ct);

                    if (contraHeader == null)
                    {
                        contraHeader = new ExpenseHeader
                        {
                            Name = "Internal Contra Transfer",
                            Category = "Contra",
                            Description = "System category for internal contra transfers",
                            CreatedBy = createdBy,
                            CreatedAt = DateTime.UtcNow
                        };
                        _dbContext.Add(contraHeader);
                        await _dbContext.SaveChangesAsync(ct);
                    }

                    var docNo = _documentNumberGenerator != null
                        ? await _documentNumberGenerator.GenerateDocumentNumberAsync("TXSEXP", "Seq_ExpenseDocNo", ct)
                        : $"TXSEXP{DateTime.UtcNow:yyyyMMddHHmmss}{Random.Shared.Next(100, 999)}";

                    var srcName = sourceAccount != null ? sourceAccount.Name : (sourceBank != null ? sourceBank.BankName : "Cash Account");
                    var destName = destAccount != null ? destAccount.Name : (destBank != null ? destBank.BankName : "Target Account");
                    var contraNarrative = !string.IsNullOrWhiteSpace(request.Description)
                        ? request.Description
                        : $"Internal Contra Transfer: {srcName} -> {destName}";

                    var contraExpense = Expense.Create(
                        expenseNumber: docNo,
                        expenseCategoryId: contraHeader.Id,
                        amount: request.Amount,
                        description: contraNarrative,
                        paymentMethod: pm,
                        expenseDate: DateTime.UtcNow,
                        correlationId: $"ContraTransfer_{transaction.Id}",
                        createdBy: createdBy,
                        currency: "BHD",
                        sourceAccountId: request.SourceAccountId,
                        sourceBankId: request.SourceBankId,
                        notes: $"Contra Transfer #{transaction.Id}: {srcName} -> {destName}"
                    );

                    if (isMaster)
                    {
                        contraExpense.Approve(createdBy, transaction.Id);
                    }
                    else
                    {
                        contraExpense.Submit();
                    }

                    _dbContext.Add(contraExpense);
                    await _dbContext.SaveChangesAsync(ct);

                    if (isMaster)
                    {
                        await PostToGlOnApprovalAsync(transaction, ct);
                        await _ledgerNotificationService.PublishLedgerChangedTargetsAsync(
                            referenceType: ReferenceTypes.InternalTransfer,
                            referenceId: transaction.Id.ToString(),
                            targets: new[] { new LedgerTarget() },
                            cancellationToken: ct);
                    }

                    var audit = new AuditLog
                    {
                        ActorUserId = createdBy,
                        Action = isMaster ? "Contra Transaction Completed" : "Contra Transaction Created (Pending Approval)",
                        EntityType = "FinancialTransaction",
                        EntityId = transaction.Id.ToString(),
                        NewState = JsonSerializer.Serialize(transaction),
                        CorrelationId = Guid.NewGuid().ToString()
                    };
                    _dbContext.Add(audit);

                    await _dbContext.SaveChangesAsync(ct);
                    return MapToResponse(transaction);
                }, cancellationToken);
            }, cancellationToken);
        }

        public async Task<TransactionResponse> ApproveTransactionAsync(
            long transactionId,
            long approvedBy,
            CancellationToken cancellationToken)
        {
            return await _executor.ExecuteInTransactionAsync(async (ct) =>
            {
                var transaction = await _dbContext.FindAsync<FinancialTransaction>(new object[] { transactionId }, ct);
                if (transaction == null)
                    throw new KeyNotFoundException("Transaction not found.");

                if (transaction.Status != FinancialTransactionStatus.Pending)
                {
                    await ((Microsoft.EntityFrameworkCore.DbContext)_dbContext).Entry(transaction).ReloadAsync(ct);
                }

                if (transaction.Status != FinancialTransactionStatus.Pending)
                    throw new InvalidOperationException("Only pending transactions can be approved.");

                var oldState = JsonSerializer.Serialize(transaction);

                // Perform balance updates based on type
                if (transaction.TransactionType == FinancialTransactionType.Incoming)
                {
                    if (transaction.DestinationAccountId.HasValue)
                    {
                        var account = await _dbContext.FindAsync<Account>(new object[] { transaction.DestinationAccountId.Value }, ct);
                        if (account == null)
                            throw new KeyNotFoundException("Destination account not found.");

                        account.Credit(transaction.Amount);
                        transaction.BalanceAfter = account.CurrentBalance;
                    }
                    else if (transaction.DestinationBankId.HasValue)
                    {
                        var bank = await _dbContext.FindAsync<Bank>(new object[] { transaction.DestinationBankId.Value }, ct);
                        if (bank == null)
                            throw new KeyNotFoundException("Destination bank not found.");

                        bank.Credit(transaction.Amount);
                        transaction.BalanceAfter = bank.CurrentBalance;
                    }

                    if (transaction.RecipientType == RecipientType.Agent && transaction.RecipientId.HasValue
                        && !IsServiceBookingReferenceType(transaction.ReferenceType?.ToString()))
                    {
                        var agent = await _dbContext.FindAsync<Agent>(new object[] { transaction.RecipientId.Value }, ct);
                        if (agent != null)
                        {
                            agent.CreditWallet(transaction.Amount);
                        }
                    }
                    else if (transaction.RecipientType == RecipientType.Head && transaction.RecipientId.HasValue
                        && !IsServiceBookingReferenceType(transaction.ReferenceType?.ToString())
                        && !string.Equals(transaction.ReferenceType?.ToString(), "receipt", StringComparison.OrdinalIgnoreCase)
                        && !string.Equals(transaction.ReferenceType?.ToString(), "wallet_deposit", StringComparison.OrdinalIgnoreCase))
                    {
                        var outbox = new OutboxMessage
                        {
                            MessageType = "CreditHeadWallet",
                            AggregateType = "Head",
                            AggregateId = transaction.RecipientId.Value.ToString(),
                            CorrelationId = Guid.NewGuid().ToString(),
                            Payload = JsonSerializer.Serialize(new { HeadId = transaction.RecipientId.Value, Amount = transaction.Amount, Reason = transaction.Description ?? "Incoming Deposit" })
                        };
                        _dbContext.Add(outbox);
                    }
                }
                else if (transaction.TransactionType == FinancialTransactionType.Outgoing)
                {
                    if (transaction.PaymentMethod == PaymentMethod.Credit)
                    {
                        if (!transaction.SupplierId.HasValue)
                            throw new InvalidOperationException("Supplier ID is required for credit payments.");

                        var supplier = await _dbContext.FindAsync<Supplier>(new object[] { transaction.SupplierId.Value }, ct);
                        if (supplier == null)
                            throw new KeyNotFoundException("Supplier not found.");

                        supplier.DebitWallet(transaction.Amount);
                    }
                    else
                    {
                        if (transaction.SourceAccountId.HasValue)
                        {
                            var account = await _dbContext.FindAsync<Account>(new object[] { transaction.SourceAccountId.Value }, ct);
                            if (account == null)
                                throw new KeyNotFoundException("Source account not found.");

                            account.Debit(transaction.Amount);
                            transaction.BalanceAfter = account.CurrentBalance;
                        }
                        else if (transaction.SourceBankId.HasValue)
                        {
                            var bank = await _dbContext.FindAsync<Bank>(new object[] { transaction.SourceBankId.Value }, ct);
                            if (bank == null)
                                throw new KeyNotFoundException("Source bank not found.");

                            bank.Debit(transaction.Amount);
                            transaction.BalanceAfter = bank.CurrentBalance;
                        }
                    }

                    if (transaction.RecipientType == RecipientType.Agent && transaction.RecipientId.HasValue)
                    {
                        var agent = await _dbContext.FindAsync<Agent>(new object[] { transaction.RecipientId.Value }, ct);
                        if (agent != null)
                        {
                            if (agent.Wallet <= 0)
                            {
                                throw new InvalidOperationException("Cannot withdraw negative balance or zero balance.");
                            }
                            if (transaction.Amount > agent.Wallet)
                            {
                                throw new InvalidOperationException($"Withdrawal amount cannot exceed available balance ({agent.Wallet:N3} BHD).");
                            }
                            agent.DebitWallet(transaction.Amount);
                        }
                    }
                    else if (transaction.RecipientType == RecipientType.Head && transaction.RecipientId.HasValue)
                    {
                        var outbox = new OutboxMessage
                        {
                            MessageType = "DebitHeadWallet",
                            AggregateType = "Head",
                            AggregateId = transaction.RecipientId.Value.ToString(),
                            CorrelationId = Guid.NewGuid().ToString(),
                            Payload = JsonSerializer.Serialize(new { HeadId = transaction.RecipientId.Value, Amount = transaction.Amount, Reason = transaction.Description ?? "Head Wallet Withdrawal" })
                        };
                        _dbContext.Add(outbox);
                    }
                    else if (transaction.SupplierId.HasValue)
                    {
                        var supplier = await _dbContext.FindAsync<Supplier>(new object[] { transaction.SupplierId.Value }, ct);
                        if (supplier != null)
                        {
                            supplier.CreditWallet(transaction.Amount);
                        }
                    }

                    // Also approve any linked Expense/Payment entity
                    var linkedExpense = await _dbContext.Expenses.FirstOrDefaultAsync(e => e.CorrelationId == $"WalletWithdrawal_{transaction.Id}", ct);
                    if (linkedExpense != null && linkedExpense.Status == ExpenseStatus.PendingApproval)
                    {
                        linkedExpense.Approve(approvedBy, transaction.Id);
                    }
                }
                else if (transaction.TransactionType == FinancialTransactionType.Contra)
                {
                    if (transaction.SourceAccountId.HasValue)
                    {
                        var sourceAccount = await _dbContext.FindAsync<Account>(new object[] { transaction.SourceAccountId.Value }, ct);
                        if (sourceAccount == null)
                            throw new KeyNotFoundException("Source account not found.");
                        sourceAccount.Debit(transaction.Amount);
                    }
                    else if (transaction.SourceBankId.HasValue)
                    {
                        var sourceBank = await _dbContext.FindAsync<Bank>(new object[] { transaction.SourceBankId.Value }, ct);
                        if (sourceBank == null)
                            throw new KeyNotFoundException("Source bank not found.");
                        sourceBank.Debit(transaction.Amount);
                    }

                    if (transaction.DestinationAccountId.HasValue)
                    {
                        var destAccount = await _dbContext.FindAsync<Account>(new object[] { transaction.DestinationAccountId.Value }, ct);
                        if (destAccount == null)
                            throw new KeyNotFoundException("Destination account not found.");
                        destAccount.Credit(transaction.Amount);
                        transaction.BalanceAfter = destAccount.CurrentBalance;
                    }
                    else if (transaction.DestinationBankId.HasValue)
                    {
                        var destBank = await _dbContext.FindAsync<Bank>(new object[] { transaction.DestinationBankId.Value }, ct);
                        if (destBank == null)
                            throw new KeyNotFoundException("Destination bank not found.");
                        destBank.Credit(transaction.Amount);
                        transaction.BalanceAfter = destBank.CurrentBalance;
                    }

                    // Also approve any linked Expense entity
                    var linkedContraExpense = await _dbContext.Expenses.FirstOrDefaultAsync(e =>
                        e.CorrelationId == $"ContraTransfer_{transaction.Id}" ||
                        (e.Notes != null && e.Notes.Contains($"Contra Transfer #{transaction.Id}")), ct);
                    if (linkedContraExpense != null && (linkedContraExpense.Status == ExpenseStatus.PendingApproval || linkedContraExpense.Status == ExpenseStatus.Draft))
                    {
                        linkedContraExpense.Approve(approvedBy, transaction.Id);
                    }

                    await _ledgerNotificationService.PublishLedgerChangedTargetsAsync(
                        referenceType: ReferenceTypes.InternalTransfer,
                        referenceId: transaction.Id.ToString(),
                        targets: new[] { new LedgerTarget() },
                        cancellationToken: ct);
                }
                else if (transaction.TransactionType == FinancialTransactionType.SalesReturn)
                {
                    if (transaction.SourceAccountId.HasValue)
                    {
                        var account = await _dbContext.FindAsync<Account>(new object[] { transaction.SourceAccountId.Value }, ct);
                        if (account == null)
                            throw new KeyNotFoundException("Source account not found.");

                        account.Debit(transaction.Amount);
                        transaction.BalanceAfter = account.CurrentBalance;
                    }
                    else if (transaction.SourceBankId.HasValue)
                    {
                        var bank = await _dbContext.FindAsync<Bank>(new object[] { transaction.SourceBankId.Value }, ct);
                        if (bank == null)
                            throw new KeyNotFoundException("Source bank not found.");

                        bank.Debit(transaction.Amount);
                        transaction.BalanceAfter = bank.CurrentBalance;
                    }

                    if (transaction.RecipientType == RecipientType.Agent && transaction.RecipientId.HasValue)
                    {
                        var agent = await _dbContext.FindAsync<Agent>(new object[] { transaction.RecipientId.Value }, ct);
                        if (agent != null)
                        {
                            agent.CreditWallet(transaction.Amount);
                        }
                        else
                        {
                            var outbox = new OutboxMessage
                            {
                                MessageType = "CreditHeadWallet",
                                AggregateType = "Agent",
                                AggregateId = transaction.RecipientId.Value.ToString(),
                                CorrelationId = Guid.NewGuid().ToString(),
                                Payload = JsonSerializer.Serialize(new { HeadId = transaction.RecipientId.Value, Amount = transaction.Amount, Reason = transaction.ReturnReason ?? "Sales Return" })
                            };
                            _dbContext.Add(outbox);
                        }
                    }
                    else if (transaction.RecipientType == RecipientType.Head && transaction.RecipientId.HasValue)
                    {
                        var outbox = new OutboxMessage
                        {
                            MessageType = "CreditHeadWallet",
                            AggregateType = "Head",
                            AggregateId = transaction.RecipientId.Value.ToString(),
                            CorrelationId = Guid.NewGuid().ToString(),
                            Payload = JsonSerializer.Serialize(new { HeadId = transaction.RecipientId.Value, Amount = transaction.Amount, Reason = transaction.ReturnReason ?? "Sales Return" })
                        };
                        _dbContext.Add(outbox);
                    }
                }

                transaction.Approve(approvedBy);

                if (transaction.ReferenceType.HasValue && !string.IsNullOrEmpty(transaction.ReferenceId))
                {
                    var syncOutbox = new OutboxMessage
                    {
                        MessageType = "SupplierCostSync_Obsolete",
                        AggregateType = "Transaction",
                        AggregateId = transaction.Id.ToString(),
                        CorrelationId = Guid.NewGuid().ToString(),
                        Payload = JsonSerializer.Serialize(new { ReferenceType = transaction.ReferenceType.Value.ToString().ToLower(), ReferenceId = transaction.ReferenceId })
                    };
                    _dbContext.Add(syncOutbox);
                }

                await PostToGlOnApprovalAsync(transaction, ct);

                var audit = new AuditLog
                {
                    ActorUserId = approvedBy,
                    Action = "Transaction Approved",
                    EntityType = "FinancialTransaction",
                    EntityId = transaction.Id.ToString(),
                    OldState = oldState,
                    NewState = JsonSerializer.Serialize(transaction),
                    CorrelationId = Guid.NewGuid().ToString()
                };
                _dbContext.Add(audit);

                await _dbContext.SaveChangesAsync(ct);
                return MapToResponse(transaction);
            }, cancellationToken);
        }

        public async Task<TransactionResponse> RejectTransactionAsync(
            long transactionId,
            long rejectedBy,
            string? reason,
            CancellationToken cancellationToken)
        {
            return await _executor.ExecuteInTransactionAsync(async (ct) =>
            {
                var transaction = await _dbContext.FindAsync<FinancialTransaction>(new object[] { transactionId }, ct);
                if (transaction == null)
                    throw new KeyNotFoundException("Transaction not found.");

                if (transaction.Status != FinancialTransactionStatus.Pending)
                    throw new InvalidOperationException("Only pending transactions can be rejected.");

                var oldState = JsonSerializer.Serialize(transaction);

                transaction.Reject(rejectedBy, reason);

                // Also reject any linked Expense/Payment entity
                var linkedExpense = await _dbContext.Expenses.FirstOrDefaultAsync(e =>
                    e.CorrelationId == $"WalletWithdrawal_{transaction.Id}" ||
                    e.CorrelationId == $"ContraTransfer_{transaction.Id}" ||
                    (e.Notes != null && e.Notes.Contains($"Contra Transfer #{transaction.Id}")) ||
                    (transaction.TransactionType == FinancialTransactionType.Contra && (e.CorrelationId == "ContraTransfer_0" || e.CorrelationId == $"ContraTransfer_{transaction.Id}") && e.Amount == transaction.Amount && (e.Status == ExpenseStatus.PendingApproval || e.Status == ExpenseStatus.Draft)) ||
                    (transaction.TransactionType == FinancialTransactionType.Outgoing && (e.CorrelationId == "WalletWithdrawal_0" || e.CorrelationId == $"WalletWithdrawal_{transaction.Id}") && e.Amount == transaction.Amount && (e.Status == ExpenseStatus.PendingApproval || e.Status == ExpenseStatus.Draft)), ct);
                if (linkedExpense != null && (linkedExpense.Status == ExpenseStatus.PendingApproval || linkedExpense.Status == ExpenseStatus.Draft))
                {
                    linkedExpense.Reject(rejectedBy, reason ?? "Rejected by Master Accountant");
                }

                if (transaction.ReferenceType.HasValue && !string.IsNullOrEmpty(transaction.ReferenceId))
                {
                    var syncOutbox = new OutboxMessage
                    {
                        MessageType = "SupplierCostSync_Obsolete",
                        AggregateType = "Transaction",
                        AggregateId = transaction.Id.ToString(),
                        CorrelationId = Guid.NewGuid().ToString(),
                        Payload = JsonSerializer.Serialize(new { ReferenceType = transaction.ReferenceType.Value.ToString().ToLower(), ReferenceId = transaction.ReferenceId })
                    };
                    _dbContext.Add(syncOutbox);
                }

                var audit = new AuditLog
                {
                    ActorUserId = rejectedBy,
                    Action = "Transaction Rejected",
                    EntityType = "FinancialTransaction",
                    EntityId = transaction.Id.ToString(),
                    OldState = oldState,
                    NewState = JsonSerializer.Serialize(transaction),
                    CorrelationId = Guid.NewGuid().ToString()
                };
                _dbContext.Add(audit);

                await _dbContext.SaveChangesAsync(ct);
                return MapToResponse(transaction);
            }, cancellationToken);
        }

        public async Task<decimal> PostBalanceCorrectionAsync(
            long accountId,
            decimal adjustmentAmount,
            string reason,
            long editedBy,
            string idempotencyKey,
            CancellationToken cancellationToken)
        {
            var payload = JsonSerializer.Serialize(new { AccountId = accountId, Adjustment = adjustmentAmount, Reason = reason });
            return await HandleIdempotentCommandAsync("balance-correction", idempotencyKey, payload, async () =>
            {
                return await _executor.ExecuteInTransactionAsync(async (ct) =>
                {
                    var account = await _dbContext.FindAsync<Account>(new object[] { accountId }, ct);
                    if (account == null)
                        throw new KeyNotFoundException("Account not found.");

                    var oldState = JsonSerializer.Serialize(account);
                    account.ApplyBalanceCorrection(adjustmentAmount);

                    var correction = new BalanceCorrection
                    {
                        AccountId = accountId,
                        Amount = adjustmentAmount,
                        BalanceAfter = account.CurrentBalance,
                        Reason = reason,
                        EditedBy = editedBy,
                        CreatedAt = DateTime.UtcNow,
                        UpdatedAt = DateTime.UtcNow
                    };

                    _dbContext.Add(correction);

                    var audit = new AuditLog
                    {
                        ActorUserId = editedBy,
                        Action = "Balance Correction Applied",
                        EntityType = "Account",
                        EntityId = accountId.ToString(),
                        OldState = oldState,
                        NewState = JsonSerializer.Serialize(account),
                        Reason = reason,
                        CorrelationId = Guid.NewGuid().ToString()
                    };
                    _dbContext.Add(audit);

                    await _dbContext.SaveChangesAsync(ct);
                    return account.CurrentBalance;
                }, cancellationToken);
            }, cancellationToken);
        }

        private async Task<TResult> HandleIdempotentCommandAsync<TResult>(
            string scope,
            string key,
            string payload,
            Func<Task<TResult>> action,
            CancellationToken cancellationToken)
        {
            if (string.IsNullOrEmpty(key))
            {
                return await action();
            }

            var requestHash = ComputeHash(payload);
            var id = $"{scope}:{key}";

            var record = await _recoveryStore.GetRecordAsync(id, cancellationToken);

            if (record != null)
            {
                if (record.Status == "completed")
                {
                    if (record.RequestHash != requestHash)
                    {
                        throw new InvalidOperationException("An idempotency key with a different payload already exists.");
                    }

                    if (typeof(TResult) == typeof(decimal))
                    {
                        return (TResult)(object)decimal.Parse(record.ResponseBody ?? "0");
                    }

                    return JsonSerializer.Deserialize<TResult>(record.ResponseBody ?? "{}")!;
                }

                if (record.CreatedAt < DateTime.UtcNow.AddSeconds(-30))
                {
                    await _recoveryStore.RemovePendingRecordAsync(id, cancellationToken);
                }
                else
                {
                    throw new InvalidOperationException("A duplicate request is already in progress. Please wait a few seconds and try again.");
                }
            }

            await _recoveryStore.CreatePendingRecordAsync(id, scope, key, requestHash, payload, cancellationToken);

            try
            {
                var result = await action();

                var responseBody = JsonSerializer.Serialize(result);
                await _recoveryStore.CompleteRecordAsync(id, 200, responseBody, cancellationToken);

                return result;
            }
            catch
            {
                try
                {
                    await _recoveryStore.RemovePendingRecordAsync(id, cancellationToken);
                }
                catch
                {
                    // Suppress nested exceptions to preserve original error
                }
                throw;
            }
        }

        private static string ComputeHash(string payload)
        {
            using var sha256 = System.Security.Cryptography.SHA256.Create();
            var bytes = sha256.ComputeHash(System.Text.Encoding.UTF8.GetBytes(payload));
            return Convert.ToHexString(bytes);
        }

        private TransactionResponse MapToResponse(FinancialTransaction t)
        {
            if (_presentationMapper != null)
            {
                return _presentationMapper.MapToResponseAsync(t, includeGl: false).GetAwaiter().GetResult();
            }

            var docNum = !string.IsNullOrWhiteSpace(t.DocumentNumber) && !t.DocumentNumber.StartsWith("TXSTRN-")
                ? t.DocumentNumber
                : $"TXSTRN{t.Id:D6}";

            var cleanDesc = !string.IsNullOrWhiteSpace(t.Description)
                ? System.Text.RegularExpressions.Regex.Replace(t.Description.Trim(), @"#\s*(TX\w+)", "$1", System.Text.RegularExpressions.RegexOptions.IgnoreCase)
                : null;

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
                t.ReferenceType?.ToString().ToLower(),
                t.ReferenceId,
                cleanDesc ?? t.Description,
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
                DocumentNumber: docNum,
                DisplayDescription: cleanDesc ?? t.Description,
                DisplayRecipientName: t.RecipientType == RecipientType.Supplier ? t.SupplierName : null
            );
        }

        public async Task<SupplierPaymentResponse> PostSupplierPaymentAsync(
            CreateSupplierPaymentRequest request,
            long createdBy,
            string idempotencyKey,
            CancellationToken cancellationToken)
        {
            var payload = JsonSerializer.Serialize(request);
            return await HandleIdempotentCommandAsync("supplier-payment", idempotencyKey, payload, async () =>
            {
                return await _executor.ExecuteInTransactionAsync(async (ct) =>
                {
                    var completed = await _dbContext.SupplierPaymentStatuses
                        .AnyAsync(s => s.ServiceType == request.ServiceType && s.ServiceId == request.ExternalReference && s.IsCompleted, ct);
                    if (completed)
                        throw new InvalidOperationException("This service has been marked as completed.");

                    var supplier = await _dbContext.FindAsync<Supplier>(new object[] { request.SupplierId }, ct);
                    if (supplier == null)
                        throw new KeyNotFoundException("Supplier not found.");

                    var user = await _dbContext.FindAsync<AccountsUser>(new object[] { createdBy }, ct);
                    if (user == null)
                        throw new KeyNotFoundException("User not found.");

                    if (!Enum.TryParse<PaymentMethod>(request.PaymentMethod, true, out var payMethod))
                    {
                        payMethod = PaymentMethod.BankTransfer;
                    }

                    long? sourceBankId = null;
                    long? sourceAccountId = null;
                    string? sourceType = null;

                    if (payMethod != PaymentMethod.Credit && !string.IsNullOrEmpty(request.SourceAccountId))
                    {
                        if (request.SourceAccountId.StartsWith("bank_", StringComparison.OrdinalIgnoreCase))
                        {
                            var bankIdStr = request.SourceAccountId.Substring(5);
                            if (long.TryParse(bankIdStr, out var bankId))
                            {
                                sourceBankId = bankId;
                                sourceType = "bank";
                            }
                        }
                        else if (request.SourceAccountId.StartsWith("account_", StringComparison.OrdinalIgnoreCase))
                        {
                            var accIdStr = request.SourceAccountId.Substring(8);
                            if (long.TryParse(accIdStr, out var accId))
                            {
                                sourceAccountId = accId;
                                sourceType = "account";
                            }
                        }
                    }

                    var correlationId = Guid.NewGuid().ToString();
                    var status = user.IsMasterAccountant() ? FinancialTransactionStatus.Approved : FinancialTransactionStatus.Pending;

                    var payment = SupplierPayment.Create(
                        request.SupplierId,
                        request.Amount,
                        payMethod,
                        createdBy,
                        sourceBankId,
                        sourceAccountId,
                        sourceType,
                        request.ReferenceNumber,
                        request.ExternalReference,
                        Domain.Services.TransactionReferenceTypeParser.Normalize(request.ServiceType)?.ToString() ?? request.ServiceType,
                        request.Description,
                        correlationId,
                        FinancialTransactionStatus.Pending
                    );

                    _dbContext.Add(payment);

                    if (status == FinancialTransactionStatus.Approved)
                    {
                        payment.Approve(createdBy);

                        if (request.Amount > 0)
                        {
                            if (payMethod == PaymentMethod.Credit)
                            {
                                supplier.DebitWallet(request.Amount);
                            }
                            else
                            {
                                if (sourceBankId.HasValue)
                                {
                                    var bank = await _dbContext.FindAsync<Bank>(new object[] { sourceBankId.Value }, ct);
                                    if (bank == null)
                                        throw new KeyNotFoundException("Source bank not found.");
                                    if (bank.CurrentBalance < request.Amount)
                                        throw new InvalidOperationException("Insufficient balance in source bank");
                                    bank.Debit(request.Amount);
                                }
                                else if (sourceAccountId.HasValue)
                                {
                                    var account = await _dbContext.FindAsync<Account>(new object[] { sourceAccountId.Value }, ct);
                                    if (account == null)
                                        throw new KeyNotFoundException("Source account not found.");
                                    if (!account.HasSufficientBalance(request.Amount))
                                        throw new InvalidOperationException("Insufficient balance in source account");
                                    account.Debit(request.Amount);
                                }

                                supplier.CreditWallet(request.Amount);
                            }

                            if (!TransactionReferenceTypeParser.TryParse(Domain.Services.TransactionReferenceTypeParser.Normalize(request.ServiceType)?.ToString() ?? request.ServiceType, out var refType))
                            {
                                refType = TransactionReferenceType.SupplierPayment;
                            }

                            var tx = FinancialTransaction.Create(
                                FinancialTransactionType.Outgoing,
                                request.Amount,
                                payMethod,
                                createdBy,
                                sourceAccountId: sourceAccountId,
                                sourceBankId: sourceBankId,
                                referenceType: refType,
                                referenceId: request.ExternalReference,
                                description: request.Description,
                                supplierId: request.SupplierId,
                                supplierName: request.SupplierName,
                                initialStatus: FinancialTransactionStatus.Pending
                            );
                            tx.Approve(createdBy);
                            if (sourceBankId.HasValue)
                            {
                                var bankObj = await _dbContext.FindAsync<Bank>(new object[] { sourceBankId.Value }, ct);
                                if (bankObj != null) tx.BalanceAfter = bankObj.CurrentBalance;
                            }
                            else if (sourceAccountId.HasValue)
                            {
                                var accObj = await _dbContext.FindAsync<Account>(new object[] { sourceAccountId.Value }, ct);
                                if (accObj != null) tx.BalanceAfter = accObj.CurrentBalance;
                            }
                            _dbContext.Add(tx);
                        }

                        var syncPayload = new
                        {
                            ReferenceType = Domain.Services.TransactionReferenceTypeParser.Normalize(request.ServiceType)?.ToString() ?? request.ServiceType,
                            ReferenceId = request.ExternalReference
                        };
                        var outbox = new OutboxMessage
                        {
                            MessageType = "SupplierCostSync_Obsolete",
                            AggregateType = "SupplierPayment",
                            AggregateId = payment.Id.ToString(),
                            Payload = JsonSerializer.Serialize(syncPayload),
                            Status = "pending",
                            CorrelationId = correlationId,
                            AvailableAt = DateTime.UtcNow
                        };
                        _dbContext.Add(outbox);
                    }

                    var audit = new AuditLog
                    {
                        ActorUserId = createdBy,
                        Action = status == FinancialTransactionStatus.Approved ? "supplier_payment.approved" : "supplier_payment.created",
                        EntityType = "SupplierPayment",
                        EntityId = payment.Id.ToString(),
                        NewState = JsonSerializer.Serialize(payment),
                        CorrelationId = correlationId
                    };
                    _dbContext.Add(audit);

                    await _dbContext.SaveChangesAsync(ct);
                    return MapToPaymentResponse(payment);
                }, cancellationToken);
            }, cancellationToken);
        }

        public async Task<SupplierPaymentResponse> ApproveSupplierPaymentAsync(
            long paymentId,
            long approvedBy,
            CancellationToken cancellationToken)
        {
            return await _executor.ExecuteInTransactionAsync(async (ct) =>
            {
                var payment = await _dbContext.SupplierPayments.FirstOrDefaultAsync(p => p.Id == paymentId, ct);
                if (payment == null)
                    throw new KeyNotFoundException("Supplier payment not found.");

                if (payment.Status != FinancialTransactionStatus.Pending)
                    throw new InvalidOperationException("Only pending supplier payments can be approved");

                var supplier = await _dbContext.FindAsync<Supplier>(new object[] { payment.SupplierId }, ct);
                if (supplier == null)
                    throw new KeyNotFoundException("Supplier not found.");

                if (payment.PaymentMethod == PaymentMethod.Credit || payment.PaymentMethod == PaymentMethod.Wallet)
                {
                    supplier.DebitWallet(payment.Amount);
                }
                else
                {
                    if (payment.SourceBankId.HasValue)
                    {
                        var bank = await _dbContext.FindAsync<Bank>(new object[] { payment.SourceBankId.Value }, ct);
                        if (bank == null)
                            throw new KeyNotFoundException("Source bank not found.");
                        if (bank.CurrentBalance < payment.Amount)
                            throw new InvalidOperationException("Insufficient balance in source bank");
                        bank.Debit(payment.Amount);
                    }
                    else if (payment.SourceAccountId.HasValue)
                    {
                        var account = await _dbContext.FindAsync<Account>(new object[] { payment.SourceAccountId.Value }, ct);
                        if (account == null)
                            throw new KeyNotFoundException("Source account not found.");
                        if (!account.HasSufficientBalance(payment.Amount))
                            throw new InvalidOperationException("Insufficient balance in source account");
                        account.Debit(payment.Amount);
                    }

                    supplier.CreditWallet(payment.Amount);
                }

                payment.Approve(approvedBy);

                if (!TransactionReferenceTypeParser.TryParse(payment.ServiceType, out var refType))
                {
                    refType = TransactionReferenceType.SupplierPayment;
                }

                var tx = FinancialTransaction.Create(
                    FinancialTransactionType.Outgoing,
                    payment.Amount,
                    payment.PaymentMethod,
                    payment.RequestedByUserId,
                    sourceAccountId: payment.SourceAccountId,
                    sourceBankId: payment.SourceBankId,
                    referenceType: refType,
                    referenceId: payment.ExternalReference,
                    description: payment.Description,
                    supplierId: payment.SupplierId,
                    supplierName: supplier.Name,
                    initialStatus: FinancialTransactionStatus.Pending
                );
                tx.Approve(approvedBy);
                if (payment.SourceBankId.HasValue)
                {
                    var bankObj = await _dbContext.FindAsync<Bank>(new object[] { payment.SourceBankId.Value }, ct);
                    if (bankObj != null) tx.BalanceAfter = bankObj.CurrentBalance;
                }
                else if (payment.SourceAccountId.HasValue)
                {
                    var accObj = await _dbContext.FindAsync<Account>(new object[] { payment.SourceAccountId.Value }, ct);
                    if (accObj != null) tx.BalanceAfter = accObj.CurrentBalance;
                }
                _dbContext.Add(tx);

                var syncPayload = new
                {
                    ReferenceType = payment.ServiceType,
                    ReferenceId = payment.ExternalReference
                };
                var outbox = new OutboxMessage
                {
                    MessageType = "SupplierCostSync_Obsolete",
                    AggregateType = "SupplierPayment",
                    AggregateId = payment.Id.ToString(),
                    Payload = JsonSerializer.Serialize(syncPayload),
                    Status = "pending",
                    CorrelationId = payment.CorrelationId ?? string.Empty,
                    AvailableAt = DateTime.UtcNow
                };
                _dbContext.Add(outbox);

                await PostToGlOnApprovalAsync(tx, ct);

                var audit = new AuditLog
                {
                    ActorUserId = approvedBy,
                    Action = "supplier_payment.approved",
                    EntityType = "SupplierPayment",
                    EntityId = payment.Id.ToString(),
                    NewState = JsonSerializer.Serialize(payment),
                    CorrelationId = payment.CorrelationId ?? string.Empty
                };
                _dbContext.Add(audit);

                await _dbContext.SaveChangesAsync(ct);
                return MapToPaymentResponse(payment);
            }, cancellationToken);
        }

        public async Task<SupplierPaymentResponse> RejectSupplierPaymentAsync(
            long paymentId,
            long rejectedBy,
            string? reason,
            CancellationToken cancellationToken)
        {
            return await _executor.ExecuteInTransactionAsync(async (ct) =>
            {
                var payment = await _dbContext.SupplierPayments.FirstOrDefaultAsync(p => p.Id == paymentId, ct);
                if (payment == null)
                    throw new KeyNotFoundException("Supplier payment not found.");

                if (payment.Status != FinancialTransactionStatus.Pending)
                    throw new InvalidOperationException("Only pending supplier payments can be rejected");

                payment.Reject(rejectedBy, reason);

                var audit = new AuditLog
                {
                    ActorUserId = rejectedBy,
                    Action = "supplier_payment.rejected",
                    EntityType = "SupplierPayment",
                    EntityId = payment.Id.ToString(),
                    NewState = JsonSerializer.Serialize(payment),
                    CorrelationId = payment.CorrelationId ?? string.Empty
                };
                _dbContext.Add(audit);

                await _dbContext.SaveChangesAsync(ct);
                return MapToPaymentResponse(payment);
            }, cancellationToken);
        }

        public async Task<PurchaseReturnResponse> PostPurchaseReturnAsync(
            CreatePurchaseReturnRequest request,
            long createdBy,
            string idempotencyKey,
            CancellationToken cancellationToken)
        {
            var payload = JsonSerializer.Serialize(request);
            return await HandleIdempotentCommandAsync("purchase-return", idempotencyKey, payload, async () =>
            {
                return await _executor.ExecuteInTransactionAsync(async (ct) =>
                {
                    var supplier = await _dbContext.FindAsync<Supplier>(new object[] { request.SupplierId }, ct);
                    if (supplier == null)
                        throw new KeyNotFoundException("Supplier not found.");

                    var user = await _dbContext.FindAsync<AccountsUser>(new object[] { createdBy }, ct);
                    if (user == null)
                        throw new KeyNotFoundException("User not found.");

                    if (!TransactionReferenceTypeParser.TryParse(Domain.Services.TransactionReferenceTypeParser.Normalize(request.ServiceType)?.ToString() ?? request.ServiceType, out var refType))
                    {
                        refType = TransactionReferenceType.SupplierPayment;
                    }

                    var digitsOnlyPr = System.Text.RegularExpressions.Regex.Match(request.OriginalPurchaseReference ?? "", @"\d+").Value;

                    var totalApproved = await GetTotalApprovedSupplierPaymentsAsync(Domain.Services.TransactionReferenceTypeParser.Normalize(request.ServiceType)?.ToString() ?? request.ServiceType, request.OriginalPurchaseReference, ct);

                    if (totalApproved <= 0)
                        throw new InvalidOperationException("Purchase Return Forbidden: You must process and approve at least one supplier payment before recording a return.");

                    var totalPurchaseReturns = await GetTotalApprovedPurchaseReturnsAsync(Domain.Services.TransactionReferenceTypeParser.Normalize(request.ServiceType)?.ToString() ?? request.ServiceType, request.OriginalPurchaseReference, ct);

                    var maxReturnable = totalApproved - totalPurchaseReturns;
                    if (request.Amount > maxReturnable + 0.001m)
                        throw new InvalidOperationException($"Purchase Return Forbidden: Return amount ({request.Amount:N3}) exceeds total approved payments ({maxReturnable:N3}).");

                    // Purchase returns are wallet-only going forward
                    if (string.Equals(request.DestinationType, "bank", StringComparison.OrdinalIgnoreCase) ||
                        string.Equals(request.DestinationType, "account", StringComparison.OrdinalIgnoreCase) ||
                        string.Equals(request.DestinationType, "cash", StringComparison.OrdinalIgnoreCase) ||
                        request.DestinationId?.StartsWith("bank_", StringComparison.OrdinalIgnoreCase) == true ||
                        request.DestinationId?.StartsWith("account_", StringComparison.OrdinalIgnoreCase) == true)
                    {
                        throw new InvalidOperationException("Purchase returns are credited to the supplier wallet.");
                    }

                    long? destBankId = null;
                    long? destAccountId = null;
                    string destType = "supplier_wallet";

                    var correlationId = Guid.NewGuid().ToString();
                    var status = user.IsMasterAccountant() ? FinancialTransactionStatus.Approved : FinancialTransactionStatus.Pending;

                    var purchaseReturn = PurchaseReturn.Create(
                        request.SupplierId,
                        request.OriginalPurchaseReference,
                        request.Amount,
                        request.Reason,
                        createdBy,
                        destType,
                        destBankId,
                        destAccountId,
                        Domain.Services.TransactionReferenceTypeParser.Normalize(request.ServiceType)?.ToString() ?? request.ServiceType,
                        request.OriginalPurchaseReference,
                        correlationId,
                        FinancialTransactionStatus.Pending
                    );

                    _dbContext.Add(purchaseReturn);

                    if (status == FinancialTransactionStatus.Approved)
                    {
                        purchaseReturn.Approve(createdBy);

                        if (request.DestinationType.Equals("supplier_wallet", StringComparison.OrdinalIgnoreCase))
                        {
                            supplier.CreditWallet(request.Amount);
                        }
                        else if (destBankId.HasValue)
                        {
                            var bank = await _dbContext.FindAsync<Bank>(new object[] { destBankId.Value }, ct);
                            if (bank == null)
                                throw new KeyNotFoundException("Destination bank not found.");
                            bank.Credit(request.Amount);
                        }
                        else if (destAccountId.HasValue)
                        {
                            var account = await _dbContext.FindAsync<Account>(new object[] { destAccountId.Value }, ct);
                            if (account == null)
                                throw new KeyNotFoundException("Destination account not found.");
                            account.Credit(request.Amount);
                        }

                        var tx = FinancialTransaction.Create(
                            FinancialTransactionType.PurchaseReturn,
                            request.Amount,
                            PaymentMethod.BankTransfer,
                            createdBy,
                            destinationAccountId: destAccountId,
                            destinationBankId: destBankId,
                            referenceType: refType,
                            referenceId: request.OriginalPurchaseReference,
                            description: "Purchase Return: " + request.Reason,
                            supplierId: request.SupplierId,
                            supplierName: request.SupplierName,
                            recipientType: RecipientType.Supplier,
                            recipientId: request.SupplierId,
                            initialStatus: FinancialTransactionStatus.Pending
                        );
                        tx.Approve(createdBy);
                        if (destBankId.HasValue)
                        {
                            var bankObj = await _dbContext.FindAsync<Bank>(new object[] { destBankId.Value }, ct);
                            if (bankObj != null) tx.BalanceAfter = bankObj.CurrentBalance;
                        }
                        else if (destAccountId.HasValue)
                        {
                            var accObj = await _dbContext.FindAsync<Account>(new object[] { destAccountId.Value }, ct);
                            if (accObj != null) tx.BalanceAfter = accObj.CurrentBalance;
                        }
                        _dbContext.Add(tx);
                    }

                    var audit = new AuditLog
                    {
                        ActorUserId = createdBy,
                        Action = status == FinancialTransactionStatus.Approved ? "purchase_return.approved" : "purchase_return.created",
                        EntityType = "PurchaseReturn",
                        EntityId = purchaseReturn.Id.ToString(),
                        NewState = JsonSerializer.Serialize(purchaseReturn),
                        CorrelationId = correlationId
                    };
                    _dbContext.Add(audit);

                    await _dbContext.SaveChangesAsync(ct);
                    return MapToPurchaseResponse(purchaseReturn);
                }, cancellationToken);
            }, cancellationToken);
        }

        public async Task<PurchaseReturnResponse> ApprovePurchaseReturnAsync(
            long returnId,
            long approvedBy,
            CancellationToken cancellationToken)
        {
            return await _executor.ExecuteInTransactionAsync(async (ct) =>
            {
                var purchaseReturn = await _dbContext.PurchaseReturns.FirstOrDefaultAsync(p => p.Id == returnId, ct);
                if (purchaseReturn == null)
                    throw new KeyNotFoundException("Purchase return not found.");

                if (purchaseReturn.Status != FinancialTransactionStatus.Pending)
                    throw new InvalidOperationException("Only pending purchase returns can be approved");

                var supplier = await _dbContext.FindAsync<Supplier>(new object[] { purchaseReturn.SupplierId }, ct);
                if (supplier == null)
                    throw new KeyNotFoundException("Supplier not found.");

                if (!TransactionReferenceTypeParser.TryParse(purchaseReturn.ServiceType, out var refType))
                {
                    refType = TransactionReferenceType.SupplierPayment;
                }

                var totalApproved = await GetTotalApprovedSupplierPaymentsAsync(purchaseReturn.ServiceType, purchaseReturn.OriginalPurchaseReference, ct);
                var totalPurchaseReturns = await GetTotalApprovedPurchaseReturnsAsync(purchaseReturn.ServiceType, purchaseReturn.OriginalPurchaseReference, ct);

                var maxReturnable = totalApproved - totalPurchaseReturns;
                if (purchaseReturn.Amount > maxReturnable + 0.001m)
                    throw new InvalidOperationException($"Purchase Return Forbidden: Return amount ({purchaseReturn.Amount:N3}) exceeds total approved payments ({maxReturnable:N3}).");

                if (purchaseReturn.DestinationType != null && purchaseReturn.DestinationType.Equals("supplier_wallet", StringComparison.OrdinalIgnoreCase))
                {
                    supplier.CreditWallet(purchaseReturn.Amount);
                }
                else if (purchaseReturn.DestinationBankId.HasValue)
                {
                    var bank = await _dbContext.FindAsync<Bank>(new object[] { purchaseReturn.DestinationBankId.Value }, ct);
                    if (bank == null)
                        throw new KeyNotFoundException("Destination bank not found.");
                    bank.Credit(purchaseReturn.Amount);
                }
                else if (purchaseReturn.DestinationAccountId.HasValue)
                {
                    var account = await _dbContext.FindAsync<Account>(new object[] { purchaseReturn.DestinationAccountId.Value }, ct);
                    if (account == null)
                        throw new KeyNotFoundException("Destination account not found.");
                    account.Credit(purchaseReturn.Amount);
                }

                purchaseReturn.Approve(approvedBy);

                var payMethod = PaymentMethod.BankTransfer;
                if (purchaseReturn.DestinationType != null &&
                    (purchaseReturn.DestinationType.Equals("supplier_wallet", StringComparison.OrdinalIgnoreCase) ||
                     purchaseReturn.DestinationType.Equals("wallet", StringComparison.OrdinalIgnoreCase)))
                {
                    payMethod = PaymentMethod.Wallet;
                }
                else if (purchaseReturn.DestinationAccountId.HasValue)
                {
                    payMethod = PaymentMethod.Cash;
                }

                var tx = FinancialTransaction.Create(
                    FinancialTransactionType.PurchaseReturn,
                    purchaseReturn.Amount,
                    payMethod,
                    purchaseReturn.RequestedByUserId,
                    destinationAccountId: purchaseReturn.DestinationAccountId,
                    destinationBankId: purchaseReturn.DestinationBankId,
                    referenceType: refType,
                    referenceId: purchaseReturn.OriginalPurchaseReference,
                    description: "Purchase Return: " + purchaseReturn.Reason,
                    supplierId: purchaseReturn.SupplierId,
                    supplierName: supplier.Name,
                    recipientType: RecipientType.Supplier,
                    recipientId: purchaseReturn.SupplierId,
                    initialStatus: FinancialTransactionStatus.Pending
                );
                tx.Approve(approvedBy);
                if (payMethod == PaymentMethod.Wallet)
                {
                    tx.BalanceAfter = supplier.Wallet;
                }
                else if (purchaseReturn.DestinationBankId.HasValue)
                {
                    var bankObj = await _dbContext.FindAsync<Bank>(new object[] { purchaseReturn.DestinationBankId.Value }, ct);
                    if (bankObj != null) tx.BalanceAfter = bankObj.CurrentBalance;
                }
                else if (purchaseReturn.DestinationAccountId.HasValue)
                {
                    var accObj = await _dbContext.FindAsync<Account>(new object[] { purchaseReturn.DestinationAccountId.Value }, ct);
                    if (accObj != null) tx.BalanceAfter = accObj.CurrentBalance;
                }
                _dbContext.Add(tx);

                await PostToGlOnApprovalAsync(tx, ct);

                var audit = new AuditLog
                {
                    ActorUserId = approvedBy,
                    Action = "purchase_return.approved",
                    EntityType = "PurchaseReturn",
                    EntityId = purchaseReturn.Id.ToString(),
                    NewState = JsonSerializer.Serialize(purchaseReturn),
                    CorrelationId = purchaseReturn.CorrelationId ?? string.Empty
                };
                _dbContext.Add(audit);

                await _dbContext.SaveChangesAsync(ct);
                return MapToPurchaseResponse(purchaseReturn);
            }, cancellationToken);
        }

        public async Task<PurchaseReturnResponse> RejectPurchaseReturnAsync(
            long returnId,
            long rejectedBy,
            string? reason,
            CancellationToken cancellationToken)
        {
            return await _executor.ExecuteInTransactionAsync(async (ct) =>
            {
                var purchaseReturn = await _dbContext.PurchaseReturns.FirstOrDefaultAsync(p => p.Id == returnId, ct);
                if (purchaseReturn == null)
                    throw new KeyNotFoundException("Purchase return not found.");

                if (purchaseReturn.Status != FinancialTransactionStatus.Pending)
                    throw new InvalidOperationException("Only pending purchase returns can be rejected");

                purchaseReturn.Reject(rejectedBy, reason);

                var audit = new AuditLog
                {
                    ActorUserId = rejectedBy,
                    Action = "purchase_return.rejected",
                    EntityType = "PurchaseReturn",
                    EntityId = purchaseReturn.Id.ToString(),
                    NewState = JsonSerializer.Serialize(purchaseReturn),
                    CorrelationId = purchaseReturn.CorrelationId ?? string.Empty
                };
                _dbContext.Add(audit);

                await _dbContext.SaveChangesAsync(ct);
                return MapToPurchaseResponse(purchaseReturn);
            }, cancellationToken);
        }

        public async Task<SalesReturnResponse> PostSalesReturnAsync(
            CreateSalesReturnRequest request,
            long createdBy,
            string idempotencyKey,
            CancellationToken cancellationToken)
        {
            var saleAmount = await _salesPortalClient.GetServiceSaleAmountAsync(Domain.Services.TransactionReferenceTypeParser.Normalize(request.ServiceType)?.ToString() ?? request.ServiceType, request.ServiceId, cancellationToken);
            if (saleAmount <= 0)
                throw new InvalidOperationException("Could not retrieve sale details or sale amount is zero.");

            var payload = JsonSerializer.Serialize(request);
            return await HandleIdempotentCommandAsync("sales-return", idempotencyKey, payload, async () =>
            {
                return await _executor.ExecuteInTransactionAsync(async (ct) =>
                {
                    var user = await _dbContext.FindAsync<AccountsUser>(new object[] { createdBy }, ct);
                    if (user == null)
                        throw new KeyNotFoundException("User not found.");

                    if (!TransactionReferenceTypeParser.TryParse(Domain.Services.TransactionReferenceTypeParser.Normalize(request.ServiceType)?.ToString() ?? request.ServiceType, out var refType))
                    {
                        refType = TransactionReferenceType.SupplierPayment;
                    }

                    var digitsOnlySr = System.Text.RegularExpressions.Regex.Match(request.ServiceId ?? "", @"\d+").Value;

                    var totalPurchaseReturns = await _dbContext.Transactions
                        .Where(t => t.ReferenceType == refType &&
                                    (t.ReferenceId == request.ServiceId || t.ReferenceId == digitsOnlySr) &&
                                    t.TransactionType == FinancialTransactionType.PurchaseReturn &&
                                    t.Status == FinancialTransactionStatus.Approved)
                        .SumAsync(t => t.Amount, ct);

                    if (totalPurchaseReturns <= 0)
                        throw new InvalidOperationException("Sales Return Forbidden: A purchase refund must be received from the supplier before refunding the agent/head.");

                    var totalSalesReturns = await _dbContext.Transactions
                        .Where(t => t.ReferenceType == refType &&
                                    (t.ReferenceId == request.ServiceId || t.ReferenceId == digitsOnlySr) &&
                                    t.TransactionType == FinancialTransactionType.SalesReturn &&
                                    t.Status == FinancialTransactionStatus.Approved)
                        .SumAsync(t => t.Amount, ct);

                    var maxRefundable = saleAmount - totalSalesReturns;
                    if (request.Amount > maxRefundable + 0.001m)
                        throw new InvalidOperationException($"Refund amount ({request.Amount:N3}) exceeds service sale balance ({maxRefundable:N3}).");

                    long? sourceBankId = null;
                    long? sourceAccountId = null;

                    if (request.SourceType.Equals("bank", StringComparison.OrdinalIgnoreCase))
                    {
                        var cleanId = request.SourceId.Replace("bank_", "", StringComparison.OrdinalIgnoreCase);
                        if (long.TryParse(cleanId, out var bankId))
                            sourceBankId = bankId;
                    }
                    else if (request.SourceType.Equals("account", StringComparison.OrdinalIgnoreCase))
                    {
                        var cleanId = request.SourceId.Replace("account_", "", StringComparison.OrdinalIgnoreCase);
                        if (long.TryParse(cleanId, out var accId))
                            sourceAccountId = accId;
                    }

                    if (!Enum.TryParse<RecipientType>(request.RecipientType, true, out var recType))
                    {
                        recType = RecipientType.Agent;
                    }

                    var correlationId = Guid.NewGuid().ToString();
                    var status = user.IsMasterAccountant() ? FinancialTransactionStatus.Approved : FinancialTransactionStatus.Pending;

                    var salesReturn = SalesReturn.Create(
                        recType,
                        request.RecipientId,
                        request.ServiceId,
                        request.Amount,
                        request.ReturnReason,
                        createdBy,
                        request.SourceType,
                        sourceBankId,
                        sourceAccountId,
                        Domain.Services.TransactionReferenceTypeParser.Normalize(request.ServiceType)?.ToString() ?? request.ServiceType,
                        request.ServiceId,
                        correlationId,
                        FinancialTransactionStatus.Pending
                    );

                    _dbContext.Add(salesReturn);

                    if (status == FinancialTransactionStatus.Approved)
                    {
                        salesReturn.Approve(createdBy);

                        if (sourceBankId.HasValue)
                        {
                            var bank = await _dbContext.FindAsync<Bank>(new object[] { sourceBankId.Value }, ct);
                            if (bank == null)
                                throw new KeyNotFoundException("Source bank not found.");
                            if (bank.CurrentBalance < request.Amount)
                                throw new InvalidOperationException("Insufficient balance in source bank");
                            bank.Debit(request.Amount);
                        }
                        else if (sourceAccountId.HasValue)
                        {
                            var account = await _dbContext.FindAsync<Account>(new object[] { sourceAccountId.Value }, ct);
                            if (account == null)
                                throw new KeyNotFoundException("Source account not found.");
                            if (!account.HasSufficientBalance(request.Amount))
                                throw new InvalidOperationException("Insufficient balance in source account");
                            account.Debit(request.Amount);
                        }

                        var agentExistsLocally = false;
                        if (recType == RecipientType.Agent)
                        {
                            var agent = await _dbContext.FindAsync<Agent>(new object[] { request.RecipientId }, ct);
                            if (agent != null)
                            {
                                agent.CreditWallet(request.Amount);
                                agentExistsLocally = true;
                            }
                        }

                        var tx = FinancialTransaction.Create(
                            FinancialTransactionType.SalesReturn,
                            request.Amount,
                            PaymentMethod.BankTransfer,
                            createdBy,
                            sourceAccountId: sourceAccountId,
                            sourceBankId: sourceBankId,
                            referenceType: refType,
                            referenceId: request.ServiceId,
                            description: $"Sales Return: {request.ReturnReason}",
                            recipientType: recType,
                            recipientId: request.RecipientId,
                            initialStatus: FinancialTransactionStatus.Pending
                        );
                        tx.Approve(createdBy);
                        if (sourceBankId.HasValue)
                        {
                            var bankObj = await _dbContext.FindAsync<Bank>(new object[] { sourceBankId.Value }, ct);
                            if (bankObj != null) tx.BalanceAfter = bankObj.CurrentBalance;
                        }
                        else if (sourceAccountId.HasValue)
                        {
                            var accObj = await _dbContext.FindAsync<Account>(new object[] { sourceAccountId.Value }, ct);
                            if (accObj != null) tx.BalanceAfter = accObj.CurrentBalance;
                        }
                        _dbContext.Add(tx);

                        if (!agentExistsLocally || recType == RecipientType.Head)
                        {
                            var creditPayload = new
                            {
                                HeadId = request.RecipientId,
                                Amount = request.Amount,
                                Reason = $"Sales Return: {request.ReturnReason}"
                            };
                            var creditOutbox = new OutboxMessage
                            {
                                MessageType = "CreditHeadWallet",
                                AggregateType = "SalesReturn",
                                AggregateId = salesReturn.Id.ToString(),
                                Payload = JsonSerializer.Serialize(creditPayload),
                                Status = "pending",
                                CorrelationId = correlationId,
                                AvailableAt = DateTime.UtcNow
                            };
                            _dbContext.Add(creditOutbox);
                        }

                        var syncPayload = new
                        {
                            ReferenceType = Domain.Services.TransactionReferenceTypeParser.Normalize(request.ServiceType)?.ToString() ?? request.ServiceType,
                            ReferenceId = request.ServiceId
                        };
                        var syncOutbox = new OutboxMessage
                        {
                            MessageType = "SupplierCostSync_Obsolete",
                            AggregateType = "SalesReturn",
                            AggregateId = salesReturn.Id.ToString(),
                            Payload = JsonSerializer.Serialize(syncPayload),
                            Status = "pending",
                            CorrelationId = correlationId,
                            AvailableAt = DateTime.UtcNow
                        };
                        _dbContext.Add(syncOutbox);
                    }

                    var audit = new AuditLog
                    {
                        ActorUserId = createdBy,
                        Action = status == FinancialTransactionStatus.Approved ? "sales_return.approved" : "sales_return.created",
                        EntityType = "SalesReturn",
                        EntityId = salesReturn.Id.ToString(),
                        NewState = JsonSerializer.Serialize(salesReturn),
                        CorrelationId = correlationId
                    };
                    _dbContext.Add(audit);

                    await _dbContext.SaveChangesAsync(ct);
                    return MapToSalesResponse(salesReturn);
                }, cancellationToken);
            }, cancellationToken);
        }

        public async Task<SalesReturnResponse> ApproveSalesReturnAsync(
            long returnId,
            long approvedBy,
            CancellationToken cancellationToken)
        {
            var pendingReturn = await _dbContext.SalesReturns.AsNoTracking().FirstOrDefaultAsync(s => s.Id == returnId, cancellationToken);
            if (pendingReturn == null)
                throw new KeyNotFoundException("Sales return not found.");

            var saleAmount = await _salesPortalClient.GetServiceSaleAmountAsync(pendingReturn.ServiceType ?? "flight_booking", pendingReturn.OriginalSaleReference, cancellationToken);
            if (saleAmount <= 0)
                throw new InvalidOperationException("Could not retrieve sale details or sale amount is zero.");

            return await _executor.ExecuteInTransactionAsync(async (ct) =>
            {
                var salesReturn = await _dbContext.SalesReturns.FirstOrDefaultAsync(s => s.Id == returnId, ct);
                if (salesReturn == null)
                    throw new KeyNotFoundException("Sales return not found.");

                if (salesReturn.Status != FinancialTransactionStatus.Pending)
                    throw new InvalidOperationException("Only pending sales returns can be approved");

                if (!TransactionReferenceTypeParser.TryParse(salesReturn.ServiceType, out var refType))
                {
                    refType = TransactionReferenceType.SupplierPayment;
                }

                var totalPurchaseReturns = await _dbContext.Transactions
                    .Where(t => t.ReferenceType == refType &&
                                t.ReferenceId == salesReturn.OriginalSaleReference &&
                                t.TransactionType == FinancialTransactionType.PurchaseReturn &&
                                t.Status == FinancialTransactionStatus.Approved)
                    .SumAsync(t => t.Amount, ct);

                if (totalPurchaseReturns <= 0)
                    throw new InvalidOperationException("Sales Return Forbidden: A purchase refund must be received from the supplier before refunding the agent/head.");

                var totalSalesReturns = await _dbContext.Transactions
                    .Where(t => t.ReferenceType == refType &&
                                t.ReferenceId == salesReturn.OriginalSaleReference &&
                                t.TransactionType == FinancialTransactionType.SalesReturn &&
                                t.Status == FinancialTransactionStatus.Approved)
                    .SumAsync(t => t.Amount, ct);

                var maxRefundable = saleAmount - totalSalesReturns;
                if (salesReturn.Amount > maxRefundable + 0.001m)
                    throw new InvalidOperationException($"Refund amount ({salesReturn.Amount:N3}) exceeds service sale balance ({maxRefundable:N3}).");

                if (salesReturn.SourceBankId.HasValue)
                {
                    var bank = await _dbContext.FindAsync<Bank>(new object[] { salesReturn.SourceBankId.Value }, ct);
                    if (bank == null)
                        throw new KeyNotFoundException("Source bank not found.");
                    if (bank.CurrentBalance < salesReturn.Amount)
                        throw new InvalidOperationException("Insufficient balance in source bank");
                    bank.Debit(salesReturn.Amount);
                }
                else if (salesReturn.SourceAccountId.HasValue)
                {
                    var account = await _dbContext.FindAsync<Account>(new object[] { salesReturn.SourceAccountId.Value }, ct);
                    if (account == null)
                        throw new KeyNotFoundException("Source account not found.");
                    if (!account.HasSufficientBalance(salesReturn.Amount))
                        throw new InvalidOperationException("Insufficient balance in source account");
                    account.Debit(salesReturn.Amount);
                }

                var agentExistsLocally = false;
                if (salesReturn.RecipientType == RecipientType.Agent)
                {
                    var agent = await _dbContext.FindAsync<Agent>(new object[] { salesReturn.RecipientId }, ct);
                    if (agent != null)
                    {
                        agent.CreditWallet(salesReturn.Amount);
                        agentExistsLocally = true;
                    }
                }

                salesReturn.Approve(approvedBy);

                var tx = FinancialTransaction.Create(
                    FinancialTransactionType.SalesReturn,
                    salesReturn.Amount,
                    PaymentMethod.BankTransfer,
                    salesReturn.RequestedByUserId,
                    sourceAccountId: salesReturn.SourceAccountId,
                    sourceBankId: salesReturn.SourceBankId,
                    referenceType: refType,
                    referenceId: salesReturn.OriginalSaleReference,
                    description: $"Sales Return: {salesReturn.Reason}",
                    recipientType: salesReturn.RecipientType,
                    recipientId: salesReturn.RecipientId,
                    initialStatus: FinancialTransactionStatus.Pending
                );
                tx.Approve(approvedBy);
                if (salesReturn.SourceBankId.HasValue)
                {
                    var bankObj = await _dbContext.FindAsync<Bank>(new object[] { salesReturn.SourceBankId.Value }, ct);
                    if (bankObj != null) tx.BalanceAfter = bankObj.CurrentBalance;
                }
                else if (salesReturn.SourceAccountId.HasValue)
                {
                    var accObj = await _dbContext.FindAsync<Account>(new object[] { salesReturn.SourceAccountId.Value }, ct);
                    if (accObj != null) tx.BalanceAfter = accObj.CurrentBalance;
                }
                _dbContext.Add(tx);

                if (!agentExistsLocally || salesReturn.RecipientType == RecipientType.Head)
                {
                    var creditPayload = new
                    {
                        HeadId = salesReturn.RecipientId,
                        Amount = salesReturn.Amount,
                        Reason = $"Sales Return: {salesReturn.Reason}"
                    };
                    var creditOutbox = new OutboxMessage
                    {
                        MessageType = "CreditHeadWallet",
                        AggregateType = "SalesReturn",
                        AggregateId = salesReturn.Id.ToString(),
                        Payload = JsonSerializer.Serialize(creditPayload),
                        Status = "pending",
                        CorrelationId = salesReturn.CorrelationId ?? string.Empty,
                        AvailableAt = DateTime.UtcNow
                    };
                    _dbContext.Add(creditOutbox);
                }

                var syncPayload = new
                {
                    ReferenceType = salesReturn.ServiceType,
                    ReferenceId = salesReturn.OriginalSaleReference
                };
                var syncOutbox = new OutboxMessage
                {
                    MessageType = "SupplierCostSync_Obsolete",
                    AggregateType = "SalesReturn",
                    AggregateId = salesReturn.Id.ToString(),
                    Payload = JsonSerializer.Serialize(syncPayload),
                    Status = "pending",
                    CorrelationId = salesReturn.CorrelationId ?? string.Empty,
                    AvailableAt = DateTime.UtcNow
                };
                _dbContext.Add(syncOutbox);

                await PostToGlOnApprovalAsync(tx, ct);

                var audit = new AuditLog
                {
                    ActorUserId = approvedBy,
                    Action = "sales_return.approved",
                    EntityType = "SalesReturn",
                    EntityId = salesReturn.Id.ToString(),
                    NewState = JsonSerializer.Serialize(salesReturn),
                    CorrelationId = salesReturn.CorrelationId ?? string.Empty
                };
                _dbContext.Add(audit);

                await _dbContext.SaveChangesAsync(ct);
                return MapToSalesResponse(salesReturn);
            }, cancellationToken);
        }

        public async Task<SalesReturnResponse> RejectSalesReturnAsync(
            long returnId,
            long rejectedBy,
            string? reason,
            CancellationToken cancellationToken)
        {
            return await _executor.ExecuteInTransactionAsync(async (ct) =>
            {
                var salesReturn = await _dbContext.SalesReturns.FirstOrDefaultAsync(s => s.Id == returnId, ct);
                if (salesReturn == null)
                    throw new KeyNotFoundException("Sales return not found.");

                if (salesReturn.Status != FinancialTransactionStatus.Pending)
                    throw new InvalidOperationException("Only pending sales returns can be rejected");

                salesReturn.Reject(rejectedBy, reason);

                var audit = new AuditLog
                {
                    ActorUserId = rejectedBy,
                    Action = "sales_return.rejected",
                    EntityType = "SalesReturn",
                    EntityId = salesReturn.Id.ToString(),
                    NewState = JsonSerializer.Serialize(salesReturn),
                    CorrelationId = salesReturn.CorrelationId ?? string.Empty
                };
                _dbContext.Add(audit);

                await _dbContext.SaveChangesAsync(ct);
                return MapToSalesResponse(salesReturn);
            }, cancellationToken);
        }

        private static SupplierPaymentResponse MapToPaymentResponse(SupplierPayment s)
        {
            return new SupplierPaymentResponse(
                s.Id,
                s.SupplierId,
                s.Amount,
                s.Currency,
                s.PaymentMethod.ToString().ToLower(),
                s.SourceType,
                s.SourceBankId,
                s.SourceAccountId,
                s.ReferenceNumber,
                s.ExternalReference,
                s.Description,
                s.Status.ToString().ToLower(),
                s.RequestedByUserId,
                s.RequestedAt,
                s.ApprovedByUserId,
                s.ApprovedAt,
                s.RejectedByUserId,
                s.RejectedAt,
                s.RejectionReason,
                s.CorrelationId,
                s.CreatedAt,
                s.UpdatedAt,
                s.RowVersion != null ? Convert.ToBase64String(s.RowVersion) : null,
                ServiceType: s.ServiceType,
                DocumentNumber: s.DocumentNumber
            );
        }

        private static PurchaseReturnResponse MapToPurchaseResponse(PurchaseReturn p)
        {
            return new PurchaseReturnResponse(
                p.Id,
                p.DocumentNumber,
                p.SupplierId,
                p.OriginalPurchaseReference,
                p.ExternalReference,
                p.Amount,
                p.Currency,
                p.Reason,
                p.Status.ToString().ToLower(),
                p.RequestedByUserId,
                null,
                p.RequestedAt,
                p.ApprovedByUserId,
                p.ApprovedAt,
                p.RejectedByUserId,
                p.RejectedAt,
                p.RejectionReason,
                p.CorrelationId,
                p.CreatedAt,
                p.UpdatedAt,
                p.RowVersion != null ? Convert.ToBase64String(p.RowVersion) : null
            );
        }

        private static SalesReturnResponse MapToSalesResponse(SalesReturn s)
        {
            return new SalesReturnResponse(
                s.Id,
                s.DocumentNumber,
                s.RecipientType.ToString().ToLower(),
                s.RecipientId,
                s.OriginalSaleReference,
                s.ExternalReference,
                s.Amount,
                s.Currency,
                s.Reason,
                s.Status.ToString().ToLower(),
                s.RequestedByUserId,
                null,
                s.RequestedAt,
                s.ApprovedByUserId,
                s.ApprovedAt,
                s.RejectedByUserId,
                s.RejectedAt,
                s.RejectionReason,
                s.CorrelationId,
                s.CreatedAt,
                s.UpdatedAt,
                s.RowVersion != null ? Convert.ToBase64String(s.RowVersion) : null
            );
        }

        private async Task PostToGlOnApprovalAsync(FinancialTransaction tx, CancellationToken ct)
        {
            return; // Chart of accounts is disabled/removed

            long debitAccountId = 0;
            long creditAccountId = 0;

            long cashAccountId = await _mappingProvider.GetAccountIdAsync(AccountingMappingKeys.CashOnHand, ct);
            long bankAccountId = await _mappingProvider.GetAccountIdAsync(AccountingMappingKeys.PrimaryBank, ct);

            long ResolveAssetAccount(long? sourceAccId, long? sourceBankId, string paymentMethod)
            {
                if (sourceAccId.HasValue) return cashAccountId;
                if (sourceBankId.HasValue) return bankAccountId;
                if (paymentMethod != null && paymentMethod.Contains("cash", StringComparison.OrdinalIgnoreCase)) return cashAccountId;
                return bankAccountId;
            }

            if (tx.TransactionType == FinancialTransactionType.Incoming)
            {
                debitAccountId = ResolveAssetAccount(tx.DestinationAccountId, tx.DestinationBankId, tx.PaymentMethod.ToString());

                if (tx.RecipientType == RecipientType.Agent)
                {
                    creditAccountId = await _mappingProvider.GetAccountIdAsync(AccountingMappingKeys.CustomerReceivable, ct);
                }
                else
                {
                    creditAccountId = await _mappingProvider.GetAccountIdAsync(AccountingMappingKeys.SalesReturnOffset, ct);
                }
            }
            else if (tx.TransactionType == FinancialTransactionType.Outgoing)
            {
                creditAccountId = ResolveAssetAccount(tx.SourceAccountId, tx.SourceBankId, tx.PaymentMethod.ToString());

                if (tx.SupplierId.HasValue || tx.ReferenceType == TransactionReferenceType.SupplierPayment)
                {
                    debitAccountId = await _mappingProvider.GetAccountIdAsync(AccountingMappingKeys.SupplierPayable, ct);
                }
                else if (tx.ReferenceType == TransactionReferenceType.Advance)
                {
                    debitAccountId = await _mappingProvider.GetAccountIdAsync(AccountingMappingKeys.StaffAdvanceReceivable, ct);
                }
                else if (tx.ReferenceType == TransactionReferenceType.Loan)
                {
                    debitAccountId = await _mappingProvider.GetAccountIdAsync(AccountingMappingKeys.StaffLoanReceivable, ct);
                }
                else
                {
                    debitAccountId = await _mappingProvider.GetAccountIdAsync(AccountingMappingKeys.DefaultExpense, ct);
                }
            }
            else if (tx.TransactionType == FinancialTransactionType.Contra)
            {
                debitAccountId = ResolveAssetAccount(tx.DestinationAccountId, tx.DestinationBankId, tx.PaymentMethod.ToString());
                creditAccountId = ResolveAssetAccount(tx.SourceAccountId, tx.SourceBankId, tx.PaymentMethod.ToString());
            }
            else if (tx.TransactionType == FinancialTransactionType.PurchaseReturn)
            {
                if (tx.RecipientType == RecipientType.Supplier && tx.PaymentMethod == PaymentMethod.Credit)
                {
                    debitAccountId = await _mappingProvider.GetAccountIdAsync(AccountingMappingKeys.SupplierCreditControl, ct);
                }
                else
                {
                    debitAccountId = ResolveAssetAccount(tx.DestinationAccountId, tx.DestinationBankId, tx.PaymentMethod.ToString());
                }

                creditAccountId = await _mappingProvider.GetAccountIdAsync(AccountingMappingKeys.PurchaseReturnOffset, ct);
            }
            else if (tx.TransactionType == FinancialTransactionType.SalesReturn)
            {
                debitAccountId = await _mappingProvider.GetAccountIdAsync(AccountingMappingKeys.SalesReturnOffset, ct);

                if (tx.RecipientType == RecipientType.Agent)
                {
                    creditAccountId = await _mappingProvider.GetAccountIdAsync(AccountingMappingKeys.CustomerReceivable, ct);
                }
                else
                {
                    creditAccountId = ResolveAssetAccount(tx.SourceAccountId, tx.SourceBankId, tx.PaymentMethod.ToString());
                }
            }
            else
            {
                return;
            }

            var cleanGuid = Guid.NewGuid().ToString("N").Substring(0, 6).ToUpperInvariant();
            var journalNumber = $"JNL-SYS-{DateTime.UtcNow:yyyyMMdd}-{cleanGuid}";

            var lines = new List<PostJournalLineRequest>
            {
                new PostJournalLineRequest(AccountId: debitAccountId, Debit: tx.Amount, Credit: 0, LineNumber: 1, LineDescription: tx.Description ?? $"Debit line for txn {tx.Id}", SourceReference: tx.ReferenceId),
                new PostJournalLineRequest(AccountId: creditAccountId, Debit: 0, Credit: tx.Amount, LineNumber: 2, LineDescription: tx.Description ?? $"Credit line for txn {tx.Id}", SourceReference: tx.ReferenceId)
            };

            var postReq = new PostJournalRequest(
                JournalNumber: journalNumber,
                EntryDate: DateTime.UtcNow,
                Description: tx.Description ?? $"System Posting for Transaction {tx.Id}",
                SourceType: tx.TransactionType.ToString(),
                SourceId: tx.Id.ToString(),
                CorrelationId: Guid.NewGuid().ToString(),
                PostedByUserId: tx.CreatedBy,
                Reference: tx.ReferenceId,
                ReversalOfJournalEntryId: null,
                Lines: lines
            );

            await _glPostingService.PostJournalAsync(postReq, ct);
        }

        /// <summary>
        /// Returns true if the referenceType represents a service booking (visa, vfs, holiday, flight, hotel, transport, other).
        /// These transactions should NOT trigger CreditHeadWallet outbox messages â€” the wallet credit from service approvals
        /// would create spurious journal_entry records in HeadLedgers and incorrectly inflate Customer balances.
        /// </summary>
        private async Task<decimal> GetTotalApprovedSupplierPaymentsAsync(string? serviceType, string? serviceId, CancellationToken ct)
        {
            var digitsOnly = System.Text.RegularExpressions.Regex.Match(serviceId ?? "", @"\d+").Value;
            TransactionReferenceTypeParser.TryParse(serviceType, out var refType);

            // 1. Sum from SupplierPayments table
            var spList = await _dbContext.SupplierPayments
                .Where(p => p.Status == FinancialTransactionStatus.Approved)
                .ToListAsync(ct);

            var sumFromSp = spList
                .Where(p => IsServiceTypeMatch(p.ServiceType, serviceType) &&
                            (IsReferenceMatch(p.ExternalReference, serviceId, digitsOnly) ||
                             IsReferenceMatch(p.ReferenceNumber, serviceId, digitsOnly)))
                .Sum(p => p.Amount);

            // 2. Sum from Transactions table
            var txList = await _dbContext.Transactions
                .Where(t => t.TransactionType == FinancialTransactionType.Outgoing &&
                            t.Status == FinancialTransactionStatus.Approved)
                .ToListAsync(ct);

            var sumFromTx = txList
                .Where(t => (t.ReferenceType == refType || t.ReferenceType == TransactionReferenceType.SupplierPayment || IsServiceTypeMatch(t.ReferenceType?.ToString(), serviceType)) &&
                            IsReferenceMatch(t.ReferenceId, serviceId, digitsOnly))
                .Sum(t => t.Amount);

            return Math.Max(sumFromSp, sumFromTx);
        }

        private async Task<decimal> GetTotalApprovedPurchaseReturnsAsync(string? serviceType, string? serviceId, CancellationToken ct)
        {
            var digitsOnly = System.Text.RegularExpressions.Regex.Match(serviceId ?? "", @"\d+").Value;
            TransactionReferenceTypeParser.TryParse(serviceType, out var refType);

            // 1. Sum from PurchaseReturns table
            var prList = await _dbContext.PurchaseReturns
                .Where(p => p.Status == FinancialTransactionStatus.Approved)
                .ToListAsync(ct);

            var sumFromPr = prList
                .Where(p => IsServiceTypeMatch(p.ServiceType, serviceType) &&
                            (IsReferenceMatch(p.OriginalPurchaseReference, serviceId, digitsOnly) ||
                             IsReferenceMatch(p.ExternalReference, serviceId, digitsOnly)))
                .Sum(p => p.Amount);

            // 2. Sum from Transactions table
            var txList = await _dbContext.Transactions
                .Where(t => t.TransactionType == FinancialTransactionType.PurchaseReturn &&
                            t.Status == FinancialTransactionStatus.Approved)
                .ToListAsync(ct);

            var sumFromTx = txList
                .Where(t => (t.ReferenceType == refType || t.ReferenceType == TransactionReferenceType.SupplierPayment || IsServiceTypeMatch(t.ReferenceType?.ToString(), serviceType)) &&
                            IsReferenceMatch(t.ReferenceId, serviceId, digitsOnly))
                .Sum(t => t.Amount);

            return Math.Max(sumFromPr, sumFromTx);
        }

        private static bool IsServiceTypeMatch(string? type1, string? type2)
        {
            if (string.IsNullOrWhiteSpace(type1) || string.IsNullOrWhiteSpace(type2)) return true;
            var norm1 = type1.Trim().ToLowerInvariant();
            var norm2 = type2.Trim().ToLowerInvariant();

            if (norm1.Contains("govt") || norm1.Contains("government") || norm1.Contains("supplier_payment") || norm1.Contains("supplierpayment") || norm1.Contains("supplier_wallet") || norm1.Contains("supplier_credit") || norm1.Contains("supplier_advance") || norm1.Contains("fee")) return true;
            if (norm2.Contains("govt") || norm2.Contains("government") || norm2.Contains("supplier_payment") || norm2.Contains("supplierpayment") || norm2.Contains("supplier_wallet") || norm2.Contains("supplier_credit") || norm2.Contains("supplier_advance") || norm2.Contains("fee")) return true;

            if (norm1.Contains("visa") && norm2.Contains("visa")) return true;
            if (norm1.Contains("flight") && norm2.Contains("flight")) return true;
            if (norm1.Contains("hotel") && norm2.Contains("hotel")) return true;
            if (norm1.Contains("holiday") && norm2.Contains("holiday")) return true;
            if (norm1.Contains("transport") && norm2.Contains("transport")) return true;
            if (norm1.Contains("vfs") && norm2.Contains("vfs")) return true;
            if (norm1.Contains("other") && norm2.Contains("other")) return true;

            return norm1.Equals(norm2, StringComparison.OrdinalIgnoreCase);
        }

        private static bool IsReferenceMatch(string? ref1, string? ref2, string digitsOnly)
        {
            if (string.IsNullOrWhiteSpace(ref1) || string.IsNullOrWhiteSpace(ref2)) return false;
            var r1 = ref1.Trim();
            var r2 = ref2.Trim();
            if (string.Equals(r1, r2, StringComparison.OrdinalIgnoreCase)) return true;

            var digits1 = System.Text.RegularExpressions.Regex.Match(r1, @"\d+").Value;
            var digits2 = System.Text.RegularExpressions.Regex.Match(r2, @"\d+").Value;

            if (!string.IsNullOrEmpty(digits1) && !string.IsNullOrEmpty(digits2))
            {
                if (long.TryParse(digits1, out var num1) && long.TryParse(digits2, out var num2))
                {
                    if (num1 == num2) return true;
                }
                else if (digits1.Equals(digits2, StringComparison.OrdinalIgnoreCase))
                {
                    return true;
                }
            }

            if (!string.IsNullOrEmpty(digitsOnly))
            {
                if (r1.Contains(digitsOnly, StringComparison.OrdinalIgnoreCase) || r2.Contains(digitsOnly, StringComparison.OrdinalIgnoreCase))
                    return true;
            }
            return false;
        }
        private static bool IsServiceBookingReferenceType(string? referenceType)
        {
            if (string.IsNullOrWhiteSpace(referenceType)) return false;
            var norm = referenceType.Trim().ToLowerInvariant();
            return norm switch
            {
                "visa" or "visa_application" or "visas" => true,
                "vfs" or "vfs_appointment" or "vfs_appointments" => true,
                "holiday" or "holiday_package" or "holiday_packages" or "holidaypackage" => true,
                "flight" or "flights" or "flight_booking" => true,
                "hotel" or "hotels" or "hotel_booking" => true,
                "transportation" or "transport" => true,
                "other" or "other_service" or "other_services" or "otherservices" => true,
                "sale" => true,
                _ => false
            };
        }
    }
}


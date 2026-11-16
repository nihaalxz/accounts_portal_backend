using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Contracts.Expenses;
using TexasAccountsPortal.Domain.Entities;
using TexasAccountsPortal.Domain.Enums;

using TexasAccountsPortal.Contracts.Notifications;

namespace TexasAccountsPortal.Infrastructure.Services
{
    public sealed class ExpenseApprovalService : IExpenseApprovalService
    {
        private readonly IAccountsDbContext _db;
        private readonly ITransactionalExecutor _transact;
        private readonly IAccountBalanceService _balanceService;
        private readonly IAccountingPostingService _postingService;
        private readonly IAccountingMappingProvider _mappingProvider;
        private readonly IIdempotencyRecoveryStore _idempotencyStore;
        private readonly IPaymentEngine _paymentEngine;
        private readonly ILedgerNotificationService _ledgerNotificationService;

        public ExpenseApprovalService(
            IAccountsDbContext db,
            ITransactionalExecutor transact,
            IAccountBalanceService balanceService,
            IAccountingPostingService postingService,
            IAccountingMappingProvider mappingProvider,
            IIdempotencyRecoveryStore idempotencyStore,
            IPaymentEngine paymentEngine,
            ILedgerNotificationService ledgerNotificationService)
        {
            _db = db;
            _transact = transact;
            _balanceService = balanceService;
            _postingService = postingService;
            _mappingProvider = mappingProvider;
            _idempotencyStore = idempotencyStore;
            _paymentEngine = paymentEngine;
            _ledgerNotificationService = ledgerNotificationService;
        }

        public async Task<ExpenseResponse> ApproveExpenseAsync(
            long id,
            long actorUserId,
            string idempotencyKey,
            string? rowVersion,
            CancellationToken cancellationToken)
        {
            var idempotencyId = $"ApproveExpense:{idempotencyKey}";

            // 1. Idempotency Check
            if (!string.IsNullOrEmpty(idempotencyKey))
            {
                var existing = await _idempotencyStore.GetRecordAsync(idempotencyId, cancellationToken);
                if (existing != null)
                {
                    if (existing.Status == "completed")
                    {
                        var response = System.Text.Json.JsonSerializer.Deserialize<ExpenseResponse>(existing.ResponseBody ?? "{}");
                        if (response != null) return response;
                    }
                    else
                    {
                        throw new InvalidOperationException("An approval request for this expense is already in progress.");
                    }
                }

                await _idempotencyStore.CreatePendingRecordAsync(
                    id: idempotencyId,
                    scope: "ApproveExpense",
                    key: idempotencyKey,
                    requestHash: "",
                    payload: "",
                    cancellationToken: cancellationToken
                );
            }

            ExpenseResponse result;
            try
            {
                // 2. Perform the execution inside a transactional scope
                result = await _transact.ExecuteInTransactionAsync(async (ct) =>
                {
                    var expense = await _db.Expenses.FirstOrDefaultAsync(e => e.Id == id, ct);
                    if (expense == null)
                        throw new KeyNotFoundException($"Expense with ID {id} not found.");

                    if (expense.Status != ExpenseStatus.PendingApproval && expense.Status != ExpenseStatus.Draft)
                        throw new InvalidOperationException($"Only Draft or PendingApproval expenses can be approved. Current status: {expense.Status}");

                    // 3. Concurrency RowVersion verification
                    if (!string.IsNullOrEmpty(rowVersion))
                    {
                        var dbRowVersionStr = Convert.ToBase64String(expense.RowVersion);
                        if (dbRowVersionStr != rowVersion)
                        {
                            throw new DbUpdateConcurrencyException("The expense record has been modified by another accountant.");
                        }
                    }

                    // 4. Delegate approval based on correlation type
                    if (!string.IsNullOrEmpty(expense.CorrelationId) && expense.CorrelationId.StartsWith("ContraTransfer_"))
                    {
                        if (long.TryParse(expense.CorrelationId.Substring(15), out long txnId))
                        {
                            var txn = await _db.Transactions.FirstOrDefaultAsync(t => t.Id == txnId, ct);
                            if (txn != null && txn.Status == FinancialTransactionStatus.Pending)
                            {
                                if (txn.SourceAccountId.HasValue)
                                {
                                    var sourceAccount = await _db.Accounts.FirstOrDefaultAsync(a => a.Id == txn.SourceAccountId.Value, ct);
                                    if (sourceAccount == null) throw new KeyNotFoundException("Source account not found.");
                                    sourceAccount.Debit(txn.Amount);
                                }
                                else if (txn.SourceBankId.HasValue)
                                {
                                    var sourceBank = await _db.Banks.FirstOrDefaultAsync(b => b.Id == txn.SourceBankId.Value, ct);
                                    if (sourceBank == null) throw new KeyNotFoundException("Source bank not found.");
                                    sourceBank.Debit(txn.Amount);
                                }

                                if (txn.DestinationAccountId.HasValue)
                                {
                                    var destAccount = await _db.Accounts.FirstOrDefaultAsync(a => a.Id == txn.DestinationAccountId.Value, ct);
                                    if (destAccount == null) throw new KeyNotFoundException("Destination account not found.");
                                    destAccount.Credit(txn.Amount);
                                    txn.BalanceAfter = destAccount.CurrentBalance;
                                }
                                else if (txn.DestinationBankId.HasValue)
                                {
                                    var destBank = await _db.Banks.FirstOrDefaultAsync(b => b.Id == txn.DestinationBankId.Value, ct);
                                    if (destBank == null) throw new KeyNotFoundException("Destination bank not found.");
                                    destBank.Credit(txn.Amount);
                                    txn.BalanceAfter = destBank.CurrentBalance;
                                }

                                txn.Approve(actorUserId);
                            }
                            expense.Approve(actorUserId, txn?.Id ?? txnId);
                        }
                        else
                        {
                            expense.Approve(actorUserId, expense.PostedTransactionId ?? 0);
                        }
                    }
                    else if (!string.IsNullOrEmpty(expense.CorrelationId) && (expense.CorrelationId.StartsWith("WalletWithdrawal_") || expense.CorrelationId.StartsWith("HeadBalance_") || expense.CorrelationId.StartsWith("AgentBalance_")))
                    {
                        var prefixLen = expense.CorrelationId.IndexOf('_') + 1;
                        FinancialTransaction? txn = null;
                        if (long.TryParse(expense.CorrelationId.Substring(prefixLen), out long txnId) && txnId > 0)
                        {
                            txn = await _db.Transactions.FirstOrDefaultAsync(t => t.Id == txnId, ct);
                        }
                        if (txn == null)
                        {
                            txn = await _db.Transactions.FirstOrDefaultAsync(t => t.TransactionType == FinancialTransactionType.Outgoing && t.Status == FinancialTransactionStatus.Pending && t.Amount == expense.Amount && (t.SourceAccountId == expense.SourceAccountId || t.SourceBankId == expense.SourceBankId), ct);
                        }

                        if (txn != null)
                        {
                            if (txn.Status == FinancialTransactionStatus.Pending)
                            {
                                if (txn.SourceAccountId.HasValue)
                                {
                                    var sourceAccount = await _db.Accounts.FirstOrDefaultAsync(a => a.Id == txn.SourceAccountId.Value, ct);
                                    if (sourceAccount == null) throw new KeyNotFoundException("Source account not found.");
                                    sourceAccount.Debit(txn.Amount);
                                    txn.BalanceAfter = sourceAccount.CurrentBalance;
                                }
                                else if (txn.SourceBankId.HasValue)
                                {
                                    var sourceBank = await _db.Banks.FirstOrDefaultAsync(b => b.Id == txn.SourceBankId.Value, ct);
                                    if (sourceBank == null) throw new KeyNotFoundException("Source bank not found.");
                                    sourceBank.Debit(txn.Amount);
                                    txn.BalanceAfter = sourceBank.CurrentBalance;
                                }

                                if (txn.RecipientType == RecipientType.Agent && txn.RecipientId.HasValue)
                                {
                                    var agent = await _db.Agents.FirstOrDefaultAsync(a => a.Id == txn.RecipientId.Value, ct);
                                    if (agent != null)
                                    {
                                        if (agent.Wallet <= 0)
                                        {
                                            throw new InvalidOperationException("Cannot withdraw negative balance or zero balance.");
                                        }
                                        if (txn.Amount > agent.Wallet)
                                        {
                                            throw new InvalidOperationException($"Withdrawal amount cannot exceed available balance ({agent.Wallet:N3} BHD).");
                                        }
                                        agent.DebitWallet(txn.Amount);
                                    }
                                }
                                else if (txn.RecipientType == RecipientType.Head && txn.RecipientId.HasValue)
                                {
                                    var outbox = new OutboxMessage
                                    {
                                        MessageType = "DebitHeadWallet",
                                        AggregateType = "Head",
                                        AggregateId = txn.RecipientId.Value.ToString(),
                                        CorrelationId = Guid.NewGuid().ToString(),
                                        Payload = System.Text.Json.JsonSerializer.Serialize(new { HeadId = txn.RecipientId.Value, Amount = txn.Amount, Reason = txn.Description ?? "Head Wallet Withdrawal" })
                                    };
                                    _db.Add(outbox);
                                }

                                txn.Approve(actorUserId);
                            }

                            expense.Approve(actorUserId, txn.Id);
                        }
                        else
                        {
                            var engineResult = await _paymentEngine.ProcessExpenseApprovalAsync(expense, actorUserId, ct);
                            expense.Approve(actorUserId, engineResult.FinancialTransactionId);
                        }
                    }
                    else
                    {
                        var engineResult = await _paymentEngine.ProcessExpenseApprovalAsync(expense, actorUserId, ct);

                        expense.Approve(actorUserId, engineResult.FinancialTransactionId);
                        if (!string.IsNullOrEmpty(expense.CorrelationId) && expense.CorrelationId.StartsWith("SalaryPayout_"))
                        {
                            if (long.TryParse(expense.CorrelationId.Substring(13), out long salId))
                            {
                                var salPayment = await _db.SalaryPayments.FirstOrDefaultAsync(sp => sp.Id == salId, ct);
                                if (salPayment != null && salPayment.Status != "Paid")
                                {
                                    salPayment.Status = "Paid";
                                    salPayment.PaidByUserId = actorUserId;
                                    salPayment.UpdatedAt = DateTime.UtcNow;
                                }
                            }
                        }
                    }
                    await _db.SaveChangesAsync(ct);

                    // Create Audit Log
                    var auditLog = new AuditLog
                    {
                        ActorUserId = actorUserId,
                        Action = "ApproveExpense",
                        EntityType = "Expense",
                        EntityId = expense.Id.ToString(),
                        CorrelationId = expense.CorrelationId,
                        OldState = "Draft/PendingApproval",
                        NewState = "Posted",
                        Reason = "Expense approved and posted to General Ledger"
                    };
                    _db.Add(auditLog);

                    await _ledgerNotificationService.PublishLedgerChangedAsync(
                        referenceType: ReferenceTypes.Expense,
                        referenceId: expense.Id.ToString(),
                        cancellationToken: ct);

                    await _db.SaveChangesAsync(ct);

                    return MapToResponse(expense);
                }, cancellationToken);
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

        public async Task<ExpenseResponse> RejectExpenseAsync(
            long id,
            long actorUserId,
            RejectExpenseRequest request,
            CancellationToken cancellationToken)
        {
            if (string.IsNullOrWhiteSpace(request.Reason))
                throw new ArgumentException("Rejection reason is required.");

            var expense = await _db.Expenses.FirstOrDefaultAsync(e => e.Id == id, cancellationToken);
            if (expense == null)
                throw new KeyNotFoundException($"Expense with ID {id} not found.");

            expense.Reject(actorUserId, request.Reason);
            if (!string.IsNullOrEmpty(expense.CorrelationId) && expense.CorrelationId.StartsWith("SalaryPayout_")) { if (long.TryParse(expense.CorrelationId.Substring(13), out long salId)) { var salPayment = await _db.SalaryPayments.FirstOrDefaultAsync(sp => sp.Id == salId, cancellationToken); if (salPayment != null && salPayment.Status != "Cancelled") { salPayment.Status = "Cancelled"; salPayment.Remarks = request.Reason; salPayment.UpdatedAt = DateTime.UtcNow; } } }
            else if (!string.IsNullOrEmpty(expense.CorrelationId) && expense.CorrelationId.StartsWith("ContraTransfer_"))
            {
                FinancialTransaction? txn = null;
                if (long.TryParse(expense.CorrelationId.Substring(15), out long txnId) && txnId > 0)
                {
                    txn = await _db.Transactions.FirstOrDefaultAsync(t => t.Id == txnId, cancellationToken);
                }
                if (txn == null)
                {
                    txn = await _db.Transactions.FirstOrDefaultAsync(t => t.TransactionType == FinancialTransactionType.Contra && t.Status == FinancialTransactionStatus.Pending && t.Amount == expense.Amount && (t.SourceAccountId == expense.SourceAccountId || t.SourceBankId == expense.SourceBankId), cancellationToken);
                }
                if (txn != null && txn.Status == FinancialTransactionStatus.Pending)
                {
                    txn.Reject(actorUserId, request.Reason);
                }
            }
            else if (!string.IsNullOrEmpty(expense.CorrelationId) && (expense.CorrelationId.StartsWith("WalletWithdrawal_") || expense.CorrelationId.StartsWith("HeadBalance_") || expense.CorrelationId.StartsWith("AgentBalance_")))
            {
                FinancialTransaction? txn = null;
                var prefixLen = expense.CorrelationId.IndexOf('_') + 1;
                if (long.TryParse(expense.CorrelationId.Substring(prefixLen), out long txnId) && txnId > 0)
                {
                    txn = await _db.Transactions.FirstOrDefaultAsync(t => t.Id == txnId, cancellationToken);
                }
                if (txn == null)
                {
                    txn = await _db.Transactions.FirstOrDefaultAsync(t => t.TransactionType == FinancialTransactionType.Outgoing && t.Status == FinancialTransactionStatus.Pending && t.Amount == expense.Amount && (t.SourceAccountId == expense.SourceAccountId || t.SourceBankId == expense.SourceBankId), cancellationToken);
                }
                if (txn != null && txn.Status == FinancialTransactionStatus.Pending)
                {
                    txn.Reject(actorUserId, request.Reason);
                }
            }
            await _db.SaveChangesAsync(cancellationToken);

            return MapToResponse(expense);
        }

        private static ExpenseResponse MapToResponse(Expense expense)
        {
            return new ExpenseResponse(
                Id: expense.Id,
                ExpenseNumber: expense.ExpenseNumber,
                ExpenseCategoryId: expense.ExpenseCategoryId,
                Amount: expense.Amount,
                Currency: expense.Currency,
                Description: expense.Description,
                PaymentMethod: expense.PaymentMethod.ToString().ToLower(),
                SourceAccountId: expense.SourceAccountId,
                SourceBankId: expense.SourceBankId,
                ExpenseDate: expense.ExpenseDate,
                Status: expense.Status.ToString().ToLower(),
                PostedTransactionId: expense.PostedTransactionId,
                PostedJournalEntryId: expense.PostedJournalEntryId,
                RejectionReason: expense.RejectionReason,
                Notes: expense.Notes,
                CorrelationId: expense.CorrelationId,
                CreatedBy: expense.CreatedBy,
                ApprovedBy: expense.ApprovedBy,
                ApprovedAt: expense.ApprovedAt,
                RejectedBy: expense.RejectedBy,
                RejectedAt: expense.RejectedAt,
                PostedBy: expense.PostedBy,
                PostedAt: expense.PostedAt,
                CreatedAt: expense.CreatedAt,
                RowVersion: expense.RowVersion != null ? Convert.ToBase64String(expense.RowVersion) : null
            );
        }
    }
}

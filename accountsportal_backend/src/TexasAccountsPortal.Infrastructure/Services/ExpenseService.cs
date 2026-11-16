using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Contracts.Expenses;
using TexasAccountsPortal.Domain.Entities;
using TexasAccountsPortal.Domain.Enums;
using TexasAccountsPortal.Domain.Services;

namespace TexasAccountsPortal.Infrastructure.Services
{
    public sealed class ExpenseService : IExpenseService
    {
        private readonly IAccountsDbContext _db;
        private readonly IAccountBalanceService _balanceService;
        private readonly IExpenseApprovalService _expenseApprovalService;
        private readonly IPostingRuleResolver _postingRuleResolver;
        private readonly IDocumentNumberGenerator _documentNumberGenerator;

        public ExpenseService(
            IAccountsDbContext db,
            IAccountBalanceService balanceService,
            IExpenseApprovalService expenseApprovalService,
            IPostingRuleResolver postingRuleResolver,
            IDocumentNumberGenerator documentNumberGenerator)
        {
            _db = db;
            _balanceService = balanceService;
            _expenseApprovalService = expenseApprovalService;
            _postingRuleResolver = postingRuleResolver;
            _documentNumberGenerator = documentNumberGenerator;
        }

        public async Task<ExpenseResponse> CreateExpenseAsync(
            CreateExpenseRequest request,
            long actorUserId,
            string correlationId,
            CancellationToken cancellationToken)
        {
            // 1. Validate payment source and payment method
            if (!Enum.TryParse<PaymentMethod>(request.PaymentMethod, true, out var parsedPaymentMethod))
                throw new ArgumentException($"Invalid payment method '{request.PaymentMethod}'.");

            if (parsedPaymentMethod == PaymentMethod.Cash && !request.SourceAccountId.HasValue)
                throw new ArgumentException("SourceAccountId is required when payment method is Cash.");

            if ((parsedPaymentMethod == PaymentMethod.Bank || parsedPaymentMethod == PaymentMethod.BankTransfer) && !request.SourceBankId.HasValue)
                throw new ArgumentException("SourceBankId is required when payment method is Bank/BankTransfer.");

            // 2. Validate category (ExpenseHeader) exists and resolve instruction
            var categoryHeader = await _db.ExpenseHeaders
                .FirstOrDefaultAsync(c => c.Id == request.ExpenseCategoryId, cancellationToken);
            if (categoryHeader == null)
                throw new ArgumentException($"Expense category with ID {request.ExpenseCategoryId} not found.");

            var instruction = _postingRuleResolver.ResolveInstruction(categoryHeader.Category ?? "Expenses");

            // 3. Pre-creation Balance Validation (Only for Outgoing transactions requiring balance checks)
            if (instruction.Direction == FinancialDirection.Outgoing && instruction.RequiresBalanceCheck)
            {
                await _balanceService.ValidateSufficientBalanceAsync(
                    parsedPaymentMethod,
                    request.SourceAccountId,
                    request.SourceBankId,
                    request.Amount,
                    cancellationToken);
            }

            // 4. Generate unique document number (TXSEXP000001)
            var expenseNumber = await _documentNumberGenerator.GenerateDocumentNumberAsync("TXSEXP", "Seq_ExpenseDocNo", cancellationToken);

            var expense = Expense.Create(
                expenseNumber: expenseNumber,
                expenseCategoryId: request.ExpenseCategoryId,
                amount: request.Amount,
                description: request.Description,
                paymentMethod: parsedPaymentMethod,
                expenseDate: request.ExpenseDate,
                correlationId: correlationId,
                createdBy: actorUserId,
                currency: "BHD",
                sourceAccountId: request.SourceAccountId,
                sourceBankId: request.SourceBankId,
                notes: request.Notes
            );

            _db.Add(expense);
            await _db.SaveChangesAsync(cancellationToken);

            // 5. Approval rule
            var user = await _db.Users.FirstOrDefaultAsync(u => u.Id == actorUserId, cancellationToken);
            if (user != null && user.IsMasterAccountant())
            {
                var idempotencyKey = $"AutoApproveExpense_{expense.Id}_{Guid.NewGuid():N}";
                return await _expenseApprovalService.ApproveExpenseAsync(
                    expense.Id,
                    actorUserId,
                    idempotencyKey,
                    null,
                    cancellationToken);
            }
            else
            {
                // Normal accountant: automatically transition from Draft to PendingApproval
                expense.Submit();
                await _db.SaveChangesAsync(cancellationToken);
            }

            return MapToResponse(expense);
        }

        public async Task<ExpenseResponse> SubmitExpenseAsync(
            long id,
            CancellationToken cancellationToken)
        {
            var expense = await _db.Expenses
                .FirstOrDefaultAsync(e => e.Id == id, cancellationToken);
            if (expense is null)
                throw new KeyNotFoundException($"Expense with ID {id} not found.");

            expense.Submit();
            await _db.SaveChangesAsync(cancellationToken);

            return MapToResponse(expense);
        }

        public async Task<ExpenseResponse> ApproveExpenseAsync(
            long id,
            long actorUserId,
            CancellationToken cancellationToken)
        {
            // Legacy interface method fallback (without idempotency header)
            var key = $"LegacyApproveExpense_{id}_{Guid.NewGuid():N}";
            return await _expenseApprovalService.ApproveExpenseAsync(id, actorUserId, key, null, cancellationToken);
        }

        public async Task<ExpenseResponse> RejectExpenseAsync(
            long id,
            long actorUserId,
            RejectExpenseRequest request,
            CancellationToken cancellationToken)
        {
            return await _expenseApprovalService.RejectExpenseAsync(id, actorUserId, request, cancellationToken);
        }

        public async Task<ExpenseResponse> GetExpenseByIdAsync(
            long id,
            CancellationToken cancellationToken)
        {
            var expense = await _db.Expenses
                .AsNoTracking()
                .FirstOrDefaultAsync(e => e.Id == id, cancellationToken);
            if (expense is null)
                throw new KeyNotFoundException($"Expense with ID {id} not found.");

            return MapToResponse(expense);
        }

        public async Task<List<ExpenseResponse>> GetExpensesAsync(
            CancellationToken cancellationToken)
        {
            // Ensure any unlinked wallet withdrawal transactions are synced as Expenses
            var unlinkedWithdrawals = await _db.Transactions
                .AsNoTracking()
                .Where(t => t.TransactionType == FinancialTransactionType.Outgoing &&
                            (t.RecipientType == RecipientType.Agent || t.RecipientType == RecipientType.Head))
                .ToListAsync(cancellationToken);

            if (unlinkedWithdrawals.Any())
            {
                var existingCorrelations = await _db.Expenses
                    .AsNoTracking()
                    .Where(e => e.CorrelationId.StartsWith("WalletWithdrawal_"))
                    .Select(e => e.CorrelationId)
                    .ToListAsync(cancellationToken);

                var toAdd = unlinkedWithdrawals
                    .Where(w => !existingCorrelations.Contains($"WalletWithdrawal_{w.Id}"))
                    .ToList();

                if (toAdd.Any())
                {
                    var headWithdrawalHeader = await _db.ExpenseHeaders
                        .FirstOrDefaultAsync(h => h.Name == "Head Balance Withdrawal", cancellationToken);
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
                        _db.Add(headWithdrawalHeader);
                        await _db.SaveChangesAsync(cancellationToken);
                    }
                    else if (headWithdrawalHeader.Category != "Contra")
                    {
                        headWithdrawalHeader.Category = "Contra";
                        headWithdrawalHeader.UpdatedAt = DateTime.UtcNow;
                        await _db.SaveChangesAsync(cancellationToken);
                    }

                    foreach (var w in toAdd)
                    {
                        var exp = Expense.Create(
                            expenseNumber: $"TXSEXP{w.Id:D6}",
                            expenseCategoryId: headWithdrawalHeader.Id,
                            amount: w.Amount,
                            description: w.Description ?? $"Wallet withdrawal for {w.RecipientType} #{w.RecipientId}",
                            paymentMethod: w.PaymentMethod,
                            expenseDate: w.CreatedAt,
                            correlationId: $"WalletWithdrawal_{w.Id}",
                            createdBy: w.CreatedBy,
                            currency: "BHD",
                            sourceAccountId: w.SourceAccountId,
                            sourceBankId: w.SourceBankId,
                            notes: !string.IsNullOrWhiteSpace(w.ReferenceId) ? $"Ref No: {w.ReferenceId}" : null
                        );
                        exp.Approve(w.CreatedBy, w.Id);
                        _db.Add(exp);
                    }
                    await _db.SaveChangesAsync(cancellationToken);
                }
            }

            var expenses = await _db.Expenses
                .AsNoTracking()
                .OrderByDescending(e => e.CreatedAt)
                .ToListAsync(cancellationToken);

            return expenses.Select(MapToResponse).ToList();
        }

        public async Task<ExpenseResponse> CancelExpenseAsync(
            long id,
            CancellationToken cancellationToken)
        {
            var expense = await _db.Expenses
                .FirstOrDefaultAsync(e => e.Id == id, cancellationToken);
            if (expense is null)
                throw new KeyNotFoundException($"Expense with ID {id} not found.");

            expense.Cancel();
            await _db.SaveChangesAsync(cancellationToken);

            return MapToResponse(expense);
        }

        public async Task<ExpenseHeaderResponse> CreateExpenseHeaderAsync(
            CreateExpenseHeaderRequest request,
            long actorUserId,
            CancellationToken cancellationToken)
        {
            if (string.IsNullOrWhiteSpace(request.Name))
                throw new ArgumentException("Expense category name is required.");

            if (string.IsNullOrWhiteSpace(request.Category))
                throw new ArgumentException("Expense Category bucket (Asset, Liability, Income, Capital, Expenses) is required.");

            var exists = await _db.ExpenseHeaders.AnyAsync(h => h.Name.ToLower() == request.Name.ToLower(), cancellationToken);
            if (exists)
                throw new InvalidOperationException($"Expense category name '{request.Name}' already exists.");

            var user = await _db.Users.FirstOrDefaultAsync(u => u.Id == actorUserId, cancellationToken);
            var isMaster = user != null && user.IsMasterAccountant();

            if (isMaster)
            {
                var header = new ExpenseHeader
                {
                    Name = request.Name,
                    Category = request.Category,
                    Description = request.Description,
                    CreatedBy = actorUserId,
                    CreatedAt = DateTime.UtcNow,
                    UpdatedAt = DateTime.UtcNow
                };

                _db.Add(header);
                await _db.SaveChangesAsync(cancellationToken);

                return MapHeaderToResponse(header);
            }
            else
            {
                // Normal accountant: Submit to PendingApproval instead of throwing 403 error
                var jsonOptions = new System.Text.Json.JsonSerializerOptions { PropertyNamingPolicy = System.Text.Json.JsonNamingPolicy.CamelCase };
                var payloadJson = System.Text.Json.JsonSerializer.Serialize(request, jsonOptions);
                var pending = new PendingApproval
                {
                    DocumentNumber = $"PA-{Guid.NewGuid().ToString("N")[..8].ToUpper()}",
                    EntityType = "payment_header",
                    PayloadJson = payloadJson,
                    SubmittedByUserId = actorUserId,
                    SubmittedByName = !string.IsNullOrWhiteSpace(user?.Name) ? user.Name : (user?.Email ?? "Accountant"),
                    SubmittedAt = DateTime.UtcNow,
                    Status = "pending"
                };

                _db.Add(pending);
                await _db.SaveChangesAsync(cancellationToken);

                return new ExpenseHeaderResponse(
                    Id: 0,
                    Name: $"{request.Name} (Pending Approval)",
                    Category: request.Category ?? "Expenses",
                    Description: request.Description ?? "Submitted for Master Accountant approval",
                    CreatedBy: actorUserId,
                    CreatedAt: DateTime.UtcNow
                );
            }
        }

        public async Task<List<ExpenseHeaderResponse>> GetExpenseHeadersAsync(
            CancellationToken cancellationToken)
        {
            var headers = await _db.ExpenseHeaders
                .AsNoTracking()
                .OrderBy(h => h.Name)
                .ToListAsync(cancellationToken);

            return headers.Select(MapHeaderToResponse).ToList();
        }

        public async Task<ExpenseSummaryResponse> GetExpenseSummaryAsync(
            CancellationToken cancellationToken)
        {
            var expenses = await _db.Expenses
                .AsNoTracking()
                .ToListAsync(cancellationToken);

            var headers = await _db.ExpenseHeaders
                .AsNoTracking()
                .ToListAsync(cancellationToken);

            var headerMap = headers.ToDictionary(h => h.Id, h => h);

            // Group only Approved or Posted expenses for totals
            var activeExpenses = expenses
                .Where(e => e.Status == ExpenseStatus.Approved || e.Status == ExpenseStatus.Posted)
                .ToList();

            // Calculate aggregate "All Categories" (Only Approved/Posted contribute to total)
            var allCount = expenses.Count;
            var allTotal = activeExpenses.Sum(e => e.Amount);
            var allSummary = new ExpenseCategorySummaryDto(allCount, allTotal);

            // Helper to build bucket summaries
            ExpenseCategorySummaryDto GetSummaryForCategory(string categoryName)
            {
                var bucketExpenses = expenses.Where(e =>
                {
                    if (headerMap.TryGetValue(e.ExpenseCategoryId, out var h))
                    {
                        return string.Equals(h.Category, categoryName, StringComparison.OrdinalIgnoreCase) ||
                               (string.Equals(categoryName, "Expenses", StringComparison.OrdinalIgnoreCase) && string.Equals(h.Category, "Expense", StringComparison.OrdinalIgnoreCase));
                    }
                    return false;
                }).ToList();

                var activeBucketExpenses = bucketExpenses
                    .Where(e => e.Status == ExpenseStatus.Approved || e.Status == ExpenseStatus.Posted)
                    .ToList();

                return new ExpenseCategorySummaryDto(
                    bucketExpenses.Count,
                    activeBucketExpenses.Sum(e => e.Amount)
                );
            }

            return new ExpenseSummaryResponse(
                All: allSummary,
                Asset: GetSummaryForCategory("Asset"),
                Liability: GetSummaryForCategory("Liability"),
                Income: GetSummaryForCategory("Income"),
                Capital: GetSummaryForCategory("Capital"),
                Expenses: GetSummaryForCategory("Expenses"),
                Contra: GetSummaryForCategory("Contra")
            );
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

        private static ExpenseHeaderResponse MapHeaderToResponse(ExpenseHeader header)
        {
            return new ExpenseHeaderResponse(
                Id: header.Id,
                Name: header.Name,
                Category: header.Category ?? "Expenses",
                Description: header.Description,
                CreatedBy: header.CreatedBy,
                CreatedAt: header.CreatedAt
            );
        }
    }
}

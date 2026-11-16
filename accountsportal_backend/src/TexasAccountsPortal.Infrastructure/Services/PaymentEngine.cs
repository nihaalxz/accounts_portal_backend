using Microsoft.EntityFrameworkCore;
using System;
using System.Threading;
using System.Threading.Tasks;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Domain.Entities;
using TexasAccountsPortal.Domain.Enums;

namespace TexasAccountsPortal.Infrastructure.Services
{
    public sealed class PaymentEngine : IPaymentEngine
    {
        private readonly IAccountsDbContext _db;
        private readonly IAccountBalanceService _balanceService;
        private readonly IPostingRuleResolver _ruleResolver;

        public PaymentEngine(
            IAccountsDbContext db,
            IAccountBalanceService balanceService,
            IPostingRuleResolver ruleResolver)
        {
            _db = db;
            _balanceService = balanceService;
            _ruleResolver = ruleResolver;
        }

        public async Task<PaymentEngineExecutionResult> ProcessExpenseApprovalAsync(
            Expense expense,
            long actorUserId,
            CancellationToken cancellationToken)
        {
            var header = await _db.ExpenseHeaders
                .AsNoTracking()
                .FirstOrDefaultAsync(h => h.Id == expense.ExpenseCategoryId, cancellationToken);

            var categoryBucket = header?.Category ?? "Expenses";
            var instruction = _ruleResolver.ResolveInstruction(categoryBucket);

            FinancialTransactionType txType;

            if (instruction.Direction == FinancialDirection.Outgoing)
            {
                txType = FinancialTransactionType.Outgoing;

                if (instruction.RequiresBalanceCheck)
                {
                    await _balanceService.ValidateSufficientBalanceAsync(
                        expense.PaymentMethod,
                        expense.SourceAccountId,
                        expense.SourceBankId,
                        expense.Amount,
                        cancellationToken);
                }

                await _balanceService.DebitAsync(
                    expense.PaymentMethod,
                    expense.SourceAccountId,
                    expense.SourceBankId,
                    expense.Amount,
                    cancellationToken);
            }
            else
            {
                txType = FinancialTransactionType.Incoming;

                await _balanceService.CreditAsync(
                    expense.PaymentMethod,
                    expense.SourceAccountId,
                    expense.SourceBankId,
                    expense.Amount,
                    cancellationToken);
            }

            // Create FinancialTransaction entity
            var tx = FinancialTransaction.Create(
                transactionType: txType,
                amount: expense.Amount,
                paymentMethod: expense.PaymentMethod,
                createdBy: expense.CreatedBy,
                sourceAccountId: expense.SourceAccountId,
                sourceBankId: expense.SourceBankId,
                referenceType: TransactionReferenceType.Expense,
                referenceId: expense.Id.ToString(),
                description: $"[{instruction.Description}] {expense.Description}",
                expenseHeaderId: expense.ExpenseCategoryId,
                initialStatus: FinancialTransactionStatus.Pending
            );

            tx.Approve(actorUserId);
            _db.Add(tx);
            await _db.SaveChangesAsync(cancellationToken);

            return new PaymentEngineExecutionResult(
                FinancialTransactionId: tx.Id,
                Status: tx.Status.ToString(),
                Amount: expense.Amount,
                Direction: instruction.Direction
            );
        }
    }
}

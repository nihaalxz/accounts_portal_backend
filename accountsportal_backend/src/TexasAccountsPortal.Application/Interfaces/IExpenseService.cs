using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using TexasAccountsPortal.Contracts.Expenses;

namespace TexasAccountsPortal.Application.Interfaces
{
    public interface IExpenseService
    {
        Task<ExpenseResponse> CreateExpenseAsync(
            CreateExpenseRequest request,
            long actorUserId,
            string correlationId,
            CancellationToken cancellationToken);

        Task<ExpenseResponse> SubmitExpenseAsync(
            long id,
            CancellationToken cancellationToken);

        Task<ExpenseResponse> ApproveExpenseAsync(
            long id,
            long actorUserId,
            CancellationToken cancellationToken);

        Task<ExpenseResponse> RejectExpenseAsync(
            long id,
            long actorUserId,
            RejectExpenseRequest request,
            CancellationToken cancellationToken);

        Task<ExpenseResponse> GetExpenseByIdAsync(
            long id,
            CancellationToken cancellationToken);

        Task<List<ExpenseResponse>> GetExpensesAsync(
            CancellationToken cancellationToken);

        Task<ExpenseResponse> CancelExpenseAsync(
            long id,
            CancellationToken cancellationToken);

        Task<ExpenseHeaderResponse> CreateExpenseHeaderAsync(
            CreateExpenseHeaderRequest request,
            long actorUserId,
            CancellationToken cancellationToken);

        Task<List<ExpenseHeaderResponse>> GetExpenseHeadersAsync(
            CancellationToken cancellationToken);

        Task<ExpenseSummaryResponse> GetExpenseSummaryAsync(
            CancellationToken cancellationToken);
    }
}

using System.Threading;
using System.Threading.Tasks;
using TexasAccountsPortal.Contracts.Expenses;

namespace TexasAccountsPortal.Application.Interfaces
{
    public interface IExpenseApprovalService
    {
        Task<ExpenseResponse> ApproveExpenseAsync(
            long id,
            long actorUserId,
            string idempotencyKey,
            string? rowVersion,
            CancellationToken cancellationToken);

        Task<ExpenseResponse> RejectExpenseAsync(
            long id,
            long actorUserId,
            RejectExpenseRequest request,
            CancellationToken cancellationToken);
    }
}

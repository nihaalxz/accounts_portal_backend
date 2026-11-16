using System.Threading;
using System.Threading.Tasks;
using TexasAccountsPortal.Domain.Entities;

namespace TexasAccountsPortal.Application.Interfaces
{
    public record PaymentEngineExecutionResult(
        long FinancialTransactionId,
        string Status,
        decimal Amount,
        FinancialDirection Direction
    );

    public interface IPaymentEngine
    {
        Task<PaymentEngineExecutionResult> ProcessExpenseApprovalAsync(
            Expense expense,
            long actorUserId,
            CancellationToken cancellationToken);
    }
}

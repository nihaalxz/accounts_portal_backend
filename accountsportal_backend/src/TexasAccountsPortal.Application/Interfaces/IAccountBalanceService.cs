using System.Threading;
using System.Threading.Tasks;
using TexasAccountsPortal.Domain.Enums;

namespace TexasAccountsPortal.Application.Interfaces
{
    public interface IAccountBalanceService
    {
        Task ValidateSufficientBalanceAsync(
            PaymentMethod method,
            long? sourceAccountId,
            long? sourceBankId,
            decimal amount,
            CancellationToken cancellationToken);

        Task DebitAsync(
            PaymentMethod method,
            long? sourceAccountId,
            long? sourceBankId,
            decimal amount,
            CancellationToken cancellationToken);

        Task CreditAsync(
            PaymentMethod method,
            long? sourceAccountId,
            long? sourceBankId,
            decimal amount,
            CancellationToken cancellationToken);
    }
}

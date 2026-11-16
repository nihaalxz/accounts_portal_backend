using System.Threading;
using System.Threading.Tasks;
using TexasAccountsPortal.Domain.Enums;

namespace TexasAccountsPortal.Application.Interfaces
{
    public record ResolvedDestinationAccount(long? CashAccountId, long? BankId);

    public interface IDestinationAccountResolver
    {
        Task<ResolvedDestinationAccount> ResolveDestinationAccountAsync(
            PaymentMethod paymentMethod,
            long? explicitCashAccountId,
            long? explicitBankId,
            IAccountsDbContext dbContext,
            CancellationToken cancellationToken = default);
    }
}

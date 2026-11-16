using System.Threading;
using System.Threading.Tasks;

namespace TexasAccountsPortal.Application.Interfaces
{
    public interface ISalesPortalWalletService
    {
        Task DebitHeadWalletAsync(long headId, decimal amount, string reason, CancellationToken cancellationToken);
        Task CreditHeadWalletAsync(long headId, decimal amount, string reason, CancellationToken cancellationToken);
    }
}

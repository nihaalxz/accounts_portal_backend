using System.Threading;
using System.Threading.Tasks;

namespace TexasAccountsPortal.Application.Interfaces
{
    public interface ILocalWalletService
    {
        Task DebitAgentWalletAsync(long agentId, decimal amount, CancellationToken cancellationToken);
        Task CreditAgentWalletAsync(long agentId, decimal amount, CancellationToken cancellationToken);
        Task DebitSupplierWalletAsync(long supplierId, decimal amount, CancellationToken cancellationToken);
        Task CreditSupplierWalletAsync(long supplierId, decimal amount, CancellationToken cancellationToken);
    }
}

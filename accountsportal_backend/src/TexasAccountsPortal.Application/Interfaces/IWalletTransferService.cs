using System.Threading;
using System.Threading.Tasks;

namespace TexasAccountsPortal.Application.Interfaces
{
    public interface IWalletTransferService
    {
        Task TransferAsync(
            PartyReference debitParty,
            PartyReference creditParty,
            decimal amount,
            string description,
            CancellationToken cancellationToken);

        Task DebitAsync(
            PartyReference party,
            decimal amount,
            string description,
            CancellationToken cancellationToken);

        Task CreditAsync(
            PartyReference party,
            decimal amount,
            string description,
            CancellationToken cancellationToken);
    }
}

using System.Threading;
using System.Threading.Tasks;

namespace TexasAccountsPortal.Application.Interfaces
{
    public interface IFinancialTransactionService
    {
        Task CreateTransferTransactionsAsync(
            string transferReference,
            PartyReference debitParty,
            PartyReference creditParty,
            decimal amount,
            long actorUserId,
            CancellationToken cancellationToken);
    }
}

using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using TexasAccountsPortal.Contracts.Transactions;
using TexasAccountsPortal.Domain.Entities;

namespace TexasAccountsPortal.Application.Interfaces
{
    public interface ITransactionPresentationMapper
    {
        Task<TransactionResponse> MapToResponseAsync(
            FinancialTransaction transaction,
            bool includeGl = false,
            CancellationToken ct = default);

        Task<List<TransactionResponse>> MapToResponsesAsync(
            IEnumerable<FinancialTransaction> transactions,
            bool includeGl = false,
            CancellationToken ct = default);
    }
}

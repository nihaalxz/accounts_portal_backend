using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using TexasAccountsPortal.Contracts.ChartOfAccounts;

namespace TexasAccountsPortal.Application.Interfaces
{
    public interface IChartOfAccountService
    {
        Task<ChartOfAccountResponse> CreateAccountAsync(
            CreateChartOfAccountRequest request,
            long actorUserId,
            CancellationToken cancellationToken);

        Task<ChartOfAccountResponse> UpdateAccountAsync(
            long id,
            UpdateChartOfAccountRequest request,
            long actorUserId,
            CancellationToken cancellationToken);

        Task DeleteAccountAsync(
            long id,
            long actorUserId,
            CancellationToken cancellationToken);

        Task<ChartOfAccountResponse> GetAccountByIdAsync(
            long id,
            CancellationToken cancellationToken);

        Task<List<ChartOfAccountResponse>> GetAccountsListAsync(
            CancellationToken cancellationToken);

        Task SeedSystemAccountsAsync(
            long actorUserId,
            CancellationToken cancellationToken);
    }
}

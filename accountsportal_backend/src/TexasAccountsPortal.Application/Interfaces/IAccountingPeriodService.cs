using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using TexasAccountsPortal.Contracts.AccountingPeriods;

namespace TexasAccountsPortal.Application.Interfaces
{
    public interface IAccountingPeriodService
    {
        Task<AccountingPeriodResponse> CreatePeriodAsync(
            CreateAccountingPeriodRequest request,
            CancellationToken cancellationToken);

        Task<AccountingPeriodResponse> ClosePeriodAsync(
            long id,
            long actorUserId,
            CancellationToken cancellationToken);

        Task<AccountingPeriodResponse> ReopenPeriodAsync(
            long id,
            long actorUserId,
            ReopenAccountingPeriodRequest request,
            CancellationToken cancellationToken);

        Task<AccountingPeriodResponse> GetPeriodByIdAsync(
            long id,
            CancellationToken cancellationToken);

        Task<List<AccountingPeriodResponse>> GetPeriodsAsync(
            CancellationToken cancellationToken);
    }
}

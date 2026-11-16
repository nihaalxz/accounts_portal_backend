using System;
using System.Threading;
using System.Threading.Tasks;
using TexasAccountsPortal.Contracts.Reporting;

namespace TexasAccountsPortal.Application.Interfaces
{
    public interface IReportingService
    {
        Task<TrialBalanceResponse> GetTrialBalanceAsync(
            DateTime? asOfDate,
            CancellationToken cancellationToken);

        Task<GeneralLedgerReportResponse> GetGeneralLedgerReportAsync(
            long accountId,
            DateTime startDate,
            DateTime endDate,
            CancellationToken cancellationToken);

        Task<AccountStatementResponse> GetAccountStatementAsync(
            string accountCode,
            DateTime startDate,
            DateTime endDate,
            CancellationToken cancellationToken);

        Task<ExpenseReportResponse> GetExpenseReportAsync(
            DateTime startDate,
            DateTime endDate,
            CancellationToken cancellationToken);

        Task<BalanceSheetResponse> GetBalanceSheetAsync(
            DateTime? asOfDate,
            CancellationToken cancellationToken);

        Task<ProfitAndLossResponse> GetProfitAndLossAsync(
            DateTime startDate,
            DateTime endDate,
            CancellationToken cancellationToken);

        Task<OperationalProfitAndLossResponse> GetOperationalProfitAndLossAsync(
            DateTime? startDate,
            DateTime? endDate,
            string? dealStatus,
            long? salesmanId,
            CancellationToken cancellationToken);

        Task<LedgerDashboardResponse> GetLedgerDashboardAsync(
            CancellationToken cancellationToken);
    }
}

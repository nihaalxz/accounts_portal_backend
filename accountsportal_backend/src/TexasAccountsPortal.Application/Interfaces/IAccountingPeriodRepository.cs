using System;
using System.Threading;
using System.Threading.Tasks;
using TexasAccountsPortal.Domain.Entities;

namespace TexasAccountsPortal.Application.Interfaces
{
    /// <summary>
    /// Provides period lookup operations required by the GL posting engine.
    /// Read-only access is sufficient for the posting engine; mutations are
    /// handled through IAccountsDbContext directly in the period management service.
    /// </summary>
    public interface IAccountingPeriodRepository
    {
        /// <summary>
        /// Returns the open accounting period that contains the given date,
        /// or null if no open period covers the date.
        /// </summary>
        Task<AccountingPeriod?> FindOpenPeriodForDateAsync(
            DateTime date,
            CancellationToken cancellationToken);
    }
}

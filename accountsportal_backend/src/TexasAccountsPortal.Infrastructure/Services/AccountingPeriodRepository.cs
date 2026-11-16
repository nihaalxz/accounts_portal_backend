using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Domain.Entities;
using TexasAccountsPortal.Infrastructure.Data;

namespace TexasAccountsPortal.Infrastructure.Services
{
    /// <summary>
    /// Infrastructure implementation of IAccountingPeriodRepository.
    /// Provides read-only period lookups for the GL posting engine.
    /// </summary>
    public sealed class AccountingPeriodRepository : IAccountingPeriodRepository
    {
        private readonly IAccountsDbContext _db;

        public AccountingPeriodRepository(IAccountsDbContext db)
        {
            _db = db;
        }

        public async Task<AccountingPeriod?> FindOpenPeriodForDateAsync(
            DateTime date,
            CancellationToken cancellationToken)
        {
            var dateOnly = date.Date;
            return await _db.AccountingPeriods
                .AsNoTracking()
                .Where(p => p.Status == Domain.Enums.AccountingPeriodStatus.Open
                         && p.StartDate <= dateOnly
                         && p.EndDate >= dateOnly)
                .FirstOrDefaultAsync(cancellationToken);
        }
    }
}

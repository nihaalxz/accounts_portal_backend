using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Contracts.AccountingPeriods;
using TexasAccountsPortal.Domain.Entities;
using TexasAccountsPortal.Domain.Enums;

namespace TexasAccountsPortal.Infrastructure.Services
{
    public sealed class AccountingPeriodService : IAccountingPeriodService
    {
        private readonly IAccountsDbContext _db;

        public AccountingPeriodService(IAccountsDbContext db)
        {
            _db = db;
        }

        public async Task<AccountingPeriodResponse> CreatePeriodAsync(
            CreateAccountingPeriodRequest request,
            CancellationToken cancellationToken)
        {
            // 1. Check unique combination of FiscalYear and PeriodNumber
            var combinationExists = await _db.AccountingPeriods
                .AnyAsync(p => p.FiscalYear == request.FiscalYear 
                            && p.PeriodNumber == request.PeriodNumber, cancellationToken);
            if (combinationExists)
                throw new InvalidOperationException($"Accounting period {request.PeriodNumber} for Fiscal Year {request.FiscalYear} already exists.");

            // 2. Check overlap
            var startDate = request.StartDate.Date;
            var endDate = request.EndDate.Date;

            var overlapExists = await _db.AccountingPeriods
                .AnyAsync(p => (startDate >= p.StartDate && startDate <= p.EndDate) ||
                               (endDate >= p.StartDate && endDate <= p.EndDate) ||
                               (startDate <= p.StartDate && endDate >= p.EndDate), cancellationToken);

            if (overlapExists)
                throw new InvalidOperationException("The date range for the new period overlaps with an existing accounting period.");

            var period = AccountingPeriod.Create(
                name: request.Name,
                fiscalYear: request.FiscalYear,
                periodNumber: request.PeriodNumber,
                startDate: startDate,
                endDate: endDate
            );

            _db.Add(period);
            await _db.SaveChangesAsync(cancellationToken);

            return MapToResponse(period);
        }

        public async Task<AccountingPeriodResponse> ClosePeriodAsync(
            long id,
            long actorUserId,
            CancellationToken cancellationToken)
        {
            var period = await _db.AccountingPeriods
                .FirstOrDefaultAsync(p => p.Id == id, cancellationToken);
            if (period is null)
                throw new KeyNotFoundException($"Accounting period with ID {id} not found.");

            // Verification check: check if any unposted approved journal entries or expenses exist in this period's date range
            var hasUnpostedJournals = await _db.JournalEntries
                .AnyAsync(j => j.EntryDate >= period.StartDate && j.EntryDate <= period.EndDate
                            && j.Status == JournalEntryStatus.Approved, cancellationToken);
            if (hasUnpostedJournals)
                throw new InvalidOperationException("Cannot close the period. There are approved but unposted journal entries within this period's date range.");

            var hasUnpostedExpenses = await _db.Expenses
                .AnyAsync(e => e.ExpenseDate >= period.StartDate && e.ExpenseDate <= period.EndDate
                            && e.Status == ExpenseStatus.Approved, cancellationToken);
            if (hasUnpostedExpenses)
                throw new InvalidOperationException("Cannot close the period. There are approved but unposted expenses within this period's date range.");

            period.Close(actorUserId);
            await _db.SaveChangesAsync(cancellationToken);

            return MapToResponse(period);
        }

        public async Task<AccountingPeriodResponse> ReopenPeriodAsync(
            long id,
            long actorUserId,
            ReopenAccountingPeriodRequest request,
            CancellationToken cancellationToken)
        {
            var period = await _db.AccountingPeriods
                .FirstOrDefaultAsync(p => p.Id == id, cancellationToken);
            if (period is null)
                throw new KeyNotFoundException($"Accounting period with ID {id} not found.");

            period.Reopen(actorUserId, request.Reason);
            await _db.SaveChangesAsync(cancellationToken);

            return MapToResponse(period);
        }

        public async Task<AccountingPeriodResponse> GetPeriodByIdAsync(
            long id,
            CancellationToken cancellationToken)
        {
            var period = await _db.AccountingPeriods
                .AsNoTracking()
                .FirstOrDefaultAsync(p => p.Id == id, cancellationToken);
            if (period is null)
                throw new KeyNotFoundException($"Accounting period with ID {id} not found.");

            return MapToResponse(period);
        }

        public async Task<List<AccountingPeriodResponse>> GetPeriodsAsync(
            CancellationToken cancellationToken)
        {
            var periods = await _db.AccountingPeriods
                .AsNoTracking()
                .OrderBy(p => p.FiscalYear)
                .ThenBy(p => p.PeriodNumber)
                .ToListAsync(cancellationToken);

            return periods.Select(MapToResponse).ToList();
        }

        private static AccountingPeriodResponse MapToResponse(AccountingPeriod period)
        {
            return new AccountingPeriodResponse(
                Id: period.Id,
                Name: period.Name,
                FiscalYear: period.FiscalYear,
                PeriodNumber: period.PeriodNumber,
                StartDate: period.StartDate,
                EndDate: period.EndDate,
                Status: period.Status.ToString().ToLowerInvariant(),
                ClosedAt: period.ClosedAt,
                ClosedByUserId: period.ClosedByUserId,
                ReopenedAt: period.ReopenedAt,
                ReopenedByUserId: period.ReopenedByUserId,
                ReopenReason: period.ReopenReason,
                CreatedAt: period.CreatedAt
            );
        }
    }
}

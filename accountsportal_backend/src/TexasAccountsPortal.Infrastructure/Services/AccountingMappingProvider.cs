using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Concurrent;
using System.Threading;
using System.Threading.Tasks;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Infrastructure.Data;
using TexasAccountsPortal.Infrastructure.Options;

namespace TexasAccountsPortal.Infrastructure.Services
{
    public sealed class AccountingMappingProvider : IAccountingMappingProvider
    {
        private readonly AccountsDbContext _db;
        private readonly AccountingMappingOptions _options;
        private readonly ConcurrentDictionary<string, (long Id, string Code)> _cache = new();

        public AccountingMappingProvider(
            AccountsDbContext db,
            IOptions<AccountingMappingOptions> options)
        {
            _db = db;
            _options = options.Value;
        }

        public async Task<long> GetAccountIdAsync(string key, CancellationToken ct)
        {
            var mapping = await ResolveMappingAsync(key, ct);
            return mapping.Id;
        }

        public async Task<string> GetAccountCodeAsync(string key, CancellationToken ct)
        {
            var mapping = await ResolveMappingAsync(key, ct);
            return mapping.Code;
        }

        private async Task<(long Id, string Code)> ResolveMappingAsync(string key, CancellationToken ct)
        {
            if (_cache.TryGetValue(key, out var cached))
                return cached;

            string code = key switch
            {
                AccountingMappingKeys.CashOnHand => _options.CashOnHand,
                AccountingMappingKeys.PrimaryBank => _options.PrimaryBank,
                AccountingMappingKeys.SalaryExpense => _options.SalaryExpense,
                AccountingMappingKeys.HousingAllowanceExpense => _options.HousingAllowanceExpense,
                AccountingMappingKeys.TransportAllowanceExpense => _options.TransportAllowanceExpense,
                AccountingMappingKeys.CommissionExpense => _options.CommissionExpense,
                AccountingMappingKeys.IncentiveExpense => _options.IncentiveExpense,
                AccountingMappingKeys.ReimbursementExpense => _options.ReimbursementExpense,
                AccountingMappingKeys.SalaryPayable => _options.SalaryPayable,
                AccountingMappingKeys.StaffAdvanceReceivable => _options.StaffAdvanceReceivable,
                AccountingMappingKeys.StaffLoanReceivable => _options.StaffLoanReceivable,
                AccountingMappingKeys.SupplierPayable => _options.SupplierPayable,
                AccountingMappingKeys.CustomerReceivable => _options.CustomerReceivable,
                AccountingMappingKeys.PurchaseReturnOffset => _options.PurchaseReturnOffset,
                AccountingMappingKeys.SalesReturnOffset => _options.SalesReturnOffset,
                AccountingMappingKeys.SupplierCreditControl => _options.SupplierCreditControl,
                AccountingMappingKeys.DefaultExpense => _options.DefaultExpense,
                AccountingMappingKeys.OfficeExpense => _options.OfficeExpense,
                AccountingMappingKeys.TravelExpense => _options.TravelExpense,
                AccountingMappingKeys.FlightBookingCost => _options.FlightBookingCost,
                AccountingMappingKeys.VisaApplicationCost => _options.VisaApplicationCost,
                AccountingMappingKeys.HotelBookingCost => _options.HotelBookingCost,
                AccountingMappingKeys.HolidayPackageCost => _options.HolidayPackageCost,
                _ => throw new ArgumentException($"Unknown accounting mapping key: {key}", nameof(key))
            };

            var account = await _db.ChartOfAccounts
                .AsNoTracking()
                .FirstOrDefaultAsync(a => a.Code == code, ct);

            if (account == null)
                throw new InvalidOperationException($"Accounting mapping for key '{key}' resolves to code '{code}', which does not exist in Chart of Accounts.");

            if (!account.IsActive)
                throw new InvalidOperationException($"Accounting mapping for key '{key}' resolves to code '{code}', which is inactive.");

            if (account.IsControlAccount)
                throw new InvalidOperationException($"Accounting mapping for key '{key}' resolves to code '{code}', which is a control account. Direct postings to control accounts are not allowed.");

            var hasChildren = await _db.ChartOfAccounts.AnyAsync(a => a.ParentId == account.Id, ct);
            if (hasChildren)
                throw new InvalidOperationException($"Accounting mapping for key '{key}' resolves to code '{code}', which is a parent/group account. Direct postings to parent/group accounts are not allowed.");

            var result = (account.Id, account.Code);
            _cache[key] = result;
            return result;
        }
    }
}

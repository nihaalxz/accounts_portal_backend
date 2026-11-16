using Microsoft.EntityFrameworkCore;
using System;
using System.Threading;
using System.Threading.Tasks;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Infrastructure.Data;

namespace TexasAccountsPortal.IntegrationTests
{
    public sealed class DefaultAccountingMappingProvider : IAccountingMappingProvider
    {
        private readonly AccountsDbContext _db;

        public DefaultAccountingMappingProvider(AccountsDbContext db)
        {
            _db = db;
        }

        public async Task<long> GetAccountIdAsync(string key, CancellationToken ct)
        {
            var code = GetDefaultCode(key);
            var account = await _db.ChartOfAccounts
                .AsNoTracking()
                .FirstOrDefaultAsync(a => a.Code == code, ct);

            if (account == null)
                throw new InvalidOperationException($"Default accounting mapping failed: Code '{code}' not found for key '{key}'.");

            return account.Id;
        }

        public Task<string> GetAccountCodeAsync(string key, CancellationToken ct)
        {
            return Task.FromResult(GetDefaultCode(key));
        }

        private static string GetDefaultCode(string key)
        {
            return key switch
            {
                AccountingMappingKeys.CashOnHand => "1111",
                AccountingMappingKeys.PrimaryBank => "1121",
                AccountingMappingKeys.SalaryExpense => "5010",
                AccountingMappingKeys.HousingAllowanceExpense => "5020",
                AccountingMappingKeys.TransportAllowanceExpense => "5030",
                AccountingMappingKeys.CommissionExpense => "5040",
                AccountingMappingKeys.IncentiveExpense => "5050",
                AccountingMappingKeys.ReimbursementExpense => "5060",
                AccountingMappingKeys.SalaryPayable => "2115",
                AccountingMappingKeys.StaffAdvanceReceivable => "1221",
                AccountingMappingKeys.StaffLoanReceivable => "1222",
                AccountingMappingKeys.SupplierPayable => "2111",
                AccountingMappingKeys.CustomerReceivable => "1211",
                AccountingMappingKeys.PurchaseReturnOffset => "5150",
                AccountingMappingKeys.SalesReturnOffset => "4100",
                AccountingMappingKeys.SupplierCreditControl => "2121",
                AccountingMappingKeys.DefaultExpense => "5230",
                AccountingMappingKeys.OfficeExpense => "5210",
                AccountingMappingKeys.TravelExpense => "5220",
                AccountingMappingKeys.FlightBookingCost => "5110",
                AccountingMappingKeys.VisaApplicationCost => "5120",
                AccountingMappingKeys.HotelBookingCost => "5130",
                AccountingMappingKeys.HolidayPackageCost => "5140",
                _ => throw new ArgumentException($"Unknown key: {key}")
            };
        }
    }
}

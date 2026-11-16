using System.Threading;
using System.Threading.Tasks;

namespace TexasAccountsPortal.Application.Interfaces
{
    public static class AccountingMappingKeys
    {
        public const string CashOnHand = "CashOnHand";
        public const string PrimaryBank = "PrimaryBank";
        public const string SalaryExpense = "SalaryExpense";
        public const string HousingAllowanceExpense = "HousingAllowanceExpense";
        public const string TransportAllowanceExpense = "TransportAllowanceExpense";
        public const string CommissionExpense = "CommissionExpense";
        public const string IncentiveExpense = "IncentiveExpense";
        public const string ReimbursementExpense = "ReimbursementExpense";
        public const string SalaryPayable = "SalaryPayable";
        public const string StaffAdvanceReceivable = "StaffAdvanceReceivable";
        public const string StaffLoanReceivable = "StaffLoanReceivable";
        public const string SupplierPayable = "SupplierPayable";
        public const string CustomerReceivable = "CustomerReceivable";
        public const string PurchaseReturnOffset = "PurchaseReturnOffset";
        public const string SalesReturnOffset = "SalesReturnOffset";
        public const string SupplierCreditControl = "SupplierCreditControl";
        public const string DefaultExpense = "DefaultExpense";
        public const string OfficeExpense = "OfficeExpense";
        public const string TravelExpense = "TravelExpense";
        public const string FlightBookingCost = "FlightBookingCost";
        public const string VisaApplicationCost = "VisaApplicationCost";
        public const string HotelBookingCost = "HotelBookingCost";
        public const string HolidayPackageCost = "HolidayPackageCost";
    }

    public interface IAccountingMappingProvider
    {
        Task<long> GetAccountIdAsync(string key, CancellationToken ct);
        Task<string> GetAccountCodeAsync(string key, CancellationToken ct);
    }
}

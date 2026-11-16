using System.ComponentModel.DataAnnotations;

namespace TexasAccountsPortal.Infrastructure.Options
{
    public class AccountingMappingOptions
    {
        public const string SectionName = "AccountingMappings";

        [Required, MinLength(1)]
        public string CashOnHand { get; set; } = string.Empty;

        [Required, MinLength(1)]
        public string PrimaryBank { get; set; } = string.Empty;

        [Required, MinLength(1)]
        public string SalaryExpense { get; set; } = string.Empty;

        [Required, MinLength(1)]
        public string HousingAllowanceExpense { get; set; } = string.Empty;

        [Required, MinLength(1)]
        public string TransportAllowanceExpense { get; set; } = string.Empty;

        [Required, MinLength(1)]
        public string CommissionExpense { get; set; } = string.Empty;

        [Required, MinLength(1)]
        public string IncentiveExpense { get; set; } = string.Empty;

        [Required, MinLength(1)]
        public string ReimbursementExpense { get; set; } = string.Empty;

        [Required, MinLength(1)]
        public string SalaryPayable { get; set; } = string.Empty;

        [Required, MinLength(1)]
        public string StaffAdvanceReceivable { get; set; } = string.Empty;

        [Required, MinLength(1)]
        public string StaffLoanReceivable { get; set; } = string.Empty;

        [Required, MinLength(1)]
        public string SupplierPayable { get; set; } = string.Empty;

        [Required, MinLength(1)]
        public string CustomerReceivable { get; set; } = string.Empty;

        [Required, MinLength(1)]
        public string PurchaseReturnOffset { get; set; } = string.Empty;

        [Required, MinLength(1)]
        public string SalesReturnOffset { get; set; } = string.Empty;

        [Required, MinLength(1)]
        public string SupplierCreditControl { get; set; } = string.Empty;

        [Required, MinLength(1)]
        public string DefaultExpense { get; set; } = string.Empty;

        [Required, MinLength(1)]
        public string OfficeExpense { get; set; } = string.Empty;

        [Required, MinLength(1)]
        public string TravelExpense { get; set; } = string.Empty;

        [Required, MinLength(1)]
        public string FlightBookingCost { get; set; } = string.Empty;

        [Required, MinLength(1)]
        public string VisaApplicationCost { get; set; } = string.Empty;

        [Required, MinLength(1)]
        public string HotelBookingCost { get; set; } = string.Empty;

        [Required, MinLength(1)]
        public string HolidayPackageCost { get; set; } = string.Empty;

        public bool BypassValidationWhenCoaEmpty { get; set; } = false;
    }
}

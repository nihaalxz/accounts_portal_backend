using System;

namespace TexasAccountsPortal.Domain.Entities
{
    public class StaffSalaryProfile
    {
        public long Id { get; set; }
        public string PortalType { get; set; } = "Account"; // "Account", "Sales", "Operational"
        public long PortalUserId { get; set; }
        public string EmployeeName { get; set; } = string.Empty;
        public string EmployeeEmail { get; set; } = string.Empty;
        public string EmployeeCode { get; set; } = string.Empty;
        public decimal BasicSalary { get; set; }
        public decimal DefaultMonthlyIncentive { get; set; }
        public string Currency { get; set; } = "BHD";
        public DateTime EffectiveFrom { get; set; } = DateTime.UtcNow;
        public DateTime? EffectiveTo { get; set; }
        public string Status { get; set; } = "Active"; // "Active", "Inactive"
        public string? Remarks { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime? UpdatedAt { get; set; } = DateTime.UtcNow;
    }
}

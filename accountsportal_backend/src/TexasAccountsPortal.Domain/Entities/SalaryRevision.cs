using System;

namespace TexasAccountsPortal.Domain.Entities
{
    public class SalaryRevision
    {
        public long Id { get; set; }
        public long SalaryProfileId { get; set; }
        public decimal OldBasicSalary { get; set; }
        public decimal NewBasicSalary { get; set; }
        public decimal OldMonthlyIncentive { get; set; }
        public decimal NewMonthlyIncentive { get; set; }
        public string Reason { get; set; } = string.Empty;
        public DateTime EffectiveDate { get; set; } = DateTime.UtcNow;
        public long ChangedBy { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        // Navigation property
        public StaffSalaryProfile? SalaryProfile { get; set; }
    }
}

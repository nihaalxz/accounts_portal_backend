using System;

namespace TexasAccountsPortal.Domain.Entities
{
    public class SalaryPayment
    {
        public long Id { get; set; }
        public long SalaryProfileId { get; set; }
        public int PayrollMonth { get; set; }
        public int PayrollYear { get; set; }
        public decimal BasicSalary { get; set; }
        public decimal Incentive { get; set; }
        public decimal Bonus { get; set; }
        public decimal Allowance { get; set; }
        public decimal Deduction { get; set; }
        public decimal NetSalary { get; set; }
        public string PaymentMethod { get; set; } = "Cash Account"; // "Cash Account" | "Bank Account"
        public long? CashAccountId { get; set; }
        public long? BankAccountId { get; set; }
        public string TransactionReference { get; set; } = string.Empty;
        public DateTime PaymentDate { get; set; } = DateTime.UtcNow;
        public long PaidByUserId { get; set; }
        public string Status { get; set; } = "Pending"; // "Pending", "Paid", "Cancelled"
        public string? Remarks { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime? UpdatedAt { get; set; } = DateTime.UtcNow;

        // Navigation properties
        public StaffSalaryProfile? SalaryProfile { get; set; }
        public Account? CashAccount { get; set; }
        public Bank? BankAccount { get; set; }
    }
}

using System;

namespace TexasAccountsPortal.Domain.Entities
{
    public class Bank
    {
        public long Id { get; set; }
        public string BankName { get; set; } = string.Empty;
        public string AccountNumber { get; set; } = string.Empty;
        
        // Opening balance set once
        public decimal Balance { get; set; }
        
        // Current balance mutated via domain methods
        public decimal CurrentBalance { get; private set; }
        
        public long CreatedBy { get; set; }
        public bool IsActive { get; set; } = true;
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
        public DateTime? DeletedAt { get; set; }
        
        // Optimistic concurrency token
        public byte[] RowVersion { get; set; } = Array.Empty<byte>();

        public void InitializeBalance(decimal openingBalance)
        {
            Balance = openingBalance;
            CurrentBalance = openingBalance;
        }

        public void Credit(decimal amount)
        {
            if (amount < 0)
                throw new ArgumentException("Amount to credit must be positive", nameof(amount));

            CurrentBalance += amount;
            UpdatedAt = DateTime.UtcNow;
        }

        public void Debit(decimal amount)
        {
            if (amount < 0)
                throw new ArgumentException("Amount to debit must be positive", nameof(amount));

            if (CurrentBalance < amount)
                throw new InvalidOperationException("Insufficient balance in source bank");

            CurrentBalance -= amount;
            UpdatedAt = DateTime.UtcNow;
        }

        public void ApplyBalanceCorrection(decimal adjustmentAmount)
        {
            // Balance correction can adjust balance directly (can be positive or negative)
            CurrentBalance += adjustmentAmount;
            UpdatedAt = DateTime.UtcNow;
        }
    }
}

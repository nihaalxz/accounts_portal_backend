using System;
using TexasAccountsPortal.Domain.Enums;

namespace TexasAccountsPortal.Domain.Entities
{
    public class Account
    {
        public long Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public AccountType Type { get; set; }
        public LedgerType LedgerType { get; set; } = LedgerType.Asset;
        
        // Opening balance set once
        public decimal Balance { get; set; }
        
        // Current balance mutated via domain methods
        public decimal CurrentBalance { get; private set; }
        
        public long? BankId { get; set; }
        public bool IsActive { get; set; } = true;
        public long CreatedBy { get; set; }
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

        public bool HasSufficientBalance(decimal amount)
        {
            // For asset and expense accounts, we check if current balance is enough.
            // For liability, capital, and income, balance can be negative or positive depending on entry types.
            // Let's preserve the legacy rule: current_balance >= amount
            return CurrentBalance >= amount;
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

            if (!HasSufficientBalance(amount))
                throw new InvalidOperationException("Insufficient balance in source account");

            CurrentBalance -= amount;
            UpdatedAt = DateTime.UtcNow;
        }

        public void ApplyBalanceCorrection(decimal adjustmentAmount)
        {
            CurrentBalance += adjustmentAmount;
            UpdatedAt = DateTime.UtcNow;
        }
    }
}

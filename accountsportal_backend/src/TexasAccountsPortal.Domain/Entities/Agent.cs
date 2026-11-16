using System;

namespace TexasAccountsPortal.Domain.Entities
{
    public class Agent
    {
        public long Id { get; set; }
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public long? SalesmanId { get; set; }
        public string? PhoneNo { get; set; }
        public string? EmailId { get; set; }
        public string? Nationality { get; set; }
        public string? Address { get; set; }
        public decimal Wallet { get; private set; }
        public bool IsVerified { get; set; } = true;
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
        
        // Optimistic concurrency token
        public byte[] RowVersion { get; set; } = Array.Empty<byte>();

        public string GetFullName() => $"{FirstName} {LastName}".Trim();

        public void CreditWallet(decimal amount)
        {
            if (amount < 0)
                throw new ArgumentException("Amount must be positive", nameof(amount));

            Wallet += amount;
            UpdatedAt = DateTime.UtcNow;
        }

        public void DebitWallet(decimal amount)
        {
            if (amount < 0)
                throw new ArgumentException("Amount must be positive", nameof(amount));

            // Agents can sometimes have negative wallets or specific debit logic,
            // let's follow the standard debit subtraction
            Wallet -= amount;
            UpdatedAt = DateTime.UtcNow;
        }
    }
}

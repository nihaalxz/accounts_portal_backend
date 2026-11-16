using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace TexasAccountsPortal.Domain.Entities
{
    public class Supplier
    {
        public long Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Code { get; set; } = string.Empty;
        
        /// <summary>
        /// Signed running wallet balance:
        /// > 0: Prepaid funds deposited with the supplier (Texas asset / surplus)
        /// < 0: Outstanding debt / credit Texas owes the supplier (liability)
        /// = 0: Fully settled
        /// </summary>
        public decimal Wallet { get; private set; }

        [NotMapped]
        public decimal Balance => Wallet;

        public List<string> Categories { get; set; } = new();
        public bool IsVerified { get; set; } = true;
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
        public DateTime? DeletedAt { get; set; }
        
        // Optimistic concurrency token
        public byte[] RowVersion { get; set; } = Array.Empty<byte>();

        /// <summary>
        /// Credits funds to the supplier wallet: cash out to supplier (top-up or debt settlement)
        /// or refund/return from supplier. Moves balance toward positive.
        /// </summary>
        public void CreditWallet(decimal amount)
        {
            if (amount <= 0)
                throw new ArgumentException("Credit amount must be positive", nameof(amount));

            Wallet += amount;
            UpdatedAt = DateTime.UtcNow;
        }

        public void AddToWallet(decimal amount) => CreditWallet(amount);

        /// <summary>
        /// Debits the supplier wallet: booking expenses (prepaid or credit) or withdrawal refund.
        /// Moves balance toward negative. Allowed to go below zero (debt).
        /// </summary>
        public void DebitWallet(decimal amount)
        {
            if (amount <= 0)
                throw new ArgumentException("Debit amount must be positive", nameof(amount));

            Wallet -= amount;
            UpdatedAt = DateTime.UtcNow;
        }

        /// <summary>
        /// Sets the opening balance when provisioning a supplier. May be positive or negative.
        /// </summary>
        public void SetInitialWallet(decimal amount)
        {
            Wallet = amount;
            UpdatedAt = DateTime.UtcNow;
        }
    }
}

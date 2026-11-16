using System;

namespace TexasAccountsPortal.Domain.Entities
{
    public class BalanceCorrection
    {
        public long Id { get; set; }
        public string DocumentNumber { get; set; } = "TXSBAL-" + Guid.NewGuid().ToString("N")[..8].ToUpperInvariant();
        public long AccountId { get; set; }
        public decimal Amount { get; set; }
        public decimal? BalanceAfter { get; set; }
        public string Reason { get; set; } = string.Empty;
        public long EditedBy { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
    }
}

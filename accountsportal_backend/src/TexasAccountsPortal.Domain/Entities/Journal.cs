using System;
using TexasAccountsPortal.Domain.Enums;

namespace TexasAccountsPortal.Domain.Entities
{
    public class Journal
    {
        public long Id { get; set; }
        public string JournalNumber { get; set; } = string.Empty;
        public string? TransferReference { get; set; }
        public string DebitPartyType { get; set; } = string.Empty; // "agent", "supplier", "head"
        public long DebitPartyId { get; set; }
        public string CreditPartyType { get; set; } = string.Empty; // "agent", "supplier", "head"
        public long CreditPartyId { get; set; }
        public decimal Amount { get; set; }
        public FinancialTransactionStatus Status { get; set; } = FinancialTransactionStatus.Pending;
        public string? Note { get; set; }
        public long? CreatedBy { get; set; }
        public long? ApprovedBy { get; set; }
        public DateTime? ApprovedAt { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
        public byte[] RowVersion { get; set; } = Array.Empty<byte>();
    }
}

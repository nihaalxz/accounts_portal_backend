using System;

namespace TexasAccountsPortal.Domain.Entities
{
    public enum IncentiveStatus
    {
        Pending,
        Approved,
        Rejected,
        Posted
    }

    public class IncentiveRecord
    {
        public long Id { get; set; }
        public long StaffId { get; set; }
        public decimal Amount { get; set; }
        public string SourceReference { get; set; } = string.Empty;
        
        public int Month { get; set; }
        public int Year { get; set; }
        public IncentiveStatus Status { get; set; } = IncentiveStatus.Pending;
        public long? PayrollRunId { get; set; }
        
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public byte[] RowVersion { get; set; } = Array.Empty<byte>();
    }
}

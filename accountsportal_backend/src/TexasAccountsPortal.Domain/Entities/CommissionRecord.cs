using System;

namespace TexasAccountsPortal.Domain.Entities
{
    public enum CommissionStatus
    {
        Pending,
        Approved,
        Rejected,
        Posted
    }

    public class CommissionRecord
    {
        public long Id { get; set; }
        public long StaffId { get; set; }
        public decimal Amount { get; set; }
        public string BookingType { get; set; } = string.Empty;
        public string BookingId { get; set; } = string.Empty;
        public string SourceReference { get; set; } = string.Empty;
        
        public int Month { get; set; }
        public int Year { get; set; }
        public CommissionStatus Status { get; set; } = CommissionStatus.Pending;
        public long? PayrollRunId { get; set; }
        
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public byte[] RowVersion { get; set; } = Array.Empty<byte>();
    }
}

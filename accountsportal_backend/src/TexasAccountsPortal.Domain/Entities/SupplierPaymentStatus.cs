using System;

namespace TexasAccountsPortal.Domain.Entities
{
    public class SupplierPaymentStatus
    {
        public long Id { get; set; }
        public string ServiceType { get; set; } = string.Empty; // "flight", "visa", etc.
        public string ServiceId { get; set; } = string.Empty;
        public bool IsCompleted { get; set; }
        public long? CompletedBy { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
    }
}

using System;

namespace TexasAccountsPortal.Domain.Entities
{
    public class AuditLog
    {
        public long Id { get; set; }
        public long? ActorUserId { get; set; }
        public string Action { get; set; } = string.Empty;
        public string EntityType { get; set; } = string.Empty;
        public string EntityId { get; set; } = string.Empty;
        public string? OldState { get; set; } // JSON
        public string? NewState { get; set; } // JSON
        public string? Reason { get; set; }
        public string CorrelationId { get; set; } = string.Empty;
        public string? IpAddress { get; set; }
        public string? UserAgent { get; set; }
        public DateTime OccurredAt { get; set; } = DateTime.UtcNow;
    }
}

using System;

namespace TexasAccountsPortal.Domain.Entities
{
    public class OutboxMessage
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public string MessageType { get; set; } = string.Empty;
        public string AggregateType { get; set; } = string.Empty;
        public string AggregateId { get; set; } = string.Empty;
        public string Payload { get; set; } = string.Empty; // JSON
        public DateTime OccurredAt { get; set; } = DateTime.UtcNow;
        public DateTime AvailableAt { get; set; } = DateTime.UtcNow;
        public DateTime? ProcessedAt { get; set; }
        public int AttemptCount { get; set; }
        public DateTime? LastAttemptAt { get; set; }
        public string? LastError { get; set; }
        public string CorrelationId { get; set; } = string.Empty;
        public string Status { get; set; } = "pending"; // "pending", "processed", "failed"
    }
}

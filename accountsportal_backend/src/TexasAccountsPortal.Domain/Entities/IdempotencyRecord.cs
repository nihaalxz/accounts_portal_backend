using System;

namespace TexasAccountsPortal.Domain.Entities
{
    public class IdempotencyRecord
    {
        public string Id { get; set; } = string.Empty; // Mapped to Scope + Key
        public string Scope { get; set; } = string.Empty;
        public string Key { get; set; } = string.Empty;
        public string RequestHash { get; set; } = string.Empty;
        public string Status { get; set; } = "pending"; // "pending", "completed"
        public int ResponseStatusCode { get; set; }
        public string? ResponseBody { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime? CompletedAt { get; set; }
        public DateTime ExpiresAt { get; set; } = DateTime.UtcNow.AddDays(7);
    }
}

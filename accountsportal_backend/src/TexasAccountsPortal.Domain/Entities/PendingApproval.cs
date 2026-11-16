using System;

namespace TexasAccountsPortal.Domain.Entities
{
    /// <summary>
    /// Tracks creation requests submitted by normal accountants that require
    /// master accountant approval before the actual entity is persisted.
    /// </summary>
    public class PendingApproval
    {
        public long Id { get; set; }
        public string DocumentNumber { get; set; } = $"PA-{Guid.NewGuid().ToString("N")[..8].ToUpper()}";

        /// <summary>
        /// Discriminator: "agent" or "supplier"
        /// </summary>
        public string EntityType { get; set; } = string.Empty;

        /// <summary>
        /// JSON-serialized payload matching the CreateAgentRequest / CreateSupplierRequest
        /// contract so the approve action can deserialize and replay the creation.
        /// </summary>
        public string PayloadJson { get; set; } = string.Empty;

        public long SubmittedByUserId { get; set; }
        public string SubmittedByName { get; set; } = string.Empty;
        public DateTime SubmittedAt { get; set; } = DateTime.UtcNow;

        /// <summary>
        /// "pending" | "approved" | "rejected"
        /// </summary>
        public string Status { get; set; } = "pending";

        public string? ReviewedByName { get; set; }
        public DateTime? ReviewedAt { get; set; }
    }
}

using System;
using TexasAccountsPortal.Domain.Enums;

namespace TexasAccountsPortal.Domain.Entities
{
    public class AccountsReceipt
    {
        public long Id { get; set; }
        public string ReceiptNumber { get; set; } = string.Empty;
        public string ReferenceId { get; set; } = string.Empty;
        public string DestinationType { get; set; } = "account";
        public long? DestinationAccountId { get; set; }
        public long? DestinationBankId { get; set; }
        public decimal Amount { get; set; }
        public string? Narration { get; set; }
        public string? PaymentProof { get; set; }
        public long CreatedByUserId { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public string Status { get; set; } = "Posted";
        public ReceiptCategory ReceiptCategory { get; set; } = ReceiptCategory.General;
        public long? SalesmanId { get; set; }
        public string? SalesmanName { get; set; }
        public string ClientType { get; set; } = "general"; // customer, agent, general
        public long? HeadId { get; set; }
        public long? AgentId { get; set; }
        public string? ClientName { get; set; }
        public string SyncStatus { get; set; } = "Synced"; // Synced, PendingSync, Failed
        public string? SalesPortalReceiptId { get; set; }
        public string? SalesPortalDocumentNumber { get; set; }
        public string? FailureReason { get; set; }
        public DateTime? ReceiptDate { get; set; }

        // Navigation properties
        public Account? DestinationAccount { get; set; }
        public Bank? DestinationBank { get; set; }
    }
}
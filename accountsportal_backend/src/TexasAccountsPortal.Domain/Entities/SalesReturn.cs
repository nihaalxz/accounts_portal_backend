using System;
using TexasAccountsPortal.Domain.Enums;

namespace TexasAccountsPortal.Domain.Entities
{
    public class SalesReturn
    {
        public long Id { get; private set; }
        public string DocumentNumber { get; set; } = "TXSSRET-" + Guid.NewGuid().ToString("N")[..8].ToUpperInvariant();
        public RecipientType RecipientType { get; private set; }
        public long RecipientId { get; private set; }
        public string OriginalSaleReference { get; private set; } = string.Empty;
        public string? ExternalReference { get; private set; }
        public string? ServiceType { get; private set; }
        public decimal Amount { get; private set; }
        public string Currency { get; private set; } = "BHD";
        public string Reason { get; private set; } = string.Empty;
        public FinancialTransactionStatus Status { get; private set; } = FinancialTransactionStatus.Pending;
        public long RequestedByUserId { get; private set; }
        public DateTime RequestedAt { get; private set; } = DateTime.UtcNow;
        public long? ApprovedByUserId { get; private set; }
        public DateTime? ApprovedAt { get; private set; }
        public long? RejectedByUserId { get; private set; }
        public DateTime? RejectedAt { get; private set; }
        public string? SourceType { get; private set; }
        public long? SourceBankId { get; private set; }
        public long? SourceAccountId { get; private set; }
        public string? RejectionReason { get; private set; }
        public string? CorrelationId { get; private set; }
        public DateTime CreatedAt { get; private set; } = DateTime.UtcNow;
        public DateTime UpdatedAt { get; private set; } = DateTime.UtcNow;
        
        // Concurrency token
        public byte[] RowVersion { get; set; } = Array.Empty<byte>();

        // EF Constructor
        private SalesReturn() { }

        public static SalesReturn Create(
            RecipientType recipientType,
            long recipientId,
            string originalSaleReference,
            decimal amount,
            string reason,
            long requestedByUserId,
            string? sourceType = null,
            long? sourceBankId = null,
            long? sourceAccountId = null,
            string? serviceType = null,
            string? externalReference = null,
            string? correlationId = null,
            FinancialTransactionStatus initialStatus = FinancialTransactionStatus.Pending)
        {
            if (string.IsNullOrWhiteSpace(originalSaleReference))
                throw new ArgumentException("Original sale reference is required", nameof(originalSaleReference));

            if (amount <= 0)
                throw new ArgumentException("Return amount must be positive", nameof(amount));

            return new SalesReturn
            {
                RecipientType = recipientType,
                RecipientId = recipientId,
                OriginalSaleReference = originalSaleReference,
                Amount = amount,
                Reason = reason,
                RequestedByUserId = requestedByUserId,
                SourceType = sourceType,
                SourceBankId = sourceBankId,
                SourceAccountId = sourceAccountId,
                ServiceType = serviceType,
                ExternalReference = externalReference,
                CorrelationId = correlationId,
                Status = initialStatus,
                RequestedAt = DateTime.UtcNow,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            };
        }

        public void Approve(long approvedByUserId)
        {
            if (Status != FinancialTransactionStatus.Pending)
                throw new InvalidOperationException("Only pending sales returns can be approved");

            Status = FinancialTransactionStatus.Approved;
            ApprovedByUserId = approvedByUserId;
            ApprovedAt = DateTime.UtcNow;
            UpdatedAt = DateTime.UtcNow;
        }

        public void Reject(long rejectedByUserId, string? reason)
        {
            if (Status != FinancialTransactionStatus.Pending)
                throw new InvalidOperationException("Only pending sales returns can be rejected");

            Status = FinancialTransactionStatus.Rejected;
            RejectedByUserId = rejectedByUserId;
            RejectedAt = DateTime.UtcNow;
            RejectionReason = reason;
            UpdatedAt = DateTime.UtcNow;
        }
    }
}

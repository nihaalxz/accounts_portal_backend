using System;
using TexasAccountsPortal.Domain.Enums;

namespace TexasAccountsPortal.Domain.Entities
{
    public class PurchaseReturn
    {
        public long Id { get; private set; }
        public string DocumentNumber { get; set; } = "TXSPRET-" + Guid.NewGuid().ToString("N")[..8].ToUpperInvariant();
        public long SupplierId { get; private set; }
        public string OriginalPurchaseReference { get; private set; } = string.Empty;
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
        public string? DestinationType { get; private set; }
        public long? DestinationBankId { get; private set; }
        public long? DestinationAccountId { get; private set; }
        public string? RejectionReason { get; private set; }
        public string? CorrelationId { get; private set; }
        public DateTime CreatedAt { get; private set; } = DateTime.UtcNow;
        public DateTime UpdatedAt { get; private set; } = DateTime.UtcNow;
        
        // Concurrency token
        public byte[] RowVersion { get; set; } = Array.Empty<byte>();

        // EF Constructor
        private PurchaseReturn() { }

        public static PurchaseReturn Create(
            long supplierId,
            string originalPurchaseReference,
            decimal amount,
            string reason,
            long requestedByUserId,
            string? destinationType = null,
            long? destinationBankId = null,
            long? destinationAccountId = null,
            string? serviceType = null,
            string? externalReference = null,
            string? correlationId = null,
            FinancialTransactionStatus initialStatus = FinancialTransactionStatus.Pending)
        {
            if (string.IsNullOrWhiteSpace(originalPurchaseReference))
                throw new ArgumentException("Original purchase reference is required", nameof(originalPurchaseReference));

            if (amount <= 0)
                throw new ArgumentException("Return amount must be positive", nameof(amount));

            return new PurchaseReturn
            {
                SupplierId = supplierId,
                OriginalPurchaseReference = originalPurchaseReference,
                Amount = amount,
                Reason = reason,
                RequestedByUserId = requestedByUserId,
                DestinationType = destinationType,
                DestinationBankId = destinationBankId,
                DestinationAccountId = destinationAccountId,
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
                throw new InvalidOperationException("Only pending purchase returns can be approved");

            Status = FinancialTransactionStatus.Approved;
            ApprovedByUserId = approvedByUserId;
            ApprovedAt = DateTime.UtcNow;
            UpdatedAt = DateTime.UtcNow;
        }

        public void Reject(long rejectedByUserId, string? reason)
        {
            if (Status != FinancialTransactionStatus.Pending)
                throw new InvalidOperationException("Only pending purchase returns can be rejected");

            Status = FinancialTransactionStatus.Rejected;
            RejectedByUserId = rejectedByUserId;
            RejectedAt = DateTime.UtcNow;
            RejectionReason = reason;
            UpdatedAt = DateTime.UtcNow;
        }
    }
}

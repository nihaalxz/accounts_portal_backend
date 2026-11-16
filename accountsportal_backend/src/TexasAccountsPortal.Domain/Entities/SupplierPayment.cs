using System;
using TexasAccountsPortal.Domain.Enums;

namespace TexasAccountsPortal.Domain.Entities
{
    public class SupplierPayment
    {
        public long Id { get; private set; }
        public string DocumentNumber { get; set; } = "TXSPAY-" + Guid.NewGuid().ToString("N")[..8].ToUpperInvariant();
        public long SupplierId { get; private set; }
        public decimal Amount { get; private set; }
        public string Currency { get; private set; } = "BHD";
        public PaymentMethod PaymentMethod { get; private set; }
        public string? SourceType { get; private set; }
        public long? SourceBankId { get; private set; }
        public long? SourceAccountId { get; private set; }
        public string? ReferenceNumber { get; private set; }
        public string? ExternalReference { get; private set; }
        public string? ServiceType { get; private set; }
        public string? Description { get; private set; }
        public FinancialTransactionStatus Status { get; private set; } = FinancialTransactionStatus.Pending;
        public long RequestedByUserId { get; private set; }
        public DateTime RequestedAt { get; private set; } = DateTime.UtcNow;
        public long? ApprovedByUserId { get; private set; }
        public DateTime? ApprovedAt { get; private set; }
        public long? RejectedByUserId { get; private set; }
        public DateTime? RejectedAt { get; private set; }
        public string? RejectionReason { get; private set; }
        public string? CorrelationId { get; private set; }
        public string? SalesFeeRowKey { get; set; }
        public bool NeedsManualReconciliation { get; set; } = false;
        public string? ReconciliationNote { get; set; }
        public DateTime CreatedAt { get; private set; } = DateTime.UtcNow;
        public DateTime UpdatedAt { get; private set; } = DateTime.UtcNow;
        
        // Concurrency token
        public byte[] RowVersion { get; set; } = Array.Empty<byte>();

        // EF Constructor
        private SupplierPayment() { }

        public static SupplierPayment Create(
            long supplierId,
            decimal amount,
            PaymentMethod paymentMethod,
            long requestedByUserId,
            long? sourceBankId = null,
            long? sourceAccountId = null,
            string? sourceType = null,
            string? referenceNumber = null,
            string? externalReference = null,
            string? serviceType = null,
            string? description = null,
            string? correlationId = null,
            FinancialTransactionStatus initialStatus = FinancialTransactionStatus.Pending,
            string? salesFeeRowKey = null)
        {
            if (amount < 0)
                throw new ArgumentException("Payment amount cannot be negative", nameof(amount));

            return new SupplierPayment
            {
                SupplierId = supplierId,
                Amount = amount,
                PaymentMethod = paymentMethod,
                RequestedByUserId = requestedByUserId,
                SourceBankId = sourceBankId,
                SourceAccountId = sourceAccountId,
                SourceType = sourceType,
                ReferenceNumber = referenceNumber,
                ExternalReference = externalReference,
                ServiceType = serviceType,
                Description = description,
                CorrelationId = correlationId,
                SalesFeeRowKey = salesFeeRowKey,
                Status = initialStatus,
                RequestedAt = DateTime.UtcNow,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            };
        }

        public void Approve(long approvedByUserId)
        {
            if (Status != FinancialTransactionStatus.Pending)
                throw new InvalidOperationException("Only pending supplier payments can be approved");

            Status = FinancialTransactionStatus.Approved;
            ApprovedByUserId = approvedByUserId;
            ApprovedAt = DateTime.UtcNow;
            UpdatedAt = DateTime.UtcNow;
        }

        public void Reject(long rejectedByUserId, string? reason)
        {
            if (Status != FinancialTransactionStatus.Pending)
                throw new InvalidOperationException("Only pending supplier payments can be rejected");

            Status = FinancialTransactionStatus.Rejected;
            RejectedByUserId = rejectedByUserId;
            RejectedAt = DateTime.UtcNow;
            RejectionReason = reason;
            UpdatedAt = DateTime.UtcNow;
        }

        public void UpdateDetails(
            decimal amount,
            long? supplierId,
            string? referenceNumber,
            string? description,
            PaymentMethod? paymentMethod = null,
            string? sourceType = null,
            long? sourceBankId = null,
            long? sourceAccountId = null)
        {
            if (Status != FinancialTransactionStatus.Pending)
                throw new InvalidOperationException("Only pending supplier payments can be updated.");

            if (amount < 0)
                throw new ArgumentException("Payment amount cannot be negative", nameof(amount));

            Amount = amount;
            if (supplierId.HasValue && supplierId.Value > 0)
            {
                SupplierId = supplierId.Value;
            }
            if (referenceNumber != null)
            {
                ReferenceNumber = referenceNumber;
            }
            if (description != null)
            {
                Description = description;
            }
            if (paymentMethod.HasValue)
            {
                PaymentMethod = paymentMethod.Value;
            }
            if (sourceType != null || sourceBankId.HasValue || sourceAccountId.HasValue)
            {
                SourceType = sourceType;
                SourceBankId = sourceBankId;
                SourceAccountId = sourceAccountId;
            }
            UpdatedAt = DateTime.UtcNow;
        }
    }
}

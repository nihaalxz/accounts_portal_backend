using System;
using TexasAccountsPortal.Domain.Enums;

namespace TexasAccountsPortal.Domain.Entities
{
    public class FinancialTransaction
    {
        // Primary Key
        public long Id { get; private set; }
        public string DocumentNumber { get; set; } = "TXSTRN-" + Guid.NewGuid().ToString("N")[..8].ToUpperInvariant();

        // Immutable Fields
        public FinancialTransactionType TransactionType { get; private set; }
        public long? SourceAccountId { get; private set; }
        public long? DestinationAccountId { get; private set; }
        public decimal Amount { get; private set; }
        public decimal? BalanceAfter { get; set; } // Set upon posting approval/execution
        public PaymentMethod PaymentMethod { get; private set; }
        public TransactionReferenceType? ReferenceType { get; private set; }
        public string? ReferenceId { get; private set; }
        public string? Description { get; private set; }
        public string? ReturnReason { get; private set; }
        public RecipientType? RecipientType { get; private set; }
        public long? RecipientId { get; private set; }
        public long? SupplierId { get; private set; }
        public long? OriginalTransactionId { get; private set; }
        public string? SupplierName { get; private set; }
        public long? SourceBankId { get; private set; }
        public long? DestinationBankId { get; private set; }
        public long? ExpenseHeaderId { get; private set; }
        public ReceiptOrigin? ReceiptOrigin { get; set; }
        
        public long CreatedBy { get; private set; }
        public DateTime CreatedAt { get; private set; } = DateTime.UtcNow;
        public DateTime UpdatedAt { get; private set; } = DateTime.UtcNow;

        // Mutable workflow state fields
        public FinancialTransactionStatus Status { get; private set; } = FinancialTransactionStatus.Pending;
        public long? ApprovedBy { get; private set; }
        public DateTime? ApprovedAt { get; private set; }
        public long? RejectedBy { get; private set; }
        public DateTime? RejectedAt { get; private set; }

        // EF Core constructor
        private FinancialTransaction() { }

        // Domain Factory
        public static FinancialTransaction Create(
            FinancialTransactionType transactionType,
            decimal amount,
            PaymentMethod paymentMethod,
            long createdBy,
            long? sourceAccountId = null,
            long? destinationAccountId = null,
            long? sourceBankId = null,
            long? destinationBankId = null,
            TransactionReferenceType? referenceType = null,
            string? referenceId = null,
            string? description = null,
            long? supplierId = null,
            string? supplierName = null,
            long? expenseHeaderId = null,
            RecipientType? recipientType = null,
            long? recipientId = null,
            long? originalTransactionId = null,
            string? returnReason = null,
            FinancialTransactionStatus initialStatus = FinancialTransactionStatus.Pending,
            ReceiptOrigin? receiptOrigin = null)
        {
            if (amount <= 0)
                throw new ArgumentException("Transaction amount must be greater than zero", nameof(amount));

            return new FinancialTransaction
            {
                TransactionType = transactionType,
                Amount = amount,
                PaymentMethod = paymentMethod,
                CreatedBy = createdBy,
                SourceAccountId = sourceAccountId,
                DestinationAccountId = destinationAccountId,
                SourceBankId = sourceBankId,
                DestinationBankId = destinationBankId,
                ReferenceType = referenceType,
                ReferenceId = referenceId,
                Description = description,
                SupplierId = supplierId,
                SupplierName = supplierName,
                ExpenseHeaderId = expenseHeaderId,
                RecipientType = recipientType,
                RecipientId = recipientId,
                OriginalTransactionId = originalTransactionId,
                ReturnReason = returnReason,
                Status = initialStatus,
                ReceiptOrigin = receiptOrigin,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            };
        }

        public void SetDestinationAccount(long? accountId, long? bankId = null)
        {
            if (accountId.HasValue) DestinationAccountId = accountId;
            if (bankId.HasValue) DestinationBankId = bankId;
            UpdatedAt = DateTime.UtcNow;
        }

        public void SetReferenceId(string? referenceId)
        {
            if (!string.IsNullOrWhiteSpace(referenceId))
            {
                ReferenceId = referenceId.Trim();
                UpdatedAt = DateTime.UtcNow;
            }
        }

        public void SetReferenceType(TransactionReferenceType referenceType)
        {
            ReferenceType = referenceType;
            UpdatedAt = DateTime.UtcNow;
        }

        public void Approve(long approvedBy)
        {
            if (Status != FinancialTransactionStatus.Pending)
                throw new InvalidOperationException("Only pending transactions can be approved");

            Status = FinancialTransactionStatus.Approved;
            ApprovedBy = approvedBy;
            ApprovedAt = DateTime.UtcNow;
            UpdatedAt = DateTime.UtcNow;
        }

        public void Reject(long rejectedBy, string? reason = null)
        {
            if (Status != FinancialTransactionStatus.Pending)
                throw new InvalidOperationException("Only pending transactions can be rejected");

            Status = FinancialTransactionStatus.Rejected;
            RejectedBy = rejectedBy;
            RejectedAt = DateTime.UtcNow;
            ReturnReason = reason ?? ReturnReason;
            UpdatedAt = DateTime.UtcNow;
        }
    }
}

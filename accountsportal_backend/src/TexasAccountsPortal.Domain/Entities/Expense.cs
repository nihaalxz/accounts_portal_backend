using System;
using TexasAccountsPortal.Domain.Enums;

namespace TexasAccountsPortal.Domain.Entities
{
    /// <summary>
    /// Represents a single business expense transaction.
    /// Separate from the general FinancialTransaction entity.
    /// Expenses have their own lifecycle: Draft → PendingApproval → Approved → Posted → Reversed.
    /// On approval, an operational FinancialTransaction is created for the balance debit.
    /// On posting, a JournalEntry + GL entries are created for the accounting record.
    /// </summary>
    public class Expense
    {
        public long Id { get; private set; }

        /// <summary>Human-readable reference number (e.g., TXAEXP000045).</summary>
        public string ExpenseNumber { get; private set; } = string.Empty;

        public string DocumentNumber { get => string.IsNullOrEmpty(ExpenseNumber) ? $"TXAEXP{Id:D6}" : ExpenseNumber; set => ExpenseNumber = value; }

        /// <summary>FK to expense_headers (expense category).</summary>
        public long ExpenseCategoryId { get; private set; }

        public decimal Amount { get; private set; }

        /// <summary>ISO currency code (e.g., "BHD").</summary>
        public string Currency { get; private set; } = "BHD";

        public string Description { get; private set; } = string.Empty;

        public PaymentMethod PaymentMethod { get; private set; }

        /// <summary>FK to accounts (cash account) if payment method is Cash.</summary>
        public long? SourceAccountId { get; private set; }

        /// <summary>FK to banks if payment method is BankTransfer or Bank.</summary>
        public long? SourceBankId { get; private set; }

        /// <summary>Business date of the expense.</summary>
        public DateTime ExpenseDate { get; private set; }

        public ExpenseStatus Status { get; private set; }

        /// <summary>FK to financial_transactions created upon approval.</summary>
        public long? PostedTransactionId { get; private set; }

        /// <summary>FK to journal_entries created upon GL posting.</summary>
        public long? PostedJournalEntryId { get; private set; }

        public string? RejectionReason { get; private set; }
        public string? Notes { get; private set; }

        public string CorrelationId { get; private set; } = string.Empty;

        public long CreatedBy { get; private set; }
        public long? ApprovedBy { get; private set; }
        public DateTime? ApprovedAt { get; private set; }
        public long? RejectedBy { get; private set; }
        public DateTime? RejectedAt { get; private set; }
        public long? PostedBy { get; private set; }
        public DateTime? PostedAt { get; private set; }

        public DateTime CreatedAt { get; private set; }
        public DateTime UpdatedAt { get; private set; }

        public byte[] RowVersion { get; set; } = Array.Empty<byte>();

        // EF Core constructor
        private Expense() { }

        public static Expense Create(
            string expenseNumber,
            long expenseCategoryId,
            decimal amount,
            string description,
            PaymentMethod paymentMethod,
            DateTime expenseDate,
            string correlationId,
            long createdBy,
            string currency = "BHD",
            long? sourceAccountId = null,
            long? sourceBankId = null,
            string? notes = null)
        {
            if (string.IsNullOrWhiteSpace(expenseNumber))
                throw new ArgumentException("Expense number is required.", nameof(expenseNumber));
            if (expenseCategoryId <= 0)
                throw new ArgumentException("Expense category ID must be positive.", nameof(expenseCategoryId));
            if (amount <= 0)
                throw new ArgumentException("Expense amount must be greater than zero.", nameof(amount));
            if (string.IsNullOrWhiteSpace(description))
                throw new ArgumentException("Description is required.", nameof(description));
            if (string.IsNullOrWhiteSpace(correlationId))
                throw new ArgumentException("Correlation ID is required.", nameof(correlationId));

            var now = DateTime.UtcNow;
            return new Expense
            {
                ExpenseNumber = expenseNumber,
                ExpenseCategoryId = expenseCategoryId,
                Amount = amount,
                Currency = currency,
                Description = description,
                PaymentMethod = paymentMethod,
                ExpenseDate = expenseDate.Date,
                SourceAccountId = sourceAccountId,
                SourceBankId = sourceBankId,
                Notes = notes,
                CorrelationId = correlationId,
                CreatedBy = createdBy,
                Status = ExpenseStatus.Draft,
                CreatedAt = now,
                UpdatedAt = now
            };
        }

        public void Submit()
        {
            if (Status != ExpenseStatus.Draft)
                throw new InvalidOperationException("Only Draft expenses can be submitted for approval.");
            Status = ExpenseStatus.PendingApproval;
            UpdatedAt = DateTime.UtcNow;
        }

        public void Approve(long approvedByUserId, long postedTransactionId)
        {
            if (Status != ExpenseStatus.PendingApproval && Status != ExpenseStatus.Draft)
                throw new InvalidOperationException("Only Draft or PendingApproval expenses can be approved.");

            Status = ExpenseStatus.Approved;
            ApprovedBy = approvedByUserId;
            ApprovedAt = DateTime.UtcNow;
            PostedTransactionId = postedTransactionId;
            UpdatedAt = DateTime.UtcNow;
        }

        public void Reject(long rejectedByUserId, string reason)
        {
            if (Status != ExpenseStatus.PendingApproval && Status != ExpenseStatus.Draft)
                throw new InvalidOperationException("Only Draft or PendingApproval expenses can be rejected.");
            if (string.IsNullOrWhiteSpace(reason))
                throw new ArgumentException("Rejection reason is required.", nameof(reason));

            Status = ExpenseStatus.Rejected;
            RejectedBy = rejectedByUserId;
            RejectedAt = DateTime.UtcNow;
            RejectionReason = reason;
            UpdatedAt = DateTime.UtcNow;
        }

        public void Cancel()
        {
            if (Status != ExpenseStatus.Draft)
                throw new InvalidOperationException("Only Draft expenses can be cancelled.");
            Status = ExpenseStatus.Cancelled;
            UpdatedAt = DateTime.UtcNow;
        }

        public void MarkPosted(long postedByUserId, long journalEntryId)
        {
            if (Status != ExpenseStatus.Approved)
                throw new InvalidOperationException("Only Approved expenses can be posted to the GL.");

            Status = ExpenseStatus.Posted;
            PostedBy = postedByUserId;
            PostedAt = DateTime.UtcNow;
            PostedJournalEntryId = journalEntryId;
            UpdatedAt = DateTime.UtcNow;
        }

        public void MarkReversed()
        {
            if (Status != ExpenseStatus.Posted)
                throw new InvalidOperationException("Only Posted expenses can be reversed.");
            Status = ExpenseStatus.Reversed;
            UpdatedAt = DateTime.UtcNow;
        }
    }
}

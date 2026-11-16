using System;
using System.Collections.Generic;
using System.Linq;
using TexasAccountsPortal.Domain.Enums;

namespace TexasAccountsPortal.Domain.Entities
{
    /// <summary>
    /// A formal double-entry journal entry. Each entry must contain at least two JournalEntryLines
    /// such that total debits equal total credits. Posted entries are immutable.
    /// </summary>
    public class JournalEntry
    {
        private readonly List<JournalEntryLine> _lines = new();

        public long Id { get; private set; }
        public string JournalNumber { get; private set; } = string.Empty;
        public string DocumentNumber { get => string.IsNullOrEmpty(JournalNumber) ? $"TXAJRN{Id:D6}" : JournalNumber; set => JournalNumber = value; }
        public DateTime EntryDate { get; private set; }
        public DateTime? PostingDate { get; private set; }
        public string Description { get; private set; } = string.Empty;
        public string? Reference { get; private set; }

        /// <summary>e.g., "Manual", "Expense", "SupplierPayment", "Reversal"</summary>
        public string SourceType { get; private set; } = string.Empty;

        /// <summary>FK to the originating record (Expense.Id, SupplierPayment.Id, etc.).</summary>
        /// <summary>String-typed source ID for consistent tracking across GL entries (e.g., "42", "EXP-001").</summary>
        public string? SourceId { get; private set; }

        public JournalEntryStatus Status { get; private set; }

        /// <summary>If this is a reversal, points to the original JournalEntry.Id.</summary>
        public long? ReversalOfJournalEntryId { get; private set; }

        /// <summary>If this entry has been reversed, points to the reversal JournalEntry.Id.</summary>
        public long? ReversedByJournalEntryId { get; private set; }

        public string CorrelationId { get; private set; } = string.Empty;

        public long? CreatedBy { get; private set; }
        public long? ApprovedBy { get; private set; }
        public DateTime? ApprovedAt { get; private set; }
        public long? RejectedBy { get; private set; }
        public DateTime? RejectedAt { get; private set; }
        public string? RejectionReason { get; private set; }
        public long? PostedBy { get; private set; }

        public DateTime CreatedAt { get; private set; }
        public DateTime UpdatedAt { get; private set; }

        public byte[] RowVersion { get; set; } = Array.Empty<byte>();

        public IReadOnlyList<JournalEntryLine> Lines => _lines.AsReadOnly();

        // EF Core constructor
        private JournalEntry() { }

        public static JournalEntry Create(
            string journalNumber,
            DateTime entryDate,
            string description,
            string sourceType,
            string correlationId,
            long? createdBy = null,
            string? reference = null,
            string? sourceId = null,
            long? reversalOfJournalEntryId = null)
        {
            if (string.IsNullOrWhiteSpace(journalNumber))
                throw new ArgumentException("Journal number is required.", nameof(journalNumber));
            if (string.IsNullOrWhiteSpace(description))
                throw new ArgumentException("Description is required.", nameof(description));
            if (string.IsNullOrWhiteSpace(sourceType))
                throw new ArgumentException("Source type is required.", nameof(sourceType));
            if (string.IsNullOrWhiteSpace(correlationId))
                throw new ArgumentException("Correlation ID is required.", nameof(correlationId));

            var now = DateTime.UtcNow;
            return new JournalEntry
            {
                JournalNumber = journalNumber,
                EntryDate = entryDate.Date,
                Description = description,
                Reference = reference,
                SourceType = sourceType,
                SourceId = sourceId,
                CorrelationId = correlationId,
                CreatedBy = createdBy,
                ReversalOfJournalEntryId = reversalOfJournalEntryId,
                Status = JournalEntryStatus.Draft,
                CreatedAt = now,
                UpdatedAt = now
            };
        }

        public void AddLine(JournalEntryLine line)
        {
            if (Status != JournalEntryStatus.Draft)
                throw new InvalidOperationException("Lines can only be added to Draft journal entries.");
            _lines.Add(line);
            UpdatedAt = DateTime.UtcNow;
        }

        /// <summary>Validates that the entry is balanced (total debits = total credits).</summary>
        public bool IsBalanced()
        {
            if (_lines.Count < 2) return false;
            var totalDebit = _lines.Sum(l => l.Debit);
            var totalCredit = _lines.Sum(l => l.Credit);
            return totalDebit == totalCredit && totalDebit > 0;
        }

        public void Submit(long submittedByUserId)
        {
            if (Status != JournalEntryStatus.Draft)
                throw new InvalidOperationException("Only Draft journal entries can be submitted.");
            if (!IsBalanced())
                throw new InvalidOperationException("Journal entry is not balanced. Total debits must equal total credits.");

            Status = JournalEntryStatus.Submitted;
            UpdatedAt = DateTime.UtcNow;
        }

        public void Approve(long approvedByUserId)
        {
            if (Status != JournalEntryStatus.Submitted)
                throw new InvalidOperationException("Only Submitted journal entries can be approved.");

            Status = JournalEntryStatus.Approved;
            ApprovedBy = approvedByUserId;
            ApprovedAt = DateTime.UtcNow;
            UpdatedAt = DateTime.UtcNow;
        }

        public void Reject(long rejectedByUserId, string reason)
        {
            if (Status != JournalEntryStatus.Submitted && Status != JournalEntryStatus.Draft)
                throw new InvalidOperationException("Only Draft or Submitted journal entries can be rejected.");
            if (string.IsNullOrWhiteSpace(reason))
                throw new ArgumentException("Rejection reason is required.", nameof(reason));

            Status = JournalEntryStatus.Rejected;
            RejectedBy = rejectedByUserId;
            RejectedAt = DateTime.UtcNow;
            RejectionReason = reason;
            UpdatedAt = DateTime.UtcNow;
        }

        public void Post(long postedByUserId, DateTime postingDate)
        {
            if (Status != JournalEntryStatus.Approved && Status != JournalEntryStatus.Draft)
                throw new InvalidOperationException("Only Approved or Draft journal entries can be posted.");
            if (!IsBalanced())
                throw new InvalidOperationException("Journal entry is not balanced.");

            Status = JournalEntryStatus.Posted;
            PostedBy = postedByUserId;
            PostingDate = postingDate;
            UpdatedAt = DateTime.UtcNow;
        }

        /// <summary>Called when a reversal entry has been created for this entry.</summary>
        public void MarkReversed(long reversalJournalEntryId)
        {
            if (Status != JournalEntryStatus.Posted)
                throw new InvalidOperationException("Only Posted journal entries can be reversed.");
            if (ReversedByJournalEntryId.HasValue)
                throw new InvalidOperationException("This journal entry has already been reversed.");

            ReversedByJournalEntryId = reversalJournalEntryId;
            Status = JournalEntryStatus.Reversed;
            UpdatedAt = DateTime.UtcNow;
        }
    }
}

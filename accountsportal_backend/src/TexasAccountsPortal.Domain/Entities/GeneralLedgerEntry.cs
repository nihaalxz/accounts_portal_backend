using System;

namespace TexasAccountsPortal.Domain.Entities
{
    /// <summary>
    /// An append-only General Ledger entry.
    /// Created exclusively through IAccountingPostingService.
    /// Never updated or deleted after creation.
    /// </summary>
    public class GeneralLedgerEntry
    {
        public long Id { get; private set; }

        /// <summary>FK to chart_of_accounts.</summary>
        public long AccountId { get; private set; }

        /// <summary>FK to journal_entries.</summary>
        public long JournalEntryId { get; private set; }

        /// <summary>FK to journal_entry_lines.</summary>
        public long JournalEntryLineId { get; private set; }

        /// <summary>Business date of the posting (must fall within an open AccountingPeriod).</summary>
        public DateTime PostingDate { get; private set; }

        /// <summary>Debit amount. 0 if this is a credit entry.</summary>
        public decimal Debit { get; private set; }

        /// <summary>Credit amount. 0 if this is a debit entry.</summary>
        public decimal Credit { get; private set; }

        public string Description { get; private set; } = string.Empty;

        /// <summary>e.g., "FinancialTransaction", "Expense", "JournalEntry", "SupplierPayment"</summary>
        public string SourceType { get; private set; } = string.Empty;

        /// <summary>PK of the source record as string to accommodate different ID types.</summary>
        public string SourceId { get; private set; } = string.Empty;

        /// <summary>Human-readable reference string (e.g., transaction number).</summary>
        public string? SourceReference { get; private set; }

        public string CorrelationId { get; private set; } = string.Empty;

        /// <summary>Immutable creation timestamp.</summary>
        public DateTime CreatedAt { get; private set; }

        // EF Core constructor
        private GeneralLedgerEntry() { }

        public static GeneralLedgerEntry CreateDebitEntry(
            long accountId,
            long journalEntryId,
            long journalEntryLineId,
            DateTime postingDate,
            decimal amount,
            string description,
            string sourceType,
            string sourceId,
            string correlationId,
            string? sourceReference = null)
        {
            ValidateArgs(accountId, amount, description, sourceType, sourceId, correlationId);
            return new GeneralLedgerEntry
            {
                AccountId = accountId,
                JournalEntryId = journalEntryId,
                JournalEntryLineId = journalEntryLineId,
                PostingDate = postingDate.Date,
                Debit = amount,
                Credit = 0,
                Description = description,
                SourceType = sourceType,
                SourceId = sourceId,
                SourceReference = sourceReference,
                CorrelationId = correlationId,
                CreatedAt = DateTime.UtcNow
            };
        }

        public static GeneralLedgerEntry CreateCreditEntry(
            long accountId,
            long journalEntryId,
            long journalEntryLineId,
            DateTime postingDate,
            decimal amount,
            string description,
            string sourceType,
            string sourceId,
            string correlationId,
            string? sourceReference = null)
        {
            ValidateArgs(accountId, amount, description, sourceType, sourceId, correlationId);
            return new GeneralLedgerEntry
            {
                AccountId = accountId,
                JournalEntryId = journalEntryId,
                JournalEntryLineId = journalEntryLineId,
                PostingDate = postingDate.Date,
                Debit = 0,
                Credit = amount,
                Description = description,
                SourceType = sourceType,
                SourceId = sourceId,
                SourceReference = sourceReference,
                CorrelationId = correlationId,
                CreatedAt = DateTime.UtcNow
            };
        }

        private static void ValidateArgs(long accountId, decimal amount, string description, string sourceType, string sourceId, string correlationId)
        {
            if (accountId <= 0)
                throw new ArgumentException("Account ID must be positive.", nameof(accountId));
            if (amount <= 0)
                throw new ArgumentException("GL entry amount must be greater than zero.", nameof(amount));
            if (string.IsNullOrWhiteSpace(description))
                throw new ArgumentException("GL entry description is required.", nameof(description));
            if (string.IsNullOrWhiteSpace(sourceType))
                throw new ArgumentException("GL entry source type is required.", nameof(sourceType));
            if (string.IsNullOrWhiteSpace(sourceId))
                throw new ArgumentException("GL entry source ID is required.", nameof(sourceId));
            if (string.IsNullOrWhiteSpace(correlationId))
                throw new ArgumentException("Correlation ID is required.", nameof(correlationId));
        }
    }
}

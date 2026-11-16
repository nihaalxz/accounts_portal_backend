using System;

namespace TexasAccountsPortal.Domain.Entities
{
    /// <summary>
    /// A single debit or credit line within a JournalEntry.
    /// Exactly one of Debit or Credit must be greater than zero per line.
    /// </summary>
    public class JournalEntryLine
    {
        public long Id { get; private set; }
        public long JournalEntryId { get; private set; }

        /// <summary>FK to chart_of_accounts. Must be a posting (non-control) account.</summary>
        public long AccountId { get; private set; }

        public int LineNumber { get; private set; }
        public string? LineDescription { get; private set; }
        public decimal Debit { get; private set; }
        public decimal Credit { get; private set; }
        public string? SourceReference { get; private set; }

        public DateTime CreatedAt { get; private set; }

        // EF Core constructor
        private JournalEntryLine() { }

        public static JournalEntryLine CreateDebit(
            long journalEntryId,
            long accountId,
            decimal amount,
            int lineNumber,
            string? description = null,
            string? sourceReference = null)
        {
            ValidateAmount(amount);
            return new JournalEntryLine
            {
                JournalEntryId = journalEntryId,
                AccountId = accountId,
                Debit = amount,
                Credit = 0,
                LineNumber = lineNumber,
                LineDescription = description,
                SourceReference = sourceReference,
                CreatedAt = DateTime.UtcNow
            };
        }

        public static JournalEntryLine CreateCredit(
            long journalEntryId,
            long accountId,
            decimal amount,
            int lineNumber,
            string? description = null,
            string? sourceReference = null)
        {
            ValidateAmount(amount);
            return new JournalEntryLine
            {
                JournalEntryId = journalEntryId,
                AccountId = accountId,
                Debit = 0,
                Credit = amount,
                LineNumber = lineNumber,
                LineDescription = description,
                SourceReference = sourceReference,
                CreatedAt = DateTime.UtcNow
            };
        }

        private static void ValidateAmount(decimal amount)
        {
            if (amount <= 0)
                throw new ArgumentException("Journal entry line amount must be greater than zero.", nameof(amount));
        }
    }
}

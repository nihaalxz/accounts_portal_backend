using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using TexasAccountsPortal.Domain.Enums;

namespace TexasAccountsPortal.Application.Interfaces
{
    /// <summary>
    /// Defines the single controlled posting boundary for the General Ledger.
    /// All GL postings must go through this service.
    /// Implementations must:
    ///   - Verify the posting date falls within an open AccountingPeriod
    ///   - Prevent duplicate postings for the same source (SourceType + SourceId)
    ///   - Create JournalEntry + JournalEntryLines atomically with GeneralLedgerEntries
    ///   - Be called within an ITransactionalExecutor unit of work
    /// </summary>
    public interface IAccountingPostingService
    {
        /// <summary>
        /// Posts a balanced set of GL lines to the ledger.
        /// Creates a JournalEntry (auto-approved, status = Posted) with the given lines.
        /// Validates that total debits = total credits.
        /// Validates that the posting date is within an open period.
        /// Prevents duplicate posting for (sourceType, sourceId).
        /// </summary>
        Task<AccountingPostingResult> PostJournalAsync(
            PostJournalRequest request,
            CancellationToken cancellationToken);

        /// <summary>
        /// Posts a reversal of an existing JournalEntry.
        /// Creates a new JournalEntry with swapped debits/credits.
        /// Marks the original as Reversed.
        /// Validates the original has not already been reversed.
        /// </summary>
        Task<AccountingPostingResult> PostReversalAsync(
            long originalJournalEntryId,
            DateTime reversalDate,
            string description,
            string correlationId,
            long postedByUserId,
            CancellationToken cancellationToken);

        /// <summary>
        /// Posts an existing approved/draft JournalEntry in the database to the GL.
        /// Transitions status to Posted and writes all corresponding GeneralLedgerEntries.
        /// </summary>
        Task<AccountingPostingResult> PostExistingJournalAsync(
            long journalEntryId,
            long postedByUserId,
            CancellationToken cancellationToken);

        /// <summary>
        /// Returns true if a GL posting already exists for this (sourceType, sourceId).
        /// Used for idempotency checks before posting.
        /// </summary>
        Task<bool> ExistsPostingForSourceAsync(
            string sourceType,
            string sourceId,
            CancellationToken cancellationToken);
    }

    /// <summary>Request model for posting a balanced journal entry to the GL.</summary>
    public record PostJournalRequest(
        string JournalNumber,
        DateTime EntryDate,
        string Description,
        string SourceType,
        string SourceId,
        string CorrelationId,
        long PostedByUserId,
        string? Reference,
        long? ReversalOfJournalEntryId,
        IReadOnlyList<PostJournalLineRequest> Lines);

    /// <summary>A single debit or credit line for a journal posting.</summary>
    public record PostJournalLineRequest(
        long AccountId,
        decimal Debit,
        decimal Credit,
        int LineNumber,
        string? LineDescription,
        string? SourceReference);

    /// <summary>Result returned after a successful GL posting.</summary>
    public record AccountingPostingResult(
        long JournalEntryId,
        string JournalNumber,
        DateTime PostingDate,
        decimal TotalDebit,
        decimal TotalCredit);
}

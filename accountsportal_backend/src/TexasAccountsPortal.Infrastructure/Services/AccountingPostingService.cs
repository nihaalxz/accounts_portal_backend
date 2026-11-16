using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Domain.Entities;
using TexasAccountsPortal.Domain.Enums;

namespace TexasAccountsPortal.Infrastructure.Services
{
    /// <summary>
    /// Single controlled posting boundary for the General Ledger.
    /// All GL postings must go through this service.
    ///
    /// Invariants enforced:
    ///   1. Posting date must fall within an open AccountingPeriod
    ///   2. Total debits must equal total credits
    ///   3. No duplicate posting for (SourceType, SourceId)
    ///   4. GL entries are append-only — no update/delete paths exist
    ///   5. This service must be called within an ITransactionalExecutor unit of work
    /// </summary>
    public sealed class AccountingPostingService : IAccountingPostingService
    {
        private readonly IAccountsDbContext _db;
        private readonly IAccountingPeriodRepository _periodRepository;

        public AccountingPostingService(
            IAccountsDbContext db,
            IAccountingPeriodRepository periodRepository)
        {
            _db = db;
            _periodRepository = periodRepository;
        }

        public async Task<AccountingPostingResult> PostJournalAsync(
            PostJournalRequest request,
            CancellationToken cancellationToken)
        {
            // 1. Validate the posting date has an open period
            var period = await _periodRepository.FindOpenPeriodForDateAsync(
                request.EntryDate, cancellationToken);
            if (period is null)
                throw new InvalidOperationException(
                    $"No open accounting period covers the posting date {request.EntryDate:yyyy-MM-dd}. " +
                    "Create or reopen a period before posting.");

            // 2. Prevent duplicate postings for the same source
            var alreadyPosted = await ExistsPostingForSourceAsync(
                request.SourceType, request.SourceId, cancellationToken);
            if (alreadyPosted)
                throw new InvalidOperationException(
                    $"A GL posting already exists for {request.SourceType}/{request.SourceId}. " +
                    "Duplicate posting rejected.");

            // 3. Validate lines
            if (request.Lines == null || request.Lines.Count < 2)
                throw new InvalidOperationException("A journal entry must have at least 2 lines.");

            var totalDebit = request.Lines.Sum(l => l.Debit);
            var totalCredit = request.Lines.Sum(l => l.Credit);
            if (totalDebit != totalCredit || totalDebit <= 0)
                throw new InvalidOperationException(
                    $"Journal entry is not balanced. Total Debit={totalDebit:0.000}, Total Credit={totalCredit:0.000}.");

            // 4. Validate all accounts exist and are posting accounts (not control accounts)
            var accountIds = request.Lines.Select(l => l.AccountId).Distinct().ToList();
            var accounts = await _db.ChartOfAccounts
                .Where(a => accountIds.Contains(a.Id))
                .ToListAsync(cancellationToken);

            if (accounts.Count != accountIds.Count)
            {
                var missing = accountIds.Except(accounts.Select(a => a.Id));
                throw new InvalidOperationException(
                    $"GL accounts not found: {string.Join(", ", missing)}");
            }

            foreach (var acct in accounts)
            {
                if (!acct.IsActive)
                    throw new InvalidOperationException(
                        $"GL account {acct.Code} ({acct.Name}) is inactive and cannot receive postings.");
                if (acct.IsControlAccount)
                    throw new InvalidOperationException(
                        $"GL account {acct.Code} ({acct.Name}) is a control account. Direct postings are not allowed.");
                var hasChildren = await _db.ChartOfAccounts.AnyAsync(a => a.ParentId == acct.Id, cancellationToken);
                if (hasChildren)
                    throw new InvalidOperationException(
                        $"GL account {acct.Code} ({acct.Name}) is a parent/group account. Direct postings are not allowed.");
            }

            // 5. Create JournalEntry (auto-posted)
            var journalEntry = JournalEntry.Create(
                journalNumber: request.JournalNumber,
                entryDate: request.EntryDate,
                description: request.Description,
                sourceType: request.SourceType,
                correlationId: request.CorrelationId,
                createdBy: request.PostedByUserId,
                reference: request.Reference,
                sourceId: request.SourceId,
                reversalOfJournalEntryId: request.ReversalOfJournalEntryId);

            _db.Add(journalEntry);
            // Flush to get the journal entry ID
            await _db.SaveChangesAsync(cancellationToken);

            // 6. Create JournalEntryLines
            var lineEntities = new List<JournalEntryLine>();
            foreach (var line in request.Lines)
            {
                JournalEntryLine lineEntity = line.Debit > 0
                    ? JournalEntryLine.CreateDebit(
                        journalEntry.Id, line.AccountId, line.Debit,
                        line.LineNumber, line.LineDescription, line.SourceReference)
                    : JournalEntryLine.CreateCredit(
                        journalEntry.Id, line.AccountId, line.Credit,
                        line.LineNumber, line.LineDescription, line.SourceReference);
                lineEntities.Add(lineEntity);
                _db.Add(lineEntity);
            }
            await _db.SaveChangesAsync(cancellationToken);

            // 7. Post the journal entry (transition to Posted status)
            journalEntry.Post(request.PostedByUserId, request.EntryDate);
            await _db.SaveChangesAsync(cancellationToken);

            // 8. Create GeneralLedgerEntries for each line
            for (int i = 0; i < lineEntities.Count; i++)
            {
                var line = lineEntities[i];
                var req = request.Lines[i];

                GeneralLedgerEntry glEntry = line.Debit > 0
                    ? GeneralLedgerEntry.CreateDebitEntry(
                        accountId: line.AccountId,
                        journalEntryId: journalEntry.Id,
                        journalEntryLineId: line.Id,
                        postingDate: request.EntryDate,
                        amount: line.Debit,
                        description: req.LineDescription ?? request.Description,
                        sourceType: request.SourceType,
                        sourceId: request.SourceId,
                        correlationId: request.CorrelationId,
                        sourceReference: req.SourceReference)
                    : GeneralLedgerEntry.CreateCreditEntry(
                        accountId: line.AccountId,
                        journalEntryId: journalEntry.Id,
                        journalEntryLineId: line.Id,
                        postingDate: request.EntryDate,
                        amount: line.Credit,
                        description: req.LineDescription ?? request.Description,
                        sourceType: request.SourceType,
                        sourceId: request.SourceId,
                        correlationId: request.CorrelationId,
                        sourceReference: req.SourceReference);
                _db.Add(glEntry);
            }
            await _db.SaveChangesAsync(cancellationToken);

            return new AccountingPostingResult(
                JournalEntryId: journalEntry.Id,
                JournalNumber: journalEntry.JournalNumber,
                PostingDate: request.EntryDate,
                TotalDebit: totalDebit,
                TotalCredit: totalCredit);
        }

        public async Task<AccountingPostingResult> PostReversalAsync(
            long originalJournalEntryId,
            DateTime reversalDate,
            string description,
            string correlationId,
            long postedByUserId,
            CancellationToken cancellationToken)
        {
            // 1. Load the original journal entry with lines
            var original = await _db.JournalEntries
                .Include(j => j.Lines)
                .FirstOrDefaultAsync(j => j.Id == originalJournalEntryId, cancellationToken);

            if (original is null)
                throw new InvalidOperationException(
                    $"Journal entry {originalJournalEntryId} not found.");
            if (original.Status != JournalEntryStatus.Posted)
                throw new InvalidOperationException(
                    $"Only Posted journal entries can be reversed. Current status: {original.Status}.");
            if (original.ReversedByJournalEntryId.HasValue)
                throw new InvalidOperationException(
                    $"Journal entry {originalJournalEntryId} has already been reversed by entry {original.ReversedByJournalEntryId}.");

            // 2. Validate reversal date has an open period
            var period = await _periodRepository.FindOpenPeriodForDateAsync(
                reversalDate, cancellationToken);
            if (period is null)
                throw new InvalidOperationException(
                    $"No open accounting period covers the reversal date {reversalDate:yyyy-MM-dd}.");

            // 3. Build the reversal request with swapped debit/credit
            var reversalLines = original.Lines
                .OrderBy(l => l.LineNumber)
                .Select((l, idx) => new PostJournalLineRequest(
                    AccountId: l.AccountId,
                    Debit: l.Credit,   // swap
                    Credit: l.Debit,   // swap
                    LineNumber: idx + 1,
                    LineDescription: $"Reversal: {l.LineDescription}",
                    SourceReference: l.SourceReference))
                .ToList();

            var reversalNumber = $"REV-{original.JournalNumber}";

            var reversalRequest = new PostJournalRequest(
                JournalNumber: reversalNumber,
                EntryDate: reversalDate,
                Description: description,
                SourceType: "JournalReversal",
                SourceId: originalJournalEntryId.ToString(),
                CorrelationId: correlationId,
                PostedByUserId: postedByUserId,
                Reference: $"Reversal of {original.JournalNumber}",
                ReversalOfJournalEntryId: originalJournalEntryId,
                Lines: reversalLines);

            // Post the reversal via the normal posting path (will validate period, balance, etc.)
            var result = await PostJournalAsync(reversalRequest, cancellationToken);

            // 4. Mark original as reversed
            original.MarkReversed(result.JournalEntryId);
            await _db.SaveChangesAsync(cancellationToken);

            return result;
        }

        public async Task<AccountingPostingResult> PostExistingJournalAsync(
            long journalEntryId,
            long postedByUserId,
            CancellationToken cancellationToken)
        {
            var journal = await _db.JournalEntries
                .Include(j => j.Lines)
                .FirstOrDefaultAsync(j => j.Id == journalEntryId, cancellationToken);

            if (journal is null)
                throw new InvalidOperationException($"Journal entry with ID {journalEntryId} not found.");

            if (journal.Status == JournalEntryStatus.Posted)
                throw new InvalidOperationException("Journal entry is already posted.");

            var period = await _periodRepository.FindOpenPeriodForDateAsync(journal.EntryDate, cancellationToken);
            if (period is null)
                throw new InvalidOperationException($"No open accounting period covers the entry date {journal.EntryDate:yyyy-MM-dd}.");

            if (!journal.IsBalanced())
                throw new InvalidOperationException("Journal entry is not balanced. Total debits must equal total credits.");

            var accountIds = journal.Lines.Select(l => l.AccountId).Distinct().ToList();
            var accounts = await _db.ChartOfAccounts
                .Where(a => accountIds.Contains(a.Id))
                .ToListAsync(cancellationToken);

            foreach (var acct in accounts)
            {
                if (!acct.IsActive)
                    throw new InvalidOperationException($"GL account {acct.Code} is inactive.");
                if (acct.IsControlAccount)
                    throw new InvalidOperationException($"GL account {acct.Code} is a control account. Direct postings not allowed.");
                var hasChildren = await _db.ChartOfAccounts.AnyAsync(a => a.ParentId == acct.Id, cancellationToken);
                if (hasChildren)
                    throw new InvalidOperationException($"GL account {acct.Code} is a parent/group account. Direct postings not allowed.");
            }

            journal.Post(postedByUserId, journal.EntryDate);
            await _db.SaveChangesAsync(cancellationToken);

            foreach (var line in journal.Lines)
            {
                GeneralLedgerEntry glEntry = line.Debit > 0
                    ? GeneralLedgerEntry.CreateDebitEntry(
                        accountId: line.AccountId,
                        journalEntryId: journal.Id,
                        journalEntryLineId: line.Id,
                        postingDate: journal.EntryDate,
                        amount: line.Debit,
                        description: line.LineDescription ?? journal.Description,
                        sourceType: journal.SourceType,
                        sourceId: journal.SourceId ?? journal.Id.ToString(),
                        correlationId: journal.CorrelationId,
                        sourceReference: line.SourceReference)
                    : GeneralLedgerEntry.CreateCreditEntry(
                        accountId: line.AccountId,
                        journalEntryId: journal.Id,
                        journalEntryLineId: line.Id,
                        postingDate: journal.EntryDate,
                        amount: line.Credit,
                        description: line.LineDescription ?? journal.Description,
                        sourceType: journal.SourceType,
                        sourceId: journal.SourceId ?? journal.Id.ToString(),
                        correlationId: journal.CorrelationId,
                        sourceReference: line.SourceReference);
                _db.Add(glEntry);
            }
            await _db.SaveChangesAsync(cancellationToken);

            var totalDebit = journal.Lines.Sum(l => l.Debit);
            var totalCredit = journal.Lines.Sum(l => l.Credit);

            return new AccountingPostingResult(
                JournalEntryId: journal.Id,
                JournalNumber: journal.JournalNumber,
                PostingDate: journal.EntryDate,
                TotalDebit: totalDebit,
                TotalCredit: totalCredit);
        }


        public async Task<bool> ExistsPostingForSourceAsync(
            string sourceType,
            string sourceId,
            CancellationToken cancellationToken)
        {
            return await _db.JournalEntries
                .AnyAsync(j => j.SourceType == sourceType
                            && j.SourceId == sourceId
                            && j.Status == JournalEntryStatus.Posted,
                    cancellationToken);
        }
    }
}

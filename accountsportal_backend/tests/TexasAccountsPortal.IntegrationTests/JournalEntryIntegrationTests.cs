/*
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TexasAccountsPortal.Contracts.JournalEntries;
using TexasAccountsPortal.Domain.Entities;
using TexasAccountsPortal.Domain.Enums;
using TexasAccountsPortal.Infrastructure.Data;
using TexasAccountsPortal.Infrastructure.Services;
using Xunit;

namespace TexasAccountsPortal.IntegrationTests
{
    [Collection("DatabaseCollection")]
    public class JournalEntryIntegrationTests : IClassFixture<SqlServerTestFixture>
    {
        private readonly SqlServerTestFixture _fixture;

        public JournalEntryIntegrationTests(SqlServerTestFixture fixture)
        {
            _fixture = fixture;
        }

        private async Task<(long accountId1, long accountId2, long controlAccountId)> SeedBaseDataAsync()
        {
            using var context = _fixture.CreateContext();
            
            // Seed Chart of Accounts
            var coaService = new ChartOfAccountService(context);
            await coaService.SeedSystemAccountsAsync(1L, default);

            // Fetch some seeded accounts:
            // 1111 (General Petty Cash - Posting Account)
            // 1121 (General Bank Account - Posting Account)
            // 1100 (Cash and Bank - Control Account)
            var acc1 = await context.ChartOfAccounts.FirstAsync(a => a.Code == "1111");
            var acc2 = await context.ChartOfAccounts.FirstAsync(a => a.Code == "1121");
            var ctrl = await context.ChartOfAccounts.FirstAsync(a => a.Code == "1100");

            // Seed Accounting Period
            var periodService = new AccountingPeriodService(context);
            await periodService.CreatePeriodAsync(new Contracts.AccountingPeriods.CreateAccountingPeriodRequest(
                Name: "Jan 2026", FiscalYear: 2026, PeriodNumber: 1,
                StartDate: new DateTime(2026, 1, 1), EndDate: new DateTime(2026, 1, 31)
            ), default);

            return (acc1.Id, acc2.Id, ctrl.Id);
        }

        [Fact]
        public async Task JournalEntryWorkflow_BalancedDraftCreation_Submission_Approval_AndPosting()
        {
            await _fixture.ResetDatabaseAsync();
            var (accountId1, accountId2, controlAccountId) = await SeedBaseDataAsync();

            using var context = _fixture.CreateContext();
            var periodRepo = new AccountingPeriodRepository(context);
            var postingService = new AccountingPostingService(context, periodRepo);
            var service = new JournalEntryService(context, postingService, new TransactionalExecutor(context));

            // 1. Create a balanced draft: Debit Account1 for 500m, Credit Account2 for 500m
            var request = new CreateJournalEntryRequest(
                EntryDate: new DateTime(2026, 1, 15),
                Description: "Manual adjustment",
                Reference: "REF-123",
                Lines: new List<CreateJournalEntryLineRequest>
                {
                    new CreateJournalEntryLineRequest(AccountId: accountId1, Debit: 500m, Credit: 0, LineDescription: "Debit line", SourceReference: null),
                    new CreateJournalEntryLineRequest(AccountId: accountId2, Debit: 0, Credit: 500m, LineDescription: "Credit line", SourceReference: null)
                }
            );

            var created = await service.CreateDraftAsync(request, actorUserId: 1L, correlationId: "corr-jnl-1", default);
            Assert.Equal("draft", created.Status);
            Assert.Equal(2, created.Lines.Count);

            // 2. Submit
            var submitted = await service.SubmitAsync(created.Id, actorUserId: 1L, default);
            Assert.Equal("submitted", submitted.Status);

            // 3. Approve
            var approved = await service.ApproveAsync(submitted.Id, actorUserId: 2L, default);
            Assert.Equal("approved", approved.Status);

            // 4. Post to General Ledger
            var posted = await service.PostAsync(approved.Id, actorUserId: 2L, default);
            Assert.Equal("posted", posted.Status);
            Assert.NotNull(posted.PostingDate);

            // 5. Verify GeneralLedgerEntries were created for each line
            var glEntries = await context.GeneralLedgerEntries.ToListAsync();
            Assert.Equal(2, glEntries.Count);

            var gl1 = glEntries[0];
            var gl2 = glEntries[1];

            // Verify append-only GL records are correct
            Assert.True(gl1.Debit == 500m || gl2.Debit == 500m);
            Assert.True(gl1.Credit == 500m || gl2.Credit == 500m);
            Assert.Equal("Manual", gl1.SourceType);
            Assert.Equal(created.Id.ToString(), gl1.SourceId);
        }

        [Fact]
        public async Task CreateJournalEntry_UnbalancedLines_ShouldFail()
        {
            await _fixture.ResetDatabaseAsync();
            var (accountId1, accountId2, controlAccountId) = await SeedBaseDataAsync();

            using var context = _fixture.CreateContext();
            var periodRepo = new AccountingPeriodRepository(context);
            var postingService = new AccountingPostingService(context, periodRepo);
            var service = new JournalEntryService(context, postingService, new TransactionalExecutor(context));

            // Create unbalanced lines: Debit 500, Credit 400
            var request = new CreateJournalEntryRequest(
                EntryDate: new DateTime(2026, 1, 15),
                Description: "Unbalanced adjustment",
                Reference: null,
                Lines: new List<CreateJournalEntryLineRequest>
                {
                    new CreateJournalEntryLineRequest(AccountId: accountId1, Debit: 500m, Credit: 0, LineDescription: "Debit line", SourceReference: null),
                    new CreateJournalEntryLineRequest(AccountId: accountId2, Debit: 0, Credit: 400m, LineDescription: "Credit line", SourceReference: null)
                }
            );

            // Unbalanced entries can be created as draft, but posting them or submitting them should fail
            var created = await service.CreateDraftAsync(request, 1L, "corr-jnl-2", default);
            Assert.Equal("draft", created.Status);

            // Submit should throw InvalidOperationException
            await Assert.ThrowsAsync<InvalidOperationException>(() =>
                service.SubmitAsync(created.Id, 1L, default));
        }

        [Fact]
        public async Task CreateJournalEntry_ControlAccountLine_ShouldFailPosting()
        {
            await _fixture.ResetDatabaseAsync();
            var (accountId1, accountId2, controlAccountId) = await SeedBaseDataAsync();

            using var context = _fixture.CreateContext();
            var periodRepo = new AccountingPeriodRepository(context);
            var postingService = new AccountingPostingService(context, periodRepo);
            var service = new JournalEntryService(context, postingService, new TransactionalExecutor(context));

            // Create entry targeting a control account (controlAccountId)
            var request = new CreateJournalEntryRequest(
                EntryDate: new DateTime(2026, 1, 15),
                Description: "Targeting control account",
                Reference: null,
                Lines: new List<CreateJournalEntryLineRequest>
                {
                    new CreateJournalEntryLineRequest(AccountId: controlAccountId, Debit: 100m, Credit: 0, LineDescription: "Control debit", SourceReference: null),
                    new CreateJournalEntryLineRequest(AccountId: accountId2, Debit: 0, Credit: 100m, LineDescription: "Posting credit", SourceReference: null)
                }
            );

            var created = await service.CreateDraftAsync(request, 1L, "corr-jnl-3", default);
            Assert.Equal("draft", created.Status);

            // Post should fail because posting to control account is prohibited
            await Assert.ThrowsAsync<InvalidOperationException>(() =>
                service.PostAsync(created.Id, 1L, default));
        }

        [Fact]
        public async Task JournalEntryReversal_SwapsDebitsAndCredits_AndMarksOriginalReversed()
        {
            await _fixture.ResetDatabaseAsync();
            var (accountId1, accountId2, controlAccountId) = await SeedBaseDataAsync();

            using var context = _fixture.CreateContext();
            var periodRepo = new AccountingPeriodRepository(context);
            var postingService = new AccountingPostingService(context, periodRepo);
            var service = new JournalEntryService(context, postingService, new TransactionalExecutor(context));

            // Create, Submit, Approve, and Post a manual journal entry
            var request = new CreateJournalEntryRequest(
                EntryDate: new DateTime(2026, 1, 15),
                Description: "Adjustment to reverse",
                Reference: "REF-REV-TEST",
                Lines: new List<CreateJournalEntryLineRequest>
                {
                    new CreateJournalEntryLineRequest(AccountId: accountId1, Debit: 350m, Credit: 0, LineDescription: "Debit line", SourceReference: null),
                    new CreateJournalEntryLineRequest(AccountId: accountId2, Debit: 0, Credit: 350m, LineDescription: "Credit line", SourceReference: null)
                }
            );

            var created = await service.CreateDraftAsync(request, 1L, "corr-rev-1", default);
            await service.SubmitAsync(created.Id, 1L, default);
            await service.ApproveAsync(created.Id, 2L, default);
            var posted = await service.PostAsync(created.Id, 2L, default);
            Assert.Equal("posted", posted.Status);

            // Verify original GL entries exist
            var glBefore = await context.GeneralLedgerEntries.ToListAsync();
            Assert.Equal(2, glBefore.Count);

            // Execute reversal
            var reversed = await service.ReverseAsync(posted.Id, new DateTime(2026, 1, 20), "Correction reversal", 2L, "corr-rev-2", default);
            Assert.Equal("reversed", reversed.Status);
            Assert.NotNull(reversed.ReversedByJournalEntryId);

            // Load reversal journal entry and verify swapped lines
            var revJournal = await context.JournalEntries.Include(j => j.Lines)
                .FirstAsync(j => j.Id == reversed.ReversedByJournalEntryId!.Value);
            
            Assert.Equal("posted", revJournal.Status.ToString().ToLower());
            Assert.Equal(2, revJournal.Lines.Count);

            var originalDebitLine = posted.Lines.Find(l => l.Debit > 0);
            var originalCreditLine = posted.Lines.Find(l => l.Credit > 0);
            Assert.NotNull(originalDebitLine);
            Assert.NotNull(originalCreditLine);

            var revDebitLine = revJournal.Lines.FirstOrDefault(l => l.AccountId == originalCreditLine.AccountId);
            var revCreditLine = revJournal.Lines.FirstOrDefault(l => l.AccountId == originalDebitLine.AccountId);
            Assert.NotNull(revDebitLine);
            Assert.NotNull(revCreditLine);

            // Check swapped debit and credit amounts
            Assert.Equal(350m, revDebitLine.Debit);
            Assert.Equal(350m, revCreditLine.Credit);

            // Verify total General Ledger entries now equals 4 (2 original + 2 reversal)
            var glAfter = await context.GeneralLedgerEntries.ToListAsync();
            Assert.Equal(4, glAfter.Count);
        }
    }
}
*/

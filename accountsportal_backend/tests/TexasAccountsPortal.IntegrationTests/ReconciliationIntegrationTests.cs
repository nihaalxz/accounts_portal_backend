using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TexasAccountsPortal.Api.Controllers;
using TexasAccountsPortal.Contracts.Reporting;
using TexasAccountsPortal.Domain.Entities;
using TexasAccountsPortal.Domain.Enums;
using TexasAccountsPortal.Infrastructure.Services;
using Xunit;

namespace TexasAccountsPortal.IntegrationTests
{
    [Collection("DatabaseCollection")]
    public class ReconciliationIntegrationTests : IClassFixture<SqlServerTestFixture>
    {
        private readonly SqlServerTestFixture _fixture;

        public ReconciliationIntegrationTests(SqlServerTestFixture fixture)
        {
            _fixture = fixture;
        }

        private async Task<(long parentId, long childId1, long childId2)> SeedAccountsAndPeriodAsync()
        {
            using var context = _fixture.CreateContext();
            
            var coaService = new ChartOfAccountService(context);
            await coaService.SeedSystemAccountsAsync(1L, default);

            var parent = await context.ChartOfAccounts.FirstAsync(a => a.Code == "1100");
            var child1 = await context.ChartOfAccounts.FirstAsync(a => a.Code == "1111");
            var child2 = await context.ChartOfAccounts.FirstAsync(a => a.Code == "1121");

            var periodService = new AccountingPeriodService(context);
            await periodService.CreatePeriodAsync(new Contracts.AccountingPeriods.CreateAccountingPeriodRequest(
                Name: "Jul 2026", FiscalYear: 2026, PeriodNumber: 7,
                StartDate: new DateTime(2026, 7, 1), EndDate: new DateTime(2026, 7, 31)
            ), default);

            return (parent.Id, child1.Id, child2.Id);
        }

        [Fact]
        public async Task GlReconciliation_IdentifiesFullyReconciledSubsystem()
        {
            await _fixture.ResetDatabaseAsync();
            await SeedAccountsAndPeriodAsync();

            using var context = _fixture.CreateContext();

            // Create controller
            var controller = new ReconciliationController(context);

            // Call GlReconciliation on clean database
            var actionResult = await controller.GetGlReconciliation();
            var okResult = Assert.IsType<OkObjectResult>(actionResult.Result);
            var report = Assert.IsType<GlReconciliationReportResponse>(okResult.Value);

            Assert.True(report.IsReconciled);
            Assert.Empty(report.MissingJournals);
            Assert.Empty(report.UnbalancedJournals);
            Assert.Empty(report.DuplicatePostings);
        }

        [Fact]
        public async Task GlReconciliation_DetectsMissingJournalEntry()
        {
            await _fixture.ResetDatabaseAsync();
            await SeedAccountsAndPeriodAsync();

            using var context = _fixture.CreateContext();

            // 1. Insert an approved financial transaction directly without GL entries
            var tx = FinancialTransaction.Create(
                FinancialTransactionType.Incoming,
                500m,
                PaymentMethod.Cash,
                1L,
                destinationAccountId: 1L,
                initialStatus: FinancialTransactionStatus.Pending
            );
            tx.Approve(2L);
            context.Add(tx);
            await context.SaveChangesAsync();

            // 2. Call reconciliation
            var controller = new ReconciliationController(context);
            var actionResult = await controller.GetGlReconciliation();
            var okResult = Assert.IsType<OkObjectResult>(actionResult.Result);
            var report = Assert.IsType<GlReconciliationReportResponse>(okResult.Value);

            // 3. Verify it flags the missing journal entry
            Assert.False(report.IsReconciled);
            var missing = Assert.Single(report.MissingJournals);
            Assert.Equal("Incoming", missing.OriginType);
            Assert.Equal(tx.Id, missing.Id);
            Assert.Equal(500m, missing.Amount);
        }

        [Fact]
        public async Task GlReconciliation_DetectsUnbalancedJournalEntry()
        {
            await _fixture.ResetDatabaseAsync();
            var (_, childId1, _) = await SeedAccountsAndPeriodAsync();

            using var context = _fixture.CreateContext();

            // 1. Manually add an unbalanced journal entry to the database bypass standard checks
            var journal = JournalEntry.Create(
                journalNumber: "JNL-UNBAL-01",
                entryDate: new DateTime(2026, 7, 15),
                description: "Unbalanced entry test",
                sourceType: "Adjustment",
                correlationId: "corr-unbal-1",
                createdBy: 1L,
                reference: "ADJ-01",
                sourceId: "1"
            );
            
            // Add unbalanced lines: Debit $100, Credit $0 (total is unbalanced!)
            var line1 = JournalEntryLine.CreateDebit(0, childId1, 100m, 1, "Line 1", "REF-1");
            journal.AddLine(line1);

            context.Add(journal);
            await context.SaveChangesAsync();

            // 2. Call reconciliation
            var controller = new ReconciliationController(context);
            var actionResult = await controller.GetGlReconciliation();
            var okResult = Assert.IsType<OkObjectResult>(actionResult.Result);
            var report = Assert.IsType<GlReconciliationReportResponse>(okResult.Value);

            // 3. Verify it flags the unbalanced journal
            Assert.False(report.IsReconciled);
            var unbalanced = Assert.Single(report.UnbalancedJournals);
            Assert.Equal(journal.Id, unbalanced.JournalId);
            Assert.Equal("JNL-UNBAL-01", unbalanced.JournalNumber);
            Assert.Equal(100m, unbalanced.TotalDebits);
            Assert.Equal(0m, unbalanced.TotalCredits);
        }

        [Fact]
        public async Task GlReconciliation_DetectsDuplicatePostings()
        {
            await _fixture.ResetDatabaseAsync();
            var (_, childId1, childId2) = await SeedAccountsAndPeriodAsync();

            using var context = _fixture.CreateContext();

            // 1. Manually add duplicate journal entries referencing the same SourceType and SourceId
            var journal1 = JournalEntry.Create(
                journalNumber: "JNL-DUP-01",
                entryDate: new DateTime(2026, 7, 15),
                description: "Dup 1",
                sourceType: "Incoming",
                correlationId: "corr-dup-1",
                createdBy: 1L,
                reference: null,
                sourceId: "1001"
            );
            var line1a = JournalEntryLine.CreateDebit(0, childId1, 100m, 1, "L1a");
            var line1b = JournalEntryLine.CreateCredit(0, childId2, 100m, 2, "L1b");
            journal1.AddLine(line1a);
            journal1.AddLine(line1b);

            var journal2 = JournalEntry.Create(
                journalNumber: "JNL-DUP-02",
                entryDate: new DateTime(2026, 7, 15),
                description: "Dup 2",
                sourceType: "Incoming",
                correlationId: "corr-dup-2",
                createdBy: 1L,
                reference: null,
                sourceId: "1001"
            );
            var line2a = JournalEntryLine.CreateDebit(0, childId1, 100m, 1, "L2a");
            var line2b = JournalEntryLine.CreateCredit(0, childId2, 100m, 2, "L2b");
            journal2.AddLine(line2a);
            journal2.AddLine(line2b);

            context.Add(journal1);
            context.Add(journal2);
            await context.SaveChangesAsync();

            // 2. Call reconciliation
            var controller = new ReconciliationController(context);
            var actionResult = await controller.GetGlReconciliation();
            var okResult = Assert.IsType<OkObjectResult>(actionResult.Result);
            var report = Assert.IsType<GlReconciliationReportResponse>(okResult.Value);

            // 3. Verify it flags duplicate postings
            Assert.False(report.IsReconciled);
            var duplicate = Assert.Single(report.DuplicatePostings);
            Assert.Equal("Incoming", duplicate.SourceType);
            Assert.Equal("1001", duplicate.SourceId);
            Assert.Equal(2, duplicate.Count);
        }
    }
}

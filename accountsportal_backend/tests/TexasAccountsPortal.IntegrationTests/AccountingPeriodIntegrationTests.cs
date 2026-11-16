using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using TexasAccountsPortal.Contracts.AccountingPeriods;
using TexasAccountsPortal.Domain.Entities;
using TexasAccountsPortal.Domain.Enums;
using TexasAccountsPortal.Infrastructure.Services;
using Xunit;

namespace TexasAccountsPortal.IntegrationTests
{
    [Collection("DatabaseCollection")]
    public class AccountingPeriodIntegrationTests : IClassFixture<SqlServerTestFixture>
    {
        private readonly SqlServerTestFixture _fixture;

        public AccountingPeriodIntegrationTests(SqlServerTestFixture fixture)
        {
            _fixture = fixture;
        }

        [Fact]
        public async Task CreatePeriod_SucceedsOnValidDateRangeAndPreventsOverlap()
        {
            await _fixture.ResetDatabaseAsync();
            using var context = _fixture.CreateContext();
            var service = new AccountingPeriodService(context);

            // 1. Create a valid period (Jan 2026)
            var request1 = new CreateAccountingPeriodRequest(
                Name: "January 2026",
                FiscalYear: 2026,
                PeriodNumber: 1,
                StartDate: new DateTime(2026, 1, 1),
                EndDate: new DateTime(2026, 1, 31)
            );
            var period1 = await service.CreatePeriodAsync(request1, default);
            Assert.Equal("open", period1.Status);

            // 2. Try to create a duplicate period (same year and number)
            var duplicateRequest = new CreateAccountingPeriodRequest(
                Name: "January 2026 Duplicate",
                FiscalYear: 2026,
                PeriodNumber: 1,
                StartDate: new DateTime(2026, 1, 15),
                EndDate: new DateTime(2026, 2, 15)
            );
            await Assert.ThrowsAsync<InvalidOperationException>(() =>
                service.CreatePeriodAsync(duplicateRequest, default));

            // 3. Try to create an overlapping period (Feb 2026 overlap with Jan 2026)
            var overlapRequest = new CreateAccountingPeriodRequest(
                Name: "February 2026 Overlapping",
                FiscalYear: 2026,
                PeriodNumber: 2,
                StartDate: new DateTime(2026, 1, 20),
                EndDate: new DateTime(2026, 2, 20)
            );
            await Assert.ThrowsAsync<InvalidOperationException>(() =>
                service.CreatePeriodAsync(overlapRequest, default));

            // 4. Create a non-overlapping contiguous period (Feb 2026)
            var request2 = new CreateAccountingPeriodRequest(
                Name: "February 2026",
                FiscalYear: 2026,
                PeriodNumber: 2,
                StartDate: new DateTime(2026, 2, 1),
                EndDate: new DateTime(2026, 2, 28)
            );
            var period2 = await service.CreatePeriodAsync(request2, default);
            Assert.Equal("open", period2.Status);
        }

        [Fact]
        public async Task FindOpenPeriodForDate_RepositoryLookups()
        {
            await _fixture.ResetDatabaseAsync();
            using var context = _fixture.CreateContext();
            var service = new AccountingPeriodService(context);
            var repo = new AccountingPeriodRepository(context);

            // Seed a period for Jan 2026
            var period = await service.CreatePeriodAsync(new CreateAccountingPeriodRequest(
                Name: "Jan 2026", FiscalYear: 2026, PeriodNumber: 1,
                StartDate: new DateTime(2026, 1, 1), EndDate: new DateTime(2026, 1, 31)
            ), default);

            // Date inside the open period
            var found = await repo.FindOpenPeriodForDateAsync(new DateTime(2026, 1, 15), default);
            Assert.NotNull(found);
            Assert.Equal(period.Id, found.Id);

            // Date outside any period
            var notFound = await repo.FindOpenPeriodForDateAsync(new DateTime(2026, 2, 1), default);
            Assert.Null(notFound);

            // Close the period
            await service.ClosePeriodAsync(period.Id, actorUserId: 1L, default);

            // Date inside closed period should not be found by FindOpenPeriodForDateAsync
            var foundAfterClose = await repo.FindOpenPeriodForDateAsync(new DateTime(2026, 1, 15), default);
            Assert.Null(foundAfterClose);
        }

        [Fact]
        public async Task ClosePeriod_BlocksIfUnpostedApprovedJournalsOrExpensesExist()
        {
            await _fixture.ResetDatabaseAsync();
            using var context = _fixture.CreateContext();
            var service = new AccountingPeriodService(context);

            // Create a period
            var period = await service.CreatePeriodAsync(new CreateAccountingPeriodRequest(
                Name: "Jan 2026", FiscalYear: 2026, PeriodNumber: 1,
                StartDate: new DateTime(2026, 1, 1), EndDate: new DateTime(2026, 1, 31)
            ), default);

            // Add an approved but unposted JournalEntry inside the period's date range
            var journal = JournalEntry.Create(
                journalNumber: "JNL-001",
                entryDate: new DateTime(2026, 1, 15),
                description: "Test Jnl",
                sourceType: "Manual",
                correlationId: "corr-01",
                createdBy: 1L
            );
            journal.AddLine(JournalEntryLine.CreateDebit(0L, 1L, 100m, 1));
            journal.AddLine(JournalEntryLine.CreateCredit(0L, 2L, 100m, 2));
            journal.Submit(1L);
            journal.Approve(2L); // Status = Approved

            context.Add(journal);
            await context.SaveChangesAsync();

            // Try to close period: should fail due to unposted approved journals
            await Assert.ThrowsAsync<InvalidOperationException>(() =>
                service.ClosePeriodAsync(period.Id, 1L, default));

            // Post the journal
            journal.Post(1L, new DateTime(2026, 1, 15));
            await context.SaveChangesAsync();

            // Now close period: should succeed
            var closed = await service.ClosePeriodAsync(period.Id, 1L, default);
            Assert.Equal("closed", closed.Status);
        }

        [Fact]
        public async Task ReopenPeriod_RestoresStatusWithReason()
        {
            await _fixture.ResetDatabaseAsync();
            using var context = _fixture.CreateContext();
            var service = new AccountingPeriodService(context);

            var period = await service.CreatePeriodAsync(new CreateAccountingPeriodRequest(
                Name: "Jan 2026", FiscalYear: 2026, PeriodNumber: 1,
                StartDate: new DateTime(2026, 1, 1), EndDate: new DateTime(2026, 1, 31)
            ), default);

            await service.ClosePeriodAsync(period.Id, 1L, default);

            // Reopen with reason
            var reopened = await service.ReopenPeriodAsync(period.Id, 2L, new ReopenAccountingPeriodRequest("Need audit adjustments"), default);
            Assert.Equal("open", reopened.Status);
            Assert.Equal("Need audit adjustments", reopened.ReopenReason);
        }
    }
}

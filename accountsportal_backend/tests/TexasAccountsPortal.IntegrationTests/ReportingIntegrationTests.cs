using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TexasAccountsPortal.Contracts.Reporting;
using TexasAccountsPortal.Contracts.SalesEntries;
using TexasAccountsPortal.Domain.Entities;
using TexasAccountsPortal.Domain.Enums;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Infrastructure.Data;
using TexasAccountsPortal.Infrastructure.Services;
using TexasAccountsPortal.Contracts.Transactions;
using TexasAccountsPortal.IntegrationTests.Fakes;
using Xunit;

namespace TexasAccountsPortal.IntegrationTests
{
    [Collection("DatabaseCollection")]
    public class ReportingIntegrationTests : IClassFixture<SqlServerTestFixture>
    {
        private readonly SqlServerTestFixture _fixture;

        public ReportingIntegrationTests(SqlServerTestFixture fixture)
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
                Name: "Jan 2026", FiscalYear: 2026, PeriodNumber: 1,
                StartDate: new DateTime(2026, 1, 1), EndDate: new DateTime(2026, 1, 31)
            ), default);

            await periodService.CreatePeriodAsync(new Contracts.AccountingPeriods.CreateAccountingPeriodRequest(
                Name: "Jul 2026", FiscalYear: 2026, PeriodNumber: 7,
                StartDate: new DateTime(2026, 7, 1), EndDate: new DateTime(2026, 7, 31)
            ), default);

            return (parent.Id, child1.Id, child2.Id);
        }

        [Fact]
        public async Task TrialBalance_RollsUpCorrectly_AndBalances()
        {
            await _fixture.ResetDatabaseAsync();
            var (parentId, childId1, childId2) = await SeedAccountsAndPeriodAsync();

            using var context = _fixture.CreateContext();
            var periodRepo = new AccountingPeriodRepository(context);
            var postingService = new AccountingPostingService(context, periodRepo);

            // 1. Post a balanced manual journal entry:
            // Debit Petty Cash (childId1) 1000m
            // Credit Bank Account (childId2) 1000m
            var lines = new List<PostJournalLineRequest>
            {
                new PostJournalLineRequest(AccountId: childId1, Debit: 1000m, Credit: 0, LineNumber: 1, LineDescription: "Inflow", SourceReference: null),
                new PostJournalLineRequest(AccountId: childId2, Debit: 0, Credit: 1000m, LineNumber: 2, LineDescription: "Outflow", SourceReference: null)
            };

            var postReq = new PostJournalRequest(
                JournalNumber: "JNL-001",
                EntryDate: new DateTime(2026, 1, 15),
                Description: "Fund transfer",
                SourceType: "Manual",
                SourceId: "manual-1",
                CorrelationId: "corr-trial-1",
                PostedByUserId: 1L,
                Reference: null,
                ReversalOfJournalEntryId: null,
                Lines: lines
            );

            await postingService.PostJournalAsync(postReq, default);

            // 2. Fetch Trial Balance
            var reportingService = new ReportingService(context);
            var trialBalance = await reportingService.GetTrialBalanceAsync(new DateTime(2026, 1, 31), default);

            // 3. Verify leaf accounts sum balance
            Assert.True(trialBalance.IsBalanced);
            Assert.Equal(1000m, trialBalance.TotalDebitSum);
            Assert.Equal(1000m, trialBalance.TotalCreditSum);

            // 4. Verify parent control account has rolled up the sums of its children correctly:
            // Petty Cash (Debit 1000, Credit 0)
            // Bank Account (Debit 0, Credit 1000)
            // Control Account 1100 should roll up to Debit 1000, Credit 1000, and ending balance 0.
            var parentItem = trialBalance.Items.Find(i => i.AccountId == parentId);
            Assert.NotNull(parentItem);
            Assert.Equal(1000m, parentItem.TotalDebit);
            Assert.Equal(1000m, parentItem.TotalCredit);
            Assert.Equal(0m, parentItem.EndingBalance);

            var child1Item = trialBalance.Items.Find(i => i.AccountId == childId1);
            Assert.NotNull(child1Item);
            Assert.Equal(1000m, child1Item.TotalDebit);
            Assert.Equal(0m, child1Item.TotalCredit);
            Assert.Equal(1000m, child1Item.EndingBalance);
        }

        [Fact]
        public async Task GeneralLedgerReport_CalculatesOpeningAndEndingBalancesCorrectly()
        {
            await _fixture.ResetDatabaseAsync();
            var (parentId, childId1, childId2) = await SeedAccountsAndPeriodAsync();

            using var context = _fixture.CreateContext();
            var periodRepo = new AccountingPeriodRepository(context);
            var postingService = new AccountingPostingService(context, periodRepo);
            var reportingService = new ReportingService(context);

            // Post a transaction on Jan 10 (prior period for our report query range of Jan 15 - Jan 25)
            await postingService.PostJournalAsync(new PostJournalRequest(
                JournalNumber: "JNL-001",
                EntryDate: new DateTime(2026, 1, 10),
                Description: "Prior entry",
                SourceType: "Manual",
                SourceId: "manual-1",
                CorrelationId: "corr-gl-1",
                PostedByUserId: 1L,
                Reference: null,
                ReversalOfJournalEntryId: null,
                Lines: new List<PostJournalLineRequest>
                {
                    new PostJournalLineRequest(AccountId: childId1, Debit: 300m, Credit: 0, LineNumber: 1, LineDescription: "Initial Debit", SourceReference: null),
                    new PostJournalLineRequest(AccountId: childId2, Debit: 0, Credit: 300m, LineNumber: 2, LineDescription: "Initial Credit", SourceReference: null)
                }
            ), default);

            // Post a transaction on Jan 20 (inside period query range of Jan 15 - Jan 25)
            await postingService.PostJournalAsync(new PostJournalRequest(
                JournalNumber: "JNL-002",
                EntryDate: new DateTime(2026, 1, 20),
                Description: "Current entry",
                SourceType: "Manual",
                SourceId: "manual-2",
                CorrelationId: "corr-gl-2",
                PostedByUserId: 1L,
                Reference: null,
                ReversalOfJournalEntryId: null,
                Lines: new List<PostJournalLineRequest>
                {
                    new PostJournalLineRequest(AccountId: childId1, Debit: 150m, Credit: 0, LineNumber: 1, LineDescription: "Second Debit", SourceReference: null),
                    new PostJournalLineRequest(AccountId: childId2, Debit: 0, Credit: 150m, LineNumber: 2, LineDescription: "Second Credit", SourceReference: null)
                }
            ), default);

            // 1. Query General Ledger Report for childId1 (Debit normal account) from Jan 15 to Jan 25
            var report = await reportingService.GetGeneralLedgerReportAsync(childId1, new DateTime(2026, 1, 15), new DateTime(2026, 1, 25), default);

            // 2. Verify Opening balance is 300m (prior transaction)
            Assert.Equal(300m, report.OpeningBalance);

            // 3. Verify one item inside range
            Assert.Single(report.Items);
            Assert.Equal(150m, report.Items[0].Debit);
            Assert.Equal(0m, report.Items[0].Credit);

            // 4. Verify ending balance is 300 + 150 - 0 = 450m
            Assert.Equal(450m, report.EndingBalance);
        }

        [Fact]
        public async Task SupplierPaymentApproval_PostsToGL()
        {
            await _fixture.ResetDatabaseAsync();
            var (parentId, childId1, childId2) = await SeedAccountsAndPeriodAsync();

            using var context = _fixture.CreateContext();
            var periodRepo = new AccountingPeriodRepository(context);
            var postingService = new AccountingPostingService(context, periodRepo);
            var dbFactory = new ReportingTestDbContextFactory(_fixture.GetOptions());
            var financialService = new FinancialPostingService(context, new TransactionalExecutor(context), new IdempotencyRecoveryStore(dbFactory), new FakeSalesPortalClient(), postingService, new DefaultAccountingMappingProvider(context), new TestLedgerNotificationService());

            // 1. Create Clerk and Master Accountant Users
            var clerk = new AccountsUser
            {
                Name = "Accounts Clerk",
                Email = "clerk@texas.com",
                UserType = "Accounts",
                IsActive = true
            };
            var master = new AccountsUser
            {
                Name = "Finance Manager",
                Email = "manager@texas.com",
                UserType = "master_accountant",
                IsActive = true
            };
            context.Add(clerk);
            context.Add(master);
            await context.SaveChangesAsync();

            // 2. Create a Bank (Source Bank)
            var bankObj = new Bank { BankName = "Operating Bank", AccountNumber = "IBAN456", CreatedBy = master.Id };
            bankObj.InitializeBalance(5000m);
            context.Add(bankObj);
            await context.SaveChangesAsync();

            // 3. Create a Supplier
            var supplier = new Supplier { Code = "SUP-001", Name = "Supplier One" };
            context.Add(supplier);
            await context.SaveChangesAsync();

            // 4. Submit a supplier payment (external reference SUP-PAY-123)
            var request = new Contracts.SupplierPayments.CreateSupplierPaymentRequest(
                SupplierId: supplier.Id,
                Amount: 800m,
                PaymentMethod: "bank",
                SourceAccountId: $"bank_{bankObj.Id}",
                ReferenceNumber: "SUP-PAY-123",
                ExternalReference: "SUP-PAY-123",
                ServiceType: "supplierpayment",
                Description: "Payment for bookings",
                SupplierName: supplier.Name
            );

            var createdPayment = await financialService.PostSupplierPaymentAsync(request, createdBy: clerk.Id, idempotencyKey: "idem-supp-1", default);
            Assert.Equal("pending", createdPayment.Status, ignoreCase: true);

            // 5. Approve the supplier payment
            var approvedPayment = await financialService.ApproveSupplierPaymentAsync(createdPayment.Id, approvedBy: master.Id, default);
            Assert.Equal("approved", approvedPayment.Status, ignoreCase: true);

            // 6. Verify General Ledger Entries
            // Supplier Payment: Debit Supplier Payables Control 2111 (ID 5/resolved), Credit Bank 1121
            var glEntries = await context.GeneralLedgerEntries.ToListAsync();
            Assert.Equal(2, glEntries.Count);

            var debitGl = glEntries.Find(e => e.Debit > 0);
            var creditGl = glEntries.Find(e => e.Credit > 0);
            Assert.NotNull(debitGl);
            Assert.NotNull(creditGl);

            // Verify debited account is 2111 (Supplier Payables)
            var payableAcc = await context.ChartOfAccounts.FirstAsync(a => a.Code == "2111");
            Assert.Equal(payableAcc.Id, debitGl.AccountId);
            Assert.Equal(800m, debitGl.Debit);

            // Verify credited account is 1121 (Bank Account)
            Assert.Equal(childId2, creditGl.AccountId);
            Assert.Equal(800m, creditGl.Credit);
        }

        [Fact]
        public async Task ContraTransferApproval_PostsToGL()
        {
            await _fixture.ResetDatabaseAsync();
            var (parentId, childId1, childId2) = await SeedAccountsAndPeriodAsync();

            using var context = _fixture.CreateContext();
            var periodRepo = new AccountingPeriodRepository(context);
            var postingService = new AccountingPostingService(context, periodRepo);
            var dbFactory = new ReportingTestDbContextFactory(_fixture.GetOptions());
            var financialService = new FinancialPostingService(context, new TransactionalExecutor(context), new IdempotencyRecoveryStore(dbFactory), new FakeSalesPortalClient(), postingService, new DefaultAccountingMappingProvider(context), new TestLedgerNotificationService());

            // 1. Create Clerk and Master Accountant Users
            var clerk = new AccountsUser
            {
                Name = "Accounts Clerk",
                Email = "clerk@texas.com",
                UserType = "Accounts",
                IsActive = true
            };
            var master = new AccountsUser
            {
                Name = "Finance Manager",
                Email = "manager@texas.com",
                UserType = "master_accountant",
                IsActive = true
            };
            context.Add(clerk);
            context.Add(master);
            await context.SaveChangesAsync();

            // 2. Create operational Account and Bank
            var cashObj = new Account { Name = "General Cash Account", Type = AccountType.Cash, LedgerType = LedgerType.Asset, CreatedBy = master.Id };
            cashObj.Credit(1000m);
            context.Add(cashObj);

            var bankObj = new Bank { BankName = "Operating Bank", AccountNumber = "IBAN456", CreatedBy = master.Id };
            bankObj.InitializeBalance(5000m);
            context.Add(bankObj);

            await context.SaveChangesAsync();

            // 3. Post Contra Transaction (Transfer from Petty Cash to Bank)
            var request = new CreateContraTransactionRequest(
                SourceAccountId: cashObj.Id, // Cash
                SourceBankId: null,
                DestinationAccountId: null,
                DestinationBankId: bankObj.Id, // Bank
                Amount: 400m,
                Description: "Replenish bank with cash"
            );

            var createdTx = await financialService.PostContraTransactionAsync(request, createdBy: clerk.Id, idempotencyKey: "idem-contra-1", default);
            Assert.Equal("approved", createdTx.Status, ignoreCase: true);

            // 5. Verify General Ledger Entries
            // Contra Transfer: Debit Bank 1121, Credit Petty Cash 1111
            var glEntries = await context.GeneralLedgerEntries.ToListAsync();
            Assert.Equal(2, glEntries.Count);

            var debitGl = glEntries.Find(e => e.Debit > 0);
            var creditGl = glEntries.Find(e => e.Credit > 0);
            Assert.NotNull(debitGl);
            Assert.NotNull(creditGl);

            // Debit Bank Account
            Assert.Equal(childId2, debitGl.AccountId);
            Assert.Equal(400m, debitGl.Debit);

            // Credit Petty Cash
            Assert.Equal(childId1, creditGl.AccountId);
            Assert.Equal(400m, creditGl.Credit);
        }

        [Fact]
        public async Task GetAccountStatement_ReturnsCalculatedBalancesAndRunningTotal()
        {
            await _fixture.ResetDatabaseAsync();
            var (parentId, childId1, childId2) = await SeedAccountsAndPeriodAsync();

            using var context = _fixture.CreateContext();
            var reportingService = new ReportingService(context);

            // 1. Post a couple of GL entries manually for Petty Cash (childId1 / code "1111")
            var entry1 = GeneralLedgerEntry.CreateDebitEntry(
                accountId: childId1,
                journalEntryId: 1L,
                journalEntryLineId: 1L,
                postingDate: new DateTime(2026, 7, 5),
                amount: 500m,
                description: "Initial petty cash deposit",
                sourceType: "Manual",
                sourceId: "1",
                correlationId: "corr-stmt-1",
                sourceReference: "DEP-01"
            );

            var entry2 = GeneralLedgerEntry.CreateCreditEntry(
                accountId: childId1,
                journalEntryId: 2L,
                journalEntryLineId: 2L,
                postingDate: new DateTime(2026, 7, 10),
                amount: 150m,
                description: "Bought stationery",
                sourceType: "Expense",
                sourceId: "2",
                correlationId: "corr-stmt-2",
                sourceReference: "EXP-01"
            );

            context.AddRange(entry1, entry2);
            await context.SaveChangesAsync();

            // 2. Fetch the account statement
            var statement = await reportingService.GetAccountStatementAsync(
                accountCode: "1111",
                startDate: new DateTime(2026, 7, 1),
                endDate: new DateTime(2026, 7, 31),
                cancellationToken: default
            );

            // 3. Assert correct fields
            Assert.Equal("1111", statement.AccountCode);
            Assert.Equal("General Petty Cash", statement.AccountName);
            Assert.Equal(0m, statement.OpeningBalance);
            Assert.Equal(350m, statement.EndingBalance);
            Assert.Equal(500m, statement.TotalDebits);
            Assert.Equal(150m, statement.TotalCredits);

            Assert.Equal(2, statement.Lines.Count);
            Assert.Equal(500m, statement.Lines[0].RunningBalance);
            Assert.Equal(350m, statement.Lines[1].RunningBalance);
        }

        [Fact]
        public async Task GetExpenseReport_ReturnsCategorizedAggregates()
        {
            await _fixture.ResetDatabaseAsync();
            await SeedAccountsAndPeriodAsync();

            using var context = _fixture.CreateContext();
            var reportingService = new ReportingService(context);

            // 1. Seed Expense Categories
            var cat1 = new ExpenseHeader { Name = "Office Supplies", Category = "office", Description = "Stationery etc" };
            var cat2 = new ExpenseHeader { Name = "Travel expenses", Category = "travel", Description = "Flights etc" };
            context.AddRange(cat1, cat2);
            await context.SaveChangesAsync();

            // 2. Seed Expenses directly (to verify report aggregates)
            var exp1 = Expense.Create(
                expenseNumber: "EXP-01",
                expenseCategoryId: cat1.Id,
                amount: 120m,
                description: "Office paper",
                paymentMethod: PaymentMethod.Cash,
                expenseDate: new DateTime(2026, 7, 12),
                correlationId: "corr-exp-1",
                createdBy: 1L
            );
            var exp2 = Expense.Create(
                expenseNumber: "EXP-02",
                expenseCategoryId: cat2.Id,
                amount: 350m,
                description: "Flight ticket",
                paymentMethod: PaymentMethod.Bank,
                expenseDate: new DateTime(2026, 7, 15),
                correlationId: "corr-exp-2",
                createdBy: 1L
            );
            context.AddRange(exp1, exp2);
            await context.SaveChangesAsync();

            // 3. Fetch report
            var report = await reportingService.GetExpenseReportAsync(
                startDate: new DateTime(2026, 7, 1),
                endDate: new DateTime(2026, 7, 31),
                cancellationToken: default
            );

            // 4. Assert aggregates
            Assert.Equal(470m, report.TotalExpenseAmount);
            Assert.Equal(2, report.Items.Count);
            Assert.Equal(2, report.Categories.Count);

            var officeSum = report.Categories.Find(c => c.CategoryName == "Office Supplies");
            Assert.NotNull(officeSum);
            Assert.Equal(120m, officeSum.TotalAmount);
            Assert.Equal("5210", officeSum.AccountCode); // maps office to 5210

            var travelSum = report.Categories.Find(c => c.CategoryName == "Travel expenses");
            Assert.NotNull(travelSum);
            Assert.Equal(350m, travelSum.TotalAmount);
            Assert.Equal("5220", travelSum.AccountCode); // maps travel to 5220
        }
    }

        public class FakeSalesPortalClient : TexasAccountsPortal.IntegrationTests.Fakes.TestSalesPortalClient
    {
    }

    public class ReportingTestDbContextFactory : IDbContextFactory<AccountsDbContext>
    {
        private readonly DbContextOptions<AccountsDbContext> _options;
        public ReportingTestDbContextFactory(DbContextOptions<AccountsDbContext> options) => _options = options;
        public AccountsDbContext CreateDbContext() => new AccountsDbContext(_options);
    }
}

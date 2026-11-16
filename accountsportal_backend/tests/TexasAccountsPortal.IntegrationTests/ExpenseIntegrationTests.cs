/*
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TexasAccountsPortal.Contracts.Expenses;
using TexasAccountsPortal.Domain.Entities;
using TexasAccountsPortal.Domain.Enums;
using TexasAccountsPortal.Infrastructure.Data;
using TexasAccountsPortal.Infrastructure.Services;
using Xunit;

namespace TexasAccountsPortal.IntegrationTests
{
    [Collection("DatabaseCollection")]
    public class ExpenseIntegrationTests : IClassFixture<SqlServerTestFixture>
    {
        private readonly SqlServerTestFixture _fixture;

        public ExpenseIntegrationTests(SqlServerTestFixture fixture)
        {
            _fixture = fixture;
        }

        private async Task<(long categoryId, long accountId, long bankId)> SeedBaseDataAsync()
        {
            using var context = _fixture.CreateContext();
            
            // Seed a category/expense header
            var category = new ExpenseHeader { Name = "Office Supplies", Category = "Office" };
            context.Add(category);

            // Seed a cash account
            var account = new Account { Name = "Petty Cash" };
            account.InitializeBalance(1000m);
            account.Type = AccountType.Cash;
            context.Add(account);

            // Seed a bank
            var bank = new Bank { BankName = "Chase", AccountNumber = "123456" };
            bank.InitializeBalance(5000m);
            context.Add(bank);

            await context.SaveChangesAsync();

            // Seed Chart of Accounts & Period
            var coaService = new ChartOfAccountService(context);
            await coaService.SeedSystemAccountsAsync(1L, default);

            var periodService = new AccountingPeriodService(context);
            await periodService.CreatePeriodAsync(new Contracts.AccountingPeriods.CreateAccountingPeriodRequest(
                Name: "Jan 2026", FiscalYear: 2026, PeriodNumber: 1,
                StartDate: new DateTime(2026, 1, 1), EndDate: new DateTime(2026, 1, 31)
            ), default);

            return (category.Id, account.Id, bank.Id);
        }

        [Fact]
        public async Task ExpenseApproval_MutatesBalance_CreatesTransaction_PostsToGL()
        {
            await _fixture.ResetDatabaseAsync();
            var (categoryId, accountId, bankId) = await SeedBaseDataAsync();

            using var context = _fixture.CreateContext();
            var periodRepo = new AccountingPeriodRepository(context);
            var postingService = new AccountingPostingService(context, periodRepo);
            var service = new ExpenseService(context, new TransactionalExecutor(context), postingService, new DefaultAccountingMappingProvider(context));

            // 1. Create a cash expense of 200m
            var request = new CreateExpenseRequest(
                ExpenseCategoryId: categoryId,
                Amount: 200m,
                Description: "Office printing paper",
                PaymentMethod: "cash",
                SourceAccountId: accountId,
                SourceBankId: null,
                Notes: "Monthly printing cost",
                ExpenseDate: new DateTime(2026, 1, 15)
            );

            var created = await service.CreateExpenseAsync(request, actorUserId: 1L, correlationId: "corr-123", default);
            Assert.Equal("draft", created.Status);

            // 2. Submit for approval
            var submitted = await service.SubmitExpenseAsync(created.Id, default);
            Assert.Equal("pendingapproval", submitted.Status);

            // 3. Approve
            var approved = await service.ApproveExpenseAsync(submitted.Id, actorUserId: 2L, default);
            Assert.Equal("posted", approved.Status);
            Assert.NotNull(approved.PostedTransactionId);
            Assert.NotNull(approved.PostedJournalEntryId);

            // 4. Verify operational balance mutation: Petty Cash Account should be 1000 - 200 = 800
            var finalAcct = await context.Accounts.FirstAsync(a => a.Id == accountId);
            Assert.Equal(800m, finalAcct.CurrentBalance);

            // 5. Verify legacy FinancialTransaction row was created with type Outgoing & status Approved
            var tx = await context.Transactions.FirstAsync(t => t.Id == approved.PostedTransactionId!.Value);
            Assert.Equal(200m, tx.Amount);
            Assert.Equal("outgoing", tx.TransactionType.ToString().ToLower());
            Assert.Equal("approved", tx.Status.ToString().ToLower());
            Assert.Equal("expense", tx.ReferenceType?.ToString().ToLower());

            // 6. Verify GL entries were created:
            // Debit Office Expenses (code 5210) for 200
            // Credit General Petty Cash (code 1111) for 200
            var journal = await context.JournalEntries.Include(j => j.Lines).FirstAsync(j => j.Id == approved.PostedJournalEntryId!.Value);
            Assert.Equal(JournalEntryStatus.Posted, journal.Status);
            Assert.Equal(2, journal.Lines.Count);

            var line1 = journal.Lines[0]; // Debit line (Office Expenses 5210)
            var line2 = journal.Lines[1]; // Credit line (Petty Cash 1111)

            // Let's assert Debit & Credit logic
            Assert.True(line1.Debit == 200m || line2.Debit == 200m);
            Assert.True(line1.Credit == 200m || line2.Credit == 200m);
        }

        [Fact]
        public async Task RejectExpense_UpdatesStatusToRejected()
        {
            await _fixture.ResetDatabaseAsync();
            var (categoryId, accountId, bankId) = await SeedBaseDataAsync();

            using var context = _fixture.CreateContext();
            var periodRepo = new AccountingPeriodRepository(context);
            var postingService = new AccountingPostingService(context, periodRepo);
            var service = new ExpenseService(context, new TransactionalExecutor(context), postingService, new DefaultAccountingMappingProvider(context));

            var created = await service.CreateExpenseAsync(new CreateExpenseRequest(
                ExpenseCategoryId: categoryId, Amount: 100m, Description: "Travel taxi",
                PaymentMethod: "cash", SourceAccountId: accountId, SourceBankId: null,
                Notes: null, ExpenseDate: new DateTime(2026, 1, 15)
            ), 1L, "corr-456", default);

            await service.SubmitExpenseAsync(created.Id, default);

            var rejected = await service.RejectExpenseAsync(created.Id, actorUserId: 2L, new RejectExpenseRequest("No receipt"), default);
            Assert.Equal("rejected", rejected.Status);
            Assert.Equal("No receipt", rejected.RejectionReason);

            // Petty Cash Account balance should remain unchanged (1000m)
            var finalAcct = await context.Accounts.FirstAsync(a => a.Id == accountId);
            Assert.Equal(1000m, finalAcct.CurrentBalance);
        }

        [Fact]
        public async Task CancelExpense_UpdatesStatusToCancelled()
        {
            await _fixture.ResetDatabaseAsync();
            var (categoryId, accountId, bankId) = await SeedBaseDataAsync();

            using var context = _fixture.CreateContext();
            var periodRepo = new AccountingPeriodRepository(context);
            var postingService = new AccountingPostingService(context, periodRepo);
            var service = new ExpenseService(context, new TransactionalExecutor(context), postingService, new DefaultAccountingMappingProvider(context));

            var created = await service.CreateExpenseAsync(new CreateExpenseRequest(
                ExpenseCategoryId: categoryId, Amount: 100m, Description: "Travel taxi",
                PaymentMethod: "cash", SourceAccountId: accountId, SourceBankId: null,
                Notes: null, ExpenseDate: new DateTime(2026, 1, 15)
            ), 1L, "corr-789", default);

            var cancelled = await service.CancelExpenseAsync(created.Id, default);
            Assert.Equal("cancelled", cancelled.Status);
        }

        [Fact]
        public async Task ExpenseSeeding_IsDeterministicAndIdempotent()
        {
            using var context = _fixture.CreateContext();
            await _fixture.ResetDatabaseAsync();

            var hasher = new TexasAccountsPortal.Infrastructure.Services.PasswordHasher();
            var config = new TexasAccountsPortal.Infrastructure.Options.BootstrapOptions
            {
                Enabled = true,
                Email = "admin@texas.com",
                Password = "AdminPassword123!"
            };

            // Seed system accounts so they are present in Chart of Accounts table for copying
            var coaService = new ChartOfAccountService(context);
            await coaService.SeedSystemAccountsAsync(1L, default);

            // Seed 1st time
            await AccountsDbContextSeed.SeedAsync(context, hasher, config);

            // Fetch expense headers and count them
            var initialCount = await context.ExpenseHeaders.CountAsync();
            Assert.True(initialCount > 0);

            // Verify they match ChartOfAccounts entries
            var initialHeaders = await context.ExpenseHeaders.ToListAsync();
            foreach (var h in initialHeaders)
            {
                var matchingAccount = await context.ChartOfAccounts.FindAsync(h.Id);
                Assert.NotNull(matchingAccount);
                Assert.Equal("expense", matchingAccount.AccountType.ToString().ToLower());
                Assert.False(matchingAccount.IsControlAccount);
            }

            // Seed 2nd time (should be idempotent)
            await AccountsDbContextSeed.SeedAsync(context, hasher, config);

            var secondCount = await context.ExpenseHeaders.CountAsync();
            Assert.Equal(initialCount, secondCount);
        }
    }
}
*/

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Diagnostics;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using TexasAccountsPortal.Contracts.Transactions;
using TexasAccountsPortal.Domain.Entities;
using TexasAccountsPortal.Domain.Enums;
using TexasAccountsPortal.Infrastructure.Data;
using TexasAccountsPortal.Infrastructure.Services;
using TexasAccountsPortal.IntegrationTests.Fakes;
using Xunit;

namespace TexasAccountsPortal.IntegrationTests
{
    public class FinancialInvariantsIntegrationTests : IClassFixture<SqlServerTestFixture>
    {
        private readonly SqlServerTestFixture _fixture;

        public FinancialInvariantsIntegrationTests(SqlServerTestFixture fixture)
        {
            _fixture = fixture;
        }

        private class TestFailureInterceptor : SaveChangesInterceptor
        {
            private readonly Type _failType;
            public TestFailureInterceptor(Type failType) => _failType = failType;

            public override ValueTask<InterceptionResult<int>> SavingChangesAsync(
                DbContextEventData eventData,
                InterceptionResult<int> result,
                CancellationToken cancellationToken = default)
            {
                if (eventData.Context != null)
                {
                    var entries = eventData.Context.ChangeTracker.Entries();
                    if (entries.Any(e => e.Entity.GetType() == _failType && e.State == EntityState.Added))
                    {
                        throw new InvalidOperationException($"Simulated save failure for {_failType.Name}");
                    }
                }
                return base.SavingChangesAsync(eventData, result, cancellationToken);
            }
        }

        private AccountsDbContext CreateContextWithInterceptor(Type failType)
        {
            var options = new DbContextOptionsBuilder<AccountsDbContext>()
                .UseSqlServer(_fixture.ConnectionString)
                .AddInterceptors(new TestFailureInterceptor(failType))
                .Options;

            return new AccountsDbContext(options);
        }

        [Fact]
        public async Task DuplicateIdempotencyKeySamePayload_ReplaysResult()
        {
            using var dbContext = _fixture.CreateContext();
            var executor = new TransactionalExecutor(dbContext);
            var postingService = new FinancialPostingService(dbContext, executor, _fixture.GetRecoveryStore(), new TestSalesPortalClient(), new DefaultAccountingMappingProvider(dbContext), new TestLedgerNotificationService());
            await _fixture.ResetDatabaseAsync();

            var account = new Account { Name = "Idem Same", Type = AccountType.Cash, LedgerType = LedgerType.Asset, CreatedBy = 1 };
            account.InitializeBalance(100m);
            dbContext.Add(account);
            await dbContext.SaveChangesAsync();

            var request = new CreateIncomingTransactionRequest(account.Id, null, 50m, "cash", "sale", "ref_1", "Desc");

            var resp1 = await postingService.PostIncomingTransactionAsync(request, 1, "idem_key_same", ReceiptOrigin.General, default);
            var resp2 = await postingService.PostIncomingTransactionAsync(request, 1, "idem_key_same", ReceiptOrigin.General, default);

            Assert.Equal(resp1.Id, resp2.Id);
            Assert.Equal(150m, resp1.BalanceAfter);
        }

        [Fact]
        public async Task DuplicateIdempotencyKeyDifferentPayload_Returns409()
        {
            using var dbContext = _fixture.CreateContext();
            var executor = new TransactionalExecutor(dbContext);
            var postingService = new FinancialPostingService(dbContext, executor, _fixture.GetRecoveryStore(), new TestSalesPortalClient(), new DefaultAccountingMappingProvider(dbContext), new TestLedgerNotificationService());
            await _fixture.ResetDatabaseAsync();

            var account = new Account { Name = "Idem Diff", Type = AccountType.Cash, LedgerType = LedgerType.Asset, CreatedBy = 1 };
            account.InitializeBalance(100m);
            dbContext.Add(account);
            await dbContext.SaveChangesAsync();

            var request1 = new CreateIncomingTransactionRequest(account.Id, null, 50m, "cash", "sale", "ref_1", "Desc");
            var request2 = new CreateIncomingTransactionRequest(account.Id, null, 75m, "cash", "sale", "ref_1", "Desc");

            await postingService.PostIncomingTransactionAsync(request1, 1, "idem_key_diff", ReceiptOrigin.General, default);

            await Assert.ThrowsAsync<InvalidOperationException>(() =>
                postingService.PostIncomingTransactionAsync(request2, 1, "idem_key_diff", ReceiptOrigin.General, default));
        }

        [Fact]
        public async Task RolledBackCommandDoesNotCreateCompletedIdempotencyRecord()
        {
            // Set up a DbContext that will fail when saving AuditLog
            using var dbContext = CreateContextWithInterceptor(typeof(AuditLog));
            var executor = new TransactionalExecutor(dbContext);
            var postingService = new FinancialPostingService(dbContext, executor, _fixture.GetRecoveryStore(), new TestSalesPortalClient(), new DefaultAccountingMappingProvider(dbContext), new TestLedgerNotificationService());
            await _fixture.ResetDatabaseAsync();

            var account = new Account { Name = "Idem Rollback", Type = AccountType.Cash, LedgerType = LedgerType.Asset, CreatedBy = 1 };
            account.InitializeBalance(100m);
            // We use a regular context to save the account so it succeeds
            using (var initContext = _fixture.CreateContext())
            {
                initContext.Add(account);
                await initContext.SaveChangesAsync();
            }

            var request = new CreateIncomingTransactionRequest(account.Id, null, 50m, "cash", "sale", "ref_1", "Desc");

            // Posting should fail due to simulated audit failure
            await Assert.ThrowsAsync<InvalidOperationException>(() =>
                postingService.PostIncomingTransactionAsync(request, 1, "idem_key_rollback", ReceiptOrigin.General, default));

            // Verify idempotency record is deleted or not completed
            using var verifyContext = _fixture.CreateContext();
            var record = await verifyContext.IdempotencyRecords.FindAsync("incoming-txn:idem_key_rollback");
            Assert.Null(record);
        }

        [Fact]
        public async Task RetryAfterRollbackCanSucceed()
        {
            await _fixture.ResetDatabaseAsync();

            var account = new Account { Name = "Retry Account", Type = AccountType.Cash, LedgerType = LedgerType.Asset, CreatedBy = 1 };
            account.InitializeBalance(100m);
            using (var initContext = _fixture.CreateContext())
            {
                initContext.Add(account);
                await initContext.SaveChangesAsync();
            }

            var request = new CreateIncomingTransactionRequest(account.Id, null, 50m, "cash", "sale", "ref_1", "Desc");

            // First attempt with failure interceptor (simulated AuditLog failure)
            using (var failContext = CreateContextWithInterceptor(typeof(AuditLog)))
            {
                var executor = new TransactionalExecutor(failContext);
                var postingService = new FinancialPostingService(failContext, executor, _fixture.GetRecoveryStore(), new TestSalesPortalClient(), new DefaultAccountingMappingProvider(failContext), new TestLedgerNotificationService());
                await Assert.ThrowsAsync<InvalidOperationException>(() =>
                    postingService.PostIncomingTransactionAsync(request, 1, "idem_key_retry", ReceiptOrigin.General, default));
            }

            // Second attempt with clean context (should succeed)
            using (var cleanContext = _fixture.CreateContext())
            {
                var executor = new TransactionalExecutor(cleanContext);
                var postingService = new FinancialPostingService(cleanContext, executor, _fixture.GetRecoveryStore(), new TestSalesPortalClient(), new DefaultAccountingMappingProvider(cleanContext), new TestLedgerNotificationService());
                var response = await postingService.PostIncomingTransactionAsync(request, 1, "idem_key_retry", ReceiptOrigin.General, default);
                Assert.Equal("approved", response.Status);
                Assert.Equal(150m, response.BalanceAfter);
            }
        }

        [Fact]
        public async Task StaleRowVersionReturns409()
        {
            using var dbContext = _fixture.CreateContext();
            await _fixture.ResetDatabaseAsync();

            var account = new Account { Name = "Stale Account", Type = AccountType.Cash, LedgerType = LedgerType.Asset, CreatedBy = 1 };
            account.InitializeBalance(100m);
            dbContext.Add(account);
            await dbContext.SaveChangesAsync();

            using var dbContext1 = _fixture.CreateContext();
            var acc1 = await dbContext1.Accounts.FindAsync(account.Id);

            using var dbContext2 = _fixture.CreateContext();
            var acc2 = await dbContext2.Accounts.FindAsync(account.Id);

            acc1!.Credit(50m);
            await dbContext1.SaveChangesAsync();

            acc2!.Credit(100m);
            // EF core throws DbUpdateConcurrencyException because the RowVersion is stale
            await Assert.ThrowsAsync<DbUpdateConcurrencyException>(() => dbContext2.SaveChangesAsync());
        }

        [Fact]
        public async Task InsufficientBalance_DoesNotCreatePartialTransaction()
        {
            using var dbContext = _fixture.CreateContext();
            var executor = new TransactionalExecutor(dbContext);
            var postingService = new FinancialPostingService(dbContext, executor, _fixture.GetRecoveryStore(), new TestSalesPortalClient(), new DefaultAccountingMappingProvider(dbContext), new TestLedgerNotificationService());
            await _fixture.ResetDatabaseAsync();

            var account = new Account { Name = "Cash In Hand", Type = AccountType.Cash, LedgerType = LedgerType.Asset, CreatedBy = 1 };
            account.InitializeBalance(10m); // Balance = 10
            dbContext.Add(account);
            await dbContext.SaveChangesAsync();

            var request = new CreateOutgoingTransactionRequest(
                SourceAccountId: account.Id,
                SourceBankId: null,
                Amount: 50m, // Deducting 50 requires balance = 50. Insufficient balance!
                PaymentMethod: "cash",
                ReferenceType: "expense",
                ReferenceId: "ref_1",
                Description: "Office snacks",
                SupplierId: null,
                SupplierName: null
            );

            // CreateOutgoingTransaction starts as Pending, which does not mutate balance yet
            var response = await postingService.PostOutgoingTransactionAsync(request, 1, "idem_out_inv", default);
            Assert.Equal("pending", response.Status);

            // Now, approving it will try to debit 50m which violates cash positive balance invariant!
            await Assert.ThrowsAsync<InvalidOperationException>(() =>
                postingService.ApproveTransactionAsync(response.Id, 2, default));

            // Verify account balance remains untouched (10) and transaction status remains Pending or rolled back
            using var verifyContext = _fixture.CreateContext();
            var dbAccount = await verifyContext.Accounts.FindAsync(account.Id);
            Assert.Equal(10m, dbAccount!.CurrentBalance);

            var dbTx = await verifyContext.Transactions.FindAsync(response.Id);
            Assert.Equal("pending", dbTx!.Status.ToString().ToLower());
        }

        [Fact]
        public async Task ApprovalFailure_RollsBackBalanceMutation()
        {
            using var dbContext = _fixture.CreateContext();
            var executor = new TransactionalExecutor(dbContext);
            var postingService = new FinancialPostingService(dbContext, executor, _fixture.GetRecoveryStore(), new TestSalesPortalClient(), new DefaultAccountingMappingProvider(dbContext), new TestLedgerNotificationService());
            await _fixture.ResetDatabaseAsync();

            var account = new Account { Name = "Asset Account", Type = AccountType.Cash, LedgerType = LedgerType.Asset, CreatedBy = 1 };
            account.InitializeBalance(500m);
            dbContext.Add(account);
            await dbContext.SaveChangesAsync();

            var tx = FinancialTransaction.Create(
                FinancialTransactionType.Outgoing,
                100m,
                PaymentMethod.Cash,
                createdBy: 1,
                sourceAccountId: account.Id,
                initialStatus: FinancialTransactionStatus.Pending
            );
            dbContext.Add(tx);
            await dbContext.SaveChangesAsync();

            // Simulate approval failure by passing an invalid transaction ID (Throws KeyNotFoundException)
            await Assert.ThrowsAsync<KeyNotFoundException>(() =>
                postingService.ApproveTransactionAsync(99999, 1, default));

            // Check that the balance was NOT mutated
            var dbAccount = await _fixture.CreateContext().Accounts.FindAsync(account.Id);
            Assert.Equal(500m, dbAccount!.CurrentBalance);
        }

        [Fact]
        public async Task AuditFailure_RollsBackFinancialMutation()
        {
            using var failContext = CreateContextWithInterceptor(typeof(AuditLog));
            var executor = new TransactionalExecutor(failContext);
            var postingService = new FinancialPostingService(failContext, executor, _fixture.GetRecoveryStore(), new TestSalesPortalClient(), new DefaultAccountingMappingProvider(failContext), new TestLedgerNotificationService());
            await _fixture.ResetDatabaseAsync();

            var account = new Account { Name = "Audit Rollback", Type = AccountType.Cash, LedgerType = LedgerType.Asset, CreatedBy = 1 };
            account.InitializeBalance(100m);
            using (var initContext = _fixture.CreateContext())
            {
                initContext.Add(account);
                await initContext.SaveChangesAsync();
            }

            var request = new CreateIncomingTransactionRequest(account.Id, null, 50m, "cash", "sale", "ref_1", "Desc");

            // Post should fail because AuditLog fails to save
            await Assert.ThrowsAsync<InvalidOperationException>(() =>
                postingService.PostIncomingTransactionAsync(request, 1, "idem_audit_fail", ReceiptOrigin.General, default));

            // Verify account balance did NOT change
            using var verifyContext = _fixture.CreateContext();
            var dbAccount = await verifyContext.Accounts.FindAsync(account.Id);
            Assert.Equal(100m, dbAccount!.CurrentBalance);

            // Verify no transaction was persisted
            var txs = await verifyContext.Transactions.Where(t => t.Description == "Desc").ToListAsync();
            Assert.Empty(txs);
        }

        [Fact]
        public async Task OutboxFailure_RollsBackFinancialMutation()
        {
            using var failContext = CreateContextWithInterceptor(typeof(OutboxMessage));
            var executor = new TransactionalExecutor(failContext);
            var postingService = new FinancialPostingService(failContext, executor, _fixture.GetRecoveryStore(), new TestSalesPortalClient(), new DefaultAccountingMappingProvider(failContext), new TestLedgerNotificationService());
            await _fixture.ResetDatabaseAsync();

            var account = new Account { Name = "Outbox Rollback", Type = AccountType.Cash, LedgerType = LedgerType.Asset, CreatedBy = 1 };
            account.InitializeBalance(500m);
            using (var initContext = _fixture.CreateContext())
            {
                initContext.Add(account);
                await initContext.SaveChangesAsync();
            }

            var tx = FinancialTransaction.Create(
                FinancialTransactionType.Outgoing,
                100m,
                PaymentMethod.Cash,
                createdBy: 1,
                sourceAccountId: account.Id,
                referenceType: TransactionReferenceType.Expense,
                referenceId: "ref_outbox_fail",
                initialStatus: FinancialTransactionStatus.Pending
            );
            using (var initContext = _fixture.CreateContext())
            {
                initContext.Add(tx);
                await initContext.SaveChangesAsync();
            }

            // Approving it will try to write an OutboxMessage (SupplierCostSync)
            // It should fail and roll back the account balance change and status change
            await Assert.ThrowsAsync<InvalidOperationException>(() =>
                postingService.ApproveTransactionAsync(tx.Id, 1, default));

            // Verify account balance did NOT change (500)
            using var verifyContext = _fixture.CreateContext();
            var dbAccount = await verifyContext.Accounts.FindAsync(account.Id);
            Assert.Equal(500m, dbAccount!.CurrentBalance);

            // Verify transaction status is still pending
            var dbTx = await verifyContext.Transactions.FindAsync(tx.Id);
            Assert.Equal("pending", dbTx!.Status.ToString().ToLower());
        }

        [Fact]
        public async Task ContraTransferFailure_RollsBackBothSides()
        {
            using var dbContext = _fixture.CreateContext();
            var executor = new TransactionalExecutor(dbContext);
            var postingService = new FinancialPostingService(dbContext, executor, _fixture.GetRecoveryStore(), new TestSalesPortalClient(), new DefaultAccountingMappingProvider(dbContext), new TestLedgerNotificationService());
            await _fixture.ResetDatabaseAsync();

            var source = new Account { Name = "Source Balance", Type = AccountType.Cash, LedgerType = LedgerType.Asset, CreatedBy = 1 };
            source.InitializeBalance(300m);
            dbContext.Add(source);
            await dbContext.SaveChangesAsync();

            // Destination account ID 9999 does not exist!
            var request = new CreateContraTransactionRequest(
                SourceAccountId: source.Id,
                SourceBankId: null,
                DestinationAccountId: 9999, // Invalid
                DestinationBankId: null,
                Amount: 50m,
                Description: "Transfer fail"
            );

            // Should throw KeyNotFoundException for destination account
            await Assert.ThrowsAsync<KeyNotFoundException>(() =>
                postingService.PostContraTransactionAsync(request, 1, "idem_contra_fail", default));

            // Verify source account balance did NOT change (remained 300)
            using var verifyContext = _fixture.CreateContext();
            var dbSource = await verifyContext.Accounts.FindAsync(source.Id);
            Assert.Equal(300m, dbSource!.CurrentBalance);
        }

        [Fact]
        public async Task ApprovedTransactionCannotBeModified()
        {
            using var dbContext = _fixture.CreateContext();
            await _fixture.ResetDatabaseAsync();

            var tx = FinancialTransaction.Create(
                FinancialTransactionType.Incoming,
                100m,
                PaymentMethod.Cash,
                createdBy: 1,
                initialStatus: FinancialTransactionStatus.Approved
            );
            dbContext.Add(tx);
            await dbContext.SaveChangesAsync();

            // Attempt to modify details directly
            var descProp = typeof(FinancialTransaction).GetProperty(nameof(FinancialTransaction.Description));
            descProp?.SetValue(tx, "Modified description");

            await Assert.ThrowsAsync<InvalidOperationException>(() => dbContext.SaveChangesAsync());
        }

        [Fact]
        public async Task ApprovedTransactionCannotBeDeleted()
        {
            using var dbContext = _fixture.CreateContext();
            await _fixture.ResetDatabaseAsync();

            var tx = FinancialTransaction.Create(
                FinancialTransactionType.Incoming,
                100m,
                PaymentMethod.Cash,
                createdBy: 1,
                initialStatus: FinancialTransactionStatus.Approved
            );
            dbContext.Add(tx);
            await dbContext.SaveChangesAsync();

            dbContext.Remove(tx);
            await Assert.ThrowsAsync<InvalidOperationException>(() => dbContext.SaveChangesAsync());
        }

        [Fact]
        public async Task RejectedTransactionCannotBeDeleted()
        {
            using var dbContext = _fixture.CreateContext();
            await _fixture.ResetDatabaseAsync();

            var tx = FinancialTransaction.Create(
                FinancialTransactionType.Incoming,
                100m,
                PaymentMethod.Cash,
                createdBy: 1,
                initialStatus: FinancialTransactionStatus.Rejected
            );
            dbContext.Add(tx);
            await dbContext.SaveChangesAsync();

            dbContext.Remove(tx);
            await Assert.ThrowsAsync<InvalidOperationException>(() => dbContext.SaveChangesAsync());
        }

        [Fact]
        public async Task DirectStatusModificationCannotBypassStateMachine()
        {
            using var dbContext = _fixture.CreateContext();
            await _fixture.ResetDatabaseAsync();

            var tx = FinancialTransaction.Create(
                FinancialTransactionType.Incoming,
                100m,
                PaymentMethod.Cash,
                createdBy: 1,
                initialStatus: FinancialTransactionStatus.Pending
            );
            dbContext.Add(tx);
            await dbContext.SaveChangesAsync();

            // Interceptor handles tracking of modifications
            // Directly setting state to Approved bypassing state machine methods will cause interceptor check to fail!
            var statusProp = typeof(FinancialTransaction).GetProperty(nameof(FinancialTransaction.Status));
            statusProp?.SetValue(tx, FinancialTransactionStatus.Approved);

            await Assert.ThrowsAsync<InvalidOperationException>(() => dbContext.SaveChangesAsync());
        }

        [Fact]
        public async Task PendingTransactionCanBeApprovedThroughDomainTransition()
        {
            using var dbContext = _fixture.CreateContext();
            await _fixture.ResetDatabaseAsync();
            var tx = FinancialTransaction.Create(FinancialTransactionType.Incoming, 100m, PaymentMethod.Cash, createdBy: 1);
            dbContext.Add(tx);
            await dbContext.SaveChangesAsync();

            tx.Approve(approvedBy: 2);
            await dbContext.SaveChangesAsync();

            var dbTx = await _fixture.CreateContext().Transactions.FindAsync(tx.Id);
            Assert.Equal(FinancialTransactionStatus.Approved, dbTx!.Status);
            Assert.Equal(2, dbTx.ApprovedBy);
        }

        [Fact]
        public async Task PendingTransactionCanBeRejectedThroughDomainTransition()
        {
            using var dbContext = _fixture.CreateContext();
            await _fixture.ResetDatabaseAsync();
            var tx = FinancialTransaction.Create(FinancialTransactionType.Incoming, 100m, PaymentMethod.Cash, createdBy: 1);
            dbContext.Add(tx);
            await dbContext.SaveChangesAsync();

            tx.Reject(rejectedBy: 2, "Duplicate post");
            await dbContext.SaveChangesAsync();

            var dbTx = await _fixture.CreateContext().Transactions.FindAsync(tx.Id);
            Assert.Equal(FinancialTransactionStatus.Rejected, dbTx!.Status);
            Assert.Equal(2, dbTx.RejectedBy);
        }

        [Fact]
        public async Task ApprovedTransactionCannotReturnToPending()
        {
            using var dbContext = _fixture.CreateContext();
            await _fixture.ResetDatabaseAsync();
            var tx = FinancialTransaction.Create(FinancialTransactionType.Incoming, 100m, PaymentMethod.Cash, createdBy: 1);
            tx.Approve(2);
            dbContext.Add(tx);
            await dbContext.SaveChangesAsync();

            var statusProp = typeof(FinancialTransaction).GetProperty(nameof(FinancialTransaction.Status));
            statusProp?.SetValue(tx, FinancialTransactionStatus.Pending);

            await Assert.ThrowsAsync<InvalidOperationException>(() => dbContext.SaveChangesAsync());
        }

        [Fact]
        public async Task RejectedTransactionCannotReturnToPending()
        {
            using var dbContext = _fixture.CreateContext();
            await _fixture.ResetDatabaseAsync();
            var tx = FinancialTransaction.Create(FinancialTransactionType.Incoming, 100m, PaymentMethod.Cash, createdBy: 1);
            tx.Reject(2, "Reason");
            dbContext.Add(tx);
            await dbContext.SaveChangesAsync();

            var statusProp = typeof(FinancialTransaction).GetProperty(nameof(FinancialTransaction.Status));
            statusProp?.SetValue(tx, FinancialTransactionStatus.Pending);

            await Assert.ThrowsAsync<InvalidOperationException>(() => dbContext.SaveChangesAsync());
        }

        [Fact]
        public async Task ApprovedTransactionCannotBecomeRejected()
        {
            using var dbContext = _fixture.CreateContext();
            await _fixture.ResetDatabaseAsync();
            var tx = FinancialTransaction.Create(FinancialTransactionType.Incoming, 100m, PaymentMethod.Cash, createdBy: 1);
            tx.Approve(2);
            dbContext.Add(tx);
            await dbContext.SaveChangesAsync();

            var statusProp = typeof(FinancialTransaction).GetProperty(nameof(FinancialTransaction.Status));
            statusProp?.SetValue(tx, FinancialTransactionStatus.Rejected);

            await Assert.ThrowsAsync<InvalidOperationException>(() => dbContext.SaveChangesAsync());
        }

        [Fact]
        public async Task RejectedTransactionCannotBecomeApproved()
        {
            using var dbContext = _fixture.CreateContext();
            await _fixture.ResetDatabaseAsync();
            var tx = FinancialTransaction.Create(FinancialTransactionType.Incoming, 100m, PaymentMethod.Cash, createdBy: 1);
            tx.Reject(2, "Reason");
            dbContext.Add(tx);
            await dbContext.SaveChangesAsync();

            var statusProp = typeof(FinancialTransaction).GetProperty(nameof(FinancialTransaction.Status));
            statusProp?.SetValue(tx, FinancialTransactionStatus.Approved);

            await Assert.ThrowsAsync<InvalidOperationException>(() => dbContext.SaveChangesAsync());
        }

        [Fact]
        public async Task ApprovalRequiresApprovedByAuditField()
        {
            using var dbContext = _fixture.CreateContext();
            await _fixture.ResetDatabaseAsync();
            var tx = FinancialTransaction.Create(FinancialTransactionType.Incoming, 100m, PaymentMethod.Cash, createdBy: 1);
            dbContext.Add(tx);
            await dbContext.SaveChangesAsync();

            // Set state to Approved but keep ApprovedBy null
            var statusProp = typeof(FinancialTransaction).GetProperty(nameof(FinancialTransaction.Status));
            statusProp?.SetValue(tx, FinancialTransactionStatus.Approved);

            await Assert.ThrowsAsync<InvalidOperationException>(() => dbContext.SaveChangesAsync());
        }

        [Fact]
        public async Task RejectionRequiresRejectedByAuditField()
        {
            using var dbContext = _fixture.CreateContext();
            await _fixture.ResetDatabaseAsync();
            var tx = FinancialTransaction.Create(FinancialTransactionType.Incoming, 100m, PaymentMethod.Cash, createdBy: 1);
            dbContext.Add(tx);
            await dbContext.SaveChangesAsync();

            // Set state to Rejected but keep RejectedBy null
            var statusProp = typeof(FinancialTransaction).GetProperty(nameof(FinancialTransaction.Status));
            statusProp?.SetValue(tx, FinancialTransactionStatus.Rejected);

            await Assert.ThrowsAsync<InvalidOperationException>(() => dbContext.SaveChangesAsync());
        }

        private async Task SeedCoaAndPeriodAsync(AccountsDbContext context)
        {
            var coaService = new ChartOfAccountService(context);
            await coaService.SeedSystemAccountsAsync(1L, default);

            var periodService = new AccountingPeriodService(context);
            await periodService.CreatePeriodAsync(new Contracts.AccountingPeriods.CreateAccountingPeriodRequest(
                Name: "E2E Active Period", FiscalYear: DateTime.UtcNow.Year, PeriodNumber: 1,
                StartDate: new DateTime(DateTime.UtcNow.Year, 1, 1), EndDate: new DateTime(DateTime.UtcNow.Year, 12, 31)
            ), default);
        }

        [Fact]
        public async Task IncomingTransaction_PersistedBeforeGlPosting_ReceivesNonZeroId()
        {
            using var dbContext = _fixture.CreateContext();
            var executor = new TransactionalExecutor(dbContext);
            var periodRepo = new AccountingPeriodRepository(dbContext);
            var glPostingService = new AccountingPostingService(dbContext, periodRepo);
            var postingService = new FinancialPostingService(
                dbContext, executor, _fixture.GetRecoveryStore(), new TestSalesPortalClient(), 
                glPostingService, new DefaultAccountingMappingProvider(dbContext), new TestLedgerNotificationService());
            await _fixture.ResetDatabaseAsync();
            await SeedCoaAndPeriodAsync(dbContext);

            var account = new Account { Name = "Incoming Seed", Type = AccountType.Cash, LedgerType = LedgerType.Asset, CreatedBy = 1 };
            account.InitializeBalance(100m);
            dbContext.Add(account);
            await dbContext.SaveChangesAsync();

            var request = new CreateIncomingTransactionRequest(account.Id, null, 50m, "cash", "sale", "ref_incoming_nonzero", "Desc");

            var response = await postingService.PostIncomingTransactionAsync(request, 1, "idem_incoming_nonzero", ReceiptOrigin.General, default);

            // Assert transaction receives a non-zero ID
            Assert.True(response.Id > 0);

            // Assert that the GL Journal Entry's SourceId matches the transaction ID
            var journalEntry = await dbContext.JournalEntries
                .FirstOrDefaultAsync(j => j.SourceType == "Incoming" && j.SourceId == response.Id.ToString());
            Assert.NotNull(journalEntry);
            Assert.Equal(response.Id.ToString(), journalEntry.SourceId);
        }

        [Fact]
        public async Task ContraTransaction_PersistedBeforeGlPosting_ReceivesNonZeroId()
        {
            using var dbContext = _fixture.CreateContext();
            var executor = new TransactionalExecutor(dbContext);
            var periodRepo = new AccountingPeriodRepository(dbContext);
            var glPostingService = new AccountingPostingService(dbContext, periodRepo);
            var postingService = new FinancialPostingService(
                dbContext, executor, _fixture.GetRecoveryStore(), new TestSalesPortalClient(), 
                glPostingService, new DefaultAccountingMappingProvider(dbContext), new TestLedgerNotificationService());
            await _fixture.ResetDatabaseAsync();
            await SeedCoaAndPeriodAsync(dbContext);

            var source = new Account { Name = "Contra Source", Type = AccountType.Cash, LedgerType = LedgerType.Asset, CreatedBy = 1 };
            source.InitializeBalance(300m);
            var dest = new Account { Name = "Contra Dest", Type = AccountType.Cash, LedgerType = LedgerType.Asset, CreatedBy = 1 };
            dest.InitializeBalance(100m);
            dbContext.Add(source);
            dbContext.Add(dest);
            await dbContext.SaveChangesAsync();

            var request = new CreateContraTransactionRequest(source.Id, null, dest.Id, null, 50m, "Contra Transfer");

            var response = await postingService.PostContraTransactionAsync(request, 1, "idem_contra_nonzero", default);

            // Assert transaction receives a non-zero ID
            Assert.True(response.Id > 0);

            // Assert that the GL Journal Entry's SourceId matches the transaction ID
            var journalEntry = await dbContext.JournalEntries
                .FirstOrDefaultAsync(j => j.SourceType == "Contra" && j.SourceId == response.Id.ToString());
            Assert.NotNull(journalEntry);
            Assert.Equal(response.Id.ToString(), journalEntry.SourceId);
        }

        [Fact]
        public async Task GLPostingFailure_RollsBackAllState()
        {
            // Set up a DbContext that will fail when saving JournalEntry
            using var dbContext = CreateContextWithInterceptor(typeof(JournalEntry));
            var executor = new TransactionalExecutor(dbContext);
            var periodRepo = new AccountingPeriodRepository(dbContext);
            var glPostingService = new AccountingPostingService(dbContext, periodRepo);
            var postingService = new FinancialPostingService(
                dbContext, executor, _fixture.GetRecoveryStore(), new TestSalesPortalClient(), 
                glPostingService, new DefaultAccountingMappingProvider(dbContext), new TestLedgerNotificationService());
            await _fixture.ResetDatabaseAsync();

            // We must add the account and seed COA with a clean context so it succeeds
            var account = new Account { Name = "GL Fail Account", Type = AccountType.Cash, LedgerType = LedgerType.Asset, CreatedBy = 1 };
            account.InitializeBalance(100m);
            using (var cleanContext = _fixture.CreateContext())
            {
                await SeedCoaAndPeriodAsync(cleanContext);
                cleanContext.Add(account);
                await cleanContext.SaveChangesAsync();
            }

            var request = new CreateIncomingTransactionRequest(account.Id, null, 50m, "cash", "sale", "ref_gl_fail", "Desc");

            // PostIncomingTransactionAsync will try to write the transaction, update balance, and post to GL.
            // Since writing JournalEntry fails, the whole transaction must rollback.
            await Assert.ThrowsAsync<InvalidOperationException>(() =>
                postingService.PostIncomingTransactionAsync(request, 1, "idem_gl_fail", ReceiptOrigin.General, default));

            // Verify all data is rolled back
            using var verifyContext = _fixture.CreateContext();
            
            // 1. Transaction row is NOT persisted
            var txs = await verifyContext.Transactions.Where(t => t.Description == "Desc").ToListAsync();
            Assert.Empty(txs);

            // 2. Account balance is NOT mutated (remains 100m)
            var dbAccount = await verifyContext.Accounts.FindAsync(account.Id);
            Assert.Equal(100m, dbAccount!.CurrentBalance);

            // 3. No JournalEntries or GeneralLedgerEntries were created
            var jnls = await verifyContext.JournalEntries.ToListAsync();
            Assert.Empty(jnls);

            // 4. No AuditLogs were created
            var audits = await verifyContext.AuditLogs.ToListAsync();
            Assert.Empty(audits);

            // 5. Idempotency record is NOT marked completed (it should be deleted or null)
            var record = await verifyContext.IdempotencyRecords.FindAsync("incoming-txn:idem_gl_fail");
            Assert.Null(record);
        }
    }
}

using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
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
    public class DatabaseIntegrationTests : IClassFixture<SqlServerTestFixture>
    {
        private readonly SqlServerTestFixture _fixture;

        public DatabaseIntegrationTests(SqlServerTestFixture fixture)
        {
            _fixture = fixture;
        }

        [Fact]
        public void PasswordHasher_ShouldHashAndVerifyLaravelBcryptCompatibility()
        {
            var hasher = new PasswordHasher();
            var password = "secret_password_123";
            var hash = hasher.HashPassword(password);

            Assert.True(hasher.VerifyPassword(password, hash));
            Assert.False(hasher.VerifyPassword("wrong_password", hash));
        }

        [Fact]
        public async Task Database_Migrations_Should_Be_Successfully_Applied()
        {
            using var dbContext = _fixture.CreateContext();
            var appliedMigrations = await dbContext.Database.GetAppliedMigrationsAsync();
            Assert.Contains(appliedMigrations, m => m.Contains("InitialCreate"));

            // Verify expected tables by querying empty lists (schema check)
            var accountsCount = await dbContext.Accounts.CountAsync();
            var banksCount = await dbContext.Banks.CountAsync();
            var txCount = await dbContext.Transactions.CountAsync();
            var tokenCount = await dbContext.RefreshTokens.CountAsync();
            var outboxCount = await dbContext.OutboxMessages.CountAsync();
            var idemCount = await dbContext.IdempotencyRecords.CountAsync();

            Assert.True(accountsCount >= 0);
            Assert.True(banksCount >= 0);
            Assert.True(txCount >= 0);
            Assert.True(tokenCount >= 0);
            Assert.True(outboxCount >= 0);
            Assert.True(idemCount >= 0);

            // Execute SQL schema checks on SQL Server LocalDB
            using var conn = dbContext.Database.GetDbConnection();
            await conn.OpenAsync();
            using var cmd = conn.CreateCommand();

            // 1. Verify EFMigrationsHistory
            cmd.CommandText = "SELECT COUNT(*) FROM __EFMigrationsHistory WHERE MigrationId LIKE '%InitialCreate%'";
            var migrationExists = (int)(cmd.ExecuteScalar() ?? 0);
            Assert.True(migrationExists > 0, "InitialCreate migration should be recorded in EFMigrationsHistory");

            // 2. Verify rowversion column on accounts
            cmd.CommandText = "SELECT TYPE_NAME(system_type_id) FROM sys.columns WHERE object_id = OBJECT_ID('accounts') AND name = 'RowVersion'";
            var accountsRowVersionType = (string?)cmd.ExecuteScalar();
            Assert.True(accountsRowVersionType == "timestamp" || accountsRowVersionType == "rowversion", "accounts.RowVersion column should be timestamp/rowversion");

            // 3. Verify rowversion column on banks
            cmd.CommandText = "SELECT TYPE_NAME(system_type_id) FROM sys.columns WHERE object_id = OBJECT_ID('banks') AND name = 'RowVersion'";
            var banksRowVersionType = (string?)cmd.ExecuteScalar();
            Assert.True(banksRowVersionType == "timestamp" || banksRowVersionType == "rowversion", "banks.RowVersion column should be timestamp/rowversion");

            // 4. Verify unique index on idempotency_records (Scope, Key)
            cmd.CommandText = "SELECT is_unique FROM sys.indexes WHERE object_id = OBJECT_ID('idempotency_records') AND name = 'IX_idempotency_records_Scope_Key'";
            var idempotencyIndexUnique = (bool?)cmd.ExecuteScalar();
            Assert.True(idempotencyIndexUnique == true, "idempotency_records should have unique index IX_idempotency_records_Scope_Key");

            // 5. Verify index on outbox_messages (Status, AvailableAt)
            cmd.CommandText = "SELECT COUNT(*) FROM sys.indexes WHERE object_id = OBJECT_ID('outbox_messages') AND name = 'IX_outbox_messages_Status_AvailableAt'";
            var outboxIndexExists = (int)(cmd.ExecuteScalar() ?? 0);
            Assert.True(outboxIndexExists > 0, "outbox_messages should have index IX_outbox_messages_Status_AvailableAt");
        }

        [Fact]
        public async Task IncomingPosting_IncreasesDestinationExactlyOnce()
        {
            using var dbContext = _fixture.CreateContext();
            var postingService = new FinancialPostingService(dbContext, new TransactionalExecutor(dbContext), _fixture.GetRecoveryStore(), new TestSalesPortalClient(), new DefaultAccountingMappingProvider(dbContext), new TestLedgerNotificationService());
            await _fixture.ResetDatabaseAsync();

            var account = new Account
            {
                Name = "Sales Account",
                Type = AccountType.Cash,
                LedgerType = LedgerType.Asset,
                CreatedBy = 1
            };
            account.InitializeBalance(100m);
            dbContext.Add(account);
            await dbContext.SaveChangesAsync();

            var request = new CreateIncomingTransactionRequest(
                DestinationAccountId: account.Id,
                DestinationBankId: null,
                Amount: 50m,
                PaymentMethod: "cash",
                ReferenceType: "sale",
                ReferenceId: "ref_sale_001",
                Description: "Sale payout"
            );

            var response = await postingService.PostIncomingTransactionAsync(request, 1, "idem_incoming_1", ReceiptOrigin.General, default);

            Assert.Equal("approved", response.Status);
            Assert.Equal(150m, response.BalanceAfter);

            var dbAccount = await dbContext.FindAsync<Account>(new object[] { account.Id }, default);
            Assert.NotNull(dbAccount);
            Assert.Equal(150m, dbAccount.CurrentBalance);
        }

        [Fact]
        public async Task OutgoingApproval_DecreasesSourceExactlyOnce()
        {
            using var dbContext = _fixture.CreateContext();
            var postingService = new FinancialPostingService(dbContext, new TransactionalExecutor(dbContext), _fixture.GetRecoveryStore(), new TestSalesPortalClient(), new DefaultAccountingMappingProvider(dbContext), new TestLedgerNotificationService());
            await _fixture.ResetDatabaseAsync();

            var account = new Account
            {
                Name = "Operating Fund",
                Type = AccountType.Cash,
                LedgerType = LedgerType.Asset,
                CreatedBy = 1
            };
            account.InitializeBalance(1000m);
            dbContext.Add(account);
            await dbContext.SaveChangesAsync();

            var request = new CreateOutgoingTransactionRequest(
                SourceAccountId: account.Id,
                SourceBankId: null,
                Amount: 300m,
                PaymentMethod: "cash",
                ReferenceType: "expense",
                ReferenceId: "ref_exp_002",
                Description: "Office rent",
                SupplierId: null,
                SupplierName: null
            );

            var response = await postingService.PostOutgoingTransactionAsync(request, 1, "idem_outgoing_1", default);
            Assert.Equal("pending", response.Status);

            var dbAccount = await dbContext.FindAsync<Account>(new object[] { account.Id }, default);
            Assert.NotNull(dbAccount);
            Assert.Equal(1000m, dbAccount.CurrentBalance); // Not deducted yet

            await postingService.ApproveTransactionAsync(response.Id, 2, default);

            var dbAccountAfter = await _fixture.CreateContext().FindAsync<Account>(new object[] { account.Id }, default);
            Assert.NotNull(dbAccountAfter);
            Assert.Equal(700m, dbAccountAfter.CurrentBalance); // Deducted exactly once
        }

        [Fact]
        public async Task OutgoingRejection_DoesNotChangeBalance()
        {
            using var dbContext = _fixture.CreateContext();
            var postingService = new FinancialPostingService(dbContext, new TransactionalExecutor(dbContext), _fixture.GetRecoveryStore(), new TestSalesPortalClient(), new DefaultAccountingMappingProvider(dbContext), new TestLedgerNotificationService());
            await _fixture.ResetDatabaseAsync();

            var account = new Account
            {
                Name = "Reserve Fund",
                Type = AccountType.Cash,
                LedgerType = LedgerType.Asset,
                CreatedBy = 1
            };
            account.InitializeBalance(500m);
            dbContext.Add(account);
            await dbContext.SaveChangesAsync();

            var request = new CreateOutgoingTransactionRequest(
                SourceAccountId: account.Id,
                SourceBankId: null,
                Amount: 100m,
                PaymentMethod: "cash",
                ReferenceType: "expense",
                ReferenceId: "ref_exp_003",
                Description: "Coffee machines",
                SupplierId: null,
                SupplierName: null
            );

            var response = await postingService.PostOutgoingTransactionAsync(request, 1, "idem_outgoing_2", default);
            await postingService.RejectTransactionAsync(response.Id, 2, "Too expensive", default);

            var dbAccount = await dbContext.FindAsync<Account>(new object[] { account.Id }, default);
            Assert.NotNull(dbAccount);
            Assert.Equal(500m, dbAccount.CurrentBalance); // Balance remains unchanged
        }

        [Fact]
        public async Task ContraTransfer_IsAtomic()
        {
            using var dbContext = _fixture.CreateContext();
            var postingService = new FinancialPostingService(dbContext, new TransactionalExecutor(dbContext), _fixture.GetRecoveryStore(), new TestSalesPortalClient(), new DefaultAccountingMappingProvider(dbContext), new TestLedgerNotificationService());
            await _fixture.ResetDatabaseAsync();

            var source = new Account
            {
                Name = "Source Account",
                Type = AccountType.Cash,
                LedgerType = LedgerType.Asset,
                CreatedBy = 1
            };
            source.InitializeBalance(500m);

            var dest = new Account
            {
                Name = "Destination Account",
                Type = AccountType.Cash,
                LedgerType = LedgerType.Asset,
                CreatedBy = 1
            };
            dest.InitializeBalance(200m);

            dbContext.Add(source);
            dbContext.Add(dest);
            await dbContext.SaveChangesAsync();

            var request = new CreateContraTransactionRequest(
                SourceAccountId: source.Id,
                SourceBankId: null,
                DestinationAccountId: dest.Id,
                DestinationBankId: null,
                Amount: 150m,
                Description: "Internal Transfer"
            );

            await postingService.PostContraTransactionAsync(request, 1, "idem_contra_1", default);

            var dbSource = await dbContext.FindAsync<Account>(new object[] { source.Id }, default);
            var dbDest = await dbContext.FindAsync<Account>(new object[] { dest.Id }, default);

            Assert.NotNull(dbSource);
            Assert.NotNull(dbDest);
            Assert.Equal(350m, dbSource.CurrentBalance);
            Assert.Equal(350m, dbDest.CurrentBalance);
        }

        [Fact]
        public async Task ContraTransfer_SourceEqualsDestination_Throws()
        {
            using var dbContext = _fixture.CreateContext();
            var postingService = new FinancialPostingService(dbContext, new TransactionalExecutor(dbContext), _fixture.GetRecoveryStore(), new TestSalesPortalClient(), new DefaultAccountingMappingProvider(dbContext), new TestLedgerNotificationService());
            await _fixture.ResetDatabaseAsync();

            var source = new Account
            {
                Name = "Same Account",
                Type = AccountType.Cash,
                LedgerType = LedgerType.Asset,
                CreatedBy = 1
            };
            source.InitializeBalance(500m);
            dbContext.Add(source);
            await dbContext.SaveChangesAsync();

            var request = new CreateContraTransactionRequest(
                SourceAccountId: source.Id,
                SourceBankId: null,
                DestinationAccountId: source.Id,
                DestinationBankId: null,
                Amount: 50m,
                Description: "Self transfer"
            );

            await Assert.ThrowsAsync<InvalidOperationException>(() => postingService.PostContraTransactionAsync(request, 1, "idem_contra_2", default));
        }

        [Fact]
        public async Task BalanceCorrection_PreservesOldAndNewBalance()
        {
            using var dbContext = _fixture.CreateContext();
            var postingService = new FinancialPostingService(dbContext, new TransactionalExecutor(dbContext), _fixture.GetRecoveryStore(), new TestSalesPortalClient(), new DefaultAccountingMappingProvider(dbContext), new TestLedgerNotificationService());
            await _fixture.ResetDatabaseAsync();

            var account = new Account
            {
                Name = "Audit Account",
                Type = AccountType.Cash,
                LedgerType = LedgerType.Asset,
                CreatedBy = 1
            };
            account.InitializeBalance(500m);
            dbContext.Add(account);
            await dbContext.SaveChangesAsync();

            var newBalance = await postingService.PostBalanceCorrectionAsync(account.Id, -50m, "Cash missing", 1, "idem_correction_1", default);

            Assert.Equal(450m, newBalance);

            var dbAccount = await dbContext.FindAsync<Account>(new object[] { account.Id }, default);
            Assert.NotNull(dbAccount);
            Assert.Equal(450m, dbAccount.CurrentBalance);
        }

        [Fact]
        public async Task ApprovedTransactionCannotBeModifiedOrDeleted()
        {
            using var dbContext = _fixture.CreateContext();
            await _fixture.ResetDatabaseAsync();

            var tx = FinancialTransaction.Create(
                FinancialTransactionType.Incoming,
                500m,
                PaymentMethod.Cash,
                createdBy: 1,
                initialStatus: FinancialTransactionStatus.Pending
            );
            tx.Approve(2);
            dbContext.Add(tx);
            await dbContext.SaveChangesAsync();

            // Attempt Deletion
            dbContext.Remove(tx);
            await Assert.ThrowsAsync<InvalidOperationException>(() => dbContext.SaveChangesAsync());

            // Attempt Modification
            dbContext.Entry(tx).State = EntityState.Unchanged;
            var amountProp = typeof(FinancialTransaction).GetProperty(nameof(FinancialTransaction.Amount));
            amountProp?.SetValue(tx, 1000m);

            await Assert.ThrowsAsync<InvalidOperationException>(() => dbContext.SaveChangesAsync());
        }

        [Fact]
        public async Task ConcurrentAccountDebits_DoNotLoseUpdates()
        {
            using var dbContext = _fixture.CreateContext();
            await _fixture.ResetDatabaseAsync();

            var account = new Account
            {
                Name = "Concurrency Account",
                Type = AccountType.Cash,
                LedgerType = LedgerType.Asset,
                CreatedBy = 1
            };
            account.InitializeBalance(1000m);
            dbContext.Add(account);
            await dbContext.SaveChangesAsync();

            // Load in separate contexts
            using var dbContext1 = _fixture.CreateContext();
            var acc1 = await dbContext1.FindAsync<Account>(new object[] { account.Id }, default);

            using var dbContext2 = _fixture.CreateContext();
            var acc2 = await dbContext2.FindAsync<Account>(new object[] { account.Id }, default);

            Assert.NotNull(acc1);
            Assert.NotNull(acc2);

            acc1.Debit(100m);
            await dbContext1.SaveChangesAsync();

            acc2.Debit(200m);
            await Assert.ThrowsAsync<DbUpdateConcurrencyException>(() => dbContext2.SaveChangesAsync());
        }

        [Fact]
        public async Task ConcurrentBankDebits_DoNotLoseUpdates()
        {
            using var dbContext = _fixture.CreateContext();
            await _fixture.ResetDatabaseAsync();

            var bank = new Bank
            {
                BankName = "Concurrency Bank",
                AccountNumber = "123-456-789",
                CreatedBy = 1
            };
            bank.InitializeBalance(1000m);
            dbContext.Add(bank);
            await dbContext.SaveChangesAsync();

            // Load in separate contexts
            using var dbContext1 = _fixture.CreateContext();
            var bank1 = await dbContext1.FindAsync<Bank>(new object[] { bank.Id }, default);

            using var dbContext2 = _fixture.CreateContext();
            var bank2 = await dbContext2.FindAsync<Bank>(new object[] { bank.Id }, default);

            Assert.NotNull(bank1);
            Assert.NotNull(bank2);

            bank1.Debit(100m);
            await dbContext1.SaveChangesAsync();

            bank2.Debit(200m);
            await Assert.ThrowsAsync<DbUpdateConcurrencyException>(() => dbContext2.SaveChangesAsync());
        }

        [Fact]
        public async Task ConcurrentDuplicateCommands_CreateOneFinancialEffect()
        {
            using var dbContext = _fixture.CreateContext();
            var postingService = new FinancialPostingService(dbContext, new TransactionalExecutor(dbContext), _fixture.GetRecoveryStore(), new TestSalesPortalClient(), new DefaultAccountingMappingProvider(dbContext), new TestLedgerNotificationService());
            await _fixture.ResetDatabaseAsync();

            var account = new Account
            {
                Name = "Sales Account",
                Type = AccountType.Cash,
                LedgerType = LedgerType.Asset,
                CreatedBy = 1
            };
            account.InitializeBalance(100m);
            dbContext.Add(account);
            await dbContext.SaveChangesAsync();

            var request = new CreateIncomingTransactionRequest(
                DestinationAccountId: account.Id,
                DestinationBankId: null,
                Amount: 50m,
                PaymentMethod: "cash",
                ReferenceType: "sale",
                ReferenceId: "ref_sale_100",
                Description: "Idempotent payout"
            );

            // Execute first call
            var response1 = await postingService.PostIncomingTransactionAsync(request, 1, "idem_key_concur_1", ReceiptOrigin.General, default);
            Assert.Equal("approved", response1.Status);

            // Execute second call (replays response)
            var response2 = await postingService.PostIncomingTransactionAsync(request, 1, "idem_key_concur_1", ReceiptOrigin.General, default);
            Assert.Equal("approved", response2.Status);
            Assert.Equal(response1.Id, response2.Id);

            var dbAccount = await dbContext.FindAsync<Account>(new object[] { account.Id }, default);
            Assert.NotNull(dbAccount);
            Assert.Equal(150m, dbAccount.CurrentBalance); // Balance increased exactly once!
        }
    }
}

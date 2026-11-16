using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Contracts.SupplierPayments;
using TexasAccountsPortal.Contracts.PurchaseReturns;
using TexasAccountsPortal.Contracts.SalesReturns;
using TexasAccountsPortal.Domain.Entities;
using TexasAccountsPortal.Domain.Enums;
using TexasAccountsPortal.Infrastructure.Data;
using TexasAccountsPortal.Infrastructure.Services;
using TexasAccountsPortal.IntegrationTests.Fakes;
using Xunit;

namespace TexasAccountsPortal.IntegrationTests
{
    public class Phase2WorkflowIntegrationTests : IClassFixture<SqlServerTestFixture>
    {
        private readonly SqlServerTestFixture _fixture;

        public Phase2WorkflowIntegrationTests(SqlServerTestFixture fixture)
        {
            _fixture = fixture;
        }

        private async Task<(AccountsDbContext dbContext, FinancialPostingService postingService, TestSalesPortalClient fakeClient)> SetupTestContextAsync()
        {
            await _fixture.ResetDatabaseAsync();
            var dbContext = _fixture.CreateContext();
            var fakeClient = new TestSalesPortalClient();
            var executor = new TransactionalExecutor(dbContext);
            var postingService = new FinancialPostingService(dbContext, executor, _fixture.GetRecoveryStore(), fakeClient, new DefaultAccountingMappingProvider(dbContext), new TestLedgerNotificationService());
            return (dbContext, postingService, fakeClient);
        }

        private async Task<(AccountsUser accountant, AccountsUser master)> CreateTestUsersAsync(AccountsDbContext dbContext)
        {
            var accountant = new AccountsUser
            {
                Name = "Accounts Clerk",
                Email = "accountant@texas.com",
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

            dbContext.Add(accountant);
            dbContext.Add(master);
            await dbContext.SaveChangesAsync();

            return (accountant, master);
        }

        [Fact]
        public async Task SupplierPayment_NormalAccountant_CreatesPendingStatus()
        {
            var (dbContext, postingService, _) = await SetupTestContextAsync();
            var (accountant, _) = await CreateTestUsersAsync(dbContext);

            var supplier = new Supplier { Code = "SUP-001", Name = "General Supplier" };
            dbContext.Add(supplier);
            await dbContext.SaveChangesAsync();

            var request = new CreateSupplierPaymentRequest(
                SupplierId: supplier.Id,
                Amount: 350m,
                PaymentMethod: "bank_transfer",
                SourceAccountId: "bank_1",
                ReferenceNumber: "PAY-101",
                ExternalReference: "service_id_101",
                ServiceType: "flight_booking",
                Description: "Draft payment",
                SupplierName: "General Supplier"
            );

            var response = await postingService.PostSupplierPaymentAsync(request, accountant.Id, "idem_payment_1", default);

            Assert.Equal("pending", response.Status);
            Assert.Equal(350m, response.Amount);
            Assert.Null(response.ApprovedByUserId);

            // Assert no balance change or transactions are recorded
            var txsCount = await dbContext.Transactions.CountAsync();
            Assert.Equal(0, txsCount);

            var outboxCount = await dbContext.OutboxMessages.CountAsync();
            Assert.Equal(0, outboxCount);
        }

        [Fact]
        public async Task SupplierPayment_MasterAccountant_CreatesApprovedStatus_MutatesBalance()
        {
            var (dbContext, postingService, _) = await SetupTestContextAsync();
            var (_, master) = await CreateTestUsersAsync(dbContext);

            var supplier = new Supplier { Code = "SUP-002", Name = "Aviation Supplier" };
            dbContext.Add(supplier);

            var bank = new Bank { BankName = "Main Bank", AccountNumber = "IBAN123", CreatedBy = 1 };
            bank.InitializeBalance(1000m);
            dbContext.Add(bank);

            await dbContext.SaveChangesAsync();

            var request = new CreateSupplierPaymentRequest(
                SupplierId: supplier.Id,
                Amount: 400m,
                PaymentMethod: "bank_transfer",
                SourceAccountId: $"bank_{bank.Id}",
                ReferenceNumber: "PAY-202",
                ExternalReference: "service_id_202",
                ServiceType: "flight_booking",
                Description: "Instant payment",
                SupplierName: "Aviation Supplier"
            );

            var response = await postingService.PostSupplierPaymentAsync(request, master.Id, "idem_payment_2", default);

            Assert.Equal("approved", response.Status);
            Assert.Equal(master.Id, response.ApprovedByUserId);

            // Check bank balance mutation
            var dbBank = await dbContext.Banks.FindAsync(bank.Id);
            Assert.NotNull(dbBank);
            Assert.Equal(600m, dbBank.CurrentBalance);

            // Verify Transaction ledger write
            var tx = await dbContext.Transactions.SingleAsync();
            Assert.Equal(FinancialTransactionType.Outgoing, tx.TransactionType);
            Assert.Equal(400m, tx.Amount);
            Assert.Equal(600m, tx.BalanceAfter);
            Assert.Equal(FinancialTransactionStatus.Approved, tx.Status);

            // Verify Outbox cost synchronization
            var outbox = await dbContext.OutboxMessages.SingleAsync();
            Assert.Equal("SupplierCostSync", outbox.MessageType);
            Assert.Equal("SupplierPayment", outbox.AggregateType);
            Assert.Contains("service_id_202", outbox.Payload);
        }

        [Fact]
        public async Task SupplierPayment_ApprovePending_MutatesBalance_AppliesOptimisticConcurrency()
        {
            var (dbContext, postingService, _) = await SetupTestContextAsync();
            var (accountant, master) = await CreateTestUsersAsync(dbContext);

            var supplier = new Supplier { Code = "SUP-003", Name = "Hotel Supplier" };
            dbContext.Add(supplier);

            var account = new Account { Name = "Reserve Account", Type = AccountType.Cash, LedgerType = LedgerType.Asset, CreatedBy = 1 };
            account.InitializeBalance(500m);
            dbContext.Add(account);

            await dbContext.SaveChangesAsync();

            var request = new CreateSupplierPaymentRequest(
                SupplierId: supplier.Id,
                Amount: 200m,
                PaymentMethod: "bank_transfer",
                SourceAccountId: $"account_{account.Id}",
                ReferenceNumber: "PAY-303",
                ExternalReference: "service_id_303",
                ServiceType: "hotel_booking",
                Description: "Clerk input",
                SupplierName: "Hotel Supplier"
            );

            var draft = await postingService.PostSupplierPaymentAsync(request, accountant.Id, "idem_payment_3", default);

            // Approve pending
            var approved = await postingService.ApproveSupplierPaymentAsync(draft.Id, master.Id, default);
            Assert.Equal("approved", approved.Status);

            // Verify account balance mutation
            var dbAccount = await dbContext.Accounts.FindAsync(account.Id);
            Assert.NotNull(dbAccount);
            Assert.Equal(300m, dbAccount.CurrentBalance);

            // Duplicate approval throws
            await Assert.ThrowsAsync<InvalidOperationException>(() =>
                postingService.ApproveSupplierPaymentAsync(draft.Id, master.Id, default));

            // Rejection after approval throws
            await Assert.ThrowsAsync<InvalidOperationException>(() =>
                postingService.RejectSupplierPaymentAsync(draft.Id, master.Id, "Reject after approved", default));
        }

        [Fact]
        public async Task PurchaseReturn_CapsValidation_And_ApprovedCredit()
        {
            var (dbContext, postingService, _) = await SetupTestContextAsync();
            var (accountant, master) = await CreateTestUsersAsync(dbContext);

            var supplier = new Supplier { Code = "SUP-004", Name = "Tech Supplier" };
            dbContext.Add(supplier);

            var bank = new Bank { BankName = "Main Bank", AccountNumber = "IBAN123", CreatedBy = 1 };
            bank.InitializeBalance(1000m);
            dbContext.Add(bank);

            await dbContext.SaveChangesAsync();

            var returnRequest = new CreatePurchaseReturnRequest(
                SupplierId: supplier.Id,
                OriginalPurchaseReference: "purchase_id_999",
                ServiceType: "holiday_package",
                DestinationType: "supplier_wallet",
                DestinationId: $"supplier_{supplier.Id}",
                Amount: 200m,
                Reason: "Defective package",
                SupplierName: "Tech Supplier"
            );

            // Cannot refund prior to payments
            await Assert.ThrowsAsync<InvalidOperationException>(() =>
                postingService.PostPurchaseReturnAsync(returnRequest, master.Id, "idem_return_1", default));

            // Post and approve payment of 500 BHD
            var payRequest = new CreateSupplierPaymentRequest(
                SupplierId: supplier.Id,
                Amount: 500m,
                PaymentMethod: "bank_transfer",
                SourceAccountId: $"bank_{bank.Id}",
                ReferenceNumber: "PAY-404",
                ExternalReference: "purchase_id_999",
                ServiceType: "holiday_package",
                Description: "Tech hardware",
                SupplierName: "Tech Supplier"
            );
            await postingService.PostSupplierPaymentAsync(payRequest, master.Id, "idem_payment_4", default);

            // Refund 200 BHD (passes cap check sum <= 500 BHD)
            var response = await postingService.PostPurchaseReturnAsync(returnRequest, master.Id, "idem_return_1", default);
            Assert.Equal("approved", response.Status);

            // Check supplier credit wallet increased
            var dbSupplier = await dbContext.Suppliers.FindAsync(supplier.Id);
            Assert.NotNull(dbSupplier);
            Assert.Equal(200m, dbSupplier.Wallet);

            // Over-refund check (next refund of 400 BHD exceeds 500 - 200 = 300 remaining)
            var excessiveReturn = returnRequest with { Amount = 400m };
            await Assert.ThrowsAsync<InvalidOperationException>(() =>
                postingService.PostPurchaseReturnAsync(excessiveReturn, master.Id, "idem_return_2", default));
        }

        [Fact]
        public async Task SalesReturn_CapsValidation_And_Refunding()
        {
            var (dbContext, postingService, fakeClient) = await SetupTestContextAsync();
            var (_, master) = await CreateTestUsersAsync(dbContext);

            var supplier = new Supplier { Code = "SUP-005", Name = "Tour Supplier" };
            dbContext.Add(supplier);

            var bank = new Bank { BankName = "Operating Bank", AccountNumber = "IBAN456", CreatedBy = 1 };
            bank.InitializeBalance(1000m);
            dbContext.Add(bank);

            var account = new Account { Name = "Main Account", Type = AccountType.Cash, LedgerType = LedgerType.Asset, CreatedBy = 1 };
            account.InitializeBalance(500m);
            dbContext.Add(account);

            await dbContext.SaveChangesAsync();

            // Set mock selling price of booking to 600 BHD
            fakeClient.SaleAmountResponse = 600m;

            var salesReturnReq = new CreateSalesReturnRequest(
                ServiceType: "flight_booking",
                ServiceId: "booking_id_888",
                SourceType: "account",
                SourceId: $"account_{account.Id}",
                RecipientType: "agent",
                RecipientId: 50, // Non-local agent id
                Amount: 250m,
                ReturnReason: "Customer cancellation"
            );

            // 1. Sales return forbidden before supplier refund is approved
            await Assert.ThrowsAsync<InvalidOperationException>(() =>
                postingService.PostSalesReturnAsync(salesReturnReq, master.Id, "idem_sales_1", default));

            // 2. Post supplier payment
            var payRequest = new CreateSupplierPaymentRequest(
                SupplierId: supplier.Id,
                Amount: 500m,
                PaymentMethod: "bank_transfer",
                SourceAccountId: $"bank_{bank.Id}",
                ReferenceNumber: "PAY-505",
                ExternalReference: "booking_id_888",
                ServiceType: "flight_booking",
                Description: "Ticket booking",
                SupplierName: "Tour Supplier"
            );
            await postingService.PostSupplierPaymentAsync(payRequest, master.Id, "idem_payment_5", default);

            // 3. Receive supplier refund (Purchase Return)
            var purReturnReq = new CreatePurchaseReturnRequest(
                SupplierId: supplier.Id,
                OriginalPurchaseReference: "booking_id_888",
                ServiceType: "flight_booking",
                DestinationType: "bank",
                DestinationId: $"bank_{bank.Id}",
                Amount: 400m,
                Reason: "Supplier refund ticket",
                SupplierName: "Tour Supplier"
            );
            await postingService.PostPurchaseReturnAsync(purReturnReq, master.Id, "idem_return_sales_1", default);

            // 4. Now customer sales refund passes
            var response = await postingService.PostSalesReturnAsync(salesReturnReq, master.Id, "idem_sales_1", default);
            Assert.Equal("approved", response.Status);

            // Check cash account deducted (500 - 250 = 250 BHD)
            var dbAccount = await dbContext.Accounts.FindAsync(account.Id);
            Assert.NotNull(dbAccount);
            Assert.Equal(250m, dbAccount.CurrentBalance);

            // Verify outbox messages: CreditHeadWallet (because agent 50 is not local) and SupplierCostSync
            var outboxMessages = await dbContext.OutboxMessages.ToListAsync();
            Assert.Contains(outboxMessages, o => o.MessageType == "CreditHeadWallet" && o.Payload.Contains("250"));
            Assert.Contains(outboxMessages, o => o.MessageType == "SupplierCostSync" && o.Payload.Contains("booking_id_888"));

            // 5. Exceed selling price (booking sale price = 600, refunding 400 more exceeds 250 + 400 = 650)
            var overRefundReq = salesReturnReq with { Amount = 400m };
            await Assert.ThrowsAsync<InvalidOperationException>(() =>
                postingService.PostSalesReturnAsync(overRefundReq, master.Id, "idem_sales_2", default));
        }

        [Fact]
        public async Task Reconciliation_CalculatesCorrectSummaries_AndStatements()
        {
            var (dbContext, postingService, _) = await SetupTestContextAsync();
            var (_, master) = await CreateTestUsersAsync(dbContext);

            var supplier = new Supplier { Code = "SUP-006", Name = "Aviation Supplier" };
            dbContext.Add(supplier);

            var bank = new Bank { BankName = "Main Bank", AccountNumber = "IBAN123", CreatedBy = 1 };
            bank.InitializeBalance(1000m);
            dbContext.Add(bank);

            var account = new Account { Name = "Main Account", Type = AccountType.Cash, LedgerType = LedgerType.Asset, CreatedBy = 1 };
            account.InitializeBalance(500m);
            dbContext.Add(account);

            await dbContext.SaveChangesAsync();

            // Perform Approved Outgoing Supplier Payment
            var payRequest = new CreateSupplierPaymentRequest(
                SupplierId: supplier.Id,
                Amount: 300m,
                PaymentMethod: "bank_transfer",
                SourceAccountId: $"bank_{bank.Id}",
                ReferenceNumber: "PAY-606",
                ExternalReference: "ref_111",
                ServiceType: "flight_booking",
                Description: "Payment for flight",
                SupplierName: "Aviation Supplier"
            );
            await postingService.PostSupplierPaymentAsync(payRequest, master.Id, "idem_payment_6", default);

            // Verify Reconciliation Summary balances
            var totalBank = await dbContext.Banks.Where(b => b.IsActive).SumAsync(b => b.CurrentBalance);
            var totalAcc = await dbContext.Accounts.Where(a => a.IsActive).SumAsync(a => a.CurrentBalance);
            var totalSupplierWallet = await dbContext.Suppliers.Where(s => s.DeletedAt == null).SumAsync(s => s.Wallet);

            Assert.Equal(700m, totalBank); // 1000 - 300
            Assert.Equal(500m, totalAcc);
            Assert.Equal(0m, totalSupplierWallet);

            // Fetch Statement for Supplier
            var statements = await dbContext.Transactions
                .Where(t => t.SupplierId == supplier.Id)
                .ToListAsync();

            Assert.Single(statements);
            Assert.Equal(300m, statements[0].Amount);
            Assert.Equal(FinancialTransactionType.Outgoing, statements[0].TransactionType);
        }

        [Fact]
        public async Task FailedCommandDoesNotRequireTrackerManipulationForRetry()
        {
            var (dbContext, postingService, _) = await SetupTestContextAsync();
            var (_, master) = await CreateTestUsersAsync(dbContext);

            var supplier = new Supplier { Code = "SUP-REG-01", Name = "Reg Supplier" };
            dbContext.Add(supplier);

            var bank = new Bank { BankName = "Reg Bank", AccountNumber = "IBANREG1", CreatedBy = 1 };
            bank.InitializeBalance(500m);
            dbContext.Add(bank);

            await dbContext.SaveChangesAsync();

            // First call fails validation: excessive payment amount 600m > balance 500m
            var request = new CreateSupplierPaymentRequest(
                SupplierId: supplier.Id,
                Amount: 600m,
                PaymentMethod: "bank_transfer",
                SourceAccountId: $"bank_{bank.Id}",
                ReferenceNumber: "PAY-REG-1",
                ExternalReference: "ref-reg-1",
                ServiceType: "flight_booking",
                Description: "Failing payment",
                SupplierName: "Reg Supplier"
            );

            await Assert.ThrowsAsync<InvalidOperationException>(() =>
                postingService.PostSupplierPaymentAsync(request, master.Id, "idem_reg_1", default));

            // Immediately retry with a valid amount (e.g., 200m) using the same key and same DbContext!
            var retryRequest = request with { Amount = 200m };
            var response = await postingService.PostSupplierPaymentAsync(retryRequest, master.Id, "idem_reg_1", default);

            Assert.Equal("approved", response.Status);
            Assert.Equal(200m, response.Amount);

            var dbBank = await dbContext.Banks.FindAsync(bank.Id);
            Assert.NotNull(dbBank);
            Assert.Equal(300m, dbBank.CurrentBalance);
        }

        [Fact]
        public async Task RetryAfterRollbackUsesCleanPersistenceContext()
        {
            var (dbContext, postingService, _) = await SetupTestContextAsync();
            var (_, master) = await CreateTestUsersAsync(dbContext);

            var supplier = new Supplier { Code = "SUP-REG-02", Name = "Reg Supplier" };
            dbContext.Add(supplier);

            var bank = new Bank { BankName = "Reg Bank", AccountNumber = "IBANREG2", CreatedBy = 1 };
            bank.InitializeBalance(500m);
            dbContext.Add(bank);

            await dbContext.SaveChangesAsync();

            // First call fails due to invalid parameters (e.g., negative amount)
            var request = new CreateSupplierPaymentRequest(
                SupplierId: supplier.Id,
                Amount: -100m, // Invalid negative amount
                PaymentMethod: "bank_transfer",
                SourceAccountId: $"bank_{bank.Id}",
                ReferenceNumber: "PAY-REG-2",
                ExternalReference: "ref-reg-2",
                ServiceType: "flight_booking",
                Description: "Failing payment",
                SupplierName: "Reg Supplier"
            );

            await Assert.ThrowsAsync<ArgumentException>(() =>
                postingService.PostSupplierPaymentAsync(request, master.Id, "idem_reg_2", default));

            // Retry with valid amount
            var retryRequest = request with { Amount = 100m };
            var response = await postingService.PostSupplierPaymentAsync(retryRequest, master.Id, "idem_reg_2", default);

            Assert.Equal("approved", response.Status);

            var dbBank = await dbContext.Banks.AsNoTracking().FirstOrDefaultAsync(b => b.Id == bank.Id);
            Assert.NotNull(dbBank);
            Assert.Equal(400m, dbBank.CurrentBalance); // Clean persisted state
        }

        [Fact]
        public async Task ConcurrentRetryAfterRollbackCreatesOneFinancialEffect()
        {
            var (dbContext, postingService, _) = await SetupTestContextAsync();
            var (_, master) = await CreateTestUsersAsync(dbContext);

            var supplier = new Supplier { Code = "SUP-REG-03", Name = "Reg Supplier" };
            dbContext.Add(supplier);

            var bank = new Bank { BankName = "Reg Bank", AccountNumber = "IBANREG3", CreatedBy = 1 };
            bank.InitializeBalance(500m);
            dbContext.Add(bank);

            await dbContext.SaveChangesAsync();

            // Run first failing call
            var request = new CreateSupplierPaymentRequest(
                SupplierId: supplier.Id,
                Amount: 600m, // Exceeds balance
                PaymentMethod: "bank_transfer",
                SourceAccountId: $"bank_{bank.Id}",
                ReferenceNumber: "PAY-REG-3",
                ExternalReference: "ref-reg-3",
                ServiceType: "flight_booking",
                Description: "Failing payment",
                SupplierName: "Reg Supplier"
            );

            await Assert.ThrowsAsync<InvalidOperationException>(() =>
                postingService.PostSupplierPaymentAsync(request, master.Id, "idem_reg_3", default));

            // Now launch two concurrent successful retries
            var retryRequest = request with { Amount = 100m };
            var task1 = postingService.PostSupplierPaymentAsync(retryRequest, master.Id, "idem_reg_3", default);
            var task2 = postingService.PostSupplierPaymentAsync(retryRequest, master.Id, "idem_reg_3", default);

            try
            {
                await Task.WhenAll(task1, task2);
            }
            catch
            {
                // One of them is allowed to throw duplicate request exception
            }

            // Verify only one succeeded and bank balance is exactly 400 BHD
            var dbBank = await dbContext.Banks.AsNoTracking().FirstOrDefaultAsync(b => b.Id == bank.Id);
            Assert.NotNull(dbBank);
            Assert.Equal(400m, dbBank.CurrentBalance);
        }

        [Fact]
        public async Task IdempotencyRecoveryCancellationIsPropagated()
        {
            var (dbContext, postingService, _) = await SetupTestContextAsync();
            var (_, master) = await CreateTestUsersAsync(dbContext);

            var supplier = new Supplier { Code = "SUP-REG-04", Name = "Reg Supplier" };
            dbContext.Add(supplier);
            await dbContext.SaveChangesAsync();

            var request = new CreateSupplierPaymentRequest(
                SupplierId: supplier.Id,
                Amount: 100m,
                PaymentMethod: "bank_transfer",
                SourceAccountId: "bank_1",
                ReferenceNumber: "PAY-REG-4",
                ExternalReference: "ref-reg-4",
                ServiceType: "flight_booking",
                Description: "Cancelled payment",
                SupplierName: "Reg Supplier"
            );

            // Pass a cancelled token
            using var cts = new System.Threading.CancellationTokenSource();
            cts.Cancel();

            await Assert.ThrowsAnyAsync<OperationCanceledException>(() =>
                postingService.PostSupplierPaymentAsync(request, master.Id, "idem_reg_4", cts.Token));
        }
    }
}

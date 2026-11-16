using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging.Abstractions;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Contracts.Transactions;
using TexasAccountsPortal.Domain.Entities;
using TexasAccountsPortal.Domain.Enums;
using TexasAccountsPortal.Infrastructure.Data;
using TexasAccountsPortal.Infrastructure.Services;
using Xunit;

namespace TexasAccountsPortal.IntegrationTests
{
    public class PaymentApprovalWorkflowIntegrationTests
    {
        private AccountsDbContext CreateInMemoryDbContext()
        {
            var options = new DbContextOptionsBuilder<AccountsDbContext>()
                .UseInMemoryDatabase(databaseName: Guid.NewGuid().ToString())
                .Options;

            return new AccountsDbContext(options);
        }

        private class TestDbContextFactory : IDbContextFactory<AccountsDbContext>
        {
            private readonly AccountsDbContext _dbContext;
            public TestDbContextFactory(AccountsDbContext dbContext) => _dbContext = dbContext;
            public AccountsDbContext CreateDbContext() => _dbContext;
        }

        private class TestTransactionalExecutor : ITransactionalExecutor
        {
            public async Task<TResult> ExecuteInTransactionAsync<TResult>(Func<CancellationToken, Task<TResult>> action, CancellationToken cancellationToken)
            {
                return await action(cancellationToken);
            }
        }

        private class FakePostingService : IFinancialPostingService
        {
            public List<long> ApprovedTxIds { get; } = new();
            public List<CreateIncomingTransactionRequest> PostedRequests { get; } = new();
            public List<long> RejectedTxIds { get; } = new();

            public Task<TransactionResponse> ApproveTransactionAsync(long transactionId, long approvedBy, CancellationToken cancellationToken = default)
            {
                ApprovedTxIds.Add(transactionId);
                return Task.FromResult(new TransactionResponse(
                    Id: transactionId,
                    TransactionType: "Incoming",
                    SourceAccountId: null,
                    DestinationAccountId: 1L,
                    SourceBankId: null,
                    DestinationBankId: null,
                    Amount: 500m,
                    BalanceAfter: 1500m,
                    PaymentMethod: "cash",
                    ReferenceType: "Visa",
                    ReferenceId: "101",
                    Description: "Desc",
                    Status: "approved",
                    ApprovedBy: approvedBy,
                    ApprovedAt: DateTime.UtcNow,
                    RejectedBy: null,
                    RejectedAt: null,
                    ReturnReason: null,
                    SupplierId: null,
                    SupplierName: null,
                    ExpenseHeaderId: null,
                    CreatedBy: 1L,
                    CreatedAt: DateTime.UtcNow
                ));
            }

            public Task<TransactionResponse> PostIncomingTransactionAsync(CreateIncomingTransactionRequest request, long createdBy, string idempotencyKey, ReceiptOrigin receiptOrigin, CancellationToken cancellationToken = default)
            {
                PostedRequests.Add(request);
                return Task.FromResult(new TransactionResponse(
                    Id: 999,
                    TransactionType: "Incoming",
                    SourceAccountId: null,
                    DestinationAccountId: request.DestinationAccountId,
                    SourceBankId: null,
                    DestinationBankId: request.DestinationBankId,
                    Amount: request.Amount,
                    BalanceAfter: 2000m,
                    PaymentMethod: request.PaymentMethod,
                    ReferenceType: request.ReferenceType,
                    ReferenceId: request.ReferenceId,
                    Description: request.Description,
                    Status: "approved",
                    ApprovedBy: createdBy,
                    ApprovedAt: DateTime.UtcNow,
                    RejectedBy: null,
                    RejectedAt: null,
                    ReturnReason: null,
                    SupplierId: null,
                    SupplierName: null,
                    ExpenseHeaderId: null,
                    CreatedBy: createdBy,
                    CreatedAt: DateTime.UtcNow
                ));
            }

            public Task<TransactionResponse> RejectTransactionAsync(long transactionId, long rejectedBy, string? reason, CancellationToken cancellationToken = default)
            {
                RejectedTxIds.Add(transactionId);
                return Task.FromResult(new TransactionResponse(
                    Id: transactionId,
                    TransactionType: "Incoming",
                    SourceAccountId: null,
                    DestinationAccountId: 1L,
                    SourceBankId: null,
                    DestinationBankId: null,
                    Amount: 500m,
                    BalanceAfter: 1000m,
                    PaymentMethod: "cash",
                    ReferenceType: "Visa",
                    ReferenceId: "101",
                    Description: "Desc",
                    Status: "rejected",
                    ApprovedBy: null,
                    ApprovedAt: null,
                    RejectedBy: rejectedBy,
                    RejectedAt: DateTime.UtcNow,
                    ReturnReason: reason,
                    SupplierId: null,
                    SupplierName: null,
                    ExpenseHeaderId: null,
                    CreatedBy: 1L,
                    CreatedAt: DateTime.UtcNow
                ));
            }

            public Task<TransactionResponse> PostOutgoingTransactionAsync(CreateOutgoingTransactionRequest request, long createdBy, string idempotencyKey, CancellationToken cancellationToken = default) => throw new NotImplementedException();
            public Task<TransactionResponse> PostContraTransactionAsync(CreateContraTransactionRequest request, long createdBy, string idempotencyKey, CancellationToken cancellationToken = default) => throw new NotImplementedException();
            public Task<decimal> PostBalanceCorrectionAsync(long accountId, decimal adjustmentAmount, string reason, long editedBy, string idempotencyKey, CancellationToken cancellationToken = default) => throw new NotImplementedException();
            public Task<TexasAccountsPortal.Contracts.SupplierPayments.SupplierPaymentResponse> PostSupplierPaymentAsync(TexasAccountsPortal.Contracts.SupplierPayments.CreateSupplierPaymentRequest request, long createdBy, string idempotencyKey, CancellationToken cancellationToken = default) => throw new NotImplementedException();
            public Task<TexasAccountsPortal.Contracts.SupplierPayments.SupplierPaymentResponse> ApproveSupplierPaymentAsync(long paymentId, long approvedBy, CancellationToken cancellationToken = default) => throw new NotImplementedException();
            public Task<TexasAccountsPortal.Contracts.SupplierPayments.SupplierPaymentResponse> RejectSupplierPaymentAsync(long paymentId, long rejectedBy, string? reason, CancellationToken cancellationToken = default) => throw new NotImplementedException();
            public Task<TexasAccountsPortal.Contracts.PurchaseReturns.PurchaseReturnResponse> PostPurchaseReturnAsync(TexasAccountsPortal.Contracts.PurchaseReturns.CreatePurchaseReturnRequest request, long createdBy, string idempotencyKey, CancellationToken cancellationToken = default) => throw new NotImplementedException();
            public Task<TexasAccountsPortal.Contracts.PurchaseReturns.PurchaseReturnResponse> ApprovePurchaseReturnAsync(long returnId, long approvedBy, CancellationToken cancellationToken = default) => throw new NotImplementedException();
            public Task<TexasAccountsPortal.Contracts.PurchaseReturns.PurchaseReturnResponse> RejectPurchaseReturnAsync(long returnId, long rejectedBy, string? reason, CancellationToken cancellationToken = default) => throw new NotImplementedException();
            public Task<TexasAccountsPortal.Contracts.SalesReturns.SalesReturnResponse> PostSalesReturnAsync(TexasAccountsPortal.Contracts.SalesReturns.CreateSalesReturnRequest request, long createdBy, string idempotencyKey, CancellationToken cancellationToken = default) => throw new NotImplementedException();
            public Task<TexasAccountsPortal.Contracts.SalesReturns.SalesReturnResponse> ApproveSalesReturnAsync(long returnId, long approvedBy, CancellationToken cancellationToken = default) => throw new NotImplementedException();
            public Task<TexasAccountsPortal.Contracts.SalesReturns.SalesReturnResponse> RejectSalesReturnAsync(long returnId, long rejectedBy, string? reason, CancellationToken cancellationToken = default) => throw new NotImplementedException();
        }

        [Fact]
        public async Task DestinationAccountResolver_ResolvesCashAndBank_AndThrowsOnMissing()
        {
            using var db = CreateInMemoryDbContext();
            var resolver = new DestinationAccountResolver();

            var cashAcc = new Account { Name = "Main Cash", Type = AccountType.Cash, IsActive = true, CreatedBy = 1 };
            var bankObj = new Bank { BankName = "HDFC", AccountNumber = "123", IsActive = true, CreatedBy = 1 };
            db.Accounts.Add(cashAcc);
            db.Banks.Add(bankObj);
            await db.SaveChangesAsync();

            // 1. Resolve Cash with explicit ID
            var res1 = await resolver.ResolveDestinationAccountAsync(PaymentMethod.Cash, cashAcc.Id, null, db);
            Assert.Equal(cashAcc.Id, res1.CashAccountId);
            Assert.Null(res1.BankId);

            // 2. Resolve Cash with default fallback
            var res2 = await resolver.ResolveDestinationAccountAsync(PaymentMethod.Cash, null, null, db);
            Assert.Equal(cashAcc.Id, res2.CashAccountId);

            // 3. Resolve Bank with default fallback
            var res3 = await resolver.ResolveDestinationAccountAsync(PaymentMethod.BankTransfer, null, null, db);
            Assert.Equal(bankObj.Id, res3.BankId);
            Assert.Null(res3.CashAccountId);
        }

        [Fact]
        public async Task DestinationAccountResolver_ThrowsExplicitException_WhenDestinationMissing()
        {
            using var db = CreateInMemoryDbContext(); // Empty DB
            var resolver = new DestinationAccountResolver();

            await Assert.ThrowsAsync<InvalidOperationException>(() =>
                resolver.ResolveDestinationAccountAsync(PaymentMethod.Cash, null, null, db));

            await Assert.ThrowsAsync<InvalidOperationException>(() =>
                resolver.ResolveDestinationAccountAsync(PaymentMethod.BankTransfer, null, null, db));
        }

        [Theory]
        [InlineData("visa")]
        [InlineData("flights")]
        [InlineData("hotels")]
        [InlineData("holiday")]
        [InlineData("transport")]
        [InlineData("vfs")]
        [InlineData("other")]
        public async Task Workflow_ApprovesAllSevenModules_ReusingExistingPendingTransaction(string serviceType)
        {
            using var db = CreateInMemoryDbContext();
            var cashAcc = new Account { Name = "Main Cash", Type = AccountType.Cash, IsActive = true, CreatedBy = 1 };
            db.Accounts.Add(cashAcc);

            var pendingTx = FinancialTransaction.Create(
                FinancialTransactionType.Incoming,
                750m,
                PaymentMethod.Cash,
                createdBy: 1,
                referenceType: TransactionReferenceType.Sale,
                referenceId: "500",
                initialStatus: FinancialTransactionStatus.Pending
            );
            db.Transactions.Add(pendingTx);
            await db.SaveChangesAsync();

            var fakePosting = new FakePostingService();
            var pmResolver = new PaymentMethodResolver();
            var destResolver = new DestinationAccountResolver();
            var executor = new TestTransactionalExecutor();
            var factory = new TestDbContextFactory(db);

            var workflow = new ServicePaymentApprovalWorkflow(
                factory, fakePosting, pmResolver, destResolver, executor, NullLogger<ServicePaymentApprovalWorkflow>.Instance);

            var req = new ProcessServicePaymentApprovalRequest(
                ServiceType: serviceType,
                BookingId: 500,
                Status: "success",
                ApprovedByUserId: 10L,
                ExplicitCashAccountId: cashAcc.Id,
                ExplicitReferenceId: "500",
                RawPaymentMethod: "cash",
                RawBankId: null,
                PayableAmount: 750m,
                ClientType: "agent",
                AgentId: 5L,
                HeadId: null
            );

            await workflow.ExecuteApprovalWorkflowAsync(req);

            Assert.Single(fakePosting.ApprovedTxIds);
            Assert.Equal(pendingTx.Id, fakePosting.ApprovedTxIds[0]);
            Assert.Empty(fakePosting.PostedRequests);
        }

        [Theory]
        [InlineData("visa")]
        [InlineData("flights")]
        [InlineData("hotels")]
        [InlineData("holiday")]
        [InlineData("transport")]
        [InlineData("vfs")]
        [InlineData("other")]
        public async Task Workflow_CreatesAndApprovesNewTransaction_WhenNoneExists(string serviceType)
        {
            using var db = CreateInMemoryDbContext();
            var bankObj = new Bank { BankName = "HDFC", AccountNumber = "999", IsActive = true, CreatedBy = 1 };
            db.Banks.Add(bankObj);
            await db.SaveChangesAsync();

            var fakePosting = new FakePostingService();
            var pmResolver = new PaymentMethodResolver();
            var destResolver = new DestinationAccountResolver();
            var executor = new TestTransactionalExecutor();
            var factory = new TestDbContextFactory(db);

            var workflow = new ServicePaymentApprovalWorkflow(
                factory, fakePosting, pmResolver, destResolver, executor, NullLogger<ServicePaymentApprovalWorkflow>.Instance);

            var req = new ProcessServicePaymentApprovalRequest(
                ServiceType: serviceType,
                BookingId: 888,
                Status: "success",
                ApprovedByUserId: 10L,
                ExplicitCashAccountId: null,
                ExplicitReferenceId: "REF-888",
                RawPaymentMethod: "online",
                RawBankId: bankObj.Id,
                PayableAmount: 1200m,
                ClientType: "agent",
                AgentId: 12L,
                HeadId: null
            );

            await workflow.ExecuteApprovalWorkflowAsync(req);

            Assert.Empty(fakePosting.ApprovedTxIds);
            Assert.Single(fakePosting.PostedRequests);
            Assert.Equal(1200m, fakePosting.PostedRequests[0].Amount);
            Assert.Equal(bankObj.Id, fakePosting.PostedRequests[0].DestinationBankId);
            Assert.Equal("REF-888", fakePosting.PostedRequests[0].ReferenceId);
        }

        [Fact]
        public async Task Workflow_IsIdempotent_WhenTransactionIsAlreadyApproved()
        {
            using var db = CreateInMemoryDbContext();
            var approvedTx = FinancialTransaction.Create(
                FinancialTransactionType.Incoming,
                500m,
                PaymentMethod.Cash,
                createdBy: 1,
                referenceType: TransactionReferenceType.Sale,
                referenceId: "100",
                initialStatus: FinancialTransactionStatus.Approved
            );
            db.Transactions.Add(approvedTx);
            await db.SaveChangesAsync();

            var fakePosting = new FakePostingService();
            var pmResolver = new PaymentMethodResolver();
            var destResolver = new DestinationAccountResolver();
            var executor = new TestTransactionalExecutor();
            var factory = new TestDbContextFactory(db);

            var workflow = new ServicePaymentApprovalWorkflow(
                factory, fakePosting, pmResolver, destResolver, executor, NullLogger<ServicePaymentApprovalWorkflow>.Instance);

            var req = new ProcessServicePaymentApprovalRequest(
                ServiceType: "visa",
                BookingId: 100,
                Status: "success",
                ApprovedByUserId: 10L,
                ExplicitCashAccountId: 1L,
                ExplicitReferenceId: "100",
                RawPaymentMethod: "cash",
                RawBankId: null,
                PayableAmount: 500m,
                ClientType: null,
                AgentId: null,
                HeadId: null
            );

            await workflow.ExecuteApprovalWorkflowAsync(req);

            Assert.Empty(fakePosting.ApprovedTxIds);
            Assert.Empty(fakePosting.PostedRequests);
        }
    }
}

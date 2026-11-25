using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Contracts.Expenses;
using TexasAccountsPortal.Domain.Entities;
using TexasAccountsPortal.Domain.Enums;
using TexasAccountsPortal.Domain.Services;
using TexasAccountsPortal.Infrastructure.Data;
using TexasAccountsPortal.Infrastructure.Services;
using Xunit;

namespace TexasAccountsPortal.UnitTests
{
    public class ExpenseNumberCollisionTests
    {
        private static AccountsDbContext CreateInMemoryContext()
        {
            var options = new DbContextOptionsBuilder<AccountsDbContext>()
                .UseInMemoryDatabase($"ExpenseCollisionTests_{Guid.NewGuid():N}")
                .Options;

            return new AccountsDbContext(options);
        }

        private static async Task<long> SeedExpenseHeaderAsync(AccountsDbContext db)
        {
            var header = new ExpenseHeader
            {
                Name = "Office Supplies",
                Category = "Expenses",
                Description = "Test category",
                CreatedBy = 1L,
                CreatedAt = DateTime.UtcNow
            };
            db.ExpenseHeaders.Add(header);
            await db.SaveChangesAsync();
            return header.Id;
        }

        private static ExpenseService CreateService(AccountsDbContext db, IDocumentNumberGenerator generator)
            => new(
                db,
                new NoOpBalanceService(),
                new NoOpExpenseApprovalService(),
                new NoOpPostingRuleResolver(),
                generator);

        [Fact]
        public async Task CreateExpenseAsync_SkipsCollidingSequenceNumbers_AndUsesNextAvailableNumber()
        {
            await using var db = CreateInMemoryContext();
            var categoryId = await SeedExpenseHeaderAsync(db);

            db.Expenses.Add(Expense.Create(
                "TXSEXP000046", categoryId, 10m, "Existing 46", PaymentMethod.Cash,
                DateTime.UtcNow, "corr-46", 1L, "BHD", sourceAccountId: 1L));
            db.Expenses.Add(Expense.Create(
                "TXSEXP000047", categoryId, 10m, "Existing 47", PaymentMethod.Cash,
                DateTime.UtcNow, "corr-47", 1L, "BHD", sourceAccountId: 1L));
            await db.SaveChangesAsync();

            var generator = new SequenceFakeDocumentNumberGenerator(
                "TXSEXP000046",
                "TXSEXP000047",
                "TXSEXP000073");
            var service = CreateService(db, generator);

            var response = await service.CreateExpenseAsync(
                new CreateExpenseRequest(
                    ExpenseCategoryId: categoryId,
                    Amount: 25m,
                    Description: "New Expense",
                    PaymentMethod: "cash",
                    SourceAccountId: 1L,
                    SourceBankId: null,
                    Notes: null,
                    ExpenseDate: DateTime.UtcNow),
                actorUserId: 1L,
                correlationId: "corr-new",
                cancellationToken: CancellationToken.None);

            Assert.Equal("TXSEXP000073", response.ExpenseNumber);
        }

        [Fact]
        public async Task CreateExpenseAsync_FallsBackToHighEntropyNumber_WhenAllSequenceAttemptsCollide()
        {
            await using var db = CreateInMemoryContext();
            var categoryId = await SeedExpenseHeaderAsync(db);

            db.Expenses.Add(Expense.Create(
                "TXSEXP000046", categoryId, 10m, "Existing 46", PaymentMethod.Cash,
                DateTime.UtcNow, "corr-46", 1L, "BHD", sourceAccountId: 1L));
            await db.SaveChangesAsync();

            var generator = new SequenceFakeDocumentNumberGenerator("TXSEXP000046");
            var service = CreateService(db, generator);

            var response = await service.CreateExpenseAsync(
                new CreateExpenseRequest(
                    ExpenseCategoryId: categoryId,
                    Amount: 25m,
                    Description: "Fallback Expense",
                    PaymentMethod: "cash",
                    SourceAccountId: 1L,
                    SourceBankId: null,
                    Notes: null,
                    ExpenseDate: DateTime.UtcNow),
                actorUserId: 1L,
                correlationId: "corr-fallback",
                cancellationToken: CancellationToken.None);

            Assert.NotEqual("TXSEXP000046", response.ExpenseNumber);
            Assert.StartsWith("TXSEXP", response.ExpenseNumber);
            Assert.True(response.ExpenseNumber.Length <= 30);
        }

        private sealed class SequenceFakeDocumentNumberGenerator : IDocumentNumberGenerator
        {
            private readonly Queue<string> _values;
            private readonly string _lastValue;

            public SequenceFakeDocumentNumberGenerator(params string[] values)
            {
                _values = new Queue<string>(values);
                _lastValue = values[^1];
            }

            public Task<string> GenerateDocumentNumberAsync(string prefix, string sequenceName, CancellationToken ct = default)
                => Task.FromResult(_values.Count > 0 ? _values.Dequeue() : _lastValue);
        }

        private sealed class NoOpBalanceService : IAccountBalanceService
        {
            public Task ValidateSufficientBalanceAsync(PaymentMethod method, long? sourceAccountId, long? sourceBankId, decimal amount, CancellationToken cancellationToken)
                => Task.CompletedTask;

            public Task DebitAsync(PaymentMethod method, long? sourceAccountId, long? sourceBankId, decimal amount, CancellationToken cancellationToken)
                => Task.CompletedTask;

            public Task CreditAsync(PaymentMethod method, long? sourceAccountId, long? sourceBankId, decimal amount, CancellationToken cancellationToken)
                => Task.CompletedTask;
        }

        private sealed class NoOpExpenseApprovalService : IExpenseApprovalService
        {
            public Task<ExpenseResponse> ApproveExpenseAsync(long id, long actorUserId, string idempotencyKey, string? rowVersion, CancellationToken cancellationToken)
                => throw new NotSupportedException();

            public Task<ExpenseResponse> RejectExpenseAsync(long id, long actorUserId, RejectExpenseRequest request, CancellationToken cancellationToken)
                => throw new NotSupportedException();
        }

        private sealed class NoOpPostingRuleResolver : IPostingRuleResolver
        {
            public PostingInstruction ResolveInstruction(string categoryBucket, string? supplierPaymentType = null)
                => new(FinancialDirection.Outgoing, false, "Expenses", "Expense");
        }
    }
}

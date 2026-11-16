using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging.Abstractions;
using Microsoft.Extensions.Options;
using TexasAccountsPortal.Contracts.SalesEntries;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Domain.Entities;
using TexasAccountsPortal.Domain.Enums;
using TexasAccountsPortal.Infrastructure.BackgroundServices;
using TexasAccountsPortal.Infrastructure.Data;
using TexasAccountsPortal.Infrastructure.Options;
using Xunit;

namespace TexasAccountsPortal.IntegrationTests
{
    public class OutboxProcessorIntegrationTests : IClassFixture<SqlServerTestFixture>
    {
        private readonly SqlServerTestFixture _fixture;

        public OutboxProcessorIntegrationTests(SqlServerTestFixture fixture)
        {
            _fixture = fixture;
        }

        private class FakeSalesPortalClient : TexasAccountsPortal.IntegrationTests.Fakes.TestSalesPortalClient
        {
        }

        private async Task InvokeProcessOutboxMessagesAsync(OutboxProcessor processor, CancellationToken ct)
        {
            var method = typeof(OutboxProcessor).GetMethod("ProcessOutboxMessagesAsync", System.Reflection.BindingFlags.NonPublic | System.Reflection.BindingFlags.Instance);
            Assert.NotNull(method);
            var task = (Task)method.Invoke(processor, new object[] { ct })!;
            await task;
        }

        private IServiceProvider CreateTestServiceProvider(FakeSalesPortalClient fakeClient, OutboxOptions options)
        {
            var services = new ServiceCollection();
            services.AddDbContext<AccountsDbContext>(opt => opt.UseSqlServer(_fixture.ConnectionString));
            services.AddScoped<IAccountsDbContext>(p => p.GetRequiredService<AccountsDbContext>());
            services.AddSingleton<ISalesPortalClient>(fakeClient);
            services.AddSingleton<IOptions<OutboxOptions>>(Options.Create(options));
            services.AddSingleton<ILogger<OutboxProcessor>>(NullLogger<OutboxProcessor>.Instance);
            return services.BuildServiceProvider();
        }

        [Fact]
        public async Task TwoProcessorsCannotClaimSameMessage()
        {
            using var dbContext = _fixture.CreateContext();
            await _fixture.ResetDatabaseAsync();

            var msg = new OutboxMessage
            {
                Id = Guid.NewGuid(),
                MessageType = "SupplierCostSync",
                AggregateType = "Tx",
                AggregateId = "1",
                Payload = "{\"ReferenceType\":\"Expense\",\"ReferenceId\":\"ref_1\"}",
                Status = "pending",
                AvailableAt = DateTime.UtcNow.AddMinutes(-5),
                CorrelationId = "corr_1"
            };
            dbContext.Add(msg);
            await dbContext.SaveChangesAsync();

            using var dbContext1 = _fixture.CreateContext();
            using var dbContext2 = _fixture.CreateContext();

            var claim1Task = dbContext1.ClaimOutboxMessagesAsync(1, default);
            var claim2Task = dbContext2.ClaimOutboxMessagesAsync(1, default);

            var claimed1 = await claim1Task;
            var claimed2 = await claim2Task;

            // Only one processor should have successfully claimed the message
            int totalClaimed = claimed1.Count + claimed2.Count;
            Assert.Equal(1, totalClaimed);
        }

        [Fact]
        public async Task ThreeProcessorsDoNotDoubleClaimMessages()
        {
            using var dbContext = _fixture.CreateContext();
            await _fixture.ResetDatabaseAsync();

            // Seed 3 messages
            for (int i = 0; i < 3; i++)
            {
                dbContext.Add(new OutboxMessage
                {
                    Id = Guid.NewGuid(),
                    MessageType = "SupplierCostSync",
                    AggregateType = "Tx",
                    AggregateId = i.ToString(),
                    Payload = "{\"ReferenceType\":\"Expense\",\"ReferenceId\":\"ref_" + i + "\"}",
                    Status = "pending",
                    AvailableAt = DateTime.UtcNow.AddMinutes(-5),
                    CorrelationId = "corr_" + i
                });
            }
            await dbContext.SaveChangesAsync();

            using var dbContext1 = _fixture.CreateContext();
            using var dbContext2 = _fixture.CreateContext();
            using var dbContext3 = _fixture.CreateContext();

            var c1 = dbContext1.ClaimOutboxMessagesAsync(1, default);
            var c2 = dbContext2.ClaimOutboxMessagesAsync(1, default);
            var c3 = dbContext3.ClaimOutboxMessagesAsync(1, default);

            var list1 = await c1;
            var list2 = await c2;
            var list3 = await c3;

            var allClaimedIds = list1.Concat(list2).Concat(list3).Select(m => m.Id).ToList();

            // Total claimed must equal 3, and all IDs must be unique (no double claiming)
            Assert.Equal(3, allClaimedIds.Count);
            Assert.Equal(3, allClaimedIds.Distinct().Count());
        }

        [Fact]
        public async Task ProcessorClaimsBoundedBatch()
        {
            using var dbContext = _fixture.CreateContext();
            await _fixture.ResetDatabaseAsync();

            // Seed 5 messages
            for (int i = 0; i < 5; i++)
            {
                dbContext.Add(new OutboxMessage
                {
                    Id = Guid.NewGuid(),
                    MessageType = "SupplierCostSync",
                    AggregateType = "Tx",
                    AggregateId = i.ToString(),
                    Payload = "{\"ReferenceType\":\"Expense\",\"ReferenceId\":\"ref_" + i + "\"}",
                    Status = "pending",
                    AvailableAt = DateTime.UtcNow.AddMinutes(-5),
                    CorrelationId = "corr_" + i
                });
            }
            await dbContext.SaveChangesAsync();

            // Claim with batch limit = 3
            var claimed = await dbContext.ClaimOutboxMessagesAsync(3, default);
            Assert.Equal(3, claimed.Count);
        }

        [Fact]
        public async Task ProcessorCommitsClaimBeforeHttpCall()
        {
            using var dbContext = _fixture.CreateContext();
            await _fixture.ResetDatabaseAsync();

            var msg = new OutboxMessage
            {
                Id = Guid.NewGuid(),
                MessageType = "SupplierCostSync",
                AggregateType = "Tx",
                AggregateId = "1",
                Payload = "{\"ReferenceType\":\"Expense\",\"ReferenceId\":\"ref_1\"}",
                Status = "pending",
                AvailableAt = DateTime.UtcNow.AddMinutes(-5),
                CorrelationId = "corr_1"
            };
            dbContext.Add(msg);
            await dbContext.SaveChangesAsync();

            // Claim message
            var claimed = await dbContext.ClaimOutboxMessagesAsync(1, default);
            Assert.Single(claimed);

            // Verify in a separate context that the status in the database is already 'processing'
            using var dbVerify = _fixture.CreateContext();
            var dbMsg = await dbVerify.OutboxMessages.FindAsync(msg.Id);
            Assert.NotNull(dbMsg);
            Assert.Equal("processing", dbMsg.Status);
        }

        [Fact]
        public async Task ProcessorMarksProcessedOnlyAfterSuccess()
        {
            using var dbContext = _fixture.CreateContext();
            await _fixture.ResetDatabaseAsync();

            var msg = new OutboxMessage
            {
                Id = Guid.NewGuid(),
                MessageType = "SupplierCostSync",
                AggregateType = "Tx",
                AggregateId = "1",
                Payload = "{\"ReferenceType\":\"Expense\",\"ReferenceId\":\"ref_1\"}",
                Status = "pending",
                AvailableAt = DateTime.UtcNow.AddMinutes(-5),
                CorrelationId = "corr_1"
            };
            dbContext.Add(msg);
            await dbContext.SaveChangesAsync();

            var fakeClient = new FakeSalesPortalClient { ShouldThrow = false };
            var provider = CreateTestServiceProvider(fakeClient, new OutboxOptions { BatchSize = 10, MaxRetryCount = 5, IntervalSeconds = 5 });
            var processor = new OutboxProcessor(provider, NullLogger<OutboxProcessor>.Instance, provider.GetRequiredService<IOptions<OutboxOptions>>());

            await InvokeProcessOutboxMessagesAsync(processor, default);

            // Verify state is now 'processed'
            using var verifyContext = _fixture.CreateContext();
            var dbMsg = await verifyContext.OutboxMessages.FindAsync(msg.Id);
            Assert.NotNull(dbMsg);
            Assert.Equal("processed", dbMsg.Status);
            Assert.NotNull(dbMsg.ProcessedAt);
            Assert.Null(dbMsg.LastError);
        }

        [Fact]
        public async Task ProcessorRetriesTransientFailure()
        {
            using var dbContext = _fixture.CreateContext();
            await _fixture.ResetDatabaseAsync();

            var msg = new OutboxMessage
            {
                Id = Guid.NewGuid(),
                MessageType = "SupplierCostSync",
                AggregateType = "Tx",
                AggregateId = "1",
                Payload = "{\"ReferenceType\":\"Expense\",\"ReferenceId\":\"ref_1\"}",
                Status = "pending",
                AvailableAt = DateTime.UtcNow.AddMinutes(-5),
                CorrelationId = "corr_1",
                AttemptCount = 1
            };
            dbContext.Add(msg);
            await dbContext.SaveChangesAsync();

            var fakeClient = new FakeSalesPortalClient { ShouldThrow = true };
            var provider = CreateTestServiceProvider(fakeClient, new OutboxOptions { BatchSize = 10, MaxRetryCount = 5, IntervalSeconds = 5 });
            var processor = new OutboxProcessor(provider, NullLogger<OutboxProcessor>.Instance, provider.GetRequiredService<IOptions<OutboxOptions>>());

            await InvokeProcessOutboxMessagesAsync(processor, default);

            // Verify status is reverted back to pending (not processed or failed)
            using var verifyContext = _fixture.CreateContext();
            var dbMsg = await verifyContext.OutboxMessages.FindAsync(msg.Id);
            Assert.NotNull(dbMsg);
            Assert.Equal("pending", dbMsg.Status);
            Assert.NotNull(dbMsg.LastError);
            Assert.True(dbMsg.AvailableAt > DateTime.UtcNow); // Scheduled for retry in future
        }

        [Fact]
        public async Task ProcessorStopsAfterMaximumRetries()
        {
            using var dbContext = _fixture.CreateContext();
            await _fixture.ResetDatabaseAsync();

            var msg = new OutboxMessage
            {
                Id = Guid.NewGuid(),
                MessageType = "SupplierCostSync",
                AggregateType = "Tx",
                AggregateId = "1",
                Payload = "{\"ReferenceType\":\"Expense\",\"ReferenceId\":\"ref_1\"}",
                Status = "pending",
                AvailableAt = DateTime.UtcNow.AddMinutes(-5),
                CorrelationId = "corr_1",
                AttemptCount = 5 // Max retry reached
            };
            dbContext.Add(msg);
            await dbContext.SaveChangesAsync();

            var fakeClient = new FakeSalesPortalClient { ShouldThrow = true };
            var provider = CreateTestServiceProvider(fakeClient, new OutboxOptions { BatchSize = 10, MaxRetryCount = 5, IntervalSeconds = 5 });
            var processor = new OutboxProcessor(provider, NullLogger<OutboxProcessor>.Instance, provider.GetRequiredService<IOptions<OutboxOptions>>());

            await InvokeProcessOutboxMessagesAsync(processor, default);

            // Verify status is now 'failed' (permanent failure)
            using var verifyContext = _fixture.CreateContext();
            var dbMsg = await verifyContext.OutboxMessages.FindAsync(msg.Id);
            Assert.NotNull(dbMsg);
            Assert.Equal("failed", dbMsg.Status);
        }

        [Fact]
        public async Task CancellationStopsProcessorSafely()
        {
            var fakeClient = new FakeSalesPortalClient();
            var provider = CreateTestServiceProvider(fakeClient, new OutboxOptions { BatchSize = 10, MaxRetryCount = 5, IntervalSeconds = 5 });
            var processor = new OutboxProcessor(provider, NullLogger<OutboxProcessor>.Instance, provider.GetRequiredService<IOptions<OutboxOptions>>());

            var cts = new CancellationTokenSource();
            cts.Cancel(); // Request cancellation immediately

            // Verify that calling it throws a TaskCanceledException or OperationCanceledException
            await Assert.ThrowsAnyAsync<OperationCanceledException>(() =>
                InvokeProcessOutboxMessagesAsync(processor, cts.Token));
            Assert.Equal(0, fakeClient.CallCount);
        }
    }
}

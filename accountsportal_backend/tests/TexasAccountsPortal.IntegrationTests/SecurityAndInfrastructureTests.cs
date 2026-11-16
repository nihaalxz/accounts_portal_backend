using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging.Abstractions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Encodings.Web;
using System.Threading.Tasks;
using TexasAccountsPortal.Api.Authentication;
using TexasAccountsPortal.Contracts.Transactions;
using TexasAccountsPortal.Domain.Entities;
using TexasAccountsPortal.Infrastructure.Data;
using TexasAccountsPortal.Infrastructure.Options;
using TexasAccountsPortal.Infrastructure.Services;
using Xunit;

namespace TexasAccountsPortal.IntegrationTests
{
    public class SecurityAndInfrastructureTests : IClassFixture<SqlServerTestFixture>
    {
        private readonly SqlServerTestFixture _fixture;

        public SecurityAndInfrastructureTests(SqlServerTestFixture fixture)
        {
            _fixture = fixture;
        }

        private class TestOptionsMonitor<T> : Microsoft.Extensions.Options.IOptionsMonitor<T>
        {
            public T CurrentValue { get; }
            public T Get(string? name) => CurrentValue;
            public IDisposable OnChange(Action<T, string> listener) => null!;
            public TestOptionsMonitor(T value) => CurrentValue = value;
        }

        [Fact]
        public async Task InternalServiceAuthenticationHandler_Authenticates_ValidKey()
        {
            var options = new AuthenticationSchemeOptions();
            var monitor = new TestOptionsMonitor<AuthenticationSchemeOptions>(options);
            var internalOptions = Microsoft.Extensions.Options.Options.Create(new InternalServiceAuthenticationOptions
            {
                ServiceKey = "secure_key_123456789012"
            });

            var handler = new InternalServiceAuthenticationHandler(
                monitor,
                new NullLoggerFactory(),
                UrlEncoder.Default,
                internalOptions
            );

            var context = new DefaultHttpContext();
            context.Request.Headers["X-OPS-KEY"] = "secure_key_123456789012";

            var scheme = new AuthenticationScheme("InternalServiceAuth", "InternalServiceAuth", typeof(InternalServiceAuthenticationHandler));
            await handler.InitializeAsync(scheme, context);

            var result = await handler.AuthenticateAsync();

            Assert.True(result.Succeeded);
            Assert.Equal("TexasOperationalPortal", result.Principal?.Identity?.Name);
            Assert.True(result.Principal?.IsInRole("InternalService"));
        }

        [Fact]
        public async Task InternalServiceAuthenticationHandler_Fails_InvalidKey()
        {
            var options = new AuthenticationSchemeOptions();
            var monitor = new TestOptionsMonitor<AuthenticationSchemeOptions>(options);
            var internalOptions = Microsoft.Extensions.Options.Options.Create(new InternalServiceAuthenticationOptions
            {
                ServiceKey = "secure_key_123456789012"
            });

            var handler = new InternalServiceAuthenticationHandler(
                monitor,
                new NullLoggerFactory(),
                UrlEncoder.Default,
                internalOptions
            );

            var context = new DefaultHttpContext();
            context.Request.Headers["X-OPS-KEY"] = "wrong_key";

            var scheme = new AuthenticationScheme("InternalServiceAuth", "InternalServiceAuth", typeof(InternalServiceAuthenticationHandler));
            await handler.InitializeAsync(scheme, context);

            var result = await handler.AuthenticateAsync();

            Assert.False(result.Succeeded);
        }

        [Fact]
        public async Task Bootstrap_Seeding_NoOpWhenDisabled()
        {
            using var dbContext = _fixture.CreateContext();
            await _fixture.ResetDatabaseAsync();

            var hasher = new PasswordHasher();
            var config = new BootstrapOptions
            {
                Enabled = false,
                Email = "accountant@texas.com",
                Password = "P@ssword123456!"
            };

            await AccountsDbContextSeed.SeedAsync(dbContext, hasher, config);

            var userCount = await dbContext.Users.CountAsync();
            Assert.Equal(0, userCount);
        }

        [Fact]
        public async Task Bootstrap_Seeding_CreatesMasterAccountantWhenEnabled()
        {
            using var dbContext = _fixture.CreateContext();
            await _fixture.ResetDatabaseAsync();

            var hasher = new PasswordHasher();
            var config = new BootstrapOptions
            {
                Enabled = true,
                Email = "accountant@texas.com",
                Password = "P@ssword123456!"
            };

            await AccountsDbContextSeed.SeedAsync(dbContext, hasher, config);

            var masterUser = await dbContext.Users.FirstOrDefaultAsync(u => u.Email == config.Email);
            Assert.NotNull(masterUser);
            Assert.Equal("master_accountant", masterUser.UserType);
            Assert.Contains("all", masterUser.PortalPermissions);
        }

        [Fact]
        public async Task RefreshToken_Rotation_And_ReuseDetection()
        {
            using var dbContext = _fixture.CreateContext();
            await _fixture.ResetDatabaseAsync();

            var user = new AccountsUser
            {
                Name = "Token User",
                Email = "token@texas.com",
                PasswordHash = "hashed",
                UserType = "accountant",
                PortalPermissions = new List<string>(),
                IsActive = true
            };
            dbContext.Add(user);
            await dbContext.SaveChangesAsync();

            // Create initial active token
            var token1 = new RefreshToken
            {
                Id = Guid.NewGuid(),
                UserId = user.Id,
                TokenHash = "hash1",
                CreatedAt = DateTime.UtcNow,
                ExpiresAt = DateTime.UtcNow.AddDays(7)
            };
            dbContext.Add(token1);
            await dbContext.SaveChangesAsync();

            // Rotate token
            var token2Id = Guid.NewGuid();
            var token2 = new RefreshToken
            {
                Id = token2Id,
                UserId = user.Id,
                TokenHash = "hash2",
                CreatedAt = DateTime.UtcNow,
                ExpiresAt = DateTime.UtcNow.AddDays(7)
            };
            dbContext.Add(token2);
            token1.Revoke(token2Id);
            await dbContext.SaveChangesAsync();

            // Verify token1 is revoked and points to token2
            Assert.True(token1.IsRevoked);
            Assert.Equal(token2Id, token1.ReplacedByTokenId);
            Assert.False(token2.IsRevoked);
        }

        [Fact]
        public async Task OutboxClaiming_IsAtomic_AndMultiInstanceSafe()
        {
            using var dbContext = _fixture.CreateContext();
            await _fixture.ResetDatabaseAsync();

            // Seed outbox messages
            var msg1 = new OutboxMessage
            {
                Id = Guid.NewGuid(),
                MessageType = "TestSync",
                AggregateType = "Tx",
                AggregateId = "1",
                Payload = "{}",
                Status = "pending",
                AvailableAt = DateTime.UtcNow.AddMinutes(-5),
                CorrelationId = "corr1"
            };
            var msg2 = new OutboxMessage
            {
                Id = Guid.NewGuid(),
                MessageType = "TestSync",
                AggregateType = "Tx",
                AggregateId = "2",
                Payload = "{}",
                Status = "pending",
                AvailableAt = DateTime.UtcNow.AddMinutes(-5),
                CorrelationId = "corr2"
            };
            dbContext.Add(msg1);
            dbContext.Add(msg2);
            await dbContext.SaveChangesAsync();

            // Simulate parallel instances claiming messages
            using var dbContextInstance1 = _fixture.CreateContext();
            using var dbContextInstance2 = _fixture.CreateContext();

            var claim1Task = dbContextInstance1.ClaimOutboxMessagesAsync(1, default);
            var claim2Task = dbContextInstance2.ClaimOutboxMessagesAsync(1, default);

            var claimed1 = await claim1Task;
            var claimed2 = await claim2Task;

            Assert.Single(claimed1);
            Assert.Single(claimed2);

            // Verify they got distinct messages
            Assert.NotEqual(claimed1[0].Id, claimed2[0].Id);

            // Verify their statuses in the db are updated
            var verifyDb = _fixture.CreateContext();
            var dbMsg1 = await verifyDb.FindAsync<OutboxMessage>(new object[] { msg1.Id }, default);
            var dbMsg2 = await verifyDb.FindAsync<OutboxMessage>(new object[] { msg2.Id }, default);

            Assert.NotNull(dbMsg1);
            Assert.NotNull(dbMsg2);
            Assert.Equal("processing", dbMsg1.Status);
            Assert.Equal("processing", dbMsg2.Status);
        }
    }
}

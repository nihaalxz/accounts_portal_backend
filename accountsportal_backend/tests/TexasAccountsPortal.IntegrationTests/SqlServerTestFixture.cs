using Microsoft.EntityFrameworkCore;
using System;
using System.Threading;
using System.Threading.Tasks;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Infrastructure.Data;
using TexasAccountsPortal.Infrastructure.Services;

namespace TexasAccountsPortal.IntegrationTests
{
    public class SqlServerTestFixture : IDisposable
    {
        public string ConnectionString { get; private set; }
        private readonly string _databaseName;

        public SqlServerTestFixture()
        {
            _databaseName = $"TexasAccountsPortal_Test_{Guid.NewGuid():N}";
            ConnectionString = $"Server=(localdb)\\mssqllocaldb;Database={_databaseName};Trusted_Connection=True;MultipleActiveResultSets=true;TrustServerCertificate=True;";

            ValidateConnectionSafety(ConnectionString);

            using var context = CreateContext();
            context.Database.Migrate();
        }

        public DbContextOptions<AccountsDbContext> GetOptions()
        {
            return new DbContextOptionsBuilder<AccountsDbContext>()
                .UseSqlServer(ConnectionString)
                .ConfigureWarnings(w => w.Ignore(Microsoft.EntityFrameworkCore.Diagnostics.RelationalEventId.PendingModelChangesWarning))
                .Options;
        }

        public AccountsDbContext CreateContext()
        {
            return new AccountsDbContext(GetOptions());
        }

        private void ValidateConnectionSafety(string connectionString)
        {
            var builder = new Microsoft.Data.SqlClient.SqlConnectionStringBuilder(connectionString);
            var host = builder.DataSource.ToLower();
            
            if (host.Contains("prod") || host.Contains("live") || host.Contains("azure") || host.Contains("rds") || host.Contains("production"))
            {
                throw new InvalidOperationException("CRITICAL: Production server access is prohibited in integration tests.");
            }

            var dbName = builder.InitialCatalog.ToLower();
            if (!dbName.Contains("test"))
            {
                throw new InvalidOperationException("CRITICAL: Test database name must contain 'test' to prevent data loss.");
            }
        }

        public async Task ResetDatabaseAsync(CancellationToken cancellationToken = default)
        {
            using var context = CreateContext();
            await context.Database.EnsureDeletedAsync(cancellationToken);
            await context.Database.MigrateAsync(cancellationToken);
        }

        public void Dispose()
        {
            try
            {
                using var context = CreateContext();
                context.Database.EnsureDeleted();
            }
            catch
            {
                // Suppress disposal errors
            }
        }

        public IIdempotencyRecoveryStore GetRecoveryStore()
        {
            var factory = new TestDbContextFactory(GetOptions());
            return new IdempotencyRecoveryStore(factory);
        }

        private class TestDbContextFactory : IDbContextFactory<AccountsDbContext>
        {
            private readonly DbContextOptions<AccountsDbContext> _options;
            public TestDbContextFactory(DbContextOptions<AccountsDbContext> options) => _options = options;
            public AccountsDbContext CreateDbContext() => new AccountsDbContext(_options);
        }
    }
}

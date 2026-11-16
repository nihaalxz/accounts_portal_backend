using Xunit;
using Microsoft.EntityFrameworkCore;
using TexasAccountsPortal.Infrastructure.Data;
using TexasAccountsPortal.Infrastructure.Services;
using System.Threading.Tasks;
using System;
using System.Net.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging.Abstractions;
using Microsoft.Extensions.Options;
using TexasAccountsPortal.Infrastructure.Options;
using TexasAccountsPortal.Application.Interfaces;

namespace TexasAccountsPortal.IntegrationTests
{
    public class DebugReceiptTen
    {
        [Fact]
        public async Task TestApproveReceiptTen()
        {
            var connectionString = "Server=db59296.public.databaseasp.net; Database=db59296; User Id=db59296; Password=mB%38_nTxQ=7; Encrypt=True; TrustServerCertificate=True; MultipleActiveResultSets=True;";
            
            var services = new ServiceCollection();
            services.AddDbContext<AccountsDbContext>(opt => opt.UseSqlServer(connectionString));
            services.AddScoped<IAccountsDbContext>(p => p.GetRequiredService<AccountsDbContext>());
            services.AddSingleton<IDbContextFactory<AccountsDbContext>>(new ReportingTestDbContextFactory(
                new DbContextOptionsBuilder<AccountsDbContext>().UseSqlServer(connectionString).Options
            ));

            // HttpClient for SalesPortalClient
            services.AddHttpClient<ISalesPortalClient, SalesPortalClient>();
            services.Configure<SalesPortalOptions>(opt =>
            {
                opt.BaseUrl = "http://localhost:5003/";
                opt.ApiKey = "tx_ops_secure_888";
            });

            services.AddScoped<ITransactionalExecutor, TransactionalExecutor>();
            services.AddScoped<IIdempotencyRecoveryStore, IdempotencyRecoveryStore>();
            services.AddScoped<IAccountingMappingProvider, DefaultAccountingMappingProvider>();
            services.AddScoped<IFinancialPostingService, FinancialPostingService>();
            services.AddScoped<ISalesEntriesService, SalesEntriesService>();

            var serviceProvider = services.BuildServiceProvider();
            using var scope = serviceProvider.CreateScope();

            var salesEntriesService = scope.ServiceProvider.GetRequiredService<ISalesEntriesService>();
            var db = scope.ServiceProvider.GetRequiredService<AccountsDbContext>();

            // Let's find first active cash account ID
            var cashAccount = await db.Accounts.FirstOrDefaultAsync(a => a.Type == Domain.Enums.AccountType.Cash && a.IsActive);
            Console.WriteLine($"Found cash account: {cashAccount?.Name} with ID: {cashAccount?.Id}");

            try
            {
                // We run in a transaction and rollback so we don't mess up the DB state!
                using var tx = await db.Database.BeginTransactionAsync();
                
                // Let's run the receipt approval logic!
                await salesEntriesService.UpdateReceiptPaymentStatusAsync(
                    receiptId: 10,
                    status: "success",
                    approvedByUserId: 1L,
                    cashAccountId: cashAccount?.Id,
                    referenceId: null,
                    ct: default
                );

                Console.WriteLine("SUCCESS WITHOUT EXCEPTION!");
                await tx.RollbackAsync();
            }
            catch (Exception ex)
            {
                Console.WriteLine($"APPROVAL FAILED WITH EXCEPTION:\n{ex}");
                throw;
            }
        }
    }
}

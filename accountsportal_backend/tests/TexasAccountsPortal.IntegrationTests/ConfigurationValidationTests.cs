using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Domain.Entities;
using TexasAccountsPortal.Infrastructure;
using TexasAccountsPortal.Infrastructure.Data;
using TexasAccountsPortal.Infrastructure.Options;
using Xunit;

namespace TexasAccountsPortal.IntegrationTests
{
    public class ConfigurationValidationTests
    {
        private static readonly Dictionary<string, string?> BaseValidConfig = new()
        {
            { "Jwt:Key", "tx_ops_super_secret_key_999_must_be_long_enough" },
            { "Jwt:Issuer", "texas_operational_portal" },
            { "Jwt:Audience", "texas_operational_portal_clients" },
            { "Jwt:ExpiryHours", "1" },
            { "SalesPortal:BaseUrl", "https://localhost:5001" },
            { "SalesPortal:ApiKey", "some_key_value" },
            { "InternalServiceAuth:ServiceKey", "tx_secure_service_key_999_32chars_long" },
            { "Outbox:BatchSize", "10" },
            { "Outbox:MaxRetryCount", "5" },
            { "AccountingMappings:CashOnHand", "1111" },
            { "AccountingMappings:PrimaryBank", "1121" },
            { "AccountingMappings:SalaryExpense", "5010" },
            { "AccountingMappings:HousingAllowanceExpense", "5020" },
            { "AccountingMappings:TransportAllowanceExpense", "5030" },
            { "AccountingMappings:CommissionExpense", "5040" },
            { "AccountingMappings:IncentiveExpense", "5050" },
            { "AccountingMappings:ReimbursementExpense", "5060" },
            { "AccountingMappings:SalaryPayable", "2115" },
            { "AccountingMappings:StaffAdvanceReceivable", "1221" },
            { "AccountingMappings:StaffLoanReceivable", "1222" },
            { "AccountingMappings:SupplierPayable", "2111" },
            { "AccountingMappings:CustomerReceivable", "1211" },
            { "AccountingMappings:PurchaseReturnOffset", "5150" },
            { "AccountingMappings:SalesReturnOffset", "4100" },
            { "AccountingMappings:SupplierCreditControl", "2121" },
            { "AccountingMappings:DefaultExpense", "5230" },
            { "AccountingMappings:OfficeExpense", "5210" },
            { "AccountingMappings:TravelExpense", "5220" },
            { "AccountingMappings:FlightBookingCost", "5110" },
            { "AccountingMappings:VisaApplicationCost", "5120" },
            { "AccountingMappings:HotelBookingCost", "5130" },
            { "AccountingMappings:HolidayPackageCost", "5140" }
        };

        private void AssertStartupThrowsForConfig(Dictionary<string, string?> overrides)
        {
            var configValues = new Dictionary<string, string?>(BaseValidConfig);
            foreach (var kvp in overrides)
            {
                configValues[kvp.Key] = kvp.Value;
            }

            var hostBuilder = Host.CreateDefaultBuilder()
                .ConfigureAppConfiguration((context, configBuilder) =>
                {
                    configBuilder.AddInMemoryCollection(configValues);
                })
                .ConfigureServices((context, services) =>
                {
                    services.AddDbContext<AccountsDbContext>(options =>
                        options.UseSqlServer("Server=Dummy;Database=Dummy;Trusted_Connection=True;"));
                    services.AddInfrastructure(context.Configuration);
                });

            var host = hostBuilder.Build();

            Assert.Throws<OptionsValidationException>(() =>
            {
                // Force evaluation of options to trigger validation
                _ = host.Services.GetRequiredService<IOptions<JwtOptions>>().Value;
                _ = host.Services.GetRequiredService<IOptions<SalesPortalOptions>>().Value;
                _ = host.Services.GetRequiredService<IOptions<InternalServiceAuthenticationOptions>>().Value;
                _ = host.Services.GetRequiredService<IOptions<OutboxOptions>>().Value;
                _ = host.Services.GetRequiredService<IOptions<BootstrapOptions>>().Value;
                _ = host.Services.GetRequiredService<IOptions<AccountingMappingOptions>>().Value;
            });
        }

        [Fact]
        public void BootstrapDisabledByDefault()
        {
            var hostBuilder = Host.CreateDefaultBuilder()
                .ConfigureAppConfiguration((context, configBuilder) =>
                {
                    configBuilder.AddInMemoryCollection(BaseValidConfig);
                })
                .ConfigureServices((context, services) =>
                {
                    services.AddDbContext<AccountsDbContext>(options =>
                        options.UseSqlServer("Server=Dummy;Database=Dummy;Trusted_Connection=True;"));
                    services.AddInfrastructure(context.Configuration);
                });

            var host = hostBuilder.Build();
            var options = host.Services.GetRequiredService<IOptions<BootstrapOptions>>().Value;

            Assert.False(options.Enabled);
        }

        [Fact]
        public void BootstrapEnabledWithoutRequiredConfigurationFailsStartup()
        {
            // Missing password/email
            AssertStartupThrowsForConfig(new Dictionary<string, string?>
            {
                { "Bootstrap:Enabled", "true" },
                { "Bootstrap:Email", "" },
                { "Bootstrap:Password", "" }
            });
        }

        [Fact]
        public void BootstrapRejectsKnownDefaultPassword()
        {
            AssertStartupThrowsForConfig(new Dictionary<string, string?>
            {
                { "Bootstrap:Enabled", "true" },
                { "Bootstrap:Email", "test@test.com" },
                { "Bootstrap:Password", "password123456" }
            });
        }

        [Fact]
        public void ProductionRejectsDevelopmentBootstrapConfiguration()
        {
            string originalEnv = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") ?? "";
            try
            {
                Environment.SetEnvironmentVariable("ASPNETCORE_ENVIRONMENT", "Production");
                AssertStartupThrowsForConfig(new Dictionary<string, string?>
                {
                    { "Bootstrap:Enabled", "true" },
                    { "Bootstrap:Email", "test@test.com" },
                    { "Bootstrap:Password", "P@ssword123456!" }
                });
            }
            finally
            {
                Environment.SetEnvironmentVariable("ASPNETCORE_ENVIRONMENT", originalEnv);
            }
        }

        [Fact]
        public void WeakJwtSigningKeyFailsStartup()
        {
            AssertStartupThrowsForConfig(new Dictionary<string, string?>
            {
                { "Jwt:Key", "short" }
            });
        }

        [Fact]
        public void MissingJwtIssuerFailsStartup()
        {
            AssertStartupThrowsForConfig(new Dictionary<string, string?>
            {
                { "Jwt:Issuer", "" }
            });
        }

        [Fact]
        public void WeakServiceCredentialFailsStartup()
        {
            AssertStartupThrowsForConfig(new Dictionary<string, string?>
            {
                { "InternalServiceAuth:ServiceKey", "weak_key" }
            });
        }

        [Fact]
        public void InvalidSalesPortalUriFailsStartup()
        {
            AssertStartupThrowsForConfig(new Dictionary<string, string?>
            {
                { "SalesPortal:BaseUrl", "not-a-valid-uri" }
            });
        }

        [Fact]
        public void InvalidOutboxBatchSizeFailsStartup()
        {
            AssertStartupThrowsForConfig(new Dictionary<string, string?>
            {
                { "Outbox:BatchSize", "0" }
            });

            AssertStartupThrowsForConfig(new Dictionary<string, string?>
            {
                { "Outbox:BatchSize", "1001" }
            });
        }

        [Fact]
        public void InvalidOutboxRetryLimitFailsStartup()
        {
            AssertStartupThrowsForConfig(new Dictionary<string, string?>
            {
                { "Outbox:MaxRetryCount", "0" }
            });

            AssertStartupThrowsForConfig(new Dictionary<string, string?>
            {
                { "Outbox:MaxRetryCount", "51" }
            });
        }

        [Fact]
        public void MissingAccountingMappingFailsStartup()
        {
            AssertStartupThrowsForConfig(new Dictionary<string, string?>
            {
                { "AccountingMappings:CashOnHand", "" }
            });
        }

        [Fact]
        public async Task ProductionStart_Throws_WhenConnectionStringTargetsLocalDb()
        {
            var config = new Dictionary<string, string?>(BaseValidConfig);
            config["ConnectionStrings:DefaultConnection"] = "Server=(localdb)\\mssqllocaldb;Database=TexasAccountsPortalDb;Trusted_Connection=True;";

            var hostBuilder = Host.CreateDefaultBuilder()
                .UseEnvironment("Production")
                .ConfigureAppConfiguration((context, configBuilder) =>
                {
                    configBuilder.AddInMemoryCollection(config);
                })
                .ConfigureServices((context, services) =>
                {
                    services.AddDbContext<AccountsDbContext>(options =>
                        options.UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=TexasAccountsPortalDb;Trusted_Connection=True;"));
                    services.AddInfrastructure(context.Configuration);
                });
            var host = hostBuilder.Build();
            await Assert.ThrowsAsync<InvalidOperationException>(() => host.StartAsync());
        }

        [Fact]
        public async Task ProductionStart_Throws_WhenPlaceholderJwtKeyUsed()
        {
            var config = new Dictionary<string, string?>(BaseValidConfig);
            config["Jwt:Key"] = "tx_ops_super_secret_key_999_must_be_long_enough";
            config["ConnectionStrings:DefaultConnection"] = "Server=ProdServer;Database=ProdDb;User Id=sa;Password=ProdPassword;";

            var hostBuilder = Host.CreateDefaultBuilder()
                .UseEnvironment("Production")
                .ConfigureAppConfiguration((context, configBuilder) =>
                {
                    configBuilder.AddInMemoryCollection(config);
                })
                .ConfigureServices((context, services) =>
                {
                    services.AddDbContext<AccountsDbContext>(options =>
                        options.UseSqlServer("Server=ProdServer;Database=ProdDb;User Id=sa;Password=ProdPassword;"));
                    services.AddInfrastructure(context.Configuration);
                });
            var host = hostBuilder.Build();
            await Assert.ThrowsAsync<InvalidOperationException>(() => host.StartAsync());
        }

        [Fact]
        public async Task ProductionStart_Throws_WhenSalesPortalUrlIsLocalhost()
        {
            var config = new Dictionary<string, string?>(BaseValidConfig);
            config["SalesPortal:BaseUrl"] = "https://localhost:5001";
            config["ConnectionStrings:DefaultConnection"] = "Server=ProdServer;Database=ProdDb;User Id=sa;Password=ProdPassword;";

            var hostBuilder = Host.CreateDefaultBuilder()
                .UseEnvironment("Production")
                .ConfigureAppConfiguration((context, configBuilder) =>
                {
                    configBuilder.AddInMemoryCollection(config);
                })
                .ConfigureServices((context, services) =>
                {
                    services.AddDbContext<AccountsDbContext>(options =>
                        options.UseSqlServer("Server=ProdServer;Database=ProdDb;User Id=sa;Password=ProdPassword;"));
                    services.AddInfrastructure(context.Configuration);
                });
            var host = hostBuilder.Build();
            await Assert.ThrowsAsync<InvalidOperationException>(() => host.StartAsync());
        }

        private IHostBuilder CreateBuilderWithInMemoryDb(string dbName, Dictionary<string, string?> config, string environment = "Development")
        {
            return Host.CreateDefaultBuilder()
                .UseEnvironment(environment)
                .ConfigureAppConfiguration((context, configBuilder) =>
                {
                    configBuilder.AddInMemoryCollection(config);
                })
                .ConfigureServices((context, services) =>
                {
                    services.AddInfrastructure(context.Configuration, options =>
                    {
                        options.UseInMemoryDatabase(dbName);
                    });
                });
        }

        [Fact]
        public async Task ProductionStart_Throws_WhenCoaIsEmpty()
        {
            var config = new Dictionary<string, string?>(BaseValidConfig);
            config["ConnectionStrings:DefaultConnection"] = "Server=ProdServer;Database=ProdDb;User Id=sa;Password=ProdPassword;";

            var hostBuilder = CreateBuilderWithInMemoryDb("ProdEmptyCoaDb", config, "Production");
            var host = hostBuilder.Build();
            await Assert.ThrowsAsync<InvalidOperationException>(() => host.StartAsync());
        }

        [Fact]
        public async Task StagingStart_Throws_WhenCoaIsEmpty()
        {
            var config = new Dictionary<string, string?>(BaseValidConfig);
            config["ConnectionStrings:DefaultConnection"] = "Server=ProdServer;Database=ProdDb;User Id=sa;Password=ProdPassword;";

            var hostBuilder = CreateBuilderWithInMemoryDb("StagingEmptyCoaDb", config, "Staging");
            var host = hostBuilder.Build();
            await Assert.ThrowsAsync<InvalidOperationException>(() => host.StartAsync());
        }

        [Fact]
        public async Task DevelopmentStart_Throws_WhenCoaIsEmpty_AndBypassIsFalse()
        {
            var config = new Dictionary<string, string?>(BaseValidConfig);
            config["AccountingMappings:BypassValidationWhenCoaEmpty"] = "false";

            var hostBuilder = CreateBuilderWithInMemoryDb("DevEmptyCoaDb", config, "Development");
            var host = hostBuilder.Build();
            await Assert.ThrowsAsync<InvalidOperationException>(() => host.StartAsync());
        }

        [Fact]
        public async Task DevelopmentStart_Succeeds_WhenCoaIsEmpty_AndBypassIsTrue()
        {
            var config = new Dictionary<string, string?>(BaseValidConfig);
            config["AccountingMappings:BypassValidationWhenCoaEmpty"] = "true";

            var hostBuilder = CreateBuilderWithInMemoryDb("DevEmptyCoaDbBypass", config, "Development");
            var host = hostBuilder.Build();
            await host.StartAsync();
            await host.StopAsync();
        }

        [Fact]
        public async Task ProductionStart_Throws_WhenBypassIsTrue()
        {
            var config = new Dictionary<string, string?>(BaseValidConfig);
            config["ConnectionStrings:DefaultConnection"] = "Server=ProdServer;Database=ProdDb;User Id=sa;Password=ProdPassword;";
            config["AccountingMappings:BypassValidationWhenCoaEmpty"] = "true";

            var hostBuilder = CreateBuilderWithInMemoryDb("ProdBypassRejectDb", config, "Production");
            var host = hostBuilder.Build();
            await Assert.ThrowsAsync<InvalidOperationException>(() => host.StartAsync());
        }

        [Fact]
        public async Task Startup_Throws_WhenMappingTargetsControlAccount()
        {
            var config = new Dictionary<string, string?>(BaseValidConfig);
            config["AccountingMappings:CashOnHand"] = "1110";

            var hostBuilder = CreateBuilderWithInMemoryDb("ControlAccountFailureDb", config, "Development");
            var host = hostBuilder.Build();

            using (var scope = host.Services.CreateScope())
            {
                var db = scope.ServiceProvider.GetRequiredService<AccountsDbContext>();
                var ctrlAcc = ChartOfAccount.Create("1110", "Bank Control", Domain.Enums.GlAccountType.Asset, Domain.Enums.NormalBalance.Debit, null, isControlAccount: true, isSystemAccount: true, null, 1L);
                db.Add(ctrlAcc);
                await db.SaveChangesAsync();
            }

            await Assert.ThrowsAsync<InvalidOperationException>(() => host.StartAsync());
        }

        [Fact]
        public async Task Startup_Throws_WhenMappingTargetsInactiveAccount()
        {
            var config = new Dictionary<string, string?>(BaseValidConfig);
            config["AccountingMappings:CashOnHand"] = "1111";

            var hostBuilder = CreateBuilderWithInMemoryDb("InactiveAccountFailureDb", config, "Development");
            var host = hostBuilder.Build();

            using (var scope = host.Services.CreateScope())
            {
                var db = scope.ServiceProvider.GetRequiredService<AccountsDbContext>();
                var acc = ChartOfAccount.Create("1111", "Cash", Domain.Enums.GlAccountType.Asset, Domain.Enums.NormalBalance.Debit, null, isControlAccount: false, isSystemAccount: false, null, 1L);
                acc.Deactivate(1L);
                db.Add(acc);
                await db.SaveChangesAsync();
            }

            await Assert.ThrowsAsync<InvalidOperationException>(() => host.StartAsync());
        }

        [Fact]
        public async Task RuntimeProvider_Throws_WhenMappingResolvesToControlAccount()
        {
            var config = new Dictionary<string, string?>(BaseValidConfig);
            config["AccountingMappings:BypassValidationWhenCoaEmpty"] = "true";

            var hostBuilder = CreateBuilderWithInMemoryDb("RuntimeControlAccountFailureDb", config, "Development");
            var host = hostBuilder.Build();
            await host.StartAsync();

            using var scope = host.Services.CreateScope();
            var db = scope.ServiceProvider.GetRequiredService<AccountsDbContext>();
            var provider = scope.ServiceProvider.GetRequiredService<IAccountingMappingProvider>();

            var ctrlAcc = ChartOfAccount.Create("1111", "Bank Control", Domain.Enums.GlAccountType.Asset, Domain.Enums.NormalBalance.Debit, null, isControlAccount: true, isSystemAccount: false, null, 1L);
            db.Add(ctrlAcc);
            await db.SaveChangesAsync();

            await Assert.ThrowsAsync<InvalidOperationException>(() => provider.GetAccountIdAsync(AccountingMappingKeys.CashOnHand, default));
            await host.StopAsync();
        }

        [Fact]
        public async Task Startup_Throws_WhenMappingTargetsParentGroupAccount()
        {
            var config = new Dictionary<string, string?>(BaseValidConfig);
            config["AccountingMappings:CashOnHand"] = "1000";

            var hostBuilder = CreateBuilderWithInMemoryDb("ParentAccountFailureDb", config, "Development");
            var host = hostBuilder.Build();

            using (var scope = host.Services.CreateScope())
            {
                var db = scope.ServiceProvider.GetRequiredService<AccountsDbContext>();
                var parentAcc = ChartOfAccount.Create("1000", "Asset Group", Domain.Enums.GlAccountType.Asset, Domain.Enums.NormalBalance.Debit, null, isControlAccount: false, isSystemAccount: false, null, 1L);
                db.Add(parentAcc);
                await db.SaveChangesAsync();

                var childAcc = ChartOfAccount.Create("1001", "Cash child", Domain.Enums.GlAccountType.Asset, Domain.Enums.NormalBalance.Debit, parentAcc.Id, isControlAccount: false, isSystemAccount: false, null, 1L);
                db.Add(childAcc);
                await db.SaveChangesAsync();
            }

            await Assert.ThrowsAsync<InvalidOperationException>(() => host.StartAsync());
        }

        [Fact]
        public async Task RuntimeProvider_Throws_WhenMappingResolvesToParentGroupAccount()
        {
            var config = new Dictionary<string, string?>(BaseValidConfig);
            config["AccountingMappings:BypassValidationWhenCoaEmpty"] = "true";

            var hostBuilder = CreateBuilderWithInMemoryDb("RuntimeParentFailureDb", config, "Development");
            var host = hostBuilder.Build();
            await host.StartAsync();

            using var scope = host.Services.CreateScope();
            var db = scope.ServiceProvider.GetRequiredService<AccountsDbContext>();
            var provider = scope.ServiceProvider.GetRequiredService<IAccountingMappingProvider>();

            var parentAcc = ChartOfAccount.Create("1111", "Asset Group", Domain.Enums.GlAccountType.Asset, Domain.Enums.NormalBalance.Debit, null, isControlAccount: false, isSystemAccount: false, null, 1L);
            db.Add(parentAcc);
            await db.SaveChangesAsync();

            var childAcc = ChartOfAccount.Create("1112", "Child Asset", Domain.Enums.GlAccountType.Asset, Domain.Enums.NormalBalance.Debit, parentAcc.Id, isControlAccount: false, isSystemAccount: false, null, 1L);
            db.Add(childAcc);
            await db.SaveChangesAsync();

            await Assert.ThrowsAsync<InvalidOperationException>(() => provider.GetAccountIdAsync(AccountingMappingKeys.CashOnHand, default));
            await host.StopAsync();
        }

        [Fact]
        public async Task VerifyEveryAccountingMappingKeyResolvesToValidActiveNonControlAccount()
        {
            var config = new Dictionary<string, string?>(BaseValidConfig);
            config["AccountingMappings:BypassValidationWhenCoaEmpty"] = "true";

            var hostBuilder = CreateBuilderWithInMemoryDb("MappingCompletenessDb", config, "Development");
            var host = hostBuilder.Build();
            await host.StartAsync();

            using var scope = host.Services.CreateScope();
            var db = scope.ServiceProvider.GetRequiredService<AccountsDbContext>();
            
            var mappingOptions = scope.ServiceProvider.GetRequiredService<IOptions<AccountingMappingOptions>>().Value;
            var provider = scope.ServiceProvider.GetRequiredService<IAccountingMappingProvider>();

            var mappingKeys = new[]
            {
                AccountingMappingKeys.CashOnHand,
                AccountingMappingKeys.PrimaryBank,
                AccountingMappingKeys.SalaryExpense,
                AccountingMappingKeys.HousingAllowanceExpense,
                AccountingMappingKeys.TransportAllowanceExpense,
                AccountingMappingKeys.CommissionExpense,
                AccountingMappingKeys.IncentiveExpense,
                AccountingMappingKeys.ReimbursementExpense,
                AccountingMappingKeys.SalaryPayable,
                AccountingMappingKeys.StaffAdvanceReceivable,
                AccountingMappingKeys.StaffLoanReceivable,
                AccountingMappingKeys.SupplierPayable,
                AccountingMappingKeys.CustomerReceivable,
                AccountingMappingKeys.PurchaseReturnOffset,
                AccountingMappingKeys.SalesReturnOffset,
                AccountingMappingKeys.SupplierCreditControl,
                AccountingMappingKeys.DefaultExpense,
                AccountingMappingKeys.OfficeExpense,
                AccountingMappingKeys.TravelExpense,
                AccountingMappingKeys.FlightBookingCost,
                AccountingMappingKeys.VisaApplicationCost,
                AccountingMappingKeys.HotelBookingCost,
                AccountingMappingKeys.HolidayPackageCost
            };

            var seededCodes = new HashSet<string>();
            foreach (var key in mappingKeys)
            {
                string code = key switch
                {
                    AccountingMappingKeys.CashOnHand => mappingOptions.CashOnHand,
                    AccountingMappingKeys.PrimaryBank => mappingOptions.PrimaryBank,
                    AccountingMappingKeys.SalaryExpense => mappingOptions.SalaryExpense,
                    AccountingMappingKeys.HousingAllowanceExpense => mappingOptions.HousingAllowanceExpense,
                    AccountingMappingKeys.TransportAllowanceExpense => mappingOptions.TransportAllowanceExpense,
                    AccountingMappingKeys.CommissionExpense => mappingOptions.CommissionExpense,
                    AccountingMappingKeys.IncentiveExpense => mappingOptions.IncentiveExpense,
                    AccountingMappingKeys.ReimbursementExpense => mappingOptions.ReimbursementExpense,
                    AccountingMappingKeys.SalaryPayable => mappingOptions.SalaryPayable,
                    AccountingMappingKeys.StaffAdvanceReceivable => mappingOptions.StaffAdvanceReceivable,
                    AccountingMappingKeys.StaffLoanReceivable => mappingOptions.StaffLoanReceivable,
                    AccountingMappingKeys.SupplierPayable => mappingOptions.SupplierPayable,
                    AccountingMappingKeys.CustomerReceivable => mappingOptions.CustomerReceivable,
                    AccountingMappingKeys.PurchaseReturnOffset => mappingOptions.PurchaseReturnOffset,
                    AccountingMappingKeys.SalesReturnOffset => mappingOptions.SalesReturnOffset,
                    AccountingMappingKeys.SupplierCreditControl => mappingOptions.SupplierCreditControl,
                    AccountingMappingKeys.DefaultExpense => mappingOptions.DefaultExpense,
                    AccountingMappingKeys.OfficeExpense => mappingOptions.OfficeExpense,
                    AccountingMappingKeys.TravelExpense => mappingOptions.TravelExpense,
                    AccountingMappingKeys.FlightBookingCost => mappingOptions.FlightBookingCost,
                    AccountingMappingKeys.VisaApplicationCost => mappingOptions.VisaApplicationCost,
                    AccountingMappingKeys.HotelBookingCost => mappingOptions.HotelBookingCost,
                    AccountingMappingKeys.HolidayPackageCost => mappingOptions.HolidayPackageCost,
                    _ => throw new ArgumentException($"Unknown key: {key}")
                };

                if (seededCodes.Contains(code))
                    continue;

                // Determine classification and balance based on code prefix
                var type = Domain.Enums.GlAccountType.Asset;
                var balance = Domain.Enums.NormalBalance.Debit;
                if (code.StartsWith("2"))
                {
                    type = Domain.Enums.GlAccountType.Liability;
                    balance = Domain.Enums.NormalBalance.Credit;
                }
                else if (code.StartsWith("3"))
                {
                    type = Domain.Enums.GlAccountType.Equity;
                    balance = Domain.Enums.NormalBalance.Credit;
                }
                else if (code.StartsWith("4"))
                {
                    type = Domain.Enums.GlAccountType.Revenue;
                    balance = Domain.Enums.NormalBalance.Credit;
                }
                else if (code.StartsWith("5"))
                {
                    type = Domain.Enums.GlAccountType.Expense;
                    balance = Domain.Enums.NormalBalance.Debit;
                }

                var acc = ChartOfAccount.Create(code, $"Acc {code}", type, balance, null, isControlAccount: false, isSystemAccount: false, null, 1L);
                db.Add(acc);
                seededCodes.Add(code);
            }
            await db.SaveChangesAsync();

            foreach (var key in mappingKeys)
            {
                var code = await provider.GetAccountCodeAsync(key, default);
                var id = await provider.GetAccountIdAsync(key, default);

                var account = await db.ChartOfAccounts.FindAsync(id);
                Assert.NotNull(account);
                Assert.Equal(code, account.Code);
                Assert.True(account.IsActive);
                Assert.False(account.IsControlAccount);
            }
             await host.StopAsync();
        }

        [Fact]
        public async Task DevelopmentStart_Throws_WhenCoaNotEmpty_AndBypassIsTrue_AndMappingsInvalid()
        {
            var config = new Dictionary<string, string?>(BaseValidConfig);
            config["AccountingMappings:BypassValidationWhenCoaEmpty"] = "true";
            // Map CashOnHand to a non-existent account code
            config["AccountingMappings:CashOnHand"] = "9999";

            var hostBuilder = CreateBuilderWithInMemoryDb("DevNotEmptyBypassInvalidDb", config, "Development");
            var host = hostBuilder.Build();

            using (var scope = host.Services.CreateScope())
            {
                var db = scope.ServiceProvider.GetRequiredService<AccountsDbContext>();
                var acc = ChartOfAccount.Create("1111", "Valid Cash", Domain.Enums.GlAccountType.Asset, Domain.Enums.NormalBalance.Debit, null, isControlAccount: false, isSystemAccount: false, null, 1L);
                db.Add(acc);
                await db.SaveChangesAsync();
            }

            // Since COA is not empty, BypassValidationWhenCoaEmpty has no effect, so it must validate mappings and throw
            await Assert.ThrowsAsync<InvalidOperationException>(() => host.StartAsync());
        }
    }
}

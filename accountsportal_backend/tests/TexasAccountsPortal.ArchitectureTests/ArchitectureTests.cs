using NetArchTest.Rules;
using Xunit;
using System.Reflection;
using System.Linq;
using System.Collections.Generic;
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using TexasAccountsPortal.Infrastructure;
using TexasAccountsPortal.Infrastructure.Data;

namespace TexasAccountsPortal.ArchitectureTests
{
    public class ArchitectureTests
    {
        private static readonly Assembly DomainAssembly = typeof(TexasAccountsPortal.Domain.Enums.AccountType).Assembly;
        private static readonly Assembly ApplicationAssembly = typeof(TexasAccountsPortal.Application.Interfaces.IFinancialPostingService).Assembly;
        private static readonly Assembly InfrastructureAssembly = typeof(TexasAccountsPortal.Infrastructure.Data.AccountsDbContext).Assembly;
        private static readonly Assembly ApiAssembly = typeof(TexasAccountsPortal.Api.Controllers.ApiControllerBase).Assembly;

        [Fact]
        public void Domain_ShouldNotHaveDependencyOnOtherProjects()
        {
            var result = Types.InAssembly(DomainAssembly)
                .ShouldNot()
                .HaveDependencyOnAny("TexasAccountsPortal.Application", "TexasAccountsPortal.Infrastructure", "TexasAccountsPortal.Api")
                .GetResult();

            Assert.True(result.IsSuccessful);
        }

        [Fact]
        public void Application_ShouldNotHaveDependencyOnInfrastructureOrApi()
        {
            var result = Types.InAssembly(ApplicationAssembly)
                .ShouldNot()
                .HaveDependencyOnAny("TexasAccountsPortal.Infrastructure", "TexasAccountsPortal.Api")
                .GetResult();

            Assert.True(result.IsSuccessful);
        }

        [Fact]
        public void Infrastructure_ShouldNotHaveDependencyOnApi()
        {
            var result = Types.InAssembly(InfrastructureAssembly)
                .ShouldNot()
                .HaveDependencyOnAny("TexasAccountsPortal.Api")
                .GetResult();

            Assert.True(result.IsSuccessful);
        }

        [Fact]
        public void ApiControllers_ShouldNotDependOnDbContext()
        {
            var result = Types.InAssembly(ApiAssembly)
                .That()
                .HaveNameEndingWith("Controller")
                .ShouldNot()
                .HaveDependencyOn("TexasAccountsPortal.Infrastructure.Data.AccountsDbContext")
                .GetResult();

            Assert.True(result.IsSuccessful);
        }

        [Fact]
        public void Application_ShouldNotHaveDependencyOnEntityFrameworkCore()
        {
            var result = Types.InAssembly(ApplicationAssembly)
                .ShouldNot()
                .HaveDependencyOn("Microsoft.EntityFrameworkCore")
                .GetResult();

            Assert.True(result.IsSuccessful);
        }

        [Fact]
        public void Application_ShouldNotHaveDependencyOnAccountsDbContext()
        {
            var result = Types.InAssembly(ApplicationAssembly)
                .ShouldNot()
                .HaveDependencyOn("TexasAccountsPortal.Infrastructure.Data.AccountsDbContext")
                .GetResult();

            Assert.True(result.IsSuccessful);
        }

        [Fact]
        public void ProductionApiContainsNoTestOnlyEndpoints()
        {
            var result = Types.InAssembly(ApiAssembly)
                .That()
                .HaveNameEndingWith("Controller")
                .ShouldNot()
                .HaveNameMatching(".*[Tt]est.*")
                .GetResult();

            Assert.True(result.IsSuccessful, "Production API should not contain any test-only controller.");
        }

        [Fact]
        public void ApplicationDoesNotControlSqlServerExecutionStrategy()
        {
            var result = Types.InAssembly(ApplicationAssembly)
                .ShouldNot()
                .HaveDependencyOn("Microsoft.EntityFrameworkCore.SqlServer")
                .GetResult();

            Assert.True(result.IsSuccessful, "Application layer should not control SQL Server execution strategy.");
        }

        [Fact]
        public void IAccountsDbContextDoesNotExposeTransactionExecution()
        {
            var type = typeof(TexasAccountsPortal.Application.Interfaces.IAccountsDbContext);
            var methods = type.GetMethods();
            var forbiddenNames = new[] { "BeginTransactionAsync", "CommitTransactionAsync", "RollbackTransactionAsync", "ExecuteInTransactionAsync" };
            foreach (var method in methods)
            {
                var isForbidden = Array.IndexOf(forbiddenNames, method.Name) >= 0;
                Assert.False(isForbidden, $"IAccountsDbContext should not expose transaction execution. Found: {method.Name}");
            }
        }

        [Fact]
        public void TransactionalExecutorImplementationLivesInInfrastructure()
        {
            var interfaceType = typeof(TexasAccountsPortal.Application.Interfaces.ITransactionalExecutor);
            Assert.Equal("TexasAccountsPortal.Application", interfaceType.Assembly.GetName().Name);

            var implementationType = typeof(TexasAccountsPortal.Infrastructure.Data.TransactionalExecutor);
            Assert.Equal("TexasAccountsPortal.Infrastructure", implementationType.Assembly.GetName().Name);
            Assert.True(interfaceType.IsAssignableFrom(implementationType), "TransactionalExecutor must implement ITransactionalExecutor");
        }

        [Fact]
        public void IAccountsDbContextDoesNotExposeEfCoreLifecycleOperations()
        {
            var type = typeof(TexasAccountsPortal.Application.Interfaces.IAccountsDbContext);
            var methods = type.GetMethods();
            var forbiddenSubstrings = new[] { "Tracker", "ChangeTracker", "Entry", "Database", "Clear", "Context" };
            foreach (var method in methods)
            {
                foreach (var substring in forbiddenSubstrings)
                {
                    if (substring == "Entry" && (method.Name.Contains("JournalEntry") || method.Name.Contains("LedgerEntry")))
                    {
                        continue;
                    }
                    Assert.False(method.Name.Contains(substring), $"IAccountsDbContext should not expose EF Core lifecycle operations. Found method: {method.Name}");
                }
            }
        }

        [Fact]
        public void FinancialPostingServiceDoesNotInjectDbContextOptions()
        {
            var type = typeof(TexasAccountsPortal.Infrastructure.Services.FinancialPostingService);
            var constructors = type.GetConstructors();
            foreach (var constructor in constructors)
            {
                var parameters = constructor.GetParameters();
                foreach (var parameter in parameters)
                {
                    Assert.False(
                        parameter.ParameterType.IsGenericType && 
                        parameter.ParameterType.GetGenericTypeDefinition() == typeof(DbContextOptions<>),
                        "FinancialPostingService should not inject DbContextOptions");
                }
            }
        }

        [Fact]
        public void FinancialPostingServiceDoesNotConstructAccountsDbContext()
        {
            var type = typeof(TexasAccountsPortal.Infrastructure.Services.FinancialPostingService);
            var fields = type.GetFields(System.Reflection.BindingFlags.NonPublic | System.Reflection.BindingFlags.Instance);
            foreach (var field in fields)
            {
                Assert.False(field.FieldType == typeof(TexasAccountsPortal.Infrastructure.Data.AccountsDbContext), 
                    "FinancialPostingService should not have fields of type AccountsDbContext");
                Assert.False(field.FieldType.IsGenericType && field.FieldType.GetGenericTypeDefinition() == typeof(DbContextOptions<>),
                    "FinancialPostingService should not have fields of type DbContextOptions");
            }
        }

        [Fact]
        public void FinancialPostingServiceDoesNotUseIServiceProvider()
        {
            var type = typeof(TexasAccountsPortal.Infrastructure.Services.FinancialPostingService);
            var constructors = type.GetConstructors();
            foreach (var constructor in constructors)
            {
                var parameters = constructor.GetParameters();
                foreach (var parameter in parameters)
                {
                    Assert.False(parameter.ParameterType == typeof(IServiceProvider),
                        "FinancialPostingService should not inject IServiceProvider");
                }
            }
        }

        [Fact]
        public void FinancialPostingServiceDoesNotUseIServiceScopeFactory()
        {
            var type = typeof(TexasAccountsPortal.Infrastructure.Services.FinancialPostingService);
            var constructors = type.GetConstructors();
            foreach (var constructor in constructors)
            {
                var parameters = constructor.GetParameters();
                foreach (var parameter in parameters)
                {
                    Assert.False(parameter.ParameterType == typeof(Microsoft.Extensions.DependencyInjection.IServiceScopeFactory),
                        "FinancialPostingService should not inject IServiceScopeFactory");
                }
            }
        }

        [Fact]
        public void IdempotencyRecoveryAbstractionLivesInApplication()
        {
            var type = typeof(TexasAccountsPortal.Application.Interfaces.IIdempotencyRecoveryStore);
            Assert.Equal("TexasAccountsPortal.Application", type.Assembly.GetName().Name);
        }

        [Fact]
        public void IdempotencyRecoveryImplementationLivesInInfrastructure()
        {
            var type = typeof(TexasAccountsPortal.Infrastructure.Services.IdempotencyRecoveryStore);
            Assert.Equal("TexasAccountsPortal.Infrastructure", type.Assembly.GetName().Name);
            Assert.True(typeof(TexasAccountsPortal.Application.Interfaces.IIdempotencyRecoveryStore).IsAssignableFrom(type),
                "IdempotencyRecoveryStore must implement IIdempotencyRecoveryStore");
        }

        [Fact]
        public void IdempotencyRecoveryAbstractionDoesNotExposeEfCoreTypes()
        {
            var type = typeof(TexasAccountsPortal.Application.Interfaces.IIdempotencyRecoveryStore);
            var methods = type.GetMethods();
            foreach (var method in methods)
            {
                Assert.False(method.ReturnType.Namespace != null && method.ReturnType.Namespace.StartsWith("Microsoft.EntityFrameworkCore"),
                    "IIdempotencyRecoveryStore methods should not return EF Core types");
                var parameters = method.GetParameters();
                foreach (var parameter in parameters)
                {
                    Assert.False(parameter.ParameterType.Namespace != null && parameter.ParameterType.Namespace.StartsWith("Microsoft.EntityFrameworkCore"),
                        "IIdempotencyRecoveryStore methods should not accept EF Core types");
                }
            }
        }

        [Fact]
        public void FinancialWorkflowServicesDoNotAccessChangeTracker()
        {
            var type = typeof(TexasAccountsPortal.Infrastructure.Services.FinancialPostingService);
            var methods = type.GetMethods(BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.Instance | BindingFlags.Static);
            var fields = type.GetFields(BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.Instance | BindingFlags.Static);

            foreach (var field in fields)
            {
                Assert.False(field.FieldType.FullName != null && field.FieldType.FullName.Contains("Microsoft.EntityFrameworkCore.ChangeTracking"),
                    $"FinancialPostingService field {field.Name} must not reference EF Core ChangeTracking types.");
            }

            foreach (var method in methods)
            {
                Assert.False(method.ReturnType.FullName != null && method.ReturnType.FullName.Contains("Microsoft.EntityFrameworkCore.ChangeTracking"),
                    $"FinancialPostingService method {method.Name} return type must not reference EF Core ChangeTracking types.");

                foreach (var parameter in method.GetParameters())
                {
                    Assert.False(parameter.ParameterType.FullName != null && parameter.ParameterType.FullName.Contains("Microsoft.EntityFrameworkCore.ChangeTracking"),
                        $"FinancialPostingService method {method.Name} parameter {parameter.Name} must not reference EF Core ChangeTracking types.");
                }
            }
        }

        [Fact]
        public void ApplicationDoesNotExposeEntityEntry()
        {
            var result = Types.InAssembly(ApplicationAssembly)
                .ShouldNot()
                .HaveDependencyOn("Microsoft.EntityFrameworkCore.ChangeTracking.EntityEntry")
                .GetResult();

            Assert.True(result.IsSuccessful);
        }

        [Fact]
        public void ApplicationDoesNotExposeChangeTracker()
        {
            var result = Types.InAssembly(ApplicationAssembly)
                .ShouldNot()
                .HaveDependencyOn("Microsoft.EntityFrameworkCore.ChangeTracking.ChangeTracker")
                .GetResult();

            Assert.True(result.IsSuccessful);
        }

        [Fact]
        public void ApplicationDoesNotExposeDatabaseFacade()
        {
            var result = Types.InAssembly(ApplicationAssembly)
                .ShouldNot()
                .HaveDependencyOn("Microsoft.EntityFrameworkCore.Infrastructure.DatabaseFacade")
                .GetResult();

            Assert.True(result.IsSuccessful);
        }

        [Fact]
        public void IdempotencyRetryRecoveryIsInfrastructureOwned()
        {
            var implType = typeof(TexasAccountsPortal.Infrastructure.Services.IdempotencyRecoveryStore);
            Assert.Equal("TexasAccountsPortal.Infrastructure", implType.Assembly.GetName().Name);

            var result = Types.InAssembly(ApplicationAssembly)
                .ShouldNot()
                .HaveDependencyOn("TexasAccountsPortal.Infrastructure.Services.IdempotencyRecoveryStore")
                .GetResult();

            Assert.True(result.IsSuccessful);
        }

        [Fact]
        public void SupplierPaymentControllersDoNotUseDbContext()
        {
            var result = Types.InAssembly(ApiAssembly)
                .That()
                .HaveName("SupplierPaymentsController")
                .ShouldNot()
                .HaveDependencyOn("TexasAccountsPortal.Infrastructure.Data.AccountsDbContext")
                .GetResult();

            Assert.True(result.IsSuccessful);
        }

        [Fact]
        public void PurchaseReturnControllersDoNotUseDbContext()
        {
            var result = Types.InAssembly(ApiAssembly)
                .That()
                .HaveName("PurchaseReturnsController")
                .ShouldNot()
                .HaveDependencyOn("TexasAccountsPortal.Infrastructure.Data.AccountsDbContext")
                .GetResult();

            Assert.True(result.IsSuccessful);
        }

        [Fact]
        public void SalesReturnControllersDoNotUseDbContext()
        {
            var result = Types.InAssembly(ApiAssembly)
                .That()
                .HaveName("SalesReturnsController")
                .ShouldNot()
                .HaveDependencyOn("TexasAccountsPortal.Infrastructure.Data.AccountsDbContext")
                .GetResult();

            Assert.True(result.IsSuccessful);
        }

        [Fact]
        public void ReconciliationControllerDoesNotMutateFinancialState()
        {
            var type = typeof(TexasAccountsPortal.Api.Controllers.ReconciliationController);
            var methods = type.GetMethods(BindingFlags.Public | BindingFlags.Instance | BindingFlags.DeclaredOnly);
            foreach (var method in methods)
            {
                var attributes = method.GetCustomAttributes();
                foreach (var attr in attributes)
                {
                    Assert.False(attr.GetType().Name == "HttpPostAttribute" ||
                                 attr.GetType().Name == "HttpPutAttribute" ||
                                 attr.GetType().Name == "HttpDeleteAttribute" ||
                                 attr.GetType().Name == "HttpPatchAttribute",
                        $"ReconciliationController method {method.Name} must not mutate financial state.");
                }
            }
        }

        [Fact]
        public void ControllersDoNotMutateFinancialBalances()
        {
            var result = Types.InAssembly(ApiAssembly)
                .That()
                .DoNotHaveName("ReconciliationController")
                .And()
                .DoNotHaveName("BankController")
                .And()
                .DoNotHaveName("AccountController")
                .And()
                .DoNotHaveName("PendingApprovalsController")
                .And()
                .DoNotHaveName("PublicApiController")
                .ShouldNot()
                .HaveDependencyOnAny("TexasAccountsPortal.Domain.Entities.Bank", "TexasAccountsPortal.Domain.Entities.Account")
                .GetResult();

            Assert.True(result.IsSuccessful, "Controllers (except CRUD, Reconciliation, PendingApprovals and PublicApi) should not access Bank or Account entities directly.");
        }

        [Fact]
        public void ApprovedPhase2WorkflowsHaveNoDeleteEndpoints()
        {
            var controllerTypes = new[]
            {
                typeof(TexasAccountsPortal.Api.Controllers.SupplierPaymentsController),
                typeof(TexasAccountsPortal.Api.Controllers.PurchaseReturnsController),
                typeof(TexasAccountsPortal.Api.Controllers.SalesReturnsController),
                typeof(TexasAccountsPortal.Api.Controllers.ReconciliationController)
            };

            foreach (var type in controllerTypes)
            {
                var methods = type.GetMethods(BindingFlags.Public | BindingFlags.Instance | BindingFlags.DeclaredOnly);
                foreach (var method in methods)
                {
                    var attributes = method.GetCustomAttributes();
                    foreach (var attr in attributes)
                    {
                        Assert.False(attr.GetType().Name == "HttpDeleteAttribute",
                            $"Controller {type.Name} method {method.Name} must not be a DELETE endpoint.");
                    }
                }
            }
        }

        [Fact]
        public void SupplierPaymentHasNoPublicFinancialSetters()
        {
            var type = typeof(TexasAccountsPortal.Domain.Entities.SupplierPayment);
            var prop = type.GetProperty("Amount");
            Assert.NotNull(prop);
            Assert.False(prop.CanWrite && prop.GetSetMethod(true)!.IsPublic, "SupplierPayment.Amount setter must not be public");
        }

        [Fact]
        public void PurchaseReturnHasNoPublicFinancialSetters()
        {
            var type = typeof(TexasAccountsPortal.Domain.Entities.PurchaseReturn);
            var prop = type.GetProperty("Amount");
            Assert.NotNull(prop);
            Assert.False(prop.CanWrite && prop.GetSetMethod(true)!.IsPublic, "PurchaseReturn.Amount setter must not be public");
        }

        [Fact]
        public void SalesReturnHasNoPublicFinancialSetters()
        {
            var type = typeof(TexasAccountsPortal.Domain.Entities.SalesReturn);
            var prop = type.GetProperty("Amount");
            Assert.NotNull(prop);
            Assert.False(prop.CanWrite && prop.GetSetMethod(true)!.IsPublic, "SalesReturn.Amount setter must not be public");
        }

        [Fact]
        public void WorkflowServicesDependOnAccountingMappingAbstraction()
        {
            var services = new[]
            {
                typeof(TexasAccountsPortal.Infrastructure.Services.FinancialPostingService),
                typeof(TexasAccountsPortal.Infrastructure.Services.ExpenseService)
            };

            foreach (var service in services)
            {
                var constructors = service.GetConstructors();
                bool dependsOnMappingProvider = false;
                foreach (var constructor in constructors)
                {
                    if (constructor.GetParameters().Any(p => p.ParameterType == typeof(TexasAccountsPortal.Application.Interfaces.IAccountingMappingProvider)))
                    {
                        dependsOnMappingProvider = true;
                        break;
                    }
                }
                Assert.True(dependsOnMappingProvider, $"{service.Name} must depend on IAccountingMappingProvider in its constructors.");
            }
        }

        [Fact]
        public void AccountingMappingAbstractionsDoNotExposeEfCoreTypes()
        {
            var type = typeof(TexasAccountsPortal.Application.Interfaces.IAccountingMappingProvider);
            var methods = type.GetMethods();
            foreach (var method in methods)
            {
                Assert.False(method.ReturnType.Namespace != null && method.ReturnType.Namespace.StartsWith("Microsoft.EntityFrameworkCore"),
                    "IAccountingMappingProvider methods should not return EF Core types");
                var parameters = method.GetParameters();
                foreach (var parameter in parameters)
                {
                    Assert.False(parameter.ParameterType.Namespace != null && parameter.ParameterType.Namespace.StartsWith("Microsoft.EntityFrameworkCore"),
                        "IAccountingMappingProvider methods should not accept EF Core types");
                }
            }
        }

        [Fact]
        public void ProductionCodeDoesNotContainFallbackProviderWithHardcodedCodes()
        {
            var types = InfrastructureAssembly.GetTypes()
                .Concat(ApplicationAssembly.GetTypes())
                .Concat(DomainAssembly.GetTypes());

            foreach (var type in types)
            {
                Assert.False(type.Name == "DefaultAccountingMappingProvider", 
                    "DefaultAccountingMappingProvider must not exist in production assemblies.");
            }
        }

        [Fact]
        public void FinancialWorkflowServicesCannotInstantiateMappingProvidersDirectly()
        {
            var services = new[]
            {
                typeof(TexasAccountsPortal.Infrastructure.Services.FinancialPostingService),
                typeof(TexasAccountsPortal.Infrastructure.Services.ExpenseService)
            };

            foreach (var service in services)
            {
                var constructors = service.GetConstructors();
                foreach (var constructor in constructors)
                {
                    var parameters = constructor.GetParameters();
                    foreach (var parameter in parameters)
                    {
                        Assert.False(parameter.ParameterType.Name == "DefaultAccountingMappingProvider",
                            $"{service.Name} constructor parameter {parameter.Name} must not reference concrete DefaultAccountingMappingProvider.");
                    }
                }
            }
        }

        [Fact]
        public void ProductionAndStagingCannotRegisterTestFallbackProvider()
        {
            var result = Types.InAssembly(InfrastructureAssembly)
                .ShouldNot()
                .HaveDependencyOn("TexasAccountsPortal.IntegrationTests")
                .GetResult();

            Assert.True(result.IsSuccessful, "Infrastructure assembly must not depend on IntegrationTests assembly.");
        }

        [Fact]
        public void ProductionDiRegistrationResolvesExactlyOneMappingProvider()
        {
            var services = new Microsoft.Extensions.DependencyInjection.ServiceCollection();
            var configuration = new Microsoft.Extensions.Configuration.ConfigurationBuilder()
                .AddInMemoryCollection(new Dictionary<string, string?>
                {
                    { "ConnectionStrings:DefaultConnection", "Server=ProdServer;Database=ProdDb;User Id=sa;Password=ProdPassword;" },
                    { "Jwt:Key", "valid_jwt_key_that_is_long_enough_for_security_standards" },
                    { "Jwt:Issuer", "prod_issuer" },
                    { "Jwt:Audience", "prod_audience" },
                    { "Jwt:ExpiryHours", "2" },
                    { "SalesPortal:BaseUrl", "https://sales.texasportals.com" },
                    { "SalesPortal:ApiKey", "prod_api_key" },
                    { "InternalServiceAuth:ServiceKey", "prod_secure_service_key_32chars_long" },
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
                })
                .Build();

            services.AddDbContext<AccountsDbContext>(options =>
                options.UseSqlServer("Server=ProdServer;Database=ProdDb;User Id=sa;Password=ProdPassword;"));
            services.AddInfrastructure(configuration);

            var resolvedProviders = services
                .Where(descriptor => descriptor.ServiceType == typeof(TexasAccountsPortal.Application.Interfaces.IAccountingMappingProvider))
                .ToList();

            Assert.Single(resolvedProviders);
        }

        [Fact]
        public void ProductionInfrastructureDoesNotDependOnInMemoryEfProvider()
        {
            var result = Types.InAssembly(InfrastructureAssembly)
                .ShouldNot()
                .HaveDependencyOn("Microsoft.EntityFrameworkCore.InMemory")
                .GetResult();

            Assert.True(result.IsSuccessful, "Infrastructure assembly must not depend on EF Core InMemory database provider.");
        }

        [Fact]
        public void ProductionDiRegistrationDoesNotIncludeInMemoryOrTestSwitches()
        {
            var services = new Microsoft.Extensions.DependencyInjection.ServiceCollection();
            var configuration = new Microsoft.Extensions.Configuration.ConfigurationBuilder()
                .AddInMemoryCollection(new Dictionary<string, string?>
                {
                    { "ConnectionStrings:DefaultConnection", "Server=ProdServer;Database=ProdDb;User Id=sa;Password=ProdPassword;" },
                    { "Jwt:Key", "valid_jwt_key_that_is_long_enough_for_security_standards" },
                    { "Jwt:Issuer", "prod_issuer" },
                    { "Jwt:Audience", "prod_audience" },
                    { "Jwt:ExpiryHours", "2" },
                    { "SalesPortal:BaseUrl", "https://sales.texasportals.com" },
                    { "SalesPortal:ApiKey", "prod_api_key" },
                    { "InternalServiceAuth:ServiceKey", "prod_secure_service_key_32chars_long" }
                })
                .Build();

            services.AddDbContext<AccountsDbContext>(options =>
                options.UseSqlServer("Server=ProdServer;Database=ProdDb;User Id=sa;Password=ProdPassword;"));
            services.AddInfrastructure(configuration);

            // Verify that no DbContextOptions uses InMemory database provider internal service
            var optionsDescriptor = services.FirstOrDefault(d => d.ServiceType == typeof(DbContextOptions<AccountsDbContext>));
            if (optionsDescriptor != null && optionsDescriptor.ImplementationInstance != null)
            {
                var opt = (DbContextOptions<AccountsDbContext>)optionsDescriptor.ImplementationInstance;
                Assert.False(opt.Extensions.Any(e => e.GetType().Name.Contains("InMemory")),
                    "DbContextOptions in Production DI must not contain EF Core InMemory database extensions.");
            }
        }

        [Fact]
        public void WorkflowConstructorsDoNotBypassMappingAbstraction()
        {
            var services = new[]
            {
                typeof(TexasAccountsPortal.Infrastructure.Services.FinancialPostingService),
                typeof(TexasAccountsPortal.Infrastructure.Services.ExpenseService)
            };

            foreach (var service in services)
            {
                var constructors = service.GetConstructors();
                foreach (var constructor in constructors)
                {
                    var parameters = constructor.GetParameters();
                    var hasMappingInterface = parameters.Any(p => p.ParameterType == typeof(TexasAccountsPortal.Application.Interfaces.IAccountingMappingProvider));
                    Assert.True(hasMappingInterface, $"{service.Name} constructor is missing IAccountingMappingProvider parameter.");
                }
            }
        }
    }
}

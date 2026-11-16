using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Infrastructure.Data;
using TexasAccountsPortal.Infrastructure.Options;
using TexasAccountsPortal.Infrastructure.Services;
using TexasAccountsPortal.Infrastructure.BackgroundServices;

namespace TexasAccountsPortal.Infrastructure
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddInfrastructure(this IServiceCollection services, IConfiguration configuration, Action<DbContextOptionsBuilder>? configureDbContext = null)
        {
            // Bind & Validate Options on Startup
            services.AddOptions<JwtOptions>()
                .Bind(configuration.GetSection(JwtOptions.SectionName))
                .ValidateDataAnnotations()
                .Validate(o =>
                {
                    if (string.IsNullOrWhiteSpace(o.Key) || o.Key.Length < 32)
                        return false;
                    return true;
                }, "JWT Signing Key must be at least 32 characters long.")
                .ValidateOnStart();

            services.AddOptions<SalesPortalOptions>()
                .Bind(configuration.GetSection(SalesPortalOptions.SectionName))
                .ValidateDataAnnotations()
                .Validate(o =>
                {
                    if (!Uri.TryCreate(o.BaseUrl, UriKind.Absolute, out _))
                        return false;
                    return true;
                }, "SalesPortal BaseUrl must be a valid absolute URI.")
                .ValidateOnStart();

            services.AddOptions<OperationalPortalOptions>()
                .Bind(configuration.GetSection(OperationalPortalOptions.SectionName))
                .ValidateDataAnnotations()
                .Validate(o =>
                {
                    if (!Uri.TryCreate(o.BaseUrl, UriKind.Absolute, out _))
                        return false;
                    return true;
                }, "OperationalPortal BaseUrl must be a valid absolute URI.")
                .ValidateOnStart();

            services.AddOptions<BootstrapOptions>()
                .Bind(configuration.GetSection(BootstrapOptions.SectionName))
                .Validate(o =>
                {
                    if (o.Enabled)
                    {
                        var env = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT");
                        if (env == "Production" || env == "Staging")
                            return false;
                    }
                    var err = o.Validate();
                    return string.IsNullOrEmpty(err);
                }, "Bootstrap configuration is invalid (bootstrap seeding cannot be enabled in production environments, or password/email is invalid).")
                .ValidateOnStart();

            services.AddOptions<InternalServiceAuthenticationOptions>()
                .Bind(configuration.GetSection(InternalServiceAuthenticationOptions.SectionName))
                .ValidateDataAnnotations()
                .ValidateOnStart();

            services.AddOptions<OutboxOptions>()
                .Bind(configuration.GetSection(OutboxOptions.SectionName))
                .ValidateDataAnnotations()
                .ValidateOnStart();

            services.AddOptions<AccountingMappingOptions>()
                .Bind(configuration.GetSection(AccountingMappingOptions.SectionName))
                .ValidateDataAnnotations()
                .ValidateOnStart();

            if (configureDbContext != null)
            {
                services.AddDbContextFactory<AccountsDbContext>(configureDbContext, ServiceLifetime.Scoped);
            }
            else
            {
                // Configure SQL Server DbContext with Connection Resiliency
                var connectionString = configuration.GetConnectionString("DefaultConnection")
                    ?? "Server=db67450.public.databaseasp.net; Database=db67450; User Id=db67450; Password=qL=9+t4S5%Bn; Encrypt=True; TrustServerCertificate=True; MultipleActiveResultSets=True;";

                services.AddDbContextFactory<AccountsDbContext>(options =>
                {
                    options.UseSqlServer(connectionString, sqlServerOptions =>
                    {
                        sqlServerOptions.EnableRetryOnFailure(
                            maxRetryCount: 5,
                            maxRetryDelay: TimeSpan.FromSeconds(10),
                            errorNumbersToAdd: null);
                    });
                }, ServiceLifetime.Scoped);
            }

            // Register concrete DbContext for scoped injection (ensures thread-safe isolated context per request scope)
            services.AddScoped<AccountsDbContext>(provider =>
                provider.GetRequiredService<IDbContextFactory<AccountsDbContext>>().CreateDbContext());

            // Memory Cache for fast caching
            services.AddMemoryCache();

            // Register context under the interface
            services.AddScoped<IAccountsDbContext>(provider => provider.GetRequiredService<AccountsDbContext>());
            services.AddScoped<ITransactionalExecutor, TransactionalExecutor>();

            // Hashing & Tokens & Posting
            services.AddScoped<IPasswordHasher, PasswordHasher>();
            services.AddScoped<ITokenService, TokenService>();
            services.AddScoped<TexasAccountsPortal.Domain.Services.IDocumentNumberGenerator, DocumentNumberGenerator>();
            services.AddScoped<IIdempotencyRecoveryStore, IdempotencyRecoveryStore>();
            services.AddScoped<IFinancialPostingService, FinancialPostingService>();
            services.AddSingleton<ITransactionReferenceResolver, TransactionReferenceResolver>();
            services.AddScoped<ITransactionPresentationMapper, TransactionPresentationMapper>();
            services.AddScoped<IAccountingMappingProvider, AccountingMappingProvider>();

            // Phase 3 — Accounting Posting
            services.AddScoped<IAccountingPeriodRepository, AccountingPeriodRepository>();
            services.AddScoped<IAccountingPostingService, AccountingPostingService>();
            services.AddScoped<IChartOfAccountService, ChartOfAccountService>();
            services.AddScoped<IAccountingPeriodService, AccountingPeriodService>();
            services.AddScoped<IPostingRuleResolver, PostingRuleResolver>();
            services.AddScoped<IPaymentEngine, PaymentEngine>();
            services.AddScoped<IExpenseService, ExpenseService>();
            services.AddScoped<IAccountBalanceService, AccountBalanceService>();
            services.AddScoped<IExpenseApprovalService, ExpenseApprovalService>();
            services.AddScoped<IJournalEntryService, JournalEntryService>();
            services.AddScoped<IReportingService, ReportingService>();
            services.AddScoped<IPartyTransferService, PartyTransferService>();
            services.AddScoped<IWalletTransferService, WalletTransferService>();
            services.AddScoped<ILocalWalletService, LocalWalletService>();
            services.AddScoped<ISalesPortalWalletService, SalesPortalWalletService>();
            services.AddScoped<IFinancialTransactionService, FinancialTransactionService>();
            services.AddScoped<ISettlementService, SettlementService>();
            services.AddScoped<ISettlementApprovalService, SettlementApprovalService>();

            // Remote Integrations & Payment Workflows
            services.AddScoped<IPaymentMethodResolver, PaymentMethodResolver>();
            services.AddScoped<IDestinationAccountResolver, DestinationAccountResolver>();
            services.AddScoped<IServicePaymentApprovalWorkflow, ServicePaymentApprovalWorkflow>();
            services.AddHttpClient<ISalesPortalClient, SalesPortalClient>(client =>
            {
                client.Timeout = TimeSpan.FromSeconds(60);
            });
            services.AddHttpClient<IOperationalPortalClient, OperationalPortalClient>(client =>
            {
                client.Timeout = TimeSpan.FromSeconds(3);
            });
            services.AddScoped<ISalesEntriesService, SalesEntriesService>();
            services.AddScoped<IVisaMasterService, VisaMasterService>();
            services.AddScoped<IPayrollService, PayrollService>();

            // Background hosted services
            services.AddHostedService<OutboxProcessor>();
            services.AddHostedService<ProductionStartupValidator>();
            services.AddHostedService<AccountingMappingStartupValidator>();

            // Centralized Enterprise Document Framework
            services.Configure<TexasAccountsPortal.Application.Features.Documents.Models.DocumentOptions>(configuration.GetSection("DocumentOptions"));
            services.AddScoped<TexasAccountsPortal.Application.Features.Documents.Builders.IDocumentBuilder, TexasAccountsPortal.Application.Features.Documents.Builders.AccountReportDocumentBuilder>();
            services.AddScoped<TexasAccountsPortal.Application.Features.Documents.Builders.IDocumentBuilder, TexasAccountsPortal.Application.Features.Documents.Builders.SalesmenReportDocumentBuilder>();
            services.AddScoped<TexasAccountsPortal.Application.Features.Documents.Builders.IDocumentBuilder, TexasAccountsPortal.Application.Features.Documents.Builders.ProfitLossReportDocumentBuilder>();
            services.AddScoped<TexasAccountsPortal.Application.Features.Documents.Builders.IDocumentBuilder, TexasAccountsPortal.Application.Features.Documents.Builders.PaymentsReportDocumentBuilder>();
            services.AddScoped<TexasAccountsPortal.Application.Features.Documents.Builders.IDocumentBuilder, TexasAccountsPortal.Application.Features.Documents.Builders.TransactionsReportDocumentBuilder>();
            services.AddScoped<TexasAccountsPortal.Application.Features.Documents.Builders.IDocumentBuilder, TexasAccountsPortal.Application.Features.Documents.Builders.PendingApprovalsReportDocumentBuilder>();
            services.AddScoped<TexasAccountsPortal.Application.Features.Documents.Builders.IDocumentBuilder, TexasAccountsPortal.Application.Features.Documents.Builders.AccountsReceiptDocumentBuilder>();
            services.AddScoped<TexasAccountsPortal.Application.Features.Documents.Factory.IDocumentBuilderFactory, TexasAccountsPortal.Application.Features.Documents.Factory.DocumentBuilderFactory>();
            services.AddScoped<TexasAccountsPortal.Application.Features.Documents.Services.IDocumentPdfService, TexasAccountsPortal.Infrastructure.Pdf.DocumentPdfService>();
            services.AddScoped<TexasAccountsPortal.Application.Features.Documents.Services.IDocumentGenerationService, TexasAccountsPortal.Application.Features.Documents.Services.DocumentGenerationService>();

            return services;
        }
    }
}

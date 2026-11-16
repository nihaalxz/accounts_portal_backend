using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Threading.Tasks;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Application.Options;
using TexasAccountsPortal.Infrastructure.BackgroundServices;
using TexasAccountsPortal.Infrastructure.Hubs;
using TexasAccountsPortal.Infrastructure.Notifications;

namespace TexasAccountsPortal.Api.Extensions;

public static class SignalRServiceExtensions
{
    public static IServiceCollection AddRealtimeInfrastructure(this IServiceCollection services, IConfiguration configuration)
    {
        services.Configure<SignalROptions>(configuration.GetSection(SignalROptions.SectionName));
        services.Configure<WorkerOptions>(configuration.GetSection(WorkerOptions.SectionName));
        services.Configure<NotificationOptions>(configuration.GetSection(NotificationOptions.SectionName));

        services.AddScoped<INotificationDispatcher, NotificationDispatcher>();
        services.AddScoped<INotificationPublisher, NotificationPublisher>();
        services.AddScoped<ILedgerNotificationService, LedgerNotificationService>();
        services.AddScoped<IWalletNotificationService, WalletNotificationService>();
        services.AddScoped<IOutstandingNotificationService, OutstandingNotificationService>();
        services.AddScoped<IReceiptNotificationService, ReceiptNotificationService>();
        services.AddScoped<IOperationalQueueNotificationService, OperationalQueueNotificationService>();
        services.AddScoped<IDashboardRefreshCoordinator, DashboardRefreshCoordinator>();
        services.AddHostedService<OutboxNotificationWorker>();

        services.AddSignalR(options =>
        {
            options.EnableDetailedErrors = true;
            options.ClientTimeoutInterval = TimeSpan.FromSeconds(30);
            options.KeepAliveInterval = TimeSpan.FromSeconds(15);
            options.HandshakeTimeout = TimeSpan.FromSeconds(15);
        });

        return services;
    }

    public static void ConfigureJwtBearerQueryStringForSignalR(this JwtBearerEvents events)
    {
        events.OnMessageReceived = context =>
        {
            var accessToken = context.Request.Query["access_token"];
            var path = context.HttpContext.Request.Path;

            if (!string.IsNullOrEmpty(accessToken) && path.StartsWithSegments("/hubs"))
            {
                context.Token = accessToken;
            }
            return Task.CompletedTask;
        };
    }

    public static WebApplication MapRealtimeHubs(this WebApplication app)
    {
        app.MapHub<TexasSyncHub>("/hubs/texas-sync");
        return app;
    }
}

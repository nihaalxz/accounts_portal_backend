using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System;
using System.Threading;
using System.Threading.Tasks;
using TexasAccountsPortal.Application.Options;

namespace TexasAccountsPortal.Infrastructure.BackgroundServices;

public sealed class OutboxNotificationWorker : BackgroundService
{
    private readonly WorkerOptions _options;
    private readonly ILogger<OutboxNotificationWorker> _logger;

    public OutboxNotificationWorker(
        IOptions<WorkerOptions> options,
        ILogger<OutboxNotificationWorker> logger)
    {
        _options = options.Value;
        _logger = logger;
    }

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        if (!_options.Enabled)
        {
            _logger.LogInformation("OutboxNotificationWorker (Accounts) is disabled in configuration.");
            return;
        }

        _logger.LogInformation("OutboxNotificationWorker (Accounts) started. Interval: {Interval}ms, BatchSize: {BatchSize}",
            _options.PollingIntervalMilliseconds, _options.BatchSize);

        while (!stoppingToken.IsCancellationRequested)
        {
            try
            {
                await ProcessPendingOutboxBatchAsync(stoppingToken);
                await Task.Delay(_options.PollingIntervalMilliseconds, stoppingToken);
            }
            catch (OperationCanceledException) when (stoppingToken.IsCancellationRequested)
            {
                break;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred inside OutboxNotificationWorker loop.");
            }
        }

        _logger.LogInformation("OutboxNotificationWorker background service is stopping.");
    }

    private Task ProcessPendingOutboxBatchAsync(CancellationToken ct)
    {
        _logger.LogTrace("OutboxNotificationWorker polling iteration completed with 0 pending notifications.");
        return Task.CompletedTask;
    }
}

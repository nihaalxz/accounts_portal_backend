using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System;
using System.Linq;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Domain.Entities;
using TexasAccountsPortal.Domain.Enums;
using TexasAccountsPortal.Infrastructure.Options;

namespace TexasAccountsPortal.Infrastructure.BackgroundServices
{
    public class OutboxProcessor : BackgroundService
    {
        private readonly IServiceProvider _serviceProvider;
        private readonly ILogger<OutboxProcessor> _logger;
        private readonly OutboxOptions _options;

        public OutboxProcessor(IServiceProvider serviceProvider, ILogger<OutboxProcessor> logger, IOptions<OutboxOptions> options)
        {
            _serviceProvider = serviceProvider;
            _logger = logger;
            _options = options.Value;
        }

        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            _logger.LogInformation("Outbox Processor background service is starting.");

            while (!stoppingToken.IsCancellationRequested)
            {
                try
                {
                    await ProcessOutboxMessagesAsync(stoppingToken);
                }
                catch (OperationCanceledException) when (stoppingToken.IsCancellationRequested)
                {
                    // Normal graceful shutdown â€” not an error
                    _logger.LogInformation("Outbox Processor received cancellation signal. Stopping.");
                    break;
                }
                catch (Exception ex)
                {
                    _logger.LogError(ex, "Error occurred while executing Outbox processing loop.");
                }

                // Poll using configured interval seconds
                try
                {
                    await Task.Delay(_options.IntervalSeconds * 1000, stoppingToken);
                }
                catch (OperationCanceledException)
                {
                    // Delay was cancelled by stoppingToken â€” exit cleanly
                    break;
                }
            }

            _logger.LogInformation("Outbox Processor background service is stopping.");
        }

        private async Task ProcessOutboxMessagesAsync(CancellationToken cancellationToken)
        {
            using var scope = _serviceProvider.CreateScope();
            var dbContext = scope.ServiceProvider.GetRequiredService<IAccountsDbContext>();
            var salesPortalClient = scope.ServiceProvider.GetRequiredService<ISalesPortalClient>();

            // Fetch and atomically claim pending messages
            var messages = await dbContext.ClaimOutboxMessagesAsync(_options.BatchSize, cancellationToken);

            if (!messages.Any()) return;

            _logger.LogInformation("Claimed {Count} outbox messages to process.", messages.Count);

            foreach (var message in messages)
            {

                try
                {
                    _logger.LogInformation("Processing outbox message {Id} of type {Type}.", message.Id, message.MessageType);

                    if (message.MessageType == "SupplierCostSync" || message.MessageType == "SupplierCostSync_Obsolete")
                    {
                        _logger.LogInformation("Skipping obsolete SupplierCostSync outbox message {Id}.", message.Id);
                    }
                    else if (message.MessageType == "CreditHeadWallet")
                    {
                        var payload = JsonSerializer.Deserialize<CreditHeadWalletPayload>(message.Payload);
                        if (payload == null)
                            throw new InvalidOperationException("Failed to deserialize Outbox payload.");

                        await salesPortalClient.CreditHeadWalletAsync(
                            payload.HeadId,
                            payload.Amount,
                            payload.Reason,
                            cancellationToken
                        );
                    }
                    else if (message.MessageType == "DebitHeadWallet")
                    {
                        var payload = JsonSerializer.Deserialize<DebitHeadWalletPayload>(message.Payload);
                        if (payload == null)
                            throw new InvalidOperationException("Failed to deserialize Outbox payload.");

                        await salesPortalClient.DebitHeadWalletAsync(
                            payload.HeadId,
                            payload.Amount,
                            payload.Reason,
                            cancellationToken
                        );
                    }

                    // Success
                    message.Status = "processed";
                    message.ProcessedAt = DateTime.UtcNow;
                    message.LastError = null;
                }
                catch (Exception ex)
                {
                    _logger.LogError(ex, "Failed to deliver outbox message {Id}.", message.Id);

                    message.LastError = ex.Message;
                    if (message.AttemptCount >= _options.MaxRetryCount)
                    {
                        message.Status = "failed";
                    }
                    else
                    {
                        message.Status = "pending";
                        // Exponential backoff: 10s, 20s, 40s, 80s...
                        message.AvailableAt = DateTime.UtcNow.AddSeconds(Math.Pow(2, message.AttemptCount) * 10);
                    }
                }

                await dbContext.SaveChangesAsync(cancellationToken);
            }
        }

        private class SupplierCostSyncPayload
        {
            public string ReferenceType { get; set; } = string.Empty;
            public string ReferenceId { get; set; } = string.Empty;
        }

        private class CreditHeadWalletPayload
        {
            public long HeadId { get; set; }
            public decimal Amount { get; set; }
            public string Reason { get; set; } = string.Empty;
        }

        private class DebitHeadWalletPayload
        {
            public long HeadId { get; set; }
            public decimal Amount { get; set; }
            public string Reason { get; set; } = string.Empty;
        }
    }
}


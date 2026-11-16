using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Contracts.Notifications;

namespace TexasAccountsPortal.Infrastructure.Notifications;

public sealed class OperationalQueueNotificationService : IOperationalQueueNotificationService
{
    private readonly INotificationPublisher _publisher;
    private readonly ILogger<OperationalQueueNotificationService> _logger;

    public OperationalQueueNotificationService(
        INotificationPublisher publisher,
        ILogger<OperationalQueueNotificationService> logger)
    {
        _publisher = publisher;
        _logger = logger;
    }

    public async Task PublishOperationalQueueChangedAsync(
        string referenceType,
        string referenceId,
        string queueType,
        long? assignedUserId = null,
        bool includeOperationsRole = true,
        CancellationToken cancellationToken = default)
    {
        var target = new OperationalQueueTarget(queueType, assignedUserId, includeOperationsRole);
        var targetGroups = target.ResolveTargetGroups().Distinct().ToList();

        var stopwatch = Stopwatch.StartNew();

        foreach (var targetGroup in targetGroups)
        {
            _logger.LogInformation(
                "[OperationalQueueNotification] Enqueuing OperationalQueueChanged. ReferenceType={ReferenceType}, ReferenceId={ReferenceId}, QueueType={QueueType}, TargetGroup={TargetGroup}",
                referenceType, referenceId, queueType, targetGroup);

            await _publisher.PublishAsync(
                eventName: BusinessEventNames.OperationalQueueChanged,
                referenceType: referenceType,
                referenceId: referenceId,
                headId: null,
                agentId: assignedUserId,
                targetGroup: targetGroup,
                priority: "Normal",
                ct: cancellationToken);
        }

        stopwatch.Stop();
        _logger.LogDebug("[OperationalQueueNotification] Enqueued {Count} OperationalQueueChanged notification(s) in {ElapsedTime} ms",
            targetGroups.Count, stopwatch.ElapsedMilliseconds);
    }
}

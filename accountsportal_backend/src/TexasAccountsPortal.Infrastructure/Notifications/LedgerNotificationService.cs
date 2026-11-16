using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Contracts.Notifications;

namespace TexasAccountsPortal.Infrastructure.Notifications;

public sealed class LedgerNotificationService : ILedgerNotificationService
{
    private readonly INotificationPublisher _publisher;

    public LedgerNotificationService(INotificationPublisher publisher)
    {
        _publisher = publisher;
    }

    public Task PublishLedgerChangedAsync(
        string referenceType,
        string referenceId,
        long? headId = null,
        long? agentId = null,
        long? supplierId = null,
        CancellationToken cancellationToken = default)
    {
        var target = new LedgerTarget(headId, agentId, supplierId);
        return PublishLedgerChangedTargetsAsync(referenceType, referenceId, new[] { target }, cancellationToken);
    }

    public async Task PublishLedgerChangedTargetsAsync(
        string referenceType,
        string referenceId,
        IEnumerable<LedgerTarget> targets,
        CancellationToken cancellationToken = default)
    {
        if (targets == null) return;

        // Deduplicate targets by resolved target group string
        var distinctTargets = targets
            .Where(t => t != null)
            .GroupBy(t => t.ResolveTargetGroup())
            .Select(g => g.First())
            .ToList();

        foreach (var target in distinctTargets)
        {
            var targetGroup = target.ResolveTargetGroup();
            await _publisher.PublishAsync(
                eventName: BusinessEventNames.LedgerChanged,
                referenceType: referenceType,
                referenceId: referenceId,
                headId: target.HeadId,
                agentId: target.AgentId,
                targetGroup: targetGroup,
                priority: "Normal",
                ct: cancellationToken);
        }
    }
}

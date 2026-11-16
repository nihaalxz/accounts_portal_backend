using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Contracts.Notifications;

namespace TexasAccountsPortal.IntegrationTests.Fakes
{
    public class TestLedgerNotificationService : ILedgerNotificationService
    {
        public Task PublishLedgerChangedAsync(
            string referenceType,
            string referenceId,
            long? headId = null,
            long? agentId = null,
            long? supplierId = null,
            CancellationToken cancellationToken = default)
        {
            return Task.CompletedTask;
        }

        public Task PublishLedgerChangedTargetsAsync(
            string referenceType,
            string referenceId,
            IEnumerable<LedgerTarget> targets,
            CancellationToken cancellationToken = default)
        {
            return Task.CompletedTask;
        }
    }
}

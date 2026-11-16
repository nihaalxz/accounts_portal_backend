using System.Threading;
using System.Threading.Tasks;
using TexasAccountsPortal.Contracts.Notifications;

namespace TexasAccountsPortal.Application.Interfaces;

public interface INotificationDispatcher
{
    Task DispatchAsync(NotificationEnvelope envelope, CancellationToken ct = default);
}

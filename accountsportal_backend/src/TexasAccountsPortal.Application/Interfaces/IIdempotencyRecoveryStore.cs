using System.Threading;
using System.Threading.Tasks;
using TexasAccountsPortal.Domain.Entities;

namespace TexasAccountsPortal.Application.Interfaces
{
    public interface IIdempotencyRecoveryStore
    {
        Task<IdempotencyRecord?> GetRecordAsync(string id, CancellationToken cancellationToken);
        Task CreatePendingRecordAsync(string id, string scope, string key, string requestHash, string payload, CancellationToken cancellationToken);
        Task CompleteRecordAsync(string id, int statusCode, string body, CancellationToken cancellationToken);
        Task RemovePendingRecordAsync(string id, CancellationToken cancellationToken);
    }
}

using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using TexasAccountsPortal.Contracts.JournalEntries;

namespace TexasAccountsPortal.Application.Interfaces
{
    public interface IJournalEntryService
    {
        Task<JournalEntryResponse> CreateAsync(
            CreateJournalEntryRequest request,
            long actorUserId,
            CancellationToken cancellationToken);

        Task<JournalEntryResponse> ApproveAsync(
            long id,
            long actorUserId,
            string idempotencyKey,
            string? rowVersion,
            CancellationToken cancellationToken);

        Task<JournalEntryResponse> RejectAsync(
            long id,
            long actorUserId,
            CancellationToken cancellationToken);

        Task<JournalEntryResponse> GetByIdAsync(
            long id,
            CancellationToken cancellationToken);

        Task<List<JournalEntryResponse>> GetListAsync(
            CancellationToken cancellationToken);
    }
}

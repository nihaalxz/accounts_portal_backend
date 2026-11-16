using Microsoft.EntityFrameworkCore;
using System;
using System.Threading;
using System.Threading.Tasks;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Domain.Entities;
using TexasAccountsPortal.Infrastructure.Data;

namespace TexasAccountsPortal.Infrastructure.Services
{
    public class IdempotencyRecoveryStore : IIdempotencyRecoveryStore
    {
        private readonly IDbContextFactory<AccountsDbContext> _contextFactory;

        public IdempotencyRecoveryStore(IDbContextFactory<AccountsDbContext> contextFactory)
        {
            _contextFactory = contextFactory;
        }

        public async Task<IdempotencyRecord?> GetRecordAsync(string id, CancellationToken cancellationToken)
        {
            using var context = await _contextFactory.CreateDbContextAsync(cancellationToken);
            return await context.IdempotencyRecords
                .AsNoTracking()
                .FirstOrDefaultAsync(r => r.Id == id, cancellationToken);
        }

        public async Task CreatePendingRecordAsync(string id, string scope, string key, string requestHash, string payload, CancellationToken cancellationToken)
        {
            using var context = await _contextFactory.CreateDbContextAsync(cancellationToken);
            var record = new IdempotencyRecord
            {
                Id = id,
                Scope = scope,
                Key = key,
                RequestHash = requestHash,
                Status = "pending",
                CreatedAt = DateTime.UtcNow,
                ExpiresAt = DateTime.UtcNow.AddDays(7)
            };
            context.IdempotencyRecords.Add(record);
            await context.SaveChangesAsync(cancellationToken);
        }

        public async Task CompleteRecordAsync(string id, int statusCode, string body, CancellationToken cancellationToken)
        {
            using var context = await _contextFactory.CreateDbContextAsync(cancellationToken);
            var record = await context.IdempotencyRecords.FirstOrDefaultAsync(r => r.Id == id, cancellationToken);
            if (record != null)
            {
                record.Status = "completed";
                record.ResponseStatusCode = statusCode;
                record.ResponseBody = body;
                record.CompletedAt = DateTime.UtcNow;
                await context.SaveChangesAsync(cancellationToken);
            }
        }

        public async Task RemovePendingRecordAsync(string id, CancellationToken cancellationToken)
        {
            using var recoveryContext = await _contextFactory.CreateDbContextAsync(cancellationToken);
            var recordToDelete = new IdempotencyRecord { Id = id };
            recoveryContext.Entry(recordToDelete).State = EntityState.Deleted;
            await recoveryContext.SaveChangesAsync(cancellationToken);
        }
    }
}

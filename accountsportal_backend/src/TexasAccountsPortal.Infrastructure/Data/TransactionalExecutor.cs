using Microsoft.EntityFrameworkCore;
using System;
using System.Threading;
using System.Threading.Tasks;
using TexasAccountsPortal.Application.Interfaces;

namespace TexasAccountsPortal.Infrastructure.Data
{
    public class TransactionalExecutor : ITransactionalExecutor
    {
        private readonly AccountsDbContext _dbContext;

        public TransactionalExecutor(AccountsDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<TResult> ExecuteInTransactionAsync<TResult>(Func<CancellationToken, Task<TResult>> action, CancellationToken cancellationToken)
        {
            if (_dbContext.Database.CurrentTransaction != null)
            {
                return await action(cancellationToken);
            }

            var strategy = _dbContext.Database.CreateExecutionStrategy();
            return await strategy.ExecuteAsync(async () =>
            {
                using var transaction = await _dbContext.Database.BeginTransactionAsync(cancellationToken);
                try
                {
                    var result = await action(cancellationToken);
                    await transaction.CommitAsync(cancellationToken);
                    return result;
                }
                catch
                {
                    await transaction.RollbackAsync(cancellationToken);
                    throw;
                }
            });
        }
    }
}

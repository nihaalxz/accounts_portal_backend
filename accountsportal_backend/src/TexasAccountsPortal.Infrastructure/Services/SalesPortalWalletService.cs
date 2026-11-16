using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using TexasAccountsPortal.Application.Interfaces;

namespace TexasAccountsPortal.Infrastructure.Services
{
    public sealed class SalesPortalWalletService : ISalesPortalWalletService
    {
        private readonly ISalesPortalClient _salesPortalClient;

        public SalesPortalWalletService(ISalesPortalClient salesPortalClient)
        {
            _salesPortalClient = salesPortalClient;
        }

        public async Task DebitHeadWalletAsync(long headId, decimal amount, string reason, CancellationToken cancellationToken)
        {
            try
            {
                // Basic retry policy for transient HTTP failures (up to 3 attempts)
                int maxRetry = 3;
                int attempt = 0;
                while (true)
                {
                    attempt++;
                    try
                    {
                        await _salesPortalClient.DebitHeadWalletAsync(headId, amount, reason, cancellationToken);
                        break;
                    }
                    catch (HttpRequestException) when (attempt < maxRetry)
                    {
                        await Task.Delay(100 * attempt, cancellationToken);
                    }
                }
            }
            catch (Exception ex)
            {
                throw new InvalidOperationException($"Failed to debit Customer Head wallet via Sales Portal API: {ex.Message}", ex);
            }
        }

        public async Task CreditHeadWalletAsync(long headId, decimal amount, string reason, CancellationToken cancellationToken)
        {
            try
            {
                int maxRetry = 3;
                int attempt = 0;
                while (true)
                {
                    attempt++;
                    try
                    {
                        await _salesPortalClient.CreditHeadWalletAsync(headId, amount, reason, cancellationToken);
                        break;
                    }
                    catch (HttpRequestException) when (attempt < maxRetry)
                    {
                        await Task.Delay(100 * attempt, cancellationToken);
                    }
                }
            }
            catch (Exception ex)
            {
                throw new InvalidOperationException($"Failed to credit Customer Head wallet via Sales Portal API: {ex.Message}", ex);
            }
        }
    }
}

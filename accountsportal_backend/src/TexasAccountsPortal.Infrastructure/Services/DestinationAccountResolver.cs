using System;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Domain.Enums;

namespace TexasAccountsPortal.Infrastructure.Services
{
    public class DestinationAccountResolver : IDestinationAccountResolver
    {
        public async Task<ResolvedDestinationAccount> ResolveDestinationAccountAsync(
            PaymentMethod paymentMethod,
            long? explicitCashAccountId,
            long? explicitBankId,
            IAccountsDbContext dbContext,
            CancellationToken cancellationToken = default)
        {
            if (paymentMethod == PaymentMethod.Cash)
            {
                long destCashId = explicitCashAccountId ?? 0;
                if (destCashId <= 0)
                {
                    var defaultCash = await dbContext.Accounts
                        .FirstOrDefaultAsync(a => a.Type == AccountType.Cash && a.IsActive, cancellationToken);
                    destCashId = defaultCash?.Id ?? 0;
                }

                if (destCashId <= 0)
                {
                    throw new InvalidOperationException("Cash payment approval failed: Active cash account required but could not be resolved.");
                }

                // Verify cash account exists and is active
                var cashAccount = await dbContext.Accounts
                    .FirstOrDefaultAsync(a => a.Id == destCashId && a.IsActive, cancellationToken);
                if (cashAccount == null)
                {
                    throw new InvalidOperationException($"Cash payment approval failed: Cash account #{destCashId} does not exist or is inactive.");
                }

                return new ResolvedDestinationAccount(destCashId, null);
            }
            else
            {
                long? destBankId = explicitBankId;
                if (!destBankId.HasValue || destBankId.Value <= 0)
                {
                    var defaultBank = await dbContext.Banks
                        .FirstOrDefaultAsync(b => b.IsActive, cancellationToken);
                    destBankId = defaultBank?.Id;
                }

                if (!destBankId.HasValue || destBankId.Value <= 0)
                {
                    throw new InvalidOperationException("Bank payment approval failed: Active bank account required but could not be resolved.");
                }

                // Verify bank exists and is active
                var bank = await dbContext.Banks
                    .FirstOrDefaultAsync(b => b.Id == destBankId.Value && b.IsActive, cancellationToken);
                if (bank == null)
                {
                    throw new InvalidOperationException($"Bank payment approval failed: Bank #{destBankId.Value} does not exist or is inactive.");
                }

                return new ResolvedDestinationAccount(null, destBankId.Value);
            }
        }
    }
}

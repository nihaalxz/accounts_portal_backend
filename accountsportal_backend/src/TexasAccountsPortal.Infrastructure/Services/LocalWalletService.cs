using Microsoft.EntityFrameworkCore;
using System;
using System.Threading;
using System.Threading.Tasks;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Domain.Entities;

using TexasAccountsPortal.Contracts.Notifications;

namespace TexasAccountsPortal.Infrastructure.Services
{
    public sealed class LocalWalletService : ILocalWalletService
    {
        private readonly IAccountsDbContext _db;
        private readonly IWalletNotificationService _walletNotificationService;

        public LocalWalletService(
            IAccountsDbContext db,
            IWalletNotificationService walletNotificationService)
        {
            _db = db;
            _walletNotificationService = walletNotificationService;
        }

        public async Task DebitAgentWalletAsync(long agentId, decimal amount, CancellationToken cancellationToken)
        {
            var agent = await _db.Agents.FirstOrDefaultAsync(x => x.Id == agentId, cancellationToken);
            if (agent == null)
                throw new KeyNotFoundException($"Agent with ID {agentId} not found.");

            agent.DebitWallet(amount);

            await _walletNotificationService.PublishWalletChangedAsync(
                referenceType: ReferenceTypes.WalletTransfer,
                referenceId: agentId.ToString(),
                ownerId: agentId,
                ownerType: "agent",
                cancellationToken: cancellationToken);
        }

        public async Task CreditAgentWalletAsync(long agentId, decimal amount, CancellationToken cancellationToken)
        {
            var agent = await _db.Agents.FirstOrDefaultAsync(x => x.Id == agentId, cancellationToken);
            if (agent == null)
                throw new KeyNotFoundException($"Agent with ID {agentId} not found.");

            agent.CreditWallet(amount);

            await _walletNotificationService.PublishWalletChangedAsync(
                referenceType: ReferenceTypes.WalletTransfer,
                referenceId: agentId.ToString(),
                ownerId: agentId,
                ownerType: "agent",
                cancellationToken: cancellationToken);
        }

        public async Task DebitSupplierWalletAsync(long supplierId, decimal amount, CancellationToken cancellationToken)
        {
            var supplier = await _db.Suppliers.FirstOrDefaultAsync(x => x.Id == supplierId, cancellationToken);
            if (supplier == null)
                throw new KeyNotFoundException($"Supplier with ID {supplierId} not found.");

            supplier.DebitWallet(amount);

            await _walletNotificationService.PublishWalletChangedAsync(
                referenceType: ReferenceTypes.WalletTransfer,
                referenceId: supplierId.ToString(),
                ownerId: supplierId,
                ownerType: "supplier",
                cancellationToken: cancellationToken);
        }

        public async Task CreditSupplierWalletAsync(long supplierId, decimal amount, CancellationToken cancellationToken)
        {
            var supplier = await _db.Suppliers.FirstOrDefaultAsync(x => x.Id == supplierId, cancellationToken);
            if (supplier == null)
                throw new KeyNotFoundException($"Supplier with ID {supplierId} not found.");

            supplier.CreditWallet(amount);

            await _walletNotificationService.PublishWalletChangedAsync(
                referenceType: ReferenceTypes.WalletTransfer,
                referenceId: supplierId.ToString(),
                ownerId: supplierId,
                ownerType: "supplier",
                cancellationToken: cancellationToken);
        }
    }
}

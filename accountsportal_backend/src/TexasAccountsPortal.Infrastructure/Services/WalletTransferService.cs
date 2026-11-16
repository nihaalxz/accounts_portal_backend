using System;
using System.Threading;
using System.Threading.Tasks;
using TexasAccountsPortal.Application.Interfaces;

namespace TexasAccountsPortal.Infrastructure.Services
{
    public sealed class WalletTransferService : IWalletTransferService
    {
        private readonly ILocalWalletService _localWallet;
        private readonly ISalesPortalWalletService _salesPortalWallet;

        public WalletTransferService(
            ILocalWalletService localWallet,
            ISalesPortalWalletService salesPortalWallet)
        {
            _localWallet = localWallet;
            _salesPortalWallet = salesPortalWallet;
        }

        public async Task TransferAsync(
            PartyReference debitParty,
            PartyReference creditParty,
            decimal amount,
            string description,
            CancellationToken cancellationToken)
        {
            // Execute debit and credit operations sequentially
            await DebitAsync(debitParty, amount, description, cancellationToken);
            await CreditAsync(creditParty, amount, description, cancellationToken);
        }

        public async Task DebitAsync(
            PartyReference party,
            decimal amount,
            string description,
            CancellationToken cancellationToken)
        {
            switch (party.PartyType)
            {
                case PartyType.Agent:
                    await _localWallet.DebitAgentWalletAsync(party.PartyId, amount, cancellationToken);
                    break;
                case PartyType.Supplier:
                    await _localWallet.DebitSupplierWalletAsync(party.PartyId, amount, cancellationToken);
                    break;
                case PartyType.Head:
                    await _salesPortalWallet.DebitHeadWalletAsync(party.PartyId, amount, description, cancellationToken);
                    break;
                default:
                    throw new ArgumentException($"Unsupported party type for debit: {party.PartyType}");
            }
        }

        public async Task CreditAsync(
            PartyReference party,
            decimal amount,
            string description,
            CancellationToken cancellationToken)
        {
            switch (party.PartyType)
            {
                case PartyType.Agent:
                    await _localWallet.CreditAgentWalletAsync(party.PartyId, amount, cancellationToken);
                    break;
                case PartyType.Supplier:
                    await _localWallet.CreditSupplierWalletAsync(party.PartyId, amount, cancellationToken);
                    break;
                case PartyType.Head:
                    await _salesPortalWallet.CreditHeadWalletAsync(party.PartyId, amount, description, cancellationToken);
                    break;
                default:
                    throw new ArgumentException($"Unsupported party type for credit: {party.PartyType}");
            }
        }
    }
}

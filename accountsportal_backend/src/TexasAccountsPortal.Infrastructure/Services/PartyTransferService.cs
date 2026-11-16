using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Domain.Entities;

using TexasAccountsPortal.Contracts.Notifications;

namespace TexasAccountsPortal.Infrastructure.Services
{
    public sealed class PartyTransferService : IPartyTransferService
    {
        private readonly IAccountsDbContext _db;
        private readonly IWalletTransferService _walletTransferService;
        private readonly IFinancialTransactionService _financialTransactionService;
        private readonly ISalesPortalClient _salesPortalClient;
        private readonly ILedgerNotificationService _ledgerNotificationService;
        private readonly IWalletNotificationService _walletNotificationService;
        private readonly IOutstandingNotificationService _outstandingNotificationService;

        public PartyTransferService(
            IAccountsDbContext db,
            IWalletTransferService walletTransferService,
            IFinancialTransactionService financialTransactionService,
            ISalesPortalClient salesPortalClient,
            ILedgerNotificationService ledgerNotificationService,
            IWalletNotificationService walletNotificationService,
            IOutstandingNotificationService outstandingNotificationService)
        {
            _db = db;
            _walletTransferService = walletTransferService;
            _financialTransactionService = financialTransactionService;
            _salesPortalClient = salesPortalClient;
            _ledgerNotificationService = ledgerNotificationService;
            _walletNotificationService = walletNotificationService;
            _outstandingNotificationService = outstandingNotificationService;
        }

        public async Task<PartyTransferResult> TransferAsync(
            PartyReference debitParty,
            PartyReference creditParty,
            decimal amount,
            string description,
            CancellationToken cancellationToken)
        {
            // 1. Validation: Positive Amount
            if (amount <= 0.001m)
                throw new ArgumentException("Transfer amount must be greater than 0.001.");

            // 2. Validation: Prohibit Self-Transfers
            if (debitParty.PartyId == creditParty.PartyId && debitParty.PartyType == creditParty.PartyType)
                throw new InvalidOperationException("Self-transfers are not allowed.");

            // 3. Validation: Supported Party Combinations
            bool isValidCombo = IsSupportedCombination(debitParty.PartyType, creditParty.PartyType);
            if (!isValidCombo)
                throw new InvalidOperationException($"Transfer combination '{debitParty.PartyType} -> {creditParty.PartyType}' is not supported.");

            // 4. Validation: Verify Parties & Wallets Exist
            await VerifyPartyExistsAsync(debitParty, cancellationToken);
            await VerifyPartyExistsAsync(creditParty, cancellationToken);

            // 5. Generate unique transfer reference
            var transferId = Guid.NewGuid();
            var cleanGuid = transferId.ToString("N").Substring(0, 6).ToUpperInvariant();
            var transferReference = $"TXF-{DateTime.UtcNow:yyyyMMdd}-{cleanGuid}";

            // 6. Perform Balance validation for Supplier and Head (local Agent can go negative)
            await ValidateSufficientBalanceAsync(debitParty, amount, cancellationToken);

            // 7. Execute Wallet Updates
            await _walletTransferService.TransferAsync(debitParty, creditParty, amount, description, cancellationToken);

            // 8. Create Financial Transaction logs
            await _financialTransactionService.CreateTransferTransactionsAsync(
                transferReference,
                debitParty,
                creditParty,
                amount,
                1, // Actor ID - will be updated or passed down if needed, but let's use 1 or the system user id
                cancellationToken
            );

            // 9. Publish LedgerChanged notifications for affected parties (deduplicated)
            var targets = new[]
            {
                MapPartyToTarget(debitParty),
                MapPartyToTarget(creditParty)
            };

            await _ledgerNotificationService.PublishLedgerChangedTargetsAsync(
                referenceType: ReferenceTypes.WalletTransfer,
                referenceId: transferReference,
                targets: targets,
                cancellationToken: cancellationToken);

            // 10. Publish WalletChanged notifications for affected wallet owners (deduplicated)
            var walletTargets = new[]
            {
                MapPartyToWalletOwnerTarget(debitParty),
                MapPartyToWalletOwnerTarget(creditParty)
            };

            await _walletNotificationService.PublishWalletChangedTargetsAsync(
                referenceType: ReferenceTypes.WalletTransfer,
                referenceId: transferReference,
                targets: walletTargets,
                cancellationToken: cancellationToken);

            // 11. Publish OutstandingChanged notifications for affected outstanding owners (deduplicated)
            var outstandingTargets = new[]
            {
                MapPartyToOutstandingOwnerTarget(debitParty),
                MapPartyToOutstandingOwnerTarget(creditParty)
            };

            await _outstandingNotificationService.PublishOutstandingChangedTargetsAsync(
                referenceType: ReferenceTypes.WalletTransfer,
                referenceId: transferReference,
                targets: outstandingTargets,
                cancellationToken: cancellationToken);

            await _db.SaveChangesAsync(cancellationToken);

            return new PartyTransferResult(
                TransferId: transferId,
                TransferReference: transferReference,
                Amount: amount,
                CompletedAt: DateTime.UtcNow,
                Success: true
            );
        }

        private static LedgerTarget MapPartyToTarget(PartyReference party)
        {
            return party.PartyType switch
            {
                PartyType.Head => new LedgerTarget(HeadId: party.PartyId),
                PartyType.Agent => new LedgerTarget(AgentId: party.PartyId),
                PartyType.Supplier => new LedgerTarget(SupplierId: party.PartyId),
                _ => new LedgerTarget()
            };
        }

        private static WalletOwnerTarget MapPartyToWalletOwnerTarget(PartyReference party)
        {
            return new WalletOwnerTarget(party.PartyId, party.PartyType.ToString().ToLowerInvariant());
        }

        private static OutstandingOwnerTarget MapPartyToOutstandingOwnerTarget(PartyReference party)
        {
            return new OutstandingOwnerTarget(party.PartyId, party.PartyType.ToString().ToLowerInvariant());
        }

        private bool IsSupportedCombination(PartyType debit, PartyType credit)
        {
            return Enum.IsDefined(typeof(PartyType), debit) && Enum.IsDefined(typeof(PartyType), credit);
        }

        private async Task VerifyPartyExistsAsync(PartyReference party, CancellationToken cancellationToken)
        {
            switch (party.PartyType)
            {
                case PartyType.Agent:
                    var agentExists = await _db.Agents.AnyAsync(a => a.Id == party.PartyId, cancellationToken);
                    if (!agentExists)
                        throw new KeyNotFoundException($"Agent with ID {party.PartyId} does not exist.");
                    break;

                case PartyType.Supplier:
                    var supplierExists = await _db.Suppliers.AnyAsync(s => s.Id == party.PartyId, cancellationToken);
                    if (!supplierExists)
                        throw new KeyNotFoundException($"Supplier with ID {party.PartyId} does not exist.");
                    break;

                case PartyType.Head:
                    var head = await _salesPortalClient.GetHeadByIdAsync(party.PartyId, cancellationToken);
                    if (head == null)
                        throw new KeyNotFoundException($"Customer Head with ID {party.PartyId} does not exist on the Sales Portal.");
                    break;
            }
        }

        private async Task ValidateSufficientBalanceAsync(PartyReference party, decimal amount, CancellationToken cancellationToken)
        {
            if (party.PartyType == PartyType.Supplier)
            {
                var supplier = await _db.Suppliers.FirstOrDefaultAsync(s => s.Id == party.PartyId, cancellationToken);
                if (supplier == null)
                    throw new KeyNotFoundException($"Supplier with ID {party.PartyId} not found.");
                // Suppliers are allowed to have a signed/negative wallet balance (credit).
            }
            else if (party.PartyType == PartyType.Head)
            {
                var head = await _salesPortalClient.GetHeadByIdAsync(party.PartyId, cancellationToken);
                if (head == null)
                    throw new KeyNotFoundException($"Customer Head with ID {party.PartyId} not found.");

                if (head.Wallet < amount)
                    throw new InvalidOperationException($"Insufficient balance in Customer Head wallet. Available: {head.Wallet}, Required: {amount}");
            }
            // Agents are allowed to have a negative wallet balance, so no local check is required.
        }
    }
}

using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Domain.Entities;
using TexasAccountsPortal.Domain.Enums;

namespace TexasAccountsPortal.Infrastructure.Services
{
    public sealed class FinancialTransactionService : IFinancialTransactionService
    {
        private readonly IAccountsDbContext _db;
        private readonly ISalesPortalClient _salesPortalClient;

        public FinancialTransactionService(
            IAccountsDbContext db,
            ISalesPortalClient salesPortalClient)
        {
            _db = db;
            _salesPortalClient = salesPortalClient;
        }

        public async Task CreateTransferTransactionsAsync(
            string transferReference,
            PartyReference debitParty,
            PartyReference creditParty,
            decimal amount,
            long actorUserId,
            CancellationToken cancellationToken)
        {
            var debitPartyName = await GetPartyNameAsync(debitParty, cancellationToken);
            var creditPartyName = await GetPartyNameAsync(creditParty, cancellationToken);

            // 1. Create Debit FinancialTransaction
            long? debitSupplierId = debitParty.PartyType == PartyType.Supplier ? debitParty.PartyId : null;
            string? debitSupplierName = debitParty.PartyType == PartyType.Supplier ? debitPartyName : null;
            RecipientType? debitRecipientType = debitParty.PartyType switch
            {
                PartyType.Agent => RecipientType.Agent,
                PartyType.Supplier => RecipientType.Supplier,
                PartyType.Head => RecipientType.Head,
                _ => null
            };

            var debitTx = FinancialTransaction.Create(
                transactionType: FinancialTransactionType.WalletDebit,
                amount: amount,
                paymentMethod: PaymentMethod.Wallet,
                createdBy: actorUserId,
                referenceType: TransactionReferenceType.Transfer,
                referenceId: transferReference,
                description: $"Journal Entry Debit to {creditPartyName}",
                supplierId: debitSupplierId,
                supplierName: debitSupplierName,
                recipientType: debitRecipientType,
                recipientId: debitParty.PartyId,
                initialStatus: FinancialTransactionStatus.Approved
            );

            _db.Add(debitTx);

            // 2. Create Credit FinancialTransaction
            long? creditSupplierId = creditParty.PartyType == PartyType.Supplier ? creditParty.PartyId : null;
            string? creditSupplierName = creditParty.PartyType == PartyType.Supplier ? creditPartyName : null;
            RecipientType? creditRecipientType = creditParty.PartyType switch
            {
                PartyType.Agent => RecipientType.Agent,
                PartyType.Supplier => RecipientType.Supplier,
                PartyType.Head => RecipientType.Head,
                _ => null
            };

            var creditTx = FinancialTransaction.Create(
                transactionType: FinancialTransactionType.Incoming,
                amount: amount,
                paymentMethod: PaymentMethod.Wallet,
                createdBy: actorUserId,
                referenceType: TransactionReferenceType.Transfer,
                referenceId: transferReference,
                description: $"Journal Entry Credit from {debitPartyName}",
                supplierId: creditSupplierId,
                supplierName: creditSupplierName,
                recipientType: creditRecipientType,
                recipientId: creditParty.PartyId,
                initialStatus: FinancialTransactionStatus.Approved
            );

            _db.Add(creditTx);
        }

        private async Task<string> GetPartyNameAsync(PartyReference party, CancellationToken cancellationToken)
        {
            switch (party.PartyType)
            {
                case PartyType.Agent:
                    var agent = await _db.Agents.FirstOrDefaultAsync(a => a.Id == party.PartyId, cancellationToken);
                    if (agent == null)
                        throw new KeyNotFoundException($"Agent with ID {party.PartyId} not found.");
                    return agent.GetFullName();

                case PartyType.Supplier:
                    var supplier = await _db.Suppliers.FirstOrDefaultAsync(s => s.Id == party.PartyId, cancellationToken);
                    if (supplier == null)
                        throw new KeyNotFoundException($"Supplier with ID {party.PartyId} not found.");
                    return supplier.Name;

                case PartyType.Head:
                    var head = await _salesPortalClient.GetHeadByIdAsync(party.PartyId, cancellationToken);
                    if (head == null)
                        throw new KeyNotFoundException($"Customer Head with ID {party.PartyId} not found on Sales Portal.");
                    return $"{head.FirstName} {head.LastName}".Trim();

                default:
                    throw new ArgumentException($"Unsupported party type: {party.PartyType}");
            }
        }
    }
}

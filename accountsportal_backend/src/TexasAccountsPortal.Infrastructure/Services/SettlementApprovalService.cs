using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Contracts.SupplierPayments;
using TexasAccountsPortal.Contracts.PurchaseReturns;
using TexasAccountsPortal.Contracts.SalesReturns;
using TexasAccountsPortal.Contracts.Transactions;
using TexasAccountsPortal.Domain.Entities;
using TexasAccountsPortal.Domain.Enums;
using TexasAccountsPortal.Domain.Services;

using TexasAccountsPortal.Contracts.Notifications;

namespace TexasAccountsPortal.Infrastructure.Services
{
    public class SettlementApprovalService : ISettlementApprovalService
    {
        private readonly IAccountsDbContext _dbContext;
        private readonly ITransactionalExecutor _executor;
        private readonly ISalesPortalClient _salesPortalClient;
        private readonly IAccountingPostingService _glPostingService;
        private readonly IAccountingMappingProvider _mappingProvider;
        private readonly ILedgerNotificationService _ledgerNotificationService;
        private readonly IWalletNotificationService _walletNotificationService;
        private readonly IOutstandingNotificationService _outstandingNotificationService;

        public SettlementApprovalService(
            IAccountsDbContext dbContext,
            ITransactionalExecutor executor,
            ISalesPortalClient salesPortalClient,
            IAccountingPostingService glPostingService,
            IAccountingMappingProvider mappingProvider,
            ILedgerNotificationService ledgerNotificationService,
            IWalletNotificationService walletNotificationService,
            IOutstandingNotificationService outstandingNotificationService)
        {
            _dbContext = dbContext;
            _executor = executor;
            _salesPortalClient = salesPortalClient;
            _glPostingService = glPostingService;
            _mappingProvider = mappingProvider;
            _ledgerNotificationService = ledgerNotificationService;
            _walletNotificationService = walletNotificationService;
            _outstandingNotificationService = outstandingNotificationService;
        }

        // ─── Supplier Payout Approvals ───

        public async Task<SupplierPaymentResponse> ApproveSupplierPaymentAsync(
            long paymentId,
            long approvedBy,
            string? clientRowVersion,
            CancellationToken cancellationToken)
        {
            var response = await _executor.ExecuteInTransactionAsync(async (ct) =>
            {
                var payment = await _dbContext.SupplierPayments.FirstOrDefaultAsync(p => p.Id == paymentId, ct);
                if (payment == null)
                    throw new KeyNotFoundException("Supplier payment not found.");

                if (payment.Status != FinancialTransactionStatus.Pending)
                    throw new InvalidOperationException("Only pending supplier payments can be approved.");

                var approver = await _dbContext.FindAsync<AccountsUser>(new object[] { approvedBy }, ct);
                var serviceTypeLower = payment.ServiceType?.ToLowerInvariant() ?? "";
                bool isCreditSettlement = serviceTypeLower.Contains("credit");
                bool isWalletTopup = serviceTypeLower.Contains("wallet") || serviceTypeLower.Contains("advance");

                if ((isCreditSettlement || isWalletTopup) && string.IsNullOrEmpty(payment.ExternalReference))
                {
                    if (approver != null && !approver.IsMasterAccountant())
                    {
                        throw new InvalidOperationException("Only a Master Accountant can approve supplier credit settlements and wallet top-ups.");
                    }
                }

                // Validate RowVersion
                if (!string.IsNullOrEmpty(clientRowVersion))
                {
                    var base64ClientVersion = clientRowVersion.Trim('"');
                    var serverVersion = Convert.ToBase64String(payment.RowVersion);
                    if (serverVersion != base64ClientVersion)
                    {
                        throw new DbUpdateConcurrencyException("The supplier payment record was modified by another user. Please reload the page.");
                    }
                }

                var supplier = await _dbContext.FindAsync<Supplier>(new object[] { payment.SupplierId }, ct);
                if (supplier == null)
                    throw new KeyNotFoundException("Supplier not found.");

                // Apply Balances
                if (payment.Amount > 0)
                {
                    if (payment.PaymentMethod == PaymentMethod.Credit)
                    {
                        supplier.DebitWallet(payment.Amount);
                    }
                    else if (payment.PaymentMethod == PaymentMethod.Wallet)
                    {
                        supplier.DebitWallet(payment.Amount);
                    }
                    else
                    {
                        serviceTypeLower = payment.ServiceType?.ToLowerInvariant() ?? "";

                        if (serviceTypeLower.Equals("supplier_refund", StringComparison.OrdinalIgnoreCase) || serviceTypeLower.Equals("supplierrefund", StringComparison.OrdinalIgnoreCase) || serviceTypeLower.Contains("refund"))
                        {
                            // Incoming Refund: Money added to Cash/Bank, debited from Supplier Wallet
                            if (payment.SourceBankId.HasValue)
                            {
                                var bank = await _dbContext.FindAsync<Bank>(new object[] { payment.SourceBankId.Value }, ct);
                                if (bank == null) throw new KeyNotFoundException("Destination bank not found.");
                                bank.Credit(payment.Amount);
                            }
                            else if (payment.SourceAccountId.HasValue)
                            {
                                var account = await _dbContext.FindAsync<Account>(new object[] { payment.SourceAccountId.Value }, ct);
                                if (account == null) throw new KeyNotFoundException("Destination account not found.");
                                account.Credit(payment.Amount);
                            }
                            supplier.DebitWallet(payment.Amount);
                        }
                        else
                        {
                            // Outgoing Payment from Cash/Bank
                            if (payment.SourceBankId.HasValue)
                            {
                                var bank = await _dbContext.FindAsync<Bank>(new object[] { payment.SourceBankId.Value }, ct);
                                if (bank == null) throw new KeyNotFoundException("Source bank not found.");
                                if (bank.CurrentBalance < payment.Amount)
                                    throw new InvalidOperationException($"Insufficient balance in source bank '{bank.BankName}'. Available: {bank.CurrentBalance:N3} BHD.");
                                bank.Debit(payment.Amount);
                            }
                            else if (payment.SourceAccountId.HasValue)
                            {
                                var account = await _dbContext.FindAsync<Account>(new object[] { payment.SourceAccountId.Value }, ct);
                                if (account == null) throw new KeyNotFoundException("Source account not found.");
                                if (!account.HasSufficientBalance(payment.Amount))
                                    throw new InvalidOperationException($"Insufficient balance in source cash drawer '{account.Name}'. Available: {account.CurrentBalance:N3} BHD.");
                                account.Debit(payment.Amount);
                            }

                            // Cash/Bank payment to supplier (top-up, advance, or debt settlement) increases supplier wallet
                            supplier.CreditWallet(payment.Amount);
                        }
                    }
                }

                payment.Approve(approvedBy);

                if (payment.Amount > 0)
                {
                    if (!TransactionReferenceTypeParser.TryParse(payment.ServiceType, out var refType))
                    {
                        refType = TransactionReferenceType.SupplierPayment;
                    }

                    // Create Transaction record
                    var tx = FinancialTransaction.Create(
                        FinancialTransactionType.Outgoing,
                        payment.Amount,
                        payment.PaymentMethod,
                        payment.RequestedByUserId,
                        sourceAccountId: payment.SourceAccountId,
                        sourceBankId: payment.SourceBankId,
                        referenceType: refType,
                        referenceId: payment.ExternalReference,
                        description: payment.Description ?? $"Supplier Payout: {payment.ReferenceNumber}",
                        supplierId: payment.SupplierId,
                        supplierName: supplier.Name,
                        initialStatus: FinancialTransactionStatus.Pending
                    );
                    tx.Approve(approvedBy);

                    if (payment.SourceBankId.HasValue)
                    {
                        var bankObj = await _dbContext.FindAsync<Bank>(new object[] { payment.SourceBankId.Value }, ct);
                        if (bankObj != null) tx.BalanceAfter = bankObj.CurrentBalance;
                    }
                    else if (payment.SourceAccountId.HasValue)
                    {
                        var accObj = await _dbContext.FindAsync<Account>(new object[] { payment.SourceAccountId.Value }, ct);
                        if (accObj != null) tx.BalanceAfter = accObj.CurrentBalance;
                    }
                    _dbContext.Add(tx);

                    // Post GL Journal Entry
                    await PostToGlOnApprovalAsync(tx, ct);
                }

                // Audit Log
                var audit = new AuditLog
                {
                    ActorUserId = approvedBy,
                    Action = "supplier_payment.approved",
                    EntityType = "SupplierPayment",
                    EntityId = payment.Id.ToString(),
                    NewState = JsonSerializer.Serialize(payment),
                    CorrelationId = payment.CorrelationId ?? string.Empty
                };
                _dbContext.Add(audit);

                await _ledgerNotificationService.PublishLedgerChangedAsync(
                    referenceType: ReferenceTypes.SupplierPayment,
                    referenceId: payment.Id.ToString(),
                    supplierId: payment.SupplierId,
                    cancellationToken: ct);

                if (payment.PaymentMethod == PaymentMethod.Credit)
                {
                    await _walletNotificationService.PublishWalletChangedAsync(
                        referenceType: ReferenceTypes.SupplierPayment,
                        referenceId: payment.Id.ToString(),
                        ownerId: payment.SupplierId,
                        ownerType: "supplier",
                        cancellationToken: ct);
                }

                await _outstandingNotificationService.PublishOutstandingChangedAsync(
                    referenceType: ReferenceTypes.SupplierPayment,
                    referenceId: payment.Id.ToString(),
                    ownerId: payment.SupplierId,
                    ownerType: "supplier",
                    cancellationToken: ct);

                await _dbContext.SaveChangesAsync(ct);
                return MapToPaymentResponse(payment);
            }, cancellationToken);

            if (!string.IsNullOrWhiteSpace(response.ServiceType) && !string.IsNullOrWhiteSpace(response.ExternalReference))
            {
                try
                {
                    await _salesPortalClient.NotifySupplierPaymentApprovedAsync(response.ServiceType, response.ExternalReference, cancellationToken);
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"[SettlementApprovalService] Error notifying Sales Portal of approved supplier payment {paymentId}: {ex.Message}");
                }
            }

            return response;
        }

        public async Task<SupplierPaymentResponse> UpdateSupplierPaymentAsync(
            long paymentId,
            UpdateSupplierPaymentRequest request,
            long modifiedBy,
            CancellationToken cancellationToken)
        {
            var payment = await _dbContext.SupplierPayments.FirstOrDefaultAsync(p => p.Id == paymentId, cancellationToken);
            if (payment == null)
                throw new KeyNotFoundException("Supplier payment not found.");

            PaymentMethod? payMethod = null;
            long? sourceBankId = null;
            long? sourceAccountId = null;
            string? sourceType = null;

            if (!string.IsNullOrEmpty(request.PaymentMethod))
            {
                var pmStr = request.PaymentMethod;
                if (string.Equals(pmStr, "supplier_wallet", StringComparison.OrdinalIgnoreCase))
                    pmStr = "Wallet";

                if (Enum.TryParse<PaymentMethod>(pmStr, true, out var parsedMethod))
                    payMethod = parsedMethod;
                else
                    payMethod = PaymentMethod.BankTransfer;

                if (payMethod != PaymentMethod.Credit && payMethod != PaymentMethod.Wallet && !string.IsNullOrEmpty(request.SourceAccountId))
                {
                    if (request.SourceAccountId.StartsWith("bank_", StringComparison.OrdinalIgnoreCase))
                    {
                        if (long.TryParse(request.SourceAccountId.Substring(5), out var bankId))
                        {
                            sourceBankId = bankId;
                            sourceType = "bank";
                        }
                    }
                    else if (request.SourceAccountId.StartsWith("account_", StringComparison.OrdinalIgnoreCase))
                    {
                        if (long.TryParse(request.SourceAccountId.Substring(8), out var accId))
                        {
                            sourceAccountId = accId;
                            sourceType = "account";
                        }
                    }
                }
            }

            payment.UpdateDetails(
                request.Amount,
                request.SupplierId,
                request.ReferenceNumber,
                request.Description,
                payMethod,
                sourceType,
                sourceBankId,
                sourceAccountId);

            await _dbContext.SaveChangesAsync(cancellationToken);
            return MapToPaymentResponse(payment);
        }

        public async Task<SupplierPaymentResponse> RejectSupplierPaymentAsync(
            long paymentId,
            long rejectedBy,
            string? reason,
            CancellationToken cancellationToken)
        {
            return await _executor.ExecuteInTransactionAsync(async (ct) =>
            {
                var payment = await _dbContext.SupplierPayments.FirstOrDefaultAsync(p => p.Id == paymentId, ct);
                if (payment == null)
                    throw new KeyNotFoundException("Supplier payment not found.");

                if (payment.Status != FinancialTransactionStatus.Pending)
                    throw new InvalidOperationException("Only pending supplier payments can be rejected.");

                var rejector = await _dbContext.FindAsync<AccountsUser>(new object[] { rejectedBy }, ct);
                var serviceTypeLower = payment.ServiceType?.ToLowerInvariant() ?? "";
                bool isCreditSettlement = serviceTypeLower.Contains("credit");
                bool isWalletTopup = serviceTypeLower.Contains("wallet") || serviceTypeLower.Contains("advance");

                if ((isCreditSettlement || isWalletTopup) && string.IsNullOrEmpty(payment.ExternalReference))
                {
                    if (rejector != null && !rejector.IsMasterAccountant())
                    {
                        throw new InvalidOperationException("Only a Master Accountant can reject supplier credit settlements and wallet top-ups.");
                    }
                }

                payment.Reject(rejectedBy, reason);

                // Audit Log
                var audit = new AuditLog
                {
                    ActorUserId = rejectedBy,
                    Action = "supplier_payment.rejected",
                    EntityType = "SupplierPayment",
                    EntityId = payment.Id.ToString(),
                    NewState = JsonSerializer.Serialize(payment),
                    CorrelationId = payment.CorrelationId ?? string.Empty
                };
                _dbContext.Add(audit);

                await _dbContext.SaveChangesAsync(ct);
                return MapToPaymentResponse(payment);
            }, cancellationToken);
        }

        // ─── Purchase Return Approvals ───

        public async Task<PurchaseReturnResponse> ApprovePurchaseReturnAsync(
            long returnId,
            long approvedBy,
            string? clientRowVersion,
            CancellationToken cancellationToken)
        {
            return await _executor.ExecuteInTransactionAsync(async (ct) =>
            {
                var purchaseReturn = await _dbContext.PurchaseReturns.FirstOrDefaultAsync(p => p.Id == returnId, ct);
                if (purchaseReturn == null)
                    throw new KeyNotFoundException("Purchase return not found.");

                if (purchaseReturn.Status != FinancialTransactionStatus.Pending)
                    throw new InvalidOperationException("Only pending purchase returns can be approved.");

                // Validate RowVersion
                if (!string.IsNullOrEmpty(clientRowVersion))
                {
                    var base64ClientVersion = clientRowVersion.Trim('"');
                    var serverVersion = Convert.ToBase64String(purchaseReturn.RowVersion);
                    if (serverVersion != base64ClientVersion)
                    {
                        throw new DbUpdateConcurrencyException("The purchase return record was modified by another user. Please reload the page.");
                    }
                }

                var supplier = await _dbContext.FindAsync<Supplier>(new object[] { purchaseReturn.SupplierId }, ct);
                if (supplier == null)
                    throw new KeyNotFoundException("Supplier not found.");

                if (!TransactionReferenceTypeParser.TryParse(purchaseReturn.ServiceType, out var refType))
                {
                    refType = TransactionReferenceType.SupplierPayment;
                }

                var digitsOnlyPr = System.Text.RegularExpressions.Regex.Match(purchaseReturn.OriginalPurchaseReference ?? "", @"\d+").Value;

                // Sequence limits validation
                var totalApprovedBooking = await GetTotalApprovedSupplierPaymentsAsync(purchaseReturn.ServiceType, purchaseReturn.OriginalPurchaseReference, null, ct);
                var totalPurchaseReturnsBooking = await GetTotalApprovedPurchaseReturnsAsync(purchaseReturn.ServiceType, purchaseReturn.OriginalPurchaseReference, null, ct);

                var maxReturnableBooking = totalApprovedBooking - totalPurchaseReturnsBooking;
                if (purchaseReturn.Amount > maxReturnableBooking + 0.001m)
                    throw new InvalidOperationException($"Purchase Return Forbidden: Return amount ({purchaseReturn.Amount:N3}) exceeds total approved payments ({maxReturnableBooking:N3}) for this booking.");

                var totalApprovedSupplier = await GetTotalApprovedSupplierPaymentsAsync(purchaseReturn.ServiceType, purchaseReturn.OriginalPurchaseReference, purchaseReturn.SupplierId, ct);
                var totalPurchaseReturnsSupplier = await GetTotalApprovedPurchaseReturnsAsync(purchaseReturn.ServiceType, purchaseReturn.OriginalPurchaseReference, purchaseReturn.SupplierId, ct);

                var maxReturnableSupplier = totalApprovedSupplier - totalPurchaseReturnsSupplier;
                if (purchaseReturn.Amount > maxReturnableSupplier + 0.001m)
                    throw new InvalidOperationException($"Purchase Return Forbidden: Return amount ({purchaseReturn.Amount:N3}) exceeds total approved payments ({maxReturnableSupplier:N3}) for supplier '{supplier.Name}'.");

                // Apply Balances
                if (purchaseReturn.DestinationType != null && purchaseReturn.DestinationType.Equals("supplier_wallet", StringComparison.OrdinalIgnoreCase))
                {
                    supplier.CreditWallet(purchaseReturn.Amount);
                }
                else if (purchaseReturn.DestinationBankId.HasValue)
                {
                    var bank = await _dbContext.FindAsync<Bank>(new object[] { purchaseReturn.DestinationBankId.Value }, ct);
                    if (bank == null) throw new KeyNotFoundException("Destination bank not found.");
                    bank.Credit(purchaseReturn.Amount);
                }
                else if (purchaseReturn.DestinationAccountId.HasValue)
                {
                    var account = await _dbContext.FindAsync<Account>(new object[] { purchaseReturn.DestinationAccountId.Value }, ct);
                    if (account == null) throw new KeyNotFoundException("Destination account not found.");
                    account.Credit(purchaseReturn.Amount);
                }

                purchaseReturn.Approve(approvedBy);

                // Create transaction
                var payMethod = PaymentMethod.BankTransfer;
                if (purchaseReturn.DestinationType != null &&
                    (purchaseReturn.DestinationType.Equals("supplier_wallet", StringComparison.OrdinalIgnoreCase) ||
                     purchaseReturn.DestinationType.Equals("wallet", StringComparison.OrdinalIgnoreCase)))
                {
                    payMethod = PaymentMethod.Wallet;
                }
                else if (purchaseReturn.DestinationAccountId.HasValue)
                {
                    payMethod = PaymentMethod.Cash;
                }

                var tx = FinancialTransaction.Create(
                    FinancialTransactionType.PurchaseReturn,
                    purchaseReturn.Amount,
                    payMethod,
                    purchaseReturn.RequestedByUserId,
                    destinationAccountId: purchaseReturn.DestinationAccountId,
                    destinationBankId: purchaseReturn.DestinationBankId,
                    referenceType: refType,
                    referenceId: purchaseReturn.OriginalPurchaseReference,
                    description: $"Purchase Return: {purchaseReturn.Reason}",
                    supplierId: purchaseReturn.SupplierId,
                    supplierName: supplier.Name,
                    recipientType: RecipientType.Supplier,
                    recipientId: purchaseReturn.SupplierId,
                    initialStatus: FinancialTransactionStatus.Pending
                );
                tx.Approve(approvedBy);

                if (payMethod == PaymentMethod.Wallet)
                {
                    tx.BalanceAfter = supplier.Wallet;
                }
                else if (purchaseReturn.DestinationBankId.HasValue)
                {
                    var bankObj = await _dbContext.FindAsync<Bank>(new object[] { purchaseReturn.DestinationBankId.Value }, ct);
                    if (bankObj != null) tx.BalanceAfter = bankObj.CurrentBalance;
                }
                else if (purchaseReturn.DestinationAccountId.HasValue)
                {
                    var accObj = await _dbContext.FindAsync<Account>(new object[] { purchaseReturn.DestinationAccountId.Value }, ct);
                    if (accObj != null) tx.BalanceAfter = accObj.CurrentBalance;
                }
                _dbContext.Add(tx);

                // Post GL Journal Entry
                await PostToGlOnApprovalAsync(tx, ct);

                // Audit Log
                var audit = new AuditLog
                {
                    ActorUserId = approvedBy,
                    Action = "purchase_return.approved",
                    EntityType = "PurchaseReturn",
                    EntityId = purchaseReturn.Id.ToString(),
                    NewState = JsonSerializer.Serialize(purchaseReturn),
                    CorrelationId = purchaseReturn.CorrelationId ?? string.Empty
                };
                _dbContext.Add(audit);

                await _dbContext.SaveChangesAsync(ct);

                // Sync updated Net Supplier Cost (Total Payments - Total Purchase Returns) to Sales Portal
                return MapToPurchaseResponse(purchaseReturn);
            }, cancellationToken);
        }

        public async Task<PurchaseReturnResponse> RejectPurchaseReturnAsync(
            long returnId,
            long rejectedBy,
            string? reason,
            CancellationToken cancellationToken)
        {
            return await _executor.ExecuteInTransactionAsync(async (ct) =>
            {
                var purchaseReturn = await _dbContext.PurchaseReturns.FirstOrDefaultAsync(p => p.Id == returnId, ct);
                if (purchaseReturn == null)
                    throw new KeyNotFoundException("Purchase return not found.");

                if (purchaseReturn.Status != FinancialTransactionStatus.Pending)
                    throw new InvalidOperationException("Only pending purchase returns can be rejected.");

                purchaseReturn.Reject(rejectedBy, reason);

                // Audit Log
                var audit = new AuditLog
                {
                    ActorUserId = rejectedBy,
                    Action = "purchase_return.rejected",
                    EntityType = "PurchaseReturn",
                    EntityId = purchaseReturn.Id.ToString(),
                    NewState = JsonSerializer.Serialize(purchaseReturn),
                    CorrelationId = purchaseReturn.CorrelationId ?? string.Empty
                };
                _dbContext.Add(audit);

                await _dbContext.SaveChangesAsync(ct);
                return MapToPurchaseResponse(purchaseReturn);
            }, cancellationToken);
        }

        // ─── Sales Return Approvals ───

        public async Task<SalesReturnResponse> ApproveSalesReturnAsync(
            long returnId,
            long approvedBy,
            string? clientRowVersion,
            CancellationToken cancellationToken)
        {
            var pendingReturn = await _dbContext.SalesReturns.AsNoTracking().FirstOrDefaultAsync(s => s.Id == returnId, cancellationToken);
            if (pendingReturn == null)
                throw new KeyNotFoundException("Sales return not found.");

            var saleAmount = await _salesPortalClient.GetServiceSaleAmountAsync(pendingReturn.ServiceType ?? "flights", pendingReturn.OriginalSaleReference, cancellationToken);
            if (saleAmount <= 0)
                throw new InvalidOperationException("Sales Return Forbidden: Could not retrieve sale details, or selling price is zero.");

            return await _executor.ExecuteInTransactionAsync(async (ct) =>
            {
                var salesReturn = await _dbContext.SalesReturns.FirstOrDefaultAsync(s => s.Id == returnId, ct);
                if (salesReturn == null)
                    throw new KeyNotFoundException("Sales return not found.");

                if (salesReturn.Status != FinancialTransactionStatus.Pending)
                    throw new InvalidOperationException("Only pending sales returns can be approved.");

                // Validate RowVersion
                if (!string.IsNullOrEmpty(clientRowVersion))
                {
                    var base64ClientVersion = clientRowVersion.Trim('"');
                    var serverVersion = Convert.ToBase64String(salesReturn.RowVersion);
                    if (serverVersion != base64ClientVersion)
                    {
                        throw new DbUpdateConcurrencyException("The sales return record was modified by another user. Please reload the page.");
                    }
                }

                if (!TransactionReferenceTypeParser.TryParse(salesReturn.ServiceType, out var refType))
                {
                    refType = TransactionReferenceType.SupplierPayment;
                }

                var digitsOnlySr = System.Text.RegularExpressions.Regex.Match(salesReturn.OriginalSaleReference ?? "", @"\d+").Value;

                // Sequence limits validation
                var totalPurchaseReturns = await GetTotalApprovedPurchaseReturnsAsync(salesReturn.ServiceType, salesReturn.OriginalSaleReference, null, ct);

                if (totalPurchaseReturns <= 0)
                    throw new InvalidOperationException("Sales Return Forbidden: A purchase refund must be received from the supplier before refunding the customer.");

                var totalSalesReturns = await _dbContext.Transactions
                    .Where(t => t.ReferenceType == refType &&
                                t.ReferenceId == salesReturn.OriginalSaleReference &&
                                t.TransactionType == FinancialTransactionType.SalesReturn &&
                                t.Status == FinancialTransactionStatus.Approved)
                    .SumAsync(t => t.Amount, ct);

                var maxRefundable = saleAmount - totalSalesReturns;
                if (salesReturn.Amount > maxRefundable + 0.001m)
                    throw new InvalidOperationException($"Refund amount ({salesReturn.Amount:N3}) exceeds service sale balance ({maxRefundable:N3}).");

                // Apply Balances
                if (salesReturn.SourceBankId.HasValue)
                {
                    var bank = await _dbContext.FindAsync<Bank>(new object[] { salesReturn.SourceBankId.Value }, ct);
                    if (bank == null) throw new KeyNotFoundException("Source bank not found.");
                    if (bank.CurrentBalance < salesReturn.Amount)
                        throw new InvalidOperationException($"Insufficient balance in source bank '{bank.BankName}'. Available: {bank.CurrentBalance:N3} BHD.");
                    bank.Debit(salesReturn.Amount);
                }
                else if (salesReturn.SourceAccountId.HasValue)
                {
                    var account = await _dbContext.FindAsync<Account>(new object[] { salesReturn.SourceAccountId.Value }, ct);
                    if (account == null) throw new KeyNotFoundException("Source account not found.");
                    if (!account.HasSufficientBalance(salesReturn.Amount))
                        throw new InvalidOperationException($"Insufficient balance in source cash drawer '{account.Name}'. Available: {account.CurrentBalance:N3} BHD.");
                    account.Debit(salesReturn.Amount);
                }

                var agentExistsLocally = false;
                if (salesReturn.RecipientType == RecipientType.Agent)
                {
                    var agent = await _dbContext.FindAsync<Agent>(new object[] { salesReturn.RecipientId }, ct);
                    if (agent != null)
                    {
                        agent.CreditWallet(salesReturn.Amount);
                        agentExistsLocally = true;
                    }
                }

                salesReturn.Approve(approvedBy);

                // Create transaction
                var srPayMethod = PaymentMethod.BankTransfer;
                if (salesReturn.SourceAccountId.HasValue)
                {
                    srPayMethod = PaymentMethod.Cash;
                }
                else if (!salesReturn.SourceBankId.HasValue)
                {
                    srPayMethod = PaymentMethod.Wallet;
                }

                var tx = FinancialTransaction.Create(
                    FinancialTransactionType.SalesReturn,
                    salesReturn.Amount,
                    srPayMethod,
                    salesReturn.RequestedByUserId,
                    sourceAccountId: salesReturn.SourceAccountId,
                    sourceBankId: salesReturn.SourceBankId,
                    referenceType: refType,
                    referenceId: salesReturn.OriginalSaleReference,
                    description: $"Sales Return: {salesReturn.Reason}",
                    recipientType: salesReturn.RecipientType,
                    recipientId: salesReturn.RecipientId,
                    initialStatus: FinancialTransactionStatus.Pending
                );
                tx.Approve(approvedBy);

                if (salesReturn.SourceBankId.HasValue)
                {
                    var bankObj = await _dbContext.FindAsync<Bank>(new object[] { salesReturn.SourceBankId.Value }, ct);
                    if (bankObj != null) tx.BalanceAfter = bankObj.CurrentBalance;
                }
                else if (salesReturn.SourceAccountId.HasValue)
                {
                    var accObj = await _dbContext.FindAsync<Account>(new object[] { salesReturn.SourceAccountId.Value }, ct);
                    if (accObj != null) tx.BalanceAfter = accObj.CurrentBalance;
                }
                _dbContext.Add(tx);

                // Client refund syncing outbox
                if (!agentExistsLocally || salesReturn.RecipientType == RecipientType.Head)
                {
                    var creditPayload = new
                    {
                        HeadId = salesReturn.RecipientId,
                        Amount = salesReturn.Amount,
                        Reason = $"Sales Refund: {salesReturn.Reason}"
                    };
                    var creditOutbox = new OutboxMessage
                    {
                        MessageType = "CreditHeadWallet",
                        AggregateType = "SalesReturn",
                        AggregateId = salesReturn.Id.ToString(),
                        Payload = JsonSerializer.Serialize(creditPayload),
                        Status = "pending",
                        CorrelationId = salesReturn.CorrelationId ?? string.Empty,
                        AvailableAt = DateTime.UtcNow
                    };
                    _dbContext.Add(creditOutbox);
                }

                // Post GL Journal Entry
                await PostToGlOnApprovalAsync(tx, ct);

                // Audit Log
                var audit = new AuditLog
                {
                    ActorUserId = approvedBy,
                    Action = "sales_return.approved",
                    EntityType = "SalesReturn",
                    EntityId = salesReturn.Id.ToString(),
                    NewState = JsonSerializer.Serialize(salesReturn),
                    CorrelationId = salesReturn.CorrelationId ?? string.Empty
                };
                _dbContext.Add(audit);

                await _dbContext.SaveChangesAsync(ct);
                return MapToSalesResponse(salesReturn);
            }, cancellationToken);
        }

        public async Task<SalesReturnResponse> RejectSalesReturnAsync(
            long returnId,
            long rejectedBy,
            string? reason,
            CancellationToken cancellationToken)
        {
            return await _executor.ExecuteInTransactionAsync(async (ct) =>
            {
                var salesReturn = await _dbContext.SalesReturns.FirstOrDefaultAsync(s => s.Id == returnId, ct);
                if (salesReturn == null)
                    throw new KeyNotFoundException("Sales return not found.");

                if (salesReturn.Status != FinancialTransactionStatus.Pending)
                    throw new InvalidOperationException("Only pending sales returns can be rejected.");

                salesReturn.Reject(rejectedBy, reason);

                // Audit Log
                var audit = new AuditLog
                {
                    ActorUserId = rejectedBy,
                    Action = "sales_return.rejected",
                    EntityType = "SalesReturn",
                    EntityId = salesReturn.Id.ToString(),
                    NewState = JsonSerializer.Serialize(salesReturn),
                    CorrelationId = salesReturn.CorrelationId ?? string.Empty
                };
                _dbContext.Add(audit);

                await _dbContext.SaveChangesAsync(ct);
                return MapToSalesResponse(salesReturn);
            }, cancellationToken);
        }

        // ─── GL Journal Posting Helper ───

        private async Task PostToGlOnApprovalAsync(FinancialTransaction tx, CancellationToken ct)
        {
            return; // Chart of accounts is disabled/removed

            long debitAccountId = 0;
            long creditAccountId = 0;

            long cashAccountId = await _mappingProvider.GetAccountIdAsync(AccountingMappingKeys.CashOnHand, ct);
            long bankAccountId = await _mappingProvider.GetAccountIdAsync(AccountingMappingKeys.PrimaryBank, ct);

            long ResolveAssetAccount(long? sourceAccId, long? sourceBankId, string paymentMethod)
            {
                if (sourceAccId.HasValue) return cashAccountId;
                if (sourceBankId.HasValue) return bankAccountId;
                if (paymentMethod != null && paymentMethod.Contains("cash", StringComparison.OrdinalIgnoreCase)) return cashAccountId;
                return bankAccountId;
            }

            if (tx.TransactionType == FinancialTransactionType.Incoming)
            {
                debitAccountId = ResolveAssetAccount(tx.DestinationAccountId, tx.DestinationBankId, tx.PaymentMethod.ToString());

                if (tx.RecipientType == RecipientType.Agent)
                {
                    creditAccountId = await _mappingProvider.GetAccountIdAsync(AccountingMappingKeys.CustomerReceivable, ct);
                }
                else
                {
                    creditAccountId = await _mappingProvider.GetAccountIdAsync(AccountingMappingKeys.SalesReturnOffset, ct);
                }
            }
            else if (tx.TransactionType == FinancialTransactionType.Outgoing)
            {
                creditAccountId = ResolveAssetAccount(tx.SourceAccountId, tx.SourceBankId, tx.PaymentMethod.ToString());

                if (tx.SupplierId.HasValue || tx.ReferenceType == TransactionReferenceType.SupplierPayment)
                {
                    debitAccountId = await _mappingProvider.GetAccountIdAsync(AccountingMappingKeys.SupplierPayable, ct);
                }
                else if (tx.ReferenceType == TransactionReferenceType.Advance)
                {
                    debitAccountId = await _mappingProvider.GetAccountIdAsync(AccountingMappingKeys.StaffAdvanceReceivable, ct);
                }
                else if (tx.ReferenceType == TransactionReferenceType.Loan)
                {
                    debitAccountId = await _mappingProvider.GetAccountIdAsync(AccountingMappingKeys.StaffLoanReceivable, ct);
                }
                else
                {
                    debitAccountId = await _mappingProvider.GetAccountIdAsync(AccountingMappingKeys.DefaultExpense, ct);
                }
            }
            else if (tx.TransactionType == FinancialTransactionType.Contra)
            {
                debitAccountId = ResolveAssetAccount(tx.DestinationAccountId, tx.DestinationBankId, tx.PaymentMethod.ToString());
                creditAccountId = ResolveAssetAccount(tx.SourceAccountId, tx.SourceBankId, tx.PaymentMethod.ToString());
            }
            else if (tx.TransactionType == FinancialTransactionType.PurchaseReturn)
            {
                if (tx.RecipientType == RecipientType.Supplier && (tx.PaymentMethod == PaymentMethod.Credit || tx.PaymentMethod == PaymentMethod.Wallet))
                {
                    debitAccountId = await _mappingProvider.GetAccountIdAsync(AccountingMappingKeys.SupplierCreditControl, ct);
                }
                else
                {
                    debitAccountId = ResolveAssetAccount(tx.DestinationAccountId, tx.DestinationBankId, tx.PaymentMethod.ToString());
                }

                creditAccountId = await _mappingProvider.GetAccountIdAsync(AccountingMappingKeys.PurchaseReturnOffset, ct);
            }
            else if (tx.TransactionType == FinancialTransactionType.SalesReturn)
            {
                debitAccountId = await _mappingProvider.GetAccountIdAsync(AccountingMappingKeys.SalesReturnOffset, ct);

                if (tx.RecipientType == RecipientType.Agent || (!tx.SourceAccountId.HasValue && !tx.SourceBankId.HasValue))
                {
                    creditAccountId = await _mappingProvider.GetAccountIdAsync(AccountingMappingKeys.CustomerReceivable, ct);
                }
                else
                {
                    creditAccountId = ResolveAssetAccount(tx.SourceAccountId, tx.SourceBankId, tx.PaymentMethod.ToString());
                }
            }
            else
            {
                return;
            }

            var cleanGuid = Guid.NewGuid().ToString("N").Substring(0, 6).ToUpperInvariant();
            var journalNumber = $"JNL-SYS-{DateTime.UtcNow:yyyyMMdd}-{cleanGuid}";

            var lines = new List<PostJournalLineRequest>
            {
                new PostJournalLineRequest(AccountId: debitAccountId, Debit: tx.Amount, Credit: 0, LineNumber: 1, LineDescription: tx.Description ?? $"Debit line for txn {tx.Id}", SourceReference: tx.ReferenceId),
                new PostJournalLineRequest(AccountId: creditAccountId, Debit: 0, Credit: tx.Amount, LineNumber: 2, LineDescription: tx.Description ?? $"Credit line for txn {tx.Id}", SourceReference: tx.ReferenceId)
            };

            var postReq = new PostJournalRequest(
                JournalNumber: journalNumber,
                EntryDate: DateTime.UtcNow,
                Description: tx.Description ?? $"System Posting for Transaction {tx.Id}",
                SourceType: tx.TransactionType.ToString(),
                SourceId: tx.Id.ToString(),
                CorrelationId: Guid.NewGuid().ToString(),
                PostedByUserId: tx.CreatedBy,
                Reference: tx.ReferenceId,
                ReversalOfJournalEntryId: null,
                Lines: lines
            );

            await _glPostingService.PostJournalAsync(postReq, ct);
        }

        private static SupplierPaymentResponse MapToPaymentResponse(SupplierPayment s)
        {
            return new SupplierPaymentResponse(
                s.Id,
                s.SupplierId,
                s.Amount,
                s.Currency,
                s.PaymentMethod.ToString(),
                s.SourceType,
                s.SourceBankId,
                s.SourceAccountId,
                s.ReferenceNumber,
                s.ExternalReference,
                s.Description,
                s.Status.ToString(),
                s.RequestedByUserId,
                s.RequestedAt,
                s.ApprovedByUserId,
                s.ApprovedAt,
                s.RejectedByUserId,
                s.RejectedAt,
                s.RejectionReason,
                s.CorrelationId,
                s.CreatedAt,
                s.UpdatedAt,
                s.RowVersion != null ? Convert.ToBase64String(s.RowVersion) : null,
                ServiceType: s.ServiceType,
                DocumentNumber: s.DocumentNumber
            );
        }

        private static PurchaseReturnResponse MapToPurchaseResponse(PurchaseReturn r)
        {
            return new PurchaseReturnResponse(
                r.Id,
                r.DocumentNumber,
                r.SupplierId,
                r.OriginalPurchaseReference,
                r.ExternalReference,
                r.Amount,
                r.Currency,
                r.Reason,
                r.Status.ToString(),
                r.RequestedByUserId,
                null,
                r.RequestedAt,
                r.ApprovedByUserId,
                r.ApprovedAt,
                r.RejectedByUserId,
                r.RejectedAt,
                r.RejectionReason,
                r.CorrelationId,
                r.CreatedAt,
                r.UpdatedAt,
                r.RowVersion != null ? Convert.ToBase64String(r.RowVersion) : null
            );
        }

        private static SalesReturnResponse MapToSalesResponse(SalesReturn r)
        {
            return new SalesReturnResponse(
                r.Id,
                r.DocumentNumber,
                r.RecipientType.ToString(),
                r.RecipientId,
                r.OriginalSaleReference,
                r.ExternalReference,
                r.Amount,
                r.Currency,
                r.Reason,
                r.Status.ToString(),
                r.RequestedByUserId,
                null,
                r.RequestedAt,
                r.ApprovedByUserId,
                r.ApprovedAt,
                r.RejectedByUserId,
                r.RejectedAt,
                r.RejectionReason,
                r.CorrelationId,
                r.CreatedAt,
                r.UpdatedAt,
                r.RowVersion != null ? Convert.ToBase64String(r.RowVersion) : null
            );
        }

        private async Task<decimal> GetTotalApprovedPurchaseReturnsAsync(string? serviceType, string? serviceId, long? supplierId, CancellationToken ct)
        {
            var digitsOnly = System.Text.RegularExpressions.Regex.Match(serviceId ?? "", @"\d+").Value;
            TransactionReferenceTypeParser.TryParse(serviceType, out var refType);

            // 1. Sum from PurchaseReturns table
            var prList = await _dbContext.PurchaseReturns
                .Where(p => p.Status == FinancialTransactionStatus.Approved)
                .ToListAsync(ct);

            var sumFromPr = prList
                .Where(p => (!supplierId.HasValue || supplierId.Value <= 0 || p.SupplierId == supplierId.Value) &&
                            IsServiceTypeMatch(p.ServiceType, serviceType) &&
                            (IsReferenceMatch(p.OriginalPurchaseReference, serviceId, digitsOnly) ||
                             IsReferenceMatch(p.ExternalReference, serviceId, digitsOnly)))
                .Sum(p => p.Amount);

            // 2. Sum from Transactions table
            var txList = await _dbContext.Transactions
                .Where(t => t.TransactionType == FinancialTransactionType.PurchaseReturn &&
                            t.Status == FinancialTransactionStatus.Approved)
                .ToListAsync(ct);

            var sumFromTx = txList
                .Where(t => (!supplierId.HasValue || supplierId.Value <= 0 || t.SupplierId == supplierId.Value) &&
                            (t.ReferenceType == refType || t.ReferenceType == TransactionReferenceType.SupplierPayment || IsServiceTypeMatch(t.ReferenceType?.ToString(), serviceType)) &&
                            IsReferenceMatch(t.ReferenceId, serviceId, digitsOnly))
                .Sum(p => p.Amount);

            return Math.Max(sumFromPr, sumFromTx);
        }

        private async Task<decimal> GetTotalApprovedSupplierPaymentsAsync(string? serviceType, string? serviceId, long? supplierId, CancellationToken ct)
        {
            var digitsOnly = System.Text.RegularExpressions.Regex.Match(serviceId ?? "", @"\d+").Value;
            TransactionReferenceTypeParser.TryParse(serviceType, out var refType);

            // 1. Sum from SupplierPayments table
            var spList = await _dbContext.SupplierPayments
                .Where(p => p.Status == FinancialTransactionStatus.Approved)
                .ToListAsync(ct);

            var sumFromSp = spList
                .Where(p => (!supplierId.HasValue || supplierId.Value <= 0 || p.SupplierId == supplierId.Value) &&
                            IsServiceTypeMatch(p.ServiceType, serviceType) &&
                            (IsReferenceMatch(p.ExternalReference, serviceId, digitsOnly) ||
                             IsReferenceMatch(p.ReferenceNumber, serviceId, digitsOnly)))
                .Sum(p => p.Amount);

            // 2. Sum from Transactions table
            var txList = await _dbContext.Transactions
                .Where(t => t.TransactionType == FinancialTransactionType.Outgoing &&
                            t.Status == FinancialTransactionStatus.Approved)
                .ToListAsync(ct);

            var sumFromTx = txList
                .Where(t => (!supplierId.HasValue || supplierId.Value <= 0 || t.SupplierId == supplierId.Value) &&
                            (t.ReferenceType == refType || t.ReferenceType == TransactionReferenceType.SupplierPayment || IsServiceTypeMatch(t.ReferenceType?.ToString(), serviceType)) &&
                            IsReferenceMatch(t.ReferenceId, serviceId, digitsOnly))
                .Sum(p => p.Amount);

            return Math.Max(sumFromSp, sumFromTx);
        }

        private static bool IsServiceTypeMatch(string? type1, string? type2)
        {
            if (string.IsNullOrWhiteSpace(type1) || string.IsNullOrWhiteSpace(type2)) return true;
            var norm1 = type1.Trim().ToLowerInvariant();
            var norm2 = type2.Trim().ToLowerInvariant();

            if (norm1.Contains("govt") || norm1.Contains("government") || norm1.Contains("supplier_payment") || norm1.Contains("supplierpayment") || norm1.Contains("supplier_wallet") || norm1.Contains("supplier_credit") || norm1.Contains("supplier_advance") || norm1.Contains("fee")) return true;
            if (norm2.Contains("govt") || norm2.Contains("government") || norm2.Contains("supplier_payment") || norm2.Contains("supplierpayment") || norm2.Contains("supplier_wallet") || norm2.Contains("supplier_credit") || norm2.Contains("supplier_advance") || norm2.Contains("fee")) return true;

            if (norm1.Contains("visa") && norm2.Contains("visa")) return true;
            if (norm1.Contains("flight") && norm2.Contains("flight")) return true;
            if (norm1.Contains("hotel") && norm2.Contains("hotel")) return true;
            if (norm1.Contains("holiday") && norm2.Contains("holiday")) return true;
            if (norm1.Contains("transport") && norm2.Contains("transport")) return true;
            if (norm1.Contains("vfs") && norm2.Contains("vfs")) return true;
            if (norm1.Contains("other") && norm2.Contains("other")) return true;

            return norm1.Equals(norm2, StringComparison.OrdinalIgnoreCase);
        }

        private static bool IsReferenceMatch(string? ref1, string? ref2, string digitsOnly)
        {
            if (string.IsNullOrWhiteSpace(ref1) || string.IsNullOrWhiteSpace(ref2)) return false;
            var r1 = ref1.Trim();
            var r2 = ref2.Trim();
            if (string.Equals(r1, r2, StringComparison.OrdinalIgnoreCase)) return true;

            var digits1 = System.Text.RegularExpressions.Regex.Match(r1, @"\d+").Value;
            var digits2 = System.Text.RegularExpressions.Regex.Match(r2, @"\d+").Value;

            if (!string.IsNullOrEmpty(digits1) && !string.IsNullOrEmpty(digits2))
            {
                if (long.TryParse(digits1, out var num1) && long.TryParse(digits2, out var num2))
                {
                    if (num1 == num2) return true;
                }
                else if (digits1.Equals(digits2, StringComparison.OrdinalIgnoreCase))
                {
                    return true;
                }
            }

            if (!string.IsNullOrEmpty(digitsOnly))
            {
                if (r1.Contains(digitsOnly, StringComparison.OrdinalIgnoreCase) || r2.Contains(digitsOnly, StringComparison.OrdinalIgnoreCase))
                    return true;
            }
            return false;
        }
    }
}

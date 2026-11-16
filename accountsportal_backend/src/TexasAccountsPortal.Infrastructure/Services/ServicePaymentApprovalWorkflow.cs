using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Contracts.Transactions;
using TexasAccountsPortal.Domain.Entities;
using TexasAccountsPortal.Domain.Enums;
using TexasAccountsPortal.Infrastructure.Data;

namespace TexasAccountsPortal.Infrastructure.Services
{
    public class ServicePaymentApprovalWorkflow : IServicePaymentApprovalWorkflow
    {
        private readonly IDbContextFactory<AccountsDbContext> _dbContextFactory;
        private readonly IFinancialPostingService _postingService;
        private readonly IPaymentMethodResolver _paymentMethodResolver;
        private readonly IDestinationAccountResolver _destinationResolver;
        private readonly ITransactionalExecutor _executor;
        private readonly ILogger<ServicePaymentApprovalWorkflow> _logger;

        public ServicePaymentApprovalWorkflow(
            IDbContextFactory<AccountsDbContext> dbContextFactory,
            IFinancialPostingService postingService,
            IPaymentMethodResolver paymentMethodResolver,
            IDestinationAccountResolver destinationResolver,
            ITransactionalExecutor executor,
            ILogger<ServicePaymentApprovalWorkflow> logger)
        {
            _dbContextFactory = dbContextFactory ?? throw new ArgumentNullException(nameof(dbContextFactory));
            _postingService = postingService ?? throw new ArgumentNullException(nameof(postingService));
            _paymentMethodResolver = paymentMethodResolver ?? throw new ArgumentNullException(nameof(paymentMethodResolver));
            _destinationResolver = destinationResolver ?? throw new ArgumentNullException(nameof(destinationResolver));
            _executor = executor ?? throw new ArgumentNullException(nameof(executor));
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        }

        public async Task ExecuteApprovalWorkflowAsync(
            ProcessServicePaymentApprovalRequest request,
            CancellationToken cancellationToken = default)
        {
            _logger.LogInformation(
                "Payment approval workflow started for ServiceType {ServiceType}, BookingId {BookingId}, Status {Status}",
                request.ServiceType, request.BookingId, request.Status);

            using var dbContext = await _dbContextFactory.CreateDbContextAsync(cancellationToken);

            await _executor.ExecuteInTransactionAsync<bool>(async (ct) =>
            {
                var refIdStr = request.BookingId.ToString();
                var normalizedRefType = NormalizeReferenceType(request.ServiceType);

                var existingTxns = await dbContext.Transactions
                    .Where(t => (t.ReferenceId == refIdStr || (request.ExplicitReferenceId != null && t.ReferenceId == request.ExplicitReferenceId)) 
                                && t.ReferenceType != null)
                    .ToListAsync(cancellationToken);

                var pendingTxn = existingTxns.FirstOrDefault(t => 
                    t.Status == FinancialTransactionStatus.Pending && 
                    (string.Equals(t.ReferenceType?.ToString(), normalizedRefType, StringComparison.OrdinalIgnoreCase) ||
                     string.Equals(t.ReferenceType?.ToString(), "Sale", StringComparison.OrdinalIgnoreCase) ||
                     string.Equals(t.ReferenceType?.ToString(), request.ServiceType, StringComparison.OrdinalIgnoreCase)));

                var approvedTxn = existingTxns.FirstOrDefault(t => 
                    t.Status == FinancialTransactionStatus.Approved && 
                    (string.Equals(t.ReferenceType?.ToString(), normalizedRefType, StringComparison.OrdinalIgnoreCase) ||
                     string.Equals(t.ReferenceType?.ToString(), "Sale", StringComparison.OrdinalIgnoreCase) ||
                     string.Equals(t.ReferenceType?.ToString(), request.ServiceType, StringComparison.OrdinalIgnoreCase)));

                if (approvedTxn != null && string.Equals(request.Status, "success", StringComparison.OrdinalIgnoreCase))
                {
                    _logger.LogInformation(
                        "Payment for {ServiceType} #{BookingId} is already approved in transaction #{TxId}. Idempotent completion.",
                        request.ServiceType, request.BookingId, approvedTxn.Id);
                    return true;
                }

                if (string.Equals(request.Status, "success", StringComparison.OrdinalIgnoreCase))
                {
                    var payMethod = _paymentMethodResolver.ResolvePaymentMethod(request.RawPaymentMethod);

                    if (payMethod == PaymentMethod.Credit || payMethod == PaymentMethod.Wallet)
                    {
                        _logger.LogInformation(
                            "Payment for {ServiceType} #{BookingId} is Credit/Wallet (payment_method: {RawMethod}). Skipping bank/cash account balance increment.",
                            request.ServiceType, request.BookingId, request.RawPaymentMethod);

                        if (pendingTxn != null)
                        {
                            _logger.LogInformation(
                                "Skipping approval of pending transaction #{TxId} for credit booking {ServiceType} #{BookingId} to prevent cash/bank account balance increment",
                                pendingTxn.Id, request.ServiceType, request.BookingId);
                        }
                    }
                    else
                    {
                        var resolvedDestination = await _destinationResolver.ResolveDestinationAccountAsync(
                            payMethod,
                            request.ExplicitCashAccountId,
                            request.RawBankId,
                            dbContext,
                            cancellationToken);

                        _logger.LogInformation(
                            "Destination resolved for {ServiceType} #{BookingId}: CashId={CashId}, BankId={BankId}",
                            request.ServiceType, request.BookingId, resolvedDestination.CashAccountId, resolvedDestination.BankId);

                        if (pendingTxn != null)
                        {
                            if (!pendingTxn.DestinationAccountId.HasValue && !pendingTxn.DestinationBankId.HasValue)
                            {
                                pendingTxn.SetDestinationAccount(resolvedDestination.CashAccountId, resolvedDestination.BankId);
                            }

                            if (!pendingTxn.ReferenceType.HasValue && Domain.Services.TransactionReferenceTypeParser.TryParse(request.ServiceType, out var parsedType))
                            {
                                pendingTxn.SetReferenceType(parsedType);
                            }

                            if (!string.IsNullOrWhiteSpace(request.ExplicitReferenceId))
                            {
                                pendingTxn.SetReferenceId(request.ExplicitReferenceId.Trim());
                            }

                            await dbContext.SaveChangesAsync(cancellationToken);

                            _logger.LogInformation(
                                "Approving existing pending transaction #{TxId} for {ServiceType} #{BookingId}",
                                pendingTxn.Id, request.ServiceType, request.BookingId);

                            await _postingService.ApproveTransactionAsync(pendingTxn.Id, request.ApprovedByUserId, cancellationToken);
                        }
                        else
                        {
                            var idempotencyKey = $"payment-approval-{normalizedRefType}-{request.BookingId}";
                            var isAgent = string.Equals(request.ClientType, "agent", StringComparison.OrdinalIgnoreCase);

                            var refDisplay = !string.IsNullOrWhiteSpace(request.ExplicitReferenceId) ? request.ExplicitReferenceId.Trim() : refIdStr;
                            var formattedRef = (refDisplay.StartsWith("TX", StringComparison.OrdinalIgnoreCase) || refDisplay.StartsWith("#")) ? refDisplay : $"#{refDisplay}";

                            var transactionRequest = new CreateIncomingTransactionRequest(
                                DestinationAccountId: resolvedDestination.CashAccountId,
                                DestinationBankId: resolvedDestination.BankId,
                                Amount: request.PayableAmount,
                                PaymentMethod: payMethod == PaymentMethod.Cash ? "cash" : "bank",
                                ReferenceType: request.ServiceType,
                                ReferenceId: refDisplay,
                                Description: $"Payment approved for {request.ServiceType} {formattedRef}",
                                RecipientType: isAgent ? "Agent" : "Head",
                                RecipientId: isAgent ? request.AgentId : request.HeadId
                            );

                            _logger.LogInformation(
                                "Posting new incoming transaction for {ServiceType} #{BookingId} with idempotency key {Key}",
                                request.ServiceType, request.BookingId, idempotencyKey);

                            await _postingService.PostIncomingTransactionAsync(
                                transactionRequest,
                                request.ApprovedByUserId,
                                idempotencyKey,
                                ReceiptOrigin.ClientWallet,
                                cancellationToken);
                        }
                    }
                }
                else if (string.Equals(request.Status, "failed", StringComparison.OrdinalIgnoreCase) ||
                         string.Equals(request.Status, "rejected", StringComparison.OrdinalIgnoreCase))
                {
                    if (pendingTxn != null)
                    {
                        _logger.LogInformation(
                            "Rejecting pending transaction #{TxId} for {ServiceType} #{BookingId}",
                            pendingTxn.Id, request.ServiceType, request.BookingId);

                        await _postingService.RejectTransactionAsync(
                            pendingTxn.Id,
                            request.ApprovedByUserId,
                            "Payment rejected by Accountant",
                            cancellationToken);
                    }
                }

                return true;
            }, cancellationToken);

            _logger.LogInformation(
                "Payment approval workflow completed successfully for {ServiceType} #{BookingId}",
                request.ServiceType, request.BookingId);
        }

        private static string NormalizeReferenceType(string serviceType)
        {
            if (string.IsNullOrWhiteSpace(serviceType)) return string.Empty;

            var norm = serviceType.Trim().ToLowerInvariant();
            return norm switch
            {
                "visa" => "Visa",
                "flights" or "flight" => "Flight",
                "hotels" or "hotel" => "Hotel",
                "holidays" or "holiday" or "holidaypackage" => "HolidayPackage",
                "transportation" or "transport" => "Transportation",
                "vfs" or "vfsappointment" => "VfsAppointment",
                "otherservices" or "otherservice" or "other" => "OtherServices",
                _ => serviceType
            };
        }
    }
}

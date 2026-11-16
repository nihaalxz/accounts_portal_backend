using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Contracts.PurchaseReturns;
using TexasAccountsPortal.Contracts.SalesReturns;
using TexasAccountsPortal.Contracts.SupplierPayments;
using TexasAccountsPortal.Domain.Entities;
using TexasAccountsPortal.Domain.Enums;
using TexasAccountsPortal.Domain.Services;

namespace TexasAccountsPortal.Infrastructure.Services
{
    public class SettlementService : ISettlementService
    {
        private readonly IAccountsDbContext _dbContext;
        private readonly ISalesPortalClient _salesPortalClient;
        private readonly IDocumentNumberGenerator _documentNumberGenerator;
        private readonly ISettlementApprovalService _approvalService;
        private readonly ITransactionalExecutor _executor;
        private readonly IIdempotencyRecoveryStore _recoveryStore;

        public SettlementService(
            IAccountsDbContext dbContext,
            ISalesPortalClient salesPortalClient,
            IDocumentNumberGenerator documentNumberGenerator,
            ISettlementApprovalService approvalService,
            ITransactionalExecutor executor,
            IIdempotencyRecoveryStore recoveryStore)
        {
            _dbContext = dbContext ?? throw new ArgumentNullException(nameof(dbContext));
            _salesPortalClient = salesPortalClient ?? throw new ArgumentNullException(nameof(salesPortalClient));
            _documentNumberGenerator = documentNumberGenerator ?? throw new ArgumentNullException(nameof(documentNumberGenerator));
            _approvalService = approvalService ?? throw new ArgumentNullException(nameof(approvalService));
            _executor = executor ?? throw new ArgumentNullException(nameof(executor));
            _recoveryStore = recoveryStore ?? throw new ArgumentNullException(nameof(recoveryStore));
        }

        public async Task<IEnumerable<SupplierPaymentResponse>> GetSupplierPaymentsAsync(
            string? status,
            long? supplierId,
            CancellationToken cancellationToken)
        {
            var query = _dbContext.SupplierPayments.AsNoTracking();

            if (supplierId.HasValue)
                query = query.Where(p => p.SupplierId == supplierId.Value);

            if (!string.IsNullOrWhiteSpace(status) && Enum.TryParse<FinancialTransactionStatus>(status, true, out var parsedStatus))
                query = query.Where(p => p.Status == parsedStatus);

            var items = await query.OrderByDescending(p => p.CreatedAt).ToListAsync(cancellationToken);

            var userIds = items.Select(i => i.RequestedByUserId).Distinct().ToList();
            var users = await _dbContext.Users
                .AsNoTracking()
                .Where(u => userIds.Contains(u.Id))
                .ToDictionaryAsync(u => u.Id, u => u.Name, cancellationToken);

            return items.Select(p => MapToPaymentResponse(p,
                users.TryGetValue(p.RequestedByUserId, out var creator) ? creator : null));
        }

        public async Task<IEnumerable<PurchaseReturnResponse>> GetPurchaseReturnsAsync(
            string? status,
            long? supplierId,
            CancellationToken cancellationToken)
        {
            var query = _dbContext.PurchaseReturns.AsNoTracking();

            if (supplierId.HasValue)
                query = query.Where(p => p.SupplierId == supplierId.Value);

            if (!string.IsNullOrWhiteSpace(status) && Enum.TryParse<FinancialTransactionStatus>(status, true, out var parsedStatus))
                query = query.Where(p => p.Status == parsedStatus);

            var items = await query.OrderByDescending(p => p.CreatedAt).ToListAsync(cancellationToken);

            var userIds = items.Select(i => i.RequestedByUserId).Distinct().ToList();
            var users = await _dbContext.Users
                .AsNoTracking()
                .Where(u => userIds.Contains(u.Id))
                .ToDictionaryAsync(u => u.Id, u => u.Name, cancellationToken);

            return items.Select(p => MapToPurchaseResponse(p,
                users.TryGetValue(p.RequestedByUserId, out var creator) ? creator : null));
        }

        public async Task<IEnumerable<SalesReturnResponse>> GetSalesReturnsAsync(
            string? status,
            CancellationToken cancellationToken)
        {
            var query = _dbContext.SalesReturns.AsNoTracking();

            if (!string.IsNullOrWhiteSpace(status) && Enum.TryParse<FinancialTransactionStatus>(status, true, out var parsedStatus))
                query = query.Where(p => p.Status == parsedStatus);

            var items = await query.OrderByDescending(p => p.CreatedAt).ToListAsync(cancellationToken);

            var userIds = items.Select(i => i.RequestedByUserId).Distinct().ToList();
            var users = await _dbContext.Users
                .AsNoTracking()
                .Where(u => userIds.Contains(u.Id))
                .ToDictionaryAsync(u => u.Id, u => u.Name, cancellationToken);

            return items.Select(p => MapToSalesResponse(p,
                users.TryGetValue(p.RequestedByUserId, out var creator) ? creator : null));
        }

        public async Task<SupplierPaymentResponse> PostSupplierPaymentAsync(
            CreateSupplierPaymentRequest request,
            long createdBy,
            string idempotencyKey,
            CancellationToken cancellationToken)
        {
            var payload = JsonSerializer.Serialize(request);
            return await HandleIdempotentCommandAsync("supplier-payment", idempotencyKey, payload, async () =>
            {
                if (!string.IsNullOrEmpty(request.ServiceType) && !string.IsNullOrEmpty(request.ExternalReference))
                {
                    if (long.TryParse(request.ExternalReference, out var bookingId))
                    {
                        var (_, isCompleted, _, _) = await GetBookingSupplierDetailsAsync(request.ServiceType, bookingId, cancellationToken);
                        if (isCompleted)
                            throw new InvalidOperationException("Supplier Payment Forbidden: This booking service has been marked as completed.");
                    }
                }

                return await _executor.ExecuteInTransactionAsync(async (ct) =>
                {
                    var supplier = await _dbContext.FindAsync<Supplier>(new object[] { request.SupplierId }, ct);
                    if (supplier == null)
                        throw new KeyNotFoundException("Supplier not found.");

                    var user = await _dbContext.FindAsync<AccountsUser>(new object[] { createdBy }, ct);
                    if (user == null)
                        throw new KeyNotFoundException("User not found.");

                    var pmStr = request.PaymentMethod;
                    if (string.Equals(pmStr, "supplier_wallet", StringComparison.OrdinalIgnoreCase))
                        pmStr = "Wallet";

                    if (!Enum.TryParse<PaymentMethod>(pmStr, true, out var payMethod))
                        payMethod = PaymentMethod.BankTransfer;

                    long? sourceBankId = null;
                    long? sourceAccountId = null;
                    string? sourceType = null;

                    if (request.Amount < 0)
                        throw new InvalidOperationException("Payment amount cannot be negative.");

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
                    else if (payMethod != PaymentMethod.Credit && request.Amount > 0)
                    {
                        if (sourceBankId.HasValue)
                        {
                            var bank = await _dbContext.FindAsync<Bank>(new object[] { sourceBankId.Value }, ct);
                            if (bank == null) throw new KeyNotFoundException("Source bank not found.");
                            if (bank.CurrentBalance < request.Amount)
                                throw new InvalidOperationException($"Insufficient balance in source bank '{bank.BankName}'. Available: {bank.CurrentBalance:N3} BHD.");
                        }
                        else if (sourceAccountId.HasValue)
                        {
                            var account = await _dbContext.FindAsync<Account>(new object[] { sourceAccountId.Value }, ct);
                            if (account == null) throw new KeyNotFoundException("Source account not found.");
                            if (!account.HasSufficientBalance(request.Amount))
                                throw new InvalidOperationException($"Insufficient balance in source cash drawer '{account.Name}'. Available: {account.CurrentBalance:N3} BHD.");
                        }
                    }

                    var correlationId = Guid.NewGuid().ToString();
                    var docNo = await _documentNumberGenerator.GenerateDocumentNumberAsync("TXSPAY", "Seq_SupplierPaymentDocNo", ct);

                    var payment = SupplierPayment.Create(
                        request.SupplierId,
                        request.Amount,
                        payMethod,
                        createdBy,
                        sourceBankId,
                        sourceAccountId,
                        sourceType,
                        request.ReferenceNumber,
                        request.ExternalReference,
                        TransactionReferenceTypeParser.Normalize(request.ServiceType)?.ToString() ?? request.ServiceType,
                        request.Description,
                        correlationId,
                        FinancialTransactionStatus.Pending
                    );
                    payment.DocumentNumber = docNo;

                    _dbContext.Add(payment);
                    await _dbContext.SaveChangesAsync(ct);

                    var sType = request.ServiceType?.ToLowerInvariant() ?? "";
                    bool isIndividualService = !string.IsNullOrWhiteSpace(request.ServiceType) && !string.IsNullOrWhiteSpace(request.ExternalReference);

                    bool shouldAutoApprove = user.IsMasterAccountant()
                                          || payMethod == PaymentMethod.Credit
                                          || isIndividualService;

                    if (shouldAutoApprove)
                    {
                        return await _approvalService.ApproveSupplierPaymentAsync(payment.Id, createdBy, null, ct);
                    }

                    return MapToPaymentResponse(payment, user.Name);
                }, cancellationToken);
            }, cancellationToken);
        }

        public async Task<PurchaseReturnResponse> PostPurchaseReturnAsync(
            CreatePurchaseReturnRequest request,
            long createdBy,
            string idempotencyKey,
            CancellationToken cancellationToken)
        {
            var payload = JsonSerializer.Serialize(request);
            return await HandleIdempotentCommandAsync("purchase-return", idempotencyKey, payload, async () =>
            {
                return await _executor.ExecuteInTransactionAsync(async (ct) =>
                {
                    var supplier = await _dbContext.FindAsync<Supplier>(new object[] { request.SupplierId }, ct);
                    if (supplier == null)
                        throw new KeyNotFoundException("Supplier not found.");

                    var user = await _dbContext.FindAsync<AccountsUser>(new object[] { createdBy }, ct);
                    if (user == null)
                        throw new KeyNotFoundException("User not found.");

                    var totalApproved = await GetTotalApprovedSupplierPaymentsAsync(request.ServiceType, request.OriginalPurchaseReference, null, ct);
                    if (totalApproved <= 0)
                        throw new InvalidOperationException("Purchase Return Forbidden: You must process and approve at least one supplier payment before recording a return.");

                    var totalPurchaseReturns = await GetTotalApprovedPurchaseReturnsAsync(request.ServiceType, request.OriginalPurchaseReference, null, ct);
                    var maxReturnable = totalApproved - totalPurchaseReturns;
                    if (request.Amount > maxReturnable + 0.001m)
                        throw new InvalidOperationException($"Purchase Return Forbidden: Return amount ({request.Amount:N3}) exceeds remaining refundable paid balance ({maxReturnable:N3}) for this booking.");

                    var totalApprovedSupplier = await GetTotalApprovedSupplierPaymentsAsync(request.ServiceType, request.OriginalPurchaseReference, request.SupplierId, ct);
                    if (totalApprovedSupplier <= 0)
                        throw new InvalidOperationException($"Purchase Return Forbidden: No approved payments found for supplier '{supplier.Name}'.");

                    var totalPurchaseReturnsSupplier = await GetTotalApprovedPurchaseReturnsAsync(request.ServiceType, request.OriginalPurchaseReference, request.SupplierId, ct);
                    var maxReturnableSupplier = totalApprovedSupplier - totalPurchaseReturnsSupplier;
                    if (request.Amount > maxReturnableSupplier + 0.001m)
                        throw new InvalidOperationException($"Purchase Return Forbidden: Return amount ({request.Amount:N3}) exceeds remaining refundable paid balance ({maxReturnableSupplier:N3}) for supplier '{supplier.Name}'.");

                    // Purchase returns are wallet-only going forward
                    if (string.Equals(request.DestinationType, "bank", StringComparison.OrdinalIgnoreCase) ||
                        string.Equals(request.DestinationType, "account", StringComparison.OrdinalIgnoreCase) ||
                        string.Equals(request.DestinationType, "cash", StringComparison.OrdinalIgnoreCase) ||
                        request.DestinationId?.StartsWith("bank_", StringComparison.OrdinalIgnoreCase) == true ||
                        request.DestinationId?.StartsWith("account_", StringComparison.OrdinalIgnoreCase) == true)
                    {
                        throw new InvalidOperationException("Purchase returns are credited to the supplier wallet.");
                    }

                    long? destBankId = null;
                    long? destAccountId = null;
                    string destType = "supplier_wallet";

                    var correlationId = Guid.NewGuid().ToString();
                    var docNo = await _documentNumberGenerator.GenerateDocumentNumberAsync("TXSPR", "Seq_PurchaseReturnDocNo", ct);
                    var canonicalServiceType = TransactionReferenceTypeParser.Normalize(request.ServiceType)?.ToString() ?? request.ServiceType;

                    var returnEntity = PurchaseReturn.Create(
                        request.SupplierId,
                        request.OriginalPurchaseReference ?? string.Empty,
                        request.Amount,
                        request.Reason,
                        createdBy,
                        destType,
                        destBankId,
                        destAccountId,
                        canonicalServiceType,
                        request.OriginalPurchaseReference,
                        correlationId,
                        FinancialTransactionStatus.Pending
                    );
                    returnEntity.DocumentNumber = docNo;

                    _dbContext.Add(returnEntity);
                    await _dbContext.SaveChangesAsync(ct);

                    if (user.IsMasterAccountant())
                    {
                        return await _approvalService.ApprovePurchaseReturnAsync(returnEntity.Id, createdBy, null, ct);
                    }

                    return MapToPurchaseResponse(returnEntity, user.Name);
                }, cancellationToken);
            }, cancellationToken);
        }

        public async Task<SalesReturnResponse> PostSalesReturnAsync(
            CreateSalesReturnRequest request,
            long createdBy,
            string idempotencyKey,
            CancellationToken cancellationToken)
        {
            var payload = JsonSerializer.Serialize(request);
            return await HandleIdempotentCommandAsync("sales-return", idempotencyKey, payload, async () =>
            {
                return await _executor.ExecuteInTransactionAsync(async (ct) =>
                {
                    var user = await _dbContext.FindAsync<AccountsUser>(new object[] { createdBy }, ct);
                    if (user == null)
                        throw new KeyNotFoundException("User not found.");

                    // --- Sales Return cap: validate amount is positive ---
                    if (request.Amount <= 0)
                        throw new InvalidOperationException("Sales Return Forbidden: Return amount must be greater than zero.");

                    // --- Sales Return ceiling: cap against booking cost + previously approved returns ---
                    decimal bookingCeilAmount = decimal.MaxValue;
                    if (long.TryParse(System.Text.RegularExpressions.Regex.Match(request.ServiceId ?? "", @"\d+").Value, out var bookingIdForSale))
                    {
                        try
                        {
                            (var expectedCost, _, _, _) = await GetBookingSupplierDetailsAsync(request.ServiceType, bookingIdForSale, ct);
                            if (expectedCost > 0) bookingCeilAmount = expectedCost;
                        }
                        catch { /* non-fatal — ceiling not available, skip cap */ }
                    }

                    var totalSalesReturns = await GetTotalApprovedSalesReturnsAsync(request.ServiceType, request.ServiceId, ct);
                    var maxSalesReturnable = bookingCeilAmount - totalSalesReturns;
                    if (bookingCeilAmount < decimal.MaxValue && request.Amount > maxSalesReturnable + 0.001m)
                        throw new InvalidOperationException($"Sales Return Forbidden: Return amount ({request.Amount:N3}) exceeds remaining refundable balance ({maxSalesReturnable:N3}) for this booking.");

                    long? sourceBankId = null;
                    long? sourceAccountId = null;
                    string? sourceType = null;

                    if (!string.IsNullOrEmpty(request.SourceId))
                    {
                        if (request.SourceId.StartsWith("bank_", StringComparison.OrdinalIgnoreCase))
                        {
                            if (long.TryParse(request.SourceId.Substring(5), out var bankId))
                            {
                                sourceBankId = bankId;
                                sourceType = "bank";
                            }
                        }
                        else if (request.SourceId.StartsWith("account_", StringComparison.OrdinalIgnoreCase))
                        {
                            if (long.TryParse(request.SourceId.Substring(8), out var accId))
                            {
                                sourceAccountId = accId;
                                sourceType = "account";
                            }
                        }
                    }

                    if (!Enum.TryParse<RecipientType>(request.RecipientType, true, out var recType))
                        recType = RecipientType.Agent;

                    var correlationId = Guid.NewGuid().ToString();
                    var canonicalServiceType = TransactionReferenceTypeParser.Normalize(request.ServiceType)?.ToString() ?? request.ServiceType;
                    var docNo = await _documentNumberGenerator.GenerateDocumentNumberAsync("TXSSR", "Seq_SalesReturnDocNo", ct);

                    var salesReturn = SalesReturn.Create(
                        recType,
                        request.RecipientId,
                        request.ServiceId ?? string.Empty,
                        request.Amount,
                        request.ReturnReason,
                        createdBy,
                        sourceType,
                        sourceBankId,
                        sourceAccountId,
                        canonicalServiceType,
                        request.ServiceId,
                        correlationId,
                        FinancialTransactionStatus.Pending
                    );
                    salesReturn.DocumentNumber = docNo;

                    _dbContext.Add(salesReturn);
                    await _dbContext.SaveChangesAsync(ct);

                    if (user.IsMasterAccountant())
                    {
                        return await _approvalService.ApproveSalesReturnAsync(salesReturn.Id, createdBy, null, ct);
                    }

                    return MapToSalesResponse(salesReturn, user.Name);
                }, cancellationToken);
            }, cancellationToken);
        }

        private async Task<decimal> GetTotalApprovedSupplierPaymentsAsync(string? serviceType, string? serviceId, long? supplierId, CancellationToken ct)
        {
            var spList = await _dbContext.SupplierPayments
                .Where(p => p.Status == FinancialTransactionStatus.Approved)
                .ToListAsync(ct);

            var digitsOnly = !string.IsNullOrWhiteSpace(serviceId)
                ? System.Text.RegularExpressions.Regex.Match(serviceId, @"\d+").Value
                : string.Empty;

            decimal total = 0m;
            foreach (var p in spList)
            {
                if (supplierId.HasValue && supplierId.Value > 0 && p.SupplierId != supplierId.Value) continue;
                if (!IsServiceTypeMatch(p.ServiceType, serviceType)) continue;

                if (IsReferenceMatch(p.ExternalReference, serviceId, digitsOnly) ||
                    IsReferenceMatch(p.ReferenceNumber, serviceId, digitsOnly))
                {
                    total += p.Amount;
                }
            }

            return total;
        }

        private async Task<decimal> GetTotalApprovedPurchaseReturnsAsync(string? serviceType, string? serviceId, long? supplierId, CancellationToken ct)
        {
            var prList = await _dbContext.PurchaseReturns
                .Where(p => p.Status == FinancialTransactionStatus.Approved)
                .ToListAsync(ct);

            var digitsOnly = !string.IsNullOrWhiteSpace(serviceId)
                ? System.Text.RegularExpressions.Regex.Match(serviceId, @"\d+").Value
                : string.Empty;

            decimal total = 0m;
            foreach (var p in prList)
            {
                if (supplierId.HasValue && supplierId.Value > 0 && p.SupplierId != supplierId.Value) continue;
                if (!IsServiceTypeMatch(p.ServiceType, serviceType)) continue;

                if (IsReferenceMatch(p.OriginalPurchaseReference, serviceId, digitsOnly) ||
                    IsReferenceMatch(p.ExternalReference, serviceId, digitsOnly))
                {
                    total += p.Amount;
                }
            }

            return total;
        }

        private async Task<decimal> GetTotalApprovedSalesReturnsAsync(string? serviceType, string? serviceId, CancellationToken ct)
        {
            var srList = await _dbContext.SalesReturns
                .Where(r => r.Status == FinancialTransactionStatus.Approved)
                .ToListAsync(ct);

            var digitsOnly = !string.IsNullOrWhiteSpace(serviceId)
                ? System.Text.RegularExpressions.Regex.Match(serviceId, @"\d+").Value
                : string.Empty;

            decimal total = 0m;
            foreach (var r in srList)
            {
                if (!IsServiceTypeMatch(r.ServiceType, serviceType)) continue;

                if (IsReferenceMatch(r.OriginalSaleReference, serviceId, digitsOnly) ||
                    IsReferenceMatch(r.ExternalReference, serviceId, digitsOnly))
                {
                    total += r.Amount;
                }
            }

            return total;
        }

        private static bool IsServiceTypeMatch(string? type1, string? type2)
        {
            if (string.IsNullOrWhiteSpace(type1) || string.IsNullOrWhiteSpace(type2)) return true;
            var norm1 = type1.Trim().ToLowerInvariant();
            var norm2 = type2.Trim().ToLowerInvariant();

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

        private async Task<(decimal expectedCost, bool isCompleted, long? supplierId, string? supplierName)> GetBookingSupplierDetailsAsync(
            string serviceType,
            long bookingId,
            CancellationToken ct)
        {
            switch (serviceType.ToLowerInvariant())
            {
                case "flight":
                case "flights":
                case "flight_booking":
                case "flight-booking":
                    var flight = await _salesPortalClient.GetFlightBookingByIdAsync(bookingId, ct);
                    if (flight == null) return (0, false, null, null);
                    var flightCost = flight.Passengers?.Sum(p => p.ExpectedSupplierCost) ?? 0;
                    var firstPass = flight.Passengers?.FirstOrDefault();
                    return (flightCost, flight.ProcessingStatus?.ToLowerInvariant() == "completed", firstPass?.SupplierId, firstPass?.SupplierName);

                case "hotel":
                case "hotels":
                case "hotel_booking":
                case "hotel-booking":
                    var hotel = await _salesPortalClient.GetHotelBookingByIdAsync(bookingId, ct);
                    if (hotel == null) return (0, false, null, null);
                    return (hotel.ExpectedSupplierCost, hotel.ProcessingStatus?.ToLowerInvariant() == "completed", hotel.SupplierId, hotel.SupplierName);

                case "visa":
                case "visa_application":
                case "visa-application":
                    var visa = await _salesPortalClient.GetVisaApplicationByIdAsync(bookingId, ct);
                    if (visa == null) return (0, false, null, null);
                    return (visa.ExpectedSupplierCost, visa.ProcessingStatus?.ToLowerInvariant() == "completed", visa.SupplierId, visa.SupplierName);

                case "vfs":
                case "vfs_appointment":
                case "vfs-appointment":
                    var vfs = await _salesPortalClient.GetVfsAppointmentByIdAsync(bookingId, ct);
                    if (vfs == null) return (0, false, null, null);
                    return (vfs.ExpectedSupplierCost, vfs.ProcessingStatus?.ToLowerInvariant() == "completed", vfs.SupplierId, vfs.SupplierName);

                case "holiday":
                case "holiday-packages":
                case "holiday_package":
                case "holiday-package":
                    var holiday = await _salesPortalClient.GetHolidayPackageByIdAsync(bookingId, ct);
                    if (holiday == null) return (0, false, null, null);
                    return (holiday.ExpectedSupplierCost, holiday.ProcessingStatus?.ToLowerInvariant() == "completed", holiday.SupplierId, holiday.SupplierName);

                case "transport":
                case "transportation":
                case "transportations":
                    var trans = await _salesPortalClient.GetTransportationByIdAsync(bookingId, ct);
                    if (trans == null) return (0, false, null, null);
                    return (trans.ExpectedSupplierCost, trans.ProcessingStatus?.ToLowerInvariant() == "completed", trans.SupplierId, trans.SupplierName);

                case "other":
                case "other-services":
                case "other_service":
                case "other-service":
                    var other = await _salesPortalClient.GetOtherServiceByIdAsync(bookingId, ct);
                    if (other == null) return (0, false, null, null);
                    return (other.ExpectedSupplierCost, other.ProcessingStatus?.ToLowerInvariant() == "completed", other.SupplierId, other.SupplierName);

                default:
                    return (0, false, null, null);
            }
        }

        private async Task<TResult> HandleIdempotentCommandAsync<TResult>(
            string scope,
            string key,
            string payload,
            Func<Task<TResult>> action,
            CancellationToken cancellationToken)
        {
            if (string.IsNullOrEmpty(key))
            {
                return await action();
            }

            var requestHash = ComputeHash(payload);
            var id = $"{scope}:{key}";

            var record = await _recoveryStore.GetRecordAsync(id, cancellationToken);

            if (record != null)
            {
                if (record.Status == "completed")
                {
                    if (record.RequestHash != requestHash)
                        throw new InvalidOperationException("An idempotency key with a different payload already exists.");

                    return JsonSerializer.Deserialize<TResult>(record.ResponseBody ?? "{}")!;
                }

                if (record.CreatedAt < DateTime.UtcNow.AddSeconds(-30))
                    await _recoveryStore.RemovePendingRecordAsync(id, cancellationToken);
                else
                    throw new InvalidOperationException("A duplicate request is already in progress. Please wait a few seconds and try again.");
            }

            await _recoveryStore.CreatePendingRecordAsync(id, scope, key, requestHash, payload, cancellationToken);

            try
            {
                var result = await action();
                var responseBody = JsonSerializer.Serialize(result);
                await _recoveryStore.CompleteRecordAsync(id, 200, responseBody, cancellationToken);
                return result;
            }
            catch
            {
                try { await _recoveryStore.RemovePendingRecordAsync(id, cancellationToken); } catch { }
                throw;
            }
        }

        private static string ComputeHash(string payload)
        {
            using var sha256 = System.Security.Cryptography.SHA256.Create();
            var bytes = sha256.ComputeHash(System.Text.Encoding.UTF8.GetBytes(payload));
            return Convert.ToHexString(bytes);
        }

        private static SupplierPaymentResponse MapToPaymentResponse(SupplierPayment s, string? creatorName)
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
                creatorName,
                ServiceType: s.ServiceType,
                DocumentNumber: s.DocumentNumber
            );
        }

        private static PurchaseReturnResponse MapToPurchaseResponse(PurchaseReturn r, string? creatorName)
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
                creatorName,
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

        private static SalesReturnResponse MapToSalesResponse(SalesReturn r, string? creatorName)
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
                creatorName,
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
    }
}

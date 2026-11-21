using TexasAccountsPortal.Domain.Enums;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Contracts.Transactions;

namespace TexasAccountsPortal.Api.Controllers
{
    [ApiController]
    [Route("api/public")]
    [Authorize(Policy = "AccountsInternalApiAccess")] // Guarded by cross-portal service authentication
    public class PublicApiController : ControllerBase
    {
        private readonly IFinancialPostingService _postingService;
        private readonly IAccountsDbContext _dbContext;
        private readonly ISalesPortalClient _salesPortalClient;

        public PublicApiController(IFinancialPostingService postingService, IAccountsDbContext dbContext, ISalesPortalClient salesPortalClient)
        {
            _postingService = postingService;
            _dbContext = dbContext;
            _salesPortalClient = salesPortalClient;
        }

        [HttpGet("agents/{id:long}")]
        public async Task<IActionResult> GetAgentById(long id)
        {
            var agent = await _dbContext.Agents
                .AsNoTracking()
                .Where(a => a.Id == id)
                .Select(a => new
                {
                    a.Id,
                    a.FirstName,
                    a.LastName,
                    a.EmailId,
                    a.PhoneNo,
                    a.Nationality,
                    a.Address,
                    a.Wallet,
                    a.SalesmanId
                })
                .FirstOrDefaultAsync();

            if (agent == null)
                return NotFound(new { Message = $"Agent with ID {id} not found." });

            return Ok(agent);
        }

        [HttpGet("agents")]
        public async Task<IActionResult> GetAgents([FromQuery] long? salesmanId = null)
        {
            var query = _dbContext.Agents.AsNoTracking().Where(a => a.IsVerified);
            if (salesmanId.HasValue && salesmanId.Value > 0)
            {
                query = query.Where(a => a.SalesmanId == salesmanId.Value || a.SalesmanId == null);
            }
            
            var agents = await query
                .Select(a => new
                {
                    a.Id,
                    a.FirstName,
                    a.LastName,
                    a.EmailId,
                    a.PhoneNo,
                    a.Nationality,
                    a.Address,
                    a.Wallet,
                    a.SalesmanId
                })
                .ToListAsync();
                
            return Ok(agents);
        }

        [HttpGet("banks")]
        public async Task<IActionResult> GetBanks()
        {
            var banks = await _dbContext.Banks
                .AsNoTracking()
                .Select(b => new
                {
                    b.Id,
                    b.BankName,
                    b.AccountNumber
                })
                .ToListAsync();
            return Ok(banks);
        }

        [HttpGet("suppliers")]
        public async Task<IActionResult> GetSuppliers()
        {
            var suppliers = await _dbContext.Suppliers
                .AsNoTracking()
                .Where(s => s.IsVerified && s.DeletedAt == null)
                .Select(s => new
                {
                    s.Id,
                    s.Name,
                    s.Code,
                    s.Categories
                })
                .ToListAsync();
            return Ok(suppliers);
        }

        [HttpPost("banks/{id}/deposit")]
        public async Task<IActionResult> DepositToBank(long id, [FromBody] CreateIncomingTransactionRequest request)
        {
            // Re-map request to target this bank ID
            var finalRequest = new CreateIncomingTransactionRequest(
                DestinationAccountId: null,
                DestinationBankId: id,
                Amount: request.Amount,
                PaymentMethod: request.PaymentMethod,
                ReferenceType: request.ReferenceType,
                ReferenceId: request.ReferenceId,
                Description: request.Description ?? $"External API Deposit to Bank {id}"
            );

            var idempotencyKey = GetIdempotencyKey();

            try
            {
                // Use System User ID (e.g. 1)
                var response = await _postingService.PostIncomingTransactionAsync(
                    finalRequest,
                    createdBy: 1, // System Actor
                    idempotencyKey,
                    ReceiptOrigin.General,
                    default
                );
                return Ok(response);
            }
            catch (System.Exception ex)
            {
                return Conflict(new { Message = ex.Message });
            }
        }

        [HttpPost("accounts/{id}/deposit")]
        public async Task<IActionResult> DepositToAccount(long id, [FromBody] CreateIncomingTransactionRequest request)
        {
            var finalRequest = new CreateIncomingTransactionRequest(
                DestinationAccountId: id,
                DestinationBankId: null,
                Amount: request.Amount,
                PaymentMethod: request.PaymentMethod,
                ReferenceType: request.ReferenceType,
                ReferenceId: request.ReferenceId,
                Description: request.Description ?? $"External API Deposit to Account {id}"
            );

            var idempotencyKey = GetIdempotencyKey();

            try
            {
                var response = await _postingService.PostIncomingTransactionAsync(
                    finalRequest,
                    createdBy: 1, // System Actor
                    idempotencyKey,
                    ReceiptOrigin.General,
                    default
                );
                 return Ok(response);
            }
            catch (System.Exception ex)
            {
                return Conflict(new { Message = ex.Message });
            }
        }

        public record WalletTransferRequest(decimal Amount, string Description);

        [HttpPost("agents/{id}/debit")]
        public async Task<IActionResult> DebitAgentWallet(long id, [FromBody] WalletTransferRequest request)
        {
            if (request.Amount <= 0)
                return BadRequest("Amount must be greater than zero.");

            try
            {
                var agent = await _dbContext.Agents.FirstOrDefaultAsync(x => x.Id == id);
                if (agent == null)
                    return NotFound($"Agent with ID {id} not found.");

                agent.DebitWallet(request.Amount);

                var tx = TexasAccountsPortal.Domain.Entities.FinancialTransaction.Create(
                    transactionType: TexasAccountsPortal.Domain.Enums.FinancialTransactionType.WalletDebit,
                    amount: request.Amount,
                    paymentMethod: TexasAccountsPortal.Domain.Enums.PaymentMethod.Wallet,
                    createdBy: 1, // System Actor
                    referenceType: TexasAccountsPortal.Domain.Enums.TransactionReferenceType.Sale,
                    referenceId: Guid.NewGuid().ToString("N").Substring(0, 8),
                    description: request.Description ?? "Wallet Debit via API",
                    recipientType: TexasAccountsPortal.Domain.Enums.RecipientType.Agent,
                    recipientId: id,
                    initialStatus: TexasAccountsPortal.Domain.Enums.FinancialTransactionStatus.Approved
                );
                _dbContext.Add(tx);
                await _dbContext.SaveChangesAsync(default);

                return Ok(new { Success = true, WalletBalance = agent.Wallet });
            }
            catch (System.Exception ex)
            {
                return Conflict(new { Message = ex.Message });
            }
        }

        [HttpPost("agents/{id}/credit")]
        public async Task<IActionResult> CreditAgentWallet(long id, [FromBody] WalletTransferRequest request)
        {
            if (request.Amount <= 0)
                return BadRequest("Amount must be greater than zero.");

            try
            {
                var agent = await _dbContext.Agents.FirstOrDefaultAsync(x => x.Id == id);
                if (agent == null)
                    return NotFound($"Agent with ID {id} not found.");

                agent.CreditWallet(request.Amount);

                var tx = TexasAccountsPortal.Domain.Entities.FinancialTransaction.Create(
                    transactionType: TexasAccountsPortal.Domain.Enums.FinancialTransactionType.Incoming,
                    amount: request.Amount,
                    paymentMethod: TexasAccountsPortal.Domain.Enums.PaymentMethod.Wallet,
                    createdBy: 1, // System Actor
                    referenceType: TexasAccountsPortal.Domain.Enums.TransactionReferenceType.Sale,
                    referenceId: Guid.NewGuid().ToString("N").Substring(0, 8),
                    description: request.Description ?? "Wallet Credit via API",
                    recipientType: TexasAccountsPortal.Domain.Enums.RecipientType.Agent,
                    recipientId: id,
                    initialStatus: TexasAccountsPortal.Domain.Enums.FinancialTransactionStatus.Approved
                );
                _dbContext.Add(tx);
                await _dbContext.SaveChangesAsync(default);

                return Ok(new { Success = true, WalletBalance = agent.Wallet });
            }
            catch (System.Exception ex)
            {
                return Conflict(new { Message = ex.Message });
            }
        }

        [HttpGet("agents/{id}/ledger")]
        public async Task<IActionResult> GetAgentLedger(long id, [FromQuery] int page = 1, [FromQuery] int pageSize = 20)
        {
            if (page < 1) return BadRequest("page must be >= 1.");
            if (pageSize is < 1 or > 1000) return BadRequest("pageSize must be between 1 and 1000.");

            var agentExists = await _dbContext.Agents.AnyAsync(a => a.Id == id);
            if (!agentExists)
                return NotFound($"Agent with ID {id} not found.");

            var q = _dbContext.Transactions
                .AsNoTracking()
                .Where(t =>
                    t.RecipientType == TexasAccountsPortal.Domain.Enums.RecipientType.Agent &&
                    t.RecipientId == id &&
                    t.Status == TexasAccountsPortal.Domain.Enums.FinancialTransactionStatus.Approved)
                .OrderByDescending(t => t.CreatedAt);

            var total = await q.CountAsync();
            var items = await q
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .Select(t => new
                {
                    t.Id,
                    Type = t.TransactionType.ToString(),
                    t.Description,
                    Debit = t.TransactionType == TexasAccountsPortal.Domain.Enums.FinancialTransactionType.WalletDebit ? t.Amount : 0m,
                    Credit = t.TransactionType != TexasAccountsPortal.Domain.Enums.FinancialTransactionType.WalletDebit ? t.Amount : 0m,
                    t.CreatedAt
                })
                .ToListAsync();

            var totalPages = total == 0 ? 1 : (int)System.Math.Ceiling((double)total / pageSize);

            return Ok(new
            {
                Items = items,
                TotalCount = total,
                Page = page,
                PageSize = pageSize,
                TotalPages = totalPages
            });
        }

        public record CreateGovtSupplierPaymentPublicRequest(
            long SupplierId,
            decimal Amount,
            string? ReferenceNumber,
            string? ExternalReference,
            string? ServiceType,
            string? Description,
            long? CreatedByUserId
        );

        [HttpPost("supplier-payments/govt-payment")]
        public async Task<IActionResult> CreateGovtSupplierPayment([FromBody] CreateGovtSupplierPaymentPublicRequest request)
        {
            if (request.Amount < 0)
                return BadRequest(new { Message = "Payment amount cannot be negative." });

            var supplier = await _dbContext.Suppliers.FirstOrDefaultAsync(s => s.Id == request.SupplierId);
            if (supplier == null)
            {
                supplier = await _dbContext.Suppliers.FirstOrDefaultAsync(s => s.IsVerified && s.DeletedAt == null);
                if (supplier == null)
                    return BadRequest(new { Message = "No active supplier found in Accounts Portal." });
            }

            var docNoGenerator = HttpContext.RequestServices.GetService<TexasAccountsPortal.Domain.Services.IDocumentNumberGenerator>();
            string docNo = "TXSPAY-" + Guid.NewGuid().ToString("N")[..8].ToUpperInvariant();
            if (docNoGenerator != null)
            {
                try
                {
                    docNo = await docNoGenerator.GenerateDocumentNumberAsync("TXSPAY", "Seq_SupplierPaymentDocNo", HttpContext.RequestAborted);
                }
                catch { }
            }

            var payment = TexasAccountsPortal.Domain.Entities.SupplierPayment.Create(
                supplierId: supplier.Id,
                amount: request.Amount,
                paymentMethod: TexasAccountsPortal.Domain.Enums.PaymentMethod.BankTransfer,
                requestedByUserId: request.CreatedByUserId ?? 1,
                referenceNumber: request.ReferenceNumber,
                externalReference: request.ExternalReference,
                serviceType: request.ServiceType ?? "Government Fee",
                description: request.Description ?? "Government Payment Log",
                correlationId: Guid.NewGuid().ToString(),
                initialStatus: TexasAccountsPortal.Domain.Enums.FinancialTransactionStatus.Pending
            );
            payment.DocumentNumber = docNo;

            _dbContext.Add(payment);
            await _dbContext.SaveChangesAsync(default);

            return Ok(new
            {
                Success = true,
                SupplierPaymentId = payment.Id,
                payment.DocumentNumber,
                Status = payment.Status.ToString()
            });
        }

        public record SyncGovtSupplierPaymentItem(
            long SupplierId,
            string? SupplierName,
            decimal Amount,
            string? ReferenceNumber,
            string? Description,
            string? RowKey = null
        );

        public record BookingSupplierPaymentSummary(
            string ServiceType,
            string ExternalReference,
            decimal ApprovedTotal,
            System.Collections.Generic.List<ApprovedSupplierPaymentItem> Payments
        );

        public record ApprovedSupplierPaymentItem(
            long Id,
            decimal Amount,
            string? Reference,
            string? Description,
            string Status,
            System.DateTime? ApprovedAt
        );

        [HttpGet("supplier-payments/booking/{serviceType}/{externalReference}")]
        [AllowAnonymous]
        public async Task<IActionResult> GetBookingSupplierPayments([FromRoute] string serviceType, [FromRoute] string externalReference)
        {
            if (string.IsNullOrWhiteSpace(externalReference))
                return BadRequest(new { Message = "ExternalReference is required." });

            var sType = serviceType?.Trim();
            var parsedRefType = TexasAccountsPortal.Domain.Services.TransactionReferenceTypeParser.Normalize(sType);

            var refSet = BuildCandidateRefSet(sType, externalReference);
            var refList = refSet.ToList();

            var filteredPayments = await _dbContext.SupplierPayments
                .AsNoTracking()
                .Where(p => p.Status == TexasAccountsPortal.Domain.Enums.FinancialTransactionStatus.Approved &&
                            ((p.ExternalReference != null && refList.Contains(p.ExternalReference)) ||
                             (p.ReferenceNumber != null && refList.Contains(p.ReferenceNumber))))
                .OrderBy(p => p.ApprovedAt ?? p.CreatedAt)
                .ToListAsync();

            if (parsedRefType.HasValue)
            {
                filteredPayments = filteredPayments.Where(p =>
                    string.IsNullOrWhiteSpace(p.ServiceType) ||
                    string.Equals(p.ServiceType, sType, StringComparison.OrdinalIgnoreCase) ||
                    TexasAccountsPortal.Domain.Services.TransactionReferenceTypeParser.Normalize(p.ServiceType) == parsedRefType.Value
                ).ToList();
            }

            var filteredPRs = await _dbContext.PurchaseReturns
                .AsNoTracking()
                .Where(p => p.Status == TexasAccountsPortal.Domain.Enums.FinancialTransactionStatus.Approved &&
                            ((p.OriginalPurchaseReference != null && refList.Contains(p.OriginalPurchaseReference)) ||
                             (p.ExternalReference != null && refList.Contains(p.ExternalReference))))
                .ToListAsync();

            if (parsedRefType.HasValue)
            {
                filteredPRs = filteredPRs.Where(p =>
                    string.IsNullOrWhiteSpace(p.ServiceType) ||
                    string.Equals(p.ServiceType, sType, StringComparison.OrdinalIgnoreCase) ||
                    TexasAccountsPortal.Domain.Services.TransactionReferenceTypeParser.Normalize(p.ServiceType) == parsedRefType.Value
                ).ToList();
            }

            var paymentsSum = filteredPayments.Sum(p => p.Amount);
            var prSum = filteredPRs.Sum(p => p.Amount);
            var netApprovedTotal = Math.Max(0m, paymentsSum - prSum);

            var approvedPayments = filteredPayments.Select(p => new ApprovedSupplierPaymentItem(
                p.Id,
                p.Amount,
                p.ReferenceNumber,
                p.Description,
                "Approved",
                p.ApprovedAt
            )).ToList();

            var summary = new BookingSupplierPaymentSummary(
                serviceType,
                externalReference,
                netApprovedTotal,
                approvedPayments
            );

            return Ok(summary);
        }

        private static System.Collections.Generic.HashSet<string> BuildCandidateRefSet(string? serviceType, string externalReference)
        {
            var set = new System.Collections.Generic.HashSet<string>(System.StringComparer.OrdinalIgnoreCase) { externalReference };

            var digits = System.Text.RegularExpressions.Regex.Match(externalReference, @"\d+").Value;
            if (!string.IsNullOrEmpty(digits))
            {
                set.Add(digits);
                var st = (serviceType ?? "").Trim().ToLowerInvariant();
                if (string.IsNullOrEmpty(st) || st.Contains("flight")) set.Add("FLI-" + digits);
                if (string.IsNullOrEmpty(st) || st.Contains("hotel")) set.Add("HOT-" + digits);
                if (string.IsNullOrEmpty(st) || st.Contains("visa")) set.Add("VISA-" + digits);
                if (string.IsNullOrEmpty(st) || st.Contains("vfs")) set.Add("VFS-" + digits);
                if (string.IsNullOrEmpty(st) || st.Contains("holiday") || st.Contains("pkg")) { set.Add("HOL-" + digits); set.Add("PKG-" + digits); }
                if (string.IsNullOrEmpty(st) || st.Contains("transport")) set.Add("TRN-" + digits);
                if (string.IsNullOrEmpty(st) || st.Contains("other")) set.Add("OTH-" + digits);
            }

            return set;
        }

        private async Task<System.Collections.Generic.HashSet<string>> ResolveRefSetAsync(string? serviceType, string externalReference)
        {
            var set = BuildCandidateRefSet(serviceType, externalReference);

            try
            {
                var docDict = await _salesPortalClient.GetBatchDocumentNumbersAsync(new System.Collections.Generic.List<(string, string)> { (serviceType ?? "", externalReference) });
                if (docDict != null)
                {
                    foreach (var kvp in docDict)
                    {
                        if (!string.IsNullOrWhiteSpace(kvp.Value)) set.Add(kvp.Value);
                    }
                }
            }
            catch { }

            return set;
        }

        private static bool IsRefMatch(string? r1, string? r2)
        {
            if (string.IsNullOrWhiteSpace(r1) || string.IsNullOrWhiteSpace(r2)) return false;
            var s1 = r1.Trim();
            var s2 = r2.Trim();
            if (string.Equals(s1, s2, StringComparison.OrdinalIgnoreCase)) return true;

            var d1 = System.Text.RegularExpressions.Regex.Match(s1, @"\d+").Value;
            var d2 = System.Text.RegularExpressions.Regex.Match(s2, @"\d+").Value;

            if (!string.IsNullOrEmpty(d1) && !string.IsNullOrEmpty(d2))
            {
                if (long.TryParse(d1, out var n1) && long.TryParse(d2, out var n2))
                {
                    if (n1 == n2) return true;
                }
                else if (d1.Equals(d2, StringComparison.OrdinalIgnoreCase))
                {
                    return true;
                }
            }
            return false;
        }

        [HttpGet("supplier-payments/pending-count")]
        [AllowAnonymous]
        public async Task<IActionResult> GetPendingSupplierPaymentsCount()
        {
            var count = await _dbContext.SupplierPayments
                .AsNoTracking()
                .CountAsync(p => p.Status == TexasAccountsPortal.Domain.Enums.FinancialTransactionStatus.Pending);

            return Ok(new { count });
        }

        public record SyncGovtSupplierPaymentsPublicRequest(
            string ExternalReference,
            string ServiceType,
            long? CreatedByUserId,
            System.Collections.Generic.List<SyncGovtSupplierPaymentItem>? Payments
        );

        [HttpPost("supplier-payments/sync-govt-payments")]
        public async Task<IActionResult> SyncGovtSupplierPayments([FromBody] SyncGovtSupplierPaymentsPublicRequest request)
        {
            if (string.IsNullOrWhiteSpace(request.ExternalReference))
                return BadRequest(new { Message = "ExternalReference is required." });

            var existingPayments = await _dbContext.SupplierPayments
                .Where(p => p.ExternalReference == request.ExternalReference &&
                            p.Status != TexasAccountsPortal.Domain.Enums.FinancialTransactionStatus.Rejected)
                .ToListAsync();

            if (request.Payments != null)
            {
                var docNoGenerator = HttpContext.RequestServices.GetService<TexasAccountsPortal.Domain.Services.IDocumentNumberGenerator>();
                var matchedExistingIds = new HashSet<long>();

                foreach (var p in request.Payments)
                {
                    if (p.Amount <= 0) continue;

                    TexasAccountsPortal.Domain.Entities.Supplier? supplier = null;
                    if (p.SupplierId > 0)
                    {
                        supplier = await _dbContext.Suppliers.FirstOrDefaultAsync(s => s.Id == p.SupplierId);
                    }
                    if (supplier == null && !string.IsNullOrWhiteSpace(p.SupplierName))
                    {
                        var nameTrim = p.SupplierName.Trim();
                        supplier = await _dbContext.Suppliers.FirstOrDefaultAsync(s => s.Name == nameTrim || s.Code == nameTrim);
                    }
                    if (supplier == null)
                    {
                        supplier = await _dbContext.Suppliers.FirstOrDefaultAsync(s => s.IsVerified && s.DeletedAt == null);
                    }
                    if (supplier == null) continue;

                    TexasAccountsPortal.Domain.Entities.SupplierPayment? existing = null;
                    // 1. PRIMARY MATCH: By SalesFeeRowKey (exact match)
                    if (!string.IsNullOrWhiteSpace(p.RowKey))
                    {
                        existing = existingPayments.FirstOrDefault(x => !matchedExistingIds.Contains(x.Id) && x.SalesFeeRowKey == p.RowKey);
                    }

                    // 2. FALLBACK 1: By ReferenceNumber (ONLY for legacy records where SalesFeeRowKey is empty)
                    if (existing == null && !string.IsNullOrWhiteSpace(p.ReferenceNumber))
                    {
                        existing = existingPayments.FirstOrDefault(x => !matchedExistingIds.Contains(x.Id) &&
                                                                        string.IsNullOrEmpty(x.SalesFeeRowKey) &&
                                                                        string.Equals(x.ReferenceNumber, p.ReferenceNumber, StringComparison.OrdinalIgnoreCase));
                    }

                    // 3. FALLBACK 2: By Amount and Supplier (ONLY for legacy unlinked records where BOTH have no RowKey)
                    if (existing == null && string.IsNullOrWhiteSpace(p.RowKey))
                    {
                        existing = existingPayments.FirstOrDefault(x => !matchedExistingIds.Contains(x.Id) &&
                                                                        string.IsNullOrEmpty(x.SalesFeeRowKey) &&
                                                                        x.Amount == p.Amount &&
                                                                        x.SupplierId == supplier.Id);
                    }

                    if (existing != null)
                    {
                        matchedExistingIds.Add(existing.Id);
                        if (existing.Status == TexasAccountsPortal.Domain.Enums.FinancialTransactionStatus.Pending)
                        {
                            if (!string.IsNullOrWhiteSpace(p.RowKey) && string.IsNullOrEmpty(existing.SalesFeeRowKey))
                            {
                                existing.SalesFeeRowKey = p.RowKey;
                            }
                            if (existing.SupplierId != supplier.Id)
                            {
                                existing.UpdateDetails(existing.Amount, supplier.Id, existing.ReferenceNumber, existing.Description);
                            }
                        }
                        else if (existing.Status == TexasAccountsPortal.Domain.Enums.FinancialTransactionStatus.Approved)
                        {
                            if (existing.Amount != p.Amount)
                            {
                                existing.NeedsManualReconciliation = true;
                                existing.ReconciliationNote = $"Sales Portal fee amount changed from {existing.Amount} to {p.Amount} after payment approval.";
                            }

                            var salesClient = HttpContext.RequestServices.GetService<TexasAccountsPortal.Application.Interfaces.ISalesPortalClient>();
                            if (salesClient != null)
                            {
                                var supp = await _dbContext.Suppliers.FirstOrDefaultAsync(s => s.Id == existing.SupplierId);
                                await salesClient.SyncGovtFeeUpdateAsync(
                                    request.ServiceType ?? "Visa",
                                    request.ExternalReference,
                                    existing.Id,
                                    existing.Amount,
                                    existing.SupplierId,
                                    supp?.Name,
                                    existing.ReferenceNumber,
                                    existing.Description,
                                    status: "verified",
                                    salesFeeRowKey: existing.SalesFeeRowKey ?? p.RowKey,
                                    cancellationToken: default
                                );
                            }
                            continue;
                        }
                    }
                    else
                    {
                        string docNo = "TXSPAY-" + Guid.NewGuid().ToString("N")[..8].ToUpperInvariant();
                        if (docNoGenerator != null)
                        {
                            try
                            {
                                docNo = await docNoGenerator.GenerateDocumentNumberAsync("TXSPAY", "Seq_SupplierPaymentDocNo", HttpContext.RequestAborted);
                            }
                            catch { }
                        }

                        var payment = TexasAccountsPortal.Domain.Entities.SupplierPayment.Create(
                            supplierId: supplier.Id,
                            amount: p.Amount,
                            paymentMethod: TexasAccountsPortal.Domain.Enums.PaymentMethod.BankTransfer,
                            requestedByUserId: request.CreatedByUserId ?? 1,
                            referenceNumber: p.ReferenceNumber,
                            externalReference: request.ExternalReference,
                            serviceType: request.ServiceType ?? "Government Fee",
                            description: p.Description ?? "Government Payment Log",
                            correlationId: Guid.NewGuid().ToString(),
                            initialStatus: TexasAccountsPortal.Domain.Enums.FinancialTransactionStatus.Pending,
                            salesFeeRowKey: p.RowKey
                        );
                        payment.DocumentNumber = docNo;

                        _dbContext.Add(payment);
                        existingPayments.Add(payment);
                        matchedExistingIds.Add(payment.Id);
                    }
                }
            }

            await _dbContext.SaveChangesAsync(default);
            return Ok(new
            {
                Success = true,
                Payments = existingPayments.Select(p => new
                {
                    PaymentId = p.Id,
                    RowKey = p.SalesFeeRowKey,
                    Amount = p.Amount,
                    Status = p.Status.ToString(),
                    DocumentNumber = p.DocumentNumber
                }).ToList()
            });
        }

        [HttpGet("sales-returns/check")]
        public async Task<IActionResult> CheckSalesReturn([FromQuery] string serviceType, [FromQuery] string serviceId)
        {
            if (string.IsNullOrWhiteSpace(serviceId))
                return Ok(new { HasSalesReturn = false, SalesReturnAmount = (decimal?)null, HasPurchaseReturn = false, PurchaseReturnAmount = (decimal?)null });

            var sId = serviceId.Trim();
            var st = (serviceType ?? "").Trim().ToLowerInvariant();

            var refSet = BuildCandidateRefSet(st, sId);
            var refList = refSet.ToList();

            var parsedRefType = TexasAccountsPortal.Domain.Services.TransactionReferenceTypeParser.Normalize(st);

            bool hasSalesReturn = false;
            decimal? salesReturnAmount = null;

            var salesReturnList = await _dbContext.SalesReturns.AsNoTracking()
                .Where(r => r.Status != TexasAccountsPortal.Domain.Enums.FinancialTransactionStatus.Rejected &&
                            ((r.OriginalSaleReference != null && refList.Contains(r.OriginalSaleReference)) ||
                             (r.ExternalReference != null && refList.Contains(r.ExternalReference))))
                .ToListAsync();

            if (parsedRefType.HasValue)
            {
                salesReturnList = salesReturnList.Where(r =>
                    string.IsNullOrWhiteSpace(r.ServiceType) ||
                    string.Equals(r.ServiceType, st, StringComparison.OrdinalIgnoreCase) ||
                    TexasAccountsPortal.Domain.Services.TransactionReferenceTypeParser.Normalize(r.ServiceType) == parsedRefType.Value
                ).ToList();
            }

            var salesReturn = salesReturnList.FirstOrDefault();

            if (salesReturn != null)
            {
                hasSalesReturn = true;
                salesReturnAmount = salesReturn.Amount;
            }
            else
            {
                var txReturnList = await _dbContext.Transactions.AsNoTracking()
                    .Where(t => t.TransactionType == TexasAccountsPortal.Domain.Enums.FinancialTransactionType.SalesReturn &&
                                t.Status != TexasAccountsPortal.Domain.Enums.FinancialTransactionStatus.Rejected &&
                                (t.ReferenceId == sId || (t.ReferenceId != null && refList.Contains(t.ReferenceId))))
                    .ToListAsync();

                if (parsedRefType.HasValue)
                {
                    txReturnList = txReturnList.Where(t =>
                        !t.ReferenceType.HasValue ||
                        t.ReferenceType.Value == parsedRefType.Value
                    ).ToList();
                }

                var txReturn = txReturnList.FirstOrDefault();

                if (txReturn != null)
                {
                    hasSalesReturn = true;
                    salesReturnAmount = txReturn.Amount;
                }
            }

            bool hasPurchaseReturn = false;
            decimal? purchaseReturnAmount = null;

            var prList = await _dbContext.PurchaseReturns.AsNoTracking()
                .Where(p => p.Status != TexasAccountsPortal.Domain.Enums.FinancialTransactionStatus.Rejected &&
                            ((p.OriginalPurchaseReference != null && refList.Contains(p.OriginalPurchaseReference)) ||
                             (p.ExternalReference != null && refList.Contains(p.ExternalReference))))
                .ToListAsync();

            if (parsedRefType.HasValue)
            {
                prList = prList.Where(p =>
                    string.IsNullOrWhiteSpace(p.ServiceType) ||
                    string.Equals(p.ServiceType, st, StringComparison.OrdinalIgnoreCase) ||
                    TexasAccountsPortal.Domain.Services.TransactionReferenceTypeParser.Normalize(p.ServiceType) == parsedRefType.Value
                ).ToList();
            }

            if (prList.Count > 0)
            {
                hasPurchaseReturn = true;
                purchaseReturnAmount = prList.Sum(p => p.Amount);
            }

            var txPrList = await _dbContext.Transactions.AsNoTracking()
                .Where(t => t.TransactionType == TexasAccountsPortal.Domain.Enums.FinancialTransactionType.PurchaseReturn &&
                            t.Status != TexasAccountsPortal.Domain.Enums.FinancialTransactionStatus.Rejected &&
                            (t.ReferenceId == sId || (t.ReferenceId != null && refList.Contains(t.ReferenceId))))
                .ToListAsync();

            if (parsedRefType.HasValue)
            {
                txPrList = txPrList.Where(t =>
                    !t.ReferenceType.HasValue ||
                    t.ReferenceType.Value == parsedRefType.Value
                ).ToList();
            }

            if (txPrList.Count > 0)
            {
                hasPurchaseReturn = true;
                purchaseReturnAmount = (purchaseReturnAmount ?? 0m) + txPrList.Sum(t => t.Amount);
            }

            return Ok(new { 
                HasSalesReturn = hasSalesReturn, 
                SalesReturnAmount = salesReturnAmount,
                HasPurchaseReturn = hasPurchaseReturn,
                PurchaseReturnAmount = purchaseReturnAmount
            });
        }

        
        [HttpGet("approver")]
        [AllowAnonymous]
        public async Task<IActionResult> GetBookingApprover(
            [FromQuery] string? serviceType,
            [FromQuery] string? bookingId,
            [FromQuery] string? docNumber,
            CancellationToken ct)
        {
            var rawRefs = new List<string>();
            if (!string.IsNullOrWhiteSpace(bookingId)) rawRefs.Add(bookingId.Trim());
            if (!string.IsNullOrWhiteSpace(docNumber)) rawRefs.Add(docNumber.Trim());

            var cleanRefs = new HashSet<string>(StringComparer.OrdinalIgnoreCase);
            foreach (var r in rawRefs)
            {
                cleanRefs.Add(r);
                cleanRefs.Add(r.TrimStart('#'));
                cleanRefs.Add($"#{r.TrimStart('#')}");
            }

            var refList = cleanRefs.ToList();
            long? approverUserId = null;

            if (refList.Count > 0)
            {
                // 1. Look for approved transaction matching reference
                var txn = await _dbContext.Transactions.AsNoTracking()
                    .Where(t => t.Status == TexasAccountsPortal.Domain.Enums.FinancialTransactionStatus.Approved &&
                                t.ReferenceId != null && refList.Contains(t.ReferenceId))
                    .OrderByDescending(t => t.ApprovedAt ?? t.CreatedAt)
                    .FirstOrDefaultAsync(ct);

                approverUserId = txn?.ApprovedBy ?? txn?.CreatedBy;

                // 2. Check transaction descriptions
                if (!approverUserId.HasValue)
                {
                    var incTxn = await _dbContext.Transactions.AsNoTracking()
                        .Where(t => t.Status == TexasAccountsPortal.Domain.Enums.FinancialTransactionStatus.Approved &&
                                    t.Description != null && refList.Any(r => t.Description.Contains(r)))
                        .OrderByDescending(t => t.ApprovedAt ?? t.CreatedAt)
                        .FirstOrDefaultAsync(ct);

                    approverUserId = incTxn?.ApprovedBy ?? incTxn?.CreatedBy;
                }

                // 3. Check Supplier Payments
                if (!approverUserId.HasValue)
                {
                    var sp = await _dbContext.SupplierPayments.AsNoTracking()
                        .Where(p => (p.ExternalReference != null && refList.Contains(p.ExternalReference)) ||
                                    (p.Description != null && refList.Any(r => p.Description.Contains(r))))
                        .OrderByDescending(p => p.ApprovedAt ?? p.RequestedAt)
                        .FirstOrDefaultAsync(ct);

                    approverUserId = sp?.ApprovedByUserId ?? sp?.RequestedByUserId;
                }

                // 4. Check Sales Returns / Purchase Returns
                if (!approverUserId.HasValue)
                {
                    var sr = await _dbContext.SalesReturns.AsNoTracking()
                        .Where(r => (r.OriginalSaleReference != null && refList.Contains(r.OriginalSaleReference)) ||
                                    (r.ExternalReference != null && refList.Contains(r.ExternalReference)) ||
                                    (r.Reason != null && refList.Any(refVal => r.Reason.Contains(refVal))))
                        .OrderByDescending(r => r.ApprovedAt ?? r.RequestedAt)
                        .FirstOrDefaultAsync(ct);

                    approverUserId = sr?.ApprovedByUserId ?? sr?.RequestedByUserId;
                }

                // 5. Check Journal Entries
                if (!approverUserId.HasValue)
                {
                    var je = await _dbContext.JournalEntries.AsNoTracking()
                        .Where(j => (j.Description != null && refList.Any(r => j.Description.Contains(r))))
                        .OrderByDescending(j => j.CreatedAt)
                        .FirstOrDefaultAsync(ct);

                    approverUserId = je?.ApprovedBy ?? je?.CreatedBy;
                }

                // 6. Partial match across Transactions
                if (!approverUserId.HasValue)
                {
                    var prefixMatch = await _dbContext.Transactions.AsNoTracking()
                        .Where(t => t.Status == TexasAccountsPortal.Domain.Enums.FinancialTransactionStatus.Approved &&
                                    t.ReferenceId != null && rawRefs.Any(rf => t.ReferenceId.Contains(rf) || rf.Contains(t.ReferenceId)))
                        .OrderByDescending(t => t.ApprovedAt ?? t.CreatedAt)
                        .FirstOrDefaultAsync(ct);

                    approverUserId = prefixMatch?.ApprovedBy ?? prefixMatch?.CreatedBy;
                }
            }

            if (approverUserId.HasValue && approverUserId.Value > 0)
            {
                var user = await _dbContext.Users.AsNoTracking().FirstOrDefaultAsync(u => u.Id == approverUserId.Value, ct);
                if (user != null && !string.IsNullOrWhiteSpace(user.Name))
                {
                    return Ok(new { AccountantName = user.Name.Trim() });
                }
            }

            // 7. Fallback: Find the active Master Accountant or Accountant user
            var defaultAccountant = await _dbContext.Users.AsNoTracking()
                .Where(u => u.IsActive && !string.IsNullOrWhiteSpace(u.Name))
                .OrderBy(u => u.Id)
                .FirstOrDefaultAsync(ct);

            if (defaultAccountant != null && !string.IsNullOrWhiteSpace(defaultAccountant.Name))
            {
                return Ok(new { AccountantName = defaultAccountant.Name.Trim() });
            }

            return Ok(new { AccountantName = (string?)null });
        }

        private string GetIdempotencyKey()
        {
            HttpContext.Request.Headers.TryGetValue("Idempotency-Key", out var headerValues);
            return headerValues.FirstOrDefault() ?? string.Empty;
        }
    }
}


using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Contracts.SupplierPayments;
using TexasAccountsPortal.Domain.Entities;
using TexasAccountsPortal.Domain.Enums;

namespace TexasAccountsPortal.Api.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/supplier-payments")]
    public class SupplierPaymentsController : ApiControllerBase
    {
        private readonly ISettlementService _settlementService;
        private readonly ISettlementApprovalService _approvalService;
        private readonly IAccountsDbContext _dbContext;
        private readonly ISalesPortalClient _salesPortalClient;

        public SupplierPaymentsController(
            ISettlementService settlementService,
            ISettlementApprovalService approvalService,
            IAccountsDbContext dbContext,
            ISalesPortalClient salesPortalClient)
        {
            _settlementService = settlementService;
            _approvalService = approvalService;
            _dbContext = dbContext;
            _salesPortalClient = salesPortalClient;
        }

        [HttpGet]
        [Authorize(Policy = "RequireAccountant")]
        public async Task<ActionResult<IEnumerable<SupplierPaymentResponse>>> GetSupplierPayments(
            [FromQuery] string? status = null,
            [FromQuery] long? supplierId = null,
            CancellationToken ct = default)
        {
            var response = await _settlementService.GetSupplierPaymentsAsync(status, supplierId, ct);
            return Ok(response);
        }

        [HttpGet("pending-count")]
        [Authorize(Policy = "RequireAccountant")]
        public async Task<IActionResult> GetPendingSupplierPaymentsCount(CancellationToken ct)
        {
            var count = await _dbContext.SupplierPayments
                .AsNoTracking()
                .CountAsync(p => p.Status == FinancialTransactionStatus.Pending, ct);

            return Ok(new { count });
        }

        /// <summary>
        /// Returns all pending supplier payments grouped by booking reference.
        /// Used by normal accountants on the "Pending Supplier Payments" page.
        /// </summary>
        [HttpGet("pending-bookings")]
        [Authorize(Policy = "RequireAccountant")]
        public async Task<IActionResult> GetPendingPaymentBookings(CancellationToken ct)
        {
            var payments = await _dbContext.SupplierPayments
                .AsNoTracking()
                .Where(p => p.Status == FinancialTransactionStatus.Pending)
                .OrderByDescending(p => p.RequestedAt)
                .ToListAsync(ct);

            var supplierIds = payments.Select(p => p.SupplierId).Distinct().ToList();
            var suppliers = await _dbContext.Suppliers
                .AsNoTracking()
                .Where(s => supplierIds.Contains(s.Id))
                .ToDictionaryAsync(s => s.Id, s => s.Name, ct);

            var userIds = payments.Select(p => p.RequestedByUserId).Distinct().ToList();
            var users = await _dbContext.Users
                .AsNoTracking()
                .Where(u => userIds.Contains(u.Id))
                .ToDictionaryAsync(u => u.Id, u => u.Name, ct);

            // Group by externalReference + serviceType to form booking groups
            var rawGrouped = payments
                .GroupBy(p => new { Ref = p.ExternalReference ?? "", Type = p.ServiceType ?? "" })
                .Select(g => new
                {
                    externalReference = g.Key.Ref,
                    serviceType = g.Key.Type,
                    count = g.Count(),
                    totalAmount = g.Sum(p => p.Amount),
                    earliestDate = g.Min(p => p.RequestedAt),
                    payments = g.Select(p => new
                    {
                        id = p.Id,
                        supplierId = p.SupplierId,
                        supplierName = suppliers.TryGetValue(p.SupplierId, out var sName) ? sName : $"Supplier #{p.SupplierId}",
                        amount = p.Amount,
                        currency = p.Currency,
                        paymentMethod = p.PaymentMethod.ToString(),
                        referenceNumber = p.ReferenceNumber,
                        description = p.Description,
                        status = p.Status.ToString(),
                        requestedByUserId = p.RequestedByUserId,
                        requestedByName = users.TryGetValue(p.RequestedByUserId, out var uName) ? uName : $"User #{p.RequestedByUserId}",
                        requestedAt = p.RequestedAt,
                        rowVersion = p.RowVersion != null ? Convert.ToBase64String(p.RowVersion) : null
                    }).ToList()
                })
                .OrderByDescending(g => g.earliestDate)
                .ToList();

            var distinctItems = rawGrouped
                .Where(g => !string.IsNullOrWhiteSpace(g.externalReference))
                .Select(g => (g.serviceType ?? "", g.externalReference))
                .Distinct()
                .ToList();

            var docNumMap = await _salesPortalClient.GetBatchDocumentNumbersAsync(distinctItems, ct);

            var groupedResult = rawGrouped.Select(g =>
            {
                var key = $"{g.serviceType}:{g.externalReference}";
                var docNo = docNumMap.TryGetValue(key, out var resolved) && !string.IsNullOrWhiteSpace(resolved)
                    ? resolved
                    : g.externalReference;

                return new
                {
                    externalReference = g.externalReference,
                    documentNumber = docNo,
                    serviceType = g.serviceType,
                    count = g.count,
                    totalAmount = g.totalAmount,
                    earliestDate = g.earliestDate,
                    payments = g.payments
                };
            }).ToList();

            return Ok(groupedResult);
        }

        [HttpPost]
        [Authorize(Policy = "RequireAccountant")]
        public async Task<ActionResult<SupplierPaymentResponse>> Post([FromBody] CreateSupplierPaymentRequest request)
        {
            var idempotencyKey = GetIdempotencyKey();
            try
            {
                var response = await _settlementService.PostSupplierPaymentAsync(
                    request,
                    GetCurrentUserId(),
                    idempotencyKey,
                    default
                );
                return Ok(response);
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(new { Message = ex.Message });
            }
            catch (InvalidOperationException ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }

        [HttpPut("{id}")]
        [Authorize(Policy = "RequireAccountant")]
        public async Task<ActionResult<SupplierPaymentResponse>> Update(long id, [FromBody] UpdateSupplierPaymentRequest request, CancellationToken ct)
        {
            try
            {
                var response = await _approvalService.UpdateSupplierPaymentAsync(id, request, GetCurrentUserId(), ct);
                return Ok(response);
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(new { Message = ex.Message });
            }
            catch (InvalidOperationException ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }

        [HttpPost("{id}/approve")]
        [Authorize(Policy = "RequireAccountant")]
        public async Task<ActionResult<SupplierPaymentResponse>> Approve(long id, CancellationToken ct)
        {
            var rowVersion = Request.Headers["Row-Version"].ToString();
            try
            {
                var response = await _approvalService.ApproveSupplierPaymentAsync(id, GetCurrentUserId(), rowVersion, ct);
                return Ok(response);
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(new { Message = ex.Message });
            }
            catch (DbUpdateConcurrencyException ex)
            {
                return StatusCode(Microsoft.AspNetCore.Http.StatusCodes.Status409Conflict, new { Message = ex.Message });
            }
            catch (InvalidOperationException ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }

        [HttpPost("{id}/reject")]
        [Authorize(Policy = "RequireAccountant")]
        public async Task<ActionResult<SupplierPaymentResponse>> Reject(long id, [FromBody] RejectSupplierPaymentRequest request, CancellationToken ct)
        {
            try
            {
                var response = await _approvalService.RejectSupplierPaymentAsync(id, GetCurrentUserId(), request.Reason, ct);
                return Ok(response);
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(new { Message = ex.Message });
            }
            catch (InvalidOperationException ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }

        private string GetIdempotencyKey()
        {
            HttpContext.Request.Headers.TryGetValue("Idempotency-Key", out var headerValues);
            return headerValues.FirstOrDefault() ?? string.Empty;
        }
    }
}

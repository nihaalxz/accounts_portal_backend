using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Contracts.PurchaseReturns;
using TexasAccountsPortal.Domain.Entities;
using TexasAccountsPortal.Domain.Enums;

namespace TexasAccountsPortal.Api.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/purchase-returns")]
    public class PurchaseReturnsController : ApiControllerBase
    {
        private readonly ISettlementService _settlementService;
        private readonly ISettlementApprovalService _approvalService;

        public PurchaseReturnsController(
            ISettlementService settlementService,
            ISettlementApprovalService approvalService)
        {
            _settlementService = settlementService;
            _approvalService = approvalService;
        }

        [HttpGet]
        [Authorize(Policy = "RequireAccountant")]
        public async Task<ActionResult<IEnumerable<PurchaseReturnResponse>>> GetPurchaseReturns(
            [FromQuery] string? status = null,
            [FromQuery] long? supplierId = null,
            CancellationToken ct = default)
        {
            var response = await _settlementService.GetPurchaseReturnsAsync(status, supplierId, ct);
            return Ok(response);
        }

        [HttpPost]
        [Authorize(Policy = "RequireAccountant")]
        public async Task<ActionResult<PurchaseReturnResponse>> Post([FromBody] CreatePurchaseReturnRequest request)
        {
            var idempotencyKey = GetIdempotencyKey();
            try
            {
                var response = await _settlementService.PostPurchaseReturnAsync(
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

        [HttpPost("{id}/approve")]
        [Authorize(Policy = "RequireMasterAccountant")]
        public async Task<ActionResult<PurchaseReturnResponse>> Approve(long id, CancellationToken ct)
        {
            var rowVersion = Request.Headers["Row-Version"].ToString();
            try
            {
                var response = await _approvalService.ApprovePurchaseReturnAsync(id, GetCurrentUserId(), rowVersion, ct);
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
        [Authorize(Policy = "RequireMasterAccountant")]
        public async Task<ActionResult<PurchaseReturnResponse>> Reject(long id, [FromBody] RejectPurchaseReturnRequest request, CancellationToken ct)
        {
            try
            {
                var response = await _approvalService.RejectPurchaseReturnAsync(id, GetCurrentUserId(), request.Reason, ct);
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

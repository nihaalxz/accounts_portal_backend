using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Contracts.SalesReturns;
using TexasAccountsPortal.Domain.Entities;
using TexasAccountsPortal.Domain.Enums;

namespace TexasAccountsPortal.Api.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/sales-returns")]
    public class SalesReturnsController : ApiControllerBase
    {
        private readonly ISettlementService _settlementService;
        private readonly ISettlementApprovalService _approvalService;

        public SalesReturnsController(
            ISettlementService settlementService,
            ISettlementApprovalService approvalService)
        {
            _settlementService = settlementService;
            _approvalService = approvalService;
        }

        [HttpGet]
        [Authorize(Policy = "RequireAccountant")]
        public async Task<ActionResult<IEnumerable<SalesReturnResponse>>> GetSalesReturns(
            [FromQuery] string? status = null,
            CancellationToken ct = default)
        {
            var response = await _settlementService.GetSalesReturnsAsync(status, ct);
            return Ok(response);
        }

        [HttpPost]
        [Authorize(Policy = "RequireAccountant")]
        public async Task<ActionResult<SalesReturnResponse>> Post([FromBody] CreateSalesReturnRequest request)
        {
            var idempotencyKey = GetIdempotencyKey();
            try
            {
                var response = await _settlementService.PostSalesReturnAsync(
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
        public async Task<ActionResult<SalesReturnResponse>> Approve(long id, CancellationToken ct)
        {
            var rowVersion = Request.Headers["Row-Version"].ToString();
            try
            {
                var response = await _approvalService.ApproveSalesReturnAsync(id, GetCurrentUserId(), rowVersion, ct);
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
        public async Task<ActionResult<SalesReturnResponse>> Reject(long id, [FromBody] RejectSalesReturnRequest request, CancellationToken ct)
        {
            try
            {
                var response = await _approvalService.RejectSalesReturnAsync(id, GetCurrentUserId(), request.Reason, ct);
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

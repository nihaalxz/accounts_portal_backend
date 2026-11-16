using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Threading;
using System.Threading.Tasks;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Contracts.Disputes;
using TexasAccountsPortal.Contracts.SalesEntries;

namespace TexasAccountsPortal.Api.Controllers
{
    [Authorize(Policy = "RequireAccountant")]
    [ApiController]
    [Route("api/disputes")]
    public class DisputesController : ApiControllerBase
    {
        private readonly ISalesPortalClient _salesPortalClient;

        public DisputesController(ISalesPortalClient salesPortalClient)
        {
            _salesPortalClient = salesPortalClient;
        }

        [HttpGet]
        public async Task<ActionResult<PagedResponse<DisputeResponse>>> GetDisputes(
            [FromQuery] int page = 1,
            [FromQuery] int pageSize = 20,
            [FromQuery] string? status = null,
            [FromQuery] string? search = null,
            [FromQuery] string? sort = null,
            CancellationToken ct = default)
        {
            var result = await _salesPortalClient.GetDisputesAsync(page, pageSize, status, search, sort, ct);
            return Ok(result);
        }

        [HttpGet("dashboard")]
        public async Task<ActionResult<DisputesDashboardResponse>> GetDashboard(CancellationToken ct = default)
        {
            var result = await _salesPortalClient.GetDisputesDashboardAsync(ct);
            return Ok(result);
        }

        [HttpGet("{id:long}")]
        public async Task<ActionResult<DisputeResponse>> GetDispute(long id, CancellationToken ct = default)
        {
            var result = await _salesPortalClient.GetDisputeByIdAsync(id, ct);
            return result == null ? NotFound() : Ok(result);
        }

        [HttpPost("{id:long}/decision")]
        public async Task<ActionResult<DisputeResponse>> SubmitDecision(
            long id,
            [FromBody] DisputeDecisionRequest request,
            CancellationToken ct = default)
        {
            var resolvedBy = User.Identity?.Name ?? "Accounts Admin";
            var result = await _salesPortalClient.SubmitDisputeDecisionAsync(id, request, resolvedBy, ct);
            return result == null ? NotFound() : Ok(result);
        }
    }
}

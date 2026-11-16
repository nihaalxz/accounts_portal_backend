using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Contracts.Payroll;

namespace TexasAccountsPortal.Api.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class PayrollController : ApiControllerBase
    {
        private readonly IPayrollService _payrollService;

        public PayrollController(IPayrollService payrollService)
        {
            _payrollService = payrollService ?? throw new ArgumentNullException(nameof(payrollService));
        }


        /// <summary>
        /// GET /api/payroll/profiles
        /// Returns staff salary profiles with optional filtering by portalType and status.
        /// </summary>
        [HttpGet("profiles")]
        public async Task<ActionResult<IEnumerable<SalaryProfileResponse>>> GetSalaryProfiles(
            [FromQuery] string? portalType = null,
            [FromQuery] string? status = null,
            CancellationToken ct = default)
        {
            var profiles = await _payrollService.GetSalaryProfilesAsync(portalType, status, ct);
            return Ok(profiles);
        }

        /// <summary>
        /// GET /api/payroll/profiles/{id}
        /// Returns a single staff salary profile by ID.
        /// </summary>
        [HttpGet("profiles/{id:long}")]
        public async Task<ActionResult<SalaryProfileResponse>> GetSalaryProfileById([FromRoute] long id, CancellationToken ct = default)
        {
            var profile = await _payrollService.GetSalaryProfileByIdAsync(id, ct);
            if (profile == null) return NotFound(new { Message = $"Salary profile #{id} not found." });
            return Ok(profile);
        }

        /// <summary>
        /// POST /api/payroll/profiles
        /// Creates a new active salary profile for a staff member.
        /// </summary>
        [HttpPost("profiles")]
        [Authorize(Policy = "RequireMasterAccountant")]
        public async Task<ActionResult<SalaryProfileResponse>> CreateSalaryProfile(
            [FromBody] CreateSalaryProfileRequest request,
            CancellationToken ct = default)
        {
            try
            {
                var created = await _payrollService.CreateSalaryProfileAsync(request, ct);
                return CreatedAtAction(nameof(GetSalaryProfileById), new { id = created.Id }, created);
            }
            catch (InvalidOperationException ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }

        /// <summary>
        /// PUT /api/payroll/profiles/{id}
        /// Updates an existing salary profile and records a SalaryRevision history entry.
        /// </summary>
        [HttpPut("profiles/{id:long}")]
        [Authorize(Policy = "RequireMasterAccountant")]
        public async Task<ActionResult<SalaryProfileResponse>> UpdateSalaryProfile(
            [FromRoute] long id,
            [FromBody] UpdateSalaryProfileRequest request,
            CancellationToken ct = default)
        {
            try
            {
                var updated = await _payrollService.UpdateSalaryProfileAsync(id, request, GetCurrentUserId(), ct);
                return Ok(updated);
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

        /// <summary>
        /// GET /api/payroll/profiles/{id}/revisions
        /// Returns revision history for a salary profile.
        /// </summary>
        [HttpGet("profiles/{id:long}/revisions")]
        public async Task<ActionResult<IEnumerable<SalaryRevisionResponse>>> GetSalaryRevisions([FromRoute] long id, CancellationToken ct = default)
        {
            var revisions = await _payrollService.GetSalaryRevisionsAsync(id, ct);
            return Ok(revisions);
        }

        /// <summary>
        /// GET /api/payroll/payments
        /// Returns salary payouts with optional filters (status, month, year, portalType).
        /// </summary>
        [HttpGet("payments")]
        public async Task<ActionResult<IEnumerable<SalaryPaymentResponse>>> GetSalaryPayments(
            [FromQuery] string? status = null,
            [FromQuery] int? month = null,
            [FromQuery] int? year = null,
            [FromQuery] string? portalType = null,
            CancellationToken ct = default)
        {
            var payments = await _payrollService.GetSalaryPaymentsAsync(status, month, year, portalType, ct);
            return Ok(payments);
        }

        /// <summary>
        /// GET /api/payroll/payments/{id}
        /// Returns a single salary payment record.
        /// </summary>
        [HttpGet("payments/{id:long}")]
        public async Task<ActionResult<SalaryPaymentResponse>> GetSalaryPaymentById([FromRoute] long id, CancellationToken ct = default)
        {
            var payment = await _payrollService.GetSalaryPaymentByIdAsync(id, ct);
            if (payment == null) return NotFound(new { Message = $"Salary payment #{id} not found." });
            return Ok(payment);
        }

        /// <summary>
        /// POST /api/payroll/payments
        /// Creates a new salary payment payout (Pending or Paid).
        /// </summary>
        [HttpPost("payments")]
        [Authorize(Policy = "RequireAccountant")]
        public async Task<ActionResult<SalaryPaymentResponse>> CreateSalaryPayment(
            [FromBody] CreateSalaryPaymentRequest request,
            CancellationToken ct = default)
        {
            try
            {
                var created = await _payrollService.CreateSalaryPaymentAsync(request, GetCurrentUserId(), ct);
                return CreatedAtAction(nameof(GetSalaryPaymentById), new { id = created.Id }, created);
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

        /// <summary>
        /// PUT /api/payroll/payments/{id}/status
        /// Updates pending salary payment status to 'Paid' or 'Cancelled'.
        /// </summary>
        [HttpPut("payments/{id:long}/status")]
        [Authorize(Policy = "RequireAccountant")]
        public async Task<ActionResult<SalaryPaymentResponse>> UpdateSalaryPaymentStatus(
            [FromRoute] long id,
            [FromBody] UpdateSalaryPaymentStatusRequest request,
            CancellationToken ct = default)
        {
            try
            {
                var updated = await _payrollService.UpdateSalaryPaymentStatusAsync(id, request, GetCurrentUserId(), ct);
                return Ok(updated);
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
    }
}

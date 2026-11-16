using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Contracts.ChartOfAccounts;

namespace TexasAccountsPortal.Api.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class ChartOfAccountsController : ApiControllerBase
    {
        private readonly IChartOfAccountService _coaService;

        public ChartOfAccountsController(IChartOfAccountService coaService)
        {
            _coaService = coaService;
        }

        [HttpPost]
        [Authorize(Policy = "RequireMasterAccountant")]
        public async Task<ActionResult<ChartOfAccountResponse>> CreateAccount(
            [FromBody] CreateChartOfAccountRequest request,
            CancellationToken cancellationToken)
        {
            if (request == null)
                return BadRequest("Request payload cannot be null.");

            try
            {
                var response = await _coaService.CreateAccountAsync(
                    request,
                    GetCurrentUserId(),
                    cancellationToken);

                return CreatedAtAction(nameof(GetAccountById), new { id = response.Id }, response);
            }
            catch (ArgumentException ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
            catch (InvalidOperationException ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }

        [HttpPut("{id:long}")]
        [Authorize(Policy = "RequireMasterAccountant")]
        public async Task<ActionResult<ChartOfAccountResponse>> UpdateAccount(
            long id,
            [FromBody] UpdateChartOfAccountRequest request,
            CancellationToken cancellationToken)
        {
            if (request == null)
                return BadRequest("Request payload cannot be null.");

            try
            {
                var response = await _coaService.UpdateAccountAsync(
                    id,
                    request,
                    GetCurrentUserId(),
                    cancellationToken);

                return Ok(response);
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(new { Message = ex.Message });
            }
            catch (ArgumentException ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
            catch (InvalidOperationException ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }

        [HttpDelete("{id:long}")]
        [Authorize(Policy = "RequireMasterAccountant")]
        public async Task<IActionResult> DeleteAccount(
            long id,
            CancellationToken cancellationToken)
        {
            try
            {
                await _coaService.DeleteAccountAsync(
                    id,
                    GetCurrentUserId(),
                    cancellationToken);

                return NoContent();
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

        [HttpGet("{id:long}")]
        [Authorize(Policy = "RequireAccountant")]
        public async Task<ActionResult<ChartOfAccountResponse>> GetAccountById(
            long id,
            CancellationToken cancellationToken)
        {
            try
            {
                var response = await _coaService.GetAccountByIdAsync(id, cancellationToken);
                return Ok(response);
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(new { Message = ex.Message });
            }
        }

        [HttpGet]
        [Authorize(Policy = "RequireAccountant")]
        public async Task<ActionResult<IEnumerable<ChartOfAccountResponse>>> GetAccountsList(
            CancellationToken cancellationToken)
        {
            var response = await _coaService.GetAccountsListAsync(cancellationToken);
            return Ok(response);
        }

        [HttpPost("seed")]
        [Authorize(Policy = "RequireMasterAccountant")]
        public async Task<IActionResult> SeedSystemAccounts(
            CancellationToken cancellationToken)
        {
            await _coaService.SeedSystemAccountsAsync(GetCurrentUserId(), cancellationToken);
            return Ok(new { Message = "System accounts seeded successfully (if not already seeded)." });
        }
    }
}

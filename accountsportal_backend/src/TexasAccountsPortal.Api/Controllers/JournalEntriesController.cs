using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Contracts.JournalEntries;

namespace TexasAccountsPortal.Api.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class JournalEntriesController : ApiControllerBase
    {
        private readonly IJournalEntryService _journalService;

        public JournalEntriesController(IJournalEntryService journalService)
        {
            _journalService = journalService;
        }

        [HttpPost]
        [Authorize(Policy = "RequireAccountant")]
        public async Task<ActionResult<JournalEntryResponse>> Create(
            [FromBody] CreateJournalEntryRequest request,
            CancellationToken cancellationToken)
        {
            if (request == null)
                return BadRequest("Request payload cannot be null.");

            try
            {
                var response = await _journalService.CreateAsync(
                    request,
                    GetCurrentUserId(),
                    cancellationToken);

                return CreatedAtAction(nameof(GetById), new { id = response.Id }, response);
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

        [HttpPost("{id:long}/approve")]
        [Authorize(Policy = "RequireMasterAccountant")]
        public async Task<ActionResult<JournalEntryResponse>> Approve(
            long id,
            CancellationToken cancellationToken)
        {
            var idempotencyKey = Request.Headers["Idempotency-Key"].ToString();
            if (string.IsNullOrWhiteSpace(idempotencyKey))
            {
                return BadRequest(new { Message = "Idempotency-Key header is required for approval." });
            }

            var rowVersion = Request.Headers["Row-Version"].ToString();

            try
            {
                var response = await _journalService.ApproveAsync(
                    id, 
                    GetCurrentUserId(), 
                    idempotencyKey, 
                    rowVersion, 
                    cancellationToken);

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

        [HttpPost("{id:long}/reject")]
        [Authorize(Policy = "RequireMasterAccountant")]
        public async Task<ActionResult<JournalEntryResponse>> Reject(
            long id,
            CancellationToken cancellationToken)
        {
            try
            {
                var response = await _journalService.RejectAsync(id, GetCurrentUserId(), cancellationToken);
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

        [HttpGet("{id:long}")]
        [Authorize(Policy = "RequireAccountant")]
        public async Task<ActionResult<JournalEntryResponse>> GetById(
            long id,
            CancellationToken cancellationToken)
        {
            try
            {
                var response = await _journalService.GetByIdAsync(id, cancellationToken);
                return Ok(response);
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(new { Message = ex.Message });
            }
        }

        [HttpGet]
        [Authorize(Policy = "RequireAccountant")]
        public async Task<ActionResult<IEnumerable<JournalEntryResponse>>> GetList(
            CancellationToken cancellationToken)
        {
            var response = await _journalService.GetListAsync(cancellationToken);
            return Ok(response);
        }
    }
}

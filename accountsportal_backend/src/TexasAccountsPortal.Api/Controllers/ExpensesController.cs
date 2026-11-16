using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Contracts.Expenses;

namespace TexasAccountsPortal.Api.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class ExpensesController : ApiControllerBase
    {
        private readonly IExpenseService _expenseService;
        private readonly IExpenseApprovalService _expenseApprovalService;

        public ExpensesController(
            IExpenseService expenseService,
            IExpenseApprovalService expenseApprovalService)
        {
            _expenseService = expenseService;
            _expenseApprovalService = expenseApprovalService;
        }

        [HttpPost]
        [Authorize(Policy = "RequireAccountant")]
        public async Task<ActionResult<ExpenseResponse>> CreateExpense(
            [FromBody] CreateExpenseRequest request,
            CancellationToken cancellationToken)
        {
            if (request == null)
                return BadRequest("Request payload cannot be null.");

            try
            {
                var correlationId = HttpContext.Request.Headers["X-Correlation-ID"].ToString();
                if (string.IsNullOrWhiteSpace(correlationId))
                    correlationId = Guid.NewGuid().ToString();

                var response = await _expenseService.CreateExpenseAsync(
                    request,
                    GetCurrentUserId(),
                    correlationId,
                    cancellationToken);

                return CreatedAtAction(nameof(GetExpenseById), new { id = response.Id }, response);
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

        [HttpPost("{id:long}/submit")]
        [Authorize(Policy = "RequireAccountant")]
        public async Task<ActionResult<ExpenseResponse>> SubmitExpense(
            long id,
            CancellationToken cancellationToken)
        {
            try
            {
                var response = await _expenseService.SubmitExpenseAsync(id, cancellationToken);
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

        [HttpPost("{id:long}/approve")]
        [Authorize(Policy = "RequireMasterAccountant")]
        public async Task<ActionResult<ExpenseResponse>> ApproveExpense(
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
                var response = await _expenseApprovalService.ApproveExpenseAsync(
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
        public async Task<ActionResult<ExpenseResponse>> RejectExpense(
            long id,
            [FromBody] RejectExpenseRequest request,
            CancellationToken cancellationToken)
        {
            if (request == null)
                return BadRequest("Request payload cannot be null.");

            try
            {
                var response = await _expenseApprovalService.RejectExpenseAsync(
                    id,
                    GetCurrentUserId(),
                    request,
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

        [HttpPost("{id:long}/cancel")]
        [Authorize(Policy = "RequireAccountant")]
        public async Task<ActionResult<ExpenseResponse>> CancelExpense(
            long id,
            CancellationToken cancellationToken)
        {
            try
            {
                var response = await _expenseService.CancelExpenseAsync(id, cancellationToken);
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
        public async Task<ActionResult<ExpenseResponse>> GetExpenseById(
            long id,
            CancellationToken cancellationToken)
        {
            try
            {
                var response = await _expenseService.GetExpenseByIdAsync(id, cancellationToken);
                return Ok(response);
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(new { Message = ex.Message });
            }
        }

        [HttpGet]
        [Authorize(Policy = "RequireAccountant")]
        public async Task<ActionResult<IEnumerable<ExpenseResponse>>> GetExpenses(
            CancellationToken cancellationToken)
        {
            var response = await _expenseService.GetExpensesAsync(cancellationToken);
            return Ok(response);
        }

        // --- Expense Header (Category) Management Endpoints ---

        [HttpPost("headers")]
        [Authorize(Policy = "RequireAccountant")]
        public async Task<ActionResult<ExpenseHeaderResponse>> CreateHeader(
            [FromBody] CreateExpenseHeaderRequest request,
            CancellationToken cancellationToken)
        {
            if (request == null)
                return BadRequest("Request payload cannot be null.");

            try
            {
                var response = await _expenseService.CreateExpenseHeaderAsync(
                    request,
                    GetCurrentUserId(),
                    cancellationToken);

                return Ok(response);
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

        [HttpGet("headers")]
        [Authorize(Policy = "RequireAccountant")]
        public async Task<ActionResult<IEnumerable<ExpenseHeaderResponse>>> GetHeaders(
            CancellationToken cancellationToken)
        {
            var response = await _expenseService.GetExpenseHeadersAsync(cancellationToken);
            return Ok(response);
        }

        [HttpGet("summary")]
        [Authorize(Policy = "RequireAccountant")]
        public async Task<ActionResult<ExpenseSummaryResponse>> GetSummary(
            CancellationToken cancellationToken)
        {
            var response = await _expenseService.GetExpenseSummaryAsync(cancellationToken);
            return Ok(response);
        }
    }
}

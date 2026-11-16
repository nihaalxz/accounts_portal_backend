using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Contracts.Reporting;

namespace TexasAccountsPortal.Api.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class ReportingController : ApiControllerBase
    {
        private readonly IReportingService _reportingService;

        public ReportingController(IReportingService reportingService)
        {
            _reportingService = reportingService;
        }



        [HttpGet("statement/{accountCode}")]
        [Authorize(Policy = "RequireAccountant")]
        public async Task<ActionResult<AccountStatementResponse>> GetAccountStatement(
            string accountCode,
            [FromQuery] DateTime startDate,
            [FromQuery] DateTime endDate,
            CancellationToken cancellationToken)
        {
            if (startDate > endDate)
                return BadRequest("Start date cannot be after end date.");

            try
            {
                var response = await _reportingService.GetAccountStatementAsync(
                    accountCode,
                    startDate,
                    endDate,
                    cancellationToken);

                return Ok(response);
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(new { Message = ex.Message });
            }
        }

        [HttpGet("expenses")]
        [Authorize(Policy = "RequireAccountant")]
        public async Task<ActionResult<ExpenseReportResponse>> GetExpenseReport(
            [FromQuery] DateTime startDate,
            [FromQuery] DateTime endDate,
            CancellationToken cancellationToken)
        {
            if (startDate > endDate)
                return BadRequest("Start date cannot be after end date.");

            var response = await _reportingService.GetExpenseReportAsync(
                startDate,
                endDate,
                cancellationToken);

            return Ok(response);
        }

        [HttpGet("trial-balance")]
        [Authorize(Policy = "RequireAccountant")]
        public async Task<ActionResult<TrialBalanceResponse>> GetTrialBalance(
            [FromQuery] DateTime? asOfDate,
            CancellationToken cancellationToken)
        {
            var response = await _reportingService.GetTrialBalanceAsync(asOfDate, cancellationToken);
            return Ok(response);
        }

        [HttpGet("balance-sheet")]
        [Authorize(Policy = "RequireAccountant")]
        public async Task<ActionResult<BalanceSheetResponse>> GetBalanceSheet(
            [FromQuery] DateTime? asOfDate,
            CancellationToken cancellationToken)
        {
            var response = await _reportingService.GetBalanceSheetAsync(asOfDate, cancellationToken);
            return Ok(response);
        }

        [HttpGet("profit-loss")]
        [Authorize(Policy = "RequireAccountant")]
        public async Task<ActionResult<ProfitAndLossResponse>> GetProfitAndLoss(
            [FromQuery] DateTime startDate,
            [FromQuery] DateTime endDate,
            CancellationToken cancellationToken)
        {
            if (startDate > endDate)
                return BadRequest("Start date cannot be after end date.");

            var response = await _reportingService.GetProfitAndLossAsync(startDate, endDate, cancellationToken);
            return Ok(response);
        }

        [HttpGet("profit-loss/summary")]
        [Authorize(Policy = "RequireAccountant")]
        public async Task<ActionResult<OperationalProfitAndLossResponse>> GetOperationalProfitAndLossSummary(
            [FromQuery] DateTime? startDate,
            [FromQuery] DateTime? endDate,
            [FromQuery] string? dealStatus,
            [FromQuery] long? salesmanId,
            CancellationToken cancellationToken)
        {
            if (startDate.HasValue && endDate.HasValue && startDate.Value > endDate.Value)
                return BadRequest("Start date cannot be after end date.");

            var response = await _reportingService.GetOperationalProfitAndLossAsync(startDate, endDate, dealStatus, salesmanId, cancellationToken);
            return Ok(response);
        }

        [HttpGet("ledger-dashboard")]
        [Authorize(Policy = "RequireAccountant")]
        public async Task<ActionResult<LedgerDashboardResponse>> GetLedgerDashboard(
            CancellationToken cancellationToken)
        {
            var response = await _reportingService.GetLedgerDashboardAsync(cancellationToken);
            return Ok(response);
        }

        [HttpGet("ledger-statement/{accountId}")]
        [Authorize(Policy = "RequireAccountant")]
        public async Task<ActionResult<GeneralLedgerReportResponse>> GetLedgerStatement(
            long accountId,
            [FromQuery] DateTime startDate,
            [FromQuery] DateTime endDate,
            CancellationToken cancellationToken)
        {
            if (startDate > endDate)
                return BadRequest("Start date cannot be after end date.");

            try
            {
                var response = await _reportingService.GetGeneralLedgerReportAsync(
                    accountId,
                    startDate,
                    endDate,
                    cancellationToken);

                return Ok(response);
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(new { Message = ex.Message });
            }
        }
    }
}

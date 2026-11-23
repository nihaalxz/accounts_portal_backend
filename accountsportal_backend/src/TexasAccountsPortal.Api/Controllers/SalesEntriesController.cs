using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using System.Security.Claims;
using System.Threading;
using System.Threading.Tasks;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Contracts.SalesEntries;

namespace TexasAccountsPortal.Api.Controllers
{
    [Authorize(Policy = "RequireAccountant")]
    [ApiController]
    [Route("api/sales-entries")]
    public class SalesEntriesController : ApiControllerBase
    {
        private readonly ISalesEntriesService _salesEntriesService;

        public SalesEntriesController(ISalesEntriesService salesEntriesService)
        {
            _salesEntriesService = salesEntriesService;
        }

        [HttpGet("dashboard")]
        public async Task<ActionResult<DashboardSummaryResponse>> GetDashboardSummary(CancellationToken ct)
        {
            var summary = await _salesEntriesService.GetDashboardSummaryAsync(ct);
            return Ok(summary);
        }

        private async Task<long?> ResolveBookingIdAsync(string serviceType, string idOrDoc, CancellationToken ct)
        {
            if (long.TryParse(idOrDoc, out var numericId))
            {
                return numericId;
            }

            var cleanDoc = idOrDoc.Trim();
            var sType = serviceType.ToLowerInvariant();
            switch (sType)
            {
                case "flight":
                case "flights":
                    var flights = await _salesEntriesService.GetFlightBookingsAsync(1, 10, null, cleanDoc, null, null, ct);
                    return flights.Items?.FirstOrDefault(x => string.Equals(x.DocumentNumber, cleanDoc, StringComparison.OrdinalIgnoreCase))?.Id
                        ?? flights.Items?.FirstOrDefault()?.Id;

                case "hotel":
                case "hotels":
                    var hotels = await _salesEntriesService.GetHotelBookingsAsync(1, 10, null, cleanDoc, null, null, ct);
                    return hotels.Items?.FirstOrDefault(x => string.Equals(x.DocumentNumber, cleanDoc, StringComparison.OrdinalIgnoreCase))?.Id
                        ?? hotels.Items?.FirstOrDefault()?.Id;

                case "visa":
                case "visas":
                    var visas = await _salesEntriesService.GetVisaApplicationsAsync(1, 10, null, cleanDoc, null, null, ct);
                    return visas.Items?.FirstOrDefault(x => string.Equals(x.DocumentNumber, cleanDoc, StringComparison.OrdinalIgnoreCase))?.Id
                        ?? visas.Items?.FirstOrDefault()?.Id;

                case "vfs":
                case "vfs-appointments":
                    var vfs = await _salesEntriesService.GetVfsAppointmentsAsync(1, 10, null, cleanDoc, null, null, ct);
                    return vfs.Items?.FirstOrDefault(x => string.Equals(x.DocumentNumber, cleanDoc, StringComparison.OrdinalIgnoreCase))?.Id
                        ?? vfs.Items?.FirstOrDefault()?.Id;

                case "holiday":
                case "holidays":
                case "holiday-packages":
                    var holidays = await _salesEntriesService.GetHolidayPackagesAsync(1, 10, null, cleanDoc, null, null, ct);
                    return holidays.Items?.FirstOrDefault(x => string.Equals(x.DocumentNumber, cleanDoc, StringComparison.OrdinalIgnoreCase))?.Id
                        ?? holidays.Items?.FirstOrDefault()?.Id;

                case "transport":
                case "transportation":
                    var trans = await _salesEntriesService.GetTransportationsAsync(1, 10, null, cleanDoc, null, null, ct);
                    return trans.Items?.FirstOrDefault(x => string.Equals(x.DocumentNumber, cleanDoc, StringComparison.OrdinalIgnoreCase))?.Id
                        ?? trans.Items?.FirstOrDefault()?.Id;

                case "other":
                case "other-services":
                    var others = await _salesEntriesService.GetOtherServicesAsync(1, 10, null, cleanDoc, null, null, ct);
                    return others.Items?.FirstOrDefault(x => string.Equals(x.DocumentNumber, cleanDoc, StringComparison.OrdinalIgnoreCase))?.Id
                        ?? others.Items?.FirstOrDefault()?.Id;

                default:
                    return null;
            }
        }

        [HttpGet("flights")]
        [HttpGet("flight")]
        public async Task<ActionResult<PagedResponse<FlightBookingSummaryResponse>>> GetFlights(
            [FromQuery] int page = 1, [FromQuery] int pageSize = 10,
            [FromQuery] string? status = null, [FromQuery] string? search = null,
            [FromQuery] System.DateTime? startDate = null, [FromQuery] System.DateTime? endDate = null,
            CancellationToken ct = default)
        {
            var result = await _salesEntriesService.GetFlightBookingsAsync(page, pageSize, status, search, startDate, endDate, ct);
            return Ok(result);
        }

        [HttpGet("flights/{idOrDoc}")]
        [HttpGet("flight/{idOrDoc}")]
        public async Task<ActionResult<SalesEntryDetailResponse<FlightBookingDetailResponse>>> GetFlightDetail(string idOrDoc, CancellationToken ct)
        {
            var id = await ResolveBookingIdAsync("flights", idOrDoc, ct);
            if (!id.HasValue) return NotFound();
            var result = await _salesEntriesService.GetFlightBookingByIdAsync(id.Value, ct);
            return result == null ? NotFound() : Ok(result);
        }

        [HttpGet("hotels")]
        [HttpGet("hotel")]
        public async Task<ActionResult<PagedResponse<HotelBookingSummaryResponse>>> GetHotels(
            [FromQuery] int page = 1, [FromQuery] int pageSize = 10,
            [FromQuery] string? status = null, [FromQuery] string? search = null,
            [FromQuery] System.DateTime? startDate = null, [FromQuery] System.DateTime? endDate = null,
            CancellationToken ct = default)
        {
            var result = await _salesEntriesService.GetHotelBookingsAsync(page, pageSize, status, search, startDate, endDate, ct);
            return Ok(result);
        }

        [HttpGet("hotels/{idOrDoc}")]
        [HttpGet("hotel/{idOrDoc}")]
        public async Task<ActionResult<SalesEntryDetailResponse<HotelBookingDetailResponse>>> GetHotelDetail(string idOrDoc, CancellationToken ct)
        {
            var id = await ResolveBookingIdAsync("hotels", idOrDoc, ct);
            if (!id.HasValue) return NotFound();
            var result = await _salesEntriesService.GetHotelBookingByIdAsync(id.Value, ct);
            return result == null ? NotFound() : Ok(result);
        }

        [HttpGet("visa")]
        [HttpGet("visas")]
        public async Task<ActionResult<PagedResponse<VisaApplicationSummaryResponse>>> GetVisas(
            [FromQuery] int page = 1, [FromQuery] int pageSize = 10,
            [FromQuery] string? status = null, [FromQuery] string? search = null,
            [FromQuery] System.DateTime? startDate = null, [FromQuery] System.DateTime? endDate = null,
            CancellationToken ct = default)
        {
            var result = await _salesEntriesService.GetVisaApplicationsAsync(page, pageSize, status, search, startDate, endDate, ct);
            return Ok(result);
        }

        [HttpGet("visa/{idOrDoc}")]
        [HttpGet("visas/{idOrDoc}")]
        public async Task<ActionResult<SalesEntryDetailResponse<VisaApplicationDetailResponse>>> GetVisaDetail(string idOrDoc, CancellationToken ct)
        {
            var id = await ResolveBookingIdAsync("visa", idOrDoc, ct);
            if (!id.HasValue) return NotFound();
            var result = await _salesEntriesService.GetVisaApplicationByIdAsync(id.Value, ct);
            return result == null ? NotFound() : Ok(result);
        }

        [HttpGet("vfs")]
        public async Task<ActionResult<PagedResponse<VfsAppointmentSummaryResponse>>> GetVfsAppointments(
            [FromQuery] int page = 1, [FromQuery] int pageSize = 10,
            [FromQuery] string? status = null, [FromQuery] string? search = null,
            [FromQuery] System.DateTime? startDate = null, [FromQuery] System.DateTime? endDate = null,
            CancellationToken ct = default)
        {
            var result = await _salesEntriesService.GetVfsAppointmentsAsync(page, pageSize, status, search, startDate, endDate, ct);
            return Ok(result);
        }

        [HttpGet("vfs/{idOrDoc}")]
        public async Task<ActionResult<SalesEntryDetailResponse<VfsAppointmentDetailResponse>>> GetVfsDetail(string idOrDoc, CancellationToken ct)
        {
            var id = await ResolveBookingIdAsync("vfs", idOrDoc, ct);
            if (!id.HasValue) return NotFound();
            var result = await _salesEntriesService.GetVfsAppointmentByIdAsync(id.Value, ct);
            return result == null ? NotFound() : Ok(result);
        }

        [HttpGet("holiday-packages")]
        [HttpGet("holiday")]
        [HttpGet("holidays")]
        public async Task<ActionResult<PagedResponse<HolidayPackageSummaryResponse>>> GetHolidayPackages(
            [FromQuery] int page = 1, [FromQuery] int pageSize = 10,
            [FromQuery] string? status = null, [FromQuery] string? search = null,
            [FromQuery] System.DateTime? startDate = null, [FromQuery] System.DateTime? endDate = null,
            CancellationToken ct = default)
        {
            var result = await _salesEntriesService.GetHolidayPackagesAsync(page, pageSize, status, search, startDate, endDate, ct);
            return Ok(result);
        }

        [HttpGet("holiday-packages/{idOrDoc}")]
        [HttpGet("holiday/{idOrDoc}")]
        [HttpGet("holidays/{idOrDoc}")]
        public async Task<ActionResult<SalesEntryDetailResponse<HolidayPackageDetailResponse>>> GetHolidayPackageDetail(string idOrDoc, CancellationToken ct)
        {
            var id = await ResolveBookingIdAsync("holiday", idOrDoc, ct);
            if (!id.HasValue) return NotFound();
            var result = await _salesEntriesService.GetHolidayPackageByIdAsync(id.Value, ct);
            return result == null ? NotFound() : Ok(result);
        }

        [HttpGet("transportation")]
        [HttpGet("transport")]
        public async Task<ActionResult<PagedResponse<TransportationSummaryResponse>>> GetTransportations(
            [FromQuery] int page = 1, [FromQuery] int pageSize = 10,
            [FromQuery] string? status = null, [FromQuery] string? search = null,
            [FromQuery] System.DateTime? startDate = null, [FromQuery] System.DateTime? endDate = null,
            CancellationToken ct = default)
        {
            var result = await _salesEntriesService.GetTransportationsAsync(page, pageSize, status, search, startDate, endDate, ct);
            return Ok(result);
        }

        [HttpGet("transportation/{idOrDoc}")]
        [HttpGet("transport/{idOrDoc}")]
        public async Task<ActionResult<SalesEntryDetailResponse<TransportationDetailResponse>>> GetTransportationDetail(string idOrDoc, CancellationToken ct)
        {
            var id = await ResolveBookingIdAsync("transportation", idOrDoc, ct);
            if (!id.HasValue) return NotFound();
            var result = await _salesEntriesService.GetTransportationByIdAsync(id.Value, ct);
            return result == null ? NotFound() : Ok(result);
        }

        [HttpGet("other-services")]
        [HttpGet("other")]
        public async Task<ActionResult<PagedResponse<OtherServiceSummaryResponse>>> GetOtherServices(
            [FromQuery] int page = 1, [FromQuery] int pageSize = 10,
            [FromQuery] string? status = null, [FromQuery] string? search = null,
            [FromQuery] System.DateTime? startDate = null, [FromQuery] System.DateTime? endDate = null,
            CancellationToken ct = default)
        {
            var result = await _salesEntriesService.GetOtherServicesAsync(page, pageSize, status, search, startDate, endDate, ct);
            return Ok(result);
        }

        [HttpGet("other-services/{idOrDoc}")]
        [HttpGet("other/{idOrDoc}")]
        public async Task<ActionResult<SalesEntryDetailResponse<OtherServiceDetailResponse>>> GetOtherServiceDetail(string idOrDoc, CancellationToken ct)
        {
            var id = await ResolveBookingIdAsync("other-services", idOrDoc, ct);
            if (!id.HasValue) return NotFound();
            var result = await _salesEntriesService.GetOtherServiceByIdAsync(id.Value, ct);
            return result == null ? NotFound() : Ok(result);
        }

        [HttpGet("heads")]
        [Authorize(Policy = "RequireAccountant")]
        public async Task<ActionResult<PagedResponse<HeadSummaryResponse>>> GetHeads(
            [FromQuery] int page = 1, [FromQuery] int pageSize = 25,
            [FromQuery] string? search = null,
            [FromQuery] string? type = null,
            [FromQuery] long? salesmanId = null,
            CancellationToken ct = default)
        {
            var result = await _salesEntriesService.GetHeadsAsync(page, pageSize, search, type, salesmanId, ct);
            return Ok(result);
        }

        [HttpGet("heads/summary")]
        [Authorize(Policy = "RequireAccountant")]
        public async Task<ActionResult<HeadSummaryStatsResponse>> GetHeadsSummary(
            [FromQuery] long? salesmanId = null,
            CancellationToken ct = default)
        {
            var result = await _salesEntriesService.GetHeadsSummaryAsync(salesmanId, ct);
            return Ok(result);
        }

        [HttpGet("heads/{id:long}")]
        [Authorize(Policy = "RequireAccountant")]
        public async Task<ActionResult<HeadDetailResponse>> GetHeadDetail(long id, [FromQuery] string? type = null, CancellationToken ct = default)
        {
            var result = await _salesEntriesService.GetHeadByIdAsync(id, type, ct);
            return result == null ? NotFound() : Ok(result);
        }

        [HttpPut("heads/{id:long}")]
        [Authorize(Policy = "RequireMasterAccountant")]
        public async Task<ActionResult<HeadDetailResponse>> UpdateHead(
            long id,
            [FromBody] UpdateHeadRequest request,
            CancellationToken ct = default)
        {
            if (string.IsNullOrWhiteSpace(request.FirstName))
            {
                return BadRequest(new { Message = "First Name is required." });
            }

            var result = await _salesEntriesService.UpdateHeadAsync(id, request, GetCurrentUserId(), ct);
            return result == null ? NotFound(new { Message = "Head record not found or update failed." }) : Ok(result);
        }

        [HttpDelete("heads/{id:long}")]
        [Authorize(Policy = "RequireMasterAccountant")]
        public async Task<IActionResult> DeleteHead(long id, CancellationToken ct = default)
        {
            var success = await _salesEntriesService.DeleteHeadAsync(id, ct);
            if (!success)
            {
                return NotFound(new { Message = "Head record not found or could not be deleted." });
            }
            return NoContent();
        }

        [HttpGet("heads/{id:long}/ledger")]
        public async Task<ActionResult<PagedResponse<HeadLedgerEntryResponse>>> GetHeadLedger(
            long id, [FromQuery] string? type = null, [FromQuery] int page = 1, [FromQuery] int pageSize = 20,
            CancellationToken ct = default)
        {
            var result = await _salesEntriesService.GetHeadLedgerAsync(id, type, page, pageSize, ct);
            return Ok(result);
        }

        [HttpGet("customer-ledger")]
        public async Task<ActionResult<PagedResponse<HeadLedgerEntryResponse>>> GetCustomerLedger(
            [FromQuery] long headId, [FromQuery] string? type = null, [FromQuery] int page = 1, [FromQuery] int pageSize = 20,
            CancellationToken ct = default)
        {
            var result = await _salesEntriesService.GetHeadLedgerAsync(headId, type, page, pageSize, ct);
            return Ok(result);
        }

        [HttpGet("leads")]
        public async Task<ActionResult<PagedResponse<LeadSummaryResponse>>> GetLeads(
            [FromQuery] int page = 1, [FromQuery] int pageSize = 10,
            [FromQuery] string? status = null, [FromQuery] string? search = null,
            CancellationToken ct = default)
        {
            var result = await _salesEntriesService.GetLeadsAsync(page, pageSize, status, search, ct);
            return Ok(result);
        }

        [HttpGet("leads/{id:long}")]
        public async Task<ActionResult<LeadDetailResponse>> GetLeadDetail(long id, CancellationToken ct)
        {
            var result = await _salesEntriesService.GetLeadByIdAsync(id, ct);
            return result == null ? NotFound() : Ok(result);
        }

        [HttpGet("receipts")]
        public async Task<ActionResult<PagedResponse<ReceiptSummaryResponse>>> GetReceipts(
            [FromQuery] int page = 1, [FromQuery] int pageSize = 10,
            [FromQuery] string? search = null,
            [FromQuery] System.DateTime? startDate = null, [FromQuery] System.DateTime? endDate = null,
            CancellationToken ct = default)
        {
            var result = await _salesEntriesService.GetReceiptsAsync(page, pageSize, search, startDate, endDate, ct);
            return Ok(result);
        }

        [HttpGet("accounts-receipts")]
        public async Task<ActionResult<PagedResponse<AccountsReceiptSummaryDto>>> GetAccountsReceipts(
            [FromQuery] int page = 1, [FromQuery] int pageSize = 10,
            [FromQuery] string? search = null,
            [FromQuery] System.DateTime? startDate = null, [FromQuery] System.DateTime? endDate = null,
            CancellationToken ct = default)
        {
            var result = await _salesEntriesService.GetAccountsReceiptsAsync(page, pageSize, search, startDate, endDate, ct);
            return Ok(result);
        }

        [HttpGet("receipts/{identifier}")]
        public async Task<ActionResult<ReceiptDetailResponse>> GetReceiptDetail(string identifier, CancellationToken ct)
        {
            var result = await _salesEntriesService.GetReceiptByIdentifierAsync(identifier, ct);
            return result == null ? NotFound() : Ok(result);
        }

        [HttpPost("receipts")]
        public async Task<ActionResult<ReceiptDetailResponse>> CreateReceipt(
            [FromBody] CreateAccountsReceiptRequest request,
            CancellationToken ct)
        {
            try
            {
                var result = await _salesEntriesService.CreateReceiptAsync(request, GetCurrentUserId(), ct);
                return Ok(result);
            }
            catch (ArgumentException ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(new { Message = ex.Message });
            }
            catch (InvalidOperationException ex)
            {
                return Conflict(new { Message = ex.Message });
            }
            catch (Exception ex)
            {
                var msg = ex.InnerException?.Message ?? ex.Message;
                return BadRequest(new { Message = msg });
            }
        }


        [HttpPost("accounts-receipts/{id:long}/retry")]
        public async Task<ActionResult<AccountsReceiptSummaryDto>> RetryAccountsReceiptSync(
            long id,
            CancellationToken ct)
        {
            try
            {
                var result = await _salesEntriesService.RetryAccountsReceiptSyncAsync(id, GetCurrentUserId(), ct);
                return Ok(result);
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(new { Message = ex.Message });
            }
            catch (InvalidOperationException ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new { Message = ex.Message });
            }
        }

        [HttpGet("salesmen/{id:long}/clients")]
        public async Task<ActionResult<PagedResponse<SalesmanClientSummaryDto>>> GetSalesmanClients(
            long id,
            [FromQuery] string type = "customer",
            [FromQuery] string? search = null,
            [FromQuery] int page = 1,
            [FromQuery] int pageSize = 500,
            CancellationToken ct = default)
        {
            var result = await _salesEntriesService.GetSalesmanClientsAsync(id, type, search, page, pageSize, ct);
            return Ok(result);
        }

        [HttpGet("salesmen")]
        public async Task<ActionResult<IEnumerable<SalesmanResponse>>> GetSalesmen(CancellationToken ct)
        {
            var result = await _salesEntriesService.GetSalesmenAsync(ct);
            return Ok(result);
        }

        [HttpGet("open-deals")]
        [Authorize(Policy = "RequireAccountant")]
        public async Task<ActionResult<PagedResponse<OpenDealEntryResponse>>> GetOpenDeals(
            [FromQuery] int page = 1,
            [FromQuery] int pageSize = 20,
            [FromQuery] string? serviceType = null,
            [FromQuery] string? search = null,
            [FromQuery] long? salesmanId = null,
            [FromQuery] string? paymentStatus = null,
            [FromQuery] DateTime? startDate = null,
            [FromQuery] DateTime? endDate = null,
            CancellationToken ct = default)
        {
            var result = await _salesEntriesService.GetOpenDealsAsync(page, pageSize, serviceType, search, salesmanId, paymentStatus, startDate, endDate, ct);
            return Ok(result);
        }

        [HttpGet("open-deals/summary")]
        [Authorize(Policy = "RequireAccountant")]
        public async Task<ActionResult<OpenDealsSummaryResponse>> GetOpenDealsSummary(
            [FromQuery] string? serviceType = null,
            [FromQuery] string? search = null,
            [FromQuery] long? salesmanId = null,
            [FromQuery] string? paymentStatus = null,
            [FromQuery] DateTime? startDate = null,
            [FromQuery] DateTime? endDate = null,
            CancellationToken ct = default)
        {
            var result = await _salesEntriesService.GetOpenDealsSummaryAsync(serviceType, search, salesmanId, paymentStatus, startDate, endDate, ct);
            return Ok(result);
        }

        [HttpGet("salesmen/report")]
        [Authorize(Policy = "RequireAccountant")]
        public async Task<ActionResult<IEnumerable<SalesmanReportResponse>>> GetSalesmenReport(
            [FromQuery] DateTime? startDate = null,
            [FromQuery] DateTime? endDate = null,
            CancellationToken ct = default)
        {
            if (startDate.HasValue) startDate = startDate.Value.Date;
            if (endDate.HasValue && endDate.Value.TimeOfDay == TimeSpan.Zero)
            {
                endDate = endDate.Value.Date.AddDays(1).AddTicks(-1);
            }
            var result = await _salesEntriesService.GetSalesmenReportAsync(startDate, endDate, ct);
            return Ok(result);
        }

        [HttpGet("salesmen/{salesmanId:long}/profit-records")]
        [Authorize(Policy = "RequireAccountant")]
        public async Task<ActionResult<IEnumerable<SalesmanProfitRecordResponse>>> GetSalesmanProfitRecords(
            long salesmanId,
            [FromQuery] DateTime? startDate = null,
            [FromQuery] DateTime? endDate = null,
            CancellationToken ct = default)
        {
            if (startDate.HasValue) startDate = startDate.Value.Date;
            if (endDate.HasValue && endDate.Value.TimeOfDay == TimeSpan.Zero)
            {
                endDate = endDate.Value.Date.AddDays(1).AddTicks(-1);
            }
            var result = await _salesEntriesService.GetSalesmanProfitRecordsAsync(salesmanId, startDate, endDate, ct);
            return Ok(result);
        }

        [HttpPost("profit-adjustments")]
        [Authorize(Policy = "RequireMasterAccountant")]
        public async Task<IActionResult> AddProfitAdjustment(
            [FromBody] SalesmanProfitAdjustmentRequest request,
            CancellationToken ct)
        {
            try
            {
                var result = await _salesEntriesService.AddProfitAdjustmentAsync(request, GetCurrentUserId(), ct);
                return Ok(new { Success = result });
            }
            catch (Exception ex)
            {
                var msg = ex.InnerException?.Message ?? ex.Message;
                return BadRequest(new { Message = msg });
            }
        }

        [HttpGet("profit-adjustments")]
        [Authorize(Policy = "RequireAccountant")]
        public async Task<ActionResult<IEnumerable<SalesmanProfitAdjustmentHistoryResponse>>> GetProfitAdjustments(
            [FromQuery] long? salesmanId = null,
            [FromQuery] string? bookingType = null,
            [FromQuery] DateTime? startDate = null,
            [FromQuery] DateTime? endDate = null,
            CancellationToken ct = default)
        {
            var result = await _salesEntriesService.GetProfitAdjustmentsAsync(salesmanId, bookingType, startDate, endDate, ct);
            return Ok(result);
        }

        public record UpdateBookingPaymentStatusRequest(string Status, long? CashAccountId, string? ReferenceId = null);

        [HttpPost("receipts/{id:long}/payment-status")]
        public async Task<IActionResult> UpdateReceiptPaymentStatus(
            long id,
            [FromBody] UpdateBookingPaymentStatusRequest request,
            CancellationToken ct)
        {
            try
            {
                await _salesEntriesService.UpdateReceiptPaymentStatusAsync(id, request.Status, GetCurrentUserId(), request.CashAccountId, request.ReferenceId, ct);
                return Ok();
            }
            catch (Exception ex)
            {
                var msg = ex.InnerException?.Message ?? ex.Message;
                return BadRequest(new { Message = msg });
            }
        }

        [HttpPost("{serviceType}/{idOrDoc}/payment-status")]
        public async Task<IActionResult> UpdatePaymentStatus(
            string serviceType, 
            string idOrDoc, 
            [FromBody] UpdateBookingPaymentStatusRequest request, 
            CancellationToken ct)
        {
            try
            {
                var id = await ResolveBookingIdAsync(serviceType, idOrDoc, ct);
                if (!id.HasValue) return NotFound();

                if (string.Equals(serviceType, "receipts", StringComparison.OrdinalIgnoreCase) || string.Equals(serviceType, "receipt", StringComparison.OrdinalIgnoreCase))
                {
                    await _salesEntriesService.UpdateReceiptPaymentStatusAsync(id.Value, request.Status, GetCurrentUserId(), request.CashAccountId, request.ReferenceId, ct);
                    return Ok();
                }

                await _salesEntriesService.UpdatePaymentStatusAsync(serviceType, id.Value, request.Status, GetCurrentUserId(), request.CashAccountId, request.ReferenceId, ct);
                return Ok();
            }
            catch (Exception ex)
            {
                var msg = ex.InnerException?.Message ?? ex.Message;
                return BadRequest(new { Message = msg });
            }
        }

        
        [HttpGet("quotations")]
        public async Task<ActionResult<PagedResponse<QuotationSummaryResponse>>> GetQuotations(
            [FromQuery] int page = 1,
            [FromQuery] int pageSize = 10,
            [FromQuery] string? search = null,
            [FromQuery] string? clientType = null,
            [FromQuery] long? salesmanId = null,
            [FromQuery] System.DateTime? startDate = null,
            [FromQuery] System.DateTime? endDate = null,
            [FromQuery] string? status = null,
            CancellationToken ct = default)
        {
            var result = await _salesEntriesService.GetQuotationsAsync(page, pageSize, search, clientType, salesmanId, startDate, endDate, status, ct);
            return Ok(result);
        }

        [HttpGet("quotations/{idOrDoc}")]
        public async Task<ActionResult<QuotationDetailResponse>> GetQuotationDetail(string idOrDoc, CancellationToken ct)
        {
            var result = await _salesEntriesService.GetQuotationByIdAsync(idOrDoc, ct);
            return result == null ? NotFound() : Ok(result);
        }

        [HttpPost("quotations/{idOrDoc}/status")]
        public async Task<IActionResult> UpdateQuotationStatus(
            string idOrDoc,
            [FromBody] UpdateQuotationStatusRequest request,
            CancellationToken ct)
        {
            var success = await _salesEntriesService.UpdateQuotationStatusAsync(idOrDoc, request.Status, request.Note, ct);
            if (!success) return BadRequest(new { Message = "Failed to update quotation status in Sales Portal." });
            return Ok(new { Success = true, Status = request.Status });
        }

        [HttpGet("quotations/{idOrDoc}/pdf")]
        public async Task<IActionResult> GetQuotationPdf(string idOrDoc, CancellationToken ct)
        {
            var bytes = await _salesEntriesService.GetQuotationPdfAsync(idOrDoc, ct);
            if (bytes == null || bytes.Length == 0) return NotFound("Quotation PDF not found.");

            return File(bytes, "application/pdf", $"{idOrDoc}.pdf");
        }

        
        public record UpdateBookingOperationClosedRequest(bool OperationClosed);

        [HttpPost("{serviceType}/{idOrDoc}/operation-closed")]
        public async Task<IActionResult> UpdateOperationClosed(
            string serviceType,
            string idOrDoc,
            [FromBody] UpdateBookingOperationClosedRequest request,
            CancellationToken ct)
        {
            try
            {
                var id = await ResolveBookingIdAsync(serviceType, idOrDoc, ct);
                if (!id.HasValue) return NotFound();

                var roleClaim = User.FindFirstValue(ClaimTypes.Role) ?? string.Empty;
                var isMaster = roleClaim.Replace(" ", "_").Equals("master_accountant", StringComparison.OrdinalIgnoreCase)
                    || User.IsInRole("master_accountant") || User.IsInRole("Master Accountant");

                await _salesEntriesService.UpdateBookingOperationClosedAsync(serviceType, id.Value, request.OperationClosed, GetCurrentUserId(), isMaster, ct);
                return Ok(new { Success = true, ServiceType = serviceType, Id = id.Value, OperationClosed = request.OperationClosed });
            }
            catch (InvalidOperationException ex)
            {
                return StatusCode(403, new { Message = ex.Message });
            }
            catch (Exception ex)
            {
                var msg = ex.InnerException?.Message ?? ex.Message;
                return BadRequest(new { Message = msg });
            }
        }

        public record UpdateBookingProcessingStatusRequest(string Status);

        [HttpPost("{serviceType}/{idOrDoc}/processing-status")]
        public async Task<IActionResult> UpdateProcessingStatus(
            string serviceType,
            string idOrDoc,
            [FromBody] UpdateBookingProcessingStatusRequest request,
            CancellationToken ct)
        {
            try
            {
                var id = await ResolveBookingIdAsync(serviceType, idOrDoc, ct);
                if (!id.HasValue) return NotFound();

                var roleClaim = User.FindFirstValue(ClaimTypes.Role) ?? string.Empty;
                var isMaster = roleClaim.Replace(" ", "_").Equals("master_accountant", StringComparison.OrdinalIgnoreCase)
                    || User.IsInRole("master_accountant") || User.IsInRole("Master Accountant");

                await _salesEntriesService.UpdateBookingProcessingStatusAsync(serviceType, id.Value, request.Status, GetCurrentUserId(), isMaster, ct);
                return Ok(new { Success = true, Status = request.Status });
            }
            catch (InvalidOperationException ex)
            {
                return StatusCode(403, new { Message = ex.Message });
            }
            catch (Exception ex)
            {
                var msg = ex.InnerException?.Message ?? ex.Message;
                return BadRequest(new { Message = msg });
            }
        }
    }
}


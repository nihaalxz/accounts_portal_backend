using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System;
using System.Net.Http;
using System.Net.Http.Json;
using System.Threading;
using System.Threading.Tasks;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Domain.Services;
using TexasAccountsPortal.Infrastructure.Options;
using TexasAccountsPortal.Contracts.SalesEntries;

namespace TexasAccountsPortal.Infrastructure.Services
{
    public class SalesPortalClient : ISalesPortalClient
    {
        private readonly HttpClient _httpClient;
        private readonly SalesPortalOptions _options;
        private readonly ILogger<SalesPortalClient> _logger;

        public SalesPortalClient(HttpClient httpClient, IOptions<SalesPortalOptions> options, ILogger<SalesPortalClient> logger)
        {
            _httpClient = httpClient;
            _options = options.Value;
            _logger = logger;

            // Configure headers
            var baseUrl = _options.BaseUrl ?? "http://localhost:5003";
            _httpClient.BaseAddress = new Uri(baseUrl.EndsWith("/") ? baseUrl : baseUrl + "/");
            if (!_httpClient.DefaultRequestHeaders.Contains("X-OPS-KEY"))
            {
                _httpClient.DefaultRequestHeaders.Add("X-OPS-KEY", _options.ApiKey ?? "");
            }
            if (!_httpClient.DefaultRequestHeaders.Accept.Any(h => h.MediaType == "application/json"))
            {
                _httpClient.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));
            }
        }

        public Task SyncSupplierCostAsync(
            string referenceType,
            string referenceId,
            decimal netCost,
            decimal salesReturns,
            CancellationToken cancellationToken)
        {
            // No-op: Profit and costs are managed via booking completion
            return Task.CompletedTask;
        }

        public Task SyncGovtFeeUpdateAsync(
            string serviceType,
            string externalReference,
            long paymentId,
            decimal amount,
            long? supplierId,
            string? supplierName,
            string? referenceNumber,
            string? description,
            string? status = "verified",
            string? salesFeeRowKey = null,
            CancellationToken cancellationToken = default)
        {
            // No-op: Profit and costs are managed via booking completion
            return Task.CompletedTask;
        }

        public async Task CreditHeadWalletAsync(
            long headId,
            decimal amount,
            string reason,
            CancellationToken cancellationToken)
        {
            var payload = new
            {
                amount = amount,
                description = reason
            };

            var response = await _httpClient.PostAsJsonAsync($"api/internal/wallet/heads/{headId}/credit", payload, cancellationToken);
            response.EnsureSuccessStatusCode();
        }

        public async Task DebitHeadWalletAsync(
            long headId,
            decimal amount,
            string reason,
            CancellationToken cancellationToken)
        {
            var payload = new
            {
                amount = amount,
                description = reason
            };

            var response = await _httpClient.PostAsJsonAsync($"api/internal/wallet/heads/{headId}/debit", payload, cancellationToken);
            response.EnsureSuccessStatusCode();
        }

        public async Task<decimal> GetServiceSaleAmountAsync(
            string serviceType,
            string serviceId,
            CancellationToken cancellationToken)
        {
            var normalizedType = (serviceType ?? "").ToLowerInvariant() switch
            {
                "flight_booking" or "flights" or "flight" => "flight_booking",
                "hotel_booking" or "hotels" or "hotel" => "hotel_booking",
                "holiday_package" or "holiday-packages" or "holiday" => "holiday_package",
                "vfs_appointment" or "vfs-appointments" or "vfs" => "vfs_appointment",
                "transportation" or "transportations" or "transport" => "transportation",
                "other_service" or "other-services" or "other" => "other_service",
                "visa_application" or "visa" or "visas" => "visa_application",
                _ => string.Empty
            };

            if (string.IsNullOrEmpty(normalizedType) || string.IsNullOrWhiteSpace(serviceId))
                return 0;

            try
            {
                // 1. If serviceId is pure number, try get by ID directly
                if (long.TryParse(serviceId.Trim(), out var numericId) && numericId > 0)
                {
                    switch (normalizedType)
                    {
                        case "visa_application":
                            var v = await GetVisaApplicationByIdAsync(numericId, cancellationToken);
                            if (v != null && v.PayableAmount > 0) return v.PayableAmount;
                            break;
                        case "flight_booking":
                            var f = await GetFlightBookingByIdAsync(numericId, cancellationToken);
                            if (f != null && f.PayableAmount > 0) return f.PayableAmount;
                            break;
                        case "hotel_booking":
                            var h = await GetHotelBookingByIdAsync(numericId, cancellationToken);
                            if (h != null && h.PayableAmount > 0) return h.PayableAmount;
                            break;
                        case "vfs_appointment":
                            var vfs = await GetVfsAppointmentByIdAsync(numericId, cancellationToken);
                            if (vfs != null && vfs.PayableAmount > 0) return vfs.PayableAmount;
                            break;
                        case "holiday_package":
                            var hol = await GetHolidayPackageByIdAsync(numericId, cancellationToken);
                            if (hol != null && hol.PayableAmount > 0) return hol.PayableAmount;
                            break;
                        case "transportation":
                            var tr = await GetTransportationByIdAsync(numericId, cancellationToken);
                            if (tr != null && tr.PayableAmount > 0) return tr.PayableAmount;
                            break;
                        case "other_service":
                            var oth = await GetOtherServiceByIdAsync(numericId, cancellationToken);
                            if (oth != null && oth.PayableAmount > 0) return oth.PayableAmount;
                            break;
                    }
                }

                // 2. Fallback: Search by Document Number or reference string
                switch (normalizedType)
                {
                    case "visa_application":
                        var visas = await GetVisaApplicationsAsync(1, 20, status: null, search: serviceId.Trim(), ct: cancellationToken);
                        var matchV = visas?.Items?.FirstOrDefault(x => string.Equals(x.DocumentNumber, serviceId.Trim(), StringComparison.OrdinalIgnoreCase) || x.Id.ToString() == serviceId.Trim())
                                     ?? visas?.Items?.FirstOrDefault();
                        if (matchV != null && matchV.PayableAmount > 0) return matchV.PayableAmount;
                        break;

                    case "flight_booking":
                        var flights = await GetFlightBookingsAsync(1, 20, status: null, search: serviceId.Trim(), ct: cancellationToken);
                        var matchF = flights?.Items?.FirstOrDefault(x => string.Equals(x.DocumentNumber, serviceId.Trim(), StringComparison.OrdinalIgnoreCase) || x.Id.ToString() == serviceId.Trim())
                                      ?? flights?.Items?.FirstOrDefault();
                        if (matchF != null && matchF.PayableAmount > 0) return matchF.PayableAmount;
                        break;

                    case "hotel_booking":
                        var hotels = await GetHotelBookingsAsync(1, 20, status: null, search: serviceId.Trim(), ct: cancellationToken);
                        var matchH = hotels?.Items?.FirstOrDefault(x => string.Equals(x.DocumentNumber, serviceId.Trim(), StringComparison.OrdinalIgnoreCase) || x.Id.ToString() == serviceId.Trim())
                                     ?? hotels?.Items?.FirstOrDefault();
                        if (matchH != null && matchH.PayableAmount > 0) return matchH.PayableAmount;
                        break;

                    case "vfs_appointment":
                        var vfsList = await GetVfsAppointmentsAsync(1, 20, status: null, search: serviceId.Trim(), ct: cancellationToken);
                        var matchVfs = vfsList?.Items?.FirstOrDefault(x => string.Equals(x.DocumentNumber, serviceId.Trim(), StringComparison.OrdinalIgnoreCase) || x.Id.ToString() == serviceId.Trim())
                                        ?? vfsList?.Items?.FirstOrDefault();
                        if (matchVfs != null && matchVfs.PayableAmount > 0) return matchVfs.PayableAmount;
                        break;

                    case "holiday_package":
                        var hols = await GetHolidayPackagesAsync(1, 20, status: null, search: serviceId.Trim(), ct: cancellationToken);
                        var matchHol = hols?.Items?.FirstOrDefault(x => string.Equals(x.DocumentNumber, serviceId.Trim(), StringComparison.OrdinalIgnoreCase) || x.Id.ToString() == serviceId.Trim())
                                       ?? hols?.Items?.FirstOrDefault();
                        if (matchHol != null && matchHol.PayableAmount > 0) return matchHol.PayableAmount;
                        break;

                    case "transportation":
                        var trans = await GetTransportationsAsync(1, 20, status: null, search: serviceId.Trim(), ct: cancellationToken);
                        var matchTr = trans?.Items?.FirstOrDefault(x => string.Equals(x.DocumentNumber, serviceId.Trim(), StringComparison.OrdinalIgnoreCase) || x.Id.ToString() == serviceId.Trim())
                                      ?? trans?.Items?.FirstOrDefault();
                        if (matchTr != null && matchTr.PayableAmount > 0) return matchTr.PayableAmount;
                        break;

                    case "other_service":
                        var others = await GetOtherServicesAsync(1, 20, status: null, search: serviceId.Trim(), ct: cancellationToken);
                        var matchOth = others?.Items?.FirstOrDefault(x => string.Equals(x.DocumentNumber, serviceId.Trim(), StringComparison.OrdinalIgnoreCase) || x.Id.ToString() == serviceId.Trim())
                                       ?? others?.Items?.FirstOrDefault();
                        if (matchOth != null && matchOth.PayableAmount > 0) return matchOth.PayableAmount;
                        break;
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"[SalesPortalClient] Exception in GetServiceSaleAmountAsync: {ex.Message}");
            }

            return 0;
        }

        // BFF Query Extensions implementations
        public async Task<DashboardSummaryResponse> GetDashboardSummaryAsync(CancellationToken ct)
        {
            return await GetAsync<DashboardSummaryResponse>("api/internal/operations/dashboard/summary", ct);
        }

        public async Task<PagedResponse<FlightBookingSummaryResponse>> GetFlightBookingsAsync(int page, int pageSize, string? status, string? search, DateTime? startDate = null, DateTime? endDate = null, CancellationToken ct = default)
        {
            var url = BuildUrl("api/internal/operations/flights", page, pageSize, status, search, startDate, endDate);
            return await GetAsync<PagedResponse<FlightBookingSummaryResponse>>(url, ct);
        }

        public async Task<FlightBookingDetailResponse?> GetFlightBookingByIdAsync(long id, CancellationToken ct)
        {
            return await GetOptionalAsync<FlightBookingDetailResponse>($"api/internal/operations/flights/{id}", ct);
        }

        public async Task<PagedResponse<HotelBookingSummaryResponse>> GetHotelBookingsAsync(int page, int pageSize, string? status, string? search, DateTime? startDate = null, DateTime? endDate = null, CancellationToken ct = default)
        {
            var url = BuildUrl("api/internal/operations/hotels", page, pageSize, status, search, startDate, endDate);
            return await GetAsync<PagedResponse<HotelBookingSummaryResponse>>(url, ct);
        }

        public async Task<HotelBookingDetailResponse?> GetHotelBookingByIdAsync(long id, CancellationToken ct)
        {
            return await GetOptionalAsync<HotelBookingDetailResponse>($"api/internal/operations/hotels/{id}", ct);
        }

        public async Task<PagedResponse<VisaApplicationSummaryResponse>> GetVisaApplicationsAsync(int page, int pageSize, string? status, string? search, DateTime? startDate = null, DateTime? endDate = null, CancellationToken ct = default)
        {
            var url = BuildUrl("api/internal/operations/visas", page, pageSize, status, search, startDate, endDate);
            return await GetAsync<PagedResponse<VisaApplicationSummaryResponse>>(url, ct);
        }

        public async Task<VisaApplicationDetailResponse?> GetVisaApplicationByIdAsync(long id, CancellationToken ct)
        {
            return await GetOptionalAsync<VisaApplicationDetailResponse>($"api/internal/operations/visas/{id}", ct);
        }

        public async Task<PagedResponse<VfsAppointmentSummaryResponse>> GetVfsAppointmentsAsync(int page, int pageSize, string? status, string? search, DateTime? startDate = null, DateTime? endDate = null, CancellationToken ct = default)
        {
            var url = BuildUrl("api/internal/operations/vfs-appointments", page, pageSize, status, search, startDate, endDate);
            return await GetAsync<PagedResponse<VfsAppointmentSummaryResponse>>(url, ct);
        }

        public async Task<VfsAppointmentDetailResponse?> GetVfsAppointmentByIdAsync(long id, CancellationToken ct)
        {
            return await GetOptionalAsync<VfsAppointmentDetailResponse>($"api/internal/operations/vfs-appointments/{id}", ct);
        }

        public async Task<PagedResponse<HolidayPackageSummaryResponse>> GetHolidayPackagesAsync(int page, int pageSize, string? status, string? search, DateTime? startDate = null, DateTime? endDate = null, CancellationToken ct = default)
        {
            var url = BuildUrl("api/internal/operations/holiday-packages", page, pageSize, status, search, startDate, endDate);
            return await GetAsync<PagedResponse<HolidayPackageSummaryResponse>>(url, ct);
        }

        public async Task<HolidayPackageDetailResponse?> GetHolidayPackageByIdAsync(long id, CancellationToken ct)
        {
            return await GetOptionalAsync<HolidayPackageDetailResponse>($"api/internal/operations/holiday-packages/{id}", ct);
        }

        public async Task<PagedResponse<TransportationSummaryResponse>> GetTransportationsAsync(int page, int pageSize, string? status, string? search, DateTime? startDate = null, DateTime? endDate = null, CancellationToken ct = default)
        {
            var url = BuildUrl("api/internal/operations/transportations", page, pageSize, status, search, startDate, endDate);
            return await GetAsync<PagedResponse<TransportationSummaryResponse>>(url, ct);
        }

        public async Task<TransportationDetailResponse?> GetTransportationByIdAsync(long id, CancellationToken ct)
        {
            return await GetOptionalAsync<TransportationDetailResponse>($"api/internal/operations/transportations/{id}", ct);
        }

        public async Task<PagedResponse<OtherServiceSummaryResponse>> GetOtherServicesAsync(int page, int pageSize, string? status, string? search, DateTime? startDate = null, DateTime? endDate = null, CancellationToken ct = default)
        {
            var url = BuildUrl("api/internal/operations/other-services", page, pageSize, status, search, startDate, endDate);
            return await GetAsync<PagedResponse<OtherServiceSummaryResponse>>(url, ct);
        }

        public async Task<OtherServiceDetailResponse?> GetOtherServiceByIdAsync(long id, CancellationToken ct)
        {
            return await GetOptionalAsync<OtherServiceDetailResponse>($"api/internal/operations/other-services/{id}", ct);
        }

        public Task<PagedResponse<HeadSummaryResponse>> GetHeadsAsync(int page, int pageSize, string? search, string? type = null, CancellationToken ct = default)
        {
            return GetHeadsAsync(page, pageSize, search, type, null, ct);
        }

        public async Task<PagedResponse<HeadSummaryResponse>> GetHeadsAsync(int page, int pageSize, string? search, string? type, long? salesmanId, CancellationToken ct = default)
        {
            var path = (salesmanId.HasValue && salesmanId.Value > 0)
                ? $"api/internal/operations/salesmen/{salesmanId.Value}/heads"
                : "api/internal/operations/heads";
            var url = BuildUrl(path, page, pageSize, search);
            if (!string.IsNullOrWhiteSpace(type))
            {
                url += $"&type={System.Uri.EscapeDataString(type)}";
            }
            if (salesmanId.HasValue && salesmanId.Value > 0)
            {
                url += $"&salesmanId={salesmanId.Value}";
            }
            return await GetAsync<PagedResponse<HeadSummaryResponse>>(url, ct);
        }

        public async Task<HeadDetailResponse?> GetHeadByIdAsync(long id, CancellationToken ct)
        {
            return await GetOptionalAsync<HeadDetailResponse>($"api/internal/operations/heads/{id}", ct);
        }

        public async Task<HeadDetailResponse?> UpdateHeadAsync(long id, UpdateHeadRequest request, CancellationToken ct = default)
        {
            try
            {
                var response = await _httpClient.PutAsJsonAsync($"api/internal/operations/heads/{id}", request, ct);
                if (!response.IsSuccessStatusCode)
                {
                    _logger.LogWarning("Failed to update head {HeadId} on Sales Portal: {StatusCode}", id, response.StatusCode);
                    return null;
                }
                return await response.Content.ReadFromJsonAsync<HeadDetailResponse>(cancellationToken: ct);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error calling internal Sales Portal update head for {HeadId}", id);
                return null;
            }
        }

        public async Task<HeadSummaryStatsResponse?> GetHeadsSummaryAsync(long? salesmanId = null, CancellationToken ct = default)
        {
            var url = "api/internal/operations/heads/summary";
            if (salesmanId.HasValue && salesmanId.Value > 0)
            {
                url += $"?salesmanId={salesmanId.Value}";
            }
            return await GetOptionalAsync<HeadSummaryStatsResponse>(url, ct);
        }

        public async Task<bool> DeleteHeadAsync(long id, CancellationToken ct = default)
        {
            try
            {
                var response = await _httpClient.DeleteAsync($"api/internal/operations/heads/{id}", ct);
                if (!response.IsSuccessStatusCode)
                {
                    _logger.LogWarning("Failed to delete head {HeadId} on Sales Portal: {StatusCode}", id, response.StatusCode);
                    return false;
                }
                return true;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error calling internal Sales Portal delete head for {HeadId}", id);
                return false;
            }
        }

        public async Task<PagedResponse<HeadLedgerEntryResponse>> GetHeadLedgerAsync(long headId, string? type, int page, int pageSize, CancellationToken ct)
        {
            var url = $"api/internal/operations/heads/{headId}/ledger?page={page}&pageSize={pageSize}";
            if (!string.IsNullOrWhiteSpace(type))
            {
                url += $"&type={System.Uri.EscapeDataString(type)}";
            }
            return await GetAsync<PagedResponse<HeadLedgerEntryResponse>>(url, ct);
        }

        public async Task<PagedResponse<LeadSummaryResponse>> GetLeadsAsync(int page, int pageSize, string? status, string? search, CancellationToken ct)
        {
            var url = BuildUrl("api/internal/operations/leads", page, pageSize, status, search);
            return await GetAsync<PagedResponse<LeadSummaryResponse>>(url, ct);
        }


        public async Task<LeadDetailResponse?> GetLeadByIdAsync(long id, CancellationToken ct)
        {
            return await GetOptionalAsync<LeadDetailResponse>($"api/internal/operations/leads/{id}", ct);
        }

        public async Task<PagedResponse<ReceiptSummaryResponse>> GetReceiptsAsync(int page, int pageSize, string? search, DateTime? startDate = null, DateTime? endDate = null, CancellationToken ct = default)
        {
            var url = BuildUrl("api/internal/operations/receipts", page, pageSize, null, search, startDate, endDate);
            return await GetAsync<PagedResponse<ReceiptSummaryResponse>>(url, ct);
        }

        public async Task<ReceiptDetailResponse?> GetReceiptByIdAsync(long id, CancellationToken ct)
        {
            return await GetOptionalAsync<ReceiptDetailResponse>($"api/internal/operations/receipts/{id}", ct);
        }

        public async Task<ReceiptDetailResponse?> CreateReceiptAsync(CreateReceiptRequest request, CancellationToken ct = default)
        {
            var response = await _httpClient.PostAsJsonAsync("api/internal/operations/receipts", request, cancellationToken: ct);
            if (!response.IsSuccessStatusCode)
            {
                var errorContent = await response.Content.ReadAsStringAsync(ct);
                throw new HttpRequestException($"SalesPortal POST api/internal/operations/receipts failed with status {(int)response.StatusCode} ({response.StatusCode}): {errorContent}", null, response.StatusCode);
            }
            return await response.Content.ReadFromJsonAsync<ReceiptDetailResponse>(JsonOptions, cancellationToken: ct);
        }

        public async Task<ReceiptDetailResponse?> CreateReceiptAsync(TexasAccountsPortal.Contracts.SalesEntries.CreateInternalReceiptRequest request, CancellationToken ct = default)
        {
            var response = await _httpClient.PostAsJsonAsync("api/internal/operations/receipts", request, cancellationToken: ct);
            if (!response.IsSuccessStatusCode)
            {
                var errorContent = await response.Content.ReadAsStringAsync(ct);
                throw new HttpRequestException($"SalesPortal POST api/internal/operations/receipts failed with status {(int)response.StatusCode} ({response.StatusCode}): {errorContent}", null, response.StatusCode);
            }
            return await response.Content.ReadFromJsonAsync<ReceiptDetailResponse>(JsonOptions, cancellationToken: ct);
        }

        public async Task<PagedResponse<HeadSummaryResponse>> GetSalesmanHeadsAsync(long salesmanId, string? search, int page, int pageSize, CancellationToken ct = default)
        {
            var path = salesmanId > 0
                ? $"api/internal/operations/salesmen/{salesmanId}/heads"
                : "api/internal/operations/heads";
            var url = BuildUrl(path, page, pageSize, search) + (salesmanId > 0 ? $"&salesmanId={salesmanId}" : "");
            return await GetAsync<PagedResponse<HeadSummaryResponse>>(url, ct);
        }

        // Helper methods
        private async Task<T> GetAsync<T>(string url, CancellationToken ct)
        {
            var response = await _httpClient.GetAsync(url, ct);
            if (!response.IsSuccessStatusCode)
            {
                var errorContent = await response.Content.ReadAsStringAsync(ct);
                throw new HttpRequestException($"SalesPortal GET {url} failed with status {(int)response.StatusCode} ({response.StatusCode}): {errorContent}", null, response.StatusCode);
            }
            return (await response.Content.ReadFromJsonAsync<T>(JsonOptions, cancellationToken: ct))!;
        }

        private async Task<T?> GetOptionalAsync<T>(string url, CancellationToken ct)
        {
            var response = await _httpClient.GetAsync(url, ct);
            if (response.StatusCode == System.Net.HttpStatusCode.NotFound)
                return default;
            if (!response.IsSuccessStatusCode)
            {
                var errorContent = await response.Content.ReadAsStringAsync(ct);
                throw new HttpRequestException($"SalesPortal GET {url} failed with status {(int)response.StatusCode} ({response.StatusCode}): {errorContent}", null, response.StatusCode);
            }
            return await response.Content.ReadFromJsonAsync<T>(JsonOptions, cancellationToken: ct);
        }

        private string BuildUrl(string basePath, int page, int pageSize, string? status, string? search, DateTime? startDate = null, DateTime? endDate = null)
        {
            var query = $"page={page}&pageSize={pageSize}";
            if (!string.IsNullOrWhiteSpace(status)) query += $"&status={Uri.EscapeDataString(status)}";
            if (!string.IsNullOrWhiteSpace(search)) query += $"&search={Uri.EscapeDataString(search)}";
            if (startDate.HasValue) query += $"&startDate={Uri.EscapeDataString(startDate.Value.ToString("o"))}";
            if (endDate.HasValue) query += $"&endDate={Uri.EscapeDataString(endDate.Value.ToString("o"))}";
            return $"{basePath}?{query}";
        }

        private string BuildUrl(string basePath, int page, int pageSize, string? search)
        {
            var query = $"page={page}&pageSize={pageSize}";
            if (!string.IsNullOrWhiteSpace(search)) query += $"&search={Uri.EscapeDataString(search)}";
            return $"{basePath}?{query}";
        }

        public async Task<PagedResponse<OpenDealEntryResponse>> GetOpenDealsAsync(int page, int pageSize, string? serviceType = null, string? search = null, long? salesmanId = null, string? paymentStatus = null, DateTime? startDate = null, DateTime? endDate = null, CancellationToken ct = default)
        {
            var url = $"api/internal/operations/open-deals?page={page}&pageSize={pageSize}";
            if (!string.IsNullOrWhiteSpace(serviceType)) url += $"&serviceType={Uri.EscapeDataString(serviceType)}";
            if (!string.IsNullOrWhiteSpace(search)) url += $"&search={Uri.EscapeDataString(search)}";
            if (salesmanId.HasValue) url += $"&salesmanId={salesmanId.Value}";
            if (!string.IsNullOrWhiteSpace(paymentStatus)) url += $"&paymentStatus={Uri.EscapeDataString(paymentStatus)}";
            if (startDate.HasValue) url += $"&startDate={Uri.EscapeDataString(startDate.Value.ToString("o"))}";
            if (endDate.HasValue) url += $"&endDate={Uri.EscapeDataString(endDate.Value.ToString("o"))}";
            return await GetAsync<PagedResponse<OpenDealEntryResponse>>(url, ct) ?? PagedResponse<OpenDealEntryResponse>.Create(new List<OpenDealEntryResponse>(), 0, page, pageSize);
        }

        public async Task<OpenDealsSummaryResponse> GetOpenDealsSummaryAsync(string? serviceType = null, string? search = null, long? salesmanId = null, string? paymentStatus = null, DateTime? startDate = null, DateTime? endDate = null, CancellationToken ct = default)
        {
            var url = "api/internal/operations/open-deals/summary";
            var query = new List<string>();
            if (!string.IsNullOrWhiteSpace(serviceType)) query.Add($"serviceType={Uri.EscapeDataString(serviceType)}");
            if (!string.IsNullOrWhiteSpace(search)) query.Add($"search={Uri.EscapeDataString(search)}");
            if (salesmanId.HasValue) query.Add($"salesmanId={salesmanId.Value}");
            if (!string.IsNullOrWhiteSpace(paymentStatus)) query.Add($"paymentStatus={Uri.EscapeDataString(paymentStatus)}");
            if (startDate.HasValue) query.Add($"startDate={Uri.EscapeDataString(startDate.Value.ToString("o"))}");
            if (endDate.HasValue) query.Add($"endDate={Uri.EscapeDataString(endDate.Value.ToString("o"))}");
            if (query.Count > 0) url += "?" + string.Join("&", query);
            return await GetAsync<OpenDealsSummaryResponse>(url, ct) ?? new OpenDealsSummaryResponse();
        }

        public async Task<IEnumerable<SalesmanResponse>> GetSalesmenAsync(CancellationToken ct)
        {
            return await GetAsync<List<SalesmanResponse>>("api/internal/operations/salesmen", ct);
        }

                public async Task<IEnumerable<SalesmanServiceEntryResponse>> GetSalesmanServiceEntriesAsync(long salesmanId, string? salesmanName = null, DateTime? startDate = null, DateTime? endDate = null, CancellationToken ct = default)
        {
            var url = $"api/internal/operations/salesmen/{salesmanId}/service-entries";
            var query = new List<string>();
            if (!string.IsNullOrWhiteSpace(salesmanName)) query.Add($"salesmanName={Uri.EscapeDataString(salesmanName)}");
            if (startDate.HasValue) query.Add($"startDate={Uri.EscapeDataString(startDate.Value.ToString("o"))}");
            if (endDate.HasValue) query.Add($"endDate={Uri.EscapeDataString(endDate.Value.ToString("o"))}");
            if (query.Count > 0) url += "?" + string.Join("&", query);
            return await GetAsync<List<SalesmanServiceEntryResponse>>(url, ct) ?? new List<SalesmanServiceEntryResponse>();
        }

        public async Task<IEnumerable<SalesmanReportResponse>> GetSalesmenReportAsync(DateTime? startDate = null, DateTime? endDate = null, CancellationToken ct = default)
        {
            var url = "api/internal/operations/salesmen/report";
            var query = new List<string>();
            if (startDate.HasValue) query.Add($"startDate={Uri.EscapeDataString(startDate.Value.ToString("o"))}");
            if (endDate.HasValue) query.Add($"endDate={Uri.EscapeDataString(endDate.Value.ToString("o"))}");
            if (query.Count > 0) url += "?" + string.Join("&", query);
            return await GetAsync<List<SalesmanReportResponse>>(url, ct);
        }

        public async Task<TexasAccountsPortal.Contracts.Reporting.OperationalBookingFinancialsSummaryResponse> GetBookingFinancialsSummaryAsync(
            DateTime? startDate = null,
            DateTime? endDate = null,
            string? dealStatus = null,
            long? salesmanId = null,
            CancellationToken ct = default)
        {
            var url = "api/internal/operations/booking-financials/summary";
            var query = new List<string>();
            if (startDate.HasValue) query.Add($"startDate={Uri.EscapeDataString(startDate.Value.ToString("o"))}");
            if (endDate.HasValue) query.Add($"endDate={Uri.EscapeDataString(endDate.Value.ToString("o"))}");
            if (!string.IsNullOrWhiteSpace(dealStatus)) query.Add($"dealStatus={Uri.EscapeDataString(dealStatus)}");
            if (salesmanId.HasValue) query.Add($"salesmanId={salesmanId.Value}");
            if (query.Count > 0) url += "?" + string.Join("&", query);

            var res = await GetAsync<TexasAccountsPortal.Contracts.Reporting.OperationalBookingFinancialsSummaryResponse>(url, ct);
            return res ?? throw new InvalidOperationException("Failed to retrieve booking financials summary from SalesPortal.");
        }

        public async Task<IEnumerable<SalesmanProfitRecordResponse>> GetSalesmanProfitRecordsAsync(long salesmanId, DateTime? startDate = null, DateTime? endDate = null, CancellationToken ct = default)
        {
            var url = $"api/internal/operations/salesmen/{salesmanId}/profit-records";
            var query = new List<string>();
            if (startDate.HasValue) query.Add($"startDate={Uri.EscapeDataString(startDate.Value.ToString("o"))}");
            if (endDate.HasValue) query.Add($"endDate={Uri.EscapeDataString(endDate.Value.ToString("o"))}");
            if (query.Count > 0) url += "?" + string.Join("&", query);
            return await GetAsync<List<SalesmanProfitRecordResponse>>(url, ct) ?? new List<SalesmanProfitRecordResponse>();
        }

        public async Task UpdatePaymentStatusAsync(string serviceType, string id, string status, string? paymentReference = null, CancellationToken cancellationToken = default)
        {
            var payload = new { status = status, paymentReference = paymentReference };
            string endpoint = serviceType.ToLower() switch
            {
                "flight_booking" or "flights" => $"flight-bookings/{id}/payment-status",
                "hotel_booking" or "hotels" => $"hotel-bookings/{id}/payment-status",
                "holiday_package" or "holiday-packages" or "holiday" => $"holiday-packages/{id}/payment-status",
                "vfs_appointment" or "vfs-appointments" or "vfs" => $"vfs-appointments/{id}/payment-status",
                "transportation" or "transportations" or "transport" => $"transportations/{id}/payment-status",
                "other_service" or "other-services" or "other" => $"other-services/{id}/payment-status",
                "visa_application" or "visa" or "visas" => $"sales-visa/applications/{id}/payment-status",
                _ => string.Empty
            };

            if (!string.IsNullOrEmpty(endpoint))
            {
                var response = await _httpClient.PostAsJsonAsync(endpoint, payload, cancellationToken);
                response.EnsureSuccessStatusCode();
            }
        }

        public async Task UpdateBookingProcessingStatusAsync(string serviceType, long id, string status, CancellationToken cancellationToken = default)
        {
            var payload = new { status = status };
            var response = await _httpClient.PostAsJsonAsync($"api/internal/operations/bookings/{Uri.EscapeDataString(serviceType)}/{id}/processing-status", payload, cancellationToken);
            response.EnsureSuccessStatusCode();
        }

        public async Task UpdateBookingOperationClosedAsync(string serviceType, long id, bool operationClosed, CancellationToken cancellationToken = default)
        {
            var payload = new { operationClosed = operationClosed };
            var response = await _httpClient.PostAsJsonAsync($"api/internal/operations/bookings/{Uri.EscapeDataString(serviceType)}/{id}/operation-closed", payload, cancellationToken);
            response.EnsureSuccessStatusCode();
        }

        public async Task UpdateReceiptStatusDirectAsync(long receiptId, string status, string? paymentReference = null, string? bankName = null, CancellationToken cancellationToken = default)
        {
            var payload = new { status = status, paymentReference = paymentReference, bankName = bankName };
            var response = await _httpClient.PostAsJsonAsync($"api/internal/operations/receipts/{receiptId}/payment-status", payload, cancellationToken);
            response.EnsureSuccessStatusCode();
        }

        public async Task SyncUserAsync(string name, string email, string? password, string userType, bool isActive, CancellationToken cancellationToken)
        {
            var payload = new
            {
                name = name,
                email = email,
                password = password,
                userType = userType,
                isActive = isActive
            };
            var response = await _httpClient.PostAsJsonAsync("api/internal/operations/users/sync", payload, cancellationToken);
            response.EnsureSuccessStatusCode();
        }

        private static readonly System.Text.Json.JsonSerializerOptions JsonOptions = new System.Text.Json.JsonSerializerOptions
        {
            PropertyNameCaseInsensitive = true
        };

        private record SalesUserFallback(long Id, string Name, string Email);

        public async Task<IEnumerable<SalesUserResponse>> GetSalesUsersAsync(CancellationToken cancellationToken)
        {
            try
            {
                var users = await GetAsync<List<SalesUserResponse>>("api/internal/operations/users", cancellationToken);
                if (users != null && users.Count > 0)
                {
                    return users;
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"[SalesPortalClient] Info: api/internal/operations/users returned error: {ex.Message}. Trying salesmen endpoint fallback.");
            }

            try
            {
                var salesmen = await GetAsync<List<SalesUserFallback>>("api/internal/operations/salesmen", cancellationToken);
                if (salesmen != null && salesmen.Count > 0)
                {
                    return salesmen.Select(s => new SalesUserResponse(
                        s.Id,
                        s.Name,
                        s.Email,
                        "Salesman",
                        true,
                        null,
                        null,
                        null,
                        DateTime.UtcNow,
                        null
                    )).ToList();
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"[SalesPortalClient] ERROR fetching salesmen fallback: {ex}");
            }

            return new List<SalesUserResponse>();
        }

        public async Task ToggleSalesUserStatusAsync(long id, bool isActive, CancellationToken cancellationToken)
        {
            var payload = new { isActive = isActive };
            var response = await _httpClient.PutAsJsonAsync($"api/internal/operations/users/{id}/status", payload, cancellationToken);
            response.EnsureSuccessStatusCode();
        }

        public async Task ResetSalesUserPasswordAsync(long id, string newPassword, CancellationToken cancellationToken)
        {
            var payload = new { newPassword = newPassword };
            var response = await _httpClient.PutAsJsonAsync($"api/internal/operations/users/{id}/password", payload, cancellationToken);
            response.EnsureSuccessStatusCode();
        }

        public async Task UpdateSalesUserEmailAsync(long id, string newEmail, CancellationToken cancellationToken)
        {
            var payload = new { newEmail = newEmail };
            var response = await _httpClient.PutAsJsonAsync($"api/internal/operations/users/{id}/email", payload, cancellationToken);
            response.EnsureSuccessStatusCode();
        }

        public async Task<PagedResponse<TexasAccountsPortal.Contracts.Disputes.DisputeResponse>> GetDisputesAsync(int page, int pageSize, string? status, string? search, string? sort, CancellationToken ct)
        {
            var query = $"page={page}&pageSize={pageSize}";
            if (!string.IsNullOrWhiteSpace(status)) query += $"&status={Uri.EscapeDataString(status)}";
            if (!string.IsNullOrWhiteSpace(search)) query += $"&search={Uri.EscapeDataString(search)}";
            if (!string.IsNullOrWhiteSpace(sort)) query += $"&sort={Uri.EscapeDataString(sort)}";

            return await GetAsync<PagedResponse<TexasAccountsPortal.Contracts.Disputes.DisputeResponse>>($"api/internal/disputes?{query}", ct);
        }

        public async Task<TexasAccountsPortal.Contracts.Disputes.DisputesDashboardResponse> GetDisputesDashboardAsync(CancellationToken ct)
        {
            return await GetAsync<TexasAccountsPortal.Contracts.Disputes.DisputesDashboardResponse>("api/internal/disputes/dashboard", ct);
        }

        public async Task<TexasAccountsPortal.Contracts.Disputes.DisputeResponse?> GetDisputeByIdAsync(long id, CancellationToken ct)
        {
            return await GetOptionalAsync<TexasAccountsPortal.Contracts.Disputes.DisputeResponse>($"api/internal/disputes/{id}", ct);
        }

        public async Task<TexasAccountsPortal.Contracts.Disputes.DisputeResponse?> SubmitDisputeDecisionAsync(long id, TexasAccountsPortal.Contracts.Disputes.DisputeDecisionRequest request, string resolvedBy, CancellationToken ct)
        {
            var response = await _httpClient.PostAsJsonAsync($"api/internal/disputes/{id}/decision?resolvedBy={Uri.EscapeDataString(resolvedBy)}", request, ct);
            response.EnsureSuccessStatusCode();
            return await response.Content.ReadFromJsonAsync<TexasAccountsPortal.Contracts.Disputes.DisputeResponse>(JsonOptions, cancellationToken: ct);
        }

        public async Task<System.Collections.Generic.Dictionary<string, string>> GetBatchDocumentNumbersAsync(System.Collections.Generic.List<(string ServiceType, string ExternalReference)> items, CancellationToken ct = default)
        {
            var result = new System.Collections.Generic.Dictionary<string, string>();
            if (items == null || items.Count == 0) return result;

            try
            {
                var payload = items.Select(x => new { ServiceType = x.ServiceType, ExternalReference = x.ExternalReference }).ToList();
                var response = await _httpClient.PostAsJsonAsync("api/internal/operations/batch-document-numbers", payload, ct);
                if (response.IsSuccessStatusCode)
                {
                    var list = await response.Content.ReadFromJsonAsync<System.Collections.Generic.List<BatchDocNoDto>>(JsonOptions, cancellationToken: ct);
                    if (list != null)
                    {
                        foreach (var item in list)
                        {
                            var key = $"{item.ServiceType}:{item.ExternalReference}";
                            if (!string.IsNullOrWhiteSpace(item.DocumentNumber))
                            {
                                result[key] = item.DocumentNumber;
                            }
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"[SalesPortalClient] ERROR batch fetching doc numbers: {ex.Message}");
            }

            return result;
        }

        public async Task NotifySupplierPaymentApprovedAsync(string? serviceType, string? externalReference, CancellationToken cancellationToken = default)
        {
            if (string.IsNullOrWhiteSpace(serviceType) || string.IsNullOrWhiteSpace(externalReference)) return;
            var normType = TransactionReferenceTypeParser.Normalize(serviceType)?.ToString() ?? serviceType;
            var url = $"api/internal/profit/refresh/{Uri.EscapeDataString(normType)}/{Uri.EscapeDataString(externalReference)}";
            try
            {
                await _httpClient.PostAsync(url, null, cancellationToken);
            }
            catch (Exception ex)
            {
                _logger.LogWarning(ex, "Failed to notify Sales Portal of approved supplier payment for {Type} {Ref}", normType, externalReference);
            }
        }

        public async Task UpdateSalesUserTargetsAsync(long userId, decimal monthlyTarget, decimal profitTarget, CancellationToken cancellationToken = default)
        {
            var payload = new { MonthlyTarget = monthlyTarget, ProfitTarget = profitTarget };
            var response = await _httpClient.PutAsJsonAsync($"api/internal/operations/users/{userId}/targets", payload, cancellationToken);
            response.EnsureSuccessStatusCode();
        }

        
        public async Task<PagedResponse<QuotationSummaryResponse>> GetQuotationsAsync(int page, int pageSize, string? search, string? clientType, long? salesmanId, DateTime? startDate, DateTime? endDate, string? status, CancellationToken ct)
        {
            var query = $"page={page}&pageSize={pageSize}";
            if (!string.IsNullOrWhiteSpace(search)) query += $"&search={Uri.EscapeDataString(search)}";
            if (!string.IsNullOrWhiteSpace(clientType)) query += $"&clientType={Uri.EscapeDataString(clientType)}";
            if (salesmanId.HasValue && salesmanId.Value > 0) query += $"&salesmanId={salesmanId.Value}";
            if (startDate.HasValue) query += $"&startDate={startDate.Value:yyyy-MM-dd}";
            if (endDate.HasValue) query += $"&endDate={endDate.Value:yyyy-MM-dd}";
            if (!string.IsNullOrWhiteSpace(status)) query += $"&status={Uri.EscapeDataString(status)}";

            return await GetAsync<PagedResponse<QuotationSummaryResponse>>($"api/internal/operations/quotations?{query}", ct);
        }

        public async Task<QuotationDetailResponse?> GetQuotationByIdAsync(string idOrDoc, CancellationToken ct)
        {
            return await GetOptionalAsync<QuotationDetailResponse>($"api/internal/operations/quotations/{Uri.EscapeDataString(idOrDoc)}", ct);
        }

        public async Task<byte[]?> GetQuotationPdfAsync(string idOrDoc, CancellationToken ct)
        {
            try
            {
                var response = await _httpClient.GetAsync($"api/internal/operations/quotations/{Uri.EscapeDataString(idOrDoc)}/pdf", ct);
                if (response.IsSuccessStatusCode)
                {
                    return await response.Content.ReadAsByteArrayAsync(ct);
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"[SalesPortalClient] Error fetching quotation PDF for {idOrDoc}: {ex.Message}");
            }
            return null;
        }

        public async Task<bool> UpdateQuotationStatusAsync(string idOrDoc, string status, string? note = null, CancellationToken ct = default)
        {
            try
            {
                var payload = new { Status = status, Note = note };
                var response = await _httpClient.PostAsJsonAsync($"api/internal/operations/quotations/{Uri.EscapeDataString(idOrDoc)}/status", payload, ct);
                return response.IsSuccessStatusCode;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"[SalesPortalClient] Error updating quotation status for {idOrDoc}: {ex.Message}");
                return false;
            }
        }

        public async Task<bool> AddProfitAdjustmentAsync(TexasAccountsPortal.Contracts.SalesEntries.SalesmanProfitAdjustmentRequest request, CancellationToken cancellationToken = default)
        {
            var response = await _httpClient.PostAsJsonAsync("api/internal/profit/adjust", request, cancellationToken);
            if (!response.IsSuccessStatusCode)
            {
                var errorText = await response.Content.ReadAsStringAsync(cancellationToken);
                Console.WriteLine($"[SalesPortalClient] Profit adjustment failed: {response.StatusCode} - {errorText}");
            }
            response.EnsureSuccessStatusCode();
            return true;
        }

        public record BatchDocNoDto(string ServiceType, string ExternalReference, string DocumentNumber);
    }
}




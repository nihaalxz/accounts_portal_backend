using System.Threading;
using System.Threading.Tasks;
using TexasAccountsPortal.Contracts.SalesEntries;

namespace TexasAccountsPortal.Application.Interfaces
{
    public interface ISalesEntriesService
    {
        Task<DashboardSummaryResponse> GetDashboardSummaryAsync(CancellationToken ct);
        Task<PagedResponse<FlightBookingSummaryResponse>> GetFlightBookingsAsync(int page, int pageSize, string? status, string? search, System.DateTime? startDate = null, System.DateTime? endDate = null, CancellationToken ct = default);
        Task<SalesEntryDetailResponse<FlightBookingDetailResponse>?> GetFlightBookingByIdAsync(long id, CancellationToken ct);
        Task<PagedResponse<HotelBookingSummaryResponse>> GetHotelBookingsAsync(int page, int pageSize, string? status, string? search, System.DateTime? startDate = null, System.DateTime? endDate = null, CancellationToken ct = default);
        Task<SalesEntryDetailResponse<HotelBookingDetailResponse>?> GetHotelBookingByIdAsync(long id, CancellationToken ct);
        Task<PagedResponse<VisaApplicationSummaryResponse>> GetVisaApplicationsAsync(int page, int pageSize, string? status, string? search, System.DateTime? startDate = null, System.DateTime? endDate = null, CancellationToken ct = default);
        Task<SalesEntryDetailResponse<VisaApplicationDetailResponse>?> GetVisaApplicationByIdAsync(long id, CancellationToken ct);
        Task<PagedResponse<VfsAppointmentSummaryResponse>> GetVfsAppointmentsAsync(int page, int pageSize, string? status, string? search, System.DateTime? startDate = null, System.DateTime? endDate = null, CancellationToken ct = default);
        Task<SalesEntryDetailResponse<VfsAppointmentDetailResponse>?> GetVfsAppointmentByIdAsync(long id, CancellationToken ct);
        Task<PagedResponse<HolidayPackageSummaryResponse>> GetHolidayPackagesAsync(int page, int pageSize, string? status, string? search, System.DateTime? startDate = null, System.DateTime? endDate = null, CancellationToken ct = default);
        Task<SalesEntryDetailResponse<HolidayPackageDetailResponse>?> GetHolidayPackageByIdAsync(long id, CancellationToken ct);
        Task<PagedResponse<TransportationSummaryResponse>> GetTransportationsAsync(int page, int pageSize, string? status, string? search, System.DateTime? startDate = null, System.DateTime? endDate = null, CancellationToken ct = default);
        Task<SalesEntryDetailResponse<TransportationDetailResponse>?> GetTransportationByIdAsync(long id, CancellationToken ct);
        Task<PagedResponse<OtherServiceSummaryResponse>> GetOtherServicesAsync(int page, int pageSize, string? status, string? search, System.DateTime? startDate = null, System.DateTime? endDate = null, CancellationToken ct = default);
        Task<SalesEntryDetailResponse<OtherServiceDetailResponse>?> GetOtherServiceByIdAsync(long id, CancellationToken ct);
        Task<PagedResponse<HeadSummaryResponse>> GetHeadsAsync(int page, int pageSize, string? search, string? type = null, CancellationToken ct = default);
        Task<PagedResponse<HeadSummaryResponse>> GetHeadsAsync(int page, int pageSize, string? search, string? type, long? salesmanId, CancellationToken ct = default);
        Task<HeadDetailResponse?> GetHeadByIdAsync(long id, string? type = null, CancellationToken ct = default);
        Task<HeadDetailResponse?> UpdateHeadAsync(long id, UpdateHeadRequest request, long currentUserId, CancellationToken ct = default);
        Task<HeadSummaryStatsResponse> GetHeadsSummaryAsync(long? salesmanId, CancellationToken ct = default);
        Task<bool> DeleteHeadAsync(long id, CancellationToken ct = default);
        Task<PagedResponse<HeadLedgerEntryResponse>> GetHeadLedgerAsync(long headId, string? type = null, int page = 1, int pageSize = 20, CancellationToken ct = default);
        Task<PagedResponse<LeadSummaryResponse>> GetLeadsAsync(int page, int pageSize, string? status, string? search, CancellationToken ct);
        Task<LeadDetailResponse?> GetLeadByIdAsync(long id, CancellationToken ct);
        Task<PagedResponse<ReceiptSummaryResponse>> GetReceiptsAsync(int page, int pageSize, string? search, System.DateTime? startDate = null, System.DateTime? endDate = null, CancellationToken ct = default);
        Task<ReceiptDetailResponse?> GetReceiptByIdAsync(long id, CancellationToken ct);
        Task<ReceiptDetailResponse?> GetReceiptByIdentifierAsync(string identifier, CancellationToken ct);
        Task<PagedResponse<AccountsReceiptSummaryDto>> GetAccountsReceiptsAsync(int page, int pageSize, string? search, System.DateTime? startDate = null, System.DateTime? endDate = null, CancellationToken ct = default);
        Task<System.Collections.Generic.IEnumerable<SalesmanResponse>> GetSalesmenAsync(CancellationToken ct);
        Task<PagedResponse<OpenDealEntryResponse>> GetOpenDealsAsync(int page, int pageSize, string? serviceType = null, string? search = null, long? salesmanId = null, string? paymentStatus = null, System.DateTime? startDate = null, System.DateTime? endDate = null, CancellationToken ct = default);
        Task<OpenDealsSummaryResponse> GetOpenDealsSummaryAsync(string? serviceType = null, string? search = null, long? salesmanId = null, string? paymentStatus = null, System.DateTime? startDate = null, System.DateTime? endDate = null, CancellationToken ct = default);
        Task<System.Collections.Generic.IEnumerable<SalesmanReportResponse>> GetSalesmenReportAsync(System.DateTime? startDate = null, System.DateTime? endDate = null, CancellationToken ct = default);
        Task<System.Collections.Generic.IEnumerable<SalesmanServiceEntryResponse>> GetSalesmanServiceEntriesAsync(long salesmanId, string? salesmanName = null, System.DateTime? startDate = null, System.DateTime? endDate = null, CancellationToken ct = default);
        Task<System.Collections.Generic.IEnumerable<SalesmanProfitRecordResponse>> GetSalesmanProfitRecordsAsync(long salesmanId, System.DateTime? startDate = null, System.DateTime? endDate = null, CancellationToken ct = default);
        Task UpdatePaymentStatusAsync(string serviceType, long id, string status, long approvedByUserId, long? cashAccountId, string? referenceId, CancellationToken ct);
        Task UpdateBookingProcessingStatusAsync(string serviceType, long id, string status, long userId, bool isMasterAccountant, CancellationToken ct);
        Task UpdateBookingOperationClosedAsync(string serviceType, long id, bool operationClosed, long userId, bool isMasterAccountant, CancellationToken ct);
        Task UpdateReceiptPaymentStatusAsync(long receiptId, string status, long approvedByUserId, long? cashAccountId, string? referenceId, CancellationToken ct);
        Task<ReceiptDetailResponse> CreateReceiptAsync(CreateAccountsReceiptRequest request, long currentUserId, CancellationToken ct = default);
        Task<AccountsReceiptSummaryDto> RetryAccountsReceiptSyncAsync(long id, long currentUserId, CancellationToken ct = default);
        Task<PagedResponse<SalesmanClientSummaryDto>> GetSalesmanClientsAsync(long salesmanId, string clientType, string? search, int page, int pageSize, CancellationToken ct = default);

        Task<PagedResponse<QuotationSummaryResponse>> GetQuotationsAsync(int page, int pageSize, string? search, string? clientType, long? salesmanId, System.DateTime? startDate = null, System.DateTime? endDate = null, string? status = null, CancellationToken ct = default);
        Task<QuotationDetailResponse?> GetQuotationByIdAsync(string idOrDoc, CancellationToken ct);
        Task<byte[]?> GetQuotationPdfAsync(string idOrDoc, CancellationToken ct);
        Task<bool> UpdateQuotationStatusAsync(string idOrDoc, string status, string? note = null, CancellationToken ct = default);
        Task<bool> AddProfitAdjustmentAsync(SalesmanProfitAdjustmentRequest request, long currentUserId, CancellationToken ct = default);
    }
}


using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using TexasAccountsPortal.Contracts.SalesEntries;

namespace TexasAccountsPortal.Application.Interfaces
{
    public interface ISalesPortalClient
    {
        Task SyncSupplierCostAsync(string referenceType, string referenceId, decimal netCost, decimal salesReturns, CancellationToken cancellationToken);
        Task SyncGovtFeeUpdateAsync(string serviceType, string externalReference, long paymentId, decimal amount, long? supplierId, string? supplierName, string? referenceNumber, string? description, string? status = "verified", string? salesFeeRowKey = null, CancellationToken cancellationToken = default);
        Task CreditHeadWalletAsync(long headId, decimal amount, string reason, CancellationToken cancellationToken);
        Task DebitHeadWalletAsync(long headId, decimal amount, string reason, CancellationToken cancellationToken);
        Task<decimal> GetServiceSaleAmountAsync(string serviceType, string serviceId, CancellationToken cancellationToken);

        // BFF Query Extensions
        Task<DashboardSummaryResponse> GetDashboardSummaryAsync(CancellationToken ct);
        Task<PagedResponse<FlightBookingSummaryResponse>> GetFlightBookingsAsync(int page, int pageSize, string? status, string? search, System.DateTime? startDate = null, System.DateTime? endDate = null, CancellationToken ct = default);
        Task<FlightBookingDetailResponse?> GetFlightBookingByIdAsync(long id, CancellationToken ct);
        Task<PagedResponse<HotelBookingSummaryResponse>> GetHotelBookingsAsync(int page, int pageSize, string? status, string? search, System.DateTime? startDate = null, System.DateTime? endDate = null, CancellationToken ct = default);
        Task<HotelBookingDetailResponse?> GetHotelBookingByIdAsync(long id, CancellationToken ct);
        Task<PagedResponse<VisaApplicationSummaryResponse>> GetVisaApplicationsAsync(int page, int pageSize, string? status, string? search, System.DateTime? startDate = null, System.DateTime? endDate = null, CancellationToken ct = default);
        Task<VisaApplicationDetailResponse?> GetVisaApplicationByIdAsync(long id, CancellationToken ct);
        Task<PagedResponse<VfsAppointmentSummaryResponse>> GetVfsAppointmentsAsync(int page, int pageSize, string? status, string? search, System.DateTime? startDate = null, System.DateTime? endDate = null, CancellationToken ct = default);
        Task<VfsAppointmentDetailResponse?> GetVfsAppointmentByIdAsync(long id, CancellationToken ct);
        Task<PagedResponse<HolidayPackageSummaryResponse>> GetHolidayPackagesAsync(int page, int pageSize, string? status, string? search, System.DateTime? startDate = null, System.DateTime? endDate = null, CancellationToken ct = default);
        Task<HolidayPackageDetailResponse?> GetHolidayPackageByIdAsync(long id, CancellationToken ct);
        Task<PagedResponse<TransportationSummaryResponse>> GetTransportationsAsync(int page, int pageSize, string? status, string? search, System.DateTime? startDate = null, System.DateTime? endDate = null, CancellationToken ct = default);
        Task<TransportationDetailResponse?> GetTransportationByIdAsync(long id, CancellationToken ct);
        Task<PagedResponse<OtherServiceSummaryResponse>> GetOtherServicesAsync(int page, int pageSize, string? status, string? search, System.DateTime? startDate = null, System.DateTime? endDate = null, CancellationToken ct = default);
        Task<OtherServiceDetailResponse?> GetOtherServiceByIdAsync(long id, CancellationToken ct);
        Task<PagedResponse<HeadSummaryResponse>> GetHeadsAsync(int page, int pageSize, string? search, string? type = null, CancellationToken ct = default);
        Task<PagedResponse<HeadSummaryResponse>> GetHeadsAsync(int page, int pageSize, string? search, string? type, long? salesmanId, CancellationToken ct = default);
        Task<HeadDetailResponse?> GetHeadByIdAsync(long id, CancellationToken ct);
        Task<HeadDetailResponse?> UpdateHeadAsync(long id, UpdateHeadRequest request, CancellationToken ct = default);
        Task<HeadSummaryStatsResponse?> GetHeadsSummaryAsync(long? salesmanId = null, CancellationToken ct = default);
        Task<bool> DeleteHeadAsync(long id, CancellationToken ct = default);
        Task<PagedResponse<HeadLedgerEntryResponse>> GetHeadLedgerAsync(long headId, string? type, int page, int pageSize, CancellationToken ct);
        Task<PagedResponse<LeadSummaryResponse>> GetLeadsAsync(int page, int pageSize, string? status, string? search, CancellationToken ct);
        Task<LeadDetailResponse?> GetLeadByIdAsync(long id, CancellationToken ct);
        Task<PagedResponse<ReceiptSummaryResponse>> GetReceiptsAsync(int page, int pageSize, string? search, System.DateTime? startDate = null, System.DateTime? endDate = null, CancellationToken ct = default);
        Task<ReceiptDetailResponse?> GetReceiptByIdAsync(long id, CancellationToken ct);
        Task<ReceiptDetailResponse?> CreateReceiptAsync(CreateReceiptRequest request, CancellationToken ct = default);
        Task<ReceiptDetailResponse?> CreateReceiptAsync(TexasAccountsPortal.Contracts.SalesEntries.CreateInternalReceiptRequest request, CancellationToken ct = default);
        Task<PagedResponse<HeadSummaryResponse>> GetSalesmanHeadsAsync(long salesmanId, string? search, int page, int pageSize, CancellationToken ct = default);

        Task<PagedResponse<OpenDealEntryResponse>> GetOpenDealsAsync(int page, int pageSize, string? serviceType = null, string? search = null, long? salesmanId = null, string? paymentStatus = null, System.DateTime? startDate = null, System.DateTime? endDate = null, CancellationToken ct = default);
        Task<OpenDealsSummaryResponse> GetOpenDealsSummaryAsync(string? serviceType = null, string? search = null, long? salesmanId = null, string? paymentStatus = null, System.DateTime? startDate = null, System.DateTime? endDate = null, CancellationToken ct = default);
        Task<TexasAccountsPortal.Contracts.Reporting.OperationalBookingFinancialsSummaryResponse> GetBookingFinancialsSummaryAsync(System.DateTime? startDate = null, System.DateTime? endDate = null, string? dealStatus = null, long? salesmanId = null, CancellationToken ct = default);

        Task<System.Collections.Generic.IEnumerable<SalesmanResponse>> GetSalesmenAsync(CancellationToken ct);
        Task<System.Collections.Generic.IEnumerable<SalesmanReportResponse>> GetSalesmenReportAsync(System.DateTime? startDate = null, System.DateTime? endDate = null, CancellationToken ct = default);
        Task<System.Collections.Generic.IEnumerable<SalesmanServiceEntryResponse>> GetSalesmanServiceEntriesAsync(long salesmanId, string? salesmanName = null, System.DateTime? startDate = null, System.DateTime? endDate = null, CancellationToken ct = default);
        Task<System.Collections.Generic.IEnumerable<SalesmanProfitRecordResponse>> GetSalesmanProfitRecordsAsync(long salesmanId, System.DateTime? startDate = null, System.DateTime? endDate = null, CancellationToken ct = default);
        Task UpdatePaymentStatusAsync(string serviceType, string id, string status, string? paymentReference = null, CancellationToken cancellationToken = default);
        Task UpdateBookingProcessingStatusAsync(string serviceType, long id, string status, CancellationToken cancellationToken = default);
        Task UpdateBookingOperationClosedAsync(string serviceType, long id, bool operationClosed, CancellationToken cancellationToken = default);
        Task UpdateReceiptStatusDirectAsync(long receiptId, string status, string? paymentReference = null, string? bankName = null, CancellationToken cancellationToken = default);
        Task SyncUserAsync(string name, string email, string? password, string userType, bool isActive, CancellationToken cancellationToken);
        Task<System.Collections.Generic.IEnumerable<SalesUserResponse>> GetSalesUsersAsync(CancellationToken cancellationToken);
        Task ToggleSalesUserStatusAsync(long id, bool isActive, CancellationToken cancellationToken);
        Task ResetSalesUserPasswordAsync(long id, string newPassword, CancellationToken cancellationToken);
        Task UpdateSalesUserEmailAsync(long id, string newEmail, CancellationToken cancellationToken);

        // Dispute client methods
        Task<PagedResponse<TexasAccountsPortal.Contracts.Disputes.DisputeResponse>> GetDisputesAsync(int page, int pageSize, string? status, string? search, string? sort, CancellationToken ct);
        Task<TexasAccountsPortal.Contracts.Disputes.DisputeResponse?> GetDisputeByIdAsync(long id, CancellationToken ct);
        Task<TexasAccountsPortal.Contracts.Disputes.DisputesDashboardResponse> GetDisputesDashboardAsync(CancellationToken ct);
        Task<TexasAccountsPortal.Contracts.Disputes.DisputeResponse?> SubmitDisputeDecisionAsync(long id, TexasAccountsPortal.Contracts.Disputes.DisputeDecisionRequest request, string resolvedBy, CancellationToken ct);
        Task<System.Collections.Generic.Dictionary<string, string>> GetBatchDocumentNumbersAsync(System.Collections.Generic.List<(string ServiceType, string ExternalReference)> items, CancellationToken ct = default);
        Task NotifySupplierPaymentApprovedAsync(string? serviceType, string? externalReference, CancellationToken cancellationToken = default);
        Task UpdateSalesUserTargetsAsync(long userId, decimal monthlyTarget, decimal profitTarget, CancellationToken cancellationToken = default);
        Task<PagedResponse<QuotationSummaryResponse>> GetQuotationsAsync(int page, int pageSize, string? search, string? clientType, long? salesmanId, DateTime? startDate, DateTime? endDate, string? status, CancellationToken ct);
        Task<QuotationDetailResponse?> GetQuotationByIdAsync(string idOrDoc, CancellationToken ct);
        Task<byte[]?> GetQuotationPdfAsync(string idOrDoc, CancellationToken ct);
        Task<bool> UpdateQuotationStatusAsync(string idOrDoc, string status, string? note = null, CancellationToken ct = default);
        Task<bool> AddProfitAdjustmentAsync(TexasAccountsPortal.Contracts.SalesEntries.SalesmanProfitAdjustmentRequest request, CancellationToken cancellationToken = default);
        Task<IEnumerable<SalesmanProfitAdjustmentHistoryResponse>> GetProfitAdjustmentsAsync(long? salesmanId = null, string? bookingType = null, DateTime? startDate = null, DateTime? endDate = null, CancellationToken cancellationToken = default);
    }

    public class SalesUserResponse
    {
        public long Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string UserType { get; set; } = "Salesman";
        public bool IsActive { get; set; } = true;
        public DateTime? LastLoginAt { get; set; }
        public string? LastLoginIp { get; set; }
        public string? AvatarUrl { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
        public decimal MonthlyTarget { get; set; }
        public decimal ProfitTarget { get; set; }

        public SalesUserResponse() { }

        public SalesUserResponse(
            long id,
            string name,
            string email,
            string userType,
            bool isActive,
            DateTime? lastLoginAt,
            string? lastLoginIp,
            string? avatarUrl,
            DateTime? createdAt,
            DateTime? updatedAt,
            decimal monthlyTarget = 0m,
            decimal profitTarget = 0m)
        {
            Id = id;
            Name = name;
            Email = email;
            UserType = userType;
            IsActive = isActive;
            LastLoginAt = lastLoginAt;
            LastLoginIp = lastLoginIp;
            AvatarUrl = avatarUrl;
            CreatedAt = createdAt;
            UpdatedAt = updatedAt;
            MonthlyTarget = monthlyTarget;
            ProfitTarget = profitTarget;
        }
    }
}


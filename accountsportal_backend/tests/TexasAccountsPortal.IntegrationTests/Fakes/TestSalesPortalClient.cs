using System;
using System.Threading;
using System.Threading.Tasks;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Contracts.SalesEntries;
using TexasAccountsPortal.Contracts.Reporting;

namespace TexasAccountsPortal.IntegrationTests.Fakes
{
    public class TestSalesPortalClient : ISalesPortalClient
    {
        public bool ShouldThrow { get; set; }
        public int CallCount { get; set; }
        public decimal SaleAmountResponse { get; set; } = 1000m;

        public Task SyncSupplierCostAsync(string referenceType, string referenceId, decimal netCost, decimal salesReturns, CancellationToken cancellationToken)
        {
            CallCount++;
            if (ShouldThrow) throw new System.Exception("Simulated connection failure");
            return Task.CompletedTask;
        }

        public Task CreditHeadWalletAsync(long headId, decimal amount, string reason, CancellationToken cancellationToken)
        {
            CallCount++;
            if (ShouldThrow) throw new System.Exception("Simulated connection failure");
            return Task.CompletedTask;
        }

        public Task<decimal> GetServiceSaleAmountAsync(string serviceType, string serviceId, CancellationToken cancellationToken)
        {
            CallCount++;
            if (ShouldThrow) throw new System.Exception("Simulated connection failure");
            return Task.FromResult(SaleAmountResponse);
        }

        public Task<DashboardSummaryResponse> GetDashboardSummaryAsync(CancellationToken cancellationToken) => throw new NotImplementedException();
        public Task<PagedResponse<FlightBookingSummaryResponse>> GetFlightBookingsAsync(int page, int pageSize, string? status, string? search, CancellationToken cancellationToken) => throw new NotImplementedException();
        public Task<FlightBookingDetailResponse?> GetFlightBookingByIdAsync(long id, CancellationToken cancellationToken) => throw new NotImplementedException();
        public Task<PagedResponse<HotelBookingSummaryResponse>> GetHotelBookingsAsync(int page, int pageSize, string? status, string? search, CancellationToken cancellationToken) => throw new NotImplementedException();
        public Task<HotelBookingDetailResponse?> GetHotelBookingByIdAsync(long id, CancellationToken cancellationToken) => throw new NotImplementedException();
        public Task<PagedResponse<VisaApplicationSummaryResponse>> GetVisaApplicationsAsync(int page, int pageSize, string? status, string? search, CancellationToken cancellationToken) => throw new NotImplementedException();
        public Task<VisaApplicationDetailResponse?> GetVisaApplicationByIdAsync(long id, CancellationToken cancellationToken) => throw new NotImplementedException();
        public Task<PagedResponse<VfsAppointmentSummaryResponse>> GetVfsAppointmentsAsync(int page, int pageSize, string? status, string? search, CancellationToken cancellationToken) => throw new NotImplementedException();
        public Task<VfsAppointmentDetailResponse?> GetVfsAppointmentByIdAsync(long id, CancellationToken cancellationToken) => throw new NotImplementedException();
        public Task<PagedResponse<HolidayPackageSummaryResponse>> GetHolidayPackagesAsync(int page, int pageSize, string? status, string? search, CancellationToken cancellationToken) => throw new NotImplementedException();
        public Task<HolidayPackageDetailResponse?> GetHolidayPackageByIdAsync(long id, CancellationToken cancellationToken) => throw new NotImplementedException();
        public Task<PagedResponse<TransportationSummaryResponse>> GetTransportationsAsync(int page, int pageSize, string? status, string? search, CancellationToken cancellationToken) => throw new NotImplementedException();
        public Task<TransportationDetailResponse?> GetTransportationByIdAsync(long id, CancellationToken cancellationToken) => throw new NotImplementedException();
        public Task<PagedResponse<OtherServiceSummaryResponse>> GetOtherServicesAsync(int page, int pageSize, string? status, string? search, CancellationToken cancellationToken) => throw new NotImplementedException();
        public Task<OtherServiceDetailResponse?> GetOtherServiceByIdAsync(long id, CancellationToken cancellationToken) => throw new NotImplementedException();
        public Task<PagedResponse<HeadSummaryResponse>> GetHeadsAsync(int page, int pageSize, string? search, CancellationToken ct) => GetHeadsAsync(page, pageSize, search, null, ct);
        public Task<PagedResponse<HeadSummaryResponse>> GetHeadsAsync(int page, int pageSize, string? search, string? type = null, CancellationToken ct = default) => throw new NotImplementedException();
        public Task<HeadDetailResponse?> GetHeadByIdAsync(long id, CancellationToken cancellationToken) => throw new NotImplementedException();
        public Task<HeadSummaryStatsResponse?> GetHeadsSummaryAsync(long? salesmanId = null, CancellationToken ct = default) => Task.FromResult<HeadSummaryStatsResponse?>(new HeadSummaryStatsResponse(0, 0, 0, 0m));
        public Task<bool> DeleteHeadAsync(long id, CancellationToken ct = default) => Task.FromResult(true);
        public Task<PagedResponse<HeadLedgerEntryResponse>> GetHeadLedgerAsync(long headId, int page, int pageSize, CancellationToken ct) => GetHeadLedgerAsync(headId, null, page, pageSize, ct);
        public Task<PagedResponse<HeadLedgerEntryResponse>> GetHeadLedgerAsync(long headId, string? type, int page, int pageSize, CancellationToken ct) => throw new NotImplementedException();
        public Task<PagedResponse<LeadSummaryResponse>> GetLeadsAsync(int page, int pageSize, string? status, string? search, CancellationToken cancellationToken) => throw new NotImplementedException();
        public Task<LeadDetailResponse?> GetLeadByIdAsync(long id, CancellationToken cancellationToken) => throw new NotImplementedException();
        public Task<PagedResponse<ReceiptSummaryResponse>> GetReceiptsAsync(int page, int pageSize, string? search, CancellationToken cancellationToken) => throw new NotImplementedException();
        public Task<ReceiptDetailResponse?> GetReceiptByIdAsync(long id, CancellationToken cancellationToken) => throw new NotImplementedException();
        public Task<System.Collections.Generic.IEnumerable<SalesmanResponse>> GetSalesmenAsync(CancellationToken ct) => throw new NotImplementedException();
        public Task<System.Collections.Generic.IEnumerable<SalesmanReportResponse>> GetSalesmenReportAsync(CancellationToken ct) => GetSalesmenReportAsync(null, null, ct);
        public Task<System.Collections.Generic.IEnumerable<SalesmanReportResponse>> GetSalesmenReportAsync(System.DateTime? startDate = null, System.DateTime? endDate = null, CancellationToken ct = default) => throw new NotImplementedException();
        public Task UpdatePaymentStatusAsync(string serviceType, string id, string status, CancellationToken cancellationToken) => Task.CompletedTask;
        public Task DebitHeadWalletAsync(long headId, decimal amount, string reason, CancellationToken cancellationToken)
        {
            CallCount++;
            if (ShouldThrow) throw new System.Exception("Simulated connection failure");
            return Task.CompletedTask;
        }
        public Task UpdateReceiptStatusDirectAsync(long receiptId, string status, CancellationToken cancellationToken)
        {
            CallCount++;
            if (ShouldThrow) throw new System.Exception("Simulated connection failure");
            return Task.CompletedTask;
        }
        public Task SyncUserAsync(string name, string email, string? password, string userType, bool isActive, CancellationToken cancellationToken) => Task.CompletedTask;
        public Task<System.Collections.Generic.IEnumerable<SalesUserResponse>> GetSalesUsersAsync(CancellationToken cancellationToken) => Task.FromResult<System.Collections.Generic.IEnumerable<SalesUserResponse>>(System.Array.Empty<SalesUserResponse>());
        public Task ToggleSalesUserStatusAsync(long id, bool isActive, CancellationToken cancellationToken) => Task.CompletedTask;
        public Task ResetSalesUserPasswordAsync(long id, string newPassword, CancellationToken cancellationToken) => Task.CompletedTask;

        public Task<PagedResponse<TexasAccountsPortal.Contracts.Disputes.DisputeResponse>> GetDisputesAsync(int page, int pageSize, string? status, string? search, string? sort, CancellationToken ct) => throw new NotImplementedException();
        public Task<TexasAccountsPortal.Contracts.Disputes.DisputeResponse?> GetDisputeByIdAsync(long id, CancellationToken ct) => throw new NotImplementedException();
        public Task<TexasAccountsPortal.Contracts.Disputes.DisputesDashboardResponse> GetDisputesDashboardAsync(CancellationToken ct) => throw new NotImplementedException();
        public Task<TexasAccountsPortal.Contracts.Disputes.DisputeResponse?> SubmitDisputeDecisionAsync(long id, TexasAccountsPortal.Contracts.Disputes.DisputeDecisionRequest request, string resolvedBy, CancellationToken ct) => throw new NotImplementedException();

        public Task SyncGovtFeeUpdateAsync(string serviceType, string externalReference, long paymentId, decimal amount, long? supplierId, string? supplierName, string? referenceNumber, string? description, string? status = "verified", string? salesFeeRowKey = null, CancellationToken cancellationToken = default) => Task.CompletedTask;
        public Task<PagedResponse<FlightBookingSummaryResponse>> GetFlightBookingsAsync(int page, int pageSize, string? status, string? search, System.DateTime? startDate = null, System.DateTime? endDate = null, CancellationToken ct = default) => throw new NotImplementedException();
        public Task<PagedResponse<HotelBookingSummaryResponse>> GetHotelBookingsAsync(int page, int pageSize, string? status, string? search, System.DateTime? startDate = null, System.DateTime? endDate = null, CancellationToken ct = default) => throw new NotImplementedException();
        public Task<PagedResponse<VisaApplicationSummaryResponse>> GetVisaApplicationsAsync(int page, int pageSize, string? status, string? search, System.DateTime? startDate = null, System.DateTime? endDate = null, CancellationToken ct = default) => throw new NotImplementedException();
        public Task<PagedResponse<VfsAppointmentSummaryResponse>> GetVfsAppointmentsAsync(int page, int pageSize, string? status, string? search, System.DateTime? startDate = null, System.DateTime? endDate = null, CancellationToken ct = default) => throw new NotImplementedException();
        public Task<PagedResponse<HolidayPackageSummaryResponse>> GetHolidayPackagesAsync(int page, int pageSize, string? status, string? search, System.DateTime? startDate = null, System.DateTime? endDate = null, CancellationToken ct = default) => throw new NotImplementedException();
        public Task<PagedResponse<TransportationSummaryResponse>> GetTransportationsAsync(int page, int pageSize, string? status, string? search, System.DateTime? startDate = null, System.DateTime? endDate = null, CancellationToken ct = default) => throw new NotImplementedException();
        public Task<PagedResponse<OtherServiceSummaryResponse>> GetOtherServicesAsync(int page, int pageSize, string? status, string? search, System.DateTime? startDate = null, System.DateTime? endDate = null, CancellationToken ct = default) => throw new NotImplementedException();
        public Task<PagedResponse<ReceiptSummaryResponse>> GetReceiptsAsync(int page, int pageSize, string? search, System.DateTime? startDate = null, System.DateTime? endDate = null, CancellationToken ct = default) => throw new NotImplementedException();
        public Task<ReceiptDetailResponse?> CreateReceiptAsync(CreateReceiptRequest request, CancellationToken ct = default) => throw new NotImplementedException();
        public Task<ReceiptDetailResponse?> CreateReceiptAsync(TexasAccountsPortal.Contracts.SalesEntries.CreateInternalReceiptRequest request, CancellationToken ct = default) => throw new NotImplementedException();
        public Task<PagedResponse<HeadSummaryResponse>> GetSalesmanHeadsAsync(long salesmanId, string? search, int page, int pageSize, CancellationToken ct = default) => throw new NotImplementedException();
        public Task<System.Collections.Generic.IEnumerable<SalesmanServiceEntryResponse>> GetSalesmanServiceEntriesAsync(long salesmanId, string? salesmanName = null, System.DateTime? startDate = null, System.DateTime? endDate = null, CancellationToken ct = default) => throw new NotImplementedException();
        public Task<System.Collections.Generic.IEnumerable<SalesmanProfitRecordResponse>> GetSalesmanProfitRecordsAsync(long salesmanId, System.DateTime? startDate = null, System.DateTime? endDate = null, CancellationToken ct = default) => throw new NotImplementedException();
        public Task UpdatePaymentStatusAsync(string serviceType, string id, string status, string? paymentReference = null, CancellationToken cancellationToken = default) => Task.CompletedTask;
        public Task UpdateBookingProcessingStatusAsync(string serviceType, long id, string status, CancellationToken cancellationToken = default) => Task.CompletedTask;
        public Task UpdateBookingOperationClosedAsync(string serviceType, long id, bool operationClosed, CancellationToken cancellationToken = default) => Task.CompletedTask;
        public Task UpdateReceiptStatusDirectAsync(long receiptId, string status, string? paymentReference = null, CancellationToken cancellationToken = default) => Task.CompletedTask;
        public Task UpdateSalesUserEmailAsync(long id, string newEmail, CancellationToken cancellationToken) => Task.CompletedTask;
        public Task<System.Collections.Generic.Dictionary<string, string>> GetBatchDocumentNumbersAsync(System.Collections.Generic.List<(string ServiceType, string ExternalReference)> items, CancellationToken ct = default) => Task.FromResult(new System.Collections.Generic.Dictionary<string, string>());
        public Task NotifySupplierPaymentApprovedAsync(string? serviceType, string? externalReference, CancellationToken cancellationToken = default) => Task.CompletedTask;
        public Task UpdateSalesUserTargetsAsync(long userId, decimal monthlyTarget, decimal profitTarget, CancellationToken cancellationToken = default) => Task.CompletedTask;
        public Task<PagedResponse<QuotationSummaryResponse>> GetQuotationsAsync(int page, int pageSize, string? search, string? clientType, long? salesmanId, System.DateTime? startDate, System.DateTime? endDate, string? status, CancellationToken ct) => throw new NotImplementedException();
        public Task<QuotationDetailResponse?> GetQuotationByIdAsync(string idOrDoc, CancellationToken ct) => throw new NotImplementedException();
        public Task<byte[]?> GetQuotationPdfAsync(string idOrDoc, CancellationToken ct) => throw new NotImplementedException();
        public Task<bool> UpdateQuotationStatusAsync(string idOrDoc, string status, string? note = null, CancellationToken ct = default) => Task.FromResult(true);
        public Task<bool> AddProfitAdjustmentAsync(TexasAccountsPortal.Contracts.SalesEntries.SalesmanProfitAdjustmentRequest request, CancellationToken cancellationToken = default) => Task.FromResult(true);

        public Task<OperationalBookingFinancialsSummaryResponse> GetBookingFinancialsSummaryAsync(
            DateTime? startDate = null, 
            DateTime? endDate = null, 
            string? dealStatus = null, 
            long? salesmanId = null, 
            CancellationToken cancellationToken = default)
        {
            return Task.FromResult(new OperationalBookingFinancialsSummaryResponse());
        }

        public Task<PagedResponse<OpenDealEntryResponse>> GetOpenDealsAsync(int page, int pageSize, string? serviceType = null, string? search = null, long? salesmanId = null, string? paymentStatus = null, DateTime? startDate = null, DateTime? endDate = null, CancellationToken cancellationToken = default) => throw new NotImplementedException();
        public Task<OpenDealsSummaryResponse> GetOpenDealsSummaryAsync(string? serviceType = null, string? search = null, long? salesmanId = null, string? paymentStatus = null, DateTime? startDate = null, DateTime? endDate = null, CancellationToken cancellationToken = default) => throw new NotImplementedException();
        public Task<PagedResponse<HeadSummaryResponse>> GetHeadsAsync(int page, int pageSize, string? search, string? type = null, long? salesmanId = null, CancellationToken ct = default) => throw new NotImplementedException();
        public Task<HeadDetailResponse?> UpdateHeadAsync(long id, UpdateHeadRequest request, CancellationToken ct = default) => Task.FromResult<HeadDetailResponse?>(null);

    }
}

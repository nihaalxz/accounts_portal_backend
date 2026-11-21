using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using TexasAccountsPortal.Application.Features.Documents.Builders;
using TexasAccountsPortal.Application.Features.Documents.Models;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Contracts.SalesEntries;
using Xunit;

namespace TexasAccountsPortal.UnitTests
{
    public class SalesmenReportDocumentBuilderTests
    {
        private class TestSalesEntriesService : ISalesEntriesService
        {
            public List<SalesmanReportResponse> Reports { get; set; } = new();
            public List<SalesmanServiceEntryResponse> Entries { get; set; } = new();
            public List<SalesmanProfitRecordResponse> ProfitRecords { get; set; } = new();

            public Task<IEnumerable<SalesmanReportResponse>> GetSalesmenReportAsync(DateTime? startDate = null, DateTime? endDate = null, CancellationToken ct = default)
                => Task.FromResult<IEnumerable<SalesmanReportResponse>>(Reports);

            public Task<IEnumerable<SalesmanServiceEntryResponse>> GetSalesmanServiceEntriesAsync(long salesmanId, string? salesmanName = null, DateTime? startDate = null, DateTime? endDate = null, CancellationToken ct = default)
                => Task.FromResult<IEnumerable<SalesmanServiceEntryResponse>>(Entries);

            public Task<IEnumerable<SalesmanProfitRecordResponse>> GetSalesmanProfitRecordsAsync(long salesmanId, DateTime? startDate = null, DateTime? endDate = null, CancellationToken ct = default)
                => Task.FromResult<IEnumerable<SalesmanProfitRecordResponse>>(ProfitRecords);

            public Task<DashboardSummaryResponse> GetDashboardSummaryAsync(CancellationToken ct) => throw new NotImplementedException();
            public Task<PagedResponse<FlightBookingSummaryResponse>> GetFlightBookingsAsync(int page, int pageSize, string? status, string? search, DateTime? startDate = null, DateTime? endDate = null, CancellationToken ct = default) => throw new NotImplementedException();
            public Task<SalesEntryDetailResponse<FlightBookingDetailResponse>?> GetFlightBookingByIdAsync(long id, CancellationToken ct) => throw new NotImplementedException();
            public Task<PagedResponse<HotelBookingSummaryResponse>> GetHotelBookingsAsync(int page, int pageSize, string? status, string? search, DateTime? startDate = null, DateTime? endDate = null, CancellationToken ct = default) => throw new NotImplementedException();
            public Task<SalesEntryDetailResponse<HotelBookingDetailResponse>?> GetHotelBookingByIdAsync(long id, CancellationToken ct) => throw new NotImplementedException();
            public Task<PagedResponse<VisaApplicationSummaryResponse>> GetVisaApplicationsAsync(int page, int pageSize, string? status, string? search, DateTime? startDate = null, DateTime? endDate = null, CancellationToken ct = default) => throw new NotImplementedException();
            public Task<SalesEntryDetailResponse<VisaApplicationDetailResponse>?> GetVisaApplicationByIdAsync(long id, CancellationToken ct) => throw new NotImplementedException();
            public Task<PagedResponse<VfsAppointmentSummaryResponse>> GetVfsAppointmentsAsync(int page, int pageSize, string? status, string? search, DateTime? startDate = null, DateTime? endDate = null, CancellationToken ct = default) => throw new NotImplementedException();
            public Task<SalesEntryDetailResponse<VfsAppointmentDetailResponse>?> GetVfsAppointmentByIdAsync(long id, CancellationToken ct) => throw new NotImplementedException();
            public Task<PagedResponse<HolidayPackageSummaryResponse>> GetHolidayPackagesAsync(int page, int pageSize, string? status, string? search, DateTime? startDate = null, DateTime? endDate = null, CancellationToken ct = default) => throw new NotImplementedException();
            public Task<SalesEntryDetailResponse<HolidayPackageDetailResponse>?> GetHolidayPackageByIdAsync(long id, CancellationToken ct) => throw new NotImplementedException();
            public Task<PagedResponse<TransportationSummaryResponse>> GetTransportationsAsync(int page, int pageSize, string? status, string? search, DateTime? startDate = null, DateTime? endDate = null, CancellationToken ct = default) => throw new NotImplementedException();
            public Task<SalesEntryDetailResponse<TransportationDetailResponse>?> GetTransportationByIdAsync(long id, CancellationToken ct) => throw new NotImplementedException();
            public Task<PagedResponse<OtherServiceSummaryResponse>> GetOtherServicesAsync(int page, int pageSize, string? status, string? search, DateTime? startDate = null, DateTime? endDate = null, CancellationToken ct = default) => throw new NotImplementedException();
            public Task<SalesEntryDetailResponse<OtherServiceDetailResponse>?> GetOtherServiceByIdAsync(long id, CancellationToken ct) => throw new NotImplementedException();
            public Task<PagedResponse<HeadSummaryResponse>> GetHeadsAsync(int page, int pageSize, string? search, string? type = null, CancellationToken ct = default) => throw new NotImplementedException();
            public Task<PagedResponse<HeadSummaryResponse>> GetHeadsAsync(int page, int pageSize, string? search, string? type, long? salesmanId, CancellationToken ct = default) => throw new NotImplementedException();
            public Task<HeadDetailResponse?> GetHeadByIdAsync(long id, string? type = null, CancellationToken ct = default) => throw new NotImplementedException();
            public Task<HeadDetailResponse?> UpdateHeadAsync(long id, UpdateHeadRequest request, long currentUserId, CancellationToken ct = default) => throw new NotImplementedException();
            public Task<HeadSummaryStatsResponse> GetHeadsSummaryAsync(long? salesmanId, CancellationToken ct = default) => throw new NotImplementedException();
            public Task<bool> DeleteHeadAsync(long id, CancellationToken ct = default) => throw new NotImplementedException();
            public Task<PagedResponse<HeadLedgerEntryResponse>> GetHeadLedgerAsync(long headId, string? type = null, int page = 1, int pageSize = 20, CancellationToken ct = default) => throw new NotImplementedException();
            public Task<PagedResponse<LeadSummaryResponse>> GetLeadsAsync(int page, int pageSize, string? status, string? search, CancellationToken ct) => throw new NotImplementedException();
            public Task<LeadDetailResponse?> GetLeadByIdAsync(long id, CancellationToken ct) => throw new NotImplementedException();
            public Task<PagedResponse<ReceiptSummaryResponse>> GetReceiptsAsync(int page, int pageSize, string? search, DateTime? startDate = null, DateTime? endDate = null, CancellationToken ct = default) => throw new NotImplementedException();
            public Task<ReceiptDetailResponse?> GetReceiptByIdAsync(long id, CancellationToken ct) => throw new NotImplementedException();
            public Task<ReceiptDetailResponse?> GetReceiptByIdentifierAsync(string identifier, CancellationToken ct) => throw new NotImplementedException();
            public Task<PagedResponse<AccountsReceiptSummaryDto>> GetAccountsReceiptsAsync(int page, int pageSize, string? search, DateTime? startDate = null, DateTime? endDate = null, CancellationToken ct = default) => throw new NotImplementedException();
            public Task<IEnumerable<SalesmanResponse>> GetSalesmenAsync(CancellationToken ct) => throw new NotImplementedException();
            public Task<PagedResponse<OpenDealEntryResponse>> GetOpenDealsAsync(int page, int pageSize, string? serviceType = null, string? search = null, long? salesmanId = null, string? paymentStatus = null, DateTime? startDate = null, DateTime? endDate = null, CancellationToken ct = default) => throw new NotImplementedException();
            public Task<OpenDealsSummaryResponse> GetOpenDealsSummaryAsync(string? serviceType = null, string? search = null, long? salesmanId = null, string? paymentStatus = null, DateTime? startDate = null, DateTime? endDate = null, CancellationToken ct = default) => throw new NotImplementedException();
            public Task UpdatePaymentStatusAsync(string serviceType, long id, string status, long approvedByUserId, long? cashAccountId, string? referenceId, CancellationToken ct) => Task.CompletedTask;
            public Task UpdateBookingProcessingStatusAsync(string serviceType, long id, string status, long userId, bool isMasterAccountant, CancellationToken ct) => Task.CompletedTask;
            public Task UpdateBookingOperationClosedAsync(string serviceType, long id, bool operationClosed, long userId, bool isMasterAccountant, CancellationToken ct) => Task.CompletedTask;
            public Task UpdateReceiptPaymentStatusAsync(long receiptId, string status, long approvedByUserId, long? cashAccountId, string? referenceId, CancellationToken ct) => Task.CompletedTask;
            public Task<ReceiptDetailResponse> CreateReceiptAsync(CreateAccountsReceiptRequest request, long currentUserId, CancellationToken ct = default) => throw new NotImplementedException();
            public Task<AccountsReceiptSummaryDto> RetryAccountsReceiptSyncAsync(long id, long currentUserId, CancellationToken ct = default) => throw new NotImplementedException();
            public Task<PagedResponse<SalesmanClientSummaryDto>> GetSalesmanClientsAsync(long salesmanId, string clientType, string? search, int page, int pageSize, CancellationToken ct = default) => throw new NotImplementedException();
            public Task<PagedResponse<QuotationSummaryResponse>> GetQuotationsAsync(int page, int pageSize, string? search, string? clientType, long? salesmanId, DateTime? startDate = null, DateTime? endDate = null, string? status = null, CancellationToken ct = default) => throw new NotImplementedException();
            public Task<QuotationDetailResponse?> GetQuotationByIdAsync(string idOrDoc, CancellationToken ct) => throw new NotImplementedException();
            public Task<byte[]?> GetQuotationPdfAsync(string idOrDoc, CancellationToken ct) => throw new NotImplementedException();
            public Task<bool> UpdateQuotationStatusAsync(string idOrDoc, string status, string? note = null, CancellationToken ct = default) => throw new NotImplementedException();
            public Task<bool> AddProfitAdjustmentAsync(SalesmanProfitAdjustmentRequest request, long currentUserId, CancellationToken ct = default) => throw new NotImplementedException();
        }

        [Fact]
        public async Task BuildAsync_SalesmanDetail_ContainsUpdatedColumnsAndRemovesPayment()
        {
            var fakeService = new TestSalesEntriesService
            {
                Reports = new List<SalesmanReportResponse>
                {
                    new() { Id = 2, Name = "Jamal", Email = "jamal@texas.bh", BookingsCount = 1, TotalSalesValue = 100m, TotalFinalProfit = 25m }
                },
                Entries = new List<SalesmanServiceEntryResponse>
                {
                    new(
                        Id: 101,
                        ServiceType: "flights",
                        DocumentNumber: "FL-2026-001",
                        CustomerHead: "Ahmed Corp",
                        BeneficiaryName: "Passenger A",
                        Details: "BAH -> DXB",
                        Amount: 100m,
                        PaymentMethod: "cash",
                        PaymentStatus: "paid",
                        ProcessingStatus: "completed",
                        CreatedAt: new DateTime(2026, 11, 15)
                    )
                },
                ProfitRecords = new List<SalesmanProfitRecordResponse>
                {
                    new(
                        Id: 201,
                        SalesmanId: 2,
                        BookingType: "flights",
                        BookingId: 101,
                        DocumentNumber: "FL-2026-001",
                        PayableAmount: 100m,
                        FinalSupplierCost: 75m,
                        ProfitAmount: 25m,
                        ProfitType: "Normal",
                        SupplierCostSource: "Approved",
                        AccountsApprovedTotal: 75m,
                        RejectionFee: null,
                        IsFinal: true,
                        BookingCreatedAt: new DateTime(2026, 11, 15),
                        FinalizedAt: new DateTime(2026, 11, 16),
                        LastReconciledAt: null,
                        CreatedAt: new DateTime(2026, 11, 15),
                        UpdatedAt: new DateTime(2026, 11, 16),
                        ClientName: "Ahmed Corp"
                    )
                }
            };

            var options = Options.Create(new DocumentOptions());
            var builder = new SalesmenReportDocumentBuilder(null!, fakeService, options);

            var args = new DocumentBuildArgs
            {
                Category = "report",
                Type = "salesman-detail",
                QueryParams = new Dictionary<string, string>
                {
                    { "salesmanId", "2" },
                    { "salesmanName", "Jamal" }
                }
            };

            var model = await builder.BuildAsync(args);

            Assert.NotNull(model);
            Assert.Contains(model.Table.Columns, c => c.Header == "DEAL STATUS");
            Assert.Contains(model.Table.Columns, c => c.Header == "COST (BHD)");
            Assert.Contains(model.Table.Columns, c => c.Header == "FINAL PROFIT (BHD)");
            Assert.Contains(model.Table.Columns, c => c.Header == "MARGIN %");
            Assert.DoesNotContain(model.Table.Columns, c => c.Header == "PAYMENT");

            // Verify row contents
            Assert.Single(model.Table.Rows);
            var row = model.Table.Rows[0];
            // Columns: DATE, DOC #, SERVICE, CUSTOMER, DETAILS, DEAL STATUS, SALE, COST, FINAL PROFIT, MARGIN %
            Assert.Equal("Closed", row[5]); // DEAL STATUS
            Assert.Equal("100.000", row[6]); // SALE
            Assert.Equal("75.000", row[7]); // COST
            Assert.Equal("25.000", row[8]); // FINAL PROFIT
            Assert.Equal("25.0%", row[9]); // MARGIN %
        }
    }
}

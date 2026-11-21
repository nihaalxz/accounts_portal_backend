using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Contracts.SalesEntries;
using TexasAccountsPortal.Domain.Entities;
using TexasAccountsPortal.Domain.Enums;
using TexasAccountsPortal.Infrastructure.Data;
using TexasAccountsPortal.Infrastructure.Services;
using Xunit;

namespace TexasAccountsPortal.UnitTests
{
    public class TransactionReferenceResolverTests
    {
        [Fact]
        public async Task Resolve_FlightReference_ReturnsDocumentNumber()
        {
            // Arrange
            var fakeClient = new FakeSalesPortalClient();
            var resolver = new TransactionReferenceResolver(fakeClient);

            // Act
            var docNo = await resolver.ResolveDocumentNumberAsync("flight", "48");

            // Assert
            Assert.Equal("TXSFLT000048", docNo);
            Assert.Equal(1, fakeClient.GetFlightCalls);
        }

        [Fact]
        public async Task Resolve_TransportationReference_ReturnsDocumentNumber()
        {
            // Arrange
            var fakeClient = new FakeSalesPortalClient();
            var resolver = new TransactionReferenceResolver(fakeClient);

            // Act
            var docNo = await resolver.ResolveDocumentNumberAsync("transport", "13");

            // Assert
            Assert.Equal("TXSTRANS00013", docNo);
            Assert.Equal(1, fakeClient.GetTransportCalls);
        }

        [Fact]
        public async Task Resolve_VisaReference_ReturnsDocumentNumber()
        {
            // Arrange
            var fakeClient = new FakeSalesPortalClient();
            var resolver = new TransactionReferenceResolver(fakeClient);

            // Act
            var docNo = await resolver.ResolveDocumentNumberAsync("visa", "21");

            // Assert
            Assert.Equal("TXSVISA000021", docNo);
        }

        [Fact]
        public async Task Resolve_ReceiptReference_ReturnsDocumentNumber()
        {
            // Arrange
            var fakeClient = new FakeSalesPortalClient();
            var resolver = new TransactionReferenceResolver(fakeClient);

            // Act
            var docNo = await resolver.ResolveDocumentNumberAsync("receipt", "301");

            // Assert
            Assert.Equal("TXSRCPT000301", docNo);
        }

        [Fact]
        public async Task Resolve_CacheHits_DoesNotCallApiRepeatedly()
        {
            // Arrange
            var fakeClient = new FakeSalesPortalClient();
            var resolver = new TransactionReferenceResolver(fakeClient);

            // Act - call twice
            var doc1 = await resolver.ResolveDocumentNumberAsync("transport", "13");
            var doc2 = await resolver.ResolveDocumentNumberAsync("transport", "13");

            // Assert
            Assert.Equal("TXSTRANS00013", doc1);
            Assert.Equal("TXSTRANS00013", doc2);
            Assert.Equal(1, fakeClient.GetTransportCalls);
        }

        [Fact]
        public async Task Resolve_ApiFailures_ReturnsNullWithoutThrowing()
        {
            // Arrange
            var fakeClient = new FakeSalesPortalClient();
            var resolver = new TransactionReferenceResolver(fakeClient);

            // Act
            var docNo = await resolver.ResolveDocumentNumberAsync("flight", "999");

            // Assert
            Assert.Null(docNo);
        }

        [Fact]
        public async Task TransactionPresentationMapper_ReplacesInternalId_WithResolvedDocumentNumber()
        {
            // Arrange
            var options = new DbContextOptionsBuilder<AccountsDbContext>()
                .UseInMemoryDatabase(databaseName: Guid.NewGuid().ToString())
                .Options;

            using var dbContext = new AccountsDbContext(options);

            var account = new Account { Name = "Cashaccountqueuetest", Type = AccountType.Cash, LedgerType = LedgerType.Asset };
            dbContext.Accounts.Add(account);
            await dbContext.SaveChangesAsync();

            var fakeClient = new FakeSalesPortalClient();
            var resolver = new TransactionReferenceResolver(fakeClient);
            var mapper = new TransactionPresentationMapper(dbContext, fakeClient, null, resolver);

            var tx = FinancialTransaction.Create(
                FinancialTransactionType.Incoming,
                100.328m,
                PaymentMethod.Cash,
                createdBy: 1,
                destinationAccountId: account.Id,
                description: "Payment approved for Transportation #13"
            );

            // Act
            var response = await mapper.MapToResponseAsync(tx);

            // Assert
            Assert.Equal("Payment approved for Transportation TXSTRANS00013", response.DisplayDescription);
            Assert.Contains("Transportation TXSTRANS00013", response.DisplayNarrative);
            Assert.DoesNotContain("#13", response.DisplayNarrative);
        }

        [Fact]
        public async Task TransactionPresentationMapper_FallbackBehavior_WhenResolutionFails()
        {
            // Arrange
            var options = new DbContextOptionsBuilder<AccountsDbContext>()
                .UseInMemoryDatabase(databaseName: Guid.NewGuid().ToString())
                .Options;

            using var dbContext = new AccountsDbContext(options);

            var fakeClient = new FakeSalesPortalClient();
            var resolver = new TransactionReferenceResolver(fakeClient);
            var mapper = new TransactionPresentationMapper(dbContext, fakeClient, null, resolver);

            var tx = FinancialTransaction.Create(
                FinancialTransactionType.Incoming,
                100m,
                PaymentMethod.Cash,
                createdBy: 1,
                description: "Payment approved for Transportation #99"
            );

            // Act
            var response = await mapper.MapToResponseAsync(tx);

            // Assert
            Assert.Equal("Payment approved for Transportation #99", response.DisplayDescription);
        }
    }

    public class FakeSalesPortalClient : ISalesPortalClient
    {
        public int GetFlightCalls { get; private set; }
        public int GetTransportCalls { get; private set; }

        public Task<FlightBookingDetailResponse?> GetFlightBookingByIdAsync(long id, CancellationToken ct = default)
        {
            GetFlightCalls++;
            if (id == 48)
            {
                return Task.FromResult<FlightBookingDetailResponse?>(new FlightBookingDetailResponse(
                    Id: 48, UserId: 1, HeadId: 10, HeadName: "Test Head", ClientType: "retail", Agent: null, AgentId: null, CareOf: null, Supplier: null, FromLocation: "BAH", ToLocation: "DXB", PaymentMethod: "cash", BankId: null, BankName: null, PaymentStatus: "paid", ProcessingStatus: "confirmed", PayableAmount: 150m, PaymentProof: null, CreatedAt: DateTime.UtcNow, UpdatedAt: null, Passengers: new List<FlightPassengerResponse>(), DocumentNumber: "TXSFLT000048"
                ));
            }
            if (id == 999)
            {
                throw new System.Net.Http.HttpRequestException("API offline");
            }
            return Task.FromResult<FlightBookingDetailResponse?>(null);
        }

        public Task<TransportationDetailResponse?> GetTransportationByIdAsync(long id, CancellationToken ct = default)
        {
            GetTransportCalls++;
            if (id == 13)
            {
                return Task.FromResult<TransportationDetailResponse?>(new TransportationDetailResponse(
                    Id: 13, CreatedBy: 1, HeadId: 10, HeadName: "Ramzy Faraz", ClientType: "retail", Agent: null, AgentId: null, Prefix: null, Name: "Ramzy Faraz", CareOf: null, Supplier: null, SupplierId: null, SupplierName: null, Pickup: "BAH", Drop: "SAU", DropDate: DateTime.UtcNow, DropTime: "12:00", PayableAmount: 100m, ExpectedSupplierCost: 50m, Profit: 50m, PaymentMethod: "cash", BankId: null, BankName: null, Vehicle: null, PaymentProof: null, PaymentStatus: "paid", ProcessingStatus: "completed", CreatedAt: DateTime.UtcNow, UpdatedAt: null, DocumentNumber: "TXSTRANS00013"
                ));
            }
            return Task.FromResult<TransportationDetailResponse?>(null);
        }

        public Task<VisaApplicationDetailResponse?> GetVisaApplicationByIdAsync(long id, CancellationToken ct = default)
        {
            if (id == 21)
            {
                return Task.FromResult<VisaApplicationDetailResponse?>(new VisaApplicationDetailResponse(
                    Id: 21, UserId: 1, CountryId: 1, VisaPackId: 1, VisaPackName: "UK Visa", ClientType: "retail", Agent: null, AgentId: null, HeadId: 10, HeadName: "Head Name", ProcessingStatus: "submitted", PaymentStatus: "paid", VisaDocument: null, ApprovalNote: null, RejectionDocument: null, RejectionNote: null, RefundNote: null, PayableAmount: 70m, ExpectedSupplierCost: 30m, Profit: 40m, SupplierId: null, SupplierName: null, RejectionFee: 0m, PaymentProof: null, CreatedAt: DateTime.UtcNow, UpdatedAt: null, Applicants: new List<VisaApplicantResponse>(), DocumentNumber: "TXSVISA000021"
                ));
            }
            return Task.FromResult<VisaApplicationDetailResponse?>(null);
        }

        public Task<ReceiptDetailResponse?> GetReceiptByIdAsync(long id, CancellationToken ct = default)
        {
            if (id == 301)
            {
                return Task.FromResult<ReceiptDetailResponse?>(new ReceiptDetailResponse(
                    Id: 301, ReceiptId: "TXSRCPT000301", HeadName: "Head Name", ClientType: "retail", AgentName: null, Service: "Visa", Amount: 200m, PaymentMode: "cash", Status: "completed", CreatedAt: DateTime.UtcNow, Narration: "Notes", HeadId: 10, BookingId: null, BankId: null, BankName: null, PaymentProof: null, PaymentReference: null, AgentId: null, DocumentNumber: "TXSRCPT000301"
                ));
            }
            return Task.FromResult<ReceiptDetailResponse?>(null);
        }

        public Task CreditHeadWalletAsync(long headId, decimal amount, string reason, CancellationToken cancellationToken) => throw new NotImplementedException();
        public Task DebitHeadWalletAsync(long headId, decimal amount, string reason, CancellationToken cancellationToken) => throw new NotImplementedException();
        public Task<DashboardSummaryResponse> GetDashboardSummaryAsync(CancellationToken ct) => throw new NotImplementedException();
        public Task<TexasAccountsPortal.Contracts.Disputes.DisputeResponse?> GetDisputeByIdAsync(long id, CancellationToken ct) => throw new NotImplementedException();
        public Task<PagedResponse<TexasAccountsPortal.Contracts.Disputes.DisputeResponse>> GetDisputesAsync(int page, int pageSize, string? status, string? search, string? sort, CancellationToken ct) => throw new NotImplementedException();
        public Task<TexasAccountsPortal.Contracts.Disputes.DisputesDashboardResponse> GetDisputesDashboardAsync(CancellationToken ct) => throw new NotImplementedException();
        public Task<PagedResponse<FlightBookingSummaryResponse>> GetFlightBookingsAsync(int page, int pageSize, string? status, string? search, CancellationToken ct) => throw new NotImplementedException();
        public Task<PagedResponse<FlightBookingSummaryResponse>> GetFlightBookingsAsync(int page, int pageSize, string? status, string? search, DateTime? startDate = null, DateTime? endDate = null, CancellationToken ct = default) => throw new NotImplementedException();
        public Task<HeadDetailResponse?> GetHeadByIdAsync(long id, CancellationToken ct) => throw new NotImplementedException();
        public Task<PagedResponse<HeadLedgerEntryResponse>> GetHeadLedgerAsync(long headId, string? type, int page, int pageSize, CancellationToken ct) => throw new NotImplementedException();
        public Task<PagedResponse<HeadSummaryResponse>> GetHeadsAsync(int page, int pageSize, string? search, string? type = null, CancellationToken ct = default) => throw new NotImplementedException();
        public Task<HolidayPackageDetailResponse?> GetHolidayPackageByIdAsync(long id, CancellationToken ct) => throw new NotImplementedException();
        public Task<PagedResponse<HolidayPackageSummaryResponse>> GetHolidayPackagesAsync(int page, int pageSize, string? status, string? search, CancellationToken ct) => throw new NotImplementedException();
        public Task<PagedResponse<HolidayPackageSummaryResponse>> GetHolidayPackagesAsync(int page, int pageSize, string? status, string? search, DateTime? startDate = null, DateTime? endDate = null, CancellationToken ct = default) => throw new NotImplementedException();
        public Task<HotelBookingDetailResponse?> GetHotelBookingByIdAsync(long id, CancellationToken ct) => throw new NotImplementedException();
        public Task<PagedResponse<HotelBookingSummaryResponse>> GetHotelBookingsAsync(int page, int pageSize, string? status, string? search, CancellationToken ct) => throw new NotImplementedException();
        public Task<PagedResponse<HotelBookingSummaryResponse>> GetHotelBookingsAsync(int page, int pageSize, string? status, string? search, DateTime? startDate = null, DateTime? endDate = null, CancellationToken ct = default) => throw new NotImplementedException();
        public Task<LeadDetailResponse?> GetLeadByIdAsync(long id, CancellationToken ct) => throw new NotImplementedException();
        public Task<PagedResponse<LeadSummaryResponse>> GetLeadsAsync(int page, int pageSize, string? status, string? search, CancellationToken ct) => throw new NotImplementedException();
        public Task<OtherServiceDetailResponse?> GetOtherServiceByIdAsync(long id, CancellationToken ct) => throw new NotImplementedException();
        public Task<PagedResponse<OtherServiceSummaryResponse>> GetOtherServicesAsync(int page, int pageSize, string? status, string? search, CancellationToken ct) => throw new NotImplementedException();
        public Task<PagedResponse<OtherServiceSummaryResponse>> GetOtherServicesAsync(int page, int pageSize, string? status, string? search, DateTime? startDate = null, DateTime? endDate = null, CancellationToken ct = default) => throw new NotImplementedException();
        public Task<PagedResponse<ReceiptSummaryResponse>> GetReceiptsAsync(int page, int pageSize, string? search, CancellationToken ct) => throw new NotImplementedException();
        public Task<PagedResponse<ReceiptSummaryResponse>> GetReceiptsAsync(int page, int pageSize, string? search, DateTime? startDate = null, DateTime? endDate = null, CancellationToken ct = default) => throw new NotImplementedException();
        public Task<Dictionary<string, string>> GetBatchDocumentNumbersAsync(List<(string ServiceType, string ExternalReference)> references, CancellationToken ct = default) => Task.FromResult(new Dictionary<string, string>());
        public Task<IEnumerable<SalesmanReportResponse>> GetSalesmenReportAsync(DateTime? startDate = null, DateTime? endDate = null, CancellationToken ct = default) => throw new NotImplementedException();
        public Task<IEnumerable<SalesmanResponse>> GetSalesmenAsync(CancellationToken ct) => throw new NotImplementedException();
        public Task<IEnumerable<SalesUserResponse>> GetSalesUsersAsync(CancellationToken cancellationToken) => throw new NotImplementedException();
        public Task<decimal> GetServiceSaleAmountAsync(string serviceType, string serviceId, CancellationToken cancellationToken) => throw new NotImplementedException();
        public Task<PagedResponse<TransportationSummaryResponse>> GetTransportationsAsync(int page, int pageSize, string? status, string? search, CancellationToken ct) => throw new NotImplementedException();
        public Task<PagedResponse<TransportationSummaryResponse>> GetTransportationsAsync(int page, int pageSize, string? status, string? search, DateTime? startDate = null, DateTime? endDate = null, CancellationToken ct = default) => throw new NotImplementedException();
        public Task<VfsAppointmentDetailResponse?> GetVfsAppointmentByIdAsync(long id, CancellationToken ct) => throw new NotImplementedException();
        public Task<PagedResponse<VfsAppointmentSummaryResponse>> GetVfsAppointmentsAsync(int page, int pageSize, string? status, string? search, CancellationToken ct) => throw new NotImplementedException();
        public Task<PagedResponse<VfsAppointmentSummaryResponse>> GetVfsAppointmentsAsync(int page, int pageSize, string? status, string? search, DateTime? startDate = null, DateTime? endDate = null, CancellationToken ct = default) => throw new NotImplementedException();
        public Task<PagedResponse<VisaApplicationSummaryResponse>> GetVisaApplicationsAsync(int page, int pageSize, string? status, string? search, CancellationToken ct) => throw new NotImplementedException();
        public Task<PagedResponse<VisaApplicationSummaryResponse>> GetVisaApplicationsAsync(int page, int pageSize, string? status, string? search, DateTime? startDate = null, DateTime? endDate = null, CancellationToken ct = default) => throw new NotImplementedException();
        public Task ResetSalesUserPasswordAsync(long id, string newPassword, CancellationToken cancellationToken) => throw new NotImplementedException();
        public Task<TexasAccountsPortal.Contracts.Disputes.DisputeResponse?> SubmitDisputeDecisionAsync(long id, TexasAccountsPortal.Contracts.Disputes.DisputeDecisionRequest request, string resolvedBy, CancellationToken ct) => throw new NotImplementedException();
        public Task SyncSupplierCostAsync(string referenceType, string referenceId, decimal netCost, decimal salesReturns, CancellationToken cancellationToken) => throw new NotImplementedException();
        public Task SyncGovtFeeUpdateAsync(string serviceType, string externalReference, long paymentId, decimal amount, long? supplierId, string? supplierName, string? referenceNumber, string? description, string? status = "verified", string? salesFeeRowKey = null, CancellationToken cancellationToken = default) => Task.CompletedTask;
        public Task SyncUserAsync(string name, string email, string? password, string userType, bool isActive, CancellationToken cancellationToken) => throw new NotImplementedException();
        public Task ToggleSalesUserStatusAsync(long id, bool isActive, CancellationToken cancellationToken) => throw new NotImplementedException();
        public Task UpdatePaymentStatusAsync(string serviceType, string id, string status, CancellationToken cancellationToken) => throw new NotImplementedException();
        public Task UpdateReceiptStatusDirectAsync(long receiptId, string status, CancellationToken cancellationToken) => throw new NotImplementedException();
        public Task UpdateSalesUserEmailAsync(long id, string newEmail, CancellationToken cancellationToken) => throw new NotImplementedException();

        public Task<ReceiptDetailResponse?> CreateReceiptAsync(CreateReceiptRequest request, CancellationToken ct = default) => Task.FromResult<ReceiptDetailResponse?>(null);
        public Task<ReceiptDetailResponse?> CreateReceiptAsync(CreateInternalReceiptRequest request, CancellationToken ct = default) => Task.FromResult<ReceiptDetailResponse?>(null);
        public Task<PagedResponse<HeadSummaryResponse>> GetSalesmanHeadsAsync(long salesmanId, string? search, int page, int pageSize, CancellationToken ct = default) => Task.FromResult(PagedResponse<HeadSummaryResponse>.Create(new List<HeadSummaryResponse>(), 0, page, pageSize));
        public Task<IEnumerable<SalesmanServiceEntryResponse>> GetSalesmanServiceEntriesAsync(long salesmanId, string? salesmanName = null, DateTime? startDate = null, DateTime? endDate = null, CancellationToken ct = default) => Task.FromResult<IEnumerable<SalesmanServiceEntryResponse>>(new List<SalesmanServiceEntryResponse>());
        public Task<IEnumerable<SalesmanProfitRecordResponse>> GetSalesmanProfitRecordsAsync(long salesmanId, DateTime? startDate = null, DateTime? endDate = null, CancellationToken ct = default) => Task.FromResult<IEnumerable<SalesmanProfitRecordResponse>>(new List<SalesmanProfitRecordResponse>());
        public Task UpdatePaymentStatusAsync(string serviceType, string id, string status, string? paymentReference = null, CancellationToken cancellationToken = default) => Task.CompletedTask;
        public Task UpdateBookingProcessingStatusAsync(string serviceType, long id, string status, CancellationToken cancellationToken = default) => Task.CompletedTask;
        public Task UpdateBookingOperationClosedAsync(string serviceType, long id, bool operationClosed, CancellationToken cancellationToken = default) => Task.CompletedTask;
        public Task UpdateReceiptStatusDirectAsync(long receiptId, string status, string? paymentReference = null, CancellationToken cancellationToken = default) => Task.CompletedTask;
        public Task NotifySupplierPaymentApprovedAsync(string? serviceType, string? externalReference, CancellationToken cancellationToken = default) => Task.CompletedTask;
        public Task UpdateSalesUserTargetsAsync(long userId, decimal monthlyTarget, decimal profitTarget, CancellationToken cancellationToken = default) => Task.CompletedTask;
        public Task<PagedResponse<QuotationSummaryResponse>> GetQuotationsAsync(int page, int pageSize, string? search, string? clientType, long? salesmanId, DateTime? startDate, DateTime? endDate, string? status, CancellationToken ct) => throw new NotImplementedException();
        public Task<QuotationDetailResponse?> GetQuotationByIdAsync(string idOrDoc, CancellationToken ct) => throw new NotImplementedException();
        public Task<byte[]?> GetQuotationPdfAsync(string idOrDoc, CancellationToken ct) => throw new NotImplementedException();
        public Task<bool> UpdateQuotationStatusAsync(string idOrDoc, string status, string? note = null, CancellationToken ct = default) => Task.FromResult(true);
        public Task<bool> AddProfitAdjustmentAsync(TexasAccountsPortal.Contracts.SalesEntries.SalesmanProfitAdjustmentRequest request, CancellationToken cancellationToken = default) => Task.FromResult(true);
        public Task<IEnumerable<TexasAccountsPortal.Contracts.SalesEntries.SalesmanProfitAdjustmentHistoryResponse>> GetProfitAdjustmentsAsync(long? salesmanId = null, string? bookingType = null, DateTime? startDate = null, DateTime? endDate = null, CancellationToken cancellationToken = default) => Task.FromResult<IEnumerable<TexasAccountsPortal.Contracts.SalesEntries.SalesmanProfitAdjustmentHistoryResponse>>(new List<TexasAccountsPortal.Contracts.SalesEntries.SalesmanProfitAdjustmentHistoryResponse>());
        public Task<PagedResponse<HeadSummaryResponse>> GetHeadsAsync(int page, int pageSize, string? search, string? type = null, long? salesmanId = null, CancellationToken ct = default) => Task.FromResult(PagedResponse<HeadSummaryResponse>.Create(new List<HeadSummaryResponse>(), 0, page, pageSize));
        public Task<HeadDetailResponse?> UpdateHeadAsync(long id, UpdateHeadRequest request, CancellationToken ct = default) => Task.FromResult<HeadDetailResponse?>(null);
        public Task<HeadSummaryStatsResponse?> GetHeadsSummaryAsync(long? salesmanId = null, CancellationToken ct = default) => Task.FromResult<HeadSummaryStatsResponse?>(new HeadSummaryStatsResponse(0, 0, 0, 0m));
        public Task<bool> DeleteHeadAsync(long id, CancellationToken ct = default) => Task.FromResult(true);
        public Task<PagedResponse<OpenDealEntryResponse>> GetOpenDealsAsync(int page, int pageSize, string? serviceType = null, string? search = null, long? salesmanId = null, string? paymentStatus = null, DateTime? startDate = null, DateTime? endDate = null, CancellationToken cancellationToken = default) => throw new NotImplementedException();
        public Task<OpenDealsSummaryResponse> GetOpenDealsSummaryAsync(string? serviceType = null, string? search = null, long? salesmanId = null, string? paymentStatus = null, DateTime? startDate = null, DateTime? endDate = null, CancellationToken cancellationToken = default) => throw new NotImplementedException();
        public Task<TexasAccountsPortal.Contracts.Reporting.OperationalBookingFinancialsSummaryResponse> GetBookingFinancialsSummaryAsync(DateTime? startDate = null, DateTime? endDate = null, string? dealStatus = null, long? salesmanId = null, CancellationToken cancellationToken = default) => Task.FromResult(new TexasAccountsPortal.Contracts.Reporting.OperationalBookingFinancialsSummaryResponse());
        public Task UpdateReceiptStatusDirectAsync(long receiptId, string status, string? paymentReference = null, string? bankName = null, CancellationToken cancellationToken = default) => Task.CompletedTask;
    }
}

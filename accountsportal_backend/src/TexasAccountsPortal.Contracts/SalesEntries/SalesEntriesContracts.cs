using System;
using System.Collections.Generic;
using TexasAccountsPortal.Contracts.SupplierPayments;
using TexasAccountsPortal.Contracts.SalesReturns;
using TexasAccountsPortal.Contracts.PurchaseReturns;
using TexasAccountsPortal.Contracts.Transactions;
using TexasAccountsPortal.Contracts.JournalEntries;

namespace TexasAccountsPortal.Contracts.SalesEntries
{
    // Generic paged wrapper
    public record PagedResponse<T>(
        List<T> Items,
        int TotalCount,
        int Page,
        int PageSize,
        int TotalPages
    )
    {
        public static PagedResponse<T> Create(List<T> items, int totalCount, int page, int pageSize)
        {
            var totalPages = (int)Math.Ceiling(totalCount / (double)pageSize);
            return new PagedResponse<T>(items, totalCount, page, pageSize, totalPages);
        }
    }

    // Local representations of Sales Portal DTOs
    public record DashboardSummaryResponse(
        int TotalFlightBookings,
        int TotalHotelBookings,
        int TotalVisaApplications,
        int TotalVfsAppointments,
        int TotalHolidayPackages,
        int TotalTransportations,
        int TotalOtherServices,
        decimal TotalPayableAmount,
        decimal TotalProfit,
        decimal CashInHand,
        int ActiveLeads,
        int TotalHeads,
        decimal TotalReceivables,
        decimal TotalCustomerWallets
    );

    public record FlightBookingSummaryResponse(
        long Id,
        string? HeadName,
        string? FromLocation,
        string? ToLocation,
        string? PaymentMethod,
        string? PaymentStatus,
        string? ProcessingStatus,
        decimal PayableAmount,
        int PassengerCount,
        DateTime? CreatedAt,
        string? DocumentNumber = null,
        string? SalesmanName = null,
        bool IsDealClosed = false, bool OperationClosed = false,
        string? PassengerNames = null,
        long? SupplierId = null,
        string? SupplierName = null,
        string? Supplier = null
    );

    public record FlightPassengerResponse(
        long Id,
        string? Prefix,
        string PassengerName,
        decimal PayableAmount,
        decimal ExpectedSupplierCost,
        decimal Profit,
        bool IsInhouse,
        long? SupplierId,
        string? SupplierName
    );

    public record FlightBookingDetailResponse(
        long Id,
        long UserId,
        long? HeadId,
        string? HeadName,
        string ClientType,
        string? Agent,
        long? AgentId,
        string? CareOf,
        string? Supplier,
        string FromLocation,
        string ToLocation,
        string PaymentMethod,
        long? BankId,
        string? BankName,
        string PaymentStatus,
        string ProcessingStatus,
        decimal PayableAmount,
        string? PaymentProof,
        DateTime CreatedAt,
        DateTime? UpdatedAt,
        List<FlightPassengerResponse> Passengers,
        string? DocumentNumber = null,
        bool IsDealClosed = false, bool OperationClosed = false
    );

    public record HotelBookingSummaryResponse(
        long Id,
        string? HeadName,
        string? GuestName,
        string? Country,
        int Days,
        DateTime? CheckInDate,
        string? PaymentMethod,
        string? PaymentStatus,
        string? ProcessingStatus,
        string? OrderStatus,
        decimal PayableAmount,
        decimal Profit,
        DateTime? CreatedAt,
        string? DocumentNumber = null,
        string? SalesmanName = null,
        bool IsDealClosed = false, bool OperationClosed = false,
        long? SupplierId = null,
        string? SupplierName = null,
        string? Supplier = null
    );

    public record HotelBookingDetailResponse(
        long Id,
        long UserId,
        long? HeadId,
        string? HeadName,
        string ClientType,
        string? Agent,
        long? AgentId,
        bool IsInhouse,
        long? SupplierId,
        string? SupplierName,
        decimal ExpectedSupplierCost,
        decimal PayableAmount,
        decimal Profit,
        string? Prefix,
        string GuestName,
        string? CareOf,
        string Country,
        int Days,
        DateTime CheckInDate,
        string PaymentMethod,
        long? BankId,
        string? BankName,
        string PaymentStatus,
        string ProcessingStatus,
        string OrderStatus,
        string? PaymentProof,
        DateTime CreatedAt,
        DateTime? UpdatedAt,
        string? DocumentNumber = null,
        bool IsDealClosed = false, bool OperationClosed = false
    );

    public record VisaApplicationSummaryResponse(
        long Id,
        string? HeadName,
        string? VisaPackName,
        string? ClientType,
        string? PaymentMethod,
        string? ProcessingStatus,
        string? PaymentStatus,
        decimal PayableAmount,
        decimal Profit,
        int ApplicantCount,
        DateTime? CreatedAt,
        string? DocumentNumber = null,
        string? SalesmanName = null,
        bool IsDealClosed = false, bool OperationClosed = false,
        string? ApplicantNames = null,
        long? SupplierId = null,
        string? SupplierName = null,
        string? Supplier = null,
        string? CountryName = null,
        string? Country = null
    );

    public record VisaApplicantResponse(
        long Id,
        string? Prefix,
        string? FName,
        string? LName,
        DateTime? Dob,
        string? Nationality,
        string? CareOf,
        string? ContactNo,
        string? EmailId,
        string? PassportNo,
        string? IqamaHotelNo,
        decimal PayableAmount,
        decimal ExpectedSupplierCost,
        decimal Profit,
        bool IsInhouse,
        string? PaymentMethod,
        string? PaymentStatus,
        string? PaymentProof,
        string? PaymentReference,
        long? BankId,
        string? BankName
    );

    public record VisaApplicationDetailResponse(
        long Id,
        long UserId,
        long CountryId,
        long VisaPackId,
        string VisaPackName,
        string ClientType,
        string? Agent,
        long? AgentId,
        long? HeadId,
        string? HeadName,
        string ProcessingStatus,
        string PaymentStatus,
        string? VisaDocument,
        string? ApprovalNote,
        string? RejectionDocument,
        string? RejectionNote,
        string? RefundNote,
        decimal PayableAmount,
        decimal ExpectedSupplierCost,
        decimal Profit,
        long? SupplierId,
        string? SupplierName,
        decimal RejectionFee,
        string? PaymentProof,
        DateTime CreatedAt,
        DateTime? UpdatedAt,
        List<VisaApplicantResponse> Applicants,
        string? DocumentNumber = null,
        bool IsDealClosed = false, bool OperationClosed = false,
        string? CountryName = null,
        string? Country = null
    );

    public record VfsAppointmentSummaryResponse(
        long Id,
        string? HeadName,
        string? Name,
        string? Country,
        string? VisaType,
        string? PaymentMethod,
        string? PaymentStatus,
        string? ProcessingStatus,
        decimal PayableAmount,
        decimal Profit,
        DateTime? AppointmentDate,
        DateTime? CreatedAt,
        string? DocumentNumber = null,
        string? SalesmanName = null,
        bool IsDealClosed = false, bool OperationClosed = false,
        long? SupplierId = null,
        string? SupplierName = null,
        string? Supplier = null
    );

    public record VfsApplicantResponse(
        long Id,
        string? Prefix = null,
        string? Name = null,
        string? PassportCopy = null,
        decimal PayableAmount = 0,
        decimal ExpectedSupplierCost = 0,
        decimal Profit = 0,
        bool IsInhouse = false,
        long? SupplierId = null,
        string? SupplierName = null
    );

    public record GovtFeeDetailResponse(
        long Id,
        string? RowKey = null,
        long? AccountsPaymentId = null,
        decimal Amount = 0,
        string? Description = null,
        string? PaymentReference = null,
        string? Status = null,
        string? PaymentProof = null,
        long? SupplierId = null,
        string? SupplierName = null,
        DateTime? CreatedAt = null
    );

    public record VfsAppointmentDetailResponse(
        long Id,
        long CreatedBy,
        long? HeadId,
        string? HeadName,
        string? ClientType = null,
        string? Agent = null,
        long? AgentId = null,
        string? Prefix = null,
        string? Name = null,
        string? Supplier = null,
        long? SupplierId = null,
        string? SupplierName = null,
        string? Country = null,
        string? VisaType = null,
        decimal PayableAmount = 0,
        decimal ExpectedSupplierCost = 0,
        decimal Profit = 0,
        string? PaymentMode = null,
        long? BankId = null,
        string? BankName = null,
        string? PaymentStatus = null,
        string? ProcessingStatus = null,
        DateTime? AppointmentDate = null,
        string? AppointmentTime = null,
        string? VfsReceipt = null,
        string? PassportCopy = null,
        string? PaymentProof = null,
        DateTime? CreatedAt = null,
        DateTime? UpdatedAt = null,
        string? DocumentNumber = null,
        bool IsDealClosed = false,
        bool OperationClosed = false,
        bool IsInhouse = false,
        string? VfsId = null,
        string? VfsAppId = null,
        List<VfsApplicantResponse>? Applicants = null,
        List<GovtFeeDetailResponse>? GovtFees = null
    );

    public record HolidayPackageSummaryResponse(
        long Id,
        string? HeadName,
        string? PassengerName,
        string? Country,
        int Days,
        string? PaymentMethod,
        string? PaymentStatus,
        string? ProcessingStatus,
        decimal PayableAmount,
        decimal Profit,
        DateTime? CreatedAt,
        string? DocumentNumber = null,
        string? SalesmanName = null,
        bool IsDealClosed = false, bool OperationClosed = false,
        long? SupplierId = null,
        string? SupplierName = null,
        string? Supplier = null
    );

    public record HolidayPassengerResponse(
        long Id,
        string? Prefix = null,
        string? Name = null,
        decimal PayableAmount = 0,
        decimal ExpectedSupplierCost = 0,
        decimal Profit = 0,
        bool IsInhouse = false,
        long? SupplierId = null,
        string? SupplierName = null
    );

    public record HolidayPackageDetailResponse(
        long Id,
        long CreatedBy,
        long? HeadId,
        string? HeadName,
        string? ClientType = null,
        string? Agent = null,
        long? AgentId = null,
        string? Prefix = null,
        string? PassengerName = null,
        string? Supplier = null,
        long? SupplierId = null,
        string? SupplierName = null,
        string? Country = null,
        int Days = 0,
        decimal PayableAmount = 0,
        decimal ExpectedSupplierCost = 0,
        decimal Profit = 0,
        string? PaymentMode = null,
        long? BankId = null,
        string? BankName = null,
        string? PaymentStatus = null,
        string? ProcessingStatus = null,
        string? PaymentProof = null,
        DateTime? CreatedAt = null,
        DateTime? UpdatedAt = null,
        string? DocumentNumber = null,
        bool IsDealClosed = false,
        bool OperationClosed = false,
        bool IsInhouse = false,
        string? BookingId = null,
        string? HolidayAppId = null,
        List<HolidayPassengerResponse>? Passengers = null
    );

    public record TransportationSummaryResponse(
        long Id,
        string? HeadName,
        string? Name,
        string? Pickup,
        string? Drop,
        DateTime? DropDate,
        string? PaymentMethod,
        string? PaymentStatus,
        string? ProcessingStatus,
        decimal PayableAmount,
        decimal Profit,
        DateTime? CreatedAt,
        string? DocumentNumber = null,
        string? SalesmanName = null,
        bool IsDealClosed = false, bool OperationClosed = false,
        long? SupplierId = null,
        string? SupplierName = null,
        string? Supplier = null
    );

    public record TransportPassengerResponse(
        long Id,
        string? Prefix = null,
        string? Name = null,
        decimal PayableAmount = 0,
        decimal ExpectedSupplierCost = 0,
        decimal Profit = 0,
        bool IsInhouse = false,
        long? SupplierId = null,
        string? SupplierName = null
    );

    public record TransportationDetailResponse(
        long Id,
        long CreatedBy,
        long? HeadId,
        string? HeadName,
        string? ClientType = null,
        string? Agent = null,
        long? AgentId = null,
        string? Prefix = null,
        string? Name = null,
        string? CareOf = null,
        string? Supplier = null,
        long? SupplierId = null,
        string? SupplierName = null,
        string? Pickup = null,
        string? Drop = null,
        DateTime? DropDate = null,
        string? DropTime = null,
        decimal PayableAmount = 0,
        decimal ExpectedSupplierCost = 0,
        decimal Profit = 0,
        string? PaymentMethod = null,
        long? BankId = null,
        string? BankName = null,
        string? Vehicle = null,
        string? PaymentProof = null,
        string? PaymentStatus = null,
        string? ProcessingStatus = null,
        DateTime? CreatedAt = null,
        DateTime? UpdatedAt = null,
        string? DocumentNumber = null,
        bool IsDealClosed = false,
        bool OperationClosed = false,
        bool IsInhouse = false,
        List<TransportPassengerResponse>? Passengers = null
    );

    public record OtherServiceSummaryResponse(
        long Id,
        string? HeadName,
        string? ServiceName,
        string? Name,
        string? PaymentMethod,
        string? PaymentStatus,
        string? ProcessingStatus,
        decimal PayableAmount,
        decimal Profit,
        DateTime? CreatedAt,
        string? DocumentNumber = null,
        string? SalesmanName = null,
        bool IsDealClosed = false, bool OperationClosed = false,
        long? SupplierId = null,
        string? SupplierName = null,
        string? Supplier = null
    );

    public record OtherServiceDetailResponse(
        long Id,
        long CreatedBy,
        long? HeadId,
        string? HeadName,
        string? ClientType = null,
        string? Prefix = null,
        string? Name = null,
        string? CareOf = null,
        string? Agent = null,
        long? AgentId = null,
        string? SupplierName = null,
        long? SupplierId = null,
        string? ServiceName = null,
        string? Narration = null,
        decimal PayableAmount = 0,
        decimal ExpectedSupplierCost = 0,
        decimal Profit = 0,
        string? PaymentMethod = null,
        long? BankId = null,
        string? BankName = null,
        string? PaymentProof = null,
        string? PaymentStatus = null,
        string? ProcessingStatus = null,
        DateTime? CreatedAt = null,
        DateTime? UpdatedAt = null,
        string? DocumentNumber = null,
        bool IsDealClosed = false,
        bool OperationClosed = false,
        bool IsInhouse = false
    );

    public record HeadSummaryResponse(
        long Id,
        string FirstName,
        string LastName,
        string Email,
        string MobileNo,
        string Nationality,
        string Type,
        string Status,
        decimal Wallet,
        DateTime CreatedAt,
        string? SalesmanName = null,
        string? Address = null,
        long? SalesmanId = null
    );

    public record HeadSummaryStatsResponse(
        int TotalCount,
        int CustomerCount,
        int AgentCount,
        decimal TotalWallet
    );

    public record UpdateHeadRequest(
        string FirstName,
        string? LastName,
        string Type,
        string MobileNo,
        string Email,
        string Nationality,
        string Address
    );

    public record HeadDetailResponse(
        long Id,
        string FirstName,
        string LastName,
        string Email,
        string MobileNo,
        string Nationality,
        string Type,
        string Status,
        decimal Wallet,
        string? Address,
        DateTime CreatedAt,
        string? SalesmanName = null
    );

    public record HeadLedgerEntryResponse(
        long Id,
        string Type,
        string Description,
        decimal Debit,
        decimal Credit,
        decimal Balance,
        DateTime CreatedAt,
        string? PaymentMethod = null,
        long? ServiceId = null
    );

    public record LeadSummaryResponse(
        long Id,
        string Name,
        string CountryCode,
        string MobileNo,
        string Services,
        string LeadSource,
        string Status,
        bool ReminderActive,
        DateTime? ReminderDate,
        DateTime CreatedAt,
        string? CreatedByName,
        long CreatedById
    );

    public record LeadDetailResponse(
        long Id,
        string Name,
        string CountryCode,
        string MobileNo,
        string Services,
        string LeadSource,
        string? Description,
        string Status,
        bool ReminderActive,
        DateTime? ReminderDate,
        DateTime CreatedAt
    );

    public record ReceiptSummaryResponse(
        long Id,
        string ReceiptId,
        string? HeadName,
        string ClientType,
        string? AgentName,
        string Service,
        decimal Amount,
        string PaymentMode,
        string Status,
        DateTime CreatedAt,
        long? AgentId = null,
        string? DocumentNumber = null,
        string? SalesmanName = null,
        string? Source = null,
        string? SyncStatus = null,
        string? FailureReason = null,
        long? AccountsReceiptId = null,
        long? DestinationAccountId = null,
        string? DestinationAccountName = null
    );

    public record ReceiptDetailResponse(
        long Id,
        string ReceiptId,
        string? HeadName,
        string ClientType,
        string? AgentName,
        string Service,
        decimal Amount,
        string PaymentMode,
        string Status,
        DateTime CreatedAt,
        string? Narration,
        long? HeadId,
        long? BookingId,
        long? BankId,
        string? BankName,
        string? PaymentProof,
        string? PaymentReference,
        long? AgentId = null,
        string? DocumentNumber = null,
        string? SalesmanName = null,
        string? Source = null,
        string? SyncStatus = null,
        string? FailureReason = null,
        long? AccountsReceiptId = null,
        long? DestinationAccountId = null,
        string? DestinationAccountName = null
    );

    public record CreateReceiptRequest(
        long? HeadId,
        string ClientType,
        string? AgentName,
        string Narration,
        string Service,
        long? BookingId,
        decimal Amount,
        string PaymentMode,
        long? BankId,
        string? BankName,
        string? PaymentProof = null,
        long? SalesmanId = null,
        string? SalesmanName = null,
        long? AgentId = null,
        string? ClientName = null,
        DateTime? ReceiptDate = null,
        string? ReceiptCategory = null
    );

    public record CreateInternalReceiptRequest(
        long SalesmanId,
        long HeadId,
        decimal Amount,
        string PaymentMode,
        long? DestinationAccountId,
        long? DestinationBankId,
        string? DestinationName,
        string? Notes,
        string? PaymentProof,
        string ExternalReference,
        DateTime? ReceiptDate = null
    );

    public record CreateAccountsReceiptRequest(
        string DestinationType,
        long? DestinationAccountId,
        long? DestinationBankId,
        decimal Amount,
        string? ClientType,
        long? HeadId,
        string? AgentName,
        string? Description,
        string? ReferenceId,
        string? PaymentProof = null,
        long? SalesmanId = null,
        string? SalesmanName = null,
        long? AgentId = null,
        string? ClientName = null,
        DateTime? ReceiptDate = null
    );

    public record AccountsReceiptSummaryDto(
        long Id,
        string ReferenceId,
        string DocumentNumber,
        long? DestinationAccountId,
        string? DestinationAccountName,
        long? DestinationBankId,
        string? DestinationBankName,
        string PaymentMethod,
        decimal Amount,
        string? Description,
        string Status,
        DateTime CreatedAt,
        string? CreatedByUserName,
        long? SalesmanId = null,
        string? SalesmanName = null,
        string? ClientType = null,
        long? HeadId = null,
        long? AgentId = null,
        string? ClientName = null,
        string? SyncStatus = null,
        string? SalesPortalReceiptId = null,
        string? SalesPortalDocumentNumber = null,
        string? FailureReason = null,
        DateTime? ReceiptDate = null,
        string? ReceiptCategory = null
    );

    public record SalesmanClientSummaryDto(
        long Id,
        string Name,
        string? Phone,
        string? Email,
        string ClientType,
        decimal Wallet,
        long? SalesmanId,
        string? Status
    );

    // Accounts local types for BFF aggregation
    public record OutboxMessageDto(
        Guid Id,
        string MessageType,
        string AggregateType,
        string AggregateId,
        string Status,
        string CorrelationId,
        DateTime AvailableAt
    );

    public record GeneralLedgerEntryDto(
        long Id,
        long AccountId,
        string AccountName,
        string AccountCode,
        decimal Debit,
        decimal Credit,
        string Description,
        DateTime PostingDate
    );

    // GL Journal Entry DTOs for sales entry aggregation (Phase 3 General Ledger, not party transfers)
    public record GlJournalEntryLineResponse(
        long Id,
        long AccountId,
        int LineNumber,
        string? LineDescription,
        decimal Debit,
        decimal Credit,
        string? SourceReference,
        DateTime CreatedAt
    );

    public record GlJournalEntryResponse(
        long Id,
        string JournalNumber,
        DateTime EntryDate,
        DateTime? PostingDate,
        string Description,
        string? Reference,
        string SourceType,
        string? SourceId,
        string Status,
        long? ReversalOfJournalEntryId,
        long? ReversedByJournalEntryId,
        string CorrelationId,
        long? CreatedBy,
        long? ApprovedBy,
        DateTime? ApprovedAt,
        long? RejectedBy,
        DateTime? RejectedAt,
        string? RejectionReason,
        long? PostedBy,
        DateTime CreatedAt,
        DateTime UpdatedAt,
        List<GlJournalEntryLineResponse> Lines
    );

    // Unified aggregation response wrapper
    public record SalesEntryDetailResponse<TDetail>(
        TDetail SalesDetail,
        List<SupplierPaymentResponse> SupplierPayments,
        List<SalesReturnResponse> SalesReturns,
        List<PurchaseReturnResponse> PurchaseReturns,
        List<GeneralLedgerEntryDto> LedgerEntries,
        List<GlJournalEntryResponse> JournalEntries,
        List<OutboxMessageDto> OutboxMessages
    );

    public record SalesmanResponse(
        long Id,
        string Name,
        string Email
    );

    public class SalesmanReportResponse
    {
        public long Id { get; set; }
        public string Name { get; set; } = null!;
        public string Email { get; set; } = null!;
        public int LeadsCount { get; set; }
        public int BookingsCount { get; set; }
        public decimal TotalSalesValue { get; set; }
        public decimal TotalProfit { get; set; }
        public decimal TotalFinalProfit { get; set; }

        // Service Breakdown Statistics
        public int FlightCount { get; set; }
        public decimal FlightSales { get; set; }
        public decimal FlightProfit { get; set; }
        public decimal FlightFinalProfit { get; set; }

        public int HotelCount { get; set; }
        public decimal HotelSales { get; set; }
        public decimal HotelProfit { get; set; }
        public decimal HotelFinalProfit { get; set; }

        public int VisaCount { get; set; }
        public decimal VisaSales { get; set; }
        public decimal VisaProfit { get; set; }
        public decimal VisaFinalProfit { get; set; }

        public int VfsCount { get; set; }
        public decimal VfsSales { get; set; }
        public decimal VfsProfit { get; set; }
        public decimal VfsFinalProfit { get; set; }

        public int HolidayCount { get; set; }
        public decimal HolidaySales { get; set; }
        public decimal HolidayProfit { get; set; }
        public decimal HolidayFinalProfit { get; set; }

        public int TransportCount { get; set; }
        public decimal TransportSales { get; set; }
        public decimal TransportProfit { get; set; }
        public decimal TransportFinalProfit { get; set; }

        public int OtherCount { get; set; }
        public decimal OtherSales { get; set; }
        public decimal OtherProfit { get; set; }
        public decimal OtherFinalProfit { get; set; }

        public decimal CreditToCollect { get; set; }

        public bool IsReconciled { get; set; } = true;
        public decimal ReconciliationDifference { get; set; } = 0m;
    }

    public record SalesmanServiceEntryResponse(
        long Id,
        string ServiceType,
        string DocumentNumber,
        string? CustomerHead,
        string? BeneficiaryName,
        string? Details,
        decimal Amount,
        string? PaymentMethod,
        string? PaymentStatus,
        string? ProcessingStatus,
        DateTime CreatedAt
    );

    public record SalesmanProfitRecordResponse(
        long Id,
        long SalesmanId,
        string BookingType,
        long BookingId,
        string? DocumentNumber,
        decimal PayableAmount,
        decimal FinalSupplierCost,
        decimal ProfitAmount,
        object? ProfitType,
        object? SupplierCostSource,
        decimal? AccountsApprovedTotal,
        decimal? RejectionFee,
        bool IsFinal,
        DateTime BookingCreatedAt,
        DateTime? FinalizedAt,
        DateTime? LastReconciledAt,
        DateTime CreatedAt,
        DateTime UpdatedAt,
        string? ClientName = null
    );
    public record QuotationSummaryResponse(
        long Id,
        string DocumentNumber,
        long UserId,
        string SalesmanName,
        long? HeadId,
        string ClientType,
        string CustomerName,
        string? CustomerContact,
        string? CustomerEmail,
        int ItemsCount,
        decimal TotalAmount,
        string Status,
        DateTime CreatedAt
    );

    public record QuotationItemDto(
        long? Id,
        string ServiceType,
        string Description,
        int Quantity,
        decimal UnitPrice,
        decimal TotalAmount
    );

    public record QuotationDetailResponse(
        long Id,
        string DocumentNumber,
        long UserId,
        string SalesmanName,
        long? HeadId,
        string ClientType,
        string CustomerName,
        string? CustomerContact,
        string? CustomerEmail,
        decimal TotalAmount,
        string Status,
        string? Remarks,
        DateTime CreatedAt,
        List<QuotationItemDto> Items
    );

    public record UpdateQuotationStatusRequest(string Status, string? Note = null);

    public record SalesmanProfitAdjustmentRequest(
        string BookingType,
        string BookingIdOrRef,
        int AdjustmentType,
        decimal Amount,
        string ReferenceType,
        string ReferenceId,
        string IdempotencyKey,
        string Description,
        long? CreatedByUserId = null
    );

    public record SalesmanProfitAdjustmentHistoryResponse(
        string Id,
        long? RecordId,
        string BookingType,
        long BookingId,
        string? DocumentNumber,
        long SalesmanId,
        string? SalesmanName,
        string? ClientName,
        decimal PayableAmount,
        decimal PreviousProfit,
        decimal NewProfit,
        decimal DeltaAmount,
        string Reason,
        DateTime Timestamp,
        string? ModifiedBy
    );

    public sealed class OpenDealEntryResponse
    {
        public long Id { get; set; }
        public string ServiceType { get; set; } = null!; // "Flight" | "Hotel" | "Visa" | "Holiday" | "VFS" | "Transport" | "Other"
        public string DocumentNumber { get; set; } = null!;
        public DateTime CreatedAt { get; set; }
        public long? HeadId { get; set; }
        public string? HeadName { get; set; }
        public string? ClientType { get; set; }
        public long SalesmanId { get; set; }
        public string? SalesmanName { get; set; }
        public string? MainDetails { get; set; }
        public decimal PayableAmount { get; set; }
        public decimal ExpectedSupplierCost { get; set; }
        public decimal ExpectedProfit { get; set; }
        public string? PaymentMethod { get; set; }
        public string? PaymentStatus { get; set; }
        public string? ProcessingStatus { get; set; }
        public bool IsDealClosed { get; set; }
        public bool OperationClosed { get; set; }
        public string? Country { get; set; }
        public string? CountryName { get; set; }
    }

    public sealed class OpenDealsSummaryResponse
    {
        public int TotalOpenDeals { get; set; }
        public decimal TotalSalesValue { get; set; }
        public decimal TotalExpectedCost { get; set; }
        public decimal TotalExpectedProfit { get; set; }
        public System.Collections.Generic.Dictionary<string, int> ServiceBreakdown { get; set; } = new();
    }
}

    public record UpdateBookingOperationClosedRequest(bool? OperationClosed);

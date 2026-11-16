using System;

namespace TexasAccountsPortal.Contracts.SupplierPayments
{
    public record CreateSupplierPaymentRequest(
        long SupplierId,
        decimal Amount,
        string PaymentMethod, // "bank_transfer", "credit"
        string? SourceAccountId, // e.g. "bank_1" or "account_2" to map legacy format
        string? ReferenceNumber,
        string? ExternalReference, // service_id
        string? ServiceType, // service_type
        string? Description,
        string SupplierName
    );

    public record ApproveSupplierPaymentRequest(long ApprovedBy);

    public record UpdateSupplierPaymentRequest(
        decimal Amount,
        string? ReferenceNumber,
        string? Description,
        long? SupplierId,
        string? PaymentMethod = null,
        string? SourceAccountId = null
    );

    public record RejectSupplierPaymentRequest(string? Reason);

    public record SupplierPaymentResponse(
        long Id,
        long SupplierId,
        decimal Amount,
        string Currency,
        string PaymentMethod,
        string? SourceType,
        long? SourceBankId,
        long? SourceAccountId,
        string? ReferenceNumber,
        string? ExternalReference,
        string? Description,
        string Status,
        long RequestedByUserId,
        DateTime RequestedAt,
        long? ApprovedByUserId,
        DateTime? ApprovedAt,
        long? RejectedByUserId,
        DateTime? RejectedAt,
        string? RejectionReason,
        string? CorrelationId,
        DateTime CreatedAt,
        DateTime UpdatedAt,
        string? RowVersion,
        string? RequestedByName = null,
        string? SourceBankName = null,
        string? SourceAccountName = null,
        string? ServiceType = null,
        string? DocumentNumber = null
    );
}

using System;

namespace TexasAccountsPortal.Contracts.PurchaseReturns
{
    public record CreatePurchaseReturnRequest(
        long SupplierId,
        string OriginalPurchaseReference,
        string ServiceType,
        string DestinationType, // "account", "bank", "supplier_wallet"
        string DestinationId, // e.g. "bank_1", "account_2" or "supplier_3"
        decimal Amount,
        string Reason,
        string SupplierName
    );

    public record PurchaseReturnResponse(
        long Id,
        string DocumentNumber,
        long SupplierId,
        string OriginalPurchaseReference,
        string? ExternalReference,
        decimal Amount,
        string Currency,
        string Reason,
        string Status,
        long RequestedByUserId,
        string? RequestedByName,
        DateTime RequestedAt,
        long? ApprovedByUserId,
        DateTime? ApprovedAt,
        long? RejectedByUserId,
        DateTime? RejectedAt,
        string? RejectionReason,
        string? CorrelationId,
        DateTime CreatedAt,
        DateTime UpdatedAt,
        string? RowVersion
    );

    public record RejectPurchaseReturnRequest(string? Reason);
}

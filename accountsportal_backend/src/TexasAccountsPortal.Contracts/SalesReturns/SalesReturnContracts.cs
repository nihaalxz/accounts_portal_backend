using System;

namespace TexasAccountsPortal.Contracts.SalesReturns
{
    public record CreateSalesReturnRequest(
        string ServiceType,
        string ServiceId,
        string SourceType, // "account", "bank"
        string SourceId, // e.g. "bank_1", "account_2"
        string RecipientType, // "agent", "head"
        long RecipientId,
        decimal Amount,
        string ReturnReason
    );

    public record SalesReturnResponse(
        long Id,
        string DocumentNumber,
        string RecipientType,
        long RecipientId,
        string OriginalSaleReference,
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
        string? RowVersion,
        string? RecipientName = null
    );

    public record RejectSalesReturnRequest(string? Reason);
}

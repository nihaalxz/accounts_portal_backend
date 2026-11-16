using System;

namespace TexasAccountsPortal.Contracts.Disputes
{
    public record DisputeResponse(
        long Id,
        long UserId,
        long? HeadId,
        string? HeadName,
        long DisputableId,
        string DisputableType,
        string Subject,
        string Description,
        string Status,
        string? Resolution,
        string? ResolutionNote,
        string? ResolvedBy,
        DateTime? ResolvedAt,
        bool IsRefund,
        decimal? RefundAmount,
        decimal? ApprovedRefundAmount,
        bool RefundProcessed,
        string? RefundStatus,
        DateTime? RefundDate,
        DateTime? CreatedAt,
        string? SalesmanName = null,
        decimal? BookingPayableAmount = null,
        decimal? BookingSupplierCost = null,
        decimal? HeadWallet = null,
        string? DocumentNumber = null,
        string? DisputableDocumentNumber = null,
        string? Iban = null,
        string? Name = null
    );

    public record DisputesDashboardResponse(
        int Total,
        int Pending,
        int Resolved,
        int Rejected,
        decimal RequestedRefundAmount,
        decimal ApprovedRefundAmount
    );

    public record DisputeDecisionRequest(
        string Decision,
        decimal? ApprovedRefundAmount = null,
        string? Resolution = null
    );
}

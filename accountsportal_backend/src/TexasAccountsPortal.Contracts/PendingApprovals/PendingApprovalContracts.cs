using System;

namespace TexasAccountsPortal.Contracts.PendingApprovals
{
    public record SubmitPendingApprovalRequest(
        string EntityType,
        string PayloadJson,
        string SubmittedByName
    );

    public record PendingApprovalResponse(
        long Id,
        string EntityType,
        string PayloadJson,
        string SubmittedByName,
        long SubmittedByUserId,
        DateTime SubmittedAt,
        string Status,
        string? ReviewedByName,
        DateTime? ReviewedAt
    );
}

using System;

namespace TexasAccountsPortal.Contracts.ChartOfAccounts
{
    public record CreateChartOfAccountRequest(
        string Code,
        string Name,
        string AccountType, // "asset", "liability", "equity", "revenue", "expense"
        string NormalBalance, // "debit", "credit"
        long? ParentId,
        bool IsControlAccount,
        string? Description
    );

    public record UpdateChartOfAccountRequest(
        string Name,
        string? Description
    );

    public record ChartOfAccountResponse(
        long Id,
        string Code,
        string Name,
        string AccountType,
        string NormalBalance,
        long? ParentId,
        bool IsControlAccount,
        bool IsSystemAccount,
        bool IsActive,
        string? Description,
        DateTime CreatedAt
    );
}

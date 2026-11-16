using System;

namespace TexasAccountsPortal.Contracts.Accounts
{
    public record CreateAccountRequest(
        string Name,
        string Type, // "cash", "bank", "credit"
        string LedgerType, // "asset", "liability", "capital", "income", "expense"
        decimal OpeningBalance,
        long? BankId
    );

    public record UpdateAccountRequest(
        string Name,
        string Type,
        string LedgerType,
        long? BankId
    );

    public record AccountResponse(
        long Id,
        string Name,
        string Type,
        string LedgerType,
        decimal Balance,
        decimal CurrentBalance,
        long? BankId,
        bool IsActive,
        DateTime CreatedAt
    );

    public record BalanceCorrectionRequest(decimal AdjustmentAmount, string Reason);
}

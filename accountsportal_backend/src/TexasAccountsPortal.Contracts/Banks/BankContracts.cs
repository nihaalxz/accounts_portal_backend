using System;

namespace TexasAccountsPortal.Contracts.Banks
{
    public record CreateBankRequest(string BankName, string AccountNumber, decimal OpeningBalance);

    public record UpdateBankRequest(string BankName, string AccountNumber);

    public record BankResponse(
        long Id,
        string BankName,
        string AccountNumber,
        decimal Balance,
        decimal CurrentBalance,
        bool IsActive,
        DateTime CreatedAt
    );
}

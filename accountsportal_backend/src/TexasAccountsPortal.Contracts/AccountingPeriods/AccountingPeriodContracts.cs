using System;

namespace TexasAccountsPortal.Contracts.AccountingPeriods
{
    public record CreateAccountingPeriodRequest(
        string Name,
        int FiscalYear,
        int PeriodNumber,
        DateTime StartDate,
        DateTime EndDate
    );

    public record ReopenAccountingPeriodRequest(
        string Reason
    );

    public record AccountingPeriodResponse(
        long Id,
        string Name,
        int FiscalYear,
        int PeriodNumber,
        DateTime StartDate,
        DateTime EndDate,
        string Status, // "open", "closed"
        DateTime? ClosedAt,
        long? ClosedByUserId,
        DateTime? ReopenedAt,
        long? ReopenedByUserId,
        string? ReopenReason,
        DateTime CreatedAt
    );
}

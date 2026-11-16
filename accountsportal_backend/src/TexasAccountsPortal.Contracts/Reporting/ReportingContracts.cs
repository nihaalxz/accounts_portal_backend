using System;
using System.Collections.Generic;

namespace TexasAccountsPortal.Contracts.Reporting
{
    public record TrialBalanceResponse(
        List<TrialBalanceItem> Items,
        decimal TotalDebitSum,
        decimal TotalCreditSum,
        bool IsBalanced
    );

    public record TrialBalanceItem(
        long AccountId,
        string AccountCode,
        string AccountName,
        string AccountType,
        string NormalBalance,
        decimal TotalDebit,
        decimal TotalCredit,
        decimal EndingBalance
    );

    public record GeneralLedgerReportRequest(
        DateTime? StartDate,
        DateTime? EndDate,
        long? AccountId
    );

    public record GeneralLedgerReportResponse(
        long AccountId,
        string AccountCode,
        string AccountName,
        decimal OpeningBalance,
        decimal EndingBalance,
        decimal TotalDebit,
        decimal TotalCredit,
        List<GeneralLedgerReportItem> Items
    );

    public record GeneralLedgerReportItem(
        long Id,
        DateTime PostingDate,
        decimal Debit,
        decimal Credit,
        string Description,
        string SourceType,
        string SourceId,
        string? SourceReference,
        string CorrelationId,
        DateTime CreatedAt
    );

    public record GlReconciliationReportResponse(
        List<MissingJournalItem> MissingJournals,
        List<UnbalancedJournalItem> UnbalancedJournals,
        List<DuplicatePostingItem> DuplicatePostings,
        bool IsReconciled
    );

    public record MissingJournalItem(
        string OriginType,
        long Id,
        string Reference,
        decimal Amount,
        DateTime Date,
        string Status
    );

    public record UnbalancedJournalItem(
        long JournalId,
        string JournalNumber,
        string Description,
        decimal TotalDebits,
        decimal TotalCredits,
        DateTime EntryDate
    );

    public record DuplicatePostingItem(
        string SourceType,
        string SourceId,
        int Count,
        List<DuplicateJournalDetails> Details
    );

    public record DuplicateJournalDetails(
        long JournalId,
        string JournalNumber,
        decimal Amount,
        DateTime EntryDate
    );

    public record AccountStatementResponse(
        string AccountCode,
        string AccountName,
        decimal OpeningBalance,
        decimal EndingBalance,
        decimal TotalDebits,
        decimal TotalCredits,
        List<AccountStatementLine> Lines
    );

    public record AccountStatementLine(
        DateTime Date,
        string Description,
        decimal Debit,
        decimal Credit,
        decimal RunningBalance,
        string SourceType,
        string SourceId,
        string? Reference
    );

    public record ExpenseReportResponse(
        DateTime StartDate,
        DateTime EndDate,
        decimal TotalExpenseAmount,
        List<ExpenseCategorySummary> Categories,
        List<ExpenseReportItem> Items
    );

    public record ExpenseCategorySummary(
        long CategoryId,
        string CategoryName,
        string AccountCode,
        decimal TotalAmount,
        int Count
    );

    public record ExpenseReportItem(
        long ExpenseId,
        string ExpenseNumber,
        string CategoryName,
        decimal Amount,
        DateTime Date,
        string Description,
        string PaymentMethod,
        string Status
    );
}

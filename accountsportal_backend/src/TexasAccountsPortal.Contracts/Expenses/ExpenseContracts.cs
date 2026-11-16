using System;

namespace TexasAccountsPortal.Contracts.Expenses
{
    public record CreateExpenseHeaderRequest(
        string Name,
        string Category, // "Asset", "Liability", "Income", "Capital", "Expenses"
        string? Description
    );

    public record ExpenseHeaderResponse(
        long Id,
        string Name,
        string Category,
        string? Description,
        long? CreatedBy,
        DateTime CreatedAt
    );

    public record ExpenseCategorySummaryDto(
        int Count,
        decimal TotalAmount
    );

    public record ExpenseSummaryResponse(
        ExpenseCategorySummaryDto All,
        ExpenseCategorySummaryDto Asset,
        ExpenseCategorySummaryDto Liability,
        ExpenseCategorySummaryDto Income,
        ExpenseCategorySummaryDto Capital,
        ExpenseCategorySummaryDto Expenses,
        ExpenseCategorySummaryDto? Contra = null
    );

    public record CreateExpenseRequest(
        long ExpenseCategoryId,
        decimal Amount,
        string Description,
        string PaymentMethod, // "cash", "bank_transfer", "bank"
        long? SourceAccountId,
        long? SourceBankId,
        string? Notes,
        DateTime ExpenseDate
    );

    public record RejectExpenseRequest(
        string Reason
    );

    public record ExpenseResponse(
        long Id,
        string ExpenseNumber,
        long ExpenseCategoryId,
        decimal Amount,
        string Currency,
        string Description,
        string PaymentMethod,
        long? SourceAccountId,
        long? SourceBankId,
        DateTime ExpenseDate,
        string Status,
        long? PostedTransactionId,
        long? PostedJournalEntryId,
        string? RejectionReason,
        string? Notes,
        string CorrelationId,
        long CreatedBy,
        long? ApprovedBy,
        DateTime? ApprovedAt,
        long? RejectedBy,
        DateTime? RejectedAt,
        long? PostedBy,
        DateTime? PostedAt,
        DateTime CreatedAt,
        string? RowVersion
    );
}

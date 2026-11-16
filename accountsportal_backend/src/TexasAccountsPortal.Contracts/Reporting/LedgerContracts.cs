using System;
using System.Collections.Generic;

namespace TexasAccountsPortal.Contracts.Reporting
{
    public record BalanceSheetResponse(
        List<BalanceSheetItem> Assets,
        decimal TotalAssets,
        List<BalanceSheetItem> Liabilities,
        decimal TotalLiabilities,
        List<BalanceSheetItem> Equity,
        decimal TotalEquity,
        bool IsBalanced
    );

    public record BalanceSheetItem(
        long AccountId,
        string AccountCode,
        string AccountName,
        long? ParentId,
        decimal Balance,
        bool IsControlAccount
    );

    public record ProfitAndLossResponse(
        List<ProfitAndLossItem> Revenues,
        decimal TotalRevenues,
        List<ProfitAndLossItem> Expenses,
        decimal TotalExpenses,
        decimal NetProfit
    );

    public record ProfitAndLossItem(
        long AccountId,
        string AccountCode,
        string AccountName,
        long? ParentId,
        decimal Balance,
        bool IsControlAccount
    );

    public record LedgerDashboardResponse(
        decimal AgentWalletsSum,
        decimal SupplierWalletsSum,
        int PendingSupplierPaymentsCount,
        int PendingPurchaseReturnsCount,
        int PendingSalesReturnsCount,
        int PendingExpensesCount,
        int DraftJournalEntriesCount
    );
}

using System;
using System.Collections.Generic;

namespace TexasAccountsPortal.Contracts.Reporting;

public record OperationalProfitAndLossResponse(
    DateTime StartDate,
    DateTime EndDate,
    string DealStatus,
    long? SalesmanId,
    string? SalesmanName,
    // 1. Revenues
    List<ServiceFinancialLineItem> RevenueItems,
    decimal GrossBookingRevenue,
    decimal ApprovedSalesReturns,
    decimal NetRevenue,
    // 2. Cost of Sales
    List<ServiceFinancialLineItem> CostOfSalesItems,
    decimal GrossSupplierCost,
    decimal ApprovedPurchaseReturns,
    decimal NetCostOfSales,
    // 3. Gross Margins
    decimal GrossProfit,
    decimal GrossMarginPercentage,
    decimal FinalizedGrossProfit,
    decimal EstimatedGrossProfit,
    // 4. Operating Expenses
    List<ExpenseCategorySummaryItem> ExpenseItems,
    decimal TotalApprovedExpenses,
    decimal TotalPayrollExpenses,
    decimal TotalOperatingExpenses,
    // 5. Net Profit
    decimal NetProfit,
    decimal NetMarginPercentage,
    decimal FinalizedNetProfit,
    decimal FinalizedNetMarginPercentage,
    bool IsProfitable,
    // 6. Reconciliation & Metadata
    bool Reconciled,
    decimal ReconciliationDifference,
    string ReconciliationMessage,
    DateTime GeneratedAt,
    string DataSourcesStatus
);

public record ServiceFinancialLineItem(
    string ServiceType,
    string ServiceLabel,
    int BookingCount,
    decimal SalesAmount,
    decimal CostAmount,
    decimal ProfitAmount,
    decimal FinalProfitAmount,
    decimal MarginPercentage
);

public record ExpenseCategorySummaryItem(
    long CategoryId,
    string CategoryName,
    int ExpenseCount,
    decimal TotalAmount
);

public sealed class OperationalBookingFinancialsSummaryResponse
{
    public DateTime? StartDate { get; init; }
    public DateTime? EndDate { get; init; }
    public string DealStatus { get; init; } = "all";
    public long? SalesmanId { get; init; }
    public int TotalBookingsCount { get; init; }
    public decimal TotalSalesValue { get; init; }
    public decimal TotalSupplierCost { get; init; }
    public decimal TotalGrossProfit { get; init; }
    public decimal TotalFinalProfit { get; init; }
    public decimal TotalEstimatedProfit { get; init; }
    public List<ServiceBookingFinancialItem> ServiceBreakdown { get; init; } = new();
}

public sealed class ServiceBookingFinancialItem
{
    public string ServiceType { get; init; } = string.Empty;
    public string ServiceLabel { get; init; } = string.Empty;
    public int BookingCount { get; init; }
    public decimal SalesAmount { get; init; }
    public decimal CostAmount { get; init; }
    public decimal ProfitAmount { get; init; }
    public decimal FinalProfitAmount { get; init; }
    public decimal MarginPercentage { get; init; }
}


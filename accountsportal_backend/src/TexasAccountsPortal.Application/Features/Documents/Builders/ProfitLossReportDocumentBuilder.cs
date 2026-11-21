using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using TexasAccountsPortal.Application.Features.Documents.Models;
using TexasAccountsPortal.Application.Features.Documents.Builders;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Domain.Common;

namespace TexasAccountsPortal.Application.Features.Documents.Builders;

public class ProfitLossReportDocumentBuilder : IDocumentBuilder
{
    private readonly IReportingService _reportingService;
    private readonly DocumentOptions _options;

    private static readonly HashSet<string> SupportedTypes = new(StringComparer.OrdinalIgnoreCase)
    {
        "profit-loss",
        "profitloss",
        "pnl",
        "income-statement",
        "incomestatement",
        "profit-loss-operational",
        "profitlossoperational",
        "operational-profit-loss",
        "operationalprofitloss"
    };

    public ProfitLossReportDocumentBuilder(
        IReportingService reportingService,
        IOptions<DocumentOptions> options)
    {
        _reportingService = reportingService;
        _options = options.Value ?? new DocumentOptions();
    }

    private static string NormalizeType(string type)
    {
        if (string.IsNullOrWhiteSpace(type)) return string.Empty;
        var key = type.Trim().ToLowerInvariant().Replace("-", "").Replace("_", "");
        if (key is "profitloss" or "pnl" or "incomestatement" or "profitlossoperational" or "operationalprofitloss") return "profit-loss";
        return key;
    }

    public bool CanBuild(string category, string type)
    {
        var norm = NormalizeType(type);
        return string.Equals(category, "report", StringComparison.OrdinalIgnoreCase) && 
               (SupportedTypes.Contains(norm) || SupportedTypes.Contains(type));
    }

    public async Task<DocumentDataModel?> BuildAsync(DocumentBuildArgs args, CancellationToken ct = default)
    {
        var q = args.QueryParams;

        DateTime? start = q.TryGetValue("startDate", out var sStr) && DateTime.TryParse(sStr, out var sDt) ? sDt : null;
        DateTime? end = q.TryGetValue("endDate", out var eStr) && DateTime.TryParse(eStr, out var eDt) ? eDt : null;
        string? dealStatus = q.TryGetValue("dealStatus", out var ds) ? ds : null;
        long? salesmanId = q.TryGetValue("salesmanId", out var sidStr) && long.TryParse(sidStr, out var sid) ? sid : null;

        var pnl = await _reportingService.GetOperationalProfitAndLossAsync(start, end, dealStatus, salesmanId, ct);
        if (pnl == null) return null;

        var model = new DocumentDataModel
        {
            Title = "PROFIT & LOSS STATEMENT",
            Subtitle = "Operational Financial Statement — Texas Travel & Tourism",
            Category = "Report",
            Date = BahrainTime.Now,
            PreparedBy = "Texas Accounts Portal Executive System",
            Options = _options
        };

        model.ActiveFilters.Add(new KeyValuePair<string, string>("Period", $"{pnl.StartDate:dd/MM/yyyy} to {pnl.EndDate:dd/MM/yyyy}"));
        if (!string.IsNullOrEmpty(dealStatus) && !string.Equals(dealStatus, "all", StringComparison.OrdinalIgnoreCase))
        {
            model.ActiveFilters.Add(new KeyValuePair<string, string>("Deal Status", pnl.DealStatus.ToUpperInvariant()));
        }
        else
        {
            model.ActiveFilters.Add(new KeyValuePair<string, string>("Scope", "Company-wide Operational Statement"));
        }
        if (pnl.SalesmanId.HasValue)
        {
            model.ActiveFilters.Add(new KeyValuePair<string, string>("Salesman", pnl.SalesmanName ?? $"ID #{pnl.SalesmanId}"));
        }
        model.ActiveFilters.Add(new KeyValuePair<string, string>("Date Basis", "Created Date (Sales), Expense Date, Payroll Date (UTC+3)"));

        // Summary Cards
        model.SummaryCards.Add(new DocumentSummaryCard
        {
            Label = "NET REVENUE",
            Value = $"{pnl.NetRevenue:N3} BHD",
            Subtext = $"{pnl.RevenueItems.Sum(x => x.BookingCount)} Bookings",
            HighlightColor = "#2563eb"
        });
        model.SummaryCards.Add(new DocumentSummaryCard
        {
            Label = "COST OF SALES",
            Value = $"{pnl.NetCostOfSales:N3} BHD",
            Subtext = "Supplier Costs",
            HighlightColor = "#d97706"
        });
        model.SummaryCards.Add(new DocumentSummaryCard
        {
            Label = "FINAL PROFIT",
            Value = $"{pnl.GrossProfit:N3} BHD",
            Subtext = $"Margin: {pnl.GrossMarginPercentage:F1}%",
            HighlightColor = "#059669"
        });
        model.SummaryCards.Add(new DocumentSummaryCard
        {
            Label = "OPERATING EXPENSES",
            Value = $"{pnl.TotalOperatingExpenses:N3} BHD",
            Subtext = "Overheads & Payroll",
            HighlightColor = "#e11d48"
        });
        model.SummaryCards.Add(new DocumentSummaryCard
        {
            Label = pnl.IsProfitable ? "NET PROFIT" : "NET LOSS",
            Value = $"{pnl.NetProfit:N3} BHD",
            Subtext = $"Net Margin: {pnl.NetMarginPercentage:F1}%",
            HighlightColor = pnl.IsProfitable ? "#16a34a" : "#dc2626"
        });

        // Table Columns
        model.Table.Columns = new List<DocumentColumn>
        {
            new() { Header = "FINANCIAL LINE ITEM", RelativeWidth = 3.5f, IsBold = true },
            new() { Header = "CLASSIFICATION", RelativeWidth = 2.0f },
            new() { Header = "COUNT", RelativeWidth = 1.0f, Alignment = ColumnAlignment.Center },
            new() { Header = "AMOUNT (BHD)", RelativeWidth = 1.8f, Alignment = ColumnAlignment.Right, IsBold = true }
        };

        // 1. Operating Revenue
        foreach (var rev in pnl.RevenueItems)
        {
            model.Table.Rows.Add(new List<string>
            {
                $"Operating Revenue — {rev.ServiceLabel}",
                "Gross Booking Sale",
                rev.BookingCount.ToString(),
                $"{rev.SalesAmount:N3}"
            });
        }

        if (pnl.ApprovedSalesReturns > 0m)
        {
            model.Table.Rows.Add(new List<string>
            {
                "Less: Approved Sales Returns & Client Refunds",
                "Revenue Deduction",
                "—",
                $"-{pnl.ApprovedSalesReturns:N3}"
            });
        }

        model.Table.Rows.Add(new List<string>
        {
            "TOTAL NET OPERATING REVENUE",
            "Operating Inflow",
            pnl.RevenueItems.Sum(x => x.BookingCount).ToString(),
            $"{pnl.NetRevenue:N3}"
        });

        // 2. Cost of Sales
        foreach (var cost in pnl.CostOfSalesItems)
        {
            model.Table.Rows.Add(new List<string>
            {
                $"Cost of Sales — {cost.ServiceLabel}",
                "Direct Supplier Cost",
                cost.BookingCount.ToString(),
                $"{cost.CostAmount:N3}"
            });
        }

        if (pnl.ApprovedPurchaseReturns > 0m)
        {
            model.Table.Rows.Add(new List<string>
            {
                "Less: Approved Purchase Returns (Supplier Credits)",
                "Cost Deduction",
                "—",
                $"-{pnl.ApprovedPurchaseReturns:N3}"
            });
        }

        model.Table.Rows.Add(new List<string>
        {
            "TOTAL COST OF GOODS SOLD (COGS)",
            "Direct Supplier Cost",
            "—",
            $"{pnl.NetCostOfSales:N3}"
        });

        // Gross Profit Summary Line
        model.Table.Rows.Add(new List<string>
        {
            $"GROSS PROFIT (Margin: {pnl.GrossMarginPercentage:F1}%)",
            $"Finalized: {pnl.FinalizedGrossProfit:N3} | Estimated: {pnl.EstimatedGrossProfit:N3}",
            "—",
            $"{pnl.GrossProfit:N3}"
        });

        // 3. Operating Expenses
        foreach (var exp in pnl.ExpenseItems)
        {
            model.Table.Rows.Add(new List<string>
            {
                $"Operating Expense — {exp.CategoryName}",
                "Administrative / Overhead",
                exp.ExpenseCount.ToString(),
                $"{exp.TotalAmount:N3}"
            });
        }

        if (pnl.TotalPayrollExpenses > 0m)
        {
            model.Table.Rows.Add(new List<string>
            {
                "Staff Salaries, Allowances & Commissions",
                "Payroll Expenditure",
                "—",
                $"{pnl.TotalPayrollExpenses:N3}"
            });
        }

        model.Table.Rows.Add(new List<string>
        {
            "TOTAL OPERATING EXPENSES",
            "Overheads & Payroll",
            "—",
            $"{pnl.TotalOperatingExpenses:N3}"
        });

        // 4. Net Operating Profit
        model.Table.Rows.Add(new List<string>
        {
            pnl.IsProfitable
                ? $"NET OPERATING PROFIT (Net Margin: {pnl.NetMarginPercentage:F1}%)"
                : $"NET OPERATING LOSS (Net Deficit: {pnl.NetMarginPercentage:F1}%)",
            $"Finalized Net: {pnl.FinalizedNetProfit:N3} BHD",
            "—",
            $"{pnl.NetProfit:N3}"
        });

        // Total row
        model.Table.TotalRow = new List<string>
        {
            "NET PROFIT (BOTTOM LINE)",
            pnl.IsProfitable ? "Surplus" : "Deficit",
            "—",
            $"{pnl.NetProfit:N3} BHD"
        };

        model.RemarksNote = $"Reconciliation Status: {(pnl.Reconciled ? "VERIFIED (Matches Salesmen Report and Sales Entries)" : pnl.ReconciliationMessage)} | Data Sources: {pnl.DataSourcesStatus}";

        return model;
    }
}

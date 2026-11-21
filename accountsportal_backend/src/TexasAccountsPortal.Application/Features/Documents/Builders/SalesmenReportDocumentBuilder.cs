using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using TexasAccountsPortal.Application.Features.Documents.Models;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Domain.Common;

namespace TexasAccountsPortal.Application.Features.Documents.Builders;

public class SalesmenReportDocumentBuilder : IDocumentBuilder
{
    private readonly IAccountsDbContext _dbContext;
    private readonly ISalesEntriesService _salesEntriesService;
    private readonly DocumentOptions _options;

    private static readonly HashSet<string> SupportedTypes = new(StringComparer.OrdinalIgnoreCase)
    {
        "salesmen-summary", "salesman-detail", "salesman-profit", "salesman-profit-report"
    };

    public SalesmenReportDocumentBuilder(
        IAccountsDbContext dbContext,
        ISalesEntriesService salesEntriesService,
        IOptions<DocumentOptions> options)
    {
        _dbContext = dbContext;
        _salesEntriesService = salesEntriesService;
        _options = options.Value ?? new DocumentOptions();
    }

    private static string NormalizeType(string type)
    {
        if (string.IsNullOrWhiteSpace(type)) return string.Empty;
        var key = type.Trim().ToLowerInvariant().Replace("-", "").Replace("_", "");
        if (key is "salesmensummary" or "salesmansummary" or "salesmen" or "salesman" or "salesmensummaries") return "salesmen-summary";
        if (key is "salesmandetail" or "salesmandetails" or "salesmanbreakdown" or "salesmanprofit" or "salesmanprofitreport") return "salesman-detail";
        return key;
    }

    private static string NormalizeServiceKey(string? serviceType)
    {
        if (string.IsNullOrWhiteSpace(serviceType)) return string.Empty;
        var lower = serviceType.Trim().ToLowerInvariant().Replace("-", "").Replace("_", "");
        if (lower.Contains("flight")) return "flights";
        if (lower.Contains("hotel")) return "hotels";
        if (lower.Contains("holiday")) return "holiday";
        if (lower.Contains("visa") && !lower.Contains("vfs")) return "visa";
        if (lower.Contains("vfs")) return "vfs";
        if (lower.Contains("transport")) return "transport";
        if (lower.Contains("other")) return "other";
        return lower;
    }

    private static bool IsClosedStatus(string? status)
    {
        if (string.IsNullOrWhiteSpace(status)) return false;
        var s = status.Trim().ToLowerInvariant();
        return s is "closed" or "completed" or "issued" or "ticketed" or "confirmed" or "final";
    }

    private sealed class SalesmanDetailRowItem
    {
        public DateTime Date { get; set; }
        public string DocumentNumber { get; set; } = string.Empty;
        public string ServiceType { get; set; } = string.Empty;
        public string CustomerPax { get; set; } = "—";
        public string Details { get; set; } = "—";
        public bool IsClosed { get; set; }
        public decimal SaleAmount { get; set; }
        public decimal CostAmount { get; set; }
        public decimal ProfitAmount { get; set; }
    }

    public bool CanBuild(string category, string type)
    {
        var norm = NormalizeType(type);
        return string.Equals(category, "report", StringComparison.OrdinalIgnoreCase) && SupportedTypes.Contains(norm);
    }

    public async Task<DocumentDataModel?> BuildAsync(DocumentBuildArgs args, CancellationToken ct = default)
    {
        string type = NormalizeType(args.Type);
        var q = args.QueryParams;

        var model = new DocumentDataModel
        {
            Category = "Report",
            Date = BahrainTime.Now,
            Options = _options
        };

        DateTime? start = q.TryGetValue("startDate", out var sStr) && DateTime.TryParse(sStr, out var sDt) ? sDt : null;
        DateTime? end = q.TryGetValue("endDate", out var eStr) && DateTime.TryParse(eStr, out var eDt) ? eDt : null;

        if (start.HasValue) model.ActiveFilters.Add(new KeyValuePair<string, string>("From Date", start.Value.ToString("dd/MM/yyyy")));
        if (end.HasValue) model.ActiveFilters.Add(new KeyValuePair<string, string>("To Date", end.Value.ToString("dd/MM/yyyy")));

        // Fetch real salesmen performance stats from Sales Portal via ISalesEntriesService
        var rawReports = await _salesEntriesService.GetSalesmenReportAsync(start, end, ct);
        var reportsList = rawReports?.ToList() ?? new List<TexasAccountsPortal.Contracts.SalesEntries.SalesmanReportResponse>();

        if (type == "salesmen-summary")
        {
            model.Title = "SALESMEN PERFORMANCE SUMMARY REPORT";
            model.Subtitle = $"Aggregated Booking Sales across {reportsList.Count} Active Salesmen";
            model.PreparedBy = "Texas Executive Reporting System";

            decimal globalTotalSales = 0;
            int globalTotalLeads = 0;
            int globalTotalEntries = 0;

            var topPerformerObj = reportsList.OrderByDescending(r => r.TotalSalesValue).FirstOrDefault();
            string topPerformer = topPerformerObj != null && topPerformerObj.TotalSalesValue > 0 ? topPerformerObj.Name : (reportsList.FirstOrDefault()?.Name ?? "N/A");

            model.Table.Columns = new List<DocumentColumn>
            {
                new() { Header = "ID", RelativeWidth = 0.8f, IsMonoFont = true },
                new() { Header = "SALESMAN NAME", RelativeWidth = 2.2f, IsBold = true },
                new() { Header = "EMAIL", RelativeWidth = 2.0f },
                new() { Header = "LEADS", RelativeWidth = 0.8f, Alignment = ColumnAlignment.Center },
                new() { Header = "ENTRIES", RelativeWidth = 0.8f, Alignment = ColumnAlignment.Center },
                new() { Header = "SALES VALUE (BHD)", RelativeWidth = 1.8f, Alignment = ColumnAlignment.Right, IsBold = true }
            };

            foreach (var s in reportsList)
            {
                globalTotalSales += s.TotalSalesValue;
                globalTotalLeads += s.LeadsCount;
                globalTotalEntries += s.BookingsCount;

                model.Table.Rows.Add(new List<string>
                {
                    $"#{s.Id}",
                    s.Name,
                    s.Email ?? "—",
                    s.LeadsCount.ToString(),
                    s.BookingsCount.ToString(),
                    s.TotalSalesValue.ToString("0.000")
                });
            }

            model.SummaryCards.Add(new DocumentSummaryCard { Label = "Total Active Salesmen", Value = reportsList.Count.ToString() });
            model.SummaryCards.Add(new DocumentSummaryCard { Label = "Top Performer", Value = topPerformer, HighlightColor = "#2563eb" });
            model.SummaryCards.Add(new DocumentSummaryCard { Label = "Total Sales Value", Value = $"{globalTotalSales:0.000} BHD", HighlightColor = "#059669" });

            model.Table.TotalRow = new List<string> { "TOTAL", $"{reportsList.Count} Salesmen", "", globalTotalLeads.ToString(), globalTotalEntries.ToString(), $"{globalTotalSales:0.000} BHD" };
        }
        else if (type == "salesman-detail")
        {
            long salesmanId = args.EntityId ?? (q.TryGetValue("salesmanId", out var sidStr) && long.TryParse(sidStr, out var sid) ? sid : (q.TryGetValue("id", out var idStr) && long.TryParse(idStr, out var id) ? id : (q.TryGetValue("entityId", out var eidStr) && long.TryParse(eidStr, out var eid) ? eid : 0)));
            string? salesmanName = q.TryGetValue("salesmanName", out var sName) ? sName : (q.TryGetValue("name", out var n) ? n : null);

            var targetReport = reportsList.FirstOrDefault(u => u.Id == salesmanId || (salesmanName != null && u.Name.Equals(salesmanName, StringComparison.OrdinalIgnoreCase)));
            if (salesmanId == 0 && targetReport != null)
            {
                salesmanId = targetReport.Id;
            }
            string nameDisplay = targetReport?.Name ?? salesmanName ?? $"Salesman #{salesmanId}";

            // Fetch both service entries and profit records concurrently
            var entriesTask = _salesEntriesService.GetSalesmanServiceEntriesAsync(salesmanId, salesmanName, start, end, ct);
            var profitRecordsTask = _salesEntriesService.GetSalesmanProfitRecordsAsync(salesmanId, start, end, ct);
            await Task.WhenAll(entriesTask, profitRecordsTask);

            var rawEntries = (await entriesTask)?.ToList() ?? new List<TexasAccountsPortal.Contracts.SalesEntries.SalesmanServiceEntryResponse>();
            var rawProfitRecords = (await profitRecordsTask)?.ToList() ?? new List<TexasAccountsPortal.Contracts.SalesEntries.SalesmanProfitRecordResponse>();

            model.Title = "INDIVIDUAL SALESMAN PROFIT REPORT";
            model.Subtitle = $"Detailed Booking Sales, Costs & Final Profit Breakdown — {nameDisplay}";
            model.CustomerName = nameDisplay;
            model.CustomerContact = targetReport?.Email ?? "salesman@texastravel.bh";
            model.PreparedBy = "Texas Executive Reporting System";

            model.MetaData.Add(new KeyValuePair<string, string>("Salesman", nameDisplay));
            if (salesmanId > 0) model.MetaData.Add(new KeyValuePair<string, string>("User ID", $"#{salesmanId}"));
            model.MetaData.Add(new KeyValuePair<string, string>("Report Date", DateTime.Now.ToString("dd/MM/yyyy")));
            if (start.HasValue || end.HasValue)
            {
                string periodStr = (start.HasValue ? start.Value.ToString("dd/MM/yyyy") : "Start") + " to " + (end.HasValue ? end.Value.ToString("dd/MM/yyyy") : "Present");
                model.MetaData.Add(new KeyValuePair<string, string>("Filter Period", periodStr));
            }

            // Columns updated as requested:
            // Remove PAYMENT status column, add COST (approved final cost), DEAL STATUS (Open/Closed), FINAL PROFIT, MARGIN %
            model.Table.Columns = new List<DocumentColumn>
            {
                new() { Header = "DATE", RelativeWidth = 1.0f, Alignment = ColumnAlignment.Center, IsMonoFont = true },
                new() { Header = "DOC # / REF", RelativeWidth = 1.4f, IsMonoFont = true, IsBold = true },
                new() { Header = "SERVICE", RelativeWidth = 1.0f, IsBold = true },
                new() { Header = "CUSTOMER / PASSENGER", RelativeWidth = 2.0f },
                new() { Header = "DETAILS", RelativeWidth = 2.0f },
                new() { Header = "DEAL STATUS", RelativeWidth = 1.0f, Alignment = ColumnAlignment.Center, IsBold = true },
                new() { Header = "SALE (BHD)", RelativeWidth = 1.3f, Alignment = ColumnAlignment.Right, IsBold = true },
                new() { Header = "COST (BHD)", RelativeWidth = 1.3f, Alignment = ColumnAlignment.Right },
                new() { Header = "FINAL PROFIT (BHD)", RelativeWidth = 1.5f, Alignment = ColumnAlignment.Right, IsBold = true },
                new() { Header = "MARGIN %", RelativeWidth = 1.0f, Alignment = ColumnAlignment.Center }
            };

            // Map and merge service entries with profit records
            var profitByDoc = rawProfitRecords
                .Where(p => !string.IsNullOrWhiteSpace(p.DocumentNumber))
                .GroupBy(p => p.DocumentNumber!.Trim().ToUpperInvariant())
                .ToDictionary(g => g.Key, g => g.First(), StringComparer.OrdinalIgnoreCase);

            var profitByComposite = rawProfitRecords
                .GroupBy(p => $"{NormalizeServiceKey(p.BookingType)}:{p.BookingId}")
                .ToDictionary(g => g.Key, g => g.First(), StringComparer.OrdinalIgnoreCase);

            var matchedProfitIds = new HashSet<long>();
            var detailRows = new List<SalesmanDetailRowItem>();

            foreach (var item in rawEntries)
            {
                TexasAccountsPortal.Contracts.SalesEntries.SalesmanProfitRecordResponse? matchedProfit = null;
                string compKey = $"{NormalizeServiceKey(item.ServiceType)}:{item.Id}";
                if (profitByComposite.TryGetValue(compKey, out var pComp))
                {
                    matchedProfit = pComp;
                }
                else if (!string.IsNullOrWhiteSpace(item.DocumentNumber) && profitByDoc.TryGetValue(item.DocumentNumber.Trim().ToUpperInvariant(), out var pDoc))
                {
                    matchedProfit = pDoc;
                }

                if (matchedProfit != null)
                {
                    matchedProfitIds.Add(matchedProfit.Id);
                }

                string custPax = string.IsNullOrWhiteSpace(item.CustomerHead)
                    ? (item.BeneficiaryName ?? matchedProfit?.ClientName ?? "—")
                    : (string.IsNullOrWhiteSpace(item.BeneficiaryName) || item.BeneficiaryName == "—"
                        ? item.CustomerHead
                        : item.CustomerHead + " (" + item.BeneficiaryName + ")");

                decimal saleAmount = item.Amount > 0m ? item.Amount : (matchedProfit?.PayableAmount ?? 0m);
                decimal costAmount = matchedProfit != null
                    ? (matchedProfit.AccountsApprovedTotal ?? matchedProfit.FinalSupplierCost)
                    : 0m;
                decimal profitAmount = matchedProfit != null
                    ? matchedProfit.ProfitAmount
                    : (saleAmount - costAmount);

                if (costAmount == 0m && saleAmount > 0m && profitAmount != 0m && profitAmount < saleAmount)
                {
                    costAmount = saleAmount - profitAmount;
                }

                bool isClosed = matchedProfit?.IsFinal ?? IsClosedStatus(item.ProcessingStatus);

                detailRows.Add(new SalesmanDetailRowItem
                {
                    Date = item.CreatedAt,
                    DocumentNumber = item.DocumentNumber ?? matchedProfit?.DocumentNumber ?? $"#{item.Id}",
                    ServiceType = item.ServiceType,
                    CustomerPax = custPax,
                    Details = item.Details ?? "—",
                    IsClosed = isClosed,
                    SaleAmount = saleAmount,
                    CostAmount = costAmount,
                    ProfitAmount = profitAmount
                });
            }

            // Append any profit records that were not part of service entries
            foreach (var p in rawProfitRecords.Where(p => !matchedProfitIds.Contains(p.Id)))
            {
                decimal sale = p.PayableAmount;
                decimal cost = p.AccountsApprovedTotal ?? p.FinalSupplierCost;
                decimal profit = p.ProfitAmount;
                if (cost == 0m && sale > 0m && profit != 0m && profit < sale)
                {
                    cost = sale - profit;
                }

                detailRows.Add(new SalesmanDetailRowItem
                {
                    Date = p.BookingCreatedAt != default ? p.BookingCreatedAt : p.CreatedAt,
                    DocumentNumber = p.DocumentNumber ?? $"#{p.BookingId}",
                    ServiceType = p.BookingType,
                    CustomerPax = !string.IsNullOrWhiteSpace(p.ClientName) ? p.ClientName : "—",
                    Details = "—",
                    IsClosed = p.IsFinal,
                    SaleAmount = sale,
                    CostAmount = cost,
                    ProfitAmount = profit
                });
            }

            // Sort rows by Date (oldest to newest)
            detailRows = detailRows.OrderBy(r => r.Date).ToList();

            decimal totalSales = 0m;
            decimal totalCost = 0m;
            decimal totalProfit = 0m;

            foreach (var row in detailRows)
            {
                totalSales += row.SaleAmount;
                totalCost += row.CostAmount;
                totalProfit += row.ProfitAmount;

                decimal marginPct = row.SaleAmount > 0m ? Math.Round((row.ProfitAmount / row.SaleAmount) * 100m, 1) : 0m;

                model.Table.Rows.Add(new List<string>
                {
                    row.Date.ToString("dd/MM/yyyy"),
                    row.DocumentNumber,
                    row.ServiceType.ToUpperInvariant(),
                    row.CustomerPax,
                    row.Details,
                    row.IsClosed ? "Closed" : "Open",
                    row.SaleAmount.ToString("0.000"),
                    row.CostAmount.ToString("0.000"),
                    row.ProfitAmount.ToString("0.000"),
                    row.SaleAmount > 0m ? $"{marginPct:0.0}%" : "—"
                });
            }

            if (detailRows.Count == 0)
            {
                model.Table.Rows.Add(new List<string>
                {
                    "—", "—", "—", "No service entries or profit records recorded for this period", "—", "—", "0.000", "0.000", "0.000", "—"
                });
            }

            decimal overallMarginPct = totalSales > 0m ? Math.Round((totalProfit / totalSales) * 100m, 1) : 0m;

            model.SummaryCards.Add(new DocumentSummaryCard { Label = "Salesman Name", Value = nameDisplay });
            model.SummaryCards.Add(new DocumentSummaryCard
            {
                Label = "Total Bookings",
                Value = detailRows.Count.ToString(),
                Subtext = $"{detailRows.Count(r => r.IsClosed)} Closed | {detailRows.Count(r => !r.IsClosed)} Open"
            });
            model.SummaryCards.Add(new DocumentSummaryCard
            {
                Label = "Total Sales Value",
                Value = $"{totalSales:0.000} BHD",
                HighlightColor = "#2563eb"
            });
            model.SummaryCards.Add(new DocumentSummaryCard
            {
                Label = "Approved Final Cost",
                Value = $"{totalCost:0.000} BHD",
                HighlightColor = "#d97706"
            });
            model.SummaryCards.Add(new DocumentSummaryCard
            {
                Label = "Total Final Profit",
                Value = $"{totalProfit:0.000} BHD",
                Subtext = totalSales > 0m ? $"Margin: {overallMarginPct:0.0}%" : "",
                HighlightColor = totalProfit >= 0m ? "#059669" : "#dc2626"
            });

            if (targetReport != null && targetReport.CreditToCollect > 0)
            {
                model.SummaryCards.Add(new DocumentSummaryCard
                {
                    Label = "Credit Outstanding",
                    Value = $"{targetReport.CreditToCollect:0.000} BHD",
                    HighlightColor = "#e11d48"
                });
            }

            model.Table.TotalRow = new List<string>
            {
                "TOTAL",
                $"{detailRows.Count} Entries",
                "",
                "",
                "",
                "",
                $"{totalSales:0.000} BHD",
                $"{totalCost:0.000} BHD",
                $"{totalProfit:0.000} BHD",
                totalSales > 0m ? $"{overallMarginPct:0.0}%" : "—"
            };
        }
        return model;
    }
}

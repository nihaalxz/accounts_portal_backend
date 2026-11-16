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
        "salesmen-summary", "salesman-detail"
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
        if (key is "salesmandetail" or "salesmandetails" or "salesmanbreakdown") return "salesman-detail";
        return key;
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
                    s.Email ?? "â€”",
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

            // Fetch all individual service entries made by this salesman
            var rawEntries = await _salesEntriesService.GetSalesmanServiceEntriesAsync(salesmanId, salesmanName, start, end, ct);
            var entries = rawEntries?.ToList() ?? new List<TexasAccountsPortal.Contracts.SalesEntries.SalesmanServiceEntryResponse>();

            model.Title = "INDIVIDUAL SALESMAN SERVICE REPORT";
            model.Subtitle = $"Detailed Service & Booking Entries â€” {nameDisplay}";
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

            model.Table.Columns = new List<DocumentColumn>
            {
                new() { Header = "DATE", RelativeWidth = 1.0f, Alignment = ColumnAlignment.Center, IsMonoFont = true },
                new() { Header = "DOC # / REF", RelativeWidth = 1.6f, IsMonoFont = true, IsBold = true },
                new() { Header = "SERVICE", RelativeWidth = 1.0f, IsBold = true },
                new() { Header = "CUSTOMER / PASSENGER", RelativeWidth = 2.0f },
                new() { Header = "DETAILS", RelativeWidth = 2.2f },
                new() { Header = "PAYMENT", RelativeWidth = 1.2f, Alignment = ColumnAlignment.Center },
                new() { Header = "STATUS", RelativeWidth = 1.1f, Alignment = ColumnAlignment.Center },
                new() { Header = "AMOUNT (BHD)", RelativeWidth = 1.4f, Alignment = ColumnAlignment.Right, IsBold = true }
            };

            decimal totalSales = 0m;
            foreach (var item in entries)
            {
                totalSales += item.Amount;

                string custPax = string.IsNullOrWhiteSpace(item.CustomerHead)
                    ? (item.BeneficiaryName ?? "â€”")
                    : (string.IsNullOrWhiteSpace(item.BeneficiaryName) || item.BeneficiaryName == "â€”"
                        ? item.CustomerHead
                        : item.CustomerHead + " (" + item.BeneficiaryName + ")");

                string paymentDisplay = string.IsNullOrWhiteSpace(item.PaymentStatus)
                    ? (item.PaymentMethod ?? "â€”")
                    : item.PaymentStatus.ToUpperInvariant() + (!string.IsNullOrWhiteSpace(item.PaymentMethod) ? " (" + item.PaymentMethod + ")" : "");

                model.Table.Rows.Add(new List<string>
                {
                    item.CreatedAt.ToString("dd/MM/yyyy"),
                    item.DocumentNumber ?? $"#{item.Id}",
                    item.ServiceType,
                    custPax,
                    item.Details ?? "â€”",
                    paymentDisplay,
                    item.ProcessingStatus ?? "â€”",
                    item.Amount.ToString("0.000")
                });
            }

            if (entries.Count == 0)
            {
                model.Table.Rows.Add(new List<string>
                {
                    "â€”", "â€”", "â€”", "No service entries recorded for this period", "â€”", "â€”", "â€”", "0.000"
                });
            }

            model.SummaryCards.Add(new DocumentSummaryCard { Label = "Salesman Name", Value = nameDisplay });
            model.SummaryCards.Add(new DocumentSummaryCard { Label = "Total Bookings", Value = entries.Count.ToString() });
            model.SummaryCards.Add(new DocumentSummaryCard { Label = "Total Sales Value", Value = $"{totalSales:0.000} BHD", HighlightColor = "#059669" });
            if (targetReport != null && targetReport.CreditToCollect > 0)
            {
                model.SummaryCards.Add(new DocumentSummaryCard { Label = "Credit Outstanding", Value = $"{targetReport.CreditToCollect:0.000} BHD", HighlightColor = "#d97706" });
            }

            model.Table.TotalRow = new List<string>
            {
                "TOTAL",
                $"{entries.Count} Entries",
                "",
                "",
                "",
                "",
                "",
                $"{totalSales:0.000} BHD"
            };
        }
        return model;
    }
}

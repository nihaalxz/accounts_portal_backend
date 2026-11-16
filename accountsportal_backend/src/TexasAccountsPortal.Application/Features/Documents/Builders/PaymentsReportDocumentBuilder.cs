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

public class PaymentsReportDocumentBuilder : IDocumentBuilder
{
    private readonly IAccountsDbContext _dbContext;
    private readonly DocumentOptions _options;

    private static readonly HashSet<string> SupportedTypes = new(StringComparer.OrdinalIgnoreCase)
    {
        "payments", "payment", "expenses", "expense"
    };

    public PaymentsReportDocumentBuilder(
        IAccountsDbContext dbContext,
        IOptions<DocumentOptions> options)
    {
        _dbContext = dbContext;
        _options = options.Value ?? new DocumentOptions();
    }

    private static string NormalizeType(string type)
    {
        if (string.IsNullOrWhiteSpace(type)) return string.Empty;
        var key = type.Trim().ToLowerInvariant().Replace("-", "").Replace("_", "");
        if (key is "payments" or "payment" or "expenses" or "expense" or "paymentrecords" or "paymentsexport") return "payments";
        return key;
    }

    public bool CanBuild(string category, string type)
    {
        var norm = NormalizeType(type);
        return string.Equals(category, "report", StringComparison.OrdinalIgnoreCase) && SupportedTypes.Contains(norm);
    }

    public async Task<DocumentDataModel?> BuildAsync(DocumentBuildArgs args, CancellationToken ct = default)
    {
        var q = args.QueryParams;

        var model = new DocumentDataModel
        {
            Category = "Report",
            Title = "EXPENSE PAYMENTS EXPORT REPORT",
            Subtitle = "Texas Accounts Portal — Operational Expense & Financial Payments Statement",
            PreparedBy = "Texas Accounts Portal",
            Date = BahrainTime.Now,
            Options = _options
        };

        var headersDict = await _dbContext.ExpenseHeaders.AsNoTracking().ToDictionaryAsync(h => h.Id, h => h, ct);
        var expensesQuery = _dbContext.Expenses.AsNoTracking();

        // Status Filter
        if (q.TryGetValue("status", out var statusVal) && !string.IsNullOrWhiteSpace(statusVal) && !string.Equals(statusVal, "all", StringComparison.OrdinalIgnoreCase))
        {
            model.ActiveFilters.Add(new KeyValuePair<string, string>("Status", statusVal.ToUpperInvariant()));
            if (Enum.TryParse<TexasAccountsPortal.Domain.Enums.ExpenseStatus>(statusVal, true, out var parsedStatus))
            {
                expensesQuery = expensesQuery.Where(e => e.Status == parsedStatus);
            }
        }

        // Category Bucket Filter (Asset, Liability, Income, Capital, Expenses, Contra)
        if (q.TryGetValue("category", out var catBucketVal) && !string.IsNullOrWhiteSpace(catBucketVal) && !string.Equals(catBucketVal, "all", StringComparison.OrdinalIgnoreCase))
        {
            model.ActiveFilters.Add(new KeyValuePair<string, string>("Category Bucket", catBucketVal));
            var bucketHeaderIds = headersDict.Values
                .Where(h => h.Category.Equals(catBucketVal, StringComparison.OrdinalIgnoreCase) || (catBucketVal.Equals("expenses", StringComparison.OrdinalIgnoreCase) && h.Category.Equals("expense", StringComparison.OrdinalIgnoreCase)))
                .Select(h => h.Id)
                .ToList();
            expensesQuery = expensesQuery.Where(e => bucketHeaderIds.Contains(e.ExpenseCategoryId));
        }

        // Category Name / Specific Header Filter
        if (q.TryGetValue("headerId", out var hIdVal) && !string.IsNullOrWhiteSpace(hIdVal) && !string.Equals(hIdVal, "all", StringComparison.OrdinalIgnoreCase) && long.TryParse(hIdVal, out var parsedHeaderId))
        {
            expensesQuery = expensesQuery.Where(e => e.ExpenseCategoryId == parsedHeaderId);
            if (headersDict.TryGetValue(parsedHeaderId, out var hObj))
            {
                model.ActiveFilters.Add(new KeyValuePair<string, string>("Category Name", hObj.Name));
            }
        }
        else if (q.TryGetValue("headerName", out var hNameVal) && !string.IsNullOrWhiteSpace(hNameVal) && !string.Equals(hNameVal, "all", StringComparison.OrdinalIgnoreCase))
        {
            var matchingHeaderIds = headersDict.Values.Where(h => h.Name.Equals(hNameVal, StringComparison.OrdinalIgnoreCase)).Select(h => h.Id).ToList();
            expensesQuery = expensesQuery.Where(e => matchingHeaderIds.Contains(e.ExpenseCategoryId));
            model.ActiveFilters.Add(new KeyValuePair<string, string>("Category Name", hNameVal));
        }

        // Date Range
        DateTime? start = q.TryGetValue("startDate", out var sStr) && DateTime.TryParse(sStr, out var sDt) ? sDt : null;
        DateTime? end = q.TryGetValue("endDate", out var eStr) && DateTime.TryParse(eStr, out var eDt) ? eDt : null;

        if (start.HasValue)
        {
            model.ActiveFilters.Add(new KeyValuePair<string, string>("From Date", start.Value.ToString("dd/MM/yyyy")));
            expensesQuery = expensesQuery.Where(e => e.ExpenseDate >= start.Value);
        }
        if (end.HasValue)
        {
            model.ActiveFilters.Add(new KeyValuePair<string, string>("To Date", end.Value.ToString("dd/MM/yyyy")));
            expensesQuery = expensesQuery.Where(e => e.ExpenseDate <= end.Value.AddDays(1).AddTicks(-1));
        }

        // Search Filter
        if (q.TryGetValue("searchVal", out var searchStr) && !string.IsNullOrWhiteSpace(searchStr))
        {
            string search = searchStr.Trim().ToLower();
            model.ActiveFilters.Add(new KeyValuePair<string, string>("Search", searchStr));
            expensesQuery = expensesQuery.Where(e =>
                e.ExpenseNumber.ToLower().Contains(search) ||
                e.Description.ToLower().Contains(search));
        }

        var expenses = await expensesQuery.OrderByDescending(e => e.ExpenseDate).ToListAsync(ct);

        decimal totalAmount = 0;
        decimal totalOutgoing = 0;
        decimal totalIncoming = 0;

        model.Table.Columns = new List<DocumentColumn>
        {
            new() { Header = "PAYMENT NO.", RelativeWidth = 1.2f, IsMonoFont = true },
            new() { Header = "DIRECTION", RelativeWidth = 1.2f, Alignment = ColumnAlignment.Center },
            new() { Header = "CATEGORY NAME", RelativeWidth = 2.0f, IsBold = true },
            new() { Header = "DESCRIPTION", RelativeWidth = 2.6f },
            new() { Header = "METHOD", RelativeWidth = 1.2f, Alignment = ColumnAlignment.Center },
            new() { Header = "DATE", RelativeWidth = 1.1f, Alignment = ColumnAlignment.Center },
            new() { Header = "AMOUNT (BHD)", RelativeWidth = 1.3f, Alignment = ColumnAlignment.Right, IsBold = true },
            new() { Header = "STATUS", RelativeWidth = 1.2f, Alignment = ColumnAlignment.Center }
        };

        foreach (var exp in expenses)
        {
            headersDict.TryGetValue(exp.ExpenseCategoryId, out var header);
            string catName = header != null ? $"{header.Name} ({header.Category})" : $"Category #{exp.ExpenseCategoryId}";
            string catType = (header?.Category ?? "").ToLower();
            bool isIncoming = catType == "income" || catType == "capital";

            decimal amt = exp.Amount;
            totalAmount += amt;
            if (isIncoming) totalIncoming += amt;
            else totalOutgoing += amt;

            string displayStatus = exp.Status switch
            {
                TexasAccountsPortal.Domain.Enums.ExpenseStatus.PendingApproval => "PENDING",
                TexasAccountsPortal.Domain.Enums.ExpenseStatus.Approved => "APPROVED",
                TexasAccountsPortal.Domain.Enums.ExpenseStatus.Posted => "POSTED",
                TexasAccountsPortal.Domain.Enums.ExpenseStatus.Rejected => "REJECTED",
                _ => exp.Status.ToString().ToUpperInvariant()
            };

            model.Table.Rows.Add(new List<string>
            {
                exp.DocumentNumber,
                isIncoming ? "Incoming" : "Outgoing",
                catName,
                exp.Description,
                exp.PaymentMethod.ToString(),
                exp.ExpenseDate.ToString("dd/MM/yyyy"),
                amt.ToString("0.000"),
                displayStatus
            });
        }



        model.Table.TotalRow = new List<string> { "SUMMARY", $"{expenses.Count} Items", "", "Total Operational Sum", "", "", $"{totalAmount:0.000} BHD", "" };

        return model;
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using TexasAccountsPortal.Application.Features.Documents.Models;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Domain.Common;
using TexasAccountsPortal.Domain.Entities;
using TexasAccountsPortal.Domain.Enums;

namespace TexasAccountsPortal.Application.Features.Documents.Builders;

public class PendingApprovalsReportDocumentBuilder : IDocumentBuilder
{
    private readonly IAccountsDbContext _dbContext;
    private readonly DocumentOptions _options;

    private static readonly HashSet<string> SupportedTypes = new(StringComparer.OrdinalIgnoreCase)
    {
        "pending-approvals", "pending-approval", "approvals", "approvals-summary", "approval-audit", "pending"
    };

    public PendingApprovalsReportDocumentBuilder(
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
        if (key is "pendingapprovals" or "pendingapproval" or "approvals" or "approvalssummary" or "approvalaudit" or "pending") return "pending-approvals";
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
            Title = "APPROVALS AUDIT STATEMENT",
            Subtitle = "Texas Accounts Portal — Master Accountant Review Log & Transaction Audit Trail",
            PreparedBy = "Texas Accounts Portal",
            Date = BahrainTime.Now,
            Options = _options
        };

        string statusFilter = q.TryGetValue("status", out var stVal) && !string.IsNullOrWhiteSpace(stVal) ? stVal.ToLowerInvariant() : "pending";
        DateTime? start = q.TryGetValue("startDate", out var sStr) && DateTime.TryParse(sStr, out var sDt) ? sDt : null;
        DateTime? end = q.TryGetValue("endDate", out var eStr) && DateTime.TryParse(eStr, out var eDt) ? eDt : null;
        bool approvedTodayOnly = q.TryGetValue("approvedToday", out var atStr) && (atStr == "true" || atStr == "1");

        DateTime today = BahrainTime.Now.Date;

        if (approvedTodayOnly || statusFilter == "approved_today")
        {
            model.ActiveFilters.Add(new KeyValuePair<string, string>("Status", "APPROVED TODAY"));
            start = today;
            end = today;
        }
        else if (statusFilter == "all" || statusFilter == "all_statuses")
        {
            model.ActiveFilters.Add(new KeyValuePair<string, string>("Status", "ALL STATUSES"));
        }
        else if (statusFilter == "approved" || statusFilter == "approved_all")
        {
            model.ActiveFilters.Add(new KeyValuePair<string, string>("Status", "APPROVED"));
        }
        else
        {
            model.ActiveFilters.Add(new KeyValuePair<string, string>("Status", "PENDING REVIEW"));
        }

        if (start.HasValue) model.ActiveFilters.Add(new KeyValuePair<string, string>("From Date", start.Value.ToString("dd/MM/yyyy")));
        if (end.HasValue) model.ActiveFilters.Add(new KeyValuePair<string, string>("To Date", end.Value.ToString("dd/MM/yyyy")));

        // Load reference lookup dictionaries
        var headersDict = await _dbContext.ExpenseHeaders.AsNoTracking().ToDictionaryAsync(h => h.Id, h => h, ct);
        var usersDict = await _dbContext.Users.AsNoTracking().ToDictionaryAsync(u => u.Id, u => u.Name ?? u.Email, ct);
        var banksDict = await _dbContext.Banks.AsNoTracking().ToDictionaryAsync(b => b.Id, b => b.BankName, ct);
        var accountsDict = await _dbContext.Accounts.AsNoTracking().ToDictionaryAsync(a => a.Id, a => a.Name, ct);
        var suppliersDict = await _dbContext.Suppliers.AsNoTracking().ToDictionaryAsync(s => s.Id, s => s.Name, ct);
        var agentsDict = await _dbContext.Agents.AsNoTracking().ToDictionaryAsync(a => a.Id, a => a.GetFullName(), ct);

        var auditEntries = new List<AuditRowItem>();

        // 1. PendingApprovals (Entity Registrations)
        var paQuery = _dbContext.PendingApprovals.AsNoTracking();
        if (statusFilter == "pending") paQuery = paQuery.Where(p => p.Status == "pending");
        else if (statusFilter == "approved" || statusFilter == "approved_all" || approvedTodayOnly || statusFilter == "approved_today") paQuery = paQuery.Where(p => p.Status == "approved");
        
        if (start.HasValue) paQuery = paQuery.Where(p => (p.ReviewedAt ?? p.SubmittedAt) >= start.Value);
        if (end.HasValue) paQuery = paQuery.Where(p => (p.ReviewedAt ?? p.SubmittedAt) <= end.Value.AddDays(1).AddTicks(-1));

        var paList = await paQuery.ToListAsync(ct);
        foreach (var pa in paList)
        {
            string entityType = pa.EntityType.ToUpperInvariant();
            string partyName = "N/A";
            try
            {
                using var doc = JsonDocument.Parse(pa.PayloadJson);
                var root = doc.RootElement;
                if (root.TryGetProperty("AgencyName", out var agName)) partyName = agName.GetString() ?? partyName;
                else if (root.TryGetProperty("agencyName", out var agName2)) partyName = agName2.GetString() ?? partyName;
                else if (root.TryGetProperty("Name", out var n1)) partyName = n1.GetString() ?? partyName;
                else if (root.TryGetProperty("name", out var n2)) partyName = n2.GetString() ?? partyName;
                else if (root.TryGetProperty("BankName", out var bn1)) partyName = bn1.GetString() ?? partyName;
                else if (root.TryGetProperty("bankName", out var bn2)) partyName = bn2.GetString() ?? partyName;
                else if (root.TryGetProperty("FirstName", out var fn) && root.TryGetProperty("LastName", out var ln)) partyName = $"{fn.GetString()} {ln.GetString()}".Trim();
            }
            catch {}

            auditEntries.Add(new AuditRowItem
            {
                Date = pa.ReviewedAt ?? pa.SubmittedAt,
                Category = $"{entityType} REGISTRATION",
                DocumentNo = pa.DocumentNumber ?? $"PA-{pa.Id}",
                Party = partyName,
                Amount = null,
                SubmittedBy = pa.SubmittedByName,
                Status = pa.Status.ToUpperInvariant()
            });
        }

        // 2. Expenses (Payment Vouchers)
        var expQuery = _dbContext.Expenses.AsNoTracking();
        if (statusFilter == "pending") expQuery = expQuery.Where(e => e.Status == ExpenseStatus.PendingApproval);
        else if (statusFilter == "approved" || statusFilter == "approved_all" || approvedTodayOnly || statusFilter == "approved_today") expQuery = expQuery.Where(e => e.Status == ExpenseStatus.Approved || e.Status == ExpenseStatus.Posted);

        if (start.HasValue) expQuery = expQuery.Where(e => e.ExpenseDate >= start.Value);
        if (end.HasValue) expQuery = expQuery.Where(e => e.ExpenseDate <= end.Value.AddDays(1).AddTicks(-1));

        var expList = await expQuery.ToListAsync(ct);
        foreach (var exp in expList)
        {
            headersDict.TryGetValue(exp.ExpenseCategoryId, out var header);
            string catLabel = header != null ? $"{header.Name} ({header.Category})" : $"Category #{exp.ExpenseCategoryId}";
            usersDict.TryGetValue(exp.CreatedBy, out var submitter);

            auditEntries.Add(new AuditRowItem
            {
                Date = exp.ExpenseDate,
                Category = "PAYMENT VOUCHER",
                DocumentNo = exp.ExpenseNumber,
                Party = catLabel,
                Amount = exp.Amount,
                SubmittedBy = submitter ?? $"Staff #{exp.CreatedBy}",
                Status = exp.Status.ToString().ToUpperInvariant()
            });
        }

        // 3. Transactions (Outgoing / Contra)
        var txnQuery = _dbContext.Transactions.AsNoTracking().Where(t => t.TransactionType == FinancialTransactionType.Outgoing || t.TransactionType == FinancialTransactionType.Contra);
        if (statusFilter == "pending") txnQuery = txnQuery.Where(t => t.Status == FinancialTransactionStatus.Pending);
        else if (statusFilter == "approved" || statusFilter == "approved_all" || approvedTodayOnly || statusFilter == "approved_today") txnQuery = txnQuery.Where(t => t.Status == FinancialTransactionStatus.Approved);

        if (start.HasValue) txnQuery = txnQuery.Where(t => t.CreatedAt >= start.Value);
        if (end.HasValue) txnQuery = txnQuery.Where(t => t.CreatedAt <= end.Value.AddDays(1).AddTicks(-1));

        var txnList = await txnQuery.ToListAsync(ct);
        foreach (var txn in txnList)
        {
            string channel = txn.SourceBankId.HasValue && banksDict.TryGetValue(txn.SourceBankId.Value, out var bn) ? bn : (txn.SourceAccountId.HasValue && accountsDict.TryGetValue(txn.SourceAccountId.Value, out var an) ? an : txn.PaymentMethod.ToString());
            usersDict.TryGetValue(txn.CreatedBy, out var submitter);

            auditEntries.Add(new AuditRowItem
            {
                Date = txn.CreatedAt,
                Category = $"{txn.TransactionType.ToString().ToUpperInvariant()} TRANSACTION",
                DocumentNo = txn.DocumentNumber ?? $"TXN-{txn.Id}",
                Party = channel,
                Amount = txn.Amount,
                SubmittedBy = submitter ?? $"Staff #{txn.CreatedBy}",
                Status = txn.Status.ToString().ToUpperInvariant()
            });
        }

        // 4. Journals (Party Transfers)
        var jrnQuery = _dbContext.Journals.AsNoTracking();
        if (statusFilter == "pending") jrnQuery = jrnQuery.Where(j => j.Status == FinancialTransactionStatus.Pending);
        else if (statusFilter == "approved" || statusFilter == "approved_all" || approvedTodayOnly || statusFilter == "approved_today") jrnQuery = jrnQuery.Where(j => j.Status == FinancialTransactionStatus.Approved);

        if (start.HasValue) jrnQuery = jrnQuery.Where(j => (j.ApprovedAt ?? j.CreatedAt) >= start.Value);
        if (end.HasValue) jrnQuery = jrnQuery.Where(j => (j.ApprovedAt ?? j.CreatedAt) <= end.Value.AddDays(1).AddTicks(-1));

        var jrnList = await jrnQuery.ToListAsync(ct);
        foreach (var jrn in jrnList)
        {
            string debitName = jrn.DebitPartyType == "agent" && agentsDict.TryGetValue(jrn.DebitPartyId, out var da) ? da : (jrn.DebitPartyType == "supplier" && suppliersDict.TryGetValue(jrn.DebitPartyId, out var ds) ? ds : $"{jrn.DebitPartyType} #{jrn.DebitPartyId}");
            string creditName = jrn.CreditPartyType == "agent" && agentsDict.TryGetValue(jrn.CreditPartyId, out var ca) ? ca : (jrn.CreditPartyType == "supplier" && suppliersDict.TryGetValue(jrn.CreditPartyId, out var cs) ? cs : $"{jrn.CreditPartyType} #{jrn.CreditPartyId}");
            string submitter = jrn.CreatedBy.HasValue && usersDict.TryGetValue(jrn.CreatedBy.Value, out var uName) ? uName : "System Staff";

            auditEntries.Add(new AuditRowItem
            {
                Date = jrn.ApprovedAt ?? jrn.CreatedAt,
                Category = "PARTY TRANSFER JOURNAL",
                DocumentNo = jrn.JournalNumber,
                Party = $"{debitName} → {creditName}",
                Amount = jrn.Amount,
                SubmittedBy = submitter,
                Status = jrn.Status.ToString().ToUpperInvariant()
            });
        }

        // 5. Purchase Returns
        var prQuery = _dbContext.PurchaseReturns.AsNoTracking();
        if (statusFilter == "pending") prQuery = prQuery.Where(p => p.Status == FinancialTransactionStatus.Pending);
        else if (statusFilter == "approved" || statusFilter == "approved_all" || approvedTodayOnly || statusFilter == "approved_today") prQuery = prQuery.Where(p => p.Status == FinancialTransactionStatus.Approved);

        if (start.HasValue) prQuery = prQuery.Where(p => (p.ApprovedAt ?? p.RequestedAt) >= start.Value);
        if (end.HasValue) prQuery = prQuery.Where(p => (p.ApprovedAt ?? p.RequestedAt) <= end.Value.AddDays(1).AddTicks(-1));

        var prList = await prQuery.ToListAsync(ct);
        foreach (var pr in prList)
        {
            suppliersDict.TryGetValue(pr.SupplierId, out var supName);
            usersDict.TryGetValue(pr.RequestedByUserId, out var submitter);

            auditEntries.Add(new AuditRowItem
            {
                Date = pr.ApprovedAt ?? pr.RequestedAt,
                Category = "PURCHASE RETURN",
                DocumentNo = pr.DocumentNumber ?? $"PR-{pr.Id}",
                Party = supName ?? $"Supplier #{pr.SupplierId}",
                Amount = pr.Amount,
                SubmittedBy = submitter ?? $"Staff #{pr.RequestedByUserId}",
                Status = pr.Status.ToString().ToUpperInvariant()
            });
        }

        // 6. Sales Returns
        var srQuery = _dbContext.SalesReturns.AsNoTracking();
        if (statusFilter == "pending") srQuery = srQuery.Where(s => s.Status == FinancialTransactionStatus.Pending);
        else if (statusFilter == "approved" || statusFilter == "approved_all" || approvedTodayOnly || statusFilter == "approved_today") srQuery = srQuery.Where(s => s.Status == FinancialTransactionStatus.Approved);

        if (start.HasValue) srQuery = srQuery.Where(s => (s.ApprovedAt ?? s.RequestedAt) >= start.Value);
        if (end.HasValue) srQuery = srQuery.Where(s => (s.ApprovedAt ?? s.RequestedAt) <= end.Value.AddDays(1).AddTicks(-1));

        var srList = await srQuery.ToListAsync(ct);
        foreach (var sr in srList)
        {
            usersDict.TryGetValue(sr.RequestedByUserId, out var submitter);

            auditEntries.Add(new AuditRowItem
            {
                Date = sr.ApprovedAt ?? sr.RequestedAt,
                Category = "SALES RETURN",
                DocumentNo = sr.DocumentNumber ?? $"SR-{sr.Id}",
                Party = $"{sr.RecipientType} #{sr.RecipientId}",
                Amount = sr.Amount,
                SubmittedBy = submitter ?? $"Staff #{sr.RequestedByUserId}",
                Status = sr.Status.ToString().ToUpperInvariant()
            });
        }

        // Sort descending by date
        var sortedEntries = auditEntries.OrderByDescending(e => e.Date).ToList();

        decimal totalFinancialAmount = sortedEntries.Where(e => e.Amount.HasValue).Sum(e => e.Amount!.Value);

        // Table Definition
        model.Table.Columns = new List<DocumentColumn>
        {
            new() { Header = "DATE", RelativeWidth = 1.1f, Alignment = ColumnAlignment.Center },
            new() { Header = "CATEGORY / TYPE", RelativeWidth = 1.8f, IsBold = true },
            new() { Header = "REF / DOC #", RelativeWidth = 1.4f, IsMonoFont = true },
            new() { Header = "PARTY / BENEFICIARY", RelativeWidth = 2.4f },
            new() { Header = "AMOUNT (BHD)", RelativeWidth = 1.3f, Alignment = ColumnAlignment.Right, IsBold = true },
            new() { Header = "SUBMITTED BY", RelativeWidth = 1.5f },
            new() { Header = "STATUS", RelativeWidth = 1.5f, Alignment = ColumnAlignment.Center }
        };

        foreach (var entry in sortedEntries)
        {
            string displayStatus = entry.Status switch
            {
                "PENDINGAPPROVAL" => "PENDING",
                "PENDING" => "PENDING",
                "APPROVED" => "APPROVED",
                "POSTED" => "POSTED",
                "REJECTED" => "REJECTED",
                _ => entry.Status
            };

            model.Table.Rows.Add(new List<string>
            {
                entry.Date.ToString("dd/MM/yyyy HH:mm"),
                entry.Category,
                entry.DocumentNo,
                entry.Party,
                entry.Amount.HasValue ? entry.Amount.Value.ToString("0.000") : "—",
                entry.SubmittedBy,
                displayStatus
            });
        }

        model.Table.TotalRow = new List<string>
        {
            "SUMMARY",
            $"{sortedEntries.Count} Record(s)",
            "Total Movements",
            "—",
            $"{totalFinancialAmount:0.000}",
            "—",
            "—"
        };

        return model;
    }

    private class AuditRowItem
    {
        public DateTime Date { get; set; }
        public string Category { get; set; } = string.Empty;
        public string DocumentNo { get; set; } = string.Empty;
        public string Party { get; set; } = string.Empty;
        public decimal? Amount { get; set; }
        public string SubmittedBy { get; set; } = string.Empty;
        public string Status { get; set; } = string.Empty;
    }
}

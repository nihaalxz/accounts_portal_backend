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
using TexasAccountsPortal.Domain.Entities;
using TexasAccountsPortal.Domain.Enums;
using TexasAccountsPortal.Domain.Services;

namespace TexasAccountsPortal.Application.Features.Documents.Builders;

public class TransactionsReportDocumentBuilder : IDocumentBuilder
{
    private readonly IAccountsDbContext _dbContext;
    private readonly DocumentOptions _options;

    private static readonly HashSet<string> SupportedTypes = new(StringComparer.OrdinalIgnoreCase)
    {
        "transactions", "transaction", "financial-transactions", "txns", "returns"
    };

    public TransactionsReportDocumentBuilder(
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
        if (key is "transactions" or "transaction" or "financialtransactions" or "financialtransaction" or "txns" or "txn" or "returns" or "return") return "transactions";
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
            Title = "FINANCIAL TRANSACTIONS AUDIT STATEMENT",
            Subtitle = "Texas Accounts Portal — Complete Treasury, Bank, Cash & Operational Transaction Log",
            PreparedBy = "Texas Accounts Portal",
            Date = BahrainTime.Now,
            Options = _options
        };

        var query = _dbContext.Transactions.AsNoTracking();

        // 1. Status Filter
        if (q.TryGetValue("status", out var statusVal) && !string.IsNullOrWhiteSpace(statusVal) && !string.Equals(statusVal, "all", StringComparison.OrdinalIgnoreCase))
        {
            model.ActiveFilters.Add(new KeyValuePair<string, string>("Status", statusVal.ToUpperInvariant()));
            if (Enum.TryParse<FinancialTransactionStatus>(statusVal, true, out var parsedStatus))
            {
                query = query.Where(t => t.Status == parsedStatus);
            }
        }

        // 2. Transaction Type Filter
        if (q.TryGetValue("type", out var typeVal) && !string.IsNullOrWhiteSpace(typeVal) && !string.Equals(typeVal, "all", StringComparison.OrdinalIgnoreCase))
        {
            if (string.Equals(typeVal, "returns", StringComparison.OrdinalIgnoreCase) ||
                string.Equals(typeVal, "all-returns", StringComparison.OrdinalIgnoreCase) ||
                string.Equals(typeVal, "returns-all", StringComparison.OrdinalIgnoreCase))
            {
                model.ActiveFilters.Add(new KeyValuePair<string, string>("Type", "PURCHASE & SALES RETURNS"));
                query = query.Where(t => t.TransactionType == FinancialTransactionType.PurchaseReturn || t.TransactionType == FinancialTransactionType.SalesReturn);
            }
            else if (string.Equals(typeVal, "receipt", StringComparison.OrdinalIgnoreCase) ||
                     string.Equals(typeVal, "receipts", StringComparison.OrdinalIgnoreCase))
            {
                model.ActiveFilters.Add(new KeyValuePair<string, string>("Type", "RECEIPTS"));
                query = query.Where(t =>
                    t.ReferenceType == TransactionReferenceType.Receipt ||
                    t.ReceiptOrigin != null ||
                    (t.ReferenceId != null && (t.ReferenceId.StartsWith("RCP") || t.ReferenceId.StartsWith("TXSRCP") || t.ReferenceId.StartsWith("CRCPT") || t.ReferenceId.StartsWith("TEST-RCPT"))) ||
                    (t.Description != null && (t.Description.Contains("Receipt") || t.Description.Contains("receipt")))
                );
            }
            else
            {
                model.ActiveFilters.Add(new KeyValuePair<string, string>("Type", typeVal.ToUpperInvariant()));
                if (Enum.TryParse<FinancialTransactionType>(typeVal, true, out var parsedType))
                {
                    query = query.Where(t => t.TransactionType == parsedType);
                }
            }
        }

        // 3. Reference Type Filter
        if (q.TryGetValue("referenceType", out var refTypeVal) && !string.IsNullOrWhiteSpace(refTypeVal) && !string.Equals(refTypeVal, "all", StringComparison.OrdinalIgnoreCase))
        {
            model.ActiveFilters.Add(new KeyValuePair<string, string>("Service / Ref Type", refTypeVal));
            if (TransactionReferenceTypeParser.TryParse(refTypeVal, out var parsedRefType))
            {
                if (parsedRefType == TransactionReferenceType.Receipt)
                {
                    query = query.Where(t =>
                        t.ReferenceType == TransactionReferenceType.Receipt ||
                        t.ReceiptOrigin != null ||
                        (t.ReferenceId != null && (t.ReferenceId.StartsWith("RCP") || t.ReferenceId.StartsWith("TXSRCP") || t.ReferenceId.StartsWith("CRCPT") || t.ReferenceId.StartsWith("TEST-RCPT"))) ||
                        (t.Description != null && (t.Description.Contains("Receipt") || t.Description.Contains("receipt")))
                    );
                }
                else
                {
                    query = query.Where(t => t.ReferenceType == parsedRefType);
                }
            }
        }

        // 4. Reference ID Filter
        if (q.TryGetValue("referenceId", out var refIdVal) && !string.IsNullOrWhiteSpace(refIdVal))
        {
            model.ActiveFilters.Add(new KeyValuePair<string, string>("Reference ID", refIdVal));
            query = query.Where(t => t.ReferenceId == refIdVal.Trim());
        }

        // 5. Bank / Account Filter
        if (q.TryGetValue("bankId", out var bIdStr) && long.TryParse(bIdStr, out var bankId) && bankId > 0)
        {
            var bank = await _dbContext.Banks.AsNoTracking().FirstOrDefaultAsync(b => b.Id == bankId, ct);
            model.ActiveFilters.Add(new KeyValuePair<string, string>("Bank", bank?.BankName ?? $"Bank #{bankId}"));
            query = query.Where(t => t.SourceBankId == bankId || t.DestinationBankId == bankId);
        }

        if (q.TryGetValue("accountId", out var aIdStr) && long.TryParse(aIdStr, out var accountId) && accountId > 0)
        {
            var acc = await _dbContext.Accounts.AsNoTracking().FirstOrDefaultAsync(a => a.Id == accountId, ct);
            model.ActiveFilters.Add(new KeyValuePair<string, string>("Cash Drawer", acc?.Name ?? $"Account #{accountId}"));
            query = query.Where(t => t.SourceAccountId == accountId || t.DestinationAccountId == accountId);
        }

        // 6. Date Range Filter (Bahrain Time AST day boundaries)
        DateTime? start = null;
        if (q.TryGetValue("startDate", out var sStr) && DateTime.TryParse(sStr, out var sDt)) start = sDt;
        else if (q.TryGetValue("from", out var fromStr) && DateTime.TryParse(fromStr, out var fromDt)) start = fromDt;

        DateTime? end = null;
        if (q.TryGetValue("endDate", out var eStr) && DateTime.TryParse(eStr, out var eDt)) end = eDt;
        else if (q.TryGetValue("to", out var toStr) && DateTime.TryParse(toStr, out var toDt)) end = toDt;

        var (startUtc, endUtc) = BahrainTime.GetUtcRange(start, end);

        if (startUtc.HasValue)
        {
            model.ActiveFilters.Add(new KeyValuePair<string, string>("From Date", start!.Value.ToString("dd/MM/yyyy")));
            query = query.Where(t => t.CreatedAt >= startUtc.Value);
        }
        if (endUtc.HasValue)
        {
            model.ActiveFilters.Add(new KeyValuePair<string, string>("To Date", end!.Value.ToString("dd/MM/yyyy")));
            query = query.Where(t => t.CreatedAt <= endUtc.Value);
        }

        // 7. Search Filter
        if ((q.TryGetValue("search", out var searchVal) || q.TryGetValue("searchVal", out searchVal)) && !string.IsNullOrWhiteSpace(searchVal))
        {
            var s = searchVal.Trim();
            model.ActiveFilters.Add(new KeyValuePair<string, string>("Search Term", s));

            long? extractedId = null;
            if (long.TryParse(s, out var directId))
            {
                extractedId = directId;
            }
            else if (s.StartsWith("TXSTRN", StringComparison.OrdinalIgnoreCase))
            {
                var numPart = s.Substring(6).TrimStart('0', '-');
                if (long.TryParse(numPart, out var parsedDocId))
                {
                    extractedId = parsedDocId;
                }
            }

            var matchingUserIds = await _dbContext.Users.AsNoTracking()
                .Where(u => EF.Functions.Like(u.Name, $"%{s}%"))
                .Select(u => u.Id)
                .ToListAsync(ct);

            var matchingBankIds = await _dbContext.Banks.AsNoTracking()
                .Where(b => EF.Functions.Like(b.BankName, $"%{s}%"))
                .Select(b => b.Id)
                .ToListAsync(ct);

            var matchingAccountIds = await _dbContext.Accounts.AsNoTracking()
                .Where(a => EF.Functions.Like(a.Name, $"%{s}%"))
                .Select(a => a.Id)
                .ToListAsync(ct);

            query = query.Where(t =>
                (extractedId.HasValue && t.Id == extractedId.Value) ||
                (t.DocumentNumber != null && EF.Functions.Like(t.DocumentNumber, $"%{s}%")) ||
                (t.ReferenceId != null && EF.Functions.Like(t.ReferenceId, $"%{s}%")) ||
                (t.Description != null && EF.Functions.Like(t.Description, $"%{s}%")) ||
                (t.SupplierName != null && EF.Functions.Like(t.SupplierName, $"%{s}%")) ||
                (t.CreatedBy > 0 && matchingUserIds.Contains(t.CreatedBy)) ||
                (t.ApprovedBy.HasValue && matchingUserIds.Contains(t.ApprovedBy.Value)) ||
                (t.SourceBankId.HasValue && matchingBankIds.Contains(t.SourceBankId.Value)) ||
                (t.DestinationBankId.HasValue && matchingBankIds.Contains(t.DestinationBankId.Value)) ||
                (t.SourceAccountId.HasValue && matchingAccountIds.Contains(t.SourceAccountId.Value)) ||
                (t.DestinationAccountId.HasValue && matchingAccountIds.Contains(t.DestinationAccountId.Value))
            );
        }

        int maxRows = q.TryGetValue("limit", out var limitStr) && int.TryParse(limitStr, out var limitVal) ? Math.Clamp(limitVal, 1, 1000) : 500;

        var rawTransactions = await query
            .OrderByDescending(t => t.CreatedAt)
            .Take(maxRows)
            .ToListAsync(ct);

        // Fast Batch Cache resolution from local DB
        var bankIds = rawTransactions.Select(t => t.SourceBankId).Concat(rawTransactions.Select(t => t.DestinationBankId)).Where(id => id.HasValue).Select(id => id!.Value).Distinct().ToList();
        var accountIds = rawTransactions.Select(t => t.SourceAccountId).Concat(rawTransactions.Select(t => t.DestinationAccountId)).Where(id => id.HasValue).Select(id => id!.Value).Distinct().ToList();
        var supplierIds = rawTransactions.Where(t => t.SupplierId.HasValue).Select(t => t.SupplierId!.Value).Distinct().ToList();
        var agentIds = rawTransactions.Where(t => t.RecipientType == RecipientType.Agent && t.RecipientId.HasValue).Select(t => t.RecipientId!.Value).Distinct().ToList();

        var banksDict = bankIds.Any() ? await _dbContext.Banks.AsNoTracking().Where(b => bankIds.Contains(b.Id)).ToDictionaryAsync(b => b.Id, b => b.BankName, ct) : new();
        var accountsDict = accountIds.Any() ? await _dbContext.Accounts.AsNoTracking().Where(a => accountIds.Contains(a.Id)).ToDictionaryAsync(a => a.Id, a => a.Name, ct) : new();
        var suppliersDict = supplierIds.Any() ? await _dbContext.Suppliers.AsNoTracking().Where(s => supplierIds.Contains(s.Id)).ToDictionaryAsync(s => s.Id, s => s.Name, ct) : new();
        var agentsDict = agentIds.Any() ? await _dbContext.Agents.AsNoTracking().Where(a => agentIds.Contains(a.Id)).ToDictionaryAsync(a => a.Id, a => $"{a.FirstName} {a.LastName}".Trim(), ct) : new();

        decimal totalInflow = 0;
        decimal totalOutflow = 0;

        model.Table.Columns = new List<DocumentColumn>
        {
            new() { Header = "DOC NO.", RelativeWidth = 1.2f, IsMonoFont = true },
            new() { Header = "DATE", RelativeWidth = 0.9f, Alignment = ColumnAlignment.Center },
            new() { Header = "TYPE", RelativeWidth = 0.9f, Alignment = ColumnAlignment.Center, IsBold = true },
            new() { Header = "NARRATIVE & REFERENCE", RelativeWidth = 2.8f },
            new() { Header = "CHANNEL / ACCOUNT", RelativeWidth = 1.8f },
            new() { Header = "AMOUNT (BHD)", RelativeWidth = 1.2f, Alignment = ColumnAlignment.Right, IsBold = true },
            new() { Header = "STATUS", RelativeWidth = 1.0f, Alignment = ColumnAlignment.Center }
        };

        foreach (var t in rawTransactions)
        {
            bool isIncoming = t.TransactionType == FinancialTransactionType.Incoming || t.TransactionType == FinancialTransactionType.PurchaseReturn;
            bool isOutgoing = t.TransactionType == FinancialTransactionType.Outgoing || t.TransactionType == FinancialTransactionType.SalesReturn;

            if (isIncoming) totalInflow += t.Amount;
            else if (isOutgoing) totalOutflow += t.Amount;

            var channelParts = new List<string>();

            // Source
            if (t.SourceBankId.HasValue && banksDict.TryGetValue(t.SourceBankId.Value, out var srcBank)) channelParts.Add($"From: {srcBank}");
            else if (t.SourceAccountId.HasValue && accountsDict.TryGetValue(t.SourceAccountId.Value, out var srcAcc)) channelParts.Add($"From: {srcAcc}");
            else if (t.SupplierId.HasValue && suppliersDict.TryGetValue(t.SupplierId.Value, out var srcSup)) channelParts.Add($"From: {srcSup}");
            else if (t.RecipientType == RecipientType.Agent && t.RecipientId.HasValue && agentsDict.TryGetValue(t.RecipientId.Value, out var srcAgent)) channelParts.Add($"From: {srcAgent}");

            // Destination
            if (t.DestinationBankId.HasValue && banksDict.TryGetValue(t.DestinationBankId.Value, out var dstBank)) channelParts.Add($"To: {dstBank}");
            else if (t.DestinationAccountId.HasValue && accountsDict.TryGetValue(t.DestinationAccountId.Value, out var dstAcc)) channelParts.Add($"To: {dstAcc}");
            else if (t.RecipientType == RecipientType.Agent && t.RecipientId.HasValue && agentsDict.TryGetValue(t.RecipientId.Value, out var dstAgent)) channelParts.Add($"To: {dstAgent}");

            if (!channelParts.Any())
            {
                channelParts.Add(!string.IsNullOrWhiteSpace(t.SupplierName) ? t.SupplierName : t.PaymentMethod.ToString());
            }

            var narrative = !string.IsNullOrWhiteSpace(t.Description) ? t.Description : "-";
            if (!string.IsNullOrWhiteSpace(t.ReferenceId) && !narrative.Contains(t.ReferenceId, StringComparison.OrdinalIgnoreCase))
            {
                var refPrefix = t.ReferenceType.HasValue ? t.ReferenceType.Value.ToString() : "Ref";
                narrative = $"{narrative} [{refPrefix}: {t.ReferenceId}]";
            }

            // Display date formatted in Bahrain time
            var bahrainCreatedAt = BahrainTime.ToBahrainTime(t.CreatedAt);

            model.Table.Rows.Add(new List<string>
            {
                t.DocumentNumber ?? ($"TXSTRN-{t.Id:D6}"),
                bahrainCreatedAt.ToString("dd/MM/yyyy"),
                t.TransactionType.ToString().ToUpperInvariant(),
                narrative,
                string.Join(" \u2192 ", channelParts),
                t.Amount.ToString("0.000"),
                t.Status.ToString().ToUpperInvariant()
            });
        }

        decimal netMovement = totalInflow - totalOutflow;

        model.Table.TotalRow = new List<string>
        {
            "SUMMARY",
            $"{rawTransactions.Count} Records",
            "",
            $"Inflow: {totalInflow:0.000} | Outflow: {totalOutflow:0.000}",
            "",
            $"Net: {netMovement:0.000} BHD",
            ""
        };

        return model;
    }
}

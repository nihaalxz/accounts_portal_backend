using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using TexasAccountsPortal.Application.Features.Documents.Models;
using TexasAccountsPortal.Application.Features.Documents.Services;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Domain.Common;

namespace TexasAccountsPortal.Application.Features.Documents.Builders;

public class AccountsReceiptDocumentBuilder : IDocumentBuilder
{
    private readonly IAccountsDbContext _dbContext;
    private readonly DocumentOptions _options;

    private static readonly HashSet<string> SupportedTypes = new(StringComparer.OrdinalIgnoreCase)
    {
        "accounts-receipt", "accountsreceipt", "accounts-receipts", "accountsreceipts", "receipt", "receipts"
    };

    public AccountsReceiptDocumentBuilder(
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
        if (key is "accountsreceipt" or "accountsreceipts" or "accountreceipt" or "accountreceipts" or "receipt" or "receipts") return "accounts-receipt";
        return key;
    }

    public bool CanBuild(string category, string type)
    {
        var norm = NormalizeType(type);
        if (norm != "accounts-receipt") return false;

        var cat = (category ?? string.Empty).Trim().ToLowerInvariant();
        return cat is "receipt" or "invoice" or "voucher" or "list" or "report";
    }

    public async Task<DocumentDataModel?> BuildAsync(DocumentBuildArgs args, CancellationToken ct = default)
    {
        // ---------------------------------------------------------------------
        // Case 1: Individual Receipt Voucher
        // ---------------------------------------------------------------------
        if (args.EntityId.HasValue || string.Equals(args.Category, "receipt", StringComparison.OrdinalIgnoreCase) || string.Equals(args.Category, "voucher", StringComparison.OrdinalIgnoreCase))
        {
            long receiptId = args.EntityId ?? 0;
            var receipt = await _dbContext.AccountsReceipts
                .AsNoTracking()
                .FirstOrDefaultAsync(r => r.Id == receiptId, ct);

            if (receipt == null && receiptId == 0 && args.QueryParams.TryGetValue("id", out var idStr) && long.TryParse(idStr, out var parsedId))
            {
                receipt = await _dbContext.AccountsReceipts
                    .AsNoTracking()
                    .FirstOrDefaultAsync(r => r.Id == parsedId, ct);
            }

            if (receipt == null) return null;

            string destName = "General Account";
            if (receipt.DestinationAccountId.HasValue)
            {
                var acc = await _dbContext.Accounts.AsNoTracking().FirstOrDefaultAsync(a => a.Id == receipt.DestinationAccountId.Value, ct);
                if (acc != null) destName = $"{acc.Name} (Cash Drawer)";
            }
            else if (receipt.DestinationBankId.HasValue)
            {
                var bank = await _dbContext.Banks.AsNoTracking().FirstOrDefaultAsync(b => b.Id == receipt.DestinationBankId.Value, ct);
                if (bank != null) destName = $"{bank.BankName} (Bank Account)";
            }

            string paymentMode = receipt.DestinationType == "bank" ? "Bank Transfer" : "Cash";

            string preparedBy = "Accounts Department";
            if (receipt.CreatedByUserId > 0)
            {
                var user = await _dbContext.Users.AsNoTracking().FirstOrDefaultAsync(u => u.Id == receipt.CreatedByUserId, ct);
                if (user != null && !string.IsNullOrWhiteSpace(user.Name)) preparedBy = user.Name;
            }

            var model = new DocumentDataModel
            {
                Category = "Receipt",
                Title = "RECEIPT",
                Subtitle = "PAYMENT RECEIPT VOUCHER",
                DocumentNo = receipt.ReceiptNumber,
                Date = BahrainTime.ToBahrainTime(receipt.CreatedAt),
                CustomerName = !string.IsNullOrWhiteSpace(receipt.ReferenceId) ? $"Reference: {receipt.ReferenceId}" : "Receipt Collection",
                ClientType = "General Collection",
                RemarksNote = receipt.Narration ?? "Payment Receipt Collection",
                PreparedBy = preparedBy,
                AccountantName = "Master Accountant",
                AmountInWords = NumberToWordsConverter.ToBhdWords(receipt.Amount),
                Options = _options,
                MetaData = new List<KeyValuePair<string, string>>
                {
                    new("Receipt No", receipt.ReceiptNumber),
                    new("Reference", receipt.ReferenceId ?? "—"),
                    new("Deposit Target", destName),
                    new("Payment Method", paymentMode),
                    new("Date", BahrainTime.ToBahrainTime(receipt.CreatedAt).ToString("dd/MM/yyyy HH:mm")),
                    new("Status", receipt.Status.ToUpperInvariant())
                },
                Table = new DocumentTable
                {
                    Columns = new List<DocumentColumn>
                    {
                        new() { Header = "S NO.", RelativeWidth = 0.6f, Alignment = ColumnAlignment.Center },
                        new() { Header = "DESCRIPTION / NARRATION", RelativeWidth = 3.8f, Alignment = ColumnAlignment.Left },
                        new() { Header = "DESTINATION ACCOUNT", RelativeWidth = 2.4f, Alignment = ColumnAlignment.Left },
                        new() { Header = "PAYMENT METHOD", RelativeWidth = 1.6f, Alignment = ColumnAlignment.Center },
                        new() { Header = "AMOUNT (BHD)", RelativeWidth = 1.6f, Alignment = ColumnAlignment.Right, IsBold = true }
                    },
                    Rows = new List<List<string>>
                    {
                        new()
                        {
                            "1",
                            receipt.Narration ?? "Receipt collection deposited to account",
                            destName,
                            paymentMode,
                            receipt.Amount.ToString("0.000")
                        }
                    }
                },
                Totals = new DocumentTotals
                {
                    SubTotal = receipt.Amount,
                    NetTotal = receipt.Amount,
                    NetTotalLabel = "Total Received",
                    Currency = "BHD"
                }
            };

            return model;
        }

        // ---------------------------------------------------------------------
        // Case 2: Accounts Portal Receipts List Report
        // ---------------------------------------------------------------------
        var q = args.QueryParams;
        var listModel = new DocumentDataModel
        {
            Category = "Report",
            Title = "ACCOUNTS PORTAL RECEIPTS REPORT",
            Subtitle = "Texas Accounts Portal — Direct Cash Drawer & Bank Deposit Receipts",
            PreparedBy = "Texas Accounts Portal",
            Date = BahrainTime.Now,
            Options = _options
        };

        var query = _dbContext.AccountsReceipts.AsNoTracking();

        DateTime? startDate = null;
        DateTime? endDate = null;
        if (q.TryGetValue("startDate", out var sDate) && DateTime.TryParse(sDate, out var sParsed)) startDate = sParsed;
        if (q.TryGetValue("endDate", out var eDate) && DateTime.TryParse(eDate, out var eParsed)) endDate = eParsed;

        var (startUtc, endUtc) = BahrainTime.GetUtcRange(startDate, endDate);
        if (startUtc.HasValue) query = query.Where(t => t.CreatedAt >= startUtc.Value);
        if (endUtc.HasValue) query = query.Where(t => t.CreatedAt <= endUtc.Value);

        if (q.TryGetValue("search", out var searchVal) && !string.IsNullOrWhiteSpace(searchVal))
        {
            var s = searchVal.Trim();
            listModel.ActiveFilters.Add(new KeyValuePair<string, string>("Search", s));
            query = query.Where(t => EF.Functions.Like(t.ReceiptNumber, $"%{s}%") ||
                                     EF.Functions.Like(t.ReferenceId, $"%{s}%") ||
                                     (t.Narration != null && EF.Functions.Like(t.Narration, $"%{s}%")));
        }

        if (startDate.HasValue) listModel.ActiveFilters.Add(new KeyValuePair<string, string>("Start Date", startDate.Value.ToString("dd/MM/yyyy")));
        if (endDate.HasValue) listModel.ActiveFilters.Add(new KeyValuePair<string, string>("End Date", endDate.Value.ToString("dd/MM/yyyy")));

        var items = await query.OrderByDescending(r => r.CreatedAt).Take(1000).ToListAsync(ct);

        var accIds = items.Where(x => x.DestinationAccountId.HasValue).Select(x => x.DestinationAccountId!.Value).Distinct().ToList();
        var bankIds = items.Where(x => x.DestinationBankId.HasValue).Select(x => x.DestinationBankId!.Value).Distinct().ToList();

        var accountsMap = accIds.Any()
            ? await _dbContext.Accounts.AsNoTracking().Where(a => accIds.Contains(a.Id)).ToDictionaryAsync(a => a.Id, a => a.Name, ct)
            : new Dictionary<long, string>();

        var banksMap = bankIds.Any()
            ? await _dbContext.Banks.AsNoTracking().Where(b => bankIds.Contains(b.Id)).ToDictionaryAsync(b => b.Id, b => b.BankName, ct)
            : new Dictionary<long, string>();

        decimal totalAmount = items.Sum(r => r.Amount);

        listModel.SummaryCards.Add(new DocumentSummaryCard { Label = "Total Receipts", Value = items.Count.ToString() });
        listModel.SummaryCards.Add(new DocumentSummaryCard { Label = "Total Collected", Value = $"{totalAmount:0.000} BHD", HighlightColor = "#059669" });

        listModel.Table.Columns = new List<DocumentColumn>
        {
            new() { Header = "RECEIPT REF / DOC", RelativeWidth = 2.2f, IsMonoFont = true },
            new() { Header = "DESTINATION ACCOUNT", RelativeWidth = 2.0f, IsBold = true },
            new() { Header = "METHOD", RelativeWidth = 1.0f, Alignment = ColumnAlignment.Center },
            new() { Header = "NARRATION / DESCRIPTION", RelativeWidth = 2.8f },
            new() { Header = "DATE", RelativeWidth = 1.0f, Alignment = ColumnAlignment.Center },
            new() { Header = "AMOUNT (BHD)", RelativeWidth = 1.2f, Alignment = ColumnAlignment.Right, IsBold = true }
        };

        foreach (var r in items)
        {
            string accName = r.DestinationAccountId.HasValue && accountsMap.TryGetValue(r.DestinationAccountId.Value, out var aName)
                ? aName
                : (r.DestinationBankId.HasValue && banksMap.TryGetValue(r.DestinationBankId.Value, out var bName) ? bName : "General Account");

            listModel.Table.Rows.Add(new List<string>
            {
                !string.IsNullOrWhiteSpace(r.ReferenceId) ? $"{r.ReferenceId} ({r.ReceiptNumber})" : r.ReceiptNumber,
                accName,
                r.DestinationType == "bank" ? "Bank" : "Cash",
                r.Narration ?? "Receipt Collection",
                BahrainTime.ToBahrainTime(r.CreatedAt).ToString("dd/MM/yyyy"),
                r.Amount.ToString("0.000")
            });
        }

        listModel.Table.TotalRow = new List<string> { "TOTAL", $"{items.Count} Record(s)", "", "", "", $"{totalAmount:0.000} BHD" };
        return listModel;
    }
}
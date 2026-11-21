using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using TexasAccountsPortal.Application.Features.Documents.Models;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Domain.Entities;
using TexasAccountsPortal.Domain.Enums;

namespace TexasAccountsPortal.Application.Features.Documents.Builders;

public class AccountReportDocumentBuilder : IDocumentBuilder
{
    private static readonly ConcurrentDictionary<long, string> ExternalHeadsCache = new();

    private readonly IAccountsDbContext _dbContext;
    private readonly ISalesEntriesService _salesEntriesService;
    private readonly DocumentOptions _options;
    private readonly ITransactionPresentationMapper? _presentationMapper;
    private readonly ISalesPortalClient? _salesPortalClient;

    private static readonly HashSet<string> SupportedTypes = new(StringComparer.OrdinalIgnoreCase)

    {

        "account-statement", "bank-statement", "sales-ledger", "customer-ledger", "supplier-statement"

    };

    public AccountReportDocumentBuilder(

        IAccountsDbContext dbContext,

        ISalesEntriesService salesEntriesService,

        IOptions<DocumentOptions> options,

        ITransactionPresentationMapper? presentationMapper = null,

        ISalesPortalClient? salesPortalClient = null)

    {

        _dbContext = dbContext;

        _salesEntriesService = salesEntriesService;

        _options = options.Value ?? new DocumentOptions();

        _presentationMapper = presentationMapper;

        _salesPortalClient = salesPortalClient;

    }



    private static string NormalizeType(string type)

    {

        if (string.IsNullOrWhiteSpace(type)) return string.Empty;

        var key = type.Trim().ToLowerInvariant().Replace("-", "").Replace("_", "");

        if (key is "accountstatement" or "account" or "accounts" or "cashstatement" or "cash") return "account-statement";

        if (key is "bankstatement" or "bank" or "banks") return "bank-statement";

        if (key is "salesledger" or "customerledger" or "salesledgers" or "customerledgers" or "ledger" or "sales" or "salesstatement") return "sales-ledger";

        if (key is "supplierstatement" or "supplier" or "suppliers") return "supplier-statement";

        return key;

    }

    private async Task<(Dictionary<long, string> heads, Dictionary<long, string> agents, Dictionary<string, AccountsReceipt> receipts)> PreFetchReceiptMetadataAsync(
        IEnumerable<FinancialTransaction> transactions,
        CancellationToken ct)
    {
        var txList = transactions.ToList();
        var receiptTxs = txList
            .Where(t => ResolveStatementTransactionType(t, isBankStatement: false, entityId: 0) == "RECEIPT")
            .ToList();

        if (!receiptTxs.Any())
        {
            return (new Dictionary<long, string>(), new Dictionary<long, string>(), new Dictionary<string, AccountsReceipt>(StringComparer.OrdinalIgnoreCase));
        }

        var candidateRefIds = receiptTxs
            .Where(t => !string.IsNullOrWhiteSpace(t.ReferenceId))
            .Select(t => t.ReferenceId!.Trim())
            .Concat(receiptTxs.Select(t => t.DocumentNumber).Where(d => !string.IsNullOrWhiteSpace(d)).Select(d => d!.Trim()))
            .Distinct()
            .ToList();

        var matchedArList = candidateRefIds.Any()
            ? await _dbContext.AccountsReceipts
                .AsNoTracking()
                .Where(r => candidateRefIds.Contains(r.ReferenceId) ||
                            candidateRefIds.Contains(r.ReceiptNumber) ||
                            (r.SalesPortalDocumentNumber != null && candidateRefIds.Contains(r.SalesPortalDocumentNumber)))
                .ToListAsync(ct)
            : new List<AccountsReceipt>();

        var receiptsByRef = new Dictionary<string, AccountsReceipt>(StringComparer.OrdinalIgnoreCase);
        foreach (var r in matchedArList)
        {
            if (!string.IsNullOrWhiteSpace(r.ReferenceId) && !receiptsByRef.ContainsKey(r.ReferenceId))
                receiptsByRef[r.ReferenceId] = r;
            if (!string.IsNullOrWhiteSpace(r.ReceiptNumber) && !receiptsByRef.ContainsKey(r.ReceiptNumber))
                receiptsByRef[r.ReceiptNumber] = r;
            if (!string.IsNullOrWhiteSpace(r.SalesPortalDocumentNumber) && !receiptsByRef.ContainsKey(r.SalesPortalDocumentNumber))
                receiptsByRef[r.SalesPortalDocumentNumber] = r;
        }

        // Resolve Agents
        var agentIds = receiptTxs
            .Where(t => t.RecipientType == RecipientType.Agent && t.RecipientId.HasValue)
            .Select(t => t.RecipientId!.Value)
            .Concat(matchedArList.Where(r => r.AgentId.HasValue).Select(r => r.AgentId!.Value))
            .Distinct()
            .ToList();

        var agentsDict = agentIds.Any()
            ? await _dbContext.Agents
                .AsNoTracking()
                .Where(a => agentIds.Contains(a.Id))
                .ToDictionaryAsync(a => a.Id, a => $"{a.FirstName} {a.LastName}".Trim(), ct)
            : new Dictionary<long, string>();

        // Resolve Heads
        var headIds = receiptTxs
            .Where(t => (t.RecipientType == RecipientType.Head || !t.RecipientType.HasValue) && t.RecipientId.HasValue)
            .Select(t => t.RecipientId!.Value)
            .Concat(matchedArList.Where(r => r.HeadId.HasValue).Select(r => r.HeadId!.Value))
            .Distinct()
            .ToList();

        var headsDict = new Dictionary<long, string>();
        foreach (var hid in headIds)
        {
            if (ExternalHeadsCache.TryGetValue(hid, out var cachedName) && !string.IsNullOrWhiteSpace(cachedName))
            {
                headsDict[hid] = cachedName;
            }
        }

        var missingHeadIds = headIds.Where(id => !headsDict.ContainsKey(id)).ToList();
        if (missingHeadIds.Any() && _salesPortalClient != null)
        {
            try
            {
                var headsResponse = await _salesPortalClient.GetHeadsAsync(1, 5000, null, null, ct);
                if (headsResponse?.Items != null)
                {
                    foreach (var h in headsResponse.Items)
                    {
                        var fullName = $"{h.FirstName} {h.LastName}".Trim();
                        if (!string.IsNullOrWhiteSpace(fullName))
                        {
                            ExternalHeadsCache[h.Id] = fullName;
                            headsDict[h.Id] = fullName;
                        }
                    }
                }
            }
            catch { }

            var stillMissing = missingHeadIds.Where(id => !headsDict.ContainsKey(id)).ToList();
            foreach (var hid in stillMissing)
            {
                try
                {
                    var h = await _salesPortalClient.GetHeadByIdAsync(hid, ct);
                    if (h != null)
                    {
                        var fullName = $"{h.FirstName} {h.LastName}".Trim();
                        if (!string.IsNullOrWhiteSpace(fullName))
                        {
                            ExternalHeadsCache[hid] = fullName;
                            headsDict[hid] = fullName;
                        }
                    }
                }
                catch { }
            }
        }

        return (headsDict, agentsDict, receiptsByRef);
    }

    private static string FormatStatementNarration(
        FinancialTransaction t,
        string txType,
        TexasAccountsPortal.Contracts.Transactions.TransactionResponse? mt,
        IReadOnlyDictionary<long, string> headsDict,
        IReadOnlyDictionary<long, string> agentsDict,
        IReadOnlyDictionary<string, AccountsReceipt> receiptsByRef,
        bool isBankStatement)
    {
        if (txType == "RECEIPT")
        {
            // 1. Extract receipt document number
            string receiptDocNo = "";
            var bracketMatch = System.Text.RegularExpressions.Regex.Match(t.Description ?? "", @"\[([^\]]+)\]");
            if (bracketMatch.Success)
            {
                receiptDocNo = bracketMatch.Groups[1].Value.Trim();
            }
            else
            {
                var codeMatch = System.Text.RegularExpressions.Regex.Match(t.Description ?? "", @"(TXSRCPT\d+|TXS-ARCPT-[\d-]+|[A-Z0-9_-]{6,})", System.Text.RegularExpressions.RegexOptions.IgnoreCase);
                if (codeMatch.Success)
                {
                    receiptDocNo = codeMatch.Groups[1].Value.Trim();
                }
                else if (!string.IsNullOrWhiteSpace(t.ReferenceId) && (t.ReferenceId.StartsWith("TXS", StringComparison.OrdinalIgnoreCase) || t.ReferenceId.StartsWith("RCP", StringComparison.OrdinalIgnoreCase)))
                {
                    receiptDocNo = t.ReferenceId.Trim();
                }
                else
                {
                    receiptDocNo = mt?.DocumentNumber ?? t.DocumentNumber ?? $"#{t.Id}";
                }
            }

            // 2. Identify if Agent or Customer receipt
            bool isAgentReceipt = t.RecipientType == RecipientType.Agent ||
                                  (t.Description != null && t.Description.StartsWith("Agent receipt", StringComparison.OrdinalIgnoreCase));

            AccountsReceipt? matchedAr = null;
            if (!string.IsNullOrWhiteSpace(t.ReferenceId) && receiptsByRef.TryGetValue(t.ReferenceId, out var ar1))
            {
                matchedAr = ar1;
            }
            else if (!string.IsNullOrWhiteSpace(receiptDocNo) && receiptsByRef.TryGetValue(receiptDocNo, out var ar2))
            {
                matchedAr = ar2;
            }

            if (matchedAr != null && string.Equals(matchedAr.ClientType, "agent", StringComparison.OrdinalIgnoreCase))
            {
                isAgentReceipt = true;
            }

            string receiptPrefix = isAgentReceipt ? "Agent receipt" : "Customer receipt";

            // 3. Resolve Head / Client Name
            string? resolvedHeadName = null;

            // Check mt?.DisplayRecipientName
            if (!string.IsNullOrWhiteSpace(mt?.DisplayRecipientName) &&
                !mt.DisplayRecipientName.Equals("Customer Head", StringComparison.OrdinalIgnoreCase) &&
                !mt.DisplayRecipientName.Equals("Unknown Customer", StringComparison.OrdinalIgnoreCase) &&
                !mt.DisplayRecipientName.Equals("Agent", StringComparison.OrdinalIgnoreCase))
            {
                resolvedHeadName = mt.DisplayRecipientName.Trim();
            }

            // Check mt?.SourceParty?.Name
            if (string.IsNullOrWhiteSpace(resolvedHeadName) &&
                !string.IsNullOrWhiteSpace(mt?.SourceParty?.Name) &&
                !mt.SourceParty.Name.Equals("Customer Head", StringComparison.OrdinalIgnoreCase) &&
                !mt.SourceParty.Name.Equals("Unknown Customer", StringComparison.OrdinalIgnoreCase))
            {
                resolvedHeadName = mt.SourceParty.Name.Trim();
            }

            // Check headsDict for t.RecipientId or matchedAr.HeadId
            if (string.IsNullOrWhiteSpace(resolvedHeadName))
            {
                long? headId = (t.RecipientType == RecipientType.Head || !t.RecipientType.HasValue) ? t.RecipientId : null;
                if (!headId.HasValue && matchedAr?.HeadId.HasValue == true) headId = matchedAr.HeadId;

                if (headId.HasValue && headsDict.TryGetValue(headId.Value, out var hName) && !string.IsNullOrWhiteSpace(hName))
                {
                    resolvedHeadName = hName.Trim();
                }
            }

            // Check agentsDict for t.RecipientId or matchedAr.AgentId
            if (string.IsNullOrWhiteSpace(resolvedHeadName) && isAgentReceipt)
            {
                long? agentId = t.RecipientType == RecipientType.Agent ? t.RecipientId : null;
                if (!agentId.HasValue && matchedAr?.AgentId.HasValue == true) agentId = matchedAr.AgentId;

                if (agentId.HasValue && agentsDict.TryGetValue(agentId.Value, out var agName) && !string.IsNullOrWhiteSpace(agName))
                {
                    resolvedHeadName = agName.Trim();
                }
            }

            // Check matchedAr.ClientName
            if (string.IsNullOrWhiteSpace(resolvedHeadName) &&
                matchedAr != null &&
                !string.IsNullOrWhiteSpace(matchedAr.ClientName) &&
                !matchedAr.ClientName.Equals("Customer Head", StringComparison.OrdinalIgnoreCase))
            {
                resolvedHeadName = matchedAr.ClientName.Trim();
            }

            // Check if t.Description has "for <Name>." (and not "Customer Head")
            if (string.IsNullOrWhiteSpace(resolvedHeadName) && !string.IsNullOrWhiteSpace(t.Description))
            {
                var forMatch = System.Text.RegularExpressions.Regex.Match(t.Description, @"for\s+([^.\r\n]+?)(?:\.|$|Payment Receipt|\[Ref:)", System.Text.RegularExpressions.RegexOptions.IgnoreCase);
                if (forMatch.Success)
                {
                    var candidate = forMatch.Groups[1].Value.Trim();
                    if (!string.IsNullOrWhiteSpace(candidate) && !candidate.Equals("Customer Head", StringComparison.OrdinalIgnoreCase))
                    {
                        resolvedHeadName = candidate;
                    }
                }
            }

            if (string.IsNullOrWhiteSpace(resolvedHeadName))
            {
                resolvedHeadName = isAgentReceipt ? "Agent" : "Customer";
            }

            string cleanHead = resolvedHeadName.Trim();
            return $"{receiptPrefix} [{receiptDocNo}] for {cleanHead}" + (cleanHead.EndsWith('.') ? "" : ".");
        }

        // Default narration for non-receipts
        string defaultNarration = t.Description ?? (isBankStatement ? "Bank Movement" : "Cash Movement");
        string? refText = !string.IsNullOrWhiteSpace(t.ReferenceId)
            ? $"{t.ReferenceType} #{t.ReferenceId}"
            : (!string.IsNullOrWhiteSpace(mt?.ReferenceDisplayName) && !mt.ReferenceDisplayName.StartsWith("TRANSACTION #", StringComparison.OrdinalIgnoreCase) ? mt.ReferenceDisplayName : null);

        if (!string.IsNullOrWhiteSpace(refText) && !defaultNarration.Contains(refText, StringComparison.OrdinalIgnoreCase) && !defaultNarration.Contains(t.ReferenceId ?? "___", StringComparison.OrdinalIgnoreCase))
        {
            defaultNarration = $"{defaultNarration} [Ref: {refText}]";
        }

        return defaultNarration;
    }

    private static string ResolveStatementTransactionType(FinancialTransaction t, bool isBankStatement, long entityId)
    {
        // 1. Client Receipts / Collections
        if (t.ReferenceType == TransactionReferenceType.Receipt ||
            t.ReferenceType == TransactionReferenceType.Sale ||
            (!string.IsNullOrWhiteSpace(t.ReferenceId) && (t.ReferenceId.StartsWith("RCP", StringComparison.OrdinalIgnoreCase) || t.ReferenceId.StartsWith("TXSRCP", StringComparison.OrdinalIgnoreCase) || t.ReferenceId.StartsWith("CRCPT", StringComparison.OrdinalIgnoreCase))) ||
            (t.Description != null && t.Description.Contains("Receipt", StringComparison.OrdinalIgnoreCase)))
        {
            return "RECEIPT";
        }

        // 2. Internal Transfers / Contra Movements
        bool isTransfer = t.TransactionType == FinancialTransactionType.Contra ||
                          t.ReferenceType == TransactionReferenceType.Transfer ||
                          (t.SourceBankId.HasValue && t.DestinationBankId.HasValue) ||
                          (t.SourceAccountId.HasValue && t.DestinationAccountId.HasValue) ||
                          (t.SourceBankId.HasValue && t.DestinationAccountId.HasValue) ||
                          (t.SourceAccountId.HasValue && t.DestinationBankId.HasValue);

        if (isTransfer)
        {
            if (isBankStatement)
            {
                // For a Bank:
                // Money entering the bank from cash drawer -> DEPOSIT
                if (t.DestinationBankId == entityId && t.SourceAccountId.HasValue)
                    return "DEPOSIT";
                // Money leaving the bank to cash drawer -> WITHDRAWAL
                if (t.SourceBankId == entityId && t.DestinationAccountId.HasValue)
                    return "WITHDRAWAL";
                // Money moving between two banks -> CONTRA
                if (t.SourceBankId.HasValue && t.DestinationBankId.HasValue)
                    return "CONTRA";

                return t.DestinationBankId == entityId ? "DEPOSIT" : "WITHDRAWAL";
            }
            else
            {
                // For a Cash Drawer:
                // Cash deposited into bank -> DEPOSIT (Deposit to Bank)
                if (t.SourceAccountId == entityId && t.DestinationBankId.HasValue)
                    return "DEPOSIT";
                // Cash withdrawn from bank -> WITHDRAWAL (Bank Withdrawal)
                if (t.DestinationAccountId == entityId && t.SourceBankId.HasValue)
                    return "WITHDRAWAL";
                // Cash moving between drawers -> CONTRA
                if (t.SourceAccountId.HasValue && t.DestinationAccountId.HasValue)
                    return "CONTRA";

                return t.SourceAccountId == entityId ? "DEPOSIT" : "WITHDRAWAL";
            }
        }

        // 3. Operational Expenses
        if (t.ReferenceType == TransactionReferenceType.Expense ||
            t.ExpenseHeaderId.HasValue ||
            (t.Description != null && t.Description.Contains("Expense", StringComparison.OrdinalIgnoreCase)))
        {
            return "EXPENSE";
        }

        // 4. Payroll / Salaries
        if (t.ReferenceType == TransactionReferenceType.Salary ||
            t.ReferenceType == TransactionReferenceType.Advance ||
            t.ReferenceType == TransactionReferenceType.Loan ||
            (t.Description != null && t.Description.Contains("Salary", StringComparison.OrdinalIgnoreCase)))
        {
            return "SALARY";
        }

        // 5. Refunds & Returns
        if (t.TransactionType == FinancialTransactionType.PurchaseReturn ||
            t.TransactionType == FinancialTransactionType.SalesReturn ||
            t.ReferenceType == TransactionReferenceType.Refund)
        {
            return "REFUND";
        }

        // 6. Supplier Payments / Settlements / Services
        if (t.ReferenceType == TransactionReferenceType.SupplierPayment ||
            t.ReferenceType == TransactionReferenceType.SupplierWallet ||
            t.ReferenceType == TransactionReferenceType.SupplierCreditClearance ||
            t.SupplierId.HasValue ||
            t.ReferenceType is TransactionReferenceType.Visa
                or TransactionReferenceType.Flight
                or TransactionReferenceType.Hotel
                or TransactionReferenceType.Holiday
                or TransactionReferenceType.Transport
                or TransactionReferenceType.Vfs
                or TransactionReferenceType.Other)
        {
            return "PAYMENT";
        }

        // 7. General Directional Fallback
        if (t.TransactionType == FinancialTransactionType.Incoming)
        {
            return isBankStatement ? "DEPOSIT" : "RECEIPT";
        }
        if (t.TransactionType == FinancialTransactionType.Outgoing)
        {
            return isBankStatement ? "WITHDRAWAL" : "PAYMENT";
        }

        return "CONTRA";
    }



    public bool CanBuild(string category, string type)

    {

        var norm = NormalizeType(type);

        return (string.Equals(category, "report", StringComparison.OrdinalIgnoreCase) || string.Equals(category, "list", StringComparison.OrdinalIgnoreCase)) && SupportedTypes.Contains(norm);

    }



    public async Task<DocumentDataModel?> BuildAsync(DocumentBuildArgs args, CancellationToken ct = default)

    {

        string type = NormalizeType(args.Type);

        var q = args.QueryParams;



        var model = new DocumentDataModel

        {

            Category = "Report",

            Date = DateTime.Now,

            Options = _options

        };



        if (type == "account-statement")
        {
            long accountId = args.EntityId ?? (q.TryGetValue("accountId", out var aidStr) && long.TryParse(aidStr, out var aid) ? aid : (q.TryGetValue("id", out var idStr) && long.TryParse(idStr, out var id) ? id : (q.TryGetValue("entityId", out var eidStr) && long.TryParse(eidStr, out var eid) ? eid : 0)));
            if (accountId <= 0) return null;

            var acc = await _dbContext.Accounts.FirstOrDefaultAsync(a => a.Id == accountId, ct);
            if (acc == null) return null;

            model.Title = "CASH ACCOUNT STATEMENT";
            model.Subtitle = $"Account: {acc.Name} (Code: Cash-{acc.Id})";
            model.CustomerName = acc.Name;
            model.CustomerContact = $"Ledger: {acc.LedgerType} | Type: {acc.Type}";
            model.PreparedBy = "Texas Accounts Portal";

            model.MetaData.Add(new KeyValuePair<string, string>("Account Code", $"Cash-{acc.Id}"));
            model.MetaData.Add(new KeyValuePair<string, string>("Status", acc.IsActive ? "Active" : "Inactive"));

            DateTime? start = q.TryGetValue("startDate", out var sStr) && DateTime.TryParse(sStr, out var sDt) ? sDt : null;
            DateTime? end = q.TryGetValue("endDate", out var eStr) && DateTime.TryParse(eStr, out var eDt) ? eDt : null;

            if (start.HasValue) model.ActiveFilters.Add(new KeyValuePair<string, string>("From Date", start.Value.ToString("dd/MM/yyyy")));
            if (end.HasValue) model.ActiveFilters.Add(new KeyValuePair<string, string>("To Date", end.Value.ToString("dd/MM/yyyy")));

            // Fetch ALL historical approved transactions for this cash account to guarantee self-reconciling opening & running balances
            var allTxs = await _dbContext.Transactions
                .Where(t => t.Status == FinancialTransactionStatus.Approved && (t.SourceAccountId == acc.Id || t.DestinationAccountId == acc.Id))
                .OrderBy(t => t.CreatedAt)
                .ThenBy(t => t.Id)
                .ToListAsync(ct);

            var mappedDict = new Dictionary<long, TexasAccountsPortal.Contracts.Transactions.TransactionResponse>();
            if (_presentationMapper != null && allTxs.Any())
            {
                var mappedList = await _presentationMapper.MapToResponsesAsync(allTxs, ct: ct);
                mappedDict = mappedList.ToDictionary(m => m.Id, m => m);
            }

            decimal totalHistDebits = allTxs.Where(t => t.DestinationAccountId == acc.Id).Sum(t => t.Amount);
            decimal totalHistCredits = allTxs.Where(t => t.SourceAccountId == acc.Id).Sum(t => t.Amount);
            decimal inceptionBalance = acc.CurrentBalance - totalHistDebits + totalHistCredits;

            decimal openingBalance = inceptionBalance;
            if (start.HasValue)
            {
                foreach (var t in allTxs.Where(t => t.CreatedAt < start.Value))
                {
                    bool isDebit = t.DestinationAccountId == acc.Id;
                    openingBalance += (isDebit ? t.Amount : -t.Amount);
                }
            }

            var periodQuery = allTxs.AsEnumerable();
            if (start.HasValue) periodQuery = periodQuery.Where(t => t.CreatedAt >= start.Value);
            if (end.HasValue) periodQuery = periodQuery.Where(t => t.CreatedAt <= end.Value.AddDays(1).AddTicks(-1));
            var periodTxs = periodQuery.OrderBy(t => t.CreatedAt).ThenBy(t => t.Id).ToList();

            model.Table.Columns = new List<DocumentColumn>
            {
                new() { Header = "DATE", RelativeWidth = 1.1f, Alignment = ColumnAlignment.Center },
                new() { Header = "DOC NO.", RelativeWidth = 1.2f, IsMonoFont = true },
                new() { Header = "DESCRIPTION / NARRATIVE", RelativeWidth = 2.8f, IsBold = true },
                new() { Header = "TYPE", RelativeWidth = 1.0f, Alignment = ColumnAlignment.Center, IsBold = true },
                new() { Header = "DEBIT (+)", RelativeWidth = 1.2f, Alignment = ColumnAlignment.Right, IsBold = true, CustomColor = "#059669" },
                new() { Header = "CREDIT (-)", RelativeWidth = 1.2f, Alignment = ColumnAlignment.Right, IsBold = true, CustomColor = "#dc2626" },
                new() { Header = "RUNNING BAL", RelativeWidth = 1.2f, Alignment = ColumnAlignment.Right, IsBold = true, CustomColor = "#1b2559" }
            };

            // Opening Balance Row
            decimal runningBal = openingBalance;
            model.Table.Rows.Add(new List<string>
            {
                start.HasValue ? start.Value.ToString("dd/MM/yyyy") : "-",
                "-",
                "OPENING BALANCE - Balance Brought Forward",
                "OPENING",
                "-",
                "-",
                runningBal.ToString("0.000")
            });

            var (headsDict, agentsDict, receiptsByRef) = await PreFetchReceiptMetadataAsync(periodTxs, ct);

            decimal periodDebits = 0;
            decimal periodCredits = 0;

            foreach (var t in periodTxs)
            {
                bool isDebit = t.DestinationAccountId == acc.Id;
                decimal debit = isDebit ? t.Amount : 0;
                decimal credit = !isDebit ? t.Amount : 0;
                runningBal += (debit - credit);
                periodDebits += debit;
                periodCredits += credit;

                mappedDict.TryGetValue(t.Id, out var mt);
                string txType = ResolveStatementTransactionType(t, isBankStatement: false, entityId: acc.Id);
                string narration = FormatStatementNarration(t, txType, mt, headsDict, agentsDict, receiptsByRef, isBankStatement: false);

                model.Table.Rows.Add(new List<string>
                {
                    t.CreatedAt.ToString("dd/MM/yyyy HH:mm"),
                    mt?.DocumentNumber ?? t.DocumentNumber ?? $"#{t.Id}",
                    narration,
                    txType,
                    debit > 0 ? debit.ToString("0.000") : "-",
                    credit > 0 ? credit.ToString("0.000") : "-",
                    runningBal.ToString("0.000")
                });
            }

            model.Table.TotalRow = new List<string>
            {
                "TOTALS",
                $"{periodTxs.Count} Entries",
                "Total Movements",
                "-",
                periodDebits.ToString("0.000"),
                periodCredits.ToString("0.000"),
                runningBal.ToString("0.000")
            };

            // Summary Cards
            model.SummaryCards.Add(new DocumentSummaryCard { Label = "Opening Balance", Value = $"{openingBalance:0.000} BHD", Subtext = "Balance brought forward", HighlightColor = "#64748b" });
            model.SummaryCards.Add(new DocumentSummaryCard { Label = "Total Debits (+)", Value = $"{periodDebits:0.000} BHD", Subtext = "Cash Inflows / Collections", HighlightColor = "#059669" });
            model.SummaryCards.Add(new DocumentSummaryCard { Label = "Total Credits (-)", Value = $"{periodCredits:0.000} BHD", Subtext = "Cash Outflows / Payouts", HighlightColor = "#dc2626" });
            model.SummaryCards.Add(new DocumentSummaryCard { Label = "Drawer Closing Balance", Value = $"{runningBal:0.000} BHD", Subtext = "Period ending balance", HighlightColor = "#1b2559" });

            model.MetaData.Add(new KeyValuePair<string, string>("Closing Balance", $"{runningBal:0.000} BHD"));

            model.Totals = new DocumentTotals
            {
                NetTotal = runningBal,
                NetTotalLabel = "Drawer Closing Balance",
                Currency = "BHD"
            };

            model.RemarksNote = $"Statement period: {(start.HasValue ? start.Value.ToString("dd/MM/yyyy") : "Inception")} to {(end.HasValue ? end.Value.ToString("dd/MM/yyyy") : "Present")}.";
        }
        else if (type == "bank-statement")
        {
            long bankId = args.EntityId ?? (q.TryGetValue("bankId", out var bidStr) && long.TryParse(bidStr, out var bid) ? bid : (q.TryGetValue("id", out var idStr) && long.TryParse(idStr, out var id) ? id : (q.TryGetValue("entityId", out var eidStr) && long.TryParse(eidStr, out var eid) ? eid : 0)));
            if (bankId <= 0) return null;

            var bank = await _dbContext.Banks.FirstOrDefaultAsync(b => b.Id == bankId, ct);
            if (bank == null) return null;

            model.Title = "BANK TREASURY STATEMENT";
            model.Subtitle = $"Bank: {bank.BankName} (Acc: {bank.AccountNumber})";
            model.CustomerName = bank.BankName;
            model.CustomerContact = $"Account No: {bank.AccountNumber}";
            model.PreparedBy = "Texas Treasury Management";

            model.MetaData.Add(new KeyValuePair<string, string>("Account No", bank.AccountNumber));
            model.MetaData.Add(new KeyValuePair<string, string>("Status", bank.IsActive ? "Active" : "Inactive"));

            DateTime? start = q.TryGetValue("startDate", out var sStr) && DateTime.TryParse(sStr, out var sDt) ? sDt : null;
            DateTime? end = q.TryGetValue("endDate", out var eStr) && DateTime.TryParse(eStr, out var eDt) ? eDt : null;

            if (start.HasValue) model.ActiveFilters.Add(new KeyValuePair<string, string>("From Date", start.Value.ToString("dd/MM/yyyy")));
            if (end.HasValue) model.ActiveFilters.Add(new KeyValuePair<string, string>("To Date", end.Value.ToString("dd/MM/yyyy")));

            // Fetch ALL historical approved transactions for this bank to guarantee self-reconciling opening & running balances
            var allTxs = await _dbContext.Transactions
                .Where(t => t.Status == FinancialTransactionStatus.Approved && (t.SourceBankId == bank.Id || t.DestinationBankId == bank.Id))
                .OrderBy(t => t.CreatedAt)
                .ThenBy(t => t.Id)
                .ToListAsync(ct);

            var mappedDict = new Dictionary<long, TexasAccountsPortal.Contracts.Transactions.TransactionResponse>();
            if (_presentationMapper != null && allTxs.Any())
            {
                var mappedList = await _presentationMapper.MapToResponsesAsync(allTxs, ct: ct);
                mappedDict = mappedList.ToDictionary(m => m.Id, m => m);
            }

            decimal totalHistDebits = allTxs.Where(t => t.DestinationBankId == bank.Id).Sum(t => t.Amount);
            decimal totalHistCredits = allTxs.Where(t => t.SourceBankId == bank.Id).Sum(t => t.Amount);
            decimal inceptionBalance = bank.CurrentBalance - totalHistDebits + totalHistCredits;

            decimal openingBalance = inceptionBalance;
            if (start.HasValue)
            {
                foreach (var t in allTxs.Where(t => t.CreatedAt < start.Value))
                {
                    bool isDebit = t.DestinationBankId == bank.Id;
                    openingBalance += (isDebit ? t.Amount : -t.Amount);
                }
            }

            var periodQuery = allTxs.AsEnumerable();
            if (start.HasValue) periodQuery = periodQuery.Where(t => t.CreatedAt >= start.Value);
            if (end.HasValue) periodQuery = periodQuery.Where(t => t.CreatedAt <= end.Value.AddDays(1).AddTicks(-1));
            var periodTxs = periodQuery.OrderBy(t => t.CreatedAt).ThenBy(t => t.Id).ToList();

            model.Table.Columns = new List<DocumentColumn>
            {
                new() { Header = "DATE", RelativeWidth = 1.1f, Alignment = ColumnAlignment.Center },
                new() { Header = "DOC NO.", RelativeWidth = 1.2f, IsMonoFont = true },
                new() { Header = "DESCRIPTION / NARRATIVE", RelativeWidth = 2.8f, IsBold = true },
                new() { Header = "TYPE", RelativeWidth = 1.0f, Alignment = ColumnAlignment.Center, IsBold = true },
                new() { Header = "DEBIT (+)", RelativeWidth = 1.2f, Alignment = ColumnAlignment.Right, IsBold = true, CustomColor = "#059669" },
                new() { Header = "CREDIT (-)", RelativeWidth = 1.2f, Alignment = ColumnAlignment.Right, IsBold = true, CustomColor = "#dc2626" },
                new() { Header = "RUNNING BAL", RelativeWidth = 1.2f, Alignment = ColumnAlignment.Right, IsBold = true, CustomColor = "#1b2559" }
            };

            // Opening Balance Row
            decimal runningBal = openingBalance;
            model.Table.Rows.Add(new List<string>
            {
                start.HasValue ? start.Value.ToString("dd/MM/yyyy") : "-",
                "-",
                "OPENING BALANCE - Balance Brought Forward",
                "OPENING",
                "-",
                "-",
                runningBal.ToString("0.000")
            });

            var (headsDict, agentsDict, receiptsByRef) = await PreFetchReceiptMetadataAsync(periodTxs, ct);

            decimal periodDebits = 0;
            decimal periodCredits = 0;

            foreach (var t in periodTxs)
            {
                bool isDebit = t.DestinationBankId == bank.Id;
                decimal debit = isDebit ? t.Amount : 0;
                decimal credit = !isDebit ? t.Amount : 0;
                runningBal += (debit - credit);
                periodDebits += debit;
                periodCredits += credit;

                mappedDict.TryGetValue(t.Id, out var mt);
                string txType = ResolveStatementTransactionType(t, isBankStatement: true, entityId: bank.Id);
                string narration = FormatStatementNarration(t, txType, mt, headsDict, agentsDict, receiptsByRef, isBankStatement: true);

                model.Table.Rows.Add(new List<string>
                {
                    t.CreatedAt.ToString("dd/MM/yyyy HH:mm"),
                    mt?.DocumentNumber ?? t.DocumentNumber ?? $"#{t.Id}",
                    narration,
                    txType,
                    debit > 0 ? debit.ToString("0.000") : "-",
                    credit > 0 ? credit.ToString("0.000") : "-",
                    runningBal.ToString("0.000")
                });
            }

            model.Table.TotalRow = new List<string>
            {
                "TOTALS",
                $"{periodTxs.Count} Entries",
                "Total Movements",
                "-",
                periodDebits.ToString("0.000"),
                periodCredits.ToString("0.000"),
                runningBal.ToString("0.000")
            };

            // Summary Cards
            model.SummaryCards.Add(new DocumentSummaryCard { Label = "Opening Balance", Value = $"{openingBalance:0.000} BHD", Subtext = "Balance brought forward", HighlightColor = "#64748b" });
            model.SummaryCards.Add(new DocumentSummaryCard { Label = "Total Debits (+)", Value = $"{periodDebits:0.000} BHD", Subtext = "Treasury Inflows / Deposits", HighlightColor = "#059669" });
            model.SummaryCards.Add(new DocumentSummaryCard { Label = "Total Credits (-)", Value = $"{periodCredits:0.000} BHD", Subtext = "Treasury Outflows / Withdrawals", HighlightColor = "#dc2626" });
            model.SummaryCards.Add(new DocumentSummaryCard { Label = "Treasury Closing Balance", Value = $"{runningBal:0.000} BHD", Subtext = "Period ending balance", HighlightColor = "#1b2559" });

            model.MetaData.Add(new KeyValuePair<string, string>("Closing Balance", $"{runningBal:0.000} BHD"));

            model.Totals = new DocumentTotals
            {
                NetTotal = runningBal,
                NetTotalLabel = "Treasury Closing Balance",
                Currency = "BHD"
            };

            model.RemarksNote = $"Statement period: {(start.HasValue ? start.Value.ToString("dd/MM/yyyy") : "Inception")} to {(end.HasValue ? end.Value.ToString("dd/MM/yyyy") : "Present")}.";
        }
        else if (type == "sales-ledger" || type == "customer-ledger")
        {
            long headId = args.EntityId ?? (q.TryGetValue("headId", out var hidStr) && long.TryParse(hidStr, out var hid) ? hid : (q.TryGetValue("id", out var idStr) && long.TryParse(idStr, out var id) ? id : (q.TryGetValue("entityId", out var eidStr) && long.TryParse(eidStr, out var eid) ? eid : 0)));
            if (headId <= 0) return null;

            string headType = q.TryGetValue("type", out var tStr) && !string.IsNullOrWhiteSpace(tStr) ? tStr : (q.TryGetValue("headType", out var htStr) && !string.IsNullOrWhiteSpace(htStr) ? htStr : "customer");
            var head = await _salesEntriesService.GetHeadByIdAsync(headId, headType, ct);
            if (head == null) return null;

            string accountTypeLabel = head.Type?.Equals("agent", StringComparison.OrdinalIgnoreCase) == true ? "Agent Account" : "Customer Head";

            model.Title = "CUSTOMER ACCOUNT STATEMENT";
            model.Subtitle = $"Account: {head.FirstName} {head.LastName} ({accountTypeLabel})";
            model.CustomerName = $"{head.FirstName} {head.LastName}";
            model.CustomerContact = $"Email: {head.Email ?? "N/A"} | Mobile: {head.MobileNo ?? "N/A"} | Nationality: {head.Nationality ?? "N/A"}";
            model.PreparedBy = "Texas Accounts Portal";

            model.MetaData.Add(new KeyValuePair<string, string>("Account Category", accountTypeLabel));
            if (!string.IsNullOrWhiteSpace(head.SalesmanName))
            {
                model.MetaData.Add(new KeyValuePair<string, string>("Assigned Salesman", head.SalesmanName));
            }

            DateTime? start = q.TryGetValue("startDate", out var sStr) && DateTime.TryParse(sStr, out var sDt) ? sDt : null;
            DateTime? end = q.TryGetValue("endDate", out var eStr) && DateTime.TryParse(eStr, out var eDt) ? eDt : null;

            if (start.HasValue) model.ActiveFilters.Add(new KeyValuePair<string, string>("From Date", start.Value.ToString("dd/MM/yyyy")));
            if (end.HasValue) model.ActiveFilters.Add(new KeyValuePair<string, string>("To Date", end.Value.ToString("dd/MM/yyyy")));

            var ledgerRes = await _salesEntriesService.GetHeadLedgerAsync(headId, headType, 1, 10000, ct);
            var rawItems = ledgerRes?.Items ?? new List<TexasAccountsPortal.Contracts.SalesEntries.HeadLedgerEntryResponse>();

            // Deduplicate any residual incoming cash transaction mirroring a receipt/deposit
            var receiptDocs = new HashSet<string>(StringComparer.OrdinalIgnoreCase);
            foreach (var item in rawItems)
            {
                if (string.Equals(item.Type, "deposit", StringComparison.OrdinalIgnoreCase) ||
                    string.Equals(item.Type, "receipt", StringComparison.OrdinalIgnoreCase))
                {
                    var m = System.Text.RegularExpressions.Regex.Match(item.Description ?? "", @"TXSRCPT\d+|TXS-ARCPT-[\d-]+", System.Text.RegularExpressions.RegexOptions.IgnoreCase);
                    if (m.Success) receiptDocs.Add(m.Value);
                }
            }

            if (receiptDocs.Count > 0)
            {
                rawItems = rawItems.Where(i =>
                {
                    if (string.Equals(i.Type, "incoming", StringComparison.OrdinalIgnoreCase))
                    {
                        var m = System.Text.RegularExpressions.Regex.Match(i.Description ?? "", @"TXSRCPT\d+|TXS-ARCPT-[\d-]+", System.Text.RegularExpressions.RegexOptions.IgnoreCase);
                        if (m.Success && receiptDocs.Contains(m.Value)) return false;
                    }
                    return true;
                }).ToList();
            }

            // Deduplicate any residual credit sale wallet debit mirroring a booking
            rawItems = rawItems.Where(i =>
            {
                if (string.Equals(i.Type, "walletdebit", StringComparison.OrdinalIgnoreCase) ||
                    (i.Description != null && i.Description.StartsWith("Credit Sale charge", StringComparison.OrdinalIgnoreCase)))
                {
                    return false;
                }
                return true;
            }).ToList();

            var allSorted = rawItems.OrderBy(i => i.CreatedAt).ThenBy(i => i.Id).ToList();

            static string FormatSignedBalance(decimal val) => val > 0 ? $"+{val:0.000}" : val < 0 ? $"{val:0.000}" : "0.000";

            // Calculate opening balance prior to startDate using wallet convention (Credit increases, Debit decreases)
            decimal openingBalance = 0m;
            if (start.HasValue)
            {
                foreach (var item in allSorted.Where(i => i.CreatedAt < start.Value))
                {
                    openingBalance += (item.Credit - item.Debit);
                }
            }

            var periodQuery = allSorted.AsEnumerable();
            if (start.HasValue) periodQuery = periodQuery.Where(i => i.CreatedAt >= start.Value);
            if (end.HasValue) periodQuery = periodQuery.Where(i => i.CreatedAt <= end.Value.AddDays(1).AddTicks(-1));
            var periodItems = periodQuery.OrderBy(i => i.CreatedAt).ThenBy(i => i.Id).ToList();

            model.Table.Columns = new List<DocumentColumn>
            {
                new() { Header = "DATE", RelativeWidth = 1.1f, Alignment = ColumnAlignment.Center },
                new() { Header = "TYPE", RelativeWidth = 1.0f, IsMonoFont = true },
                new() { Header = "REFERENCE NARRATION", RelativeWidth = 3.4f, IsBold = true },
                new() { Header = "DEBIT (-)", RelativeWidth = 1.2f, Alignment = ColumnAlignment.Right, IsBold = true, CustomColor = "#dc2626" },
                new() { Header = "CREDIT (+)", RelativeWidth = 1.2f, Alignment = ColumnAlignment.Right, IsBold = true, CustomColor = "#059669" },
                new() { Header = "RUNNING BAL", RelativeWidth = 1.3f, Alignment = ColumnAlignment.Right, IsBold = true, CustomColor = "#1b2559" }
            };

            // Opening Balance Row
            decimal runningBal = openingBalance;
            model.Table.Rows.Add(new List<string>
            {
                start.HasValue ? start.Value.ToString("dd/MM/yyyy") : "-",
                "-",
                "OPENING BALANCE - Balance Brought Forward",
                "-",
                "-",
                FormatSignedBalance(runningBal)
            });

            decimal periodDebits = 0m;
            decimal periodCredits = 0m;

            foreach (var item in periodItems)
            {
                decimal debit = item.Debit;
                decimal credit = item.Credit;
                runningBal += (credit - debit);
                periodDebits += debit;
                periodCredits += credit;

                model.Table.Rows.Add(new List<string>
                {
                    item.CreatedAt.ToString("dd/MM/yyyy"),
                    item.Type ?? "ENTRY",
                    item.Description ?? "Statement Entry",
                    debit > 0 ? debit.ToString("0.000") : "-",
                    credit > 0 ? credit.ToString("0.000") : "-",
                    FormatSignedBalance(runningBal)
                });
            }

            model.Table.TotalRow = new List<string>
            {
                "TOTALS",
                $"{periodItems.Count} Entries",
                "Total Movements",
                periodDebits.ToString("0.000"),
                periodCredits.ToString("0.000"),
                FormatSignedBalance(runningBal)
            };

            // Summary Cards matching wallet convention
            string clientStatus = runningBal > 0 ? "Prepaid funds held" : runningBal < 0 ? "Outstanding balance owed to Texas" : "Settled";
            string highlightColor = runningBal >= 0 ? "#059669" : "#dc2626";
            string displayBalance = FormatSignedBalance(runningBal) + " BHD";

            model.SummaryCards.Add(new DocumentSummaryCard { Label = "Opening Balance", Value = FormatSignedBalance(openingBalance) + " BHD", Subtext = "Balance brought forward", HighlightColor = "#64748b" });
            model.SummaryCards.Add(new DocumentSummaryCard { Label = "Total Deposited / Paid (+)", Value = periodCredits.ToString("0.000") + " BHD", Subtext = "Receipts & Deposits", HighlightColor = "#059669" });
            model.SummaryCards.Add(new DocumentSummaryCard { Label = "Total Invoiced / Charges (-)", Value = periodDebits.ToString("0.000") + " BHD", Subtext = "Bookings & Charges", HighlightColor = "#dc2626" });
            model.SummaryCards.Add(new DocumentSummaryCard { Label = "Wallet Balance", Value = displayBalance, Subtext = clientStatus, HighlightColor = highlightColor });

            model.MetaData.Add(new KeyValuePair<string, string>("Wallet Balance", displayBalance));
            model.MetaData.Add(new KeyValuePair<string, string>("Standing", clientStatus));

            model.Totals = new DocumentTotals
            {
                NetTotal = runningBal,
                NetTotalLabel = "Wallet Balance",
                Currency = "BHD"
            };

            model.RemarksNote = $"Statement period: {(start.HasValue ? start.Value.ToString("dd/MM/yyyy") : "Inception")} to {(end.HasValue ? end.Value.ToString("dd/MM/yyyy") : "Present")}.";
        }
        else if (type == "supplier-statement")

        {

            long supplierId = args.EntityId ?? (q.TryGetValue("supplierId", out var sidStr) && long.TryParse(sidStr, out var sid) ? sid : (q.TryGetValue("id", out var idStr) && long.TryParse(idStr, out var id) ? id : (q.TryGetValue("entityId", out var eidStr) && long.TryParse(eidStr, out var eid) ? eid : 0)));

            if (supplierId <= 0) return null;



            var supplier = await _dbContext.Suppliers.FirstOrDefaultAsync(s => s.Id == supplierId, ct);

            if (supplier == null) return null;



            model.Title = "SUPPLIER STATEMENT OF ACCOUNT";

            model.Subtitle = $"Supplier: {supplier.Name} (Code: {supplier.Code})";

            model.CustomerName = supplier.Name;

            model.CustomerContact = $"Code: {supplier.Code} | Status: {(supplier.IsVerified ? "Verified" : "Unverified")}";

            model.PreparedBy = "Texas Accounts Portal";



            DateTime? start = q.TryGetValue("startDate", out var sStr) && DateTime.TryParse(sStr, out var sDt) ? sDt : null;

            DateTime? end = q.TryGetValue("endDate", out var eStr) && DateTime.TryParse(eStr, out var eDt) ? eDt : null;



            if (start.HasValue) model.ActiveFilters.Add(new KeyValuePair<string, string>("From Date", start.Value.ToString("dd/MM/yyyy")));

            if (end.HasValue) model.ActiveFilters.Add(new KeyValuePair<string, string>("To Date", end.Value.ToString("dd/MM/yyyy")));



            // Fetch ALL historical approved transactions for this supplier to guarantee self-reconciling opening & running balances

            var allTxs = await _dbContext.Transactions

                .Where(t => t.Status == FinancialTransactionStatus.Approved && t.SupplierId == supplierId)

                .OrderBy(t => t.CreatedAt)

                .ThenBy(t => t.Id)

                .ToListAsync(ct);



            // Map presentation layer details

            var mappedDict = new Dictionary<long, TexasAccountsPortal.Contracts.Transactions.TransactionResponse>();

            if (_presentationMapper != null && allTxs.Any())

            {

                var mappedList = await _presentationMapper.MapToResponsesAsync(allTxs, ct: ct);

                mappedDict = mappedList.ToDictionary(m => m.Id, m => m);

            }



            // Classification function: determines movement type and wallet impact
            (string classification, string narrative, decimal deposit, decimal usage, bool isInformational) ClassifyMovement(FinancialTransaction t)
            {
                var refTypeLower = t.ReferenceType.HasValue ? t.ReferenceType.Value.ToString().ToLowerInvariant() : "";
                var descLower = (t.Description ?? "").ToLowerInvariant();

                // 1. Purchase Returns: Always classify by TransactionType == PurchaseReturn (never by description keywords)
                if (t.TransactionType == FinancialTransactionType.PurchaseReturn)
                {
                    if (t.PaymentMethod == PaymentMethod.Wallet)
                    {
                        string desc = !string.IsNullOrWhiteSpace(t.Description) ? t.Description : "Purchase Return";
                        return ("PURCHASE RETURN", desc, t.Amount, 0m, false);
                    }
                    else
                    {
                        // Historical cash/bank purchase return (e.g. Lufthansa #44)
                        mappedDict.TryGetValue(t.Id, out var mt);
                        string destName = mt?.DestinationBankName ?? mt?.DestinationAccountName ?? (t.PaymentMethod == PaymentMethod.Cash ? "Cash" : "Bank");
                        string narrative = t.PaymentMethod == PaymentMethod.Cash
                            ? $"Purchase Return - refunded to Cash ({destName})"
                            : $"Purchase Return - refunded to Bank ({destName})";
                        return ("PURCHASE RETURN", narrative, 0m, 0m, true);
                    }
                }

                // 2. True supplier refund / withdrawal (money taken out of supplier wallet back to Texas bank/cash)
                bool isSupplierWithdrawal = refTypeLower.Contains("supplier_refund") || refTypeLower.Contains("supplierrefund") ||
                                           (descLower.Contains("supplier refund") && !descLower.Contains("purchase return"));

                if (isSupplierWithdrawal)
                {
                    return ("WALLET WITHDRAWAL", t.Description ?? "Supplier Refund Withdrawal", 0m, t.Amount, false);
                }

                // 3. Wallet / Credit usages for bookings
                bool isWalletUsage = t.PaymentMethod == PaymentMethod.Wallet || t.PaymentMethod == PaymentMethod.Credit;

                if (isWalletUsage)
                {
                    string cls = t.PaymentMethod == PaymentMethod.Credit ? "CREDIT PAYMENT" : "WALLET USAGE";
                    return (cls, t.Description ?? cls, 0m, t.Amount, false);
                }

                // 4. Wallet Top-ups & Settlements
                bool isWalletTopup = refTypeLower.Contains("wallet") || refTypeLower.Contains("advance") ||
                                     descLower.Contains("wallet top-up") || descLower.Contains("wallet deposit") || descLower.Contains("prepaid deposit");

                bool isCreditClearance = refTypeLower.Contains("credit") || descLower.Contains("credit clear") || descLower.Contains("credit debt");

                if (isWalletTopup)
                {
                    return ("WALLET TOP-UP", t.Description ?? "Wallet Top-up", t.Amount, 0m, false);
                }
                else if (isCreditClearance)
                {
                    return ("CREDIT SETTLEMENT", t.Description ?? "Credit Settlement", t.Amount, 0m, false);
                }
                else if (refTypeLower.Contains("visa") || refTypeLower.Contains("flight") || refTypeLower.Contains("hotel") ||
                         refTypeLower.Contains("holiday") || refTypeLower.Contains("trans") || refTypeLower.Contains("other") ||
                         refTypeLower.Contains("booking"))
                {
                    return ("BOOKING PAYMENT", t.Description ?? "Booking Payment", 0m, t.Amount, false);
                }
                else
                {
                    return ("SUPPLIER PAYMENT", t.Description ?? "Supplier Payment", t.Amount, 0m, false);
                }
            }

            // Calculate opening balance prior to startDate
            // Opening balance is NEVER derived from the current wallet
            decimal openingBalance = 0m;
            if (start.HasValue)
            {
                foreach (var t in allTxs.Where(t => t.CreatedAt < start.Value))
                {
                    var (_, _, dep, use, isInfo) = ClassifyMovement(t);
                    if (!isInfo)
                    {
                        openingBalance += (dep - use);
                    }
                }
            }

            // Filter period transactions
            var periodQuery = allTxs.AsEnumerable();
            if (start.HasValue) periodQuery = periodQuery.Where(t => t.CreatedAt >= start.Value);
            if (end.HasValue) periodQuery = periodQuery.Where(t => t.CreatedAt <= end.Value.AddDays(1).AddTicks(-1));
            var periodTxs = periodQuery.OrderBy(t => t.CreatedAt).ThenBy(t => t.Id).ToList();

            // Statement Columns
            model.Table.Columns = new List<DocumentColumn>
            {
                new() { Header = "DATE", RelativeWidth = 1.1f, Alignment = ColumnAlignment.Center },
                new() { Header = "DOC NO.", RelativeWidth = 1.3f, IsMonoFont = true },
                new() { Header = "CLASSIFICATION", RelativeWidth = 1.5f, IsBold = true },
                new() { Header = "APPLICATION / NARRATIVE", RelativeWidth = 3.0f },
                new() { Header = "METHOD / ACCOUNT", RelativeWidth = 1.8f },
                new() { Header = "DEPOSIT (+)", RelativeWidth = 1.2f, Alignment = ColumnAlignment.Right, IsBold = true, CustomColor = "#059669" },
                new() { Header = "USAGE (-)", RelativeWidth = 1.2f, Alignment = ColumnAlignment.Right, IsBold = true, CustomColor = "#dc2626" },
                new() { Header = "RUNNING BAL", RelativeWidth = 1.3f, Alignment = ColumnAlignment.Right, IsBold = true, CustomColor = "#1b2559" }
            };

            // Opening Balance Row
            decimal runningBalance = openingBalance;
            model.Table.Rows.Add(new List<string>
            {
                start.HasValue ? start.Value.ToString("dd/MM/yyyy") : "-",
                "-",
                "OPENING BALANCE",
                "Balance Brought Forward",
                "-",
                "-",
                "-",
                runningBalance.ToString("0.000")
            });

            decimal periodDeposits = 0m;
            decimal periodUsages = 0m;

            foreach (var t in periodTxs)
            {
                var (classification, narrative, deposit, usage, isInfo) = ClassifyMovement(t);
                if (!isInfo)
                {
                    runningBalance += (deposit - usage);
                    periodDeposits += deposit;
                    periodUsages += usage;
                }

                mappedDict.TryGetValue(t.Id, out var mt);
                var methodDetail = mt?.PaymentMethodName ?? t.PaymentMethod.ToString().ToUpper();
                var modeName = mt?.SourceBankName ?? mt?.DestinationBankName ?? mt?.SourceAccountName ?? mt?.DestinationAccountName;
                var fullMethod = !string.IsNullOrWhiteSpace(modeName) ? $"{methodDetail} ({modeName})" : methodDetail;

                string appRef = narrative;
                if (string.IsNullOrWhiteSpace(appRef))
                {
                    if (!string.IsNullOrWhiteSpace(mt?.ReferenceDisplayName) && !mt.ReferenceDisplayName.StartsWith("SUPPLIER PAYMENT #", StringComparison.OrdinalIgnoreCase))
                    {
                        appRef = mt.ReferenceDisplayName;
                    }
                    else if (!string.IsNullOrWhiteSpace(t.ReferenceId))
                    {
                        appRef = $"{t.ReferenceType} #{t.ReferenceId}";
                    }
                    else
                    {
                        appRef = classification;
                    }
                }

                model.Table.Rows.Add(new List<string>
                {
                    t.CreatedAt.ToString("dd/MM/yyyy HH:mm"),
                    mt?.DocumentNumber ?? t.DocumentNumber ?? $"#{t.Id}",
                    classification,
                    appRef,
                    fullMethod,
                    isInfo ? "0.000" : (deposit > 0 ? deposit.ToString("0.000") : "-"),
                    isInfo ? "0.000" : (usage > 0 ? usage.ToString("0.000") : "-"),
                    runningBalance.ToString("0.000")
                });
            }

            // Check if closing balance matches supplier.Wallet when range covers present
            bool isEndingPresent = !end.HasValue || end.Value.Date >= DateTime.UtcNow.Date;
            if (isEndingPresent && Math.Abs(runningBalance - supplier.Wallet) >= 0.001m)
            {
                decimal diff = supplier.Wallet - runningBalance;
                if (diff > 0)
                {
                    periodDeposits += diff;
                    runningBalance += diff;
                    model.Table.Rows.Add(new List<string>
                    {
                        DateTime.UtcNow.ToString("dd/MM/yyyy HH:mm"),
                        "ADJUSTMENT",
                        "BALANCE ADJUSTMENT",
                        "Balance adjustment (legacy)",
                        "System Adjustment",
                        diff.ToString("0.000"),
                        "-",
                        runningBalance.ToString("0.000")
                    });
                }
                else
                {
                    decimal absDiff = Math.Abs(diff);
                    periodUsages += absDiff;
                    runningBalance -= absDiff;
                    model.Table.Rows.Add(new List<string>
                    {
                        DateTime.UtcNow.ToString("dd/MM/yyyy HH:mm"),
                        "ADJUSTMENT",
                        "BALANCE ADJUSTMENT",
                        "Balance adjustment (legacy)",
                        "System Adjustment",
                        "-",
                        absDiff.ToString("0.000"),
                        runningBalance.ToString("0.000")
                    });
                }
            }

            model.Table.TotalRow = new List<string>
            {
                "TOTALS",
                $"{periodTxs.Count} Entries",
                "Total Movements",
                "-",
                "-",
                periodDeposits.ToString("0.000"),
                periodUsages.ToString("0.000"),
                runningBalance.ToString("0.000")
            };



            // Summary Cards (cleanly proportioned across the header)

            model.SummaryCards.Add(new DocumentSummaryCard { Label = "Opening Balance", Value = $"{openingBalance:0.000} BHD", Subtext = "Balance brought forward", HighlightColor = "#64748b" });

            model.SummaryCards.Add(new DocumentSummaryCard { Label = "Wallet Top-ups (+)", Value = $"{periodDeposits:0.000} BHD", HighlightColor = "#059669" });

            model.SummaryCards.Add(new DocumentSummaryCard { Label = "Wallet Usages (-)", Value = $"{periodUsages:0.000} BHD", HighlightColor = "#dc2626" });

            string walletStatus = runningBalance > 0 ? "Surplus (Prepaid)" : runningBalance < 0 ? "Outstanding Debt (Payable)" : "Settled";

            string highlightColor = runningBalance > 0 ? "#059669" : runningBalance < 0 ? "#dc2626" : "#64748b";

            string displayValue = runningBalance > 0 ? $"+{runningBalance:0.000} BHD" : $"{runningBalance:0.000} BHD";



            model.SummaryCards.Add(new DocumentSummaryCard { Label = "Current Wallet Balance", Value = displayValue, Subtext = walletStatus, HighlightColor = highlightColor });



            model.MetaData.Add(new KeyValuePair<string, string>("Supplier Code", supplier.Code));

            model.MetaData.Add(new KeyValuePair<string, string>("Wallet Balance", displayValue));

            model.MetaData.Add(new KeyValuePair<string, string>("Standing", walletStatus));



            model.Totals = new DocumentTotals

            {

                NetTotal = runningBalance,

                NetTotalLabel = "Current Wallet Balance",

                Currency = "BHD"

            };



            model.RemarksNote = $"Statement period: {(start.HasValue ? start.Value.ToString("dd/MM/yyyy") : "Inception")} to {(end.HasValue ? end.Value.ToString("dd/MM/yyyy") : "Present")}.";

        }



        return model;

    }

}


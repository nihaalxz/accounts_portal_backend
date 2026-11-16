using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Contracts.Transactions;
using TexasAccountsPortal.Contracts.Reporting;
using TexasAccountsPortal.Domain.Entities;
using TexasAccountsPortal.Domain.Enums;

namespace TexasAccountsPortal.Api.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/reconciliation")]
    public class ReconciliationController : ApiControllerBase
    {
        private readonly IAccountsDbContext _dbContext;
        private readonly IDbContextFactory<TexasAccountsPortal.Infrastructure.Data.AccountsDbContext>? _dbContextFactory;
        private readonly ITransactionPresentationMapper? _presentationMapper;

        public ReconciliationController(
            IAccountsDbContext dbContext,
            IDbContextFactory<TexasAccountsPortal.Infrastructure.Data.AccountsDbContext>? dbContextFactory = null,
            ITransactionPresentationMapper? presentationMapper = null)
        {
            _dbContext = dbContext;
            _dbContextFactory = dbContextFactory;
            _presentationMapper = presentationMapper;
        }

        [HttpGet("summary")]
        [Authorize(Policy = "RequireAccountant")]
        public async Task<ActionResult<ReconciliationSummaryResponse>> GetSummary()
        {
            decimal totalBankBalance;
            decimal totalAccountBalance;
            decimal totalSupplierNetBalance;
            decimal totalSupplierSurplusBalance;
            decimal totalSupplierPayableBalance;

            if (_dbContextFactory == null)
            {
                totalBankBalance = await _dbContext.Banks
                    .Where(b => b.IsActive)
                    .SumAsync(b => b.CurrentBalance);

                totalAccountBalance = await _dbContext.Accounts
                    .Where(a => a.IsActive)
                    .SumAsync(a => a.CurrentBalance);

                totalSupplierNetBalance = await _dbContext.Suppliers
                    .Where(s => s.DeletedAt == null)
                    .SumAsync(s => (decimal?)s.Wallet) ?? 0m;

                totalSupplierSurplusBalance = await _dbContext.Suppliers
                    .Where(s => s.DeletedAt == null && s.Wallet > 0m)
                    .SumAsync(s => (decimal?)s.Wallet) ?? 0m;

                totalSupplierPayableBalance = await _dbContext.Suppliers
                    .Where(s => s.DeletedAt == null && s.Wallet < 0m)
                    .SumAsync(s => (decimal?)-s.Wallet) ?? 0m;
            }
            else
            {
                using var scope = _dbContextFactory.CreateDbContext();

                totalBankBalance = await scope.Banks.Where(b => b.IsActive).SumAsync(b => b.CurrentBalance);
                totalAccountBalance = await scope.Accounts.Where(a => a.IsActive).SumAsync(a => a.CurrentBalance);
                totalSupplierNetBalance = await scope.Suppliers.Where(s => s.DeletedAt == null).SumAsync(s => (decimal?)s.Wallet) ?? 0m;
                totalSupplierSurplusBalance = await scope.Suppliers.Where(s => s.DeletedAt == null && s.Wallet > 0m).SumAsync(s => (decimal?)s.Wallet) ?? 0m;
                totalSupplierPayableBalance = await scope.Suppliers.Where(s => s.DeletedAt == null && s.Wallet < 0m).SumAsync(s => (decimal?)-s.Wallet) ?? 0m;
            }

            return Ok(new ReconciliationSummaryResponse(
                totalBankBalance,
                totalAccountBalance,
                totalSupplierNetBalance,
                totalSupplierSurplusBalance,
                totalSupplierPayableBalance
            ));
        }

        [HttpGet("supplier-statement/{supplierId}")]
        [Authorize(Policy = "RequireAccountant")]
        public async Task<ActionResult<IEnumerable<TransactionResponse>>> GetSupplierStatement(
            long supplierId,
            [FromQuery] DateTime? startDate,
            [FromQuery] DateTime? endDate,
            [FromQuery] int page = 1,
            [FromQuery] int pageSize = 20)
        {
            pageSize = Math.Clamp(pageSize, 1, 1000);
            page = Math.Max(1, page);

            var query = _dbContext.Transactions
                .AsNoTracking()
                .Where(t => t.SupplierId == supplierId);

            if (startDate.HasValue)
            {
                query = query.Where(t => t.CreatedAt >= startDate.Value);
            }

            if (endDate.HasValue)
            {
                query = query.Where(t => t.CreatedAt <= endDate.Value);
            }

            var rawItems = await query
                .OrderByDescending(t => t.CreatedAt)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();

            if (_presentationMapper != null)
            {
                var mappedItems = await _presentationMapper.MapToResponsesAsync(rawItems, ct: HttpContext.RequestAborted);
                return Ok(mappedItems);
            }

            var items = rawItems.Select(t => new TransactionResponse(
                t.Id,
                t.TransactionType.ToString().ToLower(),
                t.SourceAccountId,
                t.DestinationAccountId,
                t.SourceBankId,
                t.DestinationBankId,
                t.Amount,
                t.BalanceAfter,
                t.PaymentMethod.ToString().ToLower(),
                t.ReferenceType.HasValue ? t.ReferenceType.Value.ToString().ToLower() : null,
                t.ReferenceId,
                t.Description,
                t.Status.ToString().ToLower(),
                t.ApprovedBy,
                t.ApprovedAt,
                t.RejectedBy,
                t.RejectedAt,
                t.ReturnReason,
                t.SupplierId,
                t.SupplierName,
                t.ExpenseHeaderId,
                t.CreatedBy,
                t.CreatedAt
            )).ToList();

            return Ok(items);
        }

        [HttpGet("gl-reconciliation")]
        [Authorize(Policy = "RequireAccountant")]
        public async Task<ActionResult<GlReconciliationReportResponse>> GetGlReconciliation()
        {
            // 1. Fetch approved/posted transactions and expenses
            var approvedTxns = await _dbContext.Transactions
                .AsNoTracking()
                .Where(t => t.Status == FinancialTransactionStatus.Approved)
                .ToListAsync();

            var postedExpenses = await _dbContext.Expenses
                .AsNoTracking()
                .Where(e => e.Status == ExpenseStatus.Approved || e.Status == ExpenseStatus.Posted)
                .ToListAsync();

            // 2. Fetch matching journal entries to find missing ones
            var txnIds = approvedTxns.Select(t => t.Id.ToString()).ToList();
            var expIds = postedExpenses.Select(e => e.Id.ToString()).ToList();
            var allIds = txnIds.Concat(expIds).Distinct().ToList();

            var matchingJournals = await _dbContext.JournalEntries
                .AsNoTracking()
                .Where(j => j.SourceId != null && allIds.Contains(j.SourceId))
                .Select(j => new { j.SourceType, j.SourceId })
                .ToListAsync();

            var journalSet = new HashSet<(string SourceType, string SourceId)>(
                matchingJournals.Select(j => (j.SourceType ?? "", j.SourceId ?? ""))
            );

            var missingJournals = new List<MissingJournalItem>();

            foreach (var tx in approvedTxns)
            {
                var key = (tx.TransactionType.ToString(), tx.Id.ToString());
                if (!journalSet.Contains(key))
                {
                    missingJournals.Add(new MissingJournalItem(
                        OriginType: tx.TransactionType.ToString(),
                        Id: tx.Id,
                        Reference: tx.ReferenceId ?? tx.Id.ToString(),
                        Amount: tx.Amount,
                        Date: tx.CreatedAt,
                        Status: tx.Status.ToString()
                    ));
                }
            }

            foreach (var exp in postedExpenses)
            {
                var key = ("Expense", exp.Id.ToString());
                if (!journalSet.Contains(key))
                {
                    missingJournals.Add(new MissingJournalItem(
                        OriginType: "Expense",
                        Id: exp.Id,
                        Reference: exp.ExpenseNumber ?? exp.Id.ToString(),
                        Amount: exp.Amount,
                        Date: exp.ExpenseDate,
                        Status: exp.Status.ToString()
                    ));
                }
            }

            // 3. Find unbalanced journal entries (total debits != total credits)
            var journalsWithBalances = await _dbContext.JournalEntries
                .AsNoTracking()
                .Select(j => new
                {
                    JournalId = j.Id,
                    JournalNumber = j.JournalNumber,
                    Description = j.Description,
                    EntryDate = j.EntryDate,
                    TotalDebits = j.Lines.Sum(l => l.Debit),
                    TotalCredits = j.Lines.Sum(l => l.Credit)
                })
                .ToListAsync();

            var unbalancedJournals = journalsWithBalances
                .Where(j => j.TotalDebits != j.TotalCredits)
                .Select(j => new UnbalancedJournalItem(
                    j.JournalId,
                    j.JournalNumber,
                    j.Description ?? "",
                    j.TotalDebits,
                    j.TotalCredits,
                    j.EntryDate
                ))
                .ToList();

            // 4. Find duplicate postings (multiple JournalEntries with same non-null SourceType and SourceId)
            var duplicateGroups = await _dbContext.JournalEntries
                .AsNoTracking()
                .Where(j => j.SourceType != null && j.SourceId != null && j.SourceId != "")
                .GroupBy(j => new { j.SourceType, j.SourceId })
                .Where(g => g.Count() > 1)
                .Select(g => new
                {
                    SourceType = g.Key.SourceType,
                    SourceId = g.Key.SourceId,
                    Count = g.Count(),
                    Details = g.Select(j => new
                    {
                        j.Id,
                        j.JournalNumber,
                        j.EntryDate,
                        DebitSum = j.Lines.Sum(l => l.Debit)
                    }).ToList()
                })
                .ToListAsync();

            var duplicatePostings = duplicateGroups.Select(d => new DuplicatePostingItem(
                SourceType: d.SourceType!,
                SourceId: d.SourceId!,
                Count: d.Count,
                Details: d.Details.Select(details => new DuplicateJournalDetails(
                    details.Id,
                    details.JournalNumber,
                    details.DebitSum,
                    details.EntryDate
                )).ToList()
            )).ToList();

            var isReconciled = !missingJournals.Any() && !unbalancedJournals.Any() && !duplicatePostings.Any();

            return Ok(new GlReconciliationReportResponse(
                missingJournals,
                unbalancedJournals,
                duplicatePostings,
                isReconciled
            ));
        }
    }

    public record ReconciliationSummaryResponse(
        decimal TotalBankBalance,
        decimal TotalAccountBalance,
        decimal TotalSupplierNetBalance,
        decimal TotalSupplierSurplusBalance,
        decimal TotalSupplierPayableBalance
    );
}

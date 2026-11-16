using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Contracts.ChartOfAccounts;
using TexasAccountsPortal.Domain.Entities;
using TexasAccountsPortal.Domain.Enums;

namespace TexasAccountsPortal.Infrastructure.Services
{
    public sealed class ChartOfAccountService : IChartOfAccountService
    {
        private readonly IAccountsDbContext _db;

        public ChartOfAccountService(IAccountsDbContext db)
        {
            _db = db;
        }

        public async Task<ChartOfAccountResponse> CreateAccountAsync(
            CreateChartOfAccountRequest request,
            long actorUserId,
            CancellationToken cancellationToken)
        {
            // 1. Enforce unique account code
            var cleanCode = request.Code.Trim().ToUpperInvariant();
            var codeExists = await _db.ChartOfAccounts
                .AnyAsync(a => a.Code == cleanCode, cancellationToken);
            if (codeExists)
                throw new InvalidOperationException($"Account code '{cleanCode}' is already in use.");

            // 2. Validate and parse Enums
            if (!Enum.TryParse<GlAccountType>(request.AccountType, true, out var parsedAccountType))
                throw new ArgumentException($"Invalid account type '{request.AccountType}'. Must be asset, liability, equity, revenue, or expense.");

            if (!Enum.TryParse<NormalBalance>(request.NormalBalance, true, out var parsedNormalBalance))
                throw new ArgumentException($"Invalid normal balance '{request.NormalBalance}'. Must be debit or credit.");

            // 3. Validate Parent if specified
            if (request.ParentId.HasValue)
            {
                var parent = await _db.ChartOfAccounts
                    .FirstOrDefaultAsync(a => a.Id == request.ParentId.Value, cancellationToken);
                if (parent is null)
                    throw new InvalidOperationException($"Parent account with ID {request.ParentId.Value} not found.");
                if (!parent.IsControlAccount)
                    throw new InvalidOperationException($"Parent account '{parent.Code}' is a posting account. Children can only be nested under control accounts.");
                if (!parent.IsActive)
                    throw new InvalidOperationException($"Parent account '{parent.Code}' is inactive.");
            }

            var account = ChartOfAccount.Create(
                code: cleanCode,
                name: request.Name,
                accountType: parsedAccountType,
                normalBalance: parsedNormalBalance,
                parentId: request.ParentId,
                isControlAccount: request.IsControlAccount,
                isSystemAccount: false, // User created
                description: request.Description,
                createdBy: actorUserId
            );

            _db.Add(account);
            await _db.SaveChangesAsync(cancellationToken);

            return MapToResponse(account);
        }

        public async Task<ChartOfAccountResponse> UpdateAccountAsync(
            long id,
            UpdateChartOfAccountRequest request,
            long actorUserId,
            CancellationToken cancellationToken)
        {
            var account = await _db.ChartOfAccounts
                .FirstOrDefaultAsync(a => a.Id == id, cancellationToken);
            if (account is null)
                throw new KeyNotFoundException($"Chart of Accounts entry with ID {id} not found.");

            // Rename has built-in system account protection
            account.Rename(request.Name, actorUserId);
            
            // Description change via reflection to bypass private/protected setter if any,
            // or directly since setter is private but we set it from service.
            var prop = typeof(ChartOfAccount).GetProperty(nameof(ChartOfAccount.Description));
            if (prop != null && prop.CanWrite)
            {
                prop.SetValue(account, request.Description);
            }

            var updatedTimeProp = typeof(ChartOfAccount).GetProperty(nameof(ChartOfAccount.UpdatedAt));
            if (updatedTimeProp != null && updatedTimeProp.CanWrite)
            {
                updatedTimeProp.SetValue(account, DateTime.UtcNow);
            }

            await _db.SaveChangesAsync(cancellationToken);

            return MapToResponse(account);
        }

        public async Task DeleteAccountAsync(
            long id,
            long actorUserId,
            CancellationToken cancellationToken)
        {
            var account = await _db.ChartOfAccounts
                .FirstOrDefaultAsync(a => a.Id == id, cancellationToken);
            if (account is null)
                throw new KeyNotFoundException($"Chart of Accounts entry with ID {id} not found.");

            if (account.IsSystemAccount)
                throw new InvalidOperationException("System accounts cannot be deleted.");

            // Check if this account is a parent of other accounts
            var hasChildren = await _db.ChartOfAccounts
                .AnyAsync(a => a.ParentId == id, cancellationToken);
            if (hasChildren)
                throw new InvalidOperationException("Cannot delete account because it has child accounts nested under it.");

            // Check if this account has any posted GL entries
            var hasGlEntries = await _db.GeneralLedgerEntries
                .AnyAsync(g => g.AccountId == id, cancellationToken);
            if (hasGlEntries)
                throw new InvalidOperationException("Cannot delete account because it contains posted General Ledger history.");

            _db.Remove(account);
            await _db.SaveChangesAsync(cancellationToken);
        }

        public async Task<ChartOfAccountResponse> GetAccountByIdAsync(
            long id,
            CancellationToken cancellationToken)
        {
            var account = await _db.ChartOfAccounts
                .AsNoTracking()
                .FirstOrDefaultAsync(a => a.Id == id, cancellationToken);
            if (account is null)
                throw new KeyNotFoundException($"Chart of Accounts entry with ID {id} not found.");

            return MapToResponse(account);
        }

        public async Task<List<ChartOfAccountResponse>> GetAccountsListAsync(
            CancellationToken cancellationToken)
        {
            var accounts = await _db.ChartOfAccounts
                .AsNoTracking()
                .OrderBy(a => a.Code)
                .ToListAsync(cancellationToken);

            return accounts.Select(MapToResponse).ToList();
        }

        public async Task SeedSystemAccountsAsync(
            long actorUserId,
            CancellationToken cancellationToken)
        {
            // Seed the initial standard hierarchy if the ChartOfAccounts table is empty
            var existingCount = await _db.ChartOfAccounts.CountAsync(cancellationToken);
            if (existingCount > 0)
                return;

            var seedList = new List<(string Code, string Name, GlAccountType Type, NormalBalance Balance, string? ParentCode, bool IsControl, string Desc)>
            {
                // Assets
                ("1000", "Assets", GlAccountType.Asset, NormalBalance.Debit, null, true, "Root Asset Category"),
                ("1100", "Cash and Bank", GlAccountType.Asset, NormalBalance.Debit, "1000", true, "Cash & Bank Control Group"),
                ("1110", "Petty Cash Control", GlAccountType.Asset, NormalBalance.Debit, "1100", true, "Petty cash control account"),
                ("1111", "General Petty Cash", GlAccountType.Asset, NormalBalance.Debit, "1110", false, "General petty cash posting account"),
                ("1120", "Bank Control", GlAccountType.Asset, NormalBalance.Debit, "1100", true, "Bank control account"),
                ("1121", "General Bank Account", GlAccountType.Asset, NormalBalance.Debit, "1120", false, "General bank posting account"),
                ("1200", "Receivables", GlAccountType.Asset, NormalBalance.Debit, "1000", true, "Receivables Group"),
                ("1210", "Agent Prepay Control", GlAccountType.Asset, NormalBalance.Debit, "1200", true, "Agent prepay control account"),
                ("1211", "General Agent Prepay", GlAccountType.Asset, NormalBalance.Debit, "1210", false, "General agent prepay posting account"),
                ("1220", "Staff Receivables Control", GlAccountType.Asset, NormalBalance.Debit, "1200", true, "Staff receivables control account"),
                ("1221", "Staff Advance Receivable", GlAccountType.Asset, NormalBalance.Debit, "1220", false, "Staff advance receivable posting account"),
                ("1222", "Staff Loan Receivable", GlAccountType.Asset, NormalBalance.Debit, "1220", false, "Staff loan receivable posting account"),

                // Liabilities
                ("2000", "Liabilities", GlAccountType.Liability, NormalBalance.Credit, null, true, "Root Liabilities Category"),
                ("2100", "Payables", GlAccountType.Liability, NormalBalance.Credit, "2000", true, "Payables Group"),
                ("2110", "Supplier Payables Control", GlAccountType.Liability, NormalBalance.Credit, "2100", true, "Supplier prepay control account"),
                ("2111", "General Supplier Payables", GlAccountType.Liability, NormalBalance.Credit, "2110", false, "General supplier posting account"),
                ("2115", "Staff Payroll Payable", GlAccountType.Liability, NormalBalance.Credit, "2100", false, "Staff payroll posting account"),
                ("2120", "Supplier Credit Control", GlAccountType.Liability, NormalBalance.Credit, "2100", true, "Supplier credit control account"),
                ("2121", "General Supplier Credit", GlAccountType.Liability, NormalBalance.Credit, "2120", false, "General supplier credit posting account"),

                // Equity
                ("3000", "Equity", GlAccountType.Equity, NormalBalance.Credit, null, true, "Root Equity Category"),
                ("3100", "Owner's Capital", GlAccountType.Equity, NormalBalance.Credit, "3000", false, "Owner's capital posting account"),

                // Revenue
                ("4000", "Revenue", GlAccountType.Revenue, NormalBalance.Credit, null, true, "Root Revenue Category"),
                ("4100", "Service Revenue", GlAccountType.Revenue, NormalBalance.Credit, "4000", false, "Service revenue posting account"),

                // Expenses
                ("5000", "Expenses", GlAccountType.Expense, NormalBalance.Debit, null, true, "Root Expenses Category"),
                ("5010", "Salary Expense", GlAccountType.Expense, NormalBalance.Debit, "5000", false, "Salary expense posting account"),
                ("5020", "Housing Allowance Expense", GlAccountType.Expense, NormalBalance.Debit, "5000", false, "Housing allowance expense posting account"),
                ("5030", "Transport Allowance Expense", GlAccountType.Expense, NormalBalance.Debit, "5000", false, "Transport allowance expense posting account"),
                ("5040", "Commission Expense", GlAccountType.Expense, NormalBalance.Debit, "5000", false, "Commission expense posting account"),
                ("5050", "Incentive Expense", GlAccountType.Expense, NormalBalance.Debit, "5000", false, "Incentive expense posting account"),
                ("5060", "Reimbursement Expense", GlAccountType.Expense, NormalBalance.Debit, "5000", false, "Reimbursement expense posting account"),
                ("5100", "Supplier Costs", GlAccountType.Expense, NormalBalance.Debit, "5000", true, "Supplier costs group"),
                ("5110", "Flight Booking Costs", GlAccountType.Expense, NormalBalance.Debit, "5100", false, "Flight bookings supplier cost"),
                ("5120", "Visa Application Costs", GlAccountType.Expense, NormalBalance.Debit, "5100", false, "Visa applications supplier cost"),
                ("5130", "Hotel Booking Costs", GlAccountType.Expense, NormalBalance.Debit, "5100", false, "Hotel bookings supplier cost"),
                ("5140", "Holiday Package Costs", GlAccountType.Expense, NormalBalance.Debit, "5100", false, "Holiday packages supplier cost"),
                ("5150", "Other Supplier Costs", GlAccountType.Expense, NormalBalance.Debit, "5100", false, "Other supplier cost"),
                ("5200", "Operating Expenses", GlAccountType.Expense, NormalBalance.Debit, "5000", true, "Operating expenses control group"),
                ("5210", "Office Expenses", GlAccountType.Expense, NormalBalance.Debit, "5200", false, "General office posting expense"),
                ("5220", "Travel Expenses", GlAccountType.Expense, NormalBalance.Debit, "5200", false, "Travel posting expense"),
                ("5230", "Other Operating Expenses", GlAccountType.Expense, NormalBalance.Debit, "5200", false, "Other operating posting expense")
            };

            var createdMap = new Dictionary<string, long>();

            foreach (var item in seedList)
            {
                long? parentId = null;
                if (item.ParentCode != null && createdMap.TryGetValue(item.ParentCode, out var pid))
                {
                    parentId = pid;
                }

                var account = ChartOfAccount.Create(
                    code: item.Code,
                    name: item.Name,
                    accountType: item.Type,
                    normalBalance: item.Balance,
                    parentId: parentId,
                    isControlAccount: item.IsControl,
                    isSystemAccount: true, // Marked as system account
                    description: item.Desc,
                    createdBy: actorUserId
                );

                _db.Add(account);
                await _db.SaveChangesAsync(cancellationToken);

                createdMap[item.Code] = account.Id;
            }
        }

        private static ChartOfAccountResponse MapToResponse(ChartOfAccount account)
        {
            return new ChartOfAccountResponse(
                Id: account.Id,
                Code: account.Code,
                Name: account.Name,
                AccountType: account.AccountType.ToString().ToLowerInvariant(),
                NormalBalance: account.NormalBalance.ToString().ToLowerInvariant(),
                ParentId: account.ParentId,
                IsControlAccount: account.IsControlAccount,
                IsSystemAccount: account.IsSystemAccount,
                IsActive: account.IsActive,
                Description: account.Description,
                CreatedAt: account.CreatedAt
            );
        }
    }
}

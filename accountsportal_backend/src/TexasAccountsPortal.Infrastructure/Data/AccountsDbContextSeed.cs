using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Domain.Entities;
using TexasAccountsPortal.Infrastructure.Options;

namespace TexasAccountsPortal.Infrastructure.Data
{
    public static class AccountsDbContextSeed
    {
        public static async Task SeedAsync(
            IAccountsDbContext dbContext,
            IPasswordHasher passwordHasher,
            BootstrapOptions bootstrapOptions)
        {
            if (bootstrapOptions == null || !bootstrapOptions.Enabled)
            {
                return;
            }

            // 1. Seed Master Accountant
            if (!await dbContext.Users.AnyAsync(u => u.Email == bootstrapOptions.Email))
            {
                var masterUser = new AccountsUser
                {
                    Name = "Bootstrap Master Accountant",
                    Email = bootstrapOptions.Email!,
                    PasswordHash = passwordHasher.HashPassword(bootstrapOptions.Password!),
                    UserType = "master_accountant",
                    PortalPermissions = new List<string> { "all", "manage_banks", "manage_accounts", "post_transactions", "approve_transactions" },
                    IsActive = true
                };
                
                dbContext.Add(masterUser);
                await dbContext.SaveChangesAsync(default);
            }

            // 2. Seed Standard Accountant for normal role testing
            if (!await dbContext.Users.AnyAsync(u => u.Email == "accountant@texas.com"))
            {
                var normalUser = new AccountsUser
                {
                    Name = "Normal Accountant",
                    Email = "accountant@texas.com",
                    PasswordHash = passwordHasher.HashPassword("AccountantPass123!"),
                    UserType = "Accounts",
                    PortalPermissions = new List<string> { "post_transactions" },
                    IsActive = true
                };

                dbContext.Add(normalUser);
                await dbContext.SaveChangesAsync(default);
            }

            // 3. Seed Banks if empty
            if (!await dbContext.Banks.AnyAsync())
            {
                var bank1 = new Bank { BankName = "Primary Operating Bank", AccountNumber = "11210001", CreatedBy = 1, IsActive = true };
                bank1.InitializeBalance(5000.000m);

                var bank2 = new Bank { BankName = "Secondary Savings Bank", AccountNumber = "11210002", CreatedBy = 1, IsActive = true };
                bank2.InitializeBalance(2000.000m);

                dbContext.Add(bank1);
                dbContext.Add(bank2);
                await dbContext.SaveChangesAsync(default);
            }

            // 4. Seed Cash Accounts if empty
            if (!await dbContext.Accounts.AnyAsync())
            {
                var acc1 = new Account { Name = "Office Cash Drawer", Type = Domain.Enums.AccountType.Cash, LedgerType = Domain.Enums.LedgerType.Asset, CreatedBy = 1, IsActive = true };
                acc1.InitializeBalance(1000.000m);

                var acc2 = new Account { Name = "Petty Cash Box", Type = Domain.Enums.AccountType.Cash, LedgerType = Domain.Enums.LedgerType.Asset, CreatedBy = 1, IsActive = true };
                acc2.InitializeBalance(250.000m);

                dbContext.Add(acc1);
                dbContext.Add(acc2);
                await dbContext.SaveChangesAsync(default);
            }

            // 5. Seed Suppliers if empty
            if (!await dbContext.Suppliers.AnyAsync())
            {
                var supplier = new Supplier { Code = "SUP-TEX-01", Name = "Texas Travels Supplier" };
                dbContext.Add(supplier);
                await dbContext.SaveChangesAsync(default);
            }

            // 6. Seed baseline pending/approved transactions if empty
            if (!await dbContext.Transactions.AnyAsync())
            {
                var account = await dbContext.Accounts.FirstAsync();
                var supplier = await dbContext.Suppliers.FirstAsync();

                var txn1 = FinancialTransaction.Create(
                    Domain.Enums.FinancialTransactionType.Incoming,
                    150.000m,
                    Domain.Enums.PaymentMethod.Cash,
                    1,
                    destinationAccountId: account.Id,
                    referenceType: Domain.Enums.TransactionReferenceType.OpeningBalance,
                    referenceId: "REF-INIT-01",
                    description: "Seeded Initial Deposit"
                );
                txn1.Approve(1);

                var txn2 = FinancialTransaction.Create(
                    Domain.Enums.FinancialTransactionType.Outgoing,
                    50.000m,
                    Domain.Enums.PaymentMethod.Cash,
                    1,
                    sourceAccountId: account.Id,
                    supplierId: supplier.Id,
                    supplierName: supplier.Name,
                    referenceType: Domain.Enums.TransactionReferenceType.Expense,
                    referenceId: "REF-PEND-01",
                    description: "Pending Seeded Expense"
                );

                dbContext.Add(txn1);
                dbContext.Add(txn2);
                await dbContext.SaveChangesAsync(default);
            }

            // 7. Seed ExpenseHeaders dynamically from ChartOfAccounts to match IDs
            if (dbContext is DbContext efContext)
            {
                await efContext.Database.ExecuteSqlRawAsync(
                    "SET IDENTITY_INSERT expense_headers ON; " +
                    "INSERT INTO expense_headers (Id, Name, Category, Description, CreatedBy, CreatedAt, UpdatedAt) " +
                    "SELECT Id, Name, AccountType, Description, CreatedBy, CreatedAt, UpdatedAt " +
                    "FROM chart_of_accounts " +
                    "WHERE AccountType = 'expense' AND IsControlAccount = 0 " +
                    "  AND Id NOT IN (SELECT Id FROM expense_headers); " +
                    "SET IDENTITY_INSERT expense_headers OFF;");
            }
        }
    }
}

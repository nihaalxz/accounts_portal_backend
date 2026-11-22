using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TexasAccountsPortal.Domain.Entities;
using TexasAccountsPortal.Domain.Enums;
using TexasAccountsPortal.Infrastructure.Data;
using TexasAccountsPortal.Infrastructure.Services;
using Xunit;

namespace TexasAccountsPortal.UnitTests
{
    public class OperationalProfitLossTests
    {
        [Fact]
        public async Task OperationalProfitAndLoss_ExcludesSalaryPayoutFromOverhead_AndAvoidsDoubleCounting()
        {
            var dbOptions = new DbContextOptionsBuilder<AccountsDbContext>()
                .UseInMemoryDatabase(databaseName: $"PnlTestDb_{Guid.NewGuid()}")
                .Options;

            using var context = new AccountsDbContext(dbOptions);
            var salesPortalClient = new FakeSalesPortalClient();
            var reportingService = new ReportingService(context, salesPortalClient);

            // 1. Seed Expense Headers
            var rentHeader = new ExpenseHeader { Name = "Office Rent", Category = "Expenses" };
            var salaryHeader = new ExpenseHeader { Name = "Staff Salary", Category = "Expenses" };
            context.ExpenseHeaders.AddRange(rentHeader, salaryHeader);
            await context.SaveChangesAsync();

            // 2. Normal approved overhead expense (100 BHD rent)
            var rentExp = Expense.Create(
                expenseNumber: "EXP-RENT-01",
                expenseCategoryId: rentHeader.Id,
                amount: 100m,
                description: "Office rent",
                paymentMethod: PaymentMethod.Bank,
                expenseDate: new DateTime(2026, 11, 14),
                correlationId: "corr-rent-01",
                createdBy: 1L
            );
            rentExp.Submit();
            rentExp.Approve(1L, 0);

            // 3. Mirrored salary payout expense (100 BHD salary payout)
            var salaryExp = Expense.Create(
                expenseNumber: "EXP-SAL-01",
                expenseCategoryId: salaryHeader.Id,
                amount: 100m,
                description: "Salary payout to Employee",
                paymentMethod: PaymentMethod.Cash,
                expenseDate: new DateTime(2026, 11, 14),
                correlationId: "SalaryPayout_1",
                createdBy: 1L
            );
            salaryExp.Submit();
            salaryExp.Approve(1L, 0);

            // 4. Paid SalaryPayment record (100 BHD)
            var salPayment = new SalaryPayment
            {
                SalaryProfileId = 1L,
                NetSalary = 100m,
                BasicSalary = 100m,
                PaymentDate = new DateTime(2026, 11, 14),
                Status = "Paid",
                Remarks = "October Salary"
            };

            context.Expenses.AddRange(rentExp, salaryExp);
            context.SalaryPayments.Add(salPayment);
            await context.SaveChangesAsync();

            // 5. Fetch Operational Profit and Loss for that day
            var pnl = await reportingService.GetOperationalProfitAndLossAsync(
                startDate: new DateTime(2026, 11, 14),
                endDate: new DateTime(2026, 11, 14),
                dealStatus: null,
                salesmanId: null,
                cancellationToken: default
            );

            // 6. Assertions:
            // Overhead must be 100m (rent only), NOT 200m (rent + salary)
            Assert.Equal(100m, pnl.TotalApprovedExpenses);
            // Payroll must be 100m
            Assert.Equal(100m, pnl.TotalPayrollExpenses);
            // Total Operating Expenses must be 200m (100m overhead + 100m payroll)
            Assert.Equal(200m, pnl.TotalOperatingExpenses);
            // Expense items list must contain only Office Rent, never Staff Salary
            Assert.Single(pnl.ExpenseItems);
            Assert.Equal("Office Rent", pnl.ExpenseItems[0].CategoryName);
            Assert.Equal(100m, pnl.ExpenseItems[0].TotalAmount);
        }
    }
}

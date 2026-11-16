using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Xunit;
using TexasAccountsPortal.Contracts.Payroll;
using TexasAccountsPortal.Domain.Entities;
using TexasAccountsPortal.Domain.Enums;
using TexasAccountsPortal.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace TexasAccountsPortal.IntegrationTests
{
    [Collection("DatabaseCollection")]
    public class PayrollIntegrationTests : IClassFixture<SqlServerTestFixture>
    {
        private readonly SqlServerTestFixture _fixture;

        public PayrollIntegrationTests(SqlServerTestFixture fixture)
        {
            _fixture = fixture;
        }

        private Infrastructure.Services.PayrollService CreatePayrollService(AccountsDbContext context)
        {
            var periodRepo = new Infrastructure.Services.AccountingPeriodRepository(context);
            var glPostingService = new Infrastructure.Services.AccountingPostingService(context, periodRepo);
            
            var factory = new TestDbContextFactory(_fixture.GetOptions());
            var recoveryStore = new Infrastructure.Services.IdempotencyRecoveryStore(factory);
            var financialPostingService = new Infrastructure.Services.FinancialPostingService(
                context, 
                new Infrastructure.Data.TransactionalExecutor(context), 
                recoveryStore, 
                new Fakes.TestSalesPortalClient(), 
                glPostingService,
                new DefaultAccountingMappingProvider(context)
            );

            return new Infrastructure.Services.PayrollService(
                context, 
                financialPostingService, 
                periodRepo, 
                new Infrastructure.Services.PayrollCalculationService(),
                new DefaultAccountingMappingProvider(context)
            );
        }

        private class TestDbContextFactory : IDbContextFactory<AccountsDbContext>
        {
            private readonly DbContextOptions<AccountsDbContext> _options;
            public TestDbContextFactory(DbContextOptions<AccountsDbContext> options) => _options = options;
            public AccountsDbContext CreateDbContext() => new AccountsDbContext(_options);
        }

        private async Task SeedPayrollGlAccountsAsync(AccountsDbContext context)
        {
            var coaService = new Infrastructure.Services.ChartOfAccountService(context);
            await coaService.SeedSystemAccountsAsync(1L, default);

            // Fetch parents
            var expensesParent = await context.ChartOfAccounts.FirstAsync(a => a.Code == "5000");
            var liabilitiesParent = await context.ChartOfAccounts.FirstAsync(a => a.Code == "2100");
            var assetsParent = await context.ChartOfAccounts.FirstAsync(a => a.Code == "1000");

            var existingCodes = await context.ChartOfAccounts.Select(a => a.Code).ToListAsync();
            void AddIfMissing(ChartOfAccount account)
            {
                if (!existingCodes.Contains(account.Code))
                {
                    context.Add(account);
                    existingCodes.Add(account.Code);
                }
            }

            // Seed Bank and Cash asset accounts
            var existing1110 = await context.ChartOfAccounts.FirstOrDefaultAsync(a => a.Code == "1110");
            if (existing1110 != null)
            {
                context.Entry(existing1110).Property(x => x.IsControlAccount).CurrentValue = false;
                context.Entry(existing1110).Property(x => x.Name).CurrentValue = "Bank Current Account";
                context.Entry(existing1110).Property(x => x.Description).CurrentValue = "Bank current account";
            }
            else
            {
                var bank = ChartOfAccount.Create(
                    code: "1110",
                    name: "Bank Current Account",
                    accountType: GlAccountType.Asset,
                    normalBalance: NormalBalance.Debit,
                    parentId: assetsParent.Id,
                    isControlAccount: false,
                    isSystemAccount: true,
                    description: "Bank current account",
                    createdBy: 1L
                );
                context.Add(bank);
            }

            var existing1120 = await context.ChartOfAccounts.FirstOrDefaultAsync(a => a.Code == "1120");
            if (existing1120 != null)
            {
                context.Entry(existing1120).Property(x => x.IsControlAccount).CurrentValue = false;
                context.Entry(existing1120).Property(x => x.Name).CurrentValue = "Petty Cash Account";
                context.Entry(existing1120).Property(x => x.Description).CurrentValue = "Petty cash";
            }
            else
            {
                var cash = ChartOfAccount.Create(
                    code: "1120",
                    name: "Petty Cash Account",
                    accountType: GlAccountType.Asset,
                    normalBalance: NormalBalance.Debit,
                    parentId: assetsParent.Id,
                    isControlAccount: false,
                    isSystemAccount: true,
                    description: "Petty cash",
                    createdBy: 1L
                );
                context.Add(cash);
            }

            // Seed Basic Salary Expense
            var basicSalary = ChartOfAccount.Create(
                code: "5010",
                name: "Staff Basic Salaries Expense",
                accountType: GlAccountType.Expense,
                normalBalance: NormalBalance.Debit,
                parentId: expensesParent.Id,
                isControlAccount: false,
                isSystemAccount: true,
                description: "Basic salary",
                createdBy: 1L
            );
            AddIfMissing(basicSalary);

            // Seed Housing Allowance Expense
            var housing = ChartOfAccount.Create(
                code: "5020",
                name: "Staff Housing Allowances Expense",
                accountType: GlAccountType.Expense,
                normalBalance: NormalBalance.Debit,
                parentId: expensesParent.Id,
                isControlAccount: false,
                isSystemAccount: true,
                description: "Housing allowance",
                createdBy: 1L
            );
            AddIfMissing(housing);

            // Seed Transport Allowance Expense
            var transport = ChartOfAccount.Create(
                code: "5030",
                name: "Staff Transport Allowances Expense",
                accountType: GlAccountType.Expense,
                normalBalance: NormalBalance.Debit,
                parentId: expensesParent.Id,
                isControlAccount: false,
                isSystemAccount: true,
                description: "Transport allowance",
                createdBy: 1L
            );
            AddIfMissing(transport);

            // Seed Commission Expense
            var commissionExp = ChartOfAccount.Create(
                code: "5040",
                name: "Staff Commissions Expense",
                accountType: GlAccountType.Expense,
                normalBalance: NormalBalance.Debit,
                parentId: expensesParent.Id,
                isControlAccount: false,
                isSystemAccount: true,
                description: "Commission expense",
                createdBy: 1L
            );
            AddIfMissing(commissionExp);

            // Seed Incentive Expense
            var incentiveExp = ChartOfAccount.Create(
                code: "5050",
                name: "Staff Incentives Expense",
                accountType: GlAccountType.Expense,
                normalBalance: NormalBalance.Debit,
                parentId: expensesParent.Id,
                isControlAccount: false,
                isSystemAccount: true,
                description: "Incentive expense",
                createdBy: 1L
            );
            AddIfMissing(incentiveExp);

            // Seed Bonus / Reimbursements Expense
            var bonus = ChartOfAccount.Create(
                code: "5060",
                name: "Staff Bonuses/Reimbursements Expense",
                accountType: GlAccountType.Expense,
                normalBalance: NormalBalance.Debit,
                parentId: expensesParent.Id,
                isControlAccount: false,
                isSystemAccount: true,
                description: "Bonuses and reimbursements",
                createdBy: 1L
            );
            AddIfMissing(bonus);

            // Seed Salary Payable
            var existing2110 = await context.ChartOfAccounts.FirstOrDefaultAsync(a => a.Code == "2110");
            if (existing2110 != null)
            {
                context.Entry(existing2110).Property(x => x.IsControlAccount).CurrentValue = false;
                context.Entry(existing2110).Property(x => x.Name).CurrentValue = "Salary Payable";
                context.Entry(existing2110).Property(x => x.Description).CurrentValue = "Salary payable";
            }
            else
            {
                var salaryPayable = ChartOfAccount.Create(
                    code: "2110",
                    name: "Salary Payable",
                    accountType: GlAccountType.Liability,
                    normalBalance: NormalBalance.Credit,
                    parentId: liabilitiesParent.Id,
                    isControlAccount: false,
                    isSystemAccount: true,
                    description: "Salary payable",
                    createdBy: 1L
                );
                context.Add(salaryPayable);
            }

            // Seed Staff Payroll Payable
            var payable = ChartOfAccount.Create(
                code: "2115",
                name: "Staff Payroll Payable",
                accountType: GlAccountType.Liability,
                normalBalance: NormalBalance.Credit,
                parentId: liabilitiesParent.Id,
                isControlAccount: false,
                isSystemAccount: true,
                description: "Payroll payable",
                createdBy: 1L
            );
            AddIfMissing(payable);

            await context.SaveChangesAsync();

            // Seed Staff Receivables (Advance and Loan)
            var receivablesGroup = await context.ChartOfAccounts.FirstAsync(a => a.Code == "1200");
            
            var staffReceivablesControl = ChartOfAccount.Create(
                code: "1220",
                name: "Staff Receivables Control",
                accountType: GlAccountType.Asset,
                normalBalance: NormalBalance.Debit,
                parentId: receivablesGroup.Id,
                isControlAccount: true,
                isSystemAccount: true,
                description: "Staff receivables control",
                createdBy: 1L
            );
            AddIfMissing(staffReceivablesControl);
            await context.SaveChangesAsync();

            var advanceReceivable = ChartOfAccount.Create(
                code: "1221",
                name: "Staff Advances Receivable",
                accountType: GlAccountType.Asset,
                normalBalance: NormalBalance.Debit,
                parentId: staffReceivablesControl.Id,
                isControlAccount: false,
                isSystemAccount: true,
                description: "Staff advances",
                createdBy: 1L
            );
            AddIfMissing(advanceReceivable);

            var loanReceivable = ChartOfAccount.Create(
                code: "1222",
                name: "Staff Loans Receivable",
                accountType: GlAccountType.Asset,
                normalBalance: NormalBalance.Debit,
                parentId: staffReceivablesControl.Id,
                isControlAccount: false,
                isSystemAccount: true,
                description: "Staff loans",
                createdBy: 1L
            );
            AddIfMissing(loanReceivable);

            await context.SaveChangesAsync();
        }

        [Fact]
        public async Task CreateComponent_Succeeds_WhenGlAccountExists()
        {
            await _fixture.ResetDatabaseAsync();
            using var context = _fixture.CreateContext();
            await SeedPayrollGlAccountsAsync(context);

            var service = CreatePayrollService(context);

            var request = new CreateSalaryComponentRequest(
                Code: "BONUS_CUSTOM",
                Name: "Custom Bonus Component",
                Type: "Earning",
                GlAccountCode: "5060"
            );

            var result = await service.CreateComponentAsync(request, actorUserId: 1L, default);

            Assert.NotNull(result);
            Assert.Equal("BONUS_CUSTOM", result.Code);
            Assert.Equal("Custom Bonus Component", result.Name);
            Assert.Equal("Earning", result.Type);
            Assert.Equal("5060", result.GlAccountCode);
            Assert.False(result.IsSystem);
            Assert.True(result.IsActive);
        }

        [Fact]
        public async Task CreateComponent_Throws_WhenGlAccountDoesNotExist()
        {
            await _fixture.ResetDatabaseAsync();
            using var context = _fixture.CreateContext();
            var service = CreatePayrollService(context);

            var request = new CreateSalaryComponentRequest(
                Code: "BONUS_INVALID",
                Name: "Custom Bonus Component",
                Type: "Earning",
                GlAccountCode: "999999" // Non-existent
            );

            await Assert.ThrowsAsync<InvalidOperationException>(() =>
                service.CreateComponentAsync(request, actorUserId: 1L, default));
        }

        [Fact]
        public async Task CreateComponent_EnforcesUniqueCode()
        {
            await _fixture.ResetDatabaseAsync();
            using var context = _fixture.CreateContext();
            await SeedPayrollGlAccountsAsync(context);

            var service = CreatePayrollService(context);

            var request1 = new CreateSalaryComponentRequest(
                Code: "BONUS_DUPLICATE",
                Name: "Bonus 1",
                Type: "Earning",
                GlAccountCode: "5060"
            );
            await service.CreateComponentAsync(request1, 1L, default);

            var request2 = new CreateSalaryComponentRequest(
                Code: "bonus_duplicate",
                Name: "Bonus 2",
                Type: "Earning",
                GlAccountCode: "5060"
            );

            await Assert.ThrowsAsync<InvalidOperationException>(() =>
                service.CreateComponentAsync(request2, 1L, default));
        }

        [Fact]
        public async Task UpdateComponent_UpdatesFields_ForNonSystemComponent()
        {
            await _fixture.ResetDatabaseAsync();
            using var context = _fixture.CreateContext();
            await SeedPayrollGlAccountsAsync(context);

            var service = CreatePayrollService(context);

            var created = await service.CreateComponentAsync(new CreateSalaryComponentRequest("MY_EARN", "My Earning", "Earning", "5010"), 1L, default);

            var updateReq = new UpdateSalaryComponentRequest("Updated Name", "5020");
            var updated = await service.UpdateComponentAsync(created.Id, updateReq, 1L, default);

            Assert.Equal("Updated Name", updated.Name);
            Assert.Equal("5020", updated.GlAccountCode);
        }

        [Fact]
        public async Task UpdateComponent_Throws_ForSystemComponent()
        {
            await _fixture.ResetDatabaseAsync();
            using var context = _fixture.CreateContext();
            var service = CreatePayrollService(context);

            var sysComponent = new SalaryComponent
            {
                Code = "BASIC_SALARY",
                Name = "Basic Salary",
                Type = ComponentType.Earning,
                GlAccountCode = "5010",
                IsSystem = true,
                IsActive = true
            };
            context.Add(sysComponent);
            await context.SaveChangesAsync();

            var updateReq = new UpdateSalaryComponentRequest("New Name", "5010");

            await Assert.ThrowsAsync<InvalidOperationException>(() =>
                service.UpdateComponentAsync(sysComponent.Id, updateReq, 1L, default));
        }

        [Fact]
        public async Task DeactivateComponent_Succeeds_ForNonSystemComponent()
        {
            await _fixture.ResetDatabaseAsync();
            using var context = _fixture.CreateContext();
            await SeedPayrollGlAccountsAsync(context);

            var service = CreatePayrollService(context);

            var created = await service.CreateComponentAsync(new CreateSalaryComponentRequest("MY_EARN", "My Earning", "Earning", "5010"), 1L, default);

            var deactivated = await service.DeactivateComponentAsync(created.Id, 1L, default);
            Assert.False(deactivated.IsActive);

            var activated = await service.ActivateComponentAsync(created.Id, 1L, default);
            Assert.True(activated.IsActive);
        }

        [Fact]
        public async Task CreatePeriod_Succeeds_AndEnforcesNoOverlaps()
        {
            await _fixture.ResetDatabaseAsync();
            using var context = _fixture.CreateContext();
            var service = CreatePayrollService(context);

            var period1 = await service.CreatePeriodAsync(new CreatePayrollPeriodRequest(
                Month: 1,
                Year: 2026,
                StartDate: new DateTime(2026, 1, 1),
                EndDate: new DateTime(2026, 1, 31)
            ), 1L, default);

            Assert.NotNull(period1);
            Assert.Equal(1, period1.Month);
            Assert.Equal(2026, period1.Year);

            var overlapRequest = new CreatePayrollPeriodRequest(
                Month: 2,
                Year: 2026,
                StartDate: new DateTime(2026, 1, 15),
                EndDate: new DateTime(2026, 2, 15)
            );

            await Assert.ThrowsAsync<InvalidOperationException>(() =>
                service.CreatePeriodAsync(overlapRequest, 1L, default));
        }

        [Fact]
        public async Task ClosePeriod_Succeeds()
        {
            await _fixture.ResetDatabaseAsync();
            using var context = _fixture.CreateContext();
            var service = CreatePayrollService(context);

            var period = await service.CreatePeriodAsync(new CreatePayrollPeriodRequest(
                Month: 1,
                Year: 2026,
                StartDate: new DateTime(2026, 1, 1),
                EndDate: new DateTime(2026, 1, 31)
            ), 1L, default);

            var closed = await service.ClosePeriodAsync(period.Id, 1L, default);
            Assert.True(closed.IsClosed);
        }

        [Fact]
        public async Task CreateCompensationProfile_Succeeds_AndEnforcesNoOverlaps()
        {
            await _fixture.ResetDatabaseAsync();
            using var context = _fixture.CreateContext();
            await SeedPayrollGlAccountsAsync(context);

            var service = CreatePayrollService(context);

            var staff = new StaffProfile
            {
                Id = 12345L,
                Name = "John Doe",
                Email = "john@example.com",
                UserType = "Salesman",
                BasicSalary = 3000,
                HousingAllowance = 500,
                TransportAllowance = 200,
                IsActive = true
            };
            context.Add(staff);

            var basicComp = await service.CreateComponentAsync(new CreateSalaryComponentRequest("BASIC_SALARY", "Basic Salary", "Earning", "5010"), 1L, default);
            await context.SaveChangesAsync();

            var req = new CreateStaffCompensationProfileRequest(
                StaffId: 12345L,
                EffectiveFrom: new DateTime(2026, 1, 1),
                EffectiveTo: new DateTime(2026, 6, 30),
                Components: new List<CompensationComponentRequest>
                {
                    new CompensationComponentRequest(basicComp.Id, 3000)
                }
            );

            var profile = await service.CreateCompensationProfileAsync(req, 1L, default);
            Assert.NotNull(profile);
            Assert.Single(profile.Components);

            var retrieved = await service.GetCompensationProfileAsync(12345L, new DateTime(2026, 3, 15), default);
            Assert.NotNull(retrieved);
            Assert.Equal(profile.Id, retrieved.Id);

            var overlapReq = new CreateStaffCompensationProfileRequest(
                StaffId: 12345L,
                EffectiveFrom: new DateTime(2026, 5, 1),
                EffectiveTo: new DateTime(2026, 12, 31),
                Components: new List<CompensationComponentRequest>
                {
                    new CompensationComponentRequest(basicComp.Id, 3200)
                }
            );

            await Assert.ThrowsAsync<InvalidOperationException>(() =>
                service.CreateCompensationProfileAsync(overlapReq, 1L, default));
        }

        [Fact]
        public async Task RequestAndDisburseAdvance_UpdatesBalanceAndLedger()
        {
            await _fixture.ResetDatabaseAsync();
            using var context = _fixture.CreateContext();
            await SeedPayrollGlAccountsAsync(context);

            var service = CreatePayrollService(context);

            var staff = new StaffProfile
            {
                Id = 999L,
                Name = "Jane Smith",
                Email = "jane@example.com",
                UserType = "Operations",
                BasicSalary = 4000,
                IsActive = true
            };
            context.Add(staff);

            // Construct and initialize Bank
            var bank = new Bank
            {
                BankName = "Test Bank",
                AccountNumber = "123456",
                CreatedBy = 1L
            };
            bank.InitializeBalance(5000);
            context.Add(bank);

            // Construct and initialize AccountingPeriod correctly
            var today = DateTime.UtcNow;
            var startOfMonth = new DateTime(today.Year, today.Month, 1);
            var endOfMonth = startOfMonth.AddMonths(1).AddDays(-1);
            var accountingPeriod = AccountingPeriod.Create(
                name: $"{today:MMMM yyyy}",
                fiscalYear: today.Year,
                periodNumber: today.Month,
                startDate: startOfMonth,
                endDate: endOfMonth
            );
            context.Add(accountingPeriod);

            await context.SaveChangesAsync();

            var req = new RequestStaffAdvanceRequest(
                StaffId: 999L,
                StaffName: "Jane Smith",
                Amount: 1500,
                SourceAccountId: null,
                SourceBankId: bank.Id,
                PaymentMethod: "BankTransfer",
                ReferenceNumber: "ADV-999",
                Notes: "Salary Advance"
            );

            var response = await service.RequestAdvanceAsync(req, 1L, default);
            Assert.NotNull(response);
            Assert.Equal("Pending", response.Status);
            Assert.Equal(0, response.OutstandingBalance);

            var disbursed = await service.DisburseAdvanceAsync(response.Id, 1L, default);
            Assert.NotNull(disbursed);
            Assert.Equal("Disbursed", disbursed.Status);
            Assert.Equal(1500, shortcutGetOutstandingAdvance(context, response.Id));

            var dbBank = await context.Banks.FindAsync(bank.Id);
            Assert.NotNull(dbBank);
            Assert.Equal(3500, dbBank.CurrentBalance);
        }

        [Fact]
        public async Task RequestAndDisburseLoan_UpdatesBalanceAndSchedules()
        {
            await _fixture.ResetDatabaseAsync();
            using var context = _fixture.CreateContext();
            await SeedPayrollGlAccountsAsync(context);

            var service = CreatePayrollService(context);

            var staff = new StaffProfile
            {
                Id = 888L,
                Name = "Bob Builder",
                Email = "bob@example.com",
                UserType = "Contractor",
                BasicSalary = 5000,
                IsActive = true
            };
            context.Add(staff);

            // Construct and initialize Bank
            var bank = new Bank
            {
                BankName = "Test Bank 2",
                AccountNumber = "987654",
                CreatedBy = 1L
            };
            bank.InitializeBalance(10000);
            context.Add(bank);

            // Construct and initialize AccountingPeriod correctly
            var today = DateTime.UtcNow;
            var startOfMonth = new DateTime(today.Year, today.Month, 1);
            var endOfMonth = startOfMonth.AddMonths(1).AddDays(-1);
            var accountingPeriod = AccountingPeriod.Create(
                name: $"{today:MMMM yyyy}",
                fiscalYear: today.Year,
                periodNumber: today.Month,
                startDate: startOfMonth,
                endDate: endOfMonth
            );
            context.Add(accountingPeriod);

            await context.SaveChangesAsync();

            var req = new RequestStaffLoanRequest(
                StaffId: 888L,
                StaffName: "Bob Builder",
                PrincipalAmount: 2000,
                Month: today.Month,
                Year: today.Year,
                SourceAccountId: null,
                SourceBankId: bank.Id,
                PaymentMethod: "BankTransfer",
                ReferenceNumber: "LN-888",
                Notes: "Emergency Loan",
                Schedules: new List<LoanRepaymentScheduleRequest>
                {
                    new LoanRepaymentScheduleRequest(today.AddMonths(1), 1000),
                    new LoanRepaymentScheduleRequest(today.AddMonths(2), 1000)
                }
            );

            var response = await service.RequestLoanAsync(req, 1L, default);
            Assert.NotNull(response);
            Assert.Equal("Pending", response.Status);

            var disbursed = await service.DisburseLoanAsync(response.Id, 1L, default);
            Assert.NotNull(disbursed);
            Assert.Equal("Active", disbursed.Status);
            Assert.Equal(2000, shortcutGetOutstandingLoan(context, response.Id));
            Assert.Equal(2, disbursed.Schedules.Count);
            Assert.All(disbursed.Schedules, s => Assert.Equal("Unpaid", s.Status));

            var dbBank = await context.Banks.FindAsync(bank.Id);
            Assert.NotNull(dbBank);
            Assert.Equal(8000, dbBank.CurrentBalance);
        }

        private decimal shortcutGetOutstandingAdvance(AccountsDbContext context, long advanceId)
        {
            var adv = context.StaffAdvances.AsNoTracking().FirstOrDefault(a => a.Id == advanceId);
            return adv?.OutstandingBalance ?? 0;
        }

        private decimal shortcutGetOutstandingLoan(AccountsDbContext context, long loanId)
        {
            var loan = context.StaffLoans.AsNoTracking().FirstOrDefault(l => l.Id == loanId);
            return loan?.OutstandingBalance ?? 0;
        }

        [Fact]
        public async Task SubmitApproveAndPayReimbursementIndependent_Succeeds()
        {
            await _fixture.ResetDatabaseAsync();
            using var context = _fixture.CreateContext();
            await SeedPayrollGlAccountsAsync(context);

            var service = CreatePayrollService(context);

            // Create Staff Profile
            var staff = new StaffProfile
            {
                Id = 777L,
                Name = "Alice InWonderland",
                Email = "alice@example.com",
                UserType = "Support",
                BasicSalary = 3000,
                IsActive = true
            };
            context.Add(staff);

            // Construct and initialize Bank
            var bank = new Bank
            {
                BankName = "Test Bank 3",
                AccountNumber = "555555",
                CreatedBy = 1L
            };
            bank.InitializeBalance(5000);
            context.Add(bank);

            // Construct and initialize AccountingPeriod correctly
            var today = DateTime.UtcNow;
            var startOfMonth = new DateTime(today.Year, today.Month, 1);
            var endOfMonth = startOfMonth.AddMonths(1).AddDays(-1);
            var accountingPeriod = AccountingPeriod.Create(
                name: $"{today:MMMM yyyy}",
                fiscalYear: today.Year,
                periodNumber: today.Month,
                startDate: startOfMonth,
                endDate: endOfMonth
            );
            context.Add(accountingPeriod);

            await context.SaveChangesAsync();

            // 1. Submit Reimbursement
            var submitReq = new SubmitReimbursementRequest(
                StaffId: 777L,
                StaffName: "Alice InWonderland",
                Amount: 450,
                Description: "Client Dinner",
                SourceReference: "REC-777"
            );

            var claim = await service.SubmitReimbursementAsync(submitReq, 1L, default);
            Assert.NotNull(claim);
            Assert.Equal("PendingApproval", claim.Status);

            // 2. Approve Reimbursement
            var approved = await service.ApproveReimbursementAsync(claim.Id, 1L, default);
            Assert.Equal("Approved", approved.Status);

            // 3. Pay Reimbursement Independent
            var payReq = new PayReimbursementIndependentRequest(
                SourceAccountId: null,
                SourceBankId: bank.Id,
                PaymentMethod: "BankTransfer",
                ReferenceNumber: "PAY-REIM-777"
            );

            var paid = await service.PayReimbursementIndependentAsync(claim.Id, payReq, 1L, default);
            Assert.Equal("Paid", paid.Status);
            Assert.NotNull(paid.PaidAt);

            // Verify bank balance decreased
            var dbBank = await context.Banks.FindAsync(bank.Id);
            Assert.NotNull(dbBank);
            Assert.Equal(4550, dbBank.CurrentBalance);
        }

        [Fact]
        public async Task CreateAdjustment_Succeeds_AndRetrievesUnapplied()
        {
            await _fixture.ResetDatabaseAsync();
            using var context = _fixture.CreateContext();
            await SeedPayrollGlAccountsAsync(context);

            var service = CreatePayrollService(context);

            // Create Staff Profile
            var staff = new StaffProfile
            {
                Id = 666L,
                Name = "Lucifer Morningstar",
                Email = "lucifer@example.com",
                UserType = "Consultant",
                BasicSalary = 6666,
                IsActive = true
            };
            context.Add(staff);

            // Create a component & period
            var component = await service.CreateComponentAsync(new CreateSalaryComponentRequest("MY_DEDUCT", "My Deduction Component", "Deduction", "2115"), 1L, default);
            var period = await service.CreatePeriodAsync(new CreatePayrollPeriodRequest(1, 2026, new DateTime(2026, 1, 1), new DateTime(2026, 1, 31)), 1L, default);

            await context.SaveChangesAsync();

            var adjReq = new CreatePayrollAdjustmentRequest(
                StaffId: 666L,
                PayrollPeriodId: period.Id,
                SalaryComponentId: component.Id,
                Amount: 300,
                Type: "Deduction",
                Reason: "Damages to Office Property"
            );

            var adjustment = await service.CreateAdjustmentAsync(adjReq, 1L, default);
            Assert.NotNull(adjustment);
            Assert.Equal("Deduction", adjustment.Type);
            Assert.Equal("Pending", adjustment.Status);

            var unapplied = await service.GetUnappliedAdjustmentsAsync(666L, default);
            Assert.Single(unapplied);
            Assert.Equal(adjustment.Id, unapplied[0].Id);
        }

        [Fact]
        public async Task CreateCommission_Succeeds_AndRetrievesUnapplied()
        {
            await _fixture.ResetDatabaseAsync();
            using var context = _fixture.CreateContext();
            await SeedPayrollGlAccountsAsync(context);

            var service = CreatePayrollService(context);

            // Create Staff Profile
            var staff = new StaffProfile
            {
                Id = 555L,
                Name = "Donald Duck",
                Email = "donald@example.com",
                UserType = "Salesman",
                BasicSalary = 2000,
                IsActive = true
            };
            context.Add(staff);
            await context.SaveChangesAsync();

            var req = new CreateCommissionRecordRequest(
                StaffId: 555L,
                Amount: 500,
                BookingType: "Flight",
                BookingId: "B-1234",
                SourceReference: "SR-FLIGHT-99",
                Month: 1,
                Year: 2026
            );

            var comm = await service.CreateCommissionAsync(req, 1L, default);
            Assert.NotNull(comm);
            Assert.Equal("Pending", comm.Status);
            Assert.Equal(500, comm.Amount);

            var unapplied = await service.GetUnappliedCommissionsAsync(555L, default);
            Assert.Single(unapplied);
            Assert.Equal(comm.Id, unapplied[0].Id);
        }

        [Fact]
        public async Task CreateIncentive_Succeeds_AndRetrievesUnapplied()
        {
            await _fixture.ResetDatabaseAsync();
            using var context = _fixture.CreateContext();
            await SeedPayrollGlAccountsAsync(context);

            var service = CreatePayrollService(context);

            // Create Staff Profile
            var staff = new StaffProfile
            {
                Id = 444L,
                Name = "Mickey Mouse",
                Email = "mickey@example.com",
                UserType = "Manager",
                BasicSalary = 4500,
                IsActive = true
            };
            context.Add(staff);
            await context.SaveChangesAsync();

            var req = new CreateIncentiveRecordRequest(
                StaffId: 444L,
                Amount: 250,
                SourceReference: "INC-JAN-2026",
                Month: 1,
                Year: 2026
            );

            var inc = await service.CreateIncentiveAsync(req, 1L, default);
            Assert.NotNull(inc);
            Assert.Equal("Pending", inc.Status);
            Assert.Equal(250, inc.Amount);

            var unapplied = await service.GetUnappliedIncentivesAsync(444L, default);
            Assert.Single(unapplied);
            Assert.Equal(inc.Id, unapplied[0].Id);
        }

        [Fact]
        public async Task CalculatePayrollRun_EnforcesFiftyPercentCappingRule_OnDeductions()
        {
            await _fixture.ResetDatabaseAsync();
            using var context = _fixture.CreateContext();
            await SeedPayrollGlAccountsAsync(context);

            var service = CreatePayrollService(context);

            // Seed active accounting period covering today
            var today = DateTime.UtcNow;
            var startOfMonth = new DateTime(today.Year, today.Month, 1);
            var endOfMonth = startOfMonth.AddMonths(1).AddDays(-1);
            var accountingPeriod = AccountingPeriod.Create(
                name: $"Period {today.Month}-{today.Year}",
                fiscalYear: today.Year,
                periodNumber: today.Month,
                startDate: startOfMonth,
                endDate: endOfMonth
            );
            context.Add(accountingPeriod);

            // 1. Create Period
            var period = new PayrollPeriod
            {
                Month = 1,
                Year = 2026,
                StartDate = new DateTime(2026, 1, 1),
                EndDate = new DateTime(2026, 1, 31),
                IsClosed = false
            };
            context.Add(period);

            // 2. Create Staff Profile & Compensation Profile
            var staff = new StaffProfile
            {
                Id = 101L,
                Name = "John Capping",
                Email = "john.cap@example.com",
                UserType = "Salesman",
                BasicSalary = 5000,
                IsActive = true
            };
            context.Add(staff);

            var basicComp = await service.CreateComponentAsync(new CreateSalaryComponentRequest("BASIC", "Basic Salary", "Earning", "5010"), 1L, default);
            var housingComp = await service.CreateComponentAsync(new CreateSalaryComponentRequest("HOUSING", "Housing Allowance", "Earning", "5020"), 1L, default);
            var transportComp = await service.CreateComponentAsync(new CreateSalaryComponentRequest("TRANSPORT", "Transport Allowance", "Earning", "5030"), 1L, default);

            var req = new CreateStaffCompensationProfileRequest(
                StaffId: 101L,
                EffectiveFrom: new DateTime(2026, 1, 1),
                EffectiveTo: null,
                Components: new List<CompensationComponentRequest>
                {
                    new CompensationComponentRequest(basicComp.Id, 5000),
                    new CompensationComponentRequest(housingComp.Id, 1000),
                    new CompensationComponentRequest(transportComp.Id, 500)
                }
            );
            await service.CreateCompensationProfileAsync(req, 1L, default);
            await context.SaveChangesAsync();

            // 3. Create a Custom Deduction Salary Component
            var componentRequest = new CreateSalaryComponentRequest(
                Code: "CUSTOM_DEDUCT",
                Name: "Custom Deduction",
                Type: "Deduction",
                GlAccountCode: "1221" // Advances/receivables
            );
            await service.CreateComponentAsync(componentRequest, actorUserId: 1L, default);

            // 4. Create an approved manual adjustment of $4,000 (Deduction)
            // Gross earnings are $5,000 basic + $1,000 housing + $500 transport = $6,500
            // 50% cap of gross earnings is $3,250.
            // A $4,000 deduction must be capped at $3,250.
            var component = await context.SalaryComponents.FirstAsync(c => c.Code == "CUSTOM_DEDUCT");
            var adjRequest = new CreatePayrollAdjustmentRequest(
                StaffId: 101L,
                PayrollPeriodId: period.Id,
                SalaryComponentId: component.Id,
                Amount: 4000,
                Type: "Deduction",
                Reason: "Excessive Deduction"
            );
            var adj = await service.CreateAdjustmentAsync(adjRequest, actorUserId: 1L, default);

            // 5. Create and Calculate Payroll Run
            var run = await service.CreatePayrollRunAsync(new CreatePayrollRunRequest(period.Id), actorUserId: 1L, default);
            var calcRun = await service.CalculatePayrollRunAsync(run.Id, actorUserId: 1L, default);

            // 6. Assert capping was enforced
            var empRun = await context.PayrollRunEmployees
                .Include(e => e.Components)
                .FirstAsync(e => e.PayrollRunId == run.Id && e.StaffId == 101L);

            Assert.Equal(6500, empRun.GrossEarnings);
            Assert.Equal(3250, empRun.TotalDeductions); // Capped at 50% of 6,500
            Assert.Equal(3250, empRun.NetSalary); // 6500 - 3250 = 3250

            var cappedComponent = empRun.Components.First(c => c.SalaryComponentCode == "CUSTOM_DEDUCT");
            Assert.Equal(3250, cappedComponent.Amount);
        }

        [Fact]
        public async Task PayrollRun_FullEndToEndLifecycle_Succeeds()
        {
            await _fixture.ResetDatabaseAsync();
            using var context = _fixture.CreateContext();
            await SeedPayrollGlAccountsAsync(context);

            var service = CreatePayrollService(context);

            // Seed active accounting period covering today
            var today = DateTime.UtcNow;
            var startOfMonth = new DateTime(today.Year, today.Month, 1);
            var endOfMonth = startOfMonth.AddMonths(1).AddDays(-1);
            var accountingPeriod = AccountingPeriod.Create(
                name: $"Period {today.Month}-{today.Year}",
                fiscalYear: today.Year,
                periodNumber: today.Month,
                startDate: startOfMonth,
                endDate: endOfMonth
            );
            context.Add(accountingPeriod);

            // 1. Create active period
            var period = new PayrollPeriod
            {
                Month = 2,
                Year = 2026,
                StartDate = new DateTime(2026, 2, 1),
                EndDate = new DateTime(2026, 2, 28),
                IsClosed = false
            };
            context.Add(period);

            // 2. Create staff profile & compensation profile
            var staff = new StaffProfile
            {
                Id = 202L,
                Name = "Jane Doe",
                Email = "jane.doe@example.com",
                UserType = "Agent",
                BasicSalary = 4000,
                IsActive = true
            };
            context.Add(staff);

            var basicComp = await service.CreateComponentAsync(new CreateSalaryComponentRequest("BASIC", "Basic Salary", "Earning", "5010"), 1L, default);
            var housingComp = await service.CreateComponentAsync(new CreateSalaryComponentRequest("HOUSING", "Housing Allowance", "Earning", "5020"), 1L, default);
            var transportComp = await service.CreateComponentAsync(new CreateSalaryComponentRequest("TRANSPORT", "Transport Allowance", "Earning", "5030"), 1L, default);

            var req = new CreateStaffCompensationProfileRequest(
                StaffId: 202L,
                EffectiveFrom: new DateTime(2026, 2, 1),
                EffectiveTo: null,
                Components: new List<CompensationComponentRequest>
                {
                    new CompensationComponentRequest(basicComp.Id, 4000),
                    new CompensationComponentRequest(housingComp.Id, 800),
                    new CompensationComponentRequest(transportComp.Id, 400)
                }
            );
            await service.CreateCompensationProfileAsync(req, 1L, default);
            await context.SaveChangesAsync();

            // 3. Create and approve Staff Advance of $1,000 (to be recovered $200 per month)
            var advance = new StaffAdvance
            {
                StaffId = 202L,
                Amount = 1000,
                OutstandingBalance = 1000,
                Status = AdvanceStatus.Disbursed,
                Month = 2,
                Year = 2026,
                DisbursedAt = DateTime.UtcNow
            };
            context.Add(advance);

            // 4. Create and approve Staff Loan of $2,000 (to be recovered $500 per month)
            var loan = new StaffLoan
            {
                StaffId = 202L,
                PrincipalAmount = 2000,
                OutstandingBalance = 2000,
                Status = LoanStatus.Active,
                Month = 2,
                Year = 2026,
                DisbursedAt = DateTime.UtcNow
            };
            // Add repayment schedules
            for (int i = 1; i <= 4; i++)
            {
                loan.RepaymentSchedules.Add(new LoanRepaymentSchedule
                {
                    DueDate = new DateTime(2026, i + 1, 28),
                    Amount = 500,
                    AmountPaid = 0,
                    Status = RepaymentStatus.Unpaid
                });
            }
            context.Add(loan);
            await context.SaveChangesAsync();

            // 5. Create Commission and Incentive Records
            var commissionRequest = new CreateCommissionRecordRequest(
                StaffId: 202L,
                Amount: 300,
                BookingType: "Package",
                BookingId: "BK-111",
                SourceReference: "REF-COMM-111",
                Month: 2,
                Year: 2026
            );
            var comm = await service.CreateCommissionAsync(commissionRequest, 1L, default);

            var incentiveRequest = new CreateIncentiveRecordRequest(
                StaffId: 202L,
                Amount: 150,
                SourceReference: "REF-INC-222",
                Month: 2,
                Year: 2026
            );
            var inc = await service.CreateIncentiveAsync(incentiveRequest, 1L, default);

            // 6. Create Reimbursement (exempt from cap)
            var reimbursement = new StaffReimbursement
            {
                StaffId = 202L,
                Amount = 200,
                Status = ReimbursementStatus.Approved,
                Description = "Travel expenses reimbursement",
                SourceReference = "REF-REIMB-001"
            };
            context.Add(reimbursement);
            await context.SaveChangesAsync();

            // 7. Create Run and Calculate
            // Gross: 4000 + 800 + 400 + 300 (comm) + 150 (inc) + 200 (reim) = 5850.
            // Deductions: 200 (adv recovery) + 500 (loan recovery) = 700. (700 is well below 50% cap of 5650 which is 2825).
            // Reimbursements: 200 (reim)
            // Net Salary: Gross - Deductions = 5850 - 700 = 5150.
            var run = await service.CreatePayrollRunAsync(new CreatePayrollRunRequest(period.Id), actorUserId: 1L, default);
            var calcRun = await service.CalculatePayrollRunAsync(run.Id, actorUserId: 1L, default);

            var empRun = await context.PayrollRunEmployees
                .Include(e => e.Components)
                .FirstAsync(e => e.PayrollRunId == run.Id && e.StaffId == 202L);

            Assert.Equal(5850, empRun.GrossEarnings);
            Assert.Equal(1500, empRun.TotalDeductions);
            Assert.Equal(4350, empRun.NetSalary);

            // Verify components included
            Assert.Contains(empRun.Components, c => c.SalaryComponentCode == "COMMISSION" && c.Amount == 300);
            Assert.Contains(empRun.Components, c => c.SalaryComponentCode == "INCENTIVE" && c.Amount == 150);
            Assert.Contains(empRun.Components, c => c.SalaryComponentCode == "REIMBURSEMENT" && c.Amount == 200);
            Assert.Contains(empRun.Components, c => c.SalaryComponentCode == "ADVANCE_RECOVERY" && c.Amount == 1000);
            Assert.Contains(empRun.Components, c => c.SalaryComponentCode == "LOAN_RECOVERY" && c.Amount == 500);

            // 8. Approve Payroll Run
            await service.ApprovePayrollRunAsync(run.Id, actorUserId: 1L, default);
            var approvedRun = await context.PayrollRuns.FirstAsync(r => r.Id == run.Id);
            Assert.Equal(PayrollRunStatus.Approved, approvedRun.Status);
            Assert.NotNull(approvedRun.ApprovedAt);
            Assert.Equal(1L, approvedRun.ApprovedBy);

            // 9. Post Payroll Run to General Ledger
            await service.PostPayrollRunToGeneralLedgerAsync(run.Id, actorUserId: 1L, default);
            var postedRun = await context.PayrollRuns.FirstAsync(r => r.Id == run.Id);
            Assert.Equal(PayrollRunStatus.Posted, postedRun.Status);
            Assert.NotNull(postedRun.PostedJournalEntryId);

            // Verify journal entries and outbox messages
            var outboxMessages = await context.OutboxMessages.ToListAsync();
            Assert.Contains(outboxMessages, o => o.MessageType == "CommissionPayoutEvent" && o.AggregateId == "202");
            Assert.Contains(outboxMessages, o => o.MessageType == "IncentivePayoutEvent" && o.AggregateId == "202");

            // 10. Pay Payroll Run (Disburse Salaries)
            // Retrieve default bank account to seed balance
            var bankAccount = await context.ChartOfAccounts.FirstAsync(a => a.Code == "1110");
            // Set up a mock outgoing payment source bank/account
            var mockBank = new Bank
            {
                BankName = "Mock Test Bank",
                AccountNumber = "00001111",
                IsActive = true,
                CreatedBy = 1L,
                CreatedAt = DateTime.UtcNow
            };
            mockBank.InitializeBalance(100000);
            context.Add(mockBank);
            await context.SaveChangesAsync();

            await service.PayPayrollRunAsync(
                runId: run.Id,
                sourceBankId: mockBank.Id,
                sourceAccountId: null,
                paymentMethod: "BankTransfer",
                referenceNumber: "TX-REF-100202",
                actorUserId: 1L,
                ct: default
            );

            // Verify advance and loan outstanding balances were reduced
            var updatedAdvance = await context.StaffAdvances.FirstAsync(a => a.Id == advance.Id);
            var updatedLoan = await context.StaffLoans.FirstAsync(l => l.Id == loan.Id);

            Assert.Equal(0, updatedAdvance.OutstandingBalance);
            Assert.Equal(1500, updatedLoan.OutstandingBalance);

            // Verify Loan Repayment Schedule status
            var schedule = await context.LoanRepaymentSchedules
                .Where(s => s.StaffLoanId == loan.Id)
                .OrderBy(s => s.DueDate)
                .FirstAsync();
            Assert.Equal(RepaymentStatus.Paid, schedule.Status);
            Assert.Equal(500, schedule.AmountPaid);

            // Verify SalaryPayment record created
            var payments = await context.SalaryPayments.Where(p => p.PayrollRunId == run.Id).ToListAsync();
            Assert.Single(payments);
            Assert.Equal(202L, payments[0].StaffId);
            Assert.Equal("TX-REF-100202", payments[0].ReferenceNumber);
            Assert.Equal(4350, payments[0].Amount);

            // 11. Run Reconciliation Audits
            var reconService = new Infrastructure.Services.PayrollReconciliationService(context);
            var discrepancies = await reconService.GetDiscrepanciesAsync(default);
            
            // There shouldn't be calculation discrepancies as calculations and journals match
            Assert.Empty(discrepancies);

            // 12. Reverse Payroll Run
            await service.ReversePayrollRunAsync(run.Id, "Input data correction", actorUserId: 1L, default);

            // Verify status and journals reversed
            var reversedRun = await context.PayrollRuns.FirstAsync(r => r.Id == run.Id);
            Assert.Equal(PayrollRunStatus.Reversed, reversedRun.Status);

            // Verify advance and loan outstanding balances were restored
            var restoredAdvance = await context.StaffAdvances.FirstAsync(a => a.Id == advance.Id);
            var restoredLoan = await context.StaffLoans.FirstAsync(l => l.Id == loan.Id);

            Assert.Equal(1000, restoredAdvance.OutstandingBalance);
            Assert.Equal(2000, restoredLoan.OutstandingBalance);

            var restoredSchedule = await context.LoanRepaymentSchedules
                .Where(s => s.StaffLoanId == loan.Id)
                .OrderBy(s => s.DueDate)
                .FirstAsync();
            Assert.Equal(RepaymentStatus.Unpaid, restoredSchedule.Status);
            Assert.Equal(0, restoredSchedule.AmountPaid);

            // Verify manual adjustments and records restored
            var restoredReimb = await context.StaffReimbursements.FirstAsync(a => a.Id == reimbursement.Id);
            Assert.Null(restoredReimb.PayrollRunId);

            var restoredComm = await context.CommissionRecords.FirstAsync(c => c.Id == comm.Id);
            Assert.Equal(CommissionStatus.Pending, restoredComm.Status);
            Assert.Null(restoredComm.PayrollRunId);

            var restoredInc = await context.IncentiveRecords.FirstAsync(i => i.Id == inc.Id);
            Assert.Equal(IncentiveStatus.Pending, restoredInc.Status);
            Assert.Null(restoredInc.PayrollRunId);
        }
    }
}

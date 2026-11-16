using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Contracts.Payroll;
using TexasAccountsPortal.Domain.Entities;
using TexasAccountsPortal.Domain.Enums;

namespace TexasAccountsPortal.Infrastructure.Services
{
    public class PayrollService : IPayrollService
    {
        private readonly IAccountsDbContext _dbContext;
        private readonly ISalesPortalClient _salesPortalClient;
        private readonly IOperationalPortalClient _operationalPortalClient;

        public PayrollService(
            IAccountsDbContext dbContext,
            ISalesPortalClient salesPortalClient,
            IOperationalPortalClient operationalPortalClient)
        {
            _dbContext = dbContext ?? throw new ArgumentNullException(nameof(dbContext));
            _salesPortalClient = salesPortalClient ?? throw new ArgumentNullException(nameof(salesPortalClient));
            _operationalPortalClient = operationalPortalClient ?? throw new ArgumentNullException(nameof(operationalPortalClient));
        }

        public async Task<IEnumerable<StaffUserLookupResponse>> GetAllStaffUsersAsync(CancellationToken ct = default)
        {
            var list = new List<StaffUserLookupResponse>();

            var localAccountsStaff = await _dbContext.Users
                .AsNoTracking()
                .Where(u => u.IsActive)
                .Select(u => new StaffUserLookupResponse("Account", u.Id, u.Name, u.Email, u.IsMasterAccountant() ? "Master Accountant" : "Accountant"))
                .ToListAsync(ct);
            list.AddRange(localAccountsStaff);

            try
            {
                var salesUsers = await _salesPortalClient.GetSalesUsersAsync(ct);
                if (salesUsers != null)
                {
                    list.AddRange(salesUsers.Select(u => new StaffUserLookupResponse("Sales", u.Id, u.Name, u.Email, "Sales Staff")));
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"[GetAllStaffUsersAsync] Sales portal fetch failed: {ex.Message}");
            }

            try
            {
                var opUsers = await _operationalPortalClient.GetOperationalUsersAsync(ct);
                if (opUsers != null)
                {
                    list.AddRange(opUsers.Select(u => new StaffUserLookupResponse("Operational", u.Id, u.Name, u.Email, "Operational Staff")));
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"[GetAllStaffUsersAsync] Operational portal fetch failed: {ex.Message}");
            }

            return list.GroupBy(x => $"{x.PortalType.ToLower()}_{x.PortalUserId}").Select(g => g.First());
        }

        public async Task<IEnumerable<SalaryProfileResponse>> GetSalaryProfilesAsync(string? portalType = null, string? status = null, CancellationToken ct = default)
        {
            var query = _dbContext.StaffSalaryProfiles.AsNoTracking().AsQueryable();

            if (!string.IsNullOrWhiteSpace(portalType))
            {
                query = query.Where(p => p.PortalType.ToLower() == portalType.ToLower());
            }

            if (!string.IsNullOrWhiteSpace(status))
            {
                query = query.Where(p => p.Status.ToLower() == status.ToLower());
            }

            var profiles = await query.OrderByDescending(p => p.CreatedAt).ToListAsync(ct);
            if (!profiles.Any())
            {
                return Enumerable.Empty<SalaryProfileResponse>();
            }

            var keys = profiles.Select(p => (p.PortalType.ToLower(), p.PortalUserId));
            var staffLookup = await GetStaffUserLookupAsync(keys, ct);

            return profiles.Select(p =>
            {
                var key = (p.PortalType.ToLower(), p.PortalUserId);
                staffLookup.TryGetValue(key, out var staffUser);

                return new SalaryProfileResponse(
                    p.Id,
                    p.PortalType,
                    p.PortalUserId,
                    staffUser.name ?? p.EmployeeName,
                    staffUser.email ?? p.EmployeeEmail,
                    p.EmployeeCode,
                    p.BasicSalary,
                    p.DefaultMonthlyIncentive,
                    p.Currency,
                    p.EffectiveFrom,
                    p.EffectiveTo,
                    p.Status,
                    p.Remarks,
                    p.CreatedAt,
                    p.UpdatedAt
                );
            });
        }

        public async Task<SalaryProfileResponse?> GetSalaryProfileByIdAsync(long id, CancellationToken ct = default)
        {
            var p = await _dbContext.StaffSalaryProfiles.AsNoTracking().FirstOrDefaultAsync(x => x.Id == id, ct);
            if (p == null) return null;

            var key = (p.PortalType.ToLower(), p.PortalUserId);
            var staffLookup = await GetStaffUserLookupAsync(new[] { key }, ct);
            staffLookup.TryGetValue(key, out var staffUser);

            return new SalaryProfileResponse(
                p.Id,
                p.PortalType,
                p.PortalUserId,
                staffUser.name ?? p.EmployeeName,
                staffUser.email ?? p.EmployeeEmail,
                p.EmployeeCode,
                p.BasicSalary,
                p.DefaultMonthlyIncentive,
                p.Currency,
                p.EffectiveFrom,
                p.EffectiveTo,
                p.Status,
                p.Remarks,
                p.CreatedAt,
                p.UpdatedAt
            );
        }

        public async Task<SalaryProfileResponse> CreateSalaryProfileAsync(CreateSalaryProfileRequest request, CancellationToken ct = default)
        {
            var portalTypeNormalized = request.PortalType.Trim();
            var existing = await _dbContext.StaffSalaryProfiles
                .FirstOrDefaultAsync(p => p.PortalType.ToLower() == portalTypeNormalized.ToLower() && p.PortalUserId == request.PortalUserId, ct);

            if (existing != null)
            {
                throw new InvalidOperationException($"Salary profile already exists for {portalTypeNormalized} user #{request.PortalUserId}.");
            }

            var staffLookup = await GetStaffUserLookupAsync(new[] { (portalTypeNormalized.ToLower(), request.PortalUserId) }, ct);
            staffLookup.TryGetValue((portalTypeNormalized.ToLower(), request.PortalUserId), out var staffUser);

            var profile = new StaffSalaryProfile
            {
                PortalType = portalTypeNormalized,
                PortalUserId = request.PortalUserId,
                EmployeeName = staffUser.name ?? $"Staff #{request.PortalUserId}",
                EmployeeEmail = staffUser.email ?? string.Empty,
                EmployeeCode = string.IsNullOrWhiteSpace(request.EmployeeCode) ? $"{portalTypeNormalized.ToUpper().Substring(0, 3)}-{request.PortalUserId}" : request.EmployeeCode.Trim(),
                BasicSalary = request.BasicSalary,
                DefaultMonthlyIncentive = request.DefaultMonthlyIncentive,
                Currency = string.IsNullOrWhiteSpace(request.Currency) ? "BHD" : request.Currency.Trim(),
                EffectiveFrom = request.EffectiveFrom == default ? DateTime.UtcNow : request.EffectiveFrom,
                Status = "Active",
                Remarks = request.Remarks,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            };

            _dbContext.Add(profile);
            await _dbContext.SaveChangesAsync(ct);

            return (await GetSalaryProfileByIdAsync(profile.Id, ct))!;
        }

        public async Task<SalaryProfileResponse> UpdateSalaryProfileAsync(long id, UpdateSalaryProfileRequest request, long changedByUserId, CancellationToken ct = default)
        {
            var profile = await _dbContext.StaffSalaryProfiles.FirstOrDefaultAsync(p => p.Id == id, ct);
            if (profile == null)
            {
                throw new KeyNotFoundException($"Salary profile #{id} not found.");
            }

            var revision = new SalaryRevision
            {
                SalaryProfileId = profile.Id,
                OldBasicSalary = profile.BasicSalary,
                NewBasicSalary = request.NewBasicSalary,
                OldMonthlyIncentive = profile.DefaultMonthlyIncentive,
                NewMonthlyIncentive = request.NewMonthlyIncentive,
                Reason = request.Reason ?? string.Empty,
                EffectiveDate = request.EffectiveDate == default ? DateTime.UtcNow : request.EffectiveDate,
                ChangedBy = changedByUserId,
                CreatedAt = DateTime.UtcNow
            };

            profile.BasicSalary = request.NewBasicSalary;
            profile.DefaultMonthlyIncentive = request.NewMonthlyIncentive;
            if (!string.IsNullOrWhiteSpace(request.Remarks)) profile.Remarks = request.Remarks;
            profile.UpdatedAt = DateTime.UtcNow;

            _dbContext.Add(revision);
            await _dbContext.SaveChangesAsync(ct);

            return (await GetSalaryProfileByIdAsync(profile.Id, ct))!;
        }

        public async Task<IEnumerable<SalaryRevisionResponse>> GetSalaryRevisionsAsync(long salaryProfileId, CancellationToken ct = default)
        {
            var revisions = await _dbContext.SalaryRevisions
                .AsNoTracking()
                .Where(r => r.SalaryProfileId == salaryProfileId)
                .OrderByDescending(r => r.CreatedAt)
                .ToListAsync(ct);

            return revisions.Select(r => new SalaryRevisionResponse(
                r.Id,
                r.SalaryProfileId,
                r.OldBasicSalary,
                r.NewBasicSalary,
                r.OldMonthlyIncentive,
                r.NewMonthlyIncentive,
                r.Reason,
                r.EffectiveDate,
                r.ChangedBy,
                r.CreatedAt
            ));
        }

        public async Task<IEnumerable<SalaryPaymentResponse>> GetSalaryPaymentsAsync(string? status = null, int? month = null, int? year = null, string? portalType = null, CancellationToken ct = default)
        {
            

            var query = _dbContext.SalaryPayments
                .Include(p => p.SalaryProfile)
                .Include(p => p.CashAccount)
                .Include(p => p.BankAccount)
                .AsNoTracking()
                .AsQueryable();

            if (!string.IsNullOrWhiteSpace(status))
            {
                query = query.Where(p => p.Status.ToLower() == status.ToLower());
            }

            if (month.HasValue)
            {
                query = query.Where(p => p.PayrollMonth == month.Value);
            }

            if (year.HasValue)
            {
                query = query.Where(p => p.PayrollYear == year.Value);
            }

            if (!string.IsNullOrWhiteSpace(portalType))
            {
                query = query.Where(p => p.SalaryProfile != null && p.SalaryProfile.PortalType.ToLower() == portalType.ToLower());
            }

            var payments = await query.OrderByDescending(p => p.CreatedAt).ToListAsync(ct);
            if (!payments.Any())
            {
                return Enumerable.Empty<SalaryPaymentResponse>();
            }

            var keys = payments.Select(p => (p.SalaryProfile?.PortalType.ToLower() ?? "account", p.SalaryProfile?.PortalUserId ?? 0));
            var staffUsers = await GetStaffUserLookupAsync(keys, ct);

            return payments.Select(p =>
            {
                var portalTypeStr = p.SalaryProfile?.PortalType ?? "Account";
                var portalUserId = p.SalaryProfile?.PortalUserId ?? 0;
                var key = (portalTypeStr.ToLower(), portalUserId);
                staffUsers.TryGetValue(key, out var user);

                return new SalaryPaymentResponse(
                    p.Id,
                    p.SalaryProfileId,
                    portalTypeStr,
                    portalUserId,
                    user.name ?? $"Staff #{portalUserId}",
                    p.SalaryProfile?.EmployeeCode ?? string.Empty,
                    p.PayrollMonth,
                    p.PayrollYear,
                    p.BasicSalary,
                    p.Incentive,
                    p.Bonus,
                    p.Allowance,
                    p.Deduction,
                    p.NetSalary,
                    p.PaymentMethod,
                    p.CashAccountId,
                    p.CashAccount?.Name,
                    p.BankAccountId,
                    p.BankAccount?.BankName,
                    p.TransactionReference,
                    p.PaymentDate,
                    p.PaidByUserId,
                    p.Status,
                    p.Remarks,
                    p.CreatedAt,
                    p.UpdatedAt
                );
            });
        }

        public async Task<SalaryPaymentResponse?> GetSalaryPaymentByIdAsync(long id, CancellationToken ct = default)
        {
            var p = await _dbContext.SalaryPayments
                .Include(x => x.SalaryProfile)
                .Include(x => x.CashAccount)
                .Include(x => x.BankAccount)
                .AsNoTracking()
                .FirstOrDefaultAsync(x => x.Id == id, ct);

            if (p == null) return null;

            var portalTypeStr = p.SalaryProfile?.PortalType ?? "Account";
            var portalUserId = p.SalaryProfile?.PortalUserId ?? 0;
            var key = (portalTypeStr.ToLower(), portalUserId);
            var staffLookup = await GetStaffUserLookupAsync(new[] { key }, ct);
            staffLookup.TryGetValue(key, out var user);

            return new SalaryPaymentResponse(
                p.Id,
                p.SalaryProfileId,
                portalTypeStr,
                portalUserId,
                user.name ?? $"Staff #{portalUserId}",
                p.SalaryProfile?.EmployeeCode ?? string.Empty,
                p.PayrollMonth,
                p.PayrollYear,
                p.BasicSalary,
                p.Incentive,
                p.Bonus,
                p.Allowance,
                p.Deduction,
                p.NetSalary,
                p.PaymentMethod,
                p.CashAccountId,
                p.CashAccount?.Name,
                p.BankAccountId,
                p.BankAccount?.BankName,
                p.TransactionReference,
                p.PaymentDate,
                p.PaidByUserId,
                p.Status,
                p.Remarks,
                p.CreatedAt,
                p.UpdatedAt
            );
        }

        public async Task<SalaryPaymentResponse> CreateSalaryPaymentAsync(CreateSalaryPaymentRequest request, long paidByUserId, CancellationToken ct = default)
        {
            var profile = await _dbContext.StaffSalaryProfiles.FirstOrDefaultAsync(p => p.Id == request.SalaryProfileId, ct);
            if (profile == null)
            {
                var staffUser = await _dbContext.Users.AsNoTracking().FirstOrDefaultAsync(u => u.Id == request.SalaryProfileId, ct);
                profile = new StaffSalaryProfile
                {
                    PortalType = staffUser != null ? "Account" : "Staff",
                    PortalUserId = request.SalaryProfileId,
                    EmployeeName = staffUser?.Name ?? $"Staff #{request.SalaryProfileId}",
                    EmployeeEmail = staffUser?.Email ?? string.Empty,
                    EmployeeCode = $"STF-{request.SalaryProfileId}",
                    BasicSalary = request.BasicSalary,
                    DefaultMonthlyIncentive = request.Incentive,
                    Currency = "BHD",
                    EffectiveFrom = DateTime.UtcNow,
                    Status = "Active",
                    CreatedAt = DateTime.UtcNow,
                    UpdatedAt = DateTime.UtcNow
                };
                _dbContext.Add(profile);
                await _dbContext.SaveChangesAsync(ct);
            }

            var methodNormalized = request.PaymentMethod?.Trim();
            long? cashAccountId = string.Equals(methodNormalized, "Cash Account", StringComparison.OrdinalIgnoreCase) ? request.CashAccountId : null;
            long? bankAccountId = string.Equals(methodNormalized, "Bank Account", StringComparison.OrdinalIgnoreCase) ? request.BankAccountId : null;

            if (string.Equals(methodNormalized, "Cash Account", StringComparison.OrdinalIgnoreCase))
            {
                if (!cashAccountId.HasValue)
                {
                    throw new InvalidOperationException("CashAccountId is required for Cash Account payment method.");
                }
            }
            else if (string.Equals(methodNormalized, "Bank Account", StringComparison.OrdinalIgnoreCase))
            {
                if (!bankAccountId.HasValue)
                {
                    throw new InvalidOperationException("BankAccountId is required for Bank Account payment method.");
                }
            }
            else
            {
                throw new InvalidOperationException("Invalid payment method. Supported: 'Cash Account', 'Bank Account'.");
            }

            decimal netSalary = request.BasicSalary + request.Incentive + request.Bonus + request.Allowance - request.Deduction;

            var postingUser = await _dbContext.Users.AsNoTracking().FirstOrDefaultAsync(u => u.Id == paidByUserId, ct);
            bool isMasterAccountant = postingUser != null && postingUser.IsMasterAccountant();

            var status = isMasterAccountant ? "Paid" : "Pending";

            var payment = new SalaryPayment
            {
                SalaryProfileId = request.SalaryProfileId,
                PayrollMonth = request.PayrollMonth,
                PayrollYear = request.PayrollYear,
                BasicSalary = request.BasicSalary,
                Incentive = request.Incentive,
                Bonus = request.Bonus,
                Allowance = request.Allowance,
                Deduction = request.Deduction,
                NetSalary = netSalary,
                PaymentMethod = methodNormalized!,
                CashAccountId = cashAccountId,
                BankAccountId = bankAccountId,
                TransactionReference = request.TransactionReference ?? string.Empty,
                PaymentDate = request.PaymentDate == default ? DateTime.UtcNow : request.PaymentDate,
                PaidByUserId = paidByUserId,
                Status = status,
                Remarks = request.Remarks,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            };

            _dbContext.Add(payment);
            await _dbContext.SaveChangesAsync(ct);

            if (string.Equals(status, "Paid", StringComparison.OrdinalIgnoreCase))
            {
                await ExecuteAccountPayoutAsync(payment, ct);
                await _dbContext.SaveChangesAsync(ct);
            }
            else
            {
                await CreatePendingSalaryExpenseAsync(payment, ct);
                await _dbContext.SaveChangesAsync(ct);
            }

            return (await GetSalaryPaymentByIdAsync(payment.Id, ct))!;
        }

        public async Task<SalaryPaymentResponse> UpdateSalaryPaymentStatusAsync(long id, UpdateSalaryPaymentStatusRequest request, long actionUserId, CancellationToken ct = default)
        {
            var payment = await _dbContext.SalaryPayments.FirstOrDefaultAsync(p => p.Id == id, ct);
            if (payment == null)
            {
                throw new KeyNotFoundException($"Salary payment #{id} not found.");
            }

            if (string.Equals(payment.Status, "Paid", StringComparison.OrdinalIgnoreCase))
            {
                throw new InvalidOperationException("Paid payroll is immutable and cannot be edited or changed.");
            }

            var targetStatus = request.Status?.Trim();
            if (string.Equals(targetStatus, "Paid", StringComparison.OrdinalIgnoreCase))
            {
                await ExecuteAccountPayoutAsync(payment, ct);
                payment.Status = "Paid";
                payment.PaidByUserId = actionUserId;
            }
            else if (string.Equals(targetStatus, "Cancelled", StringComparison.OrdinalIgnoreCase))
            {
                payment.Status = "Cancelled";
                var correlationId = $"SalaryPayout_{payment.Id}";
                var existingExpense = await _dbContext.Expenses.FirstOrDefaultAsync(e => e.CorrelationId == correlationId, ct);
                if (existingExpense != null && existingExpense.Status == ExpenseStatus.PendingApproval)
                {
                    existingExpense.Reject(actionUserId, request.Remarks ?? "Cancelled by Master Accountant");
                }
            }
            else
            {
                throw new InvalidOperationException("Only 'Paid' or 'Cancelled' status transitions are allowed for pending payroll.");
            }

            if (!string.IsNullOrWhiteSpace(request.Remarks))
            {
                payment.Remarks = request.Remarks;
            }
            payment.UpdatedAt = DateTime.UtcNow;

            await _dbContext.SaveChangesAsync(ct);

            return (await GetSalaryPaymentByIdAsync(payment.Id, ct))!;
        }

        private async Task CreatePendingSalaryExpenseAsync(SalaryPayment payment, CancellationToken ct)
        {
            var correlationId = $"SalaryPayout_{payment.Id}";
            var existingExpense = await _dbContext.Expenses.FirstOrDefaultAsync(e => e.CorrelationId == correlationId, ct);
            if (existingExpense != null) return;

            PaymentMethod payMethod = payment.CashAccountId.HasValue ? PaymentMethod.Cash : PaymentMethod.Bank;

            if (payment.SalaryProfile == null)
            {
                payment.SalaryProfile = await _dbContext.StaffSalaryProfiles.FirstOrDefaultAsync(p => p.Id == payment.SalaryProfileId, ct);
            }

            string staffInfo = string.Empty;
            if (payment.SalaryProfile != null)
            {
                var key = (payment.SalaryProfile.PortalType.ToLower(), payment.SalaryProfile.PortalUserId);
                var staffLookup = await GetStaffUserLookupAsync(new[] { key }, ct);
                if (staffLookup.TryGetValue(key, out var staffUser) && !string.IsNullOrWhiteSpace(staffUser.name))
                {
                    var codeStr = string.IsNullOrWhiteSpace(payment.SalaryProfile.EmployeeCode) ? string.Empty : $" ({payment.SalaryProfile.EmployeeCode})";
                    staffInfo = $" to {staffUser.name}{codeStr}";
                }
                else if (!string.IsNullOrWhiteSpace(payment.SalaryProfile.EmployeeCode))
                {
                    staffInfo = $" to Employee {payment.SalaryProfile.EmployeeCode}";
                }
            }

            var remarksStr = string.IsNullOrWhiteSpace(payment.Remarks) ? string.Empty : $" - {payment.Remarks}";
            var description = $"Salary Payout{staffInfo} for {payment.PayrollMonth:D2}/{payment.PayrollYear}{remarksStr}";
            var actionUser = payment.PaidByUserId > 0 ? payment.PaidByUserId : 1;

            var salaryHeader = await _dbContext.ExpenseHeaders
                .FirstOrDefaultAsync(h => h.Name == "Staff Salary", ct);
            if (salaryHeader == null)
            {
                salaryHeader = new ExpenseHeader
                {
                    Name = "Staff Salary",
                    Category = "Expenses",
                    Description = "Operational staff salary and payroll payouts",
                    CreatedBy = actionUser,
                    CreatedAt = DateTime.UtcNow,
                    UpdatedAt = DateTime.UtcNow
                };
                _dbContext.Add(salaryHeader);
                await _dbContext.SaveChangesAsync(ct);
            }

            string expenseNumber = $"TXSEXP{DateTime.UtcNow.Ticks.ToString()[^6..]}";

            var expenseRecord = Expense.Create(
                expenseNumber: expenseNumber,
                expenseCategoryId: salaryHeader.Id,
                amount: payment.NetSalary,
                description: description,
                paymentMethod: payMethod,
                expenseDate: payment.PaymentDate,
                correlationId: correlationId,
                createdBy: actionUser,
                currency: "BHD",
                sourceAccountId: payment.CashAccountId,
                sourceBankId: payment.BankAccountId,
                notes: payment.Remarks
            );

            expenseRecord.Submit();
            _dbContext.Add(expenseRecord);
        }

        private async Task ExecuteAccountPayoutAsync(SalaryPayment payment, CancellationToken ct)
        {
            decimal? balanceAfter = null;
            long? sourceAccountId = null;
            long? sourceBankId = null;
            PaymentMethod payMethod = PaymentMethod.Cash;

            if (payment.CashAccountId.HasValue)
            {
                var cashAccount = await _dbContext.Accounts.FirstOrDefaultAsync(a => a.Id == payment.CashAccountId.Value, ct);
                if (cashAccount == null)
                {
                    throw new KeyNotFoundException($"Cash Account #{payment.CashAccountId.Value} not found.");
                }
                cashAccount.Debit(payment.NetSalary);
                balanceAfter = cashAccount.CurrentBalance;
                sourceAccountId = cashAccount.Id;
                payMethod = PaymentMethod.Cash;
            }
            else if (payment.BankAccountId.HasValue)
            {
                var bankAccount = await _dbContext.Banks.FirstOrDefaultAsync(b => b.Id == payment.BankAccountId.Value, ct);
                if (bankAccount == null)
                {
                    throw new KeyNotFoundException($"Bank Account #{payment.BankAccountId.Value} not found.");
                }
                bankAccount.Debit(payment.NetSalary);
                balanceAfter = bankAccount.CurrentBalance;
                sourceBankId = bankAccount.Id;
                payMethod = PaymentMethod.Bank;
            }

            if (payment.SalaryProfile == null)
            {
                payment.SalaryProfile = await _dbContext.StaffSalaryProfiles.FirstOrDefaultAsync(p => p.Id == payment.SalaryProfileId, ct);
            }

            string staffInfo = string.Empty;
            if (payment.SalaryProfile != null)
            {
                var key = (payment.SalaryProfile.PortalType.ToLower(), payment.SalaryProfile.PortalUserId);
                var staffLookup = await GetStaffUserLookupAsync(new[] { key }, ct);
                if (staffLookup.TryGetValue(key, out var staffUser) && !string.IsNullOrWhiteSpace(staffUser.name))
                {
                    var codeStr = string.IsNullOrWhiteSpace(payment.SalaryProfile.EmployeeCode) ? string.Empty : $" ({payment.SalaryProfile.EmployeeCode})";
                    staffInfo = $" to {staffUser.name}{codeStr}";
                }
                else if (!string.IsNullOrWhiteSpace(payment.SalaryProfile.EmployeeCode))
                {
                    staffInfo = $" to Employee {payment.SalaryProfile.EmployeeCode}";
                }
            }

            var remarksStr = string.IsNullOrWhiteSpace(payment.Remarks) ? string.Empty : $" - {payment.Remarks}";
            var description = $"Salary Payout{staffInfo} for {payment.PayrollMonth:D2}/{payment.PayrollYear}{remarksStr}";
            var refId = payment.Id > 0 ? payment.Id.ToString() : (!string.IsNullOrWhiteSpace(payment.TransactionReference) ? payment.TransactionReference : null);
            var actionUser = payment.PaidByUserId > 0 ? payment.PaidByUserId : 1;

            var financialTxn = FinancialTransaction.Create(
                transactionType: FinancialTransactionType.Outgoing,
                amount: payment.NetSalary,
                paymentMethod: payMethod,
                createdBy: actionUser,
                sourceAccountId: sourceAccountId,
                sourceBankId: sourceBankId,
                referenceType: TransactionReferenceType.Salary,
                referenceId: refId,
                description: description,
                initialStatus: FinancialTransactionStatus.Pending
            );

            financialTxn.BalanceAfter = balanceAfter;
            financialTxn.Approve(actionUser);

            _dbContext.Add(financialTxn);

            var correlationId = $"SalaryPayout_{payment.Id}";
            var existingExpense = await _dbContext.Expenses.FirstOrDefaultAsync(e => e.CorrelationId == correlationId, ct);

            if (existingExpense != null)
            {
                existingExpense.Approve(actionUser, financialTxn.Id);
                return;
            }

            var salaryHeader = await _dbContext.ExpenseHeaders
                .FirstOrDefaultAsync(h => h.Name == "Staff Salary", ct);
            if (salaryHeader == null)
            {
                salaryHeader = new ExpenseHeader
                {
                    Name = "Staff Salary",
                    Category = "Expenses",
                    Description = "Operational staff salary and payroll payouts",
                    CreatedBy = actionUser,
                    CreatedAt = DateTime.UtcNow,
                    UpdatedAt = DateTime.UtcNow
                };
                _dbContext.Add(salaryHeader);
                await _dbContext.SaveChangesAsync(ct);
            }

            string expenseNumber = $"TXSEXP{DateTime.UtcNow.Ticks.ToString()[^6..]}";

            var expenseRecord = Expense.Create(
                expenseNumber: expenseNumber,
                expenseCategoryId: salaryHeader.Id,
                amount: payment.NetSalary,
                description: description,
                paymentMethod: payMethod,
                expenseDate: payment.PaymentDate,
                correlationId: correlationId,
                createdBy: actionUser,
                currency: "BHD",
                sourceAccountId: sourceAccountId,
                sourceBankId: sourceBankId,
                notes: payment.Remarks
            );

            expenseRecord.Submit();
            expenseRecord.Approve(actionUser, financialTxn.Id);

            _dbContext.Add(expenseRecord);
        }

        private async Task SyncPaidSalaryPaymentsToExpensesAsync(CancellationToken ct)
        {
            try
            {
                var paidPayments = await _dbContext.SalaryPayments
                    .Include(p => p.SalaryProfile)
                    .Where(p => p.Status == "Paid")
                    .ToListAsync(ct);

                if (!paidPayments.Any()) return;

                var dbCorrelations = await _dbContext.Expenses
                    .AsNoTracking()
                    .Where(e => e.CorrelationId != null && e.CorrelationId.StartsWith("SalaryPayout_"))
                    .Select(e => e.CorrelationId!)
                    .ToListAsync(ct);

                var existingSet = new HashSet<string>(dbCorrelations);
                var unSynced = paidPayments.Where(p => !existingSet.Contains($"SalaryPayout_{p.Id}")).ToList();
                if (!unSynced.Any()) return;

                var salaryHeader = await _dbContext.ExpenseHeaders
                    .FirstOrDefaultAsync(h => h.Name == "Staff Salary", ct);
                if (salaryHeader == null)
                {
                    salaryHeader = new ExpenseHeader
                    {
                        Name = "Staff Salary",
                        Category = "Expenses",
                        Description = "Operational staff salary and payroll payouts",
                        CreatedBy = 1,
                        CreatedAt = DateTime.UtcNow,
                        UpdatedAt = DateTime.UtcNow
                    };
                    _dbContext.Add(salaryHeader);
                    await _dbContext.SaveChangesAsync(ct);
                }

                var allKeys = unSynced
                    .Where(p => p.SalaryProfile != null)
                    .Select(p => (p.SalaryProfile!.PortalType.ToLower(), p.SalaryProfile.PortalUserId))
                    .Distinct();
                var staffLookup = await GetStaffUserLookupAsync(allKeys, ct);

                foreach (var p in unSynced)
                {
                    string staffInfo = string.Empty;
                    if (p.SalaryProfile != null)
                    {
                        var key = (p.SalaryProfile.PortalType.ToLower(), p.SalaryProfile.PortalUserId);
                        if (staffLookup.TryGetValue(key, out var staffUser) && !string.IsNullOrWhiteSpace(staffUser.name))
                        {
                            var codeStr = string.IsNullOrWhiteSpace(p.SalaryProfile.EmployeeCode) ? string.Empty : $" ({p.SalaryProfile.EmployeeCode})";
                            staffInfo = $" to {staffUser.name}{codeStr}";
                        }
                        else if (!string.IsNullOrWhiteSpace(p.SalaryProfile.EmployeeCode))
                        {
                            staffInfo = $" to Employee {p.SalaryProfile.EmployeeCode}";
                        }
                    }

                    var remarksStr = string.IsNullOrWhiteSpace(p.Remarks) ? string.Empty : $" - {p.Remarks}";
                    var description = $"Salary Payout{staffInfo} for {p.PayrollMonth:D2}/{p.PayrollYear}{remarksStr}";
                    var actionUser = p.PaidByUserId > 0 ? p.PaidByUserId : 1;

                    PaymentMethod payMethod = PaymentMethod.Cash;
                    if (string.Equals(p.PaymentMethod, "Bank Account", StringComparison.OrdinalIgnoreCase))
                    {
                        payMethod = PaymentMethod.Bank;
                    }

                    string expenseNumber = $"TXSEXP{DateTime.UtcNow.Ticks.ToString()[^6..]}";

                    var exp = Expense.Create(
                        expenseNumber: expenseNumber,
                        expenseCategoryId: salaryHeader.Id,
                        amount: p.NetSalary,
                        description: description,
                        paymentMethod: payMethod,
                        expenseDate: p.PaymentDate,
                        correlationId: $"SalaryPayout_{p.Id}",
                        createdBy: actionUser,
                        currency: "BHD",
                        sourceAccountId: p.CashAccountId,
                        sourceBankId: p.BankAccountId,
                        notes: p.Remarks
                    );

                    exp.Submit();
                    exp.Approve(actionUser, 0);

                    _dbContext.Add(exp);
                }

                await _dbContext.SaveChangesAsync(ct);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"[SyncPaidSalaryPaymentsToExpensesAsync] Error: {ex.Message}");
            }
        }

        private async Task<Dictionary<(string portalType, long portalUserId), (string? name, string? email, string? role)>> GetStaffUserLookupAsync(
            IEnumerable<(string portalType, long portalUserId)> keys,
            CancellationToken ct)
        {
            var lookup = new Dictionary<(string portalType, long portalUserId), (string? name, string? email, string? role)>();
            var keyList = keys.Distinct().ToList();
            if (!keyList.Any()) return lookup;

            var localUserIds = keyList.Where(k => string.Equals(k.portalType, "account", StringComparison.OrdinalIgnoreCase)).Select(k => k.portalUserId).Distinct().ToList();
            if (localUserIds.Any())
            {
                var localUsers = await _dbContext.Users.AsNoTracking().Where(u => localUserIds.Contains(u.Id)).ToListAsync(ct);
                foreach (var u in localUsers)
                {
                    lookup[("account", u.Id)] = (u.Name, u.Email, u.IsMasterAccountant() ? "Master Accountant" : "Accountant");
                }
            }

            var hasSalesKeys = keyList.Any(k => string.Equals(k.portalType, "sales", StringComparison.OrdinalIgnoreCase));
            if (hasSalesKeys)
            {
                try
                {
                    var salesUsers = await _salesPortalClient.GetSalesUsersAsync(ct);
                    if (salesUsers != null)
                    {
                        foreach (var su in salesUsers)
                        {
                            lookup[("sales", su.Id)] = (su.Name, su.Email, "Sales Staff");
                        }
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"[GetStaffUserLookupAsync] Sales user lookup failed: {ex.Message}");
                }
            }

            var hasOpKeys = keyList.Any(k => string.Equals(k.portalType, "operational", StringComparison.OrdinalIgnoreCase));
            if (hasOpKeys)
            {
                try
                {
                    var opUsers = await _operationalPortalClient.GetOperationalUsersAsync(ct);
                    if (opUsers != null)
                    {
                        foreach (var ou in opUsers)
                        {
                            lookup[("operational", ou.Id)] = (ou.Name, ou.Email, "Operational Staff");
                        }
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"[GetStaffUserLookupAsync] Operational user lookup failed: {ex.Message}");
                }
            }

            return lookup;
        }
    }
}
using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using TexasAccountsPortal.Domain.Entities;

namespace TexasAccountsPortal.Application.Interfaces
{
    public interface IAccountsDbContext
    {
        IQueryable<AccountsUser> Users { get; }
        IQueryable<Bank> Banks { get; }
        IQueryable<Account> Accounts { get; }
        IQueryable<FinancialTransaction> Transactions { get; }
        IQueryable<Supplier> Suppliers { get; }
        IQueryable<Agent> Agents { get; }
        IQueryable<BalanceCorrection> BalanceCorrections { get; }
        IQueryable<ExpenseHeader> ExpenseHeaders { get; }
        IQueryable<Journal> Journals { get; }
        IQueryable<SupplierPaymentStatus> SupplierPaymentStatuses { get; }
        IQueryable<OutboxMessage> OutboxMessages { get; }
        IQueryable<IdempotencyRecord> IdempotencyRecords { get; }
        IQueryable<AuditLog> AuditLogs { get; }
        IQueryable<RefreshToken> RefreshTokens { get; }
        IQueryable<SupplierPayment> SupplierPayments { get; }
        IQueryable<PurchaseReturn> PurchaseReturns { get; }
        IQueryable<SalesReturn> SalesReturns { get; }
        IQueryable<PendingApproval> PendingApprovals { get; }
        IQueryable<AccountsReceipt> AccountsReceipts { get; }

        // Phase 3 — Accounting
        IQueryable<ChartOfAccount> ChartOfAccounts { get; }
        IQueryable<AccountingPeriod> AccountingPeriods { get; }
        IQueryable<JournalEntry> JournalEntries { get; }
        IQueryable<JournalEntryLine> JournalEntryLines { get; }
        IQueryable<GeneralLedgerEntry> GeneralLedgerEntries { get; }
        IQueryable<Expense> Expenses { get; }
        IQueryable<VisaCountry> VisaCountries { get; }
        IQueryable<VisaPackage> VisaPackages { get; }

        // Payroll & Salary Subsystem
        IQueryable<StaffSalaryProfile> StaffSalaryProfiles { get; }
        IQueryable<SalaryRevision> SalaryRevisions { get; }
        IQueryable<SalaryPayment> SalaryPayments { get; }

        void Add<T>(T entity) where T : class;
        void Remove<T>(T entity) where T : class;
        ValueTask<T?> FindAsync<T>(object[] keyValues, CancellationToken cancellationToken) where T : class;

        Task<int> SaveChangesAsync(CancellationToken cancellationToken);
        Task<System.Collections.Generic.List<OutboxMessage>> ClaimOutboxMessagesAsync(int batchSize, CancellationToken cancellationToken);
    }
}

using Microsoft.EntityFrameworkCore;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Domain.Entities;
using TexasAccountsPortal.Infrastructure.Data.Interceptors;

namespace TexasAccountsPortal.Infrastructure.Data
{
    public class AccountsDbContext : DbContext, IAccountsDbContext
    {
        public AccountsDbContext(DbContextOptions<AccountsDbContext> options)
            : base(options)
        {
        }

        public DbSet<AccountsUser> Users => Set<AccountsUser>();
        public DbSet<Bank> Banks => Set<Bank>();
        public DbSet<Account> Accounts => Set<Account>();
        public DbSet<FinancialTransaction> Transactions => Set<FinancialTransaction>();
        public DbSet<Supplier> Suppliers => Set<Supplier>();
        public DbSet<Agent> Agents => Set<Agent>();
        public DbSet<BalanceCorrection> BalanceCorrections => Set<BalanceCorrection>();
        public DbSet<ExpenseHeader> ExpenseHeaders => Set<ExpenseHeader>();
        public DbSet<Journal> Journals => Set<Journal>();
        public DbSet<SupplierPaymentStatus> SupplierPaymentStatuses => Set<SupplierPaymentStatus>();
        public DbSet<OutboxMessage> OutboxMessages => Set<OutboxMessage>();
        public DbSet<IdempotencyRecord> IdempotencyRecords => Set<IdempotencyRecord>();
        public DbSet<AuditLog> AuditLogs => Set<AuditLog>();
        public DbSet<RefreshToken> RefreshTokens => Set<RefreshToken>();
        public DbSet<SupplierPayment> SupplierPayments => Set<SupplierPayment>();
        public DbSet<PurchaseReturn> PurchaseReturns => Set<PurchaseReturn>();
        public DbSet<SalesReturn> SalesReturns => Set<SalesReturn>();
        public DbSet<PendingApproval> PendingApprovals => Set<PendingApproval>();
        public DbSet<AccountsReceipt> AccountsReceipts => Set<AccountsReceipt>();

        // Phase 3 — Accounting
        public DbSet<ChartOfAccount> ChartOfAccounts => Set<ChartOfAccount>();
        public DbSet<AccountingPeriod> AccountingPeriods => Set<AccountingPeriod>();
        public DbSet<JournalEntry> JournalEntries => Set<JournalEntry>();
        public DbSet<JournalEntryLine> JournalEntryLines => Set<JournalEntryLine>();
        public DbSet<GeneralLedgerEntry> GeneralLedgerEntries => Set<GeneralLedgerEntry>();
        public DbSet<Expense> Expenses => Set<Expense>();
        public DbSet<VisaCountry> VisaCountries => Set<VisaCountry>();
        public DbSet<VisaPackage> VisaPackages => Set<VisaPackage>();

        // Payroll & Salary Subsystem
        public DbSet<StaffSalaryProfile> StaffSalaryProfiles => Set<StaffSalaryProfile>();
        public DbSet<SalaryRevision> SalaryRevisions => Set<SalaryRevision>();
        public DbSet<SalaryPayment> SalaryPayments => Set<SalaryPayment>();

        // Explicit IAccountsDbContext implementations to satisfy signature matching
        IQueryable<AccountsUser> IAccountsDbContext.Users => Users;
        IQueryable<Bank> IAccountsDbContext.Banks => Banks;
        IQueryable<Account> IAccountsDbContext.Accounts => Accounts;
        IQueryable<FinancialTransaction> IAccountsDbContext.Transactions => Transactions;
        IQueryable<Supplier> IAccountsDbContext.Suppliers => Suppliers;
        IQueryable<Agent> IAccountsDbContext.Agents => Agents;
        IQueryable<BalanceCorrection> IAccountsDbContext.BalanceCorrections => BalanceCorrections;
        IQueryable<ExpenseHeader> IAccountsDbContext.ExpenseHeaders => ExpenseHeaders;
        IQueryable<Journal> IAccountsDbContext.Journals => Journals;
        IQueryable<SupplierPaymentStatus> IAccountsDbContext.SupplierPaymentStatuses => SupplierPaymentStatuses;
        IQueryable<OutboxMessage> IAccountsDbContext.OutboxMessages => OutboxMessages;
        IQueryable<IdempotencyRecord> IAccountsDbContext.IdempotencyRecords => IdempotencyRecords;
        IQueryable<AuditLog> IAccountsDbContext.AuditLogs => AuditLogs;
        IQueryable<RefreshToken> IAccountsDbContext.RefreshTokens => RefreshTokens;
        IQueryable<SupplierPayment> IAccountsDbContext.SupplierPayments => SupplierPayments;
        IQueryable<PurchaseReturn> IAccountsDbContext.PurchaseReturns => PurchaseReturns;
        IQueryable<SalesReturn> IAccountsDbContext.SalesReturns => SalesReturns;
        IQueryable<PendingApproval> IAccountsDbContext.PendingApprovals => PendingApprovals;
        IQueryable<AccountsReceipt> IAccountsDbContext.AccountsReceipts => AccountsReceipts;

        // Phase 3 — explicit interface implementations
        IQueryable<ChartOfAccount> IAccountsDbContext.ChartOfAccounts => ChartOfAccounts;
        IQueryable<AccountingPeriod> IAccountsDbContext.AccountingPeriods => AccountingPeriods;
        IQueryable<JournalEntry> IAccountsDbContext.JournalEntries => JournalEntries;
        IQueryable<JournalEntryLine> IAccountsDbContext.JournalEntryLines => JournalEntryLines;
        IQueryable<GeneralLedgerEntry> IAccountsDbContext.GeneralLedgerEntries => GeneralLedgerEntries;
        IQueryable<Expense> IAccountsDbContext.Expenses => Expenses;
        IQueryable<VisaCountry> IAccountsDbContext.VisaCountries => VisaCountries;
        IQueryable<VisaPackage> IAccountsDbContext.VisaPackages => VisaPackages;

        // Payroll explicit interface implementations
        IQueryable<StaffSalaryProfile> IAccountsDbContext.StaffSalaryProfiles => StaffSalaryProfiles;
        IQueryable<SalaryRevision> IAccountsDbContext.SalaryRevisions => SalaryRevisions;
        IQueryable<SalaryPayment> IAccountsDbContext.SalaryPayments => SalaryPayments;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(AccountsDbContext).Assembly);
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.ConfigureWarnings(w => w.Ignore(Microsoft.EntityFrameworkCore.Diagnostics.RelationalEventId.PendingModelChangesWarning));
            // Register our immutability interceptor
            optionsBuilder.AddInterceptors(new TransactionImmutabilityInterceptor());
            base.OnConfiguring(optionsBuilder);
        }

        public new void Add<T>(T entity) where T : class
        {
            base.Add(entity);
        }

        public new void Remove<T>(T entity) where T : class
        {
            base.Remove(entity);
        }

        public new ValueTask<T?> FindAsync<T>(object[] keyValues, CancellationToken cancellationToken) where T : class
        {
            return base.FindAsync<T>(keyValues, cancellationToken);
        }

        public async Task<List<OutboxMessage>> ClaimOutboxMessagesAsync(int batchSize, CancellationToken cancellationToken)
        {
            var utcNow = DateTime.UtcNow;
            return await OutboxMessages
                .FromSqlRaw(
                    @"UPDATE TOP ({0}) outbox_messages WITH (UPDLOCK, READPAST, ROWLOCK)
                      SET Status = 'processing',
                          LastAttemptAt = {1},
                          AttemptCount = AttemptCount + 1
                      OUTPUT inserted.*
                      WHERE Status = 'pending' AND AvailableAt <= {1}",
                    batchSize,
                    utcNow)
                .ToListAsync(cancellationToken);
        }
    }
}

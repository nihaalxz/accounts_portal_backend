using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TexasAccountsPortal.Domain.Entities;
using TexasAccountsPortal.Domain.Enums;

namespace TexasAccountsPortal.Infrastructure.Data.Configurations
{
    // ─── Phase 3: Accounting Entity Configurations ────────────────────────────

    public class ChartOfAccountConfiguration : IEntityTypeConfiguration<ChartOfAccount>
    {
        public void Configure(EntityTypeBuilder<ChartOfAccount> builder)
        {
            builder.ToTable("chart_of_accounts");
            builder.HasKey(a => a.Id);
            builder.Property(a => a.Code).IsRequired().HasMaxLength(20);
            builder.Property(a => a.Name).IsRequired().HasMaxLength(255);
            builder.Property(a => a.Description).HasMaxLength(500);

            builder.HasIndex(a => a.Code).IsUnique();

            builder.Property(a => a.AccountType)
                .HasConversion(
                    v => v.ToString().ToLower(),
                    v => (GlAccountType)System.Enum.Parse(typeof(GlAccountType), v, true)
                ).HasMaxLength(50);

            builder.Property(a => a.NormalBalance)
                .HasConversion(
                    v => v.ToString().ToLower(),
                    v => (NormalBalance)System.Enum.Parse(typeof(NormalBalance), v, true)
                ).HasMaxLength(50);

            builder.Property(a => a.RowVersion)
                .IsRowVersion()
                .IsConcurrencyToken();
        }
    }

    public class AccountingPeriodConfiguration : IEntityTypeConfiguration<AccountingPeriod>
    {
        public void Configure(EntityTypeBuilder<AccountingPeriod> builder)
        {
            builder.ToTable("accounting_periods");
            builder.HasKey(p => p.Id);
            builder.Property(p => p.Name).IsRequired().HasMaxLength(100);
            builder.Property(p => p.ReopenReason).HasMaxLength(500);

            builder.HasIndex(p => new { p.FiscalYear, p.PeriodNumber }).IsUnique();
            builder.HasIndex(p => new { p.StartDate, p.EndDate });

            builder.Property(p => p.Status)
                .HasConversion(
                    v => v.ToString().ToLower(),
                    v => (AccountingPeriodStatus)System.Enum.Parse(typeof(AccountingPeriodStatus), v, true)
                ).HasMaxLength(50);

            builder.Property(p => p.RowVersion)
                .IsRowVersion()
                .IsConcurrencyToken();
        }
    }

    public class JournalEntryConfiguration : IEntityTypeConfiguration<JournalEntry>
    {
        public void Configure(EntityTypeBuilder<JournalEntry> builder)
        {
            builder.ToTable("journal_entries");
            builder.HasKey(j => j.Id);
            builder.Property(j => j.DocumentNumber).HasMaxLength(30);
            builder.HasIndex(j => j.DocumentNumber).IsUnique();
            builder.Property(j => j.JournalNumber).IsRequired().HasMaxLength(50);
            builder.Property(j => j.Description).IsRequired().HasMaxLength(500);
            builder.Property(j => j.Reference).HasMaxLength(255);
            builder.Property(j => j.SourceType).IsRequired().HasMaxLength(100);
            builder.Property(j => j.SourceId).HasMaxLength(255);
            builder.Property(j => j.CorrelationId).IsRequired().HasMaxLength(255);
            builder.Property(j => j.RejectionReason).HasMaxLength(500);

            builder.HasIndex(j => j.JournalNumber).IsUnique();
            builder.HasIndex(j => new { j.SourceType, j.SourceId });
            builder.HasIndex(j => j.Status);
            builder.HasIndex(j => j.EntryDate);

            builder.Property(j => j.Status)
                .HasConversion(
                    v => v.ToString().ToLower(),
                    v => (JournalEntryStatus)System.Enum.Parse(typeof(JournalEntryStatus), v, true)
                ).HasMaxLength(50);

            builder.HasMany(j => j.Lines)
                .WithOne()
                .HasForeignKey(l => l.JournalEntryId)
                .OnDelete(DeleteBehavior.Cascade);

            builder.Property(j => j.RowVersion)
                .IsRowVersion()
                .IsConcurrencyToken();
        }
    }

    public class JournalEntryLineConfiguration : IEntityTypeConfiguration<JournalEntryLine>
    {
        public void Configure(EntityTypeBuilder<JournalEntryLine> builder)
        {
            builder.ToTable("journal_entry_lines");
            builder.HasKey(l => l.Id);
            builder.Property(l => l.LineDescription).HasMaxLength(500);
            builder.Property(l => l.SourceReference).HasMaxLength(255);
            builder.Property(l => l.Debit).HasColumnType("decimal(19,3)");
            builder.Property(l => l.Credit).HasColumnType("decimal(19,3)");

            builder.HasIndex(l => l.JournalEntryId);
            builder.HasIndex(l => l.AccountId);
        }
    }

    public class GeneralLedgerEntryConfiguration : IEntityTypeConfiguration<GeneralLedgerEntry>
    {
        public void Configure(EntityTypeBuilder<GeneralLedgerEntry> builder)
        {
            builder.ToTable("general_ledger_entries");
            builder.HasKey(g => g.Id);
            builder.Property(g => g.Description).IsRequired().HasMaxLength(500);
            builder.Property(g => g.SourceType).IsRequired().HasMaxLength(100);
            builder.Property(g => g.SourceId).IsRequired().HasMaxLength(255);
            builder.Property(g => g.SourceReference).HasMaxLength(255);
            builder.Property(g => g.CorrelationId).IsRequired().HasMaxLength(255);
            builder.Property(g => g.Debit).HasColumnType("decimal(19,3)");
            builder.Property(g => g.Credit).HasColumnType("decimal(19,3)");

            // Append-only: no cascaded deletes; entries are immutable after creation
            builder.HasIndex(g => new { g.AccountId, g.PostingDate });
            builder.HasIndex(g => new { g.SourceType, g.SourceId });
            builder.HasIndex(g => g.JournalEntryId);
            builder.HasIndex(g => g.CorrelationId);
            builder.HasIndex(g => g.PostingDate);
        }
    }

    public class ExpenseConfiguration : IEntityTypeConfiguration<Expense>
    {
        public void Configure(EntityTypeBuilder<Expense> builder)
        {
            builder.ToTable("payments");
            builder.HasKey(e => e.Id);
            builder.Property(e => e.DocumentNumber).HasMaxLength(30);
            builder.HasIndex(e => e.DocumentNumber).IsUnique();
            builder.Property(e => e.ExpenseNumber).IsRequired().HasMaxLength(50);
            builder.Property(e => e.Currency).IsRequired().HasMaxLength(10);
            builder.Property(e => e.Description).IsRequired().HasMaxLength(500);
            builder.Property(e => e.Notes).HasMaxLength(1000);
            builder.Property(e => e.RejectionReason).HasMaxLength(500);
            builder.Property(e => e.CorrelationId).IsRequired().HasMaxLength(255);
            builder.Property(e => e.Amount).HasColumnType("decimal(19,3)");

            builder.HasIndex(e => e.ExpenseNumber).IsUnique();
            builder.HasIndex(e => e.Status);
            builder.HasIndex(e => e.ExpenseDate);
            builder.HasIndex(e => e.ExpenseCategoryId);

            builder.Property(e => e.PaymentMethod)
                .HasConversion(
                    v => v.ToString().ToLower(),
                    v => (PaymentMethod)System.Enum.Parse(typeof(PaymentMethod), v, true)
                ).HasMaxLength(50);

            builder.Property(e => e.Status)
                .HasConversion(
                    v => v.ToString().ToLower(),
                    v => (ExpenseStatus)System.Enum.Parse(typeof(ExpenseStatus), v, true)
                ).HasMaxLength(50);

            builder.Property(e => e.RowVersion)
                .IsRowVersion()
                .IsConcurrencyToken();
        }
    }
}

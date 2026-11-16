using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TexasAccountsPortal.Domain.Entities;

namespace TexasAccountsPortal.Infrastructure.Data.Configurations
{
    public class StaffSalaryProfileConfiguration : IEntityTypeConfiguration<StaffSalaryProfile>
    {
        public void Configure(EntityTypeBuilder<StaffSalaryProfile> builder)
        {
            builder.ToTable("staff_salary_profiles");
            builder.HasKey(s => s.Id);
            builder.Property(s => s.PortalType).IsRequired().HasMaxLength(50);
            builder.Property(s => s.EmployeeCode).IsRequired().HasMaxLength(100);
            builder.Property(s => s.Currency).IsRequired().HasMaxLength(10);
            builder.Property(s => s.BasicSalary).HasColumnType("decimal(19,3)");
            builder.Property(s => s.DefaultMonthlyIncentive).HasColumnType("decimal(19,3)");
            builder.Property(s => s.Status).IsRequired().HasMaxLength(50);
            builder.Property(s => s.Remarks).HasMaxLength(500);

            builder.Property(s => s.EmployeeName).HasMaxLength(255).HasDefaultValue(string.Empty);
            builder.Property(s => s.EmployeeEmail).HasMaxLength(255).HasDefaultValue(string.Empty);

            builder.HasIndex(s => new { s.PortalType, s.PortalUserId });
            builder.HasIndex(s => s.Status);
            builder.HasIndex(s => s.EmployeeName);
        }
    }

    public class SalaryRevisionConfiguration : IEntityTypeConfiguration<SalaryRevision>
    {
        public void Configure(EntityTypeBuilder<SalaryRevision> builder)
        {
            builder.ToTable("salary_revisions");
            builder.HasKey(r => r.Id);
            builder.Property(r => r.OldBasicSalary).HasColumnType("decimal(19,3)");
            builder.Property(r => r.NewBasicSalary).HasColumnType("decimal(19,3)");
            builder.Property(r => r.OldMonthlyIncentive).HasColumnType("decimal(19,3)");
            builder.Property(r => r.NewMonthlyIncentive).HasColumnType("decimal(19,3)");
            builder.Property(r => r.Reason).IsRequired().HasMaxLength(500);

            builder.HasOne(r => r.SalaryProfile)
                .WithMany()
                .HasForeignKey(r => r.SalaryProfileId)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }

    public class SalaryPaymentConfiguration : IEntityTypeConfiguration<SalaryPayment>
    {
        public void Configure(EntityTypeBuilder<SalaryPayment> builder)
        {
            builder.ToTable("salary_payments");
            builder.HasKey(p => p.Id);
            builder.Property(p => p.BasicSalary).HasColumnType("decimal(19,3)");
            builder.Property(p => p.Incentive).HasColumnType("decimal(19,3)");
            builder.Property(p => p.Bonus).HasColumnType("decimal(19,3)");
            builder.Property(p => p.Allowance).HasColumnType("decimal(19,3)");
            builder.Property(p => p.Deduction).HasColumnType("decimal(19,3)");
            builder.Property(p => p.NetSalary).HasColumnType("decimal(19,3)");
            builder.Property(p => p.PaymentMethod).IsRequired().HasMaxLength(50);
            builder.Property(p => p.TransactionReference).HasMaxLength(255);
            builder.Property(p => p.Status).IsRequired().HasMaxLength(50);
            builder.Property(p => p.Remarks).HasMaxLength(500);

            builder.HasOne(p => p.SalaryProfile)
                .WithMany()
                .HasForeignKey(p => p.SalaryProfileId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasOne(p => p.CashAccount)
                .WithMany()
                .HasForeignKey(p => p.CashAccountId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasOne(p => p.BankAccount)
                .WithMany()
                .HasForeignKey(p => p.BankAccountId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasIndex(p => new { p.SalaryProfileId, p.PayrollMonth, p.PayrollYear });
        }
    }
}

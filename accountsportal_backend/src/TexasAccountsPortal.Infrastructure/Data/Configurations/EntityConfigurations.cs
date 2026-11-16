using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System.Text.Json;
using System.Collections.Generic;
using TexasAccountsPortal.Domain.Entities;
using TexasAccountsPortal.Domain.Enums;

namespace TexasAccountsPortal.Infrastructure.Data.Configurations
{
    public class AccountsUserConfiguration : IEntityTypeConfiguration<AccountsUser>
    {
        public void Configure(EntityTypeBuilder<AccountsUser> builder)
        {
            builder.ToTable("users");
            builder.HasKey(u => u.Id);
            builder.Property(u => u.Email).IsRequired().HasMaxLength(255);
            builder.HasIndex(u => u.Email).IsUnique();
            builder.Property(u => u.PasswordHash).IsRequired().HasMaxLength(255);
            builder.Property(u => u.UserType).HasMaxLength(255);

            builder.Property(u => u.PortalPermissions)
                .HasConversion(
                    v => JsonSerializer.Serialize(v, (JsonSerializerOptions?)null),
                    v => JsonSerializer.Deserialize<List<string>>(v, (JsonSerializerOptions?)null) ?? new List<string>()
                );
        }
    }

    public class BankConfiguration : IEntityTypeConfiguration<Bank>
    {
        public void Configure(EntityTypeBuilder<Bank> builder)
        {
            builder.ToTable("banks");
            builder.HasKey(b => b.Id);
            builder.Property(b => b.BankName).IsRequired().HasMaxLength(255);
            builder.Property(b => b.AccountNumber).IsRequired().HasMaxLength(255);
            builder.HasIndex(b => b.AccountNumber).IsUnique();
            
            builder.Property(b => b.Balance).HasColumnType("decimal(19,3)");
            builder.Property(b => b.CurrentBalance).HasColumnType("decimal(19,3)");
            
            builder.Property(b => b.RowVersion)
                .IsRowVersion()
                .IsConcurrencyToken();

            builder.HasQueryFilter(b => b.DeletedAt == null);
        }
    }

    public class AccountConfiguration : IEntityTypeConfiguration<Account>
    {
        public void Configure(EntityTypeBuilder<Account> builder)
        {
            builder.ToTable("accounts");
            builder.HasKey(a => a.Id);
            builder.Property(a => a.Name).IsRequired().HasMaxLength(255);
            
            builder.Property(a => a.Type)
                .HasConversion(
                    v => v.ToString().ToLower(),
                    v => (AccountType)System.Enum.Parse(typeof(AccountType), v, true)
                ).HasMaxLength(50);

            builder.Property(a => a.LedgerType)
                .HasConversion(
                    v => v.ToString().ToLower(),
                    v => (LedgerType)System.Enum.Parse(typeof(LedgerType), v, true)
                ).HasMaxLength(50);

            builder.Property(a => a.Balance).HasColumnType("decimal(19,3)");
            builder.Property(a => a.CurrentBalance).HasColumnType("decimal(19,3)");

            builder.Property(a => a.RowVersion)
                .IsRowVersion()
                .IsConcurrencyToken();

            builder.HasQueryFilter(a => a.DeletedAt == null);
        }
    }

    public class FinancialTransactionConfiguration : IEntityTypeConfiguration<FinancialTransaction>
    {
        public void Configure(EntityTypeBuilder<FinancialTransaction> builder)
        {
            builder.ToTable("transactions");
            builder.HasKey(t => t.Id);
            builder.Property(t => t.DocumentNumber).HasMaxLength(30);
            builder.HasIndex(t => t.DocumentNumber).IsUnique();

            builder.Property(t => t.TransactionType)
                .HasConversion(
                    v => v.ToString().ToLower(),
                    v => (FinancialTransactionType)System.Enum.Parse(typeof(FinancialTransactionType), v, true)
                ).HasMaxLength(50);

            builder.Property(t => t.PaymentMethod)
                .HasConversion(
                    v => v.ToString().ToLower(),
                    v => (PaymentMethod)System.Enum.Parse(typeof(PaymentMethod), v, true)
                ).HasMaxLength(50);

            builder.Property(t => t.Status)
                .HasConversion(
                    v => v.ToString().ToLower(),
                    v => (FinancialTransactionStatus)System.Enum.Parse(typeof(FinancialTransactionStatus), v, true)
                ).HasMaxLength(50);

            builder.Property(t => t.ReferenceType)
                .HasConversion(
                    v => v.HasValue ? v.Value.ToString().ToLower() : null,
                    v => v != null ? (TransactionReferenceType)System.Enum.Parse(typeof(TransactionReferenceType), v, true) : null
                ).HasMaxLength(50);

            builder.Property(t => t.RecipientType)
                .HasConversion(
                    v => v.HasValue ? v.Value.ToString().ToLower() : null,
                    v => v != null ? (RecipientType)System.Enum.Parse(typeof(RecipientType), v, true) : null
                ).HasMaxLength(50);

            builder.Property(t => t.ReceiptOrigin)
                .HasColumnName("receipt_origin")
                .HasConversion(
                    v => v.HasValue ? v.Value.ToString() : null,
                    v => !string.IsNullOrEmpty(v) ? (ReceiptOrigin)System.Enum.Parse(typeof(ReceiptOrigin), v, true) : null
                ).HasMaxLength(50);

            builder.Property(t => t.Amount).HasColumnType("decimal(19,3)");
            builder.Property(t => t.BalanceAfter).HasColumnType("decimal(19,3)");

            builder.HasIndex(t => t.Status);
            builder.HasIndex(t => t.TransactionType);
            builder.HasIndex(t => new { t.ReferenceType, t.ReferenceId });
        }
    }

    public class SupplierConfiguration : IEntityTypeConfiguration<Supplier>
    {
        public void Configure(EntityTypeBuilder<Supplier> builder)
        {
            builder.ToTable("suppliers");
            builder.HasKey(s => s.Id);
            builder.Property(s => s.Name).IsRequired().HasMaxLength(255);
            builder.Property(s => s.Code).IsRequired().HasMaxLength(255);
            builder.HasIndex(s => s.Code).IsUnique();

            builder.Property(s => s.Wallet).HasColumnType("decimal(19,3)");

            builder.Property(s => s.Categories)
                .HasConversion(
                    v => JsonSerializer.Serialize(v, (JsonSerializerOptions?)null),
                    v => JsonSerializer.Deserialize<List<string>>(v, (JsonSerializerOptions?)null) ?? new List<string>()
                );

            builder.Property(s => s.RowVersion)
                .IsRowVersion()
                .IsConcurrencyToken();

            builder.HasQueryFilter(s => s.DeletedAt == null);
        }
    }

    public class AgentConfiguration : IEntityTypeConfiguration<Agent>
    {
        public void Configure(EntityTypeBuilder<Agent> builder)
        {
            builder.ToTable("agents");
            builder.HasKey(a => a.Id);
            builder.Property(a => a.FirstName).IsRequired().HasMaxLength(255);
            builder.Property(a => a.LastName).IsRequired().HasMaxLength(255);
            builder.HasIndex(a => a.SalesmanId);

            builder.Property(a => a.Wallet).HasColumnType("decimal(19,3)");

            builder.Property(a => a.RowVersion)
                .IsRowVersion()
                .IsConcurrencyToken();
        }
    }

    public class BalanceCorrectionConfiguration : IEntityTypeConfiguration<BalanceCorrection>
    {
        public void Configure(EntityTypeBuilder<BalanceCorrection> builder)
        {
            builder.ToTable("balance_corrections");
            builder.HasKey(bc => bc.Id);
            builder.Property(bc => bc.DocumentNumber).HasMaxLength(30);
            builder.HasIndex(bc => bc.DocumentNumber).IsUnique();
            builder.Property(bc => bc.Amount).HasColumnType("decimal(19,3)");
            builder.Property(bc => bc.BalanceAfter).HasColumnType("decimal(19,3)");
            builder.Property(bc => bc.Reason).IsRequired();
        }
    }

    public class ExpenseHeaderConfiguration : IEntityTypeConfiguration<ExpenseHeader>
    {
        public void Configure(EntityTypeBuilder<ExpenseHeader> builder)
        {
            builder.ToTable("payment_categories");
            builder.HasKey(e => e.Id);
            builder.Property(e => e.Name).IsRequired().HasMaxLength(255);
        }
    }

    public class JournalConfiguration : IEntityTypeConfiguration<Journal>
    {
        public void Configure(EntityTypeBuilder<Journal> builder)
        {
            builder.ToTable("journals");
            builder.HasKey(j => j.Id);
            builder.Property(j => j.JournalNumber).IsRequired().HasMaxLength(100);
            builder.Property(j => j.TransferReference).HasMaxLength(255);
            builder.Property(j => j.Amount).HasColumnType("decimal(19,3)");
            builder.Property(j => j.DebitPartyType).IsRequired().HasMaxLength(100);
            builder.Property(j => j.CreditPartyType).IsRequired().HasMaxLength(100);
            builder.Property(j => j.RowVersion).IsRowVersion();
            
            builder.Property(j => j.Status)
                .HasConversion(
                    v => v.ToString().ToLower(),
                    v => (FinancialTransactionStatus)System.Enum.Parse(typeof(FinancialTransactionStatus), v, true)
                ).HasMaxLength(50);
        }
    }

    public class SupplierPaymentStatusConfiguration : IEntityTypeConfiguration<SupplierPaymentStatus>
    {
        public void Configure(EntityTypeBuilder<SupplierPaymentStatus> builder)
        {
            builder.ToTable("supplier_payment_statuses");
            builder.HasKey(s => s.Id);
            builder.Property(s => s.ServiceType).IsRequired().HasMaxLength(255);
            builder.Property(s => s.ServiceId).IsRequired().HasMaxLength(255);
        }
    }

    public class OutboxMessageConfiguration : IEntityTypeConfiguration<OutboxMessage>
    {
        public void Configure(EntityTypeBuilder<OutboxMessage> builder)
        {
            builder.ToTable("outbox_messages");
            builder.HasKey(o => o.Id);
            builder.Property(o => o.MessageType).IsRequired().HasMaxLength(255);
            builder.Property(o => o.AggregateType).IsRequired().HasMaxLength(255);
            builder.Property(o => o.AggregateId).IsRequired().HasMaxLength(255);
            builder.Property(o => o.Payload).IsRequired();
            builder.Property(o => o.Status).IsRequired().HasMaxLength(50);
            builder.Property(o => o.CorrelationId).HasMaxLength(255);

            builder.HasIndex(o => new { o.Status, o.AvailableAt });
        }
    }

    public class IdempotencyRecordConfiguration : IEntityTypeConfiguration<IdempotencyRecord>
    {
        public void Configure(EntityTypeBuilder<IdempotencyRecord> builder)
        {
            builder.ToTable("idempotency_records");
            builder.HasKey(i => i.Id);
            builder.Property(i => i.Scope).IsRequired().HasMaxLength(255);
            builder.Property(i => i.Key).IsRequired().HasMaxLength(255);
            builder.Property(i => i.RequestHash).IsRequired().HasMaxLength(255);
            builder.Property(i => i.Status).IsRequired().HasMaxLength(50);

            builder.HasIndex(i => new { i.Scope, i.Key }).IsUnique();
        }
    }

    public class AuditLogConfiguration : IEntityTypeConfiguration<AuditLog>
    {
        public void Configure(EntityTypeBuilder<AuditLog> builder)
        {
            builder.ToTable("audit_logs");
            builder.HasKey(a => a.Id);
            builder.Property(a => a.Action).IsRequired().HasMaxLength(255);
            builder.Property(a => a.EntityType).IsRequired().HasMaxLength(255);
            builder.Property(a => a.EntityId).IsRequired().HasMaxLength(255);
            builder.Property(a => a.CorrelationId).HasMaxLength(255);
        }
    }

    public class RefreshTokenConfiguration : IEntityTypeConfiguration<RefreshToken>
    {
        public void Configure(EntityTypeBuilder<RefreshToken> builder)
        {
            builder.ToTable("refresh_tokens");
            builder.HasKey(r => r.Id);
            builder.Property(r => r.TokenHash).IsRequired().HasMaxLength(255);
            builder.HasIndex(r => r.TokenHash).IsUnique();
            builder.HasIndex(r => r.UserId);
        }
    }

    public class SupplierPaymentConfiguration : IEntityTypeConfiguration<SupplierPayment>
    {
        public void Configure(EntityTypeBuilder<SupplierPayment> builder)
        {
            builder.ToTable("supplier_payments");
            builder.HasKey(s => s.Id);
            builder.Property(s => s.DocumentNumber).HasMaxLength(30);
            builder.HasIndex(s => s.DocumentNumber).IsUnique();
            builder.Property(s => s.Amount).HasColumnType("decimal(19,3)");
            builder.Property(s => s.Currency).IsRequired().HasMaxLength(10);
            builder.Property(s => s.SourceType).HasMaxLength(100);
            builder.Property(s => s.ReferenceNumber).HasMaxLength(255);
            builder.Property(s => s.ExternalReference).HasMaxLength(255);
            builder.Property(s => s.ServiceType).HasMaxLength(255);
            builder.Property(s => s.Description).HasMaxLength(500);
            builder.Property(s => s.RejectionReason).HasMaxLength(500);
            builder.Property(s => s.CorrelationId).HasMaxLength(255);
            builder.Property(s => s.SalesFeeRowKey).HasMaxLength(36);
            builder.HasIndex(s => s.SalesFeeRowKey).IsUnique().HasDatabaseName("uq_supplier_payments_row_key");
            builder.Property(s => s.NeedsManualReconciliation).HasDefaultValue(false);
            builder.Property(s => s.ReconciliationNote).HasMaxLength(500);

            builder.Property(s => s.PaymentMethod)
                .HasConversion(
                    v => v.ToString().ToLower(),
                    v => (PaymentMethod)System.Enum.Parse(typeof(PaymentMethod), v, true)
                ).HasMaxLength(50);

            builder.Property(s => s.Status)
                .HasConversion(
                    v => v.ToString().ToLower(),
                    v => (FinancialTransactionStatus)System.Enum.Parse(typeof(FinancialTransactionStatus), v, true)
                ).HasMaxLength(50);

            builder.Property(s => s.RowVersion)
                .IsRowVersion()
                .IsConcurrencyToken();
        }
    }

    public class PurchaseReturnConfiguration : IEntityTypeConfiguration<PurchaseReturn>
    {
        public void Configure(EntityTypeBuilder<PurchaseReturn> builder)
        {
            builder.ToTable("purchase_returns");
            builder.HasKey(p => p.Id);
            builder.Property(p => p.DocumentNumber).HasMaxLength(30);
            builder.HasIndex(p => p.DocumentNumber).IsUnique();
            builder.Property(p => p.Amount).HasColumnType("decimal(19,3)");
            builder.Property(p => p.Currency).IsRequired().HasMaxLength(10);
            builder.Property(p => p.OriginalPurchaseReference).IsRequired().HasMaxLength(255);
            builder.Property(p => p.ExternalReference).HasMaxLength(255);
            builder.Property(p => p.ServiceType).HasMaxLength(255);
            builder.Property(p => p.Reason).IsRequired().HasMaxLength(500);
            builder.Property(p => p.RejectionReason).HasMaxLength(500);
            builder.Property(p => p.CorrelationId).HasMaxLength(255);
            builder.Property(p => p.DestinationType).HasMaxLength(100);

            builder.Property(p => p.Status)
                .HasConversion(
                    v => v.ToString().ToLower(),
                    v => (FinancialTransactionStatus)System.Enum.Parse(typeof(FinancialTransactionStatus), v, true)
                ).HasMaxLength(50);

            builder.Property(p => p.RowVersion)
                .IsRowVersion()
                .IsConcurrencyToken();
        }
    }

    public class SalesReturnConfiguration : IEntityTypeConfiguration<SalesReturn>
    {
        public void Configure(EntityTypeBuilder<SalesReturn> builder)
        {
            builder.ToTable("sales_returns");
            builder.HasKey(s => s.Id);
            builder.Property(s => s.DocumentNumber).HasMaxLength(30);
            builder.HasIndex(s => s.DocumentNumber).IsUnique();
            builder.Property(s => s.Amount).HasColumnType("decimal(19,3)");
            builder.Property(s => s.Currency).IsRequired().HasMaxLength(10);
            builder.Property(s => s.OriginalSaleReference).IsRequired().HasMaxLength(255);
            builder.Property(s => s.ExternalReference).HasMaxLength(255);
            builder.Property(s => s.ServiceType).HasMaxLength(255);
            builder.Property(s => s.Reason).IsRequired().HasMaxLength(500);
            builder.Property(s => s.RejectionReason).HasMaxLength(500);
            builder.Property(s => s.CorrelationId).HasMaxLength(255);
            builder.Property(s => s.SourceType).HasMaxLength(100);

            builder.Property(s => s.RecipientType)
                .HasConversion(
                    v => v.ToString().ToLower(),
                    v => (RecipientType)System.Enum.Parse(typeof(RecipientType), v, true)
                ).HasMaxLength(50);

            builder.Property(s => s.Status)
                .HasConversion(
                    v => v.ToString().ToLower(),
                    v => (FinancialTransactionStatus)System.Enum.Parse(typeof(FinancialTransactionStatus), v, true)
                ).HasMaxLength(50);

            builder.Property(s => s.RowVersion)
                .IsRowVersion()
                .IsConcurrencyToken();
        }
    }

    public class PendingApprovalConfiguration : IEntityTypeConfiguration<PendingApproval>
    {
        public void Configure(EntityTypeBuilder<PendingApproval> builder)
        {
            builder.ToTable("pending_approvals");
            builder.HasKey(p => p.Id);
            builder.Property(p => p.DocumentNumber).HasMaxLength(30);
            builder.HasIndex(p => p.DocumentNumber).IsUnique();
            builder.Property(p => p.EntityType).IsRequired().HasMaxLength(50);
            builder.Property(p => p.PayloadJson).IsRequired();
            builder.Property(p => p.SubmittedByName).IsRequired().HasMaxLength(255);
            builder.Property(p => p.Status).IsRequired().HasMaxLength(20);
            builder.Property(p => p.ReviewedByName).HasMaxLength(255);
            
            builder.HasIndex(p => new { p.EntityType, p.Status });
        }
    }

    public class AccountsReceiptConfiguration : IEntityTypeConfiguration<AccountsReceipt>
    {
        public void Configure(EntityTypeBuilder<AccountsReceipt> builder)
        {
            builder.ToTable("accounts_receipts");
            builder.HasKey(r => r.Id);
            builder.Property(r => r.ReceiptNumber).HasColumnName("receipt_number").IsRequired().HasMaxLength(100);
            builder.HasIndex(r => r.ReceiptNumber).IsUnique();

            builder.Property(r => r.ReferenceId).HasColumnName("reference_id").IsRequired().HasMaxLength(100);
            builder.HasIndex(r => r.ReferenceId).IsUnique();

            builder.Property(r => r.DestinationType).HasColumnName("destination_type").IsRequired().HasMaxLength(20);
            builder.Property(r => r.DestinationAccountId).HasColumnName("destination_account_id");
            builder.Property(r => r.DestinationBankId).HasColumnName("destination_bank_id");
            builder.Property(r => r.Amount).HasColumnName("amount").HasColumnType("decimal(18,3)");
            builder.Property(r => r.Narration).HasColumnName("narration");
            builder.Property(r => r.PaymentProof).HasColumnName("payment_proof");
            builder.Property(r => r.CreatedByUserId).HasColumnName("created_by_user_id");
            builder.Property(r => r.CreatedAt).HasColumnName("created_at");
            builder.Property(r => r.Status).HasColumnName("status").HasMaxLength(50);
            builder.Property(r => r.ReceiptCategory)
                .HasColumnName("receipt_category")
                .HasMaxLength(50)
                .HasDefaultValue(ReceiptCategory.General)
                .HasConversion(
                    v => v.ToString(),
                    v => (ReceiptCategory)System.Enum.Parse(typeof(ReceiptCategory), v, true));
            builder.Property(r => r.SalesmanId).HasColumnName("salesman_id");
            builder.Property(r => r.SalesmanName).HasColumnName("salesman_name").HasMaxLength(200);
            builder.Property(r => r.ClientType).HasColumnName("client_type").HasMaxLength(50).HasDefaultValue("general");
            builder.Property(r => r.HeadId).HasColumnName("head_id");
            builder.Property(r => r.AgentId).HasColumnName("agent_id");
            builder.Property(r => r.ClientName).HasColumnName("client_name").HasMaxLength(200);
            builder.Property(r => r.SyncStatus).HasColumnName("sync_status").HasMaxLength(50).HasDefaultValue("Synced");
            builder.Property(r => r.SalesPortalReceiptId).HasColumnName("sales_portal_receipt_id").HasMaxLength(100);
            builder.Property(r => r.SalesPortalDocumentNumber).HasColumnName("sales_portal_document_number").HasMaxLength(100);
            builder.Property(r => r.FailureReason).HasColumnName("failure_reason");
            builder.Property(r => r.ReceiptDate).HasColumnName("receipt_date");

            builder.HasOne(r => r.DestinationAccount)
                .WithMany()
                .HasForeignKey(r => r.DestinationAccountId)
                .OnDelete(DeleteBehavior.SetNull);

            builder.HasOne(r => r.DestinationBank)
                .WithMany()
                .HasForeignKey(r => r.DestinationBankId)
                .OnDelete(DeleteBehavior.SetNull);
        }
    }
}


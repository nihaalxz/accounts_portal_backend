using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TexasAccountsPortal.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class AddDocumentNumbers : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "DocumentNumber",
                table: "transactions",
                type: "nvarchar(30)",
                maxLength: 30,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "DocumentNumber",
                table: "supplier_payments",
                type: "nvarchar(30)",
                maxLength: 30,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "DocumentNumber",
                table: "sales_returns",
                type: "nvarchar(30)",
                maxLength: 30,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "DocumentNumber",
                table: "purchase_returns",
                type: "nvarchar(30)",
                maxLength: 30,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "DocumentNumber",
                table: "pending_approvals",
                type: "nvarchar(30)",
                maxLength: 30,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "DocumentNumber",
                table: "journal_entries",
                type: "nvarchar(30)",
                maxLength: 30,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "DocumentNumber",
                table: "expenses",
                type: "nvarchar(30)",
                maxLength: 30,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "DocumentNumber",
                table: "balance_corrections",
                type: "nvarchar(30)",
                maxLength: 30,
                nullable: false,
                defaultValue: "");

            // Backfill existing rows with unique document numbers using SQL sequences
            migrationBuilder.Sql(@"
                -- Create sequences (idempotent)
                IF NOT EXISTS (SELECT 1 FROM sys.sequences WHERE name = 'Seq_SupplierPaymentDocNo')
                    CREATE SEQUENCE dbo.Seq_SupplierPaymentDocNo START WITH 1 INCREMENT BY 1;
                IF NOT EXISTS (SELECT 1 FROM sys.sequences WHERE name = 'Seq_ExpenseDocNo')
                    CREATE SEQUENCE dbo.Seq_ExpenseDocNo START WITH 1 INCREMENT BY 1;
                IF NOT EXISTS (SELECT 1 FROM sys.sequences WHERE name = 'Seq_TransactionDocNo')
                    CREATE SEQUENCE dbo.Seq_TransactionDocNo START WITH 1 INCREMENT BY 1;
                IF NOT EXISTS (SELECT 1 FROM sys.sequences WHERE name = 'Seq_JournalEntryDocNo')
                    CREATE SEQUENCE dbo.Seq_JournalEntryDocNo START WITH 1 INCREMENT BY 1;
                IF NOT EXISTS (SELECT 1 FROM sys.sequences WHERE name = 'Seq_SalesReturnDocNo')
                    CREATE SEQUENCE dbo.Seq_SalesReturnDocNo START WITH 1 INCREMENT BY 1;
                IF NOT EXISTS (SELECT 1 FROM sys.sequences WHERE name = 'Seq_PurchaseReturnDocNo')
                    CREATE SEQUENCE dbo.Seq_PurchaseReturnDocNo START WITH 1 INCREMENT BY 1;
                IF NOT EXISTS (SELECT 1 FROM sys.sequences WHERE name = 'Seq_BalanceCorrectionDocNo')
                    CREATE SEQUENCE dbo.Seq_BalanceCorrectionDocNo START WITH 1 INCREMENT BY 1;
                IF NOT EXISTS (SELECT 1 FROM sys.sequences WHERE name = 'Seq_PendingApprovalDocNo')
                    CREATE SEQUENCE dbo.Seq_PendingApprovalDocNo START WITH 1 INCREMENT BY 1;

                -- Backfill: assign unique document numbers to existing rows (empty DocumentNumber)
                UPDATE supplier_payments
                SET DocumentNumber = 'TXSPAY' + FORMAT(NEXT VALUE FOR dbo.Seq_SupplierPaymentDocNo, 'D6')
                WHERE DocumentNumber = '' OR DocumentNumber IS NULL;

                UPDATE expenses
                SET DocumentNumber = 'TXSEXP' + FORMAT(NEXT VALUE FOR dbo.Seq_ExpenseDocNo, 'D6')
                WHERE DocumentNumber = '' OR DocumentNumber IS NULL;

                UPDATE transactions
                SET DocumentNumber = 'TXSTRN' + FORMAT(NEXT VALUE FOR dbo.Seq_TransactionDocNo, 'D6')
                WHERE DocumentNumber = '' OR DocumentNumber IS NULL;

                UPDATE journal_entries
                SET DocumentNumber = 'TXSJRN' + FORMAT(NEXT VALUE FOR dbo.Seq_JournalEntryDocNo, 'D6')
                WHERE DocumentNumber = '' OR DocumentNumber IS NULL;

                UPDATE sales_returns
                SET DocumentNumber = 'TXSSRET' + FORMAT(NEXT VALUE FOR dbo.Seq_SalesReturnDocNo, 'D6')
                WHERE DocumentNumber = '' OR DocumentNumber IS NULL;

                UPDATE purchase_returns
                SET DocumentNumber = 'TXSPRET' + FORMAT(NEXT VALUE FOR dbo.Seq_PurchaseReturnDocNo, 'D6')
                WHERE DocumentNumber = '' OR DocumentNumber IS NULL;

                UPDATE balance_corrections
                SET DocumentNumber = 'TXSBAL' + FORMAT(NEXT VALUE FOR dbo.Seq_BalanceCorrectionDocNo, 'D6')
                WHERE DocumentNumber = '' OR DocumentNumber IS NULL;

                UPDATE pending_approvals
                SET DocumentNumber = 'TXSAPPR' + FORMAT(NEXT VALUE FOR dbo.Seq_PendingApprovalDocNo, 'D6')
                WHERE DocumentNumber = '' OR DocumentNumber IS NULL;
            ");

            migrationBuilder.CreateIndex(
                name: "IX_transactions_DocumentNumber",
                table: "transactions",
                column: "DocumentNumber",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_supplier_payments_DocumentNumber",
                table: "supplier_payments",
                column: "DocumentNumber",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_sales_returns_DocumentNumber",
                table: "sales_returns",
                column: "DocumentNumber",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_purchase_returns_DocumentNumber",
                table: "purchase_returns",
                column: "DocumentNumber",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_pending_approvals_DocumentNumber",
                table: "pending_approvals",
                column: "DocumentNumber",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_journal_entries_DocumentNumber",
                table: "journal_entries",
                column: "DocumentNumber",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_expenses_DocumentNumber",
                table: "expenses",
                column: "DocumentNumber",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_balance_corrections_DocumentNumber",
                table: "balance_corrections",
                column: "DocumentNumber",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_transactions_DocumentNumber",
                table: "transactions");

            migrationBuilder.DropIndex(
                name: "IX_supplier_payments_DocumentNumber",
                table: "supplier_payments");

            migrationBuilder.DropIndex(
                name: "IX_sales_returns_DocumentNumber",
                table: "sales_returns");

            migrationBuilder.DropIndex(
                name: "IX_purchase_returns_DocumentNumber",
                table: "purchase_returns");

            migrationBuilder.DropIndex(
                name: "IX_pending_approvals_DocumentNumber",
                table: "pending_approvals");

            migrationBuilder.DropIndex(
                name: "IX_journal_entries_DocumentNumber",
                table: "journal_entries");

            migrationBuilder.DropIndex(
                name: "IX_expenses_DocumentNumber",
                table: "expenses");

            migrationBuilder.DropIndex(
                name: "IX_balance_corrections_DocumentNumber",
                table: "balance_corrections");

            migrationBuilder.DropColumn(
                name: "DocumentNumber",
                table: "transactions");

            migrationBuilder.DropColumn(
                name: "DocumentNumber",
                table: "supplier_payments");

            migrationBuilder.DropColumn(
                name: "DocumentNumber",
                table: "sales_returns");

            migrationBuilder.DropColumn(
                name: "DocumentNumber",
                table: "purchase_returns");

            migrationBuilder.DropColumn(
                name: "DocumentNumber",
                table: "pending_approvals");

            migrationBuilder.DropColumn(
                name: "DocumentNumber",
                table: "journal_entries");

            migrationBuilder.DropColumn(
                name: "DocumentNumber",
                table: "expenses");

            migrationBuilder.DropColumn(
                name: "DocumentNumber",
                table: "balance_corrections");
        }
    }
}

using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TexasAccountsPortal.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class AddSalesFeeRowKeyToSupplierPayments : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "NeedsManualReconciliation",
                table: "supplier_payments",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "ReconciliationNote",
                table: "supplier_payments",
                type: "nvarchar(500)",
                maxLength: 500,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "SalesFeeRowKey",
                table: "supplier_payments",
                type: "nvarchar(36)",
                maxLength: 36,
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "uq_supplier_payments_row_key",
                table: "supplier_payments",
                column: "SalesFeeRowKey",
                unique: true,
                filter: "[SalesFeeRowKey] IS NOT NULL");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "uq_supplier_payments_row_key",
                table: "supplier_payments");

            migrationBuilder.DropColumn(
                name: "NeedsManualReconciliation",
                table: "supplier_payments");

            migrationBuilder.DropColumn(
                name: "ReconciliationNote",
                table: "supplier_payments");

            migrationBuilder.DropColumn(
                name: "SalesFeeRowKey",
                table: "supplier_payments");
        }
    }
}

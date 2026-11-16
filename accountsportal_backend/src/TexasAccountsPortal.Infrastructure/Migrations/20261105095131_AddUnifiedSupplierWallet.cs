using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TexasAccountsPortal.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class AddUnifiedSupplierWallet : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            // First migrate existing dual balances into single signed Wallet:
            // Net balance = Prepaid Wallet - Credit Debt
            migrationBuilder.Sql("UPDATE suppliers SET Wallet = Wallet - CreditWallet;");

            migrationBuilder.DropColumn(
                name: "CreditWallet",
                table: "suppliers");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<decimal>(
                name: "CreditWallet",
                table: "suppliers",
                type: "decimal(19,3)",
                nullable: false,
                defaultValue: 0m);

            // Reconstruct dual balances:
            // If negative, it was CreditWallet (debt). If positive, it was prepaid Wallet.
            migrationBuilder.Sql("UPDATE suppliers SET CreditWallet = CASE WHEN Wallet < 0 THEN -Wallet ELSE 0 END, Wallet = CASE WHEN Wallet < 0 THEN 0 ELSE Wallet END;");
        }
    }
}

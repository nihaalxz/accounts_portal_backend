using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TexasAccountsPortal.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class AddRoutingPropertiesToReturns : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ServiceType",
                table: "supplier_payments",
                type: "nvarchar(255)",
                maxLength: 255,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ServiceType",
                table: "sales_returns",
                type: "nvarchar(255)",
                maxLength: 255,
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "SourceAccountId",
                table: "sales_returns",
                type: "bigint",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "SourceBankId",
                table: "sales_returns",
                type: "bigint",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "SourceType",
                table: "sales_returns",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "DestinationAccountId",
                table: "purchase_returns",
                type: "bigint",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "DestinationBankId",
                table: "purchase_returns",
                type: "bigint",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "DestinationType",
                table: "purchase_returns",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ServiceType",
                table: "purchase_returns",
                type: "nvarchar(255)",
                maxLength: 255,
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ServiceType",
                table: "supplier_payments");

            migrationBuilder.DropColumn(
                name: "ServiceType",
                table: "sales_returns");

            migrationBuilder.DropColumn(
                name: "SourceAccountId",
                table: "sales_returns");

            migrationBuilder.DropColumn(
                name: "SourceBankId",
                table: "sales_returns");

            migrationBuilder.DropColumn(
                name: "SourceType",
                table: "sales_returns");

            migrationBuilder.DropColumn(
                name: "DestinationAccountId",
                table: "purchase_returns");

            migrationBuilder.DropColumn(
                name: "DestinationBankId",
                table: "purchase_returns");

            migrationBuilder.DropColumn(
                name: "DestinationType",
                table: "purchase_returns");

            migrationBuilder.DropColumn(
                name: "ServiceType",
                table: "purchase_returns");
        }
    }
}

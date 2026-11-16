using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TexasAccountsPortal.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class AddAccountsReceiptClientAndSyncColumns : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<long>(
                name: "agent_id",
                table: "accounts_receipts",
                type: "bigint",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "client_name",
                table: "accounts_receipts",
                type: "nvarchar(200)",
                maxLength: 200,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "client_type",
                table: "accounts_receipts",
                type: "nvarchar(50)",
                maxLength: 50,
                nullable: false,
                defaultValue: "general");

            migrationBuilder.AddColumn<string>(
                name: "failure_reason",
                table: "accounts_receipts",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "head_id",
                table: "accounts_receipts",
                type: "bigint",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "receipt_date",
                table: "accounts_receipts",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "sales_portal_document_number",
                table: "accounts_receipts",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "sales_portal_receipt_id",
                table: "accounts_receipts",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "salesman_id",
                table: "accounts_receipts",
                type: "bigint",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "salesman_name",
                table: "accounts_receipts",
                type: "nvarchar(200)",
                maxLength: 200,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "sync_status",
                table: "accounts_receipts",
                type: "nvarchar(50)",
                maxLength: 50,
                nullable: false,
                defaultValue: "Synced");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "agent_id",
                table: "accounts_receipts");

            migrationBuilder.DropColumn(
                name: "client_name",
                table: "accounts_receipts");

            migrationBuilder.DropColumn(
                name: "client_type",
                table: "accounts_receipts");

            migrationBuilder.DropColumn(
                name: "failure_reason",
                table: "accounts_receipts");

            migrationBuilder.DropColumn(
                name: "head_id",
                table: "accounts_receipts");

            migrationBuilder.DropColumn(
                name: "receipt_date",
                table: "accounts_receipts");

            migrationBuilder.DropColumn(
                name: "sales_portal_document_number",
                table: "accounts_receipts");

            migrationBuilder.DropColumn(
                name: "sales_portal_receipt_id",
                table: "accounts_receipts");

            migrationBuilder.DropColumn(
                name: "salesman_id",
                table: "accounts_receipts");

            migrationBuilder.DropColumn(
                name: "salesman_name",
                table: "accounts_receipts");

            migrationBuilder.DropColumn(
                name: "sync_status",
                table: "accounts_receipts");
        }
    }
}

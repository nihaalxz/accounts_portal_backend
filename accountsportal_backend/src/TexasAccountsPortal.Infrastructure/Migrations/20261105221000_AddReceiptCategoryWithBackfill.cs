using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TexasAccountsPortal.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class AddReceiptCategoryWithBackfill : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "receipt_category",
                table: "accounts_receipts",
                type: "nvarchar(50)",
                maxLength: 50,
                nullable: false,
                defaultValue: "General");

            // Backfill: 'ClientWallet' where headId or agentId is not null, or clientType is 'customer'/'agent' (case-insensitive), or a salesman is linked, or legacy narration indicates client settlement; otherwise 'General'.
            migrationBuilder.Sql(@"
                UPDATE accounts_receipts
                SET receipt_category = 'ClientWallet'
                WHERE (COL_LENGTH('accounts_receipts', 'head_id') IS NOT NULL AND head_id IS NOT NULL)
                   OR (COL_LENGTH('accounts_receipts', 'agent_id') IS NOT NULL AND agent_id IS NOT NULL)
                   OR (COL_LENGTH('accounts_receipts', 'salesman_id') IS NOT NULL AND salesman_id IS NOT NULL)
                   OR (COL_LENGTH('accounts_receipts', 'client_type') IS NOT NULL AND LOWER(client_type) IN ('customer', 'agent'))
                   OR narration LIKE '%credit of %'
                   OR narration LIKE '%credit amount received%'
                   OR narration LIKE '%payment received from %';

                UPDATE accounts_receipts
                SET receipt_category = 'General'
                WHERE receipt_category IS NULL OR receipt_category = '';
            ");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "receipt_category",
                table: "accounts_receipts");
        }
    }
}


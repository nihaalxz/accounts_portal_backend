using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TexasAccountsPortal.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class AddJournalEntryApprovalColumns : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "accounts_receipts",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    receipt_number = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    reference_id = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    destination_type = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    destination_account_id = table.Column<long>(type: "bigint", nullable: true),
                    destination_bank_id = table.Column<long>(type: "bigint", nullable: true),
                    amount = table.Column<decimal>(type: "decimal(18,3)", nullable: false),
                    narration = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    payment_proof = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    created_by_user_id = table.Column<long>(type: "bigint", nullable: false),
                    created_at = table.Column<DateTime>(type: "datetime2", nullable: false),
                    status = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_accounts_receipts", x => x.Id);
                    table.ForeignKey(
                        name: "FK_accounts_receipts_accounts_destination_account_id",
                        column: x => x.destination_account_id,
                        principalTable: "accounts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.SetNull);
                    table.ForeignKey(
                        name: "FK_accounts_receipts_banks_destination_bank_id",
                        column: x => x.destination_bank_id,
                        principalTable: "banks",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.SetNull);
                });

            migrationBuilder.CreateIndex(
                name: "IX_accounts_receipts_destination_account_id",
                table: "accounts_receipts",
                column: "destination_account_id");

            migrationBuilder.CreateIndex(
                name: "IX_accounts_receipts_destination_bank_id",
                table: "accounts_receipts",
                column: "destination_bank_id");

            migrationBuilder.CreateIndex(
                name: "IX_accounts_receipts_receipt_number",
                table: "accounts_receipts",
                column: "receipt_number",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_accounts_receipts_reference_id",
                table: "accounts_receipts",
                column: "reference_id",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "accounts_receipts");
        }
    }
}

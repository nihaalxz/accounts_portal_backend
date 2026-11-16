using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TexasAccountsPortal.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class AddReceiptOriginToTransactionsWithBackfill : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "receipt_origin",
                table: "transactions",
                type: "nvarchar(50)",
                maxLength: 50,
                nullable: true);

            // Backfill in strict priority order:
            // a. Transactions linked to an accounts_receipts row:
            //    copy category: ClientWallet if headId/agentId/salesmanId is set or client_type in ('customer', 'agent'), else General.
            // b. Transactions linked to a Sales Portal receipt (ExternalReference / sales receipt id / RecipientType in ('head', 'agent')): ClientWallet.
            // c. Remaining: General.
            migrationBuilder.Sql(@"
                -- Priority a: Linked to accounts_receipts
                UPDATE t
                SET t.receipt_origin = CASE 
                    WHEN ar.head_id IS NOT NULL OR ar.agent_id IS NOT NULL OR ar.salesman_id IS NOT NULL OR LOWER(ar.client_type) IN ('customer', 'agent') 
                        THEN 'ClientWallet'
                    ELSE 'General'
                END
                FROM transactions t
                INNER JOIN accounts_receipts ar ON t.ReferenceId = ar.reference_id OR t.ReferenceId = ar.receipt_number
                WHERE t.receipt_origin IS NULL;

                -- Priority b: Linked to Sales Portal receipt
                UPDATE transactions
                SET receipt_origin = 'ClientWallet'
                WHERE receipt_origin IS NULL
                  AND (
                      LOWER(RecipientType) IN ('head', 'agent')
                      OR Description LIKE '%Customer receipt%'
                      OR Description LIKE '%Agent receipt%'
                      OR ReferenceId LIKE 'TXSRCPT%'
                      OR ReferenceId LIKE 'TX%'
                  );

                -- Priority c: Remaining fallback
                UPDATE transactions
                SET receipt_origin = 'General'
                WHERE receipt_origin IS NULL;
            ");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "receipt_origin",
                table: "transactions");
        }
    }
}


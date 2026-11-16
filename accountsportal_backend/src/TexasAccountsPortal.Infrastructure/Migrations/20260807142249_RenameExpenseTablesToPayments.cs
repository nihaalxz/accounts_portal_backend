using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TexasAccountsPortal.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class RenameExpenseTablesToPayments : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_expenses",
                table: "expenses");

            migrationBuilder.DropPrimaryKey(
                name: "PK_expense_headers",
                table: "expense_headers");

            migrationBuilder.RenameTable(
                name: "expenses",
                newName: "payments");

            migrationBuilder.RenameTable(
                name: "expense_headers",
                newName: "payment_categories");

            migrationBuilder.RenameIndex(
                name: "IX_expenses_Status",
                table: "payments",
                newName: "IX_payments_Status");

            migrationBuilder.RenameIndex(
                name: "IX_expenses_ExpenseNumber",
                table: "payments",
                newName: "IX_payments_ExpenseNumber");

            migrationBuilder.RenameIndex(
                name: "IX_expenses_ExpenseDate",
                table: "payments",
                newName: "IX_payments_ExpenseDate");

            migrationBuilder.RenameIndex(
                name: "IX_expenses_ExpenseCategoryId",
                table: "payments",
                newName: "IX_payments_ExpenseCategoryId");

            migrationBuilder.RenameIndex(
                name: "IX_expenses_DocumentNumber",
                table: "payments",
                newName: "IX_payments_DocumentNumber");

            migrationBuilder.AddPrimaryKey(
                name: "PK_payments",
                table: "payments",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_payment_categories",
                table: "payment_categories",
                column: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_payments",
                table: "payments");

            migrationBuilder.DropPrimaryKey(
                name: "PK_payment_categories",
                table: "payment_categories");

            migrationBuilder.RenameTable(
                name: "payments",
                newName: "expenses");

            migrationBuilder.RenameTable(
                name: "payment_categories",
                newName: "expense_headers");

            migrationBuilder.RenameIndex(
                name: "IX_payments_Status",
                table: "expenses",
                newName: "IX_expenses_Status");

            migrationBuilder.RenameIndex(
                name: "IX_payments_ExpenseNumber",
                table: "expenses",
                newName: "IX_expenses_ExpenseNumber");

            migrationBuilder.RenameIndex(
                name: "IX_payments_ExpenseDate",
                table: "expenses",
                newName: "IX_expenses_ExpenseDate");

            migrationBuilder.RenameIndex(
                name: "IX_payments_ExpenseCategoryId",
                table: "expenses",
                newName: "IX_expenses_ExpenseCategoryId");

            migrationBuilder.RenameIndex(
                name: "IX_payments_DocumentNumber",
                table: "expenses",
                newName: "IX_expenses_DocumentNumber");

            migrationBuilder.AddPrimaryKey(
                name: "PK_expenses",
                table: "expenses",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_expense_headers",
                table: "expense_headers",
                column: "Id");
        }
    }
}

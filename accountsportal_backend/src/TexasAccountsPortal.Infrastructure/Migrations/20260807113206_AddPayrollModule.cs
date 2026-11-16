using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TexasAccountsPortal.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class AddPayrollModule : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "staff_salary_profiles",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PortalType = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    PortalUserId = table.Column<long>(type: "bigint", nullable: false),
                    EmployeeCode = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    BasicSalary = table.Column<decimal>(type: "decimal(19,3)", nullable: false),
                    DefaultMonthlyIncentive = table.Column<decimal>(type: "decimal(19,3)", nullable: false),
                    Currency = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    EffectiveFrom = table.Column<DateTime>(type: "datetime2", nullable: false),
                    EffectiveTo = table.Column<DateTime>(type: "datetime2", nullable: true),
                    Status = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Remarks = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_staff_salary_profiles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "salary_payments",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    SalaryProfileId = table.Column<long>(type: "bigint", nullable: false),
                    PayrollMonth = table.Column<int>(type: "int", nullable: false),
                    PayrollYear = table.Column<int>(type: "int", nullable: false),
                    BasicSalary = table.Column<decimal>(type: "decimal(19,3)", nullable: false),
                    Incentive = table.Column<decimal>(type: "decimal(19,3)", nullable: false),
                    Bonus = table.Column<decimal>(type: "decimal(19,3)", nullable: false),
                    Allowance = table.Column<decimal>(type: "decimal(19,3)", nullable: false),
                    Deduction = table.Column<decimal>(type: "decimal(19,3)", nullable: false),
                    NetSalary = table.Column<decimal>(type: "decimal(19,3)", nullable: false),
                    PaymentMethod = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    CashAccountId = table.Column<long>(type: "bigint", nullable: true),
                    BankAccountId = table.Column<long>(type: "bigint", nullable: true),
                    TransactionReference = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    PaymentDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    PaidByUserId = table.Column<long>(type: "bigint", nullable: false),
                    Status = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Remarks = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_salary_payments", x => x.Id);
                    table.ForeignKey(
                        name: "FK_salary_payments_accounts_CashAccountId",
                        column: x => x.CashAccountId,
                        principalTable: "accounts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_salary_payments_banks_BankAccountId",
                        column: x => x.BankAccountId,
                        principalTable: "banks",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_salary_payments_staff_salary_profiles_SalaryProfileId",
                        column: x => x.SalaryProfileId,
                        principalTable: "staff_salary_profiles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "salary_revisions",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    SalaryProfileId = table.Column<long>(type: "bigint", nullable: false),
                    OldBasicSalary = table.Column<decimal>(type: "decimal(19,3)", nullable: false),
                    NewBasicSalary = table.Column<decimal>(type: "decimal(19,3)", nullable: false),
                    OldMonthlyIncentive = table.Column<decimal>(type: "decimal(19,3)", nullable: false),
                    NewMonthlyIncentive = table.Column<decimal>(type: "decimal(19,3)", nullable: false),
                    Reason = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: false),
                    EffectiveDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    ChangedBy = table.Column<long>(type: "bigint", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_salary_revisions", x => x.Id);
                    table.ForeignKey(
                        name: "FK_salary_revisions_staff_salary_profiles_SalaryProfileId",
                        column: x => x.SalaryProfileId,
                        principalTable: "staff_salary_profiles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_salary_payments_BankAccountId",
                table: "salary_payments",
                column: "BankAccountId");

            migrationBuilder.CreateIndex(
                name: "IX_salary_payments_CashAccountId",
                table: "salary_payments",
                column: "CashAccountId");

            migrationBuilder.CreateIndex(
                name: "IX_salary_payments_SalaryProfileId_PayrollMonth_PayrollYear",
                table: "salary_payments",
                columns: new[] { "SalaryProfileId", "PayrollMonth", "PayrollYear" });

            migrationBuilder.CreateIndex(
                name: "IX_salary_revisions_SalaryProfileId",
                table: "salary_revisions",
                column: "SalaryProfileId");

            migrationBuilder.CreateIndex(
                name: "IX_staff_salary_profiles_PortalType_PortalUserId",
                table: "staff_salary_profiles",
                columns: new[] { "PortalType", "PortalUserId" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "salary_payments");

            migrationBuilder.DropTable(
                name: "salary_revisions");

            migrationBuilder.DropTable(
                name: "staff_salary_profiles");
        }
    }
}

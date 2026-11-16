using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TexasAccountsPortal.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class AddVisaMaster : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("DROP TABLE IF EXISTS [commission_records];");
            migrationBuilder.Sql("DROP TABLE IF EXISTS [incentive_records];");
            migrationBuilder.Sql("DROP TABLE IF EXISTS [loan_repayment_schedules];");
            migrationBuilder.Sql("DROP TABLE IF EXISTS [payroll_adjustments];");
            migrationBuilder.Sql("DROP TABLE IF EXISTS [payroll_reversal_records];");
            migrationBuilder.Sql("DROP TABLE IF EXISTS [payroll_run_employee_components];");
            migrationBuilder.Sql("DROP TABLE IF EXISTS [salary_payments];");
            migrationBuilder.Sql("DROP TABLE IF EXISTS [staff_advances];");
            migrationBuilder.Sql("DROP TABLE IF EXISTS [staff_compensation_components];");
            migrationBuilder.Sql("DROP TABLE IF EXISTS [staff_payroll_records];");
            migrationBuilder.Sql("DROP TABLE IF EXISTS [staff_profiles];");
            migrationBuilder.Sql("DROP TABLE IF EXISTS [staff_reimbursements];");
            migrationBuilder.Sql("DROP TABLE IF EXISTS [staff_loans];");
            migrationBuilder.Sql("DROP TABLE IF EXISTS [payroll_run_employees];");
            migrationBuilder.Sql("DROP TABLE IF EXISTS [salary_components];");
            migrationBuilder.Sql("DROP TABLE IF EXISTS [staff_compensation_profiles];");
            migrationBuilder.Sql("DROP TABLE IF EXISTS [payroll_runs];");
            migrationBuilder.Sql("DROP TABLE IF EXISTS [payroll_periods];");

            migrationBuilder.CreateTable(
                name: "VisaCountries",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Code = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IsActive = table.Column<bool>(type: "bit", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VisaCountries", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "VisaPackages",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CountryId = table.Column<long>(type: "bigint", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IsActive = table.Column<bool>(type: "bit", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VisaPackages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_VisaPackages_VisaCountries_CountryId",
                        column: x => x.CountryId,
                        principalTable: "VisaCountries",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_VisaPackages_CountryId",
                table: "VisaPackages",
                column: "CountryId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "VisaPackages");

            migrationBuilder.DropTable(
                name: "VisaCountries");

            migrationBuilder.CreateTable(
                name: "commission_records",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Amount = table.Column<decimal>(type: "decimal(19,3)", nullable: false),
                    BookingId = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    BookingType = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Month = table.Column<int>(type: "int", nullable: false),
                    PayrollRunId = table.Column<long>(type: "bigint", nullable: true),
                    RowVersion = table.Column<byte[]>(type: "rowversion", rowVersion: true, nullable: false),
                    SourceReference = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    StaffId = table.Column<long>(type: "bigint", nullable: false),
                    Status = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Year = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_commission_records", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "incentive_records",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Amount = table.Column<decimal>(type: "decimal(19,3)", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Month = table.Column<int>(type: "int", nullable: false),
                    PayrollRunId = table.Column<long>(type: "bigint", nullable: true),
                    RowVersion = table.Column<byte[]>(type: "rowversion", rowVersion: true, nullable: false),
                    SourceReference = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    StaffId = table.Column<long>(type: "bigint", nullable: false),
                    Status = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Year = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_incentive_records", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "payroll_periods",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    EndDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    IsClosed = table.Column<bool>(type: "bit", nullable: false),
                    Month = table.Column<int>(type: "int", nullable: false),
                    RowVersion = table.Column<byte[]>(type: "rowversion", rowVersion: true, nullable: false),
                    StartDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Year = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_payroll_periods", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "payroll_reversal_records",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    OriginalPayrollRunId = table.Column<long>(type: "bigint", nullable: false),
                    Reason = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: false),
                    ReversedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    ReversedBy = table.Column<long>(type: "bigint", nullable: false),
                    ReversingJournalEntryId = table.Column<long>(type: "bigint", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_payroll_reversal_records", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "salary_components",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Code = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    GlAccountCode = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    IsActive = table.Column<bool>(type: "bit", nullable: false),
                    IsSystem = table.Column<bool>(type: "bit", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    RowVersion = table.Column<byte[]>(type: "rowversion", rowVersion: true, nullable: false),
                    Type = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_salary_components", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "salary_payments",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Amount = table.Column<decimal>(type: "decimal(19,3)", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatedBy = table.Column<long>(type: "bigint", nullable: false),
                    PaymentDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    PaymentMethod = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    PayrollRunId = table.Column<long>(type: "bigint", nullable: false),
                    ReferenceNumber = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    SourceAccountId = table.Column<long>(type: "bigint", nullable: true),
                    SourceBankId = table.Column<long>(type: "bigint", nullable: true),
                    StaffId = table.Column<long>(type: "bigint", nullable: false),
                    TransactionId = table.Column<long>(type: "bigint", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_salary_payments", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "staff_advances",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Amount = table.Column<decimal>(type: "decimal(19,3)", nullable: false),
                    DisbursedAt = table.Column<DateTime>(type: "datetime2", nullable: true),
                    Month = table.Column<int>(type: "int", nullable: false),
                    Notes = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true),
                    OutstandingBalance = table.Column<decimal>(type: "decimal(19,3)", nullable: false),
                    PaymentMethod = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    ReferenceNumber = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    RowVersion = table.Column<byte[]>(type: "rowversion", rowVersion: true, nullable: false),
                    SourceAccountId = table.Column<long>(type: "bigint", nullable: true),
                    SourceBankId = table.Column<long>(type: "bigint", nullable: true),
                    StaffId = table.Column<long>(type: "bigint", nullable: false),
                    StaffName = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    Status = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Year = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_staff_advances", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "staff_compensation_profiles",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    EffectiveFrom = table.Column<DateTime>(type: "datetime2", nullable: false),
                    EffectiveTo = table.Column<DateTime>(type: "datetime2", nullable: true),
                    IsActive = table.Column<bool>(type: "bit", nullable: false),
                    RowVersion = table.Column<byte[]>(type: "rowversion", rowVersion: true, nullable: false),
                    StaffId = table.Column<long>(type: "bigint", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_staff_compensation_profiles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "staff_loans",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DisbursedAt = table.Column<DateTime>(type: "datetime2", nullable: true),
                    Month = table.Column<int>(type: "int", nullable: false),
                    Notes = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true),
                    OutstandingBalance = table.Column<decimal>(type: "decimal(19,3)", nullable: false),
                    PaymentMethod = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    PrincipalAmount = table.Column<decimal>(type: "decimal(19,3)", nullable: false),
                    ReferenceNumber = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    RowVersion = table.Column<byte[]>(type: "rowversion", rowVersion: true, nullable: false),
                    SourceAccountId = table.Column<long>(type: "bigint", nullable: true),
                    SourceBankId = table.Column<long>(type: "bigint", nullable: true),
                    StaffId = table.Column<long>(type: "bigint", nullable: false),
                    StaffName = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    Status = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Year = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_staff_loans", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "staff_payroll_records",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Amount = table.Column<decimal>(type: "decimal(19,3)", nullable: false),
                    Breakdown = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ConfirmedAt = table.Column<DateTime>(type: "datetime2", nullable: true),
                    ConfirmedBy = table.Column<long>(type: "bigint", nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatedBy = table.Column<long>(type: "bigint", nullable: false),
                    Direction = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Month = table.Column<int>(type: "int", nullable: false),
                    Notes = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PaymentDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    PaymentMethod = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ReferenceNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SourceAccountId = table.Column<long>(type: "bigint", nullable: true),
                    SourceBankId = table.Column<long>(type: "bigint", nullable: true),
                    StaffId = table.Column<long>(type: "bigint", nullable: false),
                    StaffName = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    Status = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Type = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Year = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_staff_payroll_records", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "staff_profiles",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false),
                    BasicSalary = table.Column<decimal>(type: "decimal(19,3)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    HousingAllowance = table.Column<decimal>(type: "decimal(19,3)", nullable: false),
                    IsActive = table.Column<bool>(type: "bit", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    RowVersion = table.Column<byte[]>(type: "rowversion", rowVersion: true, nullable: false),
                    TransportAllowance = table.Column<decimal>(type: "decimal(19,3)", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UserType = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_staff_profiles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "staff_reimbursements",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Amount = table.Column<decimal>(type: "decimal(19,3)", nullable: false),
                    ApprovedAt = table.Column<DateTime>(type: "datetime2", nullable: true),
                    ApprovedBy = table.Column<long>(type: "bigint", nullable: true),
                    Description = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: false),
                    PaidAt = table.Column<DateTime>(type: "datetime2", nullable: true),
                    PaymentMethod = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    PayrollRunId = table.Column<long>(type: "bigint", nullable: true),
                    RowVersion = table.Column<byte[]>(type: "rowversion", rowVersion: true, nullable: false),
                    SourceAccountId = table.Column<long>(type: "bigint", nullable: true),
                    SourceBankId = table.Column<long>(type: "bigint", nullable: true),
                    SourceReference = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    StaffId = table.Column<long>(type: "bigint", nullable: false),
                    StaffName = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    Status = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_staff_reimbursements", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "payroll_runs",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PayrollPeriodId = table.Column<long>(type: "bigint", nullable: false),
                    ApprovedAt = table.Column<DateTime>(type: "datetime2", nullable: true),
                    ApprovedBy = table.Column<long>(type: "bigint", nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatedBy = table.Column<long>(type: "bigint", nullable: false),
                    PostedJournalEntryId = table.Column<long>(type: "bigint", nullable: true),
                    RowVersion = table.Column<byte[]>(type: "rowversion", rowVersion: true, nullable: false),
                    Status = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_payroll_runs", x => x.Id);
                    table.ForeignKey(
                        name: "FK_payroll_runs_payroll_periods_PayrollPeriodId",
                        column: x => x.PayrollPeriodId,
                        principalTable: "payroll_periods",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "payroll_adjustments",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    SalaryComponentId = table.Column<long>(type: "bigint", nullable: false),
                    Amount = table.Column<decimal>(type: "decimal(19,3)", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatedBy = table.Column<long>(type: "bigint", nullable: false),
                    PayrollPeriodId = table.Column<long>(type: "bigint", nullable: false),
                    PayrollRunId = table.Column<long>(type: "bigint", nullable: true),
                    Reason = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: false),
                    RowVersion = table.Column<byte[]>(type: "rowversion", rowVersion: true, nullable: false),
                    StaffId = table.Column<long>(type: "bigint", nullable: false),
                    Status = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Type = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_payroll_adjustments", x => x.Id);
                    table.ForeignKey(
                        name: "FK_payroll_adjustments_salary_components_SalaryComponentId",
                        column: x => x.SalaryComponentId,
                        principalTable: "salary_components",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "staff_compensation_components",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    SalaryComponentId = table.Column<long>(type: "bigint", nullable: false),
                    StaffCompensationProfileId = table.Column<long>(type: "bigint", nullable: false),
                    Amount = table.Column<decimal>(type: "decimal(19,3)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_staff_compensation_components", x => x.Id);
                    table.ForeignKey(
                        name: "FK_staff_compensation_components_salary_components_SalaryComponentId",
                        column: x => x.SalaryComponentId,
                        principalTable: "salary_components",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_staff_compensation_components_staff_compensation_profiles_StaffCompensationProfileId",
                        column: x => x.StaffCompensationProfileId,
                        principalTable: "staff_compensation_profiles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "loan_repayment_schedules",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    StaffLoanId = table.Column<long>(type: "bigint", nullable: false),
                    Amount = table.Column<decimal>(type: "decimal(19,3)", nullable: false),
                    AmountPaid = table.Column<decimal>(type: "decimal(19,3)", nullable: false),
                    DueDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    PayrollRunId = table.Column<long>(type: "bigint", nullable: true),
                    Status = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_loan_repayment_schedules", x => x.Id);
                    table.ForeignKey(
                        name: "FK_loan_repayment_schedules_staff_loans_StaffLoanId",
                        column: x => x.StaffLoanId,
                        principalTable: "staff_loans",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "payroll_run_employees",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PayrollRunId = table.Column<long>(type: "bigint", nullable: false),
                    BasicSalary = table.Column<decimal>(type: "decimal(19,3)", nullable: false),
                    GrossEarnings = table.Column<decimal>(type: "decimal(19,3)", nullable: false),
                    HousingAllowance = table.Column<decimal>(type: "decimal(19,3)", nullable: false),
                    IsPaid = table.Column<bool>(type: "bit", nullable: false),
                    NetSalary = table.Column<decimal>(type: "decimal(19,3)", nullable: false),
                    Notes = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true),
                    PaidAmount = table.Column<decimal>(type: "decimal(19,3)", nullable: false),
                    StaffId = table.Column<long>(type: "bigint", nullable: false),
                    StaffName = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    TotalDeductions = table.Column<decimal>(type: "decimal(19,3)", nullable: false),
                    TransportAllowance = table.Column<decimal>(type: "decimal(19,3)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_payroll_run_employees", x => x.Id);
                    table.ForeignKey(
                        name: "FK_payroll_run_employees_payroll_runs_PayrollRunId",
                        column: x => x.PayrollRunId,
                        principalTable: "payroll_runs",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "payroll_run_employee_components",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PayrollRunEmployeeId = table.Column<long>(type: "bigint", nullable: false),
                    Amount = table.Column<decimal>(type: "decimal(19,3)", nullable: false),
                    SalaryComponentCode = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    SalaryComponentId = table.Column<long>(type: "bigint", nullable: false),
                    SalaryComponentName = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    SourceReference = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    Type = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_payroll_run_employee_components", x => x.Id);
                    table.ForeignKey(
                        name: "FK_payroll_run_employee_components_payroll_run_employees_PayrollRunEmployeeId",
                        column: x => x.PayrollRunEmployeeId,
                        principalTable: "payroll_run_employees",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_commission_records_SourceReference",
                table: "commission_records",
                column: "SourceReference",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_incentive_records_SourceReference",
                table: "incentive_records",
                column: "SourceReference",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_loan_repayment_schedules_StaffLoanId",
                table: "loan_repayment_schedules",
                column: "StaffLoanId");

            migrationBuilder.CreateIndex(
                name: "IX_payroll_adjustments_SalaryComponentId",
                table: "payroll_adjustments",
                column: "SalaryComponentId");

            migrationBuilder.CreateIndex(
                name: "IX_payroll_periods_Month_Year",
                table: "payroll_periods",
                columns: new[] { "Month", "Year" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_payroll_run_employee_components_PayrollRunEmployeeId",
                table: "payroll_run_employee_components",
                column: "PayrollRunEmployeeId");

            migrationBuilder.CreateIndex(
                name: "IX_payroll_run_employees_PayrollRunId",
                table: "payroll_run_employees",
                column: "PayrollRunId");

            migrationBuilder.CreateIndex(
                name: "IX_payroll_runs_PayrollPeriodId",
                table: "payroll_runs",
                column: "PayrollPeriodId");

            migrationBuilder.CreateIndex(
                name: "IX_salary_components_Code",
                table: "salary_components",
                column: "Code",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_staff_compensation_components_SalaryComponentId",
                table: "staff_compensation_components",
                column: "SalaryComponentId");

            migrationBuilder.CreateIndex(
                name: "IX_staff_compensation_components_StaffCompensationProfileId",
                table: "staff_compensation_components",
                column: "StaffCompensationProfileId");
        }
    }
}

using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TexasAccountsPortal.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class AddStaffProfileIndexedColumns : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "EmployeeEmail",
                table: "staff_salary_profiles",
                type: "nvarchar(255)",
                maxLength: 255,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "EmployeeName",
                table: "staff_salary_profiles",
                type: "nvarchar(255)",
                maxLength: 255,
                nullable: false,
                defaultValue: "");

            migrationBuilder.CreateIndex(
                name: "IX_staff_salary_profiles_EmployeeName",
                table: "staff_salary_profiles",
                column: "EmployeeName");

            migrationBuilder.CreateIndex(
                name: "IX_staff_salary_profiles_Status",
                table: "staff_salary_profiles",
                column: "Status");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_staff_salary_profiles_EmployeeName",
                table: "staff_salary_profiles");

            migrationBuilder.DropIndex(
                name: "IX_staff_salary_profiles_Status",
                table: "staff_salary_profiles");

            migrationBuilder.DropColumn(
                name: "EmployeeEmail",
                table: "staff_salary_profiles");

            migrationBuilder.DropColumn(
                name: "EmployeeName",
                table: "staff_salary_profiles");
        }
    }
}

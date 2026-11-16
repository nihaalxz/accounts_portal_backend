using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TexasAccountsPortal.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class RemoveSalesmanIdUniqueConstraint : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_agents_SalesmanId",
                table: "agents");

            migrationBuilder.CreateIndex(
                name: "IX_agents_SalesmanId",
                table: "agents",
                column: "SalesmanId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_agents_SalesmanId",
                table: "agents");

            migrationBuilder.CreateIndex(
                name: "IX_agents_SalesmanId",
                table: "agents",
                column: "SalesmanId",
                unique: true,
                filter: "[SalesmanId] IS NOT NULL");
        }
    }
}

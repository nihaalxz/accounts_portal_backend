using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TexasAccountsPortal.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class UpdateDefaultCurrencyToBhd : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("UPDATE payments SET Currency = 'BHD' WHERE Currency = 'AED' OR Currency IS NULL OR Currency = '';");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}

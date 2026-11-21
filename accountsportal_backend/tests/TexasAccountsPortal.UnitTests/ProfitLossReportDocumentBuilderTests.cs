using Microsoft.Extensions.Options;
using TexasAccountsPortal.Application.Features.Documents.Builders;
using TexasAccountsPortal.Application.Features.Documents.Models;
using TexasAccountsPortal.Application.Interfaces;
using Xunit;

namespace TexasAccountsPortal.UnitTests
{
    public class ProfitLossReportDocumentBuilderTests
    {
        [Theory]
        [InlineData("report", "profit-loss-operational", true)]
        [InlineData("report", "profit-loss", true)]
        [InlineData("report", "profitloss", true)]
        [InlineData("report", "pnl", true)]
        [InlineData("report", "income-statement", true)]
        [InlineData("report", "operational-profit-loss", true)]
        [InlineData("invoice", "profit-loss-operational", false)]
        [InlineData("report", "unknown-report", false)]
        public void CanBuild_ValidatesCategoriesAndTypes(string category, string type, bool expected)
        {
            var options = Options.Create(new DocumentOptions());
            var builder = new ProfitLossReportDocumentBuilder(null!, options);

            var result = builder.CanBuild(category, type);

            Assert.Equal(expected, result);
        }
    }
}

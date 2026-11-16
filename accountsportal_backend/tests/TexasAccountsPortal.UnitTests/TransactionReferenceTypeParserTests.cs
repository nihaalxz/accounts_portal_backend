using TexasAccountsPortal.Domain.Enums;
using TexasAccountsPortal.Domain.Services;
using Xunit;

namespace TexasAccountsPortal.UnitTests
{
    public class TransactionReferenceTypeParserTests
    {
        [Theory]
        [InlineData("visa", TransactionReferenceType.Visa)]
        [InlineData("visa_application", TransactionReferenceType.Visa)]
        [InlineData("sales-visa", TransactionReferenceType.Visa)]
        [InlineData("flight", TransactionReferenceType.Flight)]
        [InlineData("flight_booking", TransactionReferenceType.Flight)]
        [InlineData("hotel", TransactionReferenceType.Hotel)]
        [InlineData("holiday", TransactionReferenceType.Holiday)]
        [InlineData("transportation", TransactionReferenceType.Transport)]
        [InlineData("vfs", TransactionReferenceType.Vfs)]
        [InlineData("other_service", TransactionReferenceType.Other)]
        [InlineData("receipt", TransactionReferenceType.Receipt)]
        [InlineData("sale", TransactionReferenceType.Receipt)]
        public void TryParse_ValidInputs_ReturnsExpectedEnum(string input, TransactionReferenceType expected)
        {
            var success = TransactionReferenceTypeParser.TryParse(input, out var result);

            Assert.True(success);
            Assert.Equal(expected, result);
        }

        [Fact]
        public void ToApiString_BusinessTypes_ReturnsLowerKey()
        {
            Assert.Equal("visa", TransactionReferenceTypeParser.ToApiString(TransactionReferenceType.Visa));
            Assert.Equal("receipt", TransactionReferenceTypeParser.ToApiString(TransactionReferenceType.Receipt));
            Assert.Equal("transport", TransactionReferenceTypeParser.ToApiString(TransactionReferenceType.Transport));
        }

        [Fact]
        public void IsBusinessReference_IdentifiesBusinessModuleTypes()
        {
            Assert.True(TransactionReferenceTypeParser.IsBusinessReference(TransactionReferenceType.Visa));
            Assert.True(TransactionReferenceTypeParser.IsBusinessReference(TransactionReferenceType.Receipt));
            Assert.False(TransactionReferenceTypeParser.IsBusinessReference(TransactionReferenceType.Salary));
        }
    }
}

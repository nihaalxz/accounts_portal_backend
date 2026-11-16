using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TexasAccountsPortal.Domain.Entities;
using TexasAccountsPortal.Domain.Enums;
using TexasAccountsPortal.Infrastructure.Data;
using TexasAccountsPortal.Infrastructure.Services;
using Xunit;

namespace TexasAccountsPortal.UnitTests
{
    public class TransactionPresentationMapperTests
    {
        [Fact]
        public async Task NormalizeDescription_ConvertsRawServiceSlugsAndHashesCorrectly()
        {
            // Arrange
            var options = new DbContextOptionsBuilder<AccountsDbContext>()
                .UseInMemoryDatabase(databaseName: Guid.NewGuid().ToString())
                .Options;

            using var dbContext = new AccountsDbContext(options);

            var mapper = new TransactionPresentationMapper(dbContext);

            var tx1 = FinancialTransaction.Create(
                FinancialTransactionType.Incoming,
                50.000m,
                PaymentMethod.Cash,
                createdBy: 1,
                description: "Payment approved for flights #48"
            );

            var tx2 = FinancialTransaction.Create(
                FinancialTransactionType.Outgoing,
                150.000m,
                PaymentMethod.Bank,
                createdBy: 1,
                description: "Payment approved for hotels #15"
            );

            var tx3 = FinancialTransaction.Create(
                FinancialTransactionType.Incoming,
                25.000m,
                PaymentMethod.Credit,
                createdBy: 1,
                description: "Payment approved for visa #12 and # TXSTRN000107"
            );

            // Act
            var res1 = await mapper.MapToResponseAsync(tx1);
            var res2 = await mapper.MapToResponseAsync(tx2);
            var res3 = await mapper.MapToResponseAsync(tx3);

            // Assert
            Assert.Equal("Payment approved for Flight Booking #48", res1.DisplayDescription);
            Assert.Equal("Payment approved for Hotel Booking #15", res2.DisplayDescription);
            Assert.Equal("Payment approved for Visa Application #12 and TXSTRN000107", res3.DisplayDescription);
        }

        [Fact]
        public async Task AccountName_And_Narrative_AreFormattedInTitleCase()
        {
            // Arrange
            var options = new DbContextOptionsBuilder<AccountsDbContext>()
                .UseInMemoryDatabase(databaseName: Guid.NewGuid().ToString())
                .Options;

            using var dbContext = new AccountsDbContext(options);
            
            var account = new Account { Name = "company cash", Type = AccountType.Cash, LedgerType = LedgerType.Asset };
            dbContext.Accounts.Add(account);
            await dbContext.SaveChangesAsync();

            var mapper = new TransactionPresentationMapper(dbContext);

            var tx = FinancialTransaction.Create(
                FinancialTransactionType.Incoming,
                50.000m,
                PaymentMethod.Cash,
                createdBy: 1,
                destinationAccountId: account.Id,
                description: "Payment approved for flights #48"
            );

            // Act
            var res = await mapper.MapToResponseAsync(tx);

            // Assert
            Assert.Equal("Company Cash", res.DestinationAccountName);
            Assert.Contains("Company Cash", res.DisplayNarrative);
            Assert.Contains("Cash", res.PaymentMethodName);
            Assert.Contains("Flight Booking #48", res.DisplayNarrative);
        }

        [Fact]
        public async Task MapToResponseAsync_VisaApplicationWithResolvedDocumentNumber_FormatsDescriptionAndReferenceDisplayName()
        {
            // Arrange
            var options = new DbContextOptionsBuilder<AccountsDbContext>()
                .UseInMemoryDatabase(databaseName: Guid.NewGuid().ToString())
                .Options;

            using var dbContext = new AccountsDbContext(options);

            var fakeClient = new FakeSalesPortalClient();
            var resolver = new TransactionReferenceResolver(fakeClient);
            var mapper = new TransactionPresentationMapper(dbContext, fakeClient, null, resolver);

            var tx = FinancialTransaction.Create(
                FinancialTransactionType.Incoming,
                50.000m,
                PaymentMethod.Cash,
                createdBy: 1,
                referenceType: TransactionReferenceType.Visa,
                referenceId: "21",
                description: "Payment approved for Visa Application #21"
            );

            // Act
            var res = await mapper.MapToResponseAsync(tx);

            // Assert
            Assert.Equal("Payment approved for Visa Application TXSVISA000021", res.DisplayDescription);
            Assert.Equal("VISA TXSVISA000021", res.ReferenceDisplayName);
            Assert.Contains("(Payment approved for Visa Application TXSVISA000021)", res.DisplayNarrative);
        }
    }
}

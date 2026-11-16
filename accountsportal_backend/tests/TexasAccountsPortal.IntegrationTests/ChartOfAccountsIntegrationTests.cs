using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Json;
using System.Threading.Tasks;
using TexasAccountsPortal.Contracts.ChartOfAccounts;
using TexasAccountsPortal.Domain.Enums;
using Xunit;

namespace TexasAccountsPortal.IntegrationTests
{
    [Collection("DatabaseCollection")]
    public class ChartOfAccountsIntegrationTests : IClassFixture<SqlServerTestFixture>
    {
        private readonly SqlServerTestFixture _fixture;

        public ChartOfAccountsIntegrationTests(SqlServerTestFixture fixture)
        {
            _fixture = fixture;
        }

        [Fact]
        public async Task SeedSystemAccounts_ShouldPopulateInitialHierarchy()
        {
            await _fixture.ResetDatabaseAsync();
            using var context = _fixture.CreateContext();
            var service = new Infrastructure.Services.ChartOfAccountService(context);

            await service.SeedSystemAccountsAsync(actorUserId: 1L, default);

            var list = await service.GetAccountsListAsync(default);
            Assert.NotEmpty(list);
            
            // Verify top-level assets control account exists
            var assets = list.Find(a => a.Code == "1000");
            Assert.NotNull(assets);
            Assert.True(assets.IsControlAccount);
            Assert.True(assets.IsSystemAccount);
            Assert.Equal("asset", assets.AccountType);
            Assert.Equal("debit", assets.NormalBalance);

            // Verify a leaf/posting account exists and has parent set correctly
            var bankPosting = list.Find(a => a.Code == "1121");
            Assert.NotNull(bankPosting);
            Assert.False(bankPosting.IsControlAccount);
            Assert.NotNull(bankPosting.ParentId);
            
            var parent = list.Find(a => a.Id == bankPosting.ParentId.Value);
            Assert.NotNull(parent);
            Assert.Equal("1120", parent.Code);
        }

        [Fact]
        public async Task CreateAccount_ShouldEnforceUniqueCodeConstraint()
        {
            await _fixture.ResetDatabaseAsync();
            using var context = _fixture.CreateContext();
            var service = new Infrastructure.Services.ChartOfAccountService(context);

            // Seed first
            await service.SeedSystemAccountsAsync(1L, default);

            // Try to create an account with a duplicate code (e.g. 1111 which is General Petty Cash)
            var request = new CreateChartOfAccountRequest(
                Code: "1111",
                Name: "Duplicate Petty Cash",
                AccountType: "asset",
                NormalBalance: "debit",
                ParentId: null,
                IsControlAccount: false,
                Description: "duplicate"
            );

            await Assert.ThrowsAsync<InvalidOperationException>(() =>
                service.CreateAccountAsync(request, actorUserId: 1L, default));
        }

        [Fact]
        public async Task CreateAccount_ShouldNestOnlyUnderControlAccounts()
        {
            await _fixture.ResetDatabaseAsync();
            using var context = _fixture.CreateContext();
            var service = new Infrastructure.Services.ChartOfAccountService(context);

            await service.SeedSystemAccountsAsync(1L, default);
            var list = await service.GetAccountsListAsync(default);

            // Find a posting account (e.g. General Petty Cash "1111")
            var postingAccount = list.Find(a => a.Code == "1111");
            Assert.NotNull(postingAccount);

            // Try to create a child account nested under a posting account
            var request = new CreateChartOfAccountRequest(
                Code: "1111-A",
                Name: "Invalid Child",
                AccountType: "asset",
                NormalBalance: "debit",
                ParentId: postingAccount.Id,
                IsControlAccount: false,
                Description: "invalid nesting"
            );

            await Assert.ThrowsAsync<InvalidOperationException>(() =>
                service.CreateAccountAsync(request, 1L, default));
        }

        [Fact]
        public async Task UpdateAccount_SystemAccountRename_ShouldBeBlocked()
        {
            await _fixture.ResetDatabaseAsync();
            using var context = _fixture.CreateContext();
            var service = new Infrastructure.Services.ChartOfAccountService(context);

            await service.SeedSystemAccountsAsync(1L, default);
            var list = await service.GetAccountsListAsync(default);

            var systemAccount = list.Find(a => a.Code == "1000");
            Assert.NotNull(systemAccount);

            var request = new UpdateChartOfAccountRequest("New Assets Name", "desc");

            await Assert.ThrowsAsync<InvalidOperationException>(() =>
                service.UpdateAccountAsync(systemAccount.Id, request, 1L, default));
        }

        [Fact]
        public async Task UpdateAccount_NonSystemAccount_ShouldSucceed()
        {
            await _fixture.ResetDatabaseAsync();
            using var context = _fixture.CreateContext();
            var service = new Infrastructure.Services.ChartOfAccountService(context);

            await service.SeedSystemAccountsAsync(1L, default);
            var list = await service.GetAccountsListAsync(default);

            var parent = list.Find(a => a.Code == "1110");
            Assert.NotNull(parent);

            // Create a user-defined account
            var createRequest = new CreateChartOfAccountRequest(
                Code: "9999",
                Name: "Custom Account",
                AccountType: "expense",
                NormalBalance: "debit",
                ParentId: parent.Id,
                IsControlAccount: false,
                Description: "Initial description"
            );

            var created = await service.CreateAccountAsync(createRequest, 1L, default);

            // Update it
            var updateRequest = new UpdateChartOfAccountRequest("Updated Custom Account", "New Description");
            var updated = await service.UpdateAccountAsync(created.Id, updateRequest, 1L, default);

            Assert.Equal("Updated Custom Account", updated.Name);
            Assert.Equal("New Description", updated.Description);
        }

        [Fact]
        public async Task DeleteAccount_SystemAccount_ShouldBeBlocked()
        {
            await _fixture.ResetDatabaseAsync();
            using var context = _fixture.CreateContext();
            var service = new Infrastructure.Services.ChartOfAccountService(context);

            await service.SeedSystemAccountsAsync(1L, default);
            var list = await service.GetAccountsListAsync(default);

            var systemAccount = list.Find(a => a.Code == "1111");
            Assert.NotNull(systemAccount);

            await Assert.ThrowsAsync<InvalidOperationException>(() =>
                service.DeleteAccountAsync(systemAccount.Id, 1L, default));
        }

        [Fact]
        public async Task DeleteAccount_AccountWithChildren_ShouldBeBlocked()
        {
            await _fixture.ResetDatabaseAsync();
            using var context = _fixture.CreateContext();
            var service = new Infrastructure.Services.ChartOfAccountService(context);

            // Seed system accounts (creates hierarchy 1000 -> 1100 -> ...)
            await service.SeedSystemAccountsAsync(1L, default);
            var list = await service.GetAccountsListAsync(default);

            var controlAccount = list.Find(a => a.Code == "1100");
            Assert.NotNull(controlAccount);

            // Control account is not user-defined (it is system account)
            // But let's create a custom control account and nest a child under it to test this invariant for user-defined accounts.
            var customControlReq = new CreateChartOfAccountRequest(
                Code: "9000",
                Name: "Custom Control",
                AccountType: "asset",
                NormalBalance: "debit",
                ParentId: null,
                IsControlAccount: true,
                Description: "custom control"
            );
            var customControl = await service.CreateAccountAsync(customControlReq, 1L, default);

            var customChildReq = new CreateChartOfAccountRequest(
                Code: "9001",
                Name: "Custom Child",
                AccountType: "asset",
                NormalBalance: "debit",
                ParentId: customControl.Id,
                IsControlAccount: false,
                Description: "custom child"
            );
            var customChild = await service.CreateAccountAsync(customChildReq, 1L, default);

            // Deleting customControl should be blocked because it has customChild as nested
            await Assert.ThrowsAsync<InvalidOperationException>(() =>
                service.DeleteAccountAsync(customControl.Id, 1L, default));

            // Deleting child should succeed
            await service.DeleteAccountAsync(customChild.Id, 1L, default);
            
            // Now control can be deleted
            await service.DeleteAccountAsync(customControl.Id, 1L, default);
        }
    }
}

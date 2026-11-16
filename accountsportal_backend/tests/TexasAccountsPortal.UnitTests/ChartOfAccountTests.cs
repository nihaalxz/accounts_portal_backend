using System;
using TexasAccountsPortal.Domain.Entities;
using TexasAccountsPortal.Domain.Enums;
using Xunit;

namespace TexasAccountsPortal.UnitTests
{
    public class ChartOfAccountTests
    {
        [Fact]
        public void Create_WithValidArgs_SetsAllFieldsCorrectly()
        {
            var account = ChartOfAccount.Create(
                code: "1110",
                name: "Petty Cash Control",
                accountType: GlAccountType.Asset,
                normalBalance: NormalBalance.Debit,
                parentId: null,
                isControlAccount: true,
                isSystemAccount: true,
                description: "Cash control account",
                createdBy: 1L);

            Assert.Equal("1110", account.Code);
            Assert.Equal("Petty Cash Control", account.Name);
            Assert.Equal(GlAccountType.Asset, account.AccountType);
            Assert.Equal(NormalBalance.Debit, account.NormalBalance);
            Assert.True(account.IsControlAccount);
            Assert.True(account.IsSystemAccount);
            Assert.True(account.IsActive);
        }

        [Fact]
        public void Create_CodeIsUppercasedAndTrimmed()
        {
            var account = ChartOfAccount.Create("  1110  ", "Cash", GlAccountType.Asset, NormalBalance.Debit, null, false, false, null, null);
            Assert.Equal("1110", account.Code);
        }

        [Fact]
        public void Create_EmptyCode_ThrowsArgumentException()
        {
            Assert.Throws<ArgumentException>(() =>
                ChartOfAccount.Create("", "Name", GlAccountType.Asset, NormalBalance.Debit, null, false, false, null, null));
        }

        [Fact]
        public void Create_EmptyName_ThrowsArgumentException()
        {
            Assert.Throws<ArgumentException>(() =>
                ChartOfAccount.Create("1110", "", GlAccountType.Asset, NormalBalance.Debit, null, false, false, null, null));
        }

        [Fact]
        public void Rename_NonSystemAccount_UpdatesName()
        {
            var account = ChartOfAccount.Create("5210", "Old Name", GlAccountType.Expense, NormalBalance.Debit, null, false, false, null, 1L);
            account.Rename("New Name", actorUserId: 1L);
            Assert.Equal("New Name", account.Name);
        }

        [Fact]
        public void Rename_SystemAccount_ThrowsInvalidOperationException()
        {
            var account = ChartOfAccount.Create("1110", "Cash", GlAccountType.Asset, NormalBalance.Debit, null, true, true, null, 1L);
            Assert.Throws<InvalidOperationException>(() => account.Rename("New Name", 1L));
        }

        [Fact]
        public void Deactivate_NonSystemAccount_SetsIsActiveToFalse()
        {
            var account = ChartOfAccount.Create("5210", "Office Exp", GlAccountType.Expense, NormalBalance.Debit, null, false, false, null, 1L);
            account.Deactivate(actorUserId: 1L);
            Assert.False(account.IsActive);
        }

        [Fact]
        public void Deactivate_SystemAccount_ThrowsInvalidOperationException()
        {
            var account = ChartOfAccount.Create("1110", "Cash", GlAccountType.Asset, NormalBalance.Debit, null, true, true, null, 1L);
            Assert.Throws<InvalidOperationException>(() => account.Deactivate(1L));
        }

        [Fact]
        public void Reactivate_AfterDeactivate_SetsIsActiveToTrue()
        {
            var account = ChartOfAccount.Create("5210", "Office Exp", GlAccountType.Expense, NormalBalance.Debit, null, false, false, null, 1L);
            account.Deactivate(1L);
            account.Reactivate();
            Assert.True(account.IsActive);
        }
    }
}

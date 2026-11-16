using System;
using TexasAccountsPortal.Domain.Entities;
using TexasAccountsPortal.Domain.Enums;
using Xunit;

namespace TexasAccountsPortal.UnitTests
{
    public class AccountTests
    {
        [Fact]
        public void InitializeBalance_ShouldSetBalanceAndCurrentBalance()
        {
            var account = new Account();
            account.InitializeBalance(500.25m);

            Assert.Equal(500.25m, account.Balance);
            Assert.Equal(500.25m, account.CurrentBalance);
        }

        [Fact]
        public void Credit_ShouldIncreaseCurrentBalance()
        {
            var account = new Account();
            account.InitializeBalance(100);

            account.Credit(50.50m);

            Assert.Equal(150.50m, account.CurrentBalance);
        }

        [Fact]
        public void Credit_NegativeAmount_ShouldThrowArgumentException()
        {
            var account = new Account();
            Assert.Throws<ArgumentException>(() => account.Credit(-10));
        }

        [Fact]
        public void Debit_ShouldDecreaseCurrentBalance()
        {
            var account = new Account();
            account.InitializeBalance(100);

            account.Debit(40.25m);

            Assert.Equal(59.75m, account.CurrentBalance);
        }

        [Fact]
        public void Debit_WithInsufficientBalance_ShouldThrowInvalidOperationException()
        {
            var account = new Account();
            account.InitializeBalance(20);

            Assert.Throws<InvalidOperationException>(() => account.Debit(30));
        }

        [Fact]
        public void ApplyBalanceCorrection_ShouldModifyBalanceWithoutInsufficientCheck()
        {
            var account = new Account();
            account.InitializeBalance(10);

            // Balance correction can decrease balance below zero if needed
            account.ApplyBalanceCorrection(-15);

            Assert.Equal(-5m, account.CurrentBalance);
        }
    }
}

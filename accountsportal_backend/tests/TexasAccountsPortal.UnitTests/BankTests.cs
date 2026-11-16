using System;
using TexasAccountsPortal.Domain.Entities;
using Xunit;

namespace TexasAccountsPortal.UnitTests
{
    public class BankTests
    {
        [Fact]
        public void InitializeBalance_ShouldSetBalanceAndCurrentBalance()
        {
            var bank = new Bank();
            bank.InitializeBalance(1000m);

            Assert.Equal(1000m, bank.Balance);
            Assert.Equal(1000m, bank.CurrentBalance);
        }

        [Fact]
        public void Credit_ShouldIncreaseCurrentBalance()
        {
            var bank = new Bank();
            bank.InitializeBalance(100);

            bank.Credit(50m);

            Assert.Equal(150m, bank.CurrentBalance);
        }

        [Fact]
        public void Debit_ShouldDecreaseCurrentBalance()
        {
            var bank = new Bank();
            bank.InitializeBalance(100);

            bank.Debit(30m);

            Assert.Equal(70m, bank.CurrentBalance);
        }

        [Fact]
        public void Debit_WithInsufficientFunds_ShouldThrowInvalidOperationException()
        {
            var bank = new Bank();
            bank.InitializeBalance(50);

            Assert.Throws<InvalidOperationException>(() => bank.Debit(60));
        }
    }
}

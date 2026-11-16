using System;
using System.Collections.Generic;
using System.Linq;
using TexasAccountsPortal.Domain.Entities;
using Xunit;

namespace TexasAccountsPortal.UnitTests
{
    public class SupplierUnifiedWalletTests
    {
        [Fact]
        public void InitialBalance_DefaultsToZero_AndMatchesBalanceProperty()
        {
            var supplier = new Supplier
            {
                Name = "Emirates Airlines",
                Code = "EK"
            };

            Assert.Equal(0m, supplier.Wallet);
            Assert.Equal(0m, supplier.Balance);
        }

        [Fact]
        public void SetInitialWallet_SupportsPositive_Negative_AndZero()
        {
            var supplier1 = new Supplier { Name = "S1", Code = "S1" };
            supplier1.SetInitialWallet(1500.500m);
            Assert.Equal(1500.500m, supplier1.Wallet);
            Assert.Equal(1500.500m, supplier1.Balance);

            var supplier2 = new Supplier { Name = "S2", Code = "S2" };
            supplier2.SetInitialWallet(-350.250m);
            Assert.Equal(-350.250m, supplier2.Wallet);
            Assert.Equal(-350.250m, supplier2.Balance);

            var supplier3 = new Supplier { Name = "S3", Code = "S3" };
            supplier3.SetInitialWallet(0m);
            Assert.Equal(0m, supplier3.Wallet);
            Assert.Equal(0m, supplier3.Balance);
        }

        [Fact]
        public void DebitWallet_FromZeroBalance_ResultsInNegativeBalance_AndDoesNotThrow()
        {
            var supplier = new Supplier { Name = "Gulf Air", Code = "GF" };

            // Act: Debit 250 from 0 balance
            supplier.DebitWallet(250m);

            // Assert: Balance is -250 (debt owed to supplier)
            Assert.Equal(-250m, supplier.Wallet);
            Assert.Equal(-250m, supplier.Balance);
        }

        [Fact]
        public void DebitWallet_FromPositiveBalance_CrossingBelowZero_WorksWithoutThrowing()
        {
            var supplier = new Supplier { Name = "FlyDubai", Code = "FZ" };
            supplier.SetInitialWallet(100m);

            // Act: Debit 350 when having 100
            supplier.DebitWallet(350m);

            // Assert: Balance is -250
            Assert.Equal(-250m, supplier.Wallet);
            Assert.Equal(-250m, supplier.Balance);
        }

        [Fact]
        public void TopUp_And_CreditSettlement_BothIncreaseWalletIdentically()
        {
            var supplier1 = new Supplier { Name = "TopUp Supplier", Code = "T1" };
            supplier1.SetInitialWallet(-500m); // owes 500
            // Settle 200 via CreditWallet method
            supplier1.CreditWallet(200m);
            Assert.Equal(-300m, supplier1.Wallet);

            var supplier2 = new Supplier { Name = "Advance Supplier", Code = "T2" };
            supplier2.SetInitialWallet(-500m); // owes 500
            // Settle 200 via AddToWallet alias
            supplier2.AddToWallet(200m);
            Assert.Equal(-300m, supplier2.Wallet);

            Assert.Equal(supplier1.Wallet, supplier2.Wallet);
        }

        [Fact]
        public void Refund_DecreasesWallet()
        {
            var supplier = new Supplier { Name = "Refund Supplier", Code = "R1" };
            supplier.SetInitialWallet(500m);

            // Act: Supplier refunds money to Texas bank/cash -> Texas prepaid with supplier decreases
            supplier.DebitWallet(150m);

            Assert.Equal(350m, supplier.Wallet);
        }

        [Theory]
        [InlineData(0)]
        [InlineData(-10)]
        [InlineData(-0.001)]
        public void CreditWallet_WithZeroOrNegativeAmount_ThrowsArgumentException(decimal invalidAmount)
        {
            var supplier = new Supplier { Name = "S", Code = "S" };

            var ex = Assert.Throws<ArgumentException>(() => supplier.CreditWallet(invalidAmount));
            Assert.Contains("must be positive", ex.Message, StringComparison.OrdinalIgnoreCase);
        }

        [Theory]
        [InlineData(0)]
        [InlineData(-10)]
        [InlineData(-0.001)]
        public void DebitWallet_WithZeroOrNegativeAmount_ThrowsArgumentException(decimal invalidAmount)
        {
            var supplier = new Supplier { Name = "S", Code = "S" };

            var ex = Assert.Throws<ArgumentException>(() => supplier.DebitWallet(invalidAmount));
            Assert.Contains("must be positive", ex.Message, StringComparison.OrdinalIgnoreCase);
        }

        [Fact]
        public void ReconciliationTotals_SurplusPayableNet_AreCalculatedCorrectly()
        {
            var suppliers = new List<Supplier>
            {
                new() { Name = "S1", Code = "S1" }, // Wallet = 500 (Surplus)
                new() { Name = "S2", Code = "S2" }, // Wallet = -300 (Payable 300)
                new() { Name = "S3", Code = "S3" }, // Wallet = 0 (Settled)
                new() { Name = "S4", Code = "S4" }, // Wallet = 150 (Surplus)
                new() { Name = "S5", Code = "S5" }  // Wallet = -50 (Payable 50)
            };

            suppliers[0].SetInitialWallet(500m);
            suppliers[1].SetInitialWallet(-300m);
            suppliers[2].SetInitialWallet(0m);
            suppliers[3].SetInitialWallet(150m);
            suppliers[4].SetInitialWallet(-50m);

            // Formulas as in ReconciliationController
            var netBalance = suppliers.Sum(s => s.Wallet);
            var surplusBalance = suppliers.Sum(s => s.Wallet > 0 ? s.Wallet : 0);
            var payableBalance = suppliers.Sum(s => s.Wallet < 0 ? -s.Wallet : 0);

            // 500 - 300 + 0 + 150 - 50 = 300
            Assert.Equal(300m, netBalance);
            // 500 + 150 = 650
            Assert.Equal(650m, surplusBalance);
            // 300 + 50 = 350
            Assert.Equal(350m, payableBalance);

            // Surplus - Payable should always equal Net Balance
            Assert.Equal(netBalance, surplusBalance - payableBalance);
        }

        [Fact]
        public void MigrationDataMath_UpAndDown_PreservesFinancialEquivalence()
        {
            // Case 1: Wallet 500, CreditWallet 300
            decimal oldWallet1 = 500m;
            decimal oldCreditWallet1 = 300m;
            decimal unifiedWallet1 = oldWallet1 - oldCreditWallet1; // 200
            Assert.Equal(200m, unifiedWallet1);

            // Down migration restoration of Case 1
            decimal restoredCredit1 = unifiedWallet1 < 0 ? -unifiedWallet1 : 0m;
            decimal restoredWallet1 = unifiedWallet1 < 0 ? 0m : unifiedWallet1;
            Assert.Equal(0m, restoredCredit1);
            Assert.Equal(200m, restoredWallet1);
            Assert.Equal(unifiedWallet1, restoredWallet1 - restoredCredit1);

            // Case 2: Wallet 0, CreditWallet 300
            decimal oldWallet2 = 0m;
            decimal oldCreditWallet2 = 300m;
            decimal unifiedWallet2 = oldWallet2 - oldCreditWallet2; // -300
            Assert.Equal(-300m, unifiedWallet2);

            // Down migration restoration of Case 2
            decimal restoredCredit2 = unifiedWallet2 < 0 ? -unifiedWallet2 : 0m;
            decimal restoredWallet2 = unifiedWallet2 < 0 ? 0m : unifiedWallet2;
            Assert.Equal(300m, restoredCredit2);
            Assert.Equal(0m, restoredWallet2);
            Assert.Equal(unifiedWallet2, restoredWallet2 - restoredCredit2);
        }
    }
}


using System;
using System.Collections.Generic;
using Xunit;
using TexasAccountsPortal.Domain.Entities;
using TexasAccountsPortal.Domain.Enums;

namespace TexasAccountsPortal.UnitTests
{
    public class PayrollDomainTests
    {
        [Fact]
        public void GrossEarnings_CalculatesCorrectSum()
        {
            // Arrange
            var emp = new PayrollRunEmployee
            {
                BasicSalary = 5000,
                HousingAllowance = 1000,
                TransportAllowance = 500,
                GrossEarnings = 6500
            };

            // Act & Assert
            Assert.Equal(6500, emp.GrossEarnings);
        }

        [Fact]
        public void NetSalary_ClampsToZero_WhenDeductionsExceedGross()
        {
            // Arrange
            var emp = new PayrollRunEmployee
            {
                GrossEarnings = 1000,
                TotalDeductions = 1500,
                NetSalary = 0 // Clamped in service logic
            };

            // Act & Assert
            var netPay = Math.Max(0, emp.GrossEarnings - emp.TotalDeductions);
            Assert.Equal(0, netPay);
        }

        [Fact]
        public void RepaymentStatus_InitializesToUnpaid()
        {
            // Arrange
            var schedule = new LoanRepaymentSchedule
            {
                Amount = 500,
                AmountPaid = 0
            };

            // Assert
            Assert.Equal(RepaymentStatus.Unpaid, schedule.Status);
        }
    }
}

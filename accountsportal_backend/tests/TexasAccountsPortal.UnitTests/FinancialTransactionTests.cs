using System;
using TexasAccountsPortal.Domain.Entities;
using TexasAccountsPortal.Domain.Enums;
using Xunit;

namespace TexasAccountsPortal.UnitTests
{
    public class FinancialTransactionTests
    {
        [Fact]
        public void Create_ShouldInstantiateWithPendingStatusByDefault()
        {
            var tx = FinancialTransaction.Create(
                FinancialTransactionType.Outgoing,
                150.75m,
                PaymentMethod.Bank,
                createdBy: 10
            );

            Assert.Equal(FinancialTransactionStatus.Pending, tx.Status);
            Assert.Equal(150.75m, tx.Amount);
            Assert.Equal(10, tx.CreatedBy);
        }

        [Fact]
        public void Create_WithZeroOrNegativeAmount_ShouldThrowArgumentException()
        {
            Assert.Throws<ArgumentException>(() => FinancialTransaction.Create(
                FinancialTransactionType.Outgoing,
                0m,
                PaymentMethod.Bank,
                createdBy: 10
            ));

            Assert.Throws<ArgumentException>(() => FinancialTransaction.Create(
                FinancialTransactionType.Outgoing,
                -5m,
                PaymentMethod.Bank,
                createdBy: 10
            ));
        }

        [Fact]
        public void Approve_ShouldTransitionToApproved()
        {
            var tx = FinancialTransaction.Create(
                FinancialTransactionType.Outgoing,
                100m,
                PaymentMethod.Bank,
                createdBy: 10
            );

            tx.Approve(approvedBy: 99);

            Assert.Equal(FinancialTransactionStatus.Approved, tx.Status);
            Assert.Equal(99, tx.ApprovedBy);
            Assert.NotNull(tx.ApprovedAt);
        }

        [Fact]
        public void Approve_WhenAlreadyApproved_ShouldThrowInvalidOperationException()
        {
            var tx = FinancialTransaction.Create(
                FinancialTransactionType.Outgoing,
                100m,
                PaymentMethod.Bank,
                createdBy: 10
            );

            tx.Approve(approvedBy: 99);

            Assert.Throws<InvalidOperationException>(() => tx.Approve(approvedBy: 99));
        }

        [Fact]
        public void Reject_ShouldTransitionToRejectedWithReason()
        {
            var tx = FinancialTransaction.Create(
                FinancialTransactionType.Outgoing,
                100m,
                PaymentMethod.Bank,
                createdBy: 10
            );

            tx.Reject(rejectedBy: 88, reason: "Insufficient vendor details");

            Assert.Equal(FinancialTransactionStatus.Rejected, tx.Status);
            Assert.Equal(88, tx.RejectedBy);
            Assert.Equal("Insufficient vendor details", tx.ReturnReason);
            Assert.NotNull(tx.RejectedAt);
        }
    }
}

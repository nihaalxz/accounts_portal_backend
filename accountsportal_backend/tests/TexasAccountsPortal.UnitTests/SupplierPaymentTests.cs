using System;
using TexasAccountsPortal.Domain.Entities;
using TexasAccountsPortal.Domain.Enums;
using Xunit;

namespace TexasAccountsPortal.UnitTests
{
    public class SupplierPaymentTests
    {
        [Fact]
        public void Create_ShouldInstantiateWithPendingStatusAndCorrectFields()
        {
            var payment = SupplierPayment.Create(
                supplierId: 1,
                amount: 150m,
                paymentMethod: PaymentMethod.BankTransfer,
                requestedByUserId: 10,
                sourceBankId: 2,
                externalReference: "booking_1"
            );

            Assert.Equal(FinancialTransactionStatus.Pending, payment.Status);
            Assert.Equal(150m, payment.Amount);
            Assert.Equal(1, payment.SupplierId);
            Assert.Equal(10, payment.RequestedByUserId);
            Assert.Equal(2, payment.SourceBankId);
            Assert.Equal("booking_1", payment.ExternalReference);
        }

        [Fact]
        public void Create_WithZeroAmount_ShouldBeAllowed()
        {
            var payment = SupplierPayment.Create(
                supplierId: 1,
                amount: 0m,
                paymentMethod: PaymentMethod.Credit,
                requestedByUserId: 10
            );

            Assert.Equal(0m, payment.Amount);
            Assert.Equal(FinancialTransactionStatus.Pending, payment.Status);
        }

        [Fact]
        public void Create_WithNegativeAmount_ShouldThrowArgumentException()
        {
            Assert.Throws<ArgumentException>(() => SupplierPayment.Create(
                supplierId: 1,
                amount: -10m,
                paymentMethod: PaymentMethod.BankTransfer,
                requestedByUserId: 10
            ));
        }

        [Fact]
        public void Approve_ShouldTransitionToApproved()
        {
            var payment = SupplierPayment.Create(
                supplierId: 1,
                amount: 150m,
                paymentMethod: PaymentMethod.BankTransfer,
                requestedByUserId: 10
            );

            payment.Approve(approvedByUserId: 99);

            Assert.Equal(FinancialTransactionStatus.Approved, payment.Status);
            Assert.Equal(99, payment.ApprovedByUserId);
            Assert.NotNull(payment.ApprovedAt);
        }

        [Fact]
        public void Approve_WhenNotPending_ShouldThrowInvalidOperationException()
        {
            var payment = SupplierPayment.Create(
                supplierId: 1,
                amount: 150m,
                paymentMethod: PaymentMethod.BankTransfer,
                requestedByUserId: 10
            );

            payment.Approve(approvedByUserId: 99);

            Assert.Throws<InvalidOperationException>(() => payment.Approve(approvedByUserId: 99));
        }

        [Fact]
        public void Reject_ShouldTransitionToRejectedWithReason()
        {
            var payment = SupplierPayment.Create(
                supplierId: 1,
                amount: 150m,
                paymentMethod: PaymentMethod.BankTransfer,
                requestedByUserId: 10
            );

            payment.Reject(rejectedByUserId: 88, reason: "Wrong invoice mapping");

            Assert.Equal(FinancialTransactionStatus.Rejected, payment.Status);
            Assert.Equal(88, payment.RejectedByUserId);
            Assert.Equal("Wrong invoice mapping", payment.RejectionReason);
            Assert.NotNull(payment.RejectedAt);
        }

        [Fact]
        public void Reject_WhenNotPending_ShouldThrowInvalidOperationException()
        {
            var payment = SupplierPayment.Create(
                supplierId: 1,
                amount: 150m,
                paymentMethod: PaymentMethod.BankTransfer,
                requestedByUserId: 10
            );

            payment.Reject(rejectedByUserId: 88, reason: "Reason");

            Assert.Throws<InvalidOperationException>(() => payment.Reject(rejectedByUserId: 88, reason: "Reason"));
        }
    }
}

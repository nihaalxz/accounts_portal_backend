using System;
using TexasAccountsPortal.Domain.Entities;
using TexasAccountsPortal.Domain.Enums;
using Xunit;

namespace TexasAccountsPortal.UnitTests
{
    public class SalesReturnTests
    {
        [Fact]
        public void Create_ShouldInstantiateWithPendingStatusAndCorrectFields()
        {
            var returnRecord = SalesReturn.Create(
                recipientType: RecipientType.Agent,
                recipientId: 3,
                originalSaleReference: "booking_15",
                amount: 75m,
                reason: "Cancelled Booking Refund",
                requestedByUserId: 10
            );

            Assert.Equal(FinancialTransactionStatus.Pending, returnRecord.Status);
            Assert.Equal(75m, returnRecord.Amount);
            Assert.Equal(RecipientType.Agent, returnRecord.RecipientType);
            Assert.Equal(3, returnRecord.RecipientId);
            Assert.Equal("booking_15", returnRecord.OriginalSaleReference);
            Assert.Equal("Cancelled Booking Refund", returnRecord.Reason);
            Assert.Equal(10, returnRecord.RequestedByUserId);
        }

        [Fact]
        public void Create_WithZeroOrNegativeAmount_ShouldThrowArgumentException()
        {
            Assert.Throws<ArgumentException>(() => SalesReturn.Create(
                recipientType: RecipientType.Agent,
                recipientId: 3,
                originalSaleReference: "booking_15",
                amount: 0m,
                reason: "Cancelled Booking Refund",
                requestedByUserId: 10
            ));

            Assert.Throws<ArgumentException>(() => SalesReturn.Create(
                recipientType: RecipientType.Agent,
                recipientId: 3,
                originalSaleReference: "booking_15",
                amount: -5m,
                reason: "Cancelled Booking Refund",
                requestedByUserId: 10
            ));
        }

        [Fact]
        public void Approve_ShouldTransitionToApproved()
        {
            var returnRecord = SalesReturn.Create(
                recipientType: RecipientType.Agent,
                recipientId: 3,
                originalSaleReference: "booking_15",
                amount: 75m,
                reason: "Reason",
                requestedByUserId: 10
            );

            returnRecord.Approve(approvedByUserId: 99);

            Assert.Equal(FinancialTransactionStatus.Approved, returnRecord.Status);
            Assert.Equal(99, returnRecord.ApprovedByUserId);
            Assert.NotNull(returnRecord.ApprovedAt);
        }

        [Fact]
        public void Reject_ShouldTransitionToRejectedWithReason()
        {
            var returnRecord = SalesReturn.Create(
                recipientType: RecipientType.Agent,
                recipientId: 3,
                originalSaleReference: "booking_15",
                amount: 75m,
                reason: "Reason",
                requestedByUserId: 10
            );

            returnRecord.Reject(rejectedByUserId: 88, reason: "Refund rejected by authority");

            Assert.Equal(FinancialTransactionStatus.Rejected, returnRecord.Status);
            Assert.Equal(88, returnRecord.RejectedByUserId);
            Assert.Equal("Refund rejected by authority", returnRecord.RejectionReason);
            Assert.NotNull(returnRecord.RejectedAt);
        }
    }
}

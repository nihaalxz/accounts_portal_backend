using System;
using TexasAccountsPortal.Domain.Entities;
using TexasAccountsPortal.Domain.Enums;
using Xunit;

namespace TexasAccountsPortal.UnitTests
{
    public class PurchaseReturnTests
    {
        [Fact]
        public void Create_ShouldInstantiateWithPendingStatusAndCorrectFields()
        {
            var returnRecord = PurchaseReturn.Create(
                supplierId: 1,
                originalPurchaseReference: "booking_15",
                amount: 50m,
                reason: "Cancelled Flight Booking",
                requestedByUserId: 10
            );

            Assert.Equal(FinancialTransactionStatus.Pending, returnRecord.Status);
            Assert.Equal(50m, returnRecord.Amount);
            Assert.Equal("booking_15", returnRecord.OriginalPurchaseReference);
            Assert.Equal("Cancelled Flight Booking", returnRecord.Reason);
            Assert.Equal(10, returnRecord.RequestedByUserId);
        }

        [Fact]
        public void Create_WithZeroOrNegativeAmount_ShouldThrowArgumentException()
        {
            Assert.Throws<ArgumentException>(() => PurchaseReturn.Create(
                supplierId: 1,
                originalPurchaseReference: "booking_15",
                amount: 0m,
                reason: "Cancelled Flight",
                requestedByUserId: 10
            ));

            Assert.Throws<ArgumentException>(() => PurchaseReturn.Create(
                supplierId: 1,
                originalPurchaseReference: "booking_15",
                amount: -5m,
                reason: "Cancelled Flight",
                requestedByUserId: 10
            ));
        }

        [Fact]
        public void Create_WithEmptyReference_ShouldThrowArgumentException()
        {
            Assert.Throws<ArgumentException>(() => PurchaseReturn.Create(
                supplierId: 1,
                originalPurchaseReference: "  ",
                amount: 50m,
                reason: "Cancelled Flight",
                requestedByUserId: 10
            ));
        }

        [Fact]
        public void Approve_ShouldTransitionToApproved()
        {
            var returnRecord = PurchaseReturn.Create(
                supplierId: 1,
                originalPurchaseReference: "booking_15",
                amount: 50m,
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
            var returnRecord = PurchaseReturn.Create(
                supplierId: 1,
                originalPurchaseReference: "booking_15",
                amount: 50m,
                reason: "Reason",
                requestedByUserId: 10
            );

            returnRecord.Reject(rejectedByUserId: 88, reason: "Refund rejected by supplier");

            Assert.Equal(FinancialTransactionStatus.Rejected, returnRecord.Status);
            Assert.Equal(88, returnRecord.RejectedByUserId);
            Assert.Equal("Refund rejected by supplier", returnRecord.RejectionReason);
            Assert.NotNull(returnRecord.RejectedAt);
        }
    }
}

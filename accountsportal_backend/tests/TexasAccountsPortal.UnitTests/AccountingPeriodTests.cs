using System;
using TexasAccountsPortal.Domain.Entities;
using Xunit;

namespace TexasAccountsPortal.UnitTests
{
    public class AccountingPeriodTests
    {
        private static AccountingPeriod CreateOpenPeriod()
            => AccountingPeriod.Create(
                name: "July 2026",
                fiscalYear: 2026,
                periodNumber: 7,
                startDate: new DateTime(2026, 7, 1),
                endDate: new DateTime(2026, 7, 31));

        [Fact]
        public void Create_ValidArgs_PeriodIsOpen()
        {
            var period = CreateOpenPeriod();
            Assert.True(period.IsOpen);
            Assert.Equal("July 2026", period.Name);
            Assert.Equal(2026, period.FiscalYear);
            Assert.Equal(7, period.PeriodNumber);
        }

        [Fact]
        public void Create_StartDateAfterEndDate_ThrowsArgumentException()
        {
            Assert.Throws<ArgumentException>(() =>
                AccountingPeriod.Create("Bad", 2026, 7,
                    new DateTime(2026, 7, 31), new DateTime(2026, 7, 1)));
        }

        [Fact]
        public void Create_InvalidPeriodNumber_ThrowsArgumentOutOfRangeException()
        {
            Assert.Throws<ArgumentOutOfRangeException>(() =>
                AccountingPeriod.Create("Bad", 2026, 0,
                    new DateTime(2026, 1, 1), new DateTime(2026, 1, 31)));
        }

        [Fact]
        public void ContainsDate_DateWithinPeriod_ReturnsTrue()
        {
            var period = CreateOpenPeriod();
            Assert.True(period.ContainsDate(new DateTime(2026, 7, 15)));
        }

        [Fact]
        public void ContainsDate_DateOutsidePeriod_ReturnsFalse()
        {
            var period = CreateOpenPeriod();
            Assert.False(period.ContainsDate(new DateTime(2026, 8, 1)));
        }

        [Fact]
        public void Close_OpenPeriod_PeriodIsClosed()
        {
            var period = CreateOpenPeriod();
            period.Close(closedByUserId: 1L);
            Assert.False(period.IsOpen);
            Assert.NotNull(period.ClosedAt);
            Assert.Equal(1L, period.ClosedByUserId);
        }

        [Fact]
        public void Close_AlreadyClosedPeriod_ThrowsInvalidOperationException()
        {
            var period = CreateOpenPeriod();
            period.Close(1L);
            Assert.Throws<InvalidOperationException>(() => period.Close(1L));
        }

        [Fact]
        public void Reopen_ClosedPeriod_WithReason_PeriodIsOpen()
        {
            var period = CreateOpenPeriod();
            period.Close(1L);
            period.Reopen(reopenedByUserId: 2L, reason: "Correction required");
            Assert.True(period.IsOpen);
            Assert.Equal("Correction required", period.ReopenReason);
        }

        [Fact]
        public void Reopen_OpenPeriod_ThrowsInvalidOperationException()
        {
            var period = CreateOpenPeriod();
            Assert.Throws<InvalidOperationException>(() =>
                period.Reopen(1L, "no reason"));
        }

        [Fact]
        public void Reopen_WithEmptyReason_ThrowsArgumentException()
        {
            var period = CreateOpenPeriod();
            period.Close(1L);
            Assert.Throws<ArgumentException>(() => period.Reopen(1L, ""));
        }
    }
}

using System;
using TexasAccountsPortal.Domain.Enums;

namespace TexasAccountsPortal.Domain.Entities
{
    /// <summary>
    /// Defines an open or closed fiscal accounting period.
    /// GL postings must fall within an Open accounting period.
    /// Closing a period blocks all further GL postings to that date range.
    /// </summary>
    public class AccountingPeriod
    {
        public long Id { get; private set; }
        public string Name { get; private set; } = string.Empty;
        public int FiscalYear { get; private set; }
        public int PeriodNumber { get; private set; }
        public DateTime StartDate { get; private set; }
        public DateTime EndDate { get; private set; }
        public AccountingPeriodStatus Status { get; private set; }

        public DateTime? ClosedAt { get; private set; }
        public long? ClosedByUserId { get; private set; }

        public DateTime? ReopenedAt { get; private set; }
        public long? ReopenedByUserId { get; private set; }
        public string? ReopenReason { get; private set; }

        public DateTime CreatedAt { get; private set; }
        public DateTime UpdatedAt { get; private set; }

        public byte[] RowVersion { get; set; } = Array.Empty<byte>();

        // EF Core constructor
        private AccountingPeriod() { }

        public static AccountingPeriod Create(
            string name,
            int fiscalYear,
            int periodNumber,
            DateTime startDate,
            DateTime endDate)
        {
            if (string.IsNullOrWhiteSpace(name))
                throw new ArgumentException("Period name is required.", nameof(name));
            if (fiscalYear < 2000 || fiscalYear > 2100)
                throw new ArgumentOutOfRangeException(nameof(fiscalYear), "Fiscal year must be between 2000 and 2100.");
            if (periodNumber < 1 || periodNumber > 12)
                throw new ArgumentOutOfRangeException(nameof(periodNumber), "Period number must be between 1 and 12.");
            if (startDate >= endDate)
                throw new ArgumentException("Period start date must be before end date.");

            var now = DateTime.UtcNow;
            return new AccountingPeriod
            {
                Name = name.Trim(),
                FiscalYear = fiscalYear,
                PeriodNumber = periodNumber,
                StartDate = startDate.Date,
                EndDate = endDate.Date,
                Status = AccountingPeriodStatus.Open,
                CreatedAt = now,
                UpdatedAt = now
            };
        }

        public bool IsOpen => Status == AccountingPeriodStatus.Open;

        public bool ContainsDate(DateTime date)
            => date.Date >= StartDate.Date && date.Date <= EndDate.Date;

        public void Close(long closedByUserId)
        {
            if (Status != AccountingPeriodStatus.Open)
                throw new InvalidOperationException("Only Open periods can be closed.");

            Status = AccountingPeriodStatus.Closed;
            ClosedAt = DateTime.UtcNow;
            ClosedByUserId = closedByUserId;
            UpdatedAt = DateTime.UtcNow;
        }

        public void Reopen(long reopenedByUserId, string reason)
        {
            if (Status != AccountingPeriodStatus.Closed)
                throw new InvalidOperationException("Only Closed periods can be reopened.");
            if (string.IsNullOrWhiteSpace(reason))
                throw new ArgumentException("Reopen reason is required.", nameof(reason));

            Status = AccountingPeriodStatus.Open;
            ReopenedAt = DateTime.UtcNow;
            ReopenedByUserId = reopenedByUserId;
            ReopenReason = reason;
            UpdatedAt = DateTime.UtcNow;
        }
    }
}

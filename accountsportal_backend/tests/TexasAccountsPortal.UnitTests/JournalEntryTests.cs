using System;
using TexasAccountsPortal.Domain.Entities;
using TexasAccountsPortal.Domain.Enums;
using Xunit;

namespace TexasAccountsPortal.UnitTests
{
    public class JournalEntryTests
    {
        private static JournalEntry CreateDraftEntry()
            => JournalEntry.Create(
                journalNumber: "JNL-2026-001",
                entryDate: new DateTime(2026, 7, 15),
                description: "Test journal",
                sourceType: "Manual",
                correlationId: "corr-001",
                createdBy: 1L);

        [Fact]
        public void Create_ValidArgs_EntryIsDraft()
        {
            var entry = CreateDraftEntry();
            Assert.Equal(JournalEntryStatus.Draft, entry.Status);
            Assert.Equal("JNL-2026-001", entry.JournalNumber);
            Assert.Equal("Manual", entry.SourceType);
        }

        [Fact]
        public void Create_EmptyJournalNumber_ThrowsArgumentException()
        {
            Assert.Throws<ArgumentException>(() =>
                JournalEntry.Create(
                    journalNumber: "",
                    entryDate: DateTime.Today,
                    description: "desc",
                    sourceType: "Manual",
                    correlationId: "corr-001",
                    createdBy: 1L));
        }

        [Fact]
        public void IsBalanced_NoLines_ReturnsFalse()
        {
            var entry = CreateDraftEntry();
            Assert.False(entry.IsBalanced());
        }

        [Fact]
        public void IsBalanced_EqualDebitsAndCredits_ReturnsTrue()
        {
            var entry = CreateDraftEntry();
            var debitLine = JournalEntryLine.CreateDebit(0L, 1L, 100m, 1);
            var creditLine = JournalEntryLine.CreateCredit(0L, 2L, 100m, 2);
            entry.AddLine(debitLine);
            entry.AddLine(creditLine);
            Assert.True(entry.IsBalanced());
        }

        [Fact]
        public void IsBalanced_UnequalDebitsAndCredits_ReturnsFalse()
        {
            var entry = CreateDraftEntry();
            var debitLine = JournalEntryLine.CreateDebit(0L, 1L, 100m, 1);
            var creditLine = JournalEntryLine.CreateCredit(0L, 2L, 80m, 2);
            entry.AddLine(debitLine);
            entry.AddLine(creditLine);
            Assert.False(entry.IsBalanced());
        }

        [Fact]
        public void Submit_BalancedDraftEntry_TransitionsToSubmitted()
        {
            var entry = CreateDraftEntry();
            entry.AddLine(JournalEntryLine.CreateDebit(0L, 1L, 100m, 1));
            entry.AddLine(JournalEntryLine.CreateCredit(0L, 2L, 100m, 2));
            entry.Submit(1L);
            Assert.Equal(JournalEntryStatus.Submitted, entry.Status);
        }

        [Fact]
        public void Submit_UnbalancedEntry_ThrowsInvalidOperationException()
        {
            var entry = CreateDraftEntry();
            entry.AddLine(JournalEntryLine.CreateDebit(0L, 1L, 100m, 1));
            entry.AddLine(JournalEntryLine.CreateCredit(0L, 2L, 90m, 2));
            Assert.Throws<InvalidOperationException>(() => entry.Submit(1L));
        }

        [Fact]
        public void Approve_SubmittedEntry_TransitionsToApproved()
        {
            var entry = CreateDraftEntry();
            entry.AddLine(JournalEntryLine.CreateDebit(0L, 1L, 100m, 1));
            entry.AddLine(JournalEntryLine.CreateCredit(0L, 2L, 100m, 2));
            entry.Submit(1L);
            entry.Approve(2L);
            Assert.Equal(JournalEntryStatus.Approved, entry.Status);
            Assert.Equal(2L, entry.ApprovedBy);
        }

        [Fact]
        public void Approve_DraftEntry_ThrowsInvalidOperationException()
        {
            var entry = CreateDraftEntry();
            Assert.Throws<InvalidOperationException>(() => entry.Approve(1L));
        }

        [Fact]
        public void Post_ApprovedBalancedEntry_TransitionsToPosted()
        {
            var entry = CreateDraftEntry();
            entry.AddLine(JournalEntryLine.CreateDebit(0L, 1L, 100m, 1));
            entry.AddLine(JournalEntryLine.CreateCredit(0L, 2L, 100m, 2));
            entry.Submit(1L);
            entry.Approve(2L);
            entry.Post(2L, DateTime.Today);
            Assert.Equal(JournalEntryStatus.Posted, entry.Status);
        }

        [Fact]
        public void Post_DraftBalancedEntry_AlsoTransitionsToPosted()
        {
            // Auto-posting path (system journals skip approve workflow)
            var entry = CreateDraftEntry();
            entry.AddLine(JournalEntryLine.CreateDebit(0L, 1L, 100m, 1));
            entry.AddLine(JournalEntryLine.CreateCredit(0L, 2L, 100m, 2));
            entry.Post(1L, DateTime.Today);
            Assert.Equal(JournalEntryStatus.Posted, entry.Status);
        }

        [Fact]
        public void Reject_SubmittedEntry_TransitionsToRejected()
        {
            var entry = CreateDraftEntry();
            entry.AddLine(JournalEntryLine.CreateDebit(0L, 1L, 100m, 1));
            entry.AddLine(JournalEntryLine.CreateCredit(0L, 2L, 100m, 2));
            entry.Submit(1L);
            entry.Reject(2L, "Incorrect amounts");
            Assert.Equal(JournalEntryStatus.Rejected, entry.Status);
            Assert.Equal("Incorrect amounts", entry.RejectionReason);
        }

        [Fact]
        public void Reject_EmptyReason_ThrowsArgumentException()
        {
            var entry = CreateDraftEntry();
            entry.AddLine(JournalEntryLine.CreateDebit(0L, 1L, 100m, 1));
            entry.AddLine(JournalEntryLine.CreateCredit(0L, 2L, 100m, 2));
            entry.Submit(1L);
            Assert.Throws<ArgumentException>(() => entry.Reject(1L, ""));
        }

        [Fact]
        public void MarkReversed_PostedEntry_TransitionsToReversed()
        {
            var entry = CreateDraftEntry();
            entry.AddLine(JournalEntryLine.CreateDebit(0L, 1L, 100m, 1));
            entry.AddLine(JournalEntryLine.CreateCredit(0L, 2L, 100m, 2));
            entry.Post(1L, DateTime.Today);
            entry.MarkReversed(reversalJournalEntryId: 42L);
            Assert.Equal(JournalEntryStatus.Reversed, entry.Status);
            Assert.Equal(42L, entry.ReversedByJournalEntryId);
        }

        [Fact]
        public void MarkReversed_AlreadyReversedEntry_ThrowsInvalidOperationException()
        {
            var entry = CreateDraftEntry();
            entry.AddLine(JournalEntryLine.CreateDebit(0L, 1L, 100m, 1));
            entry.AddLine(JournalEntryLine.CreateCredit(0L, 2L, 100m, 2));
            entry.Post(1L, DateTime.Today);
            entry.MarkReversed(42L);
            Assert.Throws<InvalidOperationException>(() => entry.MarkReversed(43L));
        }

        [Fact]
        public void AddLine_ToNonDraftEntry_ThrowsInvalidOperationException()
        {
            var entry = CreateDraftEntry();
            entry.AddLine(JournalEntryLine.CreateDebit(0L, 1L, 100m, 1));
            entry.AddLine(JournalEntryLine.CreateCredit(0L, 2L, 100m, 2));
            entry.Post(1L, DateTime.Today);
            Assert.Throws<InvalidOperationException>(() =>
                entry.AddLine(JournalEntryLine.CreateDebit(0L, 3L, 50m, 3)));
        }
    }

    public class JournalEntryLineTests
    {
        [Fact]
        public void CreateDebit_ZeroAmount_ThrowsArgumentException()
        {
            Assert.Throws<ArgumentException>(() =>
                JournalEntryLine.CreateDebit(1L, 1L, 0m, 1));
        }

        [Fact]
        public void CreateCredit_NegativeAmount_ThrowsArgumentException()
        {
            Assert.Throws<ArgumentException>(() =>
                JournalEntryLine.CreateCredit(1L, 1L, -10m, 1));
        }

        [Fact]
        public void CreateDebit_PositiveAmount_SetsDebitOnlyAndCreditZero()
        {
            var line = JournalEntryLine.CreateDebit(1L, 42L, 250m, 1, "Office supplies");
            Assert.Equal(250m, line.Debit);
            Assert.Equal(0m, line.Credit);
            Assert.Equal(42L, line.AccountId);
        }

        [Fact]
        public void CreateCredit_PositiveAmount_SetsCreditOnlyAndDebitZero()
        {
            var line = JournalEntryLine.CreateCredit(1L, 42L, 250m, 2, "Cash");
            Assert.Equal(0m, line.Debit);
            Assert.Equal(250m, line.Credit);
        }
    }
}

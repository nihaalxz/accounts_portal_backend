using System;
using TexasAccountsPortal.Domain.Entities;
using TexasAccountsPortal.Domain.Enums;
using Xunit;

namespace TexasAccountsPortal.UnitTests
{
    public class ExpenseTests
    {
        private static Expense CreateDraftExpense()
            => Expense.Create(
                expenseNumber: "EXP-2026-001",
                expenseCategoryId: 1L,
                amount: 500m,
                description: "Office supplies",
                paymentMethod: PaymentMethod.Cash,
                expenseDate: new DateTime(2026, 7, 15),
                correlationId: "corr-expense-001",
                createdBy: 1L,
                currency: "AED",
                sourceAccountId: 1L);

        [Fact]
        public void Create_ValidArgs_ExpenseIsDraft()
        {
            var expense = CreateDraftExpense();
            Assert.Equal(ExpenseStatus.Draft, expense.Status);
            Assert.Equal("EXP-2026-001", expense.ExpenseNumber);
            Assert.Equal(500m, expense.Amount);
        }

        [Fact]
        public void Create_ZeroAmount_ThrowsArgumentException()
        {
            Assert.Throws<ArgumentException>(() =>
                Expense.Create("EXP-001", 1L, 0m, "desc", PaymentMethod.Cash,
                    DateTime.Today, "corr-001", 1L));
        }

        [Fact]
        public void Create_NegativeAmount_ThrowsArgumentException()
        {
            Assert.Throws<ArgumentException>(() =>
                Expense.Create("EXP-001", 1L, -100m, "desc", PaymentMethod.Cash,
                    DateTime.Today, "corr-001", 1L));
        }

        [Fact]
        public void Create_EmptyExpenseNumber_ThrowsArgumentException()
        {
            Assert.Throws<ArgumentException>(() =>
                Expense.Create("", 1L, 100m, "desc", PaymentMethod.Cash,
                    DateTime.Today, "corr-001", 1L));
        }

        [Fact]
        public void Submit_DraftExpense_TransitionsToPendingApproval()
        {
            var expense = CreateDraftExpense();
            expense.Submit();
            Assert.Equal(ExpenseStatus.PendingApproval, expense.Status);
        }

        [Fact]
        public void Submit_NonDraftExpense_ThrowsInvalidOperationException()
        {
            var expense = CreateDraftExpense();
            expense.Submit();
            Assert.Throws<InvalidOperationException>(() => expense.Submit());
        }

        [Fact]
        public void Approve_PendingApprovalExpense_TransitionsToApproved()
        {
            var expense = CreateDraftExpense();
            expense.Submit();
            expense.Approve(approvedByUserId: 2L, postedTransactionId: 99L);
            Assert.Equal(ExpenseStatus.Approved, expense.Status);
            Assert.Equal(2L, expense.ApprovedBy);
            Assert.Equal(99L, expense.PostedTransactionId);
        }

        [Fact]
        public void Approve_DraftExpense_AlsoTransitionsToApproved()
        {
            // Master Accountant creates and approves in one step
            var expense = CreateDraftExpense();
            expense.Approve(approvedByUserId: 2L, postedTransactionId: 99L);
            Assert.Equal(ExpenseStatus.Approved, expense.Status);
        }

        [Fact]
        public void Approve_AlreadyApprovedExpense_ThrowsInvalidOperationException()
        {
            var expense = CreateDraftExpense();
            expense.Approve(2L, 99L);
            Assert.Throws<InvalidOperationException>(() => expense.Approve(2L, 100L));
        }

        [Fact]
        public void Reject_PendingApprovalExpense_TransitionsToRejected()
        {
            var expense = CreateDraftExpense();
            expense.Submit();
            expense.Reject(rejectedByUserId: 2L, reason: "Not justified");
            Assert.Equal(ExpenseStatus.Rejected, expense.Status);
            Assert.Equal("Not justified", expense.RejectionReason);
        }

        [Fact]
        public void Reject_EmptyReason_ThrowsArgumentException()
        {
            var expense = CreateDraftExpense();
            expense.Submit();
            Assert.Throws<ArgumentException>(() => expense.Reject(2L, ""));
        }

        [Fact]
        public void Cancel_DraftExpense_TransitionsToCancelled()
        {
            var expense = CreateDraftExpense();
            expense.Cancel();
            Assert.Equal(ExpenseStatus.Cancelled, expense.Status);
        }

        [Fact]
        public void Cancel_PendingApprovalExpense_ThrowsInvalidOperationException()
        {
            var expense = CreateDraftExpense();
            expense.Submit();
            Assert.Throws<InvalidOperationException>(() => expense.Cancel());
        }

        [Fact]
        public void MarkPosted_ApprovedExpense_TransitionsToPosted()
        {
            var expense = CreateDraftExpense();
            expense.Approve(2L, 99L);
            expense.MarkPosted(postedByUserId: 2L, journalEntryId: 10L);
            Assert.Equal(ExpenseStatus.Posted, expense.Status);
            Assert.Equal(10L, expense.PostedJournalEntryId);
        }

        [Fact]
        public void MarkPosted_NonApprovedExpense_ThrowsInvalidOperationException()
        {
            var expense = CreateDraftExpense();
            Assert.Throws<InvalidOperationException>(() => expense.MarkPosted(1L, 10L));
        }

        [Fact]
        public void MarkReversed_PostedExpense_TransitionsToReversed()
        {
            var expense = CreateDraftExpense();
            expense.Approve(2L, 99L);
            expense.MarkPosted(2L, 10L);
            expense.MarkReversed();
            Assert.Equal(ExpenseStatus.Reversed, expense.Status);
        }

        [Fact]
        public void MarkReversed_NonPostedExpense_ThrowsInvalidOperationException()
        {
            var expense = CreateDraftExpense();
            expense.Approve(2L, 99L);
            Assert.Throws<InvalidOperationException>(() => expense.MarkReversed());
        }
    }
}

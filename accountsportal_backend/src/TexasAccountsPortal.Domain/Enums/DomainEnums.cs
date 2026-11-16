namespace TexasAccountsPortal.Domain.Enums
{
    public enum AccountType
    {
        Cash,
        Bank,
        Credit
    }

    public enum LedgerType
    {
        Asset,
        Liability,
        Capital,
        Income,
        Expense
    }

    public enum FinancialTransactionType
    {
        Incoming,
        Outgoing,
        Contra,
        PurchaseReturn,
        SalesReturn,
        WalletDebit
    }

    public enum PaymentMethod
    {
        Cash,
        Bank,
        Credit,
        BankTransfer,
        Wallet
    }

    public enum FinancialTransactionStatus
    {
        Pending,
        Approved,
        Rejected
    }

    public enum TransactionReferenceType
    {
        Sale,
        Expense,
        Refund,
        SupplierPayment,
        OpeningBalance,
        Correction,
        Transfer,
        SupplierCreditClearance,
        SupplierWallet,
        Salary,
        Advance,
        Loan,
        // Service & Receipt Reference Types
        Visa,
        Flight,
        Hotel,
        Holiday,
        Transport,
        Vfs,
        Other,
        Receipt
    }

    public enum RecipientType
    {
        Supplier,
        Agent,
        Head
    }

    public enum ReceiptCategory
    {
        General,
        ClientWallet
    }

    public enum ReceiptOrigin
    {
        General = 1,
        ClientWallet = 2
    }

    public enum PayrollStatus
    {
        Draft,
        Confirmed
    }

    public enum PayrollRecordType
    {
        Salary,
        Advance,
        Incentive,
        Bonus,
        Deduction
    }

    public enum PayrollDirection
    {
        Credit,
        Debit
    }

    // ─── Phase 3: Accounting ─────────────────────────────────────────────────

    /// <summary>Top-level GL account type classification.</summary>
    public enum GlAccountType
    {
        Asset,
        Liability,
        Equity,
        Revenue,
        Expense
    }

    /// <summary>The side of the accounting equation that increases this account in normal use.</summary>
    public enum NormalBalance
    {
        Debit,
        Credit
    }

    public enum AccountingPeriodStatus
    {
        Open,
        Closed
    }

    public enum JournalEntryStatus
    {
        Draft,
        Submitted,
        Approved,
        Posted,
        Rejected,
        Reversed
    }

    public enum ExpenseStatus
    {
        Draft,
        PendingApproval,
        Approved,
        Posted,
        Rejected,
        Cancelled,
        Reversed
    }

    // ─── Phase 4: Payroll ───
    public enum ComponentType
    {
        Earning,
        Deduction
    }

    public enum PayrollRunStatus
    {
        Draft,
        Calculated,
        PendingApproval,
        Approved,
        Posted,
        PartiallyPaid,
        Paid,
        Rejected,
        Reversed
    }

    public enum AdvanceStatus
    {
        Pending,
        Approved,
        Rejected,
        Disbursed,
        PartiallyRecovered,
        Recovered,
        Cancelled
    }

    public enum LoanStatus
    {
        Pending,
        Approved,
        Rejected,
        Disbursed,
        Active,
        Paid,
        Defaulted,
        Cancelled
    }

    public enum ReimbursementStatus
    {
        Draft,
        PendingApproval,
        Approved,
        Rejected,
        Paid,
        Cancelled
    }

    public enum RepaymentStatus
    {
        Unpaid,
        Paid,
        PartiallyPaid
    }
}

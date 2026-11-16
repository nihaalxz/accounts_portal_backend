# Phase 4 — Payroll Financial Effect Matrix

This document maps every staff/payroll financial operation to its operational, cash, and ledger effects.

---

## 1. Effect Matrix

| Operation | Trigger Event | Operational Balance Effect | Bank / Cash Account Effect | Accounting Journal Entry (GL) | Outbox Message |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Give Advance** | Disbursement Approved | `OutstandingAdvance` Increments (Credit) | Decrements (Cash/Bank Outflow) | Debit: `1211` Staff Advances Receivable<br>Credit: Bank/Petty Cash Account | `None` |
| **Record Loan Payout** | Loan Disbursed | `OutstandingLoan` Increments | Decrements (Cash/Bank Outflow) | Debit: `1212` Staff Loans Receivable<br>Credit: Bank/Petty Cash Account | `None` |
| **Approve Payroll Run** | Payroll Run Approved | None | None | Debit: Salary/Commission Expenses<br>Credit: `2115` Staff Payroll Payable | `DeductSalesIncentiveEvent` (if incentive paid) |
| **Disburse Salary Payment** | Salary Payment Batch Posting | `SalaryBalance` Decrements | Decrements (Cash/Bank Outflow) | Debit: `2115` Staff Payroll Payable<br>Credit: Bank/Petty Cash Account | `None` |
| **Apply Advance Deduction** | Payroll Approval | `OutstandingAdvance` Decrements (Debit) | None (Offset deduction) | Debit: `2115` Staff Payroll Payable<br>Credit: `1211` Staff Advances Receivable | `None` |
| **Apply Loan Repayment** | Payroll Approval | `OutstandingLoan` Decrements | None (Offset deduction) | Debit: `2115` Staff Payroll Payable<br>Credit: `1212` Staff Loans Receivable | `None` |

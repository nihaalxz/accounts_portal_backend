# Phase 4 — GL Account Mapping Matrix

This document maps all payroll components and transactions to their target General Ledger account codes.

---

## 1. Account Mapping Matrix

| Payroll Component / Flow | Leg Type | Account Code | Account Name |
| :--- | :--- | :--- | :--- |
| **Basic Salary** | Debit | `5010` | Staff Basic Salaries Expense |
| **Housing Allowance** | Debit | `5020` | Staff Housing Allowances Expense |
| **Transport Allowance** | Debit | `5030` | Staff Transport Allowances Expense |
| **Incentives** | Debit | `5040` | Staff Incentives Expense |
| **Commissions** | Debit | `5050` | Staff Commissions Expense |
| **Bonuses** | Debit | `5060` | Staff Bonuses Expense |
| **Staff Payroll Payable** | Credit (Accrual) | `2115` | Staff Payroll Payable |
| **Staff Advances Receivable** | Debit (Disbursement) | `1211` | Staff Advances Receivable |
| **Staff Loans Receivable** | Debit (Disbursement) | `1212` | Staff Loans Receivable |
| **Advance Recovery** | Credit (Recovery) | `1211` | Staff Advances Receivable |
| **Loan Repayment** | Credit (Recovery) | `1212` | Staff Loans Receivable |
| **Salary Payment Payout** | Debit | `2115` | Staff Payroll Payable |
| **Salary Payment Payout** | Credit | `1111` / `1121` | Petty Cash / General Bank Account |
| **Advance Disbursement** | Credit | `1111` / `1121` | Petty Cash / General Bank Account |
| **Loan Disbursement** | Credit | `1111` / `1121` | Petty Cash / General Bank Account |
| **Reimbursements** | Debit | `5230` | Other Operating Expenses (or category matching) |

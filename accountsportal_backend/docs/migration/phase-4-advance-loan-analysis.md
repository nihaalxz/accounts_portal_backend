# Phase 4 — Advance and Loan Analysis

This document details the tracking, disbursement, and recovery rules for staff advances and loans.

---

## 1. Staff Advances

Advances are short-term interest-free payroll loans.

### 1.1 Issuance (Disbursement)
- **Initiated via**: `POST api/staff/{id}/give-advance`.
- **Pre-requisites**: Selected funding source (Bank or Cash Account) must have sufficient balance. Accounting period must be open.
- **Financial Actions**:
  - Deducts funds from Bank/Cash account (creates an approved outgoing transaction).
  - Inserts a `StaffPayrollRecord` with `type = 'advance'`, `direction = 'credit'`, `status = 'confirmed'`.

### 1.2 Recovery
- **Deduction**: Processed during payroll runs.
- **Limit**: Recovery amount cannot exceed outstanding advance balance.
- **Calculated as**:
  $$\text{Outstanding Advance} = \sum \text{Advance Credit} - \sum \text{Advance Debit}$$

---

## 2. Staff Loans

Loans represent larger, long-term credit arrangements with explicit amortized schedules.

### 2.1 Schema Design
A new entity `StaffLoan` represents the loan aggregate:
- `Id` (long)
- `StaffId` (long)
- `PrincipalAmount` (decimal)
- `InterestRate` (decimal)
- `Status` (enum: `Pending`, `Approved`, `Disbursed`, `Active`, `Paid`, `Cancelled`)
- `OutstandingBalance` (decimal)
- `RepaymentSchedule` (collection of `LoanRepaymentSchedule` lines)

### 2.2 Repayment Schedules
Each `LoanRepaymentSchedule` line represents a planned deduction:
- `DueDate` (DateTime)
- `PrincipalAmount` (decimal)
- `InterestAmount` (decimal)
- `AmountPaid` (decimal)
- `Status` (enum: `Unpaid`, `Paid`, `PartiallyPaid`)
- `PayrollPeriodId` (link to when it was paid)
- Overpayments are prohibited.

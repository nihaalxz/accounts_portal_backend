# Phase 4 — Reimbursement and Deduction Analysis

This document details the workflow and validation logic for staff reimbursements and manual deductions.

---

## 1. Staff Reimbursements

Reimbursements represent business out-of-pocket expenses paid by employees that the company pays back.

### 1.1 Lifecyle & Execution
- **Lifecycle**: `Draft` → `PendingApproval` → `Approved` → `Paid` / `Cancelled`.
- **Payment Modes**:
  - Direct Payment (creates cash/bank transaction).
  - Payroll Payment (credited as earning inside a payroll run).
- **Invariants**:
  - Must have a unique external reference.
  - Payment occurs exactly once. Paid reimbursements are immutable.

---

## 2. Staff Deductions

Deductions represent amounts deducted from staff salary (excluding advance/loan repayments).

### 2.1 Types of Deductions
- **Penalties**: Disciplinary or operational recovery (e.g., cash drawer shortfalls).
- **Other Deductions**: Unpaid leaves, standard tax withholdings, etc.

### 2.2 Invariants
- **Deduction Cap**: Deductions cannot exceed 50% of the employee's gross basic salary for the period, unless explicitly authorized.
- **Clamping**: Total deductions must never result in a negative Net Pay.

# Phase 4 — Payroll Domain Invariants

This document lists the business rules and constraints that the domain models enforce during execution.

---

## 1. Domain Invariants

### 1.1 Identity Invariants
- **Unique Staff ID**: Each `StaffProfile` must map to a unique external User ID from the Operations Portal.
- **Unique Component Code**: Each `SalaryComponent` must have a unique component code (e.g. `BASIC_SALARY`, `COMMISSION`).

### 1.2 Payroll Run Invariants
- **Single Run Per Period**: Only one active `PayrollRun` can be calculated and posted for a given `PayrollPeriod` and employee.
- **No Negative Net Pay**: Net Pay must always be $\ge 0$. Under no circumstances can deductions reduce Net Pay below zero. Deductions must be clamped.
- **Immutability of Approved Runs**: Once a `PayrollRun` is approved or posted, its status is finalized. No updates, modifications, or deletes can be performed on the run, its employees, or component snapshots.

### 1.3 Staff Advances & Loans Invariants
- **Disbursement Cap**: An advance or loan cannot be disbursed if the source funding account (Bank or Cash Account) has insufficient balance.
- **Overpayment Guard**: A loan repayment or advance recovery amount cannot exceed the current outstanding balance. Outstanding balances must never go negative.

### 1.4 Postings Invariants
- **Closed Period Lock**: Any payroll posting or salary payment leg whose transaction date falls within a closed `AccountingPeriod` must be rejected immediately.
- **Balanced GL Entry**: Every payroll posting to the general ledger must balance perfectly (Debits = Credits).

# Phase 4 — Payroll Gap Analysis

This document identifies gaps between the legacy Laravel system and the new C# .NET General Ledger integrated payroll architecture.

---

## 1. Gap Analysis Matrix

| Feature | Legacy Laravel | Modern C# .NET Implementation | Gap Resolution Strategy |
| :--- | :--- | :--- | :--- |
| **Staff Registry Cache** | Dynamic HTTP fetch from Sales Portal API | Local `StaffProfile` database cache | Sync all staff profiles via `StaffSyncController` and store in local `staff_profiles` table. |
| **Compensation Config History** | No history; reads live salary fields | Historical snapshotting at run creation | Snapshot basic salary, allowances, and components in the `PayrollInputSnapshot` during run calculation. |
| **Incentive Deductions** | Inline HTTP call inside DB transaction | Transactional Outbox event delivery | Enqueue `DeductSalesIncentiveEvent` in transactional outbox; dispatch asynchronously. |
| **General Ledger Integration** | None. Single-entry cash mutations only. | Automatic double-entry GL postings | Posting engine writes balanced debit/credit journals via `IAccountingPostingService`. |
| **Closed Period Control** | None. | Blocks postings to closed periods | `IAccountingPostingService` verifies that the period is open before posting payroll ledger entries. |
| **Loan Repayments** | No structured loans/schedules | Formally scheduled loan repayments | Implement `StaffLoan` and `LoanRepaymentSchedule` tables. |
| **Payroll Runs** | Individual records posted directly | Structured `PayrollRun` aggregate | Introduce `PayrollPeriod` and `PayrollRun` aggregates supporting batch calculation and approvals. |

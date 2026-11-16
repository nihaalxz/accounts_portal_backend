# Phase 4 — Open Questions

This document tracks any clarifying design or operational questions regarding Phase 4 staff and payroll rules.

---

## 1. Open Questions

### Q1: Attendance/Leave Deductions
- **Question**: Does the Accounts Portal calculate attendance or leave deductions dynamically, or are these provided as static inputs during payroll run creation?
- **Impact**: Determines if we need integration events for attendance/leave tracking.
- **Recommended Default**: Assume they are manual inputs or external facts snapshotted during the payroll run creation.

### Q2: Loan Interest and Amortization Rules
- **Question**: Do staff loans carry interest, or are they interest-free (just like advances)?
- **Impact**: Affects whether we need an interest amortization formula.
- **Recommended Default**: Assume staff loans are interest-free unless a specific interest formula is required.

### Q3: Reimbursement Approval Boundaries
- **Question**: Are reimbursements paid out exclusively via payroll runs, or can they be paid out independently as separate Bank/Cash payments?
- **Impact**: Determines if we need independent payment endpoints for reimbursements.
- **Recommended Default**: Support both payroll payout (credited in payroll run) and direct cash/bank disbursement.

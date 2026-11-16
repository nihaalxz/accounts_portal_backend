# Phase 4 — Payroll State Machines

This document specifies the allowed state transitions for Payroll Runs, Advances, Loans, and Reimbursements.

---

## 1. Payroll Run State Machine

```mermaid
stateDiagram-v2
    [*] --> Draft : Create
    Draft --> Calculated : Calculate
    Calculated --> Draft : Reset / Recalculate
    Calculated --> PendingApproval : Submit
    PendingApproval --> Approved : Approve
    PendingApproval --> Draft : Reject
    Approved --> Posted : Post to GL
    Posted --> PartiallyPaid : Disburse Partial Payment
    Posted --> Paid : Disburse Complete Payment
    PartiallyPaid --> Paid : Complete Remaining Payment
    Posted --> Reversed : Reverse Posting
```

- **Calculated**: Snapshot is locked. Recalculation reverts state to `Draft` and regenerates the snapshot.
- **Approved**: Immutable. Net Pay is locked as a payroll liability (`2115`).
- **Posted**: Balanced double-entry journals are created in the General Ledger.

---

## 2. Staff Advance State Machine

```mermaid
stateDiagram-v2
    [*] --> Pending : Submit Request
    Pending --> Approved : Approve
    Pending --> Rejected : Reject
    Approved --> Disbursed : Disburse Cash/Bank
    Disbursed --> PartiallyRecovered : Recover portion via payroll
    Disbursed --> Recovered : Recover full outstanding
    PartiallyRecovered --> Recovered : Recover remaining outstanding
    Pending --> Cancelled : Cancel Request
```

- **Disbursed**: Funds exit Cash/Bank; advance receivable balance is active.

---

## 3. Staff Loan State Machine

```mermaid
stateDiagram-v2
    [*] --> Pending : Apply
    Pending --> Approved : Approve
    Pending --> Rejected : Reject
    Approved --> Disbursed : Disburse Principal
    Disbursed --> Active : Principal Active
    Active --> Paid : Full repayments received
    Active --> Defaulted : Overdue repayment
    Pending --> Cancelled : Cancel
```

---

## 4. Staff Reimbursement State Machine

```mermaid
stateDiagram-v2
    [*] --> Draft : Create Claim
    Draft --> PendingApproval : Submit
    PendingApproval --> Approved : Approve
    PendingApproval --> Rejected : Reject
    Approved --> Paid : Disburse Payment
    Draft --> Cancelled : Cancel Claim
```

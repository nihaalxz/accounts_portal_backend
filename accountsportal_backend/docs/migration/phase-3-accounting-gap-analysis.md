# Phase 3 — Accounting Gap Analysis

---

## Summary

The legacy system has NO formal double-entry accounting. Phase 3 introduces the complete accounting subsystem from scratch. The gaps are entirely additive — no legacy accounting logic is being replaced; new accounting logic is being built above the existing operational foundation.

---

## Gap Matrix

| Requirement | Status | Notes |
| :--- | :--- | :--- |
| Chart of Accounts | `MISSING` | Introduced in Checkpoint 3 |
| Account hierarchy | `MISSING` | Parent-child with cycle prevention |
| System account protection | `MISSING` | Seed accounts protected from deletion |
| Accounting Periods | `MISSING` | Introduced in Checkpoint 4 |
| Period open/close | `MISSING` | |
| Period reopen | `MISSING` | |
| Closed period enforcement | `MISSING` | |
| Expense entity (separate from FinancialTransaction) | `MISSING` | Introduced in Checkpoint 5 |
| Expense state machine | `MISSING` | Draft → PendingApproval → Approved → Posted |
| Expense GL posting | `MISSING` | Auto-posted on approval |
| Expense idempotency | `MISSING` | |
| Expense concurrency | `MISSING` | |
| Expense rollback on GL failure | `MISSING` | |
| Journal Entry (double-entry) | `MISSING` | Introduced in Checkpoint 6 |
| Journal balancing validation | `MISSING` | Total debit = total credit |
| Journal posting | `MISSING` | |
| Journal immutability after posting | `MISSING` | |
| GL Posting Engine (IAccountingPostingService) | `MISSING` | Introduced in Checkpoint 7 |
| GL append-only guarantee | `MISSING` | |
| GL duplicate source prevention | `MISSING` | |
| GL period validation | `MISSING` | |
| GL concurrency | `MISSING` | |
| Reversal workflow | `MISSING` | Introduced in Checkpoint 8 |
| Reversal idempotency | `MISSING` | |
| Reversal prevents double reversal | `MISSING` | |
| Trial Balance from GL | `MISSING` | Introduced in Checkpoint 9 |
| Trial Balance total debit = total credit | `MISSING` | |
| Operational-to-GL integration (Supplier Payment) | `MISSING` | Checkpoint 10 |
| Operational-to-GL integration (Purchase Return) | `MISSING` | Checkpoint 10 |
| Operational-to-GL integration (Sales Return) | `MISSING` | Checkpoint 10 |
| Operational-to-GL integration (Expense) | `MISSING` | Checkpoint 5 (inline with Expense) |
| GL Reconciliation (missing journal detection) | `MISSING` | Checkpoint 11 |
| GL Reconciliation (unbalanced journal detection) | `MISSING` | Checkpoint 11 |
| GL Reconciliation (duplicate posting detection) | `MISSING` | Checkpoint 11 |
| GL Reconciliation read-only | `MISSING` | |
| General Ledger Report | `MISSING` | Checkpoint 12 |
| Account Statement | `MISSING` | Checkpoint 12 |
| Expense Report | `MISSING` | Checkpoint 12 |
| Profit and Loss Report | `BLOCKED BY ACCOUNT MAPPING` | Deferred — requires complete GL integration |
| Balance Sheet | `BLOCKED BY ACCOUNT MAPPING` | Deferred |
| Architecture tests for GL boundaries | `MISSING` | Checkpoint 13 |
| Security review (Phase 3) | `MISSING` | Checkpoint 13 |
| Performance review (Phase 3) | `MISSING` | Checkpoint 13 |
| Phase 3 SQL Server migration | `MISSING` | Created in each checkpoint |
| Migration evidence | `MISSING` | Checkpoint 14 |

---

## Non-Gaps (Already in Foundation)

| Item | Status | Evidence |
| :--- | :--- | :--- |
| `FinancialPostingService` | VERIFIED | Phase 1/2 |
| `ITransactionalExecutor` | VERIFIED | Phase 1 |
| `IIdempotencyRecoveryStore` | VERIFIED | Phase 2 |
| `AuditLog` mechanism | VERIFIED | Phase 1 |
| `OutboxMessage` mechanism | VERIFIED | Phase 1 |
| `CorrelationId` propagation | VERIFIED | Phase 1 |
| `CancellationToken` propagation | VERIFIED | Phase 1 |
| `ProblemDetails` | VERIFIED | Phase 1 |
| `JWT / authorization policies` | VERIFIED | Phase 1 |
| `rowversion` on aggregates | VERIFIED | Phase 1 |
| `decimal(19,3)` precision | VERIFIED | Phase 1 |
| Real SQL Server integration tests | VERIFIED | Phase 1 |
| `ExpenseHeader` (category master) | IMPLEMENTED | Phase 1 (scaffolded) |
| `Journal` (legacy party transfer log) | IMPLEMENTED | Phase 1 (scaffolded) |

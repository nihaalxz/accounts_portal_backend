# Financial Domain Invariants

This document lists the strict financial invariants that must be guaranteed by the domain entities and the posting engine.

---

## 1. Transaction Immutability Invariants
* **Posted Record Immutability**: Once a transaction is saved to the database, its financial fields (Amount, Source, Destination, Types) must **never** be updated or modified.
* **Deletion Invariance**: No financial transaction record may be physically deleted from the database.
* **State Machine Transitions**:
  - `pending` $\rightarrow$ `approved` (Valid)
  - `pending` $\rightarrow$ `rejected` (Valid)
  - `approved` $\rightarrow$ `pending` (Blocked)
  - `rejected` $\rightarrow$ `approved` (Blocked)
  - Re-approving or re-rejecting an already terminal transaction is strictly prohibited.

---

## 2. Balance Aggregation Invariants
* **Atomicity**: Any mutation to a Bank or Account balance must occur inside a database transaction block. A credit to one side and a debit to the other must succeed or fail as a single unit of work.
* **Insufficient Balance Prevention**: Accounts and Banks cannot be debited below zero unless they are explicitly configured to allow negative balances (e.g. credit ledger accounts).
* **Contra Transfer Restrictions**:
  - The source account and destination account must not be identical.
  - Both source and destination accounts must be active.

---

## 3. External Integration Invariants
* **No Inline HTTP Calls**: Sibling API synchronization must not happen inside SQL transaction blocks. 
* **Transactional Outbox Guarantee**: If a remote sync request is required (e.g. crediting a Sales Portal wallet), an `OutboxMessage` must be written to the database inside the same local SQL transaction as the state change.
* **Idempotency Check**: Every financial write command must check a persistent registry of `IdempotencyRecord`s by Scope + Key. Concurrent duplicate keys must return HTTP `409 Conflict`.

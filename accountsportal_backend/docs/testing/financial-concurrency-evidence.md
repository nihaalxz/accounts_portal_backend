# Financial Concurrency & Race Condition Verification Evidence

* **File Path**: `docs/testing/financial-concurrency-evidence.md`

---

## 1. Scope
This document records the verification of optimistic concurrency, idempotency checks, and double-entry invariants under race conditions in the Texas Accounts Portal financial engine.

---

## 2. Evidence of Test Quality

### A. Context and Connection Separation
* **Mechanism**:
  - Tests utilize separate DbContext instances (`dbContext1` and `dbContext2`) and distinct physical connections to SQL Server LocalDB.
  - This ensures that EF Core's local cache does not hide concurrent edits.

### B. Conflicting Operations Setup
* **Verification Test**: `StaleRowVersionReturns409`
* **Evidence**:
  - Both contexts load the same Account state (observing the same RowVersion).
  - Context 1 credits the account and successfully saves.
  - Context 2 attempts to credit the account. EF Core detects the modified RowVersion and correctly throws `DbUpdateConcurrencyException`.

### C. Genuinely Concurrent Tasks
* **Verification Test**: `ConcurrentDuplicateCommands_CreateOneFinancialEffect`
* **Evidence**:
  - Spawns concurrent Tasks calling `PostIncomingTransactionAsync` with the same idempotency key simultaneously.
  - Assertions check that exactly one transaction succeeds in creating the entry, while the second is either replayed or rejected.
  - Final database balances match exactly the single successful credit.

### D. Multi-Entity Invariant Assertions
* **Target Balances**: Asserted that only 1 credit was applied (e.g. balance = 150m instead of 200m).
* **FinancialTransaction Count**: Verified that only 1 `FinancialTransaction` record was written to the database.
* **AuditLog Count**: Verified that exactly 1 audit record is written.
* **IdempotencyRecord State**: Asserted that the idempotency key state is marked `completed` and contains the expected response payload.

---

## 3. Final Verification Status
* **STATUS**: **PASS**

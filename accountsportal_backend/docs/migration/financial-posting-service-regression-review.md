# Financial Posting Service Regression Review

This document audits the concrete implementation of `FinancialPostingService` inside `TexasAccountsPortal.Infrastructure` against functional specifications, transaction boundaries, connection retry constraints, concurrency, and financial core invariants.

---

## Operations Review Matrix

### 1. Incoming Posting (`PostIncomingTransactionAsync`)
* **Transaction Boundary**: Scoped dynamically inside `ITransactionalExecutor.ExecuteInTransactionAsync`.
* **Idempotency Behavior**: Scoped with key `incoming-txn:{idempotencyKey}`. Computes SHA256 of the JSON request payload. Checks for existing records in the database.
* **Balance Mutation**: Mutates `account.Credit(Amount)` or `bank.Credit(Amount)` instantly.
* **FinancialTransaction Persistence**: Creates a `FinancialTransaction` record with type `Incoming` and moves status to `Approved`.
* **AuditLog & Outbox**: Inserts an `AuditLog` record. No outbox messaging.
* **Rollback & Recovery**: Aborts and rolls back the transaction on exception. The idempotency record is removed asynchronously using `IIdempotencyRecoveryStore`.
* **Concurrency**: Optimistic concurrency on target account/bank balances (using row versioning).
* **CancellationToken**: Propagated to all query and save methods.

### 2. Outgoing Posting (`PostOutgoingTransactionAsync`)
* **Transaction Boundary**: Scoped inside `ITransactionalExecutor.ExecuteInTransactionAsync`.
* **Idempotency Behavior**: Replays response or rejects conflicts based on the request hash.
* **Balance Mutation**: Starts as `Pending` and do not deduct balances until approved.
* **FinancialTransaction Persistence**: Saves the transaction with status `Pending`.
* **AuditLog & Outbox**: Inserts an `AuditLog` record. No outbox messaging.
* **Rollback & Recovery**: Rolls back database state on any exception, removing the pending idempotency record via `IIdempotencyRecoveryStore`.
* **CancellationToken**: Propagated.

### 3. Contra Transfer (`PostContraTransactionAsync`)
* **Transaction Boundary**: Scoped inside `ITransactionalExecutor.ExecuteInTransactionAsync`.
* **Idempotency Behavior**: Replays response or rejects conflicts.
* **Balance Mutation**: Debits the source account/bank and credits the destination account/bank.
* **FinancialTransaction & Audit**: Saves transaction as `Approved`, and records an `AuditLog`.
* **Rollback**: Atomic rollback on failure (prevents partial transfers).
* **Concurrency**: Account/Bank row versions protect against lost updates on both sides.
* **CancellationToken**: Propagated.

### 4. Approval (`ApproveTransactionAsync`) & Rejection (`RejectTransactionAsync`)
* **Transaction Boundary**: Scoped inside `ITransactionalExecutor.ExecuteInTransactionAsync`.
* **Idempotency**: Checked via the transaction's unique ID and status state machine.
* **Balance Mutation**: Debits source account/bank (on approval).
* **FinancialTransaction**: Status moves to `Approved` or `Rejected`.
* **AuditLog & Outbox**: Inserts audit log and enqueues sync webhook tasks to the outbox.
* **Rollback**: Aborts all mutations, state modifications, and outbox writes on any error.
* **Concurrency**: Protected via transaction `RowVersion` and balance `RowVersion` concurrency tokens.
* **CancellationToken**: Propagated.

---

## Idempotency Recovery Mechanics

| Mechanism | Old Approach | New Approach |
| :--- | :--- | :--- |
| **Lifecycle Owner** | `FinancialPostingService` directly | `IIdempotencyRecoveryStore` abstraction |
| **Context Instance** | Created directly using options: `new AccountsDbContext(_dbContextOptions)` | Resolved dynamically using factory: `IDbContextFactory<AccountsDbContext>.CreateDbContextAsync(...)` |
| **Change Tracker** | Exposes options configuration details to domain services | Fully hidden behind the Application interface boundary |
| **EF Interceptors** | Manually instantiated | Automatically preserved via EF Core's built-in `OnConfiguring` hooks |

---

## Test Verification Summary
All regression tests execute and pass cleanly on SQL Server LocalDB:
* **Successful commands** create completed idempotency records.
* **Same key + same payload** replays the response successfully.
* **Same key + different payload** throws 409 Conflict.
* **Failed transactions** successfully roll back the changes and invoke the `IIdempotencyRecoveryStore` to clean up pending record entries.
* **CancellationToken** is propagated to all recovery database operations.

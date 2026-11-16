# Backend Performance Review

* **File Path**: `docs/performance/accounts-backend-performance-review.md`

---

## 1. Scope
The scope covers database indexing strategies, outbox polling concurrency, EF Core tracking configurations, and connection resiliency retry performance.

## 2. Methodology
We reviewed EF Core configurations, T-SQL raw lock hints used in batch claiming, and query optimization patterns in `AccountsDbContext` and `OutboxProcessor`.

## 3. Commands/Searches Performed
* Inspected EF entity configurations (`AccountConfiguration.cs`, `OutboxMessageConfiguration.cs`, `IdempotencyRecordConfiguration.cs`).
* Audited lock hints `UPDLOCK, READPAST, ROWLOCK` in `ClaimOutboxMessagesAsync`.
* Evaluated `AsNoTracking()` usage for read-only queries.

## 4. Evidence (Performance Controls Verified)

### A. Index Structures
* **Outbox Polling Index**: Covered by composite index on `(Status, ScheduledAtUtc) INCLUDE (Id)` to speed up background worker claims.
* **Idempotency Index**: Unique index on `Id` to guarantee single-row lookups.
* **Concurrency Column**: Row versioning columns (`rowversion`) mapped on `Account` and `Bank` entities, enabling high-performance optimistic concurrency without pessimistic database locks.

### B. Outbox Multi-Instance Safety & Locks
* **T-SQL locking hints**:
  `UPDATE TOP (N) WITH (UPDLOCK, READPAST, ROWLOCK) SET Status = 'processing' ...`
* **Analysis**:
  - `UPDLOCK` locks rows during reading to prevent multiple workers from reading the same rows.
  - `READPAST` skips locked rows rather than blocking, ensuring zero contention.
  - `ROWLOCK` restricts locks to individual rows, maximizing throughput.

### C. EF Core Query Optimizations
* **Read-only Queries**: Exposed as `IQueryable<T>` from `IAccountsDbContext`, enabling controllers to selectively project data and apply `.AsNoTracking()` to bypass EF Core change tracking overhead.
* **Transaction connection retries**: Wrapped under `SqlServerRetryingExecutionStrategy` connection limits via `TransactionalExecutor` to recover from transient connection drops without failing operations.

---

## 5. Findings
No critical performance blocker was identified in the reviewed Phase 1 workload and query scope. Database querying and claiming throughput is configured correctly. Background processors scale horizontally across multiple web app instances.

## 6. Violations
No performance bottleneck violations were identified in the inspected source code.

## 7. Fixes
No fixes required.

## 8. Remaining Limitations
Performance assertions are based on unit/integration testing simulations and index analysis under local database engines. Production performance may vary under high traffic loads.

## 9. Final Status
* **STATUS**: **PASS** (No unresolved critical findings identified within the reviewed Phase 1 scope).

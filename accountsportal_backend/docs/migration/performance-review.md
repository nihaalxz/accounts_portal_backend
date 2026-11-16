# Performance Review

This review documents database indexing strategies, query execution optimizations, and batch sizes in background workers.

---

## Performance Auditing

### 1. Database Indexing
* **Optimization**:
  * Outbox table has non-clustered indexes on `(Status, AvailableAt)` to prevent sequential table scans during claims.
  * Idempotency table uses a unique index on the primary key to enable sub-millisecond lookup times.
* **Status**: **VERIFIED**
* **Evidence**:
  * Configured in `EntityConfigurations.cs` and deployed via the database migration schemas.

### 2. Outbox Batch Claiming Bounds
* **Optimization**:
  * Outbox processing batches are bound using `ClaimOutboxMessagesAsync(batchSize, ...)` to prevent memory spikes on large backlogs.
  * Claims use atomic locking hints `WITH (UPDLOCK, READPAST, ROWLOCK)` to ensure non-blocking, multi-instance safe executions.
* **Status**: **VERIFIED**
* **Evidence**:
  * Implemented in `AccountsDbContext.cs` and `OutboxProcessor.cs`.
  * Verified via `ProcessorClaimsBoundedBatch` and `TwoProcessorsCannotClaimSameMessage` integration tests.

### 3. Query Materialization and Tracking
* **Optimization**:
  * Read-only operations use `AsNoTracking()` to avoid DbContext change tracking overhead.
  * Queries select only the fields needed to reduce serialization sizes.
* **Status**: **VERIFIED**
* **Evidence**:
  * Implemented across read paths inside controllers and query handlers.

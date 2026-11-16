# Phase 2 Reconciliation Query Performance Review

This document audits the EF Core generated SQL queries and database indexes supporting reconciliation lookups and statements.

## 1. Indexing Strategy

To support fast, non-blocking reconciliation lookups and statements, the following indexes are configured:

1. **Transactions Index**:
   - Index: `IX_transactions_SupplierId_CreatedAt`
   - Purpose: Accelerates supplier statement lookup pagination and date-range sorting.
2. **Outbox Message Index**:
   - Index: `IX_outbox_messages_Status_AvailableAt`
   - Purpose: Optimizes processor querying for pending messages, reducing database scans.
3. **Optimistic Concurrency Index**:
   - Type: `RowVersion` columns (rowversion byte array) on `Bank`, `Account`, and `Supplier` entities to prevent concurrent update overwrite anomalies.

## 2. EF Core Query Optimizations

* **AsNoTracking**: Every lookup query in the reconciliation controller is marked with `AsNoTracking()`. This:
  - Avoids registering entities in EF Core's change tracker.
  - Eliminates ChangeTracker traversal overhead.
  - Minimizes memory usage for large supplier statement reads.
* **DTO Projection**: Queries project directly into `TransactionResponse` DTO structures using `Select()`. This prevents loading unnecessary database columns (like RowVersion tokens or internal auditing details) into memory.

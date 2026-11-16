# Phase 3 Performance Review

This document audits the performance optimization strategies applied during Phase 3 database queries, indexing, and report aggregations.

## 1. Query Optimizations

### No-Tracking Queries
Every read-only query in `ReportingService`, `ReconciliationController`, and `JournalEntryService` uses EF Core's `AsNoTracking()` extension. This:
- Bypasses Entity Framework's change tracker, reducing CPU and memory usage.
- Prevents database state pollution for reporting endpoints.

### O(N) Complexity for Reconciliation Check
In `ReconciliationController.GetGlReconciliation`, checking for missing journals compares hundreds of operational transactions against ledger entries. Instead of nested database queries (which would result in an O(N * M) performance cliff), the endpoint:
1. Queries the distinct `SourceId` values of approved transactions and posted expenses in range.
2. Resolves matching `JournalEntry` records using a single `Contains` query.
3. Loads results into a hash-set in-memory to execute O(1) key lookups.
Total time complexity is reduced to O(N + M).

### Leaf-Only Database Aggregation
For Trial Balance generation, recursive parent-child rollups are computed in application memory after loading the Chart of Accounts list, rather than executing recursive SQL common table expressions (CTEs). Since the Chart of Accounts is small (typically < 1,000 records), this avoids complex database CTE recursion overhead.

## 2. Indexing Strategy

To support fast reporting lookups, the database schema includes the following non-clustered indexes:

```sql
-- For general ledger report and statement range queries
CREATE NONCLUSTERED INDEX IX_general_ledger_entries_AccountId_PostingDate 
ON general_ledger_entries (AccountId, PostingDate) 
INCLUDE (Debit, Credit, Description);

-- For reconciliation missing/duplicate journal entry detection
CREATE NONCLUSTERED INDEX IX_journal_entries_SourceType_SourceId 
ON journal_entries (SourceType, SourceId);

CREATE NONCLUSTERED INDEX IX_general_ledger_entries_SourceType_SourceId 
ON general_ledger_entries (SourceType, SourceId);
```

## 3. Memory Pressure Mitigations

- **Input Validation**: All date range reports validate that `startDate <= endDate`, preventing requests from querying massive year-long lists due to swapped parameters.
- **Asynchronous Execution**: All EF Core database round-trips use `ToListAsync`, `SumAsync`, and `FirstOrDefaultAsync` with proper propagation of `CancellationToken` to terminate long-running database execution immediately upon request cancellation.

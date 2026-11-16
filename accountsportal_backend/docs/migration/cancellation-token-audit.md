# Cancellation Token Audit

This audit ensures that all long-running, database-dependent, or network-bound operations respect cooperative cancellation.

---

## Audit Findings

### 1. Database Queries and Persistences
* **Verification**: All queries to `AccountsDbContext` in `FinancialPostingService` and `AccountsDbContextSeed` propagate `CancellationToken`.
* **Evidence**:
  * `FinancialPostingService.cs` propagates `cancellationToken` or `ct` to all `FindAsync`, `ToListAsync`, `SumAsync`, and `SaveChangesAsync` calls.
  * `AccountsDbContext.ClaimOutboxMessagesAsync` passes `cancellationToken` to `ToListAsync`.

### 2. Background Processing Loops
* **Verification**: Background workers monitor `stoppingToken` continuously and pass it to internal execution routines.
* **Evidence**:
  * `OutboxProcessor.ExecuteAsync` runs a `while (!stoppingToken.IsCancellationRequested)` loop.
  * It passes `stoppingToken` directly to `ProcessOutboxMessagesAsync` and `Task.Delay`.

### 3. Controller Endpoints
* **Verification**: HTTP routes pass `CancellationToken` from the HTTP request context into the application layer.
* **Evidence**:
  * All transaction controllers accept `CancellationToken cancellationToken` in their actions and forward it to service calls.

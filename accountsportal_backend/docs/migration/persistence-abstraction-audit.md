# Persistence Abstraction Audit

This document verifies the clean separation of concerns between business application boundaries and persistence layers.

---

## Architectural Separation Verification

### 1. Separation of Database Transactions
* **Boundary Rules**: The application layer must not directly control database execution strategies or open connections.
* **Status**: **VERIFIED**
* **Evidence**:
  * Moved transaction control out of `IAccountsDbContext` and `AccountsDbContext`.
  * Declared the abstract transaction boundary interface `ITransactionalExecutor` inside the Application layer.
  * Concrete implementation `TransactionalExecutor` lives in Infrastructure, handling SQL Server-specific retrying strategies (`CreateExecutionStrategy()`).
  * Enforced via static compilation check and `ApplicationDoesNotControlSqlServerExecutionStrategy` and `TransactionalExecutorImplementationLivesInInfrastructure` architecture tests.

### 2. DbContext Interface Layer Cleanliness
* **Boundary Rules**: The `IAccountsDbContext` interface must only expose domain collections and transaction-agnostic saving hooks (`SaveChangesAsync`).
* **Status**: **VERIFIED**
* **Evidence**:
  * Exposes only `IQueryable<T>` collections, `Add()`, `Remove()`, `FindAsync()`, and `SaveChangesAsync()`.
  * Exposes no SQL Connection or Transaction attributes.
  * Enforced via `IAccountsDbContextDoesNotExposeTransactionExecution` static architecture test.

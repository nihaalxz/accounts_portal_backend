# Persistence Abstraction Technical Debt Audit

* **File Path**: `docs/architecture/accounts-persistence-abstraction-technical-debt.md`

---

## 1. Scope
The scope of this audit covers layer boundaries, specifically assessing if database context abstractions (e.g. `IAccountsDbContext`) leak Entity Framework or SQL Server lifecycle details into the Application and Domain assemblies.

## 2. Methodology
We analyzed interface methods, properties, and project dependencies. We added automated architectural tests to verify clean boundaries.

## 3. Commands/Searches Performed
* Checked `IAccountsDbContext.cs` declaration.
* Verified assembly references in `TexasAccountsPortal.Application.csproj`.
* Executed NetArchTest architecture rules checking for EF Core dependencies.

---

## 4. Architectural Analysis & Technical Debt Identification

### A. Rejection of Direct DbContext Construction in Services
Directly instantiating `new AccountsDbContext(...)` or injecting `DbContextOptions<AccountsDbContext>` inside `FinancialPostingService` is architecturally rejected because:
1. It leaks physical infrastructure implementation details (such as EF Core types and connection setup configurations) into the domain service layer.
2. It makes the posting service directly responsible for DB context lifecycle management (creation, disposal), violating the Single Responsibility Principle.
3. It bypasses the Dependency Injection container's lifecycle management for database contexts.

### B. Introduction of IIdempotencyRecoveryStore Abstraction
To resolve this, we introduced the narrow `IIdempotencyRecoveryStore` interface in the Application project:
* It exposes a single, purpose-specific operation: `RemovePendingRecordAsync(id, cancellationToken)`.
* It hides all database implementation details (no ChangeTracker, DbSet, or DbContext leaks).

### C. Implementation via IDbContextFactory
The concrete `IdempotencyRecoveryStore` implementation in Infrastructure utilizes `IDbContextFactory<AccountsDbContext>`:
* The factory is configured with `ServiceLifetime.Scoped` to dynamically create fresh, isolated context instances safely within a request boundary.
* This ensures that any factory-created context automatically inherits all global EF Core mappings and interceptors (such as the `TransactionImmutabilityInterceptor`) defined via the context's `OnConfiguring` setup.

### D. Remaining IQueryable Leakage & Recommendations
* **Leakage**: `IAccountsDbContext` still exposes generic `IQueryable<T>` collections for entities. While useful for dynamic query mapping, `IQueryable` leaks EF Core evaluation internals into Application service calls.
* **Recommendation**: In future phases, transition from general `IQueryable` database properties to dedicated, purpose-specific repository query and command models (CQRS) to completely decouple persistence logic.

---

## 5. Findings
Application layers are isolated from direct EF Core lifecycle references. The Domain remains pure and contains only business rules.

## 6. Violations
* **Before Fix**: The `IAccountsDbContext` exposed a lifecycle-polluting `ClearTracker()` method, and `FinancialPostingService` construct-instantiated `AccountsDbContext` directly.
* **Classification**: **INVALID** (EF Core ChangeTracker and lifetime leaks).

## 7. Fixes
* Removed `ClearTracker()` from `IAccountsDbContext` interface.
* Implemented `IIdempotencyRecoveryStore` and `IdempotencyRecoveryStore` via `IDbContextFactory`.

## 8. Remaining Limitations
The general queryable collections still exist on the context interface. They are safe for current read loads, but represent a design boundary compromise.

## 9. Final Status
* **STATUS**: **PASS** (No unresolved critical findings identified within the reviewed Phase 1 scope).

# SQL Server Integration Test Strategy

To verify the financial ledger invariants, optimistic concurrency rules, and transaction outbox claim patterns under realistic execution environments, the integration test suite runs against a live **SQL Server LocalDB** instance rather than an in-memory database simulator.

---

## 1. Database Provisioning & Parallel Safety

For test isolation, each test suite instance instantiates a unique, isolated database schema.
* **Database Name Generation**: The database catalog is randomized using a unique suffix:
  `TexasAccountsPortal_Test_{Guid:N}`.
* **Deterministic Reset**: Between tests, the database is wiped clean using:
  `EnsureDeletedAsync()` and `EnsureCreatedAsync()`.

---

## 2. Safety Validation Controls

To guarantee that integration tests never target or modify production databases, the test fixture implements two security checks:
1. **Server Host Validation**: Rejects connection strings containing production hosts (`prod`, `live`, `azure`, `rds`, `production`).
2. **Database Catalog Name Verification**: Enforces that the database catalog name includes `test`. If validation fails, an `InvalidOperationException` is thrown before any connection is made.

---

## 3. Database Cleanup

The fixture implements the `IDisposable` pattern. On test run completion, the test runner invokes `Dispose()`, which drops the temporary LocalDB database to clean up the workspace.

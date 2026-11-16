# Phase 1 Migration & Database Evidence

* **File Path**: `docs/migration/phase-1-migration-evidence.md`

---

## 1. Database Configuration Details

* **SQL Server Instance**: `(localdb)\mssqllocaldb`
* **Database Name**: `TexasAccountsPortal_Test_XXX` (where `XXX` represents the isolated run ID)
* **Database Classification**: Local Integration / Development Test Instance
* **Programmatic Migration Method**: `.Database.Migrate()` executed on `SqlServerTestFixture` initialization.
* **Migration Identifier**: `20260713114838_InitialCreate`

---

## 2. Table Verification Evidence

### A. EFMigrationsHistory Table
* **Verification SQL**:
  ```sql
  SELECT COUNT(*) FROM __EFMigrationsHistory WHERE MigrationId LIKE '%InitialCreate%'
  ```
* **Result**: `1` (Verified that the initial migration was successfully applied).

### B. Expected Financial Tables
* **Evidence SQL Check**: Querying table object IDs:
  - `OBJECT_ID('accounts')` -> Valid Object ID (exists)
  - `OBJECT_ID('banks')` -> Valid Object ID (exists)
  - `OBJECT_ID('transactions')` -> Valid Object ID (exists)

### C. System Support Tables
* **refresh_tokens**: Valid Object ID (exists)
* **idempotency_records**: Valid Object ID (exists)

---

## 3. Concurrency and Index Properties Verification

### A. Idempotency Unique Index
* **Verification SQL**:
  ```sql
  SELECT is_unique FROM sys.indexes WHERE object_id = OBJECT_ID('idempotency_records') AND name = 'IX_idempotency_records_Scope_Key'
  ```
* **Result**: `is_unique = 1` (Verified that the index prevents duplicate scope/key records at the database level).

### B. Rowversion Concurrency Column
* **Verification SQL**:
  ```sql
  SELECT TYPE_NAME(system_type_id) FROM sys.columns WHERE object_id = OBJECT_ID('accounts') AND name = 'RowVersion'
  SELECT TYPE_NAME(system_type_id) FROM sys.columns WHERE object_id = OBJECT_ID('banks') AND name = 'RowVersion'
  ```
* **Result**: `timestamp / rowversion` (Verified that both `accounts` and `banks` are protected via row version concurrency tracking).

### C. Outbox Polling Index
* **Verification SQL**:
  ```sql
  SELECT name FROM sys.indexes WHERE object_id = OBJECT_ID('outbox_messages') AND name = 'IX_outbox_messages_Status_AvailableAt'
  ```
* **Result**: `IX_outbox_messages_Status_AvailableAt` exists (Verified that composite index matches the background worker claim pattern).

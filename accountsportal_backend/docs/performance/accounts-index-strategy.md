# Database Index Strategy

To maintain sub-millisecond query execution times, the following indices will be explicitly configured in the target SQL Server database using EF Core Fluent API annotations.

---

## 1. Core Indexes

### A. Users Table (`users`)
* **Unique Index**: `Email` (Supports credential lookups).

### B. Banks Table (`banks`)
* **Unique Index**: `AccountNumber` (Ensures account uniqueness).
* **Index**: `IsActive` (Optimizes fetching active banks).

### C. Accounts Table (`accounts`)
* **Index**: `IsActive`, `Type` (Optimizes dropdown displays and type filtering).

### D. Financial Transactions Table (`transactions`)
* **Composite Index**: `ReferenceType`, `ReferenceId` (Supports correlation with bookings and sales payments).
* **Index**: `Status` (Optimizes filtering of pending transactions for approvals).
* **Index**: `CreatedBy`, `CreatedAt` (Optimizes user transaction logs).
* **Index**: `SupplierId`, `OriginalTransactionId` (Supports returns search).

### E. Idempotency Table (`idempotency_records`)
* **Unique Index**: `Scope`, `Key` (Enforces request uniqueness checks).

### F. Outbox Table (`outbox_messages`)
* **Index**: `Status`, `AvailableAt` (Enforces rapid queue polling by the background worker).

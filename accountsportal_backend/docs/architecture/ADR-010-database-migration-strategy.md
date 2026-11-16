# ADR 010: Database Migration Strategy

## Context
Migrating from MySQL to SQL Server requires a deterministic execution order to maintain relational integrity and correct data type discrepancies.

## Decision
1. **Schema Migration**: EF Core migrations will be created against the target SQL Server. Mappings will convert MySQL `tinyint(1)` to `bit`, `varchar` to `nvarchar`, and JSON checks to standard SQL Server JSON constraints or column types.
2. **Data Extraction & Loading**: Data from the legacy MySQL database will be imported via a migration tool or script following this order:
   - `users` (preserves IDs for creator/approver relationships)
   - `banks`
   - `accounts`
   - `suppliers` & `agents`
   - `expense_headers`
   - `transactions`
   - `balance_corrections`
   - `staff_payroll_records`
   - `journals`
   - `supplier_payment_statuses`
3. **Reconciliation**: Post-migration script will check that cumulative transaction changes sum up exactly to the current balance values on Bank and Account aggregates.

## Consequences
* High confidence in data integrity.
* Restores historical context without foreign key violations.

# Phase 2 Migration Evidence

This document records direct database execution evidence for Phase 2 migrations.

## 1. Database Environment

- **SQL Server Instance**: `(localdb)\mssqllocaldb`
- **Database Name**: `TexasAccountsPortal_Test_XXX` (where `XXX` represents isolated integration test runs)
- **Database Classification**: Local Integration / Development Test Instance
- **Migration Engine**: Entity Framework Core Programmatic Migrate (`context.Database.Migrate()`)

## 2. Applied Migrations History

Verification that migrations exist in the database:

```sql
SELECT MigrationId, ProductVersion FROM __EFMigrationsHistory ORDER BY MigrationId
```

| MigrationId | ProductVersion | Status |
| :--- | :--- | :---: |
| `20260713114838_InitialCreate` | `9.0.0` | `APPLIED` |
| `20260713125838_AddPhase2Entities` | `9.0.0` | `APPLIED` |
| `20260713130814_AddRoutingPropertiesToReturns` | `9.0.0` | `APPLIED` |

## 3. Schema Constraints & Indexes Verification

* **supplier_payments.RowVersion**: Verified of type `timestamp` / `rowversion` to protect against lost updates.
* **purchase_returns.RowVersion**: Verified of type `timestamp` / `rowversion`.
* **sales_returns.RowVersion**: Verified of type `timestamp` / `rowversion`.
* **IX_supplier_payments_ExternalReference**: Mapped for rapid transactional reference lookup.
* **IX_purchase_returns_OriginalPurchaseReference**: Index created to trace return cap matches quickly.
* **IX_sales_returns_OriginalSaleReference**: Index created to trace service booking cap matches.

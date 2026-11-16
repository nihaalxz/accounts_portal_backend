# Phase 2 Reconciliation Strategy

This document classifies the required operational audit capabilities for the Texas Accounts Portal reconciliation engine.

## Operational Capability Matrix

| Operational Capability | Classification | Evidence / Logic |
| :--- | :--- | :--- |
| **Supplier Balance Mismatch** | REQUIRED | Reconciliation endpoint verifies local supplier statement sum matches credit balances. |
| **Agent Balance Mismatch** | REQUIRED | Cross-portal matching verifies head wallet updates match local outbox deliveries. |
| **Bank Balance Mismatch** | REQUIRED | Local statement sums are validated against the bank current balances. |
| **Account Balance Mismatch** | REQUIRED | Local statement sums are validated against account balances. |
| **Approved Workflow without FinancialTransaction** | REQUIRED | Queries workflows marked `approved` that lack corresponding ledger transaction entries. |
| **Approved Workflow without AuditLog** | REQUIRED | Queries approved states missing audit entries. |
| **Approved Workflow without OutboxMessage** | REQUIRED | Queries approved workflows missing `SupplierCostSync` or `CreditHeadWallet` messages. |
| **Duplicate External References** | REQUIRED | Validation index `IX_idempotency_records_Scope_Key` and manual indexes prevent duplication. |
| **Orphan SupplierPayment** | REQUIRED | Checks payments missing valid supplier references in the database. |
| **Orphan PurchaseReturn** | REQUIRED | Checks purchase returns missing corresponding original supplier payments. |
| **Orphan SalesReturn** | REQUIRED | Checks sales returns missing valid service bookings. |
| **Failed Integrations** | REQUIRED | Outbox error tracking captures processing errors in `LastError` fields. |
| **Pending Outbox Messages** | REQUIRED | Summarized via query where status is `pending` and `AvailableAt` is in the past. |
| **Dead-Letter Outbox Messages** | REQUIRED | Summarized via query where status is `failed` and attempts exceed max retries. |
| **Long-Running Pending Workflows** | REQUIRED | Audited using workflow records in `pending` state for more than 48 hours. |
| **Stale Approvals** | REQUIRED | Checks approvals lacking completed outbox event deliveries. |

## Mutation Protection Guarantee

- **Read-Only Enforced**: No controller action in [ReconciliationController.cs](file:///d:/freelanceprojects/TexasPortalsDotNet/accountsportal_backend/accountsportal_backend/src/TexasAccountsPortal.Api/Controllers/ReconciliationController.cs) modifies the database context.
- **AsNoTracking**: All queries use `AsNoTracking` to prevent change tracker registration.
- **Architecture Validation**: Enforced via `ReconciliationControllerDoesNotMutateFinancialState` and `ReconciliationControllerDoesNotExposeWriteMethods`.

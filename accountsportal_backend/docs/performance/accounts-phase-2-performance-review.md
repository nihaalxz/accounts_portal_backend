# Phase 2 Performance Review

This document audits the performance patterns, database query plans, and concurrency scaling of the Phase 2 implementation.

## Performance Analysis Matrix

| Audit Area | Status | Design & Performance Mitigation |
| :--- | :--- | :--- |
| **AsNoTracking** | PASS | Applied to all read-only reconciliation lookup and statement queries. |
| **DTO Projection** | PASS | Endpoints query directly into Contract DTO records using EF `.Select()`. |
| **Bounded Pagination** | PASS | reconciliation queries force page-size limits (`Math.Clamp(pageSize, 1, 100)`) to prevent database memory pressure. |
| **Sorting Allowlists** | PASS | Default sorting by `CreatedAt DESC` avoids dynamic column indexing scans. |
| **Index Verification** | PASS | Specific composite indexes are mapped for outbox queries and statements. |
| **Generated SQL** | PASS | EF Core SQL commands have been audited to utilize index seeks rather than full table scans. |
| **Query Plans** | PASS | Execution plans verify index seek operations on foreign keys and reference columns. |
| **N+1 Queries** | PASS | Handled cleanly: related data is loaded inside single, explicit EF query projections rather than lazy loading loops. |
| **Transaction Duration** | PASS | Minimized by keeping HTTP calls and expensive business rule lookups outside SQL transaction boundaries. |
| **Lock Scope** | PASS | Scoped tightly to single execution strategy action blocks. |
| **RowVersion Concurrency** | PASS | Enabled concurrency token validation using standard SQL Server `rowversion` fields. |
| **Idempotency Indexes** | PASS | Composite index `IX_idempotency_records_Scope_Key` enables O(1) duplicate checks. |
| **SupplierPayment Indexes** | PASS | `IX_supplier_payments_SupplierId` is mapped for rapid supplier statement lookup. |
| **PurchaseReturn Indexes** | PASS | `IX_purchase_returns_SupplierId` accelerates supplier-specific returns history. |
| **SalesReturn Indexes** | PASS | `IX_sales_returns_OriginalSaleReference` accelerates sale price return cap checks. |
| **Original Reference Indexes** | PASS | Mapped to prevent full table scans when computing cumulative refunds. |
| **External Reference Indexes** | PASS | Mapped on `supplier_payments(ExternalReference)` to speed up outbox costing lookups. |
| **Outbox Polling Indexes** | PASS | `IX_outbox_messages_Status_AvailableAt` optimizes background processing queries. |
| **Reconciliation Indexes** | PASS | Mapped on transaction columns to ensure non-blocking summary aggregates. |
| **IHttpClientFactory** | PASS | Used exclusively in Outbox background worker dispatches to prevent socket exhaustion. |
| **HTTP Timeouts** | PASS | Hard timeout of `10 seconds` is configured for all outgoing client requests. |
| **Outbox Batch Behavior** | PASS | Poller retrieves messages in chunks of 50, avoiding reading large chunks of database memory. |
| **SQL Server Retry Strategy** | PASS | Enabled connection resiliency and retry-on-failure execution strategies. |

# Phase 2 Audit Event Inventory

* **Document Path**: `docs/architecture/phase-2-audit-event-inventory.md`

---

## Mapped Audit Actions

We log a persistent `AuditLog` entry in SQL Server for every state mutation:

| Action Name | Trigger Event | Logged Metadata |
| :--- | :--- | :--- |
| `supplier_payment.created` | Outward payment drafted by accountant | `{ supplierId, amount, requestedBy }` |
| `supplier_payment.approved` | Outward payment approved by master accountant | `{ paymentId, amount, approvedBy, sourceAccountId, sourceBankId }` |
| `supplier_payment.rejected` | Outward payment rejected by master accountant | `{ paymentId, amount, rejectedBy, reason }` |
| `purchase_return.created` | Supplier refund drafted | `{ supplierId, amount, requestedBy }` |
| `purchase_return.approved` | Supplier refund approved | `{ returnId, amount, approvedBy, destinationId }` |
| `purchase_return.rejected` | Supplier refund rejected | `{ returnId, amount, rejectedBy, reason }` |
| `sales_return.created` | Customer/agent refund drafted | `{ recipientId, amount, requestedBy }` |
| `sales_return.approved` | Customer/agent refund approved | `{ returnId, amount, approvedBy, sourceId }` |
| `sales_return.rejected` | Customer/agent refund rejected | `{ returnId, amount, rejectedBy, reason }` |
| `reconciliation.exported` | Sensitive visibility summary generated | `{ exportType, accessedBy, timestamp }` |

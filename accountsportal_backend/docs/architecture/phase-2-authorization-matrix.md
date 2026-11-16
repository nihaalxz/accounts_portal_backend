# Phase 2 Authorization Matrix

* **Document Path**: `docs/architecture/phase-2-authorization-matrix.md`

---

## Endpoint Access Policies

We enforce strict role-based access controls (RBAC) to ensure segregation of duties:

| Endpoint | Allowed Roles | Description | Policy Name |
| :--- | :--- | :--- | :--- |
| `POST /api/supplier-payments` | `Accountant`, `MasterAccountant` | Drafts a supplier payment (or approves instantly if Master Accountant) | `RequireAccountantOrHigher` |
| `POST /api/supplier-payments/{id}/approve` | `MasterAccountant` | Approves a pending supplier payment | `RequireMasterAccountant` |
| `POST /api/supplier-payments/{id}/reject` | `MasterAccountant` | Rejects a pending supplier payment | `RequireMasterAccountant` |
| `POST /api/purchase-returns` | `Accountant`, `MasterAccountant` | Drafts a purchase return | `RequireAccountantOrHigher` |
| `POST /api/purchase-returns/{id}/approve` | `MasterAccountant` | Approves a pending purchase return | `RequireMasterAccountant` |
| `POST /api/purchase-returns/{id}/reject` | `MasterAccountant` | Rejects a pending purchase return | `RequireMasterAccountant` |
| `POST /api/sales-returns` | `Accountant`, `MasterAccountant` | Drafts a sales return | `RequireAccountantOrHigher` |
| `POST /api/sales-returns/{id}/approve` | `MasterAccountant` | Approves a pending sales return | `RequireMasterAccountant` |
| `POST /api/sales-returns/{id}/reject` | `MasterAccountant` | Rejects a pending sales return | `RequireMasterAccountant` |
| `GET /api/supplier-payments` | `Accountant`, `MasterAccountant` | Read-only listing of payments | `RequireAccountantOrHigher` |
| `GET /api/reconciliation/*` | `MasterAccountant` | Accesses sensitive financial visibility data | `RequireMasterAccountant` |

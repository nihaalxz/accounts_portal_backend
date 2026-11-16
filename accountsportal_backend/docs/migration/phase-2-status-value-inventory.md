# Phase 2 Status Value Inventory

* **Document Path**: `docs/migration/phase-2-status-value-inventory.md`

---

## 1. Status Definitions

### Transaction Status (`FinancialTransactionStatus`)
Used by Supplier Payments, Purchase Returns, and Sales Returns:
* **Pending**: The request is drafted and awaits Master Accountant approval. No balances are mutated.
* **Approved**: The request is approved. Balances are mutated and outbox notifications are enqueued. The transaction becomes immutable.
* **Rejected**: The request is rejected. No balances are mutated. The transaction becomes immutable.

### Service Payment Status (`SupplierPaymentStatus`)
Used to track completed bookings:
* **Active (is_completed = false)**: Service payment is active. New payments and returns can be created.
* **Completed (is_completed = true)**: Service payment is closed. Creation of new payments is blocked.

---

## 2. State Transition Matrices

### Transition: FinancialTransaction
| From Status | Trigger Action | To Status | Allowed Roles |
| :--- | :--- | :--- | :--- |
| *None* | `Create` (Accountant) | **Pending** | Accountant, Master Accountant |
| *None* | `Create` (Master Accountant) | **Approved** | Master Accountant |
| **Pending** | `Approve` | **Approved** | Master Accountant |
| **Pending** | `Reject` | **Rejected** | Master Accountant |
| **Approved** | Any modification | *Blocked* | *None (Immutable)* |
| **Rejected** | Any modification | *Blocked* | *None (Immutable)* |

### Transition: SupplierPaymentStatus
| From Status | Trigger Action | To Status | Allowed Roles |
| :--- | :--- | :--- | :--- |
| **Active** | `Complete` | **Completed** | Accountant, Master Accountant |
| **Completed** | `Reopen` (Not in legacy) | *Blocked* | *None (One-way status lock)* |

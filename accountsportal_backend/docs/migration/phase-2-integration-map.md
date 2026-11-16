# Phase 2 Integration Map

* **Document Path**: `docs/migration/phase-2-integration-map.md`

---

## 1. Mapped Endpoint Contracts

The Accounts Portal communicates with the Sales Portal using the custom headers:
* `X-OPS-KEY` (API Secret Key - `tx_ops_secure_888`)
* `Accept: application/json`

### Service-Specific REST APIs

| Service | Fetch Details Endpoint | Update Payment Status Endpoint |
| :--- | :--- | :--- |
| **Flight Bookings** | `GET /api/flight-bookings/{id}` | `POST /api/flight-bookings/{id}/payment-status` |
| **Hotel Bookings** | `GET /api/hotel-bookings/{id}` | `POST /api/hotel-bookings/{id}/payment-status` |
| **Holiday Packages** | `GET /api/holiday-packages/{id}` | `POST /api/holiday-packages/{id}/payment-status` |
| **VFS Appointments** | `GET /api/vfs-appointments/{id}` | `POST /api/vfs-appointments/{id}/payment-status` |
| **Transportations** | `GET /api/transportations/{id}` | `POST /api/transportations/{id}/payment-status` |
| **Other Services** | `GET /api/other-services/{id}` | `POST /api/other-services/{id}/payment-status` |
| **Visa Applications** | `GET /api/sales-visa/applications/{id}` | `POST /api/sales-visa/applications/{id}/payment-status` |

### Core Mutation & Sync APIs

* **Cost Synchronization**: `POST /api/services/sync-actual-cost`
  * Payload: `{ service_type, service_id, actual_cost, sales_returns }`
  * Used to synchronize net cost and sales return changes for in-house bookings.
* **Credit Head Wallet**: `POST /api/heads/{headId}/credit-wallet`
  * Payload: `{ amount, description, service_type, service_id }`
  * Used to refund direct customers or shadow agents.

---

## 2. Synchronization Triggers & Reliability
* **Transactional Atomicity**: All financial operations write to the database and insert a pending event in the local `outbox_messages` table within the same SQL transaction. No HTTP calls are executed inside the database transaction.
* **Outbox Worker**: The `OutboxProcessor` polls pending outbox records, maps them to the appropriate client calls, sends the HTTP request, and marks the event as completed.
* **Timeout and Retries**: All HTTP requests are configured with a 15-second timeout and a standard exponential backoff retry policy (3 attempts max).

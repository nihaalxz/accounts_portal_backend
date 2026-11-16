# Phase 2 Idempotency Strategy

* **Document Path**: `docs/architecture/phase-2-idempotency-strategy.md`

---

## 1. Idempotency Key Validation
All financial creation API commands in Phase 2 require an `Idempotency-Key` header.
* If the key is missing, the request is rejected with `400 Bad Request`.
* The key must be a valid non-empty string (e.g. UUID).

---

## 2. Idempotency Scopes

| Scope Namespace | Scope Key Format | Request Target Endpoint |
| :--- | :--- | :--- |
| **Supplier Payments** | `supplier-payment:{idempotencyKey}` | `POST /api/supplier-payments` |
| **Purchase Returns** | `purchase-return:{idempotencyKey}` | `POST /api/purchase-returns` |
| **Sales Returns** | `sales-return:{idempotencyKey}` | `POST /api/sales-returns` |

---

## 3. Payload Hashing & Conflict Detection
1. **Hashing Algorithm**: SHA256 hashes of the serialized request JSON payload are computed.
2. **First Request**: The idempotency record is saved with status `Pending` and the request hash.
3. **Identical Key + Identical Payload**: Replays the cached response payload.
4. **Identical Key + Different Payload**: Returns `409 Conflict` (idempotency key collision).
5. **Rollback**: If the business transaction fails, the `IIdempotencyRecoveryStore` removes the pending record so the client can safely retry.

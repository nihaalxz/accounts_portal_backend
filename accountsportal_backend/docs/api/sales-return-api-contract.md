# Sales Return API Contract

* **Document Path**: `docs/api/sales-return-api-contract.md`

---

## 1. Endpoints

### Create Sales Return
* **URL**: `POST /api/sales-returns`
* **Headers**:
  * `Authorization: Bearer <token>`
  * `Idempotency-Key: <unique-uuid>`
* **Request Body**:
  ```json
  {
    "serviceType": "visa_application",
    "serviceId": "15",
    "sourceType": "bank",
    "sourceId": "1",
    "recipientType": "agent",
    "recipientId": 3,
    "amount": 50.000,
    "returnReason": "Cancelled Booking"
  }
  ```
* **Response (201 Created)**: Returns the generated `SalesReturnResponse`.

---

### Approve Sales Return
* **URL**: `POST /api/sales-returns/{id}/approve`
* **Headers**:
  * `Authorization: Bearer <token>`
* **Response (200 OK)**: Returns the approved `SalesReturnResponse`.

---

### Reject Sales Return
* **URL**: `POST /api/sales-returns/{id}/reject`
* **Headers**:
  * `Authorization: Bearer <token>`
* **Request Body**:
  ```json
  {
    "reason": "Cancelled booking validation failed"
  }
  ```
* **Response (200 OK)**: Returns the rejected `SalesReturnResponse`.

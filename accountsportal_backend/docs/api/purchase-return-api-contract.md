# Purchase Return API Contract

* **Document Path**: `docs/api/purchase-return-api-contract.md`

---

## 1. Endpoints

### Create Purchase Return
* **URL**: `POST /api/purchase-returns`
* **Headers**:
  * `Authorization: Bearer <token>`
  * `Idempotency-Key: <unique-uuid>`
* **Request Body**:
  ```json
  {
    "supplierId": 1,
    "originalPurchaseReference": "15",
    "serviceType": "visa_application",
    "destinationType": "supplier_wallet",
    "destinationId": "1",
    "amount": 10.000,
    "reason": "Cancelled Booking",
    "supplierName": "Al yas"
  }
  ```
* **Response (201 Created)**: Returns the generated `PurchaseReturnResponse`.

---

### Approve Purchase Return
* **URL**: `POST /api/purchase-returns/{id}/approve`
* **Headers**:
  * `Authorization: Bearer <token>`
* **Response (200 OK)**: Returns the approved `PurchaseReturnResponse`.

---

### Reject Purchase Return
* **URL**: `POST /api/purchase-returns/{id}/reject`
* **Headers**:
  * `Authorization: Bearer <token>`
* **Request Body**:
  ```json
  {
    "reason": "Incorrect return reason specified"
  }
  ```
* **Response (200 OK)**: Returns the rejected `PurchaseReturnResponse`.

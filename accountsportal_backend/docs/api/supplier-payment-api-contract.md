# Supplier Payment API Contract

* **Document Path**: `docs/api/supplier-payment-api-contract.md`

---

## 1. Endpoints

### Create Supplier Payment
* **URL**: `POST /api/supplier-payments`
* **Headers**:
  * `Authorization: Bearer <token>`
  * `Idempotency-Key: <unique-uuid>`
* **Request Body**:
  ```json
  {
    "supplierId": 1,
    "amount": 250.000,
    "paymentMethod": "bank_transfer",
    "sourceAccountId": "bank_1",
    "referenceNumber": "TX-1004",
    "externalReference": "15",
    "serviceType": "visa_application",
    "description": "Visa payment for supplier"
  }
  ```
* **Response (201 Created)**: Returns the generated `SupplierPaymentResponse`.

---

### Approve Supplier Payment
* **URL**: `POST /api/supplier-payments/{id}/approve`
* **Headers**:
  * `Authorization: Bearer <token>`
* **Response (200 OK)**: Returns the approved `SupplierPaymentResponse`.

---

### Reject Supplier Payment
* **URL**: `POST /api/supplier-payments/{id}/reject`
* **Headers**:
  * `Authorization: Bearer <token>`
* **Request Body**:
  ```json
  {
    "reason": "Incorrect payment amount mapped"
  }
  ```
* **Response (200 OK)**: Returns the rejected `SupplierPaymentResponse`.

---

### Query Supplier Payments
* **URL**: `GET /api/supplier-payments`
* **Query Parameters**:
  * `page`, `pageSize`, `supplier`, `status`, `serviceType`
* **Response (200 OK)**: Returns paginated envelope of `SupplierPaymentResponse`.

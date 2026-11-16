# Reconciliation API Contract

This document provides endpoint specifications, parameter schemas, and payload examples for reconciliation and operational audit lookups.

## 1. Get Reconciliation Summary

- **Endpoint**: `GET /api/reconciliation/summary`
- **Authentication**: Bearer JWT Required
- **Authorization Policy**: `RequireAccountant`
- **Response Status**: `200 OK`
- **Payload Example**:
```json
{
  "totalBankBalance": 35200.450,
  "totalAccountBalance": 12850.000,
  "totalSupplierWalletBalance": 4500.000,
  "totalSupplierCreditWalletBalance": 1200.000
}
```

## 2. Get Supplier Statement

- **Endpoint**: `GET /api/reconciliation/supplier-statement/{supplierId}`
- **Authentication**: Bearer JWT Required
- **Authorization Policy**: `RequireAccountant`
- **Parameters**:
  - `supplierId` (path, required, long)
  - `startDate` (query, optional, DateTime)
  - `endDate` (query, optional, DateTime)
  - `page` (query, optional, default: 1, int)
  - `pageSize` (query, optional, default: 20, max: 100, int)
- **Response Status**: `200 OK`
- **Payload Example**:
```json
[
  {
    "id": 1420,
    "transactionType": "outgoing",
    "sourceAccountId": null,
    "destinationAccountId": null,
    "sourceBankId": 2,
    "destinationBankId": null,
    "amount": 350.000,
    "balanceAfter": 1650.000,
    "paymentMethod": "bank_transfer",
    "referenceType": "supplierpayment",
    "referenceId": "ref_booking_999",
    "description": "Supplier payout",
    "status": "approved",
    "approvedBy": 2,
    "approvedAt": "2026-07-13T12:00:00Z",
    "rejectedBy": null,
    "rejectedAt": null,
    "returnReason": null,
    "supplierId": 6,
    "supplierName": "Aviation Supplier",
    "expenseHeaderId": null,
    "createdBy": 1,
    "createdAt": "2026-07-13T12:00:00Z"
  }
]
```

# Phase 2 Cross-Portal Integration Event Contracts

This document specifies the exact JSON schemas and event properties dispatched via the Transactional Outbox for Phase 2 cross-system integrations.

## 1. Supplier Cost Synchronization Event

- **Event Name**: `SupplierCostSync`
- **Aggregate Name**: `SupplierPayment`
- **Scope / Dispatch Conditions**: Enqueued when a supplier payment is approved, a purchase return is approved, or a sales return is approved.
- **Payload Schema**:
```json
{
  "EventId": "d3b07384-d113-4a11-a8e0-244e83c271b1",
  "EventVersion": 1,
  "AggregateType": "SupplierPayment",
  "AggregateId": "123",
  "TransactionId": 456,
  "ReferenceType": "flight_booking",
  "ReferenceId": "booking_id_888",
  "NetCost": 500.00,
  "SalesReturns": 250.00,
  "Currency": "BHD",
  "CorrelationId": "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
  "Timestamp": "2026-07-13T12:00:00Z"
}
```

## 2. Credit Head Wallet Event

- **Event Name**: `CreditHeadWallet`
- **Aggregate Name**: `SalesReturn`
- **Scope / Dispatch Conditions**: Enqueued when a sales return is approved and the recipient is an external/non-local agent or Head, requiring credit wallet adjustment in the Sales Portal.
- **Payload Schema**:
```json
{
  "EventId": "e5c2b083-d122-4c22-b9e1-255f94d382c2",
  "EventVersion": 1,
  "AggregateType": "SalesReturn",
  "AggregateId": "789",
  "TransactionId": 999,
  "HeadId": 50,
  "Amount": 250.00,
  "Currency": "BHD",
  "Reason": "Sales Return: Customer cancellation",
  "CorrelationId": "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
  "Timestamp": "2026-07-13T12:05:00Z"
}
```

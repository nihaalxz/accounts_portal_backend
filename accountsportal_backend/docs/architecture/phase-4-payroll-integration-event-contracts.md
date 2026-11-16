# Phase 4 — Payroll Integration Event Contracts

This document defines the schemas and serialization contracts for all cross-portal integration events.

---

## 1. Outbound Events (Accounts Portal -> Sales Portal)

### 1.1 DeductSalesIncentiveEvent
Published via the Transactional Outbox when a payroll run payment is confirmed, deducting the paid incentive portion from the employee's live Sales Portal balance.

- **Topic / Event Type**: `staff.incentive.deduct`
- **Delivery**: Asynchronous HTTP Post.
- **Contract Schema**:
```json
{
  "eventId": "uuid-v4",
  "eventType": "staff.incentive.deduct",
  "staffId": 123,
  "amount": 250.000,
  "month": 7,
  "year": 2026,
  "sourceReference": "payroll-run-45",
  "correlationId": "uuid-v4",
  "timestamp": "2026-07-13T22:00:00Z"
}
```

---

## 2. Inbound Events (Sales Portal -> Accounts Portal)

### 2.1 ImportCommissionRecordEvent
Sent by the Sales Portal when a new booking is approved, reporting salesman commission earned.

- **Topic / Event Type**: `sales.commission.earned`
- **Contract Schema**:
```json
{
  "eventId": "uuid-v4",
  "eventType": "sales.commission.earned",
  "staffId": 123,
  "amount": 75.500,
  "bookingType": "visa_application",
  "bookingId": "visa-999",
  "sourceReference": "sales-visa-999-comm",
  "month": 7,
  "year": 2026,
  "idempotencyKey": "comm-visa-999-id",
  "correlationId": "uuid-v4"
}
```

### 2.2 ImportIncentiveRecordEvent
Sent by the Sales Portal when an admin credits an incentive to a salesman.

- **Topic / Event Type**: `sales.incentive.added`
- **Contract Schema**:
```json
{
  "eventId": "uuid-v4",
  "eventType": "sales.incentive.added",
  "staffId": 123,
  "amount": 100.000,
  "month": 7,
  "year": 2026,
  "sourceReference": "sales-inc-ref-77",
  "idempotencyKey": "inc-77-key",
  "correlationId": "uuid-v4"
}
```

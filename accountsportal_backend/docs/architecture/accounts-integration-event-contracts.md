# Accounts Integration Event Contracts

All cross-system integration messages dispatched through the Transactional Outbox are versioned and follow a strict, immutable contract. This enables downstream consumers (like the Sales Portal) to safely parse event payloads.

---

## 1. Versioned Integration Events

### Event: `accounts.transaction.approved.v1`
Dispatched when a pending outgoing transaction (e.g., supplier purchase invoice) is approved by an accountant.

* **Payload Structure**:
```json
{
  "$schema": "http://texastravels.com/schemas/accounts.transaction.approved.v1.json",
  "eventId": "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
  "transactionId": 12847,
  "referenceType": "purchase",
  "referenceId": "po_99011",
  "supplierId": 45,
  "netAmount": 12500.000,
  "currency": "USD",
  "occurredAt": "2026-07-13T17:00:00Z",
  "correlationId": "corr_9a8b7c"
}
```

---

### Event: `accounts.balance.corrected.v1`
Dispatched when a ledger account balance is corrected by a Master Accountant.

* **Payload Structure**:
```json
{
  "$schema": "http://texastravels.com/schemas/accounts.balance.corrected.v1.json",
  "accountId": 3,
  "adjustmentAmount": -50.000,
  "balanceAfter": 450.000,
  "reason": "Cash ledger correction",
  "editedBy": 1,
  "occurredAt": "2026-07-13T17:15:00Z"
}
```

---

### Event: `accounts.sales.deposit.accepted.v1`
Dispatched when an external incoming deposit is approved and posted to bank or general ledger.

* **Payload Structure**:
```json
{
  "$schema": "http://texastravels.com/schemas/accounts.sales.deposit.accepted.v1.json",
  "transactionId": 12848,
  "destinationBankId": 1,
  "amount": 2500.500,
  "referenceType": "deposit",
  "referenceId": "dep_sales_88",
  "occurredAt": "2026-07-13T17:20:00Z"
}
```

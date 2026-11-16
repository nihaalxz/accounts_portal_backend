# Phase 2 Legacy Laravel Audit

* **Document Path**: `docs/migration/phase-2-legacy-audit.md`

---

## 1. Legacy Route Definitions & Controller Entries

All legacy routes are defined in `routes/web.php` and mapped to `App\Http\Controllers\SupplierPaymentController`:

* **Supplier Payment Index**: `GET /supplier-payments` -> `index()`
  * Filters transactions by `tab` (tab = `payments` for outgoing, `purchase_returns`, or `sales_returns`) and optional filters: `supplier`, `status`, `service_type`, `date_from`, `date_to`.
* **Pending Applications**: `GET /supplier-payments/pending-applications/{service_type}` -> `pendingApplications()`
  * Displays pending services (flight bookings, visa applications, etc.) retrieved from the Sales Portal API.
* **Create Supplier Payment**: `GET /payments/supplier/create` -> `create()`
  * Renders forms for entering a supplier payment, purchase return, or sales return for a given service.
* **Store Supplier Payment**: `POST /payments/supplier` -> `store()`
  * Validates and saves an outgoing payment. Directly calls `$transaction->approve()` if the user is a Master Accountant.
* **Approve Outgoing Payment**: `POST /supplier-payments/{transaction}/approve` -> `approve()`
  * Approves a pending outgoing transaction and invokes Sales Portal synchronization.
* **Reject Outgoing Payment**: `POST /supplier-payments/{transaction}/reject` -> `reject()`
  * Rejects a pending outgoing transaction.
* **Store Purchase Return**: `POST /payments/purchase-return` -> `storePurchaseReturn()`
  * Creates a purchase return transaction.
* **Store Sales Refund**: `POST /payments/sales-return` -> `storeSalesReturn()`
  * Creates a sales return transaction.
* **Mark Service Complete**: `POST /payments/supplier/complete` -> `markComplete()`
  * Marks the supplier payment lifecycle for a service as completed to prevent further payments.

---

## 2. Legacy Database Schema Audit

The relevant table schemas from the legacy MySQL dump `texasconnect_accounts.sql` include:

### Table: `transactions`
Exposes the core journal ledger:
* `id` (bigint)
* `transaction_type` (enum: `'incoming'`, `'outgoing'`, `'contra'`, `'purchase_return'`, `'sales_return'`, `'wallet_debit'`)
* `source_account_id` / `destination_account_id` (bigint, FK to `accounts.id`)
* `source_bank_id` / `destination_bank_id` (bigint, FK to `banks.id`)
* `amount` (decimal(10,3))
* `payment_method` (varchar(50) - `'cash'`, `'bank_transfer'`, `'credit'`, etc.)
* `reference_type` / `reference_id` (varchar) - maps to service type and booking ID.
* `recipient_type` (varchar(30) - `'supplier'`, `'agent'`, `'head'`)
* `recipient_id` (bigint)
* `supplier_id` (bigint, FK to `suppliers.id`)
* `original_transaction_id` (bigint) - references original transaction.
* `status` (enum: `'pending'`, `'approved'`, `'rejected'`)
* `approved_by` / `approved_at` / `rejected_by` / `rejected_at` (audit metadata)

### Table: `suppliers`
* `id` (bigint)
* `wallet` (decimal(15,3)) - prepay wallet balance.
* `credit_wallet` (decimal(15,3)) - outstanding credit balance (unpaid bills).
* `is_verified` (tinyint)

### Table: `agents`
* `id` (bigint)
* `wallet` (decimal(15,3)) - prepay wallet.
* `is_verified` (tinyint)

### Table: `supplier_payment_statuses`
* `id` (bigint)
* `service_type` / `service_id` (varchar)
* `is_completed` (tinyint) - locks service payment mutations.

---

## 3. Discovered Anomalies & Transactional Vulnerabilities

1. **HTTP Calls Inside SQL Transactions**:
   * In `SupplierPaymentController.php@store`, the DB transaction block calls `$this->transactionService->syncSupplierCostToSalesPortal($transaction)`. This HTTP request is made *before* the SQL transaction is committed. If the Sales Portal API is slow or times out, the local database connection is held open, causing connection pool exhaustion and locking issues.
2. **Missing Idempotency Protection**:
   * The `store` methods for supplier payments, purchase returns, and sales returns lack idempotency keys. Double submissions on slow web connections directly result in duplicate transactions.
3. **Mutable Approved Records Risk**:
   * Although Eloquent model observers guard single-model edits, raw DB queries or bulk updates (`allowMassUpdate`) can bypass this, risking silent modifications of approved financial transactions.
4. **Lack of Concurrency Locking**:
   * Multi-user approvals read balances and write back the subtracted balance using read-modify-write patterns (`$account->current_balance -= $this->amount; $account->save()`) without rowversion or optimistic concurrency tokens, creating a high risk of lost updates.

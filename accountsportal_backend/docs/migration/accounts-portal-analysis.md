# Legacy Accounts Portal Audit & Analysis

This document provides a comprehensive audit of the legacy Laravel 8 Accounts Portal, outlining routing, business logic, side-effects, and legacy design weaknesses, alongside the corresponding .NET improvements.

---

## 1. Authentication & Profile
* **Legacy Routes**: `POST /login`, `POST /logout`, `GET /profile`
* **Controller**: `App\Http\Controllers\Auth\LoginController`, `App\Http\Controllers\ProfileController`
* **Model**: `User`
* **Tables**: `users`
* **Authentication**: Session-based cookie auth (web), Sanctum token auth (API).
* **Database Side Effects**: Updates `last_login_at` and `last_login_ip` on login.
* **Legacy Weakness**: Session authentication is tightly coupled to Blade templates; password hash verification uses legacy BCrypt without migration support; tokens are not rotated.
* **Required .NET Improvement**: Establish standard JWT/refresh-token authentication. Support password migration by validating legacy BCrypt hashes and re-hashing them with ASP.NET Core Identity's modern PBKDF2 scheme if successful. Propagate `CancellationToken` and map error states to `ProblemDetails`.

---

## 2. Bank Management
* **Legacy Routes**: `GET /banks`, `POST /banks`, `PUT /banks/{id}`, `POST /banks/{id}/toggle-status`
* **Controller**: `App\Http\Controllers\BankController`
* **Model**: `Bank`
* **Tables**: `banks`
* **Authentication**: Web Session (restricted to `master_accountant` or `accountant` roles).
* **Database Side Effects**: Inserts/updates `banks` table. Sets opening balance during creation only. Status toggle updates `is_active`.
* **Legacy Weakness**: Lacks optimistic concurrency checks, meaning concurrent edits can overwrite each other. Current balance can be manipulated directly instead of going strictly through immutable transaction flows.
* **Required .NET Improvement**: Enforce read-only balance fields on PUT/POST requests. Enforce a `rowversion` concurrency token on the Bank aggregate. Ensure current balances are mutated exclusively through approved transaction postings.

---

## 3. Account Management
* **Legacy Routes**: `GET /accounts`, `POST /accounts`, `PUT /accounts/{id}`, `POST /accounts/{id}/toggle-status`
* **Controller**: `App\Http\Controllers\AccountController`
* **Model**: `Account`
* **Tables**: `accounts`
* **Authentication**: Required (web middleware `EnsureAccountant` / `EnsureMasterAccountant`).
* **Database Side Effects**: Modifies `accounts` table.
* **Legacy Weakness**: Enum-based types and ledger types are checked only at the application level via validation rules. Opening and current balances are vulnerable to drift and concurrent modifications.
* **Required .NET Improvement**: Implement `rowversion` concurrency protection. Configure EF Core mappings to restrict mutations to current balances to internal Domain methods (`Debit()` and `Credit()`).

---

## 4. Financial Transactions (Incoming & Outgoing)
* **Legacy Routes**: `POST /payments/supplier`, `POST /api/banks/{id}/deposit`, `POST /api/accounts/{id}/deposit`
* **Controller**: `App\Http\Controllers\SupplierPaymentController`, `App\Http\Controllers\Api\PublicApiController`
* **Model**: `Transaction`, `Supplier`, `Bank`, `Account`
* **Tables**: `transactions`, `suppliers`, `banks`, `accounts`
* **Authentication**: Sanctum key check (`EnsureExternalApiKey`) or Session Auth.
* **Balance Side Effects**: Updates current balance of associated Bank or Account. Mutates supplier wallet/credit wallets.
* **Legacy Weakness**: Transactions are created with `pending` status, but the approval triggers HTTP calls to credit remote Sales Portal user wallets inside the database transaction boundary.
* **Required .NET Improvement**: Separate external integrations from the database transaction context. Save local state changes and write an `OutboxMessage` to the DB in a single SQL transaction. Dispatch the remote HTTP call asynchronously via the Outbox Processor.

---

## 5. Contra Transactions (Local Transfers)
* **Legacy Routes**: `POST /contra-transactions`
* **Controller**: `App\Http\Controllers\ContraTransactionController`
* **Model**: `Transaction`, `Account`, `Bank`
* **Tables**: `transactions`, `accounts`, `banks`
* **Authentication**: accountant / master_accountant.
* **Balance Side Effects**: Atomically deducts from source account/bank and credits destination account/bank.
* **Legacy Weakness**: Double-debits or credits can occur if requests are retried concurrently without idempotency keys.
* **Required .NET Improvement**: Require an `Idempotency-Key` header for posting contra transactions. Implement persistent idempotency checks that verify both the key and a hash of the payload before executing balance modifications.

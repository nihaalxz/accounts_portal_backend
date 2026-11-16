# Phase 3 — Legacy Laravel Accounting Audit

**Date**: 2026-07-13
**Source**: Static analysis of `texasconnect_accounts.sql`, legacy PHP controller inspection from Phases 1 and 2.

---

## 1. Accounting Architecture Classification

### Verdict: SINGLE-ENTRY ACCOUNTING — NO FORMAL DOUBLE-ENTRY GL

The legacy Laravel Accounts Portal does **NOT** implement formal double-entry accounting. There is no Chart of Accounts. There is no General Ledger. There are no balanced Journal Entries with equal debits and credits across named accounts.

The existing financial system is a **single-entry operational ledger** where:
- Cash/bank effects are stored as mutable balance columns on `banks.current_balance` and `accounts.current_balance`
- Financial movements are recorded as rows in the `transactions` table
- No debit/credit account pair is stored per transaction
- Balances are computed from mutation history against mutable balance columns (not aggregated from GL)

---

## 2. Legacy Table Audit

### 2.1 `transactions` Table — Primary Financial Record
The `transactions` table is the **source of truth** for all cash and payment movements.

| Column | Type | Notes |
| :--- | :--- | :--- |
| `id` | bigint | Primary key |
| `transaction_type` | enum | `incoming`, `outgoing`, `contra`, `purchase_return`, `sales_return`, `wallet_debit` |
| `source_account_id` | bigint null | FK to `accounts` |
| `destination_account_id` | bigint null | FK to `accounts` |
| `source_bank_id` | bigint null | FK to `banks` |
| `destination_bank_id` | bigint null | FK to `banks` |
| `amount` | decimal(10,3) | Monetary amount |
| `payment_method` | varchar | `cash`, `bank_transfer`, `credit`, `bank`, `wallet` |
| `reference_type` | varchar | `receipt`, `flight_booking`, `visa_application`, `expense`, `salary`, etc. |
| `reference_id` | varchar | ID of the referenced object in another portal |
| `recipient_type` | varchar | `supplier`, `agent`, `head` |
| `recipient_id` | bigint | Matches `suppliers.id` or `agents.id` |
| `supplier_id` | bigint null | Direct supplier link |
| `original_transaction_id` | bigint null | For returns/reversals |
| `status` | enum | `pending`, `approved`, `rejected` |
| `approved_by` / `approved_at` | audit | Set on approval |
| `rejected_by` / `rejected_at` | audit | Set on rejection |
| `expense_header_id` | bigint null | Link to `expense_headers` category |

**Finding**: Every `approved` transaction represents a posted cash movement. 191 transactions exist in the dump, all approved. No formal GL debit/credit pairs exist.

### 2.2 `journals` Table — NOT a GL Journal
The existing `journals` table stores party-to-party adjustment entries:

| Column | Notes |
| :--- | :--- |
| `debit_party_type` | `agent`, `supplier`, `account`, `bank` |
| `debit_party_id` | ID of the debited party |
| `credit_party_type` | Same options |
| `credit_party_id` | ID of the credited party |
| `amount` | Single amount (single-entry, not line-based) |
| `status` | `pending`, `approved`, `rejected` |

**Finding**: This is a **party transfer log**, not a double-entry GL journal. It has no GL account codes, no line items, no balance check. The .NET `Journal` entity and `journals` table are already migrated. The Phase 3 `JournalEntry` is a **separate concept** and will use separate tables.

### 2.3 `expense_headers` Table — Expense Category Master
| Column | Notes |
| :--- | :--- |
| `id` | Primary key |
| `name` | Category name (e.g., "Office Supplies", "Travel") |
| `category` | Optional sub-category |
| `description` | Optional description |
| `created_by` | Author reference |

**Finding**: This is an expense **category/type master** only. The legacy system records individual expense payments as `transactions` rows with `reference_type = 'expense'` and `expense_header_id` pointing to this table. There is **no separate expense transaction table**. There are 1 row in the dump (one category header exists: `expense_headers`).

### 2.4 `banks` and `accounts` — Operational Balance Stores

Both tables store `balance` (opening) and `current_balance` (mutable running total). These are the legacy sub-ledgers. No formal GL account codes are associated.

### 2.5 `suppliers` — Supplier Sub-ledger
`wallet` (decimal) = prepay balance. `credit_wallet` (decimal) = outstanding credit. These are operational sub-ledger balances — no GL linkage.

### 2.6 `agents` — Agent Sub-ledger
`wallet` (decimal) = prepay balance. No GL linkage.

---

## 3. Expense Workflow (Legacy)

### Creation
- Route: `POST /payments/supplier` (same controller handles expenses via `expense_header_id`)
- An expense is a `transaction` row with:
  - `transaction_type = 'outgoing'`
  - `reference_type = 'expense'`
  - `expense_header_id = <category_id>`
  - Payment method determines which bank/account is debited
- No separate expense approval workflow — follows standard transaction approval

### Approval
- Master Accountant directly creates an approved transaction
- Normal Accountant creates pending, Master Accountant approves
- Approval mutates `banks.current_balance` or `accounts.current_balance`
- No AuditLog in legacy. No idempotency protection.

### Statuses
- `pending` → `approved` → (no further states)
- `pending` → `rejected`
- No draft state, no posted state, no cancelled state, no reversed state

### Accounting Effects
- Debit: Expense account (implicitly — legacy has no explicit debit account)
- Credit: Bank or Cash account (implicitly — via balance mutation)
- **No GL entry created**. Balance mutated directly.

### Legacy Weakness
- No formal expense GL entry
- No expense-specific approval workflow
- Expenses are indistinguishable from other outgoing payments in the `transactions` table without filtering by `reference_type`

---

## 4. Chart of Accounts (Legacy)

**DOES NOT EXIST** in the legacy system.

The `accounts` table stores operational cash/bank sub-accounts (e.g., "Petty Cash Account"), not a Chart of Accounts. The `accounts.ledger_type` column (`asset`, `liability`, `capital`, `income`, `expense`) is the closest thing to account classification that exists.

**Finding**: Phase 3 must introduce a new `chart_of_accounts` table from scratch. System accounts will be seeded. The existing `Account` entity's `LedgerType` enum provides the classification vocabulary.

---

## 5. Journal Entries (Legacy)

**DOES NOT EXIST** as a formal double-entry concept.

The `journals` table (party transfer log) is the only journal-like structure. It:
- Records a single amount between two parties
- Does NOT validate that debits equal credits (it's a single-amount record)
- Does NOT use account codes or a Chart of Accounts
- Has no multi-line structure
- Has no formal posting date or period association

**Finding**: Phase 3 introduces `journal_entries` and `journal_entry_lines` as net-new tables. The legacy `journals` table and `Journal.cs` entity are preserved for backward compatibility.

---

## 6. General Ledger (Legacy)

**DOES NOT EXIST**.

There is no ledger table. There are no debit/credit posting entries. The `transactions` table serves as a payment log, not a GL.

**Finding**: Phase 3 introduces `general_ledger_entries` as a new append-only table.

---

## 7. Trial Balance (Legacy)

**DOES NOT EXIST** as a computed view.

Balance totals are read directly from `banks.current_balance` and `accounts.current_balance`. No aggregation from ledger history.

**Finding**: Phase 3 Trial Balance must aggregate from `general_ledger_entries` only.

---

## 8. Accounting Periods (Legacy)

**DO NOT EXIST**.

No fiscal year, no period open/close, no posting restriction by period. All transactions can be backdated freely.

**Finding**: Phase 3 introduces `accounting_periods` from scratch. Period enforcement must be designed around both the new GL and the existing operational posting engine.

---

## 9. Reversals and Corrections (Legacy)

- **Purchase Returns**: tracked via `transactions` with `transaction_type = 'purchase_return'` and `original_transaction_id`
- **Sales Returns**: tracked via `transactions` with `transaction_type = 'sales_return'` and `original_transaction_id`
- **Balance Corrections**: separate `balance_corrections` table with admin override
- **Hard deletes**: NOT observed in legacy for approved transactions. Rejections are logical status changes.
- **No formal GL reversal**: Legacy simply creates a new transaction crediting what was previously debited

**Finding**: Phase 3 reversals must create a new JournalEntry that mirrors the original with swapped debits/credits, maintaining full traceability.

---

## 10. Reconciliation (Legacy)

**DOES NOT EXIST** formally. No reconciliation reports. No discrepancy detection.

---

## 11. Financial Reports (Legacy)

The legacy system has:
- `transactions` filtered by type/date for operational reports
- Balance totals read from mutable balance columns
- No GL-derived reports

**Finding**: Formal accounting reports (P&L, Balance Sheet) cannot be generated until the Chart of Accounts is established and GL posting is implemented for all relevant workflows.

---

## 12. HTTP Calls Inside SQL Transactions

Confirmed vulnerability from Phase 2 audit:
- `SupplierPaymentController@store` calls Sales Portal HTTP API inside DB transaction
- This has been resolved in the .NET implementation via Transactional Outbox

---

## 13. Key Findings Summary

| Question | Answer |
| :--- | :--- |
| Does formal double-entry accounting exist? | **NO** |
| Is the current ledger single-entry? | **YES** |
| Is `HeadLedger` a customer sub-ledger? | **N/A — no HeadLedger concept exists** |
| Is `Supplier ledger` a sub-ledger? | **YES — wallet/credit_wallet columns are sub-ledger balances** |
| Is `FinancialTransaction` the current accounting SoT? | **YES** |
| Do Banks/Accounts store mutable balances? | **YES** |
| Can existing transactions be mapped to debit/credit? | **PARTIALLY — transaction_type and payment_method allow inference** |
| Do historical records have enough info for GL migration? | **PARTIALLY — reference data exists but explicit account codes do not** |
| Do Expense records create balanced accounting effects? | **NO — no GL effects exist** |
| Do automatic journals exist? | **NO** |
| Do accounting periods exist? | **NO** |
| Is closed-period enforcement present? | **NO** |
| Is reversal behavior present (operational)? | **YES — via transaction_type = purchase_return/sales_return** |
| Do hard deletes exist for approved records? | **NO — rejections are logical state changes** |
| Are approved financial records mutable? | **YES (legacy) — rowversion guards this in .NET** |
| Do HTTP calls occur inside SQL transactions? | **YES (legacy) — resolved via Outbox in .NET** |
| Is accounting posting duplicated across services? | **NO — single FinancialPostingService in .NET** |
| Are financial totals calculated from balances or history? | **FROM MUTABLE BALANCES (legacy)** |

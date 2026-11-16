# Phase 3 — Report Inventory

---

## 1. Legacy Reports

The legacy system has no formal GL-derived reports. Reports were generated from:
- `banks.current_balance` and `accounts.current_balance` for balance totals
- `transactions` filtered by type/date for payment history

---

## 2. Phase 3 Report Classification

| Report | Classification | Condition |
| :--- | :--- | :--- |
| **General Ledger Report** | `SUPPORTED` | Derived from `general_ledger_entries` |
| **Account Statement** | `SUPPORTED` | Opening balance + period debits/credits + closing balance from GL |
| **Expense Report** | `SUPPORTED` | Derived from `expenses` + GL entries |
| **Trial Balance** | `SUPPORTED` | Aggregated from `general_ledger_entries` by account |
| **Profit and Loss** | `BLOCKED BY ACCOUNT MAPPING` | Requires complete Revenue + Expense GL integration for all workflows. Deferred until Checkpoint 10 GL integration is complete. |
| **Balance Sheet** | `BLOCKED BY ACCOUNT MAPPING` | Requires Asset + Liability + Equity account mapping. Opening balance definition required. Deferred. |
| **Cash Flow Statement** | `DEFERRED` | Insufficient verified cash-flow account mapping in legacy |

---

## 3. General Ledger Report Requirements

Filters:
- Account (single or hierarchical roll-up)
- Date range (PostingDate from/to)
- Accounting Period
- SourceType

Pagination: bounded (max 100 per page)
Sorting allowlist: PostingDate, AccountId

Response: paginated GL entries with source references

---

## 4. Account Statement Requirements

- Opening balance as of period start date (sum of GL before start date)
- Period debits and credits (sum within date range)
- Closing balance (opening + period net)
- Paginated entry detail

---

## 5. Expense Report Requirements

Filters:
- Date range
- Category (ExpenseHeader)
- Status
- Payment method

Derived from `expenses` table joined to GL entries

---

## 6. Trial Balance Requirements

- As-of date filter
- Period filter
- Account type filter
- Aggregated: total debit, total credit, net balance per account
- Sum of all debits = sum of all credits (for a balanced ledger)
- Use SQL aggregation — never load all GL entries into memory

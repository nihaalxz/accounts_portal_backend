# Phase 3 — Expense Business Rules

---

## 1. Legacy Expense Behavior

In the legacy system, individual expenses are `transactions` rows with:
- `transaction_type = 'outgoing'`
- `reference_type = 'expense'`
- `expense_header_id` pointing to an `expense_headers` category

There is NO dedicated expense table. Expenses follow the same approval workflow as any outgoing payment.

---

## 2. Expense Categories (ExpenseHeader — preserved from Phase 1)

`ExpenseHeader` is the category master. No changes required to this entity.

| Field | Notes |
| :--- | :--- |
| `Id` | Primary key |
| `Name` | Category name (e.g., "Office Supplies") |
| `Category` | Optional sub-category |
| `Description` | Optional |
| `CreatedBy` | Author |

---

## 3. Phase 3 Expense Entity State Machine

The new `Expense` entity introduces a proper lifecycle:

```
Draft → PendingApproval → Approved → Posted → Reversed
                      ↓
                  Rejected
                      ↓
                  Cancelled (from Draft only)
```

| Status | Triggered By | Financial Effect |
| :--- | :--- | :--- |
| `Draft` | Creation | None |
| `PendingApproval` | Submit command | None |
| `Approved` | Master Accountant approval | Operational balance mutation (Bank/Account debit) |
| `Posted` | GL posting after approval | `JournalEntry` + `GeneralLedgerEntry` created |
| `Rejected` | Accountant/Master Accountant rejection | None |
| `Cancelled` | Cancellation (Draft only) | None |
| `Reversed` | Reversal command | Reversal JournalEntry created |

**Simplification for v1**: If Master Accountant creates directly → transitions from Draft to Approved immediately (no PendingApproval step), matching legacy behavior.

---

## 4. Expense Financial Rules

### Payment Source
- `PaymentMethod = Cash` → debit operational `Account` (AccountType = Cash)
- `PaymentMethod = BankTransfer` → debit operational `Bank`
- `PaymentMethod = Bank` → debit operational `Bank`
- Payment must respect the source balance

### Balance Effects (Operational)
- On approval: source Bank/Account balance decremented via `FinancialPostingService`
- A `FinancialTransaction` record is created with `reference_type = 'expense'` and `expense_header_id`

### GL Effects (Phase 3)
- On posting: create `JournalEntry` with two `JournalEntryLines`:
  - **Debit**: Expense GL account (determined by `ExpenseHeader.Category` mapping to ChartOfAccount)
  - **Credit**: Cash/Bank GL control account
- GL posting is atomic with approval where both operational and GL data are in the same transaction

### Reversal
- Creates a new reversed JournalEntry swapping debits/credits
- Original Expense transitions to `Reversed` status
- No operational balance revert in Phase 3 v1 (reversal is GL-only correction)

---

## 5. Expense Validation Rules

- Amount must be > 0
- `ExpenseCategoryId` (ExpenseHeader) must exist
- Payment source (bank or account) must exist and be active
- Balance must be sufficient
- Cannot approve a non-pending expense
- Cannot reject an approved or cancelled expense
- Cannot post to a closed accounting period
- Idempotency key required for create and approve commands
- `CorrelationId` propagated through entire lifecycle

---

## 6. Authorization Rules

| Action | Required Role |
| :--- | :--- |
| Create Expense (Draft) | Accountant or Master Accountant |
| Submit for Approval | Accountant or Master Accountant |
| Approve Expense | Master Accountant only |
| Reject Expense | Master Accountant only |
| Post Expense to GL | Master Accountant only (or auto-posted on approval) |
| Cancel Expense | Accountant or Master Accountant (Draft only) |
| Reverse Expense | Master Accountant only |

---

## 7. Audit Requirements

Every state transition must create an `AuditLog` entry with:
- `ActorUserId`
- `Action` (Created, Submitted, Approved, Rejected, Posted, Cancelled, Reversed)
- `EntityType = "Expense"`
- `EntityId`
- `CorrelationId`

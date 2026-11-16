# Phase 3 — Open Questions

---

## Q1: GL Integration for Generic Outgoing Transactions [BLOCKED]

**Context**: The existing `FinancialTransaction` with `transaction_type = 'outgoing'` and no `expense_header_id` cannot be deterministically mapped to a GL expense/cost account.

**Proposed Resolution**: 
- All new expense payments in Phase 3 use the `Expense` entity (not generic outgoing transactions)
- Existing historical generic outgoing transactions remain in `transactions` table without GL integration
- GL reconciliation will flag these as "operational records without GL counterpart" — this is expected and documented, not an error

**Status**: RESOLVED — documented limitation, no blocking ambiguity

---

## Q2: Incoming Payment GL Credit Account [ASSUMPTION]

**Context**: Incoming payments credit revenue, but the specific revenue sub-account depends on service type (flight, visa, hotel, etc.).

**Proposed Resolution**:
- Use `4100 Service Revenue` as the single revenue account for Phase 3 v1
- Sub-accounts per service type can be added in a future phase when account mapping is expanded
- Requires client confirmation that single revenue account is acceptable for now

**Status**: ASSUMPTION — requires client confirmation before Checkpoint 10 integration of incoming transactions

---

## Q3: Trial Balance Opening Balances

**Context**: The legacy system has `banks.balance` and `accounts.balance` as opening balance columns. For the GL Trial Balance to be accurate from day one, these opening balances must be posted as GL entries.

**Proposed Resolution**:
- Create a special `OpeningBalance` Journal Entry source type
- Post opening balances as GL entries on the `StartDate` of the first accounting period
- This is a one-time migration journal entry, not legacy data migration

**Status**: OPEN — design decision needed before Checkpoint 9

---

## Q4: Contra Transfer GL Account Mapping

**Context**: A contra transfer moves funds from one bank/account to another. The GL debit/credit accounts are both in the Asset category (e.g., Debit Bank B Control, Credit Bank A Control).

**Proposed Resolution**: Both sides of a contra transfer map to the same account type group (`1110/1120`). This is internally consistent. Sub-account identification requires the `sourceAccountId`/`destinationAccountId` to map to specific sub-ledger control accounts.

**Status**: SUPPORTED — proceeds in Checkpoint 10

---

## Q5: Expense GL Account Selection (Category to Account Mapping)

**Context**: When posting an Expense to GL, which expense account does the system debit? The `ExpenseHeader.Category` string must map to a `ChartOfAccount` entry.

**Proposed Resolution**: 
- Add an optional `ChartOfAccountId` FK to `ExpenseHeader` entity
- When posting expense to GL, use `ExpenseHeader.ChartOfAccountId` to determine debit account
- Default to `5230 Other Operating Expenses` if mapping not set
- This mapping is configurable and auditable

**Status**: OPEN — confirmed as design decision, resolved by adding FK in Checkpoint 5

---

## Q6: Period Requirement for Historical Data

**Context**: Phase 3 introduces accounting periods. What happens to GL entries created before any accounting period is defined?

**Proposed Resolution**:
- Require at least one `Open` accounting period to exist before any GL posting is accepted
- The system will reject GL postings if no open period covers the posting date
- During migration, the admin must create the initial accounting period before enabling GL integration

**Status**: RESOLVED — enforced by period validation in GL posting engine

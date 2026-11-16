# Phase 3 — Ledger Analysis

---

## 1. Legacy Ledger Structure

The legacy system has NO General Ledger. Financial positions are tracked through mutable balance columns:
- `banks.current_balance`
- `accounts.current_balance`
- `suppliers.wallet` / `suppliers.credit_wallet`
- `agents.wallet`

---

## 2. Phase 3 General Ledger Design

### GeneralLedgerEntry Fields

| Field | Type | Notes |
| :--- | :--- | :--- |
| `Id` | bigint | Primary key, identity |
| `AccountId` | bigint | FK to `chart_of_accounts` |
| `JournalEntryId` | bigint | FK to `journal_entries` |
| `JournalEntryLineId` | bigint | FK to `journal_entry_lines` |
| `PostingDate` | datetime2 | Date of GL effect |
| `Debit` | decimal(19,3) | Debit amount (0 if credit entry) |
| `Credit` | decimal(19,3) | Credit amount (0 if debit entry) |
| `Description` | nvarchar(500) | Entry description |
| `SourceType` | nvarchar(100) | `FinancialTransaction`, `Expense`, `JournalEntry`, etc. |
| `SourceId` | nvarchar(255) | PK of source record |
| `SourceReference` | nvarchar(255) | Human-readable reference |
| `CorrelationId` | nvarchar(255) | Propagated from originating command |
| `CreatedAt` | datetime2 | When posted |

### Append-Only Guarantee
- No UPDATE or DELETE operations on `general_ledger_entries`
- Enforced via:
  - Private setters on all properties (no mutation path in domain)
  - Architecture tests verifying no DELETE endpoint exists
  - Database constraints where feasible

### Key Indexes
- `IX_gl_entries_AccountId_PostingDate` — supports account statement and Trial Balance queries
- `IX_gl_entries_SourceType_SourceId` — supports reconciliation and duplicate source detection
- `IX_gl_entries_JournalEntryId` — supports journal-to-GL traceability
- `IX_gl_entries_CorrelationId` — supports correlation chain audit
- `IX_gl_entries_PostingDate` — supports period-based aggregation

---

## 3. Balance Calculation Rules

Trial Balance balance for each account:
- If `NormalBalance = Debit`: Balance = SUM(Debit) - SUM(Credit)
- If `NormalBalance = Credit`: Balance = SUM(Credit) - SUM(Debit)

This is calculated via SQL aggregation from `general_ledger_entries` filtered by `PostingDate` range.

---

## 4. Ledger Query Strategy

All GL queries use:
- `AsNoTracking()` 
- SQL aggregation (SUM, GROUP BY) — never load individual entries into memory for balance calculation
- Bounded pagination for entry-level queries
- Sorting allowlists
- Index-covered queries

---

## 5. Relationship to Operational Records

| Operational Record | GL Counterpart | Integration Status |
| :--- | :--- | :--- |
| `FinancialTransaction` (incoming) | GL: Debit Cash/Bank, Credit Revenue | CHECKPOINT 10 |
| `FinancialTransaction` (outgoing) | GL: Debit Expense/Payable, Credit Cash/Bank | CHECKPOINT 10 |
| `FinancialTransaction` (contra) | GL: Debit Account, Credit Account | CHECKPOINT 10 |
| `SupplierPayment` (approved) | GL: Debit Supplier Payable, Credit Cash/Bank | CHECKPOINT 10 |
| `PurchaseReturn` (approved) | GL: Debit Cash/Bank or Supplier Wallet, Credit Supplier Payable | CHECKPOINT 10 |
| `SalesReturn` (approved) | GL: Debit Service Cost, Credit Cash/Bank or Agent Wallet | CHECKPOINT 10 |
| `Expense` (posted) | GL: Debit Expense Account, Credit Cash/Bank | CHECKPOINT 5 |
| `JournalEntry` (posted) | GL: per JournalEntryLine | CHECKPOINT 6/7 |

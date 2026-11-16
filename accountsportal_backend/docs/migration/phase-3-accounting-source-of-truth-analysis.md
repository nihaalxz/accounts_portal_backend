# Phase 3 — Accounting Source of Truth Analysis

---

## 1. Current Sources of Truth

| Financial Dimension | Legacy Source of Truth | .NET Current SoT | Phase 3 Target SoT |
| :--- | :--- | :--- | :--- |
| **Cash / Bank balances** | `banks.current_balance` (mutable) | `banks.CurrentBalance` (domain-protected) | `banks.CurrentBalance` (operational) + `general_ledger_entries` (GL) |
| **Account balances** | `accounts.current_balance` (mutable) | `accounts.CurrentBalance` (domain-protected) | `accounts.CurrentBalance` (operational) + GL |
| **Payment movements** | `transactions` table | `transactions` table | `transactions` table (operational) + GL |
| **Supplier prepay** | `suppliers.wallet` (mutable) | `suppliers.Wallet` (domain-protected) | `suppliers.Wallet` (operational sub-ledger) |
| **Supplier credit** | `suppliers.credit_wallet` (mutable) | `suppliers.CreditWallet` (domain-protected) | `suppliers.CreditWallet` (operational sub-ledger) |
| **Agent prepay** | `agents.wallet` (mutable) | `agents.Wallet` (domain-protected) | `agents.Wallet` (operational sub-ledger) |
| **Expense records** | `transactions` (reference_type='expense') | `transactions` (reference_type='expense') | `expenses` table + GL |
| **Journal adjustments** | `journals` (party transfer) | `journals` (preserved) | `journal_entries` + `journal_entry_lines` + GL |
| **Trial Balance** | `banks.current_balance` + `accounts.current_balance` | Same | `general_ledger_entries` aggregated by `chart_of_accounts` |

---

## 2. Boundary Ownership Rules (Phase 3)

### Operational Sub-ledger (owned by Phase 1/2 foundation)
- `FinancialTransaction` — immutable after approval
- `Bank.CurrentBalance` — mutated only through `FinancialPostingService`
- `Account.CurrentBalance` — mutated only through `FinancialPostingService`
- `Supplier.Wallet` / `Supplier.CreditWallet` — mutated only through `FinancialPostingService`
- `Agent.Wallet` — mutated only through `FinancialPostingService`

### Accounting Ledger (owned by Phase 3)
- `ChartOfAccount` — account taxonomy
- `AccountingPeriod` — fiscal controls
- `JournalEntry` + `JournalEntryLine` — double-entry journals
- `GeneralLedgerEntry` — append-only ledger entries (created only through `IAccountingPostingService`)
- `Expense` — expense lifecycle
- `TrialBalance` — computed view from GL (never stored)

### Boundaries Must NOT Cross:
- Controllers MUST NOT create GL entries
- `IAccountsDbContext` MUST NOT expose `GeneralLedgerEntries` directly to financial workflow services
- GL entries MUST be created only through `IAccountingPostingService`
- `IAccountingPostingService` MUST NOT expose EF Core types

---

## 3. Dual-Write Strategy for Operational + GL Integration

When an operational financial command (e.g., Approve Supplier Payment) must also post to the GL:

**Strategy: Same-Transaction Dual Write within `ITransactionalExecutor`**
1. Execute operational mutation (balance update, FinancialTransaction status change)
2. Execute GL posting via `IAccountingPostingService` within the same transaction
3. Both commit atomically or both roll back
4. This is safe because both operational data and GL data live in the same SQL Server database
5. External HTTP calls (Sales Portal sync) remain in Outbox — never inside this transaction

**Condition for GL Integration**: Only workflows with deterministic verified account mappings in the `phase-3-accounting-event-matrix.md` can be integrated.

---

## 4. Trial Balance Source Authority

- **Phase 3 Trial Balance MUST be derived from `general_ledger_entries`**
- **Trial Balance MUST NOT read `banks.current_balance` or `accounts.current_balance`**
- The mutable operational balances and the GL balances may diverge during the transition period (before all workflows are GL-integrated)
- Any divergence MUST be detectable by the GL Reconciliation endpoint

---

## 5. Source Reference Strategy

Every `GeneralLedgerEntry` will carry:
- `SourceType`: e.g., `FinancialTransaction`, `Expense`, `JournalEntry`, `PurchaseReturn`, `SalesReturn`, `SupplierPayment`
- `SourceId`: The PK of the source record
- `SourceReference`: Human-readable reference string (e.g., transaction reference number)
- `JournalEntryId`: The parent JournalEntry that contains this GL line
- `CorrelationId`: Propagated from the originating command

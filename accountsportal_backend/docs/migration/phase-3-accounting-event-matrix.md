# Phase 3 — Accounting Event Matrix

This matrix documents every financial operation's double-entry GL mapping, posting timing, idempotency scope, and integration feasibility.

---

## Legend

- **Debit Account**: Account code / name to debit
- **Credit Account**: Account code / name to credit
- **Posting Timing**: When GL entry is created
- **Migration Feasibility**: SUPPORTED / BLOCKED / DEFERRED

---

## 1. Phase 1 Operations

| Operation | Source Entity | Source Command | Legacy Financial Effect | .NET Financial Effect | Debit Account | Credit Account | Posting Timing | Approval Timing | Idempotency Scope | SourceType | Reversal Method | Period Restriction | Audit | Outbox | Migration Feasibility | Ambiguity | Target Behavior |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Incoming Payment (external deposit)** | `FinancialTransaction` | `CreateIncomingTransactionCommand` | Bank/Account balance increased | `Bank.Credit()` or `Account.Credit()` | `1110 Cash` or `1120 Bank` | `4100 Service Revenue` | On approval | Immediate (auto-approved) | Yes (per deposit) | `FinancialTransaction` | GL reversal | Yes | Yes | No (internal only) | **Revenue account assumed** | GL Debit Cash/Bank, Credit Revenue |
| **Outgoing Payment** | `FinancialTransaction` | `CreateOutgoingTransactionCommand` | Bank/Account balance decreased | `Bank.Debit()` or `Account.Debit()` | `5100-5150 Supplier Cost` | `1110 Cash` or `1120 Bank` | On approval | Master Accountant | Yes | `FinancialTransaction` | GL reversal | Yes | Conditional | **BLOCKED** — target expense/cost account not deterministic without SourceType context | Cost category unclear without ExpenseHeader or ReferenceType | Requires ExpenseHeader or ReferenceType to determine GL debit account |
| **Contra Transfer** | `FinancialTransaction` | `CreateContraTransactionCommand` | Account A decreased, Account B increased | Dual balance mutation | `1110/1120` (destination) | `1110/1120` (source) | On approval | Master Accountant | Yes | `FinancialTransaction` | GL reversal | Yes | No | SUPPORTED — account-to-account transfer | None | GL Debit destination account, Credit source account |
| **Balance Correction** | `BalanceCorrection` | `CreateBalanceCorrectionCommand` | Account balance adjusted | `Account.ApplyBalanceCorrection()` | Depends on direction | Depends on direction | Immediate | Admin | No | `BalanceCorrection` | GL reversal | Yes | No | DEFERRED | Correction direction and magnitude determine debit/credit | Create adjusting journal entry |

---

## 2. Phase 2 Operations

| Operation | Source Entity | Source Command | Debit Account | Credit Account | Posting Timing | Idempotency Scope | SourceType | Reversal Method | Period Restriction | Audit | Outbox | Migration Feasibility | Ambiguity |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Supplier Payment (Bank Transfer)** | `SupplierPayment` | `ApproveSupplierPaymentAsync` | `2110 Supplier Payables Control` | `1120 Bank Control` | On approval | Yes | `SupplierPayment` | GL reversal | Yes | Yes | Yes (SupplierCostSync) | SUPPORTED | Payment method determines credit side (bank vs cash) |
| **Supplier Payment (Credit)** | `SupplierPayment` | `ApproveSupplierPaymentAsync` | `2110 Supplier Payables Control` | `2120 Supplier Credit Control` | On approval | Yes | `SupplierPayment` | GL reversal | Yes | Yes | Yes | SUPPORTED | Credit increases supplier credit_wallet liability |
| **Purchase Return (Supplier Wallet)** | `PurchaseReturn` | `PostPurchaseReturnAsync` | `2110 Supplier Payables Control` | `1200 Agent/Supplier Receivable` | On posting | Yes | `PurchaseReturn` | GL reversal | Yes | Yes | No | SUPPORTED | Wallet credit reduces payable |
| **Purchase Return (Bank/Cash)** | `PurchaseReturn` | `PostPurchaseReturnAsync` | `2110 Supplier Payables Control` | `1120 Bank Control` | On posting | Yes | `PurchaseReturn` | GL reversal | Yes | Yes | No | SUPPORTED | Cash return reduces payable |
| **Sales Return (Local Agent)** | `SalesReturn` | `PostSalesReturnAsync` | `5100 Supplier Cost` | `1120 Bank Control` | On posting | Yes | `SalesReturn` | GL reversal | Yes | Yes | Yes (CreditHeadWallet) | SUPPORTED | Debit cost, credit bank for refund |
| **Sales Return (External/Head)** | `SalesReturn` | `PostSalesReturnAsync` | `5100 Supplier Cost` | `1120 Bank Control` | On posting | Yes | `SalesReturn` | GL reversal | Yes | Yes | Yes | SUPPORTED | Same as local, Outbox handles external wallet |

---

## 3. Phase 3 New Operations

| Operation | Source Entity | Debit Account | Credit Account | Posting Timing | Idempotency Scope | SourceType | Reversal Method | Period Restriction | Audit | Outbox | Migration Feasibility |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Expense (Cash)** | `Expense` | `5200-5230 Operating Expenses` | `1110 Cash Control` | On approval (auto-post) | Yes | `Expense` | GL reversal | Yes | Yes | No | SUPPORTED |
| **Expense (Bank)** | `Expense` | `5200-5230 Operating Expenses` | `1120 Bank Control` | On approval (auto-post) | Yes | `Expense` | GL reversal | Yes | Yes | No | SUPPORTED |
| **Manual Journal** | `JournalEntry` | Per JournalEntryLines | Per JournalEntryLines | On post command | Yes | `JournalEntry` | Reversal JournalEntry | Yes | Yes | No | SUPPORTED |
| **Reversal Journal** | `JournalEntry` | Swapped from original | Swapped from original | Immediate on reversal | Yes | `JournalEntry` | N/A (reversal of reversal not allowed) | Yes | Yes | No | SUPPORTED |

---

## 4. BLOCKED Operations (Cannot be GL-integrated without more information)

| Operation | Reason Blocked |
| :--- | :--- |
| **Outgoing Transaction (generic)** | GL debit account is not deterministic without ExpenseHeader or reference context. Must use Expense entity for GL posting instead. |
| **Balance Correction** | Correction direction and target account ambiguous. Requires manual journal entry instead. |
| **Staff Payroll** | Out of scope for Phase 3. |
| **Wallet Debit** | Account mapping unclear — only 2 records in dump. Deferred. |

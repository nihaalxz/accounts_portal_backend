# Phase 3 — Chart of Accounts Inventory

---

## 1. Legacy Chart of Accounts

**DOES NOT EXIST** in legacy. The closest existing structures are:
- `accounts.ledger_type` enum: `asset`, `liability`, `capital`, `income`, `expense`
- `accounts.type` enum: `cash`, `bank`, `credit`

---

## 2. Phase 3 Chart of Accounts Design

### Account Types (Top-Level Classification)
| AccountType | NormalBalance | Description |
| :--- | :--- | :--- |
| `Asset` | Debit | Resources owned (Cash, Bank, Receivables) |
| `Liability` | Credit | Obligations owed (Payables, Credit facilities) |
| `Equity` | Credit | Owner's equity / capital |
| `Revenue` | Credit | Income from services |
| `Expense` | Debit | Operating costs |

### Proposed Seed Account Hierarchy (Minimal — Required for Phase 3)

```
1000  Assets
  1100  Cash and Bank
    1110  Petty Cash Control          [Control Account]
    1120  Bank Control                [Control Account]
  1200  Receivables
    1210  Agent Prepay Control        [Control Account]
  1300  Other Assets

2000  Liabilities
  2100  Payables
    2110  Supplier Payables Control   [Control Account]
    2120  Supplier Credit Control     [Control Account]

3000  Equity
  3100  Owner's Capital

4000  Revenue
  4100  Service Revenue

5000  Expenses
  5100  Supplier Costs
    5110  Flight Booking Costs
    5120  Visa Application Costs
    5130  Hotel Booking Costs
    5140  Holiday Package Costs
    5150  Other Supplier Costs
  5200  Operating Expenses
    5210  Office Expenses
    5220  Travel Expenses
    5230  Other Operating Expenses
```

### Control vs. Posting Accounts
- **Control Accounts**: Top-level accounts that aggregate sub-ledger balances. Manual postings to control accounts are restricted.
- **Posting Accounts**: Leaf accounts that receive actual GL entries.

### System Accounts
System accounts (seeded during migration) cannot be deleted or renamed by users. They include all control accounts for Banks, Cash, Suppliers, and Agents.

---

## 3. Account Code Rules

- Account code must be unique across the entire Chart of Accounts
- Code format: numeric string (e.g., `1110`, `5110`)
- Parent account must exist before child accounts can be created
- Hierarchy cannot contain cycles
- Inactive accounts cannot receive new GL postings
- Accounts with existing GL history cannot be deleted

---

## 4. Legacy `Account.LedgerType` Mapping to ChartOfAccount

| Legacy `LedgerType` | Maps to GL `AccountType` | Example |
| :--- | :--- | :--- |
| `Asset` | `Asset` | Cash accounts, bank accounts |
| `Liability` | `Liability` | Credit accounts |
| `Capital` | `Equity` | Capital accounts |
| `Income` | `Revenue` | Revenue accounts |
| `Expense` | `Expense` | Expense category accounts |

The existing `.NET Account` entity (operational sub-account) is a sub-ledger that rolls up to a GL control account in the Chart of Accounts.

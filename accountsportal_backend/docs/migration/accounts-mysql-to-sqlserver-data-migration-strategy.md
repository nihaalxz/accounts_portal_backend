# MySQL to SQL Server Data Migration Strategy

This document details how data will be migrated from the legacy MySQL instance to the target SQL Server database.

---

## 1. Load Order
To respect foreign key constraints, data must be loaded in this exact sequence:
1. `users` (preserves original IDs)
2. `banks`
3. `accounts`
4. `suppliers`
5. `agents`
6. `expense_headers`
7. `transactions`
8. `balance_corrections`
9. `staff_payroll_records`
10. `journals`
11. `supplier_payment_statuses`

---

## 2. Password Hash Migration Strategy
* Legacy Laravel uses BCrypt.
* Target ASP.NET Core Identity uses PBKDF2.
* **Migration Strategy**:
  - We will import legacy password hashes directly into the `PasswordHash` field of `AccountsUser`.
  - The authentication engine will check if the hash uses the `$2y$` (BCrypt) prefix. If yes, it will verify using BCrypt.
  - If password validation succeeds, the system will re-hash the password using ASP.NET Core's default PBKDF2 hash scheme and update the DB row, achieving seamless, zero-downtime password migration.

---

## 3. Financial Reconciliation
Upon completing the import, run validation scripts to check:
1. Bank current balance equals opening balance + sum of approved incoming transactions - sum of approved outgoing transactions.
2. Account current balance equals opening balance + sum of approved incoming transactions - sum of approved outgoing transactions.
3. Supplier wallets equal starting balance + sum of approved purchase returns.

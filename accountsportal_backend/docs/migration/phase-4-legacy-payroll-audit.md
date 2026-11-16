# Phase 4 — Legacy Payroll and Staff Financial Audit

This document profiles the legacy payroll, advances, and staff financial workflows found in the audited Laravel projects (`gafor-accountsportal` and `texas_sales_portal`).

---

## 1. Legacy Files and Endpoints

### 1.1 Accounts Portal Endpoints
- **Controllers**: 
  - [StaffController.php](file:///d:/gafoor_portalversions/gafor-accountsportal/app/Http/Controllers/StaffController.php) (Handles salary deposits, incentives, advances, and payroll transfers).
  - [PublicApiController.php](file:///d:/gafoor_portalversions/gafor-accountsportal/app/Http/Controllers/Api/PublicApiController.php) (Exposes staff payroll history endpoint `/api/staff/{id}/payroll`).
- **Models**:
  - [StaffPayrollRecord.php](file:///d:/gafoor_portalversions/gafor-accountsportal/app/Models/StaffPayrollRecord.php) (Sub-ledger schema and balance calculations).
- **Web Routes**:
  - `GET /accounting/staffs` -> lists staff users retrieved from Sales Portal API.
  - `POST /accounting/staffs/{id}/salary-config` -> updates basic salary, housing, and transport allowance on Sales Portal.
  - `POST /accounting/staffs/{id}/credit-salary` -> inserts a `salary` credit record.
  - `POST /accounting/staffs/{id}/credit-incentive` -> updates Sales Portal incentive and inserts local `incentive` credit record.
  - `POST /accounting/staffs/{id}/give-advance` -> creates an outgoing advance transaction and inserts an `advance` credit record.
  - `POST /accounting/staffs/{id}/transfer-payroll` -> processes payout of salary and incentives, recovers outstanding advances, and subtracts paid incentives from Sales Portal.

---

## 2. Analysis of Core Staff Financial Workflows

### 2.1 Staff Synchronization (Identity Ownership)
- **Source of Truth**: The **Operations Portal** owns the master staff registry.
- **Sync Direction**: Operations Portal pushes staff changes to:
  - The Sales Portal (which updates sales and admin staff).
  - The Accounts Portal (which updates `AccountsUser` accountants only, ignoring non-accountants).
- **Weakness**: Non-accountant payroll-eligible staff are not stored in the Accounts Portal database. Instead, the Accounts Portal fetches staff lists dynamically via HTTP API calls to the Sales Portal.

### 2.2 Salary and Allowance Configuration
- Stored directly as columns in the Sales Portal's `users` table:
  - `basic_salary`
  - `housing_allowance`
  - `transport_allowance`
- The Accounts Portal accesses these fields via API calls.

### 2.3 Staff Advances and Loans
- **Advance Issuance (`giveAdvance`)**:
  - Creates a `pending` outgoing transaction from a selected cash account or bank.
  - Inserts a local `StaffPayrollRecord` with `type = 'advance'`, `direction = 'credit'`.
  - Balance reduction is computed dynamically: `sum(credit) - sum(debit)`.
- **Advance Recovery**:
  - Deducted during the `transferPayroll` step.
  - Inserts a `StaffPayrollRecord` with `type = 'advance'`, `direction = 'debit'`.

### 2.4 Payroll Processing and Payouts (`transferPayroll`)
- **Calculation Formula**:
  - Gross salary = basic salary + incentives + bonus
  - Deductions = penalty + advance deduction + other deductions
  - Net Pay = Gross - Deductions
- **Validation**: Net Pay must be > 0.
- **Execution**:
  - Creates an outgoing `Transaction` with `reference_type = 'salary'`, `amount = netPay`.
  - Inserts a `salary` debit `StaffPayrollRecord` with amount equal to `max(0, (basic_salary + bonus) - (penalty + other_deductions))`.
  - Inserts an `advance` debit `StaffPayrollRecord` for advance recovery.
  - Inserts an `incentive` debit `StaffPayrollRecord` for incentive payout and decreases the live incentive balance on the Sales Portal.

---

## 3. Critical Defects in Legacy Design

1. **HTTP Calls Inside DB Transactions**:
   - During payroll transfers, the Accounts Portal calls the Sales Portal HTTP API (`updateSalesUserIncentive`) inside a Laravel database transaction. If the HTTP call times out, the local database remains locked, causing lock escalation or connection exhaustion.
2. **Dynamic Remote Dependencies**:
   - Payroll calculations depend on mutable live data fetched from the Sales Portal API. If the salesman's salary config changes during the payroll run, calculations will change dynamically.
3. **No General Ledger Integration**:
   - Payouts create raw operational transactions but no balanced double-entry GL journals.
4. **No Accounting Period Controls**:
   - Payroll can be backdated or modified regardless of whether the accounting month is closed.

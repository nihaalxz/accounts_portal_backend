# Phase 4 — Staff Financial Business Rules

This document specifies the exact business rules governing staff compensation, advances, incentives, and payroll calculations.

---

## 1. System Boundaries and Identity Rules

- **Staff Identity SoT**: The Operations Portal owns the master staff record. The Accounts Portal synchronizes metadata (ID, Name, Email, Role) to validate staff associations. Staff records must not be independently editable in the Accounts Portal.
- **Salary Configuration**: Consists of `basic_salary`, `housing_allowance`, and `transport_allowance`. These values represent fixed monthly entitlements.
- **Active Status**: Only active staff members are eligible for advances, loans, and payroll runs.

## 2. Staff Advances and Loans Rules

- **Issuance**: Advances represent interest-free loans given to employees. When disbursed, an advance creates a debit to the Staff Receivable account and credits Cash/Bank.
- **Outstanding Balance Calculation**:
  $$\text{Outstanding Advance} = \sum \text{Disbursed Credit Advances} - \sum \text{Recovered Debit Advances}$$
- **Over-recovery Prevention**: The recovery amount in a payroll period cannot exceed the current outstanding advance balance of the staff member.
- **Loan Repayments**: Loans follow a formal repayment schedule. Each repayment reduces the outstanding principal balance. Overpayment is strictly prohibited.

## 3. Commissions and Incentives Rules

- **Incentives**: Earned dynamically in the Sales Portal based on sales targets. They are synced to the Accounts Portal.
- **Commissions**: Handled as external inputs. The Sales Portal calculates salesman commissions based on booking profits and monthly targets achieved. Once imported/synced, the facts are snapshotted and cannot be modified.
- **Double Payout Prevention**: Each commission and incentive record must have a unique external reference. Re-importing the same reference must replay the existing record rather than generating duplicates.

## 4. Payroll Calculation Rules

- **Gross Entitlements**:
  $$\text{Gross Entitlements} = \text{Basic Salary} + \text{Housing Allowance} + \text{Transport Allowance} + \text{Bonuses} + \text{Incentives} + \text{Commissions}$$
- **Deductions**:
  $$\text{Total Deductions} = \text{Penalties} + \text{Advance Deductions} + \text{Loan Repayments} + \text{Statutory Deductions}$$
- **Net Pay**:
  $$\text{Net Pay} = \text{Gross Entitlements} - \text{Total Deductions}$$
- **Negative Net Pay Guard**: Net Pay must be $\ge 0$. If deductions exceed gross entitlements, the calculation must be clamped, and the remaining unpaid deductions must carry forward or flag an error. Net Pay cannot be negative.
- **Inputs Immutability**: All inputs (salary configurations, advance balances, incentives) must be snapshotted at the start of a Payroll Run. Subsequent changes to remote databases must not affect already-calculated payroll.

# Phase 4 — Salary Component Inventory

This document inventory lists all salary earnings and deductions used in payroll calculations.

---

## 1. Earnings Components

### Basic Salary
- **Type**: Fixed Earning
- **Description**: Standard monthly contract salary.
- **Source**: `StaffProfile.BasicSalary`.

### Housing Allowance
- **Type**: Fixed Earning
- **Description**: Monthly accommodation allowance.
- **Source**: `StaffProfile.HousingAllowance`.

### Transport Allowance
- **Type**: Fixed Earning
- **Description**: Monthly transit allowance.
- **Source**: `StaffProfile.TransportAllowance`.

### Incentives
- **Type**: Variable Earning
- **Description**: Performance-based earnings imported from the Sales Portal.
- **Source**: `IncentiveRecord` / Sales Portal dynamic balance.

### Commissions
- **Type**: Variable Earning
- **Description**: Revenue-share earnings calculated from booking profits.
- **Source**: `CommissionRecord`.

### Bonuses
- **Type**: Variable Earning
- **Description**: Discretionary management awards added manually.
- **Source**: Payroll run adjustments.

---

## 2. Deductions Components

### Advance Recovery
- **Type**: Variable Deduction
- **Description**: Repayment of salary advance.
- **Limit**: Cannot exceed outstanding advance balance.
- **Source**: Calculated based on outstanding advance ledger.

### Loan Repayments
- **Type**: Variable Deduction
- **Description**: Amortized payment of staff loan.
- **Source**: `LoanRepaymentSchedule`.

### Penalties
- **Type**: Variable Deduction
- **Description**: Disciplinary or operational deductions.
- **Source**: Manual input.

### Other Deductions
- **Type**: Variable Deduction
- **Description**: General deductions (e.g. tax, unpaid leave).
- **Source**: Manual input.

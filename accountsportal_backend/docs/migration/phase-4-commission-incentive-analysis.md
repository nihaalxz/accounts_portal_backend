# Phase 4 — Commission and Incentive Analysis

This document audits the legacy targets, incentives, and commission tracking mechanisms, defining the migration strategy to .NET.

---

## 1. Legacy Analysis

### 1.1 Profit Targets and Reset
- The Sales Portal tracks salesman activity. Each user has:
  - `profit_target`: Remaining profit target for the month.
  - `monthly_target`: Monthly profit goal set by admin.
  - `profit_generated`: Accumulation of booking profit.
- When profit is generated (e.g. visa application approved), `addProfit($amount)` increment `profit_generated` and decrement `profit_target`.
- **Reset workflow (`resetStats`)**:
  - Resets `profit_generated` to 0.
  - Resets `profit_target` to `monthly_target`.
  - Creates a `StaffMonthlyRecord` archiving the achievements.

### 1.2 Incentives
- Admin adds incentives via `updateIncentive($amount)`.
- During payroll transfer, the paid incentive amount is deducted by calling Sales Portal API with a negative amount: `updateSalesUserIncentive($id, -1 * incentives)`.

---

## 2. Phase 4 Implementation Plan

- **Incentive Import**: The Accounts Portal will query or receive incentive sync records.
- **Outbox Deduction**: When a payroll run is approved and posted, the paid incentive amount is sent via Outbox message (`DeductSalesIncentiveEvent`) to update the Sales Portal, ensuring no synchronous HTTP inside the SQL transaction.
- **Commission Import**: Commission records are imported into `CommissionRecord` entities with unique source references (e.g. `booking_type` + `booking_id`). Duplicate imports are protected by idempotency keys.

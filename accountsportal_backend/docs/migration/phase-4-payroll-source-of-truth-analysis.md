# Phase 4 — Payroll Source of Truth Analysis

This document identifies the System of Record (SoT) and calculation owners for each payroll-related component.

---

## 1. Source of Truth Matrix

| Domain Component | Primary SoT | Destination / Consumer | Integration Transport |
| :--- | :--- | :--- | :--- |
| **Staff Profile & Roles** | Operations Portal | Sales & Accounts Portals | HTTP Post (Staff Sync Event) |
| **Basic Salary Configuration** | Sales Portal | Accounts Portal | HTTP Get / Post Sync |
| **Incentives & Commissions** | Sales Portal | Accounts Portal | Event Import / Sync API |
| **Advance / Loan Balance** | Accounts Portal | Sales Portal | Live Query (Accounts API) |
| **Reimbursements** | Accounts Portal | Financial Ledgers | Direct Entry |
| **Payroll Runs & History** | Accounts Portal | Sales Portal (Visits history) | Live Query (Accounts API) |
| **General Ledger Postings** | Accounts Portal | General Ledger | Internal Service Call |

---

## 2. Dynamic Integration Rules

### 1. Staff Identity
- The Accounts Portal relies on `StaffSyncController` to receive staff sync events. In Phase 4, we must store a lookup cache of all staff members (including salesmen and operational staff) in a new table `staff_profiles` in the Accounts database.
- A new C# entity `StaffProfile` will capture:
  - `Id` (matching Sales Portal User ID)
  - `Name`
  - `Email`
  - `UserType`
  - `IsActive`
  - `BasicSalary`
  - `HousingAllowance`
  - `TransportAllowance`
- When staff profiles sync, this local table is updated.

### 2. Live Dynamic Queries
- The Sales Portal requests staff payroll details at `/staff/{id}/payroll`. The Accounts Portal must expose this endpoint, projecting local `StaffPayrollRecord` history, salary balances, and outstanding advances.

### 3. Outbox Event-Driven Updates
- Paying out an incentive requires deducting it from the Sales Portal live user record. To prevent HTTP requests inside SQL transactions, the Accounts Portal will write an Outbox message (`IncentivePayoutEvent`). The Outbox Processor will dispatch this update asynchronously to the Sales Portal API.
- Replaying failed outbox deliveries must be idempotent.

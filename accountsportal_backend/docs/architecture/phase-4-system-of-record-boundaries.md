# Phase 4 — System of Record Boundaries

This document defines the authoritative systems of record (SoT) and boundaries for staff, payroll, compensation, and general ledger operations.

---

## 1. System of Record (SoT) Allocations

### Staff Identity & Core Registry
- **Authoritative System**: **Operations Portal**
- **Accounts Portal Status**: Read-only Consumer. 
- **Rule**: Staff member profiles are pushed to the Accounts Portal via the synchronization API. They cannot be created, updated, or deleted directly within the Accounts Portal dashboard or database outside of this sync channel.

### Salary & Basic Compensation Config
- **Authoritative System**: **Sales Portal**
- **Accounts Portal Status**: Read-only Consumer.
- **Rule**: Employee basic salary, housing, and transport allowances are owned by the Sales Portal. Changes to salary configurations must be initiated in the Sales Portal and synchronized to the Accounts Portal. 

### Payroll Calculations & Run Lifecycles
- **Authoritative System**: **Accounts Portal**
- **Accounts Portal Status**: Authoritative Owner.
- **Rule**: The Accounts Portal is the sole generator, validator, and calculation engine for payroll runs. A payroll run’s validity and lifecycle states are determined entirely by the Accounts Portal.

### Staff Advances & Loans
- **Authoritative System**: **Accounts Portal**
- **Accounts Portal Status**: Authoritative Owner.
- **Rule**: Advances and loans are registered, disbursed, and recovered solely in the Accounts Portal. The Sales Portal queries the Accounts Portal for outstanding advance balances.

---

## 2. Mutability Constraints

1. **Staff Profile Read-Only Guarantee**:
   The Accounts Portal local `StaffProfile` cache is updated only via `SyncStaffProfile` API calls. Direct manual editing of name, email, or salary configs via the Accounts Portal database is prohibited.
2. **Post-Calculation Snapshotting**:
   Once a payroll run is started, all remote inputs are snapshotted. Modifications to staff profile compensation configs in the Sales Portal must not alter the calculations of an in-progress or approved payroll run.

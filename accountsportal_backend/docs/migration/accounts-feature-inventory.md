# Feature Inventory & Classification

This document classifies every legacy feature of the Accounts Portal to outline the scope boundaries of Phase 1 vs. subsequent phases.

| Feature Area | Legacy Component | Phase 1 Classification | Notes / Strategy |
| :--- | :--- | :--- | :--- |
| **Authentication** | Login, JWT, Refresh Token, Invalidation | **MIGRATE_PHASE_1** | Custom JWT + Refresh Token rotation. |
| **Users** | User management, Active/Disabled states | **MIGRATE_PHASE_1** | Clean Domain entity with active flag validation. |
| **Roles & Permissions** | Roles mapping (Master Accountant, Accountant) | **MIGRATE_PHASE_1** | Policy-based authorization. |
| **Banks** | Bank profile, Opening & Current Balances | **MIGRATE_PHASE_1** | CRUD + optimistic concurrency protection. |
| **Accounts** | Account profile, Ledger Types, Cash/Bank/Credit | **MIGRATE_PHASE_1** | CRUD + optimistic concurrency protection. |
| **Financial Transactions** | Status management, Immutable definitions | **MIGRATE_PHASE_1** | Strict immutable fields + State Machine checks. |
| **Transaction Approval** | Apply balance mutations, Record approver | **MIGRATE_PHASE_1** | Thread-safe posting engine. |
| **Transaction Rejection** | Record rejecter and return reason | **MIGRATE_PHASE_1** | State machine transition (no balance mutations). |
| **Contra Transfers** | Account-to-Account / Bank-to-Bank transfers | **MIGRATE_PHASE_1** | Atomic posting + Idempotency guarantees. |
| **Balance Corrections** | Admin adjustment to account balances | **MIGRATE_PHASE_1** | Tracked corrections with old/new balance audits. |
| **Suppliers CRUD** | Basic info, category list, verification state | **MIGRATE_PHASE_1** | Code validation + verification workflows. |
| **Agents CRUD** | First/Last names, salesman ID validation | **MIGRATE_PHASE_1** | Wallet fields + verification workflows. |
| **External Sales APIs** | authenticated service reads for banks/suppliers | **MIGRATE_PHASE_1** | API key policy authorization + versioned DTOs. |
| **Staff Sync** | Sync staff from Operations Portal | **MIGRATE_PHASE_1** | Safe password placeholder + email sync. |
| **Audit Logging** | Append-only financial and access records | **MIGRATE_PHASE_1** | DbContext audit trails. |
| **Idempotency** | Persistent key registry & request hashing | **MIGRATE_PHASE_1** | Enforced on all mutations. |
| **Outbox Processor** | Remote Sales Portal wallet sync worker | **MIGRATE_PHASE_1** | Multi-instance safe processing. |
| **Supplier Payments** | Processing supplier invoices / clear-credit | **MIGRATE_LATER** | Out of scope for Phase 1. |
| **Purchase Returns** | Returning supplier goods/services | **MIGRATE_LATER** | Out of scope for Phase 1. |
| **Sales Returns** | Agent / booking refund processing | **MIGRATE_LATER** | Out of scope for Phase 1. |
| **Journals** | Double-entry adjustment postings | **MIGRATE_LATER** | Out of scope for Phase 1. |
| **Expenses** | Category headers and expense payouts | **MIGRATE_LATER** | Out of scope for Phase 1. |
| **Staff Payroll** | Salary credits, advances, and payroll sync | **MIGRATE_LATER** | Out of scope for Phase 1. |
| **Exports & Reports** | PDF/Excel/CSV Daily reports | **MIGRATE_LATER** | Out of scope for Phase 1. |
| **Chargebacks** | Processing credit card booking chargebacks | **MIGRATE_LATER** | Out of scope for Phase 1. |
| **Sales Receipts** | Booking receipt verification and collection | **MIGRATE_LATER** | Out of scope for Phase 1. |

# Open Questions

This file logs design decisions and clarifying queries.

## Design Decisions
1. **Wallet Debit vs. Transfer**: In the legacy dump, `wallet_debit` is occasionally used as a transaction type. In the new posting service, we will handle this as a standard incoming or outgoing type with a specialized target recipient to align with clean design.
2. **Auto-Approval**: In legacy, incoming payments from external public APIs (like deposits) immediately post. Normal outgoing payments go into `pending`. We will replicate this behavior in the postings engine.

## Resolved Questions (Phase 2 Acceptance)
1. **EF Core ChangeTracker Lifecycle Isolation**: We resolved the tracking state leakage completely by moving all Idempotency DB CRUD actions to the Infrastructure-owned `IdempotencyRecoveryStore` via `IDbContextFactory`. The financial posting service no longer touches or accesses the tracker.
2. **Initial State Creation**: To prevent transition failures during Master Accountant post operations, the entities are initialized in a `Pending` state via factory parameters and subsequently approved via the `.Approve()` domain method.
3. **Reconciliation Mutation Protection**: Enforced strict GET routing limits and `AsNoTracking` usage, validated via architecture tests to guarantee read-only query bounds.

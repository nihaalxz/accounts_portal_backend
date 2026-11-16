# Phase 2 Open Questions

* **Document Path**: `docs/migration/phase-2-open-questions.md`

---

## Technical Constraints & Assumptions

1. **Currency and Precision Assumptions**:
   * **Question**: Does the system require multi-currency handling for actual costs or returns?
   * **Assumption**: No. All transactions and balances are tracked in a single system currency with 3-decimal precision (e.g. BHD) matching legacy MySQL tables and casts.
2. **Reopening Completed Payments**:
   * **Question**: Is there a business case where a completed payment status must be reopened?
   * **Assumption**: No. The status lock is a one-way state transition (`is_completed = true`). Reopening is blocked in alignment with legacy logic.
3. **Head Wallet Sync Errors**:
   * **Question**: If a Head Wallet credit fails in the Sales Portal, should the sales return rollback locally?
   * **Assumption**: Since HTTP calls cannot happen inside SQL transactions, the local sales return transaction is committed first. The outbox message delivery is retried. If it dead-letters, it is caught by the reconciliation APIs rather than blocking local database state commits.

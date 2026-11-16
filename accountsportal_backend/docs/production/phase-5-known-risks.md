# Phase 5 Known Risks

## Identified Risks
1. **Control Account direct postings**: Posting directly to control accounts like `1110` (Petty Cash Control), `1120` (Bank Control), or `2110` (Supplier Payables Control) is blocked by the GL engine. Using hardcoded codes that overlap with these in other workflows causes runtime failures.
2. **Concurrency race-conditions**: High-volume concurrent postings to the same bank or cash accounts risk deadlocks and incorrect balances if not protected by appropriate rowversion or isolation guards.
3. **Database connection transient faults**: Running database postings without configurable retry policies on EF Core could lead to partially-completed operations if connection drops.
4. **Data quality during migration**: Importing legacy data from MySQL could fail if foreign keys are orphans, if timestamps are malformed, or if decimal precisions differ.
5. **Secrets and DevAuth leak**: Safe JWT keys or placeholder secrets might get committed or exposed in production environments if not properly isolated via strongly typed options.

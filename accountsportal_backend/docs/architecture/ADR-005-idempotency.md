# ADR 005: API Idempotency Guarantee

## Context
Network timeouts or client retries can cause the same financial mutation command to be processed multiple times, leading to duplicate debits, credits, or transfers.

## Decision
We will implement an idempotency registry:
1. Every write mutation endpoint will require an `Idempotency-Key` header.
2. The pipeline will query the `IdempotencyRecord` table by `Scope` + `Key`.
3. If an record exists:
   - If the request payload hash matches and the status is complete, the API immediately replays the cached response.
   - If the request payload differs, it returns `409 Conflict`.
   - If the original request is still in progress, it returns `409 Conflict` (or standard `425 Too Early` / retry headers).
4. If no record exists, it inserts a new `IdempotencyRecord` in a pending state. Upon successful execution of the command, the status is updated to completed and the response payload is cached.

## Consequences
* Safe retries for network drops.
* Guarantees that each unique user request executes exactly once.

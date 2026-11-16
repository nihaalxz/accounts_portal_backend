# ADR 003: Transactional Outbox Pattern

## Context
When transaction approvals or state transitions occur, we must synchronize balances and records with sibling portals (like crediting wallets in the Sales Portal). Making inline HTTP calls inside the database transaction results in long database locks, potential connection pool exhaustion, and failure modes where local state commits but the HTTP call fails or vice versa.

## Decision
We will adopt the Transactional Outbox pattern:
1. When any balance mutation occurs, we insert an `OutboxMessage` containing the message metadata, target, and JSON payload in the same local SQL transaction as the state change.
2. A background `IHostedService` (`OutboxProcessor`) periodically queries the `OutboxMessage` table for unprocessed messages (`ProcessedAt IS NULL`).
3. Messages are claimed using a safe transaction lock, sent to the downstream endpoint via an HTTP client with retry policies (Polly), and marked as processed upon success.

## Consequences
* High resilience. Sibling portals can go offline, and transactions will still approve. The processor will retry delivery once the downstream service recovers.
* SQL transactions are committed instantly without waiting for HTTP handshakes, freeing database connections.

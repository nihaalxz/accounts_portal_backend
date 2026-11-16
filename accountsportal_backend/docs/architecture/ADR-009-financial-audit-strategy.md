# ADR 009: Financial Audit Strategy

## Context
Financial compliance requires keeping complete logs of who created, edited, approved, rejected, or corrected any records, with IP addresses and user agents.

## Decision
We will implement an append-only Audit Logging engine:
1. Create an `AuditLog` entity capturing: `ActorUserId`, `Action` (Login, Approved, Corrected, etc.), `EntityType`, `EntityId`, `OldState` (JSON), `NewState` (JSON), `Reason`, `CorrelationId`, and request headers.
2. The Database will expose only insert permissions for audit records (no updates or deletes via the API).
3. The posting engine automatically generates these audit records within the same SQL transaction block as the main posting.

## Consequences
* High transparency and robust forensic trail.
* Audit records cannot be deleted or changed once written.

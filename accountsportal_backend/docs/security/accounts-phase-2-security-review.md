# Phase 2 Security Review

This document audits the security posture, authentication/authorization boundaries, and validation guards implemented in Phase 2.

## Security Audit Matrix

| Security Area | Status | Evidence / Mitigations |
| :--- | :--- | :--- |
| **Authentication** | PASS | All Phase 2 routes are protected by the `[Authorize]` attribute requiring JWT validation. |
| **Authorization** | PASS | Workflow endpoints require the `RequireAccountant` policy for access. |
| **IDOR Protection** | PASS | User context is injected directly from the authenticated token payload (`UserId`), preventing parameter tampering. |
| **Supplier Payment Permissions** | PASS | Accountant role drafts payments; Master Accountant executes approval/rejections. |
| **Purchase Return Permissions** | PASS | Creation and execution restricted to Master Accountant/Accountant. |
| **Sales Return Permissions** | PASS | Restricted to authorized roles under JWT policy checks. |
| **Approval Permissions** | PASS | Enforced at the service layer: `user.UserType == "master_accountant"` checks. |
| **Separation of Duties** | PASS | Normal accountants cannot approve payments they or others draft; approval is restricted to Master Accountant roles. |
| **Self-Approval Restrictions** | PASS | Enforced via Role Policy bounds where drafting role cannot self-approve unless explicitly Master Accountant. |
| **Mass Assignment** | PASS | Requests utilize strict, flat DTO records mapped manually to entities in the service layer. |
| **Balance Mutation Boundaries** | PASS | Handled inside SQL Server database transactions. Balances are checked at the domain model level. |
| **Idempotency Replay** | PASS | Key composite index checks prevent duplicate execution of the exact same command. |
| **Duplicate Returns** | PASS | Checked via cumulative return cap rules against original payment amounts. |
| **Partial-Return Overrun** | PASS | Total returns sum is validated to be less than or equal to total approved supplier payments. |
| **Concurrent Approvals** | PASS | Protected via RowVersion optimistic concurrency tokens on Bank, Account, and Supplier entities. |
| **Transaction Immutability** | PASS | Verified that approved transaction ledgers cannot be deleted or mutated; enforced via architecture tests. |
| **AuditLog Integrity** | PASS | Every workflow change automatically enqueues an immutable `AuditLog` entry. |
| **Outbox Integrity** | PASS | Processed outbox messages are marked `processed` and are never deleted, providing an audit trail. |
| **Service Authentication** | PASS | Outgoing HTTP requests carry JWT credentials generated specifically for system-to-system access. |
| **Cross-Portal Authorization** | PASS | Handled via API tokens passed in outgoing request headers. |
| **ProblemDetails** | PASS | Exception filter transforms business failures into standardised RFC 7807 ProblemDetails payloads. |
| **Correlation IDs** | PASS | Propagated automatically through all calls, outbox logging, and outgoing HTTP calls. |
| **Safe Logging** | PASS | Sensitive personal fields (passwords, JWT hashes) are excluded from structured logs. |
| **Secret Handling** | PASS | Configuration parameters are bound via Options validations; no hardcoded credentials. |
| **SQL Injection Resistance** | PASS | All database queries are executed using EF Core parameterised parameterized commands. |
| **Pagination Abuse** | PASS | `ReconciliationController` limits statements pagination size to a maximum clamp of `100`. |
| **Reconciliation Exposure** | PASS | Restricted strictly to `RequireAccountant` roles. |
| **Production Restrictions** | PASS | Strict localdb safety check prevents integration tests from targeting cloud/production strings. |

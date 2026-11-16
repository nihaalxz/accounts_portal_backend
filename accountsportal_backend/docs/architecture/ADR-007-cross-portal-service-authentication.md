# ADR 007: Cross-Portal Service Authentication

## Context
The Accounts Portal exposes internal endpoints for sibling portals (like the Sales Portal and Operations Portal) to fetch banks, suppliers, and submit staff synchronization actions. These endpoints should not require user JWT authentication, but must be highly secure.

## Decision
We will establish a dedicated **Internal Service Authentication Scheme**:
1. Service authentication will utilize custom API keys passed via headers: `X-API-KEY` (for general reads) and `X-SYNC-KEY` (for Operations staff sync).
2. We will implement `InternalServiceAuthenticationHandler` which validates the key against a strongly typed configuration (retrieved from environment variables).
3. If valid, the handler builds a `ClaimsPrincipal` with the role `ServicePrincipal` and permissions corresponding to the service type.
4. User JWT tokens will be rejected from service-to-service endpoints, and API keys will be rejected from user-facing APIs.

## Consequences
* Decoupled authentication scopes prevent credential leaks.
* Sibling systems cannot execute requests with user privileges they shouldn't have.

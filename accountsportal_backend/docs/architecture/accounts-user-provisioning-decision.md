# User Provisioning & Staff Sync Decision

## Context
In the Texas Travels ecosystem, the Operations Portal is the authoritative source for company staff. When staff are created, updated, or disabled, their accounts must be synchronized with the Accounts Portal.

## Decision
1. **Sync Route**: Standardize sync endpoint at `POST /api/internal/v1/staff-sync`.
2. **Access Control**: Enforce `X-SYNC-KEY` header authentication containing a shared cryptographically random token stored securely in `appsettings.json`.
3. **Privilege Escalation Guard**:
   - The endpoint only processes sync payloads when the role/user type is `Accounts` (Accountant) or `master_accountant`.
   - If a sync payload contains non-accounts roles (e.g. general operations staff), the sync handler resets permissions or ignores them to prevent privilege escalation.
4. **Active Status Sync**: Sync matches user status directly to ensure disabled staff cannot login to the Accounts Portal.

## Consequences
* Safe, automated, and secure sync loop.
* Eliminates the need for multiple manual staff logins.

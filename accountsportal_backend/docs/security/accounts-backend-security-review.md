# Backend Security Review

* **File Path**: `docs/security/accounts-backend-security-review.md`

---

## 1. Scope
The scope covers password hashing algorithms, JWT lifecycle, token rotation and revocation controls, cross-portal API credential verification, and bootstrap user isolation.

## 2. Methodology
We reviewed the implementation details of JWT generation, `ServiceKeyAuthenticationHandler`, BCrypt hashing, and Options validations.

## 3. Commands/Searches Performed
* Audited BCrypt usage in `BCryptPasswordHasher.cs`.
* Checked `ServiceKeyAuthenticationHandler.cs` implementation.
* Inspected startup configuration validations in `Program.cs` and `ConfigurationValidationTests.cs`.

## 4. Evidence (Security Controls Verified)

### A. Password Cryptography
* **Mechanism**: BCrypt (via `BCrypt.Net-Next`).
* **Verification**: `passwordHasher.HashPassword(...)` generates strong blowfish hashes. `VerifyPassword(...)` validates hashes correctly.

### B. Bootstrap Seeding Guards
* **Controls**:
  - Enforced a 12-character minimum password length.
  - Enforced uppercase, lowercase, digit, and special character presence.
  - Excluded weak keywords.
  - Blocked production initialization of bootstrap seeders if environment is Production/Staging.
* **Verification**: `ConfigurationValidationTests.cs` verifies that startup fails fast if bootstrap credentials do not satisfy strength rules or if default configuration is supplied in production.

### C. Cross-Portal Authentication Scheme
* **Mechanism**: Custom `ServiceKeyAuthenticationHandler` parses `X-OPS-KEY` headers and performs a constant-time cryptographic hash comparison to prevent timing attacks.
* **Verification**: `HttpApiIntegrationTests` verify that callers without valid `X-OPS-KEY` headers receive 401 Unauthorized or 403 Forbidden.

### D. JWT Verification Parameters
* **Configuration**: Validates issuer, audience, lifetime, and signing key.
* **Rotation**: Every token refresh returns rotated tokens, revoking the old refresh token.
* **Reuse Detection**: If a revoked refresh token is presented, the system immediately invalidates the entire user session to prevent replay attacks.

---

## 5. Findings
No unresolved critical findings were identified within the reviewed Phase 1 scope. Password hashing uses modern cryptographically secure functions, service keys are protected against timing attacks, and bootstrap settings prevent default leaks.

## 6. Violations
No security violations were identified in the inspected codebase.

## 7. Fixes
No fixes required.

## 8. Remaining Limitations
Security verification is limited to the C# API layers and SQL Server configurations. Downstream infrastructure hosting systems or firewall settings are outside the scope of this review.

## 9. Final Status
* **STATUS**: **PASS** (No unresolved critical findings identified within the reviewed Phase 1 scope).

# Security Review

This document contains the security review of the migrated Texas Accounts Portal.

---

## Security Audit Matrix

### 1. Password Hashing and Laravel Bcrypt Compatibility
* **Standard**: Custom `PasswordHasher` must be compatible with Laravel's Bcrypt hashing mechanism to support legacy PHP user credentials during transition.
* **Status**: **VERIFIED**
* **Evidence**:
  * Implemented using BCrypt.Net-Next library.
  * Verified via `PasswordHasher_ShouldHashAndVerifyLaravelBcryptCompatibility` integration test.

### 2. Token Security and Verification
* **Standard**: JWT keys must be at least 256 bits (32 characters). Issuer and Audience must be validated.
* **Status**: **VERIFIED**
* **Evidence**:
  * Validated at startup inside `DependencyInjection.cs`.
  * Verified via `WeakJwtSigningKeyFailsStartup` and `MissingJwtIssuerFailsStartup` integration tests.

### 3. Inter-Portal Service Authentication
* **Standard**: Cross-portal endpoints must be protected using `X-OPS-KEY` headers and validated using `ServiceKeyAuthenticationHandler` scheme.
* **Status**: **VERIFIED**
* **Evidence**:
  * Implemented in `ServiceKeyAuthenticationHandler.cs`.
  * Key length is checked for minimum 32 characters strength.
  * Verified via `InternalServiceAuthenticationHandler_Authenticates_ValidKey` and `WeakServiceCredentialFailsStartup` integration tests.

### 4. Bootstrap Security Configuration
* **Standard**: Bootstrapping must be disabled by default, require password complexity/length validation, and fail if enabled in Production/Staging environments.
* **Status**: **VERIFIED**
* **Evidence**:
  * Blocked environment-level bootstrapping inside `DependencyInjection.cs`.
  * Verified via `BootstrapDisabledByDefault`, `BootstrapRejectsKnownDefaultPassword`, and `ProductionRejectsDevelopmentBootstrapConfiguration` integration tests.

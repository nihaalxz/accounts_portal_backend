# Phase 1 HTTP Test Coverage Matrix

This matrix documents the verification tests of all HTTP endpoint routes in the Texas Accounts Portal, asserting authentication parameters, validation checks, and concurrency protection mappings.

## HTTP Endpoints Test Matrix

| Route | Method | Auth | Policy | Success Test | Validation Test | 401 Test | 403 Test | 404 Test | 409 Test | 422 Test | Idempotency | Concurrency | Audit |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `/api/auth/login` | `POST` | Anon | N/A | `Login_With_ValidCredentials_ReturnsTokens` | `Login_With_InvalidEmail_ReturnsBadRequest` | N/A (Anon) | N/A (Anon) | N/A (Anon) | N/A | N/A | N/A | N/A | N/A |
| `/api/auth/refresh` | `POST` | Anon | N/A | `Refresh_With_ValidToken_ReturnsNewTokens` | `Refresh_With_EmptyToken_ReturnsBadRequest` | N/A (Token endpoint) | N/A | N/A | N/A | N/A | N/A | N/A | N/A |
| `/api/auth/logout` | `POST` | Bearer | N/A | `Logout_With_ValidToken_RevokesToken` | N/A (No body) | `Logout_With_InvalidToken_ReturnsUnauthorized` | N/A | N/A | N/A | N/A | N/A | N/A | N/A |
| `/api/auth/me` | `GET` | Bearer | N/A | `Me_Authenticated_Returns_User_Profile` | N/A (No body) | `Me_Anonymous_Returns_401` | N/A | N/A | N/A | N/A | N/A | N/A | N/A |
| `/api/bank` | `GET` | Bearer | `all` / `manage_banks` | `Accountant_Can_View_Banks` | N/A (No body) | `Anonymous_Bank_Endpoint_Returns_401` | N/A (Role is authorized) | N/A | N/A | N/A | N/A | N/A | N/A |
| `/api/bank` | `POST` | Bearer | `all` | `Master_Accountant_Can_Create_Bank` | N/A (Validated in contracts) | `Anonymous_Bank_Endpoint_Returns_401` | `Accountant_Cannot_Create_Bank_When_Policy_Forbids` | N/A | N/A | N/A | N/A | N/A | N/A |
| `/api/bank/{id}` | `PUT` | Bearer | `all` | N/A (Internal) | N/A | `Anonymous_Bank_Endpoint_Returns_401` | N/A | N/A | N/A | N/A | N/A | N/A | N/A |
| `/api/bank/{id}/toggle-status` | `POST` | Bearer | `all` | N/A (Internal) | N/A | `Anonymous_Bank_Endpoint_Returns_401` | N/A | N/A | N/A | N/A | N/A | N/A | N/A |
| `/api/account` | `GET` | Bearer | `all` / `manage_accounts` | N/A (Internal) | N/A | `Anonymous_Returns_401` | N/A | N/A | N/A | N/A | N/A | N/A | N/A |
| `/api/account` | `POST` | Bearer | `all` | N/A (Internal) | N/A | `Anonymous_Returns_401` | N/A | N/A | N/A | N/A | N/A | N/A | N/A |
| `/api/account/{id}` | `PUT` | Bearer | `all` | N/A (Internal) | N/A | `Anonymous_Returns_401` | N/A | N/A | N/A | N/A | N/A | N/A | N/A |
| `/api/account/{id}/toggle-status` | `POST` | Bearer | `all` | N/A (Internal) | N/A | `Anonymous_Returns_401` | N/A | N/A | N/A | N/A | N/A | N/A | N/A |
| `/api/account/{id}/correct-balance` | `POST` | Bearer | `all` | N/A (Tested via service method) | N/A | `Anonymous_Returns_401` | `Accountant_Cannot_Correct_Balance` | N/A | N/A | N/A | N/A | N/A | N/A |
| `/api/public/banks/{id}/deposit` | `POST` | ServiceKey | `AccountsInternalApiAccess` | `Valid_Service_Credential_Accesses_Internal_Endpoints` | N/A | `Service_Credential_Required_For_Internal_Endpoints` | N/A | `ProblemDetails_Handles_KeyNotFoundException_With_404` | N/A | N/A | N/A | N/A | N/A |
| `/api/public/accounts/{id}/deposit` | `POST` | ServiceKey | `AccountsInternalApiAccess` | `Valid_Service_Credential_Accesses_Internal_Endpoints` | N/A | `Service_Credential_Required_For_Internal_Endpoints` | N/A | `ProblemDetails_Handles_KeyNotFoundException_With_404` | N/A | N/A | N/A | N/A | N/A |
| `/api/staff/sync` | `POST` | ServiceKey | `AccountsInternalApiAccess` | N/A (Tested via service integration) | N/A | `Service_Credential_Required` | N/A | N/A | N/A | N/A | N/A | N/A | N/A |
| `/api/transactions` | `GET` | Bearer | `all` / `view_transactions` | N/A (Internal list) | N/A | `Anonymous_Returns_401` | N/A | N/A | N/A | N/A | N/A | N/A | N/A |
| `/api/transactions/incoming` | `POST` | Bearer | `all` / `manage_transactions` | N/A (Tested via posting engine) | N/A | `Anonymous_Returns_401` | N/A | N/A | N/A | N/A | N/A | N/A | N/A |
| `/api/transactions/outgoing` | `POST` | Bearer | `all` / `manage_transactions` | N/A (Tested via posting engine) | N/A | `Anonymous_Returns_401` | N/A | N/A | N/A | N/A | N/A | N/A | N/A |
| `/api/transactions/contra` | `POST` | Bearer | `all` / `manage_transactions` | N/A (Tested via posting engine) | N/A | `Anonymous_Returns_401` | N/A | N/A | N/A | N/A | N/A | N/A | N/A |
| `/api/transactions/{id}/approve` | `POST` | Bearer | `all` / `approve_transactions` | N/A (Tested via posting engine) | N/A | `Anonymous_Returns_401` | N/A | N/A | N/A | N/A | N/A | N/A | N/A |
| `/api/transactions/{id}/reject` | `POST` | Bearer | `all` / `approve_transactions` | N/A (Tested via posting engine) | N/A | `Anonymous_Returns_401` | N/A | N/A | N/A | N/A | N/A | N/A | N/A |

### Notes on N/A and Coverage Strategy
* **Anon**: Authentication Scheme is anonymous, so 401/403 tests do not apply.
* **ServiceKey**: Cross-portal endpoints utilize the standard custom `ServiceKeyAuthenticationHandler`. Verification occurs using authorization headers or `X-OPS-KEY` tokens.
* **Internal**: Tested directly via unit or integration tests targeting the respective application core logic and database layers.

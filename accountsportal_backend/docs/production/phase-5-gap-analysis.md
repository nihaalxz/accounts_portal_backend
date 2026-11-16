# Phase 5 Gap Analysis

## Gaps Identified

### 1. Hardcoded Account Codes
- Current state: Account codes `"1111"`, `"1121"`, `"2110"`, `"5010"`, etc. are hardcoded in the codebase.
- Target state: Strongly-typed, validated configurable mappings (`AccountingMappingOptions`) loaded from application configuration.

### 2. Startup Verification
- Current state: The application starts even if database settings are incorrect or mapping entries are missing.
- Target state: Implement `ValidateOnStart` and a Custom Startup Validator to fail fast.

### 3. Legacy Migration
- Current state: No dedicated migration engine exists for legacy Laravel MySQL data.
- Target state: Implement a console-based idempotent migration engine with transactional retry safety.

### 4. Observability and Health Checks
- Current state: Standard logging lacks structured diagnostic keys like `CorrelationId` or metrics telemetry.
- Target state: Implement comprehensive OpenTelemetry and liveness/readiness health check routes.

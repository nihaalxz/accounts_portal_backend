# Phase 5 Accounting Mapping Strategy

## Strategy Overview
We will replace all direct string literals of account codes with a strongly-typed config options pattern (`AccountingMappingOptions`) and a provider interface (`IAccountingMappingProvider`).

## Implementation Components
1. **AccountingMappingOptions**: Holds properties representing each semantic key mapped to an account code string.
2. **AccountingMappingProvider**: Retrieves and caches Chart of Account IDs corresponding to configured codes.
3. **Startup Validation**: A custom startup validator checks that:
   - Mapped codes exist in the database.
   - Mapped codes are active.
   - Mapped codes do not violate control account direct posting restrictions.

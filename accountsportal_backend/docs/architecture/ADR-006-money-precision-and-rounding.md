# ADR 006: Money Precision and Rounding Policy

## Context
Bahraini Dinar (BHD) requires exactly 3 decimal places (Fils precision). Inaccurate rounding or mixed scale variables can lead to discrepancies in general ledgers.

## Decision
1. **Precision**: All financial columns in SQL Server will be configured as `decimal(19,3)` using EF Core fluent mapping.
2. **Rounding Mode**: The application will standardize on **commercial rounding** (`MidpointRounding.AwayFromZero`) when converting values or dividing currency assets.
3. **Execution**: Rounding will be deferred until the final database write step. Intermediate calculations in memory must preserve full decimal precision to avoid compounding rounding errors.

## Consequences
* Exact matching of legacy values and compliance with financial guidelines.
* Strict prevention of floating-point drift by avoiding `float` or `double` operations.

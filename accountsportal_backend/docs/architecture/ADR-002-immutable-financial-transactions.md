# ADR 002: Immutable Financial Transactions

## Context
In accounting, historical records of financial events must never be rewritten. If mistakes occur, they must be corrected using reversal or compensating transactions, not by modifying the original row.

## Decision
We will enforce immutability at three distinct levels:
1. **Domain Layer**: The `FinancialTransaction` entity will not expose public property setters for core financial fields (Amount, Source, Destination, Types). Setters will be `private`. State transitions (pending to approved/rejected) are governed strictly through explicit methods: `Approve()` and `Reject()`.
2. **Infrastructure Layer**: We will register an EF Core `SaveChangesInterceptor` that intercepts all updates and deletes. If a `FinancialTransaction` state is marked modified, the interceptor will verify that only allowed status fields are modified. If any other core column is dirty, or if the entity state is deleted, it will throw a `DbUpdateException`.
3. **Database Layer**: In the future database schema, deletion cascades will be configured carefully to avoid deleting transactions.

## Consequences
* Hard guarantees that transaction history cannot be tampered with.
* Attempting to delete or alter financial amounts will result in a hard exception, rolling back the current transaction.

# ADR 004: Optimistic Concurrency

## Context
Multiple accountants or concurrent API deposits could mutate the balance of the same Bank, Account, Supplier, or Agent. Without concurrency controls, two processes could fetch the same starting balance, apply changes, and save back the result, overwriting each other's updates (lost update anomaly).

## Decision
We will configure optimistic concurrency mapping on the following mutable balance aggregates:
1. `Bank`
2. `Account`
3. `Supplier`
4. `Agent`

We will add a `byte[] RowVersion` concurrency token property to these aggregates and map it as `rowversion` in SQL Server. If two processes attempt to save modifications concurrently, EF Core will raise a `DbUpdateConcurrencyException`. The API will map this concurrency exception to a `409 Conflict` response, allowing the client to safely retry.

## Consequences
* Elimination of lost update anomalies on balance aggregates.
* Safe, non-blocking lock mechanism compared to pessimistic row locking.

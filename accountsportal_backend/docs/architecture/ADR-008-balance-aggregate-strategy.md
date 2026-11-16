# ADR 008: Balance Aggregate Strategy

## Context
In the legacy system, Bank, Account, Supplier, and Agent balances were sometimes changed directly in controllers without auditing or checking bounds.

## Decision
We will enforce the following Domain-Driven design:
1. `Bank`, `Account`, `Supplier`, and `Agent` entities will act as aggregate roots for balances.
2. The current balance properties will have `private set` scope to prevent direct mutations from Application services or Controllers.
3. Mutations will occur through explicit, validation-enforced domain methods:
   - `Bank.Credit(amount)` / `Bank.Debit(amount)`
   - `Account.Credit(amount)` / `Account.Debit(amount)`
   - `Supplier.CreditWallet(amount)` / `Supplier.DebitWallet(amount)`
   - `Agent.CreditWallet(amount)` / `Agent.DebitWallet(amount)`
4. Balance validation (e.g. checking for insufficient funds) will run within the aggregate before mutating the balance.

## Consequences
* Simplifies business code and guarantees invariants are checked inside the model.
* Eliminates accidental drift in balances.

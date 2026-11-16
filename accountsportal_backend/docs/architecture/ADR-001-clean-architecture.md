# ADR 001: Clean Architecture Implementation

## Context
The legacy Laravel Accounts Portal mixed HTTP controllers, database queries, and external API requests inside inline files and Blade views. To support reliable financial operations, testability, and decouple remote integrations, we require strict boundary isolation.

## Decision
We will implement standard Clean Architecture with five core projects:
1. **TexasAccountsPortal.Domain**: Domain objects, entities, value objects, exceptions, enums, and core domain policies. Has zero external dependencies.
2. **TexasAccountsPortal.Contracts**: DTOs, request/response models, and versioned contract structures.
3. **TexasAccountsPortal.Application**: Application services, MediatR commands, posting pipelines, and outbox handlers. References Domain and Contracts.
4. **TexasAccountsPortal.Infrastructure**: EF Core DbContext, repository implementations, JWT tokens, crypt services, and HTTP client implementations. References Application and Domain.
5. **TexasAccountsPortal.Api**: HTTP Controllers, Swagger, ProblemDetails, correlation ID middleware, and Dependency Injection configuration. References Application, Infrastructure, and Contracts.

## Consequences
* High decoupling and strict separation of concerns.
* Easier mock-based testing of business logic.
* Database and API details are kept outside core business code.

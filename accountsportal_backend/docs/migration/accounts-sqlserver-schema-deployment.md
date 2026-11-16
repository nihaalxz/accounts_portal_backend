# SQL Server Schema Deployment

This document describes how to generate, apply, and verify database schema migrations in the target .NET Core backend.

---

## 1. Prerequisites
* .NET SDK installed (v9.0.x).
* Entity Framework Core CLI tool installed:
  ```powershell
  dotnet tool install --global dotnet-ef
  ```
* Target SQL Server instance running (e.g. `.\SQLEXPRESS`).

---

## 2. Generating Migrations
To generate migrations, execute the following command from the workspace root folder:
```powershell
dotnet ef migrations add InitialCreate --project src/TexasAccountsPortal.Infrastructure --startup-project src/TexasAccountsPortal.Api
```

---

## 3. Applying Migrations
Apply the migrations to update the target database:
```powershell
dotnet ef database update --project src/TexasAccountsPortal.Infrastructure --startup-project src/TexasAccountsPortal.Api
```

---

## 4. Verification
Verify that the tables were created successfully by opening SQL Server Management Studio (SSMS) or running queries against `TexasAccountsDb`. Ensure all indices, foreign keys, and unique constraints are set correctly.

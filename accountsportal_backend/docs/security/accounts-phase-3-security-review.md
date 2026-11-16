# Phase 3 Security Review

This document audits the security posture of the Phase 3 accounting and reporting implementations for the Texas Accounts Portal.

## 1. Policy-Based Authorization Matrix

All endpoints introduced or updated in Phase 3 enforce policy-based authorization via JWT claims verification. 

| Endpoint | HTTP Method | Required Policy | Threat Prevented |
| :--- | :--- | :--- | :--- |
| `/api/journalentry` | GET | `RequireAccountant` | Unauthorized access to financial adjustments |
| `/api/journalentry` | POST | `RequireAccountant` | Creation of draft adjustment entries by non-finance staff |
| `/api/journalentry/{id}/approve` | POST | `RequireMasterAccountant` | Self-approval or unauthorized approval of journals |
| `/api/accountingperiod` | GET | `RequireAccountant` | Reading accounting period statuses |
| `/api/accountingperiod` | POST | `RequireMasterAccountant` | Opening, closing, or reopening accounting periods |
| `/api/reconciliation/gl-reconciliation` | GET | `RequireAccountant` | Accessing ledger discrepancy audit logs |
| `/api/reporting/trialbalance` | GET | `RequireAccountant` | Accessing general ledger balances |
| `/api/reporting/general-ledger/*` | GET | `RequireAccountant` | Viewing itemized ledger details |
| `/api/reporting/statement/*` | GET | `RequireAccountant` | Reading account statements |
| `/api/reporting/expenses` | GET | `RequireAccountant` | Analyzing corporate expense reports |

## 2. Mitigation of Common Web Vulnerabilities

### SQL Injection Prevention
- **LINQ Parameterization**: All queries in `ReportingService`, `ReconciliationController`, and `JournalEntryService` utilize LINQ queries which EF Core compiles into parameterized T-SQL commands. No raw SQL concatenation is performed.

### Cross-Site Scripting (XSS)
- **JSON Serialization**: All responses are serialized to JSON using `System.Text.Json` via ASP.NET Core controllers, ensuring appropriate escaping of text fields (such as description and reference strings).

### Information Disclosure
- **ProblemDetails**: Errors and validation exceptions (like invalid dates, closed periods, or unbalanced journal lines) are returned using the standard RFC 7807 `ProblemDetails` format, preventing stack trace disclosure to public users.

## 3. Financial Integrity and Mutability Protections

- **Write Immutability**: Posted Journal Entries and General Ledger entries are strictly append-only. There are no API endpoints or service methods that support editing (`UPDATE`) or deleting (`DELETE`) these records. Corrections must be performed exclusively via the reversal workflow (`ReverseAsync`).
- **Accounting Period Lockdown**: Any posting attempt to a closed period throws `InvalidOperationException` immediately inside `IAccountingPostingService`.
- **Concurrency Protection**: Optimistic concurrency control via `rowversion` is implemented on `JournalEntry`, `AccountingPeriod`, and `Expense` entities.

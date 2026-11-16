# Migration Change Log

All modifications made during the backend migration are recorded here.

## [2026-07-13]
### Added
* Audits and business rule documents for Supplier Payments, Purchase Returns, and Sales Returns under `docs/migration/`.
* Extended `IIdempotencyRecoveryStore` and `IdempotencyRecoveryStore` to completely encapsulate database read, write, complete, and remove operations inside isolated contexts, removing all EF ChangeTracker manipulation from the workflow service.
* Standard .NET Solution file `TexasAccountsPortal.sln` to simplify solution build and restoration tooling.
* `ReconciliationController` exposing total cash balances and statement lookups.
* 14 new architecture tests verifying ChangeTracker isolation, controller DbContext rules, and delete endpoint constraints.
* 4 new SQL Server integration regression tests verifying idempotency retry recovery, concurrent duplicate commands, and cancellation token propagation.
* Corrected domain states to initialize transactions as `Pending` before transitioning to `Approved` via `.Approve()`.
* **Phase 3 additions**:
  - Entities for `ChartOfAccount`, `AccountingPeriod`, `JournalEntry`, `JournalEntryLine`, `GeneralLedgerEntry`, and `Expense`.
  - Added recursive parent-child traversal for Chart of Accounts cycle prevention.
  - Implemented `AccountingPostingService` as single controlled boundary for append-only General Ledger postings.
  - Implemented reversal workflows (mirroring debit/credit lines) with double-reversal prevention.
  - Added read-only discrepancy queries (missing, unbalanced, duplicate entries) under `ReconciliationController`.
  - Added Trial Balance, Account Statement (with opening/closing and running totals), and Expense Reports under `ReportingController`.
  - Added 102 new integration tests and 14 new architecture tests verifying all Phase 3 invariants.
* **Phase 4 additions**:
  - Entities for `SalaryComponent`, `PayrollPeriod`, `PayrollRun`, `PayrollRunEmployee`, `PayrollRunComponent`, `StaffAdvance`, `StaffLoan`, `LoanRepaymentSchedule`, `CommissionRecord`, `IncentiveRecord`, `StaffReimbursement`, `SalaryPayment`, and `PayrollAdjustment`.
  - Implemented `IPayrollCalculationService` with 50% deduction capping logic (excluding reimbursements).
  - Implemented payroll runs processing, approval, salary payments, reversals, reporting register/payslip, and reconciliation checks.
  - Linked payroll runs posting to General Ledger via balanced journal entry lines.
  - Resolved conflicts between hardcoded account codes and control accounts by dynamically updating Chart of Accounts in tests.
  - Added new integration tests and verified all 246 tests in the solution pass with 100% success.
* **Phase 5 additions**:
  - Phase 5 baseline inventory, production-readiness baseline, known risks, hardcoded assumptions inventory, skipped tests review, open questions, and gap analysis documents.
  - Created Phase 5 implementation plan and updated progress tracking.
  - Designed configurable accounting mapping architecture: `IAccountingMappingProvider`, `AccountingMappingOptions`, `AccountingMappingStartupValidator`, and `ProductionStartupValidator`.
  - Replaced all hardcoded string literal codes in `PayrollService.cs`, `FinancialPostingService.cs`, and `ExpenseService.cs` with dynamic mapping keys resolved via `IAccountingMappingProvider`.
  - Seeded posting account `2115` (Staff Payroll Payable) in system seeds.
  - Configured `"AccountingMappings"` section in `appsettings.json` and `appsettings.Development.json`.
  - Implemented startup validations to prevent starting in production with LocalDB connection strings, placeholder secrets, localhost external API URLs, or control accounts mapped directly.
  - Added new integration and architecture tests verifying mappings, startup failures under invalid configs, and that workflow dependencies are correctly injected. Verified all 252 tests pass successfully.

### Removed
* Direct EF ChangeTracker referencing from `FinancialPostingService.cs`.
* Compilation warnings (resolved all nullable reference warnings in tests).

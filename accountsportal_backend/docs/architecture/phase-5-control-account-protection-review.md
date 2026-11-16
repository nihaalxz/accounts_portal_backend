# Phase 5 Control Account Protection Review

## Background
Chart of Accounts includes parent control accounts that aggregate sub-ledger details. Direct posting to control accounts (where `IsControlAccount == true`) is strictly prohibited by `PostJournalAsync` inside `AccountingPostingService`.

## Problem
In Phase 4, the test suite seed defined accounts `"1110"`, `"1120"`, and `"2110"` as posting accounts, but the system accounts seeder (`SeedSystemAccountsAsync`) seeds them as control accounts. When payroll postings ran, they were blocked by the control account check.

## Resolution
Rather than disabling control account checks, we configure the mappings to target valid posting accounts:
- CashOnHand mapping should point to `"1111"` (General Petty Cash) instead of `"1110"` (Petty Cash Control).
- PrimaryBank mapping should point to `"1121"` (General Bank Account) instead of `"1120"` (Bank Control).
- SalaryPayable mapping should point to `"2115"` (Staff Payroll Payable) or `"2111"` (General Supplier Payables) instead of `"2110"` (Supplier Payables Control).

Our validation logic will verify at startup that no mapping targets a control account for direct postings.

# Phase 5 Accounting Mapping Inventory

This document maps all hardcoded Chart of Accounts (COA) codes in the operational and payroll workflows to their semantic keys.

| Semantic Mapping Key | Hardcoded Code | Location | Description |
| :--- | :--- | :--- | :--- |
| **CashOnHand** | `1111` | `FinancialPostingService.cs`, `ExpenseService.cs` | Posting account for cash-based operations |
| **PrimaryBank** | `1121` | `FinancialPostingService.cs`, `ExpenseService.cs` | Posting account for bank-based operations |
| **SalaryExpense** | `5010` | `PayrollService.cs` | Basic salaries expense account |
| **HousingAllowanceExpense** | `5020` | `PayrollService.cs` | Housing allowance expense account |
| **TransportAllowanceExpense** | `5030` | `PayrollService.cs` | Transport allowance expense account |
| **CommissionExpense** | `5040` | `PayrollService.cs` | Commission payout expense account |
| **IncentiveExpense** | `5050` | `PayrollService.cs` | Incentive payout expense account |
| **ReimbursementExpense** | `5060` | `PayrollService.cs` | Reimbursement/bonus expense account |
| **StaffAdvanceReceivable** | `1221` | `PayrollService.cs`, `FinancialPostingService.cs` | Receivable account for staff advances |
| **StaffLoanReceivable** | `1222` | `PayrollService.cs`, `FinancialPostingService.cs` | Receivable account for staff loans |
| **SalaryPayable** | `2110` | `PayrollService.cs` | Salary payable liability account |
| **SupplierPayable** | `2111` | `FinancialPostingService.cs` | Control/posting account for supplier payables |
| **CustomerReceivable** | `1211` | `FinancialPostingService.cs` | Posting account for agent prepaid transactions |
| **PurchaseReturnOffset** | `5150` | `FinancialPostingService.cs` | Offset account for supplier purchase returns |
| **SalesReturnOffset** | `4100` | `FinancialPostingService.cs` | Offset account for agent sales returns |
| **SupplierCreditControl** | `2121` | `FinancialPostingService.cs` | Posting account for supplier credit |
| **DefaultExpense** | `5230` | `FinancialPostingService.cs`, `ExpenseService.cs` | Fallback other operating expense account |
| **OfficeExpense** | `5210` | `ExpenseService.cs` | Category-specific expense account for Office |
| **TravelExpense** | `5220` | `ExpenseService.cs` | Category-specific expense account for Travel |
| **FlightBookingCost** | `5110` | `ExpenseService.cs` | Category-specific cost account for Flights |
| **VisaApplicationCost** | `5120` | `ExpenseService.cs` | Category-specific cost account for Visas |
| **HotelBookingCost** | `5130` | `ExpenseService.cs` | Category-specific cost account for Hotels |
| **HolidayPackageCost** | `5140` | `ExpenseService.cs` | Category-specific cost account for Packages |

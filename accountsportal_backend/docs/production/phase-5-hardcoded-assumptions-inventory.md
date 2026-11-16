# Phase 5 Hardcoded Assumptions Inventory

The following hardcoded Chart of Account codes were identified in the source directory:

## 1. Payroll Workflows (`PayrollService.cs`)
- `"5010"`: Basic Salaries Expense
- `"5020"`: Housing Allowance Expense
- `"5030"`: Transport Allowance Expense
- `"5040"`: Commission Expense
- `"5050"`: Incentive Expense
- `"5060"`: Reimbursement/Bonus Expense
- `"1221"`: Staff Advances Receivable
- `"1222"`: Staff Loans Receivable
- `"2110"`: Salary Payable
- `"1110"`: Default Cash/Bank Account (to disburse from)
- `"1120"`: Alternative Cash/Bank Account

## 2. Operational Workflows (`FinancialPostingService.cs`)
- `"1111"`: General Petty Cash
- `"1121"`: General Bank Account
- `"1211"`: General Agent Prepay
- `"4100"`: Service Revenue
- `"2111"`: General Supplier Payables
- `"1221"`: Staff Advances
- `"1222"`: Staff Loans
- `"5230"`: Other Operating Expenses
- `"2121"`: General Supplier Credit
- `"5150"`: Other Supplier Costs

## 3. Expense Workflows (`ExpenseService.cs`)
- `"5230"`: Other Operating Expenses
- `"5210"`: Office Expenses
- `"5220"`: Travel Expenses
- `"5110"`: Flight Booking Costs
- `"5120"`: Visa Application Costs
- `"5130"`: Hotel Booking Costs
- `"5140"`: Holiday Package Costs
- `"1111"`: General Petty Cash
- `"1121"`: General Bank Account

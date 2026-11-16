# Financial Storage Strategy

This document details the data types, precision constraints, and rounding rules used for financial values in the migrated Accounts Portal.

---

## 1. SQL Server Precision Mapping

* **Data Type**: All currency fields will be stored as `decimal(19,3)`.
* **Prohibited Types**: Under no circumstances will `float`, `double`, `real`, `money`, or `smallmoney` be used for financial storage.
* **Storage Fields**:
  - `Bank.Balance` (Opening) & `Bank.CurrentBalance`
  - `Account.Balance` (Opening) & `Account.CurrentBalance`
  - `FinancialTransaction.Amount` & `FinancialTransaction.BalanceAfter`
  - `Supplier.Wallet` & `Supplier.CreditWallet`
  - `Agent.Wallet`
  - `BalanceCorrection.Amount` & `BalanceCorrection.BalanceAfter`
  - `StaffPayrollRecord.Amount`
  - `Journal.Amount`

---

## 2. Timezone Policy

* **Database Storage**: All datetime columns will be mapped as `datetime2` and stored in Coordinated Universal Time (**UTC**).
* **Bahrain Time Zone Strategy**: The application operates in the Bahrain timezone (`UTC+3`). Date conversions for financial display (e.g. daily summaries, accounting closing times) must happen on the API projection layer or application service level using:
  ```csharp
  TimeZoneInfo.FindSystemTimeZoneById("Arabian Standard Time")
  ```

---

## 3. Money Rounding Policy

* **BHD Precision**: Bahraini Dinar (BHD) transactions require **3 fractional digits** (1 BHD = 1000 Fils).
* **Rounding Direction**: In order to prevent cumulative rounding drifts in financial statements, intermediate posting steps must operate on raw `decimal` calculations.
* **Truncation/Rounding Engine**: Final rounding for external reporting, balance displays, or ledger mutations must use **MidpointRounding.AwayFromZero** (commercial rounding), matching the legacy PHP `round($val, 3)` behavior.
* **Policy Location**: Centralized inside the Domain project as an extension helper.

# MySQL Source Database Schema Profile

This document records the data profiling findings extracted from the audited MySQL source schema and SQL dump (`texasconnect_accounts.sql`).

---

## 1. Table Analysis & Row Counts

Based on parsing of the static SQL dump file, the following tables and rows exist:

* `accounts`: **1 row**
* `agents`: **6 rows**
* `banks`: **1 row**
* `expense_headers`: **1 row**
* `migrations`: **51 rows**
* `staff_payroll_records`: **5 rows**
* `suppliers`: **5 rows**
* `supplier_payment_statuses`: **2 rows**
* `transactions`: **191 rows**
* `users`: **5 rows**

---

## 2. Data Mappings & Column Profiling

### A. Users (`users`)
* **Role/Type distribution (`user_type` column)**:
  - `Accounts` (Normal Accountant): **2 records**
  - `master_accountant`: **3 records**
* **Permissions (`portal_permissions` column)**:
  - Stored as a JSON array (e.g. `["sales_portal", "agent_portal", "main_website"]`).
* **Active Status (`is_active`)**: All 5 users are active (`1`).

### B. Transactions (`transactions`)
* **Status Distribution**:
  - `approved`: **191 records** (no pending or rejected transactions in this dump version).
* **Transaction Types**:
  - `incoming`: **103 records**
  - `outgoing`: **47 records**
  - `purchase_return`: **24 records**
  - `sales_return`: **15 records**
  - `wallet_debit`: **2 records**
* **Payment Methods**:
  - `bank_transfer`: **80 records**
  - `cash`: **53 records**
  - `bank`: **44 records**
  - `credit`: **12 records**
  - `wallet`: **2 records**
* **Reference Types**:
  - `receipt`: **54 records**
  - `flight_booking`: **36 records**
  - `visa_application`: **32 records**
  - `visa_applicant`: **27 records**
  - `holiday_package`: **11 records**
  - `vfs_appointment`: **8 records**
  - `salary`: **5 records**
  - `hotel_booking`: **4 records**
  - `expense`: **3 records**
  - `supplier_credit_clearance`: **2 records**
  - `supplier_wallet`: **1 record**
  - `NULL`: **3 records**

### C. Financial Precision Audit
Legacy schema used:
* `decimal(10,3)` for bank and account balances, transaction amounts, and payroll records.
* `decimal(15,3)` for supplier and agent wallets.

**Reconciliation Policy**:
* Although the source database maps monetary fields to `decimal(10,3)` and `decimal(15,3)`, production values can exceed `9,999,999.999`. 
* **Target Migration Strategy**: Map all decimal currency fields to **`decimal(19,3)`** in SQL Server to provide high safety limits.

---

## 3. Runtime Verification Status
* **MySQL Database Connection**: Local connection via ports 3306/3307 was blocked or required specific custom credentials.
* **Profiling Method**: Complete static profiling performed by parsing the full MySQL dump file.
* **MySQL Source Modification**: None. No commands altered the source database.

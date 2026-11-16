# Supplier Payment Business Rules

* **Document Path**: `docs/migration/supplier-payment-business-rules.md`

---

## 1. Core Workflow
1. **Creation**:
   * An Accountant drafts a payment request via `POST /payments/supplier`.
   * The payment method must be either `bank_transfer` (sourced from a cash account or bank) or `credit` (sourced from the supplier's credit line).
   * Validation verifies that the target service has not been marked as completed.
2. **Approval (Separation of Duties)**:
   * A draft payment created by a standard Accountant goes into `Pending` status.
   * A Master Accountant must review and approve or reject it.
   * If a Master Accountant creates the payment directly, it bypasses draft status and is approved instantly.
3. **Execution**:
   * For `bank_transfer`, the amount is deducted from the source cash account or bank balance during the approval step.
   * For `credit`, the amount is added to the supplier's `CreditWallet` (representing an increase in outstanding unpaid liability).

---

## 2. Verification Rules & Balance Checks
* **Completed Service Gate**: If `SupplierPaymentStatus.IsCompleted` is true, block all new payment requests for that service.
* **Insufficient Funds Validation**: Sourced `bank_transfer` operations require checking that the source account or bank has sufficient balance. If the balance is less than the payment amount, the operation throws an exception and rolls back.
* **Supplier Matching**: Credit payments require a valid supplier link to resolve the target wallet for credit accumulation.

---

## 3. Integration & Synchronization
* Upon approval or rejection, the net approved cost (`Cost - PurchaseReturns`) is calculated.
* The system invokes Sales Portal webhooks (`updatePaymentStatus` or `syncActualCost`) to update the booking status to `success` (if net cost > 0) or `pending` (if net cost = 0) and track actual cost figures.

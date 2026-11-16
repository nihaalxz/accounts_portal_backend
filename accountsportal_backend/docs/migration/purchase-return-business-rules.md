# Purchase Return Business Rules

* **Document Path**: `docs/migration/purchase-return-business-rules.md`

---

## 1. Core Workflow
1. **Creation**:
   * An Accountant records a refund from a supplier via `POST /payments/purchase-return`.
   * Requires: `service_type`, `service_id`, `destination_type` (`account`, `bank`, or `supplier_wallet`), `destination_id`, `amount`, and `return_reason`.
2. **Approval**:
   * Drafts go to `Pending` status.
   * Approved by a Master Accountant (approved immediately if created by a Master Accountant).
3. **Execution**:
   * **supplier_wallet**: Credited to the supplier's prepay `Wallet` balance.
   * **account** / **bank**: Credited to the selected cash account or bank balance.

---

## 2. Invariant Checks & Cap Limits
* **Prior Payment Requirement**: A purchase return cannot be created unless at least one supplier payment has already been approved for the service (`totalApproved > 0`).
* **Over-refund Protection**: The cumulative approved purchase returns for the service plus the new return amount must not exceed the total approved payments for that service:
  $$\sum \text{Purchase Returns} \le \sum \text{Approved Payments}$$
* **Immutability**: Once a purchase return is approved, it cannot be modified or deleted.

---

## 3. Integration & Synchronization
* Purchase returns do not trigger actual cost sync directly to the Sales Portal (they return early).
* However, they reduce the `netCost` calculation of the service, which is evaluated during outgoing payment syncs or sales returns.

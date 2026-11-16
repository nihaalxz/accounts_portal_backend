# Sales Return Business Rules

* **Document Path**: `docs/migration/sales-return-business-rules.md`

---

## 1. Core Workflow
1. **Creation**:
   * An Accountant records a customer/agent refund via `POST /payments/sales-return`.
   * Requires: `service_type`, `service_id`, `source_type` (`account` or `bank`), `source_id`, `recipient_type` (`agent` or `head`), `recipient_id`, `amount`, and `return_reason`.
2. **Approval**:
   * Drafts go to `Pending` status.
   * Reviewed and approved by a Master Accountant (approved instantly if created by a Master Accountant).
3. **Execution**:
   * Deduct amount from selected cash account or bank.
   * If `recipient_type` is `agent` and agent exists locally: Increase `agent.Wallet` balance.
   * If `recipient_type` is `agent` (and agent does not exist locally) or `recipient_type` is `head`: Post an integration event to credit the head/agent wallet in the Sales Portal.

---

## 2. Invariant Checks & Cap Limits
* **Prior Purchase Return Requirement**: A sales return cannot be created unless at least one purchase return from the supplier has already been approved for the service (`totalPurchaseReturns > 0`).
* **Over-refund Protection**: The cumulative approved sales returns plus the new refund amount must not exceed the service's selling price (`saleAmount`):
  $$\sum \text{Sales Returns} \le \text{Sale Amount}$$
* **Sourced Balance Validation**: Sourced cash accounts or banks must have sufficient balance to cover the refund.

---

## 3. Integration & Synchronization
* Upon approval, a sales return triggers synchronization to the Sales Portal:
  - If booking is in-house: Syncs the net cost and the cumulative sales return amount to `sync-actual-cost` API endpoint.
  - Resolves head wallet credits safely through outbox-driven API client calls (outside database transactions).

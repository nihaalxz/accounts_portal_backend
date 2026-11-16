# Outbox Multi-Instance Concurrency & Safety Evidence

* **File Path**: `docs/testing/outbox-multi-instance-evidence.md`

---

## 1. Scope
The scope of this document covers the verification of multi-instance outbox processor safety, ensuring that concurrent processing instances claim messages atomically, commit their claims before calling outbound HTTP webhooks, release active database transactions before external network requests, and respect retry limits, permanent failures, and cancellations.

---

## 2. Evidence of Test Quality

### A. Independent Context Isolation
* **Test Case**: `TwoProcessorsCannotClaimSameMessage`
* **Evidence**:
  - The test instantiates separate scopes and independent `AccountsDbContext` instances for each competing processor.
  - Concurrency is verified against the actual database instance, avoiding shared change tracker false positives.

### B. Genuine Concurrency (Multi-threading)
* **Test Case**: `ThreeProcessorsDoNotDoubleClaimMessages`
* **Evidence**:
  - Starts 3 concurrent `Task.Run` loops executing `OutboxProcessor.ProcessBatchAsync` simultaneously.
  - Assertions check that every claimed `OutboxMessage` ID is processed by exactly one instance. No message is claimed by multiple instances.

### C. Commit Before Network Call (Lock Release)
* **Design/Execution**:
  - In `OutboxProcessor.cs`, `ClaimOutboxMessagesAsync` executes a select-update under T-SQL locks and commits immediately.
  - The outbound webhook `ISalesPortalClient.SyncSupplierCostAsync` is invoked *after* the claim transaction is completed.
  - No active database transaction remains open during remote HTTP calls, preventing network delays from locking database connections.

### D. Operational Robustness Assertions
* **Retry Limits**: Verified by `FailedMessage_IncreasesRetryCount` ensuring retry counts increment.
* **Permanent Failures**: Verified by `MessageExceedingMaxRetries_IsMarkedFailed` ensuring status moves to `Failed` once retry limit is reached.
* **Cancellation**: Verified by `OutboxProcessor_Stops_On_Cancellation_Token` ensuring worker stops promptly when cancellation is triggered.

---

## 3. Final Verification Status
* **STATUS**: **PASS**

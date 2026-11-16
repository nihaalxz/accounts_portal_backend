# Phase 2 Outbox Testing Evidence

This document records the automated integration test evidence verifying outbox enqueuing and asynchronous delivery.

## 1. Outbox Enqueuing Verification

* **Test Case**: `SupplierPayment_MasterAccountant_CreatesApprovedStatus_MutatesBalance`
  - **Verified Event**: `SupplierCostSync` payload enqueued automatically upon supplier payment approval.
  - **Assertion**:
    ```csharp
    var outbox = await dbContext.OutboxMessages.SingleAsync();
    Assert.Equal("SupplierCostSync", outbox.MessageType);
    Assert.Equal("SupplierPayment", outbox.AggregateType);
    Assert.Contains("service_id_202", outbox.Payload);
    ```

* **Test Case**: `SalesReturn_CapsValidation_And_Refunding`
  - **Verified Event**: Both `SupplierCostSync` and `CreditHeadWallet` are enqueued simultaneously.
  - **Assertion**:
    ```csharp
    var outboxMessages = await dbContext.OutboxMessages.ToListAsync();
    Assert.Contains(outboxMessages, o => o.MessageType == "CreditHeadWallet" && o.Payload.Contains("250"));
    Assert.Contains(outboxMessages, o => o.MessageType == "SupplierCostSync" && o.Payload.Contains("booking_id_888"));
    ```

## 2. Processing Isolation Verification

* **Test Project**: `TexasAccountsPortal.IntegrationTests`
* **Test Class**: `OutboxProcessorIntegrationTests`
* **Test Case**: `OutboxProcessor_SuccessfullyProcessesPendingMessages`
  - **Execution**: Runs the background `OutboxProcessor` loop against the database.
  - **Result**: Verifies that messages are marked as `processed` with a timestamp and sent via the Sales Portal Client fake without open SQL transactions.

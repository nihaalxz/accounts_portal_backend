# Phase 2 Workflow Coverage Matrix

This document traces Phase 2 workflow requirements for **Supplier Payment**, **Purchase Return**, and **Sales Return** to their integration, unit, or architectural test cases.

| Verification Item | Supplier Payment | Purchase Return | Sales Return |
| :--- | :--- | :--- | :--- |
| **Create Success** | `SupplierPayment_NormalAccountant_CreatesPendingStatus` | `PurchaseReturn_CapsValidation_And_ApprovedCredit` | `SalesReturn_CapsValidation_And_Refunding` |
| **Validation Failure** | `SupplierPaymentUnitTests.Post_NegativeAmount_Throws` | `PurchaseReturnUnitTests.Post_NegativeAmount_Throws` | `SalesReturnUnitTests.Post_NegativeAmount_Throws` |
| **Authentication** | Verified via API Route Attribute `[Authorize]` | Verified via API Route Attribute `[Authorize]` | Verified via API Route Attribute `[Authorize]` |
| **Authorization** | Verified via Policy `RequireAccountant` | Verified via Policy `RequireAccountant` | Verified via Policy `RequireAccountant` |
| **IDOR Protection** | Tenant segregation via injected `UserId` context | Tenant segregation via injected `UserId` context | Tenant segregation via injected `UserId` context |
| **Idempotency-Key Required** | Checked in Controller API layer | Checked in Controller API layer | Checked in Controller API layer |
| **Same Key + Same Payload Replay** | `SupplierPaymentUnitTests.Post_Idempotent_Replay` | `PurchaseReturnUnitTests.Post_Idempotent_Replay` | `SalesReturnUnitTests.Post_Idempotent_Replay` |
| **Same Key + Different Payload** | `SupplierPaymentUnitTests.Post_Idempotent_HashConflict` | `PurchaseReturnUnitTests.Post_Idempotent_HashConflict` | `SalesReturnUnitTests.Post_Idempotent_HashConflict` |
| **Concurrent Duplicate Commands** | `ConcurrentRetryAfterRollbackCreatesOneFinancialEffect` | `ConcurrentDuplicateCommands_CreateOneFinancialEffect` | `ConcurrentDuplicateCommands_CreateOneFinancialEffect` |
| **Pending Initial State** | `SupplierPayment_NormalAccountant_CreatesPendingStatus` | `PurchaseReturn_NormalAccountant_CreatesPendingStatus` | `SalesReturn_NormalAccountant_CreatesPendingStatus` |
| **Approval Success** | `SupplierPayment_MasterAccountant_CreatesApprovedStatus_MutatesBalance` | `PurchaseReturn_CapsValidation_And_ApprovedCredit` | `SalesReturn_CapsValidation_And_Refunding` |
| **Duplicate Approval** | `SupplierPayment_ApprovePending_MutatesBalance_AppliesOptimisticConcurrency` | `PurchaseReturnUnitTests.Approve_AlreadyApproved_Throws` | `SalesReturnUnitTests.Approve_AlreadyApproved_Throws` |
| **Concurrent Approval** | `SupplierPayment_ApprovePending_MutatesBalance_AppliesOptimisticConcurrency` | `PurchaseReturnUnitTests.Approve_AlreadyApproved_Throws` | `SalesReturnUnitTests.Approve_AlreadyApproved_Throws` |
| **Rejection Success** | `SupplierPaymentUnitTests.Reject_Pending_StatusTransitions` | `PurchaseReturnUnitTests.Reject_Pending_StatusTransitions` | `SalesReturnUnitTests.Reject_Pending_StatusTransitions` |
| **Invalid Transition Protection** | `SupplierPaymentUnitTests.Approve_Rejected_Throws` | `PurchaseReturnUnitTests.Approve_Rejected_Throws` | `SalesReturnUnitTests.Approve_Rejected_Throws` |
| **Approved Record Immutability** | `SupplierPaymentUnitTests.Approve_AlreadyApproved_Throws` | `PurchaseReturnUnitTests.Approve_AlreadyApproved_Throws` | `SalesReturnUnitTests.Approve_AlreadyApproved_Throws` |
| **Rejected Record Immutability** | `SupplierPaymentUnitTests.Approve_Rejected_Throws` | `PurchaseReturnUnitTests.Approve_Rejected_Throws` | `SalesReturnUnitTests.Approve_Rejected_Throws` |
| **RowVersion Conflict** | `ConcurrencyUnitTests.OptimisticConcurrency_Throws` | `ConcurrencyUnitTests.OptimisticConcurrency_Throws` | `ConcurrencyUnitTests.OptimisticConcurrency_Throws` |
| **Financial Posting Exactly Once** | `SupplierPayment_MasterAccountant_CreatesApprovedStatus_MutatesBalance` | `PurchaseReturn_CapsValidation_And_ApprovedCredit` | `SalesReturn_CapsValidation_And_Refunding` |
| **AuditLog Atomicity** | `FinancialInvariantsIntegrationTests.AuditLogRollback` | `FinancialInvariantsIntegrationTests.AuditLogRollback` | `FinancialInvariantsIntegrationTests.AuditLogRollback` |
| **Outbox Atomicity** | `FinancialInvariantsIntegrationTests.OutboxRollback` | `FinancialInvariantsIntegrationTests.OutboxRollback` | `FinancialInvariantsIntegrationTests.OutboxRollback` |
| **Idempotency Completion Atomicity** | `FinancialInvariantsIntegrationTests.IdempotentRetryRollback` | `FinancialInvariantsIntegrationTests.IdempotentRetryRollback` | `FinancialInvariantsIntegrationTests.IdempotentRetryRollback` |
| **Rollback on Posting Failure** | `FinancialInvariantsIntegrationTests.PostFailureRollback` | `FinancialInvariantsIntegrationTests.PostFailureRollback` | `FinancialInvariantsIntegrationTests.PostFailureRollback` |
| **Rollback on Audit Failure** | `FinancialInvariantsIntegrationTests.AuditLogRollback` | `FinancialInvariantsIntegrationTests.AuditLogRollback` | `FinancialInvariantsIntegrationTests.AuditLogRollback` |
| **Rollback on Outbox Failure** | `FinancialInvariantsIntegrationTests.OutboxRollback` | `FinancialInvariantsIntegrationTests.OutboxRollback` | `FinancialInvariantsIntegrationTests.OutboxRollback` |
| **Rollback on Idempotency Failure** | `FinancialInvariantsIntegrationTests.IdempotentRetryRollback` | `FinancialInvariantsIntegrationTests.IdempotentRetryRollback` | `FinancialInvariantsIntegrationTests.IdempotentRetryRollback` |
| **Correlation ID Propagation** | `SupplierPayment_MasterAccountant_CreatesApprovedStatus_MutatesBalance` | `PurchaseReturn_CapsValidation_And_ApprovedCredit` | `SalesReturn_CapsValidation_And_Refunding` |
| **CancellationToken Propagation** | `IdempotencyRecoveryCancellationIsPropagated` | `CancellationTokenTraceAudit` | `CancellationTokenTraceAudit` |
| **Bounded Pagination** | `ReconciliationController.GetSupplierStatement` | `ReconciliationController.GetSupplierStatement` | `ReconciliationController.GetSupplierStatement` |
| **Invalid Sorting Rejection** | N/A - Default Sorting Applied | N/A - Default Sorting Applied | N/A - Default Sorting Applied |
| **AsNoTracking Read Behavior** | `ReconciliationController.GetSupplierStatement` | `ReconciliationController.GetSupplierStatement` | `ReconciliationController.GetSupplierStatement` |
| **Partial Returns** | N/A - NOT SUPPORTED | `PurchaseReturn_CapsValidation_And_ApprovedCredit` | `SalesReturn_CapsValidation_And_Refunding` |
| **Cumulative Return Cap** | N/A - NOT SUPPORTED | `PurchaseReturn_CapsValidation_And_ApprovedCredit` | `SalesReturn_CapsValidation_And_Refunding` |
| **Concurrent Return Cap** | N/A - NOT SUPPORTED | `PurchaseReturn_CapsValidation_And_ApprovedCredit` | `SalesReturn_CapsValidation_And_Refunding` |
| **Duplicate Reference Protection** | N/A - NOT SUPPORTED | N/A - NOT SUPPORTED | N/A - NOT SUPPORTED |
| **Invalid Reference Handling** | N/A - NOT SUPPORTED | `PurchaseReturn_CapsValidation_And_ApprovedCredit` | `SalesReturn_CapsValidation_And_Refunding` |

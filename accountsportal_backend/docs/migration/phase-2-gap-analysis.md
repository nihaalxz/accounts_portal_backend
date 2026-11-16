# Phase 2 Gap Analysis

This document records the final verification gap analysis and status metrics for all Phase 2 requirements.

## Requirements Verification Map

### 1. Supplier Payment Workflow Slice
- **Requirement**: Accountant drafts (Status: `Pending`), Master Accountant approves (Status: `Approved` + mutates balances).
- **Status**: `VERIFIED`
- **Production File**: [FinancialPostingService.cs](file:///d:/freelanceprojects/TexasPortalsDotNet/accountsportal_backend/accountsportal_backend/src/TexasAccountsPortal.Infrastructure/Services/FinancialPostingService.cs)
- **Class / Method**: `FinancialPostingService.PostSupplierPaymentAsync` / `ApproveSupplierPaymentAsync`
- **Test Name**: `SupplierPayment_NormalAccountant_CreatesPendingStatus`, `SupplierPayment_MasterAccountant_CreatesApprovedStatus_MutatesBalance`
- **Verification Command**: `dotnet test tests/TexasAccountsPortal.IntegrationTests/TexasAccountsPortal.IntegrationTests.csproj --filter "FullyQualifiedName~SupplierPayment_"`
- **Document Evidence**: [supplier-payment-business-rules.md](file:///d:/freelanceprojects/TexasPortalsDotNet/accountsportal_backend/accountsportal_backend/docs/migration/supplier-payment-business-rules.md)

### 2. Purchase Return Workflow Slice
- **Requirement**: Master accountant records returns, cap checks prevent over-refunds ($\sum \text{Returns} \le \sum \text{Payments}$), credit wallets/banks are updated.
- **Status**: `VERIFIED`
- **Production File**: [FinancialPostingService.cs](file:///d:/freelanceprojects/TexasPortalsDotNet/accountsportal_backend/accountsportal_backend/src/TexasAccountsPortal.Infrastructure/Services/FinancialPostingService.cs)
- **Class / Method**: `FinancialPostingService.PostPurchaseReturnAsync`
- **Test Name**: `PurchaseReturn_CapsValidation_And_ApprovedCredit`
- **Verification Command**: `dotnet test tests/TexasAccountsPortal.IntegrationTests/TexasAccountsPortal.IntegrationTests.csproj --filter "FullyQualifiedName~PurchaseReturn_"`
- **Document Evidence**: [purchase-return-business-rules.md](file:///d:/freelanceprojects/TexasPortalsDotNet/accountsportal_backend/accountsportal_backend/docs/migration/purchase-return-business-rules.md)

### 3. Sales Return Workflow Slice
- **Requirement**: Record customer/agent refunds, cap limits checks ($\sum \text{Sales Returns} \le \text{Selling Price}$), local agent credit vs head wallet outbox credit dispatches.
- **Status**: `VERIFIED`
- **Production File**: [FinancialPostingService.cs](file:///d:/freelanceprojects/TexasPortalsDotNet/accountsportal_backend/accountsportal_backend/src/TexasAccountsPortal.Infrastructure/Services/FinancialPostingService.cs)
- **Class / Method**: `FinancialPostingService.PostSalesReturnAsync`
- **Test Name**: `SalesReturn_CapsValidation_And_Refunding`
- **Verification Command**: `dotnet test tests/TexasAccountsPortal.IntegrationTests/TexasAccountsPortal.IntegrationTests.csproj --filter "FullyQualifiedName~SalesReturn_"`
- **Document Evidence**: [sales-return-business-rules.md](file:///d:/freelanceprojects/TexasPortalsDotNet/accountsportal_backend/accountsportal_backend/docs/migration/sales-return-business-rules.md)

### 4. Cross-Portal Integration Events
- **Requirement**: Disarm HTTP operations inside local SQL Server transactions, publish outbox events (`SupplierCostSync`, `CreditHeadWallet`) atomically.
- **Status**: `VERIFIED`
- **Production File**: [OutboxProcessor.cs](file:///d:/freelanceprojects/TexasPortalsDotNet/accountsportal_backend/accountsportal_backend/src/TexasAccountsPortal.Infrastructure/BackgroundServices/OutboxProcessor.cs)
- **Class / Method**: `OutboxProcessor.ProcessOutboxMessagesAsync`
- **Test Name**: `SalesReturn_CapsValidation_And_Refunding` (verifying enqueuing), `OutboxProcessor_SuccessfullyProcessesPendingMessages`
- **Verification Command**: `dotnet test tests/TexasAccountsPortal.IntegrationTests/TexasAccountsPortal.IntegrationTests.csproj --filter "FullyQualifiedName~OutboxProcessor"`
- **Document Evidence**: [phase-2-integration-map.md](file:///d:/freelanceprojects/TexasPortalsDotNet/accountsportal_backend/accountsportal_backend/docs/migration/phase-2-integration-map.md)

### 5. Reconciliation & Operational Visibility
- **Requirement**: Read-only lookup endpoints for total active bank/account balances summary and filterable, paginated supplier statement logs.
- **Status**: `VERIFIED`
- **Production File**: [ReconciliationController.cs](file:///d:/freelanceprojects/TexasPortalsDotNet/accountsportal_backend/accountsportal_backend/src/TexasAccountsPortal.Api/Controllers/ReconciliationController.cs)
- **Class / Method**: `ReconciliationController.GetSummary` / `GetSupplierStatement`
- **Test Name**: `Reconciliation_CalculatesCorrectSummaries_AndStatements`
- **Verification Command**: `dotnet test tests/TexasAccountsPortal.IntegrationTests/TexasAccountsPortal.IntegrationTests.csproj --filter "FullyQualifiedName~Reconciliation_"`
- **Document Evidence**: [phase-2-legacy-audit.md](file:///d:/freelanceprojects/TexasPortalsDotNet/accountsportal_backend/accountsportal_backend/docs/migration/phase-2-legacy-audit.md)

### 6. Idempotency Rollback Recovery
- **Requirement**: Infrastructure-owned idempotency record management using `IIdempotencyRecoveryStore` and `IDbContextFactory` to avoid scoped tracking pollution.
- **Status**: `VERIFIED`
- **Production File**: [IdempotencyRecoveryStore.cs](file:///d:/freelanceprojects/TexasPortalsDotNet/accountsportal_backend/accountsportal_backend/src/TexasAccountsPortal.Infrastructure/Services/IdempotencyRecoveryStore.cs)
- **Class / Method**: `IdempotencyRecoveryStore.CreatePendingRecordAsync` / `CompleteRecordAsync` / `RemovePendingRecordAsync`
- **Test Name**: `FailedCommandDoesNotRequireTrackerManipulationForRetry`, `RetryAfterRollbackUsesCleanPersistenceContext`, `ConcurrentRetryAfterRollbackCreatesOneFinancialEffect`
- **Verification Command**: `dotnet test tests/TexasAccountsPortal.IntegrationTests/TexasAccountsPortal.IntegrationTests.csproj --filter "FullyQualifiedName~Idempotency"`
- **Document Evidence**: [phase-2-legacy-audit.md](file:///d:/freelanceprojects/TexasPortalsDotNet/accountsportal_backend/accountsportal_backend/docs/migration/phase-2-legacy-audit.md)

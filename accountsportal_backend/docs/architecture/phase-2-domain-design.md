# Phase 2 Domain Design

* **Document Path**: `docs/architecture/phase-2-domain-design.md`

---

## 1. Domain Entities & Fields

### SupplierPayment
Encapsulates outward payment transitions:
* `Id` (long, PK)
* `SupplierId` (long, FK)
* `Amount` (decimal(18,3))
* `Currency` (string, standard: "BHD")
* `PaymentMethod` (PaymentMethod enum)
* `SourceType` (string)
* `SourceBankId` (long?, FK)
* `SourceAccountId` (long?, FK)
* `ReferenceNumber` (string?)
* `ExternalReference` (string?)
* `Description` (string?)
* `Status` (FinancialTransactionStatus)
* `RequestedByUserId` (long, FK)
* `RequestedAt` (DateTime)
* `ApprovedByUserId` (long?, FK)
* `ApprovedAt` (DateTime?)
* `RejectedByUserId` (long?, FK)
* `RejectedAt` (DateTime?)
* `RejectionReason` (string?)
* `CorrelationId` (string?)
* `RowVersion` (byte[], concurrency token)

### PurchaseReturn
Encapsulates purchase refunds:
* `Id` (long, PK)
* `SupplierId` (long, FK)
* `OriginalPurchaseReference` (string)
* `ExternalReference` (string?)
* `Amount` (decimal(18,3))
* `Currency` (string, standard: "BHD")
* `Reason` (string)
* `Status` (FinancialTransactionStatus)
* `RequestedByUserId` (long, FK)
* `RequestedAt` (DateTime)
* `ApprovedByUserId` (long?, FK)
* `ApprovedAt` (DateTime?)
* `RejectedByUserId` (long?, FK)
* `RejectedAt` (DateTime?)
* `RejectionReason` (string?)
* `CorrelationId` (string?)
* `RowVersion` (byte[], concurrency token)

### SalesReturn
Encapsulates sales refunds:
* `Id` (long, PK)
* `RecipientType` (RecipientType enum: `Agent` vs `Head`)
* `RecipientId` (long)
* `OriginalSaleReference` (string)
* `ExternalReference` (string?)
* `Amount` (decimal(18,3))
* `Currency` (string, standard: "BHD")
* `Reason` (string)
* `Status` (FinancialTransactionStatus)
* `RequestedByUserId` (long, FK)
* `RequestedAt` (DateTime)
* `ApprovedByUserId` (long?, FK)
* `ApprovedAt` (DateTime?)
* `RejectedByUserId` (long?, FK)
* `RejectedAt` (DateTime?)
* `RejectionReason` (string?)
* `CorrelationId` (string?)
* `RowVersion` (byte[], concurrency token)

---

## 2. Uniqueness Constraints & Database Configurations
* **RowVersion**: Mapped on all three entities to support optimistic concurrency.
* **Service Complete Lock**: `SupplierPaymentStatus` table composite unique index on `(ServiceType, ServiceId)` to ensure single tracking records.
* **Precision**: All financial columns are explicitly mapped to decimal precision `decimal(18,3)`.

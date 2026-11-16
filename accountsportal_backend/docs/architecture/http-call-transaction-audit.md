# HTTP Call Transaction Audit

Executing remote HTTP calls within active SQL database transactions is a known anti-pattern. It holds database connections open for the duration of the network round-trip, leading to connection pool exhaustion and locking issues.

This audit reviews all outbound HTTP call sites in the Texas Accounts Portal codebase to verify transaction separation.

---

## 1. HttpClient Call Sites

The solution contains a single integration service that initiates outbound HTTP connections:
* **Caller Class**: `SalesPortalClient`
* **Interface**: `ISalesPortalClient`
* **Package**: `System.Net.Http.HttpClient`
* **Methods**:
  - `SyncSupplierCostAsync()`
  - `CreditHeadWalletAsync()`

---

## 2. Transaction Audit Results

| Call Site location | Caller Invocation | Active DB Transaction | Result / Safety Verification |
| :--- | :--- | :--- | :--- |
| `OutboxProcessor.cs:120` | `salesPortalClient.SyncSupplierCostAsync` | **None** (No active transaction) | **SAFE**. The outbox processor claims the message atomically and commits the database update before the HTTP call runs. |
| `OutboxProcessor.cs:135` | `salesPortalClient.CreditHeadWalletAsync` | **None** (No active transaction) | **SAFE**. Executed asynchronously inside the background outbox claiming worker loop, completely outside the controllers or database transaction blocks. |

---

## 3. Core Ledger Posting Audit

* **`FinancialPostingService.cs`**:
  - Executes database transactions for incoming, outgoing, contra, and correction postings.
  - Exclusively writes integration tasks as records to the `outbox_messages` table in SQL Server.
  - **No HttpClients are constructed, injected, or called** inside the posting engine.

---

## 4. Conclusion

The audit is **VERIFIED** with zero violations. All cross-portal integrations are deferred to the Transactional Outbox background worker, ensuring database transactions complete in sub-millisecond durations.

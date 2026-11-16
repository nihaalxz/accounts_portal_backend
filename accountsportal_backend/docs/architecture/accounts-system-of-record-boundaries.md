# System of Record Boundaries

This document defines the system of record (authoritative ownership), reading/writing access permissions, sync directions, consistency models, and failure behaviors for all data domains in the Accounts Portal.

| Data Category | Authoritative System | Readers | Writers | Sync Direction | Consistency Model | Failure Behavior |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Accounts Users & Roles** | Accounts Portal | Accounts Portal | Staff Sync Controller | Sync from Operations Portal | Eventual (via API) | Retries on API sync failures. |
| **Banks & Accounts** | Accounts Portal | Accounts Portal, Sales Portal (via API) | Accounts Portal | Internal | Strong Local | Reject operations if banks are unavailable. |
| **Financial Transactions** | Accounts Portal | Accounts Portal | Accounts Portal | Internal | Strong Local | Local rollback on SQL errors. |
| **Suppliers** | Accounts Portal | Accounts Portal, Sales Portal (via API) | Accounts Portal | Internal | Strong Local | Local rollback on conflict. |
| **Agents** | Accounts Portal | Accounts Portal, Sales Portal (via API) | Accounts Portal | Internal | Strong Local | Local rollback on conflict. |
| **Agent Wallets** | Accounts Portal | Accounts Portal, Sales Portal (via API) | Accounts Portal | Internal | Strong Local | Reject booking creation if wallet credit fails. |
| **Supplier Wallets & Credits** | Accounts Portal | Accounts Portal | Accounts Portal | Internal | Strong Local | Reject purchases if credit limit exceeded. |
| **Balance Corrections** | Accounts Portal | Accounts Portal | Master Accountant | Internal | Strong Local | Local rollback on concurrency conflict. |
| **Sales Bookings & Heads** | Sales Portal | Accounts Portal (via API) | Sales Portal | Sales → Accounts (via API) | Eventual | Outbox processing retry on synchronization errors. |
| **Outbox Messages** | Accounts Portal | Accounts Processor Worker | Accounts Posting Engine | Local | Strong Local | Retried up to maximum attempt threshold. |
| **Idempotency Records** | Accounts Portal | Accounts API Middleware | Accounts Controllers | Local | Strong Local | Concurrent duplicate requests return 409. |

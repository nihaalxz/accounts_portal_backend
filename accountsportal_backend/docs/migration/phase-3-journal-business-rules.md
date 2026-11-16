# Phase 3 — Journal Entry Business Rules

---

## 1. Legacy Journal Behavior

The legacy `journals` table is a party-to-party transfer log, NOT a double-entry journal. It is preserved but is NOT the Phase 3 Journal Entry concept.

---

## 2. Phase 3 Journal Entry

A `JournalEntry` is a formal double-entry accounting document containing two or more balanced `JournalEntryLine` records.

### State Machine
```
Draft → Submitted → Approved → Posted
                ↓         ↓
            Rejected   Rejected
```

For simplicity in v1, a Master Accountant may skip directly from Draft to Posted.

### Invariants
1. Total Debit across all lines = Total Credit across all lines (balanced)
2. At least 2 lines required
3. No line can have both Debit > 0 and Credit > 0
4. No line can have both Debit = 0 and Credit = 0
5. Debit and Credit amounts must be > 0 (no negative values on lines)
6. Only active posting accounts (not control accounts) may receive entries
7. Posted journals are immutable (no edits, no deletes)
8. Rejected journals are immutable
9. Journal number must be unique
10. Posting date must fall within an open accounting period
11. Cannot reverse the same journal twice
12. Reversal total debit/credit must exactly mirror original entry

---

## 3. Journal Entry Fields

| Field | Notes |
| :--- | :--- |
| `JournalNumber` | Auto-generated, unique |
| `EntryDate` | Business date of the entry |
| `PostingDate` | Date posted to the GL |
| `Description` | Narrative description |
| `Reference` | Optional external reference |
| `SourceType` | e.g., `Manual`, `Expense`, `SupplierPayment`, `Reversal` |
| `SourceId` | FK to source record |
| `Status` | Draft, Submitted, Approved, Posted, Rejected, Reversed |
| `ReversalOfJournalEntryId` | If this is a reversal, points to original |
| `ReversedByJournalEntryId` | If original, points to reversal |
| `CorrelationId` | Propagated from originating command |
| `RowVersion` | Optimistic concurrency |

---

## 4. Journal Entry Line Fields

| Field | Notes |
| :--- | :--- |
| `AccountId` | FK to `chart_of_accounts` |
| `Description` | Line-level description |
| `Debit` | Debit amount (0 if credit line) |
| `Credit` | Credit amount (0 if debit line) |
| `LineNumber` | Ordering |
| `SourceReference` | Specific reference for this line |

---

## 5. Authorization Rules

| Action | Required Role |
| :--- | :--- |
| Create Journal (Draft) | Accountant or Master Accountant |
| Submit Journal | Accountant or Master Accountant |
| Approve Journal | Master Accountant only |
| Reject Journal | Master Accountant only |
| Post Journal to GL | Master Accountant only |
| Reverse Posted Journal | Master Accountant only |

---

## 6. Automatic Journal Entries

Automatic journals are created by the system when:
- An Expense is approved and posted (GL integration)
- A Supplier Payment is approved (GL integration — where mapping is verified)
- A Purchase Return is approved (GL integration — where mapping is verified)
- A Sales Return is approved (GL integration — where mapping is verified)

Automatic journals have `SourceType = [OperationName]` and `SourceId = [OperationId]`. They are posted immediately (no approval workflow). They are immutable after posting.

# Phase 3 — Accounting Period Control Analysis

---

## 1. Legacy Period Controls

**DO NOT EXIST** in the legacy system. All transactions are posted freely regardless of date.

---

## 2. Phase 3 Accounting Period Design

### Period Fields

| Field | Type | Notes |
| :--- | :--- | :--- |
| `Id` | bigint | Primary key |
| `Name` | nvarchar(100) | e.g., "July 2026" |
| `FiscalYear` | int | e.g., 2026 |
| `PeriodNumber` | int | 1–12 (month-based) |
| `StartDate` | date | Inclusive start |
| `EndDate` | date | Inclusive end |
| `Status` | nvarchar(50) | `Open`, `Closed` |
| `ClosedAt` | datetime2 null | When closed |
| `ClosedByUserId` | bigint null | Who closed it |
| `ReopenedAt` | datetime2 null | When reopened (if permitted) |
| `ReopenedByUserId` | bigint null | Who reopened it |
| `ReopenReason` | nvarchar(500) null | Required on reopen |
| `CreatedAt` | datetime2 | Creation timestamp |
| `UpdatedAt` | datetime2 | Last update |
| `RowVersion` | rowversion | Optimistic concurrency |

---

## 3. Period Rules

### Creation
- Start and end dates must be valid (start < end)
- Periods must not overlap for the same fiscal year
- Periods should be contiguous for a fiscal year (gaps are warnings, not errors)
- Future periods can be created in advance

### Closing
- Period close requires: `Status = Open`
- No unposted approved JournalEntries exist within the period (validation check before close)
- No unposted approved Expenses exist within the period
- Close creates AuditLog
- Concurrent close attempts are safe (rowversion prevents double-close)
- Authorization: Master Accountant only

### Reopening
- Requires: `Status = Closed`
- Requires a reason (ReopenReason)
- Authorization: Master Accountant only (strong authorization)
- Creates AuditLog with reason

### Posting Restrictions
- GL posting to a closed period is **rejected**
- Expense posting to a closed period is **rejected**
- Journal posting to a closed period is **rejected**
- Auto-posted GL entries (from operational approval) check the posting date period
- If no period covers a posting date → use the most recent open period OR reject (design choice: reject with PERIOD_NOT_FOUND error)

---

## 4. Period Status Transitions

```
(none) → Open → Closed → Open (reopen)
```

No partial close state. Close is atomic.

---

## 5. Concurrency Safety

- RowVersion on AccountingPeriod prevents concurrent close/reopen of the same period
- Concurrent period creation with overlapping dates: only one will succeed (unique constraint on FiscalYear+PeriodNumber)
- Concurrent period posting: period status is checked within the GL posting transaction

---

## 6. Authorization Matrix

| Action | Required Role |
| :--- | :--- |
| Create Period | Master Accountant |
| Close Period | Master Accountant |
| Reopen Period | Master Accountant |
| View Periods | Accountant, Master Accountant |

using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Contracts.SalesEntries;
using TexasAccountsPortal.Contracts.SupplierPayments;
using TexasAccountsPortal.Contracts.SalesReturns;
using TexasAccountsPortal.Contracts.PurchaseReturns;
using TexasAccountsPortal.Contracts.Transactions;
using TexasAccountsPortal.Contracts.Notifications;
using TexasAccountsPortal.Domain.Common;
using TexasAccountsPortal.Domain.Entities;
using TexasAccountsPortal.Domain.Enums;
using TexasAccountsPortal.Infrastructure.Data;

namespace TexasAccountsPortal.Infrastructure.Services
{
    public class SalesEntriesService : ISalesEntriesService
    {
        private readonly IDbContextFactory<AccountsDbContext> _dbContextFactory;
        private readonly ISalesPortalClient _salesPortalClient;
        private readonly IFinancialPostingService _postingService;
        private readonly IReceiptNotificationService _receiptNotificationService;
        private readonly IServicePaymentApprovalWorkflow _approvalWorkflow;

        public SalesEntriesService(
            IDbContextFactory<AccountsDbContext> dbContextFactory,
            ISalesPortalClient salesPortalClient,
            IFinancialPostingService postingService,
            IReceiptNotificationService receiptNotificationService,
            IServicePaymentApprovalWorkflow approvalWorkflow)
        {
            _dbContextFactory = dbContextFactory;
            _salesPortalClient = salesPortalClient;
            _postingService = postingService;
            _receiptNotificationService = receiptNotificationService;
            _approvalWorkflow = approvalWorkflow;
        }

        public async Task<DashboardSummaryResponse> GetDashboardSummaryAsync(CancellationToken ct)
        {
            return await _salesPortalClient.GetDashboardSummaryAsync(ct);
        }

        public async Task<PagedResponse<FlightBookingSummaryResponse>> GetFlightBookingsAsync(int page, int pageSize, string? status, string? search, DateTime? startDate = null, DateTime? endDate = null, CancellationToken ct = default)
        {
            return await _salesPortalClient.GetFlightBookingsAsync(page, pageSize, status, search, startDate, endDate, ct);
        }

        public async Task<SalesEntryDetailResponse<FlightBookingDetailResponse>?> GetFlightBookingByIdAsync(long id, CancellationToken ct)
        {
            return await AggregateBookingDetailAsync(id, "flight_booking", TransactionReferenceType.Sale, _salesPortalClient.GetFlightBookingByIdAsync(id, ct), ct);
        }

        public async Task<PagedResponse<HotelBookingSummaryResponse>> GetHotelBookingsAsync(int page, int pageSize, string? status, string? search, DateTime? startDate = null, DateTime? endDate = null, CancellationToken ct = default)
        {
            return await _salesPortalClient.GetHotelBookingsAsync(page, pageSize, status, search, startDate, endDate, ct);
        }

        public async Task<SalesEntryDetailResponse<HotelBookingDetailResponse>?> GetHotelBookingByIdAsync(long id, CancellationToken ct)
        {
            return await AggregateBookingDetailAsync(id, "hotel_booking", TransactionReferenceType.Sale, _salesPortalClient.GetHotelBookingByIdAsync(id, ct), ct);
        }

        public async Task<PagedResponse<VisaApplicationSummaryResponse>> GetVisaApplicationsAsync(int page, int pageSize, string? status, string? search, DateTime? startDate = null, DateTime? endDate = null, CancellationToken ct = default)
        {
            return await _salesPortalClient.GetVisaApplicationsAsync(page, pageSize, status, search, startDate, endDate, ct);
        }

        public async Task<SalesEntryDetailResponse<VisaApplicationDetailResponse>?> GetVisaApplicationByIdAsync(long id, CancellationToken ct)
        {
            return await AggregateBookingDetailAsync(id, "visa_application", TransactionReferenceType.Sale, _salesPortalClient.GetVisaApplicationByIdAsync(id, ct), ct);
        }

        public async Task<PagedResponse<VfsAppointmentSummaryResponse>> GetVfsAppointmentsAsync(int page, int pageSize, string? status, string? search, DateTime? startDate = null, DateTime? endDate = null, CancellationToken ct = default)
        {
            return await _salesPortalClient.GetVfsAppointmentsAsync(page, pageSize, status, search, startDate, endDate, ct);
        }

        public async Task<SalesEntryDetailResponse<VfsAppointmentDetailResponse>?> GetVfsAppointmentByIdAsync(long id, CancellationToken ct)
        {
            return await AggregateBookingDetailAsync(id, "vfs_appointment", TransactionReferenceType.Sale, _salesPortalClient.GetVfsAppointmentByIdAsync(id, ct), ct);
        }

        public async Task<PagedResponse<HolidayPackageSummaryResponse>> GetHolidayPackagesAsync(int page, int pageSize, string? status, string? search, DateTime? startDate = null, DateTime? endDate = null, CancellationToken ct = default)
        {
            return await _salesPortalClient.GetHolidayPackagesAsync(page, pageSize, status, search, startDate, endDate, ct);
        }

        public async Task<SalesEntryDetailResponse<HolidayPackageDetailResponse>?> GetHolidayPackageByIdAsync(long id, CancellationToken ct)
        {
            return await AggregateBookingDetailAsync(id, "holiday_package", TransactionReferenceType.Sale, _salesPortalClient.GetHolidayPackageByIdAsync(id, ct), ct);
        }

        public async Task<PagedResponse<TransportationSummaryResponse>> GetTransportationsAsync(int page, int pageSize, string? status, string? search, DateTime? startDate = null, DateTime? endDate = null, CancellationToken ct = default)
        {
            return await _salesPortalClient.GetTransportationsAsync(page, pageSize, status, search, startDate, endDate, ct);
        }

        public async Task<SalesEntryDetailResponse<TransportationDetailResponse>?> GetTransportationByIdAsync(long id, CancellationToken ct)
        {
            return await AggregateBookingDetailAsync(id, "transportation", TransactionReferenceType.Sale, _salesPortalClient.GetTransportationByIdAsync(id, ct), ct);
        }

        public async Task<PagedResponse<OtherServiceSummaryResponse>> GetOtherServicesAsync(int page, int pageSize, string? status, string? search, DateTime? startDate = null, DateTime? endDate = null, CancellationToken ct = default)
        {
            return await _salesPortalClient.GetOtherServicesAsync(page, pageSize, status, search, startDate, endDate, ct);
        }

        public async Task<SalesEntryDetailResponse<OtherServiceDetailResponse>?> GetOtherServiceByIdAsync(long id, CancellationToken ct)
        {
            return await AggregateBookingDetailAsync(id, "other_service", TransactionReferenceType.Sale, _salesPortalClient.GetOtherServiceByIdAsync(id, ct), ct);
        }

        public Task<PagedResponse<HeadSummaryResponse>> GetHeadsAsync(int page, int pageSize, string? search, string? type = null, CancellationToken ct = default)
        {
            return GetHeadsAsync(page, pageSize, search, type, null, ct);
        }

        public async Task<PagedResponse<HeadSummaryResponse>> GetHeadsAsync(int page, int pageSize, string? search, string? type, long? salesmanId, CancellationToken ct = default)
        {
            var filterType = (type ?? "").Trim();
            if (string.Equals(filterType, "all", StringComparison.OrdinalIgnoreCase))
            {
                filterType = null;
            }

            try
            {
                var salesPortalHeads = await _salesPortalClient.GetHeadsAsync(page, pageSize, search, filterType, salesmanId, ct);
                if (salesPortalHeads != null)
                {
                    return salesPortalHeads;
                }
            }
            catch
            {
                // Fallback if sales portal down
            }

            return PagedResponse<HeadSummaryResponse>.Create(new List<HeadSummaryResponse>(), 0, page, pageSize);
        }

        public async Task<HeadSummaryStatsResponse> GetHeadsSummaryAsync(long? salesmanId, CancellationToken ct = default)
        {
            try
            {
                var stats = await _salesPortalClient.GetHeadsSummaryAsync(salesmanId, ct);
                if (stats != null && (stats.TotalCount > 0 || stats.TotalWallet != 0))
                {
                    return stats;
                }
            }
            catch
            {
            }

            try
            {
                var allHeads = await _salesPortalClient.GetHeadsAsync(1, 5000, null, null, salesmanId, ct);
                if (allHeads?.Items != null && allHeads.Items.Count > 0)
                {
                    var items = allHeads.Items;
                    var total = allHeads.TotalCount > 0 ? allHeads.TotalCount : items.Count;
                    var customers = items.Count(h => string.IsNullOrWhiteSpace(h.Type) || h.Type.Equals("customer", StringComparison.OrdinalIgnoreCase) || h.Type.Equals("head", StringComparison.OrdinalIgnoreCase));
                    var agents = items.Count(h => !string.IsNullOrWhiteSpace(h.Type) && h.Type.Equals("agent", StringComparison.OrdinalIgnoreCase));
                    var walletSum = items.Sum(h => h.Wallet);
                    return new HeadSummaryStatsResponse(total, customers, agents, walletSum);
                }
            }
            catch
            {
            }

            return new HeadSummaryStatsResponse(0, 0, 0, 0m);
        }

        public async Task<bool> DeleteHeadAsync(long id, CancellationToken ct = default)
        {
            var salesSuccess = await _salesPortalClient.DeleteHeadAsync(id, ct);
            if (!salesSuccess)
            {
                return false;
            }

            using var dbContext = await _dbContextFactory.CreateDbContextAsync(ct);

            var receipts = await dbContext.AccountsReceipts
                .Where(r => r.HeadId == id || r.AgentId == id)
                .ToListAsync(ct);
            if (receipts.Count > 0)
            {
                dbContext.AccountsReceipts.RemoveRange(receipts);
            }

            var journals = await dbContext.Journals
                .Where(j => (j.DebitPartyId == id && (j.DebitPartyType == "Head" || j.DebitPartyType == "Customer" || j.DebitPartyType == "Agent")) ||
                            (j.CreditPartyId == id && (j.CreditPartyType == "Head" || j.CreditPartyType == "Customer" || j.CreditPartyType == "Agent")))
                .ToListAsync(ct);
            if (journals.Count > 0)
            {
                dbContext.Journals.RemoveRange(journals);
            }

            var agent = await dbContext.Agents.FirstOrDefaultAsync(a => a.Id == id, ct);
            if (agent != null)
            {
                dbContext.Agents.Remove(agent);
            }

            await dbContext.SaveChangesAsync(ct);
            return true;
        }

        public async Task<HeadDetailResponse?> GetHeadByIdAsync(long id, string? type = null, CancellationToken ct = default)
        {
            using var dbContext = await _dbContextFactory.CreateDbContextAsync(ct);

            var isAgent = string.Equals(type, "agent", StringComparison.OrdinalIgnoreCase);

            if (isAgent)
            {
                var agent = await dbContext.Agents.AsNoTracking().FirstOrDefaultAsync(a => a.Id == id, ct);
                if (agent != null)
                {
                    string? salesmanName = null;
                    if (agent.SalesmanId.HasValue)
                    {
                        var salesmen = await GetSalesmenAsync(ct);
                        salesmanName = salesmen.FirstOrDefault(s => s.Id == agent.SalesmanId.Value)?.Name;
                    }

                    return new HeadDetailResponse(
                        agent.Id,
                        agent.FirstName,
                        agent.LastName,
                        agent.EmailId ?? string.Empty,
                        agent.PhoneNo ?? string.Empty,
                        agent.Nationality ?? "Bahraini",
                        "agent",
                        "active",
                        agent.Wallet,
                        agent.Address,
                        agent.CreatedAt,
                        salesmanName
                    );
                }
            }

            try
            {
                var head = await _salesPortalClient.GetHeadByIdAsync(id, ct);
                if (head != null) return head;
            }
            catch
            {
                // Fallback to local DB
            }

            if (!isAgent)
            {
                var fallbackAgent = await dbContext.Agents.AsNoTracking().FirstOrDefaultAsync(a => a.Id == id, ct);
                if (fallbackAgent != null)
                {
                    string? salesmanName = null;
                    if (fallbackAgent.SalesmanId.HasValue)
                    {
                        var salesmen = await GetSalesmenAsync(ct);
                        salesmanName = salesmen.FirstOrDefault(s => s.Id == fallbackAgent.SalesmanId.Value)?.Name;
                    }

                    return new HeadDetailResponse(
                        fallbackAgent.Id,
                        fallbackAgent.FirstName,
                        fallbackAgent.LastName,
                        fallbackAgent.EmailId ?? string.Empty,
                        fallbackAgent.PhoneNo ?? string.Empty,
                        fallbackAgent.Nationality ?? "Bahraini",
                        "agent",
                        "active",
                        fallbackAgent.Wallet,
                        fallbackAgent.Address,
                        fallbackAgent.CreatedAt,
                        salesmanName
                    );
                }
            }

            return null;
        }

        public async Task<HeadDetailResponse?> UpdateHeadAsync(long id, UpdateHeadRequest request, long currentUserId, CancellationToken ct = default)
        {
            // 1. Update on Sales Portal
            var updated = await _salesPortalClient.UpdateHeadAsync(id, request, ct);

            // 2. Synchronize local Agent record if exists in Accounts Portal
            try
            {
                using var db = await _dbContextFactory.CreateDbContextAsync(ct);
                var localAgent = await db.Agents.FirstOrDefaultAsync(a => a.Id == id, ct);
                if (localAgent != null)
                {
                    localAgent.FirstName = request.FirstName.Trim();
                    localAgent.LastName = request.LastName?.Trim() ?? string.Empty;
                    localAgent.EmailId = request.Email.Trim();
                    localAgent.PhoneNo = request.MobileNo.Trim();
                    localAgent.Nationality = request.Nationality?.Trim() ?? "Bahraini";
                    localAgent.Address = request.Address?.Trim() ?? string.Empty;
                    await db.SaveChangesAsync(ct);
                }
            }
            catch
            {
                // Ignore local synchronization errors if agent table not present
            }

            return updated;
        }

        public async Task<PagedResponse<HeadLedgerEntryResponse>> GetHeadLedgerAsync(long headId, string? type = null, int page = 1, int pageSize = 20, CancellationToken ct = default)
        {
            var combinedEntries = new List<HeadLedgerEntryResponse>();
            var isAgent = string.Equals(type, "agent", StringComparison.OrdinalIgnoreCase);

            using var dbContext = await _dbContextFactory.CreateDbContextAsync(ct);

            // 1. Fetch approved journals for this head/agent ID matching party type
            var targetPartyType = isAgent ? "agent" : "head";
            var journals = await dbContext.Journals
                .AsNoTracking()
                .Where(j => j.Status == FinancialTransactionStatus.Approved &&
                    ((j.DebitPartyId == headId && (j.DebitPartyType == targetPartyType || (!isAgent && j.DebitPartyType == "customer"))) ||
                     (j.CreditPartyId == headId && (j.CreditPartyType == targetPartyType || (!isAgent && j.CreditPartyType == "customer")))))
                .ToListAsync(ct);

            var journalNumbers = new HashSet<string>(journals.Select(j => j.JournalNumber), StringComparer.OrdinalIgnoreCase);

            foreach (var j in journals)
            {
                decimal debit = 0;
                decimal credit = 0;
                if (j.DebitPartyId == headId)
                {
                    debit = j.Amount;
                }
                if (j.CreditPartyId == headId)
                {
                    credit = j.Amount;
                }

                if (debit > 0 || credit > 0)
                {
                    string narrative = string.IsNullOrWhiteSpace(j.Note)
                        ? $"Journal Transfer: {j.JournalNumber}"
                        : $"Journal Transfer: {j.JournalNumber} - {j.Note}";

                    combinedEntries.Add(new HeadLedgerEntryResponse(
                        j.Id,
                        "journal_transfer",
                        narrative,
                        debit,
                        credit,
                        credit - debit,
                        j.CreatedAt,
                        "Journal Transfer"
                    ));
                }
            }

            // 2. Fetch transactions for this headId/recipientId matching recipient type
            var targetRecipientType = isAgent ? RecipientType.Agent : RecipientType.Head;
            var txns = await dbContext.Transactions
                .AsNoTracking()
                .Where(t => t.RecipientId == headId && (t.RecipientType == targetRecipientType || (!isAgent && t.RecipientType == null)))
                .ToListAsync(ct);

            // Fetch local accounts receipts for this client
            var localReceipts = await dbContext.AccountsReceipts
                .AsNoTracking()
                .Where(r => (isAgent ? r.AgentId == headId : r.HeadId == headId))
                .ToListAsync(ct);

            var syncedReceiptDocNos = new HashSet<string>(StringComparer.OrdinalIgnoreCase);
            foreach (var ar in localReceipts)
            {
                if (!string.IsNullOrWhiteSpace(ar.SalesPortalDocumentNumber))
                    syncedReceiptDocNos.Add(ar.SalesPortalDocumentNumber.Trim());
                if (!string.IsNullOrWhiteSpace(ar.SalesPortalReceiptId))
                    syncedReceiptDocNos.Add(ar.SalesPortalReceiptId.Trim());
            }

            foreach (var t in txns)
            {
                // Skip financial transactions generated by Journal Transfers, Sales Returns, or Receipts to prevent duplicate ledger postings
                if (!string.IsNullOrEmpty(t.ReferenceId) && (
                    journalNumbers.Contains(t.ReferenceId) ||
                    t.ReferenceId.StartsWith("TXSRCPT", StringComparison.OrdinalIgnoreCase) ||
                    syncedReceiptDocNos.Contains(t.ReferenceId)
                ))
                    continue;

                // Skip all receipts (receipts are represented by Sales Portal ledger deposits/receipts or local AccountsReceipts)
                if (t.ReferenceType == TransactionReferenceType.Receipt ||
                    string.Equals(t.ReferenceType?.ToString(), "receipt", StringComparison.OrdinalIgnoreCase) ||
                    string.Equals(t.ReferenceType?.ToString(), "accounts_receipt", StringComparison.OrdinalIgnoreCase))
                    continue;

                // Skip sales returns (already handled in step 2b)
                if (t.TransactionType == FinancialTransactionType.SalesReturn ||
                    t.ReferenceType == TransactionReferenceType.Refund ||
                    string.Equals(t.ReferenceType?.ToString(), "salesreturn", StringComparison.OrdinalIgnoreCase))
                    continue;

                // Skip credit sale charges / wallet debits for bookings / sales (all bookings are already fetched directly from Sales Portal with full operational metadata in step 3)
                if (t.TransactionType == FinancialTransactionType.WalletDebit ||
                    t.ReferenceType == TransactionReferenceType.Sale ||
                    t.ReferenceType == TransactionReferenceType.Flight ||
                    t.ReferenceType == TransactionReferenceType.Hotel ||
                    t.ReferenceType == TransactionReferenceType.Visa ||
                    t.ReferenceType == TransactionReferenceType.Holiday ||
                    t.ReferenceType == TransactionReferenceType.Transport ||
                    t.ReferenceType == TransactionReferenceType.Vfs ||
                    t.ReferenceType == TransactionReferenceType.Other ||
                    (t.Description != null && (
                        t.Description.StartsWith("Credit Sale charge", StringComparison.OrdinalIgnoreCase) ||
                        t.Description.Contains("Booking #TXS", StringComparison.OrdinalIgnoreCase) ||
                        t.Description.Contains("Wallet Debit", StringComparison.OrdinalIgnoreCase)
                    )))
                    continue;

                if (t.Description != null && (
                    t.Description.StartsWith("Journal Entry", StringComparison.OrdinalIgnoreCase) ||
                    t.Description.StartsWith("Journal Transfer", StringComparison.OrdinalIgnoreCase) ||
                    t.Description.StartsWith("Sales Return", StringComparison.OrdinalIgnoreCase) ||
                    t.Description.StartsWith("Payment approved", StringComparison.OrdinalIgnoreCase) ||
                    t.Description.Contains("payment approved for Receipt", StringComparison.OrdinalIgnoreCase) ||
                    t.Description.Contains("Cash payment approved for Receipt", StringComparison.OrdinalIgnoreCase) ||
                    t.Description.Contains("Receipt TXS", StringComparison.OrdinalIgnoreCase) ||
                    t.Description.Contains("Customer receipt", StringComparison.OrdinalIgnoreCase) ||
                    t.Description.Contains("Agent receipt", StringComparison.OrdinalIgnoreCase) ||
                    t.Description.Contains("TXSRCPT", StringComparison.OrdinalIgnoreCase) ||
                    journalNumbers.Any(jn => t.Description.Contains(jn, StringComparison.OrdinalIgnoreCase)) ||
                    syncedReceiptDocNos.Any(sd => t.Description.Contains(sd, StringComparison.OrdinalIgnoreCase))
                ))
                    continue;

                if (t.ReferenceType.HasValue && t.ReferenceType.Value == TransactionReferenceType.Transfer)
                {
                    if (journalNumbers.Any(jn => (t.Description != null && t.Description.Contains(jn, StringComparison.OrdinalIgnoreCase)) || (t.ReferenceId != null && t.ReferenceId.Contains(jn, StringComparison.OrdinalIgnoreCase))))
                        continue;
                }

                if (!combinedEntries.Any(e => e.Id == t.Id))
                {
                    decimal debit = 0;
                    decimal credit = 0;
                    if (t.TransactionType == FinancialTransactionType.Incoming)
                    {
                        credit = t.Amount;
                    }
                    else
                    {
                        debit = t.Amount;
                    }

                    combinedEntries.Add(new HeadLedgerEntryResponse(
                        t.Id,
                        t.TransactionType.ToString().ToLowerInvariant(),
                        t.Description ?? t.ReferenceType?.ToString() ?? "Accounts Transaction",
                        debit,
                        credit,
                        credit - debit,
                        t.CreatedAt,
                        t.TransactionType == FinancialTransactionType.Incoming ? "Incoming" : "Outgoing"
                    ));
                }
            }

            // 2b. Fetch approved Sales Returns for this headId/recipientId matching recipient type
            var salesReturns = await dbContext.SalesReturns
                .AsNoTracking()
                .Where(s => s.RecipientId == headId && (s.RecipientType == targetRecipientType || (!isAgent && s.RecipientType == RecipientType.Head)) && s.Status == FinancialTransactionStatus.Approved)
                .ToListAsync(ct);

            foreach (var sr in salesReturns)
            {
                if (!combinedEntries.Any(e => e.Id == sr.Id && (string.Equals(e.Type, "sales_return", StringComparison.OrdinalIgnoreCase) || string.Equals(e.Type, "salesreturn", StringComparison.OrdinalIgnoreCase))))
                {
                    decimal credit = sr.Amount;
                    decimal debit = 0;
                    string narrative = string.IsNullOrWhiteSpace(sr.Reason)
                        ? $"Sales Return: {sr.DocumentNumber}"
                        : $"Sales Return: {sr.DocumentNumber} - {sr.Reason}";

                    combinedEntries.Add(new HeadLedgerEntryResponse(
                        sr.Id,
                        "sales_return",
                        narrative,
                        debit,
                        credit,
                        credit - debit,
                        sr.ApprovedAt ?? sr.CreatedAt,
                        "Refund"
                    ));
                }
            }

            // 2c. Add local-only Accounts Receipts (e.g. Agent receipts created in Accounts Portal, or unsynced Customer receipts)
            foreach (var r in localReceipts)
            {
                // If synced to Sales Portal, Sales Portal ledger already includes it
                if (!string.IsNullOrEmpty(r.SalesPortalDocumentNumber) || (r.ClientType == "customer" && r.SyncStatus == "Synced"))
                    continue;

                if (!combinedEntries.Any(e => e.Description != null && (e.Description.Contains(r.ReceiptNumber) || (!string.IsNullOrEmpty(r.ReferenceId) && e.Description.Contains(r.ReferenceId)))))
                {
                    combinedEntries.Add(new HeadLedgerEntryResponse(
                        r.Id,
                        "receipt",
                        $"Receipt #{r.ReceiptNumber}: {(string.IsNullOrWhiteSpace(r.Narration) ? "Payment Collection" : r.Narration.Trim())}",
                        0m,
                        r.Amount,
                        r.Amount,
                        r.ReceiptDate ?? r.CreatedAt,
                        r.DestinationType == "bank" ? "bank" : "cash"
                    ));
                }
            }

            // 3. Fetch sales portal ledger (bookings, receipts, sales returns, etc.)
            try
            {
                var salesPortalLedger = await _salesPortalClient.GetHeadLedgerAsync(headId, type, 1, 5000, ct);
                if (salesPortalLedger?.Items != null)
                {
                    foreach (var item in salesPortalLedger.Items)
                    {
                        // Skip sales portal entries that mirror Journal Transfers to prevent duplicate ledger postings
                        if (item.Description != null && (
                            item.Description.StartsWith("Journal Entry", StringComparison.OrdinalIgnoreCase) ||
                            item.Description.StartsWith("Journal Transfer", StringComparison.OrdinalIgnoreCase) ||
                            journalNumbers.Any(jn => item.Description.Contains(jn, StringComparison.OrdinalIgnoreCase))
                        ))
                        {
                            continue;
                        }

                        if (string.Equals(item.Type, "journal_entry", StringComparison.OrdinalIgnoreCase) ||
                            string.Equals(item.Type, "journal_transfer", StringComparison.OrdinalIgnoreCase))
                        {
                            continue;
                        }

                        var typeLower = item.Type?.ToLowerInvariant();
                        bool isBooking = typeLower is "visa" or "flight" or "hotel" or "holiday" or "transport" or "transportation" or "vfs" or "other" or "visa_application" or "flight_booking" or "hotel_booking" or "holiday_package" or "vfs_appointment" or "other_service" or "otherservice";

                        decimal debit = item.Debit;
                        decimal credit = isBooking ? 0m : item.Credit;

                        // Deduplicate against any existing entry with same receipt document number
                        var docMatch = System.Text.RegularExpressions.Regex.Match(item.Description ?? "", @"TXSRCPT\d+|TXS-ARCPT-[\d-]+", System.Text.RegularExpressions.RegexOptions.IgnoreCase);
                        if (docMatch.Success && combinedEntries.Any(e => e.Description != null && e.Description.Contains(docMatch.Value, StringComparison.OrdinalIgnoreCase)))
                        {
                            continue;
                        }

                        if (!combinedEntries.Any(e => e.Id == item.Id && e.Type == item.Type))
                        {
                            combinedEntries.Add(new HeadLedgerEntryResponse(
                                item.Id,
                                item.Type,
                                item.Description,
                                debit,
                                credit,
                                credit - debit,
                                item.CreatedAt,
                                item.PaymentMethod,
                                item.ServiceId
                            ));
                        }
                    }
                }
            }
            catch
            {
                // Ignore API error
            }

            // Reconcile closing balance with client current wallet balance if history does not match (Requirement 4)
            decimal? targetWallet = null;
            DateTime inceptionDate = DateTime.UtcNow;

            if (isAgent)
            {
                var agentEntity = await dbContext.Agents.AsNoTracking().FirstOrDefaultAsync(a => a.Id == headId, ct);
                if (agentEntity != null)
                {
                    targetWallet = agentEntity.Wallet;
                    inceptionDate = agentEntity.CreatedAt;
                }
            }
            else
            {
                try
                {
                    var headEntity = await _salesPortalClient.GetHeadByIdAsync(headId, ct);
                    if (headEntity != null)
                    {
                        targetWallet = headEntity.Wallet;
                        inceptionDate = headEntity.CreatedAt;
                    }
                }
                catch
                {
                    var fbAgent = await dbContext.Agents.AsNoTracking().FirstOrDefaultAsync(a => a.Id == headId, ct);
                    if (fbAgent != null)
                    {
                        targetWallet = fbAgent.Wallet;
                        inceptionDate = fbAgent.CreatedAt;
                    }
                }
            }

            if (targetWallet.HasValue)
            {
                decimal totalCredits = combinedEntries.Sum(e => e.Credit);
                decimal totalDebits = combinedEntries.Sum(e => e.Debit);
                decimal netHistory = totalCredits - totalDebits;
                decimal diff = targetWallet.Value - netHistory;

                if (Math.Abs(diff) >= 0.001m)
                {
                    if (combinedEntries.Count > 0)
                    {
                        var earliestDate = combinedEntries.Min(e => e.CreatedAt);
                        if (earliestDate < inceptionDate)
                        {
                            inceptionDate = earliestDate.AddSeconds(-1);
                        }
                        else
                        {
                            inceptionDate = inceptionDate.AddSeconds(-1);
                        }
                    }

                    decimal adjDebit = diff < 0 ? Math.Round(-diff, 3, MidpointRounding.AwayFromZero) : 0m;
                    decimal adjCredit = diff > 0 ? Math.Round(diff, 3, MidpointRounding.AwayFromZero) : 0m;

                    combinedEntries.Add(new HeadLedgerEntryResponse(
                        0,
                        "adjustment",
                        "Balance adjustment (legacy)",
                        adjDebit,
                        adjCredit,
                        adjCredit - adjDebit,
                        inceptionDate,
                        "Legacy Adjustment"
                    ));
                }
            }

            var sorted = combinedEntries.OrderBy(e => e.CreatedAt).ThenBy(e => e.Id).ToList();
            var total = sorted.Count;
            var paginated = sorted.Skip((page - 1) * pageSize).Take(pageSize).ToList();

            return PagedResponse<HeadLedgerEntryResponse>.Create(paginated, total, page, pageSize);
        }

        public async Task<PagedResponse<LeadSummaryResponse>> GetLeadsAsync(int page, int pageSize, string? status, string? search, CancellationToken ct)
        {
            return await _salesPortalClient.GetLeadsAsync(page, pageSize, status, search, ct);
        }

        public async Task<LeadDetailResponse?> GetLeadByIdAsync(long id, CancellationToken ct)
        {
            return await _salesPortalClient.GetLeadByIdAsync(id, ct);
        }

        public async Task<PagedResponse<ReceiptSummaryResponse>> GetReceiptsAsync(int page, int pageSize, string? search, DateTime? startDate = null, DateTime? endDate = null, CancellationToken ct = default)
        {
            pageSize = Math.Clamp(pageSize, 1, 1000);
            page = Math.Max(1, page);

            using var db = _dbContextFactory.CreateDbContext();

            // 1. Fetch remote receipts from Sales Portal (fetch up to 1000 to allow in-memory unified sort & deduplication)
            PagedResponse<ReceiptSummaryResponse>? remotePaged = null;
            try
            {
                remotePaged = await _salesPortalClient.GetReceiptsAsync(1, 1000, search, startDate, endDate, ct);
            }
            catch (Exception ex)
            {
                // Sales Portal call failed; fallback to local
            }

            var remoteItems = remotePaged?.Items?.ToList() ?? new List<ReceiptSummaryResponse>();
            if (!string.IsNullOrWhiteSpace(search) && (!remoteItems.Any()))
            {
                // Fallback attempt: fetch remote receipts without search filter so local enrichment & matching can inspect them
                try
                {
                    var fallbackRemote = await _salesPortalClient.GetReceiptsAsync(1, 1000, null, startDate, endDate, ct);
                    if (fallbackRemote?.Items != null && fallbackRemote.Items.Any())
                    {
                        remoteItems = fallbackRemote.Items.ToList();
                    }
                }
                catch { }
            }

            // 2. Fetch local Customer tracking receipts to enrich remote items and deduplicate
            var localCustomerReceipts = await db.AccountsReceipts.AsNoTracking()
                .Where(r => r.ReceiptCategory == ReceiptCategory.ClientWallet && r.ClientType == "customer")
                .ToListAsync(ct);

            var localBySpDoc = localCustomerReceipts
                .Where(r => !string.IsNullOrEmpty(r.SalesPortalDocumentNumber))
                .ToDictionary(r => r.SalesPortalDocumentNumber!, r => r, StringComparer.OrdinalIgnoreCase);

            var localBySpId = localCustomerReceipts
                .Where(r => !string.IsNullOrEmpty(r.SalesPortalReceiptId))
                .ToDictionary(r => r.SalesPortalReceiptId!, r => r, StringComparer.OrdinalIgnoreCase);

            var localByReceiptNo = localCustomerReceipts
                .Where(r => !string.IsNullOrEmpty(r.ReceiptNumber))
                .ToDictionary(r => r.ReceiptNumber!, r => r, StringComparer.OrdinalIgnoreCase);

            var localByExtRef = localCustomerReceipts
                .ToDictionary(r => $"ARCPT-{r.Id}", r => r, StringComparer.OrdinalIgnoreCase);

            // Fetch agents for agent name resolution
            var agentIds = remoteItems.Where(x => x.AgentId.HasValue).Select(x => x.AgentId!.Value).Distinct().ToList();
            var agentsDict = agentIds.Any()
                ? await db.Agents.AsNoTracking()
                    .Where(a => agentIds.Contains(a.Id))
                    .ToDictionaryAsync(a => a.Id, a => a.GetFullName(), ct)
                : new Dictionary<long, string>();

            var enrichedRemote = new List<ReceiptSummaryResponse>();
            foreach (var item in remoteItems)
            {
                var cur = item;
                if (cur.AgentId.HasValue && agentsDict.TryGetValue(cur.AgentId.Value, out var agentName))
                {
                    cur = cur with { HeadName = agentName, AgentName = agentName, ClientType = "agent" };
                }

                AccountsReceipt? matched = null;
                if (!string.IsNullOrEmpty(cur.DocumentNumber) && localBySpDoc.TryGetValue(cur.DocumentNumber, out matched)) { }
                else if (!string.IsNullOrEmpty(cur.ReceiptId) && localBySpId.TryGetValue(cur.ReceiptId, out matched)) { }
                else if (!string.IsNullOrEmpty(cur.ReceiptId) && localByExtRef.TryGetValue(cur.ReceiptId, out matched)) { }
                else if (!string.IsNullOrEmpty(cur.DocumentNumber) && localByReceiptNo.TryGetValue(cur.DocumentNumber, out matched)) { }

                if (matched != null)
                {
                    enrichedRemote.Add(cur with
                    {
                        Source = "Accounts",
                        SyncStatus = "Synced",
                        SalesmanName = cur.SalesmanName ?? matched.SalesmanName,
                        HeadName = !string.IsNullOrWhiteSpace(cur.HeadName) ? cur.HeadName : matched.ClientName,
                        AccountsReceiptId = matched.Id
                    });
                }
                else
                {
                    enrichedRemote.Add(cur with
                    {
                        Source = "Salesman",
                        SyncStatus = null
                    });
                }
            }

            // 3. Query local Agent client receipts AND unsynced (PendingSync/Failed) Customer receipts
            var localQuery = db.AccountsReceipts.AsNoTracking()
                .Include(r => r.DestinationAccount)
                .Include(r => r.DestinationBank)
                .Where(r => r.ReceiptCategory == ReceiptCategory.ClientWallet && (r.ClientType == "agent" || (r.ClientType == "customer" && r.SyncStatus != "Synced")))
                .AsQueryable();

            var (startUtc, endUtc) = BahrainTime.GetUtcRange(startDate, endDate);
            if (startUtc.HasValue) localQuery = localQuery.Where(t => (t.ReceiptDate ?? t.CreatedAt) >= startUtc.Value);
            if (endUtc.HasValue) localQuery = localQuery.Where(t => (t.ReceiptDate ?? t.CreatedAt) <= endUtc.Value);

            if (!string.IsNullOrWhiteSpace(search))
            {
                var s = search.Trim();
                localQuery = localQuery.Where(t =>
                    EF.Functions.Like(t.ReceiptNumber, $"%{s}%") ||
                    EF.Functions.Like(t.ReferenceId, $"%{s}%") ||
                    (t.Narration != null && EF.Functions.Like(t.Narration, $"%{s}%")) ||
                    (t.SalesmanName != null && EF.Functions.Like(t.SalesmanName, $"%{s}%")) ||
                    (t.ClientName != null && EF.Functions.Like(t.ClientName, $"%{s}%")) ||
                    (t.SalesPortalDocumentNumber != null && EF.Functions.Like(t.SalesPortalDocumentNumber, $"%{s}%")));
            }

            var localItems = await localQuery.ToListAsync(ct);

            var localSummaries = localItems.Select(r => new ReceiptSummaryResponse(
                Id: r.Id,
                ReceiptId: r.ReceiptNumber,
                HeadName: r.ClientName,
                ClientType: r.ClientType,
                AgentName: r.ClientType == "agent" ? r.ClientName : null,
                Service: "wallet_deposit",
                Amount: r.Amount,
                PaymentMode: r.DestinationType == "bank" ? "online" : "cash",
                Status: r.ClientType == "customer"
                    ? (r.SyncStatus == "Failed" ? "failed" : "pending")
                    : (r.Status ?? "success"),
                CreatedAt: r.ReceiptDate ?? r.CreatedAt,
                AgentId: r.AgentId,
                DocumentNumber: r.ReceiptNumber,
                SalesmanName: r.SalesmanName,
                Source: "Accounts",
                SyncStatus: r.SyncStatus ?? "Synced",
                FailureReason: r.FailureReason,
                AccountsReceiptId: r.Id
            )).ToList();

            // 4. Merge and deduplicate
            var seenKeys = new HashSet<string>(StringComparer.OrdinalIgnoreCase);
            var mergedList = new List<ReceiptSummaryResponse>();

            foreach (var item in enrichedRemote)
            {
                var docKey = item.DocumentNumber;
                var rIdKey = item.ReceiptId;
                if (!string.IsNullOrEmpty(docKey)) seenKeys.Add(docKey);
                if (!string.IsNullOrEmpty(rIdKey)) seenKeys.Add(rIdKey);
                if (item.AccountsReceiptId.HasValue) seenKeys.Add($"ACID-{item.AccountsReceiptId.Value}");

                mergedList.Add(item);
            }

            foreach (var item in localSummaries)
            {
                var docKey = item.DocumentNumber;
                var rIdKey = item.ReceiptId;
                var acidKey = item.AccountsReceiptId.HasValue ? $"ACID-{item.AccountsReceiptId.Value}" : null;

                bool isDup = (!string.IsNullOrEmpty(docKey) && seenKeys.Contains(docKey)) ||
                             (!string.IsNullOrEmpty(rIdKey) && seenKeys.Contains(rIdKey)) ||
                             (acidKey != null && seenKeys.Contains(acidKey));

                if (!isDup)
                {
                    if (!string.IsNullOrEmpty(docKey)) seenKeys.Add(docKey);
                    if (!string.IsNullOrEmpty(rIdKey)) seenKeys.Add(rIdKey);
                    if (acidKey != null) seenKeys.Add(acidKey);
                    mergedList.Add(item);
                }
            }

            // 5. Apply unified in-memory filter if search term was provided
            if (!string.IsNullOrWhiteSpace(search))
            {
                var term = search.Trim();
                mergedList = mergedList.Where(r =>
                    (r.DocumentNumber != null && r.DocumentNumber.Contains(term, StringComparison.OrdinalIgnoreCase)) ||
                    (r.ReceiptId != null && r.ReceiptId.Contains(term, StringComparison.OrdinalIgnoreCase)) ||
                    (r.HeadName != null && r.HeadName.Contains(term, StringComparison.OrdinalIgnoreCase)) ||
                    (r.AgentName != null && r.AgentName.Contains(term, StringComparison.OrdinalIgnoreCase)) ||
                    (r.SalesmanName != null && r.SalesmanName.Contains(term, StringComparison.OrdinalIgnoreCase)) ||
                    (r.Service != null && r.Service.Contains(term, StringComparison.OrdinalIgnoreCase)) ||
                    (r.PaymentMode != null && r.PaymentMode.Contains(term, StringComparison.OrdinalIgnoreCase)) ||
                    (r.Status != null && r.Status.Contains(term, StringComparison.OrdinalIgnoreCase)) ||
                    (r.SyncStatus != null && r.SyncStatus.Contains(term, StringComparison.OrdinalIgnoreCase)) ||
                    r.Id.ToString().Contains(term) ||
                    (r.AccountsReceiptId.HasValue && r.AccountsReceiptId.Value.ToString().Contains(term))
                ).ToList();
            }

            // 6. Sort by date descending and paginate
            var sortedList = mergedList
                .OrderByDescending(r => r.CreatedAt)
                .ToList();

            var totalCount = sortedList.Count;
            var pagedItems = sortedList
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToList();

            return PagedResponse<ReceiptSummaryResponse>.Create(pagedItems, totalCount, page, pageSize);
        }

        public async Task<ReceiptDetailResponse?> GetReceiptByIdentifierAsync(string identifier, CancellationToken ct)
        {
            if (string.IsNullOrWhiteSpace(identifier)) return null;

            identifier = identifier.Trim();

            // 1. If numeric, attempt standard GetReceiptByIdAsync first
            if (long.TryParse(identifier, out var id))
            {
                var byId = await GetReceiptByIdAsync(id, ct);
                if (byId != null) return byId;
            }

            // 2. Query local AccountsReceipts by ReceiptNumber, SalesPortalDocumentNumber, ReferenceId, or "ARCPT-{Id}"
            using var db = _dbContextFactory.CreateDbContext();
            var localReceipt = await db.AccountsReceipts.AsNoTracking()
                .Include(r => r.DestinationAccount)
                .Include(r => r.DestinationBank)
                .FirstOrDefaultAsync(r =>
                    r.ReceiptNumber == identifier ||
                    r.SalesPortalDocumentNumber == identifier ||
                    r.ReferenceId == identifier ||
                    ("ARCPT-" + r.Id) == identifier, ct);

            if (localReceipt != null)
            {
                return new ReceiptDetailResponse(
                    Id: localReceipt.Id,
                    ReceiptId: localReceipt.ReceiptNumber,
                    HeadName: localReceipt.ClientName,
                    ClientType: localReceipt.ClientType,
                    AgentName: localReceipt.ClientType == "agent" ? localReceipt.ClientName : null,
                    Service: "wallet_deposit",
                    Amount: localReceipt.Amount,
                    PaymentMode: localReceipt.DestinationType == "bank" ? "online" : "cash",
                    Status: localReceipt.Status,
                    CreatedAt: localReceipt.ReceiptDate ?? localReceipt.CreatedAt,
                    Narration: localReceipt.Narration ?? "Payment Collection",
                    HeadId: localReceipt.HeadId,
                    BookingId: null,
                    BankId: localReceipt.DestinationBankId,
                    BankName: localReceipt.DestinationType == "bank" ? localReceipt.DestinationBank?.BankName : localReceipt.DestinationAccount?.Name,
                    PaymentProof: localReceipt.PaymentProof,
                    PaymentReference: localReceipt.ReferenceId,
                    AgentId: localReceipt.AgentId,
                    DocumentNumber: localReceipt.ReceiptNumber,
                    SalesmanName: localReceipt.SalesmanName,
                    Source: "Accounts",
                    SyncStatus: localReceipt.SyncStatus,
                    FailureReason: localReceipt.FailureReason,
                    AccountsReceiptId: localReceipt.Id,
                    DestinationAccountId: localReceipt.DestinationAccountId,
                    DestinationAccountName: localReceipt.DestinationAccount?.Name
                );
            }

            // 3. Search remote receipts in Sales Portal by identifier
            try
            {
                var remotePaged = await _salesPortalClient.GetReceiptsAsync(1, 20, identifier, null, null, ct);
                if (remotePaged?.Items != null)
                {
                    var match = remotePaged.Items.FirstOrDefault(r =>
                        string.Equals(r.DocumentNumber, identifier, StringComparison.OrdinalIgnoreCase) ||
                        string.Equals(r.ReceiptId, identifier, StringComparison.OrdinalIgnoreCase) ||
                        r.Id.ToString() == identifier);

                    if (match != null)
                    {
                        return await GetReceiptByIdAsync(match.Id, ct);
                    }
                }
            }
            catch
            {
                // Sales portal lookup failed
            }

            return null;
        }

        public async Task<ReceiptDetailResponse?> GetReceiptByIdAsync(long id, CancellationToken ct)
        {
            using var db = _dbContextFactory.CreateDbContext();

            // Check local AccountsReceipts first if id corresponds to an Agent receipt or unsynced Customer receipt
            var localReceipt = await db.AccountsReceipts.AsNoTracking()
                .Include(r => r.DestinationAccount)
                .Include(r => r.DestinationBank)
                .FirstOrDefaultAsync(r => r.Id == id && (r.ClientType == "agent" || r.SyncStatus != "Synced"), ct);

            if (localReceipt != null)
            {
                return new ReceiptDetailResponse(
                    Id: localReceipt.Id,
                    ReceiptId: localReceipt.ReceiptNumber,
                    HeadName: localReceipt.ClientName,
                    ClientType: localReceipt.ClientType,
                    AgentName: localReceipt.ClientType == "agent" ? localReceipt.ClientName : null,
                    Service: "wallet_deposit",
                    Amount: localReceipt.Amount,
                    PaymentMode: localReceipt.DestinationType == "bank" ? "online" : "cash",
                    Status: localReceipt.Status,
                    CreatedAt: localReceipt.ReceiptDate ?? localReceipt.CreatedAt,
                    Narration: localReceipt.Narration ?? "Payment Collection",
                    HeadId: localReceipt.HeadId,
                    BookingId: null,
                    BankId: localReceipt.DestinationBankId,
                    BankName: localReceipt.DestinationType == "bank" ? localReceipt.DestinationBank?.BankName : localReceipt.DestinationAccount?.Name,
                    PaymentProof: localReceipt.PaymentProof,
                    PaymentReference: localReceipt.ReferenceId,
                    AgentId: localReceipt.AgentId,
                    DocumentNumber: localReceipt.ReceiptNumber,
                    SalesmanName: localReceipt.SalesmanName,
                    Source: "Accounts",
                    SyncStatus: localReceipt.SyncStatus,
                    FailureReason: localReceipt.FailureReason,
                    AccountsReceiptId: localReceipt.Id,
                    DestinationAccountId: localReceipt.DestinationAccountId,
                    DestinationAccountName: localReceipt.DestinationAccount?.Name
                );
            }

            // Otherwise, fetch from Sales Portal
            ReceiptDetailResponse? receipt = null;
            try
            {
                receipt = await _salesPortalClient.GetReceiptByIdAsync(id, ct);
            }
            catch (Exception ex)
            {
                // Sales Portal call failed; fallback to local
            }

            if (receipt == null)
            {
                // Fallback: check any local AccountsReceipt
                var anyLocal = await db.AccountsReceipts.AsNoTracking()
                    .Include(r => r.DestinationAccount)
                    .Include(r => r.DestinationBank)
                    .FirstOrDefaultAsync(r => r.Id == id, ct);

                if (anyLocal != null)
                {
                    return new ReceiptDetailResponse(
                        Id: anyLocal.Id,
                        ReceiptId: anyLocal.ReceiptNumber,
                        HeadName: anyLocal.ClientName,
                        ClientType: anyLocal.ClientType,
                        AgentName: anyLocal.ClientType == "agent" ? anyLocal.ClientName : null,
                        Service: "wallet_deposit",
                        Amount: anyLocal.Amount,
                        PaymentMode: anyLocal.DestinationType == "bank" ? "online" : "cash",
                        Status: anyLocal.Status,
                        CreatedAt: anyLocal.ReceiptDate ?? anyLocal.CreatedAt,
                        Narration: anyLocal.Narration ?? "Payment Collection",
                        HeadId: anyLocal.HeadId,
                        BookingId: null,
                        BankId: anyLocal.DestinationBankId,
                        BankName: anyLocal.DestinationType == "bank" ? anyLocal.DestinationBank?.BankName : anyLocal.DestinationAccount?.Name,
                        PaymentProof: anyLocal.PaymentProof,
                        PaymentReference: anyLocal.ReferenceId,
                        AgentId: anyLocal.AgentId,
                        DocumentNumber: anyLocal.ReceiptNumber,
                        SalesmanName: anyLocal.SalesmanName,
                        Source: "Accounts",
                        SyncStatus: anyLocal.SyncStatus,
                        FailureReason: anyLocal.FailureReason,
                        AccountsReceiptId: anyLocal.Id,
                        DestinationAccountId: anyLocal.DestinationAccountId,
                        DestinationAccountName: anyLocal.DestinationAccount?.Name
                    );
                }

                return null;
            }

            // Check if this Sales Portal receipt was created from AccountsPortal
            var matchedLocal = await db.AccountsReceipts.AsNoTracking()
                .FirstOrDefaultAsync(r => r.SalesPortalReceiptId == receipt.ReceiptId ||
                                          r.SalesPortalDocumentNumber == receipt.DocumentNumber ||
                                          (r.ReceiptNumber != null && r.ReceiptNumber == receipt.DocumentNumber), ct);

            if (matchedLocal != null)
            {
                receipt = receipt with
                {
                    Source = "Accounts",
                    SyncStatus = "Synced",
                    SalesmanName = receipt.SalesmanName ?? matchedLocal.SalesmanName,
                    HeadName = !string.IsNullOrWhiteSpace(receipt.HeadName) ? receipt.HeadName : matchedLocal.ClientName,
                    AccountsReceiptId = matchedLocal.Id
                };
            }
            else
            {
                receipt = receipt with
                {
                    Source = "Salesman",
                    SyncStatus = null
                };
            }

            if (receipt.AgentId.HasValue)
            {
                var agent = await db.Agents.AsNoTracking().FirstOrDefaultAsync(a => a.Id == receipt.AgentId.Value, ct);
                if (agent != null)
                {
                    var agentName = agent.GetFullName();
                    receipt = receipt with { HeadName = agentName, AgentName = agentName, ClientType = "agent" };
                }
            }

            if (string.Equals(receipt.PaymentMode, "cash", StringComparison.OrdinalIgnoreCase))
            {
                var linkedTx = await (from t in db.Transactions.AsNoTracking()
                                      join a in db.Accounts.AsNoTracking() on t.DestinationAccountId equals a.Id
                                      where t.DestinationAccountId.HasValue
                                         && t.TransactionType == Domain.Enums.FinancialTransactionType.Incoming
                                         && (
                                             (!string.IsNullOrEmpty(receipt.DocumentNumber) && t.Description != null && t.Description.Contains(receipt.DocumentNumber)) ||
                                             (!string.IsNullOrEmpty(receipt.ReceiptId) && t.Description != null && t.Description.Contains(receipt.ReceiptId)) ||
                                             t.ReferenceId == receipt.Id.ToString()
                                         )
                                      select new { AccountId = t.DestinationAccountId.Value, AccountName = a.Name })
                                     .FirstOrDefaultAsync(ct);

                if (linkedTx != null)
                {
                    receipt = receipt with
                    {
                        BankName = linkedTx.AccountName,
                        DestinationAccountId = linkedTx.AccountId,
                        DestinationAccountName = linkedTx.AccountName
                    };
                }
                else if (matchedLocal != null && matchedLocal.DestinationAccountId.HasValue)
                {
                    var accName = await db.Accounts.AsNoTracking()
                        .Where(a => a.Id == matchedLocal.DestinationAccountId.Value)
                        .Select(a => a.Name)
                        .FirstOrDefaultAsync(ct);

                    receipt = receipt with
                    {
                        BankName = accName ?? receipt.BankName,
                        DestinationAccountId = matchedLocal.DestinationAccountId,
                        DestinationAccountName = accName
                    };
                }
            }

            return receipt;
        }

        public async Task<PagedResponse<AccountsReceiptSummaryDto>> GetAccountsReceiptsAsync(int page, int pageSize, string? search, DateTime? startDate = null, DateTime? endDate = null, CancellationToken ct = default)
        {
            pageSize = Math.Clamp(pageSize, 1, 1000);
            page = Math.Max(1, page);

            using var db = _dbContextFactory.CreateDbContext();

            // General receipts ONLY: exclude customer and agent client receipts
            var query = db.AccountsReceipts.AsNoTracking()
                .Include(r => r.DestinationAccount)
                .Include(r => r.DestinationBank)
                .Where(t => t.ReceiptCategory == ReceiptCategory.General)
                .AsQueryable();

            var (startUtc, endUtc) = BahrainTime.GetUtcRange(startDate, endDate);
            if (startUtc.HasValue) query = query.Where(t => t.CreatedAt >= startUtc.Value);
            if (endUtc.HasValue) query = query.Where(t => t.CreatedAt <= endUtc.Value);

            if (!string.IsNullOrWhiteSpace(search))
            {
                var s = search.Trim();
                query = query.Where(t => EF.Functions.Like(t.ReceiptNumber, $"%{s}%") ||
                                         EF.Functions.Like(t.ReferenceId, $"%{s}%") ||
                                         (t.Narration != null && EF.Functions.Like(t.Narration, $"%{s}%")) ||
                                         (t.DestinationAccount != null && EF.Functions.Like(t.DestinationAccount.Name, $"%{s}%")) ||
                                         (t.DestinationBank != null && EF.Functions.Like(t.DestinationBank.BankName, $"%{s}%")) ||
                                         (t.ClientName != null && EF.Functions.Like(t.ClientName, $"%{s}%")) ||
                                         (t.SalesmanName != null && EF.Functions.Like(t.SalesmanName, $"%{s}%")) ||
                                         (t.SalesPortalDocumentNumber != null && EF.Functions.Like(t.SalesPortalDocumentNumber, $"%{s}%")) ||
                                         (t.DestinationType != null && EF.Functions.Like(t.DestinationType, $"%{s}%")));
            }

            var totalCount = await query.CountAsync(ct);
            var items = await query
                .OrderByDescending(t => t.CreatedAt)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync(ct);

            var dtos = items.Select(t => new AccountsReceiptSummaryDto(
                Id: t.Id,
                ReferenceId: t.ReferenceId,
                DocumentNumber: t.ReceiptNumber,
                DestinationAccountId: t.DestinationAccountId,
                DestinationAccountName: t.DestinationAccount?.Name,
                DestinationBankId: t.DestinationBankId,
                DestinationBankName: t.DestinationBank?.BankName,
                PaymentMethod: t.DestinationType == "bank" ? "bank" : "cash",
                Amount: t.Amount,
                Description: t.Narration,
                Status: t.Status,
                CreatedAt: t.CreatedAt,
                CreatedByUserName: null,
                SalesmanId: t.SalesmanId,
                SalesmanName: t.SalesmanName,
                ClientType: t.ClientType,
                HeadId: t.HeadId,
                AgentId: t.AgentId,
                ClientName: t.ClientName,
                SyncStatus: t.SyncStatus,
                SalesPortalReceiptId: t.SalesPortalReceiptId,
                SalesPortalDocumentNumber: t.SalesPortalDocumentNumber,
                FailureReason: t.FailureReason,
                ReceiptDate: t.ReceiptDate,
                ReceiptCategory: t.ReceiptCategory.ToString()
            )).ToList();

            return PagedResponse<AccountsReceiptSummaryDto>.Create(dtos, totalCount, page, pageSize);
        }

        private static string[] GetServiceTypeAliases(string serviceType)
        {
            var lower = (serviceType ?? string.Empty).ToLowerInvariant().Replace("-", "_");
            var baseAliases = lower switch
            {
                "hotels" or "hotel_booking" or "hotel" => new[] { "hotels", "hotel_booking", "hotel", "Hotels", "Hotel_Booking", "HOTELS", "HOTEL", "HOTEL_BOOKING" },
                "flights" or "flight_booking" or "flight" => new[] { "flights", "flight_booking", "flight", "Flights", "Flight_Booking", "FLIGHTS", "FLIGHT", "FLIGHT_BOOKING" },
                "visa" or "visa_application" => new[] { "visa", "visa_application", "Visa", "Visa_Application", "VISA", "VISA_APPLICATION" },
                "vfs" or "vfs_appointment" => new[] { "vfs", "vfs_appointment", "Vfs", "Vfs_Appointment", "VFS", "VFS_APPOINTMENT" },
                "holiday" or "holiday_package" or "holiday_packages" or "holiday-packages" => new[] { "holiday", "holiday_package", "holiday_packages", "holiday-packages", "Holiday", "Holiday_Package", "HOLIDAY", "HOLIDAY_PACKAGE" },
                "transportation" => new[] { "transportation", "Transportation", "TRANSPORTATION", "TRANSPORT", "transport" },
                "other_services" or "other_service" or "other-services" => new[] { "other_services", "other_service", "other-services", "Other_Service", "Other-Services", "OTHER", "OTHER_SERVICES" },
                _ => new[] { serviceType ?? string.Empty, lower, lower.ToUpperInvariant() }
            };
            return baseAliases.Concat(new[] { "Government Fee", "govt_fee", "government_fee", "Govt Fee", "GOVT_FEE" }).ToArray();
        }

        // BFF helper to aggregate all financial context for a booking
        private async Task<SalesEntryDetailResponse<TDetail>?> AggregateBookingDetailAsync<TDetail>(
            long bookingId,
            string serviceType,
            TransactionReferenceType referenceType,
            Task<TDetail?> salesDetailTask,
            CancellationToken ct) where TDetail : class
        {
            var bookingIdStr = bookingId.ToString();
            var aliases = GetServiceTypeAliases(serviceType);

            // Run the local Accounts DB queries sequentially on its own DbContext in a Task,
            // in parallel with the Sales Portal HTTP call (salesDetailTask)
            var accountsQueryTask = Task.Run(async () =>
            {
                using var localDb = _dbContextFactory.CreateDbContext();

                var sp = await localDb.SupplierPayments
                    .AsNoTracking()
                    .Where(p => p.ExternalReference == bookingIdStr && (p.ServiceType == null || aliases.Contains(p.ServiceType)))
                    .ToListAsync(ct);

                var sr = await localDb.SalesReturns
                    .AsNoTracking()
                    .Where(r => (r.OriginalSaleReference == bookingIdStr || r.ExternalReference == bookingIdStr) && (r.ServiceType == null || aliases.Contains(r.ServiceType)))
                    .ToListAsync(ct);

                var pr = await localDb.PurchaseReturns
                    .AsNoTracking()
                    .Where(r => (r.OriginalPurchaseReference == bookingIdStr || r.ExternalReference == bookingIdStr) && (r.ServiceType == null || aliases.Contains(r.ServiceType)))
                    .ToListAsync(ct);

                var tx = await localDb.Transactions
                    .AsNoTracking()
                    .Where(t => t.ReferenceId == bookingIdStr && t.ReferenceType == referenceType)
                    .Select(t => t.Id)
                    .ToListAsync(ct);

                return (sp, sr, pr, tx);
            }, ct);

            // Await both Sales Portal HTTP call and local DB queries in parallel
            await Task.WhenAll(salesDetailTask, accountsQueryTask);

            var salesDetail = await salesDetailTask;
            if (salesDetail == null) return null;

            var (rawSupplierPayments, rawSalesReturns, rawPurchaseReturns, rawTxIds) = await accountsQueryTask;
            var txIds = rawTxIds.ToList();

            var docNumProp = salesDetail.GetType().GetProperty("DocumentNumber");
            var docNumber = docNumProp?.GetValue(salesDetail)?.ToString();
            var hasDocNum = !string.IsNullOrEmpty(docNumber) && docNumber != bookingIdStr;

            using var dbCtx = _dbContextFactory.CreateDbContext();

            // If booking has a DocumentNumber different from the numeric ID,
            // do a supplemental lookup sequentially to catch records stored by doc number
            if (hasDocNum)
            {
                var spByDoc = await dbCtx.SupplierPayments
                    .AsNoTracking()
                    .Where(p => p.ExternalReference == docNumber && (p.ServiceType == null || aliases.Contains(p.ServiceType)))
                    .ToListAsync(ct);
                rawSupplierPayments = rawSupplierPayments
                    .Concat(spByDoc.Where(d => rawSupplierPayments.All(e => e.Id != d.Id))).ToList();

                var srByDoc = await dbCtx.SalesReturns
                    .AsNoTracking()
                    .Where(r => (r.OriginalSaleReference == docNumber || r.ExternalReference == docNumber) && (r.ServiceType == null || aliases.Contains(r.ServiceType)))
                    .ToListAsync(ct);
                rawSalesReturns = rawSalesReturns
                    .Concat(srByDoc.Where(d => rawSalesReturns.All(e => e.Id != d.Id))).ToList();

                var prByDoc = await dbCtx.PurchaseReturns
                    .AsNoTracking()
                    .Where(r => (r.OriginalPurchaseReference == docNumber || r.ExternalReference == docNumber) && (r.ServiceType == null || aliases.Contains(r.ServiceType)))
                    .ToListAsync(ct);
                rawPurchaseReturns = rawPurchaseReturns
                    .Concat(prByDoc.Where(d => rawPurchaseReturns.All(e => e.Id != d.Id))).ToList();

                var txByDoc = await dbCtx.Transactions
                    .AsNoTracking()
                    .Where(t => t.ReferenceId == docNumber && t.ReferenceType == referenceType)
                    .Select(t => t.Id)
                    .ToListAsync(ct);
                txIds = txIds.Concat(txByDoc.Where(id => !txIds.Contains(id))).ToList();
            }

            var spPaymentIdStrs = rawSupplierPayments.Select(p => p.Id.ToString()).ToList();

            var outboxMessages = spPaymentIdStrs.Any()
                ? await dbCtx.OutboxMessages
                    .AsNoTracking()
                    .Where(m => m.MessageType == "SupplierCostSync" && m.AggregateType == "SupplierPayment" && spPaymentIdStrs.Contains(m.AggregateId))
                    .Select(m => new OutboxMessageDto(
                        m.Id,
                        m.MessageType,
                        m.AggregateType,
                        m.AggregateId,
                        m.Status,
                        m.CorrelationId,
                        m.AvailableAt
                    ))
                    .ToListAsync(ct)
                : new List<OutboxMessageDto>();

            var spUserIds = rawSupplierPayments.Select(p => p.RequestedByUserId).Distinct().ToList();
            var spBankIds = rawSupplierPayments.Where(p => p.SourceBankId.HasValue).Select(p => p.SourceBankId!.Value).Distinct().ToList();
            var spAccountIds = rawSupplierPayments.Where(p => p.SourceAccountId.HasValue).Select(p => p.SourceAccountId!.Value).Distinct().ToList();

            var spUsers = spUserIds.Any()
                ? await dbCtx.Users.AsNoTracking().Where(u => spUserIds.Contains(u.Id)).ToDictionaryAsync(u => u.Id, u => u.Name, ct)
                : new Dictionary<long, string>();

            var spBanks = spBankIds.Any()
                ? await dbCtx.Banks.AsNoTracking().Where(b => spBankIds.Contains(b.Id)).ToDictionaryAsync(b => b.Id, b => b.BankName, ct)
                : new Dictionary<long, string>();

            var spAccounts = spAccountIds.Any()
                ? await dbCtx.Accounts.AsNoTracking().Where(a => spAccountIds.Contains(a.Id)).ToDictionaryAsync(a => a.Id, a => a.Name, ct)
                : new Dictionary<long, string>();

            var supplierPayments = rawSupplierPayments.Select(p => new SupplierPaymentResponse(
                p.Id,
                p.SupplierId,
                p.Amount,
                p.Currency,
                p.PaymentMethod.ToString(),
                p.SourceType,
                p.SourceBankId,
                p.SourceAccountId,
                p.ReferenceNumber,
                p.ExternalReference,
                p.Description,
                p.Status.ToString(),
                p.RequestedByUserId,
                p.RequestedAt,
                p.ApprovedByUserId,
                p.ApprovedAt,
                p.RejectedByUserId,
                p.RejectedAt,
                p.RejectionReason,
                p.CorrelationId,
                p.CreatedAt,
                p.UpdatedAt,
                p.RowVersion != null ? Convert.ToBase64String(p.RowVersion) : null,
                !string.IsNullOrWhiteSpace(p.SalesFeeRowKey) || p.ServiceType == "Government Fee" || p.ServiceType == "govt_fee" || (p.Description != null && p.Description.Contains("Government")) ? "Operator" : (spUsers.TryGetValue(p.RequestedByUserId, out var uName) ? uName : null),
                p.SourceBankId.HasValue && spBanks.TryGetValue(p.SourceBankId.Value, out var bName) ? bName : null,
                p.SourceAccountId.HasValue && spAccounts.TryGetValue(p.SourceAccountId.Value, out var aName) ? aName : null
            )).ToList();

            var salesReturns = rawSalesReturns.Select(r => new SalesReturnResponse(
                r.Id,
                r.DocumentNumber,
                r.RecipientType.ToString(),
                r.RecipientId,
                r.OriginalSaleReference,
                r.ExternalReference,
                r.Amount,
                r.Currency,
                r.Reason,
                r.Status.ToString(),
                r.RequestedByUserId,
                null,
                r.RequestedAt,
                r.ApprovedByUserId,
                r.ApprovedAt,
                r.RejectedByUserId,
                r.RejectedAt,
                r.RejectionReason,
                r.CorrelationId,
                r.CreatedAt,
                r.UpdatedAt,
                r.RowVersion != null ? Convert.ToBase64String(r.RowVersion) : null
            )).ToList();

            var purchaseReturns = rawPurchaseReturns.Select(r => new PurchaseReturnResponse(
                r.Id,
                r.DocumentNumber,
                r.SupplierId,
                r.OriginalPurchaseReference,
                r.ExternalReference,
                r.Amount,
                r.Currency,
                r.Reason,
                r.Status.ToString(),
                r.RequestedByUserId,
                null,
                r.RequestedAt,
                r.ApprovedByUserId,
                r.ApprovedAt,
                r.RejectedByUserId,
                r.RejectedAt,
                r.RejectionReason,
                r.CorrelationId,
                r.CreatedAt,
                r.UpdatedAt,
                r.RowVersion != null ? Convert.ToBase64String(r.RowVersion) : null
            )).ToList();

            // 4. Gather source records IDs to fetch related GL and Journal entries
            var sources = new List<(string Type, string Id)>();
            foreach (var tid in txIds)
            {
                sources.Add(("FinancialTransaction", tid.ToString()));
            }
            foreach (var sp in supplierPayments)
            {
                sources.Add(("SupplierPayment", sp.Id.ToString()));
            }
            foreach (var sr in salesReturns)
            {
                sources.Add(("SalesReturn", sr.Id.ToString()));
            }
            foreach (var pr in purchaseReturns)
            {
                sources.Add(("PurchaseReturn", pr.Id.ToString()));
            }

            var ledgerEntries = new List<GeneralLedgerEntryDto>();
            var journalEntries = new List<GlJournalEntryResponse>();

            if (sources.Count > 0)
            {
                var sourceIds = sources.Select(s => s.Id).ToList();
                var sourceTypes = sources.Select(s => s.Type).ToList();

                using var dbCtx6 = _dbContextFactory.CreateDbContext();
                using var dbCtx7 = _dbContextFactory.CreateDbContext();
                using var dbCtx8 = _dbContextFactory.CreateDbContext();

                // Phase 2: Parallel GL, Journal, and COA queries
                var dbLedgerEntriesTask = dbCtx6.GeneralLedgerEntries
                    .AsNoTracking()
                    .Where(g => sourceIds.Contains(g.SourceId) && sourceTypes.Contains(g.SourceType))
                    .ToListAsync(ct);

                var dbJournalEntriesTask = dbCtx7.JournalEntries
                    .AsNoTracking()
                    .Where(j => sourceIds.Contains(j.SourceId) && sourceTypes.Contains(j.SourceType))
                    .ToListAsync(ct);

                var coaMapTask = dbCtx8.ChartOfAccounts
                    .AsNoTracking()
                    .ToDictionaryAsync(c => c.Id, ct);

                await Task.WhenAll(dbLedgerEntriesTask, dbJournalEntriesTask, coaMapTask);

                var matchedLedgerEntries = dbLedgerEntriesTask.Result
                    .Where(g => sources.Any(s => s.Type == g.SourceType && s.Id == g.SourceId))
                    .ToList();

                var coaMap = coaMapTask.Result;

                ledgerEntries = matchedLedgerEntries
                    .Select(g => new GeneralLedgerEntryDto(
                        g.Id,
                        g.AccountId,
                        coaMap.TryGetValue(g.AccountId, out var coa) ? coa.Name : "Unknown",
                        coaMap.TryGetValue(g.AccountId, out var coa2) ? coa2.Code : "Unknown",
                        g.Debit,
                        g.Credit,
                        g.Description,
                        g.PostingDate
                    ))
                    .OrderBy(g => g.PostingDate)
                    .ToList();

                var matchedJournals = dbJournalEntriesTask.Result
                    .Where(j => sources.Any(s => s.Type == j.SourceType && s.Id == j.SourceId))
                    .ToList();

                if (matchedJournals.Count > 0)
                {
                    var journalIds = matchedJournals.Select(j => j.Id).ToList();
                    
                    using var dbCtx9 = _dbContextFactory.CreateDbContext();
                    var dbLines = await dbCtx9.JournalEntryLines
                        .AsNoTracking()
                        .Where(l => journalIds.Contains(l.JournalEntryId))
                        .ToListAsync(ct);

                    journalEntries = matchedJournals.Select(j => new GlJournalEntryResponse(
                        j.Id,
                        j.JournalNumber,
                        j.EntryDate,
                        j.PostingDate,
                        j.Description,
                        j.Reference,
                        j.SourceType,
                        j.SourceId,
                        j.Status.ToString().ToLower(),
                        j.ReversalOfJournalEntryId,
                        j.ReversedByJournalEntryId,
                        j.CorrelationId,
                        j.CreatedBy,
                        j.ApprovedBy,
                        j.ApprovedAt,
                        j.RejectedBy,
                        j.RejectedAt,
                        j.RejectionReason,
                        j.PostedBy,
                        j.CreatedAt,
                        j.UpdatedAt,
                        dbLines
                            .Where(l => l.JournalEntryId == j.Id)
                            .Select(l => new GlJournalEntryLineResponse(
                                l.Id,
                                l.AccountId,
                                l.LineNumber,
                                l.LineDescription,
                                l.Debit,
                                l.Credit,
                                l.SourceReference,
                                l.CreatedAt
                            ))
                            .ToList()
                    )).ToList();
                }
            }

            return new SalesEntryDetailResponse<TDetail>(
                salesDetail,
                supplierPayments,
                salesReturns,
                purchaseReturns,
                ledgerEntries,
                journalEntries,
                outboxMessages
            );
        }

        public async Task<IEnumerable<SalesmanResponse>> GetSalesmenAsync(CancellationToken ct)
        {
            return await _salesPortalClient.GetSalesmenAsync(ct);
        }

        public async Task<PagedResponse<OpenDealEntryResponse>> GetOpenDealsAsync(int page, int pageSize, string? serviceType = null, string? search = null, long? salesmanId = null, string? paymentStatus = null, DateTime? startDate = null, DateTime? endDate = null, CancellationToken ct = default)
        {
            return await _salesPortalClient.GetOpenDealsAsync(page, pageSize, serviceType, search, salesmanId, paymentStatus, startDate, endDate, ct);
        }

        public async Task<OpenDealsSummaryResponse> GetOpenDealsSummaryAsync(string? serviceType = null, string? search = null, long? salesmanId = null, string? paymentStatus = null, DateTime? startDate = null, DateTime? endDate = null, CancellationToken ct = default)
        {
            return await _salesPortalClient.GetOpenDealsSummaryAsync(serviceType, search, salesmanId, paymentStatus, startDate, endDate, ct);
        }

                public async Task<IEnumerable<SalesmanServiceEntryResponse>> GetSalesmanServiceEntriesAsync(long salesmanId, string? salesmanName = null, DateTime? startDate = null, DateTime? endDate = null, CancellationToken ct = default)
        {
            return await _salesPortalClient.GetSalesmanServiceEntriesAsync(salesmanId, salesmanName, startDate, endDate, ct);
        }

        public async Task<IEnumerable<SalesmanReportResponse>> GetSalesmenReportAsync(DateTime? startDate = null, DateTime? endDate = null, CancellationToken ct = default)
        {
            var reports = (await _salesPortalClient.GetSalesmenReportAsync(startDate, endDate, ct))?.ToList() ?? new List<SalesmanReportResponse>();
            return reports;
        }

        public async Task<IEnumerable<SalesmanProfitRecordResponse>> GetSalesmanProfitRecordsAsync(long salesmanId, DateTime? startDate = null, DateTime? endDate = null, CancellationToken ct = default)
        {
            return await _salesPortalClient.GetSalesmanProfitRecordsAsync(salesmanId, startDate, endDate, ct);
        }

        private static string NormalizeReferenceType(string serviceType)
        {
            return serviceType.ToLower() switch
            {
                "flight_booking" or "flights" => "flights",
                "hotel_booking" or "hotels" => "hotels",
                "holiday_package" or "holiday-packages" or "holiday" => "holiday-packages",
                "vfs_appointment" or "vfs-appointments" or "vfs" => "vfs",
                "transportation" or "transportations" or "transport" => "transportation",
                "other_service" or "other-services" or "other" => "other-services",
                "visa_application" or "visa" or "visas" => "visa",
                _ => serviceType.ToLower()
            };
        }

        public async Task UpdatePaymentStatusAsync(string serviceType, long id, string status, long approvedByUserId, long? cashAccountId, string? referenceId, CancellationToken ct)
        {
            var (paymentMethod, bankId, payableAmount, clientType, agentId, headId) = await GetBookingInfoAsync(serviceType, id, ct);

            var approvalRequest = new ProcessServicePaymentApprovalRequest(
                ServiceType: serviceType,
                BookingId: id,
                Status: status,
                ApprovedByUserId: approvedByUserId,
                ExplicitCashAccountId: cashAccountId,
                ExplicitReferenceId: referenceId,
                RawPaymentMethod: paymentMethod,
                RawBankId: bankId,
                PayableAmount: payableAmount,
                ClientType: clientType,
                AgentId: agentId,
                HeadId: headId
            );

            await _approvalWorkflow.ExecuteApprovalWorkflowAsync(approvalRequest, ct);

            await _salesPortalClient.UpdatePaymentStatusAsync(serviceType, id.ToString(), status, referenceId?.Trim(), ct);
        }

        public async Task UpdateBookingProcessingStatusAsync(string serviceType, long id, string status, long userId, bool isMasterAccountant, CancellationToken ct)
        {
            var cleanStatus = (status ?? string.Empty).Trim().ToLowerInvariant();
            if (string.IsNullOrWhiteSpace(cleanStatus))
            {
                throw new ArgumentException("Status cannot be empty.");
            }

            // If attempting to unlock a closed deal, require master_accountant
            if (cleanStatus != "completed" && cleanStatus != "closed" && cleanStatus != "deal_closed" && cleanStatus != "locked" && !isMasterAccountant)
            {
                var isClosed = await GetBookingIsDealClosedAsync(serviceType, id, ct);
                if (isClosed)
                {
                    throw new InvalidOperationException("Only Master Accountants have permission to unlock a closed deal.");
                }
            }

            await _salesPortalClient.UpdateBookingProcessingStatusAsync(serviceType, id, cleanStatus, ct);
        }

        public async Task UpdateBookingOperationClosedAsync(string serviceType, long id, bool operationClosed, long userId, bool isMasterAccountant, CancellationToken ct)
        {
            if (!operationClosed && !isMasterAccountant)
            {
                throw new InvalidOperationException("Only Master Accountants have permission to unlock an operationally closed booking.");
            }

            await _salesPortalClient.UpdateBookingOperationClosedAsync(serviceType, id, operationClosed, ct);
        }

        private async Task<bool> GetBookingIsDealClosedAsync(string serviceType, long id, CancellationToken ct)
        {
            try
            {
                return serviceType.ToLower() switch
                {
                    "flight_booking" or "flights" => (await _salesPortalClient.GetFlightBookingByIdAsync(id, ct))?.IsDealClosed ?? false,
                    "hotel_booking" or "hotels" => (await _salesPortalClient.GetHotelBookingByIdAsync(id, ct))?.IsDealClosed ?? false,
                    "holiday_package" or "holiday-packages" or "holiday" => (await _salesPortalClient.GetHolidayPackageByIdAsync(id, ct))?.IsDealClosed ?? false,
                    "vfs_appointment" or "vfs-appointments" or "vfs" => (await _salesPortalClient.GetVfsAppointmentByIdAsync(id, ct))?.IsDealClosed ?? false,
                    "transportation" or "transportations" or "transport" => (await _salesPortalClient.GetTransportationByIdAsync(id, ct))?.IsDealClosed ?? false,
                    "other_service" or "other-services" or "other" => (await _salesPortalClient.GetOtherServiceByIdAsync(id, ct))?.IsDealClosed ?? false,
                    "visa_application" or "visa" or "visas" => (await _salesPortalClient.GetVisaApplicationByIdAsync(id, ct))?.IsDealClosed ?? false,
                    _ => false
                };
            }
            catch
            {
                return false;
            }
        }

        private static bool IsCashPayment(string? pm)
        {
            if (string.IsNullOrWhiteSpace(pm)) return false;
            var norm = pm.Trim().ToLowerInvariant();
            return norm.Contains("cash");
        }

        private static bool IsBankOrOnlinePayment(string? pm)
        {
            if (string.IsNullOrWhiteSpace(pm)) return false;
            var norm = pm.Trim().ToLowerInvariant();
            return norm.Contains("online") || norm.Contains("bank") || norm.Contains("transfer") || norm.Contains("card") || norm.Contains("cheque") || norm.Contains("deposit") || norm.Contains("upi");
        }

        private async Task<(string? paymentMethod, long? bankId, decimal payableAmount, string? clientType, long? agentId, long? headId)> GetBookingInfoAsync(
            string serviceType, long id, CancellationToken ct)
        {
            try
            {
                return serviceType.ToLower() switch
                {
                    "flight_booking" or "flights" => await GetFlightInfoAsync(id, ct),
                    "hotel_booking" or "hotels" => await GetHotelInfoAsync(id, ct),
                    "holiday_package" or "holiday-packages" or "holiday" => await GetHolidayInfoAsync(id, ct),
                    "vfs_appointment" or "vfs-appointments" or "vfs" => await GetVfsInfoAsync(id, ct),
                    "transportation" or "transportations" or "transport" => await GetTransportInfoAsync(id, ct),
                    "other_service" or "other-services" or "other" => await GetOtherServiceInfoAsync(id, ct),
                    "visa_application" or "visa" or "visas" => await GetVisaInfoAsync(id, ct),
                    _ => (null, null, 0m, null, null, null)
                };
            }
            catch
            {
                return (null, null, 0m, null, null, null);
            }
        }

        private async Task<(string?, long?, decimal, string?, long?, long?)> GetFlightInfoAsync(long id, CancellationToken ct)
        {
            var detail = await _salesPortalClient.GetFlightBookingByIdAsync(id, ct);
            return detail == null ? (null, null, 0m, null, null, null) : (detail.PaymentMethod, detail.BankId, detail.PayableAmount, detail.ClientType, detail.AgentId, detail.HeadId);
        }

        private async Task<(string?, long?, decimal, string?, long?, long?)> GetHotelInfoAsync(long id, CancellationToken ct)
        {
            var detail = await _salesPortalClient.GetHotelBookingByIdAsync(id, ct);
            return detail == null ? (null, null, 0m, null, null, null) : (detail.PaymentMethod, detail.BankId, detail.PayableAmount, detail.ClientType, detail.AgentId, detail.HeadId);
        }

        private async Task<(string?, long?, decimal, string?, long?, long?)> GetHolidayInfoAsync(long id, CancellationToken ct)
        {
            var detail = await _salesPortalClient.GetHolidayPackageByIdAsync(id, ct);
            return detail == null ? (null, null, 0m, null, null, null) : (detail.PaymentMode, detail.BankId, detail.PayableAmount, detail.ClientType, detail.AgentId, detail.HeadId);
        }

        private async Task<(string?, long?, decimal, string?, long?, long?)> GetVfsInfoAsync(long id, CancellationToken ct)
        {
            var detail = await _salesPortalClient.GetVfsAppointmentByIdAsync(id, ct);
            return detail == null ? (null, null, 0m, null, null, null) : (detail.PaymentMode, detail.BankId, detail.PayableAmount, detail.ClientType, detail.AgentId, detail.HeadId);
        }

        private async Task<(string?, long?, decimal, string?, long?, long?)> GetTransportInfoAsync(long id, CancellationToken ct)
        {
            var detail = await _salesPortalClient.GetTransportationByIdAsync(id, ct);
            return detail == null ? (null, null, 0m, null, null, null) : (detail.PaymentMethod, detail.BankId, detail.PayableAmount, detail.ClientType, detail.AgentId, detail.HeadId);
        }

        private async Task<(string?, long?, decimal, string?, long?, long?)> GetOtherServiceInfoAsync(long id, CancellationToken ct)
        {
            var detail = await _salesPortalClient.GetOtherServiceByIdAsync(id, ct);
            return detail == null ? (null, null, 0m, null, null, null) : (detail.PaymentMethod, detail.BankId, detail.PayableAmount, detail.ClientType, detail.AgentId, detail.HeadId);
        }

        private async Task<(string?, long?, decimal, string?, long?, long?)> GetVisaInfoAsync(long id, CancellationToken ct)
        {
            var detail = await _salesPortalClient.GetVisaApplicationByIdAsync(id, ct);
            if (detail == null) return (null, null, 0m, null, null, null);
            var firstApplicant = detail.Applicants?.FirstOrDefault();
            var pm = firstApplicant?.PaymentMethod;
            var bId = firstApplicant?.BankId;
            return (pm, bId, detail.PayableAmount, detail.ClientType, detail.AgentId, detail.HeadId);
        }

        public async Task UpdateReceiptPaymentStatusAsync(long receiptId, string status, long approvedByUserId, long? cashAccountId, string? referenceId, CancellationToken ct)
        {
            var refIdStr = receiptId.ToString();
            var cleanRef = !string.IsNullOrWhiteSpace(referenceId) ? referenceId.Trim() : null;

            using (var dbContext = await _dbContextFactory.CreateDbContextAsync(ct))
            {
                var rawTxns = await dbContext.Transactions
                    .Where(t => t.ReferenceId == refIdStr || (cleanRef != null && t.ReferenceId == cleanRef))
                    .ToListAsync(ct);

                var existingTxns = rawTxns.Where(t =>
                    t.ReferenceType == TransactionReferenceType.Sale ||
                    (t.ReferenceType.HasValue && t.ReferenceType.Value.ToString().ToLower() == "receipt")
                ).ToList();

                var pendingTxn = existingTxns.FirstOrDefault(t => t.Status == FinancialTransactionStatus.Pending);
                var approvedTxn = existingTxns.FirstOrDefault(t => t.Status == FinancialTransactionStatus.Approved);

                var receipt = await _salesPortalClient.GetReceiptByIdAsync(receiptId, ct);
                var payMode = receipt?.PaymentMode ?? pendingTxn?.PaymentMethod.ToString() ?? "";
                var isOnlineOrBank = IsBankOrOnlinePayment(payMode);

                if (isOnlineOrBank && !string.IsNullOrWhiteSpace(cleanRef) && !string.Equals(cleanRef, refIdStr, StringComparison.OrdinalIgnoreCase) && string.Equals(status, "success", StringComparison.OrdinalIgnoreCase))
                {
                    var duplicateExists = await dbContext.Transactions.AnyAsync(t =>
                        t.ReferenceId != null &&
                        t.ReferenceId.ToLower() == cleanRef.ToLower() &&
                        t.ReferenceId != refIdStr &&
                        (pendingTxn == null || t.Id != pendingTxn.Id) &&
                        t.Status != FinancialTransactionStatus.Rejected, ct);

                    if (duplicateExists)
                    {
                        throw new InvalidOperationException($"Transaction Reference ID '{cleanRef}' has already been used for another application/payment and cannot be reused.");
                    }
                }

                if (string.Equals(status, "success", StringComparison.OrdinalIgnoreCase))
                {
                    if (pendingTxn != null)
                    {
                        if (!pendingTxn.DestinationAccountId.HasValue && !pendingTxn.DestinationBankId.HasValue)
                        {
                            var bId = receipt?.BankId;

                            if (cashAccountId.HasValue || IsCashPayment(payMode))
                            {
                                var targetCash = cashAccountId ?? 0;
                                if (targetCash == 0)
                                {
                                    var defaultCash = await dbContext.Accounts.FirstOrDefaultAsync(a => a.Type == Domain.Enums.AccountType.Cash && a.IsActive, ct);
                                    targetCash = defaultCash?.Id ?? 0;
                                }
                                if (targetCash > 0)
                                {
                                    pendingTxn.SetDestinationAccount(targetCash);
                                }
                            }
                            else
                            {
                                var targetBank = bId;
                                if (!targetBank.HasValue)
                                {
                                    var defaultBank = await dbContext.Banks.FirstOrDefaultAsync(b => b.IsActive, ct);
                                    targetBank = defaultBank?.Id;
                                }
                                if (targetBank.HasValue)
                                {
                                    pendingTxn.SetDestinationAccount(null, targetBank.Value);
                                }
                                else
                                {
                                    var defaultCash = await dbContext.Accounts.FirstOrDefaultAsync(a => a.Type == Domain.Enums.AccountType.Cash && a.IsActive, ct);
                                    if (defaultCash != null)
                                    {
                                        pendingTxn.SetDestinationAccount(defaultCash.Id);
                                    }
                                }
                            }
                            if (!string.IsNullOrWhiteSpace(cleanRef))
                            {
                                pendingTxn.SetReferenceId(cleanRef);
                            }
                            await dbContext.SaveChangesAsync(ct);
                        }
                        else if (!string.IsNullOrWhiteSpace(cleanRef))
                        {
                            pendingTxn.SetReferenceId(cleanRef);
                            await dbContext.SaveChangesAsync(ct);
                        }
                        await _postingService.ApproveTransactionAsync(pendingTxn.Id, approvedByUserId, ct);
                    }
                    else if (approvedTxn == null)
                    {
                        if (receipt != null)
                        {
                            var idempotencyKey = $"receipt-approval-{receiptId}";
                            var refType = string.Equals(receipt.Service, "wallet_deposit", StringComparison.OrdinalIgnoreCase)
                                ? "wallet_deposit"
                                : "receipt";

                            long? targetCashId = cashAccountId;
                            long? targetBankId = receipt.BankId;

                            var receiptDocNo = !string.IsNullOrWhiteSpace(receipt.DocumentNumber)
                                ? receipt.DocumentNumber.Trim()
                                : (!string.IsNullOrWhiteSpace(receipt.ReceiptId) ? receipt.ReceiptId.Trim() : receiptId.ToString());
                            var formattedReceiptDocNo = (receiptDocNo.StartsWith("TX", StringComparison.OrdinalIgnoreCase) || receiptDocNo.StartsWith("#"))
                                ? receiptDocNo
                                : $"#{receiptDocNo}";

                            if (targetCashId.HasValue || IsCashPayment(receipt.PaymentMode))
                            {
                                long destCashId = targetCashId ?? 0;
                                if (destCashId == 0)
                                {
                                    var defaultCash = await dbContext.Accounts.FirstOrDefaultAsync(a => a.Type == Domain.Enums.AccountType.Cash && a.IsActive, ct);
                                    destCashId = defaultCash?.Id ?? 0;
                                }

                                if (destCashId > 0)
                                {
                                    var transactionRequest = new CreateIncomingTransactionRequest(
                                        DestinationAccountId: destCashId,
                                        DestinationBankId: null,
                                        Amount: receipt.Amount,
                                        PaymentMethod: "cash",
                                        ReferenceType: refType,
                                        ReferenceId: !string.IsNullOrWhiteSpace(cleanRef) ? cleanRef : receiptId.ToString(),
                                        Description: $"Cash payment approved for Receipt {formattedReceiptDocNo}",
                                        RecipientType: receipt.AgentId.HasValue ? "Agent" : "Head",
                                        RecipientId: receipt.AgentId ?? receipt.HeadId
                                    );
                                    await _postingService.PostIncomingTransactionAsync(transactionRequest, approvedByUserId, idempotencyKey, ReceiptOrigin.ClientWallet, ct);
                                }
                            }
                            else if (targetBankId.HasValue || IsBankOrOnlinePayment(receipt.PaymentMode))
                            {
                                long? destBankId = targetBankId;
                                if (!destBankId.HasValue)
                                {
                                    var defaultBank = await dbContext.Banks.FirstOrDefaultAsync(b => b.IsActive, ct);
                                    destBankId = defaultBank?.Id;
                                }

                                if (destBankId.HasValue)
                                {
                                    var transactionRequest = new CreateIncomingTransactionRequest(
                                        DestinationAccountId: null,
                                        DestinationBankId: destBankId.Value,
                                        Amount: receipt.Amount,
                                        PaymentMethod: "bank",
                                        ReferenceType: refType,
                                        ReferenceId: !string.IsNullOrWhiteSpace(cleanRef) ? cleanRef : receiptId.ToString(),
                                        Description: $"Payment approved for Receipt {formattedReceiptDocNo}",
                                        RecipientType: receipt.AgentId.HasValue ? "Agent" : "Head",
                                        RecipientId: receipt.AgentId ?? receipt.HeadId
                                    );
                                    await _postingService.PostIncomingTransactionAsync(transactionRequest, approvedByUserId, idempotencyKey, ReceiptOrigin.ClientWallet, ct);
                                }
                            }
                            else
                            {
                                var defaultCash = await dbContext.Accounts.FirstOrDefaultAsync(a => a.Type == Domain.Enums.AccountType.Cash && a.IsActive, ct);
                                var destCashId = targetCashId ?? defaultCash?.Id;

                                if (destCashId.HasValue && destCashId.Value > 0)
                                {
                                    var transactionRequest = new CreateIncomingTransactionRequest(
                                        DestinationAccountId: destCashId.Value,
                                        DestinationBankId: null,
                                        Amount: receipt.Amount,
                                        PaymentMethod: "cash",
                                        ReferenceType: refType,
                                        ReferenceId: !string.IsNullOrWhiteSpace(cleanRef) ? cleanRef : receiptId.ToString(),
                                        Description: $"Payment approved for Receipt {formattedReceiptDocNo}",
                                        RecipientType: receipt.AgentId.HasValue ? "Agent" : "Head",
                                        RecipientId: receipt.AgentId ?? receipt.HeadId
                                    );
                                    await _postingService.PostIncomingTransactionAsync(transactionRequest, approvedByUserId, idempotencyKey, ReceiptOrigin.ClientWallet, ct);
                                }
                            }
                        }
                    }
                }
                else if (string.Equals(status, "failed", StringComparison.OrdinalIgnoreCase) || string.Equals(status, "rejected", StringComparison.OrdinalIgnoreCase))
                {
                    if (pendingTxn != null)
                    {
                        await _postingService.RejectTransactionAsync(pendingTxn.Id, approvedByUserId, "Receipt payment rejected", ct);
                    }
                }
            }

            string? syncBankName = null;
            if (cashAccountId.HasValue)
            {
                using var readDb = _dbContextFactory.CreateDbContext();
                var cashAcc = await readDb.Accounts.AsNoTracking().FirstOrDefaultAsync(a => a.Id == cashAccountId.Value, ct);
                syncBankName = cashAcc?.Name;
            }

            await _salesPortalClient.UpdateReceiptStatusDirectAsync(receiptId, status, cleanRef, syncBankName, ct);

            await _receiptNotificationService.PublishReceiptChangedAsync(
                referenceType: ReferenceTypes.Receipt,
                referenceId: receiptId.ToString(),
                includeApprovalQueue: true,
                includeGlobalList: true,
                cancellationToken: ct);
        }

        public async Task<ReceiptDetailResponse> CreateReceiptAsync(CreateAccountsReceiptRequest request, long currentUserId, CancellationToken ct = default)
        {
            if (request.Amount <= 0)
                throw new ArgumentException("Amount must be greater than zero.");

            if (string.IsNullOrWhiteSpace(request.ReferenceId))
                throw new ArgumentException("Reference ID is required.");

            var cleanRef = request.ReferenceId.Trim();

            var isBank = string.Equals(request.DestinationType, "bank", StringComparison.OrdinalIgnoreCase) || request.DestinationBankId.HasValue;
            var paymentMode = isBank ? "online" : "cash";
            var clientType = (request.ClientType ?? "general").Trim().ToLowerInvariant();

            using var db = _dbContextFactory.CreateDbContext();

            // Enforce Unique Reference ID in Accounts Receipts
            var exists = await db.AccountsReceipts.AnyAsync(r => r.ReferenceId == cleanRef, ct);
            if (exists)
                throw new InvalidOperationException($"Reference ID '{cleanRef}' already exists. Reference ID must be unique.");

            string? bankName = null;
            string? cashAccountName = null;
            if (isBank)
            {
                if (!request.DestinationBankId.HasValue)
                {
                    var defaultBank = await db.Banks.FirstOrDefaultAsync(b => b.IsActive, ct);
                    if (defaultBank == null) throw new InvalidOperationException("No active Bank Account found.");
                    request = request with { DestinationBankId = defaultBank.Id };
                }
                var bank = await db.Banks.FindAsync(new object[] { request.DestinationBankId.Value }, ct);
                if (bank == null) throw new KeyNotFoundException("Destination bank account not found.");
                bankName = bank.BankName;
            }
            else
            {
                if (!request.DestinationAccountId.HasValue)
                {
                    var defaultCash = await db.Accounts.FirstOrDefaultAsync(a => a.Type == Domain.Enums.AccountType.Cash && a.IsActive, ct);
                    if (defaultCash == null) throw new InvalidOperationException("No active Cash Account found.");
                    request = request with { DestinationAccountId = defaultCash.Id };
                }
                var cashAcc = await db.Accounts.FindAsync(new object[] { request.DestinationAccountId.Value }, ct);
                if (cashAcc == null) throw new KeyNotFoundException("Destination cash account not found.");
                cashAccountName = cashAcc.Name;
            }

            var receiptDocNo = $"TXS-ARCPT-{DateTime.UtcNow:yyyyMMddHHmmss}-{Random.Shared.Next(100, 999)}";

            if (clientType == "agent")
            {
                if (!request.AgentId.HasValue)
                    throw new ArgumentException("Agent ID is required for agent receipts.");

                var agent = await db.Agents.FirstOrDefaultAsync(a => a.Id == request.AgentId.Value, ct);
                if (agent == null)
                    throw new KeyNotFoundException($"Agent with ID {request.AgentId.Value} was not found.");

                var clientName = !string.IsNullOrWhiteSpace(request.ClientName)
                    ? request.ClientName.Trim()
                    : agent.GetFullName();

                var accountsReceipt = new AccountsReceipt
                {
                    ReceiptNumber = receiptDocNo,
                    ReferenceId = cleanRef,
                    DestinationType = isBank ? "bank" : "account",
                    DestinationAccountId = isBank ? null : request.DestinationAccountId,
                    DestinationBankId = isBank ? request.DestinationBankId : null,
                    Amount = request.Amount,
                    Narration = request.Description?.Trim(),
                    PaymentProof = request.PaymentProof,
                    CreatedByUserId = currentUserId,
                    CreatedAt = DateTime.UtcNow,
                    ReceiptDate = request.ReceiptDate ?? DateTime.UtcNow,
                    SalesmanId = request.SalesmanId ?? agent.SalesmanId,
                    SalesmanName = request.SalesmanName,
                    ClientType = "agent",
                    AgentId = agent.Id,
                    ClientName = clientName,
                    Status = "success",
                    SyncStatus = "Synced",
                    ReceiptCategory = ReceiptCategory.ClientWallet
                };

                db.AccountsReceipts.Add(accountsReceipt);
                await db.SaveChangesAsync(ct);

                // Post incoming transaction to Cash/Bank and credit agent wallet atomically
                var idempotencyKey = $"accounts-receipt-agent-{accountsReceipt.Id}-{Guid.NewGuid()}";
                var transactionRequest = new TexasAccountsPortal.Contracts.Transactions.CreateIncomingTransactionRequest(
                    DestinationAccountId: isBank ? null : request.DestinationAccountId,
                    DestinationBankId: isBank ? request.DestinationBankId : null,
                    Amount: request.Amount,
                    PaymentMethod: isBank ? "bank" : "cash",
                    ReferenceType: "accounts_receipt",
                    ReferenceId: cleanRef,
                    Description: $"Agent receipt [{receiptDocNo}] for {clientName}. {(string.IsNullOrWhiteSpace(request.Description) ? "Payment Collection" : request.Description.Trim())}",
                    RecipientType: "Agent",
                    RecipientId: agent.Id
                );

                await _postingService.PostIncomingTransactionAsync(transactionRequest, currentUserId, idempotencyKey, ReceiptOrigin.ClientWallet, ct);

                await _receiptNotificationService.PublishReceiptChangedAsync(
                    referenceType: ReferenceTypes.Receipt,
                    referenceId: accountsReceipt.Id.ToString(),
                    includeApprovalQueue: true,
                    includeGlobalList: true,
                    cancellationToken: ct);

                return new ReceiptDetailResponse(
                    Id: accountsReceipt.Id,
                    ReceiptId: receiptDocNo,
                    HeadName: clientName,
                    ClientType: "agent",
                    AgentName: clientName,
                    Service: "accounts_receipt",
                    Amount: request.Amount,
                    PaymentMode: paymentMode,
                    Status: "success",
                    CreatedAt: accountsReceipt.CreatedAt,
                    Narration: request.Description ?? "Payment Collection",
                    HeadId: null,
                    BookingId: null,
                    BankId: isBank ? request.DestinationBankId : null,
                    BankName: bankName,
                    PaymentProof: request.PaymentProof,
                    PaymentReference: cleanRef,
                    AgentId: agent.Id,
                    DocumentNumber: receiptDocNo
                );
            }
            else if (clientType == "customer")
            {
                if (!request.SalesmanId.HasValue || !request.HeadId.HasValue)
                    throw new ArgumentException("SalesmanId and HeadId are required for customer receipts.");

                var clientName = !string.IsNullOrWhiteSpace(request.ClientName) ? request.ClientName.Trim() : "Customer Head";

                if ((string.IsNullOrWhiteSpace(clientName) || clientName.Equals("Customer Head", StringComparison.OrdinalIgnoreCase)) && _salesPortalClient != null)
                {
                    try
                    {
                        var head = await _salesPortalClient.GetHeadByIdAsync(request.HeadId.Value, ct);
                        if (head != null)
                        {
                            var resolvedName = $"{head.FirstName} {head.LastName}".Trim();
                            if (!string.IsNullOrWhiteSpace(resolvedName))
                            {
                                clientName = resolvedName;
                            }
                        }
                    }
                    catch { }
                }

                var accountsReceipt = new AccountsReceipt
                {
                    ReceiptNumber = receiptDocNo,
                    ReferenceId = cleanRef,
                    DestinationType = isBank ? "bank" : "account",
                    DestinationAccountId = isBank ? null : request.DestinationAccountId,
                    DestinationBankId = isBank ? request.DestinationBankId : null,
                    Amount = request.Amount,
                    Narration = request.Description?.Trim(),
                    PaymentProof = request.PaymentProof,
                    CreatedByUserId = currentUserId,
                    CreatedAt = DateTime.UtcNow,
                    ReceiptDate = request.ReceiptDate ?? DateTime.UtcNow,
                    SalesmanId = request.SalesmanId.Value,
                    SalesmanName = request.SalesmanName,
                    ClientType = "customer",
                    HeadId = request.HeadId.Value,
                    ClientName = clientName,
                    Status = "pending",
                    SyncStatus = "PendingSync",
                    ReceiptCategory = ReceiptCategory.ClientWallet
                };

                db.AccountsReceipts.Add(accountsReceipt);
                await db.SaveChangesAsync(ct);

                // Call Sales Portal to create & approve receipt on Head
                var internalReq = new TexasAccountsPortal.Contracts.SalesEntries.CreateInternalReceiptRequest(
                    SalesmanId: request.SalesmanId.Value,
                    HeadId: request.HeadId.Value,
                    Amount: request.Amount,
                    PaymentMode: isBank ? "online" : "cash",
                    DestinationAccountId: isBank ? null : request.DestinationAccountId,
                    DestinationBankId: isBank ? request.DestinationBankId : null,
                    DestinationName: isBank ? bankName : "Cash Account",
                    Notes: request.Description,
                    PaymentProof: request.PaymentProof,
                    ExternalReference: $"ARCPT-{accountsReceipt.Id}",
                    ReceiptDate: request.ReceiptDate ?? accountsReceipt.CreatedAt
                );

                ReceiptDetailResponse? spReceipt = null;
                try
                {
                    spReceipt = await _salesPortalClient.CreateReceiptAsync(internalReq, ct);
                    if (spReceipt != null)
                    {
                        accountsReceipt.SalesPortalReceiptId = spReceipt.ReceiptId;
                        accountsReceipt.SalesPortalDocumentNumber = spReceipt.DocumentNumber;
                        accountsReceipt.PaymentProof = spReceipt.PaymentProof ?? accountsReceipt.PaymentProof;
                        accountsReceipt.SyncStatus = "Synced";
                        accountsReceipt.Status = "success";
                        accountsReceipt.FailureReason = null;
                        await db.SaveChangesAsync(ct);

                        // Post incoming transaction to Cash/Bank in Accounts Portal
                        var idempotencyKey = $"accounts-receipt-customer-{accountsReceipt.Id}-{Guid.NewGuid()}";
                        var transactionRequest = new TexasAccountsPortal.Contracts.Transactions.CreateIncomingTransactionRequest(
                            DestinationAccountId: isBank ? null : request.DestinationAccountId,
                            DestinationBankId: isBank ? request.DestinationBankId : null,
                            Amount: request.Amount,
                            PaymentMethod: isBank ? "bank" : "cash",
                            ReferenceType: "receipt",
                            ReferenceId: cleanRef,
                            Description: !string.IsNullOrWhiteSpace(request.Description) && !request.Description.StartsWith("Payment Receipt from", StringComparison.OrdinalIgnoreCase) && !request.Description.Equals("Payment Collection", StringComparison.OrdinalIgnoreCase)
                                ? $"Customer receipt [{spReceipt.DocumentNumber ?? receiptDocNo}] for {clientName}. {request.Description.Trim()}"
                                : $"Customer receipt [{spReceipt.DocumentNumber ?? receiptDocNo}] for {clientName}.",
                            RecipientType: "Head",
                            RecipientId: request.HeadId
                        );

                        await _postingService.PostIncomingTransactionAsync(transactionRequest, currentUserId, idempotencyKey, ReceiptOrigin.ClientWallet, ct);
                    }
                }
                catch (Exception ex)
                {
                    accountsReceipt.SyncStatus = "Failed";
                    accountsReceipt.Status = "failed";
                    accountsReceipt.FailureReason = ex.Message;
                    await db.SaveChangesAsync(ct);
                    throw new InvalidOperationException($"Receipt recorded in Accounts Portal (ID: {accountsReceipt.Id}) but failed to sync to Sales Portal: {ex.Message}. You can retry syncing from the receipts list.");
                }

                await _receiptNotificationService.PublishReceiptChangedAsync(
                    referenceType: ReferenceTypes.Receipt,
                    referenceId: accountsReceipt.Id.ToString(),
                    includeApprovalQueue: true,
                    includeGlobalList: true,
                    cancellationToken: ct);

                return new ReceiptDetailResponse(
                    Id: accountsReceipt.Id,
                    ReceiptId: accountsReceipt.SalesPortalReceiptId ?? receiptDocNo,
                    HeadName: clientName,
                    ClientType: "customer",
                    AgentName: null,
                    Service: "accounts_receipt",
                    Amount: request.Amount,
                    PaymentMode: paymentMode,
                    Status: accountsReceipt.Status,
                    CreatedAt: accountsReceipt.CreatedAt,
                    Narration: request.Description ?? "Payment Collection",
                    HeadId: request.HeadId,
                    BookingId: null,
                    BankId: isBank ? request.DestinationBankId : null,
                    BankName: bankName,
                    PaymentProof: request.PaymentProof,
                    PaymentReference: cleanRef,
                    AgentId: null,
                    DocumentNumber: accountsReceipt.SalesPortalDocumentNumber ?? receiptDocNo
                );
            }
            else
            {
                var accountsReceipt = new AccountsReceipt
                {
                    ReceiptNumber = receiptDocNo,
                    ReferenceId = cleanRef,
                    DestinationType = isBank ? "bank" : "account",
                    DestinationAccountId = isBank ? null : request.DestinationAccountId,
                    DestinationBankId = isBank ? request.DestinationBankId : null,
                    Amount = request.Amount,
                    Narration = request.Description?.Trim(),
                    PaymentProof = request.PaymentProof,
                    CreatedByUserId = currentUserId,
                    CreatedAt = DateTime.UtcNow,
                    ReceiptDate = request.ReceiptDate ?? DateTime.UtcNow,
                    Status = "success",
                    SyncStatus = "Synced",
                    ClientType = "general",
                    ReceiptCategory = ReceiptCategory.General
                };

                db.AccountsReceipts.Add(accountsReceipt);
                await db.SaveChangesAsync(ct);

                var idempotencyKey = $"accounts-receipt-create-{accountsReceipt.Id}-{Guid.NewGuid()}";
                var transactionRequest = new TexasAccountsPortal.Contracts.Transactions.CreateIncomingTransactionRequest(
                    DestinationAccountId: isBank ? null : request.DestinationAccountId,
                    DestinationBankId: isBank ? request.DestinationBankId : null,
                    Amount: request.Amount,
                    PaymentMethod: isBank ? "bank" : "cash",
                    ReferenceType: "receipt",
                    ReferenceId: cleanRef,
                    Description: $"Accounts receipt [{receiptDocNo}] Reference: {cleanRef}. {(string.IsNullOrWhiteSpace(request.Description) ? "Payment Collection" : request.Description.Trim())}",
                    RecipientType: null,
                    RecipientId: null
                );

                await _postingService.PostIncomingTransactionAsync(transactionRequest, currentUserId, idempotencyKey, ReceiptOrigin.General, ct);

                await _receiptNotificationService.PublishReceiptChangedAsync(
                    referenceType: ReferenceTypes.Receipt,
                    referenceId: accountsReceipt.Id.ToString(),
                    includeApprovalQueue: true,
                    includeGlobalList: true,
                    cancellationToken: ct);

                return new ReceiptDetailResponse(
                    Id: accountsReceipt.Id,
                    ReceiptId: receiptDocNo,
                    HeadName: isBank ? bankName : "Cash Drawer",
                    ClientType: "general",
                    AgentName: null,
                    Service: "accounts_receipt",
                    Amount: request.Amount,
                    PaymentMode: paymentMode,
                    Status: "success",
                    CreatedAt: accountsReceipt.CreatedAt,
                    Narration: request.Description ?? "Payment Collection",
                    HeadId: null,
                    BookingId: null,
                    BankId: isBank ? request.DestinationBankId : null,
                    BankName: isBank ? bankName : cashAccountName,
                    PaymentProof: request.PaymentProof,
                    PaymentReference: cleanRef,
                    AgentId: null,
                    DocumentNumber: receiptDocNo,
                    SalesmanName: null,
                    Source: "Accounts",
                    SyncStatus: "Synced",
                    FailureReason: null,
                    AccountsReceiptId: accountsReceipt.Id,
                    DestinationAccountId: isBank ? null : request.DestinationAccountId,
                    DestinationAccountName: isBank ? null : cashAccountName
                );
            }
        }

        public async Task<AccountsReceiptSummaryDto> RetryAccountsReceiptSyncAsync(long id, long currentUserId, CancellationToken ct = default)
        {
            using var db = _dbContextFactory.CreateDbContext();
            var receipt = await db.AccountsReceipts
                .Include(r => r.DestinationAccount)
                .Include(r => r.DestinationBank)
                .FirstOrDefaultAsync(r => r.Id == id, ct);

            if (receipt == null)
                throw new KeyNotFoundException($"Accounts receipt with ID {id} not found.");

            if (receipt.SyncStatus == "Synced")
            {
                return new AccountsReceiptSummaryDto(
                    receipt.Id, receipt.ReferenceId, receipt.ReceiptNumber,
                    receipt.DestinationAccountId, receipt.DestinationAccount?.Name,
                    receipt.DestinationBankId, receipt.DestinationBank?.BankName,
                    receipt.DestinationType == "bank" ? "bank" : "cash",
                    receipt.Amount, receipt.Narration, receipt.Status, receipt.CreatedAt, null,
                    receipt.SalesmanId, receipt.SalesmanName, receipt.ClientType, receipt.HeadId, receipt.AgentId,
                    receipt.ClientName, receipt.SyncStatus, receipt.SalesPortalReceiptId, receipt.SalesPortalDocumentNumber,
                    receipt.FailureReason, receipt.ReceiptDate, receipt.ReceiptCategory.ToString()
                );
            }

            if (receipt.ClientType != "customer" || !receipt.HeadId.HasValue || !receipt.SalesmanId.HasValue)
            {
                throw new InvalidOperationException("Only unsynced customer receipts can be retried.");
            }

            var isBank = receipt.DestinationType == "bank" || receipt.DestinationBankId.HasValue;
            var bankName = receipt.DestinationBank?.BankName;

            var internalReq = new TexasAccountsPortal.Contracts.SalesEntries.CreateInternalReceiptRequest(
                SalesmanId: receipt.SalesmanId.Value,
                HeadId: receipt.HeadId.Value,
                Amount: receipt.Amount,
                PaymentMode: isBank ? "online" : "cash",
                DestinationAccountId: isBank ? null : receipt.DestinationAccountId,
                DestinationBankId: isBank ? receipt.DestinationBankId : null,
                DestinationName: isBank ? bankName : "Cash Account",
                Notes: receipt.Narration,
                PaymentProof: receipt.PaymentProof,
                ExternalReference: $"ARCPT-{receipt.Id}",
                ReceiptDate: receipt.ReceiptDate ?? receipt.CreatedAt
            );

            try
            {
                var spReceipt = await _salesPortalClient.CreateReceiptAsync(internalReq, ct);
                if (spReceipt != null)
                {
                    receipt.SalesPortalReceiptId = spReceipt.ReceiptId;
                    receipt.SalesPortalDocumentNumber = spReceipt.DocumentNumber;
                    receipt.PaymentProof = spReceipt.PaymentProof ?? receipt.PaymentProof;
                    receipt.SyncStatus = "Synced";
                    receipt.Status = "success";
                    receipt.FailureReason = null;
                    await db.SaveChangesAsync(ct);

                    var idempotencyKey = $"accounts-receipt-customer-{receipt.Id}-retry";
                    var transactionRequest = new TexasAccountsPortal.Contracts.Transactions.CreateIncomingTransactionRequest(
                        DestinationAccountId: isBank ? null : receipt.DestinationAccountId,
                        DestinationBankId: isBank ? receipt.DestinationBankId : null,
                        Amount: receipt.Amount,
                        PaymentMethod: isBank ? "bank" : "cash",
                        ReferenceType: "receipt",
                        ReferenceId: receipt.ReferenceId,
                        Description: $"Customer receipt [{spReceipt.DocumentNumber ?? receipt.ReceiptNumber}] for {receipt.ClientName}. {(string.IsNullOrWhiteSpace(receipt.Narration) ? "Payment Collection" : receipt.Narration.Trim())}",
                        RecipientType: "Head",
                        RecipientId: receipt.HeadId
                    );

                    await _postingService.PostIncomingTransactionAsync(transactionRequest, currentUserId, idempotencyKey, ReceiptOrigin.ClientWallet, ct);
                }
            }
            catch (Exception ex)
            {
                receipt.SyncStatus = "Failed";
                receipt.FailureReason = ex.Message;
                await db.SaveChangesAsync(ct);
                throw new InvalidOperationException($"Retry sync failed: {ex.Message}");
            }

            return new AccountsReceiptSummaryDto(
                receipt.Id, receipt.ReferenceId, receipt.ReceiptNumber,
                receipt.DestinationAccountId, receipt.DestinationAccount?.Name,
                receipt.DestinationBankId, receipt.DestinationBank?.BankName,
                receipt.DestinationType == "bank" ? "bank" : "cash",
                receipt.Amount, receipt.Narration, receipt.Status, receipt.CreatedAt, null,
                receipt.SalesmanId, receipt.SalesmanName, receipt.ClientType, receipt.HeadId, receipt.AgentId,
                receipt.ClientName, receipt.SyncStatus, receipt.SalesPortalReceiptId, receipt.SalesPortalDocumentNumber,
                receipt.FailureReason, receipt.ReceiptDate
            );
        }

        public async Task<PagedResponse<SalesmanClientSummaryDto>> GetSalesmanClientsAsync(long salesmanId, string clientType, string? search, int page, int pageSize, CancellationToken ct = default)
        {
            pageSize = Math.Clamp(pageSize, 1, 500);
            page = Math.Max(1, page);

            if (string.Equals(clientType, "agent", StringComparison.OrdinalIgnoreCase))
            {
                using var db = _dbContextFactory.CreateDbContext();
                var q = db.Agents.AsNoTracking().Where(a => salesmanId <= 0 || a.SalesmanId == salesmanId);
                if (!string.IsNullOrWhiteSpace(search))
                {
                    var s = search.Trim();
                    q = q.Where(a => EF.Functions.Like(a.FirstName, $"%{s}%") ||
                                     EF.Functions.Like(a.LastName, $"%{s}%") ||
                                     (a.PhoneNo != null && EF.Functions.Like(a.PhoneNo, $"%{s}%")) ||
                                     (a.EmailId != null && EF.Functions.Like(a.EmailId, $"%{s}%")));
                }

                var total = await q.CountAsync(ct);
                var items = await q
                    .OrderBy(a => a.FirstName).ThenBy(a => a.LastName)
                    .Skip((page - 1) * pageSize)
                    .Take(pageSize)
                    .Select(a => new SalesmanClientSummaryDto(
                        a.Id,
                        (a.FirstName + " " + a.LastName).Trim(),
                        a.PhoneNo,
                        a.EmailId,
                        "agent",
                        a.Wallet,
                        a.SalesmanId,
                        a.IsVerified ? "active" : "unverified"
                    ))
                    .ToListAsync(ct);

                return PagedResponse<SalesmanClientSummaryDto>.Create(items, total, page, pageSize);
            }
            else
            {
                var headsResponse = await _salesPortalClient.GetSalesmanHeadsAsync(salesmanId, search, page, pageSize, ct);
                var items = (headsResponse?.Items ?? new List<HeadSummaryResponse>()).Select(h => new SalesmanClientSummaryDto(
                    h.Id,
                    $"{h.FirstName} {h.LastName}".Trim(),
                    h.MobileNo,
                    h.Email,
                    "customer",
                    h.Wallet,
                    salesmanId,
                    h.Status
                )).ToList();

                return PagedResponse<SalesmanClientSummaryDto>.Create(items, headsResponse?.TotalCount ?? 0, page, pageSize);
            }
        }


                public async Task<PagedResponse<QuotationSummaryResponse>> GetQuotationsAsync(int page, int pageSize, string? search, string? clientType, long? salesmanId, DateTime? startDate = null, DateTime? endDate = null, string? status = null, CancellationToken ct = default)

        {
            return await _salesPortalClient.GetQuotationsAsync(page, pageSize, search, clientType, salesmanId, startDate, endDate, status, ct);
        }

        public async Task<QuotationDetailResponse?> GetQuotationByIdAsync(string idOrDoc, CancellationToken ct)
        {
            return await _salesPortalClient.GetQuotationByIdAsync(idOrDoc, ct);
        }

        public async Task<byte[]?> GetQuotationPdfAsync(string idOrDoc, CancellationToken ct)
        {
            return await _salesPortalClient.GetQuotationPdfAsync(idOrDoc, ct);
        }

        public async Task<bool> UpdateQuotationStatusAsync(string idOrDoc, string status, string? note = null, CancellationToken ct = default)
        {
            return await _salesPortalClient.UpdateQuotationStatusAsync(idOrDoc, status, note, ct);
        }

        public async Task<bool> AddProfitAdjustmentAsync(SalesmanProfitAdjustmentRequest request, long currentUserId, CancellationToken ct = default)
        {
            var reqWithUser = request with { CreatedByUserId = currentUserId };
            return await _salesPortalClient.AddProfitAdjustmentAsync(reqWithUser, ct);
        }

    }
}


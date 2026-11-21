using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using TexasAccountsPortal.Application.Features.Documents.Builders;
using TexasAccountsPortal.Application.Features.Documents.Models;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Contracts.SalesEntries;
using TexasAccountsPortal.Domain.Entities;
using TexasAccountsPortal.Domain.Enums;
using TexasAccountsPortal.Infrastructure.Data;
using Xunit;

namespace TexasAccountsPortal.UnitTests
{
    public class FakeSalesEntriesService : ISalesEntriesService
    {
        public Task<DashboardSummaryResponse> GetDashboardSummaryAsync(CancellationToken ct) => throw new NotImplementedException();
        public Task<PagedResponse<FlightBookingSummaryResponse>> GetFlightBookingsAsync(int page, int pageSize, string? status, string? search, DateTime? startDate = null, DateTime? endDate = null, CancellationToken ct = default) => throw new NotImplementedException();
        public Task<SalesEntryDetailResponse<FlightBookingDetailResponse>?> GetFlightBookingByIdAsync(long id, CancellationToken ct) => throw new NotImplementedException();
        public Task<PagedResponse<HotelBookingSummaryResponse>> GetHotelBookingsAsync(int page, int pageSize, string? status, string? search, DateTime? startDate = null, DateTime? endDate = null, CancellationToken ct = default) => throw new NotImplementedException();
        public Task<SalesEntryDetailResponse<HotelBookingDetailResponse>?> GetHotelBookingByIdAsync(long id, CancellationToken ct) => throw new NotImplementedException();
        public Task<PagedResponse<VisaApplicationSummaryResponse>> GetVisaApplicationsAsync(int page, int pageSize, string? status, string? search, DateTime? startDate = null, DateTime? endDate = null, CancellationToken ct = default) => throw new NotImplementedException();
        public Task<SalesEntryDetailResponse<VisaApplicationDetailResponse>?> GetVisaApplicationByIdAsync(long id, CancellationToken ct) => throw new NotImplementedException();
        public Task<PagedResponse<VfsAppointmentSummaryResponse>> GetVfsAppointmentsAsync(int page, int pageSize, string? status, string? search, DateTime? startDate = null, DateTime? endDate = null, CancellationToken ct = default) => throw new NotImplementedException();
        public Task<SalesEntryDetailResponse<VfsAppointmentDetailResponse>?> GetVfsAppointmentByIdAsync(long id, CancellationToken ct) => throw new NotImplementedException();
        public Task<PagedResponse<HolidayPackageSummaryResponse>> GetHolidayPackagesAsync(int page, int pageSize, string? status, string? search, DateTime? startDate = null, DateTime? endDate = null, CancellationToken ct = default) => throw new NotImplementedException();
        public Task<SalesEntryDetailResponse<HolidayPackageDetailResponse>?> GetHolidayPackageByIdAsync(long id, CancellationToken ct) => throw new NotImplementedException();
        public Task<PagedResponse<TransportationSummaryResponse>> GetTransportationsAsync(int page, int pageSize, string? status, string? search, DateTime? startDate = null, DateTime? endDate = null, CancellationToken ct = default) => throw new NotImplementedException();
        public Task<SalesEntryDetailResponse<TransportationDetailResponse>?> GetTransportationByIdAsync(long id, CancellationToken ct) => throw new NotImplementedException();
        public Task<PagedResponse<OtherServiceSummaryResponse>> GetOtherServicesAsync(int page, int pageSize, string? status, string? search, DateTime? startDate = null, DateTime? endDate = null, CancellationToken ct = default) => throw new NotImplementedException();
        public Task<SalesEntryDetailResponse<OtherServiceDetailResponse>?> GetOtherServiceByIdAsync(long id, CancellationToken ct) => throw new NotImplementedException();
        public Task<PagedResponse<HeadSummaryResponse>> GetHeadsAsync(int page, int pageSize, string? search, string? type = null, CancellationToken ct = default) => throw new NotImplementedException();
        public Task<PagedResponse<HeadSummaryResponse>> GetHeadsAsync(int page, int pageSize, string? search, string? type, long? salesmanId, CancellationToken ct = default) => throw new NotImplementedException();
        public Task<HeadDetailResponse?> GetHeadByIdAsync(long id, string? type = null, CancellationToken ct = default) => throw new NotImplementedException();
        public Task<HeadDetailResponse?> UpdateHeadAsync(long id, UpdateHeadRequest request, long currentUserId, CancellationToken ct = default) => throw new NotImplementedException();
        public Task<HeadSummaryStatsResponse> GetHeadsSummaryAsync(long? salesmanId, CancellationToken ct = default) => throw new NotImplementedException();
        public Task<bool> DeleteHeadAsync(long id, CancellationToken ct = default) => throw new NotImplementedException();
        public Task<PagedResponse<HeadLedgerEntryResponse>> GetHeadLedgerAsync(long headId, string? type = null, int page = 1, int pageSize = 20, CancellationToken ct = default) => throw new NotImplementedException();
        public Task<PagedResponse<LeadSummaryResponse>> GetLeadsAsync(int page, int pageSize, string? status, string? search, CancellationToken ct) => throw new NotImplementedException();
        public Task<LeadDetailResponse?> GetLeadByIdAsync(long id, CancellationToken ct) => throw new NotImplementedException();
        public Task<PagedResponse<ReceiptSummaryResponse>> GetReceiptsAsync(int page, int pageSize, string? search, DateTime? startDate = null, DateTime? endDate = null, CancellationToken ct = default) => throw new NotImplementedException();
        public Task<ReceiptDetailResponse?> GetReceiptByIdAsync(long id, CancellationToken ct) => throw new NotImplementedException();
        public Task<ReceiptDetailResponse?> GetReceiptByIdentifierAsync(string identifier, CancellationToken ct) => throw new NotImplementedException();
        public Task<PagedResponse<AccountsReceiptSummaryDto>> GetAccountsReceiptsAsync(int page, int pageSize, string? search, DateTime? startDate = null, DateTime? endDate = null, CancellationToken ct = default) => throw new NotImplementedException();
        public Task<IEnumerable<SalesmanResponse>> GetSalesmenAsync(CancellationToken ct) => Task.FromResult<IEnumerable<SalesmanResponse>>(new List<SalesmanResponse>());
        public Task<PagedResponse<OpenDealEntryResponse>> GetOpenDealsAsync(int page, int pageSize, string? serviceType = null, string? search = null, long? salesmanId = null, string? paymentStatus = null, DateTime? startDate = null, DateTime? endDate = null, CancellationToken ct = default) => throw new NotImplementedException();
        public Task<OpenDealsSummaryResponse> GetOpenDealsSummaryAsync(string? serviceType = null, string? search = null, long? salesmanId = null, string? paymentStatus = null, DateTime? startDate = null, DateTime? endDate = null, CancellationToken ct = default) => throw new NotImplementedException();
        public Task<IEnumerable<SalesmanReportResponse>> GetSalesmenReportAsync(DateTime? startDate = null, DateTime? endDate = null, CancellationToken ct = default) => throw new NotImplementedException();
        public Task<IEnumerable<SalesmanServiceEntryResponse>> GetSalesmanServiceEntriesAsync(long salesmanId, string? salesmanName = null, DateTime? startDate = null, DateTime? endDate = null, CancellationToken ct = default) => throw new NotImplementedException();
        public Task<IEnumerable<SalesmanProfitRecordResponse>> GetSalesmanProfitRecordsAsync(long salesmanId, DateTime? startDate = null, DateTime? endDate = null, CancellationToken ct = default) => throw new NotImplementedException();
        public Task UpdatePaymentStatusAsync(string serviceType, long id, string status, long approvedByUserId, long? cashAccountId, string? referenceId, CancellationToken ct) => Task.CompletedTask;
        public Task UpdateBookingProcessingStatusAsync(string serviceType, long id, string status, long userId, bool isMasterAccountant, CancellationToken ct) => Task.CompletedTask;
        public Task UpdateBookingOperationClosedAsync(string serviceType, long id, bool operationClosed, long userId, bool isMasterAccountant, CancellationToken ct) => Task.CompletedTask;
        public Task UpdateReceiptPaymentStatusAsync(long receiptId, string status, long approvedByUserId, long? cashAccountId, string? referenceId, CancellationToken ct) => Task.CompletedTask;
        public Task<ReceiptDetailResponse> CreateReceiptAsync(CreateAccountsReceiptRequest request, long currentUserId, CancellationToken ct = default) => throw new NotImplementedException();
        public Task<AccountsReceiptSummaryDto> RetryAccountsReceiptSyncAsync(long id, long currentUserId, CancellationToken ct = default) => throw new NotImplementedException();
        public Task<PagedResponse<SalesmanClientSummaryDto>> GetSalesmanClientsAsync(long salesmanId, string clientType, string? search, int page, int pageSize, CancellationToken ct = default) => throw new NotImplementedException();

        public Task<PagedResponse<QuotationSummaryResponse>> GetQuotationsAsync(int page, int pageSize, string? search, string? clientType, long? salesmanId, DateTime? startDate = null, DateTime? endDate = null, string? status = null, CancellationToken ct = default) => throw new NotImplementedException();
        public Task<QuotationDetailResponse?> GetQuotationByIdAsync(string idOrDoc, CancellationToken ct) => throw new NotImplementedException();
        public Task<byte[]?> GetQuotationPdfAsync(string idOrDoc, CancellationToken ct) => throw new NotImplementedException();
        public Task<bool> UpdateQuotationStatusAsync(string idOrDoc, string status, string? note = null, CancellationToken ct = default) => throw new NotImplementedException();
        public Task<bool> AddProfitAdjustmentAsync(SalesmanProfitAdjustmentRequest request, long currentUserId, CancellationToken ct = default) => throw new NotImplementedException();
        public Task<IEnumerable<SalesmanProfitAdjustmentHistoryResponse>> GetProfitAdjustmentsAsync(long? salesmanId = null, string? bookingType = null, DateTime? startDate = null, DateTime? endDate = null, CancellationToken ct = default) => Task.FromResult<IEnumerable<SalesmanProfitAdjustmentHistoryResponse>>(new List<SalesmanProfitAdjustmentHistoryResponse>());
    }

    public class AccountReportDocumentBuilderTests
    {
        private AccountsDbContext CreateInMemoryDb(string dbName)
        {
            var options = new DbContextOptionsBuilder<AccountsDbContext>()
                .UseInMemoryDatabase(databaseName: dbName)
                .Options;
            return new AccountsDbContext(options);
        }

        [Fact]
        public async Task BuildAsync_BankStatement_IncludesTypeColumnWithCorrectTypes()
        {
            using var db = CreateInMemoryDb(Guid.NewGuid().ToString());

            var bank = new Bank
            {
                BankName = "Test National Bank",
                AccountNumber = "12345678",
                CreatedBy = 1,
                IsActive = true
            };
            bank.InitializeBalance(1000m);
            db.Banks.Add(bank);

            var cashAcc = new Account
            {
                Name = "Main Drawer",
                Type = AccountType.Cash,
                CreatedBy = 1,
                IsActive = true
            };
            cashAcc.InitializeBalance(500m);
            db.Accounts.Add(cashAcc);
            await db.SaveChangesAsync();

            // 1. Client Receipt deposited to bank
            var txReceipt = FinancialTransaction.Create(
                FinancialTransactionType.Incoming,
                150m,
                PaymentMethod.Bank,
                createdBy: 1,
                destinationBankId: bank.Id,
                referenceType: TransactionReferenceType.Receipt,
                referenceId: "TXSRCP-001",
                description: "Client payment receipt"
            );
            txReceipt.Approve(1);

            // 2. Cash deposit into bank from cash drawer
            var txDeposit = FinancialTransaction.Create(
                FinancialTransactionType.Contra,
                200m,
                PaymentMethod.Cash,
                createdBy: 1,
                sourceAccountId: cashAcc.Id,
                destinationBankId: bank.Id,
                referenceType: TransactionReferenceType.Transfer,
                description: "Cash deposit to bank"
            );
            txDeposit.Approve(1);

            // 3. Cash withdrawal from bank into cash drawer
            var txWithdrawal = FinancialTransaction.Create(
                FinancialTransactionType.Contra,
                100m,
                PaymentMethod.Bank,
                createdBy: 1,
                sourceBankId: bank.Id,
                destinationAccountId: cashAcc.Id,
                referenceType: TransactionReferenceType.Transfer,
                description: "Cash withdrawal from bank"
            );
            txWithdrawal.Approve(1);

            // 4. Supplier payment from bank
            var txPayment = FinancialTransaction.Create(
                FinancialTransactionType.Outgoing,
                300m,
                PaymentMethod.Bank,
                createdBy: 1,
                sourceBankId: bank.Id,
                referenceType: TransactionReferenceType.SupplierPayment,
                supplierId: 5,
                description: "Payment to airline"
            );
            txPayment.Approve(1);

            // 5. Expense from bank
            var txExpense = FinancialTransaction.Create(
                FinancialTransactionType.Outgoing,
                50m,
                PaymentMethod.Bank,
                createdBy: 1,
                sourceBankId: bank.Id,
                referenceType: TransactionReferenceType.Expense,
                description: "Bank service fee"
            );
            txExpense.Approve(1);

            db.Transactions.AddRange(txReceipt, txDeposit, txWithdrawal, txPayment, txExpense);
            await db.SaveChangesAsync();

            var builder = new AccountReportDocumentBuilder(
                db,
                new FakeSalesEntriesService(),
                Options.Create(new DocumentOptions()),
                null
            );

            var args = new DocumentBuildArgs
            {
                Category = "report",
                Type = "bank-statement",
                EntityId = bank.Id,
                QueryParams = new Dictionary<string, string>()
            };

            var model = await builder.BuildAsync(args, CancellationToken.None);

            Assert.NotNull(model);
            Assert.Equal(7, model.Table.Columns.Count);
            Assert.Equal("DESCRIPTION / NARRATIVE", model.Table.Columns[2].Header);
            Assert.Equal("TYPE", model.Table.Columns[3].Header);

            // Row 0 is Opening Balance
            Assert.Equal("OPENING", model.Table.Rows[0][3]);

            // Data rows
            Assert.Equal("RECEIPT", model.Table.Rows[1][3]);
            Assert.Equal("DEPOSIT", model.Table.Rows[2][3]);
            Assert.Equal("WITHDRAWAL", model.Table.Rows[3][3]);
            Assert.Equal("PAYMENT", model.Table.Rows[4][3]);
            Assert.Equal("EXPENSE", model.Table.Rows[5][3]);

            // Total row
            Assert.Equal(7, model.Table.TotalRow.Count);
            Assert.Equal("-", model.Table.TotalRow[3]);
        }

        [Fact]
        public async Task BuildAsync_AccountStatement_IncludesTypeColumnWithCorrectTypes()
        {
            using var db = CreateInMemoryDb(Guid.NewGuid().ToString());

            var bank = new Bank
            {
                BankName = "BBK Bank",
                AccountNumber = "87654321",
                CreatedBy = 1,
                IsActive = true
            };
            bank.InitializeBalance(5000m);
            db.Banks.Add(bank);

            var cashAcc = new Account
            {
                Name = "Branch Drawer",
                Type = AccountType.Cash,
                CreatedBy = 1,
                IsActive = true
            };
            cashAcc.InitializeBalance(300m);
            db.Accounts.Add(cashAcc);
            await db.SaveChangesAsync();

            // 1. Client Receipt in cash
            var txReceipt = FinancialTransaction.Create(
                FinancialTransactionType.Incoming,
                80m,
                PaymentMethod.Cash,
                createdBy: 1,
                destinationAccountId: cashAcc.Id,
                referenceType: TransactionReferenceType.Receipt,
                referenceId: "TXSRCP-002",
                description: "Cash Receipt"
            );
            txReceipt.Approve(1);

            // 2. Cash deposit from drawer into bank
            var txDeposit = FinancialTransaction.Create(
                FinancialTransactionType.Contra,
                150m,
                PaymentMethod.Cash,
                createdBy: 1,
                sourceAccountId: cashAcc.Id,
                destinationBankId: bank.Id,
                referenceType: TransactionReferenceType.Transfer,
                description: "Cash Banking"
            );
            txDeposit.Approve(1);

            // 3. Cash withdrawal from bank into drawer
            var txWithdrawal = FinancialTransaction.Create(
                FinancialTransactionType.Contra,
                200m,
                PaymentMethod.Bank,
                createdBy: 1,
                sourceBankId: bank.Id,
                destinationAccountId: cashAcc.Id,
                referenceType: TransactionReferenceType.Transfer,
                description: "Drawer Replenishment"
            );
            txWithdrawal.Approve(1);

            // 4. Cash expense
            var txExpense = FinancialTransaction.Create(
                FinancialTransactionType.Outgoing,
                20m,
                PaymentMethod.Cash,
                createdBy: 1,
                sourceAccountId: cashAcc.Id,
                referenceType: TransactionReferenceType.Expense,
                description: "Office tea"
            );
            txExpense.Approve(1);

            db.Transactions.AddRange(txReceipt, txDeposit, txWithdrawal, txExpense);
            await db.SaveChangesAsync();

            var builder = new AccountReportDocumentBuilder(
                db,
                new FakeSalesEntriesService(),
                Options.Create(new DocumentOptions()),
                null
            );

            var args = new DocumentBuildArgs
            {
                Category = "report",
                Type = "account-statement",
                EntityId = cashAcc.Id,
                QueryParams = new Dictionary<string, string>()
            };

            var model = await builder.BuildAsync(args, CancellationToken.None);

            Assert.NotNull(model);
            Assert.Equal(7, model.Table.Columns.Count);
            Assert.Equal("DESCRIPTION / NARRATIVE", model.Table.Columns[2].Header);
            Assert.Equal("TYPE", model.Table.Columns[3].Header);

            // Row 0 is Opening Balance
            Assert.Equal("OPENING", model.Table.Rows[0][3]);

            // Data rows
            Assert.Equal("RECEIPT", model.Table.Rows[1][3]);
            Assert.Equal("DEPOSIT", model.Table.Rows[2][3]);
            Assert.Equal("WITHDRAWAL", model.Table.Rows[3][3]);
            Assert.Equal("EXPENSE", model.Table.Rows[4][3]);

            // Total row
            Assert.Equal(7, model.Table.TotalRow.Count);
            Assert.Equal("-", model.Table.TotalRow[3]);
        }

        [Fact]
        public async Task BuildAsync_AccountStatement_ReceiptNarrative_ResolvesHeadName_AndOmitsRedundantClause()
        {
            var options = new DbContextOptionsBuilder<AccountsDbContext>()
                .UseInMemoryDatabase(databaseName: Guid.NewGuid().ToString())
                .Options;

            using var db = new AccountsDbContext(options);

            var cashAcc = new Account
            {
                Name = "Main Cash Drawer",
                Type = AccountType.Cash,
                CreatedBy = 1,
                IsActive = true
            };
            cashAcc.InitializeBalance(0m);
            db.Accounts.Add(cashAcc);
            await db.SaveChangesAsync();

            // Add AccountsReceipt with real head name
            var ar = new AccountsReceipt
            {
                ReceiptNumber = "TXSRCPT000018",
                ReferenceId = "CRCPT-261121-7044",
                DestinationType = "account",
                DestinationAccountId = cashAcc.Id,
                Amount = 100m,
                ClientName = "mahes Kt.",
                ClientType = "customer",
                HeadId = 405,
                Status = "success"
            };
            db.AccountsReceipts.Add(ar);

            // Add incoming receipt transaction with the old redundant text
            var txReceipt = FinancialTransaction.Create(
                FinancialTransactionType.Incoming,
                100m,
                PaymentMethod.Cash,
                createdBy: 1,
                destinationAccountId: cashAcc.Id,
                referenceType: TransactionReferenceType.Receipt,
                referenceId: "CRCPT-261121-7044",
                description: "Customer receipt [TXSRCPT000018] for Customer Head. Payment Receipt from Client (customer) via Jamal",
                recipientType: RecipientType.Head,
                recipientId: 405
            );
            txReceipt.Approve(1);

            db.Transactions.Add(txReceipt);
            await db.SaveChangesAsync();

            var builder = new AccountReportDocumentBuilder(
                db,
                new FakeSalesEntriesService(),
                Options.Create(new DocumentOptions()),
                null
            );

            var args = new DocumentBuildArgs
            {
                Category = "report",
                Type = "account-statement",
                EntityId = cashAcc.Id,
                QueryParams = new Dictionary<string, string>()
            };

            var model = await builder.BuildAsync(args, CancellationToken.None);

            Assert.NotNull(model);
            // Row 0 is Opening, Row 1 is the Receipt
            Assert.Equal("RECEIPT", model.Table.Rows[1][3]);
            Assert.Equal("Customer receipt [TXSRCPT000018] for mahes Kt. (Salesman:Jamal)", model.Table.Rows[1][2]);
        }

        [Fact]
        public async Task BuildAsync_AccountStatement_IncludesSalesmanNameFromAccountsReceipt()
        {
            var options = new DbContextOptionsBuilder<AccountsDbContext>()
                .UseInMemoryDatabase(databaseName: Guid.NewGuid().ToString())
                .Options;

            using var db = new AccountsDbContext(options);

            var cashAcc = new Account
            {
                Name = "Main Cash Drawer",
                Type = AccountType.Cash,
                CreatedBy = 1,
                IsActive = true
            };
            cashAcc.InitializeBalance(0m);
            db.Accounts.Add(cashAcc);
            await db.SaveChangesAsync();

            var ar = new AccountsReceipt
            {
                ReceiptNumber = "TXSRCPT000017",
                ReferenceId = "CRCPT-261121-7017",
                DestinationType = "account",
                DestinationAccountId = cashAcc.Id,
                Amount = 50m,
                ClientName = "Abdul kader",
                ClientType = "customer",
                HeadId = 401,
                SalesmanName = "Jamal",
                Status = "success"
            };
            db.AccountsReceipts.Add(ar);

            var txReceipt = FinancialTransaction.Create(
                FinancialTransactionType.Incoming,
                50m,
                PaymentMethod.Cash,
                createdBy: 1,
                destinationAccountId: cashAcc.Id,
                referenceType: TransactionReferenceType.Receipt,
                referenceId: "CRCPT-261121-7017",
                description: "Customer receipt [TXSRCPT000017] for Abdul kader.",
                recipientType: RecipientType.Head,
                recipientId: 401
            );
            txReceipt.Approve(1);

            db.Transactions.Add(txReceipt);
            await db.SaveChangesAsync();

            var builder = new AccountReportDocumentBuilder(
                db,
                new FakeSalesEntriesService(),
                Options.Create(new DocumentOptions()),
                null
            );

            var args = new DocumentBuildArgs
            {
                Category = "report",
                Type = "account-statement",
                EntityId = cashAcc.Id,
                QueryParams = new Dictionary<string, string>()
            };

            var model = await builder.BuildAsync(args, CancellationToken.None);

            Assert.NotNull(model);
            Assert.Equal("RECEIPT", model.Table.Rows[1][3]);
            Assert.Equal("Customer receipt [TXSRCPT000017] for Abdul kader. (Salesman:Jamal)", model.Table.Rows[1][2]);
        }
    }
}

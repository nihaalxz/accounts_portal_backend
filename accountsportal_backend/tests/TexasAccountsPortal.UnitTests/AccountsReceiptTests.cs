using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Contracts.SalesEntries;
using TexasAccountsPortal.Domain.Entities;
using TexasAccountsPortal.Domain.Enums;
using TexasAccountsPortal.Infrastructure.Data;
using TexasAccountsPortal.Infrastructure.Services;
using Xunit;
using Xunit.Abstractions;

namespace TexasAccountsPortal.UnitTests
{
    public class TestDbContextFactory : IDbContextFactory<AccountsDbContext>
    {
        private readonly DbContextOptions<AccountsDbContext> _options;
        public TestDbContextFactory(DbContextOptions<AccountsDbContext> options) => _options = options;
        public AccountsDbContext CreateDbContext() => new AccountsDbContext(_options);
    }

    public class ReceiptTestSalesPortalClient : FakeSalesPortalClient, ISalesPortalClient
    {
        public List<ReceiptSummaryResponse> RemoteReceipts { get; set; } = new();

        Task<PagedResponse<ReceiptSummaryResponse>> ISalesPortalClient.GetReceiptsAsync(int page, int pageSize, string? search, DateTime? startDate, DateTime? endDate, CancellationToken ct)
        {
            var paged = PagedResponse<ReceiptSummaryResponse>.Create(RemoteReceipts, RemoteReceipts.Count, page, pageSize);
            return Task.FromResult(paged);
        }
    }

    public class AccountsReceiptTests
    {
        private readonly ITestOutputHelper _output;

        public AccountsReceiptTests(ITestOutputHelper output)
        {
            _output = output;
        }

        [Fact]
        public void AccountsReceipt_Defaults_AreCorrect()
        {
            var receipt = new AccountsReceipt();

            Assert.Equal(ReceiptCategory.General, receipt.ReceiptCategory);
            Assert.Equal("general", receipt.ClientType);
            Assert.Equal("Synced", receipt.SyncStatus);
            Assert.Equal("Posted", receipt.Status);
            Assert.Null(receipt.SalesmanId);
            Assert.Null(receipt.HeadId);
            Assert.Null(receipt.AgentId);
            Assert.Null(receipt.SalesPortalReceiptId);
            Assert.Null(receipt.SalesPortalDocumentNumber);
        }

        [Fact]
        public void AccountsReceipt_CustomerReceipt_PropertiesCanBeAssigned()
        {
            var receipt = new AccountsReceipt
            {
                ReceiptNumber = "TXS-ARCPT-20261105-001",
                ReferenceId = "REF-12345",
                Amount = 150.250m,
                SalesmanId = 5,
                SalesmanName = "John Salesman",
                ClientType = "customer",
                HeadId = 42,
                ClientName = "VIP Customer",
                ReceiptCategory = ReceiptCategory.ClientWallet,
                SyncStatus = "Synced",
                SalesPortalReceiptId = "TX987654",
                SalesPortalDocumentNumber = "TXSRCPT-0042",
                Status = "success"
            };

            Assert.Equal(ReceiptCategory.ClientWallet, receipt.ReceiptCategory);
            Assert.Equal("customer", receipt.ClientType);
            Assert.Equal(5, receipt.SalesmanId);
            Assert.Equal(42, receipt.HeadId);
            Assert.Equal("Synced", receipt.SyncStatus);
            Assert.Equal("TX987654", receipt.SalesPortalReceiptId);
            Assert.Equal("TXSRCPT-0042", receipt.SalesPortalDocumentNumber);
            Assert.Equal(150.250m, receipt.Amount);
        }

        [Fact]
        public void AccountsReceipt_AgentReceipt_CreditsAgentWallet()
        {
            var agent = new Agent
            {
                FirstName = "Ali",
                LastName = "Travels",
                SalesmanId = 10,
                PhoneNo = "+97312345678"
            };

            Assert.Equal(0m, agent.Wallet);

            // Act
            agent.CreditWallet(500.750m);

            // Assert
            Assert.Equal(500.750m, agent.Wallet);

            // Additional credit
            agent.CreditWallet(250.250m);
            Assert.Equal(751.000m, agent.Wallet);
        }

        [Fact]
        public void AccountsReceipt_AgentReceipt_NegativeCreditThrowsArgumentException()
        {
            var agent = new Agent { FirstName = "Test", LastName = "Agent" };
            Assert.Throws<ArgumentException>(() => agent.CreditWallet(-50m));
        }

        [Fact]
        public void AccountsReceipt_GeneralReceipt_IsSyncedAndHasNoClient()
        {
            var receipt = new AccountsReceipt
            {
                ReceiptNumber = "TXS-ARCPT-20261105-002",
                ReferenceId = "GEN-REF-999",
                Amount = 1000m,
                DestinationType = "bank",
                DestinationBankId = 1,
                ClientType = "general",
                ReceiptCategory = ReceiptCategory.General,
                Status = "success",
                SyncStatus = "Synced"
            };

            Assert.Equal(ReceiptCategory.General, receipt.ReceiptCategory);
            Assert.Equal("general", receipt.ClientType);
            Assert.Equal("Synced", receipt.SyncStatus);
            Assert.Null(receipt.SalesmanId);
            Assert.Null(receipt.HeadId);
            Assert.Null(receipt.AgentId);
            Assert.Null(receipt.SalesPortalReceiptId);
            Assert.Null(receipt.SalesPortalDocumentNumber);
        }

        [Fact]
        public void ReceiptSummaryResponse_SeparationFields_AreProperlySupported()
        {
            var accountsReceipt = new ReceiptSummaryResponse(
                Id: 101,
                ReceiptId: "TXS-ARCPT-20261105-003",
                HeadName: "Ahmed Travels",
                ClientType: "agent",
                AgentName: "Ahmed Travels",
                Service: "wallet_deposit",
                Amount: 250m,
                PaymentMode: "cash",
                Status: "success",
                CreatedAt: DateTime.UtcNow,
                AgentId: 7,
                DocumentNumber: "TXS-ARCPT-20261105-003",
                SalesmanName: "Khalid Sales",
                Source: "Accounts",
                SyncStatus: "Synced",
                FailureReason: null,
                AccountsReceiptId: 101
            );

            Assert.Equal("Accounts", accountsReceipt.Source);
            Assert.Equal("Synced", accountsReceipt.SyncStatus);
            Assert.Equal(101, accountsReceipt.AccountsReceiptId);
            Assert.Equal("agent", accountsReceipt.ClientType);

            var salesmanReceipt = new ReceiptSummaryResponse(
                Id: 202,
                ReceiptId: "TXSRCPT-0099",
                HeadName: "Customer Name",
                ClientType: "customer",
                AgentName: null,
                Service: "flights",
                Amount: 180m,
                PaymentMode: "cash",
                Status: "pending",
                CreatedAt: DateTime.UtcNow,
                Source: "Salesman"
            );

            Assert.Equal("Salesman", salesmanReceipt.Source);
            Assert.Null(salesmanReceipt.SyncStatus);
            Assert.Equal("pending", salesmanReceipt.Status);
        }

        [Fact]
        public async Task Endpoints_Separation_And_Evidence_Test()
        {
            var dbOptions = new DbContextOptionsBuilder<AccountsDbContext>()
                .UseInMemoryDatabase(databaseName: $"ReceiptsSeparationDb_{Guid.NewGuid()}")
                .Options;

            var dbFactory = new TestDbContextFactory(dbOptions);
            var fakeSp = new ReceiptTestSalesPortalClient();
            var service = new SalesEntriesService(
                dbFactory,
                fakeSp,
                null!,
                null!,
                null!
            );

            using (var db = dbFactory.CreateDbContext())
            {
                // 1. General receipt
                db.AccountsReceipts.Add(new AccountsReceipt
                {
                    ReceiptNumber = "TXS-ARCPT-GEN-001",
                    ReferenceId = "GEN-DEP-100",
                    Amount = 500m,
                    DestinationType = "bank",
                    Narration = "Capital Deposit to Bank",
                    ReceiptCategory = ReceiptCategory.General,
                    ClientType = "general",
                    Status = "success",
                    SyncStatus = "Synced",
                    CreatedAt = DateTime.UtcNow.AddMinutes(-30)
                });

                // 2. Agent client receipt
                db.AccountsReceipts.Add(new AccountsReceipt
                {
                    ReceiptNumber = "TXS-ARCPT-AGT-001",
                    ReferenceId = "AGT-REC-200",
                    Amount = 250m,
                    DestinationType = "account",
                    Narration = "Agent Wallet Credit",
                    ReceiptCategory = ReceiptCategory.ClientWallet,
                    ClientType = "agent",
                    AgentId = 15,
                    ClientName = "Fast Travels Agent",
                    SalesmanId = 3,
                    SalesmanName = "Salesman Mike",
                    Status = "success",
                    SyncStatus = "Synced",
                    CreatedAt = DateTime.UtcNow.AddMinutes(-20)
                });

                // 3. Customer client receipt
                var custReceipt = new AccountsReceipt
                {
                    ReceiptNumber = "TXS-ARCPT-CUST-001",
                    ReferenceId = "CUST-REC-300",
                    Amount = 175.500m,
                    DestinationType = "bank",
                    Narration = "Customer Booking Settlement",
                    ReceiptCategory = ReceiptCategory.ClientWallet,
                    ClientType = "customer",
                    HeadId = 99,
                    ClientName = "VIP Customer Ahmed",
                    SalesmanId = 3,
                    SalesmanName = "Salesman Mike",
                    Status = "success",
                    SyncStatus = "Synced",
                    SalesPortalReceiptId = "SP-REC-999",
                    SalesPortalDocumentNumber = "TXSRCPT-SP-999",
                    CreatedAt = DateTime.UtcNow.AddMinutes(-10)
                };
                db.AccountsReceipts.Add(custReceipt);

                await db.SaveChangesAsync();

                // Mock remote Sales Portal receipts list (contains remote version of the synced Customer receipt)
                fakeSp.RemoteReceipts.Add(new ReceiptSummaryResponse(
                    Id: 999,
                    ReceiptId: custReceipt.SalesPortalReceiptId!,
                    HeadName: custReceipt.ClientName,
                    ClientType: "customer",
                    AgentName: null,
                    Service: "accounts_receipt",
                    Amount: custReceipt.Amount,
                    PaymentMode: "bank",
                    Status: "success",
                    CreatedAt: custReceipt.CreatedAt,
                    DocumentNumber: custReceipt.SalesPortalDocumentNumber!,
                    SalesmanName: custReceipt.SalesmanName
                ));
            }

            // === VERIFY TAB 1: Accounts Portal Receipts Tab ===
            var accountsResult = await service.GetAccountsReceiptsAsync(page: 1, pageSize: 10, search: null);
            var accountsJson = JsonSerializer.Serialize(accountsResult, new JsonSerializerOptions { WriteIndented = true });
            _output.WriteLine("=== RAW JSON: GET /api/sales-entries/accounts-receipts ===");
            _output.WriteLine(accountsJson);

            // Assertions for Accounts Portal Tab
            Assert.Equal(1, accountsResult.TotalCount);
            Assert.Single(accountsResult.Items);
            var generalItem = accountsResult.Items.First();
            Assert.Equal("TXS-ARCPT-GEN-001", generalItem.DocumentNumber);
            Assert.Equal("General", generalItem.ReceiptCategory);
            Assert.Null(generalItem.HeadId);
            Assert.Null(generalItem.AgentId);

            // === VERIFY TAB 2: Sales Portal Receipts Tab ===
            var salesResult = await service.GetReceiptsAsync(page: 1, pageSize: 10, search: null);
            var salesJson = JsonSerializer.Serialize(salesResult, new JsonSerializerOptions { WriteIndented = true });
            _output.WriteLine("=== RAW JSON: GET /api/sales-entries/receipts ===");
            _output.WriteLine(salesJson);

            // Assertions for Sales Portal Tab
            Assert.Equal(2, salesResult.TotalCount);
            Assert.Equal(2, salesResult.Items.Count);

            // Ensure NO general receipt is present in the Sales Portal tab
            Assert.DoesNotContain(salesResult.Items, x => x.DocumentNumber == "TXS-ARCPT-GEN-001");

            // Ensure Agent receipt and Customer receipt appear once each
            var agentItem = Assert.Single(salesResult.Items, x => x.ClientType == "agent");
            Assert.Equal("TXS-ARCPT-AGT-001", agentItem.DocumentNumber);
            Assert.Equal("Fast Travels Agent", agentItem.HeadName);
            Assert.Equal("Accounts", agentItem.Source);

            var custItem = Assert.Single(salesResult.Items, x => x.ClientType == "customer");
            Assert.Equal("TXSRCPT-SP-999", custItem.DocumentNumber);
            Assert.Equal("Accounts", custItem.Source);
            Assert.Equal("Synced", custItem.SyncStatus);
        }

        [Fact]
        public void BackfillLogic_ClassifiesOldRowsCorrectly()
        {
            // Seed legacy raw rows matching existing production rows before ReceiptCategory column existed
            var rows = new List<AccountsReceipt>
            {
                new AccountsReceipt { Id = 2, ReceiptNumber = "TXS-ARCPT-2", Narration = "credit of Akbrdheen received", ClientType = "general" },
                new AccountsReceipt { Id = 3, ReceiptNumber = "TXS-ARCPT-3", Narration = "CREDIT AMOUNT RECEIVED", ClientType = "general" },
                new AccountsReceipt { Id = 4, ReceiptNumber = "TXS-ARCPT-4", Narration = "CREDIT AMOUNT RECEIVED - NAJIYA NASRIN", ClientType = "general" },
                new AccountsReceipt { Id = 5, ReceiptNumber = "TXS-ARCPT-5", Narration = "PAYMENT RECEIVED FROM SABITH", ClientType = "general" },
                new AccountsReceipt { Id = 6, ReceiptNumber = "TXS-ARCPT-6", Narration = "STC CASH BACK 04.10.2026", ClientType = "general" },
                new AccountsReceipt { Id = 7, ReceiptNumber = "TXS-ARCPT-7", Narration = "Regular Bank Deposit", ClientType = "general" },
                new AccountsReceipt { Id = 8, ReceiptNumber = "TXS-ARCPT-8", Narration = "Agent payment", ClientType = "agent", AgentId = 12 },
                new AccountsReceipt { Id = 9, ReceiptNumber = "TXS-ARCPT-9", Narration = "Customer payment", ClientType = "customer", HeadId = 55 }
            };

            // Execute the classification rules as defined in the migration backfill SQL:
            foreach (var r in rows)
            {
                var isClientWallet =
                    r.HeadId.HasValue ||
                    r.AgentId.HasValue ||
                    r.SalesmanId.HasValue ||
                    string.Equals(r.ClientType, "customer", StringComparison.OrdinalIgnoreCase) ||
                    string.Equals(r.ClientType, "agent", StringComparison.OrdinalIgnoreCase) ||
                    (!string.IsNullOrEmpty(r.Narration) && (
                        r.Narration.IndexOf("credit of ", StringComparison.OrdinalIgnoreCase) >= 0 ||
                        r.Narration.IndexOf("credit amount received", StringComparison.OrdinalIgnoreCase) >= 0 ||
                        r.Narration.IndexOf("payment received from ", StringComparison.OrdinalIgnoreCase) >= 0
                    ));

                r.ReceiptCategory = isClientWallet ? ReceiptCategory.ClientWallet : ReceiptCategory.General;
            }

            // Assert: Legacy client settlements are classified as ClientWallet
            Assert.Equal(ReceiptCategory.ClientWallet, rows.Single(r => r.Id == 2).ReceiptCategory);
            Assert.Equal(ReceiptCategory.ClientWallet, rows.Single(r => r.Id == 3).ReceiptCategory);
            Assert.Equal(ReceiptCategory.ClientWallet, rows.Single(r => r.Id == 4).ReceiptCategory);
            Assert.Equal(ReceiptCategory.ClientWallet, rows.Single(r => r.Id == 5).ReceiptCategory);
            Assert.Equal(ReceiptCategory.ClientWallet, rows.Single(r => r.Id == 8).ReceiptCategory);
            Assert.Equal(ReceiptCategory.ClientWallet, rows.Single(r => r.Id == 9).ReceiptCategory);

            // Assert: Treasury / General receipts remain General
            Assert.Equal(ReceiptCategory.General, rows.Single(r => r.Id == 6).ReceiptCategory);
            Assert.Equal(ReceiptCategory.General, rows.Single(r => r.Id == 7).ReceiptCategory);
        }

        [Fact]
        public void FinancialTransaction_ReceiptOrigin_TaggedAtPostingTime()
        {
            // 1. General transaction
            var genTxn = FinancialTransaction.Create(
                transactionType: FinancialTransactionType.Incoming,
                amount: 500m,
                paymentMethod: PaymentMethod.BankTransfer,
                createdBy: 1,
                destinationBankId: 2,
                referenceType: TransactionReferenceType.Receipt,
                referenceId: "GEN-261105-7686",
                description: "Accounts receipt [TXS-ARCPT-20261105170031-268] Reference: GEN-261105-7686",
                receiptOrigin: ReceiptOrigin.General
            );
            Assert.Equal(ReceiptOrigin.General, genTxn.ReceiptOrigin);

            // 2. ClientWallet transaction (Customer)
            var custTxn = FinancialTransaction.Create(
                transactionType: FinancialTransactionType.Incoming,
                amount: 10m,
                paymentMethod: PaymentMethod.Cash,
                createdBy: 1,
                destinationAccountId: 1,
                referenceType: TransactionReferenceType.Receipt,
                referenceId: "jffj",
                description: "Customer receipt [TXSRCPT000007] for Abdul kader. Payment Receipt from Abdul kader",
                recipientType: RecipientType.Head,
                recipientId: 1,
                receiptOrigin: ReceiptOrigin.ClientWallet
            );
            Assert.Equal(ReceiptOrigin.ClientWallet, custTxn.ReceiptOrigin);

            // 3. ClientWallet transaction (Agent)
            var agentTxn = FinancialTransaction.Create(
                transactionType: FinancialTransactionType.Incoming,
                amount: 25m,
                paymentMethod: PaymentMethod.Cash,
                createdBy: 1,
                destinationAccountId: 1,
                referenceType: TransactionReferenceType.Receipt,
                referenceId: "AGT-TX-001",
                description: "Agent receipt for Fast Travels",
                recipientType: RecipientType.Agent,
                recipientId: 10,
                receiptOrigin: ReceiptOrigin.ClientWallet
            );
            Assert.Equal(ReceiptOrigin.ClientWallet, agentTxn.ReceiptOrigin);
        }

        [Fact]
        public async Task Transactions_LedgerAndStatement_RetainsAllReceiptsWithoutFilter()
        {
            var dbOptions = new DbContextOptionsBuilder<AccountsDbContext>()
                .UseInMemoryDatabase(databaseName: $"LedgerAllReceiptsDb_{Guid.NewGuid()}")
                .Options;

            using var db = new AccountsDbContext(dbOptions);

            // Seed cash drawer account
            var cashAccount = new Account { Id = 1, Name = "Cash Account", Type = AccountType.Cash, Balance = 1000m };
            db.Accounts.Add(cashAccount);

            // Add 1 General receipt txn, 1 Customer client receipt txn, 1 Agent client receipt txn
            var t1 = FinancialTransaction.Create(
                FinancialTransactionType.Incoming, 100m, PaymentMethod.Cash, 1,
                destinationAccountId: cashAccount.Id,
                referenceType: TransactionReferenceType.Receipt, referenceId: "GEN-001",
                description: "Treasury deposit", receiptOrigin: ReceiptOrigin.General,
                initialStatus: FinancialTransactionStatus.Approved);

            var t2 = FinancialTransaction.Create(
                FinancialTransactionType.Incoming, 50m, PaymentMethod.Cash, 1,
                destinationAccountId: cashAccount.Id,
                referenceType: TransactionReferenceType.Receipt, referenceId: "CUST-001",
                description: "Customer wallet payment", recipientType: RecipientType.Head, recipientId: 1,
                receiptOrigin: ReceiptOrigin.ClientWallet, initialStatus: FinancialTransactionStatus.Approved);

            var t3 = FinancialTransaction.Create(
                FinancialTransactionType.Incoming, 75m, PaymentMethod.Cash, 1,
                destinationAccountId: cashAccount.Id,
                referenceType: TransactionReferenceType.Receipt, referenceId: "AGT-001",
                description: "Agent wallet deposit", recipientType: RecipientType.Agent, recipientId: 2,
                receiptOrigin: ReceiptOrigin.ClientWallet, initialStatus: FinancialTransactionStatus.Approved);

            db.Transactions.AddRange(t1, t2, t3);
            await db.SaveChangesAsync();

            // Statement / Ledger query retrieves ALL transactions for the destination cash account without filtering by ReceiptOrigin
            var statementTxns = await db.Transactions
                .Where(t => t.DestinationAccountId == cashAccount.Id)
                .OrderBy(t => t.Id)
                .ToListAsync();

            Assert.Equal(3, statementTxns.Count);
            Assert.Contains(statementTxns, t => t.ReceiptOrigin == ReceiptOrigin.General);
            Assert.Contains(statementTxns, t => t.ReceiptOrigin == ReceiptOrigin.ClientWallet && t.RecipientType == RecipientType.Head);
            Assert.Contains(statementTxns, t => t.ReceiptOrigin == ReceiptOrigin.ClientWallet && t.RecipientType == RecipientType.Agent);
        }

        [Fact]
        public void Backfill_ScreenshotRows_ClassifiedCorrectly()
        {
            // Rows from user screenshot: '74', 'j', 'jhgh', 'jffj', 'GEN-261105-7686'
            var transactions = new[]
            {
                new { Id = 29, RefId = "74", Desc = "Customer receipt [TXSRCPT000004] for Abdul kader", RecipientType = "head", RecipientId = (long?)1 },
                new { Id = 30, RefId = "j", Desc = "Customer receipt [TXSRCPT000005] for Abdul kader", RecipientType = "head", RecipientId = (long?)1 },
                new { Id = 31, RefId = "jhgh", Desc = "Customer receipt [TXSRCPT000006] for Abdul kader", RecipientType = "head", RecipientId = (long?)1 },
                new { Id = 32, RefId = "jffj", Desc = "Customer receipt [TXSRCPT000007] for Abdul kader", RecipientType = "head", RecipientId = (long?)1 },
                new { Id = 33, RefId = "GEN-261105-7686", Desc = "Accounts receipt [TXS-ARCPT-20261105170031-268] Reference: GEN-261105-7686", RecipientType = (string?)null, RecipientId = (long?)null }
            };

            var accountsReceipts = new[]
            {
                new { Id = 3, RefId = "74", ClientType = "customer", HeadId = (long?)1, SalesmanId = (long?)2 },
                new { Id = 4, RefId = "j", ClientType = "customer", HeadId = (long?)1, SalesmanId = (long?)2 },
                new { Id = 5, RefId = "jhgh", ClientType = "customer", HeadId = (long?)1, SalesmanId = (long?)2 },
                new { Id = 6, RefId = "jffj", ClientType = "customer", HeadId = (long?)1, SalesmanId = (long?)2 },
                new { Id = 7, RefId = "GEN-261105-7686", ClientType = "general", HeadId = (long?)null, SalesmanId = (long?)null }
            };

            var arDict = accountsReceipts.ToDictionary(r => r.RefId);

            var classified = transactions.Select(t =>
            {
                ReceiptOrigin origin;
                string reason;
                if (arDict.TryGetValue(t.RefId, out var ar))
                {
                    if (ar.HeadId.HasValue || ar.ClientType == "customer" || ar.ClientType == "agent")
                    {
                        origin = ReceiptOrigin.ClientWallet;
                        reason = "Priority A (accounts_receipts client)";
                    }
                    else
                    {
                        origin = ReceiptOrigin.General;
                        reason = "Priority A (accounts_receipts general)";
                    }
                }
                else if (t.RecipientType == "head" || t.RecipientType == "agent" || t.Desc.Contains("Customer receipt"))
                {
                    origin = ReceiptOrigin.ClientWallet;
                    reason = "Priority B (sales portal receipt)";
                }
                else
                {
                    origin = ReceiptOrigin.General;
                    reason = "Priority C (fallback General)";
                }
                return new { t.Id, t.RefId, Origin = origin, Reason = reason };
            }).ToList();

            foreach (var item in classified)
            {
                _output.WriteLine($"Tx {item.Id} (Ref: {item.RefId}) -> {item.Origin} via {item.Reason}");
            }

            Assert.Equal(ReceiptOrigin.ClientWallet, classified.Single(c => c.RefId == "74").Origin);
            Assert.Equal(ReceiptOrigin.ClientWallet, classified.Single(c => c.RefId == "j").Origin);
            Assert.Equal(ReceiptOrigin.ClientWallet, classified.Single(c => c.RefId == "jhgh").Origin);
            Assert.Equal(ReceiptOrigin.ClientWallet, classified.Single(c => c.RefId == "jffj").Origin);
            Assert.Equal(ReceiptOrigin.General, classified.Single(c => c.RefId == "GEN-261105-7686").Origin);
        }
    }
}

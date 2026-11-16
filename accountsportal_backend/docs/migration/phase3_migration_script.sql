IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;
GO

BEGIN TRANSACTION;
IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20260713114838_InitialCreate'
)
BEGIN
    CREATE TABLE [accounts] (
        [Id] bigint NOT NULL IDENTITY,
        [Name] nvarchar(255) NOT NULL,
        [Type] nvarchar(50) NOT NULL,
        [LedgerType] nvarchar(50) NOT NULL,
        [Balance] decimal(19,3) NOT NULL,
        [CurrentBalance] decimal(19,3) NOT NULL,
        [BankId] bigint NULL,
        [IsActive] bit NOT NULL,
        [CreatedBy] bigint NOT NULL,
        [CreatedAt] datetime2 NOT NULL,
        [UpdatedAt] datetime2 NOT NULL,
        [DeletedAt] datetime2 NULL,
        [RowVersion] rowversion NOT NULL,
        CONSTRAINT [PK_accounts] PRIMARY KEY ([Id])
    );
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20260713114838_InitialCreate'
)
BEGIN
    CREATE TABLE [agents] (
        [Id] bigint NOT NULL IDENTITY,
        [FirstName] nvarchar(255) NOT NULL,
        [LastName] nvarchar(255) NOT NULL,
        [SalesmanId] bigint NULL,
        [PhoneNo] nvarchar(max) NULL,
        [EmailId] nvarchar(max) NULL,
        [Nationality] nvarchar(max) NULL,
        [Address] nvarchar(max) NULL,
        [Wallet] decimal(19,3) NOT NULL,
        [IsVerified] bit NOT NULL,
        [CreatedAt] datetime2 NOT NULL,
        [UpdatedAt] datetime2 NOT NULL,
        [RowVersion] rowversion NOT NULL,
        CONSTRAINT [PK_agents] PRIMARY KEY ([Id])
    );
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20260713114838_InitialCreate'
)
BEGIN
    CREATE TABLE [audit_logs] (
        [Id] bigint NOT NULL IDENTITY,
        [ActorUserId] bigint NULL,
        [Action] nvarchar(255) NOT NULL,
        [EntityType] nvarchar(255) NOT NULL,
        [EntityId] nvarchar(255) NOT NULL,
        [OldState] nvarchar(max) NULL,
        [NewState] nvarchar(max) NULL,
        [Reason] nvarchar(max) NULL,
        [CorrelationId] nvarchar(255) NOT NULL,
        [IpAddress] nvarchar(max) NULL,
        [UserAgent] nvarchar(max) NULL,
        [OccurredAt] datetime2 NOT NULL,
        CONSTRAINT [PK_audit_logs] PRIMARY KEY ([Id])
    );
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20260713114838_InitialCreate'
)
BEGIN
    CREATE TABLE [balance_corrections] (
        [Id] bigint NOT NULL IDENTITY,
        [AccountId] bigint NOT NULL,
        [Amount] decimal(19,3) NOT NULL,
        [BalanceAfter] decimal(19,3) NULL,
        [Reason] nvarchar(max) NOT NULL,
        [EditedBy] bigint NOT NULL,
        [CreatedAt] datetime2 NOT NULL,
        [UpdatedAt] datetime2 NOT NULL,
        CONSTRAINT [PK_balance_corrections] PRIMARY KEY ([Id])
    );
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20260713114838_InitialCreate'
)
BEGIN
    CREATE TABLE [banks] (
        [Id] bigint NOT NULL IDENTITY,
        [BankName] nvarchar(255) NOT NULL,
        [AccountNumber] nvarchar(255) NOT NULL,
        [Balance] decimal(19,3) NOT NULL,
        [CurrentBalance] decimal(19,3) NOT NULL,
        [CreatedBy] bigint NOT NULL,
        [IsActive] bit NOT NULL,
        [CreatedAt] datetime2 NOT NULL,
        [UpdatedAt] datetime2 NOT NULL,
        [DeletedAt] datetime2 NULL,
        [RowVersion] rowversion NOT NULL,
        CONSTRAINT [PK_banks] PRIMARY KEY ([Id])
    );
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20260713114838_InitialCreate'
)
BEGIN
    CREATE TABLE [expense_headers] (
        [Id] bigint NOT NULL IDENTITY,
        [Name] nvarchar(255) NOT NULL,
        [Category] nvarchar(max) NULL,
        [Description] nvarchar(max) NULL,
        [CreatedBy] bigint NULL,
        [CreatedAt] datetime2 NOT NULL,
        [UpdatedAt] datetime2 NOT NULL,
        CONSTRAINT [PK_expense_headers] PRIMARY KEY ([Id])
    );
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20260713114838_InitialCreate'
)
BEGIN
    CREATE TABLE [idempotency_records] (
        [Id] nvarchar(450) NOT NULL,
        [Scope] nvarchar(255) NOT NULL,
        [Key] nvarchar(255) NOT NULL,
        [RequestHash] nvarchar(255) NOT NULL,
        [Status] nvarchar(50) NOT NULL,
        [ResponseStatusCode] int NOT NULL,
        [ResponseBody] nvarchar(max) NULL,
        [CreatedAt] datetime2 NOT NULL,
        [CompletedAt] datetime2 NULL,
        [ExpiresAt] datetime2 NOT NULL,
        CONSTRAINT [PK_idempotency_records] PRIMARY KEY ([Id])
    );
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20260713114838_InitialCreate'
)
BEGIN
    CREATE TABLE [journals] (
        [Id] bigint NOT NULL IDENTITY,
        [DebitPartyType] nvarchar(100) NOT NULL,
        [DebitPartyId] bigint NOT NULL,
        [CreditPartyType] nvarchar(100) NOT NULL,
        [CreditPartyId] bigint NOT NULL,
        [Amount] decimal(19,3) NOT NULL,
        [Status] nvarchar(50) NOT NULL,
        [Note] nvarchar(max) NULL,
        [CreatedBy] bigint NULL,
        [CreatedAt] datetime2 NOT NULL,
        [UpdatedAt] datetime2 NOT NULL,
        CONSTRAINT [PK_journals] PRIMARY KEY ([Id])
    );
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20260713114838_InitialCreate'
)
BEGIN
    CREATE TABLE [outbox_messages] (
        [Id] uniqueidentifier NOT NULL,
        [MessageType] nvarchar(255) NOT NULL,
        [AggregateType] nvarchar(255) NOT NULL,
        [AggregateId] nvarchar(255) NOT NULL,
        [Payload] nvarchar(max) NOT NULL,
        [OccurredAt] datetime2 NOT NULL,
        [AvailableAt] datetime2 NOT NULL,
        [ProcessedAt] datetime2 NULL,
        [AttemptCount] int NOT NULL,
        [LastAttemptAt] datetime2 NULL,
        [LastError] nvarchar(max) NULL,
        [CorrelationId] nvarchar(255) NOT NULL,
        [Status] nvarchar(50) NOT NULL,
        CONSTRAINT [PK_outbox_messages] PRIMARY KEY ([Id])
    );
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20260713114838_InitialCreate'
)
BEGIN
    CREATE TABLE [refresh_tokens] (
        [Id] uniqueidentifier NOT NULL,
        [UserId] bigint NOT NULL,
        [TokenHash] nvarchar(255) NOT NULL,
        [CreatedAt] datetime2 NOT NULL,
        [ExpiresAt] datetime2 NOT NULL,
        [RevokedAt] datetime2 NULL,
        [ReplacedByTokenId] uniqueidentifier NULL,
        CONSTRAINT [PK_refresh_tokens] PRIMARY KEY ([Id])
    );
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20260713114838_InitialCreate'
)
BEGIN
    CREATE TABLE [staff_payroll_records] (
        [Id] bigint NOT NULL IDENTITY,
        [StaffId] bigint NOT NULL,
        [StaffName] nvarchar(255) NOT NULL,
        [Type] nvarchar(50) NOT NULL,
        [Direction] nvarchar(50) NOT NULL,
        [Amount] decimal(19,3) NOT NULL,
        [Month] int NOT NULL,
        [Year] int NOT NULL,
        [SourceAccountId] bigint NULL,
        [SourceBankId] bigint NULL,
        [PaymentMethod] nvarchar(max) NULL,
        [ReferenceNumber] nvarchar(max) NULL,
        [PaymentDate] datetime2 NULL,
        [Notes] nvarchar(max) NULL,
        [Breakdown] nvarchar(max) NULL,
        [Status] nvarchar(50) NOT NULL,
        [ConfirmedBy] bigint NULL,
        [ConfirmedAt] datetime2 NULL,
        [CreatedBy] bigint NOT NULL,
        [CreatedAt] datetime2 NOT NULL,
        [UpdatedAt] datetime2 NOT NULL,
        CONSTRAINT [PK_staff_payroll_records] PRIMARY KEY ([Id])
    );
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20260713114838_InitialCreate'
)
BEGIN
    CREATE TABLE [supplier_payment_statuses] (
        [Id] bigint NOT NULL IDENTITY,
        [ServiceType] nvarchar(255) NOT NULL,
        [ServiceId] nvarchar(255) NOT NULL,
        [IsCompleted] bit NOT NULL,
        [CompletedBy] bigint NULL,
        [CreatedAt] datetime2 NOT NULL,
        [UpdatedAt] datetime2 NOT NULL,
        CONSTRAINT [PK_supplier_payment_statuses] PRIMARY KEY ([Id])
    );
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20260713114838_InitialCreate'
)
BEGIN
    CREATE TABLE [suppliers] (
        [Id] bigint NOT NULL IDENTITY,
        [Name] nvarchar(255) NOT NULL,
        [Code] nvarchar(255) NOT NULL,
        [Wallet] decimal(19,3) NOT NULL,
        [CreditWallet] decimal(19,3) NOT NULL,
        [Categories] nvarchar(max) NOT NULL,
        [IsVerified] bit NOT NULL,
        [CreatedAt] datetime2 NOT NULL,
        [UpdatedAt] datetime2 NOT NULL,
        [DeletedAt] datetime2 NULL,
        [RowVersion] rowversion NOT NULL,
        CONSTRAINT [PK_suppliers] PRIMARY KEY ([Id])
    );
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20260713114838_InitialCreate'
)
BEGIN
    CREATE TABLE [transactions] (
        [Id] bigint NOT NULL IDENTITY,
        [TransactionType] nvarchar(50) NOT NULL,
        [SourceAccountId] bigint NULL,
        [DestinationAccountId] bigint NULL,
        [Amount] decimal(19,3) NOT NULL,
        [BalanceAfter] decimal(19,3) NULL,
        [PaymentMethod] nvarchar(50) NOT NULL,
        [ReferenceType] nvarchar(50) NULL,
        [ReferenceId] nvarchar(450) NULL,
        [Description] nvarchar(max) NULL,
        [ReturnReason] nvarchar(max) NULL,
        [RecipientType] nvarchar(50) NULL,
        [RecipientId] bigint NULL,
        [SupplierId] bigint NULL,
        [OriginalTransactionId] bigint NULL,
        [SupplierName] nvarchar(max) NULL,
        [SourceBankId] bigint NULL,
        [DestinationBankId] bigint NULL,
        [ExpenseHeaderId] bigint NULL,
        [CreatedBy] bigint NOT NULL,
        [CreatedAt] datetime2 NOT NULL,
        [UpdatedAt] datetime2 NOT NULL,
        [Status] nvarchar(50) NOT NULL,
        [ApprovedBy] bigint NULL,
        [ApprovedAt] datetime2 NULL,
        [RejectedBy] bigint NULL,
        [RejectedAt] datetime2 NULL,
        CONSTRAINT [PK_transactions] PRIMARY KEY ([Id])
    );
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20260713114838_InitialCreate'
)
BEGIN
    CREATE TABLE [users] (
        [Id] bigint NOT NULL IDENTITY,
        [Name] nvarchar(max) NOT NULL,
        [Email] nvarchar(255) NOT NULL,
        [PasswordHash] nvarchar(255) NOT NULL,
        [UserType] nvarchar(255) NOT NULL,
        [PortalPermissions] nvarchar(max) NOT NULL,
        [IsActive] bit NOT NULL,
        [LastLoginAt] datetime2 NULL,
        [LastLoginIp] nvarchar(max) NULL,
        [CreatedAt] datetime2 NOT NULL,
        [UpdatedAt] datetime2 NOT NULL,
        CONSTRAINT [PK_users] PRIMARY KEY ([Id])
    );
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20260713114838_InitialCreate'
)
BEGIN
    EXEC(N'CREATE UNIQUE INDEX [IX_agents_SalesmanId] ON [agents] ([SalesmanId]) WHERE [SalesmanId] IS NOT NULL');
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20260713114838_InitialCreate'
)
BEGIN
    CREATE UNIQUE INDEX [IX_banks_AccountNumber] ON [banks] ([AccountNumber]);
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20260713114838_InitialCreate'
)
BEGIN
    CREATE UNIQUE INDEX [IX_idempotency_records_Scope_Key] ON [idempotency_records] ([Scope], [Key]);
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20260713114838_InitialCreate'
)
BEGIN
    CREATE INDEX [IX_outbox_messages_Status_AvailableAt] ON [outbox_messages] ([Status], [AvailableAt]);
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20260713114838_InitialCreate'
)
BEGIN
    CREATE UNIQUE INDEX [IX_refresh_tokens_TokenHash] ON [refresh_tokens] ([TokenHash]);
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20260713114838_InitialCreate'
)
BEGIN
    CREATE INDEX [IX_refresh_tokens_UserId] ON [refresh_tokens] ([UserId]);
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20260713114838_InitialCreate'
)
BEGIN
    CREATE UNIQUE INDEX [IX_suppliers_Code] ON [suppliers] ([Code]);
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20260713114838_InitialCreate'
)
BEGIN
    CREATE INDEX [IX_transactions_ReferenceType_ReferenceId] ON [transactions] ([ReferenceType], [ReferenceId]);
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20260713114838_InitialCreate'
)
BEGIN
    CREATE INDEX [IX_transactions_Status] ON [transactions] ([Status]);
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20260713114838_InitialCreate'
)
BEGIN
    CREATE INDEX [IX_transactions_TransactionType] ON [transactions] ([TransactionType]);
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20260713114838_InitialCreate'
)
BEGIN
    CREATE UNIQUE INDEX [IX_users_Email] ON [users] ([Email]);
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20260713114838_InitialCreate'
)
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20260713114838_InitialCreate', N'9.0.2');
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20260713125838_AddPhase2Entities'
)
BEGIN
    CREATE TABLE [purchase_returns] (
        [Id] bigint NOT NULL IDENTITY,
        [SupplierId] bigint NOT NULL,
        [OriginalPurchaseReference] nvarchar(255) NOT NULL,
        [ExternalReference] nvarchar(255) NULL,
        [Amount] decimal(19,3) NOT NULL,
        [Currency] nvarchar(10) NOT NULL,
        [Reason] nvarchar(500) NOT NULL,
        [Status] nvarchar(50) NOT NULL,
        [RequestedByUserId] bigint NOT NULL,
        [RequestedAt] datetime2 NOT NULL,
        [ApprovedByUserId] bigint NULL,
        [ApprovedAt] datetime2 NULL,
        [RejectedByUserId] bigint NULL,
        [RejectedAt] datetime2 NULL,
        [RejectionReason] nvarchar(500) NULL,
        [CorrelationId] nvarchar(255) NULL,
        [CreatedAt] datetime2 NOT NULL,
        [UpdatedAt] datetime2 NOT NULL,
        [RowVersion] rowversion NOT NULL,
        CONSTRAINT [PK_purchase_returns] PRIMARY KEY ([Id])
    );
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20260713125838_AddPhase2Entities'
)
BEGIN
    CREATE TABLE [sales_returns] (
        [Id] bigint NOT NULL IDENTITY,
        [RecipientType] nvarchar(50) NOT NULL,
        [RecipientId] bigint NOT NULL,
        [OriginalSaleReference] nvarchar(255) NOT NULL,
        [ExternalReference] nvarchar(255) NULL,
        [Amount] decimal(19,3) NOT NULL,
        [Currency] nvarchar(10) NOT NULL,
        [Reason] nvarchar(500) NOT NULL,
        [Status] nvarchar(50) NOT NULL,
        [RequestedByUserId] bigint NOT NULL,
        [RequestedAt] datetime2 NOT NULL,
        [ApprovedByUserId] bigint NULL,
        [ApprovedAt] datetime2 NULL,
        [RejectedByUserId] bigint NULL,
        [RejectedAt] datetime2 NULL,
        [RejectionReason] nvarchar(500) NULL,
        [CorrelationId] nvarchar(255) NULL,
        [CreatedAt] datetime2 NOT NULL,
        [UpdatedAt] datetime2 NOT NULL,
        [RowVersion] rowversion NOT NULL,
        CONSTRAINT [PK_sales_returns] PRIMARY KEY ([Id])
    );
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20260713125838_AddPhase2Entities'
)
BEGIN
    CREATE TABLE [supplier_payments] (
        [Id] bigint NOT NULL IDENTITY,
        [SupplierId] bigint NOT NULL,
        [Amount] decimal(19,3) NOT NULL,
        [Currency] nvarchar(10) NOT NULL,
        [PaymentMethod] nvarchar(50) NOT NULL,
        [SourceType] nvarchar(100) NULL,
        [SourceBankId] bigint NULL,
        [SourceAccountId] bigint NULL,
        [ReferenceNumber] nvarchar(255) NULL,
        [ExternalReference] nvarchar(255) NULL,
        [Description] nvarchar(500) NULL,
        [Status] nvarchar(50) NOT NULL,
        [RequestedByUserId] bigint NOT NULL,
        [RequestedAt] datetime2 NOT NULL,
        [ApprovedByUserId] bigint NULL,
        [ApprovedAt] datetime2 NULL,
        [RejectedByUserId] bigint NULL,
        [RejectedAt] datetime2 NULL,
        [RejectionReason] nvarchar(500) NULL,
        [CorrelationId] nvarchar(255) NULL,
        [CreatedAt] datetime2 NOT NULL,
        [UpdatedAt] datetime2 NOT NULL,
        [RowVersion] rowversion NOT NULL,
        CONSTRAINT [PK_supplier_payments] PRIMARY KEY ([Id])
    );
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20260713125838_AddPhase2Entities'
)
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20260713125838_AddPhase2Entities', N'9.0.2');
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20260713130814_AddRoutingPropertiesToReturns'
)
BEGIN
    ALTER TABLE [supplier_payments] ADD [ServiceType] nvarchar(255) NULL;
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20260713130814_AddRoutingPropertiesToReturns'
)
BEGIN
    ALTER TABLE [sales_returns] ADD [ServiceType] nvarchar(255) NULL;
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20260713130814_AddRoutingPropertiesToReturns'
)
BEGIN
    ALTER TABLE [sales_returns] ADD [SourceAccountId] bigint NULL;
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20260713130814_AddRoutingPropertiesToReturns'
)
BEGIN
    ALTER TABLE [sales_returns] ADD [SourceBankId] bigint NULL;
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20260713130814_AddRoutingPropertiesToReturns'
)
BEGIN
    ALTER TABLE [sales_returns] ADD [SourceType] nvarchar(100) NULL;
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20260713130814_AddRoutingPropertiesToReturns'
)
BEGIN
    ALTER TABLE [purchase_returns] ADD [DestinationAccountId] bigint NULL;
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20260713130814_AddRoutingPropertiesToReturns'
)
BEGIN
    ALTER TABLE [purchase_returns] ADD [DestinationBankId] bigint NULL;
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20260713130814_AddRoutingPropertiesToReturns'
)
BEGIN
    ALTER TABLE [purchase_returns] ADD [DestinationType] nvarchar(100) NULL;
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20260713130814_AddRoutingPropertiesToReturns'
)
BEGIN
    ALTER TABLE [purchase_returns] ADD [ServiceType] nvarchar(255) NULL;
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20260713130814_AddRoutingPropertiesToReturns'
)
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20260713130814_AddRoutingPropertiesToReturns', N'9.0.2');
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20260713150941_AddPhase3AccountingEntities'
)
BEGIN
    CREATE TABLE [accounting_periods] (
        [Id] bigint NOT NULL IDENTITY,
        [Name] nvarchar(100) NOT NULL,
        [FiscalYear] int NOT NULL,
        [PeriodNumber] int NOT NULL,
        [StartDate] datetime2 NOT NULL,
        [EndDate] datetime2 NOT NULL,
        [Status] nvarchar(50) NOT NULL,
        [ClosedAt] datetime2 NULL,
        [ClosedByUserId] bigint NULL,
        [ReopenedAt] datetime2 NULL,
        [ReopenedByUserId] bigint NULL,
        [ReopenReason] nvarchar(500) NULL,
        [CreatedAt] datetime2 NOT NULL,
        [UpdatedAt] datetime2 NOT NULL,
        [RowVersion] rowversion NOT NULL,
        CONSTRAINT [PK_accounting_periods] PRIMARY KEY ([Id])
    );
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20260713150941_AddPhase3AccountingEntities'
)
BEGIN
    CREATE TABLE [chart_of_accounts] (
        [Id] bigint NOT NULL IDENTITY,
        [Code] nvarchar(20) NOT NULL,
        [Name] nvarchar(255) NOT NULL,
        [AccountType] nvarchar(50) NOT NULL,
        [NormalBalance] nvarchar(50) NOT NULL,
        [ParentId] bigint NULL,
        [IsControlAccount] bit NOT NULL,
        [IsSystemAccount] bit NOT NULL,
        [IsActive] bit NOT NULL,
        [Description] nvarchar(500) NULL,
        [CreatedBy] bigint NULL,
        [CreatedAt] datetime2 NOT NULL,
        [UpdatedAt] datetime2 NOT NULL,
        [RowVersion] rowversion NOT NULL,
        CONSTRAINT [PK_chart_of_accounts] PRIMARY KEY ([Id])
    );
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20260713150941_AddPhase3AccountingEntities'
)
BEGIN
    CREATE TABLE [expenses] (
        [Id] bigint NOT NULL IDENTITY,
        [ExpenseNumber] nvarchar(50) NOT NULL,
        [ExpenseCategoryId] bigint NOT NULL,
        [Amount] decimal(19,3) NOT NULL,
        [Currency] nvarchar(10) NOT NULL,
        [Description] nvarchar(500) NOT NULL,
        [PaymentMethod] nvarchar(50) NOT NULL,
        [SourceAccountId] bigint NULL,
        [SourceBankId] bigint NULL,
        [ExpenseDate] datetime2 NOT NULL,
        [Status] nvarchar(50) NOT NULL,
        [PostedTransactionId] bigint NULL,
        [PostedJournalEntryId] bigint NULL,
        [RejectionReason] nvarchar(500) NULL,
        [Notes] nvarchar(1000) NULL,
        [CorrelationId] nvarchar(255) NOT NULL,
        [CreatedBy] bigint NOT NULL,
        [ApprovedBy] bigint NULL,
        [ApprovedAt] datetime2 NULL,
        [RejectedBy] bigint NULL,
        [RejectedAt] datetime2 NULL,
        [PostedBy] bigint NULL,
        [PostedAt] datetime2 NULL,
        [CreatedAt] datetime2 NOT NULL,
        [UpdatedAt] datetime2 NOT NULL,
        [RowVersion] rowversion NOT NULL,
        CONSTRAINT [PK_expenses] PRIMARY KEY ([Id])
    );
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20260713150941_AddPhase3AccountingEntities'
)
BEGIN
    CREATE TABLE [general_ledger_entries] (
        [Id] bigint NOT NULL IDENTITY,
        [AccountId] bigint NOT NULL,
        [JournalEntryId] bigint NOT NULL,
        [JournalEntryLineId] bigint NOT NULL,
        [PostingDate] datetime2 NOT NULL,
        [Debit] decimal(19,3) NOT NULL,
        [Credit] decimal(19,3) NOT NULL,
        [Description] nvarchar(500) NOT NULL,
        [SourceType] nvarchar(100) NOT NULL,
        [SourceId] nvarchar(255) NOT NULL,
        [SourceReference] nvarchar(255) NULL,
        [CorrelationId] nvarchar(255) NOT NULL,
        [CreatedAt] datetime2 NOT NULL,
        CONSTRAINT [PK_general_ledger_entries] PRIMARY KEY ([Id])
    );
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20260713150941_AddPhase3AccountingEntities'
)
BEGIN
    CREATE TABLE [journal_entries] (
        [Id] bigint NOT NULL IDENTITY,
        [JournalNumber] nvarchar(50) NOT NULL,
        [EntryDate] datetime2 NOT NULL,
        [PostingDate] datetime2 NULL,
        [Description] nvarchar(500) NOT NULL,
        [Reference] nvarchar(255) NULL,
        [SourceType] nvarchar(100) NOT NULL,
        [SourceId] nvarchar(255) NULL,
        [Status] nvarchar(50) NOT NULL,
        [ReversalOfJournalEntryId] bigint NULL,
        [ReversedByJournalEntryId] bigint NULL,
        [CorrelationId] nvarchar(255) NOT NULL,
        [CreatedBy] bigint NULL,
        [ApprovedBy] bigint NULL,
        [ApprovedAt] datetime2 NULL,
        [RejectedBy] bigint NULL,
        [RejectedAt] datetime2 NULL,
        [RejectionReason] nvarchar(500) NULL,
        [PostedBy] bigint NULL,
        [CreatedAt] datetime2 NOT NULL,
        [UpdatedAt] datetime2 NOT NULL,
        [RowVersion] rowversion NOT NULL,
        CONSTRAINT [PK_journal_entries] PRIMARY KEY ([Id])
    );
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20260713150941_AddPhase3AccountingEntities'
)
BEGIN
    CREATE TABLE [journal_entry_lines] (
        [Id] bigint NOT NULL IDENTITY,
        [JournalEntryId] bigint NOT NULL,
        [AccountId] bigint NOT NULL,
        [LineNumber] int NOT NULL,
        [LineDescription] nvarchar(500) NULL,
        [Debit] decimal(19,3) NOT NULL,
        [Credit] decimal(19,3) NOT NULL,
        [SourceReference] nvarchar(255) NULL,
        [CreatedAt] datetime2 NOT NULL,
        CONSTRAINT [PK_journal_entry_lines] PRIMARY KEY ([Id]),
        CONSTRAINT [FK_journal_entry_lines_journal_entries_JournalEntryId] FOREIGN KEY ([JournalEntryId]) REFERENCES [journal_entries] ([Id]) ON DELETE CASCADE
    );
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20260713150941_AddPhase3AccountingEntities'
)
BEGIN
    CREATE UNIQUE INDEX [IX_accounting_periods_FiscalYear_PeriodNumber] ON [accounting_periods] ([FiscalYear], [PeriodNumber]);
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20260713150941_AddPhase3AccountingEntities'
)
BEGIN
    CREATE INDEX [IX_accounting_periods_StartDate_EndDate] ON [accounting_periods] ([StartDate], [EndDate]);
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20260713150941_AddPhase3AccountingEntities'
)
BEGIN
    CREATE UNIQUE INDEX [IX_chart_of_accounts_Code] ON [chart_of_accounts] ([Code]);
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20260713150941_AddPhase3AccountingEntities'
)
BEGIN
    CREATE INDEX [IX_expenses_ExpenseCategoryId] ON [expenses] ([ExpenseCategoryId]);
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20260713150941_AddPhase3AccountingEntities'
)
BEGIN
    CREATE INDEX [IX_expenses_ExpenseDate] ON [expenses] ([ExpenseDate]);
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20260713150941_AddPhase3AccountingEntities'
)
BEGIN
    CREATE UNIQUE INDEX [IX_expenses_ExpenseNumber] ON [expenses] ([ExpenseNumber]);
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20260713150941_AddPhase3AccountingEntities'
)
BEGIN
    CREATE INDEX [IX_expenses_Status] ON [expenses] ([Status]);
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20260713150941_AddPhase3AccountingEntities'
)
BEGIN
    CREATE INDEX [IX_general_ledger_entries_AccountId_PostingDate] ON [general_ledger_entries] ([AccountId], [PostingDate]);
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20260713150941_AddPhase3AccountingEntities'
)
BEGIN
    CREATE INDEX [IX_general_ledger_entries_CorrelationId] ON [general_ledger_entries] ([CorrelationId]);
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20260713150941_AddPhase3AccountingEntities'
)
BEGIN
    CREATE INDEX [IX_general_ledger_entries_JournalEntryId] ON [general_ledger_entries] ([JournalEntryId]);
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20260713150941_AddPhase3AccountingEntities'
)
BEGIN
    CREATE INDEX [IX_general_ledger_entries_PostingDate] ON [general_ledger_entries] ([PostingDate]);
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20260713150941_AddPhase3AccountingEntities'
)
BEGIN
    CREATE INDEX [IX_general_ledger_entries_SourceType_SourceId] ON [general_ledger_entries] ([SourceType], [SourceId]);
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20260713150941_AddPhase3AccountingEntities'
)
BEGIN
    CREATE INDEX [IX_journal_entries_EntryDate] ON [journal_entries] ([EntryDate]);
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20260713150941_AddPhase3AccountingEntities'
)
BEGIN
    CREATE UNIQUE INDEX [IX_journal_entries_JournalNumber] ON [journal_entries] ([JournalNumber]);
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20260713150941_AddPhase3AccountingEntities'
)
BEGIN
    CREATE INDEX [IX_journal_entries_SourceType_SourceId] ON [journal_entries] ([SourceType], [SourceId]);
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20260713150941_AddPhase3AccountingEntities'
)
BEGIN
    CREATE INDEX [IX_journal_entries_Status] ON [journal_entries] ([Status]);
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20260713150941_AddPhase3AccountingEntities'
)
BEGIN
    CREATE INDEX [IX_journal_entry_lines_AccountId] ON [journal_entry_lines] ([AccountId]);
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20260713150941_AddPhase3AccountingEntities'
)
BEGIN
    CREATE INDEX [IX_journal_entry_lines_JournalEntryId] ON [journal_entry_lines] ([JournalEntryId]);
END;

IF NOT EXISTS (
    SELECT * FROM [__EFMigrationsHistory]
    WHERE [MigrationId] = N'20260713150941_AddPhase3AccountingEntities'
)
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20260713150941_AddPhase3AccountingEntities', N'9.0.2');
END;

COMMIT;
GO


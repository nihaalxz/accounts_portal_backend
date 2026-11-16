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

CREATE UNIQUE INDEX [IX_agents_SalesmanId] ON [agents] ([SalesmanId]) WHERE [SalesmanId] IS NOT NULL;

CREATE UNIQUE INDEX [IX_banks_AccountNumber] ON [banks] ([AccountNumber]);

CREATE UNIQUE INDEX [IX_idempotency_records_Scope_Key] ON [idempotency_records] ([Scope], [Key]);

CREATE INDEX [IX_outbox_messages_Status_AvailableAt] ON [outbox_messages] ([Status], [AvailableAt]);

CREATE UNIQUE INDEX [IX_refresh_tokens_TokenHash] ON [refresh_tokens] ([TokenHash]);

CREATE INDEX [IX_refresh_tokens_UserId] ON [refresh_tokens] ([UserId]);

CREATE UNIQUE INDEX [IX_suppliers_Code] ON [suppliers] ([Code]);

CREATE INDEX [IX_transactions_ReferenceType_ReferenceId] ON [transactions] ([ReferenceType], [ReferenceId]);

CREATE INDEX [IX_transactions_Status] ON [transactions] ([Status]);

CREATE INDEX [IX_transactions_TransactionType] ON [transactions] ([TransactionType]);

CREATE UNIQUE INDEX [IX_users_Email] ON [users] ([Email]);

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20260713114838_InitialCreate', N'9.0.2');

COMMIT;
GO


using System;

namespace TexasAccountsPortal.Contracts.Transactions
{
    public record CreateIncomingTransactionRequest(
        long? DestinationAccountId,
        long? DestinationBankId,
        decimal Amount,
        string PaymentMethod, // "cash", "bank", "credit"
        string? ReferenceType, // "sale", "expense", etc.
        string? ReferenceId,
        string? Description,
        string? RecipientType = null,
        long? RecipientId = null
    );

    public record CreateOutgoingTransactionRequest(
        long? SourceAccountId,
        long? SourceBankId,
        decimal Amount,
        string PaymentMethod,
        string? ReferenceType,
        string? ReferenceId,
        string? Description,
        long? SupplierId = null,
        string? SupplierName = null,
        string? RecipientType = null,
        long? RecipientId = null
    );

    public record CreateContraTransactionRequest(
        long? SourceAccountId,
        long? SourceBankId,
        long? DestinationAccountId,
        long? DestinationBankId,
        decimal Amount,
        string? Description
    );

    public record RejectTransactionRequest(string Reason);

    public record PartyDto(
        string Type,
        long Id,
        string Name
    );

    public record GlPostingLineDto(
        long AccountId,
        string AccountCode,
        string AccountName,
        decimal Debit,
        decimal Credit,
        string EntryType,
        string? Description
    );

    public record TransactionResponse(
        long Id,
        string TransactionType,
        long? SourceAccountId,
        long? DestinationAccountId,
        long? SourceBankId,
        long? DestinationBankId,
        decimal Amount,
        decimal? BalanceAfter,
        string PaymentMethod,
        string? ReferenceType,
        string? ReferenceId,
        string? Description,
        string Status,
        long? ApprovedBy,
        DateTime? ApprovedAt,
        long? RejectedBy,
        DateTime? RejectedAt,
        string? ReturnReason,
        long? SupplierId,
        string? SupplierName,
        long? ExpenseHeaderId,
        long CreatedBy,
        DateTime CreatedAt,
        string? CreatedByName = null,
        string? ApprovedByName = null,
        string? RejectedByName = null,
        string? SourceAccountName = null,
        string? DestinationAccountName = null,
        string? SourceBankName = null,
        string? DestinationBankName = null,
        string? Direction = null,
        string? DisplayNarrative = null,
        PartyDto? SourceParty = null,
        PartyDto? DestinationParty = null,
        string? PaymentMethodName = null,
        string? ReferenceDisplayName = null,
        string? ReferenceUrl = null,
        string? CorrelationId = null,
        string? RecipientType = null,
        long? RecipientId = null,
        string? RecipientName = null,
        System.Collections.Generic.List<GlPostingLineDto>? GlPostings = null,
        string? DocumentNumber = null,
        string? DisplayDescription = null,
        string? DisplayRecipientName = null
    );
}

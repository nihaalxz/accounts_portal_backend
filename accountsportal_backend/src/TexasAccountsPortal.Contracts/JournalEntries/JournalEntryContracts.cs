using System;

namespace TexasAccountsPortal.Contracts.JournalEntries
{
    public record CreateJournalEntryRequest(
        string DebitPartyType,
        long DebitPartyId,
        string CreditPartyType,
        long CreditPartyId,
        decimal Amount,
        string? Note
    );

    public record JournalEntryResponse(
        long Id,
        string JournalNumber,
        string? TransferReference,
        string DebitPartyType,
        long DebitPartyId,
        string DebitPartyName,
        string CreditPartyType,
        long CreditPartyId,
        string CreditPartyName,
        decimal Amount,
        string Status,
        string? Note,
        long? CreatedBy,
        string? CreatedByName,
        long? ApprovedBy,
        string? ApprovedByName,
        DateTime? ApprovedAt,
        DateTime CreatedAt,
        DateTime UpdatedAt,
        string? RowVersion
    );
}

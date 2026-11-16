using System;
using System.Threading;
using System.Threading.Tasks;

namespace TexasAccountsPortal.Application.Interfaces
{
    public enum PartyType
    {
        Head = 1,
        Agent = 2,
        Supplier = 3
    }

    public sealed record PartyReference(
        PartyType PartyType,
        long PartyId);

    public sealed record PartyTransferResult(
        Guid TransferId,
        string TransferReference,
        decimal Amount,
        DateTime CompletedAt,
        bool Success);

    public interface IPartyTransferService
    {
        Task<PartyTransferResult> TransferAsync(
            PartyReference debitParty,
            PartyReference creditParty,
            decimal amount,
            string description,
            CancellationToken cancellationToken);
    }
}

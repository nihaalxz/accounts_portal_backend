using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace TexasAccountsPortal.Application.Interfaces
{
    public interface ITransactionReferenceResolver
    {
        /// <summary>
        /// Resolves the business DocumentNumber for a given reference type and reference ID.
        /// Returns null if not found or if resolution fails.
        /// </summary>
        Task<string?> ResolveDocumentNumberAsync(string? referenceType, string? referenceId, CancellationToken ct = default);

        /// <summary>
        /// Batch resolves business DocumentNumbers for a collection of (referenceType, referenceId) pairs.
        /// Returns a dictionary mapping normalized key "{referenceType}:{cleanReferenceId}" to DocumentNumber.
        /// </summary>
        Task<IReadOnlyDictionary<string, string>> BatchResolveDocumentNumbersAsync(
            IEnumerable<(string? referenceType, string? referenceId)> references,
            CancellationToken ct = default);
    }
}

using System.Threading;
using System.Threading.Tasks;

namespace TexasAccountsPortal.Domain.Services;

public interface IDocumentNumberGenerator
{
    Task<string> GenerateDocumentNumberAsync(string prefix, string sequenceName, CancellationToken ct = default);
}

using System.Threading;
using System.Threading.Tasks;
using TexasAccountsPortal.Application.Features.Documents.Builders;

namespace TexasAccountsPortal.Application.Features.Documents.Services;

public interface IDocumentGenerationService
{
    Task<byte[]?> GenerateDocumentPdfAsync(DocumentBuildArgs args, CancellationToken ct = default);
}

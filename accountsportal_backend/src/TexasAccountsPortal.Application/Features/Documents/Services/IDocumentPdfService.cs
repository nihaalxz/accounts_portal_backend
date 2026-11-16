using System.Threading;
using System.Threading.Tasks;
using TexasAccountsPortal.Application.Features.Documents.Models;

namespace TexasAccountsPortal.Application.Features.Documents.Services;

public interface IDocumentPdfService
{
    Task<byte[]> GeneratePdfAsync(DocumentDataModel model, CancellationToken ct = default);
}

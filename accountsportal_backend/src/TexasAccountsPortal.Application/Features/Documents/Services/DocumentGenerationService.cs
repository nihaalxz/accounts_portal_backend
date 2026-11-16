using System;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using TexasAccountsPortal.Application.Features.Documents.Builders;
using TexasAccountsPortal.Application.Features.Documents.Factory;

namespace TexasAccountsPortal.Application.Features.Documents.Services;

public class DocumentGenerationService : IDocumentGenerationService
{
    private readonly IDocumentBuilderFactory _builderFactory;
    private readonly IDocumentPdfService _pdfService;
    private readonly ILogger<DocumentGenerationService> _logger;

    public DocumentGenerationService(
        IDocumentBuilderFactory builderFactory,
        IDocumentPdfService pdfService,
        ILogger<DocumentGenerationService> logger)
    {
        _builderFactory = builderFactory;
        _pdfService = pdfService;
        _logger = logger;
    }

    public async Task<byte[]?> GenerateDocumentPdfAsync(DocumentBuildArgs args, CancellationToken ct = default)
    {
        var startTime = DateTime.UtcNow;

        var builder = _builderFactory.GetBuilder(args.Category, args.Type);
        if (builder is null)
        {
            _logger.LogWarning("Unsupported document request for category '{Category}', type '{Type}'.", args.Category, args.Type);
            return null;
        }

        var docModel = await builder.BuildAsync(args, ct);
        if (docModel is null)
        {
            _logger.LogWarning("Document record for '{Category}'/'{Type}' with ID '{EntityId}' was not found.", args.Category, args.Type, args.EntityId);
            return null;
        }

        byte[] pdfBytes = await _pdfService.GeneratePdfAsync(docModel, ct);
        var duration = DateTime.UtcNow - startTime;

        _logger.LogInformation(
            "Generated PDF Document: Category={Category}, Type={Type}, EntityId={EntityId}, Size={Size} bytes, Duration={Duration}ms",
            args.Category, args.Type, args.EntityId, pdfBytes.Length, duration.TotalMilliseconds);

        return pdfBytes;
    }
}

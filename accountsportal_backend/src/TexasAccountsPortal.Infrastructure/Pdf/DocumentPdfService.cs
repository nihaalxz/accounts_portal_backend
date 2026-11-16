using System;
using System.IO;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using QuestPDF.Fluent;
using TexasAccountsPortal.Application.Features.Documents.Models;
using TexasAccountsPortal.Application.Features.Documents.Services;

namespace TexasAccountsPortal.Infrastructure.Pdf;

public class DocumentPdfService : IDocumentPdfService
{
    private readonly IWebHostEnvironment _environment;

    public DocumentPdfService(IWebHostEnvironment environment)
    {
        _environment = environment;
    }

    public Task<byte[]> GeneratePdfAsync(DocumentDataModel model, CancellationToken ct = default)
    {
        string webRootPath = _environment.WebRootPath ?? Path.Combine(Directory.GetCurrentDirectory(), "wwwroot");
        var document = new GenericDocumentPdfDocument(model, webRootPath);
        byte[] pdfBytes = document.GeneratePdf();
        return Task.FromResult(pdfBytes);
    }
}

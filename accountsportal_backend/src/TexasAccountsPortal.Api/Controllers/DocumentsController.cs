using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TexasAccountsPortal.Application.Features.Documents.Builders;
using TexasAccountsPortal.Application.Features.Documents.Factory;
using TexasAccountsPortal.Application.Features.Documents.Services;

namespace TexasAccountsPortal.Api.Controllers;

[ApiController]
[AllowAnonymous]
[Route("api/documents")]
public sealed class DocumentsController : ControllerBase
{
    private readonly IDocumentGenerationService _documentService;

    public DocumentsController(IDocumentGenerationService documentService)
    {
        _documentService = documentService;
    }

    /// <summary>
    /// Generates server-side PDF receipt voucher for individual accounts portal receipt records.
    /// </summary>
    [HttpGet("receipt/{id:long}")]
    public async Task<IActionResult> GetReceiptPdf(long id, CancellationToken ct = default)
    {
        return await BuildReceiptPdfInternal(id, "accounts-receipt", ct);
    }

    [HttpGet("receipt/{entityType}/{id:long}")]
    [HttpGet("invoice/{entityType}/{id:long}")]
    public async Task<IActionResult> GetReceiptByEntityPdf(string entityType, long id, CancellationToken ct = default)
    {
        return await BuildReceiptPdfInternal(id, entityType, ct);
    }

    private async Task<IActionResult> BuildReceiptPdfInternal(long id, string entityType, CancellationToken ct)
    {
        var buildArgs = new DocumentBuildArgs
        {
            Category = "receipt",
            Type = string.IsNullOrWhiteSpace(entityType) ? "accounts-receipt" : entityType,
            EntityId = id
        };

        byte[]? pdfBytes = await _documentService.GenerateDocumentPdfAsync(buildArgs, ct);
        if (pdfBytes is null)
        {
            return NotFound($"Receipt voucher #{id} was not found.");
        }

        string filename = $"RECEIPT-{id}.pdf";
        Response.Headers.Append("Content-Disposition", $"inline; filename=\"{filename}\"");
        return File(pdfBytes, "application/pdf");
    }

    /// <summary>
    /// Generates server-side PDF list report for accounts portal receipts.
    /// </summary>
    [HttpGet("list/{entityType}")]
    public async Task<IActionResult> GetListReportPdf([FromRoute] string entityType, CancellationToken ct = default)
    {
        var queryDict = Request.Query.ToDictionary(q => q.Key, q => q.Value.ToString(), System.StringComparer.OrdinalIgnoreCase);

        var buildArgs = new DocumentBuildArgs
        {
            Category = "list",
            Type = entityType,
            QueryParams = queryDict
        };

        byte[]? pdfBytes = await _documentService.GenerateDocumentPdfAsync(buildArgs, ct);
        if (pdfBytes is null)
        {
            return NotFound($"List report for '{entityType}' was not found.");
        }

        string filename = $"{entityType.ToUpper()}-Report.pdf";
        Response.Headers.Append("Content-Disposition", $"inline; filename=\"{filename}\"");
        return File(pdfBytes, "application/pdf");
    }

    /// <summary>
    /// Centralized endpoint to generate financial report PDFs (account-statement, bank-statement, salesmen-summary, salesman-detail, payments).'
    /// </summary>
    [HttpGet("report/{reportType}")]
    [ProducesResponseType(typeof(FileResult), 200)]
    [ProducesResponseType(400)]
    [ProducesResponseType(404)]
    public async Task<IActionResult> GetReportPdf(
        [FromRoute] string reportType,
        CancellationToken ct = default)
    {
        var queryDict = Request.Query.ToDictionary(q => q.Key, q => q.Value.ToString(), System.StringComparer.OrdinalIgnoreCase);

        var buildArgs = new DocumentBuildArgs
        {
            Category = "report",
            Type = reportType,
            QueryParams = queryDict
        };

        byte[]? pdfBytes = await _documentService.GenerateDocumentPdfAsync(buildArgs, ct);
        if (pdfBytes is null)
        {
            return NotFound($"Report record for '{reportType}' was not found or document type is unsupported.");
        }

        string filename = $"{reportType.ToUpper()}-Report.pdf";
        Response.Headers.Append("Content-Disposition", $"inline; filename=\"{filename}\"");
        return File(pdfBytes, "application/pdf");
    }

    /// <summary>
    /// Cash Account statement PDF helper endpoint.
    /// </summary>
    [HttpGet("account/{id:long}/statement/pdf")]
    public async Task<IActionResult> GetAccountStatementPdf(long id, CancellationToken ct = default)
    {
        return await BuildReportPdfInternal("report", "account-statement", id, ct);
    }

    /// <summary>
    /// Bank statement PDF helper endpoint.
    /// </summary>
    [HttpGet("bank/{id:long}/statement/pdf")]
    public async Task<IActionResult> GetBankStatementPdf(long id, CancellationToken ct = default)
    {
        return await BuildReportPdfInternal("report", "bank-statement", id, ct);
    }

    /// <summary>
    /// Salesmen Summary PDF helper endpoint.
    /// </summary>
    [HttpGet("salesmen/summary/pdf")]
    public async Task<IActionResult> GetSalesmenSummaryPdf(CancellationToken ct = default)
    {
        return await BuildReportPdfInternal("report", "salesmen-summary", null, ct);
    }

    /// <summary>
    /// Individual Salesman Detail PDF helper endpoint.
    /// </summary>
    [HttpGet("salesmen/detail/{id:long}/pdf")]
    public async Task<IActionResult> GetSalesmanDetailPdf(long id, CancellationToken ct = default)
    {
        return await BuildReportPdfInternal("report", "salesman-detail", id, ct);
    }

    private async Task<IActionResult> BuildReportPdfInternal(string category, string type, long? id, CancellationToken ct)
    {
        var queryDict = Request.Query.ToDictionary(q => q.Key, q => q.Value.ToString(), System.StringComparer.OrdinalIgnoreCase);

        var buildArgs = new DocumentBuildArgs
        {
            Category = category,
            Type = type,
            EntityId = id,
            QueryParams = queryDict
        };

        byte[]? pdfBytes = await _documentService.GenerateDocumentPdfAsync(buildArgs, ct);
        if (pdfBytes is null) return NotFound($"Document record for '{type}' was not found.");

        string filename = $"{type.ToUpper()}-Report.pdf";
        Response.Headers.Append("Content-Disposition", $"inline; filename=\"{filename}\"");
        return File(pdfBytes, "application/pdf");
    }
}

using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using TexasAccountsPortal.Application.Features.Documents.Models;

namespace TexasAccountsPortal.Application.Features.Documents.Builders;

public class DocumentBuildArgs
{
    public string Category { get; set; } = string.Empty; // "invoice", "list", "report"
    public string Type { get; set; } = string.Empty; // "account-statement", "bank-statement", "salesmen-summary", "salesman-detail"
    public long? EntityId { get; set; }
    public long UserId { get; set; }
    public IDictionary<string, string> QueryParams { get; set; } = new Dictionary<string, string>();
}

public interface IDocumentBuilder
{
    bool CanBuild(string category, string type);
    Task<DocumentDataModel?> BuildAsync(DocumentBuildArgs args, CancellationToken ct = default);
}

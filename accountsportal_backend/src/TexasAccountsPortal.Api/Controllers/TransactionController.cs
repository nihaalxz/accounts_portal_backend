using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Contracts.Transactions;
using TexasAccountsPortal.Domain.Common;
using TexasAccountsPortal.Domain.Entities;
using TexasAccountsPortal.Domain.Enums;
using TexasAccountsPortal.Domain.Services;

namespace TexasAccountsPortal.Api.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class TransactionController : ApiControllerBase
    {
        private static readonly System.Collections.Concurrent.ConcurrentDictionary<long, string> ExternalUsersCache = new();

        private readonly IAccountsDbContext _dbContext;
        private readonly IFinancialPostingService _postingService;
        private readonly ITransactionPresentationMapper _presentationMapper;
        private readonly ISalesPortalClient? _salesPortalClient;
        private readonly IOperationalPortalClient? _operationalPortalClient;

        public TransactionController(
            IAccountsDbContext dbContext,
            IFinancialPostingService postingService,
            ITransactionPresentationMapper presentationMapper,
            ISalesPortalClient? salesPortalClient = null,
            IOperationalPortalClient? operationalPortalClient = null)
        {
            _dbContext = dbContext;
            _postingService = postingService;
            _presentationMapper = presentationMapper ?? throw new ArgumentNullException(nameof(presentationMapper));
            _salesPortalClient = salesPortalClient;
            _operationalPortalClient = operationalPortalClient;
        }

        [HttpGet]
        [Authorize(Policy = "RequireAccountant")]
        public async Task<ActionResult<IEnumerable<TransactionResponse>>> GetTransactions(
            [FromQuery] string? status,
            [FromQuery] string? type,
            [FromQuery] string? referenceType,
            [FromQuery] string? referenceId,
            [FromQuery] long? bankId,
            [FromQuery] long? accountId,
            [FromQuery] string? search,
            [FromQuery] DateTime? startDate,
            [FromQuery] DateTime? endDate,
            [FromQuery] DateTime? from,
            [FromQuery] DateTime? to,
            [FromQuery] int page = 1,
            [FromQuery] int pageSize = 20,
            CancellationToken ct = default)
        {
            // Paginate bounds
            pageSize = Math.Clamp(pageSize, 1, 1000);
            page = Math.Max(1, page);

            var query = _dbContext.Transactions.AsNoTracking();

            // Date Range Filter (Bahrain AST UTC+3 day boundaries)
            var effectiveStart = startDate ?? from;
            var effectiveEnd = endDate ?? to;
            var (startUtc, endUtc) = BahrainTime.GetUtcRange(effectiveStart, effectiveEnd);

            if (startUtc.HasValue)
            {
                query = query.Where(t => t.CreatedAt >= startUtc.Value);
            }

            if (endUtc.HasValue)
            {
                query = query.Where(t => t.CreatedAt <= endUtc.Value);
            }

            // Filter bankId
            if (bankId.HasValue)
            {
                query = query.Where(t => t.SourceBankId == bankId.Value || t.DestinationBankId == bankId.Value);
            }

            // Filter accountId
            if (accountId.HasValue)
            {
                query = query.Where(t => t.SourceAccountId == accountId.Value || t.DestinationAccountId == accountId.Value);
            }

            // Filter status
            if (!string.IsNullOrEmpty(status) && Enum.TryParse<FinancialTransactionStatus>(status, true, out var parsedStatus))
            {
                query = query.Where(t => t.Status == parsedStatus);
            }

            // Filter type
            if (!string.IsNullOrEmpty(type))
            {
                if (string.Equals(type, "returns", StringComparison.OrdinalIgnoreCase) ||
                    string.Equals(type, "all-returns", StringComparison.OrdinalIgnoreCase) ||
                    string.Equals(type, "returns-all", StringComparison.OrdinalIgnoreCase))
                {
                    query = query.Where(t => t.TransactionType == FinancialTransactionType.PurchaseReturn || t.TransactionType == FinancialTransactionType.SalesReturn);
                }
                else if (string.Equals(type, "receipt", StringComparison.OrdinalIgnoreCase) ||
                         string.Equals(type, "receipts", StringComparison.OrdinalIgnoreCase))
                {
                    query = query.Where(t =>
                        t.ReferenceType == TransactionReferenceType.Receipt ||
                        t.ReceiptOrigin != null ||
                        (t.ReferenceId != null && (t.ReferenceId.StartsWith("RCP") || t.ReferenceId.StartsWith("TXSRCP") || t.ReferenceId.StartsWith("CRCPT") || t.ReferenceId.StartsWith("TEST-RCPT"))) ||
                        (t.Description != null && (t.Description.Contains("Receipt") || t.Description.Contains("receipt")))
                    );
                }
                else if (Enum.TryParse<FinancialTransactionType>(type, true, out var parsedType))
                {
                    query = query.Where(t => t.TransactionType == parsedType);
                }
            }

            // Filter referenceType
            if (!string.IsNullOrEmpty(referenceType) && TransactionReferenceTypeParser.TryParse(referenceType, out var parsedRefType))
            {
                if (parsedRefType == TransactionReferenceType.Receipt)
                {
                    query = query.Where(t =>
                        t.ReferenceType == TransactionReferenceType.Receipt ||
                        t.ReceiptOrigin != null ||
                        (t.ReferenceId != null && (t.ReferenceId.StartsWith("RCP") || t.ReferenceId.StartsWith("TXSRCP") || t.ReferenceId.StartsWith("CRCPT") || t.ReferenceId.StartsWith("TEST-RCPT"))) ||
                        (t.Description != null && (t.Description.Contains("Receipt") || t.Description.Contains("receipt")))
                    );
                }
                else
                {
                    query = query.Where(t => t.ReferenceType == parsedRefType);
                }
            }

            // Filter referenceId
            if (!string.IsNullOrEmpty(referenceId))
            {
                query = query.Where(t => t.ReferenceId == referenceId);
            }

            // Search filter across ID, DocumentNumber, Description, ReferenceId, SupplierName, Party/Bank/Account/User names
            if (!string.IsNullOrWhiteSpace(search))
            {
                var s = search.Trim();
                long? extractedId = null;
                if (long.TryParse(s, out var directId))
                {
                    extractedId = directId;
                }
                else if (s.StartsWith("TXSTRN", StringComparison.OrdinalIgnoreCase))
                {
                    var numPart = s.Substring(6).TrimStart('0', '-');
                    if (long.TryParse(numPart, out var parsedDocId))
                    {
                        extractedId = parsedDocId;
                    }
                }

                // Resolve matching User IDs
                var matchingUserIds = await _dbContext.Users.AsNoTracking()
                    .Where(u => EF.Functions.Like(u.Name, $"%{s}%"))
                    .Select(u => u.Id)
                    .ToListAsync(ct);

                // Resolve matching Agent IDs
                var matchingAgentIds = await _dbContext.Agents.AsNoTracking()
                    .Where(a => EF.Functions.Like(a.FirstName, $"%{s}%") || EF.Functions.Like(a.LastName, $"%{s}%"))
                    .Select(a => a.Id)
                    .ToListAsync(ct);

                // Resolve matching Bank IDs
                var matchingBankIds = await _dbContext.Banks.AsNoTracking()
                    .Where(b => EF.Functions.Like(b.BankName, $"%{s}%"))
                    .Select(b => b.Id)
                    .ToListAsync(ct);

                // Resolve matching Account IDs
                var matchingAccountIds = await _dbContext.Accounts.AsNoTracking()
                    .Where(a => EF.Functions.Like(a.Name, $"%{s}%"))
                    .Select(a => a.Id)
                    .ToListAsync(ct);

                query = query.Where(t =>
                    (extractedId.HasValue && t.Id == extractedId.Value) ||
                    (t.DocumentNumber != null && EF.Functions.Like(t.DocumentNumber, $"%{s}%")) ||
                    (t.ReferenceId != null && EF.Functions.Like(t.ReferenceId, $"%{s}%")) ||
                    (t.Description != null && EF.Functions.Like(t.Description, $"%{s}%")) ||
                    (t.SupplierName != null && EF.Functions.Like(t.SupplierName, $"%{s}%")) ||
                    (t.ReturnReason != null && EF.Functions.Like(t.ReturnReason, $"%{s}%")) ||
                    (t.CreatedBy > 0 && matchingUserIds.Contains(t.CreatedBy)) ||
                    (t.ApprovedBy.HasValue && matchingUserIds.Contains(t.ApprovedBy.Value)) ||
                    (t.RecipientId.HasValue && matchingAgentIds.Contains(t.RecipientId.Value)) ||
                    (t.SourceBankId.HasValue && matchingBankIds.Contains(t.SourceBankId.Value)) ||
                    (t.DestinationBankId.HasValue && matchingBankIds.Contains(t.DestinationBankId.Value)) ||
                    (t.SourceAccountId.HasValue && matchingAccountIds.Contains(t.SourceAccountId.Value)) ||
                    (t.DestinationAccountId.HasValue && matchingAccountIds.Contains(t.DestinationAccountId.Value))
                );
            }

            var rawItems = await query
                .OrderByDescending(t => t.CreatedAt)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync(ct);

            var items = await MapTransactionsToResponsesAsync(rawItems, includeGl: false, ct);
            return Ok(items);
        }

        [HttpGet("{id:long}")]
        [Authorize(Policy = "RequireAccountant")]
        public async Task<ActionResult<TransactionResponse>> GetTransactionById(long id, CancellationToken ct = default)
        {
            var t = await _dbContext.Transactions.AsNoTracking().FirstOrDefaultAsync(tx => tx.Id == id, ct);
            if (t == null)
            {
                return NotFound(new { Message = $"Transaction #{id} not found." });
            }

            var mappedList = await MapTransactionsToResponsesAsync(new[] { t }, includeGl: true, ct);
            return Ok(mappedList.First());
        }

        private Task<List<TransactionResponse>> MapTransactionsToResponsesAsync(
            IEnumerable<FinancialTransaction> transactions,
            bool includeGl,
            CancellationToken ct)
        {
            return _presentationMapper.MapToResponsesAsync(transactions, includeGl, ct);
        }

        [HttpPost("incoming")]
        [Authorize(Policy = "RequireAccountant")]
        public async Task<ActionResult<TransactionResponse>> PostIncoming([FromBody] CreateIncomingTransactionRequest request)
        {
            var idempotencyKey = GetIdempotencyKey();
            try
            {
                var response = await _postingService.PostIncomingTransactionAsync(
                    request,
                    GetCurrentUserId(),
                    idempotencyKey,
                    ReceiptOrigin.General,
                    default
                );
                return Ok(response);
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(new { Message = ex.Message });
            }
            catch (InvalidOperationException ex)
            {
                return Conflict(new { Message = ex.Message });
            }
        }

        [HttpPost("outgoing")]
        [Authorize(Policy = "RequireAccountant")]
        public async Task<ActionResult<TransactionResponse>> PostOutgoing([FromBody] CreateOutgoingTransactionRequest request)
        {
            var idempotencyKey = GetIdempotencyKey();
            try
            {
                var response = await _postingService.PostOutgoingTransactionAsync(
                    request,
                    GetCurrentUserId(),
                    idempotencyKey,
                    default
                );
                return Ok(response);
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(new { Message = ex.Message });
            }
            catch (InvalidOperationException ex)
            {
                return Conflict(new { Message = ex.Message });
            }
        }

        [HttpPost("contra")]
        [Authorize(Policy = "RequireAccountant")]
        public async Task<ActionResult<TransactionResponse>> PostContra([FromBody] CreateContraTransactionRequest request)
        {
            var idempotencyKey = GetIdempotencyKey();
            try
            {
                var response = await _postingService.PostContraTransactionAsync(
                    request,
                    GetCurrentUserId(),
                    idempotencyKey,
                    default
                );
                return Ok(response);
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(new { Message = ex.Message });
            }
            catch (InvalidOperationException ex)
            {
                return Conflict(new { Message = ex.Message });
            }
        }

        [HttpPost("{id}/approve")]
        [Authorize(Policy = "RequireMasterAccountant")]
        public async Task<ActionResult<TransactionResponse>> Approve(long id)
        {
            try
            {
                var response = await _postingService.ApproveTransactionAsync(id, GetCurrentUserId(), default);
                return Ok(response);
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(new { Message = ex.Message });
            }
            catch (InvalidOperationException ex)
            {
                return Conflict(new { Message = ex.Message });
            }
        }

        [HttpPost("{id}/reject")]
        [Authorize(Policy = "RequireMasterAccountant")]
        public async Task<ActionResult<TransactionResponse>> Reject(long id, [FromBody] RejectTransactionRequest request)
        {
            try
            {
                var response = await _postingService.RejectTransactionAsync(id, GetCurrentUserId(), request.Reason, default);
                return Ok(response);
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(new { Message = ex.Message });
            }
            catch (InvalidOperationException ex)
            {
                return Conflict(new { Message = ex.Message });
            }
        }

        private string GetIdempotencyKey()
        {
            HttpContext.Request.Headers.TryGetValue("Idempotency-Key", out var headerValues);
            return headerValues.FirstOrDefault() ?? string.Empty;
        }
    }
}

using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using TexasAccountsPortal.Application.Interfaces;

namespace TexasAccountsPortal.Infrastructure.Services
{
    public class TransactionReferenceResolver : ITransactionReferenceResolver
    {
        private readonly ISalesPortalClient? _salesPortalClient;
        private readonly ILogger<TransactionReferenceResolver>? _logger;
        private readonly ConcurrentDictionary<string, string> _cache = new(StringComparer.OrdinalIgnoreCase);

        public TransactionReferenceResolver(
            ISalesPortalClient? salesPortalClient = null,
            ILogger<TransactionReferenceResolver>? logger = null)
        {
            _salesPortalClient = salesPortalClient;
            _logger = logger;
        }

        public async Task<string?> ResolveDocumentNumberAsync(
            string? referenceType,
            string? referenceId,
            CancellationToken ct = default)
        {
            var normType = NormalizeReferenceType(referenceType);
            var cleanId = CleanReferenceId(referenceId);

            if (string.IsNullOrEmpty(normType) || string.IsNullOrEmpty(cleanId))
            {
                return null;
            }

            var cacheKey = $"{normType}:{cleanId}";
            if (_cache.TryGetValue(cacheKey, out var cachedDocNo))
            {
                return cachedDocNo;
            }

            if (cleanId.StartsWith("TX", StringComparison.OrdinalIgnoreCase))
            {
                _cache[cacheKey] = cleanId;
                return cleanId;
            }

            if (_salesPortalClient == null || !long.TryParse(cleanId, out var numericId) || numericId <= 0)
            {
                return null;
            }

            try
            {
                string? docNo = normType switch
                {
                    "flight" => (await _salesPortalClient.GetFlightBookingByIdAsync(numericId, ct))?.DocumentNumber,
                    "hotel" => (await _salesPortalClient.GetHotelBookingByIdAsync(numericId, ct))?.DocumentNumber,
                    "visa" => (await _salesPortalClient.GetVisaApplicationByIdAsync(numericId, ct))?.DocumentNumber,
                    "vfs" => (await _salesPortalClient.GetVfsAppointmentByIdAsync(numericId, ct))?.DocumentNumber,
                    "holiday" => (await _salesPortalClient.GetHolidayPackageByIdAsync(numericId, ct))?.DocumentNumber,
                    "transport" => (await _salesPortalClient.GetTransportationByIdAsync(numericId, ct))?.DocumentNumber,
                    "other" => (await _salesPortalClient.GetOtherServiceByIdAsync(numericId, ct))?.DocumentNumber,
                    "receipt" => GetReceiptDocNo(await _salesPortalClient.GetReceiptByIdAsync(numericId, ct)),
                    _ => null
                };

                if (!string.IsNullOrWhiteSpace(docNo))
                {
                    _cache[cacheKey] = docNo.Trim();
                    return docNo.Trim();
                }
            }
            catch (Exception ex)
            {
                _logger?.LogWarning(ex, "Failed to resolve reference DocumentNumber for type '{Type}' and ID '{Id}'", referenceType, referenceId);
            }

            return null;
        }

        public async Task<IReadOnlyDictionary<string, string>> BatchResolveDocumentNumbersAsync(
            IEnumerable<(string? referenceType, string? referenceId)> references,
            CancellationToken ct = default)
        {
            var result = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase);
            var toFetch = new List<(string normType, string cleanId, long numericId, string cacheKey)>();

            foreach (var (refType, refId) in references)
            {
                var normType = NormalizeReferenceType(refType);
                var cleanId = CleanReferenceId(refId);

                if (string.IsNullOrEmpty(normType) || string.IsNullOrEmpty(cleanId))
                {
                    continue;
                }

                var cacheKey = $"{normType}:{cleanId}";

                if (_cache.TryGetValue(cacheKey, out var cached))
                {
                    result[cacheKey] = cached;
                }
                else if (long.TryParse(cleanId, out var numId) && numId > 0)
                {
                    if (!toFetch.Any(x => x.cacheKey.Equals(cacheKey, StringComparison.OrdinalIgnoreCase)))
                    {
                        toFetch.Add((normType, cleanId, numId, cacheKey));
                    }
                }
            }

            if (toFetch.Any() && _salesPortalClient != null)
            {
                var fetchTasks = toFetch.Select(async item =>
                {
                    try
                    {
                        var docNo = await ResolveDocumentNumberAsync(item.normType, item.cleanId, ct);
                        if (!string.IsNullOrWhiteSpace(docNo))
                        {
                            return (item.cacheKey, docNo);
                        }
                    }
                    catch (Exception ex)
                    {
                        _logger?.LogWarning(ex, "Batch resolution failed for key '{CacheKey}'", item.cacheKey);
                    }
                    return (item.cacheKey, (string?)null);
                });

                var fetched = await Task.WhenAll(fetchTasks);
                foreach (var (key, docNo) in fetched)
                {
                    if (!string.IsNullOrWhiteSpace(docNo))
                    {
                        result[key] = docNo!;
                    }
                }
            }

            return result;
        }

        public static string? NormalizeReferenceType(string? rawType)
        {
            var parsed = TexasAccountsPortal.Domain.Services.TransactionReferenceTypeParser.Normalize(rawType);
            return parsed.HasValue ? TexasAccountsPortal.Domain.Services.TransactionReferenceTypeParser.ToApiString(parsed.Value) : null;
        }

        public static string? CleanReferenceId(string? rawId)
        {
            if (string.IsNullOrWhiteSpace(rawId)) return null;

            var cleaned = rawId.Trim();
            if (cleaned.StartsWith("#"))
            {
                cleaned = cleaned.TrimStart('#').Trim();
            }

            return cleaned;
        }
        private static string? GetReceiptDocNo(TexasAccountsPortal.Contracts.SalesEntries.ReceiptDetailResponse? receipt)
        {
            if (receipt == null) return null;
            if (!string.IsNullOrWhiteSpace(receipt.DocumentNumber)) return receipt.DocumentNumber.Trim();
            if (!string.IsNullOrWhiteSpace(receipt.ReceiptId)) return receipt.ReceiptId.Trim();
            return null;
        }
    }
}

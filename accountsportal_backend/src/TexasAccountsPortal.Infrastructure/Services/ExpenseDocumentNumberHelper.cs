using System;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Domain.Services;

namespace TexasAccountsPortal.Infrastructure.Services;

internal static class ExpenseDocumentNumberHelper
{
    private const string Prefix = "TXSEXP";
    private const string SequenceName = "Seq_ExpenseDocNo";
    private const int MaxSequenceAttempts = 25;
    private const int MaxFallbackAttempts = 10;

    /// <summary>
    /// Generates an expense document number that does not collide with existing expenses.
    /// Skips any numbers already present in <see cref="IAccountsDbContext.Expenses"/> and falls back
    /// to a high-entropy unique identifier if sequence candidates are exhausted.
    /// </summary>
    public static async Task<string> GenerateUniqueExpenseNumberAsync(
        IAccountsDbContext db,
        IDocumentNumberGenerator? documentNumberGenerator,
        CancellationToken ct = default)
    {
        if (documentNumberGenerator != null)
        {
            for (var attempt = 0; attempt < MaxSequenceAttempts; attempt++)
            {
                var candidate = await documentNumberGenerator.GenerateDocumentNumberAsync(Prefix, SequenceName, ct);
                if (!await ExistsAsync(db, candidate, ct))
                {
                    return candidate;
                }
            }
        }

        for (var attempt = 0; attempt < MaxFallbackAttempts; attempt++)
        {
            var fallback = CreateHighEntropyNumber();
            if (!await ExistsAsync(db, fallback, ct))
            {
                return fallback;
            }
        }

        return CreateHighEntropyNumber();
    }

    internal static string CreateHighEntropyNumber()
        => $"{Prefix}{DateTime.UtcNow:yyyyMMddHHmmss}{Guid.NewGuid().ToString("N")[..6].ToUpperInvariant()}";

    private static Task<bool> ExistsAsync(IAccountsDbContext db, string candidate, CancellationToken ct)
        => db.Expenses.AsNoTracking().AnyAsync(
            e => e.ExpenseNumber == candidate || e.DocumentNumber == candidate,
            ct);
}

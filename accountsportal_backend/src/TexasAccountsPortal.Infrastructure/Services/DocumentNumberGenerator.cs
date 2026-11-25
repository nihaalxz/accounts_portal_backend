using System;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TexasAccountsPortal.Domain.Services;
using TexasAccountsPortal.Infrastructure.Data;

namespace TexasAccountsPortal.Infrastructure.Services;

public class DocumentNumberGenerator : IDocumentNumberGenerator
{
    private readonly AccountsDbContext _dbContext;

    public DocumentNumberGenerator(AccountsDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<string> GenerateDocumentNumberAsync(string prefix, string sequenceName, CancellationToken ct = default)
    {
        try
        {
            var sql = $@"
                IF NOT EXISTS (SELECT * FROM sys.sequences WHERE name = '{sequenceName}')
                BEGIN
                    EXEC('CREATE SEQUENCE dbo.{sequenceName} START WITH 1 INCREMENT BY 1');
                END;
                SELECT NEXT VALUE FOR dbo.{sequenceName};";

            var conn = _dbContext.Database.GetDbConnection();
            if (conn.State != System.Data.ConnectionState.Open)
            {
                await conn.OpenAsync(ct);
            }

            using var cmd = conn.CreateCommand();
            cmd.CommandText = sql;
            var result = await cmd.ExecuteScalarAsync(ct);
            long seq = result != null && result != DBNull.Value ? Convert.ToInt64(result) : 1;

            return $"{prefix}{seq:D6}";
        }
        catch
        {
            return $"{prefix}{DateTime.UtcNow:yyyyMMddHHmmss}{Random.Shared.Next(1000, 9999)}";
        }
    }
}

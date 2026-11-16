using System;

namespace TexasAccountsPortal.Contracts.Agents
{
    public record CreateAgentRequest(
        string FirstName,
        string? LastName,
        long? SalesmanId,
        string? PhoneNo,
        string? EmailId,
        string? Nationality,
        string? Address
    );

    public record UpdateAgentRequest(
        string FirstName,
        string? LastName,
        string? PhoneNo,
        string? EmailId,
        string? Nationality,
        string? Address
    );

    public record AgentResponse(
        long Id,
        string FirstName,
        string? LastName,
        string FullName,
        long? SalesmanId,
        string? PhoneNo,
        string? EmailId,
        string? Nationality,
        string? Address,
        decimal Wallet,
        bool IsVerified,
        DateTime CreatedAt
    );
}

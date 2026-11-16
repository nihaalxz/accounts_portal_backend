using System.Collections.Generic;
using TexasAccountsPortal.Domain.Entities;

namespace TexasAccountsPortal.Application.Interfaces
{
    public record TokenResult(string AccessToken, string RefreshToken);

    public interface ITokenService
    {
        TokenResult GenerateTokens(AccountsUser user);
    }
}

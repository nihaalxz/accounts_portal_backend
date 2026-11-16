using Microsoft.AspNetCore.Authentication;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Text.Encodings.Web;
using System.Threading.Tasks;
using TexasAccountsPortal.Infrastructure.Options;

namespace TexasAccountsPortal.Api.Authentication
{
    public class InternalServiceAuthenticationHandler : AuthenticationHandler<AuthenticationSchemeOptions>
    {
        private const string ApiKeyHeaderName = "X-OPS-KEY";
        private readonly InternalServiceAuthenticationOptions _authOptions;

        public InternalServiceAuthenticationHandler(
            IOptionsMonitor<AuthenticationSchemeOptions> options,
            ILoggerFactory logger,
            UrlEncoder encoder,
            IOptions<InternalServiceAuthenticationOptions> authOptions)
            : base(options, logger, encoder)
        {
            _authOptions = authOptions.Value;
        }

        protected override Task<AuthenticateResult> HandleAuthenticateAsync()
        {
            if (!Request.Headers.TryGetValue(ApiKeyHeaderName, out var extractedApiKeyValues))
            {
                return Task.FromResult(AuthenticateResult.NoResult());
            }

            var extractedApiKey = extractedApiKeyValues.ToString();
            var expectedApiKey = _authOptions.ServiceKey;

            if (string.IsNullOrEmpty(expectedApiKey))
            {
                return Task.FromResult(AuthenticateResult.Fail("Service key is not configured."));
            }

            if (!ConstantTimeEquals(extractedApiKey, expectedApiKey))
            {
                return Task.FromResult(AuthenticateResult.Fail("Invalid service credentials."));
            }

            var claims = new[]
            {
                new Claim(ClaimTypes.Name, "TexasOperationalPortal"),
                new Claim(ClaimTypes.Role, "InternalService")
            };

            var identity = new ClaimsIdentity(claims, Scheme.Name);
            var principal = new ClaimsPrincipal(identity);
            var ticket = new AuthenticationTicket(principal, Scheme.Name);

            return Task.FromResult(AuthenticateResult.Success(ticket));
        }

        private static bool ConstantTimeEquals(string a, string b)
        {
            if (a.Length != b.Length)
            {
                return false;
            }

            var aBytes = Encoding.UTF8.GetBytes(a);
            var bBytes = Encoding.UTF8.GetBytes(b);

            return CryptographicOperations.FixedTimeEquals(aBytes, bBytes);
        }
    }
}

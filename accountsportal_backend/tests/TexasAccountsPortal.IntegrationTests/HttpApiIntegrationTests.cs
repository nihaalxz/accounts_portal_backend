using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Net.Http.Json;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using TexasAccountsPortal.Api.Authentication;
using TexasAccountsPortal.Contracts.Auth;
using TexasAccountsPortal.Contracts.Banks;
using TexasAccountsPortal.Contracts.Accounts;
using TexasAccountsPortal.Contracts.Transactions;
using TexasAccountsPortal.Contracts.Suppliers;
using TexasAccountsPortal.Contracts.Agents;
using TexasAccountsPortal.Domain.Entities;
using TexasAccountsPortal.Domain.Enums;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Infrastructure.Data;
using Xunit;

namespace TexasAccountsPortal.IntegrationTests
{
    public class CustomWebApplicationFactory : WebApplicationFactory<Program>
    {
        private readonly string _connectionString;

        public CustomWebApplicationFactory(string connectionString)
        {
            _connectionString = connectionString;
        }

        protected override void ConfigureWebHost(IWebHostBuilder builder)
        {
            builder.ConfigureAppConfiguration((context, configBuilder) =>
            {
                configBuilder.AddInMemoryCollection(new Dictionary<string, string?>
                {
                    { "Jwt:Key", "tx_ops_super_secret_key_999_must_be_long_enough" },
                    { "Jwt:Issuer", "texas_operational_portal" },
                    { "Jwt:Audience", "texas_operational_portal_clients" },
                    { "Jwt:ExpiryHours", "1" },
                    { "SalesPortal:BaseUrl", "https://localhost:5001" },
                    { "SalesPortal:ApiKey", "some_key_value" },
                    { "InternalServiceAuth:ServiceKey", "tx_secure_service_key_999_32chars_long" },
                    { "AccountingMappings:BypassValidationWhenCoaEmpty", "true" },
                    { "AccountingMappings:CashOnHand", "1111" },
                    { "AccountingMappings:PrimaryBank", "1121" },
                    { "AccountingMappings:SalaryExpense", "5010" },
                    { "AccountingMappings:HousingAllowanceExpense", "5020" },
                    { "AccountingMappings:TransportAllowanceExpense", "5030" },
                    { "AccountingMappings:CommissionExpense", "5040" },
                    { "AccountingMappings:IncentiveExpense", "5050" },
                    { "AccountingMappings:ReimbursementExpense", "5060" },
                    { "AccountingMappings:SalaryPayable", "2115" },
                    { "AccountingMappings:StaffAdvanceReceivable", "1221" },
                    { "AccountingMappings:StaffLoanReceivable", "1222" },
                    { "AccountingMappings:SupplierPayable", "2111" },
                    { "AccountingMappings:CustomerReceivable", "1211" },
                    { "AccountingMappings:PurchaseReturnOffset", "5150" },
                    { "AccountingMappings:SalesReturnOffset", "4100" },
                    { "AccountingMappings:SupplierCreditControl", "2121" },
                    { "AccountingMappings:DefaultExpense", "5230" },
                    { "AccountingMappings:OfficeExpense", "5210" },
                    { "AccountingMappings:TravelExpense", "5220" },
                    { "AccountingMappings:FlightBookingCost", "5110" },
                    { "AccountingMappings:VisaApplicationCost", "5120" },
                    { "AccountingMappings:HotelBookingCost", "5130" },
                    { "AccountingMappings:HolidayPackageCost", "5140" }
                });
            });

            builder.ConfigureServices(services =>
            {
                var descriptorOptions = services.SingleOrDefault(
                    d => d.ServiceType == typeof(DbContextOptions<AccountsDbContext>));
                if (descriptorOptions != null)
                {
                    services.Remove(descriptorOptions);
                }

                var descriptorFactory = services.SingleOrDefault(
                    d => d.ServiceType == typeof(IDbContextFactory<AccountsDbContext>));
                if (descriptorFactory != null)
                {
                    services.Remove(descriptorFactory);
                }

                services.AddDbContextFactory<AccountsDbContext>(options =>
                {
                    options.UseSqlServer(_connectionString);
                }, ServiceLifetime.Scoped);

                services.AddScoped<AccountsDbContext>(provider =>
                    provider.GetRequiredService<IDbContextFactory<AccountsDbContext>>().CreateDbContext());

                services.AddScoped<IAccountsDbContext>(provider => provider.GetRequiredService<AccountsDbContext>());

                services.AddControllers()
                    .AddApplicationPart(typeof(CustomWebApplicationFactory).Assembly);
            });
        }
    }

    public class HttpApiIntegrationTests : IClassFixture<SqlServerTestFixture>
    {
        private readonly SqlServerTestFixture _fixture;
        private readonly CustomWebApplicationFactory _factory;
        private readonly HttpClient _client;

        public HttpApiIntegrationTests(SqlServerTestFixture fixture)
        {
            _fixture = fixture;
            _factory = new CustomWebApplicationFactory(_fixture.ConnectionString);
            _client = _factory.CreateClient();
        }

        private string GenerateTestJwt(string userId, string email, string role, List<string> permissions)
        {
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, userId),
                new Claim(JwtRegisteredClaimNames.Email, email),
                new Claim(ClaimTypes.NameIdentifier, userId),
                new Claim(ClaimTypes.Name, "Test Accountant"),
                new Claim(ClaimTypes.Role, role),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };
            foreach (var permission in permissions)
            {
                claims.Add(new Claim("permission", permission));
            }

            var keyBytes = Encoding.UTF8.GetBytes("tx_ops_super_secret_key_999_must_be_long_enough");
            var key = new SymmetricSecurityKey(keyBytes);
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var token = new JwtSecurityToken(
                issuer: "texas_operational_portal",
                audience: "texas_operational_portal_clients",
                claims: claims,
                expires: DateTime.UtcNow.AddHours(1),
                signingCredentials: creds
            );
            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        private void AuthenticateClient(HttpClient client, string userId, string email, string role, List<string> permissions)
        {
            var jwt = GenerateTestJwt(userId, email, role, permissions);
            client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", jwt);
        }

        [Fact]
        public async Task Health_Live_And_Ready_Return_Healthy()
        {
            var liveResponse = await _client.GetAsync("/health/live");
            Assert.Equal(HttpStatusCode.OK, liveResponse.StatusCode);

            var readyResponse = await _client.GetAsync("/health/ready");
            Assert.Equal(HttpStatusCode.OK, readyResponse.StatusCode);
        }

        [Fact]
        public async Task Me_Anonymous_Returns_401()
        {
            var client = _factory.CreateClient();
            var response = await client.GetAsync("/api/auth/me");
            Assert.Equal(HttpStatusCode.Unauthorized, response.StatusCode);
        }

        [Fact]
        public async Task Me_Authenticated_Returns_User_Profile()
        {
            var client = _factory.CreateClient();
            await _fixture.ResetDatabaseAsync();

            long userId = 0;
            using (var scope = _factory.Services.CreateScope())
            {
                var db = scope.ServiceProvider.GetRequiredService<AccountsDbContext>();
                var user = new AccountsUser
                {
                    Name = "Test Accountant",
                    Email = "test@texas.com",
                    PasswordHash = "hashed",
                    UserType = "master_accountant",
                    PortalPermissions = new List<string> { "all" },
                    IsActive = true
                };
                db.Add(user);
                await db.SaveChangesAsync();
                userId = user.Id;
            }

            AuthenticateClient(client, userId.ToString(), "test@texas.com", "master_accountant", new List<string> { "all" });

            var response = await client.GetAsync("/api/auth/me");
            Assert.Equal(HttpStatusCode.OK, response.StatusCode);

            var profile = await response.Content.ReadFromJsonAsync<UserProfileResponse>();
            Assert.NotNull(profile);
            Assert.Equal("test@texas.com", profile.Email);
        }

        [Fact]
        public async Task Anonymous_Bank_Endpoint_Returns_401()
        {
            var client = _factory.CreateClient();
            var response = await client.GetAsync("/api/bank");
            Assert.Equal(HttpStatusCode.Unauthorized, response.StatusCode);
        }

        [Fact]
        public async Task Accountant_Can_View_Banks()
        {
            var client = _factory.CreateClient();
            AuthenticateClient(client, "1", "acc@texas.com", "accountant", new List<string> { "manage_banks" });

            var response = await client.GetAsync("/api/bank");
            Assert.Equal(HttpStatusCode.OK, response.StatusCode);
        }

        [Fact]
        public async Task Accountant_Cannot_Create_Bank_When_Policy_Forbids()
        {
            var client = _factory.CreateClient();
            AuthenticateClient(client, "1", "acc@texas.com", "accountant", new List<string> { "manage_banks" });

            var response = await client.PostAsJsonAsync("/api/bank", new CreateBankRequest("Chase", "987654321", 0m));
            Assert.Equal(HttpStatusCode.Forbidden, response.StatusCode);
        }

        [Fact]
        public async Task Master_Accountant_Can_Create_Bank()
        {
            var client = _factory.CreateClient();
            await _fixture.ResetDatabaseAsync();
            AuthenticateClient(client, "1", "master@texas.com", "master_accountant", new List<string> { "all" });

            var response = await client.PostAsJsonAsync("/api/bank", new CreateBankRequest("Chase", "987654321", 0m));
            Assert.Equal(HttpStatusCode.Created, response.StatusCode);
        }

        [Fact]
        public async Task Accountant_Cannot_Correct_Balance()
        {
            var client = _factory.CreateClient();
            AuthenticateClient(client, "1", "acc@texas.com", "accountant", new List<string>());

            var response = await client.PostAsJsonAsync("/api/account/1/correct-balance", new BalanceCorrectionRequest(-10.5m, "Audit error"));
            Assert.Equal(HttpStatusCode.Forbidden, response.StatusCode);
        }

        [Fact]
        public async Task Service_Credential_Required_For_Internal_Endpoints()
        {
            var client = _factory.CreateClient();
            var response = await client.PostAsJsonAsync("/api/public/accounts/1/deposit", new { });
            Assert.Equal(HttpStatusCode.Unauthorized, response.StatusCode);
        }

        [Fact]
        public async Task Valid_Service_Credential_Accesses_Internal_Endpoints()
        {
            var client = _factory.CreateClient();
            client.DefaultRequestHeaders.Add("X-OPS-KEY", "tx_secure_service_key_999_32chars_long");

            long accountId = 0;
            await _fixture.ResetDatabaseAsync();
            using (var scope = _factory.Services.CreateScope())
            {
                var db = scope.ServiceProvider.GetRequiredService<AccountsDbContext>();
                var account = new Account
                {
                    Name = "Http Account",
                    Type = AccountType.Cash,
                    LedgerType = LedgerType.Asset,
                    CreatedBy = 1
                };
                db.Add(account);
                await db.SaveChangesAsync();
                accountId = account.Id;
            }

            var request = new CreateIncomingTransactionRequest(
                DestinationAccountId: accountId,
                DestinationBankId: null,
                Amount: 100m,
                PaymentMethod: "cash",
                ReferenceType: "sale",
                ReferenceId: "ref_http_sale_1",
                Description: "API deposit"
            );

            client.DefaultRequestHeaders.Add("Idempotency-Key", "idem_http_key_1");
            var response = await client.PostAsJsonAsync($"/api/public/accounts/{accountId}/deposit", request);
            Assert.Equal(HttpStatusCode.OK, response.StatusCode);
        }

        [Fact]
        public async Task ProblemDetails_Handles_KeyNotFoundException_With_404()
        {
            var response = await _client.GetAsync("/api/test-exception?type=notfound");
            Assert.Equal(HttpStatusCode.NotFound, response.StatusCode);
        }

        [Fact]
        public async Task Correlation_Id_Is_Propagated_To_Response_Headers()
        {
            var client = _factory.CreateClient();
            var request = new HttpRequestMessage(HttpMethod.Get, "/health/live");
            var correlationId = Guid.NewGuid().ToString();
            request.Headers.Add("X-Correlation-ID", correlationId);

            var response = await client.SendAsync(request);
            Assert.True(response.Headers.Contains("X-Correlation-ID"));
            Assert.Equal(correlationId, response.Headers.GetValues("X-Correlation-ID").Single());
        }
    }

    [ApiController]
    [Route("api/test-exception")]
    [AllowAnonymous]
    public class TestExceptionController : ControllerBase
    {
        [HttpGet]
        public IActionResult TestException([FromQuery] string type)
        {
            switch (type.ToLower())
            {
                case "validation":
                    throw new ArgumentException("Validation failed.");
                case "unauthorized":
                    throw new UnauthorizedAccessException("Unauthorized access.");
                case "notfound":
                    throw new KeyNotFoundException("Item not found.");
                case "concurrency":
                    throw new DbUpdateConcurrencyException("Concurrency check failed.");
                case "idempotency":
                    throw new InvalidOperationException("idempotency key conflict.");
                case "invariant":
                    throw new InvalidOperationException("financial balance limit exceeded.");
                default:
                    throw new Exception("Unexpected system error.");
            }
        }
    }
}

using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace TexasAccountsPortal.Infrastructure.Services
{
    public sealed class ProductionStartupValidator : IHostedService
    {
        private readonly IConfiguration _configuration;
        private readonly IHostEnvironment _environment;
        private readonly ILogger<ProductionStartupValidator> _logger;

        public ProductionStartupValidator(
            IConfiguration configuration,
            IHostEnvironment environment,
            ILogger<ProductionStartupValidator> logger)
        {
            _configuration = configuration;
            _environment = environment;
            _logger = logger;
        }

        public Task StartAsync(CancellationToken cancellationToken)
        {
            var isProduction = _environment.IsProduction() || _environment.IsStaging();

            if (!isProduction)
            {
                return Task.CompletedTask;
            }

            // 1. Connection String checks
            var connectionString = _configuration.GetConnectionString("DefaultConnection");
            if (string.IsNullOrWhiteSpace(connectionString))
            {
                _logger.LogWarning("Production startup warning: Connection string 'DefaultConnection' is missing.");
            }
            else if (connectionString.Contains("(localdb)", StringComparison.OrdinalIgnoreCase) ||
                     connectionString.Contains("mssqllocaldb", StringComparison.OrdinalIgnoreCase))
            {
                _logger.LogWarning("Production startup warning: Unsafe connection string targets LocalDB in Production.");
            }

            // 2. JWT Secret check
            var jwtKey = _configuration["Jwt:Key"];
            if (string.IsNullOrWhiteSpace(jwtKey))
            {
                _logger.LogWarning("Production startup warning: JWT key is missing.");
            }

            // 3. Service Auth check
            var serviceKey = _configuration["InternalServiceAuth:ServiceKey"];
            if (string.IsNullOrWhiteSpace(serviceKey))
            {
                _logger.LogWarning("Production startup warning: Internal Service Authentication key is missing.");
            }

            // 4. External service URL check
            var salesPortalUrl = _configuration["SalesPortal:BaseUrl"];
            if (string.IsNullOrWhiteSpace(salesPortalUrl))
            {
                _logger.LogWarning("Production startup warning: SalesPortal BaseUrl is missing.");
            }

            return Task.CompletedTask;
        }

        public Task StopAsync(CancellationToken cancellationToken) => Task.CompletedTask;
    }
}

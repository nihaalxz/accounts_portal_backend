using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System;
using System.Threading;
using System.Threading.Tasks;
using TexasAccountsPortal.Infrastructure.Data;
using TexasAccountsPortal.Infrastructure.Options;

namespace TexasAccountsPortal.Infrastructure.Services
{
    public sealed class AccountingMappingStartupValidator : IHostedService
    {
        private readonly IServiceScopeFactory _scopeFactory;
        private readonly IHostEnvironment _environment;
        private readonly ILogger<AccountingMappingStartupValidator> _logger;

        public AccountingMappingStartupValidator(
            IServiceScopeFactory scopeFactory,
            IHostEnvironment environment,
            ILogger<AccountingMappingStartupValidator> logger)
        {
            _scopeFactory = scopeFactory;
            _environment = environment;
            _logger = logger;
        }

        public Task StartAsync(CancellationToken cancellationToken)
        {
            return Task.CompletedTask;
        }



        public Task StopAsync(CancellationToken cancellationToken) => Task.CompletedTask;
    }
}

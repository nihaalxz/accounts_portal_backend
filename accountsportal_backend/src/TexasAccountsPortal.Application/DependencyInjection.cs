using Microsoft.Extensions.DependencyInjection;
using TexasAccountsPortal.Application.Interfaces;

namespace TexasAccountsPortal.Application
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddApplication(this IServiceCollection services)
        {
            return services;
        }
    }
}

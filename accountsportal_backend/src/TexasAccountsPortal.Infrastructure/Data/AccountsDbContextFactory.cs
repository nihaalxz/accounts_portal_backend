using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace TexasAccountsPortal.Infrastructure.Data
{
    public class AccountsDbContextFactory : IDesignTimeDbContextFactory<AccountsDbContext>
    {
        public AccountsDbContext CreateDbContext(string[] args)
        {
            var optionsBuilder = new DbContextOptionsBuilder<AccountsDbContext>();
            var connectionString = "Server=db67450.public.databaseasp.net; Database=db67450; User Id=db67450; Password=qL=9+t4S5%Bn; Encrypt=True; TrustServerCertificate=True; MultipleActiveResultSets=True;";
            optionsBuilder.UseSqlServer(connectionString);

            return new AccountsDbContext(optionsBuilder.Options);
        }
    }
}

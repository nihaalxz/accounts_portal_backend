using TexasAccountsPortal.Application.Interfaces;

namespace TexasAccountsPortal.Infrastructure.Services
{
    public class PasswordHasher : IPasswordHasher
    {
        public string HashPassword(string password)
        {
            // BCrypt hashing
            return BCrypt.Net.BCrypt.HashPassword(password);
        }

        public bool VerifyPassword(string password, string hashedPassword)
        {
            try
            {
                // BCrypt.Net supports verifying standard PHP/Laravel BCrypt hashes ($2y$ salt prefix)
                return BCrypt.Net.BCrypt.Verify(password, hashedPassword);
            }
            catch
            {
                return false;
            }
        }
    }
}

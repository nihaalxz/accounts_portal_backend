using System;
using System.Collections.Generic;

namespace TexasAccountsPortal.Domain.Entities
{
    public class AccountsUser
    {
        public long Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string PasswordHash { get; set; } = string.Empty;
        public string UserType { get; set; } = string.Empty; // "master_accountant", "Accounts"
        public List<string> PortalPermissions { get; set; } = new();
        public bool IsActive { get; set; } = true;
        public DateTime? LastLoginAt { get; set; }
        public string? LastLoginIp { get; set; }
        public string? ProfilePicture { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

        public bool IsMasterAccountant() =>
            string.Equals(UserType, "master_accountant", StringComparison.OrdinalIgnoreCase) ||
            string.Equals(UserType, "Master Accountant", StringComparison.OrdinalIgnoreCase);

        public bool IsNormalAccountant() =>
            string.Equals(UserType, "Accounts", StringComparison.OrdinalIgnoreCase) ||
            string.Equals(UserType, "accountant", StringComparison.OrdinalIgnoreCase) ||
            string.Equals(UserType, "Normal Accountant", StringComparison.OrdinalIgnoreCase);
    }
}

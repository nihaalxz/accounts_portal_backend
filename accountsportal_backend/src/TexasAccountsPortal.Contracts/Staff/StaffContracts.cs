using System;
using System.Collections.Generic;

namespace TexasAccountsPortal.Contracts.Staff
{
    public class StaffUserResponse
    {
        public long Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Role { get; set; } = string.Empty;
        public bool IsActive { get; set; }
        public string? ProfilePicture { get; set; }
        public DateTime? LastLoginAt { get; set; }
        public string? LastLoginIp { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
        public List<string> OperationalPermissions { get; set; } = new();
        public decimal MonthlyTarget { get; set; }
        public decimal ProfitTarget { get; set; }

        public StaffUserResponse() { }

        public StaffUserResponse(long id, string name, string email, string role, bool isActive, string? profilePicture, DateTime? lastLoginAt, string? lastLoginIp, DateTime? createdAt, DateTime? updatedAt, List<string> operationalPermissions, decimal monthlyTarget = 0m, decimal profitTarget = 0m)
        {
            Id = id;
            Name = name;
            Email = email;
            Role = role;
            IsActive = isActive;
            ProfilePicture = profilePicture;
            LastLoginAt = lastLoginAt;
            LastLoginIp = lastLoginIp;
            CreatedAt = createdAt;
            UpdatedAt = updatedAt;
            OperationalPermissions = operationalPermissions ?? new();
            MonthlyTarget = monthlyTarget;
            ProfitTarget = profitTarget;
        }
    }
}

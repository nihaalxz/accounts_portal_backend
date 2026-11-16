using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using TexasAccountsPortal.Contracts.Staff;

namespace TexasAccountsPortal.Application.Interfaces
{
    public interface IOperationalPortalClient
    {
        Task SyncStaffAsync(string name, string email, string? password, string userType, List<string>? permissions, bool isActive, CancellationToken ct);
        Task<IEnumerable<OperationalUserResponse>> GetOperationalUsersAsync(CancellationToken ct);
        Task ToggleOperationalUserStatusAsync(long id, bool isActive, CancellationToken ct);
        Task ResetOperationalUserPasswordAsync(long id, string newPassword, CancellationToken ct);
        Task UpdateOperationalUserEmailAsync(long id, string newEmail, CancellationToken ct);
        Task<IEnumerable<WorkloadLimitResponse>> GetWorkloadLimitsAsync(CancellationToken ct);
        Task UpdateWorkloadLimitsAsync(UpdateWorkloadLimitsBatchRequest request, CancellationToken ct);
    }

    public record OperationalUserResponse(
        long Id,
        string Name,
        string Email,
        string UserType,
        bool IsActive,
        List<string> Permissions,
        DateTime? LastLoginAt,
        string? LastLoginIp,
        DateTime CreatedAt,
        DateTime? UpdatedAt
    );
}

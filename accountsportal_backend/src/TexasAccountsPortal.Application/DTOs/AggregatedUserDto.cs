using System;
using System.Collections.Generic;

namespace TexasAccountsPortal.Application.DTOs
{
    public record AggregatedUserDto(
        long Id,
        string DisplayName,
        string Email,
        string? Phone,
        string? AvatarUrl,
        string UserType,
        List<string> PortalMemberships,
        List<string> Permissions,
        bool IsActive,
        DateTime? LastLogin,
        string? LastLoginIp,
        DateTime CreatedAt,
        DateTime? UpdatedAt
    );
}

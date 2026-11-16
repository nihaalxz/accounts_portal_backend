using System.Collections.Generic;

namespace TexasAccountsPortal.Contracts.Staff
{
    public record CreateAccountsStaffRequest(
        string Name,
        string Email,
        string Password,
        string Role
    );

    public record CreateSalesStaffRequest(
        string Name,
        string Email,
        string Password,
        string Role
    );

    public record CreateOperationalStaffRequest(
        string Name,
        string Email,
        string Password,
        string Role,
        List<string>? Permissions
    );

    public record UpdateOperationalPermissionsRequest(
        string Name,
        string Email,
        string UserType,
        List<string>? Permissions
    );

    public record UpdateStaffEmailRequest(
        string NewEmail
    );
}

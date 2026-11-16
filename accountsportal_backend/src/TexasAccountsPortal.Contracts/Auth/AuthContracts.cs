using System;
using System.Collections.Generic;

namespace TexasAccountsPortal.Contracts.Auth
{
    public record LoginRequest(string Email, string Password);
    
    public record LoginResponse(
        string AccessToken,
        string RefreshToken,
        string UserType,
        string Name,
        string Email,
        List<string> PortalPermissions,
        string? ProfilePicture = null
    );

	public record RefreshTokenRequest(string RefreshToken);
    
    public record RefreshTokenResponse(string AccessToken, string RefreshToken);

    public record UserProfileResponse(
        long Id,
        string Name,
        string Email,
        string UserType,
        List<string> PortalPermissions,
        bool IsActive,
        string? ProfilePicture = null
    );

    public record UpdateProfileRequest(
        string? CurrentPassword,
        string? NewPassword,
        string? ProfilePicture
    );
}

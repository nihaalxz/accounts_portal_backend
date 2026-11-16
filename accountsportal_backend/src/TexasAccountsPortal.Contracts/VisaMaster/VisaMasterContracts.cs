using System;

namespace TexasAccountsPortal.Contracts.VisaMaster
{
    public record VisaCountryResponse(
        long Id,
        string Name,
        string? Code,
        bool IsActive,
        int PackagesCount,
        DateTime CreatedAt,
        DateTime? UpdatedAt
    );

    public record CreateVisaCountryRequest(
        string Name,
        string? Code
    );

    public record UpdateVisaCountryRequest(
        string Name,
        string? Code,
        bool IsActive
    );

    public record VisaPackageResponse(
        long Id,
        long CountryId,
        string CountryName,
        string Name,
        string? Description,
        bool IsActive,
        DateTime CreatedAt,
        DateTime? UpdatedAt
    );

    public record CreateVisaPackageRequest(
        long CountryId,
        string Name,
        string? Description
    );

    public record UpdateVisaPackageRequest(
        long CountryId,
        string Name,
        string? Description,
        bool IsActive
    );
}

using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using TexasAccountsPortal.Contracts.VisaMaster;

namespace TexasAccountsPortal.Application.Interfaces
{
    public interface IVisaMasterService
    {
        Task<IEnumerable<VisaCountryResponse>> GetCountriesAsync(bool includeInactive = true, CancellationToken ct = default);
        Task<VisaCountryResponse?> GetCountryByIdAsync(long id, CancellationToken ct = default);
        Task<VisaCountryResponse> CreateCountryAsync(CreateVisaCountryRequest request, CancellationToken ct = default);
        Task<VisaCountryResponse?> UpdateCountryAsync(long id, UpdateVisaCountryRequest request, CancellationToken ct = default);
        Task<bool> DeleteCountryAsync(long id, CancellationToken ct = default);

        Task<IEnumerable<VisaPackageResponse>> GetPackagesAsync(long? countryId = null, bool includeInactive = true, CancellationToken ct = default);
        Task<VisaPackageResponse?> GetPackageByIdAsync(long id, CancellationToken ct = default);
        Task<VisaPackageResponse> CreatePackageAsync(CreateVisaPackageRequest request, CancellationToken ct = default);
        Task<VisaPackageResponse?> UpdatePackageAsync(long id, UpdateVisaPackageRequest request, CancellationToken ct = default);
        Task<bool> DeletePackageAsync(long id, CancellationToken ct = default);
    }
}

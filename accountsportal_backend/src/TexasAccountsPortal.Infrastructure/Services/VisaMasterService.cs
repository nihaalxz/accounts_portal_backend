using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Contracts.VisaMaster;
using TexasAccountsPortal.Domain.Entities;

namespace TexasAccountsPortal.Infrastructure.Services
{
    public class VisaMasterService : IVisaMasterService
    {
        private readonly IAccountsDbContext _db;

        public VisaMasterService(IAccountsDbContext db)
        {
            _db = db;
        }

        public async Task<IEnumerable<VisaCountryResponse>> GetCountriesAsync(bool includeInactive = true, CancellationToken ct = default)
        {
            var query = _db.VisaCountries.AsNoTracking();
            if (!includeInactive)
            {
                query = query.Where(c => c.IsActive);
            }

            return await query
                .OrderBy(c => c.Name)
                .Select(c => new VisaCountryResponse(
                    c.Id,
                    c.Name,
                    c.Code,
                    c.IsActive,
                    c.Packages.Count,
                    c.CreatedAt,
                    c.UpdatedAt
                ))
                .ToListAsync(ct);
        }

        public async Task<VisaCountryResponse?> GetCountryByIdAsync(long id, CancellationToken ct = default)
        {
            var c = await _db.VisaCountries.AsNoTracking()
                .Where(x => x.Id == id)
                .Select(x => new VisaCountryResponse(
                    x.Id,
                    x.Name,
                    x.Code,
                    x.IsActive,
                    x.Packages.Count,
                    x.CreatedAt,
                    x.UpdatedAt
                ))
                .FirstOrDefaultAsync(ct);

            return c;
        }

        public async Task<VisaCountryResponse> CreateCountryAsync(CreateVisaCountryRequest request, CancellationToken ct = default)
        {
            if (string.IsNullOrWhiteSpace(request.Name))
            {
                throw new ArgumentException("Country name is required.");
            }

            var country = new VisaCountry
            {
                Name = request.Name.Trim(),
                Code = request.Code?.Trim().ToUpperInvariant(),
                IsActive = true,
                CreatedAt = DateTime.UtcNow
            };

            _db.Add(country);
            await _db.SaveChangesAsync(ct);

            return new VisaCountryResponse(
                country.Id,
                country.Name,
                country.Code,
                country.IsActive,
                0,
                country.CreatedAt,
                country.UpdatedAt
            );
        }

        public async Task<VisaCountryResponse?> UpdateCountryAsync(long id, UpdateVisaCountryRequest request, CancellationToken ct = default)
        {
            var country = await _db.FindAsync<VisaCountry>(new object[] { id }, ct);
            if (country == null) return null;

            if (string.IsNullOrWhiteSpace(request.Name))
            {
                throw new ArgumentException("Country name is required.");
            }

            country.Name = request.Name.Trim();
            country.Code = request.Code?.Trim().ToUpperInvariant();
            country.IsActive = request.IsActive;
            country.UpdatedAt = DateTime.UtcNow;

            await _db.SaveChangesAsync(ct);

            var packagesCount = await _db.VisaPackages.AsNoTracking().CountAsync(p => p.CountryId == id, ct);

            return new VisaCountryResponse(
                country.Id,
                country.Name,
                country.Code,
                country.IsActive,
                packagesCount,
                country.CreatedAt,
                country.UpdatedAt
            );
        }

        public async Task<bool> DeleteCountryAsync(long id, CancellationToken ct = default)
        {
            var country = await _db.FindAsync<VisaCountry>(new object[] { id }, ct);
            if (country == null) return false;

            country.IsActive = false;
            country.UpdatedAt = DateTime.UtcNow;
            await _db.SaveChangesAsync(ct);
            return true;
        }

        public async Task<IEnumerable<VisaPackageResponse>> GetPackagesAsync(long? countryId = null, bool includeInactive = true, CancellationToken ct = default)
        {
            var query = _db.VisaPackages.AsNoTracking().Include(p => p.Country).AsQueryable();
            
            if (countryId.HasValue)
            {
                query = query.Where(p => p.CountryId == countryId.Value);
            }

            if (!includeInactive)
            {
                query = query.Where(p => p.IsActive && p.Country.IsActive);
            }

            return await query
                .OrderBy(p => p.Country.Name)
                .ThenBy(p => p.Name)
                .Select(p => new VisaPackageResponse(
                    p.Id,
                    p.CountryId,
                    p.Country.Name,
                    p.Name,
                    p.Description,
                    p.IsActive,
                    p.CreatedAt,
                    p.UpdatedAt
                ))
                .ToListAsync(ct);
        }

        public async Task<VisaPackageResponse?> GetPackageByIdAsync(long id, CancellationToken ct = default)
        {
            return await _db.VisaPackages.AsNoTracking()
                .Include(p => p.Country)
                .Where(p => p.Id == id)
                .Select(p => new VisaPackageResponse(
                    p.Id,
                    p.CountryId,
                    p.Country.Name,
                    p.Name,
                    p.Description,
                    p.IsActive,
                    p.CreatedAt,
                    p.UpdatedAt
                ))
                .FirstOrDefaultAsync(ct);
        }

        public async Task<VisaPackageResponse> CreatePackageAsync(CreateVisaPackageRequest request, CancellationToken ct = default)
        {
            if (string.IsNullOrWhiteSpace(request.Name))
            {
                throw new ArgumentException("Visa package name is required.");
            }

            var country = await _db.FindAsync<VisaCountry>(new object[] { request.CountryId }, ct);
            if (country == null)
            {
                throw new ArgumentException($"Target visa country ID {request.CountryId} does not exist.");
            }

            var package = new VisaPackage
            {
                CountryId = request.CountryId,
                Name = request.Name.Trim(),
                Description = request.Description?.Trim(),
                IsActive = true,
                CreatedAt = DateTime.UtcNow
            };

            _db.Add(package);
            await _db.SaveChangesAsync(ct);

            return new VisaPackageResponse(
                package.Id,
                package.CountryId,
                country.Name,
                package.Name,
                package.Description,
                package.IsActive,
                package.CreatedAt,
                package.UpdatedAt
            );
        }

        public async Task<VisaPackageResponse?> UpdatePackageAsync(long id, UpdateVisaPackageRequest request, CancellationToken ct = default)
        {
            var package = await _db.FindAsync<VisaPackage>(new object[] { id }, ct);
            if (package == null) return null;

            if (string.IsNullOrWhiteSpace(request.Name))
            {
                throw new ArgumentException("Visa package name is required.");
            }

            var country = await _db.FindAsync<VisaCountry>(new object[] { request.CountryId }, ct);
            if (country == null)
            {
                throw new ArgumentException($"Target visa country ID {request.CountryId} does not exist.");
            }

            package.CountryId = request.CountryId;
            package.Name = request.Name.Trim();
            package.Description = request.Description?.Trim();
            package.IsActive = request.IsActive;
            package.UpdatedAt = DateTime.UtcNow;

            await _db.SaveChangesAsync(ct);

            return new VisaPackageResponse(
                package.Id,
                package.CountryId,
                country.Name,
                package.Name,
                package.Description,
                package.IsActive,
                package.CreatedAt,
                package.UpdatedAt
            );
        }

        public async Task<bool> DeletePackageAsync(long id, CancellationToken ct = default)
        {
            var package = await _db.FindAsync<VisaPackage>(new object[] { id }, ct);
            if (package == null) return false;

            package.IsActive = false;
            package.UpdatedAt = DateTime.UtcNow;
            await _db.SaveChangesAsync(ct);
            return true;
        }
    }
}

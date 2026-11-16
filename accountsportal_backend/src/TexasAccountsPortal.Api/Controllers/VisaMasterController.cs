using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Contracts.VisaMaster;

namespace TexasAccountsPortal.Api.Controllers
{
    [Authorize(AuthenticationSchemes = "Bearer,InternalServiceAuth")]
    [ApiController]
    [Route("api/visa-master")]
    public class VisaMasterController : ControllerBase
    {
        private readonly IVisaMasterService _visaMasterService;

        public VisaMasterController(IVisaMasterService visaMasterService)
        {
            _visaMasterService = visaMasterService;
        }

        // ─── Visa Countries ─────────────────────────────────────────────────────────

        [HttpGet("countries")]
        public async Task<ActionResult<IEnumerable<VisaCountryResponse>>> GetCountries(
            [FromQuery] bool includeInactive = true,
            CancellationToken ct = default)
        {
            var result = await _visaMasterService.GetCountriesAsync(includeInactive, ct);
            return Ok(result);
        }

        [HttpGet("countries/{id:long}")]
        public async Task<ActionResult<VisaCountryResponse>> GetCountryById(
            long id,
            CancellationToken ct = default)
        {
            var result = await _visaMasterService.GetCountryByIdAsync(id, ct);
            if (result == null) return NotFound();
            return Ok(result);
        }

        [HttpPost("countries")]
        public async Task<ActionResult<VisaCountryResponse>> CreateCountry(
            [FromBody] CreateVisaCountryRequest request,
            CancellationToken ct = default)
        {
            var result = await _visaMasterService.CreateCountryAsync(request, ct);
            return CreatedAtAction(nameof(GetCountryById), new { id = result.Id }, result);
        }

        [HttpPut("countries/{id:long}")]
        public async Task<ActionResult<VisaCountryResponse>> UpdateCountry(
            long id,
            [FromBody] UpdateVisaCountryRequest request,
            CancellationToken ct = default)
        {
            var result = await _visaMasterService.UpdateCountryAsync(id, request, ct);
            if (result == null) return NotFound();
            return Ok(result);
        }

        [HttpDelete("countries/{id:long}")]
        public async Task<IActionResult> DeleteCountry(
            long id,
            CancellationToken ct = default)
        {
            var success = await _visaMasterService.DeleteCountryAsync(id, ct);
            if (!success) return NotFound();
            return NoContent();
        }

        // ─── Visa Packages ──────────────────────────────────────────────────────────

        [HttpGet("packages")]
        public async Task<ActionResult<IEnumerable<VisaPackageResponse>>> GetPackages(
            [FromQuery] long? countryId = null,
            [FromQuery] bool includeInactive = true,
            CancellationToken ct = default)
        {
            var result = await _visaMasterService.GetPackagesAsync(countryId, includeInactive, ct);
            return Ok(result);
        }

        [HttpGet("packages/{id:long}")]
        public async Task<ActionResult<VisaPackageResponse>> GetPackageById(
            long id,
            CancellationToken ct = default)
        {
            var result = await _visaMasterService.GetPackageByIdAsync(id, ct);
            if (result == null) return NotFound();
            return Ok(result);
        }

        [HttpPost("packages")]
        public async Task<ActionResult<VisaPackageResponse>> CreatePackage(
            [FromBody] CreateVisaPackageRequest request,
            CancellationToken ct = default)
        {
            var result = await _visaMasterService.CreatePackageAsync(request, ct);
            return CreatedAtAction(nameof(GetPackageById), new { id = result.Id }, result);
        }

        [HttpPut("packages/{id:long}")]
        public async Task<ActionResult<VisaPackageResponse>> UpdatePackage(
            long id,
            [FromBody] UpdateVisaPackageRequest request,
            CancellationToken ct = default)
        {
            var result = await _visaMasterService.UpdatePackageAsync(id, request, ct);
            if (result == null) return NotFound();
            return Ok(result);
        }

        [HttpDelete("packages/{id:long}")]
        public async Task<IActionResult> DeletePackage(
            long id,
            CancellationToken ct = default)
        {
            var success = await _visaMasterService.DeletePackageAsync(id, ct);
            if (!success) return NotFound();
            return NoContent();
        }
    }
}

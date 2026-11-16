using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Json;
using System.Threading;
using System.Threading.Tasks;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Contracts.Staff;
using TexasAccountsPortal.Infrastructure.Options;

namespace TexasAccountsPortal.Infrastructure.Services
{
    public class OperationalPortalClient : IOperationalPortalClient
    {
        private readonly HttpClient _httpClient;
        private readonly OperationalPortalOptions _options;
        private readonly ILogger<OperationalPortalClient> _logger;

        public OperationalPortalClient(
            HttpClient httpClient,
            IOptions<OperationalPortalOptions> options,
            ILogger<OperationalPortalClient> logger)
        {
            _httpClient = httpClient;
            _options = options.Value;
            _logger = logger;

            var baseUrl = string.IsNullOrWhiteSpace(_options.BaseUrl) ? "http://localhost:5005" : _options.BaseUrl;
            _httpClient.BaseAddress = new Uri(baseUrl.EndsWith("/") ? baseUrl : baseUrl + "/");
            if (!_httpClient.DefaultRequestHeaders.Contains("X-SYNC-KEY"))
            {
                _httpClient.DefaultRequestHeaders.Add("X-SYNC-KEY", _options.SyncKey);
            }
            if (!_httpClient.DefaultRequestHeaders.Accept.Any(h => h.MediaType == "application/json"))
            {
                _httpClient.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));
            }
        }

        public async Task SyncStaffAsync(
            string name,
            string email,
            string? password,
            string userType,
            List<string>? permissions,
            bool isActive,
            CancellationToken ct)
        {
            var payload = new
            {
                name = name,
                email = email,
                password = password,
                passwordHash = password,
                userType = userType,
                permissions = permissions ?? new List<string> { "visas", "vfs", "holidays" },
                isActive = isActive
            };

            var response = await _httpClient.PostAsJsonAsync("api/internal/staff-sync", payload, ct);
            if (!response.IsSuccessStatusCode)
            {
                var fallbackResponse = await _httpClient.PostAsJsonAsync("api/public/staff/sync", payload, ct);
                if (!fallbackResponse.IsSuccessStatusCode)
                {
                    var errBody = await fallbackResponse.Content.ReadAsStringAsync(ct);
                    _logger.LogError("Operational Portal sync failed ({(int)fallbackResponse.StatusCode}): {ErrBody}", (int)fallbackResponse.StatusCode, errBody);
                    throw new HttpRequestException($"Operational Portal sync failed ({(int)fallbackResponse.StatusCode}): {errBody}");
                }
            }
        }

        private static readonly System.Text.Json.JsonSerializerOptions JsonOptions = new System.Text.Json.JsonSerializerOptions
        {
            PropertyNameCaseInsensitive = true
        };

        public async Task<IEnumerable<OperationalUserResponse>> GetOperationalUsersAsync(CancellationToken ct)
        {
            try
            {
                var users = await _httpClient.GetFromJsonAsync<List<OperationalUserResponse>>("api/internal/staff-list", JsonOptions, ct);
                return users ?? new List<OperationalUserResponse>();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to fetch operational users list from Operational Portal at {BaseAddress}", _httpClient.BaseAddress);
                return new List<OperationalUserResponse>();
            }
        }

        public async Task ToggleOperationalUserStatusAsync(long id, bool isActive, CancellationToken ct)
        {
            var payload = new { isActive = isActive };
            var response = await _httpClient.PutAsJsonAsync($"api/internal/staff/{id}/status", payload, ct);
            response.EnsureSuccessStatusCode();
        }

        public async Task ResetOperationalUserPasswordAsync(long id, string newPassword, CancellationToken ct)
        {
            var payload = new { newPassword = newPassword };
            var response = await _httpClient.PutAsJsonAsync($"api/internal/staff/{id}/password", payload, ct);
            response.EnsureSuccessStatusCode();
        }

        public async Task UpdateOperationalUserEmailAsync(long id, string newEmail, CancellationToken ct)
        {
            var payload = new { newEmail = newEmail };
            var response = await _httpClient.PutAsJsonAsync($"api/internal/staff/{id}/email", payload, ct);
            response.EnsureSuccessStatusCode();
        }

        public async Task<IEnumerable<WorkloadLimitResponse>> GetWorkloadLimitsAsync(CancellationToken ct)
        {
            try
            {
                var limits = await _httpClient.GetFromJsonAsync<List<WorkloadLimitResponse>>("api/assignments/workload-limits", JsonOptions, ct);
                return limits ?? new List<WorkloadLimitResponse>();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to fetch workload limits from Operational Portal at {BaseAddress}", _httpClient.BaseAddress);
                throw;
            }
        }

        public async Task UpdateWorkloadLimitsAsync(UpdateWorkloadLimitsBatchRequest request, CancellationToken ct)
        {
            var response = await _httpClient.PutAsJsonAsync("api/assignments/workload-limits", request, ct);
            if (!response.IsSuccessStatusCode)
            {
                var errBody = await response.Content.ReadAsStringAsync(ct);
                _logger.LogError("Operational Portal workload limits update failed ({(int)response.StatusCode}): {ErrBody}", (int)response.StatusCode, errBody);
                throw new HttpRequestException($"Operational Portal workload limits update failed ({(int)response.StatusCode}): {errBody}");
            }
        }
    }
}

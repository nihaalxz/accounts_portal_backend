using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using TexasAccountsPortal.Contracts.Payroll;

namespace TexasAccountsPortal.Application.Interfaces
{
    public interface IPayrollService
    {
        Task<IEnumerable<SalaryProfileResponse>> GetSalaryProfilesAsync(string? portalType = null, string? status = null, CancellationToken ct = default);
        Task<SalaryProfileResponse?> GetSalaryProfileByIdAsync(long id, CancellationToken ct = default);
        Task<SalaryProfileResponse> CreateSalaryProfileAsync(CreateSalaryProfileRequest request, CancellationToken ct = default);
        Task<SalaryProfileResponse> UpdateSalaryProfileAsync(long id, UpdateSalaryProfileRequest request, long changedByUserId, CancellationToken ct = default);
        Task<IEnumerable<SalaryRevisionResponse>> GetSalaryRevisionsAsync(long salaryProfileId, CancellationToken ct = default);

        Task<IEnumerable<SalaryPaymentResponse>> GetSalaryPaymentsAsync(string? status = null, int? month = null, int? year = null, string? portalType = null, CancellationToken ct = default);
        Task<SalaryPaymentResponse?> GetSalaryPaymentByIdAsync(long id, CancellationToken ct = default);
        Task<SalaryPaymentResponse> CreateSalaryPaymentAsync(CreateSalaryPaymentRequest request, long paidByUserId, CancellationToken ct = default);
        Task<SalaryPaymentResponse> UpdateSalaryPaymentStatusAsync(long id, UpdateSalaryPaymentStatusRequest request, long actionUserId, CancellationToken ct = default);
    }
}

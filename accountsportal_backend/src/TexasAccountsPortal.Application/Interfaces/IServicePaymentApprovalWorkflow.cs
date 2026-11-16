using System.Threading;
using System.Threading.Tasks;

namespace TexasAccountsPortal.Application.Interfaces
{
    public record ProcessServicePaymentApprovalRequest(
        string ServiceType,
        long BookingId,
        string Status,
        long ApprovedByUserId,
        long? ExplicitCashAccountId,
        string? ExplicitReferenceId,
        string? RawPaymentMethod,
        long? RawBankId,
        decimal PayableAmount,
        string? ClientType,
        long? AgentId,
        long? HeadId);

    public interface IServicePaymentApprovalWorkflow
    {
        Task ExecuteApprovalWorkflowAsync(
            ProcessServicePaymentApprovalRequest request,
            CancellationToken cancellationToken = default);
    }
}

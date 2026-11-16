using System.Threading;
using System.Threading.Tasks;
using TexasAccountsPortal.Contracts.SupplierPayments;
using TexasAccountsPortal.Contracts.PurchaseReturns;
using TexasAccountsPortal.Contracts.SalesReturns;

namespace TexasAccountsPortal.Application.Interfaces
{
    public interface ISettlementApprovalService
    {
        Task<SupplierPaymentResponse> ApproveSupplierPaymentAsync(
            long paymentId,
            long approvedBy,
            string? clientRowVersion,
            CancellationToken cancellationToken);

        Task<SupplierPaymentResponse> UpdateSupplierPaymentAsync(
            long paymentId,
            UpdateSupplierPaymentRequest request,
            long modifiedBy,
            CancellationToken cancellationToken);

        Task<SupplierPaymentResponse> RejectSupplierPaymentAsync(
            long paymentId,
            long rejectedBy,
            string? reason,
            CancellationToken cancellationToken);

        Task<PurchaseReturnResponse> ApprovePurchaseReturnAsync(
            long returnId,
            long approvedBy,
            string? clientRowVersion,
            CancellationToken cancellationToken);

        Task<PurchaseReturnResponse> RejectPurchaseReturnAsync(
            long returnId,
            long rejectedBy,
            string? reason,
            CancellationToken cancellationToken);

        Task<SalesReturnResponse> ApproveSalesReturnAsync(
            long returnId,
            long approvedBy,
            string? clientRowVersion,
            CancellationToken cancellationToken);

        Task<SalesReturnResponse> RejectSalesReturnAsync(
            long returnId,
            long rejectedBy,
            string? reason,
            CancellationToken cancellationToken);
    }
}

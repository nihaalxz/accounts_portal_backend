using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using TexasAccountsPortal.Contracts.SupplierPayments;
using TexasAccountsPortal.Contracts.PurchaseReturns;
using TexasAccountsPortal.Contracts.SalesReturns;

namespace TexasAccountsPortal.Application.Interfaces
{
    public interface ISettlementService
    {
        Task<SupplierPaymentResponse> PostSupplierPaymentAsync(
            CreateSupplierPaymentRequest request,
            long createdBy,
            string idempotencyKey,
            CancellationToken cancellationToken);

        Task<PurchaseReturnResponse> PostPurchaseReturnAsync(
            CreatePurchaseReturnRequest request,
            long createdBy,
            string idempotencyKey,
            CancellationToken cancellationToken);

        Task<SalesReturnResponse> PostSalesReturnAsync(
            CreateSalesReturnRequest request,
            long createdBy,
            string idempotencyKey,
            CancellationToken cancellationToken);

        Task<IEnumerable<SupplierPaymentResponse>> GetSupplierPaymentsAsync(
            string? status,
            long? supplierId,
            CancellationToken cancellationToken);

        Task<IEnumerable<PurchaseReturnResponse>> GetPurchaseReturnsAsync(
            string? status,
            long? supplierId,
            CancellationToken cancellationToken);

        Task<IEnumerable<SalesReturnResponse>> GetSalesReturnsAsync(
            string? status,
            CancellationToken cancellationToken);
    }
}

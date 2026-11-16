using System.Threading;
using System.Threading.Tasks;
using TexasAccountsPortal.Contracts.Transactions;
using TexasAccountsPortal.Contracts.SupplierPayments;
using TexasAccountsPortal.Contracts.PurchaseReturns;
using TexasAccountsPortal.Contracts.SalesReturns;
using TexasAccountsPortal.Domain.Enums;

namespace TexasAccountsPortal.Application.Interfaces
{
    public interface IFinancialPostingService
    {
        Task<TransactionResponse> PostIncomingTransactionAsync(
            CreateIncomingTransactionRequest request,
            long createdBy,
            string idempotencyKey,
            ReceiptOrigin receiptOrigin,
            CancellationToken cancellationToken);

        Task<TransactionResponse> PostOutgoingTransactionAsync(
            CreateOutgoingTransactionRequest request,
            long createdBy,
            string idempotencyKey,
            CancellationToken cancellationToken);

        Task<TransactionResponse> PostContraTransactionAsync(
            CreateContraTransactionRequest request,
            long createdBy,
            string idempotencyKey,
            CancellationToken cancellationToken);

        Task<TransactionResponse> ApproveTransactionAsync(
            long transactionId,
            long approvedBy,
            CancellationToken cancellationToken);

        Task<TransactionResponse> RejectTransactionAsync(
            long transactionId,
            long rejectedBy,
            string? reason,
            CancellationToken cancellationToken);

        Task<decimal> PostBalanceCorrectionAsync(
            long accountId,
            decimal adjustmentAmount,
            string reason,
            long editedBy,
            string idempotencyKey,
            CancellationToken cancellationToken);

        Task<SupplierPaymentResponse> PostSupplierPaymentAsync(
            CreateSupplierPaymentRequest request,
            long createdBy,
            string idempotencyKey,
            CancellationToken cancellationToken);

        Task<SupplierPaymentResponse> ApproveSupplierPaymentAsync(
            long paymentId,
            long approvedBy,
            CancellationToken cancellationToken);

        Task<SupplierPaymentResponse> RejectSupplierPaymentAsync(
            long paymentId,
            long rejectedBy,
            string? reason,
            CancellationToken cancellationToken);

        Task<PurchaseReturnResponse> PostPurchaseReturnAsync(
            CreatePurchaseReturnRequest request,
            long createdBy,
            string idempotencyKey,
            CancellationToken cancellationToken);

        Task<PurchaseReturnResponse> ApprovePurchaseReturnAsync(
            long returnId,
            long approvedBy,
            CancellationToken cancellationToken);

        Task<PurchaseReturnResponse> RejectPurchaseReturnAsync(
            long returnId,
            long rejectedBy,
            string? reason,
            CancellationToken cancellationToken);

        Task<SalesReturnResponse> PostSalesReturnAsync(
            CreateSalesReturnRequest request,
            long createdBy,
            string idempotencyKey,
            CancellationToken cancellationToken);

        Task<SalesReturnResponse> ApproveSalesReturnAsync(
            long returnId,
            long approvedBy,
            CancellationToken cancellationToken);

        Task<SalesReturnResponse> RejectSalesReturnAsync(
            long returnId,
            long rejectedBy,
            string? reason,
            CancellationToken cancellationToken);
    }
}

using TexasAccountsPortal.Domain.Enums;

namespace TexasAccountsPortal.Application.Interfaces
{
    public interface IPaymentMethodResolver
    {
        PaymentMethod ResolvePaymentMethod(string? rawPaymentMethod);
        bool IsCashPayment(string? rawPaymentMethod);
        bool IsBankOrOnlinePayment(string? rawPaymentMethod);
    }
}

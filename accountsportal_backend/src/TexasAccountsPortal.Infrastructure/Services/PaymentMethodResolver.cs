using System;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Domain.Enums;

namespace TexasAccountsPortal.Infrastructure.Services
{
    public class PaymentMethodResolver : IPaymentMethodResolver
    {
        public PaymentMethod ResolvePaymentMethod(string? rawPaymentMethod)
        {
            if (string.IsNullOrWhiteSpace(rawPaymentMethod))
            {
                return PaymentMethod.BankTransfer;
            }

            var normalized = rawPaymentMethod.Trim().ToLowerInvariant();

            if (normalized == "cash" || normalized.Contains("cash"))
            {
                return PaymentMethod.Cash;
            }
            if (normalized.Contains("credit") || normalized.Contains("card"))
            {
                return PaymentMethod.Credit;
            }
            if (normalized.Contains("wallet"))
            {
                return PaymentMethod.Wallet;
            }
            if (normalized.Contains("bank") || normalized.Contains("transfer") || normalized.Contains("online") || normalized.Contains("upi") || normalized.Contains("cheque") || normalized.Contains("check") || normalized.Contains("deposit"))
            {
                return PaymentMethod.BankTransfer;
            }

            if (Enum.TryParse<PaymentMethod>(rawPaymentMethod, true, out var parsed))
            {
                return parsed;
            }

            return PaymentMethod.BankTransfer;
        }

        public bool IsCashPayment(string? rawPaymentMethod)
        {
            return ResolvePaymentMethod(rawPaymentMethod) == PaymentMethod.Cash;
        }

        public bool IsBankOrOnlinePayment(string? rawPaymentMethod)
        {
            return !IsCashPayment(rawPaymentMethod);
        }
    }
}

using TexasAccountsPortal.Domain.Enums;
using TexasAccountsPortal.Infrastructure.Services;
using Xunit;

namespace TexasAccountsPortal.IntegrationTests
{
    public class PaymentMethodResolverTests
    {
        [Fact]
        public void PaymentMethodResolver_ParsesVariousFormatsCorrectly()
        {
            var resolver = new PaymentMethodResolver();

            Assert.Equal(PaymentMethod.Cash, resolver.ResolvePaymentMethod("cash"));
            Assert.Equal(PaymentMethod.Cash, resolver.ResolvePaymentMethod("CASH IN HAND"));
            Assert.Equal(PaymentMethod.BankTransfer, resolver.ResolvePaymentMethod("online"));
            Assert.Equal(PaymentMethod.BankTransfer, resolver.ResolvePaymentMethod("bank_transfer"));
            Assert.Equal(PaymentMethod.BankTransfer, resolver.ResolvePaymentMethod("upi"));
            Assert.Equal(PaymentMethod.Credit, resolver.ResolvePaymentMethod("credit_card"));
            Assert.Equal(PaymentMethod.BankTransfer, resolver.ResolvePaymentMethod("cheque"));
            Assert.Equal(PaymentMethod.BankTransfer, resolver.ResolvePaymentMethod(null));

            Assert.True(resolver.IsCashPayment("cash"));
            Assert.False(resolver.IsCashPayment("bank"));
            Assert.True(resolver.IsBankOrOnlinePayment("bank"));
        }
    }
}

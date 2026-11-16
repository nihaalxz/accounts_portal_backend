using System.Threading;
using System.Threading.Tasks;
using TexasAccountsPortal.Domain.Enums;

namespace TexasAccountsPortal.Application.Interfaces
{
    public enum FinancialDirection
    {
        Outgoing,
        Incoming
    }

    public record PostingInstruction(
        FinancialDirection Direction,
        bool RequiresBalanceCheck,
        string AccountType,
        string Description
    );

    public interface IPostingRuleResolver
    {
        PostingInstruction ResolveInstruction(string categoryBucket, string? supplierPaymentType = null);
    }
}

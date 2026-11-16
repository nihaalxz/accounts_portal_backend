using System;
using TexasAccountsPortal.Application.Interfaces;

namespace TexasAccountsPortal.Infrastructure.Services
{
    public sealed class PostingRuleResolver : IPostingRuleResolver
    {
        public PostingInstruction ResolveInstruction(string categoryBucket, string? supplierPaymentType = null)
        {
            var bucket = categoryBucket?.Trim() ?? "Expenses";

            // 1. Supplier-Specific Overrides
            if (!string.IsNullOrWhiteSpace(supplierPaymentType))
            {
                var typeLower = supplierPaymentType.ToLowerInvariant();
                if (typeLower.Contains("refund"))
                {
                    return new PostingInstruction(
                        Direction: FinancialDirection.Incoming,
                        RequiresBalanceCheck: false,
                        AccountType: "SupplierRefund",
                        Description: "Supplier Refund (Incoming Deposit)"
                    );
                }
                if (typeLower.Contains("credit") || typeLower.Contains("settlement"))
                {
                    return new PostingInstruction(
                        Direction: FinancialDirection.Outgoing,
                        RequiresBalanceCheck: true,
                        AccountType: "SupplierCredit",
                        Description: "Supplier Credit Settlement (Outgoing Payout)"
                    );
                }
                if (typeLower.Contains("wallet") || typeLower.Contains("topup"))
                {
                    return new PostingInstruction(
                        Direction: FinancialDirection.Outgoing,
                        RequiresBalanceCheck: true,
                        AccountType: "SupplierWallet",
                        Description: "Supplier Wallet Top-up (Outgoing Payout)"
                    );
                }
                if (typeLower.Contains("advance"))
                {
                    return new PostingInstruction(
                        Direction: FinancialDirection.Outgoing,
                        RequiresBalanceCheck: true,
                        AccountType: "SupplierAdvance",
                        Description: "Supplier Advance Payment (Outgoing Payout)"
                    );
                }
            }

            // 2. Accounting Bucket Resolutions
            if (string.Equals(bucket, "Income", StringComparison.OrdinalIgnoreCase))
            {
                return new PostingInstruction(
                    Direction: FinancialDirection.Incoming,
                    RequiresBalanceCheck: false,
                    AccountType: "Income",
                    Description: "Income Receipt (Incoming Deposit)"
                );
            }

            if (string.Equals(bucket, "Capital", StringComparison.OrdinalIgnoreCase))
            {
                return new PostingInstruction(
                    Direction: FinancialDirection.Incoming,
                    RequiresBalanceCheck: false,
                    AccountType: "Capital",
                    Description: "Capital Deposit (Incoming Deposit)"
                );
            }

            if (string.Equals(bucket, "Asset", StringComparison.OrdinalIgnoreCase))
            {
                return new PostingInstruction(
                    Direction: FinancialDirection.Outgoing,
                    RequiresBalanceCheck: true,
                    AccountType: "Asset",
                    Description: "Asset Acquisition (Outgoing Payout)"
                );
            }

            if (string.Equals(bucket, "Liability", StringComparison.OrdinalIgnoreCase))
            {
                return new PostingInstruction(
                    Direction: FinancialDirection.Outgoing,
                    RequiresBalanceCheck: true,
                    AccountType: "Liability",
                    Description: "Liability Settlement (Outgoing Payout)"
                );
            }

            if (string.Equals(bucket, "Contra", StringComparison.OrdinalIgnoreCase))
            {
                return new PostingInstruction(
                    Direction: FinancialDirection.Outgoing,
                    RequiresBalanceCheck: true,
                    AccountType: "Contra",
                    Description: "Internal Contra Transfer"
                );
            }

            // Default to Expenses
            return new PostingInstruction(
                Direction: FinancialDirection.Outgoing,
                RequiresBalanceCheck: true,
                AccountType: "Expense",
                Description: "Operational Expense (Outgoing Payout)"
            );
        }
    }
}

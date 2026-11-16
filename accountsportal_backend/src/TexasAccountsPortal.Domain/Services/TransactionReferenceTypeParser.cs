using System;
using TexasAccountsPortal.Domain.Enums;

namespace TexasAccountsPortal.Domain.Services
{
    public static class TransactionReferenceTypeParser
    {
        public static bool TryParse(string? input, out TransactionReferenceType parsedResult)
        {
            var normalized = Normalize(input);
            if (normalized.HasValue)
            {
                parsedResult = normalized.Value;
                return true;
            }

            parsedResult = default;
            return false;
        }

        public static TransactionReferenceType? Normalize(string? input)
        {
            if (string.IsNullOrWhiteSpace(input)) return null;

            var clean = input.Trim().ToLowerInvariant().Replace('-', '_').Replace(' ', '_');

            if (clean.Contains("visa")) return TransactionReferenceType.Visa;
            if (clean.Contains("flight")) return TransactionReferenceType.Flight;
            if (clean.Contains("hotel")) return TransactionReferenceType.Hotel;
            if (clean.Contains("holiday")) return TransactionReferenceType.Holiday;
            if (clean.Contains("transport")) return TransactionReferenceType.Transport;
            if (clean.Contains("vfs")) return TransactionReferenceType.Vfs;
            if (clean.Contains("other")) return TransactionReferenceType.Other;
            if (clean.Contains("receipt") || clean.Equals("sale") || clean.Equals("sales")) return TransactionReferenceType.Receipt;

            if (clean.Contains("supplier_payment") || clean.Contains("supplierpayment")) return TransactionReferenceType.SupplierPayment;
            if (clean.Contains("supplier_credit") || clean.Contains("credit_clearance")) return TransactionReferenceType.SupplierCreditClearance;
            if (clean.Contains("supplier_wallet") || clean.Contains("credit_wallet")) return TransactionReferenceType.SupplierWallet;

            if (Enum.TryParse<TransactionReferenceType>(input.Trim(), true, out var exactMatch))
            {
                return exactMatch;
            }

            return null;
        }

        public static string ToApiString(TransactionReferenceType refType)
        {
            return refType switch
            {
                TransactionReferenceType.Visa => "visa",
                TransactionReferenceType.Flight => "flight",
                TransactionReferenceType.Hotel => "hotel",
                TransactionReferenceType.Holiday => "holiday",
                TransactionReferenceType.Transport => "transport",
                TransactionReferenceType.Vfs => "vfs",
                TransactionReferenceType.Other => "other",
                TransactionReferenceType.Receipt => "receipt",
                TransactionReferenceType.SupplierPayment => "supplier_payment",
                TransactionReferenceType.SupplierCreditClearance => "supplier_credit_clearance",
                TransactionReferenceType.SupplierWallet => "supplier_wallet",
                _ => refType.ToString().ToLowerInvariant()
            };
        }

        public static bool IsBusinessReference(TransactionReferenceType refType)
        {
            return refType switch
            {
                TransactionReferenceType.Visa or
                TransactionReferenceType.Flight or
                TransactionReferenceType.Hotel or
                TransactionReferenceType.Holiday or
                TransactionReferenceType.Transport or
                TransactionReferenceType.Vfs or
                TransactionReferenceType.Other or
                TransactionReferenceType.Receipt => true,
                _ => false
            };
        }
    }
}

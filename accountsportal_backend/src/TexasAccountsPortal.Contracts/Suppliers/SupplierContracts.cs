using System;
using System.Collections.Generic;

namespace TexasAccountsPortal.Contracts.Suppliers
{
    public record CreateSupplierRequest(string Name, string Code, List<string> Categories, decimal Wallet = 0m);

    public record UpdateSupplierRequest(string Name, List<string> Categories);

    public record SupplierResponse(
        long Id,
        string Name,
        string Code,
        decimal Wallet,
        bool IsVerified,
        List<string> Categories,
        DateTime CreatedAt
    );
}

-- ==============================================================================
-- Supplier Wallet Migration Verification Script
-- Table: suppliers
-- Columns before: Wallet (prepaid), CreditWallet (debt)
-- Column after:   Wallet (signed balance)
-- ==============================================================================

-- 1. PRE-MIGRATION VERIFICATION
-- Run before applying migration 'AddUnifiedSupplierWallet':
-- Take snapshot of counts and total net balance.
SELECT 
    COUNT(*) AS TotalSuppliers,
    SUM(Wallet) AS TotalPrepaidWalletBefore,
    SUM(CreditWallet) AS TotalCreditWalletBefore,
    SUM(Wallet - CreditWallet) AS ExpectedNetWalletAfter,
    SUM(CASE WHEN (Wallet - CreditWallet) > 0 THEN (Wallet - CreditWallet) ELSE 0 END) AS ExpectedSurplusAfter,
    SUM(CASE WHEN (Wallet - CreditWallet) < 0 THEN -(Wallet - CreditWallet) ELSE 0 END) AS ExpectedPayableAfter
FROM suppliers
WHERE DeletedAt IS NULL;

-- Detail snapshot per supplier (optional backup verification):
SELECT 
    Id, 
    Code, 
    Name, 
    Wallet AS OldWallet, 
    CreditWallet AS OldCreditWallet, 
    (Wallet - CreditWallet) AS CalculatedNewWallet
FROM suppliers
WHERE DeletedAt IS NULL
ORDER BY Id;


-- 2. APPLY MIGRATION (Executed via EF Core or Raw SQL)
-- BEGIN TRANSACTION;
-- UPDATE suppliers SET Wallet = Wallet - CreditWallet;
-- ALTER TABLE suppliers DROP COLUMN CreditWallet;
-- COMMIT TRANSACTION;


-- 3. POST-MIGRATION VERIFICATION
-- Run after applying migration 'AddUnifiedSupplierWallet':
SELECT 
    COUNT(*) AS TotalSuppliers,
    SUM(Wallet) AS ActualNetWalletAfter,
    SUM(CASE WHEN Wallet > 0 THEN Wallet ELSE 0 END) AS ActualSurplusAfter,
    SUM(CASE WHEN Wallet < 0 THEN -Wallet ELSE 0 END) AS ActualPayableAfter
FROM suppliers
WHERE DeletedAt IS NULL;

-- VERIFICATION ASSERTION:
-- ActualNetWalletAfter MUST EXACTLY MATCH ExpectedNetWalletAfter from Step 1.
-- If (ActualNetWalletAfter == ExpectedNetWalletAfter), migration integrity is 100% verified.


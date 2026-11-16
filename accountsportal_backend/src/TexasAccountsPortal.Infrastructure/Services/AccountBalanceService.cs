using Microsoft.EntityFrameworkCore;
using System;
using System.Threading;
using System.Threading.Tasks;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Domain.Enums;

namespace TexasAccountsPortal.Infrastructure.Services
{
    public sealed class AccountBalanceService : IAccountBalanceService
    {
        private readonly IAccountsDbContext _db;

        public AccountBalanceService(IAccountsDbContext db)
        {
            _db = db;
        }

        public async Task ValidateSufficientBalanceAsync(
            PaymentMethod method,
            long? sourceAccountId,
            long? sourceBankId,
            decimal amount,
            CancellationToken cancellationToken)
        {
            if (amount < 0)
                throw new ArgumentException("Amount cannot be negative", nameof(amount));
            if (amount == 0)
                return; // Zero-amount is a no-op

            if (method == PaymentMethod.Cash)
            {
                if (!sourceAccountId.HasValue)
                    throw new ArgumentException("SourceAccountId is required for Cash payment method.");

                var account = await _db.Accounts.FirstOrDefaultAsync(a => a.Id == sourceAccountId.Value, cancellationToken);
                if (account == null)
                    throw new KeyNotFoundException($"Source account with ID {sourceAccountId.Value} not found.");

                if (!account.IsActive)
                    throw new InvalidOperationException("Source account is inactive.");

                if (!account.HasSufficientBalance(amount))
                    throw new InvalidOperationException($"Insufficient balance in source cash drawer. Required: {amount:F3}, Available: {account.CurrentBalance:F3}");
            }
            else if (method == PaymentMethod.Bank || method == PaymentMethod.BankTransfer)
            {
                if (!sourceBankId.HasValue)
                    throw new ArgumentException("SourceBankId is required for Bank payment method.");

                var bank = await _db.Banks.FirstOrDefaultAsync(b => b.Id == sourceBankId.Value, cancellationToken);
                if (bank == null)
                    throw new KeyNotFoundException($"Source bank with ID {sourceBankId.Value} not found.");

                if (!bank.IsActive)
                    throw new InvalidOperationException("Source bank is inactive.");

                if (bank.CurrentBalance < amount)
                    throw new InvalidOperationException($"Insufficient balance in source bank account. Required: {amount:F3}, Available: {bank.CurrentBalance:F3}");
            }
        }

        public async Task DebitAsync(
            PaymentMethod method,
            long? sourceAccountId,
            long? sourceBankId,
            decimal amount,
            CancellationToken cancellationToken)
        {
            if (amount < 0)
                throw new ArgumentException("Amount cannot be negative", nameof(amount));
            if (amount == 0)
                return; // Zero-amount is a no-op

            if (method == PaymentMethod.Cash)
            {
                if (!sourceAccountId.HasValue)
                    throw new ArgumentException("SourceAccountId is required for Cash payment method.");

                var account = await _db.Accounts.FirstOrDefaultAsync(a => a.Id == sourceAccountId.Value, cancellationToken);
                if (account == null)
                    throw new KeyNotFoundException($"Source account with ID {sourceAccountId.Value} not found.");

                account.Debit(amount);
            }
            else if (method == PaymentMethod.Bank || method == PaymentMethod.BankTransfer)
            {
                if (!sourceBankId.HasValue)
                    throw new ArgumentException("SourceBankId is required for Bank payment method.");

                var bank = await _db.Banks.FirstOrDefaultAsync(b => b.Id == sourceBankId.Value, cancellationToken);
                if (bank == null)
                    throw new KeyNotFoundException($"Source bank with ID {sourceBankId.Value} not found.");

                bank.Debit(amount);
            }
        }

        public async Task CreditAsync(
            PaymentMethod method,
            long? sourceAccountId,
            long? sourceBankId,
            decimal amount,
            CancellationToken cancellationToken)
        {
            if (amount < 0)
                throw new ArgumentException("Amount cannot be negative", nameof(amount));
            if (amount == 0)
                return; // Zero-amount is a no-op

            if (method == PaymentMethod.Cash)
            {
                if (!sourceAccountId.HasValue)
                    throw new ArgumentException("SourceAccountId is required for Cash payment method.");

                var account = await _db.Accounts.FirstOrDefaultAsync(a => a.Id == sourceAccountId.Value, cancellationToken);
                if (account == null)
                    throw new KeyNotFoundException($"Source account with ID {sourceAccountId.Value} not found.");

                account.Credit(amount);
            }
            else if (method == PaymentMethod.Bank || method == PaymentMethod.BankTransfer)
            {
                if (!sourceBankId.HasValue)
                    throw new ArgumentException("SourceBankId is required for Bank payment method.");

                var bank = await _db.Banks.FirstOrDefaultAsync(b => b.Id == sourceBankId.Value, cancellationToken);
                if (bank == null)
                    throw new KeyNotFoundException($"Source bank with ID {sourceBankId.Value} not found.");

                bank.Credit(amount);
            }
        }
    }
}

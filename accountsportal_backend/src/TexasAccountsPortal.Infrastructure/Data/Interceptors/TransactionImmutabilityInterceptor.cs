using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Diagnostics;
using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using TexasAccountsPortal.Domain.Entities;
using TexasAccountsPortal.Domain.Enums;

namespace TexasAccountsPortal.Infrastructure.Data.Interceptors
{
    public class TransactionImmutabilityInterceptor : SaveChangesInterceptor
    {
        public override ValueTask<InterceptionResult<int>> SavingChangesAsync(
            DbContextEventData eventData,
            InterceptionResult<int> result,
            CancellationToken cancellationToken = default)
        {
            EnforceImmutability(eventData.Context);
            return base.SavingChangesAsync(eventData, result, cancellationToken);
        }

        public override InterceptionResult<int> SavingChanges(
            DbContextEventData eventData,
            InterceptionResult<int> result)
        {
            EnforceImmutability(eventData.Context);
            return base.SavingChanges(eventData, result);
        }

        private static void EnforceImmutability(DbContext? context)
        {
            if (context == null) return;

            var entries = context.ChangeTracker.Entries<FinancialTransaction>();

            foreach (var entry in entries)
            {
                if (entry.State == EntityState.Deleted)
                {
                    throw new InvalidOperationException("Transactions cannot be physically deleted from the database.");
                }

                if (entry.State == EntityState.Modified)
                {
                    // Verify Status transitions
                    var statusProp = entry.Property(nameof(FinancialTransaction.Status));
                    if (statusProp.IsModified)
                    {
                        var originalStatus = (FinancialTransactionStatus)statusProp.OriginalValue!;
                        var currentStatus = (FinancialTransactionStatus)statusProp.CurrentValue!;

                        if (originalStatus != FinancialTransactionStatus.Pending)
                        {
                            throw new InvalidOperationException("Cannot modify status of a completed transaction.");
                        }

                        if (currentStatus == FinancialTransactionStatus.Approved)
                        {
                            var approvedBy = entry.Property(nameof(FinancialTransaction.ApprovedBy)).CurrentValue;
                            if (approvedBy == null)
                            {
                                throw new InvalidOperationException("Approved transaction must specify the approver.");
                            }
                        }
                        else if (currentStatus == FinancialTransactionStatus.Rejected)
                        {
                            var rejectedBy = entry.Property(nameof(FinancialTransaction.RejectedBy)).CurrentValue;
                            if (rejectedBy == null)
                            {
                                throw new InvalidOperationException("Rejected transaction must specify the rejecter.");
                            }
                        }
                        else
                        {
                            throw new InvalidOperationException("Invalid status transition.");
                        }
                    }

                    // Allowed workflow mutation fields
                    var allowedModifiedFields = new[]
                    {
                        nameof(FinancialTransaction.Status),
                        nameof(FinancialTransaction.ApprovedBy),
                        nameof(FinancialTransaction.ApprovedAt),
                        nameof(FinancialTransaction.RejectedBy),
                        nameof(FinancialTransaction.RejectedAt),
                        nameof(FinancialTransaction.ReturnReason),
                        nameof(FinancialTransaction.BalanceAfter),
                        nameof(FinancialTransaction.DestinationAccountId),
                        nameof(FinancialTransaction.DestinationBankId),
                        nameof(FinancialTransaction.ReferenceId),
                        nameof(FinancialTransaction.UpdatedAt)
                    };

                    var modifiedProperties = entry.Properties
                        .Where(p => p.IsModified)
                        .Select(p => p.Metadata.Name)
                        .ToList();

                    var disallowedChanges = modifiedProperties.Except(allowedModifiedFields).ToList();

                    if (disallowedChanges.Any())
                    {
                        throw new InvalidOperationException(
                            $"Transactions are immutable. Attempted to modify immutable fields: {string.Join(", ", disallowedChanges)}");
                    }
                }
            }
        }
    }
}

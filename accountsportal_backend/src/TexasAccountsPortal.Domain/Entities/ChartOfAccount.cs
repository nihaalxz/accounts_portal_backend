using System;
using TexasAccountsPortal.Domain.Enums;

namespace TexasAccountsPortal.Domain.Entities
{
    /// <summary>
    /// A node in the Chart of Accounts hierarchy.
    /// Represents a GL account, control account, or account group.
    /// Posted GL entries may only target leaf (posting) accounts.
    /// System accounts (IsSystemAccount = true) cannot be deleted or renamed.
    /// </summary>
    public class ChartOfAccount
    {
        public long Id { get; private set; }

        /// <summary>Unique alphanumeric account code (e.g., "1110").</summary>
        public string Code { get; private set; } = string.Empty;

        public string Name { get; private set; } = string.Empty;

        public GlAccountType AccountType { get; private set; }

        /// <summary>Which side of the equation increases this account in normal use.</summary>
        public NormalBalance NormalBalance { get; private set; }

        /// <summary>Null = root-level account.</summary>
        public long? ParentId { get; private set; }

        /// <summary>
        /// Control accounts aggregate sub-ledger balances and cannot receive direct GL postings.
        /// Posting accounts can receive GL entries.
        /// </summary>
        public bool IsControlAccount { get; private set; }

        /// <summary>System-seeded accounts cannot be deleted or renamed by users.</summary>
        public bool IsSystemAccount { get; private set; }

        public bool IsActive { get; private set; } = true;

        public string? Description { get; private set; }

        public long? CreatedBy { get; private set; }
        public DateTime CreatedAt { get; private set; }
        public DateTime UpdatedAt { get; private set; }

        public byte[] RowVersion { get; set; } = Array.Empty<byte>();

        // EF Core constructor
        private ChartOfAccount() { }

        public static ChartOfAccount Create(
            string code,
            string name,
            GlAccountType accountType,
            NormalBalance normalBalance,
            long? parentId,
            bool isControlAccount,
            bool isSystemAccount,
            string? description,
            long? createdBy)
        {
            if (string.IsNullOrWhiteSpace(code))
                throw new ArgumentException("Account code is required.", nameof(code));
            if (string.IsNullOrWhiteSpace(name))
                throw new ArgumentException("Account name is required.", nameof(name));

            var now = DateTime.UtcNow;
            return new ChartOfAccount
            {
                Code = code.Trim().ToUpperInvariant(),
                Name = name.Trim(),
                AccountType = accountType,
                NormalBalance = normalBalance,
                ParentId = parentId,
                IsControlAccount = isControlAccount,
                IsSystemAccount = isSystemAccount,
                Description = description,
                CreatedBy = createdBy,
                CreatedAt = now,
                UpdatedAt = now,
                IsActive = true
            };
        }

        public void Rename(string newName, long actorUserId)
        {
            if (IsSystemAccount)
                throw new InvalidOperationException("System accounts cannot be renamed.");
            if (string.IsNullOrWhiteSpace(newName))
                throw new ArgumentException("Account name is required.", nameof(newName));

            Name = newName.Trim();
            UpdatedAt = DateTime.UtcNow;
        }

        public void Deactivate(long actorUserId)
        {
            if (IsSystemAccount)
                throw new InvalidOperationException("System accounts cannot be deactivated.");
            IsActive = false;
            UpdatedAt = DateTime.UtcNow;
        }

        public void Reactivate()
        {
            IsActive = true;
            UpdatedAt = DateTime.UtcNow;
        }
    }
}

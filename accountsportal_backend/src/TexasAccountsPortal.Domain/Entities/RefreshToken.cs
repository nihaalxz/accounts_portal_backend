using System;

namespace TexasAccountsPortal.Domain.Entities
{
    public class RefreshToken
    {
        public Guid Id { get; set; }
        public long UserId { get; set; }
        public string TokenHash { get; set; } = string.Empty;
        public DateTime CreatedAt { get; set; }
        public DateTime ExpiresAt { get; set; }
        public DateTime? RevokedAt { get; set; }
        public Guid? ReplacedByTokenId { get; set; }

        public bool IsExpired => DateTime.UtcNow >= ExpiresAt;
        public bool IsRevoked => RevokedAt.HasValue;
        public bool IsActive => !IsRevoked && !IsExpired;

        public void Revoke(Guid? replacedByTokenId = null)
        {
            if (RevokedAt.HasValue) return;
            RevokedAt = DateTime.UtcNow;
            ReplacedByTokenId = replacedByTokenId;
        }
    }
}

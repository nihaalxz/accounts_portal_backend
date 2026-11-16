using System.ComponentModel.DataAnnotations;

namespace TexasAccountsPortal.Infrastructure.Options
{
    public class JwtOptions
    {
        public const string SectionName = "Jwt";

        [Required]
        [MinLength(16)] // Key must be at least 16 characters/128 bits
        public string Key { get; set; } = string.Empty;

        [Required]
        public string Issuer { get; set; } = string.Empty;

        [Required]
        public string Audience { get; set; } = string.Empty;

        [Range(1, 168)] // Up to 7 days
        public int ExpiryHours { get; set; } = 8;
    }
}

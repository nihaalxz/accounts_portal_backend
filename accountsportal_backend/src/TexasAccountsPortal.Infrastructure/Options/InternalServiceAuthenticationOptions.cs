using System.ComponentModel.DataAnnotations;

namespace TexasAccountsPortal.Infrastructure.Options
{
    public class InternalServiceAuthenticationOptions
    {
        public const string SectionName = "InternalServiceAuth";

        [Required]
        [MinLength(32, ErrorMessage = "Service Key must be at least 32 characters/256-bit strong.")]
        public string ServiceKey { get; set; } = string.Empty;
    }
}

using System;
using System.ComponentModel.DataAnnotations;
using System.Linq;

namespace TexasAccountsPortal.Infrastructure.Options
{
    public class BootstrapOptions
    {
        public const string SectionName = "Bootstrap";

        public bool Enabled { get; set; }

        [EmailAddress]
        public string? Email { get; set; }

        public string? Password { get; set; }

        public string Validate()
        {
            if (!Enabled)
                return string.Empty;

            if (string.IsNullOrWhiteSpace(Email))
                return "Bootstrap Email is required when bootstrap is enabled.";

            if (string.IsNullOrWhiteSpace(Password))
                return "Bootstrap Password is required when bootstrap is enabled.";

            if (Password.Length < 12)
                return "Bootstrap Password must be at least 12 characters long.";

            bool hasUpper = Password.Any(char.IsUpper);
            bool hasLower = Password.Any(char.IsLower);
            bool hasDigit = Password.Any(char.IsDigit);
            bool hasSpecial = Password.Any(c => !char.IsLetterOrDigit(c));

            if (!hasUpper || !hasLower || !hasDigit || !hasSpecial)
                return "Bootstrap Password must contain at least one uppercase, lowercase, number, and special character.";

            var weakKeywords = new[] { "password", "admin", "welcome", "texastravels", "123456" };
            if (weakKeywords.Any(w => Password.Contains(w, StringComparison.OrdinalIgnoreCase)))
                return "Bootstrap Password is too weak or uses forbidden keywords.";

            return string.Empty;
        }
    }
}

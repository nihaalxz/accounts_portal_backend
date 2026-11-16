using System.ComponentModel.DataAnnotations;

namespace TexasAccountsPortal.Infrastructure.Options
{
    public class SalesPortalOptions
    {
        public const string SectionName = "SalesPortal";

        [Required]
        public string BaseUrl { get; set; } = string.Empty;

        [Required]
        public string ApiKey { get; set; } = string.Empty;
    }
}

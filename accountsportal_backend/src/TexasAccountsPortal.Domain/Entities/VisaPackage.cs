using System;

namespace TexasAccountsPortal.Domain.Entities
{
    public class VisaPackage
    {
        public long Id { get; set; }
        public long CountryId { get; set; }
        public string Name { get; set; } = null!;
        public string? Description { get; set; }
        public bool IsActive { get; set; } = true;
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime? UpdatedAt { get; set; }

        // Navigation property
        public VisaCountry Country { get; set; } = null!;
    }
}

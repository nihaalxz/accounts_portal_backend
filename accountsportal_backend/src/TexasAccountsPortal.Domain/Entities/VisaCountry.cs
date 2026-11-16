using System;
using System.Collections.Generic;

namespace TexasAccountsPortal.Domain.Entities
{
    public class VisaCountry
    {
        public long Id { get; set; }
        public string Name { get; set; } = null!;
        public string? Code { get; set; }
        public bool IsActive { get; set; } = true;
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime? UpdatedAt { get; set; }

        // Navigation property
        public ICollection<VisaPackage> Packages { get; set; } = new List<VisaPackage>();
    }
}

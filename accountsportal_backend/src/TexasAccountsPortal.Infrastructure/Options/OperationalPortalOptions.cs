namespace TexasAccountsPortal.Infrastructure.Options
{
    public class OperationalPortalOptions
    {
        public const string SectionName = "OperationalPortal";

        public string BaseUrl { get; set; } = "http://localhost:5005";
        public string SyncKey { get; set; } = "730f173df8e40c2284961c1b7e1333610f4158e2a2954fc3c2cfd908b43ffb5b";
    }
}

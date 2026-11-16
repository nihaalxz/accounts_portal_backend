namespace TexasAccountsPortal.Application.Options;

public sealed class NotificationOptions
{
    public const string SectionName = "Notifications";

    public bool Enabled { get; set; } = true;
    public string ProducerName { get; set; } = "accountsportal_backend";
    public int DefaultDebounceMilliseconds { get; set; } = 200;
}

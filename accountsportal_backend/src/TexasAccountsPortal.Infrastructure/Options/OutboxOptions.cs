using System.ComponentModel.DataAnnotations;

namespace TexasAccountsPortal.Infrastructure.Options
{
    public class OutboxOptions
    {
        public const string SectionName = "Outbox";

        [Range(1, 100)]
        public int BatchSize { get; set; } = 10;

        [Range(1, 10)]
        public int MaxRetryCount { get; set; } = 5;

        [Range(1, 60)]
        public int IntervalSeconds { get; set; } = 5;
    }
}

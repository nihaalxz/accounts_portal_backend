using System;
using System.Collections.Generic;

namespace TexasAccountsPortal.Contracts.Staff
{
    public record WorkloadLimitResponse(
        long Id,
        string EntityType,
        int MaxActiveLimit,
        long? UserId,
        DateTime UpdatedAt
    );

    public record UpdateWorkloadLimitRequest(
        string EntityType,
        int MaxActiveLimit,
        long? UserId = null
    );

    public record UpdateWorkloadLimitsBatchRequest(
        List<UpdateWorkloadLimitRequest> Limits
    );
}

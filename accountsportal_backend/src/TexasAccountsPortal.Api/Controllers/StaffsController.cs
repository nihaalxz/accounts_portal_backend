using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Contracts.Staff;
using TexasAccountsPortal.Domain.Entities;

namespace TexasAccountsPortal.Api.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class StaffsController : ApiControllerBase
    {
        private readonly IAccountsDbContext _dbContext;
        private readonly ISalesPortalClient _salesPortalClient;
        private readonly IOperationalPortalClient _operationalPortalClient;
        private readonly IPasswordHasher _passwordHasher;

        public StaffsController(
            IAccountsDbContext dbContext,
            ISalesPortalClient salesPortalClient,
            IOperationalPortalClient operationalPortalClient,
            IPasswordHasher passwordHasher)
        {
            _dbContext = dbContext ?? throw new ArgumentNullException(nameof(dbContext));
            _salesPortalClient = salesPortalClient ?? throw new ArgumentNullException(nameof(salesPortalClient));
            _operationalPortalClient = operationalPortalClient ?? throw new ArgumentNullException(nameof(operationalPortalClient));
            _passwordHasher = passwordHasher ?? throw new ArgumentNullException(nameof(passwordHasher));
        }

        /// <summary>
        /// GET /api/staffs/accounts
        /// Returns all staff members from the Accounts Portal database.
        /// </summary>
        [HttpGet("accounts")]
        public async Task<ActionResult<IEnumerable<StaffUserResponse>>> GetAccountsStaff(CancellationToken ct = default)
        {
            var users = await _dbContext.Users
                .AsNoTracking()
                .OrderByDescending(u => u.CreatedAt)
                .Select(u => new StaffUserResponse(
                    u.Id,
                    u.Name,
                    u.Email,
                    u.UserType ?? "Accounts",
                    u.IsActive,
                    null, // Skip loading heavy ProfilePicture base64 blobs in list query
                    u.LastLoginAt,
                    u.LastLoginIp,
                    u.CreatedAt,
                    u.UpdatedAt,
                    new List<string>(),
                    0m,
                    0m
                ))
                .ToListAsync(ct);

            return Ok(users);
        }

        /// <summary>
        /// GET /api/staffs/sales
        /// Returns all staff members from the Sales Portal service.
        /// </summary>
        [HttpGet("sales")]
        public async Task<ActionResult<IEnumerable<StaffUserResponse>>> GetSalesStaff(CancellationToken ct = default)
        {
            var salesUsers = await _salesPortalClient.GetSalesUsersAsync(ct);

            var result = (salesUsers ?? Enumerable.Empty<SalesUserResponse>())
                .Select(u => new StaffUserResponse(
                    u.Id,
                    u.Name,
                    u.Email,
                    u.UserType ?? "Salesman",
                    u.IsActive,
                    null,
                    u.LastLoginAt,
                    u.LastLoginIp,
                    u.CreatedAt,
                    u.UpdatedAt,
                    new List<string>(),
                    u.MonthlyTarget,
                    u.ProfitTarget
                ));

            return Ok(result);
        }

        public record UpdateSalesmanTargetRequest(decimal MonthlyTarget, decimal ProfitTarget);

        /// <summary>
        /// PUT /api/staffs/sales/{id}/targets
        /// Updates monthly sales volume & profit target for a salesman in Sales Portal.
        /// </summary>
        [HttpPut("sales/{id:long}/targets")]
        [Authorize(Policy = "RequireMasterAccountant")]
        public async Task<IActionResult> UpdateSalesmanTargets(
            [FromRoute] long id,
            [FromBody] UpdateSalesmanTargetRequest request,
            CancellationToken ct = default)
        {
            await _salesPortalClient.UpdateSalesUserTargetsAsync(id, request.MonthlyTarget, request.ProfitTarget, ct);
            return Ok(new { Message = "Salesman targets updated successfully." });
        }

        /// <summary>
        /// GET /api/staffs/operational
        /// Returns all staff members from the Operational Portal service.
        /// </summary>
        [HttpGet("operational")]
        public async Task<ActionResult<IEnumerable<StaffUserResponse>>> GetOperationalStaff(CancellationToken ct = default)
        {
            var opsUsers = await _operationalPortalClient.GetOperationalUsersAsync(ct);

            var result = (opsUsers ?? Enumerable.Empty<OperationalUserResponse>())
                .Select(u => new StaffUserResponse(
                    u.Id,
                    u.Name,
                    u.Email,
                    u.UserType ?? "Operations",
                    u.IsActive,
                    null,
                    u.LastLoginAt,
                    u.LastLoginIp,
                    u.CreatedAt,
                    u.UpdatedAt,
                    u.Permissions ?? new List<string>(),
                    0m,
                    0m
                ));

            return Ok(result);
        }

        /// <summary>
        /// GET /api/staffs/workload-limits
        /// Returns workload capacity limits configured in the Operational Portal.
        /// </summary>
        [HttpGet("workload-limits")]
        public async Task<ActionResult<IEnumerable<WorkloadLimitResponse>>> GetWorkloadLimits(CancellationToken ct = default)
        {
            var limits = await _operationalPortalClient.GetWorkloadLimitsAsync(ct);
            return Ok(limits);
        }

        /// <summary>
        /// PUT /api/staffs/workload-limits
        /// Updates workload capacity limits in the Operational Portal.
        /// </summary>
        [HttpPut("workload-limits")]
        [Authorize(Policy = "RequireMasterAccountant")]
        public async Task<IActionResult> UpdateWorkloadLimits([FromBody] UpdateWorkloadLimitsBatchRequest request, CancellationToken ct = default)
        {
            await _operationalPortalClient.UpdateWorkloadLimitsAsync(request, ct);
            return Ok(new { Message = "Workload capacity limits updated successfully." });
        }

        /// <summary>
        /// POST /api/staffs/accounts
        /// Provisions a new staff member into the Accounts Portal database.
        /// Roles supported: "master_accountant" / "Master Accountant" and "Accounts" / "Accountant".
        /// </summary>
        [HttpPost("accounts")]
        [Authorize(Policy = "RequireMasterAccountant")]
        public async Task<ActionResult<StaffUserResponse>> CreateAccountsStaff(
            [FromBody] CreateAccountsStaffRequest request,
            CancellationToken ct = default)
        {
            if (string.IsNullOrWhiteSpace(request.Name) || string.IsNullOrWhiteSpace(request.Email) || string.IsNullOrWhiteSpace(request.Password))
            {
                return BadRequest(new { Message = "Name, email, and password are required." });
            }

            var emailLower = request.Email.Trim().ToLowerInvariant();
            var existing = await _dbContext.Users.AsNoTracking().FirstOrDefaultAsync(u => u.Email.ToLower() == emailLower, ct);
            if (existing != null)
            {
                return Conflict(new { Message = $"Accounts user with email '{request.Email}' already exists." });
            }

            var normalizedRole = request.Role?.ToLowerInvariant().Replace(" ", "_");
            string userType = (normalizedRole == "master_accountant" || normalizedRole == "masteraccountant")
                ? "master_accountant"
                : "Accounts";

            var newUser = new AccountsUser
            {
                Name = request.Name.Trim(),
                Email = emailLower,
                PasswordHash = _passwordHasher.HashPassword(request.Password),
                UserType = userType,
                PortalPermissions = (userType == "master_accountant")
                    ? new List<string> { "all", "manage_banks", "manage_accounts", "post_transactions", "approve_transactions" }
                    : new List<string> { "post_transactions" },
                IsActive = true,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            };

            _dbContext.Add(newUser);
            await _dbContext.SaveChangesAsync(ct);

            var response = new StaffUserResponse(
                newUser.Id,
                newUser.Name,
                newUser.Email,
                newUser.UserType,
                newUser.IsActive,
                newUser.ProfilePicture,
                newUser.LastLoginAt,
                newUser.LastLoginIp,
                newUser.CreatedAt,
                newUser.UpdatedAt,
                new List<string>(),
                0m,
                0m
            );

            return Ok(response);
        }

        /// <summary>
        /// POST /api/staffs/sales
        /// Provisions a new staff member into the Sales Portal.
        /// </summary>
        [HttpPost("sales")]
        [Authorize(Policy = "RequireMasterAccountant")]
        public async Task<IActionResult> CreateSalesStaff(
            [FromBody] CreateSalesStaffRequest request,
            CancellationToken ct = default)
        {
            if (string.IsNullOrWhiteSpace(request.Name) || string.IsNullOrWhiteSpace(request.Email) || string.IsNullOrWhiteSpace(request.Password))
            {
                return BadRequest(new { Message = "Name, email, and password are required." });
            }

            var role = string.IsNullOrWhiteSpace(request.Role) ? "Salesman" : request.Role;
            await _salesPortalClient.SyncUserAsync(request.Name.Trim(), request.Email.Trim(), request.Password, role, isActive: true, ct);

            return Ok(new { Message = "Sales staff created successfully." });
        }

        /// <summary>
        /// POST /api/staffs/operational
        /// Provisions a new staff member into the Operational Portal with section permissions.
        /// </summary>
        [HttpPost("operational")]
        [Authorize(Policy = "RequireMasterAccountant")]
        public async Task<IActionResult> CreateOperationalStaff(
            [FromBody] CreateOperationalStaffRequest request,
            CancellationToken ct = default)
        {
            if (string.IsNullOrWhiteSpace(request.Name) || string.IsNullOrWhiteSpace(request.Email) || string.IsNullOrWhiteSpace(request.Password))
            {
                return BadRequest(new { Message = "Name, email, and password are required." });
            }

            var role = string.IsNullOrWhiteSpace(request.Role) ? "Operations" : request.Role;
            var permissions = request.Permissions ?? new List<string>();

            await _operationalPortalClient.SyncStaffAsync(request.Name.Trim(), request.Email.Trim(), request.Password, role, permissions, isActive: true, ct);

            return Ok(new { Message = "Operational staff created successfully." });
        }

        /// <summary>
        /// PUT /api/staffs/operational/permissions
        /// Updates section access permissions for an Operational Portal staff member.
        /// </summary>
        [HttpPut("operational/permissions")]
        [Authorize(Policy = "RequireMasterAccountant")]
        public async Task<IActionResult> UpdateOperationalPermissions(
            [FromBody] UpdateOperationalPermissionsRequest request,
            CancellationToken ct = default)
        {
            if (string.IsNullOrWhiteSpace(request.Email) || string.IsNullOrWhiteSpace(request.Name))
            {
                return BadRequest(new { Message = "Email and Name are required." });
            }

            var role = string.IsNullOrWhiteSpace(request.UserType) ? "Operations" : request.UserType;
            var permissions = request.Permissions ?? new List<string>();

            await _operationalPortalClient.SyncStaffAsync(request.Name.Trim(), request.Email.Trim(), password: null, role, permissions, isActive: true, ct);

            return Ok(new { Message = "Operational staff permissions updated successfully." });
        }

        /// <summary>
        /// PUT /api/staffs/accounts/{id}/email
        /// Updates the email address for an Accounts Portal staff user.
        /// </summary>
        [HttpPut("accounts/{id:long}/email")]
        [Authorize(Policy = "RequireMasterAccountant")]
        public async Task<IActionResult> UpdateAccountsStaffEmail(
            [FromRoute] long id,
            [FromBody] UpdateStaffEmailRequest request,
            CancellationToken ct = default)
        {
            if (string.IsNullOrWhiteSpace(request.NewEmail))
            {
                return BadRequest(new { Message = "New email address is required." });
            }

            var cleanEmail = request.NewEmail.Trim().ToLowerInvariant();
            var user = await _dbContext.Users.FirstOrDefaultAsync(u => u.Id == id, ct);
            if (user == null) return NotFound(new { Message = "Accounts staff user not found." });

            var existing = await _dbContext.Users.AsNoTracking().FirstOrDefaultAsync(u => u.Email.ToLower() == cleanEmail && u.Id != id, ct);
            if (existing != null)
            {
                return Conflict(new { Message = $"Accounts staff user with email '{request.NewEmail}' already exists." });
            }

            user.Email = cleanEmail;
            user.UpdatedAt = DateTime.UtcNow;
            await _dbContext.SaveChangesAsync(ct);

            return Ok(new { Message = "Accounts staff email updated successfully." });
        }

        /// <summary>
        /// PUT /api/staffs/sales/{id}/email
        /// Updates the email address for a Sales Portal staff user.
        /// </summary>
        [HttpPut("sales/{id:long}/email")]
        [Authorize(Policy = "RequireMasterAccountant")]
        public async Task<IActionResult> UpdateSalesStaffEmail(
            [FromRoute] long id,
            [FromBody] UpdateStaffEmailRequest request,
            CancellationToken ct = default)
        {
            if (string.IsNullOrWhiteSpace(request.NewEmail))
            {
                return BadRequest(new { Message = "New email address is required." });
            }

            await _salesPortalClient.UpdateSalesUserEmailAsync(id, request.NewEmail.Trim(), ct);
            return Ok(new { Message = "Sales staff email updated successfully." });
        }

        /// <summary>
        /// PUT /api/staffs/operational/{id}/email
        /// Updates the email address for an Operational Portal staff user.
        /// </summary>
        [HttpPut("operational/{id:long}/email")]
        [Authorize(Policy = "RequireMasterAccountant")]
        public async Task<IActionResult> UpdateOperationalStaffEmail(
            [FromRoute] long id,
            [FromBody] UpdateStaffEmailRequest request,
            CancellationToken ct = default)
        {
            if (string.IsNullOrWhiteSpace(request.NewEmail))
            {
                return BadRequest(new { Message = "New email address is required." });
            }

            await _operationalPortalClient.UpdateOperationalUserEmailAsync(id, request.NewEmail.Trim(), ct);
            return Ok(new { Message = "Operational staff email updated successfully." });
        }
    }
}

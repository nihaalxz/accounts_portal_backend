using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Contracts.Accounts;
using TexasAccountsPortal.Domain.Entities;
using TexasAccountsPortal.Domain.Enums;

namespace TexasAccountsPortal.Api.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class AccountController : ApiControllerBase
    {
        private readonly IAccountsDbContext _dbContext;
        private readonly IFinancialPostingService _postingService;

        public AccountController(IAccountsDbContext dbContext, IFinancialPostingService postingService)
        {
            _dbContext = dbContext;
            _postingService = postingService;
        }

        [HttpGet]
        [Authorize(Policy = "RequireAccountant")]
        public async Task<ActionResult<IEnumerable<AccountResponse>>> GetAccounts()
        {
            var accounts = await _dbContext.Accounts
                .AsNoTracking()
                .OrderBy(a => a.Name)
                .Select(a => new AccountResponse(
                    a.Id,
                    a.Name,
                    a.Type.ToString().ToLower(),
                    a.LedgerType.ToString().ToLower(),
                    a.Balance,
                    a.CurrentBalance,
                    a.BankId,
                    a.IsActive,
                    a.CreatedAt
                ))
                .ToListAsync();

            return Ok(accounts);
        }

        [HttpPost]
        [Authorize(Policy = "RequireAccountant")]
        public async Task<ActionResult<AccountResponse>> CreateAccount([FromBody] CreateAccountRequest request)
        {
            if (string.IsNullOrWhiteSpace(request.Name) || string.IsNullOrWhiteSpace(request.Type) || string.IsNullOrWhiteSpace(request.LedgerType))
            {
                return BadRequest(new { Message = "Account Name, Type, and Ledger Type are required." });
            }

            if (!Enum.TryParse<AccountType>(request.Type, true, out var accType))
            {
                return BadRequest(new { Message = $"Invalid account type: {request.Type}. Allowed: cash, bank, credit" });
            }

            if (!Enum.TryParse<LedgerType>(request.LedgerType, true, out var ledType))
            {
                return BadRequest(new { Message = $"Invalid ledger type: {request.LedgerType}. Allowed: asset, liability, capital, income, expense" });
            }

            var roleClaim = User.FindFirst("UserType")?.Value
                         ?? User.FindFirst(System.Security.Claims.ClaimTypes.Role)?.Value
                         ?? string.Empty;
            var isMaster = roleClaim.Replace(" ", "_").Equals("master_accountant", StringComparison.OrdinalIgnoreCase);

            if (!isMaster)
            {
                var userName = User.FindFirst(System.Security.Claims.ClaimTypes.Name)?.Value ?? GetCurrentUserEmail();
                var pending = new PendingApproval
                {
                    DocumentNumber = $"PA-{Guid.NewGuid().ToString("N")[..8].ToUpper()}",
                    EntityType = "account",
                    PayloadJson = System.Text.Json.JsonSerializer.Serialize(request),
                    SubmittedByUserId = GetCurrentUserId(),
                    SubmittedByName = userName,
                    SubmittedAt = DateTime.UtcNow,
                    Status = "pending"
                };

                _dbContext.Add(pending);
                await _dbContext.SaveChangesAsync(default);

                return Accepted(new { Message = "Cash account creation submitted for master accountant approval.", PendingId = pending.Id });
            }

            var account = new Account
            {
                Name = request.Name,
                Type = accType,
                LedgerType = ledType,
                BankId = request.BankId,
                CreatedBy = GetCurrentUserId()
            };

            account.InitializeBalance(request.OpeningBalance);

            _dbContext.Add(account);

            var audit = new AuditLog
            {
                ActorUserId = GetCurrentUserId(),
                Action = "Account Created",
                EntityType = "Account",
                EntityId = account.Id.ToString(),
                NewState = System.Text.Json.JsonSerializer.Serialize(account),
                CorrelationId = Guid.NewGuid().ToString()
            };
            _dbContext.Add(audit);

            await _dbContext.SaveChangesAsync(default);

            return Ok(new AccountResponse(
                account.Id,
                account.Name,
                account.Type.ToString().ToLower(),
                account.LedgerType.ToString().ToLower(),
                account.Balance,
                account.CurrentBalance,
                account.BankId,
                account.IsActive,
                account.CreatedAt
            ));
        }

        [HttpPut("{id}")]
        [Authorize(Policy = "RequireMasterAccountant")]
        public async Task<IActionResult> UpdateAccount(long id, [FromBody] UpdateAccountRequest request)
        {
            if (string.IsNullOrWhiteSpace(request.Name) || string.IsNullOrWhiteSpace(request.Type) || string.IsNullOrWhiteSpace(request.LedgerType))
            {
                return BadRequest(new { Message = "Account Name, Type, and Ledger Type are required." });
            }

            if (!Enum.TryParse<AccountType>(request.Type, true, out var accType))
            {
                return BadRequest(new { Message = "Invalid account type." });
            }

            if (!Enum.TryParse<LedgerType>(request.LedgerType, true, out var ledType))
            {
                return BadRequest(new { Message = "Invalid ledger type." });
            }

            var account = await _dbContext.FindAsync<Account>(new object[] { id }, default);
            if (account == null)
            {
                return NotFound(new { Message = "Account not found." });
            }

            var oldState = System.Text.Json.JsonSerializer.Serialize(account);

            account.Name = request.Name;
            account.Type = accType;
            account.LedgerType = ledType;
            account.BankId = request.BankId;
            account.UpdatedAt = DateTime.UtcNow;

            var audit = new AuditLog
            {
                ActorUserId = GetCurrentUserId(),
                Action = "Account Updated",
                EntityType = "Account",
                EntityId = account.Id.ToString(),
                OldState = oldState,
                NewState = System.Text.Json.JsonSerializer.Serialize(account),
                CorrelationId = Guid.NewGuid().ToString()
            };
            _dbContext.Add(audit);

            await _dbContext.SaveChangesAsync(default);

            return NoContent();
        }

        [HttpPost("{id}/toggle-status")]
        [Authorize(Policy = "RequireMasterAccountant")]
        public async Task<IActionResult> ToggleStatus(long id)
        {
            var account = await _dbContext.FindAsync<Account>(new object[] { id }, default);
            if (account == null)
            {
                return NotFound(new { Message = "Account not found." });
            }

            var oldState = System.Text.Json.JsonSerializer.Serialize(account);

            account.IsActive = !account.IsActive;
            account.UpdatedAt = DateTime.UtcNow;

            var audit = new AuditLog
            {
                ActorUserId = GetCurrentUserId(),
                Action = "Account Status Toggled",
                EntityType = "Account",
                EntityId = account.Id.ToString(),
                OldState = oldState,
                NewState = System.Text.Json.JsonSerializer.Serialize(account),
                CorrelationId = Guid.NewGuid().ToString()
            };
            _dbContext.Add(audit);

            await _dbContext.SaveChangesAsync(default);

            return Ok(new { Message = $"Account is now {(account.IsActive ? "active" : "inactive")}." });
        }

        [HttpPost("{id}/correct-balance")]
        [Authorize(Policy = "RequireMasterAccountant")]
        public async Task<IActionResult> CorrectBalance(long id, [FromBody] BalanceCorrectionRequest request)
        {
            if (string.IsNullOrWhiteSpace(request.Reason))
            {
                return BadRequest(new { Message = "A reason for balance correction is required." });
            }

            // Extract Idempotency-Key header
            HttpContext.Request.Headers.TryGetValue("Idempotency-Key", out var idempotencyKeyValues);
            var idempotencyKey = idempotencyKeyValues.FirstOrDefault() ?? string.Empty;

            try
            {
                var newBalance = await _postingService.PostBalanceCorrectionAsync(
                    id,
                    request.AdjustmentAmount,
                    request.Reason,
                    GetCurrentUserId(),
                    idempotencyKey,
                    default
                );

                return Ok(new { Message = "Balance correction applied successfully.", CurrentBalance = newBalance });
            }
            catch (KeyNotFoundException)
            {
                return NotFound(new { Message = "Account not found." });
            }
            catch (InvalidOperationException ex)
            {
                return Conflict(new { Message = ex.Message });
            }
        }
    }
}

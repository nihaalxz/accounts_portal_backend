using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Contracts.Banks;
using TexasAccountsPortal.Domain.Entities;

namespace TexasAccountsPortal.Api.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class BankController : ApiControllerBase
    {
        private readonly IAccountsDbContext _dbContext;

        public BankController(IAccountsDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        [Authorize(Policy = "RequireAccountant")]
        public async Task<ActionResult<IEnumerable<BankResponse>>> GetBanks()
        {
            var banks = await _dbContext.Banks
                .AsNoTracking()
                .OrderBy(b => b.BankName)
                .Select(b => new BankResponse(
                    b.Id,
                    b.BankName,
                    b.AccountNumber,
                    b.Balance,
                    b.CurrentBalance,
                    b.IsActive,
                    b.CreatedAt
                ))
                .ToListAsync();

            return Ok(banks);
        }

        [HttpPost]
        [Authorize(Policy = "RequireAccountant")]
        public async Task<ActionResult<BankResponse>> CreateBank([FromBody] CreateBankRequest request)
        {
            if (string.IsNullOrWhiteSpace(request.BankName) || string.IsNullOrWhiteSpace(request.AccountNumber))
            {
                return BadRequest(new { Message = "Bank Name and Account Number are required." });
            }

            var duplicate = await _dbContext.Banks.AnyAsync(b => b.AccountNumber == request.AccountNumber);
            if (duplicate)
            {
                return Conflict(new { Message = "A bank with this account number already exists." });
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
                    EntityType = "bank",
                    PayloadJson = System.Text.Json.JsonSerializer.Serialize(request),
                    SubmittedByUserId = GetCurrentUserId(),
                    SubmittedByName = userName,
                    SubmittedAt = DateTime.UtcNow,
                    Status = "pending"
                };

                _dbContext.Add(pending);
                await _dbContext.SaveChangesAsync(default);

                return Accepted(new { Message = "Bank account creation submitted for master accountant approval.", PendingId = pending.Id });
            }

            var bank = new Bank
            {
                BankName = request.BankName,
                AccountNumber = request.AccountNumber,
                CreatedBy = GetCurrentUserId()
            };

            bank.InitializeBalance(request.OpeningBalance);

            _dbContext.Add(bank);

            // Audit
            var audit = new AuditLog
            {
                ActorUserId = GetCurrentUserId(),
                Action = "Bank Created",
                EntityType = "Bank",
                EntityId = bank.Id.ToString(),
                NewState = System.Text.Json.JsonSerializer.Serialize(bank),
                CorrelationId = Guid.NewGuid().ToString()
            };
            _dbContext.Add(audit);

            await _dbContext.SaveChangesAsync(default);

            return Ok(new BankResponse(
                bank.Id,
                bank.BankName,
                bank.AccountNumber,
                bank.Balance,
                bank.CurrentBalance,
                bank.IsActive,
                bank.CreatedAt
            ));
        }

        [HttpPut("{id}")]
        [Authorize(Policy = "RequireMasterAccountant")]
        public async Task<IActionResult> UpdateBank(long id, [FromBody] UpdateBankRequest request)
        {
            if (string.IsNullOrWhiteSpace(request.BankName) || string.IsNullOrWhiteSpace(request.AccountNumber))
            {
                return BadRequest(new { Message = "Bank Name and Account Number are required." });
            }

            var bank = await _dbContext.FindAsync<Bank>(new object[] { id }, default);
            if (bank == null)
            {
                return NotFound(new { Message = "Bank not found." });
            }

            var duplicate = await _dbContext.Banks.AnyAsync(b => b.AccountNumber == request.AccountNumber && b.Id != id);
            if (duplicate)
            {
                return Conflict(new { Message = "Another bank with this account number already exists." });
            }

            var oldState = System.Text.Json.JsonSerializer.Serialize(bank);

            bank.BankName = request.BankName;
            bank.AccountNumber = request.AccountNumber;
            bank.UpdatedAt = DateTime.UtcNow;

            var audit = new AuditLog
            {
                ActorUserId = GetCurrentUserId(),
                Action = "Bank Updated",
                EntityType = "Bank",
                EntityId = bank.Id.ToString(),
                OldState = oldState,
                NewState = System.Text.Json.JsonSerializer.Serialize(bank),
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
            var bank = await _dbContext.FindAsync<Bank>(new object[] { id }, default);
            if (bank == null)
            {
                return NotFound(new { Message = "Bank not found." });
            }

            var oldState = System.Text.Json.JsonSerializer.Serialize(bank);

            bank.IsActive = !bank.IsActive;
            bank.UpdatedAt = DateTime.UtcNow;

            var audit = new AuditLog
            {
                ActorUserId = GetCurrentUserId(),
                Action = "Bank Status Toggled",
                EntityType = "Bank",
                EntityId = bank.Id.ToString(),
                OldState = oldState,
                NewState = System.Text.Json.JsonSerializer.Serialize(bank),
                CorrelationId = Guid.NewGuid().ToString()
            };
            _dbContext.Add(audit);

            await _dbContext.SaveChangesAsync(default);

            return Ok(new { Message = $"Bank is now {(bank.IsActive ? "active" : "inactive")}." });
        }
    }
}

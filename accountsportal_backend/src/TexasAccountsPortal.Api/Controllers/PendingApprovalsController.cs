using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Contracts.Agents;
using TexasAccountsPortal.Contracts.PendingApprovals;
using TexasAccountsPortal.Contracts.Suppliers;
using TexasAccountsPortal.Contracts.Banks;
using TexasAccountsPortal.Contracts.Accounts;
using TexasAccountsPortal.Domain.Entities;
using TexasAccountsPortal.Domain.Enums;

namespace TexasAccountsPortal.Api.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/pending-approvals")]
    public class PendingApprovalsController : ApiControllerBase
    {
        private readonly IAccountsDbContext _dbContext;

        public PendingApprovalsController(IAccountsDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        // ── GET /api/pending-approvals ──────────────────────────────────────
        // Any accountant can view:
        //   - Master accountants see ALL pending items.
        //   - Normal accountants see only their own submissions.
        // Optional query params: ?entityType=agent&status=pending
        [HttpGet]
        [Authorize(Policy = "RequireAccountant")]
        public async Task<ActionResult<IEnumerable<PendingApprovalResponse>>> GetPending(
            [FromQuery] string? entityType = null,
            [FromQuery] string? status = "pending",
            [FromQuery] DateTime? startDate = null,
            [FromQuery] DateTime? endDate = null)
        {
            var userId = GetCurrentUserId();
            var userEmail = GetCurrentUserEmail();

            // Determine if master accountant by checking role claim
            var roleClaim = User.FindFirst("UserType")?.Value
                         ?? User.FindFirst(System.Security.Claims.ClaimTypes.Role)?.Value
                         ?? string.Empty;
            var isMaster = roleClaim.Replace(" ", "_").Equals("master_accountant", StringComparison.OrdinalIgnoreCase);

            var query = _dbContext.PendingApprovals.AsNoTracking();

            // Role filter
            if (!isMaster)
                query = query.Where(p => p.SubmittedByUserId == userId);

            // Optional entity type filter
            if (!string.IsNullOrWhiteSpace(entityType) && !entityType.Equals("all", StringComparison.OrdinalIgnoreCase))
                query = query.Where(p => p.EntityType == entityType.ToLower());

            // Status filter (default: pending; pass "all" or specific status)
            if (!string.IsNullOrWhiteSpace(status) && !status.Equals("all", StringComparison.OrdinalIgnoreCase))
                query = query.Where(p => p.Status == status.ToLower());

            if (startDate.HasValue)
                query = query.Where(p => p.SubmittedAt >= startDate.Value);

            if (endDate.HasValue)
                query = query.Where(p => p.SubmittedAt <= endDate.Value.AddDays(1).AddTicks(-1));

            var items = await query
                .OrderByDescending(p => p.SubmittedAt)
                .Select(p => new PendingApprovalResponse(
                    p.Id,
                    p.EntityType,
                    p.PayloadJson,
                    p.SubmittedByName,
                    p.SubmittedByUserId,
                    p.SubmittedAt,
                    p.Status,
                    p.ReviewedByName,
                    p.ReviewedAt))
                .ToListAsync();

            return Ok(items);
        }

        // ── POST /api/pending-approvals ──────────────────────────────────────
        // Any accountant submits a pending request.
        [HttpPost]
        [Authorize(Policy = "RequireAccountant")]
        public async Task<ActionResult<PendingApprovalResponse>> Submit(
            [FromBody] SubmitPendingApprovalRequest request)
        {
            var entityType = request.EntityType?.ToLower();
            var allowedTypes = new[] { "agent", "supplier", "bank", "account", "payment_header", "account_category", "expense_header" };
            if (!allowedTypes.Contains(entityType))
                return BadRequest(new { Message = "EntityType must be 'agent', 'supplier', 'bank', 'account' or 'payment_header'." });

            if (string.IsNullOrWhiteSpace(request.PayloadJson))
                return BadRequest(new { Message = "PayloadJson is required." });

            var submitterName = !string.IsNullOrWhiteSpace(request.SubmittedByName)
                ? request.SubmittedByName
                : (User.FindFirst(System.Security.Claims.ClaimTypes.Name)?.Value ?? GetCurrentUserEmail());

            var pending = new PendingApproval
            {
                DocumentNumber = $"PA-{Guid.NewGuid().ToString("N")[..8].ToUpper()}",
                EntityType = entityType,
                PayloadJson = request.PayloadJson,
                SubmittedByUserId = GetCurrentUserId(),
                SubmittedByName = submitterName,
                SubmittedAt = DateTime.UtcNow,
                Status = "pending"
            };

            _dbContext.Add(pending);
            await _dbContext.SaveChangesAsync(default);

            return Ok(new PendingApprovalResponse(
                pending.Id,
                pending.EntityType,
                pending.PayloadJson,
                pending.SubmittedByName,
                pending.SubmittedByUserId,
                pending.SubmittedAt,
                pending.Status,
                pending.ReviewedByName,
                pending.ReviewedAt));
        }

        // ── POST /api/pending-approvals/{id}/approve ──────────────────────────
        // Master accountant approves: creates the actual record.
        [HttpPost("{id}/approve")]
        [Authorize(Policy = "RequireMasterAccountant")]
        public async Task<IActionResult> Approve(long id)
        {
            var pending = await _dbContext.FindAsync<PendingApproval>(new object[] { id }, default);
            if (pending == null)
                return NotFound(new { Message = "Pending request not found." });

            if (pending.Status != "pending")
                return Conflict(new { Message = $"Request is already {pending.Status}." });

            var reviewerName = User.FindFirst(System.Security.Claims.ClaimTypes.Name)?.Value
                            ?? GetCurrentUserEmail();

            if (pending.EntityType == "agent")
            {
                var agentPayload = JsonSerializer.Deserialize<CreateAgentRequest>(
                    pending.PayloadJson,
                    new JsonSerializerOptions { PropertyNameCaseInsensitive = true });

                if (agentPayload == null)
                    return BadRequest(new { Message = "Invalid agent payload in pending request." });

                var agent = new Agent
                {
                    FirstName = agentPayload.FirstName.Trim(),
                    LastName = string.IsNullOrWhiteSpace(agentPayload.LastName) ? string.Empty : agentPayload.LastName.Trim(),
                    SalesmanId = agentPayload.SalesmanId,
                    PhoneNo = agentPayload.PhoneNo,
                    EmailId = agentPayload.EmailId,
                    Nationality = agentPayload.Nationality,
                    Address = agentPayload.Address,
                    IsVerified = true
                };
                _dbContext.Add(agent);
            }
            else if (pending.EntityType == "supplier")
            {
                var supplierPayload = JsonSerializer.Deserialize<CreateSupplierRequest>(
                    pending.PayloadJson,
                    new JsonSerializerOptions { PropertyNameCaseInsensitive = true });

                if (supplierPayload == null)
                    return BadRequest(new { Message = "Invalid supplier payload in pending request." });

                var dup = await _dbContext.Suppliers.AnyAsync(s => s.Code == supplierPayload.Code);
                if (dup)
                    return Conflict(new { Message = "A supplier with this code already exists." });

                var supplier = new Supplier
                {
                    Name = supplierPayload.Name,
                    Code = supplierPayload.Code,
                    Categories = supplierPayload.Categories ?? new System.Collections.Generic.List<string>(),
                    IsVerified = true
                };
                if (supplierPayload.Wallet != 0m)
                {
                    supplier.SetInitialWallet(supplierPayload.Wallet);
                }
                _dbContext.Add(supplier);
            }
            else if (pending.EntityType == "bank")
            {
                var bankPayload = JsonSerializer.Deserialize<CreateBankRequest>(
                    pending.PayloadJson,
                    new JsonSerializerOptions { PropertyNameCaseInsensitive = true });

                if (bankPayload == null)
                    return BadRequest(new { Message = "Invalid bank payload in pending request." });

                var dup = await _dbContext.Banks.AnyAsync(b => b.AccountNumber == bankPayload.AccountNumber);
                if (dup)
                    return Conflict(new { Message = "A bank with this account number already exists." });

                var bank = new Bank
                {
                    BankName = bankPayload.BankName,
                    AccountNumber = bankPayload.AccountNumber,
                    CreatedBy = pending.SubmittedByUserId
                };
                bank.InitializeBalance(bankPayload.OpeningBalance);
                _dbContext.Add(bank);
            }
            else if (pending.EntityType == "account")
            {
                var accountPayload = JsonSerializer.Deserialize<CreateAccountRequest>(
                    pending.PayloadJson,
                    new JsonSerializerOptions { PropertyNameCaseInsensitive = true });

                if (accountPayload == null)
                    return BadRequest(new { Message = "Invalid account payload in pending request." });

                if (!Enum.TryParse<AccountType>(accountPayload.Type, true, out var accType))
                    return BadRequest(new { Message = $"Invalid account type: {accountPayload.Type}." });

                if (!Enum.TryParse<LedgerType>(accountPayload.LedgerType, true, out var ledType))
                    return BadRequest(new { Message = $"Invalid ledger type: {accountPayload.LedgerType}." });

                var account = new Account
                {
                    Name = accountPayload.Name,
                    Type = accType,
                    LedgerType = ledType,
                    BankId = accountPayload.BankId,
                    CreatedBy = pending.SubmittedByUserId
                };
                account.InitializeBalance(accountPayload.OpeningBalance);
                _dbContext.Add(account);
            }
            else if (pending.EntityType == "payment_header" || pending.EntityType == "account_category" || pending.EntityType == "expense_header")
            {
                var headerPayload = JsonSerializer.Deserialize<TexasAccountsPortal.Contracts.Expenses.CreateExpenseHeaderRequest>(
                    pending.PayloadJson,
                    new JsonSerializerOptions { PropertyNameCaseInsensitive = true });

                if (headerPayload == null)
                    return BadRequest(new { Message = "Invalid payment header payload in pending request." });

                var dup = await _dbContext.ExpenseHeaders.AnyAsync(h => h.Name.ToLower() == headerPayload.Name.ToLower());
                if (dup)
                    return Conflict(new { Message = $"An expense category header with name '{headerPayload.Name}' already exists." });

                var header = new ExpenseHeader
                {
                    Name = headerPayload.Name,
                    Category = headerPayload.Category ?? "Expenses",
                    Description = headerPayload.Description,
                    CreatedBy = pending.SubmittedByUserId,
                    CreatedAt = DateTime.UtcNow,
                    UpdatedAt = DateTime.UtcNow
                };
                _dbContext.Add(header);
            }
            else
            {
                return BadRequest(new { Message = $"Unsupported entity type '{pending.EntityType}'." });
            }

            // Mark as approved
            pending.Status = "approved";
            pending.ReviewedByName = reviewerName;
            pending.ReviewedAt = DateTime.UtcNow;

            // Audit
            _dbContext.Add(new AuditLog
            {
                ActorUserId = GetCurrentUserId(),
                Action = $"PendingApproval Approved ({pending.EntityType})",
                EntityType = "PendingApproval",
                EntityId = pending.Id.ToString(),
                NewState = pending.PayloadJson,
                CorrelationId = Guid.NewGuid().ToString()
            });

            await _dbContext.SaveChangesAsync(default);
            return NoContent();
        }

        // ── POST /api/pending-approvals/{id}/reject ─────────────────────────
        // Master accountant rejects: marks the request as rejected.
        [HttpPost("{id}/reject")]
        [Authorize(Policy = "RequireMasterAccountant")]
        public async Task<IActionResult> Reject(long id)
        {
            var pending = await _dbContext.FindAsync<PendingApproval>(new object[] { id }, default);
            if (pending == null)
                return NotFound(new { Message = "Pending request not found." });

            if (pending.Status != "pending")
                return Conflict(new { Message = $"Request is already {pending.Status}." });

            var reviewerName = User.FindFirst(System.Security.Claims.ClaimTypes.Name)?.Value
                            ?? GetCurrentUserEmail();

            pending.Status = "rejected";
            pending.ReviewedByName = reviewerName;
            pending.ReviewedAt = DateTime.UtcNow;

            _dbContext.Add(new AuditLog
            {
                ActorUserId = GetCurrentUserId(),
                Action = $"PendingApproval Rejected ({pending.EntityType})",
                EntityType = "PendingApproval",
                EntityId = pending.Id.ToString(),
                CorrelationId = Guid.NewGuid().ToString()
            });

            await _dbContext.SaveChangesAsync(default);
            return NoContent();
        }
    }
}


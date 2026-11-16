using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Contracts.Agents;
using TexasAccountsPortal.Domain.Entities;

namespace TexasAccountsPortal.Api.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class AgentController : ApiControllerBase
    {
        private readonly IAccountsDbContext _dbContext;

        public AgentController(IAccountsDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        [Authorize(Policy = "RequireAccountant")]
        public async Task<ActionResult<IEnumerable<AgentResponse>>> GetAgents()
        {
            var agents = await _dbContext.Agents
                .AsNoTracking()
                .OrderBy(a => a.FirstName)
                .Select(a => new AgentResponse(
                    a.Id,
                    a.FirstName,
                    a.LastName,
                    a.GetFullName(),
                    a.SalesmanId,
                    a.PhoneNo,
                    a.EmailId,
                    a.Nationality,
                    a.Address,
                    a.Wallet,
                    a.IsVerified,
                    a.CreatedAt
                ))
                .ToListAsync();

            return Ok(agents);
        }

        [HttpPost]
        [Authorize(Policy = "RequireAccountant")]
        public async Task<ActionResult<AgentResponse>> CreateAgent([FromBody] CreateAgentRequest request)
        {
            if (string.IsNullOrWhiteSpace(request.FirstName))
            {
                return BadRequest(new { Message = "First Name is required." });
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
                    EntityType = "agent",
                    PayloadJson = System.Text.Json.JsonSerializer.Serialize(request),
                    SubmittedByUserId = GetCurrentUserId(),
                    SubmittedByName = userName,
                    SubmittedAt = DateTime.UtcNow,
                    Status = "pending"
                };

                _dbContext.Add(pending);
                await _dbContext.SaveChangesAsync(default);

                return Accepted(new { Message = "Agent creation submitted for master accountant approval.", PendingId = pending.Id });
            }

            var agent = new Agent
            {
                FirstName = request.FirstName.Trim(),
                LastName = string.IsNullOrWhiteSpace(request.LastName) ? string.Empty : request.LastName.Trim(),
                SalesmanId = request.SalesmanId,
                PhoneNo = request.PhoneNo,
                EmailId = request.EmailId,
                Nationality = request.Nationality,
                Address = request.Address,
                IsVerified = true
            };

            _dbContext.Add(agent);

            var audit = new AuditLog
            {
                ActorUserId = GetCurrentUserId(),
                Action = "Agent Created",
                EntityType = "Agent",
                EntityId = agent.Id.ToString(),
                NewState = System.Text.Json.JsonSerializer.Serialize(agent),
                CorrelationId = Guid.NewGuid().ToString()
            };
            _dbContext.Add(audit);

            await _dbContext.SaveChangesAsync(default);

            return Ok(new AgentResponse(
                agent.Id,
                agent.FirstName,
                agent.LastName,
                agent.GetFullName(),
                agent.SalesmanId,
                agent.PhoneNo,
                agent.EmailId,
                agent.Nationality,
                agent.Address,
                agent.Wallet,
                agent.IsVerified,
                agent.CreatedAt
            ));
        }

        [HttpPut("{id}")]
        [Authorize(Policy = "RequireMasterAccountant")]
        public async Task<IActionResult> UpdateAgent(long id, [FromBody] UpdateAgentRequest request)
        {
            if (string.IsNullOrWhiteSpace(request.FirstName))
            {
                return BadRequest(new { Message = "First Name is required." });
            }

            var agent = await _dbContext.FindAsync<Agent>(new object[] { id }, default);
            if (agent == null)
            {
                return NotFound(new { Message = "Agent not found." });
            }

            var oldState = System.Text.Json.JsonSerializer.Serialize(agent);

            agent.FirstName = request.FirstName.Trim();
            agent.LastName = string.IsNullOrWhiteSpace(request.LastName) ? string.Empty : request.LastName.Trim();
            agent.PhoneNo = request.PhoneNo;
            agent.EmailId = request.EmailId;
            agent.Nationality = request.Nationality;
            agent.Address = request.Address;
            agent.UpdatedAt = DateTime.UtcNow;

            var audit = new AuditLog
            {
                ActorUserId = GetCurrentUserId(),
                Action = "Agent Updated",
                EntityType = "Agent",
                EntityId = agent.Id.ToString(),
                OldState = oldState,
                NewState = System.Text.Json.JsonSerializer.Serialize(agent),
                CorrelationId = Guid.NewGuid().ToString()
            };
            _dbContext.Add(audit);

            await _dbContext.SaveChangesAsync(default);

            return NoContent();
        }
    }
}

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Contracts.Suppliers;
using TexasAccountsPortal.Domain.Entities;

namespace TexasAccountsPortal.Api.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class SupplierController : ApiControllerBase
    {
        private readonly IAccountsDbContext _dbContext;

        public SupplierController(IAccountsDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult<IEnumerable<SupplierResponse>>> GetSuppliers()
        {
            var suppliers = await _dbContext.Suppliers
                .AsNoTracking()
                .OrderBy(s => s.Name)
                .Select(s => new SupplierResponse(
                    s.Id,
                    s.Name,
                    s.Code,
                    s.Wallet,
                    s.IsVerified,
                    s.Categories,
                    s.CreatedAt
                ))
                .ToListAsync();

            return Ok(suppliers);
        }

        [HttpPost]
        [Authorize(Policy = "RequireAccountant")]
        public async Task<ActionResult<SupplierResponse>> CreateSupplier([FromBody] CreateSupplierRequest request)
        {
            if (string.IsNullOrWhiteSpace(request.Name) || string.IsNullOrWhiteSpace(request.Code))
            {
                return BadRequest(new { Message = "Supplier Name and Code are required." });
            }

            var duplicate = await _dbContext.Suppliers.AnyAsync(s => s.Code == request.Code);
            if (duplicate)
            {
                return Conflict(new { Message = "A supplier with this code already exists." });
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
                    EntityType = "supplier",
                    PayloadJson = System.Text.Json.JsonSerializer.Serialize(request),
                    SubmittedByUserId = GetCurrentUserId(),
                    SubmittedByName = userName,
                    SubmittedAt = DateTime.UtcNow,
                    Status = "pending"
                };

                _dbContext.Add(pending);
                await _dbContext.SaveChangesAsync(default);

                return Accepted(new { Message = "Supplier creation submitted for master accountant approval.", PendingId = pending.Id });
            }

            var supplier = new Supplier
            {
                Name = request.Name,
                Code = request.Code,
                Categories = request.Categories ?? new List<string>(),
                IsVerified = true
            };

            if (request.Wallet != 0m)
            {
                supplier.SetInitialWallet(request.Wallet);
            }

            _dbContext.Add(supplier);

            var audit = new AuditLog
            {
                ActorUserId = GetCurrentUserId(),
                Action = "Supplier Created",
                EntityType = "Supplier",
                EntityId = supplier.Id.ToString(),
                NewState = System.Text.Json.JsonSerializer.Serialize(supplier),
                CorrelationId = Guid.NewGuid().ToString()
            };
            _dbContext.Add(audit);

            await _dbContext.SaveChangesAsync(default);

            return Ok(new SupplierResponse(
                supplier.Id,
                supplier.Name,
                supplier.Code,
                supplier.Wallet,
                supplier.IsVerified,
                supplier.Categories,
                supplier.CreatedAt
            ));
        }

        [HttpPut("{id}")]
        [Authorize(Policy = "RequireMasterAccountant")]
        public async Task<IActionResult> UpdateSupplier(long id, [FromBody] UpdateSupplierRequest request)
        {
            if (string.IsNullOrWhiteSpace(request.Name))
            {
                return BadRequest(new { Message = "Supplier Name is required." });
            }

            var supplier = await _dbContext.FindAsync<Supplier>(new object[] { id }, default);
            if (supplier == null)
            {
                return NotFound(new { Message = "Supplier not found." });
            }

            var oldState = System.Text.Json.JsonSerializer.Serialize(supplier);

            supplier.Name = request.Name;
            supplier.Categories = request.Categories ?? new List<string>();
            supplier.UpdatedAt = DateTime.UtcNow;

            var audit = new AuditLog
            {
                ActorUserId = GetCurrentUserId(),
                Action = "Supplier Updated",
                EntityType = "Supplier",
                EntityId = supplier.Id.ToString(),
                OldState = oldState,
                NewState = System.Text.Json.JsonSerializer.Serialize(supplier),
                CorrelationId = Guid.NewGuid().ToString()
            };
            _dbContext.Add(audit);

            await _dbContext.SaveChangesAsync(default);

            return NoContent();
        }
    }
}

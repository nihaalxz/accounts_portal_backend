using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Contracts.Auth;
using TexasAccountsPortal.Domain.Entities;

namespace TexasAccountsPortal.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ApiControllerBase
    {
        private readonly IAccountsDbContext _dbContext;
        private readonly IPasswordHasher _passwordHasher;
        private readonly ITokenService _tokenService;

        public AuthController(
            IAccountsDbContext dbContext,
            IPasswordHasher passwordHasher,
            ITokenService tokenService)
        {
            _dbContext = dbContext;
            _passwordHasher = passwordHasher;
            _tokenService = tokenService;
        }

        [HttpPost("login")]
        [AllowAnonymous]
        public async Task<IActionResult> Login([FromBody] LoginRequest request)
        {
            if (string.IsNullOrEmpty(request.Email) || string.IsNullOrEmpty(request.Password))
            {
                return BadRequest(new { Message = "Email and password are required." });
            }

            var user = await _dbContext.Users.FirstOrDefaultAsync(u => u.Email == request.Email);
            if (user == null)
            {
                return Unauthorized(new { Message = "Invalid credentials." });
            }

            if (!_passwordHasher.VerifyPassword(request.Password, user.PasswordHash))
            {
                return Unauthorized(new { Message = "Invalid credentials." });
            }

            if (!user.IsActive)
            {
                return Forbid("User account is inactive.");
            }

            if (!user.IsMasterAccountant() && !user.IsNormalAccountant())
            {
                return StatusCode(403, new { Message = "Access Denied: This user account is not authorized to access the Accounts Portal." });
            }

            // Update login audits
            user.LastLoginAt = DateTime.UtcNow;
            user.LastLoginIp = HttpContext.Connection.RemoteIpAddress?.ToString();
            user.UpdatedAt = DateTime.UtcNow;

            var tokens = _tokenService.GenerateTokens(user);

            // Store refresh token
            var tokenRecord = new RefreshToken
            {
                Id = Guid.NewGuid(),
                UserId = user.Id,
                TokenHash = HashRefreshToken(tokens.RefreshToken),
                CreatedAt = DateTime.UtcNow,
                ExpiresAt = DateTime.UtcNow.AddDays(7)
            };
            _dbContext.Add(tokenRecord);

            await _dbContext.SaveChangesAsync(default);

            return Ok(new LoginResponse(
                tokens.AccessToken,
                tokens.RefreshToken,
                user.UserType,
                user.Name,
                user.Email,
                user.PortalPermissions,
                user.ProfilePicture
            ));
        }

        [HttpPost("refresh")]
        [AllowAnonymous]
        public async Task<IActionResult> Refresh([FromBody] RefreshTokenRequest request)
        {
            if (string.IsNullOrEmpty(request.RefreshToken))
            {
                return BadRequest(new { Message = "Refresh token is required." });
            }

            var hash = HashRefreshToken(request.RefreshToken);
            var tokenRecord = await _dbContext.RefreshTokens.FirstOrDefaultAsync(r => r.TokenHash == hash);

            if (tokenRecord == null)
            {
                return Unauthorized(new { Message = "Invalid refresh token." });
            }

            // Detect reuse
            if (tokenRecord.IsRevoked)
            {
                if (tokenRecord.ReplacedByTokenId.HasValue)
                {
                    // Revoke all tokens for this compromised user
                    var compromisedTokens = await _dbContext.RefreshTokens
                        .Where(r => r.UserId == tokenRecord.UserId && !r.RevokedAt.HasValue)
                        .ToListAsync();

                    foreach (var token in compromisedTokens)
                    {
                        token.Revoke();
                    }

                    await _dbContext.SaveChangesAsync(default);
                }

                return Unauthorized(new { Message = "Token has been revoked." });
            }

            if (tokenRecord.IsExpired)
            {
                return Unauthorized(new { Message = "Refresh token expired." });
            }

            var user = await _dbContext.FindAsync<AccountsUser>(new object[] { tokenRecord.UserId }, default);
            if (user == null || !user.IsActive)
            {
                return Unauthorized(new { Message = "User account is inactive or disabled." });
            }

            var tokens = _tokenService.GenerateTokens(user);

            var newTokenId = Guid.NewGuid();
            var newTokenRecord = new RefreshToken
            {
                Id = newTokenId,
                UserId = user.Id,
                TokenHash = HashRefreshToken(tokens.RefreshToken),
                CreatedAt = DateTime.UtcNow,
                ExpiresAt = DateTime.UtcNow.AddDays(7)
            };

            _dbContext.Add(newTokenRecord);
            tokenRecord.Revoke(newTokenId);

            await _dbContext.SaveChangesAsync(default);

            return Ok(new RefreshTokenResponse(tokens.AccessToken, tokens.RefreshToken));
        }

        [HttpPost("logout")]
        [AllowAnonymous]
        public async Task<IActionResult> Logout([FromBody] RefreshTokenRequest request)
        {
            if (string.IsNullOrEmpty(request.RefreshToken))
            {
                return BadRequest(new { Message = "Refresh token is required." });
            }

            var hash = HashRefreshToken(request.RefreshToken);
            var tokenRecord = await _dbContext.RefreshTokens.FirstOrDefaultAsync(r => r.TokenHash == hash);

            if (tokenRecord != null)
            {
                tokenRecord.Revoke();
                await _dbContext.SaveChangesAsync(default);
            }

            return Ok(new { Message = "Logged out successfully." });
        }

        [HttpGet("me")]
        [Authorize]
        public async Task<IActionResult> GetMe()
        {
            var userId = GetCurrentUserId();
            var user = await _dbContext.FindAsync<AccountsUser>(new object[] { userId }, default);
            if (user == null)
            {
                return NotFound(new { Message = "User profile not found." });
            }

            return Ok(new UserProfileResponse(
                user.Id,
                user.Name,
                user.Email,
                user.UserType,
                user.PortalPermissions,
                user.IsActive,
                user.ProfilePicture
            ));
        }

        [HttpPut("profile")]
        [Authorize]
        public async Task<IActionResult> UpdateProfile([FromBody] UpdateProfileRequest request)
        {
            var userId = GetCurrentUserId();
            var user = await _dbContext.FindAsync<AccountsUser>(new object[] { userId }, default);
            if (user == null)
            {
                return NotFound(new { Message = "User profile not found." });
            }

            if (!string.IsNullOrEmpty(request.NewPassword))
            {
                if (string.IsNullOrEmpty(request.CurrentPassword))
                {
                    return BadRequest(new { Message = "Current password is required to change password." });
                }

                if (!_passwordHasher.VerifyPassword(request.CurrentPassword, user.PasswordHash))
                {
                    return BadRequest(new { Message = "Invalid current password." });
                }

                user.PasswordHash = _passwordHasher.HashPassword(request.NewPassword);
            }

            if (request.ProfilePicture != null)
            {
                user.ProfilePicture = request.ProfilePicture;
            }

            user.UpdatedAt = DateTime.UtcNow;
            await _dbContext.SaveChangesAsync(default);

            return Ok(new { Message = "Profile updated successfully.", ProfilePicture = user.ProfilePicture });
        }


        private static string HashRefreshToken(string token)
        {
            using var sha256 = SHA256.Create();
            var bytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(token));
            return Convert.ToHexString(bytes);
        }
    }
}

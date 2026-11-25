using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using TexasAccountsPortal.Application;
using TexasAccountsPortal.Application.Interfaces;
using TexasAccountsPortal.Infrastructure;
using TexasAccountsPortal.Infrastructure.Options;
using TexasAccountsPortal.Api.Authentication;
using TexasAccountsPortal.Api.Extensions;
using Microsoft.AspNetCore.Authentication;
using Microsoft.EntityFrameworkCore;
using TexasAccountsPortal.Infrastructure.Data;
using TexasAccountsPortal.Domain.Enums;

// Configure QuestPDF License & Fonts
QuestPDF.Settings.License = QuestPDF.Infrastructure.LicenseType.Community;
var fontsDir = Path.Combine(AppContext.BaseDirectory, "Fonts");
if (Directory.Exists(fontsDir))
{
    foreach (var fontFile in Directory.GetFiles(fontsDir, "*.ttf"))
    {
        using var fontStream = File.OpenRead(fontFile);
        QuestPDF.Drawing.FontManager.RegisterFont(fontStream);
    }
}

#if DEBUG
if (string.IsNullOrEmpty(Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT")))
{
    Environment.SetEnvironmentVariable("ASPNETCORE_ENVIRONMENT", "Development");
}
#endif

var builder = WebApplication.CreateBuilder(args);

builder.Logging.ClearProviders();
builder.Logging.AddConsole();
builder.Logging.AddDebug();

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(options =>
{
    options.AddSecurityDefinition("Bearer", new Microsoft.OpenApi.Models.OpenApiSecurityScheme
    {
        Name = "Authorization",
        Type = Microsoft.OpenApi.Models.SecuritySchemeType.ApiKey,
        Scheme = "Bearer",
        BearerFormat = "JWT",
        In = Microsoft.OpenApi.Models.ParameterLocation.Header,
        Description = "JWT Authorization header using the Bearer scheme."
    });

    options.AddSecurityRequirement(new Microsoft.OpenApi.Models.OpenApiSecurityRequirement
    {
        {
            new Microsoft.OpenApi.Models.OpenApiSecurityScheme
            {
                Reference = new Microsoft.OpenApi.Models.OpenApiReference
                {
                    Type = Microsoft.OpenApi.Models.ReferenceType.SecurityScheme,
                    Id = "Bearer"
                }
            },
            Array.Empty<string>()
        }
    });
});

// ProblemDetails configuration
builder.Services.AddProblemDetails();
builder.Services.AddExceptionHandler<TexasAccountsPortal.Api.Middleware.GlobalExceptionHandler>();

// Layer Registrations
builder.Services.AddApplication();
builder.Services.AddInfrastructure(builder.Configuration);
builder.Services.AddRealtimeInfrastructure(builder.Configuration);

// Bind JWT configurations for setup
var jwtKey = builder.Configuration["Jwt:Key"] ?? "tx_ops_super_secret_key_999_must_be_long_enough";
var keyBytes = Encoding.UTF8.GetBytes(jwtKey);

builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(options =>
{
    options.RequireHttpsMetadata = false;
    options.SaveToken = true;
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(keyBytes),
        ValidateIssuer = true,
        ValidIssuer = builder.Configuration["Jwt:Issuer"] ?? "texas_operational_portal",
        ValidateAudience = true,
        ValidAudience = builder.Configuration["Jwt:Audience"] ?? "texas_operational_portal_clients",
        ValidateLifetime = true,
        ClockSkew = TimeSpan.Zero
    };
    options.Events ??= new JwtBearerEvents();
    options.Events.ConfigureJwtBearerQueryStringForSignalR();
})
.AddScheme<AuthenticationSchemeOptions, InternalServiceAuthenticationHandler>("InternalServiceAuth", null);

builder.Services.AddAuthorization(options =>
{
    options.AddPolicy("RequireMasterAccountant", policy =>
        policy.RequireRole("master_accountant", "Master Accountant"));

    options.AddPolicy("RequireAccountant", policy =>
        policy.RequireRole("Accounts", "accountant", "Normal Accountant", "master_accountant", "Master Accountant"));

    options.AddPolicy("AccountsInternalApiAccess", policy =>
    {
        policy.AddAuthenticationSchemes("InternalServiceAuth");
        policy.RequireAuthenticatedUser();
        policy.RequireRole("InternalService");
    });
});

builder.Services.AddHealthChecks()
    .AddDbContextCheck<TexasAccountsPortal.Infrastructure.Data.AccountsDbContext>("db");

// Configure CORS
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.SetIsOriginAllowed(_ => true)
              .AllowAnyMethod()
              .AllowAnyHeader()
              .AllowCredentials();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();

    try
    {
        using var scope = app.Services.CreateScope();
        var dbContext = scope.ServiceProvider.GetRequiredService<AccountsDbContext>();
        await dbContext.Database.MigrateAsync();

            // Auto-reconcile Agent wallet balances from approved transactions
            var agentsList = await dbContext.Agents.ToListAsync();
            var agentWalletsUpdated = false;
            foreach (var agent in agentsList)
            {
                var incomingSum = await dbContext.Transactions
                    .Where(t => t.RecipientType == RecipientType.Agent && t.RecipientId == agent.Id && t.TransactionType == FinancialTransactionType.Incoming && t.Status == FinancialTransactionStatus.Approved)
                    .SumAsync(t => (decimal?)t.Amount) ?? 0m;

                var debitSum = await dbContext.Transactions
                    .Where(t => t.RecipientType == RecipientType.Agent && t.RecipientId == agent.Id && t.TransactionType == FinancialTransactionType.WalletDebit && t.Status == FinancialTransactionStatus.Approved)
                    .SumAsync(t => (decimal?)t.Amount) ?? 0m;

                var expectedWallet = incomingSum - debitSum;
                if (expectedWallet > agent.Wallet)
                {
                    var diff = expectedWallet - agent.Wallet;
                    agent.CreditWallet(diff);
                    agentWalletsUpdated = true;
                }
            }
            if (agentWalletsUpdated)
            {
                await dbContext.SaveChangesAsync();
            }
    }
    catch (Exception ex)
    {
        var logger = app.Services.GetRequiredService<ILogger<Program>>();
        logger.LogError(ex, "An error occurred during database migration or startup sync.");
    }
}

app.UseMiddleware<TexasAccountsPortal.Api.Middleware.CorrelationIdMiddleware>();
app.UseStatusCodePages();
app.UseExceptionHandler(); // Returns ProblemDetails automatically in .NET 8/9

app.UseCors();
app.UseAuthentication();
app.UseAuthorization();

app.UseDefaultFiles();
app.UseStaticFiles();

app.MapControllers();
app.MapRealtimeHubs();
app.MapFallbackToFile("index.html");

// Health endpoints
app.MapHealthChecks("/health/live", new Microsoft.AspNetCore.Diagnostics.HealthChecks.HealthCheckOptions
{
    Predicate = _ => false
});
app.MapHealthChecks("/health/ready");
app.MapGet("/api/info", () => new { Portal = "Texas Accounts Portal API", Status = "Healthy", Version = "1.0.0" });



app.Run();

public partial class Program { }

using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace TexasAccountsPortal.Api.Middleware
{
    public class GlobalExceptionHandler : IExceptionHandler
    {
        private readonly ILogger<GlobalExceptionHandler> _logger;

        public GlobalExceptionHandler(ILogger<GlobalExceptionHandler> logger)
        {
            _logger = logger;
        }

        public async ValueTask<bool> TryHandleAsync(
            HttpContext httpContext,
            Exception exception,
            CancellationToken cancellationToken)
        {
            _logger.LogError(exception, "Exception handler caught: {Message}", exception.Message);

            var problemDetails = new ProblemDetails
            {
                Instance = httpContext.Request.Path
            };

            int statusCode = exception switch
            {
                ArgumentException => StatusCodes.Status400BadRequest,
                UnauthorizedAccessException => StatusCodes.Status401Unauthorized,
                KeyNotFoundException => StatusCodes.Status404NotFound,
                DbUpdateConcurrencyException => StatusCodes.Status409Conflict,
                InvalidOperationException ex when ex.Message.Contains("idempotency", StringComparison.OrdinalIgnoreCase) => StatusCodes.Status409Conflict,
                InvalidOperationException ex when ex.Message.Contains("Return Forbidden", StringComparison.OrdinalIgnoreCase) => StatusCodes.Status409Conflict,
                InvalidOperationException ex when ex.Message.Contains("duplicate request", StringComparison.OrdinalIgnoreCase) => StatusCodes.Status409Conflict,
                InvalidOperationException => StatusCodes.Status422UnprocessableEntity,
                HttpRequestException ex when ex.StatusCode.HasValue => (int)ex.StatusCode.Value,
                HttpRequestException => StatusCodes.Status502BadGateway,
                _ => StatusCodes.Status500InternalServerError
            };

            problemDetails.Status = statusCode;
            problemDetails.Title = statusCode switch
            {
                StatusCodes.Status400BadRequest => "Bad Request",
                StatusCodes.Status401Unauthorized => "Unauthorized",
                StatusCodes.Status404NotFound => "Not Found",
                StatusCodes.Status409Conflict => "Conflict",
                StatusCodes.Status422UnprocessableEntity => "Unprocessable Entity",
                StatusCodes.Status502BadGateway => "Bad Gateway",
                _ => "Internal Server Error"
            };

            // Security check: never expose internal exceptions/stacktraces to client
            problemDetails.Detail = (statusCode == StatusCodes.Status500InternalServerError && !(exception is HttpRequestException))
                ? "An unexpected error occurred. Please contact system support."
                : exception.Message;

            // Correlation ID propagation
            if (httpContext.Request.Headers.TryGetValue("X-Correlation-ID", out var correlationId))
            {
                problemDetails.Extensions["correlationId"] = correlationId.ToString();
            }

            httpContext.Response.StatusCode = statusCode;
            await httpContext.Response.WriteAsJsonAsync(problemDetails, cancellationToken);

            return true;
        }
    }
}

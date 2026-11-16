# Phase 5 Open Questions

1. **Password Hashing Compatibility**: Does the legacy database store passwords using standard Laravel BCrypt hashes? If yes, we should support BCrypt hash validation in ASP.NET Identity to permit user login and upgrade them to ASP.NET Identity hashes on first successful authentication.
2. **Readiness Timeout Limits**: What are the target timeout bounds for external service readiness checks?
3. **Migration Batch Sizing**: What are the target memory limits and batch sizing constraints for legacy imports (e.g. 500 records per batch)?

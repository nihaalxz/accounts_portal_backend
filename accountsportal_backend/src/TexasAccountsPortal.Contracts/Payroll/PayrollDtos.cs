using System;
using System.Collections.Generic;

namespace TexasAccountsPortal.Contracts.Payroll
{
    public record CreateSalaryProfileRequest(
        string PortalType, // "Account" | "Sales" | "Operational"
        long PortalUserId,
        string EmployeeCode,
        decimal BasicSalary,
        decimal DefaultMonthlyIncentive,
        string Currency,
        DateTime EffectiveFrom,
        string? Remarks
    );

    public record UpdateSalaryProfileRequest(
        decimal NewBasicSalary,
        decimal NewMonthlyIncentive,
        string Reason,
        DateTime EffectiveDate,
        string? Remarks
    );

    public record SalaryProfileResponse(
        long Id,
        string PortalType,
        long PortalUserId,
        string EmployeeName,
        string EmployeeEmail,
        string EmployeeCode,
        decimal BasicSalary,
        decimal DefaultMonthlyIncentive,
        string Currency,
        DateTime EffectiveFrom,
        DateTime? EffectiveTo,
        string Status,
        string? Remarks,
        DateTime CreatedAt,
        DateTime? UpdatedAt
    );

    public record SalaryRevisionResponse(
        long Id,
        long SalaryProfileId,
        decimal OldBasicSalary,
        decimal NewBasicSalary,
        decimal OldMonthlyIncentive,
        decimal NewMonthlyIncentive,
        string Reason,
        DateTime EffectiveDate,
        long ChangedBy,
        DateTime CreatedAt
    );

    public record CreateSalaryPaymentRequest(
        long SalaryProfileId,
        int PayrollMonth,
        int PayrollYear,
        decimal BasicSalary,
        decimal Incentive,
        decimal Bonus,
        decimal Allowance,
        decimal Deduction,
        string PaymentMethod, // "Cash Account" | "Bank Account"
        long? CashAccountId,
        long? BankAccountId,
        string? TransactionReference,
        DateTime PaymentDate,
        string Status, // "Pending" | "Paid"
        string? Remarks
    );

    public record UpdateSalaryPaymentStatusRequest(
        string Status, // "Paid" | "Cancelled"
        string? Remarks
    );

    public record SalaryPaymentResponse(
        long Id,
        long SalaryProfileId,
        string PortalType,
        long PortalUserId,
        string EmployeeName,
        string EmployeeCode,
        int PayrollMonth,
        int PayrollYear,
        decimal BasicSalary,
        decimal Incentive,
        decimal Bonus,
        decimal Allowance,
        decimal Deduction,
        decimal NetSalary,
        string PaymentMethod,
        long? CashAccountId,
        string? CashAccountName,
        long? BankAccountId,
        string? BankAccountName,
        string TransactionReference,
        DateTime PaymentDate,
        long PaidByUserId,
        string Status,
        string? Remarks,
        DateTime CreatedAt,
        DateTime? UpdatedAt
    );
    public record StaffUserLookupResponse(
        string PortalType,
        long PortalUserId,
        string Name,
        string Email,
        string? Role
    );
}
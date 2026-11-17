using System;
using System.Text.Json;
using TexasAccountsPortal.Contracts.SalesEntries;
using Xunit;

namespace TexasAccountsPortal.UnitTests
{
    public class TransportationAndVfsDeserializationTests
    {
        private static readonly JsonSerializerOptions JsonOptions = new JsonSerializerOptions
        {
            PropertyNameCaseInsensitive = true
        };

        [Fact]
        public void Test_Deserialize_Transportation_Detail_With_Null_Dates()
        {
            string json = @"
{
    ""isDealClosed"": false,
    ""operationClosed"": false,
    ""id"": 8,
    ""documentNumber"": ""TXSTRANS047099"",
    ""createdBy"": 8,
    ""headId"": 202,
    ""headName"": ""JIJO BINU"",
    ""clientType"": ""customer"",
    ""agent"": null,
    ""agentId"": null,
    ""prefix"": ""Mr."",
    ""name"": ""BINU"",
    ""careOf"": null,
    ""supplier"": ""Inhouse (Pending assignment)"",
    ""isInhouse"": true,
    ""supplierId"": null,
    ""supplierName"": ""Inhouse (Pending assignment)"",
    ""pickup"": ""TRANSPORTATION ALL OVER GCC"",
    ""drop"": ""BH-SA"",
    ""dropDate"": null,
    ""dropTime"": null,
    ""payableAmount"": 30.000,
    ""expectedSupplierCost"": 0.000,
    ""profit"": 30.000,
    ""paymentMethod"": ""credit"",
    ""bankId"": null,
    ""bankName"": null,
    ""vehicle"": null,
    ""paymentProof"": null,
    ""paymentStatus"": ""success"",
    ""processingStatus"": ""pending"",
    ""hasSalesReturn"": false,
    ""salesReturnAmount"": null,
    ""hasPurchaseReturn"": false,
    ""purchaseReturnAmount"": null,
    ""createdAt"": ""2026-11-09T00:27:43.7047254"",
    ""updatedAt"": null,
    ""passengers"": [
        {
            ""id"": 8,
            ""prefix"": ""Mr."",
            ""name"": ""BINU"",
            ""payableAmount"": 30.000,
            ""expectedSupplierCost"": 0.000,
            ""profit"": 0.000,
            ""isInhouse"": true,
            ""supplierId"": null,
            ""supplierName"": ""Inhouse (Pending assignment)""
        }
    ]
}";
            var result = JsonSerializer.Deserialize<TransportationDetailResponse>(json, JsonOptions);
            Assert.NotNull(result);
            Assert.Equal(8, result.Id);
            Assert.Null(result.DropDate);
            Assert.Null(result.DropTime);
            Assert.NotNull(result.Passengers);
            Assert.Single(result.Passengers);
        }

        [Fact]
        public void Test_Deserialize_Transportation_Detail_With_Populated_Dates_And_Time()
        {
            string json = @"
{
    ""id"": 9,
    ""dropDate"": ""2026-11-20T10:00:00Z"",
    ""dropTime"": ""14:30:00"",
    ""payableAmount"": 50.000
}";
            var result = JsonSerializer.Deserialize<TransportationDetailResponse>(json, JsonOptions);
            Assert.NotNull(result);
            Assert.Equal(9, result.Id);
            Assert.NotNull(result.DropDate);
            Assert.Equal("14:30:00", result.DropTime);
        }

        [Fact]
        public void Test_Deserialize_Vfs_Detail_With_Null_Dates()
        {
            string json = @"
{
    ""isDealClosed"": false,
    ""operationClosed"": false,
    ""id"": 1,
    ""documentNumber"": ""TXSVFS216451"",
    ""createdBy"": 8,
    ""headId"": 202,
    ""headName"": ""JIJO BINU"",
    ""clientType"": ""customer"",
    ""agent"": null,
    ""agentId"": null,
    ""prefix"": ""Mr."",
    ""name"": ""LISSY"",
    ""supplier"": ""Inhouse (Pending assignment)"",
    ""isInhouse"": false,
    ""supplierId"": null,
    ""supplierName"": null,
    ""country"": ""Saudi Arabia"",
    ""visaType"": ""Family"",
    ""payableAmount"": 100.000,
    ""expectedSupplierCost"": 76.040,
    ""profit"": 23.960,
    ""paymentMode"": ""credit"",
    ""bankId"": null,
    ""bankName"": null,
    ""paymentStatus"": ""success"",
    ""processingStatus"": ""completed"",
    ""appointmentDate"": null,
    ""appointmentTime"": null,
    ""vfsReceipt"": ""/uploads/verified_receipts/417a8b8e-6b1c-49f5-9ed0-0a5e46e1aa38.pdf"",
    ""passportCopy"": ""/uploads/vfs_documents/a5e31c72-1568-4a40-aade-51480156cf0a.pdf"",
    ""paymentProof"": null,
    ""hasSalesReturn"": false,
    ""salesReturnAmount"": null,
    ""hasPurchaseReturn"": false,
    ""purchaseReturnAmount"": null,
    ""createdAt"": ""2026-11-09T00:27:05.6227947"",
    ""updatedAt"": ""2026-11-11T19:11:05.4612561"",
    ""applicants"": [],
    ""govtFees"": [
        {
            ""id"": 6,
            ""rowKey"": ""b5c03301-6739-496c-b5b5-19236dd18eaa"",
            ""accountsPaymentId"": null,
            ""amount"": 76.040,
            ""description"": ""VFS Government Fee"",
            ""paymentReference"": null,
            ""status"": ""recorded"",
            ""paymentProof"": null,
            ""supplierId"": 1,
            ""supplierName"": ""STC - GEETHESH"",
            ""createdAt"": ""2026-11-11T19:10:45.6492148""
        }
    ]
}";
            var result = JsonSerializer.Deserialize<VfsAppointmentDetailResponse>(json, JsonOptions);
            Assert.NotNull(result);
            Assert.Equal(1, result.Id);
            Assert.Null(result.AppointmentDate);
            Assert.Null(result.AppointmentTime);
            Assert.NotNull(result.GovtFees);
            Assert.Single(result.GovtFees);
            Assert.Equal(76.040m, result.GovtFees[0].Amount);
        }

        [Fact]
        public void Test_Deserialize_Vfs_Detail_With_Populated_Dates_And_Time()
        {
            string json = @"
{
    ""id"": 2,
    ""appointmentDate"": ""2026-11-25T09:00:00Z"",
    ""appointmentTime"": ""11:15:00"",
    ""payableAmount"": 150.000
}";
            var result = JsonSerializer.Deserialize<VfsAppointmentDetailResponse>(json, JsonOptions);
            Assert.NotNull(result);
            Assert.Equal(2, result.Id);
            Assert.NotNull(result.AppointmentDate);
            Assert.Equal("11:15:00", result.AppointmentTime);
        }
    }
}

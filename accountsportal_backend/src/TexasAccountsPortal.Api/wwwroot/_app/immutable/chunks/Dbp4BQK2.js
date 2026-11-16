import { t as apiFetch } from "./sTyO2BqP.js";
//#region src/features/suppliers/api.ts
/**
* Suppliers Feature API client.
* Calls backend endpoints via centralized apiFetch.
*/
async function getSuppliers(signal) {
	return apiFetch("/api/Supplier", { signal });
}
async function getSupplierPayments(options = {}, signal) {
	return apiFetch("/api/supplier-payments", {
		params: options,
		signal
	});
}
async function createSupplierPayment(data, idempotencyKey, signal) {
	return apiFetch("/api/supplier-payments", {
		method: "POST",
		body: JSON.stringify(data),
		idempotencyKey,
		signal
	});
}
async function updateSupplierPayment(id, data, signal) {
	return apiFetch(`/api/supplier-payments/${id}`, {
		method: "PUT",
		body: JSON.stringify(data),
		signal
	});
}
async function approveSupplierPayment(id, rowVersion, signal) {
	const headers = {};
	if (rowVersion) headers["Row-Version"] = rowVersion;
	return apiFetch(`/api/supplier-payments/${id}/approve`, {
		method: "POST",
		headers,
		signal
	});
}
async function rejectSupplierPayment(id, reason, signal) {
	return apiFetch(`/api/supplier-payments/${id}/reject`, {
		method: "POST",
		body: JSON.stringify({ reason }),
		signal
	});
}
async function getPurchaseReturns(options = {}, signal) {
	return apiFetch("/api/purchase-returns", {
		params: options,
		signal
	});
}
async function createPurchaseReturn(data, idempotencyKey, signal) {
	return apiFetch("/api/purchase-returns", {
		method: "POST",
		body: JSON.stringify(data),
		idempotencyKey,
		signal
	});
}
async function approvePurchaseReturn(id, rowVersion, signal) {
	const headers = {};
	if (rowVersion) headers["Row-Version"] = rowVersion;
	return apiFetch(`/api/purchase-returns/${id}/approve`, {
		method: "POST",
		headers,
		signal
	});
}
async function rejectPurchaseReturn(id, reason, signal) {
	return apiFetch(`/api/purchase-returns/${id}/reject`, {
		method: "POST",
		body: JSON.stringify({ reason }),
		signal
	});
}
async function getSalesReturns(options = {}, signal) {
	return apiFetch("/api/sales-returns", {
		params: options,
		signal
	});
}
async function createSalesReturn(data, idempotencyKey, signal) {
	return apiFetch("/api/sales-returns", {
		method: "POST",
		body: JSON.stringify(data),
		idempotencyKey,
		signal
	});
}
async function approveSalesReturn(id, rowVersion, signal) {
	const headers = {};
	if (rowVersion) headers["Row-Version"] = rowVersion;
	return apiFetch(`/api/sales-returns/${id}/approve`, {
		method: "POST",
		headers,
		signal
	});
}
async function rejectSalesReturn(id, reason, signal) {
	return apiFetch(`/api/sales-returns/${id}/reject`, {
		method: "POST",
		body: JSON.stringify({ reason }),
		signal
	});
}
async function getSupplierStatement(supplierId, options = {}, signal) {
	const params = {
		page: options.page || 1,
		pageSize: options.pageSize || 20
	};
	if (options.startDate) params.startDate = options.startDate;
	if (options.endDate) params.endDate = options.endDate;
	return apiFetch(`/api/reconciliation/supplier-statement/${supplierId}`, {
		params,
		signal
	});
}
async function updateBookingProcessingStatus(serviceType, id, status, signal) {
	return apiFetch(`/api/sales-entries/${encodeURIComponent(serviceType)}/${id}/processing-status`, {
		method: "POST",
		body: JSON.stringify({ status }),
		signal
	});
}
async function updateBookingOperationClosed(serviceType, id, operationClosed, signal) {
	return apiFetch(`/api/sales-entries/${encodeURIComponent(serviceType)}/${id}/operation-closed`, {
		method: "POST",
		body: JSON.stringify({ operationClosed }),
		signal
	});
}
//#endregion
export { updateSupplierPayment as _, createSalesReturn as a, getSalesReturns as c, getSuppliers as d, rejectPurchaseReturn as f, updateBookingProcessingStatus as g, updateBookingOperationClosed as h, createPurchaseReturn as i, getSupplierPayments as l, rejectSupplierPayment as m, approveSalesReturn as n, createSupplierPayment as o, rejectSalesReturn as p, approveSupplierPayment as r, getPurchaseReturns as s, approvePurchaseReturn as t, getSupplierStatement as u };

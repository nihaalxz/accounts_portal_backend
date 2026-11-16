import { t as apiFetch } from "./DKlIje0U.js";
//#region src/features/financial-transactions/api.ts
/**
* Financial transaction API service.
* Uses the centralized Phase 1 apiFetch client.
* All requests go through the established API boundary.
*/
/**
* Fetches the financial transaction list.
* GET /api/transaction
*
* @param query - Filter, pagination params (all optional)
* @param signal - AbortSignal for request cancellation on navigation/filter change
*/
async function getTransactions(query = {}, signal) {
	const params = new URLSearchParams();
	if (query.status) params.set("status", query.status);
	if (query.type) params.set("type", query.type);
	if (query.referenceType) params.set("referenceType", query.referenceType);
	if (query.referenceId) params.set("referenceId", query.referenceId);
	if (query.bankId) params.set("bankId", String(query.bankId));
	if (query.accountId) params.set("accountId", String(query.accountId));
	if (query.search) params.set("search", query.search);
	if (query.page && query.page > 1) params.set("page", String(query.page));
	if (query.pageSize && query.pageSize !== 20) params.set("pageSize", String(query.pageSize));
	const qs = params.toString();
	return apiFetch(`/api/transaction${qs ? `?${qs}` : ""}`, { signal });
}
/**
* Fetches a single financial transaction by ID.
* GET /api/transaction/{id}
*/
async function getTransactionById(id, signal) {
	return apiFetch(`/api/transaction/${id}`, { signal });
}
/**
* Creates a contra (internal transfer) transaction.
* POST /api/transaction/contra
* Requires Idempotency-Key header.
*/
async function createContraTransaction(request, idempotencyKey, signal) {
	return apiFetch("/api/transaction/contra", {
		method: "POST",
		body: JSON.stringify(request),
		headers: { "Idempotency-Key": idempotencyKey },
		signal
	});
}
/**
* Approves a pending financial transaction.
* POST /api/transaction/{id}/approve
* Requires RequireMasterAccountant policy.
*/
async function approveTransaction(id, signal) {
	return apiFetch(`/api/transaction/${id}/approve`, {
		method: "POST",
		signal
	});
}
/**
* Rejects a pending financial transaction.
* POST /api/transaction/{id}/reject
* Requires RequireMasterAccountant policy.
*/
async function rejectTransaction(id, request, signal) {
	return apiFetch(`/api/transaction/${id}/reject`, {
		method: "POST",
		body: JSON.stringify(request),
		signal
	});
}
//#endregion
export { rejectTransaction as a, getTransactions as i, createContraTransaction as n, getTransactionById as r, approveTransaction as t };

import { t as apiFetch } from "./DASSzyb4.js";
//#region src/features/cash-accounts/api.ts
/**
* Cash Account API service.
* Uses centralized Phase 1 apiFetch client.
*/
/**
* Fetches all accounts.
* GET /api/account (RequireAccountant)
* Returns all accounts ordered by name — no pagination.
*/
async function getAccounts(signal) {
	return apiFetch("/api/account", { signal });
}
/**
* Creates a new account.
* POST /api/account (RequireMasterAccountant)
*/
async function createAccount(request, signal) {
	return apiFetch("/api/account", {
		method: "POST",
		body: JSON.stringify(request),
		signal
	});
}
/**
* Updates an existing account.
* PUT /api/account/{id} (RequireMasterAccountant)
*/
async function updateAccount(id, request, signal) {
	await apiFetch(`/api/account/${id}`, {
		method: "PUT",
		body: JSON.stringify(request),
		signal
	});
}
/**
* Toggles the active/inactive status of an account.
* POST /api/account/{id}/toggle-status (RequireMasterAccountant)
*/
async function toggleAccountStatus(id, signal) {
	return apiFetch(`/api/account/${id}/toggle-status`, {
		method: "POST",
		signal
	});
}
/**
* Applies a balance correction to an account.
* POST /api/account/{id}/correct-balance (RequireMasterAccountant)
* Requires Idempotency-Key header for safe retry behavior.
*/
async function correctAccountBalance(id, request, idempotencyKey, signal) {
	return apiFetch(`/api/account/${id}/correct-balance`, {
		method: "POST",
		body: JSON.stringify(request),
		headers: { "Idempotency-Key": idempotencyKey },
		signal
	});
}
//#endregion
export { updateAccount as a, toggleAccountStatus as i, createAccount as n, getAccounts as r, correctAccountBalance as t };

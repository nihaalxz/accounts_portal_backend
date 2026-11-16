import { t as apiFetch } from "./BEq-SHzq.js";
//#region src/features/bank-accounts/api.ts
/**
* Bank Account API service.
* Uses centralized Phase 1 apiFetch client.
*/
/**
* Fetches all bank accounts.
* GET /api/bank (RequireAccountant)
* Returns all banks ordered by name — no pagination.
*/
async function getBanks(signal) {
	return apiFetch("/api/bank", { signal });
}
/**
* Creates a new bank account.
* POST /api/bank (RequireMasterAccountant)
* Returns 409 if AccountNumber is already registered.
*/
async function createBank(request, signal) {
	return apiFetch("/api/bank", {
		method: "POST",
		body: JSON.stringify(request),
		signal
	});
}
/**
* Updates an existing bank account's name and account number.
* PUT /api/bank/{id} (RequireMasterAccountant)
* Returns 409 if the new AccountNumber is already used by another bank.
*/
async function updateBank(id, request, signal) {
	await apiFetch(`/api/bank/${id}`, {
		method: "PUT",
		body: JSON.stringify(request),
		signal
	});
}
/**
* Toggles the active/inactive status of a bank account.
* POST /api/bank/{id}/toggle-status (RequireMasterAccountant)
*/
async function toggleBankStatus(id, signal) {
	return apiFetch(`/api/bank/${id}/toggle-status`, {
		method: "POST",
		signal
	});
}
//#endregion
export { updateBank as i, getBanks as n, toggleBankStatus as r, createBank as t };

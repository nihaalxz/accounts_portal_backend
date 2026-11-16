import { t as apiFetch } from "./DFpxn_Ez.js";
//#region src/features/chart-of-accounts/api.ts
/**
* Chart of Accounts API client.
* All calls use centralized apiFetch — no raw fetch allowed.
*/
var BASE = "/api/chartofaccounts";
/** GET /api/chartofaccounts — returns full flat list */
async function getChartOfAccounts(signal) {
	return apiFetch(BASE, { signal });
}
/** GET /api/chartofaccounts/{id} */
async function getChartOfAccountById(id, signal) {
	return apiFetch(`${BASE}/${id}`, { signal });
}
/** POST /api/chartofaccounts — RequireMasterAccountant */
async function createChartOfAccount(data, signal) {
	return apiFetch(BASE, {
		method: "POST",
		body: JSON.stringify(data),
		signal
	});
}
/** PUT /api/chartofaccounts/{id} — RequireMasterAccountant */
async function updateChartOfAccount(id, data, signal) {
	return apiFetch(`${BASE}/${id}`, {
		method: "PUT",
		body: JSON.stringify(data),
		signal
	});
}
/** DELETE /api/chartofaccounts/{id} — RequireMasterAccountant */
async function deleteChartOfAccount(id, signal) {
	return apiFetch(`${BASE}/${id}`, {
		method: "DELETE",
		signal
	});
}
/** POST /api/chartofaccounts/seed — RequireMasterAccountant */
async function seedSystemAccounts(signal) {
	return apiFetch(`${BASE}/seed`, {
		method: "POST",
		signal
	});
}
//#endregion
export { seedSystemAccounts as a, getChartOfAccounts as i, deleteChartOfAccount as n, updateChartOfAccount as o, getChartOfAccountById as r, createChartOfAccount as t };

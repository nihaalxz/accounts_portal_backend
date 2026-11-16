import { t as apiFetch } from "./DsyX7mrL.js";
//#region src/features/expenses/api.ts
var BASE = "/api/expenses";
/** GET /api/expenses/headers */
async function getExpenseHeaders(signal) {
	return apiFetch(`${BASE}/headers`, { signal });
}
/** POST /api/expenses/headers — RequireMasterAccountant */
async function createExpenseHeader(data, signal) {
	return apiFetch(`${BASE}/headers`, {
		method: "POST",
		body: JSON.stringify(data),
		signal
	});
}
/** GET /api/expenses/summary */
async function getExpenseSummary(signal) {
	return apiFetch(`${BASE}/summary`, { signal });
}
/** GET /api/expenses */
async function getExpenses(signal) {
	return apiFetch(BASE, { signal });
}
/** GET /api/expenses/{id} */
async function getExpenseById(id, signal) {
	return apiFetch(`${BASE}/${id}`, { signal });
}
/** POST /api/expenses — RequireAccountant */
async function createExpense(data, signal) {
	return apiFetch(BASE, {
		method: "POST",
		body: JSON.stringify(data),
		signal
	});
}
/** POST /api/expenses/{id}/submit — RequireAccountant */
async function submitExpense(id, signal) {
	return apiFetch(`${BASE}/${id}/submit`, {
		method: "POST",
		signal
	});
}
/** POST /api/expenses/{id}/approve — RequireMasterAccountant */
async function approveExpense(id, idempotencyKey, rowVersion, signal) {
	const headers = { "Idempotency-Key": idempotencyKey || `ApproveExpense_${id}_${Date.now()}` };
	if (rowVersion) headers["Row-Version"] = rowVersion;
	return apiFetch(`${BASE}/${id}/approve`, {
		method: "POST",
		headers,
		signal
	});
}
/** POST /api/expenses/{id}/reject — RequireMasterAccountant */
async function rejectExpense(id, data, signal) {
	return apiFetch(`${BASE}/${id}/reject`, {
		method: "POST",
		body: JSON.stringify(data),
		signal
	});
}
/** POST /api/expenses/{id}/cancel — RequireAccountant */
async function cancelExpense(id, signal) {
	return apiFetch(`${BASE}/${id}/cancel`, {
		method: "POST",
		signal
	});
}
//#endregion
export { getExpenseById as a, getExpenses as c, createExpenseHeader as i, rejectExpense as l, cancelExpense as n, getExpenseHeaders as o, createExpense as r, getExpenseSummary as s, approveExpense as t, submitExpense as u };

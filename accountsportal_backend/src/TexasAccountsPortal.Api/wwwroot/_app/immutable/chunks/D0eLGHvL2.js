import { t as apiFetch } from "./bkNoIgos.js";
//#region src/features/journal-entries/api.ts
/**
* Journal Entries API client.
* Uses centralized apiFetch.
*/
var BASE = "/api/journalentries";
/** GET /api/journalentries */
async function getJournalEntries(signal) {
	return apiFetch(BASE, { signal });
}
/** GET /api/journalentries/{id} */
async function getJournalEntryById(id, signal) {
	return apiFetch(`${BASE}/${id}`, { signal });
}
/** POST /api/journalentries — RequireAccountant */
async function createJournalEntry(data, signal) {
	return apiFetch(BASE, {
		method: "POST",
		body: JSON.stringify(data),
		signal
	});
}
/** POST /api/journalentries/{id}/approve — RequireMasterAccountant */
async function approveJournalEntry(id, idempotencyKey, rowVersion, signal) {
	const headers = { "Idempotency-Key": idempotencyKey };
	if (rowVersion) headers["Row-Version"] = rowVersion;
	return apiFetch(`${BASE}/${id}/approve`, {
		method: "POST",
		headers,
		signal
	});
}
/** POST /api/journalentries/{id}/reject — RequireMasterAccountant */
async function rejectJournalEntry(id, signal) {
	return apiFetch(`${BASE}/${id}/reject`, {
		method: "POST",
		signal
	});
}
//#endregion
export { rejectJournalEntry as a, getJournalEntryById as i, createJournalEntry as n, getJournalEntries as r, approveJournalEntry as t };

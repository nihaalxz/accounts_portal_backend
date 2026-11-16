import { t as apiFetch } from "./BqfDFeIq.js";
//#region src/features/users/api.ts
async function getUsers() {
	return apiFetch("api/users");
}
async function createUser(data) {
	return apiFetch("api/users", {
		method: "POST",
		body: JSON.stringify(data)
	});
}
async function updateUser(id, data) {
	return apiFetch(`api/users/${id}`, {
		method: "PUT",
		body: JSON.stringify(data)
	});
}
async function toggleUserStatus(id, portal, isActive) {
	return apiFetch(`api/users/${id}/status?portal=${encodeURIComponent(portal)}`, {
		method: "PUT",
		body: JSON.stringify({ isActive })
	});
}
async function resetUserPassword(id, portal, newPassword) {
	return apiFetch(`api/users/${id}/password?portal=${encodeURIComponent(portal)}`, {
		method: "PUT",
		body: JSON.stringify({ newPassword })
	});
}
//#endregion
export { updateUser as a, toggleUserStatus as i, getUsers as n, resetUserPassword as r, createUser as t };

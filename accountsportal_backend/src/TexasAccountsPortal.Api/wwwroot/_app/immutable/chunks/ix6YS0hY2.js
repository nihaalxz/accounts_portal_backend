import { t as apiFetch } from "./B-IBN2VD.js";
//#region src/features/staffs/api/staffs-api.ts
async function fetchAccountsStaff() {
	return await apiFetch("api/staffs/accounts") || [];
}
async function fetchSalesStaff() {
	return await apiFetch("api/staffs/sales") || [];
}
async function fetchOperationalStaff() {
	return await apiFetch("api/staffs/operational") || [];
}
async function createAccountsStaff(data) {
	return await apiFetch("api/staffs/accounts", {
		method: "POST",
		body: JSON.stringify(data)
	});
}
async function createSalesStaff(data) {
	return await apiFetch("api/staffs/sales", {
		method: "POST",
		body: JSON.stringify(data)
	});
}
async function createOperationalStaff(data) {
	return await apiFetch("api/staffs/operational", {
		method: "POST",
		body: JSON.stringify(data)
	});
}
async function updateOperationalPermissions(data) {
	return await apiFetch("api/staffs/operational/permissions", {
		method: "PUT",
		body: JSON.stringify(data)
	});
}
async function updateStaffEmail(portal, id, newEmail) {
	return await apiFetch(`api/staffs/${portal}/${id}/email`, {
		method: "PUT",
		body: JSON.stringify({ newEmail })
	});
}
async function fetchWorkloadLimits() {
	return await apiFetch("api/staffs/workload-limits") || [];
}
async function updateWorkloadLimits(limits) {
	return await apiFetch("api/staffs/workload-limits", {
		method: "PUT",
		body: JSON.stringify({ limits })
	});
}
async function updateSalesmanTargets(id, monthlyTarget, profitTarget) {
	return await apiFetch(`api/staffs/sales/${id}/targets`, {
		method: "PUT",
		body: JSON.stringify({
			monthlyTarget,
			profitTarget
		})
	});
}
//#endregion
export { fetchOperationalStaff as a, updateOperationalPermissions as c, updateWorkloadLimits as d, fetchAccountsStaff as i, updateSalesmanTargets as l, createOperationalStaff as n, fetchSalesStaff as o, createSalesStaff as r, fetchWorkloadLimits as s, createAccountsStaff as t, updateStaffEmail as u };

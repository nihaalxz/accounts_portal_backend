import { t as apiFetch } from "./52Q8iY_S.js";
//#region src/features/payroll/services/payroll-api.ts
async function getAllStaffUsers(signal) {
	const userMap = /* @__PURE__ */ new Map();
	const addUser = (u, defaultType) => {
		if (!u) return;
		const rawId = u.portalUserId ?? u.id ?? u.Id;
		if (rawId === void 0 || rawId === null) return;
		const id = Number(rawId);
		if (isNaN(id)) return;
		let pType = defaultType;
		const rawPortal = String(u.portalType || u.PortalType || "").toLowerCase();
		if (rawPortal.includes("sale")) pType = "Sales";
		else if (rawPortal.includes("op")) pType = "Operational";
		else if (rawPortal.includes("account")) pType = "Account";
		const key = `${pType.toLowerCase()}_${id}`;
		if (!userMap.has(key)) userMap.set(key, {
			portalUserId: id,
			portalType: pType,
			name: u.name || u.Name || `Staff #${id}`,
			email: u.email || u.Email || "",
			userType: u.userType || u.role || u.Role || pType
		});
	};
	try {
		const [accRes, salesRes, opsRes] = await Promise.allSettled([
			apiFetch("api/staffs/accounts", { signal }),
			apiFetch("api/staffs/sales", { signal }),
			apiFetch("api/staffs/operational", { signal })
		]);
		if (accRes.status === "fulfilled" && Array.isArray(accRes.value)) accRes.value.forEach((u) => addUser(u, "Account"));
		if (salesRes.status === "fulfilled" && Array.isArray(salesRes.value)) salesRes.value.forEach((u) => addUser(u, "Sales"));
		if (opsRes.status === "fulfilled" && Array.isArray(opsRes.value)) opsRes.value.forEach((u) => addUser(u, "Operational"));
	} catch (err) {
		console.error("Error fetching staff users:", err);
	}
	return Array.from(userMap.values());
}
async function getSalaryProfiles(portalType, status, signal) {
	const params = new URLSearchParams();
	if (portalType) params.append("portalType", portalType);
	if (status) params.append("status", status);
	return apiFetch(`api/Payroll/profiles${params.toString() ? `?${params.toString()}` : ""}`, { signal });
}
async function createSalaryProfile(payload, signal) {
	return apiFetch("api/Payroll/profiles", {
		method: "POST",
		body: JSON.stringify(payload),
		signal
	});
}
async function updateSalaryProfile(id, payload, signal) {
	return apiFetch(`api/Payroll/profiles/${id}`, {
		method: "PUT",
		body: JSON.stringify(payload),
		signal
	});
}
async function getSalaryRevisions(id, signal) {
	return apiFetch(`api/Payroll/profiles/${id}/revisions`, { signal });
}
async function getSalaryPayments(status, month, year, portalType, signal) {
	const params = new URLSearchParams();
	if (status) params.append("status", status);
	if (month) params.append("month", month.toString());
	if (year) params.append("year", year.toString());
	if (portalType) params.append("portalType", portalType);
	return apiFetch(`api/Payroll/payments${params.toString() ? `?${params.toString()}` : ""}`, { signal });
}
async function createSalaryPayment(payload, signal) {
	return apiFetch("api/Payroll/payments", {
		method: "POST",
		body: JSON.stringify(payload),
		signal
	});
}
async function updateSalaryPaymentStatus(id, payload, signal) {
	return apiFetch(`api/Payroll/payments/${id}/status`, {
		method: "PUT",
		body: JSON.stringify(payload),
		signal
	});
}
//#endregion
export { getSalaryProfiles as a, updateSalaryProfile as c, getSalaryPayments as i, createSalaryProfile as n, getSalaryRevisions as o, getAllStaffUsers as r, updateSalaryPaymentStatus as s, createSalaryPayment as t };

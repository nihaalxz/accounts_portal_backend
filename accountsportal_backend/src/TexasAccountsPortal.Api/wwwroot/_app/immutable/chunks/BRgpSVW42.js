import { l as SALES_PORTAL_API_URL, o as BACKEND_API_URL } from "./DFpxn_Ez.js";
//#region src/lib/utils/preview-document.ts
/**
* Universal document preview and print helper.
* Generates a server-side rendered PDF with logo and opens it in a new tab for native preview & printing.
*/
async function previewDocument(category, type, idOrFilters, filters) {
	const cleanType = String(type || "").trim().toLowerCase().replace(/_/g, "-");
	let endpoint = "";
	let params = {};
	let baseUrl = "";
	if (category === "quotation" || cleanType.includes("quotation")) {
		baseUrl = BACKEND_API_URL || "http://localhost:5028";
		endpoint = `/api/sales-entries/quotations/${typeof idOrFilters === "number" || typeof idOrFilters === "string" ? idOrFilters : filters?.id || ""}/pdf`;
	} else if (cleanType.includes("accounts-receipt")) {
		baseUrl = BACKEND_API_URL || "http://localhost:5028";
		if (category === "list" || category === "report") {
			endpoint = `/api/documents/list/accounts-receipt`;
			params = idOrFilters || filters || {};
		} else endpoint = `/api/documents/receipt/${typeof idOrFilters === "number" || typeof idOrFilters === "string" ? idOrFilters : filters?.id || ""}`;
	} else if (category === "invoice" || category === "receipt") {
		baseUrl = SALES_PORTAL_API_URL || "http://localhost:5003";
		let normalizedType = cleanType;
		if (cleanType.includes("flight")) normalizedType = "flight";
		else if (cleanType.includes("hotel")) normalizedType = "hotel";
		else if (cleanType.includes("visa")) normalizedType = "visa";
		else if (cleanType.includes("vfs")) normalizedType = "vfs";
		else if (cleanType.includes("holiday")) normalizedType = "holiday";
		else if (cleanType.includes("transport")) normalizedType = "transport";
		else if (cleanType.includes("other")) normalizedType = "other";
		else if (cleanType.includes("receipt")) normalizedType = "receipt";
		endpoint = `/api/documents/invoice/${normalizedType}/${idOrFilters}`;
	} else if (category === "list") {
		baseUrl = SALES_PORTAL_API_URL || "http://localhost:5003";
		let normalizedType = cleanType;
		if (cleanType.includes("flight")) normalizedType = "flight";
		else if (cleanType.includes("hotel")) normalizedType = "hotel";
		else if (cleanType.includes("visa")) normalizedType = "visa";
		else if (cleanType.includes("vfs")) normalizedType = "vfs";
		else if (cleanType.includes("holiday")) normalizedType = "holiday";
		else if (cleanType.includes("transport")) normalizedType = "transport";
		else if (cleanType.includes("other")) normalizedType = "other";
		else if (cleanType.includes("receipt")) normalizedType = "receipt";
		else if (cleanType.includes("ledger")) normalizedType = "ledger";
		endpoint = `/api/documents/list/${normalizedType}`;
		params = idOrFilters || filters || {};
	} else {
		baseUrl = BACKEND_API_URL || "http://localhost:5028";
		let normalizedType = cleanType;
		if (cleanType.includes("bank")) normalizedType = "bank-statement";
		else if (cleanType.includes("account") && !cleanType.includes("salesman")) normalizedType = "account-statement";
		else if (cleanType.includes("sales-ledger") || cleanType.includes("customer-ledger") || cleanType === "ledger") normalizedType = "sales-ledger";
		else if (cleanType.includes("supplier")) normalizedType = "supplier-statement";
		else if (cleanType.includes("salesmen-summary") || cleanType.includes("salesman-summary")) normalizedType = "salesmen-summary";
		else if (cleanType.includes("salesman-detail")) normalizedType = "salesman-detail";
		else if (cleanType.includes("payment") || cleanType.includes("expense")) normalizedType = "payments";
		else if (cleanType.includes("transaction") || cleanType.includes("return")) normalizedType = "transactions";
		else if (cleanType.includes("approval") || cleanType.includes("pending")) normalizedType = "pending-approvals";
		endpoint = `/api/documents/report/${normalizedType}`;
		if (typeof idOrFilters === "number" || typeof idOrFilters === "string") params = {
			entityId: idOrFilters,
			...filters || {}
		};
		else params = idOrFilters || filters || {};
	}
	const targetUrl = new URL(endpoint.startsWith("/") ? endpoint.slice(1) : endpoint, baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`);
	if (params) Object.entries(params).forEach(([k, v]) => {
		if (v !== void 0 && v !== null && v !== "") targetUrl.searchParams.append(k, String(v));
	});
	window.open(targetUrl.toString(), "_blank");
}
//#endregion
export { previewDocument as t };

import { l as SALES_PORTAL_API_URL, n as apiFetchBlob, o as BACKEND_API_URL } from "./Cxdu26YR.js";
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
	} else if (category === "invoice") {
		baseUrl = SALES_PORTAL_API_URL || "http://localhost:5003";
		let normalizedType = cleanType;
		if (cleanType.includes("flight")) normalizedType = "flight";
		else if (cleanType.includes("hotel")) normalizedType = "hotel";
		else if (cleanType.includes("visa")) normalizedType = "visa";
		else if (cleanType.includes("vfs")) normalizedType = "vfs";
		else if (cleanType.includes("holiday")) normalizedType = "holiday";
		else if (cleanType.includes("transport")) normalizedType = "transport";
		else if (cleanType.includes("other")) normalizedType = "other";
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
	const newWindow = typeof window !== "undefined" ? window.open("about:blank", "_blank") : null;
	if (newWindow) newWindow.document.write("<div style=\"display:flex;align-items:center;justify-content:center;height:100vh;font-family:system-ui,-apple-system,sans-serif;color:#475569;\"><p>Loading PDF preview...</p></div>");
	try {
		const blob = await apiFetchBlob(endpoint, {
			baseUrl,
			params
		});
		const url = URL.createObjectURL(blob);
		if (newWindow) newWindow.location.href = url;
		else window.open(url, "_blank");
	} catch (err) {
		console.warn("apiFetchBlob failed, attempting direct window navigation fallback:", err);
		try {
			const targetUrl = new URL(endpoint.startsWith("/") ? endpoint.slice(1) : endpoint, baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`);
			if (params) Object.entries(params).forEach(([k, v]) => {
				if (v !== void 0 && v !== null && v !== "") targetUrl.searchParams.append(k, String(v));
			});
			if (newWindow) newWindow.location.href = targetUrl.toString();
			else window.open(targetUrl.toString(), "_blank");
		} catch {
			if (newWindow) newWindow.close();
			alert(err?.message || "Failed to generate server PDF. Please try again.");
		}
	}
}
//#endregion
export { previewDocument as t };

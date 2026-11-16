import { l as SALES_PORTAL_API_URL, n as apiFetchBlob, o as BACKEND_API_URL } from "./CriQ4IaT.js";
//#region src/lib/utils/preview-document.ts
/**
* Universal document preview and print helper.
* Generates a server-side rendered PDF with logo and opens it in a new tab for native preview & printing.
*/
async function previewDocument(category, type, idOrFilters, filters) {
	const cleanType = String(type || "").trim().toLowerCase().replace(/-/g, "_");
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
	let endpoint = "";
	let params = {};
	const baseUrl = category === "report" ? BACKEND_API_URL || "http://localhost:5028" : SALES_PORTAL_API_URL || "http://localhost:5003";
	if (category === "invoice") endpoint = `/api/documents/invoice/${normalizedType}/${idOrFilters}`;
	else if (category === "list") {
		endpoint = `/api/documents/list/${normalizedType}`;
		params = idOrFilters || filters || {};
	} else if (category === "report") {
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

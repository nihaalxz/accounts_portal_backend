import { l as SALES_PORTAL_API_URL, n as apiFetchBlob, o as BACKEND_API_URL } from "./BWwmg3nB.js";
//#region src/lib/utils/preview-document.ts
/**
* Universal document preview and print helper.
* Generates a server-side rendered PDF with logo and opens it in a new tab for native preview & printing.
*/
async function previewDocument(category, type, idOrFilters, filters) {
	let endpoint = "";
	let params = {};
	const baseUrl = category === "report" ? BACKEND_API_URL || "http://localhost:5028" : SALES_PORTAL_API_URL || "http://localhost:5003";
	if (category === "invoice") endpoint = `/api/documents/invoice/${type}/${idOrFilters}`;
	else if (category === "list") {
		endpoint = `/api/documents/list/${type}`;
		params = idOrFilters || filters || {};
	} else if (category === "report") {
		endpoint = `/api/documents/report/${type}`;
		if (typeof idOrFilters === "number" || typeof idOrFilters === "string") params = {
			entityId: idOrFilters,
			...filters || {}
		};
		else params = idOrFilters || filters || {};
	}
	try {
		const blob = await apiFetchBlob(endpoint, {
			baseUrl,
			params
		});
		const url = URL.createObjectURL(blob);
		window.open(url, "_blank");
	} catch (err) {
		console.warn("apiFetchBlob failed, attempting direct window navigation fallback:", err);
		try {
			const targetUrl = new URL(endpoint.startsWith("/") ? endpoint.slice(1) : endpoint, baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`);
			if (params) Object.entries(params).forEach(([k, v]) => {
				if (v !== void 0 && v !== null && v !== "") targetUrl.searchParams.append(k, String(v));
			});
			window.open(targetUrl.toString(), "_blank");
		} catch {
			alert(err?.message || "Failed to generate server PDF. Please try again.");
		}
	}
}
//#endregion
export { previewDocument as t };

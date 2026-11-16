import { l as SALES_PORTAL_API_URL, n as apiFetchBlob, o as BACKEND_API_URL } from "./C9vpfqQs.js";
//#region src/lib/utils/preview-document.ts
/**
* Universal document preview and print helper.
* Generates a server-side rendered PDF with logo and opens it in a new tab for native preview & printing.
*/
async function previewDocument(category, type, idOrFilters, filters) {
	try {
		let endpoint = "";
		let params = {};
		let baseUrl = category === "report" ? BACKEND_API_URL || "http://localhost:5028" : SALES_PORTAL_API_URL || "http://localhost:5003";
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
		const blob = await apiFetchBlob(endpoint, {
			baseUrl,
			params
		});
		const url = URL.createObjectURL(blob);
		window.open(url, "_blank");
	} catch (err) {
		console.error("Failed to preview document PDF:", err);
		alert(err?.message || "Failed to generate server PDF. Please try again.");
	}
}
//#endregion
export { previewDocument as t };

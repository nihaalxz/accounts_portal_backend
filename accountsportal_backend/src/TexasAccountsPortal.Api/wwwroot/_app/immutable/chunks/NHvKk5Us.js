import { n as apiFetchBlob, o as BACKEND_API_URL, t as apiFetch } from "./DcaPeLUs.js";
//#region src/features/sales/api/quotations.ts
async function getQuotations(params = {}, signal) {
	const q = new URLSearchParams();
	if (params.page) q.append("page", params.page.toString());
	if (params.pageSize) q.append("pageSize", params.pageSize.toString());
	if (params.search) q.append("search", params.search);
	if (params.clientType && params.clientType !== "all") q.append("clientType", params.clientType);
	if (params.status && params.status !== "all") q.append("status", params.status);
	if (params.salesmanId) q.append("salesmanId", params.salesmanId.toString());
	if (params.startDate) q.append("startDate", params.startDate);
	if (params.endDate) q.append("endDate", params.endDate);
	const qs = q.toString();
	return apiFetch(`api/sales-entries/quotations${qs ? "?" + qs : ""}`, { signal });
}
async function getQuotationById(idOrDoc, signal) {
	return apiFetch(`api/sales-entries/quotations/${idOrDoc}`, { signal });
}
async function updateQuotationStatus(idOrDoc, status, note) {
	return apiFetch(`api/sales-entries/quotations/${idOrDoc}/status`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			status,
			note
		})
	});
}
async function downloadQuotationPdf(idOrDoc, documentNumber) {
	const blob = await apiFetchBlob(`api/sales-entries/quotations/${idOrDoc}/pdf`, { baseUrl: BACKEND_API_URL || "http://localhost:5028" });
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = `${documentNumber || idOrDoc}.pdf`;
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
	URL.revokeObjectURL(url);
}
//#endregion
export { updateQuotationStatus as i, getQuotationById as n, getQuotations as r, downloadQuotationPdf as t };

import { B as append, Bt as reset, Ct as user_derived, D as head, Et as store_get, G as text, H as from_html, I as if_block, K as delegate, N as each, Nt as pop, P as index, Pt as push, Q as get, R as set_text, S as select_option, Tt as setup_stores, V as comment, _ as set_attribute, bt as state, dt as $document, g as remove_input_defaults, gt as proxy, ht as sibling, it as effect, mt as first_child, n as onDestroy, ot as template_effect, pt as child, q as delegated, st as user_effect, vt as set, x as init_select, y as set_value, zt as next } from "../chunks/dXkmWTgM.js";
import { t as goto } from "../chunks/wpREvWIs.js";
import "../chunks/DhaYE-8x.js";
import { i as hasRole } from "../chunks/D8mr9Srh.js";
import { r as toast } from "../chunks/CbPRQHfn.js";
import { t as Arrow_down_left } from "../chunks/GChCIwC_.js";
import { t as Arrow_right } from "../chunks/DZE4Pk63.js";
import { t as Arrow_up_right } from "../chunks/BUyTpJv8.js";
import { t as Ban } from "../chunks/CCPC6kzk.js";
import { t as Building_2 } from "../chunks/PAfPMPpZ.js";
import { t as Calendar } from "../chunks/DxFQ7Qxv.js";
import { t as Check } from "../chunks/blG6JRe7.js";
import { t as Chevron_left } from "../chunks/bgfi4Y0B2.js";
import { t as Chevron_right } from "../chunks/BQLzQDdY2.js";
import { t as Download } from "../chunks/D8w6XH0S2.js";
import { t as External_link } from "../chunks/ifddzD342.js";
import { t as File_text } from "../chunks/NLRKrZbo2.js";
import { t as Receipt } from "../chunks/4mbxDyuf.js";
import { t as Search } from "../chunks/D7t9qluE.js";
import { t as User } from "../chunks/C8PICJbu.js";
import { t as Wallet } from "../chunks/BahXSy4P.js";
import { t as X } from "../chunks/wXHc9RNY.js";
import { t as page } from "../chunks/BPvnKHCO.js";
import { t as Button } from "../chunks/BhXsq3bC.js";
import { t as ErrorState } from "../chunks/CRMNR9wu.js";
import "../chunks/CrmyWJzI.js";
import { t as FinancialTableSkeleton } from "../chunks/BifxP-5W2.js";
import { t as EmptyState } from "../chunks/DXyN7dIZ2.js";
import { t as MoneyDisplay } from "../chunks/CIVSRuaR2.js";
import { r as getBahrainPresetRanges, t as DateDisplay } from "../chunks/DeM3dT312.js";
import "../chunks/D-6PwnbV2.js";
import { t as exportToCSV } from "../chunks/C74Z4VDd2.js";
import { t as previewDocument } from "../chunks/DjeQKzgW2.js";
import { a as TRANSACTION_STATUS_CONFIG, c as TRANSACTION_TYPE_VALUES, i as REFERENCE_TYPE_VALUES, o as TRANSACTION_STATUS_VALUES, s as TRANSACTION_TYPE_CONFIG } from "../chunks/DNQc_ysr2.js";
import { t as FinancialCardSkeleton } from "../chunks/B8oQRwBb2.js";
import { o as getTransactions } from "../chunks/BJHTcPuE2.js";
import { t as FormattedNarrative } from "../chunks/CHiWmlVe2.js";
import { t as ConflictDialog } from "../chunks/BQhkmUhN2.js";
import { n as FinancialStatusBadge, t as TransactionTypeChip } from "../chunks/Dxh8BGmS.js";
import { n as TransactionApproveDialog, t as TransactionRejectDialog } from "../chunks/CVNrg_XE.js";
//#region src/lib/utils/query-params.ts
/**
* URL query parameter utilities for financial list pages.
*
* Rules:
* - Only backend-supported filter values are allowed through
* - Invalid or unknown values are silently normalized (not passed to API)
* - No arbitrary string passthrough for enum fields
*/
var ALLOWED_PAGE_SIZES = [
	10,
	20,
	50,
	100
];
/**
* Safely parses transaction filters from a URL's search params.
* Invalid values are silently normalized to null/defaults.
*/
function parseTransactionFilters(url) {
	const params = url.searchParams;
	const statusRaw = params.get("status");
	const typeRaw = params.get("type");
	const refTypeRaw = params.get("referenceType");
	const refId = params.get("referenceId");
	const startDateRaw = params.get("startDate") || params.get("from");
	const endDateRaw = params.get("endDate") || params.get("to");
	const pageRaw = params.get("page");
	const pageSizeRaw = params.get("pageSize");
	const status = statusRaw && TRANSACTION_STATUS_VALUES.includes(statusRaw) ? statusRaw : null;
	const type = typeRaw && TRANSACTION_TYPE_VALUES.includes(typeRaw) ? typeRaw : null;
	const referenceType = refTypeRaw && REFERENCE_TYPE_VALUES.includes(refTypeRaw) ? refTypeRaw : null;
	const referenceId = refId && /^[\w-]{1,100}$/.test(refId) ? refId : null;
	const startDate = startDateRaw && /^\d{4}-\d{2}-\d{2}$/.test(startDateRaw) ? startDateRaw : null;
	const endDate = endDateRaw && /^\d{4}-\d{2}-\d{2}$/.test(endDateRaw) ? endDateRaw : null;
	const pageNum = parseInt(pageRaw ?? "1", 10);
	const page = isNaN(pageNum) || pageNum < 1 ? 1 : pageNum;
	const pageSizeNum = parseInt(pageSizeRaw ?? "20", 10);
	return {
		status,
		type,
		referenceType,
		referenceId,
		startDate,
		endDate,
		page,
		pageSize: ALLOWED_PAGE_SIZES.includes(pageSizeNum) ? pageSizeNum : 20
	};
}
/**
* Serializes transaction filters to URL search params.
* Null values are omitted (clean URL).
*/
function serializeTransactionFilters(filters, base = "http://localhost") {
	const params = new URLSearchParams();
	if (filters.status) params.set("status", filters.status);
	if (filters.type) params.set("type", filters.type);
	if (filters.referenceType) params.set("referenceType", filters.referenceType);
	if (filters.referenceId) params.set("referenceId", filters.referenceId);
	if (filters.startDate) params.set("startDate", filters.startDate);
	if (filters.endDate) params.set("endDate", filters.endDate);
	if (filters.page > 1) params.set("page", String(filters.page));
	if (filters.pageSize !== 20) params.set("pageSize", String(filters.pageSize));
	return params;
}
/**
* Returns true if the filters differ from defaults (i.e., active filters exist).
*/
function hasActiveFilters(filters) {
	return filters.status !== null || filters.type !== null || filters.referenceType !== null || filters.referenceId !== null || filters.startDate !== null || filters.endDate !== null || filters.page > 1;
}
//#endregion
//#region src/routes/(app)/transactions/+page.svelte
var root = from_html(`<!> <span> </span>`, 1);
var root_1 = from_html(`<option> </option>`);
var root_2 = from_html(`<span class="inline-flex items-center gap-1 bg-primary/10 text-primary px-2.5 py-1 rounded-full border border-primary/20 font-medium"> <button class="hover:text-destructive shrink-0 cursor-pointer"><!></button></span>`);
var root_3 = from_html(`<span class="inline-flex items-center gap-1 bg-muted px-2.5 py-1 rounded-full border border-border text-foreground"> <button class="hover:text-destructive shrink-0 cursor-pointer"><!></button></span>`);
var root_4 = from_html(`<div class="flex flex-wrap items-center gap-2 pt-2 border-t border-border/50 text-[11px]"><span class="text-muted-foreground font-medium mr-1">Active filters:</span> <!> <!> <!> <!> <button class="text-xs font-semibold text-primary hover:underline ml-auto cursor-pointer">Clear All</button></div>`);
var root_5 = from_html(`<div class="hidden md:block bg-card border border-border rounded-2xl overflow-hidden"><!></div> <div class="block md:hidden"><!></div>`, 1);
var root_6 = from_html(`<!> <span class="truncate font-semibold"> </span>`, 1);
var root_7 = from_html(`<!> <span class="truncate"> </span>`, 1);
var root_8 = from_html(`<span class="text-muted-foreground/70">Cash Drawer / Internal</span>`);
var root_9 = from_html(`<strong class="text-foreground"> </strong>`);
var root_10 = from_html(`<span>Accounts</span>`);
var root_11 = from_html(`<a class="inline-flex items-center gap-1 text-[10px] font-mono font-semibold bg-muted hover:bg-muted/80 text-primary border border-border px-2 py-1 rounded-lg transition-colors"><span> </span> <!></a>`);
var root_12 = from_html(`<span class="font-mono text-[10px] bg-muted px-2 py-1 rounded-lg text-foreground font-semibold"> </span>`);
var root_13 = from_html(`<span class="font-mono text-[10px] text-muted-foreground"> </span>`);
var root_14 = from_html(`<span class="text-muted-foreground/50 text-[10px]">—</span>`);
var root_15 = from_html(`<!> <span class="text-emerald-600 dark:text-emerald-400"><!></span>`, 1);
var root_16 = from_html(`<!> <span class="text-rose-600 dark:text-rose-400"><!></span>`, 1);
var root_17 = from_html(`<span class="text-foreground"><!></span>`);
var root_18 = from_html(`<div class="flex items-center gap-1 text-[10px] text-emerald-600 font-semibold"><!> <span class="truncate"> </span></div>`);
var root_19 = from_html(`<div class="flex items-center gap-1 text-[10px] text-rose-600 font-semibold"><!> <span class="truncate"> </span></div>`);
var root_20 = from_html(`<div class="flex items-center justify-end gap-1.5"><button class="p-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-600 border border-emerald-200 cursor-pointer" title="Approve Transaction"><!></button> <button class="p-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 cursor-pointer" title="Reject Transaction"><!></button></div>`);
var root_21 = from_html(`<tr class="hover:bg-muted/15 transition-colors cursor-pointer"><td class="p-3.5 space-y-0.5"><span class="font-mono font-bold text-foreground block"> </span> <span class="text-[10px] text-muted-foreground block"><!></span></td><td class="p-3.5"><!> <span class="block text-[10px] text-muted-foreground mt-1 capitalize font-medium"> </span></td><td class="p-3.5"><div class="space-y-1 text-[11px]"><div class="flex items-center gap-1.5 font-medium text-foreground"><!></div> <div class="flex items-center gap-1 text-[10px] text-muted-foreground pl-0.5"><!> <span class="truncate font-mono"><!></span></div></div></td><td class="p-3.5 max-w-[280px]"><p class="line-clamp-2 text-[11px] leading-relaxed text-foreground font-medium"><!></p></td><td class="p-3.5"><!></td><td class="p-3.5 text-right font-bold text-sm font-mono"><div class="flex items-center justify-end gap-1"><!></div></td><td class="p-3.5"><!></td><td class="p-3.5 space-y-0.5 text-[11px]"><div class="flex items-center gap-1 text-foreground font-medium"><!> <span class="truncate"> </span></div> <!></td><td class="p-3.5 text-right"><!></td></tr>`);
var root_22 = from_html(`<a class="block bg-card border border-border rounded-2xl p-4 space-y-3 hover:border-primary/40 transition-all text-left shadow-xs"><div class="flex items-center justify-between"><!> <span class="font-bold text-base font-mono"><!></span></div> <p class="text-xs text-foreground font-medium leading-relaxed"> </p> <div class="flex items-center justify-between text-[11px] pt-2 border-t border-border/40 text-muted-foreground"><span class="font-mono font-semibold"> </span> <!></div></a>`);
var root_23 = from_html(`<!> <span>Prev</span>`, 1);
var root_24 = from_html(`<span>Next</span> <!>`, 1);
var root_25 = from_html(`<div class="hidden md:block bg-card border border-border rounded-2xl overflow-hidden shadow-xs"><div class="overflow-x-auto"><table class="w-full text-left border-collapse text-xs"><thead><tr class="bg-muted/40 border-b border-border text-muted-foreground font-semibold uppercase text-[10px] tracking-wider"><th class="p-3.5 w-24">Transaction</th><th class="p-3.5 w-24">Type</th><th class="p-3.5 w-52">Financial Flow</th><th class="p-3.5">Narrative Explanation</th><th class="p-3.5 w-32">Reference</th><th class="p-3.5 w-32 text-right">Amount</th><th class="p-3.5 w-28">Status</th><th class="p-3.5 w-32">Audit</th><th class="p-3.5 w-28 text-right">Actions</th></tr></thead><tbody class="divide-y divide-border/60"></tbody></table></div></div> <div class="block md:hidden space-y-3"></div> <div class="flex items-center justify-between pt-2"><span class="text-[11px] text-muted-foreground font-medium"> </span> <div class="flex items-center gap-1.5"><!> <!></div></div>`, 1);
var root_26 = from_html(`<div class="space-y-6"><div class="flex flex-col md:flex-row md:items-center justify-between gap-4"><div><h1 class="text-2xl font-black tracking-tight text-foreground">Transactions</h1> <p class="text-xs text-muted-foreground mt-0.5 font-medium">Audit trail of all incoming collections, supplier settlements, and bank/cash movements</p></div> <div class="flex items-center gap-2"><!> <!></div></div> <div class="bg-card border border-border rounded-3xl p-5 shadow-xs space-y-4"><div class="grid grid-cols-1 md:grid-cols-4 gap-3"><div class="relative md:col-span-2"><!> <input type="text" placeholder="Search by doc #, ref #, description, customer..." class="w-full pl-9.5 pr-8 py-2.5 bg-background border border-border rounded-xl text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium"/></div> <select class="w-full py-2.5 px-3 bg-background border border-border rounded-xl text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium cursor-pointer"><option>All Statuses</option><!></select> <select class="w-full py-2.5 px-3 bg-background border border-border rounded-xl text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium cursor-pointer"><option>All Types</option><!></select></div> <div class="flex flex-wrap items-center justify-between gap-3 pt-1 border-t border-border/40"><div class="flex flex-wrap items-center gap-2 text-xs"><!> <span class="font-bold text-muted-foreground text-[11px] uppercase tracking-wider">Date Range:</span> <input type="date" class="py-1 px-2.5 bg-background border border-border rounded-lg text-xs text-foreground font-mono focus:outline-none focus:ring-1 focus:ring-primary"/> <span class="text-muted-foreground text-xs font-semibold">to</span> <input type="date" class="py-1 px-2.5 bg-background border border-border rounded-lg text-xs text-foreground font-mono focus:outline-none focus:ring-1 focus:ring-primary"/></div> <div class="flex items-center gap-1.5 text-[11px]"><button type="button" class="px-2.5 py-1 rounded-lg border border-border bg-muted/40 hover:bg-muted font-medium transition-colors cursor-pointer text-foreground">Today</button> <button type="button" class="px-2.5 py-1 rounded-lg border border-border bg-muted/40 hover:bg-muted font-medium transition-colors cursor-pointer text-foreground">This Week</button> <button type="button" class="px-2.5 py-1 rounded-lg border border-border bg-muted/40 hover:bg-muted font-medium transition-colors cursor-pointer text-foreground">This Month</button></div></div> <!></div> <!></div> <!> <!> <!>`, 1);
function _page($$anchor, $$props) {
	push($$props, true);
	const $page = () => store_get(page, "$page", $$stores);
	const [$$stores, $$cleanup] = setup_stores();
	let transactions = state(proxy([]));
	let loading = state(true);
	let errorMsg = state(null);
	let correlationId = state("");
	let selectedTxId = state(null);
	let approveDialogOpen = state(false);
	let rejectDialogOpen = state(false);
	let conflictDialogOpen = state(false);
	let filters = user_derived(() => parseTransactionFilters($page().url));
	let searchInput = state("");
	let searchTimeout;
	let abortController = null;
	let filteredTransactions = user_derived(() => {
		const term = get(searchInput).trim().toLowerCase();
		if (!term) return get(transactions);
		return get(transactions).filter((t) => t.documentNumber && t.documentNumber.toLowerCase().includes(term) || t.sourceParty?.name && t.sourceParty.name.toLowerCase().includes(term) || t.destinationParty?.name && t.destinationParty.name.toLowerCase().includes(term) || t.sourceBankName && t.sourceBankName.toLowerCase().includes(term) || t.destinationBankName && t.destinationBankName.toLowerCase().includes(term) || t.sourceAccountName && t.sourceAccountName.toLowerCase().includes(term) || t.destinationAccountName && t.destinationAccountName.toLowerCase().includes(term) || t.displayNarrative && t.displayNarrative.toLowerCase().includes(term) || t.description && t.description.toLowerCase().includes(term) || t.referenceDisplayName && t.referenceDisplayName.toLowerCase().includes(term) || t.referenceId && t.referenceId.toLowerCase().includes(term) || t.createdByName && t.createdByName.toLowerCase().includes(term) || t.approvedByName && t.approvedByName.toLowerCase().includes(term) || t.rejectedByName && t.rejectedByName.toLowerCase().includes(term) || t.status && t.status.toLowerCase().includes(term) || t.transactionType && t.transactionType.toLowerCase().includes(term));
	});
	async function loadTransactions() {
		set(loading, true);
		set(errorMsg, null);
		set(correlationId, "");
		if (abortController) abortController.abort();
		abortController = new AbortController();
		try {
			const res = await getTransactions({
				status: get(filters).status || void 0,
				type: get(filters).type || void 0,
				referenceType: get(filters).referenceType || void 0,
				referenceId: get(filters).referenceId || void 0,
				search: get(searchInput).trim() || void 0,
				startDate: get(filters).startDate || void 0,
				endDate: get(filters).endDate || void 0,
				page: get(filters).page,
				pageSize: get(filters).pageSize
			}, abortController.signal);
			set(transactions, res, true);
		} catch (err) {
			if (err.name === "AbortError") return;
			set(errorMsg, err.message || "Failed to load transactions.", true);
			set(correlationId, err.correlationId || "", true);
		} finally {
			set(loading, false);
		}
	}
	function updateFilters(newFilters) {
		const merged = {
			...get(filters),
			...newFilters
		};
		if (newFilters.page === void 0) merged.page = 1;
		const qs = serializeTransactionFilters(merged).toString();
		goto(`/transactions${qs ? `?${qs}` : ""}`, {
			keepFocus: true,
			noScroll: true
		});
	}
	function handleSearchInput(e) {
		const val = e.target.value;
		set(searchInput, val, true);
		clearTimeout(searchTimeout);
		searchTimeout = setTimeout(() => {
			loadTransactions();
		}, 350);
	}
	function clearFilters() {
		set(searchInput, "");
		goto("/transactions");
	}
	function refreshView() {
		loadTransactions();
	}
	function openApprove(id) {
		set(selectedTxId, id, true);
		set(approveDialogOpen, true);
	}
	function openReject(id) {
		set(selectedTxId, id, true);
		set(rejectDialogOpen, true);
	}
	user_effect(() => {
		if (get(filters).referenceId !== get(searchInput) && !get(searchInput)) set(searchInput, get(filters).referenceId || "", true);
		loadTransactions();
	});
	let exportingCSV = state(false);
	let exportingPDF = state(false);
	function exportTransactionsCSV() {
		try {
			set(exportingCSV, true);
			const list = get(filteredTransactions);
			if (!list || list.length === 0) {
				toast.info("No transaction records available to export.");
				return;
			}
			const csvHeaders = [
				"Transaction ID / Doc No.",
				"Date",
				"Type",
				"Status",
				"Narrative & Details",
				"Source Channel / Party",
				"Destination Channel / Party",
				"Payment Channel",
				"Reference ID",
				"Amount (BHD)",
				"Created By",
				"Approved By"
			];
			const csvRows = list.map((t) => {
				const source = t.sourceBankName ? `Bank: ${t.sourceBankName}` : t.sourceAccountName ? `Account: ${t.sourceAccountName}` : t.sourceParty?.name || "-";
				const dest = t.destinationBankName ? `Bank: ${t.destinationBankName}` : t.destinationAccountName ? `Account: ${t.destinationAccountName}` : t.destinationParty?.name || "-";
				const narrative = t.displayNarrative || t.description || "-";
				const dateStr = t.createdAt ? new Date(t.createdAt).toISOString().split("T")[0] : "";
				return [
					t.documentNumber || `TXSTRN-${t.id}`,
					dateStr,
					t.transactionType ? t.transactionType.toUpperCase() : "TXN",
					t.status ? t.status.toUpperCase() : "COMPLETED",
					narrative,
					source,
					dest,
					t.paymentMethod || "Direct",
					t.referenceId || "",
					t.amount !== void 0 ? t.amount.toFixed(3) : "0.000",
					t.createdByName || "",
					t.approvedByName || ""
				];
			});
			exportToCSV(`transactions_export_${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.csv`, csvHeaders, csvRows);
			toast.success("CSV statement exported successfully.");
		} catch (err) {
			console.error("Failed to export transactions CSV:", err);
			toast.error("Failed to export CSV: " + (err?.message || "Unknown error"));
		} finally {
			set(exportingCSV, false);
		}
	}
	async function exportTransactionsPDF() {
		try {
			set(exportingPDF, true);
			toast.info("Generating PDF with company logo...");
			await previewDocument("report", "transactions", {
				status: get(filters).status || void 0,
				type: get(filters).type || void 0,
				referenceType: get(filters).referenceType || void 0,
				referenceId: get(filters).referenceId || void 0,
				search: get(searchInput).trim() || void 0,
				startDate: get(filters).startDate || void 0,
				endDate: get(filters).endDate || void 0
			});
		} catch (err) {
			console.error("Failed to generate transactions PDF:", err);
			toast.error("Failed to generate PDF: " + (err?.message || "Unknown error"));
		} finally {
			set(exportingPDF, false);
		}
	}
	onDestroy(() => {
		if (abortController) abortController.abort();
		clearTimeout(searchTimeout);
	});
	var fragment = root_26();
	head("yb5gkr", ($$anchor) => {
		effect(() => {
			$document.title = "Transactions | Accounts Portal";
		});
	});
	var div = first_child(fragment);
	var div_1 = child(div);
	var div_2 = sibling(child(div_1), 2);
	var node = child(div_2);
	{
		let $0 = user_derived(() => get(exportingCSV) || get(loading));
		Button(node, {
			variant: "outline",
			class: "rounded-2xl text-xs py-5 px-3.5 gap-2 border-border bg-card hover:bg-muted font-bold text-foreground cursor-pointer shadow-2xs",
			onclick: exportTransactionsCSV,
			get disabled() {
				return get($0);
			},
			children: ($$anchor, $$slotProps) => {
				var fragment_1 = root();
				var node_1 = first_child(fragment_1);
				Download(node_1, { class: "h-4 w-4 text-emerald-600 dark:text-emerald-400" });
				var span = sibling(node_1, 2);
				var text = child(span, true);
				reset(span);
				template_effect(() => set_text(text, get(exportingCSV) ? "Exporting..." : "Export CSV"));
				append($$anchor, fragment_1);
			},
			$$slots: { default: true }
		});
	}
	Button(sibling(node, 2), {
		variant: "outline",
		class: "rounded-2xl text-xs py-5 px-3.5 gap-2 border-border bg-card hover:bg-muted font-bold text-foreground cursor-pointer shadow-2xs",
		onclick: exportTransactionsPDF,
		get disabled() {
			return get(exportingPDF);
		},
		children: ($$anchor, $$slotProps) => {
			var fragment_2 = root();
			var node_3 = first_child(fragment_2);
			File_text(node_3, { class: "h-4 w-4 text-primary" });
			var span_1 = sibling(node_3, 2);
			var text_1 = child(span_1, true);
			reset(span_1);
			template_effect(() => set_text(text_1, get(exportingPDF) ? "Generating..." : "Export PDF"));
			append($$anchor, fragment_2);
		},
		$$slots: { default: true }
	});
	reset(div_2);
	reset(div_1);
	var div_3 = sibling(div_1, 2);
	var div_4 = child(div_3);
	var div_5 = child(div_4);
	var node_4 = child(div_5);
	Search(node_4, { class: "absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" });
	var input = sibling(node_4, 2);
	remove_input_defaults(input);
	reset(div_5);
	var select = sibling(div_5, 2);
	var option = child(select);
	option.value = option.__value = "";
	each(sibling(option), 17, () => TRANSACTION_STATUS_VALUES, index, ($$anchor, st) => {
		var option_1 = root_1();
		var text_2 = child(option_1, true);
		reset(option_1);
		var option_1_value = {};
		template_effect(() => {
			set_text(text_2, TRANSACTION_STATUS_CONFIG[get(st)].label);
			if (option_1_value !== (option_1_value = get(st))) option_1.value = (option_1.__value = get(st)) ?? "";
		});
		append($$anchor, option_1);
	});
	reset(select);
	var select_value;
	init_select(select);
	var select_1 = sibling(select, 2);
	var option_2 = child(select_1);
	option_2.value = option_2.__value = "";
	each(sibling(option_2), 17, () => TRANSACTION_TYPE_VALUES, index, ($$anchor, ty) => {
		var option_3 = root_1();
		var text_3 = child(option_3, true);
		reset(option_3);
		var option_3_value = {};
		template_effect(() => {
			set_text(text_3, TRANSACTION_TYPE_CONFIG[get(ty)].label);
			if (option_3_value !== (option_3_value = get(ty))) option_3.value = (option_3.__value = get(ty)) ?? "";
		});
		append($$anchor, option_3);
	});
	reset(select_1);
	var select_1_value;
	init_select(select_1);
	reset(div_4);
	var div_6 = sibling(div_4, 2);
	var div_7 = child(div_6);
	var node_7 = child(div_7);
	Calendar(node_7, { class: "h-3.5 w-3.5 text-muted-foreground" });
	var input_1 = sibling(node_7, 4);
	remove_input_defaults(input_1);
	var input_2 = sibling(input_1, 4);
	remove_input_defaults(input_2);
	reset(div_7);
	var div_8 = sibling(div_7, 2);
	var button = child(div_8);
	var button_1 = sibling(button, 2);
	var button_2 = sibling(button_1, 2);
	reset(div_8);
	reset(div_6);
	var node_8 = sibling(div_6, 2);
	var consequent_4 = ($$anchor) => {
		var div_9 = root_4();
		var node_9 = sibling(child(div_9), 2);
		var consequent = ($$anchor) => {
			var span_2 = root_2();
			var text_4 = child(span_2);
			var button_3 = sibling(text_4);
			X(child(button_3), { class: "h-3 w-3" });
			reset(button_3);
			reset(span_2);
			template_effect(() => set_text(text_4, `Search: "${get(searchInput) ?? ""}" `));
			delegated("click", button_3, () => {
				set(searchInput, "");
				loadTransactions();
			});
			append($$anchor, span_2);
		};
		if_block(node_9, ($$render) => {
			if (get(searchInput)) $$render(consequent);
		});
		var node_11 = sibling(node_9, 2);
		var consequent_1 = ($$anchor) => {
			var span_3 = root_2();
			var text_5 = child(span_3);
			var button_4 = sibling(text_5);
			X(child(button_4), { class: "h-3 w-3" });
			reset(button_4);
			reset(span_3);
			template_effect(() => set_text(text_5, `Date: ${(get(filters).startDate || "Start") ?? ""} → ${(get(filters).endDate || "End") ?? ""} `));
			delegated("click", button_4, () => updateFilters({
				startDate: null,
				endDate: null
			}));
			append($$anchor, span_3);
		};
		if_block(node_11, ($$render) => {
			if (get(filters).startDate || get(filters).endDate) $$render(consequent_1);
		});
		var node_13 = sibling(node_11, 2);
		var consequent_2 = ($$anchor) => {
			var span_4 = root_3();
			var text_6 = child(span_4);
			var button_5 = sibling(text_6);
			X(child(button_5), { class: "h-3 w-3" });
			reset(button_5);
			reset(span_4);
			template_effect(() => set_text(text_6, `Status: ${TRANSACTION_STATUS_CONFIG[get(filters).status].label ?? ""} `));
			delegated("click", button_5, () => updateFilters({ status: null }));
			append($$anchor, span_4);
		};
		if_block(node_13, ($$render) => {
			if (get(filters).status) $$render(consequent_2);
		});
		var node_15 = sibling(node_13, 2);
		var consequent_3 = ($$anchor) => {
			var span_5 = root_3();
			var text_7 = child(span_5);
			var button_6 = sibling(text_7);
			X(child(button_6), { class: "h-3 w-3" });
			reset(button_6);
			reset(span_5);
			template_effect(() => set_text(text_7, `Type: ${TRANSACTION_TYPE_CONFIG[get(filters).type].label ?? ""} `));
			delegated("click", button_6, () => updateFilters({ type: null }));
			append($$anchor, span_5);
		};
		if_block(node_15, ($$render) => {
			if (get(filters).type) $$render(consequent_3);
		});
		var button_7 = sibling(node_15, 2);
		reset(div_9);
		delegated("click", button_7, clearFilters);
		append($$anchor, div_9);
	};
	var d = user_derived(() => hasActiveFilters(get(filters)) || get(searchInput));
	if_block(node_8, ($$render) => {
		if (get(d)) $$render(consequent_4);
	});
	reset(div_3);
	var node_17 = sibling(div_3, 2);
	var consequent_5 = ($$anchor) => {
		ErrorState($$anchor, {
			get message() {
				return get(errorMsg);
			},
			get correlationId() {
				return get(correlationId);
			},
			retryAction: refreshView
		});
	};
	var consequent_6 = ($$anchor) => {
		var fragment_4 = root_5();
		var div_10 = first_child(fragment_4);
		FinancialTableSkeleton(child(div_10), {
			get rows() {
				return get(filters).pageSize;
			},
			columns: 9
		});
		reset(div_10);
		var div_11 = sibling(div_10, 2);
		FinancialCardSkeleton(child(div_11), { count: 4 });
		reset(div_11);
		append($$anchor, fragment_4);
	};
	var consequent_7 = ($$anchor) => {
		EmptyState($$anchor, {
			title: "No transactions found",
			description: "No matching transactions found. Adjust search terms or clear active filters.",
			get icon() {
				return Receipt;
			}
		});
	};
	var alternate_6 = ($$anchor) => {
		var fragment_6 = root_25();
		var div_12 = first_child(fragment_6);
		var div_13 = child(div_12);
		var table = child(div_13);
		var tbody = sibling(child(table));
		each(tbody, 21, () => get(filteredTransactions), (tx) => tx.id, ($$anchor, tx) => {
			var tr = root_21();
			var td = child(tr);
			var span_6 = child(td);
			var text_8 = child(span_6, true);
			reset(span_6);
			var span_7 = sibling(span_6, 2);
			DateDisplay(child(span_7), { get value() {
				return get(tx).createdAt;
			} });
			reset(span_7);
			reset(td);
			var td_1 = sibling(td);
			var node_21 = child(td_1);
			TransactionTypeChip(node_21, { get type() {
				return get(tx).transactionType;
			} });
			var span_8 = sibling(node_21, 2);
			var text_9 = child(span_8, true);
			reset(span_8);
			reset(td_1);
			var td_2 = sibling(td_1);
			var div_14 = child(td_2);
			var div_15 = child(div_14);
			var node_22 = child(div_15);
			var consequent_8 = ($$anchor) => {
				var fragment_7 = root_6();
				var node_23 = first_child(fragment_7);
				User(node_23, { class: "h-3 w-3 text-primary shrink-0" });
				var span_9 = sibling(node_23, 2);
				var text_10 = child(span_9, true);
				reset(span_9);
				template_effect(() => set_text(text_10, get(tx).sourceParty.name));
				append($$anchor, fragment_7);
			};
			var consequent_9 = ($$anchor) => {
				var fragment_8 = root_6();
				var node_24 = first_child(fragment_8);
				Building_2(node_24, { class: "h-3 w-3 text-blue-500 shrink-0" });
				var span_10 = sibling(node_24, 2);
				var text_11 = child(span_10, true);
				reset(span_10);
				template_effect(() => set_text(text_11, get(tx).sourceBankName));
				append($$anchor, fragment_8);
			};
			var consequent_10 = ($$anchor) => {
				var fragment_9 = root_7();
				var node_25 = first_child(fragment_9);
				Wallet(node_25, { class: "h-3 w-3 text-amber-500 shrink-0" });
				var span_11 = sibling(node_25, 2);
				var text_12 = child(span_11, true);
				reset(span_11);
				template_effect(() => set_text(text_12, get(tx).sourceAccountName));
				append($$anchor, fragment_9);
			};
			var alternate = ($$anchor) => {
				append($$anchor, root_8());
			};
			if_block(node_22, ($$render) => {
				if (get(tx).sourceParty) $$render(consequent_8);
				else if (get(tx).sourceBankName) $$render(consequent_9, 1);
				else if (get(tx).sourceAccountName) $$render(consequent_10, 2);
				else $$render(alternate, -1);
			});
			reset(div_15);
			var div_16 = sibling(div_15, 2);
			var node_26 = child(div_16);
			Arrow_right(node_26, { class: "h-3 w-3 text-primary/70 shrink-0" });
			var span_13 = sibling(node_26, 2);
			var node_27 = child(span_13);
			var consequent_11 = ($$anchor) => {
				var strong = root_9();
				var text_13 = child(strong, true);
				reset(strong);
				template_effect(() => set_text(text_13, get(tx).destinationParty.name));
				append($$anchor, strong);
			};
			var consequent_12 = ($$anchor) => {
				var strong_1 = root_9();
				var text_14 = child(strong_1, true);
				reset(strong_1);
				template_effect(() => set_text(text_14, get(tx).destinationBankName));
				append($$anchor, strong_1);
			};
			var consequent_13 = ($$anchor) => {
				var strong_2 = root_9();
				var text_15 = child(strong_2, true);
				reset(strong_2);
				template_effect(() => set_text(text_15, get(tx).destinationAccountName));
				append($$anchor, strong_2);
			};
			var alternate_1 = ($$anchor) => {
				append($$anchor, root_10());
			};
			if_block(node_27, ($$render) => {
				if (get(tx).destinationParty) $$render(consequent_11);
				else if (get(tx).destinationBankName) $$render(consequent_12, 1);
				else if (get(tx).destinationAccountName) $$render(consequent_13, 2);
				else $$render(alternate_1, -1);
			});
			reset(span_13);
			reset(div_16);
			reset(div_14);
			reset(td_2);
			var td_3 = sibling(td_2);
			var p = child(td_3);
			var node_28 = child(p);
			{
				let $0 = user_derived(() => get(tx).displayNarrative || get(tx).description || "Standard posting.");
				FormattedNarrative(node_28, { get text() {
					return get($0);
				} });
			}
			reset(p);
			reset(td_3);
			var td_4 = sibling(td_3);
			var node_29 = child(td_4);
			var consequent_15 = ($$anchor) => {
				var fragment_10 = comment();
				var node_30 = first_child(fragment_10);
				var consequent_14 = ($$anchor) => {
					var a = root_11();
					var span_15 = child(a);
					var text_16 = child(span_15, true);
					reset(span_15);
					External_link(sibling(span_15, 2), { class: "h-2.5 w-2.5 shrink-0" });
					reset(a);
					template_effect(() => {
						set_attribute(a, "href", get(tx).referenceUrl);
						set_text(text_16, get(tx).referenceDisplayName);
					});
					append($$anchor, a);
				};
				var alternate_2 = ($$anchor) => {
					var span_16 = root_12();
					var text_17 = child(span_16, true);
					reset(span_16);
					template_effect(() => set_text(text_17, get(tx).referenceDisplayName));
					append($$anchor, span_16);
				};
				if_block(node_30, ($$render) => {
					if (get(tx).referenceUrl) $$render(consequent_14);
					else $$render(alternate_2, -1);
				});
				append($$anchor, fragment_10);
			};
			var consequent_16 = ($$anchor) => {
				var span_17 = root_13();
				var text_18 = child(span_17, true);
				reset(span_17);
				template_effect(() => set_text(text_18, get(tx).referenceId));
				append($$anchor, span_17);
			};
			var alternate_3 = ($$anchor) => {
				append($$anchor, root_14());
			};
			if_block(node_29, ($$render) => {
				if (get(tx).referenceDisplayName) $$render(consequent_15);
				else if (get(tx).referenceId) $$render(consequent_16, 1);
				else $$render(alternate_3, -1);
			});
			reset(td_4);
			var td_5 = sibling(td_4);
			var div_17 = child(td_5);
			var node_32 = child(div_17);
			var consequent_17 = ($$anchor) => {
				var fragment_11 = root_15();
				var node_33 = first_child(fragment_11);
				Arrow_down_left(node_33, { class: "h-3.5 w-3.5 text-emerald-500" });
				var span_19 = sibling(node_33, 2);
				MoneyDisplay(child(span_19), { get amount() {
					return get(tx).amount;
				} });
				reset(span_19);
				append($$anchor, fragment_11);
			};
			var consequent_18 = ($$anchor) => {
				var fragment_12 = root_16();
				var node_35 = first_child(fragment_12);
				Arrow_up_right(node_35, { class: "h-3.5 w-3.5 text-rose-500" });
				var span_20 = sibling(node_35, 2);
				MoneyDisplay(child(span_20), { get amount() {
					return get(tx).amount;
				} });
				reset(span_20);
				append($$anchor, fragment_12);
			};
			var alternate_4 = ($$anchor) => {
				var span_21 = root_17();
				MoneyDisplay(child(span_21), { get amount() {
					return get(tx).amount;
				} });
				reset(span_21);
				append($$anchor, span_21);
			};
			if_block(node_32, ($$render) => {
				if (get(tx).transactionType === "incoming") $$render(consequent_17);
				else if (get(tx).transactionType === "outgoing") $$render(consequent_18, 1);
				else $$render(alternate_4, -1);
			});
			reset(div_17);
			reset(td_5);
			var td_6 = sibling(td_5);
			FinancialStatusBadge(child(td_6), {
				get status() {
					return get(tx).status;
				},
				size: "sm"
			});
			reset(td_6);
			var td_7 = sibling(td_6);
			var div_18 = child(td_7);
			var node_39 = child(div_18);
			User(node_39, { class: "h-3 w-3 text-primary shrink-0" });
			var span_22 = sibling(node_39, 2);
			var text_19 = child(span_22, true);
			reset(span_22);
			reset(div_18);
			var node_40 = sibling(div_18, 2);
			var consequent_19 = ($$anchor) => {
				var div_19 = root_18();
				var node_41 = child(div_19);
				Check(node_41, { class: "h-3 w-3 shrink-0" });
				var span_23 = sibling(node_41, 2);
				var text_20 = child(span_23, true);
				reset(span_23);
				reset(div_19);
				template_effect(() => set_text(text_20, get(tx).approvedByName));
				append($$anchor, div_19);
			};
			var consequent_20 = ($$anchor) => {
				var div_20 = root_19();
				var node_42 = child(div_20);
				Ban(node_42, { class: "h-3 w-3 shrink-0" });
				var span_24 = sibling(node_42, 2);
				var text_21 = child(span_24, true);
				reset(span_24);
				reset(div_20);
				template_effect(() => set_text(text_21, get(tx).rejectedByName));
				append($$anchor, div_20);
			};
			if_block(node_40, ($$render) => {
				if (get(tx).approvedByName) $$render(consequent_19);
				else if (get(tx).rejectedByName) $$render(consequent_20, 1);
			});
			reset(td_7);
			var td_8 = sibling(td_7);
			var node_43 = child(td_8);
			var consequent_21 = ($$anchor) => {
				var div_21 = root_20();
				var button_8 = child(div_21);
				Check(child(button_8), { class: "h-3.5 w-3.5" });
				reset(button_8);
				var button_9 = sibling(button_8, 2);
				Ban(child(button_9), { class: "h-3.5 w-3.5" });
				reset(button_9);
				reset(div_21);
				delegated("click", button_8, () => openApprove(get(tx).id));
				delegated("click", button_9, () => openReject(get(tx).id));
				append($$anchor, div_21);
			};
			var d_1 = user_derived(() => get(tx).status === "pending" && hasRole("master_accountant"));
			var alternate_5 = ($$anchor) => {
				Button($$anchor, {
					variant: "ghost",
					size: "xs",
					class: "text-[11px] font-semibold text-primary",
					onclick: () => goto(`/transactions/${get(tx).id}`),
					children: ($$anchor, $$slotProps) => {
						next();
						append($$anchor, text("Details"));
					},
					$$slots: { default: true }
				});
			};
			if_block(node_43, ($$render) => {
				if (get(d_1)) $$render(consequent_21);
				else $$render(alternate_5, -1);
			});
			reset(td_8);
			reset(tr);
			template_effect(() => {
				set_text(text_8, get(tx).documentNumber);
				set_text(text_9, get(tx).paymentMethodName || get(tx).paymentMethod);
				set_text(text_19, get(tx).createdByName || `User #${get(tx).createdBy}`);
			});
			delegated("click", tr, () => goto(`/transactions/${get(tx).id}`));
			delegated("click", td_4, (e) => e.stopPropagation());
			delegated("click", td_8, (e) => e.stopPropagation());
			append($$anchor, tr);
		});
		reset(tbody);
		reset(table);
		reset(div_13);
		reset(div_12);
		var div_22 = sibling(div_12, 2);
		each(div_22, 21, () => get(filteredTransactions), (tx) => tx.id, ($$anchor, tx) => {
			var a_1 = root_22();
			var div_23 = child(a_1);
			var node_46 = child(div_23);
			TransactionTypeChip(node_46, { get type() {
				return get(tx).transactionType;
			} });
			var span_25 = sibling(node_46, 2);
			MoneyDisplay(child(span_25), { get amount() {
				return get(tx).amount;
			} });
			reset(span_25);
			reset(div_23);
			var p_1 = sibling(div_23, 2);
			var text_23 = child(p_1, true);
			reset(p_1);
			var div_24 = sibling(p_1, 2);
			var span_26 = child(div_24);
			var text_24 = child(span_26, true);
			reset(span_26);
			FinancialStatusBadge(sibling(span_26, 2), {
				get status() {
					return get(tx).status;
				},
				size: "sm"
			});
			reset(div_24);
			reset(a_1);
			template_effect(() => {
				set_attribute(a_1, "href", `/transactions/${get(tx).id}`);
				set_text(text_23, get(tx).displayNarrative || get(tx).description);
				set_text(text_24, get(tx).documentNumber);
			});
			append($$anchor, a_1);
		});
		reset(div_22);
		var div_25 = sibling(div_22, 2);
		var span_27 = child(div_25);
		var text_25 = child(span_27);
		reset(span_27);
		var div_26 = sibling(span_27, 2);
		var node_49 = child(div_26);
		{
			let $0 = user_derived(() => get(filters).page <= 1 || get(loading));
			Button(node_49, {
				variant: "outline",
				class: "h-8.5 rounded-xl cursor-pointer p-3 font-semibold text-xs flex items-center gap-1",
				get disabled() {
					return get($0);
				},
				onclick: () => updateFilters({ page: get(filters).page - 1 }),
				children: ($$anchor, $$slotProps) => {
					var fragment_14 = root_23();
					Chevron_left(first_child(fragment_14), { class: "h-3.5 w-3.5" });
					next(2);
					append($$anchor, fragment_14);
				},
				$$slots: { default: true }
			});
		}
		var node_51 = sibling(node_49, 2);
		{
			let $0 = user_derived(() => get(transactions).length < get(filters).pageSize || get(loading));
			Button(node_51, {
				variant: "outline",
				class: "h-8.5 rounded-xl cursor-pointer p-3 font-semibold text-xs flex items-center gap-1",
				get disabled() {
					return get($0);
				},
				onclick: () => updateFilters({ page: get(filters).page + 1 }),
				children: ($$anchor, $$slotProps) => {
					var fragment_15 = root_24();
					Chevron_right(sibling(first_child(fragment_15), 2), { class: "h-3.5 w-3.5" });
					append($$anchor, fragment_15);
				},
				$$slots: { default: true }
			});
		}
		reset(div_26);
		reset(div_25);
		template_effect(() => set_text(text_25, `Page ${get(filters).page ?? ""} (Showing max ${get(filters).pageSize ?? ""} items)`));
		append($$anchor, fragment_6);
	};
	if_block(node_17, ($$render) => {
		if (get(errorMsg)) $$render(consequent_5);
		else if (get(loading)) $$render(consequent_6, 1);
		else if (get(transactions).length === 0) $$render(consequent_7, 2);
		else $$render(alternate_6, -1);
	});
	reset(div);
	var node_53 = sibling(div, 2);
	TransactionApproveDialog(node_53, {
		get transactionId() {
			return get(selectedTxId);
		},
		onConfirm: refreshView,
		get open() {
			return get(approveDialogOpen);
		},
		set open($$value) {
			set(approveDialogOpen, $$value, true);
		}
	});
	var node_54 = sibling(node_53, 2);
	TransactionRejectDialog(node_54, {
		get transactionId() {
			return get(selectedTxId);
		},
		onConfirm: refreshView,
		get open() {
			return get(rejectDialogOpen);
		},
		set open($$value) {
			set(rejectDialogOpen, $$value, true);
		}
	});
	ConflictDialog(sibling(node_54, 2), {
		onReload: refreshView,
		get open() {
			return get(conflictDialogOpen);
		},
		set open($$value) {
			set(conflictDialogOpen, $$value, true);
		}
	});
	template_effect(() => {
		set_value(input, get(searchInput));
		if (select_value !== (select_value = get(filters).status || "")) select.value = (select.__value = get(filters).status || "") ?? "", select_option(select, get(filters).status || "");
		if (select_1_value !== (select_1_value = get(filters).type || "")) select_1.value = (select_1.__value = get(filters).type || "") ?? "", select_option(select_1, get(filters).type || "");
		set_value(input_1, get(filters).startDate || "");
		set_value(input_2, get(filters).endDate || "");
	});
	delegated("input", input, handleSearchInput);
	delegated("change", select, (e) => updateFilters({ status: e.target.value || null }));
	delegated("change", select_1, (e) => updateFilters({ type: e.target.value || null }));
	delegated("change", input_1, (e) => updateFilters({ startDate: e.target.value || null }));
	delegated("change", input_2, (e) => updateFilters({ endDate: e.target.value || null }));
	delegated("click", button, () => {
		updateFilters(getBahrainPresetRanges().today);
	});
	delegated("click", button_1, () => {
		updateFilters(getBahrainPresetRanges().thisWeek);
	});
	delegated("click", button_2, () => {
		updateFilters(getBahrainPresetRanges().thisMonth);
	});
	append($$anchor, fragment);
	pop();
	$$cleanup();
}
delegate([
	"input",
	"change",
	"click"
]);
//#endregion
export { _page as component };

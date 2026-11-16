import { B as append, Bt as reset, Ct as user_derived, D as head, Et as store_get, H as from_html, I as if_block, K as delegate, N as each, Nt as pop, P as index, Pt as push, Q as get, R as set_text, S as select_option, T as clsx, Tt as setup_stores, _ as set_attribute, bt as state, dt as $document, g as remove_input_defaults, gt as proxy, ht as sibling, it as effect, mt as first_child, n as onDestroy, ot as template_effect, pt as child, q as delegated, r as onMount, vt as set, w as set_class, x as init_select, y as set_value, zt as next } from "../chunks/dXkmWTgM.js";
import "../chunks/DhaYE-8x.js";
import { i as hasRole } from "../chunks/sNz9zNqh.js";
import { r as toast } from "../chunks/CbPRQHfn.js";
import { t as Ban } from "../chunks/CCPC6kzk.js";
import { t as Building_2 } from "../chunks/PAfPMPpZ.js";
import { t as Calendar } from "../chunks/DxFQ7Qxv.js";
import { t as Check } from "../chunks/blG6JRe7.js";
import { t as Download } from "../chunks/D8w6XH0S2.js";
import { t as External_link } from "../chunks/ifddzD342.js";
import { t as File_text } from "../chunks/NLRKrZbo2.js";
import { n as Rotate_ccw, t as ErrorState } from "../chunks/B7ZVWvAI2.js";
import { t as Search } from "../chunks/D7t9qluE.js";
import { t as User } from "../chunks/C8PICJbu.js";
import { t as Wallet } from "../chunks/BahXSy4P.js";
import { t as X } from "../chunks/wXHc9RNY.js";
import { t as page } from "../chunks/B6Z0SvYC.js";
import { t as Button } from "../chunks/BhXsq3bC.js";
import "../chunks/CW4JpvrB.js";
import { t as FinancialTableSkeleton } from "../chunks/BifxP-5W.js";
import { t as EmptyState } from "../chunks/DXyN7dIZ.js";
import { t as MoneyDisplay } from "../chunks/CIVSRuaR.js";
import { n as getBahrainDateString, r as getBahrainPresetRanges, t as DateDisplay } from "../chunks/DeM3dT31.js";
import "../chunks/B-cipy3Z.js";
import { t as exportToCSV } from "../chunks/C74Z4VDd2.js";
import { t as previewDocument } from "../chunks/CnfDG1JL2.js";
import { a as TRANSACTION_STATUS_CONFIG, o as TRANSACTION_STATUS_VALUES } from "../chunks/DNQc_ysr2.js";
import { t as FinancialCardSkeleton } from "../chunks/B8oQRwBb2.js";
import { i as getTransactions } from "../chunks/C8KN2snK2.js";
import { t as FormattedNarrative } from "../chunks/CHiWmlVe2.js";
import { t as ConflictDialog } from "../chunks/yrdkecGH2.js";
import { n as FinancialStatusBadge, t as TransactionTypeChip } from "../chunks/Dxh8BGmS2.js";
import { n as TransactionApproveDialog, t as TransactionRejectDialog } from "../chunks/decAq0L52.js";
//#region src/routes/(app)/suppliers/returns/+page.svelte
var root = from_html(`<!> <span> </span>`, 1);
var root_1 = from_html(`<option> </option>`);
var root_2 = from_html(`<button type="button" class="text-xs font-semibold text-destructive hover:underline ml-1.5 cursor-pointer">Clear Date</button>`);
var root_3 = from_html(`<span class="inline-flex items-center gap-1 bg-primary/10 text-primary px-2.5 py-1 rounded-full border border-primary/20 font-medium"> <button class="hover:text-destructive shrink-0 cursor-pointer"><!></button></span>`);
var root_4 = from_html(`<span class="inline-flex items-center gap-1 bg-muted px-2.5 py-1 rounded-full border border-border text-foreground font-medium"> <button class="hover:text-destructive shrink-0 cursor-pointer"><!></button></span>`);
var root_5 = from_html(`<span class="inline-flex items-center gap-1 bg-muted px-2.5 py-1 rounded-full border border-border text-foreground"> <button class="hover:text-destructive shrink-0 cursor-pointer"><!></button></span>`);
var root_6 = from_html(`<div class="flex flex-wrap items-center gap-2 pt-2 border-t border-border/50 text-[11px]"><span class="text-muted-foreground font-medium mr-1">Active filters:</span> <!> <!> <!> <!> <button class="text-xs font-semibold text-primary hover:underline ml-auto cursor-pointer">Clear All</button></div>`);
var root_7 = from_html(`<div class="hidden md:block bg-card border border-border rounded-2xl overflow-hidden"><!></div> <div class="block md:hidden space-y-3"><!></div>`, 1);
var root_8 = from_html(`<div class="bg-card border border-border rounded-2xl p-6 text-center"><!></div>`);
var root_9 = from_html(`<!> <span class="truncate max-w-[140px]"> </span>`, 1);
var root_10 = from_html(`<span class="text-muted-foreground">-</span>`);
var root_11 = from_html(`<span class="truncate max-w-[140px]"> </span>`);
var root_12 = from_html(`<a class="inline-flex items-center gap-1 p-1 px-1.5 rounded-md bg-muted hover:bg-muted/80 text-foreground font-mono text-[11px] border border-border/60 transition-colors" title="Open operational reference details"><span class="text-[9px] font-bold uppercase text-primary"> </span> <span class="truncate max-w-[100px]"> </span> <!></a>`);
var root_13 = from_html(`<div class="inline-flex items-center gap-1 p-1 px-1.5 rounded-md bg-muted text-foreground font-mono text-[11px] border border-border/60"><span class="text-[9px] font-bold uppercase text-primary"> </span> <span class="truncate max-w-[100px]"> </span></div>`);
var root_14 = from_html(`<div class="flex flex-col gap-0.5"><!></div>`);
var root_15 = from_html(`<span class="text-muted-foreground text-xs">-</span>`);
var root_16 = from_html(`<div class="flex items-center gap-1"><!> <span> </span></div>`);
var root_17 = from_html(`<div class="flex items-center gap-1 text-emerald-600 dark:text-emerald-400"><!> <span> </span></div>`);
var root_18 = from_html(`<div class="flex items-center gap-1 text-destructive"><!> <span> </span></div>`);
var root_19 = from_html(`<!> <!>`, 1);
var root_20 = from_html(`<tr class="hover:bg-muted/30 transition-colors group"><td class="py-3 px-4 font-mono font-medium text-foreground whitespace-nowrap"><a class="hover:text-primary hover:underline font-bold"> </a> <div class="text-[10px] text-muted-foreground font-sans font-normal mt-0.5"><!></div></td><td class="py-3 px-4 whitespace-nowrap"><div class="flex flex-col gap-0.5"><!> <span class="text-[10px] text-muted-foreground font-mono"> </span></div></td><td class="py-3 px-4 text-xs"><div class="flex flex-col gap-1"><div class="flex items-center gap-1.5 text-foreground font-medium"><!></div> <div class="flex items-center gap-1 text-[11px] text-muted-foreground"><span class="text-primary font-bold">→</span> <!></div></div></td><td class="py-3 px-4 max-w-[240px]"><div class="text-xs text-foreground/90 line-clamp-2"><!></div></td><td class="py-3 px-4 whitespace-nowrap"><!></td><td class="py-3 px-4 text-right whitespace-nowrap"><div class="font-bold font-mono text-foreground text-sm"><!></div></td><td class="py-3 px-4 text-center whitespace-nowrap"><!></td><td class="py-3 px-4 text-[11px] whitespace-nowrap text-muted-foreground"><div class="flex flex-col gap-0.5"><!> <!></div></td><td class="py-3 px-4 text-right whitespace-nowrap"><div class="flex items-center justify-end gap-1.5"><a class="text-xs font-semibold text-primary hover:underline px-2 py-1 rounded-lg hover:bg-primary/10 transition-colors">Details</a> <!></div></td></tr>`);
var root_21 = from_html(`<div class="text-xs text-foreground/80 line-clamp-2"> </div>`);
var root_22 = from_html(`<div class="bg-card border border-border rounded-2xl p-4 space-y-3 shadow-xs"><div class="flex items-start justify-between gap-2"><div><a class="font-mono font-bold text-sm text-foreground hover:text-primary hover:underline"> </a> <div class="text-xs text-muted-foreground"><!></div></div> <!></div> <div class="flex items-center justify-between py-2 border-y border-border/50 text-xs"><!> <div class="font-bold font-mono text-sm text-foreground"><!></div></div> <!> <div class="flex items-center justify-between pt-1"><span class="text-[11px] text-muted-foreground font-mono"> </span> <a class="text-xs font-semibold text-primary hover:underline">View Full Audit Trail →</a></div></div>`);
var root_23 = from_html(`<div class="hidden md:block bg-card border border-border rounded-2xl overflow-hidden shadow-xs"><div class="overflow-x-auto"><table class="w-full text-left border-collapse text-xs"><thead><tr class="border-b border-border bg-muted/40 text-[11px] uppercase tracking-wider font-semibold text-muted-foreground select-none"><th class="py-3.5 px-4">Transaction</th><th class="py-3.5 px-4">Type</th><th class="py-3.5 px-4">Financial Flow</th><th class="py-3.5 px-4">Narrative Explanation</th><th class="py-3.5 px-4">Reference</th><th class="py-3.5 px-4 text-right">Amount</th><th class="py-3.5 px-4 text-center">Status</th><th class="py-3.5 px-4">Audit</th><th class="py-3.5 px-4 text-right">Actions</th></tr></thead><tbody class="divide-y divide-border/60"></tbody></table></div></div> <div class="block md:hidden space-y-3"></div>`, 1);
var root_24 = from_html(`<div class="space-y-6"><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"><div class="flex flex-col gap-1"><div class="flex items-center gap-2"><div class="p-2 rounded-xl bg-primary/10 text-primary"><!></div> <div><h1 class="text-xl font-bold text-foreground font-sans">Sales Return and Purchase Return</h1> <p class="text-xs text-muted-foreground">Complete audit workspace for supplier purchase returns (incoming cash) and customer sales returns (outgoing refunds).</p></div></div></div> <div class="flex items-center gap-2 shrink-0"><!> <!></div></div> <div class="bg-card border border-border rounded-2xl p-4 space-y-4 shadow-xs"><div class="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3"><div class="inline-flex p-1 bg-muted/60 rounded-xl border border-border"><button type="button">All Returns</button> <button type="button"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Purchase Returns</button> <button type="button"><span class="w-1.5 h-1.5 rounded-full bg-rose-500"></span> Sales Returns</button></div> <div class="flex items-center gap-2"><select class="text-xs p-2 rounded-xl border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-foreground font-medium min-w-36"><option>All Statuses</option><!></select></div></div> <div class="relative"><!> <input type="text" placeholder="Search by Document Number, Customer, Supplier, Reference ID, Bank, Account, Reason, or Narrative..." class="w-full text-xs pl-9.5 pr-4 py-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary placeholder-muted-foreground/60 leading-relaxed font-medium"/></div> <div class="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-border/60 text-xs"><div class="flex flex-wrap items-center gap-2"><div class="flex items-center gap-1.5 text-muted-foreground font-semibold"><!> <span>Date Range:</span></div> <input type="date" class="h-8.5 bg-background border border-border rounded-xl px-2.5 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-primary" title="Start Date"/> <span class="text-muted-foreground font-medium">—</span> <input type="date" class="h-8.5 bg-background border border-border rounded-xl px-2.5 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-primary" title="End Date"/> <!></div> <div class="flex items-center gap-1.5 text-[11px]"><button type="button" class="px-2.5 py-1 rounded-lg border border-border bg-muted/40 hover:bg-muted font-medium transition-colors cursor-pointer text-foreground">Today</button> <button type="button" class="px-2.5 py-1 rounded-lg border border-border bg-muted/40 hover:bg-muted font-medium transition-colors cursor-pointer text-foreground">This Week</button> <button type="button" class="px-2.5 py-1 rounded-lg border border-border bg-muted/40 hover:bg-muted font-medium transition-colors cursor-pointer text-foreground">This Month</button></div></div> <!></div> <!></div> <!> <!>`, 1);
function _page($$anchor, $$props) {
	push($$props, true);
	const $page = () => store_get(page, "$page", $$stores);
	const [$$stores, $$cleanup] = setup_stores();
	let transactions = state(proxy([]));
	let loading = state(true);
	let errorMsg = state(null);
	let correlationId = state("");
	let activeTab = state("all");
	let statusFilter = state("");
	let startDate = state("");
	let endDate = state("");
	let searchInput = state("");
	let searchTimeout;
	let selectedTxId = state(null);
	let approveDialogOpen = state(false);
	let rejectDialogOpen = state(false);
	let conflictDialogOpen = state(false);
	let abortController = null;
	let filteredTransactions = user_derived(() => {
		let list = get(transactions);
		if (get(activeTab) === "purchasereturn") list = list.filter((t) => (t.transactionType || "").toLowerCase() === "purchasereturn");
		else if (get(activeTab) === "salesreturn") list = list.filter((t) => (t.transactionType || "").toLowerCase() === "salesreturn");
		if (get(statusFilter)) list = list.filter((t) => (t.status || "").toLowerCase() === get(statusFilter).toLowerCase());
		const term = get(searchInput).trim().toLowerCase();
		if (!term) return list;
		return list.filter((t) => t.documentNumber && t.documentNumber.toLowerCase().includes(term) || t.sourceParty?.name && t.sourceParty.name.toLowerCase().includes(term) || t.destinationParty?.name && t.destinationParty.name.toLowerCase().includes(term) || t.sourceBankName && t.sourceBankName.toLowerCase().includes(term) || t.destinationBankName && t.destinationBankName.toLowerCase().includes(term) || t.sourceAccountName && t.sourceAccountName.toLowerCase().includes(term) || t.destinationAccountName && t.destinationAccountName.toLowerCase().includes(term) || t.displayNarrative && t.displayNarrative.toLowerCase().includes(term) || t.description && t.description.toLowerCase().includes(term) || t.referenceDisplayName && t.referenceDisplayName.toLowerCase().includes(term) || t.referenceId && t.referenceId.toLowerCase().includes(term) || t.supplierName && t.supplierName.toLowerCase().includes(term) || t.returnReason && t.returnReason.toLowerCase().includes(term) || t.createdByName && t.createdByName.toLowerCase().includes(term) || t.approvedByName && t.approvedByName.toLowerCase().includes(term) || t.rejectedByName && t.rejectedByName.toLowerCase().includes(term));
	});
	async function loadReturns() {
		set(loading, true);
		set(errorMsg, null);
		set(correlationId, "");
		if (abortController) abortController.abort();
		abortController = new AbortController();
		try {
			const res = await getTransactions({
				type: get(activeTab) === "all" ? "returns" : get(activeTab),
				status: get(statusFilter) || void 0,
				startDate: get(startDate) || void 0,
				endDate: get(endDate) || void 0,
				search: get(searchInput).trim() || void 0,
				page: 1,
				pageSize: 500
			}, abortController.signal);
			set(transactions, res, true);
		} catch (err) {
			if (err.name === "AbortError") return;
			set(errorMsg, err.message || "Failed to load returns data.", true);
			set(correlationId, err.correlationId || "", true);
		} finally {
			set(loading, false);
		}
	}
	function handleSearchInput(e) {
		const val = e.target.value;
		set(searchInput, val, true);
		clearTimeout(searchTimeout);
		searchTimeout = setTimeout(() => {
			loadReturns();
		}, 350);
	}
	function handleTabChange(tab) {
		set(activeTab, tab, true);
		loadReturns();
	}
	function handleDatePreset(preset) {
		const presets = getBahrainPresetRanges();
		if (preset === "today") {
			set(startDate, presets.today.startDate, true);
			set(endDate, presets.today.endDate, true);
		} else if (preset === "this_week") {
			set(startDate, presets.thisWeek.startDate, true);
			set(endDate, presets.thisWeek.endDate, true);
		} else if (preset === "this_month") {
			set(startDate, presets.thisMonth.startDate, true);
			set(endDate, presets.thisMonth.endDate, true);
		}
		loadReturns();
	}
	function clearAllFilters() {
		set(activeTab, "all");
		set(statusFilter, "");
		set(startDate, "");
		set(endDate, "");
		set(searchInput, "");
		loadReturns();
	}
	function openApprove(id) {
		set(selectedTxId, id, true);
		set(approveDialogOpen, true);
	}
	function openReject(id) {
		set(selectedTxId, id, true);
		set(rejectDialogOpen, true);
	}
	function handleActionSuccess() {
		loadReturns();
	}
	let exportingCSV = state(false);
	function exportReturnsCSV() {
		try {
			set(exportingCSV, true);
			const list = get(filteredTransactions);
			if (!list || list.length === 0) {
				toast.info("No returns records available to export.");
				return;
			}
			const csvHeaders = [
				"Document Number",
				"Date",
				"Return Type",
				"Status",
				"Narrative Explanation",
				"Source Channel / Party",
				"Destination Channel / Party",
				"Payment Method",
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
					t.transactionType ? t.transactionType.toUpperCase() : "RETURN",
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
			exportToCSV(`returns_export_${getBahrainDateString()}.csv`, csvHeaders, csvRows);
			toast.success("Returns CSV exported successfully.");
		} catch (err) {
			console.error("Failed to export returns CSV:", err);
			toast.error("Failed to export CSV: " + (err?.message || "Unknown error"));
		} finally {
			set(exportingCSV, false);
		}
	}
	let exportingPDF = state(false);
	async function exportReturnsPDF() {
		try {
			set(exportingPDF, true);
			toast.info("Generating Returns PDF with company logo...");
			await previewDocument("report", "transactions", {
				type: get(activeTab) === "all" ? "returns" : get(activeTab),
				status: get(statusFilter) || void 0,
				startDate: get(startDate) || void 0,
				endDate: get(endDate) || void 0,
				search: get(searchInput).trim() || void 0
			});
		} catch (err) {
			console.error("Failed to generate returns PDF:", err);
			toast.error("Failed to generate PDF: " + (err?.message || "Unknown error"));
		} finally {
			set(exportingPDF, false);
		}
	}
	onMount(() => {
		const urlParams = $page().url.searchParams;
		const typeParam = urlParams.get("type")?.toLowerCase();
		if (typeParam === "purchasereturn") set(activeTab, "purchasereturn");
		else if (typeParam === "salesreturn") set(activeTab, "salesreturn");
		const st = urlParams.get("status");
		if (st) set(statusFilter, st, true);
		const sd = urlParams.get("startDate") || urlParams.get("from");
		if (sd) set(startDate, sd, true);
		const ed = urlParams.get("endDate") || urlParams.get("to");
		if (ed) set(endDate, ed, true);
		loadReturns();
	});
	onDestroy(() => {
		if (abortController) abortController.abort();
		clearTimeout(searchTimeout);
	});
	var fragment = root_24();
	head("18zkqi3", ($$anchor) => {
		effect(() => {
			$document.title = "Sales Return and Purchase Return — Texas Accounts Portal";
		});
	});
	var div = first_child(fragment);
	var div_1 = child(div);
	var div_2 = child(div_1);
	var div_3 = child(div_2);
	var div_4 = child(div_3);
	Rotate_ccw(child(div_4), { class: "h-5 w-5" });
	reset(div_4);
	next(2);
	reset(div_3);
	reset(div_2);
	var div_5 = sibling(div_2, 2);
	var node_1 = child(div_5);
	{
		let $0 = user_derived(() => get(exportingCSV) || get(filteredTransactions).length === 0);
		Button(node_1, {
			variant: "outline",
			size: "sm",
			class: "h-9 rounded-xl text-xs font-semibold cursor-pointer border-border shadow-xs hover:bg-muted/80 flex items-center gap-1.5",
			onclick: exportReturnsCSV,
			get disabled() {
				return get($0);
			},
			children: ($$anchor, $$slotProps) => {
				var fragment_1 = root();
				var node_2 = first_child(fragment_1);
				{
					let $0 = user_derived(() => ["h-3.5 w-3.5", get(exportingCSV) ? "animate-spin" : ""].join(" "));
					Download(node_2, { get class() {
						return get($0);
					} });
				}
				var span = sibling(node_2, 2);
				var text = child(span, true);
				reset(span);
				template_effect(() => set_text(text, get(exportingCSV) ? "Exporting..." : "Export CSV"));
				append($$anchor, fragment_1);
			},
			$$slots: { default: true }
		});
	}
	var node_3 = sibling(node_1, 2);
	{
		let $0 = user_derived(() => get(exportingPDF) || get(filteredTransactions).length === 0);
		Button(node_3, {
			variant: "outline",
			size: "sm",
			class: "h-9 rounded-xl text-xs font-semibold cursor-pointer border-border shadow-xs hover:bg-muted/80 flex items-center gap-1.5",
			onclick: exportReturnsPDF,
			get disabled() {
				return get($0);
			},
			children: ($$anchor, $$slotProps) => {
				var fragment_2 = root();
				var node_4 = first_child(fragment_2);
				{
					let $0 = user_derived(() => ["h-3.5 w-3.5 text-primary", get(exportingPDF) ? "animate-spin" : ""].join(" "));
					File_text(node_4, { get class() {
						return get($0);
					} });
				}
				var span_1 = sibling(node_4, 2);
				var text_1 = child(span_1, true);
				reset(span_1);
				template_effect(() => set_text(text_1, get(exportingPDF) ? "Generating..." : "Export PDF"));
				append($$anchor, fragment_2);
			},
			$$slots: { default: true }
		});
	}
	reset(div_5);
	reset(div_1);
	var div_6 = sibling(div_1, 2);
	var div_7 = child(div_6);
	var div_8 = child(div_7);
	var button = child(div_8);
	var button_1 = sibling(button, 2);
	var button_2 = sibling(button_1, 2);
	reset(div_8);
	var div_9 = sibling(div_8, 2);
	var select = child(div_9);
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
	reset(div_9);
	reset(div_7);
	var div_10 = sibling(div_7, 2);
	var node_6 = child(div_10);
	Search(node_6, { class: "absolute left-3.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground/60" });
	var input = sibling(node_6, 2);
	remove_input_defaults(input);
	reset(div_10);
	var div_11 = sibling(div_10, 2);
	var div_12 = child(div_11);
	var div_13 = child(div_12);
	Calendar(child(div_13), { class: "h-3.5 w-3.5 text-primary" });
	next(2);
	reset(div_13);
	var input_1 = sibling(div_13, 2);
	remove_input_defaults(input_1);
	var input_2 = sibling(input_1, 4);
	remove_input_defaults(input_2);
	var node_8 = sibling(input_2, 2);
	var consequent = ($$anchor) => {
		var button_3 = root_2();
		delegated("click", button_3, () => {
			set(startDate, "");
			set(endDate, "");
			loadReturns();
		});
		append($$anchor, button_3);
	};
	if_block(node_8, ($$render) => {
		if (get(startDate) || get(endDate)) $$render(consequent);
	});
	reset(div_12);
	var div_14 = sibling(div_12, 2);
	var button_4 = child(div_14);
	var button_5 = sibling(button_4, 2);
	var button_6 = sibling(button_5, 2);
	reset(div_14);
	reset(div_11);
	var node_9 = sibling(div_11, 2);
	var consequent_5 = ($$anchor) => {
		var div_15 = root_6();
		var node_10 = sibling(child(div_15), 2);
		var consequent_1 = ($$anchor) => {
			var span_2 = root_3();
			var text_3 = child(span_2);
			var button_7 = sibling(text_3);
			X(child(button_7), { class: "h-3 w-3" });
			reset(button_7);
			reset(span_2);
			template_effect(() => set_text(text_3, `Search: "${get(searchInput) ?? ""}" `));
			delegated("click", button_7, () => {
				set(searchInput, "");
				loadReturns();
			});
			append($$anchor, span_2);
		};
		if_block(node_10, ($$render) => {
			if (get(searchInput)) $$render(consequent_1);
		});
		var node_12 = sibling(node_10, 2);
		var consequent_2 = ($$anchor) => {
			var span_3 = root_4();
			var text_4 = child(span_3);
			var button_8 = sibling(text_4);
			X(child(button_8), { class: "h-3 w-3" });
			reset(button_8);
			reset(span_3);
			template_effect(() => set_text(text_4, `Type: ${get(activeTab) === "purchasereturn" ? "Purchase Returns" : "Sales Returns"} `));
			delegated("click", button_8, () => handleTabChange("all"));
			append($$anchor, span_3);
		};
		if_block(node_12, ($$render) => {
			if (get(activeTab) !== "all") $$render(consequent_2);
		});
		var node_14 = sibling(node_12, 2);
		var consequent_3 = ($$anchor) => {
			var span_4 = root_5();
			var text_5 = child(span_4);
			var button_9 = sibling(text_5);
			X(child(button_9), { class: "h-3 w-3" });
			reset(button_9);
			reset(span_4);
			template_effect(() => set_text(text_5, `Status: ${(TRANSACTION_STATUS_CONFIG[get(statusFilter)]?.label || get(statusFilter)) ?? ""} `));
			delegated("click", button_9, () => {
				set(statusFilter, "");
				loadReturns();
			});
			append($$anchor, span_4);
		};
		if_block(node_14, ($$render) => {
			if (get(statusFilter)) $$render(consequent_3);
		});
		var node_16 = sibling(node_14, 2);
		var consequent_4 = ($$anchor) => {
			var span_5 = root_3();
			var text_6 = child(span_5);
			var button_10 = sibling(text_6);
			X(child(button_10), { class: "h-3 w-3" });
			reset(button_10);
			reset(span_5);
			template_effect(() => set_text(text_6, `Date: ${(get(startDate) || "Start") ?? ""} → ${(get(endDate) || "End") ?? ""} `));
			delegated("click", button_10, () => {
				set(startDate, "");
				set(endDate, "");
				loadReturns();
			});
			append($$anchor, span_5);
		};
		if_block(node_16, ($$render) => {
			if (get(startDate) || get(endDate)) $$render(consequent_4);
		});
		var button_11 = sibling(node_16, 2);
		reset(div_15);
		delegated("click", button_11, clearAllFilters);
		append($$anchor, div_15);
	};
	if_block(node_9, ($$render) => {
		if (get(searchInput) || get(statusFilter) || get(startDate) || get(endDate) || get(activeTab) !== "all") $$render(consequent_5);
	});
	reset(div_6);
	var node_18 = sibling(div_6, 2);
	var consequent_6 = ($$anchor) => {
		ErrorState($$anchor, {
			get message() {
				return get(errorMsg);
			},
			get correlationId() {
				return get(correlationId);
			},
			retryAction: loadReturns
		});
	};
	var consequent_7 = ($$anchor) => {
		var fragment_4 = root_7();
		var div_16 = first_child(fragment_4);
		FinancialTableSkeleton(child(div_16), {
			rows: 10,
			columns: 9
		});
		reset(div_16);
		var div_17 = sibling(div_16, 2);
		FinancialCardSkeleton(child(div_17), { count: 5 });
		reset(div_17);
		append($$anchor, fragment_4);
	};
	var consequent_8 = ($$anchor) => {
		var div_18 = root_8();
		EmptyState(child(div_18), {
			title: "No Return Records Found",
			description: "No sales returns or purchase returns match your active filter criteria.",
			actionLabel: "Reset Filters",
			onAction: clearAllFilters
		});
		reset(div_18);
		append($$anchor, div_18);
	};
	var alternate_4 = ($$anchor) => {
		var fragment_5 = root_23();
		var div_19 = first_child(fragment_5);
		var div_20 = child(div_19);
		var table = child(div_20);
		var tbody = sibling(child(table));
		each(tbody, 21, () => get(filteredTransactions), (tx) => tx.id, ($$anchor, tx) => {
			var tr = root_20();
			var td = child(tr);
			var a = child(td);
			var text_7 = child(a, true);
			reset(a);
			var div_21 = sibling(a, 2);
			DateDisplay(child(div_21), {
				get date() {
					return get(tx).createdAt;
				},
				format: "short"
			});
			reset(div_21);
			reset(td);
			var td_1 = sibling(td);
			var div_22 = child(td_1);
			var node_23 = child(div_22);
			TransactionTypeChip(node_23, { get type() {
				return get(tx).transactionType;
			} });
			var span_6 = sibling(node_23, 2);
			var text_8 = child(span_6, true);
			reset(span_6);
			reset(div_22);
			reset(td_1);
			var td_2 = sibling(td_1);
			var div_23 = child(td_2);
			var div_24 = child(div_23);
			var node_24 = child(div_24);
			var consequent_9 = ($$anchor) => {
				var fragment_6 = root_9();
				var node_25 = first_child(fragment_6);
				Building_2(node_25, { class: "h-3.5 w-3.5 text-primary/70 shrink-0" });
				var span_7 = sibling(node_25, 2);
				var text_9 = child(span_7, true);
				reset(span_7);
				template_effect(() => {
					set_attribute(span_7, "title", get(tx).sourceBankName);
					set_text(text_9, get(tx).sourceBankName);
				});
				append($$anchor, fragment_6);
			};
			var consequent_10 = ($$anchor) => {
				var fragment_7 = root_9();
				var node_26 = first_child(fragment_7);
				Wallet(node_26, { class: "h-3.5 w-3.5 text-primary/70 shrink-0" });
				var span_8 = sibling(node_26, 2);
				var text_10 = child(span_8, true);
				reset(span_8);
				template_effect(() => {
					set_attribute(span_8, "title", get(tx).sourceAccountName);
					set_text(text_10, get(tx).sourceAccountName);
				});
				append($$anchor, fragment_7);
			};
			var consequent_11 = ($$anchor) => {
				var fragment_8 = root_9();
				var node_27 = first_child(fragment_8);
				User(node_27, { class: "h-3.5 w-3.5 text-muted-foreground shrink-0" });
				var span_9 = sibling(node_27, 2);
				var text_11 = child(span_9, true);
				reset(span_9);
				template_effect(() => {
					set_attribute(span_9, "title", get(tx).sourceParty.name);
					set_text(text_11, get(tx).sourceParty.name);
				});
				append($$anchor, fragment_8);
			};
			var consequent_12 = ($$anchor) => {
				var fragment_9 = root_9();
				var node_28 = first_child(fragment_9);
				User(node_28, { class: "h-3.5 w-3.5 text-muted-foreground shrink-0" });
				var span_10 = sibling(node_28, 2);
				var text_12 = child(span_10, true);
				reset(span_10);
				template_effect(() => {
					set_attribute(span_10, "title", get(tx).supplierName);
					set_text(text_12, get(tx).supplierName);
				});
				append($$anchor, fragment_9);
			};
			var alternate = ($$anchor) => {
				append($$anchor, root_10());
			};
			if_block(node_24, ($$render) => {
				if (get(tx).sourceBankName) $$render(consequent_9);
				else if (get(tx).sourceAccountName) $$render(consequent_10, 1);
				else if (get(tx).sourceParty) $$render(consequent_11, 2);
				else if (get(tx).supplierName) $$render(consequent_12, 3);
				else $$render(alternate, -1);
			});
			reset(div_24);
			var div_25 = sibling(div_24, 2);
			var node_29 = sibling(child(div_25), 2);
			var consequent_13 = ($$anchor) => {
				var span_12 = root_11();
				var text_13 = child(span_12, true);
				reset(span_12);
				template_effect(() => {
					set_attribute(span_12, "title", get(tx).destinationBankName);
					set_text(text_13, get(tx).destinationBankName);
				});
				append($$anchor, span_12);
			};
			var consequent_14 = ($$anchor) => {
				var span_13 = root_11();
				var text_14 = child(span_13, true);
				reset(span_13);
				template_effect(() => {
					set_attribute(span_13, "title", get(tx).destinationAccountName);
					set_text(text_14, get(tx).destinationAccountName);
				});
				append($$anchor, span_13);
			};
			var consequent_15 = ($$anchor) => {
				var span_14 = root_11();
				var text_15 = child(span_14, true);
				reset(span_14);
				template_effect(() => {
					set_attribute(span_14, "title", get(tx).destinationParty.name);
					set_text(text_15, get(tx).destinationParty.name);
				});
				append($$anchor, span_14);
			};
			var consequent_16 = ($$anchor) => {
				var span_15 = root_11();
				var text_16 = child(span_15, true);
				reset(span_15);
				template_effect(() => {
					set_attribute(span_15, "title", get(tx).recipientName);
					set_text(text_16, get(tx).recipientName);
				});
				append($$anchor, span_15);
			};
			var alternate_1 = ($$anchor) => {
				append($$anchor, root_10());
			};
			if_block(node_29, ($$render) => {
				if (get(tx).destinationBankName) $$render(consequent_13);
				else if (get(tx).destinationAccountName) $$render(consequent_14, 1);
				else if (get(tx).destinationParty) $$render(consequent_15, 2);
				else if (get(tx).recipientName) $$render(consequent_16, 3);
				else $$render(alternate_1, -1);
			});
			reset(div_25);
			reset(div_23);
			reset(td_2);
			var td_3 = sibling(td_2);
			var div_26 = child(td_3);
			var node_30 = child(div_26);
			{
				let $0 = user_derived(() => get(tx).displayNarrative || get(tx).description || get(tx).returnReason || "");
				FormattedNarrative(node_30, { get text() {
					return get($0);
				} });
			}
			reset(div_26);
			reset(td_3);
			var td_4 = sibling(td_3);
			var node_31 = child(td_4);
			var consequent_18 = ($$anchor) => {
				var div_27 = root_14();
				var node_32 = child(div_27);
				var consequent_17 = ($$anchor) => {
					var a_1 = root_12();
					var span_17 = child(a_1);
					var text_17 = child(span_17, true);
					reset(span_17);
					var span_18 = sibling(span_17, 2);
					var text_18 = child(span_18, true);
					reset(span_18);
					External_link(sibling(span_18, 2), { class: "h-2.5 w-2.5 text-muted-foreground" });
					reset(a_1);
					template_effect(() => {
						set_attribute(a_1, "href", get(tx).referenceUrl);
						set_text(text_17, get(tx).referenceDisplayName || get(tx).referenceType || "Ref");
						set_text(text_18, get(tx).referenceId);
					});
					append($$anchor, a_1);
				};
				var alternate_2 = ($$anchor) => {
					var div_28 = root_13();
					var span_19 = child(div_28);
					var text_19 = child(span_19, true);
					reset(span_19);
					var span_20 = sibling(span_19, 2);
					var text_20 = child(span_20, true);
					reset(span_20);
					reset(div_28);
					template_effect(() => {
						set_text(text_19, get(tx).referenceDisplayName || get(tx).referenceType || "Ref");
						set_text(text_20, get(tx).referenceId);
					});
					append($$anchor, div_28);
				};
				if_block(node_32, ($$render) => {
					if (get(tx).referenceUrl) $$render(consequent_17);
					else $$render(alternate_2, -1);
				});
				reset(div_27);
				append($$anchor, div_27);
			};
			var alternate_3 = ($$anchor) => {
				append($$anchor, root_15());
			};
			if_block(node_31, ($$render) => {
				if (get(tx).referenceId) $$render(consequent_18);
				else $$render(alternate_3, -1);
			});
			reset(td_4);
			var td_5 = sibling(td_4);
			var div_29 = child(td_5);
			MoneyDisplay(child(div_29), { get amount() {
				return get(tx).amount;
			} });
			reset(div_29);
			reset(td_5);
			var td_6 = sibling(td_5);
			FinancialStatusBadge(child(td_6), { get status() {
				return get(tx).status;
			} });
			reset(td_6);
			var td_7 = sibling(td_6);
			var div_30 = child(td_7);
			var node_36 = child(div_30);
			var consequent_19 = ($$anchor) => {
				var div_31 = root_16();
				var node_37 = child(div_31);
				User(node_37, { class: "h-3 w-3 text-muted-foreground/70" });
				var span_22 = sibling(node_37, 2);
				var text_21 = child(span_22, true);
				reset(span_22);
				reset(div_31);
				template_effect(() => set_text(text_21, get(tx).createdByName));
				append($$anchor, div_31);
			};
			if_block(node_36, ($$render) => {
				if (get(tx).createdByName) $$render(consequent_19);
			});
			var node_38 = sibling(node_36, 2);
			var consequent_20 = ($$anchor) => {
				var div_32 = root_17();
				var node_39 = child(div_32);
				Check(node_39, { class: "h-3 w-3" });
				var span_23 = sibling(node_39, 2);
				var text_22 = child(span_23, true);
				reset(span_23);
				reset(div_32);
				template_effect(() => set_text(text_22, get(tx).approvedByName));
				append($$anchor, div_32);
			};
			var consequent_21 = ($$anchor) => {
				var div_33 = root_18();
				var node_40 = child(div_33);
				Ban(node_40, { class: "h-3 w-3" });
				var span_24 = sibling(node_40, 2);
				var text_23 = child(span_24, true);
				reset(span_24);
				reset(div_33);
				template_effect(() => set_text(text_23, get(tx).rejectedByName));
				append($$anchor, div_33);
			};
			if_block(node_38, ($$render) => {
				if (get(tx).approvedByName) $$render(consequent_20);
				else if (get(tx).rejectedByName) $$render(consequent_21, 1);
			});
			reset(div_30);
			reset(td_7);
			var td_8 = sibling(td_7);
			var div_34 = child(td_8);
			var a_2 = child(div_34);
			var node_41 = sibling(a_2, 2);
			var consequent_22 = ($$anchor) => {
				var fragment_10 = root_19();
				var node_42 = first_child(fragment_10);
				Button(node_42, {
					variant: "ghost",
					size: "sm",
					class: "h-7 w-7 p-0 text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 rounded-lg cursor-pointer",
					title: "Quick Approve",
					onclick: () => openApprove(get(tx).id),
					children: ($$anchor, $$slotProps) => {
						Check($$anchor, { class: "h-3.5 w-3.5" });
					},
					$$slots: { default: true }
				});
				Button(sibling(node_42, 2), {
					variant: "ghost",
					size: "sm",
					class: "h-7 w-7 p-0 text-destructive hover:text-destructive hover:bg-red-50 dark:hover:bg-red-950/40 rounded-lg cursor-pointer",
					title: "Quick Reject",
					onclick: () => openReject(get(tx).id),
					children: ($$anchor, $$slotProps) => {
						Ban($$anchor, { class: "h-3.5 w-3.5" });
					},
					$$slots: { default: true }
				});
				append($$anchor, fragment_10);
			};
			var d = user_derived(() => get(tx).status === "pending" && hasRole("master_accountant"));
			if_block(node_41, ($$render) => {
				if (get(d)) $$render(consequent_22);
			});
			reset(div_34);
			reset(td_8);
			reset(tr);
			template_effect(($0) => {
				set_attribute(a, "href", `/transactions/${get(tx).id ?? ""}`);
				set_attribute(a, "title", `View transaction #${get(tx).id ?? ""} audit trail`);
				set_text(text_7, $0);
				set_text(text_8, get(tx).paymentMethodName || get(tx).paymentMethod || "Direct");
				set_attribute(a_2, "href", `/transactions/${get(tx).id ?? ""}`);
			}, [() => get(tx).documentNumber || `TXSTRN${String(get(tx).id).padStart(6, "0")}`]);
			append($$anchor, tr);
		});
		reset(tbody);
		reset(table);
		reset(div_20);
		reset(div_19);
		var div_35 = sibling(div_19, 2);
		each(div_35, 21, () => get(filteredTransactions), (tx) => tx.id, ($$anchor, tx) => {
			var div_36 = root_22();
			var div_37 = child(div_36);
			var div_38 = child(div_37);
			var a_3 = child(div_38);
			var text_24 = child(a_3, true);
			reset(a_3);
			var div_39 = sibling(a_3, 2);
			DateDisplay(child(div_39), {
				get date() {
					return get(tx).createdAt;
				},
				format: "short"
			});
			reset(div_39);
			reset(div_38);
			FinancialStatusBadge(sibling(div_38, 2), { get status() {
				return get(tx).status;
			} });
			reset(div_37);
			var div_40 = sibling(div_37, 2);
			var node_46 = child(div_40);
			TransactionTypeChip(node_46, { get type() {
				return get(tx).transactionType;
			} });
			var div_41 = sibling(node_46, 2);
			MoneyDisplay(child(div_41), { get amount() {
				return get(tx).amount;
			} });
			reset(div_41);
			reset(div_40);
			var node_48 = sibling(div_40, 2);
			var consequent_23 = ($$anchor) => {
				var div_42 = root_21();
				var text_25 = child(div_42, true);
				reset(div_42);
				template_effect(() => set_text(text_25, get(tx).displayNarrative || get(tx).description || get(tx).returnReason));
				append($$anchor, div_42);
			};
			if_block(node_48, ($$render) => {
				if (get(tx).displayNarrative || get(tx).description || get(tx).returnReason) $$render(consequent_23);
			});
			var div_43 = sibling(node_48, 2);
			var span_25 = child(div_43);
			var text_26 = child(span_25);
			reset(span_25);
			var a_4 = sibling(span_25, 2);
			reset(div_43);
			reset(div_36);
			template_effect(($0) => {
				set_attribute(a_3, "href", `/transactions/${get(tx).id ?? ""}`);
				set_text(text_24, $0);
				set_text(text_26, `By: ${(get(tx).createdByName || "System") ?? ""}`);
				set_attribute(a_4, "href", `/transactions/${get(tx).id ?? ""}`);
			}, [() => get(tx).documentNumber || `TXSTRN${String(get(tx).id).padStart(6, "0")}`]);
			append($$anchor, div_36);
		});
		reset(div_35);
		append($$anchor, fragment_5);
	};
	if_block(node_18, ($$render) => {
		if (get(errorMsg)) $$render(consequent_6);
		else if (get(loading)) $$render(consequent_7, 1);
		else if (get(filteredTransactions).length === 0) $$render(consequent_8, 2);
		else $$render(alternate_4, -1);
	});
	reset(div);
	var node_49 = sibling(div, 2);
	var consequent_24 = ($$anchor) => {
		var fragment_13 = root_19();
		var node_50 = first_child(fragment_13);
		TransactionApproveDialog(node_50, {
			get transactionId() {
				return get(selectedTxId);
			},
			onConfirm: handleActionSuccess,
			get open() {
				return get(approveDialogOpen);
			},
			set open($$value) {
				set(approveDialogOpen, $$value, true);
			}
		});
		TransactionRejectDialog(sibling(node_50, 2), {
			get transactionId() {
				return get(selectedTxId);
			},
			onConfirm: handleActionSuccess,
			get open() {
				return get(rejectDialogOpen);
			},
			set open($$value) {
				set(rejectDialogOpen, $$value, true);
			}
		});
		append($$anchor, fragment_13);
	};
	if_block(node_49, ($$render) => {
		if (get(selectedTxId) !== null) $$render(consequent_24);
	});
	ConflictDialog(sibling(node_49, 2), {
		onReload: handleActionSuccess,
		get open() {
			return get(conflictDialogOpen);
		},
		set open($$value) {
			set(conflictDialogOpen, $$value, true);
		}
	});
	template_effect(($0, $1, $2) => {
		set_class(button, 1, $0);
		set_class(button_1, 1, $1);
		set_class(button_2, 1, $2);
		if (select_value !== (select_value = get(statusFilter))) select.value = (select.__value = get(statusFilter)) ?? "", select_option(select, get(statusFilter));
		set_value(input, get(searchInput));
		set_value(input_1, get(startDate));
		set_value(input_2, get(endDate));
	}, [
		() => clsx(["px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer", get(activeTab) === "all" ? "bg-background text-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"].join(" ")),
		() => clsx(["px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center gap-1.5", get(activeTab) === "purchasereturn" ? "bg-background text-emerald-600 dark:text-emerald-400 shadow-xs" : "text-muted-foreground hover:text-foreground"].join(" ")),
		() => clsx(["px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center gap-1.5", get(activeTab) === "salesreturn" ? "bg-background text-rose-600 dark:text-rose-400 shadow-xs" : "text-muted-foreground hover:text-foreground"].join(" "))
	]);
	delegated("click", button, () => handleTabChange("all"));
	delegated("click", button_1, () => handleTabChange("purchasereturn"));
	delegated("click", button_2, () => handleTabChange("salesreturn"));
	delegated("change", select, (e) => {
		set(statusFilter, e.target.value, true);
		loadReturns();
	});
	delegated("input", input, handleSearchInput);
	delegated("change", input_1, (e) => {
		set(startDate, e.target.value, true);
		loadReturns();
	});
	delegated("change", input_2, (e) => {
		set(endDate, e.target.value, true);
		loadReturns();
	});
	delegated("click", button_4, () => handleDatePreset("today"));
	delegated("click", button_5, () => handleDatePreset("this_week"));
	delegated("click", button_6, () => handleDatePreset("this_month"));
	append($$anchor, fragment);
	pop();
	$$cleanup();
}
delegate([
	"click",
	"change",
	"input"
]);
//#endregion
export { _page as component };

import { B as append, Bt as reset, Ct as user_derived, D as head, Et as store_get, H as from_html, I as if_block, K as delegate, N as each, Nt as pop, P as index, Pt as push, Q as get, R as set_text, T as clsx, Tt as setup_stores, V as comment, _ as set_attribute, b as bind_select_value, bt as state, dt as $document, g as remove_input_defaults, gt as proxy, ht as sibling, it as effect, m as bind_value, mt as first_child, ot as template_effect, pt as child, q as delegated, r as onMount, vt as set, w as set_class, zt as next } from "../chunks/dXkmWTgM.js";
import { t as goto } from "../chunks/CYr_8lmd.js";
import "../chunks/DhaYE-8x.js";
import { i as hasRole } from "../chunks/CZ6wEwBn.js";
import { r as toast } from "../chunks/CbPRQHfn.js";
import { t as Building_2 } from "../chunks/PAfPMPpZ.js";
import { t as Calendar } from "../chunks/DxFQ7Qxv.js";
import { t as Check } from "../chunks/blG6JRe7.js";
import { t as Coins } from "../chunks/B2DQy1SS2.js";
import { t as Credit_card } from "../chunks/DZ-rRKb92.js";
import { t as External_link } from "../chunks/ifddzD342.js";
import { t as File_down } from "../chunks/btBW28nf2.js";
import { t as File_spreadsheet } from "../chunks/B4BvDHOF2.js";
import { t as Funnel } from "../chunks/BlRZ0F4U2.js";
import { t as Landmark } from "../chunks/D_q7zQKx2.js";
import { t as Plus } from "../chunks/BObidJ7B.js";
import { t as Receipt } from "../chunks/4mbxDyuf.js";
import { t as Rotate_ccw } from "../chunks/CEB2WCBr.js";
import { t as Search } from "../chunks/D7t9qluE.js";
import { t as Tag } from "../chunks/lD5gNYPy.js";
import { t as Wallet } from "../chunks/BahXSy4P.js";
import { t as X } from "../chunks/wXHc9RNY.js";
import { i as formatDateOnly, o as getBahrainDateString } from "../chunks/Cu8_Vl4p.js";
import { t as page } from "../chunks/BRRuVw-N.js";
import { t as Button } from "../chunks/BhXsq3bC.js";
import { t as ErrorState } from "../chunks/CRMNR9wu.js";
import "../chunks/BANuLgpQ2.js";
import { t as FinancialTableSkeleton } from "../chunks/BifxP-5W2.js";
import { t as EmptyState } from "../chunks/DXyN7dIZ2.js";
import { t as MoneyDisplay } from "../chunks/CIVSRuaR2.js";
import { t as exportToCSV } from "../chunks/C74Z4VDd2.js";
import { t as previewDocument } from "../chunks/DE0GF4XN2.js";
import { r as getAccounts } from "../chunks/xKJyqFyV2.js";
import { n as getBanks } from "../chunks/DasZz51t2.js";
import { t as FinancialStatusBadge } from "../chunks/CkEQmYBL.js";
import { c as getExpenses, o as getExpenseHeaders, s as getExpenseSummary } from "../chunks/yJWWs2bl.js";
import { n as PAYMENT_METHOD_LABELS, t as EXPENSE_STATUS_LABELS } from "../chunks/rjZ5RTov.js";
import { d as getSuppliers, l as getSupplierPayments, m as rejectSupplierPayment, r as approveSupplierPayment } from "../chunks/B33zGGtL.js";
//#region src/routes/(app)/payments/+page.svelte
var root = from_html(`<!> Create Header`, 1);
var root_1 = from_html(`<!> Log Payment`, 1);
var root_2 = from_html(`<button type="button"><div class="absolute top-0 left-0 w-1 h-full bg-purple-500"></div> <span class="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Contra</span> <div class="flex items-baseline justify-between"><span class="text-lg font-bold text-foreground"> </span> <span class="text-xs font-semibold text-muted-foreground"><!></span></div></button>`);
var root_3 = from_html(`<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3"><button type="button"><div class="absolute top-0 left-0 w-1 h-full bg-primary"></div> <span class="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">All Categories</span> <div class="flex items-baseline justify-between"><span class="text-lg font-bold text-foreground"> </span> <span class="text-xs font-semibold text-muted-foreground"><!></span></div></button> <button type="button"><div class="absolute top-0 left-0 w-1 h-full bg-blue-500"></div> <span class="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Asset</span> <div class="flex items-baseline justify-between"><span class="text-lg font-bold text-foreground"> </span> <span class="text-xs font-semibold text-muted-foreground"><!></span></div></button> <button type="button"><div class="absolute top-0 left-0 w-1 h-full bg-amber-500"></div> <span class="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Liability</span> <div class="flex items-baseline justify-between"><span class="text-lg font-bold text-foreground"> </span> <span class="text-xs font-semibold text-muted-foreground"><!></span></div></button> <button type="button"><div class="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div> <span class="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Income</span> <div class="flex items-baseline justify-between"><span class="text-lg font-bold text-foreground"> </span> <span class="text-xs font-semibold text-muted-foreground"><!></span></div></button> <button type="button"><div class="absolute top-0 left-0 w-1 h-full bg-indigo-500"></div> <span class="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Capital</span> <div class="flex items-baseline justify-between"><span class="text-lg font-bold text-foreground"> </span> <span class="text-xs font-semibold text-muted-foreground"><!></span></div></button> <button type="button"><div class="absolute top-0 left-0 w-1 h-full bg-rose-500"></div> <span class="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Expenses</span> <div class="flex items-baseline justify-between"><span class="text-lg font-bold text-foreground"> </span> <span class="text-xs font-semibold text-muted-foreground"><!></span></div></button> <!></div>`);
var root_4 = from_html(`<button> </button>`);
var root_5 = from_html(`<option> </option>`);
var root_6 = from_html(`<!> Reset`, 1);
var root_7 = from_html(`<!> Export CSV`, 1);
var root_8 = from_html(`<!> Export PDF`, 1);
var root_9 = from_html(`<div class="bg-card border border-border rounded-2xl overflow-hidden shadow-xs"><!></div>`);
var root_10 = from_html(`<span class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-purple-500/10 text-purple-600 border border-purple-500/20 shadow-xs">Contra Transfer</span>`);
var root_11 = from_html(`<span class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">Incoming</span>`);
var root_12 = from_html(`<span class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-500/10 text-blue-600 border border-blue-500/20">Outgoing</span>`);
var root_13 = from_html(`<tr class="hover:bg-muted/10 transition-colors cursor-pointer"><td class="p-4 font-mono font-medium text-muted-foreground"> </td><td class="p-4"><!></td><td class="p-4 font-semibold text-foreground truncate max-w-[180px]"> </td><td class="p-4"><span> </span></td><td class="p-4 text-foreground truncate max-w-[250px]"> </td><td class="p-4 capitalize"> </td><td class="p-4"> </td><td class="p-4 text-right font-bold text-foreground"><!></td><td class="p-4"><span> </span></td></tr>`);
var root_14 = from_html(`<div class="bg-card border border-border rounded-2xl overflow-hidden shadow-xs"><div class="overflow-x-auto"><table class="w-full min-w-[850px] text-left border-collapse text-xs"><thead><tr class="bg-muted/30 border-b border-border text-muted-foreground font-semibold"><th class="p-4 w-28">Payment No.</th><th class="p-4 w-24">Direction</th><th class="p-4 w-40">Category Name</th><th class="p-4 w-32">Category Bucket</th><th class="p-4">Description</th><th class="p-4 w-28">Payment Method</th><th class="p-4 w-28">Date</th><th class="p-4 w-28 text-right">Amount</th><th class="p-4 w-24">Status</th></tr></thead><tbody class="divide-y divide-border/60"></tbody></table></div></div>`);
var root_15 = from_html(`<!> <div class="bg-card border border-border rounded-2xl p-4 shadow-xs space-y-4"><div class="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4"><div class="relative flex-1"><!> <input type="text" placeholder="Search by Payment #, Description, or Category Name..." class="pl-9 h-10 w-full bg-background border border-border rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground"/></div> <div class="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0"></div></div> <div class="flex flex-wrap items-center gap-3 pt-3 border-t border-border/60 text-xs"><div class="flex items-center gap-2"><!> <span class="font-medium text-muted-foreground">Date Range:</span> <input type="date" class="h-8 bg-background border border-border rounded-lg px-2 text-[11px] text-foreground focus:outline-none cursor-pointer"/> <span class="text-muted-foreground">—</span> <input type="date" class="h-8 bg-background border border-border rounded-lg px-2 text-[11px] text-foreground focus:outline-none cursor-pointer"/></div> <div class="flex items-center gap-2"><!> <span class="font-medium text-muted-foreground">Bucket:</span> <select class="h-8 bg-background border border-border rounded-lg px-2 text-[11px] text-foreground focus:outline-none cursor-pointer"><option>All Buckets</option><option>Asset</option><option>Liability</option><option>Income</option><option>Capital</option><option>Expenses</option><option>Contra</option></select></div> <div class="flex items-center gap-2"><!> <span class="font-medium text-muted-foreground">Category Name:</span> <select class="h-8 bg-background border border-border rounded-lg px-2 text-[11px] text-foreground focus:outline-none cursor-pointer max-w-[220px]"><option> </option><!></select></div> <!> <div class="flex items-center gap-2 ml-auto"><!> <!></div></div></div> <!>`, 1);
var root_16 = from_html(`<span class="text-[10px] font-mono font-medium text-muted-foreground"> </span>`);
var root_17 = from_html(`<button type="button" class="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20 hover:text-emerald-700 transition-colors cursor-pointer inline-flex items-center justify-center disabled:opacity-50" title="Approve Settlement"><!></button> <button type="button" class="p-1.5 rounded-lg bg-rose-500/10 text-rose-600 hover:bg-rose-500/20 hover:text-rose-700 transition-colors cursor-pointer inline-flex items-center justify-center disabled:opacity-50" title="Reject Settlement"><!></button>`, 1);
var root_18 = from_html(`<tr class="hover:bg-muted/10 transition-colors group cursor-pointer"><td class="p-4 font-mono font-bold text-foreground"> </td><td class="p-4"><div class="flex flex-col"><span class="font-bold text-foreground truncate max-w-[170px]"> </span> <!></div></td><td class="p-4"><span> </span></td><td class="p-4 font-medium text-foreground"><div class="flex items-center gap-1.5 truncate max-w-[150px]"><!> <span class="truncate"> </span></div></td><td class="p-4 font-mono text-muted-foreground truncate max-w-[110px]"> </td><td class="p-4 text-foreground truncate max-w-[220px]"> </td><td class="p-4 text-muted-foreground whitespace-nowrap"> </td><td class="p-4 text-right font-mono font-bold text-foreground whitespace-nowrap"><!></td><td class="p-4 text-center"><!></td><td class="p-4 text-center"><div class="flex items-center justify-center gap-1.5"><!> <button type="button" class="p-1.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors cursor-pointer inline-flex items-center justify-center" title="View Supplier Statement"><!></button></div></td></tr>`);
var root_19 = from_html(`<div class="bg-card border border-border rounded-2xl overflow-hidden shadow-xs"><div class="overflow-x-auto"><table class="w-full min-w-[950px] text-left border-collapse text-xs"><thead><tr class="bg-muted/30 border-b border-border text-muted-foreground font-semibold"><th class="p-4 w-32">Payment Ref</th><th class="p-4 w-44">Supplier</th><th class="p-4 w-36">Purpose</th><th class="p-4 w-36">Payment Channel</th><th class="p-4 w-28">Ref #</th><th class="p-4">Description</th><th class="p-4 w-28">Date</th><th class="p-4 w-28 text-right">Amount</th><th class="p-4 w-28 text-center">Status</th><th class="p-4 w-20 text-center">Action</th></tr></thead><tbody class="divide-y divide-border/60"></tbody></table></div></div>`);
var root_20 = from_html(`<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3"><button type="button"><div class="absolute top-0 left-0 w-1 h-full bg-primary"></div> <span class="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">All Settlements</span> <div class="flex items-baseline justify-between"><span class="text-lg font-bold text-foreground"> </span> <span class="text-xs font-semibold text-muted-foreground"><!></span></div></button> <button type="button"><div class="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div> <span class="text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">Wallet Top-up</span> <div class="flex items-baseline justify-between"><span class="text-lg font-bold text-emerald-600 dark:text-emerald-400"> </span> <span class="text-xs font-semibold text-muted-foreground"><!></span></div></button> <button type="button"><div class="absolute top-0 left-0 w-1 h-full bg-blue-500"></div> <span class="text-[10px] font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400">Credit Settlement</span> <div class="flex items-baseline justify-between"><span class="text-lg font-bold text-blue-600 dark:text-blue-400"> </span> <span class="text-xs font-semibold text-muted-foreground"><!></span></div></button> <button type="button"><div class="absolute top-0 left-0 w-1 h-full bg-purple-500"></div> <span class="text-[10px] font-bold uppercase tracking-wider text-purple-700 dark:text-purple-400">Advance Payment</span> <div class="flex items-baseline justify-between"><span class="text-lg font-bold text-purple-600 dark:text-purple-400"> </span> <span class="text-xs font-semibold text-muted-foreground"><!></span></div></button> <button type="button"><div class="absolute top-0 left-0 w-1 h-full bg-amber-500"></div> <span class="text-[10px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">Supplier Refund</span> <div class="flex items-baseline justify-between"><span class="text-lg font-bold text-amber-600 dark:text-amber-400"> </span> <span class="text-xs font-semibold text-muted-foreground"><!></span></div></button> <button type="button"><div class="absolute top-0 left-0 w-1 h-full bg-yellow-500"></div> <span class="text-[10px] font-bold uppercase tracking-wider text-yellow-700 dark:text-yellow-400">Pending Approval</span> <div class="flex items-baseline justify-between"><span class="text-lg font-bold text-yellow-600 dark:text-yellow-400"> </span> <span class="text-xs font-semibold text-muted-foreground"><!></span></div></button></div> <div class="bg-card border border-border rounded-2xl p-4 shadow-xs space-y-4"><div class="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4"><div class="relative flex-1"><!> <input type="text" placeholder="Search by Payment #, Supplier, Ref #, or Description..." class="pl-9 h-10 w-full bg-background border border-border rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground"/></div> <div class="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0"></div></div> <div class="flex flex-wrap items-center gap-3 pt-3 border-t border-border/60 text-xs"><div class="flex items-center gap-2"><!> <span class="font-medium text-muted-foreground">Date:</span> <input type="date" class="h-8 bg-background border border-border rounded-lg px-2 text-[11px] text-foreground focus:outline-none cursor-pointer"/> <span class="text-muted-foreground">—</span> <input type="date" class="h-8 bg-background border border-border rounded-lg px-2 text-[11px] text-foreground focus:outline-none cursor-pointer"/></div> <div class="flex items-center gap-2"><!> <span class="font-medium text-muted-foreground">Purpose:</span> <select class="h-8 bg-background border border-border rounded-lg px-2 text-[11px] text-foreground focus:outline-none cursor-pointer"><option>All Purposes</option><option>Prepaid Wallet Top-up</option><option>Credit Debt Settlement</option><option>Advance Payment</option><option>Supplier Refund</option></select></div> <div class="flex items-center gap-2"><!> <span class="font-medium text-muted-foreground">Supplier:</span> <select class="h-8 bg-background border border-border rounded-lg px-2 text-[11px] text-foreground focus:outline-none cursor-pointer max-w-[220px]"><option> </option><!></select></div> <!> <div class="flex items-center gap-2 ml-auto"><!></div></div></div> <!>`, 1);
var root_21 = from_html(`<div class="space-y-6"><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"><div class="flex flex-col gap-1"><h1 class="text-xl font-bold text-foreground">Payments & Settlements</h1> <p class="text-xs text-muted-foreground">Record operational expenses, supplier wallet top-ups, debt settlements, advance disbursements, and audit payouts.</p></div> <div class="flex items-center gap-2"><!> <!></div></div> <div class="flex items-center gap-2 p-1.5 bg-card border border-border rounded-2xl w-fit shadow-xs"><button type="button"><!> <span>General & Operational</span> <span> </span></button> <button type="button"><!> <span>Supplier Settlements & Top-ups</span> <span> </span></button></div>  <!></div>`);
function _page($$anchor, $$props) {
	push($$props, true);
	const $page = () => store_get(page, "$page", $$stores);
	const [$$stores, $$cleanup] = setup_stores();
	let activePaymentTab = state("expenses");
	let expenses = state(proxy([]));
	let headers = state(proxy([]));
	let summary = state(null);
	let supplierPayments = state(proxy([]));
	let suppliers = state(proxy([]));
	let cashAccounts = state(proxy([]));
	let bankAccounts = state(proxy([]));
	let loading = state(true);
	let errorMsg = state(null);
	let correlationId = state("");
	let searchVal = state("");
	let statusFilter = state("all");
	let categoryFilter = state("all");
	let headerFilter = state("all");
	let startDate = state("");
	let endDate = state("");
	let supSearchVal = state("");
	let supStatusFilter = state("all");
	let supPurposeFilter = state("all");
	let supSupplierFilter = state("all");
	let supStartDate = state("");
	let supEndDate = state("");
	let abortController = null;
	async function loadData() {
		if (abortController) abortController.abort();
		abortController = new AbortController();
		set(loading, true);
		set(errorMsg, null);
		set(correlationId, "");
		try {
			const [expList, headersList, summaryData, spList, supList, cashList, bankList] = await Promise.all([
				getExpenses(abortController.signal).catch(() => []),
				getExpenseHeaders(abortController.signal).catch(() => []),
				getExpenseSummary(abortController.signal).catch(() => null),
				getSupplierPayments({}, abortController.signal).catch(() => []),
				getSuppliers(abortController.signal).catch(() => []),
				getAccounts(abortController.signal).catch(() => []),
				getBanks(abortController.signal).catch(() => [])
			]);
			set(expenses, (Array.isArray(expList) ? expList : []).sort((a, b) => new Date(b.expenseDate).getTime() - new Date(a.expenseDate).getTime()), true);
			set(headers, Array.isArray(headersList) ? headersList : [], true);
			set(summary, summaryData, true);
			set(supplierPayments, (Array.isArray(spList) ? spList : []).filter(isTreasurySupplierPayment).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()), true);
			set(suppliers, Array.isArray(supList) ? supList : [], true);
			set(cashAccounts, (Array.isArray(cashList) ? cashList : cashList?.items || []).filter((a) => a.isActive), true);
			set(bankAccounts, (Array.isArray(bankList) ? bankList : bankList?.items || []).filter((b) => b.isActive), true);
		} catch (err) {
			if (err.name === "AbortError") return;
			set(errorMsg, err.message || "Failed to load payments history.", true);
			set(correlationId, err.correlationId || "", true);
		} finally {
			set(loading, false);
		}
	}
	const availableHeaders = user_derived(() => () => {
		if (get(categoryFilter) === "all") return get(headers);
		return get(headers).filter((h) => {
			return h.category.toLowerCase() === get(categoryFilter).toLowerCase() || get(categoryFilter).toLowerCase() === "expenses" && h.category.toLowerCase() === "expense";
		});
	});
	const filteredExpenses = user_derived(() => () => {
		let result = get(expenses);
		if (get(statusFilter) !== "all") result = result.filter((e) => e.status === get(statusFilter));
		if (get(categoryFilter) !== "all") result = result.filter((e) => {
			const h = get(headers).find((x) => x.id === e.expenseCategoryId);
			if (!h) return false;
			return h.category.toLowerCase() === get(categoryFilter).toLowerCase() || get(categoryFilter).toLowerCase() === "expenses" && h.category.toLowerCase() === "expense";
		});
		if (get(headerFilter) !== "all") result = result.filter((e) => String(e.expenseCategoryId) === String(get(headerFilter)));
		if (get(startDate)) {
			const start = new Date(get(startDate)).getTime();
			result = result.filter((e) => new Date(e.expenseDate).getTime() >= start);
		}
		if (get(endDate)) {
			const end = new Date(get(endDate)).getTime() + 864e5;
			result = result.filter((e) => new Date(e.expenseDate).getTime() < end);
		}
		if (get(searchVal).trim() !== "") {
			const query = get(searchVal).toLowerCase();
			result = result.filter((e) => {
				const headerName = get(headers).find((x) => x.id === e.expenseCategoryId)?.name.toLowerCase() || "";
				return e.expenseNumber.toLowerCase().includes(query) || e.description.toLowerCase().includes(query) || headerName.includes(query);
			});
		}
		return result;
	});
	function resetFilters() {
		set(statusFilter, "all");
		set(categoryFilter, "all");
		set(headerFilter, "all");
		set(startDate, "");
		set(endDate, "");
		set(searchVal, "");
	}
	function handleBucketCardClick(bucket) {
		if (get(categoryFilter) === bucket) set(categoryFilter, "all");
		else set(categoryFilter, bucket, true);
		set(headerFilter, "all");
	}
	function getSupplierPaymentPurpose(sp) {
		const rawType = (sp.serviceType || "").toLowerCase().replace(/[-_]/g, "").trim();
		const desc = (sp.description || "").toLowerCase().trim();
		if (rawType.includes("flight") || rawType.includes("hotel") || rawType.includes("visa") || rawType.includes("holiday") || rawType.includes("package") || rawType.includes("transport") || rawType.includes("vfs") || rawType.includes("activity") || rawType.includes("insurance")) return null;
		if (rawType.includes("credit") || desc.includes("settling credit") || desc.includes("credit debt") || desc.includes("credit settlement")) return {
			key: "credit",
			label: "Credit Settlement",
			sublabel: "Debt Clearance",
			badgeClass: "bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/20"
		};
		if (rawType.includes("advance") || desc.includes("advance")) return {
			key: "advance",
			label: "Advance Payment",
			sublabel: "Supplier Advance",
			badgeClass: "bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/20"
		};
		if (rawType.includes("refund") || desc.includes("refund")) return {
			key: "refund",
			label: "Supplier Refund",
			sublabel: "Returned Funds",
			badgeClass: "bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/20"
		};
		if (rawType.includes("wallet") || desc.includes("top-up") || desc.includes("topup") || desc.includes("wallet top-up") || desc.includes("wallet")) return {
			key: "wallet",
			label: "Wallet Top-up",
			sublabel: "Prepaid Wallet",
			badgeClass: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20"
		};
		return null;
	}
	function isTreasurySupplierPayment(sp) {
		return getSupplierPaymentPurpose(sp) !== null;
	}
	function getSupplierPaymentChannel(sp) {
		const pm = (sp.paymentMethod || "").toLowerCase();
		let base = pm === "bank" || pm === "bank_transfer" ? "Bank" : pm === "cash" ? "Cash" : pm === "credit" ? "Credit" : pm === "wallet" || pm === "supplier_wallet" ? "Wallet" : pm;
		if (sp.sourceBankName) return `${base} (${sp.sourceBankName})`;
		if (sp.sourceAccountName) return `${base} (${sp.sourceAccountName})`;
		if (sp.sourceBankId) {
			const b = get(bankAccounts).find((x) => x.id === sp.sourceBankId);
			if (b) return `${base} (${b.bankName})`;
		}
		if (sp.sourceAccountId) {
			const a = get(cashAccounts).find((x) => x.id === sp.sourceAccountId);
			if (a) return `${base} (${a.name})`;
		}
		return base;
	}
	const supplierPaymentStats = user_derived(() => {
		let totalCount = get(supplierPayments).length;
		let totalAmount = 0;
		let walletCount = 0;
		let walletAmount = 0;
		let creditCount = 0;
		let creditAmount = 0;
		let advanceCount = 0;
		let advanceAmount = 0;
		let refundCount = 0;
		let refundAmount = 0;
		let pendingCount = 0;
		let pendingAmount = 0;
		for (const sp of get(supplierPayments)) {
			totalAmount += sp.amount;
			const purpose = getSupplierPaymentPurpose(sp);
			if (purpose?.key === "wallet") {
				walletCount++;
				walletAmount += sp.amount;
			} else if (purpose?.key === "credit") {
				creditCount++;
				creditAmount += sp.amount;
			} else if (purpose?.key === "advance") {
				advanceCount++;
				advanceAmount += sp.amount;
			} else if (purpose?.key === "refund") {
				refundCount++;
				refundAmount += sp.amount;
			}
			if ((sp.status || "").toLowerCase() === "pending") {
				pendingCount++;
				pendingAmount += sp.amount;
			}
		}
		return {
			all: {
				count: totalCount,
				amount: totalAmount
			},
			wallet: {
				count: walletCount,
				amount: walletAmount
			},
			credit: {
				count: creditCount,
				amount: creditAmount
			},
			advance: {
				count: advanceCount,
				amount: advanceAmount
			},
			refund: {
				count: refundCount,
				amount: refundAmount
			},
			pending: {
				count: pendingCount,
				amount: pendingAmount
			}
		};
	});
	const filteredSupplierPayments = user_derived(() => () => {
		let result = get(supplierPayments);
		if (get(supStatusFilter) !== "all") result = result.filter((p) => (p.status || "").toLowerCase() === get(supStatusFilter).toLowerCase());
		if (get(supPurposeFilter) !== "all") result = result.filter((p) => {
			return getSupplierPaymentPurpose(p)?.key === get(supPurposeFilter);
		});
		if (get(supSupplierFilter) !== "all") result = result.filter((p) => String(p.supplierId) === String(get(supSupplierFilter)));
		if (get(supStartDate)) {
			const start = new Date(get(supStartDate)).getTime();
			result = result.filter((p) => new Date(p.createdAt).getTime() >= start);
		}
		if (get(supEndDate)) {
			const end = new Date(get(supEndDate)).getTime() + 864e5;
			result = result.filter((p) => new Date(p.createdAt).getTime() < end);
		}
		if (get(supSearchVal).trim() !== "") {
			const query = get(supSearchVal).toLowerCase().trim();
			result = result.filter((p) => {
				const sup = get(suppliers).find((s) => s.id === p.supplierId);
				const supName = (sup?.name || "").toLowerCase();
				const supCode = (sup?.code || "").toLowerCase();
				const docNo = (p.documentNumber || "").toLowerCase();
				const refNo = (p.referenceNumber || "").toLowerCase();
				const extRef = (p.externalReference || "").toLowerCase();
				const desc = (p.description || "").toLowerCase();
				return String(p.id).includes(query) || docNo.includes(query) || supName.includes(query) || supCode.includes(query) || refNo.includes(query) || extRef.includes(query) || desc.includes(query);
			});
		}
		return result;
	});
	let processingSpId = state(null);
	async function handleApproveSupplierPayment(sp, e) {
		if (e) e.stopPropagation();
		if (!confirm(`Are you sure you want to approve this supplier payment of BHD ${sp.amount.toFixed(3)}?`)) return;
		set(processingSpId, sp.id, true);
		try {
			await approveSupplierPayment(sp.id, sp.rowVersion || void 0);
			toast.success("Supplier payment approved successfully.");
			await loadData();
		} catch (err) {
			toast.error(err.message || "Failed to approve supplier payment.");
		} finally {
			set(processingSpId, null);
		}
	}
	async function handleRejectSupplierPayment(sp, e) {
		if (e) e.stopPropagation();
		const reason = prompt("Please enter a rejection reason:");
		if (reason === null) return;
		if (!reason.trim()) {
			toast.error("Rejection reason is required.");
			return;
		}
		set(processingSpId, sp.id, true);
		try {
			await rejectSupplierPayment(sp.id, reason.trim());
			toast.success("Supplier payment rejected.");
			await loadData();
		} catch (err) {
			toast.error(err.message || "Failed to reject supplier payment.");
		} finally {
			set(processingSpId, null);
		}
	}
	function resetSupplierFilters() {
		set(supSearchVal, "");
		set(supStatusFilter, "all");
		set(supPurposeFilter, "all");
		set(supSupplierFilter, "all");
		set(supStartDate, "");
		set(supEndDate, "");
	}
	function handleSupplierPurposeCardClick(purposeKey) {
		if (get(supPurposeFilter) === purposeKey) set(supPurposeFilter, "all");
		else set(supPurposeFilter, purposeKey, true);
	}
	function handleSupplierPendingCardClick() {
		if (get(supStatusFilter) === "pending") set(supStatusFilter, "all");
		else set(supStatusFilter, "pending");
	}
	function exportCSV() {
		const list = get(filteredExpenses)();
		if (list.length === 0) return;
		const csvHeaders = [
			"Payment Number",
			"Category Name (Header)",
			"Category Bucket",
			"Description",
			"Payment Channel",
			"Date",
			"Amount (BHD)",
			"Status"
		];
		const csvRows = list.map((row) => {
			const h = get(headers).find((x) => x.id === row.expenseCategoryId);
			const catName = h?.name || "Uncategorized";
			const catType = h?.category || "Expenses";
			return [
				row.expenseNumber,
				catName,
				catType,
				row.description,
				PAYMENT_METHOD_LABELS[row.paymentMethod] || row.paymentMethod,
				row.expenseDate ? formatDateOnly(row.expenseDate) : "",
				row.amount,
				EXPENSE_STATUS_LABELS[row.status] || row.status
			];
		});
		exportToCSV("Expenses_Export_" + getBahrainDateString() + ".csv", csvHeaders, csvRows);
		toast.success("CSV exported successfully.");
	}
	function exportSupplierCSV() {
		const list = get(filteredSupplierPayments)();
		if (list.length === 0) return;
		const csvHeaders = [
			"Payment ID",
			"Document Number",
			"Supplier Code",
			"Supplier Name",
			"Purpose",
			"Payment Channel",
			"Reference #",
			"Description",
			"Date",
			"Amount (BHD)",
			"Status"
		];
		const csvRows = list.map((p) => {
			const sup = get(suppliers).find((s) => s.id === p.supplierId);
			const purpose = getSupplierPaymentPurpose(p);
			const channel = getSupplierPaymentChannel(p);
			return [
				p.id,
				p.documentNumber || `TXSPAY-${p.id}`,
				sup?.code || "",
				sup?.name || `Supplier #${p.supplierId}`,
				purpose?.label || "Settlement",
				channel,
				p.referenceNumber || "",
				p.description || "",
				p.createdAt ? formatDateOnly(p.createdAt) : "",
				p.amount,
				p.status
			];
		});
		exportToCSV("Supplier_Payments_Export_" + getBahrainDateString() + ".csv", csvHeaders, csvRows);
		toast.success("Supplier payments exported successfully.");
	}
	function exportPDF() {
		const selectedHeader = get(headers).find((h) => String(h.id) === String(get(headerFilter)));
		previewDocument("report", "payments", {
			status: get(statusFilter),
			category: get(categoryFilter),
			headerId: get(headerFilter) !== "all" ? get(headerFilter) : void 0,
			headerName: selectedHeader ? selectedHeader.name : void 0,
			startDate: get(startDate),
			endDate: get(endDate),
			searchVal: get(searchVal)
		});
		toast.info("Generating print document...");
	}
	onMount(() => {
		const tabParam = $page().url.searchParams.get("tab");
		if (tabParam === "supplier" || tabParam === "suppliers") set(activePaymentTab, "supplier");
		loadData();
		return () => {
			if (abortController) abortController.abort();
		};
	});
	function getBucketBadgeStyle(cat) {
		const norm = (cat || "").toLowerCase();
		if (norm === "income") return {
			bg: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/30",
			label: "Income"
		};
		if (norm === "asset") return {
			bg: "bg-blue-500/15 text-blue-700 dark:text-blue-300 border-blue-500/30",
			label: "Asset"
		};
		if (norm === "liability") return {
			bg: "bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/30",
			label: "Liability"
		};
		if (norm === "capital") return {
			bg: "bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 border-indigo-500/30",
			label: "Capital"
		};
		if (norm === "contra") return {
			bg: "bg-purple-500/15 text-purple-700 dark:text-purple-300 border-purple-500/30",
			label: "Contra"
		};
		return {
			bg: "bg-rose-500/15 text-rose-700 dark:text-rose-300 border-rose-500/30",
			label: "Expenses"
		};
	}
	var $$exports = {
		getSupplierPaymentPurpose,
		isTreasurySupplierPayment
	};
	var div = root_21();
	head("1fp8yfp", ($$anchor) => {
		effect(() => {
			$document.title = "Payments & Settlements — Accounts Portal";
		});
	});
	var div_1 = child(div);
	var div_2 = sibling(child(div_1), 2);
	var node = child(div_2);
	var consequent = ($$anchor) => {
		Button($$anchor, {
			variant: "outline",
			class: "rounded-xl text-xs py-5 cursor-pointer font-semibold",
			onclick: () => goto("/payments/expenses/create-header"),
			children: ($$anchor, $$slotProps) => {
				var fragment_1 = root();
				Plus(first_child(fragment_1), { class: "h-3.5 w-3.5 mr-1" });
				next();
				append($$anchor, fragment_1);
			},
			$$slots: { default: true }
		});
	};
	if_block(node, ($$render) => {
		if (get(activePaymentTab) === "expenses") $$render(consequent);
	});
	Button(sibling(node, 2), {
		class: "rounded-xl text-xs py-5 cursor-pointer font-semibold",
		onclick: () => goto(get(activePaymentTab) === "supplier" ? "/payments/new?tab=supplier" : "/payments/new"),
		children: ($$anchor, $$slotProps) => {
			var fragment_2 = root_1();
			Plus(first_child(fragment_2), { class: "h-3.5 w-3.5 mr-1" });
			next();
			append($$anchor, fragment_2);
		},
		$$slots: { default: true }
	});
	reset(div_2);
	reset(div_1);
	var div_3 = sibling(div_1, 2);
	var button = child(div_3);
	var node_4 = child(button);
	Receipt(node_4, { class: "h-4 w-4" });
	var span = sibling(node_4, 4);
	var text = child(span, true);
	reset(span);
	reset(button);
	var button_1 = sibling(button, 2);
	var node_5 = child(button_1);
	Credit_card(node_5, { class: "h-4 w-4" });
	var span_1 = sibling(node_5, 4);
	var text_1 = child(span_1, true);
	reset(span_1);
	reset(button_1);
	reset(div_3);
	var node_6 = sibling(div_3, 2);
	var consequent_9 = ($$anchor) => {
		var fragment_3 = root_15();
		var node_7 = first_child(fragment_3);
		var consequent_2 = ($$anchor) => {
			var div_4 = root_3();
			var button_2 = child(div_4);
			var div_5 = sibling(child(button_2), 4);
			var span_2 = child(div_5);
			var text_2 = child(span_2, true);
			reset(span_2);
			var span_3 = sibling(span_2, 2);
			MoneyDisplay(child(span_3), { get amount() {
				return get(summary).all.totalAmount;
			} });
			reset(span_3);
			reset(div_5);
			reset(button_2);
			var button_3 = sibling(button_2, 2);
			var div_6 = sibling(child(button_3), 4);
			var span_4 = child(div_6);
			var text_3 = child(span_4, true);
			reset(span_4);
			var span_5 = sibling(span_4, 2);
			MoneyDisplay(child(span_5), { get amount() {
				return get(summary).asset.totalAmount;
			} });
			reset(span_5);
			reset(div_6);
			reset(button_3);
			var button_4 = sibling(button_3, 2);
			var div_7 = sibling(child(button_4), 4);
			var span_6 = child(div_7);
			var text_4 = child(span_6, true);
			reset(span_6);
			var span_7 = sibling(span_6, 2);
			MoneyDisplay(child(span_7), { get amount() {
				return get(summary).liability.totalAmount;
			} });
			reset(span_7);
			reset(div_7);
			reset(button_4);
			var button_5 = sibling(button_4, 2);
			var div_8 = sibling(child(button_5), 4);
			var span_8 = child(div_8);
			var text_5 = child(span_8, true);
			reset(span_8);
			var span_9 = sibling(span_8, 2);
			MoneyDisplay(child(span_9), { get amount() {
				return get(summary).income.totalAmount;
			} });
			reset(span_9);
			reset(div_8);
			reset(button_5);
			var button_6 = sibling(button_5, 2);
			var div_9 = sibling(child(button_6), 4);
			var span_10 = child(div_9);
			var text_6 = child(span_10, true);
			reset(span_10);
			var span_11 = sibling(span_10, 2);
			MoneyDisplay(child(span_11), { get amount() {
				return get(summary).capital.totalAmount;
			} });
			reset(span_11);
			reset(div_9);
			reset(button_6);
			var button_7 = sibling(button_6, 2);
			var div_10 = sibling(child(button_7), 4);
			var span_12 = child(div_10);
			var text_7 = child(span_12, true);
			reset(span_12);
			var span_13 = sibling(span_12, 2);
			MoneyDisplay(child(span_13), { get amount() {
				return get(summary).expenses.totalAmount;
			} });
			reset(span_13);
			reset(div_10);
			reset(button_7);
			var node_14 = sibling(button_7, 2);
			var consequent_1 = ($$anchor) => {
				var button_8 = root_2();
				var div_11 = sibling(child(button_8), 4);
				var span_14 = child(div_11);
				var text_8 = child(span_14, true);
				reset(span_14);
				var span_15 = sibling(span_14, 2);
				MoneyDisplay(child(span_15), { get amount() {
					return get(summary).contra.totalAmount;
				} });
				reset(span_15);
				reset(div_11);
				reset(button_8);
				template_effect(($0) => {
					set_class(button_8, 1, $0);
					set_text(text_8, get(summary).contra.count);
				}, [() => clsx(["bg-card border rounded-2xl p-4 space-y-2 shadow-xs relative overflow-hidden group text-left cursor-pointer transition-all", get(categoryFilter) === "Contra" ? "border-purple-500 ring-2 ring-purple-500/20 bg-purple-500/5" : "border-border hover:border-border/80"].join(" "))]);
				delegated("click", button_8, () => handleBucketCardClick("Contra"));
				append($$anchor, button_8);
			};
			if_block(node_14, ($$render) => {
				if (get(summary)?.contra) $$render(consequent_1);
			});
			reset(div_4);
			template_effect(($0, $1, $2, $3, $4, $5) => {
				set_class(button_2, 1, $0);
				set_text(text_2, get(summary).all.count);
				set_class(button_3, 1, $1);
				set_text(text_3, get(summary).asset.count);
				set_class(button_4, 1, $2);
				set_text(text_4, get(summary).liability.count);
				set_class(button_5, 1, $3);
				set_text(text_5, get(summary).income.count);
				set_class(button_6, 1, $4);
				set_text(text_6, get(summary).capital.count);
				set_class(button_7, 1, $5);
				set_text(text_7, get(summary).expenses.count);
			}, [
				() => clsx(["bg-card border rounded-2xl p-4 space-y-2 shadow-xs relative overflow-hidden group text-left cursor-pointer transition-all", get(categoryFilter) === "all" ? "border-primary ring-2 ring-primary/20 bg-primary/5" : "border-border hover:border-border/80"].join(" ")),
				() => clsx(["bg-card border rounded-2xl p-4 space-y-2 shadow-xs relative overflow-hidden group text-left cursor-pointer transition-all", get(categoryFilter) === "Asset" ? "border-blue-500 ring-2 ring-blue-500/20 bg-blue-500/5" : "border-border hover:border-border/80"].join(" ")),
				() => clsx(["bg-card border rounded-2xl p-4 space-y-2 shadow-xs relative overflow-hidden group text-left cursor-pointer transition-all", get(categoryFilter) === "Liability" ? "border-amber-500 ring-2 ring-amber-500/20 bg-amber-500/5" : "border-border hover:border-border/80"].join(" ")),
				() => clsx(["bg-card border rounded-2xl p-4 space-y-2 shadow-xs relative overflow-hidden group text-left cursor-pointer transition-all", get(categoryFilter) === "Income" ? "border-emerald-500 ring-2 ring-emerald-500/20 bg-emerald-500/5" : "border-border hover:border-border/80"].join(" ")),
				() => clsx(["bg-card border rounded-2xl p-4 space-y-2 shadow-xs relative overflow-hidden group text-left cursor-pointer transition-all", get(categoryFilter) === "Capital" ? "border-indigo-500 ring-2 ring-indigo-500/20 bg-indigo-500/5" : "border-border hover:border-border/80"].join(" ")),
				() => clsx(["bg-card border rounded-2xl p-4 space-y-2 shadow-xs relative overflow-hidden group text-left cursor-pointer transition-all", get(categoryFilter) === "Expenses" ? "border-rose-500 ring-2 ring-rose-500/20 bg-rose-500/5" : "border-border hover:border-border/80"].join(" "))
			]);
			delegated("click", button_2, () => handleBucketCardClick("all"));
			delegated("click", button_3, () => handleBucketCardClick("Asset"));
			delegated("click", button_4, () => handleBucketCardClick("Liability"));
			delegated("click", button_5, () => handleBucketCardClick("Income"));
			delegated("click", button_6, () => handleBucketCardClick("Capital"));
			delegated("click", button_7, () => handleBucketCardClick("Expenses"));
			append($$anchor, div_4);
		};
		if_block(node_7, ($$render) => {
			if (get(summary)) $$render(consequent_2);
		});
		var div_12 = sibling(node_7, 2);
		var div_13 = child(div_12);
		var div_14 = child(div_13);
		var node_16 = child(div_14);
		Search(node_16, { class: "absolute left-3 top-2.5 h-4 w-4 text-muted-foreground/60" });
		var input = sibling(node_16, 2);
		remove_input_defaults(input);
		reset(div_14);
		var div_15 = sibling(div_14, 2);
		each(div_15, 20, () => [
			"all",
			"pendingapproval",
			"approved",
			"rejected"
		], index, ($$anchor, status) => {
			var button_9 = root_4();
			var text_9 = child(button_9, true);
			reset(button_9);
			template_effect(($0) => {
				set_class(button_9, 1, $0);
				set_text(text_9, EXPENSE_STATUS_LABELS[status] || status);
			}, [() => clsx(["px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer whitespace-nowrap capitalize", get(statusFilter) === status ? "bg-primary border-primary text-primary-foreground" : "bg-background border-border text-muted-foreground hover:text-foreground"].join(" "))]);
			delegated("click", button_9, () => set(statusFilter, status, true));
			append($$anchor, button_9);
		});
		reset(div_15);
		reset(div_13);
		var div_16 = sibling(div_13, 2);
		var div_17 = child(div_16);
		var node_17 = child(div_17);
		Calendar(node_17, { class: "h-3.5 w-3.5 text-muted-foreground" });
		var input_1 = sibling(node_17, 4);
		remove_input_defaults(input_1);
		var input_2 = sibling(input_1, 4);
		remove_input_defaults(input_2);
		reset(div_17);
		var div_18 = sibling(div_17, 2);
		var node_18 = child(div_18);
		Funnel(node_18, { class: "h-3.5 w-3.5 text-muted-foreground" });
		var select = sibling(node_18, 4);
		var option = child(select);
		option.value = option.__value = "all";
		var option_1 = sibling(option);
		option_1.value = option_1.__value = "Asset";
		var option_2 = sibling(option_1);
		option_2.value = option_2.__value = "Liability";
		var option_3 = sibling(option_2);
		option_3.value = option_3.__value = "Income";
		var option_4 = sibling(option_3);
		option_4.value = option_4.__value = "Capital";
		var option_5 = sibling(option_4);
		option_5.value = option_5.__value = "Expenses";
		var option_6 = sibling(option_5);
		option_6.value = option_6.__value = "Contra";
		reset(select);
		reset(div_18);
		var div_19 = sibling(div_18, 2);
		var node_19 = child(div_19);
		Tag(node_19, { class: "h-3.5 w-3.5 text-muted-foreground" });
		var select_1 = sibling(node_19, 4);
		var option_7 = child(select_1);
		var text_10 = child(option_7);
		reset(option_7);
		option_7.value = option_7.__value = "all";
		each(sibling(option_7), 17, () => get(availableHeaders)(), index, ($$anchor, h) => {
			var option_8 = root_5();
			var text_11 = child(option_8);
			reset(option_8);
			var option_8_value = {};
			template_effect(($0) => {
				set_text(text_11, `${get(h).name ?? ""} ${get(categoryFilter) === "all" ? "(" + get(h).category + ")" : ""}`);
				if (option_8_value !== (option_8_value = $0)) option_8.value = (option_8.__value = $0) ?? "";
			}, [() => String(get(h).id)]);
			append($$anchor, option_8);
		});
		reset(select_1);
		reset(div_19);
		var node_21 = sibling(div_19, 2);
		var consequent_3 = ($$anchor) => {
			Button($$anchor, {
				variant: "ghost",
				size: "sm",
				class: "h-8 px-2 text-[11px] text-muted-foreground hover:text-foreground rounded-lg cursor-pointer flex items-center gap-1",
				onclick: resetFilters,
				children: ($$anchor, $$slotProps) => {
					var fragment_5 = root_6();
					Rotate_ccw(first_child(fragment_5), { class: "h-3 w-3" });
					next();
					append($$anchor, fragment_5);
				},
				$$slots: { default: true }
			});
		};
		if_block(node_21, ($$render) => {
			if (get(statusFilter) !== "all" || get(categoryFilter) !== "all" || get(headerFilter) !== "all" || get(startDate) || get(endDate) || get(searchVal)) $$render(consequent_3);
		});
		var div_20 = sibling(node_21, 2);
		var node_23 = child(div_20);
		{
			let $0 = user_derived(() => get(filteredExpenses)().length === 0);
			Button(node_23, {
				variant: "outline",
				size: "sm",
				class: "h-8 rounded-lg text-[11px] cursor-pointer",
				onclick: exportCSV,
				get disabled() {
					return get($0);
				},
				children: ($$anchor, $$slotProps) => {
					var fragment_6 = root_7();
					File_spreadsheet(first_child(fragment_6), { class: "h-3.5 w-3.5 mr-1 text-emerald-600" });
					next();
					append($$anchor, fragment_6);
				},
				$$slots: { default: true }
			});
		}
		var node_25 = sibling(node_23, 2);
		{
			let $0 = user_derived(() => get(filteredExpenses)().length === 0);
			Button(node_25, {
				variant: "outline",
				size: "sm",
				class: "h-8 rounded-lg text-[11px] cursor-pointer",
				onclick: exportPDF,
				get disabled() {
					return get($0);
				},
				children: ($$anchor, $$slotProps) => {
					var fragment_7 = root_8();
					File_down(first_child(fragment_7), { class: "h-3.5 w-3.5 mr-1 text-blue-600" });
					next();
					append($$anchor, fragment_7);
				},
				$$slots: { default: true }
			});
		}
		reset(div_20);
		reset(div_16);
		reset(div_12);
		var node_27 = sibling(div_12, 2);
		var consequent_4 = ($$anchor) => {
			ErrorState($$anchor, {
				get message() {
					return get(errorMsg);
				},
				get correlationId() {
					return get(correlationId);
				},
				retryAction: loadData
			});
		};
		var alternate_2 = ($$anchor) => {
			var fragment_9 = comment();
			var node_28 = first_child(fragment_9);
			var consequent_5 = ($$anchor) => {
				var div_21 = root_9();
				FinancialTableSkeleton(child(div_21), {
					rows: 5,
					columns: 8
				});
				reset(div_21);
				append($$anchor, div_21);
			};
			var consequent_6 = ($$anchor) => {
				EmptyState($$anchor, {
					title: "No operational payments found",
					description: "No records match the current category name, bucket, date, or status filter.",
					get icon() {
						return Wallet;
					}
				});
			};
			var d = user_derived(() => get(filteredExpenses)().length === 0);
			var alternate_1 = ($$anchor) => {
				var div_22 = root_14();
				var div_23 = child(div_22);
				var table = child(div_23);
				var tbody = sibling(child(table));
				each(tbody, 21, () => get(filteredExpenses)(), (exp) => exp.id, ($$anchor, exp) => {
					const headerObj = user_derived(() => get(headers).find((x) => x.id === get(exp).expenseCategoryId));
					const categoryBucket = user_derived(() => get(headerObj)?.category || "Expenses");
					const badge = user_derived(() => getBucketBadgeStyle(get(categoryBucket)));
					const isIncoming = user_derived(() => get(categoryBucket).toLowerCase() === "income" || get(categoryBucket).toLowerCase() === "capital");
					var tr = root_13();
					var td = child(tr);
					var text_12 = child(td, true);
					reset(td);
					var td_1 = sibling(td);
					var node_30 = child(td_1);
					var consequent_7 = ($$anchor) => {
						append($$anchor, root_10());
					};
					var d_1 = user_derived(() => get(categoryBucket).toLowerCase() === "contra");
					var consequent_8 = ($$anchor) => {
						append($$anchor, root_11());
					};
					var alternate = ($$anchor) => {
						append($$anchor, root_12());
					};
					if_block(node_30, ($$render) => {
						if (get(d_1)) $$render(consequent_7);
						else if (get(isIncoming)) $$render(consequent_8, 1);
						else $$render(alternate, -1);
					});
					reset(td_1);
					var td_2 = sibling(td_1);
					var text_13 = child(td_2, true);
					reset(td_2);
					var td_3 = sibling(td_2);
					var span_19 = child(td_3);
					var text_14 = child(span_19, true);
					reset(span_19);
					reset(td_3);
					var td_4 = sibling(td_3);
					var text_15 = child(td_4, true);
					reset(td_4);
					var td_5 = sibling(td_4);
					var text_16 = child(td_5, true);
					reset(td_5);
					var td_6 = sibling(td_5);
					var text_17 = child(td_6, true);
					reset(td_6);
					var td_7 = sibling(td_6);
					MoneyDisplay(child(td_7), { get amount() {
						return get(exp).amount;
					} });
					reset(td_7);
					var td_8 = sibling(td_7);
					var span_20 = child(td_8);
					var text_18 = child(span_20, true);
					reset(span_20);
					reset(td_8);
					reset(tr);
					template_effect(($0, $1) => {
						set_text(text_12, get(exp).expenseNumber);
						set_attribute(td_2, "title", get(headerObj)?.name || "Uncategorized");
						set_text(text_13, get(headerObj)?.name || "Uncategorized");
						set_class(span_19, 1, "inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold border " + get(badge).bg);
						set_text(text_14, get(badge).label);
						set_attribute(td_4, "title", get(exp).description);
						set_text(text_15, get(exp).description);
						set_text(text_16, PAYMENT_METHOD_LABELS[get(exp).paymentMethod] || get(exp).paymentMethod);
						set_text(text_17, $0);
						set_class(span_20, 1, $1);
						set_text(text_18, EXPENSE_STATUS_LABELS[get(exp).status] || get(exp).status);
					}, [() => new Date(get(exp).expenseDate).toLocaleDateString(), () => clsx(["inline-flex items-center gap-1 font-semibold rounded-full border text-[10px] px-2 py-0.5 capitalize", get(exp).status === "approved" || get(exp).status === "posted" ? "text-emerald-700 bg-emerald-50 border-emerald-200 dark:text-emerald-400 dark:bg-emerald-950/40 dark:border-emerald-800" : get(exp).status === "pendingapproval" ? "text-yellow-700 bg-yellow-50 border-yellow-200 dark:text-yellow-400 dark:bg-yellow-950/40 dark:border-yellow-800" : get(exp).status === "rejected" || get(exp).status === "cancelled" || get(exp).status === "reversed" ? "text-rose-700 bg-rose-50 border-rose-200 dark:text-rose-400 dark:bg-rose-950/40 dark:border-rose-800" : "text-muted-foreground bg-muted border-border"].join(" "))]);
					delegated("click", tr, () => goto("/payments/" + get(exp).id));
					append($$anchor, tr);
				});
				reset(tbody);
				reset(table);
				reset(div_23);
				reset(div_22);
				append($$anchor, div_22);
			};
			if_block(node_28, ($$render) => {
				if (get(loading)) $$render(consequent_5);
				else if (get(d)) $$render(consequent_6, 1);
				else $$render(alternate_1, -1);
			});
			append($$anchor, fragment_9);
		};
		if_block(node_27, ($$render) => {
			if (get(errorMsg)) $$render(consequent_4);
			else $$render(alternate_2, -1);
		});
		template_effect(($0) => set_text(text_10, `All Category Names (${$0 ?? ""})`), [() => get(availableHeaders)().length]);
		bind_value(input, () => get(searchVal), ($$value) => set(searchVal, $$value));
		bind_value(input_1, () => get(startDate), ($$value) => set(startDate, $$value));
		bind_value(input_2, () => get(endDate), ($$value) => set(endDate, $$value));
		delegated("change", select, () => set(headerFilter, "all"));
		bind_select_value(select, () => get(categoryFilter), ($$value) => set(categoryFilter, $$value));
		bind_select_value(select_1, () => get(headerFilter), ($$value) => set(headerFilter, $$value));
		append($$anchor, fragment_3);
	};
	var alternate_6 = ($$anchor) => {
		var fragment_11 = root_20();
		var div_24 = first_child(fragment_11);
		var button_10 = child(div_24);
		var div_25 = sibling(child(button_10), 4);
		var span_21 = child(div_25);
		var text_19 = child(span_21, true);
		reset(span_21);
		var span_22 = sibling(span_21, 2);
		MoneyDisplay(child(span_22), { get amount() {
			return get(supplierPaymentStats).all.amount;
		} });
		reset(span_22);
		reset(div_25);
		reset(button_10);
		var button_11 = sibling(button_10, 2);
		var div_26 = sibling(child(button_11), 4);
		var span_23 = child(div_26);
		var text_20 = child(span_23, true);
		reset(span_23);
		var span_24 = sibling(span_23, 2);
		MoneyDisplay(child(span_24), { get amount() {
			return get(supplierPaymentStats).wallet.amount;
		} });
		reset(span_24);
		reset(div_26);
		reset(button_11);
		var button_12 = sibling(button_11, 2);
		var div_27 = sibling(child(button_12), 4);
		var span_25 = child(div_27);
		var text_21 = child(span_25, true);
		reset(span_25);
		var span_26 = sibling(span_25, 2);
		MoneyDisplay(child(span_26), { get amount() {
			return get(supplierPaymentStats).credit.amount;
		} });
		reset(span_26);
		reset(div_27);
		reset(button_12);
		var button_13 = sibling(button_12, 2);
		var div_28 = sibling(child(button_13), 4);
		var span_27 = child(div_28);
		var text_22 = child(span_27, true);
		reset(span_27);
		var span_28 = sibling(span_27, 2);
		MoneyDisplay(child(span_28), { get amount() {
			return get(supplierPaymentStats).advance.amount;
		} });
		reset(span_28);
		reset(div_28);
		reset(button_13);
		var button_14 = sibling(button_13, 2);
		var div_29 = sibling(child(button_14), 4);
		var span_29 = child(div_29);
		var text_23 = child(span_29, true);
		reset(span_29);
		var span_30 = sibling(span_29, 2);
		MoneyDisplay(child(span_30), { get amount() {
			return get(supplierPaymentStats).refund.amount;
		} });
		reset(span_30);
		reset(div_29);
		reset(button_14);
		var button_15 = sibling(button_14, 2);
		var div_30 = sibling(child(button_15), 4);
		var span_31 = child(div_30);
		var text_24 = child(span_31, true);
		reset(span_31);
		var span_32 = sibling(span_31, 2);
		MoneyDisplay(child(span_32), { get amount() {
			return get(supplierPaymentStats).pending.amount;
		} });
		reset(span_32);
		reset(div_30);
		reset(button_15);
		reset(div_24);
		var div_31 = sibling(div_24, 2);
		var div_32 = child(div_31);
		var div_33 = child(div_32);
		var node_38 = child(div_33);
		Search(node_38, { class: "absolute left-3 top-2.5 h-4 w-4 text-muted-foreground/60" });
		var input_3 = sibling(node_38, 2);
		remove_input_defaults(input_3);
		reset(div_33);
		var div_34 = sibling(div_33, 2);
		each(div_34, 20, () => [
			"all",
			"pending",
			"approved",
			"rejected"
		], index, ($$anchor, status) => {
			var button_16 = root_4();
			var text_25 = child(button_16, true);
			reset(button_16);
			template_effect(($0) => {
				set_class(button_16, 1, $0);
				set_text(text_25, status);
			}, [() => clsx(["px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer whitespace-nowrap capitalize", get(supStatusFilter) === status ? "bg-primary border-primary text-primary-foreground" : "bg-background border-border text-muted-foreground hover:text-foreground"].join(" "))]);
			delegated("click", button_16, () => set(supStatusFilter, status, true));
			append($$anchor, button_16);
		});
		reset(div_34);
		reset(div_32);
		var div_35 = sibling(div_32, 2);
		var div_36 = child(div_35);
		var node_39 = child(div_36);
		Calendar(node_39, { class: "h-3.5 w-3.5 text-muted-foreground" });
		var input_4 = sibling(node_39, 4);
		remove_input_defaults(input_4);
		var input_5 = sibling(input_4, 4);
		remove_input_defaults(input_5);
		reset(div_36);
		var div_37 = sibling(div_36, 2);
		var node_40 = child(div_37);
		Tag(node_40, { class: "h-3.5 w-3.5 text-muted-foreground" });
		var select_2 = sibling(node_40, 4);
		var option_9 = child(select_2);
		option_9.value = option_9.__value = "all";
		var option_10 = sibling(option_9);
		option_10.value = option_10.__value = "wallet";
		var option_11 = sibling(option_10);
		option_11.value = option_11.__value = "credit";
		var option_12 = sibling(option_11);
		option_12.value = option_12.__value = "advance";
		var option_13 = sibling(option_12);
		option_13.value = option_13.__value = "refund";
		reset(select_2);
		reset(div_37);
		var div_38 = sibling(div_37, 2);
		var node_41 = child(div_38);
		Building_2(node_41, { class: "h-3.5 w-3.5 text-muted-foreground" });
		var select_3 = sibling(node_41, 4);
		var option_14 = child(select_3);
		var text_26 = child(option_14);
		reset(option_14);
		option_14.value = option_14.__value = "all";
		each(sibling(option_14), 17, () => get(suppliers), index, ($$anchor, s) => {
			var option_15 = root_5();
			var text_27 = child(option_15);
			reset(option_15);
			var option_15_value = {};
			template_effect(($0) => {
				set_text(text_27, `${get(s).name ?? ""} (${get(s).code ?? ""})`);
				if (option_15_value !== (option_15_value = $0)) option_15.value = (option_15.__value = $0) ?? "";
			}, [() => String(get(s).id)]);
			append($$anchor, option_15);
		});
		reset(select_3);
		reset(div_38);
		var node_43 = sibling(div_38, 2);
		var consequent_10 = ($$anchor) => {
			Button($$anchor, {
				variant: "ghost",
				size: "sm",
				class: "h-8 px-2 text-[11px] text-muted-foreground hover:text-foreground rounded-lg cursor-pointer flex items-center gap-1",
				onclick: resetSupplierFilters,
				children: ($$anchor, $$slotProps) => {
					var fragment_13 = root_6();
					Rotate_ccw(first_child(fragment_13), { class: "h-3 w-3" });
					next();
					append($$anchor, fragment_13);
				},
				$$slots: { default: true }
			});
		};
		if_block(node_43, ($$render) => {
			if (get(supStatusFilter) !== "all" || get(supPurposeFilter) !== "all" || get(supSupplierFilter) !== "all" || get(supStartDate) || get(supEndDate) || get(supSearchVal)) $$render(consequent_10);
		});
		var div_39 = sibling(node_43, 2);
		var node_45 = child(div_39);
		{
			let $0 = user_derived(() => get(filteredSupplierPayments)().length === 0);
			Button(node_45, {
				variant: "outline",
				size: "sm",
				class: "h-8 rounded-lg text-[11px] cursor-pointer",
				onclick: exportSupplierCSV,
				get disabled() {
					return get($0);
				},
				children: ($$anchor, $$slotProps) => {
					var fragment_14 = root_7();
					File_spreadsheet(first_child(fragment_14), { class: "h-3.5 w-3.5 mr-1 text-emerald-600" });
					next();
					append($$anchor, fragment_14);
				},
				$$slots: { default: true }
			});
		}
		reset(div_39);
		reset(div_35);
		reset(div_31);
		var node_47 = sibling(div_31, 2);
		var consequent_11 = ($$anchor) => {
			ErrorState($$anchor, {
				get message() {
					return get(errorMsg);
				},
				get correlationId() {
					return get(correlationId);
				},
				retryAction: loadData
			});
		};
		var alternate_5 = ($$anchor) => {
			var fragment_16 = comment();
			var node_48 = first_child(fragment_16);
			var consequent_12 = ($$anchor) => {
				var div_40 = root_9();
				FinancialTableSkeleton(child(div_40), {
					rows: 5,
					columns: 8
				});
				reset(div_40);
				append($$anchor, div_40);
			};
			var consequent_13 = ($$anchor) => {
				EmptyState($$anchor, {
					title: "No supplier payments found",
					description: "No supplier payment or settlement records match the current filter or search criteria.",
					get icon() {
						return Credit_card;
					}
				});
			};
			var d_2 = user_derived(() => get(filteredSupplierPayments)().length === 0);
			var alternate_4 = ($$anchor) => {
				var div_41 = root_19();
				var div_42 = child(div_41);
				var table_1 = child(div_42);
				var tbody_1 = sibling(child(table_1));
				each(tbody_1, 21, () => get(filteredSupplierPayments)(), (sp) => sp.id, ($$anchor, sp) => {
					const sup = user_derived(() => get(suppliers).find((s) => s.id === get(sp).supplierId));
					const purpose = user_derived(() => getSupplierPaymentPurpose(get(sp)));
					const channel = user_derived(() => getSupplierPaymentChannel(get(sp)));
					var tr_1 = root_18();
					var td_9 = child(tr_1);
					var text_28 = child(td_9, true);
					reset(td_9);
					var td_10 = sibling(td_9);
					var div_43 = child(td_10);
					var span_33 = child(div_43);
					var text_29 = child(span_33, true);
					reset(span_33);
					var node_50 = sibling(span_33, 2);
					var consequent_14 = ($$anchor) => {
						var span_34 = root_16();
						var text_30 = child(span_34, true);
						reset(span_34);
						template_effect(() => set_text(text_30, get(sup).code));
						append($$anchor, span_34);
					};
					if_block(node_50, ($$render) => {
						if (get(sup)?.code) $$render(consequent_14);
					});
					reset(div_43);
					reset(td_10);
					var td_11 = sibling(td_10);
					var span_35 = child(td_11);
					var text_31 = child(span_35, true);
					reset(span_35);
					reset(td_11);
					var td_12 = sibling(td_11);
					var div_44 = child(td_12);
					var node_51 = child(div_44);
					var consequent_15 = ($$anchor) => {
						Landmark($$anchor, { class: "h-3 w-3 text-emerald-600 shrink-0" });
					};
					var d_3 = user_derived(() => get(channel).toLowerCase().includes("bank"));
					var consequent_16 = ($$anchor) => {
						Coins($$anchor, { class: "h-3 w-3 text-amber-600 shrink-0" });
					};
					var d_4 = user_derived(() => get(channel).toLowerCase().includes("cash"));
					var alternate_3 = ($$anchor) => {
						Wallet($$anchor, { class: "h-3 w-3 text-primary shrink-0" });
					};
					if_block(node_51, ($$render) => {
						if (get(d_3)) $$render(consequent_15);
						else if (get(d_4)) $$render(consequent_16, 1);
						else $$render(alternate_3, -1);
					});
					var span_36 = sibling(node_51, 2);
					var text_32 = child(span_36, true);
					reset(span_36);
					reset(div_44);
					reset(td_12);
					var td_13 = sibling(td_12);
					var text_33 = child(td_13, true);
					reset(td_13);
					var td_14 = sibling(td_13);
					var text_34 = child(td_14, true);
					reset(td_14);
					var td_15 = sibling(td_14);
					var text_35 = child(td_15, true);
					reset(td_15);
					var td_16 = sibling(td_15);
					MoneyDisplay(child(td_16), { get amount() {
						return get(sp).amount;
					} });
					reset(td_16);
					var td_17 = sibling(td_16);
					FinancialStatusBadge(child(td_17), {
						get status() {
							return get(sp).status;
						},
						size: "sm"
					});
					reset(td_17);
					var td_18 = sibling(td_17);
					var div_45 = child(td_18);
					var node_54 = child(div_45);
					var consequent_17 = ($$anchor) => {
						var fragment_21 = root_17();
						var button_17 = first_child(fragment_21);
						Check(child(button_17), { class: "h-3.5 w-3.5" });
						reset(button_17);
						var button_18 = sibling(button_17, 2);
						X(child(button_18), { class: "h-3.5 w-3.5" });
						reset(button_18);
						template_effect(() => {
							button_17.disabled = get(processingSpId) === get(sp).id;
							button_18.disabled = get(processingSpId) === get(sp).id;
						});
						delegated("click", button_17, (e) => handleApproveSupplierPayment(get(sp), e));
						delegated("click", button_18, (e) => handleRejectSupplierPayment(get(sp), e));
						append($$anchor, fragment_21);
					};
					var d_5 = user_derived(() => (get(sp).status || "").toLowerCase() === "pending" && hasRole("master_accountant"));
					if_block(node_54, ($$render) => {
						if (get(d_5)) $$render(consequent_17);
					});
					var button_19 = sibling(node_54, 2);
					External_link(child(button_19), { class: "h-3.5 w-3.5" });
					reset(button_19);
					reset(div_45);
					reset(td_18);
					reset(tr_1);
					template_effect(($0) => {
						set_text(text_28, get(sp).documentNumber || `#${get(sp).id}`);
						set_attribute(span_33, "title", get(sup)?.name || `Supplier #${get(sp).supplierId}`);
						set_text(text_29, get(sup)?.name || `Supplier #${get(sp).supplierId}`);
						set_class(span_35, 1, "inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold border " + (get(purpose)?.badgeClass || "bg-muted text-muted-foreground border-border"));
						set_text(text_31, get(purpose)?.label || "Settlement");
						set_attribute(div_44, "title", get(channel));
						set_text(text_32, get(channel));
						set_attribute(td_13, "title", get(sp).referenceNumber || "—");
						set_text(text_33, get(sp).referenceNumber || "—");
						set_attribute(td_14, "title", get(sp).description || "—");
						set_text(text_34, get(sp).description || "—");
						set_text(text_35, $0);
					}, [() => get(sp).createdAt ? formatDateOnly(get(sp).createdAt) : "—"]);
					delegated("click", tr_1, () => goto(`/suppliers/${get(sp).supplierId}`));
					delegated("click", div_45, (e) => e.stopPropagation());
					delegated("click", button_19, (e) => {
						e.stopPropagation();
						goto(`/suppliers/${get(sp).supplierId}`);
					});
					append($$anchor, tr_1);
				});
				reset(tbody_1);
				reset(table_1);
				reset(div_42);
				reset(div_41);
				append($$anchor, div_41);
			};
			if_block(node_48, ($$render) => {
				if (get(loading)) $$render(consequent_12);
				else if (get(d_2)) $$render(consequent_13, 1);
				else $$render(alternate_4, -1);
			});
			append($$anchor, fragment_16);
		};
		if_block(node_47, ($$render) => {
			if (get(errorMsg)) $$render(consequent_11);
			else $$render(alternate_5, -1);
		});
		template_effect(($0, $1, $2, $3, $4, $5) => {
			set_class(button_10, 1, $0);
			set_text(text_19, get(supplierPaymentStats).all.count);
			set_class(button_11, 1, $1);
			set_text(text_20, get(supplierPaymentStats).wallet.count);
			set_class(button_12, 1, $2);
			set_text(text_21, get(supplierPaymentStats).credit.count);
			set_class(button_13, 1, $3);
			set_text(text_22, get(supplierPaymentStats).advance.count);
			set_class(button_14, 1, $4);
			set_text(text_23, get(supplierPaymentStats).refund.count);
			set_class(button_15, 1, $5);
			set_text(text_24, get(supplierPaymentStats).pending.count);
			set_text(text_26, `All Suppliers (${get(suppliers).length ?? ""})`);
		}, [
			() => clsx(["bg-card border rounded-2xl p-4 space-y-2 shadow-xs relative overflow-hidden group text-left cursor-pointer transition-all", get(supPurposeFilter) === "all" && get(supStatusFilter) === "all" ? "border-primary ring-2 ring-primary/20 bg-primary/5" : "border-border hover:border-border/80"].join(" ")),
			() => clsx(["bg-card border rounded-2xl p-4 space-y-2 shadow-xs relative overflow-hidden group text-left cursor-pointer transition-all", get(supPurposeFilter) === "wallet" ? "border-emerald-500 ring-2 ring-emerald-500/20 bg-emerald-500/5" : "border-border hover:border-border/80"].join(" ")),
			() => clsx(["bg-card border rounded-2xl p-4 space-y-2 shadow-xs relative overflow-hidden group text-left cursor-pointer transition-all", get(supPurposeFilter) === "credit" ? "border-blue-500 ring-2 ring-blue-500/20 bg-blue-500/5" : "border-border hover:border-border/80"].join(" ")),
			() => clsx(["bg-card border rounded-2xl p-4 space-y-2 shadow-xs relative overflow-hidden group text-left cursor-pointer transition-all", get(supPurposeFilter) === "advance" ? "border-purple-500 ring-2 ring-purple-500/20 bg-purple-500/5" : "border-border hover:border-border/80"].join(" ")),
			() => clsx(["bg-card border rounded-2xl p-4 space-y-2 shadow-xs relative overflow-hidden group text-left cursor-pointer transition-all", get(supPurposeFilter) === "refund" ? "border-amber-500 ring-2 ring-amber-500/20 bg-amber-500/5" : "border-border hover:border-border/80"].join(" ")),
			() => clsx(["bg-card border rounded-2xl p-4 space-y-2 shadow-xs relative overflow-hidden group text-left cursor-pointer transition-all", get(supStatusFilter) === "pending" ? "border-yellow-500 ring-2 ring-yellow-500/20 bg-yellow-500/5" : "border-border hover:border-border/80"].join(" "))
		]);
		delegated("click", button_10, () => {
			set(supPurposeFilter, "all");
			set(supStatusFilter, "all");
		});
		delegated("click", button_11, () => handleSupplierPurposeCardClick("wallet"));
		delegated("click", button_12, () => handleSupplierPurposeCardClick("credit"));
		delegated("click", button_13, () => handleSupplierPurposeCardClick("advance"));
		delegated("click", button_14, () => handleSupplierPurposeCardClick("refund"));
		delegated("click", button_15, handleSupplierPendingCardClick);
		bind_value(input_3, () => get(supSearchVal), ($$value) => set(supSearchVal, $$value));
		bind_value(input_4, () => get(supStartDate), ($$value) => set(supStartDate, $$value));
		bind_value(input_5, () => get(supEndDate), ($$value) => set(supEndDate, $$value));
		bind_select_value(select_2, () => get(supPurposeFilter), ($$value) => set(supPurposeFilter, $$value));
		bind_select_value(select_3, () => get(supSupplierFilter), ($$value) => set(supSupplierFilter, $$value));
		append($$anchor, fragment_11);
	};
	if_block(node_6, ($$render) => {
		if (get(activePaymentTab) === "expenses") $$render(consequent_9);
		else $$render(alternate_6, -1);
	});
	reset(div);
	template_effect(($0, $1, $2, $3) => {
		set_class(button, 1, $0);
		set_class(span, 1, $1);
		set_text(text, get(expenses).length);
		set_class(button_1, 1, $2);
		set_class(span_1, 1, $3);
		set_text(text_1, get(supplierPayments).length);
	}, [
		() => clsx(["px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2", get(activePaymentTab) === "expenses" ? "bg-primary text-primary-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"].join(" ")),
		() => clsx(["px-1.5 py-0.5 rounded-md text-[10px] font-mono", get(activePaymentTab) === "expenses" ? "bg-primary-foreground/20 text-primary-foreground" : "bg-muted text-muted-foreground"].join(" ")),
		() => clsx(["px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2", get(activePaymentTab) === "supplier" ? "bg-primary text-primary-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"].join(" ")),
		() => clsx(["px-1.5 py-0.5 rounded-md text-[10px] font-mono", get(activePaymentTab) === "supplier" ? "bg-primary-foreground/20 text-primary-foreground" : "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 font-bold"].join(" "))
	]);
	delegated("click", button, () => set(activePaymentTab, "expenses"));
	delegated("click", button_1, () => set(activePaymentTab, "supplier"));
	append($$anchor, div);
	var $$pop = pop($$exports);
	$$cleanup();
	return $$pop;
}
delegate(["click", "change"]);
//#endregion
export { _page as component };

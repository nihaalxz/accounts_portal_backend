import { B as append, Bt as reset, Ct as user_derived, D as head, Et as store_get, H as from_html, I as if_block, K as delegate, N as each, Nt as pop, P as index, Pt as push, Q as get, R as set_text, T as clsx, Tt as setup_stores, _ as set_attribute, b as bind_select_value, bt as state, dt as $document, gt as proxy, ht as sibling, mt as first_child, ot as template_effect, pt as child, q as delegated, r as onMount, rt as deferred_template_effect, vt as set, w as set_class, zt as next } from "../chunks/dXkmWTgM.js";
import { t as goto } from "../chunks/BmfFBmVM.js";
import "../chunks/DhaYE-8x.js";
import { r as toast } from "../chunks/CbPRQHfn.js";
import { t as Arrow_left } from "../chunks/Bn7x0kyr.js";
import { t as Arrow_up_right } from "../chunks/BUyTpJv8.js";
import { t as Building_2 } from "../chunks/PAfPMPpZ.js";
import { t as Chevron_left } from "../chunks/bgfi4Y0B.js";
import { t as Chevron_right } from "../chunks/BQLzQDdY.js";
import { t as Circle_alert } from "../chunks/CHXThoj_.js";
import { t as Credit_card } from "../chunks/DZ-rRKb92.js";
import { t as Download } from "../chunks/D8w6XH0S2.js";
import { t as File_text } from "../chunks/NLRKrZbo2.js";
import { t as Funnel } from "../chunks/BlRZ0F4U2.js";
import { t as Landmark } from "../chunks/D_q7zQKx2.js";
import { t as Plus } from "../chunks/BObidJ7B2.js";
import { t as Printer } from "../chunks/Ds2DlsUi2.js";
import { t as Refresh_cw } from "../chunks/DpTJy0Wb2.js";
import { n as Rotate_ccw, t as ErrorState } from "../chunks/B7ZVWvAI2.js";
import { t as Scale } from "../chunks/C0w_H_EC.js";
import { t as Search } from "../chunks/D7t9qluE.js";
import { t as Tag } from "../chunks/lD5gNYPy.js";
import { t as Wallet } from "../chunks/BahXSy4P.js";
import { t as X } from "../chunks/wXHc9RNY.js";
import { t as page } from "../chunks/Df2Bcctg.js";
import { t as Button } from "../chunks/BhXsq3bC.js";
import "../chunks/BOA9EBmv.js";
import { t as MoneyDisplay } from "../chunks/CIVSRuaR.js";
import { t as DateDisplay } from "../chunks/CJpXG-QD.js";
import { n as PageContainer, t as StatusBadge } from "../chunks/Br8UPlmC.js";
import { t as exportToCSV } from "../chunks/C74Z4VDd2.js";
import { t as previewDocument } from "../chunks/B63GPmT62.js";
import { t as FormattedNarrative } from "../chunks/CHiWmlVe2.js";
import { t as Input } from "../chunks/C4xMLgho2.js";
import { d as getSuppliers, l as getSupplierPayments, s as getPurchaseReturns, u as getSupplierStatement } from "../chunks/CsI5DaB02.js";
//#region src/routes/(app)/suppliers/[id]/+page.svelte
var root = from_html(`<div class="grid grid-cols-3 gap-4 p-3 bg-gray-100 rounded text-xs"><div><span class="block text-gray-500 font-semibold uppercase text-[10px]">Prepaid Wallet</span> <span class="font-mono font-bold text-black"> </span></div> <div><span class="block text-gray-500 font-semibold uppercase text-[10px]">Credit Debt</span> <span class="font-mono font-bold text-black"> </span></div> <div><span class="block text-gray-500 font-semibold uppercase text-[10px]">Net Standing</span> <span class="font-mono font-bold text-black"> </span></div></div>`);
var root_1 = from_html(`<!> Back to Suppliers`, 1);
var root_2 = from_html(`<span class="font-mono text-xs text-muted-foreground font-semibold px-2 py-0.5 bg-muted rounded-md border border-border"> </span> <!>`, 1);
var root_3 = from_html(`<!> <span> </span>`, 1);
var root_4 = from_html(`<!> <span>Export PDF / Print</span>`, 1);
var root_5 = from_html(`<!> <span>Top-up Wallet</span>`, 1);
var root_6 = from_html(`<div class="bg-card border border-border rounded-2xl p-16 flex flex-col items-center justify-center gap-3 animate-pulse mt-6"><!> <p class="text-xs text-muted-foreground font-medium">Loading supplier financial profile & statement ledger...</p></div>`);
var root_7 = from_html(`<div class="mt-6"><!></div>`);
var root_8 = from_html(`<button class="text-xs font-bold text-rose-700 hover:underline cursor-pointer flex items-center gap-0.5">Settle <!></button>`);
var root_9 = from_html(`<span class="text-[10px] bg-primary/10 text-primary font-semibold px-2 py-0.5 rounded-md border border-primary/20"> </span>`);
var root_10 = from_html(`<div class="text-center py-10 text-xs text-muted-foreground border border-dashed border-border rounded-xl">No financial statement entries logged for this supplier yet.</div>`);
var root_11 = from_html(`<tr class="hover:bg-muted/10 transition-colors"><td class="p-3 font-mono font-bold text-foreground"> </td><td class="p-3"><span> </span></td><td class="p-3 text-right font-mono font-bold text-foreground"><!></td><td class="p-3 uppercase font-medium"> </td><td class="p-3 font-mono text-muted-foreground"> </td><td class="p-3"><!></td><td class="p-3 text-muted-foreground"><!></td></tr>`);
var root_12 = from_html(`<div class="overflow-x-auto"><table class="w-full text-left border-collapse text-xs"><thead><tr class="bg-muted/40 border-b border-border text-muted-foreground font-semibold text-[10px] uppercase tracking-wider"><th class="p-3">Txn ID</th><th class="p-3">Type</th><th class="p-3 text-right">Amount</th><th class="p-3">Payment Method</th><th class="p-3">Reference</th><th class="p-3">Status</th><th class="p-3">Date</th></tr></thead><tbody class="divide-y divide-border/60"></tbody></table></div>`);
var root_13 = from_html(`<div class="mt-6 space-y-6 print:hidden"><div><div class="bg-card border border-border rounded-2xl p-5 space-y-4 shadow-xs"><h3 class="text-sm font-bold text-foreground flex items-center gap-2"><!> Supplier Credentials & Meta</h3> <div class="divide-y divide-border/60 text-xs"><div class="py-2.5 flex justify-between items-center"><span class="text-muted-foreground font-medium">Supplier Name</span> <span class="font-bold text-foreground"> </span></div> <div class="py-2.5 flex justify-between items-center"><span class="text-muted-foreground font-medium">Supplier Code</span> <span class="font-mono font-bold text-foreground bg-muted px-2 py-0.5 rounded"> </span></div> <div class="py-2.5 flex justify-between items-center"><span class="text-muted-foreground font-medium">System ID</span> <span class="font-mono font-semibold text-muted-foreground"> </span></div> <div class="py-2.5 flex justify-between items-center"><span class="text-muted-foreground font-medium">Verification Status</span> <!></div> <div class="py-2.5 flex justify-between items-center"><span class="text-muted-foreground font-medium">Categories</span> <div class="flex flex-wrap gap-1"></div></div> <div class="py-2.5 flex justify-between items-center"><span class="text-muted-foreground font-medium">Created Date</span> <span class="text-foreground"><!></span></div></div></div></div> <div class="bg-card border border-border rounded-2xl p-5 space-y-4 shadow-xs"><div class="flex items-center justify-between"><h3 class="text-sm font-bold text-foreground flex items-center gap-2"><!> Recent Statement Ledger Activity</h3> <button class="text-xs font-bold text-primary hover:underline cursor-pointer flex items-center gap-1"> <!></button></div> <!></div></div>`);
var root_14 = from_html(`<!> Reset`, 1);
var root_15 = from_html(`<div class="p-16 text-center text-muted-foreground text-xs space-y-2"><!> <p class="font-bold text-foreground">No matching ledger entries found</p> <p>Try adjusting your search query, type filter, or date range.</p></div>`);
var root_16 = from_html(`<div class="flex items-center gap-1 text-[11px] font-medium text-emerald-700 dark:text-emerald-400"><!> <span> </span></div>`);
var root_17 = from_html(`<div class="flex items-center gap-1 text-[11px] font-medium text-blue-700 dark:text-blue-400"><!> <span> </span></div>`);
var root_18 = from_html(`<div class="flex items-center gap-1 text-[11px] font-medium text-amber-700 dark:text-amber-400"><!> <span>Prepaid Supplier Wallet</span></div>`);
var root_19 = from_html(`<a class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"><!> </a>`);
var root_20 = from_html(`<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-primary/10 text-primary border border-primary/20"><!> </span>`);
var root_21 = from_html(`<div class="flex items-center gap-1.5 flex-wrap"><!></div>`);
var root_22 = from_html(`<tr class="hover:bg-muted/10 transition-colors"><td class="p-3.5 font-mono font-bold text-foreground"> </td><td class="p-3.5"><span> </span></td><td class="p-3.5 text-right font-mono font-bold text-foreground"><!></td><td class="p-3.5"><div class="space-y-1"><div class="flex items-center gap-1.5"><span class="px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-muted border border-border text-foreground"> </span></div> <!></div></td><td class="p-3.5"><div class="space-y-1 max-w-md"><!> <div class="text-xs text-foreground leading-snug"><!></div></div></td><td class="p-3.5"><!></td><td class="p-3.5 text-muted-foreground"><!></td></tr>`);
var root_23 = from_html(`<!> Previous`, 1);
var root_24 = from_html(`Next <!>`, 1);
var root_25 = from_html(`<div class="p-4 border-t border-border flex items-center justify-between text-xs print:hidden"><span class="text-muted-foreground"> </span> <div class="flex items-center gap-2"><!> <!></div></div>`);
var root_26 = from_html(`<div class="overflow-x-auto"><table class="w-full text-left border-collapse text-xs"><thead><tr class="bg-muted/40 border-b border-border text-muted-foreground font-semibold uppercase tracking-wider text-[10px] print:bg-transparent"><th class="p-3.5">Txn ID</th><th class="p-3.5">Type</th><th class="p-3.5 text-right">Amount</th><th class="p-3.5">Payment Mode & Account</th><th class="p-3.5">Application / Reference & Narrative</th><th class="p-3.5">Status</th><th class="p-3.5">Date</th></tr></thead><tbody class="divide-y divide-border/60"></tbody></table></div> <!>`, 1);
var root_27 = from_html(`<div class="mt-6 space-y-4 print:space-y-0"><div class="bg-card border border-border rounded-2xl p-4 space-y-3 shadow-xs print:hidden"><div class="flex flex-col md:flex-row items-center justify-between gap-3"><div class="relative w-full md:w-80"><!> <!></div> <div class="flex flex-wrap items-center gap-2 w-full md:w-auto"><div class="flex items-center gap-1.5 bg-background border border-border rounded-xl px-3 py-1.5 text-xs"><!> <select class="bg-transparent text-xs font-semibold text-foreground focus:outline-none cursor-pointer"><option>All Types</option><option>Incoming / Deposit</option><option>Outgoing / Payout</option><option>Purchase Return</option><option>Sales Return</option></select></div> <div class="flex items-center gap-2 text-xs"><!> <span class="text-muted-foreground font-semibold">to</span> <!></div> <!></div></div> <div class="flex justify-between items-center text-xs text-muted-foreground pt-1 border-t border-border/40"><span>Showing <strong> </strong> matching entries</span> <span> </span></div></div> <div class="bg-card border border-border rounded-2xl overflow-hidden shadow-xs print:border-none print:shadow-none"><!></div></div>`);
var root_28 = from_html(`<!> New Payment / Top-up`, 1);
var root_29 = from_html(`<div class="p-12 text-center text-xs text-muted-foreground border border-dashed border-border rounded-xl">No supplier payment payouts logged for this supplier yet.</div>`);
var root_30 = from_html(`<tr class="hover:bg-muted/10 transition-colors"><td class="p-3.5 font-mono font-bold text-foreground"> </td><td class="p-3.5 text-right font-mono font-bold text-foreground"><!></td><td class="p-3.5 uppercase font-semibold text-foreground"> </td><td class="p-3.5 font-mono text-muted-foreground"> </td><td class="p-3.5 text-muted-foreground max-w-xs truncate"> </td><td class="p-3.5"><!></td><td class="p-3.5 text-muted-foreground"><!></td></tr>`);
var root_31 = from_html(`<div class="overflow-x-auto"><table class="w-full text-left border-collapse text-xs"><thead><tr class="bg-muted/40 border-b border-border text-muted-foreground font-semibold text-[10px] uppercase tracking-wider"><th class="p-3.5">Payment ID</th><th class="p-3.5 text-right">Amount</th><th class="p-3.5">Method</th><th class="p-3.5">Ref Number</th><th class="p-3.5">Description</th><th class="p-3.5">Status</th><th class="p-3.5">Requested At</th></tr></thead><tbody class="divide-y divide-border/60"></tbody></table></div>`);
var root_32 = from_html(`<div class="mt-6 space-y-4 print:hidden"><div class="bg-card border border-border rounded-2xl p-5 space-y-4 shadow-xs"><div class="flex items-center justify-between"><h3 class="text-sm font-bold text-foreground flex items-center gap-2"><!> </h3> <!></div> <!></div></div>`);
var root_33 = from_html(`<div class="p-12 text-center text-xs text-muted-foreground border border-dashed border-border rounded-xl">No purchase returns recorded for this supplier yet.</div>`);
var root_34 = from_html(`<tr class="hover:bg-muted/10 transition-colors"><td class="p-3.5 font-mono font-bold text-foreground"> </td><td class="p-3.5 text-right font-mono font-bold text-emerald-600"><!></td><td class="p-3.5 text-muted-foreground"> </td><td class="p-3.5"><!></td><td class="p-3.5 text-muted-foreground"><!></td></tr>`);
var root_35 = from_html(`<div class="overflow-x-auto"><table class="w-full text-left border-collapse text-xs"><thead><tr class="bg-muted/40 border-b border-border text-muted-foreground font-semibold text-[10px] uppercase tracking-wider"><th class="p-3.5">Return ID</th><th class="p-3.5 text-right">Amount</th><th class="p-3.5">Reason</th><th class="p-3.5">Status</th><th class="p-3.5">Requested At</th></tr></thead><tbody class="divide-y divide-border/60"></tbody></table></div>`);
var root_36 = from_html(`<div class="mt-6 space-y-4 print:hidden"><div class="bg-card border border-border rounded-2xl p-5 space-y-4 shadow-xs"><div class="flex items-center justify-between"><h3 class="text-sm font-bold text-foreground flex items-center gap-2"><!> </h3></div> <!></div></div>`);
var root_37 = from_html(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 print:hidden"><div class="bg-card border border-emerald-500/30 rounded-2xl p-5 shadow-xs relative overflow-hidden flex flex-col justify-between"><div class="flex items-center justify-between"><span class="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">Prepaid Wallet</span> <div class="p-2 rounded-xl bg-emerald-500/10 text-emerald-600"><!></div></div> <div class="mt-3"><span class="text-2xl font-bold font-mono tracking-tight text-emerald-600 dark:text-emerald-400 block"><!></span> <span class="text-[11px] text-muted-foreground mt-0.5 block font-medium">Available balance for booking payouts</span></div> <div class="mt-4 pt-3 border-t border-emerald-500/20 flex items-center justify-between"><span class="text-[11px] font-semibold text-emerald-700 dark:text-emerald-400"> </span> <button class="text-xs font-bold text-emerald-700 hover:underline cursor-pointer flex items-center gap-0.5">Top-up <!></button></div></div> <div class="bg-card border border-rose-500/30 rounded-2xl p-5 shadow-xs relative overflow-hidden flex flex-col justify-between"><div class="flex items-center justify-between"><span class="text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400">Credit Debt (Payable)</span> <div class="p-2 rounded-xl bg-rose-500/10 text-rose-600"><!></div></div> <div class="mt-3"><span class="text-2xl font-bold font-mono tracking-tight text-rose-600 dark:text-rose-400 block"><!></span> <span class="text-[11px] text-muted-foreground mt-0.5 block font-medium">Pending debt liability to supplier</span></div> <div class="mt-4 pt-3 border-t border-rose-500/20 flex items-center justify-between"><span class="text-[11px] font-semibold text-rose-700 dark:text-rose-400"> </span> <!></div></div> <div class="bg-card border border-border rounded-2xl p-5 shadow-xs relative overflow-hidden flex flex-col justify-between"><div class="flex items-center justify-between"><span class="text-xs font-bold uppercase tracking-wider text-muted-foreground">Net Position</span> <div class="p-2 rounded-xl bg-primary/10 text-primary"><!></div></div> <div class="mt-3"><span><!></span> <span class="text-[11px] text-muted-foreground mt-0.5 block font-medium">Prepaid Wallet minus Credit Debt</span></div> <div class="mt-4 pt-3 border-t border-border/60 flex items-center justify-between"><span class="text-[11px] font-medium text-muted-foreground">Overall Standing</span> <span class="text-xs font-bold capitalize"> </span></div></div> <div class="bg-card border border-border rounded-2xl p-5 shadow-xs relative overflow-hidden flex flex-col justify-between"><div class="flex items-center justify-between"><span class="text-xs font-bold uppercase tracking-wider text-muted-foreground">Activity Summary</span> <div class="p-2 rounded-xl bg-blue-500/10 text-blue-600"><!></div></div> <div class="mt-2 space-y-1"><div class="flex justify-between items-center text-xs"><span class="text-muted-foreground font-medium">Total Paid:</span> <span class="font-mono font-bold text-foreground"><!></span></div> <div class="flex justify-between items-center text-xs"><span class="text-muted-foreground font-medium">Purchase Returns:</span> <span class="font-mono font-bold text-emerald-600"><!></span></div> <div class="flex justify-between items-center text-xs"><span class="text-muted-foreground font-medium">Ledger Entries:</span> <span class="font-bold text-foreground"> </span></div></div> <div class="mt-3 pt-2 border-t border-border/60 flex items-center justify-between text-[11px]"><span class="text-muted-foreground">Categories:</span> <span class="font-semibold text-foreground truncate max-w-[120px]"> </span></div></div></div> <div class="mt-6 border-b border-border flex gap-2 overflow-x-auto print:hidden"><button><!> Overview & Financial Summary</button> <button><!> </button> <button><!> </button> <button><!> </button></div> <!> <!> <!> <!> <div class="hidden print:block mt-12 pt-6 border-t border-gray-300 text-xs text-gray-600"><div class="flex justify-between items-end"><div><p class="font-bold text-black">Texas Travels Accounts Management</p> <p>Confidential & Proprietary Statement Document</p></div> <div class="text-right border-t border-black pt-2 w-48"><p class="font-bold text-black text-center">Authorized Signature</p></div></div></div>`, 1);
var root_38 = from_html(`<div class="hidden print:block space-y-4 mb-6 pb-4 border-b border-gray-300"><div class="flex justify-between items-start"><div><h1 class="text-xl font-bold text-black uppercase tracking-wider">Texas Travels — Official Supplier Ledger</h1> <p class="text-xs text-gray-600">Supplier Statement of Account & Financial Activity Audit</p></div> <div class="text-right text-xs text-gray-600"><p class="font-bold text-black"> </p> <p> </p> <p> </p></div></div> <!></div> <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 print:hidden"><div class="flex items-center gap-3"><!> <div><div class="flex items-center gap-2"><h1 class="text-xl font-bold text-foreground"> </h1> <!></div> <p class="text-xs text-muted-foreground mt-0.5"> </p></div></div> <div class="flex flex-wrap items-center gap-2"><!> <!> <!> <!></div></div> <!>`, 1);
function _page($$anchor, $$props) {
	push($$props, true);
	const $page = () => store_get(page, "$page", $$stores);
	const [$$stores, $$cleanup] = setup_stores();
	const supplierId = Number($page().params.id);
	let isLoading = state(true);
	let errorMsg = state(null);
	let supplier = state(null);
	let transactions = state(proxy([]));
	let supplierPayments = state(proxy([]));
	let purchaseReturns = state(proxy([]));
	let activeTab = state("overview");
	let searchQuery = state("");
	let selectedType = state("all");
	let startDate = state("");
	let endDate = state("");
	let currentPage = state(1);
	const pageSize = 15;
	let exportingCSV = state(false);
	async function loadSupplierDetails() {
		set(isLoading, true);
		set(errorMsg, null);
		try {
			const [suppliersList, statementData, paymentsData, returnsData] = await Promise.all([
				getSuppliers(),
				getSupplierStatement(supplierId, {
					page: 1,
					pageSize: 1e3
				}),
				getSupplierPayments({ supplierId }).catch(() => []),
				getPurchaseReturns({ supplierId }).catch(() => [])
			]);
			set(supplier, suppliersList.find((s) => s.id === supplierId) || null, true);
			if (!get(supplier)) throw new Error(`Supplier with ID ${supplierId} not found.`);
			set(transactions, statementData || [], true);
			set(supplierPayments, paymentsData || [], true);
			set(purchaseReturns, returnsData || [], true);
		} catch (err) {
			set(errorMsg, err.message || "Failed to load supplier details.", true);
		} finally {
			set(isLoading, false);
		}
	}
	const filteredTransactions = user_derived(() => {
		return get(transactions).filter((tx) => {
			const q = get(searchQuery).toLowerCase().trim();
			const matchesSearch = !q || String(tx.id).includes(q) || tx.documentNumber && tx.documentNumber.toLowerCase().includes(q) || tx.referenceId && tx.referenceId.toLowerCase().includes(q) || tx.referenceDisplayName && tx.referenceDisplayName.toLowerCase().includes(q) || tx.paymentMethod && tx.paymentMethod.toLowerCase().includes(q) || tx.paymentMethodName && tx.paymentMethodName.toLowerCase().includes(q) || tx.sourceBankName && tx.sourceBankName.toLowerCase().includes(q) || tx.destinationBankName && tx.destinationBankName.toLowerCase().includes(q) || tx.sourceAccountName && tx.sourceAccountName.toLowerCase().includes(q) || tx.destinationAccountName && tx.destinationAccountName.toLowerCase().includes(q) || tx.displayNarrative && tx.displayNarrative.toLowerCase().includes(q) || tx.description && tx.description.toLowerCase().includes(q) || tx.transactionType && tx.transactionType.toLowerCase().includes(q);
			const matchesType = get(selectedType) === "all" || tx.transactionType && tx.transactionType.toLowerCase() === get(selectedType).toLowerCase();
			let matchesDate = true;
			if (get(startDate) || get(endDate)) {
				const txDate = new Date(tx.createdAt).getTime();
				if (get(startDate) && txDate < new Date(get(startDate)).getTime()) matchesDate = false;
				if (get(endDate) && txDate > (/* @__PURE__ */ new Date(get(endDate) + "T23:59:59")).getTime()) matchesDate = false;
			}
			return matchesSearch && matchesType && matchesDate;
		});
	});
	const totalPages = user_derived(() => Math.ceil(get(filteredTransactions).length / pageSize) || 1);
	const paginatedTransactions = user_derived(() => {
		const start = (get(currentPage) - 1) * pageSize;
		return get(filteredTransactions).slice(start, start + pageSize);
	});
	const netPosition = user_derived(() => (get(supplier)?.wallet ?? 0) - (get(supplier)?.creditWallet ?? 0));
	const totalPaidApproved = user_derived(() => get(supplierPayments).filter((p) => p.status?.toLowerCase() === "approved").reduce((sum, p) => sum + p.amount, 0));
	const totalReturnsApproved = user_derived(() => get(purchaseReturns).filter((r) => r.status?.toLowerCase() === "approved").reduce((sum, r) => sum + r.amount, 0));
	function resetFilters() {
		set(searchQuery, "");
		set(selectedType, "all");
		set(startDate, "");
		set(endDate, "");
		set(currentPage, 1);
	}
	async function handlePrint() {
		if (!get(supplier)) return;
		toast.info("Generating server PDF document...");
		await previewDocument("report", "supplier-statement", {
			supplierId: get(supplier).id,
			startDate: get(startDate),
			endDate: get(endDate)
		});
	}
	function exportCSV() {
		if (!get(supplier)) return;
		set(exportingCSV, true);
		try {
			const headers = [
				"Txn ID",
				"Date",
				"Type",
				"Amount (BHD)",
				"Payment Mode",
				"Bank / Cash Account",
				"Application / Reference",
				"Description / Narrative",
				"Status"
			];
			const rows = get(filteredTransactions).map((tx) => [
				tx.documentNumber || `#${tx.id}`,
				tx.createdAt ? tx.createdAt.split("T")[0] : "",
				tx.transactionType,
				tx.amount,
				tx.paymentMethodName || tx.paymentMethod || "",
				tx.sourceBankName || tx.destinationBankName || tx.sourceAccountName || tx.destinationAccountName || "",
				tx.referenceDisplayName || tx.referenceId || "",
				tx.displayNarrative || tx.displayDescription || tx.description || "",
				tx.status
			]);
			exportToCSV(`supplier_statement_${get(supplier).name.replace(/[^a-z0-9]/gi, "_").toLowerCase()}_${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.csv`, headers, rows);
			toast.success("CSV statement exported successfully.");
		} catch (err) {
			toast.error(err.message || "Failed to export CSV.");
		} finally {
			set(exportingCSV, false);
		}
	}
	onMount(() => {
		loadSupplierDetails();
	});
	head("1xw2wr7", ($$anchor) => {
		deferred_template_effect(() => {
			$document.title = `${get(supplier) ? `${get(supplier).name} (${get(supplier).code})` : `Supplier #${supplierId}`} — Accounts Portal`;
		});
	});
	PageContainer($$anchor, {
		class: "print:p-0 print:m-0 print:max-w-none",
		children: ($$anchor, $$slotProps) => {
			var fragment_1 = root_38();
			var div = first_child(fragment_1);
			var div_1 = child(div);
			var div_2 = sibling(child(div_1), 2);
			var p_1 = child(div_2);
			var text = child(p_1, true);
			reset(p_1);
			var p_2 = sibling(p_1, 2);
			var text_1 = child(p_2);
			reset(p_2);
			var p_3 = sibling(p_2, 2);
			var text_2 = child(p_3);
			reset(p_3);
			reset(div_2);
			reset(div_1);
			var node = sibling(div_1, 2);
			var consequent = ($$anchor) => {
				var div_3 = root();
				var div_4 = child(div_3);
				var span = sibling(child(div_4), 2);
				var text_3 = child(span);
				reset(span);
				reset(div_4);
				var div_5 = sibling(div_4, 2);
				var span_1 = sibling(child(div_5), 2);
				var text_4 = child(span_1);
				reset(span_1);
				reset(div_5);
				var div_6 = sibling(div_5, 2);
				var span_2 = sibling(child(div_6), 2);
				var text_5 = child(span_2);
				reset(span_2);
				reset(div_6);
				reset(div_3);
				template_effect(($0, $1, $2) => {
					set_text(text_3, `${$0 ?? ""} BHD`);
					set_text(text_4, `${$1 ?? ""} BHD`);
					set_text(text_5, `${$2 ?? ""} BHD`);
				}, [
					() => get(supplier).wallet.toFixed(3),
					() => get(supplier).creditWallet.toFixed(3),
					() => get(netPosition).toFixed(3)
				]);
				append($$anchor, div_3);
			};
			if_block(node, ($$render) => {
				if (get(supplier)) $$render(consequent);
			});
			reset(div);
			var div_7 = sibling(div, 2);
			var div_8 = child(div_7);
			var node_1 = child(div_8);
			Button(node_1, {
				variant: "outline",
				class: "h-9 rounded-xl cursor-pointer flex items-center gap-1.5 text-xs font-semibold",
				onclick: () => goto("/suppliers"),
				children: ($$anchor, $$slotProps) => {
					var fragment_2 = root_1();
					Arrow_left(first_child(fragment_2), { class: "h-4 w-4" });
					next();
					append($$anchor, fragment_2);
				},
				$$slots: { default: true }
			});
			var div_9 = sibling(node_1, 2);
			var div_10 = child(div_9);
			var h1 = child(div_10);
			var text_6 = child(h1, true);
			reset(h1);
			var node_3 = sibling(h1, 2);
			var consequent_1 = ($$anchor) => {
				var fragment_3 = root_2();
				var span_3 = first_child(fragment_3);
				var text_7 = child(span_3, true);
				reset(span_3);
				var node_4 = sibling(span_3, 2);
				{
					let $0 = user_derived(() => get(supplier).isVerified ? "Verified" : "Unverified");
					StatusBadge(node_4, { get status() {
						return get($0);
					} });
				}
				template_effect(() => set_text(text_7, get(supplier).code));
				append($$anchor, fragment_3);
			};
			if_block(node_3, ($$render) => {
				if (get(supplier)) $$render(consequent_1);
			});
			reset(div_10);
			var p_4 = sibling(div_10, 2);
			var text_8 = child(p_4);
			reset(p_4);
			reset(div_9);
			reset(div_8);
			var div_11 = sibling(div_8, 2);
			var node_5 = child(div_11);
			{
				let $0 = user_derived(() => get(exportingCSV) || get(filteredTransactions).length === 0);
				Button(node_5, {
					variant: "outline",
					class: "h-8.5 rounded-xl cursor-pointer flex items-center gap-1.5 text-xs font-semibold",
					onclick: exportCSV,
					get disabled() {
						return get($0);
					},
					children: ($$anchor, $$slotProps) => {
						var fragment_4 = root_3();
						var node_6 = first_child(fragment_4);
						{
							let $0 = user_derived(() => ["h-3.5 w-3.5", get(exportingCSV) ? "animate-spin" : ""].join(" "));
							Download(node_6, { get class() {
								return get($0);
							} });
						}
						var span_4 = sibling(node_6, 2);
						var text_9 = child(span_4, true);
						reset(span_4);
						template_effect(() => set_text(text_9, get(exportingCSV) ? "Exporting..." : "Export CSV"));
						append($$anchor, fragment_4);
					},
					$$slots: { default: true }
				});
			}
			var node_7 = sibling(node_5, 2);
			Button(node_7, {
				variant: "outline",
				class: "h-8.5 rounded-xl cursor-pointer flex items-center gap-1.5 text-xs font-semibold",
				onclick: handlePrint,
				children: ($$anchor, $$slotProps) => {
					var fragment_5 = root_4();
					Printer(first_child(fragment_5), { class: "h-3.5 w-3.5 text-primary" });
					next(2);
					append($$anchor, fragment_5);
				},
				$$slots: { default: true }
			});
			var node_9 = sibling(node_7, 2);
			var consequent_2 = ($$anchor) => {
				Button($$anchor, {
					variant: "outline",
					class: "h-8.5 rounded-xl cursor-pointer flex items-center gap-1.5 text-xs font-semibold border-rose-200 text-rose-600 hover:bg-rose-50 dark:border-rose-900/50 dark:text-rose-400",
					onclick: () => goto(`/payments/new?supplierId=${supplierId}&type=supplier_credit`),
					children: ($$anchor, $$slotProps) => {
						var fragment_7 = root_3();
						var node_10 = first_child(fragment_7);
						Landmark(node_10, { class: "h-3.5 w-3.5" });
						var span_5 = sibling(node_10, 2);
						var text_10 = child(span_5);
						reset(span_5);
						template_effect(($0) => set_text(text_10, `Settle Debt (${$0 ?? ""} BHD)`), [() => get(supplier).creditWallet.toFixed(3)]);
						append($$anchor, fragment_7);
					},
					$$slots: { default: true }
				});
			};
			if_block(node_9, ($$render) => {
				if (get(supplier) && get(supplier).creditWallet > 0) $$render(consequent_2);
			});
			Button(sibling(node_9, 2), {
				class: "h-8.5 rounded-xl cursor-pointer flex items-center gap-1.5 text-xs font-semibold bg-primary text-primary-foreground",
				onclick: () => goto(`/payments/new?supplierId=${supplierId}&type=supplier_wallet`),
				children: ($$anchor, $$slotProps) => {
					var fragment_8 = root_5();
					Plus(first_child(fragment_8), { class: "h-3.5 w-3.5" });
					next(2);
					append($$anchor, fragment_8);
				},
				$$slots: { default: true }
			});
			reset(div_11);
			reset(div_7);
			var node_13 = sibling(div_7, 2);
			var consequent_3 = ($$anchor) => {
				var div_12 = root_6();
				Refresh_cw(child(div_12), { class: "h-8 w-8 text-primary animate-spin" });
				next(2);
				reset(div_12);
				append($$anchor, div_12);
			};
			var consequent_4 = ($$anchor) => {
				var div_13 = root_7();
				ErrorState(child(div_13), {
					get message() {
						return get(errorMsg);
					},
					retryAction: loadSupplierDetails
				});
				reset(div_13);
				append($$anchor, div_13);
			};
			var consequent_21 = ($$anchor) => {
				var fragment_9 = root_37();
				var div_14 = first_child(fragment_9);
				var div_15 = child(div_14);
				var div_16 = child(div_15);
				var div_17 = sibling(child(div_16), 2);
				Wallet(child(div_17), { class: "h-5 w-5" });
				reset(div_17);
				reset(div_16);
				var div_18 = sibling(div_16, 2);
				var span_6 = child(div_18);
				MoneyDisplay(child(span_6), { get amount() {
					return get(supplier).wallet;
				} });
				reset(span_6);
				next(2);
				reset(div_18);
				var div_19 = sibling(div_18, 2);
				var span_7 = child(div_19);
				var text_11 = child(span_7, true);
				reset(span_7);
				var button = sibling(span_7, 2);
				Arrow_up_right(sibling(child(button)), { class: "h-3 w-3" });
				reset(button);
				reset(div_19);
				reset(div_15);
				var div_20 = sibling(div_15, 2);
				var div_21 = child(div_20);
				var div_22 = sibling(child(div_21), 2);
				Landmark(child(div_22), { class: "h-5 w-5" });
				reset(div_22);
				reset(div_21);
				var div_23 = sibling(div_21, 2);
				var span_8 = child(div_23);
				MoneyDisplay(child(span_8), { get amount() {
					return get(supplier).creditWallet;
				} });
				reset(span_8);
				next(2);
				reset(div_23);
				var div_24 = sibling(div_23, 2);
				var span_9 = child(div_24);
				var text_12 = child(span_9, true);
				reset(span_9);
				var node_21 = sibling(span_9, 2);
				var consequent_5 = ($$anchor) => {
					var button_1 = root_8();
					Arrow_up_right(sibling(child(button_1)), { class: "h-3 w-3" });
					reset(button_1);
					delegated("click", button_1, () => goto(`/payments/new?supplierId=${supplierId}&type=supplier_credit`));
					append($$anchor, button_1);
				};
				if_block(node_21, ($$render) => {
					if (get(supplier).creditWallet > 0) $$render(consequent_5);
				});
				reset(div_24);
				reset(div_20);
				var div_25 = sibling(div_20, 2);
				var div_26 = child(div_25);
				var div_27 = sibling(child(div_26), 2);
				Scale(child(div_27), { class: "h-5 w-5" });
				reset(div_27);
				reset(div_26);
				var div_28 = sibling(div_26, 2);
				var span_10 = child(div_28);
				MoneyDisplay(child(span_10), { get amount() {
					return get(netPosition);
				} });
				reset(span_10);
				next(2);
				reset(div_28);
				var div_29 = sibling(div_28, 2);
				var span_11 = sibling(child(div_29), 2);
				var text_13 = child(span_11, true);
				reset(span_11);
				reset(div_29);
				reset(div_25);
				var div_30 = sibling(div_25, 2);
				var div_31 = child(div_30);
				var div_32 = sibling(child(div_31), 2);
				Credit_card(child(div_32), { class: "h-5 w-5" });
				reset(div_32);
				reset(div_31);
				var div_33 = sibling(div_31, 2);
				var div_34 = child(div_33);
				var span_12 = sibling(child(div_34), 2);
				MoneyDisplay(child(span_12), { get amount() {
					return get(totalPaidApproved);
				} });
				reset(span_12);
				reset(div_34);
				var div_35 = sibling(div_34, 2);
				var span_13 = sibling(child(div_35), 2);
				MoneyDisplay(child(span_13), { get amount() {
					return get(totalReturnsApproved);
				} });
				reset(span_13);
				reset(div_35);
				var div_36 = sibling(div_35, 2);
				var span_14 = sibling(child(div_36), 2);
				var text_14 = child(span_14, true);
				reset(span_14);
				reset(div_36);
				reset(div_33);
				var div_37 = sibling(div_33, 2);
				var span_15 = sibling(child(div_37), 2);
				var text_15 = child(span_15, true);
				reset(span_15);
				reset(div_37);
				reset(div_30);
				reset(div_14);
				var div_38 = sibling(div_14, 2);
				var button_2 = child(div_38);
				Building_2(child(button_2), { class: "h-4 w-4" });
				next();
				reset(button_2);
				var button_3 = sibling(button_2, 2);
				var node_29 = child(button_3);
				File_text(node_29, { class: "h-4 w-4" });
				var text_16 = sibling(node_29);
				reset(button_3);
				var button_4 = sibling(button_3, 2);
				var node_30 = child(button_4);
				Credit_card(node_30, { class: "h-4 w-4" });
				var text_17 = sibling(node_30);
				reset(button_4);
				var button_5 = sibling(button_4, 2);
				var node_31 = child(button_5);
				Rotate_ccw(node_31, { class: "h-4 w-4" });
				var text_18 = sibling(node_31);
				reset(button_5);
				reset(div_38);
				var node_32 = sibling(div_38, 2);
				var consequent_7 = ($$anchor) => {
					var div_39 = root_13();
					var div_40 = child(div_39);
					var div_41 = child(div_40);
					var h3 = child(div_41);
					Building_2(child(h3), { class: "h-4 w-4 text-primary" });
					next();
					reset(h3);
					var div_42 = sibling(h3, 2);
					var div_43 = child(div_42);
					var span_16 = sibling(child(div_43), 2);
					var text_19 = child(span_16, true);
					reset(span_16);
					reset(div_43);
					var div_44 = sibling(div_43, 2);
					var span_17 = sibling(child(div_44), 2);
					var text_20 = child(span_17, true);
					reset(span_17);
					reset(div_44);
					var div_45 = sibling(div_44, 2);
					var span_18 = sibling(child(div_45), 2);
					var text_21 = child(span_18);
					reset(span_18);
					reset(div_45);
					var div_46 = sibling(div_45, 2);
					var node_34 = sibling(child(div_46), 2);
					{
						let $0 = user_derived(() => get(supplier).isVerified ? "Verified" : "Unverified");
						StatusBadge(node_34, { get status() {
							return get($0);
						} });
					}
					reset(div_46);
					var div_47 = sibling(div_46, 2);
					var div_48 = sibling(child(div_47), 2);
					each(div_48, 21, () => get(supplier).categories, index, ($$anchor, cat) => {
						var span_19 = root_9();
						var text_22 = child(span_19, true);
						reset(span_19);
						template_effect(() => set_text(text_22, get(cat)));
						append($$anchor, span_19);
					});
					reset(div_48);
					reset(div_47);
					var div_49 = sibling(div_47, 2);
					var span_20 = sibling(child(div_49), 2);
					DateDisplay(child(span_20), { get value() {
						return get(supplier).createdAt;
					} });
					reset(span_20);
					reset(div_49);
					reset(div_42);
					reset(div_41);
					reset(div_40);
					var div_50 = sibling(div_40, 2);
					var div_51 = child(div_50);
					var h3_1 = child(div_51);
					File_text(child(h3_1), { class: "h-4 w-4 text-primary" });
					next();
					reset(h3_1);
					var button_6 = sibling(h3_1, 2);
					var text_23 = child(button_6);
					Arrow_up_right(sibling(text_23), { class: "h-3 w-3" });
					reset(button_6);
					reset(div_51);
					var node_38 = sibling(div_51, 2);
					var consequent_6 = ($$anchor) => {
						append($$anchor, root_10());
					};
					var alternate = ($$anchor) => {
						var div_53 = root_12();
						var table = child(div_53);
						var tbody = sibling(child(table));
						each(tbody, 21, () => get(transactions).slice(0, 5), index, ($$anchor, tx) => {
							var tr = root_11();
							var td = child(tr);
							var text_24 = child(td);
							reset(td);
							var td_1 = sibling(td);
							var span_21 = child(td_1);
							var text_25 = child(span_21, true);
							reset(span_21);
							reset(td_1);
							var td_2 = sibling(td_1);
							MoneyDisplay(child(td_2), { get amount() {
								return get(tx).amount;
							} });
							reset(td_2);
							var td_3 = sibling(td_2);
							var text_26 = child(td_3, true);
							reset(td_3);
							var td_4 = sibling(td_3);
							var text_27 = child(td_4, true);
							reset(td_4);
							var td_5 = sibling(td_4);
							StatusBadge(child(td_5), { get status() {
								return get(tx).status;
							} });
							reset(td_5);
							var td_6 = sibling(td_5);
							DateDisplay(child(td_6), { get value() {
								return get(tx).createdAt;
							} });
							reset(td_6);
							reset(tr);
							template_effect(($0) => {
								set_text(text_24, `#${get(tx).id ?? ""}`);
								set_class(span_21, 1, $0);
								set_text(text_25, get(tx).transactionType);
								set_text(text_26, get(tx).paymentMethod);
								set_text(text_27, get(tx).referenceId || "—");
							}, [() => clsx(["inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider", get(tx).transactionType === "incoming" || get(tx).transactionType === "salesreturn" ? "bg-emerald-500/10 text-emerald-600" : "bg-rose-500/10 text-rose-600"].join(" "))]);
							append($$anchor, tr);
						});
						reset(tbody);
						reset(table);
						reset(div_53);
						append($$anchor, div_53);
					};
					if_block(node_38, ($$render) => {
						if (get(transactions).length === 0) $$render(consequent_6);
						else $$render(alternate, -1);
					});
					reset(div_50);
					reset(div_39);
					template_effect(() => {
						set_text(text_19, get(supplier).name);
						set_text(text_20, get(supplier).code);
						set_text(text_21, `#${get(supplier).id ?? ""}`);
						set_text(text_23, `View All (${get(transactions).length ?? ""}) `);
					});
					delegated("click", button_6, () => set(activeTab, "statement"));
					append($$anchor, div_39);
				};
				if_block(node_32, ($$render) => {
					if (get(activeTab) === "overview") $$render(consequent_7);
				});
				var node_42 = sibling(node_32, 2);
				var consequent_16 = ($$anchor) => {
					var div_54 = root_27();
					var div_55 = child(div_54);
					var div_56 = child(div_55);
					var div_57 = child(div_56);
					var node_43 = child(div_57);
					Search(node_43, { class: "absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" });
					Input(sibling(node_43, 2), {
						type: "text",
						placeholder: "Search Txn ID, Reference, Method...",
						class: "pl-9 h-9 text-xs rounded-xl",
						get value() {
							return get(searchQuery);
						},
						set value($$value) {
							set(searchQuery, $$value, true);
						}
					});
					reset(div_57);
					var div_58 = sibling(div_57, 2);
					var div_59 = child(div_58);
					var node_45 = child(div_59);
					Funnel(node_45, { class: "h-3.5 w-3.5 text-muted-foreground" });
					var select = sibling(node_45, 2);
					var option = child(select);
					option.value = option.__value = "all";
					var option_1 = sibling(option);
					option_1.value = option_1.__value = "incoming";
					var option_2 = sibling(option_1);
					option_2.value = option_2.__value = "outgoing";
					var option_3 = sibling(option_2);
					option_3.value = option_3.__value = "purchasereturn";
					var option_4 = sibling(option_3);
					option_4.value = option_4.__value = "salesreturn";
					reset(select);
					reset(div_59);
					var div_60 = sibling(div_59, 2);
					var node_46 = child(div_60);
					Input(node_46, {
						type: "date",
						class: "h-9 text-xs rounded-xl w-36",
						title: "Start Date",
						get value() {
							return get(startDate);
						},
						set value($$value) {
							set(startDate, $$value, true);
						}
					});
					Input(sibling(node_46, 4), {
						type: "date",
						class: "h-9 text-xs rounded-xl w-36",
						title: "End Date",
						get value() {
							return get(endDate);
						},
						set value($$value) {
							set(endDate, $$value, true);
						}
					});
					reset(div_60);
					var node_48 = sibling(div_60, 2);
					var consequent_8 = ($$anchor) => {
						Button($$anchor, {
							variant: "ghost",
							size: "sm",
							onclick: resetFilters,
							class: "h-9 text-xs rounded-xl text-muted-foreground hover:text-foreground",
							children: ($$anchor, $$slotProps) => {
								var fragment_11 = root_14();
								X(first_child(fragment_11), { class: "h-3.5 w-3.5 mr-1" });
								next();
								append($$anchor, fragment_11);
							},
							$$slots: { default: true }
						});
					};
					if_block(node_48, ($$render) => {
						if (get(searchQuery) || get(selectedType) !== "all" || get(startDate) || get(endDate)) $$render(consequent_8);
					});
					reset(div_58);
					reset(div_56);
					var div_61 = sibling(div_56, 2);
					var span_22 = child(div_61);
					var strong = sibling(child(span_22));
					var text_28 = child(strong, true);
					reset(strong);
					next();
					reset(span_22);
					var span_23 = sibling(span_22, 2);
					var text_29 = child(span_23);
					reset(span_23);
					reset(div_61);
					reset(div_55);
					var div_62 = sibling(div_55, 2);
					var node_50 = child(div_62);
					var consequent_9 = ($$anchor) => {
						var div_63 = root_15();
						Circle_alert(child(div_63), { class: "h-8 w-8 text-muted-foreground mx-auto" });
						next(4);
						reset(div_63);
						append($$anchor, div_63);
					};
					var alternate_2 = ($$anchor) => {
						var fragment_12 = root_26();
						var div_64 = first_child(fragment_12);
						var table_1 = child(div_64);
						var tbody_1 = sibling(child(table_1));
						each(tbody_1, 21, () => get(paginatedTransactions), index, ($$anchor, tx) => {
							var tr_1 = root_22();
							var td_7 = child(tr_1);
							var text_30 = child(td_7, true);
							reset(td_7);
							var td_8 = sibling(td_7);
							var span_24 = child(td_8);
							var text_31 = child(span_24, true);
							reset(span_24);
							reset(td_8);
							var td_9 = sibling(td_8);
							MoneyDisplay(child(td_9), { get amount() {
								return get(tx).amount;
							} });
							reset(td_9);
							var td_10 = sibling(td_9);
							var div_65 = child(td_10);
							var div_66 = child(div_65);
							var span_25 = child(div_66);
							var text_32 = child(span_25, true);
							reset(span_25);
							reset(div_66);
							var node_53 = sibling(div_66, 2);
							var consequent_10 = ($$anchor) => {
								var div_67 = root_16();
								var node_54 = child(div_67);
								Landmark(node_54, { class: "h-3 w-3 inline text-emerald-600" });
								var span_26 = sibling(node_54, 2);
								var text_33 = child(span_26, true);
								reset(span_26);
								reset(div_67);
								template_effect(() => set_text(text_33, get(tx).sourceBankName || get(tx).destinationBankName));
								append($$anchor, div_67);
							};
							var consequent_11 = ($$anchor) => {
								var div_68 = root_17();
								var node_55 = child(div_68);
								Building_2(node_55, { class: "h-3 w-3 inline text-blue-600" });
								var span_27 = sibling(node_55, 2);
								var text_34 = child(span_27, true);
								reset(span_27);
								reset(div_68);
								template_effect(() => set_text(text_34, get(tx).sourceAccountName || get(tx).destinationAccountName));
								append($$anchor, div_68);
							};
							var consequent_12 = ($$anchor) => {
								var div_69 = root_18();
								Wallet(child(div_69), { class: "h-3 w-3 inline text-amber-600 text-[10px]" });
								next(2);
								reset(div_69);
								append($$anchor, div_69);
							};
							var d = user_derived(() => get(tx).paymentMethod?.toLowerCase() === "wallet" || get(tx).paymentMethodName?.toLowerCase().includes("wallet"));
							if_block(node_53, ($$render) => {
								if (get(tx).sourceBankName || get(tx).destinationBankName) $$render(consequent_10);
								else if (get(tx).sourceAccountName || get(tx).destinationAccountName) $$render(consequent_11, 1);
								else if (get(d)) $$render(consequent_12, 2);
							});
							reset(div_65);
							reset(td_10);
							var td_11 = sibling(td_10);
							var div_70 = child(td_11);
							var node_57 = child(div_70);
							var consequent_14 = ($$anchor) => {
								var div_71 = root_21();
								var node_58 = child(div_71);
								var consequent_13 = ($$anchor) => {
									var a = root_19();
									var node_59 = child(a);
									Tag(node_59, { class: "h-3 w-3" });
									var text_35 = sibling(node_59);
									reset(a);
									template_effect(() => {
										set_attribute(a, "href", get(tx).referenceUrl);
										set_text(text_35, ` ${(get(tx).referenceDisplayName || get(tx).referenceId) ?? ""}`);
									});
									append($$anchor, a);
								};
								var alternate_1 = ($$anchor) => {
									var span_28 = root_20();
									var node_60 = child(span_28);
									Tag(node_60, { class: "h-3 w-3" });
									var text_36 = sibling(node_60);
									reset(span_28);
									template_effect(() => set_text(text_36, ` ${(get(tx).referenceDisplayName || get(tx).referenceId) ?? ""}`));
									append($$anchor, span_28);
								};
								if_block(node_58, ($$render) => {
									if (get(tx).referenceUrl) $$render(consequent_13);
									else $$render(alternate_1, -1);
								});
								reset(div_71);
								append($$anchor, div_71);
							};
							if_block(node_57, ($$render) => {
								if (get(tx).referenceDisplayName || get(tx).referenceId) $$render(consequent_14);
							});
							var div_72 = sibling(node_57, 2);
							var node_61 = child(div_72);
							{
								let $0 = user_derived(() => get(tx).displayNarrative || get(tx).displayDescription || get(tx).description);
								FormattedNarrative(node_61, { get text() {
									return get($0);
								} });
							}
							reset(div_72);
							reset(div_70);
							reset(td_11);
							var td_12 = sibling(td_11);
							StatusBadge(child(td_12), { get status() {
								return get(tx).status;
							} });
							reset(td_12);
							var td_13 = sibling(td_12);
							DateDisplay(child(td_13), { get value() {
								return get(tx).createdAt;
							} });
							reset(td_13);
							reset(tr_1);
							template_effect(($0) => {
								set_text(text_30, get(tx).documentNumber || `#${get(tx).id}`);
								set_class(span_24, 1, $0);
								set_text(text_31, get(tx).transactionType);
								set_text(text_32, get(tx).paymentMethodName || get(tx).paymentMethod || "—");
							}, [() => clsx(["inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider", get(tx).transactionType === "incoming" || get(tx).transactionType === "salesreturn" ? "bg-emerald-500/10 text-emerald-600 border border-emerald-200" : "bg-rose-500/10 text-rose-600 border border-rose-200"].join(" "))]);
							append($$anchor, tr_1);
						});
						reset(tbody_1);
						reset(table_1);
						reset(div_64);
						var node_64 = sibling(div_64, 2);
						var consequent_15 = ($$anchor) => {
							var div_73 = root_25();
							var span_29 = child(div_73);
							var text_37 = child(span_29);
							reset(span_29);
							var div_74 = sibling(span_29, 2);
							var node_65 = child(div_74);
							{
								let $0 = user_derived(() => get(currentPage) <= 1);
								Button(node_65, {
									variant: "outline",
									size: "sm",
									class: "h-8 rounded-xl",
									onclick: () => set(currentPage, Math.max(1, get(currentPage) - 1), true),
									get disabled() {
										return get($0);
									},
									children: ($$anchor, $$slotProps) => {
										var fragment_13 = root_23();
										Chevron_left(first_child(fragment_13), { class: "h-3.5 w-3.5 mr-1" });
										next();
										append($$anchor, fragment_13);
									},
									$$slots: { default: true }
								});
							}
							var node_67 = sibling(node_65, 2);
							{
								let $0 = user_derived(() => get(currentPage) >= get(totalPages));
								Button(node_67, {
									variant: "outline",
									size: "sm",
									class: "h-8 rounded-xl",
									onclick: () => set(currentPage, Math.min(get(totalPages), get(currentPage) + 1), true),
									get disabled() {
										return get($0);
									},
									children: ($$anchor, $$slotProps) => {
										next();
										var fragment_14 = root_24();
										Chevron_right(sibling(first_child(fragment_14)), { class: "h-3.5 w-3.5 ml-1" });
										append($$anchor, fragment_14);
									},
									$$slots: { default: true }
								});
							}
							reset(div_74);
							reset(div_73);
							template_effect(() => set_text(text_37, `Showing page ${get(currentPage) ?? ""} of ${get(totalPages) ?? ""}`));
							append($$anchor, div_73);
						};
						if_block(node_64, ($$render) => {
							if (get(totalPages) > 1) $$render(consequent_15);
						});
						append($$anchor, fragment_12);
					};
					if_block(node_50, ($$render) => {
						if (get(filteredTransactions).length === 0) $$render(consequent_9);
						else $$render(alternate_2, -1);
					});
					reset(div_62);
					reset(div_54);
					template_effect(() => {
						set_text(text_28, get(filteredTransactions).length);
						set_text(text_29, `Page ${get(currentPage) ?? ""} of ${get(totalPages) ?? ""}`);
					});
					bind_select_value(select, () => get(selectedType), ($$value) => set(selectedType, $$value));
					append($$anchor, div_54);
				};
				if_block(node_42, ($$render) => {
					if (get(activeTab) === "statement") $$render(consequent_16);
				});
				var node_69 = sibling(node_42, 2);
				var consequent_18 = ($$anchor) => {
					var div_75 = root_32();
					var div_76 = child(div_75);
					var div_77 = child(div_76);
					var h3_2 = child(div_77);
					var node_70 = child(h3_2);
					Credit_card(node_70, { class: "h-4 w-4 text-primary" });
					var text_38 = sibling(node_70);
					reset(h3_2);
					Button(sibling(h3_2, 2), {
						size: "sm",
						class: "h-8 rounded-xl text-xs font-semibold bg-primary text-primary-foreground cursor-pointer",
						onclick: () => goto(`/payments/new?supplierId=${supplierId}&type=supplier_wallet`),
						children: ($$anchor, $$slotProps) => {
							var fragment_15 = root_28();
							Plus(first_child(fragment_15), { class: "h-3.5 w-3.5 mr-1" });
							next();
							append($$anchor, fragment_15);
						},
						$$slots: { default: true }
					});
					reset(div_77);
					var node_73 = sibling(div_77, 2);
					var consequent_17 = ($$anchor) => {
						append($$anchor, root_29());
					};
					var alternate_3 = ($$anchor) => {
						var div_79 = root_31();
						var table_2 = child(div_79);
						var tbody_2 = sibling(child(table_2));
						each(tbody_2, 21, () => get(supplierPayments), index, ($$anchor, sp) => {
							var tr_2 = root_30();
							var td_14 = child(tr_2);
							var text_39 = child(td_14);
							reset(td_14);
							var td_15 = sibling(td_14);
							MoneyDisplay(child(td_15), { get amount() {
								return get(sp).amount;
							} });
							reset(td_15);
							var td_16 = sibling(td_15);
							var text_40 = child(td_16, true);
							reset(td_16);
							var td_17 = sibling(td_16);
							var text_41 = child(td_17, true);
							reset(td_17);
							var td_18 = sibling(td_17);
							var text_42 = child(td_18, true);
							reset(td_18);
							var td_19 = sibling(td_18);
							StatusBadge(child(td_19), { get status() {
								return get(sp).status;
							} });
							reset(td_19);
							var td_20 = sibling(td_19);
							DateDisplay(child(td_20), { get value() {
								return get(sp).requestedAt;
							} });
							reset(td_20);
							reset(tr_2);
							template_effect(() => {
								set_text(text_39, `#${get(sp).id ?? ""}`);
								set_text(text_40, get(sp).sourceBankName || get(sp).sourceAccountName ? `${get(sp).paymentMethod} (${get(sp).sourceBankName || get(sp).sourceAccountName})` : get(sp).paymentMethod);
								set_text(text_41, get(sp).referenceNumber || "—");
								set_text(text_42, get(sp).description || "—");
							});
							append($$anchor, tr_2);
						});
						reset(tbody_2);
						reset(table_2);
						reset(div_79);
						append($$anchor, div_79);
					};
					if_block(node_73, ($$render) => {
						if (get(supplierPayments).length === 0) $$render(consequent_17);
						else $$render(alternate_3, -1);
					});
					reset(div_76);
					reset(div_75);
					template_effect(() => set_text(text_38, ` Supplier Payments Log (${get(supplierPayments).length ?? ""})`));
					append($$anchor, div_75);
				};
				if_block(node_69, ($$render) => {
					if (get(activeTab) === "payments") $$render(consequent_18);
				});
				var node_77 = sibling(node_69, 2);
				var consequent_20 = ($$anchor) => {
					var div_80 = root_36();
					var div_81 = child(div_80);
					var div_82 = child(div_81);
					var h3_3 = child(div_82);
					var node_78 = child(h3_3);
					Rotate_ccw(node_78, { class: "h-4 w-4 text-primary" });
					var text_43 = sibling(node_78);
					reset(h3_3);
					reset(div_82);
					var node_79 = sibling(div_82, 2);
					var consequent_19 = ($$anchor) => {
						append($$anchor, root_33());
					};
					var alternate_4 = ($$anchor) => {
						var div_84 = root_35();
						var table_3 = child(div_84);
						var tbody_3 = sibling(child(table_3));
						each(tbody_3, 21, () => get(purchaseReturns), index, ($$anchor, pr) => {
							var tr_3 = root_34();
							var td_21 = child(tr_3);
							var text_44 = child(td_21);
							reset(td_21);
							var td_22 = sibling(td_21);
							MoneyDisplay(child(td_22), { get amount() {
								return get(pr).amount;
							} });
							reset(td_22);
							var td_23 = sibling(td_22);
							var text_45 = child(td_23, true);
							reset(td_23);
							var td_24 = sibling(td_23);
							StatusBadge(child(td_24), { get status() {
								return get(pr).status;
							} });
							reset(td_24);
							var td_25 = sibling(td_24);
							DateDisplay(child(td_25), { get value() {
								return get(pr).requestedAt;
							} });
							reset(td_25);
							reset(tr_3);
							template_effect(() => {
								set_text(text_44, `#${get(pr).id ?? ""}`);
								set_text(text_45, get(pr).reason || "Supplier Purchase Return");
							});
							append($$anchor, tr_3);
						});
						reset(tbody_3);
						reset(table_3);
						reset(div_84);
						append($$anchor, div_84);
					};
					if_block(node_79, ($$render) => {
						if (get(purchaseReturns).length === 0) $$render(consequent_19);
						else $$render(alternate_4, -1);
					});
					reset(div_81);
					reset(div_80);
					template_effect(() => set_text(text_43, ` Purchase Returns Log (${get(purchaseReturns).length ?? ""})`));
					append($$anchor, div_80);
				};
				if_block(node_77, ($$render) => {
					if (get(activeTab) === "returns") $$render(consequent_20);
				});
				next(2);
				template_effect(($0, $1, $2, $3, $4, $5) => {
					set_text(text_11, get(supplier).wallet > 0 ? "Active Credit Available" : "Low / Zero Balance");
					set_text(text_12, get(supplier).creditWallet > 0 ? "Debt Settlement Required" : "No Outstanding Debt");
					set_class(span_10, 1, $0);
					set_text(text_13, get(netPosition) >= 0 ? "Surplus" : "Deficit");
					set_text(text_14, get(transactions).length);
					set_text(text_15, $1);
					set_class(button_2, 1, $2);
					set_class(button_3, 1, $3);
					set_text(text_16, ` Statement Ledger (${get(transactions).length ?? ""})`);
					set_class(button_4, 1, $4);
					set_text(text_17, ` Supplier Payments (${get(supplierPayments).length ?? ""})`);
					set_class(button_5, 1, $5);
					set_text(text_18, ` Purchase Returns (${get(purchaseReturns).length ?? ""})`);
				}, [
					() => clsx(["text-2xl font-bold font-mono tracking-tight block", get(netPosition) >= 0 ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"].join(" ")),
					() => get(supplier).categories?.join(", ") || "General",
					() => clsx(["px-4 py-2.5 text-xs font-semibold border-b-2 transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5", get(activeTab) === "overview" ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"].join(" ")),
					() => clsx(["px-4 py-2.5 text-xs font-semibold border-b-2 transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5", get(activeTab) === "statement" ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"].join(" ")),
					() => clsx(["px-4 py-2.5 text-xs font-semibold border-b-2 transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5", get(activeTab) === "payments" ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"].join(" ")),
					() => clsx(["px-4 py-2.5 text-xs font-semibold border-b-2 transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5", get(activeTab) === "returns" ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"].join(" "))
				]);
				delegated("click", button, () => goto(`/payments/new?supplierId=${supplierId}&type=supplier_wallet`));
				delegated("click", button_2, () => set(activeTab, "overview"));
				delegated("click", button_3, () => set(activeTab, "statement"));
				delegated("click", button_4, () => set(activeTab, "payments"));
				delegated("click", button_5, () => set(activeTab, "returns"));
				append($$anchor, fragment_9);
			};
			if_block(node_13, ($$render) => {
				if (get(isLoading)) $$render(consequent_3);
				else if (get(errorMsg)) $$render(consequent_4, 1);
				else if (get(supplier)) $$render(consequent_21, 2);
			});
			template_effect(($0) => {
				set_text(text, get(supplier)?.name || `Supplier #${supplierId}`);
				set_text(text_1, `Code: ${(get(supplier)?.code || "N/A") ?? ""}`);
				set_text(text_2, `Generated: ${$0 ?? ""}`);
				set_text(text_6, get(supplier)?.name || `Supplier #${supplierId}`);
				set_text(text_8, `Supplier ID #${supplierId}  •  Wallet & Ledger Management Center`);
			}, [() => (/* @__PURE__ */ new Date()).toLocaleString()]);
			append($$anchor, fragment_1);
		},
		$$slots: { default: true }
	});
	pop();
	$$cleanup();
}
delegate(["click"]);
//#endregion
export { _page as component };

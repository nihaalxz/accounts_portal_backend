import { B as append, Bt as reset, Ct as user_derived, D as head, Et as store_get, H as from_html, I as if_block, K as delegate, N as each, Nt as pop, P as index, Pt as push, Q as get, R as set_text, T as clsx, Tt as setup_stores, _ as set_attribute, b as bind_select_value, bt as state, dt as $document, gt as proxy, ht as sibling, mt as first_child, ot as template_effect, pt as child, q as delegated, r as onMount, rt as deferred_template_effect, vt as set, w as set_class, zt as next } from "../chunks/dXkmWTgM.js";
import { t as goto } from "../chunks/ZQDLjgb7.js";
import "../chunks/DhaYE-8x.js";
import { r as toast } from "../chunks/CbPRQHfn.js";
import { t as Arrow_left } from "../chunks/Bn7x0kyr.js";
import { t as Arrow_up_right } from "../chunks/BUyTpJv8.js";
import { t as Building_2 } from "../chunks/PAfPMPpZ.js";
import { t as Chevron_left } from "../chunks/bgfi4Y0B2.js";
import { t as Chevron_right } from "../chunks/BQLzQDdY2.js";
import { t as Circle_alert } from "../chunks/CHXThoj_2.js";
import { t as Credit_card } from "../chunks/DZ-rRKb92.js";
import { t as Download } from "../chunks/D8w6XH0S2.js";
import { t as File_text } from "../chunks/NLRKrZbo2.js";
import { t as Funnel } from "../chunks/BlRZ0F4U2.js";
import { t as Landmark } from "../chunks/D_q7zQKx2.js";
import { t as Plus } from "../chunks/BObidJ7B.js";
import { t as Printer } from "../chunks/Ds2DlsUi.js";
import { t as Refresh_cw } from "../chunks/DpTJy0Wb.js";
import { t as Rotate_ccw } from "../chunks/CEB2WCBr.js";
import { t as Search } from "../chunks/D7t9qluE.js";
import { t as Tag } from "../chunks/lD5gNYPy.js";
import { t as Wallet } from "../chunks/BahXSy4P.js";
import { t as X } from "../chunks/wXHc9RNY.js";
import { i as formatDateOnly, o as getBahrainDateString } from "../chunks/Cu8_Vl4p.js";
import { t as page } from "../chunks/3WTa0hwz.js";
import { t as Button } from "../chunks/BhXsq3bC.js";
import { t as ErrorState } from "../chunks/CRMNR9wu.js";
import "../chunks/DTCgW2072.js";
import { t as MoneyDisplay } from "../chunks/CIVSRuaR2.js";
import { t as DateDisplay } from "../chunks/DEr_pDJT2.js";
import { n as PageContainer, t as StatusBadge } from "../chunks/Br8UPlmC2.js";
import { t as exportToCSV } from "../chunks/C74Z4VDd2.js";
import { t as previewDocument } from "../chunks/9WleYJXI2.js";
import { t as FormattedNarrative } from "../chunks/CHiWmlVe2.js";
import { t as Input } from "../chunks/aUAD-svz.js";
import { d as getSuppliers, l as getSupplierPayments, s as getPurchaseReturns, u as getSupplierStatement } from "../chunks/DhUo4-nx.js";
//#region src/routes/(app)/suppliers/[id]/+page.svelte
var root = from_html(`<div class="grid grid-cols-2 gap-4 p-3 bg-gray-100 rounded text-xs"><div><span class="block text-gray-500 font-semibold uppercase text-[10px]">Current Wallet Balance</span> <span class="font-mono font-bold text-black"> </span></div> <div><span class="block text-gray-500 font-semibold uppercase text-[10px]">Status</span> <span class="font-mono font-bold text-black"> </span></div></div>`);
var root_1 = from_html(`<span class="font-mono text-xs text-muted-foreground font-semibold px-2 py-0.5 bg-muted rounded-md border border-border"> </span> <!>`, 1);
var root_2 = from_html(`<!> <span> </span>`, 1);
var root_3 = from_html(`<!> <span>Export PDF / Print</span>`, 1);
var root_4 = from_html(`<!> <span>Make Payment / Top-up</span>`, 1);
var root_5 = from_html(`<div class="bg-card border border-border rounded-2xl p-16 flex flex-col items-center justify-center gap-3 animate-pulse mt-6"><!> <p class="text-xs text-muted-foreground font-medium">Loading supplier financial profile & statement ledger...</p></div>`);
var root_6 = from_html(`<div class="mt-6"><!></div>`);
var root_7 = from_html(`<span class="text-[10px] bg-primary/10 text-primary font-semibold px-2 py-0.5 rounded-md border border-primary/20"> </span>`);
var root_8 = from_html(`<div class="text-center py-10 text-xs text-muted-foreground border border-dashed border-border rounded-xl">No financial statement entries logged for this supplier yet.</div>`);
var root_9 = from_html(`<tr class="hover:bg-muted/10 transition-colors"><td class="p-3 font-mono font-bold text-foreground"> </td><td class="p-3"><span> </span></td><td class="p-3 text-right font-mono font-bold text-foreground"><!></td><td class="p-3 uppercase font-medium"> </td><td class="p-3 font-mono text-muted-foreground"> </td><td class="p-3"><!></td><td class="p-3 text-muted-foreground"><!></td></tr>`);
var root_10 = from_html(`<div class="overflow-x-auto"><table class="w-full text-left border-collapse text-xs"><thead><tr class="bg-muted/40 border-b border-border text-muted-foreground font-semibold text-[10px] uppercase tracking-wider"><th class="p-3">Txn ID</th><th class="p-3">Type</th><th class="p-3 text-right">Amount</th><th class="p-3">Payment Method</th><th class="p-3">Reference</th><th class="p-3">Status</th><th class="p-3">Date</th></tr></thead><tbody class="divide-y divide-border/60"></tbody></table></div>`);
var root_11 = from_html(`<div class="mt-6 space-y-6 print:hidden"><div><div class="bg-card border border-border rounded-2xl p-5 space-y-4 shadow-xs"><h3 class="text-sm font-bold text-foreground flex items-center gap-2"><!> Supplier Credentials & Meta</h3> <div class="divide-y divide-border/60 text-xs"><div class="py-2.5 flex justify-between items-center"><span class="text-muted-foreground font-medium">Supplier Name</span> <span class="font-bold text-foreground"> </span></div> <div class="py-2.5 flex justify-between items-center"><span class="text-muted-foreground font-medium">Supplier Code</span> <span class="font-mono font-bold text-foreground bg-muted px-2 py-0.5 rounded"> </span></div> <div class="py-2.5 flex justify-between items-center"><span class="text-muted-foreground font-medium">System ID</span> <span class="font-mono font-semibold text-muted-foreground"> </span></div> <div class="py-2.5 flex justify-between items-center"><span class="text-muted-foreground font-medium">Verification Status</span> <!></div> <div class="py-2.5 flex justify-between items-center"><span class="text-muted-foreground font-medium">Categories</span> <div class="flex flex-wrap gap-1"></div></div> <div class="py-2.5 flex justify-between items-center"><span class="text-muted-foreground font-medium">Created Date</span> <span class="text-foreground"><!></span></div></div></div></div> <div class="bg-card border border-border rounded-2xl p-5 space-y-4 shadow-xs"><div class="flex items-center justify-between"><h3 class="text-sm font-bold text-foreground flex items-center gap-2"><!> Recent Statement Ledger Activity</h3> <button class="text-xs font-bold text-primary hover:underline cursor-pointer flex items-center gap-1"> <!></button></div> <!></div></div>`);
var root_12 = from_html(`<!> Reset`, 1);
var root_13 = from_html(`<div class="p-16 text-center text-muted-foreground text-xs space-y-2"><!> <p class="font-bold text-foreground">No matching ledger entries found</p> <p>Try adjusting your search query, type filter, or date range.</p></div>`);
var root_14 = from_html(`<div class="flex items-center gap-1 text-[11px] font-medium text-emerald-700 dark:text-emerald-400"><!> <span> </span></div>`);
var root_15 = from_html(`<div class="flex items-center gap-1 text-[11px] font-medium text-blue-700 dark:text-blue-400"><!> <span> </span></div>`);
var root_16 = from_html(`<div class="flex items-center gap-1 text-[11px] font-medium text-amber-700 dark:text-amber-400"><!> <span>Prepaid Supplier Wallet</span></div>`);
var root_17 = from_html(`<a class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"><!> </a>`);
var root_18 = from_html(`<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-primary/10 text-primary border border-primary/20"><!> </span>`);
var root_19 = from_html(`<div class="flex items-center gap-1.5 flex-wrap"><!></div>`);
var root_20 = from_html(`<tr class="hover:bg-muted/10 transition-colors"><td class="p-3.5 font-mono font-bold text-foreground"> </td><td class="p-3.5"><span> </span></td><td class="p-3.5 text-right font-mono font-bold text-foreground"><!></td><td class="p-3.5"><div class="space-y-1"><div class="flex items-center gap-1.5"><span class="px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-muted border border-border text-foreground"> </span></div> <!></div></td><td class="p-3.5"><div class="space-y-1 max-w-md"><!> <div class="text-xs text-foreground leading-snug"><!></div></div></td><td class="p-3.5"><!></td><td class="p-3.5 text-muted-foreground"><!></td></tr>`);
var root_21 = from_html(`<!> Previous`, 1);
var root_22 = from_html(`Next <!>`, 1);
var root_23 = from_html(`<div class="p-4 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs print:hidden"><span class="text-muted-foreground"> </span> <div class="flex items-center gap-4"><div class="flex items-center gap-2"><span class="text-xs text-muted-foreground whitespace-nowrap">Rows per page:</span> <select class="bg-background border border-border rounded-xl px-2.5 py-1 text-xs text-foreground focus:ring-1 focus:ring-primary focus:outline-none cursor-pointer"><option>10</option><option>15</option><option>25</option><option>50</option><option>100</option><option>200</option><option>500</option><option>1000 (All)</option></select></div> <div class="flex items-center gap-2"><!> <!></div></div></div>`);
var root_24 = from_html(`<div class="overflow-x-auto"><table class="w-full text-left border-collapse text-xs"><thead><tr class="bg-muted/40 border-b border-border text-muted-foreground font-semibold uppercase tracking-wider text-[10px] print:bg-transparent"><th class="p-3.5">Txn ID</th><th class="p-3.5">Type</th><th class="p-3.5 text-right">Amount</th><th class="p-3.5">Payment Mode & Account</th><th class="p-3.5">Application / Reference & Narrative</th><th class="p-3.5">Status</th><th class="p-3.5">Date</th></tr></thead><tbody class="divide-y divide-border/60"></tbody></table></div> <!>`, 1);
var root_25 = from_html(`<div class="mt-6 space-y-4 print:space-y-0"><div class="bg-card border border-border rounded-2xl p-4 space-y-3 shadow-xs print:hidden"><div class="flex flex-col md:flex-row items-center justify-between gap-3"><div class="relative w-full md:w-80"><!> <!></div> <div class="flex flex-wrap items-center gap-2 w-full md:w-auto"><div class="flex items-center gap-1.5 bg-background border border-border rounded-xl px-3 py-1.5 text-xs"><!> <select class="bg-transparent text-xs font-semibold text-foreground focus:outline-none cursor-pointer"><option>All Types</option><option>Incoming / Deposit</option><option>Outgoing / Payout</option><option>Purchase Return</option><option>Sales Return</option></select></div> <div class="flex items-center gap-2 text-xs"><!> <span class="text-muted-foreground font-semibold">to</span> <!></div> <!></div></div> <div class="flex justify-between items-center text-xs text-muted-foreground pt-1 border-t border-border/40"><span>Showing <strong> </strong> matching entries</span> <span> </span></div></div> <div class="bg-card border border-border rounded-2xl overflow-hidden shadow-xs print:border-none print:shadow-none"><!></div></div>`);
var root_26 = from_html(`<!> New Payment / Top-up`, 1);
var root_27 = from_html(`<div class="p-12 text-center text-xs text-muted-foreground border border-dashed border-border rounded-xl">No supplier payment payouts logged for this supplier yet.</div>`);
var root_28 = from_html(`<tr class="hover:bg-muted/10 transition-colors"><td class="p-3.5 font-mono font-bold text-foreground"> </td><td class="p-3.5 text-right font-mono font-bold text-foreground"><!></td><td class="p-3.5 uppercase font-semibold text-foreground"> </td><td class="p-3.5 font-mono text-muted-foreground"> </td><td class="p-3.5 text-muted-foreground max-w-xs truncate"> </td><td class="p-3.5"><!></td><td class="p-3.5 text-muted-foreground"><!></td></tr>`);
var root_29 = from_html(`<div class="overflow-x-auto"><table class="w-full text-left border-collapse text-xs"><thead><tr class="bg-muted/40 border-b border-border text-muted-foreground font-semibold text-[10px] uppercase tracking-wider"><th class="p-3.5">Payment ID</th><th class="p-3.5 text-right">Amount</th><th class="p-3.5">Method</th><th class="p-3.5">Ref Number</th><th class="p-3.5">Description</th><th class="p-3.5">Status</th><th class="p-3.5">Requested At</th></tr></thead><tbody class="divide-y divide-border/60"></tbody></table></div>`);
var root_30 = from_html(`<div class="mt-6 space-y-4 print:hidden"><div class="bg-card border border-border rounded-2xl p-5 space-y-4 shadow-xs"><div class="flex items-center justify-between"><h3 class="text-sm font-bold text-foreground flex items-center gap-2"><!> </h3> <!></div> <!></div></div>`);
var root_31 = from_html(`<div class="p-12 text-center text-xs text-muted-foreground border border-dashed border-border rounded-xl">No purchase returns recorded for this supplier yet.</div>`);
var root_32 = from_html(`<tr class="hover:bg-muted/10 transition-colors"><td class="p-3.5 font-mono font-bold text-foreground"> </td><td class="p-3.5 text-right font-mono font-bold text-emerald-600"><!></td><td class="p-3.5 text-muted-foreground"> </td><td class="p-3.5"><!></td><td class="p-3.5 text-muted-foreground"><!></td></tr>`);
var root_33 = from_html(`<div class="overflow-x-auto"><table class="w-full text-left border-collapse text-xs"><thead><tr class="bg-muted/40 border-b border-border text-muted-foreground font-semibold text-[10px] uppercase tracking-wider"><th class="p-3.5">Return ID</th><th class="p-3.5 text-right">Amount</th><th class="p-3.5">Reason</th><th class="p-3.5">Status</th><th class="p-3.5">Requested At</th></tr></thead><tbody class="divide-y divide-border/60"></tbody></table></div>`);
var root_34 = from_html(`<div class="mt-6 space-y-4 print:hidden"><div class="bg-card border border-border rounded-2xl p-5 space-y-4 shadow-xs"><div class="flex items-center justify-between"><h3 class="text-sm font-bold text-foreground flex items-center gap-2"><!> </h3></div> <!></div></div>`);
var root_35 = from_html(`<div class="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6 print:hidden"><div class="lg:col-span-2 bg-card border border-border rounded-2xl p-6 shadow-xs relative overflow-hidden flex flex-col justify-between"><div></div> <div><div class="flex items-center justify-between"><span class="text-xs font-bold uppercase tracking-wider text-muted-foreground">Supplier Wallet Balance</span> <span> </span></div> <div class="mt-4"><div> <!></div> <p class="text-xs text-muted-foreground font-medium mt-1"> </p></div></div> <div class="mt-6 pt-4 border-t border-border flex items-center justify-between"><span class="text-xs text-muted-foreground">Unified signed balance</span> <!></div></div> <div class="bg-card border border-border rounded-2xl p-5 shadow-xs relative overflow-hidden flex flex-col justify-between"><div class="flex items-center justify-between"><span class="text-xs font-bold uppercase tracking-wider text-muted-foreground">Activity Summary</span> <div class="p-2 rounded-xl bg-blue-500/10 text-blue-600"><!></div></div> <div class="mt-2 space-y-1"><div class="flex justify-between items-center text-xs"><span class="text-muted-foreground font-medium">Total Paid:</span> <span class="font-mono font-bold text-foreground"><!></span></div> <div class="flex justify-between items-center text-xs"><span class="text-muted-foreground font-medium">Purchase Returns:</span> <span class="font-mono font-bold text-emerald-600"><!></span></div> <div class="flex justify-between items-center text-xs"><span class="text-muted-foreground font-medium">Ledger Entries:</span> <span class="font-bold text-foreground"> </span></div></div> <div class="mt-3 pt-2 border-t border-border/60 flex items-center justify-between text-[11px]"><span class="text-muted-foreground">Categories:</span> <span class="font-semibold text-foreground truncate max-w-[120px]"> </span></div></div></div> <div class="mt-6 border-b border-border flex gap-2 overflow-x-auto print:hidden"><button><!> Overview & Financial Summary</button> <button><!> </button> <button><!> </button> <button><!> </button></div> <!> <!> <!> <!> <div class="hidden print:block mt-12 pt-6 border-t border-gray-300 text-xs text-gray-600"><div class="flex justify-between items-end"><div><p class="font-bold text-black">Texas Travels Accounts Management</p> <p>Confidential & Proprietary Statement Document</p></div> <div class="text-right border-t border-black pt-2 w-48"><p class="font-bold text-black text-center">Authorized Signature</p></div></div></div>`, 1);
var root_36 = from_html(`<div class="hidden print:block space-y-4 mb-6 pb-4 border-b border-gray-300"><div class="flex justify-between items-start"><div><h1 class="text-xl font-bold text-black uppercase tracking-wider">Texas Travels — Official Supplier Ledger</h1> <p class="text-xs text-gray-600">Supplier Statement of Account & Financial Activity Audit</p></div> <div class="text-right text-xs text-gray-600"><p class="font-bold text-black"> </p> <p> </p> <p> </p></div></div> <!></div> <div class="space-y-3 print:hidden"><div><button class="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground cursor-pointer transition-colors"><!> <span>Back to Suppliers</span></button></div> <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4"><div class="space-y-1"><div class="flex items-center gap-2 flex-wrap"><h1 class="text-xl font-bold text-foreground"> </h1> <!></div> <p class="text-xs text-muted-foreground"> </p></div> <div class="flex items-center gap-2 flex-wrap lg:flex-nowrap shrink-0 lg:justify-end"><!> <!> <!></div></div></div> <!>`, 1);
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
	let pageSize = state(15);
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
	const totalPages = user_derived(() => Math.ceil(get(filteredTransactions).length / get(pageSize)) || 1);
	const paginatedTransactions = user_derived(() => {
		const start = (get(currentPage) - 1) * get(pageSize);
		return get(filteredTransactions).slice(start, start + get(pageSize));
	});
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
				tx.createdAt ? formatDateOnly(tx.createdAt) : "",
				tx.transactionType,
				tx.amount,
				tx.paymentMethodName || tx.paymentMethod || "",
				tx.sourceBankName || tx.destinationBankName || tx.sourceAccountName || tx.destinationAccountName || "",
				tx.referenceDisplayName || tx.referenceId || "",
				tx.displayNarrative || tx.displayDescription || tx.description || "",
				tx.status
			]);
			exportToCSV(`supplier_statement_${get(supplier).name.replace(/[^a-z0-9]/gi, "_").toLowerCase()}_${getBahrainDateString()}.csv`, headers, rows);
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
			var fragment_1 = root_36();
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
				var text_4 = child(span_1, true);
				reset(span_1);
				reset(div_5);
				reset(div_3);
				template_effect(($0) => {
					set_text(text_3, `${get(supplier).wallet > 0 ? "+" : ""}${$0 ?? ""} BHD`);
					set_text(text_4, get(supplier).wallet > 0 ? "Surplus (+)" : get(supplier).wallet < 0 ? "Outstanding Debt (-)" : "Settled");
				}, [() => get(supplier).wallet.toFixed(3)]);
				append($$anchor, div_3);
			};
			if_block(node, ($$render) => {
				if (get(supplier)) $$render(consequent);
			});
			reset(div);
			var div_6 = sibling(div, 2);
			var div_7 = child(div_6);
			var button = child(div_7);
			Arrow_left(child(button), { class: "h-3.5 w-3.5" });
			next(2);
			reset(button);
			reset(div_7);
			var div_8 = sibling(div_7, 2);
			var div_9 = child(div_8);
			var div_10 = child(div_9);
			var h1 = child(div_10);
			var text_5 = child(h1, true);
			reset(h1);
			var node_2 = sibling(h1, 2);
			var consequent_1 = ($$anchor) => {
				var fragment_2 = root_1();
				var span_2 = first_child(fragment_2);
				var text_6 = child(span_2, true);
				reset(span_2);
				var node_3 = sibling(span_2, 2);
				{
					let $0 = user_derived(() => get(supplier).isVerified ? "Verified" : "Unverified");
					StatusBadge(node_3, { get status() {
						return get($0);
					} });
				}
				template_effect(() => set_text(text_6, get(supplier).code));
				append($$anchor, fragment_2);
			};
			if_block(node_2, ($$render) => {
				if (get(supplier)) $$render(consequent_1);
			});
			reset(div_10);
			var p_4 = sibling(div_10, 2);
			var text_7 = child(p_4);
			reset(p_4);
			reset(div_9);
			var div_11 = sibling(div_9, 2);
			var node_4 = child(div_11);
			{
				let $0 = user_derived(() => get(exportingCSV) || get(filteredTransactions).length === 0);
				Button(node_4, {
					variant: "outline",
					class: "h-8.5 rounded-xl cursor-pointer flex items-center gap-1.5 text-xs font-semibold shrink-0",
					onclick: exportCSV,
					get disabled() {
						return get($0);
					},
					children: ($$anchor, $$slotProps) => {
						var fragment_3 = root_2();
						var node_5 = first_child(fragment_3);
						{
							let $0 = user_derived(() => ["h-3.5 w-3.5", get(exportingCSV) ? "animate-spin" : ""].join(" "));
							Download(node_5, { get class() {
								return get($0);
							} });
						}
						var span_3 = sibling(node_5, 2);
						var text_8 = child(span_3, true);
						reset(span_3);
						template_effect(() => set_text(text_8, get(exportingCSV) ? "Exporting..." : "Export CSV"));
						append($$anchor, fragment_3);
					},
					$$slots: { default: true }
				});
			}
			var node_6 = sibling(node_4, 2);
			Button(node_6, {
				variant: "outline",
				class: "h-8.5 rounded-xl cursor-pointer flex items-center gap-1.5 text-xs font-semibold shrink-0",
				onclick: handlePrint,
				children: ($$anchor, $$slotProps) => {
					var fragment_4 = root_3();
					Printer(first_child(fragment_4), { class: "h-3.5 w-3.5 text-primary" });
					next(2);
					append($$anchor, fragment_4);
				},
				$$slots: { default: true }
			});
			Button(sibling(node_6, 2), {
				class: "h-8.5 rounded-xl cursor-pointer flex items-center gap-1.5 text-xs font-semibold bg-primary text-primary-foreground shrink-0 shadow-xs",
				onclick: () => goto(`/payments/new?supplierId=${supplierId}`),
				children: ($$anchor, $$slotProps) => {
					var fragment_5 = root_4();
					Plus(first_child(fragment_5), { class: "h-3.5 w-3.5" });
					next(2);
					append($$anchor, fragment_5);
				},
				$$slots: { default: true }
			});
			reset(div_11);
			reset(div_8);
			reset(div_6);
			var node_10 = sibling(div_6, 2);
			var consequent_2 = ($$anchor) => {
				var div_12 = root_5();
				Refresh_cw(child(div_12), { class: "h-8 w-8 text-primary animate-spin" });
				next(2);
				reset(div_12);
				append($$anchor, div_12);
			};
			var consequent_3 = ($$anchor) => {
				var div_13 = root_6();
				ErrorState(child(div_13), {
					get message() {
						return get(errorMsg);
					},
					retryAction: loadSupplierDetails
				});
				reset(div_13);
				append($$anchor, div_13);
			};
			var consequent_19 = ($$anchor) => {
				var fragment_6 = root_35();
				var div_14 = first_child(fragment_6);
				var div_15 = child(div_14);
				var div_16 = child(div_15);
				var div_17 = sibling(div_16, 2);
				var div_18 = child(div_17);
				var span_4 = sibling(child(div_18), 2);
				var text_9 = child(span_4, true);
				reset(span_4);
				reset(div_18);
				var div_19 = sibling(div_18, 2);
				var div_20 = child(div_19);
				var text_10 = child(div_20, true);
				MoneyDisplay(sibling(text_10), { get amount() {
					return get(supplier).wallet;
				} });
				reset(div_20);
				var p_5 = sibling(div_20, 2);
				var text_11 = child(p_5, true);
				reset(p_5);
				reset(div_19);
				reset(div_17);
				var div_21 = sibling(div_17, 2);
				Button(sibling(child(div_21), 2), {
					class: "h-8 px-3 rounded-lg text-xs font-semibold gap-1.5 cursor-pointer shadow-xs",
					onclick: () => goto(`/payments/new?supplierId=${supplierId}`),
					children: ($$anchor, $$slotProps) => {
						var fragment_7 = root_4();
						Plus(first_child(fragment_7), { class: "h-3.5 w-3.5" });
						next(2);
						append($$anchor, fragment_7);
					},
					$$slots: { default: true }
				});
				reset(div_21);
				reset(div_15);
				var div_22 = sibling(div_15, 2);
				var div_23 = child(div_22);
				var div_24 = sibling(child(div_23), 2);
				Credit_card(child(div_24), { class: "h-5 w-5" });
				reset(div_24);
				reset(div_23);
				var div_25 = sibling(div_23, 2);
				var div_26 = child(div_25);
				var span_5 = sibling(child(div_26), 2);
				MoneyDisplay(child(span_5), { get amount() {
					return get(totalPaidApproved);
				} });
				reset(span_5);
				reset(div_26);
				var div_27 = sibling(div_26, 2);
				var span_6 = sibling(child(div_27), 2);
				MoneyDisplay(child(span_6), { get amount() {
					return get(totalReturnsApproved);
				} });
				reset(span_6);
				reset(div_27);
				var div_28 = sibling(div_27, 2);
				var span_7 = sibling(child(div_28), 2);
				var text_12 = child(span_7, true);
				reset(span_7);
				reset(div_28);
				reset(div_25);
				var div_29 = sibling(div_25, 2);
				var span_8 = sibling(child(div_29), 2);
				var text_13 = child(span_8, true);
				reset(span_8);
				reset(div_29);
				reset(div_22);
				reset(div_14);
				var div_30 = sibling(div_14, 2);
				var button_1 = child(div_30);
				Building_2(child(button_1), { class: "h-4 w-4" });
				next();
				reset(button_1);
				var button_2 = sibling(button_1, 2);
				var node_20 = child(button_2);
				File_text(node_20, { class: "h-4 w-4" });
				var text_14 = sibling(node_20);
				reset(button_2);
				var button_3 = sibling(button_2, 2);
				var node_21 = child(button_3);
				Credit_card(node_21, { class: "h-4 w-4" });
				var text_15 = sibling(node_21);
				reset(button_3);
				var button_4 = sibling(button_3, 2);
				var node_22 = child(button_4);
				Rotate_ccw(node_22, { class: "h-4 w-4" });
				var text_16 = sibling(node_22);
				reset(button_4);
				reset(div_30);
				var node_23 = sibling(div_30, 2);
				var consequent_5 = ($$anchor) => {
					var div_31 = root_11();
					var div_32 = child(div_31);
					var div_33 = child(div_32);
					var h3 = child(div_33);
					Building_2(child(h3), { class: "h-4 w-4 text-primary" });
					next();
					reset(h3);
					var div_34 = sibling(h3, 2);
					var div_35 = child(div_34);
					var span_9 = sibling(child(div_35), 2);
					var text_17 = child(span_9, true);
					reset(span_9);
					reset(div_35);
					var div_36 = sibling(div_35, 2);
					var span_10 = sibling(child(div_36), 2);
					var text_18 = child(span_10, true);
					reset(span_10);
					reset(div_36);
					var div_37 = sibling(div_36, 2);
					var span_11 = sibling(child(div_37), 2);
					var text_19 = child(span_11);
					reset(span_11);
					reset(div_37);
					var div_38 = sibling(div_37, 2);
					var node_25 = sibling(child(div_38), 2);
					{
						let $0 = user_derived(() => get(supplier).isVerified ? "Verified" : "Unverified");
						StatusBadge(node_25, { get status() {
							return get($0);
						} });
					}
					reset(div_38);
					var div_39 = sibling(div_38, 2);
					var div_40 = sibling(child(div_39), 2);
					each(div_40, 21, () => get(supplier).categories, index, ($$anchor, cat) => {
						var span_12 = root_7();
						var text_20 = child(span_12, true);
						reset(span_12);
						template_effect(() => set_text(text_20, get(cat)));
						append($$anchor, span_12);
					});
					reset(div_40);
					reset(div_39);
					var div_41 = sibling(div_39, 2);
					var span_13 = sibling(child(div_41), 2);
					DateDisplay(child(span_13), { get value() {
						return get(supplier).createdAt;
					} });
					reset(span_13);
					reset(div_41);
					reset(div_34);
					reset(div_33);
					reset(div_32);
					var div_42 = sibling(div_32, 2);
					var div_43 = child(div_42);
					var h3_1 = child(div_43);
					File_text(child(h3_1), { class: "h-4 w-4 text-primary" });
					next();
					reset(h3_1);
					var button_5 = sibling(h3_1, 2);
					var text_21 = child(button_5);
					Arrow_up_right(sibling(text_21), { class: "h-3 w-3" });
					reset(button_5);
					reset(div_43);
					var node_29 = sibling(div_43, 2);
					var consequent_4 = ($$anchor) => {
						append($$anchor, root_8());
					};
					var alternate = ($$anchor) => {
						var div_45 = root_10();
						var table = child(div_45);
						var tbody = sibling(child(table));
						each(tbody, 21, () => get(transactions).slice(0, 5), index, ($$anchor, tx) => {
							var tr = root_9();
							var td = child(tr);
							var text_22 = child(td);
							reset(td);
							var td_1 = sibling(td);
							var span_14 = child(td_1);
							var text_23 = child(span_14, true);
							reset(span_14);
							reset(td_1);
							var td_2 = sibling(td_1);
							MoneyDisplay(child(td_2), { get amount() {
								return get(tx).amount;
							} });
							reset(td_2);
							var td_3 = sibling(td_2);
							var text_24 = child(td_3, true);
							reset(td_3);
							var td_4 = sibling(td_3);
							var text_25 = child(td_4, true);
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
								set_text(text_22, `#${get(tx).id ?? ""}`);
								set_class(span_14, 1, $0);
								set_text(text_23, get(tx).transactionType);
								set_text(text_24, get(tx).paymentMethod);
								set_text(text_25, get(tx).referenceId || "—");
							}, [() => clsx(["inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider", get(tx).transactionType === "incoming" || get(tx).transactionType === "salesreturn" || get(tx).transactionType === "purchasereturn" ? "bg-emerald-500/10 text-emerald-600" : "bg-rose-500/10 text-rose-600"].join(" "))]);
							append($$anchor, tr);
						});
						reset(tbody);
						reset(table);
						reset(div_45);
						append($$anchor, div_45);
					};
					if_block(node_29, ($$render) => {
						if (get(transactions).length === 0) $$render(consequent_4);
						else $$render(alternate, -1);
					});
					reset(div_42);
					reset(div_31);
					template_effect(() => {
						set_text(text_17, get(supplier).name);
						set_text(text_18, get(supplier).code);
						set_text(text_19, `#${get(supplier).id ?? ""}`);
						set_text(text_21, `View All (${get(transactions).length ?? ""}) `);
					});
					delegated("click", button_5, () => set(activeTab, "statement"));
					append($$anchor, div_31);
				};
				if_block(node_23, ($$render) => {
					if (get(activeTab) === "overview") $$render(consequent_5);
				});
				var node_33 = sibling(node_23, 2);
				var consequent_14 = ($$anchor) => {
					var div_46 = root_25();
					var div_47 = child(div_46);
					var div_48 = child(div_47);
					var div_49 = child(div_48);
					var node_34 = child(div_49);
					Search(node_34, { class: "absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" });
					Input(sibling(node_34, 2), {
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
					reset(div_49);
					var div_50 = sibling(div_49, 2);
					var div_51 = child(div_50);
					var node_36 = child(div_51);
					Funnel(node_36, { class: "h-3.5 w-3.5 text-muted-foreground" });
					var select = sibling(node_36, 2);
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
					reset(div_51);
					var div_52 = sibling(div_51, 2);
					var node_37 = child(div_52);
					Input(node_37, {
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
					Input(sibling(node_37, 4), {
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
					reset(div_52);
					var node_39 = sibling(div_52, 2);
					var consequent_6 = ($$anchor) => {
						Button($$anchor, {
							variant: "ghost",
							size: "sm",
							onclick: resetFilters,
							class: "h-9 text-xs rounded-xl text-muted-foreground hover:text-foreground",
							children: ($$anchor, $$slotProps) => {
								var fragment_9 = root_12();
								X(first_child(fragment_9), { class: "h-3.5 w-3.5 mr-1" });
								next();
								append($$anchor, fragment_9);
							},
							$$slots: { default: true }
						});
					};
					if_block(node_39, ($$render) => {
						if (get(searchQuery) || get(selectedType) !== "all" || get(startDate) || get(endDate)) $$render(consequent_6);
					});
					reset(div_50);
					reset(div_48);
					var div_53 = sibling(div_48, 2);
					var span_15 = child(div_53);
					var strong = sibling(child(span_15));
					var text_26 = child(strong, true);
					reset(strong);
					next();
					reset(span_15);
					var span_16 = sibling(span_15, 2);
					var text_27 = child(span_16);
					reset(span_16);
					reset(div_53);
					reset(div_47);
					var div_54 = sibling(div_47, 2);
					var node_41 = child(div_54);
					var consequent_7 = ($$anchor) => {
						var div_55 = root_13();
						Circle_alert(child(div_55), { class: "h-8 w-8 text-muted-foreground mx-auto" });
						next(4);
						reset(div_55);
						append($$anchor, div_55);
					};
					var alternate_2 = ($$anchor) => {
						var fragment_10 = root_24();
						var div_56 = first_child(fragment_10);
						var table_1 = child(div_56);
						var tbody_1 = sibling(child(table_1));
						each(tbody_1, 21, () => get(paginatedTransactions), index, ($$anchor, tx) => {
							var tr_1 = root_20();
							var td_7 = child(tr_1);
							var text_28 = child(td_7, true);
							reset(td_7);
							var td_8 = sibling(td_7);
							var span_17 = child(td_8);
							var text_29 = child(span_17, true);
							reset(span_17);
							reset(td_8);
							var td_9 = sibling(td_8);
							MoneyDisplay(child(td_9), { get amount() {
								return get(tx).amount;
							} });
							reset(td_9);
							var td_10 = sibling(td_9);
							var div_57 = child(td_10);
							var div_58 = child(div_57);
							var span_18 = child(div_58);
							var text_30 = child(span_18, true);
							reset(span_18);
							reset(div_58);
							var node_44 = sibling(div_58, 2);
							var consequent_8 = ($$anchor) => {
								var div_59 = root_14();
								var node_45 = child(div_59);
								Landmark(node_45, { class: "h-3 w-3 inline text-emerald-600" });
								var span_19 = sibling(node_45, 2);
								var text_31 = child(span_19, true);
								reset(span_19);
								reset(div_59);
								template_effect(() => set_text(text_31, get(tx).sourceBankName || get(tx).destinationBankName));
								append($$anchor, div_59);
							};
							var consequent_9 = ($$anchor) => {
								var div_60 = root_15();
								var node_46 = child(div_60);
								Building_2(node_46, { class: "h-3 w-3 inline text-blue-600" });
								var span_20 = sibling(node_46, 2);
								var text_32 = child(span_20, true);
								reset(span_20);
								reset(div_60);
								template_effect(() => set_text(text_32, get(tx).sourceAccountName || get(tx).destinationAccountName));
								append($$anchor, div_60);
							};
							var consequent_10 = ($$anchor) => {
								var div_61 = root_16();
								Wallet(child(div_61), { class: "h-3 w-3 inline text-amber-600 text-[10px]" });
								next(2);
								reset(div_61);
								append($$anchor, div_61);
							};
							var d = user_derived(() => get(tx).paymentMethod?.toLowerCase() === "wallet" || get(tx).paymentMethodName?.toLowerCase().includes("wallet"));
							if_block(node_44, ($$render) => {
								if (get(tx).sourceBankName || get(tx).destinationBankName) $$render(consequent_8);
								else if (get(tx).sourceAccountName || get(tx).destinationAccountName) $$render(consequent_9, 1);
								else if (get(d)) $$render(consequent_10, 2);
							});
							reset(div_57);
							reset(td_10);
							var td_11 = sibling(td_10);
							var div_62 = child(td_11);
							var node_48 = child(div_62);
							var consequent_12 = ($$anchor) => {
								var div_63 = root_19();
								var node_49 = child(div_63);
								var consequent_11 = ($$anchor) => {
									var a = root_17();
									var node_50 = child(a);
									Tag(node_50, { class: "h-3 w-3" });
									var text_33 = sibling(node_50);
									reset(a);
									template_effect(() => {
										set_attribute(a, "href", get(tx).referenceUrl);
										set_text(text_33, ` ${(get(tx).referenceDisplayName || get(tx).referenceId) ?? ""}`);
									});
									append($$anchor, a);
								};
								var alternate_1 = ($$anchor) => {
									var span_21 = root_18();
									var node_51 = child(span_21);
									Tag(node_51, { class: "h-3 w-3" });
									var text_34 = sibling(node_51);
									reset(span_21);
									template_effect(() => set_text(text_34, ` ${(get(tx).referenceDisplayName || get(tx).referenceId) ?? ""}`));
									append($$anchor, span_21);
								};
								if_block(node_49, ($$render) => {
									if (get(tx).referenceUrl) $$render(consequent_11);
									else $$render(alternate_1, -1);
								});
								reset(div_63);
								append($$anchor, div_63);
							};
							if_block(node_48, ($$render) => {
								if (get(tx).referenceDisplayName || get(tx).referenceId) $$render(consequent_12);
							});
							var div_64 = sibling(node_48, 2);
							var node_52 = child(div_64);
							{
								let $0 = user_derived(() => get(tx).displayNarrative || get(tx).displayDescription || get(tx).description);
								FormattedNarrative(node_52, { get text() {
									return get($0);
								} });
							}
							reset(div_64);
							reset(div_62);
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
								set_text(text_28, get(tx).documentNumber || `#${get(tx).id}`);
								set_class(span_17, 1, $0);
								set_text(text_29, get(tx).transactionType);
								set_text(text_30, get(tx).paymentMethodName || get(tx).paymentMethod || "—");
							}, [() => clsx(["inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider", get(tx).transactionType === "incoming" || get(tx).transactionType === "salesreturn" || get(tx).transactionType === "purchasereturn" ? "bg-emerald-500/10 text-emerald-600 border border-emerald-200" : "bg-rose-500/10 text-rose-600 border border-rose-200"].join(" "))]);
							append($$anchor, tr_1);
						});
						reset(tbody_1);
						reset(table_1);
						reset(div_56);
						var node_55 = sibling(div_56, 2);
						var consequent_13 = ($$anchor) => {
							var div_65 = root_23();
							var span_22 = child(div_65);
							var text_35 = child(span_22);
							reset(span_22);
							var div_66 = sibling(span_22, 2);
							var div_67 = child(div_66);
							var select_1 = sibling(child(div_67), 2);
							var option_5 = child(select_1);
							option_5.value = option_5.__value = 10;
							var option_6 = sibling(option_5);
							option_6.value = option_6.__value = 15;
							var option_7 = sibling(option_6);
							option_7.value = option_7.__value = 25;
							var option_8 = sibling(option_7);
							option_8.value = option_8.__value = 50;
							var option_9 = sibling(option_8);
							option_9.value = option_9.__value = 100;
							var option_10 = sibling(option_9);
							option_10.value = option_10.__value = 200;
							var option_11 = sibling(option_10);
							option_11.value = option_11.__value = 500;
							var option_12 = sibling(option_11);
							option_12.value = option_12.__value = 1e3;
							reset(select_1);
							reset(div_67);
							var div_68 = sibling(div_67, 2);
							var node_56 = child(div_68);
							{
								let $0 = user_derived(() => get(currentPage) <= 1);
								Button(node_56, {
									variant: "outline",
									size: "sm",
									class: "h-8 rounded-xl",
									onclick: () => set(currentPage, Math.max(1, get(currentPage) - 1), true),
									get disabled() {
										return get($0);
									},
									children: ($$anchor, $$slotProps) => {
										var fragment_11 = root_21();
										Chevron_left(first_child(fragment_11), { class: "h-3.5 w-3.5 mr-1" });
										next();
										append($$anchor, fragment_11);
									},
									$$slots: { default: true }
								});
							}
							var node_58 = sibling(node_56, 2);
							{
								let $0 = user_derived(() => get(currentPage) >= get(totalPages));
								Button(node_58, {
									variant: "outline",
									size: "sm",
									class: "h-8 rounded-xl",
									onclick: () => set(currentPage, Math.min(get(totalPages), get(currentPage) + 1), true),
									get disabled() {
										return get($0);
									},
									children: ($$anchor, $$slotProps) => {
										next();
										var fragment_12 = root_22();
										Chevron_right(sibling(first_child(fragment_12)), { class: "h-3.5 w-3.5 ml-1" });
										append($$anchor, fragment_12);
									},
									$$slots: { default: true }
								});
							}
							reset(div_68);
							reset(div_66);
							reset(div_65);
							template_effect(() => set_text(text_35, `Showing page ${get(currentPage) ?? ""} of ${get(totalPages) ?? ""} (${get(filteredTransactions).length ?? ""} records)`));
							delegated("change", select_1, () => set(currentPage, 1));
							bind_select_value(select_1, () => get(pageSize), ($$value) => set(pageSize, $$value));
							append($$anchor, div_65);
						};
						if_block(node_55, ($$render) => {
							if (get(filteredTransactions).length > 0) $$render(consequent_13);
						});
						append($$anchor, fragment_10);
					};
					if_block(node_41, ($$render) => {
						if (get(filteredTransactions).length === 0) $$render(consequent_7);
						else $$render(alternate_2, -1);
					});
					reset(div_54);
					reset(div_46);
					template_effect(() => {
						set_text(text_26, get(filteredTransactions).length);
						set_text(text_27, `Page ${get(currentPage) ?? ""} of ${get(totalPages) ?? ""}`);
					});
					bind_select_value(select, () => get(selectedType), ($$value) => set(selectedType, $$value));
					append($$anchor, div_46);
				};
				if_block(node_33, ($$render) => {
					if (get(activeTab) === "statement") $$render(consequent_14);
				});
				var node_60 = sibling(node_33, 2);
				var consequent_16 = ($$anchor) => {
					var div_69 = root_30();
					var div_70 = child(div_69);
					var div_71 = child(div_70);
					var h3_2 = child(div_71);
					var node_61 = child(h3_2);
					Credit_card(node_61, { class: "h-4 w-4 text-primary" });
					var text_36 = sibling(node_61);
					reset(h3_2);
					Button(sibling(h3_2, 2), {
						size: "sm",
						class: "h-8 rounded-xl text-xs font-semibold bg-primary text-primary-foreground cursor-pointer",
						onclick: () => goto(`/payments/new?supplierId=${supplierId}&type=supplier_wallet`),
						children: ($$anchor, $$slotProps) => {
							var fragment_13 = root_26();
							Plus(first_child(fragment_13), { class: "h-3.5 w-3.5 mr-1" });
							next();
							append($$anchor, fragment_13);
						},
						$$slots: { default: true }
					});
					reset(div_71);
					var node_64 = sibling(div_71, 2);
					var consequent_15 = ($$anchor) => {
						append($$anchor, root_27());
					};
					var alternate_3 = ($$anchor) => {
						var div_73 = root_29();
						var table_2 = child(div_73);
						var tbody_2 = sibling(child(table_2));
						each(tbody_2, 21, () => get(supplierPayments), index, ($$anchor, sp) => {
							var tr_2 = root_28();
							var td_14 = child(tr_2);
							var text_37 = child(td_14);
							reset(td_14);
							var td_15 = sibling(td_14);
							MoneyDisplay(child(td_15), { get amount() {
								return get(sp).amount;
							} });
							reset(td_15);
							var td_16 = sibling(td_15);
							var text_38 = child(td_16, true);
							reset(td_16);
							var td_17 = sibling(td_16);
							var text_39 = child(td_17, true);
							reset(td_17);
							var td_18 = sibling(td_17);
							var text_40 = child(td_18, true);
							reset(td_18);
							var td_19 = sibling(td_18);
							StatusBadge(child(td_19), { get status() {
								return get(sp).status;
							} });
							reset(td_19);
							var td_20 = sibling(td_19);
							var node_67 = child(td_20);
							{
								let $0 = user_derived(() => get(sp).createdAt || get(sp).requestedAt);
								DateDisplay(node_67, { get value() {
									return get($0);
								} });
							}
							reset(td_20);
							reset(tr_2);
							template_effect(() => {
								set_text(text_37, `#${get(sp).id ?? ""}`);
								set_text(text_38, get(sp).sourceBankName || get(sp).sourceAccountName ? `${get(sp).paymentMethod} (${get(sp).sourceBankName || get(sp).sourceAccountName})` : get(sp).paymentMethod);
								set_text(text_39, get(sp).referenceNumber || "—");
								set_text(text_40, get(sp).description || "—");
							});
							append($$anchor, tr_2);
						});
						reset(tbody_2);
						reset(table_2);
						reset(div_73);
						append($$anchor, div_73);
					};
					if_block(node_64, ($$render) => {
						if (get(supplierPayments).length === 0) $$render(consequent_15);
						else $$render(alternate_3, -1);
					});
					reset(div_70);
					reset(div_69);
					template_effect(() => set_text(text_36, ` Supplier Payments Log (${get(supplierPayments).length ?? ""})`));
					append($$anchor, div_69);
				};
				if_block(node_60, ($$render) => {
					if (get(activeTab) === "payments") $$render(consequent_16);
				});
				var node_68 = sibling(node_60, 2);
				var consequent_18 = ($$anchor) => {
					var div_74 = root_34();
					var div_75 = child(div_74);
					var div_76 = child(div_75);
					var h3_3 = child(div_76);
					var node_69 = child(h3_3);
					Rotate_ccw(node_69, { class: "h-4 w-4 text-primary" });
					var text_41 = sibling(node_69);
					reset(h3_3);
					reset(div_76);
					var node_70 = sibling(div_76, 2);
					var consequent_17 = ($$anchor) => {
						append($$anchor, root_31());
					};
					var alternate_4 = ($$anchor) => {
						var div_78 = root_33();
						var table_3 = child(div_78);
						var tbody_3 = sibling(child(table_3));
						each(tbody_3, 21, () => get(purchaseReturns), index, ($$anchor, pr) => {
							var tr_3 = root_32();
							var td_21 = child(tr_3);
							var text_42 = child(td_21);
							reset(td_21);
							var td_22 = sibling(td_21);
							MoneyDisplay(child(td_22), { get amount() {
								return get(pr).amount;
							} });
							reset(td_22);
							var td_23 = sibling(td_22);
							var text_43 = child(td_23, true);
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
								set_text(text_42, `#${get(pr).id ?? ""}`);
								set_text(text_43, get(pr).reason || "Supplier Purchase Return");
							});
							append($$anchor, tr_3);
						});
						reset(tbody_3);
						reset(table_3);
						reset(div_78);
						append($$anchor, div_78);
					};
					if_block(node_70, ($$render) => {
						if (get(purchaseReturns).length === 0) $$render(consequent_17);
						else $$render(alternate_4, -1);
					});
					reset(div_75);
					reset(div_74);
					template_effect(() => set_text(text_41, ` Purchase Returns Log (${get(purchaseReturns).length ?? ""})`));
					append($$anchor, div_74);
				};
				if_block(node_68, ($$render) => {
					if (get(activeTab) === "returns") $$render(consequent_18);
				});
				next(2);
				template_effect(($0, $1, $2, $3, $4) => {
					set_class(div_16, 1, `absolute top-0 right-0 w-48 h-48 -mr-12 -mt-12 rounded-full opacity-10 pointer-events-none ${get(supplier).wallet > 0 ? "bg-emerald-500" : get(supplier).wallet < 0 ? "bg-rose-500" : "bg-muted-foreground"}`);
					set_class(span_4, 1, `px-3 py-1 text-xs font-bold rounded-full ${get(supplier).wallet > 0 ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20" : get(supplier).wallet < 0 ? "bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20" : "bg-muted text-muted-foreground border border-border"}`);
					set_text(text_9, get(supplier).wallet > 0 ? "Surplus (+)" : get(supplier).wallet < 0 ? "Outstanding Debt (-)" : "Settled");
					set_class(div_20, 1, `text-4xl font-extrabold tracking-tight font-mono ${get(supplier).wallet > 0 ? "text-emerald-600 dark:text-emerald-400" : get(supplier).wallet < 0 ? "text-rose-600 dark:text-rose-400" : "text-foreground"}`);
					set_text(text_10, get(supplier).wallet > 0 ? "+" : "");
					set_text(text_11, get(supplier).wallet > 0 ? "Prepaid funds held by supplier." : get(supplier).wallet < 0 ? "Outstanding amount owed to supplier." : "Fully settled.");
					set_text(text_12, get(transactions).length);
					set_text(text_13, $0);
					set_class(button_1, 1, $1);
					set_class(button_2, 1, $2);
					set_text(text_14, ` Statement Ledger (${get(transactions).length ?? ""})`);
					set_class(button_3, 1, $3);
					set_text(text_15, ` Supplier Payments (${get(supplierPayments).length ?? ""})`);
					set_class(button_4, 1, $4);
					set_text(text_16, ` Purchase Returns (${get(purchaseReturns).length ?? ""})`);
				}, [
					() => get(supplier).categories?.join(", ") || "General",
					() => clsx(["px-4 py-2.5 text-xs font-semibold border-b-2 transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5", get(activeTab) === "overview" ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"].join(" ")),
					() => clsx(["px-4 py-2.5 text-xs font-semibold border-b-2 transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5", get(activeTab) === "statement" ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"].join(" ")),
					() => clsx(["px-4 py-2.5 text-xs font-semibold border-b-2 transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5", get(activeTab) === "payments" ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"].join(" ")),
					() => clsx(["px-4 py-2.5 text-xs font-semibold border-b-2 transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5", get(activeTab) === "returns" ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"].join(" "))
				]);
				delegated("click", button_1, () => set(activeTab, "overview"));
				delegated("click", button_2, () => set(activeTab, "statement"));
				delegated("click", button_3, () => set(activeTab, "payments"));
				delegated("click", button_4, () => set(activeTab, "returns"));
				append($$anchor, fragment_6);
			};
			if_block(node_10, ($$render) => {
				if (get(isLoading)) $$render(consequent_2);
				else if (get(errorMsg)) $$render(consequent_3, 1);
				else if (get(supplier)) $$render(consequent_19, 2);
			});
			template_effect(($0) => {
				set_text(text, get(supplier)?.name || `Supplier #${supplierId}`);
				set_text(text_1, `Code: ${(get(supplier)?.code || "N/A") ?? ""}`);
				set_text(text_2, `Generated: ${$0 ?? ""}`);
				set_text(text_5, get(supplier)?.name || `Supplier #${supplierId}`);
				set_text(text_7, `Supplier ID #${supplierId}  •  Wallet & Ledger Management Center`);
			}, [() => (/* @__PURE__ */ new Date()).toLocaleString()]);
			delegated("click", button, () => goto("/suppliers"));
			append($$anchor, fragment_1);
		},
		$$slots: { default: true }
	});
	pop();
	$$cleanup();
}
delegate(["click", "change"]);
//#endregion
export { _page as component };

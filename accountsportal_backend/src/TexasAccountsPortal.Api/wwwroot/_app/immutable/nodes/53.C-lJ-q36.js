import { B as append, Bt as reset, Ct as user_derived, D as head, Et as store_get, G as text, H as from_html, I as if_block, K as delegate, N as each, Nt as pop, P as index, Pt as push, Q as get, R as set_text, T as clsx, Tt as setup_stores, _ as set_attribute, bt as state, dt as $document, g as remove_input_defaults, gt as proxy, ht as sibling, it as effect, m as bind_value, mt as first_child, n as onDestroy, ot as template_effect, pt as child, q as delegated, r as onMount, vt as set, w as set_class, xt as update, y as set_value, zt as next } from "../chunks/dXkmWTgM.js";
import { t as goto } from "../chunks/B0QitVbr.js";
import "../chunks/DhaYE-8x.js";
import { t as apiFetch } from "../chunks/CfZZC0Bi.js";
import { r as toast } from "../chunks/CbPRQHfn.js";
import { t as Building_2 } from "../chunks/PAfPMPpZ.js";
import { t as Chevron_left } from "../chunks/bgfi4Y0B2.js";
import { t as Chevron_right } from "../chunks/BQLzQDdY2.js";
import { t as Circle_check } from "../chunks/qB0lJ_dM2.js";
import { t as Clock } from "../chunks/CZu1L_RP2.js";
import { t as Coins } from "../chunks/B2DQy1SS2.js";
import { t as Download } from "../chunks/D8w6XH0S2.js";
import { t as Eye } from "../chunks/CTzUc-eH2.js";
import { t as Landmark } from "../chunks/D_q7zQKx2.js";
import { t as Plus } from "../chunks/BObidJ7B.js";
import { t as Printer } from "../chunks/Ds2DlsUi.js";
import { t as Receipt } from "../chunks/4mbxDyuf.js";
import { t as Refresh_cw } from "../chunks/DpTJy0Wb.js";
import { t as Rotate_cw } from "../chunks/D2_M9ozl.js";
import { t as Search } from "../chunks/D7t9qluE.js";
import { t as Triangle_alert } from "../chunks/BKenZzGW.js";
import { t as User_check } from "../chunks/tSSJYCMY.js";
import { t as Users } from "../chunks/Bja056I7.js";
import { t as Wallet } from "../chunks/BahXSy4P.js";
import { t as X } from "../chunks/wXHc9RNY.js";
import { a as formatDateTime, i as formatDateOnly, o as getBahrainDateString } from "../chunks/Cu8_Vl4p.js";
import { t as page } from "../chunks/DpOrB3Na.js";
import { t as Button } from "../chunks/BhXsq3bC.js";
import "../chunks/BkTYm0f82.js";
import { t as MoneyDisplay } from "../chunks/CIVSRuaR2.js";
import { t as DateDisplay } from "../chunks/DEr_pDJT2.js";
import "../chunks/CS-Kx6i02.js";
import { t as exportToCSV } from "../chunks/C74Z4VDd2.js";
import { t as previewDocument } from "../chunks/CrenWvBv2.js";
import { t as ReceiptRealtimeController } from "../chunks/B3AtzPUo.js";
//#region src/routes/(app)/sales/receipts/+page.svelte
var root = from_html(`<!> <span>Create Receipt</span>`, 1);
var root_1 = from_html(`<!> <span>Client Receipt (Deposit to Wallet)</span>`, 1);
var root_2 = from_html(`<!> <span> </span>`, 1);
var root_3 = from_html(`<!> <span>Print</span>`, 1);
var root_4 = from_html(`<!> <span>Reload</span>`, 1);
var root_5 = from_html(`<span> </span>`);
var root_6 = from_html(`<div class="bg-card border border-border rounded-2xl p-6 h-96 flex items-center justify-center animate-pulse"><!></div>`);
var root_7 = from_html(`<tr class="hover:bg-muted/10 transition-colors"><td class="p-4 font-mono font-bold text-foreground"><a class="hover:underline hover:text-primary cursor-pointer outline-none text-left font-bold font-mono"> </a></td><td class="p-4"><span class="font-bold text-foreground block"> </span> <span class="block text-[9px] text-muted-foreground capitalize mt-0.5"> </span></td><td class="p-4 text-muted-foreground"> </td><td class="p-4 uppercase text-muted-foreground font-semibold"> </td><td class="p-4 font-mono font-bold text-right text-foreground"><!></td><td class="p-4 text-center"><span> </span></td><td class="p-4 font-mono text-muted-foreground"><!></td><td class="p-4 text-center print:hidden"><div class="flex items-center justify-center gap-1"><button type="button" class="p-1.5 hover:bg-muted text-muted-foreground hover:text-foreground rounded-lg transition-colors cursor-pointer inline-block" title="Print receipt PDF"><!></button> <a class="p-1.5 hover:bg-muted text-muted-foreground hover:text-foreground rounded-lg transition-colors cursor-pointer inline-block" title="Inspect details"><!></a></div></td></tr>`);
var root_8 = from_html(`<!> Prev`, 1);
var root_9 = from_html(`Next <!>`, 1);
var root_10 = from_html(`<div class="bg-card border border-border rounded-2xl overflow-x-auto shadow-xs print:border-none print:shadow-none max-w-full"><table class="w-full min-w-[750px] text-left border-collapse text-xs"><thead><tr class="bg-muted/30 border-b border-border text-muted-foreground font-semibold print:bg-transparent"><th class="p-4 w-32">Receipt Number</th><th class="p-4">Customer Name</th><th class="p-4">Salesman</th><th class="p-4">Service Type</th><th class="p-4 text-right">Receipt Amount</th><th class="p-4 text-center">Status</th><th class="p-4 w-32">Logged Date</th><th class="p-4 w-16 text-center print:hidden">Action</th></tr></thead><tbody class="divide-y divide-border/60"></tbody></table></div> <div class="flex items-center justify-between text-xs pt-4 print:hidden"><span class="text-muted-foreground"> </span> <div class="flex gap-2"><!> <!></div></div>`, 1);
var root_11 = from_html(`<div class="bg-card border border-border rounded-2xl p-16 text-center text-muted-foreground text-xs print:hidden">No Sales Portal receipts found matching filters.</div>`);
var root_12 = from_html(`<div class="bg-card border border-border rounded-2xl p-4 flex flex-col sm:flex-row items-center gap-3 print:hidden"><div class="relative flex-1 w-full"><!> <input type="text" placeholder="Search Sales Portal by Document Ref, Receipt ID, Head Name..." class="w-full text-xs pl-10 pr-4 py-2 border border-border rounded-xl bg-background text-foreground placeholder-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20"/></div> <div class="flex items-center gap-2 text-xs w-full sm:w-auto"><input type="date" class="p-2 border border-border rounded-xl bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary text-xs"/> <span class="text-muted-foreground font-semibold">to</span> <input type="date" class="p-2 border border-border rounded-xl bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary text-xs"/> <!></div></div> <!>`, 1);
var root_13 = from_html(`<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold bg-emerald-500/10 text-emerald-700 border border-emerald-500/20"><!> <span>Customer</span></span>`);
var root_14 = from_html(`<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold bg-purple-500/10 text-purple-700 border border-purple-500/20"><!> <span>Agent</span></span>`);
var root_15 = from_html(`<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold bg-muted text-muted-foreground border border-border"><!> <span>General</span></span>`);
var root_16 = from_html(`<div class="flex items-center gap-1 font-semibold text-foreground"><!> <span> </span></div>`);
var root_17 = from_html(`<span class="text-muted-foreground">—</span>`);
var root_18 = from_html(`<div class="flex items-center gap-1.5 font-bold text-foreground"><span> </span> <span> </span></div>`);
var root_19 = from_html(`<div class="flex items-center gap-1.5 font-bold text-foreground"><!> <span> </span></div> <span class="text-[9px] text-muted-foreground">Cash Drawer</span>`, 1);
var root_20 = from_html(`<div class="flex items-center gap-1.5 font-bold text-foreground"><!> <span> </span></div> <span class="text-[9px] text-muted-foreground">Bank Account</span>`, 1);
var root_21 = from_html(`<span class="font-bold text-foreground">—</span>`);
var root_22 = from_html(`<div class="flex flex-col items-center gap-1"><span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold bg-rose-50 text-rose-700 border border-rose-200"><!> <span>Failed</span></span> <button type="button" class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[9px] font-bold bg-rose-600 hover:bg-rose-700 text-white cursor-pointer transition-colors shadow-2xs" title="Retry sync to Sales Portal"><!> <span> </span></button></div>`);
var root_23 = from_html(`<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold bg-amber-50 text-amber-700 border border-amber-200"><!> <span>Pending Sync</span></span>`);
var root_24 = from_html(`<span class="font-mono text-[9px] text-muted-foreground"> </span>`);
var root_25 = from_html(`<div class="flex flex-col items-center gap-0.5"><span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200"><!> <span>Synced</span></span> <!></div>`);
var root_26 = from_html(`<tr class="hover:bg-muted/10 transition-colors"><td class="p-4 font-mono font-bold text-foreground"><button type="button" class="hover:underline hover:text-primary cursor-pointer text-left font-bold font-mono block"> </button> <span class="text-[9px] text-muted-foreground font-mono font-normal"> </span></td><td class="p-4"><!></td><td class="p-4"><!></td><td class="p-4"><!></td><td class="p-4"><!></td><td class="p-4"><span class="capitalize px-2 py-0.5 rounded-md text-[10px] font-semibold bg-muted text-foreground border border-border/60"> </span></td><td class="p-4 text-muted-foreground max-w-[220px] truncate"> </td><td class="p-4 font-mono font-bold text-right text-foreground"><!></td><td class="p-4 text-center"><!></td><td class="p-4 font-mono text-muted-foreground"><!></td><td class="p-4 text-center print:hidden"><div class="flex items-center justify-center gap-1"><button type="button" class="p-1.5 hover:bg-muted text-muted-foreground hover:text-foreground rounded-lg transition-colors cursor-pointer inline-block" title="Print receipt voucher PDF"><!></button> <button type="button" class="p-1.5 hover:bg-muted text-muted-foreground hover:text-foreground rounded-lg transition-colors cursor-pointer inline-block" title="Inspect receipt voucher"><!></button></div></td></tr>`);
var root_27 = from_html(`<div class="bg-card border border-border rounded-2xl overflow-x-auto shadow-xs print:border-none print:shadow-none max-w-full"><table class="w-full min-w-[750px] text-left border-collapse text-xs"><thead><tr class="bg-muted/30 border-b border-border text-muted-foreground font-semibold print:bg-transparent"><th class="p-4 w-36">Receipt Ref / Doc</th><th class="p-4 w-24">Type</th><th class="p-4">Salesman</th><th class="p-4">Client</th><th class="p-4">Destination Account</th><th class="p-4">Method</th><th class="p-4">Description / Narrative</th><th class="p-4 text-right">Receipt Amount</th><th class="p-4 text-center">Sync Status</th><th class="p-4 w-36">Logged Date</th><th class="p-4 w-16 text-center print:hidden">Action</th></tr></thead><tbody class="divide-y divide-border/60"></tbody></table></div> <div class="flex items-center justify-between text-xs pt-4 print:hidden"><span class="text-muted-foreground"> </span> <div class="flex gap-2"><!> <!></div></div>`, 1);
var root_28 = from_html(`<!> Create General Receipt`, 1);
var root_29 = from_html(`<!> Client Wallet Receipt`, 1);
var root_30 = from_html(`<div class="bg-card border border-border rounded-2xl p-16 text-center text-muted-foreground text-xs print:hidden space-y-3"><!> <p>No Accounts Portal receipts found matching filters.</p> <div class="flex flex-wrap items-center justify-center gap-2.5 pt-2"><!> <!></div></div>`);
var root_31 = from_html(`<div class="bg-card border border-border rounded-2xl p-4 flex flex-col sm:flex-row items-center gap-3 print:hidden"><div class="relative flex-1 w-full"><!> <input type="text" placeholder="Search Accounts Portal by Ref, Account name, Description, Tx ID..." class="w-full text-xs pl-10 pr-4 py-2 border border-border rounded-xl bg-background text-foreground placeholder-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20"/></div> <div class="flex items-center gap-2 text-xs w-full sm:w-auto"><input type="date" class="p-2 border border-border rounded-xl bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary text-xs"/> <span class="text-muted-foreground font-semibold">to</span> <input type="date" class="p-2 border border-border rounded-xl bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary text-xs"/> <!></div></div> <!>`, 1);
var root_32 = from_html(`<!> <span>Pending Sync</span>`, 1);
var root_33 = from_html(`<!> Print Voucher`, 1);
var root_34 = from_html(`<div class="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"><div class="bg-card border border-border rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-5 animate-in fade-in zoom-in-95 duration-150"><div class="flex items-center justify-between border-b border-border pb-3"><div class="flex items-center gap-2"><!> <h3 class="font-bold text-foreground text-base">Receipt Voucher Details</h3></div> <button type="button" class="p-1 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted cursor-pointer transition-colors"><!></button></div> <div class="space-y-3 text-xs"><div class="p-3 bg-muted/40 rounded-xl flex items-center justify-between"><span class="text-muted-foreground font-medium">Receipt Ref / Number:</span> <span class="font-mono font-bold text-foreground text-sm"> </span></div> <div class="grid grid-cols-2 gap-3"><div class="p-3 bg-muted/30 rounded-xl"><span class="text-muted-foreground text-[10px] block font-medium">Sales Staff</span> <span class="font-bold text-foreground block mt-0.5"> </span></div> <div class="p-3 bg-muted/30 rounded-xl"><span class="text-muted-foreground text-[10px] block font-medium">Client / Head</span> <div class="flex items-center gap-1.5 mt-0.5"><span class="font-bold text-foreground truncate"> </span> <!></div></div></div> <div class="grid grid-cols-2 gap-3"><div class="p-3 bg-muted/30 rounded-xl"><span class="text-muted-foreground text-[10px] block font-medium">Destination Account</span> <span class="font-bold text-foreground block mt-0.5"> </span></div> <div class="p-3 bg-muted/30 rounded-xl"><span class="text-muted-foreground text-[10px] block font-medium">Payment Mode</span> <span class="font-bold text-foreground capitalize block mt-0.5"> </span></div></div> <div class="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-between"><span class="font-bold text-emerald-800 text-xs">Received Amount:</span> <span class="text-base font-black font-mono text-emerald-700"><!></span></div> <div><div class="space-y-0.5"><span class="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">Sales Portal Wallet Sync</span> <div><!></div></div> <!></div> <div class="p-3 bg-muted/30 rounded-xl space-y-1"><span class="text-muted-foreground text-[10px] block font-medium">Description / Narrative</span> <p class="text-foreground leading-relaxed"> </p></div> <div class="grid grid-cols-2 gap-3 text-[11px] text-muted-foreground pt-1"><div><span>Logged At:</span> <span class="font-mono font-medium text-foreground"> </span></div> <div class="text-right"><span>Posting Status:</span> <span class="font-bold text-emerald-600 capitalize"> </span></div></div></div> <div class="flex items-center justify-end gap-2 pt-3 border-t border-border"><!> <!></div></div></div>`);
var root_35 = from_html(`<div class="space-y-6 print:space-y-0 print:p-0"><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 print:hidden"><div class="flex flex-col gap-1"><h1 class="text-xl font-bold text-foreground font-sans flex items-center gap-2"><!> Payment Receipts Workspace</h1> <p class="text-xs text-muted-foreground">Manage customer booking collections, target cash drawer deposits, and direct accounts portal receipts.</p></div> <div class="flex flex-wrap items-center gap-2.5"><!> <!> <!> <!> <!></div></div>  <div class="flex items-center gap-2 border-b border-border/80 pb-3 print:hidden"><button type="button"><!> <span>Sales Portal Receipts</span> <!></button> <button type="button"><!> <span>Accounts Portal Receipts</span> <!></button></div>  <!></div>  <!>`, 1);
function _page($$anchor, $$props) {
	push($$props, true);
	const $page = () => store_get(page, "$page", $$stores);
	const [$$stores, $$cleanup] = setup_stores();
	let activeTab = state(proxy($page().url.searchParams.get("tab") || "sales_portal"));
	let receiptsData = state(null);
	let loadingSales = state(false);
	let currentSalesPage = state(1);
	let salesPageSize = 10;
	let salesSearchVal = state(proxy($page().url.searchParams.get("search") || ""));
	let salesStartDate = state("");
	let salesEndDate = state("");
	let accountsReceiptsData = state(null);
	let loadingAccounts = state(false);
	let currentAccountsPage = state(1);
	let accountsPageSize = 10;
	let accountsSearchVal = state("");
	let accountsStartDate = state("");
	let accountsEndDate = state("");
	let selectedAccountsReceipt = state(null);
	let retryingReceiptId = state(null);
	async function handleRetryAccountsReceipt(id) {
		set(retryingReceiptId, id, true);
		try {
			const retried = await apiFetch(`api/sales-entries/accounts-receipts/${id}/retry`, { method: "POST" });
			if (retried.syncStatus === "Synced") {
				toast.success(`Receipt synced successfully! Sales Portal Doc: ${retried.salesPortalDocumentNumber || retried.salesPortalReceiptId}`);
				if (get(selectedAccountsReceipt) && get(selectedAccountsReceipt).id === id) set(selectedAccountsReceipt, retried, true);
				await fetchAccountsReceipts();
			} else {
				toast.error(retried.failureReason || "Sync attempt failed.");
				if (get(selectedAccountsReceipt) && get(selectedAccountsReceipt).id === id) set(selectedAccountsReceipt, retried, true);
				await fetchAccountsReceipts();
			}
		} catch (err) {
			console.error("Failed to retry sync:", err);
			toast.error(err?.message || "Failed to retry sync.");
		} finally {
			set(retryingReceiptId, null);
		}
	}
	let realtimeController = null;
	let searchTimeoutSales;
	let searchTimeoutAccounts;
	let exportingCSV = state(false);
	function handleSalesSearch(val) {
		clearTimeout(searchTimeoutSales);
		searchTimeoutSales = setTimeout(() => {
			set(salesSearchVal, val, true);
			set(currentSalesPage, 1);
			fetchSalesReceipts();
		}, 400);
	}
	async function fetchSalesReceipts() {
		set(loadingSales, true);
		try {
			const params = {
				page: get(currentSalesPage),
				pageSize: salesPageSize
			};
			if (get(salesSearchVal).trim()) params.search = get(salesSearchVal).trim();
			if (get(salesStartDate)) params.startDate = get(salesStartDate);
			if (get(salesEndDate)) params.endDate = get(salesEndDate);
			const res = await apiFetch("api/sales-entries/receipts", { params });
			set(receiptsData, res, true);
		} catch (err) {
			console.error("Failed to load Sales Portal receipts:", err);
		} finally {
			set(loadingSales, false);
		}
	}
	function handleAccountsSearch(val) {
		clearTimeout(searchTimeoutAccounts);
		searchTimeoutAccounts = setTimeout(() => {
			set(accountsSearchVal, val, true);
			set(currentAccountsPage, 1);
			fetchAccountsReceipts();
		}, 400);
	}
	async function fetchAccountsReceipts() {
		set(loadingAccounts, true);
		try {
			const params = {
				page: get(currentAccountsPage),
				pageSize: accountsPageSize
			};
			if (get(accountsSearchVal).trim()) params.search = get(accountsSearchVal).trim();
			if (get(accountsStartDate)) params.startDate = get(accountsStartDate);
			if (get(accountsEndDate)) params.endDate = get(accountsEndDate);
			const res = await apiFetch("api/sales-entries/accounts-receipts", { params });
			set(accountsReceiptsData, res, true);
		} catch (err) {
			console.error("Failed to load Accounts Portal receipts:", err);
		} finally {
			set(loadingAccounts, false);
		}
	}
	function switchTab(tab) {
		set(activeTab, tab, true);
		if (tab === "sales_portal") fetchSalesReceipts();
		else if (tab === "accounts_portal") fetchAccountsReceipts();
	}
	onMount(() => {
		fetchSalesReceipts();
		fetchAccountsReceipts();
		realtimeController = new ReceiptRealtimeController({
			isGlobalList: true,
			onReceiptChanged: () => {
				fetchSalesReceipts();
				fetchAccountsReceipts();
			}
		});
		realtimeController.mount();
	});
	onDestroy(() => {
		realtimeController?.unmount();
	});
	async function exportToCSV$1() {
		set(exportingCSV, true);
		try {
			if (get(activeTab) === "sales_portal") {
				const params = {
					page: 1,
					pageSize: 1e4
				};
				if (get(salesSearchVal).trim()) params.search = get(salesSearchVal).trim();
				if (get(salesStartDate)) params.startDate = get(salesStartDate);
				if (get(salesEndDate)) params.endDate = get(salesEndDate);
				const items = (await apiFetch("api/sales-entries/receipts", { params }).catch(() => null))?.items || get(receiptsData)?.items || [];
				if (items.length === 0) {
					toast.info("No receipt records available to export.");
					return;
				}
				const headers = [
					"Receipt Number",
					"Customer/Agent Name",
					"Salesman",
					"Service Type",
					"Amount (BHD)",
					"Payment Method",
					"Status",
					"Logged Date"
				];
				const rows = items.map((row) => [
					row.documentNumber || row.receiptId,
					row.headName || "",
					row.salesmanName || "",
					row.service || "",
					row.amount,
					row.paymentMode || "",
					row.status || "",
					row.createdAt ? formatDateOnly(row.createdAt) : ""
				]);
				exportToCSV(`sales_portal_receipts_${getBahrainDateString()}.csv`, headers, rows);
				toast.success("Sales Portal receipts exported successfully.");
			} else {
				const params = {
					page: 1,
					pageSize: 1e4
				};
				if (get(accountsSearchVal).trim()) params.search = get(accountsSearchVal).trim();
				if (get(accountsStartDate)) params.startDate = get(accountsStartDate);
				if (get(accountsEndDate)) params.endDate = get(accountsEndDate);
				const items = (await apiFetch("api/sales-entries/accounts-receipts", { params }).catch(() => null))?.items || get(accountsReceiptsData)?.items || [];
				if (items.length === 0) {
					toast.info("No Accounts Portal receipt records available to export.");
					return;
				}
				const headers = [
					"Transaction ID",
					"Reference / Receipt Doc",
					"Salesman",
					"Client Name",
					"Client Type",
					"Destination Account",
					"Payment Method",
					"Amount (BHD)",
					"Sync Status",
					"Sales Portal Doc",
					"Description",
					"Status",
					"Logged Date"
				];
				const rows = items.map((row) => [
					`TXN-${row.id}`,
					row.referenceId || "",
					row.salesmanName || "",
					row.clientName || "",
					row.clientType || "general",
					row.destinationAccountName || row.destinationBankName || "General Account",
					row.paymentMethod || "cash",
					row.amount,
					row.syncStatus || "Synced",
					row.salesPortalDocumentNumber || row.salesPortalReceiptId || "",
					row.description || "",
					row.status || "Posted",
					row.createdAt ? formatDateTime(row.createdAt) : ""
				]);
				exportToCSV(`accounts_portal_receipts_${getBahrainDateString()}.csv`, headers, rows);
				toast.success("Accounts Portal receipts exported successfully.");
			}
		} catch (err) {
			console.error("Failed to export CSV:", err);
			toast.error("Failed to export CSV: " + (err?.message || "Unknown error"));
		} finally {
			set(exportingCSV, false);
		}
	}
	function handlePrint() {
		if (get(activeTab) === "sales_portal") {
			previewDocument("list", "receipt", {
				searchTerm: get(salesSearchVal),
				startDate: get(salesStartDate),
				endDate: get(salesEndDate)
			});
			toast.info("Generating print document for Sales Portal receipts...");
		} else {
			previewDocument("list", "accounts-receipt", {
				search: get(accountsSearchVal),
				startDate: get(accountsStartDate),
				endDate: get(accountsEndDate)
			});
			toast.info("Generating print document for Accounts Portal receipts...");
		}
	}
	var fragment = root_35();
	head("12fd6s0", ($$anchor) => {
		effect(() => {
			$document.title = "Receipts & Postings â€” Accounts Portal";
		});
	});
	var div = first_child(fragment);
	var div_1 = child(div);
	var div_2 = child(div_1);
	var h1 = child(div_2);
	Receipt(child(h1), { class: "h-6 w-6 text-primary" });
	next();
	reset(h1);
	next(2);
	reset(div_2);
	var div_3 = sibling(div_2, 2);
	var node_1 = child(div_3);
	Button(node_1, {
		variant: "default",
		class: "h-8.5 rounded-xl cursor-pointer flex items-center gap-1.5 text-xs font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-xs",
		onclick: () => goto("/sales/receipts/new"),
		title: "Record money received into Cash Drawer or Bank Account (General Receipt)",
		children: ($$anchor, $$slotProps) => {
			var fragment_1 = root();
			Plus(first_child(fragment_1), { class: "h-3.5 w-3.5" });
			next(2);
			append($$anchor, fragment_1);
		},
		$$slots: { default: true }
	});
	var node_3 = sibling(node_1, 2);
	Button(node_3, {
		variant: "outline",
		class: "h-8.5 rounded-xl cursor-pointer flex items-center gap-1.5 text-xs font-semibold border-primary/40 text-primary hover:bg-primary/10 shadow-xs",
		onclick: () => goto("/sales/receipts/new-client"),
		title: "Record payment against Customer or Agent under a Salesman, immediately crediting their wallet",
		children: ($$anchor, $$slotProps) => {
			var fragment_2 = root_1();
			Wallet(first_child(fragment_2), { class: "h-3.5 w-3.5 text-primary" });
			next(2);
			append($$anchor, fragment_2);
		},
		$$slots: { default: true }
	});
	var node_5 = sibling(node_3, 2);
	Button(node_5, {
		variant: "outline",
		class: "h-8.5 rounded-xl cursor-pointer flex items-center gap-1.5 text-xs font-semibold",
		onclick: exportToCSV$1,
		get disabled() {
			return get(exportingCSV);
		},
		children: ($$anchor, $$slotProps) => {
			var fragment_3 = root_2();
			var node_6 = first_child(fragment_3);
			{
				let $0 = user_derived(() => ["h-3.5 w-3.5", get(exportingCSV) ? "animate-spin" : ""].join(" "));
				Download(node_6, { get class() {
					return get($0);
				} });
			}
			var span = sibling(node_6, 2);
			var text = child(span, true);
			reset(span);
			template_effect(() => set_text(text, get(exportingCSV) ? "Exporting..." : "CSV Export"));
			append($$anchor, fragment_3);
		},
		$$slots: { default: true }
	});
	var node_7 = sibling(node_5, 2);
	Button(node_7, {
		variant: "outline",
		class: "h-8.5 rounded-xl cursor-pointer flex items-center gap-1.5 text-xs font-semibold",
		onclick: handlePrint,
		children: ($$anchor, $$slotProps) => {
			var fragment_4 = root_3();
			Printer(first_child(fragment_4), { class: "h-3.5 w-3.5" });
			next(2);
			append($$anchor, fragment_4);
		},
		$$slots: { default: true }
	});
	Button(sibling(node_7, 2), {
		variant: "outline",
		class: "h-8.5 rounded-xl cursor-pointer flex items-center gap-1.5 text-xs font-semibold",
		onclick: () => {
			if (get(activeTab) === "sales_portal") fetchSalesReceipts();
			else fetchAccountsReceipts();
		},
		children: ($$anchor, $$slotProps) => {
			var fragment_5 = root_4();
			var node_10 = first_child(fragment_5);
			{
				let $0 = user_derived(() => ["h-3.5 w-3.5", get(loadingSales) || get(loadingAccounts) ? "animate-spin" : ""].join(" "));
				Refresh_cw(node_10, { get class() {
					return get($0);
				} });
			}
			next(2);
			append($$anchor, fragment_5);
		},
		$$slots: { default: true }
	});
	reset(div_3);
	reset(div_1);
	var div_4 = sibling(div_1, 2);
	var button = child(div_4);
	var node_11 = child(button);
	Receipt(node_11, { class: "h-4 w-4" });
	var node_12 = sibling(node_11, 4);
	var consequent = ($$anchor) => {
		var span_1 = root_5();
		var text_1 = child(span_1, true);
		reset(span_1);
		template_effect(($0) => {
			set_class(span_1, 1, $0);
			set_text(text_1, get(receiptsData).totalCount);
		}, [() => clsx(["ml-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold", get(activeTab) === "sales_portal" ? "bg-primary-foreground/20 text-primary-foreground" : "bg-muted text-muted-foreground"].join(" "))]);
		append($$anchor, span_1);
	};
	if_block(node_12, ($$render) => {
		if (get(receiptsData) && get(receiptsData).totalCount !== void 0) $$render(consequent);
	});
	reset(button);
	var button_1 = sibling(button, 2);
	var node_13 = child(button_1);
	Building_2(node_13, { class: "h-4 w-4" });
	var node_14 = sibling(node_13, 4);
	var consequent_1 = ($$anchor) => {
		var span_2 = root_5();
		var text_2 = child(span_2, true);
		reset(span_2);
		template_effect(($0) => {
			set_class(span_2, 1, $0);
			set_text(text_2, get(accountsReceiptsData).totalCount);
		}, [() => clsx(["ml-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold", get(activeTab) === "accounts_portal" ? "bg-primary-foreground/20 text-primary-foreground" : "bg-muted text-muted-foreground"].join(" "))]);
		append($$anchor, span_2);
	};
	if_block(node_14, ($$render) => {
		if (get(accountsReceiptsData) && get(accountsReceiptsData).totalCount !== void 0) $$render(consequent_1);
	});
	reset(button_1);
	reset(div_4);
	var node_15 = sibling(div_4, 2);
	var consequent_5 = ($$anchor) => {
		var fragment_6 = root_12();
		var div_5 = first_child(fragment_6);
		var div_6 = child(div_5);
		var node_16 = child(div_6);
		Search(node_16, { class: "absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/60" });
		var input = sibling(node_16, 2);
		remove_input_defaults(input);
		reset(div_6);
		var div_7 = sibling(div_6, 2);
		var input_1 = child(div_7);
		remove_input_defaults(input_1);
		var input_2 = sibling(input_1, 4);
		remove_input_defaults(input_2);
		var node_17 = sibling(input_2, 2);
		var consequent_2 = ($$anchor) => {
			Button($$anchor, {
				variant: "ghost",
				size: "xs",
				class: "text-xs font-semibold text-muted-foreground hover:text-foreground",
				onclick: () => {
					set(salesStartDate, "");
					set(salesEndDate, "");
					fetchSalesReceipts();
				},
				children: ($$anchor, $$slotProps) => {
					next();
					append($$anchor, text("Clear"));
				},
				$$slots: { default: true }
			});
		};
		if_block(node_17, ($$render) => {
			if (get(salesStartDate) || get(salesEndDate)) $$render(consequent_2);
		});
		reset(div_7);
		reset(div_5);
		var node_18 = sibling(div_5, 2);
		var consequent_3 = ($$anchor) => {
			var div_8 = root_6();
			Refresh_cw(child(div_8), { class: "h-8 w-8 text-primary animate-spin" });
			reset(div_8);
			append($$anchor, div_8);
		};
		var consequent_4 = ($$anchor) => {
			var fragment_8 = root_10();
			var div_9 = first_child(fragment_8);
			var table = child(div_9);
			var tbody = sibling(child(table));
			each(tbody, 21, () => get(receiptsData).items, index, ($$anchor, row) => {
				var tr = root_7();
				var td = child(tr);
				var a = child(td);
				var text_4 = child(a, true);
				reset(a);
				reset(td);
				var td_1 = sibling(td);
				var span_3 = child(td_1);
				var text_5 = child(span_3, true);
				reset(span_3);
				var span_4 = sibling(span_3, 2);
				var text_6 = child(span_4, true);
				reset(span_4);
				reset(td_1);
				var td_2 = sibling(td_1);
				var text_7 = child(td_2, true);
				reset(td_2);
				var td_3 = sibling(td_2);
				var text_8 = child(td_3, true);
				reset(td_3);
				var td_4 = sibling(td_3);
				MoneyDisplay(child(td_4), { get amount() {
					return get(row).amount;
				} });
				reset(td_4);
				var td_5 = sibling(td_4);
				var span_5 = child(td_5);
				var text_9 = child(span_5, true);
				reset(span_5);
				reset(td_5);
				var td_6 = sibling(td_5);
				DateDisplay(child(td_6), { get value() {
					return get(row).createdAt;
				} });
				reset(td_6);
				var td_7 = sibling(td_6);
				var div_10 = child(td_7);
				var button_2 = child(div_10);
				Printer(child(button_2), { class: "h-4 w-4" });
				reset(button_2);
				var a_1 = sibling(button_2, 2);
				Eye(child(a_1), { class: "h-4.5 w-4.5" });
				reset(a_1);
				reset(div_10);
				reset(td_7);
				reset(tr);
				template_effect(() => {
					set_attribute(a, "href", `/sales/receipts/${get(row).id}`);
					set_text(text_4, get(row).documentNumber || get(row).receiptId);
					set_text(text_5, get(row).headName || "â€”");
					set_text(text_6, get(row).clientType);
					set_text(text_7, get(row).salesmanName || "â€”");
					set_text(text_8, get(row).service);
					set_class(span_5, 1, `inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold capitalize
										${get(row).status === "success" || get(row).status === "posted" ? "bg-emerald-50 text-emerald-700 border border-emerald-200" : "bg-amber-50 text-amber-700 border border-amber-200"}`);
					set_text(text_9, get(row).status);
					set_attribute(a_1, "href", `/sales/receipts/${get(row).id}`);
				});
				delegated("click", button_2, () => previewDocument("receipt", "receipt", get(row).id));
				append($$anchor, tr);
			});
			reset(tbody);
			reset(table);
			reset(div_9);
			var div_11 = sibling(div_9, 2);
			var span_6 = child(div_11);
			var text_10 = child(span_6);
			reset(span_6);
			var div_12 = sibling(span_6, 2);
			var node_24 = child(div_12);
			{
				let $0 = user_derived(() => get(currentSalesPage) <= 1);
				Button(node_24, {
					variant: "outline",
					class: "h-8.5 cursor-pointer rounded-xl px-2.5",
					get disabled() {
						return get($0);
					},
					onclick: () => {
						update(currentSalesPage, -1);
						fetchSalesReceipts();
					},
					children: ($$anchor, $$slotProps) => {
						var fragment_9 = root_8();
						Chevron_left(first_child(fragment_9), { class: "h-3 w-3 mr-1" });
						next();
						append($$anchor, fragment_9);
					},
					$$slots: { default: true }
				});
			}
			var node_26 = sibling(node_24, 2);
			{
				let $0 = user_derived(() => get(currentSalesPage) >= get(receiptsData).totalPages);
				Button(node_26, {
					variant: "outline",
					class: "h-8.5 cursor-pointer rounded-xl px-2.5",
					get disabled() {
						return get($0);
					},
					onclick: () => {
						update(currentSalesPage);
						fetchSalesReceipts();
					},
					children: ($$anchor, $$slotProps) => {
						next();
						var fragment_10 = root_9();
						Chevron_right(sibling(first_child(fragment_10)), { class: "h-3 w-3 ml-1" });
						append($$anchor, fragment_10);
					},
					$$slots: { default: true }
				});
			}
			reset(div_12);
			reset(div_11);
			template_effect(() => set_text(text_10, `Page ${get(receiptsData).page ?? ""} of ${get(receiptsData).totalPages ?? ""} (${get(receiptsData).totalCount ?? ""} items)`));
			append($$anchor, fragment_8);
		};
		var alternate = ($$anchor) => {
			append($$anchor, root_11());
		};
		if_block(node_18, ($$render) => {
			if (get(loadingSales)) $$render(consequent_3);
			else if (get(receiptsData) && get(receiptsData).items && get(receiptsData).items.length > 0) $$render(consequent_4, 1);
			else $$render(alternate, -1);
		});
		template_effect(() => set_value(input, get(salesSearchVal)));
		delegated("input", input, (e) => handleSalesSearch(e.target.value));
		delegated("change", input_1, () => {
			set(currentSalesPage, 1);
			fetchSalesReceipts();
		});
		bind_value(input_1, () => get(salesStartDate), ($$value) => set(salesStartDate, $$value));
		delegated("change", input_2, () => {
			set(currentSalesPage, 1);
			fetchSalesReceipts();
		});
		bind_value(input_2, () => get(salesEndDate), ($$value) => set(salesEndDate, $$value));
		append($$anchor, fragment_6);
	};
	var consequent_18 = ($$anchor) => {
		var fragment_11 = root_31();
		var div_14 = first_child(fragment_11);
		var div_15 = child(div_14);
		var node_28 = child(div_15);
		Search(node_28, { class: "absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/60" });
		var input_3 = sibling(node_28, 2);
		remove_input_defaults(input_3);
		reset(div_15);
		var div_16 = sibling(div_15, 2);
		var input_4 = child(div_16);
		remove_input_defaults(input_4);
		var input_5 = sibling(input_4, 4);
		remove_input_defaults(input_5);
		var node_29 = sibling(input_5, 2);
		var consequent_6 = ($$anchor) => {
			Button($$anchor, {
				variant: "ghost",
				size: "xs",
				class: "text-xs font-semibold text-muted-foreground hover:text-foreground",
				onclick: () => {
					set(accountsStartDate, "");
					set(accountsEndDate, "");
					set(accountsSearchVal, "");
					set(currentAccountsPage, 1);
					fetchAccountsReceipts();
				},
				children: ($$anchor, $$slotProps) => {
					next();
					append($$anchor, text("Clear"));
				},
				$$slots: { default: true }
			});
		};
		if_block(node_29, ($$render) => {
			if (get(accountsStartDate) || get(accountsEndDate) || get(accountsSearchVal)) $$render(consequent_6);
		});
		reset(div_16);
		reset(div_14);
		var node_30 = sibling(div_14, 2);
		var consequent_7 = ($$anchor) => {
			var div_17 = root_6();
			Refresh_cw(child(div_17), { class: "h-8 w-8 text-primary animate-spin" });
			reset(div_17);
			append($$anchor, div_17);
		};
		var consequent_17 = ($$anchor) => {
			var fragment_13 = root_27();
			var div_18 = first_child(fragment_13);
			var table_1 = child(div_18);
			var tbody_1 = sibling(child(table_1));
			each(tbody_1, 21, () => get(accountsReceiptsData).items, index, ($$anchor, row) => {
				var tr_1 = root_26();
				var td_8 = child(tr_1);
				var button_3 = child(td_8);
				var text_12 = child(button_3, true);
				reset(button_3);
				var span_7 = sibling(button_3, 2);
				var text_13 = child(span_7, true);
				reset(span_7);
				reset(td_8);
				var td_9 = sibling(td_8);
				var node_32 = child(td_9);
				var consequent_8 = ($$anchor) => {
					var span_8 = root_13();
					User_check(child(span_8), { class: "h-3 w-3" });
					next(2);
					reset(span_8);
					append($$anchor, span_8);
				};
				var d = user_derived(() => (get(row).clientType || "").toLowerCase() === "customer");
				var consequent_9 = ($$anchor) => {
					var span_9 = root_14();
					Building_2(child(span_9), { class: "h-3 w-3" });
					next(2);
					reset(span_9);
					append($$anchor, span_9);
				};
				var d_1 = user_derived(() => (get(row).clientType || "").toLowerCase() === "agent");
				var alternate_1 = ($$anchor) => {
					var span_10 = root_15();
					Building_2(child(span_10), { class: "h-3 w-3" });
					next(2);
					reset(span_10);
					append($$anchor, span_10);
				};
				if_block(node_32, ($$render) => {
					if (get(d)) $$render(consequent_8);
					else if (get(d_1)) $$render(consequent_9, 1);
					else $$render(alternate_1, -1);
				});
				reset(td_9);
				var td_10 = sibling(td_9);
				var node_36 = child(td_10);
				var consequent_10 = ($$anchor) => {
					var div_19 = root_16();
					var node_37 = child(div_19);
					Users(node_37, { class: "h-3 w-3 text-muted-foreground shrink-0" });
					var span_11 = sibling(node_37, 2);
					var text_14 = child(span_11, true);
					reset(span_11);
					reset(div_19);
					template_effect(() => set_text(text_14, get(row).salesmanName));
					append($$anchor, div_19);
				};
				var alternate_2 = ($$anchor) => {
					append($$anchor, root_17());
				};
				if_block(node_36, ($$render) => {
					if (get(row).salesmanName && get(row).clientType !== "general") $$render(consequent_10);
					else $$render(alternate_2, -1);
				});
				reset(td_10);
				var td_11 = sibling(td_10);
				var node_38 = child(td_11);
				var consequent_11 = ($$anchor) => {
					var div_20 = root_18();
					var span_13 = child(div_20);
					var text_15 = child(span_13, true);
					reset(span_13);
					var span_14 = sibling(span_13, 2);
					var text_16 = child(span_14, true);
					reset(span_14);
					reset(div_20);
					template_effect(() => {
						set_text(text_15, get(row).clientName);
						set_class(span_14, 1, `px-1.5 py-0.2 rounded text-[9px] font-bold uppercase ${get(row).clientType === "customer" ? "bg-emerald-500/10 text-emerald-700" : "bg-purple-500/10 text-purple-700"}`);
						set_text(text_16, get(row).clientType);
					});
					append($$anchor, div_20);
				};
				var alternate_3 = ($$anchor) => {
					append($$anchor, root_17());
				};
				if_block(node_38, ($$render) => {
					if (get(row).clientName && get(row).clientType !== "general") $$render(consequent_11);
					else $$render(alternate_3, -1);
				});
				reset(td_11);
				var td_12 = sibling(td_11);
				var node_39 = child(td_12);
				var consequent_12 = ($$anchor) => {
					var fragment_14 = root_19();
					var div_21 = first_child(fragment_14);
					var node_40 = child(div_21);
					Coins(node_40, { class: "h-3.5 w-3.5 text-emerald-600 shrink-0" });
					var span_16 = sibling(node_40, 2);
					var text_17 = child(span_16, true);
					reset(span_16);
					reset(div_21);
					next(2);
					template_effect(() => set_text(text_17, get(row).destinationAccountName));
					append($$anchor, fragment_14);
				};
				var consequent_13 = ($$anchor) => {
					var fragment_15 = root_20();
					var div_22 = first_child(fragment_15);
					var node_41 = child(div_22);
					Landmark(node_41, { class: "h-3.5 w-3.5 text-blue-600 shrink-0" });
					var span_17 = sibling(node_41, 2);
					var text_18 = child(span_17, true);
					reset(span_17);
					reset(div_22);
					next(2);
					template_effect(() => set_text(text_18, get(row).destinationBankName));
					append($$anchor, fragment_15);
				};
				var alternate_4 = ($$anchor) => {
					append($$anchor, root_21());
				};
				if_block(node_39, ($$render) => {
					if (get(row).destinationAccountName) $$render(consequent_12);
					else if (get(row).destinationBankName) $$render(consequent_13, 1);
					else $$render(alternate_4, -1);
				});
				reset(td_12);
				var td_13 = sibling(td_12);
				var span_19 = child(td_13);
				var text_19 = child(span_19, true);
				reset(span_19);
				reset(td_13);
				var td_14 = sibling(td_13);
				var text_20 = child(td_14, true);
				reset(td_14);
				var td_15 = sibling(td_14);
				MoneyDisplay(child(td_15), { get amount() {
					return get(row).amount;
				} });
				reset(td_15);
				var td_16 = sibling(td_15);
				var node_43 = child(td_16);
				var consequent_14 = ($$anchor) => {
					var div_23 = root_22();
					var span_20 = child(div_23);
					Triangle_alert(child(span_20), { class: "h-3 w-3 text-rose-600" });
					next(2);
					reset(span_20);
					var button_4 = sibling(span_20, 2);
					var node_45 = child(button_4);
					{
						let $0 = user_derived(() => get(retryingReceiptId) === get(row).id ? "animate-spin" : "");
						Rotate_cw(node_45, { get class() {
							return `h-2.5 w-2.5 ${get($0) ?? ""}`;
						} });
					}
					var span_21 = sibling(node_45, 2);
					var text_21 = child(span_21, true);
					reset(span_21);
					reset(button_4);
					reset(div_23);
					template_effect(() => {
						set_attribute(span_20, "title", get(row).failureReason || "Sales Portal Sync Failed");
						button_4.disabled = get(retryingReceiptId) === get(row).id;
						set_text(text_21, get(retryingReceiptId) === get(row).id ? "Retrying..." : "Retry");
					});
					delegated("click", button_4, (e) => {
						e.stopPropagation();
						handleRetryAccountsReceipt(get(row).id);
					});
					append($$anchor, div_23);
				};
				var consequent_15 = ($$anchor) => {
					var span_22 = root_23();
					Clock(child(span_22), { class: "h-3 w-3 text-amber-600" });
					next(2);
					reset(span_22);
					append($$anchor, span_22);
				};
				var alternate_5 = ($$anchor) => {
					var div_24 = root_25();
					var span_23 = child(div_24);
					Circle_check(child(span_23), { class: "h-3 w-3 text-emerald-600" });
					next(2);
					reset(span_23);
					var node_48 = sibling(span_23, 2);
					var consequent_16 = ($$anchor) => {
						var span_24 = root_24();
						var text_22 = child(span_24, true);
						reset(span_24);
						template_effect(() => set_text(text_22, get(row).salesPortalDocumentNumber));
						append($$anchor, span_24);
					};
					if_block(node_48, ($$render) => {
						if (get(row).salesPortalDocumentNumber) $$render(consequent_16);
					});
					reset(div_24);
					append($$anchor, div_24);
				};
				if_block(node_43, ($$render) => {
					if (get(row).syncStatus === "Failed") $$render(consequent_14);
					else if (get(row).syncStatus === "PendingSync") $$render(consequent_15, 1);
					else $$render(alternate_5, -1);
				});
				reset(td_16);
				var td_17 = sibling(td_16);
				DateDisplay(child(td_17), { get value() {
					return get(row).createdAt;
				} });
				reset(td_17);
				var td_18 = sibling(td_17);
				var div_25 = child(td_18);
				var button_5 = child(div_25);
				Printer(child(button_5), { class: "h-4 w-4" });
				reset(button_5);
				var button_6 = sibling(button_5, 2);
				Eye(child(button_6), { class: "h-4.5 w-4.5" });
				reset(button_6);
				reset(div_25);
				reset(td_18);
				reset(tr_1);
				template_effect(() => {
					set_text(text_12, get(row).referenceId || `TXN-${get(row).id}`);
					set_text(text_13, get(row).documentNumber || `Tx #${get(row).id}`);
					set_text(text_19, get(row).paymentMethod || "cash");
					set_attribute(td_14, "title", get(row).description);
					set_text(text_20, get(row).description || "Receipt collection");
				});
				delegated("click", button_3, () => set(selectedAccountsReceipt, get(row), true));
				delegated("click", button_5, () => previewDocument("receipt", "accounts-receipt", get(row).id));
				delegated("click", button_6, () => set(selectedAccountsReceipt, get(row), true));
				append($$anchor, tr_1);
			});
			reset(tbody_1);
			reset(table_1);
			reset(div_18);
			var div_26 = sibling(div_18, 2);
			var span_25 = child(div_26);
			var text_23 = child(span_25);
			reset(span_25);
			var div_27 = sibling(span_25, 2);
			var node_52 = child(div_27);
			{
				let $0 = user_derived(() => get(currentAccountsPage) <= 1);
				Button(node_52, {
					variant: "outline",
					class: "h-8.5 cursor-pointer rounded-xl px-2.5",
					get disabled() {
						return get($0);
					},
					onclick: () => {
						update(currentAccountsPage, -1);
						fetchAccountsReceipts();
					},
					children: ($$anchor, $$slotProps) => {
						var fragment_16 = root_8();
						Chevron_left(first_child(fragment_16), { class: "h-3 w-3 mr-1" });
						next();
						append($$anchor, fragment_16);
					},
					$$slots: { default: true }
				});
			}
			var node_54 = sibling(node_52, 2);
			{
				let $0 = user_derived(() => get(currentAccountsPage) >= get(accountsReceiptsData).totalPages);
				Button(node_54, {
					variant: "outline",
					class: "h-8.5 cursor-pointer rounded-xl px-2.5",
					get disabled() {
						return get($0);
					},
					onclick: () => {
						update(currentAccountsPage);
						fetchAccountsReceipts();
					},
					children: ($$anchor, $$slotProps) => {
						next();
						var fragment_17 = root_9();
						Chevron_right(sibling(first_child(fragment_17)), { class: "h-3 w-3 ml-1" });
						append($$anchor, fragment_17);
					},
					$$slots: { default: true }
				});
			}
			reset(div_27);
			reset(div_26);
			template_effect(() => set_text(text_23, `Page ${get(accountsReceiptsData).page ?? ""} of ${get(accountsReceiptsData).totalPages ?? ""} (${get(accountsReceiptsData).totalCount ?? ""} items)`));
			append($$anchor, fragment_13);
		};
		var alternate_6 = ($$anchor) => {
			var div_28 = root_30();
			var node_56 = child(div_28);
			Building_2(node_56, { class: "h-10 w-10 text-muted-foreground/40 mx-auto" });
			var div_29 = sibling(node_56, 4);
			var node_57 = child(div_29);
			Button(node_57, {
				variant: "default",
				size: "sm",
				class: "rounded-xl cursor-pointer",
				onclick: () => goto("/sales/receipts/new"),
				children: ($$anchor, $$slotProps) => {
					var fragment_18 = root_28();
					Plus(first_child(fragment_18), { class: "h-3.5 w-3.5 mr-1" });
					next();
					append($$anchor, fragment_18);
				},
				$$slots: { default: true }
			});
			Button(sibling(node_57, 2), {
				variant: "outline",
				size: "sm",
				class: "rounded-xl cursor-pointer border-primary/40 text-primary hover:bg-primary/10",
				onclick: () => goto("/sales/receipts/new-client"),
				children: ($$anchor, $$slotProps) => {
					var fragment_19 = root_29();
					Wallet(first_child(fragment_19), { class: "h-3.5 w-3.5 mr-1 text-primary" });
					next();
					append($$anchor, fragment_19);
				},
				$$slots: { default: true }
			});
			reset(div_29);
			reset(div_28);
			append($$anchor, div_28);
		};
		if_block(node_30, ($$render) => {
			if (get(loadingAccounts)) $$render(consequent_7);
			else if (get(accountsReceiptsData) && get(accountsReceiptsData).items && get(accountsReceiptsData).items.length > 0) $$render(consequent_17, 1);
			else $$render(alternate_6, -1);
		});
		template_effect(() => set_value(input_3, get(accountsSearchVal)));
		delegated("input", input_3, (e) => handleAccountsSearch(e.target.value));
		delegated("change", input_4, () => {
			set(currentAccountsPage, 1);
			fetchAccountsReceipts();
		});
		bind_value(input_4, () => get(accountsStartDate), ($$value) => set(accountsStartDate, $$value));
		delegated("change", input_5, () => {
			set(currentAccountsPage, 1);
			fetchAccountsReceipts();
		});
		bind_value(input_5, () => get(accountsEndDate), ($$value) => set(accountsEndDate, $$value));
		append($$anchor, fragment_11);
	};
	if_block(node_15, ($$render) => {
		if (get(activeTab) === "sales_portal") $$render(consequent_5);
		else if (get(activeTab) === "accounts_portal") $$render(consequent_18, 1);
	});
	reset(div);
	var node_61 = sibling(div, 2);
	var consequent_23 = ($$anchor) => {
		var div_30 = root_34();
		var div_31 = child(div_30);
		var div_32 = child(div_31);
		var div_33 = child(div_32);
		Receipt(child(div_33), { class: "h-5 w-5 text-primary" });
		next(2);
		reset(div_33);
		var button_7 = sibling(div_33, 2);
		X(child(button_7), { class: "h-4 w-4" });
		reset(button_7);
		reset(div_32);
		var div_34 = sibling(div_32, 2);
		var div_35 = child(div_34);
		var span_26 = sibling(child(div_35), 2);
		var text_24 = child(span_26, true);
		reset(span_26);
		reset(div_35);
		var div_36 = sibling(div_35, 2);
		var div_37 = child(div_36);
		var span_27 = sibling(child(div_37), 2);
		var text_25 = child(span_27, true);
		reset(span_27);
		reset(div_37);
		var div_38 = sibling(div_37, 2);
		var div_39 = sibling(child(div_38), 2);
		var span_28 = child(div_39);
		var text_26 = child(span_28, true);
		reset(span_28);
		var node_64 = sibling(span_28, 2);
		var consequent_19 = ($$anchor) => {
			var span_29 = root_5();
			var text_27 = child(span_29, true);
			reset(span_29);
			template_effect(() => {
				set_class(span_29, 1, `px-1.5 py-0.2 rounded text-[9px] font-bold uppercase ${get(selectedAccountsReceipt).clientType === "customer" ? "bg-emerald-500/10 text-emerald-700" : get(selectedAccountsReceipt).clientType === "agent" ? "bg-purple-500/10 text-purple-700" : "bg-muted text-muted-foreground"}`);
				set_text(text_27, get(selectedAccountsReceipt).clientType);
			});
			append($$anchor, span_29);
		};
		if_block(node_64, ($$render) => {
			if (get(selectedAccountsReceipt).clientType) $$render(consequent_19);
		});
		reset(div_39);
		reset(div_38);
		reset(div_36);
		var div_40 = sibling(div_36, 2);
		var div_41 = child(div_40);
		var span_30 = sibling(child(div_41), 2);
		var text_28 = child(span_30, true);
		reset(span_30);
		reset(div_41);
		var div_42 = sibling(div_41, 2);
		var span_31 = sibling(child(div_42), 2);
		var text_29 = child(span_31, true);
		reset(span_31);
		reset(div_42);
		reset(div_40);
		var div_43 = sibling(div_40, 2);
		var span_32 = sibling(child(div_43), 2);
		MoneyDisplay(child(span_32), { get amount() {
			return get(selectedAccountsReceipt).amount;
		} });
		reset(span_32);
		reset(div_43);
		var div_44 = sibling(div_43, 2);
		var div_45 = child(div_44);
		var div_46 = sibling(child(div_45), 2);
		var node_66 = child(div_46);
		var consequent_20 = ($$anchor) => {
			var fragment_20 = root_2();
			var node_67 = first_child(fragment_20);
			Triangle_alert(node_67, { class: "h-4 w-4" });
			var span_33 = sibling(node_67, 2);
			var text_30 = child(span_33);
			reset(span_33);
			template_effect(() => set_text(text_30, `Sync Failed: ${(get(selectedAccountsReceipt).failureReason || "Error connecting to Sales Portal") ?? ""}`));
			append($$anchor, fragment_20);
		};
		var consequent_21 = ($$anchor) => {
			var fragment_21 = root_32();
			Clock(first_child(fragment_21), { class: "h-4 w-4" });
			next(2);
			append($$anchor, fragment_21);
		};
		var alternate_7 = ($$anchor) => {
			var fragment_22 = root_2();
			var node_69 = first_child(fragment_22);
			Circle_check(node_69, { class: "h-4 w-4" });
			var span_34 = sibling(node_69, 2);
			var text_31 = child(span_34);
			reset(span_34);
			template_effect(() => set_text(text_31, `Synced ${get(selectedAccountsReceipt).salesPortalDocumentNumber ? `(${get(selectedAccountsReceipt).salesPortalDocumentNumber})` : ""}`));
			append($$anchor, fragment_22);
		};
		if_block(node_66, ($$render) => {
			if (get(selectedAccountsReceipt).syncStatus === "Failed") $$render(consequent_20);
			else if (get(selectedAccountsReceipt).syncStatus === "PendingSync") $$render(consequent_21, 1);
			else $$render(alternate_7, -1);
		});
		reset(div_46);
		reset(div_45);
		var node_70 = sibling(div_45, 2);
		var consequent_22 = ($$anchor) => {
			{
				let $0 = user_derived(() => get(retryingReceiptId) === get(selectedAccountsReceipt).id);
				Button($$anchor, {
					type: "button",
					size: "xs",
					get disabled() {
						return get($0);
					},
					onclick: () => handleRetryAccountsReceipt(get(selectedAccountsReceipt).id),
					class: "h-7 text-xs bg-rose-600 hover:bg-rose-700 text-white cursor-pointer flex items-center gap-1",
					children: ($$anchor, $$slotProps) => {
						var fragment_24 = root_2();
						var node_71 = first_child(fragment_24);
						{
							let $0 = user_derived(() => get(retryingReceiptId) === get(selectedAccountsReceipt).id ? "animate-spin" : "");
							Rotate_cw(node_71, { get class() {
								return `h-3 w-3 ${get($0) ?? ""}`;
							} });
						}
						var span_35 = sibling(node_71, 2);
						var text_32 = child(span_35, true);
						reset(span_35);
						template_effect(() => set_text(text_32, get(retryingReceiptId) === get(selectedAccountsReceipt).id ? "Retrying..." : "Retry Sync"));
						append($$anchor, fragment_24);
					},
					$$slots: { default: true }
				});
			}
		};
		if_block(node_70, ($$render) => {
			if (get(selectedAccountsReceipt).syncStatus === "Failed") $$render(consequent_22);
		});
		reset(div_44);
		var div_47 = sibling(div_44, 2);
		var p = sibling(child(div_47), 2);
		var text_33 = child(p, true);
		reset(p);
		reset(div_47);
		var div_48 = sibling(div_47, 2);
		var div_49 = child(div_48);
		var span_36 = sibling(child(div_49), 2);
		var text_34 = child(span_36, true);
		reset(span_36);
		reset(div_49);
		var div_50 = sibling(div_49, 2);
		var span_37 = sibling(child(div_50), 2);
		var text_35 = child(span_37, true);
		reset(span_37);
		reset(div_50);
		reset(div_48);
		reset(div_34);
		var div_51 = sibling(div_34, 2);
		var node_72 = child(div_51);
		Button(node_72, {
			variant: "outline",
			size: "sm",
			class: "rounded-xl cursor-pointer",
			onclick: () => previewDocument("receipt", "accounts-receipt", get(selectedAccountsReceipt).id),
			children: ($$anchor, $$slotProps) => {
				var fragment_25 = root_33();
				Printer(first_child(fragment_25), { class: "h-3.5 w-3.5 mr-1" });
				next();
				append($$anchor, fragment_25);
			},
			$$slots: { default: true }
		});
		Button(sibling(node_72, 2), {
			variant: "default",
			size: "sm",
			class: "rounded-xl cursor-pointer",
			onclick: () => set(selectedAccountsReceipt, null),
			children: ($$anchor, $$slotProps) => {
				next();
				append($$anchor, text("Close"));
			},
			$$slots: { default: true }
		});
		reset(div_51);
		reset(div_31);
		reset(div_30);
		template_effect(($0) => {
			set_text(text_24, get(selectedAccountsReceipt).referenceId || `TXN-${get(selectedAccountsReceipt).id}`);
			set_text(text_25, get(selectedAccountsReceipt).salesmanName || "— (General Treasury)");
			set_text(text_26, get(selectedAccountsReceipt).clientName || "—");
			set_text(text_28, get(selectedAccountsReceipt).destinationAccountName || get(selectedAccountsReceipt).destinationBankName || "General Account");
			set_text(text_29, get(selectedAccountsReceipt).paymentMethod || "cash");
			set_class(div_44, 1, `p-3 rounded-xl border flex items-center justify-between ${get(selectedAccountsReceipt).syncStatus === "Failed" ? "bg-rose-500/10 border-rose-500/30" : get(selectedAccountsReceipt).syncStatus === "PendingSync" ? "bg-amber-500/10 border-amber-500/30" : "bg-emerald-500/10 border-emerald-500/30"}`);
			set_class(div_46, 1, `flex items-center gap-1.5 font-bold ${get(selectedAccountsReceipt).syncStatus === "Failed" ? "text-rose-700" : get(selectedAccountsReceipt).syncStatus === "PendingSync" ? "text-amber-700" : "text-emerald-700"}`);
			set_text(text_33, get(selectedAccountsReceipt).description || "Receipt collection");
			set_text(text_34, $0);
			set_text(text_35, get(selectedAccountsReceipt).status === "approved" || get(selectedAccountsReceipt).status === "posted" ? "success" : get(selectedAccountsReceipt).status || "success");
		}, [() => get(selectedAccountsReceipt).createdAt ? get(selectedAccountsReceipt).createdAt.replace("T", " ").slice(0, 19) : "â€”"]);
		delegated("click", button_7, () => set(selectedAccountsReceipt, null));
		append($$anchor, div_30);
	};
	if_block(node_61, ($$render) => {
		if (get(selectedAccountsReceipt)) $$render(consequent_23);
	});
	template_effect(($0, $1) => {
		set_class(button, 1, $0);
		set_class(button_1, 1, $1);
	}, [() => clsx(["flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border", get(activeTab) === "sales_portal" ? "bg-primary text-primary-foreground border-primary shadow-xs" : "bg-card text-muted-foreground border-border hover:text-foreground hover:bg-muted/30"].join(" ")), () => clsx(["flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border", get(activeTab) === "accounts_portal" ? "bg-primary text-primary-foreground border-primary shadow-xs" : "bg-card text-muted-foreground border-border hover:text-foreground hover:bg-muted/30"].join(" "))]);
	delegated("click", button, () => switchTab("sales_portal"));
	delegated("click", button_1, () => switchTab("accounts_portal"));
	append($$anchor, fragment);
	pop();
	$$cleanup();
}
delegate([
	"click",
	"input",
	"change"
]);
//#endregion
export { _page as component };

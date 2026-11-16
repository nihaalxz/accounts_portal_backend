import { B as append, Bt as reset, Ct as user_derived, D as head, Et as store_get, G as text, H as from_html, I as if_block, K as delegate, N as each, Nt as pop, P as index, Pt as push, Q as get, R as set_text, T as clsx, Tt as setup_stores, _ as set_attribute, bt as state, dt as $document, g as remove_input_defaults, gt as proxy, ht as sibling, it as effect, m as bind_value, mt as first_child, n as onDestroy, ot as template_effect, pt as child, q as delegated, r as onMount, vt as set, w as set_class, xt as update, y as set_value, zt as next } from "../chunks/dXkmWTgM.js";
import { t as goto } from "../chunks/C4dPzSg8.js";
import "../chunks/DhaYE-8x.js";
import { t as apiFetch } from "../chunks/DR__V3U1.js";
import { r as toast } from "../chunks/CbPRQHfn.js";
import { t as Building_2 } from "../chunks/PAfPMPpZ.js";
import { t as Chevron_left } from "../chunks/bgfi4Y0B2.js";
import { t as Chevron_right } from "../chunks/BQLzQDdY2.js";
import { t as Circle_check } from "../chunks/qB0lJ_dM2.js";
import { t as Coins } from "../chunks/B2DQy1SS2.js";
import { t as Download } from "../chunks/D8w6XH0S2.js";
import { t as Eye } from "../chunks/CTzUc-eH2.js";
import { t as Landmark } from "../chunks/D_q7zQKx2.js";
import { t as Plus } from "../chunks/BObidJ7B.js";
import { t as Printer } from "../chunks/Ds2DlsUi.js";
import { t as Receipt } from "../chunks/4mbxDyuf.js";
import { t as Refresh_cw } from "../chunks/DpTJy0Wb.js";
import { t as Search } from "../chunks/D7t9qluE.js";
import { t as X } from "../chunks/wXHc9RNY.js";
import { t as page } from "../chunks/DxMnRCuv.js";
import { t as Button } from "../chunks/BhXsq3bC.js";
import "../chunks/n1tWSsVh.js";
import { t as MoneyDisplay } from "../chunks/CIVSRuaR2.js";
import { t as DateDisplay } from "../chunks/DeM3dT312.js";
import "../chunks/D-6PwnbV2.js";
import { t as exportToCSV } from "../chunks/C74Z4VDd2.js";
import { t as previewDocument } from "../chunks/BAftWfDQ2.js";
import { t as ReceiptRealtimeController } from "../chunks/ZHjBIjXh.js";
//#region src/routes/(app)/sales/receipts/+page.svelte
var root = from_html(`<!> <span>Create Receipt</span>`, 1);
var root_1 = from_html(`<!> <span> </span>`, 1);
var root_2 = from_html(`<!> <span>Print</span>`, 1);
var root_3 = from_html(`<!> <span>Reload</span>`, 1);
var root_4 = from_html(`<span> </span>`);
var root_5 = from_html(`<div class="bg-card border border-border rounded-2xl p-6 h-96 flex items-center justify-center animate-pulse"><!></div>`);
var root_6 = from_html(`<tr class="hover:bg-muted/10 transition-colors"><td class="p-4 font-mono font-bold text-foreground"><a class="hover:underline hover:text-primary cursor-pointer outline-none text-left font-bold font-mono"> </a></td><td class="p-4"><span class="font-bold text-foreground block"> </span> <span class="block text-[9px] text-muted-foreground capitalize mt-0.5"> </span></td><td class="p-4 text-muted-foreground"> </td><td class="p-4 uppercase text-muted-foreground font-semibold"> </td><td class="p-4 font-mono font-bold text-right text-foreground"><!></td><td class="p-4 text-center"><span> </span></td><td class="p-4 font-mono text-muted-foreground"><!></td><td class="p-4 text-center print:hidden"><a class="p-1.5 hover:bg-muted text-muted-foreground hover:text-foreground rounded-lg transition-colors cursor-pointer inline-block" title="Inspect details"><!></a></td></tr>`);
var root_7 = from_html(`<!> Prev`, 1);
var root_8 = from_html(`Next <!>`, 1);
var root_9 = from_html(`<div class="bg-card border border-border rounded-2xl overflow-x-auto shadow-xs print:border-none print:shadow-none max-w-full"><table class="w-full min-w-[750px] text-left border-collapse text-xs"><thead><tr class="bg-muted/30 border-b border-border text-muted-foreground font-semibold print:bg-transparent"><th class="p-4 w-32">Receipt Number</th><th class="p-4">Customer Name</th><th class="p-4">Salesman</th><th class="p-4">Service Type</th><th class="p-4 text-right">Receipt Amount</th><th class="p-4 text-center">Status</th><th class="p-4 w-32">Logged Date</th><th class="p-4 w-16 text-center print:hidden">Action</th></tr></thead><tbody class="divide-y divide-border/60"></tbody></table></div> <div class="flex items-center justify-between text-xs pt-4 print:hidden"><span class="text-muted-foreground"> </span> <div class="flex gap-2"><!> <!></div></div>`, 1);
var root_10 = from_html(`<div class="bg-card border border-border rounded-2xl p-16 text-center text-muted-foreground text-xs print:hidden">No Sales Portal receipts found matching filters.</div>`);
var root_11 = from_html(`<div class="bg-card border border-border rounded-2xl p-4 flex flex-col sm:flex-row items-center gap-3 print:hidden"><div class="relative flex-1 w-full"><!> <input type="text" placeholder="Search Sales Portal by Document Ref, Receipt ID, Head Name..." class="w-full text-xs pl-10 pr-4 py-2 border border-border rounded-xl bg-background text-foreground placeholder-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20"/></div> <div class="flex items-center gap-2 text-xs w-full sm:w-auto"><input type="date" class="p-2 border border-border rounded-xl bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary text-xs"/> <span class="text-muted-foreground font-semibold">to</span> <input type="date" class="p-2 border border-border rounded-xl bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary text-xs"/> <!></div></div> <!>`, 1);
var root_12 = from_html(`<div class="flex items-center gap-1.5 font-bold text-foreground"><!> <span> </span></div> <span class="text-[9px] text-muted-foreground">Cash Drawer</span>`, 1);
var root_13 = from_html(`<div class="flex items-center gap-1.5 font-bold text-foreground"><!> <span> </span></div> <span class="text-[9px] text-muted-foreground">Bank Account</span>`, 1);
var root_14 = from_html(`<span class="font-bold text-foreground">â€”</span>`);
var root_15 = from_html(`<tr class="hover:bg-muted/10 transition-colors"><td class="p-4 font-mono font-bold text-foreground"><button type="button" class="hover:underline hover:text-primary cursor-pointer text-left font-bold font-mono block"> </button> <span class="text-[9px] text-muted-foreground font-mono font-normal"> </span></td><td class="p-4"><!></td><td class="p-4"><span class="capitalize px-2 py-0.5 rounded-md text-[10px] font-semibold bg-muted text-foreground border border-border/60"> </span></td><td class="p-4 text-muted-foreground max-w-[280px] truncate"> </td><td class="p-4 font-mono font-bold text-right text-foreground"><!></td><td class="p-4 text-center"><span><!> </span></td><td class="p-4 font-mono text-muted-foreground"><!></td><td class="p-4 text-center print:hidden"><button type="button" class="p-1.5 hover:bg-muted text-muted-foreground hover:text-foreground rounded-lg transition-colors cursor-pointer inline-block" title="Inspect receipt voucher"><!></button></td></tr>`);
var root_16 = from_html(`<div class="bg-card border border-border rounded-2xl overflow-x-auto shadow-xs print:border-none print:shadow-none max-w-full"><table class="w-full min-w-[750px] text-left border-collapse text-xs"><thead><tr class="bg-muted/30 border-b border-border text-muted-foreground font-semibold print:bg-transparent"><th class="p-4 w-36">Receipt Ref / Doc</th><th class="p-4">Destination Account</th><th class="p-4">Method</th><th class="p-4">Description / Narrative</th><th class="p-4 text-right">Receipt Amount</th><th class="p-4 text-center">Status</th><th class="p-4 w-36">Logged Date</th><th class="p-4 w-16 text-center print:hidden">Action</th></tr></thead><tbody class="divide-y divide-border/60"></tbody></table></div> <div class="flex items-center justify-between text-xs pt-4 print:hidden"><span class="text-muted-foreground"> </span> <div class="flex gap-2"><!> <!></div></div>`, 1);
var root_17 = from_html(`<!> Create First Receipt`, 1);
var root_18 = from_html(`<div class="bg-card border border-border rounded-2xl p-16 text-center text-muted-foreground text-xs print:hidden space-y-3"><!> <p>No Accounts Portal receipts found matching filters.</p> <!></div>`);
var root_19 = from_html(`<div class="bg-card border border-border rounded-2xl p-4 flex flex-col sm:flex-row items-center gap-3 print:hidden"><div class="relative flex-1 w-full"><!> <input type="text" placeholder="Search Accounts Portal by Ref, Account name, Description, Tx ID..." class="w-full text-xs pl-10 pr-4 py-2 border border-border rounded-xl bg-background text-foreground placeholder-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20"/></div> <div class="flex items-center gap-2 text-xs w-full sm:w-auto"><input type="date" class="p-2 border border-border rounded-xl bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary text-xs"/> <span class="text-muted-foreground font-semibold">to</span> <input type="date" class="p-2 border border-border rounded-xl bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary text-xs"/> <!></div></div> <!>`, 1);
var root_20 = from_html(`<!> Print Voucher`, 1);
var root_21 = from_html(`<div class="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"><div class="bg-card border border-border rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-5 animate-in fade-in zoom-in-95 duration-150"><div class="flex items-center justify-between border-b border-border pb-3"><div class="flex items-center gap-2"><!> <h3 class="font-bold text-foreground text-base">Receipt Voucher Details</h3></div> <button type="button" class="p-1 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted cursor-pointer transition-colors"><!></button></div> <div class="space-y-3 text-xs"><div class="p-3 bg-muted/40 rounded-xl flex items-center justify-between"><span class="text-muted-foreground font-medium">Receipt Ref / Number:</span> <span class="font-mono font-bold text-foreground text-sm"> </span></div> <div class="grid grid-cols-2 gap-3"><div class="p-3 bg-muted/30 rounded-xl"><span class="text-muted-foreground text-[10px] block font-medium">Destination Account</span> <span class="font-bold text-foreground block mt-0.5"> </span></div> <div class="p-3 bg-muted/30 rounded-xl"><span class="text-muted-foreground text-[10px] block font-medium">Payment Mode</span> <span class="font-bold text-foreground capitalize block mt-0.5"> </span></div></div> <div class="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-between"><span class="font-bold text-emerald-800 text-xs">Received Amount:</span> <span class="text-base font-black font-mono text-emerald-700"><!></span></div> <div class="p-3 bg-muted/30 rounded-xl space-y-1"><span class="text-muted-foreground text-[10px] block font-medium">Description / Narrative</span> <p class="text-foreground leading-relaxed"> </p></div> <div class="grid grid-cols-2 gap-3 text-[11px] text-muted-foreground pt-1"><div><span>Logged At:</span> <span class="font-mono font-medium text-foreground"> </span></div> <div class="text-right"><span>Posting Status:</span> <span class="font-bold text-emerald-600 capitalize"> </span></div></div></div> <div class="flex items-center justify-end gap-2 pt-3 border-t border-border"><!> <!></div></div></div>`);
var root_22 = from_html(`<div class="space-y-6 print:space-y-0 print:p-0"><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 print:hidden"><div class="flex flex-col gap-1"><h1 class="text-xl font-bold text-foreground font-sans flex items-center gap-2"><!> Payment Receipts Workspace</h1> <p class="text-xs text-muted-foreground">Manage customer booking collections, target cash drawer deposits, and direct accounts portal receipts.</p></div> <div class="flex flex-wrap items-center gap-2.5"><!> <!> <!> <!></div></div>  <div class="flex items-center gap-2 border-b border-border/80 pb-3 print:hidden"><button type="button"><!> <span>Sales Portal Receipts</span> <!></button> <button type="button"><!> <span>Accounts Portal Receipts</span> <!></button></div>  <!></div>  <!>`, 1);
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
				exportToCSV("sales_portal_receipts.csv", [
					"Receipt Number",
					"Customer/Agent Name",
					"Salesman",
					"Service Type",
					"Amount (BHD)",
					"Payment Method",
					"Status",
					"Logged Date"
				], items.map((row) => [
					row.documentNumber || row.receiptId,
					row.headName || "",
					row.salesmanName || "",
					row.service || "",
					row.amount,
					row.paymentMode || "",
					row.status || "",
					row.createdAt ? row.createdAt.split("T")[0] : ""
				]));
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
				exportToCSV("accounts_portal_receipts.csv", [
					"Transaction ID",
					"Reference / Receipt Doc",
					"Destination Account",
					"Payment Method",
					"Amount (BHD)",
					"Description",
					"Status",
					"Logged Date"
				], items.map((row) => [
					`TXN-${row.id}`,
					row.referenceId || "",
					row.destinationAccountName || row.destinationBankName || "General Account",
					row.paymentMethod || "cash",
					row.amount,
					row.description || "",
					row.status || "Posted",
					row.createdAt ? row.createdAt.replace("T", " ").slice(0, 19) : ""
				]));
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
		} else window.print();
	}
	var fragment = root_22();
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
		class: "h-8.5 rounded-xl cursor-pointer flex items-center gap-1.5 text-xs font-semibold",
		onclick: exportToCSV$1,
		get disabled() {
			return get(exportingCSV);
		},
		children: ($$anchor, $$slotProps) => {
			var fragment_2 = root_1();
			var node_4 = first_child(fragment_2);
			{
				let $0 = user_derived(() => ["h-3.5 w-3.5", get(exportingCSV) ? "animate-spin" : ""].join(" "));
				Download(node_4, { get class() {
					return get($0);
				} });
			}
			var span = sibling(node_4, 2);
			var text = child(span, true);
			reset(span);
			template_effect(() => set_text(text, get(exportingCSV) ? "Exporting..." : "CSV Export"));
			append($$anchor, fragment_2);
		},
		$$slots: { default: true }
	});
	var node_5 = sibling(node_3, 2);
	Button(node_5, {
		variant: "outline",
		class: "h-8.5 rounded-xl cursor-pointer flex items-center gap-1.5 text-xs font-semibold",
		onclick: handlePrint,
		children: ($$anchor, $$slotProps) => {
			var fragment_3 = root_2();
			Printer(first_child(fragment_3), { class: "h-3.5 w-3.5" });
			next(2);
			append($$anchor, fragment_3);
		},
		$$slots: { default: true }
	});
	Button(sibling(node_5, 2), {
		variant: "outline",
		class: "h-8.5 rounded-xl cursor-pointer flex items-center gap-1.5 text-xs font-semibold",
		onclick: () => {
			if (get(activeTab) === "sales_portal") fetchSalesReceipts();
			else fetchAccountsReceipts();
		},
		children: ($$anchor, $$slotProps) => {
			var fragment_4 = root_3();
			var node_8 = first_child(fragment_4);
			{
				let $0 = user_derived(() => ["h-3.5 w-3.5", get(loadingSales) || get(loadingAccounts) ? "animate-spin" : ""].join(" "));
				Refresh_cw(node_8, { get class() {
					return get($0);
				} });
			}
			next(2);
			append($$anchor, fragment_4);
		},
		$$slots: { default: true }
	});
	reset(div_3);
	reset(div_1);
	var div_4 = sibling(div_1, 2);
	var button = child(div_4);
	var node_9 = child(button);
	Receipt(node_9, { class: "h-4 w-4" });
	var node_10 = sibling(node_9, 4);
	var consequent = ($$anchor) => {
		var span_1 = root_4();
		var text_1 = child(span_1, true);
		reset(span_1);
		template_effect(($0) => {
			set_class(span_1, 1, $0);
			set_text(text_1, get(receiptsData).totalCount);
		}, [() => clsx(["ml-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold", get(activeTab) === "sales_portal" ? "bg-primary-foreground/20 text-primary-foreground" : "bg-muted text-muted-foreground"].join(" "))]);
		append($$anchor, span_1);
	};
	if_block(node_10, ($$render) => {
		if (get(receiptsData) && get(receiptsData).totalCount !== void 0) $$render(consequent);
	});
	reset(button);
	var button_1 = sibling(button, 2);
	var node_11 = child(button_1);
	Building_2(node_11, { class: "h-4 w-4" });
	var node_12 = sibling(node_11, 4);
	var consequent_1 = ($$anchor) => {
		var span_2 = root_4();
		var text_2 = child(span_2, true);
		reset(span_2);
		template_effect(($0) => {
			set_class(span_2, 1, $0);
			set_text(text_2, get(accountsReceiptsData).totalCount);
		}, [() => clsx(["ml-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold", get(activeTab) === "accounts_portal" ? "bg-primary-foreground/20 text-primary-foreground" : "bg-muted text-muted-foreground"].join(" "))]);
		append($$anchor, span_2);
	};
	if_block(node_12, ($$render) => {
		if (get(accountsReceiptsData) && get(accountsReceiptsData).totalCount !== void 0) $$render(consequent_1);
	});
	reset(button_1);
	reset(div_4);
	var node_13 = sibling(div_4, 2);
	var consequent_5 = ($$anchor) => {
		var fragment_5 = root_11();
		var div_5 = first_child(fragment_5);
		var div_6 = child(div_5);
		var node_14 = child(div_6);
		Search(node_14, { class: "absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/60" });
		var input = sibling(node_14, 2);
		remove_input_defaults(input);
		reset(div_6);
		var div_7 = sibling(div_6, 2);
		var input_1 = child(div_7);
		remove_input_defaults(input_1);
		var input_2 = sibling(input_1, 4);
		remove_input_defaults(input_2);
		var node_15 = sibling(input_2, 2);
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
		if_block(node_15, ($$render) => {
			if (get(salesStartDate) || get(salesEndDate)) $$render(consequent_2);
		});
		reset(div_7);
		reset(div_5);
		var node_16 = sibling(div_5, 2);
		var consequent_3 = ($$anchor) => {
			var div_8 = root_5();
			Refresh_cw(child(div_8), { class: "h-8 w-8 text-primary animate-spin" });
			reset(div_8);
			append($$anchor, div_8);
		};
		var consequent_4 = ($$anchor) => {
			var fragment_7 = root_9();
			var div_9 = first_child(fragment_7);
			var table = child(div_9);
			var tbody = sibling(child(table));
			each(tbody, 21, () => get(receiptsData).items, index, ($$anchor, row) => {
				var tr = root_6();
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
				var a_1 = child(td_7);
				Eye(child(a_1), { class: "h-4.5 w-4.5" });
				reset(a_1);
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
				append($$anchor, tr);
			});
			reset(tbody);
			reset(table);
			reset(div_9);
			var div_10 = sibling(div_9, 2);
			var span_6 = child(div_10);
			var text_10 = child(span_6);
			reset(span_6);
			var div_11 = sibling(span_6, 2);
			var node_21 = child(div_11);
			{
				let $0 = user_derived(() => get(currentSalesPage) <= 1);
				Button(node_21, {
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
						var fragment_8 = root_7();
						Chevron_left(first_child(fragment_8), { class: "h-3 w-3 mr-1" });
						next();
						append($$anchor, fragment_8);
					},
					$$slots: { default: true }
				});
			}
			var node_23 = sibling(node_21, 2);
			{
				let $0 = user_derived(() => get(currentSalesPage) >= get(receiptsData).totalPages);
				Button(node_23, {
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
						var fragment_9 = root_8();
						Chevron_right(sibling(first_child(fragment_9)), { class: "h-3 w-3 ml-1" });
						append($$anchor, fragment_9);
					},
					$$slots: { default: true }
				});
			}
			reset(div_11);
			reset(div_10);
			template_effect(() => set_text(text_10, `Page ${get(receiptsData).page ?? ""} of ${get(receiptsData).totalPages ?? ""} (${get(receiptsData).totalCount ?? ""} items)`));
			append($$anchor, fragment_7);
		};
		var alternate = ($$anchor) => {
			append($$anchor, root_10());
		};
		if_block(node_16, ($$render) => {
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
		append($$anchor, fragment_5);
	};
	var consequent_11 = ($$anchor) => {
		var fragment_10 = root_19();
		var div_13 = first_child(fragment_10);
		var div_14 = child(div_13);
		var node_25 = child(div_14);
		Search(node_25, { class: "absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/60" });
		var input_3 = sibling(node_25, 2);
		remove_input_defaults(input_3);
		reset(div_14);
		var div_15 = sibling(div_14, 2);
		var input_4 = child(div_15);
		remove_input_defaults(input_4);
		var input_5 = sibling(input_4, 4);
		remove_input_defaults(input_5);
		var node_26 = sibling(input_5, 2);
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
		if_block(node_26, ($$render) => {
			if (get(accountsStartDate) || get(accountsEndDate) || get(accountsSearchVal)) $$render(consequent_6);
		});
		reset(div_15);
		reset(div_13);
		var node_27 = sibling(div_13, 2);
		var consequent_7 = ($$anchor) => {
			var div_16 = root_5();
			Refresh_cw(child(div_16), { class: "h-8 w-8 text-primary animate-spin" });
			reset(div_16);
			append($$anchor, div_16);
		};
		var consequent_10 = ($$anchor) => {
			var fragment_12 = root_16();
			var div_17 = first_child(fragment_12);
			var table_1 = child(div_17);
			var tbody_1 = sibling(child(table_1));
			each(tbody_1, 21, () => get(accountsReceiptsData).items, index, ($$anchor, row) => {
				var tr_1 = root_15();
				var td_8 = child(tr_1);
				var button_2 = child(td_8);
				var text_12 = child(button_2, true);
				reset(button_2);
				var span_7 = sibling(button_2, 2);
				var text_13 = child(span_7, true);
				reset(span_7);
				reset(td_8);
				var td_9 = sibling(td_8);
				var node_29 = child(td_9);
				var consequent_8 = ($$anchor) => {
					var fragment_13 = root_12();
					var div_18 = first_child(fragment_13);
					var node_30 = child(div_18);
					Coins(node_30, { class: "h-3.5 w-3.5 text-emerald-600 shrink-0" });
					var span_8 = sibling(node_30, 2);
					var text_14 = child(span_8, true);
					reset(span_8);
					reset(div_18);
					next(2);
					template_effect(() => set_text(text_14, get(row).destinationAccountName));
					append($$anchor, fragment_13);
				};
				var consequent_9 = ($$anchor) => {
					var fragment_14 = root_13();
					var div_19 = first_child(fragment_14);
					var node_31 = child(div_19);
					Landmark(node_31, { class: "h-3.5 w-3.5 text-blue-600 shrink-0" });
					var span_9 = sibling(node_31, 2);
					var text_15 = child(span_9, true);
					reset(span_9);
					reset(div_19);
					next(2);
					template_effect(() => set_text(text_15, get(row).destinationBankName));
					append($$anchor, fragment_14);
				};
				var alternate_1 = ($$anchor) => {
					append($$anchor, root_14());
				};
				if_block(node_29, ($$render) => {
					if (get(row).destinationAccountName) $$render(consequent_8);
					else if (get(row).destinationBankName) $$render(consequent_9, 1);
					else $$render(alternate_1, -1);
				});
				reset(td_9);
				var td_10 = sibling(td_9);
				var span_11 = child(td_10);
				var text_16 = child(span_11, true);
				reset(span_11);
				reset(td_10);
				var td_11 = sibling(td_10);
				var text_17 = child(td_11, true);
				reset(td_11);
				var td_12 = sibling(td_11);
				MoneyDisplay(child(td_12), { get amount() {
					return get(row).amount;
				} });
				reset(td_12);
				var td_13 = sibling(td_12);
				var span_12 = child(td_13);
				var node_33 = child(span_12);
				Circle_check(node_33, { class: "h-3 w-3" });
				var text_18 = sibling(node_33);
				reset(span_12);
				reset(td_13);
				var td_14 = sibling(td_13);
				DateDisplay(child(td_14), { get value() {
					return get(row).createdAt;
				} });
				reset(td_14);
				var td_15 = sibling(td_14);
				var button_3 = child(td_15);
				Eye(child(button_3), { class: "h-4.5 w-4.5" });
				reset(button_3);
				reset(td_15);
				reset(tr_1);
				template_effect(() => {
					set_text(text_12, get(row).referenceId || `TXN-${get(row).id}`);
					set_text(text_13, get(row).documentNumber || `Tx #${get(row).id}`);
					set_text(text_16, get(row).paymentMethod || "cash");
					set_attribute(td_11, "title", get(row).description);
					set_text(text_17, get(row).description || "Receipt collection");
					set_class(span_12, 1, `inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold capitalize
										${get(row).status === "success" || get(row).status === "approved" || get(row).status === "posted" ? "bg-emerald-50 text-emerald-700 border border-emerald-200" : "bg-amber-50 text-amber-700 border border-amber-200"}`);
					set_text(text_18, ` ${(get(row).status === "approved" || get(row).status === "posted" ? "success" : get(row).status || "success") ?? ""}`);
				});
				delegated("click", button_2, () => set(selectedAccountsReceipt, get(row), true));
				delegated("click", button_3, () => set(selectedAccountsReceipt, get(row), true));
				append($$anchor, tr_1);
			});
			reset(tbody_1);
			reset(table_1);
			reset(div_17);
			var div_20 = sibling(div_17, 2);
			var span_13 = child(div_20);
			var text_19 = child(span_13);
			reset(span_13);
			var div_21 = sibling(span_13, 2);
			var node_36 = child(div_21);
			{
				let $0 = user_derived(() => get(currentAccountsPage) <= 1);
				Button(node_36, {
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
						var fragment_15 = root_7();
						Chevron_left(first_child(fragment_15), { class: "h-3 w-3 mr-1" });
						next();
						append($$anchor, fragment_15);
					},
					$$slots: { default: true }
				});
			}
			var node_38 = sibling(node_36, 2);
			{
				let $0 = user_derived(() => get(currentAccountsPage) >= get(accountsReceiptsData).totalPages);
				Button(node_38, {
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
						var fragment_16 = root_8();
						Chevron_right(sibling(first_child(fragment_16)), { class: "h-3 w-3 ml-1" });
						append($$anchor, fragment_16);
					},
					$$slots: { default: true }
				});
			}
			reset(div_21);
			reset(div_20);
			template_effect(() => set_text(text_19, `Page ${get(accountsReceiptsData).page ?? ""} of ${get(accountsReceiptsData).totalPages ?? ""} (${get(accountsReceiptsData).totalCount ?? ""} items)`));
			append($$anchor, fragment_12);
		};
		var alternate_2 = ($$anchor) => {
			var div_22 = root_18();
			var node_40 = child(div_22);
			Building_2(node_40, { class: "h-10 w-10 text-muted-foreground/40 mx-auto" });
			Button(sibling(node_40, 4), {
				variant: "default",
				size: "sm",
				class: "rounded-xl cursor-pointer",
				onclick: () => goto("/sales/receipts/new"),
				children: ($$anchor, $$slotProps) => {
					var fragment_17 = root_17();
					Plus(first_child(fragment_17), { class: "h-3.5 w-3.5 mr-1" });
					next();
					append($$anchor, fragment_17);
				},
				$$slots: { default: true }
			});
			reset(div_22);
			append($$anchor, div_22);
		};
		if_block(node_27, ($$render) => {
			if (get(loadingAccounts)) $$render(consequent_7);
			else if (get(accountsReceiptsData) && get(accountsReceiptsData).items && get(accountsReceiptsData).items.length > 0) $$render(consequent_10, 1);
			else $$render(alternate_2, -1);
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
		append($$anchor, fragment_10);
	};
	if_block(node_13, ($$render) => {
		if (get(activeTab) === "sales_portal") $$render(consequent_5);
		else if (get(activeTab) === "accounts_portal") $$render(consequent_11, 1);
	});
	reset(div);
	var node_43 = sibling(div, 2);
	var consequent_12 = ($$anchor) => {
		var div_23 = root_21();
		var div_24 = child(div_23);
		var div_25 = child(div_24);
		var div_26 = child(div_25);
		Receipt(child(div_26), { class: "h-5 w-5 text-primary" });
		next(2);
		reset(div_26);
		var button_4 = sibling(div_26, 2);
		X(child(button_4), { class: "h-4 w-4" });
		reset(button_4);
		reset(div_25);
		var div_27 = sibling(div_25, 2);
		var div_28 = child(div_27);
		var span_14 = sibling(child(div_28), 2);
		var text_20 = child(span_14, true);
		reset(span_14);
		reset(div_28);
		var div_29 = sibling(div_28, 2);
		var div_30 = child(div_29);
		var span_15 = sibling(child(div_30), 2);
		var text_21 = child(span_15, true);
		reset(span_15);
		reset(div_30);
		var div_31 = sibling(div_30, 2);
		var span_16 = sibling(child(div_31), 2);
		var text_22 = child(span_16, true);
		reset(span_16);
		reset(div_31);
		reset(div_29);
		var div_32 = sibling(div_29, 2);
		var span_17 = sibling(child(div_32), 2);
		MoneyDisplay(child(span_17), { get amount() {
			return get(selectedAccountsReceipt).amount;
		} });
		reset(span_17);
		reset(div_32);
		var div_33 = sibling(div_32, 2);
		var p = sibling(child(div_33), 2);
		var text_23 = child(p, true);
		reset(p);
		reset(div_33);
		var div_34 = sibling(div_33, 2);
		var div_35 = child(div_34);
		var span_18 = sibling(child(div_35), 2);
		var text_24 = child(span_18, true);
		reset(span_18);
		reset(div_35);
		var div_36 = sibling(div_35, 2);
		var span_19 = sibling(child(div_36), 2);
		var text_25 = child(span_19, true);
		reset(span_19);
		reset(div_36);
		reset(div_34);
		reset(div_27);
		var div_37 = sibling(div_27, 2);
		var node_47 = child(div_37);
		Button(node_47, {
			variant: "outline",
			size: "sm",
			class: "rounded-xl cursor-pointer",
			onclick: () => window.print(),
			children: ($$anchor, $$slotProps) => {
				var fragment_18 = root_20();
				Printer(first_child(fragment_18), { class: "h-3.5 w-3.5 mr-1" });
				next();
				append($$anchor, fragment_18);
			},
			$$slots: { default: true }
		});
		Button(sibling(node_47, 2), {
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
		reset(div_37);
		reset(div_24);
		reset(div_23);
		template_effect(($0) => {
			set_text(text_20, get(selectedAccountsReceipt).referenceId || `TXN-${get(selectedAccountsReceipt).id}`);
			set_text(text_21, get(selectedAccountsReceipt).destinationAccountName || get(selectedAccountsReceipt).destinationBankName || "General Account");
			set_text(text_22, get(selectedAccountsReceipt).paymentMethod || "cash");
			set_text(text_23, get(selectedAccountsReceipt).description || "Receipt collection");
			set_text(text_24, $0);
			set_text(text_25, get(selectedAccountsReceipt).status === "approved" || get(selectedAccountsReceipt).status === "posted" ? "success" : get(selectedAccountsReceipt).status || "success");
		}, [() => get(selectedAccountsReceipt).createdAt ? get(selectedAccountsReceipt).createdAt.replace("T", " ").slice(0, 19) : "â€”"]);
		delegated("click", button_4, () => set(selectedAccountsReceipt, null));
		append($$anchor, div_23);
	};
	if_block(node_43, ($$render) => {
		if (get(selectedAccountsReceipt)) $$render(consequent_12);
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

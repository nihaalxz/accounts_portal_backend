import { B as append, Bt as reset, Ct as user_derived, D as head, Et as store_get, H as from_html, I as if_block, K as delegate, N as each, Nt as pop, P as index, Pt as push, Q as get, R as set_text, Tt as setup_stores, V as comment, _ as set_attribute, bt as state, dt as $document, g as remove_input_defaults, gt as proxy, ht as sibling, it as effect, m as bind_value, mt as first_child, n as onDestroy, ot as template_effect, pt as child, q as delegated, r as onMount, vt as set, w as set_class, zt as next } from "../chunks/dXkmWTgM.js";
import "../chunks/DhaYE-8x.js";
import { t as apiFetch } from "../chunks/bkNoIgos.js";
import { r as toast } from "../chunks/CbPRQHfn.js";
import { t as Arrow_up_right } from "../chunks/BUyTpJv8.js";
import { t as Chevron_down } from "../chunks/Dj1p1QvC2.js";
import { t as Download } from "../chunks/D8w6XH0S2.js";
import { t as External_link } from "../chunks/ifddzD342.js";
import { t as File_text } from "../chunks/NLRKrZbo2.js";
import { t as Printer } from "../chunks/Ds2DlsUi.js";
import { t as Receipt } from "../chunks/4mbxDyuf.js";
import { t as Refresh_cw } from "../chunks/DpTJy0Wb.js";
import { t as Search } from "../chunks/D7t9qluE.js";
import { t as Sparkles } from "../chunks/DEdRl-lg.js";
import { t as User_check } from "../chunks/tSSJYCMY.js";
import { t as User } from "../chunks/C8PICJbu.js";
import { t as Wallet } from "../chunks/BahXSy4P.js";
import { t as X } from "../chunks/wXHc9RNY.js";
import { i as formatDateOnly, o as getBahrainDateString, s as getBahrainPresetRanges } from "../chunks/Cu8_Vl4p.js";
import { t as page } from "../chunks/ilDoQZ9y.js";
import { t as Button } from "../chunks/BhXsq3bC.js";
import "../chunks/CFhOpZR32.js";
import { i as notificationDispatcher, n as signalRService, r as subscriptionManager, t as SignalRGroups } from "../chunks/BJZAvuD52.js";
import { t as MoneyDisplay } from "../chunks/CIVSRuaR2.js";
import { t as DateDisplay } from "../chunks/DEr_pDJT2.js";
import "../chunks/DjdBrX6C2.js";
import { t as exportToCSV } from "../chunks/C74Z4VDd2.js";
import { t as previewDocument } from "../chunks/DeAFrlD22.js";
import { t as createDebouncedRefetch } from "../chunks/B2ROZDOb.js";
//#region src/lib/realtime/ledger-realtime-controller.ts
var LedgerRealtimeController = class {
	getHeadId;
	onLedgerChangedCallback;
	debouncedRefetch;
	currentSubscribedGroup = null;
	unsubscribeDispatcher = null;
	constructor(options) {
		this.getHeadId = options.getHeadId;
		this.onLedgerChangedCallback = options.onLedgerChanged;
		this.debouncedRefetch = createDebouncedRefetch(this.onLedgerChangedCallback, options.debounceMs ?? 200);
	}
	async mount() {
		this.unsubscribeDispatcher = notificationDispatcher.on("LedgerChanged", (envelope) => {
			const activeHeadId = this.getHeadId();
			if (activeHeadId && envelope.headId === activeHeadId) {
				console.log(`[REALTIME CONTROLLER] Received LedgerChanged for Head ID ${activeHeadId}. Triggering debounced refresh.`);
				this.debouncedRefetch();
			}
		});
		await this.syncSubscription();
	}
	async syncSubscription() {
		const activeHeadId = this.getHeadId();
		const targetGroup = activeHeadId ? SignalRGroups.CustomerLedger(activeHeadId) : null;
		if (this.currentSubscribedGroup === targetGroup) return;
		if (this.currentSubscribedGroup) {
			await subscriptionManager.unsubscribeFromGroup(this.currentSubscribedGroup);
			this.currentSubscribedGroup = null;
		}
		if (targetGroup) {
			await signalRService.startConnection();
			await subscriptionManager.subscribeToGroup(targetGroup);
			this.currentSubscribedGroup = targetGroup;
			console.log(`[REALTIME CONTROLLER] Subscribed to SignalR group: ${targetGroup}`);
		}
	}
	async unmount() {
		if (this.unsubscribeDispatcher) {
			this.unsubscribeDispatcher();
			this.unsubscribeDispatcher = null;
		}
		if (this.currentSubscribedGroup) {
			await subscriptionManager.unsubscribeFromGroup(this.currentSubscribedGroup);
			console.log(`[REALTIME CONTROLLER] Unsubscribed from SignalR group: ${this.currentSubscribedGroup}`);
			this.currentSubscribedGroup = null;
		}
	}
};
//#endregion
//#region src/routes/(app)/sales/ledger/+page.svelte
var root = from_html(`<div class="mt-4 flex justify-between text-left text-xs border-t pt-3 font-mono"><div><p><strong>Account Name:</strong> </p> <p><strong>Account Type:</strong> </p> <p><strong>Contact:</strong> </p></div> <div class="text-right"><p><strong>Generated Date:</strong> </p> <p><strong>Statement Range:</strong> </p> <p><strong>Wallet Balance:</strong> </p></div></div>`);
var root_1 = from_html(`<!> <span>Deposit Client Receipt</span>`, 1);
var root_2 = from_html(`<!> <span>General Receipt</span>`, 1);
var root_3 = from_html(`<!> <!>`, 1);
var root_4 = from_html(`<!> <span>CSV Export</span>`, 1);
var root_5 = from_html(`<!> <span>Print</span>`, 1);
var root_6 = from_html(`<!> <span>Reload</span>`, 1);
var root_7 = from_html(`<div class="flex items-center gap-2 truncate"><span> </span> <span class="font-bold"> </span> <span class="text-muted-foreground text-[11px]"> </span></div>`);
var root_8 = from_html(`<span class="text-muted-foreground">Search and select Customer Head or Agent Account...</span>`);
var root_9 = from_html(`<button type="button" class="absolute right-5 top-4.5 text-muted-foreground hover:text-foreground"><!></button>`);
var root_10 = from_html(`<span class="px-1.5 py-0.2 text-[8px] font-bold uppercase rounded bg-emerald-500/10 text-emerald-600 border border-emerald-500/20"> </span>`);
var root_11 = from_html(`<button type="button"><div class="flex items-center gap-2.5 truncate"><div> </div> <div class="truncate"><div class="flex items-center gap-1.5 flex-wrap"><span class="text-xs font-bold"> </span> <span> </span> <!></div> <p class="text-[10px] text-muted-foreground truncate"> </p></div></div> <div class="text-right shrink-0"><span class="text-[10px] font-mono block text-muted-foreground">Wallet</span> <span class="text-xs font-bold font-mono"> </span></div></button>`);
var root_12 = from_html(`<div class="p-6 text-center text-xs text-muted-foreground">No customer heads or agent accounts match your search.</div>`);
var root_13 = from_html(`<button type="button" tabindex="-1" class="fixed inset-0 z-40 bg-transparent cursor-default" aria-label="Close dropdown backdrop"></button> <div class="absolute left-0 right-0 top-full mt-1.5 bg-card border border-border rounded-2xl shadow-xl z-50 overflow-hidden max-h-80 flex flex-col animate-in fade-in-50 zoom-in-95"><div class="p-2.5 border-b border-border bg-muted/20 relative"><!> <input type="text" placeholder="Search by name, email, phone number..." class="w-full text-xs pl-8 pr-8 py-2 border border-border rounded-xl bg-background text-foreground focus:outline-none"/> <!></div> <div class="overflow-y-auto divide-y divide-border/40 p-1"><!></div></div>`, 1);
var root_14 = from_html(`<div class="bg-card border border-border rounded-2xl p-12 h-80 flex flex-col items-center justify-center animate-pulse print:hidden"><!> <p class="text-xs font-semibold text-muted-foreground">Loading account statement & calculating running balances...</p></div>`);
var root_15 = from_html(`<span class="px-2.5 py-0.5 text-[10px] font-bold uppercase rounded-md bg-emerald-500/10 text-emerald-700 border border-emerald-500/20"> </span>`);
var root_16 = from_html(`• <span class="font-semibold text-foreground"> </span>`, 1);
var root_17 = from_html(`<button type="button" class="absolute right-3 top-2.5 text-muted-foreground hover:text-foreground cursor-pointer"><!></button>`);
var root_18 = from_html(`<a target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 font-medium text-foreground hover:text-primary hover:underline transition-colors group"><span> </span> <!></a>`);
var root_19 = from_html(`<span> </span>`);
var root_20 = from_html(`<span class="inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-muted/80 text-foreground border border-border"> </span>`);
var root_21 = from_html(`<span class="text-muted-foreground/35 font-normal">—</span>`);
var root_22 = from_html(`<span class="text-muted-foreground/35 font-normal font-sans">—</span>`);
var root_23 = from_html(`<a target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-semibold border border-primary/30 rounded-lg text-primary hover:bg-primary/10 transition-colors" title="Open details in new tab"><span>View</span> <!></a>`);
var root_24 = from_html(`<span class="text-muted-foreground/40 font-normal">—</span>`);
var root_25 = from_html(`<tr class="hover:bg-muted/20 transition-colors"><td class="p-4 text-muted-foreground font-sans"><!></td><td class="p-4"><span class="px-2 py-0.5 text-[9px] font-bold uppercase rounded-md bg-muted border border-border text-foreground"> </span></td><td class="p-4 font-sans text-muted-foreground truncate max-w-md"><!></td><td class="p-4 font-sans"><!></td><td class="p-4 text-right text-red-600 font-bold"><!></td><td class="p-4 text-right text-emerald-600 font-bold"><!></td><td> </td><td class="p-4 text-center font-sans print:hidden"><!></td></tr>`);
var root_26 = from_html(`<div class="bg-card border border-border rounded-2xl overflow-hidden shadow-xs print:border-none print:shadow-none"><div class="overflow-x-auto"><table class="w-full min-w-[850px] text-left border-collapse text-xs"><thead><tr class="bg-muted/40 border-b border-border text-muted-foreground font-semibold print:bg-transparent uppercase text-[10px] tracking-wider"><th class="p-4 w-32">Date</th><th class="p-4 w-28">Type</th><th class="p-4">Reference Narration</th><th class="p-4 w-32">Payment Method</th><th class="p-4 text-right w-28 text-red-600">Debit (-)</th><th class="p-4 text-right w-28 text-emerald-600">Credit (+)</th><th class="p-4 text-right w-32 text-foreground font-bold">Running Bal</th><th class="p-4 text-center w-24 print:hidden">Action</th></tr></thead><tbody class="divide-y divide-border/60 font-mono"><tr class="bg-muted/20 font-semibold text-xs border-b border-border/80"><td class="p-4 text-muted-foreground font-sans"> </td><td class="p-4"><span class="px-2 py-0.5 text-[9px] font-bold uppercase rounded-md bg-muted border border-border text-muted-foreground">OPENING</span></td><td class="p-4 font-sans text-foreground font-medium" colspan="2">OPENING BALANCE - Balance Brought Forward</td><td class="p-4 text-right text-muted-foreground font-sans">-</td><td class="p-4 text-right text-muted-foreground font-sans">-</td><td> </td><td class="p-4 print:hidden"></td></tr><!><tr class="bg-muted/40 font-bold text-xs border-t-2 border-border text-foreground"><td class="p-4 font-sans">TOTALS</td><td class="p-4 font-sans"> </td><td class="p-4 font-sans" colspan="2">Total Movements & Closing Balance</td><td class="p-4 text-right text-red-600"> </td><td class="p-4 text-right text-emerald-600"> </td><td> </td><td class="p-4 print:hidden"></td></tr></tbody></table></div></div>`);
var root_27 = from_html(`<div class="bg-card border border-border rounded-2xl p-12 text-center text-muted-foreground text-xs shadow-xs space-y-2"><p class="font-semibold text-foreground text-sm">No statement entries match your filter criteria.</p> <p class="text-xs text-muted-foreground">Try clearing date ranges or search terms to view all transactions.</p></div>`);
var root_28 = from_html(`<div class="bg-card border border-border rounded-2xl p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-xs print:border-none print:shadow-none"><div class="flex items-center gap-4"><div> </div> <div><div class="flex items-center gap-2 flex-wrap"><h2 class="text-base font-bold text-foreground font-sans"> </h2> <span> </span> <!></div> <p class="text-xs text-muted-foreground mt-0.5"> <!></p></div></div></div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-sans"><div class="bg-card border border-border rounded-2xl p-4 shadow-xs flex items-center gap-3"><div class="p-2.5 bg-muted text-muted-foreground rounded-xl"><!></div> <div><p class="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">Opening Balance</p> <h3 class="text-base font-bold font-mono text-foreground"> </h3> <p class="text-[10px] text-muted-foreground">Balance brought forward</p></div></div> <div class="bg-card border border-border rounded-2xl p-4 shadow-xs flex items-center gap-3 hover:border-emerald-500/30 transition-all"><div class="p-2.5 bg-emerald-500/10 text-emerald-600 rounded-xl"><!></div> <div><p class="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">Total Deposited / Paid (+)</p> <h3 class="text-base font-bold font-mono text-emerald-600"> </h3> <p class="text-[10px] text-muted-foreground">Receipts & Deposits</p></div></div> <div class="bg-card border border-border rounded-2xl p-4 shadow-xs flex items-center gap-3 hover:border-red-500/30 transition-all"><div class="p-2.5 bg-red-500/10 text-red-600 rounded-xl"><!></div> <div><p class="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">Total Invoiced / Charges (-)</p> <h3 class="text-base font-bold font-mono text-red-600"> </h3> <p class="text-[10px] text-muted-foreground">Bookings & Charges</p></div></div> <div class="bg-card border border-border rounded-2xl p-4 shadow-xs flex items-center gap-3 hover:border-primary/30 transition-all"><div><!></div> <div><p class="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">Wallet Balance</p> <h3> </h3> <p class="text-[10px] text-muted-foreground"> </p></div></div></div> <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 print:hidden"><div class="relative flex-1 max-w-md"><!> <input type="text" placeholder="Search transactions by narration or type..." class="w-full text-xs pl-9 pr-8 py-2 border border-border rounded-xl bg-background text-foreground focus:outline-none shadow-xs"/> <!></div> <span class="text-xs text-muted-foreground font-mono"> </span></div> <!>`, 1);
var root_29 = from_html(`<div class="bg-card border border-border rounded-2xl p-16 text-center shadow-xs space-y-4"><div class="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto"><!></div> <div class="max-w-md mx-auto space-y-1"><h3 class="text-base font-bold text-foreground">Select an Account to View Ledger Statement</h3> <p class="text-xs text-muted-foreground">Choose any Customer Head or Agent Account from the search dropdown above to explore chronological debit & credit postings and running balances.</p></div></div>`);
var root_30 = from_html(`<div class="space-y-6 print:space-y-0 print:p-0"><div class="hidden print:block mb-6 text-center border-b pb-4"><h1 class="text-xl font-bold uppercase tracking-wider text-black">TEXAS TRAVEL ACCOUNTS PORTAL</h1> <p class="text-xs text-gray-600">Customer & Agent Official Account Statement</p> <!></div> <div class="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4 print:hidden"><div class="flex flex-col gap-1 min-w-0 max-w-md 2xl:max-w-xl"><h1 class="text-xl font-bold text-foreground font-sans flex items-center gap-2"><!> <span>Customer & Agent Ledger Explorer</span></h1> <p class="text-xs text-muted-foreground">Interactive account statement analyzer with chronological debits, credits, and running balances.</p></div> <div class="flex items-center gap-1.5 sm:gap-2 flex-wrap xl:flex-nowrap shrink-0 xl:justify-end"><!> <!> <!> <!></div></div> <div class="bg-card border border-border rounded-2xl p-5 space-y-4 print:hidden shadow-xs"><div class="grid grid-cols-1 lg:grid-cols-12 gap-4 items-end"><div class="lg:col-span-4 space-y-1.5"><span class="block text-[10px] uppercase font-bold text-muted-foreground tracking-wider">Account Category</span> <div class="flex bg-muted/40 p-1 rounded-xl border border-border gap-1"><button type="button">All</button> <button type="button"><!> <span>Customers</span></button> <button type="button"><!> <span>Agents</span></button></div></div> <div class="lg:col-span-8 space-y-1.5 relative"><label for="combobox-trigger" class="block text-[10px] uppercase font-bold text-muted-foreground tracking-wider">Select Account</label> <div class="relative"><button id="combobox-trigger" type="button" class="w-full text-xs p-2.5 pl-3 pr-10 border border-border rounded-xl bg-background text-foreground flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer shadow-xs"><!> <!></button> <!></div></div></div> <div class="flex flex-col md:flex-row gap-4 items-end pt-2 border-t border-border/60"><div class="flex flex-wrap items-center gap-3"><div class="space-y-1"><label for="start-date" class="block text-[10px] uppercase font-bold text-muted-foreground tracking-wider">Statement From</label> <input id="start-date" type="date" class="text-xs p-2 border border-border rounded-xl bg-background text-foreground focus:outline-none cursor-pointer"/></div> <div class="space-y-1"><label for="end-date" class="block text-[10px] uppercase font-bold text-muted-foreground tracking-wider">Statement To</label> <input id="end-date" type="date" class="text-xs p-2 border border-border rounded-xl bg-background text-foreground focus:outline-none cursor-pointer"/></div></div> <div class="space-y-1"><span class="block text-[10px] uppercase font-bold text-muted-foreground tracking-wider">Quick Date Presets</span> <div class="flex items-center gap-1.5 flex-wrap"><button type="button" class="px-2.5 py-1 text-[11px] font-medium border border-border rounded-lg bg-background hover:bg-muted text-muted-foreground hover:text-foreground cursor-pointer transition-colors">All Time</button> <button type="button" class="px-2.5 py-1 text-[11px] font-medium border border-border rounded-lg bg-background hover:bg-muted text-muted-foreground hover:text-foreground cursor-pointer transition-colors">This Month</button> <button type="button" class="px-2.5 py-1 text-[11px] font-medium border border-border rounded-lg bg-background hover:bg-muted text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Last 30 Days</button> <button type="button" class="px-2.5 py-1 text-[11px] font-medium border border-border rounded-lg bg-background hover:bg-muted text-muted-foreground hover:text-foreground cursor-pointer transition-colors">This Year</button></div></div></div></div> <!> <div class="hidden print:block border-t pt-8 mt-12 text-xs text-gray-600 font-mono"><div class="flex justify-between items-end"><div><p>Prepared By: Texas Accounts Department</p> <p>Thank you for choosing Texas Travel.</p></div> <div class="text-right border-t border-black pt-2 w-48 text-center font-bold">Authorized Signature</div></div></div></div>`);
function _page($$anchor, $$props) {
	push($$props, true);
	const $page = () => store_get(page, "$page", $$stores);
	const [$$stores, $$cleanup] = setup_stores();
	let urlHeadId = user_derived(() => $page().url.searchParams.get("headId"));
	let urlType = user_derived(() => $page().url.searchParams.get("type"));
	let selectedCategory = state("all");
	let accountsList = state(proxy([]));
	let selectedAccount = state(null);
	let isDropdownOpen = state(false);
	let dropdownSearch = state("");
	let ledgerEntries = state(proxy([]));
	let openingBalance = state(0);
	let closingBalance = user_derived(() => () => get(ledgerEntries).length > 0 ? get(ledgerEntries)[get(ledgerEntries).length - 1].runningBalance ?? 0 : get(openingBalance));
	let loading = state(false);
	let startDate = state("");
	let endDate = state("");
	let searchFilter = state("");
	function getAccountKey(acc) {
		if (!acc) return "";
		return `${acc.type || "customer"}_${acc.id}`;
	}
	async function loadDirectory(autoSelectFirst = false) {
		try {
			const res = await apiFetch(`api/sales-entries/heads?pageSize=500${get(selectedCategory) !== "all" ? `&type=${get(selectedCategory)}` : ""}`);
			if (res && res.items) {
				set(accountsList, res.items, true);
				if (autoSelectFirst && get(urlHeadId)) {
					const targetType = get(urlType) || "customer";
					const match = get(accountsList).find((a) => String(a.id) === String(get(urlHeadId)) && (get(urlType) ? a.type === targetType : true));
					if (match) selectAccount(match);
					else if (get(accountsList).length > 0) selectAccount(get(accountsList)[0]);
				}
			}
		} catch (err) {
			console.error("Failed to load accounts directory:", err);
		}
	}
	async function fetchLedgerForAccount(acc) {
		if (!acc || !acc.id) {
			set(ledgerEntries, [], true);
			return;
		}
		set(loading, true);
		try {
			const accType = acc.type || "customer";
			const accId = acc.id;
			try {
				const detail = await apiFetch(`api/sales-entries/heads/${accId}?type=${accType}`);
				if (detail) set(selectedAccount, detail, true);
			} catch (e) {}
			const res = await apiFetch(`api/sales-entries/customer-ledger?headId=${accId}&type=${accType}&pageSize=1000`);
			if (res && res.items) {
				const allItems = res.items.slice().sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
				let opBal = 0;
				if (get(startDate)) opBal = allItems.filter((e) => e.createdAt < get(startDate)).reduce((sum, e) => sum + (Number(e.credit) || 0) - (Number(e.debit) || 0), 0);
				set(openingBalance, opBal, true);
				let periodItems = allItems;
				if (get(startDate)) periodItems = periodItems.filter((e) => e.createdAt >= get(startDate));
				if (get(endDate)) periodItems = periodItems.filter((e) => e.createdAt <= get(endDate) + "T23:59:59");
				let runningBal = get(openingBalance);
				set(ledgerEntries, periodItems.map((item) => {
					runningBal += (Number(item.credit) || 0) - (Number(item.debit) || 0);
					return {
						...item,
						runningBalance: runningBal
					};
				}), true);
			} else {
				set(openingBalance, 0);
				set(ledgerEntries, [], true);
			}
		} catch (err) {
			console.error("Failed to load account ledger:", err);
			set(ledgerEntries, [], true);
		} finally {
			set(loading, false);
		}
	}
	let realtimeController = null;
	function selectAccount(acc) {
		set(selectedAccount, acc, true);
		set(isDropdownOpen, false);
		set(dropdownSearch, "");
		fetchLedgerForAccount(acc);
		realtimeController?.syncSubscription();
	}
	async function setCategoryFilter(cat) {
		set(selectedCategory, cat, true);
		await loadDirectory();
		if (get(selectedAccount)) {
			if (!get(accountsList).some((a) => String(a.id) === String(get(selectedAccount).id) && a.type === get(selectedAccount).type) && get(accountsList).length > 0) selectAccount(get(accountsList)[0]);
			else if (get(accountsList).length === 0) {
				set(selectedAccount, null);
				set(ledgerEntries, [], true);
			}
		}
	}
	onMount(async () => {
		await loadDirectory(true);
		realtimeController = new LedgerRealtimeController({
			getHeadId: () => get(selectedAccount)?.id,
			onLedgerChanged: () => {
				if (get(selectedAccount)) fetchLedgerForAccount(get(selectedAccount));
			}
		});
		await realtimeController.mount();
	});
	onDestroy(() => {
		realtimeController?.unmount();
	});
	let filteredAccounts = user_derived(() => () => {
		if (!get(dropdownSearch).trim()) return get(accountsList);
		const q = get(dropdownSearch).trim().toLowerCase();
		return get(accountsList).filter((a) => a.firstName && a.firstName.toLowerCase().includes(q) || a.lastName && a.lastName.toLowerCase().includes(q) || a.email && a.email.toLowerCase().includes(q) || a.mobileNo && a.mobileNo.includes(q) || String(a.id).includes(q));
	});
	let filteredLedgerEntries = user_derived(() => () => {
		if (!get(searchFilter).trim()) return get(ledgerEntries);
		const term = get(searchFilter).trim().toLowerCase();
		return get(ledgerEntries).filter((e) => e.type && e.type.toLowerCase().includes(term) || e.description && e.description.toLowerCase().includes(term));
	});
	let totalDebits = user_derived(() => () => get(ledgerEntries).reduce((sum, e) => sum + (Number(e.debit) || 0), 0));
	let totalCredits = user_derived(() => () => get(ledgerEntries).reduce((sum, e) => sum + (Number(e.credit) || 0), 0));
	user_derived(() => () => get(totalCredits)() - get(totalDebits)());
	function applyDatePreset(preset) {
		if (preset === "all") {
			set(startDate, "");
			set(endDate, "");
		} else if (preset === "month") {
			const ranges = getBahrainPresetRanges();
			set(startDate, ranges.thisMonth.startDate, true);
			set(endDate, ranges.thisMonth.endDate, true);
		} else if (preset === "30days") {
			const today = getBahrainDateString();
			const past30 = /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).getTime() - 720 * 60 * 60 * 1e3);
			set(startDate, getBahrainDateString(past30), true);
			set(endDate, today, true);
		} else if (preset === "year") {
			const today = getBahrainDateString();
			const year = today.split("-")[0];
			set(startDate, `${year}-01-01`);
			set(endDate, today, true);
		}
		if (get(selectedAccount)) fetchLedgerForAccount(get(selectedAccount));
	}
	function exportToCSV$1() {
		if (!get(selectedAccount)) return;
		const headers = [
			"Date",
			"Type",
			"Reference",
			"Debit",
			"Credit",
			"Balance"
		];
		const rows = [];
		rows.push([
			get(startDate) || "Inception",
			"OPENING",
			"OPENING BALANCE - Balance Brought Forward",
			"-",
			"-",
			get(openingBalance) > 0 ? `+${get(openingBalance).toFixed(3)}` : get(openingBalance).toFixed(3)
		]);
		for (const row of get(ledgerEntries)) rows.push([
			row.createdAt ? formatDateOnly(row.createdAt) : "",
			row.type || "",
			row.description || "",
			row.debit > 0 ? Number(row.debit).toFixed(3) : "-",
			row.credit > 0 ? Number(row.credit).toFixed(3) : "-",
			row.runningBalance > 0 ? `+${Number(row.runningBalance).toFixed(3)}` : Number(row.runningBalance).toFixed(3)
		]);
		rows.push([
			get(endDate) || "Current",
			"TOTALS",
			"Statement Closing Balance",
			get(totalDebits)().toFixed(3),
			get(totalCredits)().toFixed(3),
			get(closingBalance)() > 0 ? `+${get(closingBalance)().toFixed(3)}` : get(closingBalance)().toFixed(3)
		]);
		exportToCSV(`ledger_${get(selectedAccount).firstName}_${get(selectedAccount).lastName}_${getBahrainDateString()}.csv`, headers, rows);
		toast.success("CSV exported successfully.");
	}
	function handlePrint() {
		if (!get(selectedAccount)) return;
		previewDocument("report", "sales-ledger", {
			headId: get(selectedAccount).id,
			type: get(selectedAccount).type,
			startDate: get(startDate),
			endDate: get(endDate)
		});
		toast.info("Generating print document...");
	}
	function getInitials(firstName, lastName) {
		return (firstName || "").charAt(0).toUpperCase() + (lastName || "").charAt(0).toUpperCase() || "AC";
	}
	function getBookingDetailUrl(row) {
		if (!row) return null;
		let targetId = null;
		if (row.serviceId != null && String(row.serviceId).trim() !== "" && String(row.serviceId) !== "0") targetId = String(row.serviceId);
		if (!targetId && row.description) {
			const match = row.description.match(/#([A-Za-z0-9_-]+)/) || row.description.match(/\b(TXS[A-Za-z0-9_-]+)\b/i);
			if (match && match[1]) targetId = match[1];
		}
		if (!targetId && row.id != null) targetId = String(row.id);
		const type = (row.type || "").toLowerCase();
		const desc = (row.description || "").toLowerCase();
		const isReceiptOrDeposit = type === "receipt" || type === "receipts" || type === "deposit" || type === "wallet_deposit" || type === "credit_settlement" || type === "accounts_receipt" || type === "accounts-receipt" || type === "client_receipt" || type === "general_receipt" || type === "payment" || desc.startsWith("receipt") || desc.includes("receipt #") || desc.includes("wallet deposit") || desc.includes("payment received") || desc.includes("payment approved for receipt") || desc.includes("cash payment approved for receipt") || desc.includes("txsrcpt") || desc.includes("txs-arcpt") || desc.includes("arcpt-");
		if (isReceiptOrDeposit) {
			if (targetId) return `/sales/receipts/${targetId}`;
			return `/sales/receipts`;
		}
		if (!targetId) return null;
		if (type === "flight" || type === "flights" || type === "flight_booking" || !isReceiptOrDeposit && desc.includes("flight")) return `/sales/bookings/flights/${targetId}`;
		if (type === "hotel" || type === "hotels" || type === "hotel_booking" || !isReceiptOrDeposit && desc.includes("hotel")) return `/sales/bookings/hotels/${targetId}`;
		if (type === "visa" || type === "visas" || type === "visa_application" || !isReceiptOrDeposit && desc.includes("visa")) return `/sales/bookings/visa/${targetId}`;
		if (type === "vfs" || type === "vfs_appointment" || !isReceiptOrDeposit && desc.includes("vfs")) return `/sales/bookings/vfs/${targetId}`;
		if (type === "holiday" || type === "holidays" || type === "holiday_package" || !isReceiptOrDeposit && desc.includes("holiday")) return `/sales/bookings/holiday/${targetId}`;
		if (type === "transport" || type === "transportation" || !isReceiptOrDeposit && desc.includes("transport")) return `/sales/bookings/transportation/${targetId}`;
		if (type === "other" || type === "otherservice" || type === "other-services" || type === "otherservices" || type === "other_service" || !isReceiptOrDeposit && desc.includes("other service")) return `/sales/bookings/other-services/${targetId}`;
		return null;
	}
	var div = root_30();
	head("18x0txc", ($$anchor) => {
		effect(() => {
			$document.title = "Customer & Agent Ledger Explorer — Accounts Portal";
		});
	});
	var div_1 = child(div);
	var node = sibling(child(div_1), 4);
	var consequent = ($$anchor) => {
		var div_2 = root();
		var div_3 = child(div_2);
		var p = child(div_3);
		var text = sibling(child(p));
		reset(p);
		var p_1 = sibling(p, 2);
		var text_1 = sibling(child(p_1));
		reset(p_1);
		var p_2 = sibling(p_1, 2);
		var text_2 = sibling(child(p_2));
		reset(p_2);
		reset(div_3);
		var div_4 = sibling(div_3, 2);
		var p_3 = child(div_4);
		var text_3 = sibling(child(p_3));
		reset(p_3);
		var p_4 = sibling(p_3, 2);
		var text_4 = sibling(child(p_4));
		reset(p_4);
		var p_5 = sibling(p_4, 2);
		var text_5 = sibling(child(p_5));
		reset(p_5);
		reset(div_4);
		reset(div_2);
		template_effect(($0) => {
			set_text(text, ` ${get(selectedAccount).firstName ?? ""} ${get(selectedAccount).lastName ?? ""}`);
			set_text(text_1, ` ${get(selectedAccount).type === "agent" ? "Agent Account" : "Customer Head"}`);
			set_text(text_2, ` ${(get(selectedAccount).email || get(selectedAccount).mobileNo || "N/A") ?? ""}`);
			set_text(text_3, ` ${$0 ?? ""}`);
			set_text(text_4, ` ${(get(startDate) || "Start") ?? ""} to ${(get(endDate) || "Present") ?? ""}`);
			set_text(text_5, ` BHD ${get(selectedAccount).wallet ?? get(selectedAccount).balance ?? 0 ?? ""}`);
		}, [() => (/* @__PURE__ */ new Date()).toLocaleDateString()]);
		append($$anchor, div_2);
	};
	if_block(node, ($$render) => {
		if (get(selectedAccount)) $$render(consequent);
	});
	reset(div_1);
	var div_5 = sibling(div_1, 2);
	var div_6 = child(div_5);
	var h1 = child(div_6);
	File_text(child(h1), { class: "h-5.5 w-5.5 text-primary shrink-0" });
	next(2);
	reset(h1);
	next(2);
	reset(div_6);
	var div_7 = sibling(div_6, 2);
	var node_2 = child(div_7);
	var consequent_1 = ($$anchor) => {
		var fragment = root_3();
		var node_3 = first_child(fragment);
		Button(node_3, {
			variant: "default",
			class: "h-8.5 px-3 rounded-xl cursor-pointer flex items-center gap-1.5 text-xs font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-xs whitespace-nowrap shrink-0",
			onclick: () => window.open(`/sales/receipts/new-client?clientType=${get(selectedAccount).type || "customer"}&headId=${get(selectedAccount).id}&agentId=${get(selectedAccount).id}&salesmanId=${get(selectedAccount).salesmanId || ""}`, "_blank"),
			title: "Record receipt and credit wallet for this client (opens in new tab)",
			children: ($$anchor, $$slotProps) => {
				var fragment_1 = root_1();
				Wallet(first_child(fragment_1), { class: "h-3.5 w-3.5" });
				next(2);
				append($$anchor, fragment_1);
			},
			$$slots: { default: true }
		});
		Button(sibling(node_3, 2), {
			variant: "outline",
			class: "h-8.5 px-3 rounded-xl cursor-pointer flex items-center gap-1.5 text-xs font-semibold hover:bg-muted whitespace-nowrap shrink-0",
			onclick: () => window.open("/sales/receipts/new", "_blank"),
			title: "Record general money receipt into cash drawer or bank (opens in new tab)",
			children: ($$anchor, $$slotProps) => {
				var fragment_2 = root_2();
				Receipt(first_child(fragment_2), { class: "h-3.5 w-3.5 text-muted-foreground" });
				next(2);
				append($$anchor, fragment_2);
			},
			$$slots: { default: true }
		});
		append($$anchor, fragment);
	};
	if_block(node_2, ($$render) => {
		if (get(selectedAccount)) $$render(consequent_1);
	});
	var node_7 = sibling(node_2, 2);
	{
		let $0 = user_derived(() => !get(selectedAccount) || get(ledgerEntries).length === 0);
		Button(node_7, {
			variant: "outline",
			class: "h-8.5 px-3 rounded-xl cursor-pointer flex items-center gap-1.5 text-xs font-semibold hover:bg-muted whitespace-nowrap shrink-0",
			onclick: exportToCSV$1,
			get disabled() {
				return get($0);
			},
			children: ($$anchor, $$slotProps) => {
				var fragment_3 = root_4();
				Download(first_child(fragment_3), { class: "h-3.5 w-3.5" });
				next(2);
				append($$anchor, fragment_3);
			},
			$$slots: { default: true }
		});
	}
	var node_9 = sibling(node_7, 2);
	{
		let $0 = user_derived(() => !get(selectedAccount));
		Button(node_9, {
			variant: "outline",
			class: "h-8.5 px-3 rounded-xl cursor-pointer flex items-center gap-1.5 text-xs font-semibold hover:bg-muted whitespace-nowrap shrink-0",
			onclick: handlePrint,
			get disabled() {
				return get($0);
			},
			children: ($$anchor, $$slotProps) => {
				var fragment_4 = root_5();
				Printer(first_child(fragment_4), { class: "h-3.5 w-3.5" });
				next(2);
				append($$anchor, fragment_4);
			},
			$$slots: { default: true }
		});
	}
	var node_11 = sibling(node_9, 2);
	{
		let $0 = user_derived(() => !get(selectedAccount));
		Button(node_11, {
			variant: "outline",
			class: "h-8.5 px-3 rounded-xl cursor-pointer flex items-center gap-1.5 text-xs font-semibold hover:bg-muted whitespace-nowrap shrink-0",
			onclick: () => get(selectedAccount) && fetchLedgerForAccount(get(selectedAccount)),
			get disabled() {
				return get($0);
			},
			children: ($$anchor, $$slotProps) => {
				var fragment_5 = root_6();
				Refresh_cw(first_child(fragment_5), { class: "h-3.5 w-3.5" });
				next(2);
				append($$anchor, fragment_5);
			},
			$$slots: { default: true }
		});
	}
	reset(div_7);
	reset(div_5);
	var div_8 = sibling(div_5, 2);
	var div_9 = child(div_8);
	var div_10 = child(div_9);
	var div_11 = sibling(child(div_10), 2);
	var button = child(div_11);
	var button_1 = sibling(button, 2);
	User(child(button_1), { class: "h-3 w-3" });
	next(2);
	reset(button_1);
	var button_2 = sibling(button_1, 2);
	User_check(child(button_2), { class: "h-3 w-3 text-amber-500" });
	next(2);
	reset(button_2);
	reset(div_11);
	reset(div_10);
	var div_12 = sibling(div_10, 2);
	var div_13 = sibling(child(div_12), 2);
	var button_3 = child(div_13);
	var node_15 = child(button_3);
	var consequent_2 = ($$anchor) => {
		var div_14 = root_7();
		var span = child(div_14);
		var text_6 = child(span, true);
		reset(span);
		var span_1 = sibling(span, 2);
		var text_7 = child(span_1);
		reset(span_1);
		var span_2 = sibling(span_1, 2);
		var text_8 = child(span_2);
		reset(span_2);
		reset(div_14);
		template_effect(() => {
			set_class(span, 1, `px-1.5 py-0.5 text-[9px] font-bold uppercase rounded ${get(selectedAccount).type === "agent" ? "bg-amber-500/10 text-amber-600 border border-amber-500/20" : "bg-blue-500/10 text-blue-600 border border-blue-500/20"}`);
			set_text(text_6, get(selectedAccount).type === "agent" ? "AGENT" : "CUSTOMER");
			set_text(text_7, `${get(selectedAccount).firstName ?? ""} ${get(selectedAccount).lastName ?? ""}`);
			set_text(text_8, `(${(get(selectedAccount).email || get(selectedAccount).mobileNo || "No contact") ?? ""})`);
		});
		append($$anchor, div_14);
	};
	var alternate = ($$anchor) => {
		append($$anchor, root_8());
	};
	if_block(node_15, ($$render) => {
		if (get(selectedAccount)) $$render(consequent_2);
		else $$render(alternate, -1);
	});
	Chevron_down(sibling(node_15, 2), { class: "h-4 w-4 text-muted-foreground shrink-0" });
	reset(button_3);
	var node_17 = sibling(button_3, 2);
	var consequent_6 = ($$anchor) => {
		var fragment_6 = root_13();
		var button_4 = first_child(fragment_6);
		var div_15 = sibling(button_4, 2);
		var div_16 = child(div_15);
		var node_18 = child(div_16);
		Search(node_18, { class: "absolute left-5 top-4.5 h-3.5 w-3.5 text-muted-foreground" });
		var input = sibling(node_18, 2);
		remove_input_defaults(input);
		var node_19 = sibling(input, 2);
		var consequent_3 = ($$anchor) => {
			var button_5 = root_9();
			X(child(button_5), { class: "h-3.5 w-3.5" });
			reset(button_5);
			delegated("click", button_5, () => set(dropdownSearch, ""));
			append($$anchor, button_5);
		};
		if_block(node_19, ($$render) => {
			if (get(dropdownSearch)) $$render(consequent_3);
		});
		reset(div_16);
		var div_17 = sibling(div_16, 2);
		var node_21 = child(div_17);
		var consequent_5 = ($$anchor) => {
			var fragment_7 = comment();
			each(first_child(fragment_7), 17, () => get(filteredAccounts)(), index, ($$anchor, item) => {
				var button_6 = root_11();
				var div_18 = child(button_6);
				var div_19 = child(div_18);
				var text_9 = child(div_19, true);
				reset(div_19);
				var div_20 = sibling(div_19, 2);
				var div_21 = child(div_20);
				var span_4 = child(div_21);
				var text_10 = child(span_4);
				reset(span_4);
				var span_5 = sibling(span_4, 2);
				var text_11 = child(span_5, true);
				reset(span_5);
				var node_23 = sibling(span_5, 2);
				var consequent_4 = ($$anchor) => {
					var span_6 = root_10();
					var text_12 = child(span_6, true);
					reset(span_6);
					template_effect(() => set_text(text_12, get(item).salesmanName));
					append($$anchor, span_6);
				};
				if_block(node_23, ($$render) => {
					if (get(item).salesmanName) $$render(consequent_4);
				});
				reset(div_21);
				var p_6 = sibling(div_21, 2);
				var text_13 = child(p_6, true);
				reset(p_6);
				reset(div_20);
				reset(div_18);
				var div_22 = sibling(div_18, 2);
				var span_7 = sibling(child(div_22), 2);
				var text_14 = child(span_7);
				reset(span_7);
				reset(div_22);
				reset(button_6);
				template_effect(($0, $1) => {
					set_class(button_6, 1, $0);
					set_class(div_19, 1, `w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-bold ${get(item).type === "agent" ? "bg-amber-500/10 text-amber-600" : "bg-blue-500/10 text-blue-600"}`);
					set_text(text_9, $1);
					set_text(text_10, `${get(item).firstName ?? ""} ${get(item).lastName ?? ""}`);
					set_class(span_5, 1, `px-1.5 py-0.2 text-[8px] font-bold uppercase rounded ${get(item).type === "agent" ? "bg-amber-500/10 text-amber-600" : "bg-blue-500/10 text-blue-600"}`);
					set_text(text_11, get(item).type === "agent" ? "AGENT" : "CUSTOMER");
					set_text(text_13, get(item).email || get(item).mobileNo || "No contact");
					set_text(text_14, `BHD ${get(item).wallet ?? get(item).balance ?? 0 ?? ""}`);
				}, [() => `w-full text-left p-2.5 rounded-xl hover:bg-muted/60 transition-colors flex items-center justify-between gap-3 cursor-pointer ${get(selectedAccount) && getAccountKey(get(item)) === getAccountKey(get(selectedAccount)) ? "bg-primary/10 text-primary font-semibold" : "text-foreground"}`, () => getInitials(get(item).firstName, get(item).lastName)]);
				delegated("click", button_6, () => selectAccount(get(item)));
				append($$anchor, button_6);
			});
			append($$anchor, fragment_7);
		};
		var d = user_derived(() => get(filteredAccounts)().length > 0);
		var alternate_1 = ($$anchor) => {
			append($$anchor, root_12());
		};
		if_block(node_21, ($$render) => {
			if (get(d)) $$render(consequent_5);
			else $$render(alternate_1, -1);
		});
		reset(div_17);
		reset(div_15);
		delegated("click", button_4, () => set(isDropdownOpen, false));
		bind_value(input, () => get(dropdownSearch), ($$value) => set(dropdownSearch, $$value));
		append($$anchor, fragment_6);
	};
	if_block(node_17, ($$render) => {
		if (get(isDropdownOpen)) $$render(consequent_6);
	});
	reset(div_13);
	reset(div_12);
	reset(div_9);
	var div_24 = sibling(div_9, 2);
	var div_25 = child(div_24);
	var div_26 = child(div_25);
	var input_1 = sibling(child(div_26), 2);
	remove_input_defaults(input_1);
	reset(div_26);
	var div_27 = sibling(div_26, 2);
	var input_2 = sibling(child(div_27), 2);
	remove_input_defaults(input_2);
	reset(div_27);
	reset(div_25);
	var div_28 = sibling(div_25, 2);
	var div_29 = sibling(child(div_28), 2);
	var button_7 = child(div_29);
	var button_8 = sibling(button_7, 2);
	var button_9 = sibling(button_8, 2);
	var button_10 = sibling(button_9, 2);
	reset(div_29);
	reset(div_28);
	reset(div_24);
	reset(div_8);
	var node_24 = sibling(div_8, 2);
	var consequent_17 = ($$anchor) => {
		var fragment_8 = comment();
		var node_25 = first_child(fragment_8);
		var consequent_7 = ($$anchor) => {
			var div_30 = root_14();
			Refresh_cw(child(div_30), { class: "h-8 w-8 text-primary animate-spin mb-3" });
			next(2);
			reset(div_30);
			append($$anchor, div_30);
		};
		var alternate_8 = ($$anchor) => {
			var fragment_9 = root_28();
			var div_31 = first_child(fragment_9);
			var div_32 = child(div_31);
			var div_33 = child(div_32);
			var text_15 = child(div_33, true);
			reset(div_33);
			var div_34 = sibling(div_33, 2);
			var div_35 = child(div_34);
			var h2 = child(div_35);
			var text_16 = child(h2);
			reset(h2);
			var span_8 = sibling(h2, 2);
			var text_17 = child(span_8, true);
			reset(span_8);
			var node_27 = sibling(span_8, 2);
			var consequent_8 = ($$anchor) => {
				var span_9 = root_15();
				var text_18 = child(span_9);
				reset(span_9);
				template_effect(() => set_text(text_18, `Salesman: ${get(selectedAccount).salesmanName ?? ""}`));
				append($$anchor, span_9);
			};
			if_block(node_27, ($$render) => {
				if (get(selectedAccount).salesmanName) $$render(consequent_8);
			});
			reset(div_35);
			var p_7 = sibling(div_35, 2);
			var text_19 = child(p_7);
			var node_28 = sibling(text_19);
			var consequent_9 = ($$anchor) => {
				var fragment_10 = root_16();
				var span_10 = sibling(first_child(fragment_10));
				var text_20 = child(span_10);
				reset(span_10);
				template_effect(() => set_text(text_20, `Salesman: ${get(selectedAccount).salesmanName ?? ""}`));
				append($$anchor, fragment_10);
			};
			if_block(node_28, ($$render) => {
				if (get(selectedAccount).salesmanName) $$render(consequent_9);
			});
			reset(p_7);
			reset(div_34);
			reset(div_32);
			reset(div_31);
			var div_36 = sibling(div_31, 2);
			var div_37 = child(div_36);
			var div_38 = child(div_37);
			Receipt(child(div_38), { class: "h-5 w-5" });
			reset(div_38);
			var div_39 = sibling(div_38, 2);
			var h3 = sibling(child(div_39), 2);
			var text_21 = child(h3);
			reset(h3);
			next(2);
			reset(div_39);
			reset(div_37);
			var div_40 = sibling(div_37, 2);
			var div_41 = child(div_40);
			Wallet(child(div_41), { class: "h-5 w-5" });
			reset(div_41);
			var div_42 = sibling(div_41, 2);
			var h3_1 = sibling(child(div_42), 2);
			var text_22 = child(h3_1);
			reset(h3_1);
			next(2);
			reset(div_42);
			reset(div_40);
			var div_43 = sibling(div_40, 2);
			var div_44 = child(div_43);
			Arrow_up_right(child(div_44), { class: "h-5 w-5" });
			reset(div_44);
			var div_45 = sibling(div_44, 2);
			var h3_2 = sibling(child(div_45), 2);
			var text_23 = child(h3_2);
			reset(h3_2);
			next(2);
			reset(div_45);
			reset(div_43);
			var div_46 = sibling(div_43, 2);
			var div_47 = child(div_46);
			Wallet(child(div_47), { class: "h-5 w-5" });
			reset(div_47);
			var div_48 = sibling(div_47, 2);
			var h3_3 = sibling(child(div_48), 2);
			var text_24 = child(h3_3);
			reset(h3_3);
			var p_8 = sibling(h3_3, 2);
			var text_25 = child(p_8, true);
			reset(p_8);
			reset(div_48);
			reset(div_46);
			reset(div_36);
			var div_49 = sibling(div_36, 2);
			var div_50 = child(div_49);
			var node_33 = child(div_50);
			Search(node_33, { class: "absolute left-3.5 top-2.5 h-3.5 w-3.5 text-muted-foreground" });
			var input_3 = sibling(node_33, 2);
			remove_input_defaults(input_3);
			var node_34 = sibling(input_3, 2);
			var consequent_10 = ($$anchor) => {
				var button_11 = root_17();
				X(child(button_11), { class: "h-3.5 w-3.5" });
				reset(button_11);
				delegated("click", button_11, () => set(searchFilter, ""));
				append($$anchor, button_11);
			};
			if_block(node_34, ($$render) => {
				if (get(searchFilter)) $$render(consequent_10);
			});
			reset(div_50);
			var span_11 = sibling(div_50, 2);
			var text_26 = child(span_11);
			reset(span_11);
			reset(div_49);
			var node_36 = sibling(div_49, 2);
			var consequent_16 = ($$anchor) => {
				var div_51 = root_26();
				var div_52 = child(div_51);
				var table = child(div_52);
				var tbody = sibling(child(table));
				var tr = child(tbody);
				var td = child(tr);
				var text_27 = child(td, true);
				reset(td);
				var td_1 = sibling(td, 5);
				var text_28 = child(td_1, true);
				reset(td_1);
				next();
				reset(tr);
				var node_37 = sibling(tr);
				each(node_37, 17, () => get(filteredLedgerEntries)(), index, ($$anchor, row) => {
					const detailUrl = user_derived(() => getBookingDetailUrl(get(row)));
					var tr_1 = root_25();
					var td_2 = child(tr_1);
					DateDisplay(child(td_2), { get value() {
						return get(row).createdAt;
					} });
					reset(td_2);
					var td_3 = sibling(td_2);
					var span_12 = child(td_3);
					var text_29 = child(span_12, true);
					reset(span_12);
					reset(td_3);
					var td_4 = sibling(td_3);
					var node_39 = child(td_4);
					var consequent_11 = ($$anchor) => {
						var a_1 = root_18();
						var span_13 = child(a_1);
						var text_30 = child(span_13, true);
						reset(span_13);
						External_link(sibling(span_13, 2), { class: "h-3 w-3 text-muted-foreground group-hover:text-primary transition-colors shrink-0 print:hidden" });
						reset(a_1);
						template_effect(() => {
							set_attribute(a_1, "href", get(detailUrl));
							set_text(text_30, get(row).description);
						});
						append($$anchor, a_1);
					};
					var alternate_2 = ($$anchor) => {
						var span_14 = root_19();
						var text_31 = child(span_14, true);
						reset(span_14);
						template_effect(() => set_text(text_31, get(row).description));
						append($$anchor, span_14);
					};
					if_block(node_39, ($$render) => {
						if (get(detailUrl)) $$render(consequent_11);
						else $$render(alternate_2, -1);
					});
					reset(td_4);
					var td_5 = sibling(td_4);
					var node_41 = child(td_5);
					var consequent_12 = ($$anchor) => {
						var span_15 = root_20();
						var text_32 = child(span_15, true);
						reset(span_15);
						template_effect(() => set_text(text_32, get(row).paymentMethod));
						append($$anchor, span_15);
					};
					var alternate_3 = ($$anchor) => {
						append($$anchor, root_21());
					};
					if_block(node_41, ($$render) => {
						if (get(row).paymentMethod) $$render(consequent_12);
						else $$render(alternate_3, -1);
					});
					reset(td_5);
					var td_6 = sibling(td_5);
					var node_42 = child(td_6);
					var consequent_13 = ($$anchor) => {
						MoneyDisplay($$anchor, { get amount() {
							return get(row).debit;
						} });
					};
					var alternate_4 = ($$anchor) => {
						append($$anchor, root_22());
					};
					if_block(node_42, ($$render) => {
						if (get(row).debit > 0) $$render(consequent_13);
						else $$render(alternate_4, -1);
					});
					reset(td_6);
					var td_7 = sibling(td_6);
					var node_43 = child(td_7);
					var consequent_14 = ($$anchor) => {
						MoneyDisplay($$anchor, { get amount() {
							return get(row).credit;
						} });
					};
					var alternate_5 = ($$anchor) => {
						append($$anchor, root_22());
					};
					if_block(node_43, ($$render) => {
						if (get(row).credit > 0) $$render(consequent_14);
						else $$render(alternate_5, -1);
					});
					reset(td_7);
					var td_8 = sibling(td_7);
					var text_33 = child(td_8, true);
					reset(td_8);
					var td_9 = sibling(td_8);
					var node_44 = child(td_9);
					var consequent_15 = ($$anchor) => {
						var a_2 = root_23();
						External_link(sibling(child(a_2), 2), { class: "h-3 w-3" });
						reset(a_2);
						template_effect(() => set_attribute(a_2, "href", get(detailUrl)));
						append($$anchor, a_2);
					};
					var alternate_6 = ($$anchor) => {
						append($$anchor, root_24());
					};
					if_block(node_44, ($$render) => {
						if (get(detailUrl)) $$render(consequent_15);
						else $$render(alternate_6, -1);
					});
					reset(td_9);
					reset(tr_1);
					template_effect(($0) => {
						set_text(text_29, get(row).type);
						set_class(td_8, 1, `p-4 text-right font-mono font-bold ${get(row).runningBalance > 0 ? "text-emerald-600" : get(row).runningBalance < 0 ? "text-red-600" : "text-foreground"}`);
						set_text(text_33, $0);
					}, [() => get(row).runningBalance > 0 ? `+${Number(get(row).runningBalance).toFixed(3)}` : Number(get(row).runningBalance).toFixed(3)]);
					append($$anchor, tr_1);
				});
				var tr_2 = sibling(node_37);
				var td_10 = sibling(child(tr_2));
				var text_34 = child(td_10);
				reset(td_10);
				var td_11 = sibling(td_10, 2);
				var text_35 = child(td_11, true);
				reset(td_11);
				var td_12 = sibling(td_11);
				var text_36 = child(td_12);
				reset(td_12);
				var td_13 = sibling(td_12);
				var text_37 = child(td_13, true);
				reset(td_13);
				next();
				reset(tr_2);
				reset(tbody);
				reset(table);
				reset(div_52);
				reset(div_51);
				template_effect(($0, $1, $2, $3, $4, $5) => {
					set_text(text_27, $0);
					set_class(td_1, 1, `p-4 text-right font-mono font-bold ${get(openingBalance) > 0 ? "text-emerald-600" : get(openingBalance) < 0 ? "text-red-600" : "text-foreground"}`);
					set_text(text_28, $1);
					set_text(text_34, `${get(ledgerEntries).length ?? ""} Entries`);
					set_text(text_35, $2);
					set_text(text_36, `+${$3 ?? ""}`);
					set_class(td_13, 1, $4);
					set_text(text_37, $5);
				}, [
					() => get(startDate) ? formatDateOnly(get(startDate)) : "-",
					() => get(openingBalance) > 0 ? `+${get(openingBalance).toFixed(3)}` : get(openingBalance).toFixed(3),
					() => get(totalDebits)().toFixed(3),
					() => get(totalCredits)().toFixed(3),
					() => `p-4 text-right font-mono font-bold ${get(closingBalance)() > 0 ? "text-emerald-600" : get(closingBalance)() < 0 ? "text-red-600" : "text-foreground"}`,
					() => get(closingBalance)() > 0 ? `+${get(closingBalance)().toFixed(3)}` : get(closingBalance)().toFixed(3)
				]);
				append($$anchor, div_51);
			};
			var d_1 = user_derived(() => get(filteredLedgerEntries)().length > 0 || get(openingBalance) !== 0);
			var alternate_7 = ($$anchor) => {
				append($$anchor, root_27());
			};
			if_block(node_36, ($$render) => {
				if (get(d_1)) $$render(consequent_16);
				else $$render(alternate_7, -1);
			});
			template_effect(($0, $1, $2, $3, $4, $5, $6, $7, $8) => {
				set_class(div_33, 1, `w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-base shadow-xs ${get(selectedAccount).type === "agent" ? "bg-amber-500/10 text-amber-600 border border-amber-500/20" : "bg-primary/10 text-primary border border-primary/20"}`);
				set_text(text_15, $0);
				set_text(text_16, `${get(selectedAccount).firstName ?? ""} ${get(selectedAccount).lastName ?? ""}`);
				set_class(span_8, 1, `px-2.5 py-0.5 text-[10px] font-bold uppercase rounded-md ${get(selectedAccount).type === "agent" ? "bg-amber-500/10 text-amber-600 border border-amber-500/20" : "bg-blue-500/10 text-blue-600 border border-blue-500/20"}`);
				set_text(text_17, get(selectedAccount).type === "agent" ? "Agent Account" : "Customer Head");
				set_text(text_19, `Email: ${(get(selectedAccount).email || "N/A") ?? ""} • Phone: ${(get(selectedAccount).mobileNo || "N/A") ?? ""} • Nationality: ${(get(selectedAccount).nationality || "Bahraini") ?? ""} `);
				set_text(text_21, `${$1 ?? ""} BHD`);
				set_text(text_22, `+${$2 ?? ""} BHD`);
				set_text(text_23, `${$3 ?? ""} BHD`);
				set_class(div_47, 1, $4);
				set_class(h3_3, 1, $5);
				set_text(text_24, `${$6 ?? ""} BHD`);
				set_text(text_25, $7);
				set_text(text_26, `Showing ${$8 ?? ""} of ${get(ledgerEntries).length ?? ""} statement entries`);
			}, [
				() => getInitials(get(selectedAccount).firstName, get(selectedAccount).lastName),
				() => get(openingBalance) > 0 ? `+${get(openingBalance).toFixed(3)}` : get(openingBalance) < 0 ? get(openingBalance).toFixed(3) : "0.000",
				() => get(totalCredits)().toFixed(3),
				() => get(totalDebits)().toFixed(3),
				() => `p-2.5 rounded-xl ${get(closingBalance)() >= 0 ? "bg-emerald-500/10 text-emerald-600" : "bg-red-500/10 text-red-600"}`,
				() => `text-base font-bold font-mono ${get(closingBalance)() >= 0 ? "text-emerald-600" : "text-red-600"}`,
				() => get(closingBalance)() > 0 ? `+${get(closingBalance)().toFixed(3)}` : get(closingBalance)() < 0 ? get(closingBalance)().toFixed(3) : "0.000",
				() => get(closingBalance)() > 0 ? "Prepaid funds held" : get(closingBalance)() < 0 ? "Outstanding balance owed to Texas" : "Settled",
				() => get(filteredLedgerEntries)().length
			]);
			bind_value(input_3, () => get(searchFilter), ($$value) => set(searchFilter, $$value));
			append($$anchor, fragment_9);
		};
		if_block(node_25, ($$render) => {
			if (get(loading)) $$render(consequent_7);
			else $$render(alternate_8, -1);
		});
		append($$anchor, fragment_8);
	};
	var alternate_9 = ($$anchor) => {
		var div_54 = root_29();
		var div_55 = child(div_54);
		Sparkles(child(div_55), { class: "h-8 w-8" });
		reset(div_55);
		next(2);
		reset(div_54);
		append($$anchor, div_54);
	};
	if_block(node_24, ($$render) => {
		if (get(selectedAccount)) $$render(consequent_17);
		else $$render(alternate_9, -1);
	});
	next(2);
	reset(div);
	template_effect(() => {
		set_class(button, 1, `flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${get(selectedCategory) === "all" ? "bg-background text-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"}`);
		set_class(button_1, 1, `flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1 ${get(selectedCategory) === "customer" ? "bg-background text-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"}`);
		set_class(button_2, 1, `flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1 ${get(selectedCategory) === "agent" ? "bg-background text-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"}`);
	});
	delegated("click", button, () => setCategoryFilter("all"));
	delegated("click", button_1, () => setCategoryFilter("customer"));
	delegated("click", button_2, () => setCategoryFilter("agent"));
	delegated("click", button_3, () => set(isDropdownOpen, !get(isDropdownOpen)));
	delegated("change", input_1, () => get(selectedAccount) && fetchLedgerForAccount(get(selectedAccount)));
	bind_value(input_1, () => get(startDate), ($$value) => set(startDate, $$value));
	delegated("change", input_2, () => get(selectedAccount) && fetchLedgerForAccount(get(selectedAccount)));
	bind_value(input_2, () => get(endDate), ($$value) => set(endDate, $$value));
	delegated("click", button_7, () => applyDatePreset("all"));
	delegated("click", button_8, () => applyDatePreset("month"));
	delegated("click", button_9, () => applyDatePreset("30days"));
	delegated("click", button_10, () => applyDatePreset("year"));
	append($$anchor, div);
	pop();
	$$cleanup();
}
delegate(["click", "change"]);
//#endregion
export { _page as component };

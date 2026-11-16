import { B as append, Bt as reset, C as set_style, Ct as user_derived, D as head, H as from_html, I as if_block, K as delegate, N as each, Nt as pop, P as index, Pt as push, Q as get, R as set_text, T as clsx, V as comment, Vt as noop, b as bind_select_value, bt as state, dt as $document, g as remove_input_defaults, gt as proxy, ht as sibling, it as effect, m as bind_value, mt as first_child, ot as template_effect, pt as child, q as delegated, r as onMount, vt as set, w as set_class, zt as next } from "../chunks/dXkmWTgM.js";
import "../chunks/DhaYE-8x.js";
import { t as apiFetch } from "../chunks/sTyO2BqP.js";
import { r as toast } from "../chunks/CbPRQHfn.js";
import { t as Book_open } from "../chunks/E5UrMlE0.js";
import { t as Chevron_down } from "../chunks/Dj1p1QvC.js";
import { t as Chevron_right } from "../chunks/BQLzQDdY2.js";
import { t as File_down } from "../chunks/btBW28nf2.js";
import { t as File_spreadsheet } from "../chunks/B4BvDHOF2.js";
import { t as Refresh_cw } from "../chunks/DpTJy0Wb.js";
import { t as Shield_alert } from "../chunks/BqY57apW.js";
import { t as Shield_check } from "../chunks/Ctn9-c3Y.js";
import { t as Trending_up } from "../chunks/dBTjeHCK.js";
import { i as formatDateOnly, s as getBahrainPresetRanges } from "../chunks/Cu8_Vl4p.js";
import { t as Button } from "../chunks/BhXsq3bC.js";
import { t as MoneyDisplay } from "../chunks/CIVSRuaR2.js";
import { t as DateDisplay } from "../chunks/DEr_pDJT2.js";
import "../chunks/CS-Kx6i02.js";
import { t as exportToCSV } from "../chunks/C74Z4VDd2.js";
import { t as previewDocument } from "../chunks/PSxDxWhI2.js";
//#region src/routes/(app)/accounting/ledger/+page.svelte
var root_1 = from_html(`<button class="p-0.5 hover:bg-muted rounded text-muted-foreground cursor-pointer"><!></button>`);
var root_2 = from_html(`<div class="w-4.5"></div>`);
var root_3 = from_html(`<div class="space-y-1 border-l border-border/30 ml-2.5"></div>`);
var root_4 = from_html(`<div class="space-y-1"><div class="flex items-center justify-between hover:bg-muted/10 p-1.5 rounded-lg transition-colors"><div class="flex items-center gap-1.5"><!> <span class="font-mono text-muted-foreground text-[10px] bg-muted px-1.5 py-0.2 rounded border border-border/40 font-bold"> </span> <span> </span></div> <span class="font-mono font-bold text-foreground"><!></span></div> <!></div>`);
var root_5 = from_html(`<div class="bg-card border border-border rounded-2xl h-48 flex items-center justify-center"><!></div>`);
var root_6 = from_html(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"><div class="bg-card border border-border rounded-2xl p-5 shadow-xs space-y-1"><span class="text-xs font-bold text-muted-foreground uppercase tracking-wider block">Agent Outstanding Balance</span> <span class="text-xl font-bold font-mono text-foreground"><!></span></div> <div class="bg-card border border-border rounded-2xl p-5 shadow-xs space-y-1"><span class="text-xs font-bold text-muted-foreground uppercase tracking-wider block">Supplier Outstanding Balance</span> <span class="text-xl font-bold font-mono text-foreground"><!></span></div></div> <div class="bg-card border border-border rounded-2xl p-6 shadow-xs space-y-4"><h2 class="text-sm font-bold text-foreground flex items-center gap-1.5"><!> Active Workflow Pending Tasks</h2> <p class="text-xs text-muted-foreground">List of draft or pending approval transactions awaiting accountant review before ledger posting.</p> <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs pt-2"><div class="bg-muted/30 rounded-xl p-4 space-y-1 text-center border border-border/30"><span class="text-[10px] text-muted-foreground uppercase font-semibold">Pending Payouts</span> <span class="text-lg font-bold block text-rose-600"> </span></div> <div class="bg-muted/30 rounded-xl p-4 space-y-1 text-center border border-border/30"><span class="text-[10px] text-muted-foreground uppercase font-semibold">Pending Purchase Returns</span> <span class="text-lg font-bold block text-emerald-600"> </span></div> <div class="bg-muted/30 rounded-xl p-4 space-y-1 text-center border border-border/30"><span class="text-[10px] text-muted-foreground uppercase font-semibold">Pending Sales Returns</span> <span class="text-lg font-bold block text-sky-600"> </span></div> <div class="bg-muted/30 rounded-xl p-4 space-y-1 text-center border border-border/30"><span class="text-[10px] text-muted-foreground uppercase font-semibold">Pending Expense Claims</span> <span class="text-lg font-bold block text-amber-600"> </span></div> <div class="bg-muted/30 rounded-xl p-4 space-y-1 text-center border border-border/30"><span class="text-[10px] text-muted-foreground uppercase font-semibold">Draft Journal Entries</span> <span class="text-lg font-bold block text-slate-600"> </span></div></div></div>`, 1);
var root_7 = from_html(`<option> </option>`);
var root_8 = from_html(`<!> Query Ledger`, 1);
var root_9 = from_html(`<!> CSV`, 1);
var root_10 = from_html(`<!> PDF`, 1);
var root_11 = from_html(`<!> <!>`, 1);
var root_12 = from_html(`<div class="h-40 flex items-center justify-center"><!></div>`);
var root_13 = from_html(`<div class="p-8 text-center text-muted-foreground text-xs bg-muted/5 border border-border rounded-xl">No transactions posted in this period.</div>`);
var root_14 = from_html(`<span class="text-muted-foreground/20">—</span>`);
var root_15 = from_html(`<tr class="hover:bg-muted/10 transition-colors"><td class="p-4 text-muted-foreground"><!></td><td class="p-4 font-semibold text-foreground"> </td><td class="p-4 text-right font-bold text-emerald-600"><!></td><td class="p-4 text-right font-bold text-rose-600"><!></td><td class="p-4 text-right font-mono font-bold text-foreground"><!></td><td class="p-4 font-mono text-[10px] text-muted-foreground"> </td></tr>`);
var root_16 = from_html(`<div class="bg-card border border-border rounded-2xl overflow-x-auto shadow-xs max-w-full"><table class="w-full min-w-[750px] text-left border-collapse text-xs"><thead><tr class="bg-muted/30 border-b border-border text-muted-foreground font-semibold"><th class="p-4 w-28">Date</th><th class="p-4">Description</th><th class="p-4 w-28 text-right">Debit</th><th class="p-4 w-28 text-right">Credit</th><th class="p-4 w-28 text-right">Running Balance</th><th class="p-4 w-32">Source Ref</th></tr></thead><tbody class="divide-y divide-border/50"></tbody></table></div>`);
var root_17 = from_html(`<div class="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-muted/15 p-4 rounded-2xl border border-border/50 text-xs"><div><span class="text-muted-foreground block font-semibold mb-0.5">Opening Balance</span> <span class="font-bold"><!></span></div> <div><span class="text-emerald-700 block font-semibold mb-0.5">Total Debits</span> <span class="font-bold text-emerald-600"><!></span></div> <div><span class="text-red-700 block font-semibold mb-0.5">Total Credits</span> <span class="font-bold text-red-600"><!></span></div> <div><span class="text-muted-foreground block font-semibold mb-0.5">Ending Balance</span> <span class="font-bold"><!></span></div></div> <!>`, 1);
var root_18 = from_html(`<div class="bg-card border border-border rounded-2xl p-5 shadow-xs space-y-4"><div class="flex flex-wrap items-end gap-3 text-xs"><div class="space-y-1.5 flex-1 min-w-48"><label for="gl-account" class="block font-semibold text-muted-foreground">Select Ledger Account</label> <select id="gl-account" class="h-9.5 w-full bg-background border border-border rounded-xl px-2.5 focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground" required=""></select></div> <div class="space-y-1.5"><label for="gl-start" class="block font-semibold text-muted-foreground">Start Date</label> <input id="gl-start" type="date" class="h-9.5 p-2 rounded-xl border border-border bg-background text-foreground"/></div> <div class="space-y-1.5"><label for="gl-end" class="block font-semibold text-muted-foreground">End Date</label> <input id="gl-end" type="date" class="h-9.5 p-2 rounded-xl border border-border bg-background text-foreground"/></div> <!> <!></div> <!></div>`);
var root_19 = from_html(`<!> Load Trial Balance`, 1);
var root_20 = from_html(`<div class="flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl p-4 text-xs font-semibold"><!> Trial Balance is balanced. All debits equal credits.</div>`);
var root_21 = from_html(`<div class="flex items-center gap-2 bg-rose-50 border border-rose-200 text-rose-800 rounded-2xl p-4 text-xs font-semibold"><!> Trial Balance is UNBALANCED. Total debits differ from credits!</div>`);
var root_22 = from_html(`<tr class="hover:bg-muted/10 transition-colors"><td class="p-4 font-mono font-bold text-foreground"> </td><td class="p-4 font-semibold text-foreground"> </td><td class="p-4 uppercase text-[10px] text-muted-foreground"> </td><td class="p-4 text-right font-mono font-bold text-emerald-600"><!></td><td class="p-4 text-right font-mono font-bold text-rose-600"><!></td></tr>`);
var root_23 = from_html(`<!> <div class="bg-card border border-border rounded-2xl overflow-x-auto shadow-xs max-w-full"><table class="w-full min-w-[750px] text-left border-collapse text-xs"><thead><tr class="bg-muted/30 border-b border-border text-muted-foreground font-semibold text-[10px] uppercase tracking-wider"><th class="p-4 w-28">Code</th><th class="p-4">Account Name</th><th class="p-4">Type</th><th class="p-4 w-32 text-right">Debit Balance</th><th class="p-4 w-32 text-right">Credit Balance</th></tr></thead><tbody class="divide-y divide-border/50"></tbody><tfoot><tr class="bg-muted/20 border-t-2 border-border font-bold"><td colspan="3" class="p-4 text-right uppercase text-[10px]">Total Ledger Sum</td><td class="p-4 text-right text-emerald-600 font-mono"><!></td><td class="p-4 text-right text-rose-600 font-mono"><!></td></tr></tfoot></table></div>`, 1);
var root_24 = from_html(`<div class="bg-card border border-border rounded-2xl p-5 shadow-xs space-y-4"><div class="flex flex-wrap items-end gap-3 text-xs"><div class="space-y-1.5"><label for="tb-asof" class="block font-semibold text-muted-foreground">As Of Date</label> <input id="tb-asof" type="date" class="h-9.5 p-2 rounded-xl border border-border bg-background text-foreground"/></div> <!> <!></div> <!></div>`);
var root_25 = from_html(`<!> Load Balance Sheet`, 1);
var root_26 = from_html(`<div class="flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl p-4 text-xs font-semibold"><!> Assets match Liabilities & Capital correctly.</div>`);
var root_27 = from_html(`<div class="flex items-center gap-2 bg-rose-50 border border-rose-200 text-rose-800 rounded-2xl p-4 text-xs font-semibold"><!> Equation out of balance: Assets differs from Liabilities + Capital!</div>`);
var root_28 = from_html(`<!> <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 text-xs"><div class="space-y-4"><div class="bg-card border border-border rounded-2xl overflow-hidden shadow-xs"><div class="px-5 py-4 border-b border-border bg-muted/20 flex justify-between items-center"><h2 class="font-bold text-foreground">Assets</h2> <span class="font-mono font-bold text-emerald-600 text-sm"><!></span></div> <div class="p-4 space-y-2"></div></div></div> <div class="space-y-4"><div class="bg-card border border-border rounded-2xl overflow-hidden shadow-xs"><div class="px-5 py-4 border-b border-border bg-muted/20 flex justify-between items-center"><h2 class="font-bold text-foreground">Liabilities</h2> <span class="font-mono font-bold text-rose-600 text-sm"><!></span></div> <div class="p-4 space-y-2"></div></div> <div class="bg-card border border-border rounded-2xl overflow-hidden shadow-xs"><div class="px-5 py-4 border-b border-border bg-muted/20 flex justify-between items-center"><h2 class="font-bold text-foreground">Equity / Capital</h2> <span class="font-mono font-bold text-primary text-sm"><!></span></div> <div class="p-4 space-y-2"></div></div></div></div>`, 1);
var root_29 = from_html(`<div class="bg-card border border-border rounded-2xl p-5 shadow-xs space-y-4"><div class="flex flex-wrap items-end gap-3 text-xs"><div class="space-y-1.5"><label for="bs-asof" class="block font-semibold text-muted-foreground">As Of Date</label> <input id="bs-asof" type="date" class="h-9.5 p-2 rounded-xl border border-border bg-background text-foreground"/></div> <!> <!></div> <!></div>`);
var root_30 = from_html(`<!> Load Profit & Loss`, 1);
var root_31 = from_html(`<p class="text-muted-foreground/60 text-center py-4">No revenues generated.</p>`);
var root_32 = from_html(`<p class="text-muted-foreground/60 text-center py-4">No expenses recorded.</p>`);
var root_33 = from_html(`<div><div class="space-y-1"><span class="text-xs font-bold text-muted-foreground uppercase tracking-wider block">Net Period Margin</span> <span><!></span></div> <div class="flex items-center gap-1.5 text-xs text-muted-foreground"><!> <span> </span></div></div> <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 text-xs"><div class="bg-card border border-border rounded-2xl overflow-hidden shadow-xs"><div class="px-5 py-4 border-b border-border bg-muted/20 flex justify-between items-center"><h2 class="font-bold text-foreground">Revenues (Income)</h2> <span class="font-mono font-bold text-emerald-600 text-sm"><!></span></div> <div class="p-4 space-y-2"><!></div></div> <div class="bg-card border border-border rounded-2xl overflow-hidden shadow-xs"><div class="px-5 py-4 border-b border-border bg-muted/20 flex justify-between items-center"><h2 class="font-bold text-foreground">Expenses</h2> <span class="font-mono font-bold text-rose-600 text-sm"><!></span></div> <div class="p-4 space-y-2"><!></div></div></div>`, 1);
var root_34 = from_html(`<div class="bg-card border border-border rounded-2xl p-5 shadow-xs space-y-4"><div class="flex flex-wrap items-end gap-3 text-xs"><div class="space-y-1.5"><label for="pl-start" class="block font-semibold text-muted-foreground">Start Date</label> <input id="pl-start" type="date" class="h-9.5 p-2 rounded-xl border border-border bg-background text-foreground"/></div> <div class="space-y-1.5"><label for="pl-end" class="block font-semibold text-muted-foreground">End Date</label> <input id="pl-end" type="date" class="h-9.5 p-2 rounded-xl border border-border bg-background text-foreground"/></div> <!> <!></div> <!></div>`);
var root_35 = from_html(`<div class="space-y-6"><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"><div class="flex flex-col gap-1"><h1 class="text-xl font-bold text-foreground flex items-center gap-2"><!> General Ledger Explorer</h1> <p class="text-xs text-muted-foreground">Comprehensive Double-Entry Ledger queries, Trial Balances, Balance Sheets, and Profit & Loss.</p></div></div> <div class="flex flex-wrap gap-1 bg-muted/40 rounded-xl p-1 w-fit border border-border/50"><button>Dashboard</button> <button>Ledger Statements</button> <button>Trial Balance</button> <button>Balance Sheet</button> <button>Profit & Loss</button></div> <!> <!> <!> <!> <!></div>`);
function _page($$anchor, $$props) {
	push($$props, true);
	const renderBSNode = ($$anchor, node = noop, depth = noop) => {
		const isCollapsed = user_derived(() => collapsedBS[node().accountId] ?? false);
		const hasChildren = user_derived(() => node().children.length > 0);
		var div = root_4();
		var div_1 = child(div);
		var div_2 = child(div_1);
		var node_1 = child(div_2);
		var consequent_1 = ($$anchor) => {
			var button = root_1();
			var node_2 = child(button);
			var consequent = ($$anchor) => {
				Chevron_right($$anchor, { class: "h-3.5 w-3.5" });
			};
			var alternate = ($$anchor) => {
				Chevron_down($$anchor, { class: "h-3.5 w-3.5" });
			};
			if_block(node_2, ($$render) => {
				if (get(isCollapsed)) $$render(consequent);
				else $$render(alternate, -1);
			});
			reset(button);
			delegated("click", button, () => collapsedBS[node().accountId] = !get(isCollapsed));
			append($$anchor, button);
		};
		var alternate_1 = ($$anchor) => {
			append($$anchor, root_2());
		};
		if_block(node_1, ($$render) => {
			if (get(hasChildren)) $$render(consequent_1);
			else $$render(alternate_1, -1);
		});
		var span = sibling(node_1, 2);
		var text = child(span, true);
		reset(span);
		var span_1 = sibling(span, 2);
		var text_1 = child(span_1, true);
		reset(span_1);
		reset(div_2);
		var span_2 = sibling(div_2, 2);
		MoneyDisplay(child(span_2), { get amount() {
			return node().balance;
		} });
		reset(span_2);
		reset(div_1);
		var node_4 = sibling(div_1, 2);
		var consequent_2 = ($$anchor) => {
			var div_4 = root_3();
			each(div_4, 21, () => node().children, index, ($$anchor, child) => {
				renderBSNode($$anchor, () => get(child), () => depth() + 1);
			});
			reset(div_4);
			append($$anchor, div_4);
		};
		if_block(node_4, ($$render) => {
			if (get(hasChildren) && !get(isCollapsed)) $$render(consequent_2);
		});
		reset(div);
		template_effect(() => {
			set_style(div, `padding-left: ${depth() * 14}px`);
			set_text(text, node().accountCode);
			set_class(span_1, 1, clsx(node().isControlAccount ? "font-bold text-foreground" : "text-muted-foreground font-medium"));
			set_text(text_1, node().accountName);
		});
		append($$anchor, div);
	};
	const renderPLNode = ($$anchor, node = noop, depth = noop) => {
		const isCollapsed = user_derived(() => collapsedPL[node().accountId] ?? false);
		const hasChildren = user_derived(() => node().children.length > 0);
		var div_5 = root_4();
		var div_6 = child(div_5);
		var div_7 = child(div_6);
		var node_5 = child(div_7);
		var consequent_4 = ($$anchor) => {
			var button_1 = root_1();
			var node_6 = child(button_1);
			var consequent_3 = ($$anchor) => {
				Chevron_right($$anchor, { class: "h-3.5 w-3.5" });
			};
			var alternate_2 = ($$anchor) => {
				Chevron_down($$anchor, { class: "h-3.5 w-3.5" });
			};
			if_block(node_6, ($$render) => {
				if (get(isCollapsed)) $$render(consequent_3);
				else $$render(alternate_2, -1);
			});
			reset(button_1);
			delegated("click", button_1, () => collapsedPL[node().accountId] = !get(isCollapsed));
			append($$anchor, button_1);
		};
		var alternate_3 = ($$anchor) => {
			append($$anchor, root_2());
		};
		if_block(node_5, ($$render) => {
			if (get(hasChildren)) $$render(consequent_4);
			else $$render(alternate_3, -1);
		});
		var span_3 = sibling(node_5, 2);
		var text_2 = child(span_3, true);
		reset(span_3);
		var span_4 = sibling(span_3, 2);
		var text_3 = child(span_4, true);
		reset(span_4);
		reset(div_7);
		var span_5 = sibling(div_7, 2);
		MoneyDisplay(child(span_5), { get amount() {
			return node().balance;
		} });
		reset(span_5);
		reset(div_6);
		var node_8 = sibling(div_6, 2);
		var consequent_5 = ($$anchor) => {
			var div_9 = root_3();
			each(div_9, 21, () => node().children, index, ($$anchor, child) => {
				renderPLNode($$anchor, () => get(child), () => depth() + 1);
			});
			reset(div_9);
			append($$anchor, div_9);
		};
		if_block(node_8, ($$render) => {
			if (get(hasChildren) && !get(isCollapsed)) $$render(consequent_5);
		});
		reset(div_5);
		template_effect(() => {
			set_style(div_5, `padding-left: ${depth() * 14}px`);
			set_text(text_2, node().accountCode);
			set_class(span_4, 1, clsx(node().isControlAccount ? "font-bold text-foreground" : "text-muted-foreground font-medium"));
			set_text(text_3, node().accountName);
		});
		append($$anchor, div_5);
	};
	let activeTab = state("dashboard");
	const { thisMonth } = getBahrainPresetRanges();
	const firstDay = thisMonth.startDate;
	const today = thisMonth.endDate;
	let accountsList = state(proxy([]));
	let dashboardData = state(null);
	let loadingDashboard = state(false);
	let statementAccountId = state("");
	let statementStart = state(proxy(firstDay));
	let statementEnd = state(proxy(today));
	let statementData = state(null);
	let loadingStatement = state(false);
	let tbAsOf = state(proxy(today));
	let trialBalanceData = state(null);
	let loadingTB = state(false);
	let bsAsOf = state(proxy(today));
	let balanceSheetData = state(null);
	let loadingBS = state(false);
	let collapsedBS = proxy({});
	let plStart = state(proxy(firstDay));
	let plEnd = state(proxy(today));
	let profitLossData = state(null);
	let loadingPL = state(false);
	let collapsedPL = proxy({});
	async function loadAccounts() {
		try {
			const res = await apiFetch("api/ChartOfAccounts");
			set(accountsList, res || [], true);
			if (get(accountsList).length > 0 && !get(statementAccountId) && get(accountsList)[0]?.id) set(statementAccountId, String(get(accountsList)[0].id), true);
		} catch (err) {
			toast.error(err.message || "Failed to load chart of accounts.");
		}
	}
	async function fetchDashboard() {
		set(loadingDashboard, true);
		try {
			set(dashboardData, await apiFetch("api/Reporting/ledger-dashboard"), true);
		} catch (err) {
			toast.error(err.message || "Failed to load ledger dashboard.");
		} finally {
			set(loadingDashboard, false);
		}
	}
	async function fetchStatement() {
		if (!get(statementAccountId)) return;
		set(loadingStatement, true);
		try {
			set(statementData, await apiFetch(`api/Reporting/ledger-statement/${get(statementAccountId)}?startDate=${get(statementStart)}&endDate=${get(statementEnd)}`), true);
		} catch (err) {
			toast.error(err.message || "Failed to fetch ledger statement.");
		} finally {
			set(loadingStatement, false);
		}
	}
	async function fetchTrialBalance() {
		set(loadingTB, true);
		try {
			set(trialBalanceData, await apiFetch(`api/Reporting/trial-balance?asOfDate=${get(tbAsOf)}`), true);
		} catch (err) {
			toast.error(err.message || "Failed to fetch trial balance.");
		} finally {
			set(loadingTB, false);
		}
	}
	async function fetchBalanceSheet() {
		set(loadingBS, true);
		try {
			set(balanceSheetData, await apiFetch(`api/Reporting/balance-sheet?asOfDate=${get(bsAsOf)}`), true);
		} catch (err) {
			toast.error(err.message || "Failed to fetch balance sheet.");
		} finally {
			set(loadingBS, false);
		}
	}
	async function fetchProfitLoss() {
		set(loadingPL, true);
		try {
			set(profitLossData, await apiFetch(`api/Reporting/profit-loss?startDate=${get(plStart)}&endDate=${get(plEnd)}`), true);
		} catch (err) {
			toast.error(err.message || "Failed to fetch profit & loss.");
		} finally {
			set(loadingPL, false);
		}
	}
	function handleTabChange(tab) {
		set(activeTab, tab, true);
		if (tab === "dashboard") fetchDashboard();
		else if (tab === "statement") fetchStatement();
		else if (tab === "trial-balance") fetchTrialBalance();
		else if (tab === "balance-sheet") fetchBalanceSheet();
		else if (tab === "profit-loss") fetchProfitLoss();
	}
	function exportCSV(title, headers, rows) {
		exportToCSV(`${title.replace(/[^a-z0-9]/gi, "_").toLowerCase()}_${today}.csv`, headers, rows);
		toast.success("CSV exported successfully.");
	}
	function exportPDF(title, subtitle, headers, rows) {
		previewDocument("report", "accounting-ledger", {
			title,
			subtitle
		});
	}
	function exportStatement(type) {
		if (!get(statementData)) return;
		const title = `Ledger Statement — ${get(statementData).accountName}`;
		const subtitle = `Account: ${get(statementData).accountCode} | Range: ${get(statementStart)} to ${get(statementEnd)}`;
		const headers = [
			"Date",
			"Description",
			"Debit",
			"Credit",
			"Running Balance",
			"Source"
		];
		let bal = get(statementData).openingBalance;
		const rows = get(statementData).items.map((item) => {
			bal += item.debit - item.credit;
			return [
				formatDateOnly(item.postingDate),
				item.description,
				item.debit > 0 ? item.debit.toFixed(3) : "0.000",
				item.credit > 0 ? item.credit.toFixed(3) : "0.000",
				bal.toFixed(3),
				`${item.sourceType} #${item.sourceId}`
			];
		});
		if (type === "csv") exportCSV(title, headers, rows);
		else exportPDF(title, subtitle, headers, rows);
	}
	function exportTrialBalance(type) {
		if (!get(trialBalanceData)) return;
		const title = `Trial Balance`;
		const subtitle = `As of Date: ${get(tbAsOf)}`;
		const headers = [
			"Code",
			"Account Name",
			"Type",
			"Debit Balance",
			"Credit Balance"
		];
		const rows = get(trialBalanceData).items.map((i) => [
			i.accountCode,
			i.accountName,
			i.accountType.toUpperCase(),
			i.totalDebit > 0 ? i.totalDebit.toFixed(3) : "0.000",
			i.totalCredit > 0 ? i.totalCredit.toFixed(3) : "0.000"
		]);
		if (type === "csv") exportCSV(title, headers, rows);
		else exportPDF(title, subtitle, headers, rows);
	}
	function exportBalanceSheet(type) {
		if (!get(balanceSheetData)) return;
		const title = `Balance Sheet`;
		const subtitle = `As of Date: ${get(bsAsOf)}`;
		const headers = [
			"Account Code",
			"Account Name",
			"Classification",
			"Balance (BHD)"
		];
		const rows = [];
		get(balanceSheetData).assets.forEach((i) => rows.push([
			i.accountCode,
			i.accountName,
			"ASSET",
			i.balance.toFixed(3)
		]));
		get(balanceSheetData).liabilities.forEach((i) => rows.push([
			i.accountCode,
			i.accountName,
			"LIABILITY",
			i.balance.toFixed(3)
		]));
		get(balanceSheetData).equity.forEach((i) => rows.push([
			i.accountCode,
			i.accountName,
			"EQUITY",
			i.balance.toFixed(3)
		]));
		if (type === "csv") exportCSV(title, headers, rows);
		else exportPDF(title, subtitle, headers, rows);
	}
	function exportProfitLoss(type) {
		if (!get(profitLossData)) return;
		const title = `Profit & Loss Statement`;
		const subtitle = `Period: ${get(plStart)} to ${get(plEnd)}`;
		const headers = [
			"Account Code",
			"Account Name",
			"Classification",
			"Balance (BHD)"
		];
		const rows = [];
		get(profitLossData).revenues.forEach((i) => rows.push([
			i.accountCode,
			i.accountName,
			"REVENUE",
			i.balance.toFixed(3)
		]));
		get(profitLossData).expenses.forEach((i) => rows.push([
			i.accountCode,
			i.accountName,
			"EXPENSE",
			i.balance.toFixed(3)
		]));
		if (type === "csv") exportCSV(title, headers, rows);
		else exportPDF(title, subtitle, headers, rows);
	}
	function buildTree(items) {
		const map = {};
		const roots = [];
		items.forEach((item) => {
			map[item.accountId] = {
				...item,
				children: []
			};
		});
		items.forEach((item) => {
			const node = map[item.accountId];
			if (item.parentId && map[item.parentId]) map[item.parentId].children.push(node);
			else roots.push(node);
		});
		return roots;
	}
	onMount(() => {
		loadAccounts();
		fetchDashboard();
	});
	var div_10 = root_35();
	head("4gs8v1", ($$anchor) => {
		effect(() => {
			$document.title = "General Ledger — Accounts Portal";
		});
	});
	var div_11 = child(div_10);
	var div_12 = child(div_11);
	var h1 = child(div_12);
	Book_open(child(h1), { class: "h-5 w-5 text-primary" });
	next();
	reset(h1);
	next(2);
	reset(div_12);
	reset(div_11);
	var div_13 = sibling(div_11, 2);
	var button_2 = child(div_13);
	var button_3 = sibling(button_2, 2);
	var button_4 = sibling(button_3, 2);
	var button_5 = sibling(button_4, 2);
	var button_6 = sibling(button_5, 2);
	reset(div_13);
	var node_10 = sibling(div_13, 2);
	var consequent_8 = ($$anchor) => {
		var fragment_6 = comment();
		var node_11 = first_child(fragment_6);
		var consequent_6 = ($$anchor) => {
			var div_14 = root_5();
			Refresh_cw(child(div_14), { class: "h-7 w-7 text-primary animate-spin" });
			reset(div_14);
			append($$anchor, div_14);
		};
		var consequent_7 = ($$anchor) => {
			var fragment_7 = root_6();
			var div_15 = first_child(fragment_7);
			var div_16 = child(div_15);
			var span_6 = sibling(child(div_16), 2);
			MoneyDisplay(child(span_6), { get amount() {
				return get(dashboardData).agentWalletsSum;
			} });
			reset(span_6);
			reset(div_16);
			var div_17 = sibling(div_16, 2);
			var span_7 = sibling(child(div_17), 2);
			MoneyDisplay(child(span_7), { get amount() {
				return get(dashboardData).supplierWalletsSum;
			} });
			reset(span_7);
			reset(div_17);
			reset(div_15);
			var div_18 = sibling(div_15, 2);
			var h2 = child(div_18);
			Shield_check(child(h2), { class: "h-4.5 w-4.5 text-primary" });
			next();
			reset(h2);
			var div_19 = sibling(h2, 4);
			var div_20 = child(div_19);
			var span_8 = sibling(child(div_20), 2);
			var text_4 = child(span_8, true);
			reset(span_8);
			reset(div_20);
			var div_21 = sibling(div_20, 2);
			var span_9 = sibling(child(div_21), 2);
			var text_5 = child(span_9, true);
			reset(span_9);
			reset(div_21);
			var div_22 = sibling(div_21, 2);
			var span_10 = sibling(child(div_22), 2);
			var text_6 = child(span_10, true);
			reset(span_10);
			reset(div_22);
			var div_23 = sibling(div_22, 2);
			var span_11 = sibling(child(div_23), 2);
			var text_7 = child(span_11, true);
			reset(span_11);
			reset(div_23);
			var div_24 = sibling(div_23, 2);
			var span_12 = sibling(child(div_24), 2);
			var text_8 = child(span_12, true);
			reset(span_12);
			reset(div_24);
			reset(div_19);
			reset(div_18);
			template_effect(() => {
				set_text(text_4, get(dashboardData).pendingSupplierPaymentsCount);
				set_text(text_5, get(dashboardData).pendingPurchaseReturnsCount);
				set_text(text_6, get(dashboardData).pendingSalesReturnsCount);
				set_text(text_7, get(dashboardData).pendingExpensesCount);
				set_text(text_8, get(dashboardData).draftJournalEntriesCount);
			});
			append($$anchor, fragment_7);
		};
		if_block(node_11, ($$render) => {
			if (get(loadingDashboard)) $$render(consequent_6);
			else if (get(dashboardData)) $$render(consequent_7, 1);
		});
		append($$anchor, fragment_6);
	};
	if_block(node_10, ($$render) => {
		if (get(activeTab) === "dashboard") $$render(consequent_8);
	});
	var node_16 = sibling(node_10, 2);
	var consequent_16 = ($$anchor) => {
		var div_25 = root_18();
		var div_26 = child(div_25);
		var div_27 = child(div_26);
		var select = sibling(child(div_27), 2);
		each(select, 21, () => get(accountsList), index, ($$anchor, acc) => {
			var option = root_7();
			var text_9 = child(option);
			reset(option);
			var option_value = {};
			template_effect(($0) => {
				set_text(text_9, `${get(acc).code ?? ""} — ${get(acc).name ?? ""} ${get(acc).isControlAccount ? "[Control]" : ""}`);
				if (option_value !== (option_value = $0)) option.value = (option.__value = $0) ?? "";
			}, [() => String(get(acc).id)]);
			append($$anchor, option);
		});
		reset(select);
		reset(div_27);
		var div_28 = sibling(div_27, 2);
		var input = sibling(child(div_28), 2);
		remove_input_defaults(input);
		reset(div_28);
		var div_29 = sibling(div_28, 2);
		var input_1 = sibling(child(div_29), 2);
		remove_input_defaults(input_1);
		reset(div_29);
		var node_17 = sibling(div_29, 2);
		Button(node_17, {
			onclick: fetchStatement,
			get disabled() {
				return get(loadingStatement);
			},
			class: "h-9.5 rounded-xl cursor-pointer",
			children: ($$anchor, $$slotProps) => {
				var fragment_8 = root_8();
				var node_18 = first_child(fragment_8);
				var consequent_9 = ($$anchor) => {
					Refresh_cw($$anchor, { class: "h-3.5 w-3.5 mr-1.5 animate-spin" });
				};
				if_block(node_18, ($$render) => {
					if (get(loadingStatement)) $$render(consequent_9);
				});
				next();
				append($$anchor, fragment_8);
			},
			$$slots: { default: true }
		});
		var node_19 = sibling(node_17, 2);
		var consequent_10 = ($$anchor) => {
			var fragment_10 = root_11();
			var node_20 = first_child(fragment_10);
			Button(node_20, {
				variant: "outline",
				onclick: () => exportStatement("csv"),
				class: "h-9.5 rounded-xl cursor-pointer flex items-center gap-1",
				children: ($$anchor, $$slotProps) => {
					var fragment_11 = root_9();
					File_spreadsheet(first_child(fragment_11), { class: "h-3.5 w-3.5" });
					next();
					append($$anchor, fragment_11);
				},
				$$slots: { default: true }
			});
			Button(sibling(node_20, 2), {
				variant: "outline",
				onclick: () => exportStatement("pdf"),
				class: "h-9.5 rounded-xl cursor-pointer flex items-center gap-1",
				children: ($$anchor, $$slotProps) => {
					var fragment_12 = root_10();
					File_down(first_child(fragment_12), { class: "h-3.5 w-3.5" });
					next();
					append($$anchor, fragment_12);
				},
				$$slots: { default: true }
			});
			append($$anchor, fragment_10);
		};
		if_block(node_19, ($$render) => {
			if (get(statementData) && get(statementData).items.length > 0) $$render(consequent_10);
		});
		reset(div_26);
		var node_24 = sibling(div_26, 2);
		var consequent_11 = ($$anchor) => {
			var div_30 = root_12();
			Refresh_cw(child(div_30), { class: "h-7 w-7 text-primary animate-spin" });
			reset(div_30);
			append($$anchor, div_30);
		};
		var consequent_15 = ($$anchor) => {
			var fragment_13 = root_17();
			var div_31 = first_child(fragment_13);
			var div_32 = child(div_31);
			var span_13 = sibling(child(div_32), 2);
			MoneyDisplay(child(span_13), { get amount() {
				return get(statementData).openingBalance;
			} });
			reset(span_13);
			reset(div_32);
			var div_33 = sibling(div_32, 2);
			var span_14 = sibling(child(div_33), 2);
			MoneyDisplay(child(span_14), { get amount() {
				return get(statementData).totalDebit;
			} });
			reset(span_14);
			reset(div_33);
			var div_34 = sibling(div_33, 2);
			var span_15 = sibling(child(div_34), 2);
			MoneyDisplay(child(span_15), { get amount() {
				return get(statementData).totalCredit;
			} });
			reset(span_15);
			reset(div_34);
			var div_35 = sibling(div_34, 2);
			var span_16 = sibling(child(div_35), 2);
			MoneyDisplay(child(span_16), { get amount() {
				return get(statementData).endingBalance;
			} });
			reset(span_16);
			reset(div_35);
			reset(div_31);
			var node_30 = sibling(div_31, 2);
			var consequent_12 = ($$anchor) => {
				append($$anchor, root_13());
			};
			var alternate_6 = ($$anchor) => {
				var div_37 = root_16();
				var table = child(div_37);
				var tbody = sibling(child(table));
				each(tbody, 20, () => (() => {
					let bal = get(statementData).openingBalance;
					return get(statementData).items.map((item) => {
						bal += item.debit - item.credit;
						return {
							item,
							bal
						};
					});
				})(), index, ($$anchor, row) => {
					var tr = root_15();
					var td = child(tr);
					DateDisplay(child(td), { get value() {
						return row.item.postingDate;
					} });
					reset(td);
					var td_1 = sibling(td);
					var text_10 = child(td_1, true);
					reset(td_1);
					var td_2 = sibling(td_1);
					var node_32 = child(td_2);
					var consequent_13 = ($$anchor) => {
						MoneyDisplay($$anchor, { get amount() {
							return row.item.debit;
						} });
					};
					var alternate_4 = ($$anchor) => {
						append($$anchor, root_14());
					};
					if_block(node_32, ($$render) => {
						if (row.item.debit > 0) $$render(consequent_13);
						else $$render(alternate_4, -1);
					});
					reset(td_2);
					var td_3 = sibling(td_2);
					var node_33 = child(td_3);
					var consequent_14 = ($$anchor) => {
						MoneyDisplay($$anchor, { get amount() {
							return row.item.credit;
						} });
					};
					var alternate_5 = ($$anchor) => {
						append($$anchor, root_14());
					};
					if_block(node_33, ($$render) => {
						if (row.item.credit > 0) $$render(consequent_14);
						else $$render(alternate_5, -1);
					});
					reset(td_3);
					var td_4 = sibling(td_3);
					MoneyDisplay(child(td_4), { get amount() {
						return row.bal;
					} });
					reset(td_4);
					var td_5 = sibling(td_4);
					var text_11 = child(td_5);
					reset(td_5);
					reset(tr);
					template_effect(() => {
						set_text(text_10, row.item.description);
						set_text(text_11, `${row.item.sourceType ?? ""} #${row.item.sourceId ?? ""}`);
					});
					append($$anchor, tr);
				});
				reset(tbody);
				reset(table);
				reset(div_37);
				append($$anchor, div_37);
			};
			if_block(node_30, ($$render) => {
				if (get(statementData).items.length === 0) $$render(consequent_12);
				else $$render(alternate_6, -1);
			});
			append($$anchor, fragment_13);
		};
		if_block(node_24, ($$render) => {
			if (get(loadingStatement)) $$render(consequent_11);
			else if (get(statementData)) $$render(consequent_15, 1);
		});
		reset(div_25);
		bind_select_value(select, () => get(statementAccountId), ($$value) => set(statementAccountId, $$value));
		bind_value(input, () => get(statementStart), ($$value) => set(statementStart, $$value));
		bind_value(input_1, () => get(statementEnd), ($$value) => set(statementEnd, $$value));
		append($$anchor, div_25);
	};
	if_block(node_16, ($$render) => {
		if (get(activeTab) === "statement") $$render(consequent_16);
	});
	var node_35 = sibling(node_16, 2);
	var consequent_26 = ($$anchor) => {
		var div_38 = root_24();
		var div_39 = child(div_38);
		var div_40 = child(div_39);
		var input_2 = sibling(child(div_40), 2);
		remove_input_defaults(input_2);
		reset(div_40);
		var node_36 = sibling(div_40, 2);
		Button(node_36, {
			onclick: fetchTrialBalance,
			get disabled() {
				return get(loadingTB);
			},
			class: "h-9.5 rounded-xl cursor-pointer",
			children: ($$anchor, $$slotProps) => {
				var fragment_16 = root_19();
				var node_37 = first_child(fragment_16);
				var consequent_17 = ($$anchor) => {
					Refresh_cw($$anchor, { class: "h-3.5 w-3.5 mr-1.5 animate-spin" });
				};
				if_block(node_37, ($$render) => {
					if (get(loadingTB)) $$render(consequent_17);
				});
				next();
				append($$anchor, fragment_16);
			},
			$$slots: { default: true }
		});
		var node_38 = sibling(node_36, 2);
		var consequent_18 = ($$anchor) => {
			var fragment_18 = root_11();
			var node_39 = first_child(fragment_18);
			Button(node_39, {
				variant: "outline",
				onclick: () => exportTrialBalance("csv"),
				class: "h-9.5 rounded-xl cursor-pointer flex items-center gap-1",
				children: ($$anchor, $$slotProps) => {
					var fragment_19 = root_9();
					File_spreadsheet(first_child(fragment_19), { class: "h-3.5 w-3.5" });
					next();
					append($$anchor, fragment_19);
				},
				$$slots: { default: true }
			});
			Button(sibling(node_39, 2), {
				variant: "outline",
				onclick: () => exportTrialBalance("pdf"),
				class: "h-9.5 rounded-xl cursor-pointer flex items-center gap-1",
				children: ($$anchor, $$slotProps) => {
					var fragment_20 = root_10();
					File_down(first_child(fragment_20), { class: "h-3.5 w-3.5" });
					next();
					append($$anchor, fragment_20);
				},
				$$slots: { default: true }
			});
			append($$anchor, fragment_18);
		};
		if_block(node_38, ($$render) => {
			if (get(trialBalanceData)) $$render(consequent_18);
		});
		reset(div_39);
		var node_43 = sibling(div_39, 2);
		var consequent_19 = ($$anchor) => {
			var div_41 = root_12();
			Refresh_cw(child(div_41), { class: "h-7 w-7 text-primary animate-spin" });
			reset(div_41);
			append($$anchor, div_41);
		};
		var consequent_25 = ($$anchor) => {
			var fragment_21 = root_23();
			var node_45 = first_child(fragment_21);
			var consequent_20 = ($$anchor) => {
				var div_42 = root_20();
				Shield_check(child(div_42), { class: "h-4.5 w-4.5 text-emerald-600" });
				next();
				reset(div_42);
				append($$anchor, div_42);
			};
			var alternate_7 = ($$anchor) => {
				var div_43 = root_21();
				Shield_alert(child(div_43), { class: "h-4.5 w-4.5 text-rose-600" });
				next();
				reset(div_43);
				append($$anchor, div_43);
			};
			if_block(node_45, ($$render) => {
				if (get(trialBalanceData).isBalanced) $$render(consequent_20);
				else $$render(alternate_7, -1);
			});
			var div_44 = sibling(node_45, 2);
			var table_1 = child(div_44);
			var tbody_1 = sibling(child(table_1));
			each(tbody_1, 21, () => get(trialBalanceData).items, index, ($$anchor, i) => {
				var tr_1 = root_22();
				var td_6 = child(tr_1);
				var text_12 = child(td_6, true);
				reset(td_6);
				var td_7 = sibling(td_6);
				var text_13 = child(td_7, true);
				reset(td_7);
				var td_8 = sibling(td_7);
				var text_14 = child(td_8, true);
				reset(td_8);
				var td_9 = sibling(td_8);
				var node_48 = child(td_9);
				var consequent_21 = ($$anchor) => {
					MoneyDisplay($$anchor, { get amount() {
						return get(i).endingBalance;
					} });
				};
				var consequent_22 = ($$anchor) => {
					{
						let $0 = user_derived(() => Math.abs(get(i).endingBalance));
						MoneyDisplay($$anchor, { get amount() {
							return get($0);
						} });
					}
				};
				var alternate_8 = ($$anchor) => {
					append($$anchor, root_14());
				};
				if_block(node_48, ($$render) => {
					if (get(i).endingBalance > 0 && get(i).normalBalance === "debit") $$render(consequent_21);
					else if (get(i).endingBalance < 0 && get(i).normalBalance === "credit") $$render(consequent_22, 1);
					else $$render(alternate_8, -1);
				});
				reset(td_9);
				var td_10 = sibling(td_9);
				var node_49 = child(td_10);
				var consequent_23 = ($$anchor) => {
					MoneyDisplay($$anchor, { get amount() {
						return get(i).endingBalance;
					} });
				};
				var consequent_24 = ($$anchor) => {
					{
						let $0 = user_derived(() => Math.abs(get(i).endingBalance));
						MoneyDisplay($$anchor, { get amount() {
							return get($0);
						} });
					}
				};
				var alternate_9 = ($$anchor) => {
					append($$anchor, root_14());
				};
				if_block(node_49, ($$render) => {
					if (get(i).endingBalance > 0 && get(i).normalBalance === "credit") $$render(consequent_23);
					else if (get(i).endingBalance < 0 && get(i).normalBalance === "debit") $$render(consequent_24, 1);
					else $$render(alternate_9, -1);
				});
				reset(td_10);
				reset(tr_1);
				template_effect(() => {
					set_text(text_12, get(i).accountCode);
					set_text(text_13, get(i).accountName);
					set_text(text_14, get(i).accountType);
				});
				append($$anchor, tr_1);
			});
			reset(tbody_1);
			var tfoot = sibling(tbody_1);
			var tr_2 = child(tfoot);
			var td_11 = sibling(child(tr_2));
			MoneyDisplay(child(td_11), { get amount() {
				return get(trialBalanceData).totalDebitSum;
			} });
			reset(td_11);
			var td_12 = sibling(td_11);
			MoneyDisplay(child(td_12), { get amount() {
				return get(trialBalanceData).totalCreditSum;
			} });
			reset(td_12);
			reset(tr_2);
			reset(tfoot);
			reset(table_1);
			reset(div_44);
			append($$anchor, fragment_21);
		};
		if_block(node_43, ($$render) => {
			if (get(loadingTB)) $$render(consequent_19);
			else if (get(trialBalanceData)) $$render(consequent_25, 1);
		});
		reset(div_38);
		bind_value(input_2, () => get(tbAsOf), ($$value) => set(tbAsOf, $$value));
		append($$anchor, div_38);
	};
	if_block(node_35, ($$render) => {
		if (get(activeTab) === "trial-balance") $$render(consequent_26);
	});
	var node_52 = sibling(node_35, 2);
	var consequent_32 = ($$anchor) => {
		var div_45 = root_29();
		var div_46 = child(div_45);
		var div_47 = child(div_46);
		var input_3 = sibling(child(div_47), 2);
		remove_input_defaults(input_3);
		reset(div_47);
		var node_53 = sibling(div_47, 2);
		Button(node_53, {
			onclick: fetchBalanceSheet,
			get disabled() {
				return get(loadingBS);
			},
			class: "h-9.5 rounded-xl cursor-pointer",
			children: ($$anchor, $$slotProps) => {
				var fragment_26 = root_25();
				var node_54 = first_child(fragment_26);
				var consequent_27 = ($$anchor) => {
					Refresh_cw($$anchor, { class: "h-3.5 w-3.5 mr-1.5 animate-spin" });
				};
				if_block(node_54, ($$render) => {
					if (get(loadingBS)) $$render(consequent_27);
				});
				next();
				append($$anchor, fragment_26);
			},
			$$slots: { default: true }
		});
		var node_55 = sibling(node_53, 2);
		var consequent_28 = ($$anchor) => {
			var fragment_28 = root_11();
			var node_56 = first_child(fragment_28);
			Button(node_56, {
				variant: "outline",
				onclick: () => exportBalanceSheet("csv"),
				class: "h-9.5 rounded-xl cursor-pointer flex items-center gap-1",
				children: ($$anchor, $$slotProps) => {
					var fragment_29 = root_9();
					File_spreadsheet(first_child(fragment_29), { class: "h-3.5 w-3.5" });
					next();
					append($$anchor, fragment_29);
				},
				$$slots: { default: true }
			});
			Button(sibling(node_56, 2), {
				variant: "outline",
				onclick: () => exportBalanceSheet("pdf"),
				class: "h-9.5 rounded-xl cursor-pointer flex items-center gap-1",
				children: ($$anchor, $$slotProps) => {
					var fragment_30 = root_10();
					File_down(first_child(fragment_30), { class: "h-3.5 w-3.5" });
					next();
					append($$anchor, fragment_30);
				},
				$$slots: { default: true }
			});
			append($$anchor, fragment_28);
		};
		if_block(node_55, ($$render) => {
			if (get(balanceSheetData)) $$render(consequent_28);
		});
		reset(div_46);
		var node_60 = sibling(div_46, 2);
		var consequent_29 = ($$anchor) => {
			var div_48 = root_12();
			Refresh_cw(child(div_48), { class: "h-7 w-7 text-primary animate-spin" });
			reset(div_48);
			append($$anchor, div_48);
		};
		var consequent_31 = ($$anchor) => {
			var fragment_31 = root_28();
			var node_62 = first_child(fragment_31);
			var consequent_30 = ($$anchor) => {
				var div_49 = root_26();
				Shield_check(child(div_49), { class: "h-4.5 w-4.5 text-emerald-600" });
				next();
				reset(div_49);
				append($$anchor, div_49);
			};
			var alternate_10 = ($$anchor) => {
				var div_50 = root_27();
				Shield_alert(child(div_50), { class: "h-4.5 w-4.5 text-rose-600" });
				next();
				reset(div_50);
				append($$anchor, div_50);
			};
			if_block(node_62, ($$render) => {
				if (get(balanceSheetData).isBalanced) $$render(consequent_30);
				else $$render(alternate_10, -1);
			});
			var div_51 = sibling(node_62, 2);
			var div_52 = child(div_51);
			var div_53 = child(div_52);
			var div_54 = child(div_53);
			var span_21 = sibling(child(div_54), 2);
			MoneyDisplay(child(span_21), { get amount() {
				return get(balanceSheetData).totalAssets;
			} });
			reset(span_21);
			reset(div_54);
			var div_55 = sibling(div_54, 2);
			each(div_55, 21, () => buildTree(get(balanceSheetData).assets), index, ($$anchor, root) => {
				renderBSNode($$anchor, () => get(root), () => 0);
			});
			reset(div_55);
			reset(div_53);
			reset(div_52);
			var div_56 = sibling(div_52, 2);
			var div_57 = child(div_56);
			var div_58 = child(div_57);
			var span_22 = sibling(child(div_58), 2);
			MoneyDisplay(child(span_22), { get amount() {
				return get(balanceSheetData).totalLiabilities;
			} });
			reset(span_22);
			reset(div_58);
			var div_59 = sibling(div_58, 2);
			each(div_59, 21, () => buildTree(get(balanceSheetData).liabilities), index, ($$anchor, root) => {
				renderBSNode($$anchor, () => get(root), () => 0);
			});
			reset(div_59);
			reset(div_57);
			var div_60 = sibling(div_57, 2);
			var div_61 = child(div_60);
			var span_23 = sibling(child(div_61), 2);
			MoneyDisplay(child(span_23), { get amount() {
				return get(balanceSheetData).totalEquity;
			} });
			reset(span_23);
			reset(div_61);
			var div_62 = sibling(div_61, 2);
			each(div_62, 21, () => buildTree(get(balanceSheetData).equity), index, ($$anchor, root) => {
				renderBSNode($$anchor, () => get(root), () => 0);
			});
			reset(div_62);
			reset(div_60);
			reset(div_56);
			reset(div_51);
			append($$anchor, fragment_31);
		};
		if_block(node_60, ($$render) => {
			if (get(loadingBS)) $$render(consequent_29);
			else if (get(balanceSheetData)) $$render(consequent_31, 1);
		});
		reset(div_45);
		bind_value(input_3, () => get(bsAsOf), ($$value) => set(bsAsOf, $$value));
		append($$anchor, div_45);
	};
	if_block(node_52, ($$render) => {
		if (get(activeTab) === "balance-sheet") $$render(consequent_32);
	});
	var node_68 = sibling(node_52, 2);
	var consequent_39 = ($$anchor) => {
		var div_63 = root_34();
		var div_64 = child(div_63);
		var div_65 = child(div_64);
		var input_4 = sibling(child(div_65), 2);
		remove_input_defaults(input_4);
		reset(div_65);
		var div_66 = sibling(div_65, 2);
		var input_5 = sibling(child(div_66), 2);
		remove_input_defaults(input_5);
		reset(div_66);
		var node_69 = sibling(div_66, 2);
		Button(node_69, {
			onclick: fetchProfitLoss,
			get disabled() {
				return get(loadingPL);
			},
			class: "h-9.5 rounded-xl cursor-pointer",
			children: ($$anchor, $$slotProps) => {
				var fragment_35 = root_30();
				var node_70 = first_child(fragment_35);
				var consequent_33 = ($$anchor) => {
					Refresh_cw($$anchor, { class: "h-3.5 w-3.5 mr-1.5 animate-spin" });
				};
				if_block(node_70, ($$render) => {
					if (get(loadingPL)) $$render(consequent_33);
				});
				next();
				append($$anchor, fragment_35);
			},
			$$slots: { default: true }
		});
		var node_71 = sibling(node_69, 2);
		var consequent_34 = ($$anchor) => {
			var fragment_37 = root_11();
			var node_72 = first_child(fragment_37);
			Button(node_72, {
				variant: "outline",
				onclick: () => exportProfitLoss("csv"),
				class: "h-9.5 rounded-xl cursor-pointer flex items-center gap-1",
				children: ($$anchor, $$slotProps) => {
					var fragment_38 = root_9();
					File_spreadsheet(first_child(fragment_38), { class: "h-3.5 w-3.5" });
					next();
					append($$anchor, fragment_38);
				},
				$$slots: { default: true }
			});
			Button(sibling(node_72, 2), {
				variant: "outline",
				onclick: () => exportProfitLoss("pdf"),
				class: "h-9.5 rounded-xl cursor-pointer flex items-center gap-1",
				children: ($$anchor, $$slotProps) => {
					var fragment_39 = root_10();
					File_down(first_child(fragment_39), { class: "h-3.5 w-3.5" });
					next();
					append($$anchor, fragment_39);
				},
				$$slots: { default: true }
			});
			append($$anchor, fragment_37);
		};
		if_block(node_71, ($$render) => {
			if (get(profitLossData)) $$render(consequent_34);
		});
		reset(div_64);
		var node_76 = sibling(div_64, 2);
		var consequent_35 = ($$anchor) => {
			var div_67 = root_12();
			Refresh_cw(child(div_67), { class: "h-7 w-7 text-primary animate-spin" });
			reset(div_67);
			append($$anchor, div_67);
		};
		var consequent_38 = ($$anchor) => {
			var fragment_40 = root_33();
			var div_68 = first_child(fragment_40);
			var div_69 = child(div_68);
			var span_24 = sibling(child(div_69), 2);
			MoneyDisplay(child(span_24), { get amount() {
				return get(profitLossData).netProfit;
			} });
			reset(span_24);
			reset(div_69);
			var div_70 = sibling(div_69, 2);
			var node_79 = child(div_70);
			{
				let $0 = user_derived(() => get(profitLossData).netProfit >= 0 ? "text-emerald-500" : "text-rose-500");
				Trending_up(node_79, { get class() {
					return `h-5 w-5 ${get($0) ?? ""}`;
				} });
			}
			var span_25 = sibling(node_79, 2);
			var text_15 = child(span_25, true);
			reset(span_25);
			reset(div_70);
			reset(div_68);
			var div_71 = sibling(div_68, 2);
			var div_72 = child(div_71);
			var div_73 = child(div_72);
			var span_26 = sibling(child(div_73), 2);
			MoneyDisplay(child(span_26), { get amount() {
				return get(profitLossData).totalRevenues;
			} });
			reset(span_26);
			reset(div_73);
			var div_74 = sibling(div_73, 2);
			var node_81 = child(div_74);
			var consequent_36 = ($$anchor) => {
				append($$anchor, root_31());
			};
			var alternate_11 = ($$anchor) => {
				var fragment_41 = comment();
				each(first_child(fragment_41), 17, () => buildTree(get(profitLossData).revenues), index, ($$anchor, root) => {
					renderPLNode($$anchor, () => get(root), () => 0);
				});
				append($$anchor, fragment_41);
			};
			if_block(node_81, ($$render) => {
				if (get(profitLossData).revenues.length === 0) $$render(consequent_36);
				else $$render(alternate_11, -1);
			});
			reset(div_74);
			reset(div_72);
			var div_75 = sibling(div_72, 2);
			var div_76 = child(div_75);
			var span_27 = sibling(child(div_76), 2);
			MoneyDisplay(child(span_27), { get amount() {
				return get(profitLossData).totalExpenses;
			} });
			reset(span_27);
			reset(div_76);
			var div_77 = sibling(div_76, 2);
			var node_84 = child(div_77);
			var consequent_37 = ($$anchor) => {
				append($$anchor, root_32());
			};
			var alternate_12 = ($$anchor) => {
				var fragment_43 = comment();
				each(first_child(fragment_43), 17, () => buildTree(get(profitLossData).expenses), index, ($$anchor, root) => {
					renderPLNode($$anchor, () => get(root), () => 0);
				});
				append($$anchor, fragment_43);
			};
			if_block(node_84, ($$render) => {
				if (get(profitLossData).expenses.length === 0) $$render(consequent_37);
				else $$render(alternate_12, -1);
			});
			reset(div_77);
			reset(div_75);
			reset(div_71);
			template_effect(() => {
				set_class(div_68, 1, `bg-card border border-border rounded-2xl p-5 shadow-xs border-l-4 ${get(profitLossData).netProfit >= 0 ? "border-l-emerald-500" : "border-l-rose-500"} flex items-center justify-between`);
				set_class(span_24, 1, `text-2xl font-bold font-mono ${get(profitLossData).netProfit >= 0 ? "text-emerald-600" : "text-rose-600"}`);
				set_text(text_15, get(profitLossData).netProfit >= 0 ? "Net Income Surplus" : "Net Loss Deficit");
			});
			append($$anchor, fragment_40);
		};
		if_block(node_76, ($$render) => {
			if (get(loadingPL)) $$render(consequent_35);
			else if (get(profitLossData)) $$render(consequent_38, 1);
		});
		reset(div_63);
		bind_value(input_4, () => get(plStart), ($$value) => set(plStart, $$value));
		bind_value(input_5, () => get(plEnd), ($$value) => set(plEnd, $$value));
		append($$anchor, div_63);
	};
	if_block(node_68, ($$render) => {
		if (get(activeTab) === "profit-loss") $$render(consequent_39);
	});
	reset(div_10);
	template_effect(() => {
		set_class(button_2, 1, `px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${get(activeTab) === "dashboard" ? "bg-card text-foreground shadow-sm border border-border/30" : "text-muted-foreground hover:text-foreground"}`);
		set_class(button_3, 1, `px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${get(activeTab) === "statement" ? "bg-card text-foreground shadow-sm border border-border/30" : "text-muted-foreground hover:text-foreground"}`);
		set_class(button_4, 1, `px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${get(activeTab) === "trial-balance" ? "bg-card text-foreground shadow-sm border border-border/30" : "text-muted-foreground hover:text-foreground"}`);
		set_class(button_5, 1, `px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${get(activeTab) === "balance-sheet" ? "bg-card text-foreground shadow-sm border border-border/30" : "text-muted-foreground hover:text-foreground"}`);
		set_class(button_6, 1, `px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${get(activeTab) === "profit-loss" ? "bg-card text-foreground shadow-sm border border-border/30" : "text-muted-foreground hover:text-foreground"}`);
	});
	delegated("click", button_2, () => handleTabChange("dashboard"));
	delegated("click", button_3, () => handleTabChange("statement"));
	delegated("click", button_4, () => handleTabChange("trial-balance"));
	delegated("click", button_5, () => handleTabChange("balance-sheet"));
	delegated("click", button_6, () => handleTabChange("profit-loss"));
	append($$anchor, div_10);
	pop();
}
delegate(["click"]);
//#endregion
export { _page as component };

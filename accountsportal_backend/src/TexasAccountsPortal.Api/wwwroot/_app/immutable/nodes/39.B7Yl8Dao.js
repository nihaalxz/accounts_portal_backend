import { A as component, B as append, Bt as reset, Ct as user_derived, D as head, H as from_html, I as if_block, K as delegate, N as each, Nt as pop, P as index, Pt as push, Q as get, R as set_text, T as clsx, V as comment, bt as state, dt as $document, g as remove_input_defaults, gt as proxy, ht as sibling, it as effect, m as bind_value, mt as first_child, ot as template_effect, pt as child, q as delegated, r as onMount, vt as set, w as set_class, zt as next } from "../chunks/dXkmWTgM.js";
import { t as goto } from "../chunks/CYO7_Gwa.js";
import "../chunks/DhaYE-8x.js";
import { t as apiFetch } from "../chunks/CHr2m6kG.js";
import { r as toast } from "../chunks/CbPRQHfn.js";
import { t as Arrow_right } from "../chunks/DZE4Pk63.js";
import { t as Book_open } from "../chunks/E5UrMlE0.js";
import { t as Briefcase } from "../chunks/DMJEmKtH.js";
import { t as Building_2 } from "../chunks/PAfPMPpZ.js";
import { t as Calendar } from "../chunks/DxFQ7Qxv.js";
import { n as Car, t as Plane } from "../chunks/DG-SfabB.js";
import { t as Chevron_down } from "../chunks/Dj1p1QvC2.js";
import { t as Chevron_right } from "../chunks/BQLzQDdY2.js";
import { t as Circle_alert } from "../chunks/CHXThoj_2.js";
import { t as Clock } from "../chunks/CZu1L_RP2.js";
import { t as Compass } from "../chunks/CZmkKFe42.js";
import { t as Credit_card } from "../chunks/DZ-rRKb92.js";
import { t as Dollar_sign } from "../chunks/BnaNfP7s2.js";
import { t as External_link } from "../chunks/ifddzD342.js";
import { t as File_down } from "../chunks/btBW28nf2.js";
import { t as File_spreadsheet } from "../chunks/B4BvDHOF2.js";
import { t as File_text } from "../chunks/NLRKrZbo2.js";
import { t as Layers } from "../chunks/CFg-aOba.js";
import { t as Refresh_cw } from "../chunks/DpTJy0Wb.js";
import { t as Shield_check } from "../chunks/Ctn9-c3Y.js";
import { t as Trending_up } from "../chunks/dBTjeHCK.js";
import { t as Wallet } from "../chunks/BahXSy4P.js";
import { s as getBahrainPresetRanges } from "../chunks/Cu8_Vl4p.js";
import { t as Button } from "../chunks/BhXsq3bC2.js";
import "../chunks/X36vBzpq2.js";
import { t as MoneyDisplay } from "../chunks/CIVSRuaR2.js";
import "../chunks/phDdFTf92.js";
import { t as exportToCSV } from "../chunks/C74Z4VDd2.js";
import { t as previewDocument } from "../chunks/BZL9MVZa2.js";
//#region src/routes/(app)/reports/profit-loss/+page.svelte
var root = from_html(`<!> <span>Refresh</span>`, 1);
var root_1 = from_html(`<!> <span>Export CSV</span>`, 1);
var root_2 = from_html(`<!> <span>Print / PDF</span>`, 1);
var root_3 = from_html(`<button type="button"> </button>`);
var root_4 = from_html(`<!> <span>Retry</span>`, 1);
var root_5 = from_html(`<div class="p-6 rounded-2xl bg-destructive/10 border border-destructive/20 text-destructive flex flex-col sm:flex-row items-center justify-between gap-4"><div class="flex items-center gap-3"><!> <div><h3 class="text-sm font-bold">Failed to generate Profit & Loss Report</h3> <p class="text-xs opacity-90 mt-0.5"> </p></div></div> <!></div>`);
var root_6 = from_html(`<div class="h-28 rounded-2xl bg-muted/40 animate-pulse border border-border/40"></div>`);
var root_7 = from_html(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3"></div>`);
var root_8 = from_html(`<span class="text-rose-500 font-mono text-[10px]"> </span>`);
var root_9 = from_html(`<span class="text-emerald-500 font-mono text-[10px]"> </span>`);
var root_10 = from_html(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3"><div class="bg-card border border-border rounded-2xl p-4 shadow-2xs space-y-2 border-l-4 border-l-blue-500 svelte-wjvphc"><div class="flex items-center justify-between text-muted-foreground"><span class="text-[11px] font-bold uppercase tracking-wider">Operating Revenue</span> <!></div> <div class="space-y-0.5"><div class="text-xl font-bold font-mono text-foreground"><!></div> <div class="text-[11px] text-muted-foreground flex items-center justify-between"><span> </span> <!></div></div></div> <div class="bg-card border border-border rounded-2xl p-4 shadow-2xs space-y-2 border-l-4 border-l-amber-500 svelte-wjvphc"><div class="flex items-center justify-between text-muted-foreground"><span class="text-[11px] font-bold uppercase tracking-wider">Cost of Sales (COGS)</span> <!></div> <div class="space-y-0.5"><div class="text-xl font-bold font-mono text-foreground"><!></div> <div class="text-[11px] text-muted-foreground flex items-center justify-between"><span>Supplier Costs</span> <!></div></div></div> <div class="bg-card border border-border rounded-2xl p-4 shadow-2xs space-y-2 border-l-4 border-l-teal-500 svelte-wjvphc"><div class="flex items-center justify-between text-muted-foreground"><span class="text-[11px] font-bold uppercase tracking-wider">Gross Profit</span> <span class="text-xs font-bold font-mono text-teal-600 bg-teal-500/10 px-1.5 py-0.5 rounded"> </span></div> <div class="space-y-0.5"><div class="text-xl font-bold font-mono text-teal-600"><!></div> <div class="text-[10px] text-muted-foreground flex items-center justify-between"><span class="text-emerald-600 font-semibold"> </span> <span class="text-muted-foreground"> </span></div></div></div> <div class="bg-card border border-border rounded-2xl p-4 shadow-2xs space-y-2 border-l-4 border-l-rose-500 svelte-wjvphc"><div class="flex items-center justify-between text-muted-foreground"><span class="text-[11px] font-bold uppercase tracking-wider">Operating Expenses</span> <!></div> <div class="space-y-0.5"><div class="text-xl font-bold font-mono text-foreground"><!></div> <div class="text-[10px] text-muted-foreground flex items-center justify-between"><span> </span> <span> </span></div></div></div> <div><div class="flex items-center justify-between text-muted-foreground"><span> </span> <span> </span></div> <div class="space-y-0.5"><div><!></div> <div class="text-[10px] text-muted-foreground flex items-center justify-between"><span> </span> <span> </span></div></div></div></div>`);
var root_11 = from_html(`<tr class="animate-pulse"><td colspan="7" class="py-3 px-4"><div class="h-4 bg-muted/50 rounded"></div></td></tr>`);
var root_12 = from_html(`<tr class="hover:bg-muted/15 transition-colors"><td class="py-3 px-4 font-semibold text-foreground flex items-center gap-2"><div class="p-1.5 rounded-lg bg-primary/10 text-primary"><!></div> <span> </span></td><td class="py-3 px-4 text-center font-mono"><span class="px-2 py-0.5 rounded-md bg-muted text-foreground text-[11px] font-bold"> </span></td><td class="py-3 px-4 text-right font-mono font-bold text-foreground"><!></td><td class="py-3 px-4 text-right font-mono text-muted-foreground"><!></td><td><!></td><td class="py-3 px-4 text-center font-mono"><span> </span></td><td class="py-3 px-4 text-right font-mono font-bold text-emerald-600"><!></td></tr>`);
var root_13 = from_html(`<tr><td colspan="7" class="py-8 text-center text-muted-foreground">No booking financial records found in the selected date range.</td></tr>`);
var root_14 = from_html(`<tfoot class="bg-muted/40 border-t-2 border-border font-bold text-xs"><tr><td class="py-3 px-4 uppercase text-foreground">Totals Across Services</td><td class="py-3 px-4 text-center font-mono text-primary"> </td><td class="py-3 px-4 text-right font-mono text-foreground text-sm"><!></td><td class="py-3 px-4 text-right font-mono text-muted-foreground text-sm"><!></td><td class="py-3 px-4 text-right font-mono text-teal-600 text-sm"><!></td><td class="py-3 px-4 text-center font-mono text-teal-600 text-sm"> </td><td class="py-3 px-4 text-right font-mono text-emerald-600 text-sm"><!></td></tr></tfoot>`);
var root_15 = from_html(`<div class="bg-card border border-border rounded-2xl shadow-2xs overflow-hidden svelte-wjvphc"><div class="p-4 border-b border-border bg-muted/20 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs"><div><h3 class="font-bold text-foreground">Operational Breakdown by Service</h3> <p class="text-[11px] text-muted-foreground">Comparative gross revenue, supplier buying costs, and finalized profits across the 7 operational service modules.</p></div> <div class="text-[11px] text-muted-foreground font-mono"> </div></div> <div class="overflow-x-auto"><table class="w-full text-xs text-left"><thead class="bg-muted/30 border-b border-border text-[11px] font-bold text-muted-foreground uppercase tracking-wider"><tr><th class="py-3 px-4">Service</th><th class="py-3 px-4 text-center">Bookings</th><th class="py-3 px-4 text-right">Gross Sales (BHD)</th><th class="py-3 px-4 text-right">Supplier Cost (BHD)</th><th class="py-3 px-4 text-right">Gross Profit (BHD)</th><th class="py-3 px-4 text-center">Margin %</th><th class="py-3 px-4 text-right">Finalized Profit (BHD)</th></tr></thead><tbody class="divide-y divide-border/60"><!></tbody><!></table></div></div>`);
var root_16 = from_html(`<div class="h-10 bg-muted/40 rounded-xl"></div>`);
var root_17 = from_html(`<div class="space-y-4 animate-pulse"></div>`);
var root_18 = from_html(`<div class="pt-2 flex items-center justify-between hover:bg-muted/10 px-2 rounded-lg"><span class="text-muted-foreground flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-blue-500"></span> </span> <span class="font-mono font-medium text-foreground"><!></span></div>`);
var root_19 = from_html(`<div class="pt-2 flex items-center justify-between text-rose-500 font-medium px-2"><span class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-rose-500"></span> Less: Approved Sales Returns & Customer Refunds</span> <span class="font-mono font-bold">-<!></span></div>`);
var root_20 = from_html(`<div class="p-4 space-y-2.5 divide-y divide-border/40"><!> <!> <div class="pt-3 flex items-center justify-between font-bold text-foreground text-xs px-2 bg-muted/20 py-2 rounded-lg"><span>Total Net Operating Revenue</span> <span class="font-mono text-sm"><!></span></div></div>`);
var root_21 = from_html(`<div class="pt-2 flex items-center justify-between hover:bg-muted/10 px-2 rounded-lg"><span class="text-muted-foreground flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-amber-500"></span> </span> <span class="font-mono font-medium text-foreground"><!></span></div>`);
var root_22 = from_html(`<div class="pt-2 flex items-center justify-between text-emerald-600 font-medium px-2"><span class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-emerald-500"></span> Less: Approved Purchase Returns (Supplier Credits)</span> <span class="font-mono font-bold">-<!></span></div>`);
var root_23 = from_html(`<div class="p-4 space-y-2.5 divide-y divide-border/40"><!> <!> <div class="pt-3 flex items-center justify-between font-bold text-foreground text-xs px-2 bg-muted/20 py-2 rounded-lg"><span>Total Cost of Goods Sold (COGS)</span> <span class="font-mono text-sm"><!></span></div></div>`);
var root_24 = from_html(`<div class="py-4 text-center text-muted-foreground text-xs">No operational expenses or salary payouts recorded in this period.</div>`);
var root_25 = from_html(`<div class="pt-2 flex items-center justify-between hover:bg-muted/10 px-2 rounded-lg"><span class="text-muted-foreground flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-rose-500"></span> </span> <span class="font-mono font-medium text-foreground"><!></span></div>`);
var root_26 = from_html(`<div class="pt-2 flex items-center justify-between hover:bg-muted/10 px-2 rounded-lg"><span class="text-muted-foreground flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-indigo-500"></span> Staff Salaries, Allowances & Commissions (Payroll)</span> <span class="font-mono font-medium text-foreground"><!></span></div>`);
var root_27 = from_html(`<!> <!>`, 1);
var root_28 = from_html(`<div class="p-4 space-y-2.5 divide-y divide-border/40"><!> <div class="pt-3 flex items-center justify-between font-bold text-foreground text-xs px-2 bg-muted/20 py-2 rounded-lg"><span>Total Operating Expenses</span> <span class="font-mono text-sm"><!></span></div></div>`);
var root_29 = from_html(`<div class="space-y-6 text-xs"><div class="border border-border rounded-2xl overflow-hidden shadow-2xs"><button type="button" class="w-full px-5 py-3.5 bg-muted/30 hover:bg-muted/50 transition-colors flex items-center justify-between cursor-pointer border-b border-border svelte-wjvphc"><div class="flex items-center gap-2"><!> <span class="font-bold text-sm text-foreground uppercase tracking-wider">1. Operating Revenue (Gross Sales)</span></div> <span class="font-mono font-bold text-foreground text-sm"><!></span></button> <!></div> <div class="border border-border rounded-2xl overflow-hidden shadow-2xs"><button type="button" class="w-full px-5 py-3.5 bg-muted/30 hover:bg-muted/50 transition-colors flex items-center justify-between cursor-pointer border-b border-border svelte-wjvphc"><div class="flex items-center gap-2"><!> <span class="font-bold text-sm text-foreground uppercase tracking-wider">2. Cost of Sales (Direct Supplier Costs)</span></div> <span class="font-mono font-bold text-foreground text-sm"><!></span></button> <!></div> <div class="p-4 rounded-2xl bg-teal-500/10 border border-teal-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3"><div class="space-y-0.5"><span class="text-xs font-bold text-teal-700 uppercase tracking-wider block">Gross Trading Margin</span> <h4 class="text-xl font-bold font-mono text-teal-600"><!></h4> <p class="text-[11px] text-teal-700/80">Gross Margin: <strong> </strong> </p></div> <div class="text-xs font-mono space-y-1 sm:text-right"><div class="text-emerald-700 font-semibold">Finalized Profit (Closed Deals): <strong> </strong></div> <div class="text-muted-foreground">Estimated Profit (Open Deals): <strong> </strong></div></div></div> <div class="border border-border rounded-2xl overflow-hidden shadow-2xs"><button type="button" class="w-full px-5 py-3.5 bg-muted/30 hover:bg-muted/50 transition-colors flex items-center justify-between cursor-pointer border-b border-border svelte-wjvphc"><div class="flex items-center gap-2"><!> <span class="font-bold text-sm text-foreground uppercase tracking-wider">3. Operating Expenses (Overheads & Payroll)</span></div> <span class="font-mono font-bold text-foreground text-sm"><!></span></button> <!></div> <div><div class="space-y-1"><span class="text-xs font-bold uppercase tracking-wider block opacity-80">Bottom Line Result</span> <h3> <!></h3> <p class="text-xs text-muted-foreground">Net Profit Margin: <strong> </strong> </p></div> <div class="bg-card/80 backdrop-blur-xs p-3.5 rounded-xl border border-border/60 text-xs space-y-1 font-mono"><div class="flex justify-between gap-4"><span class="text-muted-foreground">Finalized Net Profit:</span> <strong> </strong></div> <div class="flex justify-between gap-4"><span class="text-muted-foreground">Finalized Margin:</span> <strong> </strong></div></div></div></div>`);
var root_30 = from_html(`<div class="bg-card border border-border rounded-2xl shadow-2xs overflow-hidden p-6 space-y-6 svelte-wjvphc"><div class="border-b border-border pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2"><div><h3 class="text-base font-bold text-foreground">Operational Income Statement</h3> <p class="text-xs text-muted-foreground">Cascading formal financial presentation from Operating Gross Revenues down to Bottom Line Net Operating Profit.</p></div> <div class="text-xs text-muted-foreground font-mono bg-muted/40 px-3 py-1.5 rounded-xl border border-border/40"> </div></div> <!></div>`);
var root_31 = from_html(`<span>Open General Ledger Explorer</span> <!>`, 1);
var root_32 = from_html(`<span>View Chart of Accounts Hierarchy</span> <!>`, 1);
var root_33 = from_html(`<div class="bg-card border border-border rounded-2xl p-6 shadow-2xs space-y-6 svelte-wjvphc"><div class="space-y-2"><h3 class="text-base font-bold text-foreground flex items-center gap-2"><!> Formal General Ledger Income Statement (GAAP Accrual)</h3> <p class="text-xs text-muted-foreground leading-relaxed max-w-2xl">Texas Portals incorporates a complete double-entry General Ledger engine based on Chart of Accounts (COA) 4000-series (Revenues) and 5000-series (Expenses).</p></div> <div class="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-900 space-y-2 text-xs"><div class="flex items-center gap-2 font-bold text-amber-800"><!> <span>Chart of Accounts (COA) Status</span></div> <p class="leading-relaxed text-amber-800/90">The Chart of Accounts in the current database is unseeded. The accounting system operates with <code>BypassValidationWhenCoaEmpty: true</code>, utilizing the live <strong>Operational Income Statement</strong> (Tabs 1 & 2) as the single source of truth for business profitability across all 7 travel modules.</p></div> <div class="flex items-center gap-3"><!> <!></div></div>`);
var root_34 = from_html(`<div class="p-1 rounded-full bg-emerald-500/10 text-emerald-600"><!></div> <div class="space-y-0.5"><span class="font-bold text-foreground">Reconciliation Status: Verified</span> <p class="text-[11px] text-muted-foreground">Totals match Salesmen report and Sales Entries for the selected period (Variance: 0.000 BHD).</p></div>`, 1);
var root_35 = from_html(`<div class="p-1 rounded-full bg-amber-500/10 text-amber-600"><!></div> <div class="space-y-0.5"><span class="font-bold text-amber-600">Reconciliation Variance</span> <p class="text-[11px] text-muted-foreground"> </p></div>`, 1);
var root_36 = from_html(`<div class="p-4 rounded-2xl bg-card border border-border flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs shadow-2xs svelte-wjvphc"><div class="flex items-center gap-2.5"><!></div> <div class="text-[11px] text-muted-foreground font-mono space-y-0.5 md:text-right"><div> </div> <div> </div></div></div>`);
var root_37 = from_html(`<div class="space-y-6"><div class="flex flex-col md:flex-row md:items-center justify-between gap-4"><div class="space-y-1"><div class="flex items-center gap-2"><h1 class="text-xl font-bold tracking-tight text-foreground flex items-center gap-2"><!> Profit & Loss Report</h1> <span class="text-[11px] font-bold px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">Income Statement</span></div> <p class="text-xs text-muted-foreground">Executive operational income statement aggregating 7 travel service revenues, supplier costs, operating overheads, and net margins.</p></div> <div class="flex items-center gap-2"><!> <!> <!></div></div> <div class="bg-card border border-border rounded-2xl p-4 shadow-2xs space-y-3 svelte-wjvphc"><div class="flex items-center justify-between flex-wrap gap-2 pb-1 border-b border-border/50 text-xs"><div class="flex items-center gap-1.5 overflow-x-auto flex-nowrap pb-1 scrollbar-thin"><span class="text-[11px] font-bold text-muted-foreground mr-1 shrink-0">Period:</span> <!></div> <div class="text-[11px] text-muted-foreground flex items-center gap-1 font-mono"><!> <span>Bahrain Time (UTC+3)</span></div></div> <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1 sm:max-w-md"><div class="space-y-1"><label for="pnl-start" class="block font-semibold text-muted-foreground text-[11px]">Start Date</label> <input id="pnl-start" type="date" class="w-full h-9 px-3 rounded-xl border border-border bg-background text-foreground font-mono text-xs focus:ring-1 focus:ring-primary outline-hidden svelte-wjvphc"/></div> <div class="space-y-1"><label for="pnl-end" class="block font-semibold text-muted-foreground text-[11px]">End Date</label> <input id="pnl-end" type="date" class="w-full h-9 px-3 rounded-xl border border-border bg-background text-foreground font-mono text-xs focus:ring-1 focus:ring-primary outline-hidden svelte-wjvphc"/></div></div></div> <!> <!> <div class="flex items-center gap-1 border-b border-border text-xs font-semibold overflow-x-auto flex-nowrap pb-1 scrollbar-thin"><button type="button"><!> <span>Service Performance Table</span></button> <button type="button"><!> <span>Income Statement View</span></button> <button type="button"><!> <span>Formal General Ledger P&L</span></button></div> <!> <!> <!> <!></div>`);
function _page($$anchor, $$props) {
	push($$props, true);
	let loading = state(true);
	let error = state(null);
	let pnlData = state(null);
	const presets = getBahrainPresetRanges();
	let selectedPreset = state("thisMonth");
	let startDate = state(proxy(presets.thisMonth.startDate));
	let endDate = state(proxy(presets.thisMonth.endDate));
	let activeTab = state("performance");
	let showRevenueDetails = state(true);
	let showCostDetails = state(true);
	let showExpenseDetails = state(true);
	function getServiceIcon(serviceType) {
		const lower = (serviceType || "").toLowerCase();
		if (lower.includes("flight")) return Plane;
		if (lower.includes("hotel")) return Building_2;
		if (lower.includes("visa")) return File_text;
		if (lower.includes("holiday")) return Compass;
		if (lower.includes("vfs")) return Clock;
		if (lower.includes("transport")) return Car;
		return Briefcase;
	}
	async function loadReport() {
		set(loading, true);
		set(error, null);
		try {
			const params = {};
			if (get(startDate)) params.startDate = get(startDate);
			if (get(endDate)) params.endDate = get(endDate);
			const query = new URLSearchParams(params).toString();
			set(pnlData, await apiFetch(`api/reporting/profit-loss/summary?${query}`), true);
		} catch (err) {
			set(error, err?.message || "Failed to load Profit & Loss report. Please retry.", true);
			set(pnlData, null);
			if (get(error)) toast.error(get(error));
		} finally {
			set(loading, false);
		}
	}
	function handlePresetChange(presetKey) {
		set(selectedPreset, presetKey, true);
		const range = presets[presetKey];
		if (range) {
			set(startDate, range.startDate, true);
			set(endDate, range.endDate, true);
			loadReport();
		}
	}
	function handleCustomDateApply() {
		set(selectedPreset, "custom");
		loadReport();
	}
	function handleExportCSV() {
		if (!get(pnlData)) {
			toast.error("No report data available to export.");
			return;
		}
		const headers = [
			"Section",
			"Line Item",
			"Classification",
			"Count",
			"Gross Sales (BHD)",
			"Supplier Cost (BHD)",
			"Gross Profit (BHD)",
			"Margin %",
			"Finalized Profit (BHD)"
		];
		const rows = [];
		get(pnlData).revenueItems.forEach((r) => {
			rows.push([
				"1. Revenues",
				`Sales — ${r.serviceLabel}`,
				"Gross Booking Sale",
				r.bookingCount,
				r.salesAmount.toFixed(3),
				r.costAmount.toFixed(3),
				r.profitAmount.toFixed(3),
				`${r.marginPercentage.toFixed(1)}%`,
				r.finalProfitAmount.toFixed(3)
			]);
		});
		if (get(pnlData).approvedSalesReturns > 0) rows.push([
			"1. Revenues",
			"Less: Approved Sales Returns",
			"Revenue Deduction",
			"—",
			`-${get(pnlData).approvedSalesReturns.toFixed(3)}`,
			"0.000",
			`-${get(pnlData).approvedSalesReturns.toFixed(3)}`,
			"—",
			"0.000"
		]);
		rows.push([
			"1. Revenues Subtotal",
			"TOTAL NET REVENUE",
			"Operating Inflow",
			get(pnlData).revenueItems.reduce((acc, x) => acc + x.bookingCount, 0),
			get(pnlData).netRevenue.toFixed(3),
			"—",
			"—",
			"—",
			"—"
		]);
		get(pnlData).costOfSalesItems.forEach((c) => {
			rows.push([
				"2. Cost of Sales",
				`COGS — ${c.serviceLabel}`,
				"Direct Supplier Cost",
				c.bookingCount,
				"—",
				c.costAmount.toFixed(3),
				"—",
				"—",
				"—"
			]);
		});
		if (get(pnlData).approvedPurchaseReturns > 0) rows.push([
			"2. Cost of Sales",
			"Less: Approved Purchase Returns",
			"Supplier Credit Offset",
			"—",
			"—",
			`-${get(pnlData).approvedPurchaseReturns.toFixed(3)}`,
			"—",
			"—",
			"—"
		]);
		rows.push([
			"2. COGS Subtotal",
			"TOTAL COST OF GOODS SOLD (COGS)",
			"Direct Cost",
			"—",
			"—",
			get(pnlData).netCostOfSales.toFixed(3),
			"—",
			"—",
			"—"
		]);
		rows.push([
			"3. Gross Margin",
			"GROSS PROFIT",
			"Trading Margin",
			"—",
			"—",
			"—",
			get(pnlData).grossProfit.toFixed(3),
			`${get(pnlData).grossMarginPercentage.toFixed(1)}%`,
			get(pnlData).finalizedGrossProfit.toFixed(3)
		]);
		get(pnlData).expenseItems.forEach((e) => {
			rows.push([
				"4. Operating Expenses",
				`Expense — ${e.categoryName}`,
				"Overhead",
				e.expenseCount,
				"—",
				"—",
				`-${e.totalAmount.toFixed(3)}`,
				"—",
				"—"
			]);
		});
		if (get(pnlData).totalPayrollExpenses > 0) rows.push([
			"4. Operating Expenses",
			"Staff Salaries & Payroll Allowances",
			"Payroll",
			"—",
			"—",
			"—",
			`-${get(pnlData).totalPayrollExpenses.toFixed(3)}`,
			"—",
			"—"
		]);
		rows.push([
			"4. Expenses Subtotal",
			"TOTAL OPERATING EXPENSES",
			"Overheads & SG&A",
			"—",
			"—",
			"—",
			`-${get(pnlData).totalOperatingExpenses.toFixed(3)}`,
			"—",
			"—"
		]);
		rows.push([
			"5. Net Bottom Line",
			"NET OPERATING PROFIT / (LOSS)",
			get(pnlData).isProfitable ? "Surplus" : "Deficit",
			"—",
			"—",
			"—",
			get(pnlData).netProfit.toFixed(3),
			`${get(pnlData).netMarginPercentage.toFixed(1)}%`,
			get(pnlData).finalizedNetProfit.toFixed(3)
		]);
		exportToCSV(`profit_loss_${get(startDate) || "start"}_to_${get(endDate) || "end"}.csv`, headers, rows);
		toast.success("Profit & Loss CSV exported successfully.");
	}
	function handleExportPDF() {
		previewDocument("report", "profit-loss", {
			startDate: get(startDate),
			endDate: get(endDate)
		});
		toast.info("Generating Profit & Loss Statement PDF...");
	}
	onMount(() => {
		loadReport();
	});
	var div = root_37();
	head("wjvphc", ($$anchor) => {
		effect(() => {
			$document.title = "Profit & Loss Report (Income Statement) — Accounts Portal";
		});
	});
	var div_1 = child(div);
	var div_2 = child(div_1);
	var div_3 = child(div_2);
	var h1 = child(div_3);
	Trending_up(child(h1), { class: "h-6 w-6 text-primary" });
	next();
	reset(h1);
	next(2);
	reset(div_3);
	next(2);
	reset(div_2);
	var div_4 = sibling(div_2, 2);
	var node_1 = child(div_4);
	Button(node_1, {
		variant: "outline",
		size: "sm",
		onclick: loadReport,
		get disabled() {
			return get(loading);
		},
		class: "h-9 gap-1.5 rounded-xl cursor-pointer",
		children: ($$anchor, $$slotProps) => {
			var fragment = root();
			var node_2 = first_child(fragment);
			{
				let $0 = user_derived(() => get(loading) ? "animate-spin" : "");
				Refresh_cw(node_2, { get class() {
					return `h-3.5 w-3.5 ${get($0) ?? ""}`;
				} });
			}
			next(2);
			append($$anchor, fragment);
		},
		$$slots: { default: true }
	});
	var node_3 = sibling(node_1, 2);
	{
		let $0 = user_derived(() => get(loading) || !get(pnlData));
		Button(node_3, {
			variant: "outline",
			size: "sm",
			onclick: handleExportCSV,
			get disabled() {
				return get($0);
			},
			class: "h-9 gap-1.5 rounded-xl cursor-pointer",
			children: ($$anchor, $$slotProps) => {
				var fragment_1 = root_1();
				File_spreadsheet(first_child(fragment_1), { class: "h-3.5 w-3.5 text-emerald-600" });
				next(2);
				append($$anchor, fragment_1);
			},
			$$slots: { default: true }
		});
	}
	var node_5 = sibling(node_3, 2);
	{
		let $0 = user_derived(() => get(loading) || !get(pnlData));
		Button(node_5, {
			variant: "default",
			size: "sm",
			onclick: handleExportPDF,
			get disabled() {
				return get($0);
			},
			class: "h-9 gap-1.5 rounded-xl cursor-pointer shadow-xs",
			children: ($$anchor, $$slotProps) => {
				var fragment_2 = root_2();
				File_down(first_child(fragment_2), { class: "h-3.5 w-3.5" });
				next(2);
				append($$anchor, fragment_2);
			},
			$$slots: { default: true }
		});
	}
	reset(div_4);
	reset(div_1);
	var div_5 = sibling(div_1, 2);
	var div_6 = child(div_5);
	var div_7 = child(div_6);
	each(sibling(child(div_7), 2), 16, () => [
		{
			id: "today",
			label: "Today"
		},
		{
			id: "thisWeek",
			label: "This Week"
		},
		{
			id: "thisMonth",
			label: "This Month"
		},
		{
			id: "thisQuarter",
			label: "This Quarter"
		},
		{
			id: "thisYear",
			label: "This Year (2026)"
		},
		{
			id: "allTime",
			label: "All Time"
		}
	], index, ($$anchor, p) => {
		var button = root_3();
		var text = child(button, true);
		reset(button);
		template_effect(() => {
			set_class(button, 1, `px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer shrink-0 whitespace-nowrap ${get(selectedPreset) === p.id ? "bg-primary text-primary-foreground shadow-2xs" : "bg-muted/40 hover:bg-muted text-muted-foreground hover:text-foreground border border-border/40"}`, "svelte-wjvphc");
			set_text(text, p.label);
		});
		delegated("click", button, () => handlePresetChange(p.id));
		append($$anchor, button);
	});
	reset(div_7);
	var div_8 = sibling(div_7, 2);
	Calendar(child(div_8), { class: "h-3 w-3 text-primary" });
	next(2);
	reset(div_8);
	reset(div_6);
	var div_9 = sibling(div_6, 2);
	var div_10 = child(div_9);
	var input = sibling(child(div_10), 2);
	remove_input_defaults(input);
	reset(div_10);
	var div_11 = sibling(div_10, 2);
	var input_1 = sibling(child(div_11), 2);
	remove_input_defaults(input_1);
	reset(div_11);
	reset(div_9);
	reset(div_5);
	var node_9 = sibling(div_5, 2);
	var consequent = ($$anchor) => {
		var div_12 = root_5();
		var div_13 = child(div_12);
		var node_10 = child(div_13);
		Circle_alert(node_10, { class: "h-6 w-6 shrink-0" });
		var div_14 = sibling(node_10, 2);
		var p_1 = sibling(child(div_14), 2);
		var text_1 = child(p_1, true);
		reset(p_1);
		reset(div_14);
		reset(div_13);
		Button(sibling(div_13, 2), {
			variant: "outline",
			size: "sm",
			onclick: loadReport,
			class: "h-9 gap-1.5 rounded-xl cursor-pointer shrink-0",
			children: ($$anchor, $$slotProps) => {
				var fragment_3 = root_4();
				Refresh_cw(first_child(fragment_3), { class: "h-3.5 w-3.5" });
				next(2);
				append($$anchor, fragment_3);
			},
			$$slots: { default: true }
		});
		reset(div_12);
		template_effect(() => set_text(text_1, get(error)));
		append($$anchor, div_12);
	};
	if_block(node_9, ($$render) => {
		if (get(error)) $$render(consequent);
	});
	var node_13 = sibling(node_9, 2);
	var consequent_1 = ($$anchor) => {
		var div_15 = root_7();
		each(div_15, 20, () => Array(5), index, ($$anchor, _) => {
			append($$anchor, root_6());
		});
		reset(div_15);
		append($$anchor, div_15);
	};
	var consequent_4 = ($$anchor) => {
		var div_17 = root_10();
		var div_18 = child(div_17);
		var div_19 = child(div_18);
		Dollar_sign(sibling(child(div_19), 2), { class: "h-4 w-4 text-blue-500" });
		reset(div_19);
		var div_20 = sibling(div_19, 2);
		var div_21 = child(div_20);
		MoneyDisplay(child(div_21), { get amount() {
			return get(pnlData).netRevenue;
		} });
		reset(div_21);
		var div_22 = sibling(div_21, 2);
		var span = child(div_22);
		var text_2 = child(span);
		reset(span);
		var node_16 = sibling(span, 2);
		var consequent_2 = ($$anchor) => {
			var span_1 = root_8();
			var text_3 = child(span_1);
			reset(span_1);
			template_effect(($0) => set_text(text_3, `-${$0 ?? ""} Ret`), [() => get(pnlData).approvedSalesReturns.toFixed(3)]);
			append($$anchor, span_1);
		};
		if_block(node_16, ($$render) => {
			if (get(pnlData).approvedSalesReturns > 0) $$render(consequent_2);
		});
		reset(div_22);
		reset(div_20);
		reset(div_18);
		var div_23 = sibling(div_18, 2);
		var div_24 = child(div_23);
		Credit_card(sibling(child(div_24), 2), { class: "h-4 w-4 text-amber-500" });
		reset(div_24);
		var div_25 = sibling(div_24, 2);
		var div_26 = child(div_25);
		MoneyDisplay(child(div_26), { get amount() {
			return get(pnlData).netCostOfSales;
		} });
		reset(div_26);
		var div_27 = sibling(div_26, 2);
		var node_19 = sibling(child(div_27), 2);
		var consequent_3 = ($$anchor) => {
			var span_2 = root_9();
			var text_4 = child(span_2);
			reset(span_2);
			template_effect(($0) => set_text(text_4, `-${$0 ?? ""} Ret`), [() => get(pnlData).approvedPurchaseReturns.toFixed(3)]);
			append($$anchor, span_2);
		};
		if_block(node_19, ($$render) => {
			if (get(pnlData).approvedPurchaseReturns > 0) $$render(consequent_3);
		});
		reset(div_27);
		reset(div_25);
		reset(div_23);
		var div_28 = sibling(div_23, 2);
		var div_29 = child(div_28);
		var span_3 = sibling(child(div_29), 2);
		var text_5 = child(span_3);
		reset(span_3);
		reset(div_29);
		var div_30 = sibling(div_29, 2);
		var div_31 = child(div_30);
		MoneyDisplay(child(div_31), { get amount() {
			return get(pnlData).grossProfit;
		} });
		reset(div_31);
		var div_32 = sibling(div_31, 2);
		var span_4 = child(div_32);
		var text_6 = child(span_4);
		reset(span_4);
		var span_5 = sibling(span_4, 2);
		var text_7 = child(span_5);
		reset(span_5);
		reset(div_32);
		reset(div_30);
		reset(div_28);
		var div_33 = sibling(div_28, 2);
		var div_34 = child(div_33);
		Wallet(sibling(child(div_34), 2), { class: "h-4 w-4 text-rose-500" });
		reset(div_34);
		var div_35 = sibling(div_34, 2);
		var div_36 = child(div_35);
		MoneyDisplay(child(div_36), { get amount() {
			return get(pnlData).totalOperatingExpenses;
		} });
		reset(div_36);
		var div_37 = sibling(div_36, 2);
		var span_6 = child(div_37);
		var text_8 = child(span_6);
		reset(span_6);
		var span_7 = sibling(span_6, 2);
		var text_9 = child(span_7);
		reset(span_7);
		reset(div_37);
		reset(div_35);
		reset(div_33);
		var div_38 = sibling(div_33, 2);
		var div_39 = child(div_38);
		var span_8 = child(div_39);
		var text_10 = child(span_8, true);
		reset(span_8);
		var span_9 = sibling(span_8, 2);
		var text_11 = child(span_9);
		reset(span_9);
		reset(div_39);
		var div_40 = sibling(div_39, 2);
		var div_41 = child(div_40);
		MoneyDisplay(child(div_41), { get amount() {
			return get(pnlData).netProfit;
		} });
		reset(div_41);
		var div_42 = sibling(div_41, 2);
		var span_10 = child(div_42);
		var text_12 = child(span_10);
		reset(span_10);
		var span_11 = sibling(span_10, 2);
		var text_13 = child(span_11, true);
		reset(span_11);
		reset(div_42);
		reset(div_40);
		reset(div_38);
		reset(div_17);
		template_effect(($0, $1, $2, $3, $4, $5, $6, $7) => {
			set_text(text_2, `${$0 ?? ""} Bookings`);
			set_text(text_5, `${$1 ?? ""}%`);
			set_text(text_6, `Final: ${$2 ?? ""}`);
			set_text(text_7, `Est: ${$3 ?? ""}`);
			set_text(text_8, `Overheads: ${$4 ?? ""}`);
			set_text(text_9, `Payroll: ${$5 ?? ""}`);
			set_class(div_38, 1, `bg-card border border-border rounded-2xl p-4 shadow-2xs space-y-2 border-l-4 ${get(pnlData).isProfitable ? "border-l-emerald-500 bg-emerald-500/5" : "border-l-rose-500 bg-rose-500/5"}`, "svelte-wjvphc");
			set_class(span_8, 1, `text-[11px] font-bold uppercase tracking-wider ${get(pnlData).isProfitable ? "text-emerald-600" : "text-rose-600"}`);
			set_text(text_10, get(pnlData).isProfitable ? "Net Operating Profit" : "Net Operating Loss");
			set_class(span_9, 1, `text-xs font-bold font-mono ${get(pnlData).isProfitable ? "text-emerald-600 bg-emerald-500/10" : "text-rose-600 bg-rose-500/10"} px-1.5 py-0.5 rounded`);
			set_text(text_11, `${$6 ?? ""}%`);
			set_class(div_41, 1, `text-xl font-bold font-mono ${get(pnlData).isProfitable ? "text-emerald-600" : "text-rose-600"}`);
			set_class(span_10, 1, `font-semibold ${get(pnlData).finalizedNetProfit >= 0 ? "text-emerald-600" : "text-rose-600"}`);
			set_text(text_12, `Finalized Net: ${$7 ?? ""}`);
			set_text(text_13, get(pnlData).isProfitable ? "Surplus" : "Deficit");
		}, [
			() => get(pnlData).revenueItems.reduce((acc, x) => acc + x.bookingCount, 0),
			() => get(pnlData).grossMarginPercentage.toFixed(1),
			() => get(pnlData).finalizedGrossProfit.toFixed(3),
			() => get(pnlData).estimatedGrossProfit.toFixed(3),
			() => get(pnlData).totalApprovedExpenses.toFixed(3),
			() => get(pnlData).totalPayrollExpenses.toFixed(3),
			() => get(pnlData).netMarginPercentage.toFixed(1),
			() => get(pnlData).finalizedNetProfit.toFixed(3)
		]);
		append($$anchor, div_17);
	};
	if_block(node_13, ($$render) => {
		if (get(loading) && !get(pnlData)) $$render(consequent_1);
		else if (get(pnlData)) $$render(consequent_4, 1);
	});
	var div_43 = sibling(node_13, 2);
	var button_1 = child(div_43);
	Layers(child(button_1), { class: "h-4 w-4" });
	next(2);
	reset(button_1);
	var button_2 = sibling(button_1, 2);
	File_text(child(button_2), { class: "h-4 w-4" });
	next(2);
	reset(button_2);
	var button_3 = sibling(button_2, 2);
	Book_open(child(button_3), { class: "h-4 w-4" });
	next(2);
	reset(button_3);
	reset(div_43);
	var node_27 = sibling(div_43, 2);
	var consequent_8 = ($$anchor) => {
		var div_44 = root_15();
		var div_45 = child(div_44);
		var div_46 = sibling(child(div_45), 2);
		var text_14 = child(div_46);
		reset(div_46);
		reset(div_45);
		var div_47 = sibling(div_45, 2);
		var table = child(div_47);
		var tbody = sibling(child(table));
		var node_28 = child(tbody);
		var consequent_5 = ($$anchor) => {
			var fragment_4 = comment();
			each(first_child(fragment_4), 16, () => Array(7), index, ($$anchor, _) => {
				append($$anchor, root_11());
			});
			append($$anchor, fragment_4);
		};
		var consequent_6 = ($$anchor) => {
			var fragment_5 = comment();
			each(first_child(fragment_5), 17, () => get(pnlData).revenueItems, index, ($$anchor, srv) => {
				const IconComponent = user_derived(() => getServiceIcon(get(srv).serviceType));
				var tr_1 = root_12();
				var td = child(tr_1);
				var div_48 = child(td);
				component(child(div_48), () => get(IconComponent), ($$anchor, IconComponent_1) => {
					IconComponent_1($$anchor, { class: "h-3.5 w-3.5" });
				});
				reset(div_48);
				var span_12 = sibling(div_48, 2);
				var text_15 = child(span_12, true);
				reset(span_12);
				reset(td);
				var td_1 = sibling(td);
				var span_13 = child(td_1);
				var text_16 = child(span_13, true);
				reset(span_13);
				reset(td_1);
				var td_2 = sibling(td_1);
				MoneyDisplay(child(td_2), { get amount() {
					return get(srv).salesAmount;
				} });
				reset(td_2);
				var td_3 = sibling(td_2);
				MoneyDisplay(child(td_3), { get amount() {
					return get(srv).costAmount;
				} });
				reset(td_3);
				var td_4 = sibling(td_3);
				MoneyDisplay(child(td_4), { get amount() {
					return get(srv).profitAmount;
				} });
				reset(td_4);
				var td_5 = sibling(td_4);
				var span_14 = child(td_5);
				var text_17 = child(span_14, true);
				reset(span_14);
				reset(td_5);
				var td_6 = sibling(td_5);
				MoneyDisplay(child(td_6), { get amount() {
					return get(srv).finalProfitAmount;
				} });
				reset(td_6);
				reset(tr_1);
				template_effect(($0) => {
					set_text(text_15, get(srv).serviceLabel);
					set_text(text_16, get(srv).bookingCount);
					set_class(td_4, 1, `py-3 px-4 text-right font-mono font-bold ${get(srv).profitAmount >= 0 ? "text-teal-600" : "text-rose-600"}`);
					set_class(span_14, 1, `px-2 py-0.5 rounded text-[11px] font-bold ${get(srv).marginPercentage >= 30 ? "bg-emerald-500/10 text-emerald-600" : get(srv).marginPercentage > 0 ? "bg-amber-500/10 text-amber-600" : "bg-muted text-muted-foreground"}`);
					set_text(text_17, $0);
				}, [() => get(srv).salesAmount > 0 ? `${get(srv).marginPercentage.toFixed(1)}%` : "—"]);
				append($$anchor, tr_1);
			});
			append($$anchor, fragment_5);
		};
		var alternate = ($$anchor) => {
			append($$anchor, root_13());
		};
		if_block(node_28, ($$render) => {
			if (get(loading) && !get(pnlData)) $$render(consequent_5);
			else if (get(pnlData) && get(pnlData).revenueItems.length > 0) $$render(consequent_6, 1);
			else $$render(alternate, -1);
		});
		reset(tbody);
		var node_36 = sibling(tbody);
		var consequent_7 = ($$anchor) => {
			var tfoot = root_14();
			var tr_3 = child(tfoot);
			var td_7 = sibling(child(tr_3));
			var text_18 = child(td_7, true);
			reset(td_7);
			var td_8 = sibling(td_7);
			MoneyDisplay(child(td_8), { get amount() {
				return get(pnlData).grossBookingRevenue;
			} });
			reset(td_8);
			var td_9 = sibling(td_8);
			MoneyDisplay(child(td_9), { get amount() {
				return get(pnlData).grossSupplierCost;
			} });
			reset(td_9);
			var td_10 = sibling(td_9);
			var node_39 = child(td_10);
			{
				let $0 = user_derived(() => get(pnlData).grossProfit + get(pnlData).approvedSalesReturns - get(pnlData).approvedPurchaseReturns);
				MoneyDisplay(node_39, { get amount() {
					return get($0);
				} });
			}
			reset(td_10);
			var td_11 = sibling(td_10);
			var text_19 = child(td_11, true);
			reset(td_11);
			var td_12 = sibling(td_11);
			MoneyDisplay(child(td_12), { get amount() {
				return get(pnlData).finalizedGrossProfit;
			} });
			reset(td_12);
			reset(tr_3);
			reset(tfoot);
			template_effect(($0, $1) => {
				set_text(text_18, $0);
				set_text(text_19, $1);
			}, [() => get(pnlData).revenueItems.reduce((acc, x) => acc + x.bookingCount, 0), () => get(pnlData).grossBookingRevenue > 0 ? `${Math.round((get(pnlData).grossProfit + get(pnlData).approvedSalesReturns - get(pnlData).approvedPurchaseReturns) / get(pnlData).grossBookingRevenue * 100).toFixed(1)}%` : "—"]);
			append($$anchor, tfoot);
		};
		if_block(node_36, ($$render) => {
			if (get(pnlData)) $$render(consequent_7);
		});
		reset(table);
		reset(div_47);
		reset(div_44);
		template_effect(() => set_text(text_14, `Period: ${(get(startDate) || "—") ?? ""} → ${(get(endDate) || "—") ?? ""}`));
		append($$anchor, div_44);
	};
	if_block(node_27, ($$render) => {
		if (get(activeTab) === "performance") $$render(consequent_8);
	});
	var node_41 = sibling(node_27, 2);
	var consequent_21 = ($$anchor) => {
		var div_49 = root_30();
		var div_50 = child(div_49);
		var div_51 = sibling(child(div_50), 2);
		var text_20 = child(div_51);
		reset(div_51);
		reset(div_50);
		var node_42 = sibling(div_50, 2);
		var consequent_9 = ($$anchor) => {
			var div_52 = root_17();
			each(div_52, 20, () => Array(6), index, ($$anchor, _) => {
				append($$anchor, root_16());
			});
			reset(div_52);
			append($$anchor, div_52);
		};
		var consequent_20 = ($$anchor) => {
			var div_54 = root_29();
			var div_55 = child(div_54);
			var button_4 = child(div_55);
			var div_56 = child(button_4);
			var node_43 = child(div_56);
			var consequent_10 = ($$anchor) => {
				Chevron_down($$anchor, { class: "h-4 w-4 text-muted-foreground" });
			};
			var alternate_1 = ($$anchor) => {
				Chevron_right($$anchor, { class: "h-4 w-4 text-muted-foreground" });
			};
			if_block(node_43, ($$render) => {
				if (get(showRevenueDetails)) $$render(consequent_10);
				else $$render(alternate_1, -1);
			});
			next(2);
			reset(div_56);
			var span_15 = sibling(div_56, 2);
			MoneyDisplay(child(span_15), { get amount() {
				return get(pnlData).netRevenue;
			} });
			reset(span_15);
			reset(button_4);
			var node_45 = sibling(button_4, 2);
			var consequent_12 = ($$anchor) => {
				var div_57 = root_20();
				var node_46 = child(div_57);
				each(node_46, 17, () => get(pnlData).revenueItems, index, ($$anchor, rev) => {
					var div_58 = root_18();
					var span_16 = child(div_58);
					var text_21 = sibling(child(span_16));
					reset(span_16);
					var span_17 = sibling(span_16, 2);
					MoneyDisplay(child(span_17), { get amount() {
						return get(rev).salesAmount;
					} });
					reset(span_17);
					reset(div_58);
					template_effect(() => set_text(text_21, ` Booking Revenue — ${get(rev).serviceLabel ?? ""} (${get(rev).bookingCount ?? ""} bookings)`));
					append($$anchor, div_58);
				});
				var node_48 = sibling(node_46, 2);
				var consequent_11 = ($$anchor) => {
					var div_59 = root_19();
					var span_18 = sibling(child(div_59), 2);
					MoneyDisplay(sibling(child(span_18)), { get amount() {
						return get(pnlData).approvedSalesReturns;
					} });
					reset(span_18);
					reset(div_59);
					append($$anchor, div_59);
				};
				if_block(node_48, ($$render) => {
					if (get(pnlData).approvedSalesReturns > 0) $$render(consequent_11);
				});
				var div_60 = sibling(node_48, 2);
				var span_19 = sibling(child(div_60), 2);
				MoneyDisplay(child(span_19), { get amount() {
					return get(pnlData).netRevenue;
				} });
				reset(span_19);
				reset(div_60);
				reset(div_57);
				append($$anchor, div_57);
			};
			if_block(node_45, ($$render) => {
				if (get(showRevenueDetails)) $$render(consequent_12);
			});
			reset(div_55);
			var div_61 = sibling(div_55, 2);
			var button_5 = child(div_61);
			var div_62 = child(button_5);
			var node_51 = child(div_62);
			var consequent_13 = ($$anchor) => {
				Chevron_down($$anchor, { class: "h-4 w-4 text-muted-foreground" });
			};
			var alternate_2 = ($$anchor) => {
				Chevron_right($$anchor, { class: "h-4 w-4 text-muted-foreground" });
			};
			if_block(node_51, ($$render) => {
				if (get(showCostDetails)) $$render(consequent_13);
				else $$render(alternate_2, -1);
			});
			next(2);
			reset(div_62);
			var span_20 = sibling(div_62, 2);
			MoneyDisplay(child(span_20), { get amount() {
				return get(pnlData).netCostOfSales;
			} });
			reset(span_20);
			reset(button_5);
			var node_53 = sibling(button_5, 2);
			var consequent_15 = ($$anchor) => {
				var div_63 = root_23();
				var node_54 = child(div_63);
				each(node_54, 17, () => get(pnlData).costOfSalesItems, index, ($$anchor, cost) => {
					var div_64 = root_21();
					var span_21 = child(div_64);
					var text_22 = sibling(child(span_21));
					reset(span_21);
					var span_22 = sibling(span_21, 2);
					MoneyDisplay(child(span_22), { get amount() {
						return get(cost).costAmount;
					} });
					reset(span_22);
					reset(div_64);
					template_effect(() => set_text(text_22, ` Supplier Cost — ${get(cost).serviceLabel ?? ""}`));
					append($$anchor, div_64);
				});
				var node_56 = sibling(node_54, 2);
				var consequent_14 = ($$anchor) => {
					var div_65 = root_22();
					var span_23 = sibling(child(div_65), 2);
					MoneyDisplay(sibling(child(span_23)), { get amount() {
						return get(pnlData).approvedPurchaseReturns;
					} });
					reset(span_23);
					reset(div_65);
					append($$anchor, div_65);
				};
				if_block(node_56, ($$render) => {
					if (get(pnlData).approvedPurchaseReturns > 0) $$render(consequent_14);
				});
				var div_66 = sibling(node_56, 2);
				var span_24 = sibling(child(div_66), 2);
				MoneyDisplay(child(span_24), { get amount() {
					return get(pnlData).netCostOfSales;
				} });
				reset(span_24);
				reset(div_66);
				reset(div_63);
				append($$anchor, div_63);
			};
			if_block(node_53, ($$render) => {
				if (get(showCostDetails)) $$render(consequent_15);
			});
			reset(div_61);
			var div_67 = sibling(div_61, 2);
			var div_68 = child(div_67);
			var h4 = sibling(child(div_68), 2);
			MoneyDisplay(child(h4), { get amount() {
				return get(pnlData).grossProfit;
			} });
			reset(h4);
			var p_2 = sibling(h4, 2);
			var strong = sibling(child(p_2));
			var text_23 = child(strong);
			reset(strong);
			var text_24 = sibling(strong);
			reset(p_2);
			reset(div_68);
			var div_69 = sibling(div_68, 2);
			var div_70 = child(div_69);
			var strong_1 = sibling(child(div_70));
			var text_25 = child(strong_1);
			reset(strong_1);
			reset(div_70);
			var div_71 = sibling(div_70, 2);
			var strong_2 = sibling(child(div_71));
			var text_26 = child(strong_2);
			reset(strong_2);
			reset(div_71);
			reset(div_69);
			reset(div_67);
			var div_72 = sibling(div_67, 2);
			var button_6 = child(div_72);
			var div_73 = child(button_6);
			var node_60 = child(div_73);
			var consequent_16 = ($$anchor) => {
				Chevron_down($$anchor, { class: "h-4 w-4 text-muted-foreground" });
			};
			var alternate_3 = ($$anchor) => {
				Chevron_right($$anchor, { class: "h-4 w-4 text-muted-foreground" });
			};
			if_block(node_60, ($$render) => {
				if (get(showExpenseDetails)) $$render(consequent_16);
				else $$render(alternate_3, -1);
			});
			next(2);
			reset(div_73);
			var span_25 = sibling(div_73, 2);
			MoneyDisplay(child(span_25), { get amount() {
				return get(pnlData).totalOperatingExpenses;
			} });
			reset(span_25);
			reset(button_6);
			var node_62 = sibling(button_6, 2);
			var consequent_19 = ($$anchor) => {
				var div_74 = root_28();
				var node_63 = child(div_74);
				var consequent_17 = ($$anchor) => {
					append($$anchor, root_24());
				};
				var alternate_4 = ($$anchor) => {
					var fragment_12 = root_27();
					var node_64 = first_child(fragment_12);
					each(node_64, 17, () => get(pnlData).expenseItems, index, ($$anchor, exp) => {
						var div_76 = root_25();
						var span_26 = child(div_76);
						var text_27 = sibling(child(span_26));
						reset(span_26);
						var span_27 = sibling(span_26, 2);
						MoneyDisplay(child(span_27), { get amount() {
							return get(exp).totalAmount;
						} });
						reset(span_27);
						reset(div_76);
						template_effect(() => set_text(text_27, ` Operating Expense — ${get(exp).categoryName ?? ""} (${get(exp).expenseCount ?? ""} claims)`));
						append($$anchor, div_76);
					});
					var node_66 = sibling(node_64, 2);
					var consequent_18 = ($$anchor) => {
						var div_77 = root_26();
						var span_28 = sibling(child(div_77), 2);
						MoneyDisplay(child(span_28), { get amount() {
							return get(pnlData).totalPayrollExpenses;
						} });
						reset(span_28);
						reset(div_77);
						append($$anchor, div_77);
					};
					if_block(node_66, ($$render) => {
						if (get(pnlData).totalPayrollExpenses > 0) $$render(consequent_18);
					});
					append($$anchor, fragment_12);
				};
				if_block(node_63, ($$render) => {
					if (get(pnlData).expenseItems.length === 0 && get(pnlData).totalPayrollExpenses === 0) $$render(consequent_17);
					else $$render(alternate_4, -1);
				});
				var div_78 = sibling(node_63, 2);
				var span_29 = sibling(child(div_78), 2);
				MoneyDisplay(child(span_29), { get amount() {
					return get(pnlData).totalOperatingExpenses;
				} });
				reset(span_29);
				reset(div_78);
				reset(div_74);
				append($$anchor, div_74);
			};
			if_block(node_62, ($$render) => {
				if (get(showExpenseDetails)) $$render(consequent_19);
			});
			reset(div_72);
			var div_79 = sibling(div_72, 2);
			var div_80 = child(div_79);
			var h3 = sibling(child(div_80), 2);
			var text_28 = child(h3);
			MoneyDisplay(sibling(text_28), { get amount() {
				return get(pnlData).netProfit;
			} });
			reset(h3);
			var p_3 = sibling(h3, 2);
			var strong_3 = sibling(child(p_3));
			var text_29 = child(strong_3);
			reset(strong_3);
			var text_30 = sibling(strong_3);
			reset(p_3);
			reset(div_80);
			var div_81 = sibling(div_80, 2);
			var div_82 = child(div_81);
			var strong_4 = sibling(child(div_82), 2);
			var text_31 = child(strong_4);
			reset(strong_4);
			reset(div_82);
			var div_83 = sibling(div_82, 2);
			var strong_5 = sibling(child(div_83), 2);
			var text_32 = child(strong_5);
			reset(strong_5);
			reset(div_83);
			reset(div_81);
			reset(div_79);
			reset(div_54);
			template_effect(($0, $1, $2, $3, $4, $5, $6, $7, $8, $9) => {
				set_text(text_23, `${$0 ?? ""}%`);
				set_text(text_24, ` (Revenue: ${$1 ?? ""} - COGS: ${$2 ?? ""})`);
				set_text(text_25, `${$3 ?? ""} BHD`);
				set_text(text_26, `${$4 ?? ""} BHD`);
				set_class(div_79, 1, `p-6 rounded-2xl border-2 ${get(pnlData).isProfitable ? "bg-emerald-500/10 border-emerald-500/40 text-emerald-950" : "bg-rose-500/10 border-rose-500/40 text-rose-950"} flex flex-col md:flex-row md:items-center justify-between gap-4`);
				set_class(h3, 1, `text-2xl font-bold font-mono ${get(pnlData).isProfitable ? "text-emerald-600" : "text-rose-600"}`);
				set_text(text_28, `${get(pnlData).isProfitable ? "NET OPERATING PROFIT:" : "NET OPERATING LOSS:"} `);
				set_class(strong_3, 1, `font-mono ${get(pnlData).isProfitable ? "text-emerald-600" : "text-rose-600"}`);
				set_text(text_29, `${$5 ?? ""}%`);
				set_text(text_30, ` (Gross Profit ${$6 ?? ""} - Operating Expenses ${$7 ?? ""})`);
				set_class(strong_4, 1, clsx(get(pnlData).finalizedNetProfit >= 0 ? "text-emerald-600" : "text-rose-600"));
				set_text(text_31, `${$8 ?? ""} BHD`);
				set_text(text_32, `${$9 ?? ""}%`);
			}, [
				() => get(pnlData).grossMarginPercentage.toFixed(1),
				() => get(pnlData).netRevenue.toFixed(3),
				() => get(pnlData).netCostOfSales.toFixed(3),
				() => get(pnlData).finalizedGrossProfit.toFixed(3),
				() => get(pnlData).estimatedGrossProfit.toFixed(3),
				() => get(pnlData).netMarginPercentage.toFixed(1),
				() => get(pnlData).grossProfit.toFixed(3),
				() => get(pnlData).totalOperatingExpenses.toFixed(3),
				() => get(pnlData).finalizedNetProfit.toFixed(3),
				() => get(pnlData).finalizedNetMarginPercentage.toFixed(1)
			]);
			delegated("click", button_4, () => set(showRevenueDetails, !get(showRevenueDetails)));
			delegated("click", button_5, () => set(showCostDetails, !get(showCostDetails)));
			delegated("click", button_6, () => set(showExpenseDetails, !get(showExpenseDetails)));
			append($$anchor, div_54);
		};
		if_block(node_42, ($$render) => {
			if (get(loading) && !get(pnlData)) $$render(consequent_9);
			else if (get(pnlData)) $$render(consequent_20, 1);
		});
		reset(div_49);
		template_effect(() => set_text(text_20, `Period: ${(get(startDate) || "—") ?? ""} → ${(get(endDate) || "—") ?? ""}`));
		append($$anchor, div_49);
	};
	if_block(node_41, ($$render) => {
		if (get(activeTab) === "statement") $$render(consequent_21);
	});
	var node_70 = sibling(node_41, 2);
	var consequent_22 = ($$anchor) => {
		var div_84 = root_33();
		var div_85 = child(div_84);
		var h3_1 = child(div_85);
		Book_open(child(h3_1), { class: "h-5 w-5 text-primary" });
		next();
		reset(h3_1);
		next(2);
		reset(div_85);
		var div_86 = sibling(div_85, 2);
		var div_87 = child(div_86);
		Circle_alert(child(div_87), { class: "h-4 w-4" });
		next(2);
		reset(div_87);
		next(2);
		reset(div_86);
		var div_88 = sibling(div_86, 2);
		var node_73 = child(div_88);
		Button(node_73, {
			variant: "default",
			size: "sm",
			onclick: () => goto("/accounting/ledger"),
			class: "h-9 gap-1.5 rounded-xl cursor-pointer",
			children: ($$anchor, $$slotProps) => {
				var fragment_13 = root_31();
				Arrow_right(sibling(first_child(fragment_13), 2), { class: "h-3.5 w-3.5" });
				append($$anchor, fragment_13);
			},
			$$slots: { default: true }
		});
		Button(sibling(node_73, 2), {
			variant: "outline",
			size: "sm",
			onclick: () => goto("/accounting/chart-of-accounts"),
			class: "h-9 gap-1.5 rounded-xl cursor-pointer",
			children: ($$anchor, $$slotProps) => {
				var fragment_14 = root_32();
				External_link(sibling(first_child(fragment_14), 2), { class: "h-3.5 w-3.5" });
				append($$anchor, fragment_14);
			},
			$$slots: { default: true }
		});
		reset(div_88);
		reset(div_84);
		append($$anchor, div_84);
	};
	if_block(node_70, ($$render) => {
		if (get(activeTab) === "gl") $$render(consequent_22);
	});
	var node_77 = sibling(node_70, 2);
	var consequent_24 = ($$anchor) => {
		var div_89 = root_36();
		var div_90 = child(div_89);
		var node_78 = child(div_90);
		var consequent_23 = ($$anchor) => {
			var fragment_15 = root_34();
			var div_91 = first_child(fragment_15);
			Shield_check(child(div_91), { class: "h-4 w-4" });
			reset(div_91);
			next(2);
			append($$anchor, fragment_15);
		};
		var alternate_5 = ($$anchor) => {
			var fragment_16 = root_35();
			var div_92 = first_child(fragment_16);
			Circle_alert(child(div_92), { class: "h-4 w-4" });
			reset(div_92);
			var div_93 = sibling(div_92, 2);
			var p_4 = sibling(child(div_93), 2);
			var text_33 = child(p_4, true);
			reset(p_4);
			reset(div_93);
			template_effect(() => set_text(text_33, get(pnlData).reconciliationMessage));
			append($$anchor, fragment_16);
		};
		if_block(node_78, ($$render) => {
			if (get(pnlData).reconciled) $$render(consequent_23);
			else $$render(alternate_5, -1);
		});
		reset(div_90);
		var div_94 = sibling(div_90, 2);
		var div_95 = child(div_94);
		var text_34 = child(div_95);
		reset(div_95);
		var div_96 = sibling(div_95, 2);
		var text_35 = child(div_96);
		reset(div_96);
		reset(div_94);
		reset(div_89);
		template_effect(($0) => {
			set_text(text_34, `Data Sources: ${get(pnlData).dataSourcesStatus ?? ""}`);
			set_text(text_35, `Generated At: ${$0 ?? ""}`);
		}, [() => new Date(get(pnlData).generatedAt).toLocaleString()]);
		append($$anchor, div_89);
	};
	if_block(node_77, ($$render) => {
		if (get(pnlData)) $$render(consequent_24);
	});
	reset(div);
	template_effect(() => {
		set_class(button_1, 1, `px-4 py-2.5 border-b-2 transition-all cursor-pointer flex items-center gap-2 shrink-0 whitespace-nowrap ${get(activeTab) === "performance" ? "border-primary text-primary font-bold" : "border-transparent text-muted-foreground hover:text-foreground"}`, "svelte-wjvphc");
		set_class(button_2, 1, `px-4 py-2.5 border-b-2 transition-all cursor-pointer flex items-center gap-2 shrink-0 whitespace-nowrap ${get(activeTab) === "statement" ? "border-primary text-primary font-bold" : "border-transparent text-muted-foreground hover:text-foreground"}`, "svelte-wjvphc");
		set_class(button_3, 1, `px-4 py-2.5 border-b-2 transition-all cursor-pointer flex items-center gap-2 shrink-0 whitespace-nowrap ${get(activeTab) === "gl" ? "border-primary text-primary font-bold" : "border-transparent text-muted-foreground hover:text-foreground"}`, "svelte-wjvphc");
	});
	delegated("change", input, handleCustomDateApply);
	bind_value(input, () => get(startDate), ($$value) => set(startDate, $$value));
	delegated("change", input_1, handleCustomDateApply);
	bind_value(input_1, () => get(endDate), ($$value) => set(endDate, $$value));
	delegated("click", button_1, () => set(activeTab, "performance"));
	delegated("click", button_2, () => set(activeTab, "statement"));
	delegated("click", button_3, () => set(activeTab, "gl"));
	append($$anchor, div);
	pop();
}
delegate(["click", "change"]);
//#endregion
export { _page as component };

import { A as component, B as append, Bt as reset, Ct as user_derived, H as from_html, I as if_block, K as delegate, N as each, Nt as pop, P as index, Pt as push, Q as get, R as set_text, T as clsx, V as comment, bt as state, g as remove_input_defaults, gt as proxy, ht as sibling, m as bind_value, mt as first_child, ot as template_effect, pt as child, q as delegated, r as onMount, vt as set, w as set_class, zt as next } from "../chunks/dXkmWTgM.js";
import "../chunks/DhaYE-8x.js";
import { t as apiFetch } from "../chunks/BjkPoo3P.js";
import { r as toast } from "../chunks/CbPRQHfn.js";
import { t as Briefcase } from "../chunks/DMJEmKtH.js";
import { t as Building_2 } from "../chunks/PAfPMPpZ.js";
import { t as Calendar } from "../chunks/DxFQ7Qxv.js";
import { n as Car, t as Plane } from "../chunks/DG-SfabB.js";
import { t as Chart_column } from "../chunks/7SHXTl2V2.js";
import { t as Chevron_down } from "../chunks/Dj1p1QvC2.js";
import { t as Chevron_right } from "../chunks/BQLzQDdY2.js";
import { t as Circle_alert } from "../chunks/CHXThoj_2.js";
import { t as Clock } from "../chunks/CZu1L_RP2.js";
import { t as Compass } from "../chunks/CZmkKFe42.js";
import { t as File_down } from "../chunks/btBW28nf2.js";
import { t as File_spreadsheet } from "../chunks/B4BvDHOF2.js";
import { t as File_text } from "../chunks/NLRKrZbo2.js";
import { t as Layers } from "../chunks/CFg-aOba.js";
import { t as Refresh_cw } from "../chunks/DpTJy0Wb.js";
import { t as X } from "../chunks/wXHc9RNY.js";
import { o as getBahrainDateString } from "../chunks/Cu8_Vl4p2.js";
import { t as Button } from "../chunks/BhXsq3bC2.js";
import { t as MoneyDisplay } from "../chunks/CIVSRuaR2.js";
import { t as exportToCSV } from "../chunks/C74Z4VDd2.js";
import { t as previewDocument } from "../chunks/DRyETy4s2.js";
//#region src/routes/(app)/reports/profit-loss/+page.svelte
var root = from_html(`<!> <span>Refresh</span>`, 1);
var root_1 = from_html(`<span class="px-2.5 py-0.5 rounded-md bg-primary/10 text-primary font-mono text-[11px] font-semibold"> </span>`);
var root_2 = from_html(`<span class="px-2.5 py-0.5 rounded-md bg-muted text-muted-foreground font-mono text-[11px]">All Time</span>`);
var root_3 = from_html(`<!> <span>Clear Dates</span>`, 1);
var root_4 = from_html(`<!> <span>Retry</span>`, 1);
var root_5 = from_html(`<div class="p-4 rounded-2xl bg-destructive/10 border border-destructive/20 text-destructive flex flex-col sm:flex-row items-center justify-between gap-4 text-xs shadow-xs"><div class="flex items-center gap-2.5"><!> <div><h3 class="font-bold">Failed to generate Profit & Loss Report</h3> <p class="opacity-90 mt-0.5"> </p></div></div> <!></div>`);
var root_6 = from_html(`<div class="h-24 bg-muted rounded-2xl"></div>`);
var root_7 = from_html(`<div class="animate-pulse space-y-6"><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5"></div> <div class="h-96 bg-muted rounded-2xl"></div></div>`);
var root_8 = from_html(`<span class="text-rose-500 font-mono"> </span>`);
var root_9 = from_html(`<span class="text-muted-foreground/70">Inflow</span>`);
var root_10 = from_html(`<span class="text-emerald-600 font-mono"> </span>`);
var root_11 = from_html(`<span class="text-muted-foreground/70">Direct Costs</span>`);
var root_12 = from_html(`<span class="text-muted-foreground/80 font-mono"> </span>`);
var root_13 = from_html(`<!> <span>CSV</span>`, 1);
var root_14 = from_html(`<!> <span>PDF</span>`, 1);
var root_15 = from_html(`<span class="text-muted-foreground/40">—</span>`);
var root_16 = from_html(`<tr class="hover:bg-muted/10 transition-colors"><td class="p-4 font-medium text-foreground"><div class="flex items-center gap-2"><div class="p-1.5 rounded-lg bg-primary/10 text-primary"><!></div> <span class="font-bold text-foreground"> </span></div></td><td class="p-4 text-center font-mono font-bold text-foreground"> </td><td class="p-4 text-right font-mono font-bold text-foreground"><!></td><td class="p-4 text-right font-mono text-muted-foreground"><!></td><td class="p-4 text-right font-mono font-bold text-teal-600 dark:text-teal-400"><!></td><td class="p-4 text-center font-mono"><span> </span></td><td class="p-4 text-right font-mono text-muted-foreground"><!></td></tr>`);
var root_17 = from_html(`<tr><td colspan="7" class="p-12 text-center text-muted-foreground">No booking financial records found in the selected date range.</td></tr>`);
var root_18 = from_html(`<div class="bg-card border border-border rounded-2xl overflow-hidden shadow-xs svelte-wjvphc"><div class="overflow-x-auto"><table class="w-full min-w-[750px] text-left border-collapse text-xs"><thead><tr class="bg-muted/30 border-b border-border text-muted-foreground font-semibold"><th class="p-4">Service</th><th class="p-4 text-center">Bookings</th><th class="p-4 text-right">Sales Value</th><th class="p-4 text-right">Supplier Cost</th><th class="p-4 text-right">Final Profit</th><th class="p-4 text-center">Margin %</th><th class="p-4 text-right">Open Deals Est.</th></tr></thead><tbody class="divide-y divide-border/60"><!></tbody><tfoot class="bg-muted/40 border-t-2 border-border font-bold text-xs"><tr><td class="p-4 uppercase text-foreground">Totals Across Services</td><td class="p-4 text-center font-mono text-foreground font-bold"> </td><td class="p-4 text-right font-mono text-foreground font-bold"><!></td><td class="p-4 text-right font-mono text-muted-foreground font-bold"><!></td><td class="p-4 text-right font-mono text-teal-600 dark:text-teal-400 font-bold"><!></td><td class="p-4 text-center font-mono text-teal-600 dark:text-teal-400 font-bold"> </td><td class="p-4 text-right font-mono text-muted-foreground font-bold"><!></td></tr></tfoot></table></div></div>`);
var root_19 = from_html(`<div class="pt-2 flex items-center justify-between hover:bg-muted/10 px-2 rounded-lg"><span class="text-muted-foreground flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-blue-500"></span> </span> <span class="font-mono font-bold text-foreground"><!></span></div>`);
var root_20 = from_html(`<div class="pt-2 flex items-center justify-between text-rose-500 font-medium px-2"><span class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-rose-500"></span> Less: Approved Sales Returns & Customer Refunds</span> <span class="font-mono font-bold">-<!></span></div>`);
var root_21 = from_html(`<div class="p-4 space-y-2 divide-y divide-border/40"><!> <!> <div class="pt-3 flex items-center justify-between font-bold text-foreground text-xs px-2 bg-muted/20 py-2 rounded-lg"><span>Total Net Operating Revenue</span> <span class="font-mono font-bold"><!></span></div></div>`);
var root_22 = from_html(`<div class="pt-2 flex items-center justify-between hover:bg-muted/10 px-2 rounded-lg"><span class="text-muted-foreground flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-amber-500"></span> </span> <span class="font-mono font-bold text-foreground"><!></span></div>`);
var root_23 = from_html(`<div class="pt-2 flex items-center justify-between text-emerald-600 font-medium px-2"><span class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-emerald-500"></span> Less: Approved Purchase Returns (Supplier Credits)</span> <span class="font-mono font-bold">-<!></span></div>`);
var root_24 = from_html(`<div class="p-4 space-y-2 divide-y divide-border/40"><!> <!> <div class="pt-3 flex items-center justify-between font-bold text-foreground text-xs px-2 bg-muted/20 py-2 rounded-lg"><span>Total Cost of Goods Sold (COGS)</span> <span class="font-mono font-bold"><!></span></div></div>`);
var root_25 = from_html(`<div class="text-muted-foreground">Estimated Profit (Open Deals): <strong> </strong></div>`);
var root_26 = from_html(`<div class="py-4 text-center text-muted-foreground text-xs">No operational expenses or salary payouts recorded in this period.</div>`);
var root_27 = from_html(`<div class="pt-2 flex items-center justify-between hover:bg-muted/10 px-2 rounded-lg"><span class="text-muted-foreground flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-rose-500"></span> </span> <span class="font-mono font-bold text-foreground"><!></span></div>`);
var root_28 = from_html(`<div class="pt-2 flex items-center justify-between hover:bg-muted/10 px-2 rounded-lg"><span class="text-muted-foreground flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-indigo-500"></span> Staff Salaries, Allowances & Commissions (Payroll)</span> <span class="font-mono font-bold text-foreground"><!></span></div>`);
var root_29 = from_html(`<!> <!>`, 1);
var root_30 = from_html(`<div class="p-4 space-y-2 divide-y divide-border/40"><!> <div class="pt-3 flex items-center justify-between font-bold text-foreground text-xs px-2 bg-muted/20 py-2 rounded-lg"><span>Total Operating Expenses</span> <span class="font-mono font-bold"><!></span></div></div>`);
var root_31 = from_html(`<div class="bg-card border border-border rounded-2xl shadow-xs overflow-hidden p-5 space-y-5 svelte-wjvphc"><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/60 pb-3"><div><h3 class="text-sm font-bold text-foreground">Operational Income Statement</h3> <p class="text-xs text-muted-foreground">Cascading formal financial breakdown from Gross Revenue to Net Operating Profit.</p></div> <div class="text-xs text-muted-foreground font-mono bg-muted/40 px-2.5 py-1 rounded-lg border border-border/40"> </div></div> <div class="space-y-4 text-xs"><div class="border border-border rounded-2xl overflow-hidden shadow-xs"><button type="button" class="w-full px-4 py-3 bg-muted/20 hover:bg-muted/30 transition-colors flex items-center justify-between cursor-pointer border-b border-border/80 svelte-wjvphc"><div class="flex items-center gap-2"><!> <span class="font-bold text-xs uppercase tracking-wider text-foreground">1. Operating Revenue (Gross Sales)</span></div> <span class="font-mono font-bold text-foreground"><!></span></button> <!></div> <div class="border border-border rounded-2xl overflow-hidden shadow-xs"><button type="button" class="w-full px-4 py-3 bg-muted/20 hover:bg-muted/30 transition-colors flex items-center justify-between cursor-pointer border-b border-border/80 svelte-wjvphc"><div class="flex items-center gap-2"><!> <span class="font-bold text-xs uppercase tracking-wider text-foreground">2. Cost of Sales (Direct Supplier Costs)</span></div> <span class="font-mono font-bold text-foreground"><!></span></button> <!></div> <div class="p-4 rounded-2xl bg-card border border-border shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 svelte-wjvphc"><div class="space-y-0.5"><span class="text-[11px] font-bold text-muted-foreground uppercase tracking-wider block">Gross Trading Margin (Finalized)</span> <h4 class="text-lg font-bold font-mono text-teal-600 dark:text-teal-400"><!></h4> <p class="text-[11px] text-muted-foreground">Finalized Margin: <strong class="font-mono text-teal-600 dark:text-teal-400"> </strong> </p></div> <div class="text-xs font-mono space-y-1 sm:text-right"><div class="text-teal-600 dark:text-teal-400 font-bold">Finalized Profit (Closed Deals): <strong> </strong></div> <!></div></div> <div class="border border-border rounded-2xl overflow-hidden shadow-xs"><button type="button" class="w-full px-4 py-3 bg-muted/20 hover:bg-muted/30 transition-colors flex items-center justify-between cursor-pointer border-b border-border/80 svelte-wjvphc"><div class="flex items-center gap-2"><!> <span class="font-bold text-xs uppercase tracking-wider text-foreground">3. Operating Expenses (Overheads & Payroll)</span></div> <span class="font-mono font-bold text-foreground"><!></span></button> <!></div> <div><div class="space-y-1"><span>Bottom Line Result (Finalized)</span> <h3> <!></h3> <p class="text-xs text-muted-foreground">Net Profit Margin: <strong> </strong> </p></div> <div class="bg-card p-3 rounded-xl border border-border text-xs space-y-1 font-mono shadow-xs svelte-wjvphc"><div class="flex justify-between gap-4"><span class="text-muted-foreground">Finalized Net Profit:</span> <strong> </strong></div> <div class="flex justify-between gap-4"><span class="text-muted-foreground">Finalized Margin:</span> <strong> </strong></div></div></div></div></div>`);
var root_32 = from_html(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5"><div class="bg-card border border-border rounded-2xl p-4 shadow-xs space-y-1 svelte-wjvphc"><div class="flex items-center justify-between"><span class="text-[11px] font-bold text-muted-foreground uppercase tracking-wider block">Operating Revenue</span> <span class="text-[10px] font-mono text-muted-foreground"> </span></div> <span class="text-lg font-bold font-mono text-foreground block"><!></span> <div class="text-[10px] text-muted-foreground flex items-center justify-between"><span>Gross Sales</span> <!></div></div> <div class="bg-card border border-border rounded-2xl p-4 shadow-xs space-y-1 svelte-wjvphc"><span class="text-[11px] font-bold text-muted-foreground uppercase tracking-wider block">Cost of Sales (COGS)</span> <span class="text-lg font-bold font-mono text-foreground block"><!></span> <div class="text-[10px] text-muted-foreground flex items-center justify-between"><span>Supplier Buying Costs</span> <!></div></div> <div class="bg-card border border-border rounded-2xl p-4 shadow-xs space-y-1 svelte-wjvphc"><div class="flex items-center justify-between"><div class="flex items-center gap-1"><span class="text-[11px] font-bold text-muted-foreground uppercase tracking-wider block">Final Profit</span> <span class="text-[10px] text-muted-foreground/70 cursor-help" title="Realized profit from confirmed/completed accounts profit records">ⓘ</span></div> <span class="text-[10px] font-bold font-mono text-teal-600 dark:text-teal-400 bg-teal-500/10 px-1.5 py-0.5 rounded"> </span></div> <span class="text-lg font-bold font-mono text-teal-600 dark:text-teal-400 block"><!></span> <div class="text-[10px] text-muted-foreground flex items-center justify-between"><span>Realized Margin</span> <!></div></div> <div class="bg-card border border-border rounded-2xl p-4 shadow-xs space-y-1 svelte-wjvphc"><span class="text-[11px] font-bold text-muted-foreground uppercase tracking-wider block">Operating Expenses</span> <span class="text-lg font-bold font-mono text-foreground block"><!></span> <div class="text-[10px] text-muted-foreground flex items-center justify-between"><span> </span> <span> </span></div></div> <div class="bg-card border border-border rounded-2xl p-4 shadow-xs space-y-1 svelte-wjvphc"><div class="flex items-center justify-between"><span> </span> <span> </span></div> <span><!></span> <div class="text-[10px] text-muted-foreground flex items-center justify-between"><span>Bottom Line</span> <span> </span></div></div></div> <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-border/60 pb-3"><div class="flex items-center gap-1 bg-muted/40 rounded-xl p-1 border border-border/50"><button type="button"><!> <span>Service Performance Table</span></button> <button type="button"><!> <span>Income Statement View</span></button></div> <div class="flex items-center gap-2 text-xs"><!> <!></div></div> <!> <!>`, 1);
var root_33 = from_html(`<div class="space-y-6"><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"><div class="flex flex-col gap-1"><h1 class="text-xl font-bold text-foreground flex items-center gap-2"><!> Operational Profit & Loss Report</h1> <p class="text-xs text-muted-foreground">Aggregated booking sales, supplier COGS, finalized gross margins, and net operating profit across all service modules.</p></div> <div class="flex items-center gap-2"><!></div></div> <div class="bg-card border border-border rounded-2xl p-4 shadow-xs space-y-3 svelte-wjvphc"><div class="flex flex-col md:flex-row md:items-center justify-between gap-3"><div class="flex items-center gap-2"><!> <span class="text-xs font-bold text-foreground">Date Range Filter</span> <!></div> <div class="flex items-center gap-1.5 text-xs overflow-x-auto flex-nowrap pb-1 scrollbar-thin"><button type="button">All Time</button> <button type="button">Today</button> <button type="button">This Week</button> <button type="button">This Month</button> <button type="button">Last 30 Days</button> <button type="button">This Year</button></div></div> <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 border-t border-border/40 text-xs"><div class="flex items-center gap-2"><label for="pnl-startDate" class="text-muted-foreground font-medium text-[11px]">From:</label> <input id="pnl-startDate" type="date" class="px-2.5 py-1 rounded-xl border border-border bg-background text-foreground text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 svelte-wjvphc"/></div> <div class="flex items-center gap-2"><label for="pnl-endDate" class="text-muted-foreground font-medium text-[11px]">To:</label> <input id="pnl-endDate" type="date" class="px-2.5 py-1 rounded-xl border border-border bg-background text-foreground text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 svelte-wjvphc"/></div> <!></div></div> <!> <!></div>`);
function _page($$anchor, $$props) {
	push($$props, true);
	function calculatePresetRange(preset) {
		const now = /* @__PURE__ */ new Date();
		const todayStr = getBahrainDateString(now);
		if (preset === "today") return {
			start: todayStr,
			end: todayStr
		};
		else if (preset === "this_week") {
			const startOfWeek = new Date(now);
			const dayOfWeek = (now.getDay() + 6) % 7;
			startOfWeek.setDate(now.getDate() - dayOfWeek);
			return {
				start: getBahrainDateString(startOfWeek),
				end: todayStr
			};
		} else if (preset === "this_month") {
			const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
			const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
			return {
				start: getBahrainDateString(startOfMonth),
				end: getBahrainDateString(endOfMonth)
			};
		} else if (preset === "last_30") {
			const past30 = /* @__PURE__ */ new Date();
			past30.setDate(now.getDate() - 30);
			return {
				start: getBahrainDateString(past30),
				end: todayStr
			};
		} else if (preset === "this_year") return {
			start: getBahrainDateString(new Date(now.getFullYear(), 0, 1)),
			end: todayStr
		};
		else return {
			start: "",
			end: ""
		};
	}
	const initialDates = calculatePresetRange("this_month");
	let activePreset = state("this_month");
	let startDate = state(proxy(initialDates.start));
	let endDate = state(proxy(initialDates.end));
	function setPreset(preset) {
		set(activePreset, preset, true);
		const { start, end } = calculatePresetRange(preset);
		set(startDate, start, true);
		set(endDate, end, true);
		loadReport();
	}
	function handleCustomDateChange() {
		set(activePreset, "all");
		loadReport();
	}
	let loading = state(true);
	let error = state(null);
	let pnlData = state(null);
	let activeTab = state("performance");
	let showRevenueDetails = state(true);
	let showCostDetails = state(true);
	let showExpenseDetails = state(true);
	const operationalExpenseItems = user_derived(() => {
		return (get(pnlData)?.expenseItems ?? []).filter((e) => {
			const name = (e.categoryName || "").toLowerCase();
			return !name.includes("contra") && !name.includes("head balance withdrawal") && !name.includes("wallet withdrawal");
		});
	});
	const totalApprovedExpenses = user_derived(() => {
		return get(operationalExpenseItems).reduce((acc, x) => acc + x.totalAmount, 0);
	});
	const totalOperatingExpenses = user_derived(() => {
		return get(totalApprovedExpenses) + (get(pnlData)?.totalPayrollExpenses ?? 0);
	});
	const finalGrossProfit = user_derived(() => get(pnlData)?.finalizedGrossProfit ?? 0);
	const finalGrossMargin = user_derived(() => get(pnlData) && get(pnlData).netRevenue > 0 ? get(pnlData).finalizedGrossProfit / get(pnlData).netRevenue * 100 : 0);
	const finalNetProfit = user_derived(() => get(pnlData) ? get(pnlData).finalizedGrossProfit - get(totalOperatingExpenses) : 0);
	const isFinalNetProfitable = user_derived(() => get(finalNetProfit) >= 0);
	const finalNetMargin = user_derived(() => get(pnlData) && get(pnlData).netRevenue > 0 ? get(finalNetProfit) / get(pnlData).netRevenue * 100 : 0);
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
			set(pnlData, await apiFetch(`api/reporting/profit-loss/summary${query ? `?${query}` : ""}`), true);
		} catch (err) {
			set(error, err?.message || "Failed to load Profit & Loss report. Please retry.", true);
			set(pnlData, null);
			if (get(error)) toast.error(get(error));
		} finally {
			set(loading, false);
		}
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
			const srvMargin = r.salesAmount > 0 ? r.finalProfitAmount / r.salesAmount * 100 : 0;
			rows.push([
				"1. Revenues",
				`Sales — ${r.serviceLabel}`,
				"Gross Booking Sale",
				r.bookingCount,
				r.salesAmount.toFixed(3),
				r.costAmount.toFixed(3),
				r.finalProfitAmount.toFixed(3),
				`${srvMargin.toFixed(1)}%`,
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
			"Cost Deduction",
			"—",
			"0.000",
			`-${get(pnlData).approvedPurchaseReturns.toFixed(3)}`,
			"—",
			"—",
			"—"
		]);
		rows.push([
			"2. Cost of Sales Subtotal",
			"TOTAL NET COST OF SALES (COGS)",
			"Operating Outflow",
			get(pnlData).costOfSalesItems.reduce((acc, x) => acc + x.bookingCount, 0),
			"—",
			get(pnlData).netCostOfSales.toFixed(3),
			"—",
			"—",
			"—"
		]);
		const csvFinalGross = get(pnlData).finalizedGrossProfit;
		const csvFinalGrossMargin = get(pnlData).netRevenue > 0 ? csvFinalGross / get(pnlData).netRevenue * 100 : 0;
		rows.push([
			"3. Gross Margin",
			"GROSS PROFIT (FINALIZED)",
			"Trading Margin",
			"—",
			"—",
			"—",
			csvFinalGross.toFixed(3),
			`${csvFinalGrossMargin.toFixed(1)}%`,
			csvFinalGross.toFixed(3)
		]);
		get(operationalExpenseItems).forEach((e) => {
			rows.push([
				"4. Operating Expenses",
				`Expense — ${e.categoryName}`,
				"Overhead",
				e.expenseCount,
				"—",
				e.totalAmount.toFixed(3),
				"—",
				"—",
				"—"
			]);
		});
		if (get(pnlData).totalPayrollExpenses > 0) rows.push([
			"4. Operating Expenses",
			"Staff Salaries & Payroll",
			"Payroll & Commissions",
			"—",
			"—",
			get(pnlData).totalPayrollExpenses.toFixed(3),
			"—",
			"—",
			"—"
		]);
		rows.push([
			"4. Operating Expenses Subtotal",
			"TOTAL OPERATING EXPENSES",
			"Operating Overhead",
			get(operationalExpenseItems).reduce((acc, x) => acc + x.expenseCount, 0),
			"—",
			get(totalOperatingExpenses).toFixed(3),
			"—",
			"—",
			"—"
		]);
		const csvFinalNet = get(finalNetProfit);
		const csvFinalNetMargin = get(pnlData).netRevenue > 0 ? csvFinalNet / get(pnlData).netRevenue * 100 : 0;
		rows.push([
			"5. Net Bottom Line",
			"NET OPERATING PROFIT / (LOSS) [FINALIZED]",
			csvFinalNet >= 0 ? "Surplus" : "Deficit",
			"—",
			"—",
			"—",
			csvFinalNet.toFixed(3),
			`${csvFinalNetMargin.toFixed(1)}%`,
			csvFinalNet.toFixed(3)
		]);
		exportToCSV(`profit_loss_${get(startDate) || "start"}_to_${get(endDate) || "end"}.csv`, headers, rows);
		toast.success("P&L Report CSV exported successfully.");
	}
	function handleExportPDF() {
		if (!get(pnlData)) return;
		previewDocument("report", "profit-loss-operational", {
			startDate: get(startDate),
			endDate: get(endDate)
		});
		toast.info("Generating Operational P&L Statement PDF...");
	}
	onMount(() => {
		loadReport();
	});
	var div = root_33();
	var div_1 = child(div);
	var div_2 = child(div_1);
	var h1 = child(div_2);
	Chart_column(child(h1), { class: "h-5 w-5 text-primary" });
	next();
	reset(h1);
	next(2);
	reset(div_2);
	var div_3 = sibling(div_2, 2);
	Button(child(div_3), {
		variant: "outline",
		class: "h-8.5 rounded-xl cursor-pointer",
		onclick: loadReport,
		get disabled() {
			return get(loading);
		},
		children: ($$anchor, $$slotProps) => {
			var fragment = root();
			var node_2 = first_child(fragment);
			{
				let $0 = user_derived(() => ["h-3.5 w-3.5 mr-1.5", get(loading) ? "animate-spin" : ""].join(" "));
				Refresh_cw(node_2, { get class() {
					return get($0);
				} });
			}
			next(2);
			append($$anchor, fragment);
		},
		$$slots: { default: true }
	});
	reset(div_3);
	reset(div_1);
	var div_4 = sibling(div_1, 2);
	var div_5 = child(div_4);
	var div_6 = child(div_5);
	var node_3 = child(div_6);
	Calendar(node_3, { class: "h-4 w-4 text-primary" });
	var node_4 = sibling(node_3, 4);
	var consequent = ($$anchor) => {
		var span = root_1();
		var text = child(span);
		reset(span);
		template_effect(() => set_text(text, `${(get(startDate) || "Start") ?? ""} → ${(get(endDate) || "End") ?? ""}`));
		append($$anchor, span);
	};
	var alternate = ($$anchor) => {
		append($$anchor, root_2());
	};
	if_block(node_4, ($$render) => {
		if (get(startDate) || get(endDate)) $$render(consequent);
		else $$render(alternate, -1);
	});
	reset(div_6);
	var div_7 = sibling(div_6, 2);
	var button = child(div_7);
	var button_1 = sibling(button, 2);
	var button_2 = sibling(button_1, 2);
	var button_3 = sibling(button_2, 2);
	var button_4 = sibling(button_3, 2);
	var button_5 = sibling(button_4, 2);
	reset(div_7);
	reset(div_5);
	var div_8 = sibling(div_5, 2);
	var div_9 = child(div_8);
	var input = sibling(child(div_9), 2);
	remove_input_defaults(input);
	reset(div_9);
	var div_10 = sibling(div_9, 2);
	var input_1 = sibling(child(div_10), 2);
	remove_input_defaults(input_1);
	reset(div_10);
	var node_5 = sibling(div_10, 2);
	var consequent_1 = ($$anchor) => {
		Button($$anchor, {
			variant: "ghost",
			class: "h-7 px-2 text-[11px] text-muted-foreground hover:text-foreground cursor-pointer flex items-center gap-1 sm:ml-auto",
			onclick: () => setPreset("all"),
			children: ($$anchor, $$slotProps) => {
				var fragment_2 = root_3();
				X(first_child(fragment_2), { class: "h-3 w-3" });
				next(2);
				append($$anchor, fragment_2);
			},
			$$slots: { default: true }
		});
	};
	if_block(node_5, ($$render) => {
		if (get(startDate) || get(endDate)) $$render(consequent_1);
	});
	reset(div_8);
	reset(div_4);
	var node_7 = sibling(div_4, 2);
	var consequent_2 = ($$anchor) => {
		var div_11 = root_5();
		var div_12 = child(div_11);
		var node_8 = child(div_12);
		Circle_alert(node_8, { class: "h-5 w-5 shrink-0" });
		var div_13 = sibling(node_8, 2);
		var p = sibling(child(div_13), 2);
		var text_1 = child(p, true);
		reset(p);
		reset(div_13);
		reset(div_12);
		Button(sibling(div_12, 2), {
			variant: "outline",
			size: "sm",
			onclick: loadReport,
			class: "h-8.5 rounded-xl cursor-pointer shrink-0",
			children: ($$anchor, $$slotProps) => {
				var fragment_3 = root_4();
				Refresh_cw(first_child(fragment_3), { class: "h-3.5 w-3.5 mr-1" });
				next(2);
				append($$anchor, fragment_3);
			},
			$$slots: { default: true }
		});
		reset(div_11);
		template_effect(() => set_text(text_1, get(error)));
		append($$anchor, div_11);
	};
	if_block(node_7, ($$render) => {
		if (get(error)) $$render(consequent_2);
	});
	var node_11 = sibling(node_7, 2);
	var consequent_3 = ($$anchor) => {
		var div_14 = root_7();
		var div_15 = child(div_14);
		each(div_15, 20, () => Array(5), index, ($$anchor, _) => {
			append($$anchor, root_6());
		});
		reset(div_15);
		next(2);
		reset(div_14);
		append($$anchor, div_14);
	};
	var consequent_23 = ($$anchor) => {
		var fragment_4 = root_32();
		var div_17 = first_child(fragment_4);
		var div_18 = child(div_17);
		var div_19 = child(div_18);
		var span_2 = sibling(child(div_19), 2);
		var text_2 = child(span_2);
		reset(span_2);
		reset(div_19);
		var span_3 = sibling(div_19, 2);
		MoneyDisplay(child(span_3), { get amount() {
			return get(pnlData).netRevenue;
		} });
		reset(span_3);
		var div_20 = sibling(span_3, 2);
		var node_13 = sibling(child(div_20), 2);
		var consequent_4 = ($$anchor) => {
			var span_4 = root_8();
			var text_3 = child(span_4);
			reset(span_4);
			template_effect(($0) => set_text(text_3, `-${$0 ?? ""} Ret`), [() => get(pnlData).approvedSalesReturns.toFixed(3)]);
			append($$anchor, span_4);
		};
		var alternate_1 = ($$anchor) => {
			append($$anchor, root_9());
		};
		if_block(node_13, ($$render) => {
			if (get(pnlData).approvedSalesReturns > 0) $$render(consequent_4);
			else $$render(alternate_1, -1);
		});
		reset(div_20);
		reset(div_18);
		var div_21 = sibling(div_18, 2);
		var span_6 = sibling(child(div_21), 2);
		MoneyDisplay(child(span_6), { get amount() {
			return get(pnlData).netCostOfSales;
		} });
		reset(span_6);
		var div_22 = sibling(span_6, 2);
		var node_15 = sibling(child(div_22), 2);
		var consequent_5 = ($$anchor) => {
			var span_7 = root_10();
			var text_4 = child(span_7);
			reset(span_7);
			template_effect(($0) => set_text(text_4, `-${$0 ?? ""} Ret`), [() => get(pnlData).approvedPurchaseReturns.toFixed(3)]);
			append($$anchor, span_7);
		};
		var alternate_2 = ($$anchor) => {
			append($$anchor, root_11());
		};
		if_block(node_15, ($$render) => {
			if (get(pnlData).approvedPurchaseReturns > 0) $$render(consequent_5);
			else $$render(alternate_2, -1);
		});
		reset(div_22);
		reset(div_21);
		var div_23 = sibling(div_21, 2);
		var div_24 = child(div_23);
		var span_9 = sibling(child(div_24), 2);
		var text_5 = child(span_9);
		reset(span_9);
		reset(div_24);
		var span_10 = sibling(div_24, 2);
		MoneyDisplay(child(span_10), { get amount() {
			return get(finalGrossProfit);
		} });
		reset(span_10);
		var div_25 = sibling(span_10, 2);
		var node_17 = sibling(child(div_25), 2);
		var consequent_6 = ($$anchor) => {
			var span_11 = root_12();
			var text_6 = child(span_11);
			reset(span_11);
			template_effect(($0) => set_text(text_6, `Open: ${$0 ?? ""}`), [() => get(pnlData).estimatedGrossProfit.toFixed(3)]);
			append($$anchor, span_11);
		};
		if_block(node_17, ($$render) => {
			if (get(pnlData).estimatedGrossProfit > 0) $$render(consequent_6);
		});
		reset(div_25);
		reset(div_23);
		var div_26 = sibling(div_23, 2);
		var span_12 = sibling(child(div_26), 2);
		MoneyDisplay(child(span_12), { get amount() {
			return get(totalOperatingExpenses);
		} });
		reset(span_12);
		var div_27 = sibling(span_12, 2);
		var span_13 = child(div_27);
		var text_7 = child(span_13);
		reset(span_13);
		var span_14 = sibling(span_13, 2);
		var text_8 = child(span_14);
		reset(span_14);
		reset(div_27);
		reset(div_26);
		var div_28 = sibling(div_26, 2);
		var div_29 = child(div_28);
		var span_15 = child(div_29);
		var text_9 = child(span_15, true);
		reset(span_15);
		var span_16 = sibling(span_15, 2);
		var text_10 = child(span_16);
		reset(span_16);
		reset(div_29);
		var span_17 = sibling(div_29, 2);
		MoneyDisplay(child(span_17), { get amount() {
			return get(finalNetProfit);
		} });
		reset(span_17);
		var div_30 = sibling(span_17, 2);
		var span_18 = sibling(child(div_30), 2);
		var text_11 = child(span_18, true);
		reset(span_18);
		reset(div_30);
		reset(div_28);
		reset(div_17);
		var div_31 = sibling(div_17, 2);
		var div_32 = child(div_31);
		var button_6 = child(div_32);
		Layers(child(button_6), { class: "h-3.5 w-3.5" });
		next(2);
		reset(button_6);
		var button_7 = sibling(button_6, 2);
		File_text(child(button_7), { class: "h-3.5 w-3.5" });
		next(2);
		reset(button_7);
		reset(div_32);
		var div_33 = sibling(div_32, 2);
		var node_22 = child(div_33);
		{
			let $0 = user_derived(() => get(loading) || !get(pnlData));
			Button(node_22, {
				variant: "outline",
				class: "h-8.5 rounded-xl cursor-pointer flex items-center gap-1.5",
				onclick: handleExportCSV,
				get disabled() {
					return get($0);
				},
				children: ($$anchor, $$slotProps) => {
					var fragment_5 = root_13();
					File_spreadsheet(first_child(fragment_5), { class: "h-3.5 w-3.5" });
					next(2);
					append($$anchor, fragment_5);
				},
				$$slots: { default: true }
			});
		}
		var node_24 = sibling(node_22, 2);
		{
			let $0 = user_derived(() => get(loading) || !get(pnlData));
			Button(node_24, {
				variant: "outline",
				class: "h-8.5 rounded-xl cursor-pointer flex items-center gap-1.5",
				onclick: handleExportPDF,
				get disabled() {
					return get($0);
				},
				children: ($$anchor, $$slotProps) => {
					var fragment_6 = root_14();
					File_down(first_child(fragment_6), { class: "h-3.5 w-3.5" });
					next(2);
					append($$anchor, fragment_6);
				},
				$$slots: { default: true }
			});
		}
		reset(div_33);
		reset(div_31);
		var node_26 = sibling(div_31, 2);
		var consequent_10 = ($$anchor) => {
			var div_34 = root_18();
			var div_35 = child(div_34);
			var table = child(div_35);
			var tbody = sibling(child(table));
			var node_27 = child(tbody);
			var consequent_8 = ($$anchor) => {
				var fragment_7 = comment();
				each(first_child(fragment_7), 17, () => get(pnlData).revenueItems, index, ($$anchor, srv) => {
					const IconComponent = user_derived(() => getServiceIcon(get(srv).serviceType));
					const srvFinalMargin = user_derived(() => get(srv).salesAmount > 0 ? get(srv).finalProfitAmount / get(srv).salesAmount * 100 : 0);
					const srvOpenEst = user_derived(() => Math.max(0, get(srv).profitAmount - get(srv).finalProfitAmount));
					var tr = root_16();
					var td = child(tr);
					var div_36 = child(td);
					var div_37 = child(div_36);
					component(child(div_37), () => get(IconComponent), ($$anchor, IconComponent_1) => {
						IconComponent_1($$anchor, { class: "h-3.5 w-3.5" });
					});
					reset(div_37);
					var span_19 = sibling(div_37, 2);
					var text_12 = child(span_19, true);
					reset(span_19);
					reset(div_36);
					reset(td);
					var td_1 = sibling(td);
					var text_13 = child(td_1, true);
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
						return get(srv).finalProfitAmount;
					} });
					reset(td_4);
					var td_5 = sibling(td_4);
					var span_20 = child(td_5);
					var text_14 = child(span_20, true);
					reset(span_20);
					reset(td_5);
					var td_6 = sibling(td_5);
					var node_33 = child(td_6);
					var consequent_7 = ($$anchor) => {
						MoneyDisplay($$anchor, { get amount() {
							return get(srvOpenEst);
						} });
					};
					var alternate_3 = ($$anchor) => {
						append($$anchor, root_15());
					};
					if_block(node_33, ($$render) => {
						if (get(srvOpenEst) > 0) $$render(consequent_7);
						else $$render(alternate_3, -1);
					});
					reset(td_6);
					reset(tr);
					template_effect(($0) => {
						set_text(text_12, get(srv).serviceLabel);
						set_text(text_13, get(srv).bookingCount);
						set_class(span_20, 1, `px-2 py-0.5 rounded text-[11px] font-bold ${get(srv).salesAmount > 0 && get(srvFinalMargin) >= 30 ? "bg-emerald-500/10 text-emerald-600" : get(srv).finalProfitAmount > 0 ? "bg-amber-500/10 text-amber-600" : "bg-muted text-muted-foreground"}`);
						set_text(text_14, $0);
					}, [() => get(srv).salesAmount > 0 ? `${get(srvFinalMargin).toFixed(1)}%` : "—"]);
					append($$anchor, tr);
				});
				append($$anchor, fragment_7);
			};
			var alternate_4 = ($$anchor) => {
				append($$anchor, root_17());
			};
			if_block(node_27, ($$render) => {
				if (get(pnlData).revenueItems.length > 0) $$render(consequent_8);
				else $$render(alternate_4, -1);
			});
			reset(tbody);
			var tfoot = sibling(tbody);
			var tr_2 = child(tfoot);
			var td_7 = sibling(child(tr_2));
			var text_15 = child(td_7, true);
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
			MoneyDisplay(child(td_10), { get amount() {
				return get(pnlData).finalizedGrossProfit;
			} });
			reset(td_10);
			var td_11 = sibling(td_10);
			var text_16 = child(td_11, true);
			reset(td_11);
			var td_12 = sibling(td_11);
			var node_37 = child(td_12);
			var consequent_9 = ($$anchor) => {
				MoneyDisplay($$anchor, { get amount() {
					return get(pnlData).estimatedGrossProfit;
				} });
			};
			var alternate_5 = ($$anchor) => {
				append($$anchor, root_15());
			};
			if_block(node_37, ($$render) => {
				if (get(pnlData).estimatedGrossProfit > 0) $$render(consequent_9);
				else $$render(alternate_5, -1);
			});
			reset(td_12);
			reset(tr_2);
			reset(tfoot);
			reset(table);
			reset(div_35);
			reset(div_34);
			template_effect(($0, $1) => {
				set_text(text_15, $0);
				set_text(text_16, $1);
			}, [() => get(pnlData).revenueItems.reduce((acc, x) => acc + x.bookingCount, 0), () => get(pnlData).grossBookingRevenue > 0 ? `${(get(pnlData).finalizedGrossProfit / get(pnlData).grossBookingRevenue * 100).toFixed(1)}%` : "—"]);
			append($$anchor, div_34);
		};
		if_block(node_26, ($$render) => {
			if (get(activeTab) === "performance") $$render(consequent_10);
		});
		var node_38 = sibling(node_26, 2);
		var consequent_22 = ($$anchor) => {
			var div_38 = root_31();
			var div_39 = child(div_38);
			var div_40 = sibling(child(div_39), 2);
			var text_17 = child(div_40);
			reset(div_40);
			reset(div_39);
			var div_41 = sibling(div_39, 2);
			var div_42 = child(div_41);
			var button_8 = child(div_42);
			var div_43 = child(button_8);
			var node_39 = child(div_43);
			var consequent_11 = ($$anchor) => {
				Chevron_down($$anchor, { class: "h-4 w-4 text-muted-foreground" });
			};
			var alternate_6 = ($$anchor) => {
				Chevron_right($$anchor, { class: "h-4 w-4 text-muted-foreground" });
			};
			if_block(node_39, ($$render) => {
				if (get(showRevenueDetails)) $$render(consequent_11);
				else $$render(alternate_6, -1);
			});
			next(2);
			reset(div_43);
			var span_23 = sibling(div_43, 2);
			MoneyDisplay(child(span_23), { get amount() {
				return get(pnlData).netRevenue;
			} });
			reset(span_23);
			reset(button_8);
			var node_41 = sibling(button_8, 2);
			var consequent_13 = ($$anchor) => {
				var div_44 = root_21();
				var node_42 = child(div_44);
				each(node_42, 17, () => get(pnlData).revenueItems, index, ($$anchor, rev) => {
					var div_45 = root_19();
					var span_24 = child(div_45);
					var text_18 = sibling(child(span_24));
					reset(span_24);
					var span_25 = sibling(span_24, 2);
					MoneyDisplay(child(span_25), { get amount() {
						return get(rev).salesAmount;
					} });
					reset(span_25);
					reset(div_45);
					template_effect(() => set_text(text_18, ` Booking Revenue — ${get(rev).serviceLabel ?? ""} (${get(rev).bookingCount ?? ""} bookings)`));
					append($$anchor, div_45);
				});
				var node_44 = sibling(node_42, 2);
				var consequent_12 = ($$anchor) => {
					var div_46 = root_20();
					var span_26 = sibling(child(div_46), 2);
					MoneyDisplay(sibling(child(span_26)), { get amount() {
						return get(pnlData).approvedSalesReturns;
					} });
					reset(span_26);
					reset(div_46);
					append($$anchor, div_46);
				};
				if_block(node_44, ($$render) => {
					if (get(pnlData).approvedSalesReturns > 0) $$render(consequent_12);
				});
				var div_47 = sibling(node_44, 2);
				var span_27 = sibling(child(div_47), 2);
				MoneyDisplay(child(span_27), { get amount() {
					return get(pnlData).netRevenue;
				} });
				reset(span_27);
				reset(div_47);
				reset(div_44);
				append($$anchor, div_44);
			};
			if_block(node_41, ($$render) => {
				if (get(showRevenueDetails)) $$render(consequent_13);
			});
			reset(div_42);
			var div_48 = sibling(div_42, 2);
			var button_9 = child(div_48);
			var div_49 = child(button_9);
			var node_47 = child(div_49);
			var consequent_14 = ($$anchor) => {
				Chevron_down($$anchor, { class: "h-4 w-4 text-muted-foreground" });
			};
			var alternate_7 = ($$anchor) => {
				Chevron_right($$anchor, { class: "h-4 w-4 text-muted-foreground" });
			};
			if_block(node_47, ($$render) => {
				if (get(showCostDetails)) $$render(consequent_14);
				else $$render(alternate_7, -1);
			});
			next(2);
			reset(div_49);
			var span_28 = sibling(div_49, 2);
			MoneyDisplay(child(span_28), { get amount() {
				return get(pnlData).netCostOfSales;
			} });
			reset(span_28);
			reset(button_9);
			var node_49 = sibling(button_9, 2);
			var consequent_16 = ($$anchor) => {
				var div_50 = root_24();
				var node_50 = child(div_50);
				each(node_50, 17, () => get(pnlData).costOfSalesItems, index, ($$anchor, cost) => {
					var div_51 = root_22();
					var span_29 = child(div_51);
					var text_19 = sibling(child(span_29));
					reset(span_29);
					var span_30 = sibling(span_29, 2);
					MoneyDisplay(child(span_30), { get amount() {
						return get(cost).costAmount;
					} });
					reset(span_30);
					reset(div_51);
					template_effect(() => set_text(text_19, ` Supplier Cost — ${get(cost).serviceLabel ?? ""}`));
					append($$anchor, div_51);
				});
				var node_52 = sibling(node_50, 2);
				var consequent_15 = ($$anchor) => {
					var div_52 = root_23();
					var span_31 = sibling(child(div_52), 2);
					MoneyDisplay(sibling(child(span_31)), { get amount() {
						return get(pnlData).approvedPurchaseReturns;
					} });
					reset(span_31);
					reset(div_52);
					append($$anchor, div_52);
				};
				if_block(node_52, ($$render) => {
					if (get(pnlData).approvedPurchaseReturns > 0) $$render(consequent_15);
				});
				var div_53 = sibling(node_52, 2);
				var span_32 = sibling(child(div_53), 2);
				MoneyDisplay(child(span_32), { get amount() {
					return get(pnlData).netCostOfSales;
				} });
				reset(span_32);
				reset(div_53);
				reset(div_50);
				append($$anchor, div_50);
			};
			if_block(node_49, ($$render) => {
				if (get(showCostDetails)) $$render(consequent_16);
			});
			reset(div_48);
			var div_54 = sibling(div_48, 2);
			var div_55 = child(div_54);
			var h4 = sibling(child(div_55), 2);
			MoneyDisplay(child(h4), { get amount() {
				return get(finalGrossProfit);
			} });
			reset(h4);
			var p_1 = sibling(h4, 2);
			var strong = sibling(child(p_1));
			var text_20 = child(strong);
			reset(strong);
			var text_21 = sibling(strong);
			reset(p_1);
			reset(div_55);
			var div_56 = sibling(div_55, 2);
			var div_57 = child(div_56);
			var strong_1 = sibling(child(div_57));
			var text_22 = child(strong_1);
			reset(strong_1);
			reset(div_57);
			var node_56 = sibling(div_57, 2);
			var consequent_17 = ($$anchor) => {
				var div_58 = root_25();
				var strong_2 = sibling(child(div_58));
				var text_23 = child(strong_2);
				reset(strong_2);
				reset(div_58);
				template_effect(($0) => set_text(text_23, `${$0 ?? ""} BHD`), [() => get(pnlData).estimatedGrossProfit.toFixed(3)]);
				append($$anchor, div_58);
			};
			if_block(node_56, ($$render) => {
				if (get(pnlData).estimatedGrossProfit > 0) $$render(consequent_17);
			});
			reset(div_56);
			reset(div_54);
			var div_59 = sibling(div_54, 2);
			var button_10 = child(div_59);
			var div_60 = child(button_10);
			var node_57 = child(div_60);
			var consequent_18 = ($$anchor) => {
				Chevron_down($$anchor, { class: "h-4 w-4 text-muted-foreground" });
			};
			var alternate_8 = ($$anchor) => {
				Chevron_right($$anchor, { class: "h-4 w-4 text-muted-foreground" });
			};
			if_block(node_57, ($$render) => {
				if (get(showExpenseDetails)) $$render(consequent_18);
				else $$render(alternate_8, -1);
			});
			next(2);
			reset(div_60);
			var span_33 = sibling(div_60, 2);
			MoneyDisplay(child(span_33), { get amount() {
				return get(totalOperatingExpenses);
			} });
			reset(span_33);
			reset(button_10);
			var node_59 = sibling(button_10, 2);
			var consequent_21 = ($$anchor) => {
				var div_61 = root_30();
				var node_60 = child(div_61);
				var consequent_19 = ($$anchor) => {
					append($$anchor, root_26());
				};
				var alternate_9 = ($$anchor) => {
					var fragment_16 = root_29();
					var node_61 = first_child(fragment_16);
					each(node_61, 17, () => get(operationalExpenseItems), index, ($$anchor, exp) => {
						var div_63 = root_27();
						var span_34 = child(div_63);
						var text_24 = sibling(child(span_34));
						reset(span_34);
						var span_35 = sibling(span_34, 2);
						MoneyDisplay(child(span_35), { get amount() {
							return get(exp).totalAmount;
						} });
						reset(span_35);
						reset(div_63);
						template_effect(() => set_text(text_24, ` Operating Expense — ${get(exp).categoryName ?? ""} (${get(exp).expenseCount ?? ""} claims)`));
						append($$anchor, div_63);
					});
					var node_63 = sibling(node_61, 2);
					var consequent_20 = ($$anchor) => {
						var div_64 = root_28();
						var span_36 = sibling(child(div_64), 2);
						MoneyDisplay(child(span_36), { get amount() {
							return get(pnlData).totalPayrollExpenses;
						} });
						reset(span_36);
						reset(div_64);
						append($$anchor, div_64);
					};
					if_block(node_63, ($$render) => {
						if (get(pnlData).totalPayrollExpenses > 0) $$render(consequent_20);
					});
					append($$anchor, fragment_16);
				};
				if_block(node_60, ($$render) => {
					if (get(operationalExpenseItems).length === 0 && get(pnlData).totalPayrollExpenses === 0) $$render(consequent_19);
					else $$render(alternate_9, -1);
				});
				var div_65 = sibling(node_60, 2);
				var span_37 = sibling(child(div_65), 2);
				MoneyDisplay(child(span_37), { get amount() {
					return get(totalOperatingExpenses);
				} });
				reset(span_37);
				reset(div_65);
				reset(div_61);
				append($$anchor, div_61);
			};
			if_block(node_59, ($$render) => {
				if (get(showExpenseDetails)) $$render(consequent_21);
			});
			reset(div_59);
			var div_66 = sibling(div_59, 2);
			var div_67 = child(div_66);
			var span_38 = child(div_67);
			var h3 = sibling(span_38, 2);
			var text_25 = child(h3);
			MoneyDisplay(sibling(text_25), { get amount() {
				return get(finalNetProfit);
			} });
			reset(h3);
			var p_2 = sibling(h3, 2);
			var strong_3 = sibling(child(p_2));
			var text_26 = child(strong_3);
			reset(strong_3);
			var text_27 = sibling(strong_3);
			reset(p_2);
			reset(div_67);
			var div_68 = sibling(div_67, 2);
			var div_69 = child(div_68);
			var strong_4 = sibling(child(div_69), 2);
			var text_28 = child(strong_4);
			reset(strong_4);
			reset(div_69);
			var div_70 = sibling(div_69, 2);
			var strong_5 = sibling(child(div_70), 2);
			var text_29 = child(strong_5);
			reset(strong_5);
			reset(div_70);
			reset(div_68);
			reset(div_66);
			reset(div_41);
			reset(div_38);
			template_effect(($0, $1, $2, $3, $4, $5, $6, $7) => {
				set_text(text_17, `${(get(startDate) || "Start") ?? ""} → ${(get(endDate) || "End") ?? ""}`);
				set_text(text_20, `${$0 ?? ""}%`);
				set_text(text_21, ` (Finalized Profit: ${$1 ?? ""} BHD)`);
				set_text(text_22, `${$2 ?? ""} BHD`);
				set_class(div_66, 1, `p-5 rounded-2xl border ${get(isFinalNetProfitable) ? "bg-emerald-500/5 border-emerald-500/30" : "bg-rose-500/5 border-rose-500/30"} flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xs`);
				set_class(span_38, 1, `text-[11px] font-bold uppercase tracking-wider block opacity-80 ${get(isFinalNetProfitable) ? "text-emerald-700 dark:text-emerald-400" : "text-rose-700 dark:text-rose-400"}`);
				set_class(h3, 1, `text-xl font-bold font-mono ${get(isFinalNetProfitable) ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"}`);
				set_text(text_25, `${get(isFinalNetProfitable) ? "NET OPERATING PROFIT:" : "NET OPERATING LOSS:"} `);
				set_class(strong_3, 1, `font-mono ${get(isFinalNetProfitable) ? "text-emerald-600" : "text-rose-600"}`);
				set_text(text_26, `${$3 ?? ""}%`);
				set_text(text_27, ` (Finalized Profit ${$4 ?? ""} - Operating Expenses ${$5 ?? ""})`);
				set_class(strong_4, 1, clsx(get(isFinalNetProfitable) ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"));
				set_text(text_28, `${$6 ?? ""} BHD`);
				set_text(text_29, `${$7 ?? ""}%`);
			}, [
				() => get(finalGrossMargin).toFixed(1),
				() => get(finalGrossProfit).toFixed(3),
				() => get(finalGrossProfit).toFixed(3),
				() => get(finalNetMargin).toFixed(1),
				() => get(finalGrossProfit).toFixed(3),
				() => get(totalOperatingExpenses).toFixed(3),
				() => get(finalNetProfit).toFixed(3),
				() => get(finalNetMargin).toFixed(1)
			]);
			delegated("click", button_8, () => set(showRevenueDetails, !get(showRevenueDetails)));
			delegated("click", button_9, () => set(showCostDetails, !get(showCostDetails)));
			delegated("click", button_10, () => set(showExpenseDetails, !get(showExpenseDetails)));
			append($$anchor, div_38);
		};
		if_block(node_38, ($$render) => {
			if (get(activeTab) === "statement") $$render(consequent_22);
		});
		template_effect(($0, $1, $2, $3, $4) => {
			set_text(text_2, `${$0 ?? ""} Bookings`);
			set_text(text_5, `${$1 ?? ""}%`);
			set_text(text_7, `Overhead: ${$2 ?? ""}`);
			set_text(text_8, `Payroll: ${$3 ?? ""}`);
			set_class(span_15, 1, `text-[11px] font-bold uppercase tracking-wider block ${get(isFinalNetProfitable) ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"}`);
			set_text(text_9, get(isFinalNetProfitable) ? "Net Profit" : "Net Loss");
			set_class(span_16, 1, `text-[10px] font-bold font-mono ${get(isFinalNetProfitable) ? "text-emerald-600 bg-emerald-500/10" : "text-rose-600 bg-rose-500/10"} px-1.5 py-0.5 rounded`);
			set_text(text_10, `${$4 ?? ""}%`);
			set_class(span_17, 1, `text-lg font-bold font-mono ${get(isFinalNetProfitable) ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"} block`);
			set_class(span_18, 1, `font-semibold ${get(isFinalNetProfitable) ? "text-emerald-600" : "text-rose-600"}`);
			set_text(text_11, get(isFinalNetProfitable) ? "Surplus" : "Deficit");
			set_class(button_6, 1, `flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${get(activeTab) === "performance" ? "bg-card text-foreground shadow-xs border border-border/30" : "text-muted-foreground hover:text-foreground"}`, "svelte-wjvphc");
			set_class(button_7, 1, `flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${get(activeTab) === "statement" ? "bg-card text-foreground shadow-xs border border-border/30" : "text-muted-foreground hover:text-foreground"}`, "svelte-wjvphc");
		}, [
			() => get(pnlData).revenueItems.reduce((acc, x) => acc + x.bookingCount, 0),
			() => get(finalGrossMargin).toFixed(1),
			() => get(totalApprovedExpenses).toFixed(3),
			() => get(pnlData).totalPayrollExpenses.toFixed(3),
			() => get(finalNetMargin).toFixed(1)
		]);
		delegated("click", button_6, () => set(activeTab, "performance"));
		delegated("click", button_7, () => set(activeTab, "statement"));
		append($$anchor, fragment_4);
	};
	if_block(node_11, ($$render) => {
		if (get(loading) && !get(pnlData)) $$render(consequent_3);
		else if (get(pnlData)) $$render(consequent_23, 1);
	});
	reset(div);
	template_effect(() => {
		set_class(button, 1, `px-2.5 py-1 rounded-lg border text-[11px] font-medium transition-colors cursor-pointer shrink-0 whitespace-nowrap ${get(activePreset) === "all" && !get(startDate) && !get(endDate) ? "bg-primary text-primary-foreground border-primary" : "border-border bg-background hover:bg-muted text-muted-foreground"}`, "svelte-wjvphc");
		set_class(button_1, 1, `px-2.5 py-1 rounded-lg border text-[11px] font-medium transition-colors cursor-pointer shrink-0 whitespace-nowrap ${get(activePreset) === "today" ? "bg-primary text-primary-foreground border-primary" : "border-border bg-background hover:bg-muted text-muted-foreground"}`, "svelte-wjvphc");
		set_class(button_2, 1, `px-2.5 py-1 rounded-lg border text-[11px] font-medium transition-colors cursor-pointer shrink-0 whitespace-nowrap ${get(activePreset) === "this_week" ? "bg-primary text-primary-foreground border-primary" : "border-border bg-background hover:bg-muted text-muted-foreground"}`, "svelte-wjvphc");
		set_class(button_3, 1, `px-2.5 py-1 rounded-lg border text-[11px] font-medium transition-colors cursor-pointer shrink-0 whitespace-nowrap ${get(activePreset) === "this_month" ? "bg-primary text-primary-foreground border-primary" : "border-border bg-background hover:bg-muted text-muted-foreground"}`, "svelte-wjvphc");
		set_class(button_4, 1, `px-2.5 py-1 rounded-lg border text-[11px] font-medium transition-colors cursor-pointer shrink-0 whitespace-nowrap ${get(activePreset) === "last_30" ? "bg-primary text-primary-foreground border-primary" : "border-border bg-background hover:bg-muted text-muted-foreground"}`, "svelte-wjvphc");
		set_class(button_5, 1, `px-2.5 py-1 rounded-lg border text-[11px] font-medium transition-colors cursor-pointer shrink-0 whitespace-nowrap ${get(activePreset) === "this_year" ? "bg-primary text-primary-foreground border-primary" : "border-border bg-background hover:bg-muted text-muted-foreground"}`, "svelte-wjvphc");
	});
	delegated("click", button, () => setPreset("all"));
	delegated("click", button_1, () => setPreset("today"));
	delegated("click", button_2, () => setPreset("this_week"));
	delegated("click", button_3, () => setPreset("this_month"));
	delegated("click", button_4, () => setPreset("last_30"));
	delegated("click", button_5, () => setPreset("this_year"));
	delegated("change", input, handleCustomDateChange);
	bind_value(input, () => get(startDate), ($$value) => set(startDate, $$value));
	delegated("change", input_1, handleCustomDateChange);
	bind_value(input_1, () => get(endDate), ($$value) => set(endDate, $$value));
	append($$anchor, div);
	pop();
}
delegate(["click", "change"]);
//#endregion
export { _page as component };

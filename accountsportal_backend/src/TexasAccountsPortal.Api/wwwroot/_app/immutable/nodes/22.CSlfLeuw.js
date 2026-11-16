import { B as append, Ct as setup_stores, D as head, H as from_html, I as if_block, K as delegate, Lt as next, Mt as push, N as each, Q as get, R as set_text, Rt as reset, T as clsx, V as comment, _ as set_attribute, dt as child, ft as first_child, gt as set, it as effect, jt as pop, mt as proxy, n as onDestroy, o as prop, ot as template_effect, pt as sibling, q as delegated, r as onMount, ut as $document, vt as state, w as set_class, wt as store_get, xt as user_derived } from "../chunks/CjADOP7e.js";
import { t as goto } from "../chunks/C5QKnpxf.js";
import "../chunks/DhaYE-8x.js";
import { t as apiFetch } from "../chunks/D0ru13I8.js";
import { i as hasRole, r as currentUser } from "../chunks/DC5lHj69.js";
import { t as addToast } from "../chunks/_zpa1t7W.js";
import { t as Arrow_down_left } from "../chunks/Bo-NYau8.js";
import { t as Arrow_right } from "../chunks/DSz4iAfB.js";
import { t as Arrow_up_right } from "../chunks/Cnyg5tb5.js";
import { t as Briefcase } from "../chunks/Cb-_DS_d.js";
import { t as Building_2 } from "../chunks/e67bcgfv.js";
import { t as Check } from "../chunks/BfiA2OEz.js";
import { t as Clock } from "../chunks/3haK3Z-k.js";
import { t as External_link } from "../chunks/CkFmjMC4.js";
import { t as Receipt } from "../chunks/L2ko-uPO2.js";
import { t as Refresh_cw } from "../chunks/CfBhdLL12.js";
import { t as ErrorState } from "../chunks/BPpeCRiF2.js";
import { t as Shield_check } from "../chunks/BFY9LH_H2.js";
import { t as Shopping_bag } from "../chunks/E2uwuhLR2.js";
import { t as Square_check_big } from "../chunks/XMamFxbh.js";
import { t as User } from "../chunks/DPn7dE8H.js";
import { t as Users } from "../chunks/Cr4apkbu.js";
import { t as Wallet } from "../chunks/CNG10Uve.js";
import { t as X } from "../chunks/Br3xtG5S.js";
import { t as Button } from "../chunks/Ci9pdkd8.js";
import "../chunks/6kb1xv_Q.js";
import { t as MoneyDisplay } from "../chunks/yzLuLjlN.js";
import { t as DateDisplay } from "../chunks/C8F0fj7I.js";
import "../chunks/C0JWHsER.js";
import { t as EmptyState } from "../chunks/Ce9Qbc12.js";
import { t as FinancialTableSkeleton } from "../chunks/CXeZQ6o6.js";
import { t as FinancialCardSkeleton } from "../chunks/DV0f6m89.js";
import { t as FormattedNarrative } from "../chunks/kCRCqtyz.js";
import { n as FinancialStatusBadge, t as TransactionTypeChip } from "../chunks/DoxIzlbr2.js";
import { t as approveExpense } from "../chunks/0kgsyebs2.js";
//#region src/features/dashboard/api.ts
/**
* Dashboard feature API service.
* Composes data from GET /api/reconciliation/summary + GET /api/transaction (recent).
*/
/**
* Fetches the reconciliation summary (balance overview).
* GET /api/reconciliation/summary
*/
async function getReconciliationSummary(signal) {
	return apiFetch("/api/reconciliation/summary", { signal });
}
/**
* Fetches the most recent transactions for the dashboard feed.
* Uses GET /api/transaction with pageSize=10.
*/
async function getRecentTransactions(signal) {
	return apiFetch("/api/transaction?pageSize=10", { signal });
}
//#endregion
//#region src/lib/components/financial/MoneyAmount.svelte
var root$2 = from_html(`<span><span aria-hidden="true"> </span> <span class="text-[0.75em] text-muted-foreground font-normal ml-0.5"> </span></span>`);
function MoneyAmount($$anchor, $$props) {
	push($$props, true);
	/**
	* MoneyAmount — formats and displays a financial amount.
	*
	* Uses backend-provided values only. Does not calculate authoritative amounts.
	* Formats using Intl.NumberFormat with 3 decimal places (BHD standard).
	*/
	/** Show sign prefix (+ for positive, - for negative) */
	/** Size variant */
	/** Semantic tone override (auto-detected from sign if not provided) */
	/** Currency code (default: BHD) */
	let showSign = prop($$props, "showSign", 3, false), size = prop($$props, "size", 3, "md"), currency = prop($$props, "currency", 3, "BHD");
	const formattedAmount = user_derived(() => () => {
		const abs = Math.abs($$props.amount);
		return new Intl.NumberFormat("en-BH", {
			minimumFractionDigits: 3,
			maximumFractionDigits: 3
		}).format(abs);
	});
	const effectiveTone = user_derived(() => () => {
		if ($$props.tone) return $$props.tone;
		if ($$props.amount > 0) return "positive";
		if ($$props.amount < 0) return "negative";
		return "neutral";
	});
	const signPrefix = user_derived(() => () => {
		if (!showSign()) return "";
		if ($$props.amount > 0) return "+";
		if ($$props.amount < 0) return "-";
		return "";
	});
	const toneClass = user_derived(() => () => {
		switch (get(effectiveTone)()) {
			case "positive": return "text-emerald-600 dark:text-emerald-400";
			case "negative": return "text-red-600 dark:text-red-400";
			default: return "text-foreground";
		}
	});
	const sizeClass = user_derived(() => () => {
		switch (size()) {
			case "sm": return "text-xs";
			case "md": return "text-sm";
			case "lg": return "text-base font-semibold";
			case "xl": return "text-xl font-bold";
		}
	});
	var span = root$2();
	var span_1 = child(span);
	var text = child(span_1, true);
	reset(span_1);
	var text_1 = sibling(span_1);
	var span_2 = sibling(text_1);
	var text_2 = child(span_2, true);
	reset(span_2);
	reset(span);
	template_effect(($0, $1, $2, $3, $4) => {
		set_class(span, 1, $0);
		set_attribute(span, "aria-label", `${$1 ?? ""}${$2 ?? ""} ${currency() ?? ""}`);
		set_text(text, $3);
		set_text(text_1, `${$4 ?? ""} `);
		set_text(text_2, currency());
	}, [
		() => clsx([
			get(sizeClass)(),
			get(toneClass)(),
			"tabular-nums font-medium"
		].join(" ")),
		() => get(signPrefix)(),
		() => get(formattedAmount)(),
		() => get(signPrefix)(),
		() => get(formattedAmount)()
	]);
	append($$anchor, span);
	pop();
}
//#endregion
//#region src/lib/components/financial/FinancialSummaryCard.svelte
var root$1 = from_html(`<div class="h-3 w-20 bg-muted rounded mt-2"></div>`);
var root_1$1 = from_html(`<div class="animate-pulse"><div class="h-7 w-32 bg-muted rounded-lg"></div> <!></div>`);
var root_2$1 = from_html(`<p class="text-xs text-muted-foreground mt-1"> </p>`);
var root_3$1 = from_html(`<div><!> <!></div>`);
var root_4$1 = from_html(`<div class="bg-card border border-border rounded-2xl p-5 flex flex-col gap-3 shadow-xs"><div class="flex items-center justify-between"><span class="text-xs font-bold text-muted-foreground uppercase tracking-wider"> </span></div> <!></div>`);
function FinancialSummaryCard($$anchor, $$props) {
	/**
	* FinancialSummaryCard — displays a financial metric with label, value, and tone.
	* Used on the Dashboard for key balance metrics.
	*/
	/** Subtitle / additional context */
	let tone = prop($$props, "tone", 3, "neutral"), loading = prop($$props, "loading", 3, false);
	var div = root_4$1();
	var div_1 = child(div);
	var span = child(div_1);
	var text = child(span, true);
	reset(span);
	reset(div_1);
	var node = sibling(div_1, 2);
	var consequent_1 = ($$anchor) => {
		var div_2 = root_1$1();
		var node_1 = sibling(child(div_2), 2);
		var consequent = ($$anchor) => {
			append($$anchor, root$1());
		};
		if_block(node_1, ($$render) => {
			if ($$props.subtitle) $$render(consequent);
		});
		reset(div_2);
		append($$anchor, div_2);
	};
	var alternate = ($$anchor) => {
		var div_4 = root_3$1();
		var node_2 = child(div_4);
		MoneyAmount(node_2, {
			get amount() {
				return $$props.value;
			},
			size: "xl",
			get tone() {
				return tone();
			}
		});
		var node_3 = sibling(node_2, 2);
		var consequent_2 = ($$anchor) => {
			var p = root_2$1();
			var text_1 = child(p, true);
			reset(p);
			template_effect(() => set_text(text_1, $$props.subtitle));
			append($$anchor, p);
		};
		if_block(node_3, ($$render) => {
			if ($$props.subtitle) $$render(consequent_2);
		});
		reset(div_4);
		append($$anchor, div_4);
	};
	if_block(node, ($$render) => {
		if (loading()) $$render(consequent_1);
		else $$render(alternate, -1);
	});
	reset(div);
	template_effect(() => set_text(text, $$props.label));
	append($$anchor, div);
}
//#endregion
//#region src/routes/(app)/dashboard/+page.svelte
var root = from_html(`<!> <span>Refresh</span>`, 1);
var root_1 = from_html(`<div class="bg-card border border-border rounded-2xl p-5 shadow-xs space-y-3"><div class="flex items-center justify-between"><div class="flex items-center gap-2"><!> <h3 class="text-xs font-bold text-foreground uppercase tracking-wider">Portal Staff Administration</h3></div> <span class="text-[10px] text-muted-foreground">Portal-Centric Management</span></div> <div class="grid grid-cols-1 md:grid-cols-3 gap-3"><a href="/staffs/accounts" class="p-4 bg-muted/20 border border-blue-200/60 hover:border-blue-500/60 rounded-xl flex items-center justify-between group transition-all"><div class="flex items-center gap-3"><div class="p-2.5 rounded-lg bg-blue-500/10 text-blue-600"><!></div> <div><p class="text-xs font-bold text-foreground group-hover:text-blue-600 transition-colors">Accounts Staff</p> <p class="text-[10px] text-muted-foreground">Internal finance employees</p></div></div> <!></a> <a href="/staffs/sales" class="p-4 bg-muted/20 border border-emerald-200/60 hover:border-emerald-500/60 rounded-xl flex items-center justify-between group transition-all"><div class="flex items-center gap-3"><div class="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-600"><!></div> <div><p class="text-xs font-bold text-foreground group-hover:text-emerald-600 transition-colors">Sales Staff</p> <p class="text-[10px] text-muted-foreground">Agency salesmen & representatives</p></div></div> <!></a> <a href="/staffs/operational" class="p-4 bg-muted/20 border border-purple-200/60 hover:border-purple-500/60 rounded-xl flex items-center justify-between group transition-all"><div class="flex items-center gap-3"><div class="p-2.5 rounded-lg bg-purple-500/10 text-purple-600"><!></div> <div><p class="text-xs font-bold text-foreground group-hover:text-purple-600 transition-colors">Operational Staff</p> <p class="text-[10px] text-muted-foreground">Ops admins & section permissions</p></div></div> <!></a></div></div>`);
var root_2 = from_html(`<span class="px-2 py-0.5 rounded-full text-xs font-extrabold bg-amber-500 text-white"> </span>`);
var root_3 = from_html(`<div class="py-6 text-center text-xs text-muted-foreground flex flex-col items-center gap-1"><!> <span class="font-semibold text-foreground">No Pending Approvals</span> <span>All submitted requests and payment vouchers are currently up to date.</span></div>`);
var root_4 = from_html(`<div class="p-3.5 bg-background border border-border rounded-xl flex items-center justify-between gap-3 text-xs"><div class="space-y-1 truncate"><div class="flex items-center gap-2"><span class="px-2 py-0.5 rounded-full text-[9px] font-bold bg-amber-500/10 text-amber-600 border border-amber-500/20 uppercase tracking-wider"> </span> <span class="text-[10px] text-muted-foreground font-mono"> </span></div> <p class="font-bold text-foreground truncate"> </p> <p class="text-[10px] text-muted-foreground"> </p></div> <div class="flex items-center gap-1 shrink-0"><button class="p-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 text-xs font-semibold cursor-pointer disabled:opacity-50" title="Approve Request"><!></button> <button class="p-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 text-xs font-semibold cursor-pointer disabled:opacity-50" title="Reject Request"><!></button></div></div>`);
var root_5 = from_html(`<div class="p-3.5 bg-background border border-border rounded-xl flex items-center justify-between gap-3 text-xs"><div class="space-y-1 truncate"><div class="flex items-center gap-2"><span class="px-2 py-0.5 rounded-full text-[9px] font-bold bg-amber-500/10 text-amber-600 border border-amber-500/20 uppercase tracking-wider">Payment Voucher</span> <span class="text-[10px] font-mono font-bold text-foreground"> </span></div> <p class="font-bold text-foreground truncate"> </p> <p class="text-[10px] text-muted-foreground font-bold text-emerald-600"><!></p></div> <div class="flex items-center gap-1 shrink-0"><button class="p-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 text-xs font-semibold cursor-pointer disabled:opacity-50" title="Approve Voucher"><!></button></div></div>`);
var root_6 = from_html(`<div class="grid grid-cols-1 md:grid-cols-2 gap-3"><!> <!></div>`);
var root_7 = from_html(`<div class="bg-card border border-amber-500/30 dark:border-amber-500/20 rounded-2xl p-5 shadow-xs space-y-4"><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border"><div class="flex items-center gap-2.5"><div class="p-2 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20"><!></div> <div><h2 class="text-sm font-bold text-foreground flex items-center gap-2">Pending Master Accountant Approvals <!></h2> <p class="text-xs text-muted-foreground">Entity registrations, payment headers, and payment vouchers awaiting your approval</p></div></div> <a href="/pending-approvals" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-700 dark:text-amber-300 text-xs font-bold transition-colors cursor-pointer border border-amber-500/20 self-start sm:self-auto"><span> </span> <!></a></div> <!></div>`);
var root_8 = from_html(`<div class="hidden md:block bg-card border border-border rounded-2xl overflow-hidden"><!></div> <div class="block md:hidden"><!></div>`, 1);
var root_9 = from_html(`<!> <span class="truncate font-semibold"> </span>`, 1);
var root_10 = from_html(`<!> <span class="truncate"> </span>`, 1);
var root_11 = from_html(`<span class="text-muted-foreground/70">Cash Drawer / Internal</span>`);
var root_12 = from_html(`<strong class="text-foreground"> </strong>`);
var root_13 = from_html(`<span>Accounts</span>`);
var root_14 = from_html(`<a class="inline-flex items-center gap-1 text-[10px] font-mono font-semibold bg-muted hover:bg-muted/80 text-primary border border-border px-2 py-1 rounded-lg transition-colors"><span> </span> <!></a>`);
var root_15 = from_html(`<span class="font-mono text-[10px] bg-muted px-2 py-1 rounded-lg text-foreground font-semibold"> </span>`);
var root_16 = from_html(`<span class="font-mono text-[10px] text-muted-foreground"> </span>`);
var root_17 = from_html(`<span class="text-muted-foreground/50 text-[10px]">—</span>`);
var root_18 = from_html(`<!> <span class="text-emerald-600 dark:text-emerald-400"><!></span>`, 1);
var root_19 = from_html(`<!> <span class="text-rose-600 dark:text-rose-400"><!></span>`, 1);
var root_20 = from_html(`<span class="text-foreground"><!></span>`);
var root_21 = from_html(`<span class="block text-muted-foreground truncate">Posted by <strong class="text-foreground"> </strong></span>`);
var root_22 = from_html(`<span class="block text-emerald-600 dark:text-emerald-400 truncate">Approved by <strong> </strong></span>`);
var root_23 = from_html(`<span class="block text-rose-600 dark:text-rose-400 truncate">Rejected by <strong> </strong></span>`);
var root_24 = from_html(`<tr class="hover:bg-muted/15 transition-colors cursor-pointer"><td class="p-3.5 space-y-0.5"><span class="font-mono font-bold text-foreground block"> </span> <span class="text-[10px] text-muted-foreground block"><!></span></td><td class="p-3.5"><!> <span class="block text-[10px] text-muted-foreground mt-1 capitalize font-medium"> </span></td><td class="p-3.5"><div class="space-y-1 text-[11px]"><div class="flex items-center gap-1.5 font-medium text-foreground"><!></div> <div class="flex items-center gap-1 text-[10px] text-muted-foreground pl-0.5"><!> <span class="truncate font-mono"><!></span></div></div></td><td class="p-3.5 max-w-[280px]"><p class="line-clamp-2 text-[11px] leading-relaxed text-foreground font-medium"><!></p></td><td class="p-3.5"><!></td><td class="p-3.5 text-right font-bold text-sm font-mono"><div class="flex items-center justify-end gap-1"><!></div></td><td class="p-3.5"><!></td><td class="p-3.5 space-y-0.5 text-[10px]"><!> <!></td></tr>`);
var root_25 = from_html(`<span class="text-emerald-600 dark:text-emerald-400">+<!></span>`);
var root_26 = from_html(`<span class="text-rose-600 dark:text-rose-400">-<!></span>`);
var root_27 = from_html(`<a class="block bg-card border border-border rounded-2xl p-4 space-y-3 hover:border-primary/40 active:bg-muted/5 transition-all text-left"><div class="flex items-center justify-between"><div class="flex items-center gap-2"><!> <span class="font-mono font-bold text-xs text-foreground"> </span></div> <!></div> <p class="text-xs text-foreground font-medium line-clamp-2"><!></p> <div class="flex items-center justify-between text-xs pt-2 border-t border-border/40"><span class="text-muted-foreground text-[11px]"><!></span> <div class="font-bold font-mono text-sm"><!></div></div></a>`);
var root_28 = from_html(`<div class="hidden md:block bg-card border border-border rounded-2xl overflow-hidden shadow-xs"><div class="overflow-x-auto"><table class="w-full text-left border-collapse text-xs"><thead><tr class="bg-muted/40 border-b border-border text-muted-foreground font-semibold uppercase text-[10px] tracking-wider"><th class="p-3.5 w-24">Transaction</th><th class="p-3.5 w-24">Type</th><th class="p-3.5 w-52">Financial Flow</th><th class="p-3.5">Narrative Explanation</th><th class="p-3.5 w-32">Reference</th><th class="p-3.5 w-32 text-right">Amount</th><th class="p-3.5 w-28">Status</th><th class="p-3.5 w-32">Audit</th></tr></thead><tbody class="divide-y divide-border/60"></tbody></table></div></div> <div class="block md:hidden space-y-3"></div>`, 1);
var root_29 = from_html(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"><!> <!> <!> <!></div> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div class="bg-card border border-border hover:border-blue-500/50 rounded-2xl p-5 shadow-xs flex items-center justify-between cursor-pointer transition-all hover:shadow-md group" role="button" tabindex="0"><div class="flex items-center gap-4"><div class="p-3 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-xl group-hover:scale-105 transition-transform"><!></div> <div><div class="flex items-center gap-2"><h3 class="text-sm font-bold text-foreground group-hover:text-blue-600 transition-colors">Pending Sales Entries</h3> <span class="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-blue-600 text-white"> </span></div> <p class="text-xs text-muted-foreground mt-0.5"> </p></div></div> <div class="flex items-center text-xs font-semibold text-blue-600 group-hover:translate-x-1 transition-transform shrink-0"><span> </span> <!></div></div> <div class="bg-card border border-border hover:border-emerald-500/50 rounded-2xl p-5 shadow-xs flex items-center justify-between cursor-pointer transition-all hover:shadow-md group" role="button" tabindex="0"><div class="flex items-center gap-4"><div class="p-3 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-xl group-hover:scale-105 transition-transform"><!></div> <div><div class="flex items-center gap-2"><h3 class="text-sm font-bold text-foreground group-hover:text-emerald-600 transition-colors">Pending Receipts</h3> <span class="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-emerald-600 text-white"> </span></div> <p class="text-xs text-muted-foreground mt-0.5"> </p></div></div> <div class="flex items-center text-xs font-semibold text-emerald-600 group-hover:translate-x-1 transition-transform shrink-0"><span> </span> <!></div></div></div> <!> <!> <div class="space-y-3"><div class="flex items-center justify-between"><h2 class="text-sm font-bold text-foreground uppercase tracking-wider">Recent Transactions</h2> <a href="/transactions" class="text-xs font-semibold text-primary hover:underline">View All</a></div> <!></div>`, 1);
var root_30 = from_html(`<div class="space-y-6"><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"><div class="flex flex-col gap-1"><h1 class="text-xl font-bold text-foreground"> </h1> <p class="text-xs text-muted-foreground">Accounts Portal dashboard overview and current liquidity indicators.</p></div> <!></div> <!></div>`);
function _page($$anchor, $$props) {
	push($$props, true);
	const $currentUser = () => store_get(currentUser, "$currentUser", $$stores);
	const [$$stores, $$cleanup] = setup_stores();
	let summary = state(null);
	let recentTransactions = state(proxy([]));
	let pendingApprovals = state(proxy([]));
	let pendingExpenses = state(proxy([]));
	let pendingSalesEntriesCount = state(0);
	let pendingReceiptsCount = state(0);
	let loading = state(true);
	let errorMsg = state(null);
	let correlationId = state("");
	let processingId = state(null);
	let abortController = null;
	const totalPendingCount = user_derived(() => get(pendingApprovals).length + get(pendingExpenses).length);
	async function loadDashboardData() {
		set(loading, true);
		set(errorMsg, null);
		set(correlationId, "");
		if (abortController) abortController.abort();
		abortController = new AbortController();
		try {
			const [summaryRes, transactionsRes, pendingRes, expensesRes, receiptsRes, flights, hotels, visa, vfs, holidays, transport, others] = await Promise.all([
				getReconciliationSummary(abortController.signal),
				getRecentTransactions(abortController.signal),
				hasRole("master_accountant") ? apiFetch("api/pending-approvals?status=pending").catch(() => []) : Promise.resolve([]),
				hasRole("master_accountant") ? apiFetch("api/Expenses").catch(() => []) : Promise.resolve([]),
				apiFetch("api/sales-entries/receipts?pageSize=100").catch(() => null),
				apiFetch("api/sales-entries/flights?status=pending&pageSize=100").catch(() => null),
				apiFetch("api/sales-entries/hotels?status=pending&pageSize=100").catch(() => null),
				apiFetch("api/sales-entries/visa?status=pending&pageSize=100").catch(() => null),
				apiFetch("api/sales-entries/vfs?status=pending&pageSize=100").catch(() => null),
				apiFetch("api/sales-entries/holiday-packages?status=pending&pageSize=100").catch(() => null),
				apiFetch("api/sales-entries/transportation?status=pending&pageSize=100").catch(() => null),
				apiFetch("api/sales-entries/other-services?status=pending&pageSize=100").catch(() => null)
			]);
			set(summary, summaryRes, true);
			set(recentTransactions, transactionsRes, true);
			set(pendingApprovals, pendingRes || [], true);
			set(pendingExpenses, (expensesRes || []).filter((e) => (e.status || "").toLowerCase() === "pendingapproval"), true);
			if (receiptsRes && receiptsRes.items) set(pendingReceiptsCount, receiptsRes.items.filter((r) => (r.status || "").toLowerCase() === "pending").length, true);
			const getPendingCount = (res) => {
				if (!res) return 0;
				if (typeof res.totalCount === "number") return res.totalCount;
				if (Array.isArray(res.items)) return res.items.filter((i) => (i.paymentStatus || i.status || "").toLowerCase() === "pending").length;
				return 0;
			};
			set(pendingSalesEntriesCount, getPendingCount(flights) + getPendingCount(hotels) + getPendingCount(visa) + getPendingCount(vfs) + getPendingCount(holidays) + getPendingCount(transport) + getPendingCount(others));
		} catch (err) {
			if (err.name === "AbortError") return;
			set(errorMsg, err.message || "Failed to load dashboard data. Please try again.", true);
			set(correlationId, err.correlationId || "", true);
		} finally {
			set(loading, false);
		}
	}
	async function quickApprovePending(item) {
		set(processingId, `approval-${item.id}`);
		try {
			await apiFetch(`api/pending-approvals/${item.id}/approve`, { method: "POST" });
			addToast(`Approved ${item.entityType.replace("_", " ")} request.`, "success");
			await loadDashboardData();
		} catch (err) {
			addToast(err.message || "Approval failed.", "error");
		} finally {
			set(processingId, null);
		}
	}
	async function quickRejectPending(item) {
		set(processingId, `approval-${item.id}`);
		try {
			await apiFetch(`api/pending-approvals/${item.id}/reject`, { method: "POST" });
			addToast("Request rejected.", "success");
			await loadDashboardData();
		} catch (err) {
			addToast(err.message || "Rejection failed.", "error");
		} finally {
			set(processingId, null);
		}
	}
	async function quickApproveExpense(exp) {
		set(processingId, `expense-${exp.id}`);
		try {
			await approveExpense(exp.id);
			addToast(`Payment voucher ${exp.expenseNumber} approved and posted.`, "success");
			await loadDashboardData();
		} catch (err) {
			addToast(err.message || "Expense approval failed.", "error");
		} finally {
			set(processingId, null);
		}
	}
	onMount(() => {
		loadDashboardData();
	});
	onDestroy(() => {
		if (abortController) abortController.abort();
	});
	var div = root_30();
	head("1tyszyy", ($$anchor) => {
		effect(() => {
			$document.title = "Dashboard — Accounts Portal";
		});
	});
	var div_1 = child(div);
	var div_2 = child(div_1);
	var h1 = child(div_2);
	var text = child(h1);
	reset(h1);
	next(2);
	reset(div_2);
	Button(sibling(div_2, 2), {
		variant: "outline",
		class: "h-8.5 rounded-xl cursor-pointer self-start sm:self-auto flex items-center gap-1.5 text-xs font-semibold",
		onclick: loadDashboardData,
		get disabled() {
			return get(loading);
		},
		children: ($$anchor, $$slotProps) => {
			var fragment = root();
			var node_1 = first_child(fragment);
			{
				let $0 = user_derived(() => ["h-3.5 w-3.5", get(loading) ? "animate-spin" : ""].join(" "));
				Refresh_cw(node_1, { get class() {
					return get($0);
				} });
			}
			next(2);
			append($$anchor, fragment);
		},
		$$slots: { default: true }
	});
	reset(div_1);
	var node_2 = sibling(div_1, 2);
	var consequent = ($$anchor) => {
		ErrorState($$anchor, {
			get message() {
				return get(errorMsg);
			},
			get correlationId() {
				return get(correlationId);
			},
			retryAction: loadDashboardData
		});
	};
	var alternate_8 = ($$anchor) => {
		var fragment_2 = root_29();
		var div_3 = first_child(fragment_2);
		var node_3 = child(div_3);
		{
			let $0 = user_derived(() => get(summary)?.totalBankBalance ?? 0);
			FinancialSummaryCard(node_3, {
				label: "Bank Balance",
				get value() {
					return get($0);
				},
				subtitle: "Total across active banks",
				tone: "neutral",
				get loading() {
					return get(loading);
				}
			});
		}
		var node_4 = sibling(node_3, 2);
		{
			let $0 = user_derived(() => get(summary)?.totalAccountBalance ?? 0);
			FinancialSummaryCard(node_4, {
				label: "Account Balance",
				get value() {
					return get($0);
				},
				subtitle: "Total across active cash/credit accounts",
				tone: "neutral",
				get loading() {
					return get(loading);
				}
			});
		}
		var node_5 = sibling(node_4, 2);
		{
			let $0 = user_derived(() => get(summary)?.totalSupplierWalletBalance ?? 0);
			FinancialSummaryCard(node_5, {
				label: "Supplier Wallet Balance",
				get value() {
					return get($0);
				},
				subtitle: "Total customer pre-funded wallet balance",
				tone: "positive",
				get loading() {
					return get(loading);
				}
			});
		}
		var node_6 = sibling(node_5, 2);
		{
			let $0 = user_derived(() => get(summary)?.totalSupplierCreditWalletBalance ?? 0);
			FinancialSummaryCard(node_6, {
				label: "Supplier Credit Balance",
				get value() {
					return get($0);
				},
				subtitle: "Total customer credit limits/balances",
				tone: "negative",
				get loading() {
					return get(loading);
				}
			});
		}
		reset(div_3);
		var div_4 = sibling(div_3, 2);
		var div_5 = child(div_4);
		var div_6 = child(div_5);
		var div_7 = child(div_6);
		Shopping_bag(child(div_7), { class: "h-6 w-6" });
		reset(div_7);
		var div_8 = sibling(div_7, 2);
		var div_9 = child(div_8);
		var span = sibling(child(div_9), 2);
		var text_1 = child(span, true);
		reset(span);
		reset(div_9);
		var p_1 = sibling(div_9, 2);
		var text_2 = child(p_1);
		reset(p_1);
		reset(div_8);
		reset(div_6);
		var div_10 = sibling(div_6, 2);
		var span_1 = child(div_10);
		var text_3 = child(span_1);
		reset(span_1);
		Arrow_right(sibling(span_1, 2), { class: "h-4 w-4 ml-1" });
		reset(div_10);
		reset(div_5);
		var div_11 = sibling(div_5, 2);
		var div_12 = child(div_11);
		var div_13 = child(div_12);
		Receipt(child(div_13), { class: "h-6 w-6" });
		reset(div_13);
		var div_14 = sibling(div_13, 2);
		var div_15 = child(div_14);
		var span_2 = sibling(child(div_15), 2);
		var text_4 = child(span_2, true);
		reset(span_2);
		reset(div_15);
		var p_2 = sibling(div_15, 2);
		var text_5 = child(p_2);
		reset(p_2);
		reset(div_14);
		reset(div_12);
		var div_16 = sibling(div_12, 2);
		var span_3 = child(div_16);
		var text_6 = child(span_3);
		reset(span_3);
		Arrow_right(sibling(span_3, 2), { class: "h-4 w-4 ml-1" });
		reset(div_16);
		reset(div_11);
		reset(div_4);
		var node_11 = sibling(div_4, 2);
		var consequent_1 = ($$anchor) => {
			var div_17 = root_1();
			var div_18 = child(div_17);
			var div_19 = child(div_18);
			Users(child(div_19), { class: "h-4 w-4 text-violet-600" });
			next(2);
			reset(div_19);
			next(2);
			reset(div_18);
			var div_20 = sibling(div_18, 2);
			var a = child(div_20);
			var div_21 = child(a);
			var div_22 = child(div_21);
			Building_2(child(div_22), { class: "h-4 w-4" });
			reset(div_22);
			next(2);
			reset(div_21);
			Arrow_right(sibling(div_21, 2), { class: "h-3.5 w-3.5 text-blue-600 group-hover:translate-x-0.5 transition-transform" });
			reset(a);
			var a_1 = sibling(a, 2);
			var div_23 = child(a_1);
			var div_24 = child(div_23);
			Briefcase(child(div_24), { class: "h-4 w-4" });
			reset(div_24);
			next(2);
			reset(div_23);
			Arrow_right(sibling(div_23, 2), { class: "h-3.5 w-3.5 text-emerald-600 group-hover:translate-x-0.5 transition-transform" });
			reset(a_1);
			var a_2 = sibling(a_1, 2);
			var div_25 = child(a_2);
			var div_26 = child(div_25);
			Shield_check(child(div_26), { class: "h-4 w-4" });
			reset(div_26);
			next(2);
			reset(div_25);
			Arrow_right(sibling(div_25, 2), { class: "h-3.5 w-3.5 text-purple-600 group-hover:translate-x-0.5 transition-transform" });
			reset(a_2);
			reset(div_20);
			reset(div_17);
			append($$anchor, div_17);
		};
		var d = user_derived(() => hasRole("master_accountant"));
		if_block(node_11, ($$render) => {
			if (get(d)) $$render(consequent_1);
		});
		var node_19 = sibling(node_11, 2);
		var consequent_4 = ($$anchor) => {
			var div_27 = root_7();
			var div_28 = child(div_27);
			var div_29 = child(div_28);
			var div_30 = child(div_29);
			Square_check_big(child(div_30), { class: "h-5 w-5" });
			reset(div_30);
			var div_31 = sibling(div_30, 2);
			var h2 = child(div_31);
			var node_21 = sibling(child(h2));
			var consequent_2 = ($$anchor) => {
				var span_4 = root_2();
				var text_7 = child(span_4, true);
				reset(span_4);
				template_effect(() => set_text(text_7, get(totalPendingCount)));
				append($$anchor, span_4);
			};
			if_block(node_21, ($$render) => {
				if (get(totalPendingCount) > 0) $$render(consequent_2);
			});
			reset(h2);
			next(2);
			reset(div_31);
			reset(div_29);
			var a_3 = sibling(div_29, 2);
			var span_5 = child(a_3);
			var text_8 = child(span_5);
			reset(span_5);
			Arrow_right(sibling(span_5, 2), { class: "h-3.5 w-3.5" });
			reset(a_3);
			reset(div_28);
			var node_23 = sibling(div_28, 2);
			var consequent_3 = ($$anchor) => {
				var div_32 = root_3();
				Clock(child(div_32), { class: "h-6 w-6 text-muted-foreground/40" });
				next(4);
				reset(div_32);
				append($$anchor, div_32);
			};
			var alternate = ($$anchor) => {
				var div_33 = root_6();
				var node_25 = child(div_33);
				each(node_25, 17, () => get(pendingApprovals).slice(0, 2), (p) => p.id, ($$anchor, p) => {
					const payload = user_derived(() => JSON.parse(get(p).payloadJson || "{}"));
					var div_34 = root_4();
					var div_35 = child(div_34);
					var div_36 = child(div_35);
					var span_6 = child(div_36);
					var text_9 = child(span_6, true);
					reset(span_6);
					var span_7 = sibling(span_6, 2);
					var text_10 = child(span_7);
					reset(span_7);
					reset(div_36);
					var p_3 = sibling(div_36, 2);
					var text_11 = child(p_3, true);
					reset(p_3);
					var p_4 = sibling(p_3, 2);
					var text_12 = child(p_4);
					reset(p_4);
					reset(div_35);
					var div_37 = sibling(div_35, 2);
					var button = child(div_37);
					Check(child(button), { class: "h-3.5 w-3.5" });
					reset(button);
					var button_1 = sibling(button, 2);
					X(child(button_1), { class: "h-3.5 w-3.5" });
					reset(button_1);
					reset(div_37);
					reset(div_34);
					template_effect(($0, $1) => {
						set_text(text_9, $0);
						set_text(text_10, `#${get(p).id ?? ""}`);
						set_text(text_11, $1);
						set_text(text_12, `By ${get(p).submittedByName ?? ""}`);
						button.disabled = get(processingId) === `approval-${get(p).id}`;
						button_1.disabled = get(processingId) === `approval-${get(p).id}`;
					}, [() => get(p).entityType.replace("_", " "), () => get(payload).name || get(payload).Name || `${get(payload).firstName ?? ""} ${get(payload).lastName ?? ""}`.trim() || "Request"]);
					delegated("click", button, () => quickApprovePending(get(p)));
					delegated("click", button_1, () => quickRejectPending(get(p)));
					append($$anchor, div_34);
				});
				each(sibling(node_25, 2), 17, () => get(pendingExpenses).slice(0, 2), (exp) => exp.id, ($$anchor, exp) => {
					var div_38 = root_5();
					var div_39 = child(div_38);
					var div_40 = child(div_39);
					var span_8 = sibling(child(div_40), 2);
					var text_13 = child(span_8, true);
					reset(span_8);
					reset(div_40);
					var p_5 = sibling(div_40, 2);
					var text_14 = child(p_5, true);
					reset(p_5);
					var p_6 = sibling(p_5, 2);
					MoneyDisplay(child(p_6), { get amount() {
						return get(exp).amount;
					} });
					reset(p_6);
					reset(div_39);
					var div_41 = sibling(div_39, 2);
					var button_2 = child(div_41);
					Check(child(button_2), { class: "h-3.5 w-3.5" });
					reset(button_2);
					reset(div_41);
					reset(div_38);
					template_effect(() => {
						set_text(text_13, get(exp).expenseNumber);
						set_text(text_14, get(exp).description);
						button_2.disabled = get(processingId) === `expense-${get(exp).id}`;
					});
					delegated("click", button_2, () => quickApproveExpense(get(exp)));
					append($$anchor, div_38);
				});
				reset(div_33);
				append($$anchor, div_33);
			};
			if_block(node_23, ($$render) => {
				if (get(totalPendingCount) === 0) $$render(consequent_3);
				else $$render(alternate, -1);
			});
			reset(div_27);
			template_effect(() => set_text(text_8, `Manage All Pending Approvals (${get(totalPendingCount) ?? ""})`));
			append($$anchor, div_27);
		};
		var d_1 = user_derived(() => hasRole("master_accountant"));
		if_block(node_19, ($$render) => {
			if (get(d_1)) $$render(consequent_4);
		});
		var div_42 = sibling(node_19, 2);
		var node_31 = sibling(child(div_42), 2);
		var consequent_5 = ($$anchor) => {
			var fragment_3 = root_8();
			var div_43 = first_child(fragment_3);
			FinancialTableSkeleton(child(div_43), {
				rows: 5,
				columns: 6
			});
			reset(div_43);
			var div_44 = sibling(div_43, 2);
			FinancialCardSkeleton(child(div_44), { count: 3 });
			reset(div_44);
			append($$anchor, fragment_3);
		};
		var consequent_6 = ($$anchor) => {
			EmptyState($$anchor, {
				title: "No transactions found",
				description: "There are no financial postings registered in this period.",
				get icon() {
					return Receipt;
				}
			});
		};
		var alternate_7 = ($$anchor) => {
			var fragment_5 = root_28();
			var div_45 = first_child(fragment_5);
			var div_46 = child(div_45);
			var table = child(div_46);
			var tbody = sibling(child(table));
			each(tbody, 21, () => get(recentTransactions), (tx) => tx.id, ($$anchor, tx) => {
				var tr = root_24();
				var td = child(tr);
				var span_9 = child(td);
				var text_15 = child(span_9, true);
				reset(span_9);
				var span_10 = sibling(span_9, 2);
				DateDisplay(child(span_10), { get value() {
					return get(tx).createdAt;
				} });
				reset(span_10);
				reset(td);
				var td_1 = sibling(td);
				var node_35 = child(td_1);
				TransactionTypeChip(node_35, { get type() {
					return get(tx).transactionType;
				} });
				var span_11 = sibling(node_35, 2);
				var text_16 = child(span_11, true);
				reset(span_11);
				reset(td_1);
				var td_2 = sibling(td_1);
				var div_47 = child(td_2);
				var div_48 = child(div_47);
				var node_36 = child(div_48);
				var consequent_7 = ($$anchor) => {
					var fragment_6 = root_9();
					var node_37 = first_child(fragment_6);
					User(node_37, { class: "h-3 w-3 text-primary shrink-0" });
					var span_12 = sibling(node_37, 2);
					var text_17 = child(span_12, true);
					reset(span_12);
					template_effect(() => set_text(text_17, get(tx).sourceParty.name));
					append($$anchor, fragment_6);
				};
				var consequent_8 = ($$anchor) => {
					var fragment_7 = root_9();
					var node_38 = first_child(fragment_7);
					Building_2(node_38, { class: "h-3 w-3 text-blue-500 shrink-0" });
					var span_13 = sibling(node_38, 2);
					var text_18 = child(span_13, true);
					reset(span_13);
					template_effect(() => set_text(text_18, get(tx).sourceBankName));
					append($$anchor, fragment_7);
				};
				var consequent_9 = ($$anchor) => {
					var fragment_8 = root_10();
					var node_39 = first_child(fragment_8);
					Wallet(node_39, { class: "h-3 w-3 text-amber-500 shrink-0" });
					var span_14 = sibling(node_39, 2);
					var text_19 = child(span_14, true);
					reset(span_14);
					template_effect(() => set_text(text_19, get(tx).sourceAccountName));
					append($$anchor, fragment_8);
				};
				var alternate_1 = ($$anchor) => {
					append($$anchor, root_11());
				};
				if_block(node_36, ($$render) => {
					if (get(tx).sourceParty) $$render(consequent_7);
					else if (get(tx).sourceBankName) $$render(consequent_8, 1);
					else if (get(tx).sourceAccountName) $$render(consequent_9, 2);
					else $$render(alternate_1, -1);
				});
				reset(div_48);
				var div_49 = sibling(div_48, 2);
				var node_40 = child(div_49);
				Arrow_right(node_40, { class: "h-3 w-3 text-primary/70 shrink-0" });
				var span_16 = sibling(node_40, 2);
				var node_41 = child(span_16);
				var consequent_10 = ($$anchor) => {
					var strong = root_12();
					var text_20 = child(strong, true);
					reset(strong);
					template_effect(() => set_text(text_20, get(tx).destinationParty.name));
					append($$anchor, strong);
				};
				var consequent_11 = ($$anchor) => {
					var strong_1 = root_12();
					var text_21 = child(strong_1, true);
					reset(strong_1);
					template_effect(() => set_text(text_21, get(tx).destinationBankName));
					append($$anchor, strong_1);
				};
				var consequent_12 = ($$anchor) => {
					var strong_2 = root_12();
					var text_22 = child(strong_2, true);
					reset(strong_2);
					template_effect(() => set_text(text_22, get(tx).destinationAccountName));
					append($$anchor, strong_2);
				};
				var alternate_2 = ($$anchor) => {
					append($$anchor, root_13());
				};
				if_block(node_41, ($$render) => {
					if (get(tx).destinationParty) $$render(consequent_10);
					else if (get(tx).destinationBankName) $$render(consequent_11, 1);
					else if (get(tx).destinationAccountName) $$render(consequent_12, 2);
					else $$render(alternate_2, -1);
				});
				reset(span_16);
				reset(div_49);
				reset(div_47);
				reset(td_2);
				var td_3 = sibling(td_2);
				var p_7 = child(td_3);
				var node_42 = child(p_7);
				{
					let $0 = user_derived(() => get(tx).displayNarrative || get(tx).description || "Standard posting.");
					FormattedNarrative(node_42, { get text() {
						return get($0);
					} });
				}
				reset(p_7);
				reset(td_3);
				var td_4 = sibling(td_3);
				var node_43 = child(td_4);
				var consequent_14 = ($$anchor) => {
					var fragment_9 = comment();
					var node_44 = first_child(fragment_9);
					var consequent_13 = ($$anchor) => {
						var a_4 = root_14();
						var span_18 = child(a_4);
						var text_23 = child(span_18, true);
						reset(span_18);
						External_link(sibling(span_18, 2), { class: "h-2.5 w-2.5 shrink-0" });
						reset(a_4);
						template_effect(() => {
							set_attribute(a_4, "href", get(tx).referenceUrl);
							set_text(text_23, get(tx).referenceDisplayName);
						});
						append($$anchor, a_4);
					};
					var alternate_3 = ($$anchor) => {
						var span_19 = root_15();
						var text_24 = child(span_19, true);
						reset(span_19);
						template_effect(() => set_text(text_24, get(tx).referenceDisplayName));
						append($$anchor, span_19);
					};
					if_block(node_44, ($$render) => {
						if (get(tx).referenceUrl) $$render(consequent_13);
						else $$render(alternate_3, -1);
					});
					append($$anchor, fragment_9);
				};
				var consequent_15 = ($$anchor) => {
					var span_20 = root_16();
					var text_25 = child(span_20, true);
					reset(span_20);
					template_effect(() => set_text(text_25, get(tx).referenceId));
					append($$anchor, span_20);
				};
				var alternate_4 = ($$anchor) => {
					append($$anchor, root_17());
				};
				if_block(node_43, ($$render) => {
					if (get(tx).referenceDisplayName) $$render(consequent_14);
					else if (get(tx).referenceId) $$render(consequent_15, 1);
					else $$render(alternate_4, -1);
				});
				reset(td_4);
				var td_5 = sibling(td_4);
				var div_50 = child(td_5);
				var node_46 = child(div_50);
				var consequent_16 = ($$anchor) => {
					var fragment_10 = root_18();
					var node_47 = first_child(fragment_10);
					Arrow_down_left(node_47, { class: "h-3.5 w-3.5 text-emerald-500" });
					var span_22 = sibling(node_47, 2);
					MoneyDisplay(child(span_22), { get amount() {
						return get(tx).amount;
					} });
					reset(span_22);
					append($$anchor, fragment_10);
				};
				var consequent_17 = ($$anchor) => {
					var fragment_11 = root_19();
					var node_49 = first_child(fragment_11);
					Arrow_up_right(node_49, { class: "h-3.5 w-3.5 text-rose-500" });
					var span_23 = sibling(node_49, 2);
					MoneyDisplay(child(span_23), { get amount() {
						return get(tx).amount;
					} });
					reset(span_23);
					append($$anchor, fragment_11);
				};
				var alternate_5 = ($$anchor) => {
					var span_24 = root_20();
					MoneyDisplay(child(span_24), { get amount() {
						return get(tx).amount;
					} });
					reset(span_24);
					append($$anchor, span_24);
				};
				if_block(node_46, ($$render) => {
					if (get(tx).transactionType === "incoming") $$render(consequent_16);
					else if (get(tx).transactionType === "outgoing") $$render(consequent_17, 1);
					else $$render(alternate_5, -1);
				});
				reset(div_50);
				reset(td_5);
				var td_6 = sibling(td_5);
				FinancialStatusBadge(child(td_6), {
					get status() {
						return get(tx).status;
					},
					size: "sm"
				});
				reset(td_6);
				var td_7 = sibling(td_6);
				var node_53 = child(td_7);
				var consequent_18 = ($$anchor) => {
					var span_25 = root_21();
					var strong_3 = sibling(child(span_25));
					var text_26 = child(strong_3, true);
					reset(strong_3);
					reset(span_25);
					template_effect(() => set_text(text_26, get(tx).createdByName));
					append($$anchor, span_25);
				};
				if_block(node_53, ($$render) => {
					if (get(tx).createdByName) $$render(consequent_18);
				});
				var node_54 = sibling(node_53, 2);
				var consequent_19 = ($$anchor) => {
					var span_26 = root_22();
					var strong_4 = sibling(child(span_26));
					var text_27 = child(strong_4, true);
					reset(strong_4);
					reset(span_26);
					template_effect(() => set_text(text_27, get(tx).approvedByName));
					append($$anchor, span_26);
				};
				var consequent_20 = ($$anchor) => {
					var span_27 = root_23();
					var strong_5 = sibling(child(span_27));
					var text_28 = child(strong_5, true);
					reset(strong_5);
					reset(span_27);
					template_effect(() => set_text(text_28, get(tx).rejectedByName));
					append($$anchor, span_27);
				};
				if_block(node_54, ($$render) => {
					if (get(tx).status === "approved" && get(tx).approvedByName) $$render(consequent_19);
					else if (get(tx).status === "rejected" && get(tx).rejectedByName) $$render(consequent_20, 1);
				});
				reset(td_7);
				reset(tr);
				template_effect(() => {
					set_text(text_15, get(tx).documentNumber);
					set_text(text_16, get(tx).paymentMethodName || get(tx).paymentMethod);
				});
				delegated("click", tr, () => goto(`/transactions/${get(tx).id}`));
				delegated("click", td_4, (e) => e.stopPropagation());
				append($$anchor, tr);
			});
			reset(tbody);
			reset(table);
			reset(div_46);
			reset(div_45);
			var div_51 = sibling(div_45, 2);
			each(div_51, 21, () => get(recentTransactions), (tx) => tx.id, ($$anchor, tx) => {
				var a_5 = root_27();
				var div_52 = child(a_5);
				var div_53 = child(div_52);
				var node_55 = child(div_53);
				TransactionTypeChip(node_55, { get type() {
					return get(tx).transactionType;
				} });
				var span_28 = sibling(node_55, 2);
				var text_29 = child(span_28, true);
				reset(span_28);
				reset(div_53);
				FinancialStatusBadge(sibling(div_53, 2), {
					get status() {
						return get(tx).status;
					},
					size: "sm"
				});
				reset(div_52);
				var p_8 = sibling(div_52, 2);
				var node_57 = child(p_8);
				{
					let $0 = user_derived(() => get(tx).displayNarrative || get(tx).description);
					FormattedNarrative(node_57, { get text() {
						return get($0);
					} });
				}
				reset(p_8);
				var div_54 = sibling(p_8, 2);
				var span_29 = child(div_54);
				DateDisplay(child(span_29), { get value() {
					return get(tx).createdAt;
				} });
				reset(span_29);
				var div_55 = sibling(span_29, 2);
				var node_59 = child(div_55);
				var consequent_21 = ($$anchor) => {
					var span_30 = root_25();
					MoneyDisplay(sibling(child(span_30)), { get amount() {
						return get(tx).amount;
					} });
					reset(span_30);
					append($$anchor, span_30);
				};
				var consequent_22 = ($$anchor) => {
					var span_31 = root_26();
					MoneyDisplay(sibling(child(span_31)), { get amount() {
						return get(tx).amount;
					} });
					reset(span_31);
					append($$anchor, span_31);
				};
				var alternate_6 = ($$anchor) => {
					MoneyDisplay($$anchor, { get amount() {
						return get(tx).amount;
					} });
				};
				if_block(node_59, ($$render) => {
					if (get(tx).transactionType === "incoming") $$render(consequent_21);
					else if (get(tx).transactionType === "outgoing") $$render(consequent_22, 1);
					else $$render(alternate_6, -1);
				});
				reset(div_55);
				reset(div_54);
				reset(a_5);
				template_effect(() => {
					set_attribute(a_5, "href", `/transactions/${get(tx).id}`);
					set_text(text_29, get(tx).documentNumber);
				});
				append($$anchor, a_5);
			});
			reset(div_51);
			append($$anchor, fragment_5);
		};
		if_block(node_31, ($$render) => {
			if (get(loading)) $$render(consequent_5);
			else if (get(recentTransactions).length === 0) $$render(consequent_6, 1);
			else $$render(alternate_7, -1);
		});
		reset(div_42);
		template_effect(() => {
			set_text(text_1, get(pendingSalesEntriesCount));
			set_text(text_2, `${get(pendingSalesEntriesCount) ?? ""} unposted sales entry booking${get(pendingSalesEntriesCount) === 1 ? "" : "s"} awaiting approval`);
			set_text(text_3, `Manage (${get(pendingSalesEntriesCount) ?? ""})`);
			set_text(text_4, get(pendingReceiptsCount));
			set_text(text_5, `${get(pendingReceiptsCount) ?? ""} customer payment collection${get(pendingReceiptsCount) === 1 ? "" : "s"} awaiting posting`);
			set_text(text_6, `Manage (${get(pendingReceiptsCount) ?? ""})`);
		});
		delegated("click", div_5, () => goto("/sales/pending"));
		delegated("keydown", div_5, (e) => e.key === "Enter" && goto("/sales/pending"));
		delegated("click", div_11, () => goto("/sales/receipts"));
		delegated("keydown", div_11, (e) => e.key === "Enter" && goto("/sales/receipts"));
		append($$anchor, fragment_2);
	};
	if_block(node_2, ($$render) => {
		if (get(errorMsg)) $$render(consequent);
		else $$render(alternate_8, -1);
	});
	reset(div);
	template_effect(() => set_text(text, `Welcome back, ${$currentUser()?.name ?? ""}`));
	append($$anchor, div);
	pop();
	$$cleanup();
}
delegate(["click", "keydown"]);
//#endregion
export { _page as component };

import { At as pop, B as comment, C as set_class, Ct as store_get, E as head, F as if_block, G as delegate, It as next, K as delegated, L as set_text, Lt as reset, M as each, N as index, St as setup_stores, V as from_html, W as text, Z as get, _t as state, a as legacy_rest_props, at as template_effect, b as init_select, bt as user_derived, c as spread_props, dt as first_child, ft as sibling, g as set_attribute, h as remove_input_defaults, ht as set, j as slot, jt as push, lt as $document, n as onDestroy, ot as user_effect, pt as proxy, rt as effect, ut as child, v as set_value, x as select_option, z as append } from "../chunks/D1I-S_GP.js";
import { t as goto } from "../chunks/mp6QnMAy.js";
import "../chunks/DhaYE-8x.js";
import { i as hasRole } from "../chunks/l09GTHa1.js";
import "../chunks/Cr7lFLqy.js";
import { t as Icon } from "../chunks/DqzbDppW.js";
import { t as Arrow_down_left } from "../chunks/BBfCL7Wf.js";
import { t as Arrow_right } from "../chunks/C-944pq2.js";
import { t as Arrow_up_right } from "../chunks/Ch1Isg8P.js";
import { a as Ban, i as Building_2, n as TransactionApproveDialog, r as External_link, t as TransactionRejectDialog } from "../chunks/FKQsXT_e.js";
import { t as Check } from "../chunks/BTxh00Ga.js";
import { t as Chevron_left } from "../chunks/BL3frX6W.js";
import { t as Chevron_right } from "../chunks/Bl4HeTDx.js";
import { t as Clock } from "../chunks/C3FvnIDH.js";
import { t as Layers } from "../chunks/BMkhFxoR.js";
import { t as Receipt } from "../chunks/DViHr4et2.js";
import { t as ErrorState } from "../chunks/B6798c0A2.js";
import { t as Search } from "../chunks/BpbvLhlV2.js";
import { t as Trending_up } from "../chunks/tt6qBu-R2.js";
import { t as User } from "../chunks/MaYoAE5m2.js";
import { t as Wallet } from "../chunks/CMtq-y-i2.js";
import { t as X } from "../chunks/BVLERAre2.js";
import { t as page } from "../chunks/BnRCWMdT2.js";
import { t as Button } from "../chunks/DnwOswfh2.js";
import "../chunks/Cd763KZD2.js";
import { t as MoneyDisplay } from "../chunks/CtGP7dt02.js";
import { t as DateDisplay } from "../chunks/DCjxZDOf.js";
import "../chunks/KUhmdr7e.js";
import { t as EmptyState } from "../chunks/BEqFR0Tj.js";
import { t as FinancialTableSkeleton } from "../chunks/B6owkFON.js";
import { c as TRANSACTION_STATUS_CONFIG, d as TRANSACTION_TYPE_VALUES, l as TRANSACTION_STATUS_VALUES, s as REFERENCE_TYPE_VALUES, u as TRANSACTION_TYPE_CONFIG } from "../chunks/CXeRAu2j.js";
import { t as FinancialCardSkeleton } from "../chunks/DfWaWcrw.js";
import { o as getTransactions } from "../chunks/CPfV7WJF.js";
import { t as ConflictDialog } from "../chunks/CiWLteOP.js";
import { n as FinancialStatusBadge, t as TransactionTypeChip } from "../chunks/DBtgLuAH.js";
//#region node_modules/lucide-svelte/dist/icons/trending-down.svelte
function Trending_down($$anchor, $$props) {
	const $$sanitized_props = legacy_rest_props($$props, [
		"children",
		"$$slots",
		"$$events",
		"$$legacy"
	]);
	/**
	* @license lucide-svelte v1.0.1 - ISC
	*
	* ISC License
	*
	* Copyright (c) 2026 Lucide Icons and Contributors
	*
	* Permission to use, copy, modify, and/or distribute this software for any
	* purpose with or without fee is hereby granted, provided that the above
	* copyright notice and this permission notice appear in all copies.
	*
	* THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
	* WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
	* MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
	* ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
	* WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
	* ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
	* OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
	*
	* ---
	*
	* The following Lucide icons are derived from the Feather project:
	*
	* airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
	*
	* The MIT License (MIT) (for the icons listed above)
	*
	* Copyright (c) 2013-present Cole Bemis
	*
	* Permission is hereby granted, free of charge, to any person obtaining a copy
	* of this software and associated documentation files (the "Software"), to deal
	* in the Software without restriction, including without limitation the rights
	* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	* copies of the Software, and to permit persons to whom the Software is
	* furnished to do so, subject to the following conditions:
	*
	* The above copyright notice and this permission notice shall be included in all
	* copies or substantial portions of the Software.
	*
	* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	* SOFTWARE.
	*
	*/
	const iconNode = [["path", { "d": "M16 17h6v-6" }], ["path", { "d": "m22 17-8.5-8.5-5 5L2 7" }]];
	/**
	* @component @name TrendingDown
	* @description Lucide SVG icon component, renders SVG Element with children.
	*
	* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTYgMTdoNnYtNiIgLz4KICA8cGF0aCBkPSJtMjIgMTctOC41LTguNS01IDVMMiA3IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/trending-down
	* @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
	*
	* @param {Object} props - Lucide icons props and any valid SVG attribute
	* @returns {FunctionalComponent} Svelte component
	*
	*/
	Icon($$anchor, spread_props({ name: "trending-down" }, () => $$sanitized_props, {
		get iconNode() {
			return iconNode;
		},
		children: ($$anchor, $$slotProps) => {
			var fragment_1 = comment();
			slot(first_child(fragment_1), $$props, "default", {}, null);
			append($$anchor, fragment_1);
		},
		$$slots: { default: true }
	}));
}
//#endregion
//#region src/lib/utils/query-params.ts
/**
* URL query parameter utilities for financial list pages.
*
* Rules:
* - Only backend-supported filter values are allowed through
* - Invalid or unknown values are silently normalized (not passed to API)
* - No arbitrary string passthrough for enum fields
*/
var ALLOWED_PAGE_SIZES = [
	10,
	20,
	50,
	100
];
/**
* Safely parses transaction filters from a URL's search params.
* Invalid values are silently normalized to null/defaults.
*/
function parseTransactionFilters(url) {
	const params = url.searchParams;
	const statusRaw = params.get("status");
	const typeRaw = params.get("type");
	const refTypeRaw = params.get("referenceType");
	const refId = params.get("referenceId");
	const pageRaw = params.get("page");
	const pageSizeRaw = params.get("pageSize");
	const status = statusRaw && TRANSACTION_STATUS_VALUES.includes(statusRaw) ? statusRaw : null;
	const type = typeRaw && TRANSACTION_TYPE_VALUES.includes(typeRaw) ? typeRaw : null;
	const referenceType = refTypeRaw && REFERENCE_TYPE_VALUES.includes(refTypeRaw) ? refTypeRaw : null;
	const referenceId = refId && /^[\w-]{1,100}$/.test(refId) ? refId : null;
	const pageNum = parseInt(pageRaw ?? "1", 10);
	const page = isNaN(pageNum) || pageNum < 1 ? 1 : pageNum;
	const pageSizeNum = parseInt(pageSizeRaw ?? "20", 10);
	return {
		status,
		type,
		referenceType,
		referenceId,
		page,
		pageSize: ALLOWED_PAGE_SIZES.includes(pageSizeNum) ? pageSizeNum : 20
	};
}
/**
* Serializes transaction filters to URL search params.
* Null values are omitted (clean URL).
*/
function serializeTransactionFilters(filters, base = "http://localhost") {
	const params = new URLSearchParams();
	if (filters.status) params.set("status", filters.status);
	if (filters.type) params.set("type", filters.type);
	if (filters.referenceType) params.set("referenceType", filters.referenceType);
	if (filters.referenceId) params.set("referenceId", filters.referenceId);
	if (filters.page > 1) params.set("page", String(filters.page));
	if (filters.pageSize !== 20) params.set("pageSize", String(filters.pageSize));
	return params;
}
/**
* Returns true if the filters differ from defaults (i.e., active filters exist).
*/
function hasActiveFilters(filters) {
	return filters.status !== null || filters.type !== null || filters.referenceType !== null || filters.referenceId !== null || filters.page > 1;
}
//#endregion
//#region src/routes/(app)/transactions/+page.svelte
var root = from_html(`<option> </option>`);
var root_1 = from_html(`<span class="inline-flex items-center gap-1 bg-primary/10 text-primary px-2.5 py-1 rounded-full border border-primary/20 font-medium"> <button class="hover:text-destructive shrink-0 cursor-pointer"><!></button></span>`);
var root_2 = from_html(`<span class="inline-flex items-center gap-1 bg-muted px-2.5 py-1 rounded-full border border-border text-foreground"> <button class="hover:text-destructive shrink-0 cursor-pointer"><!></button></span>`);
var root_3 = from_html(`<div class="flex flex-wrap items-center gap-2 pt-2 border-t border-border/50 text-[11px]"><span class="text-muted-foreground font-medium mr-1">Active filters:</span> <!> <!> <!> <button class="text-xs font-semibold text-primary hover:underline ml-auto cursor-pointer">Clear All</button></div>`);
var root_4 = from_html(`<div class="hidden md:block bg-card border border-border rounded-2xl overflow-hidden"><!></div> <div class="block md:hidden"><!></div>`, 1);
var root_5 = from_html(`<!> <span class="truncate font-semibold"> </span>`, 1);
var root_6 = from_html(`<!> <span class="truncate"> </span>`, 1);
var root_7 = from_html(`<span class="text-muted-foreground/70">Cash Drawer / Internal</span>`);
var root_8 = from_html(`<strong class="text-foreground"> </strong>`);
var root_9 = from_html(`<span>Accounts</span>`);
var root_10 = from_html(`<a class="inline-flex items-center gap-1 text-[10px] font-mono font-semibold bg-muted hover:bg-muted/80 text-primary border border-border px-2 py-1 rounded-lg transition-colors"><span> </span> <!></a>`);
var root_11 = from_html(`<span class="font-mono text-[10px] bg-muted px-2 py-1 rounded-lg text-foreground font-semibold"> </span>`);
var root_12 = from_html(`<span class="font-mono text-[10px] text-muted-foreground"> </span>`);
var root_13 = from_html(`<span class="text-muted-foreground/50 text-[10px]">—</span>`);
var root_14 = from_html(`<!> <span class="text-emerald-600 dark:text-emerald-400"><!></span>`, 1);
var root_15 = from_html(`<!> <span class="text-rose-600 dark:text-rose-400"><!></span>`, 1);
var root_16 = from_html(`<span class="text-foreground"><!></span>`);
var root_17 = from_html(`<div class="flex items-center gap-1 text-[10px] text-emerald-600 font-semibold"><!> <span class="truncate"> </span></div>`);
var root_18 = from_html(`<div class="flex items-center gap-1 text-[10px] text-rose-600 font-semibold"><!> <span class="truncate"> </span></div>`);
var root_19 = from_html(`<div class="flex items-center justify-end gap-1.5"><button class="p-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-600 border border-emerald-200 cursor-pointer" title="Approve Transaction"><!></button> <button class="p-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 cursor-pointer" title="Reject Transaction"><!></button></div>`);
var root_20 = from_html(`<tr class="hover:bg-muted/15 transition-colors cursor-pointer"><td class="p-3.5 space-y-0.5"><span class="font-mono font-bold text-foreground block"> </span> <span class="text-[10px] text-muted-foreground block"><!></span></td><td class="p-3.5"><!> <span class="block text-[10px] text-muted-foreground mt-1 capitalize font-medium"> </span></td><td class="p-3.5"><div class="space-y-1 text-[11px]"><div class="flex items-center gap-1.5 font-medium text-foreground"><!></div> <div class="flex items-center gap-1 text-[10px] text-muted-foreground pl-0.5"><!> <span class="truncate font-mono"><!></span></div></div></td><td class="p-3.5 max-w-[280px]"><p class="line-clamp-2 text-[11px] leading-relaxed text-foreground font-medium"> </p></td><td class="p-3.5"><!></td><td class="p-3.5 text-right font-bold text-sm font-mono"><div class="flex items-center justify-end gap-1"><!></div></td><td class="p-3.5"><!></td><td class="p-3.5 space-y-0.5 text-[11px]"><div class="flex items-center gap-1 text-foreground font-medium"><!> <span class="truncate"> </span></div> <!></td><td class="p-3.5 text-right"><!></td></tr>`);
var root_21 = from_html(`<a class="block bg-card border border-border rounded-2xl p-4 space-y-3 hover:border-primary/40 transition-all text-left shadow-xs"><div class="flex items-center justify-between"><!> <span class="font-bold text-base font-mono"><!></span></div> <p class="text-xs text-foreground font-medium leading-relaxed"> </p> <div class="flex items-center justify-between text-[11px] pt-2 border-t border-border/40 text-muted-foreground"><span> </span> <!></div></a>`);
var root_22 = from_html(`<!> <span>Prev</span>`, 1);
var root_23 = from_html(`<span>Next</span> <!>`, 1);
var root_24 = from_html(`<div class="hidden md:block bg-card border border-border rounded-2xl overflow-hidden shadow-xs"><div class="overflow-x-auto"><table class="w-full text-left border-collapse text-xs"><thead><tr class="bg-muted/40 border-b border-border text-muted-foreground font-semibold uppercase text-[10px] tracking-wider"><th class="p-3.5 w-24">Transaction</th><th class="p-3.5 w-24">Type</th><th class="p-3.5 w-52">Financial Flow</th><th class="p-3.5">Narrative Explanation</th><th class="p-3.5 w-32">Reference</th><th class="p-3.5 w-32 text-right">Amount</th><th class="p-3.5 w-28">Status</th><th class="p-3.5 w-32">Audit</th><th class="p-3.5 w-28 text-right">Actions</th></tr></thead><tbody class="divide-y divide-border/60"></tbody></table></div></div> <div class="block md:hidden space-y-3"></div> <div class="flex items-center justify-between pt-2"><span class="text-[11px] text-muted-foreground font-medium"> </span> <div class="flex items-center gap-1.5"><!> <!></div></div>`, 1);
var root_25 = from_html(`<div class="space-y-6"><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"><div class="flex flex-col gap-1"><h1 class="text-xl font-bold text-foreground font-sans">Financial Transactions Workspace</h1> <p class="text-xs text-muted-foreground">Complete financial audit workspace. Track money origin, destinations, party flows, and General Ledger posting impacts.</p></div> <!></div> <div class="grid grid-cols-2 md:grid-cols-4 gap-3"><div class="bg-card border border-border p-4 rounded-2xl space-y-1 shadow-xs"><div class="flex items-center justify-between text-muted-foreground text-xs font-semibold"><span>Total Inflow</span> <!></div> <div class="text-lg font-bold font-mono text-emerald-600 dark:text-emerald-400"><!></div> <p class="text-[10px] text-muted-foreground/80">Received across filter selection</p></div> <div class="bg-card border border-border p-4 rounded-2xl space-y-1 shadow-xs"><div class="flex items-center justify-between text-muted-foreground text-xs font-semibold"><span>Total Outflow</span> <!></div> <div class="text-lg font-bold font-mono text-rose-600 dark:text-rose-400"><!></div> <p class="text-[10px] text-muted-foreground/80">Disbursed across filter selection</p></div> <div class="bg-card border border-border p-4 rounded-2xl space-y-1 shadow-xs"><div class="flex items-center justify-between text-muted-foreground text-xs font-semibold"><span>Net Movement</span> <!></div> <div><!></div> <p class="text-[10px] text-muted-foreground/80">Inflow minus Outflow</p></div> <div class="bg-card border border-border p-4 rounded-2xl space-y-1 shadow-xs"><div class="flex items-center justify-between text-muted-foreground text-xs font-semibold"><span>Pending Reviews</span> <!></div> <div class="text-lg font-bold text-amber-600 dark:text-amber-400"> <span class="text-xs font-normal text-muted-foreground">items</span></div> <p class="text-[10px] text-muted-foreground/80">Awaiting Accountant approval</p></div></div> <div class="bg-card border border-border rounded-2xl p-4 space-y-4 shadow-xs"><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"><div class="relative lg:col-span-2"><!> <input type="text" placeholder="Search by ID, Customer, Supplier, Agent, Bank, Account, Reference or Narrative..." class="w-full text-xs pl-9.5 pr-4 py-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary placeholder-muted-foreground/60 leading-relaxed font-medium"/></div> <select class="w-full text-xs p-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-foreground font-medium"><option>All Statuses</option><!></select> <select class="w-full text-xs p-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-foreground font-medium"><option>All Transaction Types</option><!></select></div> <!></div> <!></div> <!> <!> <!>`, 1);
function _page($$anchor, $$props) {
	push($$props, true);
	const $page = () => store_get(page, "$page", $$stores);
	const [$$stores, $$cleanup] = setup_stores();
	let transactions = state(proxy([]));
	let loading = state(true);
	let errorMsg = state(null);
	let correlationId = state("");
	let selectedTxId = state(null);
	let approveDialogOpen = state(false);
	let rejectDialogOpen = state(false);
	let conflictDialogOpen = state(false);
	let filters = user_derived(() => parseTransactionFilters($page().url));
	let searchInput = state("");
	let searchTimeout;
	let abortController = null;
	let pendingCount = user_derived(() => get(transactions).filter((t) => t.status === "pending").length);
	let totalInflow = user_derived(() => get(transactions).filter((t) => t.transactionType === "incoming").reduce((acc, t) => acc + t.amount, 0));
	let totalOutflow = user_derived(() => get(transactions).filter((t) => t.transactionType === "outgoing").reduce((acc, t) => acc + t.amount, 0));
	let netMovement = user_derived(() => get(totalInflow) - get(totalOutflow));
	async function loadTransactions() {
		set(loading, true);
		set(errorMsg, null);
		set(correlationId, "");
		if (abortController) abortController.abort();
		abortController = new AbortController();
		try {
			const res = await getTransactions({
				status: get(filters).status || void 0,
				type: get(filters).type || void 0,
				referenceType: get(filters).referenceType || void 0,
				referenceId: get(filters).referenceId || void 0,
				search: get(searchInput).trim() || void 0,
				page: get(filters).page,
				pageSize: get(filters).pageSize
			}, abortController.signal);
			set(transactions, res, true);
		} catch (err) {
			if (err.name === "AbortError") return;
			set(errorMsg, err.message || "Failed to load transactions.", true);
			set(correlationId, err.correlationId || "", true);
		} finally {
			set(loading, false);
		}
	}
	function updateFilters(newFilters) {
		const merged = {
			...get(filters),
			...newFilters
		};
		if (newFilters.page === void 0) merged.page = 1;
		const qs = serializeTransactionFilters(merged).toString();
		goto(`/transactions${qs ? `?${qs}` : ""}`, {
			keepFocus: true,
			noScroll: true
		});
	}
	function handleSearchInput(e) {
		const val = e.target.value;
		set(searchInput, val, true);
		clearTimeout(searchTimeout);
		searchTimeout = setTimeout(() => {
			loadTransactions();
		}, 350);
	}
	function clearFilters() {
		set(searchInput, "");
		goto("/transactions");
	}
	function refreshView() {
		loadTransactions();
	}
	function openApprove(id) {
		set(selectedTxId, id, true);
		set(approveDialogOpen, true);
	}
	function openReject(id) {
		set(selectedTxId, id, true);
		set(rejectDialogOpen, true);
	}
	user_effect(() => {
		if (get(filters).referenceId !== get(searchInput) && !get(searchInput)) set(searchInput, get(filters).referenceId || "", true);
		loadTransactions();
	});
	onDestroy(() => {
		if (abortController) abortController.abort();
		clearTimeout(searchTimeout);
	});
	var fragment = root_25();
	head("yb5gkr", ($$anchor) => {
		effect(() => {
			$document.title = "Financial Transactions Audit Workspace — Accounts Portal";
		});
	});
	var div = first_child(fragment);
	var div_1 = child(div);
	Button(sibling(child(div_1), 2), {
		class: "rounded-xl font-semibold text-xs py-5 px-4 cursor-pointer self-start sm:self-auto shadow-sm",
		onclick: () => goto("/transactions/new"),
		children: ($$anchor, $$slotProps) => {
			next();
			append($$anchor, text("Create Transaction"));
		},
		$$slots: { default: true }
	});
	reset(div_1);
	var div_2 = sibling(div_1, 2);
	var div_3 = child(div_2);
	var div_4 = child(div_3);
	Trending_up(sibling(child(div_4), 2), { class: "h-4 w-4 text-emerald-500" });
	reset(div_4);
	var div_5 = sibling(div_4, 2);
	MoneyDisplay(child(div_5), { get amount() {
		return get(totalInflow);
	} });
	reset(div_5);
	next(2);
	reset(div_3);
	var div_6 = sibling(div_3, 2);
	var div_7 = child(div_6);
	Trending_down(sibling(child(div_7), 2), { class: "h-4 w-4 text-rose-500" });
	reset(div_7);
	var div_8 = sibling(div_7, 2);
	MoneyDisplay(child(div_8), { get amount() {
		return get(totalOutflow);
	} });
	reset(div_8);
	next(2);
	reset(div_6);
	var div_9 = sibling(div_6, 2);
	var div_10 = child(div_9);
	Layers(sibling(child(div_10), 2), { class: "h-4 w-4 text-primary" });
	reset(div_10);
	var div_11 = sibling(div_10, 2);
	MoneyDisplay(child(div_11), { get amount() {
		return get(netMovement);
	} });
	reset(div_11);
	next(2);
	reset(div_9);
	var div_12 = sibling(div_9, 2);
	var div_13 = child(div_12);
	Clock(sibling(child(div_13), 2), { class: "h-4 w-4 text-amber-500" });
	reset(div_13);
	var div_14 = sibling(div_13, 2);
	var text_1 = child(div_14);
	next();
	reset(div_14);
	next(2);
	reset(div_12);
	reset(div_2);
	var div_15 = sibling(div_2, 2);
	var div_16 = child(div_15);
	var div_17 = child(div_16);
	var node_8 = child(div_17);
	Search(node_8, { class: "absolute left-3.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground/60" });
	var input = sibling(node_8, 2);
	remove_input_defaults(input);
	reset(div_17);
	var select = sibling(div_17, 2);
	var option = child(select);
	option.value = option.__value = "";
	each(sibling(option), 17, () => TRANSACTION_STATUS_VALUES, index, ($$anchor, st) => {
		var option_1 = root();
		var text_2 = child(option_1, true);
		reset(option_1);
		var option_1_value = {};
		template_effect(() => {
			set_text(text_2, TRANSACTION_STATUS_CONFIG[get(st)].label);
			if (option_1_value !== (option_1_value = get(st))) option_1.value = (option_1.__value = get(st)) ?? "";
		});
		append($$anchor, option_1);
	});
	reset(select);
	var select_value;
	init_select(select);
	var select_1 = sibling(select, 2);
	var option_2 = child(select_1);
	option_2.value = option_2.__value = "";
	each(sibling(option_2), 17, () => TRANSACTION_TYPE_VALUES, index, ($$anchor, ty) => {
		var option_3 = root();
		var text_3 = child(option_3, true);
		reset(option_3);
		var option_3_value = {};
		template_effect(() => {
			set_text(text_3, TRANSACTION_TYPE_CONFIG[get(ty)].label);
			if (option_3_value !== (option_3_value = get(ty))) option_3.value = (option_3.__value = get(ty)) ?? "";
		});
		append($$anchor, option_3);
	});
	reset(select_1);
	var select_1_value;
	init_select(select_1);
	reset(div_16);
	var node_11 = sibling(div_16, 2);
	var consequent_3 = ($$anchor) => {
		var div_18 = root_3();
		var node_12 = sibling(child(div_18), 2);
		var consequent = ($$anchor) => {
			var span = root_1();
			var text_4 = child(span);
			var button = sibling(text_4);
			X(child(button), { class: "h-3 w-3" });
			reset(button);
			reset(span);
			template_effect(() => set_text(text_4, `Search: "${get(searchInput) ?? ""}" `));
			delegated("click", button, () => {
				set(searchInput, "");
				loadTransactions();
			});
			append($$anchor, span);
		};
		if_block(node_12, ($$render) => {
			if (get(searchInput)) $$render(consequent);
		});
		var node_14 = sibling(node_12, 2);
		var consequent_1 = ($$anchor) => {
			var span_1 = root_2();
			var text_5 = child(span_1);
			var button_1 = sibling(text_5);
			X(child(button_1), { class: "h-3 w-3" });
			reset(button_1);
			reset(span_1);
			template_effect(() => set_text(text_5, `Status: ${TRANSACTION_STATUS_CONFIG[get(filters).status].label ?? ""} `));
			delegated("click", button_1, () => updateFilters({ status: null }));
			append($$anchor, span_1);
		};
		if_block(node_14, ($$render) => {
			if (get(filters).status) $$render(consequent_1);
		});
		var node_16 = sibling(node_14, 2);
		var consequent_2 = ($$anchor) => {
			var span_2 = root_2();
			var text_6 = child(span_2);
			var button_2 = sibling(text_6);
			X(child(button_2), { class: "h-3 w-3" });
			reset(button_2);
			reset(span_2);
			template_effect(() => set_text(text_6, `Type: ${TRANSACTION_TYPE_CONFIG[get(filters).type].label ?? ""} `));
			delegated("click", button_2, () => updateFilters({ type: null }));
			append($$anchor, span_2);
		};
		if_block(node_16, ($$render) => {
			if (get(filters).type) $$render(consequent_2);
		});
		var button_3 = sibling(node_16, 2);
		reset(div_18);
		delegated("click", button_3, clearFilters);
		append($$anchor, div_18);
	};
	var d = user_derived(() => hasActiveFilters(get(filters)) || get(searchInput));
	if_block(node_11, ($$render) => {
		if (get(d)) $$render(consequent_3);
	});
	reset(div_15);
	var node_18 = sibling(div_15, 2);
	var consequent_4 = ($$anchor) => {
		ErrorState($$anchor, {
			get message() {
				return get(errorMsg);
			},
			get correlationId() {
				return get(correlationId);
			},
			retryAction: refreshView
		});
	};
	var consequent_5 = ($$anchor) => {
		var fragment_2 = root_4();
		var div_19 = first_child(fragment_2);
		FinancialTableSkeleton(child(div_19), {
			get rows() {
				return get(filters).pageSize;
			},
			columns: 9
		});
		reset(div_19);
		var div_20 = sibling(div_19, 2);
		FinancialCardSkeleton(child(div_20), { count: 4 });
		reset(div_20);
		append($$anchor, fragment_2);
	};
	var consequent_6 = ($$anchor) => {
		EmptyState($$anchor, {
			title: "No transactions found",
			description: "No matching financial transactions found. Adjust search terms or clear active filters.",
			get icon() {
				return Receipt;
			}
		});
	};
	var alternate_6 = ($$anchor) => {
		var fragment_4 = root_24();
		var div_21 = first_child(fragment_4);
		var div_22 = child(div_21);
		var table = child(div_22);
		var tbody = sibling(child(table));
		each(tbody, 21, () => get(transactions), (tx) => tx.id, ($$anchor, tx) => {
			var tr = root_20();
			var td = child(tr);
			var span_3 = child(td);
			var text_7 = child(span_3);
			reset(span_3);
			var span_4 = sibling(span_3, 2);
			DateDisplay(child(span_4), { get value() {
				return get(tx).createdAt;
			} });
			reset(span_4);
			reset(td);
			var td_1 = sibling(td);
			var node_22 = child(td_1);
			TransactionTypeChip(node_22, { get type() {
				return get(tx).transactionType;
			} });
			var span_5 = sibling(node_22, 2);
			var text_8 = child(span_5, true);
			reset(span_5);
			reset(td_1);
			var td_2 = sibling(td_1);
			var div_23 = child(td_2);
			var div_24 = child(div_23);
			var node_23 = child(div_24);
			var consequent_7 = ($$anchor) => {
				var fragment_5 = root_5();
				var node_24 = first_child(fragment_5);
				User(node_24, { class: "h-3 w-3 text-primary shrink-0" });
				var span_6 = sibling(node_24, 2);
				var text_9 = child(span_6, true);
				reset(span_6);
				template_effect(() => set_text(text_9, get(tx).sourceParty.name));
				append($$anchor, fragment_5);
			};
			var consequent_8 = ($$anchor) => {
				var fragment_6 = root_5();
				var node_25 = first_child(fragment_6);
				Building_2(node_25, { class: "h-3 w-3 text-blue-500 shrink-0" });
				var span_7 = sibling(node_25, 2);
				var text_10 = child(span_7, true);
				reset(span_7);
				template_effect(() => set_text(text_10, get(tx).sourceBankName));
				append($$anchor, fragment_6);
			};
			var consequent_9 = ($$anchor) => {
				var fragment_7 = root_6();
				var node_26 = first_child(fragment_7);
				Wallet(node_26, { class: "h-3 w-3 text-amber-500 shrink-0" });
				var span_8 = sibling(node_26, 2);
				var text_11 = child(span_8, true);
				reset(span_8);
				template_effect(() => set_text(text_11, get(tx).sourceAccountName));
				append($$anchor, fragment_7);
			};
			var alternate = ($$anchor) => {
				append($$anchor, root_7());
			};
			if_block(node_23, ($$render) => {
				if (get(tx).sourceParty) $$render(consequent_7);
				else if (get(tx).sourceBankName) $$render(consequent_8, 1);
				else if (get(tx).sourceAccountName) $$render(consequent_9, 2);
				else $$render(alternate, -1);
			});
			reset(div_24);
			var div_25 = sibling(div_24, 2);
			var node_27 = child(div_25);
			Arrow_right(node_27, { class: "h-3 w-3 text-primary/70 shrink-0" });
			var span_10 = sibling(node_27, 2);
			var node_28 = child(span_10);
			var consequent_10 = ($$anchor) => {
				var strong = root_8();
				var text_12 = child(strong, true);
				reset(strong);
				template_effect(() => set_text(text_12, get(tx).destinationParty.name));
				append($$anchor, strong);
			};
			var consequent_11 = ($$anchor) => {
				var strong_1 = root_8();
				var text_13 = child(strong_1, true);
				reset(strong_1);
				template_effect(() => set_text(text_13, get(tx).destinationBankName));
				append($$anchor, strong_1);
			};
			var consequent_12 = ($$anchor) => {
				var strong_2 = root_8();
				var text_14 = child(strong_2, true);
				reset(strong_2);
				template_effect(() => set_text(text_14, get(tx).destinationAccountName));
				append($$anchor, strong_2);
			};
			var alternate_1 = ($$anchor) => {
				append($$anchor, root_9());
			};
			if_block(node_28, ($$render) => {
				if (get(tx).destinationParty) $$render(consequent_10);
				else if (get(tx).destinationBankName) $$render(consequent_11, 1);
				else if (get(tx).destinationAccountName) $$render(consequent_12, 2);
				else $$render(alternate_1, -1);
			});
			reset(span_10);
			reset(div_25);
			reset(div_23);
			reset(td_2);
			var td_3 = sibling(td_2);
			var p = child(td_3);
			var text_15 = child(p, true);
			reset(p);
			reset(td_3);
			var td_4 = sibling(td_3);
			var node_29 = child(td_4);
			var consequent_14 = ($$anchor) => {
				var fragment_8 = comment();
				var node_30 = first_child(fragment_8);
				var consequent_13 = ($$anchor) => {
					var a = root_10();
					var span_12 = child(a);
					var text_16 = child(span_12, true);
					reset(span_12);
					External_link(sibling(span_12, 2), { class: "h-2.5 w-2.5 shrink-0" });
					reset(a);
					template_effect(() => {
						set_attribute(a, "href", get(tx).referenceUrl);
						set_text(text_16, get(tx).referenceDisplayName);
					});
					append($$anchor, a);
				};
				var alternate_2 = ($$anchor) => {
					var span_13 = root_11();
					var text_17 = child(span_13, true);
					reset(span_13);
					template_effect(() => set_text(text_17, get(tx).referenceDisplayName));
					append($$anchor, span_13);
				};
				if_block(node_30, ($$render) => {
					if (get(tx).referenceUrl) $$render(consequent_13);
					else $$render(alternate_2, -1);
				});
				append($$anchor, fragment_8);
			};
			var consequent_15 = ($$anchor) => {
				var span_14 = root_12();
				var text_18 = child(span_14, true);
				reset(span_14);
				template_effect(() => set_text(text_18, get(tx).referenceId));
				append($$anchor, span_14);
			};
			var alternate_3 = ($$anchor) => {
				append($$anchor, root_13());
			};
			if_block(node_29, ($$render) => {
				if (get(tx).referenceDisplayName) $$render(consequent_14);
				else if (get(tx).referenceId) $$render(consequent_15, 1);
				else $$render(alternate_3, -1);
			});
			reset(td_4);
			var td_5 = sibling(td_4);
			var div_26 = child(td_5);
			var node_32 = child(div_26);
			var consequent_16 = ($$anchor) => {
				var fragment_9 = root_14();
				var node_33 = first_child(fragment_9);
				Arrow_down_left(node_33, { class: "h-3.5 w-3.5 text-emerald-500" });
				var span_16 = sibling(node_33, 2);
				MoneyDisplay(child(span_16), { get amount() {
					return get(tx).amount;
				} });
				reset(span_16);
				append($$anchor, fragment_9);
			};
			var consequent_17 = ($$anchor) => {
				var fragment_10 = root_15();
				var node_35 = first_child(fragment_10);
				Arrow_up_right(node_35, { class: "h-3.5 w-3.5 text-rose-500" });
				var span_17 = sibling(node_35, 2);
				MoneyDisplay(child(span_17), { get amount() {
					return get(tx).amount;
				} });
				reset(span_17);
				append($$anchor, fragment_10);
			};
			var alternate_4 = ($$anchor) => {
				var span_18 = root_16();
				MoneyDisplay(child(span_18), { get amount() {
					return get(tx).amount;
				} });
				reset(span_18);
				append($$anchor, span_18);
			};
			if_block(node_32, ($$render) => {
				if (get(tx).transactionType === "incoming") $$render(consequent_16);
				else if (get(tx).transactionType === "outgoing") $$render(consequent_17, 1);
				else $$render(alternate_4, -1);
			});
			reset(div_26);
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
			var div_27 = child(td_7);
			var node_39 = child(div_27);
			User(node_39, { class: "h-3 w-3 text-primary shrink-0" });
			var span_19 = sibling(node_39, 2);
			var text_19 = child(span_19, true);
			reset(span_19);
			reset(div_27);
			var node_40 = sibling(div_27, 2);
			var consequent_18 = ($$anchor) => {
				var div_28 = root_17();
				var node_41 = child(div_28);
				Check(node_41, { class: "h-3 w-3 shrink-0" });
				var span_20 = sibling(node_41, 2);
				var text_20 = child(span_20, true);
				reset(span_20);
				reset(div_28);
				template_effect(() => set_text(text_20, get(tx).approvedByName));
				append($$anchor, div_28);
			};
			var consequent_19 = ($$anchor) => {
				var div_29 = root_18();
				var node_42 = child(div_29);
				Ban(node_42, { class: "h-3 w-3 shrink-0" });
				var span_21 = sibling(node_42, 2);
				var text_21 = child(span_21, true);
				reset(span_21);
				reset(div_29);
				template_effect(() => set_text(text_21, get(tx).rejectedByName));
				append($$anchor, div_29);
			};
			if_block(node_40, ($$render) => {
				if (get(tx).approvedByName) $$render(consequent_18);
				else if (get(tx).rejectedByName) $$render(consequent_19, 1);
			});
			reset(td_7);
			var td_8 = sibling(td_7);
			var node_43 = child(td_8);
			var consequent_20 = ($$anchor) => {
				var div_30 = root_19();
				var button_4 = child(div_30);
				Check(child(button_4), { class: "h-3.5 w-3.5" });
				reset(button_4);
				var button_5 = sibling(button_4, 2);
				Ban(child(button_5), { class: "h-3.5 w-3.5" });
				reset(button_5);
				reset(div_30);
				delegated("click", button_4, () => openApprove(get(tx).id));
				delegated("click", button_5, () => openReject(get(tx).id));
				append($$anchor, div_30);
			};
			var d_1 = user_derived(() => get(tx).status === "pending" && hasRole("master_accountant"));
			var alternate_5 = ($$anchor) => {
				Button($$anchor, {
					variant: "ghost",
					size: "xs",
					class: "text-[11px] font-semibold text-primary",
					onclick: () => goto(`/transactions/${get(tx).id}`),
					children: ($$anchor, $$slotProps) => {
						next();
						append($$anchor, text("Details"));
					},
					$$slots: { default: true }
				});
			};
			if_block(node_43, ($$render) => {
				if (get(d_1)) $$render(consequent_20);
				else $$render(alternate_5, -1);
			});
			reset(td_8);
			reset(tr);
			template_effect(() => {
				set_text(text_7, `#${get(tx).id ?? ""}`);
				set_text(text_8, get(tx).paymentMethodName || get(tx).paymentMethod);
				set_text(text_15, get(tx).displayNarrative || get(tx).description || "Standard posting.");
				set_text(text_19, get(tx).createdByName || `User #${get(tx).createdBy}`);
			});
			delegated("click", tr, () => goto(`/transactions/${get(tx).id}`));
			delegated("click", td_4, (e) => e.stopPropagation());
			delegated("click", td_8, (e) => e.stopPropagation());
			append($$anchor, tr);
		});
		reset(tbody);
		reset(table);
		reset(div_22);
		reset(div_21);
		var div_31 = sibling(div_21, 2);
		each(div_31, 21, () => get(transactions), (tx) => tx.id, ($$anchor, tx) => {
			var a_1 = root_21();
			var div_32 = child(a_1);
			var node_46 = child(div_32);
			TransactionTypeChip(node_46, { get type() {
				return get(tx).transactionType;
			} });
			var span_22 = sibling(node_46, 2);
			MoneyDisplay(child(span_22), { get amount() {
				return get(tx).amount;
			} });
			reset(span_22);
			reset(div_32);
			var p_1 = sibling(div_32, 2);
			var text_23 = child(p_1, true);
			reset(p_1);
			var div_33 = sibling(p_1, 2);
			var span_23 = child(div_33);
			var text_24 = child(span_23);
			reset(span_23);
			FinancialStatusBadge(sibling(span_23, 2), {
				get status() {
					return get(tx).status;
				},
				size: "sm"
			});
			reset(div_33);
			reset(a_1);
			template_effect(() => {
				set_attribute(a_1, "href", `/transactions/${get(tx).id}`);
				set_text(text_23, get(tx).displayNarrative || get(tx).description);
				set_text(text_24, `TX #${get(tx).id ?? ""}`);
			});
			append($$anchor, a_1);
		});
		reset(div_31);
		var div_34 = sibling(div_31, 2);
		var span_24 = child(div_34);
		var text_25 = child(span_24);
		reset(span_24);
		var div_35 = sibling(span_24, 2);
		var node_49 = child(div_35);
		{
			let $0 = user_derived(() => get(filters).page <= 1 || get(loading));
			Button(node_49, {
				variant: "outline",
				class: "h-8.5 rounded-xl cursor-pointer p-3 font-semibold text-xs flex items-center gap-1",
				get disabled() {
					return get($0);
				},
				onclick: () => updateFilters({ page: get(filters).page - 1 }),
				children: ($$anchor, $$slotProps) => {
					var fragment_12 = root_22();
					Chevron_left(first_child(fragment_12), { class: "h-3.5 w-3.5" });
					next(2);
					append($$anchor, fragment_12);
				},
				$$slots: { default: true }
			});
		}
		var node_51 = sibling(node_49, 2);
		{
			let $0 = user_derived(() => get(transactions).length < get(filters).pageSize || get(loading));
			Button(node_51, {
				variant: "outline",
				class: "h-8.5 rounded-xl cursor-pointer p-3 font-semibold text-xs flex items-center gap-1",
				get disabled() {
					return get($0);
				},
				onclick: () => updateFilters({ page: get(filters).page + 1 }),
				children: ($$anchor, $$slotProps) => {
					var fragment_13 = root_23();
					Chevron_right(sibling(first_child(fragment_13), 2), { class: "h-3.5 w-3.5" });
					append($$anchor, fragment_13);
				},
				$$slots: { default: true }
			});
		}
		reset(div_35);
		reset(div_34);
		template_effect(() => set_text(text_25, `Page ${get(filters).page ?? ""} (Showing max ${get(filters).pageSize ?? ""} items)`));
		append($$anchor, fragment_4);
	};
	if_block(node_18, ($$render) => {
		if (get(errorMsg)) $$render(consequent_4);
		else if (get(loading)) $$render(consequent_5, 1);
		else if (get(transactions).length === 0) $$render(consequent_6, 2);
		else $$render(alternate_6, -1);
	});
	reset(div);
	var node_53 = sibling(div, 2);
	TransactionApproveDialog(node_53, {
		get transactionId() {
			return get(selectedTxId);
		},
		onConfirm: refreshView,
		get open() {
			return get(approveDialogOpen);
		},
		set open($$value) {
			set(approveDialogOpen, $$value, true);
		}
	});
	var node_54 = sibling(node_53, 2);
	TransactionRejectDialog(node_54, {
		get transactionId() {
			return get(selectedTxId);
		},
		onConfirm: refreshView,
		get open() {
			return get(rejectDialogOpen);
		},
		set open($$value) {
			set(rejectDialogOpen, $$value, true);
		}
	});
	ConflictDialog(sibling(node_54, 2), {
		onReload: refreshView,
		get open() {
			return get(conflictDialogOpen);
		},
		set open($$value) {
			set(conflictDialogOpen, $$value, true);
		}
	});
	template_effect(() => {
		set_class(div_11, 1, `text-lg font-bold font-mono ${get(netMovement) >= 0 ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"}`);
		set_text(text_1, `${get(pendingCount) ?? ""} `);
		set_value(input, get(searchInput));
		if (select_value !== (select_value = get(filters).status || "")) select.value = (select.__value = get(filters).status || "") ?? "", select_option(select, get(filters).status || "");
		if (select_1_value !== (select_1_value = get(filters).type || "")) select_1.value = (select_1.__value = get(filters).type || "") ?? "", select_option(select_1, get(filters).type || "");
	});
	delegated("input", input, handleSearchInput);
	delegated("change", select, (e) => updateFilters({ status: e.target.value || null }));
	delegated("change", select_1, (e) => updateFilters({ type: e.target.value || null }));
	append($$anchor, fragment);
	pop();
	$$cleanup();
}
delegate([
	"input",
	"change",
	"click"
]);
//#endregion
export { _page as component };

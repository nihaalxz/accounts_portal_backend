import { B as append, Ct as setup_stores, D as head, G as text, H as from_html, I as if_block, K as delegate, Lt as next, Mt as push, N as each, P as index, Q as get, R as set_text, Rt as reset, S as select_option, V as comment, _ as set_attribute, dt as child, ft as first_child, g as remove_input_defaults, gt as set, it as effect, jt as pop, mt as proxy, n as onDestroy, ot as template_effect, pt as sibling, q as delegated, st as user_effect, ut as $document, vt as state, wt as store_get, x as init_select, xt as user_derived, y as set_value } from "../chunks/BdGPDeRo.js";
import { t as goto } from "../chunks/DtWu0YgZ.js";
import "../chunks/DhaYE-8x.js";
import { i as hasRole } from "../chunks/DMq15hWe.js";
import { n as TransactionApproveDialog, r as Ban, t as TransactionRejectDialog } from "../chunks/CopBqmpA.js";
import { t as Check } from "../chunks/CVzG3BoQ.js";
import { t as Chevron_left } from "../chunks/CsLK6PIo.js";
import { t as Chevron_right } from "../chunks/Dxef15ul.js";
import { t as Receipt } from "../chunks/Dj2Xa4W-2.js";
import { t as ErrorState } from "../chunks/D6Kn8Mes2.js";
import { t as Search } from "../chunks/wyHepXk-2.js";
import { t as X } from "../chunks/Bi2Z_hoF2.js";
import { t as page } from "../chunks/sTAF1pld2.js";
import { t as Button } from "../chunks/zyE_82FR2.js";
import "../chunks/Di6Y4STm2.js";
import { t as MoneyDisplay } from "../chunks/BjJP4BTf2.js";
import { t as DateDisplay } from "../chunks/Dr7G9lQx2.js";
import "../chunks/B0UXrdYn.js";
import { t as EmptyState } from "../chunks/D-wlgMbD.js";
import { t as FinancialTableSkeleton } from "../chunks/VZtX3_Pm.js";
import { c as TRANSACTION_STATUS_CONFIG, d as TRANSACTION_TYPE_VALUES, l as TRANSACTION_STATUS_VALUES, o as REFERENCE_TYPE_LABELS, s as REFERENCE_TYPE_VALUES, u as TRANSACTION_TYPE_CONFIG } from "../chunks/CXeRAu2j.js";
import { t as FinancialCardSkeleton } from "../chunks/Drp390kX.js";
import { a as getTransactions } from "../chunks/DFMaZOUJ.js";
import { t as ConflictDialog } from "../chunks/Dh3Vrqsr.js";
import { n as FinancialStatusBadge, t as TransactionTypeChip } from "../chunks/DFbRvq0u.js";
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
var root_1 = from_html(`<span class="inline-flex items-center gap-1 bg-muted px-2.5 py-1 rounded-full border border-border text-foreground"> <button class="hover:text-destructive shrink-0 cursor-pointer"><!></button></span>`);
var root_2 = from_html(`<div class="flex flex-wrap items-center gap-2 pt-2 border-t border-border/50 text-[11px]"><span class="text-muted-foreground font-medium mr-1">Active filters:</span> <!> <!> <!> <!> <button class="text-xs font-semibold text-primary hover:underline ml-auto cursor-pointer">Clear All</button></div>`);
var root_3 = from_html(`<div class="hidden md:block bg-card border border-border rounded-2xl overflow-hidden"><!></div> <div class="block md:hidden"><!></div>`, 1);
var root_4 = from_html(`<th class="p-4 w-36 text-right">Actions</th>`);
var root_5 = from_html(`<span class="text-[10px] text-muted-foreground/80 bg-muted px-1.5 py-0.5 rounded ml-1 uppercase"> </span>`);
var root_6 = from_html(`<span class="font-mono text-muted-foreground"> </span> <!>`, 1);
var root_7 = from_html(`<span class="text-muted-foreground/60">—</span>`);
var root_8 = from_html(`<div class="flex items-center justify-end gap-1.5"><button class="p-1.5 rounded-lg bg-emerald-50 text-emerald-600 hover:bg-emerald-100 border border-emerald-200 cursor-pointer" title="Approve Transaction"><!></button> <button class="p-1.5 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 border border-red-200 cursor-pointer" title="Reject Transaction"><!></button></div>`);
var root_9 = from_html(`<span class="text-[10px] text-muted-foreground/60 uppercase font-semibold pr-2">Processed</span>`);
var root_10 = from_html(`<td class="p-4 text-right"><!></td>`);
var root_11 = from_html(`<tr class="hover:bg-muted/10 transition-colors cursor-pointer"><td class="p-4 font-mono font-medium text-muted-foreground"> </td><td class="p-4"><!></td><td class="p-4 font-semibold"><!></td><td class="p-4 capitalize"> </td><td class="p-4"><!></td><td class="p-4"><!></td><td class="p-4 text-muted-foreground"><!></td><!></tr>`);
var root_12 = from_html(`<span class="ml-1 uppercase text-[9px] bg-muted px-1.5 py-0.2 rounded"> </span>`);
var root_13 = from_html(`<span class="font-mono"> </span> <!>`, 1);
var root_14 = from_html(`<span>No Reference</span>`);
var root_15 = from_html(`<div class="flex items-center gap-1 ml-2"><button class="p-1 rounded bg-emerald-50 text-emerald-600 border border-emerald-200 cursor-pointer"><!></button> <button class="p-1 rounded bg-red-50 text-red-600 border border-red-200 cursor-pointer"><!></button></div>`);
var root_16 = from_html(`<a class="block bg-card border border-border rounded-2xl p-4 space-y-3 hover:border-primary/40 active:bg-muted/5 transition-all text-left"><div class="flex items-center justify-between"><!> <span class="font-bold text-foreground"><!></span></div> <div class="flex items-center justify-between text-[11px] text-muted-foreground"><div><!></div> <!></div> <div class="flex items-center justify-between pt-2 border-t border-border/40"><span class="text-[10px] font-medium text-muted-foreground"> </span> <div class="flex items-center gap-2"><!> <!></div></div></a>`);
var root_17 = from_html(`<!> <span>Prev</span>`, 1);
var root_18 = from_html(`<span>Next</span> <!>`, 1);
var root_19 = from_html(`<div class="hidden md:block bg-card border border-border rounded-2xl overflow-hidden shadow-xs"><div class="overflow-x-auto"><table class="w-full text-left border-collapse text-xs"><thead><tr class="bg-muted/30 border-b border-border text-muted-foreground font-semibold"><th class="p-4 w-16">ID</th><th class="p-4 w-28">Type</th><th class="p-4">Amount</th><th class="p-4 w-32">Payment Method</th><th class="p-4">Reference</th><th class="p-4 w-24">Status</th><th class="p-4 w-32">Date</th><!></tr></thead><tbody class="divide-y divide-border/60"></tbody></table></div></div> <div class="block md:hidden space-y-3"></div> <div class="flex items-center justify-between pt-2"><span class="text-[11px] text-muted-foreground font-medium"> </span> <div class="flex items-center gap-1.5"><!> <!></div></div>`, 1);
var root_20 = from_html(`<div class="space-y-6"><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"><div class="flex flex-col gap-1"><h1 class="text-xl font-bold text-foreground font-sans">Financial Transactions</h1> <p class="text-xs text-muted-foreground">Audit financial ledger postings, review pending items, and manage transaction
				records.</p></div> <!></div> <div class="bg-card border border-border rounded-2xl p-4 space-y-4 shadow-xs"><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"><div class="relative"><!> <input type="text" placeholder="Search Reference ID..." class="w-full text-xs pl-9.5 pr-4 py-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary placeholder-muted-foreground/60 leading-relaxed"/></div> <select class="w-full text-xs p-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-foreground"><option>All Statuses</option><!></select> <select class="w-full text-xs p-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-foreground"><option>All Types</option><!></select> <select class="w-full text-xs p-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-foreground"><option>All Reference Types</option><!></select></div> <!></div> <!></div> <!> <!> <!>`, 1);
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
	function handleSearchChange(e) {
		const val = e.target.value;
		set(searchInput, val, true);
		clearTimeout(searchTimeout);
		searchTimeout = setTimeout(() => {
			updateFilters({ referenceId: val.trim() || null });
		}, 400);
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
		if (get(filters).referenceId !== get(searchInput)) set(searchInput, get(filters).referenceId || "", true);
		loadTransactions();
	});
	onDestroy(() => {
		if (abortController) abortController.abort();
		clearTimeout(searchTimeout);
	});
	var fragment = root_20();
	head("yb5gkr", ($$anchor) => {
		effect(() => {
			$document.title = "Financial Transactions — Accounts Portal";
		});
	});
	var div = first_child(fragment);
	var div_1 = child(div);
	Button(sibling(child(div_1), 2), {
		class: "rounded-xl font-semibold text-xs py-5 px-4 cursor-pointer self-start sm:self-auto",
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
	var node_1 = child(div_4);
	Search(node_1, { class: "absolute left-3.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground/60" });
	var input = sibling(node_1, 2);
	remove_input_defaults(input);
	reset(div_4);
	var select = sibling(div_4, 2);
	var option = child(select);
	option.value = option.__value = "";
	each(sibling(option), 17, () => TRANSACTION_STATUS_VALUES, index, ($$anchor, st) => {
		var option_1 = root();
		var text_1 = child(option_1, true);
		reset(option_1);
		var option_1_value = {};
		template_effect(() => {
			set_text(text_1, TRANSACTION_STATUS_CONFIG[get(st)].label);
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
		var text_2 = child(option_3, true);
		reset(option_3);
		var option_3_value = {};
		template_effect(() => {
			set_text(text_2, TRANSACTION_TYPE_CONFIG[get(ty)].label);
			if (option_3_value !== (option_3_value = get(ty))) option_3.value = (option_3.__value = get(ty)) ?? "";
		});
		append($$anchor, option_3);
	});
	reset(select_1);
	var select_1_value;
	init_select(select_1);
	var select_2 = sibling(select_1, 2);
	var option_4 = child(select_2);
	option_4.value = option_4.__value = "";
	each(sibling(option_4), 17, () => REFERENCE_TYPE_VALUES, index, ($$anchor, rt) => {
		var option_5 = root();
		var text_3 = child(option_5, true);
		reset(option_5);
		var option_5_value = {};
		template_effect(() => {
			set_text(text_3, REFERENCE_TYPE_LABELS[get(rt)]);
			if (option_5_value !== (option_5_value = get(rt))) option_5.value = (option_5.__value = get(rt)) ?? "";
		});
		append($$anchor, option_5);
	});
	reset(select_2);
	var select_2_value;
	init_select(select_2);
	reset(div_3);
	var node_5 = sibling(div_3, 2);
	var consequent_4 = ($$anchor) => {
		var div_5 = root_2();
		var node_6 = sibling(child(div_5), 2);
		var consequent = ($$anchor) => {
			var span = root_1();
			var text_4 = child(span);
			var button = sibling(text_4);
			X(child(button), { class: "h-3 w-3" });
			reset(button);
			reset(span);
			template_effect(() => set_text(text_4, `Status: ${TRANSACTION_STATUS_CONFIG[get(filters).status].label ?? ""} `));
			delegated("click", button, () => updateFilters({ status: null }));
			append($$anchor, span);
		};
		if_block(node_6, ($$render) => {
			if (get(filters).status) $$render(consequent);
		});
		var node_8 = sibling(node_6, 2);
		var consequent_1 = ($$anchor) => {
			var span_1 = root_1();
			var text_5 = child(span_1);
			var button_1 = sibling(text_5);
			X(child(button_1), { class: "h-3 w-3" });
			reset(button_1);
			reset(span_1);
			template_effect(() => set_text(text_5, `Type: ${TRANSACTION_TYPE_CONFIG[get(filters).type].label ?? ""} `));
			delegated("click", button_1, () => updateFilters({ type: null }));
			append($$anchor, span_1);
		};
		if_block(node_8, ($$render) => {
			if (get(filters).type) $$render(consequent_1);
		});
		var node_10 = sibling(node_8, 2);
		var consequent_2 = ($$anchor) => {
			var span_2 = root_1();
			var text_6 = child(span_2);
			var button_2 = sibling(text_6);
			X(child(button_2), { class: "h-3 w-3" });
			reset(button_2);
			reset(span_2);
			template_effect(() => set_text(text_6, `Ref Type: ${REFERENCE_TYPE_LABELS[get(filters).referenceType] ?? ""} `));
			delegated("click", button_2, () => updateFilters({ referenceType: null }));
			append($$anchor, span_2);
		};
		if_block(node_10, ($$render) => {
			if (get(filters).referenceType) $$render(consequent_2);
		});
		var node_12 = sibling(node_10, 2);
		var consequent_3 = ($$anchor) => {
			var span_3 = root_1();
			var text_7 = child(span_3);
			var button_3 = sibling(text_7);
			X(child(button_3), { class: "h-3 w-3" });
			reset(button_3);
			reset(span_3);
			template_effect(() => set_text(text_7, `Ref ID: ${get(filters).referenceId ?? ""} `));
			delegated("click", button_3, () => updateFilters({ referenceId: null }));
			append($$anchor, span_3);
		};
		if_block(node_12, ($$render) => {
			if (get(filters).referenceId) $$render(consequent_3);
		});
		var button_4 = sibling(node_12, 2);
		reset(div_5);
		delegated("click", button_4, clearFilters);
		append($$anchor, div_5);
	};
	var d = user_derived(() => hasActiveFilters(get(filters)));
	if_block(node_5, ($$render) => {
		if (get(d)) $$render(consequent_4);
	});
	reset(div_2);
	var node_14 = sibling(div_2, 2);
	var consequent_5 = ($$anchor) => {
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
	var alternate_4 = ($$anchor) => {
		var fragment_2 = comment();
		var node_15 = first_child(fragment_2);
		var consequent_6 = ($$anchor) => {
			var fragment_3 = root_3();
			var div_6 = first_child(fragment_3);
			FinancialTableSkeleton(child(div_6), {
				get rows() {
					return get(filters).pageSize;
				},
				columns: 8
			});
			reset(div_6);
			var div_7 = sibling(div_6, 2);
			FinancialCardSkeleton(child(div_7), { count: 4 });
			reset(div_7);
			append($$anchor, fragment_3);
		};
		var consequent_7 = ($$anchor) => {
			EmptyState($$anchor, {
				title: "No transactions found",
				description: "Try adjusting your filters or create a new transaction to start posting.",
				get icon() {
					return Receipt;
				}
			});
		};
		var alternate_3 = ($$anchor) => {
			var fragment_5 = root_19();
			var div_8 = first_child(fragment_5);
			var div_9 = child(div_8);
			var table = child(div_9);
			var thead = child(table);
			var tr = child(thead);
			var node_18 = sibling(child(tr), 7);
			var consequent_8 = ($$anchor) => {
				append($$anchor, root_4());
			};
			var d_1 = user_derived(() => hasRole("master_accountant"));
			if_block(node_18, ($$render) => {
				if (get(d_1)) $$render(consequent_8);
			});
			reset(tr);
			reset(thead);
			var tbody = sibling(thead);
			each(tbody, 21, () => get(transactions), (tx) => tx.id, ($$anchor, tx) => {
				var tr_1 = root_11();
				var td = child(tr_1);
				var text_8 = child(td);
				reset(td);
				var td_1 = sibling(td);
				TransactionTypeChip(child(td_1), { get type() {
					return get(tx).transactionType;
				} });
				reset(td_1);
				var td_2 = sibling(td_1);
				MoneyDisplay(child(td_2), { get amount() {
					return get(tx).amount;
				} });
				reset(td_2);
				var td_3 = sibling(td_2);
				var text_9 = child(td_3, true);
				reset(td_3);
				var td_4 = sibling(td_3);
				var node_21 = child(td_4);
				var consequent_10 = ($$anchor) => {
					var fragment_6 = root_6();
					var span_4 = first_child(fragment_6);
					var text_10 = child(span_4, true);
					reset(span_4);
					var node_22 = sibling(span_4, 2);
					var consequent_9 = ($$anchor) => {
						var span_5 = root_5();
						var text_11 = child(span_5, true);
						reset(span_5);
						template_effect(() => set_text(text_11, get(tx).referenceType));
						append($$anchor, span_5);
					};
					if_block(node_22, ($$render) => {
						if (get(tx).referenceType) $$render(consequent_9);
					});
					template_effect(() => set_text(text_10, get(tx).referenceId));
					append($$anchor, fragment_6);
				};
				var alternate = ($$anchor) => {
					append($$anchor, root_7());
				};
				if_block(node_21, ($$render) => {
					if (get(tx).referenceId) $$render(consequent_10);
					else $$render(alternate, -1);
				});
				reset(td_4);
				var td_5 = sibling(td_4);
				FinancialStatusBadge(child(td_5), {
					get status() {
						return get(tx).status;
					},
					size: "sm"
				});
				reset(td_5);
				var td_6 = sibling(td_5);
				DateDisplay(child(td_6), { get value() {
					return get(tx).createdAt;
				} });
				reset(td_6);
				var node_25 = sibling(td_6);
				var consequent_12 = ($$anchor) => {
					var td_7 = root_10();
					var node_26 = child(td_7);
					var consequent_11 = ($$anchor) => {
						var div_10 = root_8();
						var button_5 = child(div_10);
						Check(child(button_5), { class: "h-3.5 w-3.5" });
						reset(button_5);
						var button_6 = sibling(button_5, 2);
						Ban(child(button_6), { class: "h-3.5 w-3.5" });
						reset(button_6);
						reset(div_10);
						delegated("click", button_5, () => openApprove(get(tx).id));
						delegated("click", button_6, () => openReject(get(tx).id));
						append($$anchor, div_10);
					};
					var alternate_1 = ($$anchor) => {
						append($$anchor, root_9());
					};
					if_block(node_26, ($$render) => {
						if (get(tx).status === "pending") $$render(consequent_11);
						else $$render(alternate_1, -1);
					});
					reset(td_7);
					delegated("click", td_7, (e) => e.stopPropagation());
					append($$anchor, td_7);
				};
				var d_2 = user_derived(() => hasRole("master_accountant"));
				if_block(node_25, ($$render) => {
					if (get(d_2)) $$render(consequent_12);
				});
				reset(tr_1);
				template_effect(() => {
					set_text(text_8, `#${get(tx).id ?? ""}`);
					set_text(text_9, get(tx).paymentMethod);
				});
				delegated("click", tr_1, () => goto(`/transactions/${get(tx).id}`));
				append($$anchor, tr_1);
			});
			reset(tbody);
			reset(table);
			reset(div_9);
			reset(div_8);
			var div_11 = sibling(div_8, 2);
			each(div_11, 21, () => get(transactions), (tx) => tx.id, ($$anchor, tx) => {
				var a = root_16();
				var div_12 = child(a);
				var node_29 = child(div_12);
				TransactionTypeChip(node_29, { get type() {
					return get(tx).transactionType;
				} });
				var span_8 = sibling(node_29, 2);
				MoneyDisplay(child(span_8), { get amount() {
					return get(tx).amount;
				} });
				reset(span_8);
				reset(div_12);
				var div_13 = sibling(div_12, 2);
				var div_14 = child(div_13);
				var node_31 = child(div_14);
				var consequent_14 = ($$anchor) => {
					var fragment_7 = root_13();
					var span_9 = first_child(fragment_7);
					var text_12 = child(span_9, true);
					reset(span_9);
					var node_32 = sibling(span_9, 2);
					var consequent_13 = ($$anchor) => {
						var span_10 = root_12();
						var text_13 = child(span_10, true);
						reset(span_10);
						template_effect(() => set_text(text_13, get(tx).referenceType));
						append($$anchor, span_10);
					};
					if_block(node_32, ($$render) => {
						if (get(tx).referenceType) $$render(consequent_13);
					});
					template_effect(() => set_text(text_12, get(tx).referenceId));
					append($$anchor, fragment_7);
				};
				var alternate_2 = ($$anchor) => {
					append($$anchor, root_14());
				};
				if_block(node_31, ($$render) => {
					if (get(tx).referenceId) $$render(consequent_14);
					else $$render(alternate_2, -1);
				});
				reset(div_14);
				DateDisplay(sibling(div_14, 2), { get value() {
					return get(tx).createdAt;
				} });
				reset(div_13);
				var div_15 = sibling(div_13, 2);
				var span_12 = child(div_15);
				var text_14 = child(span_12);
				reset(span_12);
				var div_16 = sibling(span_12, 2);
				var node_34 = child(div_16);
				FinancialStatusBadge(node_34, {
					get status() {
						return get(tx).status;
					},
					size: "sm"
				});
				var node_35 = sibling(node_34, 2);
				var consequent_15 = ($$anchor) => {
					var div_17 = root_15();
					var button_7 = child(div_17);
					Check(child(button_7), { class: "h-3 w-3" });
					reset(button_7);
					var button_8 = sibling(button_7, 2);
					Ban(child(button_8), { class: "h-3 w-3" });
					reset(button_8);
					reset(div_17);
					delegated("click", button_7, (e) => {
						e.preventDefault();
						e.stopPropagation();
						openApprove(get(tx).id);
					});
					delegated("click", button_8, (e) => {
						e.preventDefault();
						e.stopPropagation();
						openReject(get(tx).id);
					});
					append($$anchor, div_17);
				};
				var d_3 = user_derived(() => hasRole("master_accountant") && get(tx).status === "pending");
				if_block(node_35, ($$render) => {
					if (get(d_3)) $$render(consequent_15);
				});
				reset(div_16);
				reset(div_15);
				reset(a);
				template_effect(() => {
					set_attribute(a, "href", `/transactions/${get(tx).id}`);
					set_text(text_14, `ID: #${get(tx).id ?? ""}`);
				});
				append($$anchor, a);
			});
			reset(div_11);
			var div_18 = sibling(div_11, 2);
			var span_13 = child(div_18);
			var text_15 = child(span_13);
			reset(span_13);
			var div_19 = sibling(span_13, 2);
			var node_38 = child(div_19);
			{
				let $0 = user_derived(() => get(filters).page <= 1 || get(loading));
				Button(node_38, {
					variant: "outline",
					class: "h-8.5 rounded-xl cursor-pointer p-3 font-semibold text-xs flex items-center gap-1",
					get disabled() {
						return get($0);
					},
					onclick: () => updateFilters({ page: get(filters).page - 1 }),
					children: ($$anchor, $$slotProps) => {
						var fragment_8 = root_17();
						Chevron_left(first_child(fragment_8), { class: "h-3.5 w-3.5" });
						next(2);
						append($$anchor, fragment_8);
					},
					$$slots: { default: true }
				});
			}
			var node_40 = sibling(node_38, 2);
			{
				let $0 = user_derived(() => get(transactions).length < get(filters).pageSize || get(loading));
				Button(node_40, {
					variant: "outline",
					class: "h-8.5 rounded-xl cursor-pointer p-3 font-semibold text-xs flex items-center gap-1",
					get disabled() {
						return get($0);
					},
					onclick: () => updateFilters({ page: get(filters).page + 1 }),
					children: ($$anchor, $$slotProps) => {
						var fragment_9 = root_18();
						Chevron_right(sibling(first_child(fragment_9), 2), { class: "h-3.5 w-3.5" });
						append($$anchor, fragment_9);
					},
					$$slots: { default: true }
				});
			}
			reset(div_19);
			reset(div_18);
			template_effect(() => set_text(text_15, `Showing page ${get(filters).page ?? ""} (max ${get(filters).pageSize ?? ""} items/page)`));
			append($$anchor, fragment_5);
		};
		if_block(node_15, ($$render) => {
			if (get(loading)) $$render(consequent_6);
			else if (get(transactions).length === 0) $$render(consequent_7, 1);
			else $$render(alternate_3, -1);
		});
		append($$anchor, fragment_2);
	};
	if_block(node_14, ($$render) => {
		if (get(errorMsg)) $$render(consequent_5);
		else $$render(alternate_4, -1);
	});
	reset(div);
	var node_42 = sibling(div, 2);
	TransactionApproveDialog(node_42, {
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
	var node_43 = sibling(node_42, 2);
	TransactionRejectDialog(node_43, {
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
	ConflictDialog(sibling(node_43, 2), {
		onReload: refreshView,
		get open() {
			return get(conflictDialogOpen);
		},
		set open($$value) {
			set(conflictDialogOpen, $$value, true);
		}
	});
	template_effect(() => {
		set_value(input, get(searchInput));
		if (select_value !== (select_value = get(filters).status || "")) select.value = (select.__value = get(filters).status || "") ?? "", select_option(select, get(filters).status || "");
		if (select_1_value !== (select_1_value = get(filters).type || "")) select_1.value = (select_1.__value = get(filters).type || "") ?? "", select_option(select_1, get(filters).type || "");
		if (select_2_value !== (select_2_value = get(filters).referenceType || "")) select_2.value = (select_2.__value = get(filters).referenceType || "") ?? "", select_option(select_2, get(filters).referenceType || "");
	});
	delegated("input", input, handleSearchChange);
	delegated("change", select, (e) => updateFilters({ status: e.target.value || null }));
	delegated("change", select_1, (e) => updateFilters({ type: e.target.value || null }));
	delegated("change", select_2, (e) => updateFilters({ referenceType: e.target.value || null }));
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

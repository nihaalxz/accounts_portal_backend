import { B as append, Bt as reset, C as set_style, Ct as user_derived, D as head, H as from_html, I as if_block, K as delegate, N as each, Nt as pop, P as index, Pt as push, Q as get, R as set_text, T as clsx, V as comment, bt as state, dt as $document, g as remove_input_defaults, gt as proxy, ht as sibling, it as effect, m as bind_value, mt as first_child, ot as template_effect, pt as child, q as delegated, r as onMount, vt as set, w as set_class, zt as next } from "../chunks/dXkmWTgM.js";
import { t as goto } from "../chunks/uzvByBer.js";
import "../chunks/DhaYE-8x.js";
import { i as hasRole } from "../chunks/Crlnhs9B.js";
import { t as addToast } from "../chunks/CbPRQHfn.js";
import { t as Book_open } from "../chunks/E5UrMlE0.js";
import { t as File_text } from "../chunks/NLRKrZbo2.js";
import { t as Folder } from "../chunks/DuHBvq992.js";
import { t as Plus } from "../chunks/BObidJ7B.js";
import { t as Refresh_cw } from "../chunks/DpTJy0Wb.js";
import { t as Search } from "../chunks/D7t9qluE.js";
import { t as Button } from "../chunks/BhXsq3bC.js";
import { t as ErrorState } from "../chunks/CRMNR9wu.js";
import "../chunks/oYiYNPSa2.js";
import { a as seedSystemAccounts, i as getChartOfAccounts } from "../chunks/DQyIstY32.js";
import { i as flattenTree, n as NORMAL_BALANCE_LABELS, r as buildAccountTree, t as ACCOUNT_TYPE_LABELS } from "../chunks/Dh0Wd7Q22.js";
import { t as FinancialTableSkeleton } from "../chunks/BifxP-5W2.js";
import { t as EmptyState } from "../chunks/DXyN7dIZ2.js";
//#region src/routes/(app)/accounting/chart-of-accounts/+page.svelte
var root = from_html(`<!> Seed System Accounts`, 1);
var root_1 = from_html(`<!> Add Account`, 1);
var root_2 = from_html(`<!> <!>`, 1);
var root_3 = from_html(`<button> </button>`);
var root_4 = from_html(`<div class="bg-card border border-border rounded-2xl overflow-hidden shadow-xs"><!></div>`);
var root_5 = from_html(`<span class="text-muted-foreground/30 mr-1.5">└─</span>`);
var root_6 = from_html(`<span class="text-[9px] bg-primary/10 text-primary border border-primary/20 px-1.5 py-0.2 rounded-md font-bold uppercase tracking-wider shrink-0">System</span>`);
var root_7 = from_html(`<span class="inline-flex text-[10px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full dark:bg-amber-950/20 dark:text-amber-400">Yes</span>`);
var root_8 = from_html(`<span class="text-muted-foreground/60">No</span>`);
var root_9 = from_html(`<tr class="hover:bg-muted/10 transition-colors cursor-pointer"><td class="p-4 font-mono font-medium text-foreground"><div class="flex items-center"><!> </div></td><td class="p-4 font-semibold text-foreground"><div class="flex items-center gap-1.5"><!> <span> </span> <!></div></td><td class="p-4 capitalize"> </td><td class="p-4 capitalize"> </td><td class="p-4 text-center"><!></td><td class="p-4"><span> </span></td></tr>`);
var root_10 = from_html(`<div class="bg-card border border-border rounded-2xl overflow-hidden shadow-xs"><div class="overflow-x-auto"><table class="w-full min-w-[700px] text-left border-collapse text-xs"><thead><tr class="bg-muted/30 border-b border-border text-muted-foreground font-semibold"><th class="p-4 w-48">Account Code</th><th class="p-4">Account Name</th><th class="p-4 w-28">Type</th><th class="p-4 w-28">Normal Balance</th><th class="p-4 w-28 text-center">Control Account</th><th class="p-4 w-24">Status</th></tr></thead><tbody class="divide-y divide-border/60"></tbody></table></div></div>`);
var root_11 = from_html(`<div class="space-y-6"><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"><div class="flex flex-col gap-1"><h1 class="text-xl font-bold text-foreground">Chart of Accounts</h1> <p class="text-xs text-muted-foreground">Explore and manage the double-entry account ledger hierarchy.</p></div> <div class="flex items-center gap-2"><!></div></div> <div class="bg-card border border-border rounded-2xl p-4 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 shadow-xs"><div class="relative flex-1"><!> <input type="text" placeholder="Search by Code or Name..." class="pl-9 h-10 w-full bg-background border border-border rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground"/></div> <div class="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0"></div></div> <!></div>`);
function _page($$anchor, $$props) {
	push($$props, true);
	let accounts = state(proxy([]));
	let loading = state(true);
	let errorMsg = state(null);
	let correlationId = state("");
	let searchVal = state("");
	let typeFilter = state("all");
	let isSeeding = state(false);
	let abortController = null;
	async function loadCOA() {
		if (abortController) abortController.abort();
		abortController = new AbortController();
		set(loading, true);
		set(errorMsg, null);
		set(correlationId, "");
		try {
			const res = await getChartOfAccounts(abortController.signal);
			set(accounts, res, true);
		} catch (err) {
			if (err.name === "AbortError") return;
			set(errorMsg, err.message || "Failed to load Chart of Accounts.", true);
			set(correlationId, err.correlationId || "", true);
		} finally {
			set(loading, false);
		}
	}
	async function handleSeed() {
		if (!hasRole("master_accountant")) {
			addToast("Only a Master Accountant can seed system accounts.", "error");
			return;
		}
		set(isSeeding, true);
		try {
			await seedSystemAccounts();
			addToast("System accounts seeded successfully.", "success");
			await loadCOA();
		} catch (err) {
			addToast(err.message || "Failed to seed system accounts.", "error");
		} finally {
			set(isSeeding, false);
		}
	}
	const processedAccounts = user_derived(() => () => {
		let filtered = get(accounts);
		if (get(typeFilter) !== "all") filtered = filtered.filter((a) => a.accountType === get(typeFilter));
		if (get(searchVal).trim() !== "") {
			const search = get(searchVal).toLowerCase();
			filtered = filtered.filter((a) => a.code.toLowerCase().includes(search) || a.name.toLowerCase().includes(search));
			return filtered.map((a) => ({
				...a,
				children: [],
				depth: 0
			}));
		}
		return flattenTree(buildAccountTree(filtered));
	});
	onMount(() => {
		loadCOA();
		return () => {
			if (abortController) abortController.abort();
		};
	});
	var div = root_11();
	head("gmwak5", ($$anchor) => {
		effect(() => {
			$document.title = "Chart of Accounts — Accounts Portal";
		});
	});
	var div_1 = child(div);
	var div_2 = sibling(child(div_1), 2);
	var node = child(div_2);
	var consequent = ($$anchor) => {
		var fragment = root_2();
		var node_1 = first_child(fragment);
		Button(node_1, {
			variant: "outline",
			class: "rounded-xl text-xs py-5 cursor-pointer font-semibold",
			get disabled() {
				return get(isSeeding);
			},
			onclick: handleSeed,
			children: ($$anchor, $$slotProps) => {
				var fragment_1 = root();
				var node_2 = first_child(fragment_1);
				{
					let $0 = user_derived(() => ["h-3.5 w-3.5 mr-1", get(isSeeding) && "animate-spin"].join(" "));
					Refresh_cw(node_2, { get class() {
						return get($0);
					} });
				}
				next();
				append($$anchor, fragment_1);
			},
			$$slots: { default: true }
		});
		Button(sibling(node_1, 2), {
			class: "rounded-xl text-xs py-5 cursor-pointer font-semibold",
			onclick: () => goto("/accounting/chart-of-accounts/new"),
			children: ($$anchor, $$slotProps) => {
				var fragment_2 = root_1();
				Plus(first_child(fragment_2), { class: "h-3.5 w-3.5 mr-1" });
				next();
				append($$anchor, fragment_2);
			},
			$$slots: { default: true }
		});
		append($$anchor, fragment);
	};
	var d = user_derived(() => hasRole("master_accountant"));
	if_block(node, ($$render) => {
		if (get(d)) $$render(consequent);
	});
	reset(div_2);
	reset(div_1);
	var div_3 = sibling(div_1, 2);
	var div_4 = child(div_3);
	var node_5 = child(div_4);
	Search(node_5, { class: "absolute left-3 top-2.5 h-4 w-4 text-muted-foreground/60" });
	var input = sibling(node_5, 2);
	remove_input_defaults(input);
	reset(div_4);
	var div_5 = sibling(div_4, 2);
	each(div_5, 20, () => [
		"all",
		"asset",
		"liability",
		"equity",
		"revenue",
		"expense"
	], index, ($$anchor, type) => {
		var button = root_3();
		var text = child(button, true);
		reset(button);
		template_effect(($0) => {
			set_class(button, 1, $0);
			set_text(text, type);
		}, [() => clsx(["px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer whitespace-nowrap capitalize", get(typeFilter) === type ? "bg-primary border-primary text-primary-foreground" : "bg-background border-border text-muted-foreground hover:text-foreground"].join(" "))]);
		delegated("click", button, () => set(typeFilter, type, true));
		append($$anchor, button);
	});
	reset(div_5);
	reset(div_3);
	var node_6 = sibling(div_3, 2);
	var consequent_1 = ($$anchor) => {
		ErrorState($$anchor, {
			get message() {
				return get(errorMsg);
			},
			get correlationId() {
				return get(correlationId);
			},
			retryAction: loadCOA
		});
	};
	var alternate_3 = ($$anchor) => {
		var fragment_4 = comment();
		var node_7 = first_child(fragment_4);
		var consequent_2 = ($$anchor) => {
			var div_6 = root_4();
			FinancialTableSkeleton(child(div_6), {
				rows: 8,
				columns: 6
			});
			reset(div_6);
			append($$anchor, div_6);
		};
		var consequent_3 = ($$anchor) => {
			EmptyState($$anchor, {
				title: "No accounts found",
				description: "Try adjusting your filters or search terms.",
				get icon() {
					return Book_open;
				}
			});
		};
		var d_1 = user_derived(() => get(processedAccounts)().length === 0);
		var alternate_2 = ($$anchor) => {
			var div_7 = root_10();
			var div_8 = child(div_7);
			var table = child(div_8);
			var tbody = sibling(child(table));
			each(tbody, 21, () => get(processedAccounts)(), (acc) => acc.id, ($$anchor, acc) => {
				var tr = root_9();
				var td = child(tr);
				var div_9 = child(td);
				var node_9 = child(div_9);
				var consequent_4 = ($$anchor) => {
					append($$anchor, root_5());
				};
				var d_2 = user_derived(() => get(searchVal).trim() === "" && get(acc).depth > 0);
				if_block(node_9, ($$render) => {
					if (get(d_2)) $$render(consequent_4);
				});
				var text_1 = sibling(node_9);
				reset(div_9);
				reset(td);
				var td_1 = sibling(td);
				var div_10 = child(td_1);
				var node_10 = child(div_10);
				var consequent_5 = ($$anchor) => {
					Folder($$anchor, { class: "h-3.5 w-3.5 text-yellow-500 fill-yellow-500/10 shrink-0" });
				};
				var alternate = ($$anchor) => {
					File_text($$anchor, { class: "h-3.5 w-3.5 text-muted-foreground/60 shrink-0" });
				};
				if_block(node_10, ($$render) => {
					if (get(acc).isControlAccount) $$render(consequent_5);
					else $$render(alternate, -1);
				});
				var span_1 = sibling(node_10, 2);
				var text_2 = child(span_1, true);
				reset(span_1);
				var node_11 = sibling(span_1, 2);
				var consequent_6 = ($$anchor) => {
					append($$anchor, root_6());
				};
				if_block(node_11, ($$render) => {
					if (get(acc).isSystemAccount) $$render(consequent_6);
				});
				reset(div_10);
				reset(td_1);
				var td_2 = sibling(td_1);
				var text_3 = child(td_2, true);
				reset(td_2);
				var td_3 = sibling(td_2);
				var text_4 = child(td_3, true);
				reset(td_3);
				var td_4 = sibling(td_3);
				var node_12 = child(td_4);
				var consequent_7 = ($$anchor) => {
					append($$anchor, root_7());
				};
				var alternate_1 = ($$anchor) => {
					append($$anchor, root_8());
				};
				if_block(node_12, ($$render) => {
					if (get(acc).isControlAccount) $$render(consequent_7);
					else $$render(alternate_1, -1);
				});
				reset(td_4);
				var td_5 = sibling(td_4);
				var span_5 = child(td_5);
				var text_5 = child(span_5, true);
				reset(span_5);
				reset(td_5);
				reset(tr);
				template_effect(($0, $1) => {
					set_style(div_9, `padding-left: ${$0 ?? ""}rem`);
					set_text(text_1, ` ${get(acc).code ?? ""}`);
					set_class(span_1, 1, clsx(get(acc).isControlAccount ? "font-bold" : ""));
					set_text(text_2, get(acc).name);
					set_text(text_3, ACCOUNT_TYPE_LABELS[get(acc).accountType] || get(acc).accountType);
					set_text(text_4, NORMAL_BALANCE_LABELS[get(acc).normalBalance] || get(acc).normalBalance);
					set_class(span_5, 1, $1);
					set_text(text_5, get(acc).isActive ? "Active" : "Inactive");
				}, [() => get(searchVal).trim() === "" ? get(acc).depth * 1.2 : 0, () => clsx(["inline-flex items-center gap-1 font-semibold rounded-full border text-[10px] px-2 py-0.5", get(acc).isActive ? "text-emerald-700 bg-emerald-50 border-emerald-200 dark:text-emerald-400 dark:bg-emerald-950/40 dark:border-emerald-800" : "text-muted-foreground bg-muted border-border"].join(" "))]);
				delegated("click", tr, () => goto(`/accounting/chart-of-accounts/${get(acc).id}`));
				append($$anchor, tr);
			});
			reset(tbody);
			reset(table);
			reset(div_8);
			reset(div_7);
			append($$anchor, div_7);
		};
		if_block(node_7, ($$render) => {
			if (get(loading)) $$render(consequent_2);
			else if (get(d_1)) $$render(consequent_3, 1);
			else $$render(alternate_2, -1);
		});
		append($$anchor, fragment_4);
	};
	if_block(node_6, ($$render) => {
		if (get(errorMsg)) $$render(consequent_1);
		else $$render(alternate_3, -1);
	});
	reset(div);
	bind_value(input, () => get(searchVal), ($$value) => set(searchVal, $$value));
	append($$anchor, div);
	pop();
}
delegate(["click"]);
//#endregion
export { _page as component };

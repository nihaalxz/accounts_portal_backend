import { B as append, Bt as reset, Ct as user_derived, D as head, H as from_html, I as if_block, K as delegate, N as each, Nt as pop, P as index, Pt as push, Q as get, R as set_text, T as clsx, bt as state, dt as $document, gt as proxy, ht as sibling, it as effect, mt as first_child, ot as template_effect, pt as child, q as delegated, r as onMount, st as user_effect, vt as set, w as set_class, zt as next } from "../chunks/dXkmWTgM.js";
import "../chunks/DhaYE-8x.js";
import { t as apiFetch } from "../chunks/Bvepbn4N.js";
import "../chunks/CbPRQHfn.js";
import { t as Circle_check } from "../chunks/qB0lJ_dM.js";
import { t as Clock } from "../chunks/CZu1L_RP.js";
import { t as Credit_card } from "../chunks/DZ-rRKb92.js";
import { t as Dollar_sign } from "../chunks/BnaNfP7s2.js";
import { t as Refresh_cw } from "../chunks/DpTJy0Wb2.js";
import { t as Trending_up } from "../chunks/dBTjeHCK.js";
import { t as Triangle_alert } from "../chunks/BKenZzGW.js";
import { t as Button } from "../chunks/BhXsq3bC.js";
import { t as MoneyDisplay } from "../chunks/CIVSRuaR.js";
//#region src/routes/(app)/sales/credit/+page.svelte
var root = from_html(`<!> Reload Data`, 1);
var root_1 = from_html(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"><div class="bg-card border border-border/80 rounded-2xl p-4 shadow-xs space-y-1"><div class="flex items-center justify-between text-muted-foreground"><span class="text-xs font-semibold">Total Outstanding</span> <!></div> <p class="text-2xl font-extrabold font-mono text-foreground"><!></p> <span class="text-[10px] text-muted-foreground block">Active receivables balance</span></div> <div class="bg-card border border-border/80 rounded-2xl p-4 shadow-xs space-y-1"><div class="flex items-center justify-between text-muted-foreground"><span class="text-xs font-semibold">Today's Collections</span> <!></div> <p class="text-2xl font-extrabold font-mono text-emerald-600 dark:text-emerald-400"><!></p> <span class="text-[10px] text-muted-foreground block">Total receipts recorded today</span></div> <div class="bg-card border border-border/80 rounded-2xl p-4 shadow-xs space-y-1"><div class="flex items-center justify-between text-muted-foreground"><span class="text-xs font-semibold">Overdue Receivables</span> <!></div> <p class="text-2xl font-extrabold font-mono text-red-600 dark:text-red-400"><!></p> <span class="text-[10px] text-muted-foreground block">Passed due date</span></div> <div class="bg-card border border-border/80 rounded-2xl p-4 shadow-xs space-y-1"><div class="flex items-center justify-between text-muted-foreground"><span class="text-xs font-semibold">Days Sales Outstanding (DSO)</span> <!></div> <p class="text-2xl font-extrabold font-mono text-foreground"> <span class="text-xs font-sans font-normal text-muted-foreground">Days</span></p> <span class="text-[10px] text-emerald-600 font-semibold block"> </span></div></div>`);
var root_2 = from_html(`<div class="p-3 bg-muted/20 border border-border/40 rounded-xl space-y-1"><span class="text-[11px] font-bold text-muted-foreground uppercase"> </span> <p class="text-base font-bold font-mono text-foreground"><!></p> <span class="text-[10px] text-muted-foreground block"> </span></div>`);
var root_3 = from_html(`<div class="bg-card border border-border/80 rounded-2xl p-5 shadow-xs space-y-3"><h3 class="text-xs font-bold text-foreground uppercase tracking-wider">Credit Aging Matrix</h3> <div class="grid grid-cols-1 sm:grid-cols-5 gap-3"></div></div>`);
var root_4 = from_html(`<div class="p-12 flex justify-center items-center"><!></div>`);
var root_5 = from_html(`<div class="p-12 text-center text-muted-foreground text-xs space-y-2"><!> <p class="font-semibold text-foreground">No credit receivables in this section</p> <p>All credit sales are fully processed or no items match the selected filter.</p></div>`);
var root_6 = from_html(`<tr class="hover:bg-muted/30 transition-colors"><td class="px-4 py-3 font-mono font-bold text-primary"> </td><td class="px-4 py-3 capitalize font-medium"> </td><td class="px-4 py-3 capitalize text-muted-foreground"> </td><td class="px-4 py-3 text-right font-mono font-bold text-foreground"><!></td><td class="px-4 py-3 text-right font-mono font-bold text-red-600 dark:text-red-400"><!></td><td class="px-4 py-3"><span class="px-2 py-0.5 rounded-full text-[10px] font-bold capitalize bg-amber-100 text-amber-800 dark:bg-amber-950/40 dark:text-amber-300"> </span></td><td class="px-4 py-3 font-semibold"><span> </span></td><td class="px-4 py-3 text-muted-foreground font-mono"> </td></tr>`);
var root_7 = from_html(`<div class="overflow-x-auto"><table class="w-full text-left text-xs border-collapse"><thead><tr class="bg-muted/40 border-b border-border/80 font-bold text-muted-foreground uppercase text-[10px]"><th class="px-4 py-3">Booking Reference</th><th class="px-4 py-3">Module</th><th class="px-4 py-3">Client Type</th><th class="px-4 py-3 text-right">Total Amount</th><th class="px-4 py-3 text-right">Outstanding</th><th class="px-4 py-3">Status</th><th class="px-4 py-3">Priority</th><th class="px-4 py-3">Due Date</th></tr></thead><tbody class="divide-y divide-border/60"></tbody></table></div>`);
var root_8 = from_html(`<div class="space-y-6"><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"><div><h1 class="text-xl font-bold text-foreground flex items-center gap-2"><!> Credit Receivable Management</h1> <p class="text-xs text-muted-foreground mt-0.5">Enterprise Accounts Receivable tracking, multi-stage approval queue, and credit aging analytics.</p></div> <div class="flex items-center gap-2"><!></div></div> <!> <!> <div class="space-y-4"><div class="border-b border-border/80"><nav class="flex gap-6"><button>Pending Credit</button> <button>Partially Paid</button> <button>Fully Paid (Closed)</button></nav></div> <div class="bg-card border border-border/80 rounded-2xl overflow-hidden shadow-xs"><!></div></div></div>`);
function _page($$anchor, $$props) {
	push($$props, true);
	let loading = state(true);
	let activeTab = state("open");
	let metrics = state(null);
	let receivables = state(proxy([]));
	let agingReport = state(null);
	async function loadCreditData() {
		set(loading, true);
		try {
			const [metricsRes, receivablesRes, agingRes] = await Promise.all([
				apiFetch("api/receivables/dashboard").catch(() => null),
				apiFetch(`api/receivables?status=${get(activeTab) === "overdue" ? "open" : get(activeTab)}`).catch(() => []),
				apiFetch("api/receivables/aging").catch(() => null)
			]);
			set(metrics, metricsRes, true);
			set(receivables, receivablesRes || [], true);
			set(agingReport, agingRes, true);
		} catch (err) {
			console.error("Failed to load credit management data", err);
		} finally {
			set(loading, false);
		}
	}
	onMount(() => {
		loadCreditData();
	});
	user_effect(() => {
		get(activeTab);
		loadCreditData();
	});
	var div = root_8();
	head("1m6lfx0", ($$anchor) => {
		effect(() => {
			$document.title = "Credit Management — Accounts Portal";
		});
	});
	var div_1 = child(div);
	var div_2 = child(div_1);
	var h1 = child(div_2);
	Credit_card(child(h1), { class: "h-6 w-6 text-primary" });
	next();
	reset(h1);
	next(2);
	reset(div_2);
	var div_3 = sibling(div_2, 2);
	Button(child(div_3), {
		variant: "outline",
		class: "h-8.5 text-xs rounded-xl",
		onclick: loadCreditData,
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
			next();
			append($$anchor, fragment);
		},
		$$slots: { default: true }
	});
	reset(div_3);
	reset(div_1);
	var node_3 = sibling(div_1, 2);
	var consequent = ($$anchor) => {
		var div_4 = root_1();
		var div_5 = child(div_4);
		var div_6 = child(div_5);
		Dollar_sign(sibling(child(div_6), 2), { class: "h-4 w-4 text-amber-500" });
		reset(div_6);
		var p = sibling(div_6, 2);
		MoneyDisplay(child(p), {
			get amount() {
				return get(metrics).totalOutstanding;
			},
			currency: "BHD"
		});
		reset(p);
		next(2);
		reset(div_5);
		var div_7 = sibling(div_5, 2);
		var div_8 = child(div_7);
		Trending_up(sibling(child(div_8), 2), { class: "h-4 w-4 text-emerald-500" });
		reset(div_8);
		var p_1 = sibling(div_8, 2);
		MoneyDisplay(child(p_1), {
			get amount() {
				return get(metrics).todaysCollections;
			},
			currency: "BHD"
		});
		reset(p_1);
		next(2);
		reset(div_7);
		var div_9 = sibling(div_7, 2);
		var div_10 = child(div_9);
		Triangle_alert(sibling(child(div_10), 2), { class: "h-4 w-4 text-red-500" });
		reset(div_10);
		var p_2 = sibling(div_10, 2);
		MoneyDisplay(child(p_2), {
			get amount() {
				return get(metrics).overdueReceivables;
			},
			currency: "BHD"
		});
		reset(p_2);
		next(2);
		reset(div_9);
		var div_11 = sibling(div_9, 2);
		var div_12 = child(div_11);
		Clock(sibling(child(div_12), 2), { class: "h-4 w-4 text-blue-500" });
		reset(div_12);
		var p_3 = sibling(div_12, 2);
		var text = child(p_3);
		next();
		reset(p_3);
		var span = sibling(p_3, 2);
		var text_1 = child(span);
		reset(span);
		reset(div_11);
		reset(div_4);
		template_effect(() => {
			set_text(text, `${get(metrics).dso ?? ""} `);
			set_text(text_1, `Collection Efficiency: ${get(metrics).collectionPercentage ?? ""}%`);
		});
		append($$anchor, div_4);
	};
	if_block(node_3, ($$render) => {
		if (get(metrics)) $$render(consequent);
	});
	var node_11 = sibling(node_3, 2);
	var consequent_1 = ($$anchor) => {
		var div_13 = root_3();
		var div_14 = sibling(child(div_13), 2);
		each(div_14, 21, () => get(agingReport).buckets, index, ($$anchor, b) => {
			var div_15 = root_2();
			var span_1 = child(div_15);
			var text_2 = child(span_1, true);
			reset(span_1);
			var p_4 = sibling(span_1, 2);
			MoneyDisplay(child(p_4), {
				get amount() {
					return get(b).outstandingAmount;
				},
				currency: "BHD"
			});
			reset(p_4);
			var span_2 = sibling(p_4, 2);
			var text_3 = child(span_2);
			reset(span_2);
			reset(div_15);
			template_effect(() => {
				set_text(text_2, get(b).bucketName);
				set_text(text_3, `${get(b).applicationCount ?? ""} Applications (${get(b).collectionPercentage ?? ""}%)`);
			});
			append($$anchor, div_15);
		});
		reset(div_14);
		reset(div_13);
		append($$anchor, div_13);
	};
	if_block(node_11, ($$render) => {
		if (get(agingReport) && get(agingReport).buckets) $$render(consequent_1);
	});
	var div_16 = sibling(node_11, 2);
	var div_17 = child(div_16);
	var nav = child(div_17);
	var button = child(nav);
	var button_1 = sibling(button, 2);
	var button_2 = sibling(button_1, 2);
	reset(nav);
	reset(div_17);
	var div_18 = sibling(div_17, 2);
	var node_13 = child(div_18);
	var consequent_2 = ($$anchor) => {
		var div_19 = root_4();
		Refresh_cw(child(div_19), { class: "h-6 w-6 text-primary animate-spin" });
		reset(div_19);
		append($$anchor, div_19);
	};
	var consequent_3 = ($$anchor) => {
		var div_20 = root_5();
		Circle_check(child(div_20), { class: "h-8 w-8 text-emerald-500 mx-auto" });
		next(4);
		reset(div_20);
		append($$anchor, div_20);
	};
	var alternate = ($$anchor) => {
		var div_21 = root_7();
		var table = child(div_21);
		var tbody = sibling(child(table));
		each(tbody, 21, () => get(receivables), index, ($$anchor, r) => {
			var tr = root_6();
			var td = child(tr);
			var text_4 = child(td, true);
			reset(td);
			var td_1 = sibling(td);
			var text_5 = child(td_1, true);
			reset(td_1);
			var td_2 = sibling(td_1);
			var text_6 = child(td_2, true);
			reset(td_2);
			var td_3 = sibling(td_2);
			MoneyDisplay(child(td_3), {
				get amount() {
					return get(r).totalAmount;
				},
				currency: "BHD"
			});
			reset(td_3);
			var td_4 = sibling(td_3);
			MoneyDisplay(child(td_4), {
				get amount() {
					return get(r).outstandingAmount;
				},
				currency: "BHD"
			});
			reset(td_4);
			var td_5 = sibling(td_4);
			var span_3 = child(td_5);
			var text_7 = child(span_3, true);
			reset(span_3);
			reset(td_5);
			var td_6 = sibling(td_5);
			var span_4 = child(td_6);
			var text_8 = child(span_4, true);
			reset(span_4);
			reset(td_6);
			var td_7 = sibling(td_6);
			var text_9 = child(td_7, true);
			reset(td_7);
			reset(tr);
			template_effect(($0, $1) => {
				set_text(text_4, get(r).bookingNumber);
				set_text(text_5, get(r).bookingModule);
				set_text(text_6, get(r).headType);
				set_text(text_7, get(r).status);
				set_class(span_4, 1, $0);
				set_text(text_8, get(r).priority);
				set_text(text_9, $1);
			}, [() => clsx(["px-2 py-0.5 rounded-full text-[10px]", get(r).priority === "Critical" ? "bg-red-100 text-red-800" : "bg-muted text-muted-foreground"].join(" ")), () => new Date(get(r).dueDate).toLocaleDateString()]);
			append($$anchor, tr);
		});
		reset(tbody);
		reset(table);
		reset(div_21);
		append($$anchor, div_21);
	};
	if_block(node_13, ($$render) => {
		if (get(loading)) $$render(consequent_2);
		else if (get(receivables).length === 0) $$render(consequent_3, 1);
		else $$render(alternate, -1);
	});
	reset(div_18);
	reset(div_16);
	reset(div);
	template_effect(($0, $1, $2) => {
		set_class(button, 1, $0);
		set_class(button_1, 1, $1);
		set_class(button_2, 1, $2);
	}, [
		() => clsx(["pb-3 text-xs font-bold transition-all border-b-2 cursor-pointer", get(activeTab) === "open" ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"].join(" ")),
		() => clsx(["pb-3 text-xs font-bold transition-all border-b-2 cursor-pointer", get(activeTab) === "partiallypaid" ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"].join(" ")),
		() => clsx(["pb-3 text-xs font-bold transition-all border-b-2 cursor-pointer", get(activeTab) === "closed" ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"].join(" "))
	]);
	delegated("click", button, () => set(activeTab, "open"));
	delegated("click", button_1, () => set(activeTab, "partiallypaid"));
	delegated("click", button_2, () => set(activeTab, "closed"));
	append($$anchor, div);
	pop();
}
delegate(["click"]);
//#endregion
export { _page as component };

import { B as append, Bt as reset, H as from_html, I as if_block, K as delegate, N as each, Nt as pop, P as index, Pt as push, Q as get, R as set_text, bt as state, gt as proxy, ht as sibling, ot as template_effect, pt as child, q as delegated, r as onMount, vt as set, zt as next } from "../chunks/dXkmWTgM.js";
import "../chunks/DhaYE-8x.js";
import { t as Ban } from "../chunks/CCPC6kzk.js";
import { t as Check } from "../chunks/blG6JRe7.js";
import { t as Circle_alert } from "../chunks/CHXThoj_2.js";
import { t as Circle_check } from "../chunks/qB0lJ_dM2.js";
import { t as Dollar_sign } from "../chunks/BnaNfP7s2.js";
import { t as Plus } from "../chunks/BObidJ7B.js";
import { t as Refresh_cw } from "../chunks/DpTJy0Wb.js";
import { t as Wallet } from "../chunks/BahXSy4P.js";
import { t as X } from "../chunks/wXHc9RNY.js";
import { i as getSalaryPayments, s as updateSalaryPaymentStatus } from "../chunks/DIcwafIY.js";
//#region src/routes/(app)/payroll/salary-payouts/+page.svelte
var root = from_html(`<div class="p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-xs font-semibold flex items-center justify-between"><div class="flex items-center gap-2"><!> <span> </span></div> <button class="hover:opacity-80"><!></button></div>`);
var root_1 = from_html(`<div class="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold flex items-center justify-between"><div class="flex items-center gap-2"><!> <span> </span></div> <button class="hover:opacity-80"><!></button></div>`);
var root_2 = from_html(`<div class="p-12 text-center text-muted-foreground text-xs bg-muted/20 border border-dashed border-border rounded-xl">No pending salary payouts waiting for payment approval.</div>`);
var root_3 = from_html(`<div class="p-4 rounded-xl border border-border bg-muted/20 space-y-2"><div class="flex items-center justify-between text-xs font-bold text-foreground"><span> </span> <span class="text-primary"> </span></div> <div class="text-[11px] text-muted-foreground flex items-center justify-between"><span> </span> <span class="font-medium"> </span></div> <div class="flex items-center justify-end gap-2 pt-2 border-t border-border/60"><button class="h-8 px-2.5 rounded-lg border border-destructive/30 text-destructive text-[11px] font-semibold hover:bg-destructive/10 transition-colors cursor-pointer flex items-center gap-1"><!> <span>Cancel</span></button> <button class="h-8 px-3 rounded-lg bg-emerald-600 text-white text-[11px] font-bold hover:bg-emerald-700 transition-colors cursor-pointer flex items-center gap-1 shadow-sm"><!> <span>Mark Paid</span></button></div></div>`);
var root_4 = from_html(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"></div>`);
var root_5 = from_html(`<div class="space-y-6"><div class="bg-card p-6 rounded-2xl border border-border shadow-sm flex items-center justify-between"><div><h1 class="text-xl font-bold text-foreground flex items-center gap-2"><!> Salary Payout Generator</h1> <p class="text-xs text-muted-foreground mt-1">Generate and process monthly staff salary payouts cleanly through Cash or Bank accounts without impacting Journal Entries or Ledger engines.</p></div> <a href="/payments/new?tab=salary" class="h-10 px-4 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition-colors shadow-xs flex items-center gap-2 shrink-0"><!> <span>Log New Payout</span></a></div> <!> <!> <div class="bg-card p-6 rounded-2xl border border-border shadow-sm space-y-4"><div class="border-b border-border pb-3 flex items-center justify-between"><h2 class="text-sm font-bold text-foreground flex items-center gap-2"><!> </h2> <a href="/payments/new?tab=salary" class="text-xs text-primary hover:underline font-semibold flex items-center gap-1"><!> <span>Log Payout in Treasury Payments</span></a></div> <div class="space-y-3"><!></div></div></div>`);
function _page($$anchor, $$props) {
	push($$props, true);
	let loading = state(true);
	let error = state(null);
	let successMsg = state(null);
	let pendingPayments = state(proxy([]));
	let actionLoadingId = state(null);
	onMount(async () => {
		await loadPendingPayments();
	});
	async function loadPendingPayments() {
		set(loading, true);
		set(error, null);
		try {
			set(pendingPayments, await getSalaryPayments("Pending"), true);
		} catch (err) {
			set(error, err?.message || "Failed to load pending payout data", true);
		} finally {
			set(loading, false);
		}
	}
	async function handleStatusUpdate(id, status) {
		set(actionLoadingId, id, true);
		set(error, null);
		try {
			await updateSalaryPaymentStatus(id, { status });
			set(successMsg, `Salary payment marked as '${status}'.`);
			setTimeout(() => set(successMsg, null), 4e3);
			await loadPendingPayments();
		} catch (err) {
			set(error, err?.message || `Failed to update status to ${status}`, true);
		} finally {
			set(actionLoadingId, null);
		}
	}
	function formatCurrency(val, curr = "BHD") {
		return `${curr} ${(val || 0).toLocaleString("en-US", {
			minimumFractionDigits: 3,
			maximumFractionDigits: 3
		})}`;
	}
	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	];
	var div = root_5();
	var div_1 = child(div);
	var div_2 = child(div_1);
	var h1 = child(div_2);
	Wallet(child(h1), { class: "h-6 w-6 text-primary" });
	next();
	reset(h1);
	next(2);
	reset(div_2);
	var a = sibling(div_2, 2);
	Plus(child(a), { class: "h-4 w-4" });
	next(2);
	reset(a);
	reset(div_1);
	var node_2 = sibling(div_1, 2);
	var consequent = ($$anchor) => {
		var div_3 = root();
		var div_4 = child(div_3);
		var node_3 = child(div_4);
		Circle_alert(node_3, { class: "h-4 w-4 shrink-0" });
		var span = sibling(node_3, 2);
		var text = child(span, true);
		reset(span);
		reset(div_4);
		var button = sibling(div_4, 2);
		X(child(button), { class: "h-4 w-4" });
		reset(button);
		reset(div_3);
		template_effect(() => set_text(text, get(error)));
		delegated("click", button, () => set(error, null));
		append($$anchor, div_3);
	};
	if_block(node_2, ($$render) => {
		if (get(error)) $$render(consequent);
	});
	var node_5 = sibling(node_2, 2);
	var consequent_1 = ($$anchor) => {
		var div_5 = root_1();
		var div_6 = child(div_5);
		var node_6 = child(div_6);
		Circle_check(node_6, { class: "h-4 w-4 shrink-0" });
		var span_1 = sibling(node_6, 2);
		var text_1 = child(span_1, true);
		reset(span_1);
		reset(div_6);
		var button_1 = sibling(div_6, 2);
		X(child(button_1), { class: "h-4 w-4" });
		reset(button_1);
		reset(div_5);
		template_effect(() => set_text(text_1, get(successMsg)));
		delegated("click", button_1, () => set(successMsg, null));
		append($$anchor, div_5);
	};
	if_block(node_5, ($$render) => {
		if (get(successMsg)) $$render(consequent_1);
	});
	var div_7 = sibling(node_5, 2);
	var div_8 = child(div_7);
	var h2 = child(div_8);
	var node_8 = child(h2);
	Dollar_sign(node_8, { class: "h-4 w-4 text-amber-500" });
	var text_2 = sibling(node_8);
	reset(h2);
	var a_1 = sibling(h2, 2);
	Plus(child(a_1), { class: "h-3.5 w-3.5" });
	next(2);
	reset(a_1);
	reset(div_8);
	var div_9 = sibling(div_8, 2);
	var node_10 = child(div_9);
	var consequent_2 = ($$anchor) => {
		append($$anchor, root_2());
	};
	var alternate_1 = ($$anchor) => {
		var div_11 = root_4();
		each(div_11, 21, () => get(pendingPayments), index, ($$anchor, item) => {
			var div_12 = root_3();
			var div_13 = child(div_12);
			var span_2 = child(div_13);
			var text_3 = child(span_2, true);
			reset(span_2);
			var span_3 = sibling(span_2, 2);
			var text_4 = child(span_3, true);
			reset(span_3);
			reset(div_13);
			var div_14 = sibling(div_13, 2);
			var span_4 = child(div_14);
			var text_5 = child(span_4);
			reset(span_4);
			var span_5 = sibling(span_4, 2);
			var text_6 = child(span_5, true);
			reset(span_5);
			reset(div_14);
			var div_15 = sibling(div_14, 2);
			var button_2 = child(div_15);
			Ban(child(button_2), { class: "h-3.5 w-3.5" });
			next(2);
			reset(button_2);
			var button_3 = sibling(button_2, 2);
			var node_12 = child(button_3);
			var consequent_3 = ($$anchor) => {
				Refresh_cw($$anchor, { class: "h-3.5 w-3.5 animate-spin" });
			};
			var alternate = ($$anchor) => {
				Check($$anchor, { class: "h-3.5 w-3.5" });
			};
			if_block(node_12, ($$render) => {
				if (get(actionLoadingId) === get(item).id) $$render(consequent_3);
				else $$render(alternate, -1);
			});
			next(2);
			reset(button_3);
			reset(div_15);
			reset(div_12);
			template_effect(($0) => {
				set_text(text_3, get(item).employeeName);
				set_text(text_4, $0);
				set_text(text_5, `Period: ${months[get(item).payrollMonth - 1] ?? ""} ${get(item).payrollYear ?? ""}`);
				set_text(text_6, get(item).paymentMethod);
				button_2.disabled = get(actionLoadingId) === get(item).id;
				button_3.disabled = get(actionLoadingId) === get(item).id;
			}, [() => formatCurrency(get(item).netSalary)]);
			delegated("click", button_2, () => handleStatusUpdate(get(item).id, "Cancelled"));
			delegated("click", button_3, () => handleStatusUpdate(get(item).id, "Paid"));
			append($$anchor, div_12);
		});
		reset(div_11);
		append($$anchor, div_11);
	};
	if_block(node_10, ($$render) => {
		if (get(pendingPayments).length === 0) $$render(consequent_2);
		else $$render(alternate_1, -1);
	});
	reset(div_9);
	reset(div_7);
	reset(div);
	template_effect(() => set_text(text_2, ` Pending Salary Payouts (${get(pendingPayments).length ?? ""})`));
	append($$anchor, div);
	pop();
}
delegate(["click"]);
//#endregion
export { _page as component };

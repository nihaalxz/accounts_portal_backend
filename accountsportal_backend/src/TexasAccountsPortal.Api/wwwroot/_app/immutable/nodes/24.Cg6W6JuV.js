import { B as append, Bt as reset, Ct as user_derived, D as head, H as from_html, I as if_block, K as delegate, N as each, Nt as pop, P as index, Pt as push, Q as get, R as set_text, T as clsx, V as comment, _ as set_attribute, bt as state, dt as $document, g as remove_input_defaults, gt as proxy, ht as sibling, it as effect, m as bind_value, mt as first_child, ot as template_effect, pt as child, q as delegated, r as onMount, vt as set, w as set_class, zt as next } from "../chunks/dXkmWTgM.js";
import { t as goto } from "../chunks/DpAHd2lh.js";
import "../chunks/DhaYE-8x.js";
import { t as Plus } from "../chunks/BObidJ7B.js";
import { t as Search } from "../chunks/D7t9qluE.js";
import { t as Wallet } from "../chunks/BahXSy4P.js";
import { t as Button } from "../chunks/BhXsq3bC2.js";
import { t as ErrorState } from "../chunks/_Vg9md0J2.js";
import "../chunks/CHcl6wVa2.js";
import { i as getChartOfAccounts } from "../chunks/DLZkC8-A2.js";
import { t as FinancialTableSkeleton } from "../chunks/BifxP-5W2.js";
import { t as EmptyState } from "../chunks/DVZCE_Pc2.js";
import { t as MoneyDisplay } from "../chunks/CIVSRuaR2.js";
import { c as getExpenses } from "../chunks/bhrLifj5.js";
import { n as PAYMENT_METHOD_LABELS, t as EXPENSE_STATUS_LABELS } from "../chunks/rjZ5RTov.js";
//#region src/routes/(app)/expenses/+page.svelte
var root = from_html(`<!> Log Expense`, 1);
var root_1 = from_html(`<button> </button>`);
var root_2 = from_html(`<div class="bg-card border border-border rounded-2xl overflow-hidden shadow-xs"><!></div>`);
var root_3 = from_html(`<tr class="hover:bg-muted/10 transition-colors cursor-pointer"><td class="p-4 font-mono font-medium text-muted-foreground"> </td><td class="p-4 font-semibold text-foreground truncate max-w-[200px]"> </td><td class="p-4 text-foreground truncate max-w-[250px]"> </td><td class="p-4 capitalize"> </td><td class="p-4"> </td><td class="p-4 text-right font-bold text-foreground"><!></td><td class="p-4"><span> </span></td></tr>`);
var root_4 = from_html(`<div class="bg-card border border-border rounded-2xl overflow-hidden shadow-xs"><div class="overflow-x-auto"><table class="w-full min-w-[750px] text-left border-collapse text-xs"><thead><tr class="bg-muted/30 border-b border-border text-muted-foreground font-semibold"><th class="p-4 w-28">Expense No.</th><th class="p-4 w-48">Expense Category</th><th class="p-4">Description</th><th class="p-4 w-32">Payment Method</th><th class="p-4 w-32">Expense Date</th><th class="p-4 w-28 text-right">Amount</th><th class="p-4 w-24">Status</th></tr></thead><tbody class="divide-y divide-border/60"></tbody></table></div></div>`);
var root_5 = from_html(`<div class="space-y-6"><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"><div class="flex flex-col gap-1"><h1 class="text-xl font-bold text-foreground">Expense Claims</h1> <p class="text-xs text-muted-foreground">Record company expenses, reconcile petty cash payouts, and request master approval.</p></div> <!></div> <div class="bg-card border border-border rounded-2xl p-4 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 shadow-xs"><div class="relative flex-1"><!> <input type="text" placeholder="Search by Expense Number or Description..." class="pl-9 h-10 w-full bg-background border border-border rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground"/></div> <div class="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0"></div></div> <!></div>`);
function _page($$anchor, $$props) {
	push($$props, true);
	let expenses = state(proxy([]));
	let accounts = state(proxy([]));
	let loading = state(true);
	let errorMsg = state(null);
	let correlationId = state("");
	let searchVal = state("");
	let statusFilter = state("all");
	let abortController = null;
	async function loadData() {
		if (abortController) abortController.abort();
		abortController = new AbortController();
		set(loading, true);
		set(errorMsg, null);
		set(correlationId, "");
		try {
			const [expList, coaList] = await Promise.all([getExpenses(abortController.signal), getChartOfAccounts(abortController.signal)]);
			set(expenses, expList.sort((a, b) => new Date(b.expenseDate).getTime() - new Date(a.expenseDate).getTime()), true);
			set(accounts, coaList, true);
		} catch (err) {
			if (err.name === "AbortError") return;
			set(errorMsg, err.message || "Failed to load expense records.", true);
			set(correlationId, err.correlationId || "", true);
		} finally {
			set(loading, false);
		}
	}
	function getCategoryName(id) {
		const acc = get(accounts).find((a) => a.id === id);
		return acc ? `${acc.code} - ${acc.name}` : `Category #${id}`;
	}
	const filteredExpenses = user_derived(() => () => {
		let result = get(expenses);
		if (get(statusFilter) !== "all") result = result.filter((e) => e.status === get(statusFilter));
		if (get(searchVal).trim() !== "") {
			const query = get(searchVal).toLowerCase();
			result = result.filter((e) => e.expenseNumber.toLowerCase().includes(query) || e.description.toLowerCase().includes(query));
		}
		return result;
	});
	onMount(() => {
		loadData();
		return () => {
			if (abortController) abortController.abort();
		};
	});
	var div = root_5();
	head("1qp74nb", ($$anchor) => {
		effect(() => {
			$document.title = "Expense Management — Accounts Portal";
		});
	});
	var div_1 = child(div);
	Button(sibling(child(div_1), 2), {
		class: "rounded-xl text-xs py-5 cursor-pointer font-semibold",
		onclick: () => goto("/expenses/new"),
		children: ($$anchor, $$slotProps) => {
			var fragment = root();
			Plus(first_child(fragment), { class: "h-3.5 w-3.5 mr-1" });
			next();
			append($$anchor, fragment);
		},
		$$slots: { default: true }
	});
	reset(div_1);
	var div_2 = sibling(div_1, 2);
	var div_3 = child(div_2);
	var node_2 = child(div_3);
	Search(node_2, { class: "absolute left-3 top-2.5 h-4 w-4 text-muted-foreground/60" });
	var input = sibling(node_2, 2);
	remove_input_defaults(input);
	reset(div_3);
	var div_4 = sibling(div_3, 2);
	each(div_4, 20, () => [
		"all",
		"draft",
		"pendingapproval",
		"approved",
		"posted",
		"rejected",
		"cancelled",
		"reversed"
	], index, ($$anchor, status) => {
		var button = root_1();
		var text = child(button, true);
		reset(button);
		template_effect(($0) => {
			set_class(button, 1, $0);
			set_text(text, EXPENSE_STATUS_LABELS[status] || status);
		}, [() => clsx(["px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer whitespace-nowrap capitalize", get(statusFilter) === status ? "bg-primary border-primary text-primary-foreground" : "bg-background border-border text-muted-foreground hover:text-foreground"].join(" "))]);
		delegated("click", button, () => set(statusFilter, status, true));
		append($$anchor, button);
	});
	reset(div_4);
	reset(div_2);
	var node_3 = sibling(div_2, 2);
	var consequent = ($$anchor) => {
		ErrorState($$anchor, {
			get message() {
				return get(errorMsg);
			},
			get correlationId() {
				return get(correlationId);
			},
			retryAction: loadData
		});
	};
	var alternate_1 = ($$anchor) => {
		var fragment_2 = comment();
		var node_4 = first_child(fragment_2);
		var consequent_1 = ($$anchor) => {
			var div_5 = root_2();
			FinancialTableSkeleton(child(div_5), {
				rows: 5,
				columns: 7
			});
			reset(div_5);
			append($$anchor, div_5);
		};
		var consequent_2 = ($$anchor) => {
			EmptyState($$anchor, {
				title: "No expense logs found",
				description: "Track company operational costs by filing a new expense claim.",
				get icon() {
					return Wallet;
				}
			});
		};
		var d = user_derived(() => get(filteredExpenses)().length === 0);
		var alternate = ($$anchor) => {
			var div_6 = root_4();
			var div_7 = child(div_6);
			var table = child(div_7);
			var tbody = sibling(child(table));
			each(tbody, 21, () => get(filteredExpenses)(), (exp) => exp.id, ($$anchor, exp) => {
				var tr = root_3();
				var td = child(tr);
				var text_1 = child(td, true);
				reset(td);
				var td_1 = sibling(td);
				var text_2 = child(td_1, true);
				reset(td_1);
				var td_2 = sibling(td_1);
				var text_3 = child(td_2, true);
				reset(td_2);
				var td_3 = sibling(td_2);
				var text_4 = child(td_3, true);
				reset(td_3);
				var td_4 = sibling(td_3);
				var text_5 = child(td_4, true);
				reset(td_4);
				var td_5 = sibling(td_4);
				MoneyDisplay(child(td_5), { get amount() {
					return get(exp).amount;
				} });
				reset(td_5);
				var td_6 = sibling(td_5);
				var span = child(td_6);
				var text_6 = child(span, true);
				reset(span);
				reset(td_6);
				reset(tr);
				template_effect(($0, $1, $2, $3) => {
					set_text(text_1, get(exp).expenseNumber);
					set_attribute(td_1, "title", $0);
					set_text(text_2, $1);
					set_attribute(td_2, "title", get(exp).description);
					set_text(text_3, get(exp).description);
					set_text(text_4, PAYMENT_METHOD_LABELS[get(exp).paymentMethod] || get(exp).paymentMethod);
					set_text(text_5, $2);
					set_class(span, 1, $3);
					set_text(text_6, EXPENSE_STATUS_LABELS[get(exp).status] || get(exp).status);
				}, [
					() => getCategoryName(get(exp).expenseCategoryId),
					() => getCategoryName(get(exp).expenseCategoryId),
					() => new Date(get(exp).expenseDate).toLocaleDateString(),
					() => clsx(["inline-flex items-center gap-1 font-semibold rounded-full border text-[10px] px-2 py-0.5 capitalize", get(exp).status === "approved" || get(exp).status === "posted" ? "text-emerald-700 bg-emerald-50 border-emerald-200 dark:text-emerald-400 dark:bg-emerald-950/40 dark:border-emerald-800" : get(exp).status === "pendingapproval" ? "text-yellow-700 bg-yellow-50 border-yellow-200 dark:text-yellow-400 dark:bg-yellow-950/40 dark:border-yellow-800" : get(exp).status === "rejected" || get(exp).status === "cancelled" || get(exp).status === "reversed" ? "text-rose-700 bg-rose-50 border-rose-200 dark:text-rose-400 dark:bg-rose-950/40 dark:border-rose-800" : "text-muted-foreground bg-muted border-border"].join(" "))
				]);
				delegated("click", tr, () => goto(`/expenses/${get(exp).id}`));
				append($$anchor, tr);
			});
			reset(tbody);
			reset(table);
			reset(div_7);
			reset(div_6);
			append($$anchor, div_6);
		};
		if_block(node_4, ($$render) => {
			if (get(loading)) $$render(consequent_1);
			else if (get(d)) $$render(consequent_2, 1);
			else $$render(alternate, -1);
		});
		append($$anchor, fragment_2);
	};
	if_block(node_3, ($$render) => {
		if (get(errorMsg)) $$render(consequent);
		else $$render(alternate_1, -1);
	});
	reset(div);
	bind_value(input, () => get(searchVal), ($$value) => set(searchVal, $$value));
	append($$anchor, div);
	pop();
}
delegate(["click"]);
//#endregion
export { _page as component };

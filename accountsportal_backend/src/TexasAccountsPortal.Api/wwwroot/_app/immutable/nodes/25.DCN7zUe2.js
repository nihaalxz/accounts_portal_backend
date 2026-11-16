import { B as append, Bt as reset, Ct as user_derived, D as head, G as text, H as from_html, I as if_block, J as event, K as delegate, N as each, Nt as pop, P as index, Pt as push, Q as get, R as set_text, b as bind_select_value, bt as state, dt as $document, g as remove_input_defaults, gt as proxy, ht as sibling, it as effect, m as bind_value, ot as template_effect, pt as child, q as delegated, r as onMount, ut as remove_textarea_child, vt as set, zt as next } from "../chunks/dXkmWTgM.js";
import { t as goto } from "../chunks/CfKBnw6U.js";
import "../chunks/DhaYE-8x.js";
import { t as addToast } from "../chunks/CbPRQHfn.js";
import { t as Arrow_left } from "../chunks/Bn7x0kyr.js";
import { t as Button } from "../chunks/BhXsq3bC.js";
import "../chunks/CXmEjqYc.js";
import { i as getChartOfAccounts } from "../chunks/BnWFnZiT2.js";
import { r as getAccounts } from "../chunks/DpvpCgoE2.js";
import { n as getBanks } from "../chunks/CoKhbzkD2.js";
import { r as createExpense } from "../chunks/t1fHEIyG.js";
//#region src/routes/(app)/expenses/new/+page.svelte
var root = from_html(`<option> </option>`);
var root_1 = from_html(`<div class="space-y-1.5 animate-in fade-in slide-in-from-top-1 duration-200"><label for="sourceAccountId" class="font-semibold text-muted-foreground">Source Cash Account</label> <select id="sourceAccountId" class="h-10 w-full bg-background border border-border rounded-xl px-2 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground disabled:opacity-50"><option>-- Select Source Cash Account --</option><!></select></div>`);
var root_2 = from_html(`<div class="space-y-1.5 animate-in fade-in slide-in-from-top-1 duration-200"><label for="sourceBankId" class="font-semibold text-muted-foreground">Source Bank Account</label> <select id="sourceBankId" class="h-10 w-full bg-background border border-border rounded-xl px-2 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground disabled:opacity-50"><option>-- Select Source Bank --</option><!></select></div>`);
var root_3 = from_html(`<div class="max-w-2xl mx-auto space-y-6"><div class="space-y-2"><button class="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground cursor-pointer transition-colors"><!> Back to Expense Claims</button> <h1 class="text-xl font-bold text-foreground">Log Operational Expense</h1> <p class="text-xs text-muted-foreground">File an operational expense log for approval and General Ledger posting.</p></div> <form class="bg-card border border-border rounded-2xl p-6 shadow-xs space-y-4 text-xs"><div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><div class="space-y-1.5"><label for="expenseCategoryId" class="font-semibold text-muted-foreground">Expense Category (Account)</label> <select id="expenseCategoryId" class="h-10 w-full bg-background border border-border rounded-xl px-2 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground disabled:opacity-50"><option>-- Select Expense Account --</option><!></select></div> <div class="space-y-1.5"><label for="amount" class="font-semibold text-muted-foreground">Amount (BHD)</label> <input id="amount" type="number" step="0.001" min="0.001" required="" placeholder="0.000" class="h-10 w-full bg-background border border-border rounded-xl px-3 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground"/></div></div> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><div class="space-y-1.5"><label for="expenseDate" class="font-semibold text-muted-foreground">Expense Date</label> <input id="expenseDate" type="date" required="" class="h-10 w-full bg-background border border-border rounded-xl px-3 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground"/></div> <div class="space-y-1.5"><label for="paymentMethod" class="font-semibold text-muted-foreground">Payment Method</label> <select id="paymentMethod" class="h-10 w-full bg-background border border-border rounded-xl px-2 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground"><option>Cash Account</option><option>Bank Account</option></select></div></div> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><!> <div class="space-y-1.5"><label for="description" class="font-semibold text-muted-foreground">Description / Purpose</label> <input id="description" type="text" required="" placeholder="e.g. Office stationery purchases" class="h-10 w-full bg-background border border-border rounded-xl px-3 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground"/></div></div> <div class="space-y-1.5"><label for="notes" class="font-semibold text-muted-foreground">Notes / Internal Remarks (Optional)</label> <textarea id="notes" rows="2" placeholder="Add additional reconciliation references, receipts info..." class="w-full bg-background border border-border rounded-xl p-3 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground resize-y"></textarea></div> <div class="flex items-center justify-end gap-3 pt-4 border-t border-border"><!> <!></div></form></div>`);
function _page($$anchor, $$props) {
	push($$props, true);
	let expenseCategoryIdVal = state("");
	let amount = state("");
	let description = state("");
	let paymentMethod = state("cash");
	let sourceAccountIdVal = state("");
	let sourceBankIdVal = state("");
	let notes = state("");
	let expenseDate = state(proxy((/* @__PURE__ */ new Date()).toISOString().split("T")[0]));
	let categories = state(proxy([]));
	let cashAccounts = state(proxy([]));
	let bankAccounts = state(proxy([]));
	let isSubmitting = state(false);
	let isLoadingData = state(true);
	async function loadDropdowns() {
		try {
			const [coaList, cashList, bankList] = await Promise.all([
				getChartOfAccounts(),
				getAccounts(),
				getBanks()
			]);
			set(categories, coaList.filter((a) => a.accountType === "expense" && !a.isControlAccount && a.isActive), true);
			set(cashAccounts, cashList.filter((a) => a.isActive), true);
			set(bankAccounts, bankList.filter((b) => b.isActive), true);
		} catch (err) {
			addToast(err.message || "Failed to load form dropdown data.", "error");
		} finally {
			set(isLoadingData, false);
		}
	}
	async function handleSubmit(e) {
		e.preventDefault();
		if (!get(expenseCategoryIdVal)) {
			addToast("Please select an Expense Category.", "error");
			return;
		}
		const parsedAmount = parseFloat(get(amount));
		if (isNaN(parsedAmount) || parsedAmount <= 0) {
			addToast("Amount must be a positive number.", "error");
			return;
		}
		if (!get(description).trim()) {
			addToast("Please enter a description.", "error");
			return;
		}
		if (get(paymentMethod) === "cash" && !get(sourceAccountIdVal)) {
			addToast("Please select a Source Cash Account.", "error");
			return;
		}
		if ((get(paymentMethod) === "bank" || get(paymentMethod) === "bank_transfer") && !get(sourceBankIdVal)) {
			addToast("Please select a Source Bank Account.", "error");
			return;
		}
		set(isSubmitting, true);
		try {
			const categoryId = parseInt(get(expenseCategoryIdVal));
			const sourceAccountId = get(paymentMethod) === "cash" ? parseInt(get(sourceAccountIdVal)) : null;
			const sourceBankId = get(paymentMethod) === "bank" || get(paymentMethod) === "bank_transfer" ? parseInt(get(sourceBankIdVal)) : null;
			await createExpense({
				expenseCategoryId: categoryId,
				amount: parsedAmount,
				description: get(description).trim(),
				paymentMethod: get(paymentMethod),
				sourceAccountId,
				sourceBankId,
				notes: get(notes).trim() ? get(notes).trim() : null,
				expenseDate: get(expenseDate) || ""
			});
			addToast("Expense claim filed successfully.", "success");
			goto("/expenses");
		} catch (err) {
			addToast(err.message || "Failed to log expense claim.", "error");
		} finally {
			set(isSubmitting, false);
		}
	}
	onMount(() => {
		loadDropdowns();
	});
	var div = root_3();
	head("12lxlt4", ($$anchor) => {
		effect(() => {
			$document.title = "Log Expense — Accounts Portal";
		});
	});
	var div_1 = child(div);
	var button = child(div_1);
	Arrow_left(child(button), { class: "h-3.5 w-3.5" });
	next();
	reset(button);
	next(4);
	reset(div_1);
	var form = sibling(div_1, 2);
	var div_2 = child(form);
	var div_3 = child(div_2);
	var select = sibling(child(div_3), 2);
	var option = child(select);
	option.value = option.__value = "";
	each(sibling(option), 17, () => get(categories), index, ($$anchor, cat) => {
		var option_1 = root();
		var text = child(option_1);
		reset(option_1);
		var option_1_value = {};
		template_effect(($0) => {
			set_text(text, `${get(cat).code ?? ""} — ${get(cat).name ?? ""}`);
			if (option_1_value !== (option_1_value = $0)) option_1.value = (option_1.__value = $0) ?? "";
		}, [() => String(get(cat).id)]);
		append($$anchor, option_1);
	});
	reset(select);
	reset(div_3);
	var div_4 = sibling(div_3, 2);
	var input = sibling(child(div_4), 2);
	remove_input_defaults(input);
	reset(div_4);
	reset(div_2);
	var div_5 = sibling(div_2, 2);
	var div_6 = child(div_5);
	var input_1 = sibling(child(div_6), 2);
	remove_input_defaults(input_1);
	reset(div_6);
	var div_7 = sibling(div_6, 2);
	var select_1 = sibling(child(div_7), 2);
	var option_2 = child(select_1);
	option_2.value = option_2.__value = "cash";
	var option_3 = sibling(option_2);
	option_3.value = option_3.__value = "bank";
	reset(select_1);
	reset(div_7);
	reset(div_5);
	var div_8 = sibling(div_5, 2);
	var node_2 = child(div_8);
	var consequent = ($$anchor) => {
		var div_9 = root_1();
		var select_2 = sibling(child(div_9), 2);
		var option_4 = child(select_2);
		option_4.value = option_4.__value = "";
		each(sibling(option_4), 17, () => get(cashAccounts), index, ($$anchor, acc) => {
			var option_5 = root();
			var text_1 = child(option_5);
			reset(option_5);
			var option_5_value = {};
			template_effect(($0, $1) => {
				set_text(text_1, `${get(acc).name ?? ""} (Bal: ${$0 ?? ""} BHD)`);
				if (option_5_value !== (option_5_value = $1)) option_5.value = (option_5.__value = $1) ?? "";
			}, [() => get(acc).currentBalance.toFixed(3), () => String(get(acc).id)]);
			append($$anchor, option_5);
		});
		reset(select_2);
		reset(div_9);
		template_effect(() => select_2.disabled = get(isLoadingData));
		bind_select_value(select_2, () => get(sourceAccountIdVal), ($$value) => set(sourceAccountIdVal, $$value));
		append($$anchor, div_9);
	};
	var alternate = ($$anchor) => {
		var div_10 = root_2();
		var select_3 = sibling(child(div_10), 2);
		var option_6 = child(select_3);
		option_6.value = option_6.__value = "";
		each(sibling(option_6), 17, () => get(bankAccounts), index, ($$anchor, bank) => {
			var option_7 = root();
			var text_2 = child(option_7);
			reset(option_7);
			var option_7_value = {};
			template_effect(($0, $1) => {
				set_text(text_2, `${get(bank).bankName ?? ""} (Bal: ${$0 ?? ""} BHD)`);
				if (option_7_value !== (option_7_value = $1)) option_7.value = (option_7.__value = $1) ?? "";
			}, [() => get(bank).currentBalance.toFixed(3), () => String(get(bank).id)]);
			append($$anchor, option_7);
		});
		reset(select_3);
		reset(div_10);
		template_effect(() => select_3.disabled = get(isLoadingData));
		bind_select_value(select_3, () => get(sourceBankIdVal), ($$value) => set(sourceBankIdVal, $$value));
		append($$anchor, div_10);
	};
	if_block(node_2, ($$render) => {
		if (get(paymentMethod) === "cash") $$render(consequent);
		else $$render(alternate, -1);
	});
	var div_11 = sibling(node_2, 2);
	var input_2 = sibling(child(div_11), 2);
	remove_input_defaults(input_2);
	reset(div_11);
	reset(div_8);
	var div_12 = sibling(div_8, 2);
	var textarea = sibling(child(div_12), 2);
	remove_textarea_child(textarea);
	reset(div_12);
	var div_13 = sibling(div_12, 2);
	var node_5 = child(div_13);
	Button(node_5, {
		variant: "outline",
		class: "rounded-xl px-5 py-4.5 font-semibold cursor-pointer",
		get disabled() {
			return get(isSubmitting);
		},
		onclick: () => goto("/expenses"),
		children: ($$anchor, $$slotProps) => {
			next();
			append($$anchor, text("Cancel"));
		},
		$$slots: { default: true }
	});
	var node_6 = sibling(node_5, 2);
	{
		let $0 = user_derived(() => get(isSubmitting) || get(isLoadingData));
		Button(node_6, {
			type: "submit",
			class: "rounded-xl px-5 py-4.5 font-semibold cursor-pointer",
			get disabled() {
				return get($0);
			},
			children: ($$anchor, $$slotProps) => {
				next();
				var text_4 = text();
				template_effect(() => set_text(text_4, get(isSubmitting) ? "Posting..." : "Log Expense"));
				append($$anchor, text_4);
			},
			$$slots: { default: true }
		});
	}
	reset(div_13);
	reset(form);
	reset(div);
	template_effect(() => select.disabled = get(isLoadingData));
	delegated("click", button, () => goto("/expenses"));
	event("submit", form, handleSubmit);
	bind_select_value(select, () => get(expenseCategoryIdVal), ($$value) => set(expenseCategoryIdVal, $$value));
	bind_value(input, () => get(amount), ($$value) => set(amount, $$value));
	bind_value(input_1, () => get(expenseDate), ($$value) => set(expenseDate, $$value));
	bind_select_value(select_1, () => get(paymentMethod), ($$value) => set(paymentMethod, $$value));
	bind_value(input_2, () => get(description), ($$value) => set(description, $$value));
	bind_value(textarea, () => get(notes), ($$value) => set(notes, $$value));
	append($$anchor, div);
	pop();
}
delegate(["click"]);
//#endregion
export { _page as component };

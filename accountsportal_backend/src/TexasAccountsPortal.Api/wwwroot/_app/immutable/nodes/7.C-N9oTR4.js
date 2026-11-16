import { B as append, Bt as reset, D as head, G as text, H as from_html, J as event, K as delegate, N as each, Nt as pop, P as index, Pt as push, Q as get, R as set_text, b as bind_select_value, bt as state, d as bind_checked, dt as $document, g as remove_input_defaults, gt as proxy, ht as sibling, it as effect, m as bind_value, ot as template_effect, pt as child, q as delegated, r as onMount, ut as remove_textarea_child, vt as set, zt as next } from "../chunks/dXkmWTgM.js";
import { t as goto } from "../chunks/Cf7RqeDF.js";
import "../chunks/DhaYE-8x.js";
import { t as addToast } from "../chunks/CbPRQHfn.js";
import { t as Arrow_left } from "../chunks/Bn7x0kyr.js";
import { t as Button } from "../chunks/BhXsq3bC.js";
import "../chunks/D8FV6tAO.js";
import { i as getChartOfAccounts, t as createChartOfAccount } from "../chunks/BPQ180A02.js";
//#region src/routes/(app)/accounting/chart-of-accounts/new/+page.svelte
var root = from_html(`<option> </option>`);
var root_1 = from_html(`<div class="max-w-2xl mx-auto space-y-6"><div class="space-y-2"><button class="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground cursor-pointer transition-colors"><!> Back to Chart of Accounts</button> <h1 class="text-xl font-bold text-foreground">Create Chart of Account</h1> <p class="text-xs text-muted-foreground">Add a new posting or control account to the ledger hierarchy.</p></div> <form class="bg-card border border-border rounded-2xl p-6 shadow-xs space-y-4 text-xs"><div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><div class="space-y-1.5"><label for="code" class="font-semibold text-muted-foreground">Account Code</label> <input id="code" type="text" required="" placeholder="e.g. 1010" class="h-10 w-full bg-background border border-border rounded-xl px-3 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground"/></div> <div class="space-y-1.5"><label for="name" class="font-semibold text-muted-foreground">Account Name</label> <input id="name" type="text" required="" placeholder="e.g. Petty Cash Drawer" class="h-10 w-full bg-background border border-border rounded-xl px-3 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground"/></div></div> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><div class="space-y-1.5"><label for="accountType" class="font-semibold text-muted-foreground">Account Type</label> <select id="accountType" class="h-10 w-full bg-background border border-border rounded-xl px-2 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground"><option>Asset</option><option>Liability</option><option>Equity</option><option>Revenue</option><option>Expense</option></select></div> <div class="space-y-1.5"><label for="normalBalance" class="font-semibold text-muted-foreground">Normal Balance</label> <select id="normalBalance" class="h-10 w-full bg-background border border-border rounded-xl px-2 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground"><option>Debit</option><option>Credit</option></select></div></div> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><div class="space-y-1.5"><label for="parentId" class="font-semibold text-muted-foreground">Parent Account (Optional)</label> <select id="parentId" class="h-10 w-full bg-background border border-border rounded-xl px-2 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground disabled:opacity-50"><option>-- No Parent (Root Account) --</option><!></select></div> <div class="flex items-center gap-2 pt-6"><input id="isControlAccount" type="checkbox" class="h-4 w-4 rounded border-border text-primary focus:ring-primary/25 cursor-pointer"/> <label for="isControlAccount" class="font-semibold text-muted-foreground cursor-pointer select-none">Is Control Account (Allows sub-accounts, blocks postings)</label></div></div> <div class="space-y-1.5"><label for="description" class="font-semibold text-muted-foreground">Description / Notes (Optional)</label> <textarea id="description" rows="3" placeholder="Add contextual details for this ledger account..." class="w-full bg-background border border-border rounded-xl p-3 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground resize-y"></textarea></div> <div class="flex items-center justify-end gap-3 pt-4 border-t border-border"><!> <!></div></form></div>`);
function _page($$anchor, $$props) {
	push($$props, true);
	let code = state("");
	let name = state("");
	let accountType = state("asset");
	let normalBalance = state("debit");
	let parentIdVal = state("");
	let isControlAccount = state(false);
	let description = state("");
	let parentAccounts = state(proxy([]));
	let isSubmitting = state(false);
	let isLoadingParents = state(true);
	async function loadParents() {
		try {
			const res = await getChartOfAccounts();
			set(parentAccounts, res.filter((a) => a.isControlAccount), true);
		} catch (err) {
			addToast(err.message || "Failed to load parent accounts.", "error");
		} finally {
			set(isLoadingParents, false);
		}
	}
	async function handleSubmit(e) {
		e.preventDefault();
		if (!get(code).trim() || !get(name).trim()) {
			addToast("Please fill in Code and Name.", "error");
			return;
		}
		set(isSubmitting, true);
		try {
			const parentId = get(parentIdVal) === "" ? null : parseInt(get(parentIdVal));
			await createChartOfAccount({
				code: get(code).trim(),
				name: get(name).trim(),
				accountType: get(accountType),
				normalBalance: get(normalBalance),
				parentId,
				isControlAccount: get(isControlAccount),
				description: get(description).trim() || null
			});
			addToast("Account created successfully.", "success");
			goto("/accounting/chart-of-accounts");
		} catch (err) {
			addToast(err.message || "Failed to create chart of account.", "error");
		} finally {
			set(isSubmitting, false);
		}
	}
	onMount(() => {
		loadParents();
	});
	var div = root_1();
	head("xl23ri", ($$anchor) => {
		effect(() => {
			$document.title = "Create Account — Accounts Portal";
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
	var input = sibling(child(div_3), 2);
	remove_input_defaults(input);
	reset(div_3);
	var div_4 = sibling(div_3, 2);
	var input_1 = sibling(child(div_4), 2);
	remove_input_defaults(input_1);
	reset(div_4);
	reset(div_2);
	var div_5 = sibling(div_2, 2);
	var div_6 = child(div_5);
	var select = sibling(child(div_6), 2);
	var option = child(select);
	option.value = option.__value = "asset";
	var option_1 = sibling(option);
	option_1.value = option_1.__value = "liability";
	var option_2 = sibling(option_1);
	option_2.value = option_2.__value = "equity";
	var option_3 = sibling(option_2);
	option_3.value = option_3.__value = "revenue";
	var option_4 = sibling(option_3);
	option_4.value = option_4.__value = "expense";
	reset(select);
	reset(div_6);
	var div_7 = sibling(div_6, 2);
	var select_1 = sibling(child(div_7), 2);
	var option_5 = child(select_1);
	option_5.value = option_5.__value = "debit";
	var option_6 = sibling(option_5);
	option_6.value = option_6.__value = "credit";
	reset(select_1);
	reset(div_7);
	reset(div_5);
	var div_8 = sibling(div_5, 2);
	var div_9 = child(div_8);
	var select_2 = sibling(child(div_9), 2);
	var option_7 = child(select_2);
	option_7.value = option_7.__value = "";
	each(sibling(option_7), 17, () => get(parentAccounts), index, ($$anchor, p) => {
		var option_8 = root();
		var text = child(option_8);
		reset(option_8);
		var option_8_value = {};
		template_effect(($0) => {
			set_text(text, `${get(p).code ?? ""} — ${get(p).name ?? ""}`);
			if (option_8_value !== (option_8_value = $0)) option_8.value = (option_8.__value = $0) ?? "";
		}, [() => String(get(p).id)]);
		append($$anchor, option_8);
	});
	reset(select_2);
	reset(div_9);
	var div_10 = sibling(div_9, 2);
	var input_2 = child(div_10);
	remove_input_defaults(input_2);
	next(2);
	reset(div_10);
	reset(div_8);
	var div_11 = sibling(div_8, 2);
	var textarea = sibling(child(div_11), 2);
	remove_textarea_child(textarea);
	reset(div_11);
	var div_12 = sibling(div_11, 2);
	var node_2 = child(div_12);
	Button(node_2, {
		variant: "outline",
		class: "rounded-xl px-5 py-4.5 font-semibold cursor-pointer",
		get disabled() {
			return get(isSubmitting);
		},
		onclick: () => goto("/accounting/chart-of-accounts"),
		children: ($$anchor, $$slotProps) => {
			next();
			append($$anchor, text("Cancel"));
		},
		$$slots: { default: true }
	});
	Button(sibling(node_2, 2), {
		type: "submit",
		class: "rounded-xl px-5 py-4.5 font-semibold cursor-pointer",
		get disabled() {
			return get(isSubmitting);
		},
		children: ($$anchor, $$slotProps) => {
			next();
			var text_2 = text();
			template_effect(() => set_text(text_2, get(isSubmitting) ? "Creating..." : "Create Account"));
			append($$anchor, text_2);
		},
		$$slots: { default: true }
	});
	reset(div_12);
	reset(form);
	reset(div);
	template_effect(() => select_2.disabled = get(isLoadingParents));
	delegated("click", button, () => goto("/accounting/chart-of-accounts"));
	event("submit", form, handleSubmit);
	bind_value(input, () => get(code), ($$value) => set(code, $$value));
	bind_value(input_1, () => get(name), ($$value) => set(name, $$value));
	bind_select_value(select, () => get(accountType), ($$value) => set(accountType, $$value));
	bind_select_value(select_1, () => get(normalBalance), ($$value) => set(normalBalance, $$value));
	bind_select_value(select_2, () => get(parentIdVal), ($$value) => set(parentIdVal, $$value));
	bind_checked(input_2, () => get(isControlAccount), ($$value) => set(isControlAccount, $$value));
	bind_value(textarea, () => get(description), ($$value) => set(description, $$value));
	append($$anchor, div);
	pop();
}
delegate(["click"]);
//#endregion
export { _page as component };

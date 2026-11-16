import { B as append, Bt as reset, D as head, Et as store_get, G as text, H as from_html, I as if_block, J as event, K as delegate, Nt as pop, Pt as push, Q as get, R as set_text, Tt as setup_stores, V as comment, bt as state, dt as $document, g as remove_input_defaults, ht as sibling, it as effect, m as bind_value, mt as first_child, ot as template_effect, pt as child, q as delegated, r as onMount, ut as remove_textarea_child, vt as set, y as set_value, zt as next } from "../chunks/dXkmWTgM.js";
import { t as goto } from "../chunks/8Ddi3Fq2.js";
import "../chunks/DhaYE-8x.js";
import { t as addToast } from "../chunks/CbPRQHfn.js";
import { t as Arrow_left } from "../chunks/Bn7x0kyr.js";
import { t as page } from "../chunks/BL5SwgiJ.js";
import { t as Button } from "../chunks/BhXsq3bC.js";
import { t as ErrorState } from "../chunks/CRMNR9wu.js";
import "../chunks/BhENg3py.js";
import { o as updateChartOfAccount, r as getChartOfAccountById } from "../chunks/CLlPKojV2.js";
import { t as Spinner } from "../chunks/DkxHSMb-2.js";
//#region src/routes/(app)/accounting/chart-of-accounts/[id]/edit/+page.svelte
var root = from_html(`<div class="flex flex-col items-center justify-center min-h-[250px] bg-card border border-border rounded-2xl"><!> <span class="text-xs text-muted-foreground mt-2">Loading account details...</span></div>`);
var root_1 = from_html(`<form class="bg-card border border-border rounded-2xl p-6 shadow-xs space-y-4 text-xs"><div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><div class="space-y-1.5 opacity-60"><label for="code-display" class="font-semibold text-muted-foreground">Account Code</label> <input id="code-display" type="text" disabled="" class="h-10 w-full bg-muted border border-border rounded-xl px-3 text-xs text-foreground font-mono"/></div> <div class="space-y-1.5"><label for="name" class="font-semibold text-muted-foreground">Account Name</label> <input id="name" type="text" required="" placeholder="e.g. Petty Cash Drawer" class="h-10 w-full bg-background border border-border rounded-xl px-3 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground"/></div></div> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 opacity-60"><div class="space-y-1.5"><label for="type-display" class="font-semibold text-muted-foreground">Account Type</label> <input id="type-display" type="text" disabled="" class="h-10 w-full bg-muted border border-border rounded-xl px-3 text-xs text-foreground capitalize"/></div> <div class="space-y-1.5"><label for="bal-display" class="font-semibold text-muted-foreground">Normal Balance</label> <input id="bal-display" type="text" disabled="" class="h-10 w-full bg-muted border border-border rounded-xl px-3 text-xs text-foreground capitalize"/></div></div> <div class="space-y-1.5"><label for="description" class="font-semibold text-muted-foreground">Description / Notes (Optional)</label> <textarea id="description" rows="3" placeholder="Add contextual details for this ledger account..." class="w-full bg-background border border-border rounded-xl p-3 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground resize-y"></textarea></div> <div class="flex items-center justify-end gap-3 pt-4 border-t border-border"><!> <!></div></form>`);
var root_2 = from_html(`<div class="max-w-2xl mx-auto space-y-6"><div class="space-y-2"><button class="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground cursor-pointer transition-colors"><!> Back to Account Details</button> <h1 class="text-xl font-bold text-foreground">Edit Chart of Account</h1> <p class="text-xs text-muted-foreground">Update details for this account ledger record.</p></div> <!></div>`);
function _page($$anchor, $$props) {
	push($$props, true);
	const $page = () => store_get(page, "$page", $$stores);
	const [$$stores, $$cleanup] = setup_stores();
	const id = $page().params.id ? parseInt($page().params.id) : 0;
	let name = state("");
	let description = state("");
	let account = state(null);
	let loading = state(true);
	let errorMsg = state(null);
	let correlationId = state("");
	let isSubmitting = state(false);
	let abortController = null;
	async function loadAccountDetails() {
		if (abortController) abortController.abort();
		abortController = new AbortController();
		set(loading, true);
		set(errorMsg, null);
		try {
			const acc = await getChartOfAccountById(id, abortController.signal);
			set(account, acc, true);
			set(name, acc.name, true);
			set(description, acc.description || "", true);
		} catch (err) {
			if (err.name === "AbortError") return;
			set(errorMsg, err.message || "Failed to load account details.", true);
			set(correlationId, err.correlationId || "", true);
		} finally {
			set(loading, false);
		}
	}
	async function handleSubmit(e) {
		e.preventDefault();
		if (!get(name).trim()) {
			addToast("Please fill in Name.", "error");
			return;
		}
		set(isSubmitting, true);
		try {
			await updateChartOfAccount(id, {
				name: get(name).trim(),
				description: get(description).trim() || null
			});
			addToast("Account details updated successfully.", "success");
			goto(`/accounting/chart-of-accounts/${id}`);
		} catch (err) {
			addToast(err.message || "Failed to update account.", "error");
		} finally {
			set(isSubmitting, false);
		}
	}
	onMount(() => {
		loadAccountDetails();
		return () => {
			if (abortController) abortController.abort();
		};
	});
	var div = root_2();
	head("qfi6s8", ($$anchor) => {
		effect(() => {
			$document.title = "Edit Account — Accounts Portal";
		});
	});
	var div_1 = child(div);
	var button = child(div_1);
	Arrow_left(child(button), { class: "h-3.5 w-3.5" });
	next();
	reset(button);
	next(4);
	reset(div_1);
	var node_1 = sibling(div_1, 2);
	var consequent = ($$anchor) => {
		ErrorState($$anchor, {
			get message() {
				return get(errorMsg);
			},
			get correlationId() {
				return get(correlationId);
			},
			retryAction: loadAccountDetails
		});
	};
	var alternate_1 = ($$anchor) => {
		var fragment_1 = comment();
		var node_2 = first_child(fragment_1);
		var consequent_1 = ($$anchor) => {
			var div_2 = root();
			Spinner(child(div_2), { class: "h-8 w-8 text-primary" });
			next(2);
			reset(div_2);
			append($$anchor, div_2);
		};
		var alternate = ($$anchor) => {
			var form = root_1();
			var div_3 = child(form);
			var div_4 = child(div_3);
			var input = sibling(child(div_4), 2);
			remove_input_defaults(input);
			reset(div_4);
			var div_5 = sibling(div_4, 2);
			var input_1 = sibling(child(div_5), 2);
			remove_input_defaults(input_1);
			reset(div_5);
			reset(div_3);
			var div_6 = sibling(div_3, 2);
			var div_7 = child(div_6);
			var input_2 = sibling(child(div_7), 2);
			remove_input_defaults(input_2);
			reset(div_7);
			var div_8 = sibling(div_7, 2);
			var input_3 = sibling(child(div_8), 2);
			remove_input_defaults(input_3);
			reset(div_8);
			reset(div_6);
			var div_9 = sibling(div_6, 2);
			var textarea = sibling(child(div_9), 2);
			remove_textarea_child(textarea);
			reset(div_9);
			var div_10 = sibling(div_9, 2);
			var node_4 = child(div_10);
			Button(node_4, {
				variant: "outline",
				class: "rounded-xl px-5 py-4.5 font-semibold cursor-pointer",
				get disabled() {
					return get(isSubmitting);
				},
				onclick: () => goto(`/accounting/chart-of-accounts/${id}`),
				children: ($$anchor, $$slotProps) => {
					next();
					append($$anchor, text("Cancel"));
				},
				$$slots: { default: true }
			});
			Button(sibling(node_4, 2), {
				type: "submit",
				class: "rounded-xl px-5 py-4.5 font-semibold cursor-pointer",
				get disabled() {
					return get(isSubmitting);
				},
				children: ($$anchor, $$slotProps) => {
					next();
					var text_1 = text();
					template_effect(() => set_text(text_1, get(isSubmitting) ? "Updating..." : "Save Changes"));
					append($$anchor, text_1);
				},
				$$slots: { default: true }
			});
			reset(div_10);
			reset(form);
			template_effect(() => {
				set_value(input, get(account).code);
				set_value(input_2, get(account).accountType);
				set_value(input_3, get(account).normalBalance);
			});
			event("submit", form, handleSubmit);
			bind_value(input_1, () => get(name), ($$value) => set(name, $$value));
			bind_value(textarea, () => get(description), ($$value) => set(description, $$value));
			append($$anchor, form);
		};
		if_block(node_2, ($$render) => {
			if (get(loading) || !get(account)) $$render(consequent_1);
			else $$render(alternate, -1);
		});
		append($$anchor, fragment_1);
	};
	if_block(node_1, ($$render) => {
		if (get(errorMsg)) $$render(consequent);
		else $$render(alternate_1, -1);
	});
	reset(div);
	delegated("click", button, () => goto(`/accounting/chart-of-accounts/${id}`));
	append($$anchor, div);
	pop();
	$$cleanup();
}
delegate(["click"]);
//#endregion
export { _page as component };

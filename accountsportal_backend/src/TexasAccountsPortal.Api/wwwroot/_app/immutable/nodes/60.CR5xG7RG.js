import { B as append, Bt as reset, D as head, H as from_html, I as if_block, J as event, K as delegate, N as each, Nt as pop, P as index, Pt as push, Q as get, R as set_text, T as clsx, V as comment, b as bind_select_value, bt as state, dt as $document, g as remove_input_defaults, gt as proxy, ht as sibling, it as effect, m as bind_value, mt as first_child, ot as template_effect, pt as child, q as delegated, r as onMount, ut as remove_textarea_child, vt as set, w as set_class, zt as next } from "../chunks/dXkmWTgM.js";
import { t as goto } from "../chunks/Ci4CHp7j.js";
import "../chunks/DhaYE-8x.js";
import { t as addToast } from "../chunks/CbPRQHfn.js";
import { t as Arrow_left } from "../chunks/Bn7x0kyr.js";
import { t as Loader_circle } from "../chunks/BMOA0yrB2.js";
import { t as Button } from "../chunks/BhXsq3bC.js";
import "../chunks/CkDnTcFu.js";
import { r as getAccounts } from "../chunks/Bh2LdjOf2.js";
import { n as getBanks } from "../chunks/BHlp_y_g2.js";
import { n as createContraTransaction } from "../chunks/8ca6IDxf2.js";
import { t as createIdempotentOperation } from "../chunks/Bt9NpIc72.js";
//#region src/routes/(app)/transactions/new/+page.svelte
var root = from_html(`<div class="flex flex-col items-center justify-center p-12 gap-3 bg-card border border-border rounded-3xl"><!> <span class="text-xs text-muted-foreground font-semibold">Loading ledger accounts...</span></div>`);
var root_1 = from_html(`<option> </option>`);
var root_2 = from_html(`<p class="text-[10px] text-red-600 mt-1"> </p>`);
var root_3 = from_html(`<div><label for="contra-src-acc" class="block font-semibold text-muted-foreground mb-1.5">Cash Account</label> <select id="contra-src-acc" class="w-full p-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-foreground"><option>Select Account</option><!></select> <!></div>`);
var root_4 = from_html(`<div><label for="contra-src-bank" class="block font-semibold text-muted-foreground mb-1.5">Bank Account</label> <select id="contra-src-bank" class="w-full p-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-foreground"><option>Select Bank</option><!></select> <!></div>`);
var root_5 = from_html(`<div><label for="contra-dest-acc" class="block font-semibold text-muted-foreground mb-1.5">Cash Account</label> <select id="contra-dest-acc" class="w-full p-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-foreground"><option>Select Account</option><!></select> <!></div>`);
var root_6 = from_html(`<div><label for="contra-dest-bank" class="block font-semibold text-muted-foreground mb-1.5">Bank Account</label> <select id="contra-dest-bank" class="w-full p-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-foreground"><option>Select Bank</option><!></select> <!></div>`);
var root_7 = from_html(`<!> <span>Posting Transfer...</span>`, 1);
var root_8 = from_html(`<span>Post Contra Transfer</span>`);
var root_9 = from_html(`<form class="space-y-4 text-xs"><div class="border border-border p-4 rounded-2xl bg-muted/10 space-y-4"><h3 class="font-bold text-muted-foreground uppercase tracking-wider text-[10px] pb-1 border-b border-border/50">Source Funding account</h3> <div class="grid grid-cols-2 gap-3"><div><span class="block font-semibold text-muted-foreground mb-1.5">Source Type</span> <div class="flex gap-2 bg-muted/30 p-1 rounded-xl"><button type="button">Cash Account</button> <button type="button">Bank Account</button></div></div> <!></div></div> <div class="border border-border p-4 rounded-2xl bg-muted/10 space-y-4"><h3 class="font-bold text-muted-foreground uppercase tracking-wider text-[10px] pb-1 border-b border-border/50">Destination Target Account</h3> <div class="grid grid-cols-2 gap-3"><div><span class="block font-semibold text-muted-foreground mb-1.5">Destination Type</span> <div class="flex gap-2 bg-muted/30 p-1 rounded-xl"><button type="button">Cash Account</button> <button type="button">Bank Account</button></div></div> <!></div></div> <div><label for="contra-amount" class="block font-semibold text-muted-foreground mb-1.5">Amount (BHD)</label> <input id="contra-amount" type="number" step="0.001" placeholder="0.000" class="w-full p-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-foreground placeholder-muted-foreground/60 font-semibold"/> <!></div> <div><label for="contra-desc" class="block font-semibold text-muted-foreground mb-1.5">Description</label> <textarea id="contra-desc" rows="3" placeholder="Provide transfer / contra narrative details..." class="w-full p-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-foreground placeholder-muted-foreground/60 resize-none leading-relaxed"></textarea></div> <div class="flex justify-end pt-3"><!></div></form>`);
var root_10 = from_html(`<div class="bg-card border border-border p-6 rounded-3xl shadow-xs"><!></div>`);
var root_11 = from_html(`<div class="space-y-6 max-w-2xl"><button class="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground cursor-pointer transition-colors"><!> <span>Back to Transactions</span></button> <div class="flex flex-col gap-1"><h1 class="text-xl font-bold text-foreground">Post New Transaction</h1> <p class="text-xs text-muted-foreground">Post incoming/outgoing flows or transfer internal balances (contra). Guarded with
			idempotent safety checks.</p></div> <!></div>`);
function _page($$anchor, $$props) {
	push($$props, true);
	let accounts = state(proxy([]));
	let banks = state(proxy([]));
	let loadingLists = state(true);
	let submitting = state(false);
	let validationErrors = state(proxy({}));
	const idempotentOp = createIdempotentOperation();
	proxy({
		destinationType: "account",
		destinationAccountId: "",
		destinationBankId: "",
		amount: "",
		paymentMethod: "cash",
		referenceType: "",
		referenceId: "",
		description: ""
	});
	proxy({
		sourceType: "account",
		sourceAccountId: "",
		sourceBankId: "",
		amount: "",
		paymentMethod: "cash",
		referenceType: "",
		referenceId: "",
		description: "",
		supplierId: "",
		supplierName: ""
	});
	let contraForm = proxy({
		sourceType: "account",
		sourceAccountId: "",
		sourceBankId: "",
		destinationType: "account",
		destinationAccountId: "",
		destinationBankId: "",
		amount: "",
		description: ""
	});
	onMount(async () => {
		try {
			const [accountsRes, banksRes] = await Promise.all([getAccounts(), getBanks()]);
			set(accounts, accountsRes.filter((a) => a.isActive), true);
			set(banks, banksRes.filter((b) => b.isActive), true);
		} catch (err) {
			addToast("Failed to load accounts and bank references.", "error");
		} finally {
			set(loadingLists, false);
		}
	});
	function handleFormEdit() {
		idempotentOp.regenerate();
		set(validationErrors, {}, true);
	}
	function validateContra() {
		const errors = {};
		if (contraForm.sourceType === "account" && !contraForm.sourceAccountId) errors.sourceAccountId = "Source Cash Account is required.";
		if (contraForm.sourceType === "bank" && !contraForm.sourceBankId) errors.sourceBankId = "Source Bank Account is required.";
		if (contraForm.destinationType === "account" && !contraForm.destinationAccountId) errors.destinationAccountId = "Destination Cash Account is required.";
		if (contraForm.destinationType === "bank" && !contraForm.destinationBankId) errors.destinationBankId = "Destination Bank Account is required.";
		const numAmt = Number(contraForm.amount);
		if (isNaN(numAmt) || numAmt <= 0) errors.amount = "Amount must be greater than zero.";
		if (contraForm.sourceType === contraForm.destinationType && (contraForm.sourceType === "account" ? contraForm.sourceAccountId === contraForm.destinationAccountId : contraForm.sourceBankId === contraForm.destinationBankId)) errors.destinationAccountId = "Source and Destination cannot be the exact same account.";
		set(validationErrors, errors, true);
		return Object.keys(errors).length === 0;
	}
	async function submitContra() {
		if (!validateContra()) return;
		set(submitting, true);
		try {
			await createContraTransaction({
				sourceAccountId: contraForm.sourceType === "account" ? Number(contraForm.sourceAccountId) : null,
				sourceBankId: contraForm.sourceType === "bank" ? Number(contraForm.sourceBankId) : null,
				destinationAccountId: contraForm.destinationType === "account" ? Number(contraForm.destinationAccountId) : null,
				destinationBankId: contraForm.destinationType === "bank" ? Number(contraForm.destinationBankId) : null,
				amount: Number(contraForm.amount),
				description: contraForm.description || null
			}, idempotentOp.key);
			addToast("Contra transfer posted successfully.", "success");
			idempotentOp.retire();
			goto("/transactions");
		} catch (err) {
			addToast(err.message || "Failed to post contra transfer.", "error");
		} finally {
			set(submitting, false);
		}
	}
	var div = root_11();
	head("rj0wlo", ($$anchor) => {
		effect(() => {
			$document.title = "New Transaction Posting — Accounts Portal";
		});
	});
	var button = child(div);
	Arrow_left(child(button), { class: "h-3.5 w-3.5" });
	next(2);
	reset(button);
	var node_1 = sibling(button, 4);
	var consequent = ($$anchor) => {
		var div_1 = root();
		Loader_circle(child(div_1), { class: "h-6 w-6 animate-spin text-primary" });
		next(2);
		reset(div_1);
		append($$anchor, div_1);
	};
	var alternate_3 = ($$anchor) => {
		var div_2 = root_10();
		var node_3 = child(div_2);
		var consequent_9 = ($$anchor) => {
			var form = root_9();
			var div_3 = child(form);
			var div_4 = sibling(child(div_3), 2);
			var div_5 = child(div_4);
			var div_6 = sibling(child(div_5), 2);
			var button_1 = child(div_6);
			var button_2 = sibling(button_1, 2);
			reset(div_6);
			reset(div_5);
			var node_4 = sibling(div_5, 2);
			var consequent_2 = ($$anchor) => {
				var div_7 = root_3();
				var select = sibling(child(div_7), 2);
				var option = child(select);
				option.value = option.__value = "";
				each(sibling(option), 17, () => get(accounts), index, ($$anchor, a) => {
					var option_1 = root_1();
					var text = child(option_1);
					reset(option_1);
					var option_1_value = {};
					template_effect(($0) => {
						set_text(text, `${get(a).name ?? ""} (${$0 ?? ""})`);
						if (option_1_value !== (option_1_value = get(a).id)) option_1.value = (option_1.__value = get(a).id) ?? "";
					}, [() => get(a).ledgerType.toUpperCase()]);
					append($$anchor, option_1);
				});
				reset(select);
				var node_6 = sibling(select, 2);
				var consequent_1 = ($$anchor) => {
					var p = root_2();
					var text_1 = child(p, true);
					reset(p);
					template_effect(() => set_text(text_1, get(validationErrors).sourceAccountId));
					append($$anchor, p);
				};
				if_block(node_6, ($$render) => {
					if (get(validationErrors).sourceAccountId) $$render(consequent_1);
				});
				reset(div_7);
				delegated("change", select, handleFormEdit);
				bind_select_value(select, () => contraForm.sourceAccountId, ($$value) => contraForm.sourceAccountId = $$value);
				append($$anchor, div_7);
			};
			var alternate = ($$anchor) => {
				var div_8 = root_4();
				var select_1 = sibling(child(div_8), 2);
				var option_2 = child(select_1);
				option_2.value = option_2.__value = "";
				each(sibling(option_2), 17, () => get(banks), index, ($$anchor, b) => {
					var option_3 = root_1();
					var text_2 = child(option_3);
					reset(option_3);
					var option_3_value = {};
					template_effect(() => {
						set_text(text_2, `${get(b).bankName ?? ""} - ${get(b).accountNumber ?? ""}`);
						if (option_3_value !== (option_3_value = get(b).id)) option_3.value = (option_3.__value = get(b).id) ?? "";
					});
					append($$anchor, option_3);
				});
				reset(select_1);
				var node_8 = sibling(select_1, 2);
				var consequent_3 = ($$anchor) => {
					var p_1 = root_2();
					var text_3 = child(p_1, true);
					reset(p_1);
					template_effect(() => set_text(text_3, get(validationErrors).sourceBankId));
					append($$anchor, p_1);
				};
				if_block(node_8, ($$render) => {
					if (get(validationErrors).sourceBankId) $$render(consequent_3);
				});
				reset(div_8);
				delegated("change", select_1, handleFormEdit);
				bind_select_value(select_1, () => contraForm.sourceBankId, ($$value) => contraForm.sourceBankId = $$value);
				append($$anchor, div_8);
			};
			if_block(node_4, ($$render) => {
				if (contraForm.sourceType === "account") $$render(consequent_2);
				else $$render(alternate, -1);
			});
			reset(div_4);
			reset(div_3);
			var div_9 = sibling(div_3, 2);
			var div_10 = sibling(child(div_9), 2);
			var div_11 = child(div_10);
			var div_12 = sibling(child(div_11), 2);
			var button_3 = child(div_12);
			var button_4 = sibling(button_3, 2);
			reset(div_12);
			reset(div_11);
			var node_9 = sibling(div_11, 2);
			var consequent_5 = ($$anchor) => {
				var div_13 = root_5();
				var select_2 = sibling(child(div_13), 2);
				var option_4 = child(select_2);
				option_4.value = option_4.__value = "";
				each(sibling(option_4), 17, () => get(accounts), index, ($$anchor, a) => {
					var option_5 = root_1();
					var text_4 = child(option_5);
					reset(option_5);
					var option_5_value = {};
					template_effect(($0) => {
						set_text(text_4, `${get(a).name ?? ""} (${$0 ?? ""})`);
						if (option_5_value !== (option_5_value = get(a).id)) option_5.value = (option_5.__value = get(a).id) ?? "";
					}, [() => get(a).ledgerType.toUpperCase()]);
					append($$anchor, option_5);
				});
				reset(select_2);
				var node_11 = sibling(select_2, 2);
				var consequent_4 = ($$anchor) => {
					var p_2 = root_2();
					var text_5 = child(p_2, true);
					reset(p_2);
					template_effect(() => set_text(text_5, get(validationErrors).destinationAccountId));
					append($$anchor, p_2);
				};
				if_block(node_11, ($$render) => {
					if (get(validationErrors).destinationAccountId) $$render(consequent_4);
				});
				reset(div_13);
				delegated("change", select_2, handleFormEdit);
				bind_select_value(select_2, () => contraForm.destinationAccountId, ($$value) => contraForm.destinationAccountId = $$value);
				append($$anchor, div_13);
			};
			var alternate_1 = ($$anchor) => {
				var div_14 = root_6();
				var select_3 = sibling(child(div_14), 2);
				var option_6 = child(select_3);
				option_6.value = option_6.__value = "";
				each(sibling(option_6), 17, () => get(banks), index, ($$anchor, b) => {
					var option_7 = root_1();
					var text_6 = child(option_7);
					reset(option_7);
					var option_7_value = {};
					template_effect(() => {
						set_text(text_6, `${get(b).bankName ?? ""} - ${get(b).accountNumber ?? ""}`);
						if (option_7_value !== (option_7_value = get(b).id)) option_7.value = (option_7.__value = get(b).id) ?? "";
					});
					append($$anchor, option_7);
				});
				reset(select_3);
				var node_13 = sibling(select_3, 2);
				var consequent_6 = ($$anchor) => {
					var p_3 = root_2();
					var text_7 = child(p_3, true);
					reset(p_3);
					template_effect(() => set_text(text_7, get(validationErrors).destinationBankId));
					append($$anchor, p_3);
				};
				if_block(node_13, ($$render) => {
					if (get(validationErrors).destinationBankId) $$render(consequent_6);
				});
				reset(div_14);
				delegated("change", select_3, handleFormEdit);
				bind_select_value(select_3, () => contraForm.destinationBankId, ($$value) => contraForm.destinationBankId = $$value);
				append($$anchor, div_14);
			};
			if_block(node_9, ($$render) => {
				if (contraForm.destinationType === "account") $$render(consequent_5);
				else $$render(alternate_1, -1);
			});
			reset(div_10);
			reset(div_9);
			var div_15 = sibling(div_9, 2);
			var input = sibling(child(div_15), 2);
			remove_input_defaults(input);
			var node_14 = sibling(input, 2);
			var consequent_7 = ($$anchor) => {
				var p_4 = root_2();
				var text_8 = child(p_4, true);
				reset(p_4);
				template_effect(() => set_text(text_8, get(validationErrors).amount));
				append($$anchor, p_4);
			};
			if_block(node_14, ($$render) => {
				if (get(validationErrors).amount) $$render(consequent_7);
			});
			reset(div_15);
			var div_16 = sibling(div_15, 2);
			var textarea = sibling(child(div_16), 2);
			remove_textarea_child(textarea);
			reset(div_16);
			var div_17 = sibling(div_16, 2);
			Button(child(div_17), {
				type: "submit",
				get disabled() {
					return get(submitting);
				},
				class: "rounded-xl font-semibold text-xs py-5 px-6 cursor-pointer",
				children: ($$anchor, $$slotProps) => {
					var fragment = comment();
					var node_16 = first_child(fragment);
					var consequent_8 = ($$anchor) => {
						var fragment_1 = root_7();
						Loader_circle(first_child(fragment_1), { class: "h-3.5 w-3.5 animate-spin mr-1.5" });
						next(2);
						append($$anchor, fragment_1);
					};
					var alternate_2 = ($$anchor) => {
						append($$anchor, root_8());
					};
					if_block(node_16, ($$render) => {
						if (get(submitting)) $$render(consequent_8);
						else $$render(alternate_2, -1);
					});
					append($$anchor, fragment);
				},
				$$slots: { default: true }
			});
			reset(div_17);
			reset(form);
			template_effect(($0, $1, $2, $3) => {
				set_class(button_1, 1, $0);
				set_class(button_2, 1, $1);
				set_class(button_3, 1, $2);
				set_class(button_4, 1, $3);
			}, [
				() => clsx(["flex-1 py-2 text-center rounded-lg font-semibold transition-all cursor-pointer", contraForm.sourceType === "account" ? "bg-card text-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"].join(" ")),
				() => clsx(["flex-1 py-2 text-center rounded-lg font-semibold transition-all cursor-pointer", contraForm.sourceType === "bank" ? "bg-card text-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"].join(" ")),
				() => clsx(["flex-1 py-2 text-center rounded-lg font-semibold transition-all cursor-pointer", contraForm.destinationType === "account" ? "bg-card text-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"].join(" ")),
				() => clsx(["flex-1 py-2 text-center rounded-lg font-semibold transition-all cursor-pointer", contraForm.destinationType === "bank" ? "bg-card text-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"].join(" "))
			]);
			event("submit", form, (e) => {
				e.preventDefault();
				submitContra();
			});
			delegated("click", button_1, () => {
				contraForm.sourceType = "account";
				handleFormEdit();
			});
			delegated("click", button_2, () => {
				contraForm.sourceType = "bank";
				handleFormEdit();
			});
			delegated("click", button_3, () => {
				contraForm.destinationType = "account";
				handleFormEdit();
			});
			delegated("click", button_4, () => {
				contraForm.destinationType = "bank";
				handleFormEdit();
			});
			delegated("input", input, handleFormEdit);
			bind_value(input, () => contraForm.amount, ($$value) => contraForm.amount = $$value);
			delegated("input", textarea, handleFormEdit);
			bind_value(textarea, () => contraForm.description, ($$value) => contraForm.description = $$value);
			append($$anchor, form);
		};
		if_block(node_3, ($$render) => {
			$$render(consequent_9);
		});
		reset(div_2);
		append($$anchor, div_2);
	};
	if_block(node_1, ($$render) => {
		if (get(loadingLists)) $$render(consequent);
		else $$render(alternate_3, -1);
	});
	reset(div);
	delegated("click", button, () => goto("/transactions"));
	append($$anchor, div);
	pop();
}
delegate([
	"click",
	"change",
	"input"
]);
//#endregion
export { _page as component };

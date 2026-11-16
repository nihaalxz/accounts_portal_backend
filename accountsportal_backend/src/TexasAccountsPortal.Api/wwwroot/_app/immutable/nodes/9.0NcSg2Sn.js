import { At as pop, B as comment, E as head, F as if_block, G as delegate, It as next, K as delegated, L as set_text, Lt as reset, M as each, N as index, V as from_html, W as text, Z as get, _t as state, at as template_effect, bt as user_derived, dt as first_child, ft as sibling, h as remove_input_defaults, ht as set, jt as push, lt as $document, p as bind_value, pt as proxy, q as event, r as onMount, rt as effect, ut as child, y as bind_select_value, z as append } from "../chunks/D1I-S_GP.js";
import { t as goto } from "../chunks/mp6QnMAy.js";
import "../chunks/DhaYE-8x.js";
import { t as apiFetch } from "../chunks/CtbrgrK5.js";
import { t as addToast } from "../chunks/kfZuBygG.js";
import { t as Arrow_left } from "../chunks/G9X-yPHo.js";
import { t as Refresh_cw } from "../chunks/BJm1tO_d2.js";
import { t as Button } from "../chunks/DnwOswfh2.js";
import "../chunks/Cd763KZD2.js";
import { n as createJournalEntry } from "../chunks/C0KP8Ki6.js";
//#region src/routes/(app)/accounting/journals/new/+page.svelte
var root = from_html(`<div class="bg-card border border-border rounded-2xl p-16 flex flex-col items-center justify-center space-y-2"><!> <span class="text-xs text-muted-foreground">Loading accounts and customer heads...</span></div>`);
var root_1 = from_html(`<option> </option>`);
var root_2 = from_html(`<form class="space-y-6 text-xs"><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div class="bg-card border border-border rounded-2xl p-6 shadow-xs space-y-4"><div class="text-[10px] uppercase font-bold text-rose-600 dark:text-rose-400 tracking-wider">Debit Source (Sender)</div> <div class="space-y-2"><label for="debit-type" class="block font-semibold text-muted-foreground">Party Segment Type</label> <select id="debit-type" class="h-10 w-full bg-background border border-border rounded-xl px-3 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground"><option>Agent</option><option>Supplier</option><option>Customer</option></select></div> <div class="space-y-2"><label for="debit-party" class="block font-semibold text-muted-foreground">Select Party</label> <select id="debit-party" class="h-10 w-full bg-background border border-border rounded-xl px-3 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground"><option>-- Select Sender Party --</option><!></select></div></div> <div class="bg-card border border-border rounded-2xl p-6 shadow-xs space-y-4"><div class="text-[10px] uppercase font-bold text-emerald-600 dark:text-emerald-400 tracking-wider">Credit Destination (Receiver)</div> <div class="space-y-2"><label for="credit-type" class="block font-semibold text-muted-foreground">Party Segment Type</label> <select id="credit-type" class="h-10 w-full bg-background border border-border rounded-xl px-3 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground"><option>Agent</option><option>Supplier</option><option>Customer</option></select></div> <div class="space-y-2"><label for="credit-party" class="block font-semibold text-muted-foreground">Select Party</label> <select id="credit-party" class="h-10 w-full bg-background border border-border rounded-xl px-3 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground"><option>-- Select Receiver Party --</option><!></select></div></div></div> <div class="bg-card border border-border rounded-2xl p-6 shadow-xs space-y-4"><h3 class="font-bold text-sm text-foreground">Transaction Details</h3> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><div class="space-y-2"><label for="amount" class="block font-semibold text-muted-foreground">Amount (BHD) <span class="text-red-500">*</span></label> <div class="relative"><span class="absolute left-3 top-2.5 text-muted-foreground font-semibold">BHD</span> <input id="amount" type="number" step="0.001" min="0.002" required="" placeholder="0.000" class="h-10 w-full bg-background border border-border rounded-xl pl-12 pr-3 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground font-semibold"/></div></div> <div class="space-y-2"><label for="note" class="block font-semibold text-muted-foreground">Memo / Description</label> <input id="note" type="text" placeholder="e.g. Wallet rebalancing correction" class="h-10 w-full bg-background border border-border rounded-xl px-3 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground"/></div></div></div> <div class="flex items-center justify-end gap-3 pt-4 border-t border-border"><!> <!></div></form>`);
var root_3 = from_html(`<div class="space-y-6"><div class="space-y-2"><button class="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground cursor-pointer transition-colors"><!> Back to Journals List</button> <h1 class="text-xl font-bold text-foreground">New Party Transfer Journal</h1> <p class="text-xs text-muted-foreground">Record a direct value transfer request between Agents, Suppliers, and Customer Heads.</p></div> <!></div>`);
function _page($$anchor, $$props) {
	push($$props, true);
	let debitPartyType = state("agent");
	let debitPartyId = state(0);
	let creditPartyType = state("supplier");
	let creditPartyId = state(0);
	let amount = state(0);
	let note = state("");
	let agents = state(proxy([]));
	let suppliers = state(proxy([]));
	let heads = state(proxy([]));
	let loadingData = state(true);
	let isSubmitting = state(false);
	async function loadParties() {
		try {
			const [agentsRes, suppliersRes, headsRes] = await Promise.all([
				apiFetch("api/agent"),
				apiFetch("api/supplier"),
				apiFetch("api/sales-entries/heads?pageSize=1000")
			]);
			set(agents, (agentsRes || []).map((a) => ({
				id: a.id,
				fullName: `${a.firstName} ${a.lastName}`.trim(),
				wallet: a.wallet
			})), true);
			set(suppliers, suppliersRes || [], true);
			set(heads, (headsRes?.items || []).map((h) => ({
				id: h.id,
				fullName: `${h.firstName} ${h.lastName}`.trim(),
				wallet: h.wallet
			})), true);
		} catch (err) {
			addToast(err.message || "Failed to load parties data.", "error");
		} finally {
			set(loadingData, false);
		}
	}
	function isComboSupported(debit, credit) {
		if (debit === "agent" && credit === "supplier") return true;
		if (debit === "supplier" && credit === "agent") return true;
		if (debit === "agent" && credit === "head") return true;
		if (debit === "head" && credit === "agent") return true;
		if (debit === "supplier" && credit === "head") return true;
		if (debit === "head" && credit === "supplier") return true;
		return false;
	}
	async function handleSubmit(e) {
		e.preventDefault();
		if (!get(debitPartyId)) {
			addToast("Please select a Sender (Debit Party).", "error");
			return;
		}
		if (!get(creditPartyId)) {
			addToast("Please select a Receiver (Credit Party).", "error");
			return;
		}
		if (get(debitPartyId) === get(creditPartyId) && get(debitPartyType) === get(creditPartyType)) {
			addToast("Self-transfers are not allowed.", "error");
			return;
		}
		if (!isComboSupported(get(debitPartyType), get(creditPartyType))) {
			addToast(`Transfer combination '${get(debitPartyType)} to ${get(creditPartyType)}' is not supported.`, "error");
			return;
		}
		if (get(amount) <= .001) {
			addToast("Amount must be greater than 0.001 BHD.", "error");
			return;
		}
		set(isSubmitting, true);
		try {
			await createJournalEntry({
				debitPartyType: get(debitPartyType),
				debitPartyId: get(debitPartyId),
				creditPartyType: get(creditPartyType),
				creditPartyId: get(creditPartyId),
				amount: get(amount),
				note: get(note).trim() || null
			});
			addToast("Party transfer journal request created successfully.", "success");
			goto("/accounting/journals");
		} catch (err) {
			addToast(err.message || "Failed to create party transfer journal.", "error");
		} finally {
			set(isSubmitting, false);
		}
	}
	onMount(() => {
		loadParties();
	});
	var div = root_3();
	head("9yv8x", ($$anchor) => {
		effect(() => {
			$document.title = "New Party Transfer Journal — Accounts Portal";
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
		var div_2 = root();
		Refresh_cw(child(div_2), { class: "h-8 w-8 text-primary animate-spin" });
		next(2);
		reset(div_2);
		append($$anchor, div_2);
	};
	var alternate = ($$anchor) => {
		var form = root_2();
		var div_3 = child(form);
		var div_4 = child(div_3);
		var div_5 = sibling(child(div_4), 2);
		var select = sibling(child(div_5), 2);
		var option = child(select);
		option.value = option.__value = "agent";
		var option_1 = sibling(option);
		option_1.value = option_1.__value = "supplier";
		var option_2 = sibling(option_1);
		option_2.value = option_2.__value = "head";
		reset(select);
		reset(div_5);
		var div_6 = sibling(div_5, 2);
		var select_1 = sibling(child(div_6), 2);
		var option_3 = child(select_1);
		option_3.value = option_3.__value = 0;
		var node_3 = sibling(option_3);
		var consequent_1 = ($$anchor) => {
			var fragment = comment();
			each(first_child(fragment), 17, () => get(agents), index, ($$anchor, item) => {
				var option_4 = root_1();
				var text = child(option_4);
				reset(option_4);
				var option_4_value = {};
				template_effect(($0) => {
					set_text(text, `${get(item).fullName ?? ""} (ID: ${get(item).id ?? ""}) [Wallet: BHD ${$0 ?? ""}]`);
					if (option_4_value !== (option_4_value = get(item).id)) option_4.value = (option_4.__value = get(item).id) ?? "";
				}, [() => (get(item).wallet ?? 0).toFixed(3)]);
				append($$anchor, option_4);
			});
			append($$anchor, fragment);
		};
		var consequent_2 = ($$anchor) => {
			var fragment_1 = comment();
			each(first_child(fragment_1), 17, () => get(suppliers), index, ($$anchor, item) => {
				var option_5 = root_1();
				var text_1 = child(option_5);
				reset(option_5);
				var option_5_value = {};
				template_effect(($0) => {
					set_text(text_1, `${get(item).name ?? ""} (ID: ${get(item).id ?? ""}) [Wallet: BHD ${$0 ?? ""}]`);
					if (option_5_value !== (option_5_value = get(item).id)) option_5.value = (option_5.__value = get(item).id) ?? "";
				}, [() => (get(item).wallet ?? 0).toFixed(3)]);
				append($$anchor, option_5);
			});
			append($$anchor, fragment_1);
		};
		var consequent_3 = ($$anchor) => {
			var fragment_2 = comment();
			each(first_child(fragment_2), 17, () => get(heads), index, ($$anchor, item) => {
				var option_6 = root_1();
				var text_2 = child(option_6);
				reset(option_6);
				var option_6_value = {};
				template_effect(($0) => {
					set_text(text_2, `${get(item).fullName ?? ""} (ID: ${get(item).id ?? ""}) [Wallet: BHD ${$0 ?? ""}]`);
					if (option_6_value !== (option_6_value = get(item).id)) option_6.value = (option_6.__value = get(item).id) ?? "";
				}, [() => (get(item).wallet ?? 0).toFixed(3)]);
				append($$anchor, option_6);
			});
			append($$anchor, fragment_2);
		};
		if_block(node_3, ($$render) => {
			if (get(debitPartyType) === "agent") $$render(consequent_1);
			else if (get(debitPartyType) === "supplier") $$render(consequent_2, 1);
			else if (get(debitPartyType) === "head") $$render(consequent_3, 2);
		});
		reset(select_1);
		reset(div_6);
		reset(div_4);
		var div_7 = sibling(div_4, 2);
		var div_8 = sibling(child(div_7), 2);
		var select_2 = sibling(child(div_8), 2);
		var option_7 = child(select_2);
		option_7.value = option_7.__value = "agent";
		var option_8 = sibling(option_7);
		option_8.value = option_8.__value = "supplier";
		var option_9 = sibling(option_8);
		option_9.value = option_9.__value = "head";
		reset(select_2);
		reset(div_8);
		var div_9 = sibling(div_8, 2);
		var select_3 = sibling(child(div_9), 2);
		var option_10 = child(select_3);
		option_10.value = option_10.__value = 0;
		var node_7 = sibling(option_10);
		var consequent_4 = ($$anchor) => {
			var fragment_3 = comment();
			each(first_child(fragment_3), 17, () => get(agents), index, ($$anchor, item) => {
				var option_11 = root_1();
				var text_3 = child(option_11);
				reset(option_11);
				var option_11_value = {};
				template_effect(($0) => {
					set_text(text_3, `${get(item).fullName ?? ""} (ID: ${get(item).id ?? ""}) [Wallet: BHD ${$0 ?? ""}]`);
					if (option_11_value !== (option_11_value = get(item).id)) option_11.value = (option_11.__value = get(item).id) ?? "";
				}, [() => (get(item).wallet ?? 0).toFixed(3)]);
				append($$anchor, option_11);
			});
			append($$anchor, fragment_3);
		};
		var consequent_5 = ($$anchor) => {
			var fragment_4 = comment();
			each(first_child(fragment_4), 17, () => get(suppliers), index, ($$anchor, item) => {
				var option_12 = root_1();
				var text_4 = child(option_12);
				reset(option_12);
				var option_12_value = {};
				template_effect(($0) => {
					set_text(text_4, `${get(item).name ?? ""} (ID: ${get(item).id ?? ""}) [Wallet: BHD ${$0 ?? ""}]`);
					if (option_12_value !== (option_12_value = get(item).id)) option_12.value = (option_12.__value = get(item).id) ?? "";
				}, [() => (get(item).wallet ?? 0).toFixed(3)]);
				append($$anchor, option_12);
			});
			append($$anchor, fragment_4);
		};
		var consequent_6 = ($$anchor) => {
			var fragment_5 = comment();
			each(first_child(fragment_5), 17, () => get(heads), index, ($$anchor, item) => {
				var option_13 = root_1();
				var text_5 = child(option_13);
				reset(option_13);
				var option_13_value = {};
				template_effect(($0) => {
					set_text(text_5, `${get(item).fullName ?? ""} (ID: ${get(item).id ?? ""}) [Wallet: BHD ${$0 ?? ""}]`);
					if (option_13_value !== (option_13_value = get(item).id)) option_13.value = (option_13.__value = get(item).id) ?? "";
				}, [() => (get(item).wallet ?? 0).toFixed(3)]);
				append($$anchor, option_13);
			});
			append($$anchor, fragment_5);
		};
		if_block(node_7, ($$render) => {
			if (get(creditPartyType) === "agent") $$render(consequent_4);
			else if (get(creditPartyType) === "supplier") $$render(consequent_5, 1);
			else if (get(creditPartyType) === "head") $$render(consequent_6, 2);
		});
		reset(select_3);
		reset(div_9);
		reset(div_7);
		reset(div_3);
		var div_10 = sibling(div_3, 2);
		var div_11 = sibling(child(div_10), 2);
		var div_12 = child(div_11);
		var div_13 = sibling(child(div_12), 2);
		var input = sibling(child(div_13), 2);
		remove_input_defaults(input);
		reset(div_13);
		reset(div_12);
		var div_14 = sibling(div_12, 2);
		var input_1 = sibling(child(div_14), 2);
		remove_input_defaults(input_1);
		reset(div_14);
		reset(div_11);
		reset(div_10);
		var div_15 = sibling(div_10, 2);
		var node_11 = child(div_15);
		Button(node_11, {
			variant: "outline",
			class: "rounded-xl px-5 py-4.5 font-semibold cursor-pointer",
			get disabled() {
				return get(isSubmitting);
			},
			onclick: () => goto("/accounting/journals"),
			children: ($$anchor, $$slotProps) => {
				next();
				append($$anchor, text("Cancel"));
			},
			$$slots: { default: true }
		});
		var node_12 = sibling(node_11, 2);
		{
			let $0 = user_derived(() => get(isSubmitting) || !get(debitPartyId) || !get(creditPartyId));
			Button(node_12, {
				type: "submit",
				class: "rounded-xl px-5 py-4.5 font-semibold cursor-pointer",
				get disabled() {
					return get($0);
				},
				children: ($$anchor, $$slotProps) => {
					next();
					var text_7 = text();
					template_effect(() => set_text(text_7, get(isSubmitting) ? "Creating Request..." : "Create Transfer Journal"));
					append($$anchor, text_7);
				},
				$$slots: { default: true }
			});
		}
		reset(div_15);
		reset(form);
		event("submit", form, handleSubmit);
		delegated("click", select, () => set(debitPartyId, 0));
		bind_select_value(select, () => get(debitPartyType), ($$value) => set(debitPartyType, $$value));
		bind_select_value(select_1, () => get(debitPartyId), ($$value) => set(debitPartyId, $$value));
		delegated("click", select_2, () => set(creditPartyId, 0));
		bind_select_value(select_2, () => get(creditPartyType), ($$value) => set(creditPartyType, $$value));
		bind_select_value(select_3, () => get(creditPartyId), ($$value) => set(creditPartyId, $$value));
		bind_value(input, () => get(amount), ($$value) => set(amount, $$value));
		bind_value(input_1, () => get(note), ($$value) => set(note, $$value));
		append($$anchor, form);
	};
	if_block(node_1, ($$render) => {
		if (get(loadingData)) $$render(consequent);
		else $$render(alternate, -1);
	});
	reset(div);
	delegated("click", button, () => goto("/accounting/journals"));
	append($$anchor, div);
	pop();
}
delegate(["click"]);
//#endregion
export { _page as component };

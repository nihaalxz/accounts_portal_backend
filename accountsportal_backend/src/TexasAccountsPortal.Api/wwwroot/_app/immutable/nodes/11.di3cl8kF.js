import { B as append, Bt as reset, Ct as user_derived, D as head, G as text, H as from_html, I as if_block, J as event, K as delegate, N as each, Nt as pop, Pt as push, Q as get, R as set_text, S as select_option, V as comment, _ as set_attribute, bt as state, dt as $document, g as remove_input_defaults, gt as proxy, ht as sibling, it as effect, m as bind_value, mt as first_child, n as onDestroy, o as prop, ot as template_effect, pt as child, q as delegated, r as onMount, u as bind_this, vt as set, w as set_class, x as init_select, zt as next } from "../chunks/dXkmWTgM.js";
import { t as goto } from "../chunks/DdNZ0rVy.js";
import "../chunks/DhaYE-8x.js";
import { t as apiFetch } from "../chunks/4yh0yLD2.js";
import { t as addToast } from "../chunks/CbPRQHfn.js";
import { t as Arrow_left } from "../chunks/Bn7x0kyr.js";
import { t as Check } from "../chunks/blG6JRe7.js";
import { t as Chevron_down } from "../chunks/Dj1p1QvC.js";
import { t as Refresh_cw } from "../chunks/DpTJy0Wb2.js";
import { t as Search } from "../chunks/D7t9qluE.js";
import { t as X } from "../chunks/wXHc9RNY.js";
import { t as Button } from "../chunks/BhXsq3bC.js";
import "../chunks/DOt08k_u.js";
import { n as createJournalEntry } from "../chunks/aIJ4nvj0.js";
//#region src/lib/components/SearchablePartySelect.svelte
var root$1 = from_html(`<div class="flex items-center justify-between gap-2 flex-1 min-w-0"><span class="font-medium truncate"> <span class="text-muted-foreground font-mono"> </span></span> <span class="shrink-0 bg-muted/60 text-muted-foreground px-2 py-0.5 rounded-md font-mono text-[10px] font-semibold"> </span></div>`);
var root_1$1 = from_html(`<span class="text-muted-foreground/70"> </span>`);
var root_2$1 = from_html(`<span role="button" tabindex="0" class="p-0.5 hover:bg-muted hover:text-foreground rounded-md transition-colors cursor-pointer" title="Clear selection"><!></span>`);
var root_3 = from_html(`<button type="button" class="absolute right-2 top-1/2 -translate-y-1/2 p-0.5 text-muted-foreground hover:text-foreground cursor-pointer"><!></button>`);
var root_4 = from_html(`<div class="p-4 text-center text-muted-foreground text-xs font-medium">No matching parties found.</div>`);
var root_5 = from_html(`<button type="button" role="option"><div class="min-w-0 flex-1"><div class="font-medium truncate"> </div> <div class="text-[10px] text-muted-foreground font-mono"> </div></div> <div class="flex items-center gap-2 shrink-0"><span class="bg-muted/70 text-muted-foreground px-2 py-0.5 rounded-md font-mono text-[10px]"> </span> <!></div></button>`);
var root_6 = from_html(`<div class="absolute top-full left-0 right-0 mt-1.5 z-50 bg-popover border border-border rounded-xl shadow-xl overflow-hidden animate-in fade-in-50 zoom-in-95 duration-100 space-y-1"><div class="p-2 border-b border-border bg-muted/20"><div class="relative"><!> <input type="text" placeholder="Search party by name or ID..." class="h-8 w-full bg-background border border-border rounded-lg pl-8 pr-7 text-xs text-foreground placeholder-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary"/> <!></div></div> <div class="max-h-56 overflow-y-auto p-1 space-y-0.5" role="listbox"><!></div></div>`);
var root_7 = from_html(`<div class="relative w-full text-xs"><button type="button" class="h-10 w-full bg-background border border-border rounded-xl px-3 flex items-center justify-between gap-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 hover:border-primary/40 transition-colors cursor-pointer text-left" aria-haspopup="listbox"><!> <div class="flex items-center gap-1 shrink-0 ml-1 text-muted-foreground"><!> <!></div></button> <!></div>`);
function SearchablePartySelect($$anchor, $$props) {
	push($$props, true);
	let items = prop($$props, "items", 19, () => []), selectedId = prop($$props, "selectedId", 15, 0), placeholder = prop($$props, "placeholder", 3, "-- Select Party --"), id = prop($$props, "id", 3, "");
	let isOpen = state(false);
	let searchTerm = state("");
	let containerRef = state(null);
	let searchInputRef = state(null);
	let selectedItem = user_derived(() => items().find((i) => i.id === selectedId()));
	let filteredItems = user_derived(() => {
		const term = get(searchTerm).trim().toLowerCase();
		if (!term) return items();
		return items().filter((i) => i.label.toLowerCase().includes(term) || String(i.id).includes(term));
	});
	function toggleOpen() {
		set(isOpen, !get(isOpen));
		if (get(isOpen)) {
			set(searchTerm, "");
			setTimeout(() => {
				get(searchInputRef)?.focus();
			}, 50);
		}
	}
	function selectItem(item) {
		selectedId(item.id);
		set(isOpen, false);
		set(searchTerm, "");
	}
	function clearSelection(e) {
		e.stopPropagation();
		selectedId(0);
		set(searchTerm, "");
	}
	function handleKeydown(e) {
		if (e.key === "Escape") set(isOpen, false);
	}
	function handleClickOutside(e) {
		if (get(containerRef) && !get(containerRef).contains(e.target)) set(isOpen, false);
	}
	onMount(() => {
		document.addEventListener("click", handleClickOutside);
		document.addEventListener("keydown", handleKeydown);
	});
	onDestroy(() => {
		document.removeEventListener("click", handleClickOutside);
		document.removeEventListener("keydown", handleKeydown);
	});
	var div = root_7();
	var button = child(div);
	var node = child(button);
	var consequent = ($$anchor) => {
		var div_1 = root$1();
		var span = child(div_1);
		var text = child(span);
		var span_1 = sibling(text);
		var text_1 = child(span_1);
		reset(span_1);
		reset(span);
		var span_2 = sibling(span, 2);
		var text_2 = child(span_2);
		reset(span_2);
		reset(div_1);
		template_effect(($0) => {
			set_text(text, `${get(selectedItem).label ?? ""} `);
			set_text(text_1, `(ID: ${get(selectedItem).id ?? ""})`);
			set_text(text_2, `BHD ${$0 ?? ""}`);
		}, [() => (get(selectedItem).wallet ?? 0).toFixed(3)]);
		append($$anchor, div_1);
	};
	var alternate = ($$anchor) => {
		var span_3 = root_1$1();
		var text_3 = child(span_3, true);
		reset(span_3);
		template_effect(() => set_text(text_3, placeholder()));
		append($$anchor, span_3);
	};
	if_block(node, ($$render) => {
		if (get(selectedItem)) $$render(consequent);
		else $$render(alternate, -1);
	});
	var div_2 = sibling(node, 2);
	var node_1 = child(div_2);
	var consequent_1 = ($$anchor) => {
		var span_4 = root_2$1();
		X(child(span_4), { class: "h-3.5 w-3.5" });
		reset(span_4);
		delegated("click", span_4, clearSelection);
		delegated("keydown", span_4, (e) => e.key === "Enter" && clearSelection(e));
		append($$anchor, span_4);
	};
	if_block(node_1, ($$render) => {
		if (selectedId() > 0) $$render(consequent_1);
	});
	var node_3 = sibling(node_1, 2);
	{
		let $0 = user_derived(() => get(isOpen) ? "rotate-180 text-primary" : "");
		Chevron_down(node_3, { get class() {
			return `h-4 w-4 transition-transform duration-150 ${get($0) ?? ""}`;
		} });
	}
	reset(div_2);
	reset(button);
	var node_4 = sibling(button, 2);
	var consequent_5 = ($$anchor) => {
		var div_3 = root_6();
		var div_4 = child(div_3);
		var div_5 = child(div_4);
		var node_5 = child(div_5);
		Search(node_5, { class: "absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground/60" });
		var input = sibling(node_5, 2);
		remove_input_defaults(input);
		bind_this(input, ($$value) => set(searchInputRef, $$value), () => get(searchInputRef));
		var node_6 = sibling(input, 2);
		var consequent_2 = ($$anchor) => {
			var button_1 = root_3();
			X(child(button_1), { class: "h-3 w-3" });
			reset(button_1);
			delegated("click", button_1, () => set(searchTerm, ""));
			append($$anchor, button_1);
		};
		if_block(node_6, ($$render) => {
			if (get(searchTerm)) $$render(consequent_2);
		});
		reset(div_5);
		reset(div_4);
		var div_6 = sibling(div_4, 2);
		var node_8 = child(div_6);
		var consequent_3 = ($$anchor) => {
			append($$anchor, root_4());
		};
		var alternate_1 = ($$anchor) => {
			var fragment = comment();
			each(first_child(fragment), 17, () => get(filteredItems), (item) => item.id, ($$anchor, item) => {
				var button_2 = root_5();
				var div_8 = child(button_2);
				var div_9 = child(div_8);
				var text_4 = child(div_9, true);
				reset(div_9);
				var div_10 = sibling(div_9, 2);
				var text_5 = child(div_10);
				reset(div_10);
				reset(div_8);
				var div_11 = sibling(div_8, 2);
				var span_5 = child(div_11);
				var text_6 = child(span_5);
				reset(span_5);
				var node_10 = sibling(span_5, 2);
				var consequent_4 = ($$anchor) => {
					Check($$anchor, { class: "h-3.5 w-3.5 text-primary" });
				};
				if_block(node_10, ($$render) => {
					if (selectedId() === get(item).id) $$render(consequent_4);
				});
				reset(div_11);
				reset(button_2);
				template_effect(($0) => {
					set_class(button_2, 1, `w-full text-left px-3 py-2 rounded-lg flex items-center justify-between gap-2 transition-colors cursor-pointer ${selectedId() === get(item).id ? "bg-primary/10 text-primary font-semibold" : "hover:bg-muted/60 text-foreground"}`);
					set_attribute(button_2, "aria-selected", selectedId() === get(item).id);
					set_text(text_4, get(item).label);
					set_text(text_5, `ID: ${get(item).id ?? ""}`);
					set_text(text_6, `BHD ${$0 ?? ""}`);
				}, [() => (get(item).wallet ?? 0).toFixed(3)]);
				delegated("click", button_2, () => selectItem(get(item)));
				append($$anchor, button_2);
			});
			append($$anchor, fragment);
		};
		if_block(node_8, ($$render) => {
			if (get(filteredItems).length === 0) $$render(consequent_3);
			else $$render(alternate_1, -1);
		});
		reset(div_6);
		reset(div_3);
		bind_value(input, () => get(searchTerm), ($$value) => set(searchTerm, $$value));
		append($$anchor, div_3);
	};
	if_block(node_4, ($$render) => {
		if (get(isOpen)) $$render(consequent_5);
	});
	reset(div);
	bind_this(div, ($$value) => set(containerRef, $$value), () => get(containerRef));
	template_effect(() => {
		set_attribute(div, "id", id());
		set_attribute(button, "aria-expanded", get(isOpen));
	});
	delegated("click", button, toggleOpen);
	append($$anchor, div);
	pop();
}
delegate(["click", "keydown"]);
//#endregion
//#region src/routes/(app)/accounting/journals/new/+page.svelte
var root = from_html(`<div class="bg-card border border-border rounded-2xl p-16 flex flex-col items-center justify-center space-y-2"><!> <span class="text-xs text-muted-foreground">Loading accounts and customer heads...</span></div>`);
var root_1 = from_html(`<form class="space-y-6 text-xs"><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div class="bg-card border border-border rounded-2xl p-6 shadow-xs space-y-4"><div class="text-[10px] uppercase font-bold text-rose-600 dark:text-rose-400 tracking-wider">Debit Source (Sender)</div> <div class="space-y-2"><label for="debit-type" class="block font-semibold text-muted-foreground">Party Segment Type</label> <select id="debit-type" class="h-10 w-full bg-background border border-border rounded-xl px-3 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground cursor-pointer"><option>Agent</option><option>Supplier</option><option>Customer</option></select></div> <div class="space-y-2"><label for="debit-party" class="block font-semibold text-muted-foreground">Select Party</label> <!></div></div> <div class="bg-card border border-border rounded-2xl p-6 shadow-xs space-y-4"><div class="text-[10px] uppercase font-bold text-emerald-600 dark:text-emerald-400 tracking-wider">Credit Destination (Receiver)</div> <div class="space-y-2"><label for="credit-type" class="block font-semibold text-muted-foreground">Party Segment Type</label> <select id="credit-type" class="h-10 w-full bg-background border border-border rounded-xl px-3 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground cursor-pointer"><option>Agent</option><option>Supplier</option><option>Customer</option></select></div> <div class="space-y-2"><label for="credit-party" class="block font-semibold text-muted-foreground">Select Party</label> <!></div></div></div> <div class="bg-card border border-border rounded-2xl p-6 shadow-xs space-y-4"><h3 class="font-bold text-sm text-foreground">Transaction Details</h3> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><div class="space-y-2"><label for="amount" class="block font-semibold text-muted-foreground">Amount (BHD) <span class="text-red-500">*</span></label> <div class="relative"><span class="absolute left-3 top-2.5 text-muted-foreground font-semibold">BHD</span> <input id="amount" type="number" step="0.001" min="0.002" required="" placeholder="0.000" class="h-10 w-full bg-background border border-border rounded-xl pl-12 pr-3 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground font-semibold"/></div></div> <div class="space-y-2"><label for="note" class="block font-semibold text-muted-foreground">Memo / Description</label> <input id="note" type="text" placeholder="e.g. Wallet rebalancing correction" class="h-10 w-full bg-background border border-border rounded-xl px-3 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground"/></div></div></div> <div class="flex items-center justify-end gap-3 pt-4 border-t border-border"><!> <!></div></form>`);
var root_2 = from_html(`<div class="space-y-6"><div class="space-y-2"><button class="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground cursor-pointer transition-colors"><!> Back to Journals List</button> <h1 class="text-xl font-bold text-foreground">New Party Transfer Journal</h1> <p class="text-xs text-muted-foreground">Record a direct value transfer request between Agents, Suppliers, and Customer Heads.</p></div> <!></div>`);
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
	let debitPartyItems = user_derived(() => {
		if (get(debitPartyType) === "agent") return get(agents).map((a) => ({
			id: a.id,
			label: a.fullName,
			wallet: a.wallet
		}));
		else if (get(debitPartyType) === "supplier") return get(suppliers).map((s) => ({
			id: s.id,
			label: s.name,
			wallet: s.wallet
		}));
		else if (get(debitPartyType) === "head") return get(heads).map((h) => ({
			id: h.id,
			label: h.fullName,
			wallet: h.wallet
		}));
		return [];
	});
	let creditPartyItems = user_derived(() => {
		if (get(creditPartyType) === "agent") return get(agents).map((a) => ({
			id: a.id,
			label: a.fullName,
			wallet: a.wallet
		}));
		else if (get(creditPartyType) === "supplier") return get(suppliers).map((s) => ({
			id: s.id,
			label: s.name,
			wallet: s.wallet
		}));
		else if (get(creditPartyType) === "head") return get(heads).map((h) => ({
			id: h.id,
			label: h.fullName,
			wallet: h.wallet
		}));
		return [];
	});
	async function loadParties() {
		try {
			const [agentsRes, suppliersRes, headsRes] = await Promise.all([
				apiFetch("api/agent"),
				apiFetch("api/supplier"),
				apiFetch("api/sales-entries/heads?pageSize=1000&type=customer")
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
		return true;
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
	var div = root_2();
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
		var form = root_1();
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
		var select_value;
		init_select(select);
		reset(div_5);
		var div_6 = sibling(div_5, 2);
		SearchablePartySelect(sibling(child(div_6), 2), {
			id: "debit-party",
			get items() {
				return get(debitPartyItems);
			},
			placeholder: "-- Select Sender Party --",
			get selectedId() {
				return get(debitPartyId);
			},
			set selectedId($$value) {
				set(debitPartyId, $$value, true);
			}
		});
		reset(div_6);
		reset(div_4);
		var div_7 = sibling(div_4, 2);
		var div_8 = sibling(child(div_7), 2);
		var select_1 = sibling(child(div_8), 2);
		var option_3 = child(select_1);
		option_3.value = option_3.__value = "agent";
		var option_4 = sibling(option_3);
		option_4.value = option_4.__value = "supplier";
		var option_5 = sibling(option_4);
		option_5.value = option_5.__value = "head";
		reset(select_1);
		var select_1_value;
		init_select(select_1);
		reset(div_8);
		var div_9 = sibling(div_8, 2);
		SearchablePartySelect(sibling(child(div_9), 2), {
			id: "credit-party",
			get items() {
				return get(creditPartyItems);
			},
			placeholder: "-- Select Receiver Party --",
			get selectedId() {
				return get(creditPartyId);
			},
			set selectedId($$value) {
				set(creditPartyId, $$value, true);
			}
		});
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
		var node_5 = child(div_15);
		Button(node_5, {
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
		var node_6 = sibling(node_5, 2);
		{
			let $0 = user_derived(() => get(isSubmitting) || !get(debitPartyId) || !get(creditPartyId));
			Button(node_6, {
				type: "submit",
				class: "rounded-xl px-5 py-4.5 font-semibold cursor-pointer",
				get disabled() {
					return get($0);
				},
				children: ($$anchor, $$slotProps) => {
					next();
					var text_1 = text();
					template_effect(() => set_text(text_1, get(isSubmitting) ? "Creating Request..." : "Create Transfer Journal"));
					append($$anchor, text_1);
				},
				$$slots: { default: true }
			});
		}
		reset(div_15);
		reset(form);
		template_effect(() => {
			if (select_value !== (select_value = get(debitPartyType))) select.value = (select.__value = get(debitPartyType)) ?? "", select_option(select, get(debitPartyType));
			if (select_1_value !== (select_1_value = get(creditPartyType))) select_1.value = (select_1.__value = get(creditPartyType)) ?? "", select_option(select_1, get(creditPartyType));
		});
		event("submit", form, handleSubmit);
		delegated("change", select, (e) => {
			set(debitPartyType, e.target.value, true);
			set(debitPartyId, 0);
		});
		delegated("change", select_1, (e) => {
			set(creditPartyType, e.target.value, true);
			set(creditPartyId, 0);
		});
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
delegate(["click", "change"]);
//#endregion
export { _page as component };

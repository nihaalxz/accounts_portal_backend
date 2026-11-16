import { B as append, D as head, H as from_html, I as if_block, J as event, K as delegate, Lt as next, Mt as push, N as each, P as index, Q as get, R as set_text, Rt as reset, T as clsx, V as comment, b as bind_select_value, dt as child, ft as first_child, g as remove_input_defaults, gt as set, it as effect, jt as pop, lt as remove_textarea_child, m as bind_value, mt as proxy, ot as template_effect, pt as sibling, q as delegated, r as onMount, ut as $document, vt as state, w as set_class } from "../chunks/CjADOP7e.js";
import { t as goto } from "../chunks/C5QKnpxf.js";
import "../chunks/DhaYE-8x.js";
import { t as addToast } from "../chunks/_zpa1t7W.js";
import { t as Arrow_left } from "../chunks/R7vzHR0h.js";
import { t as Loader_circle } from "../chunks/CmYj3lHu2.js";
import { t as Button } from "../chunks/Ci9pdkd8.js";
import "../chunks/6kb1xv_Q.js";
import { r as getAccounts } from "../chunks/sX05_Q34.js";
import { n as getBanks } from "../chunks/gVZA27gU.js";
import { a as PAYMENT_METHOD_VALUES, i as PAYMENT_METHOD_LABELS, o as REFERENCE_TYPE_LABELS, s as REFERENCE_TYPE_VALUES } from "../chunks/CXeRAu2j.js";
import { i as createOutgoingTransaction, n as createContraTransaction, r as createIncomingTransaction } from "../chunks/D9Krsi_5.js";
import { t as createIdempotentOperation } from "../chunks/Bt9NpIc7.js";
//#region src/routes/(app)/transactions/new/+page.svelte
var root = from_html(`<div class="flex flex-col items-center justify-center p-12 gap-3 bg-card border border-border rounded-3xl"><!> <span class="text-xs text-muted-foreground font-semibold">Loading ledger accounts...</span></div>`);
var root_1 = from_html(`<option> </option>`);
var root_2 = from_html(`<p class="text-[10px] text-red-600 mt-1"> </p>`);
var root_3 = from_html(`<div><label for="dest-acc" class="block font-semibold text-muted-foreground mb-1.5">Cash Account</label> <select id="dest-acc" class="w-full p-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-foreground"><option>Select Account</option><!></select> <!></div>`);
var root_4 = from_html(`<div><label for="dest-bank" class="block font-semibold text-muted-foreground mb-1.5">Bank Account</label> <select id="dest-bank" class="w-full p-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-foreground"><option>Select Bank</option><!></select> <!></div>`);
var root_5 = from_html(`<!> <span>Posting Transaction...</span>`, 1);
var root_6 = from_html(`<span>Post Incoming Flow</span>`);
var root_7 = from_html(`<form class="space-y-4 text-xs"><div class="grid grid-cols-2 gap-3"><div><span class="block font-semibold text-muted-foreground mb-1.5">Destination Type</span> <div class="flex gap-2 bg-muted/30 p-1 rounded-xl"><button type="button">Cash Account</button> <button type="button">Bank Account</button></div></div> <!></div> <div><label for="incoming-amount" class="block font-semibold text-muted-foreground mb-1.5">Amount (BHD)</label> <input id="incoming-amount" type="number" step="0.001" placeholder="0.000" class="w-full p-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-foreground placeholder-muted-foreground/60 font-semibold"/> <!></div> <div><label for="incoming-payment" class="block font-semibold text-muted-foreground mb-1.5">Payment Method</label> <select id="incoming-payment" class="w-full p-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-foreground"></select> <!></div> <div class="grid grid-cols-2 gap-3"><div><label for="incoming-ref-type" class="block font-semibold text-muted-foreground mb-1.5">Reference Type</label> <select id="incoming-ref-type" class="w-full p-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-foreground"><option>No Reference Type</option><!></select></div> <div><label for="incoming-ref-id" class="block font-semibold text-muted-foreground mb-1.5">Reference ID</label> <input id="incoming-ref-id" type="text" placeholder="e.g. INV-1002" class="w-full p-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-foreground placeholder-muted-foreground/60 font-mono"/></div></div> <div><label for="incoming-desc" class="block font-semibold text-muted-foreground mb-1.5">Description</label> <textarea id="incoming-desc" rows="3" placeholder="Provide posting narrative details..." class="w-full p-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-foreground placeholder-muted-foreground/60 resize-none leading-relaxed"></textarea></div> <div class="flex justify-end pt-3"><!></div></form>`);
var root_8 = from_html(`<div><label for="src-acc" class="block font-semibold text-muted-foreground mb-1.5">Cash Account</label> <select id="src-acc" class="w-full p-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-foreground"><option>Select Account</option><!></select> <!></div>`);
var root_9 = from_html(`<div><label for="src-bank" class="block font-semibold text-muted-foreground mb-1.5">Bank Account</label> <select id="src-bank" class="w-full p-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-foreground"><option>Select Bank</option><!></select> <!></div>`);
var root_10 = from_html(`<span>Post Outgoing Flow</span>`);
var root_11 = from_html(`<form class="space-y-4 text-xs"><div class="grid grid-cols-2 gap-3"><div><span class="block font-semibold text-muted-foreground mb-1.5">Source Type</span> <div class="flex gap-2 bg-muted/30 p-1 rounded-xl"><button type="button">Cash Account</button> <button type="button">Bank Account</button></div></div> <!></div> <div class="grid grid-cols-2 gap-3 border-t border-b border-border/50 py-3 my-2"><div><label for="supplier-id" class="block font-semibold text-muted-foreground mb-1.5">Supplier ID (Optional)</label> <input id="supplier-id" type="number" placeholder="e.g. 15" class="w-full p-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-foreground placeholder-muted-foreground/60"/></div> <div><label for="supplier-name" class="block font-semibold text-muted-foreground mb-1.5">Supplier Name (Optional)</label> <input id="supplier-name" type="text" placeholder="e.g. Travel Express" class="w-full p-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-foreground placeholder-muted-foreground/60"/></div></div> <div><label for="outgoing-amount" class="block font-semibold text-muted-foreground mb-1.5">Amount (BHD)</label> <input id="outgoing-amount" type="number" step="0.001" placeholder="0.000" class="w-full p-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-foreground placeholder-muted-foreground/60 font-semibold"/> <!></div> <div><label for="outgoing-payment" class="block font-semibold text-muted-foreground mb-1.5">Payment Method</label> <select id="outgoing-payment" class="w-full p-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-foreground"></select> <!></div> <div class="grid grid-cols-2 gap-3"><div><label for="outgoing-ref-type" class="block font-semibold text-muted-foreground mb-1.5">Reference Type</label> <select id="outgoing-ref-type" class="w-full p-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-foreground"><option>No Reference Type</option><!></select></div> <div><label for="outgoing-ref-id" class="block font-semibold text-muted-foreground mb-1.5">Reference ID</label> <input id="outgoing-ref-id" type="text" placeholder="e.g. EXP-5501" class="w-full p-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-foreground placeholder-muted-foreground/60 font-mono"/></div></div> <div><label for="outgoing-desc" class="block font-semibold text-muted-foreground mb-1.5">Description</label> <textarea id="outgoing-desc" rows="3" placeholder="Provide outgoing description details..." class="w-full p-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-foreground placeholder-muted-foreground/60 resize-none leading-relaxed"></textarea></div> <div class="flex justify-end pt-3"><!></div></form>`);
var root_12 = from_html(`<div><label for="contra-src-acc" class="block font-semibold text-muted-foreground mb-1.5">Cash Account</label> <select id="contra-src-acc" class="w-full p-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-foreground"><option>Select Account</option><!></select> <!></div>`);
var root_13 = from_html(`<div><label for="contra-src-bank" class="block font-semibold text-muted-foreground mb-1.5">Bank Account</label> <select id="contra-src-bank" class="w-full p-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-foreground"><option>Select Bank</option><!></select> <!></div>`);
var root_14 = from_html(`<div><label for="contra-dest-acc" class="block font-semibold text-muted-foreground mb-1.5">Cash Account</label> <select id="contra-dest-acc" class="w-full p-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-foreground"><option>Select Account</option><!></select> <!></div>`);
var root_15 = from_html(`<div><label for="contra-dest-bank" class="block font-semibold text-muted-foreground mb-1.5">Bank Account</label> <select id="contra-dest-bank" class="w-full p-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-foreground"><option>Select Bank</option><!></select> <!></div>`);
var root_16 = from_html(`<!> <span>Posting Transfer...</span>`, 1);
var root_17 = from_html(`<span>Post Contra Transfer</span>`);
var root_18 = from_html(`<form class="space-y-4 text-xs"><div class="border border-border p-4 rounded-2xl bg-muted/10 space-y-4"><h3 class="font-bold text-muted-foreground uppercase tracking-wider text-[10px] pb-1 border-b border-border/50">Source Funding account</h3> <div class="grid grid-cols-2 gap-3"><div><span class="block font-semibold text-muted-foreground mb-1.5">Source Type</span> <div class="flex gap-2 bg-muted/30 p-1 rounded-xl"><button type="button">Cash Account</button> <button type="button">Bank Account</button></div></div> <!></div></div> <div class="border border-border p-4 rounded-2xl bg-muted/10 space-y-4"><h3 class="font-bold text-muted-foreground uppercase tracking-wider text-[10px] pb-1 border-b border-border/50">Destination Target Account</h3> <div class="grid grid-cols-2 gap-3"><div><span class="block font-semibold text-muted-foreground mb-1.5">Destination Type</span> <div class="flex gap-2 bg-muted/30 p-1 rounded-xl"><button type="button">Cash Account</button> <button type="button">Bank Account</button></div></div> <!></div></div> <div><label for="contra-amount" class="block font-semibold text-muted-foreground mb-1.5">Amount (BHD)</label> <input id="contra-amount" type="number" step="0.001" placeholder="0.000" class="w-full p-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-foreground placeholder-muted-foreground/60 font-semibold"/> <!></div> <div><label for="contra-desc" class="block font-semibold text-muted-foreground mb-1.5">Description</label> <textarea id="contra-desc" rows="3" placeholder="Provide transfer / contra narrative details..." class="w-full p-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-foreground placeholder-muted-foreground/60 resize-none leading-relaxed"></textarea></div> <div class="flex justify-end pt-3"><!></div></form>`);
var root_19 = from_html(`<div class="bg-card border border-border p-6 rounded-3xl shadow-xs"><!></div>`);
var root_20 = from_html(`<div class="space-y-6 max-w-2xl"><button class="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground cursor-pointer transition-colors"><!> <span>Back to Transactions</span></button> <div class="flex flex-col gap-1"><h1 class="text-xl font-bold text-foreground">Post New Transaction</h1> <p class="text-xs text-muted-foreground">Post incoming/outgoing flows or transfer internal balances (contra). Guarded with
			idempotent safety checks.</p></div> <div class="flex border-b border-border text-xs font-semibold"><button>Incoming Flow</button> <button>Outgoing Flow</button> <button>Contra (Transfer)</button></div> <!></div>`);
function _page($$anchor, $$props) {
	push($$props, true);
	let accounts = state(proxy([]));
	let banks = state(proxy([]));
	let loadingLists = state(true);
	let activeTab = state("incoming");
	let submitting = state(false);
	let validationErrors = state(proxy({}));
	const idempotentOp = createIdempotentOperation();
	let incomingForm = proxy({
		destinationType: "account",
		destinationAccountId: "",
		destinationBankId: "",
		amount: "",
		paymentMethod: "cash",
		referenceType: "",
		referenceId: "",
		description: ""
	});
	let outgoingForm = proxy({
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
	function validateIncoming() {
		const errors = {};
		if (incomingForm.destinationType === "account" && !incomingForm.destinationAccountId) errors.destinationAccountId = "Destination Cash Account is required.";
		if (incomingForm.destinationType === "bank" && !incomingForm.destinationBankId) errors.destinationBankId = "Destination Bank Account is required.";
		const numAmt = Number(incomingForm.amount);
		if (isNaN(numAmt) || numAmt <= 0) errors.amount = "Amount must be greater than zero.";
		if (!incomingForm.paymentMethod) errors.paymentMethod = "Payment Method is required.";
		set(validationErrors, errors, true);
		return Object.keys(errors).length === 0;
	}
	function validateOutgoing() {
		const errors = {};
		if (outgoingForm.sourceType === "account" && !outgoingForm.sourceAccountId) errors.sourceAccountId = "Source Cash Account is required.";
		if (outgoingForm.sourceType === "bank" && !outgoingForm.sourceBankId) errors.sourceBankId = "Source Bank Account is required.";
		const numAmt = Number(outgoingForm.amount);
		if (isNaN(numAmt) || numAmt <= 0) errors.amount = "Amount must be greater than zero.";
		if (!outgoingForm.paymentMethod) errors.paymentMethod = "Payment Method is required.";
		set(validationErrors, errors, true);
		return Object.keys(errors).length === 0;
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
	async function submitIncoming() {
		if (!validateIncoming()) return;
		set(submitting, true);
		try {
			await createIncomingTransaction({
				destinationAccountId: incomingForm.destinationType === "account" ? Number(incomingForm.destinationAccountId) : null,
				destinationBankId: incomingForm.destinationType === "bank" ? Number(incomingForm.destinationBankId) : null,
				amount: Number(incomingForm.amount),
				paymentMethod: incomingForm.paymentMethod,
				referenceType: incomingForm.referenceType || null,
				referenceId: incomingForm.referenceId || null,
				description: incomingForm.description || null
			}, idempotentOp.key);
			addToast("Incoming transaction posted successfully.", "success");
			idempotentOp.retire();
			goto("/transactions");
		} catch (err) {
			addToast(err.message || "Failed to post incoming transaction.", "error");
		} finally {
			set(submitting, false);
		}
	}
	async function submitOutgoing() {
		if (!validateOutgoing()) return;
		set(submitting, true);
		try {
			await createOutgoingTransaction({
				sourceAccountId: outgoingForm.sourceType === "account" ? Number(outgoingForm.sourceAccountId) : null,
				sourceBankId: outgoingForm.sourceType === "bank" ? Number(outgoingForm.sourceBankId) : null,
				amount: Number(outgoingForm.amount),
				paymentMethod: outgoingForm.paymentMethod,
				referenceType: outgoingForm.referenceType || null,
				referenceId: outgoingForm.referenceId || null,
				description: outgoingForm.description || null,
				supplierId: outgoingForm.supplierId ? Number(outgoingForm.supplierId) : null,
				supplierName: outgoingForm.supplierName || null
			}, idempotentOp.key);
			addToast("Outgoing transaction posted successfully.", "success");
			idempotentOp.retire();
			goto("/transactions");
		} catch (err) {
			addToast(err.message || "Failed to post outgoing transaction.", "error");
		} finally {
			set(submitting, false);
		}
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
	var div = root_20();
	head("rj0wlo", ($$anchor) => {
		effect(() => {
			$document.title = "New Transaction Posting — Accounts Portal";
		});
	});
	var button = child(div);
	Arrow_left(child(button), { class: "h-3.5 w-3.5" });
	next(2);
	reset(button);
	var div_1 = sibling(button, 4);
	var button_1 = child(div_1);
	var button_2 = sibling(button_1, 2);
	var button_3 = sibling(button_2, 2);
	reset(div_1);
	var node_1 = sibling(div_1, 2);
	var consequent = ($$anchor) => {
		var div_2 = root();
		Loader_circle(child(div_2), { class: "h-6 w-6 animate-spin text-primary" });
		next(2);
		reset(div_2);
		append($$anchor, div_2);
	};
	var alternate_7 = ($$anchor) => {
		var div_3 = root_19();
		var node_3 = child(div_3);
		var consequent_7 = ($$anchor) => {
			var form = root_7();
			var div_4 = child(form);
			var div_5 = child(div_4);
			var div_6 = sibling(child(div_5), 2);
			var button_4 = child(div_6);
			var button_5 = sibling(button_4, 2);
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
					template_effect(() => set_text(text_1, get(validationErrors).destinationAccountId));
					append($$anchor, p);
				};
				if_block(node_6, ($$render) => {
					if (get(validationErrors).destinationAccountId) $$render(consequent_1);
				});
				reset(div_7);
				delegated("change", select, handleFormEdit);
				bind_select_value(select, () => incomingForm.destinationAccountId, ($$value) => incomingForm.destinationAccountId = $$value);
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
					template_effect(() => set_text(text_3, get(validationErrors).destinationBankId));
					append($$anchor, p_1);
				};
				if_block(node_8, ($$render) => {
					if (get(validationErrors).destinationBankId) $$render(consequent_3);
				});
				reset(div_8);
				delegated("change", select_1, handleFormEdit);
				bind_select_value(select_1, () => incomingForm.destinationBankId, ($$value) => incomingForm.destinationBankId = $$value);
				append($$anchor, div_8);
			};
			if_block(node_4, ($$render) => {
				if (incomingForm.destinationType === "account") $$render(consequent_2);
				else $$render(alternate, -1);
			});
			reset(div_4);
			var div_9 = sibling(div_4, 2);
			var input = sibling(child(div_9), 2);
			remove_input_defaults(input);
			var node_9 = sibling(input, 2);
			var consequent_4 = ($$anchor) => {
				var p_2 = root_2();
				var text_4 = child(p_2, true);
				reset(p_2);
				template_effect(() => set_text(text_4, get(validationErrors).amount));
				append($$anchor, p_2);
			};
			if_block(node_9, ($$render) => {
				if (get(validationErrors).amount) $$render(consequent_4);
			});
			reset(div_9);
			var div_10 = sibling(div_9, 2);
			var select_2 = sibling(child(div_10), 2);
			each(select_2, 21, () => PAYMENT_METHOD_VALUES, index, ($$anchor, pm) => {
				var option_4 = root_1();
				var text_5 = child(option_4, true);
				reset(option_4);
				var option_4_value = {};
				template_effect(() => {
					set_text(text_5, PAYMENT_METHOD_LABELS[get(pm)]);
					if (option_4_value !== (option_4_value = get(pm))) option_4.value = (option_4.__value = get(pm)) ?? "";
				});
				append($$anchor, option_4);
			});
			reset(select_2);
			var node_10 = sibling(select_2, 2);
			var consequent_5 = ($$anchor) => {
				var p_3 = root_2();
				var text_6 = child(p_3, true);
				reset(p_3);
				template_effect(() => set_text(text_6, get(validationErrors).paymentMethod));
				append($$anchor, p_3);
			};
			if_block(node_10, ($$render) => {
				if (get(validationErrors).paymentMethod) $$render(consequent_5);
			});
			reset(div_10);
			var div_11 = sibling(div_10, 2);
			var div_12 = child(div_11);
			var select_3 = sibling(child(div_12), 2);
			var option_5 = child(select_3);
			option_5.value = option_5.__value = "";
			each(sibling(option_5), 17, () => REFERENCE_TYPE_VALUES, index, ($$anchor, rt) => {
				var option_6 = root_1();
				var text_7 = child(option_6, true);
				reset(option_6);
				var option_6_value = {};
				template_effect(() => {
					set_text(text_7, REFERENCE_TYPE_LABELS[get(rt)]);
					if (option_6_value !== (option_6_value = get(rt))) option_6.value = (option_6.__value = get(rt)) ?? "";
				});
				append($$anchor, option_6);
			});
			reset(select_3);
			reset(div_12);
			var div_13 = sibling(div_12, 2);
			var input_1 = sibling(child(div_13), 2);
			remove_input_defaults(input_1);
			reset(div_13);
			reset(div_11);
			var div_14 = sibling(div_11, 2);
			var textarea = sibling(child(div_14), 2);
			remove_textarea_child(textarea);
			reset(div_14);
			var div_15 = sibling(div_14, 2);
			Button(child(div_15), {
				type: "submit",
				get disabled() {
					return get(submitting);
				},
				class: "rounded-xl font-semibold text-xs py-5 px-6 cursor-pointer",
				children: ($$anchor, $$slotProps) => {
					var fragment = comment();
					var node_13 = first_child(fragment);
					var consequent_6 = ($$anchor) => {
						var fragment_1 = root_5();
						Loader_circle(first_child(fragment_1), { class: "h-3.5 w-3.5 animate-spin mr-1.5" });
						next(2);
						append($$anchor, fragment_1);
					};
					var alternate_1 = ($$anchor) => {
						append($$anchor, root_6());
					};
					if_block(node_13, ($$render) => {
						if (get(submitting)) $$render(consequent_6);
						else $$render(alternate_1, -1);
					});
					append($$anchor, fragment);
				},
				$$slots: { default: true }
			});
			reset(div_15);
			reset(form);
			template_effect(($0, $1) => {
				set_class(button_4, 1, $0);
				set_class(button_5, 1, $1);
			}, [() => clsx(["flex-1 py-2 text-center rounded-lg font-semibold transition-all cursor-pointer", incomingForm.destinationType === "account" ? "bg-card text-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"].join(" ")), () => clsx(["flex-1 py-2 text-center rounded-lg font-semibold transition-all cursor-pointer", incomingForm.destinationType === "bank" ? "bg-card text-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"].join(" "))]);
			event("submit", form, (e) => {
				e.preventDefault();
				submitIncoming();
			});
			delegated("click", button_4, () => {
				incomingForm.destinationType = "account";
				handleFormEdit();
			});
			delegated("click", button_5, () => {
				incomingForm.destinationType = "bank";
				handleFormEdit();
			});
			delegated("input", input, handleFormEdit);
			bind_value(input, () => incomingForm.amount, ($$value) => incomingForm.amount = $$value);
			delegated("change", select_2, handleFormEdit);
			bind_select_value(select_2, () => incomingForm.paymentMethod, ($$value) => incomingForm.paymentMethod = $$value);
			delegated("change", select_3, handleFormEdit);
			bind_select_value(select_3, () => incomingForm.referenceType, ($$value) => incomingForm.referenceType = $$value);
			delegated("input", input_1, handleFormEdit);
			bind_value(input_1, () => incomingForm.referenceId, ($$value) => incomingForm.referenceId = $$value);
			delegated("input", textarea, handleFormEdit);
			bind_value(textarea, () => incomingForm.description, ($$value) => incomingForm.description = $$value);
			append($$anchor, form);
		};
		var consequent_14 = ($$anchor) => {
			var form_1 = root_11();
			var div_16 = child(form_1);
			var div_17 = child(div_16);
			var div_18 = sibling(child(div_17), 2);
			var button_6 = child(div_18);
			var button_7 = sibling(button_6, 2);
			reset(div_18);
			reset(div_17);
			var node_15 = sibling(div_17, 2);
			var consequent_9 = ($$anchor) => {
				var div_19 = root_8();
				var select_4 = sibling(child(div_19), 2);
				var option_7 = child(select_4);
				option_7.value = option_7.__value = "";
				each(sibling(option_7), 17, () => get(accounts), index, ($$anchor, a) => {
					var option_8 = root_1();
					var text_8 = child(option_8);
					reset(option_8);
					var option_8_value = {};
					template_effect(($0) => {
						set_text(text_8, `${get(a).name ?? ""} (${$0 ?? ""})`);
						if (option_8_value !== (option_8_value = get(a).id)) option_8.value = (option_8.__value = get(a).id) ?? "";
					}, [() => get(a).ledgerType.toUpperCase()]);
					append($$anchor, option_8);
				});
				reset(select_4);
				var node_17 = sibling(select_4, 2);
				var consequent_8 = ($$anchor) => {
					var p_4 = root_2();
					var text_9 = child(p_4, true);
					reset(p_4);
					template_effect(() => set_text(text_9, get(validationErrors).sourceAccountId));
					append($$anchor, p_4);
				};
				if_block(node_17, ($$render) => {
					if (get(validationErrors).sourceAccountId) $$render(consequent_8);
				});
				reset(div_19);
				delegated("change", select_4, handleFormEdit);
				bind_select_value(select_4, () => outgoingForm.sourceAccountId, ($$value) => outgoingForm.sourceAccountId = $$value);
				append($$anchor, div_19);
			};
			var alternate_2 = ($$anchor) => {
				var div_20 = root_9();
				var select_5 = sibling(child(div_20), 2);
				var option_9 = child(select_5);
				option_9.value = option_9.__value = "";
				each(sibling(option_9), 17, () => get(banks), index, ($$anchor, b) => {
					var option_10 = root_1();
					var text_10 = child(option_10);
					reset(option_10);
					var option_10_value = {};
					template_effect(() => {
						set_text(text_10, `${get(b).bankName ?? ""} - ${get(b).accountNumber ?? ""}`);
						if (option_10_value !== (option_10_value = get(b).id)) option_10.value = (option_10.__value = get(b).id) ?? "";
					});
					append($$anchor, option_10);
				});
				reset(select_5);
				var node_19 = sibling(select_5, 2);
				var consequent_10 = ($$anchor) => {
					var p_5 = root_2();
					var text_11 = child(p_5, true);
					reset(p_5);
					template_effect(() => set_text(text_11, get(validationErrors).sourceBankId));
					append($$anchor, p_5);
				};
				if_block(node_19, ($$render) => {
					if (get(validationErrors).sourceBankId) $$render(consequent_10);
				});
				reset(div_20);
				delegated("change", select_5, handleFormEdit);
				bind_select_value(select_5, () => outgoingForm.sourceBankId, ($$value) => outgoingForm.sourceBankId = $$value);
				append($$anchor, div_20);
			};
			if_block(node_15, ($$render) => {
				if (outgoingForm.sourceType === "account") $$render(consequent_9);
				else $$render(alternate_2, -1);
			});
			reset(div_16);
			var div_21 = sibling(div_16, 2);
			var div_22 = child(div_21);
			var input_2 = sibling(child(div_22), 2);
			remove_input_defaults(input_2);
			reset(div_22);
			var div_23 = sibling(div_22, 2);
			var input_3 = sibling(child(div_23), 2);
			remove_input_defaults(input_3);
			reset(div_23);
			reset(div_21);
			var div_24 = sibling(div_21, 2);
			var input_4 = sibling(child(div_24), 2);
			remove_input_defaults(input_4);
			var node_20 = sibling(input_4, 2);
			var consequent_11 = ($$anchor) => {
				var p_6 = root_2();
				var text_12 = child(p_6, true);
				reset(p_6);
				template_effect(() => set_text(text_12, get(validationErrors).amount));
				append($$anchor, p_6);
			};
			if_block(node_20, ($$render) => {
				if (get(validationErrors).amount) $$render(consequent_11);
			});
			reset(div_24);
			var div_25 = sibling(div_24, 2);
			var select_6 = sibling(child(div_25), 2);
			each(select_6, 21, () => PAYMENT_METHOD_VALUES, index, ($$anchor, pm) => {
				var option_11 = root_1();
				var text_13 = child(option_11, true);
				reset(option_11);
				var option_11_value = {};
				template_effect(() => {
					set_text(text_13, PAYMENT_METHOD_LABELS[get(pm)]);
					if (option_11_value !== (option_11_value = get(pm))) option_11.value = (option_11.__value = get(pm)) ?? "";
				});
				append($$anchor, option_11);
			});
			reset(select_6);
			var node_21 = sibling(select_6, 2);
			var consequent_12 = ($$anchor) => {
				var p_7 = root_2();
				var text_14 = child(p_7, true);
				reset(p_7);
				template_effect(() => set_text(text_14, get(validationErrors).paymentMethod));
				append($$anchor, p_7);
			};
			if_block(node_21, ($$render) => {
				if (get(validationErrors).paymentMethod) $$render(consequent_12);
			});
			reset(div_25);
			var div_26 = sibling(div_25, 2);
			var div_27 = child(div_26);
			var select_7 = sibling(child(div_27), 2);
			var option_12 = child(select_7);
			option_12.value = option_12.__value = "";
			each(sibling(option_12), 17, () => REFERENCE_TYPE_VALUES, index, ($$anchor, rt) => {
				var option_13 = root_1();
				var text_15 = child(option_13, true);
				reset(option_13);
				var option_13_value = {};
				template_effect(() => {
					set_text(text_15, REFERENCE_TYPE_LABELS[get(rt)]);
					if (option_13_value !== (option_13_value = get(rt))) option_13.value = (option_13.__value = get(rt)) ?? "";
				});
				append($$anchor, option_13);
			});
			reset(select_7);
			reset(div_27);
			var div_28 = sibling(div_27, 2);
			var input_5 = sibling(child(div_28), 2);
			remove_input_defaults(input_5);
			reset(div_28);
			reset(div_26);
			var div_29 = sibling(div_26, 2);
			var textarea_1 = sibling(child(div_29), 2);
			remove_textarea_child(textarea_1);
			reset(div_29);
			var div_30 = sibling(div_29, 2);
			Button(child(div_30), {
				type: "submit",
				get disabled() {
					return get(submitting);
				},
				class: "rounded-xl font-semibold text-xs py-5 px-6 cursor-pointer",
				children: ($$anchor, $$slotProps) => {
					var fragment_2 = comment();
					var node_24 = first_child(fragment_2);
					var consequent_13 = ($$anchor) => {
						var fragment_3 = root_5();
						Loader_circle(first_child(fragment_3), { class: "h-3.5 w-3.5 animate-spin mr-1.5" });
						next(2);
						append($$anchor, fragment_3);
					};
					var alternate_3 = ($$anchor) => {
						append($$anchor, root_10());
					};
					if_block(node_24, ($$render) => {
						if (get(submitting)) $$render(consequent_13);
						else $$render(alternate_3, -1);
					});
					append($$anchor, fragment_2);
				},
				$$slots: { default: true }
			});
			reset(div_30);
			reset(form_1);
			template_effect(($0, $1) => {
				set_class(button_6, 1, $0);
				set_class(button_7, 1, $1);
			}, [() => clsx(["flex-1 py-2 text-center rounded-lg font-semibold transition-all cursor-pointer", outgoingForm.sourceType === "account" ? "bg-card text-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"].join(" ")), () => clsx(["flex-1 py-2 text-center rounded-lg font-semibold transition-all cursor-pointer", outgoingForm.sourceType === "bank" ? "bg-card text-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"].join(" "))]);
			event("submit", form_1, (e) => {
				e.preventDefault();
				submitOutgoing();
			});
			delegated("click", button_6, () => {
				outgoingForm.sourceType = "account";
				handleFormEdit();
			});
			delegated("click", button_7, () => {
				outgoingForm.sourceType = "bank";
				handleFormEdit();
			});
			delegated("input", input_2, handleFormEdit);
			bind_value(input_2, () => outgoingForm.supplierId, ($$value) => outgoingForm.supplierId = $$value);
			delegated("input", input_3, handleFormEdit);
			bind_value(input_3, () => outgoingForm.supplierName, ($$value) => outgoingForm.supplierName = $$value);
			delegated("input", input_4, handleFormEdit);
			bind_value(input_4, () => outgoingForm.amount, ($$value) => outgoingForm.amount = $$value);
			delegated("change", select_6, handleFormEdit);
			bind_select_value(select_6, () => outgoingForm.paymentMethod, ($$value) => outgoingForm.paymentMethod = $$value);
			delegated("change", select_7, handleFormEdit);
			bind_select_value(select_7, () => outgoingForm.referenceType, ($$value) => outgoingForm.referenceType = $$value);
			delegated("input", input_5, handleFormEdit);
			bind_value(input_5, () => outgoingForm.referenceId, ($$value) => outgoingForm.referenceId = $$value);
			delegated("input", textarea_1, handleFormEdit);
			bind_value(textarea_1, () => outgoingForm.description, ($$value) => outgoingForm.description = $$value);
			append($$anchor, form_1);
		};
		var consequent_23 = ($$anchor) => {
			var form_2 = root_18();
			var div_31 = child(form_2);
			var div_32 = sibling(child(div_31), 2);
			var div_33 = child(div_32);
			var div_34 = sibling(child(div_33), 2);
			var button_8 = child(div_34);
			var button_9 = sibling(button_8, 2);
			reset(div_34);
			reset(div_33);
			var node_26 = sibling(div_33, 2);
			var consequent_16 = ($$anchor) => {
				var div_35 = root_12();
				var select_8 = sibling(child(div_35), 2);
				var option_14 = child(select_8);
				option_14.value = option_14.__value = "";
				each(sibling(option_14), 17, () => get(accounts), index, ($$anchor, a) => {
					var option_15 = root_1();
					var text_16 = child(option_15);
					reset(option_15);
					var option_15_value = {};
					template_effect(($0) => {
						set_text(text_16, `${get(a).name ?? ""} (${$0 ?? ""})`);
						if (option_15_value !== (option_15_value = get(a).id)) option_15.value = (option_15.__value = get(a).id) ?? "";
					}, [() => get(a).ledgerType.toUpperCase()]);
					append($$anchor, option_15);
				});
				reset(select_8);
				var node_28 = sibling(select_8, 2);
				var consequent_15 = ($$anchor) => {
					var p_8 = root_2();
					var text_17 = child(p_8, true);
					reset(p_8);
					template_effect(() => set_text(text_17, get(validationErrors).sourceAccountId));
					append($$anchor, p_8);
				};
				if_block(node_28, ($$render) => {
					if (get(validationErrors).sourceAccountId) $$render(consequent_15);
				});
				reset(div_35);
				delegated("change", select_8, handleFormEdit);
				bind_select_value(select_8, () => contraForm.sourceAccountId, ($$value) => contraForm.sourceAccountId = $$value);
				append($$anchor, div_35);
			};
			var alternate_4 = ($$anchor) => {
				var div_36 = root_13();
				var select_9 = sibling(child(div_36), 2);
				var option_16 = child(select_9);
				option_16.value = option_16.__value = "";
				each(sibling(option_16), 17, () => get(banks), index, ($$anchor, b) => {
					var option_17 = root_1();
					var text_18 = child(option_17);
					reset(option_17);
					var option_17_value = {};
					template_effect(() => {
						set_text(text_18, `${get(b).bankName ?? ""} - ${get(b).accountNumber ?? ""}`);
						if (option_17_value !== (option_17_value = get(b).id)) option_17.value = (option_17.__value = get(b).id) ?? "";
					});
					append($$anchor, option_17);
				});
				reset(select_9);
				var node_30 = sibling(select_9, 2);
				var consequent_17 = ($$anchor) => {
					var p_9 = root_2();
					var text_19 = child(p_9, true);
					reset(p_9);
					template_effect(() => set_text(text_19, get(validationErrors).sourceBankId));
					append($$anchor, p_9);
				};
				if_block(node_30, ($$render) => {
					if (get(validationErrors).sourceBankId) $$render(consequent_17);
				});
				reset(div_36);
				delegated("change", select_9, handleFormEdit);
				bind_select_value(select_9, () => contraForm.sourceBankId, ($$value) => contraForm.sourceBankId = $$value);
				append($$anchor, div_36);
			};
			if_block(node_26, ($$render) => {
				if (contraForm.sourceType === "account") $$render(consequent_16);
				else $$render(alternate_4, -1);
			});
			reset(div_32);
			reset(div_31);
			var div_37 = sibling(div_31, 2);
			var div_38 = sibling(child(div_37), 2);
			var div_39 = child(div_38);
			var div_40 = sibling(child(div_39), 2);
			var button_10 = child(div_40);
			var button_11 = sibling(button_10, 2);
			reset(div_40);
			reset(div_39);
			var node_31 = sibling(div_39, 2);
			var consequent_19 = ($$anchor) => {
				var div_41 = root_14();
				var select_10 = sibling(child(div_41), 2);
				var option_18 = child(select_10);
				option_18.value = option_18.__value = "";
				each(sibling(option_18), 17, () => get(accounts), index, ($$anchor, a) => {
					var option_19 = root_1();
					var text_20 = child(option_19);
					reset(option_19);
					var option_19_value = {};
					template_effect(($0) => {
						set_text(text_20, `${get(a).name ?? ""} (${$0 ?? ""})`);
						if (option_19_value !== (option_19_value = get(a).id)) option_19.value = (option_19.__value = get(a).id) ?? "";
					}, [() => get(a).ledgerType.toUpperCase()]);
					append($$anchor, option_19);
				});
				reset(select_10);
				var node_33 = sibling(select_10, 2);
				var consequent_18 = ($$anchor) => {
					var p_10 = root_2();
					var text_21 = child(p_10, true);
					reset(p_10);
					template_effect(() => set_text(text_21, get(validationErrors).destinationAccountId));
					append($$anchor, p_10);
				};
				if_block(node_33, ($$render) => {
					if (get(validationErrors).destinationAccountId) $$render(consequent_18);
				});
				reset(div_41);
				delegated("change", select_10, handleFormEdit);
				bind_select_value(select_10, () => contraForm.destinationAccountId, ($$value) => contraForm.destinationAccountId = $$value);
				append($$anchor, div_41);
			};
			var alternate_5 = ($$anchor) => {
				var div_42 = root_15();
				var select_11 = sibling(child(div_42), 2);
				var option_20 = child(select_11);
				option_20.value = option_20.__value = "";
				each(sibling(option_20), 17, () => get(banks), index, ($$anchor, b) => {
					var option_21 = root_1();
					var text_22 = child(option_21);
					reset(option_21);
					var option_21_value = {};
					template_effect(() => {
						set_text(text_22, `${get(b).bankName ?? ""} - ${get(b).accountNumber ?? ""}`);
						if (option_21_value !== (option_21_value = get(b).id)) option_21.value = (option_21.__value = get(b).id) ?? "";
					});
					append($$anchor, option_21);
				});
				reset(select_11);
				var node_35 = sibling(select_11, 2);
				var consequent_20 = ($$anchor) => {
					var p_11 = root_2();
					var text_23 = child(p_11, true);
					reset(p_11);
					template_effect(() => set_text(text_23, get(validationErrors).destinationBankId));
					append($$anchor, p_11);
				};
				if_block(node_35, ($$render) => {
					if (get(validationErrors).destinationBankId) $$render(consequent_20);
				});
				reset(div_42);
				delegated("change", select_11, handleFormEdit);
				bind_select_value(select_11, () => contraForm.destinationBankId, ($$value) => contraForm.destinationBankId = $$value);
				append($$anchor, div_42);
			};
			if_block(node_31, ($$render) => {
				if (contraForm.destinationType === "account") $$render(consequent_19);
				else $$render(alternate_5, -1);
			});
			reset(div_38);
			reset(div_37);
			var div_43 = sibling(div_37, 2);
			var input_6 = sibling(child(div_43), 2);
			remove_input_defaults(input_6);
			var node_36 = sibling(input_6, 2);
			var consequent_21 = ($$anchor) => {
				var p_12 = root_2();
				var text_24 = child(p_12, true);
				reset(p_12);
				template_effect(() => set_text(text_24, get(validationErrors).amount));
				append($$anchor, p_12);
			};
			if_block(node_36, ($$render) => {
				if (get(validationErrors).amount) $$render(consequent_21);
			});
			reset(div_43);
			var div_44 = sibling(div_43, 2);
			var textarea_2 = sibling(child(div_44), 2);
			remove_textarea_child(textarea_2);
			reset(div_44);
			var div_45 = sibling(div_44, 2);
			Button(child(div_45), {
				type: "submit",
				get disabled() {
					return get(submitting);
				},
				class: "rounded-xl font-semibold text-xs py-5 px-6 cursor-pointer",
				children: ($$anchor, $$slotProps) => {
					var fragment_4 = comment();
					var node_38 = first_child(fragment_4);
					var consequent_22 = ($$anchor) => {
						var fragment_5 = root_16();
						Loader_circle(first_child(fragment_5), { class: "h-3.5 w-3.5 animate-spin mr-1.5" });
						next(2);
						append($$anchor, fragment_5);
					};
					var alternate_6 = ($$anchor) => {
						append($$anchor, root_17());
					};
					if_block(node_38, ($$render) => {
						if (get(submitting)) $$render(consequent_22);
						else $$render(alternate_6, -1);
					});
					append($$anchor, fragment_4);
				},
				$$slots: { default: true }
			});
			reset(div_45);
			reset(form_2);
			template_effect(($0, $1, $2, $3) => {
				set_class(button_8, 1, $0);
				set_class(button_9, 1, $1);
				set_class(button_10, 1, $2);
				set_class(button_11, 1, $3);
			}, [
				() => clsx(["flex-1 py-2 text-center rounded-lg font-semibold transition-all cursor-pointer", contraForm.sourceType === "account" ? "bg-card text-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"].join(" ")),
				() => clsx(["flex-1 py-2 text-center rounded-lg font-semibold transition-all cursor-pointer", contraForm.sourceType === "bank" ? "bg-card text-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"].join(" ")),
				() => clsx(["flex-1 py-2 text-center rounded-lg font-semibold transition-all cursor-pointer", contraForm.destinationType === "account" ? "bg-card text-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"].join(" ")),
				() => clsx(["flex-1 py-2 text-center rounded-lg font-semibold transition-all cursor-pointer", contraForm.destinationType === "bank" ? "bg-card text-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"].join(" "))
			]);
			event("submit", form_2, (e) => {
				e.preventDefault();
				submitContra();
			});
			delegated("click", button_8, () => {
				contraForm.sourceType = "account";
				handleFormEdit();
			});
			delegated("click", button_9, () => {
				contraForm.sourceType = "bank";
				handleFormEdit();
			});
			delegated("click", button_10, () => {
				contraForm.destinationType = "account";
				handleFormEdit();
			});
			delegated("click", button_11, () => {
				contraForm.destinationType = "bank";
				handleFormEdit();
			});
			delegated("input", input_6, handleFormEdit);
			bind_value(input_6, () => contraForm.amount, ($$value) => contraForm.amount = $$value);
			delegated("input", textarea_2, handleFormEdit);
			bind_value(textarea_2, () => contraForm.description, ($$value) => contraForm.description = $$value);
			append($$anchor, form_2);
		};
		if_block(node_3, ($$render) => {
			if (get(activeTab) === "incoming") $$render(consequent_7);
			else if (get(activeTab) === "outgoing") $$render(consequent_14, 1);
			else if (get(activeTab) === "contra") $$render(consequent_23, 2);
		});
		reset(div_3);
		append($$anchor, div_3);
	};
	if_block(node_1, ($$render) => {
		if (get(loadingLists)) $$render(consequent);
		else $$render(alternate_7, -1);
	});
	reset(div);
	template_effect(($0, $1, $2) => {
		set_class(button_1, 1, $0);
		button_1.disabled = get(submitting);
		set_class(button_2, 1, $1);
		button_2.disabled = get(submitting);
		set_class(button_3, 1, $2);
		button_3.disabled = get(submitting);
	}, [
		() => clsx(["px-5 py-3 border-b-2 transition-all cursor-pointer", get(activeTab) === "incoming" ? "border-primary text-primary bg-primary/5" : "border-transparent text-muted-foreground hover:text-foreground"].join(" ")),
		() => clsx(["px-5 py-3 border-b-2 transition-all cursor-pointer", get(activeTab) === "outgoing" ? "border-primary text-primary bg-primary/5" : "border-transparent text-muted-foreground hover:text-foreground"].join(" ")),
		() => clsx(["px-5 py-3 border-b-2 transition-all cursor-pointer", get(activeTab) === "contra" ? "border-primary text-primary bg-primary/5" : "border-transparent text-muted-foreground hover:text-foreground"].join(" "))
	]);
	delegated("click", button, () => goto("/transactions"));
	delegated("click", button_1, () => {
		set(activeTab, "incoming");
		handleFormEdit();
	});
	delegated("click", button_2, () => {
		set(activeTab, "outgoing");
		handleFormEdit();
	});
	delegated("click", button_3, () => {
		set(activeTab, "contra");
		handleFormEdit();
	});
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

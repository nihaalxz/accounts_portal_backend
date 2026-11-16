import { B as append, Bt as reset, Ct as user_derived, D as head, Et as store_get, G as text, H as from_html, I as if_block, J as event, K as delegate, N as each, Nt as pop, P as index, Pt as push, Q as get, R as set_text, Tt as setup_stores, V as comment, b as bind_select_value, bt as state, dt as $document, g as remove_input_defaults, gt as proxy, ht as sibling, it as effect, m as bind_value, mt as first_child, ot as template_effect, pt as child, q as delegated, r as onMount, ut as remove_textarea_child, vt as set, w as set_class, zt as next } from "../chunks/dXkmWTgM.js";
import { t as goto } from "../chunks/CYr_8lmd.js";
import "../chunks/DhaYE-8x.js";
import { t as apiFetch } from "../chunks/52Q8iY_S.js";
import { r as toast } from "../chunks/CbPRQHfn.js";
import { t as Arrow_left } from "../chunks/Bn7x0kyr.js";
import { t as Building_2 } from "../chunks/PAfPMPpZ.js";
import { t as Plus } from "../chunks/BObidJ7B.js";
import { t as Receipt } from "../chunks/4mbxDyuf.js";
import { t as Refresh_cw } from "../chunks/DpTJy0Wb.js";
import { t as Save } from "../chunks/YnLTLont.js";
import { t as Wallet } from "../chunks/BahXSy4P.js";
import { t as page } from "../chunks/BRRuVw-N.js";
import { t as Button } from "../chunks/BhXsq3bC.js";
import "../chunks/BANuLgpQ2.js";
import { r as getAccounts } from "../chunks/xKJyqFyV2.js";
import { n as getBanks } from "../chunks/DasZz51t2.js";
//#region src/routes/(app)/sales/receipts/new/+page.svelte
var root = from_html(`<!> Client Wallet Receipt`, 1);
var root_1 = from_html(`<div class="bg-card border border-border rounded-2xl p-16 flex items-center justify-center animate-pulse"><!></div>`);
var root_2 = from_html(`<option> </option>`);
var root_3 = from_html(`<div class="space-y-1.5 sm:col-span-2"><label for="cashAccSelect" class="text-xs font-semibold text-foreground">Select Cash Account *</label> <select id="cashAccSelect" class="w-full text-xs bg-background border border-border rounded-xl px-3 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 font-semibold cursor-pointer" required=""></select></div>`);
var root_4 = from_html(`<div class="space-y-1.5 sm:col-span-2"><label for="bankAccSelect" class="text-xs font-semibold text-foreground">Select Bank Account *</label> <select id="bankAccSelect" class="w-full text-xs bg-background border border-border rounded-xl px-3 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 font-semibold cursor-pointer" required=""></select></div>`);
var root_5 = from_html(`<p class="text-[11px] text-muted-foreground font-semibold"> </p>`);
var root_6 = from_html(`<!> <span>Processing Receipt...</span>`, 1);
var root_7 = from_html(`<!> <span>Save & Increment Balance</span>`, 1);
var root_8 = from_html(`<form class="space-y-6"><div class="bg-card border border-border rounded-2xl p-5 space-y-4 shadow-xs"><div class="flex items-center justify-between border-b border-border/40 pb-3"><div><h2 class="text-sm font-bold text-foreground">Target Destination Account</h2> <p class="text-xs text-muted-foreground">Choose which Cash Account or Bank Account will receive funds and increment its balance.</p></div> <div class="bg-muted/50 p-1 rounded-xl border border-border flex items-center gap-1"><button type="button"><!> <span>Cash Account</span></button> <button type="button"><!> <span>Bank Account</span></button></div></div> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><!></div></div> <div class="bg-card border border-border rounded-2xl p-5 space-y-4 shadow-xs"><h2 class="text-sm font-bold text-foreground border-b border-border/40 pb-3">Receipt Amount & Transaction Details</h2> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><div class="space-y-1.5"><label for="receiptAmount" class="text-xs font-semibold text-foreground">Receipt Amount (BHD) *</label> <div class="flex items-center rounded-xl border border-border bg-background focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary overflow-hidden h-10 shadow-2xs transition-all"><span class="px-3.5 h-full flex items-center justify-center bg-muted/50 border-r border-border text-xs font-bold text-muted-foreground font-mono select-none">BHD</span> <input id="receiptAmount" type="number" step="0.001" min="0.001" placeholder="0.000" class="flex-1 h-full px-3.5 bg-transparent text-sm font-bold font-mono text-foreground placeholder:text-muted-foreground/50 focus:outline-none" required=""/></div></div> <div class="space-y-1.5"><label for="referenceIdInput" class="text-xs font-semibold text-foreground flex items-center justify-between"><span>Reference ID *</span> <span class="text-[10px] text-amber-600 font-semibold">Unique</span></label> <input id="referenceIdInput" type="text" placeholder="e.g. REF-2026-001 or Cheque Ref" required="" class="w-full h-10 px-3.5 bg-background border border-border rounded-xl text-xs font-mono text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"/></div></div> <div class="space-y-1.5 pt-2"><label for="receiptDescription" class="text-xs font-semibold text-foreground">Narration / Description (Optional)</label> <textarea id="receiptDescription" rows="2" placeholder="Enter receipt narration or notes..." class="w-full text-xs bg-background border border-border rounded-xl px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"></textarea></div> <div class="space-y-1.5 pt-2 border-t border-border/40"><label for="receiptProofFile" class="text-xs font-semibold text-muted-foreground">Payment Proof / Deposit Slip (Optional)</label> <input id="receiptProofFile" type="file" accept=".pdf,.png,.jpg,.jpeg" class="w-full text-xs bg-background border border-border rounded-xl px-3 py-2 text-foreground file:mr-2 file:py-1 file:px-2.5 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-primary/10 file:text-primary file:cursor-pointer"/> <!></div></div> <div class="flex items-center justify-end gap-3 pt-2"><!> <!></div></form>`);
var root_9 = from_html(`<div class="max-w-3xl mx-auto space-y-6 pb-12"><div class="space-y-2"><button class="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground cursor-pointer transition-colors"><!> Back to Receipts Workspace</button> <div class="flex items-center justify-between"><div class="space-y-1"><h1 class="text-xl font-bold text-foreground tracking-tight flex items-center gap-2"><!> Create Payment Receipt</h1> <p class="text-xs text-muted-foreground">Record an incoming payment receipt to directly increment the balance of a Cash Account or Bank Account.</p></div> <div class="flex items-center gap-2"><!> <span class="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 shadow-xs"><!> Balance Increment</span></div></div></div> <!></div>`);
function _page($$anchor, $$props) {
	push($$props, true);
	const $page = () => store_get(page, "$page", $$stores);
	const [$$stores, $$cleanup] = setup_stores();
	let destinationType = state("account");
	let selectedAccountId = state("");
	let selectedBankId = state("");
	let amount = state("");
	let referenceId = state("");
	let description = state("");
	let paymentProof = state(null);
	let paymentProofFile = state(null);
	let cashAccounts = state(proxy([]));
	let bankAccounts = state(proxy([]));
	let isLoadingData = state(true);
	let isSubmitting = state(false);
	const selectedCashAccount = user_derived(() => get(cashAccounts).find((a) => String(a.id) === get(selectedAccountId)) || null);
	const selectedBankAccount = user_derived(() => get(bankAccounts).find((b) => String(b.id) === get(selectedBankId)) || null);
	const parsedAmount = user_derived(() => parseFloat(get(amount)) || 0);
	async function loadDropdowns() {
		set(isLoadingData, true);
		try {
			const [cashList, bankList] = await Promise.all([getAccounts().catch(() => []), getBanks().catch(() => [])]);
			set(cashAccounts, (Array.isArray(cashList) ? cashList : cashList?.items || []).filter((a) => a.isActive), true);
			set(bankAccounts, (Array.isArray(bankList) ? bankList : bankList?.items || []).filter((b) => b.isActive), true);
			const qAccountId = $page().url.searchParams.get("accountId");
			const qBankId = $page().url.searchParams.get("bankId");
			if (qAccountId && get(cashAccounts).some((a) => String(a.id) === qAccountId)) {
				set(destinationType, "account");
				set(selectedAccountId, qAccountId, true);
			} else if (get(cashAccounts).length > 0 && !get(selectedAccountId)) {
				const firstCash = get(cashAccounts)[0];
				if (firstCash) set(selectedAccountId, String(firstCash.id), true);
			}
			if (qBankId && get(bankAccounts).some((b) => String(b.id) === qBankId)) {
				set(destinationType, "bank");
				set(selectedBankId, qBankId, true);
			} else if (get(bankAccounts).length > 0 && !get(selectedBankId)) {
				const firstBank = get(bankAccounts)[0];
				if (firstBank) set(selectedBankId, String(firstBank.id), true);
			}
		} catch (err) {
			console.error("Failed to load accounts data:", err);
			toast.error("Failed to load cash and bank accounts.");
		} finally {
			set(isLoadingData, false);
		}
	}
	function handlePaymentProofChange(e) {
		const target = e.target;
		if (target.files && target.files[0]) {
			const file = target.files[0];
			set(paymentProofFile, file, true);
			const reader = new FileReader();
			reader.onload = (event) => {
				set(paymentProof, event.target?.result, true);
			};
			reader.readAsDataURL(file);
		} else {
			set(paymentProofFile, null);
			set(paymentProof, null);
		}
	}
	async function handleSubmit(e) {
		e.preventDefault();
		if (get(parsedAmount) <= 0) {
			toast.error("Please enter a valid receipt amount greater than zero.");
			return;
		}
		if (get(destinationType) === "account" && !get(selectedAccountId)) {
			toast.error("Please select a Destination Cash Account to increment.");
			return;
		}
		if (get(destinationType) === "bank" && !get(selectedBankId)) {
			toast.error("Please select a Destination Bank Account to increment.");
			return;
		}
		if (!get(referenceId).trim()) {
			toast.error("Reference ID is required and must be unique.");
			return;
		}
		set(isSubmitting, true);
		try {
			const targetAccName = get(destinationType) === "account" ? get(selectedCashAccount)?.name : get(selectedBankAccount)?.bankName;
			const payload = {
				destinationType: get(destinationType),
				destinationAccountId: get(destinationType) === "account" ? parseInt(get(selectedAccountId), 10) : null,
				destinationBankId: get(destinationType) === "bank" ? parseInt(get(selectedBankId), 10) : null,
				amount: get(parsedAmount),
				clientType: "general",
				headId: null,
				agentName: null,
				description: get(description).trim() || `Receipt Collection deposited to ${targetAccName || "Account"}`,
				referenceId: get(referenceId).trim(),
				paymentProof: get(paymentProof)
			};
			await apiFetch("api/sales-entries/receipts", {
				method: "POST",
				body: JSON.stringify(payload)
			});
			toast.success(`Receipt created successfully! Balance for ${targetAccName || "account"} incremented by ${get(parsedAmount).toFixed(3)} BHD.`);
			goto("/sales/receipts?tab=accounts_portal");
		} catch (err) {
			console.error("Failed to create receipt:", err);
			toast.error(err?.message || "Failed to create payment receipt.");
		} finally {
			set(isSubmitting, false);
		}
	}
	onMount(() => {
		loadDropdowns();
	});
	var div = root_9();
	head("1kxx9wj", ($$anchor) => {
		effect(() => {
			$document.title = "Create Receipt — Accounts Portal";
		});
	});
	var div_1 = child(div);
	var button = child(div_1);
	Arrow_left(child(button), { class: "h-3.5 w-3.5" });
	next();
	reset(button);
	var div_2 = sibling(button, 2);
	var div_3 = child(div_2);
	var h1 = child(div_3);
	Receipt(child(h1), { class: "h-5 w-5 text-primary" });
	next();
	reset(h1);
	next(2);
	reset(div_3);
	var div_4 = sibling(div_3, 2);
	var node_2 = child(div_4);
	Button(node_2, {
		type: "button",
		variant: "outline",
		size: "sm",
		class: "rounded-xl text-xs font-semibold cursor-pointer",
		onclick: () => goto("/sales/receipts/new-client"),
		children: ($$anchor, $$slotProps) => {
			var fragment = root();
			Wallet(first_child(fragment), { class: "h-3.5 w-3.5 mr-1 text-primary" });
			next();
			append($$anchor, fragment);
		},
		$$slots: { default: true }
	});
	var span = sibling(node_2, 2);
	Plus(child(span), { class: "h-3.5 w-3.5" });
	next();
	reset(span);
	reset(div_4);
	reset(div_2);
	reset(div_1);
	var node_5 = sibling(div_1, 2);
	var consequent = ($$anchor) => {
		var div_5 = root_1();
		Refresh_cw(child(div_5), { class: "h-8 w-8 text-primary animate-spin" });
		reset(div_5);
		append($$anchor, div_5);
	};
	var alternate_2 = ($$anchor) => {
		var form = root_8();
		var div_6 = child(form);
		var div_7 = child(div_6);
		var div_8 = sibling(child(div_7), 2);
		var button_1 = child(div_8);
		Wallet(child(button_1), { class: "h-3.5 w-3.5" });
		next(2);
		reset(button_1);
		var button_2 = sibling(button_1, 2);
		Building_2(child(button_2), { class: "h-3.5 w-3.5" });
		next(2);
		reset(button_2);
		reset(div_8);
		reset(div_7);
		var div_9 = sibling(div_7, 2);
		var node_9 = child(div_9);
		var consequent_1 = ($$anchor) => {
			var div_10 = root_3();
			var select = sibling(child(div_10), 2);
			each(select, 21, () => get(cashAccounts), index, ($$anchor, acc) => {
				var option = root_2();
				var text = child(option);
				reset(option);
				var option_value = {};
				template_effect(($0, $1) => {
					set_text(text, `${get(acc).name ?? ""} — Current Balance: ${$0 ?? ""} BHD`);
					if (option_value !== (option_value = $1)) option.value = (option.__value = $1) ?? "";
				}, [() => Number(get(acc).currentBalance).toFixed(3), () => String(get(acc).id)]);
				append($$anchor, option);
			});
			reset(select);
			reset(div_10);
			bind_select_value(select, () => get(selectedAccountId), ($$value) => set(selectedAccountId, $$value));
			append($$anchor, div_10);
		};
		var alternate = ($$anchor) => {
			var div_11 = root_4();
			var select_1 = sibling(child(div_11), 2);
			each(select_1, 21, () => get(bankAccounts), index, ($$anchor, b) => {
				var option_1 = root_2();
				var text_1 = child(option_1);
				reset(option_1);
				var option_1_value = {};
				template_effect(($0, $1) => {
					set_text(text_1, `${get(b).bankName ?? ""} (${get(b).accountNumber ?? ""}) — Current Balance: ${$0 ?? ""} BHD`);
					if (option_1_value !== (option_1_value = $1)) option_1.value = (option_1.__value = $1) ?? "";
				}, [() => Number(get(b).currentBalance).toFixed(3), () => String(get(b).id)]);
				append($$anchor, option_1);
			});
			reset(select_1);
			reset(div_11);
			bind_select_value(select_1, () => get(selectedBankId), ($$value) => set(selectedBankId, $$value));
			append($$anchor, div_11);
		};
		if_block(node_9, ($$render) => {
			if (get(destinationType) === "account") $$render(consequent_1);
			else $$render(alternate, -1);
		});
		reset(div_9);
		reset(div_6);
		var div_12 = sibling(div_6, 2);
		var div_13 = sibling(child(div_12), 2);
		var div_14 = child(div_13);
		var div_15 = sibling(child(div_14), 2);
		var input = sibling(child(div_15), 2);
		remove_input_defaults(input);
		reset(div_15);
		reset(div_14);
		var div_16 = sibling(div_14, 2);
		var input_1 = sibling(child(div_16), 2);
		remove_input_defaults(input_1);
		reset(div_16);
		reset(div_13);
		var div_17 = sibling(div_13, 2);
		var textarea = sibling(child(div_17), 2);
		remove_textarea_child(textarea);
		reset(div_17);
		var div_18 = sibling(div_17, 2);
		var input_2 = sibling(child(div_18), 2);
		var node_10 = sibling(input_2, 2);
		var consequent_2 = ($$anchor) => {
			var p = root_5();
			var text_2 = child(p);
			reset(p);
			template_effect(() => set_text(text_2, `Selected: ${get(paymentProofFile).name ?? ""}`));
			append($$anchor, p);
		};
		if_block(node_10, ($$render) => {
			if (get(paymentProofFile)) $$render(consequent_2);
		});
		reset(div_18);
		reset(div_12);
		var div_19 = sibling(div_12, 2);
		var node_11 = child(div_19);
		Button(node_11, {
			type: "button",
			variant: "outline",
			class: "rounded-xl h-10 px-5 text-xs font-semibold cursor-pointer",
			get disabled() {
				return get(isSubmitting);
			},
			onclick: () => goto("/sales/receipts"),
			children: ($$anchor, $$slotProps) => {
				next();
				append($$anchor, text("Cancel"));
			},
			$$slots: { default: true }
		});
		var node_12 = sibling(node_11, 2);
		{
			let $0 = user_derived(() => get(isSubmitting) || get(parsedAmount) <= 0);
			Button(node_12, {
				type: "submit",
				class: "rounded-xl h-10 px-6 text-xs font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm cursor-pointer flex items-center gap-1.5",
				get disabled() {
					return get($0);
				},
				children: ($$anchor, $$slotProps) => {
					var fragment_1 = comment();
					var node_13 = first_child(fragment_1);
					var consequent_3 = ($$anchor) => {
						var fragment_2 = root_6();
						Refresh_cw(first_child(fragment_2), { class: "h-4 w-4 animate-spin" });
						next(2);
						append($$anchor, fragment_2);
					};
					var alternate_1 = ($$anchor) => {
						var fragment_3 = root_7();
						Save(first_child(fragment_3), { class: "h-4 w-4" });
						next(2);
						append($$anchor, fragment_3);
					};
					if_block(node_13, ($$render) => {
						if (get(isSubmitting)) $$render(consequent_3);
						else $$render(alternate_1, -1);
					});
					append($$anchor, fragment_1);
				},
				$$slots: { default: true }
			});
		}
		reset(div_19);
		reset(form);
		template_effect(() => {
			set_class(button_1, 1, `px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${get(destinationType) === "account" ? "bg-primary text-primary-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"}`);
			set_class(button_2, 1, `px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${get(destinationType) === "bank" ? "bg-primary text-primary-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"}`);
		});
		event("submit", form, handleSubmit);
		delegated("click", button_1, () => set(destinationType, "account"));
		delegated("click", button_2, () => set(destinationType, "bank"));
		bind_value(input, () => get(amount), ($$value) => set(amount, $$value));
		bind_value(input_1, () => get(referenceId), ($$value) => set(referenceId, $$value));
		bind_value(textarea, () => get(description), ($$value) => set(description, $$value));
		delegated("change", input_2, handlePaymentProofChange);
		append($$anchor, form);
	};
	if_block(node_5, ($$render) => {
		if (get(isLoadingData)) $$render(consequent);
		else $$render(alternate_2, -1);
	});
	reset(div);
	delegated("click", button, () => goto("/sales/receipts"));
	append($$anchor, div);
	pop();
	$$cleanup();
}
delegate(["click", "change"]);
//#endregion
export { _page as component };

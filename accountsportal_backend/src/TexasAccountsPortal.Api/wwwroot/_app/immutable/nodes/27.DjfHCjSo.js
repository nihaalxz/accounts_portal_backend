import { B as append, D as head, G as text, H as from_html, I as if_block, J as event, K as delegate, Lt as next, M as slot, Mt as push, N as each, P as index, Q as get, R as set_text, Rt as reset, V as comment, a as legacy_rest_props, b as bind_select_value, c as spread_props, d as bind_checked, dt as child, ft as first_child, g as remove_input_defaults, gt as set, it as effect, jt as pop, lt as remove_textarea_child, mt as proxy, ot as template_effect, p as bind_value, pt as sibling, q as delegated, r as onMount, ut as $document, vt as state, xt as user_derived } from "../chunks/BdGPDeRo.js";
import { t as goto } from "../chunks/CS3J35_c.js";
import "../chunks/DhaYE-8x.js";
import { t as apiFetch } from "../chunks/D7kp2URN.js";
import "../chunks/CAdj_q3a.js";
import { t as addToast } from "../chunks/BZc__OC9.js";
import { t as Icon } from "../chunks/CS18PJnN.js";
import { t as Arrow_down_left } from "../chunks/DhepRjNC.js";
import { t as Arrow_left } from "../chunks/Cbjzxiq1.js";
import { t as Arrow_up_right } from "../chunks/CjEScnLE.js";
import { t as Button } from "../chunks/zyE_82FR2.js";
import "../chunks/B-T238YI2.js";
import { r as getAccounts } from "../chunks/Cl3fmqbf.js";
import { n as getBanks } from "../chunks/Dvvx1_63.js";
import { o as getExpenseHeaders, r as createExpense } from "../chunks/BhgqC6jV.js";
import { c as getBucketHelpText, l as getBucketSourceLabel, s as getBucketDirection } from "../chunks/rjZ5RTov.js";
//#region node_modules/lucide-svelte/dist/icons/circle-question-mark.svelte
function Circle_question_mark($$anchor, $$props) {
	const $$sanitized_props = legacy_rest_props($$props, [
		"children",
		"$$slots",
		"$$events",
		"$$legacy"
	]);
	/**
	* @license lucide-svelte v1.0.1 - ISC
	*
	* ISC License
	*
	* Copyright (c) 2026 Lucide Icons and Contributors
	*
	* Permission to use, copy, modify, and/or distribute this software for any
	* purpose with or without fee is hereby granted, provided that the above
	* copyright notice and this permission notice appear in all copies.
	*
	* THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
	* WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
	* MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
	* ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
	* WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
	* ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
	* OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
	*
	* ---
	*
	* The following Lucide icons are derived from the Feather project:
	*
	* airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
	*
	* The MIT License (MIT) (for the icons listed above)
	*
	* Copyright (c) 2013-present Cole Bemis
	*
	* Permission is hereby granted, free of charge, to any person obtaining a copy
	* of this software and associated documentation files (the "Software"), to deal
	* in the Software without restriction, including without limitation the rights
	* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	* copies of the Software, and to permit persons to whom the Software is
	* furnished to do so, subject to the following conditions:
	*
	* The above copyright notice and this permission notice shall be included in all
	* copies or substantial portions of the Software.
	*
	* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	* SOFTWARE.
	*
	*/
	const iconNode = [
		["circle", {
			"cx": "12",
			"cy": "12",
			"r": "10"
		}],
		["path", { "d": "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }],
		["path", { "d": "M12 17h.01" }]
	];
	/**
	* @component @name CircleQuestionMark
	* @description Lucide SVG icon component, renders SVG Element with children.
	*
	* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgLz4KICA8cGF0aCBkPSJNOS4wOSA5YTMgMyAwIDAgMSA1LjgzIDFjMCAyLTMgMy0zIDMiIC8+CiAgPHBhdGggZD0iTTEyIDE3aC4wMSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/circle-question-mark
	* @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
	*
	* @param {Object} props - Lucide icons props and any valid SVG attribute
	* @returns {FunctionalComponent} Svelte component
	*
	*/
	Icon($$anchor, spread_props({ name: "circle-question-mark" }, () => $$sanitized_props, {
		get iconNode() {
			return iconNode;
		},
		children: ($$anchor, $$slotProps) => {
			var fragment_1 = comment();
			slot(first_child(fragment_1), $$props, "default", {}, null);
			append($$anchor, fragment_1);
		},
		$$slots: { default: true }
	}));
}
//#endregion
//#region src/routes/(app)/payments/new/+page.svelte
var root = from_html(`<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-600 border border-emerald-500/20"><!> Incoming Receipt</span>`);
var root_1 = from_html(`<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-500/10 text-blue-600 border border-blue-500/20"><!> Outgoing Payout</span>`);
var root_2 = from_html(`<option> </option>`);
var root_3 = from_html(`<div class="p-3 bg-muted/40 border border-border/80 rounded-xl text-xs flex items-start gap-2 text-muted-foreground"><!> <div><span class="font-semibold text-foreground"> </span> </div></div>`);
var root_4 = from_html(`<div class="p-4 bg-purple-500/5 border border-purple-500/20 rounded-xl space-y-3 animate-in fade-in slide-in-from-top-1 duration-200"><span class="font-semibold text-purple-700 dark:text-purple-400 block text-[11px] uppercase tracking-wider">Supplier Wallet & Credit Details</span> <div class="grid grid-cols-1 sm:grid-cols-2 gap-3"><div class="space-y-1"><label for="supplierSelect" class="font-semibold text-muted-foreground">Select Supplier</label> <select id="supplierSelect" class="h-9 w-full bg-background border border-border rounded-xl px-2 text-xs text-foreground focus:outline-none"><option>-- Select Target Supplier --</option><!></select></div> <div class="space-y-1"><label for="supplierTypeSelect" class="font-semibold text-muted-foreground">Supplier Operation Type</label> <select id="supplierTypeSelect" class="h-9 w-full bg-background border border-border rounded-xl px-2 text-xs text-foreground focus:outline-none"><option>Supplier Wallet Top-up</option><option>Supplier Credit Settlement</option><option>Supplier Advance Payment</option><option>Supplier Refund (Incoming)</option></select></div></div> <div class="space-y-1"><label for="supplierRefNumber" class="font-semibold text-muted-foreground">Supplier Reference / Invoice No. (Optional)</label> <input id="supplierRefNumber" type="text" placeholder="e.g. INV-99482 / Booking Ref" class="h-9 w-full bg-background border border-border rounded-xl px-3 text-xs text-foreground focus:outline-none"/></div></div>`);
var root_5 = from_html(`<div class="space-y-1.5 animate-in fade-in slide-in-from-top-1 duration-200"><label for="sourceAccountId" class="font-semibold text-muted-foreground"> </label> <select id="sourceAccountId" class="h-10 w-full bg-background border border-border rounded-xl px-2 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground disabled:opacity-50"><option> </option><!></select></div>`);
var root_6 = from_html(`<div class="space-y-1.5 animate-in fade-in slide-in-from-top-1 duration-200"><label for="sourceBankId" class="font-semibold text-muted-foreground"> </label> <select id="sourceBankId" class="h-10 w-full bg-background border border-border rounded-xl px-2 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground disabled:opacity-50"><option> </option><!></select></div>`);
var root_7 = from_html(`<div class="max-w-2xl mx-auto space-y-6"><div class="space-y-2"><button class="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground cursor-pointer transition-colors"><!> Back to Treasury Payments</button> <div class="flex items-center gap-3"><h1 class="text-xl font-bold text-foreground">Log Financial Payment</h1> <!></div> <p class="text-xs text-muted-foreground">Record operational expenses, asset purchases, income receipts, capital deposits, or supplier wallet transactions.</p></div> <form class="bg-card border border-border rounded-2xl p-6 shadow-xs space-y-4 text-xs"><div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><div class="space-y-1.5"><label for="expenseCategoryId" class="font-semibold text-muted-foreground">Accounting Category (Header)</label> <select id="expenseCategoryId" class="h-10 w-full bg-background border border-border rounded-xl px-2 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground disabled:opacity-50"><option>-- Select Account Category --</option><!></select></div> <div class="space-y-1.5"><label for="amount" class="font-semibold text-muted-foreground">Amount (BHD)</label> <input id="amount" type="number" step="0.001" min="0.001" required="" placeholder="0.000" class="h-10 w-full bg-background border border-border rounded-xl px-3 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground"/></div></div> <!> <div class="pt-2 border-t border-border/60 flex items-center justify-between"><span class="font-semibold text-muted-foreground">Is this a Supplier Payment / Wallet Transaction?</span> <label class="flex items-center gap-2 cursor-pointer"><input type="checkbox" class="rounded border-border text-primary"/> <span class="font-semibold text-foreground">Supplier Transaction</span></label></div> <!> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><div class="space-y-1.5"><label for="expenseDate" class="font-semibold text-muted-foreground">Transaction Date</label> <input id="expenseDate" type="date" required="" class="h-10 w-full bg-background border border-border rounded-xl px-3 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground"/></div> <div class="space-y-1.5"><label for="paymentMethod" class="font-semibold text-muted-foreground">Payment Channel</label> <select id="paymentMethod" class="h-10 w-full bg-background border border-border rounded-xl px-2 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground"><option>Cash Drawer Account</option><option>Bank Account</option></select></div></div> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><!> <div class="space-y-1.5"><label for="description" class="font-semibold text-muted-foreground">Description / Purpose</label> <input id="description" type="text" required="" placeholder="e.g. Office rent payment / Equipment purchase" class="h-10 w-full bg-background border border-border rounded-xl px-3 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground"/></div></div> <div class="space-y-1.5"><label for="notes" class="font-semibold text-muted-foreground">Notes / Remarks (Optional)</label> <textarea id="notes" rows="2" placeholder="Add additional voucher references or remarks..." class="w-full bg-background border border-border rounded-xl p-3 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground resize-y"></textarea></div> <div class="flex items-center justify-end gap-3 pt-4 border-t border-border"><!> <!></div></form></div>`);
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
	let isSupplierTransaction = state(false);
	let supplierIdVal = state("");
	let supplierPaymentType = state("supplier_wallet");
	let referenceNumber = state("");
	let categories = state(proxy([]));
	let cashAccounts = state(proxy([]));
	let bankAccounts = state(proxy([]));
	let suppliers = state(proxy([]));
	let isSubmitting = state(false);
	let isLoadingData = state(true);
	const selectedCategory = user_derived(() => get(categories).find((c) => String(c.id) === get(expenseCategoryIdVal)) || null);
	const categoryBucket = user_derived(() => get(selectedCategory)?.category || "Expenses");
	const direction = user_derived(() => getBucketDirection(get(categoryBucket), get(isSupplierTransaction) ? get(supplierPaymentType) : void 0));
	const sourceLabel = user_derived(() => getBucketSourceLabel(get(categoryBucket), get(isSupplierTransaction) ? get(supplierPaymentType) : void 0));
	const helpText = user_derived(() => getBucketHelpText(get(categoryBucket), get(isSupplierTransaction) ? get(supplierPaymentType) : void 0));
	async function loadDropdowns() {
		try {
			const [headersList, cashList, bankList, supplierList] = await Promise.all([
				getExpenseHeaders(),
				getAccounts(),
				getBanks(),
				apiFetch("/api/supplier").catch(() => [])
			]);
			set(categories, headersList, true);
			set(cashAccounts, cashList.filter((a) => a.isActive), true);
			set(bankAccounts, bankList.filter((b) => b.isActive), true);
			set(suppliers, supplierList, true);
		} catch (err) {
			addToast(err.message || "Failed to load form dropdown data.", "error");
		} finally {
			set(isLoadingData, false);
		}
	}
	async function handleSubmit(e) {
		e.preventDefault();
		if (!get(expenseCategoryIdVal)) {
			addToast("Please select an Account Category Header.", "error");
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
			addToast(`Please select a ${get(sourceLabel)} Cash Account.`, "error");
			return;
		}
		if ((get(paymentMethod) === "bank" || get(paymentMethod) === "bank_transfer") && !get(sourceBankIdVal)) {
			addToast(`Please select a ${get(sourceLabel)} Bank Account.`, "error");
			return;
		}
		if (get(isSupplierTransaction) && !get(supplierIdVal)) {
			addToast("Please select a Supplier.", "error");
			return;
		}
		set(isSubmitting, true);
		try {
			const categoryId = parseInt(get(expenseCategoryIdVal));
			const sourceAccountId = get(paymentMethod) === "cash" ? parseInt(get(sourceAccountIdVal)) : null;
			const sourceBankId = get(paymentMethod) === "bank" || get(paymentMethod) === "bank_transfer" ? parseInt(get(sourceBankIdVal)) : null;
			const supplierId = get(isSupplierTransaction) && get(supplierIdVal) ? parseInt(get(supplierIdVal)) : null;
			await createExpense({
				expenseCategoryId: categoryId,
				amount: parsedAmount,
				description: get(description).trim(),
				paymentMethod: get(paymentMethod),
				sourceAccountId,
				sourceBankId,
				notes: get(notes).trim() ? get(notes).trim() : null,
				expenseDate: get(expenseDate) || "",
				supplierId,
				supplierPaymentType: get(isSupplierTransaction) ? get(supplierPaymentType) : null,
				referenceNumber: get(referenceNumber).trim() ? get(referenceNumber).trim() : null
			});
			addToast("Payment transaction submitted / recorded successfully.", "success");
			goto("/payments");
		} catch (err) {
			addToast(err.message || "Failed to log transaction.", "error");
		} finally {
			set(isSubmitting, false);
		}
	}
	onMount(() => {
		loadDropdowns();
	});
	var div = root_7();
	head("li5dy6", ($$anchor) => {
		effect(() => {
			$document.title = "Log Payment Transaction — Accounts Portal";
		});
	});
	var div_1 = child(div);
	var button = child(div_1);
	Arrow_left(child(button), { class: "h-3.5 w-3.5" });
	next();
	reset(button);
	var div_2 = sibling(button, 2);
	var node_1 = sibling(child(div_2), 2);
	var consequent = ($$anchor) => {
		var span = root();
		Arrow_down_left(child(span), { class: "h-3 w-3" });
		next();
		reset(span);
		append($$anchor, span);
	};
	var alternate = ($$anchor) => {
		var span_1 = root_1();
		Arrow_up_right(child(span_1), { class: "h-3 w-3" });
		next();
		reset(span_1);
		append($$anchor, span_1);
	};
	if_block(node_1, ($$render) => {
		if (get(direction) === "incoming") $$render(consequent);
		else $$render(alternate, -1);
	});
	reset(div_2);
	next(2);
	reset(div_1);
	var form = sibling(div_1, 2);
	var div_3 = child(form);
	var div_4 = child(div_3);
	var select = sibling(child(div_4), 2);
	var option = child(select);
	option.value = option.__value = "";
	each(sibling(option), 17, () => get(categories), index, ($$anchor, cat) => {
		var option_1 = root_2();
		var text = child(option_1);
		reset(option_1);
		var option_1_value = {};
		template_effect(($0) => {
			set_text(text, `${get(cat).name ?? ""} (${get(cat).category ?? ""})`);
			if (option_1_value !== (option_1_value = $0)) option_1.value = (option_1.__value = $0) ?? "";
		}, [() => String(get(cat).id)]);
		append($$anchor, option_1);
	});
	reset(select);
	reset(div_4);
	var div_5 = sibling(div_4, 2);
	var input = sibling(child(div_5), 2);
	remove_input_defaults(input);
	reset(div_5);
	reset(div_3);
	var node_5 = sibling(div_3, 2);
	var consequent_1 = ($$anchor) => {
		var div_6 = root_3();
		var node_6 = child(div_6);
		Circle_question_mark(node_6, { class: "h-4 w-4 text-primary shrink-0 mt-0.5" });
		var div_7 = sibling(node_6, 2);
		var span_2 = child(div_7);
		var text_1 = child(span_2);
		reset(span_2);
		var text_2 = sibling(span_2);
		reset(div_7);
		reset(div_6);
		template_effect(() => {
			set_text(text_1, `${get(selectedCategory).name ?? ""} (${get(categoryBucket) ?? ""})`);
			set_text(text_2, `: ${get(helpText) ?? ""}`);
		});
		append($$anchor, div_6);
	};
	if_block(node_5, ($$render) => {
		if (get(selectedCategory)) $$render(consequent_1);
	});
	var div_8 = sibling(node_5, 2);
	var label = sibling(child(div_8), 2);
	var input_1 = child(label);
	remove_input_defaults(input_1);
	next(2);
	reset(label);
	reset(div_8);
	var node_7 = sibling(div_8, 2);
	var consequent_2 = ($$anchor) => {
		var div_9 = root_4();
		var div_10 = sibling(child(div_9), 2);
		var div_11 = child(div_10);
		var select_1 = sibling(child(div_11), 2);
		var option_2 = child(select_1);
		option_2.value = option_2.__value = "";
		each(sibling(option_2), 17, () => get(suppliers), index, ($$anchor, sup) => {
			var option_3 = root_2();
			var text_3 = child(option_3);
			reset(option_3);
			var option_3_value = {};
			template_effect(($0, $1) => {
				set_text(text_3, `${get(sup).name ?? ""} (${get(sup).code ?? ""}) — Wallet: ${$0 ?? ""} BHD`);
				if (option_3_value !== (option_3_value = $1)) option_3.value = (option_3.__value = $1) ?? "";
			}, [() => get(sup).wallet.toFixed(3), () => String(get(sup).id)]);
			append($$anchor, option_3);
		});
		reset(select_1);
		reset(div_11);
		var div_12 = sibling(div_11, 2);
		var select_2 = sibling(child(div_12), 2);
		var option_4 = child(select_2);
		option_4.value = option_4.__value = "supplier_wallet";
		var option_5 = sibling(option_4);
		option_5.value = option_5.__value = "supplier_credit";
		var option_6 = sibling(option_5);
		option_6.value = option_6.__value = "supplier_advance";
		var option_7 = sibling(option_6);
		option_7.value = option_7.__value = "supplier_refund";
		reset(select_2);
		reset(div_12);
		reset(div_10);
		var div_13 = sibling(div_10, 2);
		var input_2 = sibling(child(div_13), 2);
		remove_input_defaults(input_2);
		reset(div_13);
		reset(div_9);
		bind_select_value(select_1, () => get(supplierIdVal), ($$value) => set(supplierIdVal, $$value));
		bind_select_value(select_2, () => get(supplierPaymentType), ($$value) => set(supplierPaymentType, $$value));
		bind_value(input_2, () => get(referenceNumber), ($$value) => set(referenceNumber, $$value));
		append($$anchor, div_9);
	};
	if_block(node_7, ($$render) => {
		if (get(isSupplierTransaction)) $$render(consequent_2);
	});
	var div_14 = sibling(node_7, 2);
	var div_15 = child(div_14);
	var input_3 = sibling(child(div_15), 2);
	remove_input_defaults(input_3);
	reset(div_15);
	var div_16 = sibling(div_15, 2);
	var select_3 = sibling(child(div_16), 2);
	var option_8 = child(select_3);
	option_8.value = option_8.__value = "cash";
	var option_9 = sibling(option_8);
	option_9.value = option_9.__value = "bank";
	reset(select_3);
	reset(div_16);
	reset(div_14);
	var div_17 = sibling(div_14, 2);
	var node_9 = child(div_17);
	var consequent_3 = ($$anchor) => {
		var div_18 = root_5();
		var label_1 = child(div_18);
		var text_4 = child(label_1);
		reset(label_1);
		var select_4 = sibling(label_1, 2);
		var option_10 = child(select_4);
		var text_5 = child(option_10);
		reset(option_10);
		option_10.value = option_10.__value = "";
		each(sibling(option_10), 17, () => get(cashAccounts), index, ($$anchor, acc) => {
			var option_11 = root_2();
			var text_6 = child(option_11);
			reset(option_11);
			var option_11_value = {};
			template_effect(($0, $1) => {
				set_text(text_6, `${get(acc).name ?? ""} (Bal: ${$0 ?? ""} BHD)`);
				if (option_11_value !== (option_11_value = $1)) option_11.value = (option_11.__value = $1) ?? "";
			}, [() => get(acc).currentBalance.toFixed(3), () => String(get(acc).id)]);
			append($$anchor, option_11);
		});
		reset(select_4);
		reset(div_18);
		template_effect(() => {
			set_text(text_4, `${get(sourceLabel) ?? ""} Cash Drawer`);
			select_4.disabled = get(isLoadingData);
			set_text(text_5, `-- Select ${get(sourceLabel) ?? ""} Cash Drawer --`);
		});
		bind_select_value(select_4, () => get(sourceAccountIdVal), ($$value) => set(sourceAccountIdVal, $$value));
		append($$anchor, div_18);
	};
	var alternate_1 = ($$anchor) => {
		var div_19 = root_6();
		var label_2 = child(div_19);
		var text_7 = child(label_2);
		reset(label_2);
		var select_5 = sibling(label_2, 2);
		var option_12 = child(select_5);
		var text_8 = child(option_12);
		reset(option_12);
		option_12.value = option_12.__value = "";
		each(sibling(option_12), 17, () => get(bankAccounts), index, ($$anchor, bank) => {
			var option_13 = root_2();
			var text_9 = child(option_13);
			reset(option_13);
			var option_13_value = {};
			template_effect(($0, $1) => {
				set_text(text_9, `${get(bank).bankName ?? ""} (Bal: ${$0 ?? ""} BHD)`);
				if (option_13_value !== (option_13_value = $1)) option_13.value = (option_13.__value = $1) ?? "";
			}, [() => get(bank).currentBalance.toFixed(3), () => String(get(bank).id)]);
			append($$anchor, option_13);
		});
		reset(select_5);
		reset(div_19);
		template_effect(() => {
			set_text(text_7, `${get(sourceLabel) ?? ""} Bank Account`);
			select_5.disabled = get(isLoadingData);
			set_text(text_8, `-- Select ${get(sourceLabel) ?? ""} Bank Account --`);
		});
		bind_select_value(select_5, () => get(sourceBankIdVal), ($$value) => set(sourceBankIdVal, $$value));
		append($$anchor, div_19);
	};
	if_block(node_9, ($$render) => {
		if (get(paymentMethod) === "cash") $$render(consequent_3);
		else $$render(alternate_1, -1);
	});
	var div_20 = sibling(node_9, 2);
	var input_4 = sibling(child(div_20), 2);
	remove_input_defaults(input_4);
	reset(div_20);
	reset(div_17);
	var div_21 = sibling(div_17, 2);
	var textarea = sibling(child(div_21), 2);
	remove_textarea_child(textarea);
	reset(div_21);
	var div_22 = sibling(div_21, 2);
	var node_12 = child(div_22);
	Button(node_12, {
		variant: "outline",
		class: "rounded-xl px-5 py-4.5 font-semibold cursor-pointer",
		get disabled() {
			return get(isSubmitting);
		},
		onclick: () => goto("/payments"),
		children: ($$anchor, $$slotProps) => {
			next();
			append($$anchor, text("Cancel"));
		},
		$$slots: { default: true }
	});
	var node_13 = sibling(node_12, 2);
	{
		let $0 = user_derived(() => get(isSubmitting) || get(isLoadingData));
		Button(node_13, {
			type: "submit",
			class: "rounded-xl px-5 py-4.5 font-semibold cursor-pointer",
			get disabled() {
				return get($0);
			},
			children: ($$anchor, $$slotProps) => {
				next();
				var text_11 = text();
				template_effect(() => set_text(text_11, get(isSubmitting) ? "Posting..." : "Log Transaction"));
				append($$anchor, text_11);
			},
			$$slots: { default: true }
		});
	}
	reset(div_22);
	reset(form);
	reset(div);
	template_effect(() => select.disabled = get(isLoadingData));
	delegated("click", button, () => goto("/payments"));
	event("submit", form, handleSubmit);
	bind_select_value(select, () => get(expenseCategoryIdVal), ($$value) => set(expenseCategoryIdVal, $$value));
	bind_value(input, () => get(amount), ($$value) => set(amount, $$value));
	bind_checked(input_1, () => get(isSupplierTransaction), ($$value) => set(isSupplierTransaction, $$value));
	bind_value(input_3, () => get(expenseDate), ($$value) => set(expenseDate, $$value));
	bind_select_value(select_3, () => get(paymentMethod), ($$value) => set(paymentMethod, $$value));
	bind_value(input_4, () => get(description), ($$value) => set(description, $$value));
	bind_value(textarea, () => get(notes), ($$value) => set(notes, $$value));
	append($$anchor, div);
	pop();
}
delegate(["click"]);
//#endregion
export { _page as component };

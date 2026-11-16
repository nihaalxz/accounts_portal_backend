import { B as append, Ct as setup_stores, D as head, G as text, H as from_html, I as if_block, J as event, K as delegate, Lt as next, M as slot, Mt as push, N as each, P as index, Q as get, R as set_text, Rt as reset, S as select_option, V as comment, _ as set_attribute, a as legacy_rest_props, b as bind_select_value, c as spread_props, dt as child, ft as first_child, g as remove_input_defaults, gt as set, it as effect, jt as pop, lt as remove_textarea_child, m as bind_value, mt as proxy, ot as template_effect, pt as sibling, q as delegated, r as onMount, ut as $document, vt as state, w as set_class, wt as store_get, x as init_select, xt as user_derived } from "../chunks/BRNvcyYY.js";
import { t as goto } from "../chunks/D5JuL223.js";
import "../chunks/DhaYE-8x.js";
import { t as apiFetch } from "../chunks/WkNSCHpD.js";
import "../chunks/BFZVyN5n.js";
import { t as addToast } from "../chunks/Cml6bg47.js";
import { t as Icon } from "../chunks/Z8P8l_5J.js";
import { t as Arrow_down_left } from "../chunks/DAopJfKS.js";
import { t as Arrow_left } from "../chunks/f13lWAyL.js";
import { t as Arrow_up_right } from "../chunks/0PIkK3xH.js";
import { t as Building_2 } from "../chunks/B7YrKNIo.js";
import { t as Coins } from "../chunks/BIqAVhmA.js";
import { t as Landmark } from "../chunks/1Hl7k53R2.js";
import { t as Receipt } from "../chunks/DbEGS7M72.js";
import { t as Sparkles } from "../chunks/X6RQjtRK.js";
import { t as Wallet } from "../chunks/DnRGNjTY.js";
import { t as page } from "../chunks/BLa-6fKv.js";
import { t as Button } from "../chunks/B56HWgqG.js";
import "../chunks/D2xySE74.js";
import { r as getAccounts } from "../chunks/C3hp4LiA2.js";
import { n as getBanks } from "../chunks/CiKfXfpv2.js";
import { o as getExpenseHeaders, r as createExpense } from "../chunks/DqZa3gab2.js";
import { c as getBucketHelpText, l as getBucketSourceLabel, s as getBucketDirection } from "../chunks/rjZ5RTov2.js";
import { o as createSupplierPayment } from "../chunks/BYGbg3Zw2.js";
import { a as getSalaryProfiles, t as createSalaryPayment } from "../chunks/BWIuH0ym2.js";
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
var root = from_html(`<span class="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 shadow-xs"><!> Incoming Receipt</span>`);
var root_1 = from_html(`<span class="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold bg-blue-500/10 text-blue-600 border border-blue-500/20 shadow-xs"><!> Outgoing Payout</span>`);
var root_2 = from_html(`<option> </option>`);
var root_3 = from_html(`<div class="space-y-1.5"><label for="salary-cash-account-select" class="font-semibold text-foreground">Select Cash Account</label> <select id="salary-cash-account-select" required="" class="h-10 w-full bg-background border border-border rounded-xl px-3 text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-amber-500/30"></select></div>`);
var root_4 = from_html(`<div class="space-y-1.5"><label for="salary-bank-account-select" class="font-semibold text-foreground">Select Bank Account</label> <select id="salary-bank-account-select" required="" class="h-10 w-full bg-background border border-border rounded-xl px-3 text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-amber-500/30"></select></div>`);
var root_5 = from_html(`<div class="p-4 bg-amber-500/5 border border-amber-500/20 rounded-xl space-y-4 animate-in fade-in duration-200"><div class="flex items-center justify-between"><span class="font-bold text-amber-700 dark:text-amber-300 text-[11px] uppercase tracking-wider flex items-center gap-1.5"><!> Staff Salary Payout Parameters (Expenses Bucket)</span></div> <div class="space-y-1.5"><label for="salary-employee-select" class="font-semibold text-foreground flex items-center justify-between"><span>Target Employee Profile</span> <span class="text-[10px] text-muted-foreground font-normal">Required</span></label> <select id="salary-employee-select" required="" class="h-10 w-full bg-background border border-border rounded-xl px-3 text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-amber-500/30"><option>-- Select Employee Profile --</option><!></select></div> <div class="grid grid-cols-2 gap-4"><div class="space-y-1.5"><label for="salary-month-select" class="font-semibold text-foreground">Payroll Month</label> <select id="salary-month-select" required="" class="h-10 w-full bg-background border border-border rounded-xl px-3 text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-amber-500/30"></select></div> <div class="space-y-1.5"><label for="salary-year-input" class="font-semibold text-foreground">Payroll Year</label> <input id="salary-year-input" type="number" required="" class="h-10 w-full bg-background border border-border rounded-xl px-3 text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-amber-500/30"/></div></div> <div class="p-3.5 rounded-xl bg-background border border-border space-y-3"><div class="text-[11px] font-bold text-foreground uppercase tracking-wider">Salary Breakdown</div> <div class="grid grid-cols-2 sm:grid-cols-3 gap-3"><div><label for="salary-basic-input" class="block text-[10px] font-semibold text-muted-foreground mb-1">Basic Salary</label> <input id="salary-basic-input" type="number" step="0.001" required="" class="h-9 w-full bg-background border border-input rounded-lg px-2.5 text-xs text-foreground font-mono focus:outline-none focus:ring-2 focus:ring-amber-500/30"/></div> <div><label for="salary-incentive-input" class="block text-[10px] font-semibold text-muted-foreground mb-1">Incentive</label> <input id="salary-incentive-input" type="number" step="0.001" required="" class="h-9 w-full bg-background border border-input rounded-lg px-2.5 text-xs text-foreground font-mono focus:outline-none focus:ring-2 focus:ring-amber-500/30"/></div> <div><label for="salary-bonus-input" class="block text-[10px] font-semibold text-muted-foreground mb-1">Bonus</label> <input id="salary-bonus-input" type="number" step="0.001" required="" class="h-9 w-full bg-background border border-input rounded-lg px-2.5 text-xs text-foreground font-mono focus:outline-none focus:ring-2 focus:ring-amber-500/30"/></div> <div><label for="salary-allowance-input" class="block text-[10px] font-semibold text-muted-foreground mb-1">Allowance</label> <input id="salary-allowance-input" type="number" step="0.001" required="" class="h-9 w-full bg-background border border-input rounded-lg px-2.5 text-xs text-foreground font-mono focus:outline-none focus:ring-2 focus:ring-amber-500/30"/></div> <div><label for="salary-deduction-input" class="block text-[10px] font-semibold text-muted-foreground mb-1">Deduction</label> <input id="salary-deduction-input" type="number" step="0.001" required="" class="h-9 w-full bg-background border border-input rounded-lg px-2.5 text-xs text-foreground font-mono focus:outline-none focus:ring-2 focus:ring-amber-500/30"/></div></div> <div class="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-between mt-1"><div><span class="text-xs font-bold text-foreground block">Calculated Net Salary Payout</span> <span class="text-[10px] text-muted-foreground">Basic + Incentive + Bonus + Allowance - Deduction</span></div> <div class="text-base font-black text-amber-600 dark:text-amber-400 font-mono"> </div></div></div> <div class="space-y-3"><span class="block text-xs font-semibold text-foreground">Payment Channel</span> <div class="grid grid-cols-2 gap-3"><button type="button"><!> <span>Cash Account</span></button> <button type="button"><!> <span>Bank Account</span></button></div> <!></div> <div class="grid grid-cols-3 gap-3"><div class="space-y-1.5"><label for="salary-ref-input" class="font-semibold text-foreground">Transaction Ref</label> <input id="salary-ref-input" type="text" placeholder="e.g. SAL-2026-08" class="h-10 w-full bg-background border border-border rounded-xl px-3 text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-amber-500/30"/></div> <div class="space-y-1.5"><label for="salary-date-input" class="font-semibold text-foreground">Payment Date</label> <input id="salary-date-input" type="date" required="" class="h-10 w-full bg-background border border-border rounded-xl px-3 text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-amber-500/30"/></div> <div class="space-y-1.5"><label for="salary-status-select" class="font-semibold text-foreground">Status</label> <select id="salary-status-select" required="" class="h-10 w-full bg-background border border-border rounded-xl px-3 text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-amber-500/30"><option>Paid Immediately</option><option>Pending Approval</option></select></div></div> <div class="space-y-1.5"><label for="salary-remarks-input" class="font-semibold text-muted-foreground">Remarks (Optional)</label> <input id="salary-remarks-input" type="text" placeholder="Additional payout notes..." class="h-10 w-full bg-background border border-border rounded-xl px-3 text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-amber-500/30"/></div></div>`);
var root_6 = from_html(`<span class="text-[10px] font-medium px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-300"> </span>`);
var root_7 = from_html(`<div class="grid grid-cols-2 gap-3 p-3 bg-background/80 border border-border/80 rounded-xl text-xs shadow-xs"><div class="space-y-0.5"><span class="text-muted-foreground text-[10px] font-medium block">Authoritative Prepaid Wallet</span> <span class="font-bold text-emerald-600 text-sm font-mono"> </span></div> <div class="space-y-0.5"><span class="text-muted-foreground text-[10px] font-medium block">Credit Wallet (Outstanding Debt)</span> <span class="font-bold text-rose-600 text-sm font-mono"> </span></div></div>`);
var root_8 = from_html(`<div class="p-4 bg-purple-500/5 border border-purple-500/20 rounded-xl space-y-4 animate-in fade-in duration-200"><div class="flex items-center justify-between"><span class="font-bold text-purple-700 dark:text-purple-300 text-[11px] uppercase tracking-wider flex items-center gap-1.5"><!> Supplier Account Details</span> <!></div> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><div class="space-y-1.5"><label for="supplierSelect" class="font-semibold text-foreground flex items-center justify-between"><span>Target Supplier</span> <span class="text-[10px] text-muted-foreground font-normal">Required</span></label> <select id="supplierSelect" class="h-10 w-full bg-background border border-border rounded-xl px-3 text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-purple-500/30"><option>-- Select Target Supplier --</option><!></select></div> <div class="space-y-1.5"><label for="supplierTypeSelect" class="font-semibold text-foreground">Operation Type</label> <select id="supplierTypeSelect" class="h-10 w-full bg-background border border-border rounded-xl px-3 text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-purple-500/30"><option>Supplier Wallet Top-up (Prepaid)</option><option>Supplier Credit Debt Settlement</option><option>Supplier Advance Deposit</option><option>Supplier Refund (Incoming Cash)</option></select></div></div> <!></div>`);
var root_9 = from_html(`<div class="p-3 bg-muted/40 border border-border/80 rounded-xl text-xs flex items-start gap-2.5 text-muted-foreground"><!> <div class="space-y-0.5"><span class="font-semibold text-foreground"> </span> <p class="text-[11px] leading-relaxed"> </p></div></div>`);
var root_10 = from_html(`<div class="space-y-1.5 animate-in fade-in duration-200"><label for="expenseCategoryId" class="font-semibold text-foreground flex items-center justify-between"><span>Accounting Category (Header)</span> <span class="text-[10px] text-muted-foreground font-normal">Required</span></label> <select id="expenseCategoryId" class="h-10 w-full bg-background border border-border rounded-xl px-3 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground disabled:opacity-50"><option>-- Select Account Category --</option><!></select></div> <!>`, 1);
var root_11 = from_html(`<span class="text-[10px] font-mono text-emerald-600 font-bold"> </span>`);
var root_12 = from_html(`<div class="space-y-1.5 animate-in fade-in duration-200"><label for="sourceAccountId" class="font-semibold text-foreground flex items-center justify-between"><span> </span> <!></label> <select id="sourceAccountId" class="h-10 w-full bg-background border border-border rounded-xl px-3 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground disabled:opacity-50"><option> </option><!></select></div>`);
var root_13 = from_html(`<div class="space-y-1.5 animate-in fade-in duration-200"><label for="sourceBankId" class="font-semibold text-foreground flex items-center justify-between"><span> </span> <!></label> <select id="sourceBankId" class="h-10 w-full bg-background border border-border rounded-xl px-3 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground disabled:opacity-50"><option> </option><!></select></div>`);
var root_14 = from_html(`<div class="space-y-1.5 animate-in fade-in duration-200"><label for="supplierRefNumber" class="font-semibold text-foreground">Supplier Invoice / Ref No. (Optional)</label> <input id="supplierRefNumber" type="text" placeholder="e.g. INV-99482 / Booking Ref" class="h-10 w-full bg-background border border-border rounded-xl px-3 text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-purple-500/30"/></div>`);
var root_15 = from_html(`Posting <strong class="font-mono text-purple-700 dark:text-purple-300"> </strong> via <strong> </strong> `, 1);
var root_16 = from_html(`Posting <strong class="font-mono text-primary"> </strong> under <strong> </strong> via <strong> </strong>.`, 1);
var root_17 = from_html(`<div class="p-3.5 bg-primary/5 border border-primary/20 rounded-xl text-xs space-y-1.5 animate-in fade-in duration-200"><div class="flex items-center gap-1.5 font-bold text-primary"><!> <span>Transaction Impact Preview</span></div> <p class="text-[11px] text-foreground font-medium leading-relaxed"><!></p></div>`);
var root_18 = from_html(`<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1"><div class="space-y-1.5"><label for="amount" class="font-semibold text-foreground">Transaction Amount (BHD)</label> <div class="relative"><input id="amount" type="number" step="0.001" min="0.001" placeholder="0.000" class="h-10 w-full bg-background border border-border rounded-xl pl-3 pr-12 text-xs font-mono font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground"/> <span class="absolute right-3 top-2.5 text-[10px] font-bold text-muted-foreground uppercase">BHD</span></div></div> <div class="space-y-1.5"><label for="paymentMethod" class="font-semibold text-foreground">Payment Channel</label> <select id="paymentMethod" class="h-10 w-full bg-background border border-border rounded-xl px-3 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground"><option>Cash Account</option><option>Bank Account</option></select></div></div> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><!> <!></div> <div class="space-y-1.5"><label for="description" class="font-semibold text-foreground">Description / Purpose</label> <input id="description" type="text" class="h-10 w-full bg-background border border-border rounded-xl px-3 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground"/></div> <div class="space-y-1.5"><label for="notes" class="font-semibold text-muted-foreground">Notes / Remarks (Optional)</label> <textarea id="notes" rows="2" placeholder="Add internal voucher notes or remarks..." class="w-full bg-background border border-border rounded-xl p-3 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground resize-y"></textarea></div> <!>`, 1);
var root_19 = from_html(`<div class="max-w-2xl mx-auto space-y-6 pb-12"><div class="space-y-2"><button class="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground cursor-pointer transition-colors"><!> Back to Treasury Payments</button> <div class="flex items-center justify-between"><div class="space-y-1"><h1 class="text-xl font-bold text-foreground tracking-tight">Log Financial Transaction</h1> <p class="text-xs text-muted-foreground">Record treasury payouts, general expenses, or supplier wallet & credit settlements.</p></div> <!></div></div> <div class="bg-muted/40 p-1 rounded-2xl border border-border/80 flex items-center gap-1"><button type="button"><!> <span>General Expense / Income</span></button> <button type="button"><!> <span>Supplier Wallet & Credit Payment</span></button> <button type="button"><!> <span>Staff Salary Payout</span></button></div> <form class="bg-card border border-border rounded-2xl p-6 shadow-xs space-y-5 text-xs"><!> <!> <div class="flex items-center justify-end gap-3 pt-4 border-t border-border"><!> <!></div></form></div>`);
function _page($$anchor, $$props) {
	push($$props, true);
	const $page = () => store_get(page, "$page", $$stores);
	const [$$stores, $$cleanup] = setup_stores();
	let activeTab = state("general");
	let expenseCategoryIdVal = state("");
	let amount = state("");
	let description = state("");
	let paymentMethod = state("cash");
	let sourceAccountIdVal = state("");
	let sourceBankIdVal = state("");
	let notes = state("");
	let supplierIdVal = state("");
	let supplierPaymentType = state("supplier_wallet");
	let referenceNumber = state("");
	let salaryProfiles = state(proxy([]));
	let selectedSalaryProfileId = state(0);
	const todayStr = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
	let salaryForm = proxy({
		salaryProfileId: 0,
		payrollMonth: (/* @__PURE__ */ new Date()).getMonth() + 1,
		payrollYear: (/* @__PURE__ */ new Date()).getFullYear(),
		basicSalary: 0,
		incentive: 0,
		bonus: 0,
		allowance: 0,
		deduction: 0,
		paymentMethod: "Cash Account",
		cashAccountId: null,
		bankAccountId: null,
		transactionReference: "",
		paymentDate: todayStr,
		status: "Paid",
		remarks: ""
	});
	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	];
	let categories = state(proxy([]));
	let cashAccounts = state(proxy([]));
	let bankAccounts = state(proxy([]));
	let suppliers = state(proxy([]));
	let isSubmitting = state(false);
	let isLoadingData = state(true);
	const isSupplierTransaction = user_derived(() => get(activeTab) === "supplier");
	const selectedSupplier = user_derived(() => get(suppliers).find((s) => String(s.id) === get(supplierIdVal)) || null);
	const selectedCategory = user_derived(() => get(categories).find((c) => String(c.id) === get(expenseCategoryIdVal)) || null);
	const categoryBucket = user_derived(() => get(selectedCategory)?.category || "Expenses");
	const direction = user_derived(() => getBucketDirection(get(categoryBucket), get(isSupplierTransaction) ? get(supplierPaymentType) : void 0));
	const sourceLabel = user_derived(() => getBucketSourceLabel(get(categoryBucket), get(isSupplierTransaction) ? get(supplierPaymentType) : void 0));
	const helpText = user_derived(() => getBucketHelpText(get(categoryBucket), get(isSupplierTransaction) ? get(supplierPaymentType) : void 0));
	const selectedCashAccount = user_derived(() => get(cashAccounts).find((a) => String(a.id) === get(sourceAccountIdVal)) || null);
	const selectedBankAccount = user_derived(() => get(bankAccounts).find((b) => String(b.id) === get(sourceBankIdVal)) || null);
	const calculatedSalaryNet = user_derived(() => {
		const basic = Number(salaryForm.basicSalary) || 0;
		const inc = Number(salaryForm.incentive) || 0;
		const bonus = Number(salaryForm.bonus) || 0;
		const allow = Number(salaryForm.allowance) || 0;
		const ded = Number(salaryForm.deduction) || 0;
		return Math.max(0, basic + inc + bonus + allow - ded);
	});
	async function loadDropdowns() {
		try {
			const [headersList, cashList, bankList, supplierList, salaryProfList] = await Promise.all([
				getExpenseHeaders(),
				getAccounts(),
				getBanks(),
				apiFetch("/api/supplier").catch(() => []),
				getSalaryProfiles(void 0, "Active").catch(() => [])
			]);
			set(categories, headersList, true);
			set(cashAccounts, cashList.filter((a) => a.isActive), true);
			set(bankAccounts, bankList.filter((b) => b.isActive), true);
			set(suppliers, supplierList, true);
			set(salaryProfiles, salaryProfList, true);
			if (get(cashAccounts).length > 0 && !salaryForm.cashAccountId) salaryForm.cashAccountId = get(cashAccounts)[0]?.id ?? null;
			if (get(bankAccounts).length > 0 && !salaryForm.bankAccountId) salaryForm.bankAccountId = get(bankAccounts)[0]?.id ?? null;
		} catch (err) {
			addToast(err.message || "Failed to load form dropdown data.", "error");
		} finally {
			set(isLoadingData, false);
		}
	}
	function handleTabSwitch(tab) {
		set(activeTab, tab, true);
		if (tab === "supplier" && !get(supplierPaymentType)) set(supplierPaymentType, "supplier_wallet");
	}
	function onSalaryProfileSelected(profId) {
		set(selectedSalaryProfileId, profId, true);
		salaryForm.salaryProfileId = profId;
		const prof = get(salaryProfiles).find((p) => p.id === profId);
		if (prof) {
			salaryForm.basicSalary = prof.basicSalary || 0;
			salaryForm.incentive = prof.defaultMonthlyIncentive || 0;
		}
	}
	function handleSalaryPaymentMethodChange(method) {
		salaryForm.paymentMethod = method;
		if (method === "Cash Account") {
			salaryForm.bankAccountId = null;
			if (get(cashAccounts).length > 0) salaryForm.cashAccountId = get(cashAccounts)[0]?.id ?? null;
		} else {
			salaryForm.cashAccountId = null;
			if (get(bankAccounts).length > 0) salaryForm.bankAccountId = get(bankAccounts)[0]?.id ?? null;
		}
	}
	function handleSupplierChange(id) {
		set(supplierIdVal, id, true);
		const sup = get(suppliers).find((s) => String(s.id) === id);
		if (sup) {
			if (get(supplierPaymentType) === "supplier_credit") {
				if (sup.creditWallet > 0 && !get(amount)) set(amount, sup.creditWallet.toFixed(3), true);
				set(description, `Settling credit debt for ${sup.name}`);
			} else if (get(supplierPaymentType) === "supplier_wallet") set(description, `Supplier wallet top-up for ${sup.name}`);
		}
	}
	function handleSupplierOperationChange(type) {
		set(supplierPaymentType, type, true);
		if (get(selectedSupplier)) {
			if (type === "supplier_credit") {
				if (get(selectedSupplier).creditWallet > 0) set(amount, get(selectedSupplier).creditWallet.toFixed(3), true);
				set(description, `Settling credit debt for ${get(selectedSupplier).name}`);
			} else if (type === "supplier_wallet") set(description, `Supplier wallet top-up for ${get(selectedSupplier).name}`);
			else if (type === "supplier_advance") set(description, `Advance payment to ${get(selectedSupplier).name}`);
			else if (type === "supplier_refund") set(description, `Refund received from ${get(selectedSupplier).name}`);
		}
	}
	async function handleSubmit(e) {
		e.preventDefault();
		if (get(activeTab) === "salary") {
			if (!salaryForm.salaryProfileId || salaryForm.salaryProfileId === 0) {
				addToast("Please select an employee profile.", "error");
				return;
			}
			if (salaryForm.paymentMethod === "Cash Account" && !salaryForm.cashAccountId) {
				addToast("Please select a Cash Account.", "error");
				return;
			}
			if (salaryForm.paymentMethod === "Bank Account" && !salaryForm.bankAccountId) {
				addToast("Please select a Bank Account.", "error");
				return;
			}
			set(isSubmitting, true);
			try {
				await createSalaryPayment({
					...salaryForm,
					cashAccountId: salaryForm.paymentMethod === "Cash Account" ? salaryForm.cashAccountId : null,
					bankAccountId: salaryForm.paymentMethod === "Bank Account" ? salaryForm.bankAccountId : null
				});
				addToast(`Salary payout recorded successfully (Status: ${salaryForm.status}).`, "success");
				goto("/payments");
			} catch (err) {
				addToast(err.message || "Failed to process salary payout.", "error");
			} finally {
				set(isSubmitting, false);
			}
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
		if (get(isSupplierTransaction)) {
			if (!get(supplierIdVal)) {
				addToast("Please select a Supplier.", "error");
				return;
			}
			set(isSubmitting, true);
			try {
				const supplierId = parseInt(get(supplierIdVal));
				const sourceAccountIdStr = get(paymentMethod) === "cash" ? get(sourceAccountIdVal) ? `account_${get(sourceAccountIdVal)}` : null : get(sourceBankIdVal) ? `bank_${get(sourceBankIdVal)}` : null;
				await createSupplierPayment({
					supplierId,
					amount: parsedAmount,
					paymentMethod: get(paymentMethod),
					sourceAccountId: sourceAccountIdStr,
					referenceNumber: get(referenceNumber).trim() ? get(referenceNumber).trim() : null,
					serviceType: get(supplierPaymentType),
					description: get(description).trim(),
					supplierName: get(selectedSupplier)?.name || ""
				});
				addToast("Supplier transaction recorded successfully.", "success");
				goto("/suppliers");
			} catch (err) {
				addToast(err.message || "Failed to log supplier transaction.", "error");
			} finally {
				set(isSubmitting, false);
			}
			return;
		}
		if (!get(expenseCategoryIdVal)) {
			addToast("Please select an Account Category Header.", "error");
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
				expenseDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0] ?? ""
			});
			addToast("Financial transaction recorded successfully.", "success");
			goto("/payments");
		} catch (err) {
			addToast(err.message || "Failed to log transaction.", "error");
		} finally {
			set(isSubmitting, false);
		}
	}
	onMount(async () => {
		await loadDropdowns();
		const queryTab = $page().url.searchParams.get("tab");
		const queryProfileId = $page().url.searchParams.get("profileId");
		if (queryTab === "salary" || queryProfileId) {
			set(activeTab, "salary");
			if (queryProfileId) {
				const profId = parseInt(queryProfileId, 10);
				if (!isNaN(profId)) onSalaryProfileSelected(profId);
			}
		}
		const querySupplierId = $page().url.searchParams.get("supplierId");
		const queryType = $page().url.searchParams.get("type");
		if (querySupplierId) {
			set(activeTab, "supplier");
			set(supplierIdVal, querySupplierId, true);
			if (queryType) set(supplierPaymentType, queryType, true);
			const foundSup = get(suppliers).find((s) => String(s.id) === querySupplierId);
			if (foundSup) {
				if (queryType === "supplier_credit") {
					if (foundSup.creditWallet > 0) set(amount, foundSup.creditWallet.toFixed(3), true);
					set(description, `Settling outstanding credit debt for ${foundSup.name}`);
				} else if (queryType === "supplier_wallet") set(description, `Supplier wallet top-up for ${foundSup.name}`);
			}
		}
	});
	var div = root_19();
	head("li5dy6", ($$anchor) => {
		effect(() => {
			$document.title = "Log Transaction — Accounts Portal";
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
		Arrow_down_left(child(span), { class: "h-3.5 w-3.5" });
		next();
		reset(span);
		append($$anchor, span);
	};
	var alternate = ($$anchor) => {
		var span_1 = root_1();
		Arrow_up_right(child(span_1), { class: "h-3.5 w-3.5" });
		next();
		reset(span_1);
		append($$anchor, span_1);
	};
	if_block(node_1, ($$render) => {
		if (get(direction) === "incoming") $$render(consequent);
		else $$render(alternate, -1);
	});
	reset(div_2);
	reset(div_1);
	var div_3 = sibling(div_1, 2);
	var button_1 = child(div_3);
	Receipt(child(button_1), { class: "h-4 w-4 text-primary" });
	next(2);
	reset(button_1);
	var button_2 = sibling(button_1, 2);
	Coins(child(button_2), { class: "h-4 w-4" });
	next(2);
	reset(button_2);
	var button_3 = sibling(button_2, 2);
	Wallet(child(button_3), { class: "h-4 w-4" });
	next(2);
	reset(button_3);
	reset(div_3);
	var form = sibling(div_3, 2);
	var node_7 = child(form);
	var consequent_2 = ($$anchor) => {
		var div_4 = root_5();
		var div_5 = child(div_4);
		var span_2 = child(div_5);
		Wallet(child(span_2), { class: "h-3.5 w-3.5" });
		next();
		reset(span_2);
		reset(div_5);
		var div_6 = sibling(div_5, 2);
		var select = sibling(child(div_6), 2);
		var option = child(select);
		option.value = option.__value = 0;
		each(sibling(option), 17, () => get(salaryProfiles), index, ($$anchor, p) => {
			var option_1 = root_2();
			var text = child(option_1);
			reset(option_1);
			var option_1_value = {};
			template_effect(() => {
				set_text(text, `[${get(p).portalType ?? ""}] ${get(p).employeeName ?? ""} - Code: ${get(p).employeeCode ?? ""}`);
				if (option_1_value !== (option_1_value = get(p).id)) option_1.value = (option_1.__value = get(p).id) ?? "";
			});
			append($$anchor, option_1);
		});
		reset(select);
		reset(div_6);
		var div_7 = sibling(div_6, 2);
		var div_8 = child(div_7);
		var select_1 = sibling(child(div_8), 2);
		each(select_1, 21, () => months, index, ($$anchor, m, idx) => {
			var option_2 = root_2();
			var text_1 = child(option_2);
			reset(option_2);
			option_2.value = option_2.__value = idx + 1;
			template_effect(() => set_text(text_1, `${get(m) ?? ""} (${idx + 1})`));
			append($$anchor, option_2);
		});
		reset(select_1);
		reset(div_8);
		var div_9 = sibling(div_8, 2);
		var input = sibling(child(div_9), 2);
		remove_input_defaults(input);
		reset(div_9);
		reset(div_7);
		var div_10 = sibling(div_7, 2);
		var div_11 = sibling(child(div_10), 2);
		var div_12 = child(div_11);
		var input_1 = sibling(child(div_12), 2);
		remove_input_defaults(input_1);
		reset(div_12);
		var div_13 = sibling(div_12, 2);
		var input_2 = sibling(child(div_13), 2);
		remove_input_defaults(input_2);
		reset(div_13);
		var div_14 = sibling(div_13, 2);
		var input_3 = sibling(child(div_14), 2);
		remove_input_defaults(input_3);
		reset(div_14);
		var div_15 = sibling(div_14, 2);
		var input_4 = sibling(child(div_15), 2);
		remove_input_defaults(input_4);
		reset(div_15);
		var div_16 = sibling(div_15, 2);
		var input_5 = sibling(child(div_16), 2);
		remove_input_defaults(input_5);
		reset(div_16);
		reset(div_11);
		var div_17 = sibling(div_11, 2);
		var div_18 = sibling(child(div_17), 2);
		var text_2 = child(div_18);
		reset(div_18);
		reset(div_17);
		reset(div_10);
		var div_19 = sibling(div_10, 2);
		var div_20 = sibling(child(div_19), 2);
		var button_4 = child(div_20);
		Landmark(child(button_4), { class: "h-4 w-4" });
		next(2);
		reset(button_4);
		var button_5 = sibling(button_4, 2);
		Building_2(child(button_5), { class: "h-4 w-4" });
		next(2);
		reset(button_5);
		reset(div_20);
		var node_12 = sibling(div_20, 2);
		var consequent_1 = ($$anchor) => {
			var div_21 = root_3();
			var select_2 = sibling(child(div_21), 2);
			each(select_2, 21, () => get(cashAccounts), index, ($$anchor, acc) => {
				var option_3 = root_2();
				var text_3 = child(option_3);
				reset(option_3);
				var option_3_value = {};
				template_effect(($0) => {
					set_text(text_3, `${get(acc).name ?? ""} (${$0 ?? ""} BHD)`);
					if (option_3_value !== (option_3_value = get(acc).id)) option_3.value = (option_3.__value = get(acc).id) ?? "";
				}, [() => get(acc).currentBalance.toFixed(3)]);
				append($$anchor, option_3);
			});
			reset(select_2);
			reset(div_21);
			bind_select_value(select_2, () => salaryForm.cashAccountId, ($$value) => salaryForm.cashAccountId = $$value);
			append($$anchor, div_21);
		};
		var alternate_1 = ($$anchor) => {
			var div_22 = root_4();
			var select_3 = sibling(child(div_22), 2);
			each(select_3, 21, () => get(bankAccounts), index, ($$anchor, b) => {
				var option_4 = root_2();
				var text_4 = child(option_4);
				reset(option_4);
				var option_4_value = {};
				template_effect(($0) => {
					set_text(text_4, `${get(b).bankName ?? ""} - ${get(b).accountNumber ?? ""} (${$0 ?? ""} BHD)`);
					if (option_4_value !== (option_4_value = get(b).id)) option_4.value = (option_4.__value = get(b).id) ?? "";
				}, [() => get(b).currentBalance.toFixed(3)]);
				append($$anchor, option_4);
			});
			reset(select_3);
			reset(div_22);
			bind_select_value(select_3, () => salaryForm.bankAccountId, ($$value) => salaryForm.bankAccountId = $$value);
			append($$anchor, div_22);
		};
		if_block(node_12, ($$render) => {
			if (salaryForm.paymentMethod === "Cash Account") $$render(consequent_1);
			else $$render(alternate_1, -1);
		});
		reset(div_19);
		var div_23 = sibling(div_19, 2);
		var div_24 = child(div_23);
		var input_6 = sibling(child(div_24), 2);
		remove_input_defaults(input_6);
		reset(div_24);
		var div_25 = sibling(div_24, 2);
		var input_7 = sibling(child(div_25), 2);
		remove_input_defaults(input_7);
		reset(div_25);
		var div_26 = sibling(div_25, 2);
		var select_4 = sibling(child(div_26), 2);
		var option_5 = child(select_4);
		option_5.value = option_5.__value = "Paid";
		var option_6 = sibling(option_5);
		option_6.value = option_6.__value = "Pending";
		reset(select_4);
		reset(div_26);
		reset(div_23);
		var div_27 = sibling(div_23, 2);
		var input_8 = sibling(child(div_27), 2);
		remove_input_defaults(input_8);
		reset(div_27);
		reset(div_4);
		template_effect(($0) => {
			set_text(text_2, `${$0 ?? ""} BHD`);
			set_class(button_4, 1, `py-2 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center justify-center gap-2
								${salaryForm.paymentMethod === "Cash Account" ? "bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500 shadow-xs" : "border-border text-muted-foreground hover:bg-muted"}`);
			set_class(button_5, 1, `py-2 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center justify-center gap-2
								${salaryForm.paymentMethod === "Bank Account" ? "bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500 shadow-xs" : "border-border text-muted-foreground hover:bg-muted"}`);
		}, [() => get(calculatedSalaryNet).toFixed(3)]);
		delegated("change", select, (e) => onSalaryProfileSelected(parseInt(e.currentTarget.value, 10)));
		bind_select_value(select, () => get(selectedSalaryProfileId), ($$value) => set(selectedSalaryProfileId, $$value));
		bind_select_value(select_1, () => salaryForm.payrollMonth, ($$value) => salaryForm.payrollMonth = $$value);
		bind_value(input, () => salaryForm.payrollYear, ($$value) => salaryForm.payrollYear = $$value);
		bind_value(input_1, () => salaryForm.basicSalary, ($$value) => salaryForm.basicSalary = $$value);
		bind_value(input_2, () => salaryForm.incentive, ($$value) => salaryForm.incentive = $$value);
		bind_value(input_3, () => salaryForm.bonus, ($$value) => salaryForm.bonus = $$value);
		bind_value(input_4, () => salaryForm.allowance, ($$value) => salaryForm.allowance = $$value);
		bind_value(input_5, () => salaryForm.deduction, ($$value) => salaryForm.deduction = $$value);
		delegated("click", button_4, () => handleSalaryPaymentMethodChange("Cash Account"));
		delegated("click", button_5, () => handleSalaryPaymentMethodChange("Bank Account"));
		bind_value(input_6, () => salaryForm.transactionReference, ($$value) => salaryForm.transactionReference = $$value);
		bind_value(input_7, () => salaryForm.paymentDate, ($$value) => salaryForm.paymentDate = $$value);
		bind_select_value(select_4, () => salaryForm.status, ($$value) => salaryForm.status = $$value);
		bind_value(input_8, () => salaryForm.remarks, ($$value) => salaryForm.remarks = $$value);
		append($$anchor, div_4);
	};
	var consequent_5 = ($$anchor) => {
		var div_28 = root_8();
		var div_29 = child(div_28);
		var span_3 = child(div_29);
		Coins(child(span_3), { class: "h-3.5 w-3.5" });
		next();
		reset(span_3);
		var node_14 = sibling(span_3, 2);
		var consequent_3 = ($$anchor) => {
			var span_4 = root_6();
			var text_5 = child(span_4, true);
			reset(span_4);
			template_effect(() => set_text(text_5, get(selectedSupplier).code));
			append($$anchor, span_4);
		};
		if_block(node_14, ($$render) => {
			if (get(selectedSupplier)) $$render(consequent_3);
		});
		reset(div_29);
		var div_30 = sibling(div_29, 2);
		var div_31 = child(div_30);
		var select_5 = sibling(child(div_31), 2);
		var option_7 = child(select_5);
		option_7.value = option_7.__value = "";
		each(sibling(option_7), 17, () => get(suppliers), index, ($$anchor, sup) => {
			var option_8 = root_2();
			var text_6 = child(option_8);
			reset(option_8);
			var option_8_value = {};
			template_effect(($0) => {
				set_text(text_6, `${get(sup).name ?? ""} (${get(sup).code ?? ""})`);
				if (option_8_value !== (option_8_value = $0)) option_8.value = (option_8.__value = $0) ?? "";
			}, [() => String(get(sup).id)]);
			append($$anchor, option_8);
		});
		reset(select_5);
		var select_5_value;
		init_select(select_5);
		reset(div_31);
		var div_32 = sibling(div_31, 2);
		var select_6 = sibling(child(div_32), 2);
		var option_9 = child(select_6);
		option_9.value = option_9.__value = "supplier_wallet";
		var option_10 = sibling(option_9);
		option_10.value = option_10.__value = "supplier_credit";
		var option_11 = sibling(option_10);
		option_11.value = option_11.__value = "supplier_advance";
		var option_12 = sibling(option_11);
		option_12.value = option_12.__value = "supplier_refund";
		reset(select_6);
		var select_6_value;
		init_select(select_6);
		reset(div_32);
		reset(div_30);
		var node_16 = sibling(div_30, 2);
		var consequent_4 = ($$anchor) => {
			var div_33 = root_7();
			var div_34 = child(div_33);
			var span_5 = sibling(child(div_34), 2);
			var text_7 = child(span_5);
			reset(span_5);
			reset(div_34);
			var div_35 = sibling(div_34, 2);
			var span_6 = sibling(child(div_35), 2);
			var text_8 = child(span_6);
			reset(span_6);
			reset(div_35);
			reset(div_33);
			template_effect(($0, $1) => {
				set_text(text_7, `${$0 ?? ""} BHD`);
				set_text(text_8, `${$1 ?? ""} BHD`);
			}, [() => get(selectedSupplier).wallet.toFixed(3), () => get(selectedSupplier).creditWallet.toFixed(3)]);
			append($$anchor, div_33);
		};
		if_block(node_16, ($$render) => {
			if (get(selectedSupplier)) $$render(consequent_4);
		});
		reset(div_28);
		template_effect(() => {
			if (select_5_value !== (select_5_value = get(supplierIdVal))) select_5.value = (select_5.__value = get(supplierIdVal)) ?? "", select_option(select_5, get(supplierIdVal));
			if (select_6_value !== (select_6_value = get(supplierPaymentType))) select_6.value = (select_6.__value = get(supplierPaymentType)) ?? "", select_option(select_6, get(supplierPaymentType));
		});
		delegated("change", select_5, (e) => handleSupplierChange(e.target.value));
		delegated("change", select_6, (e) => handleSupplierOperationChange(e.target.value));
		append($$anchor, div_28);
	};
	var alternate_2 = ($$anchor) => {
		var fragment = root_10();
		var div_36 = first_child(fragment);
		var select_7 = sibling(child(div_36), 2);
		var option_13 = child(select_7);
		option_13.value = option_13.__value = "";
		each(sibling(option_13), 17, () => get(categories), index, ($$anchor, cat) => {
			var option_14 = root_2();
			var text_9 = child(option_14);
			reset(option_14);
			var option_14_value = {};
			template_effect(($0) => {
				set_text(text_9, `${get(cat).name ?? ""} (${get(cat).category ?? ""})`);
				if (option_14_value !== (option_14_value = $0)) option_14.value = (option_14.__value = $0) ?? "";
			}, [() => String(get(cat).id)]);
			append($$anchor, option_14);
		});
		reset(select_7);
		reset(div_36);
		var node_18 = sibling(div_36, 2);
		var consequent_6 = ($$anchor) => {
			var div_37 = root_9();
			var node_19 = child(div_37);
			Circle_question_mark(node_19, { class: "h-4 w-4 text-primary shrink-0 mt-0.5" });
			var div_38 = sibling(node_19, 2);
			var span_7 = child(div_38);
			var text_10 = child(span_7);
			reset(span_7);
			var p_1 = sibling(span_7, 2);
			var text_11 = child(p_1, true);
			reset(p_1);
			reset(div_38);
			reset(div_37);
			template_effect(() => {
				set_text(text_10, `${get(selectedCategory).name ?? ""} (${get(categoryBucket) ?? ""})`);
				set_text(text_11, get(helpText));
			});
			append($$anchor, div_37);
		};
		if_block(node_18, ($$render) => {
			if (get(selectedCategory)) $$render(consequent_6);
		});
		template_effect(() => select_7.disabled = get(isLoadingData));
		bind_select_value(select_7, () => get(expenseCategoryIdVal), ($$value) => set(expenseCategoryIdVal, $$value));
		append($$anchor, fragment);
	};
	if_block(node_7, ($$render) => {
		if (get(activeTab) === "salary") $$render(consequent_2);
		else if (get(activeTab) === "supplier") $$render(consequent_5, 1);
		else $$render(alternate_2, -1);
	});
	var node_20 = sibling(node_7, 2);
	var consequent_14 = ($$anchor) => {
		var fragment_1 = root_18();
		var div_39 = first_child(fragment_1);
		var div_40 = child(div_39);
		var div_41 = sibling(child(div_40), 2);
		var input_9 = child(div_41);
		remove_input_defaults(input_9);
		next(2);
		reset(div_41);
		reset(div_40);
		var div_42 = sibling(div_40, 2);
		var select_8 = sibling(child(div_42), 2);
		var option_15 = child(select_8);
		option_15.value = option_15.__value = "cash";
		var option_16 = sibling(option_15);
		option_16.value = option_16.__value = "bank";
		reset(select_8);
		reset(div_42);
		reset(div_39);
		var div_43 = sibling(div_39, 2);
		var node_21 = child(div_43);
		var consequent_8 = ($$anchor) => {
			var div_44 = root_12();
			var label = child(div_44);
			var span_8 = child(label);
			var text_12 = child(span_8);
			reset(span_8);
			var node_22 = sibling(span_8, 2);
			var consequent_7 = ($$anchor) => {
				var span_9 = root_11();
				var text_13 = child(span_9);
				reset(span_9);
				template_effect(($0) => set_text(text_13, `Bal: ${$0 ?? ""} BHD`), [() => get(selectedCashAccount).currentBalance.toFixed(3)]);
				append($$anchor, span_9);
			};
			if_block(node_22, ($$render) => {
				if (get(selectedCashAccount)) $$render(consequent_7);
			});
			reset(label);
			var select_9 = sibling(label, 2);
			var option_17 = child(select_9);
			var text_14 = child(option_17);
			reset(option_17);
			option_17.value = option_17.__value = "";
			each(sibling(option_17), 17, () => get(cashAccounts), index, ($$anchor, acc) => {
				var option_18 = root_2();
				var text_15 = child(option_18);
				reset(option_18);
				var option_18_value = {};
				template_effect(($0, $1) => {
					set_text(text_15, `${get(acc).name ?? ""} (${$0 ?? ""} BHD)`);
					if (option_18_value !== (option_18_value = $1)) option_18.value = (option_18.__value = $1) ?? "";
				}, [() => get(acc).currentBalance.toFixed(3), () => String(get(acc).id)]);
				append($$anchor, option_18);
			});
			reset(select_9);
			reset(div_44);
			template_effect(() => {
				set_text(text_12, `${get(sourceLabel) ?? ""} Cash Account`);
				select_9.disabled = get(isLoadingData);
				set_text(text_14, `-- Select ${get(sourceLabel) ?? ""} Cash Account --`);
			});
			bind_select_value(select_9, () => get(sourceAccountIdVal), ($$value) => set(sourceAccountIdVal, $$value));
			append($$anchor, div_44);
		};
		var alternate_3 = ($$anchor) => {
			var div_45 = root_13();
			var label_1 = child(div_45);
			var span_10 = child(label_1);
			var text_16 = child(span_10);
			reset(span_10);
			var node_24 = sibling(span_10, 2);
			var consequent_9 = ($$anchor) => {
				var span_11 = root_11();
				var text_17 = child(span_11);
				reset(span_11);
				template_effect(($0) => set_text(text_17, `Bal: ${$0 ?? ""} BHD`), [() => get(selectedBankAccount).currentBalance.toFixed(3)]);
				append($$anchor, span_11);
			};
			if_block(node_24, ($$render) => {
				if (get(selectedBankAccount)) $$render(consequent_9);
			});
			reset(label_1);
			var select_10 = sibling(label_1, 2);
			var option_19 = child(select_10);
			var text_18 = child(option_19);
			reset(option_19);
			option_19.value = option_19.__value = "";
			each(sibling(option_19), 17, () => get(bankAccounts), index, ($$anchor, bank) => {
				var option_20 = root_2();
				var text_19 = child(option_20);
				reset(option_20);
				var option_20_value = {};
				template_effect(($0, $1) => {
					set_text(text_19, `${get(bank).bankName ?? ""} (${$0 ?? ""} BHD)`);
					if (option_20_value !== (option_20_value = $1)) option_20.value = (option_20.__value = $1) ?? "";
				}, [() => get(bank).currentBalance.toFixed(3), () => String(get(bank).id)]);
				append($$anchor, option_20);
			});
			reset(select_10);
			reset(div_45);
			template_effect(() => {
				set_text(text_16, `${get(sourceLabel) ?? ""} Bank Account`);
				select_10.disabled = get(isLoadingData);
				set_text(text_18, `-- Select ${get(sourceLabel) ?? ""} Bank Account --`);
			});
			bind_select_value(select_10, () => get(sourceBankIdVal), ($$value) => set(sourceBankIdVal, $$value));
			append($$anchor, div_45);
		};
		if_block(node_21, ($$render) => {
			if (get(paymentMethod) === "cash") $$render(consequent_8);
			else $$render(alternate_3, -1);
		});
		var node_26 = sibling(node_21, 2);
		var consequent_10 = ($$anchor) => {
			var div_46 = root_14();
			var input_10 = sibling(child(div_46), 2);
			remove_input_defaults(input_10);
			reset(div_46);
			bind_value(input_10, () => get(referenceNumber), ($$value) => set(referenceNumber, $$value));
			append($$anchor, div_46);
		};
		if_block(node_26, ($$render) => {
			if (get(isSupplierTransaction)) $$render(consequent_10);
		});
		reset(div_43);
		var div_47 = sibling(div_43, 2);
		var input_11 = sibling(child(div_47), 2);
		remove_input_defaults(input_11);
		reset(div_47);
		var div_48 = sibling(div_47, 2);
		var textarea = sibling(child(div_48), 2);
		remove_textarea_child(textarea);
		reset(div_48);
		var node_27 = sibling(div_48, 2);
		var consequent_13 = ($$anchor) => {
			var div_49 = root_17();
			var div_50 = child(div_49);
			Sparkles(child(div_50), { class: "h-4 w-4" });
			next(2);
			reset(div_50);
			var p_2 = sibling(div_50, 2);
			var node_29 = child(p_2);
			var consequent_11 = ($$anchor) => {
				var fragment_2 = root_15();
				var strong = sibling(first_child(fragment_2));
				var text_20 = child(strong);
				reset(strong);
				var strong_1 = sibling(strong, 2);
				var text_21 = child(strong_1, true);
				reset(strong_1);
				var text_22 = sibling(strong_1);
				template_effect(($0) => {
					set_text(text_20, `${$0 ?? ""} BHD`);
					set_text(text_21, get(paymentMethod) === "cash" ? get(selectedCashAccount)?.name || "Cash Account" : get(selectedBankAccount)?.bankName || "Bank Account");
					set_text(text_22, ` to ${get(selectedSupplier).name ?? ""} (${get(supplierPaymentType) === "supplier_credit" ? "Credit Debt Settlement" : "Prepaid Wallet Top-up"}).`);
				}, [() => parseFloat(get(amount) || "0").toFixed(3)]);
				append($$anchor, fragment_2);
			};
			var consequent_12 = ($$anchor) => {
				var fragment_3 = root_16();
				var strong_2 = sibling(first_child(fragment_3));
				var text_23 = child(strong_2);
				reset(strong_2);
				var strong_3 = sibling(strong_2, 2);
				var text_24 = child(strong_3);
				reset(strong_3);
				var strong_4 = sibling(strong_3, 2);
				var text_25 = child(strong_4, true);
				reset(strong_4);
				next();
				template_effect(($0) => {
					set_text(text_23, `${$0 ?? ""} BHD`);
					set_text(text_24, `${get(selectedCategory).name ?? ""} (${get(categoryBucket) ?? ""})`);
					set_text(text_25, get(paymentMethod) === "cash" ? get(selectedCashAccount)?.name || "Cash Account" : get(selectedBankAccount)?.bankName || "Bank Account");
				}, [() => parseFloat(get(amount) || "0").toFixed(3)]);
				append($$anchor, fragment_3);
			};
			if_block(node_29, ($$render) => {
				if (get(isSupplierTransaction) && get(selectedSupplier)) $$render(consequent_11);
				else if (get(selectedCategory)) $$render(consequent_12, 1);
			});
			reset(p_2);
			reset(div_49);
			append($$anchor, div_49);
		};
		if_block(node_27, ($$render) => {
			if (get(amount) && (get(selectedSupplier) || get(selectedCategory))) $$render(consequent_13);
		});
		template_effect(() => {
			input_9.required = get(activeTab) !== "salary";
			input_11.required = get(activeTab) !== "salary";
			set_attribute(input_11, "placeholder", get(isSupplierTransaction) ? "e.g. Supplier wallet top-up / Credit debt settlement" : "e.g. Office rent payment / Equipment purchase");
		});
		bind_value(input_9, () => get(amount), ($$value) => set(amount, $$value));
		bind_select_value(select_8, () => get(paymentMethod), ($$value) => set(paymentMethod, $$value));
		bind_value(input_11, () => get(description), ($$value) => set(description, $$value));
		bind_value(textarea, () => get(notes), ($$value) => set(notes, $$value));
		append($$anchor, fragment_1);
	};
	if_block(node_20, ($$render) => {
		if (get(activeTab) !== "salary") $$render(consequent_14);
	});
	var div_51 = sibling(node_20, 2);
	var node_30 = child(div_51);
	Button(node_30, {
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
	var node_31 = sibling(node_30, 2);
	{
		let $0 = user_derived(() => get(activeTab) === "salary" ? "bg-amber-600 hover:bg-amber-700 text-white" : get(activeTab) === "supplier" ? "bg-purple-600 hover:bg-purple-700 text-white" : "");
		let $1 = user_derived(() => get(isSubmitting) || get(isLoadingData));
		Button(node_31, {
			type: "submit",
			get class() {
				return `rounded-xl px-6 py-4.5 font-semibold cursor-pointer shadow-sm ${get($0) ?? ""}`;
			},
			get disabled() {
				return get($1);
			},
			children: ($$anchor, $$slotProps) => {
				next();
				var text_27 = text();
				template_effect(() => set_text(text_27, get(isSubmitting) ? "Posting..." : get(activeTab) === "salary" ? "Post Salary Payout" : get(isSupplierTransaction) ? "Post Supplier Transaction" : "Log Transaction"));
				append($$anchor, text_27);
			},
			$$slots: { default: true }
		});
	}
	reset(div_51);
	reset(form);
	reset(div);
	template_effect(() => {
		set_class(button_1, 1, `flex-1 py-2.5 px-4 rounded-xl font-semibold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer ${get(activeTab) === "general" ? "bg-card text-foreground shadow-xs border border-border" : "text-muted-foreground hover:text-foreground"}`);
		set_class(button_2, 1, `flex-1 py-2.5 px-4 rounded-xl font-semibold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer ${get(activeTab) === "supplier" ? "bg-purple-600 text-white shadow-sm" : "text-muted-foreground hover:text-foreground"}`);
		set_class(button_3, 1, `flex-1 py-2.5 px-4 rounded-xl font-semibold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer ${get(activeTab) === "salary" ? "bg-amber-600 text-white shadow-sm" : "text-muted-foreground hover:text-foreground"}`);
	});
	delegated("click", button, () => goto("/payments"));
	delegated("click", button_1, () => handleTabSwitch("general"));
	delegated("click", button_2, () => handleTabSwitch("supplier"));
	delegated("click", button_3, () => handleTabSwitch("salary"));
	event("submit", form, handleSubmit);
	append($$anchor, div);
	pop();
	$$cleanup();
}
delegate(["click", "change"]);
//#endregion
export { _page as component };

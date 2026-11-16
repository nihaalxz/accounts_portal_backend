import { B as append, Bt as reset, Ct as user_derived, D as head, Et as store_get, H as from_html, I as if_block, K as delegate, M as slot, N as each, Nt as pop, P as index, Pt as push, Q as get, R as set_text, Tt as setup_stores, V as comment, _ as set_attribute, a as legacy_rest_props, bt as state, c as spread_props, dt as $document, ht as sibling, mt as first_child, n as onDestroy, ot as template_effect, pt as child, q as delegated, r as onMount, rt as deferred_template_effect, vt as set, w as set_class, zt as next } from "../chunks/dXkmWTgM.js";
import { t as goto } from "../chunks/8Ddi3Fq2.js";
import "../chunks/DhaYE-8x.js";
import { i as hasRole } from "../chunks/14iLMpN9.js";
import "../chunks/DZfWAsjW.js";
import { r as toast } from "../chunks/CbPRQHfn.js";
import { t as Icon } from "../chunks/BalaELqB.js";
import { t as Arrow_left } from "../chunks/Bn7x0kyr.js";
import { t as Arrow_right } from "../chunks/DZE4Pk63.js";
import { t as Ban } from "../chunks/CCPC6kzk.js";
import { t as Book_open } from "../chunks/E5UrMlE0.js";
import { t as Building_2 } from "../chunks/PAfPMPpZ.js";
import { t as Check } from "../chunks/blG6JRe7.js";
import { t as External_link } from "../chunks/ifddzD342.js";
import { t as Scale } from "../chunks/C0w_H_EC.js";
import { t as User } from "../chunks/C8PICJbu.js";
import { t as Wallet } from "../chunks/BahXSy4P.js";
import { t as page } from "../chunks/BL5SwgiJ.js";
import { t as Button } from "../chunks/BhXsq3bC.js";
import { t as ErrorState } from "../chunks/CRMNR9wu.js";
import "../chunks/BhENg3py.js";
import { t as MoneyDisplay } from "../chunks/CIVSRuaR2.js";
import { t as DateDisplay } from "../chunks/DEr_pDJT2.js";
import "../chunks/CS-Kx6i02.js";
import { l as getPaymentMethodLabel, u as getReferenceTypeLabel } from "../chunks/DNQc_ysr2.js";
import { i as getTransactionById } from "../chunks/D2MzsOh32.js";
import { t as FormattedNarrative } from "../chunks/CHiWmlVe2.js";
import { t as ConflictDialog } from "../chunks/BQhkmUhN2.js";
import { n as FinancialStatusBadge, t as TransactionTypeChip } from "../chunks/Dxh8BGmS.js";
import { n as TransactionApproveDialog, t as TransactionRejectDialog } from "../chunks/BtqpXrDE.js";
//#region node_modules/lucide-svelte/dist/icons/copy.svelte
function Copy($$anchor, $$props) {
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
	const iconNode = [["rect", {
		"width": "14",
		"height": "14",
		"x": "8",
		"y": "8",
		"rx": "2",
		"ry": "2"
	}], ["path", { "d": "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }]];
	/**
	* @component @name Copy
	* @description Lucide SVG icon component, renders SVG Element with children.
	*
	* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHg9IjgiIHk9IjgiIHJ4PSIyIiByeT0iMiIgLz4KICA8cGF0aCBkPSJNNCAxNmMtMS4xIDAtMi0uOS0yLTJWNGMwLTEuMS45LTIgMi0yaDEwYzEuMSAwIDIgLjkgMiAyIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/copy
	* @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
	*
	* @param {Object} props - Lucide icons props and any valid SVG attribute
	* @returns {FunctionalComponent} Svelte component
	*
	*/
	Icon($$anchor, spread_props({ name: "copy" }, () => $$sanitized_props, {
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
//#region src/routes/(app)/transactions/[id]/+page.svelte
var root = from_html(`<!> <span>Copy Document Number</span>`, 1);
var root_1 = from_html(`<div class="flex items-center gap-2"><!></div>`);
var root_2 = from_html(`<div class="animate-pulse space-y-6"><div class="h-20 bg-card rounded-3xl border border-border"></div> <div class="h-44 bg-card rounded-3xl border border-border"></div> <div class="h-64 bg-card rounded-3xl border border-border"></div></div>`);
var root_3 = from_html(`<!> Reject`, 1);
var root_4 = from_html(`<!> Approve Posting`, 1);
var root_5 = from_html(`<div class="flex items-center gap-2"><!> <!></div>`);
var root_6 = from_html(`<!> <div><span class="font-bold text-sm block leading-tight"> </span> <span class="text-[10px] text-muted-foreground capitalize"> </span></div>`, 1);
var root_7 = from_html(`<!> <div><span class="font-bold text-sm block leading-tight"> </span> <span class="text-[10px] text-muted-foreground">Bank Account</span></div>`, 1);
var root_8 = from_html(`<!> <div><span class="font-bold text-sm block leading-tight"> </span> <span class="text-[10px] text-muted-foreground">Cash Account / Drawer</span></div>`, 1);
var root_9 = from_html(`<!> <div><span class="font-bold text-sm block leading-tight">Cash Drawer / Internal</span> <span class="text-[10px] text-muted-foreground">Primary Cash Holding</span></div>`, 1);
var root_10 = from_html(`<!> <div><span class="font-bold text-sm block leading-tight">Accounts Ledger</span> <span class="text-[10px] text-muted-foreground">General Ledger Account</span></div>`, 1);
var root_11 = from_html(`<div class="flex justify-between items-center py-1 border-b border-border/40"><span class="text-muted-foreground font-medium"> </span> <span class="font-bold text-foreground"> </span></div>`);
var root_12 = from_html(`<div class="flex justify-between items-center py-1 border-b border-border/40"><span class="text-muted-foreground font-medium">Supplier</span> <span class="font-bold text-foreground"> </span></div>`);
var root_13 = from_html(`<div class="flex justify-between items-center py-1 border-b border-border/40"><span class="text-muted-foreground font-medium">Approved By</span> <span class="font-bold text-emerald-600 dark:text-emerald-400"> </span></div>`);
var root_14 = from_html(`<div class="flex justify-between items-center py-1 border-b border-border/40"><span class="text-muted-foreground font-medium">Rejected By</span> <span class="font-bold text-rose-600 dark:text-rose-400"> </span></div>`);
var root_15 = from_html(`<div class="pt-2"><a class="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"><!> <span> </span></a></div>`);
var root_16 = from_html(`<span class="text-muted-foreground/40">—</span>`);
var root_17 = from_html(`<tr class="hover:bg-muted/10 transition-colors font-medium"><td class="p-3 font-mono font-bold"> </td><td class="p-3 text-foreground font-semibold"> </td><td class="p-3"><span> </span></td><td class="p-3 text-muted-foreground text-[11px]"> </td><td class="p-3 text-right font-mono font-semibold"><!></td><td class="p-3 text-right font-mono font-semibold"><!></td></tr>`);
var root_18 = from_html(`<div class="bg-card border border-border rounded-3xl p-6 space-y-4 shadow-xs"><div class="flex items-center justify-between border-b border-border/60 pb-3"><div class="flex items-center gap-2"><!> <h3 class="text-xs font-bold text-muted-foreground uppercase tracking-wider">General Ledger Posting Impact</h3></div> <div class="flex items-center gap-2 text-xs"><!> <span> </span></div></div> <div class="overflow-x-auto"><table class="w-full text-left border-collapse text-xs"><thead><tr class="bg-muted/30 border-b border-border text-muted-foreground font-semibold uppercase text-[10px]"><th class="p-3">Account Code</th><th class="p-3">Account Name</th><th class="p-3">Entry Type</th><th class="p-3">Line Description</th><th class="p-3 text-right">Debit</th><th class="p-3 text-right">Credit</th></tr></thead><tbody class="divide-y divide-border/60"></tbody><tfoot><tr class="border-t-2 border-border font-bold bg-muted/20 text-xs"><td colspan="4" class="p-3 text-right uppercase tracking-wider text-muted-foreground">Totals</td><td class="p-3 text-right font-mono text-emerald-600 dark:text-emerald-400"><!></td><td class="p-3 text-right font-mono text-blue-600 dark:text-blue-400"><!></td></tr></tfoot></table></div></div>`);
var root_19 = from_html(`<div class="bg-card border border-border rounded-3xl p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6"><div class="space-y-2"><div class="flex items-center gap-3"><h1 class="text-xl font-extrabold text-foreground"> </h1> <!> <!></div> <p class="text-xs text-muted-foreground flex items-center gap-2"><span>Initiated by <strong class="text-foreground"> </strong></span> <span>•</span> <!></p></div> <div class="flex flex-col md:items-end gap-3"><div class="text-left md:text-right"><span class="text-[10px] text-muted-foreground uppercase font-bold tracking-wider block">Total Amount</span> <span class="text-3xl font-extrabold font-mono text-foreground"><!></span></div> <!></div></div> <div class="bg-card border border-border rounded-3xl p-6 space-y-4 shadow-xs"><h3 class="text-xs font-bold text-muted-foreground uppercase tracking-wider border-b border-border/60 pb-2">Financial Flow Diagram</h3> <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-center"><div class="p-4 rounded-2xl border border-border bg-muted/20 space-y-2"><span class="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block">Money Source</span> <div class="flex items-center gap-2"><!></div></div> <div class="flex flex-col items-center justify-center space-y-1 py-2"><div class="flex items-center gap-2 text-xs font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20"><span><!></span> <!></div> <span class="text-[10px] text-muted-foreground uppercase font-semibold"> </span></div> <div class="p-4 rounded-2xl border border-border bg-muted/20 space-y-2"><span class="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block">Money Destination</span> <div class="flex items-center gap-2"><!></div></div></div></div> <div class="bg-primary/5 border border-primary/20 rounded-3xl p-6 space-y-2"><span class="text-[10px] font-bold text-primary uppercase tracking-wider block">Human-Readable Narrative</span> <p class="text-base font-semibold text-foreground leading-relaxed"><!></p></div> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div class="bg-card border border-border rounded-3xl p-6 space-y-4 shadow-xs"><h3 class="text-xs font-bold text-muted-foreground uppercase tracking-wider border-b border-border/60 pb-2">Party & Counterparties</h3> <div class="space-y-3 text-xs"><!> <!> <div class="flex justify-between items-center py-1 border-b border-border/40"><span class="text-muted-foreground font-medium">Initiated By</span> <span class="font-bold text-foreground"> </span></div> <!> <!></div></div> <div class="bg-card border border-border rounded-3xl p-6 space-y-4 shadow-xs"><h3 class="text-xs font-bold text-muted-foreground uppercase tracking-wider border-b border-border/60 pb-2">Originating Business Record</h3> <div class="space-y-3 text-xs"><div class="flex justify-between items-center py-1 border-b border-border/40"><span class="text-muted-foreground font-medium">Reference Type</span> <span class="font-semibold uppercase"> </span></div> <div class="flex justify-between items-center py-1 border-b border-border/40"><span class="text-muted-foreground font-medium">Reference ID</span> <span class="font-mono font-bold"> </span></div> <!></div></div></div> <!>`, 1);
var root_20 = from_html(`<div class="space-y-6"><div class="flex items-center justify-between"><button class="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground cursor-pointer transition-colors"><!> <span>Back to Transactions List</span></button> <!></div> <!></div> <!> <!> <!>`, 1);
function _page($$anchor, $$props) {
	push($$props, true);
	const $page = () => store_get(page, "$page", $$stores);
	const [$$stores, $$cleanup] = setup_stores();
	const txId = parseInt($page().params.id ?? "", 10);
	let transaction = state(null);
	let loading = state(true);
	let errorMsg = state(null);
	let correlationId = state("");
	let approveDialogOpen = state(false);
	let rejectDialogOpen = state(false);
	let conflictDialogOpen = state(false);
	let abortController = null;
	let totalDebits = user_derived(() => get(transaction)?.glPostings ? get(transaction).glPostings.reduce((sum, g) => sum + (g.debit || 0), 0) : 0);
	let totalCredits = user_derived(() => get(transaction)?.glPostings ? get(transaction).glPostings.reduce((sum, g) => sum + (g.credit || 0), 0) : 0);
	let isGlBalanced = user_derived(() => get(transaction)?.glPostings && get(transaction).glPostings.length > 0 ? Math.abs(get(totalDebits) - get(totalCredits)) < 1e-4 : true);
	async function loadTransactionDetail() {
		set(loading, true);
		set(errorMsg, null);
		set(correlationId, "");
		if (isNaN(txId) || txId <= 0) {
			set(errorMsg, "Invalid transaction reference ID.");
			set(loading, false);
			return;
		}
		if (abortController) abortController.abort();
		abortController = new AbortController();
		try {
			const res = await getTransactionById(txId, abortController.signal);
			set(transaction, res, true);
		} catch (err) {
			if (err.name === "AbortError") return;
			set(errorMsg, err.message || `Failed to fetch transaction #${txId} details.`, true);
			set(correlationId, err.correlationId || "", true);
		} finally {
			set(loading, false);
		}
	}
	function handleActionSuccess() {
		loadTransactionDetail();
	}
	function copyToClipboard(text, label) {
		navigator.clipboard.writeText(text);
		toast.success(`${label} copied to clipboard.`);
	}
	onMount(() => {
		loadTransactionDetail();
	});
	onDestroy(() => {
		if (abortController) abortController.abort();
	});
	var fragment = root_20();
	head("lqnljn", ($$anchor) => {
		deferred_template_effect(($0) => {
			$document.title = `Transaction ${$0 ?? ""} — Accounts Portal`;
		}, [() => get(transaction)?.documentNumber || `TXSTRN${String(txId).padStart(6, "0")}`]);
	});
	var div = first_child(fragment);
	var div_1 = child(div);
	var button = child(div_1);
	Arrow_left(child(button), { class: "h-3.5 w-3.5" });
	next(2);
	reset(button);
	var node_1 = sibling(button, 2);
	var consequent = ($$anchor) => {
		var div_2 = root_1();
		Button(child(div_2), {
			variant: "outline",
			size: "xs",
			class: "text-[11px] font-semibold flex items-center gap-1",
			onclick: () => copyToClipboard(get(transaction)?.documentNumber || String(get(transaction)?.id), "Document Number"),
			children: ($$anchor, $$slotProps) => {
				var fragment_1 = root();
				Copy(first_child(fragment_1), { class: "h-3 w-3" });
				next(2);
				append($$anchor, fragment_1);
			},
			$$slots: { default: true }
		});
		reset(div_2);
		append($$anchor, div_2);
	};
	if_block(node_1, ($$render) => {
		if (get(transaction)) $$render(consequent);
	});
	reset(div_1);
	var node_4 = sibling(div_1, 2);
	var consequent_1 = ($$anchor) => {
		append($$anchor, root_2());
	};
	var consequent_2 = ($$anchor) => {
		ErrorState($$anchor, {
			get message() {
				return get(errorMsg);
			},
			get correlationId() {
				return get(correlationId);
			},
			retryAction: loadTransactionDetail
		});
	};
	var consequent_18 = ($$anchor) => {
		var fragment_3 = root_19();
		var div_4 = first_child(fragment_3);
		var div_5 = child(div_4);
		var div_6 = child(div_5);
		var h1 = child(div_6);
		var text_1 = child(h1);
		reset(h1);
		var node_5 = sibling(h1, 2);
		FinancialStatusBadge(node_5, { get status() {
			return get(transaction).status;
		} });
		TransactionTypeChip(sibling(node_5, 2), { get type() {
			return get(transaction).transactionType;
		} });
		reset(div_6);
		var p = sibling(div_6, 2);
		var span = child(p);
		var strong = sibling(child(span));
		var text_2 = child(strong, true);
		reset(strong);
		reset(span);
		DateDisplay(sibling(span, 4), {
			get value() {
				return get(transaction).createdAt;
			},
			showTime: true
		});
		reset(p);
		reset(div_5);
		var div_7 = sibling(div_5, 2);
		var div_8 = child(div_7);
		var span_1 = sibling(child(div_8), 2);
		MoneyDisplay(child(span_1), { get amount() {
			return get(transaction).amount;
		} });
		reset(span_1);
		reset(div_8);
		var node_9 = sibling(div_8, 2);
		var consequent_3 = ($$anchor) => {
			var div_9 = root_5();
			var node_10 = child(div_9);
			Button(node_10, {
				variant: "outline",
				class: "rounded-xl text-xs py-4 px-3 cursor-pointer text-rose-600 hover:bg-rose-50 border-rose-200",
				onclick: () => set(rejectDialogOpen, true),
				children: ($$anchor, $$slotProps) => {
					var fragment_4 = root_3();
					Ban(first_child(fragment_4), { class: "h-3.5 w-3.5 mr-1" });
					next();
					append($$anchor, fragment_4);
				},
				$$slots: { default: true }
			});
			Button(sibling(node_10, 2), {
				class: "rounded-xl text-xs py-4 px-4 cursor-pointer bg-emerald-600 hover:bg-emerald-700 text-white",
				onclick: () => set(approveDialogOpen, true),
				children: ($$anchor, $$slotProps) => {
					var fragment_5 = root_4();
					Check(first_child(fragment_5), { class: "h-3.5 w-3.5 mr-1" });
					next();
					append($$anchor, fragment_5);
				},
				$$slots: { default: true }
			});
			reset(div_9);
			append($$anchor, div_9);
		};
		var d = user_derived(() => hasRole("master_accountant") && get(transaction).status === "pending");
		if_block(node_9, ($$render) => {
			if (get(d)) $$render(consequent_3);
		});
		reset(div_7);
		reset(div_4);
		var div_10 = sibling(div_4, 2);
		var div_11 = sibling(child(div_10), 2);
		var div_12 = child(div_11);
		var div_13 = sibling(child(div_12), 2);
		var node_14 = child(div_13);
		var consequent_4 = ($$anchor) => {
			var fragment_6 = root_6();
			var node_15 = first_child(fragment_6);
			User(node_15, { class: "h-5 w-5 text-primary shrink-0" });
			var div_14 = sibling(node_15, 2);
			var span_2 = child(div_14);
			var text_3 = child(span_2, true);
			reset(span_2);
			var span_3 = sibling(span_2, 2);
			var text_4 = child(span_3, true);
			reset(span_3);
			reset(div_14);
			template_effect(() => {
				set_text(text_3, get(transaction).sourceParty.name);
				set_text(text_4, get(transaction).sourceParty.type);
			});
			append($$anchor, fragment_6);
		};
		var consequent_5 = ($$anchor) => {
			var fragment_7 = root_7();
			var node_16 = first_child(fragment_7);
			Building_2(node_16, { class: "h-5 w-5 text-blue-500 shrink-0" });
			var div_15 = sibling(node_16, 2);
			var span_4 = child(div_15);
			var text_5 = child(span_4, true);
			reset(span_4);
			next(2);
			reset(div_15);
			template_effect(() => set_text(text_5, get(transaction).sourceBankName));
			append($$anchor, fragment_7);
		};
		var consequent_6 = ($$anchor) => {
			var fragment_8 = root_8();
			var node_17 = first_child(fragment_8);
			Wallet(node_17, { class: "h-5 w-5 text-amber-500 shrink-0" });
			var div_16 = sibling(node_17, 2);
			var span_5 = child(div_16);
			var text_6 = child(span_5, true);
			reset(span_5);
			next(2);
			reset(div_16);
			template_effect(() => set_text(text_6, get(transaction).sourceAccountName));
			append($$anchor, fragment_8);
		};
		var alternate = ($$anchor) => {
			var fragment_9 = root_9();
			Wallet(first_child(fragment_9), { class: "h-5 w-5 text-muted-foreground shrink-0" });
			next(2);
			append($$anchor, fragment_9);
		};
		if_block(node_14, ($$render) => {
			if (get(transaction).sourceParty) $$render(consequent_4);
			else if (get(transaction).sourceBankName) $$render(consequent_5, 1);
			else if (get(transaction).sourceAccountName) $$render(consequent_6, 2);
			else $$render(alternate, -1);
		});
		reset(div_13);
		reset(div_12);
		var div_17 = sibling(div_12, 2);
		var div_18 = child(div_17);
		var span_6 = child(div_18);
		MoneyDisplay(child(span_6), { get amount() {
			return get(transaction).amount;
		} });
		reset(span_6);
		Arrow_right(sibling(span_6, 2), { class: "h-4 w-4" });
		reset(div_18);
		var span_7 = sibling(div_18, 2);
		var text_7 = child(span_7);
		reset(span_7);
		reset(div_17);
		var div_19 = sibling(div_17, 2);
		var div_20 = sibling(child(div_19), 2);
		var node_21 = child(div_20);
		var consequent_7 = ($$anchor) => {
			var fragment_10 = root_6();
			var node_22 = first_child(fragment_10);
			User(node_22, { class: "h-5 w-5 text-emerald-500 shrink-0" });
			var div_21 = sibling(node_22, 2);
			var span_8 = child(div_21);
			var text_8 = child(span_8, true);
			reset(span_8);
			var span_9 = sibling(span_8, 2);
			var text_9 = child(span_9, true);
			reset(span_9);
			reset(div_21);
			template_effect(() => {
				set_text(text_8, get(transaction).destinationParty.name);
				set_text(text_9, get(transaction).destinationParty.type);
			});
			append($$anchor, fragment_10);
		};
		var consequent_8 = ($$anchor) => {
			var fragment_11 = root_7();
			var node_23 = first_child(fragment_11);
			Building_2(node_23, { class: "h-5 w-5 text-blue-500 shrink-0" });
			var div_22 = sibling(node_23, 2);
			var span_10 = child(div_22);
			var text_10 = child(span_10, true);
			reset(span_10);
			next(2);
			reset(div_22);
			template_effect(() => set_text(text_10, get(transaction).destinationBankName));
			append($$anchor, fragment_11);
		};
		var consequent_9 = ($$anchor) => {
			var fragment_12 = root_8();
			var node_24 = first_child(fragment_12);
			Wallet(node_24, { class: "h-5 w-5 text-amber-500 shrink-0" });
			var div_23 = sibling(node_24, 2);
			var span_11 = child(div_23);
			var text_11 = child(span_11, true);
			reset(span_11);
			next(2);
			reset(div_23);
			template_effect(() => set_text(text_11, get(transaction).destinationAccountName));
			append($$anchor, fragment_12);
		};
		var alternate_1 = ($$anchor) => {
			var fragment_13 = root_10();
			Wallet(first_child(fragment_13), { class: "h-5 w-5 text-muted-foreground shrink-0" });
			next(2);
			append($$anchor, fragment_13);
		};
		if_block(node_21, ($$render) => {
			if (get(transaction).destinationParty) $$render(consequent_7);
			else if (get(transaction).destinationBankName) $$render(consequent_8, 1);
			else if (get(transaction).destinationAccountName) $$render(consequent_9, 2);
			else $$render(alternate_1, -1);
		});
		reset(div_20);
		reset(div_19);
		reset(div_11);
		reset(div_10);
		var div_24 = sibling(div_10, 2);
		var p_1 = sibling(child(div_24), 2);
		var node_26 = child(p_1);
		{
			let $0 = user_derived(() => get(transaction).displayNarrative || get(transaction).description || "No narrative description generated.");
			FormattedNarrative(node_26, { get text() {
				return get($0);
			} });
		}
		reset(p_1);
		reset(div_24);
		var div_25 = sibling(div_24, 2);
		var div_26 = child(div_25);
		var div_27 = sibling(child(div_26), 2);
		var node_27 = child(div_27);
		var consequent_10 = ($$anchor) => {
			var div_28 = root_11();
			var span_12 = child(div_28);
			var text_12 = child(span_12);
			reset(span_12);
			var span_13 = sibling(span_12, 2);
			var text_13 = child(span_13, true);
			reset(span_13);
			reset(div_28);
			template_effect(() => {
				set_text(text_12, `Recipient (${(get(transaction).recipientType || "Party") ?? ""})`);
				set_text(text_13, get(transaction).displayRecipientName || get(transaction).recipientName);
			});
			append($$anchor, div_28);
		};
		if_block(node_27, ($$render) => {
			if (get(transaction).displayRecipientName || get(transaction).recipientName || get(transaction).recipientId) $$render(consequent_10);
		});
		var node_28 = sibling(node_27, 2);
		var consequent_11 = ($$anchor) => {
			var div_29 = root_12();
			var span_14 = sibling(child(div_29), 2);
			var text_14 = child(span_14, true);
			reset(span_14);
			reset(div_29);
			template_effect(() => set_text(text_14, get(transaction).supplierName || `ID #${get(transaction).supplierId}`));
			append($$anchor, div_29);
		};
		if_block(node_28, ($$render) => {
			if (get(transaction).supplierName || get(transaction).supplierId) $$render(consequent_11);
		});
		var div_30 = sibling(node_28, 2);
		var span_15 = sibling(child(div_30), 2);
		var text_15 = child(span_15, true);
		reset(span_15);
		reset(div_30);
		var node_29 = sibling(div_30, 2);
		var consequent_12 = ($$anchor) => {
			var div_31 = root_13();
			var span_16 = sibling(child(div_31), 2);
			var text_16 = child(span_16, true);
			reset(span_16);
			reset(div_31);
			template_effect(() => set_text(text_16, get(transaction).approvedByName || `User #${get(transaction).approvedBy}`));
			append($$anchor, div_31);
		};
		if_block(node_29, ($$render) => {
			if (get(transaction).approvedByName || get(transaction).approvedBy) $$render(consequent_12);
		});
		var node_30 = sibling(node_29, 2);
		var consequent_13 = ($$anchor) => {
			var div_32 = root_14();
			var span_17 = sibling(child(div_32), 2);
			var text_17 = child(span_17, true);
			reset(span_17);
			reset(div_32);
			template_effect(() => set_text(text_17, get(transaction).rejectedByName || `User #${get(transaction).rejectedBy}`));
			append($$anchor, div_32);
		};
		if_block(node_30, ($$render) => {
			if (get(transaction).rejectedByName || get(transaction).rejectedBy) $$render(consequent_13);
		});
		reset(div_27);
		reset(div_26);
		var div_33 = sibling(div_26, 2);
		var div_34 = sibling(child(div_33), 2);
		var div_35 = child(div_34);
		var span_18 = sibling(child(div_35), 2);
		var text_18 = child(span_18, true);
		reset(span_18);
		reset(div_35);
		var div_36 = sibling(div_35, 2);
		var span_19 = sibling(child(div_36), 2);
		var text_19 = child(span_19, true);
		reset(span_19);
		reset(div_36);
		var node_31 = sibling(div_36, 2);
		var consequent_14 = ($$anchor) => {
			var div_37 = root_15();
			var a = child(div_37);
			var node_32 = child(a);
			External_link(node_32, { class: "h-3.5 w-3.5" });
			var span_20 = sibling(node_32, 2);
			var text_20 = child(span_20);
			reset(span_20);
			reset(a);
			reset(div_37);
			template_effect(() => {
				set_attribute(a, "href", get(transaction).referenceUrl);
				set_text(text_20, `Open Originating Record (${get(transaction).referenceDisplayName ?? ""})`);
			});
			append($$anchor, div_37);
		};
		if_block(node_31, ($$render) => {
			if (get(transaction).referenceUrl) $$render(consequent_14);
		});
		reset(div_34);
		reset(div_33);
		reset(div_25);
		var node_33 = sibling(div_25, 2);
		var consequent_17 = ($$anchor) => {
			var div_38 = root_18();
			var div_39 = child(div_38);
			var div_40 = child(div_39);
			Book_open(child(div_40), { class: "h-4 w-4 text-primary" });
			next(2);
			reset(div_40);
			var div_41 = sibling(div_40, 2);
			var node_35 = child(div_41);
			{
				let $0 = user_derived(() => get(isGlBalanced) ? "text-emerald-500" : "text-rose-500");
				Scale(node_35, { get class() {
					return `h-4 w-4 ${get($0) ?? ""}`;
				} });
			}
			var span_21 = sibling(node_35, 2);
			var text_21 = child(span_21, true);
			reset(span_21);
			reset(div_41);
			reset(div_39);
			var div_42 = sibling(div_39, 2);
			var table = child(div_42);
			var tbody = sibling(child(table));
			each(tbody, 21, () => get(transaction).glPostings, index, ($$anchor, gl) => {
				var tr = root_17();
				var td = child(tr);
				var text_22 = child(td, true);
				reset(td);
				var td_1 = sibling(td);
				var text_23 = child(td_1, true);
				reset(td_1);
				var td_2 = sibling(td_1);
				var span_22 = child(td_2);
				var text_24 = child(span_22, true);
				reset(span_22);
				reset(td_2);
				var td_3 = sibling(td_2);
				var text_25 = child(td_3, true);
				reset(td_3);
				var td_4 = sibling(td_3);
				var node_36 = child(td_4);
				var consequent_15 = ($$anchor) => {
					MoneyDisplay($$anchor, { get amount() {
						return get(gl).debit;
					} });
				};
				var alternate_2 = ($$anchor) => {
					append($$anchor, root_16());
				};
				if_block(node_36, ($$render) => {
					if (get(gl).debit > 0) $$render(consequent_15);
					else $$render(alternate_2, -1);
				});
				reset(td_4);
				var td_5 = sibling(td_4);
				var node_37 = child(td_5);
				var consequent_16 = ($$anchor) => {
					MoneyDisplay($$anchor, { get amount() {
						return get(gl).credit;
					} });
				};
				var alternate_3 = ($$anchor) => {
					append($$anchor, root_16());
				};
				if_block(node_37, ($$render) => {
					if (get(gl).credit > 0) $$render(consequent_16);
					else $$render(alternate_3, -1);
				});
				reset(td_5);
				reset(tr);
				template_effect(() => {
					set_text(text_22, get(gl).accountCode);
					set_text(text_23, get(gl).accountName);
					set_class(span_22, 1, `px-2 py-0.5 rounded text-[10px] font-semibold uppercase ${get(gl).debit > 0 ? "bg-emerald-500/10 text-emerald-600" : "bg-blue-500/10 text-blue-600"}`);
					set_text(text_24, get(gl).entryType);
					set_text(text_25, get(gl).description || get(transaction).description || "—");
				});
				append($$anchor, tr);
			});
			reset(tbody);
			var tfoot = sibling(tbody);
			var tr_1 = child(tfoot);
			var td_6 = sibling(child(tr_1));
			MoneyDisplay(child(td_6), { get amount() {
				return get(totalDebits);
			} });
			reset(td_6);
			var td_7 = sibling(td_6);
			MoneyDisplay(child(td_7), { get amount() {
				return get(totalCredits);
			} });
			reset(td_7);
			reset(tr_1);
			reset(tfoot);
			reset(table);
			reset(div_42);
			reset(div_38);
			template_effect(() => {
				set_class(span_21, 1, `font-semibold ${get(isGlBalanced) ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"}`);
				set_text(text_21, get(isGlBalanced) ? "Balanced (Total Debit = Total Credit)" : "Unbalanced Posting Warning");
			});
			append($$anchor, div_38);
		};
		if_block(node_33, ($$render) => {
			if (get(transaction).glPostings && get(transaction).glPostings.length > 0) $$render(consequent_17);
		});
		template_effect(($0, $1) => {
			set_text(text_1, `Transaction ${get(transaction).documentNumber ?? ""}`);
			set_text(text_2, get(transaction).createdByName || `User #${get(transaction).createdBy}`);
			set_text(text_7, `Via ${$0 ?? ""}`);
			set_text(text_15, get(transaction).createdByName || `User #${get(transaction).createdBy}`);
			set_text(text_18, $1);
			set_text(text_19, get(transaction).referenceId || "—");
		}, [() => getPaymentMethodLabel(get(transaction).paymentMethod), () => get(transaction).referenceType ? getReferenceTypeLabel(get(transaction).referenceType) : "—"]);
		append($$anchor, fragment_3);
	};
	if_block(node_4, ($$render) => {
		if (get(loading)) $$render(consequent_1);
		else if (get(errorMsg)) $$render(consequent_2, 1);
		else if (get(transaction)) $$render(consequent_18, 2);
	});
	reset(div);
	var node_40 = sibling(div, 2);
	TransactionApproveDialog(node_40, {
		get transactionId() {
			return txId;
		},
		onConfirm: handleActionSuccess,
		get open() {
			return get(approveDialogOpen);
		},
		set open($$value) {
			set(approveDialogOpen, $$value, true);
		}
	});
	var node_41 = sibling(node_40, 2);
	TransactionRejectDialog(node_41, {
		get transactionId() {
			return txId;
		},
		onConfirm: handleActionSuccess,
		get open() {
			return get(rejectDialogOpen);
		},
		set open($$value) {
			set(rejectDialogOpen, $$value, true);
		}
	});
	ConflictDialog(sibling(node_41, 2), {
		onReload: handleActionSuccess,
		get open() {
			return get(conflictDialogOpen);
		},
		set open($$value) {
			set(conflictDialogOpen, $$value, true);
		}
	});
	delegated("click", button, () => goto("/transactions"));
	append($$anchor, fragment);
	pop();
	$$cleanup();
}
delegate(["click"]);
//#endregion
export { _page as component };

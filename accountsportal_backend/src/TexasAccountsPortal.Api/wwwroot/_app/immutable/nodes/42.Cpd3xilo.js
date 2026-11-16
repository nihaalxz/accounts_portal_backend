import { A as component, B as append, Bt as reset, Ct as user_derived, D as head, Et as store_get, G as text, H as from_html, I as if_block, J as event, K as delegate, M as slot, N as each, Nt as pop, P as index, Pt as push, Q as get, R as set_text, Tt as setup_stores, V as comment, _ as set_attribute, a as legacy_rest_props, b as bind_select_value, bt as state, c as spread_props, dt as $document, gt as proxy, ht as sibling, m as bind_value, mt as first_child, o as prop, ot as template_effect, pt as child, q as delegated, rt as deferred_template_effect, st as user_effect, ut as remove_textarea_child, vt as set, w as set_class, zt as next } from "../chunks/dXkmWTgM.js";
import { t as goto } from "../chunks/Btl29LiU.js";
import "../chunks/DhaYE-8x.js";
import { t as apiFetch, u as getSalesPortalFileUrl } from "../chunks/BAHQyodw.js";
import { i as hasRole, r as currentUser } from "../chunks/B7N8nq9g.js";
import "../chunks/DZfWAsjW.js";
import { r as toast } from "../chunks/CbPRQHfn.js";
import { t as Icon } from "../chunks/BalaELqB.js";
import { t as Arrow_left } from "../chunks/Bn7x0kyr.js";
import { t as Check } from "../chunks/blG6JRe7.js";
import { t as Circle_alert } from "../chunks/CHXThoj_2.js";
import { t as Circle_check } from "../chunks/qB0lJ_dM2.js";
import { t as Clock } from "../chunks/CZu1L_RP2.js";
import { t as Coins } from "../chunks/B2DQy1SS2.js";
import { t as Credit_card } from "../chunks/DZ-rRKb92.js";
import { t as File_text } from "../chunks/NLRKrZbo2.js";
import { t as Loader_circle } from "../chunks/BMOA0yrB2.js";
import { t as Lock } from "../chunks/DLJP7XQX2.js";
import { t as Package } from "../chunks/BUmdUS28.js";
import { t as Pencil } from "../chunks/C3Ohi_CL.js";
import { t as Printer } from "../chunks/Ds2DlsUi.js";
import { t as Refresh_cw } from "../chunks/DpTJy0Wb.js";
import { t as Send } from "../chunks/CRZ4Mc_s.js";
import { t as Triangle_alert } from "../chunks/BKenZzGW.js";
import { t as Undo_2 } from "../chunks/BJqtSvjG.js";
import { t as User } from "../chunks/C8PICJbu.js";
import { t as X } from "../chunks/wXHc9RNY.js";
import { t as page } from "../chunks/B72W_Lye.js";
import { t as Button } from "../chunks/BhXsq3bC.js";
import "../chunks/Dax-5Jyr2.js";
import { a as fetchOperationalStaff, i as fetchAccountsStaff, o as fetchSalesStaff } from "../chunks/BNU1vz_X2.js";
import { t as ConfirmationDialog } from "../chunks/BuNG9dXS2.js";
import { t as MoneyDisplay } from "../chunks/CIVSRuaR2.js";
import { t as DateDisplay } from "../chunks/DEr_pDJT2.js";
import "../chunks/CS-Kx6i02.js";
import { t as previewDocument } from "../chunks/BCiVnDQo2.js";
import { r as getAccounts } from "../chunks/Epheit1w2.js";
import { n as getBanks } from "../chunks/_Q_nA6b12.js";
import { t as createIdempotentOperation } from "../chunks/Bt9NpIc72.js";
import { t as Input } from "../chunks/C4xMLgho.js";
import { _ as updateSupplierPayment, d as getSuppliers, f as rejectPurchaseReturn, g as updateBookingProcessingStatus, h as updateBookingOperationClosed, m as rejectSupplierPayment, n as approveSalesReturn, o as createSupplierPayment, p as rejectSalesReturn, r as approveSupplierPayment, t as approvePurchaseReturn } from "../chunks/BgbcIgUa.js";
import { t as SearchableSelect } from "../chunks/5jJpT0lD.js";
//#region node_modules/lucide-svelte/dist/icons/lock-open.svelte
function Lock_open($$anchor, $$props) {
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
		"width": "18",
		"height": "11",
		"x": "3",
		"y": "11",
		"rx": "2",
		"ry": "2"
	}], ["path", { "d": "M7 11V7a5 5 0 0 1 9.9-1" }]];
	/**
	* @component @name LockOpen
	* @description Lucide SVG icon component, renders SVG Element with children.
	*
	* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMTgiIGhlaWdodD0iMTEiIHg9IjMiIHk9IjExIiByeD0iMiIgcnk9IjIiIC8+CiAgPHBhdGggZD0iTTcgMTFWN2E1IDUgMCAwIDEgOS45LTEiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/lock-open
	* @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
	*
	* @param {Object} props - Lucide icons props and any valid SVG attribute
	* @returns {FunctionalComponent} Svelte component
	*
	*/
	Icon($$anchor, spread_props({ name: "lock-open" }, () => $$sanitized_props, {
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
//#region src/lib/components/SupplierPaymentRejectDialog.svelte
var root$1 = from_html(`<span class="font-medium text-foreground"> </span> —&nbsp;`, 1);
var root_1$1 = from_html(`<span class="font-semibold text-foreground font-mono"> </span>`);
var root_2$1 = from_html(`<div class="px-3 py-2 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-xs font-semibold"> </div>`);
var root_3$1 = from_html(`<!> <span>Rejecting...</span>`, 1);
var root_4$1 = from_html(`<span>Reject Payment</span>`);
var root_5$1 = from_html(`<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs select-none p-4" role="dialog" aria-modal="true" aria-labelledby="sp-reject-title"><div class="w-full max-w-[480px] bg-card border border-border rounded-3xl p-6 shadow-2xl flex flex-col gap-4 animate-scaleUp"><div class="flex items-start gap-4"><div class="p-3 bg-red-100 dark:bg-red-950/20 text-red-600 rounded-2xl shrink-0"><!></div> <div class="flex-1 min-w-0"><h2 id="sp-reject-title" class="text-sm font-bold text-foreground leading-tight">Reject Supplier Payment</h2> <p class="text-xs text-muted-foreground mt-1.5 leading-relaxed"><!> <!> <br/> Please provide a reason. This action cannot be undone.</p></div></div> <div class="flex flex-col gap-1.5"><label for="sp-reject-reason" class="text-xs font-semibold text-muted-foreground">Reason for Rejection <span class="text-red-500">*</span></label> <textarea id="sp-reject-reason" rows="3" placeholder="e.g. Incorrect amount, wrong supplier, duplicate entry..." class="w-full text-xs p-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-400 placeholder-muted-foreground/60 leading-relaxed resize-none transition-colors"></textarea></div> <!> <div class="flex items-center justify-end gap-2 pt-1 border-t border-border"><!> <!></div></div></div>`);
function SupplierPaymentRejectDialog($$anchor, $$props) {
	push($$props, true);
	let open = prop($$props, "open", 11, false), paymentAmount = prop($$props, "paymentAmount", 3, null), paymentDescription = prop($$props, "paymentDescription", 3, null), loading = prop($$props, "loading", 3, false);
	let reason = state("");
	let errorMsg = state(null);
	function handleConfirm() {
		if (!get(reason).trim()) {
			set(errorMsg, "Rejection reason is required.");
			return;
		}
		set(errorMsg, null);
		$$props.onConfirm(get(reason).trim());
	}
	function handleCancel() {
		if (loading()) return;
		set(reason, "");
		set(errorMsg, null);
		$$props.onClose();
	}
	function handleBackdropClick(e) {
		if (e.target === e.currentTarget) handleCancel();
	}
	function handleKeydown(e) {
		if (e.key === "Escape") handleCancel();
	}
	user_effect(() => {
		if (!open()) {
			set(reason, "");
			set(errorMsg, null);
		}
	});
	var fragment = comment();
	var node = first_child(fragment);
	var consequent_4 = ($$anchor) => {
		var div = root_5$1();
		var div_1 = child(div);
		var div_2 = child(div_1);
		var div_3 = child(div_2);
		Triangle_alert(child(div_3), { class: "h-5 w-5" });
		reset(div_3);
		var div_4 = sibling(div_3, 2);
		var p = sibling(child(div_4), 2);
		var node_2 = child(p);
		var consequent = ($$anchor) => {
			var fragment_1 = root$1();
			var span = first_child(fragment_1);
			var text = child(span, true);
			reset(span);
			next();
			template_effect(() => set_text(text, paymentDescription()));
			append($$anchor, fragment_1);
		};
		if_block(node_2, ($$render) => {
			if (paymentDescription()) $$render(consequent);
		});
		var node_3 = sibling(node_2, 2);
		var consequent_1 = ($$anchor) => {
			var span_1 = root_1$1();
			var text_1 = child(span_1);
			reset(span_1);
			template_effect(($0) => set_text(text_1, `${$0 ?? ""} BHD`), [() => paymentAmount().toFixed(3)]);
			append($$anchor, span_1);
		};
		if_block(node_3, ($$render) => {
			if (paymentAmount() != null) $$render(consequent_1);
		});
		next(3);
		reset(p);
		reset(div_4);
		reset(div_2);
		var div_5 = sibling(div_2, 2);
		var textarea = sibling(child(div_5), 2);
		remove_textarea_child(textarea);
		reset(div_5);
		var node_4 = sibling(div_5, 2);
		var consequent_2 = ($$anchor) => {
			var div_6 = root_2$1();
			var text_2 = child(div_6, true);
			reset(div_6);
			template_effect(() => set_text(text_2, get(errorMsg)));
			append($$anchor, div_6);
		};
		if_block(node_4, ($$render) => {
			if (get(errorMsg)) $$render(consequent_2);
		});
		var div_7 = sibling(node_4, 2);
		var node_5 = child(div_7);
		Button(node_5, {
			variant: "outline",
			onclick: handleCancel,
			get disabled() {
				return loading();
			},
			class: "rounded-xl font-semibold text-xs py-5 px-5 cursor-pointer",
			children: ($$anchor, $$slotProps) => {
				next();
				append($$anchor, text("Cancel"));
			},
			$$slots: { default: true }
		});
		var node_6 = sibling(node_5, 2);
		{
			let $0 = user_derived(() => loading() || !get(reason).trim());
			Button(node_6, {
				onclick: handleConfirm,
				get disabled() {
					return get($0);
				},
				variant: "destructive",
				class: "rounded-xl font-semibold text-xs py-5 px-5 cursor-pointer",
				children: ($$anchor, $$slotProps) => {
					var fragment_2 = comment();
					var node_7 = first_child(fragment_2);
					var consequent_3 = ($$anchor) => {
						var fragment_3 = root_3$1();
						Loader_circle(first_child(fragment_3), { class: "h-3.5 w-3.5 animate-spin mr-1.5" });
						next(2);
						append($$anchor, fragment_3);
					};
					var alternate = ($$anchor) => {
						append($$anchor, root_4$1());
					};
					if_block(node_7, ($$render) => {
						if (loading()) $$render(consequent_3);
						else $$render(alternate, -1);
					});
					append($$anchor, fragment_2);
				},
				$$slots: { default: true }
			});
		}
		reset(div_7);
		reset(div_1);
		reset(div);
		template_effect(() => textarea.disabled = loading());
		delegated("click", div, handleBackdropClick);
		delegated("keydown", div, handleKeydown);
		bind_value(textarea, () => get(reason), ($$value) => set(reason, $$value));
		append($$anchor, div);
	};
	if_block(node, ($$render) => {
		if (open()) $$render(consequent_4);
	});
	append($$anchor, fragment);
	pop();
}
delegate(["click", "keydown"]);
//#endregion
//#region src/routes/(app)/sales/bookings/[serviceType]/[id]/+page.svelte
var root = from_html(`<!> `, 1);
var root_1 = from_html(`<p class="text-xs text-muted-foreground mt-0.5"> <span class="capitalize font-medium"> </span></p>`);
var root_2 = from_html(`<!> Unlock Operation`, 1);
var root_3 = from_html(`<!> Lock Operation`, 1);
var root_4 = from_html(`<!> Reload`, 1);
var root_5 = from_html(`<!> Print Invoice`, 1);
var root_6 = from_html(`<div class="bg-card border border-border rounded-2xl p-16 flex items-center justify-center animate-pulse"><!></div>`);
var root_7 = from_html(`<div class="bg-card border border-border rounded-2xl p-16 text-center text-red-600 text-sm"> </div>`);
var root_8 = from_html(`<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide bg-emerald-100 text-emerald-800 border border-emerald-300 dark:bg-emerald-950/50 dark:text-emerald-300 dark:border-emerald-700"><!> Deal Closed (Locked)</span>`);
var root_9 = from_html(`<div class="bg-amber-500/10 border-2 border-amber-500/30 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs shadow-xs"><div class="flex items-center gap-3"><div class="p-2.5 bg-amber-500/20 text-amber-700 dark:text-amber-300 rounded-xl shrink-0"><!></div> <div><h3 class="font-bold text-foreground text-sm flex items-center gap-2"><span>Operation Finalized & Locked</span> <span class="px-2 py-0.5 text-[10px] font-bold rounded-full bg-amber-200 text-amber-900">Operational Lock</span></h3> <p class="text-muted-foreground mt-0.5 leading-relaxed">This booking is marked as closed in operations. Operational actions (visa approvals, government fee entries, document requests) are locked in the Operational Portal.</p></div></div> <!></div>`);
var root_10 = from_html(`<!> Unlock Deal`, 1);
var root_11 = from_html(`<div class="bg-emerald-500/10 border-2 border-emerald-500/30 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs shadow-xs"><div class="flex items-center gap-3"><div class="p-2.5 bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 rounded-xl shrink-0"><!></div> <div><h3 class="font-bold text-foreground text-sm flex items-center gap-2"><span>Deal Finalized & Locked</span></h3> <p class="text-muted-foreground mt-0.5 leading-relaxed">This booking is marked as closed. Customer payments, supplier payouts, purchase returns, and customer refunds are strictly locked.</p></div></div> <!></div>`);
var root_12 = from_html(`<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold text-muted-foreground bg-muted/50 border border-border"><!> Locked</span>`);
var root_13 = from_html(`<button class="px-3.5 py-1.5 text-xs font-bold rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white transition-all cursor-pointer flex items-center gap-1 disabled:opacity-50"><!> Approve Payment</button> <button class="px-3.5 py-1.5 text-xs font-bold rounded-xl bg-red-600 hover:bg-red-700 text-white transition-all cursor-pointer flex items-center gap-1 disabled:opacity-50"><!> Reject</button>`, 1);
var root_14 = from_html(`<button class="px-3 py-1.5 text-xs font-semibold rounded-xl border border-border bg-card hover:bg-muted text-foreground transition-all cursor-pointer flex items-center gap-1"><!> Edit Fee</button> <!>`, 1);
var root_15 = from_html(`<div class="bg-card border border-amber-300/60 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs"><div class="space-y-1"><div class="flex items-center gap-2 flex-wrap"><span class="font-bold text-foreground text-sm font-mono"><!></span> <span class="text-[11px] px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-semibold"> </span> <span class="text-xs text-muted-foreground font-mono"> </span></div> <p class="text-xs text-muted-foreground"> </p> <p class="text-[11px] text-muted-foreground"> <!></p></div> <div class="flex items-center gap-2"><!></div></div>`);
var root_16 = from_html(`<button class="px-3.5 py-1.5 text-xs font-bold rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white transition-all cursor-pointer flex items-center gap-1 disabled:opacity-50"><!> Approve Return</button> <button class="px-3.5 py-1.5 text-xs font-bold rounded-xl bg-red-600 hover:bg-red-700 text-white transition-all cursor-pointer flex items-center gap-1 disabled:opacity-50"><!> Reject</button>`, 1);
var root_17 = from_html(`<div class="bg-card border border-emerald-300/60 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs"><div class="space-y-1"><div class="flex items-center gap-2 flex-wrap"><span class="font-bold text-foreground text-sm font-mono"><!></span> <span class="text-[11px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold">Purchase Return</span> <span class="text-xs text-muted-foreground font-mono"> </span></div> <p class="text-xs text-muted-foreground"> </p> <p class="text-[11px] text-muted-foreground"> <!></p></div> <div class="flex items-center gap-2"><!></div></div>`);
var root_18 = from_html(`<button class="px-3.5 py-1.5 text-xs font-bold rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white transition-all cursor-pointer flex items-center gap-1 disabled:opacity-50"><!> Approve Refund</button> <button class="px-3.5 py-1.5 text-xs font-bold rounded-xl bg-red-600 hover:bg-red-700 text-white transition-all cursor-pointer flex items-center gap-1 disabled:opacity-50"><!> Reject</button>`, 1);
var root_19 = from_html(`<div class="bg-card border border-sky-300/60 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs"><div class="space-y-1"><div class="flex items-center gap-2 flex-wrap"><span class="font-bold text-foreground text-sm font-mono"><!></span> <span class="text-[11px] px-2 py-0.5 rounded bg-sky-100 text-sky-800 font-semibold">Sales Return (Customer Refund)</span> <span class="text-xs text-muted-foreground font-mono"> </span></div> <p class="text-xs text-muted-foreground"> </p> <p class="text-[11px] text-muted-foreground">Requested: <!></p></div> <div class="flex items-center gap-2"><!></div></div>`);
var root_20 = from_html(`<div class="bg-amber-500/10 border-2 border-amber-500/30 rounded-2xl p-5 space-y-4 shadow-xs"><div class="flex items-center justify-between"><div class="flex items-center gap-2 text-amber-700 font-bold text-sm"><!> <span>Pending Settlement Approvals Prompt</span></div> <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-200 text-amber-900"> </span></div> <p class="text-xs text-amber-800">Submissions requiring review and approval:</p> <div class="space-y-3"><!> <!> <!></div></div>`);
var root_21 = from_html(`<button><!> <span> </span> <!></button>`);
var root_22 = from_html(`<div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Agent Name</span> <span class="font-semibold"> </span></div> <div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Agent ID</span> <span class="font-mono text-muted-foreground"> </span></div>`, 1);
var root_23 = from_html(`<div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Care Of</span> <span class="font-semibold"> </span></div>`);
var root_24 = from_html(`<div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Supplier</span><span> </span></div>`);
var root_25 = from_html(`<div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Route</span> <span class="font-semibold"> </span></div> <div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Payment Method</span> <span class="capitalize"> </span></div> <!>`, 1);
var root_26 = from_html(`<div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Guest Name</span> <span class="font-semibold"> </span></div> <div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Country</span><span> </span></div> <div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Check-In</span> <span><!></span></div> <div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Duration</span><span> </span></div> <div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Order Status</span> <span class="capitalize"> </span></div> <div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Payment Method</span> <span class="capitalize"> </span></div>`, 1);
var root_27 = from_html(`<div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Approval Note</span><span class="text-right max-w-48"> </span></div>`);
var root_28 = from_html(`<div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Visa Package</span> <span class="font-semibold"> </span></div> <!> <!>`, 1);
var root_29 = from_html(`<div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Applicant</span> <span class="font-semibold"> </span></div> <div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Country</span><span> </span></div> <div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Visa Type</span><span> </span></div> <div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Appointment</span> <span><!> </span></div>`, 1);
var root_30 = from_html(`<div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Passenger</span> <span class="font-semibold"> </span></div> <div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Country</span><span> </span></div> <div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Duration</span><span> </span></div>`, 1);
var root_31 = from_html(`<div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Passenger</span> <span class="font-semibold"> </span></div> <div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Route</span> <span> </span></div> <div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Drop Date/Time</span> <span><!> </span></div> <div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Vehicle</span><span> </span></div>`, 1);
var root_32 = from_html(`<div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Narration</span> <span class="text-right max-w-48"> </span></div>`);
var root_33 = from_html(`<div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Service Name</span> <span class="font-semibold"> </span></div> <div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Customer Name</span> <span> </span></div> <!>`, 1);
var root_34 = from_html(`<div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div class="bg-card border border-border rounded-2xl p-5 space-y-3"><h2 class="text-sm font-bold text-foreground flex items-center gap-2"><!> Client Information</h2> <div class="space-y-2 text-xs"><div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Client Type</span> <span class="font-semibold capitalize"> </span></div> <div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Customer Head</span> <span class="font-semibold"> </span></div> <!> <!></div></div> <div class="bg-card border border-border rounded-2xl p-5 space-y-3"><h2 class="text-sm font-bold text-foreground flex items-center gap-2"><!> Service Details</h2> <div class="space-y-2 text-xs"><!> <!></div></div></div>`);
var root_35 = from_html(`<div class="bg-muted/30 rounded-xl p-4 text-center space-y-1"><p class="text-[10px] text-muted-foreground uppercase font-semibold tracking-wider"> </p> <p><!></p></div>`);
var root_36 = from_html(`<div class="flex justify-between"><span class="text-muted-foreground">Payment Method</span> <span class="capitalize font-semibold"> </span></div>`);
var root_37 = from_html(`<div class="flex justify-between"><span class="text-muted-foreground">Target Bank</span> <span class="font-semibold text-primary"> </span></div>`);
var root_38 = from_html(`<div class="flex justify-between"><span class="text-muted-foreground">In-house</span> <span class="font-semibold"> </span></div>`);
var root_39 = from_html(`<div class="flex justify-between items-center pt-2 border-t border-border/40"><span class="text-muted-foreground">Payment Proof</span> <div class="flex items-center gap-2"><span class="font-mono text-muted-foreground truncate max-w-[150px] sm:max-w-[250px]"> </span> <a target="_blank" rel="noopener noreferrer" class="px-2.5 py-1 text-[11px] font-bold rounded-lg border border-border bg-card hover:bg-muted text-foreground transition-all cursor-pointer inline-flex items-center">View</a> <a download="" class="px-2.5 py-1 text-[11px] font-bold rounded-lg border border-border bg-card hover:bg-muted text-foreground transition-all cursor-pointer inline-flex items-center">Download</a></div></div>`);
var root_40 = from_html(`<option> </option>`);
var root_41 = from_html(`<div class="flex flex-col gap-1.5 pt-2 border-t border-border/40 text-xs"><label for="cashAccountId" class="font-semibold text-muted-foreground">Destination Cash Account</label> <select id="cashAccountId" class="h-9.5 w-full bg-background border border-border rounded-xl px-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground disabled:opacity-50"><option>-- Select Cash Account --</option><!></select></div>`);
var root_42 = from_html(`<div class="p-3 bg-muted/40 border border-border rounded-xl text-xs text-muted-foreground flex items-center gap-2 mt-4"><!> <span>Payment status actions are locked because this deal is finalized and closed.</span></div>`);
var root_43 = from_html(`<div class="flex gap-3 pt-4 border-t border-border/40 justify-end"><button class="px-4 py-2 text-xs font-bold rounded-xl cursor-pointer bg-emerald-600 hover:bg-emerald-700 text-white flex items-center gap-1.5 transition-all shadow-sm disabled:opacity-50"><!> Approve Payment</button> <button class="px-4 py-2 text-xs font-bold rounded-xl cursor-pointer bg-red-600 hover:bg-red-700 text-white flex items-center gap-1.5 transition-all shadow-sm"><!> Reject Payment</button></div>`);
var root_44 = from_html(`<div class="bg-card border border-border rounded-2xl p-5 space-y-4"><h2 class="text-sm font-bold text-foreground flex items-center gap-2"><!> Financial Summary</h2> <div class="grid grid-cols-2 md:grid-cols-4 gap-4"></div> <div class="text-xs space-y-2 pt-2 border-t border-border/40"><!> <!> <!> <!></div> <!> <!></div>`);
var root_45 = from_html(`<tr class="hover:bg-muted/10"><td class="p-3 font-semibold"> </td><td class="p-3 font-mono"><!></td><td class="p-3 font-mono text-muted-foreground"><!></td><td class="p-3 font-mono text-emerald-600"><!></td><td class="p-3"> </td><td class="p-3 text-muted-foreground"> </td></tr>`);
var root_46 = from_html(`<div class="bg-card border border-border rounded-2xl overflow-hidden"><div class="p-4 border-b border-border"><h2 class="text-sm font-bold"> </h2></div> <table class="w-full text-xs text-left"><thead class="bg-muted/30 text-muted-foreground font-semibold border-b border-border"><tr><th class="p-3">Passenger</th><th class="p-3">Payable</th><th class="p-3">Cost</th><th class="p-3">Profit</th><th class="p-3">In-house</th><th class="p-3">Supplier</th></tr></thead><tbody class="divide-y divide-border/60"></tbody></table></div>`);
var root_47 = from_html(`<tr class="hover:bg-muted/10"><td class="p-3 font-semibold"> </td><td class="p-3 font-mono text-muted-foreground"> </td><td class="p-3"> </td><td class="p-3 font-mono"><!></td><td class="p-3 font-mono text-emerald-600"><!></td><td class="p-3"><span> </span></td></tr>`);
var root_48 = from_html(`<div class="bg-card border border-border rounded-2xl overflow-hidden"><div class="p-4 border-b border-border"><h2 class="text-sm font-bold"> </h2></div> <table class="w-full text-xs text-left"><thead class="bg-muted/30 text-muted-foreground font-semibold border-b border-border"><tr><th class="p-3">Name</th><th class="p-3">Passport</th><th class="p-3">Nationality</th><th class="p-3">Payable</th><th class="p-3">Profit</th><th class="p-3">Status</th></tr></thead><tbody class="divide-y divide-border/60"></tbody></table></div>`);
var root_49 = from_html(`<div class="bg-card border border-border rounded-2xl p-12 text-center text-muted-foreground text-xs">No line items for this service type.</div>`);
var root_50 = from_html(`<!> View Financial Breakdown`, 1);
var root_51 = from_html(`<div class="bg-card border-2 border-dashed border-amber-300 dark:border-amber-700/60 rounded-3xl p-10 text-center space-y-4 shadow-xs"><div class="inline-flex items-center justify-center p-4 bg-amber-100 dark:bg-amber-950/50 rounded-2xl text-amber-600 dark:text-amber-400"><!></div> <div class="space-y-2 max-w-lg mx-auto"><h3 class="text-base font-extrabold text-foreground">Supplier Settlements & Returns Locked</h3> <p class="text-xs text-muted-foreground leading-relaxed">This section is currently locked because the customer payment status is <span> </span>.</p> <p class="text-xs text-muted-foreground leading-relaxed">Supplier payouts, purchase returns, and customer refunds can only be processed once customer payment is confirmed as <strong class="text-foreground font-semibold">Success</strong> or <strong class="text-foreground font-semibold">Paid</strong>.</p></div> <div class="pt-2"><!></div></div>`);
var root_52 = from_html(`<!> Post Supplier Payment`, 1);
var root_53 = from_html(`<!> Mark as Deal Closed`, 1);
var root_54 = from_html(`<span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200 sm:ml-auto"><!> Deal Closed (Locked)</span>`);
var root_55 = from_html(`<span class="block mt-0.5 text-amber-800 font-medium">As a Master Accountant, you have privilege to unlock this deal using the "Unlock Deal" button above.</span>`);
var root_56 = from_html(`<div class="flex items-start gap-2.5 bg-amber-50 border border-amber-200 text-amber-900 rounded-2xl p-4 text-xs"><!> <div><strong class="font-bold">Deal Closed & Finalized:</strong> This deal is marked as closed. All supplier payouts, purchase returns, and customer refunds are locked. <!></div></div>`);
var root_57 = from_html(`<span class="inline-flex items-center gap-1 text-[11px] font-semibold text-muted-foreground"><!> Locked</span>`);
var root_58 = from_html(`<button class="px-2 py-1 text-[11px] font-semibold border border-border rounded-lg bg-card hover:bg-muted cursor-pointer">Edit</button> <button class="px-2 py-1 text-[11px] font-bold bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg cursor-pointer">Approve</button> <button class="px-2 py-1 text-[11px] font-bold bg-red-600 hover:bg-red-700 text-white rounded-lg cursor-pointer">Reject</button>`, 1);
var root_59 = from_html(`<span class="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-600">Pending Approval</span>`);
var root_60 = from_html(`<div class="flex items-center gap-1.5"><!></div>`);
var root_61 = from_html(`<span class="text-muted-foreground text-[11px]">—</span>`);
var root_62 = from_html(`<tr class="hover:bg-muted/10 transition-colors"><td class="p-3 font-semibold text-foreground"> </td><td class="p-3 font-mono font-bold text-rose-600"><!></td><td class="p-3 capitalize"> </td><td class="p-3"><span> </span></td><td class="p-3 text-muted-foreground font-mono"> </td><td class="p-3 font-medium text-foreground"> </td><td class="p-3 text-muted-foreground"><!></td><td class="p-3"><!></td></tr>`);
var root_63 = from_html(`<table class="w-full text-xs text-left"><thead class="bg-muted/30 text-muted-foreground font-semibold border-b border-border text-[10px] uppercase tracking-wider"><tr><th class="p-3">Supplier Name & Code</th><th class="p-3">Amount</th><th class="p-3">Method</th><th class="p-3">Status</th><th class="p-3">Reference</th><th class="p-3">Requested By</th><th class="p-3">Date</th><th class="p-3">Actions</th></tr></thead><tbody class="divide-y divide-border/60"></tbody></table>`);
var root_64 = from_html(`<div class="p-8 text-center text-muted-foreground text-xs">No supplier payments recorded.</div>`);
var root_65 = from_html(`<div class="flex items-center gap-1.5"><button class="px-2 py-1 text-[11px] font-bold bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg cursor-pointer">Approve</button> <button class="px-2 py-1 text-[11px] font-bold bg-red-600 hover:bg-red-700 text-white rounded-lg cursor-pointer">Reject</button></div>`);
var root_66 = from_html(`<tr class="hover:bg-muted/10 transition-colors"><td class="p-3 font-semibold text-foreground"> </td><td class="p-3 font-mono font-bold text-emerald-600"><!></td><td class="p-3 capitalize"> </td><td class="p-3"><span> </span></td><td class="p-3 text-muted-foreground"> </td><td class="p-3 font-medium text-foreground"> </td><td class="p-3 text-muted-foreground"><!></td><td class="p-3"><!></td></tr>`);
var root_67 = from_html(`<table class="w-full text-xs text-left"><thead class="bg-muted/30 text-muted-foreground font-semibold border-b border-border text-[10px] uppercase tracking-wider"><tr><th class="p-3">Supplier Name & Code</th><th class="p-3">Amount</th><th class="p-3">Destination</th><th class="p-3">Status</th><th class="p-3">Reason</th><th class="p-3">Requested By</th><th class="p-3">Date</th><th class="p-3">Actions</th></tr></thead><tbody class="divide-y divide-border/60"></tbody></table>`);
var root_68 = from_html(`<div class="p-8 text-center text-muted-foreground text-xs">No purchase refunds received.</div>`);
var root_69 = from_html(`<tr class="hover:bg-muted/10 transition-colors"><td class="p-3 capitalize"> </td><td class="p-3 font-mono font-bold text-sky-600"><!></td><td class="p-3 text-muted-foreground"> </td><td class="p-3"><span> </span></td><td class="p-3 font-medium text-foreground"> </td><td class="p-3 text-muted-foreground"><!></td><td class="p-3"><!></td></tr>`);
var root_70 = from_html(`<table class="w-full text-xs text-left"><thead class="bg-muted/30 text-muted-foreground font-semibold border-b border-border text-[10px] uppercase tracking-wider"><tr><th class="p-3">Recipient</th><th class="p-3">Amount</th><th class="p-3">Reason</th><th class="p-3">Status</th><th class="p-3">Requested By</th><th class="p-3">Date</th><th class="p-3">Actions</th></tr></thead><tbody class="divide-y divide-border/60"></tbody></table>`);
var root_71 = from_html(`<div class="p-8 text-center text-muted-foreground text-xs">No client refunds processed.</div>`);
var root_72 = from_html(`<div class="space-y-6"><div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5"><div class="bg-card border border-border rounded-2xl p-4 space-y-1 shadow-xs border-l-4 border-l-primary"><p class="text-[10px] text-muted-foreground uppercase font-semibold tracking-wider">Payable Sale Amount</p> <p class="text-base font-bold font-mono text-foreground"><!></p></div> <div class="bg-card border border-border rounded-2xl p-4 space-y-1 shadow-xs"><p class="text-[10px] text-muted-foreground uppercase font-semibold tracking-wider">Expected Cost</p> <p class="text-base font-bold font-mono text-foreground"><!></p></div> <div class="bg-card border border-border rounded-2xl p-4 space-y-1 shadow-xs border-l-4 border-l-rose-500"><p class="text-[10px] text-muted-foreground uppercase font-semibold tracking-wider">Total Settled (Paid)</p> <p class="text-base font-bold font-mono text-rose-600"><!></p></div> <div class="bg-card border border-border rounded-2xl p-4 space-y-1 shadow-xs border-l-4 border-l-emerald-500"><p class="text-[10px] text-muted-foreground uppercase font-semibold tracking-wider">Purchase Returns (Refunds)</p> <p class="text-base font-bold font-mono text-emerald-600"><!></p></div> <div class="bg-card border border-border rounded-2xl p-4 space-y-1 shadow-xs border-l-4 border-l-sky-500"><p class="text-[10px] text-muted-foreground uppercase font-semibold tracking-wider">Sales Returns (Cust Refunds)</p> <p class="text-base font-bold font-mono text-sky-600"><!></p></div> <div><p class="text-[10px] text-muted-foreground uppercase font-semibold tracking-wider">Profit</p> <p><!></p></div></div> <div class="flex flex-wrap items-center gap-2.5 bg-muted/20 p-3 rounded-2xl border border-border/50"><!> <a href="/suppliers/returns/record" class="h-8.5 px-3.5 rounded-xl border border-border bg-card hover:bg-muted text-foreground flex items-center gap-1.5 text-xs font-semibold transition-all cursor-pointer"><!> Go to Returns Hub</a> <!></div> <!> <div class="bg-card border border-border rounded-2xl overflow-hidden shadow-xs"><div class="p-4 border-b border-border bg-muted/20"><h2 class="text-xs font-bold text-foreground"> </h2></div> <!></div> <div class="bg-card border border-border rounded-2xl overflow-hidden shadow-xs"><div class="p-4 border-b border-border bg-muted/20"><h2 class="text-xs font-bold text-foreground"> </h2></div> <!></div> <div class="bg-card border border-border rounded-2xl overflow-hidden shadow-xs"><div class="p-4 border-b border-border bg-muted/20"><h2 class="text-xs font-bold text-foreground"> </h2></div> <!></div></div>`);
var root_73 = from_html(`<li class="ml-5"><span class="absolute -left-1.5 mt-0.5 h-3 w-3 rounded-full border-2 border-sky-400 bg-card"></span> <div class="text-xs"><p class="font-semibold text-foreground"> </p> <p class="text-muted-foreground"> <!></p></div></li>`);
var root_74 = from_html(`<li class="ml-5"><span class="absolute -left-1.5 mt-0.5 h-3 w-3 rounded-full border-2 border-amber-400 bg-card"></span> <div class="text-xs"><p class="font-semibold text-foreground">Supplier Payment — <!></p> <p class="text-muted-foreground"> <!></p></div></li>`);
var root_75 = from_html(`<li class="ml-5"><span class="absolute -left-1.5 mt-0.5 h-3 w-3 rounded-full border-2 border-emerald-400 bg-card"></span> <div class="text-xs"><p class="font-semibold text-foreground">Purchase Return — <!></p> <p class="text-muted-foreground"> <!></p></div></li>`);
var root_76 = from_html(`<li class="ml-5"><span class="absolute -left-1.5 mt-0.5 h-3 w-3 rounded-full border-2 border-sky-400 bg-card"></span> <div class="text-xs"><p class="font-semibold text-foreground">Sales Return — <!></p> <p class="text-muted-foreground"> <!></p></div></li>`);
var root_77 = from_html(`<div class="bg-card border border-border rounded-2xl p-5 space-y-3"><h2 class="text-sm font-bold flex items-center gap-2"><!> Booking Timeline</h2> <ol class="relative border-l border-border/60 ml-3 space-y-6"><li class="ml-5"><span class="absolute -left-1.5 mt-0.5 h-3 w-3 rounded-full border-2 border-primary bg-card"></span> <div class="text-xs"><p class="font-semibold text-foreground">Booking Created</p> <p class="text-muted-foreground"><!></p></div></li> <!> <!> <!> <!> <li class="ml-5"><span class="absolute -left-1.5 mt-0.5 h-3 w-3 rounded-full border-2 border-emerald-400 bg-card"></span> <div class="text-xs"><p class="font-semibold text-foreground">Last Updated</p> <p class="text-muted-foreground"><!></p></div></li></ol></div>`);
var root_78 = from_html(`<div class="bg-card border border-border rounded-2xl p-4 flex flex-wrap gap-3 items-center"><span> </span> <span class="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide bg-sky-50 text-sky-700 border border-sky-200"> </span> <!> <span class="ml-auto text-xs text-muted-foreground">Created: <!> &nbsp;•&nbsp;
				Updated: <!></span></div> <!> <!> <!> <div class="border-b border-border flex gap-1 overflow-x-auto print:hidden"></div> <!>`, 1);
var root_79 = from_html(`<div class="bg-card border border-border rounded-2xl p-16 text-center text-muted-foreground text-xs">Booking not found.</div>`);
var root_80 = from_html(`<div class="col-span-2 p-3 bg-muted/30 border border-border/80 rounded-xl text-xs flex items-center justify-between"><div class="space-y-0.5"><span class="text-[10px] text-muted-foreground uppercase font-semibold block">Current Supplier Wallet Balance</span> <span> <!></span></div> <span> </span></div>`);
var root_81 = from_html(`<div class="space-y-1.5 col-span-2"><label for="pay-source" class="block font-semibold text-foreground"> <span class="text-red-500">*</span></label> <!></div>`);
var root_82 = from_html(`<div class="col-span-2 p-2.5 bg-amber-500/10 border border-amber-500/30 rounded-xl text-amber-700 dark:text-amber-400 font-medium text-[11px] flex items-center gap-1.5"><!> <span> </span></div>`);
var root_83 = from_html(`<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4"><div class="bg-card border border-border rounded-2xl max-w-lg w-full p-6 shadow-xl space-y-4"><div class="flex items-center justify-between pb-3 border-b border-border/50"><h3 class="text-sm font-bold text-foreground flex items-center gap-1.5"><!> </h3> <button class="p-1 hover:bg-muted rounded-lg text-muted-foreground hover:text-foreground cursor-pointer"><!></button></div> <form class="space-y-4 text-xs"><div class="grid grid-cols-2 gap-4"><div class="space-y-1.5 col-span-2"><label for="pay-supplier" class="block font-semibold text-foreground">Select Supplier <span class="text-red-500">*</span></label> <!></div> <!> <div class="space-y-1.5"><label for="pay-amount" class="block font-semibold text-foreground">Payment Amount <span class="text-red-500">*</span></label> <!></div> <div class="space-y-1.5"><label for="pay-method" class="block font-semibold text-foreground">Payment Method <span class="text-red-500">*</span></label> <select id="pay-method" class="h-9.5 w-full bg-muted/60 border border-border rounded-xl px-2.5 text-foreground cursor-not-allowed opacity-80" disabled=""><option>Credit</option></select></div> <!> <!> <div class="space-y-1.5 col-span-2"><label for="pay-ref" class="block font-semibold text-foreground">Reference / Cheque Number</label> <!></div> <div class="space-y-1.5 col-span-2"><label for="pay-desc" class="block font-semibold text-foreground">Description / Notes</label> <!></div></div> <div class="flex justify-end gap-2.5 pt-4 border-t border-border/50"><!> <!></div></form></div></div>`);
var root_84 = from_html(`<p class="text-[11px] font-semibold text-red-600 flex items-center gap-1 mt-1.5 animate-in fade-in duration-150"><!> <span> </span></p>`);
var root_85 = from_html(`<!> Confirm & Approve Payment`, 1);
var root_86 = from_html(`<div class="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-in fade-in duration-200"><div class="bg-card border border-border rounded-2xl p-6 max-w-md w-full shadow-2xl space-y-4"><div class="flex items-center justify-between border-b border-border/40 pb-3"><div class="flex items-center gap-2"><!> <h3 class="text-base font-bold text-foreground">Enter Bank Reference ID</h3></div> <button class="p-1 text-muted-foreground hover:text-foreground rounded-lg transition-colors cursor-pointer"><!></button></div> <p class="text-xs text-muted-foreground leading-relaxed">Please enter the unique Bank / Online Transaction Reference ID for this payment application. Duplicate reference IDs are strictly prohibited and cannot be reused.</p> <form class="space-y-4"><div class="space-y-1.5"><label for="refIdInput" class="text-xs font-semibold text-foreground">Transaction Reference ID *</label> <!> <!></div> <div class="flex items-center justify-end gap-2 pt-3 border-t border-border/40"><!> <!></div></form></div></div>`);
var root_87 = from_html(`<!> Save Fee Changes`, 1);
var root_88 = from_html(`<div class="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-in fade-in duration-200"><div class="bg-card border border-border rounded-2xl max-w-md w-full p-6 space-y-4 shadow-2xl"><div class="flex items-center justify-between border-b border-border/40 pb-3"><div class="flex items-center gap-2"><!> <h3 class="text-base font-bold text-foreground">Edit Government Fee / Supplier Payment</h3></div> <button class="p-1 text-muted-foreground hover:text-foreground rounded-lg transition-colors cursor-pointer"><!></button></div> <form class="space-y-4 text-xs"><div class="space-y-1.5"><label for="editGovtAmt" class="font-semibold text-foreground">Government Fee Amount (BHD) *</label> <!></div> <div class="space-y-1.5"><label for="editGovtSupplier" class="font-semibold text-foreground">Supplier *</label> <select id="editGovtSupplier" class="h-9.5 w-full bg-background border border-border rounded-xl px-2.5 text-xs font-medium"></select></div> <div class="space-y-1.5"><label for="editGovtRef" class="font-semibold text-foreground">Reference / Txn Number</label> <!></div> <div class="space-y-1.5"><label for="editGovtDesc" class="font-semibold text-foreground">Description / Narration</label> <!></div> <div class="flex items-center justify-end gap-2 pt-3 border-t border-border/40"><!> <!></div></form></div></div>`);
var root_89 = from_html(`<div class="space-y-6 print:space-y-2"><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 print:hidden"><div class="flex items-center gap-3"><!> <div><h1 class="text-xl font-bold text-foreground capitalize"> <span class="font-mono text-primary"> </span></h1> <!></div></div> <div class="flex flex-wrap items-center gap-2"><!> <!> <!></div></div> <!></div>  <!> <!> <!> <!> <!> <!> <!> <!> <!>`, 1);
function _page($$anchor, $$props) {
	push($$props, true);
	const $page = () => store_get(page, "$page", $$stores);
	const $currentUser = () => store_get(currentUser, "$currentUser", $$stores);
	const [$$stores, $$cleanup] = setup_stores();
	function getInvoiceEntityType(type) {
		return {
			flights: "flight",
			hotels: "hotel",
			visa: "visa",
			vfs: "vfs",
			holiday: "holiday",
			transportation: "transport",
			"other-services": "other"
		}[type] ?? type;
	}
	const serviceType = user_derived(() => $page().params.serviceType || "flights");
	const bookingId = user_derived(() => $page().params.id);
	let detail = state(null);
	let loading = state(false);
	let actionLoading = state(false);
	let error = state(null);
	let activeTab = state("overview");
	let cashAccounts = state(proxy([]));
	let banks = state(proxy([]));
	let suppliersList = state(proxy([]));
	let systemUsers = state(proxy([]));
	let headsList = state(proxy([]));
	let agentsList = state(proxy([]));
	let selectedCashAccountIdVal = state("");
	let showStatusConfirmModal = state(false);
	let showReferenceIdModal = state(false);
	let onlineReferenceIdVal = state("");
	let refIdModalError = state(null);
	let statusConfirmTitle = state("");
	let statusConfirmMessage = state("");
	let statusConfirmActionLabel = state("");
	let statusConfirmIsDestructive = state(false);
	let targetBookingStatusToApply = state("");
	let showSpRejectModal = state(false);
	let spToReject = state(null);
	let spRejectLoading = state(false);
	let showMarkDealClosedModal = state(false);
	let showUnlockModal = state(false);
	let showUnlockOperationModal = state(false);
	let showLockOperationModal = state(false);
	let completionLoading = state(false);
	let localOperationClosedOverride = state(null);
	let localDealClosedOverride = state(null);
	async function handleMarkAsDealClosed() {
		try {
			if (!get(bookingId)) return;
			set(completionLoading, true);
			set(localDealClosedOverride, true);
			await updateBookingProcessingStatus(get(serviceType), get(bookingId), "deal_closed");
			if (typeof localStorage !== "undefined") {
				localStorage.setItem(`tx_deal_closed_${get(serviceType)}_${get(bookingId)}`, "true");
				localStorage.setItem(`txops_${get(serviceType)}_closed_${get(bookingId)}`, "true");
				if (get(serviceType) === "visa") localStorage.setItem(`txops_visa_closed_${get(bookingId)}`, "true");
			}
			if (get(sd)) get(sd).isDealClosed = true;
			toast.success("Deal marked as closed successfully. Supplier payouts and returns are now locked.");
			set(showMarkDealClosedModal, false);
			await fetchDetail();
		} catch (err) {
			toast.error(err?.message || "Failed to mark deal as closed");
		} finally {
			set(completionLoading, false);
		}
	}
	async function handleLockOperation() {
		try {
			if (!get(bookingId)) return;
			set(completionLoading, true);
			set(localOperationClosedOverride, true);
			if (typeof localStorage !== "undefined") {
				localStorage.setItem(`txops_${get(serviceType)}_closed_${get(bookingId)}`, "true");
				if (get(serviceType) === "visa") localStorage.setItem(`txops_visa_closed_${get(bookingId)}`, "true");
			}
			if (get(sd)) {
				get(sd).operationClosed = true;
				get(sd).operation_closed = true;
			}
			if (get(detail)) {
				get(detail).operationClosed = true;
				get(detail).operation_closed = true;
			}
			await updateBookingOperationClosed(get(serviceType), get(bookingId), true);
			toast.success("Operation locked successfully by Master Accountant. Operational actions are now locked in Operational Portal.");
			set(showLockOperationModal, false);
			await fetchDetail();
		} catch (err) {
			set(localOperationClosedOverride, null);
			toast.error(err?.message || "Failed to lock operation");
		} finally {
			set(completionLoading, false);
		}
	}
	async function handleUnlockOperation() {
		try {
			if (!get(bookingId)) return;
			set(completionLoading, true);
			set(localOperationClosedOverride, false);
			if (typeof localStorage !== "undefined") {
				localStorage.removeItem(`txops_${get(serviceType)}_closed_${get(bookingId)}`);
				localStorage.removeItem(`txops_visa_closed_${get(bookingId)}`);
			}
			if (get(sd)) {
				get(sd).operationClosed = false;
				get(sd).operation_closed = false;
			}
			if (get(detail)) {
				get(detail).operationClosed = false;
				get(detail).operation_closed = false;
			}
			await updateBookingOperationClosed(get(serviceType), get(bookingId), false);
			toast.success("Operation unlocked successfully by Master Accountant. Operational actions are now editable in Operational Portal.");
			set(showUnlockOperationModal, false);
			await fetchDetail();
		} catch (err) {
			set(localOperationClosedOverride, null);
			toast.error(err?.message || "Failed to unlock operation");
		} finally {
			set(completionLoading, false);
		}
	}
	async function handleUnlockBooking() {
		try {
			if (!get(bookingId)) return;
			set(completionLoading, true);
			set(localDealClosedOverride, false);
			await updateBookingProcessingStatus(get(serviceType), get(bookingId), "unlocked");
			if (typeof localStorage !== "undefined") {
				localStorage.removeItem(`tx_deal_closed_${get(serviceType)}_${get(bookingId)}`);
				localStorage.removeItem(`txops_${get(serviceType)}_closed_${get(bookingId)}`);
				if (get(serviceType) === "visa") localStorage.removeItem(`txops_visa_closed_${get(bookingId)}`);
			}
			if (get(sd)) {
				get(sd).isDealClosed = false;
				get(sd).is_deal_closed = false;
			}
			if (get(detail)) {
				get(detail).isDealClosed = false;
				get(detail).is_deal_closed = false;
			}
			toast.success("Deal unlocked successfully by Master Accountant. Payouts and returns are now accessible.");
			set(showUnlockModal, false);
			await fetchDetail();
		} catch (err) {
			set(localDealClosedOverride, null);
			toast.error(err?.message || "Failed to unlock deal");
		} finally {
			set(completionLoading, false);
		}
	}
	const payIdempotency = createIdempotentOperation();
	createIdempotentOperation();
	createIdempotentOperation();
	const sd = user_derived(() => get(detail)?.salesDetail ?? null);
	const isAgent = user_derived(() => get(sd)?.clientType?.toLowerCase() === "agent");
	const isCashBooking = user_derived(() => get(sd)?.paymentMethod?.toLowerCase() === "cash" || get(sd)?.paymentMode?.toLowerCase() === "cash" || get(serviceType) === "visa" && get(sd)?.applicants?.[0]?.paymentMethod?.toLowerCase() === "cash");
	const displayPaymentMethod = user_derived(() => get(sd)?.paymentMethod || get(serviceType) === "visa" && get(sd)?.applicants?.[0]?.paymentMethod || get(sd)?.paymentMode || "");
	const totalPaid = user_derived(() => get(detail)?.supplierPayments?.filter((p) => p.status?.toLowerCase() === "approved")?.reduce((sum, p) => sum + (Number(p.amount) || 0), 0) ?? 0);
	const hasSettledSupplierPayments = user_derived(() => get(detail)?.supplierPayments?.some((p) => p.status?.toLowerCase() === "approved") ?? false);
	const pendingSupplierPayments = user_derived(() => get(detail)?.supplierPayments?.filter((p) => p.status?.toLowerCase().includes("pending") || p.status?.toLowerCase() === "draft") ?? []);
	const pendingPurchaseReturns = user_derived(() => get(detail)?.purchaseReturns?.filter((r) => r.status?.toLowerCase().includes("pending") || r.status?.toLowerCase() === "draft") ?? []);
	const pendingSalesReturns = user_derived(() => get(detail)?.salesReturns?.filter((r) => r.status?.toLowerCase().includes("pending") || r.status?.toLowerCase() === "draft") ?? []);
	const totalPendingSettlements = user_derived(() => get(pendingSupplierPayments).length + get(pendingPurchaseReturns).length + get(pendingSalesReturns).length);
	const totalPurchaseReturns = user_derived(() => get(detail)?.purchaseReturns?.filter((r) => r.status?.toLowerCase() === "approved")?.reduce((sum, r) => sum + (Number(r.amount) || 0), 0) ?? 0);
	const totalSalesReturns = user_derived(() => get(detail)?.salesReturns?.filter((r) => r.status?.toLowerCase() === "approved")?.reduce((sum, r) => sum + (Number(r.amount) || 0), 0) ?? 0);
	const isPaymentSuccessful = user_derived(() => {
		const raw = (get(sd)?.paymentStatus || get(sd)?.payment_status || get(serviceType) === "visa" && get(sd)?.applicants?.[0]?.paymentStatus || get(serviceType) === "visa" && get(sd)?.applicants?.[0]?.payment_status || "").toLowerCase().trim();
		return raw === "success" || raw === "paid";
	});
	const isOperationClosed = user_derived(() => {
		if (get(localOperationClosedOverride) !== null) return get(localOperationClosedOverride);
		if (typeof localStorage !== "undefined") {
			if (localStorage.getItem(`txops_${get(serviceType)}_closed_${get(bookingId)}`) === "true" || get(serviceType) === "visa" && localStorage.getItem(`txops_visa_closed_${get(bookingId)}`) === "true") return true;
		}
		return Boolean(get(sd)?.operationClosed === true || get(sd)?.operationClosed === 1 || get(sd)?.operation_closed === true || get(sd)?.operation_closed === 1 || get(detail)?.operationClosed === true || get(detail)?.operation_closed === true);
	});
	const isDealClosed = user_derived(() => {
		if (get(localDealClosedOverride) !== null) return get(localDealClosedOverride);
		if (typeof localStorage !== "undefined") {
			if (localStorage.getItem(`tx_deal_closed_${get(serviceType)}_${get(bookingId)}`) === "true") return true;
		}
		if (get(sd)?.isDealClosed === true || get(sd)?.is_deal_closed === true || get(detail)?.isDealClosed === true || get(detail)?.is_deal_closed === true) return true;
		if (get(sd)?.isDealClosed === false || get(sd)?.is_deal_closed === false || get(detail)?.isDealClosed === false || get(detail)?.is_deal_closed === false) return false;
		const proc = (get(sd)?.processingStatus || get(detail)?.processingStatus || "").toLowerCase().trim();
		if (proc === "deal_closed" || proc === "locked") return true;
		if (proc === "unlocked" || proc === "open") return false;
		const ord = (get(sd)?.orderStatus || get(detail)?.orderStatus || "").toLowerCase().trim();
		if (ord === "closed" || ord === "deal_closed") return true;
		return false;
	});
	const canPay = user_derived(() => get(isPaymentSuccessful) && !get(isDealClosed));
	user_derived(() => get(isPaymentSuccessful) && get(totalPaid) > 0 && !get(isDealClosed));
	user_derived(() => get(isPaymentSuccessful) && get(totalPurchaseReturns) > 0 && !get(isDealClosed));
	const calculatedProfit = user_derived(() => {
		if (get(sd)?.isInhouse) return 0;
		if (get(serviceType) === "visa" && (get(sd)?.processingStatus?.toLowerCase() === "rejected" || get(sd)?.isRejected)) return get(sd)?.rejectionFee ?? 0;
		if (get(hasSettledSupplierPayments) || get(totalPaid) > 0) {
			const effectiveCost = get(totalPaid) - get(totalPurchaseReturns);
			return (get(sd)?.payableAmount ?? 0) - get(totalSalesReturns) - effectiveCost;
		}
		if ((get(sd)?.expectedSupplierCost ?? 0) > 0) return (get(sd)?.payableAmount ?? 0) - get(totalSalesReturns) - get(sd).expectedSupplierCost;
		return 0;
	});
	function supplierMatchesServiceType(supplier, sType) {
		if (!supplier) return false;
		if (get(sd)?.supplierId && Number(supplier.id) === Number(get(sd).supplierId)) return true;
		const cats = Array.isArray(supplier.categories) ? supplier.categories : [];
		if (cats.length === 0) return false;
		const st = (sType || "").toLowerCase();
		return cats.some((cat) => {
			const c = (cat || "").toLowerCase().trim();
			if ((st === "flights" || st === "flight") && (c.includes("flight") || c.includes("air"))) return true;
			if ((st === "hotels" || st === "hotel") && c.includes("hotel")) return true;
			if ((st === "visa" || st === "visas") && c.includes("visa")) return true;
			if (st === "vfs" && c.includes("vfs")) return true;
			if ((st === "holiday" || st === "holiday-packages") && (c.includes("holiday") || c.includes("package"))) return true;
			if ((st === "transportation" || st === "transport") && c.includes("transport")) return true;
			if ((st === "other-services" || st === "other" || st === "other_service") && c.includes("other")) return true;
			return false;
		});
	}
	const filteredSuppliersList = user_derived(() => {
		const active = (get(suppliersList) || []).filter((s) => s.isActive !== false);
		const matching = active.filter((s) => supplierMatchesServiceType(s, get(serviceType)));
		return matching.length > 0 ? matching : active;
	});
	const selectedPaySupplier = user_derived(() => get(suppliersList).find((s) => Number(s.id) === Number(get(paySupplierId))) ?? null);
	const filteredSourceAccounts = user_derived(() => {
		if (get(payMethod) === "cash") return get(cashAccounts).map((a) => ({
			id: `account_${a.id}`,
			name: `[Cash] ${a.name} (Bal: ${a.currentBalance.toFixed(3)} BHD)`
		}));
		return get(banks).map((b) => ({
			id: `bank_${b.id}`,
			name: `[Bank] ${b.bankName} (Bal: ${b.currentBalance.toFixed(3)} BHD)`
		}));
	});
	user_derived(() => {
		if (get(prDestType) === "account") return get(cashAccounts).map((a) => ({
			id: `account_${a.id}`,
			name: `[Cash] ${a.name} (Bal: ${a.currentBalance.toFixed(3)} BHD)`
		}));
		return get(banks).map((b) => ({
			id: `bank_${b.id}`,
			name: `[Bank] ${b.bankName} (Bal: ${b.currentBalance.toFixed(3)} BHD)`
		}));
	});
	user_derived(() => {
		if (get(srSourceType) === "account") return get(cashAccounts).map((a) => ({
			id: `account_${a.id}`,
			name: `[Cash] ${a.name} (Bal: ${a.currentBalance.toFixed(3)} BHD)`
		}));
		return get(banks).map((b) => ({
			id: `bank_${b.id}`,
			name: `[Bank] ${b.bankName} (Bal: ${b.currentBalance.toFixed(3)} BHD)`
		}));
	});
	const paidSuppliersForBooking = user_derived(() => {
		const payments = (get(detail)?.supplierPayments ?? []).filter((p) => (p.status || "").toLowerCase() === "approved");
		const returns = (get(detail)?.purchaseReturns ?? []).filter((r) => (r.status || "").toLowerCase() === "approved");
		const supMap = /* @__PURE__ */ new Map();
		for (const p of payments) {
			const sId = Number(p.supplierId);
			if (!sId) continue;
			const sup = get(suppliersList).find((s) => Number(s.id) === sId);
			const supName = sup?.name || p.supplierName || `Supplier #${sId}`;
			const supCode = sup?.code;
			if (!supMap.has(sId)) supMap.set(sId, {
				id: sId,
				name: supName,
				code: supCode,
				totalPaid: 0,
				totalReturned: 0,
				maxRefundable: 0
			});
			const entry = supMap.get(sId);
			entry.totalPaid += Number(p.amount) || 0;
		}
		for (const r of returns) {
			const sId = Number(r.supplierId);
			if (supMap.has(sId)) {
				const entry = supMap.get(sId);
				entry.totalReturned += Number(r.amount) || 0;
			}
		}
		for (const entry of supMap.values()) entry.maxRefundable = Math.max(0, entry.totalPaid - entry.totalReturned);
		return Array.from(supMap.values());
	});
	function formatPaymentMethodLabel(sp) {
		if (!sp) return "—";
		const status = (sp.status || "").toLowerCase();
		if (status === "pending" || status === "draft" || status.includes("pending")) return "—";
		const pm = (sp.paymentMethod || "").toLowerCase();
		if (pm.includes("bank")) {
			const bId = sp.sourceBankId || sp.source_bank_id || (sp.sourceAccountId && String(sp.sourceAccountId).startsWith("bank_") ? String(sp.sourceAccountId).substring(5) : null);
			const bankName = sp.sourceBankName || sp.source_bank_name || (bId ? get(banks).find((b) => Number(b.id) === Number(bId))?.bankName : null) || sp.sourceAccountName || sp.source_account_name;
			return bankName ? `Bank (${bankName})` : "Bank Account";
		}
		if (pm.includes("cash")) {
			const aId = sp.sourceAccountId || sp.source_account_id || (sp.sourceAccountId && String(sp.sourceAccountId).startsWith("account_") ? String(sp.sourceAccountId).substring(8) : null);
			const cashName = sp.sourceAccountName || sp.source_account_name || (aId ? get(cashAccounts).find((a) => Number(a.id) === Number(aId))?.name : null);
			return cashName ? `Cash (${cashName})` : "Cash Account";
		}
		if (pm.includes("wallet")) return "Supplier Wallet";
		if (pm.includes("credit")) return "Credit";
		return sp.paymentMethod || "—";
	}
	user_derived(() => [...get(cashAccounts).map((a) => ({
		id: `account_${a.id}`,
		name: `[Cash] ${a.name} (Bal: ${a.currentBalance.toFixed(3)} BHD)`
	})), ...get(banks).map((b) => ({
		id: `bank_${b.id}`,
		name: `[Bank] ${b.bankName} (Bal: ${b.currentBalance.toFixed(3)} BHD)`
	}))]);
	user_derived(() => {
		const list = [];
		const bookingAgentId = get(sd)?.agentId || (get(sd)?.clientType?.toLowerCase() === "agent" ? get(sd)?.headId : null);
		const bookingAgentName = get(sd)?.agent || (get(sd)?.clientType?.toLowerCase() === "agent" ? get(sd)?.headName : null) || "Agent";
		const bookingHeadId = get(sd)?.headId || (get(sd)?.clientType?.toLowerCase() === "agent" ? get(sd)?.agentId : null);
		const bookingHeadName = get(sd)?.headName || (get(sd)?.clientType?.toLowerCase() === "agent" ? get(sd)?.agent : null) || get(sd)?.name || get(sd)?.guestName || get(sd)?.passengerName || "Customer Head";
		if (get(srRecipientType) === "Agent") {
			if (bookingAgentId) list.push({
				id: Number(bookingAgentId),
				name: `${bookingAgentName} (ID: ${bookingAgentId})`
			});
			if (bookingHeadId && bookingHeadId !== bookingAgentId) list.push({
				id: Number(bookingHeadId),
				name: `${bookingHeadName} (Head ID: ${bookingHeadId})`
			});
			for (const a of get(agentsList)) if (!list.some((i) => i.id === a.id)) list.push({
				id: a.id,
				name: `${a.firstName || a.fullName || a.name || "Agent"} (ID: ${a.id})`
			});
			for (const h of get(headsList)) if (h.type === "agent" && !list.some((i) => i.id === h.id)) list.push({
				id: h.id,
				name: `${h.fullName || (h.firstName ? `${h.firstName} ${h.lastName || ""}`.trim() : h.name || "Agent Head")} (ID: ${h.id})`
			});
		} else {
			if (bookingHeadId) list.push({
				id: Number(bookingHeadId),
				name: `${bookingHeadName} (ID: ${bookingHeadId})`
			});
			if (bookingAgentId && bookingAgentId !== bookingHeadId) list.push({
				id: Number(bookingAgentId),
				name: `${bookingAgentName} (Agent Head ID: ${bookingAgentId})`
			});
			for (const h of get(headsList)) if (!list.some((i) => i.id === h.id)) list.push({
				id: h.id,
				name: `${h.fullName || (h.firstName ? `${h.firstName} ${h.lastName || ""}`.trim() : h.name || "Head")} (ID: ${h.id})`
			});
		}
		if (list.length === 0) {
			const fallbackId = get(sd)?.agentId || get(sd)?.headId || 1;
			const fallbackName = get(sd)?.agent || get(sd)?.headName || get(sd)?.name || "Recipient";
			list.push({
				id: Number(fallbackId),
				name: `${fallbackName} (ID: ${fallbackId})`
			});
		}
		return list;
	});
	user_derived(() => {
		if (get(paidSuppliersForBooking).length > 0) return get(paidSuppliersForBooking).map((s) => ({
			id: s.id,
			name: s.code ? `${s.name} (${s.code})` : s.name,
			subtext: `Paid: ${s.totalPaid.toFixed(3)} BHD | Available Refund: ${s.maxRefundable.toFixed(3)} BHD`
		}));
		return get(suppliersList).map((s) => ({
			id: s.id,
			name: s.code ? `${s.name} (${s.code})` : s.name
		}));
	});
	const selectedPrSupplierInfo = user_derived(() => {
		return get(paidSuppliersForBooking).find((s) => s.id === Number(get(prSupplierId))) ?? null;
	});
	const currentSelectedSupplierMaxRefund = user_derived(() => {
		if (get(selectedPrSupplierInfo)) return get(selectedPrSupplierInfo).maxRefundable;
		return Math.max(0, get(totalPaid) - get(totalPurchaseReturns));
	});
	user_effect(() => {
		if (get(showPurchaseReturnModal) && get(prSupplierId)) {
			const maxVal = get(currentSelectedSupplierMaxRefund);
			if (get(prAmount) > maxVal || get(prAmount) <= 0) set(prAmount, maxVal, true);
		}
	});
	let showPaymentModal = state(false);
	let showPurchaseReturnModal = state(false);
	state(false);
	let showEditGovtFeeModal = state(false);
	let editGovtFeePaymentId = state(0);
	let editGovtFeeAmount = state(0);
	let editGovtFeeRefNum = state("");
	let editGovtFeeDesc = state("");
	let editGovtFeeSupplierId = state(0);
	function openEditGovtFeeModal(sp) {
		set(editGovtFeePaymentId, sp.id, true);
		set(editGovtFeeAmount, sp.amount, true);
		set(editGovtFeeRefNum, sp.referenceNumber ?? "", true);
		set(editGovtFeeDesc, sp.description ?? "", true);
		set(editGovtFeeSupplierId, sp.supplierId, true);
		set(showEditGovtFeeModal, true);
	}
	async function submitEditGovtFeeForm(e) {
		e.preventDefault();
		if (get(editGovtFeeAmount) == null || isNaN(get(editGovtFeeAmount)) || get(editGovtFeeAmount) < 0) return;
		set(actionLoading, true);
		try {
			await updateSupplierPayment(get(editGovtFeePaymentId), {
				amount: get(editGovtFeeAmount),
				referenceNumber: get(editGovtFeeRefNum) || null,
				description: get(editGovtFeeDesc) || null,
				supplierId: get(editGovtFeeSupplierId) || null
			});
			toast.success("Supplier payment / government fee updated successfully.");
			set(showEditGovtFeeModal, false);
			await fetchDetail();
		} catch (err) {
			toast.error(err.message || "Failed to update payment.");
		} finally {
			set(actionLoading, false);
		}
	}
	let approvingPendingPayment = state(null);
	function handleApproveSupplierPayment(sp) {
		payIdempotency.regenerate();
		set(approvingPendingPayment, sp, true);
		const rawSupplierId = sp.supplierId ? Number(sp.supplierId) : get(sd)?.supplierId ? Number(get(sd).supplierId) : 0;
		set(paySupplierId, rawSupplierId || (get(filteredSuppliersList)[0]?.id ? Number(get(filteredSuppliersList)[0].id) : 0), true);
		set(payAmount, Number(sp.amount) || 0, true);
		set(payMethod, "supplier_wallet");
		set(paySourceId, "");
		set(payRefNum, sp.referenceNumber || sp.transaction_no || "", true);
		set(payDesc, sp.description || `Supplier Payment for ${serviceLabel(get(serviceType))} ${get(sd)?.documentNumber || `#${get(bookingId)}`}`, true);
		set(showPaymentModal, true);
	}
	async function handleRejectSupplierPayment(sp) {
		set(spToReject, sp, true);
		set(showSpRejectModal, true);
	}
	async function handleApprovePurchaseReturn(pr) {
		set(actionLoading, true);
		try {
			await approvePurchaseReturn(pr.id);
			toast.success("Purchase Return approved and posted successfully.");
			await fetchDetail();
		} catch (err) {
			toast.error(err.message || "Failed to approve purchase return.");
		} finally {
			set(actionLoading, false);
		}
	}
	async function handleRejectPurchaseReturn(pr) {
		set(spToReject, {
			...pr,
			type: "purchase_return"
		}, true);
		set(showSpRejectModal, true);
	}
	async function handleApproveSalesReturn(sr) {
		set(actionLoading, true);
		try {
			await approveSalesReturn(sr.id);
			toast.success("Sales Return approved and posted successfully.");
			await fetchDetail();
		} catch (err) {
			toast.error(err.message || "Failed to approve sales return.");
		} finally {
			set(actionLoading, false);
		}
	}
	async function handleRejectSalesReturn(sr) {
		set(spToReject, {
			...sr,
			type: "sales_return"
		}, true);
		set(showSpRejectModal, true);
	}
	/** Replace stored raw "#<id>" in descriptions with the proper document number */
	function formatSpDesc(desc) {
		if (!desc) return "Government Payment Log";
		const docNum = get(sd)?.documentNumber;
		if (!docNum) return desc;
		return desc.replace(new RegExp(`#${get(bookingId)}\\b`, "g"), docNum);
	}
	async function submitSpRejection(reason) {
		if (!get(spToReject)) return;
		set(spRejectLoading, true);
		try {
			if (get(spToReject).type === "purchase_return") {
				await rejectPurchaseReturn(get(spToReject).id, reason);
				toast.success("Purchase Return rejected.");
			} else if (get(spToReject).type === "sales_return") {
				await rejectSalesReturn(get(spToReject).id, reason);
				toast.success("Sales Return rejected.");
			} else {
				await rejectSupplierPayment(get(spToReject).id, reason);
				toast.success("Supplier payment / government fee rejected.");
			}
			set(showSpRejectModal, false);
			set(spToReject, null);
			await fetchDetail();
		} catch (err) {
			toast.error(err.message || "Failed to reject payment.");
		} finally {
			set(spRejectLoading, false);
		}
	}
	let paySupplierId = state(0);
	let payAmount = state(0);
	let payMethod = state("supplier_wallet");
	let paySourceId = state("");
	let payRefNum = state("");
	let payDesc = state("");
	let prSupplierId = state(0);
	let prAmount = state(0);
	state("");
	let prDestType = state("bank");
	state("");
	let srRecipientType = state("Agent");
	state(0);
	state(0);
	state("");
	let srSourceType = state("bank");
	state("");
	function getSegment(type) {
		return {
			flights: "flights",
			hotels: "hotels",
			visa: "visa",
			vfs: "vfs",
			holiday: "holiday-packages",
			transportation: "transportation",
			"other-services": "other-services"
		}[type] ?? type;
	}
	function serviceLabel(type) {
		return {
			flights: "Flight Booking",
			hotels: "Hotel Booking",
			visa: "Visa Application",
			vfs: "VFS Appointment",
			holiday: "Holiday Package",
			transportation: "Transportation",
			"other-services": "Other Service"
		}[type] ?? type;
	}
	async function loadCashAccounts() {
		try {
			const res = await getAccounts();
			set(cashAccounts, res.filter((a) => a.type.toLowerCase() === "cash" && a.isActive), true);
		} catch (err) {
			console.error("Failed to load cash accounts", err);
		}
	}
	async function loadBanks() {
		try {
			const res = await getBanks();
			set(banks, res.filter((b) => b.isActive), true);
		} catch (err) {
			console.error("Failed to load banks", err);
		}
	}
	async function loadSuppliersList() {
		try {
			set(suppliersList, await getSuppliers(), true);
		} catch (err) {
			console.error("Failed to load suppliers list", err);
		}
	}
	function getSupplierLabel(supplierId) {
		const sup = get(suppliersList).find((s) => Number(s.id) === Number(supplierId));
		if (sup) return `${sup.name} (${sup.code})`;
		return `Supplier #${supplierId}`;
	}
	function getRecipientLabel(type, id, item) {
		if (item?.recipientName) return item.recipientName;
		if (!id) return "N/A";
		const rType = (type || "").toLowerCase().trim();
		const numericId = Number(id);
		if (rType === "agent") {
			if (get(sd)?.agentId && Number(get(sd).agentId) === numericId && get(sd).agent) return get(sd).agent;
			const ag = get(agentsList).find((a) => Number(a.id) === numericId);
			if (ag) {
				const name = ag.agencyName || ag.name || ag.fullName || `${ag.firstName || ""} ${ag.lastName || ""}`.trim();
				if (name) return name;
			}
			if (get(sd)?.agent) return get(sd).agent;
			return `Agent #${id}`;
		}
		if (rType === "head") {
			if (get(sd)?.headId && Number(get(sd).headId) === numericId && get(sd).headName) return get(sd).headName;
			const hd = get(headsList).find((h) => Number(h.id) === numericId);
			if (hd) {
				const name = hd.fullName || hd.headName || hd.name || `${hd.firstName || ""} ${hd.lastName || ""}`.trim();
				if (name) return name;
			}
			if (get(sd)?.headName) return get(sd).headName;
			return `Head #${id}`;
		}
		return `${type || "Recipient"} #${id}`;
	}
	async function loadSystemUsers() {
		try {
			const [accounts, sales, ops] = await Promise.all([
				fetchAccountsStaff().catch(() => []),
				fetchSalesStaff().catch(() => []),
				fetchOperationalStaff().catch(() => [])
			]);
			set(systemUsers, [
				...accounts,
				...sales,
				...ops
			], true);
		} catch (err) {
			console.error("Failed to load system users", err);
		}
	}
	async function loadHeadsAndAgents() {
		try {
			const [headsRes, agentsRes] = await Promise.all([apiFetch("api/sales-entries/heads?pageSize=500").catch(() => null), apiFetch("api/agent").catch(() => null)]);
			if (headsRes && headsRes.items) set(headsList, headsRes.items, true);
			if (agentsRes) set(agentsList, Array.isArray(agentsRes) ? agentsRes : agentsRes.items || [], true);
		} catch (err) {
			console.error("Failed to load heads and agents", err);
		}
	}
	async function fetchDetail() {
		set(loading, true);
		set(error, null);
		try {
			const res = await apiFetch(`api/sales-entries/${getSegment(get(serviceType))}/${get(bookingId)}`);
			set(detail, res, true);
			await Promise.all([
				loadCashAccounts(),
				loadBanks(),
				loadSuppliersList(),
				loadHeadsAndAgents(),
				loadSystemUsers()
			]);
		} catch (err) {
			if (err?.status === 503 || err?.message?.includes("unavailable")) set(error, "Sales portal service is unavailable. Please ensure the backend is running.");
			else if (err?.status === 404) set(error, `Booking #${get(bookingId)} not found.`);
			else set(error, err?.message ?? `Failed to load booking detail. (${err?.status ?? "unknown status"})`, true);
			console.error("[BookingDetail] fetch error:", err);
		} finally {
			set(loading, false);
		}
	}
	const isOnlinePayment = user_derived(() => {
		if (!get(sd)) return false;
		const pm = (get(displayPaymentMethod) || get(sd)?.paymentMethod || get(sd)?.paymentMode || get(sd)?.applicants?.[0]?.paymentMethod || "").toLowerCase().trim();
		if (pm === "cash" || pm === "wallet" || pm.includes("wallet") || pm === "credit" || pm.includes("credit")) return false;
		return true;
	});
	function requestStatusChange(newStatus) {
		if (get(actionLoading)) return;
		set(targetBookingStatusToApply, newStatus, true);
		if (newStatus === "success") {
			if (get(isCashBooking) && !get(selectedCashAccountIdVal)) {
				toast.warning("Please select a destination cash account before approving.");
				return;
			}
			if (get(isOnlinePayment)) {
				set(onlineReferenceIdVal, get(sd)?.paymentReference || get(sd)?.applicants?.[0]?.paymentReference || "", true);
				set(refIdModalError, null);
				set(showReferenceIdModal, true);
				return;
			}
		}
		const docRef = get(sd)?.documentNumber || `#${get(bookingId)}`;
		if (newStatus === "success") {
			set(statusConfirmTitle, `Approve ${serviceLabel(get(serviceType))} Payment`);
			set(statusConfirmMessage, `Are you sure you want to approve payment for ${serviceLabel(get(serviceType))} ${docRef}? This will mark the booking as Paid.`);
			set(statusConfirmActionLabel, "Approve Payment");
			set(statusConfirmIsDestructive, false);
		} else {
			set(statusConfirmTitle, `Reject ${serviceLabel(get(serviceType))} Payment`);
			set(statusConfirmMessage, `Are you sure you want to reject payment for ${serviceLabel(get(serviceType))} ${docRef}? This will set the booking payment status to Failed.`);
			set(statusConfirmActionLabel, "Reject Payment");
			set(statusConfirmIsDestructive, true);
		}
		set(showStatusConfirmModal, true);
	}
	async function executeBookingStatusUpdate(refId) {
		const statusToApply = get(targetBookingStatusToApply) || "success";
		set(actionLoading, true);
		set(refIdModalError, null);
		try {
			const segment = getSegment(get(serviceType));
			const cashAccountId = get(selectedCashAccountIdVal) ? parseInt(get(selectedCashAccountIdVal)) : null;
			await apiFetch(`api/sales-entries/${segment}/${get(bookingId)}/payment-status`, {
				method: "POST",
				body: JSON.stringify({
					status: statusToApply,
					cashAccountId,
					referenceId: refId || null
				})
			});
			toast.success(statusToApply === "success" ? "Booking payment approved successfully." : "Booking payment rejected.");
			set(showReferenceIdModal, false);
			set(showStatusConfirmModal, false);
			await fetchDetail();
		} catch (err) {
			const msg = err?.message ?? "Failed to update payment status.";
			toast.error(msg);
			if (get(showReferenceIdModal)) set(refIdModalError, msg, true);
		} finally {
			set(actionLoading, false);
		}
	}
	async function submitPaymentForm(e) {
		e.preventDefault();
		if (get(actionLoading)) return;
		if (!get(paySupplierId) || get(payAmount) == null || isNaN(get(payAmount)) || get(payAmount) < 0) return;
		set(actionLoading, true);
		try {
			let cleanSource = get(payMethod) === "credit" || get(payMethod) === "supplier_wallet" ? null : get(paySourceId);
			if (get(payMethod) === "cash" && (!cleanSource || !cleanSource.startsWith("account_"))) cleanSource = get(cashAccounts)[0] ? `account_${get(cashAccounts)[0].id}` : null;
			else if ((get(payMethod) === "bank_transfer" || get(payMethod) === "bank") && (!cleanSource || !cleanSource.startsWith("bank_"))) cleanSource = get(banks)[0] ? `bank_${get(banks)[0].id}` : null;
			if (get(approvingPendingPayment)) {
				await updateSupplierPayment(get(approvingPendingPayment).id, {
					supplierId: get(paySupplierId),
					amount: get(payAmount),
					paymentMethod: get(payMethod),
					sourceAccountId: cleanSource,
					referenceNumber: get(payRefNum) || null,
					description: get(payDesc) || null
				});
				await approveSupplierPayment(get(approvingPendingPayment).id);
				toast.success("Supplier payment approved and posted successfully.");
			} else {
				await createSupplierPayment({
					supplierId: get(paySupplierId),
					amount: get(payAmount),
					paymentMethod: get(payMethod),
					sourceAccountId: cleanSource,
					referenceNumber: get(payRefNum) || null,
					externalReference: get(bookingId),
					serviceType: get(serviceType),
					description: get(payDesc) || null,
					supplierName: get(suppliersList).find((s) => s.id === get(paySupplierId))?.name ?? "Supplier"
				}, payIdempotency.key);
				payIdempotency.retire();
				toast.success("Supplier Payment recorded and approved successfully.");
			}
			set(showPaymentModal, false);
			set(approvingPendingPayment, null);
			await fetchDetail();
		} catch (err) {
			toast.error(err.message || "Failed to process payment.");
		} finally {
			set(actionLoading, false);
		}
	}
	function openPaymentForm() {
		payIdempotency.regenerate();
		set(approvingPendingPayment, null);
		const matchedSupplier = get(filteredSuppliersList).find((s) => s.id === get(sd)?.supplierId);
		set(paySupplierId, matchedSupplier ? get(sd)?.supplierId : get(filteredSuppliersList)[0]?.id || 0, true);
		set(payAmount, Math.max(0, (get(sd)?.expectedSupplierCost ?? 0) - get(totalPaid)), true);
		set(payMethod, "supplier_wallet");
		set(paySourceId, "");
		set(payRefNum, "");
		set(payDesc, `Supplier Payment for ${serviceLabel(get(serviceType))} ${get(sd)?.documentNumber || `#${get(bookingId)}`}`);
		set(showPaymentModal, true);
	}
	user_effect(() => {
		if (get(bookingId)) fetchDetail();
	});
	function getUserLabel(userId, item) {
		if (item) {
			const directName = item.requestedByName || item.submittedByName || item.createdByName || item.userName || (typeof item.requestedBy === "string" ? item.requestedBy : null);
			if (directName && typeof directName === "string" && !directName.startsWith("Staff #") && !directName.startsWith("User #")) return directName;
		}
		if (!userId) return "System";
		const numId = Number(userId);
		if ($currentUser()?.id && Number($currentUser().id) === numId) return $currentUser().name || $currentUser().email || `Staff #${userId}`;
		const u = get(systemUsers).find((user) => Number(user.id) === numId || user.userId === numId || user.staffId === numId);
		if (u && (u.name || u.displayName || u.fullName)) return u.name || u.displayName || u.fullName;
		if ($currentUser()?.name && numId === 2) return $currentUser().name;
		return `Staff #${userId}`;
	}
	function statusClass(status) {
		const s = (status ?? "").toLowerCase();
		if (s === "paid" || s === "success" || s === "approved" || s === "completed") return "bg-emerald-50 text-emerald-700 border border-emerald-200";
		if (s.includes("pending") || s === "processing" || s === "in progress" || s === "draft") return "bg-amber-50 text-amber-700 border border-amber-200";
		return "bg-red-50 text-red-700 border border-red-200";
	}
	const tabs = [
		{
			id: "overview",
			label: "Overview",
			icon: File_text
		},
		{
			id: "financial",
			label: "Financial",
			icon: Credit_card
		},
		{
			id: "items",
			label: "Items",
			icon: Package
		},
		{
			id: "supplier",
			label: "Supplier/Returns",
			icon: Send
		},
		{
			id: "timeline",
			label: "Timeline",
			icon: Clock
		}
	];
	var fragment = root_89();
	head("13kgspr", ($$anchor) => {
		deferred_template_effect(($0) => {
			$document.title = `${$0 ?? ""} ${(get(sd)?.documentNumber || get(bookingId)) ?? ""} — Accounts Portal`;
		}, [() => serviceLabel(get(serviceType))]);
	});
	var div = first_child(fragment);
	var div_1 = child(div);
	var div_2 = child(div_1);
	var node = child(div_2);
	Button(node, {
		variant: "outline",
		class: "h-8.5 rounded-xl cursor-pointer flex items-center gap-1.5 text-xs",
		onclick: () => goto(`/sales/bookings/${get(serviceType)}`),
		children: ($$anchor, $$slotProps) => {
			var fragment_1 = root();
			var node_1 = first_child(fragment_1);
			Arrow_left(node_1, { class: "h-3.5 w-3.5" });
			var text = sibling(node_1);
			template_effect(($0) => set_text(text, ` Back to ${$0 ?? ""}s`), [() => serviceLabel(get(serviceType))]);
			append($$anchor, fragment_1);
		},
		$$slots: { default: true }
	});
	var div_3 = sibling(node, 2);
	var h1 = child(div_3);
	var text_1 = child(h1);
	var span = sibling(text_1);
	var text_2 = child(span, true);
	reset(span);
	reset(h1);
	var node_2 = sibling(h1, 2);
	var consequent = ($$anchor) => {
		var p_1 = root_1();
		var text_3 = child(p_1);
		var span_1 = sibling(text_3);
		var text_4 = child(span_1, true);
		reset(span_1);
		reset(p_1);
		template_effect(() => {
			set_text(text_3, `${get(isAgent) ? `Agent: ${get(sd).agent ?? "—"}` : `Head: ${get(sd).headName ?? "—"}`}
						 •  `);
			set_text(text_4, get(sd).clientType);
		});
		append($$anchor, p_1);
	};
	if_block(node_2, ($$render) => {
		if (get(sd)) $$render(consequent);
	});
	reset(div_3);
	reset(div_2);
	var div_4 = sibling(div_2, 2);
	var node_3 = child(div_4);
	var consequent_2 = ($$anchor) => {
		var fragment_2 = comment();
		var node_4 = first_child(fragment_2);
		var consequent_1 = ($$anchor) => {
			{
				let $0 = user_derived(() => get(actionLoading) || get(completionLoading));
				Button($$anchor, {
					variant: "outline",
					class: "h-8.5 rounded-xl cursor-pointer flex items-center gap-1.5 text-xs border-amber-400 bg-amber-100 hover:bg-amber-200 text-amber-950 dark:border-amber-700 dark:bg-amber-950/40 dark:text-amber-300 font-semibold",
					onclick: () => set(showUnlockOperationModal, true),
					get disabled() {
						return get($0);
					},
					children: ($$anchor, $$slotProps) => {
						var fragment_4 = root_2();
						Lock_open(first_child(fragment_4), { class: "h-3.5 w-3.5 text-amber-700 dark:text-amber-400" });
						next();
						append($$anchor, fragment_4);
					},
					$$slots: { default: true }
				});
			}
		};
		var alternate = ($$anchor) => {
			{
				let $0 = user_derived(() => get(actionLoading) || get(completionLoading));
				Button($$anchor, {
					variant: "outline",
					class: "h-8.5 rounded-xl cursor-pointer flex items-center gap-1.5 text-xs border-slate-300 hover:bg-slate-100 text-slate-700 font-medium",
					onclick: () => set(showLockOperationModal, true),
					get disabled() {
						return get($0);
					},
					children: ($$anchor, $$slotProps) => {
						var fragment_6 = root_3();
						Lock(first_child(fragment_6), { class: "h-3.5 w-3.5 text-slate-600" });
						next();
						append($$anchor, fragment_6);
					},
					$$slots: { default: true }
				});
			}
		};
		if_block(node_4, ($$render) => {
			if (get(isOperationClosed)) $$render(consequent_1);
			else $$render(alternate, -1);
		});
		append($$anchor, fragment_2);
	};
	var d = user_derived(() => hasRole("master_accountant"));
	if_block(node_3, ($$render) => {
		if (get(d)) $$render(consequent_2);
	});
	var node_7 = sibling(node_3, 2);
	Button(node_7, {
		variant: "outline",
		class: "h-8.5 rounded-xl cursor-pointer flex items-center gap-1.5 text-xs",
		onclick: fetchDetail,
		children: ($$anchor, $$slotProps) => {
			var fragment_7 = root_4();
			Refresh_cw(first_child(fragment_7), { class: "h-3.5 w-3.5" });
			next();
			append($$anchor, fragment_7);
		},
		$$slots: { default: true }
	});
	Button(sibling(node_7, 2), {
		variant: "default",
		class: "h-8.5 rounded-xl cursor-pointer flex items-center gap-1.5 text-xs bg-primary text-primary-foreground",
		onclick: () => previewDocument("invoice", getInvoiceEntityType(get(serviceType)), get(bookingId)),
		children: ($$anchor, $$slotProps) => {
			var fragment_8 = root_5();
			Printer(first_child(fragment_8), { class: "h-3.5 w-3.5" });
			next();
			append($$anchor, fragment_8);
		},
		$$slots: { default: true }
	});
	reset(div_4);
	reset(div_1);
	var node_11 = sibling(div_1, 2);
	var consequent_3 = ($$anchor) => {
		var div_5 = root_6();
		Refresh_cw(child(div_5), { class: "h-8 w-8 text-primary animate-spin" });
		reset(div_5);
		append($$anchor, div_5);
	};
	var consequent_4 = ($$anchor) => {
		var div_6 = root_7();
		var text_5 = child(div_6, true);
		reset(div_6);
		template_effect(() => set_text(text_5, get(error)));
		append($$anchor, div_6);
	};
	var consequent_64 = ($$anchor) => {
		var fragment_9 = root_78();
		var div_7 = first_child(fragment_9);
		var span_2 = child(div_7);
		var text_6 = child(span_2, true);
		reset(span_2);
		var span_3 = sibling(span_2, 2);
		var text_7 = child(span_3, true);
		reset(span_3);
		var node_13 = sibling(span_3, 2);
		var consequent_5 = ($$anchor) => {
			var span_4 = root_8();
			Lock(child(span_4), { class: "h-3.5 w-3.5 text-emerald-700 dark:text-emerald-400" });
			next();
			reset(span_4);
			append($$anchor, span_4);
		};
		if_block(node_13, ($$render) => {
			if (get(isDealClosed)) $$render(consequent_5);
		});
		var span_5 = sibling(node_13, 2);
		var node_15 = sibling(child(span_5));
		DateDisplay(node_15, { get value() {
			return get(sd).createdAt;
		} });
		DateDisplay(sibling(node_15, 2), { get value() {
			return get(sd).updatedAt;
		} });
		reset(span_5);
		reset(div_7);
		var node_17 = sibling(div_7, 2);
		var consequent_7 = ($$anchor) => {
			var div_8 = root_9();
			var div_9 = child(div_8);
			var div_10 = child(div_9);
			Lock(child(div_10), { class: "h-5 w-5" });
			reset(div_10);
			next(2);
			reset(div_9);
			var node_19 = sibling(div_9, 2);
			var consequent_6 = ($$anchor) => {
				{
					let $0 = user_derived(() => get(actionLoading) || get(completionLoading));
					Button($$anchor, {
						onclick: () => set(showUnlockOperationModal, true),
						get disabled() {
							return get($0);
						},
						variant: "outline",
						class: "h-8.5 px-3.5 rounded-xl text-xs font-semibold cursor-pointer border-amber-400 bg-amber-100 hover:bg-amber-200 text-amber-950 dark:border-amber-700 dark:bg-amber-950/40 dark:text-amber-300 shrink-0",
						children: ($$anchor, $$slotProps) => {
							var fragment_11 = root_2();
							Lock_open(first_child(fragment_11), { class: "h-3.5 w-3.5 mr-1.5 text-amber-700 dark:text-amber-400" });
							next();
							append($$anchor, fragment_11);
						},
						$$slots: { default: true }
					});
				}
			};
			var d_1 = user_derived(() => hasRole("master_accountant"));
			if_block(node_19, ($$render) => {
				if (get(d_1)) $$render(consequent_6);
			});
			reset(div_8);
			append($$anchor, div_8);
		};
		if_block(node_17, ($$render) => {
			if (get(isOperationClosed)) $$render(consequent_7);
		});
		var node_21 = sibling(node_17, 2);
		var consequent_9 = ($$anchor) => {
			var div_11 = root_11();
			var div_12 = child(div_11);
			var div_13 = child(div_12);
			Lock(child(div_13), { class: "h-5 w-5" });
			reset(div_13);
			next(2);
			reset(div_12);
			var node_23 = sibling(div_12, 2);
			var consequent_8 = ($$anchor) => {
				{
					let $0 = user_derived(() => get(actionLoading) || get(completionLoading));
					Button($$anchor, {
						onclick: () => set(showUnlockModal, true),
						get disabled() {
							return get($0);
						},
						variant: "outline",
						class: "h-8.5 px-3.5 rounded-xl text-xs font-semibold cursor-pointer border-amber-300 bg-amber-50 hover:bg-amber-100 text-amber-900 dark:border-amber-700 dark:bg-amber-950/40 dark:text-amber-300 shrink-0",
						children: ($$anchor, $$slotProps) => {
							var fragment_13 = root_10();
							Lock_open(first_child(fragment_13), { class: "h-3.5 w-3.5 mr-1.5 text-amber-600 dark:text-amber-400" });
							next();
							append($$anchor, fragment_13);
						},
						$$slots: { default: true }
					});
				}
			};
			var d_2 = user_derived(() => hasRole("master_accountant"));
			if_block(node_23, ($$render) => {
				if (get(d_2)) $$render(consequent_8);
			});
			reset(div_11);
			append($$anchor, div_11);
		};
		if_block(node_21, ($$render) => {
			if (get(isDealClosed)) $$render(consequent_9);
		});
		var node_25 = sibling(node_21, 2);
		var consequent_16 = ($$anchor) => {
			var div_14 = root_20();
			var div_15 = child(div_14);
			var div_16 = child(div_15);
			Circle_alert(child(div_16), { class: "h-5 w-5 text-amber-600 animate-pulse" });
			next(2);
			reset(div_16);
			var span_6 = sibling(div_16, 2);
			var text_8 = child(span_6);
			reset(span_6);
			reset(div_15);
			var div_17 = sibling(div_15, 4);
			var node_27 = child(div_17);
			each(node_27, 17, () => get(pendingSupplierPayments), index, ($$anchor, sp) => {
				var div_18 = root_15();
				var div_19 = child(div_18);
				var div_20 = child(div_19);
				var span_7 = child(div_20);
				MoneyDisplay(child(span_7), { get amount() {
					return get(sp).amount;
				} });
				reset(span_7);
				var span_8 = sibling(span_7, 2);
				var text_9 = child(span_8, true);
				reset(span_8);
				var span_9 = sibling(span_8, 2);
				var text_10 = child(span_9);
				reset(span_9);
				reset(div_20);
				var p_2 = sibling(div_20, 2);
				var text_11 = child(p_2, true);
				reset(p_2);
				var p_3 = sibling(p_2, 2);
				var text_12 = child(p_3);
				DateDisplay(sibling(text_12), { get value() {
					return get(sp).requestedAt;
				} });
				reset(p_3);
				reset(div_19);
				var div_21 = sibling(div_19, 2);
				var node_30 = child(div_21);
				var consequent_10 = ($$anchor) => {
					var span_10 = root_12();
					Lock(child(span_10), { class: "h-3 w-3 text-muted-foreground/70" });
					next();
					reset(span_10);
					append($$anchor, span_10);
				};
				var alternate_1 = ($$anchor) => {
					var fragment_14 = root_14();
					var button = first_child(fragment_14);
					Pencil(child(button), { class: "h-3.5 w-3.5" });
					next();
					reset(button);
					var node_33 = sibling(button, 2);
					var consequent_11 = ($$anchor) => {
						var fragment_15 = root_13();
						var button_1 = first_child(fragment_15);
						Check(child(button_1), { class: "h-3.5 w-3.5" });
						next();
						reset(button_1);
						var button_2 = sibling(button_1, 2);
						X(child(button_2), { class: "h-3.5 w-3.5" });
						next();
						reset(button_2);
						template_effect(() => {
							button_1.disabled = get(actionLoading);
							button_2.disabled = get(actionLoading);
						});
						delegated("click", button_1, () => handleApproveSupplierPayment(get(sp)));
						delegated("click", button_2, () => handleRejectSupplierPayment(get(sp)));
						append($$anchor, fragment_15);
					};
					var d_3 = user_derived(() => hasRole("accountant"));
					if_block(node_33, ($$render) => {
						if (get(d_3)) $$render(consequent_11);
					});
					template_effect(() => button.disabled = get(actionLoading));
					delegated("click", button, () => openEditGovtFeeModal(get(sp)));
					append($$anchor, fragment_14);
				};
				if_block(node_30, ($$render) => {
					if (get(isDealClosed)) $$render(consequent_10);
					else $$render(alternate_1, -1);
				});
				reset(div_21);
				reset(div_18);
				template_effect(($0, $1) => {
					set_text(text_9, get(sp).serviceType || "Govt Fee");
					set_text(text_10, `Ref: ${(get(sp).referenceNumber || "N/A") ?? ""}`);
					set_text(text_11, $0);
					set_text(text_12, `Supplier: ${$1 ?? ""} • Requested: `);
				}, [() => formatSpDesc(get(sp).description), () => getSupplierLabel(get(sp).supplierId)]);
				append($$anchor, div_18);
			});
			var node_36 = sibling(node_27, 2);
			each(node_36, 17, () => get(pendingPurchaseReturns), index, ($$anchor, pr) => {
				var div_22 = root_17();
				var div_23 = child(div_22);
				var div_24 = child(div_23);
				var span_11 = child(div_24);
				MoneyDisplay(child(span_11), { get amount() {
					return get(pr).amount;
				} });
				reset(span_11);
				var span_12 = sibling(span_11, 4);
				var text_13 = child(span_12);
				reset(span_12);
				reset(div_24);
				var p_4 = sibling(div_24, 2);
				var text_14 = child(p_4, true);
				reset(p_4);
				var p_5 = sibling(p_4, 2);
				var text_15 = child(p_5);
				DateDisplay(sibling(text_15), { get value() {
					return get(pr).requestedAt;
				} });
				reset(p_5);
				reset(div_23);
				var div_25 = sibling(div_23, 2);
				var node_39 = child(div_25);
				var consequent_12 = ($$anchor) => {
					var span_13 = root_12();
					Lock(child(span_13), { class: "h-3 w-3 text-muted-foreground/70" });
					next();
					reset(span_13);
					append($$anchor, span_13);
				};
				var consequent_13 = ($$anchor) => {
					var fragment_16 = root_16();
					var button_3 = first_child(fragment_16);
					Check(child(button_3), { class: "h-3.5 w-3.5" });
					next();
					reset(button_3);
					var button_4 = sibling(button_3, 2);
					X(child(button_4), { class: "h-3.5 w-3.5" });
					next();
					reset(button_4);
					template_effect(() => {
						button_3.disabled = get(actionLoading);
						button_4.disabled = get(actionLoading);
					});
					delegated("click", button_3, () => handleApprovePurchaseReturn(get(pr)));
					delegated("click", button_4, () => handleRejectPurchaseReturn(get(pr)));
					append($$anchor, fragment_16);
				};
				var d_4 = user_derived(() => hasRole("accountant"));
				if_block(node_39, ($$render) => {
					if (get(isDealClosed)) $$render(consequent_12);
					else if (get(d_4)) $$render(consequent_13, 1);
				});
				reset(div_25);
				reset(div_22);
				template_effect(($0) => {
					set_text(text_13, `Dest: ${(get(pr).destinationType || "Bank") ?? ""}`);
					set_text(text_14, get(pr).reason || "Supplier Purchase Return");
					set_text(text_15, `Supplier: ${$0 ?? ""} • Requested: `);
				}, [() => getSupplierLabel(get(pr).supplierId)]);
				append($$anchor, div_22);
			});
			each(sibling(node_36, 2), 17, () => get(pendingSalesReturns), index, ($$anchor, sr) => {
				var div_26 = root_19();
				var div_27 = child(div_26);
				var div_28 = child(div_27);
				var span_14 = child(div_28);
				MoneyDisplay(child(span_14), { get amount() {
					return get(sr).amount;
				} });
				reset(span_14);
				var span_15 = sibling(span_14, 4);
				var text_16 = child(span_15);
				reset(span_15);
				reset(div_28);
				var p_6 = sibling(div_28, 2);
				var text_17 = child(p_6, true);
				reset(p_6);
				var p_7 = sibling(p_6, 2);
				DateDisplay(sibling(child(p_7)), { get value() {
					return get(sr).requestedAt;
				} });
				reset(p_7);
				reset(div_27);
				var div_29 = sibling(div_27, 2);
				var node_46 = child(div_29);
				var consequent_14 = ($$anchor) => {
					var span_16 = root_12();
					Lock(child(span_16), { class: "h-3 w-3 text-muted-foreground/70" });
					next();
					reset(span_16);
					append($$anchor, span_16);
				};
				var consequent_15 = ($$anchor) => {
					var fragment_17 = root_18();
					var button_5 = first_child(fragment_17);
					Check(child(button_5), { class: "h-3.5 w-3.5" });
					next();
					reset(button_5);
					var button_6 = sibling(button_5, 2);
					X(child(button_6), { class: "h-3.5 w-3.5" });
					next();
					reset(button_6);
					template_effect(() => {
						button_5.disabled = get(actionLoading);
						button_6.disabled = get(actionLoading);
					});
					delegated("click", button_5, () => handleApproveSalesReturn(get(sr)));
					delegated("click", button_6, () => handleRejectSalesReturn(get(sr)));
					append($$anchor, fragment_17);
				};
				var d_5 = user_derived(() => hasRole("accountant"));
				if_block(node_46, ($$render) => {
					if (get(isDealClosed)) $$render(consequent_14);
					else if (get(d_5)) $$render(consequent_15, 1);
				});
				reset(div_29);
				reset(div_26);
				template_effect(($0) => {
					set_text(text_16, `Recipient: ${$0 ?? ""}`);
					set_text(text_17, get(sr).reason || "Customer Sales Return");
				}, [() => getRecipientLabel(get(sr).recipientType, get(sr).recipientId, get(sr))]);
				append($$anchor, div_26);
			});
			reset(div_17);
			reset(div_14);
			template_effect(() => set_text(text_8, `${get(totalPendingSettlements) ?? ""} Pending Approval`));
			append($$anchor, div_14);
		};
		var d_6 = user_derived(() => get(totalPendingSettlements) > 0 && hasRole("normal_accountant"));
		if_block(node_25, ($$render) => {
			if (get(d_6)) $$render(consequent_16);
		});
		var div_30 = sibling(node_25, 2);
		each(div_30, 21, () => tabs, index, ($$anchor, tab) => {
			var fragment_18 = comment();
			var node_50 = first_child(fragment_18);
			var consequent_18 = ($$anchor) => {
				const IconComp = user_derived(() => get(tab).icon);
				const isTabLocked = user_derived(() => get(tab).id === "supplier" && !get(isPaymentSuccessful));
				var button_7 = root_21();
				var node_51 = child(button_7);
				component(node_51, () => get(IconComp), ($$anchor, IconComp_1) => {
					IconComp_1($$anchor, { class: "h-3.5 w-3.5" });
				});
				var span_17 = sibling(node_51, 2);
				var text_18 = child(span_17, true);
				reset(span_17);
				var node_52 = sibling(span_17, 2);
				var consequent_17 = ($$anchor) => {
					Lock($$anchor, { class: "h-3 w-3 text-amber-500 ml-0.5" });
				};
				if_block(node_52, ($$render) => {
					if (get(isTabLocked)) $$render(consequent_17);
				});
				reset(button_7);
				template_effect(() => {
					set_class(button_7, 1, `flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold border-b-2 transition-colors whitespace-nowrap cursor-pointer
							${get(activeTab) === get(tab).id ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"}`);
					set_text(text_18, get(tab).label);
				});
				delegated("click", button_7, () => set(activeTab, get(tab).id, true));
				append($$anchor, button_7);
			};
			if_block(node_50, ($$render) => {
				if (get(tab).id !== "items" || get(serviceType) === "flights" || get(serviceType) === "visa") $$render(consequent_18);
			});
			append($$anchor, fragment_18);
		});
		reset(div_30);
		var node_53 = sibling(div_30, 2);
		var consequent_33 = ($$anchor) => {
			var div_31 = root_34();
			var div_32 = child(div_31);
			var h2 = child(div_32);
			User(child(h2), { class: "h-4 w-4 text-primary" });
			next();
			reset(h2);
			var div_33 = sibling(h2, 2);
			var div_34 = child(div_33);
			var span_18 = sibling(child(div_34), 2);
			var text_19 = child(span_18, true);
			reset(span_18);
			reset(div_34);
			var div_35 = sibling(div_34, 2);
			var span_19 = sibling(child(div_35), 2);
			var text_20 = child(span_19, true);
			reset(span_19);
			reset(div_35);
			var node_55 = sibling(div_35, 2);
			var consequent_19 = ($$anchor) => {
				var fragment_20 = root_22();
				var div_36 = first_child(fragment_20);
				var span_20 = sibling(child(div_36), 2);
				var text_21 = child(span_20, true);
				reset(span_20);
				reset(div_36);
				var div_37 = sibling(div_36, 2);
				var span_21 = sibling(child(div_37), 2);
				var text_22 = child(span_21);
				reset(span_21);
				reset(div_37);
				template_effect(() => {
					set_text(text_21, get(sd).agent ?? "—");
					set_text(text_22, `#${get(sd).agentId ?? "—" ?? ""}`);
				});
				append($$anchor, fragment_20);
			};
			if_block(node_55, ($$render) => {
				if (get(isAgent)) $$render(consequent_19);
			});
			var node_56 = sibling(node_55, 2);
			var consequent_20 = ($$anchor) => {
				var div_38 = root_23();
				var span_22 = sibling(child(div_38), 2);
				var text_23 = child(span_22, true);
				reset(span_22);
				reset(div_38);
				template_effect(() => set_text(text_23, get(sd).careOf));
				append($$anchor, div_38);
			};
			if_block(node_56, ($$render) => {
				if (get(sd).careOf) $$render(consequent_20);
			});
			reset(div_33);
			reset(div_32);
			var div_39 = sibling(div_32, 2);
			var h2_1 = child(div_39);
			Package(child(h2_1), { class: "h-4 w-4 text-primary" });
			next();
			reset(h2_1);
			var div_40 = sibling(h2_1, 2);
			var node_58 = child(div_40);
			var consequent_22 = ($$anchor) => {
				var fragment_21 = root_25();
				var div_41 = first_child(fragment_21);
				var span_23 = sibling(child(div_41), 2);
				var text_24 = child(span_23);
				reset(span_23);
				reset(div_41);
				var div_42 = sibling(div_41, 2);
				var span_24 = sibling(child(div_42), 2);
				var text_25 = child(span_24, true);
				reset(span_24);
				reset(div_42);
				var node_59 = sibling(div_42, 2);
				var consequent_21 = ($$anchor) => {
					var div_43 = root_24();
					var span_25 = sibling(child(div_43));
					var text_26 = child(span_25, true);
					reset(span_25);
					reset(div_43);
					template_effect(() => set_text(text_26, get(sd).supplier));
					append($$anchor, div_43);
				};
				if_block(node_59, ($$render) => {
					if (get(sd).supplier) $$render(consequent_21);
				});
				template_effect(() => {
					set_text(text_24, `${get(sd).fromLocation ?? ""} → ${get(sd).toLocation ?? ""}`);
					set_text(text_25, get(sd).paymentMethod);
				});
				append($$anchor, fragment_21);
			};
			var consequent_23 = ($$anchor) => {
				var fragment_22 = root_26();
				var div_44 = first_child(fragment_22);
				var span_26 = sibling(child(div_44), 2);
				var text_27 = child(span_26);
				reset(span_26);
				reset(div_44);
				var div_45 = sibling(div_44, 2);
				var span_27 = sibling(child(div_45));
				var text_28 = child(span_27, true);
				reset(span_27);
				reset(div_45);
				var div_46 = sibling(div_45, 2);
				var span_28 = sibling(child(div_46), 2);
				DateDisplay(child(span_28), { get value() {
					return get(sd).checkInDate;
				} });
				reset(span_28);
				reset(div_46);
				var div_47 = sibling(div_46, 2);
				var span_29 = sibling(child(div_47));
				var text_29 = child(span_29);
				reset(span_29);
				reset(div_47);
				var div_48 = sibling(div_47, 2);
				var span_30 = sibling(child(div_48), 2);
				var text_30 = child(span_30, true);
				reset(span_30);
				reset(div_48);
				var div_49 = sibling(div_48, 2);
				var span_31 = sibling(child(div_49), 2);
				var text_31 = child(span_31, true);
				reset(span_31);
				reset(div_49);
				template_effect(() => {
					set_text(text_27, `${get(sd).prefix ? get(sd).prefix + " " : ""}${get(sd).guestName ?? ""}`);
					set_text(text_28, get(sd).country);
					set_text(text_29, `${get(sd).days ?? ""} days`);
					set_text(text_30, get(sd).orderStatus);
					set_text(text_31, get(sd).paymentMethod);
				});
				append($$anchor, fragment_22);
			};
			var consequent_26 = ($$anchor) => {
				var fragment_23 = root_28();
				var div_50 = first_child(fragment_23);
				var span_32 = sibling(child(div_50), 2);
				var text_32 = child(span_32, true);
				reset(span_32);
				reset(div_50);
				var node_61 = sibling(div_50, 2);
				var consequent_24 = ($$anchor) => {
					var div_51 = root_24();
					var span_33 = sibling(child(div_51));
					var text_33 = child(span_33, true);
					reset(span_33);
					reset(div_51);
					template_effect(() => set_text(text_33, get(sd).supplierName));
					append($$anchor, div_51);
				};
				if_block(node_61, ($$render) => {
					if (get(sd).supplierName) $$render(consequent_24);
				});
				var node_62 = sibling(node_61, 2);
				var consequent_25 = ($$anchor) => {
					var div_52 = root_27();
					var span_34 = sibling(child(div_52));
					var text_34 = child(span_34, true);
					reset(span_34);
					reset(div_52);
					template_effect(() => set_text(text_34, get(sd).approvalNote));
					append($$anchor, div_52);
				};
				if_block(node_62, ($$render) => {
					if (get(sd).approvalNote) $$render(consequent_25);
				});
				template_effect(() => set_text(text_32, get(sd).visaPackName));
				append($$anchor, fragment_23);
			};
			var consequent_27 = ($$anchor) => {
				var fragment_24 = root_29();
				var div_53 = first_child(fragment_24);
				var span_35 = sibling(child(div_53), 2);
				var text_35 = child(span_35);
				reset(span_35);
				reset(div_53);
				var div_54 = sibling(div_53, 2);
				var span_36 = sibling(child(div_54));
				var text_36 = child(span_36, true);
				reset(span_36);
				reset(div_54);
				var div_55 = sibling(div_54, 2);
				var span_37 = sibling(child(div_55));
				var text_37 = child(span_37, true);
				reset(span_37);
				reset(div_55);
				var div_56 = sibling(div_55, 2);
				var span_38 = sibling(child(div_56), 2);
				var node_63 = child(span_38);
				DateDisplay(node_63, { get value() {
					return get(sd).appointmentDate;
				} });
				var text_38 = sibling(node_63);
				reset(span_38);
				reset(div_56);
				template_effect(() => {
					set_text(text_35, `${get(sd).prefix ? get(sd).prefix + " " : ""}${get(sd).name ?? ""}`);
					set_text(text_36, get(sd).country);
					set_text(text_37, get(sd).visaType);
					set_text(text_38, ` ${get(sd).appointmentTime ?? ""}`);
				});
				append($$anchor, fragment_24);
			};
			var consequent_28 = ($$anchor) => {
				var fragment_25 = root_30();
				var div_57 = first_child(fragment_25);
				var span_39 = sibling(child(div_57), 2);
				var text_39 = child(span_39);
				reset(span_39);
				reset(div_57);
				var div_58 = sibling(div_57, 2);
				var span_40 = sibling(child(div_58));
				var text_40 = child(span_40, true);
				reset(span_40);
				reset(div_58);
				var div_59 = sibling(div_58, 2);
				var span_41 = sibling(child(div_59));
				var text_41 = child(span_41);
				reset(span_41);
				reset(div_59);
				template_effect(() => {
					set_text(text_39, `${get(sd).prefix ? get(sd).prefix + " " : ""}${get(sd).passengerName ?? ""}`);
					set_text(text_40, get(sd).country);
					set_text(text_41, `${get(sd).days ?? ""} days`);
				});
				append($$anchor, fragment_25);
			};
			var consequent_29 = ($$anchor) => {
				var fragment_26 = root_31();
				var div_60 = first_child(fragment_26);
				var span_42 = sibling(child(div_60), 2);
				var text_42 = child(span_42);
				reset(span_42);
				reset(div_60);
				var div_61 = sibling(div_60, 2);
				var span_43 = sibling(child(div_61), 2);
				var text_43 = child(span_43);
				reset(span_43);
				reset(div_61);
				var div_62 = sibling(div_61, 2);
				var span_44 = sibling(child(div_62), 2);
				var node_64 = child(span_44);
				DateDisplay(node_64, { get value() {
					return get(sd).dropDate;
				} });
				var text_44 = sibling(node_64);
				reset(span_44);
				reset(div_62);
				var div_63 = sibling(div_62, 2);
				var span_45 = sibling(child(div_63));
				var text_45 = child(span_45, true);
				reset(span_45);
				reset(div_63);
				template_effect(() => {
					set_text(text_42, `${get(sd).prefix ? get(sd).prefix + " " : ""}${get(sd).name ?? ""}`);
					set_text(text_43, `${get(sd).pickup ?? ""} → ${get(sd).drop ?? ""}`);
					set_text(text_44, ` ${get(sd).dropTime ?? ""}`);
					set_text(text_45, get(sd).vehicle ?? "—");
				});
				append($$anchor, fragment_26);
			};
			var consequent_31 = ($$anchor) => {
				var fragment_27 = root_33();
				var div_64 = first_child(fragment_27);
				var span_46 = sibling(child(div_64), 2);
				var text_46 = child(span_46, true);
				reset(span_46);
				reset(div_64);
				var div_65 = sibling(div_64, 2);
				var span_47 = sibling(child(div_65), 2);
				var text_47 = child(span_47);
				reset(span_47);
				reset(div_65);
				var node_65 = sibling(div_65, 2);
				var consequent_30 = ($$anchor) => {
					var div_66 = root_32();
					var span_48 = sibling(child(div_66), 2);
					var text_48 = child(span_48, true);
					reset(span_48);
					reset(div_66);
					template_effect(() => set_text(text_48, get(sd).narration));
					append($$anchor, div_66);
				};
				if_block(node_65, ($$render) => {
					if (get(sd).narration) $$render(consequent_30);
				});
				template_effect(() => {
					set_text(text_46, get(sd).serviceName);
					set_text(text_47, `${get(sd).prefix ? get(sd).prefix + " " : ""}${get(sd).name ?? ""}`);
				});
				append($$anchor, fragment_27);
			};
			if_block(node_58, ($$render) => {
				if (get(serviceType) === "flights") $$render(consequent_22);
				else if (get(serviceType) === "hotels") $$render(consequent_23, 1);
				else if (get(serviceType) === "visa") $$render(consequent_26, 2);
				else if (get(serviceType) === "vfs") $$render(consequent_27, 3);
				else if (get(serviceType) === "holiday") $$render(consequent_28, 4);
				else if (get(serviceType) === "transportation") $$render(consequent_29, 5);
				else if (get(serviceType) === "other-services") $$render(consequent_31, 6);
			});
			var node_66 = sibling(node_58, 2);
			var consequent_32 = ($$anchor) => {
				var div_67 = root_24();
				var span_49 = sibling(child(div_67));
				var text_49 = child(span_49, true);
				reset(span_49);
				reset(div_67);
				template_effect(() => set_text(text_49, get(sd).supplierName));
				append($$anchor, div_67);
			};
			if_block(node_66, ($$render) => {
				if (get(sd).supplierName && get(serviceType) !== "visa") $$render(consequent_32);
			});
			reset(div_40);
			reset(div_39);
			reset(div_31);
			template_effect(() => {
				set_text(text_19, get(sd).clientType);
				set_text(text_20, get(sd).headName ?? "—");
			});
			append($$anchor, div_31);
		};
		var consequent_43 = ($$anchor) => {
			var div_68 = root_44();
			var h2_2 = child(div_68);
			Credit_card(child(h2_2), { class: "h-4 w-4 text-primary" });
			next();
			reset(h2_2);
			var div_69 = sibling(h2_2, 2);
			each(div_69, 21, () => [
				{
					label: "Payable Sale",
					value: get(sd).payableAmount,
					cls: "text-foreground"
				},
				{
					label: "Expected Cost",
					value: get(sd).expectedSupplierCost ?? 0,
					cls: "text-muted-foreground"
				},
				{
					label: "Markup Margin",
					value: get(calculatedProfit),
					cls: get(calculatedProfit) > 0 ? "text-emerald-600" : "text-muted-foreground"
				},
				{
					label: "Rejection Fee",
					value: get(sd).rejectionFee ?? 0,
					cls: "text-red-600"
				}
			], index, ($$anchor, item) => {
				var div_70 = root_35();
				var p_8 = child(div_70);
				var text_50 = child(p_8, true);
				reset(p_8);
				var p_9 = sibling(p_8, 2);
				MoneyDisplay(child(p_9), { get amount() {
					return get(item).value;
				} });
				reset(p_9);
				reset(div_70);
				template_effect(() => {
					set_text(text_50, get(item).label);
					set_class(p_9, 1, `text-lg font-bold ${get(item).cls ?? ""} font-mono`);
				});
				append($$anchor, div_70);
			});
			reset(div_69);
			var div_71 = sibling(div_69, 2);
			var node_69 = child(div_71);
			var consequent_34 = ($$anchor) => {
				var div_72 = root_36();
				var span_50 = sibling(child(div_72), 2);
				var text_51 = child(span_50, true);
				reset(span_50);
				reset(div_72);
				template_effect(() => set_text(text_51, get(displayPaymentMethod)));
				append($$anchor, div_72);
			};
			if_block(node_69, ($$render) => {
				if (get(displayPaymentMethod)) $$render(consequent_34);
			});
			var node_70 = sibling(node_69, 2);
			var consequent_35 = ($$anchor) => {
				var div_73 = root_37();
				var span_51 = sibling(child(div_73), 2);
				var text_52 = child(span_51, true);
				reset(span_51);
				reset(div_73);
				template_effect(() => set_text(text_52, get(sd).bankName || get(sd).applicants[0]?.bankName));
				append($$anchor, div_73);
			};
			if_block(node_70, ($$render) => {
				if (get(sd).bankName || get(sd).applicants && get(sd).applicants.length > 0 && get(sd).applicants[0]?.bankName) $$render(consequent_35);
			});
			var node_71 = sibling(node_70, 2);
			var consequent_36 = ($$anchor) => {
				var div_74 = root_38();
				var span_52 = sibling(child(div_74), 2);
				var text_53 = child(span_52, true);
				reset(span_52);
				reset(div_74);
				template_effect(() => set_text(text_53, get(sd).isInhouse ? "Yes" : "No"));
				append($$anchor, div_74);
			};
			if_block(node_71, ($$render) => {
				if (get(sd).isInhouse !== void 0) $$render(consequent_36);
			});
			var node_72 = sibling(node_71, 2);
			var consequent_37 = ($$anchor) => {
				var div_75 = root_39();
				var div_76 = sibling(child(div_75), 2);
				var span_53 = child(div_76);
				var text_54 = child(span_53, true);
				reset(span_53);
				var a_1 = sibling(span_53, 2);
				var a_2 = sibling(a_1, 2);
				reset(div_76);
				reset(div_75);
				template_effect(($0, $1, $2) => {
					set_attribute(span_53, "title", get(sd).paymentProof);
					set_text(text_54, $0);
					set_attribute(a_1, "href", $1);
					set_attribute(a_2, "href", $2);
				}, [
					() => get(sd).paymentProof.split("/").pop(),
					() => getSalesPortalFileUrl(get(sd).paymentProof),
					() => getSalesPortalFileUrl(get(sd).paymentProof)
				]);
				append($$anchor, div_75);
			};
			if_block(node_72, ($$render) => {
				if (get(sd).paymentProof) $$render(consequent_37);
			});
			reset(div_71);
			var node_73 = sibling(div_71, 2);
			var consequent_38 = ($$anchor) => {
				var div_77 = root_41();
				var select = sibling(child(div_77), 2);
				var option = child(select);
				option.value = option.__value = "";
				each(sibling(option), 17, () => get(cashAccounts), index, ($$anchor, acc) => {
					var option_1 = root_40();
					var text_55 = child(option_1);
					reset(option_1);
					var option_1_value = {};
					template_effect(($0, $1) => {
						set_text(text_55, `${get(acc).name ?? ""} (Bal: ${$0 ?? ""} BHD)`);
						if (option_1_value !== (option_1_value = $1)) option_1.value = (option_1.__value = $1) ?? "";
					}, [() => get(acc).currentBalance.toFixed(3), () => String(get(acc).id)]);
					append($$anchor, option_1);
				});
				reset(select);
				reset(div_77);
				template_effect(() => select.disabled = get(actionLoading));
				bind_select_value(select, () => get(selectedCashAccountIdVal), ($$value) => set(selectedCashAccountIdVal, $$value));
				append($$anchor, div_77);
			};
			var d_7 = user_derived(() => get(sd).paymentStatus?.toLowerCase() === "pending" && get(isCashBooking) && hasRole("normal_accountant"));
			if_block(node_73, ($$render) => {
				if (get(d_7)) $$render(consequent_38);
			});
			var node_75 = sibling(node_73, 2);
			var consequent_42 = ($$anchor) => {
				var fragment_28 = comment();
				var node_76 = first_child(fragment_28);
				var consequent_39 = ($$anchor) => {
					var div_78 = root_42();
					Lock(child(div_78), { class: "h-4 w-4 text-emerald-600 shrink-0" });
					next(2);
					reset(div_78);
					append($$anchor, div_78);
				};
				var alternate_2 = ($$anchor) => {
					var div_79 = root_43();
					var button_8 = child(div_79);
					var node_78 = child(button_8);
					var consequent_40 = ($$anchor) => {
						Refresh_cw($$anchor, { class: "h-3.5 w-3.5 animate-spin" });
					};
					if_block(node_78, ($$render) => {
						if (get(actionLoading)) $$render(consequent_40);
					});
					next();
					reset(button_8);
					var button_9 = sibling(button_8, 2);
					var node_79 = child(button_9);
					var consequent_41 = ($$anchor) => {
						Refresh_cw($$anchor, { class: "h-3.5 w-3.5 animate-spin" });
					};
					if_block(node_79, ($$render) => {
						if (get(actionLoading)) $$render(consequent_41);
					});
					next();
					reset(button_9);
					reset(div_79);
					template_effect(() => {
						button_8.disabled = get(actionLoading) || get(isCashBooking) && !get(selectedCashAccountIdVal);
						button_9.disabled = get(actionLoading);
					});
					delegated("click", button_8, () => requestStatusChange("success"));
					delegated("click", button_9, () => requestStatusChange("failed"));
					append($$anchor, div_79);
				};
				if_block(node_76, ($$render) => {
					if (get(isDealClosed)) $$render(consequent_39);
					else $$render(alternate_2, -1);
				});
				append($$anchor, fragment_28);
			};
			var d_8 = user_derived(() => get(sd).paymentStatus?.toLowerCase() === "pending" && hasRole("normal_accountant"));
			if_block(node_75, ($$render) => {
				if (get(d_8)) $$render(consequent_42);
			});
			reset(div_68);
			append($$anchor, div_68);
		};
		var consequent_46 = ($$anchor) => {
			var fragment_31 = comment();
			var node_80 = first_child(fragment_31);
			var consequent_44 = ($$anchor) => {
				var div_80 = root_46();
				var div_81 = child(div_80);
				var h2_3 = child(div_81);
				var text_56 = child(h2_3);
				reset(h2_3);
				reset(div_81);
				var table = sibling(div_81, 2);
				var tbody = sibling(child(table));
				each(tbody, 21, () => get(sd).passengers, index, ($$anchor, p) => {
					var tr = root_45();
					var td = child(tr);
					var text_57 = child(td);
					reset(td);
					var td_1 = sibling(td);
					MoneyDisplay(child(td_1), { get amount() {
						return get(p).payableAmount;
					} });
					reset(td_1);
					var td_2 = sibling(td_1);
					MoneyDisplay(child(td_2), { get amount() {
						return get(p).expectedSupplierCost;
					} });
					reset(td_2);
					var td_3 = sibling(td_2);
					MoneyDisplay(child(td_3), { get amount() {
						return get(p).profit;
					} });
					reset(td_3);
					var td_4 = sibling(td_3);
					var text_58 = child(td_4, true);
					reset(td_4);
					var td_5 = sibling(td_4);
					var text_59 = child(td_5, true);
					reset(td_5);
					reset(tr);
					template_effect(() => {
						set_text(text_57, `${get(p).prefix ? get(p).prefix + " " : ""}${get(p).passengerName ?? ""}`);
						set_text(text_58, get(p).isInhouse ? "✓" : "—");
						set_text(text_59, get(p).supplierName ?? "—");
					});
					append($$anchor, tr);
				});
				reset(tbody);
				reset(table);
				reset(div_80);
				template_effect(() => set_text(text_56, `Passengers (${get(sd).passengers.length ?? ""})`));
				append($$anchor, div_80);
			};
			var consequent_45 = ($$anchor) => {
				var div_82 = root_48();
				var div_83 = child(div_82);
				var h2_4 = child(div_83);
				var text_60 = child(h2_4);
				reset(h2_4);
				reset(div_83);
				var table_1 = sibling(div_83, 2);
				var tbody_1 = sibling(child(table_1));
				each(tbody_1, 21, () => get(sd).applicants, index, ($$anchor, a) => {
					var tr_1 = root_47();
					var td_6 = child(tr_1);
					var text_61 = child(td_6);
					reset(td_6);
					var td_7 = sibling(td_6);
					var text_62 = child(td_7, true);
					reset(td_7);
					var td_8 = sibling(td_7);
					var text_63 = child(td_8, true);
					reset(td_8);
					var td_9 = sibling(td_8);
					MoneyDisplay(child(td_9), { get amount() {
						return get(a).payableAmount;
					} });
					reset(td_9);
					var td_10 = sibling(td_9);
					MoneyDisplay(child(td_10), { get amount() {
						return get(a).profit;
					} });
					reset(td_10);
					var td_11 = sibling(td_10);
					var span_54 = child(td_11);
					var text_64 = child(span_54, true);
					reset(span_54);
					reset(td_11);
					reset(tr_1);
					template_effect(($0) => {
						set_text(text_61, `${get(a).prefix ? get(a).prefix + " " : ""}${get(a).fName ?? ""} ${get(a).lName ?? ""}`);
						set_text(text_62, get(a).passportNo);
						set_text(text_63, get(a).nationality);
						set_class(span_54, 1, `inline-flex px-2 py-0.5 rounded-full text-[9px] font-bold ${$0 ?? ""}`);
						set_text(text_64, get(a).paymentStatus);
					}, [() => statusClass(get(a).paymentStatus)]);
					append($$anchor, tr_1);
				});
				reset(tbody_1);
				reset(table_1);
				reset(div_82);
				template_effect(() => set_text(text_60, `Applicants (${get(sd).applicants.length ?? ""})`));
				append($$anchor, div_82);
			};
			var alternate_3 = ($$anchor) => {
				append($$anchor, root_49());
			};
			if_block(node_80, ($$render) => {
				if (get(serviceType) === "flights" && get(sd).passengers?.length) $$render(consequent_44);
				else if (get(serviceType) === "visa" && get(sd).applicants?.length) $$render(consequent_45, 1);
				else $$render(alternate_3, -1);
			});
			append($$anchor, fragment_31);
		};
		var consequent_62 = ($$anchor) => {
			var fragment_32 = comment();
			var node_86 = first_child(fragment_32);
			var consequent_47 = ($$anchor) => {
				var div_85 = root_51();
				var div_86 = child(div_85);
				Lock(child(div_86), { class: "h-8 w-8" });
				reset(div_86);
				var div_87 = sibling(div_86, 2);
				var p_10 = sibling(child(div_87), 2);
				var span_55 = sibling(child(p_10));
				var text_65 = child(span_55, true);
				reset(span_55);
				next();
				reset(p_10);
				next(2);
				reset(div_87);
				var div_88 = sibling(div_87, 2);
				Button(child(div_88), {
					variant: "outline",
					class: "rounded-xl text-xs font-semibold cursor-pointer border-border",
					onclick: () => set(activeTab, "financial"),
					children: ($$anchor, $$slotProps) => {
						var fragment_33 = root_50();
						Credit_card(first_child(fragment_33), { class: "h-3.5 w-3.5 mr-1.5" });
						next();
						append($$anchor, fragment_33);
					},
					$$slots: { default: true }
				});
				reset(div_88);
				reset(div_85);
				template_effect(($0) => {
					set_class(span_55, 1, `inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wide ${$0 ?? ""}`);
					set_text(text_65, get(sd).paymentStatus || "Pending");
				}, [() => statusClass(get(sd).paymentStatus)]);
				append($$anchor, div_85);
			};
			var alternate_13 = ($$anchor) => {
				var div_89 = root_72();
				var div_90 = child(div_89);
				var div_91 = child(div_90);
				var p_11 = sibling(child(div_91), 2);
				var node_90 = child(p_11);
				{
					let $0 = user_derived(() => get(sd).payableAmount ?? 0);
					MoneyDisplay(node_90, { get amount() {
						return get($0);
					} });
				}
				reset(p_11);
				reset(div_91);
				var div_92 = sibling(div_91, 2);
				var p_12 = sibling(child(div_92), 2);
				var node_91 = child(p_12);
				{
					let $0 = user_derived(() => get(sd).expectedSupplierCost ?? 0);
					MoneyDisplay(node_91, { get amount() {
						return get($0);
					} });
				}
				reset(p_12);
				reset(div_92);
				var div_93 = sibling(div_92, 2);
				var p_13 = sibling(child(div_93), 2);
				MoneyDisplay(child(p_13), { get amount() {
					return get(totalPaid);
				} });
				reset(p_13);
				reset(div_93);
				var div_94 = sibling(div_93, 2);
				var p_14 = sibling(child(div_94), 2);
				MoneyDisplay(child(p_14), { get amount() {
					return get(totalPurchaseReturns);
				} });
				reset(p_14);
				reset(div_94);
				var div_95 = sibling(div_94, 2);
				var p_15 = sibling(child(div_95), 2);
				MoneyDisplay(child(p_15), { get amount() {
					return get(totalSalesReturns);
				} });
				reset(p_15);
				reset(div_95);
				var div_96 = sibling(div_95, 2);
				var p_16 = sibling(child(div_96), 2);
				MoneyDisplay(child(p_16), { get amount() {
					return get(calculatedProfit);
				} });
				reset(p_16);
				reset(div_96);
				reset(div_90);
				var div_97 = sibling(div_90, 2);
				var node_96 = child(div_97);
				{
					let $0 = user_derived(() => !get(canPay));
					Button(node_96, {
						onclick: openPaymentForm,
						get disabled() {
							return get($0);
						},
						class: "h-8.5 rounded-xl flex items-center gap-1.5 text-xs font-semibold cursor-pointer",
						children: ($$anchor, $$slotProps) => {
							var fragment_34 = root_52();
							Coins(first_child(fragment_34), { class: "h-4 w-4" });
							next();
							append($$anchor, fragment_34);
						},
						$$slots: { default: true }
					});
				}
				var a_3 = sibling(node_96, 2);
				Undo_2(child(a_3), { class: "h-3.5 w-3.5 text-emerald-600" });
				next();
				reset(a_3);
				var node_99 = sibling(a_3, 2);
				var consequent_48 = ($$anchor) => {
					{
						let $0 = user_derived(() => get(actionLoading) || get(completionLoading));
						Button($$anchor, {
							onclick: () => set(showMarkDealClosedModal, true),
							get disabled() {
								return get($0);
							},
							class: "h-8.5 rounded-xl flex items-center gap-1.5 text-xs font-semibold cursor-pointer bg-slate-800 hover:bg-slate-900 text-white dark:bg-slate-700 dark:hover:bg-slate-600 sm:ml-auto",
							children: ($$anchor, $$slotProps) => {
								var fragment_36 = root_53();
								Circle_check(first_child(fragment_36), { class: "h-4 w-4 text-emerald-400" });
								next();
								append($$anchor, fragment_36);
							},
							$$slots: { default: true }
						});
					}
				};
				var alternate_5 = ($$anchor) => {
					var fragment_37 = comment();
					var node_101 = first_child(fragment_37);
					var consequent_49 = ($$anchor) => {
						{
							let $0 = user_derived(() => get(actionLoading) || get(completionLoading));
							Button($$anchor, {
								onclick: () => set(showUnlockModal, true),
								get disabled() {
									return get($0);
								},
								variant: "outline",
								class: "h-8.5 rounded-xl flex items-center gap-1.5 text-xs font-semibold cursor-pointer border-amber-300 bg-amber-50 hover:bg-amber-100 text-amber-900 dark:border-amber-700 dark:bg-amber-950/40 dark:text-amber-300 sm:ml-auto",
								children: ($$anchor, $$slotProps) => {
									var fragment_39 = root_10();
									Lock_open(first_child(fragment_39), { class: "h-4 w-4 text-amber-600 dark:text-amber-400" });
									next();
									append($$anchor, fragment_39);
								},
								$$slots: { default: true }
							});
						}
					};
					var d_9 = user_derived(() => hasRole("master_accountant"));
					var alternate_4 = ($$anchor) => {
						var span_56 = root_54();
						Circle_check(child(span_56), { class: "h-4 w-4 text-emerald-600" });
						next();
						reset(span_56);
						append($$anchor, span_56);
					};
					if_block(node_101, ($$render) => {
						if (get(d_9)) $$render(consequent_49);
						else $$render(alternate_4, -1);
					});
					append($$anchor, fragment_37);
				};
				if_block(node_99, ($$render) => {
					if (!get(isDealClosed)) $$render(consequent_48);
					else $$render(alternate_5, -1);
				});
				reset(div_97);
				var node_104 = sibling(div_97, 2);
				var consequent_51 = ($$anchor) => {
					var div_98 = root_56();
					var node_105 = child(div_98);
					Circle_alert(node_105, { class: "h-4 w-4 shrink-0 mt-0.5 text-amber-600" });
					var div_99 = sibling(node_105, 2);
					var node_106 = sibling(child(div_99), 2);
					var consequent_50 = ($$anchor) => {
						append($$anchor, root_55());
					};
					var d_10 = user_derived(() => hasRole("master_accountant"));
					if_block(node_106, ($$render) => {
						if (get(d_10)) $$render(consequent_50);
					});
					reset(div_99);
					reset(div_98);
					append($$anchor, div_98);
				};
				if_block(node_104, ($$render) => {
					if (get(isDealClosed)) $$render(consequent_51);
				});
				var div_100 = sibling(node_104, 2);
				var div_101 = child(div_100);
				var h2_5 = child(div_101);
				var text_66 = child(h2_5);
				reset(h2_5);
				reset(div_101);
				var node_107 = sibling(div_101, 2);
				var consequent_55 = ($$anchor) => {
					var table_2 = root_63();
					var tbody_2 = sibling(child(table_2));
					each(tbody_2, 21, () => get(detail).supplierPayments, index, ($$anchor, sp) => {
						var tr_2 = root_62();
						var td_12 = child(tr_2);
						var text_67 = child(td_12, true);
						reset(td_12);
						var td_13 = sibling(td_12);
						MoneyDisplay(child(td_13), { get amount() {
							return get(sp).amount;
						} });
						reset(td_13);
						var td_14 = sibling(td_13);
						var text_68 = child(td_14, true);
						reset(td_14);
						var td_15 = sibling(td_14);
						var span_58 = child(td_15);
						var text_69 = child(span_58, true);
						reset(span_58);
						reset(td_15);
						var td_16 = sibling(td_15);
						var text_70 = child(td_16, true);
						reset(td_16);
						var td_17 = sibling(td_16);
						var text_71 = child(td_17, true);
						reset(td_17);
						var td_18 = sibling(td_17);
						DateDisplay(child(td_18), { get value() {
							return get(sp).requestedAt;
						} });
						reset(td_18);
						var td_19 = sibling(td_18);
						var node_110 = child(td_19);
						var consequent_52 = ($$anchor) => {
							var span_59 = root_57();
							Lock(child(span_59), { class: "h-3 w-3 text-muted-foreground/70" });
							next();
							reset(span_59);
							append($$anchor, span_59);
						};
						var consequent_54 = ($$anchor) => {
							var div_102 = root_60();
							var node_112 = child(div_102);
							var consequent_53 = ($$anchor) => {
								var fragment_40 = root_58();
								var button_10 = first_child(fragment_40);
								var button_11 = sibling(button_10, 2);
								var button_12 = sibling(button_11, 2);
								delegated("click", button_10, () => openEditGovtFeeModal(get(sp)));
								delegated("click", button_11, () => handleApproveSupplierPayment(get(sp)));
								delegated("click", button_12, () => handleRejectSupplierPayment(get(sp)));
								append($$anchor, fragment_40);
							};
							var d_11 = user_derived(() => hasRole("accountant"));
							var alternate_6 = ($$anchor) => {
								append($$anchor, root_59());
							};
							if_block(node_112, ($$render) => {
								if (get(d_11)) $$render(consequent_53);
								else $$render(alternate_6, -1);
							});
							reset(div_102);
							append($$anchor, div_102);
						};
						var d_12 = user_derived(() => (get(sp).status ?? "").toLowerCase().includes("pending") || (get(sp).status ?? "").toLowerCase() === "draft");
						var alternate_7 = ($$anchor) => {
							append($$anchor, root_61());
						};
						if_block(node_110, ($$render) => {
							if (get(isDealClosed)) $$render(consequent_52);
							else if (get(d_12)) $$render(consequent_54, 1);
							else $$render(alternate_7, -1);
						});
						reset(td_19);
						reset(tr_2);
						template_effect(($0, $1, $2, $3) => {
							set_text(text_67, $0);
							set_text(text_68, $1);
							set_class(span_58, 1, `inline-flex px-2 py-0.5 rounded-full text-[9px] font-bold ${$2 ?? ""}`);
							set_text(text_69, get(sp).status);
							set_text(text_70, get(sp).referenceNumber ?? "—");
							set_text(text_71, $3);
						}, [
							() => getSupplierLabel(get(sp).supplierId),
							() => formatPaymentMethodLabel(get(sp)),
							() => statusClass(get(sp).status),
							() => getUserLabel(get(sp).requestedByUserId, get(sp))
						]);
						append($$anchor, tr_2);
					});
					reset(tbody_2);
					reset(table_2);
					append($$anchor, table_2);
				};
				var alternate_8 = ($$anchor) => {
					append($$anchor, root_64());
				};
				if_block(node_107, ($$render) => {
					if (get(detail).supplierPayments?.length) $$render(consequent_55);
					else $$render(alternate_8, -1);
				});
				reset(div_100);
				var div_104 = sibling(div_100, 2);
				var div_105 = child(div_104);
				var h2_6 = child(div_105);
				var text_72 = child(h2_6);
				reset(h2_6);
				reset(div_105);
				var node_113 = sibling(div_105, 2);
				var consequent_58 = ($$anchor) => {
					var table_3 = root_67();
					var tbody_3 = sibling(child(table_3));
					each(tbody_3, 21, () => get(detail).purchaseReturns, index, ($$anchor, pr) => {
						var tr_3 = root_66();
						var td_20 = child(tr_3);
						var text_73 = child(td_20, true);
						reset(td_20);
						var td_21 = sibling(td_20);
						MoneyDisplay(child(td_21), { get amount() {
							return get(pr).amount;
						} });
						reset(td_21);
						var td_22 = sibling(td_21);
						var text_74 = child(td_22, true);
						reset(td_22);
						var td_23 = sibling(td_22);
						var span_62 = child(td_23);
						var text_75 = child(span_62, true);
						reset(span_62);
						reset(td_23);
						var td_24 = sibling(td_23);
						var text_76 = child(td_24, true);
						reset(td_24);
						var td_25 = sibling(td_24);
						var text_77 = child(td_25, true);
						reset(td_25);
						var td_26 = sibling(td_25);
						DateDisplay(child(td_26), { get value() {
							return get(pr).requestedAt;
						} });
						reset(td_26);
						var td_27 = sibling(td_26);
						var node_116 = child(td_27);
						var consequent_56 = ($$anchor) => {
							var span_63 = root_57();
							Lock(child(span_63), { class: "h-3 w-3 text-muted-foreground/70" });
							next();
							reset(span_63);
							append($$anchor, span_63);
						};
						var consequent_57 = ($$anchor) => {
							var div_106 = root_65();
							var button_13 = child(div_106);
							var button_14 = sibling(button_13, 2);
							reset(div_106);
							delegated("click", button_13, () => handleApprovePurchaseReturn(get(pr)));
							delegated("click", button_14, () => handleRejectPurchaseReturn(get(pr)));
							append($$anchor, div_106);
						};
						var d_13 = user_derived(() => (get(pr).status ?? "").toLowerCase().includes("pending") && hasRole("accountant"));
						var alternate_9 = ($$anchor) => {
							append($$anchor, root_61());
						};
						if_block(node_116, ($$render) => {
							if (get(isDealClosed)) $$render(consequent_56);
							else if (get(d_13)) $$render(consequent_57, 1);
							else $$render(alternate_9, -1);
						});
						reset(td_27);
						reset(tr_3);
						template_effect(($0, $1, $2) => {
							set_text(text_73, $0);
							set_text(text_74, get(pr).destinationType);
							set_class(span_62, 1, `inline-flex px-2 py-0.5 rounded-full text-[9px] font-bold ${$1 ?? ""}`);
							set_text(text_75, get(pr).status);
							set_text(text_76, get(pr).reason);
							set_text(text_77, $2);
						}, [
							() => getSupplierLabel(get(pr).supplierId),
							() => statusClass(get(pr).status),
							() => getUserLabel(get(pr).requestedByUserId, get(pr))
						]);
						append($$anchor, tr_3);
					});
					reset(tbody_3);
					reset(table_3);
					append($$anchor, table_3);
				};
				var alternate_10 = ($$anchor) => {
					append($$anchor, root_68());
				};
				if_block(node_113, ($$render) => {
					if (get(detail).purchaseReturns?.length) $$render(consequent_58);
					else $$render(alternate_10, -1);
				});
				reset(div_104);
				var div_108 = sibling(div_104, 2);
				var div_109 = child(div_108);
				var h2_7 = child(div_109);
				var text_78 = child(h2_7);
				reset(h2_7);
				reset(div_109);
				var node_118 = sibling(div_109, 2);
				var consequent_61 = ($$anchor) => {
					var table_4 = root_70();
					var tbody_4 = sibling(child(table_4));
					each(tbody_4, 21, () => get(detail).salesReturns, index, ($$anchor, sr) => {
						var tr_4 = root_69();
						var td_28 = child(tr_4);
						var text_79 = child(td_28, true);
						reset(td_28);
						var td_29 = sibling(td_28);
						MoneyDisplay(child(td_29), { get amount() {
							return get(sr).amount;
						} });
						reset(td_29);
						var td_30 = sibling(td_29);
						var text_80 = child(td_30, true);
						reset(td_30);
						var td_31 = sibling(td_30);
						var span_65 = child(td_31);
						var text_81 = child(span_65, true);
						reset(span_65);
						reset(td_31);
						var td_32 = sibling(td_31);
						var text_82 = child(td_32, true);
						reset(td_32);
						var td_33 = sibling(td_32);
						DateDisplay(child(td_33), { get value() {
							return get(sr).requestedAt;
						} });
						reset(td_33);
						var td_34 = sibling(td_33);
						var node_121 = child(td_34);
						var consequent_59 = ($$anchor) => {
							var span_66 = root_57();
							Lock(child(span_66), { class: "h-3 w-3 text-muted-foreground/70" });
							next();
							reset(span_66);
							append($$anchor, span_66);
						};
						var consequent_60 = ($$anchor) => {
							var div_110 = root_65();
							var button_15 = child(div_110);
							var button_16 = sibling(button_15, 2);
							reset(div_110);
							delegated("click", button_15, () => handleApproveSalesReturn(get(sr)));
							delegated("click", button_16, () => handleRejectSalesReturn(get(sr)));
							append($$anchor, div_110);
						};
						var d_14 = user_derived(() => (get(sr).status ?? "").toLowerCase().includes("pending") && hasRole("accountant"));
						var alternate_11 = ($$anchor) => {
							append($$anchor, root_61());
						};
						if_block(node_121, ($$render) => {
							if (get(isDealClosed)) $$render(consequent_59);
							else if (get(d_14)) $$render(consequent_60, 1);
							else $$render(alternate_11, -1);
						});
						reset(td_34);
						reset(tr_4);
						template_effect(($0, $1, $2) => {
							set_text(text_79, $0);
							set_text(text_80, get(sr).reason);
							set_class(span_65, 1, `inline-flex px-2 py-0.5 rounded-full text-[9px] font-bold ${$1 ?? ""}`);
							set_text(text_81, get(sr).status);
							set_text(text_82, $2);
						}, [
							() => getRecipientLabel(get(sr).recipientType, get(sr).recipientId, get(sr)),
							() => statusClass(get(sr).status),
							() => getUserLabel(get(sr).requestedByUserId, get(sr))
						]);
						append($$anchor, tr_4);
					});
					reset(tbody_4);
					reset(table_4);
					append($$anchor, table_4);
				};
				var alternate_12 = ($$anchor) => {
					append($$anchor, root_71());
				};
				if_block(node_118, ($$render) => {
					if (get(detail).salesReturns?.length) $$render(consequent_61);
					else $$render(alternate_12, -1);
				});
				reset(div_108);
				reset(div_89);
				template_effect(() => {
					set_class(div_96, 1, `bg-card border border-border rounded-2xl p-4 space-y-1 shadow-xs border-l-4 ${get(hasSettledSupplierPayments) || get(totalPaid) > 0 ? get(calculatedProfit) >= 0 ? "border-l-emerald-500 bg-emerald-500/5" : "border-l-rose-500 bg-rose-500/5" : get(calculatedProfit) > 0 ? "border-l-emerald-500/70 bg-emerald-500/5" : "border-l-muted-foreground/30"}`);
					set_class(p_16, 1, `text-base font-bold font-mono ${get(hasSettledSupplierPayments) || get(totalPaid) > 0 ? get(calculatedProfit) >= 0 ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400" : get(calculatedProfit) > 0 ? "text-emerald-600/80 dark:text-emerald-400/80" : "text-foreground"}`);
					set_text(text_66, `Supplier Payments (${get(detail).supplierPayments?.length ?? 0 ?? ""})`);
					set_text(text_72, `Purchase Returns (Supplier Refunds) (${get(detail).purchaseReturns?.length ?? 0 ?? ""})`);
					set_text(text_78, `Sales Returns (Customer Refunds) (${get(detail).salesReturns?.length ?? 0 ?? ""})`);
				});
				append($$anchor, div_89);
			};
			if_block(node_86, ($$render) => {
				if (!get(isPaymentSuccessful)) $$render(consequent_47);
				else $$render(alternate_13, -1);
			});
			append($$anchor, fragment_32);
		};
		var consequent_63 = ($$anchor) => {
			var div_112 = root_77();
			var h2_8 = child(div_112);
			Clock(child(h2_8), { class: "h-4 w-4 text-primary" });
			next();
			reset(h2_8);
			var ol = sibling(h2_8, 2);
			var li = child(ol);
			var div_113 = sibling(child(li), 2);
			var p_17 = sibling(child(div_113), 2);
			DateDisplay(child(p_17), { get value() {
				return get(sd).createdAt;
			} });
			reset(p_17);
			reset(div_113);
			reset(li);
			var node_125 = sibling(li, 2);
			each(node_125, 17, () => get(detail)?.journalEntries ?? [], index, ($$anchor, j) => {
				var li_1 = root_73();
				var div_114 = sibling(child(li_1), 2);
				var p_18 = child(div_114);
				var text_83 = child(p_18);
				reset(p_18);
				var p_19 = sibling(p_18, 2);
				var text_84 = child(p_19);
				DateDisplay(sibling(text_84), { get value() {
					return get(j).entryDate;
				} });
				reset(p_19);
				reset(div_114);
				reset(li_1);
				template_effect(() => {
					set_text(text_83, `Journal Entry — ${get(j).journalNumber ?? ""}`);
					set_text(text_84, `${get(j).description ?? ""} • `);
				});
				append($$anchor, li_1);
			});
			var node_127 = sibling(node_125, 2);
			each(node_127, 17, () => get(detail)?.supplierPayments ?? [], index, ($$anchor, sp) => {
				var li_2 = root_74();
				var div_115 = sibling(child(li_2), 2);
				var p_20 = child(div_115);
				MoneyDisplay(sibling(child(p_20)), { get amount() {
					return get(sp).amount;
				} });
				reset(p_20);
				var p_21 = sibling(p_20, 2);
				var text_85 = child(p_21);
				DateDisplay(sibling(text_85), { get value() {
					return get(sp).requestedAt;
				} });
				reset(p_21);
				reset(div_115);
				reset(li_2);
				template_effect(() => set_text(text_85, `Status: ${get(sp).status ?? ""} • `));
				append($$anchor, li_2);
			});
			var node_130 = sibling(node_127, 2);
			each(node_130, 17, () => get(detail)?.purchaseReturns ?? [], index, ($$anchor, pr) => {
				var li_3 = root_75();
				var div_116 = sibling(child(li_3), 2);
				var p_22 = child(div_116);
				MoneyDisplay(sibling(child(p_22)), { get amount() {
					return get(pr).amount;
				} });
				reset(p_22);
				var p_23 = sibling(p_22, 2);
				var text_86 = child(p_23);
				DateDisplay(sibling(text_86), { get value() {
					return get(pr).requestedAt;
				} });
				reset(p_23);
				reset(div_116);
				reset(li_3);
				template_effect(() => set_text(text_86, `Status: ${get(pr).status ?? ""} • `));
				append($$anchor, li_3);
			});
			var node_133 = sibling(node_130, 2);
			each(node_133, 17, () => get(detail)?.salesReturns ?? [], index, ($$anchor, sr) => {
				var li_4 = root_76();
				var div_117 = sibling(child(li_4), 2);
				var p_24 = child(div_117);
				MoneyDisplay(sibling(child(p_24)), { get amount() {
					return get(sr).amount;
				} });
				reset(p_24);
				var p_25 = sibling(p_24, 2);
				var text_87 = child(p_25);
				DateDisplay(sibling(text_87), { get value() {
					return get(sr).requestedAt;
				} });
				reset(p_25);
				reset(div_117);
				reset(li_4);
				template_effect(() => set_text(text_87, `Status: ${get(sr).status ?? ""} • `));
				append($$anchor, li_4);
			});
			var li_5 = sibling(node_133, 2);
			var div_118 = sibling(child(li_5), 2);
			var p_26 = sibling(child(div_118), 2);
			DateDisplay(child(p_26), { get value() {
				return get(sd).updatedAt;
			} });
			reset(p_26);
			reset(div_118);
			reset(li_5);
			reset(ol);
			reset(div_112);
			append($$anchor, div_112);
		};
		if_block(node_53, ($$render) => {
			if (get(activeTab) === "overview") $$render(consequent_33);
			else if (get(activeTab) === "financial") $$render(consequent_43, 1);
			else if (get(activeTab) === "items") $$render(consequent_46, 2);
			else if (get(activeTab) === "supplier") $$render(consequent_62, 3);
			else if (get(activeTab) === "timeline") $$render(consequent_63, 4);
		});
		template_effect(($0) => {
			set_class(span_2, 1, `inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide ${$0 ?? ""}`);
			set_text(text_6, get(sd).paymentStatus);
			set_text(text_7, get(sd).processingStatus ?? get(sd).orderStatus ?? "—");
		}, [() => statusClass(get(sd).paymentStatus)]);
		append($$anchor, fragment_9);
	};
	var alternate_14 = ($$anchor) => {
		append($$anchor, root_79());
	};
	if_block(node_11, ($$render) => {
		if (get(loading)) $$render(consequent_3);
		else if (get(error)) $$render(consequent_4, 1);
		else if (get(sd)) $$render(consequent_64, 2);
		else $$render(alternate_14, -1);
	});
	reset(div);
	var node_137 = sibling(div, 2);
	var consequent_69 = ($$anchor) => {
		var div_120 = root_83();
		var div_121 = child(div_120);
		var div_122 = child(div_121);
		var h3 = child(div_122);
		var node_138 = child(h3);
		Coins(node_138, { class: "h-4.5 w-4.5 text-primary" });
		var text_88 = sibling(node_138);
		reset(h3);
		var button_17 = sibling(h3, 2);
		X(child(button_17), { class: "h-4 w-4" });
		reset(button_17);
		reset(div_122);
		var form = sibling(div_122, 2);
		var div_123 = child(form);
		var div_124 = child(div_123);
		var node_140 = sibling(child(div_124), 2);
		{
			let $0 = user_derived(() => get(filteredSuppliersList).map((s) => ({
				id: s.id,
				name: `${s.name} (${s.code})`,
				subtext: s.wallet !== void 0 ? `Wallet Bal: ${s.wallet.toFixed(3)} BHD` : void 0
			})));
			SearchableSelect(node_140, {
				id: "pay-supplier",
				get options() {
					return get($0);
				},
				placeholder: "-- Select Supplier --",
				searchPlaceholder: "Search supplier name or code...",
				required: true,
				get value() {
					return get(paySupplierId);
				},
				set value($$value) {
					set(paySupplierId, $$value, true);
				}
			});
		}
		reset(div_124);
		var node_141 = sibling(div_124, 2);
		var consequent_65 = ($$anchor) => {
			var div_125 = root_80();
			var div_126 = child(div_125);
			var span_68 = sibling(child(div_126), 2);
			var text_89 = child(span_68, true);
			var node_142 = sibling(text_89);
			{
				let $0 = user_derived(() => get(selectedPaySupplier).wallet ?? 0);
				MoneyDisplay(node_142, { get amount() {
					return get($0);
				} });
			}
			reset(span_68);
			reset(div_126);
			var span_69 = sibling(div_126, 2);
			var text_90 = child(span_69, true);
			reset(span_69);
			reset(div_125);
			template_effect(() => {
				set_class(span_68, 1, `text-sm font-bold font-mono ${get(selectedPaySupplier).wallet > 0 ? "text-emerald-600" : get(selectedPaySupplier).wallet < 0 ? "text-rose-600" : "text-foreground"}`);
				set_text(text_89, get(selectedPaySupplier).wallet > 0 ? "+" : "");
				set_class(span_69, 1, `px-2 py-0.5 text-[10px] font-bold rounded-md ${get(selectedPaySupplier).wallet > 0 ? "bg-emerald-500/10 text-emerald-600 border border-emerald-500/20" : get(selectedPaySupplier).wallet < 0 ? "bg-rose-500/10 text-rose-600 border border-rose-500/20" : "bg-muted text-muted-foreground"}`);
				set_text(text_90, get(selectedPaySupplier).wallet > 0 ? "Surplus (+)" : get(selectedPaySupplier).wallet < 0 ? "Debt (-)" : "Settled");
			});
			append($$anchor, div_125);
		};
		if_block(node_141, ($$render) => {
			if (get(selectedPaySupplier)) $$render(consequent_65);
		});
		var div_127 = sibling(node_141, 2);
		Input(sibling(child(div_127), 2), {
			id: "pay-amount",
			type: "number",
			step: "0.001",
			min: "0",
			required: true,
			get value() {
				return get(payAmount);
			},
			set value($$value) {
				set(payAmount, $$value, true);
			}
		});
		reset(div_127);
		var div_128 = sibling(div_127, 2);
		var select_1 = sibling(child(div_128), 2);
		var option_2 = child(select_1);
		option_2.value = option_2.__value = "supplier_wallet";
		reset(select_1);
		reset(div_128);
		var node_144 = sibling(div_128, 2);
		var consequent_66 = ($$anchor) => {
			var div_129 = root_81();
			var label = child(div_129);
			var text_91 = child(label);
			next();
			reset(label);
			var node_145 = sibling(label, 2);
			{
				let $0 = user_derived(() => `-- Select Source ${get(payMethod) === "cash" ? "Cash" : "Bank"} Account --`);
				SearchableSelect(node_145, {
					id: "pay-source",
					get options() {
						return get(filteredSourceAccounts);
					},
					get placeholder() {
						return get($0);
					},
					searchPlaceholder: "Search bank or cash account...",
					required: true,
					get value() {
						return get(paySourceId);
					},
					set value($$value) {
						set(paySourceId, $$value, true);
					}
				});
			}
			reset(div_129);
			template_effect(() => set_text(text_91, `Source ${get(payMethod) === "cash" ? "Cash" : "Bank"} Account `));
			append($$anchor, div_129);
		};
		if_block(node_144, ($$render) => {
			if (get(payMethod) !== "credit" && get(payMethod) !== "supplier_wallet") $$render(consequent_66);
		});
		var node_146 = sibling(node_144, 2);
		var consequent_67 = ($$anchor) => {
			var div_130 = root_82();
			var node_147 = child(div_130);
			Circle_alert(node_147, { class: "h-4 w-4 shrink-0 text-amber-500" });
			var span_70 = sibling(node_147, 2);
			var text_92 = child(span_70);
			reset(span_70);
			reset(div_130);
			template_effect(($0) => set_text(text_92, `This will put the supplier balance into credit (${$0 ?? ""} BHD).`), [() => ((get(selectedPaySupplier).wallet ?? 0) - get(payAmount)).toFixed(3)]);
			append($$anchor, div_130);
		};
		var d_15 = user_derived(() => (get(payMethod) === "supplier_wallet" || get(payMethod) === "credit") && get(selectedPaySupplier) && get(payAmount) != null && !isNaN(get(payAmount)) && (get(selectedPaySupplier).wallet ?? 0) - get(payAmount) < 0);
		if_block(node_146, ($$render) => {
			if (get(d_15)) $$render(consequent_67);
		});
		var div_131 = sibling(node_146, 2);
		Input(sibling(child(div_131), 2), {
			id: "pay-ref",
			type: "text",
			placeholder: "e.g. TXN-998822",
			get value() {
				return get(payRefNum);
			},
			set value($$value) {
				set(payRefNum, $$value, true);
			}
		});
		reset(div_131);
		var div_132 = sibling(div_131, 2);
		Input(sibling(child(div_132), 2), {
			id: "pay-desc",
			type: "text",
			placeholder: "Enter payment description...",
			get value() {
				return get(payDesc);
			},
			set value($$value) {
				set(payDesc, $$value, true);
			}
		});
		reset(div_132);
		reset(div_123);
		var div_133 = sibling(div_123, 2);
		var node_150 = child(div_133);
		Button(node_150, {
			type: "button",
			variant: "outline",
			onclick: () => {
				set(showPaymentModal, false);
				set(approvingPendingPayment, null);
			},
			class: "rounded-xl",
			children: ($$anchor, $$slotProps) => {
				next();
				append($$anchor, text("Cancel"));
			},
			$$slots: { default: true }
		});
		var node_151 = sibling(node_150, 2);
		{
			let $0 = user_derived(() => get(actionLoading) || !get(paySupplierId) || get(payAmount) == null || isNaN(get(payAmount)) || get(payAmount) < 0 || get(payMethod) !== "credit" && get(payMethod) !== "supplier_wallet" && !get(paySourceId));
			Button(node_151, {
				type: "submit",
				get disabled() {
					return get($0);
				},
				class: "rounded-xl bg-primary text-white font-semibold",
				children: ($$anchor, $$slotProps) => {
					var fragment_41 = root();
					var node_152 = first_child(fragment_41);
					var consequent_68 = ($$anchor) => {
						Refresh_cw($$anchor, { class: "h-3 w-3 mr-1.5 animate-spin" });
					};
					if_block(node_152, ($$render) => {
						if (get(actionLoading)) $$render(consequent_68);
					});
					var text_94 = sibling(node_152);
					template_effect(() => set_text(text_94, ` ${get(approvingPendingPayment) ? "Approve & Post Payment" : "Post Payment"}`));
					append($$anchor, fragment_41);
				},
				$$slots: { default: true }
			});
		}
		reset(div_133);
		reset(form);
		reset(div_121);
		reset(div_120);
		template_effect(() => set_text(text_88, ` ${get(approvingPendingPayment) ? "Approve & Post Supplier Payment" : "Post Supplier Payment"}`));
		delegated("click", button_17, () => {
			set(showPaymentModal, false);
			set(approvingPendingPayment, null);
		});
		event("submit", form, submitPaymentForm);
		bind_select_value(select_1, () => get(payMethod), ($$value) => set(payMethod, $$value));
		append($$anchor, div_120);
	};
	if_block(node_137, ($$render) => {
		if (get(showPaymentModal)) $$render(consequent_69);
	});
	var node_153 = sibling(node_137, 2);
	ConfirmationDialog(node_153, {
		get title() {
			return get(statusConfirmTitle);
		},
		get message() {
			return get(statusConfirmMessage);
		},
		get confirmLabel() {
			return get(statusConfirmActionLabel);
		},
		get isDestructive() {
			return get(statusConfirmIsDestructive);
		},
		onConfirm: executeBookingStatusUpdate,
		get open() {
			return get(showStatusConfirmModal);
		},
		set open($$value) {
			set(showStatusConfirmModal, $$value, true);
		}
	});
	var node_154 = sibling(node_153, 2);
	var consequent_72 = ($$anchor) => {
		var div_134 = root_86();
		var div_135 = child(div_134);
		var div_136 = child(div_135);
		var div_137 = child(div_136);
		Credit_card(child(div_137), { class: "h-5 w-5 text-primary" });
		next(2);
		reset(div_137);
		var button_18 = sibling(div_137, 2);
		X(child(button_18), { class: "h-4 w-4" });
		reset(button_18);
		reset(div_136);
		var form_1 = sibling(div_136, 4);
		var div_138 = child(form_1);
		var node_157 = sibling(child(div_138), 2);
		{
			let $0 = user_derived(() => ["text-xs font-mono", get(refIdModalError) ? "border-red-500 ring-2 ring-red-500/20" : ""].join(" "));
			Input(node_157, {
				id: "refIdInput",
				type: "text",
				placeholder: "e.g. TXN-987654321",
				oninput: () => set(refIdModalError, null),
				required: true,
				get class() {
					return get($0);
				},
				get value() {
					return get(onlineReferenceIdVal);
				},
				set value($$value) {
					set(onlineReferenceIdVal, $$value, true);
				}
			});
		}
		var node_158 = sibling(node_157, 2);
		var consequent_70 = ($$anchor) => {
			var p_27 = root_84();
			var node_159 = child(p_27);
			Circle_alert(node_159, { class: "h-3.5 w-3.5 shrink-0 text-red-600" });
			var span_71 = sibling(node_159, 2);
			var text_95 = child(span_71, true);
			reset(span_71);
			reset(p_27);
			template_effect(() => set_text(text_95, get(refIdModalError)));
			append($$anchor, p_27);
		};
		if_block(node_158, ($$render) => {
			if (get(refIdModalError)) $$render(consequent_70);
		});
		reset(div_138);
		var div_139 = sibling(div_138, 2);
		var node_160 = child(div_139);
		Button(node_160, {
			type: "button",
			variant: "outline",
			class: "rounded-xl h-9 text-xs",
			get disabled() {
				return get(actionLoading);
			},
			onclick: () => set(showReferenceIdModal, false),
			children: ($$anchor, $$slotProps) => {
				next();
				append($$anchor, text("Cancel"));
			},
			$$slots: { default: true }
		});
		var node_161 = sibling(node_160, 2);
		{
			let $0 = user_derived(() => get(actionLoading) || !get(onlineReferenceIdVal).trim());
			Button(node_161, {
				type: "submit",
				class: "rounded-xl h-9 text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white",
				get disabled() {
					return get($0);
				},
				children: ($$anchor, $$slotProps) => {
					var fragment_43 = root_85();
					var node_162 = first_child(fragment_43);
					var consequent_71 = ($$anchor) => {
						Refresh_cw($$anchor, { class: "h-3.5 w-3.5 mr-1.5 animate-spin" });
					};
					if_block(node_162, ($$render) => {
						if (get(actionLoading)) $$render(consequent_71);
					});
					next();
					append($$anchor, fragment_43);
				},
				$$slots: { default: true }
			});
		}
		reset(div_139);
		reset(form_1);
		reset(div_135);
		reset(div_134);
		delegated("click", button_18, () => set(showReferenceIdModal, false));
		event("submit", form_1, (e) => {
			e.preventDefault();
			if (!get(onlineReferenceIdVal).trim()) {
				toast.error("Bank Reference ID is required for online payments.");
				return;
			}
			set(targetBookingStatusToApply, "success");
			executeBookingStatusUpdate(get(onlineReferenceIdVal).trim());
		});
		append($$anchor, div_134);
	};
	if_block(node_154, ($$render) => {
		if (get(showReferenceIdModal)) $$render(consequent_72);
	});
	var node_163 = sibling(node_154, 2);
	var consequent_74 = ($$anchor) => {
		var div_140 = root_88();
		var div_141 = child(div_140);
		var div_142 = child(div_141);
		var div_143 = child(div_142);
		Pencil(child(div_143), { class: "h-5 w-5 text-primary" });
		next(2);
		reset(div_143);
		var button_19 = sibling(div_143, 2);
		X(child(button_19), { class: "h-4 w-4" });
		reset(button_19);
		reset(div_142);
		var form_2 = sibling(div_142, 2);
		var div_144 = child(form_2);
		Input(sibling(child(div_144), 2), {
			id: "editGovtAmt",
			type: "number",
			step: "0.001",
			min: "0",
			required: true,
			class: "h-9.5 text-xs font-mono",
			get value() {
				return get(editGovtFeeAmount);
			},
			set value($$value) {
				set(editGovtFeeAmount, $$value, true);
			}
		});
		reset(div_144);
		var div_145 = sibling(div_144, 2);
		var select_2 = sibling(child(div_145), 2);
		each(select_2, 21, () => get(filteredSuppliersList), index, ($$anchor, sup) => {
			var option_3 = root_40();
			var text_97 = child(option_3);
			reset(option_3);
			var option_3_value = {};
			template_effect(() => {
				set_text(text_97, `${get(sup).name ?? ""} (${get(sup).code ?? ""})`);
				if (option_3_value !== (option_3_value = get(sup).id)) option_3.value = (option_3.__value = get(sup).id) ?? "";
			});
			append($$anchor, option_3);
		});
		reset(select_2);
		reset(div_145);
		var div_146 = sibling(div_145, 2);
		Input(sibling(child(div_146), 2), {
			id: "editGovtRef",
			type: "text",
			placeholder: "e.g. TXN-123456",
			class: "h-9.5 text-xs font-mono",
			get value() {
				return get(editGovtFeeRefNum);
			},
			set value($$value) {
				set(editGovtFeeRefNum, $$value, true);
			}
		});
		reset(div_146);
		var div_147 = sibling(div_146, 2);
		Input(sibling(child(div_147), 2), {
			id: "editGovtDesc",
			type: "text",
			placeholder: "Government Payment description...",
			class: "h-9.5 text-xs",
			get value() {
				return get(editGovtFeeDesc);
			},
			set value($$value) {
				set(editGovtFeeDesc, $$value, true);
			}
		});
		reset(div_147);
		var div_148 = sibling(div_147, 2);
		var node_169 = child(div_148);
		Button(node_169, {
			type: "button",
			variant: "outline",
			class: "rounded-xl h-9 text-xs",
			get disabled() {
				return get(actionLoading);
			},
			onclick: () => set(showEditGovtFeeModal, false),
			children: ($$anchor, $$slotProps) => {
				next();
				append($$anchor, text("Cancel"));
			},
			$$slots: { default: true }
		});
		var node_170 = sibling(node_169, 2);
		{
			let $0 = user_derived(() => get(actionLoading) || get(editGovtFeeAmount) == null || isNaN(get(editGovtFeeAmount)) || get(editGovtFeeAmount) < 0);
			Button(node_170, {
				type: "submit",
				class: "rounded-xl h-9 text-xs font-semibold bg-primary text-primary-foreground",
				get disabled() {
					return get($0);
				},
				children: ($$anchor, $$slotProps) => {
					var fragment_45 = root_87();
					var node_171 = first_child(fragment_45);
					var consequent_73 = ($$anchor) => {
						Refresh_cw($$anchor, { class: "h-3.5 w-3.5 mr-1.5 animate-spin" });
					};
					if_block(node_171, ($$render) => {
						if (get(actionLoading)) $$render(consequent_73);
					});
					next();
					append($$anchor, fragment_45);
				},
				$$slots: { default: true }
			});
		}
		reset(div_148);
		reset(form_2);
		reset(div_141);
		reset(div_140);
		delegated("click", button_19, () => set(showEditGovtFeeModal, false));
		event("submit", form_2, submitEditGovtFeeForm);
		bind_select_value(select_2, () => get(editGovtFeeSupplierId), ($$value) => set(editGovtFeeSupplierId, $$value));
		append($$anchor, div_140);
	};
	if_block(node_163, ($$render) => {
		if (get(showEditGovtFeeModal)) $$render(consequent_74);
	});
	var node_172 = sibling(node_163, 2);
	{
		let $0 = user_derived(() => get(spToReject)?.amount ?? null);
		let $1 = user_derived(() => formatSpDesc(get(spToReject)?.description));
		SupplierPaymentRejectDialog(node_172, {
			get paymentAmount() {
				return get($0);
			},
			get paymentDescription() {
				return get($1);
			},
			get loading() {
				return get(spRejectLoading);
			},
			onConfirm: submitSpRejection,
			onClose: () => {
				set(showSpRejectModal, false);
				set(spToReject, null);
			},
			get open() {
				return get(showSpRejectModal);
			},
			set open($$value) {
				set(showSpRejectModal, $$value, true);
			}
		});
	}
	var node_173 = sibling(node_172, 2);
	ConfirmationDialog(node_173, {
		title: "Mark as Deal Closed",
		message: "Are you sure you want to mark this deal as closed? Once deal is closed, supplier payouts, purchase returns, and customer refunds will be locked. (Only Master Accountants can unlock this deal later).",
		confirmLabel: "Mark as Deal Closed",
		isDestructive: false,
		onConfirm: handleMarkAsDealClosed,
		onCancel: () => set(showMarkDealClosedModal, false),
		get open() {
			return get(showMarkDealClosedModal);
		},
		set open($$value) {
			set(showMarkDealClosedModal, $$value, true);
		}
	});
	var node_174 = sibling(node_173, 2);
	ConfirmationDialog(node_174, {
		title: "Unlock Deal / Re-open Deal?",
		message: "As a Master Accountant, do you want to unlock this deal? This will re-open supplier payments, purchase refunds, and sales refund workflows for accountants to make necessary adjustments.",
		confirmLabel: "Unlock Deal",
		isDestructive: false,
		onConfirm: handleUnlockBooking,
		onCancel: () => set(showUnlockModal, false),
		get open() {
			return get(showUnlockModal);
		},
		set open($$value) {
			set(showUnlockModal, $$value, true);
		}
	});
	var node_175 = sibling(node_174, 2);
	ConfirmationDialog(node_175, {
		title: "Unlock Operational Processing",
		message: "Are you sure you want to unlock this application for operations? This will re-enable all operational processing (approvals, document requests, fee entries) in the Operational Portal.",
		confirmLabel: "Unlock Operation",
		isDestructive: false,
		onConfirm: handleUnlockOperation,
		onCancel: () => set(showUnlockOperationModal, false),
		get open() {
			return get(showUnlockOperationModal);
		},
		set open($$value) {
			set(showUnlockOperationModal, $$value, true);
		}
	});
	ConfirmationDialog(sibling(node_175, 2), {
		title: "Lock Operational Processing",
		message: "Are you sure you want to lock operational processing for this application? Operational staff will no longer be able to make changes in the Operational Portal until unlocked by a Master Accountant.",
		confirmLabel: "Lock Operation",
		isDestructive: true,
		onConfirm: handleLockOperation,
		onCancel: () => set(showLockOperationModal, false),
		get open() {
			return get(showLockOperationModal);
		},
		set open($$value) {
			set(showLockOperationModal, $$value, true);
		}
	});
	template_effect(($0) => {
		set_text(text_1, `${$0 ?? ""} `);
		set_text(text_2, get(sd)?.documentNumber || get(bookingId));
	}, [() => serviceLabel(get(serviceType))]);
	append($$anchor, fragment);
	pop();
	$$cleanup();
}
delegate(["click"]);
//#endregion
export { _page as component };

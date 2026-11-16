import { A as component, B as append, Ct as setup_stores, D as head, G as text, H as from_html, I as if_block, J as event, K as delegate, Lt as next, M as slot, Mt as push, N as each, P as index, Q as get, R as set_text, Rt as reset, V as comment, _ as set_attribute, a as legacy_rest_props, b as bind_select_value, c as spread_props, dt as child, ft as first_child, gt as set, jt as pop, mt as proxy, ot as template_effect, pt as sibling, q as delegated, rt as deferred_template_effect, st as user_effect, ut as $document, vt as state, w as set_class, wt as store_get, xt as user_derived } from "../chunks/CjADOP7e.js";
import { t as goto } from "../chunks/BPPinaBO.js";
import "../chunks/DhaYE-8x.js";
import { t as apiFetch, u as getSalesPortalFileUrl } from "../chunks/CZsfkian.js";
import { i as hasRole, r as currentUser } from "../chunks/DavB3yv5.js";
import "../chunks/CAg53IQA.js";
import { r as toast } from "../chunks/_zpa1t7W.js";
import { t as Icon } from "../chunks/DqlRdx7b.js";
import { t as Arrow_left } from "../chunks/R7vzHR0h.js";
import { t as Check } from "../chunks/BfiA2OEz.js";
import { t as Circle_alert } from "../chunks/DMWQFuZT.js";
import { t as Clock } from "../chunks/3haK3Z-k.js";
import { t as Coins } from "../chunks/DbWQjZAz.js";
import { t as Credit_card } from "../chunks/BJ8a37_5.js";
import { t as File_text } from "../chunks/CObbvWS42.js";
import { t as Package } from "../chunks/DwR_KXlU2.js";
import { t as Pencil } from "../chunks/BmiiV3io2.js";
import { t as Printer } from "../chunks/DnI7ifpE2.js";
import { t as Refresh_cw } from "../chunks/CfBhdLL12.js";
import { t as Send } from "../chunks/BZTOTYje2.js";
import { t as User } from "../chunks/DPn7dE8H.js";
import { t as X } from "../chunks/Br3xtG5S.js";
import { t as page } from "../chunks/CxyGJPxH.js";
import { t as Button } from "../chunks/Ci9pdkd8.js";
import "../chunks/xGT3wnbG.js";
import { t as MoneyDisplay } from "../chunks/yzLuLjlN.js";
import { t as ConfirmationDialog } from "../chunks/DY6GQ-Hi.js";
import { t as DateDisplay } from "../chunks/C8F0fj7I.js";
import "../chunks/C0JWHsER.js";
import { i as fetchAccountsStaff } from "../chunks/CfrkC0HB.js";
import { t as previewDocument } from "../chunks/BURPM_i0.js";
import { r as getAccounts } from "../chunks/DYUBW60b.js";
import { n as getBanks } from "../chunks/SVD_WwNr.js";
import { t as Input } from "../chunks/Cmk-bM5x2.js";
import { a as createSalesReturn, d as getSuppliers, h as updateSupplierPayment, i as createPurchaseReturn, m as rejectSupplierPayment, o as createSupplierPayment, r as approveSupplierPayment } from "../chunks/Bfz9Jj6P2.js";
//#region node_modules/lucide-svelte/dist/icons/undo-2.svelte
function Undo_2($$anchor, $$props) {
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
	const iconNode = [["path", { "d": "M9 14 4 9l5-5" }], ["path", { "d": "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11" }]];
	/**
	* @component @name Undo2
	* @description Lucide SVG icon component, renders SVG Element with children.
	*
	* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNOSAxNCA0IDlsNS01IiAvPgogIDxwYXRoIGQ9Ik00IDloMTAuNWE1LjUgNS41IDAgMCAxIDUuNSA1LjVhNS41IDUuNSAwIDAgMS01LjUgNS41SDExIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/undo-2
	* @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
	*
	* @param {Object} props - Lucide icons props and any valid SVG attribute
	* @returns {FunctionalComponent} Svelte component
	*
	*/
	Icon($$anchor, spread_props({ name: "undo-2" }, () => $$sanitized_props, {
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
//#region src/routes/(app)/sales/bookings/[serviceType]/[id]/+page.svelte
var root = from_html(`<!> `, 1);
var root_1 = from_html(`<p class="text-xs text-muted-foreground mt-0.5"> <span class="capitalize font-medium"> </span></p>`);
var root_2 = from_html(`<!> Reload`, 1);
var root_3 = from_html(`<!> Print Invoice`, 1);
var root_4 = from_html(`<div class="bg-card border border-border rounded-2xl p-16 flex items-center justify-center animate-pulse"><!></div>`);
var root_5 = from_html(`<div class="bg-card border border-border rounded-2xl p-16 text-center text-red-600 text-sm"> </div>`);
var root_6 = from_html(`<div class="bg-card border border-amber-300/60 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs"><div class="space-y-1"><div class="flex items-center gap-2 flex-wrap"><span class="font-bold text-foreground text-sm font-mono"><!></span> <span class="text-[11px] px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-semibold"> </span> <span class="text-xs text-muted-foreground font-mono"> </span></div> <p class="text-xs text-muted-foreground"> </p> <p class="text-[11px] text-muted-foreground"> <!></p></div> <div class="flex items-center gap-2"><button class="px-3 py-1.5 text-xs font-semibold rounded-xl border border-border bg-card hover:bg-muted text-foreground transition-all cursor-pointer flex items-center gap-1"><!> Edit Fee</button> <button class="px-3.5 py-1.5 text-xs font-bold rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white transition-all cursor-pointer flex items-center gap-1 disabled:opacity-50"><!> Approve Payment</button> <button class="px-3.5 py-1.5 text-xs font-bold rounded-xl bg-red-600 hover:bg-red-700 text-white transition-all cursor-pointer flex items-center gap-1 disabled:opacity-50"><!> Reject</button></div></div>`);
var root_7 = from_html(`<div class="bg-amber-500/10 border-2 border-amber-500/30 rounded-2xl p-5 space-y-4 shadow-xs"><div class="flex items-center justify-between"><div class="flex items-center gap-2 text-amber-700 font-bold text-sm"><!> <span>Pending Government Fee / Supplier Payment Approval Prompt</span></div> <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-200 text-amber-900"> </span></div> <p class="text-xs text-amber-800">Operator has logged government fee / supplier payment amount(s). Please review, edit if required, and approve or reject:</p> <div class="space-y-3"></div></div>`);
var root_8 = from_html(`<button><!> </button>`);
var root_9 = from_html(`<div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Agent Name</span> <span class="font-semibold"> </span></div> <div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Agent ID</span> <span class="font-mono text-muted-foreground"> </span></div>`, 1);
var root_10 = from_html(`<div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Care Of</span> <span class="font-semibold"> </span></div>`);
var root_11 = from_html(`<div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Supplier</span><span> </span></div>`);
var root_12 = from_html(`<div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Route</span> <span class="font-semibold"> </span></div> <div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Payment Method</span> <span class="capitalize"> </span></div> <!>`, 1);
var root_13 = from_html(`<div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Guest Name</span> <span class="font-semibold"> </span></div> <div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Country</span><span> </span></div> <div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Check-In</span> <span><!></span></div> <div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Duration</span><span> </span></div> <div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Order Status</span> <span class="capitalize"> </span></div> <div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Payment Method</span> <span class="capitalize"> </span></div>`, 1);
var root_14 = from_html(`<div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Approval Note</span><span class="text-right max-w-48"> </span></div>`);
var root_15 = from_html(`<div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Visa Package</span> <span class="font-semibold"> </span></div> <!> <!>`, 1);
var root_16 = from_html(`<div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Applicant</span> <span class="font-semibold"> </span></div> <div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Country</span><span> </span></div> <div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Visa Type</span><span> </span></div> <div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Appointment</span> <span><!> </span></div> <div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">VFS App ID</span><span class="font-mono"> </span></div>`, 1);
var root_17 = from_html(`<div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Passenger</span> <span class="font-semibold"> </span></div> <div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Country</span><span> </span></div> <div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Duration</span><span> </span></div> <div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Booking ID</span><span class="font-mono"> </span></div> <div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Holiday App ID</span><span class="font-mono"> </span></div>`, 1);
var root_18 = from_html(`<div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Passenger</span> <span class="font-semibold"> </span></div> <div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Route</span> <span> </span></div> <div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Drop Date/Time</span> <span><!> </span></div> <div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Vehicle</span><span> </span></div>`, 1);
var root_19 = from_html(`<div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Narration</span> <span class="text-right max-w-48"> </span></div>`);
var root_20 = from_html(`<div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Service Name</span> <span class="font-semibold"> </span></div> <div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Customer Name</span> <span> </span></div> <!>`, 1);
var root_21 = from_html(`<div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div class="bg-card border border-border rounded-2xl p-5 space-y-3"><h2 class="text-sm font-bold text-foreground flex items-center gap-2"><!> Client Information</h2> <div class="space-y-2 text-xs"><div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Client Type</span> <span class="font-semibold capitalize"> </span></div> <div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Customer Head</span> <span class="font-semibold"> </span></div> <!> <!></div></div> <div class="bg-card border border-border rounded-2xl p-5 space-y-3"><h2 class="text-sm font-bold text-foreground flex items-center gap-2"><!> Service Details</h2> <div class="space-y-2 text-xs"><!> <!></div></div></div>`);
var root_22 = from_html(`<div class="bg-muted/30 rounded-xl p-4 text-center space-y-1"><p class="text-[10px] text-muted-foreground uppercase font-semibold tracking-wider"> </p> <p><!></p></div>`);
var root_23 = from_html(`<div class="flex justify-between"><span class="text-muted-foreground">Payment Method</span> <span class="capitalize font-semibold"> </span></div>`);
var root_24 = from_html(`<div class="flex justify-between"><span class="text-muted-foreground">Target Bank</span> <span class="font-semibold text-primary"> </span></div>`);
var root_25 = from_html(`<div class="flex justify-between"><span class="text-muted-foreground">In-house</span> <span class="font-semibold"> </span></div>`);
var root_26 = from_html(`<div class="flex justify-between items-center pt-2 border-t border-border/40"><span class="text-muted-foreground">Payment Proof</span> <div class="flex items-center gap-2"><span class="font-mono text-muted-foreground truncate max-w-[150px] sm:max-w-[250px]"> </span> <a target="_blank" rel="noopener noreferrer" class="px-2.5 py-1 text-[11px] font-bold rounded-lg border border-border bg-card hover:bg-muted text-foreground transition-all cursor-pointer inline-flex items-center">View</a> <a download="" class="px-2.5 py-1 text-[11px] font-bold rounded-lg border border-border bg-card hover:bg-muted text-foreground transition-all cursor-pointer inline-flex items-center">Download</a></div></div>`);
var root_27 = from_html(`<option> </option>`);
var root_28 = from_html(`<div class="flex flex-col gap-1.5 pt-2 border-t border-border/40 text-xs"><label for="cashAccountId" class="font-semibold text-muted-foreground">Destination Cash Account</label> <select id="cashAccountId" class="h-9.5 w-full bg-background border border-border rounded-xl px-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground disabled:opacity-50"><option>-- Select Cash Account --</option><!></select></div>`);
var root_29 = from_html(`<div class="flex gap-3 pt-4 border-t border-border/40 justify-end"><button class="px-4 py-2 text-xs font-bold rounded-xl cursor-pointer bg-emerald-600 hover:bg-emerald-700 text-white flex items-center gap-1.5 transition-all shadow-sm disabled:opacity-50"><!> Approve Payment</button> <button class="px-4 py-2 text-xs font-bold rounded-xl cursor-pointer bg-red-600 hover:bg-red-700 text-white flex items-center gap-1.5 transition-all shadow-sm"><!> Reject Payment</button></div>`);
var root_30 = from_html(`<div class="bg-card border border-border rounded-2xl p-5 space-y-4"><h2 class="text-sm font-bold text-foreground flex items-center gap-2"><!> Financial Summary</h2> <div class="grid grid-cols-2 md:grid-cols-4 gap-4"></div> <div class="text-xs space-y-2 pt-2 border-t border-border/40"><!> <!> <!> <!></div> <!> <!></div>`);
var root_31 = from_html(`<tr class="hover:bg-muted/10"><td class="p-3 font-semibold"> </td><td class="p-3 font-mono"><!></td><td class="p-3 font-mono text-muted-foreground"><!></td><td class="p-3 font-mono text-emerald-600"><!></td><td class="p-3"> </td><td class="p-3 text-muted-foreground"> </td></tr>`);
var root_32 = from_html(`<div class="bg-card border border-border rounded-2xl overflow-hidden"><div class="p-4 border-b border-border"><h2 class="text-sm font-bold"> </h2></div> <table class="w-full text-xs text-left"><thead class="bg-muted/30 text-muted-foreground font-semibold border-b border-border"><tr><th class="p-3">Passenger</th><th class="p-3">Payable</th><th class="p-3">Cost</th><th class="p-3">Profit</th><th class="p-3">In-house</th><th class="p-3">Supplier</th></tr></thead><tbody class="divide-y divide-border/60"></tbody></table></div>`);
var root_33 = from_html(`<tr class="hover:bg-muted/10"><td class="p-3 font-semibold"> </td><td class="p-3 font-mono text-muted-foreground"> </td><td class="p-3"> </td><td class="p-3 font-mono"><!></td><td class="p-3 font-mono text-emerald-600"><!></td><td class="p-3"><span> </span></td></tr>`);
var root_34 = from_html(`<div class="bg-card border border-border rounded-2xl overflow-hidden"><div class="p-4 border-b border-border"><h2 class="text-sm font-bold"> </h2></div> <table class="w-full text-xs text-left"><thead class="bg-muted/30 text-muted-foreground font-semibold border-b border-border"><tr><th class="p-3">Name</th><th class="p-3">Passport</th><th class="p-3">Nationality</th><th class="p-3">Payable</th><th class="p-3">Profit</th><th class="p-3">Status</th></tr></thead><tbody class="divide-y divide-border/60"></tbody></table></div>`);
var root_35 = from_html(`<div class="bg-card border border-border rounded-2xl p-12 text-center text-muted-foreground text-xs">No line items for this service type.</div>`);
var root_36 = from_html(`<!> Post Supplier Payment`, 1);
var root_37 = from_html(`<!> Record Purchase Return`, 1);
var root_38 = from_html(`<!> Refund Customer (Sales Return)`, 1);
var root_39 = from_html(`<div class="flex items-start gap-2.5 bg-amber-50 border border-amber-200 text-amber-800 rounded-2xl p-4 text-xs"><!> <div><strong class="font-bold">Booking Completed:</strong> This booking is completed on the Sales Portal. No further payouts or refunds can be processed.</div></div>`);
var root_40 = from_html(`<div class="flex items-start gap-2.5 bg-muted/30 border border-border text-muted-foreground rounded-2xl p-4 text-xs"><!> <div>Supplier refund form is disabled because no approved supplier payments exist for this booking.</div></div>`);
var root_41 = from_html(`<div class="flex items-start gap-2.5 bg-muted/30 border border-border text-muted-foreground rounded-2xl p-4 text-xs"><!> <div>Customer refund form is disabled because no approved purchase refunds have been received from the supplier.</div></div>`);
var root_42 = from_html(`<!> <!>`, 1);
var root_43 = from_html(`<div class="flex items-center gap-1.5"><button class="px-2 py-1 text-[11px] font-semibold border border-border rounded-lg bg-card hover:bg-muted cursor-pointer">Edit</button> <button class="px-2 py-1 text-[11px] font-bold bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg cursor-pointer">Approve</button> <button class="px-2 py-1 text-[11px] font-bold bg-red-600 hover:bg-red-700 text-white rounded-lg cursor-pointer">Reject</button></div>`);
var root_44 = from_html(`<span class="text-muted-foreground text-[11px]">—</span>`);
var root_45 = from_html(`<tr class="hover:bg-muted/10 transition-colors"><td class="p-3 font-semibold text-foreground"> </td><td class="p-3 font-mono font-bold text-rose-600"><!></td><td class="p-3 capitalize"> </td><td class="p-3"><span> </span></td><td class="p-3 text-muted-foreground font-mono"> </td><td class="p-3 font-medium text-foreground"> </td><td class="p-3 text-muted-foreground"><!></td><td class="p-3"><!></td></tr>`);
var root_46 = from_html(`<table class="w-full text-xs text-left"><thead class="bg-muted/30 text-muted-foreground font-semibold border-b border-border text-[10px] uppercase tracking-wider"><tr><th class="p-3">Supplier Name & Code</th><th class="p-3">Amount</th><th class="p-3">Method</th><th class="p-3">Status</th><th class="p-3">Reference</th><th class="p-3">Requested By</th><th class="p-3">Date</th><th class="p-3">Actions</th></tr></thead><tbody class="divide-y divide-border/60"></tbody></table>`);
var root_47 = from_html(`<div class="p-8 text-center text-muted-foreground text-xs">No supplier payments recorded.</div>`);
var root_48 = from_html(`<tr class="hover:bg-muted/10 transition-colors"><td class="p-3 font-semibold text-foreground"> </td><td class="p-3 font-mono font-bold text-emerald-600"><!></td><td class="p-3 capitalize"> </td><td class="p-3"><span> </span></td><td class="p-3 text-muted-foreground"> </td><td class="p-3 font-medium text-foreground"> </td><td class="p-3 text-muted-foreground"><!></td></tr>`);
var root_49 = from_html(`<table class="w-full text-xs text-left"><thead class="bg-muted/30 text-muted-foreground font-semibold border-b border-border text-[10px] uppercase tracking-wider"><tr><th class="p-3">Supplier Name & Code</th><th class="p-3">Amount</th><th class="p-3">Destination</th><th class="p-3">Status</th><th class="p-3">Reason</th><th class="p-3">Requested By</th><th class="p-3">Date</th></tr></thead><tbody class="divide-y divide-border/60"></tbody></table>`);
var root_50 = from_html(`<div class="p-8 text-center text-muted-foreground text-xs">No purchase refunds received.</div>`);
var root_51 = from_html(`<tr class="hover:bg-muted/10 transition-colors"><td class="p-3 capitalize"> </td><td class="p-3 font-mono font-bold text-sky-600"><!></td><td class="p-3 text-muted-foreground"> </td><td class="p-3"><span> </span></td><td class="p-3 font-medium text-foreground"> </td><td class="p-3 text-muted-foreground"><!></td></tr>`);
var root_52 = from_html(`<table class="w-full text-xs text-left"><thead class="bg-muted/30 text-muted-foreground font-semibold border-b border-border text-[10px] uppercase tracking-wider"><tr><th class="p-3">Recipient</th><th class="p-3">Amount</th><th class="p-3">Reason</th><th class="p-3">Status</th><th class="p-3">Requested By</th><th class="p-3">Date</th></tr></thead><tbody class="divide-y divide-border/60"></tbody></table>`);
var root_53 = from_html(`<div class="p-8 text-center text-muted-foreground text-xs">No client refunds processed.</div>`);
var root_54 = from_html(`<div class="space-y-6"><div class="grid grid-cols-2 lg:grid-cols-4 gap-4"><div class="bg-card border border-border rounded-2xl p-4 space-y-1 shadow-xs"><p class="text-[10px] text-muted-foreground uppercase font-semibold tracking-wider">Expected Cost</p> <p class="text-base font-bold font-mono text-foreground"><!></p></div> <div class="bg-card border border-border rounded-2xl p-4 space-y-1 shadow-xs border-l-4 border-l-rose-500"><p class="text-[10px] text-muted-foreground uppercase font-semibold tracking-wider">Total Settled (Paid)</p> <p class="text-base font-bold font-mono text-rose-600"><!></p></div> <div class="bg-card border border-border rounded-2xl p-4 space-y-1 shadow-xs border-l-4 border-l-emerald-500"><p class="text-[10px] text-muted-foreground uppercase font-semibold tracking-wider">Purchase Returns (Refunds)</p> <p class="text-base font-bold font-mono text-emerald-600"><!></p></div> <div class="bg-card border border-border rounded-2xl p-4 space-y-1 shadow-xs border-l-4 border-l-sky-500"><p class="text-[10px] text-muted-foreground uppercase font-semibold tracking-wider">Sales Returns (Cust Refunds)</p> <p class="text-base font-bold font-mono text-sky-600"><!></p></div></div> <div class="flex flex-wrap gap-2.5 bg-muted/20 p-3 rounded-2xl border border-border/50"><!> <!> <!></div> <!> <div class="bg-card border border-border rounded-2xl overflow-hidden shadow-xs"><div class="p-4 border-b border-border bg-muted/20"><h2 class="text-xs font-bold text-foreground"> </h2></div> <!></div> <div class="bg-card border border-border rounded-2xl overflow-hidden shadow-xs"><div class="p-4 border-b border-border bg-muted/20"><h2 class="text-xs font-bold text-foreground"> </h2></div> <!></div> <div class="bg-card border border-border rounded-2xl overflow-hidden shadow-xs"><div class="p-4 border-b border-border bg-muted/20"><h2 class="text-xs font-bold text-foreground"> </h2></div> <!></div></div>`);
var root_55 = from_html(`<li class="ml-5"><span class="absolute -left-1.5 mt-0.5 h-3 w-3 rounded-full border-2 border-sky-400 bg-card"></span> <div class="text-xs"><p class="font-semibold text-foreground"> </p> <p class="text-muted-foreground"> <!></p></div></li>`);
var root_56 = from_html(`<li class="ml-5"><span class="absolute -left-1.5 mt-0.5 h-3 w-3 rounded-full border-2 border-amber-400 bg-card"></span> <div class="text-xs"><p class="font-semibold text-foreground">Supplier Payment — <!></p> <p class="text-muted-foreground"> <!></p></div></li>`);
var root_57 = from_html(`<li class="ml-5"><span class="absolute -left-1.5 mt-0.5 h-3 w-3 rounded-full border-2 border-emerald-400 bg-card"></span> <div class="text-xs"><p class="font-semibold text-foreground">Purchase Return — <!></p> <p class="text-muted-foreground"> <!></p></div></li>`);
var root_58 = from_html(`<li class="ml-5"><span class="absolute -left-1.5 mt-0.5 h-3 w-3 rounded-full border-2 border-sky-400 bg-card"></span> <div class="text-xs"><p class="font-semibold text-foreground">Sales Return — <!></p> <p class="text-muted-foreground"> <!></p></div></li>`);
var root_59 = from_html(`<div class="bg-card border border-border rounded-2xl p-5 space-y-3"><h2 class="text-sm font-bold flex items-center gap-2"><!> Booking Timeline</h2> <ol class="relative border-l border-border/60 ml-3 space-y-6"><li class="ml-5"><span class="absolute -left-1.5 mt-0.5 h-3 w-3 rounded-full border-2 border-primary bg-card"></span> <div class="text-xs"><p class="font-semibold text-foreground">Booking Created</p> <p class="text-muted-foreground"><!></p></div></li> <!> <!> <!> <!> <li class="ml-5"><span class="absolute -left-1.5 mt-0.5 h-3 w-3 rounded-full border-2 border-emerald-400 bg-card"></span> <div class="text-xs"><p class="font-semibold text-foreground">Last Updated</p> <p class="text-muted-foreground"><!></p></div></li></ol></div>`);
var root_60 = from_html(`<div class="bg-card border border-border rounded-2xl p-4 flex flex-wrap gap-3 items-center"><span> </span> <span class="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide bg-sky-50 text-sky-700 border border-sky-200"> </span> <span class="ml-auto text-xs text-muted-foreground">Created: <!> &nbsp;•&nbsp;
				Updated: <!></span></div> <!> <div class="border-b border-border flex gap-1 overflow-x-auto print:hidden"></div> <!>`, 1);
var root_61 = from_html(`<div class="bg-card border border-border rounded-2xl p-16 text-center text-muted-foreground text-xs">Booking not found.</div>`);
var root_62 = from_html(`<div class="col-span-2 grid grid-cols-2 gap-3 p-3 bg-muted/30 border border-border/80 rounded-xl text-xs"><div class="space-y-0.5"><span class="text-[10px] text-muted-foreground uppercase font-semibold block">Supplier Wallet Balance</span> <span class="text-sm font-bold font-mono text-emerald-600"><!></span></div> <div class="space-y-0.5"><span class="text-[10px] text-muted-foreground uppercase font-semibold block">Credit Wallet (Outstanding)</span> <span class="text-sm font-bold font-mono text-rose-600"><!></span></div></div>`);
var root_63 = from_html(`<div class="space-y-1.5 col-span-2"><label for="pay-source" class="block font-semibold text-foreground"> <span class="text-red-500">*</span></label> <select id="pay-source" class="h-9.5 w-full bg-background border border-border rounded-xl px-2.5 focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground" required=""><option> </option><!></select></div>`);
var root_64 = from_html(`<div class="col-span-2 p-2.5 bg-red-500/10 border border-red-500/30 rounded-xl text-red-600 font-semibold text-[11px] flex items-center gap-1.5"><!> <span> </span></div>`);
var root_65 = from_html(`<!> Post Payment`, 1);
var root_66 = from_html(`<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4"><div class="bg-card border border-border rounded-2xl max-w-lg w-full p-6 shadow-xl space-y-4"><div class="flex items-center justify-between pb-3 border-b border-border/50"><h3 class="text-sm font-bold text-foreground flex items-center gap-1.5"><!> Post Supplier Payment</h3> <button class="p-1 hover:bg-muted rounded-lg text-muted-foreground hover:text-foreground cursor-pointer"><!></button></div> <form class="space-y-4 text-xs"><div class="grid grid-cols-2 gap-4"><div class="space-y-1.5 col-span-2"><label for="pay-supplier" class="block font-semibold text-foreground">Select Supplier <span class="text-red-500">*</span></label> <select id="pay-supplier" class="h-9.5 w-full bg-background border border-border rounded-xl px-2.5 focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground" required=""><option>-- Select Supplier --</option><!></select></div> <!> <div class="space-y-1.5"><label for="pay-amount" class="block font-semibold text-foreground">Payment Amount <span class="text-red-500">*</span></label> <!></div> <div class="space-y-1.5"><label for="pay-method" class="block font-semibold text-foreground">Payment Method <span class="text-red-500">*</span></label> <select id="pay-method" class="h-9.5 w-full bg-background border border-border rounded-xl px-2.5 focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground" required=""><option>Bank Account</option><option>Cash Account</option><option>Supplier Wallet (paid using pre-funded supplier wallet)</option><option>Credit (added to credit wallet of the supplier)</option></select></div> <!> <!> <div class="space-y-1.5 col-span-2"><label for="pay-ref" class="block font-semibold text-foreground">Reference / Cheque Number</label> <!></div> <div class="space-y-1.5 col-span-2"><label for="pay-desc" class="block font-semibold text-foreground">Description / Notes</label> <!></div></div> <div class="flex justify-end gap-2.5 pt-4 border-t border-border/50"><!> <!></div></form></div></div>`);
var root_67 = from_html(`<div class="space-y-1.5 col-span-2"><label for="pr-dest" class="block font-semibold text-foreground">Target Cash/Bank Account <span class="text-red-500">*</span></label> <select id="pr-dest" class="h-9.5 w-full bg-background border border-border rounded-xl px-2.5 focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground" required=""><option>-- Select Destination Account --</option><!></select></div>`);
var root_68 = from_html(`<!> Post Purchase Return`, 1);
var root_69 = from_html(`<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4"><div class="bg-card border border-border rounded-2xl max-w-lg w-full p-6 shadow-xl space-y-4"><div class="flex items-center justify-between pb-3 border-b border-border/50"><h3 class="text-sm font-bold text-foreground flex items-center gap-1.5 text-emerald-600"><!> Record Purchase Return (Supplier Refund)</h3> <button class="p-1 hover:bg-muted rounded-lg text-muted-foreground hover:text-foreground cursor-pointer"><!></button></div> <form class="space-y-4 text-xs"><div class="grid grid-cols-2 gap-4"><div class="space-y-1.5 col-span-2"><label for="pr-supplier" class="block font-semibold text-foreground">Select Supplier <span class="text-red-500">*</span></label> <select id="pr-supplier" class="h-9.5 w-full bg-background border border-border rounded-xl px-2.5 focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground" required=""><option>-- Select Supplier --</option><!></select></div> <div class="space-y-1.5"><label for="pr-amount" class="block font-semibold text-foreground">Refund Amount <span class="text-red-500">*</span> (Max: <!>)</label> <!></div> <div class="space-y-1.5"><label for="pr-dest-type" class="block font-semibold text-foreground">Refund Destination <span class="text-red-500">*</span></label> <select id="pr-dest-type" class="h-9.5 w-full bg-background border border-border rounded-xl px-2.5 focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground" required=""><option>Bank Account</option><option>Cash Account</option><option>Supplier Credit Balance (Virtual Wallet)</option></select></div> <!> <div class="space-y-1.5 col-span-2"><label for="pr-reason" class="block font-semibold text-foreground">Reason / Comments <span class="text-red-500">*</span></label> <!></div></div> <div class="flex justify-end gap-2.5 pt-4 border-t border-border/50"><!> <!></div></form></div></div>`);
var root_70 = from_html(`<option>Loading customers...</option>`);
var root_71 = from_html(`<!> Post Sales Return`, 1);
var root_72 = from_html(`<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4"><div class="bg-card border border-border rounded-2xl max-w-lg w-full p-6 shadow-xl space-y-4"><div class="flex items-center justify-between pb-3 border-b border-border/50"><h3 class="text-sm font-bold text-foreground flex items-center gap-1.5 text-sky-600"><!> Post Sales Return (Customer Refund)</h3> <button class="p-1 hover:bg-muted rounded-lg text-muted-foreground hover:text-foreground cursor-pointer"><!></button></div> <form class="space-y-4 text-xs"><div class="grid grid-cols-2 gap-4"><div class="space-y-1.5"><label for="sr-recipient-type" class="block font-semibold text-foreground">Refund Recipient Type <span class="text-red-500">*</span></label> <select id="sr-recipient-type" class="h-9.5 w-full bg-background border border-border rounded-xl px-2.5 focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground" required=""><option>Agent Wallet</option><option>Corporate Client Head Wallet</option></select></div> <div class="space-y-1.5"><label for="sr-recipient-id" class="block font-semibold text-foreground">Customer Recipient <span class="text-red-500">*</span></label> <select id="sr-recipient-id" class="h-9.5 w-full bg-background border border-border rounded-xl px-2.5 focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground font-semibold" required=""><!></select></div> <div class="space-y-1.5"><label for="sr-amount" class="block font-semibold text-foreground">Refund Amount <span class="text-red-500">*</span> (Max Selling Price: <!>)</label> <!></div> <div class="space-y-1.5"><label for="sr-source-type" class="block font-semibold text-foreground">Source Balance Type <span class="text-red-500">*</span></label> <select id="sr-source-type" class="h-9.5 w-full bg-background border border-border rounded-xl px-2.5 focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground" required=""><option>Bank Account</option><option>Cash Account</option></select></div> <div class="space-y-1.5 col-span-2"><label for="sr-source" class="block font-semibold text-foreground">Source Cash/Bank Account <span class="text-red-500">*</span></label> <select id="sr-source" class="h-9.5 w-full bg-background border border-border rounded-xl px-2.5 focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground" required=""><option>-- Select Source Account --</option><!></select></div> <div class="space-y-1.5 col-span-2"><label for="sr-reason" class="block font-semibold text-foreground">Refund Reason <span class="text-red-500">*</span></label> <!></div></div> <div class="flex justify-end gap-2.5 pt-4 border-t border-border/50"><!> <!></div></form></div></div>`);
var root_73 = from_html(`<p class="text-[11px] font-semibold text-red-600 flex items-center gap-1 mt-1.5 animate-in fade-in duration-150"><!> <span> </span></p>`);
var root_74 = from_html(`<!> Confirm & Approve Payment`, 1);
var root_75 = from_html(`<div class="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-in fade-in duration-200"><div class="bg-card border border-border rounded-2xl p-6 max-w-md w-full shadow-2xl space-y-4"><div class="flex items-center justify-between border-b border-border/40 pb-3"><div class="flex items-center gap-2"><!> <h3 class="text-base font-bold text-foreground">Enter Bank Reference ID</h3></div> <button class="p-1 text-muted-foreground hover:text-foreground rounded-lg transition-colors cursor-pointer"><!></button></div> <p class="text-xs text-muted-foreground leading-relaxed">Please enter the unique Bank / Online Transaction Reference ID for this payment application. Duplicate reference IDs are strictly prohibited and cannot be reused.</p> <form class="space-y-4"><div class="space-y-1.5"><label for="refIdInput" class="text-xs font-semibold text-foreground">Transaction Reference ID *</label> <!> <!></div> <div class="flex items-center justify-end gap-2 pt-3 border-t border-border/40"><!> <!></div></form></div></div>`);
var root_76 = from_html(`<!> Save Fee Changes`, 1);
var root_77 = from_html(`<div class="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-in fade-in duration-200"><div class="bg-card border border-border rounded-2xl max-w-md w-full p-6 space-y-4 shadow-2xl"><div class="flex items-center justify-between border-b border-border/40 pb-3"><div class="flex items-center gap-2"><!> <h3 class="text-base font-bold text-foreground">Edit Government Fee / Supplier Payment</h3></div> <button class="p-1 text-muted-foreground hover:text-foreground rounded-lg transition-colors cursor-pointer"><!></button></div> <form class="space-y-4 text-xs"><div class="space-y-1.5"><label for="editGovtAmt" class="font-semibold text-foreground">Government Fee Amount (BHD) *</label> <!></div> <div class="space-y-1.5"><label for="editGovtSupplier" class="font-semibold text-foreground">Supplier *</label> <select id="editGovtSupplier" class="h-9.5 w-full bg-background border border-border rounded-xl px-2.5 text-xs font-medium"></select></div> <div class="space-y-1.5"><label for="editGovtRef" class="font-semibold text-foreground">Reference / Txn Number</label> <!></div> <div class="space-y-1.5"><label for="editGovtDesc" class="font-semibold text-foreground">Description / Narration</label> <!></div> <div class="flex items-center justify-end gap-2 pt-3 border-t border-border/40"><!> <!></div></form></div></div>`);
var root_78 = from_html(`<div class="space-y-6 print:space-y-2"><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 print:hidden"><div class="flex items-center gap-3"><!> <div><h1 class="text-xl font-bold text-foreground capitalize"> <span class="font-mono text-primary"> </span></h1> <!></div></div> <div class="flex gap-2"><!> <!></div></div> <!></div>  <!> <!> <!> <!> <!> <!>`, 1);
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
	const allAccountsAndBanks = user_derived(() => [...get(cashAccounts).map((a) => ({
		id: `account_${a.id}`,
		name: `[Cash] ${a.name} (Bal: ${a.currentBalance.toFixed(3)} BHD)`
	})), ...get(banks).map((b) => ({
		id: `bank_${b.id}`,
		name: `[Bank] ${b.bankName} (Bal: ${b.currentBalance.toFixed(3)} BHD)`
	}))]);
	const recipientOptions = user_derived(() => {
		if (get(srRecipientType) === "Agent") {
			const list = get(agentsList).map((a) => ({
				id: a.id,
				name: `${a.firstName || a.fullName || a.name ? `${a.firstName || ""} ${a.lastName || ""}`.trim() : "Agent"} (ID: ${a.id})`
			}));
			if (get(sd)?.agentId && !list.some((i) => i.id === get(sd).agentId)) list.unshift({
				id: get(sd).agentId,
				name: `${get(sd).agent || "Agent"} (ID: ${get(sd).agentId})`
			});
			return list;
		} else {
			const list = get(headsList).map((h) => ({
				id: h.id,
				name: `${h.fullName || (h.firstName ? `${h.firstName} ${h.lastName || ""}`.trim() : h.name || "Head")} (ID: ${h.id})`
			}));
			if (get(sd)?.headId && !list.some((i) => i.id === get(sd).headId)) list.unshift({
				id: get(sd).headId,
				name: `${get(sd).headName || "Customer Head"} (ID: ${get(sd).headId})`
			});
			return list;
		}
	});
	function getCategoryForService(type) {
		return {
			flights: ["Flight Bookings", "Flights"],
			hotels: ["Hotel Booking", "Hotels"],
			visa: ["Visa Application", "Visa Services"],
			vfs: ["VFS Appointments", "VFS Appointment"],
			holiday: ["Holiday Packages"],
			"holiday-packages": ["Holiday Packages"],
			transportation: ["Transportation"],
			"other-services": ["Other Services"]
		}[type.toLowerCase()] ?? [];
	}
	const filteredSuppliersList = user_derived(() => {
		const targetCategories = getCategoryForService(get(serviceType));
		if (!targetCategories.length) return get(suppliersList);
		const matched = get(suppliersList).filter((s) => s.categories && Array.isArray(s.categories) && s.categories.some((cat) => targetCategories.some((tc) => tc.toLowerCase() === cat.toLowerCase())));
		return matched.length > 0 ? matched : get(suppliersList);
	});
	const filteredSourceAccounts = user_derived(() => {
		if (get(payMethod) === "cash") return get(cashAccounts).map((a) => ({
			id: `account_${a.id}`,
			name: `[Cash] ${a.name} (Bal: ${a.currentBalance.toFixed(3)} BHD)`
		}));
		if (get(payMethod) === "bank_transfer" || get(payMethod) === "bank") return get(banks).map((b) => ({
			id: `bank_${b.id}`,
			name: `[Bank] ${b.bankName} (Bal: ${b.currentBalance.toFixed(3)} BHD)`
		}));
		return [];
	});
	const selectedPaySupplier = user_derived(() => get(suppliersList).find((s) => s.id === get(paySupplierId)) || null);
	user_effect(() => {
		if (get(payMethod) !== "credit" && get(payMethod) !== "supplier_wallet" && get(filteredSourceAccounts).length > 0) {
			if (!get(filteredSourceAccounts).some((a) => a.id === get(paySourceId))) set(paySourceId, get(filteredSourceAccounts)[0]?.id || "", true);
		}
	});
	let showPaymentModal = state(false);
	let showPurchaseReturnModal = state(false);
	let showSalesReturnModal = state(false);
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
		if (get(editGovtFeeAmount) <= 0) return;
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
		set(approvingPendingPayment, sp, true);
		set(paySupplierId, sp.supplierId || get(sd)?.supplierId || get(filteredSuppliersList)[0]?.id || 0, true);
		set(payAmount, sp.amount ?? 0, true);
		const rawMethod = (sp.paymentMethod || "bank_transfer").toLowerCase().trim();
		if (rawMethod === "cash") set(payMethod, "cash");
		else if (rawMethod === "supplier_wallet" || rawMethod === "wallet") set(payMethod, "supplier_wallet");
		else if (rawMethod === "credit") set(payMethod, "credit");
		else set(payMethod, "bank_transfer");
		if (sp.sourceBankId) set(paySourceId, `bank_${sp.sourceBankId}`);
		else if (sp.sourceAccountId) set(paySourceId, `account_${sp.sourceAccountId}`);
		else set(paySourceId, get(filteredSourceAccounts)[0]?.id || "", true);
		set(payRefNum, sp.referenceNumber || sp.externalReference || "", true);
		set(payDesc, sp.description || `Supplier Payment for ${serviceLabel(get(serviceType))} #${get(bookingId)}`, true);
		set(showPaymentModal, true);
	}
	async function handleRejectSupplierPayment(sp) {
		const reason = prompt("Please enter rejection reason:");
		if (reason === null) return;
		set(actionLoading, true);
		try {
			await rejectSupplierPayment(sp.id, reason || "Rejected by accountant");
			toast.success("Supplier payment / government fee rejected.");
			await fetchDetail();
		} catch (err) {
			toast.error(err.message || "Failed to reject payment.");
		} finally {
			set(actionLoading, false);
		}
	}
	let paySupplierId = state(0);
	let payAmount = state(0);
	let payMethod = state("bank_transfer");
	let paySourceId = state("");
	let payRefNum = state("");
	let payDesc = state("");
	let prSupplierId = state(0);
	let prAmount = state(0);
	let prReason = state("");
	let prDestType = state("bank");
	let prDestId = state("");
	let srRecipientType = state("Agent");
	let srRecipientId = state(0);
	let srAmount = state(0);
	let srReason = state("");
	let srSourceType = state("bank");
	let srSourceId = state("");
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
	async function loadSystemUsers() {
		try {
			set(systemUsers, await fetchAccountsStaff(), true);
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
			set(statusConfirmMessage, `Are you sure you want to approve payment for ${serviceLabel(get(serviceType))} ${docRef}? This will mark the booking as Paid and register the journal entries.`);
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
		if (!get(paySupplierId) || get(payAmount) <= 0) return;
		set(actionLoading, true);
		try {
			const isMaster = hasRole("master_accountant");
			const cleanSource = get(payMethod) === "credit" || get(payMethod) === "supplier_wallet" ? null : get(paySourceId);
			if (get(approvingPendingPayment)) {
				await updateSupplierPayment(get(approvingPendingPayment).id, {
					amount: get(payAmount),
					referenceNumber: get(payRefNum) || null,
					description: get(payDesc) || null,
					supplierId: get(paySupplierId)
				});
				await approveSupplierPayment(get(approvingPendingPayment).id, void 0);
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
				});
				toast.success(isMaster ? "Supplier Payment recorded and auto-approved." : "Supplier Payment draft submitted for approval.");
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
	async function submitPurchaseReturnForm(e) {
		e.preventDefault();
		if (!get(prSupplierId) || get(prAmount) <= 0) return;
		set(actionLoading, true);
		try {
			const isMaster = hasRole("master_accountant");
			await createPurchaseReturn({
				supplierId: get(prSupplierId),
				originalPurchaseReference: get(bookingId) ?? "",
				amount: get(prAmount),
				reason: get(prReason),
				destinationType: get(prDestType),
				destinationId: get(prDestType) === "supplier_wallet" ? "" : get(prDestId),
				serviceType: get(serviceType),
				supplierName: get(suppliersList).find((s) => s.id === get(prSupplierId))?.name ?? "Supplier"
			});
			toast.success(isMaster ? "Purchase Return recorded and auto-approved." : "Purchase Return draft submitted for approval.");
			set(showPurchaseReturnModal, false);
			await fetchDetail();
		} catch (err) {
			toast.error(err.message || "Failed to submit return.");
		} finally {
			set(actionLoading, false);
		}
	}
	async function submitSalesReturnForm(e) {
		e.preventDefault();
		if (get(srAmount) <= 0) return;
		set(actionLoading, true);
		try {
			const isMaster = hasRole("master_accountant");
			await createSalesReturn({
				recipientType: get(srRecipientType),
				recipientId: get(srRecipientId),
				serviceId: get(bookingId) ?? "",
				amount: get(srAmount),
				returnReason: get(srReason),
				sourceType: get(srSourceType),
				sourceId: get(srSourceId),
				serviceType: get(serviceType)
			});
			toast.success(isMaster ? "Sales Return recorded and auto-approved." : "Sales Return draft submitted for approval.");
			set(showSalesReturnModal, false);
			await fetchDetail();
		} catch (err) {
			toast.error(err.message || "Failed to submit sales return.");
		} finally {
			set(actionLoading, false);
		}
	}
	function openPaymentForm() {
		set(approvingPendingPayment, null);
		const matchedSupplier = get(filteredSuppliersList).find((s) => s.id === get(sd)?.supplierId);
		set(paySupplierId, matchedSupplier ? get(sd)?.supplierId : get(filteredSuppliersList)[0]?.id || 0, true);
		set(payAmount, Math.max(0, (get(sd)?.expectedSupplierCost ?? 0) - get(totalPaid)), true);
		set(payMethod, "bank_transfer");
		set(paySourceId, get(filteredSourceAccounts)[0]?.id || "", true);
		set(payRefNum, "");
		set(payDesc, `Supplier Payment for ${serviceLabel(get(serviceType))} #${get(bookingId)}`);
		set(showPaymentModal, true);
	}
	function openPurchaseReturnForm() {
		set(prSupplierId, get(sd)?.supplierId ?? (get(suppliersList)[0]?.id || 0), true);
		set(prAmount, Math.max(0, get(totalPaid) - get(totalPurchaseReturns)), true);
		set(prReason, `Refund received from supplier for ${serviceLabel(get(serviceType))} #${get(bookingId)}`);
		set(prDestType, "bank");
		set(prDestId, get(allAccountsAndBanks)[0]?.id || "", true);
		set(showPurchaseReturnModal, true);
	}
	function openSalesReturnForm() {
		set(srRecipientType, get(isAgent) ? "Agent" : "Head", true);
		const targetId = get(isAgent) ? get(sd)?.agentId ?? 0 : get(sd)?.headId ?? 0;
		set(srRecipientId, targetId || (get(recipientOptions)[0]?.id ?? 0), true);
		set(srAmount, Math.max(0, (get(sd)?.payableAmount ?? 0) - get(totalSalesReturns)), true);
		set(srReason, `Customer refund for ${serviceLabel(get(serviceType))} #${get(bookingId)}`);
		set(srSourceType, "bank");
		set(srSourceId, get(allAccountsAndBanks)[0]?.id || "", true);
		set(showSalesReturnModal, true);
	}
	user_effect(() => {
		if (get(bookingId)) fetchDetail();
	});
	function getUserLabel(userId, item) {
		if (item) {
			const directName = item.requestedByName || item.submittedByName || item.createdByName || item.userName || (typeof item.requestedBy === "string" ? item.requestedBy : null);
			if (directName && typeof directName === "string" && !directName.startsWith("Staff #")) return directName;
		}
		if (!userId) return "System";
		const numId = Number(userId);
		if ($currentUser()?.id && Number($currentUser().id) === numId) return $currentUser().name || $currentUser().email || `Staff #${userId}`;
		const u = get(systemUsers).find((user) => Number(user.id) === numId);
		if (u && (u.name || u.displayName)) return u.name || u.displayName;
		if ($currentUser()?.name && numId === 2) return $currentUser().name;
		return `Staff #${userId}`;
	}
	function statusClass(status) {
		const s = (status ?? "").toLowerCase();
		if (s === "paid" || s === "success" || s === "approved" || s === "completed") return "bg-emerald-50 text-emerald-700 border border-emerald-200";
		if (s.includes("pending") || s === "processing" || s === "in progress" || s === "draft") return "bg-amber-50 text-amber-700 border border-amber-200";
		return "bg-red-50 text-red-700 border border-red-200";
	}
	const sd = user_derived(() => get(detail)?.salesDetail ?? null);
	const isAgent = user_derived(() => get(sd)?.clientType?.toLowerCase() === "agent");
	const isCashBooking = user_derived(() => get(sd)?.paymentMethod?.toLowerCase() === "cash" || get(sd)?.paymentMode?.toLowerCase() === "cash" || get(serviceType) === "visa" && get(sd)?.applicants?.[0]?.paymentMethod?.toLowerCase() === "cash");
	const displayPaymentMethod = user_derived(() => get(sd)?.paymentMethod || get(serviceType) === "visa" && get(sd)?.applicants?.[0]?.paymentMethod || get(sd)?.paymentMode || "");
	const totalPaid = user_derived(() => get(detail)?.supplierPayments?.filter((p) => p.status.toLowerCase() === "approved")?.reduce((sum, p) => sum + p.amount, 0) ?? 0);
	const pendingSupplierPayments = user_derived(() => get(detail)?.supplierPayments?.filter((p) => p.status?.toLowerCase().includes("pending") || p.status?.toLowerCase() === "draft") ?? []);
	const totalPurchaseReturns = user_derived(() => get(detail)?.purchaseReturns?.filter((r) => r.status.toLowerCase() === "approved")?.reduce((sum, r) => sum + r.amount, 0) ?? 0);
	const totalSalesReturns = user_derived(() => get(detail)?.salesReturns?.filter((r) => r.status.toLowerCase() === "approved")?.reduce((sum, r) => sum + r.amount, 0) ?? 0);
	const canPay = user_derived(() => get(sd)?.processingStatus?.toLowerCase() !== "completed");
	const canPurchaseReturn = user_derived(() => get(totalPaid) > 0 && get(sd)?.processingStatus?.toLowerCase() !== "completed");
	const canSalesReturn = user_derived(() => get(totalPurchaseReturns) > 0 && get(sd)?.processingStatus?.toLowerCase() !== "completed");
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
	var fragment = root_78();
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
	Button(node_3, {
		variant: "outline",
		class: "h-8.5 rounded-xl cursor-pointer flex items-center gap-1.5 text-xs",
		onclick: fetchDetail,
		children: ($$anchor, $$slotProps) => {
			var fragment_2 = root_2();
			Refresh_cw(first_child(fragment_2), { class: "h-3.5 w-3.5" });
			next();
			append($$anchor, fragment_2);
		},
		$$slots: { default: true }
	});
	Button(sibling(node_3, 2), {
		variant: "default",
		class: "h-8.5 rounded-xl cursor-pointer flex items-center gap-1.5 text-xs bg-primary text-primary-foreground",
		onclick: () => previewDocument("invoice", getInvoiceEntityType(get(serviceType)), get(bookingId)),
		children: ($$anchor, $$slotProps) => {
			var fragment_3 = root_3();
			Printer(first_child(fragment_3), { class: "h-3.5 w-3.5" });
			next();
			append($$anchor, fragment_3);
		},
		$$slots: { default: true }
	});
	reset(div_4);
	reset(div_1);
	var node_7 = sibling(div_1, 2);
	var consequent_1 = ($$anchor) => {
		var div_5 = root_4();
		Refresh_cw(child(div_5), { class: "h-8 w-8 text-primary animate-spin" });
		reset(div_5);
		append($$anchor, div_5);
	};
	var consequent_2 = ($$anchor) => {
		var div_6 = root_5();
		var text_5 = child(div_6, true);
		reset(div_6);
		template_effect(() => set_text(text_5, get(error)));
		append($$anchor, div_6);
	};
	var consequent_41 = ($$anchor) => {
		var fragment_4 = root_60();
		var div_7 = first_child(fragment_4);
		var span_2 = child(div_7);
		var text_6 = child(span_2, true);
		reset(span_2);
		var span_3 = sibling(span_2, 2);
		var text_7 = child(span_3, true);
		reset(span_3);
		var span_4 = sibling(span_3, 2);
		var node_9 = sibling(child(span_4));
		DateDisplay(node_9, { get value() {
			return get(sd).createdAt;
		} });
		DateDisplay(sibling(node_9, 2), { get value() {
			return get(sd).updatedAt;
		} });
		reset(span_4);
		reset(div_7);
		var node_11 = sibling(div_7, 2);
		var consequent_3 = ($$anchor) => {
			var div_8 = root_7();
			var div_9 = child(div_8);
			var div_10 = child(div_9);
			Circle_alert(child(div_10), { class: "h-5 w-5 text-amber-600 animate-pulse" });
			next(2);
			reset(div_10);
			var span_5 = sibling(div_10, 2);
			var text_8 = child(span_5);
			reset(span_5);
			reset(div_9);
			var div_11 = sibling(div_9, 4);
			each(div_11, 21, () => get(pendingSupplierPayments), index, ($$anchor, sp) => {
				var div_12 = root_6();
				var div_13 = child(div_12);
				var div_14 = child(div_13);
				var span_6 = child(div_14);
				MoneyDisplay(child(span_6), { get amount() {
					return get(sp).amount;
				} });
				reset(span_6);
				var span_7 = sibling(span_6, 2);
				var text_9 = child(span_7, true);
				reset(span_7);
				var span_8 = sibling(span_7, 2);
				var text_10 = child(span_8);
				reset(span_8);
				reset(div_14);
				var p_2 = sibling(div_14, 2);
				var text_11 = child(p_2, true);
				reset(p_2);
				var p_3 = sibling(p_2, 2);
				var text_12 = child(p_3);
				DateDisplay(sibling(text_12), { get value() {
					return get(sp).requestedAt;
				} });
				reset(p_3);
				reset(div_13);
				var div_15 = sibling(div_13, 2);
				var button = child(div_15);
				Pencil(child(button), { class: "h-3.5 w-3.5" });
				next();
				reset(button);
				var button_1 = sibling(button, 2);
				Check(child(button_1), { class: "h-3.5 w-3.5" });
				next();
				reset(button_1);
				var button_2 = sibling(button_1, 2);
				X(child(button_2), { class: "h-3.5 w-3.5" });
				next();
				reset(button_2);
				reset(div_15);
				reset(div_12);
				template_effect(($0) => {
					set_text(text_9, get(sp).serviceType || "Govt Fee");
					set_text(text_10, `Ref: ${(get(sp).referenceNumber || "N/A") ?? ""}`);
					set_text(text_11, get(sp).description || "Government Payment Log");
					set_text(text_12, `Supplier: ${$0 ?? ""} • Requested: `);
					button.disabled = get(actionLoading);
					button_1.disabled = get(actionLoading);
					button_2.disabled = get(actionLoading);
				}, [() => getSupplierLabel(get(sp).supplierId)]);
				delegated("click", button, () => openEditGovtFeeModal(get(sp)));
				delegated("click", button_1, () => handleApproveSupplierPayment(get(sp)));
				delegated("click", button_2, () => handleRejectSupplierPayment(get(sp)));
				append($$anchor, div_12);
			});
			reset(div_11);
			reset(div_8);
			template_effect(() => set_text(text_8, `${get(pendingSupplierPayments).length ?? ""} Pending Approval`));
			append($$anchor, div_8);
		};
		if_block(node_11, ($$render) => {
			if (get(pendingSupplierPayments).length > 0) $$render(consequent_3);
		});
		var div_16 = sibling(node_11, 2);
		each(div_16, 21, () => tabs, index, ($$anchor, tab) => {
			var fragment_5 = comment();
			var node_18 = first_child(fragment_5);
			var consequent_4 = ($$anchor) => {
				const IconComp = user_derived(() => get(tab).icon);
				var button_3 = root_8();
				var node_19 = child(button_3);
				component(node_19, () => get(IconComp), ($$anchor, IconComp_1) => {
					IconComp_1($$anchor, { class: "h-3.5 w-3.5" });
				});
				var text_13 = sibling(node_19);
				reset(button_3);
				template_effect(() => {
					set_class(button_3, 1, `flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold border-b-2 transition-colors whitespace-nowrap cursor-pointer
							${get(activeTab) === get(tab).id ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"}`);
					set_text(text_13, ` ${get(tab).label ?? ""}`);
				});
				delegated("click", button_3, () => set(activeTab, get(tab).id, true));
				append($$anchor, button_3);
			};
			if_block(node_18, ($$render) => {
				if (get(tab).id !== "items" || get(serviceType) === "flights" || get(serviceType) === "visa") $$render(consequent_4);
			});
			append($$anchor, fragment_5);
		});
		reset(div_16);
		var node_20 = sibling(div_16, 2);
		var consequent_19 = ($$anchor) => {
			var div_17 = root_21();
			var div_18 = child(div_17);
			var h2 = child(div_18);
			User(child(h2), { class: "h-4 w-4 text-primary" });
			next();
			reset(h2);
			var div_19 = sibling(h2, 2);
			var div_20 = child(div_19);
			var span_9 = sibling(child(div_20), 2);
			var text_14 = child(span_9, true);
			reset(span_9);
			reset(div_20);
			var div_21 = sibling(div_20, 2);
			var span_10 = sibling(child(div_21), 2);
			var text_15 = child(span_10, true);
			reset(span_10);
			reset(div_21);
			var node_22 = sibling(div_21, 2);
			var consequent_5 = ($$anchor) => {
				var fragment_6 = root_9();
				var div_22 = first_child(fragment_6);
				var span_11 = sibling(child(div_22), 2);
				var text_16 = child(span_11, true);
				reset(span_11);
				reset(div_22);
				var div_23 = sibling(div_22, 2);
				var span_12 = sibling(child(div_23), 2);
				var text_17 = child(span_12);
				reset(span_12);
				reset(div_23);
				template_effect(() => {
					set_text(text_16, get(sd).agent ?? "—");
					set_text(text_17, `#${get(sd).agentId ?? "—" ?? ""}`);
				});
				append($$anchor, fragment_6);
			};
			if_block(node_22, ($$render) => {
				if (get(isAgent)) $$render(consequent_5);
			});
			var node_23 = sibling(node_22, 2);
			var consequent_6 = ($$anchor) => {
				var div_24 = root_10();
				var span_13 = sibling(child(div_24), 2);
				var text_18 = child(span_13, true);
				reset(span_13);
				reset(div_24);
				template_effect(() => set_text(text_18, get(sd).careOf));
				append($$anchor, div_24);
			};
			if_block(node_23, ($$render) => {
				if (get(sd).careOf) $$render(consequent_6);
			});
			reset(div_19);
			reset(div_18);
			var div_25 = sibling(div_18, 2);
			var h2_1 = child(div_25);
			Package(child(h2_1), { class: "h-4 w-4 text-primary" });
			next();
			reset(h2_1);
			var div_26 = sibling(h2_1, 2);
			var node_25 = child(div_26);
			var consequent_8 = ($$anchor) => {
				var fragment_7 = root_12();
				var div_27 = first_child(fragment_7);
				var span_14 = sibling(child(div_27), 2);
				var text_19 = child(span_14);
				reset(span_14);
				reset(div_27);
				var div_28 = sibling(div_27, 2);
				var span_15 = sibling(child(div_28), 2);
				var text_20 = child(span_15, true);
				reset(span_15);
				reset(div_28);
				var node_26 = sibling(div_28, 2);
				var consequent_7 = ($$anchor) => {
					var div_29 = root_11();
					var span_16 = sibling(child(div_29));
					var text_21 = child(span_16, true);
					reset(span_16);
					reset(div_29);
					template_effect(() => set_text(text_21, get(sd).supplier));
					append($$anchor, div_29);
				};
				if_block(node_26, ($$render) => {
					if (get(sd).supplier) $$render(consequent_7);
				});
				template_effect(() => {
					set_text(text_19, `${get(sd).fromLocation ?? ""} → ${get(sd).toLocation ?? ""}`);
					set_text(text_20, get(sd).paymentMethod);
				});
				append($$anchor, fragment_7);
			};
			var consequent_9 = ($$anchor) => {
				var fragment_8 = root_13();
				var div_30 = first_child(fragment_8);
				var span_17 = sibling(child(div_30), 2);
				var text_22 = child(span_17);
				reset(span_17);
				reset(div_30);
				var div_31 = sibling(div_30, 2);
				var span_18 = sibling(child(div_31));
				var text_23 = child(span_18, true);
				reset(span_18);
				reset(div_31);
				var div_32 = sibling(div_31, 2);
				var span_19 = sibling(child(div_32), 2);
				DateDisplay(child(span_19), { get value() {
					return get(sd).checkInDate;
				} });
				reset(span_19);
				reset(div_32);
				var div_33 = sibling(div_32, 2);
				var span_20 = sibling(child(div_33));
				var text_24 = child(span_20);
				reset(span_20);
				reset(div_33);
				var div_34 = sibling(div_33, 2);
				var span_21 = sibling(child(div_34), 2);
				var text_25 = child(span_21, true);
				reset(span_21);
				reset(div_34);
				var div_35 = sibling(div_34, 2);
				var span_22 = sibling(child(div_35), 2);
				var text_26 = child(span_22, true);
				reset(span_22);
				reset(div_35);
				template_effect(() => {
					set_text(text_22, `${get(sd).prefix ? get(sd).prefix + " " : ""}${get(sd).guestName ?? ""}`);
					set_text(text_23, get(sd).country);
					set_text(text_24, `${get(sd).days ?? ""} days`);
					set_text(text_25, get(sd).orderStatus);
					set_text(text_26, get(sd).paymentMethod);
				});
				append($$anchor, fragment_8);
			};
			var consequent_12 = ($$anchor) => {
				var fragment_9 = root_15();
				var div_36 = first_child(fragment_9);
				var span_23 = sibling(child(div_36), 2);
				var text_27 = child(span_23, true);
				reset(span_23);
				reset(div_36);
				var node_28 = sibling(div_36, 2);
				var consequent_10 = ($$anchor) => {
					var div_37 = root_11();
					var span_24 = sibling(child(div_37));
					var text_28 = child(span_24, true);
					reset(span_24);
					reset(div_37);
					template_effect(() => set_text(text_28, get(sd).supplierName));
					append($$anchor, div_37);
				};
				if_block(node_28, ($$render) => {
					if (get(sd).supplierName) $$render(consequent_10);
				});
				var node_29 = sibling(node_28, 2);
				var consequent_11 = ($$anchor) => {
					var div_38 = root_14();
					var span_25 = sibling(child(div_38));
					var text_29 = child(span_25, true);
					reset(span_25);
					reset(div_38);
					template_effect(() => set_text(text_29, get(sd).approvalNote));
					append($$anchor, div_38);
				};
				if_block(node_29, ($$render) => {
					if (get(sd).approvalNote) $$render(consequent_11);
				});
				template_effect(() => set_text(text_27, get(sd).visaPackName));
				append($$anchor, fragment_9);
			};
			var consequent_13 = ($$anchor) => {
				var fragment_10 = root_16();
				var div_39 = first_child(fragment_10);
				var span_26 = sibling(child(div_39), 2);
				var text_30 = child(span_26);
				reset(span_26);
				reset(div_39);
				var div_40 = sibling(div_39, 2);
				var span_27 = sibling(child(div_40));
				var text_31 = child(span_27, true);
				reset(span_27);
				reset(div_40);
				var div_41 = sibling(div_40, 2);
				var span_28 = sibling(child(div_41));
				var text_32 = child(span_28, true);
				reset(span_28);
				reset(div_41);
				var div_42 = sibling(div_41, 2);
				var span_29 = sibling(child(div_42), 2);
				var node_30 = child(span_29);
				DateDisplay(node_30, { get value() {
					return get(sd).appointmentDate;
				} });
				var text_33 = sibling(node_30);
				reset(span_29);
				reset(div_42);
				var div_43 = sibling(div_42, 2);
				var span_30 = sibling(child(div_43));
				var text_34 = child(span_30, true);
				reset(span_30);
				reset(div_43);
				template_effect(() => {
					set_text(text_30, `${get(sd).prefix ? get(sd).prefix + " " : ""}${get(sd).name ?? ""}`);
					set_text(text_31, get(sd).country);
					set_text(text_32, get(sd).visaType);
					set_text(text_33, ` ${get(sd).appointmentTime ?? ""}`);
					set_text(text_34, get(sd).vfsAppId);
				});
				append($$anchor, fragment_10);
			};
			var consequent_14 = ($$anchor) => {
				var fragment_11 = root_17();
				var div_44 = first_child(fragment_11);
				var span_31 = sibling(child(div_44), 2);
				var text_35 = child(span_31);
				reset(span_31);
				reset(div_44);
				var div_45 = sibling(div_44, 2);
				var span_32 = sibling(child(div_45));
				var text_36 = child(span_32, true);
				reset(span_32);
				reset(div_45);
				var div_46 = sibling(div_45, 2);
				var span_33 = sibling(child(div_46));
				var text_37 = child(span_33);
				reset(span_33);
				reset(div_46);
				var div_47 = sibling(div_46, 2);
				var span_34 = sibling(child(div_47));
				var text_38 = child(span_34, true);
				reset(span_34);
				reset(div_47);
				var div_48 = sibling(div_47, 2);
				var span_35 = sibling(child(div_48));
				var text_39 = child(span_35, true);
				reset(span_35);
				reset(div_48);
				template_effect(() => {
					set_text(text_35, `${get(sd).prefix ? get(sd).prefix + " " : ""}${get(sd).passengerName ?? ""}`);
					set_text(text_36, get(sd).country);
					set_text(text_37, `${get(sd).days ?? ""} days`);
					set_text(text_38, get(sd).bookingId);
					set_text(text_39, get(sd).holidayAppId);
				});
				append($$anchor, fragment_11);
			};
			var consequent_15 = ($$anchor) => {
				var fragment_12 = root_18();
				var div_49 = first_child(fragment_12);
				var span_36 = sibling(child(div_49), 2);
				var text_40 = child(span_36);
				reset(span_36);
				reset(div_49);
				var div_50 = sibling(div_49, 2);
				var span_37 = sibling(child(div_50), 2);
				var text_41 = child(span_37);
				reset(span_37);
				reset(div_50);
				var div_51 = sibling(div_50, 2);
				var span_38 = sibling(child(div_51), 2);
				var node_31 = child(span_38);
				DateDisplay(node_31, { get value() {
					return get(sd).dropDate;
				} });
				var text_42 = sibling(node_31);
				reset(span_38);
				reset(div_51);
				var div_52 = sibling(div_51, 2);
				var span_39 = sibling(child(div_52));
				var text_43 = child(span_39, true);
				reset(span_39);
				reset(div_52);
				template_effect(() => {
					set_text(text_40, `${get(sd).prefix ? get(sd).prefix + " " : ""}${get(sd).name ?? ""}`);
					set_text(text_41, `${get(sd).pickup ?? ""} → ${get(sd).drop ?? ""}`);
					set_text(text_42, ` ${get(sd).dropTime ?? ""}`);
					set_text(text_43, get(sd).vehicle ?? "—");
				});
				append($$anchor, fragment_12);
			};
			var consequent_17 = ($$anchor) => {
				var fragment_13 = root_20();
				var div_53 = first_child(fragment_13);
				var span_40 = sibling(child(div_53), 2);
				var text_44 = child(span_40, true);
				reset(span_40);
				reset(div_53);
				var div_54 = sibling(div_53, 2);
				var span_41 = sibling(child(div_54), 2);
				var text_45 = child(span_41);
				reset(span_41);
				reset(div_54);
				var node_32 = sibling(div_54, 2);
				var consequent_16 = ($$anchor) => {
					var div_55 = root_19();
					var span_42 = sibling(child(div_55), 2);
					var text_46 = child(span_42, true);
					reset(span_42);
					reset(div_55);
					template_effect(() => set_text(text_46, get(sd).narration));
					append($$anchor, div_55);
				};
				if_block(node_32, ($$render) => {
					if (get(sd).narration) $$render(consequent_16);
				});
				template_effect(() => {
					set_text(text_44, get(sd).serviceName);
					set_text(text_45, `${get(sd).prefix ? get(sd).prefix + " " : ""}${get(sd).name ?? ""}`);
				});
				append($$anchor, fragment_13);
			};
			if_block(node_25, ($$render) => {
				if (get(serviceType) === "flights") $$render(consequent_8);
				else if (get(serviceType) === "hotels") $$render(consequent_9, 1);
				else if (get(serviceType) === "visa") $$render(consequent_12, 2);
				else if (get(serviceType) === "vfs") $$render(consequent_13, 3);
				else if (get(serviceType) === "holiday") $$render(consequent_14, 4);
				else if (get(serviceType) === "transportation") $$render(consequent_15, 5);
				else if (get(serviceType) === "other-services") $$render(consequent_17, 6);
			});
			var node_33 = sibling(node_25, 2);
			var consequent_18 = ($$anchor) => {
				var div_56 = root_11();
				var span_43 = sibling(child(div_56));
				var text_47 = child(span_43, true);
				reset(span_43);
				reset(div_56);
				template_effect(() => set_text(text_47, get(sd).supplierName));
				append($$anchor, div_56);
			};
			if_block(node_33, ($$render) => {
				if (get(sd).supplierName && get(serviceType) !== "visa") $$render(consequent_18);
			});
			reset(div_26);
			reset(div_25);
			reset(div_17);
			template_effect(() => {
				set_text(text_14, get(sd).clientType);
				set_text(text_15, get(sd).headName ?? "—");
			});
			append($$anchor, div_17);
		};
		var consequent_28 = ($$anchor) => {
			var div_57 = root_30();
			var h2_2 = child(div_57);
			Credit_card(child(h2_2), { class: "h-4 w-4 text-primary" });
			next();
			reset(h2_2);
			var div_58 = sibling(h2_2, 2);
			each(div_58, 21, () => [
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
					value: get(sd).profit ?? 0,
					cls: "text-emerald-600"
				},
				{
					label: "Rejection Fee",
					value: get(sd).rejectionFee ?? 0,
					cls: "text-red-600"
				}
			], index, ($$anchor, item) => {
				var div_59 = root_22();
				var p_4 = child(div_59);
				var text_48 = child(p_4, true);
				reset(p_4);
				var p_5 = sibling(p_4, 2);
				MoneyDisplay(child(p_5), { get amount() {
					return get(item).value;
				} });
				reset(p_5);
				reset(div_59);
				template_effect(() => {
					set_text(text_48, get(item).label);
					set_class(p_5, 1, `text-lg font-bold ${get(item).cls ?? ""} font-mono`);
				});
				append($$anchor, div_59);
			});
			reset(div_58);
			var div_60 = sibling(div_58, 2);
			var node_36 = child(div_60);
			var consequent_20 = ($$anchor) => {
				var div_61 = root_23();
				var span_44 = sibling(child(div_61), 2);
				var text_49 = child(span_44, true);
				reset(span_44);
				reset(div_61);
				template_effect(() => set_text(text_49, get(displayPaymentMethod)));
				append($$anchor, div_61);
			};
			if_block(node_36, ($$render) => {
				if (get(displayPaymentMethod)) $$render(consequent_20);
			});
			var node_37 = sibling(node_36, 2);
			var consequent_21 = ($$anchor) => {
				var div_62 = root_24();
				var span_45 = sibling(child(div_62), 2);
				var text_50 = child(span_45, true);
				reset(span_45);
				reset(div_62);
				template_effect(() => set_text(text_50, get(sd).bankName || get(sd).applicants[0]?.bankName));
				append($$anchor, div_62);
			};
			if_block(node_37, ($$render) => {
				if (get(sd).bankName || get(sd).applicants && get(sd).applicants.length > 0 && get(sd).applicants[0]?.bankName) $$render(consequent_21);
			});
			var node_38 = sibling(node_37, 2);
			var consequent_22 = ($$anchor) => {
				var div_63 = root_25();
				var span_46 = sibling(child(div_63), 2);
				var text_51 = child(span_46, true);
				reset(span_46);
				reset(div_63);
				template_effect(() => set_text(text_51, get(sd).isInhouse ? "Yes" : "No"));
				append($$anchor, div_63);
			};
			if_block(node_38, ($$render) => {
				if (get(sd).isInhouse !== void 0) $$render(consequent_22);
			});
			var node_39 = sibling(node_38, 2);
			var consequent_23 = ($$anchor) => {
				var div_64 = root_26();
				var div_65 = sibling(child(div_64), 2);
				var span_47 = child(div_65);
				var text_52 = child(span_47, true);
				reset(span_47);
				var a_1 = sibling(span_47, 2);
				var a_2 = sibling(a_1, 2);
				reset(div_65);
				reset(div_64);
				template_effect(($0, $1, $2) => {
					set_attribute(span_47, "title", get(sd).paymentProof);
					set_text(text_52, $0);
					set_attribute(a_1, "href", $1);
					set_attribute(a_2, "href", $2);
				}, [
					() => get(sd).paymentProof.split("/").pop(),
					() => getSalesPortalFileUrl(get(sd).paymentProof),
					() => getSalesPortalFileUrl(get(sd).paymentProof)
				]);
				append($$anchor, div_64);
			};
			if_block(node_39, ($$render) => {
				if (get(sd).paymentProof) $$render(consequent_23);
			});
			reset(div_60);
			var node_40 = sibling(div_60, 2);
			var consequent_24 = ($$anchor) => {
				var div_66 = root_28();
				var select = sibling(child(div_66), 2);
				var option = child(select);
				option.value = option.__value = "";
				each(sibling(option), 17, () => get(cashAccounts), index, ($$anchor, acc) => {
					var option_1 = root_27();
					var text_53 = child(option_1);
					reset(option_1);
					var option_1_value = {};
					template_effect(($0, $1) => {
						set_text(text_53, `${get(acc).name ?? ""} (Bal: ${$0 ?? ""} BHD)`);
						if (option_1_value !== (option_1_value = $1)) option_1.value = (option_1.__value = $1) ?? "";
					}, [() => get(acc).currentBalance.toFixed(3), () => String(get(acc).id)]);
					append($$anchor, option_1);
				});
				reset(select);
				reset(div_66);
				template_effect(() => select.disabled = get(actionLoading));
				bind_select_value(select, () => get(selectedCashAccountIdVal), ($$value) => set(selectedCashAccountIdVal, $$value));
				append($$anchor, div_66);
			};
			var d = user_derived(() => get(sd).paymentStatus?.toLowerCase() === "pending" && get(isCashBooking));
			if_block(node_40, ($$render) => {
				if (get(d)) $$render(consequent_24);
			});
			var node_42 = sibling(node_40, 2);
			var consequent_27 = ($$anchor) => {
				var div_67 = root_29();
				var button_4 = child(div_67);
				var node_43 = child(button_4);
				var consequent_25 = ($$anchor) => {
					Refresh_cw($$anchor, { class: "h-3.5 w-3.5 animate-spin" });
				};
				if_block(node_43, ($$render) => {
					if (get(actionLoading)) $$render(consequent_25);
				});
				next();
				reset(button_4);
				var button_5 = sibling(button_4, 2);
				var node_44 = child(button_5);
				var consequent_26 = ($$anchor) => {
					Refresh_cw($$anchor, { class: "h-3.5 w-3.5 animate-spin" });
				};
				if_block(node_44, ($$render) => {
					if (get(actionLoading)) $$render(consequent_26);
				});
				next();
				reset(button_5);
				reset(div_67);
				template_effect(() => {
					button_4.disabled = get(actionLoading) || get(isCashBooking) && !get(selectedCashAccountIdVal);
					button_5.disabled = get(actionLoading);
				});
				delegated("click", button_4, () => requestStatusChange("success"));
				delegated("click", button_5, () => requestStatusChange("failed"));
				append($$anchor, div_67);
			};
			var d_1 = user_derived(() => get(sd).paymentStatus?.toLowerCase() === "pending");
			if_block(node_42, ($$render) => {
				if (get(d_1)) $$render(consequent_27);
			});
			reset(div_57);
			append($$anchor, div_57);
		};
		var consequent_31 = ($$anchor) => {
			var fragment_16 = comment();
			var node_45 = first_child(fragment_16);
			var consequent_29 = ($$anchor) => {
				var div_68 = root_32();
				var div_69 = child(div_68);
				var h2_3 = child(div_69);
				var text_54 = child(h2_3);
				reset(h2_3);
				reset(div_69);
				var table = sibling(div_69, 2);
				var tbody = sibling(child(table));
				each(tbody, 21, () => get(sd).passengers, index, ($$anchor, p) => {
					var tr = root_31();
					var td = child(tr);
					var text_55 = child(td);
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
					var text_56 = child(td_4, true);
					reset(td_4);
					var td_5 = sibling(td_4);
					var text_57 = child(td_5, true);
					reset(td_5);
					reset(tr);
					template_effect(() => {
						set_text(text_55, `${get(p).prefix ? get(p).prefix + " " : ""}${get(p).passengerName ?? ""}`);
						set_text(text_56, get(p).isInhouse ? "✓" : "—");
						set_text(text_57, get(p).supplierName ?? "—");
					});
					append($$anchor, tr);
				});
				reset(tbody);
				reset(table);
				reset(div_68);
				template_effect(() => set_text(text_54, `Passengers (${get(sd).passengers.length ?? ""})`));
				append($$anchor, div_68);
			};
			var consequent_30 = ($$anchor) => {
				var div_70 = root_34();
				var div_71 = child(div_70);
				var h2_4 = child(div_71);
				var text_58 = child(h2_4);
				reset(h2_4);
				reset(div_71);
				var table_1 = sibling(div_71, 2);
				var tbody_1 = sibling(child(table_1));
				each(tbody_1, 21, () => get(sd).applicants, index, ($$anchor, a) => {
					var tr_1 = root_33();
					var td_6 = child(tr_1);
					var text_59 = child(td_6);
					reset(td_6);
					var td_7 = sibling(td_6);
					var text_60 = child(td_7, true);
					reset(td_7);
					var td_8 = sibling(td_7);
					var text_61 = child(td_8, true);
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
					var span_48 = child(td_11);
					var text_62 = child(span_48, true);
					reset(span_48);
					reset(td_11);
					reset(tr_1);
					template_effect(($0) => {
						set_text(text_59, `${get(a).prefix ? get(a).prefix + " " : ""}${get(a).fName ?? ""} ${get(a).lName ?? ""}`);
						set_text(text_60, get(a).passportNo);
						set_text(text_61, get(a).nationality);
						set_class(span_48, 1, `inline-flex px-2 py-0.5 rounded-full text-[9px] font-bold ${$0 ?? ""}`);
						set_text(text_62, get(a).paymentStatus);
					}, [() => statusClass(get(a).paymentStatus)]);
					append($$anchor, tr_1);
				});
				reset(tbody_1);
				reset(table_1);
				reset(div_70);
				template_effect(() => set_text(text_58, `Applicants (${get(sd).applicants.length ?? ""})`));
				append($$anchor, div_70);
			};
			var alternate = ($$anchor) => {
				append($$anchor, root_35());
			};
			if_block(node_45, ($$render) => {
				if (get(serviceType) === "flights" && get(sd).passengers?.length) $$render(consequent_29);
				else if (get(serviceType) === "visa" && get(sd).applicants?.length) $$render(consequent_30, 1);
				else $$render(alternate, -1);
			});
			append($$anchor, fragment_16);
		};
		var consequent_39 = ($$anchor) => {
			var div_73 = root_54();
			var div_74 = child(div_73);
			var div_75 = child(div_74);
			var p_6 = sibling(child(div_75), 2);
			var node_51 = child(p_6);
			{
				let $0 = user_derived(() => get(sd).expectedSupplierCost ?? 0);
				MoneyDisplay(node_51, { get amount() {
					return get($0);
				} });
			}
			reset(p_6);
			reset(div_75);
			var div_76 = sibling(div_75, 2);
			var p_7 = sibling(child(div_76), 2);
			MoneyDisplay(child(p_7), { get amount() {
				return get(totalPaid);
			} });
			reset(p_7);
			reset(div_76);
			var div_77 = sibling(div_76, 2);
			var p_8 = sibling(child(div_77), 2);
			MoneyDisplay(child(p_8), { get amount() {
				return get(totalPurchaseReturns);
			} });
			reset(p_8);
			reset(div_77);
			var div_78 = sibling(div_77, 2);
			var p_9 = sibling(child(div_78), 2);
			MoneyDisplay(child(p_9), { get amount() {
				return get(totalSalesReturns);
			} });
			reset(p_9);
			reset(div_78);
			reset(div_74);
			var div_79 = sibling(div_74, 2);
			var node_55 = child(div_79);
			{
				let $0 = user_derived(() => !get(canPay));
				Button(node_55, {
					onclick: openPaymentForm,
					get disabled() {
						return get($0);
					},
					class: "h-8.5 rounded-xl flex items-center gap-1.5 text-xs font-semibold cursor-pointer",
					children: ($$anchor, $$slotProps) => {
						var fragment_17 = root_36();
						Coins(first_child(fragment_17), { class: "h-4 w-4" });
						next();
						append($$anchor, fragment_17);
					},
					$$slots: { default: true }
				});
			}
			var node_57 = sibling(node_55, 2);
			{
				let $0 = user_derived(() => !get(canPurchaseReturn));
				Button(node_57, {
					onclick: openPurchaseReturnForm,
					get disabled() {
						return get($0);
					},
					variant: "outline",
					class: "h-8.5 rounded-xl flex items-center gap-1.5 text-xs font-semibold cursor-pointer border-emerald-200 text-emerald-700 hover:bg-emerald-50",
					children: ($$anchor, $$slotProps) => {
						var fragment_18 = root_37();
						Undo_2(first_child(fragment_18), { class: "h-4 w-4" });
						next();
						append($$anchor, fragment_18);
					},
					$$slots: { default: true }
				});
			}
			var node_59 = sibling(node_57, 2);
			{
				let $0 = user_derived(() => !get(canSalesReturn));
				Button(node_59, {
					onclick: openSalesReturnForm,
					get disabled() {
						return get($0);
					},
					variant: "outline",
					class: "h-8.5 rounded-xl flex items-center gap-1.5 text-xs font-semibold cursor-pointer border-sky-200 text-sky-700 hover:bg-sky-50",
					children: ($$anchor, $$slotProps) => {
						var fragment_19 = root_38();
						Undo_2(first_child(fragment_19), { class: "h-4 w-4" });
						next();
						append($$anchor, fragment_19);
					},
					$$slots: { default: true }
				});
			}
			reset(div_79);
			var node_61 = sibling(div_79, 2);
			var consequent_32 = ($$anchor) => {
				var div_80 = root_39();
				Circle_alert(child(div_80), { class: "h-4 w-4 shrink-0 mt-0.5 text-amber-600" });
				next(2);
				reset(div_80);
				append($$anchor, div_80);
			};
			var d_2 = user_derived(() => get(sd).processingStatus?.toLowerCase() === "completed");
			var alternate_1 = ($$anchor) => {
				var fragment_20 = root_42();
				var node_63 = first_child(fragment_20);
				var consequent_33 = ($$anchor) => {
					var div_81 = root_40();
					Circle_alert(child(div_81), { class: "h-4 w-4 shrink-0 mt-0.5" });
					next(2);
					reset(div_81);
					append($$anchor, div_81);
				};
				if_block(node_63, ($$render) => {
					if (!get(canPurchaseReturn)) $$render(consequent_33);
				});
				var node_65 = sibling(node_63, 2);
				var consequent_34 = ($$anchor) => {
					var div_82 = root_41();
					Circle_alert(child(div_82), { class: "h-4 w-4 shrink-0 mt-0.5" });
					next(2);
					reset(div_82);
					append($$anchor, div_82);
				};
				if_block(node_65, ($$render) => {
					if (!get(canSalesReturn)) $$render(consequent_34);
				});
				append($$anchor, fragment_20);
			};
			if_block(node_61, ($$render) => {
				if (get(d_2)) $$render(consequent_32);
				else $$render(alternate_1, -1);
			});
			var div_83 = sibling(node_61, 2);
			var div_84 = child(div_83);
			var h2_5 = child(div_84);
			var text_63 = child(h2_5);
			reset(h2_5);
			reset(div_84);
			var node_67 = sibling(div_84, 2);
			var consequent_36 = ($$anchor) => {
				var table_2 = root_46();
				var tbody_2 = sibling(child(table_2));
				each(tbody_2, 21, () => get(detail).supplierPayments, index, ($$anchor, sp) => {
					var tr_2 = root_45();
					var td_12 = child(tr_2);
					var text_64 = child(td_12, true);
					reset(td_12);
					var td_13 = sibling(td_12);
					MoneyDisplay(child(td_13), { get amount() {
						return get(sp).amount;
					} });
					reset(td_13);
					var td_14 = sibling(td_13);
					var text_65 = child(td_14, true);
					reset(td_14);
					var td_15 = sibling(td_14);
					var span_49 = child(td_15);
					var text_66 = child(span_49, true);
					reset(span_49);
					reset(td_15);
					var td_16 = sibling(td_15);
					var text_67 = child(td_16, true);
					reset(td_16);
					var td_17 = sibling(td_16);
					var text_68 = child(td_17, true);
					reset(td_17);
					var td_18 = sibling(td_17);
					DateDisplay(child(td_18), { get value() {
						return get(sp).requestedAt;
					} });
					reset(td_18);
					var td_19 = sibling(td_18);
					var node_70 = child(td_19);
					var consequent_35 = ($$anchor) => {
						var div_85 = root_43();
						var button_6 = child(div_85);
						var button_7 = sibling(button_6, 2);
						var button_8 = sibling(button_7, 2);
						reset(div_85);
						delegated("click", button_6, () => openEditGovtFeeModal(get(sp)));
						delegated("click", button_7, () => handleApproveSupplierPayment(get(sp)));
						delegated("click", button_8, () => handleRejectSupplierPayment(get(sp)));
						append($$anchor, div_85);
					};
					var d_3 = user_derived(() => (get(sp).status ?? "").toLowerCase().includes("pending") || (get(sp).status ?? "").toLowerCase() === "draft");
					var alternate_2 = ($$anchor) => {
						append($$anchor, root_44());
					};
					if_block(node_70, ($$render) => {
						if (get(d_3)) $$render(consequent_35);
						else $$render(alternate_2, -1);
					});
					reset(td_19);
					reset(tr_2);
					template_effect(($0, $1, $2) => {
						set_text(text_64, $0);
						set_text(text_65, get(sp).paymentMethod);
						set_class(span_49, 1, `inline-flex px-2 py-0.5 rounded-full text-[9px] font-bold ${$1 ?? ""}`);
						set_text(text_66, get(sp).status);
						set_text(text_67, get(sp).referenceNumber ?? "—");
						set_text(text_68, $2);
					}, [
						() => getSupplierLabel(get(sp).supplierId),
						() => statusClass(get(sp).status),
						() => getUserLabel(get(sp).requestedByUserId, get(sp))
					]);
					append($$anchor, tr_2);
				});
				reset(tbody_2);
				reset(table_2);
				append($$anchor, table_2);
			};
			var alternate_3 = ($$anchor) => {
				append($$anchor, root_47());
			};
			if_block(node_67, ($$render) => {
				if (get(detail).supplierPayments?.length) $$render(consequent_36);
				else $$render(alternate_3, -1);
			});
			reset(div_83);
			var div_87 = sibling(div_83, 2);
			var div_88 = child(div_87);
			var h2_6 = child(div_88);
			var text_69 = child(h2_6);
			reset(h2_6);
			reset(div_88);
			var node_71 = sibling(div_88, 2);
			var consequent_37 = ($$anchor) => {
				var table_3 = root_49();
				var tbody_3 = sibling(child(table_3));
				each(tbody_3, 21, () => get(detail).purchaseReturns, index, ($$anchor, pr) => {
					var tr_3 = root_48();
					var td_20 = child(tr_3);
					var text_70 = child(td_20, true);
					reset(td_20);
					var td_21 = sibling(td_20);
					MoneyDisplay(child(td_21), { get amount() {
						return get(pr).amount;
					} });
					reset(td_21);
					var td_22 = sibling(td_21);
					var text_71 = child(td_22, true);
					reset(td_22);
					var td_23 = sibling(td_22);
					var span_51 = child(td_23);
					var text_72 = child(span_51, true);
					reset(span_51);
					reset(td_23);
					var td_24 = sibling(td_23);
					var text_73 = child(td_24, true);
					reset(td_24);
					var td_25 = sibling(td_24);
					var text_74 = child(td_25, true);
					reset(td_25);
					var td_26 = sibling(td_25);
					DateDisplay(child(td_26), { get value() {
						return get(pr).requestedAt;
					} });
					reset(td_26);
					reset(tr_3);
					template_effect(($0, $1, $2) => {
						set_text(text_70, $0);
						set_text(text_71, get(pr).destinationType);
						set_class(span_51, 1, `inline-flex px-2 py-0.5 rounded-full text-[9px] font-bold ${$1 ?? ""}`);
						set_text(text_72, get(pr).status);
						set_text(text_73, get(pr).reason);
						set_text(text_74, $2);
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
			var alternate_4 = ($$anchor) => {
				append($$anchor, root_50());
			};
			if_block(node_71, ($$render) => {
				if (get(detail).purchaseReturns?.length) $$render(consequent_37);
				else $$render(alternate_4, -1);
			});
			reset(div_87);
			var div_90 = sibling(div_87, 2);
			var div_91 = child(div_90);
			var h2_7 = child(div_91);
			var text_75 = child(h2_7);
			reset(h2_7);
			reset(div_91);
			var node_74 = sibling(div_91, 2);
			var consequent_38 = ($$anchor) => {
				var table_4 = root_52();
				var tbody_4 = sibling(child(table_4));
				each(tbody_4, 21, () => get(detail).salesReturns, index, ($$anchor, sr) => {
					var tr_4 = root_51();
					var td_27 = child(tr_4);
					var text_76 = child(td_27);
					reset(td_27);
					var td_28 = sibling(td_27);
					MoneyDisplay(child(td_28), { get amount() {
						return get(sr).amount;
					} });
					reset(td_28);
					var td_29 = sibling(td_28);
					var text_77 = child(td_29, true);
					reset(td_29);
					var td_30 = sibling(td_29);
					var span_52 = child(td_30);
					var text_78 = child(span_52, true);
					reset(span_52);
					reset(td_30);
					var td_31 = sibling(td_30);
					var text_79 = child(td_31, true);
					reset(td_31);
					var td_32 = sibling(td_31);
					DateDisplay(child(td_32), { get value() {
						return get(sr).requestedAt;
					} });
					reset(td_32);
					reset(tr_4);
					template_effect(($0, $1) => {
						set_text(text_76, `${get(sr).recipientType ?? ""} #${get(sr).recipientId ?? ""}`);
						set_text(text_77, get(sr).reason);
						set_class(span_52, 1, `inline-flex px-2 py-0.5 rounded-full text-[9px] font-bold ${$0 ?? ""}`);
						set_text(text_78, get(sr).status);
						set_text(text_79, $1);
					}, [() => statusClass(get(sr).status), () => getUserLabel(get(sr).requestedByUserId, get(sr))]);
					append($$anchor, tr_4);
				});
				reset(tbody_4);
				reset(table_4);
				append($$anchor, table_4);
			};
			var alternate_5 = ($$anchor) => {
				append($$anchor, root_53());
			};
			if_block(node_74, ($$render) => {
				if (get(detail).salesReturns?.length) $$render(consequent_38);
				else $$render(alternate_5, -1);
			});
			reset(div_90);
			reset(div_73);
			template_effect(() => {
				set_text(text_63, `Supplier Payments (${get(detail).supplierPayments?.length ?? 0 ?? ""})`);
				set_text(text_69, `Purchase Returns (Supplier Refunds) (${get(detail).purchaseReturns?.length ?? 0 ?? ""})`);
				set_text(text_75, `Sales Returns (Customer Refunds) (${get(detail).salesReturns?.length ?? 0 ?? ""})`);
			});
			append($$anchor, div_73);
		};
		var consequent_40 = ($$anchor) => {
			var div_93 = root_59();
			var h2_8 = child(div_93);
			Clock(child(h2_8), { class: "h-4 w-4 text-primary" });
			next();
			reset(h2_8);
			var ol = sibling(h2_8, 2);
			var li = child(ol);
			var div_94 = sibling(child(li), 2);
			var p_10 = sibling(child(div_94), 2);
			DateDisplay(child(p_10), { get value() {
				return get(sd).createdAt;
			} });
			reset(p_10);
			reset(div_94);
			reset(li);
			var node_79 = sibling(li, 2);
			each(node_79, 17, () => get(detail)?.journalEntries ?? [], index, ($$anchor, j) => {
				var li_1 = root_55();
				var div_95 = sibling(child(li_1), 2);
				var p_11 = child(div_95);
				var text_80 = child(p_11);
				reset(p_11);
				var p_12 = sibling(p_11, 2);
				var text_81 = child(p_12);
				DateDisplay(sibling(text_81), { get value() {
					return get(j).entryDate;
				} });
				reset(p_12);
				reset(div_95);
				reset(li_1);
				template_effect(() => {
					set_text(text_80, `Journal Entry — ${get(j).journalNumber ?? ""}`);
					set_text(text_81, `${get(j).description ?? ""} • `);
				});
				append($$anchor, li_1);
			});
			var node_81 = sibling(node_79, 2);
			each(node_81, 17, () => get(detail)?.supplierPayments ?? [], index, ($$anchor, sp) => {
				var li_2 = root_56();
				var div_96 = sibling(child(li_2), 2);
				var p_13 = child(div_96);
				MoneyDisplay(sibling(child(p_13)), { get amount() {
					return get(sp).amount;
				} });
				reset(p_13);
				var p_14 = sibling(p_13, 2);
				var text_82 = child(p_14);
				DateDisplay(sibling(text_82), { get value() {
					return get(sp).requestedAt;
				} });
				reset(p_14);
				reset(div_96);
				reset(li_2);
				template_effect(() => set_text(text_82, `Status: ${get(sp).status ?? ""} • `));
				append($$anchor, li_2);
			});
			var node_84 = sibling(node_81, 2);
			each(node_84, 17, () => get(detail)?.purchaseReturns ?? [], index, ($$anchor, pr) => {
				var li_3 = root_57();
				var div_97 = sibling(child(li_3), 2);
				var p_15 = child(div_97);
				MoneyDisplay(sibling(child(p_15)), { get amount() {
					return get(pr).amount;
				} });
				reset(p_15);
				var p_16 = sibling(p_15, 2);
				var text_83 = child(p_16);
				DateDisplay(sibling(text_83), { get value() {
					return get(pr).requestedAt;
				} });
				reset(p_16);
				reset(div_97);
				reset(li_3);
				template_effect(() => set_text(text_83, `Status: ${get(pr).status ?? ""} • `));
				append($$anchor, li_3);
			});
			var node_87 = sibling(node_84, 2);
			each(node_87, 17, () => get(detail)?.salesReturns ?? [], index, ($$anchor, sr) => {
				var li_4 = root_58();
				var div_98 = sibling(child(li_4), 2);
				var p_17 = child(div_98);
				MoneyDisplay(sibling(child(p_17)), { get amount() {
					return get(sr).amount;
				} });
				reset(p_17);
				var p_18 = sibling(p_17, 2);
				var text_84 = child(p_18);
				DateDisplay(sibling(text_84), { get value() {
					return get(sr).requestedAt;
				} });
				reset(p_18);
				reset(div_98);
				reset(li_4);
				template_effect(() => set_text(text_84, `Status: ${get(sr).status ?? ""} • `));
				append($$anchor, li_4);
			});
			var li_5 = sibling(node_87, 2);
			var div_99 = sibling(child(li_5), 2);
			var p_19 = sibling(child(div_99), 2);
			DateDisplay(child(p_19), { get value() {
				return get(sd).updatedAt;
			} });
			reset(p_19);
			reset(div_99);
			reset(li_5);
			reset(ol);
			reset(div_93);
			append($$anchor, div_93);
		};
		if_block(node_20, ($$render) => {
			if (get(activeTab) === "overview") $$render(consequent_19);
			else if (get(activeTab) === "financial") $$render(consequent_28, 1);
			else if (get(activeTab) === "items") $$render(consequent_31, 2);
			else if (get(activeTab) === "supplier") $$render(consequent_39, 3);
			else if (get(activeTab) === "timeline") $$render(consequent_40, 4);
		});
		template_effect(($0) => {
			set_class(span_2, 1, `inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide ${$0 ?? ""}`);
			set_text(text_6, get(sd).paymentStatus);
			set_text(text_7, get(sd).processingStatus ?? get(sd).orderStatus ?? "—");
		}, [() => statusClass(get(sd).paymentStatus)]);
		append($$anchor, fragment_4);
	};
	var alternate_6 = ($$anchor) => {
		append($$anchor, root_61());
	};
	if_block(node_7, ($$render) => {
		if (get(loading)) $$render(consequent_1);
		else if (get(error)) $$render(consequent_2, 1);
		else if (get(sd)) $$render(consequent_41, 2);
		else $$render(alternate_6, -1);
	});
	reset(div);
	var node_91 = sibling(div, 2);
	var consequent_46 = ($$anchor) => {
		var div_101 = root_66();
		var div_102 = child(div_101);
		var div_103 = child(div_102);
		var h3 = child(div_103);
		Coins(child(h3), { class: "h-4.5 w-4.5 text-primary" });
		next();
		reset(h3);
		var button_9 = sibling(h3, 2);
		X(child(button_9), { class: "h-4 w-4" });
		reset(button_9);
		reset(div_103);
		var form = sibling(div_103, 2);
		var div_104 = child(form);
		var div_105 = child(div_104);
		var select_1 = sibling(child(div_105), 2);
		var option_2 = child(select_1);
		option_2.value = option_2.__value = 0;
		each(sibling(option_2), 17, () => get(filteredSuppliersList), index, ($$anchor, s) => {
			var option_3 = root_27();
			var text_85 = child(option_3);
			reset(option_3);
			var option_3_value = {};
			template_effect(($0) => {
				set_text(text_85, `${get(s).name ?? ""} (${get(s).code ?? ""})${$0 ?? ""}`);
				if (option_3_value !== (option_3_value = get(s).id)) option_3.value = (option_3.__value = get(s).id) ?? "";
			}, [() => get(s).wallet !== void 0 ? ` (Bal: ${get(s).wallet.toFixed(3)} BHD)` : ""]);
			append($$anchor, option_3);
		});
		reset(select_1);
		reset(div_105);
		var node_95 = sibling(div_105, 2);
		var consequent_42 = ($$anchor) => {
			var div_106 = root_62();
			var div_107 = child(div_106);
			var span_53 = sibling(child(div_107), 2);
			var node_96 = child(span_53);
			{
				let $0 = user_derived(() => get(selectedPaySupplier).wallet ?? 0);
				MoneyDisplay(node_96, { get amount() {
					return get($0);
				} });
			}
			reset(span_53);
			reset(div_107);
			var div_108 = sibling(div_107, 2);
			var span_54 = sibling(child(div_108), 2);
			var node_97 = child(span_54);
			{
				let $0 = user_derived(() => get(selectedPaySupplier).creditWallet ?? 0);
				MoneyDisplay(node_97, { get amount() {
					return get($0);
				} });
			}
			reset(span_54);
			reset(div_108);
			reset(div_106);
			append($$anchor, div_106);
		};
		if_block(node_95, ($$render) => {
			if (get(selectedPaySupplier)) $$render(consequent_42);
		});
		var div_109 = sibling(node_95, 2);
		Input(sibling(child(div_109), 2), {
			id: "pay-amount",
			type: "number",
			step: "0.001",
			min: "0.001",
			required: true,
			get value() {
				return get(payAmount);
			},
			set value($$value) {
				set(payAmount, $$value, true);
			}
		});
		reset(div_109);
		var div_110 = sibling(div_109, 2);
		var select_2 = sibling(child(div_110), 2);
		var option_4 = child(select_2);
		option_4.value = option_4.__value = "bank_transfer";
		var option_5 = sibling(option_4);
		option_5.value = option_5.__value = "cash";
		var option_6 = sibling(option_5);
		option_6.value = option_6.__value = "supplier_wallet";
		var option_7 = sibling(option_6);
		option_7.value = option_7.__value = "credit";
		reset(select_2);
		reset(div_110);
		var node_99 = sibling(div_110, 2);
		var consequent_43 = ($$anchor) => {
			var div_111 = root_63();
			var label = child(div_111);
			var text_86 = child(label);
			next();
			reset(label);
			var select_3 = sibling(label, 2);
			var option_8 = child(select_3);
			var text_87 = child(option_8);
			reset(option_8);
			option_8.value = option_8.__value = "";
			each(sibling(option_8), 17, () => get(filteredSourceAccounts), index, ($$anchor, opt) => {
				var option_9 = root_27();
				var text_88 = child(option_9, true);
				reset(option_9);
				var option_9_value = {};
				template_effect(() => {
					set_text(text_88, get(opt).name);
					if (option_9_value !== (option_9_value = get(opt).id)) option_9.value = (option_9.__value = get(opt).id) ?? "";
				});
				append($$anchor, option_9);
			});
			reset(select_3);
			reset(div_111);
			template_effect(() => {
				set_text(text_86, `Source ${get(payMethod) === "cash" ? "Cash" : "Bank"} Account `);
				set_text(text_87, `-- Select Source ${get(payMethod) === "cash" ? "Cash" : "Bank"} Account --`);
			});
			bind_select_value(select_3, () => get(paySourceId), ($$value) => set(paySourceId, $$value));
			append($$anchor, div_111);
		};
		if_block(node_99, ($$render) => {
			if (get(payMethod) !== "credit" && get(payMethod) !== "supplier_wallet") $$render(consequent_43);
		});
		var node_101 = sibling(node_99, 2);
		var consequent_44 = ($$anchor) => {
			var div_112 = root_64();
			var node_102 = child(div_112);
			Circle_alert(node_102, { class: "h-4 w-4 shrink-0 text-red-500" });
			var span_55 = sibling(node_102, 2);
			var text_89 = child(span_55);
			reset(span_55);
			reset(div_112);
			template_effect(($0) => set_text(text_89, `Insufficient supplier wallet balance! Available: ${$0 ?? ""} BHD`), [() => (get(selectedPaySupplier).wallet ?? 0).toFixed(3)]);
			append($$anchor, div_112);
		};
		if_block(node_101, ($$render) => {
			if (get(payMethod) === "supplier_wallet" && get(selectedPaySupplier) && get(payAmount) > (get(selectedPaySupplier).wallet ?? 0)) $$render(consequent_44);
		});
		var div_113 = sibling(node_101, 2);
		Input(sibling(child(div_113), 2), {
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
		reset(div_113);
		var div_114 = sibling(div_113, 2);
		Input(sibling(child(div_114), 2), {
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
		reset(div_114);
		reset(div_104);
		var div_115 = sibling(div_104, 2);
		var node_105 = child(div_115);
		Button(node_105, {
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
		var node_106 = sibling(node_105, 2);
		{
			let $0 = user_derived(() => get(actionLoading) || !get(paySupplierId) || get(payAmount) <= 0 || get(payMethod) !== "credit" && get(payMethod) !== "supplier_wallet" && !get(paySourceId) || get(payMethod) === "supplier_wallet" && get(selectedPaySupplier) && get(payAmount) > (get(selectedPaySupplier).wallet ?? 0));
			Button(node_106, {
				type: "submit",
				get disabled() {
					return get($0);
				},
				class: "rounded-xl bg-primary text-white font-semibold",
				children: ($$anchor, $$slotProps) => {
					var fragment_21 = root_65();
					var node_107 = first_child(fragment_21);
					var consequent_45 = ($$anchor) => {
						Refresh_cw($$anchor, { class: "h-3 w-3 mr-1.5 animate-spin" });
					};
					if_block(node_107, ($$render) => {
						if (get(actionLoading)) $$render(consequent_45);
					});
					next();
					append($$anchor, fragment_21);
				},
				$$slots: { default: true }
			});
		}
		reset(div_115);
		reset(form);
		reset(div_102);
		reset(div_101);
		delegated("click", button_9, () => {
			set(showPaymentModal, false);
			set(approvingPendingPayment, null);
		});
		event("submit", form, submitPaymentForm);
		bind_select_value(select_1, () => get(paySupplierId), ($$value) => set(paySupplierId, $$value));
		bind_select_value(select_2, () => get(payMethod), ($$value) => set(payMethod, $$value));
		append($$anchor, div_101);
	};
	if_block(node_91, ($$render) => {
		if (get(showPaymentModal)) $$render(consequent_46);
	});
	var node_108 = sibling(node_91, 2);
	var consequent_49 = ($$anchor) => {
		var div_116 = root_69();
		var div_117 = child(div_116);
		var div_118 = child(div_117);
		var h3_1 = child(div_118);
		Undo_2(child(h3_1), { class: "h-4.5 w-4.5" });
		next();
		reset(h3_1);
		var button_10 = sibling(h3_1, 2);
		X(child(button_10), { class: "h-4 w-4" });
		reset(button_10);
		reset(div_118);
		var form_1 = sibling(div_118, 2);
		var div_119 = child(form_1);
		var div_120 = child(div_119);
		var select_4 = sibling(child(div_120), 2);
		var option_10 = child(select_4);
		option_10.value = option_10.__value = 0;
		each(sibling(option_10), 17, () => get(suppliersList), index, ($$anchor, s) => {
			var option_11 = root_27();
			var text_91 = child(option_11);
			reset(option_11);
			var option_11_value = {};
			template_effect(() => {
				set_text(text_91, `${get(s).name ?? ""} (${get(s).code ?? ""})`);
				if (option_11_value !== (option_11_value = get(s).id)) option_11.value = (option_11.__value = get(s).id) ?? "";
			});
			append($$anchor, option_11);
		});
		reset(select_4);
		reset(div_120);
		var div_121 = sibling(div_120, 2);
		var label_1 = child(div_121);
		var node_112 = sibling(child(label_1), 3);
		{
			let $0 = user_derived(() => get(totalPaid) - get(totalPurchaseReturns));
			MoneyDisplay(node_112, { get amount() {
				return get($0);
			} });
		}
		next();
		reset(label_1);
		var node_113 = sibling(label_1, 2);
		{
			let $0 = user_derived(() => get(totalPaid) - get(totalPurchaseReturns) + .001);
			Input(node_113, {
				id: "pr-amount",
				type: "number",
				step: "0.001",
				min: "0.001",
				get max() {
					return get($0);
				},
				required: true,
				get value() {
					return get(prAmount);
				},
				set value($$value) {
					set(prAmount, $$value, true);
				}
			});
		}
		reset(div_121);
		var div_122 = sibling(div_121, 2);
		var select_5 = sibling(child(div_122), 2);
		var option_12 = child(select_5);
		option_12.value = option_12.__value = "bank";
		var option_13 = sibling(option_12);
		option_13.value = option_13.__value = "account";
		var option_14 = sibling(option_13);
		option_14.value = option_14.__value = "supplier_wallet";
		reset(select_5);
		reset(div_122);
		var node_114 = sibling(div_122, 2);
		var consequent_47 = ($$anchor) => {
			var div_123 = root_67();
			var select_6 = sibling(child(div_123), 2);
			var option_15 = child(select_6);
			option_15.value = option_15.__value = "";
			each(sibling(option_15), 17, () => get(allAccountsAndBanks), index, ($$anchor, opt) => {
				var option_16 = root_27();
				var text_92 = child(option_16, true);
				reset(option_16);
				var option_16_value = {};
				template_effect(() => {
					set_text(text_92, get(opt).name);
					if (option_16_value !== (option_16_value = get(opt).id)) option_16.value = (option_16.__value = get(opt).id) ?? "";
				});
				append($$anchor, option_16);
			});
			reset(select_6);
			reset(div_123);
			bind_select_value(select_6, () => get(prDestId), ($$value) => set(prDestId, $$value));
			append($$anchor, div_123);
		};
		if_block(node_114, ($$render) => {
			if (get(prDestType) !== "supplier_wallet") $$render(consequent_47);
		});
		var div_124 = sibling(node_114, 2);
		Input(sibling(child(div_124), 2), {
			id: "pr-reason",
			type: "text",
			required: true,
			placeholder: "Reason for the supplier refund...",
			get value() {
				return get(prReason);
			},
			set value($$value) {
				set(prReason, $$value, true);
			}
		});
		reset(div_124);
		reset(div_119);
		var div_125 = sibling(div_119, 2);
		var node_117 = child(div_125);
		Button(node_117, {
			type: "button",
			variant: "outline",
			onclick: () => set(showPurchaseReturnModal, false),
			class: "rounded-xl",
			children: ($$anchor, $$slotProps) => {
				next();
				append($$anchor, text("Cancel"));
			},
			$$slots: { default: true }
		});
		var node_118 = sibling(node_117, 2);
		{
			let $0 = user_derived(() => get(actionLoading) || !get(prSupplierId) || get(prAmount) <= 0 || get(prDestType) !== "supplier_wallet" && !get(prDestId) || get(prAmount) > get(totalPaid) - get(totalPurchaseReturns) + .001);
			Button(node_118, {
				type: "submit",
				get disabled() {
					return get($0);
				},
				class: "rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700",
				children: ($$anchor, $$slotProps) => {
					var fragment_23 = root_68();
					var node_119 = first_child(fragment_23);
					var consequent_48 = ($$anchor) => {
						Refresh_cw($$anchor, { class: "h-3 w-3 mr-1.5 animate-spin" });
					};
					if_block(node_119, ($$render) => {
						if (get(actionLoading)) $$render(consequent_48);
					});
					next();
					append($$anchor, fragment_23);
				},
				$$slots: { default: true }
			});
		}
		reset(div_125);
		reset(form_1);
		reset(div_117);
		reset(div_116);
		delegated("click", button_10, () => set(showPurchaseReturnModal, false));
		event("submit", form_1, submitPurchaseReturnForm);
		bind_select_value(select_4, () => get(prSupplierId), ($$value) => set(prSupplierId, $$value));
		bind_select_value(select_5, () => get(prDestType), ($$value) => set(prDestType, $$value));
		append($$anchor, div_116);
	};
	if_block(node_108, ($$render) => {
		if (get(showPurchaseReturnModal)) $$render(consequent_49);
	});
	var node_120 = sibling(node_108, 2);
	var consequent_52 = ($$anchor) => {
		var div_126 = root_72();
		var div_127 = child(div_126);
		var div_128 = child(div_127);
		var h3_2 = child(div_128);
		Undo_2(child(h3_2), { class: "h-4.5 w-4.5" });
		next();
		reset(h3_2);
		var button_11 = sibling(h3_2, 2);
		X(child(button_11), { class: "h-4 w-4" });
		reset(button_11);
		reset(div_128);
		var form_2 = sibling(div_128, 2);
		var div_129 = child(form_2);
		var div_130 = child(div_129);
		var select_7 = sibling(child(div_130), 2);
		var option_17 = child(select_7);
		option_17.value = option_17.__value = "Agent";
		var option_18 = sibling(option_17);
		option_18.value = option_18.__value = "Head";
		reset(select_7);
		reset(div_130);
		var div_131 = sibling(div_130, 2);
		var select_8 = sibling(child(div_131), 2);
		var node_123 = child(select_8);
		var consequent_50 = ($$anchor) => {
			var option_19 = root_70();
			var option_19_value = {};
			template_effect(() => {
				if (option_19_value !== (option_19_value = get(srRecipientId))) option_19.value = (option_19.__value = get(srRecipientId)) ?? "";
			});
			append($$anchor, option_19);
		};
		var alternate_7 = ($$anchor) => {
			var fragment_25 = comment();
			each(first_child(fragment_25), 17, () => get(recipientOptions), index, ($$anchor, opt) => {
				var option_20 = root_27();
				var text_94 = child(option_20, true);
				reset(option_20);
				var option_20_value = {};
				template_effect(() => {
					set_text(text_94, get(opt).name);
					if (option_20_value !== (option_20_value = get(opt).id)) option_20.value = (option_20.__value = get(opt).id) ?? "";
				});
				append($$anchor, option_20);
			});
			append($$anchor, fragment_25);
		};
		if_block(node_123, ($$render) => {
			if (get(recipientOptions).length === 0) $$render(consequent_50);
			else $$render(alternate_7, -1);
		});
		reset(select_8);
		reset(div_131);
		var div_132 = sibling(div_131, 2);
		var label_2 = child(div_132);
		var node_125 = sibling(child(label_2), 3);
		{
			let $0 = user_derived(() => get(sd).payableAmount - get(totalSalesReturns));
			MoneyDisplay(node_125, { get amount() {
				return get($0);
			} });
		}
		next();
		reset(label_2);
		var node_126 = sibling(label_2, 2);
		{
			let $0 = user_derived(() => get(sd).payableAmount - get(totalSalesReturns) + .001);
			Input(node_126, {
				id: "sr-amount",
				type: "number",
				step: "0.001",
				min: "0.001",
				get max() {
					return get($0);
				},
				required: true,
				get value() {
					return get(srAmount);
				},
				set value($$value) {
					set(srAmount, $$value, true);
				}
			});
		}
		reset(div_132);
		var div_133 = sibling(div_132, 2);
		var select_9 = sibling(child(div_133), 2);
		var option_21 = child(select_9);
		option_21.value = option_21.__value = "bank";
		var option_22 = sibling(option_21);
		option_22.value = option_22.__value = "account";
		reset(select_9);
		reset(div_133);
		var div_134 = sibling(div_133, 2);
		var select_10 = sibling(child(div_134), 2);
		var option_23 = child(select_10);
		option_23.value = option_23.__value = "";
		each(sibling(option_23), 17, () => get(allAccountsAndBanks), index, ($$anchor, opt) => {
			var option_24 = root_27();
			var text_95 = child(option_24, true);
			reset(option_24);
			var option_24_value = {};
			template_effect(() => {
				set_text(text_95, get(opt).name);
				if (option_24_value !== (option_24_value = get(opt).id)) option_24.value = (option_24.__value = get(opt).id) ?? "";
			});
			append($$anchor, option_24);
		});
		reset(select_10);
		reset(div_134);
		var div_135 = sibling(div_134, 2);
		Input(sibling(child(div_135), 2), {
			id: "sr-reason",
			type: "text",
			required: true,
			placeholder: "Reason for customer refund...",
			get value() {
				return get(srReason);
			},
			set value($$value) {
				set(srReason, $$value, true);
			}
		});
		reset(div_135);
		reset(div_129);
		var div_136 = sibling(div_129, 2);
		var node_129 = child(div_136);
		Button(node_129, {
			type: "button",
			variant: "outline",
			onclick: () => set(showSalesReturnModal, false),
			class: "rounded-xl",
			children: ($$anchor, $$slotProps) => {
				next();
				append($$anchor, text("Cancel"));
			},
			$$slots: { default: true }
		});
		var node_130 = sibling(node_129, 2);
		{
			let $0 = user_derived(() => get(actionLoading) || get(srAmount) <= 0 || !get(srSourceId) || get(srAmount) > get(sd).payableAmount - get(totalSalesReturns) + .001);
			Button(node_130, {
				type: "submit",
				get disabled() {
					return get($0);
				},
				class: "rounded-xl bg-sky-600 text-white font-semibold hover:bg-sky-700",
				children: ($$anchor, $$slotProps) => {
					var fragment_26 = root_71();
					var node_131 = first_child(fragment_26);
					var consequent_51 = ($$anchor) => {
						Refresh_cw($$anchor, { class: "h-3 w-3 mr-1.5 animate-spin" });
					};
					if_block(node_131, ($$render) => {
						if (get(actionLoading)) $$render(consequent_51);
					});
					next();
					append($$anchor, fragment_26);
				},
				$$slots: { default: true }
			});
		}
		reset(div_136);
		reset(form_2);
		reset(div_127);
		reset(div_126);
		delegated("click", button_11, () => set(showSalesReturnModal, false));
		event("submit", form_2, submitSalesReturnForm);
		bind_select_value(select_7, () => get(srRecipientType), ($$value) => set(srRecipientType, $$value));
		bind_select_value(select_8, () => get(srRecipientId), ($$value) => set(srRecipientId, $$value));
		bind_select_value(select_9, () => get(srSourceType), ($$value) => set(srSourceType, $$value));
		bind_select_value(select_10, () => get(srSourceId), ($$value) => set(srSourceId, $$value));
		append($$anchor, div_126);
	};
	if_block(node_120, ($$render) => {
		if (get(showSalesReturnModal)) $$render(consequent_52);
	});
	var node_132 = sibling(node_120, 2);
	ConfirmationDialog(node_132, {
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
	var node_133 = sibling(node_132, 2);
	var consequent_55 = ($$anchor) => {
		var div_137 = root_75();
		var div_138 = child(div_137);
		var div_139 = child(div_138);
		var div_140 = child(div_139);
		Credit_card(child(div_140), { class: "h-5 w-5 text-primary" });
		next(2);
		reset(div_140);
		var button_12 = sibling(div_140, 2);
		X(child(button_12), { class: "h-4 w-4" });
		reset(button_12);
		reset(div_139);
		var form_3 = sibling(div_139, 4);
		var div_141 = child(form_3);
		var node_136 = sibling(child(div_141), 2);
		{
			let $0 = user_derived(() => ["text-xs font-mono", get(refIdModalError) ? "border-red-500 ring-2 ring-red-500/20" : ""].join(" "));
			Input(node_136, {
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
		var node_137 = sibling(node_136, 2);
		var consequent_53 = ($$anchor) => {
			var p_20 = root_73();
			var node_138 = child(p_20);
			Circle_alert(node_138, { class: "h-3.5 w-3.5 shrink-0 text-red-600" });
			var span_56 = sibling(node_138, 2);
			var text_97 = child(span_56, true);
			reset(span_56);
			reset(p_20);
			template_effect(() => set_text(text_97, get(refIdModalError)));
			append($$anchor, p_20);
		};
		if_block(node_137, ($$render) => {
			if (get(refIdModalError)) $$render(consequent_53);
		});
		reset(div_141);
		var div_142 = sibling(div_141, 2);
		var node_139 = child(div_142);
		Button(node_139, {
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
		var node_140 = sibling(node_139, 2);
		{
			let $0 = user_derived(() => get(actionLoading) || !get(onlineReferenceIdVal).trim());
			Button(node_140, {
				type: "submit",
				class: "rounded-xl h-9 text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white",
				get disabled() {
					return get($0);
				},
				children: ($$anchor, $$slotProps) => {
					var fragment_28 = root_74();
					var node_141 = first_child(fragment_28);
					var consequent_54 = ($$anchor) => {
						Refresh_cw($$anchor, { class: "h-3.5 w-3.5 mr-1.5 animate-spin" });
					};
					if_block(node_141, ($$render) => {
						if (get(actionLoading)) $$render(consequent_54);
					});
					next();
					append($$anchor, fragment_28);
				},
				$$slots: { default: true }
			});
		}
		reset(div_142);
		reset(form_3);
		reset(div_138);
		reset(div_137);
		delegated("click", button_12, () => set(showReferenceIdModal, false));
		event("submit", form_3, (e) => {
			e.preventDefault();
			if (!get(onlineReferenceIdVal).trim()) {
				toast.error("Bank Reference ID is required for online payments.");
				return;
			}
			set(targetBookingStatusToApply, "success");
			executeBookingStatusUpdate(get(onlineReferenceIdVal).trim());
		});
		append($$anchor, div_137);
	};
	if_block(node_133, ($$render) => {
		if (get(showReferenceIdModal)) $$render(consequent_55);
	});
	var node_142 = sibling(node_133, 2);
	var consequent_57 = ($$anchor) => {
		var div_143 = root_77();
		var div_144 = child(div_143);
		var div_145 = child(div_144);
		var div_146 = child(div_145);
		Pencil(child(div_146), { class: "h-5 w-5 text-primary" });
		next(2);
		reset(div_146);
		var button_13 = sibling(div_146, 2);
		X(child(button_13), { class: "h-4 w-4" });
		reset(button_13);
		reset(div_145);
		var form_4 = sibling(div_145, 2);
		var div_147 = child(form_4);
		Input(sibling(child(div_147), 2), {
			id: "editGovtAmt",
			type: "number",
			step: "0.001",
			min: "0.001",
			required: true,
			class: "h-9.5 text-xs font-mono",
			get value() {
				return get(editGovtFeeAmount);
			},
			set value($$value) {
				set(editGovtFeeAmount, $$value, true);
			}
		});
		reset(div_147);
		var div_148 = sibling(div_147, 2);
		var select_11 = sibling(child(div_148), 2);
		each(select_11, 21, () => get(suppliersList), index, ($$anchor, sup) => {
			var option_25 = root_27();
			var text_99 = child(option_25);
			reset(option_25);
			var option_25_value = {};
			template_effect(() => {
				set_text(text_99, `${get(sup).name ?? ""} (${get(sup).code ?? ""})`);
				if (option_25_value !== (option_25_value = get(sup).id)) option_25.value = (option_25.__value = get(sup).id) ?? "";
			});
			append($$anchor, option_25);
		});
		reset(select_11);
		reset(div_148);
		var div_149 = sibling(div_148, 2);
		Input(sibling(child(div_149), 2), {
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
		reset(div_149);
		var div_150 = sibling(div_149, 2);
		Input(sibling(child(div_150), 2), {
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
		reset(div_150);
		var div_151 = sibling(div_150, 2);
		var node_148 = child(div_151);
		Button(node_148, {
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
		var node_149 = sibling(node_148, 2);
		{
			let $0 = user_derived(() => get(actionLoading) || get(editGovtFeeAmount) <= 0);
			Button(node_149, {
				type: "submit",
				class: "rounded-xl h-9 text-xs font-semibold bg-primary text-primary-foreground",
				get disabled() {
					return get($0);
				},
				children: ($$anchor, $$slotProps) => {
					var fragment_30 = root_76();
					var node_150 = first_child(fragment_30);
					var consequent_56 = ($$anchor) => {
						Refresh_cw($$anchor, { class: "h-3.5 w-3.5 mr-1.5 animate-spin" });
					};
					if_block(node_150, ($$render) => {
						if (get(actionLoading)) $$render(consequent_56);
					});
					next();
					append($$anchor, fragment_30);
				},
				$$slots: { default: true }
			});
		}
		reset(div_151);
		reset(form_4);
		reset(div_144);
		reset(div_143);
		delegated("click", button_13, () => set(showEditGovtFeeModal, false));
		event("submit", form_4, submitEditGovtFeeForm);
		bind_select_value(select_11, () => get(editGovtFeeSupplierId), ($$value) => set(editGovtFeeSupplierId, $$value));
		append($$anchor, div_143);
	};
	if_block(node_142, ($$render) => {
		if (get(showEditGovtFeeModal)) $$render(consequent_57);
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

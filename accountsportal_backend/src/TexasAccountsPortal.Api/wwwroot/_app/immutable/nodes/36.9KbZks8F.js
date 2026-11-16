import { At as pop, B as comment, C as set_class, Ct as store_get, E as head, F as if_block, G as delegate, It as next, K as delegated, L as set_text, Lt as reset, M as each, N as index, St as setup_stores, V as from_html, W as text, Z as get, _t as state, a as legacy_rest_props, at as template_effect, bt as user_derived, c as spread_props, dt as first_child, ft as sibling, g as set_attribute, ht as set, j as slot, jt as push, k as component, lt as $document, nt as deferred_template_effect, ot as user_effect, pt as proxy, q as event, ut as child, y as bind_select_value, z as append } from "../chunks/D1I-S_GP.js";
import { t as goto } from "../chunks/B6vfk650.js";
import "../chunks/DhaYE-8x.js";
import { t as apiFetch, u as getSalesPortalFileUrl } from "../chunks/BqfDFeIq.js";
import { i as hasRole } from "../chunks/DucHkjHK.js";
import "../chunks/Cr7lFLqy.js";
import { r as toast } from "../chunks/kfZuBygG.js";
import { t as Icon } from "../chunks/DqzbDppW.js";
import { t as Arrow_left } from "../chunks/G9X-yPHo.js";
import { t as Circle_alert } from "../chunks/DamX98Ud.js";
import { t as Clock } from "../chunks/C3FvnIDH.js";
import { t as Coins } from "../chunks/D4NsUhhc.js";
import { t as Credit_card } from "../chunks/rrbQvu0_.js";
import { t as File_text } from "../chunks/B_Q2qo3l.js";
import { t as Package } from "../chunks/Cmb4ydju2.js";
import { t as Printer } from "../chunks/D1bcoM7T2.js";
import { t as Refresh_cw } from "../chunks/BJm1tO_d2.js";
import { t as Send } from "../chunks/6f9frdAN2.js";
import { t as User } from "../chunks/MaYoAE5m.js";
import { t as X } from "../chunks/BVLERAre.js";
import { t as page } from "../chunks/C_UxS893.js";
import { t as Button } from "../chunks/CkghPc3G.js";
import "../chunks/DWcEvSoH.js";
import { t as MoneyDisplay } from "../chunks/CtGP7dt0.js";
import { t as ConfirmationDialog } from "../chunks/CrpE4dYo.js";
import { t as DateDisplay } from "../chunks/DCjxZDOf.js";
import "../chunks/IklAOMd6.js";
import { t as previewDocument } from "../chunks/CuYNT6u3.js";
import { r as getAccounts } from "../chunks/CbDoktlk.js";
import { n as getBanks } from "../chunks/xzaWfZl2.js";
import { t as Input } from "../chunks/jKPNLWsl.js";
import { a as createSalesReturn, d as getSuppliers, i as createPurchaseReturn, o as createSupplierPayment } from "../chunks/DWpaq9kD.js";
import { n as getUsers } from "../chunks/D2QyTqtl.js";
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
var root_6 = from_html(`<button><!> </button>`);
var root_7 = from_html(`<div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Agent Name</span> <span class="font-semibold"> </span></div> <div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Agent ID</span> <span class="font-mono text-muted-foreground"> </span></div>`, 1);
var root_8 = from_html(`<div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Care Of</span> <span class="font-semibold"> </span></div>`);
var root_9 = from_html(`<div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Supplier</span><span> </span></div>`);
var root_10 = from_html(`<div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Route</span> <span class="font-semibold"> </span></div> <div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Payment Method</span> <span class="capitalize"> </span></div> <!>`, 1);
var root_11 = from_html(`<div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Guest Name</span> <span class="font-semibold"> </span></div> <div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Country</span><span> </span></div> <div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Check-In</span> <span><!></span></div> <div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Duration</span><span> </span></div> <div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Order Status</span> <span class="capitalize"> </span></div> <div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Payment Method</span> <span class="capitalize"> </span></div>`, 1);
var root_12 = from_html(`<div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Approval Note</span><span class="text-right max-w-48"> </span></div>`);
var root_13 = from_html(`<div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Visa Package</span> <span class="font-semibold"> </span></div> <!> <!>`, 1);
var root_14 = from_html(`<div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Applicant</span> <span class="font-semibold"> </span></div> <div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Country</span><span> </span></div> <div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Visa Type</span><span> </span></div> <div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Appointment</span> <span><!> </span></div> <div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">VFS App ID</span><span class="font-mono"> </span></div>`, 1);
var root_15 = from_html(`<div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Passenger</span> <span class="font-semibold"> </span></div> <div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Country</span><span> </span></div> <div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Duration</span><span> </span></div> <div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Booking ID</span><span class="font-mono"> </span></div> <div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Holiday App ID</span><span class="font-mono"> </span></div>`, 1);
var root_16 = from_html(`<div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Passenger</span> <span class="font-semibold"> </span></div> <div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Route</span> <span> </span></div> <div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Drop Date/Time</span> <span><!> </span></div> <div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Vehicle</span><span> </span></div>`, 1);
var root_17 = from_html(`<div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Narration</span> <span class="text-right max-w-48"> </span></div>`);
var root_18 = from_html(`<div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Service Name</span> <span class="font-semibold"> </span></div> <div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Customer Name</span> <span> </span></div> <!>`, 1);
var root_19 = from_html(`<div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div class="bg-card border border-border rounded-2xl p-5 space-y-3"><h2 class="text-sm font-bold text-foreground flex items-center gap-2"><!> Client Information</h2> <div class="space-y-2 text-xs"><div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Client Type</span> <span class="font-semibold capitalize"> </span></div> <div class="flex justify-between border-b border-border/40 pb-1.5"><span class="text-muted-foreground">Customer Head</span> <span class="font-semibold"> </span></div> <!> <!></div></div> <div class="bg-card border border-border rounded-2xl p-5 space-y-3"><h2 class="text-sm font-bold text-foreground flex items-center gap-2"><!> Service Details</h2> <div class="space-y-2 text-xs"><!> <!></div></div></div>`);
var root_20 = from_html(`<div class="bg-muted/30 rounded-xl p-4 text-center space-y-1"><p class="text-[10px] text-muted-foreground uppercase font-semibold tracking-wider"> </p> <p><!></p></div>`);
var root_21 = from_html(`<div class="flex justify-between"><span class="text-muted-foreground">Payment Method</span> <span class="capitalize font-semibold"> </span></div>`);
var root_22 = from_html(`<div class="flex justify-between"><span class="text-muted-foreground">Target Bank</span> <span class="font-semibold text-primary"> </span></div>`);
var root_23 = from_html(`<div class="flex justify-between"><span class="text-muted-foreground">In-house</span> <span class="font-semibold"> </span></div>`);
var root_24 = from_html(`<div class="flex justify-between items-center pt-2 border-t border-border/40"><span class="text-muted-foreground">Payment Proof</span> <div class="flex items-center gap-2"><span class="font-mono text-muted-foreground truncate max-w-[150px] sm:max-w-[250px]"> </span> <a target="_blank" rel="noopener noreferrer" class="px-2.5 py-1 text-[11px] font-bold rounded-lg border border-border bg-card hover:bg-muted text-foreground transition-all cursor-pointer inline-flex items-center">View</a> <a download="" class="px-2.5 py-1 text-[11px] font-bold rounded-lg border border-border bg-card hover:bg-muted text-foreground transition-all cursor-pointer inline-flex items-center">Download</a></div></div>`);
var root_25 = from_html(`<option> </option>`);
var root_26 = from_html(`<div class="flex flex-col gap-1.5 pt-2 border-t border-border/40 text-xs"><label for="cashAccountId" class="font-semibold text-muted-foreground">Destination Cash Account</label> <select id="cashAccountId" class="h-9.5 w-full bg-background border border-border rounded-xl px-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground disabled:opacity-50"><option>-- Select Cash Account --</option><!></select></div>`);
var root_27 = from_html(`<div class="flex gap-3 pt-4 border-t border-border/40 justify-end"><button class="px-4 py-2 text-xs font-bold rounded-xl cursor-pointer bg-emerald-600 hover:bg-emerald-700 text-white flex items-center gap-1.5 transition-all shadow-sm disabled:opacity-50"><!> Approve Payment</button> <button class="px-4 py-2 text-xs font-bold rounded-xl cursor-pointer bg-red-600 hover:bg-red-700 text-white flex items-center gap-1.5 transition-all shadow-sm"><!> Reject Payment</button></div>`);
var root_28 = from_html(`<div class="bg-card border border-border rounded-2xl p-5 space-y-4"><h2 class="text-sm font-bold text-foreground flex items-center gap-2"><!> Financial Summary</h2> <div class="grid grid-cols-2 md:grid-cols-4 gap-4"></div> <div class="text-xs space-y-2 pt-2 border-t border-border/40"><!> <!> <!> <!></div> <!> <!></div>`);
var root_29 = from_html(`<tr class="hover:bg-muted/10"><td class="p-3 font-semibold"> </td><td class="p-3 font-mono"><!></td><td class="p-3 font-mono text-muted-foreground"><!></td><td class="p-3 font-mono text-emerald-600"><!></td><td class="p-3"> </td><td class="p-3 text-muted-foreground"> </td></tr>`);
var root_30 = from_html(`<div class="bg-card border border-border rounded-2xl overflow-hidden"><div class="p-4 border-b border-border"><h2 class="text-sm font-bold"> </h2></div> <table class="w-full text-xs text-left"><thead class="bg-muted/30 text-muted-foreground font-semibold border-b border-border"><tr><th class="p-3">Passenger</th><th class="p-3">Payable</th><th class="p-3">Cost</th><th class="p-3">Profit</th><th class="p-3">In-house</th><th class="p-3">Supplier</th></tr></thead><tbody class="divide-y divide-border/60"></tbody></table></div>`);
var root_31 = from_html(`<tr class="hover:bg-muted/10"><td class="p-3 font-semibold"> </td><td class="p-3 font-mono text-muted-foreground"> </td><td class="p-3"> </td><td class="p-3 font-mono"><!></td><td class="p-3 font-mono text-emerald-600"><!></td><td class="p-3"><span> </span></td></tr>`);
var root_32 = from_html(`<div class="bg-card border border-border rounded-2xl overflow-hidden"><div class="p-4 border-b border-border"><h2 class="text-sm font-bold"> </h2></div> <table class="w-full text-xs text-left"><thead class="bg-muted/30 text-muted-foreground font-semibold border-b border-border"><tr><th class="p-3">Name</th><th class="p-3">Passport</th><th class="p-3">Nationality</th><th class="p-3">Payable</th><th class="p-3">Profit</th><th class="p-3">Status</th></tr></thead><tbody class="divide-y divide-border/60"></tbody></table></div>`);
var root_33 = from_html(`<div class="bg-card border border-border rounded-2xl p-12 text-center text-muted-foreground text-xs">No line items for this service type.</div>`);
var root_34 = from_html(`<!> Post Supplier Payment`, 1);
var root_35 = from_html(`<!> Record Purchase Return`, 1);
var root_36 = from_html(`<!> Refund Customer (Sales Return)`, 1);
var root_37 = from_html(`<div class="flex items-start gap-2.5 bg-amber-50 border border-amber-200 text-amber-800 rounded-2xl p-4 text-xs"><!> <div><strong class="font-bold">Booking Completed:</strong> This booking is completed on the Sales Portal. No further payouts or refunds can be processed.</div></div>`);
var root_38 = from_html(`<div class="flex items-start gap-2.5 bg-muted/30 border border-border text-muted-foreground rounded-2xl p-4 text-xs"><!> <div>Supplier refund form is disabled because no approved supplier payments exist for this booking.</div></div>`);
var root_39 = from_html(`<div class="flex items-start gap-2.5 bg-muted/30 border border-border text-muted-foreground rounded-2xl p-4 text-xs"><!> <div>Customer refund form is disabled because no approved purchase refunds have been received from the supplier.</div></div>`);
var root_40 = from_html(`<!> <!>`, 1);
var root_41 = from_html(`<tr class="hover:bg-muted/10 transition-colors"><td class="p-3 font-semibold text-foreground"> </td><td class="p-3 font-mono font-bold text-rose-600"><!></td><td class="p-3 capitalize"> </td><td class="p-3"><span> </span></td><td class="p-3 text-muted-foreground font-mono"> </td><td class="p-3 font-medium text-foreground"> </td><td class="p-3 text-muted-foreground"><!></td></tr>`);
var root_42 = from_html(`<table class="w-full text-xs text-left"><thead class="bg-muted/30 text-muted-foreground font-semibold border-b border-border text-[10px] uppercase tracking-wider"><tr><th class="p-3">Supplier Name & Code</th><th class="p-3">Amount</th><th class="p-3">Method</th><th class="p-3">Status</th><th class="p-3">Reference</th><th class="p-3">Requested By</th><th class="p-3">Date</th></tr></thead><tbody class="divide-y divide-border/60"></tbody></table>`);
var root_43 = from_html(`<div class="p-8 text-center text-muted-foreground text-xs">No supplier payments recorded.</div>`);
var root_44 = from_html(`<tr class="hover:bg-muted/10 transition-colors"><td class="p-3 font-semibold text-foreground"> </td><td class="p-3 font-mono font-bold text-emerald-600"><!></td><td class="p-3 capitalize"> </td><td class="p-3"><span> </span></td><td class="p-3 text-muted-foreground"> </td><td class="p-3 font-medium text-foreground"> </td><td class="p-3 text-muted-foreground"><!></td></tr>`);
var root_45 = from_html(`<table class="w-full text-xs text-left"><thead class="bg-muted/30 text-muted-foreground font-semibold border-b border-border text-[10px] uppercase tracking-wider"><tr><th class="p-3">Supplier Name & Code</th><th class="p-3">Amount</th><th class="p-3">Destination</th><th class="p-3">Status</th><th class="p-3">Reason</th><th class="p-3">Requested By</th><th class="p-3">Date</th></tr></thead><tbody class="divide-y divide-border/60"></tbody></table>`);
var root_46 = from_html(`<div class="p-8 text-center text-muted-foreground text-xs">No purchase refunds received.</div>`);
var root_47 = from_html(`<tr class="hover:bg-muted/10 transition-colors"><td class="p-3 capitalize"> </td><td class="p-3 font-mono font-bold text-sky-600"><!></td><td class="p-3 text-muted-foreground"> </td><td class="p-3"><span> </span></td><td class="p-3 font-medium text-foreground"> </td><td class="p-3 text-muted-foreground"><!></td></tr>`);
var root_48 = from_html(`<table class="w-full text-xs text-left"><thead class="bg-muted/30 text-muted-foreground font-semibold border-b border-border text-[10px] uppercase tracking-wider"><tr><th class="p-3">Recipient</th><th class="p-3">Amount</th><th class="p-3">Reason</th><th class="p-3">Status</th><th class="p-3">Requested By</th><th class="p-3">Date</th></tr></thead><tbody class="divide-y divide-border/60"></tbody></table>`);
var root_49 = from_html(`<div class="p-8 text-center text-muted-foreground text-xs">No client refunds processed.</div>`);
var root_50 = from_html(`<div class="space-y-6"><div class="grid grid-cols-2 lg:grid-cols-4 gap-4"><div class="bg-card border border-border rounded-2xl p-4 space-y-1 shadow-xs"><p class="text-[10px] text-muted-foreground uppercase font-semibold tracking-wider">Expected Cost</p> <p class="text-base font-bold font-mono text-foreground"><!></p></div> <div class="bg-card border border-border rounded-2xl p-4 space-y-1 shadow-xs border-l-4 border-l-rose-500"><p class="text-[10px] text-muted-foreground uppercase font-semibold tracking-wider">Total Settled (Paid)</p> <p class="text-base font-bold font-mono text-rose-600"><!></p></div> <div class="bg-card border border-border rounded-2xl p-4 space-y-1 shadow-xs border-l-4 border-l-emerald-500"><p class="text-[10px] text-muted-foreground uppercase font-semibold tracking-wider">Purchase Returns (Refunds)</p> <p class="text-base font-bold font-mono text-emerald-600"><!></p></div> <div class="bg-card border border-border rounded-2xl p-4 space-y-1 shadow-xs border-l-4 border-l-sky-500"><p class="text-[10px] text-muted-foreground uppercase font-semibold tracking-wider">Sales Returns (Cust Refunds)</p> <p class="text-base font-bold font-mono text-sky-600"><!></p></div></div> <div class="flex flex-wrap gap-2.5 bg-muted/20 p-3 rounded-2xl border border-border/50"><!> <!> <!></div> <!> <div class="bg-card border border-border rounded-2xl overflow-hidden shadow-xs"><div class="p-4 border-b border-border bg-muted/20"><h2 class="text-xs font-bold text-foreground"> </h2></div> <!></div> <div class="bg-card border border-border rounded-2xl overflow-hidden shadow-xs"><div class="p-4 border-b border-border bg-muted/20"><h2 class="text-xs font-bold text-foreground"> </h2></div> <!></div> <div class="bg-card border border-border rounded-2xl overflow-hidden shadow-xs"><div class="p-4 border-b border-border bg-muted/20"><h2 class="text-xs font-bold text-foreground"> </h2></div> <!></div></div>`);
var root_51 = from_html(`<li class="ml-5"><span class="absolute -left-1.5 mt-0.5 h-3 w-3 rounded-full border-2 border-sky-400 bg-card"></span> <div class="text-xs"><p class="font-semibold text-foreground"> </p> <p class="text-muted-foreground"> <!></p></div></li>`);
var root_52 = from_html(`<li class="ml-5"><span class="absolute -left-1.5 mt-0.5 h-3 w-3 rounded-full border-2 border-amber-400 bg-card"></span> <div class="text-xs"><p class="font-semibold text-foreground">Supplier Payment — <!></p> <p class="text-muted-foreground"> <!></p></div></li>`);
var root_53 = from_html(`<li class="ml-5"><span class="absolute -left-1.5 mt-0.5 h-3 w-3 rounded-full border-2 border-emerald-400 bg-card"></span> <div class="text-xs"><p class="font-semibold text-foreground">Purchase Return — <!></p> <p class="text-muted-foreground"> <!></p></div></li>`);
var root_54 = from_html(`<li class="ml-5"><span class="absolute -left-1.5 mt-0.5 h-3 w-3 rounded-full border-2 border-sky-400 bg-card"></span> <div class="text-xs"><p class="font-semibold text-foreground">Sales Return — <!></p> <p class="text-muted-foreground"> <!></p></div></li>`);
var root_55 = from_html(`<div class="bg-card border border-border rounded-2xl p-5 space-y-3"><h2 class="text-sm font-bold flex items-center gap-2"><!> Booking Timeline</h2> <ol class="relative border-l border-border/60 ml-3 space-y-6"><li class="ml-5"><span class="absolute -left-1.5 mt-0.5 h-3 w-3 rounded-full border-2 border-primary bg-card"></span> <div class="text-xs"><p class="font-semibold text-foreground">Booking Created</p> <p class="text-muted-foreground"><!></p></div></li> <!> <!> <!> <!> <li class="ml-5"><span class="absolute -left-1.5 mt-0.5 h-3 w-3 rounded-full border-2 border-emerald-400 bg-card"></span> <div class="text-xs"><p class="font-semibold text-foreground">Last Updated</p> <p class="text-muted-foreground"><!></p></div></li></ol></div>`);
var root_56 = from_html(`<div class="bg-card border border-border rounded-2xl p-4 flex flex-wrap gap-3 items-center"><span> </span> <span class="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide bg-sky-50 text-sky-700 border border-sky-200"> </span> <span class="ml-auto text-xs text-muted-foreground">Created: <!> &nbsp;•&nbsp;
				Updated: <!></span></div> <div class="border-b border-border flex gap-1 overflow-x-auto print:hidden"></div> <!>`, 1);
var root_57 = from_html(`<div class="bg-card border border-border rounded-2xl p-16 text-center text-muted-foreground text-xs">Booking not found.</div>`);
var root_58 = from_html(`<div class="col-span-2 grid grid-cols-2 gap-3 p-3 bg-muted/30 border border-border/80 rounded-xl text-xs"><div class="space-y-0.5"><span class="text-[10px] text-muted-foreground uppercase font-semibold block">Supplier Wallet Balance</span> <span class="text-sm font-bold font-mono text-emerald-600"><!></span></div> <div class="space-y-0.5"><span class="text-[10px] text-muted-foreground uppercase font-semibold block">Credit Wallet (Outstanding)</span> <span class="text-sm font-bold font-mono text-rose-600"><!></span></div></div>`);
var root_59 = from_html(`<div class="space-y-1.5 col-span-2"><label for="pay-source" class="block font-semibold text-foreground"> <span class="text-red-500">*</span></label> <select id="pay-source" class="h-9.5 w-full bg-background border border-border rounded-xl px-2.5 focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground" required=""><option> </option><!></select></div>`);
var root_60 = from_html(`<div class="col-span-2 p-2.5 bg-red-500/10 border border-red-500/30 rounded-xl text-red-600 font-semibold text-[11px] flex items-center gap-1.5"><!> <span> </span></div>`);
var root_61 = from_html(`<!> Post Payment`, 1);
var root_62 = from_html(`<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4"><div class="bg-card border border-border rounded-2xl max-w-lg w-full p-6 shadow-xl space-y-4"><div class="flex items-center justify-between pb-3 border-b border-border/50"><h3 class="text-sm font-bold text-foreground flex items-center gap-1.5"><!> Post Supplier Payment</h3> <button class="p-1 hover:bg-muted rounded-lg text-muted-foreground hover:text-foreground cursor-pointer"><!></button></div> <form class="space-y-4 text-xs"><div class="grid grid-cols-2 gap-4"><div class="space-y-1.5 col-span-2"><label for="pay-supplier" class="block font-semibold text-foreground">Select Supplier <span class="text-red-500">*</span></label> <select id="pay-supplier" class="h-9.5 w-full bg-background border border-border rounded-xl px-2.5 focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground" required=""><option>-- Select Supplier --</option><!></select></div> <!> <div class="space-y-1.5"><label for="pay-amount" class="block font-semibold text-foreground">Payment Amount <span class="text-red-500">*</span></label> <!></div> <div class="space-y-1.5"><label for="pay-method" class="block font-semibold text-foreground">Payment Method <span class="text-red-500">*</span></label> <select id="pay-method" class="h-9.5 w-full bg-background border border-border rounded-xl px-2.5 focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground" required=""><option>Bank Account</option><option>Cash Account</option><option>Supplier Wallet (paid using pre-funded supplier wallet)</option><option>Credit (added to credit wallet of the supplier)</option></select></div> <!> <!> <div class="space-y-1.5 col-span-2"><label for="pay-ref" class="block font-semibold text-foreground">Reference / Cheque Number</label> <!></div> <div class="space-y-1.5 col-span-2"><label for="pay-desc" class="block font-semibold text-foreground">Description / Notes</label> <!></div></div> <div class="flex justify-end gap-2.5 pt-4 border-t border-border/50"><!> <!></div></form></div></div>`);
var root_63 = from_html(`<div class="space-y-1.5 col-span-2"><label for="pr-dest" class="block font-semibold text-foreground">Target Cash/Bank Account <span class="text-red-500">*</span></label> <select id="pr-dest" class="h-9.5 w-full bg-background border border-border rounded-xl px-2.5 focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground" required=""><option>-- Select Destination Account --</option><!></select></div>`);
var root_64 = from_html(`<!> Post Purchase Return`, 1);
var root_65 = from_html(`<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4"><div class="bg-card border border-border rounded-2xl max-w-lg w-full p-6 shadow-xl space-y-4"><div class="flex items-center justify-between pb-3 border-b border-border/50"><h3 class="text-sm font-bold text-foreground flex items-center gap-1.5 text-emerald-600"><!> Record Purchase Return (Supplier Refund)</h3> <button class="p-1 hover:bg-muted rounded-lg text-muted-foreground hover:text-foreground cursor-pointer"><!></button></div> <form class="space-y-4 text-xs"><div class="grid grid-cols-2 gap-4"><div class="space-y-1.5 col-span-2"><label for="pr-supplier" class="block font-semibold text-foreground">Select Supplier <span class="text-red-500">*</span></label> <select id="pr-supplier" class="h-9.5 w-full bg-background border border-border rounded-xl px-2.5 focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground" required=""><option>-- Select Supplier --</option><!></select></div> <div class="space-y-1.5"><label for="pr-amount" class="block font-semibold text-foreground">Refund Amount <span class="text-red-500">*</span> (Max: <!>)</label> <!></div> <div class="space-y-1.5"><label for="pr-dest-type" class="block font-semibold text-foreground">Refund Destination <span class="text-red-500">*</span></label> <select id="pr-dest-type" class="h-9.5 w-full bg-background border border-border rounded-xl px-2.5 focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground" required=""><option>Bank Account</option><option>Cash Account</option><option>Supplier Credit Balance (Virtual Wallet)</option></select></div> <!> <div class="space-y-1.5 col-span-2"><label for="pr-reason" class="block font-semibold text-foreground">Reason / Comments <span class="text-red-500">*</span></label> <!></div></div> <div class="flex justify-end gap-2.5 pt-4 border-t border-border/50"><!> <!></div></form></div></div>`);
var root_66 = from_html(`<option>Loading customers...</option>`);
var root_67 = from_html(`<!> Post Sales Return`, 1);
var root_68 = from_html(`<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4"><div class="bg-card border border-border rounded-2xl max-w-lg w-full p-6 shadow-xl space-y-4"><div class="flex items-center justify-between pb-3 border-b border-border/50"><h3 class="text-sm font-bold text-foreground flex items-center gap-1.5 text-sky-600"><!> Post Sales Return (Customer Refund)</h3> <button class="p-1 hover:bg-muted rounded-lg text-muted-foreground hover:text-foreground cursor-pointer"><!></button></div> <form class="space-y-4 text-xs"><div class="grid grid-cols-2 gap-4"><div class="space-y-1.5"><label for="sr-recipient-type" class="block font-semibold text-foreground">Refund Recipient Type <span class="text-red-500">*</span></label> <select id="sr-recipient-type" class="h-9.5 w-full bg-background border border-border rounded-xl px-2.5 focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground" required=""><option>Agent Wallet</option><option>Corporate Client Head Wallet</option></select></div> <div class="space-y-1.5"><label for="sr-recipient-id" class="block font-semibold text-foreground">Customer Recipient <span class="text-red-500">*</span></label> <select id="sr-recipient-id" class="h-9.5 w-full bg-background border border-border rounded-xl px-2.5 focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground font-semibold" required=""><!></select></div> <div class="space-y-1.5"><label for="sr-amount" class="block font-semibold text-foreground">Refund Amount <span class="text-red-500">*</span> (Max Selling Price: <!>)</label> <!></div> <div class="space-y-1.5"><label for="sr-source-type" class="block font-semibold text-foreground">Source Balance Type <span class="text-red-500">*</span></label> <select id="sr-source-type" class="h-9.5 w-full bg-background border border-border rounded-xl px-2.5 focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground" required=""><option>Bank Account</option><option>Cash Account</option></select></div> <div class="space-y-1.5 col-span-2"><label for="sr-source" class="block font-semibold text-foreground">Source Cash/Bank Account <span class="text-red-500">*</span></label> <select id="sr-source" class="h-9.5 w-full bg-background border border-border rounded-xl px-2.5 focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground" required=""><option>-- Select Source Account --</option><!></select></div> <div class="space-y-1.5 col-span-2"><label for="sr-reason" class="block font-semibold text-foreground">Refund Reason <span class="text-red-500">*</span></label> <!></div></div> <div class="flex justify-end gap-2.5 pt-4 border-t border-border/50"><!> <!></div></form></div></div>`);
var root_69 = from_html(`<p class="text-[11px] font-semibold text-red-600 flex items-center gap-1 mt-1.5 animate-in fade-in duration-150"><!> <span> </span></p>`);
var root_70 = from_html(`<!> Confirm & Approve Payment`, 1);
var root_71 = from_html(`<div class="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-in fade-in duration-200"><div class="bg-card border border-border rounded-2xl p-6 max-w-md w-full shadow-2xl space-y-4"><div class="flex items-center justify-between border-b border-border/40 pb-3"><div class="flex items-center gap-2"><!> <h3 class="text-base font-bold text-foreground">Enter Bank Reference ID</h3></div> <button class="p-1 text-muted-foreground hover:text-foreground rounded-lg transition-colors cursor-pointer"><!></button></div> <p class="text-xs text-muted-foreground leading-relaxed">Please enter the unique Bank / Online Transaction Reference ID for this payment application. Duplicate reference IDs are strictly prohibited and cannot be reused.</p> <form class="space-y-4"><div class="space-y-1.5"><label for="refIdInput" class="text-xs font-semibold text-foreground">Transaction Reference ID *</label> <!> <!></div> <div class="flex items-center justify-end gap-2 pt-3 border-t border-border/40"><!> <!></div></form></div></div>`);
var root_72 = from_html(`<div class="space-y-6 print:space-y-2"><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 print:hidden"><div class="flex items-center gap-3"><!> <div><h1 class="text-xl font-bold text-foreground capitalize"> <span class="font-mono text-primary"> </span></h1> <!></div></div> <div class="flex gap-2"><!> <!></div></div> <!></div>  <!> <!> <!> <!> <!>`, 1);
function _page($$anchor, $$props) {
	push($$props, true);
	const $page = () => store_get(page, "$page", $$stores);
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
			set(systemUsers, await getUsers(), true);
		} catch (err) {
			console.error("Failed to load system users", err);
		}
	}
	function getUserLabel(userId) {
		if (!userId) return "System";
		const u = get(systemUsers).find((user) => Number(user.id) === Number(userId));
		if (u && u.name) return u.name;
		return `User #${userId}`;
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
			set(showPaymentModal, false);
			await fetchDetail();
		} catch (err) {
			toast.error(err.message || "Failed to submit payment.");
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
	function statusClass(status) {
		const s = (status ?? "").toLowerCase();
		if (s === "paid" || s === "success" || s === "approved" || s === "completed") return "bg-emerald-50 text-emerald-700 border border-emerald-200";
		if (s === "pending" || s === "processing" || s === "in progress") return "bg-amber-50 text-amber-700 border border-amber-200";
		return "bg-red-50 text-red-700 border border-red-200";
	}
	const sd = user_derived(() => get(detail)?.salesDetail ?? null);
	const isAgent = user_derived(() => get(sd)?.clientType?.toLowerCase() === "agent");
	const isCashBooking = user_derived(() => get(sd)?.paymentMethod?.toLowerCase() === "cash" || get(sd)?.paymentMode?.toLowerCase() === "cash" || get(serviceType) === "visa" && get(sd)?.applicants?.[0]?.paymentMethod?.toLowerCase() === "cash");
	const displayPaymentMethod = user_derived(() => get(sd)?.paymentMethod || get(serviceType) === "visa" && get(sd)?.applicants?.[0]?.paymentMethod || get(sd)?.paymentMode || "");
	const totalPaid = user_derived(() => get(detail)?.supplierPayments?.filter((p) => p.status.toLowerCase() === "approved")?.reduce((sum, p) => sum + p.amount, 0) ?? 0);
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
	var fragment = root_72();
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
	var consequent_39 = ($$anchor) => {
		var fragment_4 = root_56();
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
		var div_8 = sibling(div_7, 2);
		each(div_8, 21, () => tabs, index, ($$anchor, tab) => {
			var fragment_5 = comment();
			var node_11 = first_child(fragment_5);
			var consequent_3 = ($$anchor) => {
				const IconComp = user_derived(() => get(tab).icon);
				var button = root_6();
				var node_12 = child(button);
				component(node_12, () => get(IconComp), ($$anchor, IconComp_1) => {
					IconComp_1($$anchor, { class: "h-3.5 w-3.5" });
				});
				var text_8 = sibling(node_12);
				reset(button);
				template_effect(() => {
					set_class(button, 1, `flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold border-b-2 transition-colors whitespace-nowrap cursor-pointer
							${get(activeTab) === get(tab).id ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"}`);
					set_text(text_8, ` ${get(tab).label ?? ""}`);
				});
				delegated("click", button, () => set(activeTab, get(tab).id, true));
				append($$anchor, button);
			};
			if_block(node_11, ($$render) => {
				if (get(tab).id !== "items" || get(serviceType) === "flights" || get(serviceType) === "visa") $$render(consequent_3);
			});
			append($$anchor, fragment_5);
		});
		reset(div_8);
		var node_13 = sibling(div_8, 2);
		var consequent_18 = ($$anchor) => {
			var div_9 = root_19();
			var div_10 = child(div_9);
			var h2 = child(div_10);
			User(child(h2), { class: "h-4 w-4 text-primary" });
			next();
			reset(h2);
			var div_11 = sibling(h2, 2);
			var div_12 = child(div_11);
			var span_5 = sibling(child(div_12), 2);
			var text_9 = child(span_5, true);
			reset(span_5);
			reset(div_12);
			var div_13 = sibling(div_12, 2);
			var span_6 = sibling(child(div_13), 2);
			var text_10 = child(span_6, true);
			reset(span_6);
			reset(div_13);
			var node_15 = sibling(div_13, 2);
			var consequent_4 = ($$anchor) => {
				var fragment_6 = root_7();
				var div_14 = first_child(fragment_6);
				var span_7 = sibling(child(div_14), 2);
				var text_11 = child(span_7, true);
				reset(span_7);
				reset(div_14);
				var div_15 = sibling(div_14, 2);
				var span_8 = sibling(child(div_15), 2);
				var text_12 = child(span_8);
				reset(span_8);
				reset(div_15);
				template_effect(() => {
					set_text(text_11, get(sd).agent ?? "—");
					set_text(text_12, `#${get(sd).agentId ?? "—" ?? ""}`);
				});
				append($$anchor, fragment_6);
			};
			if_block(node_15, ($$render) => {
				if (get(isAgent)) $$render(consequent_4);
			});
			var node_16 = sibling(node_15, 2);
			var consequent_5 = ($$anchor) => {
				var div_16 = root_8();
				var span_9 = sibling(child(div_16), 2);
				var text_13 = child(span_9, true);
				reset(span_9);
				reset(div_16);
				template_effect(() => set_text(text_13, get(sd).careOf));
				append($$anchor, div_16);
			};
			if_block(node_16, ($$render) => {
				if (get(sd).careOf) $$render(consequent_5);
			});
			reset(div_11);
			reset(div_10);
			var div_17 = sibling(div_10, 2);
			var h2_1 = child(div_17);
			Package(child(h2_1), { class: "h-4 w-4 text-primary" });
			next();
			reset(h2_1);
			var div_18 = sibling(h2_1, 2);
			var node_18 = child(div_18);
			var consequent_7 = ($$anchor) => {
				var fragment_7 = root_10();
				var div_19 = first_child(fragment_7);
				var span_10 = sibling(child(div_19), 2);
				var text_14 = child(span_10);
				reset(span_10);
				reset(div_19);
				var div_20 = sibling(div_19, 2);
				var span_11 = sibling(child(div_20), 2);
				var text_15 = child(span_11, true);
				reset(span_11);
				reset(div_20);
				var node_19 = sibling(div_20, 2);
				var consequent_6 = ($$anchor) => {
					var div_21 = root_9();
					var span_12 = sibling(child(div_21));
					var text_16 = child(span_12, true);
					reset(span_12);
					reset(div_21);
					template_effect(() => set_text(text_16, get(sd).supplier));
					append($$anchor, div_21);
				};
				if_block(node_19, ($$render) => {
					if (get(sd).supplier) $$render(consequent_6);
				});
				template_effect(() => {
					set_text(text_14, `${get(sd).fromLocation ?? ""} → ${get(sd).toLocation ?? ""}`);
					set_text(text_15, get(sd).paymentMethod);
				});
				append($$anchor, fragment_7);
			};
			var consequent_8 = ($$anchor) => {
				var fragment_8 = root_11();
				var div_22 = first_child(fragment_8);
				var span_13 = sibling(child(div_22), 2);
				var text_17 = child(span_13);
				reset(span_13);
				reset(div_22);
				var div_23 = sibling(div_22, 2);
				var span_14 = sibling(child(div_23));
				var text_18 = child(span_14, true);
				reset(span_14);
				reset(div_23);
				var div_24 = sibling(div_23, 2);
				var span_15 = sibling(child(div_24), 2);
				DateDisplay(child(span_15), { get value() {
					return get(sd).checkInDate;
				} });
				reset(span_15);
				reset(div_24);
				var div_25 = sibling(div_24, 2);
				var span_16 = sibling(child(div_25));
				var text_19 = child(span_16);
				reset(span_16);
				reset(div_25);
				var div_26 = sibling(div_25, 2);
				var span_17 = sibling(child(div_26), 2);
				var text_20 = child(span_17, true);
				reset(span_17);
				reset(div_26);
				var div_27 = sibling(div_26, 2);
				var span_18 = sibling(child(div_27), 2);
				var text_21 = child(span_18, true);
				reset(span_18);
				reset(div_27);
				template_effect(() => {
					set_text(text_17, `${get(sd).prefix ? get(sd).prefix + " " : ""}${get(sd).guestName ?? ""}`);
					set_text(text_18, get(sd).country);
					set_text(text_19, `${get(sd).days ?? ""} days`);
					set_text(text_20, get(sd).orderStatus);
					set_text(text_21, get(sd).paymentMethod);
				});
				append($$anchor, fragment_8);
			};
			var consequent_11 = ($$anchor) => {
				var fragment_9 = root_13();
				var div_28 = first_child(fragment_9);
				var span_19 = sibling(child(div_28), 2);
				var text_22 = child(span_19, true);
				reset(span_19);
				reset(div_28);
				var node_21 = sibling(div_28, 2);
				var consequent_9 = ($$anchor) => {
					var div_29 = root_9();
					var span_20 = sibling(child(div_29));
					var text_23 = child(span_20, true);
					reset(span_20);
					reset(div_29);
					template_effect(() => set_text(text_23, get(sd).supplierName));
					append($$anchor, div_29);
				};
				if_block(node_21, ($$render) => {
					if (get(sd).supplierName) $$render(consequent_9);
				});
				var node_22 = sibling(node_21, 2);
				var consequent_10 = ($$anchor) => {
					var div_30 = root_12();
					var span_21 = sibling(child(div_30));
					var text_24 = child(span_21, true);
					reset(span_21);
					reset(div_30);
					template_effect(() => set_text(text_24, get(sd).approvalNote));
					append($$anchor, div_30);
				};
				if_block(node_22, ($$render) => {
					if (get(sd).approvalNote) $$render(consequent_10);
				});
				template_effect(() => set_text(text_22, get(sd).visaPackName));
				append($$anchor, fragment_9);
			};
			var consequent_12 = ($$anchor) => {
				var fragment_10 = root_14();
				var div_31 = first_child(fragment_10);
				var span_22 = sibling(child(div_31), 2);
				var text_25 = child(span_22);
				reset(span_22);
				reset(div_31);
				var div_32 = sibling(div_31, 2);
				var span_23 = sibling(child(div_32));
				var text_26 = child(span_23, true);
				reset(span_23);
				reset(div_32);
				var div_33 = sibling(div_32, 2);
				var span_24 = sibling(child(div_33));
				var text_27 = child(span_24, true);
				reset(span_24);
				reset(div_33);
				var div_34 = sibling(div_33, 2);
				var span_25 = sibling(child(div_34), 2);
				var node_23 = child(span_25);
				DateDisplay(node_23, { get value() {
					return get(sd).appointmentDate;
				} });
				var text_28 = sibling(node_23);
				reset(span_25);
				reset(div_34);
				var div_35 = sibling(div_34, 2);
				var span_26 = sibling(child(div_35));
				var text_29 = child(span_26, true);
				reset(span_26);
				reset(div_35);
				template_effect(() => {
					set_text(text_25, `${get(sd).prefix ? get(sd).prefix + " " : ""}${get(sd).name ?? ""}`);
					set_text(text_26, get(sd).country);
					set_text(text_27, get(sd).visaType);
					set_text(text_28, ` ${get(sd).appointmentTime ?? ""}`);
					set_text(text_29, get(sd).vfsAppId);
				});
				append($$anchor, fragment_10);
			};
			var consequent_13 = ($$anchor) => {
				var fragment_11 = root_15();
				var div_36 = first_child(fragment_11);
				var span_27 = sibling(child(div_36), 2);
				var text_30 = child(span_27);
				reset(span_27);
				reset(div_36);
				var div_37 = sibling(div_36, 2);
				var span_28 = sibling(child(div_37));
				var text_31 = child(span_28, true);
				reset(span_28);
				reset(div_37);
				var div_38 = sibling(div_37, 2);
				var span_29 = sibling(child(div_38));
				var text_32 = child(span_29);
				reset(span_29);
				reset(div_38);
				var div_39 = sibling(div_38, 2);
				var span_30 = sibling(child(div_39));
				var text_33 = child(span_30, true);
				reset(span_30);
				reset(div_39);
				var div_40 = sibling(div_39, 2);
				var span_31 = sibling(child(div_40));
				var text_34 = child(span_31, true);
				reset(span_31);
				reset(div_40);
				template_effect(() => {
					set_text(text_30, `${get(sd).prefix ? get(sd).prefix + " " : ""}${get(sd).passengerName ?? ""}`);
					set_text(text_31, get(sd).country);
					set_text(text_32, `${get(sd).days ?? ""} days`);
					set_text(text_33, get(sd).bookingId);
					set_text(text_34, get(sd).holidayAppId);
				});
				append($$anchor, fragment_11);
			};
			var consequent_14 = ($$anchor) => {
				var fragment_12 = root_16();
				var div_41 = first_child(fragment_12);
				var span_32 = sibling(child(div_41), 2);
				var text_35 = child(span_32);
				reset(span_32);
				reset(div_41);
				var div_42 = sibling(div_41, 2);
				var span_33 = sibling(child(div_42), 2);
				var text_36 = child(span_33);
				reset(span_33);
				reset(div_42);
				var div_43 = sibling(div_42, 2);
				var span_34 = sibling(child(div_43), 2);
				var node_24 = child(span_34);
				DateDisplay(node_24, { get value() {
					return get(sd).dropDate;
				} });
				var text_37 = sibling(node_24);
				reset(span_34);
				reset(div_43);
				var div_44 = sibling(div_43, 2);
				var span_35 = sibling(child(div_44));
				var text_38 = child(span_35, true);
				reset(span_35);
				reset(div_44);
				template_effect(() => {
					set_text(text_35, `${get(sd).prefix ? get(sd).prefix + " " : ""}${get(sd).name ?? ""}`);
					set_text(text_36, `${get(sd).pickup ?? ""} → ${get(sd).drop ?? ""}`);
					set_text(text_37, ` ${get(sd).dropTime ?? ""}`);
					set_text(text_38, get(sd).vehicle ?? "—");
				});
				append($$anchor, fragment_12);
			};
			var consequent_16 = ($$anchor) => {
				var fragment_13 = root_18();
				var div_45 = first_child(fragment_13);
				var span_36 = sibling(child(div_45), 2);
				var text_39 = child(span_36, true);
				reset(span_36);
				reset(div_45);
				var div_46 = sibling(div_45, 2);
				var span_37 = sibling(child(div_46), 2);
				var text_40 = child(span_37);
				reset(span_37);
				reset(div_46);
				var node_25 = sibling(div_46, 2);
				var consequent_15 = ($$anchor) => {
					var div_47 = root_17();
					var span_38 = sibling(child(div_47), 2);
					var text_41 = child(span_38, true);
					reset(span_38);
					reset(div_47);
					template_effect(() => set_text(text_41, get(sd).narration));
					append($$anchor, div_47);
				};
				if_block(node_25, ($$render) => {
					if (get(sd).narration) $$render(consequent_15);
				});
				template_effect(() => {
					set_text(text_39, get(sd).serviceName);
					set_text(text_40, `${get(sd).prefix ? get(sd).prefix + " " : ""}${get(sd).name ?? ""}`);
				});
				append($$anchor, fragment_13);
			};
			if_block(node_18, ($$render) => {
				if (get(serviceType) === "flights") $$render(consequent_7);
				else if (get(serviceType) === "hotels") $$render(consequent_8, 1);
				else if (get(serviceType) === "visa") $$render(consequent_11, 2);
				else if (get(serviceType) === "vfs") $$render(consequent_12, 3);
				else if (get(serviceType) === "holiday") $$render(consequent_13, 4);
				else if (get(serviceType) === "transportation") $$render(consequent_14, 5);
				else if (get(serviceType) === "other-services") $$render(consequent_16, 6);
			});
			var node_26 = sibling(node_18, 2);
			var consequent_17 = ($$anchor) => {
				var div_48 = root_9();
				var span_39 = sibling(child(div_48));
				var text_42 = child(span_39, true);
				reset(span_39);
				reset(div_48);
				template_effect(() => set_text(text_42, get(sd).supplierName));
				append($$anchor, div_48);
			};
			if_block(node_26, ($$render) => {
				if (get(sd).supplierName && get(serviceType) !== "visa") $$render(consequent_17);
			});
			reset(div_18);
			reset(div_17);
			reset(div_9);
			template_effect(() => {
				set_text(text_9, get(sd).clientType);
				set_text(text_10, get(sd).headName ?? "—");
			});
			append($$anchor, div_9);
		};
		var consequent_27 = ($$anchor) => {
			var div_49 = root_28();
			var h2_2 = child(div_49);
			Credit_card(child(h2_2), { class: "h-4 w-4 text-primary" });
			next();
			reset(h2_2);
			var div_50 = sibling(h2_2, 2);
			each(div_50, 21, () => [
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
				var div_51 = root_20();
				var p_2 = child(div_51);
				var text_43 = child(p_2, true);
				reset(p_2);
				var p_3 = sibling(p_2, 2);
				MoneyDisplay(child(p_3), { get amount() {
					return get(item).value;
				} });
				reset(p_3);
				reset(div_51);
				template_effect(() => {
					set_text(text_43, get(item).label);
					set_class(p_3, 1, `text-lg font-bold ${get(item).cls ?? ""} font-mono`);
				});
				append($$anchor, div_51);
			});
			reset(div_50);
			var div_52 = sibling(div_50, 2);
			var node_29 = child(div_52);
			var consequent_19 = ($$anchor) => {
				var div_53 = root_21();
				var span_40 = sibling(child(div_53), 2);
				var text_44 = child(span_40, true);
				reset(span_40);
				reset(div_53);
				template_effect(() => set_text(text_44, get(displayPaymentMethod)));
				append($$anchor, div_53);
			};
			if_block(node_29, ($$render) => {
				if (get(displayPaymentMethod)) $$render(consequent_19);
			});
			var node_30 = sibling(node_29, 2);
			var consequent_20 = ($$anchor) => {
				var div_54 = root_22();
				var span_41 = sibling(child(div_54), 2);
				var text_45 = child(span_41, true);
				reset(span_41);
				reset(div_54);
				template_effect(() => set_text(text_45, get(sd).bankName || get(sd).applicants[0]?.bankName));
				append($$anchor, div_54);
			};
			if_block(node_30, ($$render) => {
				if (get(sd).bankName || get(sd).applicants && get(sd).applicants.length > 0 && get(sd).applicants[0]?.bankName) $$render(consequent_20);
			});
			var node_31 = sibling(node_30, 2);
			var consequent_21 = ($$anchor) => {
				var div_55 = root_23();
				var span_42 = sibling(child(div_55), 2);
				var text_46 = child(span_42, true);
				reset(span_42);
				reset(div_55);
				template_effect(() => set_text(text_46, get(sd).isInhouse ? "Yes" : "No"));
				append($$anchor, div_55);
			};
			if_block(node_31, ($$render) => {
				if (get(sd).isInhouse !== void 0) $$render(consequent_21);
			});
			var node_32 = sibling(node_31, 2);
			var consequent_22 = ($$anchor) => {
				var div_56 = root_24();
				var div_57 = sibling(child(div_56), 2);
				var span_43 = child(div_57);
				var text_47 = child(span_43, true);
				reset(span_43);
				var a_1 = sibling(span_43, 2);
				var a_2 = sibling(a_1, 2);
				reset(div_57);
				reset(div_56);
				template_effect(($0, $1, $2) => {
					set_attribute(span_43, "title", get(sd).paymentProof);
					set_text(text_47, $0);
					set_attribute(a_1, "href", $1);
					set_attribute(a_2, "href", $2);
				}, [
					() => get(sd).paymentProof.split("/").pop(),
					() => getSalesPortalFileUrl(get(sd).paymentProof),
					() => getSalesPortalFileUrl(get(sd).paymentProof)
				]);
				append($$anchor, div_56);
			};
			if_block(node_32, ($$render) => {
				if (get(sd).paymentProof) $$render(consequent_22);
			});
			reset(div_52);
			var node_33 = sibling(div_52, 2);
			var consequent_23 = ($$anchor) => {
				var div_58 = root_26();
				var select = sibling(child(div_58), 2);
				var option = child(select);
				option.value = option.__value = "";
				each(sibling(option), 17, () => get(cashAccounts), index, ($$anchor, acc) => {
					var option_1 = root_25();
					var text_48 = child(option_1);
					reset(option_1);
					var option_1_value = {};
					template_effect(($0, $1) => {
						set_text(text_48, `${get(acc).name ?? ""} (Bal: ${$0 ?? ""} BHD)`);
						if (option_1_value !== (option_1_value = $1)) option_1.value = (option_1.__value = $1) ?? "";
					}, [() => get(acc).currentBalance.toFixed(3), () => String(get(acc).id)]);
					append($$anchor, option_1);
				});
				reset(select);
				reset(div_58);
				template_effect(() => select.disabled = get(actionLoading));
				bind_select_value(select, () => get(selectedCashAccountIdVal), ($$value) => set(selectedCashAccountIdVal, $$value));
				append($$anchor, div_58);
			};
			var d = user_derived(() => get(sd).paymentStatus?.toLowerCase() === "pending" && get(isCashBooking));
			if_block(node_33, ($$render) => {
				if (get(d)) $$render(consequent_23);
			});
			var node_35 = sibling(node_33, 2);
			var consequent_26 = ($$anchor) => {
				var div_59 = root_27();
				var button_1 = child(div_59);
				var node_36 = child(button_1);
				var consequent_24 = ($$anchor) => {
					Refresh_cw($$anchor, { class: "h-3.5 w-3.5 animate-spin" });
				};
				if_block(node_36, ($$render) => {
					if (get(actionLoading)) $$render(consequent_24);
				});
				next();
				reset(button_1);
				var button_2 = sibling(button_1, 2);
				var node_37 = child(button_2);
				var consequent_25 = ($$anchor) => {
					Refresh_cw($$anchor, { class: "h-3.5 w-3.5 animate-spin" });
				};
				if_block(node_37, ($$render) => {
					if (get(actionLoading)) $$render(consequent_25);
				});
				next();
				reset(button_2);
				reset(div_59);
				template_effect(() => {
					button_1.disabled = get(actionLoading) || get(isCashBooking) && !get(selectedCashAccountIdVal);
					button_2.disabled = get(actionLoading);
				});
				delegated("click", button_1, () => requestStatusChange("success"));
				delegated("click", button_2, () => requestStatusChange("failed"));
				append($$anchor, div_59);
			};
			var d_1 = user_derived(() => get(sd).paymentStatus?.toLowerCase() === "pending");
			if_block(node_35, ($$render) => {
				if (get(d_1)) $$render(consequent_26);
			});
			reset(div_49);
			append($$anchor, div_49);
		};
		var consequent_30 = ($$anchor) => {
			var fragment_16 = comment();
			var node_38 = first_child(fragment_16);
			var consequent_28 = ($$anchor) => {
				var div_60 = root_30();
				var div_61 = child(div_60);
				var h2_3 = child(div_61);
				var text_49 = child(h2_3);
				reset(h2_3);
				reset(div_61);
				var table = sibling(div_61, 2);
				var tbody = sibling(child(table));
				each(tbody, 21, () => get(sd).passengers, index, ($$anchor, p) => {
					var tr = root_29();
					var td = child(tr);
					var text_50 = child(td);
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
					var text_51 = child(td_4, true);
					reset(td_4);
					var td_5 = sibling(td_4);
					var text_52 = child(td_5, true);
					reset(td_5);
					reset(tr);
					template_effect(() => {
						set_text(text_50, `${get(p).prefix ? get(p).prefix + " " : ""}${get(p).passengerName ?? ""}`);
						set_text(text_51, get(p).isInhouse ? "✓" : "—");
						set_text(text_52, get(p).supplierName ?? "—");
					});
					append($$anchor, tr);
				});
				reset(tbody);
				reset(table);
				reset(div_60);
				template_effect(() => set_text(text_49, `Passengers (${get(sd).passengers.length ?? ""})`));
				append($$anchor, div_60);
			};
			var consequent_29 = ($$anchor) => {
				var div_62 = root_32();
				var div_63 = child(div_62);
				var h2_4 = child(div_63);
				var text_53 = child(h2_4);
				reset(h2_4);
				reset(div_63);
				var table_1 = sibling(div_63, 2);
				var tbody_1 = sibling(child(table_1));
				each(tbody_1, 21, () => get(sd).applicants, index, ($$anchor, a) => {
					var tr_1 = root_31();
					var td_6 = child(tr_1);
					var text_54 = child(td_6);
					reset(td_6);
					var td_7 = sibling(td_6);
					var text_55 = child(td_7, true);
					reset(td_7);
					var td_8 = sibling(td_7);
					var text_56 = child(td_8, true);
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
					var span_44 = child(td_11);
					var text_57 = child(span_44, true);
					reset(span_44);
					reset(td_11);
					reset(tr_1);
					template_effect(($0) => {
						set_text(text_54, `${get(a).prefix ? get(a).prefix + " " : ""}${get(a).fName ?? ""} ${get(a).lName ?? ""}`);
						set_text(text_55, get(a).passportNo);
						set_text(text_56, get(a).nationality);
						set_class(span_44, 1, `inline-flex px-2 py-0.5 rounded-full text-[9px] font-bold ${$0 ?? ""}`);
						set_text(text_57, get(a).paymentStatus);
					}, [() => statusClass(get(a).paymentStatus)]);
					append($$anchor, tr_1);
				});
				reset(tbody_1);
				reset(table_1);
				reset(div_62);
				template_effect(() => set_text(text_53, `Applicants (${get(sd).applicants.length ?? ""})`));
				append($$anchor, div_62);
			};
			var alternate = ($$anchor) => {
				append($$anchor, root_33());
			};
			if_block(node_38, ($$render) => {
				if (get(serviceType) === "flights" && get(sd).passengers?.length) $$render(consequent_28);
				else if (get(serviceType) === "visa" && get(sd).applicants?.length) $$render(consequent_29, 1);
				else $$render(alternate, -1);
			});
			append($$anchor, fragment_16);
		};
		var consequent_37 = ($$anchor) => {
			var div_65 = root_50();
			var div_66 = child(div_65);
			var div_67 = child(div_66);
			var p_4 = sibling(child(div_67), 2);
			var node_44 = child(p_4);
			{
				let $0 = user_derived(() => get(sd).expectedSupplierCost ?? 0);
				MoneyDisplay(node_44, { get amount() {
					return get($0);
				} });
			}
			reset(p_4);
			reset(div_67);
			var div_68 = sibling(div_67, 2);
			var p_5 = sibling(child(div_68), 2);
			MoneyDisplay(child(p_5), { get amount() {
				return get(totalPaid);
			} });
			reset(p_5);
			reset(div_68);
			var div_69 = sibling(div_68, 2);
			var p_6 = sibling(child(div_69), 2);
			MoneyDisplay(child(p_6), { get amount() {
				return get(totalPurchaseReturns);
			} });
			reset(p_6);
			reset(div_69);
			var div_70 = sibling(div_69, 2);
			var p_7 = sibling(child(div_70), 2);
			MoneyDisplay(child(p_7), { get amount() {
				return get(totalSalesReturns);
			} });
			reset(p_7);
			reset(div_70);
			reset(div_66);
			var div_71 = sibling(div_66, 2);
			var node_48 = child(div_71);
			{
				let $0 = user_derived(() => !get(canPay));
				Button(node_48, {
					onclick: openPaymentForm,
					get disabled() {
						return get($0);
					},
					class: "h-8.5 rounded-xl flex items-center gap-1.5 text-xs font-semibold cursor-pointer",
					children: ($$anchor, $$slotProps) => {
						var fragment_17 = root_34();
						Coins(first_child(fragment_17), { class: "h-4 w-4" });
						next();
						append($$anchor, fragment_17);
					},
					$$slots: { default: true }
				});
			}
			var node_50 = sibling(node_48, 2);
			{
				let $0 = user_derived(() => !get(canPurchaseReturn));
				Button(node_50, {
					onclick: openPurchaseReturnForm,
					get disabled() {
						return get($0);
					},
					variant: "outline",
					class: "h-8.5 rounded-xl flex items-center gap-1.5 text-xs font-semibold cursor-pointer border-emerald-200 text-emerald-700 hover:bg-emerald-50",
					children: ($$anchor, $$slotProps) => {
						var fragment_18 = root_35();
						Undo_2(first_child(fragment_18), { class: "h-4 w-4" });
						next();
						append($$anchor, fragment_18);
					},
					$$slots: { default: true }
				});
			}
			var node_52 = sibling(node_50, 2);
			{
				let $0 = user_derived(() => !get(canSalesReturn));
				Button(node_52, {
					onclick: openSalesReturnForm,
					get disabled() {
						return get($0);
					},
					variant: "outline",
					class: "h-8.5 rounded-xl flex items-center gap-1.5 text-xs font-semibold cursor-pointer border-sky-200 text-sky-700 hover:bg-sky-50",
					children: ($$anchor, $$slotProps) => {
						var fragment_19 = root_36();
						Undo_2(first_child(fragment_19), { class: "h-4 w-4" });
						next();
						append($$anchor, fragment_19);
					},
					$$slots: { default: true }
				});
			}
			reset(div_71);
			var node_54 = sibling(div_71, 2);
			var consequent_31 = ($$anchor) => {
				var div_72 = root_37();
				Circle_alert(child(div_72), { class: "h-4 w-4 shrink-0 mt-0.5 text-amber-600" });
				next(2);
				reset(div_72);
				append($$anchor, div_72);
			};
			var d_2 = user_derived(() => get(sd).processingStatus?.toLowerCase() === "completed");
			var alternate_1 = ($$anchor) => {
				var fragment_20 = root_40();
				var node_56 = first_child(fragment_20);
				var consequent_32 = ($$anchor) => {
					var div_73 = root_38();
					Circle_alert(child(div_73), { class: "h-4 w-4 shrink-0 mt-0.5" });
					next(2);
					reset(div_73);
					append($$anchor, div_73);
				};
				if_block(node_56, ($$render) => {
					if (!get(canPurchaseReturn)) $$render(consequent_32);
				});
				var node_58 = sibling(node_56, 2);
				var consequent_33 = ($$anchor) => {
					var div_74 = root_39();
					Circle_alert(child(div_74), { class: "h-4 w-4 shrink-0 mt-0.5" });
					next(2);
					reset(div_74);
					append($$anchor, div_74);
				};
				if_block(node_58, ($$render) => {
					if (!get(canSalesReturn)) $$render(consequent_33);
				});
				append($$anchor, fragment_20);
			};
			if_block(node_54, ($$render) => {
				if (get(d_2)) $$render(consequent_31);
				else $$render(alternate_1, -1);
			});
			var div_75 = sibling(node_54, 2);
			var div_76 = child(div_75);
			var h2_5 = child(div_76);
			var text_58 = child(h2_5);
			reset(h2_5);
			reset(div_76);
			var node_60 = sibling(div_76, 2);
			var consequent_34 = ($$anchor) => {
				var table_2 = root_42();
				var tbody_2 = sibling(child(table_2));
				each(tbody_2, 21, () => get(detail).supplierPayments, index, ($$anchor, sp) => {
					var tr_2 = root_41();
					var td_12 = child(tr_2);
					var text_59 = child(td_12, true);
					reset(td_12);
					var td_13 = sibling(td_12);
					MoneyDisplay(child(td_13), { get amount() {
						return get(sp).amount;
					} });
					reset(td_13);
					var td_14 = sibling(td_13);
					var text_60 = child(td_14, true);
					reset(td_14);
					var td_15 = sibling(td_14);
					var span_45 = child(td_15);
					var text_61 = child(span_45, true);
					reset(span_45);
					reset(td_15);
					var td_16 = sibling(td_15);
					var text_62 = child(td_16, true);
					reset(td_16);
					var td_17 = sibling(td_16);
					var text_63 = child(td_17, true);
					reset(td_17);
					var td_18 = sibling(td_17);
					DateDisplay(child(td_18), { get value() {
						return get(sp).requestedAt;
					} });
					reset(td_18);
					reset(tr_2);
					template_effect(($0, $1, $2) => {
						set_text(text_59, $0);
						set_text(text_60, get(sp).paymentMethod);
						set_class(span_45, 1, `inline-flex px-2 py-0.5 rounded-full text-[9px] font-bold ${$1 ?? ""}`);
						set_text(text_61, get(sp).status);
						set_text(text_62, get(sp).referenceNumber ?? "—");
						set_text(text_63, $2);
					}, [
						() => getSupplierLabel(get(sp).supplierId),
						() => statusClass(get(sp).status),
						() => getUserLabel(get(sp).requestedByUserId)
					]);
					append($$anchor, tr_2);
				});
				reset(tbody_2);
				reset(table_2);
				append($$anchor, table_2);
			};
			var alternate_2 = ($$anchor) => {
				append($$anchor, root_43());
			};
			if_block(node_60, ($$render) => {
				if (get(detail).supplierPayments?.length) $$render(consequent_34);
				else $$render(alternate_2, -1);
			});
			reset(div_75);
			var div_78 = sibling(div_75, 2);
			var div_79 = child(div_78);
			var h2_6 = child(div_79);
			var text_64 = child(h2_6);
			reset(h2_6);
			reset(div_79);
			var node_63 = sibling(div_79, 2);
			var consequent_35 = ($$anchor) => {
				var table_3 = root_45();
				var tbody_3 = sibling(child(table_3));
				each(tbody_3, 21, () => get(detail).purchaseReturns, index, ($$anchor, pr) => {
					var tr_3 = root_44();
					var td_19 = child(tr_3);
					var text_65 = child(td_19, true);
					reset(td_19);
					var td_20 = sibling(td_19);
					MoneyDisplay(child(td_20), { get amount() {
						return get(pr).amount;
					} });
					reset(td_20);
					var td_21 = sibling(td_20);
					var text_66 = child(td_21, true);
					reset(td_21);
					var td_22 = sibling(td_21);
					var span_46 = child(td_22);
					var text_67 = child(span_46, true);
					reset(span_46);
					reset(td_22);
					var td_23 = sibling(td_22);
					var text_68 = child(td_23, true);
					reset(td_23);
					var td_24 = sibling(td_23);
					var text_69 = child(td_24, true);
					reset(td_24);
					var td_25 = sibling(td_24);
					DateDisplay(child(td_25), { get value() {
						return get(pr).requestedAt;
					} });
					reset(td_25);
					reset(tr_3);
					template_effect(($0, $1, $2) => {
						set_text(text_65, $0);
						set_text(text_66, get(pr).destinationType);
						set_class(span_46, 1, `inline-flex px-2 py-0.5 rounded-full text-[9px] font-bold ${$1 ?? ""}`);
						set_text(text_67, get(pr).status);
						set_text(text_68, get(pr).reason);
						set_text(text_69, $2);
					}, [
						() => getSupplierLabel(get(pr).supplierId),
						() => statusClass(get(pr).status),
						() => getUserLabel(get(pr).requestedByUserId)
					]);
					append($$anchor, tr_3);
				});
				reset(tbody_3);
				reset(table_3);
				append($$anchor, table_3);
			};
			var alternate_3 = ($$anchor) => {
				append($$anchor, root_46());
			};
			if_block(node_63, ($$render) => {
				if (get(detail).purchaseReturns?.length) $$render(consequent_35);
				else $$render(alternate_3, -1);
			});
			reset(div_78);
			var div_81 = sibling(div_78, 2);
			var div_82 = child(div_81);
			var h2_7 = child(div_82);
			var text_70 = child(h2_7);
			reset(h2_7);
			reset(div_82);
			var node_66 = sibling(div_82, 2);
			var consequent_36 = ($$anchor) => {
				var table_4 = root_48();
				var tbody_4 = sibling(child(table_4));
				each(tbody_4, 21, () => get(detail).salesReturns, index, ($$anchor, sr) => {
					var tr_4 = root_47();
					var td_26 = child(tr_4);
					var text_71 = child(td_26);
					reset(td_26);
					var td_27 = sibling(td_26);
					MoneyDisplay(child(td_27), { get amount() {
						return get(sr).amount;
					} });
					reset(td_27);
					var td_28 = sibling(td_27);
					var text_72 = child(td_28, true);
					reset(td_28);
					var td_29 = sibling(td_28);
					var span_47 = child(td_29);
					var text_73 = child(span_47, true);
					reset(span_47);
					reset(td_29);
					var td_30 = sibling(td_29);
					var text_74 = child(td_30, true);
					reset(td_30);
					var td_31 = sibling(td_30);
					DateDisplay(child(td_31), { get value() {
						return get(sr).requestedAt;
					} });
					reset(td_31);
					reset(tr_4);
					template_effect(($0, $1) => {
						set_text(text_71, `${get(sr).recipientType ?? ""} #${get(sr).recipientId ?? ""}`);
						set_text(text_72, get(sr).reason);
						set_class(span_47, 1, `inline-flex px-2 py-0.5 rounded-full text-[9px] font-bold ${$0 ?? ""}`);
						set_text(text_73, get(sr).status);
						set_text(text_74, $1);
					}, [() => statusClass(get(sr).status), () => getUserLabel(get(sr).requestedByUserId)]);
					append($$anchor, tr_4);
				});
				reset(tbody_4);
				reset(table_4);
				append($$anchor, table_4);
			};
			var alternate_4 = ($$anchor) => {
				append($$anchor, root_49());
			};
			if_block(node_66, ($$render) => {
				if (get(detail).salesReturns?.length) $$render(consequent_36);
				else $$render(alternate_4, -1);
			});
			reset(div_81);
			reset(div_65);
			template_effect(() => {
				set_text(text_58, `Supplier Payments (${get(detail).supplierPayments?.length ?? 0 ?? ""})`);
				set_text(text_64, `Purchase Returns (Supplier Refunds) (${get(detail).purchaseReturns?.length ?? 0 ?? ""})`);
				set_text(text_70, `Sales Returns (Customer Refunds) (${get(detail).salesReturns?.length ?? 0 ?? ""})`);
			});
			append($$anchor, div_65);
		};
		var consequent_38 = ($$anchor) => {
			var div_84 = root_55();
			var h2_8 = child(div_84);
			Clock(child(h2_8), { class: "h-4 w-4 text-primary" });
			next();
			reset(h2_8);
			var ol = sibling(h2_8, 2);
			var li = child(ol);
			var div_85 = sibling(child(li), 2);
			var p_8 = sibling(child(div_85), 2);
			DateDisplay(child(p_8), { get value() {
				return get(sd).createdAt;
			} });
			reset(p_8);
			reset(div_85);
			reset(li);
			var node_71 = sibling(li, 2);
			each(node_71, 17, () => get(detail)?.journalEntries ?? [], index, ($$anchor, j) => {
				var li_1 = root_51();
				var div_86 = sibling(child(li_1), 2);
				var p_9 = child(div_86);
				var text_75 = child(p_9);
				reset(p_9);
				var p_10 = sibling(p_9, 2);
				var text_76 = child(p_10);
				DateDisplay(sibling(text_76), { get value() {
					return get(j).entryDate;
				} });
				reset(p_10);
				reset(div_86);
				reset(li_1);
				template_effect(() => {
					set_text(text_75, `Journal Entry — ${get(j).journalNumber ?? ""}`);
					set_text(text_76, `${get(j).description ?? ""} • `);
				});
				append($$anchor, li_1);
			});
			var node_73 = sibling(node_71, 2);
			each(node_73, 17, () => get(detail)?.supplierPayments ?? [], index, ($$anchor, sp) => {
				var li_2 = root_52();
				var div_87 = sibling(child(li_2), 2);
				var p_11 = child(div_87);
				MoneyDisplay(sibling(child(p_11)), { get amount() {
					return get(sp).amount;
				} });
				reset(p_11);
				var p_12 = sibling(p_11, 2);
				var text_77 = child(p_12);
				DateDisplay(sibling(text_77), { get value() {
					return get(sp).requestedAt;
				} });
				reset(p_12);
				reset(div_87);
				reset(li_2);
				template_effect(() => set_text(text_77, `Status: ${get(sp).status ?? ""} • `));
				append($$anchor, li_2);
			});
			var node_76 = sibling(node_73, 2);
			each(node_76, 17, () => get(detail)?.purchaseReturns ?? [], index, ($$anchor, pr) => {
				var li_3 = root_53();
				var div_88 = sibling(child(li_3), 2);
				var p_13 = child(div_88);
				MoneyDisplay(sibling(child(p_13)), { get amount() {
					return get(pr).amount;
				} });
				reset(p_13);
				var p_14 = sibling(p_13, 2);
				var text_78 = child(p_14);
				DateDisplay(sibling(text_78), { get value() {
					return get(pr).requestedAt;
				} });
				reset(p_14);
				reset(div_88);
				reset(li_3);
				template_effect(() => set_text(text_78, `Status: ${get(pr).status ?? ""} • `));
				append($$anchor, li_3);
			});
			var node_79 = sibling(node_76, 2);
			each(node_79, 17, () => get(detail)?.salesReturns ?? [], index, ($$anchor, sr) => {
				var li_4 = root_54();
				var div_89 = sibling(child(li_4), 2);
				var p_15 = child(div_89);
				MoneyDisplay(sibling(child(p_15)), { get amount() {
					return get(sr).amount;
				} });
				reset(p_15);
				var p_16 = sibling(p_15, 2);
				var text_79 = child(p_16);
				DateDisplay(sibling(text_79), { get value() {
					return get(sr).requestedAt;
				} });
				reset(p_16);
				reset(div_89);
				reset(li_4);
				template_effect(() => set_text(text_79, `Status: ${get(sr).status ?? ""} • `));
				append($$anchor, li_4);
			});
			var li_5 = sibling(node_79, 2);
			var div_90 = sibling(child(li_5), 2);
			var p_17 = sibling(child(div_90), 2);
			DateDisplay(child(p_17), { get value() {
				return get(sd).updatedAt;
			} });
			reset(p_17);
			reset(div_90);
			reset(li_5);
			reset(ol);
			reset(div_84);
			append($$anchor, div_84);
		};
		if_block(node_13, ($$render) => {
			if (get(activeTab) === "overview") $$render(consequent_18);
			else if (get(activeTab) === "financial") $$render(consequent_27, 1);
			else if (get(activeTab) === "items") $$render(consequent_30, 2);
			else if (get(activeTab) === "supplier") $$render(consequent_37, 3);
			else if (get(activeTab) === "timeline") $$render(consequent_38, 4);
		});
		template_effect(($0) => {
			set_class(span_2, 1, `inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide ${$0 ?? ""}`);
			set_text(text_6, get(sd).paymentStatus);
			set_text(text_7, get(sd).processingStatus ?? get(sd).orderStatus ?? "—");
		}, [() => statusClass(get(sd).paymentStatus)]);
		append($$anchor, fragment_4);
	};
	var alternate_5 = ($$anchor) => {
		append($$anchor, root_57());
	};
	if_block(node_7, ($$render) => {
		if (get(loading)) $$render(consequent_1);
		else if (get(error)) $$render(consequent_2, 1);
		else if (get(sd)) $$render(consequent_39, 2);
		else $$render(alternate_5, -1);
	});
	reset(div);
	var node_83 = sibling(div, 2);
	var consequent_44 = ($$anchor) => {
		var div_92 = root_62();
		var div_93 = child(div_92);
		var div_94 = child(div_93);
		var h3 = child(div_94);
		Coins(child(h3), { class: "h-4.5 w-4.5 text-primary" });
		next();
		reset(h3);
		var button_3 = sibling(h3, 2);
		X(child(button_3), { class: "h-4 w-4" });
		reset(button_3);
		reset(div_94);
		var form = sibling(div_94, 2);
		var div_95 = child(form);
		var div_96 = child(div_95);
		var select_1 = sibling(child(div_96), 2);
		var option_2 = child(select_1);
		option_2.value = option_2.__value = 0;
		each(sibling(option_2), 17, () => get(filteredSuppliersList), index, ($$anchor, s) => {
			var option_3 = root_25();
			var text_80 = child(option_3);
			reset(option_3);
			var option_3_value = {};
			template_effect(($0) => {
				set_text(text_80, `${get(s).name ?? ""} (${get(s).code ?? ""})${$0 ?? ""}`);
				if (option_3_value !== (option_3_value = get(s).id)) option_3.value = (option_3.__value = get(s).id) ?? "";
			}, [() => get(s).wallet !== void 0 ? ` (Bal: ${get(s).wallet.toFixed(3)} BHD)` : ""]);
			append($$anchor, option_3);
		});
		reset(select_1);
		reset(div_96);
		var node_87 = sibling(div_96, 2);
		var consequent_40 = ($$anchor) => {
			var div_97 = root_58();
			var div_98 = child(div_97);
			var span_48 = sibling(child(div_98), 2);
			var node_88 = child(span_48);
			{
				let $0 = user_derived(() => get(selectedPaySupplier).wallet ?? 0);
				MoneyDisplay(node_88, { get amount() {
					return get($0);
				} });
			}
			reset(span_48);
			reset(div_98);
			var div_99 = sibling(div_98, 2);
			var span_49 = sibling(child(div_99), 2);
			var node_89 = child(span_49);
			{
				let $0 = user_derived(() => get(selectedPaySupplier).creditWallet ?? 0);
				MoneyDisplay(node_89, { get amount() {
					return get($0);
				} });
			}
			reset(span_49);
			reset(div_99);
			reset(div_97);
			append($$anchor, div_97);
		};
		if_block(node_87, ($$render) => {
			if (get(selectedPaySupplier)) $$render(consequent_40);
		});
		var div_100 = sibling(node_87, 2);
		Input(sibling(child(div_100), 2), {
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
		reset(div_100);
		var div_101 = sibling(div_100, 2);
		var select_2 = sibling(child(div_101), 2);
		var option_4 = child(select_2);
		option_4.value = option_4.__value = "bank_transfer";
		var option_5 = sibling(option_4);
		option_5.value = option_5.__value = "cash";
		var option_6 = sibling(option_5);
		option_6.value = option_6.__value = "supplier_wallet";
		var option_7 = sibling(option_6);
		option_7.value = option_7.__value = "credit";
		reset(select_2);
		reset(div_101);
		var node_91 = sibling(div_101, 2);
		var consequent_41 = ($$anchor) => {
			var div_102 = root_59();
			var label = child(div_102);
			var text_81 = child(label);
			next();
			reset(label);
			var select_3 = sibling(label, 2);
			var option_8 = child(select_3);
			var text_82 = child(option_8);
			reset(option_8);
			option_8.value = option_8.__value = "";
			each(sibling(option_8), 17, () => get(filteredSourceAccounts), index, ($$anchor, opt) => {
				var option_9 = root_25();
				var text_83 = child(option_9, true);
				reset(option_9);
				var option_9_value = {};
				template_effect(() => {
					set_text(text_83, get(opt).name);
					if (option_9_value !== (option_9_value = get(opt).id)) option_9.value = (option_9.__value = get(opt).id) ?? "";
				});
				append($$anchor, option_9);
			});
			reset(select_3);
			reset(div_102);
			template_effect(() => {
				set_text(text_81, `Source ${get(payMethod) === "cash" ? "Cash" : "Bank"} Account `);
				set_text(text_82, `-- Select Source ${get(payMethod) === "cash" ? "Cash" : "Bank"} Account --`);
			});
			bind_select_value(select_3, () => get(paySourceId), ($$value) => set(paySourceId, $$value));
			append($$anchor, div_102);
		};
		if_block(node_91, ($$render) => {
			if (get(payMethod) !== "credit" && get(payMethod) !== "supplier_wallet") $$render(consequent_41);
		});
		var node_93 = sibling(node_91, 2);
		var consequent_42 = ($$anchor) => {
			var div_103 = root_60();
			var node_94 = child(div_103);
			Circle_alert(node_94, { class: "h-4 w-4 shrink-0 text-red-500" });
			var span_50 = sibling(node_94, 2);
			var text_84 = child(span_50);
			reset(span_50);
			reset(div_103);
			template_effect(($0) => set_text(text_84, `Insufficient supplier wallet balance! Available: ${$0 ?? ""} BHD`), [() => (get(selectedPaySupplier).wallet ?? 0).toFixed(3)]);
			append($$anchor, div_103);
		};
		if_block(node_93, ($$render) => {
			if (get(payMethod) === "supplier_wallet" && get(selectedPaySupplier) && get(payAmount) > (get(selectedPaySupplier).wallet ?? 0)) $$render(consequent_42);
		});
		var div_104 = sibling(node_93, 2);
		Input(sibling(child(div_104), 2), {
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
		reset(div_104);
		var div_105 = sibling(div_104, 2);
		Input(sibling(child(div_105), 2), {
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
		reset(div_105);
		reset(div_95);
		var div_106 = sibling(div_95, 2);
		var node_97 = child(div_106);
		Button(node_97, {
			type: "button",
			variant: "outline",
			onclick: () => set(showPaymentModal, false),
			class: "rounded-xl",
			children: ($$anchor, $$slotProps) => {
				next();
				append($$anchor, text("Cancel"));
			},
			$$slots: { default: true }
		});
		var node_98 = sibling(node_97, 2);
		{
			let $0 = user_derived(() => get(actionLoading) || !get(paySupplierId) || get(payAmount) <= 0 || get(payMethod) !== "credit" && get(payMethod) !== "supplier_wallet" && !get(paySourceId) || get(payMethod) === "supplier_wallet" && get(selectedPaySupplier) && get(payAmount) > (get(selectedPaySupplier).wallet ?? 0));
			Button(node_98, {
				type: "submit",
				get disabled() {
					return get($0);
				},
				class: "rounded-xl bg-primary text-white font-semibold",
				children: ($$anchor, $$slotProps) => {
					var fragment_21 = root_61();
					var node_99 = first_child(fragment_21);
					var consequent_43 = ($$anchor) => {
						Refresh_cw($$anchor, { class: "h-3 w-3 mr-1.5 animate-spin" });
					};
					if_block(node_99, ($$render) => {
						if (get(actionLoading)) $$render(consequent_43);
					});
					next();
					append($$anchor, fragment_21);
				},
				$$slots: { default: true }
			});
		}
		reset(div_106);
		reset(form);
		reset(div_93);
		reset(div_92);
		delegated("click", button_3, () => set(showPaymentModal, false));
		event("submit", form, submitPaymentForm);
		bind_select_value(select_1, () => get(paySupplierId), ($$value) => set(paySupplierId, $$value));
		bind_select_value(select_2, () => get(payMethod), ($$value) => set(payMethod, $$value));
		append($$anchor, div_92);
	};
	if_block(node_83, ($$render) => {
		if (get(showPaymentModal)) $$render(consequent_44);
	});
	var node_100 = sibling(node_83, 2);
	var consequent_47 = ($$anchor) => {
		var div_107 = root_65();
		var div_108 = child(div_107);
		var div_109 = child(div_108);
		var h3_1 = child(div_109);
		Undo_2(child(h3_1), { class: "h-4.5 w-4.5" });
		next();
		reset(h3_1);
		var button_4 = sibling(h3_1, 2);
		X(child(button_4), { class: "h-4 w-4" });
		reset(button_4);
		reset(div_109);
		var form_1 = sibling(div_109, 2);
		var div_110 = child(form_1);
		var div_111 = child(div_110);
		var select_4 = sibling(child(div_111), 2);
		var option_10 = child(select_4);
		option_10.value = option_10.__value = 0;
		each(sibling(option_10), 17, () => get(suppliersList), index, ($$anchor, s) => {
			var option_11 = root_25();
			var text_86 = child(option_11);
			reset(option_11);
			var option_11_value = {};
			template_effect(() => {
				set_text(text_86, `${get(s).name ?? ""} (${get(s).code ?? ""})`);
				if (option_11_value !== (option_11_value = get(s).id)) option_11.value = (option_11.__value = get(s).id) ?? "";
			});
			append($$anchor, option_11);
		});
		reset(select_4);
		reset(div_111);
		var div_112 = sibling(div_111, 2);
		var label_1 = child(div_112);
		var node_104 = sibling(child(label_1), 3);
		{
			let $0 = user_derived(() => get(totalPaid) - get(totalPurchaseReturns));
			MoneyDisplay(node_104, { get amount() {
				return get($0);
			} });
		}
		next();
		reset(label_1);
		var node_105 = sibling(label_1, 2);
		{
			let $0 = user_derived(() => get(totalPaid) - get(totalPurchaseReturns) + .001);
			Input(node_105, {
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
		reset(div_112);
		var div_113 = sibling(div_112, 2);
		var select_5 = sibling(child(div_113), 2);
		var option_12 = child(select_5);
		option_12.value = option_12.__value = "bank";
		var option_13 = sibling(option_12);
		option_13.value = option_13.__value = "account";
		var option_14 = sibling(option_13);
		option_14.value = option_14.__value = "supplier_wallet";
		reset(select_5);
		reset(div_113);
		var node_106 = sibling(div_113, 2);
		var consequent_45 = ($$anchor) => {
			var div_114 = root_63();
			var select_6 = sibling(child(div_114), 2);
			var option_15 = child(select_6);
			option_15.value = option_15.__value = "";
			each(sibling(option_15), 17, () => get(allAccountsAndBanks), index, ($$anchor, opt) => {
				var option_16 = root_25();
				var text_87 = child(option_16, true);
				reset(option_16);
				var option_16_value = {};
				template_effect(() => {
					set_text(text_87, get(opt).name);
					if (option_16_value !== (option_16_value = get(opt).id)) option_16.value = (option_16.__value = get(opt).id) ?? "";
				});
				append($$anchor, option_16);
			});
			reset(select_6);
			reset(div_114);
			bind_select_value(select_6, () => get(prDestId), ($$value) => set(prDestId, $$value));
			append($$anchor, div_114);
		};
		if_block(node_106, ($$render) => {
			if (get(prDestType) !== "supplier_wallet") $$render(consequent_45);
		});
		var div_115 = sibling(node_106, 2);
		Input(sibling(child(div_115), 2), {
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
		reset(div_115);
		reset(div_110);
		var div_116 = sibling(div_110, 2);
		var node_109 = child(div_116);
		Button(node_109, {
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
		var node_110 = sibling(node_109, 2);
		{
			let $0 = user_derived(() => get(actionLoading) || !get(prSupplierId) || get(prAmount) <= 0 || get(prDestType) !== "supplier_wallet" && !get(prDestId) || get(prAmount) > get(totalPaid) - get(totalPurchaseReturns) + .001);
			Button(node_110, {
				type: "submit",
				get disabled() {
					return get($0);
				},
				class: "rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700",
				children: ($$anchor, $$slotProps) => {
					var fragment_23 = root_64();
					var node_111 = first_child(fragment_23);
					var consequent_46 = ($$anchor) => {
						Refresh_cw($$anchor, { class: "h-3 w-3 mr-1.5 animate-spin" });
					};
					if_block(node_111, ($$render) => {
						if (get(actionLoading)) $$render(consequent_46);
					});
					next();
					append($$anchor, fragment_23);
				},
				$$slots: { default: true }
			});
		}
		reset(div_116);
		reset(form_1);
		reset(div_108);
		reset(div_107);
		delegated("click", button_4, () => set(showPurchaseReturnModal, false));
		event("submit", form_1, submitPurchaseReturnForm);
		bind_select_value(select_4, () => get(prSupplierId), ($$value) => set(prSupplierId, $$value));
		bind_select_value(select_5, () => get(prDestType), ($$value) => set(prDestType, $$value));
		append($$anchor, div_107);
	};
	if_block(node_100, ($$render) => {
		if (get(showPurchaseReturnModal)) $$render(consequent_47);
	});
	var node_112 = sibling(node_100, 2);
	var consequent_50 = ($$anchor) => {
		var div_117 = root_68();
		var div_118 = child(div_117);
		var div_119 = child(div_118);
		var h3_2 = child(div_119);
		Undo_2(child(h3_2), { class: "h-4.5 w-4.5" });
		next();
		reset(h3_2);
		var button_5 = sibling(h3_2, 2);
		X(child(button_5), { class: "h-4 w-4" });
		reset(button_5);
		reset(div_119);
		var form_2 = sibling(div_119, 2);
		var div_120 = child(form_2);
		var div_121 = child(div_120);
		var select_7 = sibling(child(div_121), 2);
		var option_17 = child(select_7);
		option_17.value = option_17.__value = "Agent";
		var option_18 = sibling(option_17);
		option_18.value = option_18.__value = "Head";
		reset(select_7);
		reset(div_121);
		var div_122 = sibling(div_121, 2);
		var select_8 = sibling(child(div_122), 2);
		var node_115 = child(select_8);
		var consequent_48 = ($$anchor) => {
			var option_19 = root_66();
			var option_19_value = {};
			template_effect(() => {
				if (option_19_value !== (option_19_value = get(srRecipientId))) option_19.value = (option_19.__value = get(srRecipientId)) ?? "";
			});
			append($$anchor, option_19);
		};
		var alternate_6 = ($$anchor) => {
			var fragment_25 = comment();
			each(first_child(fragment_25), 17, () => get(recipientOptions), index, ($$anchor, opt) => {
				var option_20 = root_25();
				var text_89 = child(option_20, true);
				reset(option_20);
				var option_20_value = {};
				template_effect(() => {
					set_text(text_89, get(opt).name);
					if (option_20_value !== (option_20_value = get(opt).id)) option_20.value = (option_20.__value = get(opt).id) ?? "";
				});
				append($$anchor, option_20);
			});
			append($$anchor, fragment_25);
		};
		if_block(node_115, ($$render) => {
			if (get(recipientOptions).length === 0) $$render(consequent_48);
			else $$render(alternate_6, -1);
		});
		reset(select_8);
		reset(div_122);
		var div_123 = sibling(div_122, 2);
		var label_2 = child(div_123);
		var node_117 = sibling(child(label_2), 3);
		{
			let $0 = user_derived(() => get(sd).payableAmount - get(totalSalesReturns));
			MoneyDisplay(node_117, { get amount() {
				return get($0);
			} });
		}
		next();
		reset(label_2);
		var node_118 = sibling(label_2, 2);
		{
			let $0 = user_derived(() => get(sd).payableAmount - get(totalSalesReturns) + .001);
			Input(node_118, {
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
		reset(div_123);
		var div_124 = sibling(div_123, 2);
		var select_9 = sibling(child(div_124), 2);
		var option_21 = child(select_9);
		option_21.value = option_21.__value = "bank";
		var option_22 = sibling(option_21);
		option_22.value = option_22.__value = "account";
		reset(select_9);
		reset(div_124);
		var div_125 = sibling(div_124, 2);
		var select_10 = sibling(child(div_125), 2);
		var option_23 = child(select_10);
		option_23.value = option_23.__value = "";
		each(sibling(option_23), 17, () => get(allAccountsAndBanks), index, ($$anchor, opt) => {
			var option_24 = root_25();
			var text_90 = child(option_24, true);
			reset(option_24);
			var option_24_value = {};
			template_effect(() => {
				set_text(text_90, get(opt).name);
				if (option_24_value !== (option_24_value = get(opt).id)) option_24.value = (option_24.__value = get(opt).id) ?? "";
			});
			append($$anchor, option_24);
		});
		reset(select_10);
		reset(div_125);
		var div_126 = sibling(div_125, 2);
		Input(sibling(child(div_126), 2), {
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
		reset(div_126);
		reset(div_120);
		var div_127 = sibling(div_120, 2);
		var node_121 = child(div_127);
		Button(node_121, {
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
		var node_122 = sibling(node_121, 2);
		{
			let $0 = user_derived(() => get(actionLoading) || get(srAmount) <= 0 || !get(srSourceId) || get(srAmount) > get(sd).payableAmount - get(totalSalesReturns) + .001);
			Button(node_122, {
				type: "submit",
				get disabled() {
					return get($0);
				},
				class: "rounded-xl bg-sky-600 text-white font-semibold hover:bg-sky-700",
				children: ($$anchor, $$slotProps) => {
					var fragment_26 = root_67();
					var node_123 = first_child(fragment_26);
					var consequent_49 = ($$anchor) => {
						Refresh_cw($$anchor, { class: "h-3 w-3 mr-1.5 animate-spin" });
					};
					if_block(node_123, ($$render) => {
						if (get(actionLoading)) $$render(consequent_49);
					});
					next();
					append($$anchor, fragment_26);
				},
				$$slots: { default: true }
			});
		}
		reset(div_127);
		reset(form_2);
		reset(div_118);
		reset(div_117);
		delegated("click", button_5, () => set(showSalesReturnModal, false));
		event("submit", form_2, submitSalesReturnForm);
		bind_select_value(select_7, () => get(srRecipientType), ($$value) => set(srRecipientType, $$value));
		bind_select_value(select_8, () => get(srRecipientId), ($$value) => set(srRecipientId, $$value));
		bind_select_value(select_9, () => get(srSourceType), ($$value) => set(srSourceType, $$value));
		bind_select_value(select_10, () => get(srSourceId), ($$value) => set(srSourceId, $$value));
		append($$anchor, div_117);
	};
	if_block(node_112, ($$render) => {
		if (get(showSalesReturnModal)) $$render(consequent_50);
	});
	var node_124 = sibling(node_112, 2);
	ConfirmationDialog(node_124, {
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
	var node_125 = sibling(node_124, 2);
	var consequent_53 = ($$anchor) => {
		var div_128 = root_71();
		var div_129 = child(div_128);
		var div_130 = child(div_129);
		var div_131 = child(div_130);
		Credit_card(child(div_131), { class: "h-5 w-5 text-primary" });
		next(2);
		reset(div_131);
		var button_6 = sibling(div_131, 2);
		X(child(button_6), { class: "h-4 w-4" });
		reset(button_6);
		reset(div_130);
		var form_3 = sibling(div_130, 4);
		var div_132 = child(form_3);
		var node_128 = sibling(child(div_132), 2);
		{
			let $0 = user_derived(() => ["text-xs font-mono", get(refIdModalError) ? "border-red-500 ring-2 ring-red-500/20" : ""].join(" "));
			Input(node_128, {
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
		var node_129 = sibling(node_128, 2);
		var consequent_51 = ($$anchor) => {
			var p_18 = root_69();
			var node_130 = child(p_18);
			Circle_alert(node_130, { class: "h-3.5 w-3.5 shrink-0 text-red-600" });
			var span_51 = sibling(node_130, 2);
			var text_92 = child(span_51, true);
			reset(span_51);
			reset(p_18);
			template_effect(() => set_text(text_92, get(refIdModalError)));
			append($$anchor, p_18);
		};
		if_block(node_129, ($$render) => {
			if (get(refIdModalError)) $$render(consequent_51);
		});
		reset(div_132);
		var div_133 = sibling(div_132, 2);
		var node_131 = child(div_133);
		Button(node_131, {
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
		var node_132 = sibling(node_131, 2);
		{
			let $0 = user_derived(() => get(actionLoading) || !get(onlineReferenceIdVal).trim());
			Button(node_132, {
				type: "submit",
				class: "rounded-xl h-9 text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white",
				get disabled() {
					return get($0);
				},
				children: ($$anchor, $$slotProps) => {
					var fragment_28 = root_70();
					var node_133 = first_child(fragment_28);
					var consequent_52 = ($$anchor) => {
						Refresh_cw($$anchor, { class: "h-3.5 w-3.5 mr-1.5 animate-spin" });
					};
					if_block(node_133, ($$render) => {
						if (get(actionLoading)) $$render(consequent_52);
					});
					next();
					append($$anchor, fragment_28);
				},
				$$slots: { default: true }
			});
		}
		reset(div_133);
		reset(form_3);
		reset(div_129);
		reset(div_128);
		delegated("click", button_6, () => set(showReferenceIdModal, false));
		event("submit", form_3, (e) => {
			e.preventDefault();
			if (!get(onlineReferenceIdVal).trim()) {
				toast.error("Bank Reference ID is required for online payments.");
				return;
			}
			set(targetBookingStatusToApply, "success");
			executeBookingStatusUpdate(get(onlineReferenceIdVal).trim());
		});
		append($$anchor, div_128);
	};
	if_block(node_125, ($$render) => {
		if (get(showReferenceIdModal)) $$render(consequent_53);
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

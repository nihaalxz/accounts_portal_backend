import { B as append, Bt as reset, Ct as user_derived, D as head, Et as store_get, G as text, H as from_html, I as if_block, J as event, K as delegate, M as slot, N as each, Nt as pop, P as index, Pt as push, Q as get, R as set_text, Tt as setup_stores, V as comment, _ as set_attribute, a as legacy_rest_props, b as bind_select_value, bt as state, c as spread_props, dt as $document, g as remove_input_defaults, gt as proxy, ht as sibling, it as effect, m as bind_value, mt as first_child, ot as template_effect, pt as child, q as delegated, r as onMount, vt as set, w as set_class, zt as next } from "../chunks/dXkmWTgM.js";
import { t as goto } from "../chunks/D0NVZqrH.js";
import "../chunks/DhaYE-8x.js";
import { t as apiFetch } from "../chunks/BhkILv0d.js";
import { i as hasRole, r as currentUser } from "../chunks/CayChz6T.js";
import "../chunks/DZfWAsjW.js";
import { r as toast } from "../chunks/CbPRQHfn.js";
import { t as Icon } from "../chunks/BalaELqB.js";
import { t as Arrow_right } from "../chunks/DZE4Pk63.js";
import { t as Check } from "../chunks/blG6JRe72.js";
import { t as Clock } from "../chunks/CZu1L_RP2.js";
import { t as Pencil } from "../chunks/C3Ohi_CL.js";
import { t as Plus } from "../chunks/BObidJ7B.js";
import { t as Refresh_cw } from "../chunks/DpTJy0Wb.js";
import { t as Search } from "../chunks/D7t9qluE.js";
import { t as Shield_check } from "../chunks/Ctn9-c3Y.js";
import { t as Tag } from "../chunks/lD5gNYPy.js";
import { t as Trash_2 } from "../chunks/TFHBi7f3.js";
import { t as Triangle_alert } from "../chunks/BKenZzGW.js";
import { t as Users } from "../chunks/Bja056I7.js";
import { t as Wallet } from "../chunks/BahXSy4P.js";
import { t as X } from "../chunks/wXHc9RNY.js";
import { t as Button } from "../chunks/BhXsq3bC2.js";
import "../chunks/GxrCv23o2.js";
import { t as MoneyDisplay } from "../chunks/CIVSRuaR2.js";
import { t as DateDisplay } from "../chunks/DEr_pDJT2.js";
import "../chunks/phDdFTf92.js";
import { t as Input } from "../chunks/aUAD-svz.js";
import { c as getSalesReturns, f as rejectPurchaseReturn, n as approveSalesReturn, p as rejectSalesReturn, s as getPurchaseReturns, t as approvePurchaseReturn } from "../chunks/2VqmtXzk.js";
//#region node_modules/lucide-svelte/dist/icons/corner-down-right.svelte
function Corner_down_right($$anchor, $$props) {
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
	const iconNode = [["path", { "d": "m15 10 5 5-5 5" }], ["path", { "d": "M4 4v7a4 4 0 0 0 4 4h12" }]];
	/**
	* @component @name CornerDownRight
	* @description Lucide SVG icon component, renders SVG Element with children.
	*
	* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMTUgMTAgNSA1LTUgNSIgLz4KICA8cGF0aCBkPSJNNCA0djdhNCA0IDAgMCAwIDQgNGgxMiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/corner-down-right
	* @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
	*
	* @param {Object} props - Lucide icons props and any valid SVG attribute
	* @returns {FunctionalComponent} Svelte component
	*
	*/
	Icon($$anchor, spread_props({ name: "corner-down-right" }, () => $$sanitized_props, {
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
//#region node_modules/lucide-svelte/dist/icons/message-square.svelte
function Message_square($$anchor, $$props) {
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
	const iconNode = [["path", { "d": "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" }]];
	/**
	* @component @name MessageSquare
	* @description Lucide SVG icon component, renders SVG Element with children.
	*
	* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjIgMTdhMiAyIDAgMCAxLTIgMkg2LjgyOGEyIDIgMCAwIDAtMS40MTQuNTg2bC0yLjIwMiAyLjIwMkEuNzEuNzEgMCAwIDEgMiAyMS4yODZWNWEyIDIgMCAwIDEgMi0yaDE2YTIgMiAwIDAgMSAyIDJ6IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/message-square
	* @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
	*
	* @param {Object} props - Lucide icons props and any valid SVG attribute
	* @returns {FunctionalComponent} Svelte component
	*
	*/
	Icon($$anchor, spread_props({ name: "message-square" }, () => $$sanitized_props, {
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
//#region src/routes/(app)/suppliers/+page.svelte
var root = from_html(`<!> Cancel`, 1);
var root_1 = from_html(`<!> `, 1);
var root_2 = from_html(`<!> Reload`, 1);
var root_3 = from_html(`<p class="text-[11px] text-amber-600 flex items-center gap-1.5 mb-5"><!> Your request will be stored in the database and needs master accountant approval before the supplier is registered.</p>`);
var root_4 = from_html(`<div class="mb-5"></div>`);
var root_5 = from_html(`<span class="text-muted-foreground font-normal">(read-only)</span>`);
var root_6 = from_html(`<div class="space-y-1.5"><label for="s-wallet" class="block font-semibold text-foreground">Opening Balance (negative = owed to supplier)</label> <!></div>`);
var root_7 = from_html(`<!> Add Category`, 1);
var root_8 = from_html(`<div class="text-[11px] text-muted-foreground py-2 px-3 border border-dashed border-border rounded-xl bg-muted/20">No categories selected. Click "Add Category" to select categories for this supplier.</div>`);
var root_9 = from_html(`<option> </option>`);
var root_10 = from_html(`<div class="flex items-center gap-2 bg-muted/25 border border-border p-2 rounded-xl"><select class="flex-1 h-8 rounded-lg border border-input bg-background px-2.5 py-1 text-xs focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring"></select> <!></div>`);
var root_11 = from_html(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"></div>`);
var root_12 = from_html(`<!> <!>`, 1);
var root_13 = from_html(`<div class="bg-card border border-border rounded-2xl p-6 shadow-xs"><h2 class="text-sm font-bold text-foreground mb-1"><!></h2> <!> <form><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs"><div class="space-y-1.5"><label for="s-name" class="block font-semibold text-foreground">Supplier Name <span class="text-red-500">*</span></label> <!></div> <div class="space-y-1.5"><label for="s-code" class="block font-semibold text-foreground">Supplier Code <span class="text-red-500">*</span> <!></label> <!></div> <!></div> <div class="mt-4 space-y-2 text-xs"><div class="flex items-center justify-between"><span class="font-semibold text-foreground">Supplier Categories</span> <!></div> <!></div> <div class="flex gap-2.5 mt-5 pt-4 border-t border-border/50"><!> <!></div></form></div>`);
var root_14 = from_html(`<span class="inline-flex items-center justify-center h-4 min-w-4 px-1 rounded-full text-[9px] font-bold bg-amber-500 text-white"> </span>`);
var root_15 = from_html(`<button type="button" class="absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 text-muted-foreground hover:text-foreground cursor-pointer"><!></button>`);
var root_16 = from_html(`<div class="relative w-full sm:w-80"><!> <input type="text" placeholder="Search suppliers by name, code, or category..." class="w-full text-xs pl-9 pr-8 py-2 border border-border rounded-xl bg-background text-foreground placeholder-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20"/> <!></div>`);
var root_17 = from_html(`<div class="bg-card border border-border rounded-2xl h-40 flex items-center justify-center"><!></div>`);
var root_18 = from_html(`<div class="bg-card border border-border rounded-2xl p-16 text-center text-muted-foreground text-xs"><!> No pending supplier registration requests.</div>`);
var root_19 = from_html(`<span class="inline-flex items-center gap-1 text-[10px] bg-primary/5 text-primary border border-primary/10 px-2 py-0.5 rounded-full"><!> </span>`);
var root_20 = from_html(`<div class="flex flex-wrap gap-1"></div>`);
var root_21 = from_html(`<!> Approve`, 1);
var root_22 = from_html(`<!> Reject`, 1);
var root_23 = from_html(`<div class="flex gap-2 shrink-0"><!> <!></div>`);
var root_24 = from_html(`<span class="text-[10px] text-amber-600 flex items-center gap-1 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-xl font-semibold"><!> Awaiting Approval</span>`);
var root_25 = from_html(`<div class="p-5 flex flex-col sm:flex-row sm:items-center gap-4"><div class="flex-1 space-y-2"><div class="flex items-center gap-2 flex-wrap"><span class="font-bold text-sm text-foreground"> </span> <span class="font-mono text-[10px] bg-muted px-2 py-0.5 rounded-lg border border-border font-bold text-muted-foreground"> </span></div> <!> <div class="text-[10px] text-muted-foreground/60 flex items-center gap-1.5"><!> Submitted by <strong class="text-muted-foreground"> </strong> at <!></div></div> <!></div>`);
var root_26 = from_html(`<div class="bg-card border border-border rounded-2xl overflow-hidden shadow-xs"><div class="px-5 py-4 border-b border-border/50 bg-amber-50/50"><h2 class="text-xs font-bold text-amber-800 flex items-center gap-1.5"><!> Pending Supplier Registration Requests</h2></div> <div class="divide-y divide-border/50"></div></div>`);
var root_27 = from_html(`<button> </button>`);
var root_28 = from_html(`<div class="bg-card border border-border rounded-2xl p-16 text-center text-muted-foreground text-xs"><!> </div>`);
var root_29 = from_html(`<a class="text-primary font-bold hover:underline flex items-center gap-1.5"> <!></a>`);
var root_30 = from_html(`<span class="text-muted-foreground">—</span>`);
var root_31 = from_html(`<div class="flex items-center justify-center gap-1.5"><!> <!></div>`);
var root_32 = from_html(`<span class="text-[9px] text-amber-600 bg-amber-50 border border-amber-200 px-2 py-1 rounded-lg font-semibold inline-flex items-center justify-center gap-1"><!> Pending</span>`);
var root_33 = from_html(`<span class="text-[9px] text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-1 rounded-lg font-semibold inline-flex items-center justify-center gap-1"><!> Approved</span>`);
var root_34 = from_html(`<span class="text-[9px] text-rose-600 bg-rose-50 border border-rose-200 px-2 py-1 rounded-lg font-semibold inline-flex items-center justify-center gap-1"><!> Rejected</span>`);
var root_35 = from_html(`<span class="text-[9px] text-muted-foreground uppercase"> </span>`);
var root_36 = from_html(`<tr class="hover:bg-muted/10"><td class="p-4 space-y-1"><div class="font-semibold text-foreground"> </div> <div class="text-[10px] text-muted-foreground flex items-center gap-1"><!> </div></td><td class="p-4"><!></td><td class="p-4 text-right font-mono font-bold text-emerald-600"><!></td><td class="p-4 space-y-0.5"><div class="text-[10px] text-muted-foreground"> </div> <div class="text-[9px] text-muted-foreground/60">Requested at <!></div></td><td class="p-4 text-center"><!></td></tr>`);
var root_37 = from_html(`<div class="bg-card border border-border rounded-2xl overflow-x-auto shadow-xs max-w-full"><table class="w-full min-w-[750px] text-left border-collapse text-xs"><thead><tr class="bg-muted/30 border-b border-border text-muted-foreground font-semibold text-[10px] uppercase tracking-wider"><th class="p-4">Refund Info</th><th class="p-4">Booking Ref</th><th class="p-4 text-right">Amount</th><th class="p-4">Details</th><th class="p-4 text-center">Status / Actions</th></tr></thead><tbody class="divide-y divide-border/50"></tbody></table></div>`);
var root_38 = from_html(`<div class="flex items-center justify-between gap-3 mb-3"><div class="flex items-center gap-1.5 p-1 bg-muted/40 border border-border/60 rounded-xl text-xs"></div> <span class="text-xs text-muted-foreground font-mono"> </span></div> <!>`, 1);
var root_39 = from_html(`<tr class="hover:bg-muted/10"><td class="p-4 space-y-1"><div class="font-semibold text-foreground"> </div> <div class="text-[10px] text-muted-foreground flex items-center gap-1"><!> Wallet balance adjustment requested</div></td><td class="p-4"><!></td><td class="p-4 text-right font-mono font-bold text-rose-600"><!></td><td class="p-4 space-y-0.5"><div class="text-[10px] text-muted-foreground"> </div> <div class="text-[9px] text-muted-foreground/60">Requested at <!></div></td><td class="p-4 text-center"><!></td></tr>`);
var root_40 = from_html(`<div class="bg-card border border-border rounded-2xl overflow-x-auto shadow-xs max-w-full"><table class="w-full min-w-[750px] text-left border-collapse text-xs"><thead><tr class="bg-muted/30 border-b border-border text-muted-foreground font-semibold text-[10px] uppercase tracking-wider"><th class="p-4">Customer Refund Info</th><th class="p-4">Booking Ref</th><th class="p-4 text-right">Amount</th><th class="p-4">Details</th><th class="p-4 text-center">Status / Actions</th></tr></thead><tbody class="divide-y divide-border/50"></tbody></table></div>`);
var root_41 = from_html(`<div class="bg-card border border-border rounded-2xl h-64 flex items-center justify-center"><!></div>`);
var root_42 = from_html(`<div class="bg-card border border-border rounded-2xl p-16 text-center text-muted-foreground text-xs"> </div>`);
var root_43 = from_html(`<span class="inline-flex items-center gap-1 text-[10px] bg-muted px-1.5 py-0.5 rounded border border-border"> </span>`);
var root_44 = from_html(`<span class="text-muted-foreground/40">—</span>`);
var root_45 = from_html(`<button class="p-1.5 hover:bg-muted text-muted-foreground hover:text-foreground rounded-lg transition-colors cursor-pointer" title="Edit supplier"><!></button>`);
var root_46 = from_html(`<tr class="hover:bg-muted/10 transition-colors"><td class="p-4 font-mono font-bold text-foreground"> </td><td class="p-4 font-semibold text-foreground"> </td><td class="p-4"><div class="flex flex-wrap gap-1"></div></td><td> <!></td><td class="p-4 text-center"><div class="flex items-center justify-center gap-1.5"><button class="p-1.5 hover:bg-primary/10 text-primary rounded-lg transition-colors cursor-pointer" title="View wallet"><!></button> <!></div></td></tr>`);
var root_47 = from_html(`<div class="bg-card border border-border rounded-2xl overflow-x-auto shadow-xs max-w-full"><table class="w-full min-w-[750px] text-left border-collapse text-xs"><thead><tr class="bg-muted/30 border-b border-border text-muted-foreground font-semibold text-[10px] uppercase tracking-wider"><th class="p-4 w-28">Code</th><th class="p-4">Name</th><th class="p-4">Categories</th><th class="p-4 w-36 text-right">Wallet Balance</th><th class="p-4 w-20 text-center">Actions</th></tr></thead><tbody class="divide-y divide-border/50"></tbody></table> <div class="px-4 py-3 border-t border-border/50 text-[10px] text-muted-foreground bg-muted/10 flex items-center justify-between"><span>Showing <strong> </strong> of <strong> </strong> suppliers</span></div></div>`);
var root_48 = from_html(`<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4"><div class="bg-card border border-border rounded-2xl max-w-md w-full p-6 shadow-xl space-y-4"><h3 class="text-sm font-bold text-foreground flex items-center gap-1.5 text-red-600"><!> Reject Request</h3> <p class="text-xs text-muted-foreground">Please provide a reason for rejecting this supplier request. This description will be logged for audits.</p> <div class="space-y-1.5"><label for="reject-reason" class="block font-semibold text-foreground text-xs">Reason for Rejection <span class="text-red-500">*</span></label> <!></div> <div class="flex justify-end gap-2.5 pt-3 border-t border-border/50 text-xs"><!> <!></div></div></div>`);
var root_49 = from_html(`<div class="space-y-6"><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"><div class="flex flex-col gap-1"><h1 class="text-xl font-bold text-foreground flex items-center gap-2"><!> Supplier Management</h1> <p class="text-xs text-muted-foreground">View and manage supplier credentials, categories, wallets, and approve settlements.</p></div> <div class="flex flex-wrap gap-2"><!> <!></div></div> <!> <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3"><div class="flex items-center gap-1 bg-muted/40 rounded-xl p-1 border border-border/50 overflow-x-auto flex-nowrap pb-1 scrollbar-thin"><button> </button> <button>Pending Registration <!></button> <button>Purchase Returns History <!></button> <button>Sales Returns History <!></button></div> <!></div> <!> <!> <!> <!></div> <!>`, 1);
function _page($$anchor, $$props) {
	push($$props, true);
	const $currentUser = () => store_get(currentUser, "$currentUser", $$stores);
	const [$$stores, $$cleanup] = setup_stores();
	const CATEGORY_OPTIONS = [
		"Visa Application",
		"Flight Bookings",
		"Holiday Packages",
		"VFS Appointments",
		"Hotel Booking",
		"Transportation",
		"Other Services"
	];
	let suppliers = state(proxy([]));
	let pending = state(proxy([]));
	let pendingPurchaseReturns = state(proxy([]));
	let pendingSalesReturns = state(proxy([]));
	let isLoading = state(false);
	let loadingPending = state(false);
	let loadingPurchaseReturns = state(false);
	let loadingSalesReturns = state(false);
	let isSaving = state(false);
	let activeTab = state("list");
	let showForm = state(false);
	let isEditing = state(false);
	let editingId = state(null);
	let name = state("");
	let code = state("");
	let selectedCategories = state(proxy([]));
	let walletStr = state("");
	let actioningId = state(null);
	let searchQuery = state("");
	let filteredSuppliers = user_derived(() => {
		const q = get(searchQuery).trim().toLowerCase();
		if (!q) return get(suppliers);
		return get(suppliers).filter((s) => s.name.toLowerCase().includes(q) || s.code.toLowerCase().includes(q) || s.categories.some((cat) => cat.toLowerCase().includes(q)));
	});
	let showRejectModal = state(false);
	let rejectReason = state("");
	let itemToReject = state(null);
	async function loadSuppliers() {
		set(isLoading, true);
		try {
			set(suppliers, await apiFetch("api/supplier") || [], true);
		} catch (err) {
			toast.error(err.message || "Failed to load suppliers.");
		} finally {
			set(isLoading, false);
		}
	}
	async function loadPending() {
		set(loadingPending, true);
		try {
			set(pending, await apiFetch("api/pending-approvals?entityType=supplier&status=pending") || [], true);
		} catch (err) {
			toast.error(err.message || "Failed to load pending requests.");
		} finally {
			set(loadingPending, false);
		}
	}
	let prFilter = state("all");
	let srFilter = state("all");
	async function loadPendingPurchaseReturns() {
		set(loadingPurchaseReturns, true);
		try {
			const params = {};
			if (get(prFilter) !== "all") params.status = get(prFilter);
			set(pendingPurchaseReturns, await getPurchaseReturns(params), true);
		} catch (err) {
			toast.error(err.message || "Failed to load purchase returns.");
		} finally {
			set(loadingPurchaseReturns, false);
		}
	}
	let headsList = state(proxy([]));
	let agentsList = state(proxy([]));
	async function loadHeadsAndAgents() {
		try {
			const [headsRes, agentsRes] = await Promise.all([apiFetch("api/sales-entries/heads?pageSize=500").catch(() => null), apiFetch("api/agent").catch(() => null)]);
			if (headsRes && headsRes.items) set(headsList, headsRes.items, true);
			if (agentsRes) set(agentsList, Array.isArray(agentsRes) ? agentsRes : agentsRes.items || [], true);
		} catch (err) {
			console.error("Failed to load heads and agents", err);
		}
	}
	function getRecipientLabel(type, id, item) {
		if (item?.recipientName) return item.recipientName;
		if (!id) return "N/A";
		const rType = (type || "").toLowerCase().trim();
		const numericId = Number(id);
		if (rType === "agent") {
			const ag = get(agentsList).find((a) => Number(a.id) === numericId);
			if (ag) {
				const name = ag.agencyName || ag.name || ag.fullName || `${ag.firstName || ""} ${ag.lastName || ""}`.trim();
				if (name) return name;
			}
			return `Agent #${id}`;
		}
		if (rType === "head") {
			const hd = get(headsList).find((h) => Number(h.id) === numericId);
			if (hd) {
				const name = hd.fullName || hd.headName || hd.name || `${hd.firstName || ""} ${hd.lastName || ""}`.trim();
				if (name) return name;
			}
			return `Head #${id}`;
		}
		return `${type || "Recipient"} #${id}`;
	}
	async function loadPendingSalesReturns() {
		set(loadingSalesReturns, true);
		try {
			const params = {};
			if (get(srFilter) !== "all") params.status = get(srFilter);
			const [sReturns] = await Promise.all([getSalesReturns(params), loadHeadsAndAgents()]);
			set(pendingSalesReturns, sReturns, true);
		} catch (err) {
			toast.error(err.message || "Failed to load sales returns.");
		} finally {
			set(loadingSalesReturns, false);
		}
	}
	async function loadAllData() {
		await Promise.all([
			loadSuppliers(),
			loadPending(),
			loadPendingPurchaseReturns(),
			loadPendingSalesReturns()
		]);
	}
	async function handleSubmit(e) {
		e.preventDefault();
		if (!get(name).trim()) return;
		set(isSaving, true);
		const cats = get(selectedCategories).filter(Boolean);
		const isMaster = hasRole("master_accountant");
		const initialWallet = parseFloat(get(walletStr)) || 0;
		try {
			if (get(isEditing) && get(editingId) !== null) {
				await apiFetch(`api/supplier/${get(editingId)}`, {
					method: "PUT",
					body: JSON.stringify({
						name: get(name).trim(),
						categories: cats
					}),
					headers: { "Content-Type": "application/json" }
				});
				toast.success("Supplier updated successfully.");
				resetForm();
				await loadSuppliers();
			} else if (isMaster) {
				if (!get(code).trim()) {
					toast.error("Supplier Code is required.");
					set(isSaving, false);
					return;
				}
				await apiFetch("api/supplier", {
					method: "POST",
					body: JSON.stringify({
						name: get(name).trim(),
						code: get(code).trim(),
						categories: cats,
						wallet: initialWallet
					}),
					headers: { "Content-Type": "application/json" }
				});
				toast.success("Supplier registered successfully.");
				resetForm();
				await loadSuppliers();
			} else {
				if (!get(code).trim()) {
					toast.error("Supplier Code is required for the request.");
					set(isSaving, false);
					return;
				}
				const payload = {
					name: get(name).trim(),
					code: get(code).trim(),
					categories: cats,
					wallet: initialWallet
				};
				await apiFetch("api/pending-approvals", {
					method: "POST",
					body: JSON.stringify({
						entityType: "supplier",
						payloadJson: JSON.stringify(payload),
						submittedByName: $currentUser()?.name ?? "Accountant"
					}),
					headers: { "Content-Type": "application/json" }
				});
				toast.success("Supplier registration submitted for master accountant approval.");
				resetForm();
				await loadPending();
			}
		} catch (err) {
			toast.error(err.message || "Failed to save supplier.");
		} finally {
			set(isSaving, false);
		}
	}
	async function approveSupplier(item) {
		set(actioningId, item.id, true);
		try {
			await apiFetch(`api/pending-approvals/${item.id}/approve`, { method: "POST" });
			toast.success("Supplier approved and registered.");
			await loadAllData();
		} catch (err) {
			toast.error(err.message || "Approval failed.");
		} finally {
			set(actioningId, null);
		}
	}
	async function rejectSupplier(item) {
		set(actioningId, item.id, true);
		try {
			await apiFetch(`api/pending-approvals/${item.id}/reject`, { method: "POST" });
			toast.success("Request rejected.");
			await loadPending();
		} catch (err) {
			toast.error(err.message || "Rejection failed.");
		} finally {
			set(actioningId, null);
		}
	}
	async function handleApprovePurchaseReturn(item) {
		set(actioningId, item.id, true);
		try {
			await approvePurchaseReturn(item.id, item.rowVersion);
			toast.success("Purchase Return approved successfully.");
			await loadAllData();
		} catch (err) {
			toast.error(err.message || "Failed to approve purchase return.");
		} finally {
			set(actioningId, null);
		}
	}
	async function handleApproveSalesReturn(item) {
		set(actioningId, item.id, true);
		try {
			await approveSalesReturn(item.id, item.rowVersion);
			toast.success("Sales Return approved successfully.");
			await loadAllData();
		} catch (err) {
			toast.error(err.message || "Failed to approve sales return.");
		} finally {
			set(actioningId, null);
		}
	}
	function openRejectModal(id, type) {
		set(itemToReject, {
			id,
			type
		}, true);
		set(rejectReason, "");
		set(showRejectModal, true);
	}
	async function submitRejection() {
		if (!get(itemToReject) || !get(rejectReason).trim()) return;
		const { id, type } = get(itemToReject);
		set(actioningId, id, true);
		set(showRejectModal, false);
		try {
			if (type === "purchase") {
				await rejectPurchaseReturn(id, get(rejectReason).trim());
				toast.success("Purchase Return rejected.");
			} else if (type === "sales") {
				await rejectSalesReturn(id, get(rejectReason).trim());
				toast.success("Sales Return rejected.");
			}
			await loadAllData();
		} catch (err) {
			toast.error(err.message || "Failed to reject transaction.");
		} finally {
			set(actioningId, null);
			set(itemToReject, null);
		}
	}
	function startEdit(s) {
		set(isEditing, true);
		set(editingId, s.id, true);
		set(showForm, true);
		set(name, s.name, true);
		set(code, s.code, true);
		set(selectedCategories, s.categories.map((cat) => {
			if (cat === "Flights") return "Flight Bookings";
			if (cat === "Visa Services") return "Visa Application";
			if (cat === "VFS Appointment") return "VFS Appointments";
			return cat;
		}), true);
		set(walletStr, "");
	}
	function resetForm() {
		set(showForm, false);
		set(isEditing, false);
		set(editingId, null);
		set(name, "");
		set(code, "");
		set(selectedCategories, [], true);
		set(walletStr, "");
	}
	function addCategory() {
		set(selectedCategories, [...get(selectedCategories), CATEGORY_OPTIONS[0] ?? ""], true);
	}
	function removeCategory(index) {
		set(selectedCategories, get(selectedCategories).filter((_, idx) => idx !== index), true);
	}
	onMount(() => {
		loadAllData();
	});
	var fragment = root_49();
	head("rdxe3f", ($$anchor) => {
		effect(() => {
			$document.title = "Supplier Management — Accounts Portal";
		});
	});
	var div = first_child(fragment);
	var div_1 = child(div);
	var div_2 = child(div_1);
	var h1 = child(div_2);
	Users(child(h1), { class: "h-5 w-5 text-primary" });
	next();
	reset(h1);
	next(2);
	reset(div_2);
	var div_3 = sibling(div_2, 2);
	var node_1 = child(div_3);
	Button(node_1, {
		onclick: () => {
			set(showForm, !get(showForm));
			if (!get(showForm)) resetForm();
		},
		class: "h-8.5 rounded-xl cursor-pointer flex items-center gap-1.5 text-xs font-semibold",
		children: ($$anchor, $$slotProps) => {
			var fragment_1 = comment();
			var node_2 = first_child(fragment_1);
			var consequent = ($$anchor) => {
				var fragment_2 = root();
				X(first_child(fragment_2), { class: "h-3.5 w-3.5" });
				next();
				append($$anchor, fragment_2);
			};
			var alternate = ($$anchor) => {
				var fragment_3 = root_1();
				var node_4 = first_child(fragment_3);
				Plus(node_4, { class: "h-3.5 w-3.5" });
				var text = sibling(node_4, 1, true);
				template_effect(($0) => set_text(text, $0), [() => hasRole("master_accountant") ? "Register Supplier" : "Submit Supplier Request"]);
				append($$anchor, fragment_3);
			};
			if_block(node_2, ($$render) => {
				if (get(showForm)) $$render(consequent);
				else $$render(alternate, -1);
			});
			append($$anchor, fragment_1);
		},
		$$slots: { default: true }
	});
	var node_5 = sibling(node_1, 2);
	{
		let $0 = user_derived(() => get(isLoading) || get(loadingPending) || get(loadingPurchaseReturns) || get(loadingSalesReturns));
		Button(node_5, {
			variant: "outline",
			class: "h-8.5 rounded-xl cursor-pointer flex items-center gap-1.5 text-xs font-semibold",
			onclick: loadAllData,
			get disabled() {
				return get($0);
			},
			children: ($$anchor, $$slotProps) => {
				var fragment_4 = root_2();
				var node_6 = first_child(fragment_4);
				{
					let $0 = user_derived(() => get(isLoading) || get(loadingPending) || get(loadingPurchaseReturns) || get(loadingSalesReturns) ? "animate-spin" : "");
					Refresh_cw(node_6, { get class() {
						return `h-3.5 w-3.5 ${get($0) ?? ""}`;
					} });
				}
				next();
				append($$anchor, fragment_4);
			},
			$$slots: { default: true }
		});
	}
	reset(div_3);
	reset(div_1);
	var node_7 = sibling(div_1, 2);
	var consequent_10 = ($$anchor) => {
		var div_4 = root_13();
		var h2 = child(div_4);
		var node_8 = child(h2);
		var consequent_1 = ($$anchor) => {
			var text_1 = text();
			template_effect(() => set_text(text_1, `Editing Supplier — ${get(name) ?? ""}`));
			append($$anchor, text_1);
		};
		var consequent_2 = ($$anchor) => {
			append($$anchor, text("Register New Supplier"));
		};
		var d = user_derived(() => hasRole("master_accountant"));
		var alternate_1 = ($$anchor) => {
			append($$anchor, text("Submit Supplier Registration Request"));
		};
		if_block(node_8, ($$render) => {
			if (get(isEditing)) $$render(consequent_1);
			else if (get(d)) $$render(consequent_2, 1);
			else $$render(alternate_1, -1);
		});
		reset(h2);
		var node_9 = sibling(h2, 2);
		var consequent_3 = ($$anchor) => {
			var p_1 = root_3();
			Triangle_alert(child(p_1), { class: "h-3.5 w-3.5 shrink-0" });
			next();
			reset(p_1);
			append($$anchor, p_1);
		};
		var d_1 = user_derived(() => !get(isEditing) && !hasRole("master_accountant"));
		var alternate_2 = ($$anchor) => {
			append($$anchor, root_4());
		};
		if_block(node_9, ($$render) => {
			if (get(d_1)) $$render(consequent_3);
			else $$render(alternate_2, -1);
		});
		var form = sibling(node_9, 2);
		var div_6 = child(form);
		var div_7 = child(div_6);
		Input(sibling(child(div_7), 2), {
			id: "s-name",
			type: "text",
			required: true,
			placeholder: "e.g. Acme Corp",
			get value() {
				return get(name);
			},
			set value($$value) {
				set(name, $$value, true);
			}
		});
		reset(div_7);
		var div_8 = sibling(div_7, 2);
		var label = child(div_8);
		var node_12 = sibling(child(label), 3);
		var consequent_4 = ($$anchor) => {
			append($$anchor, root_5());
		};
		if_block(node_12, ($$render) => {
			if (get(isEditing)) $$render(consequent_4);
		});
		reset(label);
		Input(sibling(label, 2), {
			id: "s-code",
			type: "text",
			required: true,
			get disabled() {
				return get(isEditing);
			},
			placeholder: "e.g. ACM-01",
			get value() {
				return get(code);
			},
			set value($$value) {
				set(code, $$value, true);
			}
		});
		reset(div_8);
		var node_14 = sibling(div_8, 2);
		var consequent_5 = ($$anchor) => {
			var div_9 = root_6();
			Input(sibling(child(div_9), 2), {
				id: "s-wallet",
				type: "number",
				step: "0.001",
				placeholder: "e.g. 5000.000 or -500.000",
				get value() {
					return get(walletStr);
				},
				set value($$value) {
					set(walletStr, $$value, true);
				}
			});
			reset(div_9);
			append($$anchor, div_9);
		};
		if_block(node_14, ($$render) => {
			if (!get(isEditing)) $$render(consequent_5);
		});
		reset(div_6);
		var div_10 = sibling(div_6, 2);
		var div_11 = child(div_10);
		Button(sibling(child(div_11), 2), {
			type: "button",
			variant: "outline",
			class: "h-7 px-2.5 rounded-lg text-[10px] gap-1 cursor-pointer",
			onclick: addCategory,
			children: ($$anchor, $$slotProps) => {
				var fragment_6 = root_7();
				Plus(first_child(fragment_6), { class: "h-3 w-3" });
				next();
				append($$anchor, fragment_6);
			},
			$$slots: { default: true }
		});
		reset(div_11);
		var node_18 = sibling(div_11, 2);
		var consequent_6 = ($$anchor) => {
			append($$anchor, root_8());
		};
		var alternate_3 = ($$anchor) => {
			var div_13 = root_11();
			each(div_13, 21, () => get(selectedCategories), index, ($$anchor, cat, i) => {
				var div_14 = root_10();
				var select = child(div_14);
				each(select, 21, () => CATEGORY_OPTIONS, index, ($$anchor, opt) => {
					var option = root_9();
					var text_4 = child(option, true);
					reset(option);
					var option_value = {};
					template_effect(() => {
						set_text(text_4, get(opt));
						if (option_value !== (option_value = get(opt))) option.value = (option.__value = get(opt)) ?? "";
					});
					append($$anchor, option);
				});
				reset(select);
				Button(sibling(select, 2), {
					type: "button",
					variant: "ghost",
					class: "h-8 w-8 rounded-lg p-0 text-red-500 hover:text-red-700 hover:bg-red-50 cursor-pointer",
					onclick: () => removeCategory(i),
					children: ($$anchor, $$slotProps) => {
						Trash_2($$anchor, { class: "h-3.5 w-3.5" });
					},
					$$slots: { default: true }
				});
				reset(div_14);
				bind_select_value(select, () => get(selectedCategories)[i], ($$value) => get(selectedCategories)[i] = $$value);
				append($$anchor, div_14);
			});
			reset(div_13);
			append($$anchor, div_13);
		};
		if_block(node_18, ($$render) => {
			if (get(selectedCategories).length === 0) $$render(consequent_6);
			else $$render(alternate_3, -1);
		});
		reset(div_10);
		var div_15 = sibling(div_10, 2);
		var node_20 = child(div_15);
		{
			let $0 = user_derived(() => get(isSaving) || !get(name).trim());
			Button(node_20, {
				type: "submit",
				get disabled() {
					return get($0);
				},
				class: "rounded-xl font-semibold text-xs px-5",
				children: ($$anchor, $$slotProps) => {
					var fragment_8 = root_12();
					var node_21 = first_child(fragment_8);
					var consequent_7 = ($$anchor) => {
						Refresh_cw($$anchor, { class: "h-3.5 w-3.5 mr-1.5 animate-spin" });
					};
					if_block(node_21, ($$render) => {
						if (get(isSaving)) $$render(consequent_7);
					});
					var node_22 = sibling(node_21, 2);
					var consequent_8 = ($$anchor) => {
						append($$anchor, text("Save Changes"));
					};
					var consequent_9 = ($$anchor) => {
						append($$anchor, text("Register Supplier"));
					};
					var d_2 = user_derived(() => hasRole("master_accountant"));
					var alternate_4 = ($$anchor) => {
						append($$anchor, text("Submit for Approval"));
					};
					if_block(node_22, ($$render) => {
						if (get(isEditing)) $$render(consequent_8);
						else if (get(d_2)) $$render(consequent_9, 1);
						else $$render(alternate_4, -1);
					});
					append($$anchor, fragment_8);
				},
				$$slots: { default: true }
			});
		}
		Button(sibling(node_20, 2), {
			type: "button",
			variant: "outline",
			onclick: resetForm,
			class: "rounded-xl text-xs",
			children: ($$anchor, $$slotProps) => {
				next();
				append($$anchor, text("Cancel"));
			},
			$$slots: { default: true }
		});
		reset(div_15);
		reset(form);
		reset(div_4);
		event("submit", form, handleSubmit);
		append($$anchor, div_4);
	};
	if_block(node_7, ($$render) => {
		if (get(showForm)) $$render(consequent_10);
	});
	var div_16 = sibling(node_7, 2);
	var div_17 = child(div_16);
	var button = child(div_17);
	var text_9 = child(button);
	reset(button);
	var button_1 = sibling(button, 2);
	var node_24 = sibling(child(button_1));
	var consequent_11 = ($$anchor) => {
		var span_1 = root_14();
		var text_10 = child(span_1, true);
		reset(span_1);
		template_effect(() => set_text(text_10, get(pending).length));
		append($$anchor, span_1);
	};
	if_block(node_24, ($$render) => {
		if (get(pending).length > 0) $$render(consequent_11);
	});
	reset(button_1);
	var button_2 = sibling(button_1, 2);
	var node_25 = sibling(child(button_2));
	var consequent_12 = ($$anchor) => {
		var span_2 = root_14();
		var text_11 = child(span_2, true);
		reset(span_2);
		template_effect(($0) => set_text(text_11, $0), [() => get(pendingPurchaseReturns).filter((r) => (r.status || "").toLowerCase() === "pending").length]);
		append($$anchor, span_2);
	};
	var d_3 = user_derived(() => get(pendingPurchaseReturns).filter((r) => (r.status || "").toLowerCase() === "pending").length > 0);
	if_block(node_25, ($$render) => {
		if (get(d_3)) $$render(consequent_12);
	});
	reset(button_2);
	var button_3 = sibling(button_2, 2);
	var node_26 = sibling(child(button_3));
	var consequent_13 = ($$anchor) => {
		var span_3 = root_14();
		var text_12 = child(span_3, true);
		reset(span_3);
		template_effect(($0) => set_text(text_12, $0), [() => get(pendingSalesReturns).filter((r) => (r.status || "").toLowerCase() === "pending").length]);
		append($$anchor, span_3);
	};
	var d_4 = user_derived(() => get(pendingSalesReturns).filter((r) => (r.status || "").toLowerCase() === "pending").length > 0);
	if_block(node_26, ($$render) => {
		if (get(d_4)) $$render(consequent_13);
	});
	reset(button_3);
	reset(div_17);
	var node_27 = sibling(div_17, 2);
	var consequent_15 = ($$anchor) => {
		var div_18 = root_16();
		var node_28 = child(div_18);
		Search(node_28, { class: "absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground/60" });
		var input = sibling(node_28, 2);
		remove_input_defaults(input);
		var node_29 = sibling(input, 2);
		var consequent_14 = ($$anchor) => {
			var button_4 = root_15();
			X(child(button_4), { class: "h-3 w-3" });
			reset(button_4);
			delegated("click", button_4, () => set(searchQuery, ""));
			append($$anchor, button_4);
		};
		if_block(node_29, ($$render) => {
			if (get(searchQuery)) $$render(consequent_14);
		});
		reset(div_18);
		bind_value(input, () => get(searchQuery), ($$value) => set(searchQuery, $$value));
		append($$anchor, div_18);
	};
	if_block(node_27, ($$render) => {
		if (get(activeTab) === "list") $$render(consequent_15);
	});
	reset(div_16);
	var node_31 = sibling(div_16, 2);
	var consequent_21 = ($$anchor) => {
		var fragment_10 = comment();
		var node_32 = first_child(fragment_10);
		var consequent_16 = ($$anchor) => {
			var div_19 = root_17();
			Refresh_cw(child(div_19), { class: "h-7 w-7 text-primary animate-spin" });
			reset(div_19);
			append($$anchor, div_19);
		};
		var consequent_17 = ($$anchor) => {
			var div_20 = root_18();
			Shield_check(child(div_20), { class: "h-10 w-10 mx-auto mb-3 text-emerald-400 opacity-60" });
			next();
			reset(div_20);
			append($$anchor, div_20);
		};
		var alternate_7 = ($$anchor) => {
			var div_21 = root_26();
			var div_22 = child(div_21);
			var h2_1 = child(div_22);
			Clock(child(h2_1), { class: "h-3.5 w-3.5" });
			next();
			reset(h2_1);
			reset(div_22);
			var div_23 = sibling(div_22, 2);
			each(div_23, 21, () => get(pending), index, ($$anchor, item) => {
				const p = user_derived(() => JSON.parse(get(item).payloadJson));
				var div_24 = root_25();
				var div_25 = child(div_24);
				var div_26 = child(div_25);
				var span_4 = child(div_26);
				var text_13 = child(span_4, true);
				reset(span_4);
				var span_5 = sibling(span_4, 2);
				var text_14 = child(span_5, true);
				reset(span_5);
				reset(div_26);
				var node_36 = sibling(div_26, 2);
				var consequent_18 = ($$anchor) => {
					var div_27 = root_20();
					each(div_27, 21, () => get(p).categories, index, ($$anchor, cat) => {
						var span_6 = root_19();
						var node_37 = child(span_6);
						Tag(node_37, { class: "h-2.5 w-2.5" });
						var text_15 = sibling(node_37, 1, true);
						reset(span_6);
						template_effect(() => set_text(text_15, get(cat)));
						append($$anchor, span_6);
					});
					reset(div_27);
					append($$anchor, div_27);
				};
				if_block(node_36, ($$render) => {
					if (get(p).categories.length > 0) $$render(consequent_18);
				});
				var div_28 = sibling(node_36, 2);
				var node_38 = child(div_28);
				Clock(node_38, { class: "h-3 w-3" });
				var strong = sibling(node_38, 2);
				var text_16 = child(strong, true);
				reset(strong);
				DateDisplay(sibling(strong, 2), { get value() {
					return get(item).submittedAt;
				} });
				reset(div_28);
				reset(div_25);
				var node_40 = sibling(div_25, 2);
				var consequent_20 = ($$anchor) => {
					var div_29 = root_23();
					var node_41 = child(div_29);
					{
						let $0 = user_derived(() => get(actioningId) === get(item).id);
						Button(node_41, {
							onclick: () => approveSupplier(get(item)),
							get disabled() {
								return get($0);
							},
							class: "rounded-xl h-8 text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white gap-1.5 cursor-pointer",
							children: ($$anchor, $$slotProps) => {
								var fragment_11 = root_21();
								var node_42 = first_child(fragment_11);
								var consequent_19 = ($$anchor) => {
									Refresh_cw($$anchor, { class: "h-3 w-3 animate-spin" });
								};
								var alternate_5 = ($$anchor) => {
									Check($$anchor, { class: "h-3 w-3" });
								};
								if_block(node_42, ($$render) => {
									if (get(actioningId) === get(item).id) $$render(consequent_19);
									else $$render(alternate_5, -1);
								});
								next();
								append($$anchor, fragment_11);
							},
							$$slots: { default: true }
						});
					}
					var node_43 = sibling(node_41, 2);
					{
						let $0 = user_derived(() => get(actioningId) === get(item).id);
						Button(node_43, {
							variant: "outline",
							onclick: () => rejectSupplier(get(item)),
							get disabled() {
								return get($0);
							},
							class: "rounded-xl h-8 text-xs font-semibold border-red-200 text-red-600 hover:bg-red-50 gap-1.5 cursor-pointer",
							children: ($$anchor, $$slotProps) => {
								var fragment_14 = root_22();
								Trash_2(first_child(fragment_14), { class: "h-3 w-3" });
								next();
								append($$anchor, fragment_14);
							},
							$$slots: { default: true }
						});
					}
					reset(div_29);
					append($$anchor, div_29);
				};
				var d_5 = user_derived(() => hasRole("master_accountant"));
				var alternate_6 = ($$anchor) => {
					var span_7 = root_24();
					Clock(child(span_7), { class: "h-3 w-3" });
					next();
					reset(span_7);
					append($$anchor, span_7);
				};
				if_block(node_40, ($$render) => {
					if (get(d_5)) $$render(consequent_20);
					else $$render(alternate_6, -1);
				});
				reset(div_24);
				template_effect(() => {
					set_text(text_13, get(p).name);
					set_text(text_14, get(p).code);
					set_text(text_16, get(item).submittedByName);
				});
				append($$anchor, div_24);
			});
			reset(div_23);
			reset(div_21);
			append($$anchor, div_21);
		};
		if_block(node_32, ($$render) => {
			if (get(loadingPending)) $$render(consequent_16);
			else if (get(pending).length === 0) $$render(consequent_17, 1);
			else $$render(alternate_7, -1);
		});
		append($$anchor, fragment_10);
	};
	if_block(node_31, ($$render) => {
		if (get(activeTab) === "pending") $$render(consequent_21);
	});
	var node_46 = sibling(node_31, 2);
	var consequent_30 = ($$anchor) => {
		var fragment_15 = root_38();
		var div_30 = first_child(fragment_15);
		var div_31 = child(div_30);
		each(div_31, 20, () => [
			"all",
			"pending",
			"approved",
			"rejected"
		], index, ($$anchor, st) => {
			var button_5 = root_27();
			var text_17 = child(button_5, true);
			reset(button_5);
			template_effect(() => {
				set_class(button_5, 1, `px-2.5 py-1 rounded-lg font-semibold transition-all capitalize cursor-pointer ${get(prFilter) === st ? "bg-card text-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"}`);
				set_text(text_17, st);
			});
			delegated("click", button_5, () => {
				set(prFilter, st, true);
				loadPendingPurchaseReturns();
			});
			append($$anchor, button_5);
		});
		reset(div_31);
		var span_8 = sibling(div_31, 2);
		var text_18 = child(span_8);
		reset(span_8);
		reset(div_30);
		var node_47 = sibling(div_30, 2);
		var consequent_22 = ($$anchor) => {
			var div_32 = root_17();
			Refresh_cw(child(div_32), { class: "h-7 w-7 text-primary animate-spin" });
			reset(div_32);
			append($$anchor, div_32);
		};
		var consequent_23 = ($$anchor) => {
			var div_33 = root_28();
			var node_49 = child(div_33);
			Shield_check(node_49, { class: "h-10 w-10 mx-auto mb-3 text-emerald-400 opacity-60" });
			var text_19 = sibling(node_49);
			reset(div_33);
			template_effect(() => set_text(text_19, ` No purchase returns found for filter "${get(prFilter) ?? ""}".`));
			append($$anchor, div_33);
		};
		var alternate_12 = ($$anchor) => {
			var div_34 = root_37();
			var table = child(div_34);
			var tbody = sibling(child(table));
			each(tbody, 21, () => get(pendingPurchaseReturns), index, ($$anchor, item) => {
				var tr = root_36();
				var td = child(tr);
				var div_35 = child(td);
				var text_20 = child(div_35);
				reset(div_35);
				var div_36 = sibling(div_35, 2);
				var node_50 = child(div_36);
				Corner_down_right(node_50, { class: "h-3 w-3" });
				var text_21 = sibling(node_50);
				reset(div_36);
				reset(td);
				var td_1 = sibling(td);
				var node_51 = child(td_1);
				var consequent_24 = ($$anchor) => {
					var a_1 = root_29();
					var text_22 = child(a_1);
					Arrow_right(sibling(text_22), { class: "h-3 w-3" });
					reset(a_1);
					template_effect(($0) => {
						set_attribute(a_1, "href", `/sales/bookings/${get(item).serviceType ?? ""}/${get(item).originalPurchaseReference ?? ""}`);
						set_text(text_22, `${$0 ?? ""} #${get(item).originalPurchaseReference ?? ""} `);
					}, [() => get(item).serviceType.toUpperCase()]);
					append($$anchor, a_1);
				};
				var alternate_8 = ($$anchor) => {
					append($$anchor, root_30());
				};
				if_block(node_51, ($$render) => {
					if (get(item).serviceType && get(item).originalPurchaseReference) $$render(consequent_24);
					else $$render(alternate_8, -1);
				});
				reset(td_1);
				var td_2 = sibling(td_1);
				MoneyDisplay(child(td_2), { get amount() {
					return get(item).amount;
				} });
				reset(td_2);
				var td_3 = sibling(td_2);
				var div_37 = child(td_3);
				var text_23 = child(div_37, true);
				reset(div_37);
				var div_38 = sibling(div_37, 2);
				DateDisplay(sibling(child(div_38)), { get value() {
					return get(item).createdAt;
				} });
				reset(div_38);
				reset(td_3);
				var td_4 = sibling(td_3);
				var node_55 = child(td_4);
				var consequent_27 = ($$anchor) => {
					var fragment_16 = comment();
					var node_56 = first_child(fragment_16);
					var consequent_26 = ($$anchor) => {
						var div_39 = root_31();
						var node_57 = child(div_39);
						{
							let $0 = user_derived(() => get(actioningId) === get(item).id);
							Button(node_57, {
								onclick: () => handleApprovePurchaseReturn(get(item)),
								get disabled() {
									return get($0);
								},
								class: "h-7 px-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] font-bold gap-1 cursor-pointer",
								children: ($$anchor, $$slotProps) => {
									var fragment_17 = root_21();
									var node_58 = first_child(fragment_17);
									var consequent_25 = ($$anchor) => {
										Refresh_cw($$anchor, { class: "h-3 w-3 animate-spin" });
									};
									var alternate_9 = ($$anchor) => {
										Check($$anchor, { class: "h-3 w-3" });
									};
									if_block(node_58, ($$render) => {
										if (get(actioningId) === get(item).id) $$render(consequent_25);
										else $$render(alternate_9, -1);
									});
									next();
									append($$anchor, fragment_17);
								},
								$$slots: { default: true }
							});
						}
						var node_59 = sibling(node_57, 2);
						{
							let $0 = user_derived(() => get(actioningId) === get(item).id);
							Button(node_59, {
								variant: "outline",
								onclick: () => openRejectModal(get(item).id, "purchase"),
								get disabled() {
									return get($0);
								},
								class: "h-7 px-2.5 rounded-lg border-red-200 text-red-600 hover:bg-red-50 text-[10px] font-bold gap-1 cursor-pointer",
								children: ($$anchor, $$slotProps) => {
									var fragment_20 = root_22();
									Trash_2(first_child(fragment_20), { class: "h-3 w-3" });
									next();
									append($$anchor, fragment_20);
								},
								$$slots: { default: true }
							});
						}
						reset(div_39);
						append($$anchor, div_39);
					};
					var d_6 = user_derived(() => hasRole("accountant"));
					var alternate_10 = ($$anchor) => {
						var span_10 = root_32();
						Clock(child(span_10), { class: "h-3 w-3" });
						next();
						reset(span_10);
						append($$anchor, span_10);
					};
					if_block(node_56, ($$render) => {
						if (get(d_6)) $$render(consequent_26);
						else $$render(alternate_10, -1);
					});
					append($$anchor, fragment_16);
				};
				var d_7 = user_derived(() => (get(item).status || "").toLowerCase() === "pending");
				var consequent_28 = ($$anchor) => {
					var span_11 = root_33();
					Check(child(span_11), { class: "h-3 w-3" });
					next();
					reset(span_11);
					append($$anchor, span_11);
				};
				var d_8 = user_derived(() => (get(item).status || "").toLowerCase() === "approved");
				var consequent_29 = ($$anchor) => {
					var span_12 = root_34();
					X(child(span_12), { class: "h-3 w-3" });
					next();
					reset(span_12);
					append($$anchor, span_12);
				};
				var d_9 = user_derived(() => (get(item).status || "").toLowerCase() === "rejected");
				var alternate_11 = ($$anchor) => {
					var span_13 = root_35();
					var text_24 = child(span_13, true);
					reset(span_13);
					template_effect(() => set_text(text_24, get(item).status));
					append($$anchor, span_13);
				};
				if_block(node_55, ($$render) => {
					if (get(d_7)) $$render(consequent_27);
					else if (get(d_8)) $$render(consequent_28, 1);
					else if (get(d_9)) $$render(consequent_29, 2);
					else $$render(alternate_11, -1);
				});
				reset(td_4);
				reset(tr);
				template_effect(($0) => {
					set_text(text_20, `Supplier #${get(item).supplierId ?? ""}`);
					set_text(text_21, ` Refund Dest: ${$0 ?? ""}`);
					set_text(text_23, get(item).reason || "No reason specified");
				}, [() => get(item).destinationType?.toUpperCase()]);
				append($$anchor, tr);
			});
			reset(tbody);
			reset(table);
			reset(div_34);
			append($$anchor, div_34);
		};
		if_block(node_47, ($$render) => {
			if (get(loadingPurchaseReturns)) $$render(consequent_22);
			else if (get(pendingPurchaseReturns).length === 0) $$render(consequent_23, 1);
			else $$render(alternate_12, -1);
		});
		template_effect(() => set_text(text_18, `${get(pendingPurchaseReturns).length ?? ""} return(s)`));
		append($$anchor, fragment_15);
	};
	if_block(node_46, ($$render) => {
		if (get(activeTab) === "purchase-returns") $$render(consequent_30);
	});
	var node_64 = sibling(node_46, 2);
	var consequent_39 = ($$anchor) => {
		var fragment_21 = root_38();
		var div_40 = first_child(fragment_21);
		var div_41 = child(div_40);
		each(div_41, 20, () => [
			"all",
			"pending",
			"approved",
			"rejected"
		], index, ($$anchor, st) => {
			var button_6 = root_27();
			var text_25 = child(button_6, true);
			reset(button_6);
			template_effect(() => {
				set_class(button_6, 1, `px-2.5 py-1 rounded-lg font-semibold transition-all capitalize cursor-pointer ${get(srFilter) === st ? "bg-card text-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"}`);
				set_text(text_25, st);
			});
			delegated("click", button_6, () => {
				set(srFilter, st, true);
				loadPendingSalesReturns();
			});
			append($$anchor, button_6);
		});
		reset(div_41);
		var span_14 = sibling(div_41, 2);
		var text_26 = child(span_14);
		reset(span_14);
		reset(div_40);
		var node_65 = sibling(div_40, 2);
		var consequent_31 = ($$anchor) => {
			var div_42 = root_17();
			Refresh_cw(child(div_42), { class: "h-7 w-7 text-primary animate-spin" });
			reset(div_42);
			append($$anchor, div_42);
		};
		var consequent_32 = ($$anchor) => {
			var div_43 = root_28();
			var node_67 = child(div_43);
			Shield_check(node_67, { class: "h-10 w-10 mx-auto mb-3 text-emerald-400 opacity-60" });
			var text_27 = sibling(node_67);
			reset(div_43);
			template_effect(() => set_text(text_27, ` No sales returns found for filter "${get(srFilter) ?? ""}".`));
			append($$anchor, div_43);
		};
		var alternate_17 = ($$anchor) => {
			var div_44 = root_40();
			var table_1 = child(div_44);
			var tbody_1 = sibling(child(table_1));
			each(tbody_1, 21, () => get(pendingSalesReturns), index, ($$anchor, item) => {
				var tr_1 = root_39();
				var td_5 = child(tr_1);
				var div_45 = child(td_5);
				var text_28 = child(div_45);
				reset(div_45);
				var div_46 = sibling(div_45, 2);
				Corner_down_right(child(div_46), { class: "h-3 w-3" });
				next();
				reset(div_46);
				reset(td_5);
				var td_6 = sibling(td_5);
				var node_69 = child(td_6);
				var consequent_33 = ($$anchor) => {
					var a_2 = root_29();
					var text_29 = child(a_2);
					Arrow_right(sibling(text_29), { class: "h-3 w-3" });
					reset(a_2);
					template_effect(($0) => {
						set_attribute(a_2, "href", `/sales/bookings/${get(item).serviceType ?? ""}/${get(item).originalSaleReference ?? ""}`);
						set_text(text_29, `${$0 ?? ""} #${get(item).originalSaleReference ?? ""} `);
					}, [() => get(item).serviceType.toUpperCase()]);
					append($$anchor, a_2);
				};
				var alternate_13 = ($$anchor) => {
					append($$anchor, root_30());
				};
				if_block(node_69, ($$render) => {
					if (get(item).serviceType && get(item).originalSaleReference) $$render(consequent_33);
					else $$render(alternate_13, -1);
				});
				reset(td_6);
				var td_7 = sibling(td_6);
				MoneyDisplay(child(td_7), { get amount() {
					return get(item).amount;
				} });
				reset(td_7);
				var td_8 = sibling(td_7);
				var div_47 = child(td_8);
				var text_30 = child(div_47, true);
				reset(div_47);
				var div_48 = sibling(div_47, 2);
				DateDisplay(sibling(child(div_48)), { get value() {
					return get(item).createdAt;
				} });
				reset(div_48);
				reset(td_8);
				var td_9 = sibling(td_8);
				var node_73 = child(td_9);
				var consequent_36 = ($$anchor) => {
					var fragment_22 = comment();
					var node_74 = first_child(fragment_22);
					var consequent_35 = ($$anchor) => {
						var div_49 = root_31();
						var node_75 = child(div_49);
						{
							let $0 = user_derived(() => get(actioningId) === get(item).id);
							Button(node_75, {
								onclick: () => handleApproveSalesReturn(get(item)),
								get disabled() {
									return get($0);
								},
								class: "h-7 px-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] font-bold gap-1 cursor-pointer",
								children: ($$anchor, $$slotProps) => {
									var fragment_23 = root_21();
									var node_76 = first_child(fragment_23);
									var consequent_34 = ($$anchor) => {
										Refresh_cw($$anchor, { class: "h-3 w-3 animate-spin" });
									};
									var alternate_14 = ($$anchor) => {
										Check($$anchor, { class: "h-3 w-3" });
									};
									if_block(node_76, ($$render) => {
										if (get(actioningId) === get(item).id) $$render(consequent_34);
										else $$render(alternate_14, -1);
									});
									next();
									append($$anchor, fragment_23);
								},
								$$slots: { default: true }
							});
						}
						var node_77 = sibling(node_75, 2);
						{
							let $0 = user_derived(() => get(actioningId) === get(item).id);
							Button(node_77, {
								variant: "outline",
								onclick: () => openRejectModal(get(item).id, "sales"),
								get disabled() {
									return get($0);
								},
								class: "h-7 px-2.5 rounded-lg border-red-200 text-red-600 hover:bg-red-50 text-[10px] font-bold gap-1 cursor-pointer",
								children: ($$anchor, $$slotProps) => {
									var fragment_26 = root_22();
									Trash_2(first_child(fragment_26), { class: "h-3 w-3" });
									next();
									append($$anchor, fragment_26);
								},
								$$slots: { default: true }
							});
						}
						reset(div_49);
						append($$anchor, div_49);
					};
					var d_10 = user_derived(() => hasRole("accountant"));
					var alternate_15 = ($$anchor) => {
						var span_16 = root_32();
						Clock(child(span_16), { class: "h-3 w-3" });
						next();
						reset(span_16);
						append($$anchor, span_16);
					};
					if_block(node_74, ($$render) => {
						if (get(d_10)) $$render(consequent_35);
						else $$render(alternate_15, -1);
					});
					append($$anchor, fragment_22);
				};
				var d_11 = user_derived(() => (get(item).status || "").toLowerCase() === "pending");
				var consequent_37 = ($$anchor) => {
					var span_17 = root_33();
					Check(child(span_17), { class: "h-3 w-3" });
					next();
					reset(span_17);
					append($$anchor, span_17);
				};
				var d_12 = user_derived(() => (get(item).status || "").toLowerCase() === "approved");
				var consequent_38 = ($$anchor) => {
					var span_18 = root_34();
					X(child(span_18), { class: "h-3 w-3" });
					next();
					reset(span_18);
					append($$anchor, span_18);
				};
				var d_13 = user_derived(() => (get(item).status || "").toLowerCase() === "rejected");
				var alternate_16 = ($$anchor) => {
					var span_19 = root_35();
					var text_31 = child(span_19, true);
					reset(span_19);
					template_effect(() => set_text(text_31, get(item).status));
					append($$anchor, span_19);
				};
				if_block(node_73, ($$render) => {
					if (get(d_11)) $$render(consequent_36);
					else if (get(d_12)) $$render(consequent_37, 1);
					else if (get(d_13)) $$render(consequent_38, 2);
					else $$render(alternate_16, -1);
				});
				reset(td_9);
				reset(tr_1);
				template_effect(($0) => {
					set_text(text_28, `Recipient: ${$0 ?? ""}`);
					set_text(text_30, get(item).reason || "No reason specified");
				}, [() => getRecipientLabel(get(item).recipientType, get(item).recipientId, get(item))]);
				append($$anchor, tr_1);
			});
			reset(tbody_1);
			reset(table_1);
			reset(div_44);
			append($$anchor, div_44);
		};
		if_block(node_65, ($$render) => {
			if (get(loadingSalesReturns)) $$render(consequent_31);
			else if (get(pendingSalesReturns).length === 0) $$render(consequent_32, 1);
			else $$render(alternate_17, -1);
		});
		template_effect(() => set_text(text_26, `${get(pendingSalesReturns).length ?? ""} return(s)`));
		append($$anchor, fragment_21);
	};
	if_block(node_64, ($$render) => {
		if (get(activeTab) === "sales-returns") $$render(consequent_39);
	});
	var node_82 = sibling(node_64, 2);
	var consequent_43 = ($$anchor) => {
		var fragment_27 = comment();
		var node_83 = first_child(fragment_27);
		var consequent_40 = ($$anchor) => {
			var div_50 = root_41();
			Refresh_cw(child(div_50), { class: "h-8 w-8 text-primary animate-spin" });
			reset(div_50);
			append($$anchor, div_50);
		};
		var consequent_41 = ($$anchor) => {
			var div_51 = root_42();
			var text_32 = child(div_51, true);
			reset(div_51);
			template_effect(() => set_text(text_32, get(searchQuery) ? `No suppliers matching "${get(searchQuery)}".` : "No registered suppliers found."));
			append($$anchor, div_51);
		};
		var alternate_18 = ($$anchor) => {
			var div_52 = root_47();
			var table_2 = child(div_52);
			var tbody_2 = sibling(child(table_2));
			each(tbody_2, 21, () => get(filteredSuppliers), index, ($$anchor, s) => {
				var tr_2 = root_46();
				var td_10 = child(tr_2);
				var text_33 = child(td_10, true);
				reset(td_10);
				var td_11 = sibling(td_10);
				var text_34 = child(td_11, true);
				reset(td_11);
				var td_12 = sibling(td_11);
				var div_53 = child(td_12);
				each(div_53, 21, () => get(s).categories, index, ($$anchor, cat) => {
					var span_20 = root_43();
					var text_35 = child(span_20, true);
					reset(span_20);
					template_effect(() => set_text(text_35, get(cat)));
					append($$anchor, span_20);
				}, ($$anchor) => {
					append($$anchor, root_44());
				});
				reset(div_53);
				reset(td_12);
				var td_13 = sibling(td_12);
				var text_36 = child(td_13, true);
				MoneyDisplay(sibling(text_36), { get amount() {
					return get(s).wallet;
				} });
				reset(td_13);
				var td_14 = sibling(td_13);
				var div_54 = child(td_14);
				var button_7 = child(div_54);
				Wallet(child(button_7), { class: "h-3.5 w-3.5" });
				reset(button_7);
				var node_87 = sibling(button_7, 2);
				var consequent_42 = ($$anchor) => {
					var button_8 = root_45();
					Pencil(child(button_8), { class: "h-3.5 w-3.5" });
					reset(button_8);
					delegated("click", button_8, () => startEdit(get(s)));
					append($$anchor, button_8);
				};
				var d_14 = user_derived(() => hasRole("master_accountant"));
				if_block(node_87, ($$render) => {
					if (get(d_14)) $$render(consequent_42);
				});
				reset(div_54);
				reset(td_14);
				reset(tr_2);
				template_effect(() => {
					set_text(text_33, get(s).code);
					set_text(text_34, get(s).name);
					set_class(td_13, 1, `p-4 text-right font-mono font-bold ${get(s).wallet > 0 ? "text-emerald-600" : get(s).wallet < 0 ? "text-rose-500" : "text-muted-foreground"}`);
					set_text(text_36, get(s).wallet > 0 ? "+" : "");
				});
				delegated("click", button_7, () => goto(`/suppliers/${get(s).id}`));
				append($$anchor, tr_2);
			});
			reset(tbody_2);
			reset(table_2);
			var div_55 = sibling(table_2, 2);
			var span_22 = child(div_55);
			var strong_1 = sibling(child(span_22));
			var text_37 = child(strong_1, true);
			reset(strong_1);
			var strong_2 = sibling(strong_1, 2);
			var text_38 = child(strong_2, true);
			reset(strong_2);
			next();
			reset(span_22);
			reset(div_55);
			reset(div_52);
			template_effect(() => {
				set_text(text_37, get(filteredSuppliers).length);
				set_text(text_38, get(suppliers).length);
			});
			append($$anchor, div_52);
		};
		if_block(node_83, ($$render) => {
			if (get(isLoading)) $$render(consequent_40);
			else if (get(filteredSuppliers).length === 0) $$render(consequent_41, 1);
			else $$render(alternate_18, -1);
		});
		append($$anchor, fragment_27);
	};
	if_block(node_82, ($$render) => {
		if (get(activeTab) === "list") $$render(consequent_43);
	});
	reset(div);
	var node_89 = sibling(div, 2);
	var consequent_44 = ($$anchor) => {
		var div_56 = root_48();
		var div_57 = child(div_56);
		var h3 = child(div_57);
		Message_square(child(h3), { class: "h-4 w-4" });
		next();
		reset(h3);
		var div_58 = sibling(h3, 4);
		Input(sibling(child(div_58), 2), {
			id: "reject-reason",
			type: "text",
			required: true,
			placeholder: "e.g. Insufficient verification, incorrect amount",
			get value() {
				return get(rejectReason);
			},
			set value($$value) {
				set(rejectReason, $$value, true);
			}
		});
		reset(div_58);
		var div_59 = sibling(div_58, 2);
		var node_92 = child(div_59);
		Button(node_92, {
			type: "button",
			variant: "outline",
			onclick: () => {
				set(showRejectModal, false);
				set(itemToReject, null);
			},
			class: "rounded-xl",
			children: ($$anchor, $$slotProps) => {
				next();
				append($$anchor, text("Cancel"));
			},
			$$slots: { default: true }
		});
		var node_93 = sibling(node_92, 2);
		{
			let $0 = user_derived(() => !get(rejectReason).trim());
			Button(node_93, {
				type: "button",
				get disabled() {
					return get($0);
				},
				onclick: submitRejection,
				class: "rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold",
				children: ($$anchor, $$slotProps) => {
					next();
					append($$anchor, text("Reject Transaction"));
				},
				$$slots: { default: true }
			});
		}
		reset(div_59);
		reset(div_57);
		reset(div_56);
		append($$anchor, div_56);
	};
	if_block(node_89, ($$render) => {
		if (get(showRejectModal)) $$render(consequent_44);
	});
	template_effect(() => {
		set_class(button, 1, `px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer shrink-0 whitespace-nowrap ${get(activeTab) === "list" ? "bg-card text-foreground shadow-xs border border-border/30" : "text-muted-foreground hover:text-foreground"}`);
		set_text(text_9, `All Suppliers (${get(suppliers).length ?? ""})`);
		set_class(button_1, 1, `px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 shrink-0 whitespace-nowrap ${get(activeTab) === "pending" ? "bg-card text-foreground shadow-xs border border-border/30" : "text-muted-foreground hover:text-foreground"}`);
		set_class(button_2, 1, `px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 shrink-0 whitespace-nowrap ${get(activeTab) === "purchase-returns" ? "bg-card text-foreground shadow-xs border border-border/30" : "text-muted-foreground hover:text-foreground"}`);
		set_class(button_3, 1, `px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 shrink-0 whitespace-nowrap ${get(activeTab) === "sales-returns" ? "bg-card text-foreground shadow-xs border border-border/30" : "text-muted-foreground hover:text-foreground"}`);
	});
	delegated("click", button, () => set(activeTab, "list"));
	delegated("click", button_1, () => set(activeTab, "pending"));
	delegated("click", button_2, () => set(activeTab, "purchase-returns"));
	delegated("click", button_3, () => set(activeTab, "sales-returns"));
	append($$anchor, fragment);
	pop();
	$$cleanup();
}
delegate(["click"]);
//#endregion
export { _page as component };

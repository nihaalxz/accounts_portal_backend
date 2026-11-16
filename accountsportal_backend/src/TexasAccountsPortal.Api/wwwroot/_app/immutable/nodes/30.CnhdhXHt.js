import { B as append, Bt as reset, Ct as user_derived, D as head, Et as store_get, G as text, H as from_html, I as if_block, J as event, K as delegate, M as slot, N as each, Nt as pop, P as index, Pt as push, Q as get, R as set_text, S as select_option, T as clsx, Tt as setup_stores, V as comment, _ as set_attribute, a as legacy_rest_props, b as bind_select_value, bt as state, c as spread_props, dt as $document, g as remove_input_defaults, gt as proxy, ht as sibling, it as effect, m as bind_value, mt as first_child, ot as template_effect, pt as child, q as delegated, r as onMount, ut as remove_textarea_child, vt as set, w as set_class, x as init_select, zt as next } from "../chunks/dXkmWTgM.js";
import { t as goto } from "../chunks/C4dPzSg8.js";
import "../chunks/DhaYE-8x.js";
import { t as apiFetch } from "../chunks/DR__V3U1.js";
import { i as hasRole } from "../chunks/BX_ONFXj.js";
import "../chunks/DZfWAsjW.js";
import { t as addToast } from "../chunks/CbPRQHfn.js";
import { t as Icon } from "../chunks/BalaELqB.js";
import { t as Arrow_down_left } from "../chunks/GChCIwC_.js";
import { t as Arrow_left } from "../chunks/Bn7x0kyr.js";
import { t as Arrow_up_right } from "../chunks/BUyTpJv8.js";
import { t as Building_2 } from "../chunks/PAfPMPpZ.js";
import { t as Coins } from "../chunks/B2DQy1SS2.js";
import { t as Credit_card } from "../chunks/DZ-rRKb92.js";
import { t as Landmark } from "../chunks/D_q7zQKx2.js";
import { t as Receipt } from "../chunks/4mbxDyuf.js";
import { t as Sparkles } from "../chunks/DEdRl-lg.js";
import { t as User } from "../chunks/C8PICJbu.js";
import { t as Users } from "../chunks/Bja056I7.js";
import { t as Wallet } from "../chunks/BahXSy4P.js";
import { t as page } from "../chunks/DxMnRCuv.js";
import { t as Button } from "../chunks/BhXsq3bC.js";
import "../chunks/n1tWSsVh.js";
import { t as MoneyDisplay } from "../chunks/CIVSRuaR2.js";
import { r as getAccounts } from "../chunks/C0Kip8c_2.js";
import { n as getBanks } from "../chunks/w7-6s4882.js";
import { i as createOutgoingTransaction, n as createContraTransaction, r as createIncomingTransaction } from "../chunks/D_VU-UXJ2.js";
import { t as createIdempotentOperation } from "../chunks/Bt9NpIc72.js";
import { o as getExpenseHeaders, r as createExpense } from "../chunks/hDE83iTt.js";
import { c as getBucketHelpText, l as getBucketSourceLabel, s as getBucketDirection } from "../chunks/rjZ5RTov.js";
import { o as createSupplierPayment } from "../chunks/_xkwNUB2.js";
import { a as getSalaryProfiles, t as createSalaryPayment } from "../chunks/BVlqvfTL.js";
import { t as SearchableSelect } from "../chunks/B-Y5NBqj.js";
//#region node_modules/lucide-svelte/dist/icons/arrow-down-to-line.svelte
function Arrow_down_to_line($$anchor, $$props) {
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
		["path", { "d": "M12 17V3" }],
		["path", { "d": "m6 11 6 6 6-6" }],
		["path", { "d": "M19 21H5" }]
	];
	/**
	* @component @name ArrowDownToLine
	* @description Lucide SVG icon component, renders SVG Element with children.
	*
	* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgMTdWMyIgLz4KICA8cGF0aCBkPSJtNiAxMSA2IDYgNi02IiAvPgogIDxwYXRoIGQ9Ik0xOSAyMUg1IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/arrow-down-to-line
	* @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
	*
	* @param {Object} props - Lucide icons props and any valid SVG attribute
	* @returns {FunctionalComponent} Svelte component
	*
	*/
	Icon($$anchor, spread_props({ name: "arrow-down-to-line" }, () => $$sanitized_props, {
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
//#region node_modules/lucide-svelte/dist/icons/arrow-right-left.svelte
function Arrow_right_left($$anchor, $$props) {
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
		["path", { "d": "m16 3 4 4-4 4" }],
		["path", { "d": "M20 7H4" }],
		["path", { "d": "m8 21-4-4 4-4" }],
		["path", { "d": "M4 17h16" }]
	];
	/**
	* @component @name ArrowRightLeft
	* @description Lucide SVG icon component, renders SVG Element with children.
	*
	* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMTYgMyA0IDQtNCA0IiAvPgogIDxwYXRoIGQ9Ik0yMCA3SDQiIC8+CiAgPHBhdGggZD0ibTggMjEtNC00IDQtNCIgLz4KICA8cGF0aCBkPSJNNCAxN2gxNiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/arrow-right-left
	* @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
	*
	* @param {Object} props - Lucide icons props and any valid SVG attribute
	* @returns {FunctionalComponent} Svelte component
	*
	*/
	Icon($$anchor, spread_props({ name: "arrow-right-left" }, () => $$sanitized_props, {
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
//#region node_modules/lucide-svelte/dist/icons/arrow-up-from-line.svelte
function Arrow_up_from_line($$anchor, $$props) {
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
		["path", { "d": "m18 9-6-6-6 6" }],
		["path", { "d": "M12 3v14" }],
		["path", { "d": "M5 21h14" }]
	];
	/**
	* @component @name ArrowUpFromLine
	* @description Lucide SVG icon component, renders SVG Element with children.
	*
	* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMTggOS02LTYtNiA2IiAvPgogIDxwYXRoIGQ9Ik0xMiAzdjE0IiAvPgogIDxwYXRoIGQ9Ik01IDIxaDE0IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/arrow-up-from-line
	* @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
	*
	* @param {Object} props - Lucide icons props and any valid SVG attribute
	* @returns {FunctionalComponent} Svelte component
	*
	*/
	Icon($$anchor, spread_props({ name: "arrow-up-from-line" }, () => $$sanitized_props, {
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
var root_2 = from_html(`<strong>Deposit:</strong> Head pays money into company account $
ightarrow$ increases head wallet balance.`, 1);
var root_3 = from_html(`<strong>Withdraw:</strong> Funds paid out to head from company account $
ightarrow$ decreases head wallet balance.`, 1);
var root_4 = from_html(`<label for="head-customer-select" class="block font-semibold text-foreground">Select Customer <span class="text-red-500">*</span></label> <!>`, 1);
var root_5 = from_html(`<label for="head-agent-select" class="block font-semibold text-foreground">Select Agent <span class="text-red-500">*</span></label> <!>`, 1);
var root_6 = from_html(`<div class="p-3 bg-background border border-border rounded-xl space-y-2"><div class="flex items-center justify-between text-xs pb-1.5 border-b border-border/60"><span class="font-bold text-foreground"> </span> <span class="text-[10px] uppercase font-semibold text-muted-foreground bg-muted px-2 py-0.5 rounded"> </span></div> <div class="grid grid-cols-3 gap-2 text-center"><div class="p-2 bg-muted/40 rounded-lg"><span class="text-[10px] text-muted-foreground block font-medium">Current Balance</span> <span class="text-xs font-bold font-mono text-foreground block"><!></span></div> <div class="p-2 bg-muted/40 rounded-lg"><span class="text-[10px] text-muted-foreground block font-medium">Txn Amount</span> <span> </span></div> <div class="p-2 bg-muted/40 rounded-lg"><span class="text-[10px] text-muted-foreground block font-medium">Balance After</span> <span class="text-xs font-bold font-mono text-primary block"><!></span></div></div></div>`);
var root_7 = from_html(`<span class="text-[10px] font-mono text-emerald-600 font-bold"> </span>`);
var root_8 = from_html(`<option> </option>`);
var root_9 = from_html(`<div class="space-y-1.5 animate-in fade-in duration-200"><label for="head-cash-acc" class="font-semibold text-foreground flex items-center justify-between"><span>Cash Drawer Account</span> <!></label> <select id="head-cash-acc" class="w-full h-10 px-3 rounded-xl border border-border bg-background text-foreground text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500/30"><option>-- Select Cash Account --</option><!></select></div>`);
var root_10 = from_html(`<div class="space-y-1.5 animate-in fade-in duration-200"><label for="head-bank-acc" class="font-semibold text-foreground flex items-center justify-between"><span>Bank Account</span> <!></label> <select id="head-bank-acc" class="w-full h-10 px-3 rounded-xl border border-border bg-background text-foreground text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500/30"><option>-- Select Bank Account --</option><!></select></div>`);
var root_11 = from_html(`<button type="button" class="text-[10px] text-rose-600 font-bold hover:underline cursor-pointer"> </button>`);
var root_12 = from_html(`<div class="p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-xl space-y-4 animate-in fade-in duration-200"><div class="flex items-center justify-between pb-2 border-b border-border/60"><div class="flex items-center gap-2"><!> <span class="font-bold text-foreground">Head Balance Deposit & Withdrawal</span></div> <span class="text-[11px] text-muted-foreground font-medium">Agents & Customers</span></div> <div class="space-y-1.5"><span class="block font-semibold text-muted-foreground">1. Operation Direction</span> <div class="grid grid-cols-2 gap-2 bg-muted/30 p-1 rounded-xl"><button type="button"><!> <span>Deposit to Balance (+)</span></button> <button type="button"><!> <span>Withdraw from Balance (-)</span></button></div> <p class="text-[11px] text-muted-foreground"><!></p></div> <div class="space-y-1.5 pt-1"><span class="block font-semibold text-muted-foreground">2. Select Entity Type</span> <div class="grid grid-cols-2 gap-2 bg-muted/30 p-1 rounded-xl"><button type="button"><!> <span>Customer</span></button> <button type="button"><!> <span>Agents</span></button></div></div> <div class="space-y-1.5 pt-1"><!></div> <!> <div class="space-y-3 pt-2 border-t border-border/50"><div class="space-y-1.5"><span class="block font-semibold text-muted-foreground"> </span> <div class="grid grid-cols-2 gap-2 bg-muted/30 p-1 rounded-xl"><button type="button"><!> <span>Cash Account</span></button> <button type="button"><!> <span>Bank Account</span></button></div></div> <!></div> <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-border/50"><div class="space-y-1.5"><label for="head-amount-input" class="font-semibold text-foreground flex items-center justify-between"><span>Amount (BHD) <span class="text-red-500">*</span></span> <!></label> <input id="head-amount-input" type="number" step="0.001" min="0.001" placeholder="0.000" class="h-10 w-full bg-background border border-border rounded-xl px-3 text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/30 font-mono font-bold" required=""/></div> <div class="space-y-1.5"><label for="head-ref-input" class="font-semibold text-foreground">Reference / Cheque / Slip No.</label> <input id="head-ref-input" type="text" placeholder="e.g. SLIP-9923 / CHQ-1048" class="h-10 w-full bg-background border border-border rounded-xl px-3 text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/30"/></div></div> <div class="space-y-1.5"><label for="head-desc-input" class="font-semibold text-foreground">Description / Narrative <span class="text-red-500">*</span></label> <input id="head-desc-input" type="text" required="" placeholder="Purpose of head balance deposit or withdrawal..." class="h-10 w-full bg-background border border-border rounded-xl px-3 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500/30 text-foreground"/></div></div>`);
var root_13 = from_html(`<div><label for="contra-src-acc" class="block font-semibold text-muted-foreground mb-1.5">Cash Account</label> <select id="contra-src-acc" class="w-full h-10 px-3 rounded-xl border border-border bg-background text-foreground text-xs focus:outline-none focus:ring-2 focus:ring-amber-500/30"><option>Select Cash Account</option><!></select></div>`);
var root_14 = from_html(`<div><label for="contra-src-bank" class="block font-semibold text-muted-foreground mb-1.5">Bank Account</label> <select id="contra-src-bank" class="w-full h-10 px-3 rounded-xl border border-border bg-background text-foreground text-xs focus:outline-none focus:ring-2 focus:ring-amber-500/30"><option>Select Bank Account</option><!></select></div>`);
var root_15 = from_html(`<div><label for="contra-dst-acc" class="block font-semibold text-muted-foreground mb-1.5">Cash Account</label> <select id="contra-dst-acc" class="w-full h-10 px-3 rounded-xl border border-border bg-background text-foreground text-xs focus:outline-none focus:ring-2 focus:ring-amber-500/30"><option>Select Cash Account</option><!></select></div>`);
var root_16 = from_html(`<div><label for="contra-dst-bank" class="block font-semibold text-muted-foreground mb-1.5">Bank Account</label> <select id="contra-dst-bank" class="w-full h-10 px-3 rounded-xl border border-border bg-background text-foreground text-xs focus:outline-none focus:ring-2 focus:ring-amber-500/30"><option>Select Bank Account</option><!></select></div>`);
var root_17 = from_html(`<div class="p-4 bg-amber-500/5 border border-amber-500/20 rounded-xl space-y-4 animate-in fade-in duration-200"><div class="border border-border/80 p-4 rounded-xl bg-background space-y-3"><h3 class="font-bold text-muted-foreground uppercase tracking-wider text-[10px] pb-1 border-b border-border/50">SOURCE FUNDING ACCOUNT</h3> <div class="grid grid-cols-1 sm:grid-cols-2 gap-3"><div><span class="block font-semibold text-muted-foreground mb-1.5">Source Type</span> <div class="flex gap-2 bg-muted/30 p-1 rounded-xl"><button type="button">Cash Account</button> <button type="button">Bank Account</button></div></div> <!></div></div> <div class="border border-border/80 p-4 rounded-xl bg-background space-y-3"><h3 class="font-bold text-muted-foreground uppercase tracking-wider text-[10px] pb-1 border-b border-border/50">DESTINATION RECEIVING ACCOUNT</h3> <div class="grid grid-cols-1 sm:grid-cols-2 gap-3"><div><span class="block font-semibold text-muted-foreground mb-1.5">Destination Type</span> <div class="flex gap-2 bg-muted/30 p-1 rounded-xl"><button type="button">Cash Account</button> <button type="button">Bank Account</button></div></div> <!></div></div> <div class="grid grid-cols-1 sm:grid-cols-2 gap-3"><div><label for="contra-amount" class="block font-semibold text-muted-foreground mb-1.5">Amount (BHD) <span class="text-red-500">*</span></label> <input id="contra-amount" type="number" step="0.001" min="0.001" placeholder="0.000" class="w-full h-10 px-3 rounded-xl border border-border bg-background text-foreground text-xs font-mono font-bold focus:outline-none focus:ring-2 focus:ring-amber-500/30" required=""/></div> <div><label for="contra-desc" class="block font-semibold text-muted-foreground mb-1.5">Description (Optional)</label> <input id="contra-desc" type="text" placeholder="e.g. Bank cash deposit / Drawer transfer" class="w-full h-10 px-3 rounded-xl border border-border bg-background text-foreground text-xs focus:outline-none focus:ring-2 focus:ring-amber-500/30"/></div></div></div>`);
var root_18 = from_html(`<span class="text-[10px] text-amber-600">No profiles found</span>`);
var root_19 = from_html(`<div class="space-y-1.5"><label for="salaryCashAcc" class="font-semibold text-foreground">Cash Drawer Account</label> <select id="salaryCashAcc" class="h-10 w-full bg-background border border-border rounded-xl px-3 text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-amber-500/20"><option>-- Select Cash Drawer --</option><!></select></div>`);
var root_20 = from_html(`<div class="space-y-1.5"><label for="salaryBankAcc" class="font-semibold text-foreground">Bank Account</label> <select id="salaryBankAcc" class="h-10 w-full bg-background border border-border rounded-xl px-3 text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-amber-500/20"><option>-- Select Bank Account --</option><!></select></div>`);
var root_21 = from_html(`<div class="p-4 bg-amber-500/5 border border-amber-500/20 rounded-xl space-y-4 animate-in fade-in duration-200"><div class="space-y-1.5"><label for="salaryProfile" class="font-semibold text-foreground flex items-center justify-between"><span>Employee Profile <span class="text-red-500">*</span></span> <!></label> <select id="salaryProfile" class="h-10 w-full bg-background border border-border rounded-xl px-3 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500/20 text-foreground" required=""><option>-- Select Employee --</option><!></select></div> <div class="grid grid-cols-2 gap-3"><div class="space-y-1.5"><label for="payrollMonth" class="font-semibold text-foreground">Payroll Month</label> <select id="payrollMonth" class="h-10 w-full bg-background border border-border rounded-xl px-3 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500/20 text-foreground"></select></div> <div class="space-y-1.5"><label for="payrollYear" class="font-semibold text-foreground">Payroll Year</label> <input id="payrollYear" type="number" class="h-10 w-full bg-background border border-border rounded-xl px-3 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500/20 text-foreground"/></div></div> <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3 bg-muted/40 rounded-xl border border-border/60"><div class="space-y-1"><label for="basicSalary" class="text-[11px] font-semibold text-muted-foreground">Basic Salary</label> <input id="basicSalary" type="number" step="0.001" class="h-8 w-full bg-background border border-border rounded-lg px-2.5 text-xs text-foreground font-mono"/></div> <div class="space-y-1"><label for="incentive" class="text-[11px] font-semibold text-muted-foreground">Incentive</label> <input id="incentive" type="number" step="0.001" class="h-8 w-full bg-background border border-border rounded-lg px-2.5 text-xs text-foreground font-mono"/></div> <div class="space-y-1"><label for="bonus" class="text-[11px] font-semibold text-muted-foreground">Bonus</label> <input id="bonus" type="number" step="0.001" class="h-8 w-full bg-background border border-border rounded-lg px-2.5 text-xs text-foreground font-mono"/></div> <div class="space-y-1"><label for="allowance" class="text-[11px] font-semibold text-muted-foreground">Allowance</label> <input id="allowance" type="number" step="0.001" class="h-8 w-full bg-background border border-border rounded-lg px-2.5 text-xs text-foreground font-mono"/></div> <div class="space-y-1"><label for="deduction" class="text-[11px] font-semibold text-muted-foreground">Deductions</label> <input id="deduction" type="number" step="0.001" class="h-8 w-full bg-background border border-border rounded-lg px-2.5 text-xs text-rose-600 font-mono"/></div> <div class="space-y-1 bg-amber-500/10 p-1.5 rounded-lg border border-amber-500/20 flex flex-col justify-center"><span class="text-[10px] uppercase font-bold text-amber-700 dark:text-amber-400">Net Payable</span> <span class="text-xs font-bold font-mono text-foreground"> </span></div></div> <div class="space-y-3"><div class="space-y-1.5"><span class="font-semibold text-foreground">Payment Method</span> <div class="grid grid-cols-2 gap-2 bg-muted/30 p-1 rounded-xl"><button type="button">Cash Account</button> <button type="button">Bank Account</button></div></div> <!></div> <div class="space-y-1.5"><label for="salaryRemarks" class="font-semibold text-foreground">Remarks / Memo</label> <input id="salaryRemarks" type="text" placeholder="e.g. Regular monthly payroll with bonus" class="h-10 w-full bg-background border border-border rounded-xl px-3 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500/20 text-foreground"/></div></div>`);
var root_22 = from_html(`<span class="text-[11px] font-mono text-purple-600 dark:text-purple-400 font-bold"> </span>`);
var root_23 = from_html(`<div class="p-4 bg-purple-500/5 border border-purple-500/20 rounded-xl space-y-4 animate-in fade-in duration-200"><div class="space-y-1.5"><label for="supplierId" class="font-semibold text-foreground flex items-center justify-between"><span>Supplier <span class="text-red-500">*</span></span> <!></label> <select id="supplierId" class="h-10 w-full bg-background border border-border rounded-xl px-3 text-xs focus:outline-none focus:ring-2 focus:ring-purple-500/20 text-foreground disabled:opacity-50" required=""><option>-- Select Supplier --</option><!></select></div> <div class="space-y-1.5"><span class="font-semibold text-foreground">Supplier Payment Purpose</span> <div class="grid grid-cols-2 sm:grid-cols-4 gap-2"><button type="button"><div class="flex items-center gap-1.5 font-bold text-xs"><!> <span>Prepaid Wallet</span></div> <span class="text-[10px] opacity-80 leading-tight">Top-up wallet funds</span></button> <button type="button"><div class="flex items-center gap-1.5 font-bold text-xs"><!> <span>Credit Debt</span></div> <span class="text-[10px] opacity-80 leading-tight">Settle credit payable</span></button> <button type="button"><div class="flex items-center gap-1.5 font-bold text-xs"><!> <span>Advance</span></div> <span class="text-[10px] opacity-80 leading-tight">Advance payment</span></button> <button type="button"><div class="flex items-center gap-1.5 font-bold text-xs"><!> <span>Refund</span></div> <span class="text-[10px] opacity-80 leading-tight">Supplier refund back</span></button></div></div></div>`);
var root_24 = from_html(`<span class="text-[10px] font-bold text-primary px-2 py-0.5 rounded bg-primary/10"> </span>`);
var root_25 = from_html(`<div class="space-y-1.5"><label for="expenseCategoryId" class="font-semibold text-foreground flex items-center justify-between"><span>Account Category Header <span class="text-red-500">*</span></span> <!></label> <select id="expenseCategoryId" class="h-10 w-full bg-background border border-border rounded-xl px-3 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground disabled:opacity-50" required=""><option>-- Select Category --</option><!></select> <p class="text-[11px] text-muted-foreground"> </p></div>`);
var root_26 = from_html(`<button type="button" class="text-[10px] text-purple-600 font-bold hover:underline cursor-pointer"> </button>`);
var root_27 = from_html(`<div class="space-y-1.5 animate-in fade-in duration-200"><label for="sourceAccountId" class="font-semibold text-foreground flex items-center justify-between"><span> </span> <!></label> <select id="sourceAccountId" class="h-10 w-full bg-background border border-border rounded-xl px-3 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground disabled:opacity-50"><option> </option><!></select></div>`);
var root_28 = from_html(`<div class="space-y-1.5 animate-in fade-in duration-200"><label for="sourceBankId" class="font-semibold text-foreground flex items-center justify-between"><span> </span> <!></label> <select id="sourceBankId" class="h-10 w-full bg-background border border-border rounded-xl px-3 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground disabled:opacity-50"><option> </option><!></select></div>`);
var root_29 = from_html(`<div class="space-y-1.5 animate-in fade-in duration-200"><label for="supplierRefNumber" class="font-semibold text-foreground">Supplier Invoice / Ref No. (Optional)</label> <input id="supplierRefNumber" type="text" placeholder="e.g. INV-99482 / Booking Ref" class="h-10 w-full bg-background border border-border rounded-xl px-3 text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-purple-500/30"/></div>`);
var root_30 = from_html(`Posting <strong class="font-mono text-purple-700 dark:text-purple-300"> </strong> via <strong> </strong> `, 1);
var root_31 = from_html(`Posting <strong class="font-mono text-primary"> </strong> under <strong> </strong> via <strong> </strong>.`, 1);
var root_32 = from_html(`<div class="p-3.5 bg-primary/5 border border-primary/20 rounded-xl text-xs space-y-1.5 animate-in fade-in duration-200"><div class="flex items-center gap-1.5 font-bold text-primary"><!> <span>Transaction Impact Preview</span></div> <p class="text-[11px] text-foreground font-medium leading-relaxed"><!></p></div>`);
var root_33 = from_html(`<!> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><div class="space-y-1.5"><label for="amount" class="font-semibold text-foreground flex items-center justify-between"><span>Amount (BHD) <span class="text-red-500">*</span></span> <!></label> <input id="amount" type="number" step="0.001" min="0.001" required="" placeholder="0.000" class="h-10 w-full bg-background border border-border rounded-xl px-3 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground font-mono font-bold"/></div> <div class="space-y-1.5"><span class="font-semibold text-foreground">Payment Method</span> <div class="grid grid-cols-2 gap-2 bg-muted/30 p-1 rounded-xl"><button type="button">Cash Account</button> <button type="button">Bank Account</button></div></div></div> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><!> <!></div> <div class="space-y-1.5"><label for="description" class="font-semibold text-foreground">Description / Purpose</label> <input id="description" type="text" required="" class="h-10 w-full bg-background border border-border rounded-xl px-3 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground"/></div> <div class="space-y-1.5"><label for="notes" class="font-semibold text-muted-foreground">Notes / Remarks (Optional)</label> <textarea id="notes" rows="2" placeholder="Add internal voucher notes or remarks..." class="w-full bg-background border border-border rounded-xl p-3 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground resize-y"></textarea></div> <!>`, 1);
var root_34 = from_html(`<div class="max-w-2xl mx-auto space-y-6 pb-12"><div class="space-y-2"><button class="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground cursor-pointer transition-colors"><!> Back to Treasury Payments</button> <div class="flex items-center justify-between"><div class="space-y-1"><h1 class="text-xl font-bold text-foreground tracking-tight">Log Financial Transaction</h1> <p class="text-xs text-muted-foreground">Record treasury payouts, general expenses, head balance deposits/withdrawals, or supplier wallet & credit settlements.</p></div> <!></div></div> <div class="bg-muted/40 p-1 rounded-2xl border border-border/80 flex flex-wrap sm:flex-nowrap items-center gap-1"><button type="button"><!> <span>General</span></button> <button type="button"><!> <span>Supplier</span></button> <button type="button"><!> <span>Head Balance</span></button> <button type="button"><!> <span>Salary</span></button> <button type="button"><!> <span>Contra</span></button></div> <form class="bg-card border border-border rounded-2xl p-6 shadow-xs space-y-5 text-xs"><!> <div class="flex items-center justify-end gap-3 pt-4 border-t border-border"><!> <!></div></form></div>`);
function _page($$anchor, $$props) {
	push($$props, true);
	const $page = () => store_get(page, "$page", $$stores);
	const [$$stores, $$cleanup] = setup_stores();
	let activeTab = state("general");
	const idempotentOp = createIdempotentOperation();
	let expenseCategoryIdVal = state("");
	let amount = state("");
	let description = state("");
	let paymentMethod = state("cash");
	let sourceAccountIdVal = state("");
	let sourceBankIdVal = state("");
	let notes = state("");
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
	let supplierIdVal = state("");
	let supplierPaymentType = state("supplier_wallet");
	let referenceNumber = state("");
	let headEntityType = state("customer");
	let headOperationType = state("deposit");
	let headCustomerId = state("");
	let headAgentId = state("");
	let headPaymentMethod = state("cash");
	let headSourceAccountId = state("");
	let headSourceBankId = state("");
	let headAmount = state("");
	let headReference = state("");
	let headDescription = state("");
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
		status: "Pending",
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
	let agentsList = state(proxy([]));
	let headsList = state(proxy([]));
	let isSubmitting = state(false);
	let isLoadingData = state(true);
	const isSupplierTransaction = user_derived(() => get(activeTab) === "supplier");
	user_derived(() => get(activeTab) === "head");
	const selectedSupplier = user_derived(() => get(suppliers).find((s) => String(s.id) === get(supplierIdVal)) || null);
	const selectedCategory = user_derived(() => get(categories).find((c) => String(c.id) === get(expenseCategoryIdVal)) || null);
	const categoryBucket = user_derived(() => get(selectedCategory)?.category || "Expenses");
	const direction = user_derived(() => {
		if (get(activeTab) === "head") return get(headOperationType) === "deposit" ? "incoming" : "outgoing";
		return getBucketDirection(get(categoryBucket), get(isSupplierTransaction) ? get(supplierPaymentType) : void 0);
	});
	const sourceLabel = user_derived(() => getBucketSourceLabel(get(categoryBucket), get(isSupplierTransaction) ? get(supplierPaymentType) : void 0));
	const helpText = user_derived(() => getBucketHelpText(get(categoryBucket), get(isSupplierTransaction) ? get(supplierPaymentType) : void 0));
	const selectedCashAccount = user_derived(() => get(cashAccounts).find((a) => String(a.id) === get(sourceAccountIdVal)) || null);
	const selectedBankAccount = user_derived(() => get(bankAccounts).find((b) => String(b.id) === get(sourceBankIdVal)) || null);
	const agentOptions = user_derived(() => get(agentsList).map((a) => {
		const name = a.fullName || `${a.firstName || ""} ${a.lastName || ""}`.trim() || `Agent #${a.id}`;
		return {
			id: a.id,
			name,
			subtext: `AGENT • Phone: ${a.phoneNo || "N/A"} • Balance: ${Number(a.wallet || 0).toFixed(3)} BHD`
		};
	}));
	const customerOptions = user_derived(() => get(headsList).filter((h) => {
		const t = (h.type || h.clientType || "").toLowerCase();
		return t !== "agent" && t !== "b2b" && t !== "b2b_agent";
	}).map((h) => {
		const name = `${h.firstName || ""} ${h.lastName || ""}`.trim() || h.name || `Customer #${h.id}`;
		return {
			id: h.id,
			name,
			subtext: `CUSTOMER • Balance: ${Number(h.wallet || 0).toFixed(3)} BHD`
		};
	}));
	const selectedAgent = user_derived(() => get(agentsList).find((a) => String(a.id) === String(get(headAgentId))) || null);
	const selectedCustomer = user_derived(() => get(headsList).find((h) => String(h.id) === String(get(headCustomerId))) || null);
	const selectedHeadEntity = user_derived(() => get(headEntityType) === "agent" ? get(selectedAgent) : get(selectedCustomer));
	const selectedHeadEntityName = user_derived(() => {
		if (get(headEntityType) === "agent" && get(selectedAgent)) return get(selectedAgent).fullName || `${get(selectedAgent).firstName || ""} ${get(selectedAgent).lastName || ""}`.trim() || `Agent #${get(selectedAgent).id}`;
		if (get(headEntityType) === "customer" && get(selectedCustomer)) return `${get(selectedCustomer).firstName || ""} ${get(selectedCustomer).lastName || ""}`.trim() || get(selectedCustomer).name || `Customer #${get(selectedCustomer).id}`;
		return "";
	});
	const selectedHeadEntityBalance = user_derived(() => Number(get(selectedHeadEntity)?.wallet || 0));
	const calculatedHeadBalanceAfter = user_derived(() => {
		const numAmt = parseFloat(get(headAmount) || "0") || 0;
		if (get(headOperationType) === "deposit") return get(selectedHeadEntityBalance) + numAmt;
		else return get(selectedHeadEntityBalance) - numAmt;
	});
	const selectedHeadCashAccount = user_derived(() => get(cashAccounts).find((a) => String(a.id) === String(get(headSourceAccountId))) || null);
	const selectedHeadBankAccount = user_derived(() => get(bankAccounts).find((b) => String(b.id) === String(get(headSourceBankId))) || null);
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
			const [headersList, cashList, bankList, supplierList, salaryProfList, agentsRes, headsRes] = await Promise.all([
				getExpenseHeaders().catch(() => []),
				getAccounts().catch(() => []),
				getBanks().catch(() => []),
				apiFetch("/api/supplier").catch(() => []),
				getSalaryProfiles().catch(() => []),
				apiFetch("/api/agent").catch(() => []),
				apiFetch("/api/sales-entries/heads?pageSize=500").catch(() => [])
			]);
			set(categories, Array.isArray(headersList) ? headersList : headersList?.items || [], true);
			set(cashAccounts, (Array.isArray(cashList) ? cashList : cashList?.items || []).filter((a) => a.isActive), true);
			set(bankAccounts, (Array.isArray(bankList) ? bankList : bankList?.items || []).filter((b) => b.isActive), true);
			set(suppliers, Array.isArray(supplierList) ? supplierList : supplierList?.items || [], true);
			set(salaryProfiles, Array.isArray(salaryProfList) ? salaryProfList : salaryProfList?.items || [], true);
			set(agentsList, Array.isArray(agentsRes) ? agentsRes : agentsRes?.items || [], true);
			set(headsList, Array.isArray(headsRes) ? headsRes : headsRes?.items || [], true);
			if (get(cashAccounts).length > 0) {
				if (!salaryForm.cashAccountId) salaryForm.cashAccountId = get(cashAccounts)[0]?.id ?? null;
				if (!get(sourceAccountIdVal)) set(sourceAccountIdVal, String(get(cashAccounts)[0]?.id ?? ""), true);
				if (!get(headSourceAccountId)) set(headSourceAccountId, String(get(cashAccounts)[0]?.id ?? ""), true);
			}
			if (get(bankAccounts).length > 0) {
				if (!salaryForm.bankAccountId) salaryForm.bankAccountId = get(bankAccounts)[0]?.id ?? null;
				if (!get(sourceBankIdVal)) set(sourceBankIdVal, String(get(bankAccounts)[0]?.id ?? ""), true);
				if (!get(headSourceBankId)) set(headSourceBankId, String(get(bankAccounts)[0]?.id ?? ""), true);
			}
		} catch (err) {
			addToast(err.message || "Failed to load form dropdown data.", "error");
		} finally {
			set(isLoadingData, false);
		}
	}
	function handleTabSwitch(tab) {
		set(activeTab, tab, true);
		if (tab === "supplier" && !get(supplierPaymentType)) set(supplierPaymentType, "supplier_wallet");
		if (tab === "head") updateHeadDescription();
	}
	function updateHeadDescription() {
		const entName = get(selectedHeadEntityName) || (get(headEntityType) === "agent" ? "Agent" : "Customer");
		if (get(headOperationType) === "deposit") set(headDescription, `Deposit to ${get(headEntityType) === "agent" ? "Agent" : "Customer"} balance for ${entName}`);
		else set(headDescription, `Withdrawal from ${get(headEntityType) === "agent" ? "Agent" : "Customer"} balance for ${entName}`);
	}
	async function handleHeadSubmit() {
		const selectedId = get(headEntityType) === "agent" ? get(headAgentId) : get(headCustomerId);
		if (!selectedId) {
			addToast(`Please select a ${get(headEntityType) === "agent" ? "Agent" : "Customer Head"}.`, "error");
			return;
		}
		const numAmt = parseFloat(get(headAmount));
		if (isNaN(numAmt) || numAmt <= 0) {
			addToast("Amount must be greater than zero.", "error");
			return;
		}
		if (get(headPaymentMethod) === "cash" && !get(headSourceAccountId)) {
			addToast("Please select a Cash Account.", "error");
			return;
		}
		if (get(headPaymentMethod) === "bank" && !get(headSourceBankId)) {
			addToast("Please select a Bank Account.", "error");
			return;
		}
		set(isSubmitting, true);
		try {
			const recipientType = get(headEntityType) === "agent" ? "Agent" : "Head";
			const recipientId = Number(selectedId);
			const desc = get(headDescription).trim() || (get(headOperationType) === "deposit" ? `Wallet deposit for ${get(selectedHeadEntityName)}` : `Wallet withdrawal for ${get(selectedHeadEntityName)}`);
			if (get(headOperationType) === "deposit") {
				await createIncomingTransaction({
					destinationAccountId: get(headPaymentMethod) === "cash" ? Number(get(headSourceAccountId)) : null,
					destinationBankId: get(headPaymentMethod) === "bank" ? Number(get(headSourceBankId)) : null,
					amount: numAmt,
					paymentMethod: get(headPaymentMethod) === "cash" ? "cash" : "bank",
					referenceType: "wallet_deposit",
					referenceId: get(headReference).trim() || null,
					description: desc,
					recipientType,
					recipientId
				}, idempotentOp.key);
				addToast(`Successfully deposited ${numAmt.toFixed(3)} BHD to ${get(selectedHeadEntityName)}'s balance.`, "success");
			} else {
				await createOutgoingTransaction({
					sourceAccountId: get(headPaymentMethod) === "cash" ? Number(get(headSourceAccountId)) : null,
					sourceBankId: get(headPaymentMethod) === "bank" ? Number(get(headSourceBankId)) : null,
					amount: numAmt,
					paymentMethod: get(headPaymentMethod) === "cash" ? "cash" : "bank",
					referenceType: "wallet_withdrawal",
					referenceId: get(headReference).trim() || null,
					description: desc,
					recipientType,
					recipientId
				}, idempotentOp.key);
				addToast(`Successfully processed withdrawal of ${numAmt.toFixed(3)} BHD for ${get(selectedHeadEntityName)}.`, "success");
			}
			idempotentOp.retire();
			goto("/payments");
		} catch (err) {
			addToast(err.message || "Failed to process head balance transaction.", "error");
		} finally {
			set(isSubmitting, false);
		}
	}
	async function handleContraSubmit() {
		if (contraForm.sourceType === "account" && !contraForm.sourceAccountId) {
			addToast("Source Cash Account is required.", "error");
			return;
		}
		if (contraForm.sourceType === "bank" && !contraForm.sourceBankId) {
			addToast("Source Bank Account is required.", "error");
			return;
		}
		if (contraForm.destinationType === "account" && !contraForm.destinationAccountId) {
			addToast("Destination Cash Account is required.", "error");
			return;
		}
		if (contraForm.destinationType === "bank" && !contraForm.destinationBankId) {
			addToast("Destination Bank Account is required.", "error");
			return;
		}
		const numAmt = Number(contraForm.amount);
		if (isNaN(numAmt) || numAmt <= 0) {
			addToast("Amount must be greater than zero.", "error");
			return;
		}
		if (contraForm.sourceType === contraForm.destinationType && (contraForm.sourceType === "account" ? String(contraForm.sourceAccountId) === String(contraForm.destinationAccountId) : String(contraForm.sourceBankId) === String(contraForm.destinationBankId))) {
			addToast("Source and Destination cannot be the exact same account.", "error");
			return;
		}
		set(isSubmitting, true);
		try {
			await createContraTransaction({
				sourceAccountId: contraForm.sourceType === "account" ? Number(contraForm.sourceAccountId) : null,
				sourceBankId: contraForm.sourceType === "bank" ? Number(contraForm.sourceBankId) : null,
				destinationAccountId: contraForm.destinationType === "account" ? Number(contraForm.destinationAccountId) : null,
				destinationBankId: contraForm.destinationType === "bank" ? Number(contraForm.destinationBankId) : null,
				amount: numAmt,
				description: contraForm.description.trim() || null
			}, idempotentOp.key);
			addToast("Contra transfer posted successfully.", "success");
			idempotentOp.retire();
			goto("/payments");
		} catch (err) {
			addToast(err.message || "Failed to post contra transfer.", "error");
		} finally {
			set(isSubmitting, false);
		}
	}
	function onSalaryProfileSelected(profId) {
		set(selectedSalaryProfileId, profId, true);
		salaryForm.salaryProfileId = profId;
		const prof = (get(salaryProfiles) || []).find((p) => p && p.id === profId);
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
		if (get(activeTab) === "head") {
			await handleHeadSubmit();
			return;
		}
		if (get(activeTab) === "contra") {
			await handleContraSubmit();
			return;
		}
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
				const isMaster = hasRole("master_accountant");
				const targetStatus = isMaster ? "Paid" : "Pending";
				await createSalaryPayment({
					...salaryForm,
					status: targetStatus,
					paymentDate: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
					cashAccountId: salaryForm.paymentMethod === "Cash Account" ? salaryForm.cashAccountId : null,
					bankAccountId: salaryForm.paymentMethod === "Bank Account" ? salaryForm.bankAccountId : null
				});
				addToast(isMaster ? "Salary payout processed and auto-approved." : "Salary payout submitted for Master Accountant approval.", "success");
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
				}, idempotentOp.key);
				idempotentOp.retire();
				if (hasRole("master_accountant")) {
					addToast("Supplier transaction recorded and approved successfully.", "success");
					goto("/suppliers");
				} else {
					addToast("Supplier transaction submitted for Master Accountant approval.", "info");
					goto("/pending-approvals");
				}
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
		if (queryTab === "contra" || queryTab === "transfer") set(activeTab, "contra");
		else if (queryTab === "head" || queryTab === "wallet" || queryTab === "agent" || queryTab === "customer") {
			set(activeTab, "head");
			const queryOp = $page().url.searchParams.get("type") || $page().url.searchParams.get("op");
			if (queryOp === "withdraw" || queryOp === "withdrawal") set(headOperationType, "withdraw");
			else set(headOperationType, "deposit");
			const queryAgentId = $page().url.searchParams.get("agentId");
			const queryHeadId = $page().url.searchParams.get("headId") || $page().url.searchParams.get("customerId");
			if (queryAgentId) {
				set(headEntityType, "agent");
				set(headAgentId, queryAgentId, true);
			} else if (queryHeadId) {
				set(headEntityType, "customer");
				set(headCustomerId, queryHeadId, true);
			}
			updateHeadDescription();
		} else if (queryTab === "salary" || queryProfileId) {
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
	var div = root_34();
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
	Receipt(child(button_1), { class: "h-3.5 w-3.5 text-primary" });
	next(2);
	reset(button_1);
	var button_2 = sibling(button_1, 2);
	Coins(child(button_2), { class: "h-3.5 w-3.5" });
	next(2);
	reset(button_2);
	var button_3 = sibling(button_2, 2);
	Users(child(button_3), { class: "h-3.5 w-3.5" });
	next(2);
	reset(button_3);
	var button_4 = sibling(button_3, 2);
	Wallet(child(button_4), { class: "h-3.5 w-3.5" });
	next(2);
	reset(button_4);
	var button_5 = sibling(button_4, 2);
	Arrow_right_left(child(button_5), { class: "h-3.5 w-3.5" });
	next(2);
	reset(button_5);
	reset(div_3);
	var form = sibling(div_3, 2);
	var node_9 = child(form);
	var consequent_8 = ($$anchor) => {
		var div_4 = root_12();
		var div_5 = child(div_4);
		var div_6 = child(div_5);
		Users(child(div_6), { class: "h-4 w-4 text-emerald-600" });
		next(2);
		reset(div_6);
		next(2);
		reset(div_5);
		var div_7 = sibling(div_5, 2);
		var div_8 = sibling(child(div_7), 2);
		var button_6 = child(div_8);
		Arrow_down_to_line(child(button_6), { class: "h-4 w-4 text-emerald-500" });
		next(2);
		reset(button_6);
		var button_7 = sibling(button_6, 2);
		Arrow_up_from_line(child(button_7), { class: "h-4 w-4 text-rose-500" });
		next(2);
		reset(button_7);
		reset(div_8);
		var p_1 = sibling(div_8, 2);
		var node_13 = child(p_1);
		var consequent_1 = ($$anchor) => {
			var fragment = root_2();
			next();
			append($$anchor, fragment);
		};
		var alternate_1 = ($$anchor) => {
			var fragment_1 = root_3();
			next();
			append($$anchor, fragment_1);
		};
		if_block(node_13, ($$render) => {
			if (get(headOperationType) === "deposit") $$render(consequent_1);
			else $$render(alternate_1, -1);
		});
		reset(p_1);
		reset(div_7);
		var div_9 = sibling(div_7, 2);
		var div_10 = sibling(child(div_9), 2);
		var button_8 = child(div_10);
		User(child(button_8), { class: "h-3.5 w-3.5 text-primary" });
		next(2);
		reset(button_8);
		var button_9 = sibling(button_8, 2);
		Building_2(child(button_9), { class: "h-3.5 w-3.5 text-primary" });
		next(2);
		reset(button_9);
		reset(div_10);
		reset(div_9);
		var div_11 = sibling(div_9, 2);
		var node_16 = child(div_11);
		var consequent_2 = ($$anchor) => {
			var fragment_2 = root_4();
			SearchableSelect(sibling(first_child(fragment_2), 2), {
				id: "head-customer-select",
				get options() {
					return get(customerOptions);
				},
				placeholder: "-- Search & Select Customer --",
				searchPlaceholder: "Search customer name, phone, or balance...",
				required: true,
				onchange: () => updateHeadDescription(),
				get value() {
					return get(headCustomerId);
				},
				set value($$value) {
					set(headCustomerId, $$value, true);
				}
			});
			append($$anchor, fragment_2);
		};
		var alternate_2 = ($$anchor) => {
			var fragment_3 = root_5();
			SearchableSelect(sibling(first_child(fragment_3), 2), {
				id: "head-agent-select",
				get options() {
					return get(agentOptions);
				},
				placeholder: "-- Search & Select Agent --",
				searchPlaceholder: "Search agent name, phone, or balance...",
				required: true,
				onchange: () => updateHeadDescription(),
				get value() {
					return get(headAgentId);
				},
				set value($$value) {
					set(headAgentId, $$value, true);
				}
			});
			append($$anchor, fragment_3);
		};
		if_block(node_16, ($$render) => {
			if (get(headEntityType) === "customer") $$render(consequent_2);
			else $$render(alternate_2, -1);
		});
		reset(div_11);
		var node_19 = sibling(div_11, 2);
		var consequent_3 = ($$anchor) => {
			var div_12 = root_6();
			var div_13 = child(div_12);
			var span_2 = child(div_13);
			var text = child(span_2, true);
			reset(span_2);
			var span_3 = sibling(span_2, 2);
			var text_1 = child(span_3, true);
			reset(span_3);
			reset(div_13);
			var div_14 = sibling(div_13, 2);
			var div_15 = child(div_14);
			var span_4 = sibling(child(div_15), 2);
			MoneyDisplay(child(span_4), { get amount() {
				return get(selectedHeadEntityBalance);
			} });
			reset(span_4);
			reset(div_15);
			var div_16 = sibling(div_15, 2);
			var span_5 = sibling(child(div_16), 2);
			var text_2 = child(span_5);
			reset(span_5);
			reset(div_16);
			var div_17 = sibling(div_16, 2);
			var span_6 = sibling(child(div_17), 2);
			MoneyDisplay(child(span_6), { get amount() {
				return get(calculatedHeadBalanceAfter);
			} });
			reset(span_6);
			reset(div_17);
			reset(div_14);
			reset(div_12);
			template_effect(($0) => {
				set_text(text, get(selectedHeadEntityName));
				set_text(text_1, get(headEntityType));
				set_class(span_5, 1, `text-xs font-bold font-mono ${get(headOperationType) === "deposit" ? "text-emerald-600" : "text-rose-600"} block`);
				set_text(text_2, `${get(headOperationType) === "deposit" ? "+" : "-"}${$0 ?? ""} BHD`);
			}, [() => parseFloat(get(headAmount) || "0").toFixed(3)]);
			append($$anchor, div_12);
		};
		if_block(node_19, ($$render) => {
			if (get(selectedHeadEntity)) $$render(consequent_3);
		});
		var div_18 = sibling(node_19, 2);
		var div_19 = child(div_18);
		var span_7 = child(div_19);
		var text_3 = child(span_7, true);
		reset(span_7);
		var div_20 = sibling(span_7, 2);
		var button_10 = child(div_20);
		Coins(child(button_10), { class: "h-3.5 w-3.5 text-primary" });
		next(2);
		reset(button_10);
		var button_11 = sibling(button_10, 2);
		Landmark(child(button_11), { class: "h-3.5 w-3.5 text-primary" });
		next(2);
		reset(button_11);
		reset(div_20);
		reset(div_19);
		var node_24 = sibling(div_19, 2);
		var consequent_5 = ($$anchor) => {
			var div_21 = root_9();
			var label = child(div_21);
			var node_25 = sibling(child(label), 2);
			var consequent_4 = ($$anchor) => {
				var span_8 = root_7();
				var text_4 = child(span_8);
				reset(span_8);
				template_effect(($0) => set_text(text_4, `Bal: ${$0 ?? ""} BHD`), [() => get(selectedHeadCashAccount).currentBalance.toFixed(3)]);
				append($$anchor, span_8);
			};
			if_block(node_25, ($$render) => {
				if (get(selectedHeadCashAccount)) $$render(consequent_4);
			});
			reset(label);
			var select = sibling(label, 2);
			var option = child(select);
			option.value = option.__value = "";
			each(sibling(option), 17, () => get(cashAccounts), index, ($$anchor, acc) => {
				var option_1 = root_8();
				var text_5 = child(option_1);
				reset(option_1);
				var option_1_value = {};
				template_effect(($0, $1) => {
					set_text(text_5, `${get(acc).name ?? ""} (${$0 ?? ""} BHD)`);
					if (option_1_value !== (option_1_value = $1)) option_1.value = (option_1.__value = $1) ?? "";
				}, [() => get(acc).currentBalance.toFixed(3), () => String(get(acc).id)]);
				append($$anchor, option_1);
			});
			reset(select);
			reset(div_21);
			bind_select_value(select, () => get(headSourceAccountId), ($$value) => set(headSourceAccountId, $$value));
			append($$anchor, div_21);
		};
		var alternate_3 = ($$anchor) => {
			var div_22 = root_10();
			var label_1 = child(div_22);
			var node_27 = sibling(child(label_1), 2);
			var consequent_6 = ($$anchor) => {
				var span_9 = root_7();
				var text_6 = child(span_9);
				reset(span_9);
				template_effect(($0) => set_text(text_6, `Bal: ${$0 ?? ""} BHD`), [() => get(selectedHeadBankAccount).currentBalance.toFixed(3)]);
				append($$anchor, span_9);
			};
			if_block(node_27, ($$render) => {
				if (get(selectedHeadBankAccount)) $$render(consequent_6);
			});
			reset(label_1);
			var select_1 = sibling(label_1, 2);
			var option_2 = child(select_1);
			option_2.value = option_2.__value = "";
			each(sibling(option_2), 17, () => get(bankAccounts), index, ($$anchor, b) => {
				var option_3 = root_8();
				var text_7 = child(option_3);
				reset(option_3);
				var option_3_value = {};
				template_effect(($0, $1) => {
					set_text(text_7, `${get(b).bankName ?? ""} (${get(b).accountNumber ?? ""}) — Bal: ${$0 ?? ""} BHD`);
					if (option_3_value !== (option_3_value = $1)) option_3.value = (option_3.__value = $1) ?? "";
				}, [() => get(b).currentBalance.toFixed(3), () => String(get(b).id)]);
				append($$anchor, option_3);
			});
			reset(select_1);
			reset(div_22);
			bind_select_value(select_1, () => get(headSourceBankId), ($$value) => set(headSourceBankId, $$value));
			append($$anchor, div_22);
		};
		if_block(node_24, ($$render) => {
			if (get(headPaymentMethod) === "cash") $$render(consequent_5);
			else $$render(alternate_3, -1);
		});
		reset(div_18);
		var div_23 = sibling(div_18, 2);
		var div_24 = child(div_23);
		var label_2 = child(div_24);
		var node_29 = sibling(child(label_2), 2);
		var consequent_7 = ($$anchor) => {
			var button_12 = root_11();
			var text_8 = child(button_12);
			reset(button_12);
			template_effect(($0) => set_text(text_8, `Max (${$0 ?? ""})`), [() => get(selectedHeadEntityBalance).toFixed(3)]);
			delegated("click", button_12, () => set(headAmount, get(selectedHeadEntityBalance).toFixed(3), true));
			append($$anchor, button_12);
		};
		if_block(node_29, ($$render) => {
			if (get(headOperationType) === "withdraw" && get(selectedHeadEntity) && get(selectedHeadEntityBalance) > 0) $$render(consequent_7);
		});
		reset(label_2);
		var input = sibling(label_2, 2);
		remove_input_defaults(input);
		reset(div_24);
		var div_25 = sibling(div_24, 2);
		var input_1 = sibling(child(div_25), 2);
		remove_input_defaults(input_1);
		reset(div_25);
		reset(div_23);
		var div_26 = sibling(div_23, 2);
		var input_2 = sibling(child(div_26), 2);
		remove_input_defaults(input_2);
		reset(div_26);
		reset(div_4);
		template_effect(($0, $1, $2, $3, $4, $5) => {
			set_class(button_6, 1, $0);
			set_class(button_7, 1, $1);
			set_class(button_8, 1, $2);
			set_class(button_9, 1, $3);
			set_text(text_3, get(headOperationType) === "deposit" ? "Receiving Company Account" : "Paying Company Account");
			set_class(button_10, 1, $4);
			set_class(button_11, 1, $5);
		}, [
			() => clsx(["py-2.5 text-center rounded-lg font-semibold transition-all cursor-pointer flex items-center justify-center gap-2 text-xs", get(headOperationType) === "deposit" ? "bg-card text-emerald-600 dark:text-emerald-400 font-bold shadow-xs border border-emerald-500/30" : "text-muted-foreground hover:text-foreground"].join(" ")),
			() => clsx(["py-2.5 text-center rounded-lg font-semibold transition-all cursor-pointer flex items-center justify-center gap-2 text-xs", get(headOperationType) === "withdraw" ? "bg-card text-rose-600 dark:text-rose-400 font-bold shadow-xs border border-rose-500/30" : "text-muted-foreground hover:text-foreground"].join(" ")),
			() => clsx(["py-2 text-center rounded-lg font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5", get(headEntityType) === "customer" ? "bg-card text-foreground font-bold shadow-xs border border-border" : "text-muted-foreground hover:text-foreground"].join(" ")),
			() => clsx(["py-2 text-center rounded-lg font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5", get(headEntityType) === "agent" ? "bg-card text-foreground font-bold shadow-xs border border-border" : "text-muted-foreground hover:text-foreground"].join(" ")),
			() => clsx(["py-2 text-center rounded-lg font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5", get(headPaymentMethod) === "cash" ? "bg-card text-foreground font-bold shadow-xs border border-border" : "text-muted-foreground hover:text-foreground"].join(" ")),
			() => clsx(["py-2 text-center rounded-lg font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5", get(headPaymentMethod) === "bank" ? "bg-card text-foreground font-bold shadow-xs border border-border" : "text-muted-foreground hover:text-foreground"].join(" "))
		]);
		delegated("click", button_6, () => {
			set(headOperationType, "deposit");
			updateHeadDescription();
		});
		delegated("click", button_7, () => {
			set(headOperationType, "withdraw");
			updateHeadDescription();
		});
		delegated("click", button_8, () => {
			set(headEntityType, "customer");
			updateHeadDescription();
		});
		delegated("click", button_9, () => {
			set(headEntityType, "agent");
			updateHeadDescription();
		});
		delegated("click", button_10, () => set(headPaymentMethod, "cash"));
		delegated("click", button_11, () => set(headPaymentMethod, "bank"));
		bind_value(input, () => get(headAmount), ($$value) => set(headAmount, $$value));
		bind_value(input_1, () => get(headReference), ($$value) => set(headReference, $$value));
		bind_value(input_2, () => get(headDescription), ($$value) => set(headDescription, $$value));
		append($$anchor, div_4);
	};
	var consequent_11 = ($$anchor) => {
		var div_27 = root_17();
		var div_28 = child(div_27);
		var div_29 = sibling(child(div_28), 2);
		var div_30 = child(div_29);
		var div_31 = sibling(child(div_30), 2);
		var button_13 = child(div_31);
		var button_14 = sibling(button_13, 2);
		reset(div_31);
		reset(div_30);
		var node_30 = sibling(div_30, 2);
		var consequent_9 = ($$anchor) => {
			var div_32 = root_13();
			var select_2 = sibling(child(div_32), 2);
			var option_4 = child(select_2);
			option_4.value = option_4.__value = "";
			each(sibling(option_4), 17, () => get(cashAccounts), index, ($$anchor, a) => {
				var option_5 = root_8();
				var text_9 = child(option_5);
				reset(option_5);
				var option_5_value = {};
				template_effect(($0) => {
					set_text(text_9, `${get(a).name ?? ""} (${$0 ?? ""} BHD)`);
					if (option_5_value !== (option_5_value = get(a).id)) option_5.value = (option_5.__value = get(a).id) ?? "";
				}, [() => get(a).currentBalance.toFixed(3)]);
				append($$anchor, option_5);
			});
			reset(select_2);
			reset(div_32);
			bind_select_value(select_2, () => contraForm.sourceAccountId, ($$value) => contraForm.sourceAccountId = $$value);
			append($$anchor, div_32);
		};
		var alternate_4 = ($$anchor) => {
			var div_33 = root_14();
			var select_3 = sibling(child(div_33), 2);
			var option_6 = child(select_3);
			option_6.value = option_6.__value = "";
			each(sibling(option_6), 17, () => get(bankAccounts), index, ($$anchor, b) => {
				var option_7 = root_8();
				var text_10 = child(option_7);
				reset(option_7);
				var option_7_value = {};
				template_effect(($0) => {
					set_text(text_10, `${get(b).bankName ?? ""} (${get(b).accountNumber ?? ""}) - ${$0 ?? ""} BHD`);
					if (option_7_value !== (option_7_value = get(b).id)) option_7.value = (option_7.__value = get(b).id) ?? "";
				}, [() => get(b).currentBalance.toFixed(3)]);
				append($$anchor, option_7);
			});
			reset(select_3);
			reset(div_33);
			bind_select_value(select_3, () => contraForm.sourceBankId, ($$value) => contraForm.sourceBankId = $$value);
			append($$anchor, div_33);
		};
		if_block(node_30, ($$render) => {
			if (contraForm.sourceType === "account") $$render(consequent_9);
			else $$render(alternate_4, -1);
		});
		reset(div_29);
		reset(div_28);
		var div_34 = sibling(div_28, 2);
		var div_35 = sibling(child(div_34), 2);
		var div_36 = child(div_35);
		var div_37 = sibling(child(div_36), 2);
		var button_15 = child(div_37);
		var button_16 = sibling(button_15, 2);
		reset(div_37);
		reset(div_36);
		var node_33 = sibling(div_36, 2);
		var consequent_10 = ($$anchor) => {
			var div_38 = root_15();
			var select_4 = sibling(child(div_38), 2);
			var option_8 = child(select_4);
			option_8.value = option_8.__value = "";
			each(sibling(option_8), 17, () => get(cashAccounts), index, ($$anchor, a) => {
				var option_9 = root_8();
				var text_11 = child(option_9);
				reset(option_9);
				var option_9_value = {};
				template_effect(($0) => {
					set_text(text_11, `${get(a).name ?? ""} (${$0 ?? ""} BHD)`);
					if (option_9_value !== (option_9_value = get(a).id)) option_9.value = (option_9.__value = get(a).id) ?? "";
				}, [() => get(a).currentBalance.toFixed(3)]);
				append($$anchor, option_9);
			});
			reset(select_4);
			reset(div_38);
			bind_select_value(select_4, () => contraForm.destinationAccountId, ($$value) => contraForm.destinationAccountId = $$value);
			append($$anchor, div_38);
		};
		var alternate_5 = ($$anchor) => {
			var div_39 = root_16();
			var select_5 = sibling(child(div_39), 2);
			var option_10 = child(select_5);
			option_10.value = option_10.__value = "";
			each(sibling(option_10), 17, () => get(bankAccounts), index, ($$anchor, b) => {
				var option_11 = root_8();
				var text_12 = child(option_11);
				reset(option_11);
				var option_11_value = {};
				template_effect(($0) => {
					set_text(text_12, `${get(b).bankName ?? ""} (${get(b).accountNumber ?? ""}) - ${$0 ?? ""} BHD`);
					if (option_11_value !== (option_11_value = get(b).id)) option_11.value = (option_11.__value = get(b).id) ?? "";
				}, [() => get(b).currentBalance.toFixed(3)]);
				append($$anchor, option_11);
			});
			reset(select_5);
			reset(div_39);
			bind_select_value(select_5, () => contraForm.destinationBankId, ($$value) => contraForm.destinationBankId = $$value);
			append($$anchor, div_39);
		};
		if_block(node_33, ($$render) => {
			if (contraForm.destinationType === "account") $$render(consequent_10);
			else $$render(alternate_5, -1);
		});
		reset(div_35);
		reset(div_34);
		var div_40 = sibling(div_34, 2);
		var div_41 = child(div_40);
		var input_3 = sibling(child(div_41), 2);
		remove_input_defaults(input_3);
		reset(div_41);
		var div_42 = sibling(div_41, 2);
		var input_4 = sibling(child(div_42), 2);
		remove_input_defaults(input_4);
		reset(div_42);
		reset(div_40);
		reset(div_27);
		template_effect(() => {
			set_class(button_13, 1, `flex-1 py-2 text-center rounded-lg font-semibold transition-all cursor-pointer ${contraForm.sourceType === "account" ? "bg-card text-foreground shadow-xs border border-border" : "text-muted-foreground hover:text-foreground"}`);
			set_class(button_14, 1, `flex-1 py-2 text-center rounded-lg font-semibold transition-all cursor-pointer ${contraForm.sourceType === "bank" ? "bg-card text-foreground shadow-xs border border-border" : "text-muted-foreground hover:text-foreground"}`);
			set_class(button_15, 1, `flex-1 py-2 text-center rounded-lg font-semibold transition-all cursor-pointer ${contraForm.destinationType === "account" ? "bg-card text-foreground shadow-xs border border-border" : "text-muted-foreground hover:text-foreground"}`);
			set_class(button_16, 1, `flex-1 py-2 text-center rounded-lg font-semibold transition-all cursor-pointer ${contraForm.destinationType === "bank" ? "bg-card text-foreground shadow-xs border border-border" : "text-muted-foreground hover:text-foreground"}`);
		});
		delegated("click", button_13, () => contraForm.sourceType = "account");
		delegated("click", button_14, () => contraForm.sourceType = "bank");
		delegated("click", button_15, () => contraForm.destinationType = "account");
		delegated("click", button_16, () => contraForm.destinationType = "bank");
		bind_value(input_3, () => contraForm.amount, ($$value) => contraForm.amount = $$value);
		bind_value(input_4, () => contraForm.description, ($$value) => contraForm.description = $$value);
		append($$anchor, div_27);
	};
	var consequent_14 = ($$anchor) => {
		var div_43 = root_21();
		var div_44 = child(div_43);
		var label_3 = child(div_44);
		var node_36 = sibling(child(label_3), 2);
		var consequent_12 = ($$anchor) => {
			append($$anchor, root_18());
		};
		if_block(node_36, ($$render) => {
			if (get(salaryProfiles).length === 0) $$render(consequent_12);
		});
		reset(label_3);
		var select_6 = sibling(label_3, 2);
		var option_12 = child(select_6);
		option_12.value = option_12.__value = 0;
		each(sibling(option_12), 17, () => get(salaryProfiles), index, ($$anchor, profile) => {
			var option_13 = root_8();
			var text_13 = child(option_13);
			reset(option_13);
			var option_13_value = {};
			template_effect(($0) => {
				set_text(text_13, `${get(profile).employeeName ?? ""} (${get(profile).employeeCode ?? ""}) - Base: ${$0 ?? ""} BHD`);
				if (option_13_value !== (option_13_value = get(profile).id)) option_13.value = (option_13.__value = get(profile).id) ?? "";
			}, [() => get(profile).basicSalary?.toFixed(3)]);
			append($$anchor, option_13);
		});
		reset(select_6);
		var select_6_value;
		init_select(select_6);
		reset(div_44);
		var div_45 = sibling(div_44, 2);
		var div_46 = child(div_45);
		var select_7 = sibling(child(div_46), 2);
		each(select_7, 21, () => months, index, ($$anchor, month, idx) => {
			var option_14 = root_8();
			var text_14 = child(option_14, true);
			reset(option_14);
			option_14.value = option_14.__value = idx + 1;
			template_effect(() => set_text(text_14, get(month)));
			append($$anchor, option_14);
		});
		reset(select_7);
		reset(div_46);
		var div_47 = sibling(div_46, 2);
		var input_5 = sibling(child(div_47), 2);
		remove_input_defaults(input_5);
		reset(div_47);
		reset(div_45);
		var div_48 = sibling(div_45, 2);
		var div_49 = child(div_48);
		var input_6 = sibling(child(div_49), 2);
		remove_input_defaults(input_6);
		reset(div_49);
		var div_50 = sibling(div_49, 2);
		var input_7 = sibling(child(div_50), 2);
		remove_input_defaults(input_7);
		reset(div_50);
		var div_51 = sibling(div_50, 2);
		var input_8 = sibling(child(div_51), 2);
		remove_input_defaults(input_8);
		reset(div_51);
		var div_52 = sibling(div_51, 2);
		var input_9 = sibling(child(div_52), 2);
		remove_input_defaults(input_9);
		reset(div_52);
		var div_53 = sibling(div_52, 2);
		var input_10 = sibling(child(div_53), 2);
		remove_input_defaults(input_10);
		reset(div_53);
		var div_54 = sibling(div_53, 2);
		var span_11 = sibling(child(div_54), 2);
		var text_15 = child(span_11);
		reset(span_11);
		reset(div_54);
		reset(div_48);
		var div_55 = sibling(div_48, 2);
		var div_56 = child(div_55);
		var div_57 = sibling(child(div_56), 2);
		var button_17 = child(div_57);
		var button_18 = sibling(button_17, 2);
		reset(div_57);
		reset(div_56);
		var node_38 = sibling(div_56, 2);
		var consequent_13 = ($$anchor) => {
			var div_58 = root_19();
			var select_8 = sibling(child(div_58), 2);
			var option_15 = child(select_8);
			option_15.value = (option_15.__value = null, "");
			each(sibling(option_15), 17, () => get(cashAccounts), index, ($$anchor, acc) => {
				var option_16 = root_8();
				var text_16 = child(option_16);
				reset(option_16);
				var option_16_value = {};
				template_effect(($0) => {
					set_text(text_16, `${get(acc).name ?? ""} (${$0 ?? ""} BHD)`);
					if (option_16_value !== (option_16_value = get(acc).id)) option_16.value = (option_16.__value = get(acc).id) ?? "";
				}, [() => get(acc).currentBalance.toFixed(3)]);
				append($$anchor, option_16);
			});
			reset(select_8);
			reset(div_58);
			bind_select_value(select_8, () => salaryForm.cashAccountId, ($$value) => salaryForm.cashAccountId = $$value);
			append($$anchor, div_58);
		};
		var alternate_6 = ($$anchor) => {
			var div_59 = root_20();
			var select_9 = sibling(child(div_59), 2);
			var option_17 = child(select_9);
			option_17.value = (option_17.__value = null, "");
			each(sibling(option_17), 17, () => get(bankAccounts), index, ($$anchor, bank) => {
				var option_18 = root_8();
				var text_17 = child(option_18);
				reset(option_18);
				var option_18_value = {};
				template_effect(($0) => {
					set_text(text_17, `${get(bank).bankName ?? ""} (${$0 ?? ""} BHD)`);
					if (option_18_value !== (option_18_value = get(bank).id)) option_18.value = (option_18.__value = get(bank).id) ?? "";
				}, [() => get(bank).currentBalance.toFixed(3)]);
				append($$anchor, option_18);
			});
			reset(select_9);
			reset(div_59);
			bind_select_value(select_9, () => salaryForm.bankAccountId, ($$value) => salaryForm.bankAccountId = $$value);
			append($$anchor, div_59);
		};
		if_block(node_38, ($$render) => {
			if (salaryForm.paymentMethod === "Cash Account") $$render(consequent_13);
			else $$render(alternate_6, -1);
		});
		reset(div_55);
		var div_60 = sibling(div_55, 2);
		var input_11 = sibling(child(div_60), 2);
		remove_input_defaults(input_11);
		reset(div_60);
		reset(div_43);
		template_effect(($0) => {
			if (select_6_value !== (select_6_value = get(selectedSalaryProfileId))) select_6.value = (select_6.__value = get(selectedSalaryProfileId)) ?? "", select_option(select_6, get(selectedSalaryProfileId));
			set_text(text_15, `${$0 ?? ""} BHD`);
			set_class(button_17, 1, `py-2 text-center rounded-lg font-semibold transition-all cursor-pointer ${salaryForm.paymentMethod === "Cash Account" ? "bg-card text-foreground shadow-xs border border-border" : "text-muted-foreground hover:text-foreground"}`);
			set_class(button_18, 1, `py-2 text-center rounded-lg font-semibold transition-all cursor-pointer ${salaryForm.paymentMethod === "Bank Account" ? "bg-card text-foreground shadow-xs border border-border" : "text-muted-foreground hover:text-foreground"}`);
		}, [() => get(calculatedSalaryNet).toFixed(3)]);
		delegated("change", select_6, (e) => onSalaryProfileSelected(parseInt(e.currentTarget.value, 10)));
		bind_select_value(select_7, () => salaryForm.payrollMonth, ($$value) => salaryForm.payrollMonth = $$value);
		bind_value(input_5, () => salaryForm.payrollYear, ($$value) => salaryForm.payrollYear = $$value);
		bind_value(input_6, () => salaryForm.basicSalary, ($$value) => salaryForm.basicSalary = $$value);
		bind_value(input_7, () => salaryForm.incentive, ($$value) => salaryForm.incentive = $$value);
		bind_value(input_8, () => salaryForm.bonus, ($$value) => salaryForm.bonus = $$value);
		bind_value(input_9, () => salaryForm.allowance, ($$value) => salaryForm.allowance = $$value);
		bind_value(input_10, () => salaryForm.deduction, ($$value) => salaryForm.deduction = $$value);
		delegated("click", button_17, () => handleSalaryPaymentMethodChange("Cash Account"));
		delegated("click", button_18, () => handleSalaryPaymentMethodChange("Bank Account"));
		bind_value(input_11, () => salaryForm.remarks, ($$value) => salaryForm.remarks = $$value);
		append($$anchor, div_43);
	};
	var alternate_9 = ($$anchor) => {
		var fragment_4 = root_33();
		var node_41 = first_child(fragment_4);
		var consequent_16 = ($$anchor) => {
			var div_61 = root_23();
			var div_62 = child(div_61);
			var label_4 = child(div_62);
			var node_42 = sibling(child(label_4), 2);
			var consequent_15 = ($$anchor) => {
				var span_12 = root_22();
				var text_18 = child(span_12);
				reset(span_12);
				template_effect(($0, $1) => set_text(text_18, `Prepaid: ${$0 ?? ""} BHD | Debt: ${$1 ?? ""} BHD`), [() => get(selectedSupplier).wallet.toFixed(3), () => get(selectedSupplier).creditWallet.toFixed(3)]);
				append($$anchor, span_12);
			};
			if_block(node_42, ($$render) => {
				if (get(selectedSupplier)) $$render(consequent_15);
			});
			reset(label_4);
			var select_10 = sibling(label_4, 2);
			var option_19 = child(select_10);
			option_19.value = option_19.__value = "";
			each(sibling(option_19), 17, () => get(suppliers), index, ($$anchor, supplier) => {
				var option_20 = root_8();
				var text_19 = child(option_20);
				reset(option_20);
				var option_20_value = {};
				template_effect(($0) => {
					set_text(text_19, `${get(supplier).name ?? ""} (${get(supplier).code ?? ""})`);
					if (option_20_value !== (option_20_value = $0)) option_20.value = (option_20.__value = $0) ?? "";
				}, [() => String(get(supplier).id)]);
				append($$anchor, option_20);
			});
			reset(select_10);
			var select_10_value;
			init_select(select_10);
			reset(div_62);
			var div_63 = sibling(div_62, 2);
			var div_64 = sibling(child(div_63), 2);
			var button_19 = child(div_64);
			var div_65 = child(button_19);
			Wallet(child(div_65), { class: "h-3.5 w-3.5" });
			next(2);
			reset(div_65);
			next(2);
			reset(button_19);
			var button_20 = sibling(button_19, 2);
			var div_66 = child(button_20);
			Credit_card(child(div_66), { class: "h-3.5 w-3.5" });
			next(2);
			reset(div_66);
			next(2);
			reset(button_20);
			var button_21 = sibling(button_20, 2);
			var div_67 = child(button_21);
			Arrow_up_right(child(div_67), { class: "h-3.5 w-3.5" });
			next(2);
			reset(div_67);
			next(2);
			reset(button_21);
			var button_22 = sibling(button_21, 2);
			var div_68 = child(button_22);
			Arrow_down_left(child(div_68), { class: "h-3.5 w-3.5" });
			next(2);
			reset(div_68);
			next(2);
			reset(button_22);
			reset(div_64);
			reset(div_63);
			reset(div_61);
			template_effect(() => {
				select_10.disabled = get(isLoadingData);
				if (select_10_value !== (select_10_value = get(supplierIdVal))) select_10.value = (select_10.__value = get(supplierIdVal)) ?? "", select_option(select_10, get(supplierIdVal));
				set_class(button_19, 1, `p-2.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col gap-1 ${get(supplierPaymentType) === "supplier_wallet" ? "bg-purple-600 text-white border-purple-600 shadow-sm" : "bg-background border-border text-foreground hover:bg-muted/40"}`);
				set_class(button_20, 1, `p-2.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col gap-1 ${get(supplierPaymentType) === "supplier_credit" ? "bg-purple-600 text-white border-purple-600 shadow-sm" : "bg-background border-border text-foreground hover:bg-muted/40"}`);
				set_class(button_21, 1, `p-2.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col gap-1 ${get(supplierPaymentType) === "supplier_advance" ? "bg-purple-600 text-white border-purple-600 shadow-sm" : "bg-background border-border text-foreground hover:bg-muted/40"}`);
				set_class(button_22, 1, `p-2.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col gap-1 ${get(supplierPaymentType) === "supplier_refund" ? "bg-purple-600 text-white border-purple-600 shadow-sm" : "bg-background border-border text-foreground hover:bg-muted/40"}`);
			});
			delegated("change", select_10, (e) => handleSupplierChange(e.currentTarget.value));
			delegated("click", button_19, () => handleSupplierOperationChange("supplier_wallet"));
			delegated("click", button_20, () => handleSupplierOperationChange("supplier_credit"));
			delegated("click", button_21, () => handleSupplierOperationChange("supplier_advance"));
			delegated("click", button_22, () => handleSupplierOperationChange("supplier_refund"));
			append($$anchor, div_61);
		};
		var alternate_7 = ($$anchor) => {
			var div_69 = root_25();
			var label_5 = child(div_69);
			var node_48 = sibling(child(label_5), 2);
			var consequent_17 = ($$anchor) => {
				var span_13 = root_24();
				var text_20 = child(span_13, true);
				reset(span_13);
				template_effect(() => set_text(text_20, get(categoryBucket)));
				append($$anchor, span_13);
			};
			if_block(node_48, ($$render) => {
				if (get(selectedCategory)) $$render(consequent_17);
			});
			reset(label_5);
			var select_11 = sibling(label_5, 2);
			var option_21 = child(select_11);
			option_21.value = option_21.__value = "";
			each(sibling(option_21), 17, () => get(categories), index, ($$anchor, cat) => {
				var option_22 = root_8();
				var text_21 = child(option_22);
				reset(option_22);
				var option_22_value = {};
				template_effect(($0) => {
					set_text(text_21, `${get(cat).name ?? ""} (${(get(cat).category || "Expenses") ?? ""})`);
					if (option_22_value !== (option_22_value = $0)) option_22.value = (option_22.__value = $0) ?? "";
				}, [() => String(get(cat).id)]);
				append($$anchor, option_22);
			});
			reset(select_11);
			var p_2 = sibling(select_11, 2);
			var text_22 = child(p_2, true);
			reset(p_2);
			reset(div_69);
			template_effect(() => {
				select_11.disabled = get(isLoadingData);
				set_text(text_22, get(helpText));
			});
			bind_select_value(select_11, () => get(expenseCategoryIdVal), ($$value) => set(expenseCategoryIdVal, $$value));
			append($$anchor, div_69);
		};
		if_block(node_41, ($$render) => {
			if (get(isSupplierTransaction)) $$render(consequent_16);
			else $$render(alternate_7, -1);
		});
		var div_70 = sibling(node_41, 2);
		var div_71 = child(div_70);
		var label_6 = child(div_71);
		var node_50 = sibling(child(label_6), 2);
		var consequent_18 = ($$anchor) => {
			var button_23 = root_26();
			var text_23 = child(button_23);
			reset(button_23);
			template_effect(($0) => set_text(text_23, `Clear Total Debt (${$0 ?? ""})`), [() => get(selectedSupplier).creditWallet.toFixed(3)]);
			delegated("click", button_23, () => set(amount, get(selectedSupplier).creditWallet.toFixed(3), true));
			append($$anchor, button_23);
		};
		if_block(node_50, ($$render) => {
			if (get(isSupplierTransaction) && get(selectedSupplier) && get(supplierPaymentType) === "supplier_credit" && get(selectedSupplier).creditWallet > 0) $$render(consequent_18);
		});
		reset(label_6);
		var input_12 = sibling(label_6, 2);
		remove_input_defaults(input_12);
		reset(div_71);
		var div_72 = sibling(div_71, 2);
		var div_73 = sibling(child(div_72), 2);
		var button_24 = child(div_73);
		var button_25 = sibling(button_24, 2);
		reset(div_73);
		reset(div_72);
		reset(div_70);
		var div_74 = sibling(div_70, 2);
		var node_51 = child(div_74);
		var consequent_20 = ($$anchor) => {
			var div_75 = root_27();
			var label_7 = child(div_75);
			var span_14 = child(label_7);
			var text_24 = child(span_14);
			reset(span_14);
			var node_52 = sibling(span_14, 2);
			var consequent_19 = ($$anchor) => {
				var span_15 = root_7();
				var text_25 = child(span_15);
				reset(span_15);
				template_effect(($0) => set_text(text_25, `Bal: ${$0 ?? ""} BHD`), [() => get(selectedCashAccount).currentBalance.toFixed(3)]);
				append($$anchor, span_15);
			};
			if_block(node_52, ($$render) => {
				if (get(selectedCashAccount)) $$render(consequent_19);
			});
			reset(label_7);
			var select_12 = sibling(label_7, 2);
			var option_23 = child(select_12);
			var text_26 = child(option_23);
			reset(option_23);
			option_23.value = option_23.__value = "";
			each(sibling(option_23), 17, () => get(cashAccounts), index, ($$anchor, acc) => {
				var option_24 = root_8();
				var text_27 = child(option_24);
				reset(option_24);
				var option_24_value = {};
				template_effect(($0, $1) => {
					set_text(text_27, `${get(acc).name ?? ""} (${$0 ?? ""} BHD)`);
					if (option_24_value !== (option_24_value = $1)) option_24.value = (option_24.__value = $1) ?? "";
				}, [() => get(acc).currentBalance.toFixed(3), () => String(get(acc).id)]);
				append($$anchor, option_24);
			});
			reset(select_12);
			reset(div_75);
			template_effect(() => {
				set_text(text_24, `${get(sourceLabel) ?? ""} Cash Account`);
				select_12.disabled = get(isLoadingData);
				set_text(text_26, `-- Select ${get(sourceLabel) ?? ""} Cash Account --`);
			});
			bind_select_value(select_12, () => get(sourceAccountIdVal), ($$value) => set(sourceAccountIdVal, $$value));
			append($$anchor, div_75);
		};
		var alternate_8 = ($$anchor) => {
			var div_76 = root_28();
			var label_8 = child(div_76);
			var span_16 = child(label_8);
			var text_28 = child(span_16);
			reset(span_16);
			var node_54 = sibling(span_16, 2);
			var consequent_21 = ($$anchor) => {
				var span_17 = root_7();
				var text_29 = child(span_17);
				reset(span_17);
				template_effect(($0) => set_text(text_29, `Bal: ${$0 ?? ""} BHD`), [() => get(selectedBankAccount).currentBalance.toFixed(3)]);
				append($$anchor, span_17);
			};
			if_block(node_54, ($$render) => {
				if (get(selectedBankAccount)) $$render(consequent_21);
			});
			reset(label_8);
			var select_13 = sibling(label_8, 2);
			var option_25 = child(select_13);
			var text_30 = child(option_25);
			reset(option_25);
			option_25.value = option_25.__value = "";
			each(sibling(option_25), 17, () => get(bankAccounts), index, ($$anchor, bank) => {
				var option_26 = root_8();
				var text_31 = child(option_26);
				reset(option_26);
				var option_26_value = {};
				template_effect(($0, $1) => {
					set_text(text_31, `${get(bank).bankName ?? ""} (${$0 ?? ""} BHD)`);
					if (option_26_value !== (option_26_value = $1)) option_26.value = (option_26.__value = $1) ?? "";
				}, [() => get(bank).currentBalance.toFixed(3), () => String(get(bank).id)]);
				append($$anchor, option_26);
			});
			reset(select_13);
			reset(div_76);
			template_effect(() => {
				set_text(text_28, `${get(sourceLabel) ?? ""} Bank Account`);
				select_13.disabled = get(isLoadingData);
				set_text(text_30, `-- Select ${get(sourceLabel) ?? ""} Bank Account --`);
			});
			bind_select_value(select_13, () => get(sourceBankIdVal), ($$value) => set(sourceBankIdVal, $$value));
			append($$anchor, div_76);
		};
		if_block(node_51, ($$render) => {
			if (get(paymentMethod) === "cash") $$render(consequent_20);
			else $$render(alternate_8, -1);
		});
		var node_56 = sibling(node_51, 2);
		var consequent_22 = ($$anchor) => {
			var div_77 = root_29();
			var input_13 = sibling(child(div_77), 2);
			remove_input_defaults(input_13);
			reset(div_77);
			bind_value(input_13, () => get(referenceNumber), ($$value) => set(referenceNumber, $$value));
			append($$anchor, div_77);
		};
		if_block(node_56, ($$render) => {
			if (get(isSupplierTransaction)) $$render(consequent_22);
		});
		reset(div_74);
		var div_78 = sibling(div_74, 2);
		var input_14 = sibling(child(div_78), 2);
		remove_input_defaults(input_14);
		reset(div_78);
		var div_79 = sibling(div_78, 2);
		var textarea = sibling(child(div_79), 2);
		remove_textarea_child(textarea);
		reset(div_79);
		var node_57 = sibling(div_79, 2);
		var consequent_25 = ($$anchor) => {
			var div_80 = root_32();
			var div_81 = child(div_80);
			Sparkles(child(div_81), { class: "h-4 w-4" });
			next(2);
			reset(div_81);
			var p_3 = sibling(div_81, 2);
			var node_59 = child(p_3);
			var consequent_23 = ($$anchor) => {
				var fragment_5 = root_30();
				var strong = sibling(first_child(fragment_5));
				var text_32 = child(strong);
				reset(strong);
				var strong_1 = sibling(strong, 2);
				var text_33 = child(strong_1, true);
				reset(strong_1);
				var text_34 = sibling(strong_1);
				template_effect(($0) => {
					set_text(text_32, `${$0 ?? ""} BHD`);
					set_text(text_33, get(paymentMethod) === "cash" ? get(selectedCashAccount)?.name || "Cash Account" : get(selectedBankAccount)?.bankName || "Bank Account");
					set_text(text_34, ` to ${get(selectedSupplier).name ?? ""} (${get(supplierPaymentType) === "supplier_credit" ? "Credit Debt Settlement" : "Prepaid Wallet Top-up"}).`);
				}, [() => parseFloat(get(amount) || "0").toFixed(3)]);
				append($$anchor, fragment_5);
			};
			var consequent_24 = ($$anchor) => {
				var fragment_6 = root_31();
				var strong_2 = sibling(first_child(fragment_6));
				var text_35 = child(strong_2);
				reset(strong_2);
				var strong_3 = sibling(strong_2, 2);
				var text_36 = child(strong_3);
				reset(strong_3);
				var strong_4 = sibling(strong_3, 2);
				var text_37 = child(strong_4, true);
				reset(strong_4);
				next();
				template_effect(($0) => {
					set_text(text_35, `${$0 ?? ""} BHD`);
					set_text(text_36, `${get(selectedCategory).name ?? ""} (${get(categoryBucket) ?? ""})`);
					set_text(text_37, get(paymentMethod) === "cash" ? get(selectedCashAccount)?.name || "Cash Account" : get(selectedBankAccount)?.bankName || "Bank Account");
				}, [() => parseFloat(get(amount) || "0").toFixed(3)]);
				append($$anchor, fragment_6);
			};
			if_block(node_59, ($$render) => {
				if (get(isSupplierTransaction) && get(selectedSupplier)) $$render(consequent_23);
				else if (get(selectedCategory)) $$render(consequent_24, 1);
			});
			reset(p_3);
			reset(div_80);
			append($$anchor, div_80);
		};
		if_block(node_57, ($$render) => {
			if (get(amount) && (get(selectedSupplier) || get(selectedCategory))) $$render(consequent_25);
		});
		template_effect(() => {
			set_class(button_24, 1, `py-2 text-center rounded-lg font-semibold transition-all cursor-pointer ${get(paymentMethod) === "cash" ? "bg-card text-foreground shadow-xs border border-border" : "text-muted-foreground hover:text-foreground"}`);
			set_class(button_25, 1, `py-2 text-center rounded-lg font-semibold transition-all cursor-pointer ${get(paymentMethod) === "bank" ? "bg-card text-foreground shadow-xs border border-border" : "text-muted-foreground hover:text-foreground"}`);
			set_attribute(input_14, "placeholder", get(isSupplierTransaction) ? "e.g. Supplier wallet top-up / Credit debt settlement" : "e.g. Office rent payment / Equipment purchase");
		});
		bind_value(input_12, () => get(amount), ($$value) => set(amount, $$value));
		delegated("click", button_24, () => set(paymentMethod, "cash"));
		delegated("click", button_25, () => set(paymentMethod, "bank"));
		bind_value(input_14, () => get(description), ($$value) => set(description, $$value));
		bind_value(textarea, () => get(notes), ($$value) => set(notes, $$value));
		append($$anchor, fragment_4);
	};
	if_block(node_9, ($$render) => {
		if (get(activeTab) === "head") $$render(consequent_8);
		else if (get(activeTab) === "contra") $$render(consequent_11, 1);
		else if (get(activeTab) === "salary") $$render(consequent_14, 2);
		else $$render(alternate_9, -1);
	});
	var div_82 = sibling(node_9, 2);
	var node_60 = child(div_82);
	Button(node_60, {
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
	var node_61 = sibling(node_60, 2);
	{
		let $0 = user_derived(() => ["rounded-xl px-6 py-4.5 font-semibold cursor-pointer shadow-sm", get(activeTab) === "head" ? get(headOperationType) === "deposit" ? "bg-emerald-600 hover:bg-emerald-700 text-white font-bold" : "bg-rose-600 hover:bg-rose-700 text-white font-bold" : get(activeTab) === "contra" ? "bg-amber-500 hover:bg-amber-600 text-white font-bold" : get(activeTab) === "salary" ? "bg-amber-600 hover:bg-amber-700 text-white" : get(isSupplierTransaction) ? "bg-purple-600 hover:bg-purple-700 text-white" : ""].join(" "));
		let $1 = user_derived(() => get(isSubmitting) || get(isLoadingData));
		Button(node_61, {
			type: "submit",
			get class() {
				return get($0);
			},
			get disabled() {
				return get($1);
			},
			children: ($$anchor, $$slotProps) => {
				next();
				var text_39 = text();
				template_effect(() => set_text(text_39, get(isSubmitting) ? "Posting..." : get(activeTab) === "head" ? get(headOperationType) === "deposit" ? "Post Balance Deposit" : "Post Balance Withdrawal" : get(activeTab) === "contra" ? "Post Contra Transfer" : get(activeTab) === "salary" ? "Post Salary Payout" : get(isSupplierTransaction) ? "Post Supplier Transaction" : "Log Transaction"));
				append($$anchor, text_39);
			},
			$$slots: { default: true }
		});
	}
	reset(div_82);
	reset(form);
	reset(div);
	template_effect(() => {
		set_class(button_1, 1, `flex-1 py-2 px-2.5 rounded-xl font-semibold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer ${get(activeTab) === "general" ? "bg-card text-foreground shadow-xs border border-border" : "text-muted-foreground hover:text-foreground"}`);
		set_class(button_2, 1, `flex-1 py-2 px-2.5 rounded-xl font-semibold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer ${get(activeTab) === "supplier" ? "bg-purple-600 text-white shadow-sm font-bold" : "text-muted-foreground hover:text-foreground"}`);
		set_class(button_3, 1, `flex-1 py-2 px-2.5 rounded-xl font-semibold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer ${get(activeTab) === "head" ? "bg-emerald-600 text-white shadow-sm font-bold" : "text-muted-foreground hover:text-foreground"}`);
		set_class(button_4, 1, `flex-1 py-2 px-2.5 rounded-xl font-semibold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer ${get(activeTab) === "salary" ? "bg-amber-600 text-white shadow-sm font-bold" : "text-muted-foreground hover:text-foreground"}`);
		set_class(button_5, 1, `flex-1 py-2 px-2.5 rounded-xl font-semibold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer ${get(activeTab) === "contra" ? "bg-amber-500 text-white shadow-sm font-bold" : "text-muted-foreground hover:text-foreground"}`);
	});
	delegated("click", button, () => goto("/payments"));
	delegated("click", button_1, () => handleTabSwitch("general"));
	delegated("click", button_2, () => handleTabSwitch("supplier"));
	delegated("click", button_3, () => handleTabSwitch("head"));
	delegated("click", button_4, () => handleTabSwitch("salary"));
	delegated("click", button_5, () => handleTabSwitch("contra"));
	event("submit", form, handleSubmit);
	append($$anchor, div);
	pop();
	$$cleanup();
}
delegate(["click", "change"]);
//#endregion
export { _page as component };

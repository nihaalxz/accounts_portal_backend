import { A as component, B as append, Bt as reset, Ct as user_derived, D as head, G as text, H as from_html, I as if_block, J as event, K as delegate, M as slot, N as each, Nt as pop, P as index, Pt as push, Q as get, R as set_text, T as clsx, V as comment, _ as set_attribute, a as legacy_rest_props, b as bind_select_value, bt as state, c as spread_props, dt as $document, g as remove_input_defaults, gt as proxy, ht as sibling, it as effect, m as bind_value, mt as first_child, ot as template_effect, pt as child, q as delegated, r as onMount, ut as remove_textarea_child, vt as set, w as set_class, xt as update, zt as next } from "../chunks/dXkmWTgM.js";
import "../chunks/DhaYE-8x.js";
import { t as apiFetch } from "../chunks/D11sewMm.js";
import "../chunks/DZfWAsjW.js";
import { r as toast } from "../chunks/CbPRQHfn.js";
import { t as Icon } from "../chunks/BalaELqB.js";
import { t as Arrow_right } from "../chunks/DZE4Pk63.js";
import { t as Building_2 } from "../chunks/PAfPMPpZ.js";
import { t as Calendar } from "../chunks/DxFQ7Qxv.js";
import { n as Car, t as Plane } from "../chunks/DG-SfabB.js";
import { t as Chevron_left } from "../chunks/bgfi4Y0B2.js";
import { t as Chevron_right } from "../chunks/BQLzQDdY2.js";
import { t as Clock } from "../chunks/CZu1L_RP2.js";
import { t as Dollar_sign } from "../chunks/BnaNfP7s2.js";
import { t as Download } from "../chunks/D8w6XH0S2.js";
import { t as External_link } from "../chunks/ifddzD342.js";
import { t as File_text } from "../chunks/NLRKrZbo2.js";
import { t as History } from "../chunks/StzzW3F62.js";
import { t as Layers } from "../chunks/CFg-aOba2.js";
import { t as Pen_line } from "../chunks/CvjCDChO.js";
import { t as Refresh_cw } from "../chunks/DpTJy0Wb.js";
import { t as Rotate_ccw } from "../chunks/CEB2WCBr.js";
import { t as Save } from "../chunks/YnLTLont.js";
import { t as Search } from "../chunks/D7t9qluE.js";
import { t as Sliders_horizontal } from "../chunks/BI9_YWC7.js";
import { t as Trending_up } from "../chunks/dBTjeHCK.js";
import { t as X } from "../chunks/wXHc9RNY.js";
import { a as formatDateTime, n as formatBahrainTime, o as getBahrainDateString, r as formatDate, s as getBahrainPresetRanges } from "../chunks/Cu8_Vl4p.js";
import { t as Button } from "../chunks/BhXsq3bC.js";
import { t as MoneyDisplay } from "../chunks/CIVSRuaR2.js";
import { t as DateDisplay } from "../chunks/DEr_pDJT2.js";
import "../chunks/CS-Kx6i02.js";
import { t as exportToCSV } from "../chunks/C74Z4VDd2.js";
import { t as SearchableSelect } from "../chunks/5jJpT0lD.js";
//#region node_modules/lucide-svelte/dist/icons/compass.svelte
function Compass($$anchor, $$props) {
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
	const iconNode = [["circle", {
		"cx": "12",
		"cy": "12",
		"r": "10"
	}], ["path", { "d": "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" }]];
	/**
	* @component @name Compass
	* @description Lucide SVG icon component, renders SVG Element with children.
	*
	* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgLz4KICA8cGF0aCBkPSJtMTYuMjQgNy43Ni0xLjgwNCA1LjQxMWEyIDIgMCAwIDEtMS4yNjUgMS4yNjVMNy43NiAxNi4yNGwxLjgwNC01LjQxMWEyIDIgMCAwIDEgMS4yNjUtMS4yNjV6IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/compass
	* @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
	*
	* @param {Object} props - Lucide icons props and any valid SVG attribute
	* @returns {FunctionalComponent} Svelte component
	*
	*/
	Icon($$anchor, spread_props({ name: "compass" }, () => $$sanitized_props, {
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
//#region src/routes/(app)/sales/profit-management/+page.svelte
var root = from_html(`<!> <span>Export CSV</span>`, 1);
var root_1 = from_html(`<!> <span>Export History CSV</span>`, 1);
var root_2 = from_html(`<!> <span>Refresh</span>`, 1);
var root_3 = from_html(`<span> </span>`);
var root_4 = from_html(`<span class="text-[11px] text-muted-foreground font-medium hidden sm:inline">Chronological log of manual profit adjustments & commission overrides</span>`);
var root_5 = from_html(`<button type="button" class="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground cursor-pointer"><!></button>`);
var root_6 = from_html(`<div class="min-w-[130px]"><select class="h-8.5 w-full bg-background border border-border rounded-xl px-3 text-xs text-foreground font-semibold cursor-pointer focus:outline-none focus:ring-1 focus:ring-primary/40"><option>All Statuses</option><option>Finalized / Closed</option><option>Estimated / Open</option></select></div>`);
var root_7 = from_html(`<button type="button" class="px-2.5 py-1 rounded-lg text-[11px] font-bold text-rose-600 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 flex items-center gap-1 cursor-pointer transition-colors" title="Reset all filters"><!> <span>Reset</span></button>`);
var root_8 = from_html(`<button type="button"><!> <span> </span></button>`);
var root_9 = from_html(`<div class="p-16 flex items-center justify-center"><!></div>`);
var root_10 = from_html(`<!> <span>Clear Filters</span>`, 1);
var root_11 = from_html(`<div class="p-16 text-center space-y-3"><div class="h-12 w-12 rounded-2xl bg-muted flex items-center justify-center mx-auto text-muted-foreground"><!></div> <h3 class="text-sm font-bold text-foreground">No Matching Profit Records</h3> <p class="text-xs text-muted-foreground max-w-sm mx-auto">No records matched your search criteria. Try adjusting or clearing your filters.</p> <!></div>`);
var root_12 = from_html(`<span class="text-[11px] font-semibold text-foreground/80 block truncate max-w-[160px]"> </span>`);
var root_13 = from_html(`<button type="button" class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-purple-500/10 text-purple-600 hover:bg-purple-500/20 border border-purple-500/20 cursor-pointer transition-colors" title="Click to view modification history for this booking"><!> <span> </span></button>`);
var root_14 = from_html(`<span class="text-[10px] text-muted-foreground/60 font-medium">Standard</span>`);
var root_15 = from_html(`<!> <span>Adjust</span>`, 1);
var root_16 = from_html(`<tr class="hover:bg-muted/30 transition-colors"><td class="py-3 px-4"><div class="flex items-center gap-2"><div><!></div> <div><a class="font-bold text-foreground font-mono hover:text-primary hover:underline flex items-center gap-1"><span> </span> <!></a> <!> <span class="text-[10px] text-muted-foreground"><!></span></div></div></td><td class="py-3 px-4 font-semibold text-foreground"><div class="flex items-center gap-2"><div class="h-6 w-6 rounded-full bg-primary/10 text-primary font-bold text-[10px] flex items-center justify-center shrink-0"> </div> <span class="truncate max-w-[150px]"> </span></div></td><td class="py-3 px-4 text-right font-mono font-bold text-foreground"><!></td><td class="py-3 px-4 text-right"><span class="font-mono text-muted-foreground block"><!></span> <span class="text-[9px] uppercase tracking-wider font-bold text-muted-foreground/80"> </span></td><td class="py-3 px-4 text-right"><span><!></span></td><td class="py-3 px-4 text-center"><!></td><td class="py-3 px-4 text-right"><div class="flex items-center justify-end gap-1.5"><!> <!></div></td></tr>`);
var root_17 = from_html(`<div class="overflow-x-auto"><table class="w-full text-left text-xs border-collapse"><thead><tr class="border-b border-border bg-muted/40 text-[11px] font-bold text-muted-foreground uppercase tracking-wider"><th class="py-3 px-4">Booking Ref</th><th class="py-3 px-4">Salesman</th><th class="py-3 px-4 text-right">Selling Price</th><th class="py-3 px-4 text-right">Supplier Cost</th><th class="py-3 px-4 text-right">Net Profit</th><th class="py-3 px-4 text-center">Modifications</th><th class="py-3 px-4 text-right">Action</th></tr></thead><tbody class="divide-y divide-border/60"></tbody></table></div> <div class="p-3.5 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-muted-foreground bg-muted/10"><div class="flex items-center gap-2"><span> </span> <select class="h-7 px-2 bg-background border border-border rounded-lg text-xs text-foreground cursor-pointer font-semibold"><option>10 / page</option><option>20 / page</option><option>50 / page</option><option>100 / page</option></select></div> <div class="flex items-center gap-1.5"><button type="button" class="h-7.5 px-2.5 rounded-lg border border-border bg-background hover:bg-muted text-foreground disabled:opacity-40 disabled:pointer-events-none cursor-pointer flex items-center gap-1 transition-colors"><!> <span>Prev</span></button> <span class="px-2 font-semibold text-foreground"> </span> <button type="button" class="h-7.5 px-2.5 rounded-lg border border-border bg-background hover:bg-muted text-foreground disabled:opacity-40 disabled:pointer-events-none cursor-pointer flex items-center gap-1 transition-colors"><span>Next</span> <!></button></div></div>`, 1);
var root_18 = from_html(`<div class="p-16 text-center space-y-3"><div class="h-12 w-12 rounded-2xl bg-purple-500/10 flex items-center justify-center mx-auto text-purple-600"><!></div> <h3 class="text-sm font-bold text-foreground">No Profit Modifications Found</h3> <p class="text-xs text-muted-foreground max-w-sm mx-auto">No profit modifications have been recorded yet, or no records matched your search filters.</p> <!></div>`);
var root_19 = from_html(`<span class="text-[11px] font-semibold text-foreground/80 block truncate max-w-[150px]"> </span>`);
var root_20 = from_html(`<tr class="hover:bg-muted/30 transition-colors"><td class="py-3 px-4"><div class="flex items-center gap-1.5 font-mono text-[11px] text-foreground"><!> <div><span class="block font-bold"> </span> <span class="text-[10px] text-muted-foreground"> </span></div></div></td><td class="py-3 px-4"><div class="flex items-center gap-2"><div><!></div> <div><a class="font-bold text-foreground font-mono hover:text-primary hover:underline flex items-center gap-1"><span> </span> <!></a> <!> <span class="text-[10px] text-muted-foreground uppercase font-bold"> </span></div></div></td><td class="py-3 px-4 font-semibold text-foreground"><div class="flex items-center gap-2"><div class="h-6 w-6 rounded-full bg-primary/10 text-primary font-bold text-[10px] flex items-center justify-center shrink-0"> </div> <span class="truncate max-w-[140px]"> </span></div></td><td class="py-3 px-4 text-right font-mono"><div class="flex items-center justify-end gap-1 text-[11px]"><span class="text-muted-foreground line-through opacity-80"> </span> <!> <span class="font-bold text-foreground"> </span></div></td><td class="py-3 px-4 text-center"><span> </span></td><td class="py-3 px-4 max-w-xs"><div class="text-xs text-foreground font-medium line-clamp-2"> </div> <span class="text-[10px] text-muted-foreground block font-mono mt-0.5"> </span></td><td class="py-3 px-4 text-right"><a class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold border border-border bg-background hover:bg-muted text-foreground transition-colors cursor-pointer"><span>View Deal</span> <!></a></td></tr>`);
var root_21 = from_html(`<div class="overflow-x-auto"><table class="w-full text-left text-xs border-collapse"><thead><tr class="border-b border-border bg-purple-500/5 text-[11px] font-bold text-purple-700 dark:text-purple-300 uppercase tracking-wider"><th class="py-3 px-4">Timestamp & Date</th><th class="py-3 px-4">Booking Ref</th><th class="py-3 px-4">Salesman</th><th class="py-3 px-4 text-right">Profit Shift</th><th class="py-3 px-4 text-center">Adjustment Delta</th><th class="py-3 px-4">Reason / Explanation</th><th class="py-3 px-4 text-right">Action</th></tr></thead><tbody class="divide-y divide-border/60"></tbody></table></div> <div class="p-3.5 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-muted-foreground bg-muted/10"><div class="flex items-center gap-2"><span> </span> <select class="h-7 px-2 bg-background border border-border rounded-lg text-xs text-foreground cursor-pointer font-semibold"><option>10 / page</option><option>20 / page</option><option>50 / page</option><option>100 / page</option></select></div> <div class="flex items-center gap-1.5"><button type="button" class="h-7.5 px-2.5 rounded-lg border border-border bg-background hover:bg-muted text-foreground disabled:opacity-40 disabled:pointer-events-none cursor-pointer flex items-center gap-1 transition-colors"><!> <span>Prev</span></button> <span class="px-2 font-semibold text-foreground"> </span> <button type="button" class="h-7.5 px-2.5 rounded-lg border border-border bg-background hover:bg-muted text-foreground disabled:opacity-40 disabled:pointer-events-none cursor-pointer flex items-center gap-1 transition-colors"><span>Next</span> <!></button></div></div>`, 1);
var root_22 = from_html(`<div class="space-y-1.5 animate-in fade-in duration-150"><div class="flex items-center justify-between"><label for="targetProfitInput" class="font-semibold text-foreground">New Profit Amount (BHD) <span class="text-red-500">*</span></label> <div class="flex items-center gap-1.5"><button type="button" class="text-[10px] text-muted-foreground hover:text-foreground underline cursor-pointer"> </button> <span class="text-muted-foreground">•</span> <button type="button" class="text-[10px] text-rose-600 hover:underline cursor-pointer">0.000</button></div></div> <div class="flex items-center rounded-xl border border-border bg-background focus-within:ring-2 focus-within:ring-emerald-500/30 overflow-hidden h-9"><span class="px-3 bg-muted/50 border-r border-border text-xs font-bold text-emerald-700 dark:text-emerald-400 font-mono">BHD</span> <input id="targetProfitInput" type="number" step="0.001" placeholder="Enter exact new profit..." class="flex-1 h-full px-3 bg-transparent font-mono text-xs font-bold text-foreground focus:outline-none" required=""/></div></div>`);
var root_23 = from_html(`<div class="space-y-1.5 animate-in fade-in duration-150"><label for="adjustAmtInput" class="font-semibold text-foreground">Adjustment Delta (BHD) <span class="text-red-500">*</span></label> <div class="flex items-center rounded-xl border border-border bg-background focus-within:ring-2 focus-within:ring-primary/20 overflow-hidden h-9"><span class="px-3 bg-muted/50 border-r border-border text-xs font-bold text-muted-foreground font-mono">BHD</span> <input id="adjustAmtInput" type="number" step="0.001" placeholder="+10.000 (increase) or -5.000 (deduct)" class="flex-1 h-full px-3 bg-transparent font-mono text-xs font-bold text-foreground focus:outline-none" required=""/></div></div>`);
var root_24 = from_html(`<div class="p-2 rounded-lg bg-muted/40 border border-border/80 text-[11px] space-y-0.5"><div class="flex items-center justify-between font-mono"><span class="text-muted-foreground"> </span> <span> </span></div> <div class="text-foreground text-[10px] font-medium italic"> </div></div>`);
var root_25 = from_html(`<div class="pt-2 border-t border-border space-y-2"><div class="flex items-center gap-1.5 text-muted-foreground font-bold text-[11px]"><!> <span> </span></div> <div class="space-y-1.5 max-h-32 overflow-y-auto"></div></div>`);
var root_26 = from_html(`<!> <span>Applying...</span>`, 1);
var root_27 = from_html(`<!> <span>Save & Apply Adjustment</span>`, 1);
var root_28 = from_html(`<div class="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto" role="dialog" aria-modal="true" tabindex="-1"><div class="bg-card border border-border rounded-2xl max-w-lg w-full shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 my-8"><div class="px-6 py-4 border-b border-border flex items-center justify-between bg-muted/20"><div class="flex items-center gap-2.5"><div class="h-9 w-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shadow-xs"><!></div> <div><h2 class="text-sm font-bold text-foreground">Edit Salesman Profit</h2> <p class="text-[10px] text-muted-foreground font-mono"> </p></div></div> <button type="button" class="h-8 w-8 rounded-lg bg-muted text-muted-foreground hover:text-foreground flex items-center justify-center cursor-pointer transition-colors"><!></button></div> <form class="p-6 space-y-4 text-xs max-h-[80vh] overflow-y-auto"><div class="p-3.5 bg-muted/30 border border-border rounded-xl grid grid-cols-3 gap-2 text-center"><div><span class="text-[10px] font-semibold text-muted-foreground block">Customer Price</span> <span class="font-bold font-mono text-foreground"> </span></div> <div><span class="text-[10px] font-semibold text-muted-foreground block">Supplier Cost</span> <span class="font-bold font-mono text-muted-foreground"> </span></div> <div><span class="text-[10px] font-semibold text-muted-foreground block">Current Profit</span> <span class="font-bold font-mono text-emerald-600"> </span></div></div> <div class="space-y-1.5"><span class="text-[11px] font-semibold text-muted-foreground block">Adjustment Method</span> <div class="grid grid-cols-2 gap-1.5 bg-muted/40 p-1 rounded-xl border border-border/60"><button type="button"><!> <span>Edit Profit Amount</span></button> <button type="button"><!> <span>Adjustment Delta (+/-)</span></button></div></div> <!> <div class="space-y-1.5"><label for="profitReasonInput" class="font-semibold text-foreground flex items-center justify-between"><span>Reason / Explanation <span class="text-rose-500">*</span></span> <span class="text-[10px] text-muted-foreground font-normal">Audit Logged</span></label> <textarea id="profitReasonInput" rows="2" placeholder="Explain why this profit change or commission override is being recorded..." class="w-full p-2.5 bg-background border border-border rounded-xl text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20" required=""></textarea></div> <div class="p-3 bg-primary/5 border border-primary/20 rounded-xl flex items-center justify-between text-xs"><div><span class="text-[10px] font-bold text-muted-foreground block">Projected New Profit</span> <span class="text-sm font-bold font-mono text-emerald-600"> </span></div> <div class="text-right"><span class="text-[10px] font-bold text-muted-foreground block">Calculated Delta</span> <span> </span></div></div> <!> <div class="flex items-center justify-end gap-2 pt-3 border-t border-border"><button type="button" class="h-8.5 px-3 rounded-xl border border-border bg-background text-foreground hover:bg-muted text-xs font-medium cursor-pointer transition-colors">Cancel</button> <button type="submit" class="h-8.5 px-4 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-colors disabled:opacity-60"><!></button></div></form></div></div>`);
var root_29 = from_html(`<div class="p-8 text-center text-muted-foreground space-y-1.5"><!> <p class="font-medium text-xs">No manual modifications recorded for this application.</p></div>`);
var root_30 = from_html(`<div class="p-3 bg-background border border-border rounded-xl space-y-2 relative"><div class="flex items-center justify-between text-[11px]"><div class="flex items-center gap-1.5 text-muted-foreground font-mono"><!> <span> </span></div> <span> </span></div> <div class="flex items-center justify-between text-xs font-mono bg-muted/30 p-2 rounded-lg"><span class="text-muted-foreground">Before: <strong class="text-foreground"> </strong></span> <!> <span class="text-emerald-600 font-bold"> </span></div> <div class="space-y-0.5"><span class="text-[10px] font-bold text-muted-foreground uppercase">Reason / Explanation:</span> <p class="text-xs text-foreground bg-muted/20 p-2 rounded-md font-medium"> </p></div></div>`);
var root_31 = from_html(`<div class="space-y-2.5"></div>`);
var root_32 = from_html(`<div class="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto" role="dialog" aria-modal="true" tabindex="-1"><div class="bg-card border border-border rounded-2xl max-w-lg w-full shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"><div class="px-6 py-4 border-b border-border flex items-center justify-between bg-muted/20"><div class="flex items-center gap-2.5"><div class="h-9 w-9 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center shadow-xs"><!></div> <div><h2 class="text-sm font-bold text-foreground">Profit Modification History</h2> <p class="text-[10px] text-muted-foreground font-mono"> </p></div></div> <button type="button" class="h-8 w-8 rounded-lg bg-muted text-muted-foreground hover:text-foreground flex items-center justify-center cursor-pointer transition-colors"><!></button></div> <div class="p-6 space-y-4 text-xs max-h-[70vh] overflow-y-auto"><div class="p-3.5 bg-muted/30 border border-border rounded-xl flex items-center justify-between text-xs"><div><span class="text-[10px] font-semibold text-muted-foreground block">Current Net Profit</span> <span class="font-bold font-mono text-base text-emerald-600"> </span></div> <div class="text-right"><span class="text-[10px] font-semibold text-muted-foreground block">Modifications</span> <span class="font-bold font-mono text-purple-600"> </span></div></div> <!></div> <div class="px-6 py-3.5 border-t border-border bg-muted/20 flex items-center justify-between"><a class="text-xs font-semibold text-primary hover:underline flex items-center gap-1"><span>Open Full Booking Details</span> <!></a> <!></div></div></div>`);
var root_33 = from_html(`<div class="space-y-5 pb-12"><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"><div class="space-y-1"><div class="flex items-center gap-2.5"><div class="p-2 bg-emerald-500/10 text-emerald-600 rounded-xl"><!></div> <h1 class="text-xl font-bold text-foreground tracking-tight">Salesman Profit Management</h1></div> <p class="text-xs text-muted-foreground">Review recognized profits, modify commissions/profits with audit trail, and track modification history.</p></div> <div class="flex flex-wrap items-center gap-2"><!> <!></div></div> <div class="flex items-center justify-between border-b border-border pb-2"><div class="flex items-center gap-2"><button type="button"><!> <span>Profit Applications</span> <span> </span></button> <button type="button"><!> <span>Modification History</span> <!></button></div> <!></div> <div class="bg-card border border-border rounded-2xl overflow-hidden shadow-xs"><div class="p-4 border-b border-border bg-muted/20 space-y-3"><div class="flex flex-col lg:flex-row lg:items-center justify-between gap-3"><div class="flex flex-wrap items-center gap-2 flex-1"><div class="relative min-w-[200px] flex-1 max-w-sm"><!> <input type="text" class="h-8.5 w-full bg-background border border-border rounded-xl pl-8.5 pr-3 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/40 font-medium"/> <!></div> <div class="min-w-[170px]"><!></div> <!> <div class="flex items-center gap-1.5"><input type="date" class="h-8.5 bg-background border border-border rounded-xl px-2.5 text-xs text-foreground font-medium focus:outline-none focus:ring-1 focus:ring-primary/40 cursor-pointer"/> <span class="text-xs text-muted-foreground font-bold">to</span> <input type="date" class="h-8.5 bg-background border border-border rounded-xl px-2.5 text-xs text-foreground font-medium focus:outline-none focus:ring-1 focus:ring-primary/40 cursor-pointer"/></div></div> <div class="flex items-center gap-1.5 flex-wrap"><button type="button" class="px-2.5 py-1 rounded-lg text-[11px] font-semibold border border-border bg-background hover:bg-muted text-foreground transition-colors cursor-pointer">All Time</button> <button type="button" class="px-2.5 py-1 rounded-lg text-[11px] font-semibold border border-border bg-background hover:bg-muted text-foreground transition-colors cursor-pointer">This Month</button> <button type="button" class="px-2.5 py-1 rounded-lg text-[11px] font-semibold border border-border bg-background hover:bg-muted text-foreground transition-colors cursor-pointer">Last Month</button> <!></div></div> <div class="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs"><span class="text-[11px] font-bold text-muted-foreground mr-1">Service:</span> <!></div></div> <!></div></div> <!> <!>`, 1);
function _page($$anchor, $$props) {
	push($$props, true);
	let loading = state(true);
	let activeViewTab = state("records");
	let salesmen = state(proxy([]));
	let selectedSalesmanId = state("all");
	let selectedServiceType = state("all");
	let selectedStatus = state("all");
	let searchQuery = state("");
	let startDate = state("");
	let endDate = state("");
	let currentPage = state(1);
	let pageSize = state(20);
	let historyPage = state(1);
	let historyPageSize = state(20);
	let allProfitRecords = state(proxy([]));
	let modificationHistory = state(proxy([]));
	let showAdjustModal = state(false);
	let adjustingRecord = state(null);
	let adjustMode = state("direct");
	let targetProfitAmount = state("");
	let adjustDeltaAmount = state("");
	let adjustReason = state("");
	let isSubmittingAdjustment = state(false);
	let showHistoryModal = state(false);
	let historyModalRecord = state(null);
	const salesmanOptions = user_derived(() => [{
		id: "all",
		name: "All Salesmen"
	}, ...get(salesmen).map((s) => ({
		id: String(s.id),
		name: s.name
	}))]);
	function getRecordModificationsCount(r) {
		const doc = (r.documentNumber || "").trim().toLowerCase();
		const bId = r.bookingId;
		const bType = (r.bookingType || "").trim().toLowerCase();
		return get(modificationHistory).filter((h) => {
			const hType = (h.bookingType || "").trim().toLowerCase();
			const hDoc = (h.documentNumber || "").trim().toLowerCase();
			return hType === bType && h.bookingId === bId || Boolean(doc) && Boolean(hDoc) && hDoc === doc;
		}).length;
	}
	function getRecordModifications(r) {
		const doc = (r.documentNumber || "").trim().toLowerCase();
		const bId = r.bookingId;
		const bType = (r.bookingType || "").trim().toLowerCase();
		return get(modificationHistory).filter((h) => {
			const hType = (h.bookingType || "").trim().toLowerCase();
			const hDoc = (h.documentNumber || "").trim().toLowerCase();
			return hType === bType && h.bookingId === bId || Boolean(doc) && Boolean(hDoc) && hDoc === doc;
		});
	}
	const filteredRecords = user_derived(() => {
		return get(allProfitRecords).filter((r) => {
			if (get(selectedSalesmanId) !== "all" && String(r.salesmanId) !== get(selectedSalesmanId)) return false;
			if (get(selectedServiceType) !== "all") {
				if (!r.bookingType.toLowerCase().includes(get(selectedServiceType).toLowerCase())) return false;
			}
			if (get(selectedStatus) === "finalized" && !r.isFinal) return false;
			if (get(selectedStatus) === "estimated" && r.isFinal) return false;
			if (get(startDate) && new Date(r.bookingCreatedAt) < new Date(get(startDate))) return false;
			if (get(endDate)) {
				const end = new Date(get(endDate));
				end.setHours(23, 59, 59, 999);
				if (new Date(r.bookingCreatedAt) > end) return false;
			}
			if (get(searchQuery).trim()) {
				const q = get(searchQuery).toLowerCase().trim();
				const doc = (r.documentNumber || "").toLowerCase();
				const client = (r.clientName || "").toLowerCase();
				const sName = (r.salesmanName || "").toLowerCase();
				const bId = String(r.bookingId);
				if (!doc.includes(q) && !client.includes(q) && !sName.includes(q) && !bId.includes(q)) return false;
			}
			return true;
		});
	});
	const filteredHistory = user_derived(() => {
		return get(modificationHistory).filter((h) => {
			if (get(selectedSalesmanId) !== "all" && String(h.salesmanId) !== get(selectedSalesmanId)) return false;
			if (get(selectedServiceType) !== "all") {
				if (!h.bookingType.toLowerCase().includes(get(selectedServiceType).toLowerCase())) return false;
			}
			if (get(startDate) && new Date(h.timestamp) < new Date(get(startDate))) return false;
			if (get(endDate)) {
				const end = new Date(get(endDate));
				end.setHours(23, 59, 59, 999);
				if (new Date(h.timestamp) > end) return false;
			}
			if (get(searchQuery).trim()) {
				const q = get(searchQuery).toLowerCase().trim();
				const doc = (h.documentNumber || "").toLowerCase();
				const client = (h.clientName || "").toLowerCase();
				const sName = (h.salesmanName || "").toLowerCase();
				const bId = String(h.bookingId);
				const reason = (h.reason || "").toLowerCase();
				if (!doc.includes(q) && !client.includes(q) && !sName.includes(q) && !bId.includes(q) && !reason.includes(q)) return false;
			}
			return true;
		});
	});
	const totalPages = user_derived(() => Math.max(1, Math.ceil(get(filteredRecords).length / get(pageSize))));
	const paginatedRecords = user_derived(() => {
		const start = (get(currentPage) - 1) * get(pageSize);
		return get(filteredRecords).slice(start, start + get(pageSize));
	});
	const totalHistoryPages = user_derived(() => Math.max(1, Math.ceil(get(filteredHistory).length / get(historyPageSize))));
	const paginatedHistory = user_derived(() => {
		const start = (get(historyPage) - 1) * get(historyPageSize);
		return get(filteredHistory).slice(start, start + get(historyPageSize));
	});
	const hasActiveFilters = user_derived(() => get(selectedSalesmanId) !== "all" || get(selectedServiceType) !== "all" || get(selectedStatus) !== "all" || Boolean(get(searchQuery).trim()) || Boolean(get(startDate)) || Boolean(get(endDate)));
	const totalProfitAmount = user_derived(() => {
		return get(filteredRecords).reduce((acc, r) => acc + (r.profitAmount || 0), 0);
	});
	user_derived(() => {
		return get(filteredRecords).filter((r) => r.isFinal).reduce((acc, r) => acc + (r.profitAmount || 0), 0);
	});
	user_derived(() => {
		return get(filteredRecords).filter((r) => !r.isFinal).reduce((acc, r) => acc + (r.profitAmount || 0), 0);
	});
	const totalSalesVolume = user_derived(() => {
		return get(filteredRecords).reduce((acc, r) => acc + (r.payableAmount || 0), 0);
	});
	user_derived(() => {
		if (get(totalSalesVolume) <= 0) return 0;
		return get(totalProfitAmount) / get(totalSalesVolume) * 100;
	});
	const calculatedDelta = user_derived(() => {
		if (!get(adjustingRecord)) return 0;
		if (get(adjustMode) === "direct") {
			const target = parseFloat(get(targetProfitAmount));
			if (isNaN(target)) return 0;
			return target - get(adjustingRecord).profitAmount;
		} else return parseFloat(get(adjustDeltaAmount)) || 0;
	});
	const projectedNewProfit = user_derived(() => {
		if (!get(adjustingRecord)) return 0;
		if (get(adjustMode) === "direct") {
			const target = parseFloat(get(targetProfitAmount));
			return isNaN(target) ? get(adjustingRecord).profitAmount : target;
		} else {
			const delta = parseFloat(get(adjustDeltaAmount)) || 0;
			return get(adjustingRecord).profitAmount + delta;
		}
	});
	function getServiceIcon(type) {
		const norm = (type || "").toLowerCase();
		if (norm.includes("flight")) return Plane;
		if (norm.includes("hotel")) return Building_2;
		if (norm.includes("visa")) return File_text;
		if (norm.includes("vfs")) return Calendar;
		if (norm.includes("holiday")) return Compass;
		if (norm.includes("transport")) return Car;
		return Layers;
	}
	function getServiceBadgeColor(type) {
		const norm = (type || "").toLowerCase();
		if (norm.includes("flight")) return "bg-sky-500/10 text-sky-600 border-sky-500/20";
		if (norm.includes("hotel")) return "bg-indigo-500/10 text-indigo-600 border-indigo-500/20";
		if (norm.includes("visa")) return "bg-purple-500/10 text-purple-600 border-purple-500/20";
		if (norm.includes("vfs")) return "bg-amber-500/10 text-amber-600 border-amber-500/20";
		if (norm.includes("holiday")) return "bg-emerald-500/10 text-emerald-600 border-emerald-500/20";
		if (norm.includes("transport")) return "bg-orange-500/10 text-orange-600 border-orange-500/20";
		return "bg-muted text-muted-foreground border-border";
	}
	function getServiceRouteSlug(type) {
		const norm = (type || "").toLowerCase();
		if (norm.includes("flight")) return "flights";
		if (norm.includes("hotel")) return "hotels";
		if (norm.includes("visa")) return "visa";
		if (norm.includes("vfs")) return "vfs";
		if (norm.includes("holiday")) return "holiday-packages";
		if (norm.includes("transport")) return "transportation";
		return "other-services";
	}
	function loadModificationHistory() {
		if (typeof localStorage === "undefined") return;
		try {
			const stored = localStorage.getItem("tx_profit_modification_history");
			if (stored) set(modificationHistory, JSON.parse(stored), true);
		} catch (e) {
			console.error("Error loading profit modification history from storage:", e);
		}
	}
	function saveModificationHistory(item) {
		set(modificationHistory, [item, ...get(modificationHistory)], true);
		if (typeof localStorage !== "undefined") try {
			localStorage.setItem("tx_profit_modification_history", JSON.stringify(get(modificationHistory)));
		} catch (e) {
			console.error("Error saving profit modification history:", e);
		}
	}
	async function loadAllData() {
		set(loading, true);
		try {
			loadModificationHistory();
			const [salesmenRes, reportRes] = await Promise.all([apiFetch("api/sales-entries/salesmen").catch(() => []), apiFetch("api/sales-entries/salesmen/report").catch(() => [])]);
			const reportMap = /* @__PURE__ */ new Map();
			(Array.isArray(reportRes) ? reportRes : []).forEach((r) => {
				reportMap.set(r.id || r.salesmanId, r);
			});
			set(salesmen, (Array.isArray(salesmenRes) ? salesmenRes : []).map((s) => {
				const rep = reportMap.get(s.id);
				return {
					id: s.id,
					name: s.name || `Salesman #${s.id}`,
					email: s.email,
					totalSales: rep?.totalSalesVolume ?? rep?.totalSales ?? 0,
					totalProfit: rep?.totalProfit ?? s.profitGenerated ?? 0,
					bookingCount: rep?.totalBookingsCount ?? rep?.bookingCount ?? 0,
					monthlyTarget: s.monthlyTarget ?? 0,
					profitTarget: s.profitTarget ?? 0
				};
			}), true);
			const [flightRes, hotelRes, visaRes, vfsRes, holidayRes, transportRes, otherRes] = await Promise.all([
				apiFetch("api/sales-entries/flights", { params: { pageSize: 1e3 } }).catch(() => null),
				apiFetch("api/sales-entries/hotels", { params: { pageSize: 1e3 } }).catch(() => null),
				apiFetch("api/sales-entries/visa", { params: { pageSize: 1e3 } }).catch(() => null),
				apiFetch("api/sales-entries/vfs", { params: { pageSize: 1e3 } }).catch(() => null),
				apiFetch("api/sales-entries/holiday-packages", { params: { pageSize: 1e3 } }).catch(() => null),
				apiFetch("api/sales-entries/transportations", { params: { pageSize: 1e3 } }).catch(() => null),
				apiFetch("api/sales-entries/other-services", { params: { pageSize: 1e3 } }).catch(() => null)
			]);
			const clientMap = /* @__PURE__ */ new Map();
			const registerClient = (type, id, doc, name) => {
				const cleanName = (name || "").trim();
				if (!cleanName) return;
				if (doc) clientMap.set(doc.trim().toLowerCase(), cleanName);
				if (id) clientMap.set(`${type.toLowerCase()}:${id}`, cleanName);
			};
			(flightRes?.items || []).forEach((b) => registerClient("flight", b.id, b.documentNumber, b.headName || b.passengerNames || b.careOf || b.agent));
			(hotelRes?.items || []).forEach((b) => registerClient("hotel", b.id, b.documentNumber, b.headName || b.guestName || b.careOf || b.agent));
			(visaRes?.items || []).forEach((b) => registerClient("visa", b.id, b.documentNumber, b.headName || b.applicantNames || b.agent));
			(vfsRes?.items || []).forEach((b) => registerClient("vfs", b.id, b.documentNumber, b.headName || b.name || b.agent));
			(holidayRes?.items || []).forEach((b) => registerClient("holiday", b.id, b.documentNumber, b.headName || b.passengerName || b.agent));
			(transportRes?.items || []).forEach((b) => registerClient("transport", b.id, b.documentNumber, b.headName || b.name || b.careOf || b.agent));
			(otherRes?.items || []).forEach((b) => registerClient("other", b.id, b.documentNumber, b.headName || b.name || b.serviceName || b.agent));
			const recordPromises = get(salesmen).map((s) => apiFetch(`api/sales-entries/salesmen/${s.id}/profit-records`).then((records) => {
				return (Array.isArray(records) ? records : []).map((r) => {
					const doc = (r.documentNumber || "").trim().toLowerCase();
					const typeKey = `${(r.bookingType || "").trim().toLowerCase()}:${r.bookingId}`;
					const resolvedClient = r.clientName || clientMap.get(doc) || clientMap.get(typeKey) || "";
					return {
						...r,
						salesmanId: s.id,
						salesmanName: s.name,
						clientName: resolvedClient
					};
				});
			}).catch(() => []));
			const rawRecords = (await Promise.all(recordPromises)).flat();
			set(modificationHistory, get(modificationHistory).map((h) => {
				if (h.clientName) return h;
				const doc = (h.documentNumber || "").trim().toLowerCase();
				const typeKey = `${(h.bookingType || "").trim().toLowerCase()}:${h.bookingId}`;
				const resolved = clientMap.get(doc) || clientMap.get(typeKey);
				return resolved ? {
					...h,
					clientName: resolved
				} : h;
			}), true);
			set(allProfitRecords, rawRecords.map((r) => {
				const doc = (r.documentNumber || "").trim().toLowerCase();
				const bId = r.bookingId;
				const bType = (r.bookingType || "").trim().toLowerCase();
				const latestMod = get(modificationHistory).find((h) => {
					const hType = (h.bookingType || "").trim().toLowerCase();
					const hDoc = (h.documentNumber || "").trim().toLowerCase();
					return hType === bType && h.bookingId === bId || Boolean(doc) && Boolean(hDoc) && hDoc === doc;
				});
				if (latestMod && latestMod.newProfit !== void 0) return {
					...r,
					profitAmount: latestMod.newProfit
				};
				return r;
			}), true);
		} catch (err) {
			console.error("Failed to load salesman profit data:", err);
			toast.error("Failed to load salesman profit records.");
		} finally {
			set(loading, false);
		}
	}
	function resetFilters() {
		set(selectedSalesmanId, "all");
		set(selectedServiceType, "all");
		set(selectedStatus, "all");
		set(searchQuery, "");
		set(startDate, "");
		set(endDate, "");
		set(currentPage, 1);
		set(historyPage, 1);
	}
	function setQuickDatePreset(preset) {
		set(currentPage, 1);
		set(historyPage, 1);
		if (preset === "all") {
			set(startDate, "");
			set(endDate, "");
		} else if (preset === "today") {
			const ranges = getBahrainPresetRanges();
			set(startDate, ranges.today.startDate, true);
			set(endDate, ranges.today.endDate, true);
		} else if (preset === "month") {
			const ranges = getBahrainPresetRanges();
			set(startDate, ranges.thisMonth.startDate, true);
			set(endDate, ranges.thisMonth.endDate, true);
		} else if (preset === "lastMonth") {
			const now = /* @__PURE__ */ new Date();
			const parts = new Intl.DateTimeFormat("en-US", {
				timeZone: "Asia/Bahrain",
				year: "numeric",
				month: "numeric"
			}).formatToParts(now);
			const year = parseInt(parts.find((p) => p.type === "year")?.value || "2026", 10);
			const month = parseInt(parts.find((p) => p.type === "month")?.value || "1", 10);
			const prevMonthDate = new Date(year, month - 2, 1);
			const prevYear = prevMonthDate.getFullYear();
			const prevMonth = prevMonthDate.getMonth() + 1;
			const lastDay = new Date(prevYear, prevMonth, 0).getDate();
			set(startDate, `${prevYear}-${String(prevMonth).padStart(2, "0")}-01`);
			set(endDate, `${prevYear}-${String(prevMonth).padStart(2, "0")}-${String(lastDay).padStart(2, "0")}`);
		}
	}
	function openAdjustModal(r) {
		set(adjustingRecord, r, true);
		set(adjustMode, "direct");
		set(targetProfitAmount, r.profitAmount.toFixed(3), true);
		set(adjustDeltaAmount, "");
		set(adjustReason, "");
		set(showAdjustModal, true);
	}
	function openHistoryModal(r) {
		set(historyModalRecord, r, true);
		set(showHistoryModal, true);
	}
	function switchAdjustMode(mode) {
		set(adjustMode, mode, true);
		if (mode === "direct") set(targetProfitAmount, get(projectedNewProfit).toFixed(3), true);
		else set(adjustDeltaAmount, get(calculatedDelta) !== 0 ? get(calculatedDelta).toFixed(3) : "", true);
	}
	async function submitProfitAdjustment(e) {
		e.preventDefault();
		if (!get(adjustingRecord)) return;
		if (!get(adjustReason).trim()) {
			toast.error("A mandatory explanation/reason is required for modifying profit.");
			return;
		}
		const delta = get(calculatedDelta);
		if (Math.abs(delta) < 1e-4) {
			toast.error("Profit has not been changed. Please enter a new profit amount or delta.");
			return;
		}
		set(isSubmittingAdjustment, true);
		const previousProfit = get(adjustingRecord).profitAmount;
		const finalProfit = get(projectedNewProfit);
		const recordDoc = get(adjustingRecord).documentNumber || `#${get(adjustingRecord).bookingId}`;
		try {
			get(adjustingRecord).profitAmount = finalProfit;
			const matchIndex = get(allProfitRecords).findIndex((item) => item.bookingType === get(adjustingRecord).bookingType && item.bookingId === get(adjustingRecord).bookingId);
			if (matchIndex >= 0 && get(allProfitRecords)[matchIndex]) {
				const existing = get(allProfitRecords)[matchIndex];
				get(allProfitRecords)[matchIndex] = {
					...existing,
					profitAmount: finalProfit
				};
			}
			saveModificationHistory({
				id: `mod_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`,
				recordId: get(adjustingRecord).id,
				bookingType: get(adjustingRecord).bookingType,
				bookingId: get(adjustingRecord).bookingId,
				documentNumber: get(adjustingRecord).documentNumber,
				salesmanId: get(adjustingRecord).salesmanId,
				salesmanName: get(adjustingRecord).salesmanName,
				clientName: get(adjustingRecord).clientName,
				payableAmount: get(adjustingRecord).payableAmount,
				previousProfit,
				newProfit: finalProfit,
				deltaAmount: delta,
				reason: get(adjustReason).trim(),
				timestamp: (/* @__PURE__ */ new Date()).toISOString(),
				modifiedBy: "Accountant"
			});
			await apiFetch("api/sales-entries/profit-adjustments", {
				method: "POST",
				body: JSON.stringify({
					bookingType: get(adjustingRecord).bookingType,
					bookingIdOrRef: String(get(adjustingRecord).bookingId),
					adjustmentType: 2,
					amount: delta,
					referenceType: "manual_adjustment",
					referenceId: get(adjustingRecord).documentNumber || String(get(adjustingRecord).bookingId),
					idempotencyKey: `adj_${get(adjustingRecord).bookingType}_${get(adjustingRecord).bookingId}_${Date.now()}`,
					description: get(adjustReason).trim()
				})
			});
			toast.success(`Profit updated to ${finalProfit.toFixed(3)} BHD (${delta >= 0 ? "+" : ""}${delta.toFixed(3)} BHD) for ${recordDoc}`);
			set(showAdjustModal, false);
			await loadAllData();
		} catch (err) {
			console.error("Failed to apply profit adjustment:", err);
			toast.error(err?.message || "Failed to apply profit adjustment.");
		} finally {
			set(isSubmittingAdjustment, false);
		}
	}
	function exportToCSV$1() {
		if (get(filteredRecords).length === 0) {
			toast.error("No profit records to export.");
			return;
		}
		const headers = [
			"Booking Ref",
			"Service Type",
			"Salesman Name",
			"Client Name",
			"Selling Price (BHD)",
			"Supplier Cost (BHD)",
			"Net Profit (BHD)",
			"Cost Source",
			"Modifications",
			"Status",
			"Created Date"
		];
		const rows = get(filteredRecords).map((r) => [
			r.documentNumber || r.bookingId,
			r.bookingType,
			r.salesmanName || "",
			r.clientName || "N/A",
			r.payableAmount.toFixed(3),
			r.finalSupplierCost.toFixed(3),
			r.profitAmount.toFixed(3),
			r.supplierCostSource,
			getRecordModificationsCount(r),
			r.isFinal ? "Finalized / Deal Closed" : "Estimated",
			formatDate(r.bookingCreatedAt)
		]);
		exportToCSV(`Salesman_Profit_Report_${getBahrainDateString()}.csv`, headers, rows);
		toast.success("Profit records exported to CSV.");
	}
	function exportHistoryToCSV() {
		if (get(filteredHistory).length === 0) {
			toast.error("No modification history records to export.");
			return;
		}
		const headers = [
			"Timestamp",
			"Booking Ref",
			"Service Type",
			"Salesman Name",
			"Client Name",
			"Previous Profit (BHD)",
			"New Net Profit (BHD)",
			"Delta Amount (BHD)",
			"Reason / Explanation",
			"Modified By"
		];
		const rows = get(filteredHistory).map((h) => [
			formatDateTime(h.timestamp),
			h.documentNumber || `#${h.bookingId}`,
			h.bookingType,
			h.salesmanName || "",
			h.clientName || "N/A",
			h.previousProfit.toFixed(3),
			h.newProfit.toFixed(3),
			h.deltaAmount >= 0 ? `+${h.deltaAmount.toFixed(3)}` : h.deltaAmount.toFixed(3),
			h.reason || "",
			h.modifiedBy || "Accountant"
		]);
		exportToCSV(`Profit_Modification_History_${getBahrainDateString()}.csv`, headers, rows);
		toast.success("Modification history exported to CSV.");
	}
	onMount(() => {
		loadAllData();
	});
	var fragment = root_33();
	head("ja0847", ($$anchor) => {
		effect(() => {
			$document.title = "Salesman Profit Management — Accounts Portal";
		});
	});
	var div = first_child(fragment);
	var div_1 = child(div);
	var div_2 = child(div_1);
	var div_3 = child(div_2);
	var div_4 = child(div_3);
	Trending_up(child(div_4), { class: "h-5 w-5" });
	reset(div_4);
	next(2);
	reset(div_3);
	next(2);
	reset(div_2);
	var div_5 = sibling(div_2, 2);
	var node_1 = child(div_5);
	var consequent = ($$anchor) => {
		{
			let $0 = user_derived(() => get(loading) || get(filteredRecords).length === 0);
			Button($$anchor, {
				variant: "outline",
				class: "h-8.5 rounded-xl cursor-pointer flex items-center gap-1.5 text-xs font-semibold",
				onclick: exportToCSV$1,
				get disabled() {
					return get($0);
				},
				children: ($$anchor, $$slotProps) => {
					var fragment_2 = root();
					Download(first_child(fragment_2), { class: "h-3.5 w-3.5" });
					next(2);
					append($$anchor, fragment_2);
				},
				$$slots: { default: true }
			});
		}
	};
	var alternate = ($$anchor) => {
		{
			let $0 = user_derived(() => get(loading) || get(filteredHistory).length === 0);
			Button($$anchor, {
				variant: "outline",
				class: "h-8.5 rounded-xl cursor-pointer flex items-center gap-1.5 text-xs font-semibold",
				onclick: exportHistoryToCSV,
				get disabled() {
					return get($0);
				},
				children: ($$anchor, $$slotProps) => {
					var fragment_4 = root_1();
					Download(first_child(fragment_4), { class: "h-3.5 w-3.5" });
					next(2);
					append($$anchor, fragment_4);
				},
				$$slots: { default: true }
			});
		}
	};
	if_block(node_1, ($$render) => {
		if (get(activeViewTab) === "records") $$render(consequent);
		else $$render(alternate, -1);
	});
	Button(sibling(node_1, 2), {
		variant: "outline",
		class: "h-8.5 rounded-xl cursor-pointer flex items-center gap-1.5 text-xs font-semibold",
		onclick: loadAllData,
		get disabled() {
			return get(loading);
		},
		children: ($$anchor, $$slotProps) => {
			var fragment_5 = root_2();
			var node_5 = first_child(fragment_5);
			{
				let $0 = user_derived(() => get(loading) ? "animate-spin" : "");
				Refresh_cw(node_5, { get class() {
					return `h-3.5 w-3.5 ${get($0) ?? ""}`;
				} });
			}
			next(2);
			append($$anchor, fragment_5);
		},
		$$slots: { default: true }
	});
	reset(div_5);
	reset(div_1);
	var div_6 = sibling(div_1, 2);
	var div_7 = child(div_6);
	var button = child(div_7);
	var node_6 = child(button);
	Layers(node_6, { class: "h-4 w-4" });
	var span = sibling(node_6, 4);
	var text$1 = child(span, true);
	reset(span);
	reset(button);
	var button_1 = sibling(button, 2);
	var node_7 = child(button_1);
	History(node_7, { class: "h-4 w-4" });
	var node_8 = sibling(node_7, 4);
	var consequent_1 = ($$anchor) => {
		var span_1 = root_3();
		var text_1 = child(span_1, true);
		reset(span_1);
		template_effect(() => {
			set_class(span_1, 1, `px-1.5 py-0.5 rounded-full text-[10px] font-mono ${get(activeViewTab) === "history" ? "bg-primary-foreground/20 text-primary-foreground" : "bg-purple-500/20 text-purple-600 font-bold"}`);
			set_text(text_1, get(modificationHistory).length);
		});
		append($$anchor, span_1);
	};
	if_block(node_8, ($$render) => {
		if (get(modificationHistory).length > 0) $$render(consequent_1);
	});
	reset(button_1);
	reset(div_7);
	var node_9 = sibling(div_7, 2);
	var consequent_2 = ($$anchor) => {
		append($$anchor, root_4());
	};
	if_block(node_9, ($$render) => {
		if (get(activeViewTab) === "history" && get(modificationHistory).length > 0) $$render(consequent_2);
	});
	reset(div_6);
	var div_8 = sibling(div_6, 2);
	var div_9 = child(div_8);
	var div_10 = child(div_9);
	var div_11 = child(div_10);
	var div_12 = child(div_11);
	var node_10 = child(div_12);
	Search(node_10, { class: "h-3.5 w-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" });
	var input = sibling(node_10, 2);
	remove_input_defaults(input);
	var node_11 = sibling(input, 2);
	var consequent_3 = ($$anchor) => {
		var button_2 = root_5();
		X(child(button_2), { class: "h-3.5 w-3.5" });
		reset(button_2);
		delegated("click", button_2, () => set(searchQuery, ""));
		append($$anchor, button_2);
	};
	if_block(node_11, ($$render) => {
		if (get(searchQuery)) $$render(consequent_3);
	});
	reset(div_12);
	var div_13 = sibling(div_12, 2);
	SearchableSelect(child(div_13), {
		get options() {
			return get(salesmanOptions);
		},
		get value() {
			return get(selectedSalesmanId);
		},
		onchange: (val) => {
			set(selectedSalesmanId, val, true);
			set(currentPage, 1);
			set(historyPage, 1);
		},
		placeholder: "Select Salesman",
		searchPlaceholder: "Search salesmen..."
	});
	reset(div_13);
	var node_14 = sibling(div_13, 2);
	var consequent_4 = ($$anchor) => {
		var div_14 = root_6();
		var select = child(div_14);
		var option = child(select);
		option.value = option.__value = "all";
		var option_1 = sibling(option);
		option_1.value = option_1.__value = "finalized";
		var option_2 = sibling(option_1);
		option_2.value = option_2.__value = "estimated";
		reset(select);
		reset(div_14);
		delegated("change", select, () => set(currentPage, 1));
		bind_select_value(select, () => get(selectedStatus), ($$value) => set(selectedStatus, $$value));
		append($$anchor, div_14);
	};
	if_block(node_14, ($$render) => {
		if (get(activeViewTab) === "records") $$render(consequent_4);
	});
	var div_15 = sibling(node_14, 2);
	var input_1 = child(div_15);
	remove_input_defaults(input_1);
	var input_2 = sibling(input_1, 4);
	remove_input_defaults(input_2);
	reset(div_15);
	reset(div_11);
	var div_16 = sibling(div_11, 2);
	var button_3 = child(div_16);
	var button_4 = sibling(button_3, 2);
	var button_5 = sibling(button_4, 2);
	var node_15 = sibling(button_5, 2);
	var consequent_5 = ($$anchor) => {
		var button_6 = root_7();
		Rotate_ccw(child(button_6), { class: "h-3 w-3" });
		next(2);
		reset(button_6);
		delegated("click", button_6, resetFilters);
		append($$anchor, button_6);
	};
	if_block(node_15, ($$render) => {
		if (get(hasActiveFilters)) $$render(consequent_5);
	});
	reset(div_16);
	reset(div_10);
	var div_17 = sibling(div_10, 2);
	each(sibling(child(div_17), 2), 17, () => [
		{
			id: "all",
			label: "All Services",
			icon: Layers
		},
		{
			id: "flight",
			label: "Flights",
			icon: Plane
		},
		{
			id: "hotel",
			label: "Hotels",
			icon: Building_2
		},
		{
			id: "visa",
			label: "Visas",
			icon: File_text
		},
		{
			id: "holiday",
			label: "Holidays",
			icon: Compass
		},
		{
			id: "vfs",
			label: "VFS",
			icon: Calendar
		},
		{
			id: "transport",
			label: "Transport",
			icon: Car
		}
	], index, ($$anchor, srv) => {
		const isSrvActive = user_derived(() => get(selectedServiceType) === get(srv).id);
		const SrvIcon = user_derived(() => get(srv).icon);
		var button_7 = root_8();
		var node_18 = child(button_7);
		component(node_18, () => get(SrvIcon), ($$anchor, SrvIcon_1) => {
			SrvIcon_1($$anchor, { class: "h-3 w-3" });
		});
		var span_3 = sibling(node_18, 2);
		var text_2 = child(span_3, true);
		reset(span_3);
		reset(button_7);
		template_effect(() => {
			set_class(button_7, 1, `px-2.5 py-1 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${get(isSrvActive) ? "bg-primary text-primary-foreground shadow-2xs font-bold" : "bg-background hover:bg-muted text-muted-foreground hover:text-foreground border border-border"}`);
			set_text(text_2, get(srv).label);
		});
		delegated("click", button_7, () => {
			set(selectedServiceType, get(srv).id, true);
			set(currentPage, 1);
			set(historyPage, 1);
		});
		append($$anchor, button_7);
	});
	reset(div_17);
	reset(div_9);
	var node_19 = sibling(div_9, 2);
	var consequent_12 = ($$anchor) => {
		var fragment_6 = comment();
		var node_20 = first_child(fragment_6);
		var consequent_6 = ($$anchor) => {
			var div_18 = root_9();
			Refresh_cw(child(div_18), { class: "h-8 w-8 text-primary animate-spin" });
			reset(div_18);
			append($$anchor, div_18);
		};
		var consequent_8 = ($$anchor) => {
			var div_19 = root_11();
			var div_20 = child(div_19);
			Trending_up(child(div_20), { class: "h-6 w-6" });
			reset(div_20);
			var node_23 = sibling(div_20, 6);
			var consequent_7 = ($$anchor) => {
				Button($$anchor, {
					variant: "outline",
					size: "sm",
					onclick: resetFilters,
					class: "rounded-xl text-xs",
					children: ($$anchor, $$slotProps) => {
						var fragment_8 = root_10();
						Rotate_ccw(first_child(fragment_8), { class: "h-3 w-3 mr-1.5" });
						next(2);
						append($$anchor, fragment_8);
					},
					$$slots: { default: true }
				});
			};
			if_block(node_23, ($$render) => {
				if (get(hasActiveFilters)) $$render(consequent_7);
			});
			reset(div_19);
			append($$anchor, div_19);
		};
		var alternate_2 = ($$anchor) => {
			var fragment_9 = root_17();
			var div_21 = first_child(fragment_9);
			var table = child(div_21);
			var tbody = sibling(child(table));
			each(tbody, 21, () => get(paginatedRecords), index, ($$anchor, r) => {
				const ServiceIcon = user_derived(() => getServiceIcon(get(r).bookingType));
				const modCount = user_derived(() => getRecordModificationsCount(get(r)));
				var tr = root_16();
				var td = child(tr);
				var div_22 = child(td);
				var div_23 = child(div_22);
				component(child(div_23), () => get(ServiceIcon), ($$anchor, ServiceIcon_1) => {
					ServiceIcon_1($$anchor, { class: "h-3.5 w-3.5" });
				});
				reset(div_23);
				var div_24 = sibling(div_23, 2);
				var a = child(div_24);
				var span_4 = child(a);
				var text_3 = child(span_4, true);
				reset(span_4);
				External_link(sibling(span_4, 2), { class: "h-2.5 w-2.5 opacity-60" });
				reset(a);
				var node_27 = sibling(a, 2);
				var consequent_9 = ($$anchor) => {
					var span_5 = root_12();
					var text_4 = child(span_5, true);
					reset(span_5);
					template_effect(() => {
						set_attribute(span_5, "title", get(r).clientName);
						set_text(text_4, get(r).clientName);
					});
					append($$anchor, span_5);
				};
				if_block(node_27, ($$render) => {
					if (get(r).clientName) $$render(consequent_9);
				});
				var span_6 = sibling(node_27, 2);
				DateDisplay(child(span_6), { get date() {
					return get(r).bookingCreatedAt;
				} });
				reset(span_6);
				reset(div_24);
				reset(div_22);
				reset(td);
				var td_1 = sibling(td);
				var div_25 = child(td_1);
				var div_26 = child(div_25);
				var text_5 = child(div_26, true);
				reset(div_26);
				var span_7 = sibling(div_26, 2);
				var text_6 = child(span_7, true);
				reset(span_7);
				reset(div_25);
				reset(td_1);
				var td_2 = sibling(td_1);
				MoneyDisplay(child(td_2), { get amount() {
					return get(r).payableAmount;
				} });
				reset(td_2);
				var td_3 = sibling(td_2);
				var span_8 = child(td_3);
				MoneyDisplay(child(span_8), { get amount() {
					return get(r).finalSupplierCost;
				} });
				reset(span_8);
				var span_9 = sibling(span_8, 2);
				var text_7 = child(span_9, true);
				reset(span_9);
				reset(td_3);
				var td_4 = sibling(td_3);
				var span_10 = child(td_4);
				MoneyDisplay(child(span_10), { get amount() {
					return get(r).profitAmount;
				} });
				reset(span_10);
				reset(td_4);
				var td_5 = sibling(td_4);
				var node_32 = child(td_5);
				var consequent_10 = ($$anchor) => {
					var button_8 = root_13();
					var node_33 = child(button_8);
					History(node_33, { class: "h-3 w-3" });
					var span_11 = sibling(node_33, 2);
					var text_8 = child(span_11);
					reset(span_11);
					reset(button_8);
					template_effect(() => set_text(text_8, `Modified (${get(modCount) ?? ""})`));
					delegated("click", button_8, () => openHistoryModal(get(r)));
					append($$anchor, button_8);
				};
				var alternate_1 = ($$anchor) => {
					append($$anchor, root_14());
				};
				if_block(node_32, ($$render) => {
					if (get(modCount) > 0) $$render(consequent_10);
					else $$render(alternate_1, -1);
				});
				reset(td_5);
				var td_6 = sibling(td_5);
				var div_27 = child(td_6);
				var node_34 = child(div_27);
				var consequent_11 = ($$anchor) => {
					Button($$anchor, {
						variant: "ghost",
						size: "sm",
						class: "h-7 px-2 rounded-lg text-xs font-semibold cursor-pointer text-purple-600 hover:bg-purple-500/10",
						onclick: () => openHistoryModal(get(r)),
						title: "View modification history",
						children: ($$anchor, $$slotProps) => {
							History($$anchor, { class: "h-3 w-3" });
						},
						$$slots: { default: true }
					});
				};
				if_block(node_34, ($$render) => {
					if (get(modCount) > 0) $$render(consequent_11);
				});
				Button(sibling(node_34, 2), {
					variant: "outline",
					size: "sm",
					class: "h-7 px-2.5 rounded-lg text-xs font-semibold cursor-pointer hover:bg-primary hover:text-primary-foreground transition-all",
					onclick: () => openAdjustModal(get(r)),
					children: ($$anchor, $$slotProps) => {
						var fragment_12 = root_15();
						Pen_line(first_child(fragment_12), { class: "h-3 w-3 mr-1" });
						next(2);
						append($$anchor, fragment_12);
					},
					$$slots: { default: true }
				});
				reset(div_27);
				reset(td_6);
				reset(tr);
				template_effect(($0, $1, $2) => {
					set_class(div_23, 1, `p-1.5 rounded-lg border ${$0 ?? ""}`);
					set_attribute(a, "href", `/sales/bookings/${$1 ?? ""}/${get(r).bookingId ?? ""}`);
					set_text(text_3, get(r).documentNumber || `#${get(r).bookingId}`);
					set_text(text_5, $2);
					set_text(text_6, get(r).salesmanName || `Salesman #${get(r).salesmanId}`);
					set_text(text_7, get(r).supplierCostSource);
					set_class(span_10, 1, `font-mono font-bold text-sm ${get(r).profitAmount >= 0 ? "text-emerald-600" : "text-rose-600"}`);
				}, [
					() => getServiceBadgeColor(get(r).bookingType),
					() => getServiceRouteSlug(get(r).bookingType),
					() => (get(r).salesmanName || "S").charAt(0).toUpperCase()
				]);
				append($$anchor, tr);
			});
			reset(tbody);
			reset(table);
			reset(div_21);
			var div_28 = sibling(div_21, 2);
			var div_29 = child(div_28);
			var span_13 = child(div_29);
			var text_9 = child(span_13);
			reset(span_13);
			var select_1 = sibling(span_13, 2);
			var option_3 = child(select_1);
			option_3.value = option_3.__value = 10;
			var option_4 = sibling(option_3);
			option_4.value = option_4.__value = 20;
			var option_5 = sibling(option_4);
			option_5.value = option_5.__value = 50;
			var option_6 = sibling(option_5);
			option_6.value = option_6.__value = 100;
			reset(select_1);
			reset(div_29);
			var div_30 = sibling(div_29, 2);
			var button_9 = child(div_30);
			Chevron_left(child(button_9), { class: "h-3.5 w-3.5" });
			next(2);
			reset(button_9);
			var span_14 = sibling(button_9, 2);
			var text_10 = child(span_14);
			reset(span_14);
			var button_10 = sibling(span_14, 2);
			Chevron_right(sibling(child(button_10), 2), { class: "h-3.5 w-3.5" });
			reset(button_10);
			reset(div_30);
			reset(div_28);
			template_effect(($0) => {
				set_text(text_9, `Showing ${(get(currentPage) - 1) * get(pageSize) + 1} to ${$0 ?? ""} of ${get(filteredRecords).length ?? ""} records`);
				button_9.disabled = get(currentPage) <= 1;
				set_text(text_10, `Page ${get(currentPage) ?? ""} of ${get(totalPages) ?? ""}`);
				button_10.disabled = get(currentPage) >= get(totalPages);
			}, [() => Math.min(get(currentPage) * get(pageSize), get(filteredRecords).length)]);
			delegated("change", select_1, () => set(currentPage, 1));
			bind_select_value(select_1, () => get(pageSize), ($$value) => set(pageSize, $$value));
			delegated("click", button_9, () => update(currentPage, -1));
			delegated("click", button_10, () => update(currentPage));
			append($$anchor, fragment_9);
		};
		if_block(node_20, ($$render) => {
			if (get(loading)) $$render(consequent_6);
			else if (get(paginatedRecords).length === 0) $$render(consequent_8, 1);
			else $$render(alternate_2, -1);
		});
		append($$anchor, fragment_6);
	};
	var alternate_4 = ($$anchor) => {
		var fragment_13 = comment();
		var node_39 = first_child(fragment_13);
		var consequent_14 = ($$anchor) => {
			var div_31 = root_18();
			var div_32 = child(div_31);
			History(child(div_32), { class: "h-6 w-6" });
			reset(div_32);
			var node_41 = sibling(div_32, 6);
			var consequent_13 = ($$anchor) => {
				Button($$anchor, {
					variant: "outline",
					size: "sm",
					onclick: resetFilters,
					class: "rounded-xl text-xs",
					children: ($$anchor, $$slotProps) => {
						var fragment_15 = root_10();
						Rotate_ccw(first_child(fragment_15), { class: "h-3 w-3 mr-1.5" });
						next(2);
						append($$anchor, fragment_15);
					},
					$$slots: { default: true }
				});
			};
			if_block(node_41, ($$render) => {
				if (get(hasActiveFilters)) $$render(consequent_13);
			});
			reset(div_31);
			append($$anchor, div_31);
		};
		var alternate_3 = ($$anchor) => {
			var fragment_16 = root_21();
			var div_33 = first_child(fragment_16);
			var table_1 = child(div_33);
			var tbody_1 = sibling(child(table_1));
			each(tbody_1, 21, () => get(paginatedHistory), index, ($$anchor, h) => {
				const ServiceIcon = user_derived(() => getServiceIcon(get(h).bookingType));
				var tr_1 = root_20();
				var td_7 = child(tr_1);
				var div_34 = child(td_7);
				var node_43 = child(div_34);
				Clock(node_43, { class: "h-3.5 w-3.5 text-muted-foreground shrink-0" });
				var div_35 = sibling(node_43, 2);
				var span_15 = child(div_35);
				var text_11 = child(span_15, true);
				reset(span_15);
				var span_16 = sibling(span_15, 2);
				var text_12 = child(span_16, true);
				reset(span_16);
				reset(div_35);
				reset(div_34);
				reset(td_7);
				var td_8 = sibling(td_7);
				var div_36 = child(td_8);
				var div_37 = child(div_36);
				component(child(div_37), () => get(ServiceIcon), ($$anchor, ServiceIcon_2) => {
					ServiceIcon_2($$anchor, { class: "h-3.5 w-3.5" });
				});
				reset(div_37);
				var div_38 = sibling(div_37, 2);
				var a_1 = child(div_38);
				var span_17 = child(a_1);
				var text_13 = child(span_17, true);
				reset(span_17);
				External_link(sibling(span_17, 2), { class: "h-2.5 w-2.5 opacity-60" });
				reset(a_1);
				var node_46 = sibling(a_1, 2);
				var consequent_15 = ($$anchor) => {
					var span_18 = root_19();
					var text_14 = child(span_18, true);
					reset(span_18);
					template_effect(() => {
						set_attribute(span_18, "title", get(h).clientName);
						set_text(text_14, get(h).clientName);
					});
					append($$anchor, span_18);
				};
				if_block(node_46, ($$render) => {
					if (get(h).clientName) $$render(consequent_15);
				});
				var span_19 = sibling(node_46, 2);
				var text_15 = child(span_19, true);
				reset(span_19);
				reset(div_38);
				reset(div_36);
				reset(td_8);
				var td_9 = sibling(td_8);
				var div_39 = child(td_9);
				var div_40 = child(div_39);
				var text_16 = child(div_40, true);
				reset(div_40);
				var span_20 = sibling(div_40, 2);
				var text_17 = child(span_20, true);
				reset(span_20);
				reset(div_39);
				reset(td_9);
				var td_10 = sibling(td_9);
				var div_41 = child(td_10);
				var span_21 = child(div_41);
				var text_18 = child(span_21, true);
				reset(span_21);
				var node_47 = sibling(span_21, 2);
				Arrow_right(node_47, { class: "h-3 w-3 text-muted-foreground" });
				var span_22 = sibling(node_47, 2);
				var text_19 = child(span_22);
				reset(span_22);
				reset(div_41);
				reset(td_10);
				var td_11 = sibling(td_10);
				var span_23 = child(td_11);
				var text_20 = child(span_23);
				reset(span_23);
				reset(td_11);
				var td_12 = sibling(td_11);
				var div_42 = child(td_12);
				var text_21 = child(div_42, true);
				reset(div_42);
				var span_24 = sibling(div_42, 2);
				var text_22 = child(span_24);
				reset(span_24);
				reset(td_12);
				var td_13 = sibling(td_12);
				var a_2 = child(td_13);
				External_link(sibling(child(a_2), 2), { class: "h-3 w-3" });
				reset(a_2);
				reset(td_13);
				reset(tr_1);
				template_effect(($0, $1, $2, $3, $4, $5, $6, $7, $8, $9) => {
					set_text(text_11, $0);
					set_text(text_12, $1);
					set_class(div_37, 1, `p-1.5 rounded-lg border ${$2 ?? ""}`);
					set_attribute(a_1, "href", `/sales/bookings/${$3 ?? ""}/${get(h).bookingId ?? ""}`);
					set_text(text_13, get(h).documentNumber || `#${get(h).bookingId}`);
					set_text(text_15, get(h).bookingType);
					set_text(text_16, $4);
					set_text(text_17, get(h).salesmanName || `Salesman #${get(h).salesmanId}`);
					set_text(text_18, $5);
					set_text(text_19, `${$6 ?? ""} BHD`);
					set_class(span_23, 1, $7);
					set_text(text_20, `${get(h).deltaAmount >= 0 ? "+" : ""}${$8 ?? ""} BHD`);
					set_text(text_21, get(h).reason);
					set_text(text_22, `By ${(get(h).modifiedBy || "Accountant") ?? ""}`);
					set_attribute(a_2, "href", `/sales/bookings/${$9 ?? ""}/${get(h).bookingId ?? ""}`);
				}, [
					() => formatDate(get(h).timestamp),
					() => formatBahrainTime(get(h).timestamp),
					() => getServiceBadgeColor(get(h).bookingType),
					() => getServiceRouteSlug(get(h).bookingType),
					() => (get(h).salesmanName || "S").charAt(0).toUpperCase(),
					() => get(h).previousProfit.toFixed(3),
					() => get(h).newProfit.toFixed(3),
					() => clsx(["inline-block px-2.5 py-0.5 rounded-full font-mono text-xs font-bold", get(h).deltaAmount >= 0 ? "bg-emerald-500/10 text-emerald-600 border border-emerald-500/20" : "bg-rose-500/10 text-rose-600 border border-rose-500/20"].join(" ")),
					() => get(h).deltaAmount.toFixed(3),
					() => getServiceRouteSlug(get(h).bookingType)
				]);
				append($$anchor, tr_1);
			});
			reset(tbody_1);
			reset(table_1);
			reset(div_33);
			var div_43 = sibling(div_33, 2);
			var div_44 = child(div_43);
			var span_25 = child(div_44);
			var text_23 = child(span_25);
			reset(span_25);
			var select_2 = sibling(span_25, 2);
			var option_7 = child(select_2);
			option_7.value = option_7.__value = 10;
			var option_8 = sibling(option_7);
			option_8.value = option_8.__value = 20;
			var option_9 = sibling(option_8);
			option_9.value = option_9.__value = 50;
			var option_10 = sibling(option_9);
			option_10.value = option_10.__value = 100;
			reset(select_2);
			reset(div_44);
			var div_45 = sibling(div_44, 2);
			var button_11 = child(div_45);
			Chevron_left(child(button_11), { class: "h-3.5 w-3.5" });
			next(2);
			reset(button_11);
			var span_26 = sibling(button_11, 2);
			var text_24 = child(span_26);
			reset(span_26);
			var button_12 = sibling(span_26, 2);
			Chevron_right(sibling(child(button_12), 2), { class: "h-3.5 w-3.5" });
			reset(button_12);
			reset(div_45);
			reset(div_43);
			template_effect(($0) => {
				set_text(text_23, `Showing ${(get(historyPage) - 1) * get(historyPageSize) + 1} to ${$0 ?? ""} of ${get(filteredHistory).length ?? ""} modifications`);
				button_11.disabled = get(historyPage) <= 1;
				set_text(text_24, `Page ${get(historyPage) ?? ""} of ${get(totalHistoryPages) ?? ""}`);
				button_12.disabled = get(historyPage) >= get(totalHistoryPages);
			}, [() => Math.min(get(historyPage) * get(historyPageSize), get(filteredHistory).length)]);
			delegated("change", select_2, () => set(historyPage, 1));
			bind_select_value(select_2, () => get(historyPageSize), ($$value) => set(historyPageSize, $$value));
			delegated("click", button_11, () => update(historyPage, -1));
			delegated("click", button_12, () => update(historyPage));
			append($$anchor, fragment_16);
		};
		if_block(node_39, ($$render) => {
			if (get(filteredHistory).length === 0) $$render(consequent_14);
			else $$render(alternate_3, -1);
		});
		append($$anchor, fragment_13);
	};
	if_block(node_19, ($$render) => {
		if (get(activeViewTab) === "records") $$render(consequent_12);
		else $$render(alternate_4, -1);
	});
	reset(div_8);
	reset(div);
	var node_51 = sibling(div, 2);
	var consequent_19 = ($$anchor) => {
		const recordPriorHistory = user_derived(() => getRecordModifications(get(adjustingRecord)));
		var div_46 = root_28();
		var div_47 = child(div_46);
		var div_48 = child(div_47);
		var div_49 = child(div_48);
		var div_50 = child(div_49);
		Pen_line(child(div_50), { class: "h-4.5 w-4.5" });
		reset(div_50);
		var div_51 = sibling(div_50, 2);
		var p_1 = sibling(child(div_51), 2);
		var text_25 = child(p_1);
		reset(p_1);
		reset(div_51);
		reset(div_49);
		var button_13 = sibling(div_49, 2);
		X(child(button_13), { class: "h-4 w-4" });
		reset(button_13);
		reset(div_48);
		var form = sibling(div_48, 2);
		var div_52 = child(form);
		var div_53 = child(div_52);
		var span_27 = sibling(child(div_53), 2);
		var text_26 = child(span_27);
		reset(span_27);
		reset(div_53);
		var div_54 = sibling(div_53, 2);
		var span_28 = sibling(child(div_54), 2);
		var text_27 = child(span_28);
		reset(span_28);
		reset(div_54);
		var div_55 = sibling(div_54, 2);
		var span_29 = sibling(child(div_55), 2);
		var text_28 = child(span_29);
		reset(span_29);
		reset(div_55);
		reset(div_52);
		var div_56 = sibling(div_52, 2);
		var div_57 = sibling(child(div_56), 2);
		var button_14 = child(div_57);
		Dollar_sign(child(button_14), { class: "h-3.5 w-3.5 text-emerald-600" });
		next(2);
		reset(button_14);
		var button_15 = sibling(button_14, 2);
		Sliders_horizontal(child(button_15), { class: "h-3.5 w-3.5 text-primary" });
		next(2);
		reset(button_15);
		reset(div_57);
		reset(div_56);
		var node_56 = sibling(div_56, 2);
		var consequent_16 = ($$anchor) => {
			var div_58 = root_22();
			var div_59 = child(div_58);
			var div_60 = sibling(child(div_59), 2);
			var button_16 = child(div_60);
			var text_29 = child(button_16);
			reset(button_16);
			var button_17 = sibling(button_16, 4);
			reset(div_60);
			reset(div_59);
			var div_61 = sibling(div_59, 2);
			var input_3 = sibling(child(div_61), 2);
			remove_input_defaults(input_3);
			reset(div_61);
			reset(div_58);
			template_effect(($0) => set_text(text_29, `Reset to Current (${$0 ?? ""})`), [() => get(adjustingRecord).profitAmount.toFixed(3)]);
			delegated("click", button_16, () => set(targetProfitAmount, get(adjustingRecord)?.profitAmount.toFixed(3) || "0.000", true));
			delegated("click", button_17, () => set(targetProfitAmount, "0.000"));
			bind_value(input_3, () => get(targetProfitAmount), ($$value) => set(targetProfitAmount, $$value));
			append($$anchor, div_58);
		};
		var alternate_5 = ($$anchor) => {
			var div_62 = root_23();
			var div_63 = sibling(child(div_62), 2);
			var input_4 = sibling(child(div_63), 2);
			remove_input_defaults(input_4);
			reset(div_63);
			reset(div_62);
			bind_value(input_4, () => get(adjustDeltaAmount), ($$value) => set(adjustDeltaAmount, $$value));
			append($$anchor, div_62);
		};
		if_block(node_56, ($$render) => {
			if (get(adjustMode) === "direct") $$render(consequent_16);
			else $$render(alternate_5, -1);
		});
		var div_64 = sibling(node_56, 2);
		var textarea = sibling(child(div_64), 2);
		remove_textarea_child(textarea);
		reset(div_64);
		var div_65 = sibling(div_64, 2);
		var div_66 = child(div_65);
		var span_30 = sibling(child(div_66), 2);
		var text_30 = child(span_30);
		reset(span_30);
		reset(div_66);
		var div_67 = sibling(div_66, 2);
		var span_31 = sibling(child(div_67), 2);
		var text_31 = child(span_31);
		reset(span_31);
		reset(div_67);
		reset(div_65);
		var node_57 = sibling(div_65, 2);
		var consequent_17 = ($$anchor) => {
			var div_68 = root_25();
			var div_69 = child(div_68);
			var node_58 = child(div_69);
			History(node_58, { class: "h-3.5 w-3.5 text-purple-600" });
			var span_32 = sibling(node_58, 2);
			var text_32 = child(span_32);
			reset(span_32);
			reset(div_69);
			var div_70 = sibling(div_69, 2);
			each(div_70, 21, () => get(recordPriorHistory), index, ($$anchor, ph) => {
				var div_71 = root_24();
				var div_72 = child(div_71);
				var span_33 = child(div_72);
				var text_33 = child(span_33, true);
				reset(span_33);
				var span_34 = sibling(span_33, 2);
				var text_34 = child(span_34);
				reset(span_34);
				reset(div_72);
				var div_73 = sibling(div_72, 2);
				var text_35 = child(div_73);
				reset(div_73);
				reset(div_71);
				template_effect(($0, $1) => {
					set_text(text_33, $0);
					set_class(span_34, 1, `font-bold ${get(ph).deltaAmount >= 0 ? "text-emerald-600" : "text-rose-600"}`);
					set_text(text_34, `${get(ph).deltaAmount >= 0 ? "+" : ""}${$1 ?? ""} BHD`);
					set_text(text_35, `"${get(ph).reason ?? ""}"`);
				}, [() => new Date(get(ph).timestamp).toLocaleString(), () => get(ph).deltaAmount.toFixed(3)]);
				append($$anchor, div_71);
			});
			reset(div_70);
			reset(div_68);
			template_effect(() => set_text(text_32, `Prior Modifications (${get(recordPriorHistory).length ?? ""})`));
			append($$anchor, div_68);
		};
		if_block(node_57, ($$render) => {
			if (get(recordPriorHistory).length > 0) $$render(consequent_17);
		});
		var div_74 = sibling(node_57, 2);
		var button_18 = child(div_74);
		var button_19 = sibling(button_18, 2);
		var node_59 = child(button_19);
		var consequent_18 = ($$anchor) => {
			var fragment_17 = root_26();
			Refresh_cw(first_child(fragment_17), { class: "h-3.5 w-3.5 animate-spin" });
			next(2);
			append($$anchor, fragment_17);
		};
		var alternate_6 = ($$anchor) => {
			var fragment_18 = root_27();
			Save(first_child(fragment_18), { class: "h-3.5 w-3.5" });
			next(2);
			append($$anchor, fragment_18);
		};
		if_block(node_59, ($$render) => {
			if (get(isSubmittingAdjustment)) $$render(consequent_18);
			else $$render(alternate_6, -1);
		});
		reset(button_19);
		reset(div_74);
		reset(form);
		reset(div_47);
		reset(div_46);
		template_effect(($0, $1, $2, $3, $4, $5, $6, $7, $8) => {
			set_text(text_25, `${(get(adjustingRecord).documentNumber || `#${get(adjustingRecord).bookingId}`) ?? ""} • ${get(adjustingRecord).bookingType ?? ""} • ${get(adjustingRecord).salesmanName ?? ""}`);
			set_text(text_26, `${$0 ?? ""} BHD`);
			set_text(text_27, `${$1 ?? ""} BHD`);
			set_text(text_28, `${$2 ?? ""} BHD`);
			set_class(button_14, 1, $3);
			set_class(button_15, 1, $4);
			set_text(text_30, `${$5 ?? ""} BHD`);
			set_class(span_31, 1, $6);
			set_text(text_31, `${get(calculatedDelta) >= 0 ? "+" : ""}${$7 ?? ""} BHD`);
			button_18.disabled = get(isSubmittingAdjustment);
			button_19.disabled = $8;
		}, [
			() => get(adjustingRecord).payableAmount.toFixed(3),
			() => get(adjustingRecord).finalSupplierCost.toFixed(3),
			() => get(adjustingRecord).profitAmount.toFixed(3),
			() => clsx(["py-1.5 text-center rounded-lg font-semibold transition-all cursor-pointer text-xs flex items-center justify-center gap-1.5", get(adjustMode) === "direct" ? "bg-card text-foreground font-bold shadow-xs border border-border" : "text-muted-foreground hover:text-foreground"].join(" ")),
			() => clsx(["py-1.5 text-center rounded-lg font-semibold transition-all cursor-pointer text-xs flex items-center justify-center gap-1.5", get(adjustMode) === "delta" ? "bg-card text-foreground font-bold shadow-xs border border-border" : "text-muted-foreground hover:text-foreground"].join(" ")),
			() => get(projectedNewProfit).toFixed(3),
			() => clsx(["text-xs font-bold font-mono px-2 py-0.5 rounded-md inline-block", get(calculatedDelta) > 0 ? "bg-emerald-500/10 text-emerald-600" : get(calculatedDelta) < 0 ? "bg-rose-500/10 text-rose-600" : "bg-muted text-muted-foreground"].join(" ")),
			() => get(calculatedDelta).toFixed(3),
			() => get(isSubmittingAdjustment) || !get(adjustReason).trim() || Math.abs(get(calculatedDelta)) < 1e-4
		]);
		delegated("click", div_46, (e) => e.target === e.currentTarget && set(showAdjustModal, false));
		delegated("keydown", div_46, (e) => e.key === "Escape" && set(showAdjustModal, false));
		delegated("click", button_13, () => set(showAdjustModal, false));
		event("submit", form, submitProfitAdjustment);
		delegated("click", button_14, () => switchAdjustMode("direct"));
		delegated("click", button_15, () => switchAdjustMode("delta"));
		bind_value(textarea, () => get(adjustReason), ($$value) => set(adjustReason, $$value));
		delegated("click", button_18, () => set(showAdjustModal, false));
		append($$anchor, div_46);
	};
	if_block(node_51, ($$render) => {
		if (get(showAdjustModal) && get(adjustingRecord)) $$render(consequent_19);
	});
	var node_62 = sibling(node_51, 2);
	var consequent_21 = ($$anchor) => {
		const recordHistory = user_derived(() => getRecordModifications(get(historyModalRecord)));
		var div_75 = root_32();
		var div_76 = child(div_75);
		var div_77 = child(div_76);
		var div_78 = child(div_77);
		var div_79 = child(div_78);
		History(child(div_79), { class: "h-4.5 w-4.5" });
		reset(div_79);
		var div_80 = sibling(div_79, 2);
		var p_2 = sibling(child(div_80), 2);
		var text_36 = child(p_2);
		reset(p_2);
		reset(div_80);
		reset(div_78);
		var button_20 = sibling(div_78, 2);
		X(child(button_20), { class: "h-4 w-4" });
		reset(button_20);
		reset(div_77);
		var div_81 = sibling(div_77, 2);
		var div_82 = child(div_81);
		var div_83 = child(div_82);
		var span_35 = sibling(child(div_83), 2);
		var text_37 = child(span_35);
		reset(span_35);
		reset(div_83);
		var div_84 = sibling(div_83, 2);
		var span_36 = sibling(child(div_84), 2);
		var text_38 = child(span_36);
		reset(span_36);
		reset(div_84);
		reset(div_82);
		var node_65 = sibling(div_82, 2);
		var consequent_20 = ($$anchor) => {
			var div_85 = root_29();
			History(child(div_85), { class: "h-6 w-6 mx-auto opacity-40" });
			next(2);
			reset(div_85);
			append($$anchor, div_85);
		};
		var alternate_7 = ($$anchor) => {
			var div_86 = root_31();
			each(div_86, 21, () => get(recordHistory), index, ($$anchor, item) => {
				var div_87 = root_30();
				var div_88 = child(div_87);
				var div_89 = child(div_88);
				var node_67 = child(div_89);
				Clock(node_67, { class: "h-3 w-3 text-purple-500" });
				var span_37 = sibling(node_67, 2);
				var text_39 = child(span_37, true);
				reset(span_37);
				reset(div_89);
				var span_38 = sibling(div_89, 2);
				var text_40 = child(span_38);
				reset(span_38);
				reset(div_88);
				var div_90 = sibling(div_88, 2);
				var span_39 = child(div_90);
				var strong = sibling(child(span_39));
				var text_41 = child(strong);
				reset(strong);
				reset(span_39);
				var node_68 = sibling(span_39, 2);
				Arrow_right(node_68, { class: "h-3 w-3 text-muted-foreground" });
				var span_40 = sibling(node_68, 2);
				var text_42 = child(span_40);
				reset(span_40);
				reset(div_90);
				var div_91 = sibling(div_90, 2);
				var p_3 = sibling(child(div_91), 2);
				var text_43 = child(p_3);
				reset(p_3);
				reset(div_91);
				reset(div_87);
				template_effect(($0, $1, $2, $3, $4) => {
					set_text(text_39, $0);
					set_class(span_38, 1, $1);
					set_text(text_40, `${get(item).deltaAmount >= 0 ? "+" : ""}${$2 ?? ""} BHD`);
					set_text(text_41, `${$3 ?? ""} BHD`);
					set_text(text_42, `After: ${$4 ?? ""} BHD`);
					set_text(text_43, `"${get(item).reason ?? ""}"`);
				}, [
					() => new Date(get(item).timestamp).toLocaleString(),
					() => clsx(["font-mono font-bold px-2 py-0.5 rounded-md text-xs", get(item).deltaAmount >= 0 ? "bg-emerald-500/10 text-emerald-600 border border-emerald-500/20" : "bg-rose-500/10 text-rose-600 border border-rose-500/20"].join(" ")),
					() => get(item).deltaAmount.toFixed(3),
					() => get(item).previousProfit.toFixed(3),
					() => get(item).newProfit.toFixed(3)
				]);
				append($$anchor, div_87);
			});
			reset(div_86);
			append($$anchor, div_86);
		};
		if_block(node_65, ($$render) => {
			if (get(recordHistory).length === 0) $$render(consequent_20);
			else $$render(alternate_7, -1);
		});
		reset(div_81);
		var div_92 = sibling(div_81, 2);
		var a_3 = child(div_92);
		External_link(sibling(child(a_3), 2), { class: "h-3 w-3" });
		reset(a_3);
		Button(sibling(a_3, 2), {
			variant: "outline",
			size: "sm",
			onclick: () => set(showHistoryModal, false),
			class: "rounded-xl text-xs",
			children: ($$anchor, $$slotProps) => {
				next();
				append($$anchor, text("Close"));
			},
			$$slots: { default: true }
		});
		reset(div_92);
		reset(div_76);
		reset(div_75);
		template_effect(($0, $1) => {
			set_text(text_36, `${(get(historyModalRecord).documentNumber || `#${get(historyModalRecord).bookingId}`) ?? ""} • ${get(historyModalRecord).bookingType ?? ""} • ${get(historyModalRecord).salesmanName ?? ""}`);
			set_text(text_37, `${$0 ?? ""} BHD`);
			set_text(text_38, `${get(recordHistory).length ?? ""} change${get(recordHistory).length === 1 ? "" : "s"} logged`);
			set_attribute(a_3, "href", `/sales/bookings/${$1 ?? ""}/${get(historyModalRecord).bookingId ?? ""}`);
		}, [() => get(historyModalRecord).profitAmount.toFixed(3), () => getServiceRouteSlug(get(historyModalRecord).bookingType)]);
		delegated("click", div_75, (e) => e.target === e.currentTarget && set(showHistoryModal, false));
		delegated("keydown", div_75, (e) => e.key === "Escape" && set(showHistoryModal, false));
		delegated("click", button_20, () => set(showHistoryModal, false));
		append($$anchor, div_75);
	};
	if_block(node_62, ($$render) => {
		if (get(showHistoryModal) && get(historyModalRecord)) $$render(consequent_21);
	});
	template_effect(($0, $1) => {
		set_class(button, 1, $0);
		set_class(span, 1, `px-1.5 py-0.5 rounded-full text-[10px] font-mono ${get(activeViewTab) === "records" ? "bg-primary-foreground/20 text-primary-foreground" : "bg-muted text-muted-foreground"}`);
		set_text(text$1, get(allProfitRecords).length);
		set_class(button_1, 1, $1);
		set_attribute(input, "placeholder", get(activeViewTab) === "records" ? "Search by Doc #, Booking ID, Client..." : "Search history by Doc #, Client, Reason...");
	}, [() => clsx(["px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2", get(activeViewTab) === "records" ? "bg-primary text-primary-foreground shadow-xs" : "bg-muted/40 hover:bg-muted text-muted-foreground hover:text-foreground"].join(" ")), () => clsx(["px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2", get(activeViewTab) === "history" ? "bg-primary text-primary-foreground shadow-xs" : "bg-muted/40 hover:bg-muted text-muted-foreground hover:text-foreground"].join(" "))]);
	delegated("click", button, () => set(activeViewTab, "records"));
	delegated("click", button_1, () => set(activeViewTab, "history"));
	bind_value(input, () => get(searchQuery), ($$value) => set(searchQuery, $$value));
	delegated("change", input_1, () => {
		set(currentPage, 1);
		set(historyPage, 1);
	});
	bind_value(input_1, () => get(startDate), ($$value) => set(startDate, $$value));
	delegated("change", input_2, () => {
		set(currentPage, 1);
		set(historyPage, 1);
	});
	bind_value(input_2, () => get(endDate), ($$value) => set(endDate, $$value));
	delegated("click", button_3, () => setQuickDatePreset("all"));
	delegated("click", button_4, () => setQuickDatePreset("month"));
	delegated("click", button_5, () => setQuickDatePreset("lastMonth"));
	append($$anchor, fragment);
	pop();
}
delegate([
	"click",
	"change",
	"keydown"
]);
//#endregion
export { _page as component };

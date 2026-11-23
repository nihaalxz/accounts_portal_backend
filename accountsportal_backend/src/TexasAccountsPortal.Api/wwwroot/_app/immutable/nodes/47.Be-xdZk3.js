import { B as append, Bt as reset, Ct as user_derived, D as head, Et as store_get, G as text, H as from_html, I as if_block, K as delegate, M as slot, N as each, Nt as pop, Pt as push, Q as get, R as set_text, Tt as setup_stores, V as comment, _ as set_attribute, a as legacy_rest_props, b as bind_select_value, bt as state, c as spread_props, dt as $document, g as remove_input_defaults, gt as proxy, ht as sibling, it as effect, m as bind_value, mt as first_child, ot as template_effect, pt as child, q as delegated, r as onMount, ut as remove_textarea_child, vt as set, w as set_class, xt as update, zt as next } from "../chunks/dXkmWTgM.js";
import "../chunks/DhaYE-8x.js";
import { t as apiFetch } from "../chunks/BjkPoo3P.js";
import { i as hasRole, r as currentUser } from "../chunks/B9qcUfE2.js";
import "../chunks/DZfWAsjW.js";
import { r as toast } from "../chunks/CbPRQHfn.js";
import { t as Icon } from "../chunks/BalaELqB.js";
import { t as Briefcase } from "../chunks/DMJEmKtH.js";
import { t as Check } from "../chunks/blG6JRe72.js";
import { t as Chevron_left } from "../chunks/bgfi4Y0B2.js";
import { t as Chevron_right } from "../chunks/BQLzQDdY2.js";
import { t as Circle_check } from "../chunks/qB0lJ_dM2.js";
import { t as Copy } from "../chunks/CR2cE2gY2.js";
import { t as External_link } from "../chunks/ifddzD342.js";
import { t as File_spreadsheet } from "../chunks/B4BvDHOF2.js";
import { t as Lock } from "../chunks/DLJP7XQX.js";
import { t as Mail } from "../chunks/DhZuqLVV.js";
import { t as Pencil } from "../chunks/C3Ohi_CL.js";
import { t as Phone } from "../chunks/BGwWtEfw.js";
import { t as Refresh_cw } from "../chunks/DpTJy0Wb.js";
import { t as Search } from "../chunks/D7t9qluE.js";
import { t as Shield_alert } from "../chunks/BqY57apW.js";
import { t as Trash_2 } from "../chunks/TFHBi7f3.js";
import { t as Triangle_alert } from "../chunks/BKenZzGW.js";
import { t as User } from "../chunks/C8PICJbu.js";
import { t as Users } from "../chunks/Bja056I7.js";
import { t as Wallet } from "../chunks/BahXSy4P.js";
import { t as X } from "../chunks/wXHc9RNY.js";
import { t as page } from "../chunks/Cp6l_bwZ2.js";
import { t as Button } from "../chunks/BhXsq3bC2.js";
import "../chunks/BPzyII_u2.js";
import { t as MoneyDisplay } from "../chunks/CIVSRuaR2.js";
import { t as DateDisplay } from "../chunks/BJqYGGoC2.js";
import "../chunks/NWTEgXFe2.js";
import { t as exportToCSV } from "../chunks/C74Z4VDd2.js";
import { t as SearchableSelect } from "../chunks/DP5NOm4E.js";
//#region node_modules/lucide-svelte/dist/icons/map-pin.svelte
function Map_pin($$anchor, $$props) {
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
	const iconNode = [["path", { "d": "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" }], ["circle", {
		"cx": "12",
		"cy": "10",
		"r": "3"
	}]];
	/**
	* @component @name MapPin
	* @description Lucide SVG icon component, renders SVG Element with children.
	*
	* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjAgMTBjMCA0Ljk5My01LjUzOSAxMC4xOTMtNy4zOTkgMTEuNzk5YTEgMSAwIDAgMS0xLjIwMiAwQzkuNTM5IDIwLjE5MyA0IDE0Ljk5MyA0IDEwYTggOCAwIDAgMSAxNiAwIiAvPgogIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTAiIHI9IjMiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/map-pin
	* @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
	*
	* @param {Object} props - Lucide icons props and any valid SVG attribute
	* @returns {FunctionalComponent} Svelte component
	*
	*/
	Icon($$anchor, spread_props({ name: "map-pin" }, () => $$sanitized_props, {
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
//#region src/routes/(app)/sales/heads/+page.svelte
var root = from_html(`<!> <span>Refresh</span>`, 1);
var root_1 = from_html(`<!> <span>Export CSV</span>`, 1);
var root_2 = from_html(`<button type="button" class="absolute inset-y-0 right-2.5 flex items-center text-muted-foreground hover:text-foreground cursor-pointer" title="Clear search"><!></button>`);
var root_3 = from_html(`<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[11px] font-semibold"><!> Master Accountant</span>`);
var root_4 = from_html(`<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-muted text-muted-foreground border border-border text-[11px] font-medium"><!> Read-Only</span>`);
var root_5 = from_html(`<!> <span>Reset</span>`, 1);
var root_6 = from_html(`<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-primary/10 text-primary border border-primary/20 font-medium"><!> <button type="button" class="hover:text-destructive transition-colors ml-0.5 cursor-pointer" title="Clear salesman filter"><!></button></span>`);
var root_7 = from_html(`<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-muted border border-border font-medium text-foreground capitalize"> <button type="button" class="hover:text-destructive transition-colors ml-0.5 cursor-pointer" title="Clear type filter"><!></button></span>`);
var root_8 = from_html(`<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-muted border border-border font-medium text-foreground"> <button type="button" class="hover:text-destructive transition-colors ml-0.5 cursor-pointer" title="Clear search query"><!></button></span>`);
var root_9 = from_html(`<div class="flex flex-wrap items-center gap-2 pt-1 border-t border-border/30 text-[11px]"><span class="text-muted-foreground text-[10px] uppercase font-bold tracking-wider">Active:</span> <!> <!> <!></div>`);
var root_10 = from_html(`<div class="py-20 flex flex-col items-center justify-center gap-3"><!> <span class="text-xs text-muted-foreground">Loading client heads directory...</span></div>`);
var root_11 = from_html(`<div class="py-20 flex flex-col items-center justify-center gap-3 text-destructive"><!> <span class="text-xs font-medium"> </span> <!></div>`);
var root_12 = from_html(`<div class="py-20 flex flex-col items-center justify-center gap-3 text-muted-foreground"><!> <span class="text-xs">No client heads match your current search or filters.</span> <!></div>`);
var root_13 = from_html(`<span class="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-purple-500/10 text-purple-600 border border-purple-500/20">Agent</span>`);
var root_14 = from_html(`<span class="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-sky-500/10 text-sky-600 border border-sky-500/20">Customer</span>`);
var root_15 = from_html(`<div class="text-[11px] text-muted-foreground mt-0.5"> </div>`);
var root_16 = from_html(`<div class="flex items-center gap-1.5"><!> <span class="font-mono text-[11px] text-foreground"> </span> <button type="button" title="Copy phone number" class="text-muted-foreground hover:text-foreground p-0.5 rounded cursor-pointer transition-colors"><!></button></div>`);
var root_17 = from_html(`<div class="flex items-center gap-1.5"><!> <a class="text-primary hover:underline text-[11px] truncate max-w-[180px]"> </a></div>`);
var root_18 = from_html(`<div class="flex items-start gap-1 max-w-[200px]"><!> <span class="text-[11px] text-muted-foreground line-clamp-2"> </span></div>`);
var root_19 = from_html(`<span class="text-[11px] text-muted-foreground italic">None</span>`);
var root_20 = from_html(`<button type="button" class="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl text-[11px] font-medium bg-muted/60 text-foreground border border-border/60 hover:border-primary/40 hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer"><!> <span> </span></button>`);
var root_21 = from_html(`<span class="text-[11px] text-muted-foreground italic">Inhouse / Direct</span>`);
var root_22 = from_html(`<button type="button" title="Edit client details (Master Accountant)" class="h-7.5 w-7.5 rounded-lg border border-primary/20 bg-primary/5 hover:bg-primary/15 text-primary inline-flex items-center justify-center transition-colors cursor-pointer"><!></button>`);
var root_23 = from_html(`<button type="button" disabled="" title="Only Master Accountants can edit client details" class="h-7.5 w-7.5 rounded-lg border border-border/40 text-muted-foreground/30 cursor-not-allowed inline-flex items-center justify-center"><!></button>`);
var root_24 = from_html(`<tr class="hover:bg-muted/20 transition-colors group"><td class="p-4 font-mono text-[11px] text-muted-foreground"> </td><td class="p-4"><div class="flex items-center gap-3"><div> </div> <div><div class="font-bold text-foreground text-xs flex items-center gap-1.5"><span> </span> <!></div> <!></div></div></td><td class="p-4 space-y-1"><!> <!></td><td class="p-4"><!></td><td class="p-4"><!></td><td class="p-4 text-right"><div><!></div></td><td class="p-4 text-[11px] text-muted-foreground whitespace-nowrap font-mono"><!></td><td class="p-4 text-center"><div class="flex items-center justify-center gap-1.5"><a title="Explore Client Ledger" class="h-7.5 w-7.5 rounded-lg border border-border/60 hover:bg-muted text-muted-foreground hover:text-foreground inline-flex items-center justify-center transition-colors cursor-pointer"><!></a> <!> <div class="relative group inline-flex" title="Coming Soon"><button type="button" disabled="" class="h-7.5 w-7.5 rounded-lg border border-border/40 text-muted-foreground/30 cursor-not-allowed inline-flex items-center justify-center transition-colors" aria-label="Delete head (Coming Soon)"><!></button> <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 hidden group-hover:flex items-center justify-center px-2 py-0.5 text-[10px] font-medium text-white bg-foreground/90 rounded shadow-md whitespace-nowrap z-50 pointer-events-none">Coming Soon</div></div></div></td></tr>`);
var root_25 = from_html(`<!> <span>Previous</span>`, 1);
var root_26 = from_html(`<span>Next</span> <!>`, 1);
var root_27 = from_html(`<div class="overflow-x-auto"><table class="w-full min-w-[850px] text-left border-collapse text-xs"><thead><tr class="bg-muted/30 border-b border-border text-muted-foreground font-semibold"><th class="p-4 w-16 font-semibold">ID</th><th class="p-4 font-semibold">Client / Party</th><th class="p-4 font-semibold">Contact Details</th><th class="p-4 font-semibold">Address</th><th class="p-4 font-semibold">Assigned Salesman</th><th class="p-4 font-semibold text-right">Wallet Balance</th><th class="p-4 font-semibold">Created Date</th><th class="p-4 font-semibold text-center w-28">Actions</th></tr></thead><tbody class="divide-y divide-border/60"></tbody></table></div> <div class="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 border-t border-border/60 bg-muted/10"><div class="flex items-center gap-2 text-xs text-muted-foreground"><span>Rows per page:</span> <select class="h-8 px-2.5 text-xs bg-background border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer"><option>10</option><option>25</option><option>50</option><option>100</option></select> <span class="ml-2">Showing <strong class="text-foreground"> </strong> - <strong class="text-foreground"> </strong> of <strong class="text-foreground"> </strong></span></div> <div class="flex items-center gap-1.5"><!> <div class="px-2.5 py-1 rounded-xl bg-muted text-[11px] font-mono font-semibold text-foreground"> </div> <!></div></div>`, 1);
var root_28 = from_html(`<div class="p-3 rounded-xl bg-destructive/10 border border-destructive/30 text-destructive text-xs font-medium flex items-center gap-2"><!> <span> </span></div>`);
var root_29 = from_html(`<!> Saving...`, 1);
var root_30 = from_html(`<div class="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"><div class="bg-card border border-border rounded-2xl max-w-lg w-full shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]"><div class="px-6 py-4 border-b border-border flex items-center justify-between bg-muted/20"><div class="flex items-center gap-2.5"><div class="h-9 w-9 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-xs text-white"><!></div> <div><h2 class="text-sm font-bold text-foreground"> </h2> <p class="text-[10px] text-muted-foreground">Modify party contact info, category, and address.</p></div></div> <button type="button" class="h-8 w-8 rounded-lg bg-muted text-muted-foreground hover:text-foreground flex items-center justify-center cursor-pointer transition-colors"><!></button></div> <div class="p-6 space-y-4 overflow-y-auto text-xs"><!> <div class="grid grid-cols-2 gap-3"><div class="space-y-1.5"><label for="edit-fn" class="text-xs font-semibold text-foreground flex items-center gap-1">First Name <span class="text-destructive">*</span></label> <input id="edit-fn" type="text" placeholder="First Name" class="w-full h-9 px-3 bg-background border border-border rounded-xl text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20" required=""/></div> <div class="space-y-1.5"><label for="edit-ln" class="text-xs font-semibold text-foreground">Last Name</label> <input id="edit-ln" type="text" placeholder="Last Name" class="w-full h-9 px-3 bg-background border border-border rounded-xl text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"/></div></div> <div class="grid grid-cols-2 gap-3"><div class="space-y-1.5"><label for="edit-type" class="text-xs font-semibold text-foreground">Party Type</label> <select id="edit-type" class="w-full h-9 px-3 text-xs bg-background border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer"><option>Customer</option><option>Agent</option></select></div> <div class="space-y-1.5"><label for="edit-nat" class="text-xs font-semibold text-foreground">Nationality</label> <input id="edit-nat" type="text" placeholder="e.g. Bahraini, Indian" class="w-full h-9 px-3 bg-background border border-border rounded-xl text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"/></div></div> <div class="grid grid-cols-2 gap-3"><div class="space-y-1.5"><label for="edit-mobile" class="text-xs font-semibold text-foreground flex items-center gap-1">Mobile / Phone <span class="text-destructive">*</span></label> <input id="edit-mobile" type="text" placeholder="e.g. 97333000000" class="w-full h-9 px-3 bg-background border border-border rounded-xl text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20" required=""/></div> <div class="space-y-1.5"><label for="edit-email" class="text-xs font-semibold text-foreground flex items-center gap-1">Email Address <span class="text-destructive">*</span></label> <input id="edit-email" type="email" placeholder="client@example.com" class="w-full h-9 px-3 bg-background border border-border rounded-xl text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20" required=""/></div></div> <div class="space-y-1.5"><label for="edit-addr" class="text-xs font-semibold text-foreground">Address</label> <textarea id="edit-addr" rows="3" placeholder="Full client address..." class="w-full p-3 text-xs bg-background border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"></textarea></div></div> <div class="px-6 py-4 border-t border-border flex items-center justify-end gap-2 bg-muted/20"><!> <!></div></div></div>`);
var root_31 = from_html(`<div class="p-3 rounded-xl bg-destructive/10 text-destructive text-xs border border-destructive/20"> </div>`);
var root_32 = from_html(`<div class="flex items-center justify-between"><span class="text-muted-foreground">Assigned Salesman:</span> <span class="font-medium text-foreground"> </span></div>`);
var root_33 = from_html(`<!> Deleting All Records...`, 1);
var root_34 = from_html(`<!> Permanently Delete Head`, 1);
var root_35 = from_html(`<div class="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"><div class="bg-card border border-destructive/30 rounded-2xl max-w-lg w-full shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"><div class="px-6 py-4 border-b border-border flex items-center justify-between bg-destructive/10"><div class="flex items-center gap-2.5 text-destructive"><div class="h-9 w-9 rounded-xl bg-destructive/20 flex items-center justify-center shadow-xs"><!></div> <div><h3 class="font-bold text-sm">Delete Client Head & Linked Records</h3> <p class="text-[10px] text-destructive/80">Permanent cascading deletion</p></div></div> <button type="button" class="h-8 w-8 rounded-lg bg-muted text-muted-foreground hover:text-foreground flex items-center justify-center cursor-pointer transition-colors"><!></button></div> <div class="p-6 space-y-4 text-xs"><div class="p-3.5 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-xs leading-relaxed space-y-1"><div class="font-bold flex items-center gap-1.5"><!> Warning: This action is permanent and cannot be undone!</div> <p class="text-[11px] text-destructive/90">Deleting this client head will permanently cascade and remove all associated bookings (visas, flights, hotels, holidays, VFS, transport, other services), passenger/applicant records, profit calculations, receipts, payment allocations, credit receivables, and ledger transactions across both portals.</p></div> <!> <div class="p-4 rounded-xl bg-muted/40 border border-border space-y-2"><div class="flex items-center justify-between"><span class="text-muted-foreground">Client ID:</span> <span class="font-mono font-bold text-foreground"> </span></div> <div class="flex items-center justify-between"><span class="text-muted-foreground">Name:</span> <span class="font-semibold text-foreground"> </span></div> <div class="flex items-center justify-between"><span class="text-muted-foreground">Type:</span> <span> </span></div> <!> <div class="flex items-center justify-between border-t border-border/50 pt-2"><span class="text-muted-foreground">Current Wallet Balance:</span> <div class="font-mono font-bold"><!></div></div></div> <p class="text-muted-foreground text-[11px]">Please confirm that you intend to permanently delete this head and all corresponding operational records.</p></div> <div class="px-6 py-4 border-t border-border flex items-center justify-end gap-2 bg-muted/20"><!> <!></div></div></div>`);
var root_36 = from_html(`<div class="space-y-6"><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"><div class="flex flex-col gap-1"><h1 class="text-xl font-bold text-foreground flex items-center gap-2 font-sans"><!> Client Heads Directory</h1> <p class="text-xs text-muted-foreground">Authoritative directory of customer and agent heads, linked sales ledger accounts, contact profiles, and live wallet balances.</p></div> <div class="flex items-center gap-2"><!></div></div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5"><div class="bg-card border border-border rounded-2xl p-4 shadow-xs space-y-1"><div class="flex items-center justify-between"><span class="text-[11px] font-bold text-muted-foreground uppercase tracking-wider block">Total Client Heads</span> <div class="p-2 rounded-xl bg-primary/10 text-primary"><!></div></div> <span class="text-2xl font-bold tracking-tight text-foreground block"> </span> <span class="text-[10px] text-muted-foreground block">Registered customer & agent parties</span></div> <div class="bg-card border border-border rounded-2xl p-4 shadow-xs space-y-1"><div class="flex items-center justify-between"><span class="text-[11px] font-bold text-muted-foreground uppercase tracking-wider block">Direct Customers</span> <div class="p-2 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400"><!></div></div> <span class="text-2xl font-bold tracking-tight text-sky-600 dark:text-sky-400 block"> </span> <span class="text-[10px] text-muted-foreground block"> </span></div> <div class="bg-card border border-border rounded-2xl p-4 shadow-xs space-y-1"><div class="flex items-center justify-between"><span class="text-[11px] font-bold text-muted-foreground uppercase tracking-wider block">Agency Partners</span> <div class="p-2 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400"><!></div></div> <span class="text-2xl font-bold tracking-tight text-purple-600 dark:text-purple-400 block"> </span> <span class="text-[10px] text-muted-foreground block"> </span></div> <div class="bg-card border border-border rounded-2xl p-4 shadow-xs space-y-1"><div class="flex items-center justify-between"><span class="text-[11px] font-bold text-muted-foreground uppercase tracking-wider block">Total Net Wallet Standing</span> <div><!></div></div> <span><!></span> <span class="text-[10px] text-muted-foreground block"> </span></div></div> <div class="bg-card border border-border rounded-2xl p-4 shadow-xs space-y-3"><div class="flex flex-col lg:flex-row lg:items-center justify-between gap-3"><div class="flex items-center gap-1.5 text-xs overflow-x-auto flex-nowrap pb-0.5 scrollbar-thin"><button type="button"><!> <span>All Heads</span> <span> </span></button> <button type="button"><!> <span>Customers</span> <span> </span></button> <button type="button"><!> <span>Agents</span> <span> </span></button></div> <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5"><div class="w-full sm:w-60"><!></div> <!></div></div> <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 border-t border-border/40 text-xs"><div class="relative flex-1"><span class="absolute inset-y-0 left-3 flex items-center text-muted-foreground/60 pointer-events-none"><!></span> <input type="text" placeholder="Search by client name, mobile phone number, email, or nationality..." class="w-full pl-9 pr-8 py-1.5 text-xs rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground/60"/> <!></div> <div class="flex items-center gap-2 shrink-0"><!> <!></div></div> <!></div> <div class="bg-card border border-border rounded-2xl overflow-hidden shadow-xs"><!></div></div> <!> <!>`, 1);
function _page($$anchor, $$props) {
	push($$props, true);
	const $currentUser = () => store_get(currentUser, "$currentUser", $$stores);
	const $page = () => store_get(page, "$page", $$stores);
	const [$$stores, $$cleanup] = setup_stores();
	let heads = state(proxy([]));
	let salesmen = state(proxy([]));
	let loading = state(false);
	let error = state(null);
	let summaryStats = state(proxy({
		totalCount: 0,
		customerCount: 0,
		agentCount: 0,
		totalWallet: 0
	}));
	let search = state("");
	let selectedSalesmanId = state("all");
	let selectedType = state("all");
	let currentPage = state(1);
	let pageSize = state(25);
	let totalCount = state(0);
	let totalPages = state(1);
	const salesmanOptions = user_derived(() => [{
		id: "all",
		name: "All Salesmen"
	}, ...get(salesmen).map((s) => ({
		id: String(s.id),
		name: s.name
	}))]);
	let showEditModal = state(false);
	let editingHead = state(null);
	let editFirstName = state("");
	let editLastName = state("");
	let editType = state("customer");
	let editMobileNo = state("");
	let editEmail = state("");
	let editNationality = state("");
	let editAddress = state("");
	let savingEdit = state(false);
	let editError = state(null);
	let showDeleteModal = state(false);
	let deletingHead = state(null);
	let isDeleting = state(false);
	let deleteError = state(null);
	let copiedMobileId = state(null);
	const isMasterAccountant = user_derived(() => {
		const userType = ($currentUser()?.userType ?? "").toLowerCase().replace(/\s+/g, "_");
		return userType === "master_accountant" || userType === "master accountant" || hasRole("master_accountant");
	});
	const totalWalletSum = user_derived(() => get(summaryStats).totalWallet);
	const customerCount = user_derived(() => get(summaryStats).customerCount);
	const agentCount = user_derived(() => get(summaryStats).agentCount);
	const overallTotalCount = user_derived(() => get(summaryStats).totalCount);
	async function loadSalesmen() {
		try {
			const res = await apiFetch("api/sales-entries/salesmen");
			set(salesmen, res || [], true);
		} catch (err) {
			console.error("Failed to load salesmen list:", err);
		}
	}
	async function fetchHeads() {
		set(loading, true);
		set(error, null);
		try {
			const params = new URLSearchParams({
				page: get(currentPage).toString(),
				pageSize: get(pageSize).toString()
			});
			if (get(search).trim()) params.append("search", get(search).trim());
			if (get(selectedType) && get(selectedType) !== "all") params.append("type", get(selectedType));
			if (get(selectedSalesmanId) && get(selectedSalesmanId) !== "all") params.append("salesmanId", get(selectedSalesmanId));
			const res = await apiFetch(`api/sales-entries/heads?${params.toString()}`);
			if (res) {
				set(heads, res.items || [], true);
				set(totalCount, res.totalCount || 0, true);
				set(totalPages, res.totalPages || Math.ceil((res.totalCount || 0) / get(pageSize)) || 1, true);
				if (get(summaryStats).totalCount === 0 && get(totalCount) > 0 && get(selectedType) === "all" && (!get(selectedSalesmanId) || get(selectedSalesmanId) === "all")) get(summaryStats).totalCount = get(totalCount);
			}
		} catch (err) {
			set(error, err?.message || "Failed to fetch client heads.", true);
			toast.error(get(error) ?? "An unexpected error occurred.");
		} finally {
			set(loading, false);
		}
	}
	async function fetchSummary() {
		try {
			const res = await apiFetch(get(selectedSalesmanId) && get(selectedSalesmanId) !== "all" ? `api/sales-entries/heads/summary?salesmanId=${get(selectedSalesmanId)}` : "api/sales-entries/heads/summary");
			if (res) {
				set(summaryStats, res, true);
				return;
			}
		} catch (err) {
			console.warn("Failed to load heads summary stats from endpoint, falling back to calculation:", err);
		}
		try {
			let fallbackUrl = "api/sales-entries/heads?page=1&pageSize=5000";
			if (get(selectedSalesmanId) && get(selectedSalesmanId) !== "all") fallbackUrl += `&salesmanId=${get(selectedSalesmanId)}`;
			const allHeadsRes = await apiFetch(fallbackUrl);
			if (allHeadsRes && allHeadsRes.items && allHeadsRes.items.length > 0) {
				const items = allHeadsRes.items;
				const total = allHeadsRes.totalCount > 0 ? allHeadsRes.totalCount : items.length;
				const customers = items.filter((h) => !h.type || h.type.toLowerCase() === "customer" || h.type.toLowerCase() === "head").length;
				const agents = items.filter((h) => h.type && h.type.toLowerCase() === "agent").length;
				const walletSum = items.reduce((sum, h) => sum + (Number(h.wallet) || 0), 0);
				set(summaryStats, {
					totalCount: total,
					customerCount: customers,
					agentCount: agents,
					totalWallet: walletSum
				}, true);
			} else set(summaryStats, {
				totalCount: 0,
				customerCount: 0,
				agentCount: 0,
				totalWallet: 0
			}, true);
		} catch (fallbackErr) {
			console.error("Failed to calculate fallback summary stats:", fallbackErr);
		}
	}
	let debounceTimer = null;
	function handleSearchInput() {
		set(currentPage, 1);
		if (debounceTimer) clearTimeout(debounceTimer);
		debounceTimer = setTimeout(() => {
			fetchHeads();
		}, 300);
	}
	function handleFilterChange() {
		set(currentPage, 1);
		fetchHeads();
		fetchSummary();
	}
	function handleSalesmanChange(val) {
		set(selectedSalesmanId, String(val), true);
		set(currentPage, 1);
		fetchHeads();
		fetchSummary();
	}
	function handleTypeChange(type) {
		set(selectedType, type, true);
		set(currentPage, 1);
		fetchHeads();
	}
	function resetAllFilters() {
		set(search, "");
		set(selectedSalesmanId, "all");
		set(selectedType, "all");
		set(currentPage, 1);
		fetchHeads();
		fetchSummary();
	}
	function copyToClipboard(text, headId) {
		if (!text) return;
		navigator.clipboard.writeText(text);
		set(copiedMobileId, headId, true);
		setTimeout(() => {
			set(copiedMobileId, null);
		}, 2e3);
	}
	function handleExportCSV() {
		if (get(heads).length === 0) return;
		const headers = [
			"Head ID",
			"Full Name",
			"Type",
			"Mobile Phone",
			"Email",
			"Nationality",
			"Assigned Salesman",
			"Wallet Balance (BHD)",
			"Address",
			"Created Date"
		];
		const rows = get(heads).map((h) => [
			h.id,
			`${h.firstName} ${h.lastName || ""}`.trim(),
			h.type ? h.type.toLowerCase() === "agent" ? "Agent" : "Customer" : "Customer",
			h.mobileNo || "",
			h.email || "",
			h.nationality || "",
			h.salesmanName || "Inhouse / Direct",
			(Number(h.wallet) || 0).toFixed(3),
			h.address || "",
			h.createdAt ? new Date(h.createdAt).toLocaleDateString("en-GB") : ""
		]);
		exportToCSV(`client_heads_directory_${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.csv`, headers, rows);
		toast.success("Client heads exported to CSV.");
	}
	function openEditModal(head) {
		if (!get(isMasterAccountant)) {
			toast.error("Only Master Accountants are authorized to edit client details.");
			return;
		}
		set(editingHead, head, true);
		set(editFirstName, head.firstName || "", true);
		set(editLastName, head.lastName || "", true);
		set(editType, (head.type || "customer").toLowerCase() === "agent" ? "agent" : "customer", true);
		set(editMobileNo, head.mobileNo || "", true);
		set(editEmail, head.email || "", true);
		set(editNationality, head.nationality || "Bahraini", true);
		set(editAddress, head.address || "", true);
		set(editError, null);
		set(showEditModal, true);
	}
	function closeEditModal() {
		set(showEditModal, false);
		set(editingHead, null);
		set(editError, null);
	}
	async function handleSaveEdit() {
		if (!get(editingHead)) return;
		if (!get(editFirstName).trim()) {
			set(editError, "First Name is required.");
			return;
		}
		if (!get(editMobileNo).trim()) {
			set(editError, "Mobile Number is required.");
			return;
		}
		if (!get(editEmail).trim()) {
			set(editError, "Email Address is required.");
			return;
		}
		set(savingEdit, true);
		set(editError, null);
		try {
			const payload = {
				firstName: get(editFirstName).trim(),
				lastName: get(editLastName).trim() || null,
				type: get(editType),
				mobileNo: get(editMobileNo).trim(),
				email: get(editEmail).trim(),
				nationality: get(editNationality).trim() || "Bahraini",
				address: get(editAddress).trim() || ""
			};
			await apiFetch(`api/sales-entries/heads/${get(editingHead).id}`, {
				method: "PUT",
				body: JSON.stringify(payload)
			});
			toast.success(`Client head #${get(editingHead).id} updated successfully.`);
			closeEditModal();
			await Promise.all([fetchHeads(), fetchSummary()]);
		} catch (err) {
			set(editError, err?.message || "Failed to update head details. Please check the fields and try again.", true);
			toast.error(get(editError) ?? "Update failed.");
		} finally {
			set(savingEdit, false);
		}
	}
	function closeDeleteModal() {
		set(showDeleteModal, false);
		set(deletingHead, null);
		set(deleteError, null);
		set(isDeleting, false);
	}
	async function handleDeleteHead() {
		if (!get(deletingHead)) return;
		set(isDeleting, true);
		set(deleteError, null);
		try {
			await apiFetch(`api/sales-entries/heads/${get(deletingHead).id}`, { method: "DELETE" });
			toast.success(`Client head #${get(deletingHead).id} (${get(deletingHead).firstName}) and all linked records deleted successfully.`);
			closeDeleteModal();
			await Promise.all([fetchHeads(), fetchSummary()]);
		} catch (err) {
			set(deleteError, err?.message || "Failed to delete client head. Please try again.", true);
			toast.error(get(deleteError) ?? "Deletion failed.");
		} finally {
			set(isDeleting, false);
		}
	}
	onMount(async () => {
		const qSalesman = $page().url.searchParams.get("salesmanId");
		if (qSalesman) set(selectedSalesmanId, qSalesman, true);
		const qType = $page().url.searchParams.get("type");
		if (qType && [
			"all",
			"customer",
			"agent"
		].includes(qType.toLowerCase())) set(selectedType, qType.toLowerCase(), true);
		const qSearch = $page().url.searchParams.get("search");
		if (qSearch) set(search, qSearch, true);
		await Promise.all([
			loadSalesmen(),
			fetchHeads(),
			fetchSummary()
		]);
	});
	var fragment = root_36();
	head("1fmexmy", ($$anchor) => {
		effect(() => {
			$document.title = "Client Heads Directory — Texas Accounts Portal";
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
	Button(child(div_3), {
		variant: "outline",
		class: "h-8.5 rounded-xl cursor-pointer flex items-center gap-1.5 text-xs font-semibold",
		onclick: () => {
			loadSalesmen();
			fetchHeads();
			fetchSummary();
		},
		get disabled() {
			return get(loading);
		},
		children: ($$anchor, $$slotProps) => {
			var fragment_1 = root();
			var node_2 = first_child(fragment_1);
			{
				let $0 = user_derived(() => ["h-3.5 w-3.5", get(loading) ? "animate-spin" : ""].join(" "));
				Refresh_cw(node_2, { get class() {
					return get($0);
				} });
			}
			next(2);
			append($$anchor, fragment_1);
		},
		$$slots: { default: true }
	});
	reset(div_3);
	reset(div_1);
	var div_4 = sibling(div_1, 2);
	var div_5 = child(div_4);
	var div_6 = child(div_5);
	var div_7 = sibling(child(div_6), 2);
	Users(child(div_7), { class: "h-4 w-4" });
	reset(div_7);
	reset(div_6);
	var span = sibling(div_6, 2);
	var text_1 = child(span, true);
	reset(span);
	next(2);
	reset(div_5);
	var div_8 = sibling(div_5, 2);
	var div_9 = child(div_8);
	var div_10 = sibling(child(div_9), 2);
	User(child(div_10), { class: "h-4 w-4" });
	reset(div_10);
	reset(div_9);
	var span_1 = sibling(div_9, 2);
	var text_2 = child(span_1, true);
	reset(span_1);
	var span_2 = sibling(span_1, 2);
	var text_3 = child(span_2);
	reset(span_2);
	reset(div_8);
	var div_11 = sibling(div_8, 2);
	var div_12 = child(div_11);
	var div_13 = sibling(child(div_12), 2);
	Briefcase(child(div_13), { class: "h-4 w-4" });
	reset(div_13);
	reset(div_12);
	var span_3 = sibling(div_12, 2);
	var text_4 = child(span_3, true);
	reset(span_3);
	var span_4 = sibling(span_3, 2);
	var text_5 = child(span_4);
	reset(span_4);
	reset(div_11);
	var div_14 = sibling(div_11, 2);
	var div_15 = child(div_14);
	var div_16 = sibling(child(div_15), 2);
	Wallet(child(div_16), { class: "h-4 w-4" });
	reset(div_16);
	reset(div_15);
	var span_5 = sibling(div_15, 2);
	MoneyDisplay(child(span_5), {
		get amount() {
			return get(totalWalletSum);
		},
		currency: "BHD"
	});
	reset(span_5);
	var span_6 = sibling(span_5, 2);
	var text_6 = child(span_6, true);
	reset(span_6);
	reset(div_14);
	reset(div_4);
	var div_17 = sibling(div_4, 2);
	var div_18 = child(div_17);
	var div_19 = child(div_18);
	var button = child(div_19);
	var node_8 = child(button);
	Users(node_8, { class: "h-3.5 w-3.5" });
	var span_7 = sibling(node_8, 4);
	var text_7 = child(span_7, true);
	reset(span_7);
	reset(button);
	var button_1 = sibling(button, 2);
	var node_9 = child(button_1);
	User(node_9, { class: "h-3.5 w-3.5" });
	var span_8 = sibling(node_9, 4);
	var text_8 = child(span_8, true);
	reset(span_8);
	reset(button_1);
	var button_2 = sibling(button_1, 2);
	var node_10 = child(button_2);
	Briefcase(node_10, { class: "h-3.5 w-3.5" });
	var span_9 = sibling(node_10, 4);
	var text_9 = child(span_9, true);
	reset(span_9);
	reset(button_2);
	reset(div_19);
	var div_20 = sibling(div_19, 2);
	var div_21 = child(div_20);
	SearchableSelect(child(div_21), {
		get options() {
			return get(salesmanOptions);
		},
		get value() {
			return get(selectedSalesmanId);
		},
		onchange: handleSalesmanChange,
		placeholder: "Filter by salesman...",
		searchPlaceholder: "Search salesmen..."
	});
	reset(div_21);
	var node_12 = sibling(div_21, 2);
	{
		let $0 = user_derived(() => get(heads).length === 0);
		Button(node_12, {
			variant: "outline",
			class: "h-8.5 rounded-xl cursor-pointer flex items-center gap-1.5 text-xs font-semibold shrink-0",
			onclick: handleExportCSV,
			get disabled() {
				return get($0);
			},
			children: ($$anchor, $$slotProps) => {
				var fragment_2 = root_1();
				File_spreadsheet(first_child(fragment_2), { class: "h-3.5 w-3.5" });
				next(2);
				append($$anchor, fragment_2);
			},
			$$slots: { default: true }
		});
	}
	reset(div_20);
	reset(div_18);
	var div_22 = sibling(div_18, 2);
	var div_23 = child(div_22);
	var span_10 = child(div_23);
	Search(child(span_10), { class: "h-3.5 w-3.5" });
	reset(span_10);
	var input = sibling(span_10, 2);
	remove_input_defaults(input);
	var node_15 = sibling(input, 2);
	var consequent = ($$anchor) => {
		var button_3 = root_2();
		X(child(button_3), { class: "h-3.5 w-3.5" });
		reset(button_3);
		delegated("click", button_3, () => {
			set(search, "");
			set(currentPage, 1);
			fetchHeads();
		});
		append($$anchor, button_3);
	};
	if_block(node_15, ($$render) => {
		if (get(search)) $$render(consequent);
	});
	reset(div_23);
	var div_24 = sibling(div_23, 2);
	var node_17 = child(div_24);
	var consequent_1 = ($$anchor) => {
		var span_11 = root_3();
		Circle_check(child(span_11), { class: "h-3 w-3" });
		next();
		reset(span_11);
		append($$anchor, span_11);
	};
	var alternate = ($$anchor) => {
		var span_12 = root_4();
		Lock(child(span_12), { class: "h-3 w-3" });
		next();
		reset(span_12);
		append($$anchor, span_12);
	};
	if_block(node_17, ($$render) => {
		if (get(isMasterAccountant)) $$render(consequent_1);
		else $$render(alternate, -1);
	});
	var node_20 = sibling(node_17, 2);
	var consequent_2 = ($$anchor) => {
		Button($$anchor, {
			variant: "ghost",
			size: "sm",
			class: "h-7 px-2 text-[11px] text-muted-foreground hover:text-foreground cursor-pointer flex items-center gap-1",
			onclick: resetAllFilters,
			children: ($$anchor, $$slotProps) => {
				var fragment_4 = root_5();
				X(first_child(fragment_4), { class: "h-3 w-3" });
				next(2);
				append($$anchor, fragment_4);
			},
			$$slots: { default: true }
		});
	};
	if_block(node_20, ($$render) => {
		if (get(selectedSalesmanId) && get(selectedSalesmanId) !== "all" || get(selectedType) !== "all" || get(search)) $$render(consequent_2);
	});
	reset(div_24);
	reset(div_22);
	var node_22 = sibling(div_22, 2);
	var consequent_6 = ($$anchor) => {
		var div_25 = root_9();
		var node_23 = sibling(child(div_25), 2);
		var consequent_3 = ($$anchor) => {
			const currentSalesman = user_derived(() => get(salesmen).find((s) => String(s.id) === String(get(selectedSalesmanId))));
			var span_13 = root_6();
			var node_24 = child(span_13);
			User(node_24, { class: "w-3 h-3" });
			var text_10 = sibling(node_24);
			var button_4 = sibling(text_10);
			X(child(button_4), { class: "w-3 h-3" });
			reset(button_4);
			reset(span_13);
			template_effect(() => set_text(text_10, ` Salesman: ${(get(currentSalesman)?.name || `ID #${get(selectedSalesmanId)}`) ?? ""} `));
			delegated("click", button_4, () => {
				set(selectedSalesmanId, "all");
				set(currentPage, 1);
				fetchHeads();
				fetchSummary();
			});
			append($$anchor, span_13);
		};
		if_block(node_23, ($$render) => {
			if (get(selectedSalesmanId) && get(selectedSalesmanId) !== "all") $$render(consequent_3);
		});
		var node_26 = sibling(node_23, 2);
		var consequent_4 = ($$anchor) => {
			var span_14 = root_7();
			var text_11 = child(span_14);
			var button_5 = sibling(text_11);
			X(child(button_5), { class: "w-3 h-3" });
			reset(button_5);
			reset(span_14);
			template_effect(() => set_text(text_11, `Type: ${get(selectedType) === "customer" ? "Direct Customers" : "Agency Partners"} `));
			delegated("click", button_5, () => {
				set(selectedType, "all");
				set(currentPage, 1);
				fetchHeads();
			});
			append($$anchor, span_14);
		};
		if_block(node_26, ($$render) => {
			if (get(selectedType) !== "all") $$render(consequent_4);
		});
		var node_28 = sibling(node_26, 2);
		var consequent_5 = ($$anchor) => {
			var span_15 = root_8();
			var text_12 = child(span_15);
			var button_6 = sibling(text_12);
			X(child(button_6), { class: "w-3 h-3" });
			reset(button_6);
			reset(span_15);
			template_effect(() => set_text(text_12, `Query: "${get(search) ?? ""}" `));
			delegated("click", button_6, () => {
				set(search, "");
				set(currentPage, 1);
				fetchHeads();
			});
			append($$anchor, span_15);
		};
		if_block(node_28, ($$render) => {
			if (get(search)) $$render(consequent_5);
		});
		reset(div_25);
		append($$anchor, div_25);
	};
	if_block(node_22, ($$render) => {
		if (get(selectedSalesmanId) && get(selectedSalesmanId) !== "all" || get(selectedType) !== "all" || get(search)) $$render(consequent_6);
	});
	reset(div_17);
	var div_26 = sibling(div_17, 2);
	var node_30 = child(div_26);
	var consequent_7 = ($$anchor) => {
		var div_27 = root_10();
		Refresh_cw(child(div_27), { class: "w-8 h-8 animate-spin text-primary" });
		next(2);
		reset(div_27);
		append($$anchor, div_27);
	};
	var consequent_8 = ($$anchor) => {
		var div_28 = root_11();
		var node_32 = child(div_28);
		Shield_alert(node_32, { class: "w-8 h-8" });
		var span_16 = sibling(node_32, 2);
		var text_13 = child(span_16, true);
		reset(span_16);
		Button(sibling(span_16, 2), {
			size: "sm",
			variant: "outline",
			class: "rounded-xl",
			onclick: fetchHeads,
			children: ($$anchor, $$slotProps) => {
				next();
				append($$anchor, text("Try Again"));
			},
			$$slots: { default: true }
		});
		reset(div_28);
		template_effect(() => set_text(text_13, get(error)));
		append($$anchor, div_28);
	};
	var consequent_9 = ($$anchor) => {
		var div_29 = root_12();
		var node_34 = child(div_29);
		Users(node_34, { class: "w-10 h-10 stroke-[1.5]" });
		Button(sibling(node_34, 4), {
			size: "sm",
			variant: "outline",
			class: "rounded-xl",
			onclick: resetAllFilters,
			children: ($$anchor, $$slotProps) => {
				next();
				append($$anchor, text("Reset Filters"));
			},
			$$slots: { default: true }
		});
		reset(div_29);
		append($$anchor, div_29);
	};
	var alternate_6 = ($$anchor) => {
		var fragment_5 = root_27();
		var div_30 = first_child(fragment_5);
		var table = child(div_30);
		var tbody = sibling(child(table));
		each(tbody, 21, () => get(heads), (head) => head.id, ($$anchor, head) => {
			const isAgent = user_derived(() => (get(head).type ?? "").toLowerCase() === "agent");
			var tr = root_24();
			var td = child(tr);
			var text_16 = child(td);
			reset(td);
			var td_1 = sibling(td);
			var div_31 = child(td_1);
			var div_32 = child(div_31);
			var text_17 = child(div_32, true);
			reset(div_32);
			var div_33 = sibling(div_32, 2);
			var div_34 = child(div_33);
			var span_17 = child(div_34);
			var text_18 = child(span_17);
			reset(span_17);
			var node_36 = sibling(span_17, 2);
			var consequent_10 = ($$anchor) => {
				append($$anchor, root_13());
			};
			var alternate_1 = ($$anchor) => {
				append($$anchor, root_14());
			};
			if_block(node_36, ($$render) => {
				if (get(isAgent)) $$render(consequent_10);
				else $$render(alternate_1, -1);
			});
			reset(div_34);
			var node_37 = sibling(div_34, 2);
			var consequent_11 = ($$anchor) => {
				var div_35 = root_15();
				var text_19 = child(div_35, true);
				reset(div_35);
				template_effect(() => set_text(text_19, get(head).nationality));
				append($$anchor, div_35);
			};
			if_block(node_37, ($$render) => {
				if (get(head).nationality) $$render(consequent_11);
			});
			reset(div_33);
			reset(div_31);
			reset(td_1);
			var td_2 = sibling(td_1);
			var node_38 = child(td_2);
			var consequent_13 = ($$anchor) => {
				var div_36 = root_16();
				var node_39 = child(div_36);
				Phone(node_39, { class: "w-3.5 h-3.5 text-muted-foreground shrink-0" });
				var span_20 = sibling(node_39, 2);
				var text_20 = child(span_20, true);
				reset(span_20);
				var button_7 = sibling(span_20, 2);
				var node_40 = child(button_7);
				var consequent_12 = ($$anchor) => {
					Check($$anchor, { class: "w-3 h-3 text-emerald-500" });
				};
				var alternate_2 = ($$anchor) => {
					Copy($$anchor, { class: "w-3 h-3" });
				};
				if_block(node_40, ($$render) => {
					if (get(copiedMobileId) === get(head).id) $$render(consequent_12);
					else $$render(alternate_2, -1);
				});
				reset(button_7);
				reset(div_36);
				template_effect(() => set_text(text_20, get(head).mobileNo));
				delegated("click", button_7, () => copyToClipboard(get(head).mobileNo || "", get(head).id));
				append($$anchor, div_36);
			};
			if_block(node_38, ($$render) => {
				if (get(head).mobileNo) $$render(consequent_13);
			});
			var node_41 = sibling(node_38, 2);
			var consequent_14 = ($$anchor) => {
				var div_37 = root_17();
				var node_42 = child(div_37);
				Mail(node_42, { class: "w-3.5 h-3.5 text-muted-foreground shrink-0" });
				var a = sibling(node_42, 2);
				var text_21 = child(a, true);
				reset(a);
				reset(div_37);
				template_effect(() => {
					set_attribute(a, "href", `mailto:${get(head).email ?? ""}`);
					set_text(text_21, get(head).email);
				});
				append($$anchor, div_37);
			};
			if_block(node_41, ($$render) => {
				if (get(head).email) $$render(consequent_14);
			});
			reset(td_2);
			var td_3 = sibling(td_2);
			var node_43 = child(td_3);
			var consequent_15 = ($$anchor) => {
				var div_38 = root_18();
				var node_44 = child(div_38);
				Map_pin(node_44, { class: "w-3.5 h-3.5 text-muted-foreground shrink-0 mt-0.5" });
				var span_21 = sibling(node_44, 2);
				var text_22 = child(span_21, true);
				reset(span_21);
				reset(div_38);
				template_effect(() => {
					set_attribute(div_38, "title", get(head).address);
					set_text(text_22, get(head).address);
				});
				append($$anchor, div_38);
			};
			var d = user_derived(() => get(head).address && get(head).address.trim() !== "");
			var alternate_3 = ($$anchor) => {
				append($$anchor, root_19());
			};
			if_block(node_43, ($$render) => {
				if (get(d)) $$render(consequent_15);
				else $$render(alternate_3, -1);
			});
			reset(td_3);
			var td_4 = sibling(td_3);
			var node_45 = child(td_4);
			var consequent_16 = ($$anchor) => {
				var button_8 = root_20();
				var node_46 = child(button_8);
				User(node_46, { class: "w-3 h-3 text-muted-foreground" });
				var span_23 = sibling(node_46, 2);
				var text_23 = child(span_23, true);
				reset(span_23);
				reset(button_8);
				template_effect(() => {
					set_attribute(button_8, "title", `Filter heads by ${get(head).salesmanName ?? ""}`);
					set_text(text_23, get(head).salesmanName);
				});
				delegated("click", button_8, () => {
					if (get(head).salesmanId) handleSalesmanChange(String(get(head).salesmanId));
				});
				append($$anchor, button_8);
			};
			var alternate_4 = ($$anchor) => {
				append($$anchor, root_21());
			};
			if_block(node_45, ($$render) => {
				if (get(head).salesmanName) $$render(consequent_16);
				else $$render(alternate_4, -1);
			});
			reset(td_4);
			var td_5 = sibling(td_4);
			var div_39 = child(td_5);
			MoneyDisplay(child(div_39), {
				get amount() {
					return get(head).wallet;
				},
				currency: "BHD"
			});
			reset(div_39);
			reset(td_5);
			var td_6 = sibling(td_5);
			DateDisplay(child(td_6), { get value() {
				return get(head).createdAt;
			} });
			reset(td_6);
			var td_7 = sibling(td_6);
			var div_40 = child(td_7);
			var a_1 = child(div_40);
			External_link(child(a_1), { class: "w-3.5 h-3.5" });
			reset(a_1);
			var node_50 = sibling(a_1, 2);
			var consequent_17 = ($$anchor) => {
				var button_9 = root_22();
				Pencil(child(button_9), { class: "w-3.5 h-3.5" });
				reset(button_9);
				delegated("click", button_9, () => openEditModal(get(head)));
				append($$anchor, button_9);
			};
			var alternate_5 = ($$anchor) => {
				var button_10 = root_23();
				Lock(child(button_10), { class: "w-3.5 h-3.5" });
				reset(button_10);
				append($$anchor, button_10);
			};
			if_block(node_50, ($$render) => {
				if (get(isMasterAccountant)) $$render(consequent_17);
				else $$render(alternate_5, -1);
			});
			var div_41 = sibling(node_50, 2);
			var button_11 = child(div_41);
			Trash_2(child(button_11), { class: "w-3.5 h-3.5" });
			reset(button_11);
			next(2);
			reset(div_41);
			reset(div_40);
			reset(td_7);
			reset(tr);
			template_effect(($0) => {
				set_text(text_16, `#${get(head).id ?? ""}`);
				set_class(div_32, 1, `h-8 w-8 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${get(isAgent) ? "bg-purple-500/10 text-purple-600" : "bg-sky-500/10 text-sky-600"}`);
				set_text(text_17, $0);
				set_text(text_18, `${get(head).firstName ?? ""} ${(get(head).lastName || "") ?? ""}`);
				set_class(div_39, 1, `inline-block px-2.5 py-1 rounded-xl font-mono text-xs font-bold
										${get(head).wallet > 0 ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20" : get(head).wallet < 0 ? "bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20" : "bg-muted text-muted-foreground border border-border/40"}`);
				set_attribute(a_1, "href", `/sales/ledger?headId=${get(head).id ?? ""}`);
			}, [() => get(head).firstName ? get(head).firstName.charAt(0).toUpperCase() : "C"]);
			append($$anchor, tr);
		});
		reset(tbody);
		reset(table);
		reset(div_30);
		var div_42 = sibling(div_30, 2);
		var div_43 = child(div_42);
		var select = sibling(child(div_43), 2);
		var option = child(select);
		option.value = option.__value = 10;
		var option_1 = sibling(option);
		option_1.value = option_1.__value = 25;
		var option_2 = sibling(option_1);
		option_2.value = option_2.__value = 50;
		var option_3 = sibling(option_2);
		option_3.value = option_3.__value = 100;
		reset(select);
		var span_25 = sibling(select, 2);
		var strong = sibling(child(span_25));
		var text_24 = child(strong, true);
		reset(strong);
		var strong_1 = sibling(strong, 2);
		var text_25 = child(strong_1, true);
		reset(strong_1);
		var strong_2 = sibling(strong_1, 2);
		var text_26 = child(strong_2, true);
		reset(strong_2);
		reset(span_25);
		reset(div_43);
		var div_44 = sibling(div_43, 2);
		var node_54 = child(div_44);
		{
			let $0 = user_derived(() => get(currentPage) <= 1 || get(loading));
			Button(node_54, {
				variant: "outline",
				class: "h-8 rounded-xl px-2.5 text-xs flex items-center gap-1 cursor-pointer",
				get disabled() {
					return get($0);
				},
				onclick: () => {
					update(currentPage, -1);
					fetchHeads();
				},
				children: ($$anchor, $$slotProps) => {
					var fragment_8 = root_25();
					Chevron_left(first_child(fragment_8), { class: "h-3.5 w-3.5" });
					next(2);
					append($$anchor, fragment_8);
				},
				$$slots: { default: true }
			});
		}
		var div_45 = sibling(node_54, 2);
		var text_27 = child(div_45);
		reset(div_45);
		var node_56 = sibling(div_45, 2);
		{
			let $0 = user_derived(() => get(currentPage) >= get(totalPages) || get(loading));
			Button(node_56, {
				variant: "outline",
				class: "h-8 rounded-xl px-2.5 text-xs flex items-center gap-1 cursor-pointer",
				get disabled() {
					return get($0);
				},
				onclick: () => {
					update(currentPage);
					fetchHeads();
				},
				children: ($$anchor, $$slotProps) => {
					var fragment_9 = root_26();
					Chevron_right(sibling(first_child(fragment_9), 2), { class: "h-3.5 w-3.5" });
					append($$anchor, fragment_9);
				},
				$$slots: { default: true }
			});
		}
		reset(div_44);
		reset(div_42);
		template_effect(($0) => {
			set_text(text_24, get(heads).length > 0 ? (get(currentPage) - 1) * get(pageSize) + 1 : 0);
			set_text(text_25, $0);
			set_text(text_26, get(totalCount));
			set_text(text_27, `${get(currentPage) ?? ""} / ${get(totalPages) ?? ""}`);
		}, [() => Math.min(get(currentPage) * get(pageSize), get(totalCount))]);
		delegated("change", select, handleFilterChange);
		bind_select_value(select, () => get(pageSize), ($$value) => set(pageSize, $$value));
		append($$anchor, fragment_5);
	};
	if_block(node_30, ($$render) => {
		if (get(loading) && get(heads).length === 0) $$render(consequent_7);
		else if (get(error) && get(heads).length === 0) $$render(consequent_8, 1);
		else if (get(heads).length === 0) $$render(consequent_9, 2);
		else $$render(alternate_6, -1);
	});
	reset(div_26);
	reset(div);
	var node_58 = sibling(div, 2);
	var consequent_20 = ($$anchor) => {
		var div_46 = root_30();
		var div_47 = child(div_46);
		var div_48 = child(div_47);
		var div_49 = child(div_48);
		var div_50 = child(div_49);
		Pencil(child(div_50), { class: "h-4.5 w-4.5" });
		reset(div_50);
		var div_51 = sibling(div_50, 2);
		var h2 = child(div_51);
		var text_28 = child(h2);
		reset(h2);
		next(2);
		reset(div_51);
		reset(div_49);
		var button_12 = sibling(div_49, 2);
		X(child(button_12), { class: "w-4 h-4" });
		reset(button_12);
		reset(div_48);
		var div_52 = sibling(div_48, 2);
		var node_61 = child(div_52);
		var consequent_18 = ($$anchor) => {
			var div_53 = root_28();
			var node_62 = child(div_53);
			Shield_alert(node_62, { class: "w-4 h-4 shrink-0" });
			var span_26 = sibling(node_62, 2);
			var text_29 = child(span_26, true);
			reset(span_26);
			reset(div_53);
			template_effect(() => set_text(text_29, get(editError)));
			append($$anchor, div_53);
		};
		if_block(node_61, ($$render) => {
			if (get(editError)) $$render(consequent_18);
		});
		var div_54 = sibling(node_61, 2);
		var div_55 = child(div_54);
		var input_1 = sibling(child(div_55), 2);
		remove_input_defaults(input_1);
		reset(div_55);
		var div_56 = sibling(div_55, 2);
		var input_2 = sibling(child(div_56), 2);
		remove_input_defaults(input_2);
		reset(div_56);
		reset(div_54);
		var div_57 = sibling(div_54, 2);
		var div_58 = child(div_57);
		var select_1 = sibling(child(div_58), 2);
		var option_4 = child(select_1);
		option_4.value = option_4.__value = "customer";
		var option_5 = sibling(option_4);
		option_5.value = option_5.__value = "agent";
		reset(select_1);
		reset(div_58);
		var div_59 = sibling(div_58, 2);
		var input_3 = sibling(child(div_59), 2);
		remove_input_defaults(input_3);
		reset(div_59);
		reset(div_57);
		var div_60 = sibling(div_57, 2);
		var div_61 = child(div_60);
		var input_4 = sibling(child(div_61), 2);
		remove_input_defaults(input_4);
		reset(div_61);
		var div_62 = sibling(div_61, 2);
		var input_5 = sibling(child(div_62), 2);
		remove_input_defaults(input_5);
		reset(div_62);
		reset(div_60);
		var div_63 = sibling(div_60, 2);
		var textarea = sibling(child(div_63), 2);
		remove_textarea_child(textarea);
		reset(div_63);
		reset(div_52);
		var div_64 = sibling(div_52, 2);
		var node_63 = child(div_64);
		Button(node_63, {
			type: "button",
			variant: "outline",
			size: "sm",
			class: "rounded-xl font-semibold text-xs py-2 px-4 cursor-pointer",
			onclick: closeEditModal,
			get disabled() {
				return get(savingEdit);
			},
			children: ($$anchor, $$slotProps) => {
				next();
				append($$anchor, text("Cancel"));
			},
			$$slots: { default: true }
		});
		Button(sibling(node_63, 2), {
			type: "button",
			size: "sm",
			class: "rounded-xl font-semibold text-xs py-2 px-4 cursor-pointer gap-1.5",
			onclick: handleSaveEdit,
			get disabled() {
				return get(savingEdit);
			},
			children: ($$anchor, $$slotProps) => {
				var fragment_10 = comment();
				var node_65 = first_child(fragment_10);
				var consequent_19 = ($$anchor) => {
					var fragment_11 = root_29();
					Refresh_cw(first_child(fragment_11), { class: "w-3.5 h-3.5 animate-spin" });
					next();
					append($$anchor, fragment_11);
				};
				var alternate_7 = ($$anchor) => {
					append($$anchor, text("Save Changes"));
				};
				if_block(node_65, ($$render) => {
					if (get(savingEdit)) $$render(consequent_19);
					else $$render(alternate_7, -1);
				});
				append($$anchor, fragment_10);
			},
			$$slots: { default: true }
		});
		reset(div_64);
		reset(div_47);
		reset(div_46);
		template_effect(() => set_text(text_28, `Edit Client Head #${get(editingHead).id ?? ""}`));
		delegated("click", button_12, closeEditModal);
		bind_value(input_1, () => get(editFirstName), ($$value) => set(editFirstName, $$value));
		bind_value(input_2, () => get(editLastName), ($$value) => set(editLastName, $$value));
		bind_select_value(select_1, () => get(editType), ($$value) => set(editType, $$value));
		bind_value(input_3, () => get(editNationality), ($$value) => set(editNationality, $$value));
		bind_value(input_4, () => get(editMobileNo), ($$value) => set(editMobileNo, $$value));
		bind_value(input_5, () => get(editEmail), ($$value) => set(editEmail, $$value));
		bind_value(textarea, () => get(editAddress), ($$value) => set(editAddress, $$value));
		append($$anchor, div_46);
	};
	if_block(node_58, ($$render) => {
		if (get(showEditModal) && get(editingHead)) $$render(consequent_20);
	});
	var node_67 = sibling(node_58, 2);
	var consequent_24 = ($$anchor) => {
		var div_65 = root_35();
		var div_66 = child(div_65);
		var div_67 = child(div_66);
		var div_68 = child(div_67);
		var div_69 = child(div_68);
		Triangle_alert(child(div_69), { class: "h-5 w-5" });
		reset(div_69);
		next(2);
		reset(div_68);
		var button_13 = sibling(div_68, 2);
		X(child(button_13), { class: "w-4 h-4" });
		reset(button_13);
		reset(div_67);
		var div_70 = sibling(div_67, 2);
		var div_71 = child(div_70);
		var div_72 = child(div_71);
		Triangle_alert(child(div_72), { class: "w-4 h-4 shrink-0" });
		next();
		reset(div_72);
		next(2);
		reset(div_71);
		var node_71 = sibling(div_71, 2);
		var consequent_21 = ($$anchor) => {
			var div_73 = root_31();
			var text_32 = child(div_73, true);
			reset(div_73);
			template_effect(() => set_text(text_32, get(deleteError)));
			append($$anchor, div_73);
		};
		if_block(node_71, ($$render) => {
			if (get(deleteError)) $$render(consequent_21);
		});
		var div_74 = sibling(node_71, 2);
		var div_75 = child(div_74);
		var span_27 = sibling(child(div_75), 2);
		var text_33 = child(span_27);
		reset(span_27);
		reset(div_75);
		var div_76 = sibling(div_75, 2);
		var span_28 = sibling(child(div_76), 2);
		var text_34 = child(span_28);
		reset(span_28);
		reset(div_76);
		var div_77 = sibling(div_76, 2);
		var span_29 = sibling(child(div_77), 2);
		var text_35 = child(span_29, true);
		reset(span_29);
		reset(div_77);
		var node_72 = sibling(div_77, 2);
		var consequent_22 = ($$anchor) => {
			var div_78 = root_32();
			var span_30 = sibling(child(div_78), 2);
			var text_36 = child(span_30, true);
			reset(span_30);
			reset(div_78);
			template_effect(() => set_text(text_36, get(deletingHead).salesmanName));
			append($$anchor, div_78);
		};
		if_block(node_72, ($$render) => {
			if (get(deletingHead).salesmanName) $$render(consequent_22);
		});
		var div_79 = sibling(node_72, 2);
		var div_80 = sibling(child(div_79), 2);
		MoneyDisplay(child(div_80), {
			get amount() {
				return get(deletingHead).wallet;
			},
			currency: "BHD"
		});
		reset(div_80);
		reset(div_79);
		reset(div_74);
		next(2);
		reset(div_70);
		var div_81 = sibling(div_70, 2);
		var node_74 = child(div_81);
		Button(node_74, {
			type: "button",
			variant: "outline",
			size: "sm",
			class: "rounded-xl font-semibold text-xs py-2 px-4 cursor-pointer",
			onclick: closeDeleteModal,
			get disabled() {
				return get(isDeleting);
			},
			children: ($$anchor, $$slotProps) => {
				next();
				append($$anchor, text("Cancel"));
			},
			$$slots: { default: true }
		});
		Button(sibling(node_74, 2), {
			type: "button",
			variant: "destructive",
			size: "sm",
			class: "rounded-xl font-semibold text-xs py-2 px-4 cursor-pointer gap-1.5",
			onclick: handleDeleteHead,
			get disabled() {
				return get(isDeleting);
			},
			children: ($$anchor, $$slotProps) => {
				var fragment_12 = comment();
				var node_76 = first_child(fragment_12);
				var consequent_23 = ($$anchor) => {
					var fragment_13 = root_33();
					Refresh_cw(first_child(fragment_13), { class: "w-3.5 h-3.5 animate-spin" });
					next();
					append($$anchor, fragment_13);
				};
				var alternate_8 = ($$anchor) => {
					var fragment_14 = root_34();
					Trash_2(first_child(fragment_14), { class: "w-3.5 h-3.5" });
					next();
					append($$anchor, fragment_14);
				};
				if_block(node_76, ($$render) => {
					if (get(isDeleting)) $$render(consequent_23);
					else $$render(alternate_8, -1);
				});
				append($$anchor, fragment_12);
			},
			$$slots: { default: true }
		});
		reset(div_81);
		reset(div_66);
		reset(div_65);
		template_effect(() => {
			set_text(text_33, `#${get(deletingHead).id ?? ""}`);
			set_text(text_34, `${get(deletingHead).firstName ?? ""} ${get(deletingHead).lastName ?? "" ?? ""}`);
			set_class(span_29, 1, `capitalize px-2 py-0.5 rounded-full text-[10px] font-semibold ${get(deletingHead).type === "agent" ? "bg-purple-500/10 text-purple-600" : "bg-sky-500/10 text-sky-600"}`);
			set_text(text_35, get(deletingHead).type);
		});
		delegated("click", button_13, closeDeleteModal);
		append($$anchor, div_65);
	};
	if_block(node_67, ($$render) => {
		if (get(showDeleteModal) && get(deletingHead)) $$render(consequent_24);
	});
	template_effect(($0, $1, $2, $3, $4) => {
		set_text(text_1, $0);
		set_text(text_2, $1);
		set_text(text_3, `${$2 ?? ""}% of client base`);
		set_text(text_4, $3);
		set_text(text_5, `${$4 ?? ""}% partner network`);
		set_class(div_16, 1, `p-2 rounded-xl ${get(totalWalletSum) >= 0 ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" : "bg-rose-500/10 text-rose-600 dark:text-rose-400"}`);
		set_class(span_5, 1, `text-lg font-bold font-mono block ${get(totalWalletSum) >= 0 ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"}`);
		set_text(text_6, get(totalWalletSum) >= 0 ? "Pre-funded client credit" : "Net customer receivable debit");
		set_class(button, 1, `px-2.5 py-1.5 rounded-lg border text-[11px] font-medium transition-colors cursor-pointer shrink-0 whitespace-nowrap flex items-center gap-1.5 ${get(selectedType) === "all" ? "bg-primary text-primary-foreground border-primary shadow-xs" : "border-border bg-background hover:bg-muted text-muted-foreground"}`);
		set_class(span_7, 1, `text-[10px] px-1.5 py-0.2 rounded-full ${get(selectedType) === "all" ? "bg-primary-foreground/20 text-primary-foreground font-bold" : "bg-muted text-muted-foreground"}`);
		set_text(text_7, get(overallTotalCount));
		set_class(button_1, 1, `px-2.5 py-1.5 rounded-lg border text-[11px] font-medium transition-colors cursor-pointer shrink-0 whitespace-nowrap flex items-center gap-1.5 ${get(selectedType) === "customer" ? "bg-primary text-primary-foreground border-primary shadow-xs" : "border-border bg-background hover:bg-muted text-muted-foreground"}`);
		set_class(span_8, 1, `text-[10px] px-1.5 py-0.2 rounded-full ${get(selectedType) === "customer" ? "bg-primary-foreground/20 text-primary-foreground font-bold" : "bg-muted text-muted-foreground"}`);
		set_text(text_8, get(customerCount));
		set_class(button_2, 1, `px-2.5 py-1.5 rounded-lg border text-[11px] font-medium transition-colors cursor-pointer shrink-0 whitespace-nowrap flex items-center gap-1.5 ${get(selectedType) === "agent" ? "bg-primary text-primary-foreground border-primary shadow-xs" : "border-border bg-background hover:bg-muted text-muted-foreground"}`);
		set_class(span_9, 1, `text-[10px] px-1.5 py-0.2 rounded-full ${get(selectedType) === "agent" ? "bg-primary-foreground/20 text-primary-foreground font-bold" : "bg-muted text-muted-foreground"}`);
		set_text(text_9, get(agentCount));
	}, [
		() => get(overallTotalCount).toLocaleString(),
		() => get(customerCount).toLocaleString(),
		() => get(overallTotalCount) > 0 ? (get(customerCount) / get(overallTotalCount) * 100).toFixed(1) : 0,
		() => get(agentCount).toLocaleString(),
		() => get(overallTotalCount) > 0 ? (get(agentCount) / get(overallTotalCount) * 100).toFixed(1) : 0
	]);
	delegated("click", button, () => handleTypeChange("all"));
	delegated("click", button_1, () => handleTypeChange("customer"));
	delegated("click", button_2, () => handleTypeChange("agent"));
	delegated("input", input, handleSearchInput);
	bind_value(input, () => get(search), ($$value) => set(search, $$value));
	append($$anchor, fragment);
	pop();
	$$cleanup();
}
delegate([
	"click",
	"input",
	"change"
]);
//#endregion
export { _page as component };

import { B as append, Bt as reset, Ct as user_derived, D as head, Et as store_get, G as text, H as from_html, I as if_block, K as delegate, M as slot, N as each, Nt as pop, Pt as push, Q as get, R as set_text, Tt as setup_stores, V as comment, _ as set_attribute, a as legacy_rest_props, b as bind_select_value, bt as state, c as spread_props, dt as $document, gt as proxy, ht as sibling, it as effect, m as bind_value, mt as first_child, ot as template_effect, pt as child, q as delegated, r as onMount, ut as remove_textarea_child, vt as set, w as set_class, xt as update, zt as next } from "../chunks/dXkmWTgM.js";
import "../chunks/DhaYE-8x.js";
import { t as apiFetch } from "../chunks/BhkILv0d.js";
import { i as hasRole, r as currentUser } from "../chunks/CayChz6T.js";
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
import "../chunks/sMKb1xN-2.js";
import { t as Button } from "../chunks/BhXsq3bC2.js";
import "../chunks/GxrCv23o2.js";
import { t as MoneyDisplay } from "../chunks/CIVSRuaR2.js";
import { t as DateDisplay } from "../chunks/DEr_pDJT2.js";
import "../chunks/phDdFTf92.js";
import { t as Input } from "../chunks/aUAD-svz.js";
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
var root = from_html(`<!> Refresh`, 1);
var root_1 = from_html(`<!> Clear search`, 1);
var root_2 = from_html(`<span class="inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-600 dark:text-emerald-400"><!> Master Accountant: Full Edit Permissions Enabled</span>`);
var root_3 = from_html(`<span class="inline-flex items-center gap-1.5 text-[11px] font-medium text-muted-foreground"><!> Normal Accountant: Read-Only Access</span>`);
var root_4 = from_html(`<div class="py-20 flex flex-col items-center justify-center gap-3"><!> <span class="text-xs text-muted-foreground">Loading client heads...</span></div>`);
var root_5 = from_html(`<div class="py-20 flex flex-col items-center justify-center gap-3 text-destructive"><!> <span class="text-xs font-medium"> </span> <!></div>`);
var root_6 = from_html(`<div class="py-20 flex flex-col items-center justify-center gap-3 text-muted-foreground"><!> <span class="text-xs">No client heads match your current search or filters.</span> <!></div>`);
var root_7 = from_html(`<span class="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-purple-500/10 text-purple-600 border border-purple-200 dark:border-purple-800">Agent</span>`);
var root_8 = from_html(`<span class="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-blue-500/10 text-blue-600 border border-blue-200 dark:border-blue-800">Customer</span>`);
var root_9 = from_html(`<div class="text-[11px] text-muted-foreground mt-0.5"> </div>`);
var root_10 = from_html(`<div class="flex items-center gap-1.5"><!> <span class="font-mono text-[11px] text-foreground"> </span> <button type="button" title="Copy phone number" class="text-muted-foreground hover:text-foreground p-0.5 rounded"><!></button></div>`);
var root_11 = from_html(`<div class="flex items-center gap-1.5"><!> <a class="text-primary hover:underline text-[11px] truncate max-w-[180px]"> </a></div>`);
var root_12 = from_html(`<div class="flex items-start gap-1 max-w-[200px]"><!> <span class="text-[11px] text-muted-foreground line-clamp-2"> </span></div>`);
var root_13 = from_html(`<span class="text-[11px] text-muted-foreground italic">None</span>`);
var root_14 = from_html(`<span class="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-muted text-foreground border border-border"> </span>`);
var root_15 = from_html(`<span class="text-[11px] text-muted-foreground italic">Inhouse / Direct</span>`);
var root_16 = from_html(`<button type="button" title="Edit client details (Master Accountant)" class="p-1.5 rounded-md hover:bg-primary/10 text-primary transition-colors"><!></button>`);
var root_17 = from_html(`<button type="button" disabled="" title="Only Master Accountants can edit client details" class="p-1.5 rounded-md text-muted-foreground/40 cursor-not-allowed"><!></button>`);
var root_18 = from_html(`<tr class="hover:bg-muted/30 transition-colors group"><td class="py-3 px-4 font-mono text-[11px] text-muted-foreground"> </td><td class="py-3 px-4"><div class="flex items-center gap-2"><div><div class="font-semibold text-foreground text-xs flex items-center gap-2"><span> </span> <!></div> <!></div></div></td><td class="py-3 px-4 space-y-1"><!> <!></td><td class="py-3 px-4"><!></td><td class="py-3 px-4"><!></td><td class="py-3 px-4 text-right"><div><!></div></td><td class="py-3 px-4 text-[11px] text-muted-foreground whitespace-nowrap"><!></td><td class="py-3 px-4 text-center"><div class="flex items-center justify-center gap-1.5"><a title="Explore Client Ledger" class="p-1.5 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"><!></a> <!> <div class="relative group inline-flex" title="Coming Soon"><button type="button" disabled="" class="p-1.5 rounded-md text-muted-foreground/30 hover:text-muted-foreground/40 cursor-not-allowed transition-colors" aria-label="Delete head (Coming Soon)"><!></button> <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 hidden group-hover:flex items-center justify-center px-2 py-0.5 text-[10px] font-medium text-white bg-foreground/90 rounded shadow-md whitespace-nowrap z-50 pointer-events-none">Coming Soon</div></div></div></td></tr>`);
var root_19 = from_html(`<div class="overflow-x-auto"><table class="w-full text-left text-xs border-collapse"><thead><tr class="border-b border-border bg-muted/40 text-muted-foreground font-medium"><th class="py-3 px-4 w-16">ID</th><th class="py-3 px-4">Client / Party</th><th class="py-3 px-4">Contact Information</th><th class="py-3 px-4">Address</th><th class="py-3 px-4">Assigned Salesman</th><th class="py-3 px-4 text-right">Wallet Balance</th><th class="py-3 px-4">Created Date</th><th class="py-3 px-4 text-center w-28">Actions</th></tr></thead><tbody class="divide-y divide-border"></tbody></table></div> <div class="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 border-t border-border bg-muted/20"><div class="flex items-center gap-2 text-xs text-muted-foreground"><span>Rows per page:</span> <select class="h-8 px-2 text-xs bg-background border border-input rounded-md text-foreground"><option>10</option><option>25</option><option>50</option><option>100</option></select> <span class="ml-2">Page <span class="font-medium text-foreground"> </span> <span class="font-medium text-foreground"> </span></span></div> <div class="flex items-center gap-1"><!> <!></div></div>`, 1);
var root_20 = from_html(`<div class="p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive flex items-center gap-2"><!> <span> </span></div>`);
var root_21 = from_html(`<!> Saving...`, 1);
var root_22 = from_html(`<div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-in fade-in duration-200"><div class="bg-card border border-border rounded-xl shadow-xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh]"><div class="flex items-center justify-between p-4 border-b border-border bg-muted/30"><div class="flex items-center gap-2.5"><div class="p-2 rounded-lg bg-primary/10 text-primary"><!></div> <div><h2 class="text-sm font-bold text-foreground"> </h2> <p class="text-[11px] text-muted-foreground">Modify party contact info, category, and address.</p></div></div> <button type="button" class="p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted"><!></button></div> <div class="p-5 space-y-4 overflow-y-auto text-xs"><!> <div class="grid grid-cols-2 gap-3"><div><label for="edit-fn" class="block font-medium text-foreground mb-1">First Name *</label> <!></div> <div><label for="edit-ln" class="block font-medium text-foreground mb-1">Last Name</label> <!></div></div> <div class="grid grid-cols-2 gap-3"><div><label for="edit-type" class="block font-medium text-foreground mb-1">Party Type</label> <select id="edit-type" class="w-full h-9 px-3 text-xs bg-background border border-input rounded-md text-foreground focus:outline-none focus:ring-1 focus:ring-ring"><option>Customer</option><option>Agent</option></select></div> <div><label for="edit-nat" class="block font-medium text-foreground mb-1">Nationality</label> <!></div></div> <div class="grid grid-cols-2 gap-3"><div><label for="edit-mobile" class="block font-medium text-foreground mb-1">Mobile / Phone *</label> <!></div> <div><label for="edit-email" class="block font-medium text-foreground mb-1">Email Address *</label> <!></div></div> <div><label for="edit-addr" class="block font-medium text-foreground mb-1">Address *</label> <textarea id="edit-addr" rows="3" placeholder="Full client address..." class="w-full p-2.5 text-xs bg-background border border-input rounded-md text-foreground focus:outline-none focus:ring-1 focus:ring-ring resize-none"></textarea></div></div> <div class="flex items-center justify-end gap-2 p-4 border-t border-border bg-muted/20"><!> <!></div></div></div>`);
var root_23 = from_html(`<div class="p-3 rounded-md bg-destructive/10 text-destructive text-xs border border-destructive/20"> </div>`);
var root_24 = from_html(`<div class="flex items-center justify-between"><span class="text-muted-foreground">Assigned Salesman:</span> <span class="font-medium text-foreground"> </span></div>`);
var root_25 = from_html(`<!> Deleting All Records...`, 1);
var root_26 = from_html(`<!> Permanently Delete Head`, 1);
var root_27 = from_html(`<div class="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4"><div class="bg-card border border-destructive/30 rounded-xl shadow-xl w-full max-w-lg overflow-hidden animate-in fade-in-0 zoom-in-95"><div class="flex items-center justify-between p-4 border-b border-border bg-destructive/10"><div class="flex items-center gap-2 text-destructive"><!> <h3 class="font-semibold text-sm">Delete Client Head & Linked Records</h3></div> <button type="button" class="p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted"><!></button></div> <div class="p-5 space-y-4 text-xs"><div class="p-3.5 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-xs leading-relaxed space-y-1"><div class="font-semibold flex items-center gap-1.5"><!> Warning: This action is permanent and cannot be undone!</div> <p class="text-[11px] text-destructive/90">Deleting this client head will permanently cascade and remove all associated bookings (visas, flights, hotels, holidays, VFS, transport, other services), passenger/applicant records, profit calculations, receipts, payment allocations, credit receivables, and ledger transactions across both portals.</p></div> <!> <div class="p-3.5 rounded-lg bg-muted/40 border border-border space-y-2"><div class="flex items-center justify-between"><span class="text-muted-foreground">Client ID:</span> <span class="font-mono font-semibold text-foreground"> </span></div> <div class="flex items-center justify-between"><span class="text-muted-foreground">Name:</span> <span class="font-medium text-foreground"> </span></div> <div class="flex items-center justify-between"><span class="text-muted-foreground">Type:</span> <span> </span></div> <!> <div class="flex items-center justify-between border-t border-border/50 pt-2"><span class="text-muted-foreground">Current Wallet Balance:</span> <div class="font-mono font-bold"><!></div></div></div> <p class="text-muted-foreground text-[11px]">Please confirm that you intend to permanently delete this head and all corresponding operational records.</p></div> <div class="flex items-center justify-end gap-2 p-4 border-t border-border bg-muted/20"><!> <!></div></div></div>`);
var root_28 = from_html(`<div class="space-y-6"><div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-border pb-5"><div><div class="flex items-center gap-3"><div class="p-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20"><!></div> <div><h1 class="text-2xl font-bold tracking-tight text-foreground">All heads</h1> <p class="text-xs text-muted-foreground mt-0.5">Directory of all customer and agent heads, contact details, assigned salesmen, and live wallet balances.</p></div></div></div> <div class="flex items-center gap-2.5"><!></div></div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"><div class="bg-card border border-border rounded-xl p-4 shadow-sm relative overflow-hidden"><div class="flex items-center justify-between"><span class="text-xs font-medium text-muted-foreground">Total Client Heads</span> <div class="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center"><!></div></div> <div class="mt-2 flex items-baseline gap-2"><span class="text-2xl font-bold tracking-tight text-foreground"> </span> <span class="text-[11px] text-muted-foreground">registered parties</span></div></div> <div class="bg-card border border-border rounded-xl p-4 shadow-sm relative overflow-hidden"><div class="flex items-center justify-between"><span class="text-xs font-medium text-muted-foreground">Customers (Direct)</span> <div class="w-8 h-8 rounded-lg bg-sky-500/10 text-sky-500 flex items-center justify-center"><!></div></div> <div class="mt-2 flex items-baseline gap-2"><span class="text-2xl font-bold tracking-tight text-foreground"> </span> <span class="text-[11px] text-muted-foreground">direct customers</span></div></div> <div class="bg-card border border-border rounded-xl p-4 shadow-sm relative overflow-hidden"><div class="flex items-center justify-between"><span class="text-xs font-medium text-muted-foreground">Agents / Partners</span> <div class="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-500 flex items-center justify-center"><!></div></div> <div class="mt-2 flex items-baseline gap-2"><span class="text-2xl font-bold tracking-tight text-foreground"> </span> <span class="text-[11px] text-muted-foreground">agency partners</span></div></div> <div class="bg-card border border-border rounded-xl p-4 shadow-sm relative overflow-hidden"><div class="flex items-center justify-between"><span class="text-xs font-medium text-muted-foreground">Total Live Net Wallet</span> <div class="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center"><!></div></div> <div class="mt-2 flex items-baseline gap-2"><div class="text-xl font-bold"><!></div></div></div></div> <div class="bg-card border border-border rounded-xl p-4 shadow-sm space-y-3"><div><div class="relative"><!> <!></div></div> <div class="flex items-center justify-between text-xs text-muted-foreground pt-1 border-t border-border/50"><div class="flex items-center gap-2"><span>Showing <span class="font-semibold text-foreground"> </span> <span class="font-semibold text-foreground"> </span> heads</span> <!></div> <!></div></div> <div class="bg-card border border-border rounded-xl shadow-sm overflow-hidden"><!></div></div> <!> <!>`, 1);
function _page($$anchor, $$props) {
	push($$props, true);
	const $currentUser = () => store_get(currentUser, "$currentUser", $$stores);
	const [$$stores, $$cleanup] = setup_stores();
	let heads = state(proxy([]));
	state(proxy([]));
	let loading = state(false);
	let error = state(null);
	let summaryStats = state(proxy({
		totalCount: 0,
		customerCount: 0,
		agentCount: 0,
		totalWallet: 0
	}));
	let search = state("");
	let currentPage = state(1);
	let pageSize = state(25);
	let totalCount = state(0);
	let totalPages = state(1);
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
	async function fetchHeads() {
		set(loading, true);
		set(error, null);
		try {
			const params = new URLSearchParams({
				page: get(currentPage).toString(),
				pageSize: get(pageSize).toString()
			});
			if (get(search).trim()) params.append("search", get(search).trim());
			const res = await apiFetch(`api/sales-entries/heads?${params.toString()}`);
			if (res) {
				set(heads, res.items || [], true);
				set(totalCount, res.totalCount || 0, true);
				set(totalPages, res.totalPages || Math.ceil((res.totalCount || 0) / get(pageSize)) || 1, true);
				if (get(summaryStats).totalCount === 0 && get(totalCount) > 0) get(summaryStats).totalCount = get(totalCount);
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
			const res = await apiFetch("api/sales-entries/heads/summary");
			if (res && (res.totalCount > 0 || res.customerCount > 0 || res.agentCount > 0 || res.totalWallet !== 0)) {
				set(summaryStats, res, true);
				return;
			}
		} catch (err) {
			console.warn("Failed to load heads summary stats from endpoint, falling back to calculation:", err);
		}
		try {
			const allHeadsRes = await apiFetch("api/sales-entries/heads?page=1&pageSize=5000");
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
			}
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
	function copyToClipboard(text, headId) {
		if (!text) return;
		navigator.clipboard.writeText(text);
		set(copiedMobileId, headId, true);
		setTimeout(() => {
			set(copiedMobileId, null);
		}, 2e3);
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
		await Promise.all([fetchHeads(), fetchSummary()]);
	});
	var fragment = root_28();
	head("1fmexmy", ($$anchor) => {
		effect(() => {
			$document.title = "All heads | Texas Accounts Portal";
		});
	});
	var div = first_child(fragment);
	var div_1 = child(div);
	var div_2 = child(div_1);
	var div_3 = child(div_2);
	var div_4 = child(div_3);
	Users(child(div_4), { class: "w-6 h-6" });
	reset(div_4);
	next(2);
	reset(div_3);
	reset(div_2);
	var div_5 = sibling(div_2, 2);
	Button(child(div_5), {
		variant: "outline",
		size: "sm",
		class: "gap-2 h-9 text-xs",
		onclick: () => {
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
				let $0 = user_derived(() => get(loading) ? "animate-spin" : "");
				Refresh_cw(node_2, { get class() {
					return `w-3.5 h-3.5 ${get($0) ?? ""}`;
				} });
			}
			next();
			append($$anchor, fragment_1);
		},
		$$slots: { default: true }
	});
	reset(div_5);
	reset(div_1);
	var div_6 = sibling(div_1, 2);
	var div_7 = child(div_6);
	var div_8 = child(div_7);
	var div_9 = sibling(child(div_8), 2);
	Users(child(div_9), { class: "w-4 h-4" });
	reset(div_9);
	reset(div_8);
	var div_10 = sibling(div_8, 2);
	var span = child(div_10);
	var text_1 = child(span, true);
	reset(span);
	next(2);
	reset(div_10);
	reset(div_7);
	var div_11 = sibling(div_7, 2);
	var div_12 = child(div_11);
	var div_13 = sibling(child(div_12), 2);
	User(child(div_13), { class: "w-4 h-4" });
	reset(div_13);
	reset(div_12);
	var div_14 = sibling(div_12, 2);
	var span_1 = child(div_14);
	var text_2 = child(span_1, true);
	reset(span_1);
	next(2);
	reset(div_14);
	reset(div_11);
	var div_15 = sibling(div_11, 2);
	var div_16 = child(div_15);
	var div_17 = sibling(child(div_16), 2);
	Briefcase(child(div_17), { class: "w-4 h-4" });
	reset(div_17);
	reset(div_16);
	var div_18 = sibling(div_16, 2);
	var span_2 = child(div_18);
	var text_3 = child(span_2, true);
	reset(span_2);
	next(2);
	reset(div_18);
	reset(div_15);
	var div_19 = sibling(div_15, 2);
	var div_20 = child(div_19);
	var div_21 = sibling(child(div_20), 2);
	Wallet(child(div_21), { class: "w-4 h-4" });
	reset(div_21);
	reset(div_20);
	var div_22 = sibling(div_20, 2);
	var div_23 = child(div_22);
	MoneyDisplay(child(div_23), {
		get amount() {
			return get(totalWalletSum);
		},
		currency: "BHD"
	});
	reset(div_23);
	reset(div_22);
	reset(div_19);
	reset(div_6);
	var div_24 = sibling(div_6, 2);
	var div_25 = child(div_24);
	var div_26 = child(div_25);
	var node_8 = child(div_26);
	Search(node_8, { class: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" });
	Input(sibling(node_8, 2), {
		type: "text",
		placeholder: "Search by client name, mobile phone, or email...",
		oninput: handleSearchInput,
		class: "pl-9 h-10 text-xs bg-background w-full",
		get value() {
			return get(search);
		},
		set value($$value) {
			set(search, $$value, true);
		}
	});
	reset(div_26);
	reset(div_25);
	var div_27 = sibling(div_25, 2);
	var div_28 = child(div_27);
	var span_3 = child(div_28);
	var span_4 = sibling(child(span_3));
	var text_4 = child(span_4, true);
	reset(span_4);
	var text_5 = sibling(span_4);
	text_5.nodeValue = " of  ";
	var span_5 = sibling(text_5);
	var text_6 = child(span_5, true);
	reset(span_5);
	next();
	reset(span_3);
	var node_10 = sibling(span_3, 2);
	var consequent = ($$anchor) => {
		Button($$anchor, {
			variant: "ghost",
			size: "sm",
			class: "h-6 px-2 text-[11px] text-muted-foreground hover:text-foreground gap-1",
			onclick: () => {
				set(search, "");
				set(currentPage, 1);
				fetchHeads();
			},
			children: ($$anchor, $$slotProps) => {
				var fragment_3 = root_1();
				X(first_child(fragment_3), { class: "w-3 h-3" });
				next();
				append($$anchor, fragment_3);
			},
			$$slots: { default: true }
		});
	};
	if_block(node_10, ($$render) => {
		if (get(search)) $$render(consequent);
	});
	reset(div_28);
	var node_12 = sibling(div_28, 2);
	var consequent_1 = ($$anchor) => {
		var span_6 = root_2();
		Circle_check(child(span_6), { class: "w-3.5 h-3.5" });
		next();
		reset(span_6);
		append($$anchor, span_6);
	};
	var alternate = ($$anchor) => {
		var span_7 = root_3();
		Lock(child(span_7), { class: "w-3.5 h-3.5" });
		next();
		reset(span_7);
		append($$anchor, span_7);
	};
	if_block(node_12, ($$render) => {
		if (get(isMasterAccountant)) $$render(consequent_1);
		else $$render(alternate, -1);
	});
	reset(div_27);
	reset(div_24);
	var div_29 = sibling(div_24, 2);
	var node_15 = child(div_29);
	var consequent_2 = ($$anchor) => {
		var div_30 = root_4();
		Refresh_cw(child(div_30), { class: "w-8 h-8 animate-spin text-primary" });
		next(2);
		reset(div_30);
		append($$anchor, div_30);
	};
	var consequent_3 = ($$anchor) => {
		var div_31 = root_5();
		var node_17 = child(div_31);
		Shield_alert(node_17, { class: "w-8 h-8" });
		var span_8 = sibling(node_17, 2);
		var text_7 = child(span_8, true);
		reset(span_8);
		Button(sibling(span_8, 2), {
			size: "sm",
			variant: "outline",
			onclick: fetchHeads,
			children: ($$anchor, $$slotProps) => {
				next();
				append($$anchor, text("Try Again"));
			},
			$$slots: { default: true }
		});
		reset(div_31);
		template_effect(() => set_text(text_7, get(error)));
		append($$anchor, div_31);
	};
	var consequent_4 = ($$anchor) => {
		var div_32 = root_6();
		var node_19 = child(div_32);
		Users(node_19, { class: "w-10 h-10 stroke-[1.5]" });
		Button(sibling(node_19, 4), {
			size: "sm",
			variant: "outline",
			onclick: () => {
				set(search, "");
				set(currentPage, 1);
				fetchHeads();
			},
			children: ($$anchor, $$slotProps) => {
				next();
				append($$anchor, text("Clear Search"));
			},
			$$slots: { default: true }
		});
		reset(div_32);
		append($$anchor, div_32);
	};
	var alternate_6 = ($$anchor) => {
		var fragment_4 = root_19();
		var div_33 = first_child(fragment_4);
		var table = child(div_33);
		var tbody = sibling(child(table));
		each(tbody, 21, () => get(heads), (head) => head.id, ($$anchor, head) => {
			const isAgent = user_derived(() => (get(head).type ?? "").toLowerCase() === "agent");
			var tr = root_18();
			var td = child(tr);
			var text_10 = child(td);
			reset(td);
			var td_1 = sibling(td);
			var div_34 = child(td_1);
			var div_35 = child(div_34);
			var div_36 = child(div_35);
			var span_9 = child(div_36);
			var text_11 = child(span_9);
			reset(span_9);
			var node_21 = sibling(span_9, 2);
			var consequent_5 = ($$anchor) => {
				append($$anchor, root_7());
			};
			var alternate_1 = ($$anchor) => {
				append($$anchor, root_8());
			};
			if_block(node_21, ($$render) => {
				if (get(isAgent)) $$render(consequent_5);
				else $$render(alternate_1, -1);
			});
			reset(div_36);
			var node_22 = sibling(div_36, 2);
			var consequent_6 = ($$anchor) => {
				var div_37 = root_9();
				var text_12 = child(div_37, true);
				reset(div_37);
				template_effect(() => set_text(text_12, get(head).nationality));
				append($$anchor, div_37);
			};
			if_block(node_22, ($$render) => {
				if (get(head).nationality) $$render(consequent_6);
			});
			reset(div_35);
			reset(div_34);
			reset(td_1);
			var td_2 = sibling(td_1);
			var node_23 = child(td_2);
			var consequent_8 = ($$anchor) => {
				var div_38 = root_10();
				var node_24 = child(div_38);
				Phone(node_24, { class: "w-3.5 h-3.5 text-muted-foreground shrink-0" });
				var span_12 = sibling(node_24, 2);
				var text_13 = child(span_12, true);
				reset(span_12);
				var button = sibling(span_12, 2);
				var node_25 = child(button);
				var consequent_7 = ($$anchor) => {
					Check($$anchor, { class: "w-3 h-3 text-emerald-500" });
				};
				var alternate_2 = ($$anchor) => {
					Copy($$anchor, { class: "w-3 h-3" });
				};
				if_block(node_25, ($$render) => {
					if (get(copiedMobileId) === get(head).id) $$render(consequent_7);
					else $$render(alternate_2, -1);
				});
				reset(button);
				reset(div_38);
				template_effect(() => set_text(text_13, get(head).mobileNo));
				delegated("click", button, () => copyToClipboard(get(head).mobileNo || "", get(head).id));
				append($$anchor, div_38);
			};
			if_block(node_23, ($$render) => {
				if (get(head).mobileNo) $$render(consequent_8);
			});
			var node_26 = sibling(node_23, 2);
			var consequent_9 = ($$anchor) => {
				var div_39 = root_11();
				var node_27 = child(div_39);
				Mail(node_27, { class: "w-3.5 h-3.5 text-muted-foreground shrink-0" });
				var a = sibling(node_27, 2);
				var text_14 = child(a, true);
				reset(a);
				reset(div_39);
				template_effect(() => {
					set_attribute(a, "href", `mailto:${get(head).email ?? ""}`);
					set_text(text_14, get(head).email);
				});
				append($$anchor, div_39);
			};
			if_block(node_26, ($$render) => {
				if (get(head).email) $$render(consequent_9);
			});
			reset(td_2);
			var td_3 = sibling(td_2);
			var node_28 = child(td_3);
			var consequent_10 = ($$anchor) => {
				var div_40 = root_12();
				var node_29 = child(div_40);
				Map_pin(node_29, { class: "w-3.5 h-3.5 text-muted-foreground shrink-0 mt-0.5" });
				var span_13 = sibling(node_29, 2);
				var text_15 = child(span_13, true);
				reset(span_13);
				reset(div_40);
				template_effect(() => {
					set_attribute(div_40, "title", get(head).address);
					set_text(text_15, get(head).address);
				});
				append($$anchor, div_40);
			};
			var d = user_derived(() => get(head).address && get(head).address.trim() !== "");
			var alternate_3 = ($$anchor) => {
				append($$anchor, root_13());
			};
			if_block(node_28, ($$render) => {
				if (get(d)) $$render(consequent_10);
				else $$render(alternate_3, -1);
			});
			reset(td_3);
			var td_4 = sibling(td_3);
			var node_30 = child(td_4);
			var consequent_11 = ($$anchor) => {
				var span_15 = root_14();
				var text_16 = child(span_15, true);
				reset(span_15);
				template_effect(() => set_text(text_16, get(head).salesmanName));
				append($$anchor, span_15);
			};
			var alternate_4 = ($$anchor) => {
				append($$anchor, root_15());
			};
			if_block(node_30, ($$render) => {
				if (get(head).salesmanName) $$render(consequent_11);
				else $$render(alternate_4, -1);
			});
			reset(td_4);
			var td_5 = sibling(td_4);
			var div_41 = child(td_5);
			MoneyDisplay(child(div_41), {
				get amount() {
					return get(head).wallet;
				},
				currency: "BHD"
			});
			reset(div_41);
			reset(td_5);
			var td_6 = sibling(td_5);
			DateDisplay(child(td_6), { get date() {
				return get(head).createdAt;
			} });
			reset(td_6);
			var td_7 = sibling(td_6);
			var div_42 = child(td_7);
			var a_1 = child(div_42);
			External_link(child(a_1), { class: "w-4 h-4" });
			reset(a_1);
			var node_34 = sibling(a_1, 2);
			var consequent_12 = ($$anchor) => {
				var button_1 = root_16();
				Pencil(child(button_1), { class: "w-4 h-4" });
				reset(button_1);
				delegated("click", button_1, () => openEditModal(get(head)));
				append($$anchor, button_1);
			};
			var alternate_5 = ($$anchor) => {
				var button_2 = root_17();
				Lock(child(button_2), { class: "w-4 h-4" });
				reset(button_2);
				append($$anchor, button_2);
			};
			if_block(node_34, ($$render) => {
				if (get(isMasterAccountant)) $$render(consequent_12);
				else $$render(alternate_5, -1);
			});
			var div_43 = sibling(node_34, 2);
			var button_3 = child(div_43);
			Trash_2(child(button_3), { class: "w-4 h-4" });
			reset(button_3);
			next(2);
			reset(div_43);
			reset(div_42);
			reset(td_7);
			reset(tr);
			template_effect(() => {
				set_text(text_10, `#${get(head).id ?? ""}`);
				set_text(text_11, `${get(head).firstName ?? ""} ${(get(head).lastName || "") ?? ""}`);
				set_class(div_41, 1, `inline-block px-2.5 py-1 rounded-md font-mono text-xs font-semibold
										${get(head).wallet > 0 ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20" : get(head).wallet < 0 ? "bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20" : "bg-muted text-muted-foreground"}`);
				set_attribute(a_1, "href", `/sales/ledger?headId=${get(head).id ?? ""}`);
			});
			append($$anchor, tr);
		});
		reset(tbody);
		reset(table);
		reset(div_33);
		var div_44 = sibling(div_33, 2);
		var div_45 = child(div_44);
		var select = sibling(child(div_45), 2);
		var option = child(select);
		option.value = option.__value = 10;
		var option_1 = sibling(option);
		option_1.value = option_1.__value = 25;
		var option_2 = sibling(option_1);
		option_2.value = option_2.__value = 50;
		var option_3 = sibling(option_2);
		option_3.value = option_3.__value = 100;
		reset(select);
		var span_17 = sibling(select, 2);
		var span_18 = sibling(child(span_17));
		var text_17 = child(span_18, true);
		reset(span_18);
		var text_18 = sibling(span_18);
		text_18.nodeValue = " of  ";
		var span_19 = sibling(text_18);
		var text_19 = child(span_19, true);
		reset(span_19);
		reset(span_17);
		reset(div_45);
		var div_46 = sibling(div_45, 2);
		var node_38 = child(div_46);
		{
			let $0 = user_derived(() => get(currentPage) <= 1 || get(loading));
			Button(node_38, {
				variant: "outline",
				size: "sm",
				class: "h-8 w-8 p-0",
				get disabled() {
					return get($0);
				},
				onclick: () => {
					update(currentPage, -1);
					fetchHeads();
				},
				children: ($$anchor, $$slotProps) => {
					Chevron_left($$anchor, { class: "w-4 h-4" });
				},
				$$slots: { default: true }
			});
		}
		var node_39 = sibling(node_38, 2);
		{
			let $0 = user_derived(() => get(currentPage) >= get(totalPages) || get(loading));
			Button(node_39, {
				variant: "outline",
				size: "sm",
				class: "h-8 w-8 p-0",
				get disabled() {
					return get($0);
				},
				onclick: () => {
					update(currentPage);
					fetchHeads();
				},
				children: ($$anchor, $$slotProps) => {
					Chevron_right($$anchor, { class: "w-4 h-4" });
				},
				$$slots: { default: true }
			});
		}
		reset(div_46);
		reset(div_44);
		template_effect(() => {
			set_text(text_17, get(currentPage));
			set_text(text_19, get(totalPages));
		});
		delegated("change", select, handleFilterChange);
		bind_select_value(select, () => get(pageSize), ($$value) => set(pageSize, $$value));
		append($$anchor, fragment_4);
	};
	if_block(node_15, ($$render) => {
		if (get(loading) && get(heads).length === 0) $$render(consequent_2);
		else if (get(error) && get(heads).length === 0) $$render(consequent_3, 1);
		else if (get(heads).length === 0) $$render(consequent_4, 2);
		else $$render(alternate_6, -1);
	});
	reset(div_29);
	reset(div);
	var node_40 = sibling(div, 2);
	var consequent_15 = ($$anchor) => {
		var div_47 = root_22();
		var div_48 = child(div_47);
		var div_49 = child(div_48);
		var div_50 = child(div_49);
		var div_51 = child(div_50);
		Pencil(child(div_51), { class: "w-4 h-4" });
		reset(div_51);
		var div_52 = sibling(div_51, 2);
		var h2 = child(div_52);
		var text_20 = child(h2);
		reset(h2);
		next(2);
		reset(div_52);
		reset(div_50);
		var button_4 = sibling(div_50, 2);
		X(child(button_4), { class: "w-4 h-4" });
		reset(button_4);
		reset(div_49);
		var div_53 = sibling(div_49, 2);
		var node_43 = child(div_53);
		var consequent_13 = ($$anchor) => {
			var div_54 = root_20();
			var node_44 = child(div_54);
			Shield_alert(node_44, { class: "w-4 h-4 shrink-0" });
			var span_20 = sibling(node_44, 2);
			var text_21 = child(span_20, true);
			reset(span_20);
			reset(div_54);
			template_effect(() => set_text(text_21, get(editError)));
			append($$anchor, div_54);
		};
		if_block(node_43, ($$render) => {
			if (get(editError)) $$render(consequent_13);
		});
		var div_55 = sibling(node_43, 2);
		var div_56 = child(div_55);
		Input(sibling(child(div_56), 2), {
			id: "edit-fn",
			type: "text",
			placeholder: "First Name",
			class: "h-9 text-xs",
			required: true,
			get value() {
				return get(editFirstName);
			},
			set value($$value) {
				set(editFirstName, $$value, true);
			}
		});
		reset(div_56);
		var div_57 = sibling(div_56, 2);
		Input(sibling(child(div_57), 2), {
			id: "edit-ln",
			type: "text",
			placeholder: "Last Name",
			class: "h-9 text-xs",
			get value() {
				return get(editLastName);
			},
			set value($$value) {
				set(editLastName, $$value, true);
			}
		});
		reset(div_57);
		reset(div_55);
		var div_58 = sibling(div_55, 2);
		var div_59 = child(div_58);
		var select_1 = sibling(child(div_59), 2);
		var option_4 = child(select_1);
		option_4.value = option_4.__value = "customer";
		var option_5 = sibling(option_4);
		option_5.value = option_5.__value = "agent";
		reset(select_1);
		reset(div_59);
		var div_60 = sibling(div_59, 2);
		Input(sibling(child(div_60), 2), {
			id: "edit-nat",
			type: "text",
			placeholder: "e.g. Bahraini, Indian",
			class: "h-9 text-xs",
			get value() {
				return get(editNationality);
			},
			set value($$value) {
				set(editNationality, $$value, true);
			}
		});
		reset(div_60);
		reset(div_58);
		var div_61 = sibling(div_58, 2);
		var div_62 = child(div_61);
		Input(sibling(child(div_62), 2), {
			id: "edit-mobile",
			type: "text",
			placeholder: "e.g. 97333000000",
			class: "h-9 text-xs",
			required: true,
			get value() {
				return get(editMobileNo);
			},
			set value($$value) {
				set(editMobileNo, $$value, true);
			}
		});
		reset(div_62);
		var div_63 = sibling(div_62, 2);
		Input(sibling(child(div_63), 2), {
			id: "edit-email",
			type: "email",
			placeholder: "client@example.com",
			class: "h-9 text-xs",
			required: true,
			get value() {
				return get(editEmail);
			},
			set value($$value) {
				set(editEmail, $$value, true);
			}
		});
		reset(div_63);
		reset(div_61);
		var div_64 = sibling(div_61, 2);
		var textarea = sibling(child(div_64), 2);
		remove_textarea_child(textarea);
		reset(div_64);
		reset(div_53);
		var div_65 = sibling(div_53, 2);
		var node_50 = child(div_65);
		Button(node_50, {
			type: "button",
			variant: "outline",
			size: "sm",
			class: "h-8 text-xs",
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
		Button(sibling(node_50, 2), {
			type: "button",
			size: "sm",
			class: "h-8 text-xs gap-1.5",
			onclick: handleSaveEdit,
			get disabled() {
				return get(savingEdit);
			},
			children: ($$anchor, $$slotProps) => {
				var fragment_9 = comment();
				var node_52 = first_child(fragment_9);
				var consequent_14 = ($$anchor) => {
					var fragment_10 = root_21();
					Refresh_cw(first_child(fragment_10), { class: "w-3.5 h-3.5 animate-spin" });
					next();
					append($$anchor, fragment_10);
				};
				var alternate_7 = ($$anchor) => {
					append($$anchor, text("Save Changes"));
				};
				if_block(node_52, ($$render) => {
					if (get(savingEdit)) $$render(consequent_14);
					else $$render(alternate_7, -1);
				});
				append($$anchor, fragment_9);
			},
			$$slots: { default: true }
		});
		reset(div_65);
		reset(div_48);
		reset(div_47);
		template_effect(() => set_text(text_20, `Edit Client Head #${get(editingHead).id ?? ""}`));
		delegated("click", button_4, closeEditModal);
		bind_select_value(select_1, () => get(editType), ($$value) => set(editType, $$value));
		bind_value(textarea, () => get(editAddress), ($$value) => set(editAddress, $$value));
		append($$anchor, div_47);
	};
	if_block(node_40, ($$render) => {
		if (get(showEditModal) && get(editingHead)) $$render(consequent_15);
	});
	var node_54 = sibling(node_40, 2);
	var consequent_19 = ($$anchor) => {
		var div_66 = root_27();
		var div_67 = child(div_66);
		var div_68 = child(div_67);
		var div_69 = child(div_68);
		Triangle_alert(child(div_69), { class: "w-5 h-5" });
		next(2);
		reset(div_69);
		var button_5 = sibling(div_69, 2);
		X(child(button_5), { class: "w-4 h-4" });
		reset(button_5);
		reset(div_68);
		var div_70 = sibling(div_68, 2);
		var div_71 = child(div_70);
		var div_72 = child(div_71);
		Triangle_alert(child(div_72), { class: "w-4 h-4 shrink-0" });
		next();
		reset(div_72);
		next(2);
		reset(div_71);
		var node_58 = sibling(div_71, 2);
		var consequent_16 = ($$anchor) => {
			var div_73 = root_23();
			var text_24 = child(div_73, true);
			reset(div_73);
			template_effect(() => set_text(text_24, get(deleteError)));
			append($$anchor, div_73);
		};
		if_block(node_58, ($$render) => {
			if (get(deleteError)) $$render(consequent_16);
		});
		var div_74 = sibling(node_58, 2);
		var div_75 = child(div_74);
		var span_21 = sibling(child(div_75), 2);
		var text_25 = child(span_21);
		reset(span_21);
		reset(div_75);
		var div_76 = sibling(div_75, 2);
		var span_22 = sibling(child(div_76), 2);
		var text_26 = child(span_22);
		reset(span_22);
		reset(div_76);
		var div_77 = sibling(div_76, 2);
		var span_23 = sibling(child(div_77), 2);
		var text_27 = child(span_23, true);
		reset(span_23);
		reset(div_77);
		var node_59 = sibling(div_77, 2);
		var consequent_17 = ($$anchor) => {
			var div_78 = root_24();
			var span_24 = sibling(child(div_78), 2);
			var text_28 = child(span_24, true);
			reset(span_24);
			reset(div_78);
			template_effect(() => set_text(text_28, get(deletingHead).salesmanName));
			append($$anchor, div_78);
		};
		if_block(node_59, ($$render) => {
			if (get(deletingHead).salesmanName) $$render(consequent_17);
		});
		var div_79 = sibling(node_59, 2);
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
		var node_61 = child(div_81);
		Button(node_61, {
			type: "button",
			variant: "outline",
			size: "sm",
			class: "h-8 text-xs",
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
		Button(sibling(node_61, 2), {
			type: "button",
			variant: "destructive",
			size: "sm",
			class: "h-8 text-xs gap-1.5",
			onclick: handleDeleteHead,
			get disabled() {
				return get(isDeleting);
			},
			children: ($$anchor, $$slotProps) => {
				var fragment_11 = comment();
				var node_63 = first_child(fragment_11);
				var consequent_18 = ($$anchor) => {
					var fragment_12 = root_25();
					Refresh_cw(first_child(fragment_12), { class: "w-3.5 h-3.5 animate-spin" });
					next();
					append($$anchor, fragment_12);
				};
				var alternate_8 = ($$anchor) => {
					var fragment_13 = root_26();
					Trash_2(first_child(fragment_13), { class: "w-3.5 h-3.5" });
					next();
					append($$anchor, fragment_13);
				};
				if_block(node_63, ($$render) => {
					if (get(isDeleting)) $$render(consequent_18);
					else $$render(alternate_8, -1);
				});
				append($$anchor, fragment_11);
			},
			$$slots: { default: true }
		});
		reset(div_81);
		reset(div_67);
		reset(div_66);
		template_effect(() => {
			set_text(text_25, `#${get(deletingHead).id ?? ""}`);
			set_text(text_26, `${get(deletingHead).firstName ?? ""} ${get(deletingHead).lastName ?? "" ?? ""}`);
			set_class(span_23, 1, `capitalize px-2 py-0.5 rounded text-[10px] font-medium ${get(deletingHead).type === "agent" ? "bg-purple-500/10 text-purple-600" : "bg-sky-500/10 text-sky-600"}`);
			set_text(text_27, get(deletingHead).type);
		});
		delegated("click", button_5, closeDeleteModal);
		append($$anchor, div_66);
	};
	if_block(node_54, ($$render) => {
		if (get(showDeleteModal) && get(deletingHead)) $$render(consequent_19);
	});
	template_effect(($0, $1, $2) => {
		set_text(text_1, $0);
		set_text(text_2, $1);
		set_text(text_3, $2);
		set_text(text_4, get(heads).length);
		set_text(text_6, get(totalCount));
	}, [
		() => get(overallTotalCount).toLocaleString(),
		() => get(customerCount).toLocaleString(),
		() => get(agentCount).toLocaleString()
	]);
	append($$anchor, fragment);
	pop();
	$$cleanup();
}
delegate(["click", "change"]);
//#endregion
export { _page as component };

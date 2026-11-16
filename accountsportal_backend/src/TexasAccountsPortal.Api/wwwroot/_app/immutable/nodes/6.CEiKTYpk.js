import { B as append, Ct as setup_stores, D as head, H as from_html, I as if_block, K as delegate, Lt as next, M as slot, Mt as push, Q as get, R as set_text, Rt as reset, T as clsx, V as comment, _ as set_attribute, a as legacy_rest_props, c as spread_props, dt as child, ft as first_child, gt as set, it as effect, jt as pop, ot as template_effect, pt as sibling, q as delegated, r as onMount, ut as $document, vt as state, w as set_class, wt as store_get, xt as user_derived } from "../chunks/BdGPDeRo.js";
import { t as goto } from "../chunks/BylnKsEc.js";
import "../chunks/DhaYE-8x.js";
import { i as hasRole } from "../chunks/CmrjORNI.js";
import "../chunks/CAdj_q3a.js";
import { t as addToast } from "../chunks/BZc__OC9.js";
import { t as Icon } from "../chunks/CS18PJnN.js";
import { t as Arrow_left } from "../chunks/Cbjzxiq1.js";
import { t as Calendar } from "../chunks/B7iTzqJ8.js";
import { t as ErrorState } from "../chunks/D6Kn8Mes2.js";
import { t as Trash_2 } from "../chunks/D1sI3u9o2.js";
import { t as page } from "../chunks/B73zvmzX2.js";
import { t as Button } from "../chunks/zyE_82FR2.js";
import "../chunks/CJ9Yz_2f2.js";
import { t as ConfirmationDialog } from "../chunks/D8xz02uw2.js";
import { t as Spinner } from "../chunks/B2_BD2Fn.js";
import { n as deleteChartOfAccount, r as getChartOfAccountById } from "../chunks/vJk_ksWl.js";
import { n as NORMAL_BALANCE_LABELS, t as ACCOUNT_TYPE_LABELS } from "../chunks/Dh0Wd7Q2.js";
//#region node_modules/lucide-svelte/dist/icons/folder-open.svelte
function Folder_open($$anchor, $$props) {
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
	const iconNode = [["path", { "d": "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2" }]];
	/**
	* @component @name FolderOpen
	* @description Lucide SVG icon component, renders SVG Element with children.
	*
	* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtNiAxNCAxLjUtMi45QTIgMiAwIDAgMSA5LjI0IDEwSDIwYTIgMiAwIDAgMSAxLjk0IDIuNWwtMS41NCA2YTIgMiAwIDAgMS0xLjk1IDEuNUg0YTIgMiAwIDAgMS0yLTJWNWEyIDIgMCAwIDEgMi0yaDMuOWEyIDIgMCAwIDEgMS42OS45bC44MSAxLjJhMiAyIDAgMCAwIDEuNjcuOUgxOGEyIDIgMCAwIDEgMiAydjIiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/folder-open
	* @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
	*
	* @param {Object} props - Lucide icons props and any valid SVG attribute
	* @returns {FunctionalComponent} Svelte component
	*
	*/
	Icon($$anchor, spread_props({ name: "folder-open" }, () => $$sanitized_props, {
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
//#region node_modules/lucide-svelte/dist/icons/pen-line.svelte
function Pen_line($$anchor, $$props) {
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
	const iconNode = [["path", { "d": "M13 21h8" }], ["path", { "d": "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" }]];
	/**
	* @component @name PenLine
	* @description Lucide SVG icon component, renders SVG Element with children.
	*
	* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTMgMjFoOCIgLz4KICA8cGF0aCBkPSJNMjEuMTc0IDYuODEyYTEgMSAwIDAgMC0zLjk4Ni0zLjk4N0wzLjg0MiAxNi4xNzRhMiAyIDAgMCAwLS41LjgzbC0xLjMyMSA0LjM1MmEuNS41IDAgMCAwIC42MjMuNjIybDQuMzUzLTEuMzJhMiAyIDAgMCAwIC44My0uNDk3eiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/pen-line
	* @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
	*
	* @param {Object} props - Lucide icons props and any valid SVG attribute
	* @returns {FunctionalComponent} Svelte component
	*
	*/
	Icon($$anchor, spread_props({ name: "pen-line" }, () => $$sanitized_props, {
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
//#region src/routes/(app)/accounting/chart-of-accounts/[id]/+page.svelte
var root = from_html(`<!> Edit`, 1);
var root_1 = from_html(`<!> Delete`, 1);
var root_2 = from_html(`<!> <!>`, 1);
var root_3 = from_html(`<div class="flex flex-col items-center justify-center min-h-[300px] bg-card border border-border rounded-2xl"><!> <span class="text-xs text-muted-foreground mt-2">Loading account details...</span></div>`);
var root_4 = from_html(`<span class="text-[9px] bg-primary/10 text-primary border border-primary/20 px-2 py-0.5 rounded-md font-bold uppercase tracking-wider">System Critical</span>`);
var root_5 = from_html(`<div class="pt-4 border-t border-border space-y-1.5 text-xs"><span class="text-muted-foreground font-semibold">Description / Notes</span> <p class="text-foreground leading-relaxed"> </p></div>`);
var root_6 = from_html(`<div class="p-3 bg-muted/40 border border-border rounded-xl space-y-1"><span class="text-[10px] uppercase font-bold text-muted-foreground">Parent Account</span> <a class="block font-semibold text-primary hover:underline"> </a></div>`);
var root_7 = from_html(`<p class="text-muted-foreground">This is a root account and has no parent.</p>`);
var root_8 = from_html(`<div class="grid grid-cols-1 lg:grid-cols-3 gap-6"><div class="lg:col-span-2 bg-card border border-border rounded-2xl p-6 shadow-xs space-y-6"><div class="flex items-start justify-between border-b border-border pb-4"><div class="space-y-1"><div class="flex items-center gap-2"><span class="text-xs font-mono bg-muted text-muted-foreground px-2 py-0.5 rounded-md font-semibold"> </span> <!></div> <h2 class="text-lg font-bold text-foreground"> </h2></div> <span> </span></div> <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs"><div class="space-y-1"><span class="text-muted-foreground font-semibold">Account Type</span> <p class="font-bold text-foreground capitalize"> </p></div> <div class="space-y-1"><span class="text-muted-foreground font-semibold">Normal Balance Direction</span> <p class="font-bold text-foreground capitalize"> </p></div> <div class="space-y-1"><span class="text-muted-foreground font-semibold">Control Account</span> <p class="font-bold text-foreground"> </p></div> <div class="space-y-1"><span class="text-muted-foreground font-semibold">Hierarchy Level</span> <p class="font-bold text-foreground"> </p></div></div> <!></div> <div class="space-y-6"><div class="bg-card border border-border rounded-2xl p-6 shadow-xs space-y-4"><h3 class="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5"><!> Hierarchy Context</h3> <div class="text-xs space-y-3"><!></div></div> <div class="bg-card border border-border rounded-2xl p-6 shadow-xs space-y-4"><h3 class="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5"><!> Audit Metadata</h3> <div class="text-xs space-y-3 text-muted-foreground"><div class="flex justify-between"><span>Created On</span> <span class="font-medium text-foreground"> </span></div> <div class="flex justify-between"><span>Account ID</span> <span class="font-mono font-medium text-foreground"> </span></div></div></div></div></div>`);
var root_9 = from_html(`<div class="space-y-6"><div class="flex items-center justify-between"><button class="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground cursor-pointer transition-colors"><!> Back to Chart of Accounts</button> <div class="flex items-center gap-2"><!></div></div> <!></div> <!>`, 1);
function _page($$anchor, $$props) {
	push($$props, true);
	const $page = () => store_get(page, "$page", $$stores);
	const [$$stores, $$cleanup] = setup_stores();
	const id = $page().params.id ? parseInt($page().params.id) : 0;
	let account = state(null);
	let parentAccount = state(null);
	let loading = state(true);
	let errorMsg = state(null);
	let correlationId = state("");
	let showDeleteConfirm = state(false);
	let isDeleting = state(false);
	let abortController = null;
	async function loadAccountDetails() {
		if (abortController) abortController.abort();
		abortController = new AbortController();
		set(loading, true);
		set(errorMsg, null);
		try {
			const acc = await getChartOfAccountById(id, abortController.signal);
			set(account, acc, true);
			if (acc.parentId) try {
				set(parentAccount, await getChartOfAccountById(acc.parentId, abortController.signal), true);
			} catch {
				set(parentAccount, null);
			}
			else set(parentAccount, null);
		} catch (err) {
			if (err.name === "AbortError") return;
			set(errorMsg, err.message || "Failed to load account details.", true);
			set(correlationId, err.correlationId || "", true);
		} finally {
			set(loading, false);
		}
	}
	async function handleDelete() {
		if (!get(account)) return;
		set(isDeleting, true);
		try {
			await deleteChartOfAccount(get(account).id);
			addToast(`Account "${get(account).name}" deleted successfully.`, "success");
			goto("/accounting/chart-of-accounts");
		} catch (err) {
			addToast(err.message || "Failed to delete account.", "error");
		} finally {
			set(isDeleting, false);
			set(showDeleteConfirm, false);
		}
	}
	onMount(() => {
		loadAccountDetails();
		return () => {
			if (abortController) abortController.abort();
		};
	});
	var fragment = root_9();
	head("15jyrx", ($$anchor) => {
		effect(() => {
			$document.title = "Account Details — Accounts Portal";
		});
	});
	var div = first_child(fragment);
	var div_1 = child(div);
	var button = child(div_1);
	Arrow_left(child(button), { class: "h-3.5 w-3.5" });
	next();
	reset(button);
	var div_2 = sibling(button, 2);
	var node_1 = child(div_2);
	var consequent_1 = ($$anchor) => {
		var fragment_1 = root_2();
		var node_2 = first_child(fragment_1);
		Button(node_2, {
			variant: "outline",
			size: "sm",
			class: "rounded-xl text-xs py-4 cursor-pointer font-semibold",
			onclick: () => goto(`/accounting/chart-of-accounts/${id}/edit`),
			children: ($$anchor, $$slotProps) => {
				var fragment_2 = root();
				Pen_line(first_child(fragment_2), { class: "h-3.5 w-3.5 mr-1" });
				next();
				append($$anchor, fragment_2);
			},
			$$slots: { default: true }
		});
		var node_4 = sibling(node_2, 2);
		var consequent = ($$anchor) => {
			Button($$anchor, {
				variant: "destructive",
				size: "sm",
				class: "rounded-xl text-xs py-4 cursor-pointer font-semibold",
				onclick: () => set(showDeleteConfirm, true),
				children: ($$anchor, $$slotProps) => {
					var fragment_4 = root_1();
					Trash_2(first_child(fragment_4), { class: "h-3.5 w-3.5 mr-1" });
					next();
					append($$anchor, fragment_4);
				},
				$$slots: { default: true }
			});
		};
		if_block(node_4, ($$render) => {
			if (!get(account).isSystemAccount) $$render(consequent);
		});
		append($$anchor, fragment_1);
	};
	var d = user_derived(() => hasRole("master_accountant") && get(account));
	if_block(node_1, ($$render) => {
		if (get(d)) $$render(consequent_1);
	});
	reset(div_2);
	reset(div_1);
	var node_6 = sibling(div_1, 2);
	var consequent_2 = ($$anchor) => {
		ErrorState($$anchor, {
			get message() {
				return get(errorMsg);
			},
			get correlationId() {
				return get(correlationId);
			},
			retryAction: loadAccountDetails
		});
	};
	var alternate_2 = ($$anchor) => {
		var fragment_6 = comment();
		var node_7 = first_child(fragment_6);
		var consequent_3 = ($$anchor) => {
			var div_3 = root_3();
			Spinner(child(div_3), { class: "h-8 w-8 text-primary" });
			next(2);
			reset(div_3);
			append($$anchor, div_3);
		};
		var alternate_1 = ($$anchor) => {
			var div_4 = root_8();
			var div_5 = child(div_4);
			var div_6 = child(div_5);
			var div_7 = child(div_6);
			var div_8 = child(div_7);
			var span = child(div_8);
			var text = child(span);
			reset(span);
			var node_9 = sibling(span, 2);
			var consequent_4 = ($$anchor) => {
				append($$anchor, root_4());
			};
			if_block(node_9, ($$render) => {
				if (get(account).isSystemAccount) $$render(consequent_4);
			});
			reset(div_8);
			var h2 = sibling(div_8, 2);
			var text_1 = child(h2, true);
			reset(h2);
			reset(div_7);
			var span_2 = sibling(div_7, 2);
			var text_2 = child(span_2, true);
			reset(span_2);
			reset(div_6);
			var div_9 = sibling(div_6, 2);
			var div_10 = child(div_9);
			var p = sibling(child(div_10), 2);
			var text_3 = child(p, true);
			reset(p);
			reset(div_10);
			var div_11 = sibling(div_10, 2);
			var p_1 = sibling(child(div_11), 2);
			var text_4 = child(p_1, true);
			reset(p_1);
			reset(div_11);
			var div_12 = sibling(div_11, 2);
			var p_2 = sibling(child(div_12), 2);
			var text_5 = child(p_2, true);
			reset(p_2);
			reset(div_12);
			var div_13 = sibling(div_12, 2);
			var p_3 = sibling(child(div_13), 2);
			var text_6 = child(p_3, true);
			reset(p_3);
			reset(div_13);
			reset(div_9);
			var node_10 = sibling(div_9, 2);
			var consequent_5 = ($$anchor) => {
				var div_14 = root_5();
				var p_4 = sibling(child(div_14), 2);
				var text_7 = child(p_4, true);
				reset(p_4);
				reset(div_14);
				template_effect(() => set_text(text_7, get(account).description));
				append($$anchor, div_14);
			};
			if_block(node_10, ($$render) => {
				if (get(account).description) $$render(consequent_5);
			});
			reset(div_5);
			var div_15 = sibling(div_5, 2);
			var div_16 = child(div_15);
			var h3 = child(div_16);
			Folder_open(child(h3), { class: "h-4 w-4 text-primary" });
			next();
			reset(h3);
			var div_17 = sibling(h3, 2);
			var node_12 = child(div_17);
			var consequent_6 = ($$anchor) => {
				var div_18 = root_6();
				var a = sibling(child(div_18), 2);
				var text_8 = child(a);
				reset(a);
				reset(div_18);
				template_effect(() => {
					set_attribute(a, "href", `/accounting/chart-of-accounts/${get(parentAccount).id}`);
					set_text(text_8, `${get(parentAccount).code ?? ""} — ${get(parentAccount).name ?? ""}`);
				});
				append($$anchor, div_18);
			};
			var alternate = ($$anchor) => {
				append($$anchor, root_7());
			};
			if_block(node_12, ($$render) => {
				if (get(parentAccount)) $$render(consequent_6);
				else $$render(alternate, -1);
			});
			reset(div_17);
			reset(div_16);
			var div_19 = sibling(div_16, 2);
			var h3_1 = child(div_19);
			Calendar(child(h3_1), { class: "h-4 w-4 text-primary" });
			next();
			reset(h3_1);
			var div_20 = sibling(h3_1, 2);
			var div_21 = child(div_20);
			var span_3 = sibling(child(div_21), 2);
			var text_9 = child(span_3, true);
			reset(span_3);
			reset(div_21);
			var div_22 = sibling(div_21, 2);
			var span_4 = sibling(child(div_22), 2);
			var text_10 = child(span_4);
			reset(span_4);
			reset(div_22);
			reset(div_20);
			reset(div_19);
			reset(div_15);
			reset(div_4);
			template_effect(($0, $1) => {
				set_text(text, `Code ${get(account).code ?? ""}`);
				set_text(text_1, get(account).name);
				set_class(span_2, 1, $0);
				set_text(text_2, get(account).isActive ? "Active" : "Inactive");
				set_text(text_3, ACCOUNT_TYPE_LABELS[get(account).accountType] || get(account).accountType);
				set_text(text_4, NORMAL_BALANCE_LABELS[get(account).normalBalance] || get(account).normalBalance);
				set_text(text_5, get(account).isControlAccount ? "Yes (Allows children sub-accounts, no direct postings)" : "No (Standard posting account)");
				set_text(text_6, get(parentAccount) ? "Sub-account" : "Root / Top-level Account");
				set_text(text_9, $1);
				set_text(text_10, `#${get(account).id ?? ""}`);
			}, [() => clsx(["inline-flex items-center gap-1 font-semibold rounded-full border text-[10px] px-3 py-1", get(account).isActive ? "text-emerald-700 bg-emerald-50 border-emerald-200 dark:text-emerald-400 dark:bg-emerald-950/40 dark:border-emerald-800" : "text-muted-foreground bg-muted border-border"].join(" ")), () => new Date(get(account).createdAt).toLocaleDateString()]);
			append($$anchor, div_4);
		};
		if_block(node_7, ($$render) => {
			if (get(loading) || !get(account)) $$render(consequent_3);
			else $$render(alternate_1, -1);
		});
		append($$anchor, fragment_6);
	};
	if_block(node_6, ($$render) => {
		if (get(errorMsg)) $$render(consequent_2);
		else $$render(alternate_2, -1);
	});
	reset(div);
	var node_14 = sibling(div, 2);
	{
		let $0 = user_derived(() => `Are you sure you want to permanently delete "${get(account)?.name}" (${get(account)?.code})? This action will fail if the account has ledger activity or sub-accounts.`);
		ConfirmationDialog(node_14, {
			title: "Delete Chart of Account?",
			get message() {
				return get($0);
			},
			confirmLabel: "Yes, Delete",
			isDestructive: true,
			onConfirm: handleDelete,
			get open() {
				return get(showDeleteConfirm);
			},
			set open($$value) {
				set(showDeleteConfirm, $$value, true);
			}
		});
	}
	delegated("click", button, () => goto("/accounting/chart-of-accounts"));
	append($$anchor, fragment);
	pop();
	$$cleanup();
}
delegate(["click"]);
//#endregion
export { _page as component };

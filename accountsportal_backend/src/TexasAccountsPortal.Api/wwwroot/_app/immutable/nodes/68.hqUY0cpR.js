import { B as append, Bt as reset, D as head, Et as store_get, H as from_html, I as if_block, J as event, K as delegate, M as slot, Nt as pop, Pt as push, Q as get, R as set_text, Tt as setup_stores, V as comment, _ as set_attribute, a as legacy_rest_props, bt as state, c as spread_props, dt as $document, g as remove_input_defaults, ht as sibling, it as effect, m as bind_value, mt as first_child, ot as template_effect, pt as child, q as delegated, st as user_effect, vt as set, zt as next } from "../chunks/dXkmWTgM.js";
import { t as goto } from "../chunks/Cwr0LTVn.js";
import "../chunks/DhaYE-8x.js";
import { a as isAuthenticated, s as login } from "../chunks/Clfal68w.js";
import "../chunks/DZfWAsjW.js";
import { t as Icon } from "../chunks/BalaELqB.js";
import { t as Eye } from "../chunks/CTzUc-eH2.js";
import { t as Loader_circle } from "../chunks/BMOA0yrB2.js";
import { t as Lock } from "../chunks/DLJP7XQX2.js";
import { t as page } from "../chunks/CU_scLrs.js";
import "../chunks/D2AKXTE9.js";
//#region node_modules/lucide-svelte/dist/icons/eye-off.svelte
function Eye_off($$anchor, $$props) {
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
		["path", { "d": "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" }],
		["path", { "d": "M14.084 14.158a3 3 0 0 1-4.242-4.242" }],
		["path", { "d": "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" }],
		["path", { "d": "m2 2 20 20" }]
	];
	/**
	* @component @name EyeOff
	* @description Lucide SVG icon component, renders SVG Element with children.
	*
	* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTAuNzMzIDUuMDc2YTEwLjc0NCAxMC43NDQgMCAwIDEgMTEuMjA1IDYuNTc1IDEgMSAwIDAgMSAwIC42OTYgMTAuNzQ3IDEwLjc0NyAwIDAgMS0xLjQ0NCAyLjQ5IiAvPgogIDxwYXRoIGQ9Ik0xNC4wODQgMTQuMTU4YTMgMyAwIDAgMS00LjI0Mi00LjI0MiIgLz4KICA8cGF0aCBkPSJNMTcuNDc5IDE3LjQ5OWExMC43NSAxMC43NSAwIDAgMS0xNS40MTctNS4xNTEgMSAxIDAgMCAxIDAtLjY5NiAxMC43NSAxMC43NSAwIDAgMSA0LjQ0Ni01LjE0MyIgLz4KICA8cGF0aCBkPSJtMiAyIDIwIDIwIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/eye-off
	* @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
	*
	* @param {Object} props - Lucide icons props and any valid SVG attribute
	* @returns {FunctionalComponent} Svelte component
	*
	*/
	Icon($$anchor, spread_props({ name: "eye-off" }, () => $$sanitized_props, {
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
//#region src/routes/(public)/login/+page.svelte
var root = from_html(`<meta name="description" content="Sign in to the Texas Accounts Portal."/>`);
var root_1 = from_html(`<div class="mt-5 p-3 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-xs font-semibold leading-relaxed flex items-start gap-2 animate-fadeIn" role="alert"><span class="mt-0.5 shrink-0 text-sm">⚠️</span> <span> </span></div>`);
var root_2 = from_html(`<!> <span>Signing in...</span>`, 1);
var root_3 = from_html(`<span>Sign In</span>`);
var root_4 = from_html(`<div class="min-h-[100dvh] w-full flex flex-col items-center justify-center bg-muted/30 overflow-y-auto px-4 py-8 pt-safe pb-safe"><div class="w-full max-w-[440px] bg-card border border-border rounded-3xl p-8 md:p-10 shadow-lg flex flex-col"><div class="flex justify-center"><div class="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center"><!></div></div> <h2 class="text-2xl font-bold text-foreground text-center mt-5 leading-tight">Texas Accounts Portal</h2> <p class="text-xs text-muted-foreground text-center mt-1.5 font-medium">Sign in to access accounting & ledger systems</p> <!> <form class="mt-6 space-y-5"><div class="space-y-1.5"><label for="email" class="block text-xs font-bold text-muted-foreground">Email Address</label> <input id="email" type="email" required="" autocomplete="email" placeholder="name@example.com" class="w-full border border-input rounded-xl px-4 py-3 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 bg-background transition-all font-medium"/></div> <div class="space-y-1.5"><label for="password" class="block text-xs font-bold text-muted-foreground">Password</label> <div class="relative"><input id="password" required="" autocomplete="current-password" placeholder="••••••••••••" class="w-full border border-input rounded-xl px-4 py-3 pr-12 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 bg-background transition-all font-medium"/> <button type="button" class="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"><!></button></div></div> <button type="submit" class="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3.5 px-6 rounded-xl text-sm transition-all duration-200 shadow-md disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"><!></button></form></div> <p class="text-[11px] font-semibold text-muted-foreground mt-6 tracking-wide">© 2026 Texas Travels. All rights reserved.</p></div>`);
function _page($$anchor, $$props) {
	push($$props, true);
	const $isAuthenticated = () => store_get(isAuthenticated, "$isAuthenticated", $$stores);
	const $page = () => store_get(page, "$page", $$stores);
	const [$$stores, $$cleanup] = setup_stores();
	let email = state("");
	let password = state("");
	let showPassword = state(false);
	let loading = state(false);
	let errorMessage = state(null);
	user_effect(() => {
		if ($isAuthenticated()) goto($page().url.searchParams.get("returnTo") || "/dashboard");
	});
	async function handleLogin(e) {
		e.preventDefault();
		if (!get(email) || !get(password)) return;
		set(loading, true);
		set(errorMessage, null);
		try {
			await login(get(email).trim(), get(password));
		} catch (err) {
			const errorDetail = err;
			set(errorMessage, errorDetail?.detail || errorDetail?.message || "Invalid email or password.", true);
		} finally {
			set(loading, false);
		}
	}
	var div = root_4();
	head("iv8lg3", ($$anchor) => {
		var meta = root();
		effect(() => {
			$document.title = "Accounts Portal — Sign In";
		});
		append($$anchor, meta);
	});
	var div_1 = child(div);
	var div_2 = child(div_1);
	var div_3 = child(div_2);
	Lock(child(div_3), { class: "w-6 h-6 text-primary" });
	reset(div_3);
	reset(div_2);
	var node_1 = sibling(div_2, 6);
	var consequent = ($$anchor) => {
		var div_4 = root_1();
		var span = sibling(child(div_4), 2);
		var text = child(span, true);
		reset(span);
		reset(div_4);
		template_effect(() => set_text(text, get(errorMessage)));
		append($$anchor, div_4);
	};
	if_block(node_1, ($$render) => {
		if (get(errorMessage)) $$render(consequent);
	});
	var form = sibling(node_1, 2);
	var div_5 = child(form);
	var input = sibling(child(div_5), 2);
	remove_input_defaults(input);
	reset(div_5);
	var div_6 = sibling(div_5, 2);
	var div_7 = sibling(child(div_6), 2);
	var input_1 = child(div_7);
	remove_input_defaults(input_1);
	var button = sibling(input_1, 2);
	var node_2 = child(button);
	var consequent_1 = ($$anchor) => {
		Eye_off($$anchor, { class: "h-4.5 w-4.5" });
	};
	var alternate = ($$anchor) => {
		Eye($$anchor, { class: "h-4.5 w-4.5" });
	};
	if_block(node_2, ($$render) => {
		if (get(showPassword)) $$render(consequent_1);
		else $$render(alternate, -1);
	});
	reset(button);
	reset(div_7);
	reset(div_6);
	var button_1 = sibling(div_6, 2);
	var node_3 = child(button_1);
	var consequent_2 = ($$anchor) => {
		var fragment_2 = root_2();
		Loader_circle(first_child(fragment_2), { class: "h-4 w-4 animate-spin" });
		next(2);
		append($$anchor, fragment_2);
	};
	var alternate_1 = ($$anchor) => {
		append($$anchor, root_3());
	};
	if_block(node_3, ($$render) => {
		if (get(loading)) $$render(consequent_2);
		else $$render(alternate_1, -1);
	});
	reset(button_1);
	reset(form);
	reset(div_1);
	next(2);
	reset(div);
	template_effect(() => {
		set_attribute(input_1, "type", get(showPassword) ? "text" : "password");
		set_attribute(button, "aria-label", get(showPassword) ? "Hide password" : "Show password");
		button_1.disabled = get(loading);
	});
	event("submit", form, handleLogin);
	bind_value(input, () => get(email), ($$value) => set(email, $$value));
	bind_value(input_1, () => get(password), ($$value) => set(password, $$value));
	delegated("click", button, () => set(showPassword, !get(showPassword)));
	append($$anchor, div);
	pop();
	$$cleanup();
}
delegate(["click"]);
//#endregion
export { _page as component };

import { B as append, Ct as setup_stores, H as from_html, K as delegate, M as slot, Mt as push, N as each, Q as get, R as set_text, Rt as reset, T as clsx, V as comment, a as legacy_rest_props, bt as derived_safe_equal, c as spread_props, dt as child, ft as first_child, jt as pop, k as transition, l as init, ot as template_effect, pt as sibling, q as delegated, w as set_class, wt as store_get } from "./CjADOP7e.js";
import "./DhaYE-8x.js";
import "./CAg53IQA.js";
import { i as toasts, n as removeToast } from "./_zpa1t7W.js";
import { t as Icon } from "./DqlRdx7b.js";
import { t as Circle_alert } from "./DMWQFuZT.js";
import { t as Triangle_alert } from "./DS-Db28u.js";
import { t as X } from "./Br3xtG5S.js";
import { t as cn } from "./mLYdPe0M.js";
//#region node_modules/lucide-svelte/dist/icons/circle-check-big.svelte
function Circle_check_big($$anchor, $$props) {
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
	const iconNode = [["path", { "d": "M21.801 10A10 10 0 1 1 17 3.335" }], ["path", { "d": "m9 11 3 3L22 4" }]];
	/**
	* @component @name CircleCheckBig
	* @description Lucide SVG icon component, renders SVG Element with children.
	*
	* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjEuODAxIDEwQTEwIDEwIDAgMSAxIDE3IDMuMzM1IiAvPgogIDxwYXRoIGQ9Im05IDExIDMgM0wyMiA0IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/circle-check-big
	* @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
	*
	* @param {Object} props - Lucide icons props and any valid SVG attribute
	* @returns {FunctionalComponent} Svelte component
	*
	*/
	Icon($$anchor, spread_props({ name: "circle-check-big" }, () => $$sanitized_props, {
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
//#region node_modules/lucide-svelte/dist/icons/info.svelte
function Info($$anchor, $$props) {
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
		["circle", {
			"cx": "12",
			"cy": "12",
			"r": "10"
		}],
		["path", { "d": "M12 16v-4" }],
		["path", { "d": "M12 8h.01" }]
	];
	/**
	* @component @name Info
	* @description Lucide SVG icon component, renders SVG Element with children.
	*
	* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgLz4KICA8cGF0aCBkPSJNMTIgMTZ2LTQiIC8+CiAgPHBhdGggZD0iTTEyIDhoLjAxIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/info
	* @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
	*
	* @param {Object} props - Lucide icons props and any valid SVG attribute
	* @returns {FunctionalComponent} Svelte component
	*
	*/
	Icon($$anchor, spread_props({ name: "info" }, () => $$sanitized_props, {
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
//#region node_modules/svelte/src/transition/index.js
/** @param {number} t */
function cubic_out(t) {
	const f = t - 1;
	return f * f * f + 1;
}
/** @param {number | string} value
* @returns {[number, string]}
*/
function split_css_unit(value) {
	const split = typeof value === "string" && value.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
	return split ? [parseFloat(split[1]), split[2] || "px"] : [value, "px"];
}
/**
* Animates the x and y positions and the opacity of an element. `in` transitions animate from the provided values, passed as parameters to the element's default values. `out` transitions animate from the element's default values to the provided values.
*
* @param {Element} node
* @param {FlyParams} [params]
* @returns {TransitionConfig}
*/
function fly(node, { delay = 0, duration = 400, easing = cubic_out, x = 0, y = 0, opacity = 0 } = {}) {
	const style = getComputedStyle(node);
	const target_opacity = +style.opacity;
	const transform = style.transform === "none" ? "" : style.transform;
	const od = target_opacity * (1 - opacity);
	const [x_value, x_unit] = split_css_unit(x);
	const [y_value, y_unit] = split_css_unit(y);
	return {
		delay,
		duration,
		easing,
		css: (t, u) => `
			transform: ${transform} translate(${(1 - t) * x_value}${x_unit}, ${(1 - t) * y_value}${y_unit});
			opacity: ${target_opacity - od * u}`
	};
}
//#endregion
//#region src/lib/components/Toaster.svelte
var root = from_html(`<div role="alert"><div><!></div> <div class="flex-1 min-w-0"><p> </p></div> <button class="shrink-0 text-muted-foreground hover:text-foreground cursor-pointer focus:outline-none" aria-label="Dismiss alert"><!></button></div>`);
var root_1 = from_html(`<div class="fixed top-4 right-4 z-50 flex flex-col gap-2 w-full max-w-[360px] pointer-events-none select-none"></div>`);
function Toaster($$anchor, $$props) {
	push($$props, false);
	const $toasts = () => store_get(toasts, "$toasts", $$stores);
	const [$$stores, $$cleanup] = setup_stores();
	const typeConfig = {
		success: {
			bg: "bg-green-50 border-green-200 dark:bg-green-950/20 dark:border-green-800",
			text: "text-green-800 dark:text-green-200",
			icon: Circle_check_big,
			iconColor: "text-green-600"
		},
		error: {
			bg: "bg-red-50 border-red-200 dark:bg-red-950/20 dark:border-red-800",
			text: "text-red-800 dark:text-red-200",
			icon: Circle_alert,
			iconColor: "text-red-600"
		},
		warning: {
			bg: "bg-amber-50 border-amber-200 dark:bg-amber-950/20 dark:border-amber-800",
			text: "text-amber-800 dark:text-amber-200",
			icon: Triangle_alert,
			iconColor: "text-amber-600"
		},
		info: {
			bg: "bg-blue-50 border-blue-200 dark:bg-blue-950/20 dark:border-blue-800",
			text: "text-blue-800 dark:text-blue-200",
			icon: Info,
			iconColor: "text-blue-600"
		}
	};
	init();
	var div = root_1();
	each(div, 5, $toasts, (item) => item.id, ($$anchor, item) => {
		const config = derived_safe_equal(() => typeConfig[get(item).type]);
		var div_1 = root();
		var div_2 = child(div_1);
		var node = child(div_2);
		get(config).icon(node, { class: "h-4.5 w-4.5" });
		reset(div_2);
		var div_3 = sibling(div_2, 2);
		var p = child(div_3);
		var text = child(p, true);
		reset(p);
		reset(div_3);
		var button = sibling(div_3, 2);
		X(child(button), { class: "h-3.5 w-3.5" });
		reset(button);
		reset(div_1);
		template_effect(($0, $1, $2) => {
			set_class(div_1, 1, $0);
			set_class(div_2, 1, $1);
			set_class(p, 1, $2);
			set_text(text, get(item).message);
		}, [
			() => clsx(cn("pointer-events-auto flex items-start gap-3 p-4 border rounded-2xl shadow-md", get(config).bg)),
			() => clsx(cn("mt-0.5 shrink-0", get(config).iconColor)),
			() => clsx(cn("text-xs font-semibold leading-normal", get(config).text))
		]);
		delegated("click", button, () => removeToast(get(item).id));
		transition(1, div_1, () => fly, () => ({
			y: -20,
			duration: 250
		}));
		transition(2, div_1, () => fly, () => ({
			x: 100,
			duration: 200
		}));
		append($$anchor, div_1);
	});
	reset(div);
	append($$anchor, div);
	pop();
	$$cleanup();
}
delegate(["click"]);
//#endregion
export { Toaster as t };

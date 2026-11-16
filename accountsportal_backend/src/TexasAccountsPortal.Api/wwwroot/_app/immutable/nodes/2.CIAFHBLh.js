import { A as component, At as getAllContexts, B as append, Bt as reset, Ct as user_derived, Dt as derived, E as clsx, Et as store_get, F as key, Ft as setContext, G as text, H as from_html, Ht as to_array, I as if_block, K as delegate, L as mount, M as slot, Mt as hasContext, N as each, Nt as pop, O as element, P as index$1, Pt as push, Q as get$2, R as set_text, T as clsx$1, Tt as setup_stores, U as from_svg, V as comment, Vt as noop$1, W as props_id, X as createAttachmentKey, Y as on, _ as set_attribute, _t as increment, a as legacy_rest_props, at as effect_root, bt as state, c as spread_props, ct as user_pre_effect, et as tick, gt as proxy, h as attribute_effect, ht as sibling, j as snippet, jt as getContext, mt as first_child, nt as update_version, o as prop, ot as template_effect, pt as child, q as delegated, r as onMount, s as rest_props, st as user_effect, tt as untrack, u as bind_this, vt as set, w as set_class, wt as createSubscriber, yt as source, z as unmount, zt as next } from "../chunks/dXkmWTgM.js";
import { t as goto } from "../chunks/DAf4XCz2.js";
import "../chunks/BZYHaBeJ.js";
import "../chunks/DhaYE-8x.js";
import { t as apiFetch } from "../chunks/DMywAD4i.js";
import { a as isAuthenticated, c as logout, i as hasRole, o as isInitializing, r as currentUser } from "../chunks/DH5AB8XK.js";
import "../chunks/DZfWAsjW.js";
import { t as Icon$1 } from "../chunks/BalaELqB.js";
import { t as Bell } from "../chunks/C1T17BV1.js";
import { t as Book_open } from "../chunks/E5UrMlE0.js";
import { t as Chart_column } from "../chunks/7SHXTl2V.js";
import { t as Chevron_down } from "../chunks/Dj1p1QvC.js";
import { t as Chevron_left } from "../chunks/bgfi4Y0B.js";
import { t as Chevron_right$1 } from "../chunks/BQLzQDdY.js";
import { t as Folder } from "../chunks/DuHBvq992.js";
import { t as Landmark } from "../chunks/D_q7zQKx2.js";
import { t as Receipt } from "../chunks/4mbxDyuf2.js";
import { t as Shopping_bag } from "../chunks/CIvqk5ku.js";
import { t as Square_check_big } from "../chunks/CU2qEnkn.js";
import { t as User_check } from "../chunks/tSSJYCMY.js";
import { t as User } from "../chunks/C8PICJbu.js";
import { t as Users } from "../chunks/Bja056I7.js";
import { t as Wallet } from "../chunks/BahXSy4P.js";
import { t as cn } from "../chunks/BMnsu3cW.js";
import { t as page } from "../chunks/BMHBfCqz.js";
import { t as Button } from "../chunks/BhXsq3bC.js";
import "../chunks/Ce8q4DKc.js";
import { n as signalRService } from "../chunks/BHSwni8w.js";
//#region node_modules/lucide-svelte/dist/icons/ellipsis.svelte
function Ellipsis($$anchor, $$props) {
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
			"r": "1"
		}],
		["circle", {
			"cx": "19",
			"cy": "12",
			"r": "1"
		}],
		["circle", {
			"cx": "5",
			"cy": "12",
			"r": "1"
		}]
	];
	/**
	* @component @name Ellipsis
	* @description Lucide SVG icon component, renders SVG Element with children.
	*
	* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxIiAvPgogIDxjaXJjbGUgY3g9IjE5IiBjeT0iMTIiIHI9IjEiIC8+CiAgPGNpcmNsZSBjeD0iNSIgY3k9IjEyIiByPSIxIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/ellipsis
	* @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
	*
	* @param {Object} props - Lucide icons props and any valid SVG attribute
	* @returns {FunctionalComponent} Svelte component
	*
	*/
	Icon$1($$anchor, spread_props({ name: "ellipsis" }, () => $$sanitized_props, {
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
//#region node_modules/lucide-svelte/dist/icons/layout-dashboard.svelte
function Layout_dashboard($$anchor, $$props) {
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
		["rect", {
			"width": "7",
			"height": "9",
			"x": "3",
			"y": "3",
			"rx": "1"
		}],
		["rect", {
			"width": "7",
			"height": "5",
			"x": "14",
			"y": "3",
			"rx": "1"
		}],
		["rect", {
			"width": "7",
			"height": "9",
			"x": "14",
			"y": "12",
			"rx": "1"
		}],
		["rect", {
			"width": "7",
			"height": "5",
			"x": "3",
			"y": "16",
			"rx": "1"
		}]
	];
	/**
	* @component @name LayoutDashboard
	* @description Lucide SVG icon component, renders SVG Element with children.
	*
	* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSI5IiB4PSIzIiB5PSIzIiByeD0iMSIgLz4KICA8cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSI1IiB4PSIxNCIgeT0iMyIgcng9IjEiIC8+CiAgPHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iOSIgeD0iMTQiIHk9IjEyIiByeD0iMSIgLz4KICA8cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSI1IiB4PSIzIiB5PSIxNiIgcng9IjEiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/layout-dashboard
	* @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
	*
	* @param {Object} props - Lucide icons props and any valid SVG attribute
	* @returns {FunctionalComponent} Svelte component
	*
	*/
	Icon$1($$anchor, spread_props({ name: "layout-dashboard" }, () => $$sanitized_props, {
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
//#region node_modules/lucide-svelte/dist/icons/log-out.svelte
function Log_out($$anchor, $$props) {
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
		["path", { "d": "m16 17 5-5-5-5" }],
		["path", { "d": "M21 12H9" }],
		["path", { "d": "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" }]
	];
	/**
	* @component @name LogOut
	* @description Lucide SVG icon component, renders SVG Element with children.
	*
	* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMTYgMTcgNS01LTUtNSIgLz4KICA8cGF0aCBkPSJNMjEgMTJIOSIgLz4KICA8cGF0aCBkPSJNOSAyMUg1YTIgMiAwIDAgMS0yLTJWNWEyIDIgMCAwIDEgMi0yaDQiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/log-out
	* @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
	*
	* @param {Object} props - Lucide icons props and any valid SVG attribute
	* @returns {FunctionalComponent} Svelte component
	*
	*/
	Icon$1($$anchor, spread_props({ name: "log-out" }, () => $$sanitized_props, {
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
//#region node_modules/lucide-svelte/dist/icons/moon.svelte
function Moon($$anchor, $$props) {
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
	const iconNode = [["path", { "d": "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" }]];
	/**
	* @component @name Moon
	* @description Lucide SVG icon component, renders SVG Element with children.
	*
	* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjAuOTg1IDEyLjQ4NmE5IDkgMCAxIDEtOS40NzMtOS40NzJjLjQwNS0uMDIyLjYxNy40Ni40MDIuODAzYTYgNiAwIDAgMCA4LjI2OCA4LjI2OGMuMzQ0LS4yMTUuODI1LS4wMDQuODAzLjQwMSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/moon
	* @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
	*
	* @param {Object} props - Lucide icons props and any valid SVG attribute
	* @returns {FunctionalComponent} Svelte component
	*
	*/
	Icon$1($$anchor, spread_props({ name: "moon" }, () => $$sanitized_props, {
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
//#region node_modules/lucide-svelte/dist/icons/sun.svelte
function Sun($$anchor, $$props) {
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
			"r": "4"
		}],
		["path", { "d": "M12 2v2" }],
		["path", { "d": "M12 20v2" }],
		["path", { "d": "m4.93 4.93 1.41 1.41" }],
		["path", { "d": "m17.66 17.66 1.41 1.41" }],
		["path", { "d": "M2 12h2" }],
		["path", { "d": "M20 12h2" }],
		["path", { "d": "m6.34 17.66-1.41 1.41" }],
		["path", { "d": "m19.07 4.93-1.41 1.41" }]
	];
	/**
	* @component @name Sun
	* @description Lucide SVG icon component, renders SVG Element with children.
	*
	* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSI0IiAvPgogIDxwYXRoIGQ9Ik0xMiAydjIiIC8+CiAgPHBhdGggZD0iTTEyIDIwdjIiIC8+CiAgPHBhdGggZD0ibTQuOTMgNC45MyAxLjQxIDEuNDEiIC8+CiAgPHBhdGggZD0ibTE3LjY2IDE3LjY2IDEuNDEgMS40MSIgLz4KICA8cGF0aCBkPSJNMiAxMmgyIiAvPgogIDxwYXRoIGQ9Ik0yMCAxMmgyIiAvPgogIDxwYXRoIGQ9Im02LjM0IDE3LjY2LTEuNDEgMS40MSIgLz4KICA8cGF0aCBkPSJtMTkuMDcgNC45My0xLjQxIDEuNDEiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/sun
	* @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
	*
	* @param {Object} props - Lucide icons props and any valid SVG attribute
	* @returns {FunctionalComponent} Svelte component
	*
	*/
	Icon$1($$anchor, spread_props({ name: "sun" }, () => $$sanitized_props, {
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
//#region src/lib/stores/navigation.ts
/**
* Unified Texas Accounts Portal navigation tree.
*/
var navigationItems = [
	{
		label: "Dashboard",
		route: "/dashboard",
		icon: Layout_dashboard,
		mobilePrimary: true
	},
	{
		label: "Transactions",
		route: "/transactions",
		icon: Receipt,
		mobilePrimary: true
	},
	{
		label: "Sales Entries",
		route: "/sales",
		icon: Shopping_bag,
		mobilePrimary: false,
		children: [
			{
				label: "Overview Dashboard",
				route: "/sales/dashboard"
			},
			{
				label: "Pending Sales Entries",
				route: "/sales/pending"
			},
			{
				label: "Flights Bookings",
				route: "/sales/bookings/flights"
			},
			{
				label: "Hotels Bookings",
				route: "/sales/bookings/hotels"
			},
			{
				label: "Visa Bookings",
				route: "/sales/bookings/visa"
			},
			{
				label: "Holiday Packages",
				route: "/sales/bookings/holiday"
			},
			{
				label: "VFS Appointments",
				route: "/sales/bookings/vfs"
			},
			{
				label: "Transportation",
				route: "/sales/bookings/transportation"
			},
			{
				label: "Other Services",
				route: "/sales/bookings/other-services"
			},
			{
				label: "Sales Leads",
				route: "/sales/leads",
				requiredRole: "master_accountant"
			},
			{
				label: "Receipts & Ledger",
				route: "/sales/receipts"
			},
			{
				label: "Customer Ledger Explorer",
				route: "/sales/ledger"
			},
			{
				label: "Visa Countries & Packages",
				route: "/master-data/visa",
				requiredRole: "master_accountant"
			},
			{
				label: "Disputes & Chargebacks",
				route: "/sales/disputes"
			}
		]
	},
	{
		label: "Suppliers",
		route: "/suppliers",
		icon: Users,
		mobilePrimary: true
	},
	{
		label: "Agents",
		route: "/agents",
		icon: User_check
	},
	{
		label: "Cash Accounts",
		route: "/accounts",
		icon: Landmark
	},
	{
		label: "Bank Accounts",
		route: "/banks",
		icon: Landmark
	},
	{
		label: "Payments",
		route: "/payments",
		icon: Wallet
	},
	{
		label: "Pending Approvals",
		route: "/pending-approvals",
		icon: Square_check_big,
		requiredRole: "master_accountant"
	},
	{
		label: "Journal Entries",
		route: "/accounting/journals",
		icon: Book_open
	},
	{
		label: "Salesmen Report",
		route: "/reports/salesmen",
		icon: Chart_column,
		mobilePrimary: true
	},
	{
		label: "Staffs",
		route: "/staffs",
		icon: Folder,
		requiredRole: "master_accountant",
		children: [
			{
				label: "Accounts Staff",
				route: "/staffs/accounts"
			},
			{
				label: "Sales Staff",
				route: "/staffs/sales"
			},
			{
				label: "Operational Staff",
				route: "/staffs/operational"
			}
		]
	},
	{
		label: "Payroll",
		route: "/payroll",
		icon: Wallet,
		requiredRole: "master_accountant",
		children: [{
			label: "Salary Profiles",
			route: "/payroll/salary-profiles"
		}, {
			label: "Payroll History",
			route: "/payroll/history"
		}]
	}
];
/**
* Reactively filters the navigation configuration based on the current user's authenticated context.
*/
var filteredNavigation = derived(currentUser, ($user) => {
	if (!$user) return [];
	const role = $user.userType.toLowerCase().replace(/\s+/g, "_");
	return navigationItems.filter((item) => {
		if (item.requiredRole === "master_accountant" && role !== "master_accountant") return false;
		return true;
	}).map((item) => {
		if (item.children) {
			const filteredChildren = item.children.filter((child) => {
				if (child.requiredRole === "master_accountant" && role !== "master_accountant") return false;
				return true;
			});
			return {
				...item,
				children: filteredChildren
			};
		}
		return item;
	});
});
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/is.js
function isFunction$1(value) {
	return typeof value === "function";
}
function isObject(value) {
	return value !== null && typeof value === "object";
}
var CLASS_VALUE_PRIMITIVE_TYPES = [
	"string",
	"number",
	"bigint",
	"boolean"
];
function isClassValue(value) {
	if (value === null || value === void 0) return true;
	if (CLASS_VALUE_PRIMITIVE_TYPES.includes(typeof value)) return true;
	if (Array.isArray(value)) return value.every((item) => isClassValue(item));
	if (typeof value === "object") {
		if (Object.getPrototypeOf(value) !== Object.prototype) return false;
		return true;
	}
	return false;
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/box/box-extras.svelte.js
var BoxSymbol = Symbol("box");
var isWritableSymbol = Symbol("is-writable");
function boxWith(getter, setter) {
	const derived = user_derived(getter);
	if (setter) return {
		[BoxSymbol]: true,
		[isWritableSymbol]: true,
		get current() {
			return get$2(derived);
		},
		set current(v) {
			setter(v);
		}
	};
	return {
		[BoxSymbol]: true,
		get current() {
			return getter();
		}
	};
}
/**
* @returns Whether the value is a Box
*
* @see {@link https://runed.dev/docs/functions/box}
*/
function isBox(value) {
	return isObject(value) && BoxSymbol in value;
}
/**
* @returns Whether the value is a WritableBox
*
* @see {@link https://runed.dev/docs/functions/box}
*/
function isWritableBox(value) {
	return isBox(value) && isWritableSymbol in value;
}
function boxFrom(value) {
	if (isBox(value)) return value;
	if (isFunction$1(value)) return boxWith(value);
	return simpleBox(value);
}
/**
* Function that gets an object of boxes, and returns an object of reactive values
*
* @example
* const count = box(0)
* const flat = box.flatten({ count, double: box.with(() => count.current) })
* // type of flat is { count: number, readonly double: number }
*
* @see {@link https://runed.dev/docs/functions/box}
*/
function boxFlatten(boxes) {
	return Object.entries(boxes).reduce((acc, [key, b]) => {
		if (!isBox(b)) return Object.assign(acc, { [key]: b });
		if (isWritableBox(b)) Object.defineProperty(acc, key, {
			get() {
				return b.current;
			},
			set(v) {
				b.current = v;
			}
		});
		else Object.defineProperty(acc, key, { get() {
			return b.current;
		} });
		return acc;
	}, {});
}
/**
* Function that converts a box to a readonly box.
*
* @example
* const count = box(0) // WritableBox<number>
* const countReadonly = box.readonly(count) // ReadableBox<number>
*
* @see {@link https://runed.dev/docs/functions/box}
*/
function toReadonlyBox(b) {
	if (!isWritableBox(b)) return b;
	return {
		[BoxSymbol]: true,
		get current() {
			return b.current;
		}
	};
}
function simpleBox(initialValue) {
	let current = state(proxy(initialValue));
	return {
		[BoxSymbol]: true,
		[isWritableSymbol]: true,
		get current() {
			return get$2(current);
		},
		set current(v) {
			set(current, v, true);
		}
	};
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/box/box.svelte.js
function box(initialValue) {
	let current = state(proxy(initialValue));
	return {
		[BoxSymbol]: true,
		[isWritableSymbol]: true,
		get current() {
			return get$2(current);
		},
		set current(v) {
			set(current, v, true);
		}
	};
}
box.from = boxFrom;
box.with = boxWith;
box.flatten = boxFlatten;
box.readonly = toReadonlyBox;
box.isBox = isBox;
box.isWritableBox = isWritableBox;
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/compose-handlers.js
/**
* Composes event handlers into a single function that can be called with an event.
* If the previous handler cancels the event using `event.preventDefault()`, the handlers
* that follow will not be called.
*/
function composeHandlers(...handlers) {
	return function(e) {
		for (const handler of handlers) {
			if (!handler) continue;
			if (e.defaultPrevented) return;
			if (typeof handler === "function") handler.call(this, e);
			else handler.current?.call(this, e);
		}
	};
}
//#endregion
//#region node_modules/inline-style-parser/esm/index.mjs
var COMMENT_REGEX = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;
var NEWLINE_REGEX = /\n/g;
var WHITESPACE_REGEX = /^\s*/;
var PROPERTY_REGEX = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/;
var COLON_REGEX = /^:\s*/;
var VALUE_REGEX = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/;
var SEMICOLON_REGEX = /^[;\s]*/;
var TRIM_REGEX = /^\s+|\s+$/g;
var NEWLINE = "\n";
var FORWARD_SLASH = "/";
var ASTERISK = "*";
var EMPTY_STRING = "";
var TYPE_COMMENT = "comment";
var TYPE_DECLARATION = "declaration";
/**
* @param {String} style
* @param {Object} [options]
* @return {Object[]}
* @throws {TypeError}
* @throws {Error}
*/
function index(style, options) {
	if (typeof style !== "string") throw new TypeError("First argument must be a string");
	if (!style) return [];
	options = options || {};
	/**
	* Positional.
	*/
	var lineno = 1;
	var column = 1;
	/**
	* Update lineno and column based on `str`.
	*
	* @param {String} str
	*/
	function updatePosition(str) {
		var lines = str.match(NEWLINE_REGEX);
		if (lines) lineno += lines.length;
		var i = str.lastIndexOf(NEWLINE);
		column = ~i ? str.length - i : column + str.length;
	}
	/**
	* Mark position and patch `node.position`.
	*
	* @return {Function}
	*/
	function position() {
		var start = {
			line: lineno,
			column
		};
		return function(node) {
			node.position = new Position(start);
			whitespace();
			return node;
		};
	}
	/**
	* Store position information for a node.
	*
	* @constructor
	* @property {Object} start
	* @property {Object} end
	* @property {undefined|String} source
	*/
	function Position(start) {
		this.start = start;
		this.end = {
			line: lineno,
			column
		};
		this.source = options.source;
	}
	/**
	* Non-enumerable source string.
	*/
	Position.prototype.content = style;
	/**
	* Error `msg`.
	*
	* @param {String} msg
	* @throws {Error}
	*/
	function error(msg) {
		var err = /* @__PURE__ */ new Error(options.source + ":" + lineno + ":" + column + ": " + msg);
		err.reason = msg;
		err.filename = options.source;
		err.line = lineno;
		err.column = column;
		err.source = style;
		if (options.silent);
		else throw err;
	}
	/**
	* Match `re` and return captures.
	*
	* @param {RegExp} re
	* @return {undefined|Array}
	*/
	function match(re) {
		var m = re.exec(style);
		if (!m) return;
		var str = m[0];
		updatePosition(str);
		style = style.slice(str.length);
		return m;
	}
	/**
	* Parse whitespace.
	*/
	function whitespace() {
		match(WHITESPACE_REGEX);
	}
	/**
	* Parse comments.
	*
	* @param {Object[]} [rules]
	* @return {Object[]}
	*/
	function comments(rules) {
		var c;
		rules = rules || [];
		while (c = comment()) if (c !== false) rules.push(c);
		return rules;
	}
	/**
	* Parse comment.
	*
	* @return {Object}
	* @throws {Error}
	*/
	function comment() {
		var pos = position();
		if (FORWARD_SLASH != style.charAt(0) || ASTERISK != style.charAt(1)) return;
		var i = 2;
		while (EMPTY_STRING != style.charAt(i) && (ASTERISK != style.charAt(i) || FORWARD_SLASH != style.charAt(i + 1))) ++i;
		i += 2;
		if (EMPTY_STRING === style.charAt(i - 1)) return error("End of comment missing");
		var str = style.slice(2, i - 2);
		column += 2;
		updatePosition(str);
		style = style.slice(i);
		column += 2;
		return pos({
			type: TYPE_COMMENT,
			comment: str
		});
	}
	/**
	* Parse declaration.
	*
	* @return {Object}
	* @throws {Error}
	*/
	function declaration() {
		var pos = position();
		var prop = match(PROPERTY_REGEX);
		if (!prop) return;
		comment();
		if (!match(COLON_REGEX)) return error("property missing ':'");
		var val = match(VALUE_REGEX);
		var ret = pos({
			type: TYPE_DECLARATION,
			property: trim(prop[0].replace(COMMENT_REGEX, EMPTY_STRING)),
			value: val ? trim(val[0].replace(COMMENT_REGEX, EMPTY_STRING)) : EMPTY_STRING
		});
		match(SEMICOLON_REGEX);
		return ret;
	}
	/**
	* Parse declarations.
	*
	* @return {Object[]}
	*/
	function declarations() {
		var decls = [];
		comments(decls);
		var decl;
		while (decl = declaration()) if (decl !== false) {
			decls.push(decl);
			comments(decls);
		}
		return decls;
	}
	whitespace();
	return declarations();
}
/**
* Trim `str`.
*
* @param {String} str
* @return {String}
*/
function trim(str) {
	return str ? str.replace(TRIM_REGEX, EMPTY_STRING) : EMPTY_STRING;
}
//#endregion
//#region node_modules/style-to-object/esm/index.mjs
/**
* Parses inline style to object.
*
* @param style - Inline style.
* @param iterator - Iterator.
* @returns - Style object or null.
*
* @example Parsing inline style to object:
*
* ```js
* import parse from 'style-to-object';
* parse('line-height: 42;'); // { 'line-height': '42' }
* ```
*/
function StyleToObject(style, iterator) {
	let styleObject = null;
	if (!style || typeof style !== "string") return styleObject;
	const declarations = index(style);
	const hasIterator = typeof iterator === "function";
	declarations.forEach((declaration) => {
		if (declaration.type !== "declaration") return;
		const { property, value } = declaration;
		if (hasIterator) iterator(property, value, declaration);
		else if (value) {
			styleObject = styleObject || {};
			styleObject[property] = value;
		}
	});
	return styleObject;
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/strings.js
var NUMBER_CHAR_RE = /\d/;
var STR_SPLITTERS = [
	"-",
	"_",
	"/",
	"."
];
function isUppercase(char = "") {
	if (NUMBER_CHAR_RE.test(char)) return void 0;
	return char !== char.toLowerCase();
}
function splitByCase(str) {
	const parts = [];
	let buff = "";
	let previousUpper;
	let previousSplitter;
	for (const char of str) {
		const isSplitter = STR_SPLITTERS.includes(char);
		if (isSplitter === true) {
			parts.push(buff);
			buff = "";
			previousUpper = void 0;
			continue;
		}
		const isUpper = isUppercase(char);
		if (previousSplitter === false) {
			if (previousUpper === false && isUpper === true) {
				parts.push(buff);
				buff = char;
				previousUpper = isUpper;
				continue;
			}
			if (previousUpper === true && isUpper === false && buff.length > 1) {
				const lastChar = buff.at(-1);
				parts.push(buff.slice(0, Math.max(0, buff.length - 1)));
				buff = lastChar + char;
				previousUpper = isUpper;
				continue;
			}
		}
		buff += char;
		previousUpper = isUpper;
		previousSplitter = isSplitter;
	}
	parts.push(buff);
	return parts;
}
function pascalCase(str) {
	if (!str) return "";
	return splitByCase(str).map((p) => upperFirst(p)).join("");
}
function camelCase(str) {
	return lowerFirst(pascalCase(str || ""));
}
function upperFirst(str) {
	return str ? str[0].toUpperCase() + str.slice(1) : "";
}
function lowerFirst(str) {
	return str ? str[0].toLowerCase() + str.slice(1) : "";
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/css-to-style-obj.js
function cssToStyleObj(css) {
	if (!css) return {};
	const styleObj = {};
	function iterator(name, value) {
		if (name.startsWith("-moz-") || name.startsWith("-webkit-") || name.startsWith("-ms-") || name.startsWith("-o-")) {
			styleObj[pascalCase(name)] = value;
			return;
		}
		if (name.startsWith("--")) {
			styleObj[name] = value;
			return;
		}
		styleObj[camelCase(name)] = value;
	}
	StyleToObject(css, iterator);
	return styleObj;
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/execute-callbacks.js
/**
* Executes an array of callback functions with the same arguments.
* @template T The types of the arguments that the callback functions take.
* @param callbacks array of callback functions to execute.
* @returns A new function that executes all of the original callback functions with the same arguments.
*/
function executeCallbacks(...callbacks) {
	return (...args) => {
		for (const callback of callbacks) if (typeof callback === "function") callback(...args);
	};
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/style-to-css.js
function createParser(matcher, replacer) {
	const regex = RegExp(matcher, "g");
	return (str) => {
		if (typeof str !== "string") throw new TypeError(`expected an argument of type string, but got ${typeof str}`);
		if (!str.match(regex)) return str;
		return str.replace(regex, replacer);
	};
}
var camelToKebab = createParser(/[A-Z]/, (match) => `-${match.toLowerCase()}`);
function styleToCSS(styleObj) {
	if (!styleObj || typeof styleObj !== "object" || Array.isArray(styleObj)) throw new TypeError(`expected an argument of type object, but got ${typeof styleObj}`);
	return Object.keys(styleObj).map((property) => `${camelToKebab(property)}: ${styleObj[property]};`).join("\n");
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/style.js
function styleToString(style = {}) {
	return styleToCSS(style).replace("\n", " ");
}
var EVENT_LIST_SET = /* @__PURE__ */ new Set([
	"onabort",
	"onanimationcancel",
	"onanimationend",
	"onanimationiteration",
	"onanimationstart",
	"onauxclick",
	"onbeforeinput",
	"onbeforetoggle",
	"onblur",
	"oncancel",
	"oncanplay",
	"oncanplaythrough",
	"onchange",
	"onclick",
	"onclose",
	"oncompositionend",
	"oncompositionstart",
	"oncompositionupdate",
	"oncontextlost",
	"oncontextmenu",
	"oncontextrestored",
	"oncopy",
	"oncuechange",
	"oncut",
	"ondblclick",
	"ondrag",
	"ondragend",
	"ondragenter",
	"ondragleave",
	"ondragover",
	"ondragstart",
	"ondrop",
	"ondurationchange",
	"onemptied",
	"onended",
	"onerror",
	"onfocus",
	"onfocusin",
	"onfocusout",
	"onformdata",
	"ongotpointercapture",
	"oninput",
	"oninvalid",
	"onkeydown",
	"onkeypress",
	"onkeyup",
	"onload",
	"onloadeddata",
	"onloadedmetadata",
	"onloadstart",
	"onlostpointercapture",
	"onmousedown",
	"onmouseenter",
	"onmouseleave",
	"onmousemove",
	"onmouseout",
	"onmouseover",
	"onmouseup",
	"onpaste",
	"onpause",
	"onplay",
	"onplaying",
	"onpointercancel",
	"onpointerdown",
	"onpointerenter",
	"onpointerleave",
	"onpointermove",
	"onpointerout",
	"onpointerover",
	"onpointerup",
	"onprogress",
	"onratechange",
	"onreset",
	"onresize",
	"onscroll",
	"onscrollend",
	"onsecuritypolicyviolation",
	"onseeked",
	"onseeking",
	"onselect",
	"onselectionchange",
	"onselectstart",
	"onslotchange",
	"onstalled",
	"onsubmit",
	"onsuspend",
	"ontimeupdate",
	"ontoggle",
	"ontouchcancel",
	"ontouchend",
	"ontouchmove",
	"ontouchstart",
	"ontransitioncancel",
	"ontransitionend",
	"ontransitionrun",
	"ontransitionstart",
	"onvolumechange",
	"onwaiting",
	"onwebkitanimationend",
	"onwebkitanimationiteration",
	"onwebkitanimationstart",
	"onwebkittransitionend",
	"onwheel"
]);
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/merge-props.js
/**
* Modified from https://github.com/adobe/react-spectrum/blob/main/packages/%40react-aria/utils/src/mergeProps.ts (see NOTICE.txt for source)
*/
function isEventHandler(key) {
	return EVENT_LIST_SET.has(key);
}
/**
* Given a list of prop objects, merges them into a single object.
* - Automatically composes event handlers (e.g. `onclick`, `oninput`, etc.)
* - Chains regular functions with the same name so they are called in order
* - Merges class strings with `clsx`
* - Merges style objects and converts them to strings
* - Handles a bug with Svelte where setting the `hidden` attribute to `false` doesn't remove it
* - Overrides other values with the last one
*/
function mergeProps(...args) {
	const result = { ...args[0] };
	for (let i = 1; i < args.length; i++) {
		const props = args[i];
		if (!props) continue;
		for (const key of Object.keys(props)) {
			const a = result[key];
			const b = props[key];
			const aIsFunction = typeof a === "function";
			const bIsFunction = typeof b === "function";
			if (aIsFunction && typeof bIsFunction && isEventHandler(key)) result[key] = composeHandlers(a, b);
			else if (aIsFunction && bIsFunction) result[key] = executeCallbacks(a, b);
			else if (key === "class") {
				const aIsClassValue = isClassValue(a);
				const bIsClassValue = isClassValue(b);
				if (aIsClassValue && bIsClassValue) result[key] = clsx(a, b);
				else if (aIsClassValue) result[key] = clsx(a);
				else if (bIsClassValue) result[key] = clsx(b);
			} else if (key === "style") {
				const aIsObject = typeof a === "object";
				const bIsObject = typeof b === "object";
				const aIsString = typeof a === "string";
				const bIsString = typeof b === "string";
				if (aIsObject && bIsObject) result[key] = {
					...a,
					...b
				};
				else if (aIsObject && bIsString) {
					const parsedStyle = cssToStyleObj(b);
					result[key] = {
						...a,
						...parsedStyle
					};
				} else if (aIsString && bIsObject) result[key] = {
					...cssToStyleObj(a),
					...b
				};
				else if (aIsString && bIsString) {
					const parsedStyleA = cssToStyleObj(a);
					const parsedStyleB = cssToStyleObj(b);
					result[key] = {
						...parsedStyleA,
						...parsedStyleB
					};
				} else if (aIsObject) result[key] = a;
				else if (bIsObject) result[key] = b;
				else if (aIsString) result[key] = a;
				else if (bIsString) result[key] = b;
			} else result[key] = b !== void 0 ? b : a;
		}
		for (const key of Object.getOwnPropertySymbols(props)) {
			const a = result[key];
			const b = props[key];
			result[key] = b !== void 0 ? b : a;
		}
	}
	if (typeof result.style === "object") result.style = styleToString(result.style).replaceAll("\n", " ");
	if (result.hidden === false) {
		result.hidden = void 0;
		delete result.hidden;
	}
	if (result.disabled === false) {
		result.disabled = void 0;
		delete result.disabled;
	}
	return result;
}
//#endregion
//#region node_modules/runed/dist/internal/configurable-globals.js
var defaultWindow = typeof window !== "undefined" ? window : void 0;
typeof window !== "undefined" && window.document;
typeof window !== "undefined" && window.navigator;
typeof window !== "undefined" && window.location;
//#endregion
//#region node_modules/runed/dist/internal/utils/dom.js
/**
* Handles getting the active element in a document or shadow root.
* If the active element is within a shadow root, it will traverse the shadow root
* to find the active element.
* If not, it will return the active element in the document.
*
* @param document A document or shadow root to get the active element from.
* @returns The active element in the document or shadow root.
*/
function getActiveElement$1(document) {
	let activeElement = document.activeElement;
	while (activeElement?.shadowRoot) {
		const node = activeElement.shadowRoot.activeElement;
		if (node === activeElement) break;
		else activeElement = node;
	}
	return activeElement;
}
//#endregion
//#region node_modules/svelte/src/reactivity/map.js
/** @import { Source } from '#client' */
/**
* A reactive version of the built-in [`Map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) object.
* Reading contents of the map (by iterating, or by reading `map.size` or calling `map.get(...)` or `map.has(...)` as in the [tic-tac-toe example](https://svelte.dev/playground/0b0ff4aa49c9443f9b47fe5203c78293) below) in an [effect](https://svelte.dev/docs/svelte/$effect) or [derived](https://svelte.dev/docs/svelte/$derived)
* will cause it to be re-evaluated as necessary when the map is updated.
*
* Note that values in a reactive map are _not_ made [deeply reactive](https://svelte.dev/docs/svelte/$state#Deep-state).
*
* ```svelte
* <script>
* 	import { SvelteMap } from 'svelte/reactivity';
* 	import { result } from './game.js';
*
* 	let board = new SvelteMap();
* 	let player = $state('x');
* 	let winner = $derived(result(board));
*
* 	function reset() {
* 		player = 'x';
* 		board.clear();
* 	}
* <\/script>
*
* <div class="board">
* 	{#each Array(9), i}
* 		<button
* 			disabled={board.has(i) || winner}
* 			onclick={() => {
* 				board.set(i, player);
* 				player = player === 'x' ? 'o' : 'x';
* 			}}
* 		>{board.get(i)}</button>
* 	{/each}
* </div>
*
* {#if winner}
* 	<p>{winner} wins!</p>
* 	<button onclick={reset}>reset</button>
* {:else}
* 	<p>{player} is next</p>
* {/if}
* ```
*
* @template K
* @template V
* @extends {Map<K, V>}
*/
var SvelteMap = class extends Map {
	/** @type {Map<K, Source<number>>} */
	#sources = /* @__PURE__ */ new Map();
	#version = /* @__PURE__ */ state(0);
	#size = /* @__PURE__ */ state(0);
	#update_version = update_version || -1;
	/**
	* @param {Iterable<readonly [K, V]> | null | undefined} [value]
	*/
	constructor(value) {
		super();
		if (value) {
			for (var [key, v] of value) super.set(key, v);
			this.#size.v = super.size;
		}
	}
	/**
	* If the source is being created inside the same reaction as the SvelteMap instance,
	* we use `state` so that it will not be a dependency of the reaction. Otherwise we
	* use `source` so it will be.
	*
	* @template T
	* @param {T} value
	* @returns {Source<T>}
	*/
	#source(value) {
		return update_version === this.#update_version ? /* @__PURE__ */ state(value) : source(value);
	}
	/** @param {K} key */
	has(key) {
		var sources = this.#sources;
		var s = sources.get(key);
		if (s === void 0) if (super.has(key)) {
			s = this.#source(0);
			sources.set(key, s);
		} else {
			get$2(this.#version);
			return false;
		}
		get$2(s);
		return true;
	}
	/**
	* @param {(value: V, key: K, map: Map<K, V>) => void} callbackfn
	* @param {any} [this_arg]
	*/
	forEach(callbackfn, this_arg) {
		this.#read_all();
		super.forEach(callbackfn, this_arg);
	}
	/** @param {K} key */
	get(key) {
		var sources = this.#sources;
		var s = sources.get(key);
		if (s === void 0) if (super.has(key)) {
			s = this.#source(0);
			sources.set(key, s);
		} else {
			get$2(this.#version);
			return;
		}
		get$2(s);
		return super.get(key);
	}
	/**
	* @param {K} key
	* @param {V} value
	* */
	set(key, value) {
		var sources = this.#sources;
		var s = sources.get(key);
		var prev_res = super.get(key);
		var res = super.set(key, value);
		var version = this.#version;
		if (s === void 0) {
			s = this.#source(0);
			sources.set(key, s);
			set(this.#size, super.size);
			increment(version);
		} else if (prev_res !== value) {
			increment(s);
			var v_reactions = version.reactions === null ? null : new Set(version.reactions);
			if (v_reactions === null || !s.reactions?.every((r) => v_reactions.has(r))) increment(version);
		}
		return res;
	}
	/** @param {K} key */
	delete(key) {
		var sources = this.#sources;
		var s = sources.get(key);
		var res = super.delete(key);
		if (s !== void 0) {
			sources.delete(key);
			set(s, -1);
		}
		if (res) {
			set(this.#size, super.size);
			increment(this.#version);
		}
		return res;
	}
	clear() {
		if (super.size === 0) return;
		super.clear();
		var sources = this.#sources;
		set(this.#size, 0);
		for (var s of sources.values()) set(s, -1);
		increment(this.#version);
		sources.clear();
	}
	#read_all() {
		get$2(this.#version);
		var sources = this.#sources;
		if (this.#size.v !== sources.size) {
			for (var key of super.keys()) if (!sources.has(key)) {
				var s = this.#source(0);
				sources.set(key, s);
			}
		}
		for ([, s] of this.#sources) get$2(s);
	}
	keys() {
		get$2(this.#version);
		return super.keys();
	}
	values() {
		this.#read_all();
		return super.values();
	}
	entries() {
		this.#read_all();
		return super.entries();
	}
	[Symbol.iterator]() {
		return this.entries();
	}
	get size() {
		get$2(this.#size);
		return super.size;
	}
};
//#endregion
//#region node_modules/runed/dist/utilities/active-element/active-element.svelte.js
var ActiveElement = class {
	#document;
	#subscribe;
	constructor(options = {}) {
		const { window = defaultWindow, document = window?.document } = options;
		if (window === void 0) return;
		this.#document = document;
		this.#subscribe = createSubscriber((update) => {
			const cleanupFocusIn = on(window, "focusin", update);
			const cleanupFocusOut = on(window, "focusout", update);
			return () => {
				cleanupFocusIn();
				cleanupFocusOut();
			};
		});
	}
	get current() {
		this.#subscribe?.();
		if (!this.#document) return null;
		return getActiveElement$1(this.#document);
	}
};
new ActiveElement();
//#endregion
//#region node_modules/runed/dist/internal/utils/is.js
function isFunction(value) {
	return typeof value === "function";
}
//#endregion
//#region node_modules/runed/dist/utilities/context/context.js
var Context = class {
	#name;
	#key;
	/**
	* @param name The name of the context.
	* This is used for generating the context key and error messages.
	*/
	constructor(name) {
		this.#name = name;
		this.#key = Symbol(name);
	}
	/**
	* The key used to get and set the context.
	*
	* It is not recommended to use this value directly.
	* Instead, use the methods provided by this class.
	*/
	get key() {
		return this.#key;
	}
	/**
	* Checks whether this has been set in the context of a parent component.
	*
	* Must be called during component initialisation.
	*/
	exists() {
		return hasContext(this.#key);
	}
	/**
	* Retrieves the context that belongs to the closest parent component.
	*
	* Must be called during component initialisation.
	*
	* @throws An error if the context does not exist.
	*/
	get() {
		const context = getContext(this.#key);
		if (context === void 0) throw new Error(`Context "${this.#name}" not found`);
		return context;
	}
	/**
	* Retrieves the context that belongs to the closest parent component,
	* or the given fallback value if the context does not exist.
	*
	* Must be called during component initialisation.
	*/
	getOr(fallback) {
		const context = getContext(this.#key);
		if (context === void 0) return fallback;
		return context;
	}
	/**
	* Associates the given value with the current component and returns it.
	*
	* Must be called during component initialisation.
	*/
	set(context) {
		return setContext(this.#key, context);
	}
};
//#endregion
//#region node_modules/runed/dist/utilities/watch/watch.svelte.js
function runEffect(flush, effect) {
	switch (flush) {
		case "post":
			user_effect(effect);
			break;
		case "pre":
			user_pre_effect(effect);
			break;
	}
}
function runWatcher(sources, flush, effect, options = {}) {
	const { lazy = false } = options;
	let active = !lazy;
	let previousValues = Array.isArray(sources) ? [] : void 0;
	runEffect(flush, () => {
		const values = Array.isArray(sources) ? sources.map((source) => source()) : sources();
		if (!active) {
			active = true;
			previousValues = values;
			return;
		}
		const cleanup = untrack(() => effect(values, previousValues));
		previousValues = values;
		return cleanup;
	});
}
function runWatcherOnce(sources, flush, effect) {
	const cleanupRoot = effect_root(() => {
		let stop = false;
		runWatcher(sources, flush, (values, previousValues) => {
			if (stop) {
				cleanupRoot();
				return;
			}
			const cleanup = effect(values, previousValues);
			stop = true;
			return cleanup;
		}, { lazy: true });
	});
	user_effect(() => {
		return cleanupRoot;
	});
}
function watch(sources, effect, options) {
	runWatcher(sources, "post", effect, options);
}
function watchPre(sources, effect, options) {
	runWatcher(sources, "pre", effect, options);
}
watch.pre = watchPre;
function watchOnce(source, effect) {
	runWatcherOnce(source, "post", effect);
}
function watchOncePre(source, effect) {
	runWatcherOnce(source, "pre", effect);
}
watchOnce.pre = watchOncePre;
//#endregion
//#region node_modules/runed/dist/internal/utils/get.js
function get$1(value) {
	if (isFunction(value)) return value();
	return value;
}
//#endregion
//#region node_modules/runed/dist/utilities/element-size/element-size.svelte.js
var ElementSize = class {
	#size = {
		width: 0,
		height: 0
	};
	#observed = false;
	#options;
	#node;
	#window;
	#width = user_derived(() => {
		get$2(this.#subscribe)?.();
		return this.getSize().width;
	});
	#height = user_derived(() => {
		get$2(this.#subscribe)?.();
		return this.getSize().height;
	});
	#subscribe = user_derived(() => {
		const node$ = get$1(this.#node);
		if (!node$) return;
		return createSubscriber((update) => {
			if (!this.#window) return;
			const observer = new this.#window.ResizeObserver((entries) => {
				this.#observed = true;
				for (const entry of entries) {
					const boxSize = this.#options.box === "content-box" ? entry.contentBoxSize : entry.borderBoxSize;
					const boxSizeArr = Array.isArray(boxSize) ? boxSize : [boxSize];
					this.#size.width = boxSizeArr.reduce((acc, size) => Math.max(acc, size.inlineSize), 0);
					this.#size.height = boxSizeArr.reduce((acc, size) => Math.max(acc, size.blockSize), 0);
				}
				update();
			});
			observer.observe(node$);
			return () => {
				this.#observed = false;
				observer.disconnect();
			};
		});
	});
	constructor(node, options = { box: "border-box" }) {
		this.#window = options.window ?? defaultWindow;
		this.#options = options;
		this.#node = node;
		this.#size = {
			width: 0,
			height: 0
		};
	}
	calculateSize() {
		const element = get$1(this.#node);
		if (!element || !this.#window) return;
		const offsetWidth = element.offsetWidth;
		const offsetHeight = element.offsetHeight;
		if (this.#options.box === "border-box") return {
			width: offsetWidth,
			height: offsetHeight
		};
		const style = this.#window.getComputedStyle(element);
		const paddingWidth = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
		const paddingHeight = parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
		const borderWidth = parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);
		const borderHeight = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
		return {
			width: offsetWidth - paddingWidth - borderWidth,
			height: offsetHeight - paddingHeight - borderHeight
		};
	}
	getSize() {
		return this.#observed ? this.#size : this.calculateSize() ?? this.#size;
	}
	get current() {
		get$2(this.#subscribe)?.();
		return this.getSize();
	}
	get width() {
		return get$2(this.#width);
	}
	get height() {
		return get$2(this.#height);
	}
};
//#endregion
//#region node_modules/runed/dist/utilities/resource/resource.svelte.js
function debounce$1(fn, delay) {
	let timeoutId;
	let lastResolve = null;
	return (...args) => {
		return new Promise((resolve) => {
			if (lastResolve) lastResolve(void 0);
			lastResolve = resolve;
			clearTimeout(timeoutId);
			timeoutId = setTimeout(async () => {
				const result = await fn(...args);
				if (lastResolve) {
					lastResolve(result);
					lastResolve = null;
				}
			}, delay);
		});
	};
}
function throttle(fn, delay) {
	let lastRun = 0;
	let lastPromise = null;
	return (...args) => {
		const now = Date.now();
		if (lastRun && now - lastRun < delay) return lastPromise ?? Promise.resolve(void 0);
		lastRun = now;
		lastPromise = fn(...args);
		return lastPromise;
	};
}
function runResource(source, fetcher, options = {}, effectFn) {
	const { lazy = false, once = false, initialValue, debounce: debounceTime, throttle: throttleTime } = options;
	let current = state(proxy(initialValue));
	let loading = state(false);
	let error = state(void 0);
	let cleanupFns = state(proxy([]));
	const runCleanup = () => {
		get$2(cleanupFns).forEach((fn) => fn());
		set(cleanupFns, [], true);
	};
	const onCleanup = (fn) => {
		set(cleanupFns, [...get$2(cleanupFns), fn], true);
	};
	const baseFetcher = async (value, previousValue, refetching = false) => {
		try {
			set(loading, true);
			set(error, void 0);
			runCleanup();
			const controller = new AbortController();
			onCleanup(() => controller.abort());
			const result = await fetcher(value, previousValue, {
				data: get$2(current),
				refetching,
				onCleanup,
				signal: controller.signal
			});
			set(current, result, true);
			return result;
		} catch (e) {
			if (!(e instanceof DOMException && e.name === "AbortError")) set(error, e, true);
			return;
		} finally {
			set(loading, false);
		}
	};
	const runFetcher = debounceTime ? debounce$1(baseFetcher, debounceTime) : throttleTime ? throttle(baseFetcher, throttleTime) : baseFetcher;
	const sources = Array.isArray(source) ? source : [source];
	let prevValues;
	effectFn((values, previousValues) => {
		if (once && prevValues) return;
		prevValues = values;
		runFetcher(Array.isArray(source) ? values : values[0], Array.isArray(source) ? previousValues : previousValues?.[0]);
	}, { lazy });
	return {
		get current() {
			return get$2(current);
		},
		get loading() {
			return get$2(loading);
		},
		get error() {
			return get$2(error);
		},
		mutate: (value) => {
			set(current, value, true);
		},
		refetch: (info) => {
			const values = sources.map((s) => s());
			return runFetcher(Array.isArray(source) ? values : values[0], Array.isArray(source) ? values : values[0], info ?? true);
		}
	};
}
function resource(source, fetcher, options) {
	return runResource(source, fetcher, options, (fn, options) => {
		const sources = Array.isArray(source) ? source : [source];
		const getters = () => sources.map((s) => s());
		watch(getters, (values, previousValues) => {
			fn(values, previousValues ?? []);
		}, options);
	});
}
function resourcePre(source, fetcher, options) {
	return runResource(source, fetcher, options, (fn, options) => {
		const sources = Array.isArray(source) ? source : [source];
		const getter = () => sources.map((s) => s());
		watch.pre(getter, (values, previousValues) => {
			fn(values, previousValues ?? []);
		}, options);
	});
}
resource.pre = resourcePre;
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/on-destroy-effect.svelte.js
function onDestroyEffect(fn) {
	user_effect(() => {
		return () => {
			fn();
		};
	});
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/on-mount-effect.svelte.js
function onMountEffect(fn) {
	user_effect(() => {
		return untrack(() => fn());
	});
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/after-sleep.js
/**
* A utility function that executes a callback after a specified number of milliseconds.
*/
function afterSleep(ms, cb) {
	return setTimeout(cb, ms);
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/after-tick.js
function afterTick(fn) {
	tick().then(fn);
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/dom.js
var ELEMENT_NODE = 1;
var DOCUMENT_NODE = 9;
var DOCUMENT_FRAGMENT_NODE = 11;
function isHTMLElement$2(node) {
	return isObject(node) && node.nodeType === ELEMENT_NODE && typeof node.nodeName === "string";
}
function isDocument(node) {
	return isObject(node) && node.nodeType === DOCUMENT_NODE;
}
function isWindow(node) {
	return isObject(node) && node.constructor?.name === "VisualViewport";
}
function isNode$1(node) {
	return isObject(node) && node.nodeType !== void 0;
}
function isShadowRoot$1(node) {
	return isNode$1(node) && node.nodeType === DOCUMENT_FRAGMENT_NODE && "host" in node;
}
function contains(parent, child) {
	if (!parent || !child) return false;
	if (!isHTMLElement$2(parent) || !isHTMLElement$2(child)) return false;
	const rootNode = child.getRootNode?.();
	if (parent === child) return true;
	if (parent.contains(child)) return true;
	if (rootNode && isShadowRoot$1(rootNode)) {
		let next = child;
		while (next) {
			if (parent === next) return true;
			next = next.parentNode || next.host;
		}
	}
	return false;
}
function getDocument(node) {
	if (isDocument(node)) return node;
	if (isWindow(node)) return node.document;
	return node?.ownerDocument ?? document;
}
function getWindow$1(node) {
	if (isShadowRoot$1(node)) return getWindow$1(node.host);
	if (isDocument(node)) return node.defaultView ?? window;
	if (isHTMLElement$2(node)) return node.ownerDocument?.defaultView ?? window;
	return window;
}
function getActiveElement(rootNode) {
	let activeElement = rootNode.activeElement;
	while (activeElement?.shadowRoot) {
		const el = activeElement.shadowRoot.activeElement;
		if (el === activeElement) break;
		else activeElement = el;
	}
	return activeElement;
}
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/dom-context.svelte.js
var DOMContext = class {
	element;
	#root = user_derived(() => {
		if (!this.element.current) return document;
		return this.element.current.getRootNode() ?? document;
	});
	get root() {
		return get$2(this.#root);
	}
	set root(value) {
		set(this.#root, value);
	}
	constructor(element) {
		if (typeof element === "function") this.element = boxWith(element);
		else this.element = element;
	}
	getDocument = () => {
		return getDocument(this.root);
	};
	getWindow = () => {
		return this.getDocument().defaultView ?? window;
	};
	getActiveElement = () => {
		return getActiveElement(this.root);
	};
	isActiveElement = (node) => {
		return node === this.getActiveElement();
	};
	getElementById(id) {
		return this.root.getElementById(id);
	}
	querySelector = (selector) => {
		if (!this.root) return null;
		return this.root.querySelector(selector);
	};
	querySelectorAll = (selector) => {
		if (!this.root) return [];
		return this.root.querySelectorAll(selector);
	};
	setTimeout = (callback, delay) => {
		return this.getWindow().setTimeout(callback, delay);
	};
	clearTimeout = (timeoutId) => {
		return this.getWindow().clearTimeout(timeoutId);
	};
};
//#endregion
//#region node_modules/svelte-toolbelt/dist/utils/attach-ref.js
/**
* Creates a Svelte Attachment that attaches a DOM element to a ref.
* The ref can be either a WritableBox or a callback function.
*
* @param ref - Either a WritableBox to store the element in, or a callback function that receives the element
* @param onChange - Optional callback that fires when the ref changes
* @returns An object with a spreadable attachment key that should be spread onto the element
*
* @example
* // Using with WritableBox
* const ref = box<HTMLDivElement | null>(null);
* <div {...attachRef(ref)}>Content</div>
*
* @example
* // Using with callback
* <div {...attachRef((node) => myNode = node)}>Content</div>
*
* @example
* // Using with onChange
* <div {...attachRef(ref, (node) => console.log(node))}>Content</div>
*/
function attachRef(ref, onChange) {
	return { [createAttachmentKey()]: (node) => {
		if (isBox(ref)) {
			ref.current = node;
			untrack(() => onChange?.(node));
			return () => {
				if ("isConnected" in node && node.isConnected) return;
				ref.current = null;
				onChange?.(null);
			};
		}
		ref(node);
		untrack(() => onChange?.(node));
		return () => {
			if ("isConnected" in node && node.isConnected) return;
			ref(null);
			onChange?.(null);
		};
	} };
}
//#endregion
//#region node_modules/bits-ui/dist/internal/attrs.js
function boolToStr(condition) {
	return condition ? "true" : "false";
}
function boolToEmptyStrOrUndef(condition) {
	return condition ? "" : void 0;
}
function getDataOpenClosed(condition) {
	return condition ? "open" : "closed";
}
function getDataTransitionAttrs(state) {
	if (state === "starting") return { "data-starting-style": "" };
	if (state === "ending") return { "data-ending-style": "" };
	return {};
}
var BitsAttrs = class {
	#variant;
	#prefix;
	attrs;
	constructor(config) {
		this.#variant = config.getVariant ? config.getVariant() : null;
		this.#prefix = this.#variant ? `data-${this.#variant}-` : `data-${config.component}-`;
		this.getAttr = this.getAttr.bind(this);
		this.selector = this.selector.bind(this);
		this.attrs = Object.fromEntries(config.parts.map((part) => [part, this.getAttr(part)]));
	}
	getAttr(part, variantOverride) {
		if (variantOverride) return `data-${variantOverride}-${part}`;
		return `${this.#prefix}${part}`;
	}
	selector(part, variantOverride) {
		return `[${this.getAttr(part, variantOverride)}]`;
	}
};
function createBitsAttrs(config) {
	const bitsAttrs = new BitsAttrs(config);
	return {
		...bitsAttrs.attrs,
		selector: bitsAttrs.selector,
		getAttr: bitsAttrs.getAttr
	};
}
//#endregion
//#region node_modules/bits-ui/dist/internal/kbd-constants.js
var ARROW_DOWN = "ArrowDown";
var ARROW_LEFT = "ArrowLeft";
var ARROW_RIGHT = "ArrowRight";
var ARROW_UP = "ArrowUp";
var ENTER = "Enter";
var HOME = "Home";
var PAGE_DOWN = "PageDown";
var PAGE_UP = "PageUp";
//#endregion
//#region node_modules/bits-ui/dist/internal/locale.js
/**
* Detects the text direction in the element.
* @returns {Direction} The text direction ('ltr' for left-to-right or 'rtl' for right-to-left).
*/
function getElemDirection(elem) {
	return window.getComputedStyle(elem).getPropertyValue("direction");
}
//#endregion
//#region node_modules/bits-ui/dist/internal/get-directional-keys.js
var FIRST_KEYS$1 = [
	ARROW_DOWN,
	PAGE_UP,
	HOME
];
var LAST_KEYS$1 = [
	ARROW_UP,
	PAGE_DOWN,
	"End"
];
[...FIRST_KEYS$1, ...LAST_KEYS$1];
/**
* A utility function that returns the next key based on the direction and orientation.
*/
function getNextKey(dir = "ltr", orientation = "horizontal") {
	return {
		horizontal: dir === "rtl" ? ARROW_LEFT : ARROW_RIGHT,
		vertical: ARROW_DOWN
	}[orientation];
}
/**
* A utility function that returns the previous key based on the direction and orientation.
*/
function getPrevKey(dir = "ltr", orientation = "horizontal") {
	return {
		horizontal: dir === "rtl" ? ARROW_RIGHT : ARROW_LEFT,
		vertical: ARROW_UP
	}[orientation];
}
/**
* A utility function that returns the next and previous keys based on the direction
* and orientation.
*/
function getDirectionalKeys(dir = "ltr", orientation = "horizontal") {
	if (!["ltr", "rtl"].includes(dir)) dir = "ltr";
	if (!["horizontal", "vertical"].includes(orientation)) orientation = "horizontal";
	return {
		nextKey: getNextKey(dir, orientation),
		prevKey: getPrevKey(dir, orientation)
	};
}
//#endregion
//#region node_modules/bits-ui/dist/internal/is.js
var isBrowser = typeof document !== "undefined";
var isIOS = getIsIOS();
function getIsIOS() {
	return isBrowser && window?.navigator?.userAgent && (/iP(ad|hone|od)/.test(window.navigator.userAgent) || window?.navigator?.maxTouchPoints > 2 && /iPad|Macintosh/.test(window?.navigator.userAgent));
}
function isHTMLElement$1(element) {
	return element instanceof HTMLElement;
}
function isElement$1(element) {
	return element instanceof Element;
}
function isElementOrSVGElement(element) {
	return element instanceof Element || element instanceof SVGElement;
}
function isFocusVisible(element) {
	return element.matches(":focus-visible");
}
function isNotNull(value) {
	return value !== null;
}
/**
* Determines if the provided object is a valid `HTMLInputElement` with
* a `select` method available.
*/
function isSelectableInput(element) {
	return element instanceof HTMLInputElement && "select" in element;
}
//#endregion
//#region node_modules/bits-ui/dist/internal/roving-focus-group.js
var RovingFocusGroup = class {
	#opts;
	#currentTabStopId = box(null);
	constructor(opts) {
		this.#opts = opts;
	}
	getCandidateNodes() {
		if (!this.#opts.rootNode.current) return [];
		if (this.#opts.candidateSelector) return Array.from(this.#opts.rootNode.current.querySelectorAll(this.#opts.candidateSelector));
		else if (this.#opts.candidateAttr) return Array.from(this.#opts.rootNode.current.querySelectorAll(`[${this.#opts.candidateAttr}]:not([data-disabled])`));
		return [];
	}
	focusFirstCandidate() {
		const items = this.getCandidateNodes();
		if (!items.length) return;
		items[0]?.focus();
	}
	handleKeydown(node, e, both = false) {
		const rootNode = this.#opts.rootNode.current;
		if (!rootNode || !node) return;
		const items = this.getCandidateNodes();
		if (!items.length) return;
		const currentIndex = items.indexOf(node);
		const { nextKey, prevKey } = getDirectionalKeys(getElemDirection(rootNode), this.#opts.orientation.current);
		const loop = this.#opts.loop.current;
		const keyToIndex = {
			[nextKey]: currentIndex + 1,
			[prevKey]: currentIndex - 1,
			[HOME]: 0,
			["End"]: items.length - 1
		};
		if (both) {
			const altNextKey = nextKey === "ArrowDown" ? ARROW_RIGHT : ARROW_DOWN;
			const altPrevKey = prevKey === "ArrowUp" ? ARROW_LEFT : ARROW_UP;
			keyToIndex[altNextKey] = currentIndex + 1;
			keyToIndex[altPrevKey] = currentIndex - 1;
		}
		let itemIndex = keyToIndex[e.key];
		if (itemIndex === void 0) return;
		e.preventDefault();
		if (itemIndex < 0 && loop) itemIndex = items.length - 1;
		else if (itemIndex === items.length && loop) itemIndex = 0;
		const itemToFocus = items[itemIndex];
		if (!itemToFocus) return;
		itemToFocus.focus();
		this.#currentTabStopId.current = itemToFocus.id;
		this.#opts.onCandidateFocus?.(itemToFocus);
		return itemToFocus;
	}
	getTabIndex(node) {
		const items = this.getCandidateNodes();
		const anyActive = this.#currentTabStopId.current !== null;
		if (node && !anyActive && items[0] === node) {
			this.#currentTabStopId.current = node.id;
			return 0;
		} else if (node?.id === this.#currentTabStopId.current) return 0;
		return -1;
	}
	setCurrentTabStopId(id) {
		this.#currentTabStopId.current = id;
	}
	focusCurrentTabStop() {
		const currentTabStopId = this.#currentTabStopId.current;
		if (!currentTabStopId) return;
		const currentTabStop = this.#opts.rootNode.current?.querySelector(`#${currentTabStopId}`);
		if (!currentTabStop || !isHTMLElement$1(currentTabStop)) return;
		currentTabStop.focus();
	}
};
//#endregion
//#region node_modules/bits-ui/dist/internal/animations-complete.js
var AnimationsComplete = class {
	#opts;
	#currentFrame = null;
	#observer = null;
	#runId = 0;
	constructor(opts) {
		this.#opts = opts;
		onDestroyEffect(() => this.#cleanup());
	}
	#cleanup() {
		if (this.#currentFrame !== null) {
			window.cancelAnimationFrame(this.#currentFrame);
			this.#currentFrame = null;
		}
		this.#observer?.disconnect();
		this.#observer = null;
		this.#runId++;
	}
	run(fn) {
		this.#cleanup();
		const node = this.#opts.ref.current;
		if (!node) return;
		if (typeof node.getAnimations !== "function") {
			this.#executeCallback(fn);
			return;
		}
		const runId = this.#runId;
		const executeIfCurrent = () => {
			if (runId !== this.#runId) return;
			this.#executeCallback(fn);
		};
		const waitForAnimations = () => {
			if (runId !== this.#runId) return;
			const animations = node.getAnimations();
			if (animations.length === 0) {
				executeIfCurrent();
				return;
			}
			Promise.all(animations.map((animation) => animation.finished)).then(() => {
				executeIfCurrent();
			}).catch(() => {
				if (runId !== this.#runId) return;
				if (node.getAnimations().some((animation) => animation.pending || animation.playState !== "finished")) {
					waitForAnimations();
					return;
				}
				executeIfCurrent();
			});
		};
		const requestWaitForAnimations = () => {
			this.#currentFrame = window.requestAnimationFrame(() => {
				this.#currentFrame = null;
				waitForAnimations();
			});
		};
		if (!this.#opts.afterTick.current) {
			requestWaitForAnimations();
			return;
		}
		this.#currentFrame = window.requestAnimationFrame(() => {
			this.#currentFrame = null;
			const startingStyleAttr = "data-starting-style";
			if (!node.hasAttribute(startingStyleAttr)) {
				requestWaitForAnimations();
				return;
			}
			this.#observer = new MutationObserver(() => {
				if (runId !== this.#runId) return;
				if (node.hasAttribute(startingStyleAttr)) return;
				this.#observer?.disconnect();
				this.#observer = null;
				requestWaitForAnimations();
			});
			this.#observer.observe(node, {
				attributes: true,
				attributeFilter: [startingStyleAttr]
			});
		});
	}
	#executeCallback(fn) {
		const execute = () => {
			fn();
		};
		if (this.#opts.afterTick) afterTick(execute);
		else execute();
	}
};
//#endregion
//#region node_modules/bits-ui/dist/internal/presence-manager.svelte.js
var PresenceManager = class {
	#opts;
	#enabled;
	#afterAnimations;
	#shouldRender = state(false);
	#transitionStatus = state(void 0);
	#hasMounted = false;
	#transitionFrame = null;
	constructor(opts) {
		this.#opts = opts;
		set(this.#shouldRender, opts.open.current, true);
		this.#enabled = opts.enabled ?? true;
		this.#afterAnimations = new AnimationsComplete({
			ref: this.#opts.ref,
			afterTick: this.#opts.open
		});
		onDestroyEffect(() => this.#clearTransitionFrame());
		watch(() => this.#opts.open.current, (isOpen) => {
			if (!this.#hasMounted) {
				this.#hasMounted = true;
				return;
			}
			this.#clearTransitionFrame();
			if (!isOpen && this.#opts.shouldSkipExitAnimation?.()) {
				set(this.#shouldRender, false);
				set(this.#transitionStatus, void 0);
				this.#opts.onComplete?.();
				return;
			}
			if (isOpen) set(this.#shouldRender, true);
			set(this.#transitionStatus, isOpen ? "starting" : "ending", true);
			if (isOpen) this.#transitionFrame = window.requestAnimationFrame(() => {
				this.#transitionFrame = null;
				if (this.#opts.open.current) set(this.#transitionStatus, void 0);
			});
			if (!this.#enabled) {
				if (!isOpen) set(this.#shouldRender, false);
				set(this.#transitionStatus, void 0);
				this.#opts.onComplete?.();
				return;
			}
			this.#afterAnimations.run(() => {
				if (isOpen === this.#opts.open.current) {
					if (!this.#opts.open.current) set(this.#shouldRender, false);
					set(this.#transitionStatus, void 0);
					this.#opts.onComplete?.();
				}
			});
		});
	}
	get shouldRender() {
		return get$2(this.#shouldRender);
	}
	get transitionStatus() {
		return get$2(this.#transitionStatus);
	}
	#clearTransitionFrame() {
		if (this.#transitionFrame === null) return;
		window.cancelAnimationFrame(this.#transitionFrame);
		this.#transitionFrame = null;
	}
};
//#endregion
//#region node_modules/bits-ui/dist/internal/noop.js
/**
* A no operation function (does nothing)
*/
function noop() {}
//#endregion
//#region node_modules/bits-ui/dist/internal/create-id.js
function createId(prefixOrUid, uid) {
	if (uid === void 0) return `bits-${prefixOrUid}`;
	return `bits-${prefixOrUid}-${uid}`;
}
//#endregion
//#region node_modules/bits-ui/dist/bits/dialog/dialog.svelte.js
var dialogAttrs = createBitsAttrs({
	component: "dialog",
	parts: [
		"content",
		"trigger",
		"overlay",
		"title",
		"description",
		"close",
		"cancel",
		"action"
	]
});
var DialogRootContext = new Context("Dialog.Root | AlertDialog.Root");
var DialogRootState = class DialogRootState {
	static create(opts) {
		const parent = DialogRootContext.getOr(null);
		return DialogRootContext.set(new DialogRootState(opts, parent));
	}
	opts;
	#triggerNode = state(null);
	get triggerNode() {
		return get$2(this.#triggerNode);
	}
	set triggerNode(value) {
		set(this.#triggerNode, value, true);
	}
	#contentNode = state(null);
	get contentNode() {
		return get$2(this.#contentNode);
	}
	set contentNode(value) {
		set(this.#contentNode, value, true);
	}
	#overlayNode = state(null);
	get overlayNode() {
		return get$2(this.#overlayNode);
	}
	set overlayNode(value) {
		set(this.#overlayNode, value, true);
	}
	#descriptionNode = state(null);
	get descriptionNode() {
		return get$2(this.#descriptionNode);
	}
	set descriptionNode(value) {
		set(this.#descriptionNode, value, true);
	}
	#contentId = state(void 0);
	get contentId() {
		return get$2(this.#contentId);
	}
	set contentId(value) {
		set(this.#contentId, value, true);
	}
	#titleId = state(void 0);
	get titleId() {
		return get$2(this.#titleId);
	}
	set titleId(value) {
		set(this.#titleId, value, true);
	}
	#triggerId = state(void 0);
	get triggerId() {
		return get$2(this.#triggerId);
	}
	set triggerId(value) {
		set(this.#triggerId, value, true);
	}
	#descriptionId = state(void 0);
	get descriptionId() {
		return get$2(this.#descriptionId);
	}
	set descriptionId(value) {
		set(this.#descriptionId, value, true);
	}
	#cancelNode = state(null);
	get cancelNode() {
		return get$2(this.#cancelNode);
	}
	set cancelNode(value) {
		set(this.#cancelNode, value, true);
	}
	#nestedOpenCount = state(0);
	get nestedOpenCount() {
		return get$2(this.#nestedOpenCount);
	}
	set nestedOpenCount(value) {
		set(this.#nestedOpenCount, value, true);
	}
	depth;
	parent;
	contentPresence;
	overlayPresence;
	constructor(opts, parent) {
		this.opts = opts;
		this.parent = parent;
		this.depth = parent ? parent.depth + 1 : 0;
		this.handleOpen = this.handleOpen.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.contentPresence = new PresenceManager({
			ref: boxWith(() => this.contentNode),
			open: this.opts.open,
			enabled: true,
			onComplete: () => {
				this.opts.onOpenChangeComplete.current(this.opts.open.current);
			}
		});
		this.overlayPresence = new PresenceManager({
			ref: boxWith(() => this.overlayNode),
			open: this.opts.open,
			enabled: true
		});
		watch(() => this.opts.open.current, (isOpen) => {
			if (!this.parent) return;
			if (isOpen) this.parent.incrementNested();
			else this.parent.decrementNested();
		}, { lazy: true });
		onDestroyEffect(() => {
			if (this.opts.open.current) this.parent?.decrementNested();
		});
	}
	handleOpen() {
		if (this.opts.open.current) return;
		this.opts.open.current = true;
	}
	handleClose() {
		if (!this.opts.open.current) return;
		this.opts.open.current = false;
	}
	getBitsAttr = (part) => {
		return dialogAttrs.getAttr(part, this.opts.variant.current);
	};
	incrementNested() {
		this.nestedOpenCount++;
		this.parent?.incrementNested();
	}
	decrementNested() {
		if (this.nestedOpenCount === 0) return;
		this.nestedOpenCount--;
		this.parent?.decrementNested();
	}
	#sharedProps = user_derived(() => ({ "data-state": getDataOpenClosed(this.opts.open.current) }));
	get sharedProps() {
		return get$2(this.#sharedProps);
	}
	set sharedProps(value) {
		set(this.#sharedProps, value);
	}
};
var DialogCloseState = class DialogCloseState {
	static create(opts) {
		return new DialogCloseState(opts, DialogRootContext.get());
	}
	opts;
	root;
	attachment;
	constructor(opts, root) {
		this.opts = opts;
		this.root = root;
		this.attachment = attachRef(this.opts.ref);
		this.onclick = this.onclick.bind(this);
		this.onkeydown = this.onkeydown.bind(this);
	}
	onclick(e) {
		if (this.opts.disabled.current) return;
		if (e.button > 0) return;
		this.root.handleClose();
	}
	onkeydown(e) {
		if (this.opts.disabled.current) return;
		if (e.key === " " || e.key === "Enter") {
			e.preventDefault();
			this.root.handleClose();
		}
	}
	#props = user_derived(() => ({
		id: this.opts.id.current,
		[this.root.getBitsAttr(this.opts.variant.current)]: "",
		onclick: this.onclick,
		onkeydown: this.onkeydown,
		disabled: this.opts.disabled.current ? true : void 0,
		tabindex: 0,
		...this.root.sharedProps,
		...this.attachment
	}));
	get props() {
		return get$2(this.#props);
	}
	set props(value) {
		set(this.#props, value);
	}
};
var DialogTitleState = class DialogTitleState {
	static create(opts) {
		return new DialogTitleState(opts, DialogRootContext.get());
	}
	opts;
	root;
	attachment;
	constructor(opts, root) {
		this.opts = opts;
		this.root = root;
		this.root.titleId = this.opts.id.current;
		this.attachment = attachRef(this.opts.ref);
		watch.pre(() => this.opts.id.current, (id) => {
			this.root.titleId = id;
		});
	}
	#props = user_derived(() => ({
		id: this.opts.id.current,
		role: "heading",
		"aria-level": this.opts.level.current,
		[this.root.getBitsAttr("title")]: "",
		...this.root.sharedProps,
		...this.attachment
	}));
	get props() {
		return get$2(this.#props);
	}
	set props(value) {
		set(this.#props, value);
	}
};
var DialogContentState = class DialogContentState {
	static create(opts) {
		return new DialogContentState(opts, DialogRootContext.get());
	}
	opts;
	root;
	attachment;
	constructor(opts, root) {
		this.opts = opts;
		this.root = root;
		this.attachment = attachRef(this.opts.ref, (v) => {
			this.root.contentNode = v;
			this.root.contentId = v?.id;
		});
	}
	#snippetProps = user_derived(() => ({ open: this.root.opts.open.current }));
	get snippetProps() {
		return get$2(this.#snippetProps);
	}
	set snippetProps(value) {
		set(this.#snippetProps, value);
	}
	#props = user_derived(() => ({
		id: this.opts.id.current,
		role: this.root.opts.variant.current === "alert-dialog" ? "alertdialog" : "dialog",
		"aria-modal": "true",
		"aria-describedby": this.root.descriptionId,
		"aria-labelledby": this.root.titleId,
		[this.root.getBitsAttr("content")]: "",
		style: {
			pointerEvents: "auto",
			outline: this.root.opts.variant.current === "alert-dialog" ? "none" : void 0,
			"--bits-dialog-depth": this.root.depth,
			"--bits-dialog-nested-count": this.root.nestedOpenCount,
			contain: "layout style"
		},
		tabindex: this.root.opts.variant.current === "alert-dialog" ? -1 : void 0,
		"data-nested-open": boolToEmptyStrOrUndef(this.root.nestedOpenCount > 0),
		"data-nested": boolToEmptyStrOrUndef(this.root.parent !== null),
		...getDataTransitionAttrs(this.root.contentPresence.transitionStatus),
		...this.root.sharedProps,
		...this.attachment
	}));
	get props() {
		return get$2(this.#props);
	}
	set props(value) {
		set(this.#props, value);
	}
	get shouldRender() {
		return this.root.contentPresence.shouldRender;
	}
};
var DialogOverlayState = class DialogOverlayState {
	static create(opts) {
		return new DialogOverlayState(opts, DialogRootContext.get());
	}
	opts;
	root;
	attachment;
	constructor(opts, root) {
		this.opts = opts;
		this.root = root;
		this.attachment = attachRef(this.opts.ref, (v) => this.root.overlayNode = v);
	}
	#snippetProps = user_derived(() => ({ open: this.root.opts.open.current }));
	get snippetProps() {
		return get$2(this.#snippetProps);
	}
	set snippetProps(value) {
		set(this.#snippetProps, value);
	}
	#props = user_derived(() => ({
		id: this.opts.id.current,
		[this.root.getBitsAttr("overlay")]: "",
		style: {
			pointerEvents: "auto",
			"--bits-dialog-depth": this.root.depth,
			"--bits-dialog-nested-count": this.root.nestedOpenCount
		},
		"data-nested-open": boolToEmptyStrOrUndef(this.root.nestedOpenCount > 0),
		"data-nested": boolToEmptyStrOrUndef(this.root.parent !== null),
		...getDataTransitionAttrs(this.root.overlayPresence.transitionStatus),
		...this.root.sharedProps,
		...this.attachment
	}));
	get props() {
		return get$2(this.#props);
	}
	set props(value) {
		set(this.#props, value);
	}
	get shouldRender() {
		return this.root.overlayPresence.shouldRender;
	}
};
//#endregion
//#region node_modules/bits-ui/dist/bits/dialog/components/dialog-title.svelte
var rest_excludes$42 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"id",
	"ref",
	"child",
	"children",
	"level"
]);
var root$28 = from_html(`<div><!></div>`);
function Dialog_title($$anchor, $$props) {
	const uid = props_id();
	push($$props, true);
	let id = prop($$props, "id", 19, () => createId(uid)), ref = prop($$props, "ref", 15, null), level = prop($$props, "level", 3, 2), restProps = rest_props($$props, rest_excludes$42);
	const titleState = DialogTitleState.create({
		id: boxWith(() => id()),
		level: boxWith(() => level()),
		ref: boxWith(() => ref(), (v) => ref(v))
	});
	const mergedProps = user_derived(() => mergeProps(restProps, titleState.props));
	var fragment = comment();
	var node = first_child(fragment);
	var consequent = ($$anchor) => {
		var fragment_1 = comment();
		snippet(first_child(fragment_1), () => $$props.child, () => ({ props: get$2(mergedProps) }));
		append($$anchor, fragment_1);
	};
	var alternate = ($$anchor) => {
		var div = root$28();
		attribute_effect(div, () => ({ ...get$2(mergedProps) }));
		snippet(child(div), () => $$props.children ?? noop$1);
		reset(div);
		append($$anchor, div);
	};
	if_block(node, ($$render) => {
		if ($$props.child) $$render(consequent);
		else $$render(alternate, -1);
	});
	append($$anchor, fragment);
	pop();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/portal/portal-consumer.svelte
function Portal_consumer($$anchor, $$props) {
	var fragment = comment();
	key(first_child(fragment), () => $$props.children, ($$anchor) => {
		var fragment_1 = comment();
		snippet(first_child(fragment_1), () => $$props.children ?? noop$1);
		append($$anchor, fragment_1);
	});
	append($$anchor, fragment);
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/config/bits-config.js
var BitsConfigContext = new Context("BitsConfig");
/**
* Gets the current Bits UI configuration state from the context.
*
* Returns a default configuration (where all values are `undefined`) if no configuration is found.
*/
function getBitsConfig() {
	const fallback = new BitsConfigState(null, {});
	return BitsConfigContext.getOr(fallback).opts;
}
/**
* Configuration state that inherits from parent configurations.
*
* @example
* Config resolution:
* ```
* Level 1: { defaultPortalTo: "#some-element", theme: "dark" }
* Level 2: { spacing: "large" } // inherits defaultPortalTo="#some-element", theme="dark"
* Level 3: { theme: "light" }   // inherits defaultPortalTo="#some-element", spacing="large", overrides theme="light"
* ```
*/
var BitsConfigState = class {
	opts;
	constructor(parent, opts) {
		const resolveConfigOption = createConfigResolver(parent, opts);
		this.opts = {
			defaultPortalTo: resolveConfigOption((config) => config.defaultPortalTo),
			defaultLocale: resolveConfigOption((config) => config.defaultLocale)
		};
	}
};
/**
* Returns a config resolver that resolves a given config option's value.
*
* The resolver creates reactive boxes that resolve config option values using this priority:
* 1. Current level's value (if defined)
* 2. Parent level's value (if defined and current is undefined)
* 3. `undefined` (if no value is found in either parent or child)
*
* @param parent - Parent configuration state (null if this is root level)
* @param currentOpts - Current level's configuration options
*
* @example
* ```typescript
* // Given this hierarchy:
* // Root: { defaultPortalTo: "#some-element" }
* // Child: { someOtherProp: "value" } // no defaultPortalTo specified
*
* const resolveConfigOption = createConfigResolver(parent, opts);
* const portalTo = resolveConfigOption(config => config.defaultPortalTo);
*
* // portalTo.current === "#some-element" (inherited from parent)
* // even when child didn't specify `defaultPortalTo`
* ```
*/
function createConfigResolver(parent, currentOpts) {
	return (getter) => {
		return boxWith(() => {
			const value = getter(currentOpts)?.current;
			if (value !== void 0) return value;
			if (parent === null) return void 0;
			return getter(parent.opts)?.current;
		});
	};
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/config/prop-resolvers.js
/**
* Creates a generic prop resolver that follows a standard priority chain:
* 1. The getter's prop value (if defined)
* 2. The config default value (if no getter prop value is defined)
* 3. The fallback value (if no config value found)
*/
function createPropResolver(configOption, fallback) {
	return (getProp) => {
		const config = getBitsConfig();
		return boxWith(() => {
			const propValue = getProp();
			if (propValue !== void 0) return propValue;
			const option = configOption(config).current;
			if (option !== void 0) return option;
			return fallback;
		});
	};
}
/**
* Resolves a portal's `to` value using the prop, the config default, or a fallback.
*
* Default value: `"body"`
*/
var resolvePortalToProp = createPropResolver((config) => config.defaultPortalTo, "body");
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/portal/portal.svelte
function Portal($$anchor, $$props) {
	push($$props, true);
	const to = resolvePortalToProp(() => $$props.to);
	const context = getAllContexts();
	let target = user_derived(getTarget);
	function getTarget() {
		if (!isBrowser || $$props.disabled) return null;
		let localTarget = null;
		if (typeof to.current === "string") localTarget = document.querySelector(to.current);
		else localTarget = to.current;
		return localTarget;
	}
	let instance;
	function unmountInstance() {
		if (instance) {
			unmount(instance);
			instance = null;
		}
	}
	watch([() => get$2(target), () => $$props.disabled], ([target, disabled]) => {
		if (!target || disabled) {
			unmountInstance();
			return;
		}
		instance = mount(Portal_consumer, {
			target,
			props: { children: $$props.children },
			context
		});
		return () => {
			unmountInstance();
		};
	});
	var fragment = comment();
	var node = first_child(fragment);
	var consequent = ($$anchor) => {
		var fragment_1 = comment();
		snippet(first_child(fragment_1), () => $$props.children ?? noop$1);
		append($$anchor, fragment_1);
	};
	if_block(node, ($$render) => {
		if ($$props.disabled) $$render(consequent);
	});
	append($$anchor, fragment);
	pop();
}
//#endregion
//#region node_modules/bits-ui/dist/internal/events.js
/**
* Creates a typed event dispatcher and listener pair for custom events
* @template T - The type of data that will be passed in the event detail
* @param eventName - The name of the custom event
* @param options - CustomEvent options (bubbles, cancelable, etc.)
*/
var CustomEventDispatcher = class {
	eventName;
	options;
	constructor(eventName, options = {
		bubbles: true,
		cancelable: true
	}) {
		this.eventName = eventName;
		this.options = options;
	}
	createEvent(detail) {
		return new CustomEvent(this.eventName, {
			...this.options,
			detail
		});
	}
	dispatch(element, detail) {
		const event = this.createEvent(detail);
		element.dispatchEvent(event);
		return event;
	}
	listen(element, callback, options) {
		const handler = (event) => {
			callback(event);
		};
		return on(element, this.eventName, handler, options);
	}
};
//#endregion
//#region node_modules/bits-ui/dist/internal/debounce.js
function debounce(fn, wait = 500) {
	let timeout = null;
	const debounced = (...args) => {
		if (timeout !== null) clearTimeout(timeout);
		timeout = setTimeout(() => {
			fn(...args);
		}, wait);
	};
	debounced.destroy = () => {
		if (timeout !== null) {
			clearTimeout(timeout);
			timeout = null;
		}
	};
	return debounced;
}
//#endregion
//#region node_modules/bits-ui/dist/internal/elements.js
function isOrContainsTarget(node, target) {
	return node === target || node.contains(target);
}
function getOwnerDocument(el) {
	return el?.ownerDocument ?? document;
}
//#endregion
//#region node_modules/bits-ui/dist/internal/dom.js
/**
* Determines if the click event truly occurred outside the content node.
* This was added to handle password managers and other elements that may be injected
* into the DOM but visually appear inside the content.
*/
function isClickTrulyOutside(event, contentNode) {
	const { clientX, clientY } = event;
	const rect = contentNode.getBoundingClientRect();
	return clientX < rect.left || clientX > rect.right || clientY < rect.top || clientY > rect.bottom;
}
//#endregion
//#region node_modules/bits-ui/dist/bits/menu/utils.js
var SELECTION_KEYS = [ENTER, " "];
var FIRST_KEYS = [
	ARROW_DOWN,
	PAGE_UP,
	HOME
];
var LAST_KEYS = [
	ARROW_UP,
	PAGE_DOWN,
	"End"
];
var FIRST_LAST_KEYS = [...FIRST_KEYS, ...LAST_KEYS];
[...SELECTION_KEYS], [...SELECTION_KEYS];
function isMouseEvent(event) {
	return event.pointerType === "mouse";
}
//#endregion
//#region node_modules/bits-ui/dist/internal/focus.js
/**
* A utility function that focuses an element.
*/
function focus(element, { select = false } = {}) {
	if (!element || !element.focus) return;
	const doc = getDocument(element);
	if (doc.activeElement === element) return;
	const previouslyFocusedElement = doc.activeElement;
	element.focus({ preventScroll: true });
	if (element !== previouslyFocusedElement && isSelectableInput(element) && select) element.select();
}
/**
* Attempts to focus the first element in a list of candidates.
* Stops when focus is successful.
*/
function focusFirst(candidates, { select = false } = {}, getActiveElement) {
	const previouslyFocusedElement = getActiveElement();
	for (const candidate of candidates) {
		focus(candidate, { select });
		if (getActiveElement() !== previouslyFocusedElement) return true;
	}
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/is-using-keyboard/is-using-keyboard.svelte.js
var isUsingKeyboard = state(false);
var IsUsingKeyboard = class IsUsingKeyboard {
	static _refs = 0;
	static _cleanup;
	constructor() {
		user_effect(() => {
			if (IsUsingKeyboard._refs === 0) IsUsingKeyboard._cleanup = effect_root(() => {
				const callbacksToDispose = [];
				const handlePointer = (_) => {
					set(isUsingKeyboard, false);
				};
				const handleKeydown = (_) => {
					set(isUsingKeyboard, true);
				};
				callbacksToDispose.push(on(document, "pointerdown", handlePointer, { capture: true }), on(document, "pointermove", handlePointer, { capture: true }), on(document, "keydown", handleKeydown, { capture: true }));
				return executeCallbacks(...callbacksToDispose);
			});
			IsUsingKeyboard._refs++;
			return () => {
				IsUsingKeyboard._refs--;
				if (IsUsingKeyboard._refs === 0) {
					set(isUsingKeyboard, false);
					IsUsingKeyboard._cleanup?.();
				}
			};
		});
	}
	get current() {
		return get$2(isUsingKeyboard);
	}
	set current(value) {
		set(isUsingKeyboard, value, true);
	}
};
//#endregion
//#region node_modules/tabbable/dist/index.esm.js
/*!
* tabbable 6.5.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var candidateSelectors = [
	"input:not([inert]):not([inert] *)",
	"select:not([inert]):not([inert] *)",
	"textarea:not([inert]):not([inert] *)",
	"a[href]:not([inert]):not([inert] *)",
	"area[href]:not([inert]):not([inert] *)",
	"button:not([inert]):not([inert] *)",
	"[tabindex]:not(slot):not([inert]):not([inert] *)",
	"audio[controls]:not([inert]):not([inert] *)",
	"video[controls]:not([inert]):not([inert] *)",
	"[contenteditable]:not([contenteditable=\"false\"]):not([inert]):not([inert] *)",
	"details>summary:first-of-type:not([inert]):not([inert] *)",
	"details:not([inert]):not([inert] *)"
];
var candidateSelector = /* #__PURE__ */ candidateSelectors.join(",");
var NoElement = typeof Element === "undefined";
var matches = NoElement ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
var getRootNode = !NoElement && Element.prototype.getRootNode ? function(element) {
	var _element$getRootNode;
	return element === null || element === void 0 ? void 0 : (_element$getRootNode = element.getRootNode) === null || _element$getRootNode === void 0 ? void 0 : _element$getRootNode.call(element);
} : function(element) {
	return element === null || element === void 0 ? void 0 : element.ownerDocument;
};
/**
* Determines if a node is inert or in an inert ancestor.
* @param {Node} [node]
* @param {boolean} [lookUp] If true and `node` is not inert, looks up at ancestors to
*  see if any of them are inert. If false, only `node` itself is considered.
* @returns {boolean} True if inert itself or by way of being in an inert ancestor.
*  False if `node` is falsy.
*/
var _isInert = function isInert(node, lookUp) {
	var _node$getAttribute;
	if (lookUp === void 0) lookUp = true;
	var inertAtt = node === null || node === void 0 ? void 0 : (_node$getAttribute = node.getAttribute) === null || _node$getAttribute === void 0 ? void 0 : _node$getAttribute.call(node, "inert");
	return inertAtt === "" || inertAtt === "true" || lookUp && node && (typeof node.closest === "function" ? node.closest("[inert]") : _isInert(node.parentNode));
};
/**
* Determines if a node's content is editable.
* @param {Element} [node]
* @returns True if it's content-editable; false if it's not or `node` is falsy.
*/
var isContentEditable = function isContentEditable(node) {
	var _node$getAttribute2;
	var attValue = node === null || node === void 0 ? void 0 : (_node$getAttribute2 = node.getAttribute) === null || _node$getAttribute2 === void 0 ? void 0 : _node$getAttribute2.call(node, "contenteditable");
	return attValue === "" || attValue === "true";
};
/**
* @param {Element} el container to check in
* @param {boolean} includeContainer add container to check
* @param {(node: Element) => boolean} filter filter candidates
* @returns {Element[]}
*/
var getCandidates = function getCandidates(el, includeContainer, filter) {
	if (_isInert(el)) return [];
	var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));
	if (includeContainer && matches.call(el, candidateSelector)) candidates.unshift(el);
	candidates = candidates.filter(filter);
	return candidates;
};
/**
* @callback GetShadowRoot
* @param {Element} element to check for shadow root
* @returns {ShadowRoot|boolean} ShadowRoot if available or boolean indicating if a shadowRoot is attached but not available.
*/
/**
* @callback ShadowRootFilter
* @param {Element} shadowHostNode the element which contains shadow content
* @returns {boolean} true if a shadow root could potentially contain valid candidates.
*/
/**
* @typedef {Object} CandidateScope
* @property {Element} scopeParent contains inner candidates
* @property {Element[]} candidates list of candidates found in the scope parent
*/
/**
* @typedef {Object} IterativeOptions
* @property {GetShadowRoot|boolean} getShadowRoot true if shadow support is enabled; falsy if not;
*  if a function, implies shadow support is enabled and either returns the shadow root of an element
*  or a boolean stating if it has an undisclosed shadow root
* @property {(node: Element) => boolean} filter filter candidates
* @property {boolean} flatten if true then result will flatten any CandidateScope into the returned list
* @property {ShadowRootFilter} shadowRootFilter filter shadow roots;
*/
/**
* @param {Element[]} elements list of element containers to match candidates from
* @param {boolean} includeContainer add container list to check
* @param {IterativeOptions} options
* @returns {Array.<Element|CandidateScope>}
*/
var _getCandidatesIteratively = function getCandidatesIteratively(elements, includeContainer, options) {
	var candidates = [];
	var elementsToCheck = Array.from(elements);
	while (elementsToCheck.length) {
		var element = elementsToCheck.shift();
		if (_isInert(element, false)) continue;
		if (element.tagName === "SLOT") {
			var assigned = element.assignedElements();
			var nestedCandidates = _getCandidatesIteratively(assigned.length ? assigned : element.children, true, options);
			if (options.flatten) candidates.push.apply(candidates, nestedCandidates);
			else candidates.push({
				scopeParent: element,
				candidates: nestedCandidates
			});
		} else {
			if (matches.call(element, candidateSelector) && options.filter(element) && (includeContainer || !elements.includes(element))) candidates.push(element);
			var shadowRoot = element.shadowRoot || typeof options.getShadowRoot === "function" && options.getShadowRoot(element);
			var validShadowRoot = !_isInert(shadowRoot, false) && (!options.shadowRootFilter || options.shadowRootFilter(element));
			if (shadowRoot && validShadowRoot) {
				var _nestedCandidates = _getCandidatesIteratively(shadowRoot === true ? element.children : shadowRoot.children, true, options);
				if (options.flatten) candidates.push.apply(candidates, _nestedCandidates);
				else candidates.push({
					scopeParent: element,
					candidates: _nestedCandidates
				});
			} else elementsToCheck.unshift.apply(elementsToCheck, element.children);
		}
	}
	return candidates;
};
/**
* @private
* Determines if the node has an explicitly specified `tabindex` attribute.
* @param {HTMLElement} node
* @returns {boolean} True if so; false if not.
*/
var hasTabIndex = function hasTabIndex(node) {
	return !isNaN(parseInt(node.getAttribute("tabindex"), 10));
};
/**
* Determine the tab index of a given node.
* @param {HTMLElement} node
* @returns {number} Tab order (negative, 0, or positive number).
* @throws {Error} If `node` is falsy.
*/
var getTabIndex = function getTabIndex(node) {
	if (!node) throw new Error("No node provided");
	if (node.tabIndex < 0) {
		if ((/^(AUDIO|VIDEO|DETAILS)$/.test(node.tagName) || isContentEditable(node)) && !hasTabIndex(node)) return 0;
	}
	return node.tabIndex;
};
/**
* Determine the tab index of a given node __for sort order purposes__.
* @param {HTMLElement} node
* @param {boolean} [isScope] True for a custom element with shadow root or slot that, by default,
*  has tabIndex -1, but needs to be sorted by document order in order for its content to be
*  inserted into the correct sort position.
* @returns {number} Tab order (negative, 0, or positive number).
*/
var getSortOrderTabIndex = function getSortOrderTabIndex(node, isScope) {
	var tabIndex = getTabIndex(node);
	if (tabIndex < 0 && isScope && !hasTabIndex(node)) return 0;
	return tabIndex;
};
var sortOrderedTabbables = function sortOrderedTabbables(a, b) {
	return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
};
var isInput = function isInput(node) {
	return node.tagName === "INPUT";
};
var isHiddenInput = function isHiddenInput(node) {
	return isInput(node) && node.type === "hidden";
};
var isDetailsWithSummary = function isDetailsWithSummary(node) {
	return node.tagName === "DETAILS" && Array.prototype.slice.apply(node.children).some(function(child) {
		return child.tagName === "SUMMARY";
	});
};
var getCheckedRadio = function getCheckedRadio(nodes, form) {
	for (var i = 0; i < nodes.length; i++) if (nodes[i].checked && nodes[i].form === form) return nodes[i];
};
var isTabbableRadio = function isTabbableRadio(node) {
	if (!node.name) return true;
	var radioScope = node.form || getRootNode(node);
	var queryRadios = function queryRadios(name) {
		return radioScope.querySelectorAll("input[type=\"radio\"][name=\"" + name + "\"]");
	};
	var radioSet;
	if (typeof window !== "undefined" && typeof window.CSS !== "undefined" && typeof window.CSS.escape === "function") radioSet = queryRadios(window.CSS.escape(node.name));
	else try {
		radioSet = queryRadios(node.name);
	} catch (err) {
		console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", err.message);
		return false;
	}
	var checked = getCheckedRadio(radioSet, node.form);
	return !checked || checked === node;
};
var isRadio = function isRadio(node) {
	return isInput(node) && node.type === "radio";
};
var isNonTabbableRadio = function isNonTabbableRadio(node) {
	return isRadio(node) && !isTabbableRadio(node);
};
var isNodeAttached = function isNodeAttached(node) {
	var _nodeRoot;
	var nodeRoot = node && getRootNode(node);
	var nodeRootHost = (_nodeRoot = nodeRoot) === null || _nodeRoot === void 0 ? void 0 : _nodeRoot.host;
	var attached = false;
	if (nodeRoot && nodeRoot !== node) {
		var _nodeRootHost, _nodeRootHost$ownerDo, _node$ownerDocument;
		attached = !!((_nodeRootHost = nodeRootHost) !== null && _nodeRootHost !== void 0 && (_nodeRootHost$ownerDo = _nodeRootHost.ownerDocument) !== null && _nodeRootHost$ownerDo !== void 0 && _nodeRootHost$ownerDo.contains(nodeRootHost) || node !== null && node !== void 0 && (_node$ownerDocument = node.ownerDocument) !== null && _node$ownerDocument !== void 0 && _node$ownerDocument.contains(node));
		while (!attached && nodeRootHost) {
			var _nodeRoot2, _nodeRootHost2, _nodeRootHost2$ownerD;
			nodeRoot = getRootNode(nodeRootHost);
			nodeRootHost = (_nodeRoot2 = nodeRoot) === null || _nodeRoot2 === void 0 ? void 0 : _nodeRoot2.host;
			attached = !!((_nodeRootHost2 = nodeRootHost) !== null && _nodeRootHost2 !== void 0 && (_nodeRootHost2$ownerD = _nodeRootHost2.ownerDocument) !== null && _nodeRootHost2$ownerD !== void 0 && _nodeRootHost2$ownerD.contains(nodeRootHost));
		}
	}
	return attached;
};
var isZeroArea = function isZeroArea(node) {
	var _node$getBoundingClie = node.getBoundingClientRect(), width = _node$getBoundingClie.width, height = _node$getBoundingClie.height;
	return width === 0 && height === 0;
};
var isHidden = function isHidden(node, _ref) {
	var displayCheck = _ref.displayCheck, getShadowRoot = _ref.getShadowRoot;
	if (displayCheck === "full-native") {
		if ("checkVisibility" in node) return !node.checkVisibility({
			checkOpacity: false,
			opacityProperty: false,
			contentVisibilityAuto: true,
			visibilityProperty: true,
			checkVisibilityCSS: true
		});
	}
	var visibility = getComputedStyle(node).visibility;
	if (visibility === "hidden" || visibility === "collapse") return true;
	var nodeUnderDetails = matches.call(node, "details>summary:first-of-type") ? node.parentElement : node;
	if (matches.call(nodeUnderDetails, "details:not([open]) *")) return true;
	if (!displayCheck || displayCheck === "full" || displayCheck === "full-native" || displayCheck === "legacy-full") {
		if (typeof getShadowRoot === "function") {
			var originalNode = node;
			while (node) {
				var parentElement = node.parentElement;
				var rootNode = getRootNode(node);
				if (parentElement && !parentElement.shadowRoot && getShadowRoot(parentElement) === true) return isZeroArea(node);
				else if (node.assignedSlot) node = node.assignedSlot;
				else if (!parentElement && rootNode !== node.ownerDocument) node = rootNode.host;
				else node = parentElement;
			}
			node = originalNode;
		}
		if (isNodeAttached(node)) return !node.getClientRects().length;
		if (displayCheck !== "legacy-full") return true;
	} else if (displayCheck === "non-zero-area") return isZeroArea(node);
	return false;
};
var isDisabledFromFieldset = function isDisabledFromFieldset(node) {
	if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName)) {
		var parentNode = node.parentElement;
		while (parentNode) {
			if (parentNode.tagName === "FIELDSET" && parentNode.disabled) {
				for (var i = 0; i < parentNode.children.length; i++) {
					var child = parentNode.children.item(i);
					if (child.tagName === "LEGEND") return matches.call(parentNode, "fieldset[disabled] *") ? true : !child.contains(node);
				}
				return true;
			}
			parentNode = parentNode.parentElement;
		}
	}
	return false;
};
var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable(options, node) {
	if (node.disabled || isHiddenInput(node) || isHidden(node, options) || isDetailsWithSummary(node) || isDisabledFromFieldset(node)) return false;
	return true;
};
var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable(options, node) {
	if (isNonTabbableRadio(node) || getTabIndex(node) < 0 || !isNodeMatchingSelectorFocusable(options, node)) return false;
	return true;
};
var isShadowRootTabbable = function isShadowRootTabbable(shadowHostNode) {
	var tabIndex = parseInt(shadowHostNode.getAttribute("tabindex"), 10);
	if (isNaN(tabIndex) || tabIndex >= 0) return true;
	return false;
};
/**
* @param {Array.<Element|CandidateScope>} candidates
* @returns Element[]
*/
var _sortByOrder = function sortByOrder(candidates) {
	var regularTabbables = [];
	var orderedTabbables = [];
	candidates.forEach(function(item, i) {
		var isScope = !!item.scopeParent;
		var element = isScope ? item.scopeParent : item;
		var candidateTabindex = getSortOrderTabIndex(element, isScope);
		var elements = isScope ? _sortByOrder(item.candidates) : element;
		if (candidateTabindex === 0) isScope ? regularTabbables.push.apply(regularTabbables, elements) : regularTabbables.push(element);
		else orderedTabbables.push({
			documentOrder: i,
			tabIndex: candidateTabindex,
			item,
			isScope,
			content: elements
		});
	});
	return orderedTabbables.sort(sortOrderedTabbables).reduce(function(acc, sortable) {
		sortable.isScope ? acc.push.apply(acc, sortable.content) : acc.push(sortable.content);
		return acc;
	}, []).concat(regularTabbables);
};
var tabbable = function tabbable(container, options) {
	options = options || {};
	var candidates;
	if (options.getShadowRoot) candidates = _getCandidatesIteratively([container], options.includeContainer, {
		filter: isNodeMatchingSelectorTabbable.bind(null, options),
		flatten: false,
		getShadowRoot: options.getShadowRoot,
		shadowRootFilter: isShadowRootTabbable
	});
	else candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorTabbable.bind(null, options));
	return _sortByOrder(candidates);
};
var focusable = function focusable(container, options) {
	options = options || {};
	var candidates;
	if (options.getShadowRoot) candidates = _getCandidatesIteratively([container], options.includeContainer, {
		filter: isNodeMatchingSelectorFocusable.bind(null, options),
		flatten: true,
		getShadowRoot: options.getShadowRoot
	});
	else candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorFocusable.bind(null, options));
	return candidates;
};
var isTabbable = function isTabbable(node, options) {
	options = options || {};
	if (!node) throw new Error("No node provided");
	if (matches.call(node, candidateSelector) === false) return false;
	return isNodeMatchingSelectorTabbable(options, node);
};
var focusableCandidateSelector = /* #__PURE__ */ candidateSelectors.concat("iframe:not([inert]):not([inert] *)").join(",");
var isFocusable = function isFocusable(node, options) {
	options = options || {};
	if (!node) throw new Error("No node provided");
	if (matches.call(node, focusableCandidateSelector) === false) return false;
	return isNodeMatchingSelectorFocusable(options, node);
};
//#endregion
//#region node_modules/bits-ui/dist/internal/tabbable.js
function getTabbableOptions() {
	return {
		getShadowRoot: true,
		displayCheck: typeof ResizeObserver === "function" && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
	};
}
/**
* Gets all tabbable elements in the body and finds the next/previous tabbable element
* from the `currentNode` based on the `direction` provided.
* @param currentNode - the node we want to get the next/previous tabbable from
*/
function getTabbableFrom(currentNode, direction) {
	if (!isTabbable(currentNode, getTabbableOptions())) return getTabbableFromFocusable(currentNode, direction);
	const doc = getDocument(currentNode);
	const allTabbable = tabbable(doc.body, getTabbableOptions());
	if (direction === "prev") allTabbable.reverse();
	const activeIndex = allTabbable.indexOf(currentNode);
	if (activeIndex === -1) return doc.body;
	return allTabbable.slice(activeIndex + 1)[0];
}
function getTabbableFromFocusable(currentNode, direction) {
	const doc = getDocument(currentNode);
	if (!isFocusable(currentNode, getTabbableOptions())) return doc.body;
	const allFocusable = focusable(doc.body, getTabbableOptions());
	if (direction === "prev") allFocusable.reverse();
	const activeIndex = allFocusable.indexOf(currentNode);
	if (activeIndex === -1) return doc.body;
	return allFocusable.slice(activeIndex + 1).find((node) => isTabbable(node, getTabbableOptions())) ?? doc.body;
}
//#endregion
//#region node_modules/bits-ui/dist/internal/arrays.js
/**
* Finds the next matching item from a list of values based on a search string.
*
* This function handles several special cases in typeahead behavior:
*
* 1. Space handling: When a search string ends with a space, it handles it specially:
*    - If there's only one match for the text before the space, it ignores the space
*    - If there are multiple matches and the current match already starts with the search prefix
*      followed by a space, it keeps the current match (doesn't change selection on space)
*    - Only after typing characters beyond the space will it move to a more specific match
*
* 2. Repeated character handling: If a search consists of repeated characters (e.g., "aaa"),
*    it treats it as a single character for matching purposes
*
* 3. Cycling behavior: The function wraps around the values array starting from the current match
*    to find the next appropriate match, creating a cycling selection behavior
*
* @param values - Array of string values to search through (e.g., the text content of menu items)
* @param search - The current search string typed by the user
* @param currentMatch - The currently selected/matched item, if any
* @returns The next matching value that should be selected, or undefined if no match is found
*/
function getNextMatch(values, search, currentMatch) {
	const lowerSearch = search.toLowerCase();
	if (lowerSearch.endsWith(" ")) {
		const searchWithoutSpace = lowerSearch.slice(0, -1);
		/**
		* If there's only one match for the prefix without space, we don't
		* watch to match with space.
		*/
		if (values.filter((value) => value.toLowerCase().startsWith(searchWithoutSpace)).length <= 1) return getNextMatch(values, searchWithoutSpace, currentMatch);
		const currentMatchLowercase = currentMatch?.toLowerCase();
		/**
		* If the current match already starts with the search prefix and has a space afterward,
		* and the user has only typed up to that space, keep the current match until they
		* disambiguate.
		*/
		if (currentMatchLowercase && currentMatchLowercase.startsWith(searchWithoutSpace) && currentMatchLowercase.charAt(searchWithoutSpace.length) === " " && search.trim() === searchWithoutSpace) return currentMatch;
		/**
		* With multiple matches, find items that match the full search string with space
		*/
		const spacedMatches = values.filter((value) => value.toLowerCase().startsWith(lowerSearch));
		/**
		* If we found matches with the space, use the first one that's not the current match
		*/
		if (spacedMatches.length > 0) {
			const currentMatchIndex = currentMatch ? values.indexOf(currentMatch) : -1;
			return wrapArray(spacedMatches, Math.max(currentMatchIndex, 0)).find((match) => match !== currentMatch) || currentMatch;
		}
	}
	const normalizedSearch = search.length > 1 && Array.from(search).every((char) => char === search[0]) ? search[0] : search;
	const normalizedLowerSearch = normalizedSearch.toLowerCase();
	const currentMatchIndex = currentMatch ? values.indexOf(currentMatch) : -1;
	let wrappedValues = wrapArray(values, Math.max(currentMatchIndex, 0));
	if (normalizedSearch.length === 1) wrappedValues = wrappedValues.filter((v) => v !== currentMatch);
	const nextMatch = wrappedValues.find((value) => value?.toLowerCase().startsWith(normalizedLowerSearch));
	return nextMatch !== currentMatch ? nextMatch : void 0;
}
/**
* Wraps an array around itself at a given start index
* Example: `wrapArray(['a', 'b', 'c', 'd'], 2) === ['c', 'd', 'a', 'b']`
*/
function wrapArray(array, startIndex) {
	return array.map((_, index) => array[(startIndex + index) % array.length]);
}
//#endregion
//#region node_modules/bits-ui/dist/internal/box-auto-reset.svelte.js
var defaultOptions = {
	afterMs: 1e4,
	onChange: noop
};
function boxAutoReset(defaultValue, options) {
	const { afterMs, onChange, getWindow } = {
		...defaultOptions,
		...options
	};
	let timeout = null;
	let value = state(proxy(defaultValue));
	function resetAfter() {
		return getWindow().setTimeout(() => {
			set(value, defaultValue, true);
			onChange?.(defaultValue);
		}, afterMs);
	}
	user_effect(() => {
		return () => {
			if (timeout) getWindow().clearTimeout(timeout);
		};
	});
	return boxWith(() => get$2(value), (v) => {
		set(value, v, true);
		onChange?.(v);
		if (timeout) getWindow().clearTimeout(timeout);
		timeout = resetAfter();
	});
}
//#endregion
//#region node_modules/bits-ui/dist/internal/dom-typeahead.svelte.js
var DOMTypeahead = class {
	#opts;
	#search;
	#onMatch = user_derived(() => {
		if (this.#opts.onMatch) return this.#opts.onMatch;
		return (node) => node.focus();
	});
	#getCurrentItem = user_derived(() => {
		if (this.#opts.getCurrentItem) return this.#opts.getCurrentItem;
		return this.#opts.getActiveElement;
	});
	constructor(opts) {
		this.#opts = opts;
		this.#search = boxAutoReset("", {
			afterMs: 1e3,
			getWindow: opts.getWindow
		});
		this.handleTypeaheadSearch = this.handleTypeaheadSearch.bind(this);
		this.resetTypeahead = this.resetTypeahead.bind(this);
	}
	handleTypeaheadSearch(key, candidates) {
		if (!candidates.length) return;
		this.#search.current = this.#search.current + key;
		const currentItem = get$2(this.#getCurrentItem)();
		const currentMatch = candidates.find((item) => item === currentItem)?.textContent?.trim() ?? "";
		const nextMatch = getNextMatch(candidates.map((item) => item.textContent?.trim() ?? ""), this.#search.current, currentMatch);
		const newItem = candidates.find((item) => item.textContent?.trim() === nextMatch);
		if (newItem) get$2(this.#onMatch)(newItem);
		return newItem;
	}
	resetTypeahead() {
		this.#search.current = "";
	}
	get search() {
		return this.#search.current;
	}
};
//#endregion
//#region node_modules/bits-ui/dist/bits/menu/menu.svelte.js
var CONTEXT_MENU_TRIGGER_ATTR = "data-context-menu-trigger";
var CONTEXT_MENU_CONTENT_ATTR = "data-context-menu-content";
var MenuRootContext = new Context("Menu.Root");
var MenuMenuContext = new Context("Menu.Root | Menu.Sub");
var MenuContentContext = new Context("Menu.Content");
new Context("Menu.Group | Menu.RadioGroup");
new Context("Menu.RadioGroup");
new Context("Menu.CheckboxGroup");
var MenuOpenEvent = new CustomEventDispatcher("bitsmenuopen", {
	bubbles: false,
	cancelable: true
});
var menuAttrs = createBitsAttrs({
	component: "menu",
	parts: [
		"trigger",
		"content",
		"sub-trigger",
		"item",
		"group",
		"group-heading",
		"checkbox-group",
		"checkbox-item",
		"radio-group",
		"radio-item",
		"separator",
		"sub-content",
		"arrow"
	]
});
var MenuSubmenuIntent = class {
	#opts;
	#cleanupDocMove = null;
	#fallbackTimer = null;
	#active = false;
	#target = null;
	#apex = null;
	#pointerPoint = null;
	#launchPoint = null;
	constructor(opts) {
		this.#opts = opts;
		watch([
			opts.triggerNode,
			opts.contentNode,
			opts.enabled
		], ([triggerNode, contentNode, enabled]) => {
			this.#reset();
			if (!triggerNode || !contentNode || !enabled) return;
			const onTriggerMove = (e) => {
				if (!isMouseEvent(e)) return;
				this.#launchPoint = {
					x: e.clientX,
					y: e.clientY
				};
				if (!this.#active) this.#preview(e, "content");
			};
			const onTriggerLeave = (e) => {
				if (!isMouseEvent(e)) return;
				this.#engage(e, "content");
			};
			const onContentMove = (e) => {
				if (!isMouseEvent(e)) return;
				if (!this.#active) this.#preview(e, "trigger");
			};
			const onContentLeave = (e) => {
				if (!isMouseEvent(e)) return;
				if (isElement$1(e.relatedTarget)) {
					const selector = this.#opts.subContentSelector();
					const matchedSubContent = e.relatedTarget.closest(selector);
					if (matchedSubContent && matchedSubContent !== contentNode && matchedSubContent.id) {
						if (!!contentNode.querySelector(`[aria-controls="${matchedSubContent.id}"]`)) return;
					}
				}
				this.#engage(e, "trigger");
			};
			const onTriggerEnter = (e) => {
				if (!isMouseEvent(e)) return;
				this.#disengage();
			};
			const onContentEnter = (e) => {
				if (!isMouseEvent(e)) return;
				this.#disengage();
			};
			triggerNode.addEventListener("pointermove", onTriggerMove);
			triggerNode.addEventListener("pointerleave", onTriggerLeave);
			triggerNode.addEventListener("pointerenter", onTriggerEnter);
			contentNode.addEventListener("pointermove", onContentMove);
			contentNode.addEventListener("pointerleave", onContentLeave);
			contentNode.addEventListener("pointerenter", onContentEnter);
			return () => {
				triggerNode.removeEventListener("pointermove", onTriggerMove);
				triggerNode.removeEventListener("pointerleave", onTriggerLeave);
				triggerNode.removeEventListener("pointerenter", onTriggerEnter);
				contentNode.removeEventListener("pointermove", onContentMove);
				contentNode.removeEventListener("pointerleave", onContentLeave);
				contentNode.removeEventListener("pointerenter", onContentEnter);
				this.#reset();
			};
		});
		onDestroyEffect(() => {
			this.#reset();
		});
	}
	#parentTargetRect() {
		const parent = this.#opts.parentContentNode();
		if (parent) return parent.getBoundingClientRect();
		return this.#opts.triggerNode()?.getBoundingClientRect() ?? null;
	}
	#computePolygons(pointerPt, target) {
		const triggerNode = this.#opts.triggerNode();
		const contentNode = this.#opts.contentNode();
		if (!triggerNode || !contentNode) return null;
		const triggerRect = triggerNode.getBoundingClientRect();
		const contentRect = contentNode.getBoundingClientRect();
		const side = getSide$2(triggerRect, contentRect);
		let apex;
		let targetRect;
		let sourceRect;
		if (target === "content") {
			apex = this.#active ? this.#apex ?? pointerPt : pointerPt;
			targetRect = contentRect;
		} else {
			apex = this.#launchPoint ?? pointerPt;
			targetRect = this.#parentTargetRect() ?? triggerRect;
			sourceRect = contentRect;
		}
		this.#apex = apex;
		return {
			corridor: getCorridorPolygon(triggerRect, contentRect, side),
			intent: getIntentPolygon(apex, targetRect, side, target, sourceRect),
			targetRect,
			side
		};
	}
	#isInSafeZone(pt, corridor, intent) {
		return isPointInPolygon$1(pt, corridor) || isPointInPolygon$1(pt, intent);
	}
	#preview(e, target) {
		const pt = {
			x: e.clientX,
			y: e.clientY
		};
		if (!this.#computePolygons(pt, target)) return;
		this.#target = target;
		this.#pointerPoint = pt;
	}
	#engage(e, target) {
		if (!this.#opts.enabled()) return;
		const triggerNode = this.#opts.triggerNode();
		const contentNode = this.#opts.contentNode();
		if (!triggerNode || !contentNode) return;
		const related = e.relatedTarget;
		if (isElement$1(related)) {
			if (target === "content" && contentNode.contains(related)) return;
			if (target === "trigger" && triggerNode.contains(related)) return;
		}
		const pt = {
			x: e.clientX,
			y: e.clientY
		};
		const geo = this.#computePolygons(pt, target);
		if (!geo) return;
		if (!isInsideRect$1(pt, geo.targetRect) && !this.#isInSafeZone(pt, geo.corridor, geo.intent)) {
			this.#clearVisuals();
			return;
		}
		this.#active = true;
		this.#target = target;
		this.#pointerPoint = pt;
		this.#opts.setIsPointerInTransit(true);
		this.#attachDocMove();
		this.#startFallback();
	}
	#disengageTimer = null;
	#disengage() {
		if (!this.#active) return;
		const wasReturning = this.#target === "trigger";
		this.#detachDocMove();
		this.#clearFallback();
		this.#active = false;
		this.#clearVisuals();
		if (wasReturning) {
			this.#clearDisengageTimer();
			this.#disengageTimer = setTimeout(() => {
				this.#disengageTimer = null;
				this.#opts.setIsPointerInTransit(false);
			}, 100);
		} else this.#opts.setIsPointerInTransit(false);
	}
	#clearDisengageTimer() {
		if (this.#disengageTimer === null) return;
		clearTimeout(this.#disengageTimer);
		this.#disengageTimer = null;
	}
	#intentExit() {
		const pointerPoint = this.#pointerPoint;
		this.#detachDocMove();
		this.#clearFallback();
		this.#clearDisengageTimer();
		this.#active = false;
		this.#opts.setIsPointerInTransit(false);
		this.#clearVisuals();
		this.#opts.onIntentExit(pointerPoint);
	}
	#reset() {
		this.#detachDocMove();
		this.#clearFallback();
		this.#clearDisengageTimer();
		if (this.#active) this.#opts.setIsPointerInTransit(false);
		this.#active = false;
		this.#target = null;
		this.#apex = null;
		this.#pointerPoint = null;
		this.#launchPoint = null;
	}
	#isPointerInDescendantSubContent(pt) {
		const contentNode = this.#opts.contentNode();
		if (!contentNode) return false;
		const el = contentNode.ownerDocument.elementFromPoint(pt.x, pt.y);
		if (!el) return false;
		const selector = this.#opts.subContentSelector();
		const subContent = el.closest(selector);
		if (!subContent || subContent === contentNode) return false;
		if (subContent.id) return !!contentNode.querySelector(`[aria-controls="${subContent.id}"]`);
		return false;
	}
	#onDocMove = (e) => {
		if (!this.#active || !this.#target) return;
		if (!isMouseEvent(e)) return;
		const triggerNode = this.#opts.triggerNode();
		const contentNode = this.#opts.contentNode();
		if (!triggerNode || !contentNode) {
			this.#intentExit();
			return;
		}
		this.#clearFallback();
		const pt = {
			x: e.clientX,
			y: e.clientY
		};
		this.#pointerPoint = pt;
		const triggerRect = triggerNode.getBoundingClientRect();
		const contentRect = contentNode.getBoundingClientRect();
		if (this.#target === "content" && isInsideRect$1(pt, contentRect)) {
			this.#disengage();
			return;
		}
		if (this.#target === "trigger" && isInsideInsetRect(pt, triggerRect, 4)) {
			this.#disengage();
			return;
		}
		if (this.#isPointerInDescendantSubContent(pt)) {
			this.#startFallback();
			return;
		}
		const geo = this.#computePolygons(pt, this.#target);
		if (!geo) {
			this.#intentExit();
			return;
		}
		if (this.#isInSafeZone(pt, geo.corridor, geo.intent)) {
			this.#startFallback();
			return;
		}
		this.#intentExit();
	};
	#attachDocMove() {
		if (this.#cleanupDocMove) return;
		const doc = getDocument(this.#opts.triggerNode() ?? this.#opts.contentNode());
		if (!doc) return;
		doc.addEventListener("pointermove", this.#onDocMove, true);
		this.#cleanupDocMove = () => {
			doc.removeEventListener("pointermove", this.#onDocMove, true);
			this.#cleanupDocMove = null;
		};
	}
	#detachDocMove() {
		this.#cleanupDocMove?.();
	}
	#startFallback() {
		this.#clearFallback();
		this.#fallbackTimer = setTimeout(() => {
			this.#fallbackTimer = null;
			if (this.#active) this.#intentExit();
		}, 500);
	}
	#clearFallback() {
		if (this.#fallbackTimer === null) return;
		clearTimeout(this.#fallbackTimer);
		this.#fallbackTimer = null;
	}
	#clearVisuals() {
		this.#target = null;
		this.#apex = null;
		this.#pointerPoint = null;
	}
};
function isPointInPolygon$1(point, polygon) {
	const { x, y } = point;
	let inside = false;
	for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
		const xi = polygon[i].x;
		const yi = polygon[i].y;
		const xj = polygon[j].x;
		const yj = polygon[j].y;
		if (yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi) inside = !inside;
	}
	return inside;
}
function isInsideRect$1(point, rect) {
	return point.x >= rect.left && point.x <= rect.right && point.y >= rect.top && point.y <= rect.bottom;
}
function isInsideInsetRect(point, rect, inset) {
	return point.x >= rect.left + inset && point.x <= rect.right - inset && point.y >= rect.top + inset && point.y <= rect.bottom - inset;
}
function getSide$2(triggerRect, contentRect) {
	const triggerCenterX = triggerRect.left + triggerRect.width / 2;
	const triggerCenterY = triggerRect.top + triggerRect.height / 2;
	const contentCenterX = contentRect.left + contentRect.width / 2;
	const contentCenterY = contentRect.top + contentRect.height / 2;
	const deltaX = contentCenterX - triggerCenterX;
	const deltaY = contentCenterY - triggerCenterY;
	if (Math.abs(deltaX) > Math.abs(deltaY)) return deltaX > 0 ? "right" : "left";
	return deltaY > 0 ? "bottom" : "top";
}
function getCorridorPolygon(triggerRect, contentRect, side) {
	const buffer = 2;
	switch (side) {
		case "top": return [
			{
				x: Math.min(triggerRect.left, contentRect.left) - buffer,
				y: triggerRect.top
			},
			{
				x: Math.min(triggerRect.left, contentRect.left) - buffer,
				y: contentRect.bottom
			},
			{
				x: Math.max(triggerRect.right, contentRect.right) + buffer,
				y: contentRect.bottom
			},
			{
				x: Math.max(triggerRect.right, contentRect.right) + buffer,
				y: triggerRect.top
			}
		];
		case "bottom": return [
			{
				x: Math.min(triggerRect.left, contentRect.left) - buffer,
				y: triggerRect.bottom
			},
			{
				x: Math.min(triggerRect.left, contentRect.left) - buffer,
				y: contentRect.top
			},
			{
				x: Math.max(triggerRect.right, contentRect.right) + buffer,
				y: contentRect.top
			},
			{
				x: Math.max(triggerRect.right, contentRect.right) + buffer,
				y: triggerRect.bottom
			}
		];
		case "left": return [
			{
				x: triggerRect.left,
				y: Math.min(triggerRect.top, contentRect.top) - buffer
			},
			{
				x: contentRect.right,
				y: Math.min(triggerRect.top, contentRect.top) - buffer
			},
			{
				x: contentRect.right,
				y: Math.max(triggerRect.bottom, contentRect.bottom) + buffer
			},
			{
				x: triggerRect.left,
				y: Math.max(triggerRect.bottom, contentRect.bottom) + buffer
			}
		];
		case "right": return [
			{
				x: triggerRect.right,
				y: Math.min(triggerRect.top, contentRect.top) - buffer
			},
			{
				x: contentRect.left,
				y: Math.min(triggerRect.top, contentRect.top) - buffer
			},
			{
				x: contentRect.left,
				y: Math.max(triggerRect.bottom, contentRect.bottom) + buffer
			},
			{
				x: triggerRect.right,
				y: Math.max(triggerRect.bottom, contentRect.bottom) + buffer
			}
		];
	}
}
function getIntentPolygon(exitPoint, targetRect, side, target, sourceRect) {
	const edgeBuffer = 8;
	const effectiveSide = target === "trigger" ? flipSide(side) : side;
	const top = sourceRect ? Math.min(targetRect.top, sourceRect.top) - edgeBuffer : targetRect.top - edgeBuffer;
	const bottom = sourceRect ? Math.max(targetRect.bottom, sourceRect.bottom) + edgeBuffer : targetRect.bottom + edgeBuffer;
	const left = sourceRect ? Math.min(targetRect.left, sourceRect.left) - edgeBuffer : targetRect.left - edgeBuffer;
	const right = sourceRect ? Math.max(targetRect.right, sourceRect.right) + edgeBuffer : targetRect.right + edgeBuffer;
	switch (effectiveSide) {
		case "right": return [
			exitPoint,
			{
				x: targetRect.left,
				y: top
			},
			{
				x: targetRect.left,
				y: bottom
			}
		];
		case "left": return [
			exitPoint,
			{
				x: targetRect.right,
				y: top
			},
			{
				x: targetRect.right,
				y: bottom
			}
		];
		case "bottom": return [
			exitPoint,
			{
				x: left,
				y: targetRect.top
			},
			{
				x: right,
				y: targetRect.top
			}
		];
		case "top": return [
			exitPoint,
			{
				x: left,
				y: targetRect.bottom
			},
			{
				x: right,
				y: targetRect.bottom
			}
		];
	}
}
function flipSide(side) {
	switch (side) {
		case "top": return "bottom";
		case "bottom": return "top";
		case "left": return "right";
		case "right": return "left";
	}
}
var MenuRootState = class MenuRootState {
	static create(opts) {
		const root = new MenuRootState(opts);
		return MenuRootContext.set(root);
	}
	opts;
	isUsingKeyboard = new IsUsingKeyboard();
	#ignoreCloseAutoFocus = state(false);
	get ignoreCloseAutoFocus() {
		return get$2(this.#ignoreCloseAutoFocus);
	}
	set ignoreCloseAutoFocus(value) {
		set(this.#ignoreCloseAutoFocus, value, true);
	}
	#isPointerInTransit = state(false);
	get isPointerInTransit() {
		return get$2(this.#isPointerInTransit);
	}
	set isPointerInTransit(value) {
		set(this.#isPointerInTransit, value, true);
	}
	constructor(opts) {
		this.opts = opts;
	}
	getBitsAttr = (part) => {
		return menuAttrs.getAttr(part, this.opts.variant.current);
	};
};
var MenuMenuState = class MenuMenuState {
	static create(opts, root) {
		return MenuMenuContext.set(new MenuMenuState(opts, root, null));
	}
	opts;
	root;
	parentMenu;
	contentId = boxWith(() => "");
	#contentNode = state(null);
	get contentNode() {
		return get$2(this.#contentNode);
	}
	set contentNode(value) {
		set(this.#contentNode, value, true);
	}
	contentPresence;
	#triggerNode = state(null);
	get triggerNode() {
		return get$2(this.#triggerNode);
	}
	set triggerNode(value) {
		set(this.#triggerNode, value, true);
	}
	constructor(opts, root, parentMenu) {
		this.opts = opts;
		this.root = root;
		this.parentMenu = parentMenu;
		this.contentPresence = new PresenceManager({
			ref: boxWith(() => this.contentNode),
			open: this.opts.open,
			onComplete: () => {
				this.opts.onOpenChangeComplete.current(this.opts.open.current);
			},
			shouldSkipExitAnimation: () => {
				if (this.root.opts.variant.current !== "menubar" || this.parentMenu !== null) return false;
				return this.root.opts.shouldSkipExitAnimation?.() ?? false;
			}
		});
		if (parentMenu) watch(() => parentMenu.opts.open.current, () => {
			if (parentMenu.opts.open.current) return;
			this.opts.open.current = false;
		});
	}
	toggleOpen() {
		this.opts.open.current = !this.opts.open.current;
	}
	onOpen() {
		this.opts.open.current = true;
	}
	onClose() {
		this.opts.open.current = false;
	}
};
var MenuContentState = class MenuContentState {
	static create(opts) {
		return MenuContentContext.set(new MenuContentState(opts, MenuMenuContext.get()));
	}
	opts;
	parentMenu;
	rovingFocusGroup;
	domContext;
	attachment;
	#search = state("");
	get search() {
		return get$2(this.#search);
	}
	set search(value) {
		set(this.#search, value, true);
	}
	#timer = 0;
	#handleTypeaheadSearch;
	#mounted = state(false);
	get mounted() {
		return get$2(this.#mounted);
	}
	set mounted(value) {
		set(this.#mounted, value, true);
	}
	#isSub;
	constructor(opts, parentMenu) {
		this.opts = opts;
		this.parentMenu = parentMenu;
		this.domContext = new DOMContext(opts.ref);
		this.attachment = attachRef(this.opts.ref, (v) => {
			if (this.parentMenu.contentNode !== v) this.parentMenu.contentNode = v;
		});
		parentMenu.contentId = opts.id;
		this.#isSub = opts.isSub ?? false;
		this.onkeydown = this.onkeydown.bind(this);
		this.onblur = this.onblur.bind(this);
		this.onfocus = this.onfocus.bind(this);
		this.handleInteractOutside = this.handleInteractOutside.bind(this);
		new MenuSubmenuIntent({
			contentNode: () => this.parentMenu.contentNode,
			triggerNode: () => this.parentMenu.triggerNode,
			parentContentNode: () => this.parentMenu.parentMenu?.contentNode ?? null,
			subContentSelector: () => `[${this.parentMenu.root.getBitsAttr("sub-content")}]`,
			enabled: () => this.parentMenu.opts.open.current && Boolean(this.parentMenu.triggerNode?.hasAttribute(this.parentMenu.root.getBitsAttr("sub-trigger"))),
			onIntentExit: (pointerPoint) => {
				this.parentMenu.opts.open.current = false;
				this.#dispatchPointerMoveToHoveredSubTrigger(pointerPoint);
			},
			setIsPointerInTransit: (value) => {
				this.parentMenu.root.isPointerInTransit = value;
			}
		});
		this.#handleTypeaheadSearch = new DOMTypeahead({
			getActiveElement: () => this.domContext.getActiveElement(),
			getWindow: () => this.domContext.getWindow()
		}).handleTypeaheadSearch;
		this.rovingFocusGroup = new RovingFocusGroup({
			rootNode: boxWith(() => this.parentMenu.contentNode),
			candidateAttr: this.parentMenu.root.getBitsAttr("item"),
			loop: this.opts.loop,
			orientation: boxWith(() => "vertical")
		});
		watch(() => this.parentMenu.contentNode, (contentNode) => {
			if (!contentNode) return;
			const handler = () => {
				afterTick(() => {
					if (!this.parentMenu.root.isUsingKeyboard.current) return;
					this.rovingFocusGroup.focusFirstCandidate();
				});
			};
			return MenuOpenEvent.listen(contentNode, handler);
		});
		user_effect(() => {
			if (!this.parentMenu.opts.open.current) this.domContext.getWindow().clearTimeout(this.#timer);
		});
	}
	#getCandidateNodes() {
		const node = this.parentMenu.contentNode;
		if (!node) return [];
		return Array.from(node.querySelectorAll(`[${this.parentMenu.root.getBitsAttr("item")}]:not([data-disabled])`));
	}
	#isPointerMovingToSubmenu() {
		return this.parentMenu.root.isPointerInTransit;
	}
	#dispatchPointerMoveToHoveredSubTrigger(pointerPoint) {
		if (!pointerPoint) return;
		const parentContentNode = this.parentMenu.parentMenu?.contentNode;
		if (!parentContentNode) return;
		const hoveredNode = this.domContext.getDocument().elementFromPoint(pointerPoint.x, pointerPoint.y);
		if (!isElement$1(hoveredNode)) return;
		const hoveredSubTrigger = hoveredNode.closest(`[${this.parentMenu.root.getBitsAttr("sub-trigger")}]`);
		if (!hoveredSubTrigger || !parentContentNode.contains(hoveredSubTrigger)) return;
		if (hoveredSubTrigger === this.parentMenu.triggerNode) return;
		hoveredSubTrigger.dispatchEvent(new PointerEvent("pointermove", {
			bubbles: true,
			cancelable: true,
			pointerType: "mouse",
			clientX: pointerPoint.x,
			clientY: pointerPoint.y
		}));
	}
	onCloseAutoFocus = (e) => {
		this.opts.onCloseAutoFocus.current?.(e);
		if (e.defaultPrevented || this.#isSub) return;
		if (this.parentMenu.root.ignoreCloseAutoFocus) {
			e.preventDefault();
			return;
		}
		if (this.parentMenu.triggerNode && isTabbable(this.parentMenu.triggerNode)) {
			e.preventDefault();
			this.parentMenu.triggerNode.focus();
		}
	};
	handleTabKeyDown(e) {
		/**
		* We locate the root `menu`'s trigger by going up the tree until
		* we find a menu that has no parent. This will allow us to focus the next
		* tabbable element before/after the root trigger.
		*/
		let rootMenu = this.parentMenu;
		while (rootMenu.parentMenu !== null) rootMenu = rootMenu.parentMenu;
		if (!rootMenu.triggerNode) return;
		e.preventDefault();
		const nodeToFocus = getTabbableFrom(rootMenu.triggerNode, e.shiftKey ? "prev" : "next");
		if (nodeToFocus) {
			/**
			* We set a flag to ignore the `onCloseAutoFocus` event handler
			* as well as the fallbacks inside the focus scope to prevent
			* race conditions causing focus to fall back to the body even
			* though we're trying to focus the next tabbable element.
			*/
			this.parentMenu.root.ignoreCloseAutoFocus = true;
			rootMenu.onClose();
			afterTick(() => {
				nodeToFocus.focus();
				afterTick(() => {
					this.parentMenu.root.ignoreCloseAutoFocus = false;
				});
			});
		} else this.domContext.getDocument().body.focus();
	}
	onkeydown(e) {
		if (e.defaultPrevented) return;
		if (e.key === "Tab") {
			this.handleTabKeyDown(e);
			return;
		}
		const target = e.target;
		const currentTarget = e.currentTarget;
		if (!isHTMLElement$1(target) || !isHTMLElement$1(currentTarget)) return;
		const isKeydownInside = target.closest(`[${this.parentMenu.root.getBitsAttr("content")}]`)?.id === this.parentMenu.contentId.current;
		const isModifierKey = e.ctrlKey || e.altKey || e.metaKey;
		const isCharacterKey = e.key.length === 1;
		if (this.rovingFocusGroup.handleKeydown(target, e)) return;
		if (e.code === "Space") return;
		const candidateNodes = this.#getCandidateNodes();
		if (isKeydownInside) {
			if (!isModifierKey && isCharacterKey) this.#handleTypeaheadSearch(e.key, candidateNodes);
		}
		if (e.target?.id !== this.parentMenu.contentId.current) return;
		if (!FIRST_LAST_KEYS.includes(e.key)) return;
		e.preventDefault();
		if (LAST_KEYS.includes(e.key)) candidateNodes.reverse();
		focusFirst(candidateNodes, { select: false }, () => this.domContext.getActiveElement());
	}
	onblur(e) {
		if (!isElement$1(e.currentTarget)) return;
		if (!isElement$1(e.target)) return;
		if (!e.currentTarget.contains?.(e.target)) {
			this.domContext.getWindow().clearTimeout(this.#timer);
			this.search = "";
		}
	}
	onfocus(_) {
		if (!this.parentMenu.root.isUsingKeyboard.current) return;
		afterTick(() => this.rovingFocusGroup.focusFirstCandidate());
	}
	onItemEnter() {
		return this.#isPointerMovingToSubmenu();
	}
	onItemLeave(e) {
		if (e.currentTarget.hasAttribute(this.parentMenu.root.getBitsAttr("sub-trigger"))) return;
		if (this.#isPointerMovingToSubmenu() || this.parentMenu.root.isUsingKeyboard.current) return;
		this.parentMenu.contentNode?.focus({ preventScroll: true });
		this.rovingFocusGroup.setCurrentTabStopId("");
	}
	onTriggerLeave() {
		if (this.#isPointerMovingToSubmenu()) return true;
		return false;
	}
	handleInteractOutside(e) {
		if (!isElementOrSVGElement(e.target)) return;
		const triggerId = this.parentMenu.triggerNode?.id;
		if (e.target.id === triggerId) {
			e.preventDefault();
			return;
		}
		if (e.target.closest(`#${triggerId}`)) {
			e.preventDefault();
			return;
		}
		/**
		* when the menu closes due to an outside pointer interaction (for example,
		* clicking another dropdown trigger), avoid focusing this menu's trigger
		* to prevent stealing focus from the new interaction target.
		*/
		this.parentMenu.root.ignoreCloseAutoFocus = true;
		afterTick(() => {
			this.parentMenu.root.ignoreCloseAutoFocus = false;
		});
	}
	get shouldRender() {
		return this.parentMenu.contentPresence.shouldRender;
	}
	#snippetProps = user_derived(() => ({ open: this.parentMenu.opts.open.current }));
	get snippetProps() {
		return get$2(this.#snippetProps);
	}
	set snippetProps(value) {
		set(this.#snippetProps, value);
	}
	#props = user_derived(() => ({
		id: this.opts.id.current,
		role: "menu",
		"aria-orientation": "vertical",
		[this.parentMenu.root.getBitsAttr("content")]: "",
		"data-state": getDataOpenClosed(this.parentMenu.opts.open.current),
		...getDataTransitionAttrs(this.parentMenu.contentPresence.transitionStatus),
		onkeydown: this.onkeydown,
		onblur: this.onblur,
		onfocus: this.onfocus,
		dir: this.parentMenu.root.opts.dir.current,
		style: {
			pointerEvents: "auto",
			contain: "layout style"
		},
		...this.attachment
	}));
	get props() {
		return get$2(this.#props);
	}
	set props(value) {
		set(this.#props, value);
	}
	popperProps = { onCloseAutoFocus: (e) => this.onCloseAutoFocus(e) };
};
var MenuItemSharedState = class {
	opts;
	content;
	attachment;
	#isFocused = state(false);
	constructor(opts, content) {
		this.opts = opts;
		this.content = content;
		this.attachment = attachRef(this.opts.ref);
		this.onpointermove = this.onpointermove.bind(this);
		this.onpointerleave = this.onpointerleave.bind(this);
		this.onfocus = this.onfocus.bind(this);
		this.onblur = this.onblur.bind(this);
	}
	onpointermove(e) {
		if (e.defaultPrevented) return;
		if (!isMouseEvent(e)) return;
		if (this.opts.disabled.current) this.content.onItemLeave(e);
		else {
			if (this.content.onItemEnter()) return;
			const item = e.currentTarget;
			if (!isHTMLElement$1(item)) return;
			item.focus({ preventScroll: true });
		}
	}
	onpointerleave(e) {
		if (e.defaultPrevented) return;
		if (!isMouseEvent(e)) return;
		this.content.onItemLeave(e);
	}
	onfocus(e) {
		afterTick(() => {
			if (e.defaultPrevented || this.opts.disabled.current) return;
			set(this.#isFocused, true);
		});
	}
	onblur(e) {
		afterTick(() => {
			if (e.defaultPrevented) return;
			set(this.#isFocused, false);
		});
	}
	#props = user_derived(() => ({
		id: this.opts.id.current,
		tabindex: -1,
		role: "menuitem",
		"aria-disabled": boolToStr(this.opts.disabled.current),
		"data-disabled": boolToEmptyStrOrUndef(this.opts.disabled.current),
		"data-highlighted": get$2(this.#isFocused) ? "" : void 0,
		[this.content.parentMenu.root.getBitsAttr("item")]: "",
		onpointermove: this.onpointermove,
		onpointerleave: this.onpointerleave,
		onfocus: this.onfocus,
		onblur: this.onblur,
		...this.attachment
	}));
	get props() {
		return get$2(this.#props);
	}
	set props(value) {
		set(this.#props, value);
	}
};
var MenuItemState = class MenuItemState {
	static create(opts) {
		const item = new MenuItemSharedState(opts, MenuContentContext.get());
		return new MenuItemState(opts, item);
	}
	opts;
	item;
	root;
	#isPointerDown = false;
	constructor(opts, item) {
		this.opts = opts;
		this.item = item;
		this.root = item.content.parentMenu.root;
		this.onkeydown = this.onkeydown.bind(this);
		this.onclick = this.onclick.bind(this);
		this.onpointerdown = this.onpointerdown.bind(this);
		this.onpointerup = this.onpointerup.bind(this);
	}
	#handleSelect() {
		if (this.item.opts.disabled.current) return;
		const selectEvent = new CustomEvent("menuitemselect", {
			bubbles: true,
			cancelable: true
		});
		this.opts.onSelect.current(selectEvent);
		if (selectEvent.defaultPrevented) {
			this.item.content.parentMenu.root.isUsingKeyboard.current = false;
			return;
		}
		if (this.opts.closeOnSelect.current) this.item.content.parentMenu.root.opts.onClose();
	}
	onkeydown(e) {
		const isTypingAhead = this.item.content.search !== "";
		if (this.item.opts.disabled.current || isTypingAhead && e.key === " ") return;
		if (SELECTION_KEYS.includes(e.key)) {
			if (!isHTMLElement$1(e.currentTarget)) return;
			e.currentTarget.click();
			/**
			* We prevent default browser behavior for selection keys as they should trigger
			* a selection only:
			* - prevents space from scrolling the page.
			* - if keydown causes focus to move, prevents keydown from firing on the new target.
			*/
			e.preventDefault();
		}
	}
	onclick(_) {
		if (this.item.opts.disabled.current) return;
		this.#handleSelect();
	}
	onpointerup(e) {
		if (e.defaultPrevented) return;
		if (!this.#isPointerDown) {
			if (!isHTMLElement$1(e.currentTarget)) return;
			e.currentTarget?.click();
		}
	}
	onpointerdown(_) {
		this.#isPointerDown = true;
	}
	#props = user_derived(() => mergeProps(this.item.props, {
		onclick: this.onclick,
		onpointerdown: this.onpointerdown,
		onpointerup: this.onpointerup,
		onkeydown: this.onkeydown
	}));
	get props() {
		return get$2(this.#props);
	}
	set props(value) {
		set(this.#props, value);
	}
};
var MenuSeparatorState = class MenuSeparatorState {
	static create(opts) {
		return new MenuSeparatorState(opts, MenuRootContext.get());
	}
	opts;
	root;
	attachment;
	constructor(opts, root) {
		this.opts = opts;
		this.root = root;
		this.attachment = attachRef(this.opts.ref);
	}
	#props = user_derived(() => ({
		id: this.opts.id.current,
		role: "group",
		[this.root.getBitsAttr("separator")]: "",
		...this.attachment
	}));
	get props() {
		return get$2(this.#props);
	}
	set props(value) {
		set(this.#props, value);
	}
};
var DropdownMenuTriggerState = class DropdownMenuTriggerState {
	static create(opts) {
		return new DropdownMenuTriggerState(opts, MenuMenuContext.get());
	}
	opts;
	parentMenu;
	attachment;
	constructor(opts, parentMenu) {
		this.opts = opts;
		this.parentMenu = parentMenu;
		this.attachment = attachRef(this.opts.ref, (v) => this.parentMenu.triggerNode = v);
	}
	onclick = (e) => {
		/**
		* MacOS VoiceOver sends a click in Safari/Firefox bypassing the keydown event
		* when V0+Space is pressed. Since we already handle the keydown event and the
		* pointerdown events separately, we ignore it if the detail is not 0.
		*/
		if (this.opts.disabled.current || e.detail !== 0) return;
		this.parentMenu.toggleOpen();
		e.preventDefault();
	};
	onpointerdown = (e) => {
		if (this.opts.disabled.current) return;
		if (e.pointerType === "touch") return e.preventDefault();
		if (e.button === 0 && e.ctrlKey === false) {
			this.parentMenu.toggleOpen();
			if (!this.parentMenu.opts.open.current) e.preventDefault();
		}
	};
	onpointerup = (e) => {
		if (this.opts.disabled.current) return;
		if (e.pointerType === "touch") {
			e.preventDefault();
			this.parentMenu.toggleOpen();
		}
	};
	onkeydown = (e) => {
		if (this.opts.disabled.current) return;
		if (e.key === " " || e.key === "Enter") {
			this.parentMenu.toggleOpen();
			e.preventDefault();
			return;
		}
		if (e.key === "ArrowDown") {
			this.parentMenu.onOpen();
			e.preventDefault();
		}
	};
	#ariaControls = user_derived(() => {
		if (this.parentMenu.opts.open.current && this.parentMenu.contentId.current) return this.parentMenu.contentId.current;
	});
	#props = user_derived(() => ({
		id: this.opts.id.current,
		disabled: this.opts.disabled.current,
		"aria-haspopup": "menu",
		"aria-expanded": boolToStr(this.parentMenu.opts.open.current),
		"aria-controls": get$2(this.#ariaControls),
		"data-disabled": boolToEmptyStrOrUndef(this.opts.disabled.current),
		"data-state": getDataOpenClosed(this.parentMenu.opts.open.current),
		[this.parentMenu.root.getBitsAttr("trigger")]: "",
		onclick: this.onclick,
		onpointerdown: this.onpointerdown,
		onpointerup: this.onpointerup,
		onkeydown: this.onkeydown,
		...this.attachment
	}));
	get props() {
		return get$2(this.#props);
	}
	set props(value) {
		set(this.#props, value);
	}
};
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/dismissible-layer/use-dismissable-layer.svelte.js
globalThis.bitsDismissableLayers ??= /* @__PURE__ */ new Map();
var DismissibleLayerState = class DismissibleLayerState {
	static create(opts) {
		return new DismissibleLayerState(opts);
	}
	opts;
	#interactOutsideProp;
	#behaviorType;
	#interceptedEvents = { pointerdown: false };
	#isResponsibleLayer = false;
	#isFocusInsideDOMTree = false;
	#documentObj = void 0;
	#onFocusOutside;
	#unsubClickListener = noop;
	constructor(opts) {
		this.opts = opts;
		this.#behaviorType = opts.interactOutsideBehavior;
		this.#interactOutsideProp = opts.onInteractOutside;
		this.#onFocusOutside = opts.onFocusOutside;
		user_effect(() => {
			this.#documentObj = getOwnerDocument(this.opts.ref.current);
		});
		let unsubEvents = noop;
		const cleanup = () => {
			this.#resetState();
			globalThis.bitsDismissableLayers.delete(this);
			this.#handleInteractOutside.destroy();
			unsubEvents();
		};
		watch([() => this.opts.enabled.current, () => this.opts.ref.current], () => {
			if (!this.opts.enabled.current || !this.opts.ref.current) return;
			afterSleep(1, () => {
				if (!this.opts.ref.current) return;
				globalThis.bitsDismissableLayers.set(this, this.#behaviorType);
				unsubEvents();
				unsubEvents = this.#addEventListeners();
			});
			return cleanup;
		});
		onDestroyEffect(() => {
			this.#resetState.destroy();
			globalThis.bitsDismissableLayers.delete(this);
			this.#handleInteractOutside.destroy();
			this.#unsubClickListener();
			unsubEvents();
		});
	}
	#handleFocus = (event) => {
		if (event.defaultPrevented) return;
		if (!this.opts.ref.current) return;
		afterTick(() => {
			if (!this.opts.ref.current || this.#isTargetWithinLayer(event.target)) return;
			if (event.target && !this.#isFocusInsideDOMTree) this.#onFocusOutside.current?.(event);
		});
	};
	#addEventListeners() {
		return executeCallbacks(
			/**
			* CAPTURE INTERACTION START
			* mark interaction-start event as intercepted.
			* mark responsible layer during interaction start
			* to avoid checking if is responsible layer during interaction end
			* when a new floating element may have been opened.
			*/
			on(this.#documentObj, "pointerdown", executeCallbacks(this.#markInterceptedEvent, this.#markResponsibleLayer), { capture: true }),
			/**
			* BUBBLE INTERACTION START
			* Mark interaction-start event as non-intercepted. Debounce `onInteractOutsideStart`
			* to avoid prematurely checking if other events were intercepted.
			*/
			on(this.#documentObj, "pointerdown", executeCallbacks(this.#markNonInterceptedEvent, this.#handleInteractOutside)),
			/**
			* HANDLE FOCUS OUTSIDE
			*/
			on(this.#documentObj, "focusin", this.#handleFocus)
		);
	}
	#handleDismiss = (e) => {
		let event = e;
		if (event.defaultPrevented) event = createWrappedEvent(e);
		this.#interactOutsideProp.current(e);
	};
	#handleInteractOutside = debounce((e) => {
		if (!this.opts.ref.current) {
			this.#unsubClickListener();
			return;
		}
		const isEventValid = this.opts.isValidEvent.current(e, this.opts.ref.current) || isValidEvent(e, this.opts.ref.current);
		if (!this.#isResponsibleLayer || this.#isAnyEventIntercepted() || !isEventValid) {
			this.#unsubClickListener();
			return;
		}
		let event = e;
		if (event.defaultPrevented) event = createWrappedEvent(event);
		if (this.#behaviorType.current !== "close" && this.#behaviorType.current !== "defer-otherwise-close") {
			this.#unsubClickListener();
			return;
		}
		if (e.pointerType === "touch") {
			this.#unsubClickListener();
			this.#unsubClickListener = on(this.#documentObj, "click", this.#handleDismiss, { once: true });
		} else this.#interactOutsideProp.current(event);
	}, 10);
	#markInterceptedEvent = (e) => {
		this.#interceptedEvents[e.type] = true;
	};
	#markNonInterceptedEvent = (e) => {
		this.#interceptedEvents[e.type] = false;
	};
	#markResponsibleLayer = () => {
		if (!this.opts.ref.current) return;
		this.#isResponsibleLayer = isResponsibleLayer(this.opts.ref.current);
	};
	#isTargetWithinLayer = (target) => {
		if (!this.opts.ref.current) return false;
		return isOrContainsTarget(this.opts.ref.current, target);
	};
	#resetState = debounce(() => {
		for (const eventType in this.#interceptedEvents) this.#interceptedEvents[eventType] = false;
		this.#isResponsibleLayer = false;
	}, 20);
	#isAnyEventIntercepted() {
		return Object.values(this.#interceptedEvents).some(Boolean);
	}
	#onfocuscapture = () => {
		this.#isFocusInsideDOMTree = true;
	};
	#onblurcapture = () => {
		this.#isFocusInsideDOMTree = false;
	};
	props = {
		onfocuscapture: this.#onfocuscapture,
		onblurcapture: this.#onblurcapture
	};
};
function getTopMostDismissableLayer(layersArr = [...globalThis.bitsDismissableLayers]) {
	return layersArr.findLast(([_, { current: behaviorType }]) => behaviorType === "close" || behaviorType === "ignore");
}
function isResponsibleLayer(node) {
	const layersArr = [...globalThis.bitsDismissableLayers];
	/**
	* We first check if we can find a top layer with `close` or `ignore`.
	* If that top layer was found and matches the provided node, then the node is
	* responsible for the outside interaction. Otherwise, we know that all layers defer so
	* the first layer is the responsible one.
	*/
	const topMostLayer = getTopMostDismissableLayer(layersArr);
	if (topMostLayer) return topMostLayer[0].opts.ref.current === node;
	const [firstLayerNode] = layersArr[0];
	return firstLayerNode.opts.ref.current === node;
}
function isValidEvent(e, node) {
	const target = e.target;
	if (!isElementOrSVGElement(target)) return false;
	const targetIsContextMenuTrigger = Boolean(target.closest(`[${CONTEXT_MENU_TRIGGER_ATTR}]`));
	const nodeIsContextMenu = Boolean(node.closest(`[${CONTEXT_MENU_CONTENT_ATTR}]`));
	if ("button" in e && e.button > 0 && !targetIsContextMenuTrigger) return false;
	if ("button" in e && e.button === 0 && targetIsContextMenuTrigger && nodeIsContextMenu) return true;
	if (targetIsContextMenuTrigger && nodeIsContextMenu) return false;
	return getOwnerDocument(target).documentElement.contains(target) && !isOrContainsTarget(node, target) && isClickTrulyOutside(e, node);
}
function createWrappedEvent(e) {
	const capturedCurrentTarget = e.currentTarget;
	const capturedTarget = e.target;
	let newEvent;
	if (e instanceof PointerEvent) newEvent = new PointerEvent(e.type, e);
	else newEvent = new PointerEvent("pointerdown", e);
	let isPrevented = false;
	return new Proxy(newEvent, { get: (target, prop) => {
		if (prop === "currentTarget") return capturedCurrentTarget;
		if (prop === "target") return capturedTarget;
		if (prop === "preventDefault") return () => {
			isPrevented = true;
			if (typeof target.preventDefault === "function") target.preventDefault();
		};
		if (prop === "defaultPrevented") return isPrevented;
		if (prop in target) return target[prop];
		return e[prop];
	} });
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/dismissible-layer/dismissible-layer.svelte
function Dismissible_layer($$anchor, $$props) {
	push($$props, true);
	let interactOutsideBehavior = prop($$props, "interactOutsideBehavior", 3, "close"), onInteractOutside = prop($$props, "onInteractOutside", 3, noop), onFocusOutside = prop($$props, "onFocusOutside", 3, noop), isValidEvent = prop($$props, "isValidEvent", 3, () => false);
	const dismissibleLayerState = DismissibleLayerState.create({
		id: boxWith(() => $$props.id),
		interactOutsideBehavior: boxWith(() => interactOutsideBehavior()),
		onInteractOutside: boxWith(() => onInteractOutside()),
		enabled: boxWith(() => $$props.enabled),
		onFocusOutside: boxWith(() => onFocusOutside()),
		isValidEvent: boxWith(() => isValidEvent()),
		ref: $$props.ref
	});
	var fragment = comment();
	snippet(first_child(fragment), () => $$props.children ?? noop$1, () => ({ props: dismissibleLayerState.props }));
	append($$anchor, fragment);
	pop();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/escape-layer/use-escape-layer.svelte.js
globalThis.bitsEscapeLayers ??= /* @__PURE__ */ new Map();
var EscapeLayerState = class EscapeLayerState {
	static create(opts) {
		return new EscapeLayerState(opts);
	}
	opts;
	domContext;
	constructor(opts) {
		this.opts = opts;
		this.domContext = new DOMContext(this.opts.ref);
		let unsubEvents = noop;
		watch(() => opts.enabled.current, (enabled) => {
			if (enabled) {
				globalThis.bitsEscapeLayers.set(this, opts.escapeKeydownBehavior);
				unsubEvents = this.#addEventListener();
			}
			return () => {
				unsubEvents();
				globalThis.bitsEscapeLayers.delete(this);
			};
		});
	}
	#addEventListener = () => {
		return on(this.domContext.getDocument(), "keydown", this.#onkeydown, { passive: false });
	};
	#onkeydown = (e) => {
		if (e.key !== "Escape" || !isResponsibleEscapeLayer(this)) return;
		const clonedEvent = new KeyboardEvent(e.type, e);
		e.preventDefault();
		const behaviorType = this.opts.escapeKeydownBehavior.current;
		if (behaviorType !== "close" && behaviorType !== "defer-otherwise-close") return;
		this.opts.onEscapeKeydown.current(clonedEvent);
	};
};
function isResponsibleEscapeLayer(instance) {
	const layersArr = [...globalThis.bitsEscapeLayers];
	/**
	* We first check if we can find a top layer with `close` or `ignore`.
	* If that top layer was found and matches the provided node, then the node is
	* responsible for the escape. Otherwise, we know that all layers defer so
	* the first layer is the responsible one.
	*/
	const topMostLayer = layersArr.findLast(([_, { current: behaviorType }]) => behaviorType === "close" || behaviorType === "ignore");
	if (topMostLayer) return topMostLayer[0] === instance;
	const [firstLayerNode] = layersArr[0];
	return firstLayerNode === instance;
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/escape-layer/escape-layer.svelte
function Escape_layer($$anchor, $$props) {
	push($$props, true);
	let escapeKeydownBehavior = prop($$props, "escapeKeydownBehavior", 3, "close"), onEscapeKeydown = prop($$props, "onEscapeKeydown", 3, noop);
	EscapeLayerState.create({
		escapeKeydownBehavior: boxWith(() => escapeKeydownBehavior()),
		onEscapeKeydown: boxWith(() => onEscapeKeydown()),
		enabled: boxWith(() => $$props.enabled),
		ref: $$props.ref
	});
	var fragment = comment();
	snippet(first_child(fragment), () => $$props.children ?? noop$1);
	append($$anchor, fragment);
	pop();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/focus-scope/focus-scope-manager.js
var FocusScopeManager = class FocusScopeManager {
	static instance;
	#scopeStack = simpleBox([]);
	#focusHistory = /* @__PURE__ */ new WeakMap();
	#preFocusHistory = /* @__PURE__ */ new WeakMap();
	static getInstance() {
		if (!this.instance) this.instance = new FocusScopeManager();
		return this.instance;
	}
	register(scope) {
		const current = this.getActive();
		if (current && current !== scope) current.pause();
		const activeElement = document.activeElement;
		if (activeElement && activeElement !== document.body) this.#preFocusHistory.set(scope, activeElement);
		this.#scopeStack.current = this.#scopeStack.current.filter((s) => s !== scope);
		this.#scopeStack.current.unshift(scope);
	}
	unregister(scope) {
		this.#scopeStack.current = this.#scopeStack.current.filter((s) => s !== scope);
		const next = this.getActive();
		if (next) next.resume();
	}
	getActive() {
		return this.#scopeStack.current[0];
	}
	setFocusMemory(scope, element) {
		this.#focusHistory.set(scope, element);
	}
	getFocusMemory(scope) {
		return this.#focusHistory.get(scope);
	}
	isActiveScope(scope) {
		return this.getActive() === scope;
	}
	setPreFocusMemory(scope, element) {
		this.#preFocusHistory.set(scope, element);
	}
	getPreFocusMemory(scope) {
		return this.#preFocusHistory.get(scope);
	}
	clearPreFocusMemory(scope) {
		this.#preFocusHistory.delete(scope);
	}
};
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/focus-scope/focus-scope.svelte.js
var FocusScope = class FocusScope {
	#paused = false;
	#container = null;
	#manager = FocusScopeManager.getInstance();
	#cleanupFns = [];
	#opts;
	constructor(opts) {
		this.#opts = opts;
	}
	get paused() {
		return this.#paused;
	}
	pause() {
		this.#paused = true;
	}
	resume() {
		this.#paused = false;
	}
	#cleanup() {
		for (const fn of this.#cleanupFns) fn();
		this.#cleanupFns = [];
	}
	mount(container) {
		if (this.#container) this.unmount();
		this.#container = container;
		this.#manager.register(this);
		this.#setupEventListeners();
		this.#handleOpenAutoFocus();
	}
	unmount() {
		if (!this.#container) return;
		this.#cleanup();
		this.#handleCloseAutoFocus();
		this.#manager.unregister(this);
		this.#manager.clearPreFocusMemory(this);
		this.#container = null;
	}
	#handleOpenAutoFocus() {
		if (!this.#container) return;
		const event = new CustomEvent("focusScope.onOpenAutoFocus", {
			bubbles: false,
			cancelable: true
		});
		this.#opts.onOpenAutoFocus.current(event);
		if (!event.defaultPrevented) requestAnimationFrame(() => {
			if (!this.#container) return;
			const firstTabbable = this.#getFirstTabbable();
			if (firstTabbable) {
				firstTabbable.focus();
				this.#manager.setFocusMemory(this, firstTabbable);
			} else this.#container.focus();
		});
	}
	#handleCloseAutoFocus() {
		const event = new CustomEvent("focusScope.onCloseAutoFocus", {
			bubbles: false,
			cancelable: true
		});
		this.#opts.onCloseAutoFocus.current?.(event);
		if (!event.defaultPrevented) {
			const preFocusedElement = this.#manager.getPreFocusMemory(this);
			if (preFocusedElement && document.contains(preFocusedElement)) try {
				preFocusedElement.focus();
			} catch {
				document.body.focus();
			}
		}
	}
	#setupEventListeners() {
		if (!this.#container || !this.#opts.trap.current) return;
		const container = this.#container;
		const doc = container.ownerDocument;
		const handleFocus = (e) => {
			if (this.#paused || !this.#manager.isActiveScope(this)) return;
			const target = e.target;
			if (!target) return;
			if (container.contains(target)) this.#manager.setFocusMemory(this, target);
			else {
				const lastFocused = this.#manager.getFocusMemory(this);
				if (lastFocused && container.contains(lastFocused) && isFocusable(lastFocused)) {
					e.preventDefault();
					lastFocused.focus();
				} else {
					const firstTabbable = this.#getFirstTabbable();
					const firstFocusable = this.#getAllFocusables()[0];
					(firstTabbable || firstFocusable || container).focus();
				}
			}
		};
		const handleKeydown = (e) => {
			if (!this.#opts.loop || this.#paused || e.key !== "Tab") return;
			if (!this.#manager.isActiveScope(this)) return;
			const tabbables = this.#getTabbables();
			if (tabbables.length === 0) return;
			const first = tabbables[0];
			const last = tabbables[tabbables.length - 1];
			if (!e.shiftKey && doc.activeElement === last) {
				e.preventDefault();
				first.focus();
			} else if (e.shiftKey && doc.activeElement === first) {
				e.preventDefault();
				last.focus();
			}
		};
		this.#cleanupFns.push(on(doc, "focusin", handleFocus, { capture: true }), on(container, "keydown", handleKeydown));
		const observer = new MutationObserver(() => {
			const lastFocused = this.#manager.getFocusMemory(this);
			if (lastFocused && !container.contains(lastFocused)) {
				const firstTabbable = this.#getFirstTabbable();
				const firstFocusable = this.#getAllFocusables()[0];
				const elementToFocus = firstTabbable || firstFocusable;
				if (elementToFocus) {
					elementToFocus.focus();
					this.#manager.setFocusMemory(this, elementToFocus);
				} else container.focus();
			}
		});
		observer.observe(container, {
			childList: true,
			subtree: true
		});
		this.#cleanupFns.push(() => observer.disconnect());
	}
	#getTabbables() {
		if (!this.#container) return [];
		return tabbable(this.#container, {
			includeContainer: false,
			getShadowRoot: true
		});
	}
	#getFirstTabbable() {
		return this.#getTabbables()[0] || null;
	}
	#getAllFocusables() {
		if (!this.#container) return [];
		return focusable(this.#container, {
			includeContainer: false,
			getShadowRoot: true
		});
	}
	static use(opts) {
		let scope = null;
		watch([() => opts.ref.current, () => opts.enabled.current], ([ref, enabled]) => {
			if (ref && enabled) {
				if (!scope) scope = new FocusScope(opts);
				scope.mount(ref);
			} else if (scope) {
				scope.unmount();
				scope = null;
			}
		});
		onDestroyEffect(() => {
			scope?.unmount();
		});
		return { get props() {
			return { tabindex: -1 };
		} };
	}
};
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/focus-scope/focus-scope.svelte
function Focus_scope($$anchor, $$props) {
	push($$props, true);
	let enabled = prop($$props, "enabled", 3, false), trapFocus = prop($$props, "trapFocus", 3, false), loop = prop($$props, "loop", 3, false), onCloseAutoFocus = prop($$props, "onCloseAutoFocus", 3, noop), onOpenAutoFocus = prop($$props, "onOpenAutoFocus", 3, noop);
	const focusScopeState = FocusScope.use({
		enabled: boxWith(() => enabled()),
		trap: boxWith(() => trapFocus()),
		loop: loop(),
		onCloseAutoFocus: boxWith(() => onCloseAutoFocus()),
		onOpenAutoFocus: boxWith(() => onOpenAutoFocus()),
		ref: $$props.ref
	});
	var fragment = comment();
	snippet(first_child(fragment), () => $$props.focusScope ?? noop$1, () => ({ props: focusScopeState.props }));
	append($$anchor, fragment);
	pop();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/text-selection-layer/use-text-selection-layer.svelte.js
var noopPointer = () => {};
globalThis.bitsTextSelectionLayers ??= /* @__PURE__ */ new Map();
var TextSelectionLayerState = class TextSelectionLayerState {
	static create(opts) {
		return new TextSelectionLayerState(opts);
	}
	opts;
	domContext;
	#unsubSelectionLock = noop;
	#enabledSnapshot = false;
	#onPointerDownSnapshot = noopPointer;
	#onPointerUpSnapshot = noopPointer;
	constructor(opts) {
		this.opts = opts;
		this.domContext = new DOMContext(opts.ref);
		let unsubEvents = noop;
		watch(() => [
			this.opts.enabled.current,
			this.opts.onPointerDown.current,
			this.opts.onPointerUp.current
		], ([enabled, onPointerDown, onPointerUp]) => {
			this.#enabledSnapshot = enabled;
			this.#onPointerDownSnapshot = onPointerDown;
			this.#onPointerUpSnapshot = onPointerUp;
			if (enabled) {
				globalThis.bitsTextSelectionLayers.set(this, this.opts.enabled);
				unsubEvents();
				unsubEvents = this.#addEventListeners();
			}
			return () => {
				this.#enabledSnapshot = false;
				unsubEvents();
				this.#resetSelectionLock();
				globalThis.bitsTextSelectionLayers.delete(this);
			};
		});
	}
	#addEventListeners() {
		return executeCallbacks(on(this.domContext.getDocument(), "pointerdown", this.#pointerdown), on(this.domContext.getDocument(), "pointerup", composeHandlers(this.#resetSelectionLock, this.#pointerupUserHandler)));
	}
	#pointerupUserHandler = (e) => {
		this.#onPointerUpSnapshot(e);
	};
	#pointerdown = (e) => {
		const node = this.opts.ref.current;
		const target = e.target;
		if (!isHTMLElement$1(node) || !isHTMLElement$1(target) || !this.#enabledSnapshot) return;
		/**
		* We only lock user-selection overflow if layer is the top most layer and
		* pointerdown occurred inside the node. You are still allowed to select text
		* outside the node provided pointerdown occurs outside the node.
		*/
		if (!isHighestLayer(this) || !contains(node, target)) return;
		this.#onPointerDownSnapshot(e);
		if (e.defaultPrevented) return;
		this.#unsubSelectionLock = preventTextSelectionOverflow(node, this.domContext.getDocument().body);
	};
	#resetSelectionLock = () => {
		this.#unsubSelectionLock();
		this.#unsubSelectionLock = noop;
	};
};
var getUserSelect = (node) => node.style.userSelect || node.style.webkitUserSelect;
function preventTextSelectionOverflow(node, body) {
	const originalBodyUserSelect = getUserSelect(body);
	const originalNodeUserSelect = getUserSelect(node);
	setUserSelect(body, "none");
	setUserSelect(node, "text");
	return () => {
		setUserSelect(body, originalBodyUserSelect);
		setUserSelect(node, originalNodeUserSelect);
	};
}
function setUserSelect(node, value) {
	node.style.userSelect = value;
	node.style.webkitUserSelect = value;
}
function isHighestLayer(instance) {
	const layersArr = [...globalThis.bitsTextSelectionLayers];
	if (!layersArr.length) return false;
	const highestLayer = layersArr.at(-1);
	if (!highestLayer) return false;
	return highestLayer[0] === instance;
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/text-selection-layer/text-selection-layer.svelte
function Text_selection_layer($$anchor, $$props) {
	push($$props, true);
	let preventOverflowTextSelection = prop($$props, "preventOverflowTextSelection", 3, true), onPointerDown = prop($$props, "onPointerDown", 3, noop), onPointerUp = prop($$props, "onPointerUp", 3, noop);
	TextSelectionLayerState.create({
		id: boxWith(() => $$props.id),
		onPointerDown: boxWith(() => onPointerDown()),
		onPointerUp: boxWith(() => onPointerUp()),
		enabled: boxWith(() => $$props.enabled && preventOverflowTextSelection()),
		ref: $$props.ref
	});
	var fragment = comment();
	snippet(first_child(fragment), () => $$props.children ?? noop$1);
	append($$anchor, fragment);
	pop();
}
//#endregion
//#region node_modules/bits-ui/dist/internal/use-id.js
globalThis.bitsIdCounter ??= { current: 0 };
/**
* Generates a unique ID based on a global counter.
*/
function useId(prefix = "bits") {
	globalThis.bitsIdCounter.current++;
	return `${prefix}-${globalThis.bitsIdCounter.current}`;
}
//#endregion
//#region node_modules/bits-ui/dist/internal/shared-state.svelte.js
var SharedState = class {
	#factory;
	#subscribers = 0;
	#state = state();
	#scope;
	constructor(factory) {
		this.#factory = factory;
	}
	#dispose() {
		this.#subscribers -= 1;
		if (this.#scope && this.#subscribers <= 0) {
			this.#scope();
			set(this.#state, void 0);
			this.#scope = void 0;
		}
	}
	get(...args) {
		this.#subscribers += 1;
		if (get$2(this.#state) === void 0) this.#scope = effect_root(() => {
			set(this.#state, this.#factory(...args), true);
		});
		user_effect(() => {
			return () => {
				this.#dispose();
			};
		});
		return get$2(this.#state);
	}
};
//#endregion
//#region node_modules/bits-ui/dist/internal/body-scroll-lock.svelte.js
var lockMap = new SvelteMap();
var initialBodyStyle = state(null);
var stopTouchMoveListener = null;
var cleanupTimeoutId = null;
var isInCleanupTransition = false;
var anyLocked = boxWith(() => {
	for (const value of lockMap.values()) if (value) return true;
	return false;
});
/**
* We track the time we scheduled the cleanup to prevent race conditions
* when multiple locks are created/destroyed in the same tick, ensuring
* only the last one to schedule the cleanup will run.
*
* reference: https://github.com/huntabyte/bits-ui/issues/1639
*/
var cleanupScheduledAt = null;
var bodyLockStackCount = new SharedState(() => {
	function resetBodyStyle() {
		document.body.setAttribute("style", get$2(initialBodyStyle) ?? "");
		document.body.style.removeProperty("--scrollbar-width");
		isIOS && stopTouchMoveListener?.();
		set(initialBodyStyle, null);
	}
	function cancelPendingCleanup() {
		if (cleanupTimeoutId === null) return;
		window.clearTimeout(cleanupTimeoutId);
		cleanupTimeoutId = null;
	}
	function scheduleCleanupIfNoNewLocks(delay, callback) {
		cancelPendingCleanup();
		isInCleanupTransition = true;
		cleanupScheduledAt = Date.now();
		const currentCleanupId = cleanupScheduledAt;
		/**
		* We schedule the cleanup to run after a delay to allow new locks to register
		* that might have been added in the same tick as the current cleanup.
		*
		* If a new lock is added in the same tick, the cleanup will be cancelled and
		* a new cleanup will be scheduled.
		*
		* This is to prevent the cleanup from running too early and resetting the body
		* style before the new lock has had a chance to apply its styles.
		*/
		const cleanupFn = () => {
			cleanupTimeoutId = null;
			if (cleanupScheduledAt !== currentCleanupId) return;
			if (!isAnyLocked(lockMap)) {
				isInCleanupTransition = false;
				callback();
			} else isInCleanupTransition = false;
		};
		const actualDelay = delay === null ? 24 : delay;
		cleanupTimeoutId = window.setTimeout(cleanupFn, actualDelay);
	}
	function ensureInitialStyleCaptured() {
		if (get$2(initialBodyStyle) === null && lockMap.size === 0 && !isInCleanupTransition) set(initialBodyStyle, document.body.getAttribute("style"), true);
	}
	watch(() => anyLocked.current, () => {
		if (!anyLocked.current) return;
		ensureInitialStyleCaptured();
		isInCleanupTransition = false;
		const htmlStyle = getComputedStyle(document.documentElement);
		const bodyStyle = getComputedStyle(document.body);
		const hasStableGutter = htmlStyle.scrollbarGutter?.includes("stable") || bodyStyle.scrollbarGutter?.includes("stable");
		const verticalScrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
		const config = {
			padding: Number.parseInt(bodyStyle.paddingRight ?? "0", 10) + verticalScrollbarWidth,
			margin: Number.parseInt(bodyStyle.marginRight ?? "0", 10)
		};
		if (verticalScrollbarWidth > 0 && !hasStableGutter) {
			document.body.style.paddingRight = `${config.padding}px`;
			document.body.style.marginRight = `${config.margin}px`;
			document.body.style.setProperty("--scrollbar-width", `${verticalScrollbarWidth}px`);
		}
		document.body.style.overflow = "hidden";
		if (isIOS) stopTouchMoveListener = on(document, "touchmove", (e) => {
			if (e.target !== document.documentElement) return;
			if (e.touches.length > 1) return;
			e.preventDefault();
		}, { passive: false });
		/**
		* We ensure pointer-events: none is applied _after_ DOM updates, so that any focus/
		* interaction changes from opening overlays/menus complete _before_ we block pointer
		* events.
		*
		* this avoids race conditions where pointer-events could be set too early and break
		* focus/interaction.
		*/
		afterTick(() => {
			document.body.style.pointerEvents = "none";
			document.body.style.overflow = "hidden";
		});
	});
	onDestroyEffect(() => {
		return () => {
			stopTouchMoveListener?.();
		};
	});
	return {
		get lockMap() {
			return lockMap;
		},
		resetBodyStyle,
		scheduleCleanupIfNoNewLocks,
		cancelPendingCleanup,
		ensureInitialStyleCaptured
	};
});
var BodyScrollLock = class {
	#id = useId();
	#initialState;
	#restoreScrollDelay = () => null;
	#countState;
	locked;
	constructor(initialState, restoreScrollDelay = () => null) {
		this.#initialState = initialState;
		this.#restoreScrollDelay = restoreScrollDelay;
		this.#countState = bodyLockStackCount.get();
		if (!this.#countState) return;
		/**
		* Since a new lock is being created, we cancel any pending cleanup to
		* prevent the cleanup from running too early and resetting the body style
		* before the new lock has had a chance to apply its styles.
		*
		* reference: https://github.com/huntabyte/bits-ui/issues/1639
		*/
		this.#countState.cancelPendingCleanup();
		this.#countState.ensureInitialStyleCaptured();
		this.#countState.lockMap.set(this.#id, this.#initialState ?? false);
		this.locked = boxWith(() => this.#countState.lockMap.get(this.#id) ?? false, (v) => this.#countState.lockMap.set(this.#id, v));
		onDestroyEffect(() => {
			this.#countState.lockMap.delete(this.#id);
			if (isAnyLocked(this.#countState.lockMap)) return;
			const restoreScrollDelay = this.#restoreScrollDelay();
			/**
			* We schedule the cleanup to run after a delay to handle same-tick
			* destroy/create scenarios.
			*
			* reference: https://github.com/huntabyte/bits-ui/issues/1639
			*/
			this.#countState.scheduleCleanupIfNoNewLocks(restoreScrollDelay, () => {
				this.#countState.resetBodyStyle();
			});
		});
	}
};
function isAnyLocked(map) {
	for (const [_, value] of map) if (value) return true;
	return false;
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/scroll-lock/scroll-lock.svelte
function Scroll_lock($$anchor, $$props) {
	push($$props, true);
	let preventScroll = prop($$props, "preventScroll", 3, true), restoreScrollDelay = prop($$props, "restoreScrollDelay", 3, null);
	if (preventScroll()) new BodyScrollLock(preventScroll(), () => restoreScrollDelay());
	pop();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/dialog/components/dialog-overlay.svelte
var rest_excludes$41 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"id",
	"forceMount",
	"child",
	"children",
	"ref"
]);
var root$27 = from_html(`<div><!></div>`);
function Dialog_overlay($$anchor, $$props) {
	const uid = props_id();
	push($$props, true);
	let id = prop($$props, "id", 19, () => createId(uid)), forceMount = prop($$props, "forceMount", 3, false), ref = prop($$props, "ref", 15, null), restProps = rest_props($$props, rest_excludes$41);
	const overlayState = DialogOverlayState.create({
		id: boxWith(() => id()),
		ref: boxWith(() => ref(), (v) => ref(v))
	});
	const mergedProps = user_derived(() => mergeProps(restProps, overlayState.props));
	var fragment = comment();
	var node = first_child(fragment);
	var consequent_1 = ($$anchor) => {
		var fragment_1 = comment();
		var node_1 = first_child(fragment_1);
		var consequent = ($$anchor) => {
			var fragment_2 = comment();
			var node_2 = first_child(fragment_2);
			{
				let $0 = user_derived(() => ({
					props: mergeProps(get$2(mergedProps)),
					...overlayState.snippetProps
				}));
				snippet(node_2, () => $$props.child, () => get$2($0));
			}
			append($$anchor, fragment_2);
		};
		var alternate = ($$anchor) => {
			var div = root$27();
			attribute_effect(div, ($0) => ({ ...$0 }), [() => mergeProps(get$2(mergedProps))]);
			snippet(child(div), () => $$props.children ?? noop$1, () => overlayState.snippetProps);
			reset(div);
			append($$anchor, div);
		};
		if_block(node_1, ($$render) => {
			if ($$props.child) $$render(consequent);
			else $$render(alternate, -1);
		});
		append($$anchor, fragment_1);
	};
	if_block(node, ($$render) => {
		if (overlayState.shouldRender || forceMount()) $$render(consequent_1);
	});
	append($$anchor, fragment);
	pop();
}
//#endregion
//#region node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
/**
* Custom positioning reference element.
* @see https://floating-ui.com/docs/virtual-elements
*/
var sides = [
	"top",
	"right",
	"bottom",
	"left"
];
var min = Math.min;
var max = Math.max;
var round = Math.round;
var floor = Math.floor;
var createCoords = (v) => ({
	x: v,
	y: v
});
var oppositeSideMap = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function clamp(start, value, end) {
	return max(start, min(value, end));
}
function evaluate(value, param) {
	return typeof value === "function" ? value(param) : value;
}
function getSide$1(placement) {
	return placement.split("-")[0];
}
function getAlignment(placement) {
	return placement.split("-")[1];
}
function getOppositeAxis(axis) {
	return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
	return axis === "y" ? "height" : "width";
}
function getSideAxis(placement) {
	const firstChar = placement[0];
	return firstChar === "t" || firstChar === "b" ? "y" : "x";
}
function getAlignmentAxis(placement) {
	return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
	if (rtl === void 0) rtl = false;
	const alignment = getAlignment(placement);
	const alignmentAxis = getAlignmentAxis(placement);
	const length = getAxisLength(alignmentAxis);
	let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
	if (rects.reference[length] > rects.floating[length]) mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
	return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
	const oppositePlacement = getOppositePlacement(placement);
	return [
		getOppositeAlignmentPlacement(placement),
		oppositePlacement,
		getOppositeAlignmentPlacement(oppositePlacement)
	];
}
function getOppositeAlignmentPlacement(placement) {
	return placement.includes("start") ? placement.replace("start", "end") : placement.replace("end", "start");
}
var lrPlacement = ["left", "right"];
var rlPlacement = ["right", "left"];
var tbPlacement = ["top", "bottom"];
var btPlacement = ["bottom", "top"];
function getSideList(side, isStart, rtl) {
	switch (side) {
		case "top":
		case "bottom":
			if (rtl) return isStart ? rlPlacement : lrPlacement;
			return isStart ? lrPlacement : rlPlacement;
		case "left":
		case "right": return isStart ? tbPlacement : btPlacement;
		default: return [];
	}
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
	const alignment = getAlignment(placement);
	let list = getSideList(getSide$1(placement), direction === "start", rtl);
	if (alignment) {
		list = list.map((side) => side + "-" + alignment);
		if (flipAlignment) list = list.concat(list.map(getOppositeAlignmentPlacement));
	}
	return list;
}
function getOppositePlacement(placement) {
	const side = getSide$1(placement);
	return oppositeSideMap[side] + placement.slice(side.length);
}
function expandPaddingObject(padding) {
	var _padding$top, _padding$right, _padding$bottom, _padding$left;
	return {
		top: (_padding$top = padding.top) != null ? _padding$top : 0,
		right: (_padding$right = padding.right) != null ? _padding$right : 0,
		bottom: (_padding$bottom = padding.bottom) != null ? _padding$bottom : 0,
		left: (_padding$left = padding.left) != null ? _padding$left : 0
	};
}
function getPaddingObject(padding) {
	return typeof padding !== "number" ? expandPaddingObject(padding) : {
		top: padding,
		right: padding,
		bottom: padding,
		left: padding
	};
}
function rectToClientRect(rect) {
	const { x, y, width, height } = rect;
	return {
		width,
		height,
		top: y,
		left: x,
		right: x + width,
		bottom: y + height,
		x,
		y
	};
}
//#endregion
//#region node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function computeCoordsFromPlacement(_ref, placement, rtl) {
	let { reference, floating } = _ref;
	const sideAxis = getSideAxis(placement);
	const alignmentAxis = getAlignmentAxis(placement);
	const alignLength = getAxisLength(alignmentAxis);
	const side = getSide$1(placement);
	const isVertical = sideAxis === "y";
	const commonX = reference.x + reference.width / 2 - floating.width / 2;
	const commonY = reference.y + reference.height / 2 - floating.height / 2;
	const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
	let coords;
	switch (side) {
		case "top":
			coords = {
				x: commonX,
				y: reference.y - floating.height
			};
			break;
		case "bottom":
			coords = {
				x: commonX,
				y: reference.y + reference.height
			};
			break;
		case "right":
			coords = {
				x: reference.x + reference.width,
				y: commonY
			};
			break;
		case "left":
			coords = {
				x: reference.x - floating.width,
				y: commonY
			};
			break;
		default: coords = {
			x: reference.x,
			y: reference.y
		};
	}
	const alignment = getAlignment(placement);
	if (alignment) coords[alignmentAxis] += commonAlign * (alignment === "end" ? 1 : -1) * (rtl && isVertical ? -1 : 1);
	return coords;
}
/**
* Resolves with an object of overflow side offsets that determine how much the
* element is overflowing a given clipping boundary on each side.
* - positive = overflowing the boundary by that number of pixels
* - negative = how many pixels left before it will overflow
* - 0 = lies flush with the boundary
* @see https://floating-ui.com/docs/detectOverflow
*/
async function detectOverflow(state, options) {
	var _await$platform$isEle;
	if (options === void 0) options = {};
	const { x, y, platform, rects, elements, strategy } = state;
	const { boundary = "clippingAncestors", rootBoundary = "viewport", elementContext = "floating", altBoundary = false, padding = 0 } = evaluate(options, state);
	const paddingObject = getPaddingObject(padding);
	const element = elements[altBoundary ? elementContext === "floating" ? "reference" : "floating" : elementContext];
	const clippingClientRect = rectToClientRect(await platform.getClippingRect({
		element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating)),
		boundary,
		rootBoundary,
		strategy
	}));
	const rect = elementContext === "floating" ? {
		x,
		y,
		width: rects.floating.width,
		height: rects.floating.height
	} : rects.reference;
	const offsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating));
	const offsetScale = await (platform.isElement == null ? void 0 : platform.isElement(offsetParent)) && await (platform.getScale == null ? void 0 : platform.getScale(offsetParent)) || {
		x: 1,
		y: 1
	};
	const elementClientRect = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
		elements,
		rect,
		offsetParent,
		strategy
	}) : rect);
	return {
		top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
		bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
		left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
		right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
	};
}
var MAX_RESET_COUNT = 50;
/**
* Computes the `x` and `y` coordinates that will place the floating element
* next to a given reference element.
*
* This export does not have any `platform` interface logic. You will need to
* write one for the platform you are using Floating UI with.
*/
var computePosition$1 = async (reference, floating, config) => {
	const { placement = "bottom", strategy = "absolute", middleware = [], platform } = config;
	const platformWithDetectOverflow = platform.detectOverflow ? platform : {
		...platform,
		detectOverflow
	};
	const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
	let rects = await platform.getElementRects({
		reference,
		floating,
		strategy
	});
	let { x, y } = computeCoordsFromPlacement(rects, placement, rtl);
	let statefulPlacement = placement;
	let resetCount = 0;
	const middlewareData = {};
	for (let i = 0; i < middleware.length; i++) {
		const currentMiddleware = middleware[i];
		if (!currentMiddleware) continue;
		const { name, fn } = currentMiddleware;
		const { x: nextX, y: nextY, data, reset } = await fn({
			x,
			y,
			initialPlacement: placement,
			placement: statefulPlacement,
			strategy,
			middlewareData,
			rects,
			platform: platformWithDetectOverflow,
			elements: {
				reference,
				floating
			}
		});
		x = nextX != null ? nextX : x;
		y = nextY != null ? nextY : y;
		middlewareData[name] = {
			...middlewareData[name],
			...data
		};
		if (reset && resetCount < MAX_RESET_COUNT) {
			resetCount++;
			if (typeof reset === "object") {
				if (reset.placement) statefulPlacement = reset.placement;
				if (reset.rects) rects = reset.rects === true ? await platform.getElementRects({
					reference,
					floating,
					strategy
				}) : reset.rects;
				({x, y} = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
			}
			i = -1;
		}
	}
	return {
		x,
		y,
		placement: statefulPlacement,
		strategy,
		middlewareData
	};
};
/**
* Provides data to position an inner element of the floating element so that it
* appears centered to the reference element.
* @see https://floating-ui.com/docs/arrow
*/
var arrow$1 = (options) => ({
	name: "arrow",
	options,
	async fn(state) {
		const { x, y, placement, rects, platform, elements, middlewareData } = state;
		const { element, padding = 0 } = evaluate(options, state) || {};
		if (element == null) return {};
		const paddingObject = getPaddingObject(padding);
		const coords = {
			x,
			y
		};
		const axis = getAlignmentAxis(placement);
		const length = getAxisLength(axis);
		const arrowDimensions = await platform.getDimensions(element);
		const isYAxis = axis === "y";
		const minProp = isYAxis ? "top" : "left";
		const maxProp = isYAxis ? "bottom" : "right";
		const clientProp = isYAxis ? "clientHeight" : "clientWidth";
		const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
		const startDiff = coords[axis] - rects.reference[axis];
		const arrowOffsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element));
		let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
		if (!clientSize || !await (platform.isElement == null ? void 0 : platform.isElement(arrowOffsetParent))) clientSize = elements.floating[clientProp] || rects.floating[length];
		const centerToReference = endDiff / 2 - startDiff / 2;
		const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
		const minPadding = min(paddingObject[minProp], largestPossiblePadding);
		const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
		const max = clientSize - arrowDimensions[length] - maxPadding;
		const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
		const offset = clamp(minPadding, center, max);
		const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset && rects.reference[length] / 2 - (center < minPadding ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
		const alignmentOffset = shouldAddOffset ? center < minPadding ? center - minPadding : center - max : 0;
		return {
			[axis]: coords[axis] + alignmentOffset,
			data: {
				[axis]: offset,
				centerOffset: center - offset - alignmentOffset,
				...shouldAddOffset && { alignmentOffset }
			},
			reset: shouldAddOffset
		};
	}
});
/**
* Optimizes the visibility of the floating element by flipping the `placement`
* in order to keep it in view when the preferred placement(s) will overflow the
* clipping boundary. Alternative to `autoPlacement`.
* @see https://floating-ui.com/docs/flip
*/
var flip$1 = function(options) {
	if (options === void 0) options = {};
	return {
		name: "flip",
		options,
		async fn(state) {
			var _middlewareData$arrow, _middlewareData$flip;
			const { placement, middlewareData, rects, initialPlacement, platform, elements } = state;
			const { mainAxis: checkMainAxis = true, crossAxis: checkCrossAxis = true, fallbackPlacements: specifiedFallbackPlacements, fallbackStrategy = "bestFit", fallbackAxisSideDirection = "none", flipAlignment = true, ...detectOverflowOptions } = evaluate(options, state);
			if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) return {};
			const side = getSide$1(placement);
			const initialSideAxis = getSideAxis(initialPlacement);
			const isBasePlacement = getSide$1(initialPlacement) === initialPlacement;
			const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
			const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
			const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
			if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
			const placements = [initialPlacement, ...fallbackPlacements];
			const overflow = await platform.detectOverflow(state, detectOverflowOptions);
			const overflows = [];
			let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
			if (checkMainAxis) overflows.push(overflow[side]);
			if (checkCrossAxis) {
				const sides = getAlignmentSides(placement, rects, rtl);
				overflows.push(overflow[sides[0]], overflow[sides[1]]);
			}
			overflowsData = [...overflowsData, {
				placement,
				overflows
			}];
			if (!overflows.every((side) => side <= 0)) {
				var _middlewareData$flip2, _overflowsData$filter;
				const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
				const nextPlacement = placements[nextIndex];
				if (nextPlacement) {
					if (!(checkCrossAxis === "alignment" ? initialSideAxis !== getSideAxis(nextPlacement) : false) || overflowsData.every((d) => getSideAxis(d.placement) === initialSideAxis ? d.overflows[0] > 0 : true)) return {
						data: {
							index: nextIndex,
							overflows: overflowsData
						},
						reset: { placement: nextPlacement }
					};
				}
				let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
				if (!resetPlacement) switch (fallbackStrategy) {
					case "bestFit": {
						var _overflowsData$filter2;
						const placement = (_overflowsData$filter2 = overflowsData.filter((d) => {
							if (hasFallbackAxisSideDirection) {
								const currentSideAxis = getSideAxis(d.placement);
								return currentSideAxis === initialSideAxis || currentSideAxis === "y";
							}
							return true;
						}).map((d) => [d.placement, d.overflows.filter((overflow) => overflow > 0).reduce((acc, overflow) => acc + overflow, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
						if (placement) resetPlacement = placement;
						break;
					}
					case "initialPlacement":
						resetPlacement = initialPlacement;
						break;
				}
				if (placement !== resetPlacement) return { reset: { placement: resetPlacement } };
			}
			return {};
		}
	};
};
function getSideOffsets(overflow, rect) {
	return {
		top: overflow.top - rect.height,
		right: overflow.right - rect.width,
		bottom: overflow.bottom - rect.height,
		left: overflow.left - rect.width
	};
}
function isAnySideFullyClipped(overflow) {
	return sides.some((side) => overflow[side] >= 0);
}
/**
* Provides data to hide the floating element in applicable situations, such as
* when it is not in the same clipping context as the reference element.
* @see https://floating-ui.com/docs/hide
*/
var hide$1 = function(options) {
	if (options === void 0) options = {};
	return {
		name: "hide",
		options,
		async fn(state) {
			const { rects, platform } = state;
			const { strategy = "referenceHidden", ...detectOverflowOptions } = evaluate(options, state);
			switch (strategy) {
				case "referenceHidden": {
					const offsets = getSideOffsets(await platform.detectOverflow(state, {
						...detectOverflowOptions,
						elementContext: "reference"
					}), rects.reference);
					return { data: {
						referenceHiddenOffsets: offsets,
						referenceHidden: isAnySideFullyClipped(offsets)
					} };
				}
				case "escaped": {
					const offsets = getSideOffsets(await platform.detectOverflow(state, {
						...detectOverflowOptions,
						altBoundary: true
					}), rects.floating);
					return { data: {
						escapedOffsets: offsets,
						escaped: isAnySideFullyClipped(offsets)
					} };
				}
				default: return {};
			}
		}
	};
};
var originSides = /*#__PURE__*/ new Set(["left", "top"]);
async function convertValueToCoords(state, options) {
	const { placement, platform, elements } = state;
	const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
	const side = getSide$1(placement);
	const alignment = getAlignment(placement);
	const isVertical = getSideAxis(placement) === "y";
	const mainAxisMulti = originSides.has(side) ? -1 : 1;
	const crossAxisMulti = rtl && isVertical ? -1 : 1;
	const rawValue = evaluate(options, state);
	let { mainAxis, crossAxis, alignmentAxis } = typeof rawValue === "number" ? {
		mainAxis: rawValue,
		crossAxis: 0,
		alignmentAxis: null
	} : {
		mainAxis: rawValue.mainAxis || 0,
		crossAxis: rawValue.crossAxis || 0,
		alignmentAxis: rawValue.alignmentAxis
	};
	if (alignment && typeof alignmentAxis === "number") crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
	return isVertical ? {
		x: crossAxis * crossAxisMulti,
		y: mainAxis * mainAxisMulti
	} : {
		x: mainAxis * mainAxisMulti,
		y: crossAxis * crossAxisMulti
	};
}
/**
* Modifies the placement by translating the floating element along the
* specified axes.
* A number (shorthand for `mainAxis` or distance), or an axes configuration
* object may be passed.
* @see https://floating-ui.com/docs/offset
*/
var offset$1 = function(options) {
	if (options === void 0) options = 0;
	return {
		name: "offset",
		options,
		async fn(state) {
			var _middlewareData$offse, _middlewareData$arrow;
			const { x, y, placement, middlewareData } = state;
			const diffCoords = await convertValueToCoords(state, options);
			if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) return {};
			return {
				x: x + diffCoords.x,
				y: y + diffCoords.y,
				data: {
					...diffCoords,
					placement
				}
			};
		}
	};
};
/**
* Optimizes the visibility of the floating element by shifting it in order to
* keep it in view when it will overflow the clipping boundary.
* @see https://floating-ui.com/docs/shift
*/
var shift$1 = function(options) {
	if (options === void 0) options = {};
	return {
		name: "shift",
		options,
		async fn(state) {
			const { x, y, placement, platform } = state;
			const { mainAxis: checkMainAxis = true, crossAxis: checkCrossAxis = false, limiter = { fn: (_ref) => {
				let { x, y } = _ref;
				return {
					x,
					y
				};
			} }, ...detectOverflowOptions } = evaluate(options, state);
			const coords = {
				x,
				y
			};
			const overflow = await platform.detectOverflow(state, detectOverflowOptions);
			const crossAxis = getSideAxis(placement);
			const mainAxis = getOppositeAxis(crossAxis);
			let mainAxisCoord = coords[mainAxis];
			let crossAxisCoord = coords[crossAxis];
			const clampCoord = (axis, coord) => clamp(coord + overflow[axis === "y" ? "top" : "left"], coord, coord - overflow[axis === "y" ? "bottom" : "right"]);
			if (checkMainAxis) mainAxisCoord = clampCoord(mainAxis, mainAxisCoord);
			if (checkCrossAxis) crossAxisCoord = clampCoord(crossAxis, crossAxisCoord);
			const limitedCoords = limiter.fn({
				...state,
				[mainAxis]: mainAxisCoord,
				[crossAxis]: crossAxisCoord
			});
			return {
				...limitedCoords,
				data: {
					x: limitedCoords.x - x,
					y: limitedCoords.y - y,
					enabled: {
						[mainAxis]: checkMainAxis,
						[crossAxis]: checkCrossAxis
					}
				}
			};
		}
	};
};
/**
* Built-in `limiter` that will stop `shift()` at a certain point.
*/
var limitShift$1 = function(options) {
	if (options === void 0) options = {};
	return {
		options,
		fn(state) {
			var _rawOffset$mainAxis, _rawOffset$crossAxis;
			const { x, y, placement, rects, middlewareData } = state;
			const { offset = 0, mainAxis: checkMainAxis = true, crossAxis: checkCrossAxis = true } = evaluate(options, state);
			const coords = {
				x,
				y
			};
			const crossAxis = getSideAxis(placement);
			const mainAxis = getOppositeAxis(crossAxis);
			let mainAxisCoord = coords[mainAxis];
			let crossAxisCoord = coords[crossAxis];
			const rawOffset = evaluate(offset, state);
			const computedOffset = typeof rawOffset === "number" ? {
				mainAxis: rawOffset,
				crossAxis: 0
			} : {
				mainAxis: (_rawOffset$mainAxis = rawOffset.mainAxis) != null ? _rawOffset$mainAxis : 0,
				crossAxis: (_rawOffset$crossAxis = rawOffset.crossAxis) != null ? _rawOffset$crossAxis : 0
			};
			if (checkMainAxis) {
				const len = mainAxis === "y" ? "height" : "width";
				const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
				const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
				if (mainAxisCoord < limitMin) mainAxisCoord = limitMin;
				else if (mainAxisCoord > limitMax) mainAxisCoord = limitMax;
			}
			if (checkCrossAxis) {
				var _middlewareData$offse, _middlewareData$offse2;
				const len = mainAxis === "y" ? "width" : "height";
				const isOriginSide = originSides.has(getSide$1(placement));
				const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
				const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
				if (crossAxisCoord < limitMin) crossAxisCoord = limitMin;
				else if (crossAxisCoord > limitMax) crossAxisCoord = limitMax;
			}
			return {
				[mainAxis]: mainAxisCoord,
				[crossAxis]: crossAxisCoord
			};
		}
	};
};
/**
* Provides data that allows you to change the size of the floating element —
* for instance, prevent it from overflowing the clipping boundary or match the
* width of the reference element.
* @see https://floating-ui.com/docs/size
*/
var size$1 = function(options) {
	if (options === void 0) options = {};
	return {
		name: "size",
		options,
		async fn(state) {
			const { placement, rects, platform, elements } = state;
			const { apply = () => {}, ...detectOverflowOptions } = evaluate(options, state);
			const overflow = await platform.detectOverflow(state, detectOverflowOptions);
			const side = getSide$1(placement);
			const alignment = getAlignment(placement);
			const isYAxis = getSideAxis(placement) === "y";
			const { width, height } = rects.floating;
			let heightSide;
			let widthSide;
			if (side === "top" || side === "bottom") {
				heightSide = side;
				widthSide = alignment === (await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
			} else {
				widthSide = side;
				heightSide = alignment === "end" ? "top" : "bottom";
			}
			const maximumClippingHeight = height - overflow.top - overflow.bottom;
			const maximumClippingWidth = width - overflow.left - overflow.right;
			const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
			const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
			const shiftData = state.middlewareData.shift;
			const noShift = !shiftData;
			let availableHeight = overflowAvailableHeight;
			let availableWidth = overflowAvailableWidth;
			if (shiftData != null && shiftData.enabled.x) availableWidth = maximumClippingWidth;
			if (shiftData != null && shiftData.enabled.y) availableHeight = maximumClippingHeight;
			if (noShift && !alignment) if (isYAxis) availableWidth = width - 2 * max(overflow.left, overflow.right);
			else availableHeight = height - 2 * max(overflow.top, overflow.bottom);
			await apply({
				...state,
				availableWidth,
				availableHeight
			});
			const nextDimensions = await platform.getDimensions(elements.floating);
			if (width !== nextDimensions.width || height !== nextDimensions.height) return { reset: { rects: true } };
			return {};
		}
	};
};
//#endregion
//#region node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function hasWindow() {
	return typeof window !== "undefined";
}
function getNodeName(node) {
	if (isNode(node)) return (node.nodeName || "").toLowerCase();
	return "#document";
}
function getWindow(node) {
	var _node$ownerDocument;
	return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
	var _ref;
	return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
	if (!hasWindow()) return false;
	return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
	if (!hasWindow()) return false;
	return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
	if (!hasWindow()) return false;
	return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
	if (!hasWindow() || typeof ShadowRoot === "undefined") return false;
	return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
	const { overflow, overflowX, overflowY, display } = getComputedStyle$1(element);
	return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && display !== "inline" && display !== "contents";
}
function isTableElement(element) {
	return /^(table|td|th)$/.test(getNodeName(element));
}
function isTopLayer(element) {
	try {
		if (element.matches(":popover-open")) return true;
	} catch (_e) {}
	try {
		return element.matches(":modal");
	} catch (_e) {
		return false;
	}
}
var willChangeRe = /transform|translate|scale|rotate|perspective|filter/;
var containRe = /paint|layout|strict|content/;
var isNotNone = (value) => !!value && value !== "none";
var isWebKitValue;
function isContainingBlock(elementOrCss) {
	const css = isElement(elementOrCss) ? getComputedStyle$1(elementOrCss) : elementOrCss;
	return isNotNone(css.transform) || isNotNone(css.translate) || isNotNone(css.scale) || isNotNone(css.rotate) || isNotNone(css.perspective) || !isWebKit() && (isNotNone(css.backdropFilter) || isNotNone(css.filter)) || willChangeRe.test(css.willChange || "") || containRe.test(css.contain || "");
}
function getContainingBlock(element) {
	let currentNode = getParentNode(element);
	while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
		if (isContainingBlock(currentNode)) return currentNode;
		else if (isTopLayer(currentNode)) return null;
		currentNode = getParentNode(currentNode);
	}
	return null;
}
function isWebKit() {
	if (isWebKitValue == null) isWebKitValue = typeof CSS !== "undefined" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none");
	return isWebKitValue;
}
function isLastTraversableNode(node) {
	return /^(html|body|#document)$/.test(getNodeName(node));
}
function getComputedStyle$1(element) {
	return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
	if (isElement(element)) return {
		scrollLeft: element.scrollLeft,
		scrollTop: element.scrollTop
	};
	return {
		scrollLeft: element.scrollX,
		scrollTop: element.scrollY
	};
}
function getParentNode(node) {
	if (getNodeName(node) === "html") return node;
	const result = node.assignedSlot || node.parentNode || isShadowRoot(node) && node.host || getDocumentElement(node);
	return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
	const parentNode = getParentNode(node);
	if (isLastTraversableNode(parentNode)) return (node.ownerDocument || node).body;
	if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) return parentNode;
	return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
	var _node$ownerDocument2;
	if (list === void 0) list = [];
	if (traverseIframes === void 0) traverseIframes = true;
	const scrollableAncestor = getNearestOverflowAncestor(node);
	const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
	const win = getWindow(scrollableAncestor);
	if (isBody) {
		const frameElement = getFrameElement(win);
		return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
	} else return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getFrameElement(win) {
	return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}
//#endregion
//#region node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getCssDimensions(element) {
	const css = getComputedStyle$1(element);
	let width = parseFloat(css.width) || 0;
	let height = parseFloat(css.height) || 0;
	const hasOffset = isHTMLElement(element);
	const offsetWidth = hasOffset ? element.offsetWidth : width;
	const offsetHeight = hasOffset ? element.offsetHeight : height;
	const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
	if (shouldFallback) {
		width = offsetWidth;
		height = offsetHeight;
	}
	return {
		width,
		height,
		$: shouldFallback
	};
}
function unwrapElement(element) {
	return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
	const domElement = unwrapElement(element);
	if (!isHTMLElement(domElement)) return createCoords(1);
	const rect = domElement.getBoundingClientRect();
	const { width, height, $ } = getCssDimensions(domElement);
	let x = ($ ? round(rect.width) : rect.width) / width;
	let y = ($ ? round(rect.height) : rect.height) / height;
	if (!x || !Number.isFinite(x)) x = 1;
	if (!y || !Number.isFinite(y)) y = 1;
	return {
		x,
		y
	};
}
var noOffsets = /*#__PURE__*/ createCoords(0);
function getVisualOffsets(element) {
	const win = getWindow(element);
	if (!isWebKit() || !win.visualViewport) return noOffsets;
	return {
		x: win.visualViewport.offsetLeft,
		y: win.visualViewport.offsetTop
	};
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
	if (isFixed === void 0) isFixed = false;
	return !!floatingOffsetParent && isFixed && floatingOffsetParent === getWindow(element);
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
	if (includeScale === void 0) includeScale = false;
	if (isFixedStrategy === void 0) isFixedStrategy = false;
	const clientRect = element.getBoundingClientRect();
	const domElement = unwrapElement(element);
	let scale = createCoords(1);
	if (includeScale) if (offsetParent) {
		if (isElement(offsetParent)) scale = getScale(offsetParent);
	} else scale = getScale(element);
	const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
	let x = (clientRect.left + visualOffsets.x) / scale.x;
	let y = (clientRect.top + visualOffsets.y) / scale.y;
	let width = clientRect.width / scale.x;
	let height = clientRect.height / scale.y;
	if (domElement && offsetParent) {
		const win = getWindow(domElement);
		const offsetWin = isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
		let currentWin = win;
		let currentIFrame = getFrameElement(currentWin);
		while (currentIFrame && offsetWin !== currentWin) {
			const iframeScale = getScale(currentIFrame);
			const iframeRect = currentIFrame.getBoundingClientRect();
			const css = getComputedStyle$1(currentIFrame);
			const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
			const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
			x *= iframeScale.x;
			y *= iframeScale.y;
			width *= iframeScale.x;
			height *= iframeScale.y;
			x += left;
			y += top;
			currentWin = getWindow(currentIFrame);
			currentIFrame = getFrameElement(currentWin);
		}
	}
	return rectToClientRect({
		width,
		height,
		x,
		y
	});
}
function getWindowScrollBarX(element, rect) {
	const leftScroll = getNodeScroll(element).scrollLeft;
	if (!rect) return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
	return rect.left + leftScroll;
}
function getHTMLOffset(documentElement, scroll) {
	const htmlRect = documentElement.getBoundingClientRect();
	return {
		x: htmlRect.left + scroll.scrollLeft - getWindowScrollBarX(documentElement, htmlRect),
		y: htmlRect.top + scroll.scrollTop
	};
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
	let { elements, rect, offsetParent, strategy } = _ref;
	const isFixed = strategy === "fixed";
	const documentElement = getDocumentElement(offsetParent);
	const topLayer = elements ? isTopLayer(elements.floating) : false;
	if (offsetParent === documentElement || topLayer && isFixed) return rect;
	let scroll = {
		scrollLeft: 0,
		scrollTop: 0
	};
	let scale = createCoords(1);
	const offsets = createCoords(0);
	const isOffsetParentAnElement = isHTMLElement(offsetParent);
	if (isOffsetParentAnElement || !isFixed) {
		if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) scroll = getNodeScroll(offsetParent);
		if (isOffsetParentAnElement) {
			const offsetRect = getBoundingClientRect(offsetParent);
			scale = getScale(offsetParent);
			offsets.x = offsetRect.x + offsetParent.clientLeft;
			offsets.y = offsetRect.y + offsetParent.clientTop;
		}
	}
	const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
	return {
		width: rect.width * scale.x,
		height: rect.height * scale.y,
		x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
		y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
	};
}
function getClientRects(element) {
	return element.getClientRects ? Array.from(element.getClientRects()) : [];
}
function getDocumentRect(html) {
	const scroll = getNodeScroll(html);
	const body = html.ownerDocument.body;
	const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
	const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
	let x = -scroll.scrollLeft + getWindowScrollBarX(html);
	const y = -scroll.scrollTop;
	if (getComputedStyle$1(body).direction === "rtl") x += max(html.clientWidth, body.clientWidth) - width;
	return {
		width,
		height,
		x,
		y
	};
}
var SCROLLBAR_MAX = 25;
function getViewportRect(element, strategy, rootBoundary) {
	if (rootBoundary === void 0) rootBoundary = "viewport";
	const isLayoutViewport = rootBoundary === "layoutViewport";
	const win = getWindow(element);
	const html = getDocumentElement(element);
	const visualViewport = win.visualViewport;
	let width = html.clientWidth;
	let height = html.clientHeight;
	let x = 0;
	let y = 0;
	if (visualViewport) {
		const layoutRelativeClientCoords = !isWebKit() || strategy === "fixed";
		if (isLayoutViewport) {
			if (!layoutRelativeClientCoords) {
				x = -visualViewport.offsetLeft;
				y = -visualViewport.offsetTop;
			}
		} else {
			width = visualViewport.width;
			height = visualViewport.height;
			if (layoutRelativeClientCoords) {
				x = visualViewport.offsetLeft;
				y = visualViewport.offsetTop;
			}
		}
	}
	if (getWindowScrollBarX(html) <= 0) {
		const doc = html.ownerDocument;
		const body = doc.body;
		const bodyStyles = getComputedStyle(body);
		const bodyMarginInline = doc.compatMode === "CSS1Compat" ? parseFloat(bodyStyles.marginLeft) + parseFloat(bodyStyles.marginRight) || 0 : 0;
		const reservedWidth = Math.abs(html.clientWidth - body.clientWidth - bodyMarginInline);
		const gutter = getComputedStyle(html).scrollbarGutter === "stable both-edges" ? reservedWidth / 2 : reservedWidth;
		if (gutter <= SCROLLBAR_MAX) width -= gutter;
	}
	return {
		width,
		height,
		x,
		y
	};
}
function getInnerBoundingClientRect(element, strategy) {
	const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
	const top = clientRect.top + element.clientTop;
	const left = clientRect.left + element.clientLeft;
	const scale = getScale(element);
	return {
		width: element.clientWidth * scale.x,
		height: element.clientHeight * scale.y,
		x: left * scale.x,
		y: top * scale.y
	};
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
	let rect;
	if (clippingAncestor === "viewport" || clippingAncestor === "layoutViewport") rect = getViewportRect(element, strategy, clippingAncestor);
	else if (clippingAncestor === "document") rect = getDocumentRect(getDocumentElement(element));
	else if (isElement(clippingAncestor)) rect = getInnerBoundingClientRect(clippingAncestor, strategy);
	else {
		const visualOffsets = getVisualOffsets(element);
		rect = {
			x: clippingAncestor.x - visualOffsets.x,
			y: clippingAncestor.y - visualOffsets.y,
			width: clippingAncestor.width,
			height: clippingAncestor.height
		};
	}
	return rectToClientRect(rect);
}
function getClippingElementAncestors(element, cache) {
	const cachedResult = cache.get(element);
	if (cachedResult) return cachedResult;
	let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
	let lastKeptComputedStyle = null;
	const elementIsFixed = getComputedStyle$1(element).position === "fixed";
	let currentNode = elementIsFixed ? getParentNode(element) : element;
	while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
		const computedStyle = getComputedStyle$1(currentNode);
		const currentNodeIsContaining = isContainingBlock(currentNode);
		const lastPosition = lastKeptComputedStyle ? lastKeptComputedStyle.position : elementIsFixed ? "fixed" : "";
		if (!currentNodeIsContaining && (lastPosition === "fixed" || lastPosition === "absolute" && computedStyle.position === "static")) result = result.filter((ancestor) => ancestor !== currentNode);
		else lastKeptComputedStyle = computedStyle;
		currentNode = getParentNode(currentNode);
	}
	cache.set(element, result);
	return result;
}
function getClippingRect(_ref) {
	let { element, boundary, rootBoundary, strategy } = _ref;
	const clippingAncestors = [...boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary), rootBoundary];
	const firstRect = getClientRectFromClippingAncestor(element, clippingAncestors[0], strategy);
	let top = firstRect.top;
	let right = firstRect.right;
	let bottom = firstRect.bottom;
	let left = firstRect.left;
	for (let i = 1; i < clippingAncestors.length; i++) {
		const rect = getClientRectFromClippingAncestor(element, clippingAncestors[i], strategy);
		top = max(rect.top, top);
		right = min(rect.right, right);
		bottom = min(rect.bottom, bottom);
		left = max(rect.left, left);
	}
	return {
		width: right - left,
		height: bottom - top,
		x: left,
		y: top
	};
}
function getDimensions(element) {
	const { width, height } = getCssDimensions(element);
	return {
		width,
		height
	};
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
	const isOffsetParentAnElement = isHTMLElement(offsetParent);
	const documentElement = getDocumentElement(offsetParent);
	const isFixed = strategy === "fixed";
	const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
	let scroll = {
		scrollLeft: 0,
		scrollTop: 0
	};
	const offsets = createCoords(0);
	if (isOffsetParentAnElement || !isFixed) {
		if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) scroll = getNodeScroll(offsetParent);
		if (isOffsetParentAnElement) {
			const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
			offsets.x = offsetRect.x + offsetParent.clientLeft;
			offsets.y = offsetRect.y + offsetParent.clientTop;
		}
	}
	if (!isOffsetParentAnElement && documentElement) offsets.x = getWindowScrollBarX(documentElement);
	const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
	return {
		x: rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x,
		y: rect.top + scroll.scrollTop - offsets.y - htmlOffset.y,
		width: rect.width,
		height: rect.height
	};
}
function isStaticPositioned(element) {
	return getComputedStyle$1(element).position === "static";
}
function getTrueOffsetParent(element, polyfill) {
	if (!isHTMLElement(element) || getComputedStyle$1(element).position === "fixed") return null;
	if (polyfill) return polyfill(element);
	let rawOffsetParent = element.offsetParent;
	if (getDocumentElement(element) === rawOffsetParent) rawOffsetParent = rawOffsetParent.ownerDocument.body;
	return rawOffsetParent;
}
function getOffsetParent(element, polyfill) {
	const win = getWindow(element);
	if (isTopLayer(element)) return win;
	if (!isHTMLElement(element)) {
		let svgOffsetParent = getParentNode(element);
		while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
			if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) return svgOffsetParent;
			svgOffsetParent = getParentNode(svgOffsetParent);
		}
		return win;
	}
	let offsetParent = getTrueOffsetParent(element, polyfill);
	while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) offsetParent = getTrueOffsetParent(offsetParent, polyfill);
	if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) return win;
	return offsetParent || getContainingBlock(element) || win;
}
var getElementRects = async function(data) {
	const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
	const getDimensionsFn = this.getDimensions;
	const floatingDimensions = await getDimensionsFn(data.floating);
	return {
		reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
		floating: {
			x: 0,
			y: 0,
			width: floatingDimensions.width,
			height: floatingDimensions.height
		}
	};
};
function isRTL(element) {
	return getComputedStyle$1(element).direction === "rtl";
}
var platform = {
	convertOffsetParentRelativeRectToViewportRelativeRect,
	getDocumentElement,
	getClippingRect,
	getOffsetParent,
	getElementRects,
	getClientRects,
	getDimensions,
	getScale,
	isElement,
	isRTL
};
function rectsAreEqual(a, b) {
	return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
}
function observeMove(element, onMove, ancestorResize) {
	let io = null;
	let timeoutId;
	const root = getDocumentElement(element);
	function cleanup() {
		var _io;
		clearTimeout(timeoutId);
		(_io = io) == null || _io.disconnect();
		io = null;
	}
	function refresh(skip, threshold) {
		if (skip === void 0) skip = false;
		if (threshold === void 0) threshold = 1;
		cleanup();
		const elementRectForRootMargin = element.getBoundingClientRect();
		const { left, top, width, height } = elementRectForRootMargin;
		if (!skip) onMove();
		if (!width || !height) return;
		const insetTop = floor(top);
		const insetRight = floor(root.clientWidth - (left + width));
		const insetBottom = floor(root.clientHeight - (top + height));
		const insetLeft = floor(left);
		const options = {
			rootMargin: -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px",
			threshold: max(0, min(1, threshold)) || 1
		};
		let isFirstUpdate = true;
		function handleObserve(entries) {
			const ratio = entries[0].intersectionRatio;
			if (!rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) return refresh();
			if (ratio !== threshold) {
				if (!isFirstUpdate) return refresh();
				if (!ratio) timeoutId = setTimeout(() => {
					refresh(false, 1e-7);
				}, 1e3);
				else refresh(false, ratio);
			}
			isFirstUpdate = false;
		}
		try {
			io = new IntersectionObserver(handleObserve, {
				...options,
				root: root.ownerDocument
			});
		} catch (_e) {
			io = new IntersectionObserver(handleObserve, options);
		}
		io.observe(element);
	}
	const win = getWindow(element);
	const handleResize = () => refresh(ancestorResize);
	win.addEventListener("resize", handleResize);
	refresh(true);
	return () => {
		win.removeEventListener("resize", handleResize);
		cleanup();
	};
}
/**
* Automatically updates the position of the floating element when necessary.
* Should only be called when the floating element is mounted on the DOM or
* visible on the screen.
* @returns cleanup function that should be invoked when the floating element is
* removed from the DOM or hidden from the screen.
* @see https://floating-ui.com/docs/autoUpdate
*/
function autoUpdate(reference, floating, update, options) {
	if (options === void 0) options = {};
	const { ancestorScroll = true, ancestorResize = true, elementResize = typeof ResizeObserver === "function", layoutShift = typeof IntersectionObserver === "function", animationFrame = false } = options;
	const referenceEl = unwrapElement(reference);
	const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...floating ? getOverflowAncestors(floating) : []] : [];
	ancestors.forEach((ancestor) => {
		ancestorScroll && ancestor.addEventListener("scroll", update);
		ancestorResize && ancestor.addEventListener("resize", update);
	});
	const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update, ancestorResize) : null;
	let reobserveFrame = -1;
	let resizeObserver = null;
	if (elementResize) {
		resizeObserver = new ResizeObserver((_ref) => {
			let [firstEntry] = _ref;
			if (firstEntry && firstEntry.target === referenceEl && resizeObserver && floating) {
				resizeObserver.unobserve(floating);
				cancelAnimationFrame(reobserveFrame);
				reobserveFrame = requestAnimationFrame(() => {
					var _resizeObserver;
					(_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
				});
			}
			update();
		});
		if (referenceEl && !animationFrame) resizeObserver.observe(referenceEl);
		if (floating) resizeObserver.observe(floating);
	}
	let frameId;
	let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
	if (animationFrame) frameLoop();
	function frameLoop() {
		const nextRefRect = getBoundingClientRect(reference);
		if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) update();
		prevRefRect = nextRefRect;
		frameId = requestAnimationFrame(frameLoop);
	}
	update();
	return () => {
		var _resizeObserver2;
		ancestors.forEach((ancestor) => {
			ancestorScroll && ancestor.removeEventListener("scroll", update);
			ancestorResize && ancestor.removeEventListener("resize", update);
		});
		cleanupIo?.();
		(_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
		resizeObserver = null;
		if (animationFrame) cancelAnimationFrame(frameId);
	};
}
/**
* Modifies the placement by translating the floating element along the
* specified axes.
* A number (shorthand for `mainAxis` or distance), or an axes configuration
* object may be passed.
* @see https://floating-ui.com/docs/offset
*/
var offset = offset$1;
/**
* Optimizes the visibility of the floating element by shifting it in order to
* keep it in view when it will overflow the clipping boundary.
* @see https://floating-ui.com/docs/shift
*/
var shift = shift$1;
/**
* Optimizes the visibility of the floating element by flipping the `placement`
* in order to keep it in view when the preferred placement(s) will overflow the
* clipping boundary. Alternative to `autoPlacement`.
* @see https://floating-ui.com/docs/flip
*/
var flip = flip$1;
/**
* Provides data that allows you to change the size of the floating element —
* for instance, prevent it from overflowing the clipping boundary or match the
* width of the reference element.
* @see https://floating-ui.com/docs/size
*/
var size = size$1;
/**
* Provides data to hide the floating element in applicable situations, such as
* when it is not in the same clipping context as the reference element.
* @see https://floating-ui.com/docs/hide
*/
var hide = hide$1;
/**
* Provides data to position an inner element of the floating element so that it
* appears centered to the reference element.
* @see https://floating-ui.com/docs/arrow
*/
var arrow = arrow$1;
/**
* Built-in `limiter` that will stop `shift()` at a certain point.
*/
var limitShift = limitShift$1;
/**
* Computes the `x` and `y` coordinates that will place the floating element
* next to a given reference element.
*/
var computePosition = (reference, floating, options) => {
	const cache = /* @__PURE__ */ new Map();
	const mergedOptions = options != null ? options : {};
	const platformWithCache = {
		...platform,
		...mergedOptions.platform,
		_c: cache
	};
	return computePosition$1(reference, floating, {
		...mergedOptions,
		platform: platformWithCache
	});
};
//#endregion
//#region node_modules/bits-ui/dist/internal/floating-svelte/floating-utils.svelte.js
function get(valueOrGetValue) {
	return typeof valueOrGetValue === "function" ? valueOrGetValue() : valueOrGetValue;
}
function getDPR(element) {
	if (typeof window === "undefined") return 1;
	return (element.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function roundByDPR(element, value) {
	const dpr = getDPR(element);
	return Math.round(value * dpr) / dpr;
}
function getFloatingContentCSSVars(name) {
	return {
		[`--bits-${name}-content-transform-origin`]: `var(--bits-floating-transform-origin)`,
		[`--bits-${name}-content-available-width`]: `var(--bits-floating-available-width)`,
		[`--bits-${name}-content-available-height`]: `var(--bits-floating-available-height)`,
		[`--bits-${name}-anchor-width`]: `var(--bits-floating-anchor-width)`,
		[`--bits-${name}-anchor-height`]: `var(--bits-floating-anchor-height)`
	};
}
//#endregion
//#region node_modules/bits-ui/dist/internal/floating-svelte/use-floating.svelte.js
function useFloating(options) {
	/** Options */
	const whileElementsMountedOption = options.whileElementsMounted;
	const openOption = user_derived(() => get(options.open) ?? true);
	const middlewareOption = user_derived(() => get(options.middleware));
	const transformOption = user_derived(() => get(options.transform) ?? true);
	const placementOption = user_derived(() => get(options.placement) ?? "bottom");
	const strategyOption = user_derived(() => get(options.strategy) ?? "absolute");
	const sideOffsetOption = user_derived(() => get(options.sideOffset) ?? 0);
	const alignOffsetOption = user_derived(() => get(options.alignOffset) ?? 0);
	const reference = options.reference;
	/** State */
	let x = state(0);
	let y = state(0);
	const floating = simpleBox(null);
	let strategy = state(proxy(get$2(strategyOption)));
	let placement = state(proxy(get$2(placementOption)));
	let middlewareData = state(proxy({}));
	let isPositioned = state(false);
	let hasWhileMountedPosition = false;
	let updateRequestId = 0;
	const floatingStyles = user_derived(() => {
		const xVal = floating.current ? roundByDPR(floating.current, get$2(x)) : get$2(x);
		const yVal = floating.current ? roundByDPR(floating.current, get$2(y)) : get$2(y);
		if (get$2(transformOption)) return {
			position: get$2(strategy),
			left: "0",
			top: "0",
			transform: `translate(${xVal}px, ${yVal}px)`,
			...floating.current && getDPR(floating.current) >= 1.5 && { willChange: "transform" }
		};
		return {
			position: get$2(strategy),
			left: `${xVal}px`,
			top: `${yVal}px`
		};
	});
	/** Effects */
	let whileElementsMountedCleanup;
	function update() {
		if (reference.current === null || floating.current === null) return;
		const referenceNode = reference.current;
		const floatingNode = floating.current;
		const requestId = ++updateRequestId;
		computePosition(referenceNode, floatingNode, {
			middleware: get$2(middlewareOption),
			placement: get$2(placementOption),
			strategy: get$2(strategyOption)
		}).then((position) => {
			if (requestId !== updateRequestId) return;
			if (reference.current !== referenceNode || floating.current !== floatingNode) return;
			if (isReferenceHidden(referenceNode)) {
				set(middlewareData, {
					...get$2(middlewareData),
					hide: {
						...get$2(middlewareData).hide,
						referenceHidden: true
					}
				}, true);
				return;
			}
			if (!get$2(openOption) && get$2(x) !== 0 && get$2(y) !== 0) {
				const maxExpectedOffset = Math.max(Math.abs(get$2(sideOffsetOption)), Math.abs(get$2(alignOffsetOption)), 15);
				if (position.x <= maxExpectedOffset && position.y <= maxExpectedOffset) return;
			}
			set(x, position.x, true);
			set(y, position.y, true);
			set(strategy, position.strategy, true);
			set(placement, position.placement, true);
			set(middlewareData, position.middlewareData, true);
			set(isPositioned, true);
		});
	}
	function cleanup() {
		if (typeof whileElementsMountedCleanup === "function") {
			whileElementsMountedCleanup();
			whileElementsMountedCleanup = void 0;
		}
		updateRequestId++;
	}
	function attach() {
		cleanup();
		if (whileElementsMountedOption === void 0) {
			update();
			return;
		}
		if (!get$2(openOption)) return;
		if (reference.current === null || floating.current === null) return;
		whileElementsMountedCleanup = whileElementsMountedOption(reference.current, floating.current, update);
	}
	function reset() {
		if (!get$2(openOption) && floating.current === null) set(isPositioned, false);
	}
	function trackWhileMountedDeps() {
		return [
			get$2(middlewareOption),
			get$2(placementOption),
			get$2(strategyOption),
			get$2(sideOffsetOption),
			get$2(alignOffsetOption),
			get$2(openOption)
		];
	}
	user_effect(() => {
		if (whileElementsMountedOption !== void 0) return;
		if (!get$2(openOption)) return;
		update();
	});
	user_effect(attach);
	user_effect(() => {
		if (whileElementsMountedOption === void 0) return;
		trackWhileMountedDeps();
		if (!get$2(openOption)) {
			hasWhileMountedPosition = false;
			return;
		}
		if (!get$2(isPositioned)) {
			hasWhileMountedPosition = false;
			return;
		}
		if (!hasWhileMountedPosition) {
			hasWhileMountedPosition = true;
			return;
		}
		update();
	});
	user_effect(reset);
	user_effect(() => cleanup);
	return {
		floating,
		reference,
		get strategy() {
			return get$2(strategy);
		},
		get placement() {
			return get$2(placement);
		},
		get middlewareData() {
			return get$2(middlewareData);
		},
		get isPositioned() {
			return get$2(isPositioned);
		},
		get floatingStyles() {
			return get$2(floatingStyles);
		},
		get update() {
			return update;
		}
	};
}
function isReferenceHidden(node) {
	if (!(node instanceof Element)) return false;
	if (!node.isConnected) return true;
	if (node instanceof HTMLElement && node.hidden) return true;
	return node.getClientRects().length === 0;
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/floating-layer/use-floating-layer.svelte.js
var OPPOSITE_SIDE = {
	top: "bottom",
	right: "left",
	bottom: "top",
	left: "right"
};
var FloatingRootContext = new Context("Floating.Root");
var FloatingContentContext = new Context("Floating.Content");
var FloatingTooltipRootContext = new Context("Floating.Root");
var FloatingRootState = class FloatingRootState {
	static create(tooltip = false) {
		return tooltip ? FloatingTooltipRootContext.set(new FloatingRootState()) : FloatingRootContext.set(new FloatingRootState());
	}
	anchorNode = simpleBox(null);
	customAnchorNode = simpleBox(null);
	triggerNode = simpleBox(null);
	constructor() {
		user_effect(() => {
			if (this.customAnchorNode.current) if (typeof this.customAnchorNode.current === "string") this.anchorNode.current = document.querySelector(this.customAnchorNode.current);
			else this.anchorNode.current = this.customAnchorNode.current;
			else this.anchorNode.current = this.triggerNode.current;
		});
	}
};
var FloatingContentState = class FloatingContentState {
	static create(opts, tooltip = false) {
		return tooltip ? FloatingContentContext.set(new FloatingContentState(opts, FloatingTooltipRootContext.get())) : FloatingContentContext.set(new FloatingContentState(opts, FloatingRootContext.get()));
	}
	opts;
	root;
	contentRef = simpleBox(null);
	wrapperRef = simpleBox(null);
	arrowRef = simpleBox(null);
	contentAttachment = attachRef(this.contentRef);
	wrapperAttachment = attachRef(this.wrapperRef);
	arrowAttachment = attachRef(this.arrowRef);
	arrowId = simpleBox(useId());
	#transformedStyle = user_derived(() => {
		if (typeof this.opts.style === "string") return cssToStyleObj(this.opts.style);
		if (!this.opts.style) return {};
	});
	#updatePositionStrategy = void 0;
	#arrowSize = new ElementSize(() => this.arrowRef.current ?? void 0);
	#arrowWidth = user_derived(() => this.#arrowSize?.width ?? 0);
	#arrowHeight = user_derived(() => this.#arrowSize?.height ?? 0);
	#desiredPlacement = user_derived(() => this.opts.side?.current + (this.opts.align.current !== "center" ? `-${this.opts.align.current}` : ""));
	#boundary = user_derived(() => Array.isArray(this.opts.collisionBoundary.current) ? this.opts.collisionBoundary.current : [this.opts.collisionBoundary.current]);
	#hasExplicitBoundaries = user_derived(() => get$2(this.#boundary).length > 0);
	get hasExplicitBoundaries() {
		return get$2(this.#hasExplicitBoundaries);
	}
	set hasExplicitBoundaries(value) {
		set(this.#hasExplicitBoundaries, value);
	}
	#detectOverflowOptions = user_derived(() => ({
		padding: this.opts.collisionPadding.current,
		boundary: get$2(this.#boundary).filter(isNotNull),
		altBoundary: this.hasExplicitBoundaries
	}));
	get detectOverflowOptions() {
		return get$2(this.#detectOverflowOptions);
	}
	set detectOverflowOptions(value) {
		set(this.#detectOverflowOptions, value);
	}
	#availableWidth = state(void 0);
	#availableHeight = state(void 0);
	#anchorWidth = state(void 0);
	#anchorHeight = state(void 0);
	#middleware = user_derived(() => [
		offset({
			mainAxis: this.opts.sideOffset.current + get$2(this.#arrowHeight),
			alignmentAxis: this.opts.alignOffset.current
		}),
		this.opts.avoidCollisions.current && shift({
			mainAxis: true,
			crossAxis: false,
			limiter: this.opts.sticky.current === "partial" ? limitShift() : void 0,
			...this.detectOverflowOptions
		}),
		this.opts.avoidCollisions.current && flip({ ...this.detectOverflowOptions }),
		size({
			...this.detectOverflowOptions,
			apply: ({ rects, availableWidth, availableHeight }) => {
				const { width: anchorWidth, height: anchorHeight } = rects.reference;
				set(this.#availableWidth, availableWidth, true);
				set(this.#availableHeight, availableHeight, true);
				set(this.#anchorWidth, anchorWidth, true);
				set(this.#anchorHeight, anchorHeight, true);
			}
		}),
		this.arrowRef.current && arrow({
			element: this.arrowRef.current,
			padding: this.opts.arrowPadding.current
		}),
		transformOrigin({
			arrowWidth: get$2(this.#arrowWidth),
			arrowHeight: get$2(this.#arrowHeight)
		}),
		this.opts.hideWhenDetached.current && hide({
			strategy: "referenceHidden",
			...this.detectOverflowOptions
		})
	].filter(Boolean));
	get middleware() {
		return get$2(this.#middleware);
	}
	set middleware(value) {
		set(this.#middleware, value);
	}
	floating;
	#placedSide = user_derived(() => getSideFromPlacement(this.floating.placement));
	get placedSide() {
		return get$2(this.#placedSide);
	}
	set placedSide(value) {
		set(this.#placedSide, value);
	}
	#placedAlign = user_derived(() => getAlignFromPlacement(this.floating.placement));
	get placedAlign() {
		return get$2(this.#placedAlign);
	}
	set placedAlign(value) {
		set(this.#placedAlign, value);
	}
	#arrowX = user_derived(() => this.floating.middlewareData.arrow?.x ?? 0);
	get arrowX() {
		return get$2(this.#arrowX);
	}
	set arrowX(value) {
		set(this.#arrowX, value);
	}
	#arrowY = user_derived(() => this.floating.middlewareData.arrow?.y ?? 0);
	get arrowY() {
		return get$2(this.#arrowY);
	}
	set arrowY(value) {
		set(this.#arrowY, value);
	}
	#cannotCenterArrow = user_derived(() => this.floating.middlewareData.arrow?.centerOffset !== 0);
	get cannotCenterArrow() {
		return get$2(this.#cannotCenterArrow);
	}
	set cannotCenterArrow(value) {
		set(this.#cannotCenterArrow, value);
	}
	#contentZIndex = state();
	get contentZIndex() {
		return get$2(this.#contentZIndex);
	}
	set contentZIndex(value) {
		set(this.#contentZIndex, value, true);
	}
	#arrowBaseSide = user_derived(() => OPPOSITE_SIDE[this.placedSide]);
	get arrowBaseSide() {
		return get$2(this.#arrowBaseSide);
	}
	set arrowBaseSide(value) {
		set(this.#arrowBaseSide, value);
	}
	#wrapperProps = user_derived(() => ({
		id: this.opts.wrapperId.current,
		"data-bits-floating-content-wrapper": "",
		style: {
			...this.floating.floatingStyles,
			transform: this.floating.isPositioned ? this.floating.floatingStyles.transform : "translate(0, -200%)",
			minWidth: "max-content",
			zIndex: this.contentZIndex,
			"--bits-floating-transform-origin": `${this.floating.middlewareData.transformOrigin?.x} ${this.floating.middlewareData.transformOrigin?.y}`,
			"--bits-floating-available-width": `${get$2(this.#availableWidth)}px`,
			"--bits-floating-available-height": `${get$2(this.#availableHeight)}px`,
			"--bits-floating-anchor-width": `${get$2(this.#anchorWidth)}px`,
			"--bits-floating-anchor-height": `${get$2(this.#anchorHeight)}px`,
			...this.floating.middlewareData.hide?.referenceHidden && {
				visibility: "hidden",
				"pointer-events": "none"
			},
			...get$2(this.#transformedStyle)
		},
		dir: this.opts.dir.current,
		...this.wrapperAttachment
	}));
	get wrapperProps() {
		return get$2(this.#wrapperProps);
	}
	set wrapperProps(value) {
		set(this.#wrapperProps, value);
	}
	#props = user_derived(() => ({
		"data-side": this.placedSide,
		"data-align": this.placedAlign,
		style: styleToString({ ...get$2(this.#transformedStyle) }),
		...this.contentAttachment
	}));
	get props() {
		return get$2(this.#props);
	}
	set props(value) {
		set(this.#props, value);
	}
	#arrowStyle = user_derived(() => ({
		position: "absolute",
		left: this.arrowX ? `${this.arrowX}px` : void 0,
		top: this.arrowY ? `${this.arrowY}px` : void 0,
		[this.arrowBaseSide]: 0,
		"transform-origin": {
			top: "",
			right: "0 0",
			bottom: "center 0",
			left: "100% 0"
		}[this.placedSide],
		transform: {
			top: "translateY(100%)",
			right: "translateY(50%) rotate(90deg) translateX(-50%)",
			bottom: "rotate(180deg)",
			left: "translateY(50%) rotate(-90deg) translateX(50%)"
		}[this.placedSide],
		visibility: this.cannotCenterArrow ? "hidden" : void 0
	}));
	get arrowStyle() {
		return get$2(this.#arrowStyle);
	}
	set arrowStyle(value) {
		set(this.#arrowStyle, value);
	}
	constructor(opts, root) {
		this.opts = opts;
		this.root = root;
		this.#updatePositionStrategy = opts.updatePositionStrategy;
		if (opts.customAnchor) this.root.customAnchorNode.current = opts.customAnchor.current;
		watch(() => opts.customAnchor.current, (customAnchor) => {
			this.root.customAnchorNode.current = customAnchor;
		});
		this.floating = useFloating({
			strategy: () => this.opts.strategy.current,
			placement: () => get$2(this.#desiredPlacement),
			middleware: () => this.middleware,
			reference: this.root.anchorNode,
			whileElementsMounted: (...args) => {
				return autoUpdate(...args, { animationFrame: this.#updatePositionStrategy?.current === "always" });
			},
			open: () => this.opts.enabled.current,
			sideOffset: () => this.opts.sideOffset.current,
			alignOffset: () => this.opts.alignOffset.current
		});
		user_effect(() => {
			if (!this.floating.isPositioned) return;
			this.opts.onPlaced?.current();
		});
		watch(() => this.contentRef.current, (contentNode) => {
			if (!contentNode || !this.opts.enabled.current) return;
			const win = getWindow$1(contentNode);
			const rafId = win.requestAnimationFrame(() => {
				if (this.contentRef.current !== contentNode || !this.opts.enabled.current) return;
				const zIndex = win.getComputedStyle(contentNode).zIndex;
				if (zIndex !== this.contentZIndex) this.contentZIndex = zIndex;
			});
			return () => {
				win.cancelAnimationFrame(rafId);
			};
		});
		user_effect(() => {
			this.floating.floating.current = this.wrapperRef.current;
		});
	}
};
var FloatingArrowState = class FloatingArrowState {
	static create(opts) {
		return new FloatingArrowState(opts, FloatingContentContext.get());
	}
	opts;
	content;
	constructor(opts, content) {
		this.opts = opts;
		this.content = content;
	}
	#props = user_derived(() => ({
		id: this.opts.id.current,
		style: this.content.arrowStyle,
		"data-side": this.content.placedSide,
		...this.content.arrowAttachment
	}));
	get props() {
		return get$2(this.#props);
	}
	set props(value) {
		set(this.#props, value);
	}
};
var FloatingAnchorState = class FloatingAnchorState {
	static create(opts, tooltip = false) {
		return tooltip ? new FloatingAnchorState(opts, FloatingTooltipRootContext.get()) : new FloatingAnchorState(opts, FloatingRootContext.get());
	}
	opts;
	root;
	constructor(opts, root) {
		this.opts = opts;
		this.root = root;
		if (opts.virtualEl && opts.virtualEl.current) root.triggerNode = boxFrom(opts.virtualEl.current);
		else root.triggerNode = opts.ref;
	}
};
function transformOrigin(options) {
	return {
		name: "transformOrigin",
		options,
		fn(data) {
			const { placement, rects, middlewareData } = data;
			const isArrowHidden = middlewareData.arrow?.centerOffset !== 0;
			const arrowWidth = isArrowHidden ? 0 : options.arrowWidth;
			const arrowHeight = isArrowHidden ? 0 : options.arrowHeight;
			const [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement);
			const noArrowAlign = {
				start: "0%",
				center: "50%",
				end: "100%"
			}[placedAlign];
			const arrowXCenter = (middlewareData.arrow?.x ?? 0) + arrowWidth / 2;
			const arrowYCenter = (middlewareData.arrow?.y ?? 0) + arrowHeight / 2;
			let x = "";
			let y = "";
			if (placedSide === "bottom") {
				x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
				y = `${-arrowHeight}px`;
			} else if (placedSide === "top") {
				x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
				y = `${rects.floating.height + arrowHeight}px`;
			} else if (placedSide === "right") {
				x = `${-arrowHeight}px`;
				y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
			} else if (placedSide === "left") {
				x = `${rects.floating.width + arrowHeight}px`;
				y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
			}
			return { data: {
				x,
				y
			} };
		}
	};
}
function getSideAndAlignFromPlacement(placement) {
	const [side, align = "center"] = placement.split("-");
	return [side, align];
}
function getSideFromPlacement(placement) {
	return getSideAndAlignFromPlacement(placement)[0];
}
function getAlignFromPlacement(placement) {
	return getSideAndAlignFromPlacement(placement)[1];
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/floating-layer/components/floating-layer.svelte
function Floating_layer($$anchor, $$props) {
	push($$props, true);
	let tooltip = prop($$props, "tooltip", 3, false);
	FloatingRootState.create(tooltip());
	var fragment = comment();
	snippet(first_child(fragment), () => $$props.children ?? noop$1);
	append($$anchor, fragment);
	pop();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/floating-layer/components/floating-layer-anchor.svelte
function Floating_layer_anchor($$anchor, $$props) {
	push($$props, true);
	let tooltip = prop($$props, "tooltip", 3, false);
	FloatingAnchorState.create({
		id: boxWith(() => $$props.id),
		virtualEl: boxWith(() => $$props.virtualEl),
		ref: $$props.ref
	}, tooltip());
	var fragment = comment();
	snippet(first_child(fragment), () => $$props.children ?? noop$1);
	append($$anchor, fragment);
	pop();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/arrow/arrow.svelte
var rest_excludes$40 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"id",
	"children",
	"child",
	"width",
	"height"
]);
var root$26 = from_svg(`<svg viewBox="0 0 30 10" preserveAspectRatio="none" data-arrow=""><polygon points="0,0 30,0 15,10" fill="currentColor"></polygon></svg>`);
var root_1$6 = from_html(`<span><!></span>`);
function Arrow($$anchor, $$props) {
	push($$props, true);
	let id = prop($$props, "id", 19, useId), width = prop($$props, "width", 3, 10), height = prop($$props, "height", 3, 5), restProps = rest_props($$props, rest_excludes$40);
	const mergedProps = user_derived(() => mergeProps(restProps, { id: id() }));
	var fragment = comment();
	var node = first_child(fragment);
	var consequent = ($$anchor) => {
		var fragment_1 = comment();
		snippet(first_child(fragment_1), () => $$props.child, () => ({ props: get$2(mergedProps) }));
		append($$anchor, fragment_1);
	};
	var alternate_1 = ($$anchor) => {
		var span = root_1$6();
		attribute_effect(span, () => ({ ...get$2(mergedProps) }));
		var node_2 = child(span);
		var consequent_1 = ($$anchor) => {
			var fragment_2 = comment();
			snippet(first_child(fragment_2), () => $$props.children ?? noop$1);
			append($$anchor, fragment_2);
		};
		var alternate = ($$anchor) => {
			var svg = root$26();
			template_effect(() => {
				set_attribute(svg, "width", width());
				set_attribute(svg, "height", height());
			});
			append($$anchor, svg);
		};
		if_block(node_2, ($$render) => {
			if ($$props.children) $$render(consequent_1);
			else $$render(alternate, -1);
		});
		reset(span);
		append($$anchor, span);
	};
	if_block(node, ($$render) => {
		if ($$props.child) $$render(consequent);
		else $$render(alternate_1, -1);
	});
	append($$anchor, fragment);
	pop();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/floating-layer/components/floating-layer-arrow.svelte
var rest_excludes$39 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"id",
	"ref"
]);
function Floating_layer_arrow($$anchor, $$props) {
	push($$props, true);
	let id = prop($$props, "id", 19, useId), ref = prop($$props, "ref", 15, null), restProps = rest_props($$props, rest_excludes$39);
	const arrowState = FloatingArrowState.create({
		id: boxWith(() => id()),
		ref: boxWith(() => ref(), (v) => ref(v))
	});
	const mergedProps = user_derived(() => mergeProps(restProps, arrowState.props));
	Arrow($$anchor, spread_props(() => get$2(mergedProps)));
	pop();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/floating-layer/components/floating-layer-content.svelte
function Floating_layer_content($$anchor, $$props) {
	push($$props, true);
	let side = prop($$props, "side", 3, "bottom"), sideOffset = prop($$props, "sideOffset", 3, 0), align = prop($$props, "align", 3, "center"), alignOffset = prop($$props, "alignOffset", 3, 0), arrowPadding = prop($$props, "arrowPadding", 3, 0), avoidCollisions = prop($$props, "avoidCollisions", 3, true), collisionBoundary = prop($$props, "collisionBoundary", 19, () => []), collisionPadding = prop($$props, "collisionPadding", 3, 0), hideWhenDetached = prop($$props, "hideWhenDetached", 3, false), onPlaced = prop($$props, "onPlaced", 3, () => {}), sticky = prop($$props, "sticky", 3, "partial"), updatePositionStrategy = prop($$props, "updatePositionStrategy", 3, "optimized"), strategy = prop($$props, "strategy", 3, "fixed"), dir = prop($$props, "dir", 3, "ltr"), style = prop($$props, "style", 19, () => ({})), wrapperId = prop($$props, "wrapperId", 19, useId), customAnchor = prop($$props, "customAnchor", 3, null), tooltip = prop($$props, "tooltip", 3, false);
	const contentState = FloatingContentState.create({
		side: boxWith(() => side()),
		sideOffset: boxWith(() => sideOffset()),
		align: boxWith(() => align()),
		alignOffset: boxWith(() => alignOffset()),
		id: boxWith(() => $$props.id),
		arrowPadding: boxWith(() => arrowPadding()),
		avoidCollisions: boxWith(() => avoidCollisions()),
		collisionBoundary: boxWith(() => collisionBoundary()),
		collisionPadding: boxWith(() => collisionPadding()),
		hideWhenDetached: boxWith(() => hideWhenDetached()),
		onPlaced: boxWith(() => onPlaced()),
		sticky: boxWith(() => sticky()),
		updatePositionStrategy: boxWith(() => updatePositionStrategy()),
		strategy: boxWith(() => strategy()),
		dir: boxWith(() => dir()),
		style: boxWith(() => style()),
		enabled: boxWith(() => $$props.enabled),
		wrapperId: boxWith(() => wrapperId()),
		customAnchor: boxWith(() => customAnchor())
	}, tooltip());
	const mergedProps = user_derived(() => mergeProps(contentState.wrapperProps, { style: { pointerEvents: "auto" } }));
	var fragment = comment();
	snippet(first_child(fragment), () => $$props.content ?? noop$1, () => ({
		props: contentState.props,
		wrapperProps: get$2(mergedProps)
	}));
	append($$anchor, fragment);
	pop();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/floating-layer/components/floating-layer-content-static.svelte
function Floating_layer_content_static($$anchor, $$props) {
	push($$props, true);
	onMount(() => {
		$$props.onPlaced?.();
	});
	var fragment = comment();
	snippet(first_child(fragment), () => $$props.content ?? noop$1, () => ({
		props: {},
		wrapperProps: {}
	}));
	append($$anchor, fragment);
	pop();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/popper-layer/popper-content.svelte
var rest_excludes$38 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"content",
	"isStatic",
	"onPlaced"
]);
function Popper_content($$anchor, $$props) {
	let isStatic = prop($$props, "isStatic", 3, false), restProps = rest_props($$props, rest_excludes$38);
	var fragment = comment();
	var node = first_child(fragment);
	var consequent = ($$anchor) => {
		Floating_layer_content_static($$anchor, {
			get content() {
				return $$props.content;
			},
			get onPlaced() {
				return $$props.onPlaced;
			}
		});
	};
	var alternate = ($$anchor) => {
		Floating_layer_content($$anchor, spread_props({
			get content() {
				return $$props.content;
			},
			get onPlaced() {
				return $$props.onPlaced;
			}
		}, () => restProps));
	};
	if_block(node, ($$render) => {
		if (isStatic()) $$render(consequent);
		else $$render(alternate, -1);
	});
	append($$anchor, fragment);
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/popper-layer/popper-layer-inner.svelte
var rest_excludes$37 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"popper",
	"onEscapeKeydown",
	"escapeKeydownBehavior",
	"preventOverflowTextSelection",
	"id",
	"onPointerDown",
	"onPointerUp",
	"side",
	"sideOffset",
	"align",
	"alignOffset",
	"arrowPadding",
	"avoidCollisions",
	"collisionBoundary",
	"collisionPadding",
	"sticky",
	"hideWhenDetached",
	"updatePositionStrategy",
	"strategy",
	"dir",
	"preventScroll",
	"wrapperId",
	"style",
	"onPlaced",
	"onInteractOutside",
	"onCloseAutoFocus",
	"onOpenAutoFocus",
	"onFocusOutside",
	"interactOutsideBehavior",
	"loop",
	"trapFocus",
	"isValidEvent",
	"customAnchor",
	"isStatic",
	"enabled",
	"ref",
	"tooltip",
	"contentPointerEvents"
]);
var root$25 = from_html(`<!> <!>`, 1);
function Popper_layer_inner($$anchor, $$props) {
	push($$props, true);
	let interactOutsideBehavior = prop($$props, "interactOutsideBehavior", 3, "close"), trapFocus = prop($$props, "trapFocus", 3, true), isValidEvent = prop($$props, "isValidEvent", 3, () => false), customAnchor = prop($$props, "customAnchor", 3, null), isStatic = prop($$props, "isStatic", 3, false), tooltip = prop($$props, "tooltip", 3, false), contentPointerEvents = prop($$props, "contentPointerEvents", 3, "auto"), restProps = rest_props($$props, rest_excludes$37);
	const resolvedPreventScroll = user_derived(() => $$props.preventScroll ?? true);
	const effectiveStrategy = user_derived(() => $$props.strategy ?? (get$2(resolvedPreventScroll) ? "fixed" : "absolute"));
	{
		const content = ($$anchor, $$arg0) => {
			let floatingProps = () => ($$arg0?.()).props;
			let wrapperProps = () => ($$arg0?.()).wrapperProps;
			var fragment_1 = root$25();
			var node = first_child(fragment_1);
			var consequent = ($$anchor) => {
				Scroll_lock($$anchor, { get preventScroll() {
					return get$2(resolvedPreventScroll);
				} });
			};
			var consequent_1 = ($$anchor) => {
				Scroll_lock($$anchor, { get preventScroll() {
					return get$2(resolvedPreventScroll);
				} });
			};
			if_block(node, ($$render) => {
				if ($$props.forceMount && $$props.enabled) $$render(consequent);
				else if (!$$props.forceMount) $$render(consequent_1, 1);
			});
			var node_1 = sibling(node, 2);
			{
				const focusScope = ($$anchor, $$arg0) => {
					let focusScopeProps = () => ($$arg0?.()).props;
					Escape_layer($$anchor, {
						get onEscapeKeydown() {
							return $$props.onEscapeKeydown;
						},
						get escapeKeydownBehavior() {
							return $$props.escapeKeydownBehavior;
						},
						get enabled() {
							return $$props.enabled;
						},
						get ref() {
							return $$props.ref;
						},
						children: ($$anchor, $$slotProps) => {
							{
								const children = ($$anchor, $$arg0) => {
									let dismissibleProps = () => ($$arg0?.()).props;
									Text_selection_layer($$anchor, {
										get id() {
											return $$props.id;
										},
										get preventOverflowTextSelection() {
											return $$props.preventOverflowTextSelection;
										},
										get onPointerDown() {
											return $$props.onPointerDown;
										},
										get onPointerUp() {
											return $$props.onPointerUp;
										},
										get enabled() {
											return $$props.enabled;
										},
										get ref() {
											return $$props.ref;
										},
										children: ($$anchor, $$slotProps) => {
											var fragment_7 = comment();
											var node_2 = first_child(fragment_7);
											{
												let $0 = user_derived(() => ({
													props: mergeProps(restProps, floatingProps(), dismissibleProps(), focusScopeProps(), { style: { pointerEvents: contentPointerEvents() } }),
													wrapperProps: wrapperProps()
												}));
												snippet(node_2, () => $$props.popper ?? noop$1, () => get$2($0));
											}
											append($$anchor, fragment_7);
										},
										$$slots: { default: true }
									});
								};
								Dismissible_layer($$anchor, {
									get id() {
										return $$props.id;
									},
									get onInteractOutside() {
										return $$props.onInteractOutside;
									},
									get onFocusOutside() {
										return $$props.onFocusOutside;
									},
									get interactOutsideBehavior() {
										return interactOutsideBehavior();
									},
									get isValidEvent() {
										return isValidEvent();
									},
									get enabled() {
										return $$props.enabled;
									},
									get ref() {
										return $$props.ref;
									},
									children,
									$$slots: { default: true }
								});
							}
						},
						$$slots: { default: true }
					});
				};
				Focus_scope(node_1, {
					get onOpenAutoFocus() {
						return $$props.onOpenAutoFocus;
					},
					get onCloseAutoFocus() {
						return $$props.onCloseAutoFocus;
					},
					get loop() {
						return $$props.loop;
					},
					get enabled() {
						return $$props.enabled;
					},
					get trapFocus() {
						return trapFocus();
					},
					get forceMount() {
						return $$props.forceMount;
					},
					get ref() {
						return $$props.ref;
					},
					focusScope,
					$$slots: { focusScope: true }
				});
			}
			append($$anchor, fragment_1);
		};
		Popper_content($$anchor, {
			get isStatic() {
				return isStatic();
			},
			get id() {
				return $$props.id;
			},
			get side() {
				return $$props.side;
			},
			get sideOffset() {
				return $$props.sideOffset;
			},
			get align() {
				return $$props.align;
			},
			get alignOffset() {
				return $$props.alignOffset;
			},
			get arrowPadding() {
				return $$props.arrowPadding;
			},
			get avoidCollisions() {
				return $$props.avoidCollisions;
			},
			get collisionBoundary() {
				return $$props.collisionBoundary;
			},
			get collisionPadding() {
				return $$props.collisionPadding;
			},
			get sticky() {
				return $$props.sticky;
			},
			get hideWhenDetached() {
				return $$props.hideWhenDetached;
			},
			get updatePositionStrategy() {
				return $$props.updatePositionStrategy;
			},
			get strategy() {
				return get$2(effectiveStrategy);
			},
			get dir() {
				return $$props.dir;
			},
			get wrapperId() {
				return $$props.wrapperId;
			},
			get style() {
				return $$props.style;
			},
			get onPlaced() {
				return $$props.onPlaced;
			},
			get customAnchor() {
				return customAnchor();
			},
			get enabled() {
				return $$props.enabled;
			},
			get tooltip() {
				return tooltip();
			},
			content,
			$$slots: { content: true }
		});
	}
	pop();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/popper-layer/popper-layer.svelte
var rest_excludes$36 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"popper",
	"open",
	"onEscapeKeydown",
	"escapeKeydownBehavior",
	"preventOverflowTextSelection",
	"id",
	"onPointerDown",
	"onPointerUp",
	"side",
	"sideOffset",
	"align",
	"alignOffset",
	"arrowPadding",
	"avoidCollisions",
	"collisionBoundary",
	"collisionPadding",
	"sticky",
	"hideWhenDetached",
	"updatePositionStrategy",
	"strategy",
	"dir",
	"preventScroll",
	"wrapperId",
	"style",
	"onPlaced",
	"onInteractOutside",
	"onCloseAutoFocus",
	"onOpenAutoFocus",
	"onFocusOutside",
	"interactOutsideBehavior",
	"loop",
	"trapFocus",
	"isValidEvent",
	"customAnchor",
	"isStatic",
	"ref",
	"shouldRender"
]);
function Popper_layer($$anchor, $$props) {
	let interactOutsideBehavior = prop($$props, "interactOutsideBehavior", 3, "close"), trapFocus = prop($$props, "trapFocus", 3, true), isValidEvent = prop($$props, "isValidEvent", 3, () => false), customAnchor = prop($$props, "customAnchor", 3, null), isStatic = prop($$props, "isStatic", 3, false), restProps = rest_props($$props, rest_excludes$36);
	var fragment = comment();
	var node = first_child(fragment);
	var consequent = ($$anchor) => {
		Popper_layer_inner($$anchor, spread_props({
			get popper() {
				return $$props.popper;
			},
			get onEscapeKeydown() {
				return $$props.onEscapeKeydown;
			},
			get escapeKeydownBehavior() {
				return $$props.escapeKeydownBehavior;
			},
			get preventOverflowTextSelection() {
				return $$props.preventOverflowTextSelection;
			},
			get id() {
				return $$props.id;
			},
			get onPointerDown() {
				return $$props.onPointerDown;
			},
			get onPointerUp() {
				return $$props.onPointerUp;
			},
			get side() {
				return $$props.side;
			},
			get sideOffset() {
				return $$props.sideOffset;
			},
			get align() {
				return $$props.align;
			},
			get alignOffset() {
				return $$props.alignOffset;
			},
			get arrowPadding() {
				return $$props.arrowPadding;
			},
			get avoidCollisions() {
				return $$props.avoidCollisions;
			},
			get collisionBoundary() {
				return $$props.collisionBoundary;
			},
			get collisionPadding() {
				return $$props.collisionPadding;
			},
			get sticky() {
				return $$props.sticky;
			},
			get hideWhenDetached() {
				return $$props.hideWhenDetached;
			},
			get updatePositionStrategy() {
				return $$props.updatePositionStrategy;
			},
			get strategy() {
				return $$props.strategy;
			},
			get dir() {
				return $$props.dir;
			},
			get preventScroll() {
				return $$props.preventScroll;
			},
			get wrapperId() {
				return $$props.wrapperId;
			},
			get style() {
				return $$props.style;
			},
			get onPlaced() {
				return $$props.onPlaced;
			},
			get customAnchor() {
				return customAnchor();
			},
			get isStatic() {
				return isStatic();
			},
			get enabled() {
				return $$props.open;
			},
			get onInteractOutside() {
				return $$props.onInteractOutside;
			},
			get onCloseAutoFocus() {
				return $$props.onCloseAutoFocus;
			},
			get onOpenAutoFocus() {
				return $$props.onOpenAutoFocus;
			},
			get interactOutsideBehavior() {
				return interactOutsideBehavior();
			},
			get loop() {
				return $$props.loop;
			},
			get trapFocus() {
				return trapFocus();
			},
			get isValidEvent() {
				return isValidEvent();
			},
			get onFocusOutside() {
				return $$props.onFocusOutside;
			},
			forceMount: false,
			get ref() {
				return $$props.ref;
			}
		}, () => restProps));
	};
	if_block(node, ($$render) => {
		if ($$props.shouldRender) $$render(consequent);
	});
	append($$anchor, fragment);
}
//#endregion
//#region node_modules/bits-ui/dist/bits/utilities/popper-layer/popper-layer-force-mount.svelte
var rest_excludes$35 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"popper",
	"onEscapeKeydown",
	"escapeKeydownBehavior",
	"preventOverflowTextSelection",
	"id",
	"onPointerDown",
	"onPointerUp",
	"side",
	"sideOffset",
	"align",
	"alignOffset",
	"arrowPadding",
	"avoidCollisions",
	"collisionBoundary",
	"collisionPadding",
	"sticky",
	"hideWhenDetached",
	"updatePositionStrategy",
	"strategy",
	"dir",
	"preventScroll",
	"wrapperId",
	"style",
	"onPlaced",
	"onInteractOutside",
	"onCloseAutoFocus",
	"onOpenAutoFocus",
	"onFocusOutside",
	"interactOutsideBehavior",
	"loop",
	"trapFocus",
	"isValidEvent",
	"customAnchor",
	"isStatic",
	"enabled"
]);
function Popper_layer_force_mount($$anchor, $$props) {
	let interactOutsideBehavior = prop($$props, "interactOutsideBehavior", 3, "close"), trapFocus = prop($$props, "trapFocus", 3, true), isValidEvent = prop($$props, "isValidEvent", 3, () => false), customAnchor = prop($$props, "customAnchor", 3, null), isStatic = prop($$props, "isStatic", 3, false), restProps = rest_props($$props, rest_excludes$35);
	Popper_layer_inner($$anchor, spread_props({
		get popper() {
			return $$props.popper;
		},
		get onEscapeKeydown() {
			return $$props.onEscapeKeydown;
		},
		get escapeKeydownBehavior() {
			return $$props.escapeKeydownBehavior;
		},
		get preventOverflowTextSelection() {
			return $$props.preventOverflowTextSelection;
		},
		get id() {
			return $$props.id;
		},
		get onPointerDown() {
			return $$props.onPointerDown;
		},
		get onPointerUp() {
			return $$props.onPointerUp;
		},
		get side() {
			return $$props.side;
		},
		get sideOffset() {
			return $$props.sideOffset;
		},
		get align() {
			return $$props.align;
		},
		get alignOffset() {
			return $$props.alignOffset;
		},
		get arrowPadding() {
			return $$props.arrowPadding;
		},
		get avoidCollisions() {
			return $$props.avoidCollisions;
		},
		get collisionBoundary() {
			return $$props.collisionBoundary;
		},
		get collisionPadding() {
			return $$props.collisionPadding;
		},
		get sticky() {
			return $$props.sticky;
		},
		get hideWhenDetached() {
			return $$props.hideWhenDetached;
		},
		get updatePositionStrategy() {
			return $$props.updatePositionStrategy;
		},
		get strategy() {
			return $$props.strategy;
		},
		get dir() {
			return $$props.dir;
		},
		get preventScroll() {
			return $$props.preventScroll;
		},
		get wrapperId() {
			return $$props.wrapperId;
		},
		get style() {
			return $$props.style;
		},
		get onPlaced() {
			return $$props.onPlaced;
		},
		get customAnchor() {
			return customAnchor();
		},
		get isStatic() {
			return isStatic();
		},
		get enabled() {
			return $$props.enabled;
		},
		get onInteractOutside() {
			return $$props.onInteractOutside;
		},
		get onCloseAutoFocus() {
			return $$props.onCloseAutoFocus;
		},
		get onOpenAutoFocus() {
			return $$props.onOpenAutoFocus;
		},
		get interactOutsideBehavior() {
			return interactOutsideBehavior();
		},
		get loop() {
			return $$props.loop;
		},
		get trapFocus() {
			return trapFocus();
		},
		get isValidEvent() {
			return isValidEvent();
		},
		get onFocusOutside() {
			return $$props.onFocusOutside;
		}
	}, () => restProps, { forceMount: true }));
}
//#endregion
//#region node_modules/bits-ui/dist/bits/menu/components/menu-item.svelte
var rest_excludes$34 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"child",
	"children",
	"ref",
	"id",
	"disabled",
	"onSelect",
	"closeOnSelect"
]);
var root$24 = from_html(`<div><!></div>`);
function Menu_item($$anchor, $$props) {
	const uid = props_id();
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), id = prop($$props, "id", 19, () => createId(uid)), disabled = prop($$props, "disabled", 3, false), onSelect = prop($$props, "onSelect", 3, noop), closeOnSelect = prop($$props, "closeOnSelect", 3, true), restProps = rest_props($$props, rest_excludes$34);
	const itemState = MenuItemState.create({
		id: boxWith(() => id()),
		disabled: boxWith(() => disabled()),
		onSelect: boxWith(() => onSelect()),
		ref: boxWith(() => ref(), (v) => ref(v)),
		closeOnSelect: boxWith(() => closeOnSelect())
	});
	const mergedProps = user_derived(() => mergeProps(restProps, itemState.props));
	var fragment = comment();
	var node = first_child(fragment);
	var consequent = ($$anchor) => {
		var fragment_1 = comment();
		snippet(first_child(fragment_1), () => $$props.child, () => ({ props: get$2(mergedProps) }));
		append($$anchor, fragment_1);
	};
	var alternate = ($$anchor) => {
		var div = root$24();
		attribute_effect(div, () => ({ ...get$2(mergedProps) }));
		snippet(child(div), () => $$props.children ?? noop$1);
		reset(div);
		append($$anchor, div);
	};
	if_block(node, ($$render) => {
		if ($$props.child) $$render(consequent);
		else $$render(alternate, -1);
	});
	append($$anchor, fragment);
	pop();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/menu/components/menu-separator.svelte
var rest_excludes$33 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref",
	"id",
	"child",
	"children"
]);
var root$23 = from_html(`<div><!></div>`);
function Menu_separator($$anchor, $$props) {
	const uid = props_id();
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), id = prop($$props, "id", 19, () => createId(uid)), restProps = rest_props($$props, rest_excludes$33);
	const separatorState = MenuSeparatorState.create({
		id: boxWith(() => id()),
		ref: boxWith(() => ref(), (v) => ref(v))
	});
	const mergedProps = user_derived(() => mergeProps(restProps, separatorState.props));
	var fragment = comment();
	var node = first_child(fragment);
	var consequent = ($$anchor) => {
		var fragment_1 = comment();
		snippet(first_child(fragment_1), () => $$props.child, () => ({ props: get$2(mergedProps) }));
		append($$anchor, fragment_1);
	};
	var alternate = ($$anchor) => {
		var div = root$23();
		attribute_effect(div, () => ({ ...get$2(mergedProps) }));
		snippet(child(div), () => $$props.children ?? noop$1);
		reset(div);
		append($$anchor, div);
	};
	if_block(node, ($$render) => {
		if ($$props.child) $$render(consequent);
		else $$render(alternate, -1);
	});
	append($$anchor, fragment);
	pop();
}
//#endregion
//#region node_modules/bits-ui/dist/internal/safe-polygon.svelte.js
function isPointInPolygon(point, polygon) {
	const [x, y] = point;
	let isInside = false;
	const length = polygon.length;
	for (let i = 0, j = length - 1; i < length; j = i++) {
		const [xi, yi] = polygon[i] ?? [0, 0];
		const [xj, yj] = polygon[j] ?? [0, 0];
		if (yi >= y !== yj >= y && x <= (xj - xi) * (y - yi) / (yj - yi) + xi) isInside = !isInside;
	}
	return isInside;
}
function isInsideRect(point, rect) {
	return point[0] >= rect.left && point[0] <= rect.right && point[1] >= rect.top && point[1] <= rect.bottom;
}
function getSide(triggerRect, contentRect) {
	const triggerCenterX = triggerRect.left + triggerRect.width / 2;
	const triggerCenterY = triggerRect.top + triggerRect.height / 2;
	const contentCenterX = contentRect.left + contentRect.width / 2;
	const contentCenterY = contentRect.top + contentRect.height / 2;
	const deltaX = contentCenterX - triggerCenterX;
	const deltaY = contentCenterY - triggerCenterY;
	if (Math.abs(deltaX) > Math.abs(deltaY)) return deltaX > 0 ? "right" : "left";
	return deltaY > 0 ? "bottom" : "top";
}
/**
* Creates a safe polygon area that allows users to move their cursor between
* the trigger and floating content without closing it.
*/
var SafePolygon = class {
	#opts;
	#buffer;
	#transitIntentTimeout;
	#exitPoint = null;
	#exitTarget = null;
	#transitTargets = [];
	#trackedTriggerNode = null;
	#leaveFallbackRafId = null;
	#transitIntentTimeoutId = null;
	#cancelLeaveFallback() {
		if (this.#leaveFallbackRafId !== null) {
			cancelAnimationFrame(this.#leaveFallbackRafId);
			this.#leaveFallbackRafId = null;
		}
	}
	#scheduleLeaveFallback() {
		this.#cancelLeaveFallback();
		this.#leaveFallbackRafId = requestAnimationFrame(() => {
			this.#leaveFallbackRafId = null;
			if (!this.#exitPoint || !this.#exitTarget) return;
			this.#clearTracking();
			this.#opts.onPointerExit();
		});
	}
	#cancelTransitIntentTimeout() {
		if (this.#transitIntentTimeoutId !== null) {
			clearTimeout(this.#transitIntentTimeoutId);
			this.#transitIntentTimeoutId = null;
		}
	}
	#scheduleTransitIntentTimeout() {
		if (this.#transitIntentTimeout === null) return;
		this.#cancelTransitIntentTimeout();
		this.#transitIntentTimeoutId = window.setTimeout(() => {
			this.#transitIntentTimeoutId = null;
			if (!this.#exitPoint || !this.#exitTarget) return;
			this.#clearTracking();
			this.#opts.onPointerExit();
		}, this.#transitIntentTimeout);
	}
	constructor(opts) {
		this.#opts = opts;
		this.#buffer = opts.buffer ?? 1;
		const transitIntentTimeout = opts.transitIntentTimeout;
		this.#transitIntentTimeout = typeof transitIntentTimeout === "number" && transitIntentTimeout > 0 ? transitIntentTimeout : null;
		watch([
			opts.triggerNode,
			opts.contentNode,
			opts.enabled
		], ([triggerNode, contentNode, enabled]) => {
			if (!triggerNode || !contentNode || !enabled) {
				this.#trackedTriggerNode = null;
				this.#clearTracking();
				return;
			}
			if (this.#trackedTriggerNode && this.#trackedTriggerNode !== triggerNode) this.#clearTracking();
			this.#trackedTriggerNode = triggerNode;
			const doc = getDocument(triggerNode);
			const handlePointerMove = (e) => {
				this.#onPointerMove([e.clientX, e.clientY], triggerNode, contentNode);
			};
			const handleTriggerLeave = (e) => {
				const target = e.relatedTarget;
				if (isElement$1(target) && contentNode.contains(target)) return;
				const ignoredTargets = this.#opts.ignoredTargets?.() ?? [];
				if (isElement$1(target) && ignoredTargets.some((n) => n === target || n.contains(target))) return;
				this.#transitTargets = isElement$1(target) && ignoredTargets.length > 0 ? ignoredTargets.filter((n) => target.contains(n)) : [];
				this.#exitPoint = [e.clientX, e.clientY];
				this.#exitTarget = "content";
				this.#scheduleLeaveFallback();
			};
			const handleTriggerEnter = () => {
				this.#clearTracking();
			};
			const handleContentEnter = () => {
				this.#clearTracking();
			};
			const handleContentLeave = (e) => {
				const target = e.relatedTarget;
				if (isElement$1(target) && triggerNode.contains(target)) return;
				this.#exitPoint = [e.clientX, e.clientY];
				this.#exitTarget = "trigger";
				this.#scheduleLeaveFallback();
			};
			return [
				on(doc, "pointermove", handlePointerMove),
				on(triggerNode, "pointerleave", handleTriggerLeave),
				on(triggerNode, "pointerenter", handleTriggerEnter),
				on(contentNode, "pointerenter", handleContentEnter),
				on(contentNode, "pointerleave", handleContentLeave)
			].reduce((acc, cleanup) => () => {
				acc();
				cleanup();
			}, () => {});
		});
	}
	#onPointerMove(clientPoint, triggerNode, contentNode) {
		if (!this.#exitPoint || !this.#exitTarget) return;
		this.#cancelLeaveFallback();
		this.#scheduleTransitIntentTimeout();
		const triggerRect = triggerNode.getBoundingClientRect();
		const contentRect = contentNode.getBoundingClientRect();
		if (this.#exitTarget === "content" && isInsideRect(clientPoint, contentRect)) {
			this.#clearTracking();
			return;
		}
		if (this.#exitTarget === "trigger" && isInsideRect(clientPoint, triggerRect)) {
			this.#clearTracking();
			return;
		}
		if (this.#exitTarget === "content" && this.#transitTargets.length > 0) for (const transitTarget of this.#transitTargets) {
			const transitRect = transitTarget.getBoundingClientRect();
			if (isInsideRect(clientPoint, transitRect)) return;
			const transitSide = getSide(triggerRect, transitRect);
			const transitCorridor = this.#getCorridorPolygon(triggerRect, transitRect, transitSide);
			if (transitCorridor && isPointInPolygon(clientPoint, transitCorridor)) return;
		}
		const side = getSide(triggerRect, contentRect);
		const corridorPoly = this.#getCorridorPolygon(triggerRect, contentRect, side);
		if (corridorPoly && isPointInPolygon(clientPoint, corridorPoly)) return;
		const targetRect = this.#exitTarget === "content" ? contentRect : triggerRect;
		if (isPointInPolygon(clientPoint, this.#getSafePolygon(this.#exitPoint, targetRect, side, this.#exitTarget))) return;
		this.#clearTracking();
		this.#opts.onPointerExit();
	}
	#clearTracking() {
		this.#exitPoint = null;
		this.#exitTarget = null;
		this.#transitTargets = [];
		this.#cancelLeaveFallback();
		this.#cancelTransitIntentTimeout();
	}
	/**
	* Creates a rectangular corridor between trigger and content
	* This prevents closing when cursor is in the gap between them
	*/
	#getCorridorPolygon(triggerRect, contentRect, side) {
		const buffer = this.#buffer;
		switch (side) {
			case "top": return [
				[Math.min(triggerRect.left, contentRect.left) - buffer, triggerRect.top],
				[Math.min(triggerRect.left, contentRect.left) - buffer, contentRect.bottom],
				[Math.max(triggerRect.right, contentRect.right) + buffer, contentRect.bottom],
				[Math.max(triggerRect.right, contentRect.right) + buffer, triggerRect.top]
			];
			case "bottom": return [
				[Math.min(triggerRect.left, contentRect.left) - buffer, triggerRect.bottom],
				[Math.min(triggerRect.left, contentRect.left) - buffer, contentRect.top],
				[Math.max(triggerRect.right, contentRect.right) + buffer, contentRect.top],
				[Math.max(triggerRect.right, contentRect.right) + buffer, triggerRect.bottom]
			];
			case "left": return [
				[triggerRect.left, Math.min(triggerRect.top, contentRect.top) - buffer],
				[contentRect.right, Math.min(triggerRect.top, contentRect.top) - buffer],
				[contentRect.right, Math.max(triggerRect.bottom, contentRect.bottom) + buffer],
				[triggerRect.left, Math.max(triggerRect.bottom, contentRect.bottom) + buffer]
			];
			case "right": return [
				[triggerRect.right, Math.min(triggerRect.top, contentRect.top) - buffer],
				[contentRect.left, Math.min(triggerRect.top, contentRect.top) - buffer],
				[contentRect.left, Math.max(triggerRect.bottom, contentRect.bottom) + buffer],
				[triggerRect.right, Math.max(triggerRect.bottom, contentRect.bottom) + buffer]
			];
		}
	}
	/**
	* Creates a triangular/trapezoidal safe zone from the exit point to the target
	*/
	#getSafePolygon(exitPoint, targetRect, side, exitTarget) {
		const buffer = this.#buffer * 4;
		const [x, y] = exitPoint;
		switch (exitTarget === "trigger" ? this.#flipSide(side) : side) {
			case "top": return [
				[x - buffer, y + buffer],
				[x + buffer, y + buffer],
				[targetRect.right + buffer, targetRect.bottom],
				[targetRect.right + buffer, targetRect.top],
				[targetRect.left - buffer, targetRect.top],
				[targetRect.left - buffer, targetRect.bottom]
			];
			case "bottom": return [
				[x - buffer, y - buffer],
				[x + buffer, y - buffer],
				[targetRect.right + buffer, targetRect.top],
				[targetRect.right + buffer, targetRect.bottom],
				[targetRect.left - buffer, targetRect.bottom],
				[targetRect.left - buffer, targetRect.top]
			];
			case "left": return [
				[x + buffer, y - buffer],
				[x + buffer, y + buffer],
				[targetRect.right, targetRect.bottom + buffer],
				[targetRect.left, targetRect.bottom + buffer],
				[targetRect.left, targetRect.top - buffer],
				[targetRect.right, targetRect.top - buffer]
			];
			case "right": return [
				[x - buffer, y - buffer],
				[x - buffer, y + buffer],
				[targetRect.left, targetRect.bottom + buffer],
				[targetRect.right, targetRect.bottom + buffer],
				[targetRect.right, targetRect.top - buffer],
				[targetRect.left, targetRect.top - buffer]
			];
		}
	}
	#flipSide(side) {
		switch (side) {
			case "top": return "bottom";
			case "bottom": return "top";
			case "left": return "right";
			case "right": return "left";
		}
	}
};
//#endregion
//#region node_modules/bits-ui/dist/bits/dialog/components/dialog.svelte
function Dialog($$anchor, $$props) {
	push($$props, true);
	let open = prop($$props, "open", 15, false), onOpenChange = prop($$props, "onOpenChange", 3, noop), onOpenChangeComplete = prop($$props, "onOpenChangeComplete", 3, noop);
	DialogRootState.create({
		variant: boxWith(() => "dialog"),
		open: boxWith(() => open(), (v) => {
			open(v);
			onOpenChange()(v);
		}),
		onOpenChangeComplete: boxWith(() => onOpenChangeComplete())
	});
	var fragment = comment();
	snippet(first_child(fragment), () => $$props.children ?? noop$1);
	append($$anchor, fragment);
	pop();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/dialog/components/dialog-close.svelte
var rest_excludes$32 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"children",
	"child",
	"id",
	"ref",
	"disabled"
]);
var root$22 = from_html(`<button><!></button>`);
function Dialog_close($$anchor, $$props) {
	const uid = props_id();
	push($$props, true);
	let id = prop($$props, "id", 19, () => createId(uid)), ref = prop($$props, "ref", 15, null), disabled = prop($$props, "disabled", 3, false), restProps = rest_props($$props, rest_excludes$32);
	const closeState = DialogCloseState.create({
		variant: boxWith(() => "close"),
		id: boxWith(() => id()),
		ref: boxWith(() => ref(), (v) => ref(v)),
		disabled: boxWith(() => Boolean(disabled()))
	});
	const mergedProps = user_derived(() => mergeProps(restProps, closeState.props));
	var fragment = comment();
	var node = first_child(fragment);
	var consequent = ($$anchor) => {
		var fragment_1 = comment();
		snippet(first_child(fragment_1), () => $$props.child, () => ({ props: get$2(mergedProps) }));
		append($$anchor, fragment_1);
	};
	var alternate = ($$anchor) => {
		var button = root$22();
		attribute_effect(button, () => ({ ...get$2(mergedProps) }));
		snippet(child(button), () => $$props.children ?? noop$1);
		reset(button);
		append($$anchor, button);
	};
	if_block(node, ($$render) => {
		if ($$props.child) $$render(consequent);
		else $$render(alternate, -1);
	});
	append($$anchor, fragment);
	pop();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/dialog/components/dialog-content.svelte
var rest_excludes$31 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"id",
	"children",
	"child",
	"ref",
	"forceMount",
	"onCloseAutoFocus",
	"onOpenAutoFocus",
	"onEscapeKeydown",
	"onInteractOutside",
	"trapFocus",
	"preventScroll",
	"restoreScrollDelay"
]);
var root$21 = from_html(`<!> <!>`, 1);
var root_1$5 = from_html(`<!> <div><!></div>`, 1);
function Dialog_content($$anchor, $$props) {
	const uid = props_id();
	push($$props, true);
	let id = prop($$props, "id", 19, () => createId(uid)), ref = prop($$props, "ref", 15, null), forceMount = prop($$props, "forceMount", 3, false), onCloseAutoFocus = prop($$props, "onCloseAutoFocus", 3, noop), onOpenAutoFocus = prop($$props, "onOpenAutoFocus", 3, noop), onEscapeKeydown = prop($$props, "onEscapeKeydown", 3, noop), onInteractOutside = prop($$props, "onInteractOutside", 3, noop), trapFocus = prop($$props, "trapFocus", 3, true), preventScroll = prop($$props, "preventScroll", 3, true), restoreScrollDelay = prop($$props, "restoreScrollDelay", 3, null), restProps = rest_props($$props, rest_excludes$31);
	const contentState = DialogContentState.create({
		id: boxWith(() => id()),
		ref: boxWith(() => ref(), (v) => ref(v))
	});
	const mergedProps = user_derived(() => mergeProps(restProps, contentState.props));
	var fragment = comment();
	var node = first_child(fragment);
	var consequent_2 = ($$anchor) => {
		{
			const focusScope = ($$anchor, $$arg0) => {
				let focusScopeProps = () => ($$arg0?.()).props;
				Escape_layer($$anchor, spread_props(() => get$2(mergedProps), {
					get enabled() {
						return contentState.root.opts.open.current;
					},
					get ref() {
						return contentState.opts.ref;
					},
					onEscapeKeydown: (e) => {
						onEscapeKeydown()(e);
						if (e.defaultPrevented) return;
						contentState.root.handleClose();
					},
					children: ($$anchor, $$slotProps) => {
						Dismissible_layer($$anchor, spread_props(() => get$2(mergedProps), {
							get ref() {
								return contentState.opts.ref;
							},
							get enabled() {
								return contentState.root.opts.open.current;
							},
							onInteractOutside: (e) => {
								onInteractOutside()(e);
								if (e.defaultPrevented) return;
								contentState.root.handleClose();
							},
							children: ($$anchor, $$slotProps) => {
								Text_selection_layer($$anchor, spread_props(() => get$2(mergedProps), {
									get ref() {
										return contentState.opts.ref;
									},
									get enabled() {
										return contentState.root.opts.open.current;
									},
									children: ($$anchor, $$slotProps) => {
										var fragment_5 = comment();
										var node_1 = first_child(fragment_5);
										var consequent_1 = ($$anchor) => {
											var fragment_6 = root$21();
											var node_2 = first_child(fragment_6);
											var consequent = ($$anchor) => {
												Scroll_lock($$anchor, {
													get preventScroll() {
														return preventScroll();
													},
													get restoreScrollDelay() {
														return restoreScrollDelay();
													}
												});
											};
											if_block(node_2, ($$render) => {
												if (contentState.root.opts.open.current) $$render(consequent);
											});
											var node_3 = sibling(node_2, 2);
											{
												let $0 = user_derived(() => ({
													props: mergeProps(get$2(mergedProps), focusScopeProps()),
													...contentState.snippetProps
												}));
												snippet(node_3, () => $$props.child, () => get$2($0));
											}
											append($$anchor, fragment_6);
										};
										var alternate = ($$anchor) => {
											var fragment_8 = root_1$5();
											var node_4 = first_child(fragment_8);
											Scroll_lock(node_4, { get preventScroll() {
												return preventScroll();
											} });
											var div = sibling(node_4, 2);
											attribute_effect(div, ($0) => ({ ...$0 }), [() => mergeProps(get$2(mergedProps), focusScopeProps())]);
											snippet(child(div), () => $$props.children ?? noop$1);
											reset(div);
											append($$anchor, fragment_8);
										};
										if_block(node_1, ($$render) => {
											if ($$props.child) $$render(consequent_1);
											else $$render(alternate, -1);
										});
										append($$anchor, fragment_5);
									},
									$$slots: { default: true }
								}));
							},
							$$slots: { default: true }
						}));
					},
					$$slots: { default: true }
				}));
			};
			Focus_scope($$anchor, {
				get ref() {
					return contentState.opts.ref;
				},
				loop: true,
				get trapFocus() {
					return trapFocus();
				},
				get enabled() {
					return contentState.root.opts.open.current;
				},
				get onOpenAutoFocus() {
					return onOpenAutoFocus();
				},
				get onCloseAutoFocus() {
					return onCloseAutoFocus();
				},
				focusScope,
				$$slots: { focusScope: true }
			});
		}
	};
	if_block(node, ($$render) => {
		if (contentState.shouldRender || forceMount()) $$render(consequent_2);
	});
	append($$anchor, fragment);
	pop();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/menu/components/menu.svelte
function Menu($$anchor, $$props) {
	push($$props, true);
	let open = prop($$props, "open", 15, false), dir = prop($$props, "dir", 3, "ltr"), onOpenChange = prop($$props, "onOpenChange", 3, noop), onOpenChangeComplete = prop($$props, "onOpenChangeComplete", 3, noop), variant = prop($$props, "_internal_variant", 3, "dropdown-menu"), shouldSkipExitAnimation = prop($$props, "_internal_should_skip_exit_animation", 3, void 0);
	const root = MenuRootState.create({
		variant: boxWith(() => variant()),
		dir: boxWith(() => dir()),
		onClose: () => {
			open(false);
			onOpenChange()(false);
		},
		shouldSkipExitAnimation: () => shouldSkipExitAnimation()?.() ?? false
	});
	MenuMenuState.create({
		open: boxWith(() => open(), (v) => {
			open(v);
			onOpenChange()(v);
		}),
		onOpenChangeComplete: boxWith(() => onOpenChangeComplete())
	}, root);
	Floating_layer($$anchor, {
		children: ($$anchor, $$slotProps) => {
			var fragment_1 = comment();
			snippet(first_child(fragment_1), () => $$props.children ?? noop$1);
			append($$anchor, fragment_1);
		},
		$$slots: { default: true }
	});
	pop();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/dropdown-menu/components/dropdown-menu-content.svelte
var rest_excludes$30 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"id",
	"child",
	"children",
	"ref",
	"loop",
	"onInteractOutside",
	"onEscapeKeydown",
	"onCloseAutoFocus",
	"forceMount",
	"trapFocus",
	"style"
]);
var root$20 = from_html(`<div><div><!></div></div>`);
function Dropdown_menu_content$1($$anchor, $$props) {
	const uid = props_id();
	push($$props, true);
	let id = prop($$props, "id", 19, () => createId(uid)), ref = prop($$props, "ref", 15, null), loop = prop($$props, "loop", 3, true), onInteractOutside = prop($$props, "onInteractOutside", 3, noop), onEscapeKeydown = prop($$props, "onEscapeKeydown", 3, noop), onCloseAutoFocus = prop($$props, "onCloseAutoFocus", 3, noop), forceMount = prop($$props, "forceMount", 3, false), trapFocus = prop($$props, "trapFocus", 3, false), restProps = rest_props($$props, rest_excludes$30);
	const contentState = MenuContentState.create({
		id: boxWith(() => id()),
		loop: boxWith(() => loop()),
		ref: boxWith(() => ref(), (v) => ref(v)),
		onCloseAutoFocus: boxWith(() => onCloseAutoFocus())
	});
	const mergedProps = user_derived(() => mergeProps(restProps, contentState.props));
	function handleInteractOutside(e) {
		contentState.handleInteractOutside(e);
		if (e.defaultPrevented) return;
		onInteractOutside()(e);
		if (e.defaultPrevented) return;
		if (e.target && e.target instanceof Element) {
			const subContentSelector = `[${contentState.parentMenu.root.getBitsAttr("sub-content")}]`;
			if (e.target.closest(subContentSelector)) return;
		}
		contentState.parentMenu.onClose();
	}
	function handleEscapeKeydown(e) {
		onEscapeKeydown()(e);
		if (e.defaultPrevented) return;
		contentState.parentMenu.onClose();
	}
	var fragment = comment();
	var node = first_child(fragment);
	var consequent_1 = ($$anchor) => {
		{
			const popper = ($$anchor, $$arg0) => {
				let props = () => ($$arg0?.()).props;
				let wrapperProps = () => ($$arg0?.()).wrapperProps;
				const finalProps = user_derived(() => mergeProps(props(), { style: getFloatingContentCSSVars("dropdown-menu") }, { style: $$props.style }));
				var fragment_2 = comment();
				var node_1 = first_child(fragment_2);
				var consequent = ($$anchor) => {
					var fragment_3 = comment();
					var node_2 = first_child(fragment_3);
					{
						let $0 = user_derived(() => ({
							props: get$2(finalProps),
							wrapperProps: wrapperProps(),
							...contentState.snippetProps
						}));
						snippet(node_2, () => $$props.child, () => get$2($0));
					}
					append($$anchor, fragment_3);
				};
				var alternate = ($$anchor) => {
					var div = root$20();
					attribute_effect(div, () => ({ ...wrapperProps() }));
					var div_1 = child(div);
					attribute_effect(div_1, () => ({ ...get$2(finalProps) }));
					snippet(child(div_1), () => $$props.children ?? noop$1);
					reset(div_1);
					reset(div);
					append($$anchor, div);
				};
				if_block(node_1, ($$render) => {
					if ($$props.child) $$render(consequent);
					else $$render(alternate, -1);
				});
				append($$anchor, fragment_2);
			};
			Popper_layer_force_mount($$anchor, spread_props(() => get$2(mergedProps), () => contentState.popperProps, {
				get ref() {
					return contentState.opts.ref;
				},
				get enabled() {
					return contentState.parentMenu.opts.open.current;
				},
				onInteractOutside: handleInteractOutside,
				onEscapeKeydown: handleEscapeKeydown,
				get trapFocus() {
					return trapFocus();
				},
				get loop() {
					return loop();
				},
				forceMount: true,
				get id() {
					return id();
				},
				get shouldRender() {
					return contentState.shouldRender;
				},
				popper,
				$$slots: { popper: true }
			}));
		}
	};
	var consequent_3 = ($$anchor) => {
		{
			const popper = ($$anchor, $$arg0) => {
				let props = () => ($$arg0?.()).props;
				let wrapperProps = () => ($$arg0?.()).wrapperProps;
				const finalProps = user_derived(() => mergeProps(props(), { style: getFloatingContentCSSVars("dropdown-menu") }, { style: $$props.style }));
				var fragment_5 = comment();
				var node_4 = first_child(fragment_5);
				var consequent_2 = ($$anchor) => {
					var fragment_6 = comment();
					var node_5 = first_child(fragment_6);
					{
						let $0 = user_derived(() => ({
							props: get$2(finalProps),
							wrapperProps: wrapperProps(),
							...contentState.snippetProps
						}));
						snippet(node_5, () => $$props.child, () => get$2($0));
					}
					append($$anchor, fragment_6);
				};
				var alternate_1 = ($$anchor) => {
					var div_2 = root$20();
					attribute_effect(div_2, () => ({ ...wrapperProps() }));
					var div_3 = child(div_2);
					attribute_effect(div_3, () => ({ ...get$2(finalProps) }));
					snippet(child(div_3), () => $$props.children ?? noop$1);
					reset(div_3);
					reset(div_2);
					append($$anchor, div_2);
				};
				if_block(node_4, ($$render) => {
					if ($$props.child) $$render(consequent_2);
					else $$render(alternate_1, -1);
				});
				append($$anchor, fragment_5);
			};
			Popper_layer($$anchor, spread_props(() => get$2(mergedProps), () => contentState.popperProps, {
				get ref() {
					return contentState.opts.ref;
				},
				get open() {
					return contentState.parentMenu.opts.open.current;
				},
				onInteractOutside: handleInteractOutside,
				onEscapeKeydown: handleEscapeKeydown,
				get trapFocus() {
					return trapFocus();
				},
				get loop() {
					return loop();
				},
				forceMount: false,
				get id() {
					return id();
				},
				get shouldRender() {
					return contentState.shouldRender;
				},
				popper,
				$$slots: { popper: true }
			}));
		}
	};
	if_block(node, ($$render) => {
		if (forceMount()) $$render(consequent_1);
		else if (!forceMount()) $$render(consequent_3, 1);
	});
	append($$anchor, fragment);
	pop();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/menu/components/menu-trigger.svelte
var rest_excludes$29 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"id",
	"ref",
	"child",
	"children",
	"disabled",
	"type"
]);
var root$19 = from_html(`<button><!></button>`);
function Menu_trigger($$anchor, $$props) {
	const uid = props_id();
	push($$props, true);
	let id = prop($$props, "id", 19, () => createId(uid)), ref = prop($$props, "ref", 15, null), disabled = prop($$props, "disabled", 3, false), type = prop($$props, "type", 3, "button"), restProps = rest_props($$props, rest_excludes$29);
	const triggerState = DropdownMenuTriggerState.create({
		id: boxWith(() => id()),
		disabled: boxWith(() => disabled() ?? false),
		ref: boxWith(() => ref(), (v) => ref(v))
	});
	const mergedProps = user_derived(() => mergeProps(restProps, triggerState.props, { type: type() }));
	Floating_layer_anchor($$anchor, {
		get id() {
			return id();
		},
		get ref() {
			return triggerState.opts.ref;
		},
		children: ($$anchor, $$slotProps) => {
			var fragment_1 = comment();
			var node = first_child(fragment_1);
			var consequent = ($$anchor) => {
				var fragment_2 = comment();
				snippet(first_child(fragment_2), () => $$props.child, () => ({ props: get$2(mergedProps) }));
				append($$anchor, fragment_2);
			};
			var alternate = ($$anchor) => {
				var button = root$19();
				attribute_effect(button, () => ({ ...get$2(mergedProps) }));
				snippet(child(button), () => $$props.children ?? noop$1);
				reset(button);
				append($$anchor, button);
			};
			if_block(node, ($$render) => {
				if ($$props.child) $$render(consequent);
				else $$render(alternate, -1);
			});
			append($$anchor, fragment_1);
		},
		$$slots: { default: true }
	});
	pop();
}
//#endregion
//#region node_modules/bits-ui/dist/internal/timeout-fn.js
var TimeoutFn = class {
	#interval;
	#cb;
	#timer = null;
	constructor(cb, interval) {
		this.#cb = cb;
		this.#interval = interval;
		this.stop = this.stop.bind(this);
		this.start = this.start.bind(this);
		onDestroyEffect(this.stop);
	}
	#clear() {
		if (this.#timer !== null) {
			window.clearTimeout(this.#timer);
			this.#timer = null;
		}
	}
	stop() {
		this.#clear();
	}
	start(...args) {
		this.#clear();
		this.#timer = window.setTimeout(() => {
			this.#timer = null;
			this.#cb(...args);
		}, this.#interval);
	}
};
//#endregion
//#region node_modules/bits-ui/dist/bits/tooltip/tooltip.svelte.js
var tooltipAttrs = createBitsAttrs({
	component: "tooltip",
	parts: ["content", "trigger"]
});
var TooltipProviderContext = new Context("Tooltip.Provider");
var TooltipRootContext = new Context("Tooltip.Root");
var TooltipTriggerRegistryState = class {
	#triggers = state(proxy(/* @__PURE__ */ new Map()));
	get triggers() {
		return get$2(this.#triggers);
	}
	set triggers(value) {
		set(this.#triggers, value, true);
	}
	#activeTriggerId = state(null);
	get activeTriggerId() {
		return get$2(this.#activeTriggerId);
	}
	set activeTriggerId(value) {
		set(this.#activeTriggerId, value, true);
	}
	#activeTriggerNode = user_derived(() => {
		const activeTriggerId = this.activeTriggerId;
		if (activeTriggerId === null) return null;
		return this.triggers.get(activeTriggerId)?.node ?? null;
	});
	get activeTriggerNode() {
		return get$2(this.#activeTriggerNode);
	}
	set activeTriggerNode(value) {
		set(this.#activeTriggerNode, value);
	}
	#activePayload = user_derived(() => {
		const activeTriggerId = this.activeTriggerId;
		if (activeTriggerId === null) return null;
		return this.triggers.get(activeTriggerId)?.payload ?? null;
	});
	get activePayload() {
		return get$2(this.#activePayload);
	}
	set activePayload(value) {
		set(this.#activePayload, value);
	}
	register = (record) => {
		const next = new Map(this.triggers);
		next.set(record.id, record);
		this.triggers = next;
		this.#coerceActiveTrigger();
	};
	update = (record) => {
		const next = new Map(this.triggers);
		next.set(record.id, record);
		this.triggers = next;
		this.#coerceActiveTrigger();
	};
	unregister = (id) => {
		if (!this.triggers.has(id)) return;
		const next = new Map(this.triggers);
		next.delete(id);
		this.triggers = next;
		if (this.activeTriggerId === id) this.activeTriggerId = null;
	};
	setActiveTrigger = (id) => {
		if (id === null) {
			this.activeTriggerId = null;
			return;
		}
		if (!this.triggers.has(id)) {
			this.activeTriggerId = null;
			return;
		}
		this.activeTriggerId = id;
	};
	get = (id) => {
		return this.triggers.get(id);
	};
	has = (id) => {
		return this.triggers.has(id);
	};
	getFirstTriggerId = () => {
		const firstEntry = this.triggers.entries().next();
		if (firstEntry.done) return null;
		return firstEntry.value[0];
	};
	#coerceActiveTrigger = () => {
		const activeTriggerId = this.activeTriggerId;
		if (activeTriggerId === null) return;
		if (!this.triggers.has(activeTriggerId)) this.activeTriggerId = null;
	};
};
var TooltipRootState = class TooltipRootState {
	static create(opts) {
		return TooltipRootContext.set(new TooltipRootState(opts, TooltipProviderContext.get()));
	}
	opts;
	provider;
	#delayDuration = user_derived(() => this.opts.delayDuration.current ?? this.provider.opts.delayDuration.current);
	get delayDuration() {
		return get$2(this.#delayDuration);
	}
	set delayDuration(value) {
		set(this.#delayDuration, value);
	}
	#disableHoverableContent = user_derived(() => this.opts.disableHoverableContent.current ?? this.provider.opts.disableHoverableContent.current);
	get disableHoverableContent() {
		return get$2(this.#disableHoverableContent);
	}
	set disableHoverableContent(value) {
		set(this.#disableHoverableContent, value);
	}
	#disableCloseOnTriggerClick = user_derived(() => this.opts.disableCloseOnTriggerClick.current ?? this.provider.opts.disableCloseOnTriggerClick.current);
	get disableCloseOnTriggerClick() {
		return get$2(this.#disableCloseOnTriggerClick);
	}
	set disableCloseOnTriggerClick(value) {
		set(this.#disableCloseOnTriggerClick, value);
	}
	#disabled = user_derived(() => this.opts.disabled.current ?? this.provider.opts.disabled.current);
	get disabled() {
		return get$2(this.#disabled);
	}
	set disabled(value) {
		set(this.#disabled, value);
	}
	#ignoreNonKeyboardFocus = user_derived(() => this.opts.ignoreNonKeyboardFocus.current ?? this.provider.opts.ignoreNonKeyboardFocus.current);
	get ignoreNonKeyboardFocus() {
		return get$2(this.#ignoreNonKeyboardFocus);
	}
	set ignoreNonKeyboardFocus(value) {
		set(this.#ignoreNonKeyboardFocus, value);
	}
	registry;
	tether;
	#contentNode = state(null);
	get contentNode() {
		return get$2(this.#contentNode);
	}
	set contentNode(value) {
		set(this.#contentNode, value, true);
	}
	contentPresence;
	#wasOpenDelayed = state(false);
	#timerFn;
	#stateAttr = user_derived(() => {
		if (!this.opts.open.current) return "closed";
		return get$2(this.#wasOpenDelayed) ? "delayed-open" : "instant-open";
	});
	get stateAttr() {
		return get$2(this.#stateAttr);
	}
	set stateAttr(value) {
		set(this.#stateAttr, value);
	}
	constructor(opts, provider) {
		this.opts = opts;
		this.provider = provider;
		this.tether = opts.tether.current?.state ?? null;
		this.registry = this.tether?.registry ?? new TooltipTriggerRegistryState();
		this.#timerFn = new TimeoutFn(() => {
			set(this.#wasOpenDelayed, true);
			this.opts.open.current = true;
		}, this.delayDuration ?? 0);
		if (this.tether) {
			this.tether.root = this;
			onMountEffect(() => {
				return () => {
					if (this.tether?.root === this) this.tether.root = null;
				};
			});
		}
		this.contentPresence = new PresenceManager({
			open: this.opts.open,
			ref: boxWith(() => this.contentNode),
			onComplete: () => {
				this.opts.onOpenChangeComplete.current(this.opts.open.current);
			}
		});
		watch(() => this.delayDuration, () => {
			if (this.delayDuration === void 0) return;
			this.#timerFn = new TimeoutFn(() => {
				set(this.#wasOpenDelayed, true);
				this.opts.open.current = true;
			}, this.delayDuration);
		});
		watch(() => this.opts.open.current, (isOpen) => {
			if (isOpen) {
				this.ensureActiveTrigger();
				this.provider.onOpen(this);
			} else this.provider.onClose(this);
		}, { lazy: true });
		watch(() => this.opts.triggerId.current, (triggerId) => {
			if (triggerId === this.registry.activeTriggerId) return;
			this.registry.setActiveTrigger(triggerId);
		});
		watch(() => this.registry.activeTriggerId, (activeTriggerId) => {
			if (this.opts.triggerId.current === activeTriggerId) return;
			this.opts.triggerId.current = activeTriggerId;
		});
	}
	handleOpen = () => {
		this.#timerFn.stop();
		set(this.#wasOpenDelayed, false);
		this.ensureActiveTrigger();
		this.opts.open.current = true;
	};
	handleClose = () => {
		this.#timerFn.stop();
		this.opts.open.current = false;
	};
	#handleDelayedOpen = () => {
		this.#timerFn.stop();
		const shouldSkipDelay = !this.provider.isOpenDelayed;
		const delayDuration = this.delayDuration ?? 0;
		if (shouldSkipDelay || delayDuration === 0) {
			set(this.#wasOpenDelayed, false);
			this.opts.open.current = true;
		} else this.#timerFn.start();
	};
	onTriggerEnter = (triggerId) => {
		this.setActiveTrigger(triggerId);
		this.#handleDelayedOpen();
	};
	onTriggerLeave = () => {
		if (this.disableHoverableContent) this.handleClose();
		else this.#timerFn.stop();
	};
	ensureActiveTrigger = () => {
		if (this.registry.activeTriggerId !== null && this.registry.has(this.registry.activeTriggerId)) return;
		if (this.opts.triggerId.current !== null && this.registry.has(this.opts.triggerId.current)) {
			this.registry.setActiveTrigger(this.opts.triggerId.current);
			return;
		}
		const firstTriggerId = this.registry.getFirstTriggerId();
		this.registry.setActiveTrigger(firstTriggerId);
	};
	setActiveTrigger = (triggerId) => {
		this.registry.setActiveTrigger(triggerId);
	};
	registerTrigger = (trigger) => {
		this.registry.register(trigger);
		if (trigger.disabled && this.registry.activeTriggerId === trigger.id && this.opts.open.current) this.handleClose();
	};
	updateTrigger = (trigger) => {
		this.registry.update(trigger);
		if (trigger.disabled && this.registry.activeTriggerId === trigger.id && this.opts.open.current) this.handleClose();
	};
	unregisterTrigger = (id) => {
		const isActive = this.registry.activeTriggerId === id;
		this.registry.unregister(id);
		if (isActive && this.opts.open.current) this.handleClose();
	};
	isActiveTrigger = (triggerId) => {
		return this.registry.activeTriggerId === triggerId;
	};
	get triggerNode() {
		return this.registry.activeTriggerNode;
	}
	get activePayload() {
		return this.registry.activePayload;
	}
	get activeTriggerId() {
		return this.registry.activeTriggerId;
	}
};
var TooltipTriggerState = class TooltipTriggerState {
	static create(opts) {
		if (opts.tether.current) return new TooltipTriggerState(opts, null, opts.tether.current.state);
		return new TooltipTriggerState(opts, TooltipRootContext.get(), null);
	}
	opts;
	root;
	tether;
	attachment;
	#isPointerDown = simpleBox(false);
	#hasPointerMoveOpened = state(false);
	domContext;
	#transitCheckTimeout = null;
	#mounted = false;
	#lastRegisteredId = null;
	constructor(opts, root, tether) {
		this.opts = opts;
		this.root = root;
		this.tether = tether;
		this.domContext = new DOMContext(opts.ref);
		this.attachment = attachRef(this.opts.ref, (v) => this.#register(v));
		watch(() => this.opts.id.current, () => {
			this.#register(this.opts.ref.current);
		});
		watch(() => this.opts.payload.current, () => {
			this.#register(this.opts.ref.current);
		});
		watch(() => this.opts.disabled.current, () => {
			this.#register(this.opts.ref.current);
		});
		onMountEffect(() => {
			this.#mounted = true;
			this.#register(this.opts.ref.current);
			return () => {
				const root = this.#getRoot();
				const id = this.#lastRegisteredId;
				if (id) if (this.tether) this.tether.registry.unregister(id);
				else root?.unregisterTrigger(id);
				this.#lastRegisteredId = null;
				this.#mounted = false;
			};
		});
	}
	#getRoot = () => {
		return this.tether?.root ?? this.root;
	};
	#isDisabled = () => {
		const root = this.#getRoot();
		return this.opts.disabled.current || Boolean(root?.disabled);
	};
	#register = (node) => {
		if (!this.#mounted) return;
		const id = this.opts.id.current;
		const payload = this.opts.payload.current;
		const disabled = this.opts.disabled.current;
		if (this.#lastRegisteredId && this.#lastRegisteredId !== id) {
			const root = this.#getRoot();
			if (this.tether) this.tether.registry.unregister(this.#lastRegisteredId);
			else root?.unregisterTrigger(this.#lastRegisteredId);
		}
		const triggerRecord = {
			id,
			node,
			payload,
			disabled
		};
		const root = this.#getRoot();
		if (this.tether) {
			if (this.tether.registry.has(id)) this.tether.registry.update(triggerRecord);
			else this.tether.registry.register(triggerRecord);
			if (disabled && this.tether.registry.activeTriggerId === id && root?.opts.open.current) root.handleClose();
		} else if (root?.registry.has(id)) root.updateTrigger(triggerRecord);
		else root?.registerTrigger(triggerRecord);
		this.#lastRegisteredId = id;
	};
	#clearTransitCheck = () => {
		if (this.#transitCheckTimeout !== null) {
			clearTimeout(this.#transitCheckTimeout);
			this.#transitCheckTimeout = null;
		}
	};
	handlePointerUp = () => {
		this.#isPointerDown.current = false;
	};
	#onpointerup = () => {
		if (this.#isDisabled()) return;
		this.#isPointerDown.current = false;
	};
	#onpointerdown = () => {
		if (this.#isDisabled()) return;
		this.#isPointerDown.current = true;
		this.domContext.getDocument().addEventListener("pointerup", () => {
			this.handlePointerUp();
		}, { once: true });
	};
	#onpointerenter = (e) => {
		const root = this.#getRoot();
		if (!root) return;
		if (this.#isDisabled()) {
			if (root.opts.open.current) root.handleClose();
			return;
		}
		if (e.pointerType === "touch") return;
		if (root.provider.isPointerInTransit.current) {
			this.#clearTransitCheck();
			this.#transitCheckTimeout = window.setTimeout(() => {
				if (root.provider.isPointerInTransit.current) {
					root.provider.isPointerInTransit.current = false;
					root.onTriggerEnter(this.opts.id.current);
					set(this.#hasPointerMoveOpened, true);
				}
			}, 250);
			return;
		}
		root.onTriggerEnter(this.opts.id.current);
		set(this.#hasPointerMoveOpened, true);
	};
	#onpointermove = (e) => {
		const root = this.#getRoot();
		if (!root) return;
		if (this.#isDisabled()) {
			if (root.opts.open.current) root.handleClose();
			return;
		}
		if (e.pointerType === "touch") return;
		if (get$2(this.#hasPointerMoveOpened)) return;
		this.#clearTransitCheck();
		root.provider.isPointerInTransit.current = false;
		root.onTriggerEnter(this.opts.id.current);
		set(this.#hasPointerMoveOpened, true);
	};
	#onpointerleave = (e) => {
		const root = this.#getRoot();
		if (!root) return;
		if (this.#isDisabled()) return;
		this.#clearTransitCheck();
		if (!root.isActiveTrigger(this.opts.id.current)) {
			set(this.#hasPointerMoveOpened, false);
			return;
		}
		const relatedTarget = e.relatedTarget;
		if (isElement$1(relatedTarget)) for (const record of root.registry.triggers.values()) {
			if (record.node !== relatedTarget) continue;
			if (root.provider.opts.skipDelayDuration.current > 0) {
				set(this.#hasPointerMoveOpened, false);
				return;
			}
			root.handleClose();
			set(this.#hasPointerMoveOpened, false);
			return;
		}
		root.onTriggerLeave();
		set(this.#hasPointerMoveOpened, false);
	};
	#onfocus = (e) => {
		const root = this.#getRoot();
		if (!root) return;
		if (this.#isPointerDown.current) return;
		if (this.#isDisabled()) {
			if (root.opts.open.current) root.handleClose();
			return;
		}
		if (root.ignoreNonKeyboardFocus && !isFocusVisible(e.currentTarget)) return;
		root.setActiveTrigger(this.opts.id.current);
		root.handleOpen();
	};
	#onblur = () => {
		const root = this.#getRoot();
		if (!root || this.#isDisabled()) return;
		root.handleClose();
	};
	#onclick = () => {
		const root = this.#getRoot();
		if (!root || root.disableCloseOnTriggerClick || this.#isDisabled()) return;
		root.handleClose();
	};
	#props = user_derived(() => {
		const root = this.#getRoot();
		const isOpenForTrigger = Boolean(root?.opts.open.current && root.isActiveTrigger(this.opts.id.current));
		const isDisabled = this.#isDisabled();
		return {
			id: this.opts.id.current,
			"aria-describedby": isOpenForTrigger ? root?.contentNode?.id : void 0,
			"data-state": isOpenForTrigger ? root?.stateAttr : "closed",
			"data-disabled": boolToEmptyStrOrUndef(isDisabled),
			"data-delay-duration": `${root?.delayDuration ?? 0}`,
			[tooltipAttrs.trigger]: "",
			tabindex: isDisabled ? void 0 : this.opts.tabindex.current,
			disabled: this.opts.disabled.current,
			onpointerup: this.#onpointerup,
			onpointerdown: this.#onpointerdown,
			onpointerenter: this.#onpointerenter,
			onpointermove: this.#onpointermove,
			onpointerleave: this.#onpointerleave,
			onfocus: this.#onfocus,
			onblur: this.#onblur,
			onclick: this.#onclick,
			...this.attachment
		};
	});
	get props() {
		return get$2(this.#props);
	}
	set props(value) {
		set(this.#props, value);
	}
};
var TooltipContentState = class TooltipContentState {
	static create(opts) {
		return new TooltipContentState(opts, TooltipRootContext.get());
	}
	opts;
	root;
	attachment;
	constructor(opts, root) {
		this.opts = opts;
		this.root = root;
		this.attachment = attachRef(this.opts.ref, (v) => this.root.contentNode = v);
		new SafePolygon({
			triggerNode: () => this.root.triggerNode,
			contentNode: () => this.root.contentNode,
			enabled: () => this.root.opts.open.current && !this.root.disableHoverableContent,
			transitIntentTimeout: 180,
			ignoredTargets: () => {
				if (this.root.provider.opts.skipDelayDuration.current === 0) return [];
				const nodes = [];
				const activeTriggerNode = this.root.triggerNode;
				for (const record of this.root.registry.triggers.values()) if (record.node && record.node !== activeTriggerNode) nodes.push(record.node);
				return nodes;
			},
			onPointerExit: () => {
				if (this.root.provider.isTooltipOpen(this.root)) this.root.handleClose();
			}
		});
	}
	onInteractOutside = (e) => {
		if (isElement$1(e.target) && this.root.triggerNode?.contains(e.target) && this.root.disableCloseOnTriggerClick) {
			e.preventDefault();
			return;
		}
		this.opts.onInteractOutside.current(e);
		if (e.defaultPrevented) return;
		this.root.handleClose();
	};
	onEscapeKeydown = (e) => {
		this.opts.onEscapeKeydown.current?.(e);
		if (e.defaultPrevented) return;
		this.root.handleClose();
	};
	onOpenAutoFocus = (e) => {
		e.preventDefault();
	};
	onCloseAutoFocus = (e) => {
		e.preventDefault();
	};
	get shouldRender() {
		return this.root.contentPresence.shouldRender;
	}
	#snippetProps = user_derived(() => ({ open: this.root.opts.open.current }));
	get snippetProps() {
		return get$2(this.#snippetProps);
	}
	set snippetProps(value) {
		set(this.#snippetProps, value);
	}
	#props = user_derived(() => ({
		id: this.opts.id.current,
		"data-state": this.root.stateAttr,
		"data-disabled": boolToEmptyStrOrUndef(this.root.disabled),
		...getDataTransitionAttrs(this.root.contentPresence.transitionStatus),
		style: { outline: "none" },
		[tooltipAttrs.content]: "",
		...this.attachment
	}));
	get props() {
		return get$2(this.#props);
	}
	set props(value) {
		set(this.#props, value);
	}
	popperProps = {
		onInteractOutside: this.onInteractOutside,
		onEscapeKeydown: this.onEscapeKeydown,
		onOpenAutoFocus: this.onOpenAutoFocus,
		onCloseAutoFocus: this.onCloseAutoFocus
	};
};
//#endregion
//#region node_modules/bits-ui/dist/bits/tooltip/components/tooltip.svelte
function Tooltip$1($$anchor, $$props) {
	push($$props, true);
	let open = prop($$props, "open", 15, false), triggerId = prop($$props, "triggerId", 15, null), onOpenChange = prop($$props, "onOpenChange", 3, noop), onOpenChangeComplete = prop($$props, "onOpenChangeComplete", 3, noop);
	const rootState = TooltipRootState.create({
		open: boxWith(() => open(), (v) => {
			open(v);
			onOpenChange()(v);
		}),
		triggerId: boxWith(() => triggerId(), (v) => {
			triggerId(v);
		}),
		delayDuration: boxWith(() => $$props.delayDuration),
		disableCloseOnTriggerClick: boxWith(() => $$props.disableCloseOnTriggerClick),
		disableHoverableContent: boxWith(() => $$props.disableHoverableContent),
		ignoreNonKeyboardFocus: boxWith(() => $$props.ignoreNonKeyboardFocus),
		disabled: boxWith(() => $$props.disabled),
		onOpenChangeComplete: boxWith(() => onOpenChangeComplete()),
		tether: boxWith(() => $$props.tether)
	});
	Floating_layer($$anchor, {
		tooltip: true,
		children: ($$anchor, $$slotProps) => {
			var fragment_1 = comment();
			snippet(first_child(fragment_1), () => $$props.children ?? noop$1, () => ({
				open: rootState.opts.open.current,
				triggerId: rootState.activeTriggerId,
				payload: rootState.activePayload
			}));
			append($$anchor, fragment_1);
		},
		$$slots: { default: true }
	});
	pop();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/tooltip/components/tooltip-content.svelte
var rest_excludes$28 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"children",
	"child",
	"id",
	"ref",
	"side",
	"sideOffset",
	"align",
	"avoidCollisions",
	"arrowPadding",
	"sticky",
	"strategy",
	"hideWhenDetached",
	"customAnchor",
	"collisionPadding",
	"onInteractOutside",
	"onEscapeKeydown",
	"forceMount",
	"style"
]);
var root$18 = from_html(`<div><div><!></div></div>`);
function Tooltip_content$1($$anchor, $$props) {
	const uid = props_id();
	push($$props, true);
	let id = prop($$props, "id", 19, () => createId(uid)), ref = prop($$props, "ref", 15, null), side = prop($$props, "side", 3, "top"), sideOffset = prop($$props, "sideOffset", 3, 0), align = prop($$props, "align", 3, "center"), avoidCollisions = prop($$props, "avoidCollisions", 3, true), arrowPadding = prop($$props, "arrowPadding", 3, 0), sticky = prop($$props, "sticky", 3, "partial"), hideWhenDetached = prop($$props, "hideWhenDetached", 3, false), collisionPadding = prop($$props, "collisionPadding", 3, 0), onInteractOutside = prop($$props, "onInteractOutside", 3, noop), onEscapeKeydown = prop($$props, "onEscapeKeydown", 3, noop), forceMount = prop($$props, "forceMount", 3, false), restProps = rest_props($$props, rest_excludes$28);
	const contentState = TooltipContentState.create({
		id: boxWith(() => id()),
		ref: boxWith(() => ref(), (v) => ref(v)),
		onInteractOutside: boxWith(() => onInteractOutside()),
		onEscapeKeydown: boxWith(() => onEscapeKeydown())
	});
	const floatingProps = user_derived(() => ({
		side: side(),
		sideOffset: sideOffset(),
		align: align(),
		avoidCollisions: avoidCollisions(),
		arrowPadding: arrowPadding(),
		sticky: sticky(),
		hideWhenDetached: hideWhenDetached(),
		collisionPadding: collisionPadding(),
		strategy: $$props.strategy,
		customAnchor: $$props.customAnchor ?? contentState.root.triggerNode
	}));
	const mergedProps = user_derived(() => mergeProps(restProps, get$2(floatingProps), contentState.props));
	var fragment = comment();
	var node = first_child(fragment);
	var consequent_1 = ($$anchor) => {
		{
			const popper = ($$anchor, $$arg0) => {
				let props = () => ($$arg0?.()).props;
				let wrapperProps = () => ($$arg0?.()).wrapperProps;
				const finalWrapperProps = user_derived(() => mergeProps(wrapperProps(), { style: { pointerEvents: contentState.root.disableHoverableContent ? "none" : void 0 } }));
				const finalProps = user_derived(() => mergeProps(props(), { style: getFloatingContentCSSVars("tooltip") }, { style: $$props.style }));
				var fragment_2 = comment();
				var node_1 = first_child(fragment_2);
				var consequent = ($$anchor) => {
					var fragment_3 = comment();
					var node_2 = first_child(fragment_3);
					{
						let $0 = user_derived(() => ({
							props: get$2(finalProps),
							wrapperProps: get$2(finalWrapperProps),
							...contentState.snippetProps
						}));
						snippet(node_2, () => $$props.child, () => get$2($0));
					}
					append($$anchor, fragment_3);
				};
				var alternate = ($$anchor) => {
					var div = root$18();
					attribute_effect(div, () => ({ ...get$2(finalWrapperProps) }));
					var div_1 = child(div);
					attribute_effect(div_1, () => ({ ...get$2(finalProps) }));
					snippet(child(div_1), () => $$props.children ?? noop$1);
					reset(div_1);
					reset(div);
					append($$anchor, div);
				};
				if_block(node_1, ($$render) => {
					if ($$props.child) $$render(consequent);
					else $$render(alternate, -1);
				});
				append($$anchor, fragment_2);
			};
			let $0 = user_derived(() => contentState.root.disableHoverableContent ? "none" : "auto");
			Popper_layer_force_mount($$anchor, spread_props(() => get$2(mergedProps), () => contentState.popperProps, {
				get enabled() {
					return contentState.root.opts.open.current;
				},
				get id() {
					return id();
				},
				trapFocus: false,
				loop: false,
				preventScroll: false,
				forceMount: true,
				get ref() {
					return contentState.opts.ref;
				},
				tooltip: true,
				get shouldRender() {
					return contentState.shouldRender;
				},
				get contentPointerEvents() {
					return get$2($0);
				},
				popper,
				$$slots: { popper: true }
			}));
		}
	};
	var consequent_3 = ($$anchor) => {
		{
			const popper = ($$anchor, $$arg0) => {
				let props = () => ($$arg0?.()).props;
				let wrapperProps = () => ($$arg0?.()).wrapperProps;
				const finalWrapperProps = user_derived(() => mergeProps(wrapperProps(), { style: { pointerEvents: contentState.root.disableHoverableContent ? "none" : void 0 } }));
				const finalProps = user_derived(() => mergeProps(props(), { style: getFloatingContentCSSVars("tooltip") }, { style: $$props.style }));
				var fragment_5 = comment();
				var node_4 = first_child(fragment_5);
				var consequent_2 = ($$anchor) => {
					var fragment_6 = comment();
					var node_5 = first_child(fragment_6);
					{
						let $0 = user_derived(() => ({
							props: get$2(finalProps),
							wrapperProps: get$2(finalWrapperProps),
							...contentState.snippetProps
						}));
						snippet(node_5, () => $$props.child, () => get$2($0));
					}
					append($$anchor, fragment_6);
				};
				var alternate_1 = ($$anchor) => {
					var div_2 = root$18();
					attribute_effect(div_2, () => ({ ...get$2(finalWrapperProps) }));
					var div_3 = child(div_2);
					attribute_effect(div_3, () => ({ ...get$2(finalProps) }));
					snippet(child(div_3), () => $$props.children ?? noop$1);
					reset(div_3);
					reset(div_2);
					append($$anchor, div_2);
				};
				if_block(node_4, ($$render) => {
					if ($$props.child) $$render(consequent_2);
					else $$render(alternate_1, -1);
				});
				append($$anchor, fragment_5);
			};
			let $0 = user_derived(() => contentState.root.disableHoverableContent ? "none" : "auto");
			Popper_layer($$anchor, spread_props(() => get$2(mergedProps), () => contentState.popperProps, {
				get open() {
					return contentState.root.opts.open.current;
				},
				get id() {
					return id();
				},
				trapFocus: false,
				loop: false,
				preventScroll: false,
				forceMount: false,
				get ref() {
					return contentState.opts.ref;
				},
				tooltip: true,
				get shouldRender() {
					return contentState.shouldRender;
				},
				get contentPointerEvents() {
					return get$2($0);
				},
				popper,
				$$slots: { popper: true }
			}));
		}
	};
	if_block(node, ($$render) => {
		if (forceMount()) $$render(consequent_1);
		else if (!forceMount()) $$render(consequent_3, 1);
	});
	append($$anchor, fragment);
	pop();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/tooltip/components/tooltip-trigger.svelte
var rest_excludes$27 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"children",
	"child",
	"id",
	"disabled",
	"payload",
	"tether",
	"type",
	"tabindex",
	"ref"
]);
var root$17 = from_html(`<button><!></button>`);
function Tooltip_trigger$1($$anchor, $$props) {
	const uid = props_id();
	push($$props, true);
	let id = prop($$props, "id", 19, () => createId(uid)), disabled = prop($$props, "disabled", 3, false), type = prop($$props, "type", 3, "button"), tabindex = prop($$props, "tabindex", 3, 0), ref = prop($$props, "ref", 15, null), restProps = rest_props($$props, rest_excludes$27);
	const triggerState = TooltipTriggerState.create({
		id: boxWith(() => id()),
		disabled: boxWith(() => disabled() ?? false),
		tabindex: boxWith(() => tabindex() ?? 0),
		payload: boxWith(() => $$props.payload),
		tether: boxWith(() => $$props.tether),
		ref: boxWith(() => ref(), (v) => ref(v))
	});
	const mergedProps = user_derived(() => mergeProps(restProps, triggerState.props, { type: type() }));
	var fragment = comment();
	var node = first_child(fragment);
	var consequent = ($$anchor) => {
		var fragment_1 = comment();
		snippet(first_child(fragment_1), () => $$props.child, () => ({ props: get$2(mergedProps) }));
		append($$anchor, fragment_1);
	};
	var alternate = ($$anchor) => {
		var button = root$17();
		attribute_effect(button, () => ({ ...get$2(mergedProps) }));
		snippet(child(button), () => $$props.children ?? noop$1);
		reset(button);
		append($$anchor, button);
	};
	if_block(node, ($$render) => {
		if ($$props.child) $$render(consequent);
		else $$render(alternate, -1);
	});
	append($$anchor, fragment);
	pop();
}
//#endregion
//#region node_modules/bits-ui/dist/bits/tooltip/components/tooltip-arrow.svelte
var rest_excludes$26 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref"
]);
function Tooltip_arrow($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), restProps = rest_props($$props, rest_excludes$26);
	Floating_layer_arrow($$anchor, spread_props(() => restProps, {
		get ref() {
			return ref();
		},
		set ref($$value) {
			ref($$value);
		}
	}));
	pop();
}
//#endregion
//#region src/lib/components/ui/tooltip/tooltip.svelte
var rest_excludes$25 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"open"
]);
function Tooltip($$anchor, $$props) {
	push($$props, true);
	let open = prop($$props, "open", 15, false), restProps = rest_props($$props, rest_excludes$25);
	var fragment = comment();
	component(first_child(fragment), () => Tooltip$1, ($$anchor, TooltipPrimitive_Root) => {
		TooltipPrimitive_Root($$anchor, spread_props(() => restProps, {
			get open() {
				return open();
			},
			set open($$value) {
				open($$value);
			}
		}));
	});
	append($$anchor, fragment);
	pop();
}
//#endregion
//#region src/lib/components/ui/tooltip/tooltip-trigger.svelte
var rest_excludes$24 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref"
]);
function Tooltip_trigger($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), restProps = rest_props($$props, rest_excludes$24);
	var fragment = comment();
	component(first_child(fragment), () => Tooltip_trigger$1, ($$anchor, TooltipPrimitive_Trigger) => {
		TooltipPrimitive_Trigger($$anchor, spread_props({ "data-slot": "tooltip-trigger" }, () => restProps, {
			get ref() {
				return ref();
			},
			set ref($$value) {
				ref($$value);
			}
		}));
	});
	append($$anchor, fragment);
	pop();
}
//#endregion
//#region src/lib/components/ui/tooltip/tooltip-portal.svelte
var rest_excludes$23 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy"
]);
function Tooltip_portal($$anchor, $$props) {
	let restProps = rest_props($$props, rest_excludes$23);
	var fragment = comment();
	component(first_child(fragment), () => Portal, ($$anchor, TooltipPrimitive_Portal) => {
		TooltipPrimitive_Portal($$anchor, spread_props(() => restProps));
	});
	append($$anchor, fragment);
}
//#endregion
//#region src/lib/components/ui/tooltip/tooltip-content.svelte
var rest_excludes$22 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref",
	"class",
	"sideOffset",
	"side",
	"children",
	"arrowClasses",
	"portalProps"
]);
var root$16 = from_html(`<div></div>`);
var root_1$4 = from_html(`<!> <!>`, 1);
function Tooltip_content($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), sideOffset = prop($$props, "sideOffset", 3, 0), side = prop($$props, "side", 3, "top"), restProps = rest_props($$props, rest_excludes$22);
	Tooltip_portal($$anchor, spread_props(() => $$props.portalProps, {
		children: ($$anchor, $$slotProps) => {
			var fragment_1 = comment();
			var node = first_child(fragment_1);
			{
				let $0 = user_derived(() => cn("data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs has-data-[slot=kbd]:pr-1.5 **:data-[slot=kbd]:relative **:data-[slot=kbd]:isolate **:data-[slot=kbd]:z-50 **:data-[slot=kbd]:rounded-sm bg-foreground text-background z-50 w-fit max-w-xs origin-(--bits-tooltip-content-transform-origin)", $$props.class));
				component(node, () => Tooltip_content$1, ($$anchor, TooltipPrimitive_Content) => {
					TooltipPrimitive_Content($$anchor, spread_props({
						"data-slot": "tooltip-content",
						get sideOffset() {
							return sideOffset();
						},
						get side() {
							return side();
						},
						get class() {
							return get$2($0);
						}
					}, () => restProps, {
						get ref() {
							return ref();
						},
						set ref($$value) {
							ref($$value);
						},
						children: ($$anchor, $$slotProps) => {
							var fragment_2 = root_1$4();
							var node_1 = first_child(fragment_2);
							snippet(node_1, () => $$props.children ?? noop$1);
							var node_2 = sibling(node_1, 2);
							{
								const child = ($$anchor, $$arg0) => {
									let props = () => ($$arg0?.()).props;
									var div = root$16();
									attribute_effect(div, ($0) => ({
										class: $0,
										...props()
									}), [() => cn("size-2.5 translate-y-[calc(-50%-2px)] rotate-45 rounded-[2px] bg-foreground fill-foreground z-50", "data-[side=top]:translate-x-1/2 data-[side=top]:translate-y-[calc(-50%+2px)]", "data-[side=bottom]:-translate-x-1/2 data-[side=bottom]:-translate-y-[calc(-50%+1px)]", "data-[side=right]:translate-x-[calc(50%+2px)] data-[side=right]:translate-y-1/2", "data-[side=left]:-translate-y-[calc(50%-3px)]", $$props.arrowClasses)]);
									append($$anchor, div);
								};
								component(node_2, () => Tooltip_arrow, ($$anchor, TooltipPrimitive_Arrow) => {
									TooltipPrimitive_Arrow($$anchor, {
										child,
										$$slots: { child: true }
									});
								});
							}
							append($$anchor, fragment_2);
						},
						$$slots: { default: true }
					}));
				});
			}
			append($$anchor, fragment_1);
		},
		$$slots: { default: true }
	}));
	pop();
}
//#endregion
//#region src/lib/layout/Sidebar.svelte
var root$15 = from_html(`<a href="/dashboard" class="w-8 h-8 bg-white flex items-center justify-center rounded-lg shadow-sm border border-border overflow-hidden p-0.5 hover:border-primary transition-colors shrink-0" title="Texas Travels Accounts Portal"><img src="https://admin.texastravelsbh.com/assets/images/texas-logo.png" class="w-full h-full object-contain" alt="Texas Travels"/></a>`);
var root_1$3 = from_html(`<a href="/dashboard" class="flex items-center gap-2.5 outline-none group shrink-0"><div class="h-9 bg-white flex items-center justify-center rounded-lg shadow-sm border border-border overflow-hidden p-1 px-1.5 shrink-0"><img src="https://admin.texastravelsbh.com/assets/images/texas-logo.png" class="h-7 w-auto object-contain" alt="Texas Travels"/></div> <div class="flex flex-col transition-opacity duration-200"><span class="font-bold text-xs tracking-tight text-foreground whitespace-nowrap group-hover:text-primary transition-colors">Texas Travels</span> <span class="text-[9px] uppercase tracking-wider font-semibold text-primary leading-none mt-0.5">Accounts Portal</span></div></a>`);
var root_2$2 = from_html(`<button><!></button>`);
var root_3$2 = from_html(`<!> <!>`, 1);
var root_4$2 = from_html(`<span class="px-1.5 py-0.2 text-[9px] font-bold bg-amber-500/20 text-amber-700 rounded-md"> </span>`);
var root_5$2 = from_html(`<a><span class="flex-1"> </span> <!></a>`);
var root_6$2 = from_html(`<div class="pl-7 space-y-0.5 mt-0.5"></div>`);
var root_7$1 = from_html(`<button><div class="flex items-center gap-3"><!> <span> </span></div> <!></button> <!>`, 1);
var root_8$1 = from_html(`<div class="space-y-1"><!></div>`);
var root_9$1 = from_html(`<a><!></a>`);
var root_10 = from_html(`<a><!> <span> </span></a>`);
var root_11 = from_html(`<button class="w-full h-10 rounded-xl bg-destructive/10 text-destructive hover:bg-destructive/20 flex items-center justify-center cursor-pointer"><!></button>`);
var root_12 = from_html(`<img class="h-8 w-8 rounded-full object-cover shrink-0 border border-primary/10" alt="Profile Avatar"/>`);
var root_13 = from_html(`<div class="h-8 w-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0 border border-primary/10"> </div>`);
var root_14 = from_html(`<div class="flex items-center justify-between gap-2"><div class="flex items-center gap-2 overflow-hidden"><!> <div class="flex flex-col overflow-hidden"><span class="text-xs font-semibold text-foreground truncate"> </span> <span class="text-[9px] text-muted-foreground truncate capitalize"> </span></div></div> <!></div>`);
var root_15 = from_html(`<aside><button class="absolute -right-3 top-20 bg-border border border-border rounded-full p-1 text-muted-foreground hover:text-foreground cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/20 z-50"><!></button> <div class="flex items-center gap-3 px-4 h-16 border-b border-border overflow-hidden"><!></div> <nav class="flex-1 overflow-y-auto px-2 py-4 space-y-1"></nav> <div class="p-3 border-t border-border bg-muted/20"><!></div></aside>`);
function Sidebar($$anchor, $$props) {
	push($$props, true);
	const $currentUser = () => store_get(currentUser, "$currentUser", $$stores);
	const $filteredNavigation = () => store_get(filteredNavigation, "$filteredNavigation", $$stores);
	const $page = () => store_get(page, "$page", $$stores);
	const [$$stores, $$cleanup] = setup_stores();
	let pendingTransactionsCount = state(0);
	onMount(async () => {
		try {
			const txns = await apiFetch("api/Transaction?pageSize=100");
			set(pendingTransactionsCount, txns.filter((t) => t.status === "pending").length, true);
		} catch (err) {}
	});
	let collapsed = state(false);
	let openSubmenus = proxy({
		Accounting: false,
		Payroll: false,
		"Sales Entries": false,
		Staffs: false
	});
	function toggleCollapse() {
		set(collapsed, !get$2(collapsed));
	}
	function toggleSubmenu(label) {
		if (get$2(collapsed)) set(collapsed, false);
		openSubmenus[label] = !openSubmenus[label];
	}
	async function handleLogout() {
		await logout();
		goto("/login");
	}
	const userInitials = user_derived(() => () => {
		return ($currentUser()?.name ?? "").split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase() || "AC";
	});
	function isRouteActive(currentPath, targetPath, hasChildren = false) {
		if (targetPath === "/dashboard") return currentPath === targetPath;
		return hasChildren ? currentPath.startsWith(targetPath) : currentPath === targetPath;
	}
	var aside = root_15();
	var button = child(aside);
	var node = child(button);
	{
		let $0 = user_derived(() => cn("h-3 w-3 transition-transform", get$2(collapsed) && "rotate-180"));
		Chevron_left(node, { get class() {
			return get$2($0);
		} });
	}
	reset(button);
	var div = sibling(button, 2);
	var node_1 = child(div);
	var consequent = ($$anchor) => {
		append($$anchor, root$15());
	};
	var alternate = ($$anchor) => {
		append($$anchor, root_1$3());
	};
	if_block(node_1, ($$render) => {
		if (get$2(collapsed)) $$render(consequent);
		else $$render(alternate, -1);
	});
	reset(div);
	var nav = sibling(div, 2);
	each(nav, 5, $filteredNavigation, (item) => item.route, ($$anchor, item) => {
		var fragment = comment();
		var node_2 = first_child(fragment);
		var consequent_5 = ($$anchor) => {
			var div_1 = root_8$1();
			var node_3 = child(div_1);
			var consequent_1 = ($$anchor) => {
				var fragment_1 = comment();
				component(first_child(fragment_1), () => Tooltip, ($$anchor, Tooltip_Root) => {
					Tooltip_Root($$anchor, {
						children: ($$anchor, $$slotProps) => {
							var fragment_2 = root_3$2();
							var node_5 = first_child(fragment_2);
							component(node_5, () => Tooltip_trigger, ($$anchor, Tooltip_Trigger) => {
								Tooltip_Trigger($$anchor, {
									children: ($$anchor, $$slotProps) => {
										var button_1 = root_2$2();
										component(child(button_1), () => get$2(item).icon, ($$anchor, item_icon) => {
											item_icon($$anchor, { class: "h-4.5 w-4.5 shrink-0" });
										});
										reset(button_1);
										template_effect(($0) => set_class(button_1, 1, $0), [() => clsx$1(cn("w-full flex items-center justify-center h-10 rounded-xl transition-colors hover:bg-muted text-muted-foreground", isRouteActive($page().url.pathname, get$2(item).route, true) && "bg-primary/10 text-primary"))]);
										delegated("click", button_1, () => toggleSubmenu(get$2(item).label));
										append($$anchor, button_1);
									},
									$$slots: { default: true }
								});
							});
							component(sibling(node_5, 2), () => Tooltip_content, ($$anchor, Tooltip_Content) => {
								Tooltip_Content($$anchor, {
									side: "right",
									children: ($$anchor, $$slotProps) => {
										next();
										var text$3 = text();
										template_effect(() => set_text(text$3, get$2(item).label));
										append($$anchor, text$3);
									},
									$$slots: { default: true }
								});
							});
							append($$anchor, fragment_2);
						},
						$$slots: { default: true }
					});
				});
				append($$anchor, fragment_1);
			};
			var alternate_2 = ($$anchor) => {
				var fragment_4 = root_7$1();
				var button_2 = first_child(fragment_4);
				var div_2 = child(button_2);
				var node_8 = child(div_2);
				component(node_8, () => get$2(item).icon, ($$anchor, item_icon_1) => {
					item_icon_1($$anchor, { class: "h-4.5 w-4.5 shrink-0" });
				});
				var span = sibling(node_8, 2);
				var text_1 = child(span, true);
				reset(span);
				reset(div_2);
				var node_9 = sibling(div_2, 2);
				var consequent_2 = ($$anchor) => {
					Chevron_down($$anchor, { class: "h-3.5 w-3.5" });
				};
				var alternate_1 = ($$anchor) => {
					Chevron_right$1($$anchor, { class: "h-3.5 w-3.5" });
				};
				if_block(node_9, ($$render) => {
					if (openSubmenus[get$2(item).label]) $$render(consequent_2);
					else $$render(alternate_1, -1);
				});
				reset(button_2);
				var node_10 = sibling(button_2, 2);
				var consequent_4 = ($$anchor) => {
					var div_3 = root_6$2();
					each(div_3, 21, () => get$2(item).children, (child) => child.route, ($$anchor, child$2) => {
						var a_2 = root_5$2();
						var span_1 = child(a_2);
						var text_2 = child(span_1, true);
						reset(span_1);
						var node_11 = sibling(span_1, 2);
						var consequent_3 = ($$anchor) => {
							var span_2 = root_4$2();
							var text_3 = child(span_2, true);
							reset(span_2);
							template_effect(() => set_text(text_3, get$2(pendingTransactionsCount)));
							append($$anchor, span_2);
						};
						var d = user_derived(() => get$2(child$2).label.includes("Receipts") && get$2(pendingTransactionsCount) > 0);
						if_block(node_11, ($$render) => {
							if (get$2(d)) $$render(consequent_3);
						});
						reset(a_2);
						template_effect(($0) => {
							set_attribute(a_2, "href", get$2(child$2).route);
							set_class(a_2, 1, $0);
							set_text(text_2, get$2(child$2).label);
						}, [() => clsx$1(cn("flex items-center gap-3 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 border-l border-transparent", isRouteActive($page().url.pathname, get$2(child$2).route) ? "text-primary border-primary pl-4 font-semibold" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"))]);
						append($$anchor, a_2);
					});
					reset(div_3);
					append($$anchor, div_3);
				};
				if_block(node_10, ($$render) => {
					if (openSubmenus[get$2(item).label]) $$render(consequent_4);
				});
				template_effect(($0) => {
					set_class(button_2, 1, $0);
					set_text(text_1, get$2(item).label);
				}, [() => clsx$1(cn("w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-colors hover:bg-muted text-muted-foreground cursor-pointer", isRouteActive($page().url.pathname, get$2(item).route, true) && "bg-primary/5 text-primary"))]);
				delegated("click", button_2, () => toggleSubmenu(get$2(item).label));
				append($$anchor, fragment_4);
			};
			if_block(node_3, ($$render) => {
				if (get$2(collapsed)) $$render(consequent_1);
				else $$render(alternate_2, -1);
			});
			reset(div_1);
			append($$anchor, div_1);
		};
		var alternate_4 = ($$anchor) => {
			var fragment_7 = comment();
			var node_12 = first_child(fragment_7);
			var consequent_6 = ($$anchor) => {
				var fragment_8 = comment();
				component(first_child(fragment_8), () => Tooltip, ($$anchor, Tooltip_Root_1) => {
					Tooltip_Root_1($$anchor, {
						children: ($$anchor, $$slotProps) => {
							var fragment_9 = root_3$2();
							var node_14 = first_child(fragment_9);
							component(node_14, () => Tooltip_trigger, ($$anchor, Tooltip_Trigger_1) => {
								Tooltip_Trigger_1($$anchor, {
									children: ($$anchor, $$slotProps) => {
										var a_3 = root_9$1();
										component(child(a_3), () => get$2(item).icon, ($$anchor, item_icon_2) => {
											item_icon_2($$anchor, { class: "h-4.5 w-4.5 shrink-0" });
										});
										reset(a_3);
										template_effect(($0) => {
											set_attribute(a_3, "href", get$2(item).route);
											set_class(a_3, 1, $0);
										}, [() => clsx$1(cn("flex items-center justify-center h-10 rounded-xl transition-colors", isRouteActive($page().url.pathname, get$2(item).route) ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"))]);
										append($$anchor, a_3);
									},
									$$slots: { default: true }
								});
							});
							component(sibling(node_14, 2), () => Tooltip_content, ($$anchor, Tooltip_Content_1) => {
								Tooltip_Content_1($$anchor, {
									side: "right",
									children: ($$anchor, $$slotProps) => {
										next();
										var text_4 = text();
										template_effect(() => set_text(text_4, get$2(item).label));
										append($$anchor, text_4);
									},
									$$slots: { default: true }
								});
							});
							append($$anchor, fragment_9);
						},
						$$slots: { default: true }
					});
				});
				append($$anchor, fragment_8);
			};
			var alternate_3 = ($$anchor) => {
				var a_4 = root_10();
				var node_17 = child(a_4);
				component(node_17, () => get$2(item).icon, ($$anchor, item_icon_3) => {
					item_icon_3($$anchor, { class: "h-4.5 w-4.5 shrink-0" });
				});
				var span_3 = sibling(node_17, 2);
				var text_5 = child(span_3, true);
				reset(span_3);
				reset(a_4);
				template_effect(($0) => {
					set_attribute(a_4, "href", get$2(item).route);
					set_class(a_4, 1, $0);
					set_text(text_5, get$2(item).label);
				}, [() => clsx$1(cn("flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 border-l-2", isRouteActive($page().url.pathname, get$2(item).route) ? "bg-primary/10 text-primary border-primary font-bold" : "text-muted-foreground border-transparent hover:text-foreground hover:bg-muted"))]);
				append($$anchor, a_4);
			};
			if_block(node_12, ($$render) => {
				if (get$2(collapsed)) $$render(consequent_6);
				else $$render(alternate_3, -1);
			});
			append($$anchor, fragment_7);
		};
		if_block(node_2, ($$render) => {
			if (get$2(item).children) $$render(consequent_5);
			else $$render(alternate_4, -1);
		});
		append($$anchor, fragment);
	});
	reset(nav);
	var div_4 = sibling(nav, 2);
	var node_18 = child(div_4);
	var consequent_7 = ($$anchor) => {
		var fragment_11 = comment();
		component(first_child(fragment_11), () => Tooltip, ($$anchor, Tooltip_Root_2) => {
			Tooltip_Root_2($$anchor, {
				children: ($$anchor, $$slotProps) => {
					var fragment_12 = root_3$2();
					var node_20 = first_child(fragment_12);
					component(node_20, () => Tooltip_trigger, ($$anchor, Tooltip_Trigger_2) => {
						Tooltip_Trigger_2($$anchor, {
							children: ($$anchor, $$slotProps) => {
								var button_3 = root_11();
								Log_out(child(button_3), { class: "h-4 w-4" });
								reset(button_3);
								delegated("click", button_3, handleLogout);
								append($$anchor, button_3);
							},
							$$slots: { default: true }
						});
					});
					component(sibling(node_20, 2), () => Tooltip_content, ($$anchor, Tooltip_Content_2) => {
						Tooltip_Content_2($$anchor, {
							side: "right",
							children: ($$anchor, $$slotProps) => {
								next();
								append($$anchor, text("Sign Out"));
							},
							$$slots: { default: true }
						});
					});
					append($$anchor, fragment_12);
				},
				$$slots: { default: true }
			});
		});
		append($$anchor, fragment_11);
	};
	var alternate_6 = ($$anchor) => {
		var div_5 = root_14();
		var div_6 = child(div_5);
		var node_23 = child(div_6);
		var consequent_8 = ($$anchor) => {
			var img = root_12();
			template_effect(() => set_attribute(img, "src", $currentUser().profilePicture));
			append($$anchor, img);
		};
		var alternate_5 = ($$anchor) => {
			var div_7 = root_13();
			var text_7 = child(div_7, true);
			reset(div_7);
			template_effect(($0) => set_text(text_7, $0), [() => get$2(userInitials)()]);
			append($$anchor, div_7);
		};
		if_block(node_23, ($$render) => {
			if ($currentUser()?.profilePicture) $$render(consequent_8);
			else $$render(alternate_5, -1);
		});
		var div_8 = sibling(node_23, 2);
		var span_4 = child(div_8);
		var text_8 = child(span_4, true);
		reset(span_4);
		var span_5 = sibling(span_4, 2);
		var text_9 = child(span_5, true);
		reset(span_5);
		reset(div_8);
		reset(div_6);
		Button(sibling(div_6, 2), {
			onclick: handleLogout,
			variant: "ghost",
			size: "icon",
			class: "h-8 w-8 text-muted-foreground hover:text-destructive cursor-pointer",
			title: "Sign out",
			children: ($$anchor, $$slotProps) => {
				Log_out($$anchor, { class: "h-4 w-4" });
			},
			$$slots: { default: true }
		});
		reset(div_5);
		template_effect(($0) => {
			set_text(text_8, $currentUser()?.name);
			set_text(text_9, $0);
		}, [() => ($currentUser()?.userType || "").replace(/_/g, " ")]);
		append($$anchor, div_5);
	};
	if_block(node_18, ($$render) => {
		if (get$2(collapsed)) $$render(consequent_7);
		else $$render(alternate_6, -1);
	});
	reset(div_4);
	reset(aside);
	template_effect(($0) => {
		set_class(aside, 1, $0);
		set_attribute(button, "aria-label", get$2(collapsed) ? "Expand sidebar" : "Collapse sidebar");
	}, [() => clsx$1(cn("flex flex-col h-full bg-card border-r border-border shrink-0 transition-all duration-300 select-none relative z-50", get$2(collapsed) ? "w-16" : "w-64"))]);
	delegated("click", button, toggleCollapse);
	append($$anchor, aside);
	pop();
	$$cleanup();
}
delegate(["click"]);
//#endregion
//#region src/lib/components/ui/breadcrumb/breadcrumb.svelte
var rest_excludes$21 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref",
	"class",
	"children"
]);
var root$14 = from_html(`<nav><!></nav>`);
function Breadcrumb($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), restProps = rest_props($$props, rest_excludes$21);
	var nav = root$14();
	attribute_effect(nav, ($0) => ({
		"data-slot": "breadcrumb",
		"aria-label": "breadcrumb",
		class: $0,
		...restProps
	}), [() => cn("cn-breadcrumb", $$props.class)]);
	snippet(child(nav), () => $$props.children ?? noop$1);
	reset(nav);
	bind_this(nav, ($$value) => ref($$value), () => ref());
	append($$anchor, nav);
	pop();
}
//#endregion
//#region node_modules/@lucide/svelte/dist/defaultAttributes.js
/**
* @file
* @license @lucide/svelte v1.24.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var defaultAttributes = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": 2,
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
};
//#endregion
//#region node_modules/@lucide/svelte/dist/utils/hasA11yProp.js
/**
* @file
* @license @lucide/svelte v1.24.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
/**
* Check if a component has an accessibility prop
*
* @param {object} props
* @returns {boolean} Whether the component has an accessibility prop
*/
var hasA11yProp = (props) => {
	for (const prop in props) if (prop.startsWith("aria-") || prop === "role" || prop === "title") return true;
	return false;
};
//#endregion
//#region node_modules/@lucide/svelte/dist/context.js
/**
* @file
* @license @lucide/svelte v1.24.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var LucideContext = Symbol("lucide-context");
var getLucideContext = () => getContext(LucideContext);
//#endregion
//#region node_modules/@lucide/svelte/dist/Icon.svelte
var rest_excludes$20 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"name",
	"color",
	"size",
	"strokeWidth",
	"absoluteStrokeWidth",
	"iconNode",
	"children"
]);
var root$13 = from_svg(`<svg><!><!></svg>`);
function Icon($$anchor, $$props) {
	push($$props, true);
	const globalProps = getLucideContext() ?? {};
	const color = prop($$props, "color", 19, () => globalProps.color ?? "currentColor"), size = prop($$props, "size", 19, () => globalProps.size ?? 24), strokeWidth = prop($$props, "strokeWidth", 19, () => globalProps.strokeWidth ?? 2), absoluteStrokeWidth = prop($$props, "absoluteStrokeWidth", 19, () => globalProps.absoluteStrokeWidth ?? false), iconNode = prop($$props, "iconNode", 19, () => []), props = rest_props($$props, rest_excludes$20);
	const calculatedStrokeWidth = user_derived(() => absoluteStrokeWidth() ? Number(strokeWidth()) * 24 / Number(size()) : strokeWidth());
	var svg = root$13();
	attribute_effect(svg, ($0) => ({
		...defaultAttributes,
		...$0,
		...props,
		width: size(),
		height: size(),
		stroke: color(),
		"stroke-width": get$2(calculatedStrokeWidth),
		class: [
			"lucide-icon lucide",
			globalProps.class,
			$$props.name && `lucide-${$$props.name}`,
			$$props.class
		]
	}), [() => !$$props.children && !hasA11yProp(props) && { "aria-hidden": "true" }]);
	var node = child(svg);
	each(node, 17, iconNode, index$1, ($$anchor, $$item) => {
		var $$array = user_derived(() => to_array(get$2($$item), 2));
		let tag = () => get$2($$array)[0];
		let attrs = () => get$2($$array)[1];
		var fragment = comment();
		element(first_child(fragment), tag, true, ($$element, $$anchor) => {
			attribute_effect($$element, () => ({ ...attrs() }));
		});
		append($$anchor, fragment);
	});
	snippet(sibling(node), () => $$props.children ?? noop$1);
	reset(svg);
	append($$anchor, svg);
	pop();
}
//#endregion
//#region src/lib/components/ui/breadcrumb/breadcrumb-item.svelte
var rest_excludes$19 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref",
	"class",
	"children"
]);
var root$12 = from_html(`<li><!></li>`);
function Breadcrumb_item($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), restProps = rest_props($$props, rest_excludes$19);
	var li = root$12();
	attribute_effect(li, ($0) => ({
		"data-slot": "breadcrumb-item",
		class: $0,
		...restProps
	}), [() => cn("gap-1 inline-flex items-center", $$props.class)]);
	snippet(child(li), () => $$props.children ?? noop$1);
	reset(li);
	bind_this(li, ($$value) => ref($$value), () => ref());
	append($$anchor, li);
	pop();
}
//#endregion
//#region node_modules/@lucide/svelte/dist/icons/chevron-right.svelte
var rest_excludes$18 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy"
]);
function Chevron_right($$anchor, $$props) {
	let props = rest_props($$props, rest_excludes$18);
	const iconNode = [["path", { "d": "m9 18 6-6-6-6" }]];
	Icon($$anchor, spread_props({ name: "chevron-right" }, () => props, { get iconNode() {
		return iconNode;
	} }));
}
//#endregion
//#region src/lib/components/ui/breadcrumb/breadcrumb-separator.svelte
var rest_excludes$17 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref",
	"class",
	"children"
]);
var root$11 = from_html(`<li><!></li>`);
function Breadcrumb_separator($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), restProps = rest_props($$props, rest_excludes$17);
	var li = root$11();
	attribute_effect(li, ($0) => ({
		"data-slot": "breadcrumb-separator",
		role: "presentation",
		"aria-hidden": "true",
		class: $0,
		...restProps
	}), [() => cn("[&>svg]:size-3.5", $$props.class)]);
	var node = child(li);
	var consequent = ($$anchor) => {
		var fragment = comment();
		snippet(first_child(fragment), () => $$props.children ?? noop$1);
		append($$anchor, fragment);
	};
	var alternate = ($$anchor) => {
		Chevron_right($$anchor, {});
	};
	if_block(node, ($$render) => {
		if ($$props.children) $$render(consequent);
		else $$render(alternate, -1);
	});
	reset(li);
	bind_this(li, ($$value) => ref($$value), () => ref());
	append($$anchor, li);
	pop();
}
//#endregion
//#region src/lib/components/ui/breadcrumb/breadcrumb-link.svelte
var rest_excludes$16 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref",
	"class",
	"href",
	"child",
	"children"
]);
var root$10 = from_html(`<a><!></a>`);
function Breadcrumb_link($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), href = prop($$props, "href", 3, void 0), restProps = rest_props($$props, rest_excludes$16);
	const attrs = user_derived(() => ({
		"data-slot": "breadcrumb-link",
		class: cn("hover:text-foreground transition-colors", $$props.class),
		href: href(),
		...restProps
	}));
	var fragment = comment();
	var node = first_child(fragment);
	var consequent = ($$anchor) => {
		var fragment_1 = comment();
		snippet(first_child(fragment_1), () => $$props.child, () => ({ props: get$2(attrs) }));
		append($$anchor, fragment_1);
	};
	var alternate = ($$anchor) => {
		var a = root$10();
		attribute_effect(a, () => ({ ...get$2(attrs) }));
		snippet(child(a), () => $$props.children ?? noop$1);
		reset(a);
		bind_this(a, ($$value) => ref($$value), () => ref());
		append($$anchor, a);
	};
	if_block(node, ($$render) => {
		if ($$props.child) $$render(consequent);
		else $$render(alternate, -1);
	});
	append($$anchor, fragment);
	pop();
}
//#endregion
//#region src/lib/components/ui/breadcrumb/breadcrumb-list.svelte
var rest_excludes$15 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref",
	"class",
	"children"
]);
var root$9 = from_html(`<ol><!></ol>`);
function Breadcrumb_list($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), restProps = rest_props($$props, rest_excludes$15);
	var ol = root$9();
	attribute_effect(ol, ($0) => ({
		"data-slot": "breadcrumb-list",
		class: $0,
		...restProps
	}), [() => cn("text-muted-foreground gap-1.5 text-sm flex flex-wrap items-center wrap-break-word", $$props.class)]);
	snippet(child(ol), () => $$props.children ?? noop$1);
	reset(ol);
	bind_this(ol, ($$value) => ref($$value), () => ref());
	append($$anchor, ol);
	pop();
}
//#endregion
//#region src/lib/components/ui/breadcrumb/breadcrumb-page.svelte
var rest_excludes$14 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref",
	"class",
	"children"
]);
var root$8 = from_html(`<span><!></span>`);
function Breadcrumb_page($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), restProps = rest_props($$props, rest_excludes$14);
	var span = root$8();
	attribute_effect(span, ($0) => ({
		"data-slot": "breadcrumb-page",
		role: "link",
		"aria-disabled": "true",
		"aria-current": "page",
		class: $0,
		...restProps
	}), [() => cn("text-foreground font-normal", $$props.class)]);
	snippet(child(span), () => $$props.children ?? noop$1);
	reset(span);
	bind_this(span, ($$value) => ref($$value), () => ref());
	append($$anchor, span);
	pop();
}
//#endregion
//#region src/lib/layout/Breadcrumbs.svelte
var root$7 = from_html(`<!> <!>`, 1);
function Breadcrumbs($$anchor, $$props) {
	push($$props, true);
	const $page = () => store_get(page, "$page", $$stores);
	const [$$stores, $$cleanup] = setup_stores();
	const segmentLabels = {
		dashboard: "Dashboard",
		transactions: "Transactions",
		suppliers: "Suppliers",
		agents: "Agents",
		"cash-bank": "Cash & Bank",
		payments: "Payments",
		accounting: "Accounting",
		"chart-of-accounts": "Chart of Accounts",
		periods: "Accounting Periods",
		journals: "Journal Entries",
		ledger: "General Ledger",
		reconciliation: "Reconciliation",
		reports: "Reports",
		payroll: "Payroll",
		staff: "Staff Profiles",
		admin: "Administration"
	};
	const breadcrumbs = user_derived(() => () => {
		const paths = $page().url.pathname.split("/").filter(Boolean);
		let accum = "";
		return paths.map((segment, idx) => {
			accum += `/${segment}`;
			return {
				label: segmentLabels[segment] || segment.replace(/-/g, " "),
				route: accum,
				isLast: idx === paths.length - 1
			};
		});
	});
	const activeBreadcrumbs = user_derived(() => get$2(breadcrumbs)());
	var fragment = comment();
	var node = first_child(fragment);
	var consequent_1 = ($$anchor) => {
		var fragment_1 = comment();
		component(first_child(fragment_1), () => Breadcrumb, ($$anchor, Breadcrumb_Root) => {
			Breadcrumb_Root($$anchor, {
				class: "select-none",
				children: ($$anchor, $$slotProps) => {
					var fragment_2 = comment();
					component(first_child(fragment_2), () => Breadcrumb_list, ($$anchor, Breadcrumb_List) => {
						Breadcrumb_List($$anchor, {
							children: ($$anchor, $$slotProps) => {
								var fragment_3 = root$7();
								var node_3 = first_child(fragment_3);
								component(node_3, () => Breadcrumb_item, ($$anchor, Breadcrumb_Item) => {
									Breadcrumb_Item($$anchor, {
										children: ($$anchor, $$slotProps) => {
											var fragment_4 = comment();
											component(first_child(fragment_4), () => Breadcrumb_link, ($$anchor, Breadcrumb_Link) => {
												Breadcrumb_Link($$anchor, {
													href: "/dashboard",
													children: ($$anchor, $$slotProps) => {
														next();
														append($$anchor, text("Home"));
													},
													$$slots: { default: true }
												});
											});
											append($$anchor, fragment_4);
										},
										$$slots: { default: true }
									});
								});
								each(sibling(node_3, 2), 17, () => get$2(activeBreadcrumbs), (bc) => bc.route, ($$anchor, bc) => {
									var fragment_5 = root$7();
									var node_6 = first_child(fragment_5);
									component(node_6, () => Breadcrumb_separator, ($$anchor, Breadcrumb_Separator) => {
										Breadcrumb_Separator($$anchor, {});
									});
									component(sibling(node_6, 2), () => Breadcrumb_item, ($$anchor, Breadcrumb_Item_1) => {
										Breadcrumb_Item_1($$anchor, {
											children: ($$anchor, $$slotProps) => {
												var fragment_6 = comment();
												var node_8 = first_child(fragment_6);
												var consequent = ($$anchor) => {
													var fragment_7 = comment();
													component(first_child(fragment_7), () => Breadcrumb_page, ($$anchor, Breadcrumb_Page) => {
														Breadcrumb_Page($$anchor, {
															children: ($$anchor, $$slotProps) => {
																next();
																var text_1 = text();
																template_effect(() => set_text(text_1, get$2(bc).label));
																append($$anchor, text_1);
															},
															$$slots: { default: true }
														});
													});
													append($$anchor, fragment_7);
												};
												var alternate = ($$anchor) => {
													var fragment_9 = comment();
													component(first_child(fragment_9), () => Breadcrumb_link, ($$anchor, Breadcrumb_Link_1) => {
														Breadcrumb_Link_1($$anchor, {
															get href() {
																return get$2(bc).route;
															},
															children: ($$anchor, $$slotProps) => {
																next();
																var text_2 = text();
																template_effect(() => set_text(text_2, get$2(bc).label));
																append($$anchor, text_2);
															},
															$$slots: { default: true }
														});
													});
													append($$anchor, fragment_9);
												};
												if_block(node_8, ($$render) => {
													if (get$2(bc).isLast) $$render(consequent);
													else $$render(alternate, -1);
												});
												append($$anchor, fragment_6);
											},
											$$slots: { default: true }
										});
									});
									append($$anchor, fragment_5);
								});
								append($$anchor, fragment_3);
							},
							$$slots: { default: true }
						});
					});
					append($$anchor, fragment_2);
				},
				$$slots: { default: true }
			});
		});
		append($$anchor, fragment_1);
	};
	if_block(node, ($$render) => {
		if (get$2(activeBreadcrumbs).length > 0) $$render(consequent_1);
	});
	append($$anchor, fragment);
	pop();
	$$cleanup();
}
//#endregion
//#region src/lib/components/ui/dropdown-menu/dropdown-menu.svelte
var rest_excludes$13 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"open"
]);
function Dropdown_menu($$anchor, $$props) {
	push($$props, true);
	let open = prop($$props, "open", 15, false), restProps = rest_props($$props, rest_excludes$13);
	var fragment = comment();
	component(first_child(fragment), () => Menu, ($$anchor, DropdownMenuPrimitive_Root) => {
		DropdownMenuPrimitive_Root($$anchor, spread_props(() => restProps, {
			get open() {
				return open();
			},
			set open($$value) {
				open($$value);
			}
		}));
	});
	append($$anchor, fragment);
	pop();
}
//#endregion
//#region src/lib/components/ui/dropdown-menu/dropdown-menu-portal.svelte
var rest_excludes$12 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy"
]);
function Dropdown_menu_portal($$anchor, $$props) {
	let restProps = rest_props($$props, rest_excludes$12);
	var fragment = comment();
	component(first_child(fragment), () => Portal, ($$anchor, DropdownMenuPrimitive_Portal) => {
		DropdownMenuPrimitive_Portal($$anchor, spread_props(() => restProps));
	});
	append($$anchor, fragment);
}
//#endregion
//#region src/lib/components/ui/dropdown-menu/dropdown-menu-content.svelte
var rest_excludes$11 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref",
	"sideOffset",
	"align",
	"portalProps",
	"class"
]);
function Dropdown_menu_content($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), sideOffset = prop($$props, "sideOffset", 3, 4), align = prop($$props, "align", 3, "start"), restProps = rest_props($$props, rest_excludes$11);
	Dropdown_menu_portal($$anchor, spread_props(() => $$props.portalProps, {
		children: ($$anchor, $$slotProps) => {
			var fragment_1 = comment();
			var node = first_child(fragment_1);
			{
				let $0 = user_derived(() => cn("data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 bg-popover text-popover-foreground min-w-32 rounded-lg p-1 shadow-md ring-1 duration-100 data-[side=inline-start]:slide-in-from-right-2 data-[side=inline-end]:slide-in-from-left-2 z-50 w-(--bits-dropdown-menu-anchor-width) overflow-x-hidden overflow-y-auto outline-none data-closed:overflow-hidden", $$props.class));
				component(node, () => Dropdown_menu_content$1, ($$anchor, DropdownMenuPrimitive_Content) => {
					DropdownMenuPrimitive_Content($$anchor, spread_props({
						"data-slot": "dropdown-menu-content",
						get sideOffset() {
							return sideOffset();
						},
						get align() {
							return align();
						},
						get class() {
							return get$2($0);
						}
					}, () => restProps, {
						get ref() {
							return ref();
						},
						set ref($$value) {
							ref($$value);
						}
					}));
				});
			}
			append($$anchor, fragment_1);
		},
		$$slots: { default: true }
	}));
	pop();
}
//#endregion
//#region src/lib/components/ui/dropdown-menu/dropdown-menu-item.svelte
var rest_excludes$10 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref",
	"class",
	"inset",
	"variant"
]);
function Dropdown_menu_item($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), variant = prop($$props, "variant", 3, "default"), restProps = rest_props($$props, rest_excludes$10);
	var fragment = comment();
	var node = first_child(fragment);
	{
		let $0 = user_derived(() => cn("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:text-destructive not-data-[variant=destructive]:focus:**:text-accent-foreground gap-1.5 rounded-md px-1.5 py-1 text-sm data-inset:pl-7 [&_svg:not([class*='size-'])]:size-4 group/dropdown-menu-item relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0", $$props.class));
		component(node, () => Menu_item, ($$anchor, DropdownMenuPrimitive_Item) => {
			DropdownMenuPrimitive_Item($$anchor, spread_props({
				"data-slot": "dropdown-menu-item",
				get "data-inset"() {
					return $$props.inset;
				},
				get "data-variant"() {
					return variant();
				},
				get class() {
					return get$2($0);
				}
			}, () => restProps, {
				get ref() {
					return ref();
				},
				set ref($$value) {
					ref($$value);
				}
			}));
		});
	}
	append($$anchor, fragment);
	pop();
}
//#endregion
//#region src/lib/components/ui/dropdown-menu/dropdown-menu-label.svelte
var rest_excludes$9 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref",
	"class",
	"inset",
	"children"
]);
var root$6 = from_html(`<div><!></div>`);
function Dropdown_menu_label($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), restProps = rest_props($$props, rest_excludes$9);
	var div = root$6();
	attribute_effect(div, ($0) => ({
		"data-slot": "dropdown-menu-label",
		"data-inset": $$props.inset,
		class: $0,
		...restProps
	}), [() => cn("text-muted-foreground px-1.5 py-1 text-xs font-medium data-inset:pl-7 data-[inset]:pl-8", $$props.class)]);
	snippet(child(div), () => $$props.children ?? noop$1);
	reset(div);
	bind_this(div, ($$value) => ref($$value), () => ref());
	append($$anchor, div);
	pop();
}
//#endregion
//#region src/lib/components/ui/dropdown-menu/dropdown-menu-separator.svelte
var rest_excludes$8 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref",
	"class"
]);
function Dropdown_menu_separator($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), restProps = rest_props($$props, rest_excludes$8);
	var fragment = comment();
	var node = first_child(fragment);
	{
		let $0 = user_derived(() => cn("bg-border -mx-1 my-1 h-px", $$props.class));
		component(node, () => Menu_separator, ($$anchor, DropdownMenuPrimitive_Separator) => {
			DropdownMenuPrimitive_Separator($$anchor, spread_props({
				"data-slot": "dropdown-menu-separator",
				get class() {
					return get$2($0);
				}
			}, () => restProps, {
				get ref() {
					return ref();
				},
				set ref($$value) {
					ref($$value);
				}
			}));
		});
	}
	append($$anchor, fragment);
	pop();
}
//#endregion
//#region src/lib/components/ui/dropdown-menu/dropdown-menu-trigger.svelte
var rest_excludes$7 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref"
]);
function Dropdown_menu_trigger($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), restProps = rest_props($$props, rest_excludes$7);
	var fragment = comment();
	component(first_child(fragment), () => Menu_trigger, ($$anchor, DropdownMenuPrimitive_Trigger) => {
		DropdownMenuPrimitive_Trigger($$anchor, spread_props({ "data-slot": "dropdown-menu-trigger" }, () => restProps, {
			get ref() {
				return ref();
			},
			set ref($$value) {
				ref($$value);
			}
		}));
	});
	append($$anchor, fragment);
	pop();
}
//#endregion
//#region src/lib/layout/Header.svelte
var root$5 = from_html(`<div class="relative"><!> <span class="absolute -top-0.5 -right-0.5 h-4 min-w-4 px-0.5 flex items-center justify-center rounded-full text-[9px] font-bold bg-amber-500 text-white pointer-events-none"> </span></div>`);
var root_1$2 = from_html(`<img class="h-8 w-8 rounded-full object-cover shrink-0 border border-primary/10" alt="Profile Avatar"/>`);
var root_2$1 = from_html(`<div class="h-8 w-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0 border border-primary/10"> </div>`);
var root_3$1 = from_html(`<button class="flex items-center gap-2 outline-none hover:opacity-80 transition-opacity focus-visible:ring-2 focus-visible:ring-primary/20 rounded-lg p-1 cursor-pointer" aria-label="User profile menu"><div class="hidden sm:flex flex-col text-right"><span class="text-xs font-semibold leading-none"> </span> <span class="text-[9px] text-muted-foreground mt-0.5 capitalize"> </span></div> <!></button>`);
var root_4$1 = from_html(`<div class="flex flex-col space-y-1"><p class="text-sm font-medium leading-none"> </p> <p class="text-xs leading-none text-muted-foreground"> </p></div>`);
var root_5$1 = from_html(`<!> <span>Profile Settings</span>`, 1);
var root_6$1 = from_html(`<!> <span>Sign Out</span>`, 1);
var root_7 = from_html(`<!> <!> <!> <!> <!>`, 1);
var root_8 = from_html(`<!> <!>`, 1);
var root_9 = from_html(`<header class="flex items-center justify-between px-6 border-b border-border bg-card sticky top-0 z-40 select-none" style="padding-top: env(safe-area-inset-top, 0px); height: calc(4rem + env(safe-area-inset-top, 0px));"><div class="flex items-center gap-4"><a href="/dashboard" class="flex items-center gap-2 lg:hidden group shrink-0"><div class="h-8 bg-white flex items-center justify-center rounded-lg shadow-sm border border-border overflow-hidden p-0.5 px-1 shrink-0"><img src="https://admin.texastravelsbh.com/assets/images/texas-logo.png" class="h-6 w-auto object-contain" alt="Texas Travels"/></div> <div class="flex flex-col"><span class="font-bold text-xs leading-none text-foreground group-hover:text-primary transition-colors">Texas Travels</span> <span class="text-[9px] uppercase tracking-wider font-semibold text-primary leading-none mt-0.5">Accounts</span></div></a> <div class="hidden lg:block"><!></div></div> <div class="flex items-center gap-3 font-sans"><!> <!> <div class="h-6 w-[1px] bg-border"></div> <!></div></header>`);
function Header($$anchor, $$props) {
	push($$props, true);
	const $currentUser = () => store_get(currentUser, "$currentUser", $$stores);
	const [$$stores, $$cleanup] = setup_stores();
	let isDark = state(false);
	let totalPending = state(0);
	onMount(() => {
		set(isDark, document.documentElement.classList.contains("dark"), true);
		if (hasRole("master_accountant")) apiFetch("api/pending-approvals?status=pending").then((res) => {
			set(totalPending, Array.isArray(res) ? res.length : 0, true);
		}).catch(() => {});
	});
	function toggleTheme() {
		set(isDark, !get$2(isDark));
		if (get$2(isDark)) {
			document.documentElement.classList.add("dark");
			if (typeof window !== "undefined") localStorage.setItem("theme", "dark");
		} else {
			document.documentElement.classList.remove("dark");
			if (typeof window !== "undefined") localStorage.setItem("theme", "light");
		}
	}
	const userInitials = user_derived(() => () => {
		return ($currentUser()?.name ?? "").split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase() || "AC";
	});
	async function handleLogout() {
		await logout();
		goto("/login");
	}
	var header = root_9();
	var div = child(header);
	var div_1 = sibling(child(div), 2);
	Breadcrumbs(child(div_1), {});
	reset(div_1);
	reset(div);
	var div_2 = sibling(div, 2);
	var node_1 = child(div_2);
	var consequent = ($$anchor) => {
		var div_3 = root$5();
		var node_2 = child(div_3);
		{
			let $0 = user_derived(() => get$2(totalPending));
			let $1 = user_derived(() => get$2(totalPending) === 1 ? "" : "s");
			Button(node_2, {
				variant: "ghost",
				size: "icon",
				class: "text-amber-500 cursor-pointer hover:bg-amber-50",
				onclick: () => goto("/pending-approvals"),
				"aria-label": "Pending approvals",
				get title() {
					return `${get$2($0) ?? ""} pending approval${get$2($1) ?? ""}`;
				},
				children: ($$anchor, $$slotProps) => {
					Bell($$anchor, { class: "h-4.5 w-4.5" });
				},
				$$slots: { default: true }
			});
		}
		var span = sibling(node_2, 2);
		var text = child(span, true);
		reset(span);
		reset(div_3);
		template_effect(() => set_text(text, get$2(totalPending)));
		append($$anchor, div_3);
	};
	var d = user_derived(() => hasRole("master_accountant") && get$2(totalPending) > 0);
	if_block(node_1, ($$render) => {
		if (get$2(d)) $$render(consequent);
	});
	var node_3 = sibling(node_1, 2);
	Button(node_3, {
		variant: "ghost",
		size: "icon",
		class: "text-muted-foreground cursor-pointer",
		onclick: toggleTheme,
		"aria-label": "Toggle theme mode",
		children: ($$anchor, $$slotProps) => {
			var fragment_1 = comment();
			var node_4 = first_child(fragment_1);
			var consequent_1 = ($$anchor) => {
				Sun($$anchor, { class: "h-4.5 w-4.5" });
			};
			var alternate = ($$anchor) => {
				Moon($$anchor, { class: "h-4.5 w-4.5" });
			};
			if_block(node_4, ($$render) => {
				if (get$2(isDark)) $$render(consequent_1);
				else $$render(alternate, -1);
			});
			append($$anchor, fragment_1);
		},
		$$slots: { default: true }
	});
	component(sibling(node_3, 4), () => Dropdown_menu, ($$anchor, DropdownMenu_Root) => {
		DropdownMenu_Root($$anchor, {
			children: ($$anchor, $$slotProps) => {
				var fragment_4 = root_8();
				var node_6 = first_child(fragment_4);
				component(node_6, () => Dropdown_menu_trigger, ($$anchor, DropdownMenu_Trigger) => {
					DropdownMenu_Trigger($$anchor, {
						children: ($$anchor, $$slotProps) => {
							var button = root_3$1();
							var div_4 = child(button);
							var span_1 = child(div_4);
							var text_1 = child(span_1, true);
							reset(span_1);
							var span_2 = sibling(span_1, 2);
							var text_2 = child(span_2, true);
							reset(span_2);
							reset(div_4);
							var node_7 = sibling(div_4, 2);
							var consequent_2 = ($$anchor) => {
								var img = root_1$2();
								template_effect(() => set_attribute(img, "src", $currentUser().profilePicture));
								append($$anchor, img);
							};
							var alternate_1 = ($$anchor) => {
								var div_5 = root_2$1();
								var text_3 = child(div_5, true);
								reset(div_5);
								template_effect(($0) => set_text(text_3, $0), [() => get$2(userInitials)()]);
								append($$anchor, div_5);
							};
							if_block(node_7, ($$render) => {
								if ($currentUser()?.profilePicture) $$render(consequent_2);
								else $$render(alternate_1, -1);
							});
							reset(button);
							template_effect(($0) => {
								set_text(text_1, $currentUser()?.name);
								set_text(text_2, $0);
							}, [() => ($currentUser()?.userType || "").replace(/_/g, " ")]);
							append($$anchor, button);
						},
						$$slots: { default: true }
					});
				});
				component(sibling(node_6, 2), () => Dropdown_menu_content, ($$anchor, DropdownMenu_Content) => {
					DropdownMenu_Content($$anchor, {
						align: "end",
						class: "w-56 mt-2",
						children: ($$anchor, $$slotProps) => {
							var fragment_5 = root_7();
							var node_9 = first_child(fragment_5);
							component(node_9, () => Dropdown_menu_label, ($$anchor, DropdownMenu_Label) => {
								DropdownMenu_Label($$anchor, {
									class: "font-normal",
									children: ($$anchor, $$slotProps) => {
										var div_6 = root_4$1();
										var p = child(div_6);
										var text_4 = child(p, true);
										reset(p);
										var p_1 = sibling(p, 2);
										var text_5 = child(p_1, true);
										reset(p_1);
										reset(div_6);
										template_effect(() => {
											set_text(text_4, $currentUser()?.name);
											set_text(text_5, $currentUser()?.email);
										});
										append($$anchor, div_6);
									},
									$$slots: { default: true }
								});
							});
							var node_10 = sibling(node_9, 2);
							component(node_10, () => Dropdown_menu_separator, ($$anchor, DropdownMenu_Separator) => {
								DropdownMenu_Separator($$anchor, {});
							});
							var node_11 = sibling(node_10, 2);
							component(node_11, () => Dropdown_menu_item, ($$anchor, DropdownMenu_Item) => {
								DropdownMenu_Item($$anchor, {
									onclick: () => goto("/profile"),
									class: "cursor-pointer text-xs font-medium",
									children: ($$anchor, $$slotProps) => {
										var fragment_6 = root_5$1();
										User(first_child(fragment_6), { class: "mr-2 h-4 w-4" });
										next(2);
										append($$anchor, fragment_6);
									},
									$$slots: { default: true }
								});
							});
							var node_13 = sibling(node_11, 2);
							component(node_13, () => Dropdown_menu_separator, ($$anchor, DropdownMenu_Separator_1) => {
								DropdownMenu_Separator_1($$anchor, {});
							});
							component(sibling(node_13, 2), () => Dropdown_menu_item, ($$anchor, DropdownMenu_Item_1) => {
								DropdownMenu_Item_1($$anchor, {
									onclick: handleLogout,
									class: "text-destructive focus:text-destructive cursor-pointer text-xs font-medium",
									children: ($$anchor, $$slotProps) => {
										var fragment_7 = root_6$1();
										Log_out(first_child(fragment_7), { class: "mr-2 h-4 w-4" });
										next(2);
										append($$anchor, fragment_7);
									},
									$$slots: { default: true }
								});
							});
							append($$anchor, fragment_5);
						},
						$$slots: { default: true }
					});
				});
				append($$anchor, fragment_4);
			},
			$$slots: { default: true }
		});
	});
	reset(div_2);
	reset(header);
	append($$anchor, header);
	pop();
	$$cleanup();
}
//#endregion
//#region src/lib/components/ui/sheet/sheet.svelte
var rest_excludes$6 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"open"
]);
function Sheet($$anchor, $$props) {
	push($$props, true);
	let open = prop($$props, "open", 15, false), restProps = rest_props($$props, rest_excludes$6);
	var fragment = comment();
	component(first_child(fragment), () => Dialog, ($$anchor, SheetPrimitive_Root) => {
		SheetPrimitive_Root($$anchor, spread_props(() => restProps, {
			get open() {
				return open();
			},
			set open($$value) {
				open($$value);
			}
		}));
	});
	append($$anchor, fragment);
	pop();
}
//#endregion
//#region src/lib/components/ui/sheet/sheet-portal.svelte
var rest_excludes$5 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy"
]);
function Sheet_portal($$anchor, $$props) {
	let restProps = rest_props($$props, rest_excludes$5);
	var fragment = comment();
	component(first_child(fragment), () => Portal, ($$anchor, SheetPrimitive_Portal) => {
		SheetPrimitive_Portal($$anchor, spread_props(() => restProps));
	});
	append($$anchor, fragment);
}
//#endregion
//#region src/lib/components/ui/sheet/sheet-overlay.svelte
var rest_excludes$4 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref",
	"class"
]);
function Sheet_overlay($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), restProps = rest_props($$props, rest_excludes$4);
	var fragment = comment();
	var node = first_child(fragment);
	{
		let $0 = user_derived(() => cn("bg-black/10 supports-backdrop-filter:backdrop-blur-xs fixed inset-0 z-50", $$props.class));
		component(node, () => Dialog_overlay, ($$anchor, SheetPrimitive_Overlay) => {
			SheetPrimitive_Overlay($$anchor, spread_props({
				"data-slot": "sheet-overlay",
				get class() {
					return get$2($0);
				}
			}, () => restProps, {
				get ref() {
					return ref();
				},
				set ref($$value) {
					ref($$value);
				}
			}));
		});
	}
	append($$anchor, fragment);
	pop();
}
//#endregion
//#region node_modules/@lucide/svelte/dist/icons/x.svelte
var rest_excludes$3 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy"
]);
function X($$anchor, $$props) {
	let props = rest_props($$props, rest_excludes$3);
	const iconNode = [["path", { "d": "M18 6 6 18" }], ["path", { "d": "m6 6 12 12" }]];
	Icon($$anchor, spread_props({ name: "x" }, () => props, { get iconNode() {
		return iconNode;
	} }));
}
//#endregion
//#region src/lib/components/ui/sheet/sheet-content.svelte
var rest_excludes$2 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref",
	"class",
	"side",
	"showCloseButton",
	"portalProps",
	"children"
]);
var root$4 = from_html(`<!> <span class="sr-only">Close</span>`, 1);
var root_1$1 = from_html(`<!> <!>`, 1);
function Sheet_content($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), side = prop($$props, "side", 3, "right"), showCloseButton = prop($$props, "showCloseButton", 3, true), restProps = rest_props($$props, rest_excludes$2);
	Sheet_portal($$anchor, spread_props(() => $$props.portalProps, {
		children: ($$anchor, $$slotProps) => {
			var fragment_1 = root_1$1();
			var node = first_child(fragment_1);
			Sheet_overlay(node, {});
			var node_1 = sibling(node, 2);
			{
				let $0 = user_derived(() => cn("bg-popover text-popover-foreground fixed z-50 flex flex-col gap-4 bg-clip-padding text-sm shadow-lg transition duration-200 ease-in-out data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:h-auto data-[side=bottom]:border-t data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-full data-[side=left]:w-3/4 data-[side=left]:border-r data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-full data-[side=right]:w-3/4 data-[side=right]:border-l data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:h-auto data-[side=top]:border-b data-[side=left]:sm:max-w-sm data-[side=right]:sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-[side=bottom]:data-open:slide-in-from-bottom-10 data-[side=left]:data-open:slide-in-from-left-10 data-[side=right]:data-open:slide-in-from-right-10 data-[side=top]:data-open:slide-in-from-top-10 data-closed:animate-out data-closed:fade-out-0 data-[side=bottom]:data-closed:slide-out-to-bottom-10 data-[side=left]:data-closed:slide-out-to-left-10 data-[side=right]:data-closed:slide-out-to-right-10 data-[side=top]:data-closed:slide-out-to-top-10", $$props.class));
				component(node_1, () => Dialog_content, ($$anchor, SheetPrimitive_Content) => {
					SheetPrimitive_Content($$anchor, spread_props({
						"data-slot": "sheet-content",
						get "data-side"() {
							return side();
						},
						get class() {
							return get$2($0);
						}
					}, () => restProps, {
						get ref() {
							return ref();
						},
						set ref($$value) {
							ref($$value);
						},
						children: ($$anchor, $$slotProps) => {
							var fragment_2 = root_1$1();
							var node_2 = first_child(fragment_2);
							snippet(node_2, () => $$props.children ?? noop$1);
							var node_3 = sibling(node_2, 2);
							var consequent = ($$anchor) => {
								var fragment_3 = comment();
								var node_4 = first_child(fragment_3);
								{
									const child = ($$anchor, $$arg0) => {
										let props = () => ($$arg0?.()).props;
										Button($$anchor, spread_props({
											variant: "ghost",
											class: "absolute top-3 right-3",
											size: "icon-sm"
										}, props, {
											children: ($$anchor, $$slotProps) => {
												var fragment_5 = root$4();
												X(first_child(fragment_5), {});
												next(2);
												append($$anchor, fragment_5);
											},
											$$slots: { default: true }
										}));
									};
									component(node_4, () => Dialog_close, ($$anchor, SheetPrimitive_Close) => {
										SheetPrimitive_Close($$anchor, {
											"data-slot": "sheet-close",
											child,
											$$slots: { child: true }
										});
									});
								}
								append($$anchor, fragment_3);
							};
							if_block(node_3, ($$render) => {
								if (showCloseButton()) $$render(consequent);
							});
							append($$anchor, fragment_2);
						},
						$$slots: { default: true }
					}));
				});
			}
			append($$anchor, fragment_1);
		},
		$$slots: { default: true }
	}));
	pop();
}
//#endregion
//#region src/lib/components/ui/sheet/sheet-header.svelte
var rest_excludes$1 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref",
	"class",
	"children"
]);
var root$3 = from_html(`<div><!></div>`);
function Sheet_header($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), restProps = rest_props($$props, rest_excludes$1);
	var div = root$3();
	attribute_effect(div, ($0) => ({
		"data-slot": "sheet-header",
		class: $0,
		...restProps
	}), [() => cn("gap-0.5 p-4 flex flex-col", $$props.class)]);
	snippet(child(div), () => $$props.children ?? noop$1);
	reset(div);
	bind_this(div, ($$value) => ref($$value), () => ref());
	append($$anchor, div);
	pop();
}
//#endregion
//#region src/lib/components/ui/sheet/sheet-title.svelte
var rest_excludes = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref",
	"class"
]);
function Sheet_title($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), restProps = rest_props($$props, rest_excludes);
	var fragment = comment();
	var node = first_child(fragment);
	{
		let $0 = user_derived(() => cn("text-foreground text-base font-medium", $$props.class));
		component(node, () => Dialog_title, ($$anchor, SheetPrimitive_Title) => {
			SheetPrimitive_Title($$anchor, spread_props({
				"data-slot": "sheet-title",
				get class() {
					return get$2($0);
				}
			}, () => restProps, {
				get ref() {
					return ref();
				},
				set ref($$value) {
					ref($$value);
				}
			}));
		});
	}
	append($$anchor, fragment);
	pop();
}
//#endregion
//#region src/lib/layout/MoreDrawer.svelte
var root$2 = from_html(`<!> <p class="text-[11px] text-muted-foreground">Access all sales modules, accounts, ledgers, and settings</p>`, 1);
var root_1 = from_html(`<a><div class="h-1.5 w-1.5 rounded-full bg-current opacity-70"></div> <span class="truncate"> </span></a>`);
var root_2 = from_html(`<div class="p-2 pt-0 grid grid-cols-1 sm:grid-cols-2 gap-1.5 border-t border-border/40 bg-card/50"></div>`);
var root_3 = from_html(`<div class="rounded-2xl border border-border/60 bg-muted/10 overflow-hidden"><div><a class="flex items-center gap-2.5 flex-1 min-w-0"><div class="p-1.5 rounded-xl border border-border/50 bg-background text-primary shrink-0"><!></div> <span class="truncate"> </span></a> <button type="button" class="p-1 rounded-lg hover:bg-muted/50 text-muted-foreground hover:text-foreground cursor-pointer" aria-label="Toggle Submenu"><!></button></div> <!></div>`);
var root_4 = from_html(`<a><div class="p-2 rounded-xl border border-border/50 bg-background text-primary shrink-0"><!></div> <span class="truncate"> </span></a>`);
var root_5 = from_html(`<!> <span>Sign Out</span>`, 1);
var root_6 = from_html(`<div class="mx-auto my-2 h-1.5 w-12 rounded-full bg-muted-foreground/20"></div> <!> <div class="flex items-center gap-3 p-3 my-3 rounded-2xl bg-muted/40 border border-border/50"><div class="h-10 w-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-sm shrink-0 border border-primary/10"> </div> <div class="flex-1 min-w-0"><div class="text-xs font-bold text-foreground truncate"> </div> <div class="text-[11px] text-muted-foreground truncate capitalize"> </div></div></div> <div class="space-y-3 py-1"></div> <div class="mt-4 pt-3 border-t border-border"><!></div>`, 1);
function MoreDrawer($$anchor, $$props) {
	push($$props, true);
	const $filteredNavigation = () => store_get(filteredNavigation, "$filteredNavigation", $$stores);
	const $currentUser = () => store_get(currentUser, "$currentUser", $$stores);
	const $page = () => store_get(page, "$page", $$stores);
	const [$$stores, $$cleanup] = setup_stores();
	let open = prop($$props, "open", 15, false);
	const secondaryItems = user_derived(() => () => {
		const excludeRoutes = [
			"/dashboard",
			"/transactions",
			"/suppliers"
		];
		return $filteredNavigation().filter((item) => !excludeRoutes.includes(item.route));
	});
	const activeSecondaryItems = user_derived(() => get$2(secondaryItems)());
	let expandedMenus = proxy({ "/sales": true });
	function toggleMenu(route, e) {
		e.stopPropagation();
		e.preventDefault();
		expandedMenus[route] = !expandedMenus[route];
	}
	function closeDrawer() {
		open(false);
	}
	async function handleLogout() {
		closeDrawer();
		await logout();
		goto("/login");
	}
	const userInitials = user_derived(() => () => {
		return ($currentUser()?.name ?? "").split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase() || "AC";
	});
	function isRouteActive(currentPath, targetPath) {
		return currentPath === targetPath || targetPath !== "/" && currentPath.startsWith(targetPath + "/");
	}
	var fragment = comment();
	component(first_child(fragment), () => Sheet, ($$anchor, Sheet_Root) => {
		Sheet_Root($$anchor, {
			get open() {
				return open();
			},
			set open($$value) {
				open($$value);
			},
			children: ($$anchor, $$slotProps) => {
				var fragment_1 = comment();
				component(first_child(fragment_1), () => Sheet_content, ($$anchor, Sheet_Content) => {
					Sheet_Content($$anchor, {
						side: "bottom",
						class: "rounded-t-3xl border-t border-border bg-card px-5 pb-6 pt-2 max-h-[88vh] overflow-y-auto",
						children: ($$anchor, $$slotProps) => {
							var fragment_2 = root_6();
							var node_2 = sibling(first_child(fragment_2), 2);
							component(node_2, () => Sheet_header, ($$anchor, Sheet_Header) => {
								Sheet_Header($$anchor, {
									class: "text-left pb-3 border-b border-border",
									children: ($$anchor, $$slotProps) => {
										var fragment_3 = root$2();
										component(first_child(fragment_3), () => Sheet_title, ($$anchor, Sheet_Title) => {
											Sheet_Title($$anchor, {
												class: "text-base font-bold text-foreground",
												children: ($$anchor, $$slotProps) => {
													next();
													append($$anchor, text("Navigation Menu"));
												},
												$$slots: { default: true }
											});
										});
										next(2);
										append($$anchor, fragment_3);
									},
									$$slots: { default: true }
								});
							});
							var div = sibling(node_2, 2);
							var div_1 = child(div);
							var text_1 = child(div_1, true);
							reset(div_1);
							var div_2 = sibling(div_1, 2);
							var div_3 = child(div_2);
							var text_2 = child(div_3, true);
							reset(div_3);
							var div_4 = sibling(div_3, 2);
							var text_3 = child(div_4, true);
							reset(div_4);
							reset(div_2);
							reset(div);
							var div_5 = sibling(div, 2);
							each(div_5, 21, () => get$2(activeSecondaryItems), (item) => item.route, ($$anchor, item) => {
								var fragment_4 = comment();
								var node_4 = first_child(fragment_4);
								var consequent_2 = ($$anchor) => {
									var div_6 = root_3();
									var div_7 = child(div_6);
									var a = child(div_7);
									var div_8 = child(a);
									component(child(div_8), () => get$2(item).icon, ($$anchor, item_icon) => {
										item_icon($$anchor, { class: "h-4 w-4 shrink-0" });
									});
									reset(div_8);
									var span = sibling(div_8, 2);
									var text_4 = child(span, true);
									reset(span);
									reset(a);
									var button = sibling(a, 2);
									var node_6 = child(button);
									var consequent = ($$anchor) => {
										Chevron_down($$anchor, { class: "h-4 w-4" });
									};
									var alternate = ($$anchor) => {
										Chevron_right$1($$anchor, { class: "h-4 w-4" });
									};
									if_block(node_6, ($$render) => {
										if (expandedMenus[get$2(item).route]) $$render(consequent);
										else $$render(alternate, -1);
									});
									reset(button);
									reset(div_7);
									var node_7 = sibling(div_7, 2);
									var consequent_1 = ($$anchor) => {
										var div_9 = root_2();
										each(div_9, 21, () => get$2(item).children, (child) => child.route, ($$anchor, child$1) => {
											var a_1 = root_1();
											var span_1 = sibling(child(a_1), 2);
											var text_5 = child(span_1, true);
											reset(span_1);
											reset(a_1);
											template_effect(($0) => {
												set_attribute(a_1, "href", get$2(child$1).route);
												set_class(a_1, 1, $0);
												set_text(text_5, get$2(child$1).label);
											}, [() => clsx$1(cn("flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold transition-colors touch-manipulation", $page().url.pathname === get$2(child$1).route ? "bg-primary text-primary-foreground font-bold shadow-xs" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"))]);
											delegated("click", a_1, closeDrawer);
											append($$anchor, a_1);
										});
										reset(div_9);
										append($$anchor, div_9);
									};
									if_block(node_7, ($$render) => {
										if (expandedMenus[get$2(item).route]) $$render(consequent_1);
									});
									reset(div_6);
									template_effect(($0) => {
										set_class(div_7, 1, $0);
										set_attribute(a, "href", get$2(item).children[0]?.route || get$2(item).route);
										set_text(text_4, get$2(item).label);
									}, [() => clsx$1(cn("flex items-center justify-between p-3 text-xs font-bold transition-all", isRouteActive($page().url.pathname, get$2(item).route) ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted/30"))]);
									delegated("click", a, closeDrawer);
									delegated("click", button, (e) => toggleMenu(get$2(item).route, e));
									append($$anchor, div_6);
								};
								var alternate_1 = ($$anchor) => {
									var a_2 = root_4();
									var div_10 = child(a_2);
									component(child(div_10), () => get$2(item).icon, ($$anchor, item_icon_1) => {
										item_icon_1($$anchor, { class: "h-4 w-4 shrink-0" });
									});
									reset(div_10);
									var span_2 = sibling(div_10, 2);
									var text_6 = child(span_2, true);
									reset(span_2);
									reset(a_2);
									template_effect(($0) => {
										set_attribute(a_2, "href", get$2(item).route);
										set_class(a_2, 1, $0);
										set_text(text_6, get$2(item).label);
									}, [() => clsx$1(cn("flex items-center gap-3 p-3 rounded-2xl text-xs font-bold transition-all border touch-manipulation", isRouteActive($page().url.pathname, get$2(item).route) ? "bg-primary/10 text-primary border-primary/20" : "text-foreground hover:bg-muted/40 border-border bg-card"))]);
									delegated("click", a_2, closeDrawer);
									append($$anchor, a_2);
								};
								if_block(node_4, ($$render) => {
									if (get$2(item).children && get$2(item).children.length > 0) $$render(consequent_2);
									else $$render(alternate_1, -1);
								});
								append($$anchor, fragment_4);
							});
							reset(div_5);
							var div_11 = sibling(div_5, 2);
							Button(child(div_11), {
								onclick: handleLogout,
								variant: "destructive",
								class: "w-full flex items-center justify-center gap-2 py-5 rounded-2xl font-bold touch-manipulation active:scale-[0.98] cursor-pointer text-xs",
								children: ($$anchor, $$slotProps) => {
									var fragment_7 = root_5();
									Log_out(first_child(fragment_7), { class: "h-4 w-4" });
									next(2);
									append($$anchor, fragment_7);
								},
								$$slots: { default: true }
							});
							reset(div_11);
							template_effect(($0, $1) => {
								set_text(text_1, $0);
								set_text(text_2, $currentUser()?.name);
								set_text(text_3, $1);
							}, [() => get$2(userInitials)(), () => ($currentUser()?.userType || "").replace(/_/g, " ")]);
							append($$anchor, fragment_2);
						},
						$$slots: { default: true }
					});
				});
				append($$anchor, fragment_1);
			},
			$$slots: { default: true }
		});
	});
	append($$anchor, fragment);
	pop();
	$$cleanup();
}
delegate(["click"]);
//#endregion
//#region src/lib/layout/MobileBottomNav.svelte
var root$1 = from_html(`<div class="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-card/95 backdrop-blur-md lg:hidden shadow-lg select-none" style="padding-bottom: env(safe-area-inset-bottom);"><nav class="flex items-center justify-around h-16 w-full px-1" aria-label="Mobile Navigation"><a href="/dashboard" aria-label="Dashboard"><!> <span class="text-[10px] font-medium tracking-tight">Dashboard</span></a> <a href="/transactions" aria-label="Transactions"><!> <span class="text-[10px] font-medium tracking-tight">Transactions</span></a> <a href="/sales/dashboard" aria-label="Sales Entries"><!> <span class="text-[10px] font-medium tracking-tight">Sales</span></a> <a href="/suppliers" aria-label="Suppliers"><!> <span class="text-[10px] font-medium tracking-tight">Suppliers</span></a> <button type="button" aria-label="Open More Drawer"><!> <span class="text-[10px] font-medium tracking-tight">More</span></button></nav></div> <!>`, 1);
function MobileBottomNav($$anchor, $$props) {
	push($$props, true);
	const $page = () => store_get(page, "$page", $$stores);
	const $currentUser = () => store_get(currentUser, "$currentUser", $$stores);
	const [$$stores, $$cleanup] = setup_stores();
	let moreOpen = state(false);
	const isDashboardActive = user_derived(() => $page().url.pathname.startsWith("/dashboard"));
	const isTransactionsActive = user_derived(() => $page().url.pathname.startsWith("/transactions"));
	const isSalesActive = user_derived(() => $page().url.pathname.startsWith("/sales"));
	const isSuppliersActive = user_derived(() => $page().url.pathname.startsWith("/suppliers"));
	const isMoreActive = user_derived(() => $page().url.pathname.startsWith("/agents") || $page().url.pathname.startsWith("/accounts") || $page().url.pathname.startsWith("/banks") || $page().url.pathname.startsWith("/payments") || $page().url.pathname.startsWith("/accounting") || $page().url.pathname.startsWith("/pending-approvals") || $page().url.pathname.startsWith("/reports") || $page().url.pathname.startsWith("/users"));
	function openMore() {
		set(moreOpen, true);
	}
	var fragment = comment();
	var node = first_child(fragment);
	var consequent = ($$anchor) => {
		var fragment_1 = root$1();
		var div = first_child(fragment_1);
		var nav = child(div);
		var a = child(nav);
		Layout_dashboard(child(a), { class: "h-5 w-5 shrink-0" });
		next(2);
		reset(a);
		var a_1 = sibling(a, 2);
		Receipt(child(a_1), { class: "h-5 w-5 shrink-0" });
		next(2);
		reset(a_1);
		var a_2 = sibling(a_1, 2);
		Shopping_bag(child(a_2), { class: "h-5 w-5 shrink-0" });
		next(2);
		reset(a_2);
		var a_3 = sibling(a_2, 2);
		Users(child(a_3), { class: "h-5 w-5 shrink-0" });
		next(2);
		reset(a_3);
		var button = sibling(a_3, 2);
		Ellipsis(child(button), { class: "h-5 w-5 shrink-0" });
		next(2);
		reset(button);
		reset(nav);
		reset(div);
		MoreDrawer(sibling(div, 2), {
			get open() {
				return get$2(moreOpen);
			},
			set open($$value) {
				set(moreOpen, $$value, true);
			}
		});
		template_effect(($0, $1, $2, $3, $4) => {
			set_class(a, 1, $0);
			set_class(a_1, 1, $1);
			set_class(a_2, 1, $2);
			set_class(a_3, 1, $3);
			set_class(button, 1, $4);
		}, [
			() => clsx$1(cn("flex flex-col items-center justify-center flex-1 h-full gap-1 transition-all duration-200 text-center touch-manipulation", get$2(isDashboardActive) ? "text-primary font-bold" : "text-muted-foreground hover:text-foreground")),
			() => clsx$1(cn("flex flex-col items-center justify-center flex-1 h-full gap-1 transition-all duration-200 text-center touch-manipulation", get$2(isTransactionsActive) ? "text-primary font-bold" : "text-muted-foreground hover:text-foreground")),
			() => clsx$1(cn("flex flex-col items-center justify-center flex-1 h-full gap-1 transition-all duration-200 text-center touch-manipulation", get$2(isSalesActive) ? "text-primary font-bold" : "text-muted-foreground hover:text-foreground")),
			() => clsx$1(cn("flex flex-col items-center justify-center flex-1 h-full gap-1 transition-all duration-200 text-center touch-manipulation", get$2(isSuppliersActive) ? "text-primary font-bold" : "text-muted-foreground hover:text-foreground")),
			() => clsx$1(cn("flex flex-col items-center justify-center flex-1 h-full gap-1 transition-all duration-200 text-center touch-manipulation bg-transparent border-0 cursor-pointer", get$2(isMoreActive) || get$2(moreOpen) ? "text-primary font-bold" : "text-muted-foreground hover:text-foreground"))
		]);
		delegated("click", button, openMore);
		append($$anchor, fragment_1);
	};
	if_block(node, ($$render) => {
		if ($currentUser()) $$render(consequent);
	});
	append($$anchor, fragment);
	pop();
	$$cleanup();
}
delegate(["click"]);
//#endregion
//#region src/routes/(app)/+layout.svelte
var root = from_html(`<div class="min-h-[100dvh] h-[100dvh] bg-background text-foreground antialiased flex flex-row overflow-hidden"><div class="hidden lg:block h-[100dvh] sticky top-0"><!></div> <div class="flex-1 flex flex-col min-w-0 h-[100dvh] overflow-hidden"><!> <main class="flex-1 overflow-y-auto px-6 pt-6 pb-24 lg:pb-6 bg-muted/10"><!></main></div></div> <!>`, 1);
function _layout($$anchor, $$props) {
	push($$props, true);
	const $isInitializing = () => store_get(isInitializing, "$isInitializing", $$stores);
	const $isAuthenticated = () => store_get(isAuthenticated, "$isAuthenticated", $$stores);
	const $page = () => store_get(page, "$page", $$stores);
	const [$$stores, $$cleanup] = setup_stores();
	user_effect(() => {
		if ($isInitializing()) return;
		if (!$isAuthenticated()) {
			if ($page().url.pathname !== "/login") {
				const returnTo = $page().url.pathname + $page().url.search;
				goto(`/login${returnTo !== "/" && returnTo !== "/dashboard" ? `?returnTo=${encodeURIComponent(returnTo)}` : ""}`);
			}
		} else signalRService.startConnection();
	});
	var fragment = comment();
	var node = first_child(fragment);
	var consequent = ($$anchor) => {
		var fragment_1 = root();
		var div = first_child(fragment_1);
		var div_1 = child(div);
		Sidebar(child(div_1), {});
		reset(div_1);
		var div_2 = sibling(div_1, 2);
		var node_2 = child(div_2);
		Header(node_2, {});
		var main = sibling(node_2, 2);
		snippet(child(main), () => $$props.children);
		reset(main);
		reset(div_2);
		reset(div);
		MobileBottomNav(sibling(div, 2), {});
		append($$anchor, fragment_1);
	};
	if_block(node, ($$render) => {
		if ($isAuthenticated()) $$render(consequent);
	});
	append($$anchor, fragment);
	pop();
	$$cleanup();
}
//#endregion
export { _layout as component };

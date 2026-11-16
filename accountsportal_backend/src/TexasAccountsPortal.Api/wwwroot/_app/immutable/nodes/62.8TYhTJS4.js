import { A as component, B as append, Bt as reset, Ct as user_derived, D as head, Et as store_get, H as from_html, I as if_block, J as event, K as delegate, M as slot, N as each, Nt as pop, P as index, Pt as push, Q as get, R as set_text, T as clsx, Tt as setup_stores, V as comment, a as legacy_rest_props, bt as state, c as spread_props, dt as $document, gt as proxy, ht as sibling, it as effect, mt as first_child, ot as template_effect, pt as child, q as delegated, r as onMount, vt as set, w as set_class, zt as next } from "../chunks/dXkmWTgM.js";
import { t as goto } from "../chunks/Cf7RqeDF.js";
import "../chunks/DhaYE-8x.js";
import { t as apiFetch } from "../chunks/C6B-p-b6.js";
import { i as hasRole } from "../chunks/Dp6XJvUM.js";
import "../chunks/DZfWAsjW.js";
import { r as toast } from "../chunks/CbPRQHfn.js";
import { t as Icon } from "../chunks/BalaELqB.js";
import { t as Arrow_left } from "../chunks/Bn7x0kyr.js";
import { t as Building } from "../chunks/CWa4p3GF.js";
import { n as Car, t as Plane } from "../chunks/DG-SfabB.js";
import { t as Check } from "../chunks/blG6JRe7.js";
import { t as Circle_alert } from "../chunks/CHXThoj_2.js";
import { t as Coins } from "../chunks/B2DQy1SS2.js";
import { t as Info } from "../chunks/BFhjKje02.js";
import { t as Landmark } from "../chunks/D_q7zQKx2.js";
import { t as Lock } from "../chunks/DLJP7XQX2.js";
import { t as Refresh_cw } from "../chunks/DpTJy0Wb.js";
import { t as Rotate_ccw } from "../chunks/CEB2WCBr.js";
import { t as Shield_check } from "../chunks/Ctn9-c3Y.js";
import { t as Undo_2 } from "../chunks/BJqtSvjG.js";
import { t as Wallet } from "../chunks/BahXSy4P.js";
import { t as page } from "../chunks/J-P6CQvr.js";
import { t as Button } from "../chunks/BhXsq3bC.js";
import "../chunks/D8FV6tAO.js";
import { t as MoneyDisplay } from "../chunks/CIVSRuaR2.js";
import { r as getAccounts } from "../chunks/WQpihYtc2.js";
import { n as getBanks } from "../chunks/DmBLdRNb2.js";
import { t as Input } from "../chunks/C4xMLgho.js";
import { a as createSalesReturn, d as getSuppliers, i as createPurchaseReturn } from "../chunks/BhHT3xJZ.js";
import { t as SearchableSelect } from "../chunks/B-Y5NBqj.js";
//#region node_modules/lucide-svelte/dist/icons/file-badge.svelte
function File_badge($$anchor, $$props) {
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
		["path", { "d": "M13 22h5a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.3" }],
		["path", { "d": "M14 2v5a1 1 0 0 0 1 1h5" }],
		["path", { "d": "m7.69 16.479 1.29 4.88a.5.5 0 0 1-.698.591l-1.843-.849a1 1 0 0 0-.879.001l-1.846.85a.5.5 0 0 1-.692-.593l1.29-4.88" }],
		["circle", {
			"cx": "6",
			"cy": "14",
			"r": "3"
		}]
	];
	/**
	* @component @name FileBadge
	* @description Lucide SVG icon component, renders SVG Element with children.
	*
	* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTMgMjJoNWEyIDIgMCAwIDAgMi0yVjhhMi40IDIuNCAwIDAgMC0uNzA2LTEuNzA2bC0zLjU4OC0zLjU4OEEyLjQgMi40IDAgMCAwIDE0IDJINmEyIDIgMCAwIDAtMiAydjMuMyIgLz4KICA8cGF0aCBkPSJNMTQgMnY1YTEgMSAwIDAgMCAxIDFoNSIgLz4KICA8cGF0aCBkPSJtNy42OSAxNi40NzkgMS4yOSA0Ljg4YS41LjUgMCAwIDEtLjY5OC41OTFsLTEuODQzLS44NDlhMSAxIDAgMCAwLS44NzkuMDAxbC0xLjg0Ni44NWEuNS41IDAgMCAxLS42OTItLjU5M2wxLjI5LTQuODgiIC8+CiAgPGNpcmNsZSBjeD0iNiIgY3k9IjE0IiByPSIzIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/file-badge
	* @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
	*
	* @param {Object} props - Lucide icons props and any valid SVG attribute
	* @returns {FunctionalComponent} Svelte component
	*
	*/
	Icon($$anchor, spread_props({ name: "file-badge" }, () => $$sanitized_props, {
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
//#region node_modules/lucide-svelte/dist/icons/package-check.svelte
function Package_check($$anchor, $$props) {
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
		["path", { "d": "M12 22V12" }],
		["path", { "d": "m16 17 2 2 4-4" }],
		["path", { "d": "M21 11.127V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.32-.753" }],
		["path", { "d": "M3.29 7 12 12l8.71-5" }],
		["path", { "d": "m7.5 4.27 8.997 5.148" }]
	];
	/**
	* @component @name PackageCheck
	* @description Lucide SVG icon component, renders SVG Element with children.
	*
	* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgMjJWMTIiIC8+CiAgPHBhdGggZD0ibTE2IDE3IDIgMiA0LTQiIC8+CiAgPHBhdGggZD0iTTIxIDExLjEyN1Y4YTIgMiAwIDAgMC0xLTEuNzNsLTctNGEyIDIgMCAwIDAtMiAwbC03IDRBMiAyIDAgMCAwIDMgOHY4YTIgMiAwIDAgMCAxIDEuNzI5bDcgNGEyIDIgMCAwIDAgMiAuMDAxbDEuMzItLjc1MyIgLz4KICA8cGF0aCBkPSJNMy4yOSA3IDEyIDEybDguNzEtNSIgLz4KICA8cGF0aCBkPSJtNy41IDQuMjcgOC45OTcgNS4xNDgiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/package-check
	* @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
	*
	* @param {Object} props - Lucide icons props and any valid SVG attribute
	* @returns {FunctionalComponent} Svelte component
	*
	*/
	Icon($$anchor, spread_props({ name: "package-check" }, () => $$sanitized_props, {
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
//#region node_modules/lucide-svelte/dist/icons/stamp.svelte
function Stamp($$anchor, $$props) {
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
		["path", { "d": "M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-6 0c0 2 1 2 1 3.5V13" }],
		["path", { "d": "M20 15.5a2.5 2.5 0 0 0-2.5-2.5h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1z" }],
		["path", { "d": "M5 22h14" }]
	];
	/**
	* @component @name Stamp
	* @description Lucide SVG icon component, renders SVG Element with children.
	*
	* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTQgMTNWOC41QzE0IDcgMTUgNyAxNSA1YTMgMyAwIDAgMC02IDBjMCAyIDEgMiAxIDMuNVYxMyIgLz4KICA8cGF0aCBkPSJNMjAgMTUuNWEyLjUgMi41IDAgMCAwLTIuNS0yLjVoLTExQTIuNSAyLjUgMCAwIDAgNCAxNS41VjE3YTEgMSAwIDAgMCAxIDFoMTRhMSAxIDAgMCAwIDEtMXoiIC8+CiAgPHBhdGggZD0iTTUgMjJoMTQiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/stamp
	* @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
	*
	* @param {Object} props - Lucide icons props and any valid SVG attribute
	* @returns {FunctionalComponent} Svelte component
	*
	*/
	Icon($$anchor, spread_props({ name: "stamp" }, () => $$sanitized_props, {
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
//#region node_modules/lucide-svelte/dist/icons/tree-palm.svelte
function Tree_palm($$anchor, $$props) {
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
		["path", { "d": "M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4" }],
		["path", { "d": "M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3" }],
		["path", { "d": "M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35" }],
		["path", { "d": "M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14" }]
	];
	/**
	* @component @name TreePalm
	* @description Lucide SVG icon component, renders SVG Element with children.
	*
	* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTMgOGMwLTIuNzYtMi40Ni01LTUuNS01UzIgNS4yNCAyIDhoMmwxLTEgMSAxaDQiIC8+CiAgPHBhdGggZD0iTTEzIDcuMTRBNS44MiA1LjgyIDAgMCAxIDE2LjUgNmMzLjA0IDAgNS41IDIuMjQgNS41IDVoLTNsLTEtMS0xIDFoLTMiIC8+CiAgPHBhdGggZD0iTTUuODkgOS43MWMtMi4xNSAyLjE1LTIuMyA1LjQ3LS4zNSA3LjQzbDQuMjQtNC4yNS43LS43LjcxLS43MSAyLjEyLTIuMTJjLTEuOTUtMS45Ni01LjI3LTEuOC03LjQyLjM1IiAvPgogIDxwYXRoIGQ9Ik0xMSAxNS41Yy41IDIuNS0uMTcgNC41LTEgNi41aDRjMi01LjUtLjUtMTItMS0xNCIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/tree-palm
	* @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
	*
	* @param {Object} props - Lucide icons props and any valid SVG attribute
	* @returns {FunctionalComponent} Svelte component
	*
	*/
	Icon($$anchor, spread_props({ name: "tree-palm" }, () => $$sanitized_props, {
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
//#region src/routes/(app)/suppliers/returns/record/+page.svelte
var root = from_html(`<div class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-semibold"><!> <span>Auto-Approval Mode (Master Accountant)</span></div>`);
var root_1 = from_html(`<div class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-400 text-xs font-semibold"><!> <span>Draft Mode (Pending Approval)</span></div>`);
var root_2 = from_html(`<div class="h-2.5 w-2.5 rounded-full bg-emerald-500"></div>`);
var root_3 = from_html(`<div class="h-2.5 w-2.5 rounded-full bg-rose-500"></div>`);
var root_4 = from_html(`<button type="button"><!> <span class="text-xs tracking-tight"> </span></button>`);
var root_5 = from_html(`<span class="text-xs text-muted-foreground flex items-center gap-1"><!> Loading service bookings...</span>`);
var root_6 = from_html(`<span class="text-[11px] text-muted-foreground"> </span>`);
var root_7 = from_html(`<div class="p-8 text-center text-xs text-muted-foreground bg-muted/20 border border-border rounded-2xl flex items-center justify-center gap-2"><!> Fetching full service financial summary...</div>`);
var root_8 = from_html(`<span class="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wide bg-emerald-100 text-emerald-800 border border-emerald-300"><!> Deal Closed</span>`);
var root_9 = from_html(`<div class="p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl text-xs text-blue-900 dark:text-blue-300 flex items-start gap-2"><!> <div><strong class="font-bold">Supplier Return Pending / None:</strong> No approved purchase return has been recorded from the supplier yet for this booking. You can still issue this customer refund / credit note.</div></div>`);
var root_10 = from_html(`<div class="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-xs text-amber-900 dark:text-amber-300 flex items-start gap-2"><!> <div><strong class="font-bold">Customer Payment Pending:</strong> The customer payment status for this booking is <span class="uppercase font-bold"> </span>. Customer payment must be confirmed as <strong>Success / Paid</strong> before customer refunds can be issued.</div></div> <!>`, 1);
var root_11 = from_html(`<div class="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-xs text-emerald-900 dark:text-emerald-300 flex items-start gap-2"><!> <div><strong class="font-bold">Deal Closed & Finalized:</strong> This deal is marked as finalized and closed. Customer refunds are locked.</div></div>`);
var root_12 = from_html(`<div class="p-3 bg-muted/40 border border-border rounded-xl text-xs text-muted-foreground flex items-start gap-2"><!> <div><strong class="font-bold">No Remaining Refund Balance:</strong> The total eligible refund for this booking has already been processed.</div></div>`);
var root_13 = from_html(`<div class="p-5 bg-card border border-rose-500/20 rounded-2xl shadow-xs space-y-4"><div class="flex items-center justify-between pb-3 border-b border-border/50"><div class="flex items-center gap-2"><span class="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-500/10 px-2.5 py-1 rounded-lg"> </span> <span class="text-xs font-bold text-foreground font-mono"> </span> <span> </span> <!></div> <div class="text-xs text-muted-foreground">Customer Head: <strong class="text-foreground font-semibold"> </strong></div></div> <div class="grid grid-cols-2 md:grid-cols-5 gap-3"><div class="p-3 bg-muted/40 rounded-xl border border-border/60 space-y-1"><span class="text-[10px] text-muted-foreground uppercase font-semibold block">Customer Sale Price</span> <span class="text-xs font-bold font-mono text-foreground block"><!></span></div> <div class="p-3 bg-muted/40 rounded-xl border border-border/60 space-y-1"><span class="text-[10px] text-muted-foreground uppercase font-semibold block">Supplier Settled (Paid)</span> <span class="text-xs font-bold font-mono text-rose-600 block"><!></span></div> <div class="p-3 bg-muted/40 rounded-xl border border-border/60 space-y-1"><span class="text-[10px] text-muted-foreground uppercase font-semibold block">Purchase Refunds Received</span> <span class="text-xs font-bold font-mono text-emerald-600 block"><!></span></div> <div class="p-3 bg-muted/40 rounded-xl border border-border/60 space-y-1"><span class="text-[10px] text-muted-foreground uppercase font-semibold block">Customer Already Refunded</span> <span class="text-xs font-bold font-mono text-muted-foreground block"><!></span></div> <div class="p-3 bg-rose-500/5 rounded-xl border border-rose-500/20 space-y-1"><span class="text-[10px] text-rose-600 uppercase font-semibold block">Max Customer Refund</span> <span class="text-xs font-bold font-mono text-rose-600 block"><!></span></div></div> <!></div>`);
var root_14 = from_html(`<div class="space-y-1.5"><label for="sr-bank-select" class="block text-xs font-bold text-foreground">Select Source Bank Account <span class="text-red-500">*</span></label> <!></div>`);
var root_15 = from_html(`<div class="space-y-1.5"><label for="sr-cash-select" class="block text-xs font-bold text-foreground">Select Source Cash Drawer Account <span class="text-red-500">*</span></label> <!></div>`);
var root_16 = from_html(`<button type="button" class="text-[11px] font-semibold text-rose-600 hover:underline cursor-pointer"> </button>`);
var root_17 = from_html(`<span>This transaction will be <strong>auto-approved</strong> and posted to the General Ledger immediately.</span>`);
var root_18 = from_html(`<span>This transaction will be routed to the <strong>Master Accountant Pending Approvals</strong> queue.</span>`);
var root_19 = from_html(`<!> <span>Posting Sales Return...</span>`, 1);
var root_20 = from_html(`<!> <span> </span>`, 1);
var root_21 = from_html(`<form class="space-y-6"><div class="bg-card border border-border rounded-2xl p-6 shadow-xs space-y-6"><div class="flex items-center justify-between pb-4 border-b border-border/60"><div class="flex items-center gap-2"><!> <h2 class="text-base font-bold text-foreground">Record Sales Return</h2></div> <span class="text-xs text-muted-foreground font-medium">Step 1 of 3: Select Beneficiary & Service</span></div> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div class="space-y-1.5"><label for="sr-salesman" class="block text-xs font-bold text-foreground">1. Select Salesman</label> <!> <p class="text-[11px] text-muted-foreground">Filter customer heads by their assigned sales executive.</p></div> <div class="space-y-1.5"><label for="sr-head" class="block text-xs font-bold text-foreground">2. Select Head (Agent / Customer)</label> <!> <p class="text-[11px] text-muted-foreground">Choose the customer or agent entity requesting the refund.</p></div></div> <div class="space-y-2.5 pt-2"><div class="block text-xs font-bold text-foreground">3. Select Service Category (All 7 Services) <span class="text-red-500">*</span></div> <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2"></div></div> <div class="space-y-1.5 pt-2"><div class="flex items-center justify-between"><label for="sr-booking" class="block text-xs font-bold text-foreground">Select Service Booking / Reference <span class="text-red-500">*</span></label> <!></div> <!></div> <!> <div class="space-y-4 pt-2 border-t border-border/60"><div class="flex items-center justify-between"><div class="block text-xs font-bold text-foreground">4. Choose Refund Method <span class="text-red-500">*</span></div> <span class="text-[11px] text-muted-foreground">Where will the refund be debited from or credited to?</span></div> <div class="grid grid-cols-1 sm:grid-cols-3 gap-3"><button type="button"><div class="flex items-center justify-between"><span class="text-xs font-bold text-foreground flex items-center gap-1.5"><!> Bank Account</span> <!></div> <p class="text-[11px] text-muted-foreground">Debit refund funds directly from company bank balance.</p></button> <button type="button"><div class="flex items-center justify-between"><span class="text-xs font-bold text-foreground flex items-center gap-1.5"><!> Cash Account</span> <!></div> <p class="text-[11px] text-muted-foreground">Debit refund cash from branch or counter cash drawer.</p></button> <button type="button"><div class="flex items-center justify-between"><span class="text-xs font-bold text-foreground flex items-center gap-1.5"><!> Credit to Head Balance</span> <!></div> <p class="text-[11px] text-muted-foreground">Credit funds straight to customer or agent account balance.</p></button></div> <!></div> <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 border-t border-border/60"><div class="space-y-1.5"><div class="flex items-center justify-between"><label for="sr-amt" class="block text-xs font-bold text-foreground">Refund Amount (BHD) <span class="text-red-500">*</span></label> <!></div> <!></div> <div class="space-y-1.5"><label for="sr-reason-text" class="block text-xs font-bold text-foreground">Refund Reason / Narrative <span class="text-red-500">*</span></label> <!></div></div> <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-border/60"><div class="text-xs text-muted-foreground flex items-center gap-1.5"><!> <!></div> <!></div></div></form>`);
var root_22 = from_html(`<span class="text-xs text-muted-foreground flex items-center gap-1"><!> Discovering supplier services...</span>`);
var root_23 = from_html(`<span class="text-[11px] font-medium text-emerald-600 dark:text-emerald-400"> </span>`);
var root_24 = from_html(`<div class="p-5 bg-muted/20 border border-dashed border-border rounded-2xl text-center text-xs text-muted-foreground">Please select a supplier in Step 1 above to view their linked services and settled bookings.</div>`);
var root_25 = from_html(`<div class="p-6 bg-muted/20 border border-border rounded-2xl text-center text-xs text-muted-foreground flex items-center justify-center gap-2"><!> <span>Loading settled applications for selected supplier...</span></div>`);
var root_26 = from_html(`<span class="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded"> </span>`);
var root_27 = from_html(`<button type="button"><div class="flex items-center gap-2.5"><div><!></div> <div><span class="text-xs font-semibold block"> </span> <span class="text-[10px] text-muted-foreground block"> </span></div></div> <!></button>`);
var root_28 = from_html(`<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5"></div>`);
var root_29 = from_html(`<span class="text-xs text-muted-foreground flex items-center gap-1"><!> Loading supplier bookings...</span>`);
var root_30 = from_html(`<div class="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-xs text-amber-800 dark:text-amber-300 flex items-center gap-2 mt-2"><!> <span>No <strong> </strong> applications found for supplier <strong> </strong>.</span></div>`);
var root_31 = from_html(`<div class="p-8 text-center text-xs text-muted-foreground bg-muted/20 border border-border rounded-2xl flex items-center justify-center gap-2"><!> Fetching supplier payment history & costs...</div>`);
var root_32 = from_html(`<div class="p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl text-xs text-blue-900 dark:text-blue-300 flex items-start gap-2"><!> <div><strong class="font-bold">Customer Payment Status:</strong> Customer payment status is currently <span class="uppercase font-bold"> </span>. Supplier refund will be credited to Texas Travel independently of the customer payment status.</div></div>`);
var root_33 = from_html(`<div class="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-xs text-amber-900 dark:text-amber-300 flex items-start gap-2"><!> <div><strong class="font-bold">No Supplier Payment Recorded:</strong> Supplier refund (Purchase Return) requires an approved supplier payment for this booking.</div></div>`);
var root_34 = from_html(`<div class="p-3 bg-muted/40 border border-border rounded-xl text-xs text-muted-foreground flex items-start gap-2"><!> <div><strong class="font-bold">No Remaining Return Balance:</strong> All settled funds for this supplier on this booking have already been refunded.</div></div>`);
var root_35 = from_html(`<div class="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-xs text-emerald-900 dark:text-emerald-300 flex items-start gap-2"><!> <div><strong class="font-bold">Deal Closed:</strong> This booking deal is closed and finalized. The supplier return will be recorded and credited to the company account.</div></div>`);
var root_36 = from_html(`<div class="p-5 bg-card border border-emerald-500/20 rounded-2xl shadow-xs space-y-4"><div class="flex items-center justify-between pb-3 border-b border-border/50"><div class="flex items-center gap-2"><span class="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-500/10 px-2.5 py-1 rounded-lg"> </span> <span class="text-xs font-bold text-foreground font-mono"> </span> <span> </span> <!></div> <div class="text-xs text-muted-foreground">Selected Supplier: <strong class="text-foreground font-semibold"> </strong></div></div> <div class="grid grid-cols-2 md:grid-cols-4 gap-3"><div class="p-3 bg-muted/40 rounded-xl border border-border/60 space-y-1"><span class="text-[10px] text-muted-foreground uppercase font-semibold block">Expected Supplier Cost</span> <span class="text-xs font-bold font-mono text-foreground block"><!></span></div> <div class="p-3 bg-muted/40 rounded-xl border border-border/60 space-y-1"><span class="text-[10px] text-muted-foreground uppercase font-semibold block">Total Paid to Supplier</span> <span class="text-xs font-bold font-mono text-emerald-600 block"><!></span></div> <div class="p-3 bg-muted/40 rounded-xl border border-border/60 space-y-1"><span class="text-[10px] text-muted-foreground uppercase font-semibold block">Previously Returned</span> <span class="text-xs font-bold font-mono text-muted-foreground block"><!></span></div> <div class="p-3 bg-emerald-500/5 rounded-xl border border-emerald-500/20 space-y-1"><span class="text-[10px] text-emerald-600 uppercase font-semibold block">Available Refund Balance</span> <span class="text-xs font-bold font-mono text-emerald-600 block"><!></span></div></div> <!> <!> <!></div>`);
var root_37 = from_html(`<div class="space-y-1.5"><label for="pr-bank-select" class="block text-xs font-bold text-foreground">Select Destination Bank Account <span class="text-red-500">*</span></label> <!></div>`);
var root_38 = from_html(`<div class="space-y-1.5"><label for="pr-cash-select" class="block text-xs font-bold text-foreground">Select Destination Cash Drawer Account <span class="text-red-500">*</span></label> <!></div>`);
var root_39 = from_html(`<button type="button" class="text-[11px] font-semibold text-emerald-600 hover:underline cursor-pointer"> </button>`);
var root_40 = from_html(`<!> <span>Posting Purchase Return...</span>`, 1);
var root_41 = from_html(`<form class="space-y-6"><div class="bg-card border border-border rounded-2xl p-6 shadow-xs space-y-6"><div class="flex items-center justify-between pb-4 border-b border-border/60"><div class="flex items-center gap-2"><!> <h2 class="text-base font-bold text-foreground">Record Purchase Return</h2></div> <span class="text-xs text-muted-foreground font-medium">Step 1 of 3: Select Supplier & Service</span></div> <div class="space-y-1.5"><label for="pr-sup" class="block text-xs font-bold text-foreground">1. Select Supplier <span class="text-red-500">*</span></label> <!> <p class="text-[11px] text-muted-foreground">Select the supplier to discover all active service applications and settled payments.</p></div> <div class="space-y-2.5 pt-2"><div class="flex items-center justify-between"><div class="block text-xs font-bold text-foreground">2. Select Service Category <span class="text-red-500">*</span></div> <!></div> <!></div> <div class="space-y-1.5 pt-2"><div class="flex items-center justify-between"><label for="pr-booking" class="block text-xs font-bold text-foreground">3. Select Service Booking / Reference <span class="text-red-500">*</span></label> <!></div> <!> <!></div> <!> <div class="space-y-4 pt-2 border-t border-border/60"><div class="flex items-center justify-between"><div class="block text-xs font-bold text-foreground">3. Where should the Purchase Return Increment? <span class="text-red-500">*</span></div> <span class="text-[11px] text-muted-foreground">Which account or wallet receives the returned funds?</span></div> <div class="grid grid-cols-1 sm:grid-cols-3 gap-3"><button type="button"><div class="flex items-center justify-between"><span class="text-xs font-bold text-foreground flex items-center gap-1.5"><!> Bank Account</span> <!></div> <p class="text-[11px] text-muted-foreground">Increment company bank balance with incoming supplier refund.</p></button> <button type="button"><div class="flex items-center justify-between"><span class="text-xs font-bold text-foreground flex items-center gap-1.5"><!> Cash Drawer Account</span> <!></div> <p class="text-[11px] text-muted-foreground">Receive cash into cash drawer and increase cash on hand.</p></button> <button type="button"><div class="flex items-center justify-between"><span class="text-xs font-bold text-foreground flex items-center gap-1.5"><!> Supplier Wallet Balance</span> <!></div> <p class="text-[11px] text-muted-foreground">Credit supplier's wallet balance for future bookings.</p></button></div> <!></div> <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 border-t border-border/60"><div class="space-y-1.5"><div class="flex items-center justify-between"><label for="pr-amt" class="block text-xs font-bold text-foreground">Return Amount (BHD) <span class="text-red-500">*</span></label> <!></div> <!></div> <div class="space-y-1.5"><label for="pr-reason-text" class="block text-xs font-bold text-foreground">Return Reason / Narrative <span class="text-red-500">*</span></label> <!></div></div> <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-border/60"><div class="text-xs text-muted-foreground flex items-center gap-1.5"><!> <!></div> <!></div></div></form>`);
var root_42 = from_html(`<div class="space-y-6 max-w-7xl mx-auto pb-12"><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4"><div class="space-y-1"><div class="flex items-center gap-2"><button type="button" class="p-2 rounded-xl border border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer" title="Back to Returns List"><!></button> <div><h1 class="text-xl font-bold text-foreground font-sans flex items-center gap-2">Record Return Workspace</h1> <p class="text-xs text-muted-foreground">Process customer sales refunds or supplier purchase returns with real-time financial validation.</p></div></div></div> <div class="flex items-center gap-2"><!></div></div> <div class="grid grid-cols-1 sm:grid-cols-2 gap-3"><button type="button"><div class="flex items-center gap-3"><div><!></div> <div><h3 class="text-sm font-bold text-foreground">Purchase Return (Supplier Refund)</h3> <p class="text-xs text-muted-foreground">Receive refund from Supplier into Bank, Cash Drawer, or Supplier Wallet.</p></div></div> <!></button> <button type="button"><div class="flex items-center gap-3"><div><!></div> <div><h3 class="text-sm font-bold text-foreground">Sales Return (Customer Refund)</h3> <p class="text-xs text-muted-foreground">Refund money to Agent or Customer from Bank, Cash, or Credit Wallet.</p></div></div> <!></button></div>  <!></div>`);
function _page($$anchor, $$props) {
	push($$props, true);
	const $page = () => store_get(page, "$page", $$stores);
	const [$$stores, $$cleanup] = setup_stores();
	const SERVICES = [
		{
			id: "flight",
			label: "Flights",
			icon: Plane,
			segment: "flights",
			color: "sky"
		},
		{
			id: "hotel",
			label: "Hotels",
			icon: Building,
			segment: "hotels",
			color: "indigo"
		},
		{
			id: "visa",
			label: "Visa",
			icon: File_badge,
			segment: "visa",
			color: "emerald"
		},
		{
			id: "holiday",
			label: "Holiday Packages",
			icon: Tree_palm,
			segment: "holiday-packages",
			color: "amber"
		},
		{
			id: "transportation",
			label: "Transportation",
			icon: Car,
			segment: "transportation",
			color: "purple"
		},
		{
			id: "vfs",
			label: "VFS Appointments",
			icon: Stamp,
			segment: "vfs",
			color: "cyan"
		},
		{
			id: "other",
			label: "Other Services",
			icon: Package_check,
			segment: "other-services",
			color: "rose"
		}
	];
	function getServiceConfig(type) {
		const norm = (type || "").toLowerCase().trim();
		return SERVICES.find((s) => s.id === norm || s.segment === norm || norm.includes(s.id) || s.id.includes(norm)) || SERVICES[0];
	}
	let activeTab = state("purchase");
	let loadingMasterData = state(true);
	let salesmenList = state(proxy([]));
	let headsList = state(proxy([]));
	let suppliersList = state(proxy([]));
	let banksList = state(proxy([]));
	let cashAccountsList = state(proxy([]));
	let srSalesmanId = state("");
	let srHeadId = state("");
	let srServiceType = state("flight");
	let srBookingsList = state(proxy([]));
	let srSelectedBookingId = state("");
	let srSelectedBookingDetail = state(null);
	let srLoadingBookings = state(false);
	let srLoadingDetail = state(false);
	let srRefundMethod = state("bank");
	let srSelectedAccountId = state("");
	let srAmount = state(0);
	let srReason = state("");
	let srSubmitting = state(false);
	let prSupplierId = state("");
	let prServiceType = state("flight");
	let prBookingsList = state(proxy([]));
	let prSelectedBookingId = state("");
	let prSelectedBookingDetail = state(null);
	let prLoadingBookings = state(false);
	let prLoadingDetail = state(false);
	let prLoadingServices = state(false);
	let prSupplierPayments = state(proxy([]));
	let prSupplierReturns = state(proxy([]));
	let prAvailableServices = state(proxy([]));
	let prDestinationType = state("bank");
	let prSelectedAccountId = state("");
	let prAmount = state(0);
	let prReason = state("");
	let prSubmitting = state(false);
	const salesmanOptions = user_derived(() => [{
		id: "",
		name: "All Salesmen (No Filter)",
		subtext: "View all heads"
	}, ...get(salesmenList).map((s) => ({
		id: s.id,
		name: s.name || `Salesman #${s.id}`,
		subtext: s.email || ""
	}))]);
	const filteredHeads = user_derived(() => {
		if (!get(srSalesmanId)) return get(headsList);
		const sId = Number(get(srSalesmanId));
		const sName = get(salesmenList).find((s) => s.id === sId)?.name?.toLowerCase() || "";
		return get(headsList).filter((h) => {
			if (h.salesmanId && Number(h.salesmanId) === sId) return true;
			if (h.salesmanName && sName && h.salesmanName.toLowerCase().includes(sName)) return true;
			return false;
		});
	});
	const headOptions = user_derived(() => get(filteredHeads).map((h) => ({
		id: h.id,
		name: `${h.firstName || ""} ${h.lastName || ""}`.trim() || `Head #${h.id}`,
		subtext: `${(h.type || "Customer").toUpperCase()} • Balance: ${(h.wallet ?? 0).toFixed(3)} BHD`
	})));
	const supplierOptions = user_derived(() => get(suppliersList).map((s) => ({
		id: s.id,
		name: s.name,
		subtext: `Wallet: ${(s.wallet ?? 0).toFixed(3)} BHD • Credit: ${(s.creditWallet ?? 0).toFixed(3)} BHD`
	})));
	const srBookingOptions = user_derived(() => get(srBookingsList).map((b) => ({
		id: b.id,
		name: b.documentNumber ? `${b.documentNumber} (ID #${b.id})` : `Booking #${b.id}`,
		subtext: `Sale: ${Number(b.payableAmount ?? b.payable_amount ?? 0).toFixed(3)} BHD • ${b.headName || b.passengerName || b.name || ""}`
	})));
	const prBookingOptions = user_derived(() => get(prBookingsList).map((b) => {
		const paid = Number(b.paidAmount ?? b.totalPaid ?? 0);
		const refBal = Number(b.refundableBalance ?? b.maxRefundable ?? paid);
		const nameOrHead = b.customerName || b.headName || b.passengerName || b.guestName || b.name || "";
		const docNo = b.documentNumber || `Booking #${b.id}`;
		const hasApprovedPay = b.hasApprovedPayment || paid > 0;
		return {
			id: b.id,
			name: `${docNo} (ID #${b.id})`,
			subtext: paid > 0 ? `Paid: ${paid.toFixed(3)} BHD • Refundable: ${refBal.toFixed(3)} BHD • ${nameOrHead}` : hasApprovedPay ? `Settled Payment Recorded • Sale: ${Number(b.payableAmount ?? 0).toFixed(3)} BHD • ${nameOrHead}` : `Sale: ${Number(b.payableAmount ?? 0).toFixed(3)} BHD • ${nameOrHead}`
		};
	}));
	const bankAccountOptions = user_derived(() => get(banksList).map((b) => ({
		id: `bank_${b.id}`,
		name: `${b.bankName} (${b.accountNumber})`,
		subtext: `Balance: ${(b.currentBalance ?? 0).toFixed(3)} BHD`
	})));
	const cashAccountOptions = user_derived(() => get(cashAccountsList).map((a) => ({
		id: `account_${a.id}`,
		name: a.name,
		subtext: `Drawer Balance: ${(a.currentBalance ?? 0).toFixed(3)} BHD`
	})));
	const srTotalSalesReturns = user_derived(() => {
		if (!get(srSelectedBookingDetail)) return 0;
		const d = get(srSelectedBookingDetail);
		return (d.salesReturns || d.sales_returns || []).filter((r) => (r.status || "").toLowerCase() === "approved").reduce((sum, r) => sum + (Number(r.amount) || 0), 0);
	});
	const srTotalPaid = user_derived(() => {
		if (!get(srSelectedBookingDetail)) return 0;
		const d = get(srSelectedBookingDetail);
		return (d.supplierPayments || d.supplier_payments || []).filter((p) => (p.status || "").toLowerCase() === "approved").reduce((sum, p) => sum + (Number(p.amount) || 0), 0);
	});
	const srTotalPurchaseReturns = user_derived(() => {
		if (!get(srSelectedBookingDetail)) return 0;
		const d = get(srSelectedBookingDetail);
		return (d.purchaseReturns || d.purchase_returns || []).filter((r) => (r.status || "").toLowerCase() === "approved").reduce((sum, r) => sum + (Number(r.amount) || 0), 0);
	});
	const srIsPaymentConfirmed = user_derived(() => {
		if (!get(srSelectedBookingDetail)) return false;
		const status = (get(srSelectedBookingDetail).paymentStatus || get(srSelectedBookingDetail).payment_status || "").toLowerCase();
		return status === "paid" || status === "success";
	});
	const srIsDealClosed = user_derived(() => {
		if (!get(srSelectedBookingDetail)) return false;
		const d = get(srSelectedBookingDetail);
		return Boolean(d.isDealClosed || d.is_deal_closed || d.processingStatus === "deal_closed" || d.processing_status === "deal_closed" || d.dealClosed);
	});
	const srMaxRefundable = user_derived(() => {
		if (!get(srSelectedBookingDetail)) return 0;
		const d = get(srSelectedBookingDetail);
		const payable = Number(d.payableAmount ?? d.payable_amount ?? 0) || 0;
		return Math.max(0, payable - get(srTotalSalesReturns));
	});
	const canSalesReturn = user_derived(() => get(srSelectedBookingDetail) !== null && get(srIsPaymentConfirmed) && get(srMaxRefundable) > 0 && !get(srIsDealClosed));
	const prSupplierInfo = user_derived(() => {
		if (!get(prSelectedBookingDetail)) return null;
		const d = get(prSelectedBookingDetail);
		const sId = get(prSupplierId) ? Number(get(prSupplierId)) : null;
		const supPayments = (d.supplierPayments || d.supplier_payments || []).filter((p) => (p.status || "").toLowerCase() === "approved" && (!sId || !p.supplierId || Number(p.supplierId) === sId));
		const totalPaid = supPayments.reduce((sum, p) => sum + (Number(p.amount) || 0), 0);
		const hasApprovedPayment = supPayments.length > 0;
		const totalReturned = (d.purchaseReturns || d.purchase_returns || []).filter((r) => (r.status || "").toLowerCase() === "approved" && (!sId || !r.supplierId || Number(r.supplierId) === sId)).reduce((sum, r) => sum + (Number(r.amount) || 0), 0);
		return {
			totalPaid,
			totalReturned,
			maxRefundable: Math.max(0, totalPaid - totalReturned),
			hasApprovedPayment
		};
	});
	const prIsPaymentConfirmed = user_derived(() => {
		if (!get(prSelectedBookingDetail)) return false;
		const status = (get(prSelectedBookingDetail).paymentStatus || get(prSelectedBookingDetail).payment_status || "").toLowerCase();
		return status === "paid" || status === "success";
	});
	const prIsDealClosed = user_derived(() => {
		if (!get(prSelectedBookingDetail)) return false;
		const d = get(prSelectedBookingDetail);
		return Boolean(d.isDealClosed || d.is_deal_closed || d.processingStatus === "deal_closed" || d.processing_status === "deal_closed" || d.dealClosed);
	});
	const canPurchaseReturn = user_derived(() => get(prSelectedBookingDetail) !== null && ((get(prSupplierInfo)?.totalPaid ?? 0) > 0 || (get(prSupplierInfo)?.hasApprovedPayment ?? false)) && get(prSupplierId) !== "");
	onMount(async () => {
		try {
			const [salesmenRes, headsRes, suppliersRes, banksRes, accountsRes] = await Promise.allSettled([
				apiFetch("/api/sales-entries/salesmen"),
				apiFetch("/api/sales-entries/heads?pageSize=500"),
				getSuppliers(),
				getBanks(),
				getAccounts()
			]);
			if (salesmenRes.status === "fulfilled") set(salesmenList, Array.isArray(salesmenRes.value) ? salesmenRes.value : salesmenRes.value?.items || [], true);
			if (headsRes.status === "fulfilled") set(headsList, Array.isArray(headsRes.value) ? headsRes.value : headsRes.value?.items || [], true);
			if (suppliersRes.status === "fulfilled") set(suppliersList, suppliersRes.value || [], true);
			if (banksRes.status === "fulfilled") set(banksList, banksRes.value || [], true);
			if (accountsRes.status === "fulfilled") set(cashAccountsList, accountsRes.value || [], true);
			const urlParams = $page().url.searchParams;
			const initialType = urlParams.get("type");
			if (initialType === "sales") set(activeTab, "sales");
			else if (initialType === "purchase") set(activeTab, "purchase");
			const initialService = urlParams.get("serviceType");
			if (initialService && SERVICES.some((s) => s.id === initialService)) if (get(activeTab) === "sales") set(srServiceType, initialService, true);
			else set(prServiceType, initialService, true);
			const initialBookingId = urlParams.get("bookingId");
			const initialHeadId = urlParams.get("headId");
			const initialSupplierId = urlParams.get("supplierId");
			if (initialHeadId) set(srHeadId, Number(initialHeadId), true);
			if (initialSupplierId) set(prSupplierId, Number(initialSupplierId), true);
			if (get(activeTab) === "sales") {
				await fetchSalesBookings();
				if (initialBookingId) {
					set(srSelectedBookingId, Number(initialBookingId), true);
					await fetchSalesBookingDetail(get(srSelectedBookingId));
				}
			} else {
				await fetchPurchaseBookings();
				if (initialBookingId) {
					set(prSelectedBookingId, Number(initialBookingId), true);
					await fetchPurchaseBookingDetail(get(prSelectedBookingId));
				}
			}
		} catch (err) {
			console.error("Error loading master data:", err);
			toast.error("Failed to load initial workspace data.");
		} finally {
			set(loadingMasterData, false);
		}
	});
	async function fetchSalesBookings() {
		set(srLoadingBookings, true);
		set(srBookingsList, [], true);
		set(srSelectedBookingDetail, null);
		try {
			const segment = getServiceConfig(get(srServiceType)).segment;
			const res = await apiFetch(`api/sales-entries/${segment}`, { params: {
				page: 1,
				pageSize: 100
			} });
			const rawItems = res?.items || (Array.isArray(res) ? res : []);
			if (get(srHeadId)) {
				const selectedHead = get(headsList).find((h) => h.id === Number(get(srHeadId)));
				const headNameLower = selectedHead ? `${selectedHead.firstName || ""} ${selectedHead.lastName || ""}`.trim().toLowerCase() : "";
				set(srBookingsList, rawItems.filter((b) => {
					if (b.headId && Number(b.headId) === Number(get(srHeadId))) return true;
					if (b.agentId && Number(b.agentId) === Number(get(srHeadId))) return true;
					if (headNameLower && b.headName && b.headName.toLowerCase().includes(headNameLower)) return true;
					return false;
				}), true);
			} else set(srBookingsList, rawItems, true);
		} catch (err) {
			console.error("Failed to load sales bookings:", err);
		} finally {
			set(srLoadingBookings, false);
		}
	}
	async function fetchSalesBookingDetail(bookingId) {
		if (!bookingId) {
			set(srSelectedBookingDetail, null);
			return;
		}
		set(srLoadingDetail, true);
		try {
			const serviceConfig = getServiceConfig(get(srServiceType));
			const segment = serviceConfig.segment;
			const res = await apiFetch(`api/sales-entries/${segment}/${bookingId}`);
			const rawDetail = res?.data || res;
			const salesDetail = rawDetail?.salesDetail || rawDetail?.sales_detail || rawDetail;
			set(srSelectedBookingDetail, {
				...salesDetail,
				supplierPayments: rawDetail?.supplierPayments || rawDetail?.supplier_payments || salesDetail?.supplierPayments || [],
				purchaseReturns: rawDetail?.purchaseReturns || rawDetail?.purchase_returns || salesDetail?.purchaseReturns || [],
				salesReturns: rawDetail?.salesReturns || rawDetail?.sales_returns || salesDetail?.salesReturns || [],
				ledgerEntries: rawDetail?.ledgerEntries || rawDetail?.ledger_entries || [],
				journalEntries: rawDetail?.journalEntries || rawDetail?.journal_entries || []
			}, true);
			if (get(srSelectedBookingDetail)) {
				const isConfirmed = ["paid", "success"].includes((get(srSelectedBookingDetail).paymentStatus || "").toLowerCase());
				const salesReturns = (get(srSelectedBookingDetail).salesReturns || []).filter((r) => (r.status || "").toLowerCase() === "approved").reduce((sum, r) => sum + (Number(r.amount) || 0), 0);
				const payable = Number(get(srSelectedBookingDetail).payableAmount ?? 0) || 0;
				if (isConfirmed && payable > salesReturns) set(srAmount, Math.max(0, payable - salesReturns), true);
				else set(srAmount, 0);
				set(srReason, `Customer refund for ${serviceConfig.label} ${get(srSelectedBookingDetail).documentNumber || "#" + bookingId}`);
			}
		} catch (err) {
			console.error("Failed to load booking detail:", err);
			toast.error("Failed to load service booking details.");
		} finally {
			set(srLoadingDetail, false);
		}
	}
	async function onSupplierChange() {
		set(prSelectedBookingId, "");
		set(prSelectedBookingDetail, null);
		set(prBookingsList, [], true);
		set(prAvailableServices, [], true);
		if (!get(prSupplierId)) return;
		set(prLoadingServices, true);
		try {
			const supObj = get(suppliersList).find((s) => s.id === Number(get(prSupplierId)));
			const supNameLower = supObj?.name?.trim().toLowerCase() || "";
			let supplierCategories = [];
			if (Array.isArray(supObj?.categories)) supplierCategories = supObj.categories;
			else if (typeof supObj?.categories === "string") try {
				supplierCategories = JSON.parse(supObj.categories);
			} catch {
				supplierCategories = [supObj.categories];
			}
			const allowedServiceIds = /* @__PURE__ */ new Set();
			supplierCategories.forEach((cat) => {
				const c = String(cat).toLowerCase().trim();
				if (c.includes("visa")) allowedServiceIds.add("visa");
				if (c.includes("flight") || c.includes("air")) allowedServiceIds.add("flight");
				if (c.includes("hotel")) allowedServiceIds.add("hotel");
				if (c.includes("holiday") || c.includes("package")) allowedServiceIds.add("holiday");
				if (c.includes("transport")) allowedServiceIds.add("transportation");
				if (c.includes("vfs")) allowedServiceIds.add("vfs");
				if (c.includes("other") || c.includes("attestation")) allowedServiceIds.add("other");
			});
			if (allowedServiceIds.size === 0 && supNameLower) {
				if (supNameLower.includes("visa")) allowedServiceIds.add("visa");
				if (supNameLower.includes("air") || supNameLower.includes("flight")) allowedServiceIds.add("flight");
				if (supNameLower.includes("hotel")) allowedServiceIds.add("hotel");
				if (supNameLower.includes("holiday") || supNameLower.includes("package")) allowedServiceIds.add("holiday");
				if (supNameLower.includes("transport") || supNameLower.includes("transfer") || supNameLower.includes("car")) allowedServiceIds.add("transportation");
				if (supNameLower.includes("vfs")) allowedServiceIds.add("vfs");
				if (supNameLower.includes("other") || supNameLower.includes("attestation") || supNameLower.includes("service")) allowedServiceIds.add("other");
			}
			const [paymentsRes, returnsRes] = await Promise.all([apiFetch("api/supplier-payments", { params: {
				supplierId: get(prSupplierId),
				status: "approved"
			} }).catch(() => []), apiFetch("api/purchase-returns", { params: {
				supplierId: get(prSupplierId),
				status: "approved"
			} }).catch(() => [])]);
			set(prSupplierPayments, Array.isArray(paymentsRes) ? paymentsRes : paymentsRes?.data || [], true);
			set(prSupplierReturns, Array.isArray(returnsRes) ? returnsRes : returnsRes?.data || [], true);
			const srvMap = {
				flight: "flight",
				flights: "flight",
				flight_booking: "flight",
				hotel: "hotel",
				hotels: "hotel",
				hotel_booking: "hotel",
				visa: "visa",
				visas: "visa",
				visa_application: "visa",
				vfs: "vfs",
				vfs_appointment: "vfs",
				"vfs-appointments": "vfs",
				holiday: "holiday",
				holidays: "holiday",
				holiday_package: "holiday",
				"holiday-packages": "holiday",
				transport: "transportation",
				transportation: "transportation",
				transportations: "transportation",
				other: "other",
				other_service: "other",
				"other-services": "other"
			};
			function detectServiceCategory(item) {
				if (!item) return void 0;
				const raw = (item.serviceType || "").toLowerCase().trim();
				if (raw && srvMap[raw]) return srvMap[raw];
				const haystack = `${item.externalReference || ""} ${item.originalPurchaseReference || ""} ${item.description || ""} ${item.referenceNumber || ""}`.toUpperCase();
				if (haystack.includes("TXSFLT") || haystack.includes("FLIGHT")) return "flight";
				if (haystack.includes("TXSHOTL") || haystack.includes("HOTEL")) return "hotel";
				if (haystack.includes("TXSVISA") || haystack.includes("VISA")) return "visa";
				if (haystack.includes("TXSVFS") || haystack.includes("VFS")) return "vfs";
				if (haystack.includes("TXSHOL") || haystack.includes("HOLIDAY")) return "holiday";
				if (haystack.includes("TXSTRANS") || haystack.includes("TRANSPORT")) return "transportation";
				if (haystack.includes("TXSOTHR") || haystack.includes("OTHER")) return "other";
			}
			const groupedByService = /* @__PURE__ */ new Map();
			get(prSupplierPayments).forEach((p) => {
				let normalized = detectServiceCategory(p);
				if (!normalized && allowedServiceIds.size === 1) normalized = Array.from(allowedServiceIds)[0];
				if (normalized) {
					if (!groupedByService.has(normalized)) groupedByService.set(normalized, {
						refs: /* @__PURE__ */ new Set(),
						totalPaid: 0,
						totalReturned: 0
					});
					const g = groupedByService.get(normalized);
					const ref = String(p.externalReference || "").trim();
					const primaryRef = (p.description || "").match(/\bTXS[A-Z0-9]+\b/i)?.[0] || ref;
					if (primaryRef) g.refs.add(primaryRef);
					g.totalPaid += Number(p.amount) || 0;
				}
			});
			get(prSupplierReturns).forEach((r) => {
				let normalized = detectServiceCategory(r);
				if (!normalized && allowedServiceIds.size === 1) normalized = Array.from(allowedServiceIds)[0];
				if (normalized && groupedByService.has(normalized)) {
					const g = groupedByService.get(normalized);
					g.totalReturned += Number(r.amount) || 0;
				}
			});
			const available = [];
			for (const s of SERVICES) if (allowedServiceIds.size === 0 || allowedServiceIds.has(s.id)) {
				const g = groupedByService.get(s.id);
				const count = g ? g.refs.size : 0;
				const paid = g ? g.totalPaid : 0;
				const returned = g ? g.totalReturned : 0;
				available.push({
					id: s.id,
					label: s.label,
					icon: s.icon,
					bookingCount: count,
					totalPaid: paid,
					totalReturned: returned,
					refundableBalance: Math.max(0, paid - returned)
				});
			}
			set(prAvailableServices, available.length > 0 ? available : SERVICES.map((s) => ({
				id: s.id,
				label: s.label,
				icon: s.icon,
				bookingCount: 0,
				totalPaid: 0,
				totalReturned: 0,
				refundableBalance: 0
			})), true);
			if (get(prAvailableServices).length > 0) {
				if (!get(prAvailableServices).some((a) => a.id === get(prServiceType))) set(prServiceType, get(prAvailableServices)[0]?.id || "flight", true);
			}
			await fetchPurchaseBookings();
		} catch (err) {
			console.error("Failed to load supplier services:", err);
		} finally {
			set(prLoadingServices, false);
		}
	}
	async function fetchPurchaseBookings() {
		set(prLoadingBookings, true);
		set(prBookingsList, [], true);
		set(prSelectedBookingId, "");
		set(prSelectedBookingDetail, null);
		try {
			const segment = getServiceConfig(get(prServiceType)).segment;
			const res = await apiFetch(`api/sales-entries/${segment}`, { params: {
				page: 1,
				pageSize: 200
			} }).catch(() => ({ items: [] }));
			const rawItems = res?.items || (Array.isArray(res) ? res : []);
			if (get(prSupplierId)) {
				const supNameLower = get(suppliersList).find((s) => s.id === Number(get(prSupplierId)))?.name?.trim().toLowerCase() || "";
				const targetKeys = {
					flight: [
						"flight",
						"flights",
						"flight_booking",
						"txsflt"
					],
					hotel: [
						"hotel",
						"hotels",
						"hotel_booking",
						"txshotl"
					],
					visa: [
						"visa",
						"visas",
						"visa_application",
						"txsvisa"
					],
					vfs: [
						"vfs",
						"vfs_appointment",
						"vfs-appointments",
						"txsvfs"
					],
					holiday: [
						"holiday",
						"holidays",
						"holiday_package",
						"holiday-packages",
						"txshol"
					],
					transportation: [
						"transport",
						"transportation",
						"transportations",
						"txstrans"
					],
					other: [
						"other",
						"other_service",
						"other-services",
						"txsothr"
					]
				}[get(prServiceType).toLowerCase()] || [get(prServiceType).toLowerCase()];
				const currentPrefix = {
					flight: "TXSFLT",
					hotel: "TXSHOTL",
					visa: "TXSVISA",
					vfs: "TXSVFS",
					holiday: "TXSHOL",
					transportation: "TXSTRANS",
					other: "TXSOTHR"
				}[get(prServiceType).toLowerCase()] || "";
				const paymentsByRef = /* @__PURE__ */ new Map();
				get(prSupplierPayments).forEach((p) => {
					const detectedSrv = (p.serviceType || "").toLowerCase().trim() || (p.description && /TXSFLT|flight/i.test(p.description) ? "flight" : "") || (p.description && /TXSHOTL|hotel/i.test(p.description) ? "hotel" : "") || (p.description && /TXSVISA|visa/i.test(p.description) ? "visa" : "") || (p.description && /TXSVFS|vfs/i.test(p.description) ? "vfs" : "") || (p.description && /TXSHOL|holiday/i.test(p.description) ? "holiday" : "") || (p.description && /TXSTRANS|transport/i.test(p.description) ? "transportation" : "") || (p.description && /TXSOTHR|other/i.test(p.description) ? "other" : "");
					const ref = String(p.externalReference || "").trim();
					const descDocMatch = (p.description || "").match(/\bTXS[A-Z0-9]+\b/i)?.[0];
					let matchesService = false;
					if (detectedSrv && targetKeys.some((k) => detectedSrv.includes(k) || k.includes(detectedSrv))) matchesService = true;
					else if (currentPrefix && (ref.toUpperCase().startsWith(currentPrefix) || descDocMatch && descDocMatch.toUpperCase().startsWith(currentPrefix))) matchesService = true;
					else if (!detectedSrv && get(prAvailableServices).length === 1 && get(prAvailableServices)[0]?.id === get(prServiceType)) matchesService = true;
					if (matchesService) {
						const payInfo = {
							totalPaid: Number(p.amount) || 0,
							lastDate: p.requestedAt || p.createdAt,
							description: p.description || "",
							hasApprovedPayment: (p.status || "").toLowerCase() === "approved"
						};
						const registerRef = (key) => {
							if (!key) return;
							if (!paymentsByRef.has(key)) paymentsByRef.set(key, { ...payInfo });
							else {
								const entry = paymentsByRef.get(key);
								entry.totalPaid += payInfo.totalPaid;
								if (payInfo.hasApprovedPayment) entry.hasApprovedPayment = true;
							}
						};
						if (ref) registerRef(ref);
						if (descDocMatch) registerRef(descDocMatch);
					}
				});
				const returnsByRef = /* @__PURE__ */ new Map();
				get(prSupplierReturns).forEach((r) => {
					const rSrv = (r.serviceType || "").toLowerCase().trim();
					const ref = String(r.originalPurchaseReference || r.externalReference || "").trim();
					const descDocMatch = (r.reason || "").match(/\bTXS[A-Z0-9]+\b/i)?.[0];
					let matchesService = false;
					if (rSrv && targetKeys.some((k) => rSrv.includes(k) || k.includes(rSrv))) matchesService = true;
					else if (currentPrefix && (ref.toUpperCase().startsWith(currentPrefix) || descDocMatch && descDocMatch.toUpperCase().startsWith(currentPrefix))) matchesService = true;
					else if (!rSrv && get(prAvailableServices).length === 1 && get(prAvailableServices)[0]?.id === get(prServiceType)) matchesService = true;
					if (matchesService) {
						const amt = Number(r.amount) || 0;
						if (ref) returnsByRef.set(ref, (returnsByRef.get(ref) || 0) + amt);
						if (descDocMatch) returnsByRef.set(descDocMatch, (returnsByRef.get(descDocMatch) || 0) + amt);
					}
				});
				const resultList = [];
				const matchedRefs = /* @__PURE__ */ new Set();
				rawItems.forEach((b) => {
					const idStr = String(b.id || "").trim();
					const docStr = String(b.documentNumber || "").trim();
					let isMatch = false;
					let refKey = idStr;
					if (paymentsByRef.has(idStr)) {
						isMatch = true;
						refKey = idStr;
					} else if (docStr && paymentsByRef.has(docStr)) {
						isMatch = true;
						refKey = docStr;
					} else if (b.supplierId && Number(b.supplierId) === Number(get(prSupplierId))) isMatch = true;
					else {
						const bSupName = (b.supplierName || b.supplier_name || b.supplier || b.airlineCompany || b.hotelName || "").trim().toLowerCase();
						if (supNameLower && bSupName && (bSupName === supNameLower || bSupName.includes(supNameLower) || supNameLower.includes(bSupName))) isMatch = true;
					}
					if (isMatch) {
						matchedRefs.add(idStr);
						if (docStr) matchedRefs.add(docStr);
						const payData = paymentsByRef.get(refKey) || (docStr ? paymentsByRef.get(docStr) : void 0);
						const paid = payData?.totalPaid ?? (Number(b.expectedSupplierCost) || 0);
						const ret = returnsByRef.get(refKey) || (docStr ? returnsByRef.get(docStr) || 0 : 0);
						const bal = Math.max(0, paid - ret);
						resultList.push({
							...b,
							hasApprovedPayment: payData?.hasApprovedPayment || false,
							paidAmount: paid,
							returnedAmount: ret,
							refundableBalance: bal
						});
					}
				});
				paymentsByRef.forEach((payInfo, ref) => {
					if (!matchedRefs.has(ref)) {
						if (!currentPrefix || ref.toUpperCase().startsWith(currentPrefix) || !ref.toUpperCase().startsWith("TXS")) {
							const ret = returnsByRef.get(ref) || 0;
							const bal = Math.max(0, payInfo.totalPaid - ret);
							resultList.push({
								id: isNaN(Number(ref)) ? ref : Number(ref),
								documentNumber: ref.startsWith("TXS") ? ref : `Booking #${ref}`,
								payableAmount: payInfo.totalPaid,
								headName: payInfo.description || `Supplier Settled Payment`,
								hasApprovedPayment: payInfo.hasApprovedPayment,
								paidAmount: payInfo.totalPaid,
								returnedAmount: ret,
								refundableBalance: bal
							});
						}
					}
				});
				set(prBookingsList, resultList, true);
			} else set(prBookingsList, rawItems, true);
		} catch (err) {
			console.error("Failed to load purchase bookings:", err);
		} finally {
			set(prLoadingBookings, false);
		}
	}
	async function fetchPurchaseBookingDetail(bookingId) {
		if (!bookingId) {
			set(prSelectedBookingDetail, null);
			return;
		}
		set(prLoadingDetail, true);
		try {
			const serviceConfig = getServiceConfig(get(prServiceType));
			const segment = serviceConfig.segment;
			const res = await apiFetch(`api/sales-entries/${segment}/${bookingId}`);
			const rawDetail = res?.data || res;
			const salesDetail = rawDetail?.salesDetail || rawDetail?.sales_detail || rawDetail;
			set(prSelectedBookingDetail, {
				...salesDetail,
				supplierPayments: rawDetail?.supplierPayments || rawDetail?.supplier_payments || salesDetail?.supplierPayments || [],
				purchaseReturns: rawDetail?.purchaseReturns || rawDetail?.purchase_returns || salesDetail?.purchaseReturns || [],
				salesReturns: rawDetail?.salesReturns || rawDetail?.sales_returns || salesDetail?.salesReturns || [],
				ledgerEntries: rawDetail?.ledgerEntries || rawDetail?.ledger_entries || [],
				journalEntries: rawDetail?.journalEntries || rawDetail?.journal_entries || []
			}, true);
			const foundBooking = get(prBookingsList).find((b) => String(b.id) === String(bookingId) || b.documentNumber === bookingId);
			if (foundBooking && foundBooking.refundableBalance !== void 0) set(prAmount, Number(foundBooking.refundableBalance) || 0, true);
			else if (get(prSelectedBookingDetail) && get(prSupplierId)) {
				const sId = Number(get(prSupplierId));
				const totalPaid = (get(prSelectedBookingDetail).supplierPayments || []).filter((p) => (p.status || "").toLowerCase() === "approved" && (!p.supplierId || Number(p.supplierId) === sId)).reduce((sum, p) => sum + (Number(p.amount) || 0), 0);
				const totalReturned = (get(prSelectedBookingDetail).purchaseReturns || []).filter((r) => (r.status || "").toLowerCase() === "approved" && (!r.supplierId || Number(r.supplierId) === sId)).reduce((sum, r) => sum + (Number(r.amount) || 0), 0);
				set(prAmount, Math.max(0, totalPaid - totalReturned), true);
			} else set(prAmount, 0);
			set(prReason, `Refund received from supplier for ${serviceConfig.label} ${get(prSelectedBookingDetail)?.documentNumber || "#" + bookingId}`);
		} catch (err) {
			console.error("Failed to load booking detail:", err);
			const foundBooking = get(prBookingsList).find((b) => String(b.id) === String(bookingId) || b.documentNumber === bookingId);
			if (foundBooking) {
				set(prSelectedBookingDetail, {
					id: foundBooking.id,
					documentNumber: foundBooking.documentNumber,
					payableAmount: foundBooking.payableAmount,
					paymentStatus: "success",
					headName: foundBooking.headName,
					supplierName: get(suppliersList).find((s) => s.id === Number(get(prSupplierId)))?.name || "Supplier",
					supplierPayments: [{
						amount: foundBooking.paidAmount || foundBooking.payableAmount,
						status: "approved"
					}],
					purchaseReturns: foundBooking.returnedAmount ? [{
						amount: foundBooking.returnedAmount,
						status: "approved"
					}] : []
				}, true);
				set(prAmount, Number(foundBooking.refundableBalance ?? foundBooking.paidAmount ?? 0), true);
				set(prReason, `Refund received from supplier for Booking ${foundBooking.documentNumber || "#" + bookingId}`);
			} else toast.error("Failed to load supplier booking details.");
		} finally {
			set(prLoadingDetail, false);
		}
	}
	async function submitSalesReturn(e) {
		e.preventDefault();
		if (get(srSubmitting)) return;
		if (!get(srSelectedBookingDetail)) {
			toast.error("Please select a valid service booking.");
			return;
		}
		if (get(srAmount) <= 0) {
			toast.error("Return amount must be greater than 0.");
			return;
		}
		if (get(srAmount) > get(srMaxRefundable) + .001) {
			toast.error(`Refund amount cannot exceed maximum refundable balance (${get(srMaxRefundable).toFixed(3)} BHD).`);
			return;
		}
		if (get(srRefundMethod) !== "wallet" && !get(srSelectedAccountId)) {
			toast.error("Please select a source bank or cash account.");
			return;
		}
		set(srSubmitting, true);
		try {
			const isMaster = hasRole("master_accountant");
			const d = get(srSelectedBookingDetail);
			let recipientType = "Head";
			let recipientId = Number(get(srHeadId) || d.headId || d.agentId || 0);
			if (d.clientType?.toLowerCase() === "agent" || d.agentId && d.agentId > 0) {
				recipientType = "Agent";
				recipientId = Number(d.agentId || recipientId);
			}
			if (!recipientId || recipientId <= 0) recipientId = Number(get(headsList)[0]?.id || 1);
			await createSalesReturn({
				recipientType,
				recipientId,
				serviceId: d.documentNumber || String(get(srSelectedBookingId)),
				amount: get(srAmount),
				returnReason: get(srReason).trim() || "Sales Return Customer Refund",
				sourceType: get(srRefundMethod) === "wallet" ? "account" : get(srRefundMethod) === "bank" ? "bank" : "account",
				sourceId: get(srRefundMethod) === "wallet" ? "" : get(srSelectedAccountId),
				serviceType: get(srServiceType)
			}, `sr-record-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`);
			toast.success(isMaster ? "Sales Return recorded and auto-approved successfully." : "Sales Return draft submitted for Master Accountant approval.");
			goto("/suppliers/returns");
		} catch (err) {
			console.error("Failed to submit sales return:", err);
			toast.error(err.message || "Failed to submit sales return.");
		} finally {
			set(srSubmitting, false);
		}
	}
	async function submitPurchaseReturn(e) {
		e.preventDefault();
		if (get(prSubmitting)) return;
		if (!get(prSupplierId)) {
			toast.error("Please select a supplier.");
			return;
		}
		if (!get(prSelectedBookingDetail)) {
			toast.error("Please select a service booking.");
			return;
		}
		if (get(prAmount) <= 0) {
			toast.error("Return amount must be greater than 0.");
			return;
		}
		if (get(prSupplierInfo) && get(prSupplierInfo).maxRefundable > 0 && get(prAmount) > get(prSupplierInfo).maxRefundable + .001) {
			toast.error(`Return amount cannot exceed available paid balance (${get(prSupplierInfo).maxRefundable.toFixed(3)} BHD).`);
			return;
		}
		if (get(prDestinationType) !== "wallet" && !get(prSelectedAccountId)) {
			toast.error("Please select a destination bank or cash account.");
			return;
		}
		set(prSubmitting, true);
		try {
			const isMaster = hasRole("master_accountant");
			const d = get(prSelectedBookingDetail);
			const supplierObj = get(suppliersList).find((s) => s.id === Number(get(prSupplierId)));
			await createPurchaseReturn({
				supplierId: Number(get(prSupplierId)),
				originalPurchaseReference: d.documentNumber || String(get(prSelectedBookingId)),
				externalReference: String(d.id || get(prSelectedBookingId)),
				amount: get(prAmount),
				reason: get(prReason).trim() || "Purchase Return Supplier Refund",
				destinationType: get(prDestinationType) === "wallet" ? "supplier_wallet" : get(prDestinationType) === "bank" ? "bank" : "account",
				destinationId: get(prDestinationType) === "wallet" ? "" : get(prSelectedAccountId),
				serviceType: get(prServiceType),
				supplierName: supplierObj?.name || "Supplier"
			}, `pr-record-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`);
			toast.success(isMaster ? "Purchase Return recorded and auto-approved successfully." : "Purchase Return draft submitted for Master Accountant approval.");
			goto("/suppliers/returns");
		} catch (err) {
			console.error("Failed to submit purchase return:", err);
			toast.error(err.message || "Failed to submit purchase return.");
		} finally {
			set(prSubmitting, false);
		}
	}
	var div = root_42();
	head("neufjt", ($$anchor) => {
		effect(() => {
			$document.title = "Record Return Workspace — Texas Accounts Portal";
		});
	});
	var div_1 = child(div);
	var div_2 = child(div_1);
	var div_3 = child(div_2);
	var button = child(div_3);
	Arrow_left(child(button), { class: "h-4 w-4" });
	reset(button);
	next(2);
	reset(div_3);
	reset(div_2);
	var div_4 = sibling(div_2, 2);
	var node_1 = child(div_4);
	var consequent = ($$anchor) => {
		var div_5 = root();
		Shield_check(child(div_5), { class: "h-4 w-4 text-emerald-500" });
		next(2);
		reset(div_5);
		append($$anchor, div_5);
	};
	var d_1 = user_derived(() => hasRole("master_accountant"));
	var alternate = ($$anchor) => {
		var div_6 = root_1();
		Circle_alert(child(div_6), { class: "h-4 w-4 text-amber-500" });
		next(2);
		reset(div_6);
		append($$anchor, div_6);
	};
	if_block(node_1, ($$render) => {
		if (get(d_1)) $$render(consequent);
		else $$render(alternate, -1);
	});
	reset(div_4);
	reset(div_1);
	var div_7 = sibling(div_1, 2);
	var button_1 = child(div_7);
	var div_8 = child(button_1);
	var div_9 = child(div_8);
	Rotate_ccw(child(div_9), { class: "h-5 w-5" });
	reset(div_9);
	next(2);
	reset(div_8);
	var node_5 = sibling(div_8, 2);
	var consequent_1 = ($$anchor) => {
		append($$anchor, root_2());
	};
	if_block(node_5, ($$render) => {
		if (get(activeTab) === "purchase") $$render(consequent_1);
	});
	reset(button_1);
	var button_2 = sibling(button_1, 2);
	var div_11 = child(button_2);
	var div_12 = child(div_11);
	Undo_2(child(div_12), { class: "h-5 w-5" });
	reset(div_12);
	next(2);
	reset(div_11);
	var node_7 = sibling(div_11, 2);
	var consequent_2 = ($$anchor) => {
		append($$anchor, root_3());
	};
	if_block(node_7, ($$render) => {
		if (get(activeTab) === "sales") $$render(consequent_2);
	});
	reset(button_2);
	reset(div_7);
	var node_8 = sibling(div_7, 2);
	var consequent_19 = ($$anchor) => {
		var form = root_21();
		var div_14 = child(form);
		var div_15 = child(div_14);
		var div_16 = child(div_15);
		Undo_2(child(div_16), { class: "h-5 w-5 text-rose-500" });
		next(2);
		reset(div_16);
		next(2);
		reset(div_15);
		var div_17 = sibling(div_15, 2);
		var div_18 = child(div_17);
		SearchableSelect(sibling(child(div_18), 2), {
			id: "sr-salesman",
			get options() {
				return get(salesmanOptions);
			},
			placeholder: "-- All Salesmen --",
			searchPlaceholder: "Search salesman name or email...",
			onchange: () => {
				set(srHeadId, "");
				fetchSalesBookings();
			},
			get value() {
				return get(srSalesmanId);
			},
			set value($$value) {
				set(srSalesmanId, $$value, true);
			}
		});
		next(2);
		reset(div_18);
		var div_19 = sibling(div_18, 2);
		SearchableSelect(sibling(child(div_19), 2), {
			id: "sr-head",
			get options() {
				return get(headOptions);
			},
			placeholder: "-- Select Agent or Customer Head --",
			searchPlaceholder: "Search head name, type, or mobile...",
			onchange: () => {
				fetchSalesBookings();
			},
			get value() {
				return get(srHeadId);
			},
			set value($$value) {
				set(srHeadId, $$value, true);
			}
		});
		next(2);
		reset(div_19);
		reset(div_17);
		var div_20 = sibling(div_17, 2);
		var div_21 = sibling(child(div_20), 2);
		each(div_21, 21, () => SERVICES, index, ($$anchor, s) => {
			const IconComponent = user_derived(() => get(s).icon);
			const isSelected = user_derived(() => get(srServiceType) === get(s).id);
			var button_3 = root_4();
			var node_12 = child(button_3);
			component(node_12, () => get(IconComponent), ($$anchor, IconComponent_1) => {
				IconComponent_1($$anchor, { class: "h-4.5 w-4.5" });
			});
			var span = sibling(node_12, 2);
			var text = child(span, true);
			reset(span);
			reset(button_3);
			template_effect(($0) => {
				set_class(button_3, 1, $0);
				set_text(text, get(s).label);
			}, [() => clsx(["p-3 rounded-xl border text-center transition-all flex flex-col items-center gap-1.5 cursor-pointer", get(isSelected) ? "bg-primary/10 border-primary text-primary font-bold shadow-xs" : "bg-muted/30 border-border text-muted-foreground hover:text-foreground hover:bg-muted/60 font-medium"].join(" "))]);
			delegated("click", button_3, () => {
				set(srServiceType, get(s).id, true);
				set(srSelectedBookingId, "");
				set(srSelectedBookingDetail, null);
				fetchSalesBookings();
			});
			append($$anchor, button_3);
		});
		reset(div_21);
		reset(div_20);
		var div_22 = sibling(div_20, 2);
		var div_23 = child(div_22);
		var node_13 = sibling(child(div_23), 2);
		var consequent_3 = ($$anchor) => {
			var span_1 = root_5();
			Refresh_cw(child(span_1), { class: "h-3 w-3 animate-spin" });
			next();
			reset(span_1);
			append($$anchor, span_1);
		};
		var alternate_1 = ($$anchor) => {
			var span_2 = root_6();
			var text_1 = child(span_2);
			reset(span_2);
			template_effect(() => set_text(text_1, `${get(srBookingsList).length ?? ""} matching booking(s) found`));
			append($$anchor, span_2);
		};
		if_block(node_13, ($$render) => {
			if (get(srLoadingBookings)) $$render(consequent_3);
			else $$render(alternate_1, -1);
		});
		reset(div_23);
		SearchableSelect(sibling(div_23, 2), {
			id: "sr-booking",
			get options() {
				return get(srBookingOptions);
			},
			placeholder: "-- Select Booking / Document Number --",
			searchPlaceholder: "Search document number, ID, or passenger...",
			required: true,
			onchange: (val) => {
				fetchSalesBookingDetail(val);
			},
			get value() {
				return get(srSelectedBookingId);
			},
			set value($$value) {
				set(srSelectedBookingId, $$value, true);
			}
		});
		reset(div_22);
		var node_16 = sibling(div_22, 2);
		var consequent_4 = ($$anchor) => {
			var div_24 = root_7();
			Refresh_cw(child(div_24), { class: "h-4 w-4 animate-spin text-primary" });
			next();
			reset(div_24);
			append($$anchor, div_24);
		};
		var consequent_10 = ($$anchor) => {
			const d = user_derived(() => get(srSelectedBookingDetail));
			var div_25 = root_13();
			var div_26 = child(div_25);
			var div_27 = child(div_26);
			var span_3 = child(div_27);
			var text_2 = child(span_3);
			reset(span_3);
			var span_4 = sibling(span_3, 2);
			var text_3 = child(span_4, true);
			reset(span_4);
			var span_5 = sibling(span_4, 2);
			var text_4 = child(span_5);
			reset(span_5);
			var node_18 = sibling(span_5, 2);
			var consequent_5 = ($$anchor) => {
				var span_6 = root_8();
				Lock(child(span_6), { class: "h-3 w-3 text-emerald-700" });
				next();
				reset(span_6);
				append($$anchor, span_6);
			};
			if_block(node_18, ($$render) => {
				if (get(srIsDealClosed)) $$render(consequent_5);
			});
			reset(div_27);
			var div_28 = sibling(div_27, 2);
			var strong = sibling(child(div_28));
			var text_5 = child(strong, true);
			reset(strong);
			reset(div_28);
			reset(div_26);
			var div_29 = sibling(div_26, 2);
			var div_30 = child(div_29);
			var span_7 = sibling(child(div_30), 2);
			var node_20 = child(span_7);
			{
				let $0 = user_derived(() => Number(get(d).payableAmount ?? get(d).payable_amount ?? 0));
				MoneyDisplay(node_20, { get amount() {
					return get($0);
				} });
			}
			reset(span_7);
			reset(div_30);
			var div_31 = sibling(div_30, 2);
			var span_8 = sibling(child(div_31), 2);
			MoneyDisplay(child(span_8), { get amount() {
				return get(srTotalPaid);
			} });
			reset(span_8);
			reset(div_31);
			var div_32 = sibling(div_31, 2);
			var span_9 = sibling(child(div_32), 2);
			MoneyDisplay(child(span_9), { get amount() {
				return get(srTotalPurchaseReturns);
			} });
			reset(span_9);
			reset(div_32);
			var div_33 = sibling(div_32, 2);
			var span_10 = sibling(child(div_33), 2);
			MoneyDisplay(child(span_10), { get amount() {
				return get(srTotalSalesReturns);
			} });
			reset(span_10);
			reset(div_33);
			var div_34 = sibling(div_33, 2);
			var span_11 = sibling(child(div_34), 2);
			MoneyDisplay(child(span_11), { get amount() {
				return get(srMaxRefundable);
			} });
			reset(span_11);
			reset(div_34);
			reset(div_29);
			var node_25 = sibling(div_29, 2);
			var consequent_7 = ($$anchor) => {
				var fragment = root_10();
				var div_35 = first_child(fragment);
				var node_26 = child(div_35);
				Circle_alert(node_26, { class: "h-4 w-4 shrink-0 mt-0.5 text-amber-600 dark:text-amber-400" });
				var div_36 = sibling(node_26, 2);
				var span_12 = sibling(child(div_36), 2);
				var text_6 = child(span_12, true);
				reset(span_12);
				next(3);
				reset(div_36);
				reset(div_35);
				var node_27 = sibling(div_35, 2);
				var consequent_6 = ($$anchor) => {
					var div_37 = root_9();
					Info(child(div_37), { class: "h-4 w-4 shrink-0 mt-0.5 text-blue-600 dark:text-blue-400" });
					next(2);
					reset(div_37);
					append($$anchor, div_37);
				};
				if_block(node_27, ($$render) => {
					if (get(srTotalPurchaseReturns) === 0) $$render(consequent_6);
				});
				template_effect(() => set_text(text_6, get(d).paymentStatus || "Pending"));
				append($$anchor, fragment);
			};
			var consequent_8 = ($$anchor) => {
				var div_38 = root_11();
				Lock(child(div_38), { class: "h-4 w-4 shrink-0 mt-0.5 text-emerald-600 dark:text-emerald-400" });
				next(2);
				reset(div_38);
				append($$anchor, div_38);
			};
			var consequent_9 = ($$anchor) => {
				var div_39 = root_12();
				Info(child(div_39), { class: "h-4 w-4 shrink-0 mt-0.5" });
				next(2);
				reset(div_39);
				append($$anchor, div_39);
			};
			if_block(node_25, ($$render) => {
				if (!get(srIsPaymentConfirmed)) $$render(consequent_7);
				else if (get(srIsDealClosed)) $$render(consequent_8, 1);
				else if (get(srMaxRefundable) <= 0) $$render(consequent_9, 2);
			});
			reset(div_25);
			template_effect(() => {
				set_text(text_2, `${get(srServiceType) ?? ""} Details`);
				set_text(text_3, get(d).documentNumber || "#" + get(srSelectedBookingId));
				set_class(span_5, 1, `text-[11px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wide ${get(srIsPaymentConfirmed) ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800"}`);
				set_text(text_4, `Payment: ${(get(d).paymentStatus || "Pending") ?? ""}`);
				set_text(text_5, get(d).headName || get(d).clientType || "Retail");
			});
			append($$anchor, div_25);
		};
		if_block(node_16, ($$render) => {
			if (get(srLoadingDetail)) $$render(consequent_4);
			else if (get(srSelectedBookingDetail)) $$render(consequent_10, 1);
		});
		var div_40 = sibling(node_16, 2);
		var div_41 = sibling(child(div_40), 2);
		var button_4 = child(div_41);
		var div_42 = child(button_4);
		var span_13 = child(div_42);
		Landmark(child(span_13), { class: "h-4 w-4 text-primary" });
		next();
		reset(span_13);
		var node_32 = sibling(span_13, 2);
		var consequent_11 = ($$anchor) => {
			Check($$anchor, { class: "h-3.5 w-3.5 text-primary" });
		};
		if_block(node_32, ($$render) => {
			if (get(srRefundMethod) === "bank") $$render(consequent_11);
		});
		reset(div_42);
		next(2);
		reset(button_4);
		var button_5 = sibling(button_4, 2);
		var div_43 = child(button_5);
		var span_14 = child(div_43);
		Coins(child(span_14), { class: "h-4 w-4 text-primary" });
		next();
		reset(span_14);
		var node_34 = sibling(span_14, 2);
		var consequent_12 = ($$anchor) => {
			Check($$anchor, { class: "h-3.5 w-3.5 text-primary" });
		};
		if_block(node_34, ($$render) => {
			if (get(srRefundMethod) === "cash") $$render(consequent_12);
		});
		reset(div_43);
		next(2);
		reset(button_5);
		var button_6 = sibling(button_5, 2);
		var div_44 = child(button_6);
		var span_15 = child(div_44);
		Wallet(child(span_15), { class: "h-4 w-4 text-primary" });
		next();
		reset(span_15);
		var node_36 = sibling(span_15, 2);
		var consequent_13 = ($$anchor) => {
			Check($$anchor, { class: "h-3.5 w-3.5 text-primary" });
		};
		if_block(node_36, ($$render) => {
			if (get(srRefundMethod) === "wallet") $$render(consequent_13);
		});
		reset(div_44);
		next(2);
		reset(button_6);
		reset(div_41);
		var node_37 = sibling(div_41, 2);
		var consequent_14 = ($$anchor) => {
			var div_45 = root_14();
			SearchableSelect(sibling(child(div_45), 2), {
				id: "sr-bank-select",
				get options() {
					return get(bankAccountOptions);
				},
				placeholder: "-- Select Bank Account --",
				searchPlaceholder: "Search bank name or account number...",
				required: true,
				get value() {
					return get(srSelectedAccountId);
				},
				set value($$value) {
					set(srSelectedAccountId, $$value, true);
				}
			});
			reset(div_45);
			append($$anchor, div_45);
		};
		var consequent_15 = ($$anchor) => {
			var div_46 = root_15();
			SearchableSelect(sibling(child(div_46), 2), {
				id: "sr-cash-select",
				get options() {
					return get(cashAccountOptions);
				},
				placeholder: "-- Select Cash Account --",
				searchPlaceholder: "Search cash drawer name...",
				required: true,
				get value() {
					return get(srSelectedAccountId);
				},
				set value($$value) {
					set(srSelectedAccountId, $$value, true);
				}
			});
			reset(div_46);
			append($$anchor, div_46);
		};
		if_block(node_37, ($$render) => {
			if (get(srRefundMethod) === "bank") $$render(consequent_14);
			else if (get(srRefundMethod) === "cash") $$render(consequent_15, 1);
		});
		reset(div_40);
		var div_47 = sibling(div_40, 2);
		var div_48 = child(div_47);
		var div_49 = child(div_48);
		var node_40 = sibling(child(div_49), 2);
		var consequent_16 = ($$anchor) => {
			var button_7 = root_16();
			var text_7 = child(button_7);
			reset(button_7);
			template_effect(($0) => set_text(text_7, `Max (${$0 ?? ""} BHD)`), [() => get(srMaxRefundable).toFixed(3)]);
			delegated("click", button_7, () => {
				set(srAmount, get(srMaxRefundable), true);
			});
			append($$anchor, button_7);
		};
		if_block(node_40, ($$render) => {
			if (get(srSelectedBookingDetail)) $$render(consequent_16);
		});
		reset(div_49);
		var node_41 = sibling(div_49, 2);
		{
			let $0 = user_derived(() => get(srMaxRefundable) + .001);
			Input(node_41, {
				id: "sr-amt",
				type: "number",
				step: "0.001",
				min: "0.001",
				get max() {
					return get($0);
				},
				required: true,
				placeholder: "0.000",
				get value() {
					return get(srAmount);
				},
				set value($$value) {
					set(srAmount, $$value, true);
				}
			});
		}
		reset(div_48);
		var div_50 = sibling(div_48, 2);
		Input(sibling(child(div_50), 2), {
			id: "sr-reason-text",
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
		reset(div_50);
		reset(div_47);
		var div_51 = sibling(div_47, 2);
		var div_52 = child(div_51);
		var node_43 = child(div_52);
		Info(node_43, { class: "h-4 w-4 text-primary shrink-0" });
		var node_44 = sibling(node_43, 2);
		var consequent_17 = ($$anchor) => {
			append($$anchor, root_17());
		};
		var d_2 = user_derived(() => hasRole("master_accountant"));
		var alternate_2 = ($$anchor) => {
			append($$anchor, root_18());
		};
		if_block(node_44, ($$render) => {
			if (get(d_2)) $$render(consequent_17);
			else $$render(alternate_2, -1);
		});
		reset(div_52);
		var node_45 = sibling(div_52, 2);
		{
			let $0 = user_derived(() => get(srSubmitting) || !get(canSalesReturn) || get(srAmount) <= 0 || get(srRefundMethod) !== "wallet" && !get(srSelectedAccountId) || get(srAmount) > get(srMaxRefundable) + .001);
			Button(node_45, {
				type: "submit",
				get disabled() {
					return get($0);
				},
				class: "h-10 px-6 rounded-xl font-bold bg-rose-600 hover:bg-rose-700 text-white cursor-pointer shadow-md flex items-center gap-2",
				children: ($$anchor, $$slotProps) => {
					var fragment_4 = comment();
					var node_46 = first_child(fragment_4);
					var consequent_18 = ($$anchor) => {
						var fragment_5 = root_19();
						Refresh_cw(first_child(fragment_5), { class: "h-4 w-4 animate-spin" });
						next(2);
						append($$anchor, fragment_5);
					};
					var alternate_3 = ($$anchor) => {
						var fragment_6 = root_20();
						var node_48 = first_child(fragment_6);
						Undo_2(node_48, { class: "h-4 w-4" });
						var span_18 = sibling(node_48, 2);
						var text_8 = child(span_18, true);
						reset(span_18);
						template_effect(($0) => set_text(text_8, $0), [() => hasRole("master_accountant") ? "Post & Auto-Approve Sales Return" : "Submit Sales Return for Approval"]);
						append($$anchor, fragment_6);
					};
					if_block(node_46, ($$render) => {
						if (get(srSubmitting)) $$render(consequent_18);
						else $$render(alternate_3, -1);
					});
					append($$anchor, fragment_4);
				},
				$$slots: { default: true }
			});
		}
		reset(div_51);
		reset(div_14);
		reset(form);
		template_effect(($0, $1, $2) => {
			set_class(button_4, 1, $0);
			set_class(button_5, 1, $1);
			set_class(button_6, 1, $2);
		}, [
			() => clsx(["p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col gap-1.5", get(srRefundMethod) === "bank" ? "bg-card border-primary ring-2 ring-primary/20 shadow-xs" : "bg-muted/20 border-border hover:bg-muted/40"].join(" ")),
			() => clsx(["p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col gap-1.5", get(srRefundMethod) === "cash" ? "bg-card border-primary ring-2 ring-primary/20 shadow-xs" : "bg-muted/20 border-border hover:bg-muted/40"].join(" ")),
			() => clsx(["p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col gap-1.5", get(srRefundMethod) === "wallet" ? "bg-card border-primary ring-2 ring-primary/20 shadow-xs" : "bg-muted/20 border-border hover:bg-muted/40"].join(" "))
		]);
		event("submit", form, submitSalesReturn);
		delegated("click", button_4, () => {
			set(srRefundMethod, "bank");
			set(srSelectedAccountId, get(bankAccountOptions)[0]?.id || "", true);
		});
		delegated("click", button_5, () => {
			set(srRefundMethod, "cash");
			set(srSelectedAccountId, get(cashAccountOptions)[0]?.id || "", true);
		});
		delegated("click", button_6, () => {
			set(srRefundMethod, "wallet");
			set(srSelectedAccountId, "");
		});
		append($$anchor, form);
	};
	var consequent_42 = ($$anchor) => {
		var form_1 = root_41();
		var div_53 = child(form_1);
		var div_54 = child(div_53);
		var div_55 = child(div_54);
		Rotate_ccw(child(div_55), { class: "h-5 w-5 text-emerald-500" });
		next(2);
		reset(div_55);
		next(2);
		reset(div_54);
		var div_56 = sibling(div_54, 2);
		SearchableSelect(sibling(child(div_56), 2), {
			id: "pr-sup",
			get options() {
				return get(supplierOptions);
			},
			placeholder: "-- Select Supplier --",
			searchPlaceholder: "Search supplier name or wallet...",
			required: true,
			onchange: () => {
				onSupplierChange();
			},
			get value() {
				return get(prSupplierId);
			},
			set value($$value) {
				set(prSupplierId, $$value, true);
			}
		});
		next(2);
		reset(div_56);
		var div_57 = sibling(div_56, 2);
		var div_58 = child(div_57);
		var node_51 = sibling(child(div_58), 2);
		var consequent_20 = ($$anchor) => {
			var span_19 = root_22();
			Refresh_cw(child(span_19), { class: "h-3 w-3 animate-spin" });
			next();
			reset(span_19);
			append($$anchor, span_19);
		};
		var consequent_21 = ($$anchor) => {
			const activeCount = user_derived(() => get(prAvailableServices).filter((s) => s.bookingCount > 0).length);
			var span_20 = root_23();
			var text_9 = child(span_20);
			reset(span_20);
			template_effect(() => set_text(text_9, `${get(activeCount) ?? ""} active service categor${get(activeCount) === 1 ? "y" : "ies"} linked`));
			append($$anchor, span_20);
		};
		if_block(node_51, ($$render) => {
			if (get(prLoadingServices)) $$render(consequent_20);
			else if (get(prSupplierId) && get(prAvailableServices).length > 0) $$render(consequent_21, 1);
		});
		reset(div_58);
		var node_53 = sibling(div_58, 2);
		var consequent_22 = ($$anchor) => {
			append($$anchor, root_24());
		};
		var consequent_23 = ($$anchor) => {
			var div_60 = root_25();
			Refresh_cw(child(div_60), { class: "h-4 w-4 animate-spin text-emerald-500" });
			next(2);
			reset(div_60);
			append($$anchor, div_60);
		};
		var alternate_4 = ($$anchor) => {
			var div_61 = root_28();
			each(div_61, 21, () => get(prAvailableServices), index, ($$anchor, s) => {
				const IconComponent = user_derived(() => get(s).icon);
				const isSelected = user_derived(() => get(prServiceType) === get(s).id);
				const hasBookings = user_derived(() => get(s).bookingCount > 0);
				var button_8 = root_27();
				var div_62 = child(button_8);
				var div_63 = child(div_62);
				component(child(div_63), () => get(IconComponent), ($$anchor, IconComponent_2) => {
					IconComponent_2($$anchor, { class: "h-4 w-4" });
				});
				reset(div_63);
				var div_64 = sibling(div_63, 2);
				var span_21 = child(div_64);
				var text_10 = child(span_21, true);
				reset(span_21);
				var span_22 = sibling(span_21, 2);
				var text_11 = child(span_22);
				reset(span_22);
				reset(div_64);
				reset(div_62);
				var node_56 = sibling(div_62, 2);
				var consequent_24 = ($$anchor) => {
					var span_23 = root_26();
					var text_12 = child(span_23);
					reset(span_23);
					template_effect(($0) => set_text(text_12, `${$0 ?? ""} BHD`), [() => get(s).refundableBalance.toFixed(3)]);
					append($$anchor, span_23);
				};
				if_block(node_56, ($$render) => {
					if (get(s).refundableBalance > 0) $$render(consequent_24);
				});
				reset(button_8);
				template_effect(($0, $1) => {
					set_class(button_8, 1, $0);
					set_class(div_63, 1, $1);
					set_text(text_10, get(s).label);
					set_text(text_11, `${get(s).bookingCount ?? ""} settled booking${get(s).bookingCount === 1 ? "" : "s"}`);
				}, [() => clsx(["p-3 rounded-xl border text-left transition-all flex items-start justify-between gap-2 cursor-pointer", get(isSelected) ? "bg-emerald-500/10 border-emerald-500 ring-1 ring-emerald-500/30 text-emerald-700 dark:text-emerald-300 font-bold shadow-xs" : get(hasBookings) ? "bg-card border-border hover:border-emerald-500/40 hover:bg-muted/40 text-foreground font-medium" : "bg-muted/15 border-border/50 text-muted-foreground opacity-60 hover:opacity-100 font-medium"].join(" ")), () => clsx(["p-2 rounded-lg", get(isSelected) ? "bg-emerald-500/20 text-emerald-600" : "bg-muted text-muted-foreground"].join(" "))]);
				delegated("click", button_8, () => {
					set(prServiceType, get(s).id, true);
					set(prSelectedBookingId, "");
					set(prSelectedBookingDetail, null);
					fetchPurchaseBookings();
				});
				append($$anchor, button_8);
			});
			reset(div_61);
			append($$anchor, div_61);
		};
		if_block(node_53, ($$render) => {
			if (!get(prSupplierId)) $$render(consequent_22);
			else if (get(prLoadingServices)) $$render(consequent_23, 1);
			else $$render(alternate_4, -1);
		});
		reset(div_57);
		var div_65 = sibling(div_57, 2);
		var div_66 = child(div_65);
		var node_57 = sibling(child(div_66), 2);
		var consequent_25 = ($$anchor) => {
			var span_24 = root_29();
			Refresh_cw(child(span_24), { class: "h-3 w-3 animate-spin" });
			next();
			reset(span_24);
			append($$anchor, span_24);
		};
		var alternate_5 = ($$anchor) => {
			var span_25 = root_6();
			var text_13 = child(span_25);
			reset(span_25);
			template_effect(() => set_text(text_13, `${get(prBookingsList).length ?? ""} matching booking(s) found`));
			append($$anchor, span_25);
		};
		if_block(node_57, ($$render) => {
			if (get(prLoadingBookings)) $$render(consequent_25);
			else $$render(alternate_5, -1);
		});
		reset(div_66);
		var node_59 = sibling(div_66, 2);
		{
			let $0 = user_derived(() => get(prBookingsList).length > 0 ? "-- Select Booking / Document Number --" : "-- No bookings found for this supplier --");
			SearchableSelect(node_59, {
				id: "pr-booking",
				get options() {
					return get(prBookingOptions);
				},
				get placeholder() {
					return get($0);
				},
				searchPlaceholder: "Search document number, ID, or passenger...",
				required: true,
				onchange: (val) => {
					fetchPurchaseBookingDetail(val);
				},
				get value() {
					return get(prSelectedBookingId);
				},
				set value($$value) {
					set(prSelectedBookingId, $$value, true);
				}
			});
		}
		var node_60 = sibling(node_59, 2);
		var consequent_26 = ($$anchor) => {
			const selectedSup = user_derived(() => get(suppliersList).find((s) => s.id === Number(get(prSupplierId))));
			const selectedService = user_derived(() => getServiceConfig(get(prServiceType)));
			var div_67 = root_30();
			var node_61 = child(div_67);
			Circle_alert(node_61, { class: "h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400" });
			var span_26 = sibling(node_61, 2);
			var strong_1 = sibling(child(span_26));
			var text_14 = child(strong_1, true);
			reset(strong_1);
			var strong_2 = sibling(strong_1, 2);
			var text_15 = child(strong_2, true);
			reset(strong_2);
			next();
			reset(span_26);
			reset(div_67);
			template_effect(() => {
				set_text(text_14, get(selectedService).label);
				set_text(text_15, get(selectedSup)?.name || "Selected Supplier");
			});
			append($$anchor, div_67);
		};
		if_block(node_60, ($$render) => {
			if (!get(prLoadingBookings) && get(prSupplierId) && get(prBookingsList).length === 0) $$render(consequent_26);
		});
		reset(div_65);
		var node_62 = sibling(div_65, 2);
		var consequent_27 = ($$anchor) => {
			var div_68 = root_31();
			Refresh_cw(child(div_68), { class: "h-4 w-4 animate-spin text-emerald-500" });
			next();
			reset(div_68);
			append($$anchor, div_68);
		};
		var consequent_33 = ($$anchor) => {
			const d = user_derived(() => get(prSelectedBookingDetail));
			var div_69 = root_36();
			var div_70 = child(div_69);
			var div_71 = child(div_70);
			var span_27 = child(div_71);
			var text_16 = child(span_27);
			reset(span_27);
			var span_28 = sibling(span_27, 2);
			var text_17 = child(span_28, true);
			reset(span_28);
			var span_29 = sibling(span_28, 2);
			var text_18 = child(span_29);
			reset(span_29);
			var node_64 = sibling(span_29, 2);
			var consequent_28 = ($$anchor) => {
				var span_30 = root_8();
				Lock(child(span_30), { class: "h-3 w-3 text-emerald-700" });
				next();
				reset(span_30);
				append($$anchor, span_30);
			};
			if_block(node_64, ($$render) => {
				if (get(prIsDealClosed)) $$render(consequent_28);
			});
			reset(div_71);
			var div_72 = sibling(div_71, 2);
			var strong_3 = sibling(child(div_72));
			var text_19 = child(strong_3, true);
			reset(strong_3);
			reset(div_72);
			reset(div_70);
			var div_73 = sibling(div_70, 2);
			var div_74 = child(div_73);
			var span_31 = sibling(child(div_74), 2);
			var node_66 = child(span_31);
			{
				let $0 = user_derived(() => Number(get(d).expectedSupplierCost ?? get(d).expected_supplier_cost ?? 0));
				MoneyDisplay(node_66, { get amount() {
					return get($0);
				} });
			}
			reset(span_31);
			reset(div_74);
			var div_75 = sibling(div_74, 2);
			var span_32 = sibling(child(div_75), 2);
			var node_67 = child(span_32);
			{
				let $0 = user_derived(() => get(prSupplierInfo)?.totalPaid ?? 0);
				MoneyDisplay(node_67, { get amount() {
					return get($0);
				} });
			}
			reset(span_32);
			reset(div_75);
			var div_76 = sibling(div_75, 2);
			var span_33 = sibling(child(div_76), 2);
			var node_68 = child(span_33);
			{
				let $0 = user_derived(() => get(prSupplierInfo)?.totalReturned ?? 0);
				MoneyDisplay(node_68, { get amount() {
					return get($0);
				} });
			}
			reset(span_33);
			reset(div_76);
			var div_77 = sibling(div_76, 2);
			var span_34 = sibling(child(div_77), 2);
			var node_69 = child(span_34);
			{
				let $0 = user_derived(() => get(prSupplierInfo)?.maxRefundable ?? 0);
				MoneyDisplay(node_69, { get amount() {
					return get($0);
				} });
			}
			reset(span_34);
			reset(div_77);
			reset(div_73);
			var node_70 = sibling(div_73, 2);
			var consequent_29 = ($$anchor) => {
				var div_78 = root_32();
				var node_71 = child(div_78);
				Info(node_71, { class: "h-4 w-4 shrink-0 mt-0.5 text-blue-600 dark:text-blue-400" });
				var div_79 = sibling(node_71, 2);
				var span_35 = sibling(child(div_79), 2);
				var text_20 = child(span_35, true);
				reset(span_35);
				next();
				reset(div_79);
				reset(div_78);
				template_effect(() => set_text(text_20, get(d).paymentStatus || "Pending"));
				append($$anchor, div_78);
			};
			if_block(node_70, ($$render) => {
				if (!get(prIsPaymentConfirmed)) $$render(consequent_29);
			});
			var node_72 = sibling(node_70, 2);
			var consequent_30 = ($$anchor) => {
				var div_80 = root_33();
				Circle_alert(child(div_80), { class: "h-4 w-4 shrink-0 mt-0.5 text-amber-600 dark:text-amber-400" });
				next(2);
				reset(div_80);
				append($$anchor, div_80);
			};
			var consequent_31 = ($$anchor) => {
				var div_81 = root_34();
				Info(child(div_81), { class: "h-4 w-4 shrink-0 mt-0.5" });
				next(2);
				reset(div_81);
				append($$anchor, div_81);
			};
			if_block(node_72, ($$render) => {
				if (!get(prSupplierInfo)?.hasApprovedPayment && (get(prSupplierInfo)?.totalPaid ?? 0) === 0) $$render(consequent_30);
				else if ((get(prSupplierInfo)?.totalPaid ?? 0) > 0 && (get(prSupplierInfo)?.maxRefundable ?? 0) <= 0) $$render(consequent_31, 1);
			});
			var node_75 = sibling(node_72, 2);
			var consequent_32 = ($$anchor) => {
				var div_82 = root_35();
				Lock(child(div_82), { class: "h-4 w-4 shrink-0 mt-0.5 text-emerald-600 dark:text-emerald-400" });
				next(2);
				reset(div_82);
				append($$anchor, div_82);
			};
			if_block(node_75, ($$render) => {
				if (get(prIsDealClosed)) $$render(consequent_32);
			});
			reset(div_69);
			template_effect(($0) => {
				set_text(text_16, `${get(prServiceType) ?? ""} Supplier Costs`);
				set_text(text_17, get(d).documentNumber || "#" + get(prSelectedBookingId));
				set_class(span_29, 1, `text-[11px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wide ${get(prIsPaymentConfirmed) ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800"}`);
				set_text(text_18, `Payment: ${(get(d).paymentStatus || "Pending") ?? ""}`);
				set_text(text_19, $0);
			}, [() => get(suppliersList).find((s) => s.id === Number(get(prSupplierId)))?.name || get(d).supplierName || "Supplier"]);
			append($$anchor, div_69);
		};
		if_block(node_62, ($$render) => {
			if (get(prLoadingDetail)) $$render(consequent_27);
			else if (get(prSelectedBookingDetail)) $$render(consequent_33, 1);
		});
		var div_83 = sibling(node_62, 2);
		var div_84 = sibling(child(div_83), 2);
		var button_9 = child(div_84);
		var div_85 = child(button_9);
		var span_36 = child(div_85);
		Landmark(child(span_36), { class: "h-4 w-4 text-emerald-500" });
		next();
		reset(span_36);
		var node_78 = sibling(span_36, 2);
		var consequent_34 = ($$anchor) => {
			Check($$anchor, { class: "h-3.5 w-3.5 text-emerald-500" });
		};
		if_block(node_78, ($$render) => {
			if (get(prDestinationType) === "bank") $$render(consequent_34);
		});
		reset(div_85);
		next(2);
		reset(button_9);
		var button_10 = sibling(button_9, 2);
		var div_86 = child(button_10);
		var span_37 = child(div_86);
		Coins(child(span_37), { class: "h-4 w-4 text-emerald-500" });
		next();
		reset(span_37);
		var node_80 = sibling(span_37, 2);
		var consequent_35 = ($$anchor) => {
			Check($$anchor, { class: "h-3.5 w-3.5 text-emerald-500" });
		};
		if_block(node_80, ($$render) => {
			if (get(prDestinationType) === "cash") $$render(consequent_35);
		});
		reset(div_86);
		next(2);
		reset(button_10);
		var button_11 = sibling(button_10, 2);
		var div_87 = child(button_11);
		var span_38 = child(div_87);
		Wallet(child(span_38), { class: "h-4 w-4 text-emerald-500" });
		next();
		reset(span_38);
		var node_82 = sibling(span_38, 2);
		var consequent_36 = ($$anchor) => {
			Check($$anchor, { class: "h-3.5 w-3.5 text-emerald-500" });
		};
		if_block(node_82, ($$render) => {
			if (get(prDestinationType) === "wallet") $$render(consequent_36);
		});
		reset(div_87);
		next(2);
		reset(button_11);
		reset(div_84);
		var node_83 = sibling(div_84, 2);
		var consequent_37 = ($$anchor) => {
			var div_88 = root_37();
			SearchableSelect(sibling(child(div_88), 2), {
				id: "pr-bank-select",
				get options() {
					return get(bankAccountOptions);
				},
				placeholder: "-- Select Bank Account --",
				searchPlaceholder: "Search bank name or account number...",
				required: true,
				get value() {
					return get(prSelectedAccountId);
				},
				set value($$value) {
					set(prSelectedAccountId, $$value, true);
				}
			});
			reset(div_88);
			append($$anchor, div_88);
		};
		var consequent_38 = ($$anchor) => {
			var div_89 = root_38();
			SearchableSelect(sibling(child(div_89), 2), {
				id: "pr-cash-select",
				get options() {
					return get(cashAccountOptions);
				},
				placeholder: "-- Select Cash Account --",
				searchPlaceholder: "Search cash drawer name...",
				required: true,
				get value() {
					return get(prSelectedAccountId);
				},
				set value($$value) {
					set(prSelectedAccountId, $$value, true);
				}
			});
			reset(div_89);
			append($$anchor, div_89);
		};
		if_block(node_83, ($$render) => {
			if (get(prDestinationType) === "bank") $$render(consequent_37);
			else if (get(prDestinationType) === "cash") $$render(consequent_38, 1);
		});
		reset(div_83);
		var div_90 = sibling(div_83, 2);
		var div_91 = child(div_90);
		var div_92 = child(div_91);
		var node_86 = sibling(child(div_92), 2);
		var consequent_39 = ($$anchor) => {
			var button_12 = root_39();
			var text_21 = child(button_12);
			reset(button_12);
			template_effect(($0) => set_text(text_21, `Max (${$0 ?? ""} BHD)`), [() => get(prSupplierInfo).maxRefundable.toFixed(3)]);
			delegated("click", button_12, () => {
				set(prAmount, get(prSupplierInfo).maxRefundable, true);
			});
			append($$anchor, button_12);
		};
		if_block(node_86, ($$render) => {
			if (get(prSupplierInfo)) $$render(consequent_39);
		});
		reset(div_92);
		var node_87 = sibling(div_92, 2);
		{
			let $0 = user_derived(() => (get(prSupplierInfo)?.maxRefundable ?? 0) + .001);
			Input(node_87, {
				id: "pr-amt",
				type: "number",
				step: "0.001",
				min: "0.001",
				get max() {
					return get($0);
				},
				required: true,
				placeholder: "0.000",
				get value() {
					return get(prAmount);
				},
				set value($$value) {
					set(prAmount, $$value, true);
				}
			});
		}
		reset(div_91);
		var div_93 = sibling(div_91, 2);
		Input(sibling(child(div_93), 2), {
			id: "pr-reason-text",
			type: "text",
			required: true,
			placeholder: "Reason for supplier refund...",
			get value() {
				return get(prReason);
			},
			set value($$value) {
				set(prReason, $$value, true);
			}
		});
		reset(div_93);
		reset(div_90);
		var div_94 = sibling(div_90, 2);
		var div_95 = child(div_94);
		var node_89 = child(div_95);
		Info(node_89, { class: "h-4 w-4 text-emerald-500 shrink-0" });
		var node_90 = sibling(node_89, 2);
		var consequent_40 = ($$anchor) => {
			append($$anchor, root_17());
		};
		var d_3 = user_derived(() => hasRole("master_accountant"));
		var alternate_6 = ($$anchor) => {
			append($$anchor, root_18());
		};
		if_block(node_90, ($$render) => {
			if (get(d_3)) $$render(consequent_40);
			else $$render(alternate_6, -1);
		});
		reset(div_95);
		var node_91 = sibling(div_95, 2);
		{
			let $0 = user_derived(() => get(prSubmitting) || !get(canPurchaseReturn) || !get(prSupplierId) || get(prAmount) <= 0 || get(prDestinationType) !== "wallet" && !get(prSelectedAccountId) || get(prSupplierInfo) && get(prSupplierInfo).maxRefundable > 0 && get(prAmount) > get(prSupplierInfo).maxRefundable + .001);
			Button(node_91, {
				type: "submit",
				get disabled() {
					return get($0);
				},
				class: "h-10 px-6 rounded-xl font-bold bg-emerald-600 hover:bg-emerald-700 text-white cursor-pointer shadow-md flex items-center gap-2",
				children: ($$anchor, $$slotProps) => {
					var fragment_10 = comment();
					var node_92 = first_child(fragment_10);
					var consequent_41 = ($$anchor) => {
						var fragment_11 = root_40();
						Refresh_cw(first_child(fragment_11), { class: "h-4 w-4 animate-spin" });
						next(2);
						append($$anchor, fragment_11);
					};
					var alternate_7 = ($$anchor) => {
						var fragment_12 = root_20();
						var node_94 = first_child(fragment_12);
						Rotate_ccw(node_94, { class: "h-4 w-4" });
						var span_41 = sibling(node_94, 2);
						var text_22 = child(span_41, true);
						reset(span_41);
						template_effect(($0) => set_text(text_22, $0), [() => hasRole("master_accountant") ? "Post & Auto-Approve Purchase Return" : "Submit Purchase Return for Approval"]);
						append($$anchor, fragment_12);
					};
					if_block(node_92, ($$render) => {
						if (get(prSubmitting)) $$render(consequent_41);
						else $$render(alternate_7, -1);
					});
					append($$anchor, fragment_10);
				},
				$$slots: { default: true }
			});
		}
		reset(div_94);
		reset(div_53);
		reset(form_1);
		template_effect(($0, $1, $2) => {
			set_class(button_9, 1, $0);
			set_class(button_10, 1, $1);
			set_class(button_11, 1, $2);
		}, [
			() => clsx(["p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col gap-1.5", get(prDestinationType) === "bank" ? "bg-card border-emerald-500 ring-2 ring-emerald-500/20 shadow-xs" : "bg-muted/20 border-border hover:bg-muted/40"].join(" ")),
			() => clsx(["p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col gap-1.5", get(prDestinationType) === "cash" ? "bg-card border-emerald-500 ring-2 ring-emerald-500/20 shadow-xs" : "bg-muted/20 border-border hover:bg-muted/40"].join(" ")),
			() => clsx(["p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col gap-1.5", get(prDestinationType) === "wallet" ? "bg-card border-emerald-500 ring-2 ring-emerald-500/20 shadow-xs" : "bg-muted/20 border-border hover:bg-muted/40"].join(" "))
		]);
		event("submit", form_1, submitPurchaseReturn);
		delegated("click", button_9, () => {
			set(prDestinationType, "bank");
			set(prSelectedAccountId, get(bankAccountOptions)[0]?.id || "", true);
		});
		delegated("click", button_10, () => {
			set(prDestinationType, "cash");
			set(prSelectedAccountId, get(cashAccountOptions)[0]?.id || "", true);
		});
		delegated("click", button_11, () => {
			set(prDestinationType, "wallet");
			set(prSelectedAccountId, "");
		});
		append($$anchor, form_1);
	};
	if_block(node_8, ($$render) => {
		if (get(activeTab) === "sales") $$render(consequent_19);
		else if (get(activeTab) === "purchase") $$render(consequent_42, 1);
	});
	reset(div);
	template_effect(($0, $1, $2, $3) => {
		set_class(button_1, 1, $0);
		set_class(div_9, 1, $1);
		set_class(button_2, 1, $2);
		set_class(div_12, 1, $3);
	}, [
		() => clsx(["p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between relative overflow-hidden", get(activeTab) === "purchase" ? "bg-card border-emerald-500/60 ring-2 ring-emerald-500/20 shadow-md" : "bg-card/60 border-border hover:border-border/80 hover:bg-card"].join(" ")),
		() => clsx(["p-2.5 rounded-xl transition-colors", get(activeTab) === "purchase" ? "bg-emerald-500 text-white" : "bg-muted text-muted-foreground"].join(" ")),
		() => clsx(["p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between relative overflow-hidden", get(activeTab) === "sales" ? "bg-card border-rose-500/60 ring-2 ring-rose-500/20 shadow-md" : "bg-card/60 border-border hover:border-border/80 hover:bg-card"].join(" ")),
		() => clsx(["p-2.5 rounded-xl transition-colors", get(activeTab) === "sales" ? "bg-rose-500 text-white" : "bg-muted text-muted-foreground"].join(" "))
	]);
	delegated("click", button, () => goto("/suppliers/returns"));
	delegated("click", button_1, () => {
		set(activeTab, "purchase");
	});
	delegated("click", button_2, () => {
		set(activeTab, "sales");
	});
	append($$anchor, div);
	pop();
	$$cleanup();
}
delegate(["click"]);
//#endregion
export { _page as component };

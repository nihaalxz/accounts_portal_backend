import { B as append, Bt as reset, Ct as user_derived, D as head, Et as store_get, H as from_html, I as if_block, J as event, K as delegate, M as slot, Nt as pop, Pt as push, Q as get, R as set_text, Tt as setup_stores, V as comment, _ as set_attribute, a as legacy_rest_props, bt as state, c as spread_props, dt as $document, ht as sibling, it as effect, mt as first_child, ot as template_effect, pt as child, q as delegated, u as bind_this, vt as set, zt as next } from "../chunks/dXkmWTgM.js";
import "../chunks/DhaYE-8x.js";
import { t as apiFetch } from "../chunks/CUuZr60v.js";
import { l as updateCurrentUserProfile, r as currentUser } from "../chunks/DSlXuipt.js";
import "../chunks/DZfWAsjW.js";
import { r as toast } from "../chunks/CbPRQHfn.js";
import { t as Icon } from "../chunks/BalaELqB.js";
import { t as Refresh_cw } from "../chunks/DpTJy0Wb2.js";
import { t as Save } from "../chunks/YnLTLont.js";
import { t as User } from "../chunks/C8PICJbu.js";
import { t as Button } from "../chunks/BhXsq3bC.js";
import { t as Input } from "../chunks/C4xMLgho2.js";
//#region node_modules/lucide-svelte/dist/icons/camera.svelte
function Camera($$anchor, $$props) {
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
	const iconNode = [["path", { "d": "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z" }], ["circle", {
		"cx": "12",
		"cy": "13",
		"r": "3"
	}]];
	/**
	* @component @name Camera
	* @description Lucide SVG icon component, renders SVG Element with children.
	*
	* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTMuOTk3IDRhMiAyIDAgMCAxIDEuNzYgMS4wNWwuNDg2LjlBMiAyIDAgMCAwIDE4LjAwMyA3SDIwYTIgMiAwIDAgMSAyIDJ2OWEyIDIgMCAwIDEtMiAySDRhMiAyIDAgMCAxLTItMlY5YTIgMiAwIDAgMSAyLTJoMS45OTdhMiAyIDAgMCAwIDEuNzU5LTEuMDQ4bC40ODktLjkwNEEyIDIgMCAwIDEgMTAuMDA0IDR6IiAvPgogIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTMiIHI9IjMiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/camera
	* @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
	*
	* @param {Object} props - Lucide icons props and any valid SVG attribute
	* @returns {FunctionalComponent} Svelte component
	*
	*/
	Icon($$anchor, spread_props({ name: "camera" }, () => $$sanitized_props, {
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
//#region node_modules/lucide-svelte/dist/icons/key.svelte
function Key($$anchor, $$props) {
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
		["path", { "d": "m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4" }],
		["path", { "d": "m21 2-9.6 9.6" }],
		["circle", {
			"cx": "7.5",
			"cy": "15.5",
			"r": "5.5"
		}]
	];
	/**
	* @component @name Key
	* @description Lucide SVG icon component, renders SVG Element with children.
	*
	* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMTUuNSA3LjUgMi4zIDIuM2ExIDEgMCAwIDAgMS40IDBsMi4xLTIuMWExIDEgMCAwIDAgMC0xLjRMMTkgNCIgLz4KICA8cGF0aCBkPSJtMjEgMi05LjYgOS42IiAvPgogIDxjaXJjbGUgY3g9IjcuNSIgY3k9IjE1LjUiIHI9IjUuNSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/key
	* @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
	*
	* @param {Object} props - Lucide icons props and any valid SVG attribute
	* @returns {FunctionalComponent} Svelte component
	*
	*/
	Icon($$anchor, spread_props({ name: "key" }, () => $$sanitized_props, {
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
//#region src/routes/(app)/profile/+page.svelte
var root = from_html(`<img class="h-32 w-32 rounded-full object-cover border border-primary/20 shadow-md group-hover:opacity-85 transition-opacity" alt="Avatar Preview"/>`);
var root_1 = from_html(`<img class="h-32 w-32 rounded-full object-cover border border-primary/20 shadow-md group-hover:opacity-85 transition-opacity" alt="Current Avatar"/>`);
var root_2 = from_html(`<div class="h-32 w-32 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-3xl border border-primary/20 shadow-md group-hover:bg-primary/15 transition-colors"> </div>`);
var root_3 = from_html(`<!> Saving...`, 1);
var root_4 = from_html(`<!> Save Profile`, 1);
var root_5 = from_html(`<div class="space-y-6"><div class="flex flex-col gap-1"><h1 class="text-xl font-bold text-foreground flex items-center gap-2"><!> My Profile</h1> <p class="text-xs text-muted-foreground">Manage your personal account settings, profile picture, and login credentials.</p></div> <div class="grid grid-cols-1 lg:grid-cols-4 gap-6"><div class="bg-card border border-border rounded-2xl p-6 shadow-xs flex flex-col items-center justify-center text-center space-y-4"><span class="text-xs font-bold text-foreground self-start">Profile Photo</span> <div class="relative group cursor-pointer" role="button" tabindex="0"><!> <div class="absolute inset-0 bg-black/40 rounded-full opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity text-white text-[11px] font-semibold gap-1"><!> Change Photo</div></div> <input type="file" accept="image/*" class="hidden"/> <div class="space-y-1"><p class="text-xs font-bold text-foreground"> </p> <p class="text-[10px] text-muted-foreground"> </p> <span class="inline-flex text-[9px] uppercase tracking-wider font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full mt-1.5"> </span></div> <p class="text-[10px] text-muted-foreground/60 px-4">JPG, PNG, or WEBP. Max size 1.5MB. Stored directly to your account.</p></div> <div class="bg-card border border-border rounded-2xl p-6 shadow-xs lg:col-span-3"><form class="space-y-6"><div class="space-y-4"><h3 class="text-xs font-bold text-foreground flex items-center gap-1.5 border-b border-border/50 pb-2"><!> Profile Info</h3> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs"><div class="space-y-1.5"><label class="block font-semibold text-muted-foreground" for="user-name">Full Name</label> <!></div> <div class="space-y-1.5"><label class="block font-semibold text-muted-foreground" for="user-email">Email Address</label> <!></div></div></div> <div class="space-y-4 pt-2"><h3 class="text-xs font-bold text-foreground flex items-center gap-1.5 border-b border-border/50 pb-2"><!> Change Password</h3> <div class="space-y-3 text-xs"><div class="space-y-1.5 max-w-md"><label class="block font-semibold text-foreground" for="p-current">Current Password</label> <!></div> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><div class="space-y-1.5"><label class="block font-semibold text-foreground" for="p-new">New Password</label> <!></div> <div class="space-y-1.5"><label class="block font-semibold text-foreground" for="p-confirm">Confirm New Password</label> <!></div></div></div></div> <div class="flex justify-end pt-4 border-t border-border/50"><!></div></form></div></div></div>`);
function _page($$anchor, $$props) {
	push($$props, true);
	const $currentUser = () => store_get(currentUser, "$currentUser", $$stores);
	const [$$stores, $$cleanup] = setup_stores();
	let previewUrl = state(null);
	let currentPassword = state("");
	let newPassword = state("");
	let confirmPassword = state("");
	let isSaving = state(false);
	let fileInputRef = state(null);
	const userInitials = user_derived(() => () => {
		return ($currentUser()?.name ?? "").split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase() || "AC";
	});
	function handleFileChange(e) {
		const file = e.target.files?.[0];
		if (!file) return;
		if (file.size > 1.5 * 1024 * 1024) {
			toast.error("Image size must be less than 1.5MB.");
			return;
		}
		const reader = new FileReader();
		reader.onload = (ev) => {
			set(previewUrl, ev.target?.result, true);
		};
		reader.readAsDataURL(file);
	}
	function triggerFileInput() {
		get(fileInputRef)?.click();
	}
	async function handleSaveProfile(e) {
		e.preventDefault();
		if (get(newPassword) && get(newPassword) !== get(confirmPassword)) {
			toast.error("New password and confirmation do not match.");
			return;
		}
		if (get(newPassword) && !get(currentPassword)) {
			toast.error("Current password is required to change password.");
			return;
		}
		set(isSaving, true);
		try {
			const body = {};
			if (get(newPassword)) {
				body.currentPassword = get(currentPassword);
				body.newPassword = get(newPassword);
			}
			if (get(previewUrl)) body.profilePicture = get(previewUrl);
			const response = await apiFetch("api/auth/profile", {
				method: "PUT",
				body: JSON.stringify(body),
				headers: { "Content-Type": "application/json" }
			});
			toast.success(response.message || "Profile updated successfully.");
			if (response.profilePicture) updateCurrentUserProfile(response.profilePicture);
			set(currentPassword, "");
			set(newPassword, "");
			set(confirmPassword, "");
			set(previewUrl, null);
		} catch (err) {
			toast.error(err.message || "Failed to update profile.");
		} finally {
			set(isSaving, false);
		}
	}
	var div = root_5();
	head("b6jup3", ($$anchor) => {
		effect(() => {
			$document.title = "My Profile — Accounts Portal";
		});
	});
	var div_1 = child(div);
	var h1 = child(div_1);
	User(child(h1), { class: "h-5 w-5 text-primary" });
	next();
	reset(h1);
	next(2);
	reset(div_1);
	var div_2 = sibling(div_1, 2);
	var div_3 = child(div_2);
	var div_4 = sibling(child(div_3), 2);
	var node_1 = child(div_4);
	var consequent = ($$anchor) => {
		var img = root();
		template_effect(() => set_attribute(img, "src", get(previewUrl)));
		append($$anchor, img);
	};
	var consequent_1 = ($$anchor) => {
		var img_1 = root_1();
		template_effect(() => set_attribute(img_1, "src", $currentUser().profilePicture));
		append($$anchor, img_1);
	};
	var alternate = ($$anchor) => {
		var div_5 = root_2();
		var text = child(div_5, true);
		reset(div_5);
		template_effect(($0) => set_text(text, $0), [() => get(userInitials)()]);
		append($$anchor, div_5);
	};
	if_block(node_1, ($$render) => {
		if (get(previewUrl)) $$render(consequent);
		else if ($currentUser()?.profilePicture) $$render(consequent_1, 1);
		else $$render(alternate, -1);
	});
	var div_6 = sibling(node_1, 2);
	Camera(child(div_6), { class: "h-4 w-4" });
	next();
	reset(div_6);
	reset(div_4);
	var input = sibling(div_4, 2);
	bind_this(input, ($$value) => set(fileInputRef, $$value), () => get(fileInputRef));
	var div_7 = sibling(input, 2);
	var p = child(div_7);
	var text_1 = child(p, true);
	reset(p);
	var p_1 = sibling(p, 2);
	var text_2 = child(p_1, true);
	reset(p_1);
	var span = sibling(p_1, 2);
	var text_3 = child(span, true);
	reset(span);
	reset(div_7);
	next(2);
	reset(div_3);
	var div_8 = sibling(div_3, 2);
	var form = child(div_8);
	var div_9 = child(form);
	var h3 = child(div_9);
	User(child(h3), { class: "h-3.5 w-3.5 text-primary" });
	next();
	reset(h3);
	var div_10 = sibling(h3, 2);
	var div_11 = child(div_10);
	var node_4 = sibling(child(div_11), 2);
	{
		let $0 = user_derived(() => $currentUser()?.name);
		Input(node_4, {
			id: "user-name",
			type: "text",
			get value() {
				return get($0);
			},
			disabled: true,
			class: "bg-muted/30"
		});
	}
	reset(div_11);
	var div_12 = sibling(div_11, 2);
	var node_5 = sibling(child(div_12), 2);
	{
		let $0 = user_derived(() => $currentUser()?.email);
		Input(node_5, {
			id: "user-email",
			type: "email",
			get value() {
				return get($0);
			},
			disabled: true,
			class: "bg-muted/30"
		});
	}
	reset(div_12);
	reset(div_10);
	reset(div_9);
	var div_13 = sibling(div_9, 2);
	var h3_1 = child(div_13);
	Key(child(h3_1), { class: "h-3.5 w-3.5 text-primary" });
	next();
	reset(h3_1);
	var div_14 = sibling(h3_1, 2);
	var div_15 = child(div_14);
	Input(sibling(child(div_15), 2), {
		id: "p-current",
		type: "password",
		placeholder: "Enter current password to authorize changes",
		get value() {
			return get(currentPassword);
		},
		set value($$value) {
			set(currentPassword, $$value, true);
		}
	});
	reset(div_15);
	var div_16 = sibling(div_15, 2);
	var div_17 = child(div_16);
	Input(sibling(child(div_17), 2), {
		id: "p-new",
		type: "password",
		placeholder: "Minimum 6 characters",
		get value() {
			return get(newPassword);
		},
		set value($$value) {
			set(newPassword, $$value, true);
		}
	});
	reset(div_17);
	var div_18 = sibling(div_17, 2);
	Input(sibling(child(div_18), 2), {
		id: "p-confirm",
		type: "password",
		placeholder: "Re-type new password",
		get value() {
			return get(confirmPassword);
		},
		set value($$value) {
			set(confirmPassword, $$value, true);
		}
	});
	reset(div_18);
	reset(div_16);
	reset(div_14);
	reset(div_13);
	var div_19 = sibling(div_13, 2);
	var node_10 = child(div_19);
	{
		let $0 = user_derived(() => get(isSaving) || !get(previewUrl) && !get(newPassword));
		Button(node_10, {
			type: "submit",
			get disabled() {
				return get($0);
			},
			class: "rounded-xl h-9 px-5 text-xs font-semibold gap-1.5 cursor-pointer",
			children: ($$anchor, $$slotProps) => {
				var fragment = comment();
				var node_11 = first_child(fragment);
				var consequent_2 = ($$anchor) => {
					var fragment_1 = root_3();
					Refresh_cw(first_child(fragment_1), { class: "h-3.5 w-3.5 animate-spin" });
					next();
					append($$anchor, fragment_1);
				};
				var alternate_1 = ($$anchor) => {
					var fragment_2 = root_4();
					Save(first_child(fragment_2), { class: "h-3.5 w-3.5" });
					next();
					append($$anchor, fragment_2);
				};
				if_block(node_11, ($$render) => {
					if (get(isSaving)) $$render(consequent_2);
					else $$render(alternate_1, -1);
				});
				append($$anchor, fragment);
			},
			$$slots: { default: true }
		});
	}
	reset(div_19);
	reset(form);
	reset(div_8);
	reset(div_2);
	reset(div);
	template_effect(($0) => {
		set_text(text_1, $currentUser()?.name);
		set_text(text_2, $currentUser()?.email);
		set_text(text_3, $0);
	}, [() => ($currentUser()?.userType || "").replace(/_/g, " ")]);
	delegated("click", div_4, triggerFileInput);
	delegated("keydown", div_4, (e) => e.key === "Enter" && triggerFileInput());
	delegated("change", input, handleFileChange);
	event("submit", form, handleSaveProfile);
	append($$anchor, div);
	pop();
	$$cleanup();
}
delegate([
	"click",
	"keydown",
	"change"
]);
//#endregion
export { _page as component };

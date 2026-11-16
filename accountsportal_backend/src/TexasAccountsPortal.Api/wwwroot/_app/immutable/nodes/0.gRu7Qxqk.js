import { t as __exportAll } from "../chunks/BP_521ii.js";
import { B as append, Bt as reset, Ct as user_derived, D as head, Et as store_get, H as from_html, I as if_block, Nt as pop, Pt as push, Q as get, Tt as setup_stores, V as comment, _ as set_attribute, ht as sibling, j as snippet, mt as first_child, ot as template_effect, pt as child, r as onMount, w as set_class } from "../chunks/dXkmWTgM.js";
import "../chunks/DhaYE-8x.js";
import { n as bootstrapSession, o as isInitializing, r as currentUser } from "../chunks/C_C7GfFb.js";
import { t as Toaster } from "../chunks/C39wR_T22.js";
import { t as BAHRAIN_TIMEZONE } from "../chunks/Cu8_Vl4p.js";
//#region src/routes/+layout.ts
var _layout_exports = /* @__PURE__ */ __exportAll({
	prerender: () => false,
	ssr: () => false
});
//#endregion
//#region src/lib/assets/favicon.svg
var favicon_default = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='107'%20height='128'%20viewBox='0%200%20107%20128'%3e%3ctitle%3esvelte-logo%3c/title%3e%3cpath%20d='M94.157%2022.819c-10.4-14.885-30.94-19.297-45.792-9.835L22.282%2029.608A29.92%2029.92%200%200%200%208.764%2049.65a31.5%2031.5%200%200%200%203.108%2020.231%2030%2030%200%200%200-4.477%2011.183%2031.9%2031.9%200%200%200%205.448%2024.116c10.402%2014.887%2030.942%2019.297%2045.791%209.835l26.083-16.624A29.92%2029.92%200%200%200%2098.235%2078.35a31.53%2031.53%200%200%200-3.105-20.232%2030%2030%200%200%200%204.474-11.182%2031.88%2031.88%200%200%200-5.447-24.116'%20style='fill:%23ff3e00'/%3e%3cpath%20d='M45.817%20106.582a20.72%2020.72%200%200%201-22.237-8.243%2019.17%2019.17%200%200%201-3.277-14.503%2018%2018%200%200%201%20.624-2.435l.49-1.498%201.337.981a33.6%2033.6%200%200%200%2010.203%205.098l.97.294-.09.968a5.85%205.85%200%200%200%201.052%203.878%206.24%206.24%200%200%200%206.695%202.485%205.8%205.8%200%200%200%201.603-.704L69.27%2076.28a5.43%205.43%200%200%200%202.45-3.631%205.8%205.8%200%200%200-.987-4.371%206.24%206.24%200%200%200-6.698-2.487%205.7%205.7%200%200%200-1.6.704l-9.953%206.345a19%2019%200%200%201-5.296%202.326%2020.72%2020.72%200%200%201-22.237-8.243%2019.17%2019.17%200%200%201-3.277-14.502%2017.99%2017.99%200%200%201%208.13-12.052l26.081-16.623a19%2019%200%200%201%205.3-2.329%2020.72%2020.72%200%200%201%2022.237%208.243%2019.17%2019.17%200%200%201%203.277%2014.503%2018%2018%200%200%201-.624%202.435l-.49%201.498-1.337-.98a33.6%2033.6%200%200%200-10.203-5.1l-.97-.294.09-.968a5.86%205.86%200%200%200-1.052-3.878%206.24%206.24%200%200%200-6.696-2.485%205.8%205.8%200%200%200-1.602.704L37.73%2051.72a5.42%205.42%200%200%200-2.449%203.63%205.79%205.79%200%200%200%20.986%204.372%206.24%206.24%200%200%200%206.698%202.486%205.8%205.8%200%200%200%201.602-.704l9.952-6.342a19%2019%200%200%201%205.295-2.328%2020.72%2020.72%200%200%201%2022.237%208.242%2019.17%2019.17%200%200%201%203.277%2014.503%2018%2018%200%200%201-8.13%2012.053l-26.081%2016.622a19%2019%200%200%201-5.3%202.328'%20style='fill:%23fff'/%3e%3c/svg%3e";
//#endregion
//#region src/lib/formatters/timezone-defaults.ts
/**
* Initializes global client-side timezone defaults for Bahrain (UTC+3 / AST).
* Patches Date.prototype methods safely with defensive fallback so that any ad-hoc
* toLocaleString / toLocaleDateString / toLocaleTimeString calls across third-party libs
* or components automatically respect Asia/Bahrain rather than the visitor's machine timezone.
*/
function initBahrainTimezoneDefaults() {
	if (typeof window === "undefined") return;
	if (window.__bahrain_timezone_initialized) return;
	window.__bahrain_timezone_initialized = true;
	const origToLocaleString = Date.prototype.toLocaleString;
	Date.prototype.toLocaleString = function(locales, options) {
		try {
			const opts = typeof options === "object" && options !== null ? { ...options } : {};
			if (!opts.timeZone) opts.timeZone = BAHRAIN_TIMEZONE;
			return origToLocaleString.call(this, locales || "en-US", opts);
		} catch {
			return origToLocaleString.apply(this, arguments);
		}
	};
	const origToLocaleDateString = Date.prototype.toLocaleDateString;
	Date.prototype.toLocaleDateString = function(locales, options) {
		try {
			const opts = typeof options === "object" && options !== null ? { ...options } : {};
			if (!opts.timeZone) opts.timeZone = BAHRAIN_TIMEZONE;
			return origToLocaleDateString.call(this, locales || "en-US", opts);
		} catch {
			return origToLocaleDateString.apply(this, arguments);
		}
	};
	const origToLocaleTimeString = Date.prototype.toLocaleTimeString;
	Date.prototype.toLocaleTimeString = function(locales, options) {
		try {
			const opts = typeof options === "object" && options !== null ? { ...options } : {};
			if (!opts.timeZone) opts.timeZone = BAHRAIN_TIMEZONE;
			return origToLocaleTimeString.call(this, locales || "en-US", opts);
		} catch {
			return origToLocaleTimeString.apply(this, arguments);
		}
	};
}
//#endregion
//#region src/routes/+layout.svelte
var root = from_html(`<link rel="icon"/>`);
var root_1 = from_html(`<div class="h-[100dvh] w-full flex flex-col items-center justify-center bg-background gap-4"><div class="animate-spin rounded-full h-8 w-8 border-2 border-primary border-t-transparent"></div> <p class="text-sm text-muted-foreground">Restoring secure session...</p></div>`);
var root_2 = from_html(`<div><!> <!></div>`);
function _layout($$anchor, $$props) {
	push($$props, true);
	const $currentUser = () => store_get(currentUser, "$currentUser", $$stores);
	const $isInitializing = () => store_get(isInitializing, "$isInitializing", $$stores);
	const [$$stores, $$cleanup] = setup_stores();
	onMount(() => {
		initBahrainTimezoneDefaults();
		bootstrapSession();
	});
	let isMaster = user_derived(() => $currentUser() && $currentUser().userType.toLowerCase().replace(/\s+/g, "_") === "master_accountant");
	var div = root_2();
	head("12qhfyh", ($$anchor) => {
		var link = root();
		template_effect(() => set_attribute(link, "href", favicon_default));
		append($$anchor, link);
	});
	var node = child(div);
	var consequent = ($$anchor) => {
		append($$anchor, root_1());
	};
	var alternate = ($$anchor) => {
		var fragment = comment();
		snippet(first_child(fragment), () => $$props.children);
		append($$anchor, fragment);
	};
	if_block(node, ($$render) => {
		if ($isInitializing()) $$render(consequent);
		else $$render(alternate, -1);
	});
	Toaster(sibling(node, 2), {});
	reset(div);
	template_effect(() => set_class(div, 1, `min-h-[100dvh] bg-background text-foreground antialiased ${get(isMaster) ? "theme-master-accountant" : ""}`));
	append($$anchor, div);
	pop();
	$$cleanup();
}
//#endregion
export { _layout as component, _layout_exports as universal };

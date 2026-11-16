import { At as pop, C as set_class, V as from_html, at as template_effect, jt as push, o as prop, w as clsx, z as append } from "./D1I-S_GP.js";
import "./DhaYE-8x.js";
import { t as cn } from "./Ca4GnfYC2.js";
//#region src/lib/components/Spinner.svelte
var root = from_html(`<div role="status" aria-label="Loading"></div>`);
function Spinner($$anchor, $$props) {
	push($$props, true);
	let size = prop($$props, "size", 3, "md"), className = prop($$props, "class", 3, "");
	const sizeClasses = {
		sm: "h-4 w-4 border-2",
		md: "h-6 w-6 border-2",
		lg: "h-10 w-10 border-3"
	};
	var div = root();
	template_effect(($0) => set_class(div, 1, $0), [() => clsx(cn("animate-spin rounded-full border-primary border-t-transparent shrink-0", sizeClasses[size()], className()))]);
	append($$anchor, div);
	pop();
}
//#endregion
export { Spinner as t };

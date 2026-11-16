import { B as append, H as from_html, Mt as push, T as clsx, jt as pop, o as prop, ot as template_effect, w as set_class } from "./BRNvcyYY.js";
import "./DhaYE-8x.js";
import { t as cn } from "./CrCNvvRb.js";
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

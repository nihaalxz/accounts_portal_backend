import { B as append, Bt as reset, Ct as user_derived, H as from_html, Nt as pop, Pt as push, Q as get, R as set_text, o as prop, ot as template_effect, pt as child, w as set_class } from "./dXkmWTgM.js";
import "./DhaYE-8x.js";
import { a as formatDateTime, i as formatDateOnly } from "./Cu8_Vl4p2.js";
//#region src/lib/components/DateDisplay.svelte
var root = from_html(`<span> </span>`);
function DateDisplay($$anchor, $$props) {
	push($$props, true);
	let showTime = prop($$props, "showTime", 3, false), className = prop($$props, "class", 3, "");
	const targetDate = user_derived(() => $$props.value ?? $$props.date);
	const shouldShowTime = user_derived(() => showTime() || $$props.format === "datetime");
	var span = root();
	var text = child(span, true);
	reset(span);
	template_effect(($0) => {
		set_class(span, 1, `tabular-nums ${className() ?? ""}`);
		set_text(text, $0);
	}, [() => get(shouldShowTime) ? formatDateTime(get(targetDate)) : formatDateOnly(get(targetDate))]);
	append($$anchor, span);
	pop();
}
//#endregion
export { DateDisplay as t };

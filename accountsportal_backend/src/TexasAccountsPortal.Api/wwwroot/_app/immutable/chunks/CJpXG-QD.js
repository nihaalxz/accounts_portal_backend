import { B as append, Bt as reset, H as from_html, Nt as pop, Pt as push, R as set_text, o as prop, ot as template_effect, pt as child, w as set_class } from "./dXkmWTgM.js";
import "./DhaYE-8x.js";
//#region src/lib/formatters/date.ts
/**
* Timezone offset for Bahrain (UTC+3, no DST).
*/
var BAHRAIN_TIMEZONE = "Asia/Bahrain";
/**
* Formats a timezone-naive date-only value (e.g., '2026-07-10').
*/
function formatDateOnly(value, locale = "en-US") {
	if (!value) return "—";
	const date = typeof value === "string" ? new Date(value) : value;
	if (isNaN(date.getTime())) return "—";
	return new Intl.DateTimeFormat(locale, {
		year: "numeric",
		month: "short",
		day: "numeric",
		timeZone: BAHRAIN_TIMEZONE
	}).format(date);
}
//#endregion
//#region src/lib/components/DateDisplay.svelte
var root = from_html(`<span> </span>`);
function DateDisplay($$anchor, $$props) {
	push($$props, true);
	let className = prop($$props, "class", 3, "");
	var span = root();
	var text = child(span, true);
	reset(span);
	template_effect(($0) => {
		set_class(span, 1, `tabular-nums ${className() ?? ""}`);
		set_text(text, $0);
	}, [() => formatDateOnly($$props.value)]);
	append($$anchor, span);
	pop();
}
//#endregion
export { DateDisplay as t };

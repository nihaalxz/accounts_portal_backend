import { B as append, Bt as reset, Ct as user_derived, H as from_html, Nt as pop, Pt as push, Q as get, R as set_text, T as clsx, _ as set_attribute, ht as sibling, o as prop, ot as template_effect, pt as child, w as set_class } from "./dXkmWTgM.js";
import "./DhaYE-8x.js";
import { d as getStatusConfig } from "./DNQc_ysr2.js";
//#region src/lib/components/financial/FinancialStatusBadge.svelte
var root = from_html(`<span><span aria-hidden="true"></span> </span>`);
function FinancialStatusBadge($$anchor, $$props) {
	push($$props, true);
	/**
	* FinancialStatusBadge — displays a transaction status with semantic color.
	* Uses only color + text (no color-only communication — accessible).
	*/
	let size = prop($$props, "size", 3, "md");
	const config = user_derived(() => getStatusConfig($$props.status));
	var span = root();
	var span_1 = child(span);
	var text = sibling(span_1);
	reset(span);
	template_effect(($0, $1) => {
		set_class(span, 1, $0);
		set_attribute(span, "aria-label", `Status: ${get(config).label ?? ""}`);
		set_class(span_1, 1, $1);
		set_text(text, ` ${get(config).label ?? ""}`);
	}, [() => clsx([
		"inline-flex items-center gap-1 font-semibold rounded-full border",
		size() === "sm" ? "text-[10px] px-1.5 py-0.5" : "text-xs px-2.5 py-1",
		get(config).textClass,
		get(config).bgClass,
		get(config).borderClass
	].join(" ")), () => clsx([
		"rounded-full shrink-0",
		size() === "sm" ? "w-1 h-1" : "w-1.5 h-1.5",
		get(config).textClass.replace("text-", "bg-")
	].join(" "))]);
	append($$anchor, span);
	pop();
}
//#endregion
export { FinancialStatusBadge as t };

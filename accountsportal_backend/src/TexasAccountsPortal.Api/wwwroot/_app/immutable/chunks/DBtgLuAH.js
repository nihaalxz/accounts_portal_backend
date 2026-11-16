import { At as pop, C as set_class, L as set_text, Lt as reset, V as from_html, Z as get, at as template_effect, bt as user_derived, ft as sibling, g as set_attribute, jt as push, o as prop, ut as child, w as clsx, z as append } from "./D1I-S_GP.js";
import "./DhaYE-8x.js";
import { h as getTypeConfig, m as getStatusConfig } from "./CXeRAu2j.js";
//#region src/lib/components/financial/FinancialStatusBadge.svelte
var root$1 = from_html(`<span><span aria-hidden="true"></span> </span>`);
function FinancialStatusBadge($$anchor, $$props) {
	push($$props, true);
	/**
	* FinancialStatusBadge — displays a transaction status with semantic color.
	* Uses only color + text (no color-only communication — accessible).
	*/
	let size = prop($$props, "size", 3, "md");
	const config = user_derived(() => getStatusConfig($$props.status));
	var span = root$1();
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
//#region src/lib/components/financial/TransactionTypeChip.svelte
var root = from_html(`<span><span aria-hidden="true"> </span> </span>`);
function TransactionTypeChip($$anchor, $$props) {
	push($$props, true);
	/**
	* TransactionTypeChip — displays a transaction type with directional indication.
	*/
	const config = user_derived(() => getTypeConfig($$props.type));
	const arrowSymbol = user_derived(() => get(config).direction === "in" ? "↑" : get(config).direction === "out" ? "↓" : "↔");
	var span = root();
	var span_1 = child(span);
	var text = child(span_1, true);
	reset(span_1);
	var text_1 = sibling(span_1);
	reset(span);
	template_effect(($0) => {
		set_class(span, 1, $0);
		set_attribute(span, "aria-label", `Type: ${get(config).label ?? ""} (${get(config).direction === "in" ? "incoming" : get(config).direction === "out" ? "outgoing" : "internal"})`);
		set_text(text, get(arrowSymbol));
		set_text(text_1, ` ${get(config).label ?? ""}`);
	}, [() => clsx(["inline-flex items-center gap-1 text-xs font-semibold", get(config).textClass].join(" "))]);
	append($$anchor, span);
	pop();
}
//#endregion
export { FinancialStatusBadge as n, TransactionTypeChip as t };

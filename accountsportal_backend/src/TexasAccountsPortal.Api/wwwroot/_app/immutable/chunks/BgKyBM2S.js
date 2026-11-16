import { B as append, Bt as reset, Ct as user_derived, H as from_html, Nt as pop, Pt as push, Q as get, R as set_text, T as clsx, _ as set_attribute, ht as sibling, ot as template_effect, pt as child, w as set_class } from "./dXkmWTgM.js";
import "./DhaYE-8x.js";
import { f as getTypeConfig } from "./HvLHPagu2.js";
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
export { TransactionTypeChip as t };

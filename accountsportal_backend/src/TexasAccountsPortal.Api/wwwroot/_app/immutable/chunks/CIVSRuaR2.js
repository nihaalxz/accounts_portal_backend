import { B as append, Bt as reset, H as from_html, Nt as pop, Pt as push, R as set_text, o as prop, ot as template_effect, pt as child, w as set_class } from "./dXkmWTgM.js";
import "./DhaYE-8x.js";
//#region src/lib/formatters/money.ts
/**
* Formats a decimal number or string into a currency representation.
* Defaults to BHD (Bahraini Dinar) which has 3 decimal places.
*/
function formatMoney(amount, currency = "BHD", locale = "en-BH") {
	if (amount === null || amount === void 0) return "—";
	const numericValue = typeof amount === "string" ? parseFloat(amount) : amount;
	if (isNaN(numericValue)) return "—";
	const fractionDigits = [
		"BHD",
		"KWD",
		"OMR"
	].includes(currency.toUpperCase()) ? 3 : 2;
	try {
		return new Intl.NumberFormat(locale, {
			style: "currency",
			currency: currency.toUpperCase(),
			minimumFractionDigits: fractionDigits,
			maximumFractionDigits: fractionDigits
		}).format(numericValue);
	} catch {
		return `${currency.toUpperCase()} ${numericValue.toFixed(fractionDigits)}`;
	}
}
//#endregion
//#region src/lib/components/MoneyDisplay.svelte
var root = from_html(`<span> </span>`);
function MoneyDisplay($$anchor, $$props) {
	push($$props, true);
	let currency = prop($$props, "currency", 3, "BHD"), className = prop($$props, "class", 3, "");
	var span = root();
	var text = child(span, true);
	reset(span);
	template_effect(($0) => {
		set_class(span, 1, `font-mono font-medium tracking-tight tabular-nums ${className() ?? ""}`);
		set_text(text, $0);
	}, [() => formatMoney($$props.amount, currency())]);
	append($$anchor, span);
	pop();
}
//#endregion
export { MoneyDisplay as t };

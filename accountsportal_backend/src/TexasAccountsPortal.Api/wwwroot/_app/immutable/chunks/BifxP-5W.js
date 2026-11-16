import { B as append, Bt as reset, H as from_html, N as each, Nt as pop, P as index, Pt as push, T as clsx, ht as sibling, o as prop, ot as template_effect, pt as child, w as set_class } from "./dXkmWTgM.js";
import "./DhaYE-8x.js";
//#region src/lib/components/financial/FinancialTableSkeleton.svelte
var root = from_html(`<div></div>`);
var root_1 = from_html(`<div class="flex gap-4 px-4 py-4 border-b border-border/50"></div>`);
var root_2 = from_html(`<div class="animate-pulse" aria-busy="true" aria-label="Loading financial data..."><div class="flex gap-4 px-4 py-3 border-b border-border mb-1"></div> <!></div>`);
function FinancialTableSkeleton($$anchor, $$props) {
	push($$props, true);
	/** FinancialTableSkeleton — loading skeleton for tabular financial data */
	let rows = prop($$props, "rows", 3, 5), columns = prop($$props, "columns", 3, 6);
	var div = root_2();
	var div_1 = child(div);
	each(div_1, 21, () => ({ length: columns() }), index, ($$anchor, _, i) => {
		var div_2 = root();
		template_effect(($0) => set_class(div_2, 1, $0), [() => clsx(["h-3 bg-muted rounded", i === 0 ? "w-16" : i === columns() - 1 ? "w-20" : "flex-1"].join(" "))]);
		append($$anchor, div_2);
	});
	reset(div_1);
	each(sibling(div_1, 2), 17, () => ({ length: rows() }), index, ($$anchor, _) => {
		var div_3 = root_1();
		each(div_3, 21, () => ({ length: columns() }), index, ($$anchor, _, i, $$array) => {
			var div_4 = root();
			template_effect(($0) => set_class(div_4, 1, $0), [() => clsx([
				"h-4 rounded bg-muted/70",
				i === 0 ? "w-12" : i === 1 ? "w-20" : i === columns() - 1 ? "w-24" : "flex-1",
				i % 2 === 0 ? "opacity-80" : "opacity-60"
			].join(" "))]);
			append($$anchor, div_4);
		});
		reset(div_3);
		append($$anchor, div_3);
	});
	reset(div);
	append($$anchor, div);
	pop();
}
//#endregion
export { FinancialTableSkeleton as t };

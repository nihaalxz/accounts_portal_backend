import { Lt as reset, M as each, N as index, V as from_html, o as prop, z as append } from "./D1I-S_GP.js";
import "./DhaYE-8x.js";
//#region src/lib/components/financial/FinancialCardSkeleton.svelte
var root = from_html(`<div class="bg-card border border-border rounded-2xl p-4 space-y-3"><div class="flex items-center justify-between"><div class="h-4 w-24 bg-muted rounded-full"></div> <div class="h-5 w-20 bg-muted rounded-lg"></div></div> <div class="flex items-center justify-between"><div class="h-3 w-32 bg-muted/70 rounded"></div> <div class="h-3 w-16 bg-muted/70 rounded"></div></div> <div class="h-5 w-16 bg-muted/60 rounded-full"></div></div>`);
var root_1 = from_html(`<div class="animate-pulse space-y-3" aria-busy="true" aria-label="Loading financial data..."></div>`);
function FinancialCardSkeleton($$anchor, $$props) {
	/** FinancialCardSkeleton — loading skeleton for card-based financial lists (mobile) */
	let count = prop($$props, "count", 3, 4);
	var div = root_1();
	each(div, 21, () => ({ length: count() }), index, ($$anchor, _) => {
		append($$anchor, root());
	});
	reset(div);
	append($$anchor, div);
}
//#endregion
export { FinancialCardSkeleton as t };

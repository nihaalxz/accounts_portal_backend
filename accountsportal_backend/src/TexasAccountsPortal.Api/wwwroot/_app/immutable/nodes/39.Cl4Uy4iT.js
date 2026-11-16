import { B as append, Bt as reset, D as head, G as text, H as from_html, Nt as pop, Pt as push, dt as $document, ht as sibling, it as effect, l as init, mt as first_child, pt as child, zt as next } from "../chunks/dXkmWTgM.js";
import { t as goto } from "../chunks/D0NVZqrH.js";
import "../chunks/DhaYE-8x.js";
import "../chunks/DZfWAsjW.js";
import { t as Arrow_left } from "../chunks/Bn7x0kyr.js";
import { t as Clock } from "../chunks/CZu1L_RP2.js";
import { t as Shield_alert } from "../chunks/BqY57apW.js";
import { t as Trending_up } from "../chunks/dBTjeHCK.js";
import { t as Button } from "../chunks/BhXsq3bC2.js";
import "../chunks/GxrCv23o2.js";
//#region src/routes/(app)/reports/profit-loss/+page.svelte
var root = from_html(`<!> <span>Back to Dashboard</span>`, 1);
var root_1 = from_html(`<div class="space-y-6"><div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border pb-5"><div class="space-y-1"><div class="flex items-center gap-2"><div class="p-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20"><!></div> <div><h1 class="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">Profit & Loss Report</h1> <p class="text-xs text-muted-foreground mt-0.5">Comprehensive operational income statement and financial performance reporting.</p></div></div></div> <div><!></div></div> <div class="bg-card border border-border rounded-2xl p-12 md:p-16 flex flex-col items-center justify-center text-center shadow-sm max-w-2xl mx-auto my-12"><div class="w-16 h-16 rounded-2xl bg-amber-500/10 text-amber-500 border border-amber-500/20 flex items-center justify-center mb-6 shadow-inner"><!></div> <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 mb-3"><!> Module In Progress</span> <h2 class="text-2xl font-bold tracking-tight text-foreground mb-2">Under Development Coming Soon</h2> <p class="text-xs text-muted-foreground max-w-md mb-8 leading-relaxed">This reporting module is currently under active development and being finalized for production release. Full financial reconciliation, revenue aggregation, and income statement reports will be accessible here soon.</p> <div class="flex items-center gap-3"><!></div></div></div>`);
function _page($$anchor, $$props) {
	push($$props, false);
	init();
	var div = root_1();
	head("wjvphc", ($$anchor) => {
		effect(() => {
			$document.title = "Profit & Loss Report — Accounts Portal";
		});
	});
	var div_1 = child(div);
	var div_2 = child(div_1);
	var div_3 = child(div_2);
	var div_4 = child(div_3);
	Trending_up(child(div_4), { class: "w-6 h-6" });
	reset(div_4);
	next(2);
	reset(div_3);
	reset(div_2);
	var div_5 = sibling(div_2, 2);
	Button(child(div_5), {
		variant: "outline",
		size: "sm",
		class: "gap-1.5 h-9 rounded-xl text-xs cursor-pointer",
		onclick: () => goto("/dashboard"),
		children: ($$anchor, $$slotProps) => {
			var fragment = root();
			Arrow_left(first_child(fragment), { class: "w-3.5 h-3.5" });
			next(2);
			append($$anchor, fragment);
		},
		$$slots: { default: true }
	});
	reset(div_5);
	reset(div_1);
	var div_6 = sibling(div_1, 2);
	var div_7 = child(div_6);
	Clock(child(div_7), { class: "w-8 h-8 animate-pulse" });
	reset(div_7);
	var span = sibling(div_7, 2);
	Shield_alert(child(span), { class: "w-3.5 h-3.5" });
	next();
	reset(span);
	var div_8 = sibling(span, 6);
	Button(child(div_8), {
		variant: "default",
		size: "sm",
		class: "rounded-xl px-5 h-9 text-xs font-semibold cursor-pointer",
		onclick: () => goto("/dashboard"),
		children: ($$anchor, $$slotProps) => {
			next();
			append($$anchor, text("Return to Dashboard"));
		},
		$$slots: { default: true }
	});
	reset(div_8);
	reset(div_6);
	reset(div);
	append($$anchor, div);
	pop();
}
//#endregion
export { _page as component };

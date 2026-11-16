import { B as append, Bt as reset, H as from_html, I as if_block, Nt as pop, Pt as push, R as set_text, T as clsx, ht as sibling, mt as first_child, o as prop, ot as template_effect, pt as child, w as set_class, zt as next } from "./dXkmWTgM.js";
import "./DhaYE-8x.js";
import { t as Rotate_ccw } from "./CEB2WCBr.js";
import { t as Triangle_alert } from "./BKenZzGW.js";
import { t as cn } from "./BMnsu3cW.js";
import { t as Button } from "./BhXsq3bC2.js";
//#region src/lib/components/ErrorState.svelte
var root = from_html(`<div class="mt-3 px-2 py-1 bg-muted rounded-md font-mono text-[9px] text-muted-foreground select-all"> </div>`);
var root_1 = from_html(`<!> <span>Retry Operation</span>`, 1);
var root_2 = from_html(`<div><div class="p-3 bg-destructive/10 rounded-2xl text-destructive mb-4"><!></div> <h3 class="text-sm font-bold text-foreground"> </h3> <p class="text-xs text-muted-foreground mt-1 max-w-[420px] leading-relaxed"> </p> <!> <!></div>`);
function ErrorState($$anchor, $$props) {
	push($$props, true);
	let title = prop($$props, "title", 3, "Failed to load details"), correlationId = prop($$props, "correlationId", 3, ""), retryAction = prop($$props, "retryAction", 3, void 0), className = prop($$props, "class", 3, "");
	var div = root_2();
	var div_1 = child(div);
	Triangle_alert(child(div_1), { class: "h-6 w-6 shrink-0" });
	reset(div_1);
	var h3 = sibling(div_1, 2);
	var text = child(h3, true);
	reset(h3);
	var p = sibling(h3, 2);
	var text_1 = child(p, true);
	reset(p);
	var node_1 = sibling(p, 2);
	var consequent = ($$anchor) => {
		var div_2 = root();
		var text_2 = child(div_2);
		reset(div_2);
		template_effect(() => set_text(text_2, `Trace ID: ${correlationId() ?? ""}`));
		append($$anchor, div_2);
	};
	if_block(node_1, ($$render) => {
		if (correlationId()) $$render(consequent);
	});
	var node_2 = sibling(node_1, 2);
	var consequent_1 = ($$anchor) => {
		Button($$anchor, {
			variant: "outline",
			class: "mt-4 font-semibold text-xs rounded-xl flex items-center gap-1.5 cursor-pointer",
			get onclick() {
				return retryAction();
			},
			children: ($$anchor, $$slotProps) => {
				var fragment_1 = root_1();
				Rotate_ccw(first_child(fragment_1), { class: "h-3.5 w-3.5" });
				next(2);
				append($$anchor, fragment_1);
			},
			$$slots: { default: true }
		});
	};
	if_block(node_2, ($$render) => {
		if (retryAction()) $$render(consequent_1);
	});
	reset(div);
	template_effect(($0) => {
		set_class(div, 1, $0);
		set_text(text, title());
		set_text(text_1, $$props.message);
	}, [() => clsx(cn("flex flex-col items-center justify-center p-8 text-center bg-destructive/5 border border-destructive/10 rounded-3xl", className()))]);
	append($$anchor, div);
	pop();
}
//#endregion
export { ErrorState as t };

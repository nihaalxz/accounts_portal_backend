import { A as component, B as append, G as text, H as from_html, I as if_block, Lt as next, Mt as push, R as set_text, Rt as reset, T as clsx, V as comment, dt as child, ft as first_child, j as snippet, jt as pop, o as prop, ot as template_effect, pt as sibling, w as set_class } from "./BRNvcyYY.js";
import "./DhaYE-8x.js";
import { t as cn } from "./CrCNvvRb.js";
import { t as Button } from "./B56HWgqG.js";
//#region src/lib/components/EmptyState.svelte
var root = from_html(`<div class="p-3 bg-muted rounded-2xl text-muted-foreground mb-4"><!></div>`);
var root_1 = from_html(`<div class="mt-4"><!></div>`);
var root_2 = from_html(`<div><!> <h3 class="text-sm font-bold text-foreground"> </h3> <p class="text-xs text-muted-foreground mt-1 max-w-[320px] leading-relaxed"> </p> <!></div>`);
function EmptyState($$anchor, $$props) {
	push($$props, true);
	let IconSymbol = prop($$props, "icon", 3, void 0), actionLabel = prop($$props, "actionLabel", 3, ""), actionClick = prop($$props, "actionClick", 3, void 0), className = prop($$props, "class", 3, "");
	var div = root_2();
	var node = child(div);
	var consequent = ($$anchor) => {
		var div_1 = root();
		component(child(div_1), IconSymbol, ($$anchor, IconSymbol_1) => {
			IconSymbol_1($$anchor, { class: "h-6 w-6 shrink-0" });
		});
		reset(div_1);
		append($$anchor, div_1);
	};
	if_block(node, ($$render) => {
		if (IconSymbol()) $$render(consequent);
	});
	var h3 = sibling(node, 2);
	var text$1 = child(h3, true);
	reset(h3);
	var p = sibling(h3, 2);
	var text_1 = child(p, true);
	reset(p);
	var node_2 = sibling(p, 2);
	var consequent_1 = ($$anchor) => {
		var div_2 = root_1();
		snippet(child(div_2), () => $$props.actionsSlot);
		reset(div_2);
		append($$anchor, div_2);
	};
	var alternate = ($$anchor) => {
		var fragment = comment();
		var node_4 = first_child(fragment);
		var consequent_2 = ($$anchor) => {
			Button($$anchor, {
				variant: "outline",
				class: "mt-4 font-semibold text-xs rounded-xl cursor-pointer",
				get onclick() {
					return actionClick();
				},
				children: ($$anchor, $$slotProps) => {
					next();
					var text_2 = text();
					template_effect(() => set_text(text_2, actionLabel()));
					append($$anchor, text_2);
				},
				$$slots: { default: true }
			});
		};
		if_block(node_4, ($$render) => {
			if (actionLabel() && actionClick()) $$render(consequent_2);
		});
		append($$anchor, fragment);
	};
	if_block(node_2, ($$render) => {
		if ($$props.actionsSlot) $$render(consequent_1);
		else $$render(alternate, -1);
	});
	reset(div);
	template_effect(($0) => {
		set_class(div, 1, $0);
		set_text(text$1, $$props.title);
		set_text(text_1, $$props.description);
	}, [() => clsx(cn("flex flex-col items-center justify-center p-8 text-center bg-card border border-border border-dashed rounded-3xl", className()))]);
	append($$anchor, div);
	pop();
}
//#endregion
export { EmptyState as t };

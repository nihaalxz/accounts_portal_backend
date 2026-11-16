import { B as append, Bt as reset, H as from_html, I as if_block, Nt as pop, Pt as push, R as set_text, T as clsx, ht as sibling, j as snippet, o as prop, ot as template_effect, pt as child, w as set_class } from "./dXkmWTgM.js";
import "./DhaYE-8x.js";
import { t as cn } from "./BMnsu3cW.js";
//#region src/lib/components/PageHeader.svelte
var root$1 = from_html(`<p class="text-sm text-muted-foreground mt-1.5"> </p>`);
var root_1$1 = from_html(`<div class="flex flex-wrap items-center gap-3"><!></div>`);
var root_2$1 = from_html(`<div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-border pb-5 mb-6"><div><h1 class="text-3xl font-bold tracking-tight text-foreground"> </h1> <!></div> <!></div>`);
function PageHeader($$anchor, $$props) {
	let description = prop($$props, "description", 3, "");
	var div = root_2$1();
	var div_1 = child(div);
	var h1 = child(div_1);
	var text = child(h1, true);
	reset(h1);
	var node = sibling(h1, 2);
	var consequent = ($$anchor) => {
		var p = root$1();
		var text_1 = child(p, true);
		reset(p);
		template_effect(() => set_text(text_1, description()));
		append($$anchor, p);
	};
	if_block(node, ($$render) => {
		if (description()) $$render(consequent);
	});
	reset(div_1);
	var node_1 = sibling(div_1, 2);
	var consequent_1 = ($$anchor) => {
		var div_2 = root_1$1();
		snippet(child(div_2), () => $$props.children);
		reset(div_2);
		append($$anchor, div_2);
	};
	if_block(node_1, ($$render) => {
		if ($$props.children) $$render(consequent_1);
	});
	reset(div);
	template_effect(() => set_text(text, $$props.title));
	append($$anchor, div);
}
//#endregion
//#region src/lib/components/SectionCard.svelte
var root = from_html(`<h2 class="text-sm font-bold text-foreground"> </h2>`);
var root_1 = from_html(`<p class="text-xs text-muted-foreground mt-1 leading-relaxed"> </p>`);
var root_2 = from_html(`<div><!></div>`);
var root_3 = from_html(`<div class="px-6 py-5 border-b border-border flex items-center justify-between gap-4"><div><!> <!></div> <!></div>`);
var root_4 = from_html(`<div><!> <div class="p-6 flex-1"><!></div></div>`);
function SectionCard($$anchor, $$props) {
	push($$props, true);
	let title = prop($$props, "title", 3, ""), description = prop($$props, "description", 3, ""), className = prop($$props, "class", 3, "");
	var div = root_4();
	var node = child(div);
	var consequent_3 = ($$anchor) => {
		var div_1 = root_3();
		var div_2 = child(div_1);
		var node_1 = child(div_2);
		var consequent = ($$anchor) => {
			var h2 = root();
			var text = child(h2, true);
			reset(h2);
			template_effect(() => set_text(text, title()));
			append($$anchor, h2);
		};
		if_block(node_1, ($$render) => {
			if (title()) $$render(consequent);
		});
		var node_2 = sibling(node_1, 2);
		var consequent_1 = ($$anchor) => {
			var p = root_1();
			var text_1 = child(p, true);
			reset(p);
			template_effect(() => set_text(text_1, description()));
			append($$anchor, p);
		};
		if_block(node_2, ($$render) => {
			if (description()) $$render(consequent_1);
		});
		reset(div_2);
		var node_3 = sibling(div_2, 2);
		var consequent_2 = ($$anchor) => {
			var div_3 = root_2();
			snippet(child(div_3), () => $$props.headerAction);
			reset(div_3);
			append($$anchor, div_3);
		};
		if_block(node_3, ($$render) => {
			if ($$props.headerAction) $$render(consequent_2);
		});
		reset(div_1);
		append($$anchor, div_1);
	};
	if_block(node, ($$render) => {
		if (title() || $$props.headerAction) $$render(consequent_3);
	});
	var div_4 = sibling(node, 2);
	snippet(child(div_4), () => $$props.children);
	reset(div_4);
	reset(div);
	template_effect(($0) => set_class(div, 1, $0), [() => clsx(cn("bg-card border border-border rounded-3xl shadow-xs overflow-hidden flex flex-col", className()))]);
	append($$anchor, div);
	pop();
}
//#endregion
export { PageHeader as n, SectionCard as t };

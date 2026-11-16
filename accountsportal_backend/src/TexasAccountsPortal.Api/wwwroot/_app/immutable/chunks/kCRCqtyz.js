import { B as append, H as from_html, I as if_block, Mt as push, N as each, P as index, Q as get, R as set_text, Rt as reset, T as clsx, V as comment, dt as child, ft as first_child, jt as pop, o as prop, ot as template_effect, w as set_class, xt as user_derived } from "./CjADOP7e.js";
import "./DhaYE-8x.js";
//#region src/lib/components/financial/FormattedNarrative.svelte
var root = from_html(`<span class="text-muted-foreground/60">—</span>`);
var root_1 = from_html(`<strong class="font-mono font-bold text-foreground"> </strong>`);
var root_2 = from_html(`<strong class="font-bold text-foreground"> </strong>`);
var root_3 = from_html(`<span> </span>`);
var root_4 = from_html(`<span><!></span>`);
function FormattedNarrative($$anchor, $$props) {
	push($$props, true);
	let text = prop($$props, "text", 3, ""), className = prop($$props, "class", 3, "");
	let tokens = user_derived(() => {
		if (!text()) return [];
		const regex = /(\b\d+\.\d{3}(?:\s*BHD)?\b|\bTX[A-Z0-9]+\b)/gi;
		const parts = [];
		let lastIndex = 0;
		let match;
		while ((match = regex.exec(text())) !== null) {
			if (match.index > lastIndex) parts.push({
				text: text().slice(lastIndex, match.index),
				isBold: false
			});
			const matchedStr = match[0];
			const isDocNo = /^TX/i.test(matchedStr);
			const isAmount = /^\d/.test(matchedStr);
			parts.push({
				text: matchedStr,
				isBold: true,
				isDocNo,
				isAmount
			});
			lastIndex = regex.lastIndex;
		}
		if (lastIndex < text().length) parts.push({
			text: text().slice(lastIndex),
			isBold: false
		});
		return parts;
	});
	var span = root_4();
	var node = child(span);
	var consequent = ($$anchor) => {
		append($$anchor, root());
	};
	var alternate_2 = ($$anchor) => {
		var fragment = comment();
		each(first_child(fragment), 17, () => get(tokens), index, ($$anchor, token) => {
			var fragment_1 = comment();
			var node_2 = first_child(fragment_1);
			var consequent_3 = ($$anchor) => {
				var fragment_2 = comment();
				var node_3 = first_child(fragment_2);
				var consequent_1 = ($$anchor) => {
					var strong = root_1();
					var text_1 = child(strong, true);
					reset(strong);
					template_effect(() => set_text(text_1, get(token).text));
					append($$anchor, strong);
				};
				var consequent_2 = ($$anchor) => {
					var strong_1 = root_1();
					var text_2 = child(strong_1, true);
					reset(strong_1);
					template_effect(() => set_text(text_2, get(token).text));
					append($$anchor, strong_1);
				};
				var alternate = ($$anchor) => {
					var strong_2 = root_2();
					var text_3 = child(strong_2, true);
					reset(strong_2);
					template_effect(() => set_text(text_3, get(token).text));
					append($$anchor, strong_2);
				};
				if_block(node_3, ($$render) => {
					if (get(token).isAmount) $$render(consequent_1);
					else if (get(token).isDocNo) $$render(consequent_2, 1);
					else $$render(alternate, -1);
				});
				append($$anchor, fragment_2);
			};
			var alternate_1 = ($$anchor) => {
				var span_2 = root_3();
				var text_4 = child(span_2, true);
				reset(span_2);
				template_effect(() => set_text(text_4, get(token).text));
				append($$anchor, span_2);
			};
			if_block(node_2, ($$render) => {
				if (get(token).isBold) $$render(consequent_3);
				else $$render(alternate_1, -1);
			});
			append($$anchor, fragment_1);
		});
		append($$anchor, fragment);
	};
	if_block(node, ($$render) => {
		if (!text()) $$render(consequent);
		else $$render(alternate_2, -1);
	});
	reset(span);
	template_effect(() => set_class(span, 1, clsx(className())));
	append($$anchor, span);
	pop();
}
//#endregion
export { FormattedNarrative as t };

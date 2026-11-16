import { B as append, Bt as reset, Ct as user_derived, G as text, H as from_html, I as if_block, J as event, K as delegate, N as each, Nt as pop, Pt as push, Q as get, R as set_text, T as clsx, V as comment, _ as set_attribute, bt as state, ft as $window, g as remove_input_defaults, ht as sibling, lt as autofocus, m as bind_value, mt as first_child, o as prop, ot as template_effect, pt as child, q as delegated, u as bind_this, vt as set, w as set_class } from "./dXkmWTgM.js";
import "./DhaYE-8x.js";
import { t as Check } from "./blG6JRe7.js";
import { t as Chevron_down } from "./Dj1p1QvC.js";
import { t as Search } from "./D7t9qluE.js";
import { t as X } from "./wXHc9RNY.js";
//#region src/lib/components/SearchableSelect.svelte
var root = from_html(`<span class="text-muted-foreground font-normal"> </span>`);
var root_1 = from_html(`<button type="button" class="absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 text-muted-foreground hover:text-foreground rounded"><!></button>`);
var root_2 = from_html(`<div class="py-4 text-center text-xs text-muted-foreground font-medium">No results found</div>`);
var root_3 = from_html(`<div class="text-[10px] text-muted-foreground truncate"> </div>`);
var root_4 = from_html(`<button type="button"><div class="truncate"><div class="truncate"> </div> <!></div> <!></button>`);
var root_5 = from_html(`<div class="absolute left-0 right-0 top-full mt-1 z-50 bg-popover border border-border rounded-xl shadow-xl overflow-hidden animate-scaleUp p-1 space-y-1"><div class="relative p-1"><!> <input type="text" class="h-8 w-full bg-muted/40 border border-border/80 rounded-lg pl-8 pr-7 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/40"/> <!></div> <div class="max-h-48 overflow-y-auto space-y-0.5 custom-scrollbar pr-0.5"><!></div></div>`);
var root_6 = from_html(`<div class="relative w-full text-xs"><button type="button"><span class="truncate pr-2 text-foreground"><!></span> <!></button> <!></div>`);
function SearchableSelect($$anchor, $$props) {
	push($$props, true);
	let options = prop($$props, "options", 19, () => []), value = prop($$props, "value", 15), placeholder = prop($$props, "placeholder", 3, "-- Select --"), searchPlaceholder = prop($$props, "searchPlaceholder", 3, "Search..."), id = prop($$props, "id", 3, ""), disabled = prop($$props, "disabled", 3, false);
	prop($$props, "required", 3, false);
	let open = state(false);
	let searchQuery = state("");
	let containerRef = state(null);
	const selectedOption = user_derived(() => options().find((opt) => String(opt.id) === String(value())) || null);
	const filteredOptions = user_derived(() => options().filter((opt) => {
		if (!get(searchQuery).trim()) return true;
		const q = get(searchQuery).toLowerCase().trim();
		return opt.name.toLowerCase().includes(q) || opt.subtext && opt.subtext.toLowerCase().includes(q);
	}));
	function selectOption(opt) {
		value(opt.id);
		set(open, false);
		set(searchQuery, "");
		if ($$props.onchange) $$props.onchange(opt.id);
	}
	function handleOutsideClick(e) {
		if (get(containerRef) && !get(containerRef).contains(e.target)) set(open, false);
	}
	function handleKeyDown(e) {
		if (e.key === "Escape") set(open, false);
	}
	var div = root_6();
	event("click", $window, handleOutsideClick);
	event("keydown", $window, handleKeyDown);
	var button = child(div);
	var span = child(button);
	var node = child(span);
	var consequent = ($$anchor) => {
		var text$1 = text();
		template_effect(() => set_text(text$1, get(selectedOption).name));
		append($$anchor, text$1);
	};
	var alternate = ($$anchor) => {
		var span_1 = root();
		var text_1 = child(span_1, true);
		reset(span_1);
		template_effect(() => set_text(text_1, placeholder()));
		append($$anchor, span_1);
	};
	if_block(node, ($$render) => {
		if (get(selectedOption)) $$render(consequent);
		else $$render(alternate, -1);
	});
	reset(span);
	var node_1 = sibling(span, 2);
	{
		let $0 = user_derived(() => get(open) ? "rotate-180 text-primary" : "");
		Chevron_down(node_1, { get class() {
			return `h-4 w-4 text-muted-foreground shrink-0 transition-transform duration-200 ${get($0) ?? ""}`;
		} });
	}
	reset(button);
	var node_2 = sibling(button, 2);
	var consequent_5 = ($$anchor) => {
		var div_1 = root_5();
		var div_2 = child(div_1);
		var node_3 = child(div_2);
		Search(node_3, { class: "h-3.5 w-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" });
		var input = sibling(node_3, 2);
		remove_input_defaults(input);
		autofocus(input, true);
		var node_4 = sibling(input, 2);
		var consequent_1 = ($$anchor) => {
			var button_1 = root_1();
			X(child(button_1), { class: "h-3 w-3" });
			reset(button_1);
			delegated("click", button_1, () => set(searchQuery, ""));
			append($$anchor, button_1);
		};
		if_block(node_4, ($$render) => {
			if (get(searchQuery)) $$render(consequent_1);
		});
		reset(div_2);
		var div_3 = sibling(div_2, 2);
		var node_6 = child(div_3);
		var consequent_2 = ($$anchor) => {
			append($$anchor, root_2());
		};
		var alternate_1 = ($$anchor) => {
			var fragment_1 = comment();
			each(first_child(fragment_1), 17, () => get(filteredOptions), (opt) => opt.id, ($$anchor, opt) => {
				const isSelected = user_derived(() => String(get(opt).id) === String(value()));
				var button_2 = root_4();
				var div_5 = child(button_2);
				var div_6 = child(div_5);
				var text_2 = child(div_6, true);
				reset(div_6);
				var node_8 = sibling(div_6, 2);
				var consequent_3 = ($$anchor) => {
					var div_7 = root_3();
					var text_3 = child(div_7, true);
					reset(div_7);
					template_effect(() => set_text(text_3, get(opt).subtext));
					append($$anchor, div_7);
				};
				if_block(node_8, ($$render) => {
					if (get(opt).subtext) $$render(consequent_3);
				});
				reset(div_5);
				var node_9 = sibling(div_5, 2);
				var consequent_4 = ($$anchor) => {
					Check($$anchor, { class: "h-3.5 w-3.5 text-primary shrink-0 ml-2" });
				};
				if_block(node_9, ($$render) => {
					if (get(isSelected)) $$render(consequent_4);
				});
				reset(button_2);
				template_effect(($0) => {
					set_class(button_2, 1, $0);
					set_text(text_2, get(opt).name);
				}, [() => clsx(["w-full px-2.5 py-1.5 rounded-lg flex items-center justify-between text-left transition-colors cursor-pointer text-xs", get(isSelected) ? "bg-primary/10 text-primary font-bold" : "hover:bg-muted text-foreground"].join(" "))]);
				delegated("click", button_2, () => selectOption(get(opt)));
				append($$anchor, button_2);
			});
			append($$anchor, fragment_1);
		};
		if_block(node_6, ($$render) => {
			if (get(filteredOptions).length === 0) $$render(consequent_2);
			else $$render(alternate_1, -1);
		});
		reset(div_3);
		reset(div_1);
		template_effect(() => set_attribute(input, "placeholder", searchPlaceholder()));
		bind_value(input, () => get(searchQuery), ($$value) => set(searchQuery, $$value));
		append($$anchor, div_1);
	};
	if_block(node_2, ($$render) => {
		if (get(open)) $$render(consequent_5);
	});
	reset(div);
	bind_this(div, ($$value) => set(containerRef, $$value), () => get(containerRef));
	template_effect(($0) => {
		set_attribute(button, "id", id());
		button.disabled = disabled();
		set_class(button, 1, $0);
	}, [() => clsx([
		"h-9.5 w-full bg-background border rounded-xl px-3 flex items-center justify-between transition-all font-medium text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/20",
		get(open) ? "border-primary ring-2 ring-primary/20" : "border-border hover:border-muted-foreground/40",
		disabled() ? "opacity-50 cursor-not-allowed bg-muted/30" : ""
	].join(" "))]);
	delegated("click", button, () => {
		if (!disabled()) set(open, !get(open));
	});
	append($$anchor, div);
	pop();
}
delegate(["click"]);
//#endregion
export { SearchableSelect as t };

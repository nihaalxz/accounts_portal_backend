import { At as pop, B as comment, F as if_block, V as from_html, dt as first_child, f as bind_files, jt as push, m as attribute_effect, o as prop, p as bind_value, s as rest_props, u as bind_this, z as append } from "./D1I-S_GP.js";
import "./DhaYE-8x.js";
import { t as cn } from "./Ca4GnfYC.js";
//#region src/lib/components/ui/input/input.svelte
var rest_excludes = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref",
	"value",
	"type",
	"files",
	"class",
	"data-slot"
]);
var root = from_html(`<input/>`);
function Input($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), value = prop($$props, "value", 15), files = prop($$props, "files", 15), dataSlot = prop($$props, "data-slot", 3, "input"), restProps = rest_props($$props, rest_excludes);
	var fragment = comment();
	var node = first_child(fragment);
	var consequent = ($$anchor) => {
		var input = root();
		attribute_effect(input, ($0) => ({
			"data-slot": dataSlot(),
			class: $0,
			type: "file",
			...restProps
		}), [() => cn("dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 disabled:bg-input/50 dark:disabled:bg-input/80 h-8 rounded-lg border bg-transparent px-2.5 py-1 text-base transition-colors file:h-6 file:text-sm file:font-medium focus-visible:ring-3 aria-invalid:ring-3 md:text-sm file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50", $$props.class)], void 0, void 0, void 0, true);
		bind_this(input, ($$value) => ref($$value), () => ref());
		bind_files(input, files);
		bind_value(input, value);
		append($$anchor, input);
	};
	var alternate = ($$anchor) => {
		var input_1 = root();
		attribute_effect(input_1, ($0) => ({
			"data-slot": dataSlot(),
			class: $0,
			type: $$props.type,
			...restProps
		}), [() => cn("dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 disabled:bg-input/50 dark:disabled:bg-input/80 h-8 rounded-lg border bg-transparent px-2.5 py-1 text-base transition-colors file:h-6 file:text-sm file:font-medium focus-visible:ring-3 aria-invalid:ring-3 md:text-sm file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50", $$props.class)], void 0, void 0, void 0, true);
		bind_this(input_1, ($$value) => ref($$value), () => ref());
		bind_value(input_1, value);
		append($$anchor, input_1);
	};
	if_block(node, ($$render) => {
		if ($$props.type === "file") $$render(consequent);
		else $$render(alternate, -1);
	});
	append($$anchor, fragment);
	pop();
}
//#endregion
export { Input as t };

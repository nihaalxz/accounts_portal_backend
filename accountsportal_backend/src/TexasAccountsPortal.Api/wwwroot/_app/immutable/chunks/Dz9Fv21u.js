import { B as append, Mt as push, O as element, V as comment, ft as first_child, h as attribute_effect, j as snippet, jt as pop, o as prop, s as rest_props, u as bind_this, zt as noop } from "./BRNvcyYY.js";
import "./DhaYE-8x.js";
import { t as cn } from "./CrCNvvRb.js";
import { n as tv } from "./B56HWgqG.js";
//#region src/lib/components/ui/badge/badge.svelte
var badgeVariants = tv({
	base: "h-5 gap-1 rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium transition-all has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&>svg]:size-3! focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive group/badge inline-flex w-fit shrink-0 items-center justify-center overflow-hidden whitespace-nowrap transition-colors focus-visible:ring-[3px] [&>svg]:pointer-events-none",
	variants: { variant: {
		default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
		secondary: "bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",
		destructive: "bg-destructive/10 [a]:hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 text-destructive dark:bg-destructive/20",
		outline: "border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground",
		ghost: "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
		link: "text-primary underline-offset-4 hover:underline",
		success: "bg-success/15 text-success border-success/30 [a]:hover:bg-success/25",
		warning: "bg-warning/15 text-warning border-warning/30 [a]:hover:bg-warning/25"
	} },
	defaultVariants: { variant: "default" }
});
var rest_excludes = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref",
	"href",
	"class",
	"variant",
	"children"
]);
function Badge($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), variant = prop($$props, "variant", 3, "default"), restProps = rest_props($$props, rest_excludes);
	var fragment = comment();
	element(first_child(fragment), () => $$props.href ? "a" : "span", false, ($$element, $$anchor) => {
		bind_this($$element, ($$value) => ref($$value), () => ref());
		attribute_effect($$element, ($0) => ({
			"data-slot": "badge",
			href: $$props.href,
			class: $0,
			...restProps
		}), [() => cn(badgeVariants({ variant: variant() }), $$props.class)]);
		var fragment_1 = comment();
		snippet(first_child(fragment_1), () => $$props.children ?? noop);
		append($$anchor, fragment_1);
	});
	append($$anchor, fragment);
	pop();
}
//#endregion
export { Badge as t };

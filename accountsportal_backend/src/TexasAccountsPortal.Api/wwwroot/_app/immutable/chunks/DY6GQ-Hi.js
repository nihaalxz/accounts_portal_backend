import { B as append, G as text, H as from_html, I as if_block, Lt as next, Mt as push, Q as get, R as set_text, Rt as reset, V as comment, dt as child, ft as first_child, gt as set, jt as pop, o as prop, ot as template_effect, pt as sibling, vt as state, xt as user_derived } from "./CjADOP7e.js";
import "./DhaYE-8x.js";
import { t as Loader_circle } from "./CmYj3lHu2.js";
import { t as Triangle_alert } from "./DS-Db28u.js";
import { t as Button } from "./Ci9pdkd8.js";
//#region src/lib/components/ConfirmationDialog.svelte
var root = from_html(`<div class="p-3 bg-red-100 dark:bg-red-950/20 text-red-600 rounded-2xl shrink-0"><!></div>`);
var root_1 = from_html(`<div class="p-3 bg-primary/10 text-primary rounded-2xl shrink-0"><!></div>`);
var root_2 = from_html(`<div class="p-3 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-xs font-semibold leading-relaxed"> </div>`);
var root_3 = from_html(`<!> <span>Processing...</span>`, 1);
var root_4 = from_html(`<span> </span>`);
var root_5 = from_html(`<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs select-none p-4" role="dialog" aria-modal="true" aria-labelledby="confirm-title" aria-describedby="confirm-desc"><div class="w-full max-w-[480px] bg-card border border-border rounded-3xl p-6 shadow-xl flex flex-col gap-4 animate-scaleUp"><div class="flex items-start gap-4"><!> <div class="flex-1 min-w-0"><h2 id="confirm-title" class="text-sm font-bold text-foreground leading-tight"> </h2> <p id="confirm-desc" class="text-xs text-muted-foreground mt-2 leading-relaxed"> </p></div></div> <!> <div class="flex items-center justify-end gap-2 mt-2"><!> <!></div></div></div>`);
function ConfirmationDialog($$anchor, $$props) {
	push($$props, true);
	let open = prop($$props, "open", 15, false), confirmLabel = prop($$props, "confirmLabel", 3, "Confirm"), cancelLabel = prop($$props, "cancelLabel", 3, "Cancel"), isDestructive = prop($$props, "isDestructive", 3, false), onCancel = prop($$props, "onCancel", 3, void 0);
	let loading = state(false);
	let error = state(null);
	async function handleConfirm() {
		if (get(loading)) return;
		set(loading, true);
		set(error, null);
		try {
			await $$props.onConfirm();
			open(false);
		} catch (err) {
			set(error, err?.detail || err?.message || "An error occurred. Please try again.", true);
		} finally {
			set(loading, false);
		}
	}
	function handleCancel() {
		if (get(loading)) return;
		if (onCancel()) onCancel()();
		open(false);
		set(error, null);
	}
	var fragment = comment();
	var node = first_child(fragment);
	var consequent_3 = ($$anchor) => {
		var div = root_5();
		var div_1 = child(div);
		var div_2 = child(div_1);
		var node_1 = child(div_2);
		var consequent = ($$anchor) => {
			var div_3 = root();
			Triangle_alert(child(div_3), { class: "h-6 w-6" });
			reset(div_3);
			append($$anchor, div_3);
		};
		var alternate = ($$anchor) => {
			var div_4 = root_1();
			Triangle_alert(child(div_4), { class: "h-6 w-6" });
			reset(div_4);
			append($$anchor, div_4);
		};
		if_block(node_1, ($$render) => {
			if (isDestructive()) $$render(consequent);
			else $$render(alternate, -1);
		});
		var div_5 = sibling(node_1, 2);
		var h2 = child(div_5);
		var text$1 = child(h2, true);
		reset(h2);
		var p = sibling(h2, 2);
		var text_1 = child(p, true);
		reset(p);
		reset(div_5);
		reset(div_2);
		var node_4 = sibling(div_2, 2);
		var consequent_1 = ($$anchor) => {
			var div_6 = root_2();
			var text_2 = child(div_6, true);
			reset(div_6);
			template_effect(() => set_text(text_2, get(error)));
			append($$anchor, div_6);
		};
		if_block(node_4, ($$render) => {
			if (get(error)) $$render(consequent_1);
		});
		var div_7 = sibling(node_4, 2);
		var node_5 = child(div_7);
		Button(node_5, {
			variant: "outline",
			onclick: handleCancel,
			get disabled() {
				return get(loading);
			},
			class: "rounded-xl font-semibold text-xs py-5 px-4 cursor-pointer",
			children: ($$anchor, $$slotProps) => {
				next();
				var text_3 = text();
				template_effect(() => set_text(text_3, cancelLabel()));
				append($$anchor, text_3);
			},
			$$slots: { default: true }
		});
		var node_6 = sibling(node_5, 2);
		{
			let $0 = user_derived(() => isDestructive() ? "destructive" : "default");
			Button(node_6, {
				onclick: handleConfirm,
				get disabled() {
					return get(loading);
				},
				get variant() {
					return get($0);
				},
				class: "rounded-xl font-semibold text-xs py-5 px-4 cursor-pointer",
				children: ($$anchor, $$slotProps) => {
					var fragment_2 = comment();
					var node_7 = first_child(fragment_2);
					var consequent_2 = ($$anchor) => {
						var fragment_3 = root_3();
						Loader_circle(first_child(fragment_3), { class: "h-3.5 w-3.5 animate-spin mr-1.5" });
						next(2);
						append($$anchor, fragment_3);
					};
					var alternate_1 = ($$anchor) => {
						var span = root_4();
						var text_4 = child(span, true);
						reset(span);
						template_effect(() => set_text(text_4, confirmLabel()));
						append($$anchor, span);
					};
					if_block(node_7, ($$render) => {
						if (get(loading)) $$render(consequent_2);
						else $$render(alternate_1, -1);
					});
					append($$anchor, fragment_2);
				},
				$$slots: { default: true }
			});
		}
		reset(div_7);
		reset(div_1);
		reset(div);
		template_effect(() => {
			set_text(text$1, $$props.title);
			set_text(text_1, $$props.message);
		});
		append($$anchor, div);
	};
	if_block(node, ($$render) => {
		if (open()) $$render(consequent_3);
	});
	append($$anchor, fragment);
	pop();
}
//#endregion
export { ConfirmationDialog as t };

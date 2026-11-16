import { At as pop, B as comment, F as if_block, It as next, L as set_text, Lt as reset, V as from_html, Z as get, _t as state, at as template_effect, dt as first_child, ft as sibling, ht as set, jt as push, o as prop, ut as child, z as append } from "./D1I-S_GP.js";
import "./DhaYE-8x.js";
import { t as Refresh_cw } from "./BJm1tO_d2.js";
import { t as Triangle_alert } from "./Div4UbSX2.js";
import { t as Button } from "./DnwOswfh2.js";
//#region src/lib/components/ConflictDialog.svelte
var root = from_html(`<!> <span>Reloading...</span>`, 1);
var root_1 = from_html(`<!> <span>Reload & Refresh</span>`, 1);
var root_2 = from_html(`<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs select-none p-4" role="dialog" aria-modal="true" aria-labelledby="conflict-title" aria-describedby="conflict-desc"><div class="w-full max-w-[480px] bg-card border border-border rounded-3xl p-6 shadow-xl flex flex-col gap-4 animate-scaleUp"><div class="flex items-start gap-4"><div class="p-3 bg-amber-100 dark:bg-amber-950/20 text-amber-600 rounded-2xl shrink-0"><!></div> <div class="flex-1 min-w-0"><h2 id="conflict-title" class="text-sm font-bold text-foreground leading-tight"> </h2> <p id="conflict-desc" class="text-xs text-muted-foreground mt-2 leading-relaxed"> </p></div></div> <div class="flex items-center justify-end gap-2 mt-2"><!></div></div></div>`);
function ConflictDialog($$anchor, $$props) {
	push($$props, true);
	/**
	* ConflictDialog — handles 409 Conflict concurrency responses.
	* Explains that the resource has been modified, and offers a reload action.
	*/
	let open = prop($$props, "open", 15, false), title = prop($$props, "title", 3, "Data Out of Date"), message = prop($$props, "message", 3, "Another user has updated this record. Your local screen is out of sync. Please reload to view the latest status and try again.");
	let loading = state(false);
	async function handleReload() {
		set(loading, true);
		try {
			await $$props.onReload();
			open(false);
		} finally {
			set(loading, false);
		}
	}
	var fragment = comment();
	var node = first_child(fragment);
	var consequent_1 = ($$anchor) => {
		var div = root_2();
		var div_1 = child(div);
		var div_2 = child(div_1);
		var div_3 = child(div_2);
		Triangle_alert(child(div_3), { class: "h-6 w-6" });
		reset(div_3);
		var div_4 = sibling(div_3, 2);
		var h2 = child(div_4);
		var text = child(h2, true);
		reset(h2);
		var p = sibling(h2, 2);
		var text_1 = child(p, true);
		reset(p);
		reset(div_4);
		reset(div_2);
		var div_5 = sibling(div_2, 2);
		Button(child(div_5), {
			onclick: handleReload,
			get disabled() {
				return get(loading);
			},
			class: "rounded-xl font-semibold text-xs py-5 px-4 cursor-pointer flex items-center gap-1.5",
			children: ($$anchor, $$slotProps) => {
				var fragment_1 = comment();
				var node_3 = first_child(fragment_1);
				var consequent = ($$anchor) => {
					var fragment_2 = root();
					Refresh_cw(first_child(fragment_2), { class: "h-3.5 w-3.5 animate-spin mr-1.5" });
					next(2);
					append($$anchor, fragment_2);
				};
				var alternate = ($$anchor) => {
					var fragment_3 = root_1();
					Refresh_cw(first_child(fragment_3), { class: "h-3.5 w-3.5" });
					next(2);
					append($$anchor, fragment_3);
				};
				if_block(node_3, ($$render) => {
					if (get(loading)) $$render(consequent);
					else $$render(alternate, -1);
				});
				append($$anchor, fragment_1);
			},
			$$slots: { default: true }
		});
		reset(div_5);
		reset(div_1);
		reset(div);
		template_effect(() => {
			set_text(text, title());
			set_text(text_1, message());
		});
		append($$anchor, div);
	};
	if_block(node, ($$render) => {
		if (open()) $$render(consequent_1);
	});
	append($$anchor, fragment);
	pop();
}
//#endregion
export { ConflictDialog as t };

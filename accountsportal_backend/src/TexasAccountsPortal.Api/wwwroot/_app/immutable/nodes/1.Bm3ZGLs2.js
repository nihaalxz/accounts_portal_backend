import { B as append, Ct as setup_stores, D as head, G as text, H as from_html, Lt as next, Mt as push, Q as get, Rt as reset, bt as derived_safe_equal, dt as child, jt as pop, l as init, pt as sibling, rt as deferred_template_effect, ut as $document, wt as store_get } from "../chunks/BRNvcyYY.js";
import { t as goto } from "../chunks/BdZmOggu.js";
import "../chunks/DhaYE-8x.js";
import "../chunks/BFZVyN5n.js";
import { t as ErrorState } from "../chunks/BaJI1GRV.js";
import { t as page } from "../chunks/DbCwdT3x.js";
import { t as Button } from "../chunks/B56HWgqG.js";
import "../chunks/BUYRdMNF.js";
//#region src/routes/+error.svelte
var root = from_html(`<div class="h-screen w-screen flex flex-col items-center justify-center bg-muted/10 p-6"><div class="w-full max-w-[480px]"><!> <div class="flex justify-center mt-6"><!></div></div></div>`);
function _error($$anchor, $$props) {
	push($$props, false);
	const $page = () => store_get(page, "$page", $$stores);
	const [$$stores, $$cleanup] = setup_stores();
	init();
	var div = root();
	head("1j96wlh", ($$anchor) => {
		deferred_template_effect(() => {
			$document.title = `Error — ${$page().status ?? ""}`;
		});
	});
	var div_1 = child(div);
	var node = child(div_1);
	{
		let $0 = derived_safe_equal(() => $page().error?.message || "An unexpected routing error occurred.");
		let $1 = derived_safe_equal(() => $page().error?.message?.includes("correlation") ? "captured-telemetry" : void 0);
		ErrorState(node, {
			get title() {
				return `Application Error (${$page().status ?? ""})`;
			},
			get message() {
				return get($0);
			},
			get correlationId() {
				return get($1);
			}
		});
	}
	var div_2 = sibling(node, 2);
	Button(child(div_2), {
		onclick: () => goto("/dashboard"),
		class: "rounded-xl font-semibold cursor-pointer",
		children: ($$anchor, $$slotProps) => {
			next();
			append($$anchor, text("Return to Dashboard"));
		},
		$$slots: { default: true }
	});
	reset(div_2);
	reset(div_1);
	reset(div);
	append($$anchor, div);
	pop();
	$$cleanup();
}
//#endregion
export { _error as component };

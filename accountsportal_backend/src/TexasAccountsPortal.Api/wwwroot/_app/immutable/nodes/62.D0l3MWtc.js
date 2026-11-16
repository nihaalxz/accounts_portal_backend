import { B as append, D as head, G as text, H as from_html, Lt as next, Mt as push, Rt as reset, dt as child, it as effect, jt as pop, l as init, pt as sibling, ut as $document } from "../chunks/BRNvcyYY.js";
import { t as goto } from "../chunks/D5JuL223.js";
import "../chunks/DhaYE-8x.js";
import "../chunks/BFZVyN5n.js";
import { t as ErrorState } from "../chunks/BaJI1GRV.js";
import { t as Button } from "../chunks/B56HWgqG.js";
import "../chunks/D2xySE74.js";
//#region src/routes/forbidden/+page.svelte
var root = from_html(`<div class="h-[70vh] flex flex-col items-center justify-center p-6"><div class="w-full max-w-[480px]"><!> <div class="flex justify-center mt-6"><!></div></div></div>`);
function _page($$anchor, $$props) {
	push($$props, false);
	init();
	var div = root();
	head("1ogkli6", ($$anchor) => {
		effect(() => {
			$document.title = "Access Forbidden — Accounts Portal";
		});
	});
	var div_1 = child(div);
	var node = child(div_1);
	ErrorState(node, {
		title: "Access Denied (403 Forbidden)",
		message: "You do not possess the role permissions required to view this financial ledger or operational view. Please request access from a Master Accountant if this is an error."
	});
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
}
//#endregion
export { _page as component };

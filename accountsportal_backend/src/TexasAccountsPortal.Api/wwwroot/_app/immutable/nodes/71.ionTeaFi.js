import { B as append, Bt as reset, D as head, G as text, H as from_html, Nt as pop, Pt as push, dt as $document, ht as sibling, it as effect, l as init, pt as child, zt as next } from "../chunks/dXkmWTgM.js";
import { t as goto } from "../chunks/C3hEdzIU.js";
import "../chunks/DhaYE-8x.js";
import "../chunks/DZfWAsjW.js";
import { t as Button } from "../chunks/BhXsq3bC2.js";
import { t as ErrorState } from "../chunks/_Vg9md0J2.js";
import "../chunks/BKh7yVXb2.js";
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

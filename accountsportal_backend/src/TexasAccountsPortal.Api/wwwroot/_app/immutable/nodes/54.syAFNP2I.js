import { At as pop, E as head, It as next, Lt as reset, V as from_html, W as text, ft as sibling, jt as push, l as init, lt as $document, rt as effect, ut as child, z as append } from "../chunks/D1I-S_GP.js";
import { t as goto } from "../chunks/B6vfk650.js";
import "../chunks/DhaYE-8x.js";
import "../chunks/Cr7lFLqy.js";
import { t as ErrorState } from "../chunks/Bca_vH4r2.js";
import { t as Button } from "../chunks/CkghPc3G.js";
import "../chunks/DWcEvSoH.js";
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

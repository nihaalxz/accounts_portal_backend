import { At as pop, E as head, It as next, Lt as reset, V as from_html, jt as push, l as init, lt as $document, r as onMount, rt as effect, ut as child, z as append } from "../chunks/D1I-S_GP.js";
import { t as goto } from "../chunks/sJtPgu7K.js";
import "../chunks/DhaYE-8x.js";
import "../chunks/Cr7lFLqy.js";
import { t as Loader_circle } from "../chunks/C4L5vk6s2.js";
import "../chunks/CUBJy0SB.js";
//#region src/routes/(app)/accounts/new/+page.svelte
var root = from_html(`<div class="flex flex-col items-center justify-center py-24 gap-3 text-xs text-muted-foreground"><!> <span>Redirecting to cash account creation...</span></div>`);
function _page($$anchor, $$props) {
	push($$props, false);
	onMount(() => {
		goto("/accounts?new=true");
	});
	init();
	var div = root();
	head("1qm89rf", ($$anchor) => {
		effect(() => {
			$document.title = "Create Cash Account — Accounts Portal";
		});
	});
	Loader_circle(child(div), { class: "h-6 w-6 animate-spin text-primary" });
	next(2);
	reset(div);
	append($$anchor, div);
	pop();
}
//#endregion
export { _page as component };

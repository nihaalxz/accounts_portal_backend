import { B as append, D as head, H as from_html, Lt as next, Mt as push, Rt as reset, dt as child, it as effect, jt as pop, l as init, r as onMount, ut as $document } from "../chunks/CjADOP7e.js";
import { t as goto } from "../chunks/BPPinaBO.js";
import "../chunks/DhaYE-8x.js";
import "../chunks/CAg53IQA.js";
import { t as Loader_circle } from "../chunks/CmYj3lHu2.js";
import "../chunks/xGT3wnbG.js";
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

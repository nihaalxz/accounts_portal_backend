import { B as append, D as head, H as from_html, Lt as next, Mt as push, Rt as reset, dt as child, it as effect, jt as pop, l as init, r as onMount, ut as $document } from "../chunks/CjADOP7e.js";
import { t as goto } from "../chunks/DIN3eSLJ.js";
import "../chunks/DhaYE-8x.js";
import "../chunks/CAg53IQA.js";
import { t as Loader_circle } from "../chunks/CmYj3lHu2.js";
import "../chunks/BwVuRUvc.js";
//#region src/routes/(app)/banks/new/+page.svelte
var root = from_html(`<div class="flex flex-col items-center justify-center py-24 gap-3 text-xs text-muted-foreground"><!> <span>Redirecting to bank account registration...</span></div>`);
function _page($$anchor, $$props) {
	push($$props, false);
	onMount(() => {
		goto("/banks?new=true");
	});
	init();
	var div = root();
	head("1mvnz70", ($$anchor) => {
		effect(() => {
			$document.title = "Register Bank Account — Accounts Portal";
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

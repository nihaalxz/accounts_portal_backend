import { B as append, D as head, H as from_html, Lt as next, Mt as push, Rt as reset, dt as child, it as effect, jt as pop, l as init, r as onMount, ut as $document } from "../chunks/BdGPDeRo.js";
import { t as goto } from "../chunks/D6oOHf9i.js";
import "../chunks/DhaYE-8x.js";
import "../chunks/CAdj_q3a.js";
import { t as Loader_circle } from "../chunks/5kHV1wRh.js";
import "../chunks/BR5gg2xk2.js";
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

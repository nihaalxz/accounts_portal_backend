import { B as append, Ct as setup_stores, D as head, H as from_html, Lt as next, Mt as push, Rt as reset, dt as child, it as effect, jt as pop, l as init, r as onMount, ut as $document, wt as store_get } from "../chunks/BdGPDeRo.js";
import { t as goto } from "../chunks/Czo8uxRI.js";
import "../chunks/DhaYE-8x.js";
import "../chunks/CAdj_q3a.js";
import { t as Loader_circle } from "../chunks/5kHV1wRh.js";
import { t as page } from "../chunks/_tSqitE92.js";
import "../chunks/Dgz5SyX_2.js";
//#region src/routes/(app)/accounts/[id]/edit/+page.svelte
var root = from_html(`<div class="flex flex-col items-center justify-center py-24 gap-3 text-xs text-muted-foreground"><!> <span>Redirecting to cash account editing...</span></div>`);
function _page($$anchor, $$props) {
	push($$props, false);
	const $page = () => store_get(page, "$page", $$stores);
	const [$$stores, $$cleanup] = setup_stores();
	onMount(() => {
		goto(`/accounts?edit=${$page().params.id}`);
	});
	init();
	var div = root();
	head("1c1pkx5", ($$anchor) => {
		effect(() => {
			$document.title = "Edit Cash Account — Accounts Portal";
		});
	});
	Loader_circle(child(div), { class: "h-6 w-6 animate-spin text-primary" });
	next(2);
	reset(div);
	append($$anchor, div);
	pop();
	$$cleanup();
}
//#endregion
export { _page as component };

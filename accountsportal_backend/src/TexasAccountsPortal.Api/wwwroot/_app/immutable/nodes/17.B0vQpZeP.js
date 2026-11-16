import { B as append, Bt as reset, D as head, Et as store_get, H as from_html, Nt as pop, Pt as push, Tt as setup_stores, dt as $document, it as effect, l as init, pt as child, r as onMount, zt as next } from "../chunks/dXkmWTgM.js";
import { t as goto } from "../chunks/BRpOomof.js";
import "../chunks/DhaYE-8x.js";
import "../chunks/DZfWAsjW.js";
import { t as Loader_circle } from "../chunks/BMOA0yrB2.js";
import { t as page } from "../chunks/7i69tg_e.js";
import "../chunks/mkXcITrM2.js";
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

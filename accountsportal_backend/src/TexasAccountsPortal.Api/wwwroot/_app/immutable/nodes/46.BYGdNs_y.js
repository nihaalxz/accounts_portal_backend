import { B as append, H as from_html, Nt as pop, Pt as push, l as init, r as onMount } from "../chunks/dXkmWTgM.js";
import { t as goto } from "../chunks/CzaqueA7.js";
import "../chunks/DhaYE-8x.js";
import "../chunks/DZfWAsjW.js";
import "../chunks/B8FP0SzX2.js";
//#region src/routes/(app)/sales/heads/+page.svelte
var root = from_html(`<div class="h-96 flex items-center justify-center text-muted-foreground text-xs font-mono">Redirecting...</div>`);
function _page($$anchor, $$props) {
	push($$props, false);
	onMount(() => {
		goto("/sales/dashboard", { replaceState: true });
	});
	init();
	append($$anchor, root());
	pop();
}
//#endregion
export { _page as component };

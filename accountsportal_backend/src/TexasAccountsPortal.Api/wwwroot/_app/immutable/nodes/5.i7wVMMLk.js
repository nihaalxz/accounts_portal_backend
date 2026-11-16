import { B as append, Et as store_get, H as from_html, Nt as pop, Pt as push, Tt as setup_stores, l as init, r as onMount } from "../chunks/dXkmWTgM.js";
import { t as goto } from "../chunks/DRef9IpG.js";
import "../chunks/DhaYE-8x.js";
import { a as isAuthenticated } from "../chunks/B5_gL-Oo.js";
import "../chunks/DZfWAsjW.js";
import "../chunks/D38epgxg2.js";
//#region src/routes/+page.svelte
var root = from_html(`<div class="h-screen w-screen flex items-center justify-center"><div class="animate-pulse text-sm text-muted-foreground">Redirecting...</div></div>`);
function _page($$anchor, $$props) {
	push($$props, false);
	const $isAuthenticated = () => store_get(isAuthenticated, "$isAuthenticated", $$stores);
	const [$$stores, $$cleanup] = setup_stores();
	onMount(() => {
		if ($isAuthenticated()) goto("/dashboard");
		else goto("/login");
	});
	init();
	append($$anchor, root());
	pop();
	$$cleanup();
}
//#endregion
export { _page as component };

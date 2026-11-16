import { B as append, Ct as setup_stores, H as from_html, Mt as push, jt as pop, l as init, r as onMount, wt as store_get } from "../chunks/BdGPDeRo.js";
import { t as goto } from "../chunks/D6oOHf9i.js";
import "../chunks/DhaYE-8x.js";
import { a as isAuthenticated } from "../chunks/CTAGVRIm.js";
import "../chunks/CAdj_q3a.js";
import "../chunks/BR5gg2xk2.js";
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

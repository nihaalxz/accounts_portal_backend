import { At as pop, Ct as store_get, St as setup_stores, V as from_html, jt as push, l as init, r as onMount, z as append } from "../chunks/D1I-S_GP.js";
import { t as goto } from "../chunks/mp6QnMAy.js";
import "../chunks/DhaYE-8x.js";
import { a as isAuthenticated } from "../chunks/l09GTHa1.js";
import "../chunks/Cr7lFLqy.js";
import "../chunks/Cd763KZD2.js";
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

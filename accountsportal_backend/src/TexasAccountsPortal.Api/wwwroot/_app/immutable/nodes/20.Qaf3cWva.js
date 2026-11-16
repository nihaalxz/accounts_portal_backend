import { B as append, Bt as reset, D as head, H as from_html, Nt as pop, Pt as push, dt as $document, it as effect, l as init, pt as child, r as onMount, zt as next } from "../chunks/dXkmWTgM.js";
import { t as goto } from "../chunks/Bax_BF1i.js";
import "../chunks/DhaYE-8x.js";
import "../chunks/DZfWAsjW.js";
import { t as Loader_circle } from "../chunks/BMOA0yrB2.js";
import "../chunks/DBJSp2fi2.js";
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

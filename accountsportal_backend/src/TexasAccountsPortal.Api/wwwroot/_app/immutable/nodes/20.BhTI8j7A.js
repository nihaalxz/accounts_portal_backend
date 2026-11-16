import { At as pop, Ct as store_get, E as head, It as next, Lt as reset, St as setup_stores, V as from_html, jt as push, l as init, lt as $document, r as onMount, rt as effect, ut as child, z as append } from "../chunks/D1I-S_GP.js";
import { t as goto } from "../chunks/CKx5JxkB.js";
import "../chunks/DhaYE-8x.js";
import "../chunks/Cr7lFLqy.js";
import { t as Loader_circle } from "../chunks/C4L5vk6s2.js";
import { t as page } from "../chunks/BBTyXg7x.js";
import "../chunks/CAKlxZJh.js";
//#region src/routes/(app)/banks/[id]/edit/+page.svelte
var root = from_html(`<div class="flex flex-col items-center justify-center py-24 gap-3 text-xs text-muted-foreground"><!> <span>Redirecting to bank account editing...</span></div>`);
function _page($$anchor, $$props) {
	push($$props, false);
	const $page = () => store_get(page, "$page", $$stores);
	const [$$stores, $$cleanup] = setup_stores();
	onMount(() => {
		goto(`/banks?edit=${$page().params.id}`);
	});
	init();
	var div = root();
	head("9tz3t6", ($$anchor) => {
		effect(() => {
			$document.title = "Edit Bank Account — Accounts Portal";
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

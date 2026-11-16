import { B as append, Bt as reset, D as head, H as from_html, Nt as pop, Pt as push, dt as $document, ht as sibling, it as effect, l as init, pt as child, r as onMount } from "../chunks/dXkmWTgM.js";
import "../chunks/DhaYE-8x.js";
import "../chunks/DZfWAsjW.js";
import { n as StaffMetrics, t as StaffTable } from "../chunks/D5u_kj2q.js";
import { t as staffsStore } from "../chunks/B9dJTjfH.js";
//#region src/routes/(app)/staffs/accounts/+page.svelte
var root = from_html(`<div class="space-y-6"><!> <!></div>`);
function _page($$anchor, $$props) {
	push($$props, false);
	onMount(() => {
		staffsStore.loadAccounts();
	});
	init();
	var div = root();
	head("1wmn82m", ($$anchor) => {
		effect(() => {
			$document.title = "Accounts Staff — Texas Accounts Portal";
		});
	});
	var node = child(div);
	StaffMetrics(node, {
		get users() {
			return staffsStore.accounts.data;
		},
		portal: "accounts"
	});
	StaffTable(sibling(node, 2), {
		get users() {
			return staffsStore.accounts.data;
		},
		portal: "accounts",
		get loading() {
			return staffsStore.accounts.loading;
		},
		get error() {
			return staffsStore.accounts.error;
		},
		onRefresh: () => staffsStore.loadAccounts(true)
	});
	reset(div);
	append($$anchor, div);
	pop();
}
//#endregion
export { _page as component };

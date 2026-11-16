import { B as append, D as head, H as from_html, Mt as push, Rt as reset, dt as child, it as effect, jt as pop, l as init, pt as sibling, r as onMount, ut as $document } from "../chunks/CjADOP7e.js";
import "../chunks/DhaYE-8x.js";
import "../chunks/CAg53IQA.js";
import { t as staffsStore } from "../chunks/D7Wi036o.js";
import { n as StaffMetrics, t as StaffTable } from "../chunks/BIjkUnI62.js";
//#region src/routes/(app)/staffs/sales/+page.svelte
var root = from_html(`<div class="space-y-6"><!> <!></div>`);
function _page($$anchor, $$props) {
	push($$props, false);
	onMount(() => {
		staffsStore.loadSales();
	});
	init();
	var div = root();
	head("14f6174", ($$anchor) => {
		effect(() => {
			$document.title = "Sales Staff — Texas Accounts Portal";
		});
	});
	var node = child(div);
	StaffMetrics(node, {
		get users() {
			return staffsStore.sales.data;
		},
		portal: "sales"
	});
	StaffTable(sibling(node, 2), {
		get users() {
			return staffsStore.sales.data;
		},
		portal: "sales",
		get loading() {
			return staffsStore.sales.loading;
		},
		get error() {
			return staffsStore.sales.error;
		},
		onRefresh: () => staffsStore.loadSales(true)
	});
	reset(div);
	append($$anchor, div);
	pop();
}
//#endregion
export { _page as component };

import { A as component, B as append, Bt as reset, Ct as user_derived, D as head, Et as store_get, H as from_html, I as if_block, N as each, Nt as pop, P as index, Pt as push, Q as get, R as set_text, Tt as setup_stores, V as comment, _ as set_attribute, dt as $document, ht as sibling, it as effect, j as snippet, mt as first_child, ot as template_effect, pt as child, w as set_class, zt as next } from "../chunks/dXkmWTgM.js";
import "../chunks/DhaYE-8x.js";
import { i as hasRole } from "../chunks/xs5B10Eg.js";
import { t as Credit_card } from "../chunks/DZ-rRKb92.js";
import { t as History } from "../chunks/StzzW3F62.js";
import { t as Shield_alert } from "../chunks/BqY57apW.js";
import { t as page } from "../chunks/COMt3Ze9.js";
//#region src/routes/(app)/payroll/+layout.svelte
var root = from_html(`<div class="p-12 text-center border border-border rounded-2xl bg-card space-y-4 max-w-lg mx-auto my-12 shadow-sm"><!> <div class="space-y-1"><h2 class="text-base font-bold text-foreground">Access Restricted</h2> <p class="text-xs text-muted-foreground">Payroll & Salary Management is restricted exclusively to Master Accountants. Please contact your system administrator if you require access.</p></div></div>`);
var root_1 = from_html(`<a><!> </a>`);
var root_2 = from_html(`<div class="space-y-6"><div class="flex items-center border-b border-border bg-card rounded-2xl px-4 gap-2 shadow-sm overflow-x-auto"></div> <div><!></div></div>`);
function _layout($$anchor, $$props) {
	push($$props, true);
	const $page = () => store_get(page, "$page", $$stores);
	const [$$stores, $$cleanup] = setup_stores();
	const tabs = [{
		label: "Salary Profiles",
		route: "/payroll/salary-profiles",
		icon: Credit_card
	}, {
		label: "Payroll History",
		route: "/payroll/history",
		icon: History
	}];
	function isActiveRoute(currentPath, targetRoute) {
		return currentPath === targetRoute || currentPath.startsWith(targetRoute + "/");
	}
	var fragment = comment();
	head("16mv5cm", ($$anchor) => {
		effect(() => {
			$document.title = "Payroll & Salary Management — Texas Accounts Portal";
		});
	});
	var node = first_child(fragment);
	var consequent = ($$anchor) => {
		var div = root();
		Shield_alert(child(div), { class: "h-12 w-12 text-amber-500 mx-auto" });
		next(2);
		reset(div);
		append($$anchor, div);
	};
	var d = user_derived(() => !hasRole("master_accountant"));
	var alternate = ($$anchor) => {
		var div_1 = root_2();
		var div_2 = child(div_1);
		each(div_2, 21, () => tabs, index, ($$anchor, tab) => {
			const active = user_derived(() => isActiveRoute($page().url.pathname, get(tab).route));
			var a = root_1();
			var node_2 = child(a);
			component(node_2, () => get(tab).icon, ($$anchor, tab_icon) => {
				tab_icon($$anchor, { class: "h-4 w-4" });
			});
			var text = sibling(node_2);
			reset(a);
			template_effect(() => {
				set_attribute(a, "href", get(tab).route);
				set_class(a, 1, `flex items-center gap-2 px-4 py-3.5 text-xs font-bold transition-all border-b-2 shrink-0
						${get(active) ? "text-primary border-primary bg-primary/5" : "text-muted-foreground border-transparent hover:text-foreground hover:bg-muted/40"}`);
				set_text(text, ` ${get(tab).label ?? ""}`);
			});
			append($$anchor, a);
		});
		reset(div_2);
		var div_3 = sibling(div_2, 2);
		snippet(child(div_3), () => $$props.children);
		reset(div_3);
		reset(div_1);
		append($$anchor, div_1);
	};
	if_block(node, ($$render) => {
		if (get(d)) $$render(consequent);
		else $$render(alternate, -1);
	});
	append($$anchor, fragment);
	pop();
	$$cleanup();
}
//#endregion
export { _layout as component };

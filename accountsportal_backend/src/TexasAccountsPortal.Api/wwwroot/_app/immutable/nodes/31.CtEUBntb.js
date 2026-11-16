import { B as append, D as head, H as from_html, K as delegate, Mt as push, N as each, P as index, Q as get, R as set_text, Rt as reset, dt as child, it as effect, jt as pop, l as init, ot as template_effect, pt as sibling, q as delegated, ut as $document } from "../chunks/BdGPDeRo.js";
import { t as goto } from "../chunks/BylnKsEc.js";
import "../chunks/DhaYE-8x.js";
import "../chunks/CAdj_q3a.js";
import { t as Book_open } from "../chunks/DELsJJK4.js";
import { t as Chevron_right } from "../chunks/Dxef15ul.js";
import { t as File_text } from "../chunks/CLERR3SN.js";
import "../chunks/CJ9Yz_2f2.js";
//#region src/routes/(app)/reports/+page.svelte
var root = from_html(`<button class="bg-card border border-border hover:border-primary/40 rounded-2xl p-6 shadow-xs hover:shadow-md transition-all text-left flex flex-col justify-between gap-6 cursor-pointer group text-xs"><div class="space-y-3"><div class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:scale-105 transition-transform"><!></div> <div class="space-y-1"><h3 class="font-bold text-foreground text-sm group-hover:text-primary transition-colors"> </h3> <p class="text-muted-foreground leading-relaxed"> </p></div></div> <div class="flex items-center text-primary font-semibold gap-1.5 self-end"><span>Run Report</span> <!></div></button>`);
var root_1 = from_html(`<div class="space-y-6"><div class="flex flex-col gap-1"><h1 class="text-xl font-bold text-foreground">Reporting Hub</h1> <p class="text-xs text-muted-foreground">Access financial ledger statements, audit reports, and corporate expense analyses.</p></div> <div class="grid grid-cols-1 md:grid-cols-3 gap-6"></div></div>`);
function _page($$anchor, $$props) {
	push($$props, false);
	const reportLinks = [{
		title: "Ledger Account Statement",
		description: "Run detailed ledger account statements showing opening, closing and chronological running balances.",
		route: "/reports/statement",
		icon: Book_open
	}, {
		title: "Operational Expense Report",
		description: "Compile company expenditure reports, categorize claims, and audit categorical operational costs.",
		route: "/reports/expenses",
		icon: File_text
	}];
	init();
	var div = root_1();
	head("1jh84cd", ($$anchor) => {
		effect(() => {
			$document.title = "Reports Hub — Accounts Portal";
		});
	});
	var div_1 = sibling(child(div), 2);
	each(div_1, 5, () => reportLinks, index, ($$anchor, link) => {
		var button = root();
		var div_2 = child(button);
		var div_3 = child(div_2);
		var node = child(div_3);
		get(link).icon(node, { class: "h-5 w-5" });
		reset(div_3);
		var div_4 = sibling(div_3, 2);
		var h3 = child(div_4);
		var text = child(h3, true);
		reset(h3);
		var p = sibling(h3, 2);
		var text_1 = child(p, true);
		reset(p);
		reset(div_4);
		reset(div_2);
		var div_5 = sibling(div_2, 2);
		Chevron_right(sibling(child(div_5), 2), { class: "h-4 w-4 group-hover:translate-x-0.5 transition-transform" });
		reset(div_5);
		reset(button);
		template_effect(() => {
			set_text(text, get(link).title);
			set_text(text_1, get(link).description);
		});
		delegated("click", button, () => goto(get(link).route));
		append($$anchor, button);
	});
	reset(div_1);
	reset(div);
	append($$anchor, div);
	pop();
}
delegate(["click"]);
//#endregion
export { _page as component };

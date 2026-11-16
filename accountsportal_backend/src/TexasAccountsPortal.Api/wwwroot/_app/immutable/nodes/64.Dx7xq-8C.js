import { B as append, Bt as reset, Ct as user_derived, Et as store_get, G as text, H as from_html, I as if_block, J as event, K as delegate, N as each, Nt as pop, P as index, Pt as push, Q as get, R as set_text, S as select_option, Tt as setup_stores, V as comment, bt as state, gt as proxy, ht as sibling, mt as first_child, ot as template_effect, pt as child, q as delegated, r as onMount, vt as set, w as set_class, x as init_select, xt as update, zt as next } from "../chunks/dXkmWTgM.js";
import { t as goto } from "../chunks/Cwr0LTVn.js";
import "../chunks/DhaYE-8x.js";
import { t as Arrow_left } from "../chunks/Bn7x0kyr.js";
import { t as Chevron_left } from "../chunks/bgfi4Y0B2.js";
import { t as Chevron_right } from "../chunks/BQLzQDdY2.js";
import { t as page } from "../chunks/CU_scLrs.js";
import { t as Button } from "../chunks/BhXsq3bC.js";
import { t as ErrorState } from "../chunks/CRMNR9wu.js";
import "../chunks/D2AKXTE9.js";
import { t as Spinner } from "../chunks/DkxHSMb-2.js";
import { t as MoneyDisplay } from "../chunks/CIVSRuaR2.js";
import { t as DateDisplay } from "../chunks/DEr_pDJT2.js";
import { n as PageContainer, t as StatusBadge } from "../chunks/Br8UPlmC2.js";
import { n as PageHeader, t as SectionCard } from "../chunks/B6NiRhRv2.js";
import { t as Input } from "../chunks/aUAD-svz.js";
import { d as getSuppliers, u as getSupplierStatement } from "../chunks/HW3oWs3p.js";
//#region src/routes/(app)/suppliers/[id]/statement/+page.svelte
var root = from_html(`<!> Back to Wallet`, 1);
var root_1 = from_html(`<div class="flex justify-center py-20"><!></div>`);
var root_2 = from_html(`<div class="text-center py-12 text-sm text-muted-foreground">No transactions found matching your criteria.</div>`);
var root_3 = from_html(`<tr class="hover:bg-muted/10 transition-colors"><td class="p-3 font-semibold"> </td><td class="p-3"><span> </span></td><td class="p-3 text-right font-medium"><!></td><td class="p-3 text-xs uppercase"> </td><td class="p-3 text-xs font-mono"> </td><td class="p-3"><!></td><td class="p-3"><!></td></tr>`);
var root_4 = from_html(`<!> Previous`, 1);
var root_5 = from_html(`Next <!>`, 1);
var root_6 = from_html(`<div class="overflow-x-auto"><table class="w-full text-left border-collapse"><thead><tr class="border-b border-border text-xs font-semibold text-muted-foreground uppercase bg-muted/20"><th class="p-3">Transaction ID</th><th class="p-3">Type</th><th class="p-3 text-right">Debit / Credit</th><th class="p-3">Payment Method</th><th class="p-3">Reference</th><th class="p-3">Status</th><th class="p-3">Posting Date</th></tr></thead><tbody class="divide-y divide-border text-sm"></tbody></table></div> <div class="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border pt-4 mt-4"><span class="text-xs text-muted-foreground"> </span> <div class="flex items-center gap-4"><div class="flex items-center gap-2"><span class="text-xs text-muted-foreground whitespace-nowrap">Rows per page:</span> <select class="bg-background border border-border rounded-xl px-2.5 py-1 text-xs text-foreground focus:ring-1 focus:ring-primary focus:outline-none cursor-pointer"><option>10</option><option>20</option><option>50</option><option>100</option><option>200</option><option>500</option><option>1000 (All)</option></select></div> <div class="flex gap-2"><!> <!></div></div></div>`, 1);
var root_7 = from_html(`<!> <div class="p-4 border rounded-lg border-border bg-card"><form class="flex flex-col md:flex-row items-end gap-4"><div class="flex-1"><label class="block text-xs font-semibold mb-1" for="start">Start Date</label> <!></div> <div class="flex-1"><label class="block text-xs font-semibold mb-1" for="end">End Date</label> <!></div> <!></form></div> <!>`, 1);
function _page($$anchor, $$props) {
	push($$props, true);
	const $page = () => store_get(page, "$page", $$stores);
	const [$$stores, $$cleanup] = setup_stores();
	const supplierId = Number($page().params.id);
	let isLoading = state(true);
	let errorMsg = state(null);
	let supplier = state(null);
	let transactions = state(proxy([]));
	let currentPage = state(1);
	let pageSize = state(20);
	let startDate = state("");
	let endDate = state("");
	async function loadStatement() {
		set(isLoading, true);
		set(errorMsg, null);
		try {
			const [suppliersList, statementData] = await Promise.all([getSuppliers(), getSupplierStatement(supplierId, {
				page: get(currentPage),
				pageSize: get(pageSize),
				startDate: get(startDate) || void 0,
				endDate: get(endDate) || void 0
			})]);
			set(supplier, suppliersList.find((s) => s.id === supplierId) || null, true);
			set(transactions, statementData, true);
		} catch (err) {
			set(errorMsg, err.message || "Failed to load statement ledger.", true);
		} finally {
			set(isLoading, false);
		}
	}
	function handleSearch(e) {
		e.preventDefault();
		set(currentPage, 1);
		loadStatement();
	}
	function handlePrev() {
		if (get(currentPage) > 1) {
			update(currentPage, -1);
			loadStatement();
		}
	}
	function handleNext() {
		if (get(transactions).length === get(pageSize)) {
			update(currentPage);
			loadStatement();
		}
	}
	onMount(() => {
		loadStatement();
	});
	PageContainer($$anchor, {
		children: ($$anchor, $$slotProps) => {
			var fragment_1 = root_7();
			var node = first_child(fragment_1);
			{
				let $0 = user_derived(() => `${get(supplier)?.name || "Supplier"} Statement Ledger`);
				let $1 = user_derived(() => `Searchable audit statement ledger for Supplier ID ${supplierId}`);
				PageHeader(node, {
					get title() {
						return get($0);
					},
					get description() {
						return get($1);
					},
					children: ($$anchor, $$slotProps) => {
						Button($$anchor, {
							variant: "outline",
							onclick: () => goto(`/suppliers/${supplierId}`),
							children: ($$anchor, $$slotProps) => {
								var fragment_3 = root();
								Arrow_left(first_child(fragment_3), { class: "h-4 w-4 mr-2" });
								next();
								append($$anchor, fragment_3);
							},
							$$slots: { default: true }
						});
					},
					$$slots: { default: true }
				});
			}
			var div = sibling(node, 2);
			var form = child(div);
			var div_1 = child(form);
			Input(sibling(child(div_1), 2), {
				type: "date",
				id: "start",
				get value() {
					return get(startDate);
				},
				set value($$value) {
					set(startDate, $$value, true);
				}
			});
			reset(div_1);
			var div_2 = sibling(div_1, 2);
			Input(sibling(child(div_2), 2), {
				type: "date",
				id: "end",
				get value() {
					return get(endDate);
				},
				set value($$value) {
					set(endDate, $$value, true);
				}
			});
			reset(div_2);
			Button(sibling(div_2, 2), {
				type: "submit",
				children: ($$anchor, $$slotProps) => {
					next();
					append($$anchor, text("Filter Ledger"));
				},
				$$slots: { default: true }
			});
			reset(form);
			reset(div);
			var node_5 = sibling(div, 2);
			var consequent = ($$anchor) => {
				var div_3 = root_1();
				Spinner(child(div_3), { size: "lg" });
				reset(div_3);
				append($$anchor, div_3);
			};
			var consequent_1 = ($$anchor) => {
				ErrorState($$anchor, {
					get message() {
						return get(errorMsg);
					},
					retryAction: loadStatement
				});
			};
			var alternate_1 = ($$anchor) => {
				SectionCard($$anchor, {
					title: "Ledger Entries",
					children: ($$anchor, $$slotProps) => {
						var fragment_6 = comment();
						var node_7 = first_child(fragment_6);
						var consequent_2 = ($$anchor) => {
							append($$anchor, root_2());
						};
						var alternate = ($$anchor) => {
							var fragment_7 = root_6();
							var div_5 = first_child(fragment_7);
							var table = child(div_5);
							var tbody = sibling(child(table));
							each(tbody, 21, () => get(transactions), index, ($$anchor, tx) => {
								var tr = root_3();
								var td = child(tr);
								var text_1 = child(td);
								reset(td);
								var td_1 = sibling(td);
								var span = child(td_1);
								var text_2 = child(span, true);
								reset(span);
								reset(td_1);
								var td_2 = sibling(td_1);
								MoneyDisplay(child(td_2), { get amount() {
									return get(tx).amount;
								} });
								reset(td_2);
								var td_3 = sibling(td_2);
								var text_3 = child(td_3, true);
								reset(td_3);
								var td_4 = sibling(td_3);
								var text_4 = child(td_4, true);
								reset(td_4);
								var td_5 = sibling(td_4);
								StatusBadge(child(td_5), { get status() {
									return get(tx).status;
								} });
								reset(td_5);
								var td_6 = sibling(td_5);
								DateDisplay(child(td_6), { get value() {
									return get(tx).createdAt;
								} });
								reset(td_6);
								reset(tr);
								template_effect(() => {
									set_text(text_1, `#${get(tx).id ?? ""}`);
									set_class(span, 1, `text-[10px] font-mono py-0.5 px-1.5 rounded uppercase ${get(tx).transactionType === "incoming" || get(tx).transactionType === "salesreturn" || get(tx).transactionType === "purchasereturn" ? "bg-emerald-500/10 text-emerald-500" : "bg-rose-500/10 text-rose-500"}`);
									set_text(text_2, get(tx).transactionType);
									set_text(text_3, get(tx).paymentMethod);
									set_text(text_4, get(tx).referenceId || "—");
								});
								append($$anchor, tr);
							});
							reset(tbody);
							reset(table);
							reset(div_5);
							var div_6 = sibling(div_5, 2);
							var span_1 = child(div_6);
							var text_5 = child(span_1);
							reset(span_1);
							var div_7 = sibling(span_1, 2);
							var div_8 = child(div_7);
							var select = sibling(child(div_8), 2);
							var option = child(select);
							option.value = option.__value = 10;
							var option_1 = sibling(option);
							option_1.value = option_1.__value = 20;
							var option_2 = sibling(option_1);
							option_2.value = option_2.__value = 50;
							var option_3 = sibling(option_2);
							option_3.value = option_3.__value = 100;
							var option_4 = sibling(option_3);
							option_4.value = option_4.__value = 200;
							var option_5 = sibling(option_4);
							option_5.value = option_5.__value = 500;
							var option_6 = sibling(option_5);
							option_6.value = option_6.__value = 1e3;
							reset(select);
							var select_value;
							init_select(select);
							reset(div_8);
							var div_9 = sibling(div_8, 2);
							var node_11 = child(div_9);
							{
								let $0 = user_derived(() => get(currentPage) === 1);
								Button(node_11, {
									size: "sm",
									variant: "outline",
									onclick: handlePrev,
									get disabled() {
										return get($0);
									},
									children: ($$anchor, $$slotProps) => {
										var fragment_8 = root_4();
										Chevron_left(first_child(fragment_8), { class: "h-4 w-4 mr-1" });
										next();
										append($$anchor, fragment_8);
									},
									$$slots: { default: true }
								});
							}
							var node_13 = sibling(node_11, 2);
							{
								let $0 = user_derived(() => get(transactions).length < get(pageSize));
								Button(node_13, {
									size: "sm",
									variant: "outline",
									onclick: handleNext,
									get disabled() {
										return get($0);
									},
									children: ($$anchor, $$slotProps) => {
										next();
										var fragment_9 = root_5();
										Chevron_right(sibling(first_child(fragment_9)), { class: "h-4 w-4 ml-1" });
										append($$anchor, fragment_9);
									},
									$$slots: { default: true }
								});
							}
							reset(div_9);
							reset(div_7);
							reset(div_6);
							template_effect(() => {
								set_text(text_5, `Page ${get(currentPage) ?? ""}`);
								if (select_value !== (select_value = get(pageSize))) select.value = (select.__value = get(pageSize)) ?? "", select_option(select, get(pageSize));
							});
							delegated("change", select, (e) => {
								set(pageSize, Number(e.target.value), true);
								set(currentPage, 1);
								loadStatement();
							});
							append($$anchor, fragment_7);
						};
						if_block(node_7, ($$render) => {
							if (get(transactions).length === 0) $$render(consequent_2);
							else $$render(alternate, -1);
						});
						append($$anchor, fragment_6);
					},
					$$slots: { default: true }
				});
			};
			if_block(node_5, ($$render) => {
				if (get(isLoading)) $$render(consequent);
				else if (get(errorMsg)) $$render(consequent_1, 1);
				else $$render(alternate_1, -1);
			});
			event("submit", form, handleSearch);
			append($$anchor, fragment_1);
		},
		$$slots: { default: true }
	});
	pop();
	$$cleanup();
}
delegate(["change"]);
//#endregion
export { _page as component };

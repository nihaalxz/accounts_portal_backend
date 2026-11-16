import { B as append, Bt as reset, Ct as user_derived, Et as store_get, G as text, H as from_html, I as if_block, N as each, Nt as pop, P as index, Pt as push, Q as get, R as set_text, Tt as setup_stores, V as comment, bt as state, gt as proxy, ht as sibling, mt as first_child, ot as template_effect, pt as child, r as onMount, vt as set, w as set_class, zt as next } from "../chunks/dXkmWTgM.js";
import { t as goto } from "../chunks/DvCt9lkO.js";
import "../chunks/DhaYE-8x.js";
import { t as Arrow_left } from "../chunks/Bn7x0kyr.js";
import { t as Landmark } from "../chunks/D_q7zQKx2.js";
import { t as Plus } from "../chunks/BObidJ7B2.js";
import { t as ErrorState } from "../chunks/fRCVf-jG2.js";
import { t as Wallet } from "../chunks/BahXSy4P.js";
import { t as page } from "../chunks/DOz6Lf5D.js";
import { t as Button } from "../chunks/BhXsq3bC.js";
import "../chunks/DoC5XnUn.js";
import { t as MoneyDisplay } from "../chunks/CIVSRuaR.js";
import { t as Spinner } from "../chunks/DkxHSMb-.js";
import { t as DateDisplay } from "../chunks/CJpXG-QD.js";
import { i as PageContainer, n as SectionCard, r as PageHeader, t as StatusBadge } from "../chunks/BuYFiLxJ.js";
import { d as getSuppliers, u as getSupplierStatement } from "../chunks/DsHDlh_S2.js";
//#region src/routes/(app)/suppliers/[id]/+page.svelte
var root = from_html(`<!> Back to list`, 1);
var root_1 = from_html(`<!> Settle Credit Debt`, 1);
var root_2 = from_html(`<!> Post Payment / Top-up`, 1);
var root_3 = from_html(`<!> <!> <!> <!>`, 1);
var root_4 = from_html(`<div class="flex justify-center py-20"><!></div>`);
var root_5 = from_html(`<span class="text-[10px] bg-muted px-1.5 py-0.5 rounded border border-border"> </span>`);
var root_6 = from_html(`<div class="text-center py-12 text-sm text-muted-foreground">No ledger entries found for this supplier.</div>`);
var root_7 = from_html(`<tr class="hover:bg-muted/10 transition-colors"><td class="p-3 font-semibold"> </td><td class="p-3"><span> </span></td><td class="p-3 text-right font-medium"><!></td><td class="p-3 text-xs uppercase"> </td><td class="p-3 text-xs font-mono"> </td><td class="p-3"><!></td><td class="p-3"><!></td></tr>`);
var root_8 = from_html(`<div class="overflow-x-auto"><table class="w-full text-left border-collapse"><thead><tr class="border-b border-border text-xs font-semibold text-muted-foreground uppercase bg-muted/20"><th class="p-3">Txn ID</th><th class="p-3">Type</th><th class="p-3 text-right">Amount</th><th class="p-3">Method</th><th class="p-3">Reference</th><th class="p-3">Status</th><th class="p-3">Date</th></tr></thead><tbody class="divide-y divide-border text-sm"></tbody></table></div>`);
var root_9 = from_html(`<div class="grid grid-cols-1 md:grid-cols-3 gap-6"><div class="border rounded-lg border-border p-5 bg-card flex flex-col justify-between shadow-sm"><div class="flex items-center justify-between"><div><span class="text-xs font-semibold text-muted-foreground uppercase">Authoritative Wallet</span> <span class="block text-2xl font-bold font-mono tracking-tight text-emerald-500 mt-1"><!></span></div> <!></div> <!></div> <div class="border rounded-lg border-border p-5 bg-card flex flex-col justify-between shadow-sm"><div class="flex items-center justify-between"><div><span class="text-xs font-semibold text-muted-foreground uppercase">Credit Wallet (Outstanding)</span> <span class="block text-2xl font-bold font-mono tracking-tight text-rose-500 mt-1"><!></span></div> <!></div> <!></div> <div class="border rounded-lg border-border p-5 bg-card flex flex-col justify-between shadow-sm"><div><span class="text-xs font-semibold text-muted-foreground uppercase">Supplier Metadata</span> <div class="flex items-center gap-2 mt-1"><span class="text-sm font-semibold"> </span> <!></div></div> <div class="flex flex-wrap gap-1 mt-2"></div></div></div> <div class="mt-6"><!></div>`, 1);
var root_10 = from_html(`<!> <!>`, 1);
function _page($$anchor, $$props) {
	push($$props, true);
	const $page = () => store_get(page, "$page", $$stores);
	const [$$stores, $$cleanup] = setup_stores();
	const supplierId = Number($page().params.id);
	let isLoading = state(true);
	let errorMsg = state(null);
	let supplier = state(null);
	let recentTransactions = state(proxy([]));
	async function loadSupplierDetails() {
		set(isLoading, true);
		set(errorMsg, null);
		try {
			const [suppliersList, statementData] = await Promise.all([getSuppliers(), getSupplierStatement(supplierId, {
				page: 1,
				pageSize: 15
			})]);
			set(supplier, suppliersList.find((s) => s.id === supplierId) || null, true);
			if (!get(supplier)) throw new Error(`Supplier with ID ${supplierId} not found.`);
			set(recentTransactions, statementData, true);
		} catch (err) {
			set(errorMsg, err.message || "Failed to load supplier details.", true);
		} finally {
			set(isLoading, false);
		}
	}
	onMount(() => {
		loadSupplierDetails();
	});
	PageContainer($$anchor, {
		children: ($$anchor, $$slotProps) => {
			var fragment_1 = root_10();
			var node = first_child(fragment_1);
			{
				let $0 = user_derived(() => get(supplier)?.name || `Supplier #${supplierId}`);
				let $1 = user_derived(() => `Wallet and payout controls for supplier code ${get(supplier)?.code || ""}`);
				PageHeader(node, {
					get title() {
						return get($0);
					},
					get description() {
						return get($1);
					},
					children: ($$anchor, $$slotProps) => {
						var fragment_2 = root_3();
						var node_1 = first_child(fragment_2);
						Button(node_1, {
							variant: "outline",
							onclick: () => goto("/suppliers"),
							children: ($$anchor, $$slotProps) => {
								var fragment_3 = root();
								Arrow_left(first_child(fragment_3), { class: "h-4 w-4 mr-2" });
								next();
								append($$anchor, fragment_3);
							},
							$$slots: { default: true }
						});
						var node_3 = sibling(node_1, 2);
						Button(node_3, {
							variant: "outline",
							onclick: () => goto(`/suppliers/${supplierId}/statement`),
							children: ($$anchor, $$slotProps) => {
								next();
								append($$anchor, text("View Statement Ledger"));
							},
							$$slots: { default: true }
						});
						var node_4 = sibling(node_3, 2);
						Button(node_4, {
							variant: "secondary",
							onclick: () => goto(`/payments/new?supplierId=${supplierId}&type=supplier_credit`),
							children: ($$anchor, $$slotProps) => {
								var fragment_4 = root_1();
								Landmark(first_child(fragment_4), { class: "h-4 w-4 mr-1.5" });
								next();
								append($$anchor, fragment_4);
							},
							$$slots: { default: true }
						});
						Button(sibling(node_4, 2), {
							onclick: () => goto(`/payments/new?supplierId=${supplierId}&type=supplier_wallet`),
							children: ($$anchor, $$slotProps) => {
								var fragment_5 = root_2();
								Plus(first_child(fragment_5), { class: "h-4 w-4 mr-1.5" });
								next();
								append($$anchor, fragment_5);
							},
							$$slots: { default: true }
						});
						append($$anchor, fragment_2);
					},
					$$slots: { default: true }
				});
			}
			var node_8 = sibling(node, 2);
			var consequent = ($$anchor) => {
				var div = root_4();
				Spinner(child(div), { size: "lg" });
				reset(div);
				append($$anchor, div);
			};
			var consequent_1 = ($$anchor) => {
				ErrorState($$anchor, {
					get message() {
						return get(errorMsg);
					},
					retryAction: loadSupplierDetails
				});
			};
			var consequent_4 = ($$anchor) => {
				var fragment_7 = root_9();
				var div_1 = first_child(fragment_7);
				var div_2 = child(div_1);
				var div_3 = child(div_2);
				var div_4 = child(div_3);
				var span = sibling(child(div_4), 2);
				MoneyDisplay(child(span), { get amount() {
					return get(supplier).wallet;
				} });
				reset(span);
				reset(div_4);
				Wallet(sibling(div_4, 2), { class: "h-10 w-10 text-emerald-500/20" });
				reset(div_3);
				Button(sibling(div_3, 2), {
					variant: "outline",
					size: "sm",
					class: "mt-3 text-xs font-semibold text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-950 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 w-full",
					onclick: () => goto(`/payments/new?supplierId=${supplierId}&type=supplier_wallet`),
					children: ($$anchor, $$slotProps) => {
						next();
						append($$anchor, text("Top-up Wallet"));
					},
					$$slots: { default: true }
				});
				reset(div_2);
				var div_5 = sibling(div_2, 2);
				var div_6 = child(div_5);
				var div_7 = child(div_6);
				var span_1 = sibling(child(div_7), 2);
				MoneyDisplay(child(span_1), { get amount() {
					return get(supplier).creditWallet;
				} });
				reset(span_1);
				reset(div_7);
				Landmark(sibling(div_7, 2), { class: "h-10 w-10 text-rose-500/20" });
				reset(div_6);
				var node_15 = sibling(div_6, 2);
				var consequent_2 = ($$anchor) => {
					Button($$anchor, {
						variant: "outline",
						size: "sm",
						class: "mt-3 text-xs font-semibold text-rose-600 dark:text-rose-400 border-rose-200 dark:border-rose-950 hover:bg-rose-50 dark:hover:bg-rose-950/30 w-full",
						onclick: () => goto(`/payments/new?supplierId=${supplierId}&type=supplier_credit`),
						children: ($$anchor, $$slotProps) => {
							next();
							var text_2 = text();
							template_effect(($0) => set_text(text_2, `Settle / Clear Credit (${$0 ?? ""} BHD)`), [() => get(supplier).creditWallet.toFixed(3)]);
							append($$anchor, text_2);
						},
						$$slots: { default: true }
					});
				};
				if_block(node_15, ($$render) => {
					if (get(supplier).creditWallet > 0) $$render(consequent_2);
				});
				reset(div_5);
				var div_8 = sibling(div_5, 2);
				var div_9 = child(div_8);
				var div_10 = sibling(child(div_9), 2);
				var span_2 = child(div_10);
				var text_3 = child(span_2, true);
				reset(span_2);
				var node_16 = sibling(span_2, 2);
				{
					let $0 = user_derived(() => get(supplier).isVerified ? "Verified" : "Unverified");
					StatusBadge(node_16, { get status() {
						return get($0);
					} });
				}
				reset(div_10);
				reset(div_9);
				var div_11 = sibling(div_9, 2);
				each(div_11, 21, () => get(supplier).categories, index, ($$anchor, cat) => {
					var span_3 = root_5();
					var text_4 = child(span_3, true);
					reset(span_3);
					template_effect(() => set_text(text_4, get(cat)));
					append($$anchor, span_3);
				});
				reset(div_11);
				reset(div_8);
				reset(div_1);
				var div_12 = sibling(div_1, 2);
				SectionCard(child(div_12), {
					title: "Recent Transactions Statement",
					children: ($$anchor, $$slotProps) => {
						var fragment_10 = comment();
						var node_18 = first_child(fragment_10);
						var consequent_3 = ($$anchor) => {
							append($$anchor, root_6());
						};
						var alternate = ($$anchor) => {
							var div_14 = root_8();
							var table = child(div_14);
							var tbody = sibling(child(table));
							each(tbody, 21, () => get(recentTransactions), index, ($$anchor, tx) => {
								var tr = root_7();
								var td = child(tr);
								var text_5 = child(td);
								reset(td);
								var td_1 = sibling(td);
								var span_4 = child(td_1);
								var text_6 = child(span_4, true);
								reset(span_4);
								reset(td_1);
								var td_2 = sibling(td_1);
								MoneyDisplay(child(td_2), { get amount() {
									return get(tx).amount;
								} });
								reset(td_2);
								var td_3 = sibling(td_2);
								var text_7 = child(td_3, true);
								reset(td_3);
								var td_4 = sibling(td_3);
								var text_8 = child(td_4, true);
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
									set_text(text_5, `#${get(tx).id ?? ""}`);
									set_class(span_4, 1, `text-[10px] font-mono py-0.5 px-1.5 rounded uppercase ${get(tx).transactionType === "incoming" || get(tx).transactionType === "salesreturn" ? "bg-emerald-500/10 text-emerald-500" : "bg-rose-500/10 text-rose-500"}`);
									set_text(text_6, get(tx).transactionType);
									set_text(text_7, get(tx).paymentMethod);
									set_text(text_8, get(tx).referenceId || "—");
								});
								append($$anchor, tr);
							});
							reset(tbody);
							reset(table);
							reset(div_14);
							append($$anchor, div_14);
						};
						if_block(node_18, ($$render) => {
							if (get(recentTransactions).length === 0) $$render(consequent_3);
							else $$render(alternate, -1);
						});
						append($$anchor, fragment_10);
					},
					$$slots: { default: true }
				});
				reset(div_12);
				template_effect(() => set_text(text_3, get(supplier).code));
				append($$anchor, fragment_7);
			};
			if_block(node_8, ($$render) => {
				if (get(isLoading)) $$render(consequent);
				else if (get(errorMsg)) $$render(consequent_1, 1);
				else if (get(supplier)) $$render(consequent_4, 2);
			});
			append($$anchor, fragment_1);
		},
		$$slots: { default: true }
	});
	pop();
	$$cleanup();
}
//#endregion
export { _page as component };

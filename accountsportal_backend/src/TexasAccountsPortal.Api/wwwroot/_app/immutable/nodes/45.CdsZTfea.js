import { B as append, Ct as setup_stores, G as text, H as from_html, I as if_block, J as event, Lt as next, Mt as push, N as each, P as index, Q as get, R as set_text, Rt as reset, V as comment, b as bind_select_value, dt as child, ft as first_child, gt as set, jt as pop, m as customizable_select, mt as proxy, ot as template_effect, pt as sibling, r as onMount, st as user_effect, vt as state, w as set_class, wt as store_get, xt as user_derived } from "../chunks/BdGPDeRo.js";
import { t as goto } from "../chunks/CtUgPB60.js";
import "../chunks/DhaYE-8x.js";
import "../chunks/BnTDNLUv.js";
import { r as toast } from "../chunks/BZc__OC9.js";
import { t as Arrow_left } from "../chunks/Cbjzxiq1.js";
import { t as Landmark } from "../chunks/BzqZ4Fsu.js";
import { t as ErrorState } from "../chunks/D6Kn8Mes2.js";
import { t as Wallet } from "../chunks/Pu9dUKP42.js";
import { t as page } from "../chunks/DgZEQu_i2.js";
import { t as Button } from "../chunks/zyE_82FR2.js";
import "../chunks/BsVlR_zN2.js";
import { t as MoneyDisplay } from "../chunks/BjJP4BTf2.js";
import { t as ConfirmationDialog } from "../chunks/D8xz02uw2.js";
import { t as DateDisplay } from "../chunks/Dr7G9lQx2.js";
import { i as PageContainer, n as SectionCard, r as PageHeader, t as StatusBadge } from "../chunks/Bml-rNpe.js";
import { t as Spinner } from "../chunks/B2_BD2Fn.js";
import { r as getAccounts } from "../chunks/QuksKtM9.js";
import { n as getBanks } from "../chunks/CQ3aTNMb.js";
import { t as Input } from "../chunks/BbFzIowX.js";
import { d as getSuppliers, o as createSupplierPayment, u as getSupplierStatement } from "../chunks/4DqFBKe6.js";
//#region src/routes/(app)/suppliers/[id]/+page.svelte
var root = from_html(`<!> Back to list`, 1);
var root_1 = from_html(`<!> <!>`, 1);
var root_2 = from_html(`<div class="flex justify-center py-20"><!></div>`);
var root_3 = from_html(`<span class="text-[10px] bg-muted px-1.5 py-0.5 rounded border border-border"> </span>`);
var option_content = from_html(` <!>)`, 1);
var root_4 = from_html(`<option><!></option>`);
var root_5 = from_html(`<optgroup label="Bank Accounts"></optgroup>`);
var root_6 = from_html(`<optgroup label="Cash Accounts"></optgroup>`);
var root_7 = from_html(`<div><label class="block text-xs font-semibold mb-1.5" for="sourceSel"> </label> <select id="sourceSel" required="" class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><!></select></div>`);
var root_8 = from_html(`<form class="space-y-4"><p class="text-xs text-muted-foreground">Initiate a payout to the supplier. If current user is Master Accountant, it will auto-approve instantly; otherwise, it queues for review.</p> <div><label class="block text-xs font-semibold mb-1.5" for="payMethod">Payment Method</label> <select id="payMethod" required="" class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><option>Bank Account</option><option>Cash Account</option><option>Credit (added to credit wallet of the supplier)</option></select></div> <!> <div><label class="block text-xs font-semibold mb-1.5" for="amt">Amount (BHD)</label> <!></div> <div><label class="block text-xs font-semibold mb-1.5" for="ref">Reference Number</label> <!></div> <div><label class="block text-xs font-semibold mb-1.5" for="desc">Description</label> <!></div> <!></form>`);
var root_9 = from_html(`<div class="text-center py-12 text-sm text-muted-foreground">No ledger entries found for this supplier.</div>`);
var root_10 = from_html(`<tr class="hover:bg-muted/10 transition-colors"><td class="p-3 font-semibold"> </td><td class="p-3"><span> </span></td><td class="p-3 text-right font-medium"><!></td><td class="p-3 text-xs uppercase"> </td><td class="p-3 text-xs font-mono"> </td><td class="p-3"><!></td><td class="p-3"><!></td></tr>`);
var root_11 = from_html(`<div class="overflow-x-auto"><table class="w-full text-left border-collapse"><thead><tr class="border-b border-border text-xs font-semibold text-muted-foreground uppercase bg-muted/20"><th class="p-3">Txn ID</th><th class="p-3">Type</th><th class="p-3 text-right">Amount</th><th class="p-3">Method</th><th class="p-3">Reference</th><th class="p-3">Status</th><th class="p-3">Date</th></tr></thead><tbody class="divide-y divide-border text-sm"></tbody></table></div>`);
var root_12 = from_html(`<div class="grid grid-cols-1 md:grid-cols-3 gap-6"><div class="border rounded-lg border-border p-5 bg-card flex items-center justify-between shadow-sm"><div><span class="text-xs font-semibold text-muted-foreground uppercase">Authoritative Wallet</span> <span class="block text-2xl font-bold font-mono tracking-tight text-emerald-500 mt-1"><!></span></div> <!></div> <div class="border rounded-lg border-border p-5 bg-card flex items-center justify-between shadow-sm"><div><span class="text-xs font-semibold text-muted-foreground uppercase">Credit Wallet (Outstanding)</span> <span class="block text-2xl font-bold font-mono tracking-tight text-rose-500 mt-1"><!></span></div> <!></div> <div class="border rounded-lg border-border p-5 bg-card flex flex-col justify-between shadow-sm"><div><span class="text-xs font-semibold text-muted-foreground uppercase">Supplier Metadata</span> <div class="flex items-center gap-2 mt-1"><span class="text-sm font-semibold"> </span> <!></div></div> <div class="flex flex-wrap gap-1 mt-2"></div></div></div> <div class="grid grid-cols-1 lg:grid-cols-3 gap-6"><div class="lg:col-span-1"><!></div> <div class="lg:col-span-2"><!></div></div>`, 1);
var root_13 = from_html(`<!> <!> <!>`, 1);
function _page($$anchor, $$props) {
	push($$props, true);
	const $page = () => store_get(page, "$page", $$stores);
	const [$$stores, $$cleanup] = setup_stores();
	const supplierId = Number($page().params.id);
	let isLoading = state(true);
	let errorMsg = state(null);
	let isSubmitting = state(false);
	let supplier = state(null);
	let cashAccounts = state(proxy([]));
	let bankAccounts = state(proxy([]));
	let recentTransactions = state(proxy([]));
	let amount = state(0);
	let paymentMethod = state("Bank");
	let sourceAccountSelectId = state("");
	let referenceNumber = state("");
	let description = state("");
	let showPayConfirm = state(false);
	async function loadSupplierDetails() {
		set(isLoading, true);
		set(errorMsg, null);
		try {
			const [suppliersList, cashData, bankData, statementData] = await Promise.all([
				getSuppliers(),
				getAccounts(),
				getBanks(),
				getSupplierStatement(supplierId, {
					page: 1,
					pageSize: 10
				})
			]);
			set(supplier, suppliersList.find((s) => s.id === supplierId) || null, true);
			if (!get(supplier)) throw new Error(`Supplier with ID ${supplierId} not found.`);
			set(cashAccounts, cashData.filter((a) => a.isActive), true);
			set(bankAccounts, bankData.filter((b) => b.isActive), true);
			set(recentTransactions, statementData, true);
			if (get(bankAccounts).length > 0 && get(bankAccounts)[0]) set(sourceAccountSelectId, `bank_${get(bankAccounts)[0].id}`);
			else if (get(cashAccounts).length > 0 && get(cashAccounts)[0]) set(sourceAccountSelectId, `account_${get(cashAccounts)[0].id}`);
		} catch (err) {
			set(errorMsg, err.message || "Failed to load supplier details.", true);
		} finally {
			set(isLoading, false);
		}
	}
	user_effect(() => {
		if (get(paymentMethod) === "Bank") {
			const firstBank = get(bankAccounts)[0];
			if (!get(sourceAccountSelectId).startsWith("bank_") && firstBank) set(sourceAccountSelectId, `bank_${firstBank.id}`);
		} else if (get(paymentMethod) === "Cash") {
			const firstCash = get(cashAccounts)[0];
			if (!get(sourceAccountSelectId).startsWith("account_") && firstCash) set(sourceAccountSelectId, `account_${firstCash.id}`);
		}
	});
	async function executePayment() {
		if (!get(supplier)) return;
		set(showPayConfirm, false);
		set(isSubmitting, true);
		const idempotencyKey = crypto.randomUUID();
		try {
			await createSupplierPayment({
				supplierId: get(supplier).id,
				supplierName: get(supplier).name,
				amount: get(amount),
				paymentMethod: get(paymentMethod),
				sourceAccountId: get(paymentMethod) === "Credit" ? null : get(sourceAccountSelectId),
				referenceNumber: get(referenceNumber) || null,
				externalReference: `PAY-${Date.now()}`,
				serviceType: "SupplierPayment",
				description: get(description) || null
			}, idempotencyKey);
			toast.success("Supplier payment posted successfully.");
			set(amount, 0);
			set(referenceNumber, "");
			set(description, "");
			await loadSupplierDetails();
		} catch (err) {
			toast.error(err.message || "Payment posting failed.");
		} finally {
			set(isSubmitting, false);
		}
	}
	onMount(() => {
		loadSupplierDetails();
	});
	PageContainer($$anchor, {
		children: ($$anchor, $$slotProps) => {
			var fragment_1 = root_13();
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
						var fragment_2 = root_1();
						var node_1 = first_child(fragment_2);
						Button(node_1, {
							variant: "outline",
							onclick: () => goto("/suppliers"),
							get disabled() {
								return get(isSubmitting);
							},
							children: ($$anchor, $$slotProps) => {
								var fragment_3 = root();
								Arrow_left(first_child(fragment_3), { class: "h-4 w-4 mr-2" });
								next();
								append($$anchor, fragment_3);
							},
							$$slots: { default: true }
						});
						Button(sibling(node_1, 2), {
							variant: "secondary",
							onclick: () => goto(`/suppliers/${supplierId}/statement`),
							children: ($$anchor, $$slotProps) => {
								next();
								append($$anchor, text("View Statement Ledger"));
							},
							$$slots: { default: true }
						});
						append($$anchor, fragment_2);
					},
					$$slots: { default: true }
				});
			}
			var node_4 = sibling(node, 2);
			var consequent = ($$anchor) => {
				var div = root_2();
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
			var consequent_6 = ($$anchor) => {
				var fragment_5 = root_12();
				var div_1 = first_child(fragment_5);
				var div_2 = child(div_1);
				var div_3 = child(div_2);
				var span = sibling(child(div_3), 2);
				MoneyDisplay(child(span), { get amount() {
					return get(supplier).wallet;
				} });
				reset(span);
				reset(div_3);
				Wallet(sibling(div_3, 2), { class: "h-10 w-10 text-emerald-500/20" });
				reset(div_2);
				var div_4 = sibling(div_2, 2);
				var div_5 = child(div_4);
				var span_1 = sibling(child(div_5), 2);
				MoneyDisplay(child(span_1), { get amount() {
					return get(supplier).creditWallet;
				} });
				reset(span_1);
				reset(div_5);
				Landmark(sibling(div_5, 2), { class: "h-10 w-10 text-rose-500/20" });
				reset(div_4);
				var div_6 = sibling(div_4, 2);
				var div_7 = child(div_6);
				var div_8 = sibling(child(div_7), 2);
				var span_2 = child(div_8);
				var text_1 = child(span_2, true);
				reset(span_2);
				var node_10 = sibling(span_2, 2);
				{
					let $0 = user_derived(() => get(supplier).isVerified ? "Verified" : "Unverified");
					StatusBadge(node_10, { get status() {
						return get($0);
					} });
				}
				reset(div_8);
				reset(div_7);
				var div_9 = sibling(div_7, 2);
				each(div_9, 21, () => get(supplier).categories, index, ($$anchor, cat) => {
					var span_3 = root_3();
					var text_2 = child(span_3, true);
					reset(span_3);
					template_effect(() => set_text(text_2, get(cat)));
					append($$anchor, span_3);
				});
				reset(div_9);
				reset(div_6);
				reset(div_1);
				var div_10 = sibling(div_1, 2);
				var div_11 = child(div_10);
				SectionCard(child(div_11), {
					title: "Post Supplier Payment",
					children: ($$anchor, $$slotProps) => {
						var form = root_8();
						var div_12 = sibling(child(form), 2);
						var select = sibling(child(div_12), 2);
						var option = child(select);
						option.value = option.__value = "Bank";
						var option_1 = sibling(option);
						option_1.value = option_1.__value = "Cash";
						var option_2 = sibling(option_1);
						option_2.value = option_2.__value = "Credit";
						reset(select);
						reset(div_12);
						var node_12 = sibling(div_12, 2);
						var consequent_4 = ($$anchor) => {
							var div_13 = root_7();
							var label = child(div_13);
							var text_3 = child(label);
							reset(label);
							var select_1 = sibling(label, 2);
							var node_13 = child(select_1);
							var consequent_2 = ($$anchor) => {
								var optgroup = root_5();
								each(optgroup, 21, () => get(bankAccounts), index, ($$anchor, b) => {
									var option_3 = root_4();
									customizable_select(option_3, () => {
										var anchor = child(option_3);
										var fragment_6 = option_content();
										var text_4 = first_child(fragment_6);
										MoneyDisplay(sibling(text_4), { get amount() {
											return get(b).currentBalance;
										} });
										next();
										template_effect(() => set_text(text_4, `${get(b).bankName ?? ""} - ${get(b).accountNumber ?? ""} (Bal: `));
										append(anchor, fragment_6);
									});
									var option_3_value = {};
									template_effect(() => {
										if (option_3_value !== (option_3_value = `bank_${get(b).id}`)) option_3.value = option_3.__value = `bank_${get(b).id}`;
									});
									append($$anchor, option_3);
								});
								reset(optgroup);
								append($$anchor, optgroup);
							};
							var consequent_3 = ($$anchor) => {
								var optgroup_1 = root_6();
								each(optgroup_1, 21, () => get(cashAccounts), index, ($$anchor, c) => {
									var option_4 = root_4();
									customizable_select(option_4, () => {
										var anchor_1 = child(option_4);
										var fragment_7 = option_content();
										var text_5 = first_child(fragment_7);
										MoneyDisplay(sibling(text_5), { get amount() {
											return get(c).currentBalance;
										} });
										next();
										template_effect(() => set_text(text_5, `${get(c).name ?? ""} (Bal: `));
										append(anchor_1, fragment_7);
									});
									var option_4_value = {};
									template_effect(() => {
										if (option_4_value !== (option_4_value = `account_${get(c).id}`)) option_4.value = option_4.__value = `account_${get(c).id}`;
									});
									append($$anchor, option_4);
								});
								reset(optgroup_1);
								append($$anchor, optgroup_1);
							};
							if_block(node_13, ($$render) => {
								if (get(paymentMethod) === "Bank") $$render(consequent_2);
								else if (get(paymentMethod) === "Cash") $$render(consequent_3, 1);
							});
							reset(select_1);
							reset(div_13);
							template_effect(() => set_text(text_3, `Source ${get(paymentMethod) === "Cash" ? "Cash" : "Bank"} Account`));
							bind_select_value(select_1, () => get(sourceAccountSelectId), ($$value) => set(sourceAccountSelectId, $$value));
							append($$anchor, div_13);
						};
						if_block(node_12, ($$render) => {
							if (get(paymentMethod) !== "Credit") $$render(consequent_4);
						});
						var div_14 = sibling(node_12, 2);
						Input(sibling(child(div_14), 2), {
							type: "number",
							step: "0.001",
							id: "amt",
							required: true,
							min: "0.01",
							get value() {
								return get(amount);
							},
							set value($$value) {
								set(amount, $$value, true);
							}
						});
						reset(div_14);
						var div_15 = sibling(div_14, 2);
						Input(sibling(child(div_15), 2), {
							type: "text",
							id: "ref",
							placeholder: "e.g. INVOICE-99",
							get value() {
								return get(referenceNumber);
							},
							set value($$value) {
								set(referenceNumber, $$value, true);
							}
						});
						reset(div_15);
						var div_16 = sibling(div_15, 2);
						Input(sibling(child(div_16), 2), {
							type: "text",
							id: "desc",
							placeholder: "e.g. Monthly maintenance supplies",
							get value() {
								return get(description);
							},
							set value($$value) {
								set(description, $$value, true);
							}
						});
						reset(div_16);
						var node_19 = sibling(div_16, 2);
						{
							let $0 = user_derived(() => get(isSubmitting) || get(amount) <= 0);
							Button(node_19, {
								type: "submit",
								class: "w-full",
								get disabled() {
									return get($0);
								},
								children: ($$anchor, $$slotProps) => {
									next();
									append($$anchor, text("Post Payment"));
								},
								$$slots: { default: true }
							});
						}
						reset(form);
						event("submit", form, (e) => {
							e.preventDefault();
							set(showPayConfirm, true);
						});
						bind_select_value(select, () => get(paymentMethod), ($$value) => set(paymentMethod, $$value));
						append($$anchor, form);
					},
					$$slots: { default: true }
				});
				reset(div_11);
				var div_17 = sibling(div_11, 2);
				SectionCard(child(div_17), {
					title: "Recent Transactions Statement",
					children: ($$anchor, $$slotProps) => {
						var fragment_8 = comment();
						var node_21 = first_child(fragment_8);
						var consequent_5 = ($$anchor) => {
							append($$anchor, root_9());
						};
						var alternate = ($$anchor) => {
							var div_19 = root_11();
							var table = child(div_19);
							var tbody = sibling(child(table));
							each(tbody, 21, () => get(recentTransactions), index, ($$anchor, tx) => {
								var tr = root_10();
								var td = child(tr);
								var text_7 = child(td);
								reset(td);
								var td_1 = sibling(td);
								var span_4 = child(td_1);
								var text_8 = child(span_4, true);
								reset(span_4);
								reset(td_1);
								var td_2 = sibling(td_1);
								MoneyDisplay(child(td_2), { get amount() {
									return get(tx).amount;
								} });
								reset(td_2);
								var td_3 = sibling(td_2);
								var text_9 = child(td_3, true);
								reset(td_3);
								var td_4 = sibling(td_3);
								var text_10 = child(td_4, true);
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
									set_text(text_7, `#${get(tx).id ?? ""}`);
									set_class(span_4, 1, `text-[10px] font-mono py-0.5 px-1.5 rounded uppercase ${get(tx).transactionType === "incoming" || get(tx).transactionType === "salesreturn" ? "bg-emerald-500/10 text-emerald-500" : "bg-rose-500/10 text-rose-500"}`);
									set_text(text_8, get(tx).transactionType);
									set_text(text_9, get(tx).paymentMethod);
									set_text(text_10, get(tx).referenceId || "—");
								});
								append($$anchor, tr);
							});
							reset(tbody);
							reset(table);
							reset(div_19);
							append($$anchor, div_19);
						};
						if_block(node_21, ($$render) => {
							if (get(recentTransactions).length === 0) $$render(consequent_5);
							else $$render(alternate, -1);
						});
						append($$anchor, fragment_8);
					},
					$$slots: { default: true }
				});
				reset(div_17);
				reset(div_10);
				template_effect(() => set_text(text_1, get(supplier).code));
				append($$anchor, fragment_5);
			};
			if_block(node_4, ($$render) => {
				if (get(isLoading)) $$render(consequent);
				else if (get(errorMsg)) $$render(consequent_1, 1);
				else if (get(supplier)) $$render(consequent_6, 2);
			});
			ConfirmationDialog(sibling(node_4, 2), {
				get open() {
					return get(showPayConfirm);
				},
				title: "Confirm Supplier Payment",
				message: "Are you sure you want to write this supplier payment transaction? This will debit the source account or increase the supplier outstanding credit debt instantly.",
				confirmLabel: "Post Transaction",
				cancelLabel: "Back",
				onConfirm: executePayment,
				onCancel: () => set(showPayConfirm, false)
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

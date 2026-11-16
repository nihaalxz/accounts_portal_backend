import { B as append, Ct as setup_stores, D as head, H as from_html, I as if_block, K as delegate, Lt as next, Mt as push, Q as get, R as set_text, Rt as reset, T as clsx, dt as child, ft as first_child, gt as set, jt as pop, n as onDestroy, ot as template_effect, pt as sibling, q as delegated, r as onMount, rt as deferred_template_effect, ut as $document, vt as state, w as set_class, wt as store_get, xt as user_derived } from "../chunks/BdGPDeRo.js";
import { t as goto } from "../chunks/Dbr-1Ewi.js";
import "../chunks/DhaYE-8x.js";
import { i as hasRole } from "../chunks/T-NjqR4I.js";
import { t as Arrow_left } from "../chunks/Cbjzxiq1.js";
import { n as TransactionApproveDialog, r as Ban, t as TransactionRejectDialog } from "../chunks/Cce2lgA2.js";
import { t as Check } from "../chunks/CVzG3BoQ.js";
import { t as Circle_alert } from "../chunks/XFCARENe.js";
import { t as ErrorState } from "../chunks/D6Kn8Mes2.js";
import { t as page } from "../chunks/BaGV8PKQ2.js";
import { t as Button } from "../chunks/zyE_82FR2.js";
import "../chunks/BkZYuQQE2.js";
import { t as MoneyDisplay } from "../chunks/BjJP4BTf2.js";
import { t as DateDisplay } from "../chunks/Dr7G9lQx2.js";
import "../chunks/B0UXrdYn.js";
import { f as getPaymentMethodLabel, p as getReferenceTypeLabel } from "../chunks/CXeRAu2j.js";
import { a as getTransactions } from "../chunks/Bvm1NYLT.js";
import { t as ConflictDialog } from "../chunks/Dh3Vrqsr.js";
import { n as FinancialStatusBadge, t as TransactionTypeChip } from "../chunks/DFbRvq0u.js";
//#region src/routes/(app)/transactions/[id]/+page.svelte
var root = from_html(`<div class="animate-pulse space-y-6"><div class="h-10 w-2/3 bg-muted rounded-lg"></div> <div class="h-44 bg-muted rounded-2xl"></div> <div class="h-32 bg-muted rounded-2xl"></div></div>`);
var root_1 = from_html(`<div class="mt-2 p-3 bg-red-50/50 border border-red-100 rounded-xl text-red-700 max-w-[480px]"><span class="font-semibold block mb-0.5">Rejection Reason:</span> </div>`);
var root_2 = from_html(`<div class="flex gap-3"><div class="flex flex-col items-center"><div>2</div></div> <div><span class="font-bold"> </span> <p class="text-[10px] text-muted-foreground mt-0.5"> <!></p> <!></div></div>`);
var root_3 = from_html(`<div class="flex gap-3"><div class="flex flex-col items-center"><div class="w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-[10px]">2</div></div> <div><span class="font-bold text-amber-700 dark:text-amber-400">Awaiting Accountant Review</span> <p class="text-[10px] text-muted-foreground mt-0.5">Needs approval or rejection by a Master Accountant.</p></div></div>`);
var root_4 = from_html(`<!> <span>Reject Posting</span>`, 1);
var root_5 = from_html(`<!> <span>Approve Posting</span>`, 1);
var root_6 = from_html(`<div class="flex items-center gap-3 bg-card border border-border p-4 rounded-3xl justify-end"><!> <!></div>`);
var root_7 = from_html(`<div class="p-4 rounded-3xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/60 flex gap-3 text-xs text-amber-800 dark:text-amber-400 leading-relaxed items-start"><!> <div><span class="font-bold block mb-1">Transaction Reversal is Not Supported:</span> This posting has been finalized in the general ledger. The backend does not expose
					void or reversal operations. To reverse or void the effects of this posting, you must
					manually create a compensating transaction with the opposite flows.</div></div>`);
var root_8 = from_html(`<div class="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-card border border-border p-6 rounded-3xl shadow-xs"><div class="space-y-2"><div class="flex items-center gap-2"><span class="text-lg font-bold text-foreground"> </span> <!></div> <p class="text-xs text-muted-foreground"> <!></p></div> <div class="flex flex-col items-start md:items-end gap-1.5"><span class="text-xs text-muted-foreground font-semibold">Amount</span> <span class="text-2xl font-bold"><!></span></div></div> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div class="bg-card border border-border rounded-3xl p-6 space-y-4"><h3 class="text-xs font-bold text-muted-foreground uppercase tracking-wider border-b border-border/60 pb-2">General Ledger Parameters</h3> <div class="grid grid-cols-2 gap-4 text-xs"><div><span class="block text-muted-foreground/80 font-medium">Transaction Type</span> <span class="block font-semibold mt-1"><!></span></div> <div><span class="block text-muted-foreground/80 font-medium">Payment Method</span> <span class="block font-semibold mt-1 capitalize"> </span></div> <div><span class="block text-muted-foreground/80 font-medium">Reference Type</span> <span class="block font-semibold mt-1"> </span></div> <div><span class="block text-muted-foreground/80 font-medium">Reference ID</span> <span class="block font-mono font-semibold mt-1 text-muted-foreground"> </span></div></div></div> <div class="bg-card border border-border rounded-3xl p-6 space-y-4"><h3 class="text-xs font-bold text-muted-foreground uppercase tracking-wider border-b border-border/60 pb-2">Financial Flow Accounts</h3> <div class="grid grid-cols-2 gap-4 text-xs"><div><span class="block text-muted-foreground/80 font-medium">Source Account</span> <span class="block font-mono font-semibold mt-1 text-muted-foreground"> </span></div> <div><span class="block text-muted-foreground/80 font-medium">Destination Account</span> <span class="block font-mono font-semibold mt-1 text-muted-foreground"> </span></div> <div><span class="block text-muted-foreground/80 font-medium">Source Bank</span> <span class="block font-mono font-semibold mt-1 text-muted-foreground"> </span></div> <div><span class="block text-muted-foreground/80 font-medium">Destination Bank</span> <span class="block font-mono font-semibold mt-1 text-muted-foreground"> </span></div></div></div></div> <div class="bg-card border border-border rounded-3xl p-6 space-y-5"><div><h3 class="text-xs font-bold text-muted-foreground uppercase tracking-wider border-b border-border/60 pb-2 mb-3">Description / Narrative</h3> <p class="text-xs text-foreground bg-muted/20 p-3.5 rounded-2xl leading-relaxed"> </p></div> <div class="space-y-3"><h3 class="text-xs font-bold text-muted-foreground uppercase tracking-wider border-b border-border/60 pb-2">Workflow Audit Trails</h3> <div class="space-y-4 text-xs"><div class="flex gap-3"><div class="flex flex-col items-center"><div class="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-[10px]">1</div> <div class="w-0.5 h-full bg-border mt-1"></div></div> <div><span class="font-bold">Transaction Created</span> <p class="text-[10px] text-muted-foreground mt-0.5"> <!></p></div></div> <!></div></div></div> <!> <!>`, 1);
var root_9 = from_html(`<div class="space-y-6"><button class="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground cursor-pointer transition-colors"><!> <span>Back to Transactions</span></button> <!></div> <!> <!> <!>`, 1);
function _page($$anchor, $$props) {
	push($$props, true);
	const $page = () => store_get(page, "$page", $$stores);
	const [$$stores, $$cleanup] = setup_stores();
	const txId = parseInt($page().params.id ?? "", 10);
	let transaction = state(null);
	let loading = state(true);
	let errorMsg = state(null);
	let correlationId = state("");
	let approveDialogOpen = state(false);
	let rejectDialogOpen = state(false);
	let conflictDialogOpen = state(false);
	let abortController = null;
	async function loadTransactionDetail() {
		set(loading, true);
		set(errorMsg, null);
		set(correlationId, "");
		if (isNaN(txId) || txId <= 0) {
			set(errorMsg, "Invalid transaction reference ID.");
			set(loading, false);
			return;
		}
		if (abortController) abortController.abort();
		abortController = new AbortController();
		try {
			const match = (await getTransactions({
				page: 1,
				pageSize: 100
			}, abortController.signal)).find((t) => t.id === txId);
			if (match) set(transaction, match, true);
			else set(errorMsg, `Transaction #${txId} was not found. Note: Only recent records (last 100 postings) are direct-lookup accessible.`);
		} catch (err) {
			if (err.name === "AbortError") return;
			set(errorMsg, err.message || "Failed to fetch transaction details.", true);
			set(correlationId, err.correlationId || "", true);
		} finally {
			set(loading, false);
		}
	}
	function handleActionSuccess() {
		loadTransactionDetail();
	}
	onMount(() => {
		loadTransactionDetail();
	});
	onDestroy(() => {
		if (abortController) abortController.abort();
	});
	var fragment = root_9();
	head("lqnljn", ($$anchor) => {
		deferred_template_effect(() => {
			$document.title = `Transaction Detail #${txId ?? ""} — Accounts Portal`;
		});
	});
	var div = first_child(fragment);
	var button = child(div);
	Arrow_left(child(button), { class: "h-3.5 w-3.5" });
	next(2);
	reset(button);
	var node_1 = sibling(button, 2);
	var consequent = ($$anchor) => {
		append($$anchor, root());
	};
	var consequent_1 = ($$anchor) => {
		ErrorState($$anchor, {
			get message() {
				return get(errorMsg);
			},
			get correlationId() {
				return get(correlationId);
			},
			retryAction: loadTransactionDetail
		});
	};
	var consequent_6 = ($$anchor) => {
		var fragment_2 = root_8();
		var div_2 = first_child(fragment_2);
		var div_3 = child(div_2);
		var div_4 = child(div_3);
		var span = child(div_4);
		var text = child(span);
		reset(span);
		FinancialStatusBadge(sibling(span, 2), { get status() {
			return get(transaction).status;
		} });
		reset(div_4);
		var p = sibling(div_4, 2);
		var text_1 = child(p);
		DateDisplay(sibling(text_1), { get value() {
			return get(transaction).createdAt;
		} });
		reset(p);
		reset(div_3);
		var div_5 = sibling(div_3, 2);
		var span_1 = sibling(child(div_5), 2);
		MoneyDisplay(child(span_1), { get amount() {
			return get(transaction).amount;
		} });
		reset(span_1);
		reset(div_5);
		reset(div_2);
		var div_6 = sibling(div_2, 2);
		var div_7 = child(div_6);
		var div_8 = sibling(child(div_7), 2);
		var div_9 = child(div_8);
		var span_2 = sibling(child(div_9), 2);
		TransactionTypeChip(child(span_2), { get type() {
			return get(transaction).transactionType;
		} });
		reset(span_2);
		reset(div_9);
		var div_10 = sibling(div_9, 2);
		var span_3 = sibling(child(div_10), 2);
		var text_2 = child(span_3, true);
		reset(span_3);
		reset(div_10);
		var div_11 = sibling(div_10, 2);
		var span_4 = sibling(child(div_11), 2);
		var text_3 = child(span_4, true);
		reset(span_4);
		reset(div_11);
		var div_12 = sibling(div_11, 2);
		var span_5 = sibling(child(div_12), 2);
		var text_4 = child(span_5, true);
		reset(span_5);
		reset(div_12);
		reset(div_8);
		reset(div_7);
		var div_13 = sibling(div_7, 2);
		var div_14 = sibling(child(div_13), 2);
		var div_15 = child(div_14);
		var span_6 = sibling(child(div_15), 2);
		var text_5 = child(span_6, true);
		reset(span_6);
		reset(div_15);
		var div_16 = sibling(div_15, 2);
		var span_7 = sibling(child(div_16), 2);
		var text_6 = child(span_7, true);
		reset(span_7);
		reset(div_16);
		var div_17 = sibling(div_16, 2);
		var span_8 = sibling(child(div_17), 2);
		var text_7 = child(span_8, true);
		reset(span_8);
		reset(div_17);
		var div_18 = sibling(div_17, 2);
		var span_9 = sibling(child(div_18), 2);
		var text_8 = child(span_9, true);
		reset(span_9);
		reset(div_18);
		reset(div_14);
		reset(div_13);
		reset(div_6);
		var div_19 = sibling(div_6, 2);
		var div_20 = child(div_19);
		var p_1 = sibling(child(div_20), 2);
		var text_9 = child(p_1, true);
		reset(p_1);
		reset(div_20);
		var div_21 = sibling(div_20, 2);
		var div_22 = sibling(child(div_21), 2);
		var div_23 = child(div_22);
		var div_24 = sibling(child(div_23), 2);
		var p_2 = sibling(child(div_24), 2);
		var text_10 = child(p_2);
		DateDisplay(sibling(text_10), { get value() {
			return get(transaction).createdAt;
		} });
		reset(p_2);
		reset(div_24);
		reset(div_23);
		var node_7 = sibling(div_23, 2);
		var consequent_3 = ($$anchor) => {
			var div_25 = root_2();
			var div_26 = child(div_25);
			var div_27 = child(div_26);
			reset(div_26);
			var div_28 = sibling(div_26, 2);
			var span_10 = child(div_28);
			var text_11 = child(span_10);
			reset(span_10);
			var p_3 = sibling(span_10, 2);
			var text_12 = child(p_3);
			var node_8 = sibling(text_12);
			{
				let $0 = user_derived(() => get(transaction).status === "approved" ? get(transaction).approvedAt : get(transaction).rejectedAt);
				DateDisplay(node_8, { get value() {
					return get($0);
				} });
			}
			reset(p_3);
			var node_9 = sibling(p_3, 2);
			var consequent_2 = ($$anchor) => {
				var div_29 = root_1();
				var text_13 = sibling(child(div_29));
				reset(div_29);
				template_effect(() => set_text(text_13, ` ${get(transaction).returnReason ?? ""}`));
				append($$anchor, div_29);
			};
			if_block(node_9, ($$render) => {
				if (get(transaction).status === "rejected" && get(transaction).returnReason) $$render(consequent_2);
			});
			reset(div_28);
			reset(div_25);
			template_effect(($0) => {
				set_class(div_27, 1, $0);
				set_text(text_11, `Transaction ${get(transaction).status === "approved" ? "Approved" : "Rejected"}`);
				set_text(text_12, `Processed by User #${(get(transaction).status === "approved" ? get(transaction).approvedBy : get(transaction).rejectedBy) ?? ""} on `);
			}, [() => clsx(["w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px]", get(transaction).status === "approved" ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"].join(" "))]);
			append($$anchor, div_25);
		};
		var alternate = ($$anchor) => {
			append($$anchor, root_3());
		};
		if_block(node_7, ($$render) => {
			if (get(transaction).status !== "pending") $$render(consequent_3);
			else $$render(alternate, -1);
		});
		reset(div_22);
		reset(div_21);
		reset(div_19);
		var node_10 = sibling(div_19, 2);
		var consequent_4 = ($$anchor) => {
			var div_31 = root_6();
			var node_11 = child(div_31);
			Button(node_11, {
				variant: "outline",
				class: "rounded-xl font-semibold text-xs py-5 px-4 cursor-pointer flex items-center gap-1.5",
				onclick: () => set(rejectDialogOpen, true),
				children: ($$anchor, $$slotProps) => {
					var fragment_3 = root_4();
					Ban(first_child(fragment_3), { class: "h-3.5 w-3.5" });
					next(2);
					append($$anchor, fragment_3);
				},
				$$slots: { default: true }
			});
			Button(sibling(node_11, 2), {
				class: "rounded-xl font-semibold text-xs py-5 px-4 cursor-pointer flex items-center gap-1.5",
				onclick: () => set(approveDialogOpen, true),
				children: ($$anchor, $$slotProps) => {
					var fragment_4 = root_5();
					Check(first_child(fragment_4), { class: "h-3.5 w-3.5" });
					next(2);
					append($$anchor, fragment_4);
				},
				$$slots: { default: true }
			});
			reset(div_31);
			append($$anchor, div_31);
		};
		var d = user_derived(() => hasRole("master_accountant") && get(transaction).status === "pending");
		if_block(node_10, ($$render) => {
			if (get(d)) $$render(consequent_4);
		});
		var node_15 = sibling(node_10, 2);
		var consequent_5 = ($$anchor) => {
			var div_32 = root_7();
			Circle_alert(child(div_32), { class: "h-4.5 w-4.5 shrink-0 mt-0.5" });
			next(2);
			reset(div_32);
			append($$anchor, div_32);
		};
		if_block(node_15, ($$render) => {
			if (get(transaction).status === "approved") $$render(consequent_5);
		});
		template_effect(($0, $1) => {
			set_text(text, `Transaction #${get(transaction).id ?? ""}`);
			set_text(text_1, `Created by User ID #${get(transaction).createdBy ?? ""} on `);
			set_text(text_2, $0);
			set_text(text_3, $1);
			set_text(text_4, get(transaction).referenceId || "—");
			set_text(text_5, get(transaction).sourceAccountId ? `Account #${get(transaction).sourceAccountId}` : "—");
			set_text(text_6, get(transaction).destinationAccountId ? `Account #${get(transaction).destinationAccountId}` : "—");
			set_text(text_7, get(transaction).sourceBankId ? `Bank #${get(transaction).sourceBankId}` : "—");
			set_text(text_8, get(transaction).destinationBankId ? `Bank #${get(transaction).destinationBankId}` : "—");
			set_text(text_9, get(transaction).description || "No description provided.");
			set_text(text_10, `Posted by User #${get(transaction).createdBy ?? ""} on `);
		}, [() => getPaymentMethodLabel(get(transaction).paymentMethod), () => get(transaction).referenceType ? getReferenceTypeLabel(get(transaction).referenceType) : "—"]);
		append($$anchor, fragment_2);
	};
	if_block(node_1, ($$render) => {
		if (get(loading)) $$render(consequent);
		else if (get(errorMsg)) $$render(consequent_1, 1);
		else if (get(transaction)) $$render(consequent_6, 2);
	});
	reset(div);
	var node_17 = sibling(div, 2);
	TransactionApproveDialog(node_17, {
		get transactionId() {
			return txId;
		},
		onConfirm: handleActionSuccess,
		get open() {
			return get(approveDialogOpen);
		},
		set open($$value) {
			set(approveDialogOpen, $$value, true);
		}
	});
	var node_18 = sibling(node_17, 2);
	TransactionRejectDialog(node_18, {
		get transactionId() {
			return txId;
		},
		onConfirm: handleActionSuccess,
		get open() {
			return get(rejectDialogOpen);
		},
		set open($$value) {
			set(rejectDialogOpen, $$value, true);
		}
	});
	ConflictDialog(sibling(node_18, 2), {
		onReload: handleActionSuccess,
		get open() {
			return get(conflictDialogOpen);
		},
		set open($$value) {
			set(conflictDialogOpen, $$value, true);
		}
	});
	delegated("click", button, () => goto("/transactions"));
	append($$anchor, fragment);
	pop();
	$$cleanup();
}
delegate(["click"]);
//#endregion
export { _page as component };

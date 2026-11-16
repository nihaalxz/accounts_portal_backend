import { B as append, Ct as setup_stores, D as head, G as text, H as from_html, I as if_block, K as delegate, Lt as next, Mt as push, Q as get, R as set_text, Rt as reset, T as clsx, V as comment, _ as set_attribute, dt as child, ft as first_child, g as remove_input_defaults, gt as set, it as effect, jt as pop, ot as template_effect, p as bind_value, pt as sibling, q as delegated, r as onMount, ut as $document, vt as state, w as set_class, wt as store_get, xt as user_derived } from "../chunks/BdGPDeRo.js";
import { t as goto } from "../chunks/CgN2x3rF.js";
import "../chunks/DhaYE-8x.js";
import { i as hasRole } from "../chunks/5hfOaXcq.js";
import { t as addToast } from "../chunks/BZc__OC9.js";
import { t as Arrow_left } from "../chunks/Cbjzxiq1.js";
import { t as Calendar } from "../chunks/B7iTzqJ8.js";
import { t as Check } from "../chunks/CVzG3BoQ.js";
import { t as File_text } from "../chunks/CLERR3SN.js";
import { t as ErrorState } from "../chunks/D6Kn8Mes2.js";
import { t as Send } from "../chunks/DVgpx1XE2.js";
import { t as User } from "../chunks/BW_40fYN2.js";
import { t as X } from "../chunks/Bi2Z_hoF2.js";
import { t as page } from "../chunks/CIN3-epB2.js";
import { t as Button } from "../chunks/zyE_82FR2.js";
import "../chunks/CU4qWKOr2.js";
import { t as MoneyDisplay } from "../chunks/BjJP4BTf2.js";
import { t as ConfirmationDialog } from "../chunks/D8xz02uw2.js";
import { t as Spinner } from "../chunks/B2_BD2Fn.js";
import { r as getAccounts } from "../chunks/dag5d1Hq.js";
import { n as getBanks } from "../chunks/C9v_nN3Z.js";
import { a as getExpenseById, l as rejectExpense, n as cancelExpense, o as getExpenseHeaders, t as approveExpense, u as submitExpense } from "../chunks/CdbPzEGH.js";
import { a as canRejectExpense, i as canCancelExpense, n as PAYMENT_METHOD_LABELS, o as canSubmitExpense, r as canApproveExpense, s as getBucketDirection, t as EXPENSE_STATUS_LABELS } from "../chunks/rjZ5RTov.js";
//#region src/routes/(app)/payments/[id]/+page.svelte
var root = from_html(`<!> Submit for Approval`, 1);
var root_1 = from_html(`<!> Cancel`, 1);
var root_2 = from_html(`<!> <!>`, 1);
var root_3 = from_html(`<!> Approve`, 1);
var root_4 = from_html(`<!> Reject`, 1);
var root_5 = from_html(`<div class="flex items-center gap-2"><!> <!></div>`);
var root_6 = from_html(`<div class="flex flex-col items-center justify-center min-h-[300px] bg-card border border-border rounded-2xl"><!> <span class="text-xs text-muted-foreground mt-2">Loading expense details...</span></div>`);
var root_7 = from_html(`<span class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">Incoming Receipt</span>`);
var root_8 = from_html(`<span class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-500/10 text-blue-600 border border-blue-500/20">Outgoing Payout</span>`);
var root_9 = from_html(`<div class="pt-4 border-t border-border space-y-1.5 text-xs"><span class="text-muted-foreground font-semibold">Notes / Purpose Details</span> <p class="text-foreground leading-relaxed"> </p></div>`);
var root_10 = from_html(`<div class="p-3 bg-muted/40 border border-border rounded-xl flex items-center justify-between"><span class="font-medium text-muted-foreground">General Ledger Posting</span> <a class="font-mono font-semibold text-primary hover:underline"> </a></div>`);
var root_11 = from_html(`<div class="p-3 bg-muted/40 border border-border rounded-xl flex items-center justify-between"><span class="font-medium text-muted-foreground">Double-Entry Journal Reference</span> <a class="font-mono font-semibold text-primary hover:underline"> </a></div>`);
var root_12 = from_html(`<div class="pt-4 border-t border-border space-y-3 text-xs"><span class="text-muted-foreground font-semibold">Automatic Post References</span> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><!> <!></div></div>`);
var root_13 = from_html(`<div class="flex items-center gap-3"><div class="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 dark:bg-emerald-950/40"><!></div> <div><p class="font-semibold text-foreground">Approved By Master</p> <p class="text-[10px] text-muted-foreground"> </p></div></div>`);
var root_14 = from_html(`<div class="mt-1 p-2 bg-rose-50 border border-rose-100 text-rose-700 rounded-lg text-[10px] italic dark:bg-rose-950/20 dark:border-rose-800 dark:text-rose-400"> </div>`);
var root_15 = from_html(`<div class="flex items-center gap-3"><div class="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center shrink-0 dark:bg-rose-950/40"><!></div> <div><p class="font-semibold text-foreground">Rejected By Master</p> <p class="text-[10px] text-muted-foreground"> </p> <!></div></div>`);
var root_16 = from_html(`<div class="grid grid-cols-1 lg:grid-cols-3 gap-6"><div class="lg:col-span-2 bg-card border border-border rounded-2xl p-6 shadow-xs space-y-6"><div class="flex items-start justify-between border-b border-border pb-4"><div class="space-y-1"><div class="flex items-center gap-2"><span class="text-xs font-mono bg-muted text-muted-foreground px-2 py-0.5 rounded-md font-semibold"> </span> <!></div> <h2 class="text-lg font-bold text-foreground"> </h2></div> <span> </span></div> <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs"><div class="space-y-1"><span class="text-muted-foreground font-semibold">Expense Category</span> <p class="font-bold text-foreground"> </p></div> <div class="space-y-1"><span class="text-muted-foreground font-semibold">Amount</span> <p class="font-bold text-lg text-foreground"><!></p></div> <div class="space-y-1"><span class="text-muted-foreground font-semibold">Payment Source</span> <p class="font-bold text-foreground"><!></p></div> <div class="space-y-1"><span class="text-muted-foreground font-semibold">Expense Date</span> <p class="font-bold text-foreground"> </p></div></div> <!> <!></div> <div class="space-y-6 text-xs"><div class="bg-card border border-border rounded-2xl p-6 shadow-xs space-y-4"><h3 class="font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5"><!> Workflow Tracking</h3> <div class="space-y-3"><div class="flex items-center gap-3"><div class="w-8 h-8 rounded-full bg-muted flex items-center justify-center shrink-0"><!></div> <div><p class="font-semibold text-foreground">Filed By Accountant</p> <p class="text-[10px] text-muted-foreground"> </p></div></div> <!> <!></div></div> <div class="bg-card border border-border rounded-2xl p-6 shadow-xs space-y-4"><h3 class="font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5"><!> Security Trace</h3> <div class="text-[11px] text-muted-foreground space-y-2"><div class="flex flex-col"><span>Correlation ID</span> <span class="font-mono font-semibold text-foreground break-all"> </span></div></div></div></div></div>`);
var root_17 = from_html(`<div class="fixed inset-0 bg-background/80 backdrop-blur-xs z-50 flex items-center justify-center p-4"><div class="bg-card border border-border rounded-2xl shadow-lg w-full max-w-md p-6 space-y-4 text-xs animate-in fade-in zoom-in-95"><div class="space-y-1.5"><h3 class="text-base font-bold text-foreground">Reject Expense Claim</h3> <p class="text-muted-foreground">Specify the audit rejection reason for the accountant who filed this operational
					expense.</p></div> <div class="space-y-1.5"><label for="reject-reason" class="font-semibold text-muted-foreground">Rejection Reason</label> <input id="reject-reason" type="text" required="" placeholder="e.g. Missing receipt attachment verification" class="h-10 w-full bg-background border border-border rounded-xl px-3 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground"/></div> <div class="flex items-center justify-end gap-2 pt-2"><!> <!></div></div></div>`);
var root_18 = from_html(`<div class="space-y-6"><div class="flex items-center justify-between"><button class="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground cursor-pointer transition-colors"><!> Back to Expense Claims</button> <!></div> <!></div> <!> <!> <!> <!>`, 1);
function _page($$anchor, $$props) {
	push($$props, true);
	const $page = () => store_get(page, "$page", $$stores);
	const [$$stores, $$cleanup] = setup_stores();
	const id = $page().params.id ? parseInt($page().params.id) : 0;
	let expense = state(null);
	let category = state(null);
	let sourceAccountName = state("");
	let sourceBankName = state("");
	let loading = state(true);
	let errorMsg = state(null);
	let correlationId = state("");
	let showSubmitConfirm = state(false);
	let showApproveConfirm = state(false);
	let showRejectDialog = state(false);
	let showCancelConfirm = state(false);
	let isActionRunning = state(false);
	let rejectReason = state("");
	let abortController = null;
	async function loadDetails() {
		if (abortController) abortController.abort();
		abortController = new AbortController();
		set(loading, true);
		set(errorMsg, null);
		try {
			const exp = await getExpenseById(id, abortController.signal);
			set(expense, exp, true);
			try {
				const headers = await getExpenseHeaders(abortController.signal);
				set(category, headers.find((h) => h.id === exp.expenseCategoryId) || null, true);
			} catch {
				set(category, null);
			}
			if (exp.sourceAccountId) try {
				const match = (await getAccounts(abortController.signal)).find((a) => a.id === exp.sourceAccountId);
				set(sourceAccountName, match ? match.name : `Cash Drawer #${exp.sourceAccountId}`, true);
			} catch {
				set(sourceAccountName, `Cash Drawer #${exp.sourceAccountId}`);
			}
			if (exp.sourceBankId) try {
				const match = (await getBanks(abortController.signal)).find((b) => b.id === exp.sourceBankId);
				set(sourceBankName, match ? match.bankName : `Bank Account #${exp.sourceBankId}`, true);
			} catch {
				set(sourceBankName, `Bank Account #${exp.sourceBankId}`);
			}
		} catch (err) {
			if (err.name === "AbortError") return;
			set(errorMsg, err.message || "Failed to load expense details.", true);
			set(correlationId, err.correlationId || "", true);
		} finally {
			set(loading, false);
		}
	}
	async function handleSubmit() {
		set(isActionRunning, true);
		try {
			await submitExpense(id);
			addToast("Expense claim submitted for approval successfully.", "success");
			await loadDetails();
		} catch (err) {
			addToast(err.message || "Failed to submit expense.", "error");
		} finally {
			set(isActionRunning, false);
			set(showSubmitConfirm, false);
		}
	}
	async function handleApprove() {
		set(isActionRunning, true);
		try {
			const idempotencyKey = crypto.randomUUID();
			const rowVersion = get(expense)?.rowVersion || null;
			await approveExpense(id, idempotencyKey, rowVersion);
			addToast("Expense claim approved and posted to General Ledger.", "success");
			await loadDetails();
		} catch (err) {
			addToast(err.message || "Failed to approve expense.", "error");
		} finally {
			set(isActionRunning, false);
			set(showApproveConfirm, false);
		}
	}
	async function handleReject() {
		if (!get(rejectReason).trim()) {
			addToast("Please enter a rejection reason.", "error");
			return;
		}
		set(isActionRunning, true);
		try {
			await rejectExpense(id, { reason: get(rejectReason).trim() });
			addToast("Expense claim rejected.", "success");
			set(rejectReason, "");
			await loadDetails();
		} catch (err) {
			addToast(err.message || "Failed to reject expense.", "error");
		} finally {
			set(isActionRunning, false);
			set(showRejectDialog, false);
		}
	}
	async function handleCancel() {
		set(isActionRunning, true);
		try {
			await cancelExpense(id);
			addToast("Expense claim cancelled.", "success");
			await loadDetails();
		} catch (err) {
			addToast(err.message || "Failed to cancel expense.", "error");
		} finally {
			set(isActionRunning, false);
			set(showCancelConfirm, false);
		}
	}
	onMount(() => {
		loadDetails();
		return () => {
			if (abortController) abortController.abort();
		};
	});
	var fragment = root_18();
	head("e8mex9", ($$anchor) => {
		effect(() => {
			$document.title = "Payment Details — Accounts Portal";
		});
	});
	var div = first_child(fragment);
	var div_1 = child(div);
	var button = child(div_1);
	Arrow_left(child(button), { class: "h-3.5 w-3.5" });
	next();
	reset(button);
	var node_1 = sibling(button, 2);
	var consequent_6 = ($$anchor) => {
		var div_2 = root_5();
		var node_2 = child(div_2);
		var consequent_2 = ($$anchor) => {
			var fragment_1 = root_2();
			var node_3 = first_child(fragment_1);
			var consequent = ($$anchor) => {
				Button($$anchor, {
					variant: "outline",
					size: "sm",
					class: "rounded-xl text-xs py-4 cursor-pointer font-semibold",
					get disabled() {
						return get(isActionRunning);
					},
					onclick: () => set(showSubmitConfirm, true),
					children: ($$anchor, $$slotProps) => {
						var fragment_3 = root();
						Send(first_child(fragment_3), { class: "h-3.5 w-3.5 mr-1" });
						next();
						append($$anchor, fragment_3);
					},
					$$slots: { default: true }
				});
			};
			var d = user_derived(() => canSubmitExpense(get(expense).status));
			if_block(node_3, ($$render) => {
				if (get(d)) $$render(consequent);
			});
			var node_5 = sibling(node_3, 2);
			var consequent_1 = ($$anchor) => {
				Button($$anchor, {
					variant: "outline",
					size: "sm",
					class: "rounded-xl text-xs py-4 cursor-pointer font-semibold text-rose-600 hover:bg-rose-50",
					get disabled() {
						return get(isActionRunning);
					},
					onclick: () => set(showCancelConfirm, true),
					children: ($$anchor, $$slotProps) => {
						var fragment_5 = root_1();
						X(first_child(fragment_5), { class: "h-3.5 w-3.5 mr-1" });
						next();
						append($$anchor, fragment_5);
					},
					$$slots: { default: true }
				});
			};
			var d_1 = user_derived(() => canCancelExpense(get(expense).status));
			if_block(node_5, ($$render) => {
				if (get(d_1)) $$render(consequent_1);
			});
			append($$anchor, fragment_1);
		};
		var d_2 = user_derived(() => hasRole("accountant"));
		if_block(node_2, ($$render) => {
			if (get(d_2)) $$render(consequent_2);
		});
		var node_7 = sibling(node_2, 2);
		var consequent_5 = ($$anchor) => {
			var fragment_6 = root_2();
			var node_8 = first_child(fragment_6);
			var consequent_3 = ($$anchor) => {
				Button($$anchor, {
					variant: "default",
					size: "sm",
					class: "rounded-xl text-xs py-4 cursor-pointer font-semibold bg-emerald-600 hover:bg-emerald-700 text-white",
					get disabled() {
						return get(isActionRunning);
					},
					onclick: () => set(showApproveConfirm, true),
					children: ($$anchor, $$slotProps) => {
						var fragment_8 = root_3();
						Check(first_child(fragment_8), { class: "h-3.5 w-3.5 mr-1" });
						next();
						append($$anchor, fragment_8);
					},
					$$slots: { default: true }
				});
			};
			var d_3 = user_derived(() => canApproveExpense(get(expense).status));
			if_block(node_8, ($$render) => {
				if (get(d_3)) $$render(consequent_3);
			});
			var node_10 = sibling(node_8, 2);
			var consequent_4 = ($$anchor) => {
				Button($$anchor, {
					variant: "destructive",
					size: "sm",
					class: "rounded-xl text-xs py-4 cursor-pointer font-semibold",
					get disabled() {
						return get(isActionRunning);
					},
					onclick: () => set(showRejectDialog, true),
					children: ($$anchor, $$slotProps) => {
						var fragment_10 = root_4();
						X(first_child(fragment_10), { class: "h-3.5 w-3.5 mr-1" });
						next();
						append($$anchor, fragment_10);
					},
					$$slots: { default: true }
				});
			};
			var d_4 = user_derived(() => canRejectExpense(get(expense).status));
			if_block(node_10, ($$render) => {
				if (get(d_4)) $$render(consequent_4);
			});
			append($$anchor, fragment_6);
		};
		var d_5 = user_derived(() => hasRole("master_accountant"));
		if_block(node_7, ($$render) => {
			if (get(d_5)) $$render(consequent_5);
		});
		reset(div_2);
		append($$anchor, div_2);
	};
	if_block(node_1, ($$render) => {
		if (get(expense)) $$render(consequent_6);
	});
	reset(div_1);
	var node_12 = sibling(div_1, 2);
	var consequent_7 = ($$anchor) => {
		ErrorState($$anchor, {
			get message() {
				return get(errorMsg);
			},
			get correlationId() {
				return get(correlationId);
			},
			retryAction: loadDetails
		});
	};
	var alternate_3 = ($$anchor) => {
		var fragment_12 = comment();
		var node_13 = first_child(fragment_12);
		var consequent_8 = ($$anchor) => {
			var div_3 = root_6();
			Spinner(child(div_3), { class: "h-8 w-8 text-primary" });
			next(2);
			reset(div_3);
			append($$anchor, div_3);
		};
		var alternate_2 = ($$anchor) => {
			var div_4 = root_16();
			var div_5 = child(div_4);
			var div_6 = child(div_5);
			var div_7 = child(div_6);
			var div_8 = child(div_7);
			var span = child(div_8);
			var text$1 = child(span);
			reset(span);
			var node_15 = sibling(span, 2);
			var consequent_9 = ($$anchor) => {
				append($$anchor, root_7());
			};
			var d_6 = user_derived(() => getBucketDirection(get(category)?.category || "") === "incoming");
			var alternate = ($$anchor) => {
				append($$anchor, root_8());
			};
			if_block(node_15, ($$render) => {
				if (get(d_6)) $$render(consequent_9);
				else $$render(alternate, -1);
			});
			reset(div_8);
			var h2 = sibling(div_8, 2);
			var text_1 = child(h2, true);
			reset(h2);
			reset(div_7);
			var span_3 = sibling(div_7, 2);
			var text_2 = child(span_3, true);
			reset(span_3);
			reset(div_6);
			var div_9 = sibling(div_6, 2);
			var div_10 = child(div_9);
			var p = sibling(child(div_10), 2);
			var text_3 = child(p, true);
			reset(p);
			reset(div_10);
			var div_11 = sibling(div_10, 2);
			var p_1 = sibling(child(div_11), 2);
			MoneyDisplay(child(p_1), { get amount() {
				return get(expense).amount;
			} });
			reset(p_1);
			reset(div_11);
			var div_12 = sibling(div_11, 2);
			var p_2 = sibling(child(div_12), 2);
			var node_17 = child(p_2);
			var consequent_10 = ($$anchor) => {
				var text_4 = text();
				template_effect(() => set_text(text_4, `Cash Point: ${(get(sourceAccountName) || "Unknown") ?? ""}`));
				append($$anchor, text_4);
			};
			var consequent_11 = ($$anchor) => {
				var text_5 = text();
				template_effect(() => set_text(text_5, `Bank Account: ${(get(sourceBankName) || "Unknown") ?? ""}`));
				append($$anchor, text_5);
			};
			var alternate_1 = ($$anchor) => {
				var text_6 = text();
				template_effect(() => set_text(text_6, PAYMENT_METHOD_LABELS[get(expense).paymentMethod] || get(expense).paymentMethod));
				append($$anchor, text_6);
			};
			if_block(node_17, ($$render) => {
				if (get(expense).paymentMethod === "cash") $$render(consequent_10);
				else if (get(expense).paymentMethod === "bank" || get(expense).paymentMethod === "bank_transfer") $$render(consequent_11, 1);
				else $$render(alternate_1, -1);
			});
			reset(p_2);
			reset(div_12);
			var div_13 = sibling(div_12, 2);
			var p_3 = sibling(child(div_13), 2);
			var text_7 = child(p_3, true);
			reset(p_3);
			reset(div_13);
			reset(div_9);
			var node_18 = sibling(div_9, 2);
			var consequent_12 = ($$anchor) => {
				var div_14 = root_9();
				var p_4 = sibling(child(div_14), 2);
				var text_8 = child(p_4, true);
				reset(p_4);
				reset(div_14);
				template_effect(() => set_text(text_8, get(expense).notes));
				append($$anchor, div_14);
			};
			if_block(node_18, ($$render) => {
				if (get(expense).notes) $$render(consequent_12);
			});
			var node_19 = sibling(node_18, 2);
			var consequent_15 = ($$anchor) => {
				var div_15 = root_12();
				var div_16 = sibling(child(div_15), 2);
				var node_20 = child(div_16);
				var consequent_13 = ($$anchor) => {
					var div_17 = root_10();
					var a_1 = sibling(child(div_17), 2);
					var text_9 = child(a_1);
					reset(a_1);
					reset(div_17);
					template_effect(() => {
						set_attribute(a_1, "href", `/transactions/${get(expense).postedTransactionId}`);
						set_text(text_9, `GL #${get(expense).postedTransactionId ?? ""}`);
					});
					append($$anchor, div_17);
				};
				if_block(node_20, ($$render) => {
					if (get(expense).postedTransactionId) $$render(consequent_13);
				});
				var node_21 = sibling(node_20, 2);
				var consequent_14 = ($$anchor) => {
					var div_18 = root_11();
					var a_2 = sibling(child(div_18), 2);
					var text_10 = child(a_2);
					reset(a_2);
					reset(div_18);
					template_effect(() => {
						set_attribute(a_2, "href", `/accounting/journals/${get(expense).postedJournalEntryId}`);
						set_text(text_10, `Journal #${get(expense).postedJournalEntryId ?? ""}`);
					});
					append($$anchor, div_18);
				};
				if_block(node_21, ($$render) => {
					if (get(expense).postedJournalEntryId) $$render(consequent_14);
				});
				reset(div_16);
				reset(div_15);
				append($$anchor, div_15);
			};
			if_block(node_19, ($$render) => {
				if (get(expense).postedTransactionId || get(expense).postedJournalEntryId) $$render(consequent_15);
			});
			reset(div_5);
			var div_19 = sibling(div_5, 2);
			var div_20 = child(div_19);
			var h3 = child(div_20);
			Calendar(child(h3), { class: "h-4 w-4 text-primary" });
			next();
			reset(h3);
			var div_21 = sibling(h3, 2);
			var div_22 = child(div_21);
			var div_23 = child(div_22);
			User(child(div_23), { class: "h-4 w-4 text-muted-foreground" });
			reset(div_23);
			var div_24 = sibling(div_23, 2);
			var p_5 = sibling(child(div_24), 2);
			var text_11 = child(p_5);
			reset(p_5);
			reset(div_24);
			reset(div_22);
			var node_24 = sibling(div_22, 2);
			var consequent_16 = ($$anchor) => {
				var div_25 = root_13();
				var div_26 = child(div_25);
				Check(child(div_26), { class: "h-4 w-4 text-emerald-600 dark:text-emerald-400" });
				reset(div_26);
				var div_27 = sibling(div_26, 2);
				var p_6 = sibling(child(div_27), 2);
				var text_12 = child(p_6);
				reset(p_6);
				reset(div_27);
				reset(div_25);
				template_effect(($0) => set_text(text_12, `User ID: #${get(expense).approvedBy ?? ""} — ${$0 ?? ""}`), [() => get(expense).approvedAt ? new Date(get(expense).approvedAt).toLocaleString() : ""]);
				append($$anchor, div_25);
			};
			if_block(node_24, ($$render) => {
				if (get(expense).approvedBy) $$render(consequent_16);
			});
			var node_26 = sibling(node_24, 2);
			var consequent_18 = ($$anchor) => {
				var div_28 = root_15();
				var div_29 = child(div_28);
				X(child(div_29), { class: "h-4 w-4 text-rose-600 dark:text-rose-400" });
				reset(div_29);
				var div_30 = sibling(div_29, 2);
				var p_7 = sibling(child(div_30), 2);
				var text_13 = child(p_7);
				reset(p_7);
				var node_28 = sibling(p_7, 2);
				var consequent_17 = ($$anchor) => {
					var div_31 = root_14();
					var text_14 = child(div_31);
					reset(div_31);
					template_effect(() => set_text(text_14, `" ${get(expense).rejectionReason ?? ""} "`));
					append($$anchor, div_31);
				};
				if_block(node_28, ($$render) => {
					if (get(expense).rejectionReason) $$render(consequent_17);
				});
				reset(div_30);
				reset(div_28);
				template_effect(($0) => set_text(text_13, `User ID: #${get(expense).rejectedBy ?? ""} — ${$0 ?? ""}`), [() => get(expense).rejectedAt ? new Date(get(expense).rejectedAt).toLocaleString() : ""]);
				append($$anchor, div_28);
			};
			if_block(node_26, ($$render) => {
				if (get(expense).rejectedBy) $$render(consequent_18);
			});
			reset(div_21);
			reset(div_20);
			var div_32 = sibling(div_20, 2);
			var h3_1 = child(div_32);
			File_text(child(h3_1), { class: "h-4 w-4 text-primary" });
			next();
			reset(h3_1);
			var div_33 = sibling(h3_1, 2);
			var div_34 = child(div_33);
			var span_4 = sibling(child(div_34), 2);
			var text_15 = child(span_4, true);
			reset(span_4);
			reset(div_34);
			reset(div_33);
			reset(div_32);
			reset(div_19);
			reset(div_4);
			template_effect(($0, $1, $2) => {
				set_text(text$1, `Voucher #${get(expense).expenseNumber ?? ""}`);
				set_text(text_1, get(expense).description);
				set_class(span_3, 1, $0);
				set_text(text_2, EXPENSE_STATUS_LABELS[get(expense).status] || get(expense).status);
				set_text(text_3, get(category) ? `${get(category).name} (${get(category).category})` : `Category ID #${get(expense).expenseCategoryId}`);
				set_text(text_7, $1);
				set_text(text_11, `User ID: #${get(expense).createdBy ?? ""} — ${$2 ?? ""}`);
				set_text(text_15, get(expense).correlationId);
			}, [
				() => clsx(["inline-flex items-center gap-1 font-semibold rounded-full border text-[10px] px-3 py-1 capitalize", get(expense).status === "approved" || get(expense).status === "posted" ? "text-emerald-700 bg-emerald-50 border-emerald-200 dark:text-emerald-400 dark:bg-emerald-950/40 dark:border-emerald-800" : get(expense).status === "pendingapproval" ? "text-yellow-700 bg-yellow-50 border-yellow-200 dark:text-yellow-400 dark:bg-yellow-950/40 dark:border-yellow-800" : get(expense).status === "rejected" || get(expense).status === "cancelled" || get(expense).status === "reversed" ? "text-rose-700 bg-rose-50 border-rose-200 dark:text-rose-400 dark:bg-rose-950/40 dark:border-rose-800" : "text-muted-foreground bg-muted border-border"].join(" ")),
				() => new Date(get(expense).expenseDate).toLocaleDateString(void 0, { dateStyle: "full" }),
				() => new Date(get(expense).createdAt).toLocaleString()
			]);
			append($$anchor, div_4);
		};
		if_block(node_13, ($$render) => {
			if (get(loading) || !get(expense)) $$render(consequent_8);
			else $$render(alternate_2, -1);
		});
		append($$anchor, fragment_12);
	};
	if_block(node_12, ($$render) => {
		if (get(errorMsg)) $$render(consequent_7);
		else $$render(alternate_3, -1);
	});
	reset(div);
	var node_30 = sibling(div, 2);
	ConfirmationDialog(node_30, {
		title: "Submit Expense Log?",
		message: "Are you sure you want to submit this expense claim for approval? You will not be able to edit it afterward.",
		confirmLabel: "Yes, Submit Claim",
		onConfirm: handleSubmit,
		get open() {
			return get(showSubmitConfirm);
		},
		set open($$value) {
			set(showSubmitConfirm, $$value, true);
		}
	});
	var node_31 = sibling(node_30, 2);
	{
		let $0 = user_derived(() => `Are you sure you want to approve this expense of ${get(expense)?.amount.toFixed(3)} BHD? Approval automatically posts transaction ledger lines and balances Double-Entry general ledger entries.`);
		ConfirmationDialog(node_31, {
			title: "Approve operational expense payout?",
			get message() {
				return get($0);
			},
			confirmLabel: "Confirm Payout",
			onConfirm: handleApprove,
			get open() {
				return get(showApproveConfirm);
			},
			set open($$value) {
				set(showApproveConfirm, $$value, true);
			}
		});
	}
	var node_32 = sibling(node_31, 2);
	ConfirmationDialog(node_32, {
		title: "Cancel operational expense claim?",
		message: "Cancel this claim immediately? Canceled claims cannot be reopened.",
		confirmLabel: "Yes, Cancel",
		isDestructive: true,
		onConfirm: handleCancel,
		get open() {
			return get(showCancelConfirm);
		},
		set open($$value) {
			set(showCancelConfirm, $$value, true);
		}
	});
	var node_33 = sibling(node_32, 2);
	var consequent_19 = ($$anchor) => {
		var div_35 = root_17();
		var div_36 = child(div_35);
		var div_37 = sibling(child(div_36), 2);
		var input = sibling(child(div_37), 2);
		remove_input_defaults(input);
		reset(div_37);
		var div_38 = sibling(div_37, 2);
		var node_34 = child(div_38);
		Button(node_34, {
			variant: "outline",
			class: "rounded-xl px-4 py-4.5 cursor-pointer font-semibold",
			get disabled() {
				return get(isActionRunning);
			},
			onclick: () => {
				set(showRejectDialog, false);
				set(rejectReason, "");
			},
			children: ($$anchor, $$slotProps) => {
				next();
				append($$anchor, text("Cancel"));
			},
			$$slots: { default: true }
		});
		var node_35 = sibling(node_34, 2);
		{
			let $0 = user_derived(() => get(isActionRunning) || !get(rejectReason).trim());
			Button(node_35, {
				class: "rounded-xl px-4 py-4.5 cursor-pointer font-semibold bg-rose-600 hover:bg-rose-700 text-white",
				get disabled() {
					return get($0);
				},
				onclick: handleReject,
				children: ($$anchor, $$slotProps) => {
					next();
					var text_17 = text();
					template_effect(() => set_text(text_17, get(isActionRunning) ? "Rejecting..." : "Reject Claim"));
					append($$anchor, text_17);
				},
				$$slots: { default: true }
			});
		}
		reset(div_38);
		reset(div_36);
		reset(div_35);
		bind_value(input, () => get(rejectReason), ($$value) => set(rejectReason, $$value));
		append($$anchor, div_35);
	};
	if_block(node_33, ($$render) => {
		if (get(showRejectDialog)) $$render(consequent_19);
	});
	delegated("click", button, () => goto("/payments"));
	append($$anchor, fragment);
	pop();
	$$cleanup();
}
delegate(["click"]);
//#endregion
export { _page as component };

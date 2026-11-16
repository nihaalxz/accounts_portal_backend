import { B as append, Bt as reset, Ct as user_derived, D as head, Et as store_get, H as from_html, I as if_block, K as delegate, Nt as pop, Pt as push, Q as get, R as set_text, T as clsx, Tt as setup_stores, V as comment, bt as state, dt as $document, ht as sibling, it as effect, mt as first_child, ot as template_effect, pt as child, q as delegated, r as onMount, vt as set, w as set_class, zt as next } from "../chunks/dXkmWTgM.js";
import { t as goto } from "../chunks/U5w3uRqd.js";
import "../chunks/DhaYE-8x.js";
import { i as hasRole } from "../chunks/BEq6BDKq.js";
import { t as addToast } from "../chunks/CbPRQHfn.js";
import { t as Arrow_left } from "../chunks/Bn7x0kyr.js";
import { t as Arrow_right } from "../chunks/DZE4Pk63.js";
import { t as Calendar } from "../chunks/DxFQ7Qxv.js";
import { t as Check } from "../chunks/blG6JRe7.js";
import { t as ErrorState } from "../chunks/B7ZVWvAI2.js";
import { t as X } from "../chunks/wXHc9RNY.js";
import { t as page } from "../chunks/aQFnILqj.js";
import { t as Button } from "../chunks/BhXsq3bC.js";
import "../chunks/CuchhtKz.js";
import { t as Spinner } from "../chunks/DkxHSMb-.js";
import { t as ConfirmationDialog } from "../chunks/BuNG9dXS.js";
import { a as rejectJournalEntry, i as getJournalEntryById, t as approveJournalEntry } from "../chunks/BztZdnch.js";
import { t as JOURNAL_STATUS_LABELS } from "../chunks/CpUs0oTx.js";
import { t as MoneyDisplay } from "../chunks/CIVSRuaR.js";
//#region src/routes/(app)/accounting/journals/[id]/+page.svelte
var root = from_html(`<!> Reject`, 1);
var root_1 = from_html(`<!> Approve & Execute`, 1);
var root_2 = from_html(`<div class="flex items-center gap-2"><!> <!></div>`);
var root_3 = from_html(`<div class="flex flex-col items-center justify-center min-h-[300px] bg-card border border-border rounded-2xl"><!> <span class="text-xs text-muted-foreground mt-2">Loading journal details...</span></div>`);
var root_4 = from_html(`<div class="flex items-center justify-between"><span>Processed By</span> <span class="font-semibold text-foreground"> </span></div> <div class="flex justify-between"><span>Processed At</span> <span class="font-semibold text-foreground"> </span></div>`, 1);
var root_5 = from_html(`<div class="grid grid-cols-1 lg:grid-cols-3 gap-6"><div class="lg:col-span-2 space-y-6"><div class="bg-card border border-border rounded-2xl p-6 shadow-xs space-y-6"><div class="flex items-start justify-between border-b border-border pb-4"><div class="space-y-1"><span class="text-xs font-mono bg-muted text-muted-foreground px-2 py-0.5 rounded-md font-semibold"> </span> <h2 class="text-lg font-bold text-foreground mt-1"> </h2></div> <span> </span></div> <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs"><div class="space-y-1"><span class="text-muted-foreground font-semibold">Date Created</span> <p class="font-bold text-foreground"> </p></div> <div class="space-y-1"><span class="text-muted-foreground font-semibold">Transfer Reference</span> <p class="font-bold text-foreground font-mono"> </p></div> <div class="space-y-1"><span class="text-muted-foreground font-semibold">Created By</span> <p class="font-bold text-foreground"> </p></div></div></div> <div class="bg-card border border-border rounded-2xl p-6 shadow-xs space-y-6"><h3 class="font-bold text-sm text-foreground">Wallet Value Transfer Flow</h3> <div class="flex flex-col md:flex-row items-center justify-between gap-6 py-4 px-2"><div class="flex-1 w-full p-4 bg-muted/20 border border-border/80 rounded-xl space-y-2 text-center md:text-left"><div class="text-[10px] uppercase font-bold text-rose-600 dark:text-rose-400 tracking-wider">Debit Source (Sender)</div> <div class="text-base font-bold text-foreground"> </div> <div class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-muted text-muted-foreground capitalize"> </div> <div class="text-xs text-rose-600 font-bold pt-2">- <!></div></div> <div class="flex flex-col items-center justify-center text-muted-foreground"><!> <div class="block md:hidden font-mono font-bold text-[10px] text-muted-foreground">To</div></div> <div class="flex-1 w-full p-4 bg-muted/20 border border-border/80 rounded-xl space-y-2 text-center md:text-left"><div class="text-[10px] uppercase font-bold text-emerald-600 dark:text-emerald-400 tracking-wider">Credit Destination (Receiver)</div> <div class="text-base font-bold text-foreground"> </div> <div class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-muted text-muted-foreground capitalize"> </div> <div class="text-xs text-emerald-600 font-bold pt-2">+ <!></div></div></div></div></div> <div class="space-y-6 text-xs"><div class="bg-card border border-border rounded-2xl p-6 shadow-xs space-y-4"><h3 class="font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5"><!> Workflow Status</h3> <div class="space-y-4 text-muted-foreground"><div class="flex items-center justify-between"><span>Request Status</span> <span class="font-semibold text-foreground capitalize"> </span></div> <div class="flex items-center justify-between"><span>Transfer Amount</span> <span class="font-bold text-foreground"><!></span></div> <!></div></div></div></div>`);
var root_6 = from_html(`<div class="space-y-6"><div class="flex items-center justify-between"><button class="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground cursor-pointer transition-colors"><!> Back to Journals List</button> <!></div> <!></div> <!> <!>`, 1);
function _page($$anchor, $$props) {
	push($$props, true);
	const $page = () => store_get(page, "$page", $$stores);
	const [$$stores, $$cleanup] = setup_stores();
	const id = $page().params.id ? parseInt($page().params.id) : 0;
	let journal = state(null);
	let loading = state(true);
	let errorMsg = state(null);
	let correlationId = state("");
	let showApproveConfirm = state(false);
	let showRejectConfirm = state(false);
	let isActionRunning = state(false);
	let abortController = null;
	async function loadDetails() {
		if (abortController) abortController.abort();
		abortController = new AbortController();
		set(loading, true);
		set(errorMsg, null);
		try {
			set(journal, await getJournalEntryById(id, abortController.signal), true);
		} catch (err) {
			if (err.name === "AbortError") return;
			set(errorMsg, err.message || "Failed to load transfer journal details.", true);
			set(correlationId, err.correlationId || "", true);
		} finally {
			set(loading, false);
		}
	}
	async function handleApprove() {
		if (!get(journal)) return;
		set(isActionRunning, true);
		try {
			const idempotencyKey = typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : "txf-idemp-" + Math.random().toString(36).substring(2) + "-" + Date.now();
			await approveJournalEntry(id, idempotencyKey, get(journal).rowVersion);
			addToast("Transfer journal approved and wallets updated successfully.", "success");
			await loadDetails();
		} catch (err) {
			addToast(err.message || "Failed to approve transfer journal.", "error");
		} finally {
			set(isActionRunning, false);
			set(showApproveConfirm, false);
		}
	}
	async function handleReject() {
		set(isActionRunning, true);
		try {
			await rejectJournalEntry(id);
			addToast("Transfer journal rejected successfully.", "success");
			await loadDetails();
		} catch (err) {
			addToast(err.message || "Failed to reject transfer journal.", "error");
		} finally {
			set(isActionRunning, false);
			set(showRejectConfirm, false);
		}
	}
	onMount(() => {
		loadDetails();
		return () => {
			if (abortController) abortController.abort();
		};
	});
	var fragment = root_6();
	head("1i8gwxk", ($$anchor) => {
		effect(() => {
			$document.title = "Party Transfer Journal Details — Accounts Portal";
		});
	});
	var div = first_child(fragment);
	var div_1 = child(div);
	var button = child(div_1);
	Arrow_left(child(button), { class: "h-3.5 w-3.5" });
	next();
	reset(button);
	var node_1 = sibling(button, 2);
	var consequent = ($$anchor) => {
		var div_2 = root_2();
		var node_2 = child(div_2);
		Button(node_2, {
			variant: "outline",
			size: "sm",
			class: "rounded-xl text-xs py-4 cursor-pointer font-semibold border-rose-200 text-rose-700 bg-rose-50 hover:bg-rose-100",
			get disabled() {
				return get(isActionRunning);
			},
			onclick: () => set(showRejectConfirm, true),
			children: ($$anchor, $$slotProps) => {
				var fragment_1 = root();
				X(first_child(fragment_1), { class: "h-3.5 w-3.5 mr-1" });
				next();
				append($$anchor, fragment_1);
			},
			$$slots: { default: true }
		});
		Button(sibling(node_2, 2), {
			variant: "default",
			size: "sm",
			class: "rounded-xl text-xs py-4 cursor-pointer font-semibold bg-emerald-600 hover:bg-emerald-700 text-white",
			get disabled() {
				return get(isActionRunning);
			},
			onclick: () => set(showApproveConfirm, true),
			children: ($$anchor, $$slotProps) => {
				var fragment_2 = root_1();
				Check(first_child(fragment_2), { class: "h-3.5 w-3.5 mr-1" });
				next();
				append($$anchor, fragment_2);
			},
			$$slots: { default: true }
		});
		reset(div_2);
		append($$anchor, div_2);
	};
	var d = user_derived(() => get(journal) && get(journal).status === "pending" && hasRole("master_accountant"));
	if_block(node_1, ($$render) => {
		if (get(d)) $$render(consequent);
	});
	reset(div_1);
	var node_6 = sibling(div_1, 2);
	var consequent_1 = ($$anchor) => {
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
	var alternate_1 = ($$anchor) => {
		var fragment_4 = comment();
		var node_7 = first_child(fragment_4);
		var consequent_2 = ($$anchor) => {
			var div_3 = root_3();
			Spinner(child(div_3), { class: "h-8 w-8 text-primary" });
			next(2);
			reset(div_3);
			append($$anchor, div_3);
		};
		var alternate = ($$anchor) => {
			var div_4 = root_5();
			var div_5 = child(div_4);
			var div_6 = child(div_5);
			var div_7 = child(div_6);
			var div_8 = child(div_7);
			var span = child(div_8);
			var text = child(span);
			reset(span);
			var h2 = sibling(span, 2);
			var text_1 = child(h2, true);
			reset(h2);
			reset(div_8);
			var span_1 = sibling(div_8, 2);
			var text_2 = child(span_1, true);
			reset(span_1);
			reset(div_7);
			var div_9 = sibling(div_7, 2);
			var div_10 = child(div_9);
			var p = sibling(child(div_10), 2);
			var text_3 = child(p, true);
			reset(p);
			reset(div_10);
			var div_11 = sibling(div_10, 2);
			var p_1 = sibling(child(div_11), 2);
			var text_4 = child(p_1, true);
			reset(p_1);
			reset(div_11);
			var div_12 = sibling(div_11, 2);
			var p_2 = sibling(child(div_12), 2);
			var text_5 = child(p_2, true);
			reset(p_2);
			reset(div_12);
			reset(div_9);
			reset(div_6);
			var div_13 = sibling(div_6, 2);
			var div_14 = sibling(child(div_13), 2);
			var div_15 = child(div_14);
			var div_16 = sibling(child(div_15), 2);
			var text_6 = child(div_16, true);
			reset(div_16);
			var div_17 = sibling(div_16, 2);
			var text_7 = child(div_17, true);
			reset(div_17);
			var div_18 = sibling(div_17, 2);
			MoneyDisplay(sibling(child(div_18)), { get amount() {
				return get(journal).amount;
			} });
			reset(div_18);
			reset(div_15);
			var div_19 = sibling(div_15, 2);
			Arrow_right(child(div_19), { class: "h-6 w-6 hidden md:block" });
			next(2);
			reset(div_19);
			var div_20 = sibling(div_19, 2);
			var div_21 = sibling(child(div_20), 2);
			var text_8 = child(div_21, true);
			reset(div_21);
			var div_22 = sibling(div_21, 2);
			var text_9 = child(div_22, true);
			reset(div_22);
			var div_23 = sibling(div_22, 2);
			MoneyDisplay(sibling(child(div_23)), { get amount() {
				return get(journal).amount;
			} });
			reset(div_23);
			reset(div_20);
			reset(div_14);
			reset(div_13);
			reset(div_5);
			var div_24 = sibling(div_5, 2);
			var div_25 = child(div_24);
			var h3 = child(div_25);
			Calendar(child(h3), { class: "h-4 w-4 text-primary" });
			next();
			reset(h3);
			var div_26 = sibling(h3, 2);
			var div_27 = child(div_26);
			var span_2 = sibling(child(div_27), 2);
			var text_10 = child(span_2, true);
			reset(span_2);
			reset(div_27);
			var div_28 = sibling(div_27, 2);
			var span_3 = sibling(child(div_28), 2);
			MoneyDisplay(child(span_3), { get amount() {
				return get(journal).amount;
			} });
			reset(span_3);
			reset(div_28);
			var node_14 = sibling(div_28, 2);
			var consequent_3 = ($$anchor) => {
				var fragment_5 = root_4();
				var div_29 = first_child(fragment_5);
				var span_4 = sibling(child(div_29), 2);
				var text_11 = child(span_4, true);
				reset(span_4);
				reset(div_29);
				var div_30 = sibling(div_29, 2);
				var span_5 = sibling(child(div_30), 2);
				var text_12 = child(span_5, true);
				reset(span_5);
				reset(div_30);
				template_effect(($0) => {
					set_text(text_11, get(journal).approvedByName || `User #${get(journal).approvedBy}`);
					set_text(text_12, $0);
				}, [() => get(journal).approvedAt ? new Date(get(journal).approvedAt).toLocaleString() : ""]);
				append($$anchor, fragment_5);
			};
			if_block(node_14, ($$render) => {
				if (get(journal).approvedBy) $$render(consequent_3);
			});
			reset(div_26);
			reset(div_25);
			reset(div_24);
			reset(div_4);
			template_effect(($0, $1) => {
				set_text(text, `Journal No. ${get(journal).journalNumber ?? ""}`);
				set_text(text_1, get(journal).note || "No memo description provided.");
				set_class(span_1, 1, $0);
				set_text(text_2, JOURNAL_STATUS_LABELS[get(journal).status] || get(journal).status);
				set_text(text_3, $1);
				set_text(text_4, get(journal).transferReference || "Pending Approval");
				set_text(text_5, get(journal).createdByName || `User #${get(journal).createdBy}`);
				set_text(text_6, get(journal).debitPartyName);
				set_text(text_7, get(journal).debitPartyType);
				set_text(text_8, get(journal).creditPartyName);
				set_text(text_9, get(journal).creditPartyType);
				set_text(text_10, get(journal).status);
			}, [() => clsx(["inline-flex items-center gap-1 font-semibold rounded-full border text-[10px] px-3 py-1 capitalize", get(journal).status === "approved" ? "text-emerald-700 bg-emerald-50 border-emerald-200 dark:text-emerald-400 dark:bg-emerald-950/40 dark:border-emerald-800" : get(journal).status === "pending" ? "text-yellow-700 bg-yellow-50 border-yellow-200 dark:text-yellow-400 dark:bg-yellow-950/40 dark:border-yellow-800" : "text-rose-700 bg-rose-50 border-rose-200 dark:text-rose-400 dark:bg-rose-950/40 dark:border-rose-800"].join(" ")), () => new Date(get(journal).createdAt).toLocaleDateString(void 0, { dateStyle: "full" })]);
			append($$anchor, div_4);
		};
		if_block(node_7, ($$render) => {
			if (get(loading) || !get(journal)) $$render(consequent_2);
			else $$render(alternate, -1);
		});
		append($$anchor, fragment_4);
	};
	if_block(node_6, ($$render) => {
		if (get(errorMsg)) $$render(consequent_1);
		else $$render(alternate_1, -1);
	});
	reset(div);
	var node_15 = sibling(div, 2);
	ConfirmationDialog(node_15, {
		title: "Approve Wallet Transfer?",
		message: "Are you sure you want to approve this party transfer journal? The specified wallet balances will be updated immediately.",
		confirmLabel: "Yes, Approve and Transfer",
		onConfirm: handleApprove,
		get open() {
			return get(showApproveConfirm);
		},
		set open($$value) {
			set(showApproveConfirm, $$value, true);
		}
	});
	ConfirmationDialog(sibling(node_15, 2), {
		title: "Reject Wallet Transfer?",
		message: "Are you sure you want to reject this party transfer request? The status will update to rejected and no balances will move.",
		confirmLabel: "Yes, Reject Request",
		onConfirm: handleReject,
		get open() {
			return get(showRejectConfirm);
		},
		set open($$value) {
			set(showRejectConfirm, $$value, true);
		}
	});
	delegated("click", button, () => goto("/accounting/journals"));
	append($$anchor, fragment);
	pop();
	$$cleanup();
}
delegate(["click"]);
//#endregion
export { _page as component };

import { B as append, Bt as reset, G as text, H as from_html, I as if_block, Nt as pop, Pt as push, Q as get, R as set_text, V as comment, bt as state, ht as sibling, m as bind_value, mt as first_child, o as prop, ot as template_effect, pt as child, ut as remove_textarea_child, vt as set, zt as next } from "./dXkmWTgM.js";
import "./DhaYE-8x.js";
import { i as hasRole } from "./Clfal68w.js";
import { t as addToast } from "./CbPRQHfn.js";
import { t as Loader_circle } from "./BMOA0yrB2.js";
import { t as Triangle_alert } from "./BKenZzGW.js";
import { t as Button } from "./BhXsq3bC.js";
import { t as ConfirmationDialog } from "./BuNG9dXS2.js";
import { o as rejectTransaction, t as approveTransaction } from "./D20HQfOO2.js";
//#region src/lib/components/TransactionApproveDialog.svelte
function TransactionApproveDialog($$anchor, $$props) {
	push($$props, true);
	/**
	* TransactionApproveDialog — confirmation dialog for transaction approval.
	* Gated to master_accountant role.
	*/
	let open = prop($$props, "open", 15, false);
	async function handleApprove() {
		if (!$$props.transactionId) return;
		if (!hasRole("master_accountant")) {
			addToast("Only a Master Accountant can approve transactions.", "error");
			return;
		}
		try {
			await approveTransaction($$props.transactionId);
			addToast(`Transaction #${$$props.transactionId} has been successfully approved.`, "success");
			if ($$props.onConfirm) $$props.onConfirm();
		} catch (err) {
			addToast(err.message || "Failed to approve transaction.", "error");
			throw err;
		}
	}
	function handleCancel() {
		if ($$props.onClose) $$props.onClose();
		open(false);
	}
	ConfirmationDialog($$anchor, {
		title: "Approve Transaction",
		get message() {
			return `Are you sure you want to approve transaction #${$$props.transactionId ?? ""}? This will post the transaction and finalize the ledger entries.`;
		},
		confirmLabel: "Approve",
		onConfirm: handleApprove,
		onCancel: handleCancel,
		get open() {
			return open();
		},
		set open($$value) {
			open($$value);
		}
	});
	pop();
}
//#endregion
//#region src/lib/components/TransactionRejectDialog.svelte
var root = from_html(`<div class="p-3 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-xs font-semibold leading-relaxed"> </div>`);
var root_1 = from_html(`<!> <span>Rejecting...</span>`, 1);
var root_2 = from_html(`<span>Reject Transaction</span>`);
var root_3 = from_html(`<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs select-none p-4" role="dialog" aria-modal="true" aria-labelledby="reject-title" aria-describedby="reject-desc"><div class="w-full max-w-[480px] bg-card border border-border rounded-3xl p-6 shadow-xl flex flex-col gap-4 animate-scaleUp"><div class="flex items-start gap-4"><div class="p-3 bg-red-100 dark:bg-red-950/20 text-red-600 rounded-2xl shrink-0"><!></div> <div class="flex-1 min-w-0"><h2 id="reject-title" class="text-sm font-bold text-foreground leading-tight">Reject Transaction</h2> <p id="reject-desc" class="text-xs text-muted-foreground mt-2 leading-relaxed"> </p></div></div> <div class="flex flex-col gap-1.5 mt-2"><label for="reject-reason" class="text-xs font-semibold text-muted-foreground">Reason</label> <textarea id="reject-reason" rows="3" class="w-full text-xs p-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary placeholder-muted-foreground/60 leading-relaxed resize-none" placeholder="Describe why this transaction is being rejected..."></textarea></div> <!> <div class="flex items-center justify-end gap-2 mt-2"><!> <!></div></div></div>`);
function TransactionRejectDialog($$anchor, $$props) {
	push($$props, true);
	/**
	* TransactionRejectDialog — reject dialog requiring a reason.
	* Gated to master_accountant role.
	*/
	let open = prop($$props, "open", 15, false);
	let reason = state("");
	let loading = state(false);
	let errorMsg = state(null);
	async function handleReject() {
		if (!$$props.transactionId) return;
		if (!hasRole("master_accountant")) {
			addToast("Only a Master Accountant can reject transactions.", "error");
			return;
		}
		if (!get(reason).trim()) {
			set(errorMsg, "Rejection reason is required.");
			return;
		}
		set(loading, true);
		set(errorMsg, null);
		try {
			await rejectTransaction($$props.transactionId, { reason: get(reason) });
			addToast(`Transaction #${$$props.transactionId} has been rejected.`, "success");
			set(reason, "");
			open(false);
			if ($$props.onConfirm) $$props.onConfirm();
		} catch (err) {
			set(errorMsg, err.message || "Failed to reject transaction.", true);
			addToast(get(errorMsg) ?? "", "error");
		} finally {
			set(loading, false);
		}
	}
	function handleCancel() {
		if (get(loading)) return;
		set(reason, "");
		set(errorMsg, null);
		if ($$props.onClose) $$props.onClose();
		open(false);
	}
	var fragment = comment();
	var node = first_child(fragment);
	var consequent_2 = ($$anchor) => {
		var div = root_3();
		var div_1 = child(div);
		var div_2 = child(div_1);
		var div_3 = child(div_2);
		Triangle_alert(child(div_3), { class: "h-6 w-6" });
		reset(div_3);
		var div_4 = sibling(div_3, 2);
		var p = sibling(child(div_4), 2);
		var text$1 = child(p);
		reset(p);
		reset(div_4);
		reset(div_2);
		var div_5 = sibling(div_2, 2);
		var textarea = sibling(child(div_5), 2);
		remove_textarea_child(textarea);
		reset(div_5);
		var node_2 = sibling(div_5, 2);
		var consequent = ($$anchor) => {
			var div_6 = root();
			var text_1 = child(div_6, true);
			reset(div_6);
			template_effect(() => set_text(text_1, get(errorMsg)));
			append($$anchor, div_6);
		};
		if_block(node_2, ($$render) => {
			if (get(errorMsg)) $$render(consequent);
		});
		var div_7 = sibling(node_2, 2);
		var node_3 = child(div_7);
		Button(node_3, {
			variant: "outline",
			onclick: handleCancel,
			get disabled() {
				return get(loading);
			},
			class: "rounded-xl font-semibold text-xs py-5 px-4 cursor-pointer",
			children: ($$anchor, $$slotProps) => {
				next();
				append($$anchor, text("Cancel"));
			},
			$$slots: { default: true }
		});
		Button(sibling(node_3, 2), {
			onclick: handleReject,
			get disabled() {
				return get(loading);
			},
			variant: "destructive",
			class: "rounded-xl font-semibold text-xs py-5 px-4 cursor-pointer",
			children: ($$anchor, $$slotProps) => {
				var fragment_1 = comment();
				var node_5 = first_child(fragment_1);
				var consequent_1 = ($$anchor) => {
					var fragment_2 = root_1();
					Loader_circle(first_child(fragment_2), { class: "h-3.5 w-3.5 animate-spin mr-1.5" });
					next(2);
					append($$anchor, fragment_2);
				};
				var alternate = ($$anchor) => {
					append($$anchor, root_2());
				};
				if_block(node_5, ($$render) => {
					if (get(loading)) $$render(consequent_1);
					else $$render(alternate, -1);
				});
				append($$anchor, fragment_1);
			},
			$$slots: { default: true }
		});
		reset(div_7);
		reset(div_1);
		reset(div);
		template_effect(() => {
			set_text(text$1, `Please provide a reason for rejecting transaction #${$$props.transactionId ?? ""}. This
						action is irreversible.`);
			textarea.disabled = get(loading);
		});
		bind_value(textarea, () => get(reason), ($$value) => set(reason, $$value));
		append($$anchor, div);
	};
	if_block(node, ($$render) => {
		if (open()) $$render(consequent_2);
	});
	append($$anchor, fragment);
	pop();
}
//#endregion
export { TransactionApproveDialog as n, TransactionRejectDialog as t };

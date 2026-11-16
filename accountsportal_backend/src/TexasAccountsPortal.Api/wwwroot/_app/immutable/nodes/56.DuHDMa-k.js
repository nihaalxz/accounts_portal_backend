import { B as append, Bt as reset, Ct as user_derived, D as head, Et as store_get, G as text, H as from_html, I as if_block, J as event, K as delegate, N as each, Nt as pop, P as index, Pt as push, Q as get, R as set_text, Tt as setup_stores, _ as set_attribute, b as bind_select_value, bt as state, dt as $document, gt as proxy, ht as sibling, mt as first_child, n as onDestroy, ot as template_effect, pt as child, q as delegated, r as onMount, rt as deferred_template_effect, st as user_effect, vt as set, w as set_class, zt as next } from "../chunks/dXkmWTgM.js";
import { t as goto } from "../chunks/ZpKlJkAm.js";
import "../chunks/DhaYE-8x.js";
import { t as apiFetch, u as getSalesPortalFileUrl } from "../chunks/DSptTuft.js";
import { i as hasRole } from "../chunks/uu91bWHh.js";
import { r as toast } from "../chunks/CbPRQHfn.js";
import { t as Arrow_left } from "../chunks/Bn7x0kyr.js";
import { t as Circle_alert } from "../chunks/CHXThoj_2.js";
import { t as Credit_card } from "../chunks/DZ-rRKb92.js";
import { t as File_text } from "../chunks/NLRKrZbo2.js";
import { t as Printer } from "../chunks/Ds2DlsUi.js";
import { t as Refresh_cw } from "../chunks/DpTJy0Wb.js";
import { t as X } from "../chunks/wXHc9RNY.js";
import { t as page } from "../chunks/DneYzq0S.js";
import { t as Button } from "../chunks/BhXsq3bC.js";
import "../chunks/DmEL6Ep62.js";
import { t as ConfirmationDialog } from "../chunks/BuNG9dXS2.js";
import { t as MoneyDisplay } from "../chunks/CIVSRuaR2.js";
import { t as DateDisplay } from "../chunks/DEr_pDJT2.js";
import "../chunks/CS-Kx6i02.js";
import { t as previewDocument } from "../chunks/CafFwmlW2.js";
import { r as getAccounts } from "../chunks/Cu_W_qXw2.js";
import { t as Input } from "../chunks/C4xMLgho.js";
import { t as ReceiptRealtimeController } from "../chunks/yxjZ40JE.js";
//#region src/routes/(app)/sales/receipts/[id]/+page.svelte
var root = from_html(`<!> Back to Receipts`, 1);
var root_1 = from_html(`<p class="text-xs text-muted-foreground mt-0.5 font-mono"> </p>`);
var root_2 = from_html(`<!> Print Receipt`, 1);
var root_3 = from_html(`<!> Reload`, 1);
var root_4 = from_html(`<div class="bg-card border border-border rounded-2xl p-16 flex items-center justify-center animate-pulse"><!></div>`);
var root_5 = from_html(`<div class="bg-card border border-border rounded-2xl p-16 text-center text-red-600 text-sm"> </div>`);
var root_6 = from_html(`<div class="space-y-1"><span class="text-muted-foreground block">Target Bank</span> <span class="font-semibold text-primary text-sm block"> </span></div>`);
var root_7 = from_html(`<div class="sm:col-span-2 space-y-1"><span class="text-muted-foreground block">Narration / Note</span> <p class="text-foreground text-xs leading-relaxed bg-muted/20 p-3 rounded-xl border border-border/40 font-medium"> </p></div>`);
var root_8 = from_html(`<span class="truncate max-w-[200px] sm:max-w-[400px]"> </span> <div class="ml-auto flex gap-2"><a target="_blank" rel="noopener noreferrer" class="px-2.5 py-1 text-[11px] font-bold rounded-lg border border-border bg-card hover:bg-muted text-foreground transition-all cursor-pointer inline-flex items-center">View</a> <a download="" class="px-2.5 py-1 text-[11px] font-bold rounded-lg border border-border bg-card hover:bg-muted text-foreground transition-all cursor-pointer inline-flex items-center">Download</a></div>`, 1);
var root_9 = from_html(`<span>No Proof Attached</span>`);
var root_10 = from_html(`<option> </option>`);
var root_11 = from_html(`<div class="flex flex-col gap-1.5 pt-4 border-t border-border/40 text-xs"><label for="cashAccountId" class="font-semibold text-muted-foreground">Destination Cash Account</label> <select id="cashAccountId" class="h-9.5 w-full bg-background border border-border rounded-xl px-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground disabled:opacity-50"><option>-- Select Cash Account --</option><!></select></div>`);
var root_12 = from_html(`<div class="flex gap-3 pt-4 border-t border-border/40 justify-end"><button class="px-4 py-2 text-xs font-bold rounded-xl cursor-pointer bg-emerald-600 hover:bg-emerald-700 text-white flex items-center gap-1.5 transition-all shadow-sm disabled:opacity-50"><!> Approve Payment</button> <button class="px-4 py-2 text-xs font-bold rounded-xl cursor-pointer bg-red-600 hover:bg-red-700 text-white flex items-center gap-1.5 transition-all shadow-sm"><!> Reject Payment</button></div>`);
var root_13 = from_html(`<div class="max-w-3xl mx-auto"><div class="bg-card border border-border rounded-2xl p-6 space-y-6 shadow-xs font-sans"><div class="flex justify-between border-b border-border/40 pb-4"><div class="flex items-center gap-3"><div class="p-2.5 bg-primary/10 text-primary rounded-xl"><!></div> <div><h3 class="text-sm font-bold text-foreground">Receipt Summary</h3> <p class="text-[10px] text-muted-foreground mt-0.5 uppercase tracking-wider font-semibold"> </p></div></div> <span> </span></div> <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs leading-relaxed"><div class="space-y-1"><span class="text-muted-foreground block">Payer Head Account</span> <strong class="text-foreground text-sm block"> </strong> <span class="text-[10px] text-muted-foreground/80 bg-muted px-2 py-0.5 rounded capitalize"> </span></div> <div class="space-y-1"><span class="text-muted-foreground block">Payment Mode / Method</span> <span class="capitalize text-sm font-semibold text-foreground block"> </span></div> <div class="space-y-1"><span class="text-muted-foreground block">Total Receipt Amount</span> <strong class="text-foreground font-mono text-base block"><!></strong></div> <div class="space-y-1"><span class="text-muted-foreground block">Logged At</span> <span class="block font-mono text-muted-foreground text-sm"><!></span></div> <!> <!> <div class="sm:col-span-2 space-y-1"><span class="text-muted-foreground block">Payment Proof / Reference</span> <div class="flex items-center gap-3 font-mono text-muted-foreground bg-muted/30 p-2.5 rounded-xl border border-border/40 break-all"><!></div></div></div> <!> <!></div></div>`);
var root_14 = from_html(`<p class="text-[11px] font-semibold text-red-600 flex items-center gap-1 mt-1.5 animate-in fade-in duration-150"><!> <span> </span></p>`);
var root_15 = from_html(`<!> Confirm & Approve Payment`, 1);
var root_16 = from_html(`<div class="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-in fade-in duration-200"><div class="bg-card border border-border rounded-2xl p-6 max-w-md w-full shadow-2xl space-y-4 font-sans"><div class="flex items-center justify-between border-b border-border/40 pb-3"><div class="flex items-center gap-2"><!> <h3 class="text-base font-bold text-foreground">Enter Bank Reference ID</h3></div> <button class="p-1 text-muted-foreground hover:text-foreground rounded-lg transition-colors cursor-pointer"><!></button></div> <p class="text-xs text-muted-foreground leading-relaxed">Please enter the unique Bank / Online Transaction Reference ID for Receipt <span class="font-semibold text-foreground font-mono"> </span>. Duplicate reference IDs are strictly prohibited and cannot be reused.</p> <form class="space-y-4"><div class="space-y-1.5"><label for="refIdInputReceipt" class="text-xs font-semibold text-foreground">Transaction Reference ID *</label> <!> <!></div> <div class="flex items-center justify-end gap-2 pt-3 border-t border-border/40"><!> <!></div></form></div></div>`);
var root_17 = from_html(`<div class="space-y-6 print:space-y-2"><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 print:hidden"><div class="flex items-center gap-3"><!> <div><h1 class="text-xl font-bold text-foreground flex items-center gap-2">Receipt <span class="font-mono text-primary"> </span></h1> <!></div></div> <div class="flex items-center gap-2"><!> <!></div></div> <!> <!> <!></div>`);
function _page($$anchor, $$props) {
	push($$props, true);
	const $page = () => store_get(page, "$page", $$stores);
	const [$$stores, $$cleanup] = setup_stores();
	const receiptId = user_derived(() => parseInt($page().params.id ?? "0"));
	let loading = state(false);
	let actionLoading = state(false);
	let receiptDetail = state(null);
	let error = state(null);
	let cashAccounts = state(proxy([]));
	let selectedCashAccountIdVal = state("");
	let realtimeController = null;
	let showConfirmModal = state(false);
	let showReferenceIdModal = state(false);
	let onlineReferenceIdVal = state("");
	let refIdModalError = state(null);
	let confirmTitle = state("");
	let confirmMessage = state("");
	let confirmActionLabel = state("");
	let confirmIsDestructive = state(false);
	let targetStatusToApply = state("");
	onMount(() => {
		realtimeController = new ReceiptRealtimeController({
			isGlobalList: true,
			isApprovalQueue: true,
			onReceiptChanged: () => fetchReceiptDetails()
		});
		realtimeController.mount();
	});
	onDestroy(() => {
		realtimeController?.unmount();
	});
	async function loadCashAccounts() {
		try {
			const res = await getAccounts();
			set(cashAccounts, res.filter((a) => a.type.toLowerCase() === "cash" && a.isActive), true);
		} catch (err) {
			console.error("Failed to load cash accounts", err);
		}
	}
	async function fetchReceiptDetails() {
		if (isNaN(get(receiptId)) || get(receiptId) <= 0) {
			set(error, "Invalid receipt identifier.");
			return;
		}
		set(loading, true);
		set(error, null);
		try {
			set(receiptDetail, await apiFetch(`api/sales-entries/receipts/${get(receiptId)}`), true);
			if (get(receiptDetail)?.paymentMode?.toLowerCase() === "cash") await loadCashAccounts();
		} catch (err) {
			set(error, err?.message || "Failed to load receipt details.", true);
			console.error("Failed to load receipt details:", err);
		} finally {
			set(loading, false);
		}
	}
	const isOnlinePayment = user_derived(() => {
		if (!get(receiptDetail)) return false;
		const pm = (get(receiptDetail).paymentMode || get(receiptDetail).paymentMethod || get(receiptDetail).payment_mode || get(receiptDetail).payment_method || "").toLowerCase().trim();
		if (pm === "cash" || pm === "wallet" || pm.includes("wallet")) return false;
		return true;
	});
	function requestStatusChange(newStatus) {
		if (get(actionLoading) || !get(receiptDetail)) return;
		set(targetStatusToApply, newStatus, true);
		const isCash = (get(receiptDetail).paymentMode || get(receiptDetail).paymentMethod || get(receiptDetail).payment_mode || get(receiptDetail).payment_method || "").toLowerCase().trim() === "cash";
		if (newStatus === "success") {
			if (isCash && !get(selectedCashAccountIdVal)) {
				toast.warning("Please select a destination cash account before approving.");
				return;
			}
			if (get(isOnlinePayment)) {
				set(onlineReferenceIdVal, get(receiptDetail).paymentReference || get(receiptDetail).paymentReferenceId || get(receiptDetail).referenceId || "", true);
				set(refIdModalError, null);
				set(showReferenceIdModal, true);
				return;
			}
		}
		const docRef = get(receiptDetail)?.documentNumber || `#${get(receiptId)}`;
		if (newStatus === "success") {
			set(confirmTitle, "Approve Payment Receipt");
			set(confirmMessage, `Are you sure you want to approve Receipt ${docRef}? This will confirm the collection and apply financial postings.`);
			set(confirmActionLabel, "Approve Payment");
			set(confirmIsDestructive, false);
		} else {
			set(confirmTitle, "Reject Payment Receipt");
			set(confirmMessage, `Are you sure you want to reject Receipt ${docRef}? This will mark the payment receipt status as Failed.`);
			set(confirmActionLabel, "Reject Payment");
			set(confirmIsDestructive, true);
		}
		set(showConfirmModal, true);
	}
	async function executeStatusUpdate(refId) {
		if (!get(receiptDetail)) return;
		const statusToApply = get(targetStatusToApply) || "success";
		set(actionLoading, true);
		set(refIdModalError, null);
		try {
			const cashAccountId = get(selectedCashAccountIdVal) ? parseInt(get(selectedCashAccountIdVal)) : null;
			await apiFetch(`api/sales-entries/receipts/${get(receiptId)}/payment-status`, {
				method: "POST",
				body: JSON.stringify({
					status: statusToApply,
					cashAccountId,
					referenceId: refId || null
				})
			});
			toast.success(statusToApply === "success" ? "Payment receipt approved successfully." : "Payment receipt rejected.");
			set(showReferenceIdModal, false);
			set(showConfirmModal, false);
			await fetchReceiptDetails();
		} catch (err) {
			const msg = err?.message ?? "Failed to update payment status.";
			toast.error(msg);
			if (get(showReferenceIdModal)) set(refIdModalError, msg, true);
		} finally {
			set(actionLoading, false);
		}
	}
	user_effect(() => {
		if (get(receiptId)) fetchReceiptDetails();
	});
	function statusClass(status) {
		const s = (status ?? "").toLowerCase();
		if (s === "success" || s === "posted") return "bg-emerald-50 text-emerald-700 border border-emerald-200";
		if (s === "pending" || s === "processing") return "bg-amber-50 text-amber-700 border border-amber-200";
		return "bg-red-50 text-red-700 border border-red-200";
	}
	var div = root_17();
	head("d2w9u0", ($$anchor) => {
		deferred_template_effect(() => {
			$document.title = `Receipt ${(get(receiptDetail)?.documentNumber || "") ?? ""} — Accounts Portal`;
		});
	});
	var div_1 = child(div);
	var div_2 = child(div_1);
	var node = child(div_2);
	Button(node, {
		variant: "outline",
		class: "h-8.5 rounded-xl cursor-pointer flex items-center gap-1.5 text-xs",
		onclick: () => goto("/sales/receipts"),
		children: ($$anchor, $$slotProps) => {
			var fragment = root();
			Arrow_left(first_child(fragment), { class: "h-3.5 w-3.5" });
			next();
			append($$anchor, fragment);
		},
		$$slots: { default: true }
	});
	var div_3 = sibling(node, 2);
	var h1 = child(div_3);
	var span = sibling(child(h1));
	var text$1 = child(span, true);
	reset(span);
	reset(h1);
	var node_2 = sibling(h1, 2);
	var consequent = ($$anchor) => {
		var p = root_1();
		var text_1 = child(p);
		reset(p);
		template_effect(() => set_text(text_1, `Receipt Ref: ${(get(receiptDetail).documentNumber || get(receiptDetail).receiptId) ?? ""}`));
		append($$anchor, p);
	};
	if_block(node_2, ($$render) => {
		if (get(receiptDetail)) $$render(consequent);
	});
	reset(div_3);
	reset(div_2);
	var div_4 = sibling(div_2, 2);
	var node_3 = child(div_4);
	var consequent_1 = ($$anchor) => {
		Button($$anchor, {
			variant: "default",
			class: "h-8.5 rounded-xl cursor-pointer flex items-center gap-1.5 text-xs bg-primary text-primary-foreground",
			onclick: () => previewDocument("receipt", "receipt", get(receiptId)),
			children: ($$anchor, $$slotProps) => {
				var fragment_2 = root_2();
				Printer(first_child(fragment_2), { class: "h-3.5 w-3.5" });
				next();
				append($$anchor, fragment_2);
			},
			$$slots: { default: true }
		});
	};
	if_block(node_3, ($$render) => {
		if (get(receiptDetail)) $$render(consequent_1);
	});
	Button(sibling(node_3, 2), {
		variant: "outline",
		class: "h-8.5 rounded-xl cursor-pointer flex items-center gap-1.5 text-xs",
		onclick: fetchReceiptDetails,
		get disabled() {
			return get(loading);
		},
		children: ($$anchor, $$slotProps) => {
			var fragment_3 = root_3();
			var node_6 = first_child(fragment_3);
			{
				let $0 = user_derived(() => ["h-3.5 w-3.5", get(loading) ? "animate-spin" : ""].join(" "));
				Refresh_cw(node_6, { get class() {
					return get($0);
				} });
			}
			next();
			append($$anchor, fragment_3);
		},
		$$slots: { default: true }
	});
	reset(div_4);
	reset(div_1);
	var node_7 = sibling(div_1, 2);
	var consequent_2 = ($$anchor) => {
		var div_5 = root_4();
		Refresh_cw(child(div_5), { class: "h-8 w-8 text-primary animate-spin" });
		reset(div_5);
		append($$anchor, div_5);
	};
	var consequent_3 = ($$anchor) => {
		var div_6 = root_5();
		var text_2 = child(div_6, true);
		reset(div_6);
		template_effect(() => set_text(text_2, get(error)));
		append($$anchor, div_6);
	};
	var consequent_11 = ($$anchor) => {
		var div_7 = root_13();
		var div_8 = child(div_7);
		var div_9 = child(div_8);
		var div_10 = child(div_9);
		var div_11 = child(div_10);
		File_text(child(div_11), { class: "h-6 w-6" });
		reset(div_11);
		var div_12 = sibling(div_11, 2);
		var p_1 = sibling(child(div_12), 2);
		var text_3 = child(p_1);
		reset(p_1);
		reset(div_12);
		reset(div_10);
		var span_1 = sibling(div_10, 2);
		var text_4 = child(span_1, true);
		reset(span_1);
		reset(div_9);
		var div_13 = sibling(div_9, 2);
		var div_14 = child(div_13);
		var strong = sibling(child(div_14), 2);
		var text_5 = child(strong, true);
		reset(strong);
		var span_2 = sibling(strong, 2);
		var text_6 = child(span_2, true);
		reset(span_2);
		reset(div_14);
		var div_15 = sibling(div_14, 2);
		var span_3 = sibling(child(div_15), 2);
		var text_7 = child(span_3, true);
		reset(span_3);
		reset(div_15);
		var div_16 = sibling(div_15, 2);
		var strong_1 = sibling(child(div_16), 2);
		MoneyDisplay(child(strong_1), { get amount() {
			return get(receiptDetail).amount;
		} });
		reset(strong_1);
		reset(div_16);
		var div_17 = sibling(div_16, 2);
		var span_4 = sibling(child(div_17), 2);
		DateDisplay(child(span_4), { get value() {
			return get(receiptDetail).createdAt;
		} });
		reset(span_4);
		reset(div_17);
		var node_12 = sibling(div_17, 2);
		var consequent_4 = ($$anchor) => {
			var div_18 = root_6();
			var span_5 = sibling(child(div_18), 2);
			var text_8 = child(span_5, true);
			reset(span_5);
			reset(div_18);
			template_effect(() => set_text(text_8, get(receiptDetail).bankName));
			append($$anchor, div_18);
		};
		if_block(node_12, ($$render) => {
			if (get(receiptDetail).bankName) $$render(consequent_4);
		});
		var node_13 = sibling(node_12, 2);
		var consequent_5 = ($$anchor) => {
			var div_19 = root_7();
			var p_2 = sibling(child(div_19), 2);
			var text_9 = child(p_2, true);
			reset(p_2);
			reset(div_19);
			template_effect(() => set_text(text_9, get(receiptDetail).narration));
			append($$anchor, div_19);
		};
		if_block(node_13, ($$render) => {
			if (get(receiptDetail).narration) $$render(consequent_5);
		});
		var div_20 = sibling(node_13, 2);
		var div_21 = sibling(child(div_20), 2);
		var node_14 = child(div_21);
		var consequent_6 = ($$anchor) => {
			var fragment_4 = root_8();
			var span_6 = first_child(fragment_4);
			var text_10 = child(span_6, true);
			reset(span_6);
			var div_22 = sibling(span_6, 2);
			var a_1 = child(div_22);
			var a_2 = sibling(a_1, 2);
			reset(div_22);
			template_effect(($0, $1, $2) => {
				set_attribute(span_6, "title", get(receiptDetail).paymentProof);
				set_text(text_10, $0);
				set_attribute(a_1, "href", $1);
				set_attribute(a_2, "href", $2);
			}, [
				() => get(receiptDetail).paymentProof.split("/").pop(),
				() => getSalesPortalFileUrl(get(receiptDetail).paymentProof),
				() => getSalesPortalFileUrl(get(receiptDetail).paymentProof)
			]);
			append($$anchor, fragment_4);
		};
		var alternate = ($$anchor) => {
			append($$anchor, root_9());
		};
		if_block(node_14, ($$render) => {
			if (get(receiptDetail).paymentProof) $$render(consequent_6);
			else $$render(alternate, -1);
		});
		reset(div_21);
		reset(div_20);
		reset(div_13);
		var node_15 = sibling(div_13, 2);
		var consequent_7 = ($$anchor) => {
			var div_23 = root_11();
			var select = sibling(child(div_23), 2);
			var option = child(select);
			option.value = option.__value = "";
			each(sibling(option), 17, () => get(cashAccounts), index, ($$anchor, acc) => {
				var option_1 = root_10();
				var text_11 = child(option_1);
				reset(option_1);
				var option_1_value = {};
				template_effect(($0, $1) => {
					set_text(text_11, `${get(acc).name ?? ""} (Bal: ${$0 ?? ""} BHD)`);
					if (option_1_value !== (option_1_value = $1)) option_1.value = (option_1.__value = $1) ?? "";
				}, [() => get(acc).currentBalance.toFixed(3), () => String(get(acc).id)]);
				append($$anchor, option_1);
			});
			reset(select);
			reset(div_23);
			template_effect(() => select.disabled = get(actionLoading));
			bind_select_value(select, () => get(selectedCashAccountIdVal), ($$value) => set(selectedCashAccountIdVal, $$value));
			append($$anchor, div_23);
		};
		var d = user_derived(() => get(receiptDetail).status?.toLowerCase() === "pending" && get(receiptDetail).paymentMode?.toLowerCase() === "cash" && hasRole("normal_accountant"));
		if_block(node_15, ($$render) => {
			if (get(d)) $$render(consequent_7);
		});
		var node_17 = sibling(node_15, 2);
		var consequent_10 = ($$anchor) => {
			var div_24 = root_12();
			var button = child(div_24);
			var node_18 = child(button);
			var consequent_8 = ($$anchor) => {
				Refresh_cw($$anchor, { class: "h-3.5 w-3.5 animate-spin" });
			};
			if_block(node_18, ($$render) => {
				if (get(actionLoading)) $$render(consequent_8);
			});
			next();
			reset(button);
			var button_1 = sibling(button, 2);
			var node_19 = child(button_1);
			var consequent_9 = ($$anchor) => {
				Refresh_cw($$anchor, { class: "h-3.5 w-3.5 animate-spin" });
			};
			if_block(node_19, ($$render) => {
				if (get(actionLoading)) $$render(consequent_9);
			});
			next();
			reset(button_1);
			reset(div_24);
			template_effect(($0) => {
				button.disabled = $0;
				button_1.disabled = get(actionLoading);
			}, [() => get(actionLoading) || get(receiptDetail).paymentMode?.toLowerCase() === "cash" && !get(selectedCashAccountIdVal)]);
			delegated("click", button, () => requestStatusChange("success"));
			delegated("click", button_1, () => requestStatusChange("failed"));
			append($$anchor, div_24);
		};
		var d_1 = user_derived(() => get(receiptDetail).status?.toLowerCase() === "pending" && hasRole("normal_accountant"));
		if_block(node_17, ($$render) => {
			if (get(d_1)) $$render(consequent_10);
		});
		reset(div_8);
		reset(div_7);
		template_effect(($0) => {
			set_text(text_3, `${get(receiptDetail).service ?? ""} Booking Payment`);
			set_class(span_1, 1, `inline-flex items-center px-3 py-1 rounded-full text-xs font-bold capitalize h-fit border ${$0 ?? ""}`);
			set_text(text_4, get(receiptDetail).status);
			set_text(text_5, get(receiptDetail).headName || "—");
			set_text(text_6, get(receiptDetail).clientType);
			set_text(text_7, get(receiptDetail).paymentMode);
		}, [() => statusClass(get(receiptDetail).status)]);
		append($$anchor, div_7);
	};
	if_block(node_7, ($$render) => {
		if (get(loading) && !get(receiptDetail)) $$render(consequent_2);
		else if (get(error)) $$render(consequent_3, 1);
		else if (get(receiptDetail)) $$render(consequent_11, 2);
	});
	var node_20 = sibling(node_7, 2);
	ConfirmationDialog(node_20, {
		get title() {
			return get(confirmTitle);
		},
		get message() {
			return get(confirmMessage);
		},
		get confirmLabel() {
			return get(confirmActionLabel);
		},
		get isDestructive() {
			return get(confirmIsDestructive);
		},
		onConfirm: executeStatusUpdate,
		get open() {
			return get(showConfirmModal);
		},
		set open($$value) {
			set(showConfirmModal, $$value, true);
		}
	});
	var node_21 = sibling(node_20, 2);
	var consequent_14 = ($$anchor) => {
		var div_25 = root_16();
		var div_26 = child(div_25);
		var div_27 = child(div_26);
		var div_28 = child(div_27);
		Credit_card(child(div_28), { class: "h-5 w-5 text-primary" });
		next(2);
		reset(div_28);
		var button_2 = sibling(div_28, 2);
		X(child(button_2), { class: "h-4 w-4" });
		reset(button_2);
		reset(div_27);
		var p_3 = sibling(div_27, 2);
		var span_8 = sibling(child(p_3));
		var text_12 = child(span_8, true);
		reset(span_8);
		next();
		reset(p_3);
		var form = sibling(p_3, 2);
		var div_29 = child(form);
		var node_24 = sibling(child(div_29), 2);
		{
			let $0 = user_derived(() => ["text-xs font-mono", get(refIdModalError) ? "border-red-500 ring-2 ring-red-500/20" : ""].join(" "));
			Input(node_24, {
				id: "refIdInputReceipt",
				type: "text",
				placeholder: "e.g. TXN-987654321",
				oninput: () => set(refIdModalError, null),
				required: true,
				get class() {
					return get($0);
				},
				get value() {
					return get(onlineReferenceIdVal);
				},
				set value($$value) {
					set(onlineReferenceIdVal, $$value, true);
				}
			});
		}
		var node_25 = sibling(node_24, 2);
		var consequent_12 = ($$anchor) => {
			var p_4 = root_14();
			var node_26 = child(p_4);
			Circle_alert(node_26, { class: "h-3.5 w-3.5 shrink-0 text-red-600" });
			var span_9 = sibling(node_26, 2);
			var text_13 = child(span_9, true);
			reset(span_9);
			reset(p_4);
			template_effect(() => set_text(text_13, get(refIdModalError)));
			append($$anchor, p_4);
		};
		if_block(node_25, ($$render) => {
			if (get(refIdModalError)) $$render(consequent_12);
		});
		reset(div_29);
		var div_30 = sibling(div_29, 2);
		var node_27 = child(div_30);
		Button(node_27, {
			type: "button",
			variant: "outline",
			class: "rounded-xl h-9 text-xs cursor-pointer",
			get disabled() {
				return get(actionLoading);
			},
			onclick: () => set(showReferenceIdModal, false),
			children: ($$anchor, $$slotProps) => {
				next();
				append($$anchor, text("Cancel"));
			},
			$$slots: { default: true }
		});
		var node_28 = sibling(node_27, 2);
		{
			let $0 = user_derived(() => get(actionLoading) || !get(onlineReferenceIdVal).trim());
			Button(node_28, {
				type: "submit",
				class: "rounded-xl h-9 text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white cursor-pointer",
				get disabled() {
					return get($0);
				},
				children: ($$anchor, $$slotProps) => {
					var fragment_7 = root_15();
					var node_29 = first_child(fragment_7);
					var consequent_13 = ($$anchor) => {
						Refresh_cw($$anchor, { class: "h-3.5 w-3.5 mr-1.5 animate-spin" });
					};
					if_block(node_29, ($$render) => {
						if (get(actionLoading)) $$render(consequent_13);
					});
					next();
					append($$anchor, fragment_7);
				},
				$$slots: { default: true }
			});
		}
		reset(div_30);
		reset(form);
		reset(div_26);
		reset(div_25);
		template_effect(() => set_text(text_12, get(receiptDetail)?.documentNumber || get(receiptDetail)?.receiptId || `#${get(receiptId)}`));
		delegated("click", button_2, () => set(showReferenceIdModal, false));
		event("submit", form, (e) => {
			e.preventDefault();
			if (!get(onlineReferenceIdVal).trim()) {
				toast.error("Bank Reference ID is required for online payments.");
				return;
			}
			set(targetStatusToApply, "success");
			executeStatusUpdate(get(onlineReferenceIdVal).trim());
		});
		append($$anchor, div_25);
	};
	if_block(node_21, ($$render) => {
		if (get(showReferenceIdModal)) $$render(consequent_14);
	});
	reset(div);
	template_effect(() => set_text(text$1, get(receiptDetail)?.documentNumber || ""));
	append($$anchor, div);
	pop();
	$$cleanup();
}
delegate(["click"]);
//#endregion
export { _page as component };

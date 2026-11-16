import { B as append, Ct as setup_stores, D as head, H as from_html, I as if_block, K as delegate, Lt as next, Mt as push, N as each, P as index, Q as get, R as set_text, Rt as reset, _ as set_attribute, b as bind_select_value, dt as child, ft as first_child, gt as set, jt as pop, mt as proxy, n as onDestroy, ot as template_effect, pt as sibling, q as delegated, r as onMount, rt as deferred_template_effect, st as user_effect, ut as $document, vt as state, w as set_class, wt as store_get, xt as user_derived } from "../chunks/BdGPDeRo.js";
import { t as goto } from "../chunks/0fDqXGHI.js";
import "../chunks/DhaYE-8x.js";
import { s as getSalesPortalFileUrl, t as apiFetch } from "../chunks/TzsbL4hl.js";
import { r as toast } from "../chunks/BZc__OC9.js";
import { t as Arrow_left } from "../chunks/Cbjzxiq1.js";
import { t as File_text } from "../chunks/CLERR3SN.js";
import { t as Refresh_cw } from "../chunks/DFp1vOqU2.js";
import { t as page } from "../chunks/CI7AM1T32.js";
import { t as Button } from "../chunks/zyE_82FR2.js";
import "../chunks/PE3EAxBV2.js";
import { t as MoneyDisplay } from "../chunks/BjJP4BTf2.js";
import { t as ConfirmationDialog } from "../chunks/D8xz02uw2.js";
import { t as DateDisplay } from "../chunks/Dr7G9lQx2.js";
import "../chunks/B0UXrdYn.js";
import { r as getAccounts } from "../chunks/BAuPJLcX.js";
import { t as ReceiptRealtimeController } from "../chunks/Dww_lDgW.js";
//#region src/routes/(app)/sales/receipts/[id]/+page.svelte
var root = from_html(`<!> Back to Workspace`, 1);
var root_1 = from_html(`<p class="text-xs text-muted-foreground mt-0.5 font-mono"> </p>`);
var root_2 = from_html(`<!> Reload`, 1);
var root_3 = from_html(`<div class="bg-card border border-border rounded-2xl p-16 flex items-center justify-center animate-pulse"><!></div>`);
var root_4 = from_html(`<div class="bg-card border border-border rounded-2xl p-16 text-center text-red-600 text-sm"> </div>`);
var root_5 = from_html(`<div class="space-y-1"><span class="text-muted-foreground block">Target Bank</span> <span class="font-semibold text-primary text-sm block"> </span></div>`);
var root_6 = from_html(`<span class="truncate max-w-[200px] sm:max-w-[400px]"> </span> <div class="ml-auto flex gap-2"><a target="_blank" rel="noopener noreferrer" class="px-2.5 py-1 text-[11px] font-bold rounded-lg border border-border bg-card hover:bg-muted text-foreground transition-all cursor-pointer inline-flex items-center">View</a> <a download="" class="px-2.5 py-1 text-[11px] font-bold rounded-lg border border-border bg-card hover:bg-muted text-foreground transition-all cursor-pointer inline-flex items-center">Download</a></div>`, 1);
var root_7 = from_html(`<span>No Proof Attached</span>`);
var root_8 = from_html(`<option> </option>`);
var root_9 = from_html(`<div class="flex flex-col gap-1.5 pt-4 border-t border-border/40 text-xs"><label for="cashAccountId" class="font-semibold text-muted-foreground">Destination Cash Account</label> <select id="cashAccountId" class="h-9.5 w-full bg-background border border-border rounded-xl px-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground disabled:opacity-50"><option>-- Select Cash Account --</option><!></select></div>`);
var root_10 = from_html(`<div class="flex gap-3 pt-4 border-t border-border/40 justify-end"><button class="px-4 py-2 text-xs font-bold rounded-xl cursor-pointer bg-emerald-600 hover:bg-emerald-700 text-white flex items-center gap-1.5 transition-all shadow-sm disabled:opacity-50"><!> Approve Payment</button> <button class="px-4 py-2 text-xs font-bold rounded-xl cursor-pointer bg-red-600 hover:bg-red-700 text-white flex items-center gap-1.5 transition-all shadow-sm"><!> Reject Payment</button></div>`);
var root_11 = from_html(`<div class="max-w-3xl mx-auto"><div class="bg-card border border-border rounded-2xl p-6 space-y-6 shadow-xs font-sans"><div class="flex justify-between border-b border-border/40 pb-4"><div class="flex items-center gap-3"><div class="p-2.5 bg-primary/10 text-primary rounded-xl"><!></div> <div><h3 class="text-sm font-bold text-foreground">Receipt Summary</h3> <p class="text-[10px] text-muted-foreground mt-0.5 uppercase tracking-wider font-semibold"> </p></div></div> <span> </span></div> <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs leading-relaxed"><div class="space-y-1"><span class="text-muted-foreground block">Payer Head Account</span> <strong class="text-foreground text-sm block"> </strong> <span class="text-[10px] text-muted-foreground/80 bg-muted px-2 py-0.5 rounded capitalize"> </span></div> <div class="space-y-1"><span class="text-muted-foreground block">Payment Mode / Method</span> <span class="capitalize text-sm font-semibold text-foreground block"> </span></div> <div class="space-y-1"><span class="text-muted-foreground block">Total Receipt Amount</span> <strong class="text-foreground font-mono text-base block"><!></strong></div> <div class="space-y-1"><span class="text-muted-foreground block">Logged At</span> <span class="block font-mono text-muted-foreground text-sm"><!></span></div> <!> <div class="sm:col-span-2 space-y-1"><span class="text-muted-foreground block">Payment Proof / Reference</span> <div class="flex items-center gap-3 font-mono text-muted-foreground bg-muted/30 p-2.5 rounded-xl border border-border/40 break-all"><!></div></div></div> <!> <!></div></div>`);
var root_12 = from_html(`<div class="space-y-6"><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 print:hidden"><div class="flex items-center gap-3"><!> <div><h1 class="text-xl font-bold text-foreground">Receipt <span class="font-mono text-primary"> </span></h1> <!></div></div> <!></div> <!> <!></div>`);
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
	function getSegment(type) {
		const clean = (type ?? "").toLowerCase().replace(/_/g, "").trim();
		if (clean.includes("flight")) return "flights";
		if (clean.includes("hotel")) return "hotels";
		if (clean.includes("visa")) return "visa";
		if (clean.includes("vfs")) return "vfs";
		if (clean.includes("holiday") || clean.includes("package")) return "holiday-packages";
		if (clean.includes("transport")) return "transportation";
		if (clean.includes("other")) return "other-services";
		return type;
	}
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
	function requestStatusChange(newStatus) {
		if (get(actionLoading) || !get(receiptDetail)) return;
		const isCash = get(receiptDetail).paymentMode?.toLowerCase() === "cash";
		if (newStatus === "success" && isCash && !get(selectedCashAccountIdVal)) {
			toast.warning("Please select a destination cash account before approving.");
			return;
		}
		set(targetStatusToApply, newStatus, true);
		if (newStatus === "success") {
			set(confirmTitle, "Approve Payment Receipt");
			set(confirmMessage, `Are you sure you want to approve Receipt #${get(receiptId)}? This will confirm the collection and apply financial postings.`);
			set(confirmActionLabel, "Approve Payment");
			set(confirmIsDestructive, false);
		} else {
			set(confirmTitle, "Reject Payment Receipt");
			set(confirmMessage, `Are you sure you want to reject Receipt #${get(receiptId)}? This will mark the payment receipt status as Failed.`);
			set(confirmActionLabel, "Reject Payment");
			set(confirmIsDestructive, true);
		}
		set(showConfirmModal, true);
	}
	async function executeStatusUpdate() {
		if (!get(receiptDetail) || !get(targetStatusToApply)) return;
		set(actionLoading, true);
		try {
			const cashAccountId = get(selectedCashAccountIdVal) ? parseInt(get(selectedCashAccountIdVal)) : null;
			const isWalletDeposit = get(receiptDetail).service?.toLowerCase() === "wallet_deposit";
			const hasNoBooking = !get(receiptDetail).bookingId;
			let endpoint;
			if (isWalletDeposit || hasNoBooking) endpoint = `api/sales-entries/receipts/${get(receiptId)}/payment-status`;
			else endpoint = `api/sales-entries/${getSegment(get(receiptDetail).service)}/${get(receiptDetail).bookingId}/payment-status`;
			await apiFetch(endpoint, {
				method: "POST",
				body: JSON.stringify({
					status: get(targetStatusToApply),
					cashAccountId
				})
			});
			toast.success(get(targetStatusToApply) === "success" ? "Payment receipt approved successfully." : "Payment receipt rejected.");
			await fetchReceiptDetails();
		} catch (err) {
			toast.error(err?.message ?? "Failed to update payment status.");
			throw err;
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
	var div = root_12();
	head("d2w9u0", ($$anchor) => {
		deferred_template_effect(() => {
			$document.title = `Receipt #${get(receiptId) ?? ""} — Accounts Portal`;
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
	var text = child(span);
	reset(span);
	reset(h1);
	var node_2 = sibling(h1, 2);
	var consequent = ($$anchor) => {
		var p = root_1();
		var text_1 = child(p);
		reset(p);
		template_effect(() => set_text(text_1, `Receipt Ref: ${get(receiptDetail).receiptId ?? ""}`));
		append($$anchor, p);
	};
	if_block(node_2, ($$render) => {
		if (get(receiptDetail)) $$render(consequent);
	});
	reset(div_3);
	reset(div_2);
	Button(sibling(div_2, 2), {
		variant: "outline",
		class: "h-8.5 rounded-xl cursor-pointer flex items-center gap-1.5 text-xs",
		onclick: fetchReceiptDetails,
		get disabled() {
			return get(loading);
		},
		children: ($$anchor, $$slotProps) => {
			var fragment_1 = root_2();
			var node_4 = first_child(fragment_1);
			{
				let $0 = user_derived(() => ["h-3.5 w-3.5", get(loading) ? "animate-spin" : ""].join(" "));
				Refresh_cw(node_4, { get class() {
					return get($0);
				} });
			}
			next();
			append($$anchor, fragment_1);
		},
		$$slots: { default: true }
	});
	reset(div_1);
	var node_5 = sibling(div_1, 2);
	var consequent_1 = ($$anchor) => {
		var div_4 = root_3();
		Refresh_cw(child(div_4), { class: "h-8 w-8 text-primary animate-spin" });
		reset(div_4);
		append($$anchor, div_4);
	};
	var consequent_2 = ($$anchor) => {
		var div_5 = root_4();
		var text_2 = child(div_5, true);
		reset(div_5);
		template_effect(() => set_text(text_2, get(error)));
		append($$anchor, div_5);
	};
	var consequent_9 = ($$anchor) => {
		var div_6 = root_11();
		var div_7 = child(div_6);
		var div_8 = child(div_7);
		var div_9 = child(div_8);
		var div_10 = child(div_9);
		File_text(child(div_10), { class: "h-6 w-6" });
		reset(div_10);
		var div_11 = sibling(div_10, 2);
		var p_1 = sibling(child(div_11), 2);
		var text_3 = child(p_1);
		reset(p_1);
		reset(div_11);
		reset(div_9);
		var span_1 = sibling(div_9, 2);
		var text_4 = child(span_1, true);
		reset(span_1);
		reset(div_8);
		var div_12 = sibling(div_8, 2);
		var div_13 = child(div_12);
		var strong = sibling(child(div_13), 2);
		var text_5 = child(strong, true);
		reset(strong);
		var span_2 = sibling(strong, 2);
		var text_6 = child(span_2, true);
		reset(span_2);
		reset(div_13);
		var div_14 = sibling(div_13, 2);
		var span_3 = sibling(child(div_14), 2);
		var text_7 = child(span_3, true);
		reset(span_3);
		reset(div_14);
		var div_15 = sibling(div_14, 2);
		var strong_1 = sibling(child(div_15), 2);
		MoneyDisplay(child(strong_1), { get amount() {
			return get(receiptDetail).amount;
		} });
		reset(strong_1);
		reset(div_15);
		var div_16 = sibling(div_15, 2);
		var span_4 = sibling(child(div_16), 2);
		DateDisplay(child(span_4), { get value() {
			return get(receiptDetail).createdAt;
		} });
		reset(span_4);
		reset(div_16);
		var node_10 = sibling(div_16, 2);
		var consequent_3 = ($$anchor) => {
			var div_17 = root_5();
			var span_5 = sibling(child(div_17), 2);
			var text_8 = child(span_5, true);
			reset(span_5);
			reset(div_17);
			template_effect(() => set_text(text_8, get(receiptDetail).bankName));
			append($$anchor, div_17);
		};
		if_block(node_10, ($$render) => {
			if (get(receiptDetail).bankName) $$render(consequent_3);
		});
		var div_18 = sibling(node_10, 2);
		var div_19 = sibling(child(div_18), 2);
		var node_11 = child(div_19);
		var consequent_4 = ($$anchor) => {
			var fragment_2 = root_6();
			var span_6 = first_child(fragment_2);
			var text_9 = child(span_6, true);
			reset(span_6);
			var div_20 = sibling(span_6, 2);
			var a_1 = child(div_20);
			var a_2 = sibling(a_1, 2);
			reset(div_20);
			template_effect(($0, $1, $2) => {
				set_attribute(span_6, "title", get(receiptDetail).paymentProof);
				set_text(text_9, $0);
				set_attribute(a_1, "href", $1);
				set_attribute(a_2, "href", $2);
			}, [
				() => get(receiptDetail).paymentProof.split("/").pop(),
				() => getSalesPortalFileUrl(get(receiptDetail).paymentProof),
				() => getSalesPortalFileUrl(get(receiptDetail).paymentProof)
			]);
			append($$anchor, fragment_2);
		};
		var alternate = ($$anchor) => {
			append($$anchor, root_7());
		};
		if_block(node_11, ($$render) => {
			if (get(receiptDetail).paymentProof) $$render(consequent_4);
			else $$render(alternate, -1);
		});
		reset(div_19);
		reset(div_18);
		reset(div_12);
		var node_12 = sibling(div_12, 2);
		var consequent_5 = ($$anchor) => {
			var div_21 = root_9();
			var select = sibling(child(div_21), 2);
			var option = child(select);
			option.value = option.__value = "";
			each(sibling(option), 17, () => get(cashAccounts), index, ($$anchor, acc) => {
				var option_1 = root_8();
				var text_10 = child(option_1);
				reset(option_1);
				var option_1_value = {};
				template_effect(($0, $1) => {
					set_text(text_10, `${get(acc).name ?? ""} (Bal: ${$0 ?? ""} BHD)`);
					if (option_1_value !== (option_1_value = $1)) option_1.value = (option_1.__value = $1) ?? "";
				}, [() => get(acc).currentBalance.toFixed(3), () => String(get(acc).id)]);
				append($$anchor, option_1);
			});
			reset(select);
			reset(div_21);
			template_effect(() => select.disabled = get(actionLoading));
			bind_select_value(select, () => get(selectedCashAccountIdVal), ($$value) => set(selectedCashAccountIdVal, $$value));
			append($$anchor, div_21);
		};
		var d = user_derived(() => get(receiptDetail).status?.toLowerCase() === "pending" && get(receiptDetail).paymentMode?.toLowerCase() === "cash");
		if_block(node_12, ($$render) => {
			if (get(d)) $$render(consequent_5);
		});
		var node_14 = sibling(node_12, 2);
		var consequent_8 = ($$anchor) => {
			var div_22 = root_10();
			var button = child(div_22);
			var node_15 = child(button);
			var consequent_6 = ($$anchor) => {
				Refresh_cw($$anchor, { class: "h-3.5 w-3.5 animate-spin" });
			};
			if_block(node_15, ($$render) => {
				if (get(actionLoading)) $$render(consequent_6);
			});
			next();
			reset(button);
			var button_1 = sibling(button, 2);
			var node_16 = child(button_1);
			var consequent_7 = ($$anchor) => {
				Refresh_cw($$anchor, { class: "h-3.5 w-3.5 animate-spin" });
			};
			if_block(node_16, ($$render) => {
				if (get(actionLoading)) $$render(consequent_7);
			});
			next();
			reset(button_1);
			reset(div_22);
			template_effect(($0) => {
				button.disabled = $0;
				button_1.disabled = get(actionLoading);
			}, [() => get(actionLoading) || get(receiptDetail).paymentMode?.toLowerCase() === "cash" && !get(selectedCashAccountIdVal)]);
			delegated("click", button, () => requestStatusChange("success"));
			delegated("click", button_1, () => requestStatusChange("failed"));
			append($$anchor, div_22);
		};
		var d_1 = user_derived(() => get(receiptDetail).status?.toLowerCase() === "pending");
		if_block(node_14, ($$render) => {
			if (get(d_1)) $$render(consequent_8);
		});
		reset(div_7);
		reset(div_6);
		template_effect(($0) => {
			set_text(text_3, `${get(receiptDetail).service ?? ""} Booking Payment`);
			set_class(span_1, 1, `inline-flex items-center px-3 py-1 rounded-full text-xs font-bold capitalize h-fit border ${$0 ?? ""}`);
			set_text(text_4, get(receiptDetail).status);
			set_text(text_5, get(receiptDetail).headName || "—");
			set_text(text_6, get(receiptDetail).clientType);
			set_text(text_7, get(receiptDetail).paymentMode);
		}, [() => statusClass(get(receiptDetail).status)]);
		append($$anchor, div_6);
	};
	if_block(node_5, ($$render) => {
		if (get(loading) && !get(receiptDetail)) $$render(consequent_1);
		else if (get(error)) $$render(consequent_2, 1);
		else if (get(receiptDetail)) $$render(consequent_9, 2);
	});
	ConfirmationDialog(sibling(node_5, 2), {
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
	reset(div);
	template_effect(() => set_text(text, `#${get(receiptId) ?? ""}`));
	append($$anchor, div);
	pop();
	$$cleanup();
}
delegate(["click"]);
//#endregion
export { _page as component };

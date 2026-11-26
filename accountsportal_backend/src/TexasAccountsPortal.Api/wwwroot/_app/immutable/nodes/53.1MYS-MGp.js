import { B as append, Bt as reset, Ct as user_derived, D as head, Et as store_get, H as from_html, I as if_block, N as each, Nt as pop, Pt as push, Q as get, R as set_text, T as clsx, Tt as setup_stores, bt as state, dt as $document, ht as sibling, mt as first_child, ot as template_effect, pt as child, rt as deferred_template_effect, st as user_effect, vt as set, w as set_class, zt as next } from "../chunks/dXkmWTgM.js";
import { t as goto } from "../chunks/CwRgeZmC.js";
import "../chunks/DhaYE-8x.js";
import { r as toast } from "../chunks/CbPRQHfn.js";
import { t as Arrow_left } from "../chunks/Bn7x0kyr.js";
import { t as Circle_check } from "../chunks/qB0lJ_dM2.js";
import { t as Circle_x } from "../chunks/D_QjCLHZ2.js";
import { t as Download } from "../chunks/D8w6XH0S2.js";
import { t as File_text } from "../chunks/NLRKrZbo2.js";
import { t as Layers } from "../chunks/CFg-aOba.js";
import { t as Mail } from "../chunks/DhZuqLVV.js";
import { t as Phone } from "../chunks/BGwWtEfw.js";
import { t as Printer } from "../chunks/Ds2DlsUi.js";
import { t as Refresh_cw } from "../chunks/DpTJy0Wb.js";
import { t as page } from "../chunks/wTT7_FAj2.js";
import { t as Button } from "../chunks/BhXsq3bC2.js";
import "../chunks/ClNU7XG-2.js";
import { t as ConfirmationDialog } from "../chunks/17VEohB22.js";
import { t as MoneyDisplay } from "../chunks/CIVSRuaR2.js";
import { t as DateDisplay } from "../chunks/CCHT88li2.js";
import "../chunks/i0JnNAgk2.js";
import { t as previewDocument } from "../chunks/Ccpbu0Vu2.js";
import { i as updateQuotationStatus, n as getQuotationById, t as downloadQuotationPdf } from "../chunks/BQPHsrHp.js";
//#region src/routes/(app)/sales/quotations/[id]/+page.svelte
var root = from_html(`<!> Back to Quotations`, 1);
var root_1 = from_html(`<p class="text-xs text-muted-foreground mt-0.5 font-mono"> </p>`);
var root_2 = from_html(`<!> Print Invoice`, 1);
var root_3 = from_html(`<!> Download PDF`, 1);
var root_4 = from_html(`<!> <!>`, 1);
var root_5 = from_html(`<!> Reload`, 1);
var root_6 = from_html(`<div class="bg-card border border-border rounded-2xl p-16 flex items-center justify-center animate-pulse"><!></div>`);
var root_7 = from_html(`<div class="bg-card border border-border rounded-2xl p-16 text-center text-red-600 text-sm"> </div>`);
var root_8 = from_html(`<span class="text-[10px] text-muted-foreground font-mono"> </span>`);
var root_9 = from_html(`<span class="text-muted-foreground block mt-1 flex items-center gap-1 font-mono"><!> </span>`);
var root_10 = from_html(`<span class="text-muted-foreground block flex items-center gap-1"><!> </span>`);
var root_11 = from_html(`<div class="sm:col-span-2 space-y-1"><span class="text-muted-foreground block">Remarks & Terms</span> <p class="text-foreground text-xs leading-relaxed bg-muted/20 p-3 rounded-xl border border-border/40 font-medium whitespace-pre-wrap"> </p></div>`);
var root_12 = from_html(`<tr class="hover:bg-muted/10 transition-colors"><td class="p-3.5"><span> </span></td><td class="p-3.5 text-foreground font-medium"> </td><td class="p-3.5 text-center text-muted-foreground font-mono font-semibold"> </td><td class="p-3.5 text-right text-muted-foreground font-mono"><!></td><td class="p-3.5 text-right font-bold text-foreground font-mono"><!></td></tr>`);
var root_13 = from_html(`<!> Approve Quotation`, 1);
var root_14 = from_html(`<!> Reject Quotation`, 1);
var root_15 = from_html(`<div class="bg-card border border-border rounded-2xl p-5 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4"><div><h4 class="text-sm font-bold text-foreground">Quotation Workflow Actions</h4> <p class="text-xs text-muted-foreground">Update quotation approval state in the Sales Portal.</p></div> <div class="flex items-center gap-2"><!> <!></div></div>`);
var root_16 = from_html(`<div class="max-w-4xl mx-auto space-y-6"><div class="bg-card border border-border rounded-2xl p-6 space-y-6 shadow-xs font-sans"><div class="flex justify-between border-b border-border/40 pb-4"><div class="flex items-center gap-3"><div class="p-2.5 bg-primary/10 text-primary rounded-xl"><!></div> <div><h3 class="text-sm font-bold text-foreground">Quotation Summary</h3> <p class="text-[10px] text-muted-foreground mt-0.5 uppercase tracking-wider font-semibold"> </p></div></div> <span> </span></div> <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs leading-relaxed"><div class="space-y-1"><span class="text-muted-foreground block">Client / Customer Name</span> <strong class="text-foreground text-sm block"> </strong> <div class="flex flex-wrap items-center gap-2 mt-1"><span class="text-[10px] text-muted-foreground/80 bg-muted px-2 py-0.5 rounded capitalize font-semibold"> </span> <!></div> <!> <!></div> <div class="space-y-1"><span class="text-muted-foreground block">Sales Representative</span> <span class="text-sm font-bold text-foreground block"> </span> <span class="text-muted-foreground block text-[11px]"> </span></div> <div class="space-y-1"><span class="text-muted-foreground block">Total Quoted Amount</span> <strong class="text-foreground font-mono text-base block text-primary"><!></strong></div> <div class="space-y-1"><span class="text-muted-foreground block">Logged At</span> <span class="block font-mono text-muted-foreground text-sm"><!></span></div> <!></div></div> <div class="bg-card border border-border rounded-2xl overflow-hidden shadow-xs"><div class="p-5 border-b border-border/80 bg-muted/20 flex items-center justify-between"><div class="flex items-center gap-2"><!> <h3 class="text-sm font-bold text-foreground">Quoted Services & Itemization</h3></div> <span class="text-xs text-muted-foreground font-semibold"> </span></div> <div class="overflow-x-auto"><table class="w-full text-left border-collapse text-xs"><thead><tr class="bg-muted/40 border-b border-border/80 text-muted-foreground font-semibold"><th class="p-3.5 w-40">Service Type</th><th class="p-3.5">Description</th><th class="p-3.5 w-20 text-center">Quantity</th><th class="p-3.5 w-32 text-right">Unit Price</th><th class="p-3.5 w-36 text-right">Total Amount</th></tr></thead><tbody class="divide-y divide-border/60"></tbody><tfoot><tr class="bg-muted/30 border-t border-border/80 font-bold"><td colspan="4" class="p-4 text-right uppercase tracking-wider text-muted-foreground text-xs">Grand Total</td><td class="p-4 text-right text-base text-primary font-mono"><!></td></tr></tfoot></table></div></div> <!></div>`);
var root_17 = from_html(`<div class="space-y-6 print:space-y-2"><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 print:hidden"><div class="flex items-center gap-3"><!> <div><h1 class="text-xl font-bold text-foreground flex items-center gap-2">Quotation <span class="font-mono text-primary"> </span></h1> <!></div></div> <div class="flex items-center gap-2"><!> <!></div></div> <!></div> <!>`, 1);
function _page($$anchor, $$props) {
	push($$props, true);
	const $page = () => store_get(page, "$page", $$stores);
	const [$$stores, $$cleanup] = setup_stores();
	const quotationId = user_derived(() => $page().params.id ?? "");
	let loading = state(false);
	let actionLoading = state(false);
	let quotationDetail = state(null);
	let error = state(null);
	let showConfirmModal = state(false);
	let confirmTitle = state("");
	let confirmMessage = state("");
	let confirmActionLabel = state("");
	let confirmIsDestructive = state(false);
	let targetStatusToApply = state("");
	async function fetchQuotationDetails() {
		if (!get(quotationId)) {
			set(error, "Invalid quotation identifier.");
			return;
		}
		set(loading, true);
		set(error, null);
		try {
			set(quotationDetail, await getQuotationById(get(quotationId)), true);
		} catch (err) {
			set(error, err?.message || "Failed to load quotation details.", true);
			console.error("Failed to load quotation details:", err);
		} finally {
			set(loading, false);
		}
	}
	function requestStatusChange(newStatus) {
		if (get(actionLoading) || !get(quotationDetail)) return;
		set(targetStatusToApply, newStatus, true);
		if (newStatus === "approved") {
			set(confirmTitle, "Approve Sales Quotation");
			set(confirmMessage, `Are you sure you want to approve quotation ${get(quotationDetail).documentNumber}? This will mark it as approved in the Sales Portal.`);
			set(confirmActionLabel, "Approve Quotation");
			set(confirmIsDestructive, false);
		} else if (newStatus === "rejected") {
			set(confirmTitle, "Reject Sales Quotation");
			set(confirmMessage, `Are you sure you want to reject quotation ${get(quotationDetail).documentNumber}?`);
			set(confirmActionLabel, "Reject Quotation");
			set(confirmIsDestructive, true);
		}
		set(showConfirmModal, true);
	}
	async function executeStatusChange() {
		if (!get(quotationDetail) || !get(targetStatusToApply)) return;
		set(actionLoading, true);
		try {
			await updateQuotationStatus(get(quotationDetail).id, get(targetStatusToApply));
			toast.success(`Quotation ${get(targetStatusToApply)} successfully.`);
			await fetchQuotationDetails();
		} catch (err) {
			toast.error(err?.message || "Failed to update quotation status.");
		} finally {
			set(actionLoading, false);
			set(showConfirmModal, false);
		}
	}
	async function handleDownloadPdf() {
		if (!get(quotationDetail)) return;
		try {
			await downloadQuotationPdf(get(quotationDetail).id, get(quotationDetail).documentNumber);
			toast.success("Quotation PDF downloaded.");
		} catch (err) {
			toast.error("Failed to download PDF.");
		}
	}
	function statusClass(status) {
		const s = (status ?? "").toLowerCase().trim();
		if (s === "approved" || s === "success") return "bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800";
		if (s === "pending" || s === "processing" || !s) return "bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800";
		if (s === "rejected" || s === "cancelled") return "bg-red-50 text-red-700 border border-red-200 dark:bg-red-950/40 dark:text-red-300 dark:border-red-800";
		return "bg-muted text-muted-foreground border border-border";
	}
	function getServiceBadgeColor(svc) {
		const s = (svc || "").toLowerCase();
		if (s.includes("flight")) return "bg-blue-500/10 text-blue-600 border-blue-500/20";
		if (s.includes("hotel")) return "bg-amber-500/10 text-amber-600 border-amber-500/20";
		if (s.includes("visa")) return "bg-emerald-500/10 text-emerald-600 border-emerald-500/20";
		if (s.includes("vfs")) return "bg-purple-500/10 text-purple-600 border-purple-500/20";
		if (s.includes("holiday")) return "bg-pink-500/10 text-pink-600 border-pink-500/20";
		if (s.includes("transport")) return "bg-indigo-500/10 text-indigo-600 border-indigo-500/20";
		return "bg-slate-500/10 text-slate-600 border-slate-500/20";
	}
	user_effect(() => {
		if (get(quotationId)) fetchQuotationDetails();
	});
	var fragment = root_17();
	head("ijpb26", ($$anchor) => {
		deferred_template_effect(() => {
			$document.title = `Quotation ${(get(quotationDetail)?.documentNumber || "") ?? ""} — Accounts Portal`;
		});
	});
	var div = first_child(fragment);
	var div_1 = child(div);
	var div_2 = child(div_1);
	var node = child(div_2);
	Button(node, {
		variant: "outline",
		class: "h-8.5 rounded-xl cursor-pointer flex items-center gap-1.5 text-xs",
		onclick: () => goto("/sales/quotations"),
		children: ($$anchor, $$slotProps) => {
			var fragment_1 = root();
			Arrow_left(first_child(fragment_1), { class: "h-3.5 w-3.5" });
			next();
			append($$anchor, fragment_1);
		},
		$$slots: { default: true }
	});
	var div_3 = sibling(node, 2);
	var h1 = child(div_3);
	var span = sibling(child(h1));
	var text = child(span, true);
	reset(span);
	reset(h1);
	var node_2 = sibling(h1, 2);
	var consequent = ($$anchor) => {
		var p = root_1();
		var text_1 = child(p);
		reset(p);
		template_effect(() => set_text(text_1, `Quotation Ref: ${get(quotationDetail).documentNumber ?? ""}`));
		append($$anchor, p);
	};
	if_block(node_2, ($$render) => {
		if (get(quotationDetail)) $$render(consequent);
	});
	reset(div_3);
	reset(div_2);
	var div_4 = sibling(div_2, 2);
	var node_3 = child(div_4);
	var consequent_1 = ($$anchor) => {
		var fragment_2 = root_4();
		var node_4 = first_child(fragment_2);
		Button(node_4, {
			variant: "default",
			class: "h-8.5 rounded-xl cursor-pointer flex items-center gap-1.5 text-xs bg-primary text-primary-foreground",
			onclick: () => previewDocument("report", "quotation", get(quotationDetail)?.id),
			children: ($$anchor, $$slotProps) => {
				var fragment_3 = root_2();
				Printer(first_child(fragment_3), { class: "h-3.5 w-3.5" });
				next();
				append($$anchor, fragment_3);
			},
			$$slots: { default: true }
		});
		Button(sibling(node_4, 2), {
			variant: "outline",
			class: "h-8.5 rounded-xl cursor-pointer flex items-center gap-1.5 text-xs",
			onclick: handleDownloadPdf,
			children: ($$anchor, $$slotProps) => {
				var fragment_4 = root_3();
				Download(first_child(fragment_4), { class: "h-3.5 w-3.5" });
				next();
				append($$anchor, fragment_4);
			},
			$$slots: { default: true }
		});
		append($$anchor, fragment_2);
	};
	if_block(node_3, ($$render) => {
		if (get(quotationDetail)) $$render(consequent_1);
	});
	Button(sibling(node_3, 2), {
		variant: "outline",
		class: "h-8.5 rounded-xl cursor-pointer flex items-center gap-1.5 text-xs",
		onclick: fetchQuotationDetails,
		get disabled() {
			return get(loading);
		},
		children: ($$anchor, $$slotProps) => {
			var fragment_5 = root_5();
			var node_9 = first_child(fragment_5);
			{
				let $0 = user_derived(() => ["h-3.5 w-3.5", get(loading) ? "animate-spin" : ""].join(" "));
				Refresh_cw(node_9, { get class() {
					return get($0);
				} });
			}
			next();
			append($$anchor, fragment_5);
		},
		$$slots: { default: true }
	});
	reset(div_4);
	reset(div_1);
	var node_10 = sibling(div_1, 2);
	var consequent_2 = ($$anchor) => {
		var div_5 = root_6();
		Refresh_cw(child(div_5), { class: "h-8 w-8 text-primary animate-spin" });
		reset(div_5);
		append($$anchor, div_5);
	};
	var consequent_3 = ($$anchor) => {
		var div_6 = root_7();
		var text_2 = child(div_6, true);
		reset(div_6);
		template_effect(() => set_text(text_2, get(error)));
		append($$anchor, div_6);
	};
	var consequent_9 = ($$anchor) => {
		var div_7 = root_16();
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
		var div_15 = sibling(strong, 2);
		var span_2 = child(div_15);
		var text_6 = child(span_2, true);
		reset(span_2);
		var node_13 = sibling(span_2, 2);
		var consequent_4 = ($$anchor) => {
			var span_3 = root_8();
			var text_7 = child(span_3);
			reset(span_3);
			template_effect(() => set_text(text_7, `Head ID: #${get(quotationDetail).headId ?? ""}`));
			append($$anchor, span_3);
		};
		if_block(node_13, ($$render) => {
			if (get(quotationDetail).headId) $$render(consequent_4);
		});
		reset(div_15);
		var node_14 = sibling(div_15, 2);
		var consequent_5 = ($$anchor) => {
			var span_4 = root_9();
			var node_15 = child(span_4);
			Phone(node_15, { class: "h-3 w-3 text-muted-foreground/70" });
			var text_8 = sibling(node_15);
			reset(span_4);
			template_effect(() => set_text(text_8, ` ${get(quotationDetail).customerContact ?? ""}`));
			append($$anchor, span_4);
		};
		if_block(node_14, ($$render) => {
			if (get(quotationDetail).customerContact) $$render(consequent_5);
		});
		var node_16 = sibling(node_14, 2);
		var consequent_6 = ($$anchor) => {
			var span_5 = root_10();
			var node_17 = child(span_5);
			Mail(node_17, { class: "h-3 w-3 text-muted-foreground/70" });
			var text_9 = sibling(node_17);
			reset(span_5);
			template_effect(() => set_text(text_9, ` ${get(quotationDetail).customerEmail ?? ""}`));
			append($$anchor, span_5);
		};
		if_block(node_16, ($$render) => {
			if (get(quotationDetail).customerEmail) $$render(consequent_6);
		});
		reset(div_14);
		var div_16 = sibling(div_14, 2);
		var span_6 = sibling(child(div_16), 2);
		var text_10 = child(span_6, true);
		reset(span_6);
		var span_7 = sibling(span_6, 2);
		var text_11 = child(span_7);
		reset(span_7);
		reset(div_16);
		var div_17 = sibling(div_16, 2);
		var strong_1 = sibling(child(div_17), 2);
		MoneyDisplay(child(strong_1), { get amount() {
			return get(quotationDetail).totalAmount;
		} });
		reset(strong_1);
		reset(div_17);
		var div_18 = sibling(div_17, 2);
		var span_8 = sibling(child(div_18), 2);
		DateDisplay(child(span_8), { get value() {
			return get(quotationDetail).createdAt;
		} });
		reset(span_8);
		reset(div_18);
		var node_20 = sibling(div_18, 2);
		var consequent_7 = ($$anchor) => {
			var div_19 = root_11();
			var p_2 = sibling(child(div_19), 2);
			var text_12 = child(p_2, true);
			reset(p_2);
			reset(div_19);
			template_effect(() => set_text(text_12, get(quotationDetail).remarks));
			append($$anchor, div_19);
		};
		if_block(node_20, ($$render) => {
			if (get(quotationDetail).remarks) $$render(consequent_7);
		});
		reset(div_13);
		reset(div_8);
		var div_20 = sibling(div_8, 2);
		var div_21 = child(div_20);
		var div_22 = child(div_21);
		Layers(child(div_22), { class: "h-4 w-4 text-primary" });
		next(2);
		reset(div_22);
		var span_9 = sibling(div_22, 2);
		var text_13 = child(span_9);
		reset(span_9);
		reset(div_21);
		var div_23 = sibling(div_21, 2);
		var table = child(div_23);
		var tbody = sibling(child(table));
		each(tbody, 21, () => get(quotationDetail).items || [], (item) => item.id || item.description, ($$anchor, item) => {
			var tr = root_12();
			var td = child(tr);
			var span_10 = child(td);
			var text_14 = child(span_10, true);
			reset(span_10);
			reset(td);
			var td_1 = sibling(td);
			var text_15 = child(td_1, true);
			reset(td_1);
			var td_2 = sibling(td_1);
			var text_16 = child(td_2, true);
			reset(td_2);
			var td_3 = sibling(td_2);
			MoneyDisplay(child(td_3), { get amount() {
				return get(item).unitPrice;
			} });
			reset(td_3);
			var td_4 = sibling(td_3);
			MoneyDisplay(child(td_4), { get amount() {
				return get(item).totalAmount;
			} });
			reset(td_4);
			reset(tr);
			template_effect(($0) => {
				set_class(span_10, 1, $0);
				set_text(text_14, get(item).serviceType);
				set_text(text_15, get(item).description);
				set_text(text_16, get(item).quantity);
			}, [() => `inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold border ${getServiceBadgeColor(get(item).serviceType)}`]);
			append($$anchor, tr);
		});
		reset(tbody);
		var tfoot = sibling(tbody);
		var tr_1 = child(tfoot);
		var td_5 = sibling(child(tr_1));
		MoneyDisplay(child(td_5), { get amount() {
			return get(quotationDetail).totalAmount;
		} });
		reset(td_5);
		reset(tr_1);
		reset(tfoot);
		reset(table);
		reset(div_23);
		reset(div_20);
		var node_25 = sibling(div_20, 2);
		var consequent_8 = ($$anchor) => {
			var div_24 = root_15();
			var div_25 = sibling(child(div_24), 2);
			var node_26 = child(div_25);
			Button(node_26, {
				variant: "outline",
				class: "rounded-xl text-xs py-5 px-4 cursor-pointer font-semibold border-emerald-500/40 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/40",
				get disabled() {
					return get(actionLoading);
				},
				onclick: () => requestStatusChange("approved"),
				children: ($$anchor, $$slotProps) => {
					var fragment_6 = root_13();
					Circle_check(first_child(fragment_6), { class: "h-3.5 w-3.5 mr-1.5" });
					next();
					append($$anchor, fragment_6);
				},
				$$slots: { default: true }
			});
			Button(sibling(node_26, 2), {
				variant: "outline",
				class: "rounded-xl text-xs py-5 px-4 cursor-pointer font-semibold border-red-500/40 text-red-600 hover:bg-red-50 dark:hover:bg-red-950/40",
				get disabled() {
					return get(actionLoading);
				},
				onclick: () => requestStatusChange("rejected"),
				children: ($$anchor, $$slotProps) => {
					var fragment_7 = root_14();
					Circle_x(first_child(fragment_7), { class: "h-3.5 w-3.5 mr-1.5" });
					next();
					append($$anchor, fragment_7);
				},
				$$slots: { default: true }
			});
			reset(div_25);
			reset(div_24);
			append($$anchor, div_24);
		};
		if_block(node_25, ($$render) => {
			if (get(quotationDetail).status === "pending" || !get(quotationDetail).status) $$render(consequent_8);
		});
		reset(div_7);
		template_effect(($0) => {
			set_text(text_3, `${get(quotationDetail).clientType ?? ""} Quotation`);
			set_class(span_1, 1, $0);
			set_text(text_4, get(quotationDetail).status || "pending");
			set_text(text_5, get(quotationDetail).customerName || "—");
			set_text(text_6, get(quotationDetail).clientType);
			set_text(text_10, get(quotationDetail).salesmanName || "—");
			set_text(text_11, `User ID: #${get(quotationDetail).userId ?? ""}`);
			set_text(text_13, `${(get(quotationDetail).items?.length || 0) ?? ""} service line items`);
		}, [() => clsx(["inline-flex items-center px-3 py-1 rounded-full text-xs font-bold capitalize h-fit border", statusClass(get(quotationDetail).status)].join(" "))]);
		append($$anchor, div_7);
	};
	if_block(node_10, ($$render) => {
		if (get(loading) && !get(quotationDetail)) $$render(consequent_2);
		else if (get(error)) $$render(consequent_3, 1);
		else if (get(quotationDetail)) $$render(consequent_9, 2);
	});
	reset(div);
	ConfirmationDialog(sibling(div, 2), {
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
		onConfirm: executeStatusChange,
		get open() {
			return get(showConfirmModal);
		},
		set open($$value) {
			set(showConfirmModal, $$value, true);
		}
	});
	template_effect(() => set_text(text, get(quotationDetail)?.documentNumber || ""));
	append($$anchor, fragment);
	pop();
	$$cleanup();
}
//#endregion
export { _page as component };

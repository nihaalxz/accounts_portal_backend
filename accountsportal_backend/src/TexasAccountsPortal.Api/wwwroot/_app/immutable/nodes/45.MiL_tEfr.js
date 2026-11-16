import { B as append, Bt as reset, Ct as user_derived, D as head, G as text, H as from_html, I as if_block, K as delegate, N as each, Nt as pop, P as index, Pt as push, Q as get, R as set_text, V as comment, _ as set_attribute, b as bind_select_value, bt as state, dt as $document, g as remove_input_defaults, ht as sibling, it as effect, m as bind_value, mt as first_child, ot as template_effect, pt as child, q as delegated, r as onMount, ut as remove_textarea_child, vt as set, w as set_class, xt as update, zt as next } from "../chunks/dXkmWTgM.js";
import "../chunks/DhaYE-8x.js";
import { t as apiFetch } from "../chunks/DrO30csV.js";
import { t as Arrow_right } from "../chunks/DZE4Pk63.js";
import { t as Chevron_left } from "../chunks/bgfi4Y0B2.js";
import { t as Chevron_right } from "../chunks/BQLzQDdY2.js";
import { t as Circle_check } from "../chunks/qB0lJ_dM2.js";
import { t as Circle_x } from "../chunks/D_QjCLHZ2.js";
import { t as Clock } from "../chunks/CZu1L_RP2.js";
import { t as Dollar_sign } from "../chunks/BnaNfP7s2.js";
import { t as Eye } from "../chunks/CTzUc-eH2.js";
import { t as File_text } from "../chunks/NLRKrZbo2.js";
import { t as Refresh_cw } from "../chunks/DpTJy0Wb.js";
import { t as Search } from "../chunks/D7t9qluE.js";
import { t as Shield_alert } from "../chunks/BqY57apW.js";
import { t as Triangle_alert } from "../chunks/BKenZzGW.js";
import { t as X } from "../chunks/wXHc9RNY.js";
import { t as Button } from "../chunks/BhXsq3bC.js";
import { t as MoneyDisplay } from "../chunks/CIVSRuaR2.js";
import { t as DateDisplay } from "../chunks/DEr_pDJT2.js";
//#region src/features/disputes/api.ts
async function getDisputes(query, signal) {
	const params = new URLSearchParams();
	if (query?.page) params.append("page", query.page.toString());
	if (query?.pageSize) params.append("pageSize", query.pageSize.toString());
	if (query?.status) params.append("status", query.status);
	if (query?.search) params.append("search", query.search);
	if (query?.sort) params.append("sort", query.sort);
	const queryString = params.toString();
	return apiFetch(queryString ? `/api/disputes?${queryString}` : "/api/disputes", { signal });
}
async function getDisputesDashboard(signal) {
	return apiFetch("/api/disputes/dashboard", { signal });
}
async function getDisputeById(id, signal) {
	return apiFetch(`/api/disputes/${id}`, { signal });
}
async function submitDisputeDecision(id, request) {
	return apiFetch(`/api/disputes/${id}/decision`, {
		method: "POST",
		body: JSON.stringify(request)
	});
}
//#endregion
//#region src/routes/(app)/sales/disputes/+page.svelte
var root = from_html(`<!> <span>Reload</span>`, 1);
var root_1 = from_html(`<span class="px-1.5 py-0.2 text-[9px] font-bold bg-amber-500/20 text-amber-700 rounded-md"> </span>`);
var root_2 = from_html(`<div class="bg-card border border-border rounded-2xl p-6 h-96 flex items-center justify-center"><!></div>`);
var root_3 = from_html(`<span class="font-medium text-foreground bg-muted/60 px-1.5 py-0.5 rounded border border-border/60"> </span>`);
var root_4 = from_html(`<span class="font-mono text-primary font-bold bg-primary/5 px-1.5 py-0.5 rounded border border-primary/20"> </span>`);
var root_5 = from_html(`<div class="mt-1 flex flex-wrap items-center gap-1.5 text-[10px]"><!> <!></div>`);
var root_6 = from_html(`<span class="text-muted-foreground/40">—</span>`);
var root_7 = from_html(`<span class="text-rose-500">$0.00</span>`);
var root_8 = from_html(`<!> <span> </span>`, 1);
var root_9 = from_html(`<tr class="hover:bg-muted/10 transition-colors"><td class="p-4 font-mono font-bold text-foreground"> </td><td class="p-4 font-mono font-medium"><a class="text-primary hover:underline font-semibold"> </a></td><td class="p-4"><span class="font-bold text-foreground block"> </span> <span class="text-[10px] text-muted-foreground block truncate max-w-xs"> </span> <!></td><td class="p-4 text-foreground font-medium"> </td><td class="p-4 font-semibold capitalize text-muted-foreground"> </td><td class="p-4 font-mono font-bold text-right text-foreground"><!></td><td class="p-4 font-mono font-bold text-right text-emerald-600"><!></td><td class="p-4 text-center"><span> </span></td><td class="p-4 font-mono text-muted-foreground"><!></td><td class="p-4 text-center"><!></td></tr>`);
var root_10 = from_html(`<!> Prev`, 1);
var root_11 = from_html(`Next <!>`, 1);
var root_12 = from_html(`<div class="bg-card border border-border rounded-2xl overflow-x-auto shadow-xs max-w-full"><table class="w-full min-w-[850px] text-left border-collapse text-xs"><thead><tr class="bg-muted/30 border-b border-border text-muted-foreground font-semibold"><th class="p-4 w-32">Dispute No</th><th class="p-4 w-36">Booking Ref</th><th class="p-4">Subject & Customer</th><th class="p-4">Salesman</th><th class="p-4">Service</th><th class="p-4 text-right">Requested Refund</th><th class="p-4 text-right">Approved Refund</th><th class="p-4 text-center">Status</th><th class="p-4 w-32">Logged Date</th><th class="p-4 w-24 text-center">Action</th></tr></thead><tbody class="divide-y divide-border/60"></tbody></table></div> <div class="flex items-center justify-between text-xs pt-2"><span class="text-muted-foreground"> </span> <div class="flex gap-2"><!> <!></div></div>`, 1);
var root_13 = from_html(`<div class="bg-card border border-border rounded-2xl p-16 text-center text-muted-foreground text-xs"><!> No dispute cases found matching filters.</div>`);
var root_14 = from_html(`<span> </span>`);
var root_15 = from_html(`<div class="p-12 flex items-center justify-center"><!></div>`);
var root_16 = from_html(`<div><span class="text-[10px] text-muted-foreground block">Beneficiary Name</span> <span class="font-bold text-foreground"> </span></div>`);
var root_17 = from_html(`<div class="sm:col-span-2"><span class="text-[10px] text-muted-foreground block">IBAN</span> <span class="font-bold font-mono text-foreground"> </span></div>`);
var root_18 = from_html(`<div class="bg-primary/5 border border-primary/20 rounded-xl p-4 space-y-2"><span class="text-xs font-bold text-primary block">Informational Wallet Balance Preview</span> <div class="flex items-center justify-between text-xs font-mono bg-card p-3 rounded-lg border border-border"><div><span class="text-[10px] text-muted-foreground block font-sans">Current Customer Wallet</span> <span class="font-bold text-foreground"><!></span></div> <!> <div><span class="text-[10px] text-muted-foreground block font-sans">Approved Refund</span> <span class="font-bold text-emerald-600">+<!></span></div> <!> <div><span class="text-[10px] text-muted-foreground block font-sans">Wallet After Approval</span> <span class="font-bold text-primary"><!></span></div></div> <p class="text-[10px] text-muted-foreground">Note: The wallet mutation will be executed authoritatively by Sales Portal upon decision submission.</p></div>`);
var root_19 = from_html(`<div><span class="font-semibold text-foreground">Approved Refund:</span> <!></div>`);
var root_20 = from_html(`<div class="mt-2 p-2.5 bg-card rounded-lg border border-border text-foreground"><span class="text-[10px] font-bold uppercase text-muted-foreground block">Resolution Note</span> </div>`);
var root_21 = from_html(`<div class="bg-muted/30 border border-border rounded-xl p-4 space-y-2"><h5 class="text-xs font-bold text-foreground">Decision & Resolution History</h5> <div class="text-xs space-y-1 text-muted-foreground"><div><span class="font-semibold text-foreground">Resolved By:</span> </div> <div><span class="font-semibold text-foreground">Resolved At:</span> <!></div> <!> <!></div></div>`);
var root_22 = from_html(`<div class="space-y-1.5"><label for="approvedAmountInput" class="text-xs font-semibold text-foreground block">Approved Refund Amount ($)</label> <input id="approvedAmountInput" type="number" step="0.01" class="w-full text-xs px-3.5 py-2 border border-border rounded-xl bg-background font-mono font-bold text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"/></div>`);
var root_23 = from_html(`<div class="p-3 bg-rose-500/10 border border-rose-500/20 text-rose-600 text-xs rounded-xl flex items-center gap-2"><!> <span> </span></div>`);
var root_24 = from_html(`<div class="bg-card border border-border rounded-xl p-4 space-y-4"><h5 class="text-xs font-bold text-foreground border-b border-border pb-2">Submit Decision & Resolution</h5> <div class="flex gap-3"><button type="button"><!> <span>Approve (Accept)</span></button> <button type="button"><!> <span>Reject Case</span></button></div> <!> <div class="space-y-1.5"><label for="resolutionInput" class="text-xs font-semibold text-foreground block">Resolution Notes & Audit Summary <span class="text-rose-500">*</span></label> <textarea id="resolutionInput" rows="3" placeholder="Provide clear rationale for approval or rejection..." class="w-full text-xs p-3 border border-border rounded-xl bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"></textarea></div> <!></div>`);
var root_25 = from_html(`<div class="bg-muted/20 border border-border/60 rounded-xl p-4 space-y-2"><div class="flex items-start justify-between gap-2"><div><span class="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">Subject</span> <h4 class="text-sm font-bold text-foreground"> </h4></div> <div class="text-right"><span class="text-[10px] uppercase font-bold tracking-wider text-muted-foreground block">Logged Date</span> <span class="text-xs text-muted-foreground font-mono"><!></span></div></div> <div><span class="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">Description</span> <p class="text-xs text-foreground/90 whitespace-pre-wrap leading-relaxed mt-0.5"> </p></div></div> <div class="grid grid-cols-2 sm:grid-cols-4 gap-3"><div class="bg-card border border-border p-3 rounded-xl"><span class="text-[10px] text-muted-foreground uppercase font-semibold block">Service Type</span> <span class="text-xs font-bold text-foreground capitalize"> </span></div> <div class="bg-card border border-border p-3 rounded-xl"><span class="text-[10px] text-muted-foreground uppercase font-semibold block">Booking Reference</span> <a class="text-xs font-bold text-primary hover:underline font-mono"> </a></div> <div class="bg-card border border-border p-3 rounded-xl"><span class="text-[10px] text-muted-foreground uppercase font-semibold block">Customer / Head</span> <span class="text-xs font-bold text-foreground truncate block"> </span></div> <div class="bg-card border border-border p-3 rounded-xl"><span class="text-[10px] text-muted-foreground uppercase font-semibold block">Salesman</span> <span class="text-xs font-bold text-foreground truncate block"> </span></div></div> <div class="bg-card border border-border rounded-xl p-4 space-y-3"><h5 class="text-xs font-bold text-foreground border-b border-border/60 pb-2">Financial Details & Refund Request</h5> <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs"><div><span class="text-[10px] text-muted-foreground block">Booking Amount</span> <span class="font-bold font-mono text-foreground"><!></span></div> <div><span class="text-[10px] text-muted-foreground block">Supplier Cost</span> <span class="font-bold font-mono text-foreground"><!></span></div> <div><span class="text-[10px] text-muted-foreground block">Is Refund Claim</span> <span> </span></div> <div><span class="text-[10px] text-muted-foreground block">Requested Refund</span> <span class="font-bold font-mono text-foreground"><!></span></div> <!> <!></div></div> <!> <!>`, 1);
var root_26 = from_html(`<!> <span>Submitting...</span>`, 1);
var root_27 = from_html(`<span>Confirm & Submit Decision</span>`);
var root_28 = from_html(`<div class="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"><div class="bg-card border border-border rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto flex flex-col"><div class="p-4 border-b border-border flex items-center justify-between sticky top-0 bg-card z-10"><div class="flex items-center gap-2"><!> <h3 class="font-bold text-sm text-foreground"> </h3> <!></div> <button class="p-1 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground cursor-pointer"><!></button></div> <div class="p-5 space-y-5 flex-1"><!></div> <div class="p-4 border-t border-border flex items-center justify-end gap-2 bg-muted/20 sticky bottom-0"><!> <!></div></div></div>`);
var root_29 = from_html(`<div class="space-y-6"><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"><div class="flex flex-col gap-1"><div class="flex items-center gap-2"><!> <h1 class="text-xl font-bold text-foreground font-sans">Disputes & Chargebacks Workspace</h1></div> <p class="text-xs text-muted-foreground">Review and approve operational disputes, chargebacks, and refund claims submitted from the Sales Portal.</p></div> <div class="flex items-center gap-2"><!></div></div> <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3"><div class="bg-card border border-border rounded-2xl p-3.5 space-y-1"><div class="flex items-center justify-between text-muted-foreground"><span class="text-[10px] uppercase tracking-wider font-semibold">Total Cases</span> <!></div> <span class="text-lg font-bold block text-foreground"> </span></div> <div class="bg-card border border-border rounded-2xl p-3.5 space-y-1"><div class="flex items-center justify-between text-amber-600"><span class="text-[10px] uppercase tracking-wider font-semibold">Pending Review</span> <!></div> <span class="text-lg font-bold block text-amber-600"> </span></div> <div class="bg-card border border-border rounded-2xl p-3.5 space-y-1"><div class="flex items-center justify-between text-emerald-600"><span class="text-[10px] uppercase tracking-wider font-semibold">Resolved</span> <!></div> <span class="text-lg font-bold block text-emerald-600"> </span></div> <div class="bg-card border border-border rounded-2xl p-3.5 space-y-1"><div class="flex items-center justify-between text-rose-600"><span class="text-[10px] uppercase tracking-wider font-semibold">Rejected</span> <!></div> <span class="text-lg font-bold block text-rose-600"> </span></div> <div class="bg-card border border-border rounded-2xl p-3.5 space-y-1"><div class="flex items-center justify-between text-muted-foreground"><span class="text-[10px] uppercase tracking-wider font-semibold">Requested Refund</span> <!></div> <span class="text-sm font-bold block text-foreground font-mono"><!></span></div> <div class="bg-card border border-border rounded-2xl p-3.5 space-y-1"><div class="flex items-center justify-between text-emerald-600"><span class="text-[10px] uppercase tracking-wider font-semibold">Approved Refund</span> <!></div> <span class="text-sm font-bold block text-emerald-600 font-mono"><!></span></div></div> <div class="bg-card border border-border rounded-2xl p-4 space-y-3"><div class="flex flex-col md:flex-row md:items-center justify-between gap-3"><div class="flex bg-muted/40 p-1 rounded-xl w-full md:w-auto"><button>All Cases</button> <button><span>Pending Review</span> <!></button> <button>Resolved</button> <button>Rejected</button></div> <div class="flex flex-col sm:flex-row items-center gap-2 w-full md:w-auto"><div class="relative w-full sm:w-64"><!> <input type="text" placeholder="Search ID, booking, subject, salesman, IBAN..." class="w-full text-xs pl-10 pr-4 py-2 border border-border rounded-xl bg-background text-foreground placeholder-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20"/></div> <select class="w-full sm:w-auto text-xs px-3 py-2 border border-border rounded-xl bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer"><option>Pending First</option><option>Newest First</option><option>Oldest First</option><option>Highest Refund</option><option>Lowest Refund</option></select></div></div></div> <!></div> <!>`, 1);
function _page($$anchor, $$props) {
	push($$props, true);
	let disputesData = state(null);
	let dashboardData = state(null);
	let loading = state(false);
	let dashboardLoading = state(false);
	let currentPage = state(1);
	let pageSize = 10;
	let selectedStatus = state("all");
	let searchVal = state("");
	let sortVal = state("pending_first");
	let searchTimeout;
	let selectedDispute = state(null);
	let isModalOpen = state(false);
	let loadingDetail = state(false);
	let submittingDecision = state(false);
	let decisionError = state(null);
	let decisionAction = state("approve");
	let approvedAmountInput = state(0);
	let resolutionInput = state("");
	function handleSearchInput(val) {
		clearTimeout(searchTimeout);
		searchTimeout = setTimeout(() => {
			set(searchVal, val, true);
			set(currentPage, 1);
			fetchDisputes();
		}, 400);
	}
	async function fetchDashboard() {
		set(dashboardLoading, true);
		try {
			set(dashboardData, await getDisputesDashboard(), true);
		} catch (err) {
			console.error("Failed to load disputes dashboard stats:", err);
		} finally {
			set(dashboardLoading, false);
		}
	}
	async function fetchDisputes() {
		set(loading, true);
		try {
			const res = await getDisputes({
				page: get(currentPage),
				pageSize,
				status: get(selectedStatus) === "all" ? void 0 : get(selectedStatus),
				search: get(searchVal).trim() ? get(searchVal).trim() : void 0,
				sort: get(sortVal)
			});
			set(disputesData, res, true);
		} catch (err) {
			console.error("Failed to load disputes list:", err);
		} finally {
			set(loading, false);
		}
	}
	function refreshAll() {
		fetchDashboard();
		fetchDisputes();
	}
	onMount(() => {
		refreshAll();
	});
	async function openDisputeModal(id) {
		set(isModalOpen, true);
		set(loadingDetail, true);
		set(decisionError, null);
		set(selectedDispute, null);
		try {
			const detail = await getDisputeById(id);
			set(selectedDispute, detail, true);
			set(decisionAction, "approve");
			set(approvedAmountInput, detail.refundAmount ?? 0, true);
			set(resolutionInput, "");
		} catch (err) {
			console.error("Failed to fetch dispute detail:", err);
			set(decisionError, "Failed to load dispute detail.");
		} finally {
			set(loadingDetail, false);
		}
	}
	function closeModal() {
		set(isModalOpen, false);
		set(selectedDispute, null);
		set(decisionError, null);
	}
	async function handleDecisionSubmit() {
		if (!get(selectedDispute)) return;
		if (!get(resolutionInput).trim()) {
			set(decisionError, "Resolution note is required.");
			return;
		}
		set(submittingDecision, true);
		set(decisionError, null);
		try {
			await submitDisputeDecision(get(selectedDispute).id, {
				decision: get(decisionAction),
				approvedRefundAmount: get(decisionAction) === "approve" && get(selectedDispute).isRefund ? get(approvedAmountInput) : 0,
				resolution: get(resolutionInput).trim()
			});
			closeModal();
			refreshAll();
		} catch (err) {
			console.error("Failed to submit dispute decision:", err);
			set(decisionError, err?.message || "Failed to submit decision. Please try again.", true);
		} finally {
			set(submittingDecision, false);
		}
	}
	function getStatusBadge(status) {
		const st = (status || "").toLowerCase();
		if (st === "open" || st === "pending") return {
			label: "Pending Review",
			cls: "bg-amber-500/10 text-amber-600 border-amber-500/20"
		};
		if (st === "resolved" || st === "accepted") return {
			label: "Resolved",
			cls: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
		};
		if (st === "rejected") return {
			label: "Rejected",
			cls: "bg-rose-500/10 text-rose-600 border-rose-500/20"
		};
		return {
			label: status,
			cls: "bg-muted text-muted-foreground border-border"
		};
	}
	function formatServiceRoute(serviceType, disputableId) {
		const st = (serviceType || "").toLowerCase();
		if (st.includes("flight")) return `/sales/bookings/flights/${disputableId}`;
		if (st.includes("hotel")) return `/sales/bookings/hotels/${disputableId}`;
		if (st.includes("visa")) return `/sales/bookings/visa/${disputableId}`;
		if (st.includes("vfs")) return `/sales/bookings/vfs/${disputableId}`;
		if (st.includes("holiday")) return `/sales/bookings/holiday/${disputableId}`;
		if (st.includes("transport")) return `/sales/bookings/transportation/${disputableId}`;
		if (st.includes("other")) return `/sales/bookings/other-services/${disputableId}`;
		return `/sales/bookings/flights/${disputableId}`;
	}
	var fragment = root_29();
	head("1gfttzs", ($$anchor) => {
		effect(() => {
			$document.title = "Disputes & Chargebacks — Accounts Portal";
		});
	});
	var div = first_child(fragment);
	var div_1 = child(div);
	var div_2 = child(div_1);
	var div_3 = child(div_2);
	Shield_alert(child(div_3), { class: "h-6 w-6 text-primary" });
	next(2);
	reset(div_3);
	next(2);
	reset(div_2);
	var div_4 = sibling(div_2, 2);
	Button(child(div_4), {
		variant: "outline",
		class: "h-8.5 rounded-xl cursor-pointer flex items-center gap-1.5 text-xs font-semibold",
		onclick: refreshAll,
		children: ($$anchor, $$slotProps) => {
			var fragment_1 = root();
			var node_2 = first_child(fragment_1);
			{
				let $0 = user_derived(() => get(loading) || get(dashboardLoading) ? "animate-spin" : "");
				Refresh_cw(node_2, { get class() {
					return `h-3.5 w-3.5 ${get($0) ?? ""}`;
				} });
			}
			next(2);
			append($$anchor, fragment_1);
		},
		$$slots: { default: true }
	});
	reset(div_4);
	reset(div_1);
	var div_5 = sibling(div_1, 2);
	var div_6 = child(div_5);
	var div_7 = child(div_6);
	File_text(sibling(child(div_7), 2), { class: "h-4 w-4" });
	reset(div_7);
	var span = sibling(div_7, 2);
	var text$1 = child(span, true);
	reset(span);
	reset(div_6);
	var div_8 = sibling(div_6, 2);
	var div_9 = child(div_8);
	Clock(sibling(child(div_9), 2), { class: "h-4 w-4" });
	reset(div_9);
	var span_1 = sibling(div_9, 2);
	var text_1 = child(span_1, true);
	reset(span_1);
	reset(div_8);
	var div_10 = sibling(div_8, 2);
	var div_11 = child(div_10);
	Circle_check(sibling(child(div_11), 2), { class: "h-4 w-4" });
	reset(div_11);
	var span_2 = sibling(div_11, 2);
	var text_2 = child(span_2, true);
	reset(span_2);
	reset(div_10);
	var div_12 = sibling(div_10, 2);
	var div_13 = child(div_12);
	Circle_x(sibling(child(div_13), 2), { class: "h-4 w-4" });
	reset(div_13);
	var span_3 = sibling(div_13, 2);
	var text_3 = child(span_3, true);
	reset(span_3);
	reset(div_12);
	var div_14 = sibling(div_12, 2);
	var div_15 = child(div_14);
	Dollar_sign(sibling(child(div_15), 2), { class: "h-4 w-4" });
	reset(div_15);
	var span_4 = sibling(div_15, 2);
	var node_8 = child(span_4);
	var consequent = ($$anchor) => {
		MoneyDisplay($$anchor, { get amount() {
			return get(dashboardData).requestedRefundAmount;
		} });
	};
	var alternate = ($$anchor) => {
		append($$anchor, text("—"));
	};
	if_block(node_8, ($$render) => {
		if (get(dashboardData)) $$render(consequent);
		else $$render(alternate, -1);
	});
	reset(span_4);
	reset(div_14);
	var div_16 = sibling(div_14, 2);
	var div_17 = child(div_16);
	Dollar_sign(sibling(child(div_17), 2), { class: "h-4 w-4" });
	reset(div_17);
	var span_5 = sibling(div_17, 2);
	var node_10 = child(span_5);
	var consequent_1 = ($$anchor) => {
		MoneyDisplay($$anchor, { get amount() {
			return get(dashboardData).approvedRefundAmount;
		} });
	};
	var alternate_1 = ($$anchor) => {
		append($$anchor, text("—"));
	};
	if_block(node_10, ($$render) => {
		if (get(dashboardData)) $$render(consequent_1);
		else $$render(alternate_1, -1);
	});
	reset(span_5);
	reset(div_16);
	reset(div_5);
	var div_18 = sibling(div_5, 2);
	var div_19 = child(div_18);
	var div_20 = child(div_19);
	var button = child(div_20);
	var button_1 = sibling(button, 2);
	var node_11 = sibling(child(button_1), 2);
	var consequent_2 = ($$anchor) => {
		var span_6 = root_1();
		var text_6 = child(span_6, true);
		reset(span_6);
		template_effect(() => set_text(text_6, get(dashboardData).pending));
		append($$anchor, span_6);
	};
	if_block(node_11, ($$render) => {
		if (get(dashboardData) && get(dashboardData).pending > 0) $$render(consequent_2);
	});
	reset(button_1);
	var button_2 = sibling(button_1, 2);
	var button_3 = sibling(button_2, 2);
	reset(div_20);
	var div_21 = sibling(div_20, 2);
	var div_22 = child(div_21);
	var node_12 = child(div_22);
	Search(node_12, { class: "absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/60" });
	var input = sibling(node_12, 2);
	reset(div_22);
	var select = sibling(div_22, 2);
	var option = child(select);
	option.value = option.__value = "pending_first";
	var option_1 = sibling(option);
	option_1.value = option_1.__value = "newest";
	var option_2 = sibling(option_1);
	option_2.value = option_2.__value = "oldest";
	var option_3 = sibling(option_2);
	option_3.value = option_3.__value = "highest_refund";
	var option_4 = sibling(option_3);
	option_4.value = option_4.__value = "lowest_refund";
	reset(select);
	reset(div_21);
	reset(div_19);
	reset(div_18);
	var node_13 = sibling(div_18, 2);
	var consequent_3 = ($$anchor) => {
		var div_23 = root_2();
		Refresh_cw(child(div_23), { class: "h-8 w-8 text-primary animate-spin" });
		reset(div_23);
		append($$anchor, div_23);
	};
	var consequent_10 = ($$anchor) => {
		var fragment_4 = root_12();
		var div_24 = first_child(fragment_4);
		var table = child(div_24);
		var tbody = sibling(child(table));
		each(tbody, 21, () => get(disputesData).items, index, ($$anchor, row) => {
			const badge = user_derived(() => getStatusBadge(get(row).status));
			var tr = root_9();
			var td = child(tr);
			var text_7 = child(td, true);
			reset(td);
			var td_1 = sibling(td);
			var a = child(td_1);
			var text_8 = child(a);
			reset(a);
			reset(td_1);
			var td_2 = sibling(td_1);
			var span_7 = child(td_2);
			var text_9 = child(span_7, true);
			reset(span_7);
			var span_8 = sibling(span_7, 2);
			var text_10 = child(span_8);
			reset(span_8);
			var node_15 = sibling(span_8, 2);
			var consequent_6 = ($$anchor) => {
				var div_25 = root_5();
				var node_16 = child(div_25);
				var consequent_4 = ($$anchor) => {
					var span_9 = root_3();
					var text_11 = child(span_9, true);
					reset(span_9);
					template_effect(() => set_text(text_11, get(row).name));
					append($$anchor, span_9);
				};
				if_block(node_16, ($$render) => {
					if (get(row).name) $$render(consequent_4);
				});
				var node_17 = sibling(node_16, 2);
				var consequent_5 = ($$anchor) => {
					var span_10 = root_4();
					var text_12 = child(span_10, true);
					reset(span_10);
					template_effect(() => set_text(text_12, get(row).iban));
					append($$anchor, span_10);
				};
				if_block(node_17, ($$render) => {
					if (get(row).iban) $$render(consequent_5);
				});
				reset(div_25);
				append($$anchor, div_25);
			};
			if_block(node_15, ($$render) => {
				if (get(row).name || get(row).iban) $$render(consequent_6);
			});
			reset(td_2);
			var td_3 = sibling(td_2);
			var text_13 = child(td_3, true);
			reset(td_3);
			var td_4 = sibling(td_3);
			var text_14 = child(td_4, true);
			reset(td_4);
			var td_5 = sibling(td_4);
			var node_18 = child(td_5);
			var consequent_7 = ($$anchor) => {
				MoneyDisplay($$anchor, { get amount() {
					return get(row).refundAmount;
				} });
			};
			var alternate_2 = ($$anchor) => {
				append($$anchor, root_6());
			};
			if_block(node_18, ($$render) => {
				if (get(row).isRefund && get(row).refundAmount) $$render(consequent_7);
				else $$render(alternate_2, -1);
			});
			reset(td_5);
			var td_6 = sibling(td_5);
			var node_19 = child(td_6);
			var consequent_8 = ($$anchor) => {
				MoneyDisplay($$anchor, { get amount() {
					return get(row).approvedRefundAmount;
				} });
			};
			var consequent_9 = ($$anchor) => {
				append($$anchor, root_7());
			};
			var alternate_3 = ($$anchor) => {
				append($$anchor, root_6());
			};
			if_block(node_19, ($$render) => {
				if (get(row).isRefund && get(row).approvedRefundAmount) $$render(consequent_8);
				else if (get(row).isRefund && get(row).status === "rejected") $$render(consequent_9, 1);
				else $$render(alternate_3, -1);
			});
			reset(td_6);
			var td_7 = sibling(td_6);
			var span_14 = child(td_7);
			var text_15 = child(span_14, true);
			reset(span_14);
			reset(td_7);
			var td_8 = sibling(td_7);
			DateDisplay(child(td_8), { get value() {
				return get(row).createdAt;
			} });
			reset(td_8);
			var td_9 = sibling(td_8);
			Button(child(td_9), {
				variant: "outline",
				size: "sm",
				class: "h-7 px-2.5 text-[11px] rounded-lg cursor-pointer flex items-center gap-1 font-semibold",
				onclick: () => openDisputeModal(get(row).id),
				children: ($$anchor, $$slotProps) => {
					var fragment_7 = root_8();
					var node_22 = first_child(fragment_7);
					Eye(node_22, { class: "h-3.5 w-3.5" });
					var span_15 = sibling(node_22, 2);
					var text_16 = child(span_15, true);
					reset(span_15);
					template_effect(() => set_text(text_16, get(row).status === "open" || get(row).status === "pending" ? "Review" : "View"));
					append($$anchor, fragment_7);
				},
				$$slots: { default: true }
			});
			reset(td_9);
			reset(tr);
			template_effect(($0, $1, $2) => {
				set_text(text_7, $0);
				set_attribute(a, "href", $1);
				set_text(text_8, `${(get(row).disputableDocumentNumber || `#${get(row).disputableId}`) ?? ""} (${get(row).disputableType ?? ""})`);
				set_text(text_9, get(row).subject);
				set_text(text_10, `Customer: ${(get(row).headName || "—") ?? ""}`);
				set_text(text_13, get(row).salesmanName || "Salesman");
				set_text(text_14, $2);
				set_class(span_14, 1, `inline-flex items-center px-2.5 py-0.5 rounded-full text-[9px] font-bold border capitalize ${get(badge).cls ?? ""}`);
				set_text(text_15, get(badge).label);
			}, [
				() => get(row).documentNumber || `TXSDISP-${String(get(row).id).padStart(6, "0")}`,
				() => formatServiceRoute(get(row).disputableType, get(row).disputableId),
				() => get(row).disputableType.replace(/_/g, " ")
			]);
			append($$anchor, tr);
		});
		reset(tbody);
		reset(table);
		reset(div_24);
		var div_26 = sibling(div_24, 2);
		var span_16 = child(div_26);
		var text_17 = child(span_16);
		reset(span_16);
		var div_27 = sibling(span_16, 2);
		var node_23 = child(div_27);
		{
			let $0 = user_derived(() => get(currentPage) <= 1);
			Button(node_23, {
				variant: "outline",
				class: "h-8 rounded-xl cursor-pointer px-3",
				get disabled() {
					return get($0);
				},
				onclick: () => {
					update(currentPage, -1);
					fetchDisputes();
				},
				children: ($$anchor, $$slotProps) => {
					var fragment_8 = root_10();
					Chevron_left(first_child(fragment_8), { class: "h-3 w-3 mr-1" });
					next();
					append($$anchor, fragment_8);
				},
				$$slots: { default: true }
			});
		}
		var node_25 = sibling(node_23, 2);
		{
			let $0 = user_derived(() => get(currentPage) >= get(disputesData).totalPages);
			Button(node_25, {
				variant: "outline",
				class: "h-8 rounded-xl cursor-pointer px-3",
				get disabled() {
					return get($0);
				},
				onclick: () => {
					update(currentPage);
					fetchDisputes();
				},
				children: ($$anchor, $$slotProps) => {
					next();
					var fragment_9 = root_11();
					Chevron_right(sibling(first_child(fragment_9)), { class: "h-3 w-3 ml-1" });
					append($$anchor, fragment_9);
				},
				$$slots: { default: true }
			});
		}
		reset(div_27);
		reset(div_26);
		template_effect(() => set_text(text_17, `Page ${get(disputesData).page ?? ""} of ${get(disputesData).totalPages ?? ""} (${get(disputesData).totalCount ?? ""} total cases)`));
		append($$anchor, fragment_4);
	};
	var alternate_4 = ($$anchor) => {
		var div_28 = root_13();
		Triangle_alert(child(div_28), { class: "h-8 w-8 text-muted-foreground/40 mx-auto mb-2" });
		next();
		reset(div_28);
		append($$anchor, div_28);
	};
	if_block(node_13, ($$render) => {
		if (get(loading)) $$render(consequent_3);
		else if (get(disputesData) && get(disputesData).items && get(disputesData).items.length > 0) $$render(consequent_10, 1);
		else $$render(alternate_4, -1);
	});
	reset(div);
	var node_28 = sibling(div, 2);
	var consequent_27 = ($$anchor) => {
		var div_29 = root_28();
		var div_30 = child(div_29);
		var div_31 = child(div_30);
		var div_32 = child(div_31);
		var node_29 = child(div_32);
		Shield_alert(node_29, { class: "h-5 w-5 text-primary" });
		var h3 = sibling(node_29, 2);
		var text_18 = child(h3);
		reset(h3);
		var node_30 = sibling(h3, 2);
		var consequent_11 = ($$anchor) => {
			const badge = user_derived(() => getStatusBadge(get(selectedDispute).status));
			var span_17 = root_14();
			var text_19 = child(span_17, true);
			reset(span_17);
			template_effect(() => {
				set_class(span_17, 1, `px-2 py-0.5 text-[9px] font-bold rounded-full border capitalize ${get(badge).cls ?? ""}`);
				set_text(text_19, get(badge).label);
			});
			append($$anchor, span_17);
		};
		if_block(node_30, ($$render) => {
			if (get(selectedDispute)) $$render(consequent_11);
		});
		reset(div_32);
		var button_4 = sibling(div_32, 2);
		X(child(button_4), { class: "h-4 w-4" });
		reset(button_4);
		reset(div_31);
		var div_33 = sibling(div_31, 2);
		var node_32 = child(div_33);
		var consequent_12 = ($$anchor) => {
			var div_34 = root_15();
			Refresh_cw(child(div_34), { class: "h-6 w-6 text-primary animate-spin" });
			reset(div_34);
			append($$anchor, div_34);
		};
		var consequent_24 = ($$anchor) => {
			var fragment_10 = root_25();
			var div_35 = first_child(fragment_10);
			var div_36 = child(div_35);
			var div_37 = child(div_36);
			var h4 = sibling(child(div_37), 2);
			var text_20 = child(h4, true);
			reset(h4);
			reset(div_37);
			var div_38 = sibling(div_37, 2);
			var span_18 = sibling(child(div_38), 2);
			DateDisplay(child(span_18), { get value() {
				return get(selectedDispute).createdAt;
			} });
			reset(span_18);
			reset(div_38);
			reset(div_36);
			var div_39 = sibling(div_36, 2);
			var p = sibling(child(div_39), 2);
			var text_21 = child(p, true);
			reset(p);
			reset(div_39);
			reset(div_35);
			var div_40 = sibling(div_35, 2);
			var div_41 = child(div_40);
			var span_19 = sibling(child(div_41), 2);
			var text_22 = child(span_19, true);
			reset(span_19);
			reset(div_41);
			var div_42 = sibling(div_41, 2);
			var a_1 = sibling(child(div_42), 2);
			var text_23 = child(a_1, true);
			reset(a_1);
			reset(div_42);
			var div_43 = sibling(div_42, 2);
			var span_20 = sibling(child(div_43), 2);
			var text_24 = child(span_20, true);
			reset(span_20);
			reset(div_43);
			var div_44 = sibling(div_43, 2);
			var span_21 = sibling(child(div_44), 2);
			var text_25 = child(span_21, true);
			reset(span_21);
			reset(div_44);
			reset(div_40);
			var div_45 = sibling(div_40, 2);
			var div_46 = sibling(child(div_45), 2);
			var div_47 = child(div_46);
			var span_22 = sibling(child(div_47), 2);
			var node_35 = child(span_22);
			var consequent_13 = ($$anchor) => {
				MoneyDisplay($$anchor, { get amount() {
					return get(selectedDispute).bookingPayableAmount;
				} });
			};
			var alternate_5 = ($$anchor) => {
				append($$anchor, text("—"));
			};
			if_block(node_35, ($$render) => {
				if (get(selectedDispute).bookingPayableAmount) $$render(consequent_13);
				else $$render(alternate_5, -1);
			});
			reset(span_22);
			reset(div_47);
			var div_48 = sibling(div_47, 2);
			var span_23 = sibling(child(div_48), 2);
			var node_36 = child(span_23);
			var consequent_14 = ($$anchor) => {
				MoneyDisplay($$anchor, { get amount() {
					return get(selectedDispute).bookingSupplierCost;
				} });
			};
			var alternate_6 = ($$anchor) => {
				append($$anchor, text("—"));
			};
			if_block(node_36, ($$render) => {
				if (get(selectedDispute).bookingSupplierCost) $$render(consequent_14);
				else $$render(alternate_6, -1);
			});
			reset(span_23);
			reset(div_48);
			var div_49 = sibling(div_48, 2);
			var span_24 = sibling(child(div_49), 2);
			var text_28 = child(span_24, true);
			reset(span_24);
			reset(div_49);
			var div_50 = sibling(div_49, 2);
			var span_25 = sibling(child(div_50), 2);
			var node_37 = child(span_25);
			var consequent_15 = ($$anchor) => {
				MoneyDisplay($$anchor, { get amount() {
					return get(selectedDispute).refundAmount;
				} });
			};
			var alternate_7 = ($$anchor) => {
				append($$anchor, text("—"));
			};
			if_block(node_37, ($$render) => {
				if (get(selectedDispute).isRefund && get(selectedDispute).refundAmount) $$render(consequent_15);
				else $$render(alternate_7, -1);
			});
			reset(span_25);
			reset(div_50);
			var node_38 = sibling(div_50, 2);
			var consequent_16 = ($$anchor) => {
				var div_51 = root_16();
				var span_26 = sibling(child(div_51), 2);
				var text_30 = child(span_26, true);
				reset(span_26);
				reset(div_51);
				template_effect(() => set_text(text_30, get(selectedDispute).name));
				append($$anchor, div_51);
			};
			if_block(node_38, ($$render) => {
				if (get(selectedDispute).name) $$render(consequent_16);
			});
			var node_39 = sibling(node_38, 2);
			var consequent_17 = ($$anchor) => {
				var div_52 = root_17();
				var span_27 = sibling(child(div_52), 2);
				var text_31 = child(span_27, true);
				reset(span_27);
				reset(div_52);
				template_effect(() => set_text(text_31, get(selectedDispute).iban));
				append($$anchor, div_52);
			};
			if_block(node_39, ($$render) => {
				if (get(selectedDispute).iban) $$render(consequent_17);
			});
			reset(div_46);
			reset(div_45);
			var node_40 = sibling(div_45, 2);
			var consequent_18 = ($$anchor) => {
				var div_53 = root_18();
				var div_54 = sibling(child(div_53), 2);
				var div_55 = child(div_54);
				var span_28 = sibling(child(div_55), 2);
				MoneyDisplay(child(span_28), { get amount() {
					return get(selectedDispute).headWallet;
				} });
				reset(span_28);
				reset(div_55);
				var node_42 = sibling(div_55, 2);
				Arrow_right(node_42, { class: "h-4 w-4 text-muted-foreground" });
				var div_56 = sibling(node_42, 2);
				var span_29 = sibling(child(div_56), 2);
				var node_43 = sibling(child(span_29));
				{
					let $0 = user_derived(() => get(decisionAction) === "approve" ? get(approvedAmountInput) : 0);
					MoneyDisplay(node_43, { get amount() {
						return get($0);
					} });
				}
				reset(span_29);
				reset(div_56);
				var node_44 = sibling(div_56, 2);
				Arrow_right(node_44, { class: "h-4 w-4 text-muted-foreground" });
				var div_57 = sibling(node_44, 2);
				var span_30 = sibling(child(div_57), 2);
				var node_45 = child(span_30);
				{
					let $0 = user_derived(() => get(selectedDispute).headWallet + (get(decisionAction) === "approve" ? get(approvedAmountInput) || 0 : 0));
					MoneyDisplay(node_45, { get amount() {
						return get($0);
					} });
				}
				reset(span_30);
				reset(div_57);
				reset(div_54);
				next(2);
				reset(div_53);
				append($$anchor, div_53);
			};
			if_block(node_40, ($$render) => {
				if (get(selectedDispute).isRefund && get(selectedDispute).headWallet !== null && get(selectedDispute).headWallet !== void 0) $$render(consequent_18);
			});
			var node_46 = sibling(node_40, 2);
			var consequent_21 = ($$anchor) => {
				var div_58 = root_21();
				var div_59 = sibling(child(div_58), 2);
				var div_60 = child(div_59);
				var text_32 = sibling(child(div_60));
				reset(div_60);
				var div_61 = sibling(div_60, 2);
				DateDisplay(sibling(child(div_61), 2), { get value() {
					return get(selectedDispute).resolvedAt;
				} });
				reset(div_61);
				var node_48 = sibling(div_61, 2);
				var consequent_19 = ($$anchor) => {
					var div_62 = root_19();
					MoneyDisplay(sibling(child(div_62), 2), { get amount() {
						return get(selectedDispute).approvedRefundAmount;
					} });
					reset(div_62);
					append($$anchor, div_62);
				};
				if_block(node_48, ($$render) => {
					if (get(selectedDispute).approvedRefundAmount !== null) $$render(consequent_19);
				});
				var node_50 = sibling(node_48, 2);
				var consequent_20 = ($$anchor) => {
					var div_63 = root_20();
					var text_33 = sibling(child(div_63));
					reset(div_63);
					template_effect(() => set_text(text_33, ` ${(get(selectedDispute).resolution || get(selectedDispute).resolutionNote) ?? ""}`));
					append($$anchor, div_63);
				};
				if_block(node_50, ($$render) => {
					if (get(selectedDispute).resolution || get(selectedDispute).resolutionNote) $$render(consequent_20);
				});
				reset(div_59);
				reset(div_58);
				template_effect(() => set_text(text_32, ` ${(get(selectedDispute).resolvedBy || "—") ?? ""}`));
				append($$anchor, div_58);
			};
			var alternate_8 = ($$anchor) => {
				var div_64 = root_24();
				var div_65 = sibling(child(div_64), 2);
				var button_5 = child(div_65);
				Circle_check(child(button_5), { class: "h-4 w-4" });
				next(2);
				reset(button_5);
				var button_6 = sibling(button_5, 2);
				Circle_x(child(button_6), { class: "h-4 w-4" });
				next(2);
				reset(button_6);
				reset(div_65);
				var node_53 = sibling(div_65, 2);
				var consequent_22 = ($$anchor) => {
					var div_66 = root_22();
					var input_1 = sibling(child(div_66), 2);
					remove_input_defaults(input_1);
					reset(div_66);
					bind_value(input_1, () => get(approvedAmountInput), ($$value) => set(approvedAmountInput, $$value));
					append($$anchor, div_66);
				};
				if_block(node_53, ($$render) => {
					if (get(decisionAction) === "approve" && get(selectedDispute).isRefund) $$render(consequent_22);
				});
				var div_67 = sibling(node_53, 2);
				var textarea = sibling(child(div_67), 2);
				remove_textarea_child(textarea);
				reset(div_67);
				var node_54 = sibling(div_67, 2);
				var consequent_23 = ($$anchor) => {
					var div_68 = root_23();
					var node_55 = child(div_68);
					Triangle_alert(node_55, { class: "h-4 w-4 shrink-0" });
					var span_31 = sibling(node_55, 2);
					var text_34 = child(span_31, true);
					reset(span_31);
					reset(div_68);
					template_effect(() => set_text(text_34, get(decisionError)));
					append($$anchor, div_68);
				};
				if_block(node_54, ($$render) => {
					if (get(decisionError)) $$render(consequent_23);
				});
				reset(div_64);
				template_effect(() => {
					set_class(button_5, 1, `flex-1 p-3 rounded-xl border font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition-all ${get(decisionAction) === "approve" ? "bg-emerald-500/10 border-emerald-500 text-emerald-600 shadow-xs" : "bg-background border-border text-muted-foreground hover:text-foreground"}`);
					set_class(button_6, 1, `flex-1 p-3 rounded-xl border font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition-all ${get(decisionAction) === "reject" ? "bg-rose-500/10 border-rose-500 text-rose-600 shadow-xs" : "bg-background border-border text-muted-foreground hover:text-foreground"}`);
				});
				delegated("click", button_5, () => {
					set(decisionAction, "approve");
				});
				delegated("click", button_6, () => {
					set(decisionAction, "reject");
				});
				bind_value(textarea, () => get(resolutionInput), ($$value) => set(resolutionInput, $$value));
				append($$anchor, div_64);
			};
			if_block(node_46, ($$render) => {
				if (get(selectedDispute).status !== "open" && get(selectedDispute).status !== "pending") $$render(consequent_21);
				else $$render(alternate_8, -1);
			});
			template_effect(($0, $1) => {
				set_text(text_20, get(selectedDispute).subject);
				set_text(text_21, get(selectedDispute).description);
				set_text(text_22, $0);
				set_attribute(a_1, "href", $1);
				set_text(text_23, get(selectedDispute).disputableDocumentNumber || `#${get(selectedDispute).disputableId}`);
				set_text(text_24, get(selectedDispute).headName || "—");
				set_text(text_25, get(selectedDispute).salesmanName || "—");
				set_class(span_24, 1, `font-bold ${get(selectedDispute).isRefund ? "text-amber-600" : "text-muted-foreground"}`);
				set_text(text_28, get(selectedDispute).isRefund ? "Yes (Financial)" : "No (Operational)");
			}, [() => get(selectedDispute).disputableType.replace(/_/g, " "), () => formatServiceRoute(get(selectedDispute).disputableType, get(selectedDispute).disputableId)]);
			append($$anchor, fragment_10);
		};
		if_block(node_32, ($$render) => {
			if (get(loadingDetail)) $$render(consequent_12);
			else if (get(selectedDispute)) $$render(consequent_24, 1);
		});
		reset(div_33);
		var div_69 = sibling(div_33, 2);
		var node_56 = child(div_69);
		Button(node_56, {
			variant: "outline",
			class: "h-8.5 rounded-xl cursor-pointer text-xs",
			onclick: closeModal,
			children: ($$anchor, $$slotProps) => {
				next();
				append($$anchor, text("Close"));
			},
			$$slots: { default: true }
		});
		var node_57 = sibling(node_56, 2);
		var consequent_26 = ($$anchor) => {
			{
				let $0 = user_derived(() => get(decisionAction) === "approve" ? "default" : "destructive");
				Button($$anchor, {
					get variant() {
						return get($0);
					},
					class: "h-8.5 rounded-xl cursor-pointer text-xs font-bold",
					get disabled() {
						return get(submittingDecision);
					},
					onclick: handleDecisionSubmit,
					children: ($$anchor, $$slotProps) => {
						var fragment_15 = comment();
						var node_58 = first_child(fragment_15);
						var consequent_25 = ($$anchor) => {
							var fragment_16 = root_26();
							Refresh_cw(first_child(fragment_16), { class: "h-3.5 w-3.5 animate-spin mr-1.5" });
							next(2);
							append($$anchor, fragment_16);
						};
						var alternate_9 = ($$anchor) => {
							append($$anchor, root_27());
						};
						if_block(node_58, ($$render) => {
							if (get(submittingDecision)) $$render(consequent_25);
							else $$render(alternate_9, -1);
						});
						append($$anchor, fragment_15);
					},
					$$slots: { default: true }
				});
			}
		};
		if_block(node_57, ($$render) => {
			if (get(selectedDispute) && (get(selectedDispute).status === "open" || get(selectedDispute).status === "pending")) $$render(consequent_26);
		});
		reset(div_69);
		reset(div_30);
		reset(div_29);
		template_effect(($0) => set_text(text_18, `Dispute Case ${$0 ?? ""}`), [() => get(selectedDispute)?.documentNumber || (get(selectedDispute) ? `TXSDISP${String(get(selectedDispute).id).padStart(6, "0")}` : "...")]);
		delegated("click", button_4, closeModal);
		append($$anchor, div_29);
	};
	if_block(node_28, ($$render) => {
		if (get(isModalOpen)) $$render(consequent_27);
	});
	template_effect(() => {
		set_text(text$1, get(dashboardData) ? get(dashboardData).total : "—");
		set_text(text_1, get(dashboardData) ? get(dashboardData).pending : "—");
		set_text(text_2, get(dashboardData) ? get(dashboardData).resolved : "—");
		set_text(text_3, get(dashboardData) ? get(dashboardData).rejected : "—");
		set_class(button, 1, `flex-1 md:flex-none px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${get(selectedStatus) === "all" ? "bg-card text-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"}`);
		set_class(button_1, 1, `flex-1 md:flex-none px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5 ${get(selectedStatus) === "pending" ? "bg-card text-amber-600 shadow-xs" : "text-muted-foreground hover:text-foreground"}`);
		set_class(button_2, 1, `flex-1 md:flex-none px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${get(selectedStatus) === "resolved" ? "bg-card text-emerald-600 shadow-xs" : "text-muted-foreground hover:text-foreground"}`);
		set_class(button_3, 1, `flex-1 md:flex-none px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${get(selectedStatus) === "rejected" ? "bg-card text-rose-600 shadow-xs" : "text-muted-foreground hover:text-foreground"}`);
	});
	delegated("click", button, () => {
		set(selectedStatus, "all");
		set(currentPage, 1);
		fetchDisputes();
	});
	delegated("click", button_1, () => {
		set(selectedStatus, "pending");
		set(currentPage, 1);
		fetchDisputes();
	});
	delegated("click", button_2, () => {
		set(selectedStatus, "resolved");
		set(currentPage, 1);
		fetchDisputes();
	});
	delegated("click", button_3, () => {
		set(selectedStatus, "rejected");
		set(currentPage, 1);
		fetchDisputes();
	});
	delegated("input", input, (e) => handleSearchInput(e.target.value));
	delegated("change", select, () => {
		set(currentPage, 1);
		fetchDisputes();
	});
	bind_select_value(select, () => get(sortVal), ($$value) => set(sortVal, $$value));
	append($$anchor, fragment);
	pop();
}
delegate([
	"click",
	"input",
	"change"
]);
//#endregion
export { _page as component };

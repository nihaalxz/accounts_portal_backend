import { B as append, Bt as reset, Ct as user_derived, D as head, H as from_html, I as if_block, K as delegate, N as each, Nt as pop, Pt as push, Q as get, R as set_text, _ as set_attribute, b as bind_select_value, bt as state, dt as $document, g as remove_input_defaults, gt as proxy, ht as sibling, it as effect, m as bind_value, mt as first_child, ot as template_effect, pt as child, q as delegated, r as onMount, vt as set, xt as update, zt as next } from "../chunks/dXkmWTgM.js";
import { t as goto } from "../chunks/jpiVHPnQ.js";
import "../chunks/DhaYE-8x.js";
import { t as apiFetch } from "../chunks/BbALOStj.js";
import { r as toast } from "../chunks/CbPRQHfn.js";
import { t as Arrow_left } from "../chunks/Bn7x0kyr.js";
import { t as Building_2 } from "../chunks/PAfPMPpZ.js";
import { t as Check } from "../chunks/blG6JRe7.js";
import { t as Chevron_left } from "../chunks/bgfi4Y0B.js";
import { t as Chevron_right } from "../chunks/BQLzQDdY.js";
import { t as Circle_alert } from "../chunks/CHXThoj_.js";
import { t as External_link } from "../chunks/ifddzD342.js";
import { t as Funnel } from "../chunks/BlRZ0F4U2.js";
import { t as Layers } from "../chunks/CFg-aOba2.js";
import { t as Refresh_cw } from "../chunks/DpTJy0Wb2.js";
import { t as Search } from "../chunks/D7t9qluE.js";
import { t as Button } from "../chunks/BhXsq3bC.js";
import "../chunks/BUIO9nrG.js";
import { t as MoneyDisplay } from "../chunks/CIVSRuaR.js";
import { t as DateDisplay } from "../chunks/CJpXG-QD.js";
import "../chunks/DysGkD62.js";
//#region src/routes/(app)/sales/pending-supplier-payments/+page.svelte
var root = from_html(`<span class="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-amber-600 text-white"> </span>`);
var root_1 = from_html(`<!> Reload`, 1);
var root_2 = from_html(`<div class="bg-card border border-border rounded-2xl p-6 h-80 flex items-center justify-center"><!></div>`);
var root_3 = from_html(`<div class="bg-card border border-border rounded-2xl p-16 text-center flex flex-col items-center gap-3"><div class="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-900/20"><!></div> <p class="font-bold text-foreground text-sm">All clear!</p> <p class="text-xs text-muted-foreground"> </p></div>`);
var root_4 = from_html(`<span class="text-[9px] font-mono text-muted-foreground"> </span>`);
var root_5 = from_html(`<p class="text-[10px] text-muted-foreground truncate"> </p>`);
var root_6 = from_html(`<div class="px-4 py-3.5 flex flex-col sm:flex-row sm:items-center gap-3 hover:bg-muted/10 transition-colors"><div class="flex-1 min-w-0 space-y-0.5"><div class="flex items-center gap-2 flex-wrap"><span class="font-semibold text-foreground text-xs"> </span> <span class="px-1.5 py-0.5 rounded text-[9px] font-semibold uppercase bg-muted text-muted-foreground"> </span> <!></div> <!> <p class="text-[10px] text-muted-foreground">Submitted by <strong class="text-foreground"> </strong> · <!></p></div> <div class="flex items-center gap-3 shrink-0"><span class="font-mono font-bold text-sm text-rose-600 dark:text-rose-400"><!></span></div></div>`);
var root_7 = from_html(`<div class="bg-card border border-border rounded-2xl shadow-xs overflow-hidden transition-all hover:border-amber-300/60 hover:shadow-md"><div class="px-4 py-3 bg-muted/20 border-b border-border flex flex-col sm:flex-row sm:items-center gap-2 justify-between"><div class="flex items-center gap-3 min-w-0"><div class="p-2 rounded-xl bg-amber-500/10 text-amber-600 border border-amber-200/60 shrink-0"><!></div> <div class="min-w-0"><div class="flex items-center gap-2 flex-wrap"><span class="font-mono font-bold text-sm text-foreground"> </span> <span class="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200"> </span> <span class="px-2 py-0.5 rounded-full text-[9px] font-bold bg-amber-50 text-amber-700 border border-amber-200"> </span></div> <p class="text-[10px] text-muted-foreground mt-0.5">Combined: <span class="font-bold text-foreground font-mono"><!></span> · Since <!></p></div></div> <a class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary font-semibold text-xs transition-colors cursor-pointer shrink-0 self-start sm:self-auto"><!> View Full Booking</a></div> <div class="divide-y divide-border/60"></div></div>`);
var root_8 = from_html(`<!> Prev`, 1);
var root_9 = from_html(`Next <!>`, 1);
var root_10 = from_html(`<div class="flex items-center justify-between text-xs pt-2"><span class="text-muted-foreground"> </span> <div class="flex gap-2"><!> <!></div></div>`);
var root_11 = from_html(`<div class="space-y-4"></div> <!>`, 1);
var root_12 = from_html(`<div class="space-y-6"><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"><div class="flex items-start gap-3"><button class="mt-1 p-1.5 rounded-lg border border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer shrink-0" title="Back to Dashboard"><!></button> <div><h1 class="text-xl font-bold text-foreground flex items-center gap-2"><!> Pending Supplier Payment Approvals <!></h1> <p class="text-xs text-muted-foreground mt-0.5">Review supplier payment requests submitted by Operations Portal staff.</p></div></div> <!></div> <div class="flex items-start gap-2.5 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 text-amber-800 dark:text-amber-300 rounded-2xl p-4 text-xs"><!> <div><strong class="font-bold">Workflow:</strong> When Operations Portal staff submit supplier fees (e.g. Govt fees, VFS fees), they appear here grouped by booking document.</div></div> <div class="bg-card border border-border rounded-2xl p-4 flex flex-col sm:flex-row gap-3"><div class="relative flex-1"><!> <input type="text" placeholder="Search by document number, supplier, or requester name..." class="w-full text-xs pl-10 pr-4 py-2 border border-border rounded-xl bg-background text-foreground placeholder-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20"/></div> <div class="flex items-center gap-2"><!> <select class="h-9.5 bg-background border border-border rounded-xl px-3 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground font-semibold"><option> </option><option>Flights</option><option>Hotels</option><option>Visa</option><option>VFS Appointments</option><option>Holiday Packages</option><option>Transportation</option><option>Other Services</option></select></div></div> <!></div>`);
function _page($$anchor, $$props) {
	push($$props, true);
	let bookingGroups = state(proxy([]));
	let loading = state(true);
	let searchVal = state("");
	let selectedService = state("all");
	let currentPage = state(1);
	const pageSize = 15;
	function getServiceLabel(type) {
		const clean = (type ?? "").toLowerCase().replace(/_/g, "").trim();
		if (clean.includes("vfs")) return "VFS";
		if (clean.includes("flight")) return "Flight";
		if (clean.includes("hotel")) return "Hotel";
		if (clean.includes("visa")) return "Visa";
		if (clean.includes("holiday") || clean.includes("package")) return "Holiday";
		if (clean.includes("transport")) return "Transport";
		if (clean.includes("other")) return "Other Service";
		return type || "Booking";
	}
	function getBookingPath(serviceType, externalReference) {
		const clean = (serviceType ?? "").toLowerCase().replace(/_/g, "").trim();
		let svcPath = "visa";
		if (clean.includes("vfs")) svcPath = "vfs";
		else if (clean.includes("flight")) svcPath = "flights";
		else if (clean.includes("hotel")) svcPath = "hotels";
		else if (clean.includes("holiday") || clean.includes("package")) svcPath = "holiday";
		else if (clean.includes("transport")) svcPath = "transportation";
		else if (clean.includes("other")) svcPath = "other-services";
		return `/sales/bookings/${svcPath}/${externalReference}`;
	}
	async function loadData() {
		set(loading, true);
		try {
			const result = await apiFetch("api/supplier-payments/pending-bookings");
			set(bookingGroups, result || [], true);
		} catch (err) {
			toast.error(err?.message || "Failed to load pending supplier payments.");
		} finally {
			set(loading, false);
		}
	}
	const filteredGroups = user_derived(() => {
		let list = get(bookingGroups);
		if (get(selectedService) !== "all") list = list.filter((g) => {
			const clean = (g.serviceType ?? "").toLowerCase();
			if (get(selectedService) === "flights") return clean.includes("flight");
			if (get(selectedService) === "hotels") return clean.includes("hotel");
			if (get(selectedService) === "visa") return clean.includes("visa") && !clean.includes("vfs");
			if (get(selectedService) === "vfs") return clean.includes("vfs");
			if (get(selectedService) === "holiday-packages") return clean.includes("holiday") || clean.includes("package");
			if (get(selectedService) === "transportation") return clean.includes("transport");
			if (get(selectedService) === "other-services") return clean.includes("other");
			return true;
		});
		if (get(searchVal).trim()) {
			const q = get(searchVal).toLowerCase().trim();
			list = list.filter((g) => g.externalReference.toLowerCase().includes(q) || (g.documentNumber ?? "").toLowerCase().includes(q) || g.serviceType.toLowerCase().includes(q) || g.payments.some((p) => p.supplierName.toLowerCase().includes(q) || (p.referenceNumber ?? "").toLowerCase().includes(q) || p.requestedByName.toLowerCase().includes(q)));
		}
		return list;
	});
	const totalPages = user_derived(() => Math.ceil(get(filteredGroups).length / pageSize) || 1);
	const paginatedGroups = user_derived(() => {
		const start = (get(currentPage) - 1) * pageSize;
		return get(filteredGroups).slice(start, start + pageSize);
	});
	const totalPendingCount = user_derived(() => get(bookingGroups).reduce((s, g) => s + g.count, 0));
	onMount(() => {
		loadData();
	});
	var div = root_12();
	head("1ncx5eb", ($$anchor) => {
		effect(() => {
			$document.title = "Pending Supplier Payment Approvals — Accounts Portal";
		});
	});
	var div_1 = child(div);
	var div_2 = child(div_1);
	var button = child(div_2);
	Arrow_left(child(button), { class: "h-3.5 w-3.5" });
	reset(button);
	var div_3 = sibling(button, 2);
	var h1 = child(div_3);
	var node_1 = child(h1);
	Building_2(node_1, { class: "h-5 w-5 text-amber-600" });
	var node_2 = sibling(node_1, 2);
	var consequent = ($$anchor) => {
		var span = root();
		var text = child(span, true);
		reset(span);
		template_effect(() => set_text(text, get(totalPendingCount)));
		append($$anchor, span);
	};
	if_block(node_2, ($$render) => {
		if (get(totalPendingCount) > 0) $$render(consequent);
	});
	reset(h1);
	next(2);
	reset(div_3);
	reset(div_2);
	Button(sibling(div_2, 2), {
		variant: "outline",
		class: "h-8.5 rounded-xl cursor-pointer flex items-center gap-1.5 text-xs font-semibold self-start sm:self-auto shrink-0",
		onclick: loadData,
		get disabled() {
			return get(loading);
		},
		children: ($$anchor, $$slotProps) => {
			var fragment = root_1();
			var node_4 = first_child(fragment);
			{
				let $0 = user_derived(() => ["h-3.5 w-3.5", get(loading) ? "animate-spin" : ""].join(" "));
				Refresh_cw(node_4, { get class() {
					return get($0);
				} });
			}
			next();
			append($$anchor, fragment);
		},
		$$slots: { default: true }
	});
	reset(div_1);
	var div_4 = sibling(div_1, 2);
	Circle_alert(child(div_4), { class: "h-4 w-4 shrink-0 mt-0.5 text-amber-500" });
	next(2);
	reset(div_4);
	var div_5 = sibling(div_4, 2);
	var div_6 = child(div_5);
	var node_6 = child(div_6);
	Search(node_6, { class: "absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/60" });
	var input = sibling(node_6, 2);
	remove_input_defaults(input);
	reset(div_6);
	var div_7 = sibling(div_6, 2);
	var node_7 = child(div_7);
	Funnel(node_7, { class: "h-4 w-4 text-muted-foreground/60 shrink-0" });
	var select = sibling(node_7, 2);
	var option = child(select);
	var text_1 = child(option);
	reset(option);
	option.value = option.__value = "all";
	var option_1 = sibling(option);
	option_1.value = option_1.__value = "flights";
	var option_2 = sibling(option_1);
	option_2.value = option_2.__value = "hotels";
	var option_3 = sibling(option_2);
	option_3.value = option_3.__value = "visa";
	var option_4 = sibling(option_3);
	option_4.value = option_4.__value = "vfs";
	var option_5 = sibling(option_4);
	option_5.value = option_5.__value = "holiday-packages";
	var option_6 = sibling(option_5);
	option_6.value = option_6.__value = "transportation";
	var option_7 = sibling(option_6);
	option_7.value = option_7.__value = "other-services";
	reset(select);
	reset(div_7);
	reset(div_5);
	var node_8 = sibling(div_5, 2);
	var consequent_1 = ($$anchor) => {
		var div_8 = root_2();
		Refresh_cw(child(div_8), { class: "h-8 w-8 text-primary animate-spin" });
		reset(div_8);
		append($$anchor, div_8);
	};
	var consequent_2 = ($$anchor) => {
		var div_9 = root_3();
		var div_10 = child(div_9);
		Check(child(div_10), { class: "h-8 w-8 text-emerald-500" });
		reset(div_10);
		var p_1 = sibling(div_10, 4);
		var text_2 = child(p_1);
		reset(p_1);
		reset(div_9);
		template_effect(() => set_text(text_2, `No pending supplier payment approvals${get(selectedService) !== "all" || get(searchVal) ? " matching your filters" : ""}.`));
		append($$anchor, div_9);
	};
	var alternate = ($$anchor) => {
		var fragment_1 = root_11();
		var div_11 = first_child(fragment_1);
		each(div_11, 21, () => get(paginatedGroups), (group) => group.externalReference + "|" + group.serviceType, ($$anchor, group) => {
			var div_12 = root_7();
			var div_13 = child(div_12);
			var div_14 = child(div_13);
			var div_15 = child(div_14);
			Layers(child(div_15), { class: "h-4 w-4" });
			reset(div_15);
			var div_16 = sibling(div_15, 2);
			var div_17 = child(div_16);
			var span_1 = child(div_17);
			var text_3 = child(span_1, true);
			reset(span_1);
			var span_2 = sibling(span_1, 2);
			var text_4 = child(span_2, true);
			reset(span_2);
			var span_3 = sibling(span_2, 2);
			var text_5 = child(span_3);
			reset(span_3);
			reset(div_17);
			var p_2 = sibling(div_17, 2);
			var span_4 = sibling(child(p_2));
			MoneyDisplay(child(span_4), { get amount() {
				return get(group).totalAmount;
			} });
			reset(span_4);
			DateDisplay(sibling(span_4, 2), { get value() {
				return get(group).earliestDate;
			} });
			reset(p_2);
			reset(div_16);
			reset(div_14);
			var a = sibling(div_14, 2);
			External_link(child(a), { class: "h-3 w-3" });
			next();
			reset(a);
			reset(div_13);
			var div_18 = sibling(div_13, 2);
			each(div_18, 21, () => get(group).payments, (payment) => payment.id, ($$anchor, payment) => {
				var div_19 = root_6();
				var div_20 = child(div_19);
				var div_21 = child(div_20);
				var span_5 = child(div_21);
				var text_6 = child(span_5, true);
				reset(span_5);
				var span_6 = sibling(span_5, 2);
				var text_7 = child(span_6, true);
				reset(span_6);
				var node_15 = sibling(span_6, 2);
				var consequent_3 = ($$anchor) => {
					var span_7 = root_4();
					var text_8 = child(span_7);
					reset(span_7);
					template_effect(() => set_text(text_8, `Ref: ${get(payment).referenceNumber ?? ""}`));
					append($$anchor, span_7);
				};
				if_block(node_15, ($$render) => {
					if (get(payment).referenceNumber) $$render(consequent_3);
				});
				reset(div_21);
				var node_16 = sibling(div_21, 2);
				var consequent_4 = ($$anchor) => {
					var p_3 = root_5();
					var text_9 = child(p_3, true);
					reset(p_3);
					template_effect(() => {
						set_attribute(p_3, "title", get(payment).description);
						set_text(text_9, get(payment).description);
					});
					append($$anchor, p_3);
				};
				if_block(node_16, ($$render) => {
					if (get(payment).description) $$render(consequent_4);
				});
				var p_4 = sibling(node_16, 2);
				var strong = sibling(child(p_4));
				var text_10 = child(strong, true);
				reset(strong);
				DateDisplay(sibling(strong, 2), { get value() {
					return get(payment).requestedAt;
				} });
				reset(p_4);
				reset(div_20);
				var div_22 = sibling(div_20, 2);
				var span_8 = child(div_22);
				MoneyDisplay(child(span_8), { get amount() {
					return get(payment).amount;
				} });
				reset(span_8);
				reset(div_22);
				reset(div_19);
				template_effect(() => {
					set_text(text_6, get(payment).supplierName);
					set_text(text_7, get(payment).sourceBankName || get(payment).sourceAccountName ? `${get(payment).paymentMethod} (${get(payment).sourceBankName || get(payment).sourceAccountName})` : get(payment).paymentMethod);
					set_text(text_10, get(payment).requestedByName);
				});
				append($$anchor, div_19);
			});
			reset(div_18);
			reset(div_12);
			template_effect(($0, $1) => {
				set_text(text_3, get(group).documentNumber || get(group).externalReference || "—");
				set_text(text_4, $0);
				set_text(text_5, `${get(group).count ?? ""} pending`);
				set_attribute(a, "href", $1);
			}, [() => getServiceLabel(get(group).serviceType), () => getBookingPath(get(group).serviceType, get(group).externalReference)]);
			append($$anchor, div_12);
		});
		reset(div_11);
		var node_19 = sibling(div_11, 2);
		var consequent_5 = ($$anchor) => {
			var div_23 = root_10();
			var span_9 = child(div_23);
			var text_11 = child(span_9);
			reset(span_9);
			var div_24 = sibling(span_9, 2);
			var node_20 = child(div_24);
			{
				let $0 = user_derived(() => get(currentPage) <= 1);
				Button(node_20, {
					variant: "outline",
					class: "h-8.5 cursor-pointer rounded-xl px-2.5",
					get disabled() {
						return get($0);
					},
					onclick: () => update(currentPage, -1),
					children: ($$anchor, $$slotProps) => {
						var fragment_2 = root_8();
						Chevron_left(first_child(fragment_2), { class: "h-3 w-3 mr-1" });
						next();
						append($$anchor, fragment_2);
					},
					$$slots: { default: true }
				});
			}
			var node_22 = sibling(node_20, 2);
			{
				let $0 = user_derived(() => get(currentPage) >= get(totalPages));
				Button(node_22, {
					variant: "outline",
					class: "h-8.5 cursor-pointer rounded-xl px-2.5",
					get disabled() {
						return get($0);
					},
					onclick: () => update(currentPage),
					children: ($$anchor, $$slotProps) => {
						next();
						var fragment_3 = root_9();
						Chevron_right(sibling(first_child(fragment_3)), { class: "h-3 w-3 ml-1" });
						append($$anchor, fragment_3);
					},
					$$slots: { default: true }
				});
			}
			reset(div_24);
			reset(div_23);
			template_effect(() => set_text(text_11, `Page ${get(currentPage) ?? ""} of ${get(totalPages) ?? ""} · ${get(filteredGroups).length ?? ""} booking group${get(filteredGroups).length === 1 ? "" : "s"}`));
			append($$anchor, div_23);
		};
		if_block(node_19, ($$render) => {
			if (get(totalPages) > 1) $$render(consequent_5);
		});
		append($$anchor, fragment_1);
	};
	if_block(node_8, ($$render) => {
		if (get(loading)) $$render(consequent_1);
		else if (get(filteredGroups).length === 0) $$render(consequent_2, 1);
		else $$render(alternate, -1);
	});
	reset(div);
	template_effect(() => set_text(text_1, `All Service Types (${get(bookingGroups).length ?? ""} bookings)`));
	delegated("click", button, () => goto("/dashboard"));
	delegated("input", input, () => set(currentPage, 1));
	bind_value(input, () => get(searchVal), ($$value) => set(searchVal, $$value));
	delegated("change", select, () => set(currentPage, 1));
	bind_select_value(select, () => get(selectedService), ($$value) => set(selectedService, $$value));
	append($$anchor, div);
	pop();
}
delegate([
	"click",
	"input",
	"change"
]);
//#endregion
export { _page as component };

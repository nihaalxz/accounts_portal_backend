import { B as append, Bt as reset, Ct as user_derived, D as head, H as from_html, I as if_block, N as each, Nt as pop, P as index, Pt as push, Q as get, R as set_text, _ as set_attribute, b as bind_select_value, bt as state, dt as $document, g as remove_input_defaults, gt as proxy, ht as sibling, it as effect, m as bind_value, mt as first_child, n as onDestroy, ot as template_effect, pt as child, r as onMount, vt as set, xt as update, zt as next } from "../chunks/dXkmWTgM.js";
import "../chunks/DhaYE-8x.js";
import { t as apiFetch } from "../chunks/Cxdu26YR.js";
import { r as toast } from "../chunks/CbPRQHfn.js";
import { t as Chevron_left } from "../chunks/bgfi4Y0B.js";
import { t as Chevron_right } from "../chunks/BQLzQDdY2.js";
import { t as Download } from "../chunks/D8w6XH0S2.js";
import { t as Eye } from "../chunks/CTzUc-eH2.js";
import { t as Funnel } from "../chunks/BlRZ0F4U2.js";
import { t as Printer } from "../chunks/Ds2DlsUi.js";
import { t as Refresh_cw } from "../chunks/DpTJy0Wb.js";
import { t as Search } from "../chunks/D7t9qluE.js";
import { t as Shopping_bag } from "../chunks/CIvqk5ku.js";
import { t as Button } from "../chunks/BhXsq3bC.js";
import "../chunks/ryGQbSnK.js";
import { t as MoneyDisplay } from "../chunks/CIVSRuaR2.js";
import { t as DateDisplay } from "../chunks/DeM3dT312.js";
import "../chunks/D-6PwnbV2.js";
import { t as exportToCSV } from "../chunks/C74Z4VDd2.js";
import { t as previewDocument } from "../chunks/ICpB7h0d2.js";
import { t as SalesEntriesRealtimeController } from "../chunks/tToFhCDI.js";
//#region src/routes/(app)/sales/pending/+page.svelte
var root = from_html(`<span class="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-blue-600 text-white"> </span>`);
var root_1 = from_html(`<!> <span>CSV Export</span>`, 1);
var root_2 = from_html(`<!> <span>Print</span>`, 1);
var root_3 = from_html(`<!> <span>Reload</span>`, 1);
var root_4 = from_html(`<div class="bg-card border border-border rounded-2xl p-6 h-96 flex items-center justify-center animate-pulse"><!></div>`);
var root_5 = from_html(`<tr class="hover:bg-muted/10 transition-colors"><td class="p-4 font-mono font-bold text-foreground"><a class="hover:underline hover:text-primary cursor-pointer outline-none font-bold font-mono"> </a></td><td class="p-4 uppercase font-semibold text-muted-foreground"><span class="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200"> </span></td><td class="p-4"><span class="font-bold text-foreground block"> </span> <span class="block text-[9px] text-muted-foreground capitalize mt-0.5"> </span></td><td class="p-4 font-mono font-bold text-right text-foreground"><!></td><td class="p-4 capitalize font-semibold text-muted-foreground"> </td><td class="p-4 text-center"><span class="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold capitalize bg-amber-50 text-amber-700 border border-amber-200"> </span></td><td class="p-4 font-mono text-muted-foreground"><!></td><td class="p-4 text-center print:hidden"><a class="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary font-semibold text-xs transition-colors cursor-pointer" title="View Details"><!> <span>View</span></a></td></tr>`);
var root_6 = from_html(`<!> Prev`, 1);
var root_7 = from_html(`Next <!>`, 1);
var root_8 = from_html(`<div class="bg-card border border-border rounded-2xl overflow-x-auto shadow-xs print:border-none print:shadow-none max-w-full"><table class="w-full min-w-[750px] text-left border-collapse text-xs"><thead><tr class="bg-muted/30 border-b border-border text-muted-foreground font-semibold print:bg-transparent"><th class="p-4 w-36">Document Ref</th><th class="p-4 w-32">Service Type</th><th class="p-4">Customer Name</th><th class="p-4 text-right">Payable Amount</th><th class="p-4">Payment Method</th><th class="p-4 text-center">Status</th><th class="p-4 w-32">Logged Date</th><th class="p-4 w-28 text-center print:hidden">Action</th></tr></thead><tbody class="divide-y divide-border/60"></tbody></table></div> <div class="flex items-center justify-between text-xs pt-4 print:hidden"><span class="text-muted-foreground"> </span> <div class="flex gap-2"><!> <!></div></div>`, 1);
var root_9 = from_html(`<div class="bg-card border border-border rounded-2xl p-16 text-center text-muted-foreground text-xs print:hidden">No pending sales entries found matching filters.</div>`);
var root_10 = from_html(`<div class="space-y-6 print:space-y-0 print:p-0"><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 print:hidden"><div class="flex flex-col gap-1"><h1 class="text-xl font-bold text-foreground font-sans flex items-center gap-2"><!> Pending Sales Entries Workspace <!></h1> <p class="text-xs text-muted-foreground">Review unposted sales entry bookings submitted by sales reps across all services.</p></div> <div class="flex flex-wrap gap-2.5"><!> <!> <!></div></div> <div class="bg-card border border-border rounded-2xl p-4 flex flex-col sm:flex-row gap-3 print:hidden"><div class="relative flex-1"><!> <input type="text" placeholder="Search by Document Ref, Customer Name, Service Type..." class="w-full text-xs pl-10 pr-4 py-2 border border-border rounded-xl bg-background text-foreground placeholder-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20"/></div> <div class="flex items-center gap-2"><!> <select class="h-9.5 bg-background border border-border rounded-xl px-3 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground font-semibold"><option> </option><option>Flights</option><option>Hotels</option><option>Visa</option><option>VFS Appointments</option><option>Holiday Packages</option><option>Transportation</option><option>Other Services</option></select></div></div> <!></div>`);
function _page($$anchor, $$props) {
	push($$props, true);
	let pendingItems = state(proxy([]));
	let loading = state(true);
	let searchVal = state("");
	let selectedService = state("all");
	let currentPage = state(1);
	let pageSize = 15;
	let realtimeController = null;
	function getServiceLabel(type) {
		const clean = (type ?? "").toLowerCase().replace(/_/g, "").trim();
		if (clean.includes("flight")) return "Flight";
		if (clean.includes("hotel")) return "Hotel";
		if (clean.includes("visa")) return "Visa";
		if (clean.includes("vfs")) return "VFS";
		if (clean.includes("holiday") || clean.includes("package")) return "Holiday";
		if (clean.includes("transport")) return "Transport";
		if (clean.includes("other")) return "Other Service";
		return type;
	}
	async function fetchPendingSalesEntries() {
		set(loading, true);
		try {
			const [flights, hotels, visa, vfs, holidays, transport, others] = await Promise.all([
				apiFetch("api/sales-entries/flights?status=pending&pageSize=1000").catch(() => null),
				apiFetch("api/sales-entries/hotels?status=pending&pageSize=1000").catch(() => null),
				apiFetch("api/sales-entries/visa?status=pending&pageSize=1000").catch(() => null),
				apiFetch("api/sales-entries/vfs?status=pending&pageSize=1000").catch(() => null),
				apiFetch("api/sales-entries/holiday-packages?status=pending&pageSize=1000").catch(() => null),
				apiFetch("api/sales-entries/transportation?status=pending&pageSize=1000").catch(() => null),
				apiFetch("api/sales-entries/other-services?status=pending&pageSize=1000").catch(() => null)
			]);
			const combined = [];
			const processList = (res, serviceType) => {
				if (!res || !res.items) return;
				for (const item of res.items) {
					if ((item.paymentStatus || item.status || "").toLowerCase().trim() !== "pending") continue;
					combined.push({
						id: item.id,
						bookingId: item.id,
						documentNumber: item.documentNumber || "",
						serviceType,
						headName: item.headName || item.guestName || item.passengerName || item.name || "—",
						clientType: item.clientType || "customer",
						amount: item.payableAmount ?? item.amount ?? 0,
						paymentMethod: item.paymentMethod || item.paymentMode || "",
						status: item.paymentStatus || item.status || "pending",
						createdAt: item.createdAt,
						rawItem: item
					});
				}
			};
			processList(flights, "flights");
			processList(hotels, "hotels");
			processList(visa, "visa");
			processList(vfs, "vfs");
			processList(holidays, "holiday-packages");
			processList(transport, "transportation");
			processList(others, "other-services");
			combined.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
			set(pendingItems, combined, true);
		} catch (err) {
			console.error("Failed to load pending sales entries:", err);
			toast.error("Failed to load pending sales entries.");
		} finally {
			set(loading, false);
		}
	}
	const filteredItems = user_derived(() => () => {
		let list = get(pendingItems);
		if (get(selectedService) !== "all") list = list.filter((item) => item.serviceType === get(selectedService));
		if (get(searchVal).trim()) {
			const query = get(searchVal).toLowerCase().trim();
			list = list.filter((item) => String(item.id).includes(query) || item.documentNumber && item.documentNumber.toLowerCase().includes(query) || item.headName.toLowerCase().includes(query) || item.serviceType.toLowerCase().includes(query) || item.paymentMethod.toLowerCase().includes(query));
		}
		return list;
	});
	const paginatedItems = user_derived(() => () => {
		const list = get(filteredItems)();
		const start = (get(currentPage) - 1) * pageSize;
		return list.slice(start, start + pageSize);
	});
	const totalPages = user_derived(() => () => Math.ceil(get(filteredItems)().length / pageSize) || 1);
	onMount(async () => {
		await fetchPendingSalesEntries();
		realtimeController = new SalesEntriesRealtimeController(() => fetchPendingSalesEntries(), 300);
		await realtimeController.mount();
	});
	onDestroy(() => {
		realtimeController?.unmount();
	});
	function exportToCSV$1() {
		const items = get(filteredItems)();
		if (items.length === 0) {
			toast.info("No pending entries available to export.");
			return;
		}
		exportToCSV("pending_sales_entries_export.csv", [
			"Document Ref",
			"Service Type",
			"Customer/Head Name",
			"Client Type",
			"Amount (BHD)",
			"Payment Method",
			"Status",
			"Logged Date"
		], items.map((row) => [
			row.documentNumber || row.id,
			getServiceLabel(row.serviceType),
			row.headName || "",
			row.clientType || "",
			row.amount,
			row.paymentMethod || "",
			row.status || "",
			row.createdAt ? row.createdAt.split("T")[0] : ""
		]));
		toast.success("CSV exported successfully.");
	}
	var div = root_10();
	head("56cpw2", ($$anchor) => {
		effect(() => {
			$document.title = "Pending Sales Entries — Accounts Portal";
		});
	});
	var div_1 = child(div);
	var div_2 = child(div_1);
	var h1 = child(div_2);
	var node = child(h1);
	Shopping_bag(node, { class: "h-5 w-5 text-primary" });
	var node_1 = sibling(node, 2);
	var consequent = ($$anchor) => {
		var span = root();
		var text = child(span, true);
		reset(span);
		template_effect(() => set_text(text, get(pendingItems).length));
		append($$anchor, span);
	};
	if_block(node_1, ($$render) => {
		if (get(pendingItems).length > 0) $$render(consequent);
	});
	reset(h1);
	next(2);
	reset(div_2);
	var div_3 = sibling(div_2, 2);
	var node_2 = child(div_3);
	Button(node_2, {
		variant: "outline",
		class: "h-8.5 rounded-xl cursor-pointer flex items-center gap-1.5 text-xs font-semibold",
		onclick: exportToCSV$1,
		children: ($$anchor, $$slotProps) => {
			var fragment = root_1();
			Download(first_child(fragment), { class: "h-3.5 w-3.5" });
			next(2);
			append($$anchor, fragment);
		},
		$$slots: { default: true }
	});
	var node_4 = sibling(node_2, 2);
	Button(node_4, {
		variant: "outline",
		class: "h-8.5 rounded-xl cursor-pointer flex items-center gap-1.5 text-xs font-semibold",
		onclick: () => {
			previewDocument("list", "pending", {
				searchTerm: get(searchVal),
				serviceType: get(selectedService)
			});
			toast.info("Generating print document...");
		},
		children: ($$anchor, $$slotProps) => {
			var fragment_1 = root_2();
			Printer(first_child(fragment_1), { class: "h-3.5 w-3.5" });
			next(2);
			append($$anchor, fragment_1);
		},
		$$slots: { default: true }
	});
	Button(sibling(node_4, 2), {
		variant: "outline",
		class: "h-8.5 rounded-xl cursor-pointer flex items-center gap-1.5 text-xs font-semibold",
		onclick: fetchPendingSalesEntries,
		get disabled() {
			return get(loading);
		},
		children: ($$anchor, $$slotProps) => {
			var fragment_2 = root_3();
			var node_7 = first_child(fragment_2);
			{
				let $0 = user_derived(() => ["h-3.5 w-3.5", get(loading) ? "animate-spin" : ""].join(" "));
				Refresh_cw(node_7, { get class() {
					return get($0);
				} });
			}
			next(2);
			append($$anchor, fragment_2);
		},
		$$slots: { default: true }
	});
	reset(div_3);
	reset(div_1);
	var div_4 = sibling(div_1, 2);
	var div_5 = child(div_4);
	var node_8 = child(div_5);
	Search(node_8, { class: "absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/60" });
	var input = sibling(node_8, 2);
	remove_input_defaults(input);
	reset(div_5);
	var div_6 = sibling(div_5, 2);
	var node_9 = child(div_6);
	Funnel(node_9, { class: "h-4 w-4 text-muted-foreground/60" });
	var select = sibling(node_9, 2);
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
	reset(div_6);
	reset(div_4);
	var node_10 = sibling(div_4, 2);
	var consequent_1 = ($$anchor) => {
		var div_7 = root_4();
		Refresh_cw(child(div_7), { class: "h-8 w-8 text-primary animate-spin" });
		reset(div_7);
		append($$anchor, div_7);
	};
	var consequent_2 = ($$anchor) => {
		var fragment_3 = root_8();
		var div_8 = first_child(fragment_3);
		var table = child(div_8);
		var tbody = sibling(child(table));
		each(tbody, 21, () => get(paginatedItems)(), index, ($$anchor, row) => {
			var tr = root_5();
			var td = child(tr);
			var a_1 = child(td);
			var text_2 = child(a_1, true);
			reset(a_1);
			reset(td);
			var td_1 = sibling(td);
			var span_1 = child(td_1);
			var text_3 = child(span_1, true);
			reset(span_1);
			reset(td_1);
			var td_2 = sibling(td_1);
			var span_2 = child(td_2);
			var text_4 = child(span_2, true);
			reset(span_2);
			var span_3 = sibling(span_2, 2);
			var text_5 = child(span_3, true);
			reset(span_3);
			reset(td_2);
			var td_3 = sibling(td_2);
			MoneyDisplay(child(td_3), { get amount() {
				return get(row).amount;
			} });
			reset(td_3);
			var td_4 = sibling(td_3);
			var text_6 = child(td_4, true);
			reset(td_4);
			var td_5 = sibling(td_4);
			var span_4 = child(td_5);
			var text_7 = child(span_4, true);
			reset(span_4);
			reset(td_5);
			var td_6 = sibling(td_5);
			DateDisplay(child(td_6), { get value() {
				return get(row).createdAt;
			} });
			reset(td_6);
			var td_7 = sibling(td_6);
			var a_2 = child(td_7);
			Eye(child(a_2), { class: "h-3.5 w-3.5" });
			next(2);
			reset(a_2);
			reset(td_7);
			reset(tr);
			template_effect(($0) => {
				set_attribute(a_1, "href", `/sales/bookings/${get(row).serviceType}/${get(row).id}`);
				set_text(text_2, get(row).documentNumber || `#${get(row).id}`);
				set_text(text_3, $0);
				set_text(text_4, get(row).headName);
				set_text(text_5, get(row).clientType);
				set_text(text_6, get(row).sourceBankName || get(row).sourceAccountName ? `${get(row).paymentMethod} (${get(row).sourceBankName || get(row).sourceAccountName})` : get(row).paymentMethod || "—");
				set_text(text_7, get(row).status);
				set_attribute(a_2, "href", `/sales/bookings/${get(row).serviceType}/${get(row).id}`);
			}, [() => getServiceLabel(get(row).serviceType)]);
			append($$anchor, tr);
		});
		reset(tbody);
		reset(table);
		reset(div_8);
		var div_9 = sibling(div_8, 2);
		var span_5 = child(div_9);
		var text_8 = child(span_5);
		reset(span_5);
		var div_10 = sibling(span_5, 2);
		var node_15 = child(div_10);
		{
			let $0 = user_derived(() => get(currentPage) <= 1);
			Button(node_15, {
				variant: "outline",
				class: "h-8.5 cursor-pointer rounded-xl px-2.5",
				get disabled() {
					return get($0);
				},
				onclick: () => update(currentPage, -1),
				children: ($$anchor, $$slotProps) => {
					var fragment_4 = root_6();
					Chevron_left(first_child(fragment_4), { class: "h-3 w-3 mr-1" });
					next();
					append($$anchor, fragment_4);
				},
				$$slots: { default: true }
			});
		}
		var node_17 = sibling(node_15, 2);
		{
			let $0 = user_derived(() => get(currentPage) >= get(totalPages)());
			Button(node_17, {
				variant: "outline",
				class: "h-8.5 cursor-pointer rounded-xl px-2.5",
				get disabled() {
					return get($0);
				},
				onclick: () => update(currentPage),
				children: ($$anchor, $$slotProps) => {
					next();
					var fragment_5 = root_7();
					Chevron_right(sibling(first_child(fragment_5)), { class: "h-3 w-3 ml-1" });
					append($$anchor, fragment_5);
				},
				$$slots: { default: true }
			});
		}
		reset(div_10);
		reset(div_9);
		template_effect(($0, $1) => set_text(text_8, `Page ${get(currentPage) ?? ""} of ${$0 ?? ""} (${$1 ?? ""} pending entries)`), [() => get(totalPages)(), () => get(filteredItems)().length]);
		append($$anchor, fragment_3);
	};
	var d = user_derived(() => get(filteredItems)().length > 0);
	var alternate = ($$anchor) => {
		append($$anchor, root_9());
	};
	if_block(node_10, ($$render) => {
		if (get(loading)) $$render(consequent_1);
		else if (get(d)) $$render(consequent_2, 1);
		else $$render(alternate, -1);
	});
	reset(div);
	template_effect(() => set_text(text_1, `All Service Types (${get(pendingItems).length ?? ""})`));
	bind_value(input, () => get(searchVal), ($$value) => set(searchVal, $$value));
	bind_select_value(select, () => get(selectedService), ($$value) => set(selectedService, $$value));
	append($$anchor, div);
	pop();
}
//#endregion
export { _page as component };

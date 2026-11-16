import { B as append, Bt as reset, Ct as user_derived, D as head, G as text, H as from_html, I as if_block, K as delegate, N as each, Nt as pop, P as index, Pt as push, Q as get, R as set_text, S as select_option, _ as set_attribute, b as bind_select_value, bt as state, dt as $document, g as remove_input_defaults, gt as proxy, ht as sibling, it as effect, m as bind_value, mt as first_child, ot as template_effect, pt as child, q as delegated, r as onMount, v as set_checked, vt as set, w as set_class, x as init_select, xt as update, y as set_value, zt as next } from "../chunks/dXkmWTgM.js";
import "../chunks/DhaYE-8x.js";
import { t as apiFetch } from "../chunks/BjifOgip.js";
import { r as toast } from "../chunks/CbPRQHfn.js";
import { t as Chevron_left } from "../chunks/bgfi4Y0B2.js";
import { t as Chevron_right } from "../chunks/BQLzQDdY2.js";
import { t as Download } from "../chunks/D8w6XH0S2.js";
import { t as Eye } from "../chunks/CTzUc-eH2.js";
import { t as Refresh_cw } from "../chunks/DpTJy0Wb.js";
import { t as Search } from "../chunks/D7t9qluE.js";
import { t as Sliders_horizontal } from "../chunks/BI9_YWC7.js";
import { i as formatDateOnly, o as getBahrainDateString } from "../chunks/Cu8_Vl4p.js";
import { t as Button } from "../chunks/BhXsq3bC.js";
import { t as MoneyDisplay } from "../chunks/CIVSRuaR2.js";
import { t as DateDisplay } from "../chunks/DEr_pDJT2.js";
import "../chunks/DjdBrX6C2.js";
import { t as exportToCSV } from "../chunks/C74Z4VDd2.js";
//#region src/routes/(app)/sales/open-deals/+page.svelte
var root = from_html(`<!> <span> </span>`, 1);
var root_1 = from_html(`<!> <span>Reload</span>`, 1);
var root_2 = from_html(`<option> </option>`);
var root_3 = from_html(`<!> <span>Columns</span>`, 1);
var root_4 = from_html(`<label class="flex items-center gap-2 cursor-pointer select-none py-1 hover:bg-muted/50 rounded px-1"><input type="checkbox" class="rounded border-border text-primary focus:ring-primary/20 h-3.5 w-3.5 cursor-pointer"/> <span class="text-foreground"> </span></label>`);
var root_5 = from_html(`<div class="absolute right-0 mt-2 w-52 bg-card border border-border rounded-xl shadow-xl p-3.5 z-50 space-y-2 text-xs"><p class="font-bold text-foreground mb-2">Display Columns</p> <!></div>`);
var root_6 = from_html(`<div class="bg-card border border-border rounded-2xl p-6 h-96 flex items-center justify-center animate-pulse"><!></div>`);
var root_7 = from_html(`<th class="p-4 w-32 cursor-pointer hover:text-foreground select-none">Document Ref <!></th>`);
var root_8 = from_html(`<th class="p-4 cursor-pointer hover:text-foreground select-none">Service <!></th>`);
var root_9 = from_html(`<th class="p-4 cursor-pointer hover:text-foreground select-none">Customer Head <!></th>`);
var root_10 = from_html(`<th class="p-4 cursor-pointer hover:text-foreground select-none">Salesman <!></th>`);
var root_11 = from_html(`<th class="p-4">Specifications</th>`);
var root_12 = from_html(`<th class="p-4 cursor-pointer hover:text-foreground select-none">Payable Sale <!></th>`);
var root_13 = from_html(`<th class="p-4 cursor-pointer hover:text-foreground select-none">Deal Status <!></th>`);
var root_14 = from_html(`<th class="p-4 w-32 cursor-pointer hover:text-foreground select-none">Logged Date <!></th>`);
var root_15 = from_html(`<td class="p-4 font-mono font-medium text-foreground font-bold"><a target="_blank" rel="noopener noreferrer" class="hover:underline text-primary"> </a></td>`);
var root_16 = from_html(`<td class="p-4"><span> </span></td>`);
var root_17 = from_html(`<span class="block text-[10px] font-normal text-muted-foreground capitalize"> </span>`);
var root_18 = from_html(`<td class="p-4 font-semibold text-foreground"> <!></td>`);
var root_19 = from_html(`<td class="p-4 text-muted-foreground"> </td>`);
var root_20 = from_html(`<td class="p-4 text-muted-foreground max-w-xs truncate"> </td>`);
var root_21 = from_html(`<td class="p-4 font-mono font-bold text-foreground"><!></td>`);
var root_22 = from_html(`<td class="p-4"><span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-950/40 dark:text-amber-400 dark:border-amber-800">Open Deal</span></td>`);
var root_23 = from_html(`<td class="p-4 font-mono text-muted-foreground"><!></td>`);
var root_24 = from_html(`<tr class="hover:bg-muted/10 transition-colors"><!><!><!><!><!><!><!><!><td class="p-4 w-20 text-center print:hidden"><a target="_blank" rel="noopener noreferrer" class="inline-flex p-1.5 hover:bg-muted text-muted-foreground hover:text-primary rounded-lg transition-colors" title="View details in new tab"><!></a></td></tr>`);
var root_25 = from_html(`<div class="bg-card border border-border rounded-2xl overflow-x-auto shadow-xs print:border-none print:shadow-none max-w-full"><table class="w-full min-w-[800px] text-left border-collapse text-xs"><thead><tr class="bg-muted/30 border-b border-border text-muted-foreground font-semibold print:bg-transparent"><!><!><!><!><!><!><!><!><th class="p-4 w-20 text-center print:hidden">View</th></tr></thead><tbody class="divide-y divide-border/60"></tbody></table></div> <div class="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs pt-4 print:hidden"><span class="text-muted-foreground"> </span> <div class="flex items-center gap-4"><div class="flex items-center gap-2"><span class="text-xs text-muted-foreground whitespace-nowrap">Rows per page:</span> <select class="text-xs p-1 border border-border rounded-lg bg-background text-foreground focus:outline-none"><option>10</option><option>20</option><option>50</option><option>100</option></select></div> <div class="flex items-center gap-1"><!> <!></div></div></div>`, 1);
var root_26 = from_html(`<div class="bg-card border border-border rounded-2xl p-8 text-center text-muted-foreground text-xs">No open deals match your search criteria.</div>`);
var root_27 = from_html(`<div class="space-y-6 print:space-y-0 print:p-0"><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 print:hidden"><div class="flex flex-col gap-1"><div class="flex items-center gap-2"><h1 class="text-xl font-bold text-foreground font-sans">Open Deals</h1> <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-950/40 dark:text-amber-400 dark:border-amber-800">Active Unclosed Deals</span></div> <p class="text-xs text-muted-foreground">Workspace tracking all active bookings pending deal closure across all services.</p></div> <div class="flex flex-wrap gap-2.5"><!> <!></div></div> <div class="bg-card border border-border rounded-2xl p-4 flex flex-col gap-4 print:hidden"><div class="flex flex-col md:flex-row gap-3"><div class="relative flex-1"><!> <input type="text" placeholder="Search Document Ref, Passenger, Route, Customer Head..." class="w-full text-xs pl-10 pr-4 py-2 border border-border rounded-xl bg-background text-foreground placeholder-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20"/></div> <select class="text-xs p-2 border border-border rounded-xl bg-background text-foreground w-full md:w-44 focus:outline-none"><option>All Services</option><option>Flights</option><option>Hotels</option><option>Visas</option><option>Holiday Packages</option><option>VFS Appointments</option><option>Transportation</option><option>Other Services</option></select> <select class="text-xs p-2 border border-border rounded-xl bg-background text-foreground w-full md:w-44 focus:outline-none"><option>All Salesmen</option><!></select> <div class="relative"><!> <!></div></div> <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2.5 border-t border-border/40 text-xs"><div><label for="created-from" class="block text-muted-foreground mb-1 font-semibold">Created From</label> <input id="created-from" type="date" class="w-full p-2 border border-border rounded-xl bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary"/></div> <div><label for="created-to" class="block text-muted-foreground mb-1 font-semibold">Created To</label> <input id="created-to" type="date" class="w-full p-2 border border-border rounded-xl bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary"/></div> <div class="flex items-end"><!></div></div></div> <!></div>`);
function _page($$anchor, $$props) {
	push($$props, true);
	let dataList = state(null);
	let salesmen = state(proxy([]));
	let loading = state(false);
	let currentPage = state(1);
	let pageSize = state(10);
	let searchVal = state("");
	let selectedService = state("all");
	let selectedSalesman = state("");
	let sortBy = state("createdAt");
	let sortDesc = state(true);
	let exportingCSV = state(false);
	let startDate = state("");
	let endDate = state("");
	let showColumnChooser = state(false);
	let columns = proxy({
		id: {
			label: "Document Ref",
			visible: true
		},
		serviceType: {
			label: "Service",
			visible: true
		},
		headName: {
			label: "Customer Head",
			visible: true
		},
		salesmanName: {
			label: "Salesman",
			visible: true
		},
		mainDetails: {
			label: "Specifications",
			visible: true
		},
		payableAmount: {
			label: "Payable Sale",
			visible: true
		},
		isDealClosed: {
			label: "Deal Status",
			visible: true
		},
		createdAt: {
			label: "Logged Date",
			visible: true
		}
	});
	let searchTimeout;
	function handleSearchInput(val) {
		clearTimeout(searchTimeout);
		searchTimeout = setTimeout(() => {
			set(searchVal, val, true);
			set(currentPage, 1);
			fetchBookings();
		}, 400);
	}
	async function loadSalesmen() {
		try {
			const res = await apiFetch("api/sales-entries/salesmen");
			if (res && Array.isArray(res)) set(salesmen, res, true);
		} catch (err) {
			console.error("Failed to load salesmen list:", err);
		}
	}
	async function fetchBookings() {
		set(loading, true);
		try {
			const params = {
				page: get(currentPage),
				pageSize: get(pageSize)
			};
			if (get(selectedService) !== "all") params.serviceType = get(selectedService);
			if (get(selectedSalesman)) params.salesmanId = Number(get(selectedSalesman));
			if (get(searchVal).trim()) params.search = get(searchVal).trim();
			if (get(startDate)) params.startDate = get(startDate);
			if (get(endDate)) params.endDate = get(endDate);
			const res = await apiFetch("api/sales-entries/open-deals", { params });
			set(dataList, res, true);
		} catch (err) {
			console.error("Failed to load open deals list:", err);
			toast.error("Failed to load open deals.");
		} finally {
			set(loading, false);
		}
	}
	function handleSort(colName) {
		if (get(sortBy) === colName) set(sortDesc, !get(sortDesc));
		else {
			set(sortBy, colName, true);
			set(sortDesc, true);
		}
		if (get(dataList) && get(dataList).items) get(dataList).items = [...get(dataList).items].sort((a, b) => {
			let valA = a[colName] ?? "";
			let valB = b[colName] ?? "";
			if (typeof valA === "string") valA = valA.toLowerCase();
			if (typeof valB === "string") valB = valB.toLowerCase();
			if (valA < valB) return get(sortDesc) ? 1 : -1;
			if (valA > valB) return get(sortDesc) ? -1 : 1;
			return 0;
		});
	}
	async function exportToCSV$1() {
		set(exportingCSV, true);
		try {
			const params = {
				page: 1,
				pageSize: 1e4
			};
			if (get(selectedService) !== "all") params.serviceType = get(selectedService);
			if (get(selectedSalesman)) params.salesmanId = Number(get(selectedSalesman));
			if (get(searchVal).trim()) params.search = get(searchVal).trim();
			if (get(startDate)) params.startDate = get(startDate);
			if (get(endDate)) params.endDate = get(endDate);
			const items = (await apiFetch("api/sales-entries/open-deals", { params }).catch((err) => {
				console.warn("apiFetch open deals export failed, falling back to active list:", err);
				return null;
			}))?.items || get(dataList)?.items || [];
			if (items.length === 0) {
				toast.info("No open deal records available to export.");
				return;
			}
			const activeKeys = Object.keys(columns).filter((k) => columns[k]?.visible);
			const headers = activeKeys.map((k) => columns[k]?.label || k);
			const rows = items.map((row) => {
				return activeKeys.map((k) => {
					if (k === "id") return row.documentNumber || `#${row.id}`;
					if (k === "payableAmount") return row.payableAmount != null ? Number(row.payableAmount).toFixed(3) : "0.000";
					if (k === "isDealClosed") return row.isDealClosed ? "Closed" : "Open Deal";
					if (k === "createdAt") return row.createdAt ? formatDateOnly(row.createdAt) : "";
					return row[k] ?? "";
				});
			});
			exportToCSV(`open_deals_export_${getBahrainDateString()}.csv`, headers, rows);
			toast.success("CSV exported successfully.");
		} catch (err) {
			console.error("Failed to export open deals CSV:", err);
			toast.error("Failed to export CSV: " + (err?.message || "Unknown error"));
		} finally {
			set(exportingCSV, false);
		}
	}
	function toggleColumn(key) {
		const col = columns[key];
		if (col) col.visible = !col.visible;
	}
	function getServiceDetailRoute(serviceType, id) {
		const s = (serviceType || "").toLowerCase();
		if (s.includes("flight")) return `/sales/bookings/flights/${id}`;
		if (s.includes("hotel")) return `/sales/bookings/hotels/${id}`;
		if (s.includes("visa")) return `/sales/bookings/visa/${id}`;
		if (s.includes("holiday")) return `/sales/bookings/holiday/${id}`;
		if (s.includes("vfs")) return `/sales/bookings/vfs/${id}`;
		if (s.includes("transport")) return `/sales/bookings/transportation/${id}`;
		return `/sales/bookings/other-services/${id}`;
	}
	function getServiceBadgeClass(serviceType) {
		const s = (serviceType || "").toLowerCase();
		if (s.includes("flight")) return "bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800";
		if (s.includes("hotel")) return "bg-purple-50 text-purple-700 border border-purple-200 dark:bg-purple-950/40 dark:text-purple-300 dark:border-purple-800";
		if (s.includes("visa")) return "bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800";
		if (s.includes("holiday")) return "bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800";
		if (s.includes("vfs")) return "bg-sky-50 text-sky-700 border border-sky-200 dark:bg-sky-950/40 dark:text-sky-300 dark:border-sky-800";
		if (s.includes("transport")) return "bg-indigo-50 text-indigo-700 border border-indigo-200 dark:bg-indigo-950/40 dark:text-indigo-300 dark:border-indigo-800";
		return "bg-slate-50 text-slate-700 border border-slate-200 dark:bg-slate-900 dark:text-slate-300 dark:border-slate-800";
	}
	onMount(() => {
		loadSalesmen();
		fetchBookings();
	});
	var div = root_27();
	head("2fw0y1", ($$anchor) => {
		effect(() => {
			$document.title = "Open Deals — Accounts Portal";
		});
	});
	var div_1 = child(div);
	var div_2 = sibling(child(div_1), 2);
	var node = child(div_2);
	Button(node, {
		variant: "outline",
		class: "h-8.5 rounded-xl cursor-pointer flex items-center gap-1.5 text-xs font-semibold",
		onclick: exportToCSV$1,
		get disabled() {
			return get(exportingCSV);
		},
		children: ($$anchor, $$slotProps) => {
			var fragment = root();
			var node_1 = first_child(fragment);
			{
				let $0 = user_derived(() => ["h-3.5 w-3.5", get(exportingCSV) ? "animate-spin" : ""].join(" "));
				Download(node_1, { get class() {
					return get($0);
				} });
			}
			var span = sibling(node_1, 2);
			var text = child(span, true);
			reset(span);
			template_effect(() => set_text(text, get(exportingCSV) ? "Exporting..." : "CSV Export"));
			append($$anchor, fragment);
		},
		$$slots: { default: true }
	});
	Button(sibling(node, 2), {
		variant: "outline",
		class: "h-8.5 rounded-xl cursor-pointer flex items-center gap-1.5 text-xs font-semibold",
		onclick: fetchBookings,
		get disabled() {
			return get(loading);
		},
		children: ($$anchor, $$slotProps) => {
			var fragment_1 = root_1();
			var node_3 = first_child(fragment_1);
			{
				let $0 = user_derived(() => ["h-3.5 w-3.5", get(loading) ? "animate-spin" : ""].join(" "));
				Refresh_cw(node_3, { get class() {
					return get($0);
				} });
			}
			next(2);
			append($$anchor, fragment_1);
		},
		$$slots: { default: true }
	});
	reset(div_2);
	reset(div_1);
	var div_3 = sibling(div_1, 2);
	var div_4 = child(div_3);
	var div_5 = child(div_4);
	var node_4 = child(div_5);
	Search(node_4, { class: "absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/60" });
	var input = sibling(node_4, 2);
	remove_input_defaults(input);
	reset(div_5);
	var select = sibling(div_5, 2);
	var option = child(select);
	option.value = option.__value = "all";
	var option_1 = sibling(option);
	option_1.value = option_1.__value = "flight";
	var option_2 = sibling(option_1);
	option_2.value = option_2.__value = "hotel";
	var option_3 = sibling(option_2);
	option_3.value = option_3.__value = "visa";
	var option_4 = sibling(option_3);
	option_4.value = option_4.__value = "holiday";
	var option_5 = sibling(option_4);
	option_5.value = option_5.__value = "vfs";
	var option_6 = sibling(option_5);
	option_6.value = option_6.__value = "transport";
	var option_7 = sibling(option_6);
	option_7.value = option_7.__value = "other";
	reset(select);
	var select_1 = sibling(select, 2);
	var option_8 = child(select_1);
	option_8.value = option_8.__value = "";
	each(sibling(option_8), 17, () => get(salesmen), index, ($$anchor, sm) => {
		var option_9 = root_2();
		var text_1 = child(option_9, true);
		reset(option_9);
		var option_9_value = {};
		template_effect(() => {
			set_text(text_1, get(sm).name);
			if (option_9_value !== (option_9_value = get(sm).id)) option_9.value = (option_9.__value = get(sm).id) ?? "";
		});
		append($$anchor, option_9);
	});
	reset(select_1);
	var div_6 = sibling(select_1, 2);
	var node_6 = child(div_6);
	Button(node_6, {
		variant: "outline",
		class: "h-9 w-full md:w-auto rounded-xl flex items-center gap-1.5 text-xs font-semibold",
		onclick: () => set(showColumnChooser, !get(showColumnChooser)),
		children: ($$anchor, $$slotProps) => {
			var fragment_2 = root_3();
			Sliders_horizontal(first_child(fragment_2), { class: "h-4 w-4" });
			next(2);
			append($$anchor, fragment_2);
		},
		$$slots: { default: true }
	});
	var node_8 = sibling(node_6, 2);
	var consequent = ($$anchor) => {
		var div_7 = root_5();
		each(sibling(child(div_7), 2), 17, () => Object.keys(columns), index, ($$anchor, key) => {
			var label = root_4();
			var input_1 = child(label);
			remove_input_defaults(input_1);
			var span_1 = sibling(input_1, 2);
			var text_2 = child(span_1, true);
			reset(span_1);
			reset(label);
			template_effect(() => {
				set_checked(input_1, columns[get(key)]?.visible);
				set_text(text_2, columns[get(key)]?.label);
			});
			delegated("click", input_1, () => toggleColumn(get(key)));
			append($$anchor, label);
		});
		reset(div_7);
		append($$anchor, div_7);
	};
	if_block(node_8, ($$render) => {
		if (get(showColumnChooser)) $$render(consequent);
	});
	reset(div_6);
	reset(div_4);
	var div_8 = sibling(div_4, 2);
	var div_9 = child(div_8);
	var input_2 = sibling(child(div_9), 2);
	remove_input_defaults(input_2);
	reset(div_9);
	var div_10 = sibling(div_9, 2);
	var input_3 = sibling(child(div_10), 2);
	remove_input_defaults(input_3);
	reset(div_10);
	var div_11 = sibling(div_10, 2);
	Button(child(div_11), {
		variant: "outline",
		class: "w-full h-9 rounded-xl text-xs font-semibold",
		onclick: () => {
			set(startDate, "");
			set(endDate, "");
			set(currentPage, 1);
			fetchBookings();
		},
		children: ($$anchor, $$slotProps) => {
			next();
			append($$anchor, text("Clear Dates"));
		},
		$$slots: { default: true }
	});
	reset(div_11);
	reset(div_8);
	reset(div_3);
	var node_11 = sibling(div_3, 2);
	var consequent_1 = ($$anchor) => {
		var div_12 = root_6();
		Refresh_cw(child(div_12), { class: "h-8 w-8 text-primary animate-spin" });
		reset(div_12);
		append($$anchor, div_12);
	};
	var consequent_26 = ($$anchor) => {
		var fragment_3 = root_25();
		var div_13 = first_child(fragment_3);
		var table = child(div_13);
		var thead = child(table);
		var tr = child(thead);
		var node_13 = child(tr);
		var consequent_3 = ($$anchor) => {
			var th = root_7();
			var node_14 = sibling(child(th));
			var consequent_2 = ($$anchor) => {
				var text_4 = text();
				template_effect(() => set_text(text_4, get(sortDesc) ? "↓" : "↑"));
				append($$anchor, text_4);
			};
			if_block(node_14, ($$render) => {
				if (get(sortBy) === "documentNumber") $$render(consequent_2);
			});
			reset(th);
			delegated("click", th, () => handleSort("documentNumber"));
			append($$anchor, th);
		};
		if_block(node_13, ($$render) => {
			if (columns.id?.visible) $$render(consequent_3);
		});
		var node_15 = sibling(node_13);
		var consequent_5 = ($$anchor) => {
			var th_1 = root_8();
			var node_16 = sibling(child(th_1));
			var consequent_4 = ($$anchor) => {
				var text_5 = text();
				template_effect(() => set_text(text_5, get(sortDesc) ? "↓" : "↑"));
				append($$anchor, text_5);
			};
			if_block(node_16, ($$render) => {
				if (get(sortBy) === "serviceType") $$render(consequent_4);
			});
			reset(th_1);
			delegated("click", th_1, () => handleSort("serviceType"));
			append($$anchor, th_1);
		};
		if_block(node_15, ($$render) => {
			if (columns.serviceType?.visible) $$render(consequent_5);
		});
		var node_17 = sibling(node_15);
		var consequent_7 = ($$anchor) => {
			var th_2 = root_9();
			var node_18 = sibling(child(th_2));
			var consequent_6 = ($$anchor) => {
				var text_6 = text();
				template_effect(() => set_text(text_6, get(sortDesc) ? "↓" : "↑"));
				append($$anchor, text_6);
			};
			if_block(node_18, ($$render) => {
				if (get(sortBy) === "headName") $$render(consequent_6);
			});
			reset(th_2);
			delegated("click", th_2, () => handleSort("headName"));
			append($$anchor, th_2);
		};
		if_block(node_17, ($$render) => {
			if (columns.headName?.visible) $$render(consequent_7);
		});
		var node_19 = sibling(node_17);
		var consequent_9 = ($$anchor) => {
			var th_3 = root_10();
			var node_20 = sibling(child(th_3));
			var consequent_8 = ($$anchor) => {
				var text_7 = text();
				template_effect(() => set_text(text_7, get(sortDesc) ? "↓" : "↑"));
				append($$anchor, text_7);
			};
			if_block(node_20, ($$render) => {
				if (get(sortBy) === "salesmanName") $$render(consequent_8);
			});
			reset(th_3);
			delegated("click", th_3, () => handleSort("salesmanName"));
			append($$anchor, th_3);
		};
		if_block(node_19, ($$render) => {
			if (columns.salesmanName?.visible) $$render(consequent_9);
		});
		var node_21 = sibling(node_19);
		var consequent_10 = ($$anchor) => {
			append($$anchor, root_11());
		};
		if_block(node_21, ($$render) => {
			if (columns.mainDetails?.visible) $$render(consequent_10);
		});
		var node_22 = sibling(node_21);
		var consequent_12 = ($$anchor) => {
			var th_5 = root_12();
			var node_23 = sibling(child(th_5));
			var consequent_11 = ($$anchor) => {
				var text_8 = text();
				template_effect(() => set_text(text_8, get(sortDesc) ? "↓" : "↑"));
				append($$anchor, text_8);
			};
			if_block(node_23, ($$render) => {
				if (get(sortBy) === "payableAmount") $$render(consequent_11);
			});
			reset(th_5);
			delegated("click", th_5, () => handleSort("payableAmount"));
			append($$anchor, th_5);
		};
		if_block(node_22, ($$render) => {
			if (columns.payableAmount?.visible) $$render(consequent_12);
		});
		var node_24 = sibling(node_22);
		var consequent_14 = ($$anchor) => {
			var th_6 = root_13();
			var node_25 = sibling(child(th_6));
			var consequent_13 = ($$anchor) => {
				var text_9 = text();
				template_effect(() => set_text(text_9, get(sortDesc) ? "↓" : "↑"));
				append($$anchor, text_9);
			};
			if_block(node_25, ($$render) => {
				if (get(sortBy) === "isDealClosed") $$render(consequent_13);
			});
			reset(th_6);
			delegated("click", th_6, () => handleSort("isDealClosed"));
			append($$anchor, th_6);
		};
		if_block(node_24, ($$render) => {
			if (columns.isDealClosed?.visible) $$render(consequent_14);
		});
		var node_26 = sibling(node_24);
		var consequent_16 = ($$anchor) => {
			var th_7 = root_14();
			var node_27 = sibling(child(th_7));
			var consequent_15 = ($$anchor) => {
				var text_10 = text();
				template_effect(() => set_text(text_10, get(sortDesc) ? "↓" : "↑"));
				append($$anchor, text_10);
			};
			if_block(node_27, ($$render) => {
				if (get(sortBy) === "createdAt") $$render(consequent_15);
			});
			reset(th_7);
			delegated("click", th_7, () => handleSort("createdAt"));
			append($$anchor, th_7);
		};
		if_block(node_26, ($$render) => {
			if (columns.createdAt?.visible) $$render(consequent_16);
		});
		next();
		reset(tr);
		reset(thead);
		var tbody = sibling(thead);
		each(tbody, 21, () => get(dataList).items, index, ($$anchor, row) => {
			var tr_1 = root_24();
			var node_28 = child(tr_1);
			var consequent_17 = ($$anchor) => {
				var td = root_15();
				var a_1 = child(td);
				var text_11 = child(a_1, true);
				reset(a_1);
				reset(td);
				template_effect(($0) => {
					set_attribute(a_1, "href", $0);
					set_text(text_11, get(row).documentNumber || `#${get(row).id}`);
				}, [() => getServiceDetailRoute(get(row).serviceType, get(row).id)]);
				append($$anchor, td);
			};
			if_block(node_28, ($$render) => {
				if (columns.id?.visible) $$render(consequent_17);
			});
			var node_29 = sibling(node_28);
			var consequent_18 = ($$anchor) => {
				var td_1 = root_16();
				var span_2 = child(td_1);
				var text_12 = child(span_2, true);
				reset(span_2);
				reset(td_1);
				template_effect(($0) => {
					set_class(span_2, 1, `inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold ${$0 ?? ""}`);
					set_text(text_12, get(row).serviceType);
				}, [() => getServiceBadgeClass(get(row).serviceType)]);
				append($$anchor, td_1);
			};
			if_block(node_29, ($$render) => {
				if (columns.serviceType?.visible) $$render(consequent_18);
			});
			var node_30 = sibling(node_29);
			var consequent_20 = ($$anchor) => {
				var td_2 = root_18();
				var text_13 = child(td_2);
				var node_31 = sibling(text_13);
				var consequent_19 = ($$anchor) => {
					var span_3 = root_17();
					var text_14 = child(span_3, true);
					reset(span_3);
					template_effect(() => set_text(text_14, get(row).clientType));
					append($$anchor, span_3);
				};
				if_block(node_31, ($$render) => {
					if (get(row).clientType) $$render(consequent_19);
				});
				reset(td_2);
				template_effect(() => set_text(text_13, `${(get(row).headName || "—") ?? ""} `));
				append($$anchor, td_2);
			};
			if_block(node_30, ($$render) => {
				if (columns.headName?.visible) $$render(consequent_20);
			});
			var node_32 = sibling(node_30);
			var consequent_21 = ($$anchor) => {
				var td_3 = root_19();
				var text_15 = child(td_3, true);
				reset(td_3);
				template_effect(() => set_text(text_15, get(row).salesmanName || `Salesman #${get(row).salesmanId}`));
				append($$anchor, td_3);
			};
			if_block(node_32, ($$render) => {
				if (columns.salesmanName?.visible) $$render(consequent_21);
			});
			var node_33 = sibling(node_32);
			var consequent_22 = ($$anchor) => {
				var td_4 = root_20();
				var text_16 = child(td_4, true);
				reset(td_4);
				template_effect(() => {
					set_attribute(td_4, "title", get(row).mainDetails || "");
					set_text(text_16, get(row).mainDetails || "—");
				});
				append($$anchor, td_4);
			};
			if_block(node_33, ($$render) => {
				if (columns.mainDetails?.visible) $$render(consequent_22);
			});
			var node_34 = sibling(node_33);
			var consequent_23 = ($$anchor) => {
				var td_5 = root_21();
				MoneyDisplay(child(td_5), { get amount() {
					return get(row).payableAmount;
				} });
				reset(td_5);
				append($$anchor, td_5);
			};
			if_block(node_34, ($$render) => {
				if (columns.payableAmount?.visible) $$render(consequent_23);
			});
			var node_36 = sibling(node_34);
			var consequent_24 = ($$anchor) => {
				append($$anchor, root_22());
			};
			if_block(node_36, ($$render) => {
				if (columns.isDealClosed?.visible) $$render(consequent_24);
			});
			var node_37 = sibling(node_36);
			var consequent_25 = ($$anchor) => {
				var td_7 = root_23();
				DateDisplay(child(td_7), { get value() {
					return get(row).createdAt;
				} });
				reset(td_7);
				append($$anchor, td_7);
			};
			if_block(node_37, ($$render) => {
				if (columns.createdAt?.visible) $$render(consequent_25);
			});
			var td_8 = sibling(node_37);
			var a_2 = child(td_8);
			Eye(child(a_2), { class: "h-4 w-4" });
			reset(a_2);
			reset(td_8);
			reset(tr_1);
			template_effect(($0) => set_attribute(a_2, "href", $0), [() => getServiceDetailRoute(get(row).serviceType, get(row).id)]);
			append($$anchor, tr_1);
		});
		reset(tbody);
		reset(table);
		reset(div_13);
		var div_14 = sibling(div_13, 2);
		var span_4 = child(div_14);
		var text_17 = child(span_4);
		reset(span_4);
		var div_15 = sibling(span_4, 2);
		var div_16 = child(div_15);
		var select_2 = sibling(child(div_16), 2);
		var option_10 = child(select_2);
		option_10.value = option_10.__value = 10;
		var option_11 = sibling(option_10);
		option_11.value = option_11.__value = 20;
		var option_12 = sibling(option_11);
		option_12.value = option_12.__value = 50;
		var option_13 = sibling(option_12);
		option_13.value = option_13.__value = 100;
		reset(select_2);
		var select_2_value;
		init_select(select_2);
		reset(div_16);
		var div_17 = sibling(div_16, 2);
		var node_40 = child(div_17);
		{
			let $0 = user_derived(() => get(currentPage) <= 1 || get(loading));
			Button(node_40, {
				variant: "outline",
				size: "sm",
				class: "h-8 rounded-xl",
				get disabled() {
					return get($0);
				},
				onclick: () => {
					if (get(currentPage) > 1) {
						update(currentPage, -1);
						fetchBookings();
					}
				},
				children: ($$anchor, $$slotProps) => {
					Chevron_left($$anchor, { class: "h-4 w-4" });
				},
				$$slots: { default: true }
			});
		}
		var node_41 = sibling(node_40, 2);
		{
			let $0 = user_derived(() => !get(dataList) || get(currentPage) >= get(dataList).totalPages || get(loading));
			Button(node_41, {
				variant: "outline",
				size: "sm",
				class: "h-8 rounded-xl",
				get disabled() {
					return get($0);
				},
				onclick: () => {
					if (get(dataList) && get(currentPage) < get(dataList).totalPages) {
						update(currentPage);
						fetchBookings();
					}
				},
				children: ($$anchor, $$slotProps) => {
					Chevron_right($$anchor, { class: "h-4 w-4" });
				},
				$$slots: { default: true }
			});
		}
		reset(div_17);
		reset(div_15);
		reset(div_14);
		template_effect(() => {
			set_text(text_17, `Page ${get(dataList).page ?? ""} of ${get(dataList).totalPages ?? ""} (${get(dataList).totalCount ?? ""} items)`);
			if (select_2_value !== (select_2_value = get(pageSize))) select_2.value = (select_2.__value = get(pageSize)) ?? "", select_option(select_2, get(pageSize));
		});
		delegated("change", select_2, (e) => {
			set(pageSize, Number(e.target.value), true);
			set(currentPage, 1);
			fetchBookings();
		});
		append($$anchor, fragment_3);
	};
	var alternate = ($$anchor) => {
		append($$anchor, root_26());
	};
	if_block(node_11, ($$render) => {
		if (get(loading)) $$render(consequent_1);
		else if (get(dataList) && get(dataList).items && get(dataList).items.length > 0) $$render(consequent_26, 1);
		else $$render(alternate, -1);
	});
	reset(div);
	template_effect(() => set_value(input, get(searchVal)));
	delegated("input", input, (e) => handleSearchInput(e.target.value));
	delegated("change", select, () => {
		set(currentPage, 1);
		fetchBookings();
	});
	bind_select_value(select, () => get(selectedService), ($$value) => set(selectedService, $$value));
	delegated("change", select_1, () => {
		set(currentPage, 1);
		fetchBookings();
	});
	bind_select_value(select_1, () => get(selectedSalesman), ($$value) => set(selectedSalesman, $$value));
	delegated("change", input_2, () => {
		set(currentPage, 1);
		fetchBookings();
	});
	bind_value(input_2, () => get(startDate), ($$value) => set(startDate, $$value));
	delegated("change", input_3, () => {
		set(currentPage, 1);
		fetchBookings();
	});
	bind_value(input_3, () => get(endDate), ($$value) => set(endDate, $$value));
	append($$anchor, div);
	pop();
}
delegate([
	"input",
	"change",
	"click"
]);
//#endregion
export { _page as component };

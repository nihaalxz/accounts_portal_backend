import { B as append, D as head, H as from_html, I as if_block, K as delegate, Lt as next, Mt as push, N as each, P as index, Q as get, R as set_text, Rt as reset, V as comment, b as bind_select_value, dt as child, ft as first_child, gt as set, it as effect, jt as pop, n as onDestroy, ot as template_effect, pt as sibling, q as delegated, r as onMount, ut as $document, vt as state, w as set_class, xt as user_derived, yt as update } from "../chunks/BdGPDeRo.js";
import "../chunks/DhaYE-8x.js";
import { t as apiFetch } from "../chunks/D7kp2URN.js";
import { i as hasRole } from "../chunks/DpH4yaRa.js";
import { t as Bell } from "../chunks/Dq6xJjbN.js";
import { t as Chevron_left } from "../chunks/CsLK6PIo.js";
import { t as Chevron_right } from "../chunks/Dxef15ul.js";
import { t as Download } from "../chunks/DBd-WEs4.js";
import { t as Printer } from "../chunks/CNYHernz2.js";
import { t as Refresh_cw } from "../chunks/DFp1vOqU2.js";
import { t as Search } from "../chunks/wyHepXk-2.js";
import { t as Button } from "../chunks/zyE_82FR2.js";
import { t as DateDisplay } from "../chunks/Dr7G9lQx2.js";
import "../chunks/B0UXrdYn.js";
import { t as EmptyState } from "../chunks/D-wlgMbD.js";
import { t as SalesEntriesRealtimeController } from "../chunks/iUqg60WD.js";
//#region src/routes/(app)/sales/leads/+page.svelte
var root = from_html(`<div class="space-y-4"><!></div>`);
var root_1 = from_html(`<!> <span>CSV Export</span>`, 1);
var root_2 = from_html(`<!> <span>Print</span>`, 1);
var root_3 = from_html(`<!> <span>Reload</span>`, 1);
var root_4 = from_html(`<div class="bg-card border border-border rounded-2xl p-6 h-96 flex items-center justify-center animate-pulse"><!></div>`);
var root_5 = from_html(`<span class="inline-flex items-center gap-1 text-amber-600 font-semibold"><!> <!></span>`);
var root_6 = from_html(`<span class="text-muted-foreground">—</span>`);
var root_7 = from_html(`<tr class="hover:bg-muted/10 transition-colors"><td class="p-4 font-mono font-medium text-muted-foreground"> </td><td class="p-4"><span class="font-bold text-foreground block"> </span> <span class="block font-mono text-[10px] text-muted-foreground mt-0.5"> </span></td><td class="p-4 text-muted-foreground"> </td><td class="p-4 text-muted-foreground capitalize"> </td><td class="p-4 font-semibold text-foreground"> </td><td class="p-4"><span> </span></td><td class="p-4"><!></td><td class="p-4 text-muted-foreground font-mono"><!></td></tr>`);
var root_8 = from_html(`<!> Prev`, 1);
var root_9 = from_html(`Next <!>`, 1);
var root_10 = from_html(`<div class="bg-card border border-border rounded-2xl overflow-x-auto shadow-xs print:border-none print:shadow-none max-w-full"><table class="w-full min-w-[750px] text-left border-collapse text-xs"><thead><tr class="bg-muted/30 border-b border-border text-muted-foreground font-semibold print:bg-transparent"><th class="p-4 w-16">#</th><th class="p-4">Lead</th><th class="p-4">Services Interested</th><th class="p-4">Source</th><th class="p-4">Salesman</th><th class="p-4">Status</th><th class="p-4">Reminder</th><th class="p-4 w-32">Logged Date</th></tr></thead><tbody class="divide-y divide-border/60"></tbody></table></div> <div class="flex items-center justify-between text-xs pt-4 print:hidden"><span class="text-muted-foreground"> </span> <div class="flex gap-2"><!> <!></div></div>`, 1);
var root_11 = from_html(`<div class="bg-card border border-border rounded-2xl p-16 text-center text-muted-foreground text-xs print:hidden">No leads found matching the selected filters.</div>`);
var root_12 = from_html(`<div class="space-y-6 print:space-y-0 print:p-0"><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 print:hidden"><div class="flex flex-col gap-1"><h1 class="text-xl font-bold text-foreground font-sans">Sales Leads</h1> <p class="text-xs text-muted-foreground">View all leads logged across all salesmen. Filter by status or search by name or phone number.</p></div> <div class="flex flex-wrap gap-2.5"><!> <!> <!></div></div> <div class="bg-card border border-border rounded-2xl p-4 flex flex-col md:flex-row gap-3 print:hidden"><div class="relative flex-1"><!> <input type="text" placeholder="Search by name or phone number..." class="w-full text-xs pl-10 pr-4 py-2 border border-border rounded-xl bg-background text-foreground placeholder-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20"/></div> <select class="text-xs p-2 border border-border rounded-xl bg-background text-foreground w-full md:w-44 focus:outline-none"><option>All Statuses</option><option>New</option><option>Contacted</option><option>Converted</option><option>Lost</option></select></div> <!></div>`);
function _page($$anchor, $$props) {
	push($$props, true);
	let leadsData = state(null);
	let loading = state(false);
	let currentPage = state(1);
	let pageSize = 20;
	let searchVal = state("");
	let statusFilter = state("all");
	let realtimeController = null;
	let searchTimeout;
	function handleSearchInput(val) {
		clearTimeout(searchTimeout);
		searchTimeout = setTimeout(() => {
			set(searchVal, val, true);
			set(currentPage, 1);
			fetchLeads();
		}, 400);
	}
	async function fetchLeads() {
		if (!hasRole("master_accountant")) return;
		set(loading, true);
		try {
			const params = {
				page: get(currentPage),
				pageSize
			};
			if (get(statusFilter) !== "all") params.status = get(statusFilter);
			if (get(searchVal).trim()) params.search = get(searchVal).trim();
			const res = await apiFetch("api/sales-entries/leads", { params });
			set(leadsData, res, true);
		} catch (err) {
			console.error("Failed to load leads list:", err);
		} finally {
			set(loading, false);
		}
	}
	onMount(() => {
		if (hasRole("master_accountant")) {
			fetchLeads();
			realtimeController = new SalesEntriesRealtimeController(() => fetchLeads(), 200);
			realtimeController.mount();
		}
	});
	onDestroy(() => {
		realtimeController?.unmount();
	});
	function exportToCSV() {
		if (!get(leadsData) || !get(leadsData).items) return;
		const csvContent = "data:text/csv;charset=utf-8," + ["ID,Name,Phone,Services,Source,Status,Salesman,Reminder Date,Logged Date", ...get(leadsData).items.map((row) => {
			return `"${row.id}","${row.name}","${row.countryCode} ${row.mobileNo}","${row.services || ""}","${row.leadSource || ""}","${row.status}","${row.createdByName || ""}","${row.reminderDate || ""}","${row.createdAt}"`;
		})].join("\n");
		const encodedUri = encodeURI(csvContent);
		const link = document.createElement("a");
		link.setAttribute("href", encodedUri);
		link.setAttribute("download", "sales_leads_export.csv");
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}
	function handlePrint() {
		window.print();
	}
	function statusColor(status) {
		switch (status?.toLowerCase()) {
			case "converted": return "bg-emerald-50 text-emerald-700 border border-emerald-200";
			case "lost": return "bg-red-50 text-red-700 border border-red-200";
			case "contacted": return "bg-blue-50 text-blue-700 border border-blue-200";
			default: return "bg-zinc-100 text-zinc-700 border border-zinc-200";
		}
	}
	var fragment = comment();
	head("15k3nhi", ($$anchor) => {
		effect(() => {
			$document.title = "Sales Leads — Accounts Portal";
		});
	});
	var node = first_child(fragment);
	var consequent = ($$anchor) => {
		var div = root();
		EmptyState(child(div), {
			title: "Access Restricted",
			description: "This section is restricted to Master Accountants only."
		});
		reset(div);
		append($$anchor, div);
	};
	var d = user_derived(() => !hasRole("master_accountant"));
	var alternate_2 = ($$anchor) => {
		var div_1 = root_12();
		var div_2 = child(div_1);
		var div_3 = sibling(child(div_2), 2);
		var node_2 = child(div_3);
		Button(node_2, {
			variant: "outline",
			class: "h-8.5 rounded-xl cursor-pointer flex items-center gap-1.5 text-xs font-semibold",
			onclick: exportToCSV,
			children: ($$anchor, $$slotProps) => {
				var fragment_1 = root_1();
				Download(first_child(fragment_1), { class: "h-3.5 w-3.5" });
				next(2);
				append($$anchor, fragment_1);
			},
			$$slots: { default: true }
		});
		var node_4 = sibling(node_2, 2);
		Button(node_4, {
			variant: "outline",
			class: "h-8.5 rounded-xl cursor-pointer flex items-center gap-1.5 text-xs font-semibold",
			onclick: handlePrint,
			children: ($$anchor, $$slotProps) => {
				var fragment_2 = root_2();
				Printer(first_child(fragment_2), { class: "h-3.5 w-3.5" });
				next(2);
				append($$anchor, fragment_2);
			},
			$$slots: { default: true }
		});
		Button(sibling(node_4, 2), {
			variant: "outline",
			class: "h-8.5 rounded-xl cursor-pointer flex items-center gap-1.5 text-xs font-semibold",
			onclick: fetchLeads,
			children: ($$anchor, $$slotProps) => {
				var fragment_3 = root_3();
				Refresh_cw(first_child(fragment_3), { class: "h-3.5 w-3.5" });
				next(2);
				append($$anchor, fragment_3);
			},
			$$slots: { default: true }
		});
		reset(div_3);
		reset(div_2);
		var div_4 = sibling(div_2, 2);
		var div_5 = child(div_4);
		var node_8 = child(div_5);
		Search(node_8, { class: "absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/60" });
		var input = sibling(node_8, 2);
		reset(div_5);
		var select = sibling(div_5, 2);
		var option = child(select);
		option.value = option.__value = "all";
		var option_1 = sibling(option);
		option_1.value = option_1.__value = "new";
		var option_2 = sibling(option_1);
		option_2.value = option_2.__value = "contacted";
		var option_3 = sibling(option_2);
		option_3.value = option_3.__value = "converted";
		var option_4 = sibling(option_3);
		option_4.value = option_4.__value = "lost";
		reset(select);
		reset(div_4);
		var node_9 = sibling(div_4, 2);
		var consequent_1 = ($$anchor) => {
			var div_6 = root_4();
			Refresh_cw(child(div_6), { class: "h-8 w-8 text-primary animate-spin" });
			reset(div_6);
			append($$anchor, div_6);
		};
		var consequent_3 = ($$anchor) => {
			var fragment_4 = root_10();
			var div_7 = first_child(fragment_4);
			var table = child(div_7);
			var tbody = sibling(child(table));
			each(tbody, 21, () => get(leadsData).items, index, ($$anchor, row) => {
				var tr = root_7();
				var td = child(tr);
				var text = child(td);
				reset(td);
				var td_1 = sibling(td);
				var span = child(td_1);
				var text_1 = child(span, true);
				reset(span);
				var span_1 = sibling(span, 2);
				var text_2 = child(span_1);
				reset(span_1);
				reset(td_1);
				var td_2 = sibling(td_1);
				var text_3 = child(td_2, true);
				reset(td_2);
				var td_3 = sibling(td_2);
				var text_4 = child(td_3, true);
				reset(td_3);
				var td_4 = sibling(td_3);
				var text_5 = child(td_4, true);
				reset(td_4);
				var td_5 = sibling(td_4);
				var span_2 = child(td_5);
				var text_6 = child(span_2, true);
				reset(span_2);
				reset(td_5);
				var td_6 = sibling(td_5);
				var node_11 = child(td_6);
				var consequent_2 = ($$anchor) => {
					var span_3 = root_5();
					var node_12 = child(span_3);
					Bell(node_12, { class: "h-3 w-3 fill-current" });
					DateDisplay(sibling(node_12, 2), { get value() {
						return get(row).reminderDate;
					} });
					reset(span_3);
					append($$anchor, span_3);
				};
				var alternate = ($$anchor) => {
					append($$anchor, root_6());
				};
				if_block(node_11, ($$render) => {
					if (get(row).reminderActive && get(row).reminderDate) $$render(consequent_2);
					else $$render(alternate, -1);
				});
				reset(td_6);
				var td_7 = sibling(td_6);
				DateDisplay(child(td_7), { get value() {
					return get(row).createdAt;
				} });
				reset(td_7);
				reset(tr);
				template_effect(($0) => {
					set_text(text, `#${get(row).id ?? ""}`);
					set_text(text_1, get(row).name);
					set_text(text_2, `${get(row).countryCode ?? ""} ${get(row).mobileNo ?? ""}`);
					set_text(text_3, get(row).services || "—");
					set_text(text_4, get(row).leadSource || "—");
					set_text(text_5, get(row).createdByName || "—");
					set_class(span_2, 1, `inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold capitalize ${$0 ?? ""}`);
					set_text(text_6, get(row).status);
				}, [() => statusColor(get(row).status)]);
				append($$anchor, tr);
			});
			reset(tbody);
			reset(table);
			reset(div_7);
			var div_8 = sibling(div_7, 2);
			var span_5 = child(div_8);
			var text_7 = child(span_5);
			reset(span_5);
			var div_9 = sibling(span_5, 2);
			var node_15 = child(div_9);
			{
				let $0 = user_derived(() => get(currentPage) <= 1);
				Button(node_15, {
					variant: "outline",
					class: "h-8.5 cursor-pointer rounded-xl px-2.5",
					get disabled() {
						return get($0);
					},
					onclick: () => {
						update(currentPage, -1);
						fetchLeads();
					},
					children: ($$anchor, $$slotProps) => {
						var fragment_5 = root_8();
						Chevron_left(first_child(fragment_5), { class: "h-3 w-3 mr-1" });
						next();
						append($$anchor, fragment_5);
					},
					$$slots: { default: true }
				});
			}
			var node_17 = sibling(node_15, 2);
			{
				let $0 = user_derived(() => get(currentPage) >= get(leadsData).totalPages);
				Button(node_17, {
					variant: "outline",
					class: "h-8.5 cursor-pointer rounded-xl px-2.5",
					get disabled() {
						return get($0);
					},
					onclick: () => {
						update(currentPage);
						fetchLeads();
					},
					children: ($$anchor, $$slotProps) => {
						next();
						var fragment_6 = root_9();
						Chevron_right(sibling(first_child(fragment_6)), { class: "h-3 w-3 ml-1" });
						append($$anchor, fragment_6);
					},
					$$slots: { default: true }
				});
			}
			reset(div_9);
			reset(div_8);
			template_effect(() => set_text(text_7, `Page ${get(leadsData).page ?? ""} of ${get(leadsData).totalPages ?? ""} (${get(leadsData).totalCount ?? ""} leads)`));
			append($$anchor, fragment_4);
		};
		var alternate_1 = ($$anchor) => {
			append($$anchor, root_11());
		};
		if_block(node_9, ($$render) => {
			if (get(loading)) $$render(consequent_1);
			else if (get(leadsData) && get(leadsData).items && get(leadsData).items.length > 0) $$render(consequent_3, 1);
			else $$render(alternate_1, -1);
		});
		reset(div_1);
		delegated("input", input, (e) => handleSearchInput(e.target.value));
		delegated("change", select, () => {
			set(currentPage, 1);
			fetchLeads();
		});
		bind_select_value(select, () => get(statusFilter), ($$value) => set(statusFilter, $$value));
		append($$anchor, div_1);
	};
	if_block(node, ($$render) => {
		if (get(d)) $$render(consequent);
		else $$render(alternate_2, -1);
	});
	append($$anchor, fragment);
	pop();
}
delegate(["input", "change"]);
//#endregion
export { _page as component };

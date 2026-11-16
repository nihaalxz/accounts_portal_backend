import { B as append, Bt as reset, Ct as user_derived, D as head, H as from_html, I as if_block, K as delegate, N as each, Nt as pop, Pt as push, Q as get, R as set_text, T as clsx, V as comment, _ as set_attribute, b as bind_select_value, bt as state, dt as $document, g as remove_input_defaults, gt as proxy, ht as sibling, it as effect, m as bind_value, mt as first_child, ot as template_effect, pt as child, q as delegated, r as onMount, vt as set, w as set_class, xt as update, y as set_value, zt as next } from "../chunks/dXkmWTgM.js";
import { t as goto } from "../chunks/Bj_IzoEj.js";
import "../chunks/DhaYE-8x.js";
import { r as toast } from "../chunks/CbPRQHfn.js";
import { t as Calendar } from "../chunks/DxFQ7Qxv.js";
import { t as Chevron_left } from "../chunks/bgfi4Y0B2.js";
import { t as Chevron_right } from "../chunks/BQLzQDdY2.js";
import { t as Download } from "../chunks/D8w6XH0S2.js";
import { t as Eye } from "../chunks/CTzUc-eH2.js";
import { t as File_spreadsheet } from "../chunks/B4BvDHOF2.js";
import { t as File_text } from "../chunks/NLRKrZbo2.js";
import { t as Printer } from "../chunks/Ds2DlsUi.js";
import { t as Refresh_cw } from "../chunks/DpTJy0Wb.js";
import { t as Rotate_ccw } from "../chunks/CEB2WCBr.js";
import { t as Search } from "../chunks/D7t9qluE.js";
import { i as formatDateOnly, o as getBahrainDateString } from "../chunks/Cu8_Vl4p.js";
import { t as Button } from "../chunks/BhXsq3bC.js";
import { t as ErrorState } from "../chunks/CRMNR9wu.js";
import "../chunks/bjxT2OS-.js";
import { t as FinancialTableSkeleton } from "../chunks/BifxP-5W2.js";
import { t as EmptyState } from "../chunks/DXyN7dIZ2.js";
import { t as MoneyDisplay } from "../chunks/CIVSRuaR2.js";
import { t as DateDisplay } from "../chunks/DEr_pDJT2.js";
import "../chunks/CS-Kx6i02.js";
import { t as exportToCSV } from "../chunks/C74Z4VDd2.js";
import { t as previewDocument } from "../chunks/PSxDxWhI2.js";
import { r as getQuotations, t as downloadQuotationPdf } from "../chunks/OgrybTU3.js";
//#region src/routes/(app)/sales/quotations/+page.svelte
var root = from_html(`<!> Export CSV`, 1);
var root_1 = from_html(`<!> Refresh`, 1);
var root_2 = from_html(`<!> Reset`, 1);
var root_3 = from_html(`<div class="bg-card border border-border rounded-2xl overflow-hidden shadow-xs"><!></div>`);
var root_4 = from_html(`<tr class="hover:bg-muted/10 transition-colors cursor-pointer"><td class="p-4 font-mono font-bold text-foreground"><a class="hover:underline hover:text-primary cursor-pointer outline-none text-left font-bold font-mono"> </a></td><td class="p-4"><span class="font-bold text-foreground block truncate max-w-[220px]"> </span> <span class="block text-[9px] text-muted-foreground capitalize mt-0.5"> </span></td><td class="p-4 text-muted-foreground truncate max-w-[140px]"> </td><td class="p-4 text-center"><span class="inline-flex items-center justify-center px-2 py-0.5 rounded-md bg-muted text-[11px] font-mono font-semibold"> </span></td><td class="p-4 text-right font-bold text-foreground font-mono"><!></td><td class="p-4 text-center"><span> </span></td><td class="p-4 font-mono text-muted-foreground"><!></td><td class="p-4 text-center"><div class="flex items-center justify-center gap-1"><a class="p-1.5 hover:bg-muted text-muted-foreground hover:text-foreground rounded-lg transition-colors cursor-pointer inline-block" title="Inspect details"><!></a> <!> <!></div></td></tr>`);
var root_5 = from_html(`<!> Previous`, 1);
var root_6 = from_html(`Next <!>`, 1);
var root_7 = from_html(`<div class="bg-card border border-border rounded-2xl overflow-hidden shadow-xs"><div class="overflow-x-auto"><table class="w-full min-w-[900px] text-left border-collapse text-xs"><thead><tr class="bg-muted/30 border-b border-border text-muted-foreground font-semibold"><th class="p-4 w-32">Quotation No.</th><th class="p-4">Customer Name</th><th class="p-4 w-32">Salesman</th><th class="p-4 w-24 text-center">Items</th><th class="p-4 w-32 text-right">Quoted Amount</th><th class="p-4 w-28 text-center">Status</th><th class="p-4 w-32">Logged Date</th><th class="p-4 w-24 text-center">Actions</th></tr></thead><tbody class="divide-y divide-border/60"></tbody></table></div> <div class="p-4 border-t border-border/80 bg-muted/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"><div class="text-muted-foreground">Showing <span class="font-bold text-foreground"> </span> of <span class="font-bold text-foreground"> </span> quotations</div> <div class="flex items-center gap-2"><!> <span class="px-2 font-semibold text-foreground"> </span> <!></div></div></div>`);
var root_8 = from_html(`<div class="space-y-6"><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"><div class="flex flex-col gap-1"><div class="flex items-center gap-2"><h1 class="text-xl font-bold text-foreground">Sales Quotations</h1> <span class="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold bg-primary/10 text-primary border border-primary/20">Sales Portal Sync</span></div> <p class="text-xs text-muted-foreground">Review, inspect service itemizations, track quoted volume, and export official quotations from the Sales Portal.</p></div> <div class="flex items-center gap-2"><!> <!></div></div> <div class="bg-card border border-border rounded-2xl p-4 shadow-xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 text-xs"><div class="relative flex-1"><!> <input type="text" placeholder="Search by Quotation # (TXSQT...), Customer Name, Contact, Email, or Salesman..." class="pl-10 h-10 w-full bg-background border border-border rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground"/></div> <div class="flex flex-wrap items-center gap-3"><div class="flex items-center gap-2"><span class="font-medium text-muted-foreground">Status:</span> <select class="h-10 bg-background border border-border rounded-xl px-3 text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer"><option>All Statuses</option><option>Pending</option><option>Approved</option><option>Rejected</option><option>Success</option></select></div> <div class="flex items-center gap-2"><!> <input type="date" class="h-10 bg-background border border-border rounded-xl px-2.5 text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer"/> <span class="text-muted-foreground">—</span> <input type="date" class="h-10 bg-background border border-border rounded-xl px-2.5 text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer"/></div> <!></div></div> <!></div>`);
function _page($$anchor, $$props) {
	push($$props, true);
	let items = state(proxy([]));
	let totalCount = state(0);
	let totalPages = state(1);
	let loading = state(true);
	let errorMsg = state(null);
	let searchVal = state("");
	let statusFilter = state("all");
	let startDate = state("");
	let endDate = state("");
	let currentPage = state(1);
	let pageSize = 15;
	let searchDebounceTimer = null;
	let abortController = null;
	async function loadData() {
		if (abortController) abortController.abort();
		abortController = new AbortController();
		set(loading, true);
		set(errorMsg, null);
		try {
			const res = await getQuotations({
				page: get(currentPage),
				pageSize,
				search: get(searchVal).trim() || void 0,
				status: get(statusFilter) !== "all" ? get(statusFilter) : void 0,
				startDate: get(startDate) || void 0,
				endDate: get(endDate) || void 0
			}, abortController.signal);
			set(items, res.items || [], true);
			set(totalCount, res.totalCount || 0, true);
			set(totalPages, res.totalPages || 1, true);
		} catch (err) {
			if (err.name === "AbortError") return;
			set(errorMsg, err.message || "Failed to load quotations from Sales Portal.", true);
		} finally {
			set(loading, false);
		}
	}
	function handleSearchInput(e) {
		set(searchVal, e.currentTarget.value, true);
		if (searchDebounceTimer) clearTimeout(searchDebounceTimer);
		searchDebounceTimer = setTimeout(() => {
			set(currentPage, 1);
			loadData();
		}, 300);
	}
	function resetFilters() {
		set(searchVal, "");
		set(statusFilter, "all");
		set(startDate, "");
		set(endDate, "");
		set(currentPage, 1);
		loadData();
	}
	function statusClass(status) {
		const s = (status ?? "").toLowerCase().trim();
		if (s === "approved" || s === "success") return "bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800";
		if (s === "pending" || s === "processing" || !s) return "bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800";
		if (s === "rejected" || s === "cancelled") return "bg-red-50 text-red-700 border border-red-200 dark:bg-red-950/40 dark:text-red-300 dark:border-red-800";
		return "bg-muted text-muted-foreground border border-border";
	}
	async function handleRowDownloadPdf(e, q) {
		e.stopPropagation();
		try {
			await downloadQuotationPdf(q.id, q.documentNumber);
			toast.success("Quotation PDF downloaded.");
		} catch (err) {
			toast.error("Failed to download PDF.");
		}
	}
	function handleRowPrint(e, q) {
		e.stopPropagation();
		previewDocument("report", "quotation", q.id);
	}
	function exportCSV() {
		if (get(items).length === 0) return;
		const csvHeaders = [
			"Quotation Number",
			"Date",
			"Client Type",
			"Customer / Head Name",
			"Contact",
			"Email",
			"Sales Representative",
			"Items Count",
			"Total Amount (BHD)",
			"Status"
		];
		const csvRows = get(items).map((q) => [
			q.documentNumber,
			q.createdAt ? formatDateOnly(q.createdAt) : "",
			q.clientType,
			q.customerName,
			q.customerContact || "",
			q.customerEmail || "",
			q.salesmanName,
			q.itemsCount,
			q.totalAmount,
			q.status || "pending"
		]);
		exportToCSV(`Sales_Quotations_${getBahrainDateString()}.csv`, csvHeaders, csvRows);
		toast.success("CSV exported successfully.");
	}
	onMount(() => {
		loadData();
		return () => {
			if (abortController) abortController.abort();
		};
	});
	var div = root_8();
	head("1fo6w0m", ($$anchor) => {
		effect(() => {
			$document.title = "Sales Quotations — Accounts Portal";
		});
	});
	var div_1 = child(div);
	var div_2 = sibling(child(div_1), 2);
	var node = child(div_2);
	{
		let $0 = user_derived(() => get(items).length === 0);
		Button(node, {
			variant: "outline",
			size: "sm",
			class: "rounded-xl text-xs py-5 px-4 cursor-pointer font-semibold",
			onclick: exportCSV,
			get disabled() {
				return get($0);
			},
			children: ($$anchor, $$slotProps) => {
				var fragment = root();
				File_spreadsheet(first_child(fragment), { class: "h-3.5 w-3.5 mr-1.5 text-emerald-600" });
				next();
				append($$anchor, fragment);
			},
			$$slots: { default: true }
		});
	}
	Button(sibling(node, 2), {
		variant: "outline",
		size: "sm",
		class: "rounded-xl text-xs py-5 px-4 cursor-pointer font-semibold",
		onclick: loadData,
		get disabled() {
			return get(loading);
		},
		children: ($$anchor, $$slotProps) => {
			var fragment_1 = root_1();
			var node_3 = first_child(fragment_1);
			{
				let $0 = user_derived(() => ["h-3.5 w-3.5 mr-1.5", get(loading) ? "animate-spin" : ""].join(" "));
				Refresh_cw(node_3, { get class() {
					return get($0);
				} });
			}
			next();
			append($$anchor, fragment_1);
		},
		$$slots: { default: true }
	});
	reset(div_2);
	reset(div_1);
	var div_3 = sibling(div_1, 2);
	var div_4 = child(div_3);
	var node_4 = child(div_4);
	Search(node_4, { class: "absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/60" });
	var input = sibling(node_4, 2);
	remove_input_defaults(input);
	reset(div_4);
	var div_5 = sibling(div_4, 2);
	var div_6 = child(div_5);
	var select = sibling(child(div_6), 2);
	var option = child(select);
	option.value = option.__value = "all";
	var option_1 = sibling(option);
	option_1.value = option_1.__value = "pending";
	var option_2 = sibling(option_1);
	option_2.value = option_2.__value = "approved";
	var option_3 = sibling(option_2);
	option_3.value = option_3.__value = "rejected";
	var option_4 = sibling(option_3);
	option_4.value = option_4.__value = "success";
	reset(select);
	reset(div_6);
	var div_7 = sibling(div_6, 2);
	var node_5 = child(div_7);
	Calendar(node_5, { class: "h-4 w-4 text-muted-foreground" });
	var input_1 = sibling(node_5, 2);
	remove_input_defaults(input_1);
	var input_2 = sibling(input_1, 4);
	remove_input_defaults(input_2);
	reset(div_7);
	var node_6 = sibling(div_7, 2);
	var consequent = ($$anchor) => {
		Button($$anchor, {
			variant: "ghost",
			size: "sm",
			class: "h-10 px-3 text-xs text-muted-foreground hover:text-foreground rounded-xl cursor-pointer flex items-center gap-1.5",
			onclick: resetFilters,
			children: ($$anchor, $$slotProps) => {
				var fragment_3 = root_2();
				Rotate_ccw(first_child(fragment_3), { class: "h-3.5 w-3.5" });
				next();
				append($$anchor, fragment_3);
			},
			$$slots: { default: true }
		});
	};
	if_block(node_6, ($$render) => {
		if (get(searchVal) || get(statusFilter) !== "all" || get(startDate) || get(endDate)) $$render(consequent);
	});
	reset(div_5);
	reset(div_3);
	var node_8 = sibling(div_3, 2);
	var consequent_1 = ($$anchor) => {
		ErrorState($$anchor, {
			get message() {
				return get(errorMsg);
			},
			retryAction: loadData
		});
	};
	var alternate_1 = ($$anchor) => {
		var fragment_5 = comment();
		var node_9 = first_child(fragment_5);
		var consequent_2 = ($$anchor) => {
			var div_8 = root_3();
			FinancialTableSkeleton(child(div_8), {
				rows: 5,
				columns: 9
			});
			reset(div_8);
			append($$anchor, div_8);
		};
		var consequent_3 = ($$anchor) => {
			EmptyState($$anchor, {
				title: "No sales quotations found",
				description: "There are currently no quotations matching the applied filter or search term.",
				get icon() {
					return File_text;
				}
			});
		};
		var alternate = ($$anchor) => {
			var div_9 = root_7();
			var div_10 = child(div_9);
			var table = child(div_10);
			var tbody = sibling(child(table));
			each(tbody, 21, () => get(items), (q) => q.id, ($$anchor, q) => {
				var tr = root_4();
				var td = child(tr);
				var a = child(td);
				var text = child(a, true);
				reset(a);
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
				var span_2 = child(td_3);
				var text_4 = child(span_2, true);
				reset(span_2);
				reset(td_3);
				var td_4 = sibling(td_3);
				MoneyDisplay(child(td_4), { get amount() {
					return get(q).totalAmount;
				} });
				reset(td_4);
				var td_5 = sibling(td_4);
				var span_3 = child(td_5);
				var text_5 = child(span_3, true);
				reset(span_3);
				reset(td_5);
				var td_6 = sibling(td_5);
				DateDisplay(child(td_6), { get value() {
					return get(q).createdAt;
				} });
				reset(td_6);
				var td_7 = sibling(td_6);
				var div_11 = child(td_7);
				var a_1 = child(div_11);
				Eye(child(a_1), { class: "h-4 w-4" });
				reset(a_1);
				var node_14 = sibling(a_1, 2);
				Button(node_14, {
					variant: "ghost",
					size: "sm",
					class: "h-7 w-7 p-0 rounded-lg text-muted-foreground hover:text-primary cursor-pointer",
					title: "Download PDF",
					onclick: (e) => handleRowDownloadPdf(e, get(q)),
					children: ($$anchor, $$slotProps) => {
						Download($$anchor, { class: "h-3.5 w-3.5" });
					},
					$$slots: { default: true }
				});
				Button(sibling(node_14, 2), {
					variant: "ghost",
					size: "sm",
					class: "h-7 w-7 p-0 rounded-lg text-muted-foreground hover:text-primary cursor-pointer",
					title: "Print Preview",
					onclick: (e) => handleRowPrint(e, get(q)),
					children: ($$anchor, $$slotProps) => {
						Printer($$anchor, { class: "h-3.5 w-3.5" });
					},
					$$slots: { default: true }
				});
				reset(div_11);
				reset(td_7);
				reset(tr);
				template_effect(($0) => {
					set_attribute(a, "href", `/sales/quotations/${get(q).id}`);
					set_text(text, get(q).documentNumber);
					set_attribute(span, "title", get(q).customerName);
					set_text(text_1, get(q).customerName);
					set_text(text_2, `${get(q).clientType ?? ""} ${get(q).customerContact ? `• ${get(q).customerContact}` : ""}`);
					set_attribute(td_2, "title", get(q).salesmanName);
					set_text(text_3, get(q).salesmanName || "—");
					set_text(text_4, get(q).itemsCount);
					set_class(span_3, 1, $0);
					set_text(text_5, get(q).status || "pending");
					set_attribute(a_1, "href", `/sales/quotations/${get(q).id}`);
				}, [() => clsx(["inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold capitalize border", statusClass(get(q).status)].join(" "))]);
				delegated("click", tr, () => goto(`/sales/quotations/${get(q).id}`));
				delegated("click", a, (e) => {
					e.stopPropagation();
				});
				delegated("click", a_1, (e) => {
					e.stopPropagation();
				});
				append($$anchor, tr);
			});
			reset(tbody);
			reset(table);
			reset(div_10);
			var div_12 = sibling(div_10, 2);
			var div_13 = child(div_12);
			var span_4 = sibling(child(div_13));
			var text_6 = child(span_4, true);
			reset(span_4);
			var span_5 = sibling(span_4, 2);
			var text_7 = child(span_5, true);
			reset(span_5);
			next();
			reset(div_13);
			var div_14 = sibling(div_13, 2);
			var node_16 = child(div_14);
			{
				let $0 = user_derived(() => get(currentPage) <= 1 || get(loading));
				Button(node_16, {
					variant: "outline",
					size: "sm",
					class: "h-8 text-xs cursor-pointer rounded-lg",
					get disabled() {
						return get($0);
					},
					onclick: () => {
						update(currentPage, -1);
						loadData();
					},
					children: ($$anchor, $$slotProps) => {
						var fragment_9 = root_5();
						Chevron_left(first_child(fragment_9), { class: "h-3.5 w-3.5 mr-1" });
						next();
						append($$anchor, fragment_9);
					},
					$$slots: { default: true }
				});
			}
			var span_6 = sibling(node_16, 2);
			var text_8 = child(span_6);
			reset(span_6);
			var node_18 = sibling(span_6, 2);
			{
				let $0 = user_derived(() => get(currentPage) >= get(totalPages) || get(loading));
				Button(node_18, {
					variant: "outline",
					size: "sm",
					class: "h-8 text-xs cursor-pointer rounded-lg",
					get disabled() {
						return get($0);
					},
					onclick: () => {
						update(currentPage);
						loadData();
					},
					children: ($$anchor, $$slotProps) => {
						next();
						var fragment_10 = root_6();
						Chevron_right(sibling(first_child(fragment_10)), { class: "h-3.5 w-3.5 ml-1" });
						append($$anchor, fragment_10);
					},
					$$slots: { default: true }
				});
			}
			reset(div_14);
			reset(div_12);
			reset(div_9);
			template_effect(() => {
				set_text(text_6, get(items).length);
				set_text(text_7, get(totalCount));
				set_text(text_8, `Page ${get(currentPage) ?? ""} of ${get(totalPages) ?? ""}`);
			});
			append($$anchor, div_9);
		};
		if_block(node_9, ($$render) => {
			if (get(loading)) $$render(consequent_2);
			else if (get(items).length === 0) $$render(consequent_3, 1);
			else $$render(alternate, -1);
		});
		append($$anchor, fragment_5);
	};
	if_block(node_8, ($$render) => {
		if (get(errorMsg)) $$render(consequent_1);
		else $$render(alternate_1, -1);
	});
	reset(div);
	template_effect(() => set_value(input, get(searchVal)));
	delegated("input", input, handleSearchInput);
	delegated("change", select, () => {
		set(currentPage, 1);
		loadData();
	});
	bind_select_value(select, () => get(statusFilter), ($$value) => set(statusFilter, $$value));
	delegated("change", input_1, () => {
		set(currentPage, 1);
		loadData();
	});
	bind_value(input_1, () => get(startDate), ($$value) => set(startDate, $$value));
	delegated("change", input_2, () => {
		set(currentPage, 1);
		loadData();
	});
	bind_value(input_2, () => get(endDate), ($$value) => set(endDate, $$value));
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

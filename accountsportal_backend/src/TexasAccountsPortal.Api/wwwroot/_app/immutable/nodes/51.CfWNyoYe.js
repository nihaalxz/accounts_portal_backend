import { B as append, Bt as reset, Ct as user_derived, D as head, Et as store_get, G as text, H as from_html, I as if_block, K as delegate, N as each, Nt as pop, P as index, Pt as push, Q as get, R as set_text, Tt as setup_stores, _ as set_attribute, bt as state, dt as $document, g as remove_input_defaults, gt as proxy, ht as sibling, it as effect, m as bind_value, mt as first_child, n as onDestroy, ot as template_effect, pt as child, q as delegated, r as onMount, vt as set, w as set_class, xt as update, y as set_value, zt as next } from "../chunks/dXkmWTgM.js";
import "../chunks/DhaYE-8x.js";
import { t as apiFetch } from "../chunks/BUscfd74.js";
import { r as toast } from "../chunks/CbPRQHfn.js";
import { t as Chevron_left } from "../chunks/bgfi4Y0B.js";
import { t as Chevron_right } from "../chunks/BQLzQDdY.js";
import { t as Download } from "../chunks/D8w6XH0S2.js";
import { t as Eye } from "../chunks/CTzUc-eH2.js";
import { t as Printer } from "../chunks/Ds2DlsUi2.js";
import { t as Refresh_cw } from "../chunks/DpTJy0Wb2.js";
import { t as Search } from "../chunks/D7t9qluE.js";
import { t as page } from "../chunks/D7LHX6_I.js";
import { t as Button } from "../chunks/BhXsq3bC.js";
import { t as MoneyDisplay } from "../chunks/CIVSRuaR.js";
import { t as DateDisplay } from "../chunks/DeM3dT31.js";
import "../chunks/b6Dp7q4Y.js";
import { t as exportToCSV } from "../chunks/C74Z4VDd2.js";
import { t as previewDocument } from "../chunks/CDb3mCqV2.js";
import { t as ReceiptRealtimeController } from "../chunks/CZ176Wzy2.js";
//#region src/routes/(app)/sales/receipts/+page.svelte
var root = from_html(`<!> <span> </span>`, 1);
var root_1 = from_html(`<!> <span>Print</span>`, 1);
var root_2 = from_html(`<!> <span>Reload</span>`, 1);
var root_3 = from_html(`<div class="bg-card border border-border rounded-2xl p-6 h-96 flex items-center justify-center animate-pulse"><!></div>`);
var root_4 = from_html(`<tr class="hover:bg-muted/10 transition-colors"><td class="p-4 font-mono font-bold text-foreground"><a class="hover:underline hover:text-primary cursor-pointer outline-none text-left font-bold font-mono"> </a></td><td class="p-4"><span class="font-bold text-foreground block"> </span> <span class="block text-[9px] text-muted-foreground capitalize mt-0.5"> </span></td><td class="p-4 text-muted-foreground"> </td><td class="p-4 uppercase text-muted-foreground font-semibold"> </td><td class="p-4 font-mono font-bold text-right text-foreground"><!></td><td class="p-4 text-center"><span> </span></td><td class="p-4 font-mono text-muted-foreground"><!></td><td class="p-4 text-center print:hidden"><a class="p-1.5 hover:bg-muted text-muted-foreground hover:text-foreground rounded-lg transition-colors cursor-pointer inline-block" title="Inspect details"><!></a></td></tr>`);
var root_5 = from_html(`<!> Prev`, 1);
var root_6 = from_html(`Next <!>`, 1);
var root_7 = from_html(`<div class="bg-card border border-border rounded-2xl overflow-x-auto shadow-xs print:border-none print:shadow-none max-w-full"><table class="w-full min-w-[750px] text-left border-collapse text-xs"><thead><tr class="bg-muted/30 border-b border-border text-muted-foreground font-semibold print:bg-transparent"><th class="p-4 w-32">Receipt Number</th><th class="p-4">Customer Name</th><th class="p-4">Salesman</th><th class="p-4">Service Type</th><th class="p-4 text-right">Receipt Amount</th><th class="p-4 text-center">Status</th><th class="p-4 w-32">Logged Date</th><th class="p-4 w-16 text-center print:hidden">Action</th></tr></thead><tbody class="divide-y divide-border/60"></tbody></table></div> <div class="flex items-center justify-between text-xs pt-4 print:hidden"><span class="text-muted-foreground"> </span> <div class="flex gap-2"><!> <!></div></div>`, 1);
var root_8 = from_html(`<div class="bg-card border border-border rounded-2xl p-16 text-center text-muted-foreground text-xs print:hidden">No receipts found matching filters.</div>`);
var root_9 = from_html(`<div class="space-y-6 print:space-y-0 print:p-0"><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 print:hidden"><div class="flex flex-col gap-1"><h1 class="text-xl font-bold text-foreground font-sans">Payment Receipts Workspace</h1> <p class="text-xs text-muted-foreground">Manage and review customer collections, target bank deposits, and cash allocation breakouts.</p></div> <div class="flex flex-wrap gap-2.5"><!> <!> <!></div></div> <div class="bg-card border border-border rounded-2xl p-4 flex flex-col sm:flex-row items-center gap-3 print:hidden"><div class="relative flex-1 w-full"><!> <input type="text" placeholder="Search by Document Ref, Receipt ID, Head Name..." class="w-full text-xs pl-10 pr-4 py-2 border border-border rounded-xl bg-background text-foreground placeholder-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20"/></div> <div class="flex items-center gap-2 text-xs w-full sm:w-auto"><input type="date" class="p-2 border border-border rounded-xl bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary text-xs"/> <span class="text-muted-foreground font-semibold">to</span> <input type="date" class="p-2 border border-border rounded-xl bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary text-xs"/> <!></div></div> <!></div>`);
function _page($$anchor, $$props) {
	push($$props, true);
	const $page = () => store_get(page, "$page", $$stores);
	const [$$stores, $$cleanup] = setup_stores();
	let receiptsData = state(null);
	let loading = state(false);
	let currentPage = state(1);
	let pageSize = 10;
	let searchVal = state(proxy($page().url.searchParams.get("search") || ""));
	let startDate = state("");
	let endDate = state("");
	let realtimeController = null;
	let searchTimeout;
	function handleSearchInput(val) {
		clearTimeout(searchTimeout);
		searchTimeout = setTimeout(() => {
			set(searchVal, val, true);
			set(currentPage, 1);
			fetchReceipts();
		}, 400);
	}
	async function fetchReceipts() {
		set(loading, true);
		try {
			const params = {
				page: get(currentPage),
				pageSize
			};
			if (get(searchVal).trim()) params.search = get(searchVal).trim();
			if (get(startDate)) params.startDate = get(startDate);
			if (get(endDate)) params.endDate = get(endDate);
			const res = await apiFetch("api/sales-entries/receipts", { params });
			set(receiptsData, res, true);
		} catch (err) {
			console.error("Failed to load receipts list:", err);
		} finally {
			set(loading, false);
		}
	}
	onMount(() => {
		fetchReceipts();
		realtimeController = new ReceiptRealtimeController({
			isGlobalList: true,
			onReceiptChanged: () => fetchReceipts()
		});
		realtimeController.mount();
	});
	onDestroy(() => {
		realtimeController?.unmount();
	});
	let exportingCSV = state(false);
	async function exportToCSV$1() {
		set(exportingCSV, true);
		try {
			const params = {
				page: 1,
				pageSize: 1e4
			};
			if (get(searchVal).trim()) params.search = get(searchVal).trim();
			if (get(startDate)) params.startDate = get(startDate);
			if (get(endDate)) params.endDate = get(endDate);
			const items = (await apiFetch("api/sales-entries/receipts", { params }).catch((err) => {
				console.warn("apiFetch receipts failed, falling back to receiptsData:", err);
				return null;
			}))?.items || get(receiptsData)?.items || [];
			if (items.length === 0) {
				toast.info("No receipt records available to export.");
				return;
			}
			exportToCSV("payment_receipts_export.csv", [
				"Receipt Number",
				"Customer/Agent Name",
				"Salesman",
				"Service Type",
				"Amount (BHD)",
				"Payment Method",
				"Status",
				"Logged Date"
			], items.map((row) => [
				row.documentNumber || row.receiptId,
				row.headName || "",
				row.salesmanName || "",
				row.service || "",
				row.amount,
				row.paymentMode || "",
				row.status || "",
				row.createdAt ? row.createdAt.split("T")[0] : ""
			]));
			toast.success("CSV exported successfully.");
		} catch (err) {
			console.error("Failed to export receipts CSV:", err);
			toast.error("Failed to export CSV: " + (err?.message || "Unknown error"));
		} finally {
			set(exportingCSV, false);
		}
	}
	function handlePrint() {
		previewDocument("list", "receipt", {
			searchTerm: get(searchVal),
			startDate: get(startDate),
			endDate: get(endDate)
		});
		toast.info("Generating print document...");
	}
	var div = root_9();
	head("12fd6s0", ($$anchor) => {
		effect(() => {
			$document.title = "Receipts & Postings — Accounts Portal";
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
	var node_2 = sibling(node, 2);
	Button(node_2, {
		variant: "outline",
		class: "h-8.5 rounded-xl cursor-pointer flex items-center gap-1.5 text-xs font-semibold",
		onclick: handlePrint,
		children: ($$anchor, $$slotProps) => {
			var fragment_1 = root_1();
			Printer(first_child(fragment_1), { class: "h-3.5 w-3.5" });
			next(2);
			append($$anchor, fragment_1);
		},
		$$slots: { default: true }
	});
	Button(sibling(node_2, 2), {
		variant: "outline",
		class: "h-8.5 rounded-xl cursor-pointer flex items-center gap-1.5 text-xs font-semibold",
		onclick: fetchReceipts,
		children: ($$anchor, $$slotProps) => {
			var fragment_2 = root_2();
			Refresh_cw(first_child(fragment_2), { class: "h-3.5 w-3.5" });
			next(2);
			append($$anchor, fragment_2);
		},
		$$slots: { default: true }
	});
	reset(div_2);
	reset(div_1);
	var div_3 = sibling(div_1, 2);
	var div_4 = child(div_3);
	var node_6 = child(div_4);
	Search(node_6, { class: "absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/60" });
	var input = sibling(node_6, 2);
	remove_input_defaults(input);
	reset(div_4);
	var div_5 = sibling(div_4, 2);
	var input_1 = child(div_5);
	remove_input_defaults(input_1);
	var input_2 = sibling(input_1, 4);
	remove_input_defaults(input_2);
	var node_7 = sibling(input_2, 2);
	var consequent = ($$anchor) => {
		Button($$anchor, {
			variant: "ghost",
			size: "xs",
			class: "text-xs font-semibold text-muted-foreground hover:text-foreground",
			onclick: () => {
				set(startDate, "");
				set(endDate, "");
				fetchReceipts();
			},
			children: ($$anchor, $$slotProps) => {
				next();
				append($$anchor, text("Clear"));
			},
			$$slots: { default: true }
		});
	};
	if_block(node_7, ($$render) => {
		if (get(startDate) || get(endDate)) $$render(consequent);
	});
	reset(div_5);
	reset(div_3);
	var node_8 = sibling(div_3, 2);
	var consequent_1 = ($$anchor) => {
		var div_6 = root_3();
		Refresh_cw(child(div_6), { class: "h-8 w-8 text-primary animate-spin" });
		reset(div_6);
		append($$anchor, div_6);
	};
	var consequent_2 = ($$anchor) => {
		var fragment_4 = root_7();
		var div_7 = first_child(fragment_4);
		var table = child(div_7);
		var tbody = sibling(child(table));
		each(tbody, 21, () => get(receiptsData).items, index, ($$anchor, row) => {
			var tr = root_4();
			var td = child(tr);
			var a = child(td);
			var text_2 = child(a, true);
			reset(a);
			reset(td);
			var td_1 = sibling(td);
			var span_1 = child(td_1);
			var text_3 = child(span_1, true);
			reset(span_1);
			var span_2 = sibling(span_1, 2);
			var text_4 = child(span_2, true);
			reset(span_2);
			reset(td_1);
			var td_2 = sibling(td_1);
			var text_5 = child(td_2, true);
			reset(td_2);
			var td_3 = sibling(td_2);
			var text_6 = child(td_3, true);
			reset(td_3);
			var td_4 = sibling(td_3);
			MoneyDisplay(child(td_4), { get amount() {
				return get(row).amount;
			} });
			reset(td_4);
			var td_5 = sibling(td_4);
			var span_3 = child(td_5);
			var text_7 = child(span_3, true);
			reset(span_3);
			reset(td_5);
			var td_6 = sibling(td_5);
			DateDisplay(child(td_6), { get value() {
				return get(row).createdAt;
			} });
			reset(td_6);
			var td_7 = sibling(td_6);
			var a_1 = child(td_7);
			Eye(child(a_1), { class: "h-4.5 w-4.5" });
			reset(a_1);
			reset(td_7);
			reset(tr);
			template_effect(() => {
				set_attribute(a, "href", `/sales/receipts/${get(row).id}`);
				set_text(text_2, get(row).documentNumber || get(row).receiptId);
				set_text(text_3, get(row).headName || "—");
				set_text(text_4, get(row).clientType);
				set_text(text_5, get(row).salesmanName || "—");
				set_text(text_6, get(row).service);
				set_class(span_3, 1, `inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold capitalize
									${get(row).status === "success" || get(row).status === "posted" ? "bg-emerald-50 text-emerald-700 border border-emerald-200" : "bg-amber-50 text-amber-700 border border-amber-200"}`);
				set_text(text_7, get(row).status);
				set_attribute(a_1, "href", `/sales/receipts/${get(row).id}`);
			});
			append($$anchor, tr);
		});
		reset(tbody);
		reset(table);
		reset(div_7);
		var div_8 = sibling(div_7, 2);
		var span_4 = child(div_8);
		var text_8 = child(span_4);
		reset(span_4);
		var div_9 = sibling(span_4, 2);
		var node_13 = child(div_9);
		{
			let $0 = user_derived(() => get(currentPage) <= 1);
			Button(node_13, {
				variant: "outline",
				class: "h-8.5 cursor-pointer rounded-xl px-2.5",
				get disabled() {
					return get($0);
				},
				onclick: () => {
					update(currentPage, -1);
					fetchReceipts();
				},
				children: ($$anchor, $$slotProps) => {
					var fragment_5 = root_5();
					Chevron_left(first_child(fragment_5), { class: "h-3 w-3 mr-1" });
					next();
					append($$anchor, fragment_5);
				},
				$$slots: { default: true }
			});
		}
		var node_15 = sibling(node_13, 2);
		{
			let $0 = user_derived(() => get(currentPage) >= get(receiptsData).totalPages);
			Button(node_15, {
				variant: "outline",
				class: "h-8.5 cursor-pointer rounded-xl px-2.5",
				get disabled() {
					return get($0);
				},
				onclick: () => {
					update(currentPage);
					fetchReceipts();
				},
				children: ($$anchor, $$slotProps) => {
					next();
					var fragment_6 = root_6();
					Chevron_right(sibling(first_child(fragment_6)), { class: "h-3 w-3 ml-1" });
					append($$anchor, fragment_6);
				},
				$$slots: { default: true }
			});
		}
		reset(div_9);
		reset(div_8);
		template_effect(() => set_text(text_8, `Page ${get(receiptsData).page ?? ""} of ${get(receiptsData).totalPages ?? ""} (${get(receiptsData).totalCount ?? ""} items)`));
		append($$anchor, fragment_4);
	};
	var alternate = ($$anchor) => {
		append($$anchor, root_8());
	};
	if_block(node_8, ($$render) => {
		if (get(loading)) $$render(consequent_1);
		else if (get(receiptsData) && get(receiptsData).items && get(receiptsData).items.length > 0) $$render(consequent_2, 1);
		else $$render(alternate, -1);
	});
	reset(div);
	template_effect(() => set_value(input, get(searchVal)));
	delegated("input", input, (e) => handleSearchInput(e.target.value));
	delegated("change", input_1, () => {
		set(currentPage, 1);
		fetchReceipts();
	});
	bind_value(input_1, () => get(startDate), ($$value) => set(startDate, $$value));
	delegated("change", input_2, () => {
		set(currentPage, 1);
		fetchReceipts();
	});
	bind_value(input_2, () => get(endDate), ($$value) => set(endDate, $$value));
	append($$anchor, div);
	pop();
	$$cleanup();
}
delegate(["input", "change"]);
//#endregion
export { _page as component };

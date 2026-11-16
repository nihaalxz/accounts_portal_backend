import { B as append, D as head, H as from_html, I as if_block, K as delegate, Lt as next, Mt as push, N as each, P as index, Q as get, R as set_text, Rt as reset, _ as set_attribute, dt as child, ft as first_child, gt as set, it as effect, jt as pop, n as onDestroy, ot as template_effect, pt as sibling, q as delegated, r as onMount, ut as $document, vt as state, w as set_class, xt as user_derived, yt as update } from "../chunks/BdGPDeRo.js";
import "../chunks/DhaYE-8x.js";
import { t as apiFetch } from "../chunks/DPA267lK.js";
import { t as Chevron_left } from "../chunks/CsLK6PIo.js";
import { t as Chevron_right } from "../chunks/Dxef15ul.js";
import { t as Download } from "../chunks/DBd-WEs4.js";
import { t as Eye } from "../chunks/BFVTEy5u.js";
import { t as Printer } from "../chunks/CNYHernz2.js";
import { t as Refresh_cw } from "../chunks/DFp1vOqU2.js";
import { t as Search } from "../chunks/wyHepXk-2.js";
import { t as Button } from "../chunks/zyE_82FR2.js";
import { t as MoneyDisplay } from "../chunks/BjJP4BTf2.js";
import { t as DateDisplay } from "../chunks/Dr7G9lQx2.js";
import "../chunks/B0UXrdYn.js";
import { t as ReceiptRealtimeController } from "../chunks/B1Ws0iui.js";
//#region src/routes/(app)/sales/receipts/+page.svelte
var root = from_html(`<!> <span>CSV Export</span>`, 1);
var root_1 = from_html(`<!> <span>Print</span>`, 1);
var root_2 = from_html(`<!> <span>Reload</span>`, 1);
var root_3 = from_html(`<div class="bg-card border border-border rounded-2xl p-6 h-96 flex items-center justify-center animate-pulse"><!></div>`);
var root_4 = from_html(`<span class="text-muted-foreground/35">—</span>`);
var root_5 = from_html(`<tr class="hover:bg-muted/10 transition-colors"><td class="p-4 font-mono font-bold text-foreground"><a class="hover:underline hover:text-primary cursor-pointer outline-none text-left font-bold font-mono"> </a></td><td class="p-4"><span class="font-bold text-foreground block"> </span> <span class="block text-[9px] text-muted-foreground capitalize mt-0.5"> </span></td><td class="p-4 uppercase text-muted-foreground font-semibold"> </td><td class="p-4 font-mono font-bold text-right text-foreground"><!></td><td class="p-4 font-mono text-right text-muted-foreground"><!></td><td class="p-4 font-mono text-right text-muted-foreground"><!></td><td class="p-4 font-mono text-right text-muted-foreground"><!></td><td class="p-4 text-center"><span> </span></td><td class="p-4 font-mono text-muted-foreground"><!></td><td class="p-4 text-center print:hidden"><a class="p-1.5 hover:bg-muted text-muted-foreground hover:text-foreground rounded-lg transition-colors cursor-pointer inline-block" title="Inspect details"><!></a></td></tr>`);
var root_6 = from_html(`<!> Prev`, 1);
var root_7 = from_html(`Next <!>`, 1);
var root_8 = from_html(`<div class="bg-card border border-border rounded-2xl overflow-x-auto shadow-xs print:border-none print:shadow-none max-w-full"><table class="w-full min-w-[750px] text-left border-collapse text-xs"><thead><tr class="bg-muted/30 border-b border-border text-muted-foreground font-semibold print:bg-transparent"><th class="p-4 w-32">Receipt Number</th><th class="p-4">Customer Name</th><th class="p-4">Service Type</th><th class="p-4 text-right">Receipt Amount</th><th class="p-4 text-right">Cash Inflow</th><th class="p-4 text-right">Bank Deposit</th><th class="p-4 text-right">Wallet Debit</th><th class="p-4 text-center">Status</th><th class="p-4 w-32">Logged Date</th><th class="p-4 w-16 text-center print:hidden">Action</th></tr></thead><tbody class="divide-y divide-border/60"></tbody></table></div> <div class="flex items-center justify-between text-xs pt-4 print:hidden"><span class="text-muted-foreground"> </span> <div class="flex gap-2"><!> <!></div></div>`, 1);
var root_9 = from_html(`<div class="bg-card border border-border rounded-2xl p-16 text-center text-muted-foreground text-xs print:hidden">No receipts found matching filters.</div>`);
var root_10 = from_html(`<div class="space-y-6 print:space-y-0 print:p-0"><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 print:hidden"><div class="flex flex-col gap-1"><h1 class="text-xl font-bold text-foreground font-sans">Payment Receipts Workspace</h1> <p class="text-xs text-muted-foreground">Manage and review customer collections, target bank deposits, and cash allocation breakouts.</p></div> <div class="flex flex-wrap gap-2.5"><!> <!> <!></div></div> <div class="bg-card border border-border rounded-2xl p-4 flex flex-col sm:flex-row gap-3 print:hidden"><div class="relative flex-1"><!> <input type="text" placeholder="Search receipts by Receipt ID, Head Name..." class="w-full text-xs pl-10 pr-4 py-2 border border-border rounded-xl bg-background text-foreground placeholder-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20"/></div></div> <!></div>`);
function _page($$anchor, $$props) {
	push($$props, true);
	let receiptsData = state(null);
	let loading = state(false);
	let currentPage = state(1);
	let pageSize = 10;
	let searchVal = state("");
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
	function exportToCSV() {
		if (!get(receiptsData) || !get(receiptsData).items) return;
		const csvContent = "data:text/csv;charset=utf-8," + ["ID,Receipt Number,Customer/Agent,Service Type,Amount,Payment Method,Status,Created At", ...get(receiptsData).items.map((row) => {
			return `"${row.id}","${row.receiptId}","${row.headName || ""}","${row.service}","${row.amount}","${row.paymentMode}","${row.status}","${row.createdAt}"`;
		})].join("\n");
		const encodedUri = encodeURI(csvContent);
		const link = document.createElement("a");
		link.setAttribute("href", encodedUri);
		link.setAttribute("download", "payment_receipts_export.csv");
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}
	function handlePrint() {
		window.print();
	}
	var div = root_10();
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
		onclick: exportToCSV,
		children: ($$anchor, $$slotProps) => {
			var fragment = root();
			Download(first_child(fragment), { class: "h-3.5 w-3.5" });
			next(2);
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
	reset(div_4);
	reset(div_3);
	var node_7 = sibling(div_3, 2);
	var consequent = ($$anchor) => {
		var div_5 = root_3();
		Refresh_cw(child(div_5), { class: "h-8 w-8 text-primary animate-spin" });
		reset(div_5);
		append($$anchor, div_5);
	};
	var consequent_4 = ($$anchor) => {
		var fragment_3 = root_8();
		var div_6 = first_child(fragment_3);
		var table = child(div_6);
		var tbody = sibling(child(table));
		each(tbody, 21, () => get(receiptsData).items, index, ($$anchor, row) => {
			var tr = root_5();
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
			var text_2 = child(span_1, true);
			reset(span_1);
			reset(td_1);
			var td_2 = sibling(td_1);
			var text_3 = child(td_2, true);
			reset(td_2);
			var td_3 = sibling(td_2);
			MoneyDisplay(child(td_3), { get amount() {
				return get(row).amount;
			} });
			reset(td_3);
			var td_4 = sibling(td_3);
			var node_10 = child(td_4);
			var consequent_1 = ($$anchor) => {
				MoneyDisplay($$anchor, { get amount() {
					return get(row).amount;
				} });
			};
			var alternate = ($$anchor) => {
				append($$anchor, root_4());
			};
			if_block(node_10, ($$render) => {
				if (get(row).paymentMode === "cash") $$render(consequent_1);
				else $$render(alternate, -1);
			});
			reset(td_4);
			var td_5 = sibling(td_4);
			var node_11 = child(td_5);
			var consequent_2 = ($$anchor) => {
				MoneyDisplay($$anchor, { get amount() {
					return get(row).amount;
				} });
			};
			var alternate_1 = ($$anchor) => {
				append($$anchor, root_4());
			};
			if_block(node_11, ($$render) => {
				if (get(row).paymentMode === "bank" || get(row).paymentMode === "card") $$render(consequent_2);
				else $$render(alternate_1, -1);
			});
			reset(td_5);
			var td_6 = sibling(td_5);
			var node_12 = child(td_6);
			var consequent_3 = ($$anchor) => {
				MoneyDisplay($$anchor, { get amount() {
					return get(row).amount;
				} });
			};
			var alternate_2 = ($$anchor) => {
				append($$anchor, root_4());
			};
			if_block(node_12, ($$render) => {
				if (get(row).paymentMode === "wallet") $$render(consequent_3);
				else $$render(alternate_2, -1);
			});
			reset(td_6);
			var td_7 = sibling(td_6);
			var span_5 = child(td_7);
			var text_4 = child(span_5, true);
			reset(span_5);
			reset(td_7);
			var td_8 = sibling(td_7);
			DateDisplay(child(td_8), { get value() {
				return get(row).createdAt;
			} });
			reset(td_8);
			var td_9 = sibling(td_8);
			var a_1 = child(td_9);
			Eye(child(a_1), { class: "h-4.5 w-4.5" });
			reset(a_1);
			reset(td_9);
			reset(tr);
			template_effect(() => {
				set_attribute(a, "href", `/sales/receipts/${get(row).id}`);
				set_text(text, get(row).receiptId);
				set_text(text_1, get(row).headName || "—");
				set_text(text_2, get(row).clientType);
				set_text(text_3, get(row).service);
				set_class(span_5, 1, `inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold capitalize
									${get(row).status === "success" || get(row).status === "posted" ? "bg-emerald-50 text-emerald-700 border border-emerald-200" : "bg-amber-50 text-amber-700 border border-amber-200"}`);
				set_text(text_4, get(row).status);
				set_attribute(a_1, "href", `/sales/receipts/${get(row).id}`);
			});
			append($$anchor, tr);
		});
		reset(tbody);
		reset(table);
		reset(div_6);
		var div_7 = sibling(div_6, 2);
		var span_6 = child(div_7);
		var text_5 = child(span_6);
		reset(span_6);
		var div_8 = sibling(span_6, 2);
		var node_15 = child(div_8);
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
					fetchReceipts();
				},
				children: ($$anchor, $$slotProps) => {
					var fragment_7 = root_6();
					Chevron_left(first_child(fragment_7), { class: "h-3 w-3 mr-1" });
					next();
					append($$anchor, fragment_7);
				},
				$$slots: { default: true }
			});
		}
		var node_17 = sibling(node_15, 2);
		{
			let $0 = user_derived(() => get(currentPage) >= get(receiptsData).totalPages);
			Button(node_17, {
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
					var fragment_8 = root_7();
					Chevron_right(sibling(first_child(fragment_8)), { class: "h-3 w-3 ml-1" });
					append($$anchor, fragment_8);
				},
				$$slots: { default: true }
			});
		}
		reset(div_8);
		reset(div_7);
		template_effect(() => set_text(text_5, `Page ${get(receiptsData).page ?? ""} of ${get(receiptsData).totalPages ?? ""} (${get(receiptsData).totalCount ?? ""} items)`));
		append($$anchor, fragment_3);
	};
	var alternate_3 = ($$anchor) => {
		append($$anchor, root_9());
	};
	if_block(node_7, ($$render) => {
		if (get(loading)) $$render(consequent);
		else if (get(receiptsData) && get(receiptsData).items && get(receiptsData).items.length > 0) $$render(consequent_4, 1);
		else $$render(alternate_3, -1);
	});
	reset(div);
	delegated("input", input, (e) => handleSearchInput(e.target.value));
	append($$anchor, div);
	pop();
}
delegate(["input"]);
//#endregion
export { _page as component };

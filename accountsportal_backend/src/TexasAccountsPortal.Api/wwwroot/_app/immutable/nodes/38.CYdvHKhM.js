import { B as append, D as head, H as from_html, I as if_block, K as delegate, Lt as next, Mt as push, N as each, P as index, Q as get, R as set_text, Rt as reset, _ as set_attribute, dt as child, ft as first_child, gt as set, it as effect, jt as pop, ot as template_effect, pt as sibling, q as delegated, r as onMount, ut as $document, vt as state, w as set_class, xt as user_derived, yt as update } from "../chunks/BdGPDeRo.js";
import "../chunks/DhaYE-8x.js";
import { t as apiFetch } from "../chunks/Dw74VOpV.js";
import { t as Chevron_left } from "../chunks/CsLK6PIo.js";
import { t as Chevron_right } from "../chunks/Dxef15ul.js";
import { t as Download } from "../chunks/DBd-WEs4.js";
import { t as Eye } from "../chunks/BFVTEy5u.js";
import { t as File_text } from "../chunks/CLERR3SN.js";
import { t as HeadDetailDrawer } from "../chunks/9gOq1j05.js";
import { t as Printer } from "../chunks/CNYHernz2.js";
import { t as Receipt } from "../chunks/Dj2Xa4W-2.js";
import { t as Refresh_cw } from "../chunks/DFp1vOqU2.js";
import { t as Search } from "../chunks/wyHepXk-2.js";
import { t as Shopping_bag } from "../chunks/CNnPqh-r2.js";
import { t as Button } from "../chunks/zyE_82FR2.js";
import { t as MoneyDisplay } from "../chunks/BjJP4BTf2.js";
//#region src/routes/(app)/sales/heads/+page.svelte
var root = from_html(`<!> <span>CSV Export</span>`, 1);
var root_1 = from_html(`<!> <span>Print</span>`, 1);
var root_2 = from_html(`<!> <span>Reload</span>`, 1);
var root_3 = from_html(`<div class="bg-card border border-border rounded-2xl p-6 h-96 flex items-center justify-center animate-pulse"><!></div>`);
var root_4 = from_html(`<tr class="hover:bg-muted/10 transition-colors"><td class="p-4 font-mono font-medium text-muted-foreground"> </td><td class="p-4 font-bold text-foreground"><button class="hover:text-primary hover:underline text-left cursor-pointer outline-none font-bold"> </button> <span class="block text-[10px] text-muted-foreground font-normal mt-0.5"> </span></td><td class="p-4 font-mono text-muted-foreground"> </td><td class="p-4 capitalize"> </td><td class="p-4 font-mono font-bold text-right text-foreground"><!></td><td class="p-4 font-mono font-bold text-right text-emerald-600"><!></td><td class="p-4 text-center"><span> </span></td><td class="p-4 text-center print:hidden"><div class="flex items-center justify-center gap-1.5"><a class="p-1.5 bg-muted hover:bg-muted-foreground/15 text-muted-foreground hover:text-foreground rounded-lg transition-colors cursor-pointer" title="Statement Ledger Explorer"><!></a> <a class="p-1.5 bg-muted hover:bg-muted-foreground/15 text-muted-foreground hover:text-foreground rounded-lg transition-colors cursor-pointer" title="View Flight Bookings"><!></a> <a class="p-1.5 bg-muted hover:bg-muted-foreground/15 text-muted-foreground hover:text-foreground rounded-lg transition-colors cursor-pointer" title="View Receipts"><!></a> <button class="p-1.5 bg-muted hover:bg-muted-foreground/15 text-muted-foreground hover:text-foreground rounded-lg transition-colors cursor-pointer" title="Inspect Profile"><!></button></div></td></tr>`);
var root_5 = from_html(`<!> Prev`, 1);
var root_6 = from_html(`Next <!>`, 1);
var root_7 = from_html(`<div class="bg-card border border-border rounded-2xl overflow-x-auto shadow-xs print:border-none print:shadow-none max-w-full"><table class="w-full min-w-[800px] text-left border-collapse text-xs"><thead><tr class="bg-muted/30 border-b border-border text-muted-foreground font-semibold print:bg-transparent"><th class="p-4 w-20">ID</th><th class="p-4">Name</th><th class="p-4">Mobile</th><th class="p-4">Type</th><th class="p-4 text-right">Balance</th><th class="p-4 text-right text-emerald-600">Wallet</th><th class="p-4 w-20 text-center">Status</th><th class="p-4 text-center print:hidden">Quick Actions</th></tr></thead><tbody class="divide-y divide-border/60"></tbody></table></div> <div class="flex items-center justify-between text-xs pt-4 print:hidden"><span class="text-muted-foreground"> </span> <div class="flex gap-2"><!> <!></div></div>`, 1);
var root_8 = from_html(`<div class="bg-card border border-border rounded-2xl p-16 text-center text-muted-foreground text-xs print:hidden">No customer heads registered.</div>`);
var root_9 = from_html(`<div class="space-y-6 print:space-y-0 print:p-0"><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 print:hidden"><div class="flex flex-col gap-1"><h1 class="text-xl font-bold text-foreground font-sans">Customer & Agent Heads</h1> <p class="text-xs text-muted-foreground">Directory of customer profiles, agent accounts, outstanding ledger balances, and pre-funded wallets.</p></div> <div class="flex flex-wrap gap-2.5"><!> <!> <!></div></div> <div class="bg-card border border-border rounded-2xl p-4 flex flex-col sm:flex-row gap-3 print:hidden"><div class="relative flex-1"><!> <input type="text" placeholder="Search Customer / Agent Name or Email..." class="w-full text-xs pl-10 pr-4 py-2 border border-border rounded-xl bg-background text-foreground placeholder-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20"/></div></div> <!></div> <!>`, 1);
function _page($$anchor, $$props) {
	push($$props, true);
	let headsData = state(null);
	let loading = state(false);
	let currentPage = state(1);
	let pageSize = 10;
	let searchVal = state("");
	let selectedHeadId = state(null);
	let drawerOpen = state(false);
	let searchTimeout;
	function handleSearchInput(val) {
		clearTimeout(searchTimeout);
		searchTimeout = setTimeout(() => {
			set(searchVal, val, true);
			set(currentPage, 1);
			fetchHeads();
		}, 400);
	}
	async function fetchHeads() {
		set(loading, true);
		try {
			const params = {
				page: get(currentPage),
				pageSize
			};
			if (get(searchVal).trim()) params.search = get(searchVal).trim();
			const res = await apiFetch("api/sales-entries/heads", { params });
			set(headsData, res, true);
		} catch (err) {
			console.error("Failed to load customer heads list:", err);
		} finally {
			set(loading, false);
		}
	}
	onMount(() => {
		fetchHeads();
	});
	function exportToCSV() {
		if (!get(headsData) || !get(headsData).items) return;
		const csvContent = "data:text/csv;charset=utf-8," + ["ID,Name,Email,Mobile,Type,Nationality,Balance,Wallet,Status,Created At", ...get(headsData).items.map((row) => {
			return `"${row.id}","${row.firstName} ${row.lastName}","${row.email}","${row.mobileNo}","${row.type}","${row.nationality || ""}","${row.balance}","${row.wallet}","${row.status}","${row.createdAt}"`;
		})].join("\n");
		const encodedUri = encodeURI(csvContent);
		const link = document.createElement("a");
		link.setAttribute("href", encodedUri);
		link.setAttribute("download", "customer_heads_export.csv");
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}
	function handlePrint() {
		window.print();
	}
	var fragment = root_9();
	head("1fmexmy", ($$anchor) => {
		effect(() => {
			$document.title = "Customer Heads — Accounts Portal";
		});
	});
	var div = first_child(fragment);
	var div_1 = child(div);
	var div_2 = sibling(child(div_1), 2);
	var node = child(div_2);
	Button(node, {
		variant: "outline",
		class: "h-8.5 rounded-xl cursor-pointer flex items-center gap-1.5 text-xs font-semibold",
		onclick: exportToCSV,
		children: ($$anchor, $$slotProps) => {
			var fragment_1 = root();
			Download(first_child(fragment_1), { class: "h-3.5 w-3.5" });
			next(2);
			append($$anchor, fragment_1);
		},
		$$slots: { default: true }
	});
	var node_2 = sibling(node, 2);
	Button(node_2, {
		variant: "outline",
		class: "h-8.5 rounded-xl cursor-pointer flex items-center gap-1.5 text-xs font-semibold",
		onclick: handlePrint,
		children: ($$anchor, $$slotProps) => {
			var fragment_2 = root_1();
			Printer(first_child(fragment_2), { class: "h-3.5 w-3.5" });
			next(2);
			append($$anchor, fragment_2);
		},
		$$slots: { default: true }
	});
	Button(sibling(node_2, 2), {
		variant: "outline",
		class: "h-8.5 rounded-xl cursor-pointer flex items-center gap-1.5 text-xs font-semibold",
		onclick: fetchHeads,
		children: ($$anchor, $$slotProps) => {
			var fragment_3 = root_2();
			Refresh_cw(first_child(fragment_3), { class: "h-3.5 w-3.5" });
			next(2);
			append($$anchor, fragment_3);
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
	var consequent_1 = ($$anchor) => {
		var fragment_4 = root_7();
		var div_6 = first_child(fragment_4);
		var table = child(div_6);
		var tbody = sibling(child(table));
		each(tbody, 21, () => get(headsData).items, index, ($$anchor, row) => {
			var tr = root_4();
			var td = child(tr);
			var text = child(td);
			reset(td);
			var td_1 = sibling(td);
			var button = child(td_1);
			var text_1 = child(button);
			reset(button);
			var span = sibling(button, 2);
			var text_2 = child(span, true);
			reset(span);
			reset(td_1);
			var td_2 = sibling(td_1);
			var text_3 = child(td_2, true);
			reset(td_2);
			var td_3 = sibling(td_2);
			var text_4 = child(td_3, true);
			reset(td_3);
			var td_4 = sibling(td_3);
			MoneyDisplay(child(td_4), { get amount() {
				return get(row).balance;
			} });
			reset(td_4);
			var td_5 = sibling(td_4);
			MoneyDisplay(child(td_5), { get amount() {
				return get(row).wallet;
			} });
			reset(td_5);
			var td_6 = sibling(td_5);
			var span_1 = child(td_6);
			var text_5 = child(span_1, true);
			reset(span_1);
			reset(td_6);
			var td_7 = sibling(td_6);
			var div_7 = child(td_7);
			var a = child(div_7);
			File_text(child(a), { class: "h-3.8 w-3.8" });
			reset(a);
			var a_1 = sibling(a, 2);
			Shopping_bag(child(a_1), { class: "h-3.8 w-3.8" });
			reset(a_1);
			var a_2 = sibling(a_1, 2);
			Receipt(child(a_2), { class: "h-3.8 w-3.8" });
			reset(a_2);
			var button_1 = sibling(a_2, 2);
			Eye(child(button_1), { class: "h-3.8 w-3.8" });
			reset(button_1);
			reset(div_7);
			reset(td_7);
			reset(tr);
			template_effect(() => {
				set_text(text, `#${get(row).id ?? ""}`);
				set_text(text_1, `${get(row).firstName ?? ""} ${get(row).lastName ?? ""}`);
				set_text(text_2, get(row).email);
				set_text(text_3, get(row).mobileNo);
				set_text(text_4, get(row).type);
				set_class(span_1, 1, `inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold capitalize
									${get(row).status === "active" ? "bg-emerald-50 text-emerald-700 border border-emerald-200" : "bg-red-50 text-red-700 border border-red-200"}`);
				set_text(text_5, get(row).status);
				set_attribute(a, "href", `/sales/ledger?headId=${get(row).id}`);
				set_attribute(a_1, "href", `/sales/bookings/flights?search=${get(row).firstName}`);
				set_attribute(a_2, "href", `/sales/receipts?search=${get(row).firstName}`);
			});
			delegated("click", button, () => {
				set(selectedHeadId, get(row).id, true);
				set(drawerOpen, true);
			});
			delegated("click", button_1, () => {
				set(selectedHeadId, get(row).id, true);
				set(drawerOpen, true);
			});
			append($$anchor, tr);
		});
		reset(tbody);
		reset(table);
		reset(div_6);
		var div_8 = sibling(div_6, 2);
		var span_2 = child(div_8);
		var text_6 = child(span_2);
		reset(span_2);
		var div_9 = sibling(span_2, 2);
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
					fetchHeads();
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
		var node_17 = sibling(node_15, 2);
		{
			let $0 = user_derived(() => get(currentPage) >= get(headsData).totalPages);
			Button(node_17, {
				variant: "outline",
				class: "h-8.5 cursor-pointer rounded-xl px-2.5",
				get disabled() {
					return get($0);
				},
				onclick: () => {
					update(currentPage);
					fetchHeads();
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
		template_effect(() => set_text(text_6, `Page ${get(headsData).page ?? ""} of ${get(headsData).totalPages ?? ""} (${get(headsData).totalCount ?? ""} items)`));
		append($$anchor, fragment_4);
	};
	var alternate = ($$anchor) => {
		append($$anchor, root_8());
	};
	if_block(node_7, ($$render) => {
		if (get(loading)) $$render(consequent);
		else if (get(headsData) && get(headsData).items && get(headsData).items.length > 0) $$render(consequent_1, 1);
		else $$render(alternate, -1);
	});
	reset(div);
	HeadDetailDrawer(sibling(div, 2), {
		get isOpen() {
			return get(drawerOpen);
		},
		onClose: () => {
			set(drawerOpen, false);
			set(selectedHeadId, null);
		},
		get headId() {
			return get(selectedHeadId);
		}
	});
	delegated("input", input, (e) => handleSearchInput(e.target.value));
	append($$anchor, fragment);
	pop();
}
delegate(["input", "click"]);
//#endregion
export { _page as component };

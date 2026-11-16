import { B as append, Bt as reset, Ct as user_derived, D as head, H as from_html, I as if_block, K as delegate, N as each, Nt as pop, P as index, Pt as push, Q as get, R as set_text, _ as set_attribute, bt as state, dt as $document, ht as sibling, it as effect, mt as first_child, ot as template_effect, pt as child, q as delegated, r as onMount, vt as set, w as set_class, xt as update, zt as next } from "../chunks/dXkmWTgM.js";
import "../chunks/DhaYE-8x.js";
import { t as apiFetch } from "../chunks/Df3RT31T.js";
import { r as toast } from "../chunks/CbPRQHfn.js";
import { t as Building_2 } from "../chunks/PAfPMPpZ.js";
import { t as Chevron_left } from "../chunks/bgfi4Y0B.js";
import { t as Chevron_right } from "../chunks/BQLzQDdY.js";
import { t as Download } from "../chunks/D8w6XH0S2.js";
import { t as File_text } from "../chunks/NLRKrZbo2.js";
import { t as Printer } from "../chunks/Ds2DlsUi2.js";
import { t as Receipt } from "../chunks/4mbxDyuf2.js";
import { t as Refresh_cw } from "../chunks/DpTJy0Wb2.js";
import { t as Search } from "../chunks/D7t9qluE.js";
import { t as Shopping_bag } from "../chunks/CIvqk5ku.js";
import { t as User } from "../chunks/C8PICJbu.js";
import { t as Users } from "../chunks/Bja056I7.js";
import { t as Button } from "../chunks/BhXsq3bC.js";
import { t as MoneyDisplay } from "../chunks/CIVSRuaR.js";
import { t as exportToCSV } from "../chunks/BFiYdNfd.js";
import { t as previewDocument } from "../chunks/DYl4fKkG.js";
//#region src/routes/(app)/sales/heads/+page.svelte
var root = from_html(`<!> <span> </span>`, 1);
var root_1 = from_html(`<!> <span>Print</span>`, 1);
var root_2 = from_html(`<!> <span>Reload</span>`, 1);
var root_3 = from_html(`<div class="bg-card border border-border rounded-2xl p-6 h-96 flex items-center justify-center animate-pulse"><!></div>`);
var root_4 = from_html(`<tr class="hover:bg-muted/10 transition-colors"><td class="p-4 font-mono font-medium text-muted-foreground"> </td><td class="p-4 font-bold text-foreground"><a class="hover:text-primary hover:underline text-left outline-none font-bold block"> </a> <span class="block text-[10px] text-muted-foreground font-normal mt-0.5"> </span></td><td class="p-4 font-mono text-muted-foreground"> </td><td class="p-4 capitalize"><span> </span></td><td class="p-4 font-mono font-bold text-right text-foreground"><!></td><td class="p-4 font-mono font-bold text-right text-emerald-600"><!></td><td class="p-4 text-center"><span> </span></td><td class="p-4 text-center print:hidden"><div class="flex items-center justify-center gap-1.5"><a class="p-1.5 bg-muted hover:bg-muted-foreground/15 text-muted-foreground hover:text-foreground rounded-lg transition-colors cursor-pointer" title="View Statement Ledger"><!></a> <a class="p-1.5 bg-muted hover:bg-muted-foreground/15 text-muted-foreground hover:text-foreground rounded-lg transition-colors cursor-pointer"><!></a> <a class="p-1.5 bg-muted hover:bg-muted-foreground/15 text-muted-foreground hover:text-foreground rounded-lg transition-colors cursor-pointer"><!></a></div></td></tr>`);
var root_5 = from_html(`<!> Prev`, 1);
var root_6 = from_html(`Next <!>`, 1);
var root_7 = from_html(`<div class="bg-card border border-border rounded-2xl overflow-x-auto shadow-xs print:border-none print:shadow-none max-w-full"><table class="w-full min-w-[800px] text-left border-collapse text-xs"><thead><tr class="bg-muted/30 border-b border-border text-muted-foreground font-semibold print:bg-transparent"><th class="p-4 w-20">ID</th><th class="p-4">Name</th><th class="p-4">Mobile</th><th class="p-4">Type</th><th class="p-4 text-right">Balance</th><th class="p-4 text-right text-emerald-600">Wallet</th><th class="p-4 w-20 text-center">Status</th><th class="p-4 text-center print:hidden">Quick Actions</th></tr></thead><tbody class="divide-y divide-border/60"></tbody></table></div> <div class="flex items-center justify-between text-xs pt-4 print:hidden"><span class="text-muted-foreground"> </span> <div class="flex gap-2"><!> <!></div></div>`, 1);
var root_8 = from_html(`<div class="bg-card border border-border rounded-2xl p-16 text-center text-muted-foreground text-xs print:hidden">No customer or agent heads registered matching current filters.</div>`);
var root_9 = from_html(`<div class="space-y-6 print:space-y-0 print:p-0"><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 print:hidden"><div class="flex flex-col gap-1"><h1 class="text-xl font-bold text-foreground font-sans">Customer & Agent Heads</h1> <p class="text-xs text-muted-foreground">Directory of customer profiles, agent accounts, outstanding ledger balances, and pre-funded wallets.</p></div> <div class="flex flex-wrap gap-2.5"><!> <!> <!></div></div> <div class="bg-card border border-border rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 print:hidden"><div class="flex items-center gap-1.5 p-1 bg-muted/40 border border-border/60 rounded-xl w-fit text-xs font-semibold"><button><!> <span>All Heads</span></button> <button><!> <span>Customers</span></button> <button><!> <span>Agents</span></button></div> <div class="relative flex-1 max-w-md w-full"><!> <input type="text" placeholder="Search Customer / Agent Name or Email..." class="w-full text-xs pl-10 pr-4 py-2 border border-border rounded-xl bg-background text-foreground placeholder-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20"/></div></div> <!></div>`);
function _page($$anchor, $$props) {
	push($$props, true);
	let headsData = state(null);
	let loading = state(false);
	let currentPage = state(1);
	let pageSize = 10;
	let searchVal = state("");
	let selectedTab = state("all");
	let searchTimeout;
	function handleSearchInput(val) {
		clearTimeout(searchTimeout);
		searchTimeout = setTimeout(() => {
			set(searchVal, val, true);
			set(currentPage, 1);
			fetchHeads();
		}, 400);
	}
	function handleTabChange(tab) {
		set(selectedTab, tab, true);
		set(currentPage, 1);
		fetchHeads();
	}
	async function fetchHeads() {
		set(loading, true);
		try {
			const params = {
				page: get(currentPage),
				pageSize
			};
			if (get(searchVal).trim()) params.search = get(searchVal).trim();
			if (get(selectedTab) !== "all") params.type = get(selectedTab);
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
	let exportingCSV = state(false);
	async function exportToCSV$1() {
		set(exportingCSV, true);
		try {
			const params = {
				page: 1,
				pageSize: 1e4
			};
			if (get(searchVal).trim()) params.search = get(searchVal).trim();
			if (get(selectedTab) !== "all") params.type = get(selectedTab);
			const items = (await apiFetch("api/sales-entries/heads", { params }))?.items || get(headsData)?.items || [];
			if (items.length === 0) return;
			exportToCSV("customer_heads_export.csv", [
				"ID",
				"Full Name",
				"Email",
				"Mobile Number",
				"Account Type",
				"Nationality",
				"Ledger Balance (BHD)",
				"Wallet Balance (BHD)",
				"Status",
				"Logged Date"
			], items.map((row) => [
				row.id,
				`${row.firstName || ""} ${row.lastName || ""}`.trim(),
				row.email || "",
				row.mobileNo || "",
				row.type || "",
				row.nationality || "",
				row.balance || 0,
				row.wallet || 0,
				row.status || "",
				row.createdAt ? row.createdAt.split("T")[0] : ""
			]));
			toast.success("CSV exported successfully.");
		} catch (err) {
			console.error("Failed to export heads CSV:", err);
		} finally {
			set(exportingCSV, false);
		}
	}
	function handlePrint() {
		previewDocument("list", "heads", {
			searchTerm: get(searchVal),
			type: get(selectedTab)
		});
		toast.info("Generating print document...");
	}
	function getHeadFullName(row) {
		return `${row.firstName || ""} ${row.lastName || ""}`.trim();
	}
	var div = root_9();
	head("1fmexmy", ($$anchor) => {
		effect(() => {
			$document.title = "Customer Heads — Accounts Portal";
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
		onclick: fetchHeads,
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
	var button = child(div_4);
	Users(child(button), { class: "h-3.5 w-3.5" });
	next(2);
	reset(button);
	var button_1 = sibling(button, 2);
	User(child(button_1), { class: "h-3.5 w-3.5" });
	next(2);
	reset(button_1);
	var button_2 = sibling(button_1, 2);
	Building_2(child(button_2), { class: "h-3.5 w-3.5" });
	next(2);
	reset(button_2);
	reset(div_4);
	var div_5 = sibling(div_4, 2);
	var node_9 = child(div_5);
	Search(node_9, { class: "absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/60" });
	var input = sibling(node_9, 2);
	reset(div_5);
	reset(div_3);
	var node_10 = sibling(div_3, 2);
	var consequent = ($$anchor) => {
		var div_6 = root_3();
		Refresh_cw(child(div_6), { class: "h-8 w-8 text-primary animate-spin" });
		reset(div_6);
		append($$anchor, div_6);
	};
	var consequent_1 = ($$anchor) => {
		var fragment_3 = root_7();
		var div_7 = first_child(fragment_3);
		var table = child(div_7);
		var tbody = sibling(child(table));
		each(tbody, 21, () => get(headsData).items, index, ($$anchor, row) => {
			var tr = root_4();
			var td = child(tr);
			var text_1 = child(td);
			reset(td);
			var td_1 = sibling(td);
			var a = child(td_1);
			var text_2 = child(a);
			reset(a);
			var span_1 = sibling(a, 2);
			var text_3 = child(span_1, true);
			reset(span_1);
			reset(td_1);
			var td_2 = sibling(td_1);
			var text_4 = child(td_2, true);
			reset(td_2);
			var td_3 = sibling(td_2);
			var span_2 = child(td_3);
			var text_5 = child(span_2, true);
			reset(span_2);
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
			var span_3 = child(td_6);
			var text_6 = child(span_3, true);
			reset(span_3);
			reset(td_6);
			var td_7 = sibling(td_6);
			var div_8 = child(td_7);
			var a_1 = child(div_8);
			File_text(child(a_1), { class: "h-3.8 w-3.8" });
			reset(a_1);
			var a_2 = sibling(a_1, 2);
			Shopping_bag(child(a_2), { class: "h-3.8 w-3.8" });
			reset(a_2);
			var a_3 = sibling(a_2, 2);
			Receipt(child(a_3), { class: "h-3.8 w-3.8" });
			reset(a_3);
			reset(div_8);
			reset(td_7);
			reset(tr);
			template_effect(($0, $1, $2, $3) => {
				set_text(text_1, `#${get(row).id ?? ""}`);
				set_attribute(a, "href", `/sales/ledger?headId=${get(row).id}&type=${get(row).type}`);
				set_text(text_2, `${get(row).firstName ?? ""} ${get(row).lastName ?? ""}`);
				set_text(text_3, get(row).email);
				set_text(text_4, get(row).mobileNo);
				set_class(span_2, 1, `inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-semibold capitalize
									${get(row).type === "agent" ? "bg-purple-50 text-purple-700 border border-purple-200" : "bg-slate-50 text-slate-700 border border-slate-200"}`);
				set_text(text_5, get(row).type);
				set_class(span_3, 1, `inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold capitalize
									${get(row).status === "active" ? "bg-emerald-50 text-emerald-700 border border-emerald-200" : "bg-red-50 text-red-700 border border-red-200"}`);
				set_text(text_6, get(row).status);
				set_attribute(a_1, "href", `/sales/ledger?headId=${get(row).id}&type=${get(row).type}`);
				set_attribute(a_2, "href", $0);
				set_attribute(a_2, "title", `Filter Bookings for ${$1 ?? ""}`);
				set_attribute(a_3, "href", $2);
				set_attribute(a_3, "title", `Filter Receipts for ${$3 ?? ""}`);
			}, [
				() => `/sales/bookings/flights?search=${encodeURIComponent(getHeadFullName(get(row)))}`,
				() => getHeadFullName(get(row)),
				() => `/sales/receipts?search=${encodeURIComponent(getHeadFullName(get(row)))}`,
				() => getHeadFullName(get(row))
			]);
			append($$anchor, tr);
		});
		reset(tbody);
		reset(table);
		reset(div_7);
		var div_9 = sibling(div_7, 2);
		var span_4 = child(div_9);
		var text_7 = child(span_4);
		reset(span_4);
		var div_10 = sibling(span_4, 2);
		var node_17 = child(div_10);
		{
			let $0 = user_derived(() => get(currentPage) <= 1);
			Button(node_17, {
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
					var fragment_4 = root_5();
					Chevron_left(first_child(fragment_4), { class: "h-3 w-3 mr-1" });
					next();
					append($$anchor, fragment_4);
				},
				$$slots: { default: true }
			});
		}
		var node_19 = sibling(node_17, 2);
		{
			let $0 = user_derived(() => get(currentPage) >= get(headsData).totalPages);
			Button(node_19, {
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
					var fragment_5 = root_6();
					Chevron_right(sibling(first_child(fragment_5)), { class: "h-3 w-3 ml-1" });
					append($$anchor, fragment_5);
				},
				$$slots: { default: true }
			});
		}
		reset(div_10);
		reset(div_9);
		template_effect(() => set_text(text_7, `Page ${get(headsData).page ?? ""} of ${get(headsData).totalPages ?? ""} (${get(headsData).totalCount ?? ""} items)`));
		append($$anchor, fragment_3);
	};
	var alternate = ($$anchor) => {
		append($$anchor, root_8());
	};
	if_block(node_10, ($$render) => {
		if (get(loading)) $$render(consequent);
		else if (get(headsData) && get(headsData).items && get(headsData).items.length > 0) $$render(consequent_1, 1);
		else $$render(alternate, -1);
	});
	reset(div);
	template_effect(() => {
		set_class(button, 1, `px-3.5 py-1.5 rounded-lg transition-all cursor-pointer select-none flex items-center gap-1.5
					${get(selectedTab) === "all" ? "bg-background text-foreground shadow-xs font-bold" : "text-muted-foreground hover:text-foreground"}`);
		set_class(button_1, 1, `px-3.5 py-1.5 rounded-lg transition-all cursor-pointer select-none flex items-center gap-1.5
					${get(selectedTab) === "customer" ? "bg-background text-foreground shadow-xs font-bold" : "text-muted-foreground hover:text-foreground"}`);
		set_class(button_2, 1, `px-3.5 py-1.5 rounded-lg transition-all cursor-pointer select-none flex items-center gap-1.5
					${get(selectedTab) === "agent" ? "bg-background text-foreground shadow-xs font-bold" : "text-muted-foreground hover:text-foreground"}`);
	});
	delegated("click", button, () => handleTabChange("all"));
	delegated("click", button_1, () => handleTabChange("customer"));
	delegated("click", button_2, () => handleTabChange("agent"));
	delegated("input", input, (e) => handleSearchInput(e.target.value));
	append($$anchor, div);
	pop();
}
delegate(["click", "input"]);
//#endregion
export { _page as component };

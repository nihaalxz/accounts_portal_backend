import { B as append, Bt as reset, Ct as user_derived, D as head, Et as store_get, G as text, H as from_html, I as if_block, K as delegate, N as each, Nt as pop, Pt as push, Q as get, R as set_text, T as clsx, Tt as setup_stores, bt as state, dt as $document, gt as proxy, ht as sibling, it as effect, mt as first_child, ot as template_effect, pt as child, q as delegated, r as onMount, vt as set, w as set_class, zt as next } from "../chunks/dXkmWTgM.js";
import { t as goto } from "../chunks/8Ddi3Fq2.js";
import "../chunks/DhaYE-8x.js";
import { i as hasRole } from "../chunks/14iLMpN9.js";
import { t as addToast } from "../chunks/CbPRQHfn.js";
import { t as Arrow_left } from "../chunks/Bn7x0kyr.js";
import { t as Calendar } from "../chunks/DxFQ7Qxv.js";
import { t as File_down } from "../chunks/btBW28nf2.js";
import { t as File_spreadsheet } from "../chunks/B4BvDHOF2.js";
import { t as Landmark } from "../chunks/D_q7zQKx2.js";
import { t as Pencil } from "../chunks/C3Ohi_CL.js";
import { t as Power } from "../chunks/ZWE_o2ua.js";
import { t as Search } from "../chunks/D7t9qluE.js";
import { t as X } from "../chunks/wXHc9RNY.js";
import { i as formatDateOnly, o as getBahrainDateString } from "../chunks/Cu8_Vl4p.js";
import { t as page } from "../chunks/BL5SwgiJ.js";
import { t as Button } from "../chunks/BhXsq3bC.js";
import { t as ErrorState } from "../chunks/CRMNR9wu.js";
import "../chunks/BhENg3py.js";
import { t as MoneyDisplay } from "../chunks/CIVSRuaR2.js";
import { t as DateDisplay } from "../chunks/DEr_pDJT2.js";
import "../chunks/CS-Kx6i02.js";
import { t as exportToCSV } from "../chunks/C74Z4VDd2.js";
import { t as previewDocument } from "../chunks/pJK4gxfp2.js";
import { n as getBanks, r as toggleBankStatus } from "../chunks/9JwICQ8X2.js";
import { a as getTransactions } from "../chunks/D2MzsOh32.js";
import { t as FormattedNarrative } from "../chunks/CHiWmlVe2.js";
import { t as Input } from "../chunks/C4xMLgho.js";
//#region src/routes/(app)/banks/[id]/+page.svelte
var root = from_html(`<div class="animate-pulse space-y-6"><div class="h-10 w-2/3 bg-muted rounded-lg"></div> <div class="h-44 bg-muted rounded-2xl"></div> <div class="h-32 bg-muted rounded-2xl"></div></div>`);
var root_1 = from_html(`<!> <span>Edit Account</span>`, 1);
var root_2 = from_html(`<!> <span> </span>`, 1);
var root_3 = from_html(`<!> <!>`, 1);
var root_4 = from_html(`<!> Export CSV`, 1);
var root_5 = from_html(`<!> Export PDF`, 1);
var root_6 = from_html(`<div class="flex gap-2"><!> <!></div>`);
var root_7 = from_html(`<!> Reset Filters`, 1);
var root_8 = from_html(`<span> </span>`);
var root_9 = from_html(`<div class="flex flex-wrap items-center justify-between text-xs pt-2 border-t border-border/40 text-muted-foreground"><div>Showing <strong> </strong> <!></div> <div class="flex gap-4 font-mono text-[11px]"><span class="text-emerald-600 font-semibold">Total Deposits: <!></span> <span class="text-red-600 font-semibold">Total Outflows: <!></span> <span class="font-bold text-foreground">Net Change: <!></span></div></div>`);
var root_10 = from_html(`<div class="space-y-3"><div class="h-10 bg-muted rounded-xl animate-pulse"></div> <div class="h-24 bg-muted rounded-xl animate-pulse"></div></div>`);
var root_11 = from_html(`<div class="text-center p-8 bg-card border border-border rounded-2xl text-xs text-muted-foreground space-y-2"><p class="font-medium">No transactions found matching the selected filter criteria.</p> <!></div>`);
var root_12 = from_html(`<span class="text-muted-foreground/35">—</span>`);
var root_13 = from_html(`<span class="text-[9px] bg-muted px-1.5 py-0.2 rounded ml-1 uppercase"> </span>`);
var root_14 = from_html(`<span class="font-mono text-muted-foreground"> </span> <!>`, 1);
var root_15 = from_html(`<span class="text-muted-foreground/60">—</span>`);
var root_16 = from_html(`<tr class="hover:bg-muted/10 transition-colors"><td class="p-4 font-mono font-medium text-muted-foreground"> </td><td class="p-4 text-muted-foreground"> </td><td class="p-4 font-medium text-foreground"><!></td><td class="p-4 text-right font-semibold text-emerald-600"><!></td><td class="p-4 text-right font-semibold text-red-600"><!></td><td class="p-4"><!></td></tr>`);
var root_17 = from_html(`<div class="bg-card border border-border rounded-2xl overflow-hidden shadow-xs"><div class="overflow-x-auto"><table class="w-full text-left border-collapse text-xs"><thead><tr class="bg-muted/30 border-b border-border text-muted-foreground font-semibold"><th class="p-4 w-16">ID</th><th class="p-4 w-28">Date</th><th class="p-4">Description</th><th class="p-4 w-28 text-right">Debit</th><th class="p-4 w-28 text-right">Credit</th><th class="p-4 w-32">Source Ref</th></tr></thead><tbody class="divide-y divide-border/60"></tbody></table></div></div>`);
var root_18 = from_html(`<div class="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-card border border-border p-6 rounded-3xl shadow-xs"><div class="space-y-2"><div class="flex items-center gap-2"><span class="text-lg font-bold text-foreground"> </span> <span> </span></div> <div class="flex flex-wrap gap-2 text-xs text-muted-foreground"><span class="font-mono tracking-wider"> </span> <span>•</span> <span>Registered on <!></span></div></div> <div class="flex flex-wrap gap-2"><!></div></div> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><div class="bg-card border border-border rounded-2xl p-5 shadow-xs"><span class="text-xs font-bold text-muted-foreground uppercase tracking-wider block mb-1">Opening Balance</span> <span class="text-xl font-bold text-foreground"><!></span></div> <div class="bg-card border border-border rounded-2xl p-5 shadow-xs bg-primary/5"><span class="text-xs font-bold text-primary uppercase tracking-wider block mb-1">Treasury Running Balance</span> <span class="text-2xl font-bold text-foreground"><!></span></div></div> <div class="space-y-4"><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-border/60 pb-3"><h2 class="text-sm font-bold text-foreground uppercase tracking-wider flex items-center gap-1.5"><!> <span>Bank Statement</span></h2> <!></div> <div class="bg-card border border-border p-4 rounded-2xl space-y-3 shadow-xs"><div class="flex flex-wrap items-center justify-between gap-2 border-b border-border/40 pb-3"><div class="flex flex-wrap items-center gap-1.5 text-xs"><span class="text-xs font-medium text-muted-foreground mr-1 flex items-center gap-1"><!> Filter Range:</span> <button type="button">All Time</button> <button type="button">Today</button> <button type="button">This Month</button> <button type="button">Last 30 Days</button> <button type="button">This Year</button></div> <!></div> <div class="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 text-xs"><div class="relative flex-1"><!> <!></div> <div class="flex items-center gap-2"><div class="flex items-center gap-1.5"><span class="text-muted-foreground font-medium text-[11px]">From:</span> <!></div> <span class="text-muted-foreground font-semibold">to</span> <div class="flex items-center gap-1.5"><span class="text-muted-foreground font-medium text-[11px]">To:</span> <!></div></div></div> <!></div> <!></div>`, 1);
var root_19 = from_html(`<div class="space-y-6"><button class="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground cursor-pointer transition-colors"><!> <span>Back to Banks</span></button> <!></div>`);
function _page($$anchor, $$props) {
	push($$props, true);
	const $page = () => store_get(page, "$page", $$stores);
	const [$$stores, $$cleanup] = setup_stores();
	const bankId = parseInt($page().params.id ?? "", 10);
	let bank = state(null);
	let loading = state(true);
	let errorMsg = state(null);
	let correlationId = state("");
	let transactions = state(proxy([]));
	let loadingTransactions = state(false);
	let startDate = state("");
	let endDate = state("");
	let activePreset = state("all");
	let searchQuery = state("");
	function formatDateForInput(d) {
		return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
	}
	function applyPreset(preset) {
		set(activePreset, preset, true);
		const now = /* @__PURE__ */ new Date();
		if (preset === "today") {
			const todayStr = formatDateForInput(now);
			set(startDate, todayStr, true);
			set(endDate, todayStr, true);
		} else if (preset === "this_month") {
			const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
			set(startDate, formatDateForInput(startOfMonth), true);
			set(endDate, formatDateForInput(now), true);
		} else if (preset === "last_30") {
			const past30 = /* @__PURE__ */ new Date();
			past30.setDate(now.getDate() - 30);
			set(startDate, formatDateForInput(past30), true);
			set(endDate, formatDateForInput(now), true);
		} else if (preset === "this_year") {
			const startOfYear = new Date(now.getFullYear(), 0, 1);
			set(startDate, formatDateForInput(startOfYear), true);
			set(endDate, formatDateForInput(now), true);
		} else {
			set(startDate, "");
			set(endDate, "");
		}
	}
	function resetFilters() {
		set(startDate, "");
		set(endDate, "");
		set(searchQuery, "");
		set(activePreset, "all");
	}
	const filteredTransactions = user_derived(() => {
		let list = get(transactions);
		if (get(startDate)) {
			const start = (/* @__PURE__ */ new Date(get(startDate) + "T00:00:00")).getTime();
			list = list.filter((t) => new Date(t.createdAt).getTime() >= start);
		}
		if (get(endDate)) {
			const end = (/* @__PURE__ */ new Date(get(endDate) + "T23:59:59")).getTime();
			list = list.filter((t) => new Date(t.createdAt).getTime() <= end);
		}
		if (get(searchQuery).trim()) {
			const q = get(searchQuery).trim().toLowerCase();
			list = list.filter((t) => t.documentNumber && t.documentNumber.toLowerCase().includes(q) || t.displayNarrative && t.displayNarrative.toLowerCase().includes(q) || t.displayDescription && t.displayDescription.toLowerCase().includes(q) || t.description && t.description.toLowerCase().includes(q) || t.referenceId && String(t.referenceId).toLowerCase().includes(q));
		}
		return list;
	});
	const statementRows = user_derived(() => {
		const currentBank = get(bank);
		if (!currentBank) return [];
		let bal = currentBank.balance;
		const mapped = get(transactions).map((t) => {
			const isDebit = t.destinationBankId === currentBank.id;
			const debit = isDebit ? t.amount : 0;
			const credit = !isDebit ? t.amount : 0;
			bal += debit - credit;
			return {
				t,
				debit,
				credit,
				bal
			};
		});
		const filteredIds = new Set(get(filteredTransactions).map((x) => x.id));
		return mapped.filter((row) => filteredIds.has(row.t.id)).reverse();
	});
	const filterSummary = user_derived(() => {
		let totalDebit = 0;
		let totalCredit = 0;
		for (const r of get(statementRows)) {
			totalDebit += r.debit;
			totalCredit += r.credit;
		}
		return {
			totalDebit,
			totalCredit,
			netChange: totalDebit - totalCredit,
			count: get(statementRows).length
		};
	});
	async function loadBankDetail() {
		set(loading, true);
		set(errorMsg, null);
		set(correlationId, "");
		if (isNaN(bankId) || bankId <= 0) {
			set(errorMsg, "Invalid bank identifier.");
			set(loading, false);
			return;
		}
		try {
			const match = (await getBanks()).find((b) => b.id === bankId);
			if (match) {
				set(bank, match, true);
				await loadBankTransactions();
			} else set(errorMsg, `Bank account #${bankId} was not found.`);
		} catch (err) {
			set(errorMsg, err.message || "Failed to fetch bank details.", true);
			set(correlationId, err.correlationId || "", true);
		} finally {
			set(loading, false);
		}
	}
	async function loadBankTransactions() {
		if (!get(bank)) return;
		set(loadingTransactions, true);
		try {
			const res = await getTransactions({
				bankId: get(bank).id,
				pageSize: 1e3
			});
			set(transactions, res.filter((t) => t.status.toLowerCase() === "approved").sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()), true);
		} catch (err) {
			addToast(err.message || "Failed to load bank transaction history.", "error");
		} finally {
			set(loadingTransactions, false);
		}
	}
	function handleExportCSV() {
		const currentBank = get(bank);
		const rowsData = get(statementRows);
		if (!currentBank || rowsData.length === 0) return;
		const headers = [
			"ID",
			"Date",
			"Description",
			"Debit (BHD)",
			"Credit (BHD)",
			"Reference"
		];
		const rows = rowsData.map((row) => [
			row.t.documentNumber,
			row.t.createdAt ? formatDateOnly(row.t.createdAt) : "",
			row.t.displayNarrative || row.t.displayDescription || row.t.description || "",
			row.debit > 0 ? row.debit : "",
			row.credit > 0 ? row.credit : "",
			row.t.referenceId ? `${row.t.referenceType ?? ""} #${row.t.referenceId}` : ""
		]);
		exportToCSV(`statement_${currentBank.bankName.replace(/[^a-z0-9]/gi, "_").toLowerCase()}${get(startDate) || get(endDate) ? `_${get(startDate) || "start"}_to_${get(endDate) || "end"}` : ""}_${getBahrainDateString()}.csv`, headers, rows);
		addToast("CSV statement exported successfully.", "success");
	}
	function handleExportPDF() {
		const currentBank = get(bank);
		if (!currentBank) return;
		previewDocument("report", "bank-statement", {
			bankId: currentBank.id,
			startDate: get(startDate),
			endDate: get(endDate)
		});
		addToast("Generating PDF statement...", "info");
	}
	async function handleToggleStatus() {
		if (!get(bank)) return;
		if (!hasRole("master_accountant")) {
			addToast("Only a Master Accountant can toggle bank account status.", "error");
			return;
		}
		try {
			await toggleBankStatus(get(bank).id);
			addToast("Bank status updated successfully.", "success");
			loadBankDetail();
		} catch (err) {
			addToast(err.message || "Failed to toggle status.", "error");
		}
	}
	onMount(() => {
		loadBankDetail();
	});
	var div = root_19();
	head("1phztbd", ($$anchor) => {
		effect(() => {
			$document.title = "Bank Account Detail — Accounts Portal";
		});
	});
	var button = child(div);
	Arrow_left(child(button), { class: "h-3.5 w-3.5" });
	next(2);
	reset(button);
	var node_1 = sibling(button, 2);
	var consequent = ($$anchor) => {
		append($$anchor, root());
	};
	var consequent_1 = ($$anchor) => {
		ErrorState($$anchor, {
			get message() {
				return get(errorMsg);
			},
			get correlationId() {
				return get(correlationId);
			},
			retryAction: loadBankDetail
		});
	};
	var consequent_14 = ($$anchor) => {
		var fragment_1 = root_18();
		var div_2 = first_child(fragment_1);
		var div_3 = child(div_2);
		var div_4 = child(div_3);
		var span = child(div_4);
		var text$1 = child(span, true);
		reset(span);
		var span_1 = sibling(span, 2);
		var text_1 = child(span_1, true);
		reset(span_1);
		reset(div_4);
		var div_5 = sibling(div_4, 2);
		var span_2 = child(div_5);
		var text_2 = child(span_2);
		reset(span_2);
		var span_3 = sibling(span_2, 4);
		DateDisplay(sibling(child(span_3)), { get value() {
			return get(bank).createdAt;
		} });
		reset(span_3);
		reset(div_5);
		reset(div_3);
		var div_6 = sibling(div_3, 2);
		var node_3 = child(div_6);
		var consequent_2 = ($$anchor) => {
			var fragment_2 = root_3();
			var node_4 = first_child(fragment_2);
			Button(node_4, {
				variant: "outline",
				class: "h-8.5 rounded-xl font-semibold text-xs cursor-pointer flex items-center gap-1",
				onclick: () => goto(`/banks?edit=${get(bank)?.id}`),
				children: ($$anchor, $$slotProps) => {
					var fragment_3 = root_1();
					Pencil(first_child(fragment_3), { class: "h-3.5 w-3.5" });
					next(2);
					append($$anchor, fragment_3);
				},
				$$slots: { default: true }
			});
			var node_6 = sibling(node_4, 2);
			{
				let $0 = user_derived(() => ["h-8.5 rounded-xl font-semibold text-xs cursor-pointer flex items-center gap-1", get(bank).isActive ? "text-red-600 hover:text-red-700 hover:bg-red-50" : "text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50"].join(" "));
				Button(node_6, {
					variant: "outline",
					get class() {
						return get($0);
					},
					onclick: handleToggleStatus,
					children: ($$anchor, $$slotProps) => {
						var fragment_4 = root_2();
						var node_7 = first_child(fragment_4);
						Power(node_7, { class: "h-3.5 w-3.5" });
						var span_4 = sibling(node_7, 2);
						var text_3 = child(span_4, true);
						reset(span_4);
						template_effect(() => set_text(text_3, get(bank).isActive ? "Deactivate" : "Activate"));
						append($$anchor, fragment_4);
					},
					$$slots: { default: true }
				});
			}
			append($$anchor, fragment_2);
		};
		var d_1 = user_derived(() => hasRole("master_accountant"));
		if_block(node_3, ($$render) => {
			if (get(d_1)) $$render(consequent_2);
		});
		reset(div_6);
		reset(div_2);
		var div_7 = sibling(div_2, 2);
		var div_8 = child(div_7);
		var span_5 = sibling(child(div_8), 2);
		MoneyDisplay(child(span_5), { get amount() {
			return get(bank).balance;
		} });
		reset(span_5);
		reset(div_8);
		var div_9 = sibling(div_8, 2);
		var span_6 = sibling(child(div_9), 2);
		MoneyDisplay(child(span_6), { get amount() {
			return get(bank).currentBalance;
		} });
		reset(span_6);
		reset(div_9);
		reset(div_7);
		var div_10 = sibling(div_7, 2);
		var div_11 = child(div_10);
		var h2 = child(div_11);
		Landmark(child(h2), { class: "h-4.5 w-4.5 text-muted-foreground" });
		next(2);
		reset(h2);
		var node_11 = sibling(h2, 2);
		var consequent_3 = ($$anchor) => {
			var div_12 = root_6();
			var node_12 = child(div_12);
			Button(node_12, {
				variant: "outline",
				class: "h-7.5 text-[11px] font-semibold rounded-lg flex items-center gap-1 cursor-pointer",
				onclick: handleExportCSV,
				children: ($$anchor, $$slotProps) => {
					var fragment_5 = root_4();
					File_spreadsheet(first_child(fragment_5), { class: "h-3.5 w-3.5" });
					next();
					append($$anchor, fragment_5);
				},
				$$slots: { default: true }
			});
			Button(sibling(node_12, 2), {
				variant: "outline",
				class: "h-7.5 text-[11px] font-semibold rounded-lg flex items-center gap-1 cursor-pointer",
				onclick: handleExportPDF,
				children: ($$anchor, $$slotProps) => {
					var fragment_6 = root_5();
					File_down(first_child(fragment_6), { class: "h-3.5 w-3.5" });
					next();
					append($$anchor, fragment_6);
				},
				$$slots: { default: true }
			});
			reset(div_12);
			append($$anchor, div_12);
		};
		if_block(node_11, ($$render) => {
			if (get(statementRows).length > 0) $$render(consequent_3);
		});
		reset(div_11);
		var div_13 = sibling(div_11, 2);
		var div_14 = child(div_13);
		var div_15 = child(div_14);
		var span_7 = child(div_15);
		Calendar(child(span_7), { class: "h-3.5 w-3.5" });
		next();
		reset(span_7);
		var button_1 = sibling(span_7, 2);
		var button_2 = sibling(button_1, 2);
		var button_3 = sibling(button_2, 2);
		var button_4 = sibling(button_3, 2);
		var button_5 = sibling(button_4, 2);
		reset(div_15);
		var node_17 = sibling(div_15, 2);
		var consequent_4 = ($$anchor) => {
			Button($$anchor, {
				variant: "ghost",
				size: "sm",
				onclick: resetFilters,
				class: "h-7 text-xs rounded-lg text-muted-foreground hover:text-foreground cursor-pointer",
				children: ($$anchor, $$slotProps) => {
					var fragment_8 = root_7();
					X(first_child(fragment_8), { class: "h-3.5 w-3.5 mr-1" });
					next();
					append($$anchor, fragment_8);
				},
				$$slots: { default: true }
			});
		};
		if_block(node_17, ($$render) => {
			if (get(startDate) || get(endDate) || get(searchQuery)) $$render(consequent_4);
		});
		reset(div_14);
		var div_16 = sibling(div_14, 2);
		var div_17 = child(div_16);
		var node_19 = child(div_17);
		Search(node_19, { class: "absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" });
		Input(sibling(node_19, 2), {
			type: "text",
			placeholder: "Search by ID, narrative, description, ref...",
			class: "pl-9 h-9 text-xs rounded-xl",
			get value() {
				return get(searchQuery);
			},
			set value($$value) {
				set(searchQuery, $$value, true);
			}
		});
		reset(div_17);
		var div_18 = sibling(div_17, 2);
		var div_19 = child(div_18);
		Input(sibling(child(div_19), 2), {
			type: "date",
			onchange: () => set(activePreset, "all"),
			class: "h-9 text-xs rounded-xl w-36",
			get value() {
				return get(startDate);
			},
			set value($$value) {
				set(startDate, $$value, true);
			}
		});
		reset(div_19);
		var div_20 = sibling(div_19, 4);
		Input(sibling(child(div_20), 2), {
			type: "date",
			onchange: () => set(activePreset, "all"),
			class: "h-9 text-xs rounded-xl w-36",
			get value() {
				return get(endDate);
			},
			set value($$value) {
				set(endDate, $$value, true);
			}
		});
		reset(div_20);
		reset(div_18);
		reset(div_16);
		var node_23 = sibling(div_16, 2);
		var consequent_6 = ($$anchor) => {
			var div_21 = root_9();
			var div_22 = child(div_21);
			var strong = sibling(child(div_22));
			var text_4 = child(strong, true);
			reset(strong);
			var text_5 = sibling(strong);
			var node_24 = sibling(text_5);
			var consequent_5 = ($$anchor) => {
				var span_8 = root_8();
				var text_6 = child(span_8);
				reset(span_8);
				template_effect(() => set_text(text_6, `(${(get(startDate) || "Start") ?? ""} → ${(get(endDate) || "Present") ?? ""})`));
				append($$anchor, span_8);
			};
			if_block(node_24, ($$render) => {
				if (get(startDate) || get(endDate)) $$render(consequent_5);
			});
			reset(div_22);
			var div_23 = sibling(div_22, 2);
			var span_9 = child(div_23);
			MoneyDisplay(sibling(child(span_9)), { get amount() {
				return get(filterSummary).totalDebit;
			} });
			reset(span_9);
			var span_10 = sibling(span_9, 2);
			MoneyDisplay(sibling(child(span_10)), { get amount() {
				return get(filterSummary).totalCredit;
			} });
			reset(span_10);
			var span_11 = sibling(span_10, 2);
			MoneyDisplay(sibling(child(span_11)), { get amount() {
				return get(filterSummary).netChange;
			} });
			reset(span_11);
			reset(div_23);
			reset(div_21);
			template_effect(() => {
				set_text(text_4, get(filterSummary).count);
				set_text(text_5, ` of ${get(transactions).length ?? ""} entries `);
			});
			append($$anchor, div_21);
		};
		if_block(node_23, ($$render) => {
			if (get(startDate) || get(endDate) || get(searchQuery)) $$render(consequent_6);
		});
		reset(div_13);
		var node_28 = sibling(div_13, 2);
		var consequent_7 = ($$anchor) => {
			append($$anchor, root_10());
		};
		var consequent_9 = ($$anchor) => {
			var div_25 = root_11();
			var node_29 = sibling(child(div_25), 2);
			var consequent_8 = ($$anchor) => {
				Button($$anchor, {
					variant: "outline",
					size: "sm",
					onclick: resetFilters,
					class: "h-7 rounded-lg text-xs cursor-pointer",
					children: ($$anchor, $$slotProps) => {
						next();
						append($$anchor, text("Clear Filters"));
					},
					$$slots: { default: true }
				});
			};
			if_block(node_29, ($$render) => {
				if (get(startDate) || get(endDate) || get(searchQuery)) $$render(consequent_8);
			});
			reset(div_25);
			append($$anchor, div_25);
		};
		var alternate_3 = ($$anchor) => {
			var div_26 = root_17();
			var div_27 = child(div_26);
			var table = child(div_27);
			var tbody = sibling(child(table));
			each(tbody, 21, () => get(statementRows), (row) => row.t.id, ($$anchor, row) => {
				var tr = root_16();
				var td = child(tr);
				var text_8 = child(td, true);
				reset(td);
				var td_1 = sibling(td);
				var text_9 = child(td_1, true);
				reset(td_1);
				var td_2 = sibling(td_1);
				var node_30 = child(td_2);
				{
					let $0 = user_derived(() => get(row).t.displayNarrative || get(row).t.displayDescription || get(row).t.description);
					FormattedNarrative(node_30, { get text() {
						return get($0);
					} });
				}
				reset(td_2);
				var td_3 = sibling(td_2);
				var node_31 = child(td_3);
				var consequent_10 = ($$anchor) => {
					MoneyDisplay($$anchor, { get amount() {
						return get(row).debit;
					} });
				};
				var alternate = ($$anchor) => {
					append($$anchor, root_12());
				};
				if_block(node_31, ($$render) => {
					if (get(row).debit > 0) $$render(consequent_10);
					else $$render(alternate, -1);
				});
				reset(td_3);
				var td_4 = sibling(td_3);
				var node_32 = child(td_4);
				var consequent_11 = ($$anchor) => {
					MoneyDisplay($$anchor, { get amount() {
						return get(row).credit;
					} });
				};
				var alternate_1 = ($$anchor) => {
					append($$anchor, root_12());
				};
				if_block(node_32, ($$render) => {
					if (get(row).credit > 0) $$render(consequent_11);
					else $$render(alternate_1, -1);
				});
				reset(td_4);
				var td_5 = sibling(td_4);
				var node_33 = child(td_5);
				var consequent_13 = ($$anchor) => {
					var fragment_12 = root_14();
					var span_14 = first_child(fragment_12);
					var text_10 = child(span_14, true);
					reset(span_14);
					var node_34 = sibling(span_14, 2);
					var consequent_12 = ($$anchor) => {
						var span_15 = root_13();
						var text_11 = child(span_15, true);
						reset(span_15);
						template_effect(() => set_text(text_11, get(row).t.referenceType));
						append($$anchor, span_15);
					};
					if_block(node_34, ($$render) => {
						if (get(row).t.referenceType) $$render(consequent_12);
					});
					template_effect(() => set_text(text_10, get(row).t.referenceId));
					append($$anchor, fragment_12);
				};
				var alternate_2 = ($$anchor) => {
					append($$anchor, root_15());
				};
				if_block(node_33, ($$render) => {
					if (get(row).t.referenceId) $$render(consequent_13);
					else $$render(alternate_2, -1);
				});
				reset(td_5);
				reset(tr);
				template_effect(($0) => {
					set_text(text_8, get(row).t.documentNumber);
					set_text(text_9, $0);
				}, [() => new Date(get(row).t.createdAt).toLocaleDateString()]);
				append($$anchor, tr);
			});
			reset(tbody);
			reset(table);
			reset(div_27);
			reset(div_26);
			append($$anchor, div_26);
		};
		if_block(node_28, ($$render) => {
			if (get(loadingTransactions)) $$render(consequent_7);
			else if (get(statementRows).length === 0) $$render(consequent_9, 1);
			else $$render(alternate_3, -1);
		});
		reset(div_10);
		template_effect(($0) => {
			set_text(text$1, get(bank).bankName);
			set_class(span_1, 1, $0);
			set_text(text_1, get(bank).isActive ? "Active" : "Inactive");
			set_text(text_2, `Account: ${get(bank).accountNumber ?? ""}`);
			set_class(button_1, 1, `px-2.5 py-1 rounded-lg border text-[11px] font-medium transition-colors cursor-pointer ${get(activePreset) === "all" && !get(startDate) && !get(endDate) ? "bg-primary text-primary-foreground border-primary" : "border-border bg-background hover:bg-muted text-muted-foreground"}`);
			set_class(button_2, 1, `px-2.5 py-1 rounded-lg border text-[11px] font-medium transition-colors cursor-pointer ${get(activePreset) === "today" ? "bg-primary text-primary-foreground border-primary" : "border-border bg-background hover:bg-muted text-muted-foreground"}`);
			set_class(button_3, 1, `px-2.5 py-1 rounded-lg border text-[11px] font-medium transition-colors cursor-pointer ${get(activePreset) === "this_month" ? "bg-primary text-primary-foreground border-primary" : "border-border bg-background hover:bg-muted text-muted-foreground"}`);
			set_class(button_4, 1, `px-2.5 py-1 rounded-lg border text-[11px] font-medium transition-colors cursor-pointer ${get(activePreset) === "last_30" ? "bg-primary text-primary-foreground border-primary" : "border-border bg-background hover:bg-muted text-muted-foreground"}`);
			set_class(button_5, 1, `px-2.5 py-1 rounded-lg border text-[11px] font-medium transition-colors cursor-pointer ${get(activePreset) === "this_year" ? "bg-primary text-primary-foreground border-primary" : "border-border bg-background hover:bg-muted text-muted-foreground"}`);
		}, [() => clsx(["text-[10px] font-semibold px-2 py-0.5 rounded-full border", get(bank).isActive ? "text-emerald-700 bg-emerald-50 border-emerald-200" : "text-muted-foreground bg-muted border-border"].join(" "))]);
		delegated("click", button_1, () => applyPreset("all"));
		delegated("click", button_2, () => applyPreset("today"));
		delegated("click", button_3, () => applyPreset("this_month"));
		delegated("click", button_4, () => applyPreset("last_30"));
		delegated("click", button_5, () => applyPreset("this_year"));
		append($$anchor, fragment_1);
	};
	if_block(node_1, ($$render) => {
		if (get(loading)) $$render(consequent);
		else if (get(errorMsg)) $$render(consequent_1, 1);
		else if (get(bank)) $$render(consequent_14, 2);
	});
	reset(div);
	delegated("click", button, () => goto("/banks"));
	append($$anchor, div);
	pop();
	$$cleanup();
}
delegate(["click"]);
//#endregion
export { _page as component };

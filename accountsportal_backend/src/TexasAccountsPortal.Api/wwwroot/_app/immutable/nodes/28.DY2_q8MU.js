import { B as append, Bt as reset, Ct as user_derived, D as head, H as from_html, I as if_block, K as delegate, N as each, Nt as pop, P as index, Pt as push, Q as get, R as set_text, T as clsx, V as comment, _ as set_attribute, b as bind_select_value, bt as state, dt as $document, g as remove_input_defaults, gt as proxy, ht as sibling, it as effect, m as bind_value, mt as first_child, ot as template_effect, pt as child, q as delegated, r as onMount, vt as set, w as set_class, zt as next } from "../chunks/dXkmWTgM.js";
import { t as goto } from "../chunks/CFxMy_KP.js";
import "../chunks/DhaYE-8x.js";
import { r as toast } from "../chunks/CbPRQHfn.js";
import { t as Calendar } from "../chunks/DxFQ7Qxv.js";
import { n as File_down, t as File_spreadsheet } from "../chunks/eZBXeOpB2.js";
import { t as Funnel } from "../chunks/BlRZ0F4U2.js";
import { t as Plus } from "../chunks/BObidJ7B2.js";
import { t as ErrorState } from "../chunks/B7ZVWvAI2.js";
import { t as Search } from "../chunks/D7t9qluE.js";
import { t as Wallet } from "../chunks/BahXSy4P.js";
import { t as Button } from "../chunks/BhXsq3bC.js";
import "../chunks/DOPdTmpX.js";
import { t as FinancialTableSkeleton } from "../chunks/BifxP-5W.js";
import { t as EmptyState } from "../chunks/DXyN7dIZ.js";
import { t as MoneyDisplay } from "../chunks/CIVSRuaR.js";
import { t as exportToCSV } from "../chunks/C74Z4VDd2.js";
import { t as previewDocument } from "../chunks/8L2wtIl22.js";
import { c as getExpenses, o as getExpenseHeaders, s as getExpenseSummary } from "../chunks/D8a6XzSV2.js";
import { n as PAYMENT_METHOD_LABELS, t as EXPENSE_STATUS_LABELS } from "../chunks/rjZ5RTov2.js";
//#region src/routes/(app)/payments/+page.svelte
var root = from_html(`<!> Create Header`, 1);
var root_1 = from_html(`<!> Log Payment`, 1);
var root_2 = from_html(`<div class="bg-card border border-border rounded-2xl p-4 space-y-2 shadow-xs relative overflow-hidden group"><div class="absolute top-0 left-0 w-1 h-full bg-purple-500"></div> <span class="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Contra</span> <div class="flex items-baseline justify-between"><span class="text-lg font-bold text-foreground"> </span> <span class="text-xs font-semibold text-muted-foreground"><!></span></div></div>`);
var root_3 = from_html(`<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3"><div class="bg-card border border-border rounded-2xl p-4 space-y-2 shadow-xs relative overflow-hidden group"><div class="absolute top-0 left-0 w-1 h-full bg-primary"></div> <span class="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">All Categories</span> <div class="flex items-baseline justify-between"><span class="text-lg font-bold text-foreground"> </span> <span class="text-xs font-semibold text-muted-foreground"><!></span></div></div> <div class="bg-card border border-border rounded-2xl p-4 space-y-2 shadow-xs relative overflow-hidden group"><div class="absolute top-0 left-0 w-1 h-full bg-blue-500"></div> <span class="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Asset</span> <div class="flex items-baseline justify-between"><span class="text-lg font-bold text-foreground"> </span> <span class="text-xs font-semibold text-muted-foreground"><!></span></div></div> <div class="bg-card border border-border rounded-2xl p-4 space-y-2 shadow-xs relative overflow-hidden group"><div class="absolute top-0 left-0 w-1 h-full bg-amber-500"></div> <span class="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Liability</span> <div class="flex items-baseline justify-between"><span class="text-lg font-bold text-foreground"> </span> <span class="text-xs font-semibold text-muted-foreground"><!></span></div></div> <div class="bg-card border border-border rounded-2xl p-4 space-y-2 shadow-xs relative overflow-hidden group"><div class="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div> <span class="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Income</span> <div class="flex items-baseline justify-between"><span class="text-lg font-bold text-foreground"> </span> <span class="text-xs font-semibold text-muted-foreground"><!></span></div></div> <div class="bg-card border border-border rounded-2xl p-4 space-y-2 shadow-xs relative overflow-hidden group"><div class="absolute top-0 left-0 w-1 h-full bg-indigo-500"></div> <span class="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Capital</span> <div class="flex items-baseline justify-between"><span class="text-lg font-bold text-foreground"> </span> <span class="text-xs font-semibold text-muted-foreground"><!></span></div></div> <div class="bg-card border border-border rounded-2xl p-4 space-y-2 shadow-xs relative overflow-hidden group"><div class="absolute top-0 left-0 w-1 h-full bg-rose-500"></div> <span class="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Expenses</span> <div class="flex items-baseline justify-between"><span class="text-lg font-bold text-foreground"> </span> <span class="text-xs font-semibold text-muted-foreground"><!></span></div></div> <!></div>`);
var root_4 = from_html(`<button> </button>`);
var root_5 = from_html(`<!> Export CSV`, 1);
var root_6 = from_html(`<!> Export PDF`, 1);
var root_7 = from_html(`<div class="bg-card border border-border rounded-2xl overflow-hidden shadow-xs"><!></div>`);
var root_8 = from_html(`<span class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-purple-500/10 text-purple-600 border border-purple-500/20 shadow-xs">Contra Transfer</span>`);
var root_9 = from_html(`<span class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">Incoming</span>`);
var root_10 = from_html(`<span class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-500/10 text-blue-600 border border-blue-500/20">Outgoing</span>`);
var root_11 = from_html(`<tr class="hover:bg-muted/10 transition-colors cursor-pointer"><td class="p-4 font-mono font-medium text-muted-foreground"> </td><td class="p-4"><!></td><td class="p-4 font-semibold text-foreground truncate max-w-[180px]"> </td><td class="p-4"><span> </span></td><td class="p-4 text-foreground truncate max-w-[250px]"> </td><td class="p-4 capitalize"> </td><td class="p-4"> </td><td class="p-4 text-right font-bold text-foreground"><!></td><td class="p-4"><span> </span></td></tr>`);
var root_12 = from_html(`<div class="bg-card border border-border rounded-2xl overflow-hidden shadow-xs"><div class="overflow-x-auto"><table class="w-full min-w-[850px] text-left border-collapse text-xs"><thead><tr class="bg-muted/30 border-b border-border text-muted-foreground font-semibold"><th class="p-4 w-28">Payment No.</th><th class="p-4 w-24">Direction</th><th class="p-4 w-40">Category Name</th><th class="p-4 w-32">Category Bucket</th><th class="p-4">Description</th><th class="p-4 w-28">Payment Method</th><th class="p-4 w-28">Date</th><th class="p-4 w-28 text-right">Amount</th><th class="p-4 w-24">Status</th></tr></thead><tbody class="divide-y divide-border/60"></tbody></table></div></div>`);
var root_13 = from_html(`<div class="space-y-6"><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"><div class="flex flex-col gap-1"><h1 class="text-xl font-bold text-foreground">Expense & Treasury Payments</h1> <p class="text-xs text-muted-foreground">Record operational costs, contra transfers, manage categories, and check auto-posting transactions.</p></div> <div class="flex items-center gap-2"><!> <!></div></div> <!> <div class="bg-card border border-border rounded-2xl p-4 shadow-xs space-y-4"><div class="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4"><div class="relative flex-1"><!> <input type="text" placeholder="Search by Number, Description, or Category Name..." class="pl-9 h-10 w-full bg-background border border-border rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground"/></div> <div class="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0"></div></div> <div class="flex flex-wrap items-center gap-3 pt-3 border-t border-border/60 text-xs"><div class="flex items-center gap-2"><!> <span class="font-medium text-muted-foreground">Date Range:</span> <input type="date" class="h-8 bg-background border border-border rounded-lg px-2 text-[11px] text-foreground focus:outline-none"/> <span class="text-muted-foreground">—</span> <input type="date" class="h-8 bg-background border border-border rounded-lg px-2 text-[11px] text-foreground focus:outline-none"/></div> <div class="flex items-center gap-2 ml-0 sm:ml-auto"><!> <span class="font-medium text-muted-foreground">Category Bucket:</span> <select class="h-8 bg-background border border-border rounded-lg px-2 text-[11px] text-foreground focus:outline-none"><option>All Buckets</option><option>Asset</option><option>Liability</option><option>Income</option><option>Capital</option><option>Expenses</option><option>Contra</option></select></div> <div class="flex items-center gap-2 ml-auto sm:ml-0"><!> <!></div></div></div> <!></div>`);
function _page($$anchor, $$props) {
	push($$props, true);
	let expenses = state(proxy([]));
	let headers = state(proxy([]));
	let summary = state(null);
	let loading = state(true);
	let errorMsg = state(null);
	let correlationId = state("");
	let searchVal = state("");
	let statusFilter = state("all");
	let categoryFilter = state("all");
	let startDate = state("");
	let endDate = state("");
	let abortController = null;
	async function loadData() {
		if (abortController) abortController.abort();
		abortController = new AbortController();
		set(loading, true);
		set(errorMsg, null);
		set(correlationId, "");
		try {
			const [expList, headersList, summaryData] = await Promise.all([
				getExpenses(abortController.signal),
				getExpenseHeaders(abortController.signal),
				getExpenseSummary(abortController.signal)
			]);
			set(expenses, expList.sort((a, b) => new Date(b.expenseDate).getTime() - new Date(a.expenseDate).getTime()), true);
			set(headers, headersList, true);
			set(summary, summaryData, true);
		} catch (err) {
			if (err.name === "AbortError") return;
			set(errorMsg, err.message || "Failed to load expense records.", true);
			set(correlationId, err.correlationId || "", true);
		} finally {
			set(loading, false);
		}
	}
	const filteredExpenses = user_derived(() => () => {
		let result = get(expenses);
		if (get(statusFilter) !== "all") result = result.filter((e) => e.status === get(statusFilter));
		if (get(categoryFilter) !== "all") result = result.filter((e) => {
			const h = get(headers).find((x) => x.id === e.expenseCategoryId);
			if (!h) return false;
			return h.category.toLowerCase() === get(categoryFilter).toLowerCase() || get(categoryFilter).toLowerCase() === "expenses" && h.category.toLowerCase() === "expense";
		});
		if (get(startDate)) {
			const start = new Date(get(startDate)).getTime();
			result = result.filter((e) => new Date(e.expenseDate).getTime() >= start);
		}
		if (get(endDate)) {
			const end = new Date(get(endDate)).getTime() + 864e5;
			result = result.filter((e) => new Date(e.expenseDate).getTime() < end);
		}
		if (get(searchVal).trim() !== "") {
			const query = get(searchVal).toLowerCase();
			result = result.filter((e) => {
				const headerName = get(headers).find((x) => x.id === e.expenseCategoryId)?.name.toLowerCase() || "";
				return e.expenseNumber.toLowerCase().includes(query) || e.description.toLowerCase().includes(query) || headerName.includes(query);
			});
		}
		return result;
	});
	function exportCSV() {
		const list = get(filteredExpenses)();
		if (list.length === 0) return;
		const csvHeaders = [
			"Payment Number",
			"Category Header",
			"Category Bucket",
			"Description",
			"Payment Channel",
			"Date",
			"Amount (BHD)",
			"Status"
		];
		const csvRows = list.map((row) => {
			const h = get(headers).find((x) => x.id === row.expenseCategoryId);
			const catName = h?.name || "Uncategorized";
			const catType = h?.category || "Expenses";
			return [
				row.expenseNumber,
				catName,
				catType,
				row.description,
				PAYMENT_METHOD_LABELS[row.paymentMethod] || row.paymentMethod,
				row.expenseDate ? row.expenseDate.split("T")[0] : "",
				row.amount,
				EXPENSE_STATUS_LABELS[row.status] || row.status
			];
		});
		exportToCSV(`Payments_Export_${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.csv`, csvHeaders, csvRows);
		toast.success("CSV exported successfully.");
	}
	function exportPDF() {
		previewDocument("report", "payments", {
			status: get(statusFilter),
			category: get(categoryFilter),
			startDate: get(startDate),
			endDate: get(endDate),
			searchVal: get(searchVal)
		});
		toast.info("Generating print document...");
	}
	onMount(() => {
		loadData();
		return () => {
			if (abortController) abortController.abort();
		};
	});
	function getBucketBadgeStyle(cat) {
		const norm = (cat || "").toLowerCase();
		if (norm === "income") return {
			bg: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/30",
			label: "Income"
		};
		if (norm === "asset") return {
			bg: "bg-blue-500/15 text-blue-700 dark:text-blue-300 border-blue-500/30",
			label: "Asset"
		};
		if (norm === "liability") return {
			bg: "bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/30",
			label: "Liability"
		};
		if (norm === "capital") return {
			bg: "bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 border-indigo-500/30",
			label: "Capital"
		};
		if (norm === "contra") return {
			bg: "bg-purple-500/15 text-purple-700 dark:text-purple-300 border-purple-500/30",
			label: "Contra"
		};
		return {
			bg: "bg-rose-500/15 text-rose-700 dark:text-rose-300 border-rose-500/30",
			label: "Expenses"
		};
	}
	var div = root_13();
	head("1fp8yfp", ($$anchor) => {
		effect(() => {
			$document.title = "Payments — Accounts Portal";
		});
	});
	var div_1 = child(div);
	var div_2 = sibling(child(div_1), 2);
	var node = child(div_2);
	Button(node, {
		variant: "outline",
		class: "rounded-xl text-xs py-5 cursor-pointer font-semibold",
		onclick: () => goto("/payments/expenses/create-header"),
		children: ($$anchor, $$slotProps) => {
			var fragment = root();
			Plus(first_child(fragment), { class: "h-3.5 w-3.5 mr-1" });
			next();
			append($$anchor, fragment);
		},
		$$slots: { default: true }
	});
	Button(sibling(node, 2), {
		class: "rounded-xl text-xs py-5 cursor-pointer font-semibold",
		onclick: () => goto("/payments/new"),
		children: ($$anchor, $$slotProps) => {
			var fragment_1 = root_1();
			Plus(first_child(fragment_1), { class: "h-3.5 w-3.5 mr-1" });
			next();
			append($$anchor, fragment_1);
		},
		$$slots: { default: true }
	});
	reset(div_2);
	reset(div_1);
	var node_4 = sibling(div_1, 2);
	var consequent_1 = ($$anchor) => {
		var div_3 = root_3();
		var div_4 = child(div_3);
		var div_5 = sibling(child(div_4), 4);
		var span = child(div_5);
		var text = child(span, true);
		reset(span);
		var span_1 = sibling(span, 2);
		MoneyDisplay(child(span_1), { get amount() {
			return get(summary).all.totalAmount;
		} });
		reset(span_1);
		reset(div_5);
		reset(div_4);
		var div_6 = sibling(div_4, 2);
		var div_7 = sibling(child(div_6), 4);
		var span_2 = child(div_7);
		var text_1 = child(span_2, true);
		reset(span_2);
		var span_3 = sibling(span_2, 2);
		MoneyDisplay(child(span_3), { get amount() {
			return get(summary).asset.totalAmount;
		} });
		reset(span_3);
		reset(div_7);
		reset(div_6);
		var div_8 = sibling(div_6, 2);
		var div_9 = sibling(child(div_8), 4);
		var span_4 = child(div_9);
		var text_2 = child(span_4, true);
		reset(span_4);
		var span_5 = sibling(span_4, 2);
		MoneyDisplay(child(span_5), { get amount() {
			return get(summary).liability.totalAmount;
		} });
		reset(span_5);
		reset(div_9);
		reset(div_8);
		var div_10 = sibling(div_8, 2);
		var div_11 = sibling(child(div_10), 4);
		var span_6 = child(div_11);
		var text_3 = child(span_6, true);
		reset(span_6);
		var span_7 = sibling(span_6, 2);
		MoneyDisplay(child(span_7), { get amount() {
			return get(summary).income.totalAmount;
		} });
		reset(span_7);
		reset(div_11);
		reset(div_10);
		var div_12 = sibling(div_10, 2);
		var div_13 = sibling(child(div_12), 4);
		var span_8 = child(div_13);
		var text_4 = child(span_8, true);
		reset(span_8);
		var span_9 = sibling(span_8, 2);
		MoneyDisplay(child(span_9), { get amount() {
			return get(summary).capital.totalAmount;
		} });
		reset(span_9);
		reset(div_13);
		reset(div_12);
		var div_14 = sibling(div_12, 2);
		var div_15 = sibling(child(div_14), 4);
		var span_10 = child(div_15);
		var text_5 = child(span_10, true);
		reset(span_10);
		var span_11 = sibling(span_10, 2);
		MoneyDisplay(child(span_11), { get amount() {
			return get(summary).expenses.totalAmount;
		} });
		reset(span_11);
		reset(div_15);
		reset(div_14);
		var node_11 = sibling(div_14, 2);
		var consequent = ($$anchor) => {
			var div_16 = root_2();
			var div_17 = sibling(child(div_16), 4);
			var span_12 = child(div_17);
			var text_6 = child(span_12, true);
			reset(span_12);
			var span_13 = sibling(span_12, 2);
			MoneyDisplay(child(span_13), { get amount() {
				return get(summary).contra.totalAmount;
			} });
			reset(span_13);
			reset(div_17);
			reset(div_16);
			template_effect(() => set_text(text_6, get(summary).contra.count));
			append($$anchor, div_16);
		};
		if_block(node_11, ($$render) => {
			if (get(summary).contra) $$render(consequent);
		});
		reset(div_3);
		template_effect(() => {
			set_text(text, get(summary).all.count);
			set_text(text_1, get(summary).asset.count);
			set_text(text_2, get(summary).liability.count);
			set_text(text_3, get(summary).income.count);
			set_text(text_4, get(summary).capital.count);
			set_text(text_5, get(summary).expenses.count);
		});
		append($$anchor, div_3);
	};
	if_block(node_4, ($$render) => {
		if (get(summary)) $$render(consequent_1);
	});
	var div_18 = sibling(node_4, 2);
	var div_19 = child(div_18);
	var div_20 = child(div_19);
	var node_13 = child(div_20);
	Search(node_13, { class: "absolute left-3 top-2.5 h-4 w-4 text-muted-foreground/60" });
	var input = sibling(node_13, 2);
	remove_input_defaults(input);
	reset(div_20);
	var div_21 = sibling(div_20, 2);
	each(div_21, 20, () => [
		"all",
		"pendingapproval",
		"approved",
		"rejected"
	], index, ($$anchor, status) => {
		var button = root_4();
		var text_7 = child(button, true);
		reset(button);
		template_effect(($0) => {
			set_class(button, 1, $0);
			set_text(text_7, EXPENSE_STATUS_LABELS[status] || status);
		}, [() => clsx(["px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer whitespace-nowrap capitalize", get(statusFilter) === status ? "bg-primary border-primary text-primary-foreground" : "bg-background border-border text-muted-foreground hover:text-foreground"].join(" "))]);
		delegated("click", button, () => set(statusFilter, status, true));
		append($$anchor, button);
	});
	reset(div_21);
	reset(div_19);
	var div_22 = sibling(div_19, 2);
	var div_23 = child(div_22);
	var node_14 = child(div_23);
	Calendar(node_14, { class: "h-3.5 w-3.5 text-muted-foreground" });
	var input_1 = sibling(node_14, 4);
	remove_input_defaults(input_1);
	var input_2 = sibling(input_1, 4);
	remove_input_defaults(input_2);
	reset(div_23);
	var div_24 = sibling(div_23, 2);
	var node_15 = child(div_24);
	Funnel(node_15, { class: "h-3.5 w-3.5 text-muted-foreground" });
	var select = sibling(node_15, 4);
	var option = child(select);
	option.value = option.__value = "all";
	var option_1 = sibling(option);
	option_1.value = option_1.__value = "Asset";
	var option_2 = sibling(option_1);
	option_2.value = option_2.__value = "Liability";
	var option_3 = sibling(option_2);
	option_3.value = option_3.__value = "Income";
	var option_4 = sibling(option_3);
	option_4.value = option_4.__value = "Capital";
	var option_5 = sibling(option_4);
	option_5.value = option_5.__value = "Expenses";
	var option_6 = sibling(option_5);
	option_6.value = option_6.__value = "Contra";
	reset(select);
	reset(div_24);
	var div_25 = sibling(div_24, 2);
	var node_16 = child(div_25);
	{
		let $0 = user_derived(() => get(filteredExpenses)().length === 0);
		Button(node_16, {
			variant: "outline",
			size: "sm",
			class: "h-8 rounded-lg text-[11px] cursor-pointer",
			onclick: exportCSV,
			get disabled() {
				return get($0);
			},
			children: ($$anchor, $$slotProps) => {
				var fragment_2 = root_5();
				File_spreadsheet(first_child(fragment_2), { class: "h-3.5 w-3.5 mr-1" });
				next();
				append($$anchor, fragment_2);
			},
			$$slots: { default: true }
		});
	}
	var node_18 = sibling(node_16, 2);
	{
		let $0 = user_derived(() => get(filteredExpenses)().length === 0);
		Button(node_18, {
			variant: "outline",
			size: "sm",
			class: "h-8 rounded-lg text-[11px] cursor-pointer",
			onclick: exportPDF,
			get disabled() {
				return get($0);
			},
			children: ($$anchor, $$slotProps) => {
				var fragment_3 = root_6();
				File_down(first_child(fragment_3), { class: "h-3.5 w-3.5 mr-1" });
				next();
				append($$anchor, fragment_3);
			},
			$$slots: { default: true }
		});
	}
	reset(div_25);
	reset(div_22);
	reset(div_18);
	var node_20 = sibling(div_18, 2);
	var consequent_2 = ($$anchor) => {
		ErrorState($$anchor, {
			get message() {
				return get(errorMsg);
			},
			get correlationId() {
				return get(correlationId);
			},
			retryAction: loadData
		});
	};
	var alternate_2 = ($$anchor) => {
		var fragment_5 = comment();
		var node_21 = first_child(fragment_5);
		var consequent_3 = ($$anchor) => {
			var div_26 = root_7();
			FinancialTableSkeleton(child(div_26), {
				rows: 5,
				columns: 8
			});
			reset(div_26);
			append($$anchor, div_26);
		};
		var consequent_4 = ($$anchor) => {
			EmptyState($$anchor, {
				title: "No operational payments found",
				description: "Log a new payment to reduce cash drawer or bank accounts balance.",
				get icon() {
					return Wallet;
				}
			});
		};
		var d = user_derived(() => get(filteredExpenses)().length === 0);
		var alternate_1 = ($$anchor) => {
			var div_27 = root_12();
			var div_28 = child(div_27);
			var table = child(div_28);
			var tbody = sibling(child(table));
			each(tbody, 21, () => get(filteredExpenses)(), (exp) => exp.id, ($$anchor, exp) => {
				const headerObj = user_derived(() => get(headers).find((x) => x.id === get(exp).expenseCategoryId));
				const categoryBucket = user_derived(() => get(headerObj)?.category || "Expenses");
				const badge = user_derived(() => getBucketBadgeStyle(get(categoryBucket)));
				const isIncoming = user_derived(() => get(categoryBucket).toLowerCase() === "income" || get(categoryBucket).toLowerCase() === "capital");
				var tr = root_11();
				var td = child(tr);
				var text_8 = child(td, true);
				reset(td);
				var td_1 = sibling(td);
				var node_23 = child(td_1);
				var consequent_5 = ($$anchor) => {
					append($$anchor, root_8());
				};
				var d_1 = user_derived(() => get(categoryBucket).toLowerCase() === "contra");
				var consequent_6 = ($$anchor) => {
					append($$anchor, root_9());
				};
				var alternate = ($$anchor) => {
					append($$anchor, root_10());
				};
				if_block(node_23, ($$render) => {
					if (get(d_1)) $$render(consequent_5);
					else if (get(isIncoming)) $$render(consequent_6, 1);
					else $$render(alternate, -1);
				});
				reset(td_1);
				var td_2 = sibling(td_1);
				var text_9 = child(td_2, true);
				reset(td_2);
				var td_3 = sibling(td_2);
				var span_17 = child(td_3);
				var text_10 = child(span_17, true);
				reset(span_17);
				reset(td_3);
				var td_4 = sibling(td_3);
				var text_11 = child(td_4, true);
				reset(td_4);
				var td_5 = sibling(td_4);
				var text_12 = child(td_5, true);
				reset(td_5);
				var td_6 = sibling(td_5);
				var text_13 = child(td_6, true);
				reset(td_6);
				var td_7 = sibling(td_6);
				MoneyDisplay(child(td_7), { get amount() {
					return get(exp).amount;
				} });
				reset(td_7);
				var td_8 = sibling(td_7);
				var span_18 = child(td_8);
				var text_14 = child(span_18, true);
				reset(span_18);
				reset(td_8);
				reset(tr);
				template_effect(($0, $1) => {
					set_text(text_8, get(exp).expenseNumber);
					set_attribute(td_2, "title", get(headerObj)?.name || "Uncategorized");
					set_text(text_9, get(headerObj)?.name || "Uncategorized");
					set_class(span_17, 1, `inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${get(badge).bg}`);
					set_text(text_10, get(badge).label);
					set_attribute(td_4, "title", get(exp).description);
					set_text(text_11, get(exp).description);
					set_text(text_12, PAYMENT_METHOD_LABELS[get(exp).paymentMethod] || get(exp).paymentMethod);
					set_text(text_13, $0);
					set_class(span_18, 1, $1);
					set_text(text_14, EXPENSE_STATUS_LABELS[get(exp).status] || get(exp).status);
				}, [() => new Date(get(exp).expenseDate).toLocaleDateString(), () => clsx(["inline-flex items-center gap-1 font-semibold rounded-full border text-[10px] px-2 py-0.5 capitalize", get(exp).status === "approved" || get(exp).status === "posted" ? "text-emerald-700 bg-emerald-50 border-emerald-200 dark:text-emerald-400 dark:bg-emerald-950/40 dark:border-emerald-800" : get(exp).status === "pendingapproval" ? "text-yellow-700 bg-yellow-50 border-yellow-200 dark:text-yellow-400 dark:bg-yellow-950/40 dark:border-yellow-800" : get(exp).status === "rejected" || get(exp).status === "cancelled" || get(exp).status === "reversed" ? "text-rose-700 bg-rose-50 border-rose-200 dark:text-rose-400 dark:bg-rose-950/40 dark:border-rose-800" : "text-muted-foreground bg-muted border-border"].join(" "))]);
				delegated("click", tr, () => goto(`/payments/${get(exp).id}`));
				append($$anchor, tr);
			});
			reset(tbody);
			reset(table);
			reset(div_28);
			reset(div_27);
			append($$anchor, div_27);
		};
		if_block(node_21, ($$render) => {
			if (get(loading)) $$render(consequent_3);
			else if (get(d)) $$render(consequent_4, 1);
			else $$render(alternate_1, -1);
		});
		append($$anchor, fragment_5);
	};
	if_block(node_20, ($$render) => {
		if (get(errorMsg)) $$render(consequent_2);
		else $$render(alternate_2, -1);
	});
	reset(div);
	bind_value(input, () => get(searchVal), ($$value) => set(searchVal, $$value));
	bind_value(input_1, () => get(startDate), ($$value) => set(startDate, $$value));
	bind_value(input_2, () => get(endDate), ($$value) => set(endDate, $$value));
	bind_select_value(select, () => get(categoryFilter), ($$value) => set(categoryFilter, $$value));
	append($$anchor, div);
	pop();
}
delegate(["click"]);
//#endregion
export { _page as component };

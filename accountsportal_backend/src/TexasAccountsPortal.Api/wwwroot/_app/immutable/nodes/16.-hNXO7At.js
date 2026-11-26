import { B as append, Bt as reset, Ct as user_derived, D as head, Et as store_get, G as text, H as from_html, I as if_block, K as delegate, N as each, Nt as pop, Pt as push, Q as get, R as set_text, T as clsx, Tt as setup_stores, V as comment, bt as state, dt as $document, g as remove_input_defaults, gt as proxy, ht as sibling, it as effect, m as bind_value, mt as first_child, n as onDestroy, ot as template_effect, pt as child, q as delegated, r as onMount, ut as remove_textarea_child, vt as set, w as set_class, zt as next } from "../chunks/dXkmWTgM.js";
import { t as goto } from "../chunks/CwRgeZmC.js";
import "../chunks/DhaYE-8x.js";
import { i as hasRole } from "../chunks/BeSwqOYU.js";
import { t as addToast } from "../chunks/CbPRQHfn.js";
import { t as Arrow_left } from "../chunks/Bn7x0kyr.js";
import { t as Calendar } from "../chunks/DxFQ7Qxv.js";
import { t as Chart_column } from "../chunks/7SHXTl2V2.js";
import { t as File_down } from "../chunks/btBW28nf2.js";
import { t as File_spreadsheet } from "../chunks/B4BvDHOF2.js";
import { t as Loader_circle } from "../chunks/BMOA0yrB.js";
import { t as Power } from "../chunks/ZWE_o2ua.js";
import { t as Receipt } from "../chunks/4mbxDyuf.js";
import { t as Refresh_cw } from "../chunks/DpTJy0Wb.js";
import { t as Search } from "../chunks/D7t9qluE.js";
import { t as Shield_alert } from "../chunks/BqY57apW.js";
import { t as X } from "../chunks/wXHc9RNY.js";
import { i as formatDateOnly, o as getBahrainDateString } from "../chunks/CMotoyuB2.js";
import { t as page } from "../chunks/wTT7_FAj2.js";
import { t as Button } from "../chunks/BhXsq3bC2.js";
import { t as ErrorState } from "../chunks/_Vg9md0J2.js";
import "../chunks/ClNU7XG-2.js";
import "../chunks/BifxP-5W2.js";
import "../chunks/DVZCE_Pc2.js";
import { t as MoneyDisplay } from "../chunks/CIVSRuaR2.js";
import { t as DateDisplay } from "../chunks/CCHT88li2.js";
import "../chunks/i0JnNAgk2.js";
import { t as exportToCSV } from "../chunks/C74Z4VDd2.js";
import { t as previewDocument } from "../chunks/Ccpbu0Vu2.js";
import { i as toggleAccountStatus, r as getAccounts, t as correctAccountBalance } from "../chunks/D7DjMYd42.js";
import { r as LEDGER_TYPE_LABELS, t as ACCOUNT_TYPE_LABELS } from "../chunks/HvLHPagu2.js";
import { a as getTransactions } from "../chunks/Nc5gHCa6.js";
import { t as createIdempotentOperation } from "../chunks/Bt9NpIc7.js";
import { t as FormattedNarrative } from "../chunks/CHiWmlVe.js";
import { t as ConflictDialog } from "../chunks/CEd2erbh.js";
import { t as Input } from "../chunks/aUAD-svz.js";
import { n as resolveStatementTransactionType, t as getStatementTypeBadge } from "../chunks/B7a2gijo.js";
//#region src/routes/(app)/accounts/[id]/+page.svelte
var root = from_html(`<div class="animate-pulse space-y-6"><div class="h-10 w-2/3 bg-muted rounded-lg"></div> <div class="h-44 bg-muted rounded-2xl"></div> <div class="h-32 bg-muted rounded-2xl"></div></div>`);
var root_1 = from_html(`<!> <span>New Receipt</span>`, 1);
var root_2 = from_html(`<!> <span> </span>`, 1);
var root_3 = from_html(`<!> <!> <!>`, 1);
var root_4 = from_html(`<!> Export CSV`, 1);
var root_5 = from_html(`<!> Export PDF`, 1);
var root_6 = from_html(`<div class="flex gap-2"><!> <!></div>`);
var root_7 = from_html(`<!> Reset Filters`, 1);
var root_8 = from_html(`<span> </span>`);
var root_9 = from_html(`<div class="flex flex-wrap items-center justify-between text-xs pt-2 border-t border-border/40 text-muted-foreground"><div>Showing <strong> </strong> <!></div> <div class="flex gap-4 font-mono text-[11px]"><span class="text-emerald-600 font-semibold">Total Receipts: <!></span> <span class="text-red-600 font-semibold">Total Outflows: <!></span> <span class="font-bold text-foreground">Net Change: <!></span></div></div>`);
var root_10 = from_html(`<div class="space-y-3"><div class="h-10 bg-muted rounded-xl animate-pulse"></div> <div class="h-24 bg-muted rounded-xl animate-pulse"></div></div>`);
var root_11 = from_html(`<div class="text-center p-8 bg-card border border-border rounded-2xl text-xs text-muted-foreground space-y-2"><p class="font-medium">No transactions found matching the selected filter criteria.</p> <!></div>`);
var root_12 = from_html(`<span class="text-muted-foreground/35">—</span>`);
var root_13 = from_html(`<span class="text-[9px] bg-muted px-1.5 py-0.2 rounded ml-1 uppercase"> </span>`);
var root_14 = from_html(`<span class="font-mono text-muted-foreground"> </span> <!>`, 1);
var root_15 = from_html(`<span class="text-muted-foreground/60">—</span>`);
var root_16 = from_html(`<tr class="hover:bg-muted/10 transition-colors"><td class="p-4 font-mono font-medium text-muted-foreground"> </td><td class="p-4 text-muted-foreground"> </td><td class="p-4 font-medium text-foreground"><!></td><td class="p-4 text-center"><span> </span></td><td class="p-4 text-right font-semibold text-emerald-600"><!></td><td class="p-4 text-right font-semibold text-red-600"><!></td><td class="p-4 text-right font-mono font-semibold text-foreground"><!></td><td class="p-4"><!></td></tr>`);
var root_17 = from_html(`<div class="bg-card border border-border rounded-2xl overflow-hidden shadow-xs"><div class="overflow-x-auto"><table class="w-full text-left border-collapse text-xs"><thead><tr class="bg-muted/30 border-b border-border text-muted-foreground font-semibold"><th class="p-4 w-16">ID</th><th class="p-4 w-28">Date</th><th class="p-4">Description</th><th class="p-4 w-24 text-center">Type</th><th class="p-4 w-28 text-right">Debit</th><th class="p-4 w-28 text-right">Credit</th><th class="p-4 w-28 text-right">Balance</th><th class="p-4 w-32">Source Ref</th></tr></thead><tbody class="divide-y divide-border/60"></tbody></table></div></div>`);
var root_18 = from_html(`<div class="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-card border border-border p-6 rounded-3xl shadow-xs"><div class="space-y-2"><div class="flex items-center gap-2"><span class="text-lg font-bold text-foreground"> </span> <span> </span></div> <div class="flex flex-wrap gap-2 text-xs text-muted-foreground"><span class="capitalize"> </span> <span>•</span> <span class="capitalize"> </span> <span>•</span> <span>Created on <!></span></div></div> <div class="flex flex-wrap gap-2"><!></div></div> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><div class="bg-card border border-border rounded-2xl p-5 shadow-xs"><span class="text-xs font-bold text-muted-foreground uppercase tracking-wider block mb-1">Opening/Book Balance</span> <span class="text-xl font-bold text-foreground"><!></span></div> <div class="bg-card border border-border rounded-2xl p-5 shadow-xs bg-primary/5"><span class="text-xs font-bold text-primary uppercase tracking-wider block mb-1">Authoritative Running Balance</span> <span class="text-2xl font-bold text-foreground"><!></span></div></div> <div class="space-y-4"><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-border/60 pb-3"><h2 class="text-sm font-bold text-foreground uppercase tracking-wider flex items-center gap-1.5"><!> <span>Cash Account Statement</span></h2> <!></div> <div class="bg-card border border-border p-4 rounded-2xl space-y-3 shadow-xs"><div class="flex flex-wrap items-center justify-between gap-2 border-b border-border/40 pb-3"><div class="flex flex-wrap items-center gap-1.5 text-xs"><span class="text-xs font-medium text-muted-foreground mr-1 flex items-center gap-1"><!> Filter Range:</span> <button type="button">All Time</button> <button type="button">Today</button> <button type="button">This Month</button> <button type="button">Last 30 Days</button> <button type="button">This Year</button></div> <!></div> <div class="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 text-xs"><div class="relative flex-1"><!> <!></div> <div class="flex items-center gap-2"><div class="flex items-center gap-1.5"><span class="text-muted-foreground font-medium text-[11px]">From:</span> <!></div> <span class="text-muted-foreground font-semibold">to</span> <div class="flex items-center gap-1.5"><span class="text-muted-foreground font-medium text-[11px]">To:</span> <!></div> <!></div></div> <!></div> <!></div>`, 1);
var root_19 = from_html(`<div class="p-3 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-xs font-semibold leading-relaxed"> </div>`);
var root_20 = from_html(`<!> <span>Submitting...</span>`, 1);
var root_21 = from_html(`<span>Correct Balance</span>`);
var root_22 = from_html(`<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs select-none p-4" role="dialog" aria-modal="true" aria-labelledby="corr-title" aria-describedby="corr-desc"><div class="w-full max-w-[480px] bg-card border border-border rounded-3xl p-6 shadow-xl flex flex-col gap-4 animate-scaleUp"><div class="flex items-start gap-4"><div class="p-3 bg-amber-100 dark:bg-amber-950/20 text-amber-600 rounded-2xl shrink-0"><!></div> <div class="flex-1 min-w-0"><h2 id="corr-title" class="text-sm font-bold text-foreground leading-tight">Apply Balance Correction</h2> <p id="corr-desc" class="text-xs text-muted-foreground mt-2 leading-relaxed">This forces a direct adjustments write on the ledger account. Use this tool
						only to match external reconciliation audits.</p></div></div> <div class="space-y-3 text-xs"><div><label for="adj-amt" class="block font-semibold text-muted-foreground mb-1.5">Adjustment Amount (BHD)</label> <input id="adj-amt" type="number" step="0.001" placeholder="e.g. -50.000 or +120.000" class="w-full p-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-foreground placeholder-muted-foreground/60 font-semibold"/> <p class="text-[9px] text-muted-foreground/80 mt-1">Use negative values to debit, positive values to credit.</p></div> <div><label for="adj-reason" class="block font-semibold text-muted-foreground mb-1.5">Audit Reason</label> <textarea id="adj-reason" rows="3" placeholder="Describe the reason for this correction posting..." class="w-full p-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-foreground placeholder-muted-foreground/60 resize-none leading-relaxed"></textarea></div></div> <!> <div class="flex items-center justify-end gap-2 mt-2"><!> <!></div></div></div>`);
var root_23 = from_html(`<div class="space-y-6"><button class="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground cursor-pointer transition-colors"><!> <span>Back to Accounts</span></button> <!></div> <!> <!>`, 1);
function _page($$anchor, $$props) {
	push($$props, true);
	const $page = () => store_get(page, "$page", $$stores);
	const [$$stores, $$cleanup] = setup_stores();
	const accountId = parseInt($page().params.id ?? "", 10);
	let account = state(null);
	let transactions = state(proxy([]));
	let loadingAccount = state(true);
	let loadingReport = state(false);
	let errorMsg = state(null);
	let correlationId = state("");
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
		const currentAccount = get(account);
		if (!currentAccount) return [];
		let bal = currentAccount.balance;
		const mapped = get(transactions).map((t) => {
			const isDebit = t.destinationAccountId === currentAccount.id;
			const debit = isDebit ? t.amount : 0;
			const credit = !isDebit ? t.amount : 0;
			bal += debit - credit;
			const txType = resolveStatementTransactionType(t, false, currentAccount.id);
			return {
				t,
				debit,
				credit,
				bal,
				txType
			};
		});
		const filteredIds = new Set(get(filteredTransactions).map((x) => x.id));
		return mapped.filter((row) => filteredIds.has(row.t.id));
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
	let correctionOpen = state(false);
	let correctionAmount = state("");
	let correctionReason = state("");
	let correctionSubmitting = state(false);
	let correctionError = state(null);
	let conflictDialogOpen = state(false);
	const correctionIdempotency = createIdempotentOperation();
	let abortController = null;
	async function loadAccountDetail() {
		set(loadingAccount, true);
		set(errorMsg, null);
		set(correlationId, "");
		if (isNaN(accountId) || accountId <= 0) {
			set(errorMsg, "Invalid account identifier.");
			set(loadingAccount, false);
			return;
		}
		try {
			const match = (await getAccounts()).find((a) => a.id === accountId);
			if (match) {
				set(account, match, true);
				await loadAccountTransactions();
			} else set(errorMsg, `Account #${accountId} was not found.`);
		} catch (err) {
			set(errorMsg, err.message || "Failed to fetch account details.", true);
			set(correlationId, err.correlationId || "", true);
		} finally {
			set(loadingAccount, false);
		}
	}
	async function loadAccountTransactions() {
		if (!get(account)) return;
		set(loadingReport, true);
		try {
			if (abortController) abortController.abort();
			abortController = new AbortController();
			const res = await getTransactions({
				accountId: get(account).id,
				pageSize: 1e3
			}, abortController.signal);
			set(transactions, res.filter((t) => t.status.toLowerCase() === "approved").sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()), true);
		} catch (err) {
			if (err.name === "AbortError") return;
			addToast(err.message || "Failed to load cash transaction history.", "error");
		} finally {
			set(loadingReport, false);
		}
	}
	async function handleToggleStatus() {
		if (!get(account)) return;
		if (!hasRole("master_accountant")) {
			addToast("Only a Master Accountant can toggle account status.", "error");
			return;
		}
		try {
			await toggleAccountStatus(get(account).id);
			addToast(`Account status updated.`, "success");
			loadAccountDetail();
		} catch (err) {
			addToast(err.message || "Failed to toggle account status.", "error");
		}
	}
	async function submitCorrection() {
		if (!get(account)) return;
		if (!get(correctionAmount) || isNaN(Number(get(correctionAmount)))) {
			set(correctionError, "Adjustment Amount must be a valid number.");
			return;
		}
		if (!get(correctionReason).trim()) {
			set(correctionError, "Reason is required.");
			return;
		}
		set(correctionSubmitting, true);
		set(correctionError, null);
		try {
			await correctAccountBalance(get(account).id, {
				adjustmentAmount: Number(get(correctionAmount)),
				reason: get(correctionReason)
			}, correctionIdempotency.key);
			addToast("Balance correction posted successfully.", "success");
			correctionIdempotency.retire();
			set(correctionOpen, false);
			set(correctionAmount, "");
			set(correctionReason, "");
			loadAccountDetail();
		} catch (err) {
			if (err.status === 409) set(conflictDialogOpen, true);
			else set(correctionError, err.message || "Failed to post balance correction.", true);
		} finally {
			set(correctionSubmitting, false);
		}
	}
	function handleFormEdit() {
		correctionIdempotency.regenerate();
		set(correctionError, null);
	}
	function handleExportCSV() {
		const currentAccount = get(account);
		const rowsData = get(statementRows);
		if (!currentAccount || rowsData.length === 0) return;
		const headers = [
			"ID",
			"Date",
			"Description",
			"Type",
			"Debit (BHD)",
			"Credit (BHD)",
			"Balance (BHD)",
			"Reference"
		];
		const rows = rowsData.map((row) => [
			row.t.documentNumber,
			row.t.createdAt ? formatDateOnly(row.t.createdAt) : "",
			row.t.displayNarrative || row.t.displayDescription || row.t.description || "",
			row.txType,
			row.debit > 0 ? row.debit : "",
			row.credit > 0 ? row.credit : "",
			row.bal,
			row.t.referenceId ? `${row.t.referenceType ?? ""} #${row.t.referenceId}` : ""
		]);
		exportToCSV(`statement_${currentAccount.name.replace(/[^a-z0-9]/gi, "_").toLowerCase()}${get(startDate) || get(endDate) ? `_${get(startDate) || "start"}_to_${get(endDate) || "end"}` : ""}_${getBahrainDateString()}.csv`, headers, rows);
		addToast("CSV statement exported successfully.", "success");
	}
	function handleExportPDF() {
		const currentAccount = get(account);
		if (!currentAccount) return;
		previewDocument("report", "account-statement", {
			accountId: currentAccount.id,
			startDate: get(startDate),
			endDate: get(endDate)
		});
		addToast("Generating PDF statement...", "info");
	}
	onMount(() => {
		loadAccountDetail();
	});
	onDestroy(() => {
		if (abortController) abortController.abort();
	});
	var fragment = root_23();
	head("1iiprg4", ($$anchor) => {
		effect(() => {
			$document.title = "Cash Account Detail — Accounts Portal";
		});
	});
	var div = first_child(fragment);
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
			retryAction: loadAccountDetail
		});
	};
	var consequent_14 = ($$anchor) => {
		var fragment_2 = root_18();
		var div_2 = first_child(fragment_2);
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
		var text_3 = child(span_3);
		reset(span_3);
		var span_4 = sibling(span_3, 4);
		DateDisplay(sibling(child(span_4)), { get value() {
			return get(account).createdAt;
		} });
		reset(span_4);
		reset(div_5);
		reset(div_3);
		var div_6 = sibling(div_3, 2);
		var node_3 = child(div_6);
		var consequent_2 = ($$anchor) => {
			var fragment_3 = root_3();
			var node_4 = first_child(fragment_3);
			Button(node_4, {
				variant: "outline",
				class: "h-8.5 rounded-xl font-semibold text-xs cursor-pointer flex items-center gap-1",
				onclick: () => goto(`/sales/receipts/new?accountId=${get(account)?.id}`),
				title: "Record receipt deposited to this cash drawer",
				children: ($$anchor, $$slotProps) => {
					var fragment_4 = root_1();
					Receipt(first_child(fragment_4), { class: "h-3.5 w-3.5" });
					next(2);
					append($$anchor, fragment_4);
				},
				$$slots: { default: true }
			});
			var node_6 = sibling(node_4, 2);
			{
				let $0 = user_derived(() => ["h-8.5 rounded-xl font-semibold text-xs cursor-pointer flex items-center gap-1", get(account).isActive ? "text-red-600 hover:text-red-700 hover:bg-red-50" : "text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50"].join(" "));
				Button(node_6, {
					variant: "outline",
					get class() {
						return get($0);
					},
					onclick: handleToggleStatus,
					children: ($$anchor, $$slotProps) => {
						var fragment_5 = root_2();
						var node_7 = first_child(fragment_5);
						Power(node_7, { class: "h-3.5 w-3.5" });
						var span_5 = sibling(node_7, 2);
						var text_4 = child(span_5, true);
						reset(span_5);
						template_effect(() => set_text(text_4, get(account).isActive ? "Deactivate" : "Activate"));
						append($$anchor, fragment_5);
					},
					$$slots: { default: true }
				});
			}
			Button(sibling(node_6, 2), {
				variant: "outline",
				class: "h-8.5 rounded-xl font-semibold text-xs cursor-pointer",
				onclick: () => goto(`/accounts?edit=${get(account)?.id}`),
				children: ($$anchor, $$slotProps) => {
					next();
					append($$anchor, text("Edit Account"));
				},
				$$slots: { default: true }
			});
			append($$anchor, fragment_3);
		};
		var d_1 = user_derived(() => hasRole("master_accountant"));
		if_block(node_3, ($$render) => {
			if (get(d_1)) $$render(consequent_2);
		});
		reset(div_6);
		reset(div_2);
		var div_7 = sibling(div_2, 2);
		var div_8 = child(div_7);
		var span_6 = sibling(child(div_8), 2);
		MoneyDisplay(child(span_6), { get amount() {
			return get(account).balance;
		} });
		reset(span_6);
		reset(div_8);
		var div_9 = sibling(div_8, 2);
		var span_7 = sibling(child(div_9), 2);
		MoneyDisplay(child(span_7), { get amount() {
			return get(account).currentBalance;
		} });
		reset(span_7);
		reset(div_9);
		reset(div_7);
		var div_10 = sibling(div_7, 2);
		var div_11 = child(div_10);
		var h2 = child(div_11);
		Chart_column(child(h2), { class: "h-4.5 w-4.5 text-muted-foreground" });
		next(2);
		reset(h2);
		var node_12 = sibling(h2, 2);
		var consequent_3 = ($$anchor) => {
			var div_12 = root_6();
			var node_13 = child(div_12);
			Button(node_13, {
				variant: "outline",
				class: "h-7.5 text-[11px] font-semibold rounded-lg flex items-center gap-1 cursor-pointer",
				onclick: handleExportCSV,
				children: ($$anchor, $$slotProps) => {
					var fragment_6 = root_4();
					File_spreadsheet(first_child(fragment_6), { class: "h-3.5 w-3.5" });
					next();
					append($$anchor, fragment_6);
				},
				$$slots: { default: true }
			});
			Button(sibling(node_13, 2), {
				variant: "outline",
				class: "h-7.5 text-[11px] font-semibold rounded-lg flex items-center gap-1 cursor-pointer",
				onclick: handleExportPDF,
				children: ($$anchor, $$slotProps) => {
					var fragment_7 = root_5();
					File_down(first_child(fragment_7), { class: "h-3.5 w-3.5" });
					next();
					append($$anchor, fragment_7);
				},
				$$slots: { default: true }
			});
			reset(div_12);
			append($$anchor, div_12);
		};
		if_block(node_12, ($$render) => {
			if (get(statementRows).length > 0) $$render(consequent_3);
		});
		reset(div_11);
		var div_13 = sibling(div_11, 2);
		var div_14 = child(div_13);
		var div_15 = child(div_14);
		var span_8 = child(div_15);
		Calendar(child(span_8), { class: "h-3.5 w-3.5" });
		next();
		reset(span_8);
		var button_1 = sibling(span_8, 2);
		var button_2 = sibling(button_1, 2);
		var button_3 = sibling(button_2, 2);
		var button_4 = sibling(button_3, 2);
		var button_5 = sibling(button_4, 2);
		reset(div_15);
		var node_18 = sibling(div_15, 2);
		var consequent_4 = ($$anchor) => {
			Button($$anchor, {
				variant: "ghost",
				size: "sm",
				onclick: resetFilters,
				class: "h-7 text-xs rounded-lg text-muted-foreground hover:text-foreground cursor-pointer",
				children: ($$anchor, $$slotProps) => {
					var fragment_9 = root_7();
					X(first_child(fragment_9), { class: "h-3.5 w-3.5 mr-1" });
					next();
					append($$anchor, fragment_9);
				},
				$$slots: { default: true }
			});
		};
		if_block(node_18, ($$render) => {
			if (get(startDate) || get(endDate) || get(searchQuery)) $$render(consequent_4);
		});
		reset(div_14);
		var div_16 = sibling(div_14, 2);
		var div_17 = child(div_16);
		var node_20 = child(div_17);
		Search(node_20, { class: "absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" });
		Input(sibling(node_20, 2), {
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
		Button(sibling(div_20, 2), {
			variant: "outline",
			class: "p-2 h-9 rounded-xl cursor-pointer",
			onclick: loadAccountTransactions,
			get disabled() {
				return get(loadingReport);
			},
			title: "Refresh statement",
			children: ($$anchor, $$slotProps) => {
				{
					let $0 = user_derived(() => ["h-3.5 w-3.5", get(loadingReport) ? "animate-spin" : ""].join(" "));
					Refresh_cw($$anchor, { get class() {
						return get($0);
					} });
				}
			},
			$$slots: { default: true }
		});
		reset(div_18);
		reset(div_16);
		var node_25 = sibling(div_16, 2);
		var consequent_6 = ($$anchor) => {
			var div_21 = root_9();
			var div_22 = child(div_21);
			var strong = sibling(child(div_22));
			var text_6 = child(strong, true);
			reset(strong);
			var text_7 = sibling(strong);
			var node_26 = sibling(text_7);
			var consequent_5 = ($$anchor) => {
				var span_9 = root_8();
				var text_8 = child(span_9);
				reset(span_9);
				template_effect(() => set_text(text_8, `(${(get(startDate) || "Start") ?? ""} → ${(get(endDate) || "Present") ?? ""})`));
				append($$anchor, span_9);
			};
			if_block(node_26, ($$render) => {
				if (get(startDate) || get(endDate)) $$render(consequent_5);
			});
			reset(div_22);
			var div_23 = sibling(div_22, 2);
			var span_10 = child(div_23);
			MoneyDisplay(sibling(child(span_10)), { get amount() {
				return get(filterSummary).totalDebit;
			} });
			reset(span_10);
			var span_11 = sibling(span_10, 2);
			MoneyDisplay(sibling(child(span_11)), { get amount() {
				return get(filterSummary).totalCredit;
			} });
			reset(span_11);
			var span_12 = sibling(span_11, 2);
			MoneyDisplay(sibling(child(span_12)), { get amount() {
				return get(filterSummary).netChange;
			} });
			reset(span_12);
			reset(div_23);
			reset(div_21);
			template_effect(() => {
				set_text(text_6, get(filterSummary).count);
				set_text(text_7, ` of ${get(transactions).length ?? ""} entries `);
			});
			append($$anchor, div_21);
		};
		if_block(node_25, ($$render) => {
			if (get(startDate) || get(endDate) || get(searchQuery)) $$render(consequent_6);
		});
		reset(div_13);
		var node_30 = sibling(div_13, 2);
		var consequent_7 = ($$anchor) => {
			append($$anchor, root_10());
		};
		var consequent_9 = ($$anchor) => {
			var div_25 = root_11();
			var node_31 = sibling(child(div_25), 2);
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
			if_block(node_31, ($$render) => {
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
				const badge = user_derived(() => getStatementTypeBadge(get(row).txType));
				var tr = root_16();
				var td = child(tr);
				var text_10 = child(td, true);
				reset(td);
				var td_1 = sibling(td);
				var text_11 = child(td_1, true);
				reset(td_1);
				var td_2 = sibling(td_1);
				var node_32 = child(td_2);
				{
					let $0 = user_derived(() => get(row).t.displayNarrative || get(row).t.displayDescription || get(row).t.description);
					FormattedNarrative(node_32, { get text() {
						return get($0);
					} });
				}
				reset(td_2);
				var td_3 = sibling(td_2);
				var span_13 = child(td_3);
				var text_12 = child(span_13, true);
				reset(span_13);
				reset(td_3);
				var td_4 = sibling(td_3);
				var node_33 = child(td_4);
				var consequent_10 = ($$anchor) => {
					MoneyDisplay($$anchor, { get amount() {
						return get(row).debit;
					} });
				};
				var alternate = ($$anchor) => {
					append($$anchor, root_12());
				};
				if_block(node_33, ($$render) => {
					if (get(row).debit > 0) $$render(consequent_10);
					else $$render(alternate, -1);
				});
				reset(td_4);
				var td_5 = sibling(td_4);
				var node_34 = child(td_5);
				var consequent_11 = ($$anchor) => {
					MoneyDisplay($$anchor, { get amount() {
						return get(row).credit;
					} });
				};
				var alternate_1 = ($$anchor) => {
					append($$anchor, root_12());
				};
				if_block(node_34, ($$render) => {
					if (get(row).credit > 0) $$render(consequent_11);
					else $$render(alternate_1, -1);
				});
				reset(td_5);
				var td_6 = sibling(td_5);
				MoneyDisplay(child(td_6), { get amount() {
					return get(row).bal;
				} });
				reset(td_6);
				var td_7 = sibling(td_6);
				var node_36 = child(td_7);
				var consequent_13 = ($$anchor) => {
					var fragment_14 = root_14();
					var span_16 = first_child(fragment_14);
					var text_13 = child(span_16, true);
					reset(span_16);
					var node_37 = sibling(span_16, 2);
					var consequent_12 = ($$anchor) => {
						var span_17 = root_13();
						var text_14 = child(span_17, true);
						reset(span_17);
						template_effect(() => set_text(text_14, get(row).t.referenceType));
						append($$anchor, span_17);
					};
					if_block(node_37, ($$render) => {
						if (get(row).t.referenceType) $$render(consequent_12);
					});
					template_effect(() => set_text(text_13, get(row).t.referenceId));
					append($$anchor, fragment_14);
				};
				var alternate_2 = ($$anchor) => {
					append($$anchor, root_15());
				};
				if_block(node_36, ($$render) => {
					if (get(row).t.referenceId) $$render(consequent_13);
					else $$render(alternate_2, -1);
				});
				reset(td_7);
				reset(tr);
				template_effect(($0) => {
					set_text(text_10, get(row).t.documentNumber);
					set_text(text_11, $0);
					set_class(span_13, 1, `inline-block px-2 py-0.5 text-[10px] font-bold rounded-md border ${get(badge).badgeClass ?? ""}`);
					set_text(text_12, get(badge).label);
				}, [() => new Date(get(row).t.createdAt).toLocaleDateString()]);
				append($$anchor, tr);
			});
			reset(tbody);
			reset(table);
			reset(div_27);
			reset(div_26);
			append($$anchor, div_26);
		};
		if_block(node_30, ($$render) => {
			if (get(loadingReport)) $$render(consequent_7);
			else if (get(statementRows).length === 0) $$render(consequent_9, 1);
			else $$render(alternate_3, -1);
		});
		reset(div_10);
		template_effect(($0) => {
			set_text(text$1, get(account).name);
			set_class(span_1, 1, $0);
			set_text(text_1, get(account).isActive ? "Active" : "Inactive");
			set_text(text_2, `Type: ${(ACCOUNT_TYPE_LABELS[get(account).type] || get(account).type) ?? ""}`);
			set_text(text_3, `Ledger: ${(LEDGER_TYPE_LABELS[get(account).ledgerType] || get(account).ledgerType) ?? ""}`);
			set_class(button_1, 1, `px-2.5 py-1 rounded-lg border text-[11px] font-medium transition-colors cursor-pointer ${get(activePreset) === "all" && !get(startDate) && !get(endDate) ? "bg-primary text-primary-foreground border-primary" : "border-border bg-background hover:bg-muted text-muted-foreground"}`);
			set_class(button_2, 1, `px-2.5 py-1 rounded-lg border text-[11px] font-medium transition-colors cursor-pointer ${get(activePreset) === "today" ? "bg-primary text-primary-foreground border-primary" : "border-border bg-background hover:bg-muted text-muted-foreground"}`);
			set_class(button_3, 1, `px-2.5 py-1 rounded-lg border text-[11px] font-medium transition-colors cursor-pointer ${get(activePreset) === "this_month" ? "bg-primary text-primary-foreground border-primary" : "border-border bg-background hover:bg-muted text-muted-foreground"}`);
			set_class(button_4, 1, `px-2.5 py-1 rounded-lg border text-[11px] font-medium transition-colors cursor-pointer ${get(activePreset) === "last_30" ? "bg-primary text-primary-foreground border-primary" : "border-border bg-background hover:bg-muted text-muted-foreground"}`);
			set_class(button_5, 1, `px-2.5 py-1 rounded-lg border text-[11px] font-medium transition-colors cursor-pointer ${get(activePreset) === "this_year" ? "bg-primary text-primary-foreground border-primary" : "border-border bg-background hover:bg-muted text-muted-foreground"}`);
		}, [() => clsx(["text-[10px] font-semibold px-2 py-0.5 rounded-full border", get(account).isActive ? "text-emerald-700 bg-emerald-50 border-emerald-200" : "text-muted-foreground bg-muted border-border"].join(" "))]);
		delegated("click", button_1, () => applyPreset("all"));
		delegated("click", button_2, () => applyPreset("today"));
		delegated("click", button_3, () => applyPreset("this_month"));
		delegated("click", button_4, () => applyPreset("last_30"));
		delegated("click", button_5, () => applyPreset("this_year"));
		append($$anchor, fragment_2);
	};
	if_block(node_1, ($$render) => {
		if (get(loadingAccount)) $$render(consequent);
		else if (get(errorMsg)) $$render(consequent_1, 1);
		else if (get(account)) $$render(consequent_14, 2);
	});
	reset(div);
	var node_38 = sibling(div, 2);
	var consequent_17 = ($$anchor) => {
		var div_28 = root_22();
		var div_29 = child(div_28);
		var div_30 = child(div_29);
		var div_31 = child(div_30);
		Shield_alert(child(div_31), { class: "h-6 w-6" });
		reset(div_31);
		next(2);
		reset(div_30);
		var div_32 = sibling(div_30, 2);
		var div_33 = child(div_32);
		var input = sibling(child(div_33), 2);
		remove_input_defaults(input);
		next(2);
		reset(div_33);
		var div_34 = sibling(div_33, 2);
		var textarea = sibling(child(div_34), 2);
		remove_textarea_child(textarea);
		reset(div_34);
		reset(div_32);
		var node_40 = sibling(div_32, 2);
		var consequent_15 = ($$anchor) => {
			var div_35 = root_19();
			var text_15 = child(div_35, true);
			reset(div_35);
			template_effect(() => set_text(text_15, get(correctionError)));
			append($$anchor, div_35);
		};
		if_block(node_40, ($$render) => {
			if (get(correctionError)) $$render(consequent_15);
		});
		var div_36 = sibling(node_40, 2);
		var node_41 = child(div_36);
		Button(node_41, {
			variant: "outline",
			onclick: () => {
				set(correctionOpen, false);
			},
			get disabled() {
				return get(correctionSubmitting);
			},
			class: "rounded-xl font-semibold text-xs py-5 px-4 cursor-pointer",
			children: ($$anchor, $$slotProps) => {
				next();
				append($$anchor, text("Cancel"));
			},
			$$slots: { default: true }
		});
		Button(sibling(node_41, 2), {
			onclick: submitCorrection,
			get disabled() {
				return get(correctionSubmitting);
			},
			class: "rounded-xl font-semibold text-xs py-5 px-4 cursor-pointer",
			children: ($$anchor, $$slotProps) => {
				var fragment_15 = comment();
				var node_43 = first_child(fragment_15);
				var consequent_16 = ($$anchor) => {
					var fragment_16 = root_20();
					Loader_circle(first_child(fragment_16), { class: "h-3.5 w-3.5 animate-spin mr-1.5" });
					next(2);
					append($$anchor, fragment_16);
				};
				var alternate_4 = ($$anchor) => {
					append($$anchor, root_21());
				};
				if_block(node_43, ($$render) => {
					if (get(correctionSubmitting)) $$render(consequent_16);
					else $$render(alternate_4, -1);
				});
				append($$anchor, fragment_15);
			},
			$$slots: { default: true }
		});
		reset(div_36);
		reset(div_29);
		reset(div_28);
		template_effect(() => {
			input.disabled = get(correctionSubmitting);
			textarea.disabled = get(correctionSubmitting);
		});
		delegated("input", input, handleFormEdit);
		bind_value(input, () => get(correctionAmount), ($$value) => set(correctionAmount, $$value));
		delegated("input", textarea, handleFormEdit);
		bind_value(textarea, () => get(correctionReason), ($$value) => set(correctionReason, $$value));
		append($$anchor, div_28);
	};
	if_block(node_38, ($$render) => {
		if (get(correctionOpen)) $$render(consequent_17);
	});
	ConflictDialog(sibling(node_38, 2), {
		onReload: loadAccountDetail,
		get open() {
			return get(conflictDialogOpen);
		},
		set open($$value) {
			set(conflictDialogOpen, $$value, true);
		}
	});
	delegated("click", button, () => goto("/accounts"));
	append($$anchor, fragment);
	pop();
	$$cleanup();
}
delegate(["click", "input"]);
//#endregion
export { _page as component };

import { B as append, Bt as reset, Ct as user_derived, D as head, Et as store_get, G as text, H as from_html, I as if_block, K as delegate, N as each, Nt as pop, Pt as push, Q as get, R as set_text, T as clsx, Tt as setup_stores, V as comment, bt as state, dt as $document, g as remove_input_defaults, gt as proxy, ht as sibling, it as effect, m as bind_value, mt as first_child, n as onDestroy, ot as template_effect, pt as child, q as delegated, r as onMount, ut as remove_textarea_child, vt as set, w as set_class, zt as next } from "../chunks/dXkmWTgM.js";
import { t as goto } from "../chunks/CV2055QW.js";
import "../chunks/DhaYE-8x.js";
import { i as hasRole } from "../chunks/DPUMXEle.js";
import { t as addToast } from "../chunks/CbPRQHfn.js";
import { t as Arrow_left } from "../chunks/Bn7x0kyr.js";
import { t as Chart_column } from "../chunks/7SHXTl2V.js";
import { n as File_down, t as File_spreadsheet } from "../chunks/eZBXeOpB2.js";
import { t as Landmark } from "../chunks/D_q7zQKx2.js";
import { t as Loader_circle } from "../chunks/BMOA0yrB2.js";
import { t as Plus } from "../chunks/BObidJ7B2.js";
import { t as Power } from "../chunks/ZWE_o2ua2.js";
import { t as Refresh_cw } from "../chunks/DpTJy0Wb2.js";
import { t as ErrorState } from "../chunks/B7ZVWvAI2.js";
import { t as Shield_alert } from "../chunks/BqY57apW.js";
import { t as page } from "../chunks/CojiF1uV.js";
import { t as Button } from "../chunks/BhXsq3bC.js";
import "../chunks/Dd6ISaTp.js";
import { t as FinancialTableSkeleton } from "../chunks/BifxP-5W.js";
import { t as EmptyState } from "../chunks/DXyN7dIZ.js";
import { t as MoneyDisplay } from "../chunks/CIVSRuaR.js";
import { t as DateDisplay } from "../chunks/DeM3dT31.js";
import "../chunks/B-cipy3Z.js";
import { t as exportToCSV } from "../chunks/C74Z4VDd2.js";
import { t as previewDocument } from "../chunks/DzJwfhQE2.js";
import { i as toggleAccountStatus, r as getAccounts, t as correctAccountBalance } from "../chunks/KGDzrGMr2.js";
import { r as LEDGER_TYPE_LABELS, t as ACCOUNT_TYPE_LABELS } from "../chunks/DNQc_ysr2.js";
import { i as getTransactions } from "../chunks/CJ3QkraV2.js";
import { t as createIdempotentOperation } from "../chunks/Bt9NpIc72.js";
import { t as FormattedNarrative } from "../chunks/CHiWmlVe2.js";
import { t as ConflictDialog } from "../chunks/yrdkecGH2.js";
//#region src/routes/(app)/accounts/[id]/+page.svelte
var root = from_html(`<div class="animate-pulse space-y-6"><div class="h-10 w-2/3 bg-muted rounded-lg"></div> <div class="h-44 bg-muted rounded-2xl"></div> <div class="h-32 bg-muted rounded-2xl"></div></div>`);
var root_1 = from_html(`<!> <span>Correct Balance</span>`, 1);
var root_2 = from_html(`<!> <span> </span>`, 1);
var root_3 = from_html(`<!> <!> <!>`, 1);
var root_4 = from_html(`<!> Export CSV`, 1);
var root_5 = from_html(`<!> Export PDF`, 1);
var root_6 = from_html(`<!> <!>`, 1);
var root_7 = from_html(`<span class="text-muted-foreground/35">—</span>`);
var root_8 = from_html(`<span class="text-[9px] bg-muted px-1.5 py-0.2 rounded ml-1 uppercase"> </span>`);
var root_9 = from_html(`<span class="font-mono text-muted-foreground"> </span> <!>`, 1);
var root_10 = from_html(`<span class="text-muted-foreground/60">—</span>`);
var root_11 = from_html(`<tr class="hover:bg-muted/10 transition-colors"><td class="p-4 font-mono font-medium text-muted-foreground"> </td><td class="p-4 text-muted-foreground"> </td><td class="p-4 font-medium text-foreground"><!></td><td class="p-4 text-right font-semibold text-emerald-600"><!></td><td class="p-4 text-right font-semibold text-red-600"><!></td><td class="p-4"><!></td></tr>`);
var root_12 = from_html(`<div class="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-muted/15 p-4 rounded-2xl border border-border/50 text-xs"><div><span class="text-muted-foreground block">Opening Bal</span> <span class="font-bold"><!></span></div> <div><span class="text-primary block">Total Debits</span> <span class="font-bold text-emerald-600"><!></span></div> <div><span class="text-primary block">Total Credits</span> <span class="font-bold text-red-600"><!></span></div> <div><span class="text-muted-foreground block">Ending Bal</span> <span class="font-bold"><!></span></div></div> <div class="bg-card border border-border rounded-2xl overflow-hidden shadow-xs"><div class="overflow-x-auto"><table class="w-full text-left border-collapse text-xs"><thead><tr class="bg-muted/30 border-b border-border text-muted-foreground font-semibold"><th class="p-4 w-16">ID</th><th class="p-4 w-28">Date</th><th class="p-4">Description</th><th class="p-4 w-28 text-right">Debit</th><th class="p-4 w-28 text-right">Credit</th><th class="p-4 w-32">Source Ref</th></tr></thead><tbody class="divide-y divide-border/60"></tbody></table></div></div>`, 1);
var root_13 = from_html(`<div class="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-card border border-border p-6 rounded-3xl shadow-xs"><div class="space-y-2"><div class="flex items-center gap-2"><span class="text-lg font-bold text-foreground"> </span> <span> </span></div> <div class="flex flex-wrap gap-2 text-xs text-muted-foreground"><span class="capitalize"> </span> <span>•</span> <span class="capitalize"> </span> <span>•</span> <span>Created on <!></span></div></div> <div class="flex flex-wrap gap-2"><!></div></div> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><div class="bg-card border border-border rounded-2xl p-5 shadow-xs"><span class="text-xs font-bold text-muted-foreground uppercase tracking-wider block mb-1">Opening/Book Balance</span> <span class="text-xl font-bold text-foreground"><!></span></div> <div class="bg-card border border-border rounded-2xl p-5 shadow-xs bg-primary/5"><span class="text-xs font-bold text-primary uppercase tracking-wider block mb-1">Authoritative Running Balance</span> <span class="text-2xl font-bold text-foreground"><!></span></div></div> <div class="space-y-4"><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-border/60 pb-3"><h2 class="text-sm font-bold text-foreground uppercase tracking-wider flex items-center gap-1.5"><!> <span>Cash Account Statement</span></h2> <div class="flex flex-wrap items-center gap-2 text-xs"><!> <input type="date" class="p-1.5 rounded-lg border border-border bg-background focus:outline-none"/> <span class="text-muted-foreground">to</span> <input type="date" class="p-1.5 rounded-lg border border-border bg-background focus:outline-none"/> <!></div></div> <!></div>`, 1);
var root_14 = from_html(`<div class="p-3 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-xs font-semibold leading-relaxed"> </div>`);
var root_15 = from_html(`<!> <span>Submitting...</span>`, 1);
var root_16 = from_html(`<span>Correct Balance</span>`);
var root_17 = from_html(`<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs select-none p-4" role="dialog" aria-modal="true" aria-labelledby="corr-title" aria-describedby="corr-desc"><div class="w-full max-w-[480px] bg-card border border-border rounded-3xl p-6 shadow-xl flex flex-col gap-4 animate-scaleUp"><div class="flex items-start gap-4"><div class="p-3 bg-amber-100 dark:bg-amber-950/20 text-amber-600 rounded-2xl shrink-0"><!></div> <div class="flex-1 min-w-0"><h2 id="corr-title" class="text-sm font-bold text-foreground leading-tight">Apply Balance Correction</h2> <p id="corr-desc" class="text-xs text-muted-foreground mt-2 leading-relaxed">This forces a direct adjustments write on the ledger account. Use this tool
						only to match external reconciliation audits.</p></div></div> <div class="space-y-3 text-xs"><div><label for="adj-amt" class="block font-semibold text-muted-foreground mb-1.5">Adjustment Amount (BHD)</label> <input id="adj-amt" type="number" step="0.001" placeholder="e.g. -50.000 or +120.000" class="w-full p-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-foreground placeholder-muted-foreground/60 font-semibold"/> <p class="text-[9px] text-muted-foreground/80 mt-1">Use negative values to debit, positive values to credit.</p></div> <div><label for="adj-reason" class="block font-semibold text-muted-foreground mb-1.5">Audit Reason</label> <textarea id="adj-reason" rows="3" placeholder="Describe the reason for this correction posting..." class="w-full p-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-foreground placeholder-muted-foreground/60 resize-none leading-relaxed"></textarea></div></div> <!> <div class="flex items-center justify-end gap-2 mt-2"><!> <!></div></div></div>`);
var root_18 = from_html(`<div class="space-y-6"><button class="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground cursor-pointer transition-colors"><!> <span>Back to Accounts</span></button> <!></div> <!> <!>`, 1);
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
	const now = /* @__PURE__ */ new Date();
	const firstDay = new Date(now.getFullYear(), now.getMonth(), 1).toISOString().split("T")[0];
	const today = now.toISOString().split("T")[0];
	let startDate = state(proxy(firstDay));
	let endDate = state(proxy(today));
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
			"Debit (BHD)",
			"Credit (BHD)",
			"Reference"
		];
		const rows = rowsData.map((row) => [
			row.t.documentNumber,
			row.t.createdAt ? row.t.createdAt.split("T")[0] : "",
			row.t.displayDescription || row.t.description || "",
			row.debit > 0 ? row.debit : "",
			row.credit > 0 ? row.credit : "",
			row.t.referenceId ? `${row.t.referenceType ?? ""} #${row.t.referenceId}` : ""
		]);
		exportToCSV(`statement_${currentAccount.name.replace(/[^a-z0-9]/gi, "_").toLowerCase()}_${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.csv`, headers, rows);
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
	var fragment = root_18();
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
	var consequent_10 = ($$anchor) => {
		var fragment_2 = root_13();
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
				onclick: () => {
					set(correctionOpen, true);
					handleFormEdit();
				},
				children: ($$anchor, $$slotProps) => {
					var fragment_4 = root_1();
					Plus(first_child(fragment_4), { class: "h-3.5 w-3.5" });
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
		var d = user_derived(() => hasRole("master_accountant"));
		if_block(node_3, ($$render) => {
			if (get(d)) $$render(consequent_2);
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
		var div_12 = sibling(h2, 2);
		var node_12 = child(div_12);
		var consequent_3 = ($$anchor) => {
			var fragment_6 = root_6();
			var node_13 = first_child(fragment_6);
			Button(node_13, {
				variant: "outline",
				class: "h-7.5 text-[11px] font-semibold rounded-lg flex items-center gap-1 cursor-pointer mr-1",
				onclick: handleExportCSV,
				children: ($$anchor, $$slotProps) => {
					var fragment_7 = root_4();
					File_spreadsheet(first_child(fragment_7), { class: "h-3.5 w-3.5" });
					next();
					append($$anchor, fragment_7);
				},
				$$slots: { default: true }
			});
			Button(sibling(node_13, 2), {
				variant: "outline",
				class: "h-7.5 text-[11px] font-semibold rounded-lg flex items-center gap-1 cursor-pointer mr-3",
				onclick: handleExportPDF,
				children: ($$anchor, $$slotProps) => {
					var fragment_8 = root_5();
					File_down(first_child(fragment_8), { class: "h-3.5 w-3.5" });
					next();
					append($$anchor, fragment_8);
				},
				$$slots: { default: true }
			});
			append($$anchor, fragment_6);
		};
		if_block(node_12, ($$render) => {
			if (get(transactions).length > 0) $$render(consequent_3);
		});
		var input = sibling(node_12, 2);
		remove_input_defaults(input);
		var input_1 = sibling(input, 4);
		remove_input_defaults(input_1);
		Button(sibling(input_1, 2), {
			variant: "outline",
			class: "p-2 h-7.5 rounded-lg cursor-pointer",
			onclick: loadAccountTransactions,
			get disabled() {
				return get(loadingReport);
			},
			children: ($$anchor, $$slotProps) => {
				{
					let $0 = user_derived(() => ["h-3 w-3", get(loadingReport) ? "animate-spin" : ""].join(" "));
					Refresh_cw($$anchor, { get class() {
						return get($0);
					} });
				}
			},
			$$slots: { default: true }
		});
		reset(div_12);
		reset(div_11);
		var node_18 = sibling(div_11, 2);
		var consequent_4 = ($$anchor) => {
			FinancialTableSkeleton($$anchor, {
				rows: 4,
				columns: 7
			});
		};
		var consequent_5 = ($$anchor) => {
			EmptyState($$anchor, {
				title: "No transactions found",
				description: "There are no entries recorded in the selected date range.",
				get icon() {
					return Landmark;
				}
			});
		};
		var alternate_3 = ($$anchor) => {
			const summary = user_derived(() => (() => {
				const rows = get(statementRows);
				const totalDebits = rows.reduce((sum, row) => sum + row.debit, 0);
				const totalCredits = rows.reduce((sum, row) => sum + row.credit, 0);
				const currentAccount = get(account);
				return {
					opBal: currentAccount ? currentAccount.balance : 0,
					totalDebits,
					totalCredits,
					edBal: currentAccount ? currentAccount.currentBalance : 0
				};
			})());
			var fragment_12 = root_12();
			var div_13 = first_child(fragment_12);
			var div_14 = child(div_13);
			var span_8 = sibling(child(div_14), 2);
			MoneyDisplay(child(span_8), { get amount() {
				return get(summary).opBal;
			} });
			reset(span_8);
			reset(div_14);
			var div_15 = sibling(div_14, 2);
			var span_9 = sibling(child(div_15), 2);
			MoneyDisplay(child(span_9), { get amount() {
				return get(summary).totalDebits;
			} });
			reset(span_9);
			reset(div_15);
			var div_16 = sibling(div_15, 2);
			var span_10 = sibling(child(div_16), 2);
			MoneyDisplay(child(span_10), { get amount() {
				return get(summary).totalCredits;
			} });
			reset(span_10);
			reset(div_16);
			var div_17 = sibling(div_16, 2);
			var span_11 = sibling(child(div_17), 2);
			MoneyDisplay(child(span_11), { get amount() {
				return get(summary).edBal;
			} });
			reset(span_11);
			reset(div_17);
			reset(div_13);
			var div_18 = sibling(div_13, 2);
			var div_19 = child(div_18);
			var table = child(div_19);
			var tbody = sibling(child(table));
			each(tbody, 21, () => get(statementRows), (row) => row.t.id, ($$anchor, row) => {
				var tr = root_11();
				var td = child(tr);
				var text_6 = child(td, true);
				reset(td);
				var td_1 = sibling(td);
				var text_7 = child(td_1, true);
				reset(td_1);
				var td_2 = sibling(td_1);
				var node_23 = child(td_2);
				{
					let $0 = user_derived(() => get(row).t.displayNarrative || get(row).t.displayDescription || get(row).t.description);
					FormattedNarrative(node_23, { get text() {
						return get($0);
					} });
				}
				reset(td_2);
				var td_3 = sibling(td_2);
				var node_24 = child(td_3);
				var consequent_6 = ($$anchor) => {
					MoneyDisplay($$anchor, { get amount() {
						return get(row).debit;
					} });
				};
				var alternate = ($$anchor) => {
					append($$anchor, root_7());
				};
				if_block(node_24, ($$render) => {
					if (get(row).debit > 0) $$render(consequent_6);
					else $$render(alternate, -1);
				});
				reset(td_3);
				var td_4 = sibling(td_3);
				var node_25 = child(td_4);
				var consequent_7 = ($$anchor) => {
					MoneyDisplay($$anchor, { get amount() {
						return get(row).credit;
					} });
				};
				var alternate_1 = ($$anchor) => {
					append($$anchor, root_7());
				};
				if_block(node_25, ($$render) => {
					if (get(row).credit > 0) $$render(consequent_7);
					else $$render(alternate_1, -1);
				});
				reset(td_4);
				var td_5 = sibling(td_4);
				var node_26 = child(td_5);
				var consequent_9 = ($$anchor) => {
					var fragment_15 = root_9();
					var span_14 = first_child(fragment_15);
					var text_8 = child(span_14, true);
					reset(span_14);
					var node_27 = sibling(span_14, 2);
					var consequent_8 = ($$anchor) => {
						var span_15 = root_8();
						var text_9 = child(span_15, true);
						reset(span_15);
						template_effect(() => set_text(text_9, get(row).t.referenceType));
						append($$anchor, span_15);
					};
					if_block(node_27, ($$render) => {
						if (get(row).t.referenceType) $$render(consequent_8);
					});
					template_effect(() => set_text(text_8, get(row).t.referenceId));
					append($$anchor, fragment_15);
				};
				var alternate_2 = ($$anchor) => {
					append($$anchor, root_10());
				};
				if_block(node_26, ($$render) => {
					if (get(row).t.referenceId) $$render(consequent_9);
					else $$render(alternate_2, -1);
				});
				reset(td_5);
				reset(tr);
				template_effect(($0) => {
					set_text(text_6, get(row).t.documentNumber);
					set_text(text_7, $0);
				}, [() => new Date(get(row).t.createdAt).toLocaleDateString()]);
				append($$anchor, tr);
			});
			reset(tbody);
			reset(table);
			reset(div_19);
			reset(div_18);
			append($$anchor, fragment_12);
		};
		if_block(node_18, ($$render) => {
			if (get(loadingReport)) $$render(consequent_4);
			else if (get(statementRows).length === 0) $$render(consequent_5, 1);
			else $$render(alternate_3, -1);
		});
		reset(div_10);
		template_effect(($0) => {
			set_text(text$1, get(account).name);
			set_class(span_1, 1, $0);
			set_text(text_1, get(account).isActive ? "Active" : "Inactive");
			set_text(text_2, `Type: ${(ACCOUNT_TYPE_LABELS[get(account).type] || get(account).type) ?? ""}`);
			set_text(text_3, `Ledger: ${(LEDGER_TYPE_LABELS[get(account).ledgerType] || get(account).ledgerType) ?? ""}`);
			input.disabled = get(loadingReport);
			input_1.disabled = get(loadingReport);
		}, [() => clsx(["text-[10px] font-semibold px-2 py-0.5 rounded-full border", get(account).isActive ? "text-emerald-700 bg-emerald-50 border-emerald-200" : "text-muted-foreground bg-muted border-border"].join(" "))]);
		bind_value(input, () => get(startDate), ($$value) => set(startDate, $$value));
		bind_value(input_1, () => get(endDate), ($$value) => set(endDate, $$value));
		append($$anchor, fragment_2);
	};
	if_block(node_1, ($$render) => {
		if (get(loadingAccount)) $$render(consequent);
		else if (get(errorMsg)) $$render(consequent_1, 1);
		else if (get(account)) $$render(consequent_10, 2);
	});
	reset(div);
	var node_28 = sibling(div, 2);
	var consequent_13 = ($$anchor) => {
		var div_20 = root_17();
		var div_21 = child(div_20);
		var div_22 = child(div_21);
		var div_23 = child(div_22);
		Shield_alert(child(div_23), { class: "h-6 w-6" });
		reset(div_23);
		next(2);
		reset(div_22);
		var div_24 = sibling(div_22, 2);
		var div_25 = child(div_24);
		var input_2 = sibling(child(div_25), 2);
		remove_input_defaults(input_2);
		next(2);
		reset(div_25);
		var div_26 = sibling(div_25, 2);
		var textarea = sibling(child(div_26), 2);
		remove_textarea_child(textarea);
		reset(div_26);
		reset(div_24);
		var node_30 = sibling(div_24, 2);
		var consequent_11 = ($$anchor) => {
			var div_27 = root_14();
			var text_10 = child(div_27, true);
			reset(div_27);
			template_effect(() => set_text(text_10, get(correctionError)));
			append($$anchor, div_27);
		};
		if_block(node_30, ($$render) => {
			if (get(correctionError)) $$render(consequent_11);
		});
		var div_28 = sibling(node_30, 2);
		var node_31 = child(div_28);
		Button(node_31, {
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
		Button(sibling(node_31, 2), {
			onclick: submitCorrection,
			get disabled() {
				return get(correctionSubmitting);
			},
			class: "rounded-xl font-semibold text-xs py-5 px-4 cursor-pointer",
			children: ($$anchor, $$slotProps) => {
				var fragment_16 = comment();
				var node_33 = first_child(fragment_16);
				var consequent_12 = ($$anchor) => {
					var fragment_17 = root_15();
					Loader_circle(first_child(fragment_17), { class: "h-3.5 w-3.5 animate-spin mr-1.5" });
					next(2);
					append($$anchor, fragment_17);
				};
				var alternate_4 = ($$anchor) => {
					append($$anchor, root_16());
				};
				if_block(node_33, ($$render) => {
					if (get(correctionSubmitting)) $$render(consequent_12);
					else $$render(alternate_4, -1);
				});
				append($$anchor, fragment_16);
			},
			$$slots: { default: true }
		});
		reset(div_28);
		reset(div_21);
		reset(div_20);
		template_effect(() => {
			input_2.disabled = get(correctionSubmitting);
			textarea.disabled = get(correctionSubmitting);
		});
		delegated("input", input_2, handleFormEdit);
		bind_value(input_2, () => get(correctionAmount), ($$value) => set(correctionAmount, $$value));
		delegated("input", textarea, handleFormEdit);
		bind_value(textarea, () => get(correctionReason), ($$value) => set(correctionReason, $$value));
		append($$anchor, div_20);
	};
	if_block(node_28, ($$render) => {
		if (get(correctionOpen)) $$render(consequent_13);
	});
	ConflictDialog(sibling(node_28, 2), {
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

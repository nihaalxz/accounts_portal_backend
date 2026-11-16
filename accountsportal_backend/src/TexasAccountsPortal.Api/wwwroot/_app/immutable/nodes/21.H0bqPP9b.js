import { B as append, Bt as reset, Ct as user_derived, D as head, Et as store_get, H as from_html, I as if_block, K as delegate, N as each, Nt as pop, Pt as push, Q as get, R as set_text, T as clsx, Tt as setup_stores, bt as state, dt as $document, gt as proxy, ht as sibling, it as effect, mt as first_child, ot as template_effect, pt as child, q as delegated, r as onMount, vt as set, w as set_class, zt as next } from "../chunks/dXkmWTgM.js";
import { t as goto } from "../chunks/LJHcy8Ek.js";
import "../chunks/DhaYE-8x.js";
import { i as hasRole } from "../chunks/nG0doVna.js";
import { t as addToast } from "../chunks/CbPRQHfn.js";
import { t as Arrow_left } from "../chunks/Bn7x0kyr.js";
import { n as File_down, t as File_spreadsheet } from "../chunks/eZBXeOpB2.js";
import { t as Landmark } from "../chunks/D_q7zQKx2.js";
import { t as Pencil } from "../chunks/C3Ohi_CL2.js";
import { t as Power } from "../chunks/ZWE_o2ua2.js";
import { t as ErrorState } from "../chunks/B7ZVWvAI2.js";
import { t as page } from "../chunks/DK8DnxYB.js";
import { t as Button } from "../chunks/BhXsq3bC.js";
import "../chunks/BqGAFqYA.js";
import { t as MoneyDisplay } from "../chunks/CIVSRuaR.js";
import { t as DateDisplay } from "../chunks/CJpXG-QD.js";
import "../chunks/XZxFvCgs.js";
import { t as exportToCSV } from "../chunks/C74Z4VDd2.js";
import { t as previewDocument } from "../chunks/BOd6DlBq2.js";
import { n as getBanks, r as toggleBankStatus } from "../chunks/CDDZ1K8n2.js";
import { i as getTransactions } from "../chunks/5J_U-3i52.js";
import { t as FormattedNarrative } from "../chunks/CHiWmlVe2.js";
//#region src/routes/(app)/banks/[id]/+page.svelte
var root = from_html(`<div class="animate-pulse space-y-6"><div class="h-10 w-2/3 bg-muted rounded-lg"></div> <div class="h-44 bg-muted rounded-2xl"></div> <div class="h-32 bg-muted rounded-2xl"></div></div>`);
var root_1 = from_html(`<!> <span>Edit Account</span>`, 1);
var root_2 = from_html(`<!> <span> </span>`, 1);
var root_3 = from_html(`<!> <!>`, 1);
var root_4 = from_html(`<!> Export CSV`, 1);
var root_5 = from_html(`<!> Export PDF`, 1);
var root_6 = from_html(`<div class="flex gap-2"><!> <!></div>`);
var root_7 = from_html(`<div class="space-y-3"><div class="h-10 bg-muted rounded-xl animate-pulse"></div> <div class="h-24 bg-muted rounded-xl animate-pulse"></div></div>`);
var root_8 = from_html(`<div class="text-center p-8 bg-card border border-border rounded-2xl text-xs text-muted-foreground">No transactions recorded for this bank account yet.</div>`);
var root_9 = from_html(`<span class="text-muted-foreground/35">—</span>`);
var root_10 = from_html(`<span class="text-[9px] bg-muted px-1.5 py-0.2 rounded ml-1 uppercase"> </span>`);
var root_11 = from_html(`<span class="font-mono text-muted-foreground"> </span> <!>`, 1);
var root_12 = from_html(`<span class="text-muted-foreground/60">—</span>`);
var root_13 = from_html(`<tr class="hover:bg-muted/10 transition-colors"><td class="p-4 font-mono font-medium text-muted-foreground"> </td><td class="p-4 text-muted-foreground"> </td><td class="p-4 font-medium text-foreground"><!></td><td class="p-4 text-right font-semibold text-emerald-600"><!></td><td class="p-4 text-right font-semibold text-red-600"><!></td><td class="p-4 text-right font-semibold"><!></td><td class="p-4"><!></td></tr>`);
var root_14 = from_html(`<div class="bg-card border border-border rounded-2xl overflow-hidden shadow-xs"><div class="overflow-x-auto"><table class="w-full text-left border-collapse text-xs"><thead><tr class="bg-muted/30 border-b border-border text-muted-foreground font-semibold"><th class="p-4 w-16">ID</th><th class="p-4 w-28">Date</th><th class="p-4">Description</th><th class="p-4 w-28 text-right">Debit</th><th class="p-4 w-28 text-right">Credit</th><th class="p-4 w-28 text-right">Running Balance</th><th class="p-4 w-32">Source Ref</th></tr></thead><tbody class="divide-y divide-border/60"></tbody></table></div></div>`);
var root_15 = from_html(`<div class="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-card border border-border p-6 rounded-3xl shadow-xs"><div class="space-y-2"><div class="flex items-center gap-2"><span class="text-lg font-bold text-foreground"> </span> <span> </span></div> <div class="flex flex-wrap gap-2 text-xs text-muted-foreground"><span class="font-mono tracking-wider"> </span> <span>•</span> <span>Registered on <!></span></div></div> <div class="flex flex-wrap gap-2"><!></div></div> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><div class="bg-card border border-border rounded-2xl p-5 shadow-xs"><span class="text-xs font-bold text-muted-foreground uppercase tracking-wider block mb-1">Opening Balance</span> <span class="text-xl font-bold text-foreground"><!></span></div> <div class="bg-card border border-border rounded-2xl p-5 shadow-xs bg-primary/5"><span class="text-xs font-bold text-primary uppercase tracking-wider block mb-1">Treasury Running Balance</span> <span class="text-2xl font-bold text-foreground"><!></span></div></div> <div class="space-y-4"><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-border/60 pb-3"><h2 class="text-sm font-bold text-foreground uppercase tracking-wider flex items-center gap-1.5"><!> <span>Bank Statement</span></h2> <!></div> <!></div>`, 1);
var root_16 = from_html(`<div class="space-y-6"><button class="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground cursor-pointer transition-colors"><!> <span>Back to Banks</span></button> <!></div>`);
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
		if (!currentBank || get(transactions).length === 0) return;
		const headers = [
			"ID",
			"Date",
			"Description",
			"Debit (BHD)",
			"Credit (BHD)",
			"Running Balance (BHD)",
			"Reference"
		];
		let bal = currentBank.balance;
		const rows = get(transactions).map((t) => {
			const isDebit = t.destinationBankId === currentBank.id;
			const debit = isDebit ? t.amount : 0;
			const credit = !isDebit ? t.amount : 0;
			bal += debit - credit;
			return [
				t.documentNumber,
				t.createdAt ? t.createdAt.split("T")[0] : "",
				t.displayDescription || t.description || "",
				debit > 0 ? debit : "",
				credit > 0 ? credit : "",
				bal,
				t.referenceId ? `${t.referenceType ?? ""} #${t.referenceId}` : ""
			];
		});
		exportToCSV(`statement_${currentBank.bankName.replace(/[^a-z0-9]/gi, "_").toLowerCase()}_${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.csv`, headers, rows);
		addToast("CSV statement exported successfully.", "success");
	}
	function handleExportPDF() {
		const currentBank = get(bank);
		if (!currentBank) return;
		previewDocument("report", "bank-statement", { bankId: currentBank.id });
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
	var div = root_16();
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
	var consequent_10 = ($$anchor) => {
		var fragment_1 = root_15();
		var div_2 = first_child(fragment_1);
		var div_3 = child(div_2);
		var div_4 = child(div_3);
		var span = child(div_4);
		var text = child(span, true);
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
		var d = user_derived(() => hasRole("master_accountant"));
		if_block(node_3, ($$render) => {
			if (get(d)) $$render(consequent_2);
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
			if (get(transactions).length > 0) $$render(consequent_3);
		});
		reset(div_11);
		var node_16 = sibling(div_11, 2);
		var consequent_4 = ($$anchor) => {
			append($$anchor, root_7());
		};
		var consequent_5 = ($$anchor) => {
			append($$anchor, root_8());
		};
		var alternate_3 = ($$anchor) => {
			const rows = user_derived(() => (() => {
				let bal = get(bank).balance;
				return get(transactions).map((t) => {
					const isDebit = t.destinationBankId === get(bank).id;
					const debit = isDebit ? t.amount : 0;
					const credit = !isDebit ? t.amount : 0;
					bal += debit - credit;
					return {
						t,
						debit,
						credit,
						bal
					};
				}).reverse();
			})());
			var div_15 = root_14();
			var div_16 = child(div_15);
			var table = child(div_16);
			var tbody = sibling(child(table));
			each(tbody, 21, () => get(rows), (row) => row.t.id, ($$anchor, row) => {
				var tr = root_13();
				var td = child(tr);
				var text_4 = child(td, true);
				reset(td);
				var td_1 = sibling(td);
				var text_5 = child(td_1, true);
				reset(td_1);
				var td_2 = sibling(td_1);
				var node_17 = child(td_2);
				{
					let $0 = user_derived(() => get(row).t.displayNarrative || get(row).t.displayDescription || get(row).t.description);
					FormattedNarrative(node_17, { get text() {
						return get($0);
					} });
				}
				reset(td_2);
				var td_3 = sibling(td_2);
				var node_18 = child(td_3);
				var consequent_6 = ($$anchor) => {
					MoneyDisplay($$anchor, { get amount() {
						return get(row).debit;
					} });
				};
				var alternate = ($$anchor) => {
					append($$anchor, root_9());
				};
				if_block(node_18, ($$render) => {
					if (get(row).debit > 0) $$render(consequent_6);
					else $$render(alternate, -1);
				});
				reset(td_3);
				var td_4 = sibling(td_3);
				var node_19 = child(td_4);
				var consequent_7 = ($$anchor) => {
					MoneyDisplay($$anchor, { get amount() {
						return get(row).credit;
					} });
				};
				var alternate_1 = ($$anchor) => {
					append($$anchor, root_9());
				};
				if_block(node_19, ($$render) => {
					if (get(row).credit > 0) $$render(consequent_7);
					else $$render(alternate_1, -1);
				});
				reset(td_4);
				var td_5 = sibling(td_4);
				MoneyDisplay(child(td_5), { get amount() {
					return get(row).bal;
				} });
				reset(td_5);
				var td_6 = sibling(td_5);
				var node_21 = child(td_6);
				var consequent_9 = ($$anchor) => {
					var fragment_9 = root_11();
					var span_9 = first_child(fragment_9);
					var text_6 = child(span_9, true);
					reset(span_9);
					var node_22 = sibling(span_9, 2);
					var consequent_8 = ($$anchor) => {
						var span_10 = root_10();
						var text_7 = child(span_10, true);
						reset(span_10);
						template_effect(() => set_text(text_7, get(row).t.referenceType));
						append($$anchor, span_10);
					};
					if_block(node_22, ($$render) => {
						if (get(row).t.referenceType) $$render(consequent_8);
					});
					template_effect(() => set_text(text_6, get(row).t.referenceId));
					append($$anchor, fragment_9);
				};
				var alternate_2 = ($$anchor) => {
					append($$anchor, root_12());
				};
				if_block(node_21, ($$render) => {
					if (get(row).t.referenceId) $$render(consequent_9);
					else $$render(alternate_2, -1);
				});
				reset(td_6);
				reset(tr);
				template_effect(($0) => {
					set_text(text_4, get(row).t.documentNumber);
					set_text(text_5, $0);
				}, [() => new Date(get(row).t.createdAt).toLocaleDateString()]);
				append($$anchor, tr);
			});
			reset(tbody);
			reset(table);
			reset(div_16);
			reset(div_15);
			append($$anchor, div_15);
		};
		if_block(node_16, ($$render) => {
			if (get(loadingTransactions)) $$render(consequent_4);
			else if (get(transactions).length === 0) $$render(consequent_5, 1);
			else $$render(alternate_3, -1);
		});
		reset(div_10);
		template_effect(($0) => {
			set_text(text, get(bank).bankName);
			set_class(span_1, 1, $0);
			set_text(text_1, get(bank).isActive ? "Active" : "Inactive");
			set_text(text_2, `Account: ${get(bank).accountNumber ?? ""}`);
		}, [() => clsx(["text-[10px] font-semibold px-2 py-0.5 rounded-full border", get(bank).isActive ? "text-emerald-700 bg-emerald-50 border-emerald-200" : "text-muted-foreground bg-muted border-border"].join(" "))]);
		append($$anchor, fragment_1);
	};
	if_block(node_1, ($$render) => {
		if (get(loading)) $$render(consequent);
		else if (get(errorMsg)) $$render(consequent_1, 1);
		else if (get(bank)) $$render(consequent_10, 2);
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

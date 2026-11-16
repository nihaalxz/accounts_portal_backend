import { B as append, Bt as reset, Ct as user_derived, D as head, Et as store_get, G as text, H as from_html, I as if_block, J as event, K as delegate, N as each, Nt as pop, P as index, Pt as push, Q as get, R as set_text, T as clsx, Tt as setup_stores, V as comment, _ as set_attribute, b as bind_select_value, bt as state, dt as $document, g as remove_input_defaults, gt as proxy, ht as sibling, it as effect, m as bind_value, mt as first_child, ot as template_effect, pt as child, q as delegated, r as onMount, vt as set, w as set_class, zt as next } from "../chunks/dXkmWTgM.js";
import { t as goto } from "../chunks/Bax_BF1i.js";
import "../chunks/DhaYE-8x.js";
import { t as apiFetch } from "../chunks/D11sewMm.js";
import { i as hasRole, r as currentUser } from "../chunks/D1u9fstu.js";
import { t as addToast } from "../chunks/CbPRQHfn.js";
import { t as Check } from "../chunks/blG6JRe7.js";
import { t as Clock } from "../chunks/CZu1L_RP2.js";
import { t as Landmark } from "../chunks/D_q7zQKx2.js";
import { t as Loader_circle } from "../chunks/BMOA0yrB2.js";
import { t as Pencil } from "../chunks/C3Ohi_CL.js";
import { t as Plus } from "../chunks/BObidJ7B.js";
import { t as Power } from "../chunks/ZWE_o2ua.js";
import { t as Refresh_cw } from "../chunks/DpTJy0Wb.js";
import { t as Triangle_alert } from "../chunks/BKenZzGW.js";
import { t as X } from "../chunks/wXHc9RNY.js";
import { t as page } from "../chunks/DpJB7W1P.js";
import { t as Button } from "../chunks/BhXsq3bC.js";
import { t as ErrorState } from "../chunks/CRMNR9wu.js";
import "../chunks/DBJSp2fi2.js";
import { t as FinancialTableSkeleton } from "../chunks/BifxP-5W2.js";
import { t as EmptyState } from "../chunks/DXyN7dIZ2.js";
import { t as MoneyDisplay } from "../chunks/CIVSRuaR2.js";
import { a as updateAccount, i as toggleAccountStatus, n as createAccount, r as getAccounts } from "../chunks/BGtKlsU_2.js";
import { n as getBanks } from "../chunks/BlDcCUEd2.js";
import { n as ACCOUNT_TYPE_VALUES, t as ACCOUNT_TYPE_LABELS } from "../chunks/DNQc_ysr2.js";
import { t as FinancialCardSkeleton } from "../chunks/B8oQRwBb2.js";
//#region src/routes/(app)/accounts/+page.svelte
var root = from_html(`<!> Cancel`, 1);
var root_1 = from_html(`<!> `, 1);
var root_2 = from_html(`<!> Reload`, 1);
var root_3 = from_html(`<div class="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-2xl px-5 py-4 text-xs text-amber-800 animate-scaleUp"><!> <div><span class="font-bold"> </span> <span class="text-amber-700 ml-1">These will be registered once approved.</span></div></div>`);
var root_4 = from_html(`<p class="text-[11px] text-amber-600 flex items-center gap-1.5 mb-5"><!> Your request will be stored in the database and needs master accountant approval before the account is registered.</p>`);
var root_5 = from_html(`<div class="mb-5"></div>`);
var root_6 = from_html(`<p class="text-[10px] text-red-600 mt-1"> </p>`);
var root_7 = from_html(`<option> </option>`);
var root_8 = from_html(`<div class="space-y-1.5"><label for="acc-type" class="block font-semibold text-foreground">Account Type</label> <select id="acc-type" class="flex h-9 w-full rounded-xl border border-input bg-background px-3 py-1 text-xs shadow-xs transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring text-foreground capitalize"></select></div>`);
var root_9 = from_html(`<div class="flex items-center gap-2 p-2.5 border border-border rounded-xl bg-muted/20"><!> <span class="text-[10px] text-muted-foreground">Loading bank references...</span></div>`);
var root_10 = from_html(`<select id="acc-bank-link" class="flex h-9 w-full rounded-xl border border-input bg-background px-3 py-1 text-xs shadow-xs transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring text-foreground"><option>Select Bank Profile Link</option><!></select>`);
var root_11 = from_html(`<div class="space-y-1.5"><label for="acc-bank-link" class="block font-semibold text-foreground">Link to Bank Account</label> <!></div>`);
var root_12 = from_html(`<div class="space-y-1.5"><label for="acc-bal" class="block font-semibold text-foreground">Opening/Book Balance (BHD) <span class="text-red-500">*</span></label> <input id="acc-bal" type="number" step="0.001" placeholder="0.000" class="flex h-9 w-full rounded-xl border border-input bg-background px-3 py-1 text-xs shadow-xs transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring text-foreground placeholder-muted-foreground/60 font-semibold"/> <!></div>`);
var root_13 = from_html(`<!> <!>`, 1);
var root_14 = from_html(`<div class="bg-card border border-border rounded-2xl p-6 shadow-xs animate-scaleUp"><h2 class="text-sm font-bold text-foreground mb-1"><!></h2> <!> <form><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs"><div class="space-y-1.5 col-span-1 sm:col-span-2 lg:col-span-3"><label for="acc-name" class="block font-semibold text-foreground">Account Name <span class="text-red-500">*</span></label> <input id="acc-name" type="text" placeholder="e.g. Airport Vault Cash" class="flex h-9 w-full rounded-xl border border-input bg-background px-3 py-1 text-xs shadow-xs transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring text-foreground placeholder-muted-foreground/60 font-semibold"/> <!></div> <!> <!> <!></div> <div class="flex gap-2.5 mt-5 pt-4 border-t border-border/50"><!> <!></div></form></div>`);
var root_15 = from_html(`<span class="inline-flex items-center justify-center h-4 min-w-4 px-1 rounded-full bg-amber-500 text-white text-[9px] font-bold"> </span>`);
var root_16 = from_html(`<div class="flex gap-1 bg-muted/40 rounded-xl p-1 w-fit border border-border/50"><button> </button> <button><!> Pending Approvals <!></button></div>`);
var root_17 = from_html(`<div class="flex items-center justify-center h-32 text-muted-foreground text-xs gap-2"><span class="animate-spin h-4 w-4 border-2 border-primary border-t-transparent rounded-full"></span> Loading pending requests...</div>`);
var root_18 = from_html(`<button class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 text-xs font-semibold cursor-pointer disabled:opacity-50"><!> Approve</button> <button class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 text-xs font-semibold cursor-pointer disabled:opacity-50"><!> Reject</button>`, 1);
var root_19 = from_html(`<span class="text-[10px] text-amber-600 flex items-center gap-1 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-xl font-semibold"><!> Awaiting Approval</span>`);
var root_20 = from_html(`<div class="bg-card border border-amber-200 dark:border-amber-800 rounded-2xl p-4 space-y-3"><div class="flex items-start justify-between gap-4"><div class="space-y-1"><div class="flex items-center gap-2"><span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 text-[10px] font-semibold border border-amber-200 dark:border-amber-700"><!> Pending</span> <span class="text-xs text-muted-foreground"> </span></div> <p class="text-sm font-bold text-foreground"> </p> <div class="flex items-center gap-3 flex-wrap"><span class="text-xs capitalize text-muted-foreground">Type: <span class="font-semibold text-foreground capitalize"> </span></span> <span class="text-xs capitalize text-muted-foreground">Ledger: <span class="font-semibold text-foreground capitalize"> </span></span> <span class="text-xs text-muted-foreground">Opening: <span class="font-semibold text-foreground"> </span></span></div> <p class="text-[11px] text-muted-foreground">Submitted by <span class="font-semibold"> </span> </p></div> <div class="flex gap-2 shrink-0"><!></div></div></div>`);
var root_21 = from_html(`<div class="space-y-3"></div>`);
var root_22 = from_html(`<div class="hidden md:block bg-card border border-border rounded-2xl overflow-hidden"><!></div> <div class="block md:hidden"><!></div>`, 1);
var root_23 = from_html(`<th class="p-4 w-20 text-center">Actions</th>`);
var root_24 = from_html(`<td class="p-4 text-center"><div class="flex items-center justify-center gap-1.5"><button class="p-1.5 hover:bg-muted text-muted-foreground hover:text-foreground rounded-lg transition-colors cursor-pointer" title="Edit Account"><!></button> <button><!></button></div></td>`);
var root_25 = from_html(`<tr class="hover:bg-muted/10 transition-colors cursor-pointer"><td class="p-4 font-mono font-medium text-muted-foreground"> </td><td class="p-4 font-semibold text-foreground"> </td><td class="p-4 capitalize"> </td><td class="p-4 text-right font-bold text-foreground"><!></td><td class="p-4"><span> </span></td><!></tr>`);
var root_26 = from_html(`<button class="p-1.5 hover:bg-muted text-muted-foreground hover:text-foreground rounded-lg transition-colors cursor-pointer"><!></button> <button><!></button>`, 1);
var root_27 = from_html(`<a class="block bg-card border border-border rounded-2xl p-4 space-y-3 hover:border-primary/40 active:bg-muted/5 transition-all text-left"><div class="flex items-center justify-between"><span class="font-bold text-foreground"> </span> <span class="text-xs text-muted-foreground capitalize"> </span></div> <div class="flex items-center justify-between text-xs pt-1 border-t border-border/40"><span class="text-muted-foreground">Current Balance:</span> <span class="font-bold text-foreground"><!></span></div> <div class="flex items-center justify-between pt-1"><span class="text-[10px] text-muted-foreground"> </span> <div class="flex items-center gap-2"><span> </span> <!></div></div></a>`);
var root_28 = from_html(`<div class="bg-card border border-border rounded-2xl overflow-x-auto shadow-xs max-w-full"><div class="overflow-x-auto"><table class="w-full min-w-[700px] text-left border-collapse text-xs"><thead><tr class="bg-muted/30 border-b border-border text-muted-foreground font-semibold text-[10px] uppercase tracking-wider"><th class="p-4 w-16">ID</th><th class="p-4">Account Name</th><th class="p-4 w-28">Type</th><th class="p-4 text-right">Current Balance</th><th class="p-4 w-24">Status</th><!></tr></thead><tbody class="divide-y divide-border/60"></tbody></table></div> <div class="px-4 py-3 border-t border-border/50 text-[10px] text-muted-foreground bg-muted/10">Showing <strong> </strong> of <strong> </strong> accounts</div></div> <div class="block md:hidden space-y-3"></div>`, 1);
var root_29 = from_html(`<div class="space-y-6"><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"><div class="flex flex-col gap-1"><h1 class="text-xl font-bold text-foreground flex items-center gap-2"><!> Cash & Ledger Accounts</h1> <p class="text-xs text-muted-foreground">Manage internal cash points, vault balances, client credit mappings, and general ledger accounts.</p></div> <div class="flex flex-wrap gap-2"><!> <!></div></div> <!> <!> <!> <!></div>`);
function _page($$anchor, $$props) {
	push($$props, true);
	const $currentUser = () => store_get(currentUser, "$currentUser", $$stores);
	const $page = () => store_get(page, "$page", $$stores);
	const [$$stores, $$cleanup] = setup_stores();
	let accounts = state(proxy([]));
	let pending = state(proxy([]));
	let loading = state(true);
	let loadingPending = state(false);
	let errorMsg = state(null);
	let correlationId = state("");
	let activeTab = state("list");
	let approvingId = state(null);
	const filteredAccounts = user_derived(() => () => {
		return get(accounts);
	});
	async function loadAccounts() {
		set(loading, true);
		set(errorMsg, null);
		set(correlationId, "");
		try {
			const res = await getAccounts();
			set(accounts, res, true);
		} catch (err) {
			set(errorMsg, err.message || "Failed to load cash accounts.", true);
			set(correlationId, err.correlationId || "", true);
		} finally {
			set(loading, false);
		}
	}
	async function loadPending() {
		set(loadingPending, true);
		try {
			set(pending, await apiFetch("api/pending-approvals?entityType=account&status=pending") || [], true);
		} catch (err) {
			addToast(err.message || "Failed to load pending requests.", "error");
		} finally {
			set(loadingPending, false);
		}
	}
	async function handleToggleStatus(account, e) {
		e.stopPropagation();
		if (!hasRole("master_accountant")) {
			addToast("Only a Master Accountant can change account status.", "error");
			return;
		}
		try {
			await toggleAccountStatus(account.id);
			addToast(`Account "${account.name}" status toggled successfully.`, "success");
			loadAccounts();
		} catch (err) {
			addToast(err.message || "Failed to toggle account status.", "error");
		}
	}
	async function approveAccount(item) {
		set(approvingId, item.id, true);
		try {
			await apiFetch(`api/pending-approvals/${item.id}/approve`, { method: "POST" });
			addToast("Account approved and created.", "success");
			await Promise.all([loadAccounts(), loadPending()]);
		} catch (err) {
			addToast(err.message || "Approval failed.", "error");
		} finally {
			set(approvingId, null);
		}
	}
	async function rejectAccount(item) {
		set(approvingId, item.id, true);
		try {
			await apiFetch(`api/pending-approvals/${item.id}/reject`, { method: "POST" });
			addToast("Request rejected.", "success");
			await loadPending();
		} catch (err) {
			addToast(err.message || "Rejection failed.", "error");
		} finally {
			set(approvingId, null);
		}
	}
	function getParsedPayload(item) {
		try {
			return JSON.parse(item.payloadJson);
		} catch {
			return null;
		}
	}
	let showForm = state(false);
	let isEditing = state(false);
	let editingId = state(null);
	let isSaving = state(false);
	let accName = state("");
	let accType = state("cash");
	let ledgerType = state("asset");
	let openingBalance = state("");
	let bankId = state(null);
	let validationErrors = state(proxy({}));
	let banks = state(proxy([]));
	let loadingBanks = state(false);
	async function loadBanksList() {
		set(loadingBanks, true);
		try {
			const res = await getBanks();
			set(banks, res.filter((b) => b.isActive), true);
		} catch (err) {
			addToast("Failed to load bank account references.", "error");
		} finally {
			set(loadingBanks, false);
		}
	}
	function validate() {
		const errors = {};
		if (!get(accName).trim()) errors.name = "Account Name is required.";
		if (!get(isEditing) && (get(openingBalance) === "" || isNaN(Number(get(openingBalance))) || Number(get(openingBalance)) < 0)) errors.openingBalance = "Opening Balance must be a valid positive number.";
		set(validationErrors, errors, true);
		return Object.keys(errors).length === 0;
	}
	async function handleSubmit(e) {
		e.preventDefault();
		if (!validate()) return;
		set(isSaving, true);
		const isMaster = hasRole("master_accountant");
		try {
			if (get(isEditing) && get(editingId) !== null) {
				await updateAccount(get(editingId), {
					name: get(accName).trim(),
					type: get(accType),
					ledgerType: get(ledgerType),
					bankId: get(accType) === "bank" && get(bankId) ? Number(get(bankId)) : null
				});
				addToast(`Account changes saved successfully.`, "success");
				resetForm();
				await loadAccounts();
			} else if (isMaster) {
				await createAccount({
					name: get(accName).trim(),
					type: get(accType),
					ledgerType: get(ledgerType),
					openingBalance: Number(get(openingBalance)),
					bankId: get(accType) === "bank" && get(bankId) ? Number(get(bankId)) : null
				});
				addToast(`Account "${get(accName)}" created successfully.`, "success");
				resetForm();
				await loadAccounts();
			} else {
				const payload = {
					name: get(accName).trim(),
					type: get(accType),
					ledgerType: get(ledgerType),
					openingBalance: Number(get(openingBalance)),
					bankId: get(accType) === "bank" && get(bankId) ? Number(get(bankId)) : null
				};
				await apiFetch("api/pending-approvals", {
					method: "POST",
					body: JSON.stringify({
						entityType: "account",
						payloadJson: JSON.stringify(payload),
						submittedByName: $currentUser()?.name ?? "Accountant"
					})
				});
				addToast(`Account creation submitted for master accountant approval.`, "success");
				resetForm();
				await loadPending();
			}
		} catch (err) {
			addToast(err.message || "Failed to save ledger account.", "error");
		} finally {
			set(isSaving, false);
		}
	}
	function startEdit(a) {
		set(isEditing, true);
		set(editingId, a.id, true);
		set(showForm, true);
		set(accName, a.name, true);
		set(accType, a.type, true);
		set(ledgerType, a.ledgerType, true);
		set(bankId, a.bankId, true);
		set(openingBalance, "");
		set(validationErrors, {}, true);
	}
	function resetForm() {
		set(showForm, false);
		set(isEditing, false);
		set(editingId, null);
		set(accName, "");
		set(accType, "cash");
		set(ledgerType, "asset");
		set(bankId, null);
		set(openingBalance, "");
		set(validationErrors, {}, true);
	}
	onMount(async () => {
		await loadAccounts();
		await loadPending();
		await loadBanksList();
		const editIdStr = $page().url.searchParams.get("edit");
		if (editIdStr) {
			const editId = parseInt(editIdStr, 10);
			const match = get(accounts).find((a) => a.id === editId);
			if (match && hasRole("master_accountant")) startEdit(match);
		} else if ($page().url.searchParams.get("new") === "true") set(showForm, true);
	});
	var div = root_29();
	head("1wq8bm4", ($$anchor) => {
		effect(() => {
			$document.title = "Cash Accounts — Accounts Portal";
		});
	});
	var div_1 = child(div);
	var div_2 = child(div_1);
	var h1 = child(div_2);
	Landmark(child(h1), { class: "h-5 w-5 text-primary" });
	next();
	reset(h1);
	next(2);
	reset(div_2);
	var div_3 = sibling(div_2, 2);
	var node_1 = child(div_3);
	Button(node_1, {
		onclick: () => {
			set(showForm, !get(showForm));
			if (!get(showForm)) resetForm();
		},
		class: "h-8.5 rounded-xl cursor-pointer flex items-center gap-1.5 text-xs font-semibold",
		children: ($$anchor, $$slotProps) => {
			var fragment = comment();
			var node_2 = first_child(fragment);
			var consequent = ($$anchor) => {
				var fragment_1 = root();
				X(first_child(fragment_1), { class: "h-3.5 w-3.5" });
				next();
				append($$anchor, fragment_1);
			};
			var alternate = ($$anchor) => {
				var fragment_2 = root_1();
				var node_4 = first_child(fragment_2);
				Plus(node_4, { class: "h-3.5 w-3.5" });
				var text = sibling(node_4);
				template_effect(($0) => set_text(text, ` ${$0 ?? ""}`), [() => hasRole("master_accountant") ? "Create Account" : "Submit Account Request"]);
				append($$anchor, fragment_2);
			};
			if_block(node_2, ($$render) => {
				if (get(showForm)) $$render(consequent);
				else $$render(alternate, -1);
			});
			append($$anchor, fragment);
		},
		$$slots: { default: true }
	});
	Button(sibling(node_1, 2), {
		variant: "outline",
		class: "h-8.5 rounded-xl cursor-pointer flex items-center gap-1.5 text-xs font-semibold",
		onclick: () => {
			loadAccounts();
			loadPending();
		},
		get disabled() {
			return get(loading);
		},
		children: ($$anchor, $$slotProps) => {
			var fragment_3 = root_2();
			var node_6 = first_child(fragment_3);
			{
				let $0 = user_derived(() => get(loading) ? "animate-spin" : "");
				Refresh_cw(node_6, { get class() {
					return `h-3.5 w-3.5 ${get($0) ?? ""}`;
				} });
			}
			next();
			append($$anchor, fragment_3);
		},
		$$slots: { default: true }
	});
	reset(div_3);
	reset(div_1);
	var node_7 = sibling(div_1, 2);
	var consequent_1 = ($$anchor) => {
		var div_4 = root_3();
		var node_8 = child(div_4);
		Clock(node_8, { class: "h-4 w-4 shrink-0 mt-0.5 text-amber-600" });
		var div_5 = sibling(node_8, 2);
		var span = child(div_5);
		var text_1 = child(span);
		reset(span);
		next(2);
		reset(div_5);
		reset(div_4);
		template_effect(() => set_text(text_1, `${get(pending).length ?? ""} account ${get(pending).length === 1 ? "request" : "requests"} awaiting master accountant approval.`));
		append($$anchor, div_4);
	};
	var d = user_derived(() => !hasRole("master_accountant") && get(pending).length > 0);
	if_block(node_7, ($$render) => {
		if (get(d)) $$render(consequent_1);
	});
	var node_9 = sibling(node_7, 2);
	var consequent_14 = ($$anchor) => {
		var div_6 = root_14();
		var h2 = child(div_6);
		var node_10 = child(h2);
		var consequent_2 = ($$anchor) => {
			var text_2 = text();
			template_effect(() => set_text(text_2, `Editing Account — ${get(accName) ?? ""}`));
			append($$anchor, text_2);
		};
		var consequent_3 = ($$anchor) => {
			append($$anchor, text("Create New Ledger Account"));
		};
		var d_1 = user_derived(() => hasRole("master_accountant"));
		var alternate_1 = ($$anchor) => {
			append($$anchor, text("Submit Account Creation Request"));
		};
		if_block(node_10, ($$render) => {
			if (get(isEditing)) $$render(consequent_2);
			else if (get(d_1)) $$render(consequent_3, 1);
			else $$render(alternate_1, -1);
		});
		reset(h2);
		var node_11 = sibling(h2, 2);
		var consequent_4 = ($$anchor) => {
			var p_1 = root_4();
			Triangle_alert(child(p_1), { class: "h-3.5 w-3.5 shrink-0" });
			next();
			reset(p_1);
			append($$anchor, p_1);
		};
		var d_2 = user_derived(() => !get(isEditing) && !hasRole("master_accountant"));
		var alternate_2 = ($$anchor) => {
			append($$anchor, root_5());
		};
		if_block(node_11, ($$render) => {
			if (get(d_2)) $$render(consequent_4);
			else $$render(alternate_2, -1);
		});
		var form = sibling(node_11, 2);
		var div_8 = child(form);
		var div_9 = child(div_8);
		var input = sibling(child(div_9), 2);
		remove_input_defaults(input);
		var node_13 = sibling(input, 2);
		var consequent_5 = ($$anchor) => {
			var p_2 = root_6();
			var text_5 = child(p_2, true);
			reset(p_2);
			template_effect(() => set_text(text_5, get(validationErrors).name));
			append($$anchor, p_2);
		};
		if_block(node_13, ($$render) => {
			if (get(validationErrors).name) $$render(consequent_5);
		});
		reset(div_9);
		var node_14 = sibling(div_9, 2);
		var consequent_6 = ($$anchor) => {
			var div_10 = root_8();
			var select = sibling(child(div_10), 2);
			select.disabled = true;
			each(select, 21, () => ACCOUNT_TYPE_VALUES, index, ($$anchor, t) => {
				var option = root_7();
				var text_6 = child(option, true);
				reset(option);
				var option_value = {};
				template_effect(() => {
					set_text(text_6, ACCOUNT_TYPE_LABELS[get(t)]);
					if (option_value !== (option_value = get(t))) option.value = (option.__value = get(t)) ?? "";
				});
				append($$anchor, option);
			});
			reset(select);
			reset(div_10);
			bind_select_value(select, () => get(accType), ($$value) => set(accType, $$value));
			append($$anchor, div_10);
		};
		if_block(node_14, ($$render) => {
			if (get(isEditing)) $$render(consequent_6);
		});
		var node_15 = sibling(node_14, 2);
		var consequent_8 = ($$anchor) => {
			var div_11 = root_11();
			var node_16 = sibling(child(div_11), 2);
			var consequent_7 = ($$anchor) => {
				var div_12 = root_9();
				Loader_circle(child(div_12), { class: "h-3 w-3 animate-spin text-primary" });
				next(2);
				reset(div_12);
				append($$anchor, div_12);
			};
			var alternate_3 = ($$anchor) => {
				var select_1 = root_10();
				var option_1 = child(select_1);
				option_1.value = (option_1.__value = null, "");
				each(sibling(option_1), 17, () => get(banks), index, ($$anchor, b) => {
					var option_2 = root_7();
					var text_7 = child(option_2);
					reset(option_2);
					var option_2_value = {};
					template_effect(() => {
						set_text(text_7, `${get(b).bankName ?? ""} - ${get(b).accountNumber ?? ""}`);
						if (option_2_value !== (option_2_value = get(b).id)) option_2.value = (option_2.__value = get(b).id) ?? "";
					});
					append($$anchor, option_2);
				});
				reset(select_1);
				template_effect(() => select_1.disabled = get(isSaving));
				bind_select_value(select_1, () => get(bankId), ($$value) => set(bankId, $$value));
				append($$anchor, select_1);
			};
			if_block(node_16, ($$render) => {
				if (get(loadingBanks)) $$render(consequent_7);
				else $$render(alternate_3, -1);
			});
			reset(div_11);
			append($$anchor, div_11);
		};
		if_block(node_15, ($$render) => {
			if (get(isEditing) && get(accType) === "bank") $$render(consequent_8);
		});
		var node_19 = sibling(node_15, 2);
		var consequent_10 = ($$anchor) => {
			var div_13 = root_12();
			var input_1 = sibling(child(div_13), 2);
			remove_input_defaults(input_1);
			var node_20 = sibling(input_1, 2);
			var consequent_9 = ($$anchor) => {
				var p_3 = root_6();
				var text_8 = child(p_3, true);
				reset(p_3);
				template_effect(() => set_text(text_8, get(validationErrors).openingBalance));
				append($$anchor, p_3);
			};
			if_block(node_20, ($$render) => {
				if (get(validationErrors).openingBalance) $$render(consequent_9);
			});
			reset(div_13);
			template_effect(() => input_1.disabled = get(isSaving));
			bind_value(input_1, () => get(openingBalance), ($$value) => set(openingBalance, $$value));
			append($$anchor, div_13);
		};
		if_block(node_19, ($$render) => {
			if (!get(isEditing)) $$render(consequent_10);
		});
		reset(div_8);
		var div_14 = sibling(div_8, 2);
		var node_21 = child(div_14);
		{
			let $0 = user_derived(() => get(isSaving) || !get(accName).trim());
			Button(node_21, {
				type: "submit",
				get disabled() {
					return get($0);
				},
				class: "rounded-xl font-semibold text-xs px-5 h-8.5 cursor-pointer",
				children: ($$anchor, $$slotProps) => {
					var fragment_5 = root_13();
					var node_22 = first_child(fragment_5);
					var consequent_11 = ($$anchor) => {
						Loader_circle($$anchor, { class: "h-3.5 w-3.5 mr-1.5 animate-spin" });
					};
					if_block(node_22, ($$render) => {
						if (get(isSaving)) $$render(consequent_11);
					});
					var node_23 = sibling(node_22, 2);
					var consequent_12 = ($$anchor) => {
						append($$anchor, text("Save Changes"));
					};
					var consequent_13 = ($$anchor) => {
						append($$anchor, text("Create Account"));
					};
					var d_3 = user_derived(() => hasRole("master_accountant"));
					var alternate_4 = ($$anchor) => {
						append($$anchor, text("Submit for Approval"));
					};
					if_block(node_23, ($$render) => {
						if (get(isEditing)) $$render(consequent_12);
						else if (get(d_3)) $$render(consequent_13, 1);
						else $$render(alternate_4, -1);
					});
					append($$anchor, fragment_5);
				},
				$$slots: { default: true }
			});
		}
		Button(sibling(node_21, 2), {
			type: "button",
			variant: "outline",
			onclick: resetForm,
			class: "rounded-xl text-xs h-8.5 cursor-pointer",
			children: ($$anchor, $$slotProps) => {
				next();
				append($$anchor, text("Cancel"));
			},
			$$slots: { default: true }
		});
		reset(div_14);
		reset(form);
		reset(div_6);
		template_effect(() => input.disabled = get(isSaving));
		event("submit", form, handleSubmit);
		bind_value(input, () => get(accName), ($$value) => set(accName, $$value));
		append($$anchor, div_6);
	};
	if_block(node_9, ($$render) => {
		if (get(showForm)) $$render(consequent_14);
	});
	var node_25 = sibling(node_9, 2);
	var consequent_16 = ($$anchor) => {
		var div_15 = root_16();
		var button = child(div_15);
		var text_13 = child(button);
		reset(button);
		var button_1 = sibling(button, 2);
		var node_26 = child(button_1);
		Clock(node_26, { class: "h-3.5 w-3.5" });
		var node_27 = sibling(node_26, 2);
		var consequent_15 = ($$anchor) => {
			var span_1 = root_15();
			var text_14 = child(span_1, true);
			reset(span_1);
			template_effect(() => set_text(text_14, get(pending).length));
			append($$anchor, span_1);
		};
		if_block(node_27, ($$render) => {
			if (get(pending).length > 0) $$render(consequent_15);
		});
		reset(button_1);
		reset(div_15);
		template_effect(($0, $1) => {
			set_class(button, 1, $0);
			set_text(text_13, `All Accounts (${get(accounts).length ?? ""})`);
			set_class(button_1, 1, $1);
		}, [() => clsx(["px-4 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer", get(activeTab) === "list" ? "bg-card text-foreground shadow-sm border border-border/30" : "text-muted-foreground hover:text-foreground"].join(" ")), () => clsx(["px-4 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center gap-1.5", get(activeTab) === "pending" ? "bg-card text-foreground shadow-sm border border-border/30" : "text-muted-foreground hover:text-foreground"].join(" "))]);
		delegated("click", button, () => set(activeTab, "list"));
		delegated("click", button_1, () => {
			set(activeTab, "pending");
			loadPending();
		});
		append($$anchor, div_15);
	};
	var d_4 = user_derived(() => hasRole("master_accountant") || get(pending).length > 0);
	if_block(node_25, ($$render) => {
		if (get(d_4)) $$render(consequent_16);
	});
	var node_28 = sibling(node_25, 2);
	var consequent_20 = ($$anchor) => {
		var fragment_7 = comment();
		var node_29 = first_child(fragment_7);
		var consequent_17 = ($$anchor) => {
			append($$anchor, root_17());
		};
		var consequent_18 = ($$anchor) => {
			EmptyState($$anchor, {
				title: "No pending account requests",
				description: "All account creation requests have been reviewed.",
				get icon() {
					return Clock;
				}
			});
		};
		var alternate_6 = ($$anchor) => {
			var div_17 = root_21();
			each(div_17, 21, () => get(pending), (item) => item.id, ($$anchor, item) => {
				const p = user_derived(() => getParsedPayload(get(item)));
				var div_18 = root_20();
				var div_19 = child(div_18);
				var div_20 = child(div_19);
				var div_21 = child(div_20);
				var span_2 = child(div_21);
				Clock(child(span_2), { class: "h-2.5 w-2.5" });
				next();
				reset(span_2);
				var span_3 = sibling(span_2, 2);
				var text_15 = child(span_3);
				reset(span_3);
				reset(div_21);
				var p_4 = sibling(div_21, 2);
				var text_16 = child(p_4, true);
				reset(p_4);
				var div_22 = sibling(p_4, 2);
				var span_4 = child(div_22);
				var span_5 = sibling(child(span_4));
				var text_17 = child(span_5, true);
				reset(span_5);
				reset(span_4);
				var span_6 = sibling(span_4, 2);
				var span_7 = sibling(child(span_6));
				var text_18 = child(span_7, true);
				reset(span_7);
				reset(span_6);
				var span_8 = sibling(span_6, 2);
				var span_9 = sibling(child(span_8));
				var text_19 = child(span_9);
				reset(span_9);
				reset(span_8);
				reset(div_22);
				var p_5 = sibling(div_22, 2);
				var span_10 = sibling(child(p_5));
				var text_20 = child(span_10, true);
				reset(span_10);
				var text_21 = sibling(span_10);
				reset(p_5);
				reset(div_20);
				var div_23 = sibling(div_20, 2);
				var node_31 = child(div_23);
				var consequent_19 = ($$anchor) => {
					var fragment_9 = root_18();
					var button_2 = first_child(fragment_9);
					Check(child(button_2), { class: "h-3.5 w-3.5" });
					next();
					reset(button_2);
					var button_3 = sibling(button_2, 2);
					X(child(button_3), { class: "h-3.5 w-3.5" });
					next();
					reset(button_3);
					template_effect(() => {
						button_2.disabled = get(approvingId) === get(item).id;
						button_3.disabled = get(approvingId) === get(item).id;
					});
					delegated("click", button_2, () => approveAccount(get(item)));
					delegated("click", button_3, () => rejectAccount(get(item)));
					append($$anchor, fragment_9);
				};
				var d_5 = user_derived(() => hasRole("master_accountant"));
				var alternate_5 = ($$anchor) => {
					var span_11 = root_19();
					Clock(child(span_11), { class: "h-3 w-3" });
					next();
					reset(span_11);
					append($$anchor, span_11);
				};
				if_block(node_31, ($$render) => {
					if (get(d_5)) $$render(consequent_19);
					else $$render(alternate_5, -1);
				});
				reset(div_23);
				reset(div_19);
				reset(div_18);
				template_effect(($0, $1) => {
					set_text(text_15, `#${get(item).id ?? ""}`);
					set_text(text_16, get(p)?.name ?? "—");
					set_text(text_17, get(p)?.type ?? "—");
					set_text(text_18, get(p)?.ledgerType ?? "—");
					set_text(text_19, `${$0 ?? ""} BHD`);
					set_text(text_20, get(item).submittedByName);
					set_text(text_21, ` ·
									${$1 ?? ""}`);
				}, [() => get(p)?.openingBalance?.toFixed(3) ?? "—", () => new Date(get(item).submittedAt).toLocaleDateString()]);
				append($$anchor, div_18);
			});
			reset(div_17);
			append($$anchor, div_17);
		};
		if_block(node_29, ($$render) => {
			if (get(loadingPending)) $$render(consequent_17);
			else if (get(pending).length === 0) $$render(consequent_18, 1);
			else $$render(alternate_6, -1);
		});
		append($$anchor, fragment_7);
	};
	var alternate_9 = ($$anchor) => {
		var fragment_10 = comment();
		var node_35 = first_child(fragment_10);
		var consequent_21 = ($$anchor) => {
			ErrorState($$anchor, {
				get message() {
					return get(errorMsg);
				},
				get correlationId() {
					return get(correlationId);
				},
				retryAction: loadAccounts
			});
		};
		var alternate_8 = ($$anchor) => {
			var fragment_12 = comment();
			var node_36 = first_child(fragment_12);
			var consequent_22 = ($$anchor) => {
				var fragment_13 = root_22();
				var div_24 = first_child(fragment_13);
				FinancialTableSkeleton(child(div_24), {
					rows: 5,
					columns: 5
				});
				reset(div_24);
				var div_25 = sibling(div_24, 2);
				FinancialCardSkeleton(child(div_25), { count: 3 });
				reset(div_25);
				append($$anchor, fragment_13);
			};
			var consequent_23 = ($$anchor) => {
				EmptyState($$anchor, {
					title: "No accounts found",
					description: "Try changing the type filter or create a new ledger account.",
					get icon() {
						return Landmark;
					}
				});
			};
			var d_6 = user_derived(() => get(filteredAccounts)().length === 0);
			var alternate_7 = ($$anchor) => {
				var fragment_15 = root_28();
				var div_26 = first_child(fragment_15);
				var div_27 = child(div_26);
				var table = child(div_27);
				var thead = child(table);
				var tr = child(thead);
				var node_39 = sibling(child(tr), 5);
				var consequent_24 = ($$anchor) => {
					append($$anchor, root_23());
				};
				var d_7 = user_derived(() => hasRole("master_accountant"));
				if_block(node_39, ($$render) => {
					if (get(d_7)) $$render(consequent_24);
				});
				reset(tr);
				reset(thead);
				var tbody = sibling(thead);
				each(tbody, 21, () => get(filteredAccounts)(), (acc) => acc.id, ($$anchor, acc) => {
					var tr_1 = root_25();
					var td = child(tr_1);
					var text_22 = child(td);
					reset(td);
					var td_1 = sibling(td);
					var text_23 = child(td_1, true);
					reset(td_1);
					var td_2 = sibling(td_1);
					var text_24 = child(td_2, true);
					reset(td_2);
					var td_3 = sibling(td_2);
					MoneyDisplay(child(td_3), { get amount() {
						return get(acc).currentBalance;
					} });
					reset(td_3);
					var td_4 = sibling(td_3);
					var span_12 = child(td_4);
					var text_25 = child(span_12, true);
					reset(span_12);
					reset(td_4);
					var node_41 = sibling(td_4);
					var consequent_25 = ($$anchor) => {
						var td_5 = root_24();
						var div_28 = child(td_5);
						var button_4 = child(div_28);
						Pencil(child(button_4), { class: "h-3.5 w-3.5" });
						reset(button_4);
						var button_5 = sibling(button_4, 2);
						Power(child(button_5), { class: "h-3.5 w-3.5" });
						reset(button_5);
						reset(div_28);
						reset(td_5);
						template_effect(($0) => {
							set_class(button_5, 1, $0);
							set_attribute(button_5, "title", get(acc).isActive ? "Deactivate" : "Activate");
						}, [() => clsx(["p-1.5 rounded-lg border cursor-pointer", get(acc).isActive ? "bg-red-50 text-red-600 border-red-200 hover:bg-red-100" : "bg-emerald-50 text-emerald-600 border-emerald-200 hover:bg-emerald-100"].join(" "))]);
						delegated("click", td_5, (e) => e.stopPropagation());
						delegated("click", button_4, () => startEdit(get(acc)));
						delegated("click", button_5, (e) => handleToggleStatus(get(acc), e));
						append($$anchor, td_5);
					};
					var d_8 = user_derived(() => hasRole("master_accountant"));
					if_block(node_41, ($$render) => {
						if (get(d_8)) $$render(consequent_25);
					});
					reset(tr_1);
					template_effect(($0) => {
						set_text(text_22, `#${get(acc).id ?? ""}`);
						set_text(text_23, get(acc).name);
						set_text(text_24, ACCOUNT_TYPE_LABELS[get(acc).type] || get(acc).type);
						set_class(span_12, 1, $0);
						set_text(text_25, get(acc).isActive ? "Active" : "Inactive");
					}, [() => clsx(["inline-flex items-center gap-1 font-semibold rounded-full border text-[10px] px-2 py-0.5", get(acc).isActive ? "text-emerald-700 bg-emerald-50 border-emerald-200 dark:text-emerald-400 dark:bg-emerald-950/40 dark:border-emerald-800" : "text-muted-foreground bg-muted border-border"].join(" "))]);
					delegated("click", tr_1, () => goto(`/accounts/${get(acc).id}`));
					append($$anchor, tr_1);
				});
				reset(tbody);
				reset(table);
				reset(div_27);
				var div_29 = sibling(div_27, 2);
				var strong = sibling(child(div_29));
				var text_26 = child(strong, true);
				reset(strong);
				var strong_1 = sibling(strong, 2);
				var text_27 = child(strong_1, true);
				reset(strong_1);
				next();
				reset(div_29);
				reset(div_26);
				var div_30 = sibling(div_26, 2);
				each(div_30, 21, () => get(filteredAccounts)(), (acc) => acc.id, ($$anchor, acc) => {
					var a_1 = root_27();
					var div_31 = child(a_1);
					var span_13 = child(div_31);
					var text_28 = child(span_13, true);
					reset(span_13);
					var span_14 = sibling(span_13, 2);
					var text_29 = child(span_14, true);
					reset(span_14);
					reset(div_31);
					var div_32 = sibling(div_31, 2);
					var span_15 = sibling(child(div_32), 2);
					MoneyDisplay(child(span_15), { get amount() {
						return get(acc).currentBalance;
					} });
					reset(span_15);
					reset(div_32);
					var div_33 = sibling(div_32, 2);
					var span_16 = child(div_33);
					var text_30 = child(span_16);
					reset(span_16);
					var div_34 = sibling(span_16, 2);
					var span_17 = child(div_34);
					var text_31 = child(span_17, true);
					reset(span_17);
					var node_45 = sibling(span_17, 2);
					var consequent_26 = ($$anchor) => {
						var fragment_16 = root_26();
						var button_6 = first_child(fragment_16);
						Pencil(child(button_6), { class: "h-3.5 w-3.5" });
						reset(button_6);
						var button_7 = sibling(button_6, 2);
						Power(child(button_7), { class: "h-3.5 w-3.5" });
						reset(button_7);
						template_effect(($0) => set_class(button_7, 1, $0), [() => clsx(["p-1.5 rounded-lg border cursor-pointer", get(acc).isActive ? "bg-red-50 text-red-600 border-red-200 hover:bg-red-100" : "bg-emerald-50 text-emerald-600 border-emerald-200 hover:bg-emerald-100"].join(" "))]);
						delegated("click", button_6, (e) => {
							e.preventDefault();
							e.stopPropagation();
							startEdit(get(acc));
						});
						delegated("click", button_7, (e) => {
							e.preventDefault();
							e.stopPropagation();
							handleToggleStatus(get(acc), e);
						});
						append($$anchor, fragment_16);
					};
					var d_9 = user_derived(() => hasRole("master_accountant"));
					if_block(node_45, ($$render) => {
						if (get(d_9)) $$render(consequent_26);
					});
					reset(div_34);
					reset(div_33);
					reset(a_1);
					template_effect(($0, $1) => {
						set_attribute(a_1, "href", `/accounts/${get(acc).id}`);
						set_text(text_28, get(acc).name);
						set_text(text_29, ACCOUNT_TYPE_LABELS[get(acc).type] || get(acc).type);
						set_text(text_30, `ID: #${get(acc).id ?? ""} · ${$0 ?? ""}`);
						set_class(span_17, 1, $1);
						set_text(text_31, get(acc).isActive ? "Active" : "Inactive");
					}, [() => get(acc).ledgerType.toUpperCase(), () => clsx(["text-[9px] font-semibold px-2 py-0.5 rounded-full border", get(acc).isActive ? "text-emerald-700 bg-emerald-50 border-emerald-200" : "text-muted-foreground bg-muted border-border"].join(" "))]);
					append($$anchor, a_1);
				});
				reset(div_30);
				template_effect(($0) => {
					set_text(text_26, $0);
					set_text(text_27, get(accounts).length);
				}, [() => get(filteredAccounts)().length]);
				append($$anchor, fragment_15);
			};
			if_block(node_36, ($$render) => {
				if (get(loading)) $$render(consequent_22);
				else if (get(d_6)) $$render(consequent_23, 1);
				else $$render(alternate_7, -1);
			});
			append($$anchor, fragment_12);
		};
		if_block(node_35, ($$render) => {
			if (get(errorMsg)) $$render(consequent_21);
			else $$render(alternate_8, -1);
		});
		append($$anchor, fragment_10);
	};
	if_block(node_28, ($$render) => {
		if (get(activeTab) === "pending") $$render(consequent_20);
		else $$render(alternate_9, -1);
	});
	reset(div);
	append($$anchor, div);
	pop();
	$$cleanup();
}
delegate(["click"]);
//#endregion
export { _page as component };

import { B as append, Bt as reset, Ct as user_derived, D as head, Et as store_get, G as text, H as from_html, I as if_block, J as event, K as delegate, N as each, Nt as pop, Pt as push, Q as get, R as set_text, T as clsx, Tt as setup_stores, V as comment, _ as set_attribute, bt as state, dt as $document, g as remove_input_defaults, gt as proxy, ht as sibling, it as effect, m as bind_value, mt as first_child, ot as template_effect, pt as child, q as delegated, r as onMount, vt as set, w as set_class, zt as next } from "../chunks/dXkmWTgM.js";
import { t as goto } from "../chunks/jpiVHPnQ.js";
import "../chunks/DhaYE-8x.js";
import { t as apiFetch } from "../chunks/BbALOStj.js";
import { i as hasRole, r as currentUser } from "../chunks/BxaDNPn9.js";
import { t as addToast } from "../chunks/CbPRQHfn.js";
import { t as Check } from "../chunks/blG6JRe7.js";
import { t as Clock } from "../chunks/CZu1L_RP.js";
import { t as Landmark } from "../chunks/D_q7zQKx2.js";
import { t as Loader_circle } from "../chunks/BMOA0yrB2.js";
import { t as Pencil } from "../chunks/C3Ohi_CL2.js";
import { t as Plus } from "../chunks/BObidJ7B2.js";
import { t as Power } from "../chunks/ZWE_o2ua2.js";
import { t as Refresh_cw } from "../chunks/DpTJy0Wb2.js";
import { t as ErrorState } from "../chunks/B7ZVWvAI2.js";
import { t as Triangle_alert } from "../chunks/BKenZzGW.js";
import { t as X } from "../chunks/wXHc9RNY.js";
import { t as page } from "../chunks/CZTj0KUP.js";
import { t as Button } from "../chunks/BhXsq3bC.js";
import "../chunks/BUIO9nrG.js";
import { t as FinancialTableSkeleton } from "../chunks/BifxP-5W.js";
import { t as EmptyState } from "../chunks/DXyN7dIZ.js";
import { t as MoneyDisplay } from "../chunks/CIVSRuaR.js";
import { i as updateBank, n as getBanks, r as toggleBankStatus, t as createBank } from "../chunks/DYXsCxgD2.js";
import { t as FinancialCardSkeleton } from "../chunks/B8oQRwBb2.js";
//#region src/routes/(app)/banks/+page.svelte
var root = from_html(`<!> Cancel`, 1);
var root_1 = from_html(`<!> `, 1);
var root_2 = from_html(`<!> Reload`, 1);
var root_3 = from_html(`<div class="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-2xl px-5 py-4 text-xs text-amber-800 animate-scaleUp"><!> <div><span class="font-bold"> </span> <span class="text-amber-700 ml-1">These will be registered once approved.</span></div></div>`);
var root_4 = from_html(`<p class="text-[11px] text-amber-600 flex items-center gap-1.5 mb-5"><!> Your request will be stored in the database and needs master accountant approval before the bank account is registered.</p>`);
var root_5 = from_html(`<div class="mb-5"></div>`);
var root_6 = from_html(`<p class="text-[10px] text-red-600 mt-1"> </p>`);
var root_7 = from_html(`<span class="text-muted-foreground font-normal">(read-only)</span>`);
var root_8 = from_html(`<div class="space-y-1.5"><label for="b-bal" class="block font-semibold text-foreground">Opening/Book Balance (BHD) <span class="text-red-500">*</span></label> <input id="b-bal" type="number" step="0.001" placeholder="0.000" class="flex h-9 w-full rounded-xl border border-input bg-background px-3 py-1 text-xs shadow-xs transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring text-foreground placeholder-muted-foreground/60 font-semibold"/> <!></div>`);
var root_9 = from_html(`<!> <!>`, 1);
var root_10 = from_html(`<div class="bg-card border border-border rounded-2xl p-6 shadow-xs animate-scaleUp"><h2 class="text-sm font-bold text-foreground mb-1"><!></h2> <!> <form><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs"><div class="space-y-1.5"><label for="b-name" class="block font-semibold text-foreground">Bank Name <span class="text-red-500">*</span></label> <input id="b-name" type="text" placeholder="e.g. National Bank of Bahrain" class="flex h-9 w-full rounded-xl border border-input bg-background px-3 py-1 text-xs shadow-xs transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring text-foreground placeholder-muted-foreground/60 font-semibold"/> <!></div> <div class="space-y-1.5"><label for="b-acc" class="block font-semibold text-foreground">Account Number <span class="text-red-500">*</span> <!></label> <input id="b-acc" type="text" placeholder="e.g. 100200300400" class="flex h-9 w-full rounded-xl border border-input bg-background px-3 py-1 text-xs shadow-xs transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring text-foreground placeholder-muted-foreground/60 font-mono font-semibold"/> <!></div> <!></div> <div class="flex gap-2.5 mt-5 pt-4 border-t border-border/50"><!> <!></div></form></div>`);
var root_11 = from_html(`<span class="inline-flex items-center justify-center h-4 min-w-4 px-1 rounded-full bg-amber-500 text-white text-[9px] font-bold"> </span>`);
var root_12 = from_html(`<div class="flex gap-1 bg-muted/40 rounded-xl p-1 w-fit border border-border/50"><button> </button> <button><!> Pending Approvals <!></button></div>`);
var root_13 = from_html(`<div class="flex items-center justify-center h-32 text-muted-foreground text-xs gap-2"><span class="animate-spin h-4 w-4 border-2 border-primary border-t-transparent rounded-full"></span> Loading pending requests...</div>`);
var root_14 = from_html(`<button class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 text-xs font-semibold cursor-pointer disabled:opacity-50"><!> Approve</button> <button class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 text-xs font-semibold cursor-pointer disabled:opacity-50"><!> Reject</button>`, 1);
var root_15 = from_html(`<span class="text-[10px] text-amber-600 flex items-center gap-1 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-xl font-semibold"><!> Awaiting Approval</span>`);
var root_16 = from_html(`<div class="bg-card border border-amber-200 dark:border-amber-800 rounded-2xl p-4 space-y-3"><div class="flex items-start justify-between gap-4"><div class="space-y-1"><div class="flex items-center gap-2"><span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 text-[10px] font-semibold border border-amber-200 dark:border-amber-700"><!> Pending</span> <span class="text-xs text-muted-foreground"> </span></div> <p class="text-sm font-bold text-foreground"> </p> <p class="text-xs font-mono text-muted-foreground"> </p> <p class="text-xs text-muted-foreground">Opening Balance: <span class="font-semibold text-foreground"> </span></p> <p class="text-[11px] text-muted-foreground">Submitted by <span class="font-semibold"> </span> </p></div> <div class="flex gap-2 shrink-0"><!></div></div></div>`);
var root_17 = from_html(`<div class="space-y-3"></div>`);
var root_18 = from_html(`<div class="hidden md:block bg-card border border-border rounded-2xl overflow-hidden"><!></div> <div class="block md:hidden"><!></div>`, 1);
var root_19 = from_html(`<th class="p-4 w-20 text-center">Actions</th>`);
var root_20 = from_html(`<td class="p-4 text-center"><div class="flex items-center justify-center gap-1.5"><button class="p-1.5 hover:bg-muted text-muted-foreground hover:text-foreground rounded-lg transition-colors cursor-pointer" title="Edit Bank"><!></button> <button><!></button></div></td>`);
var root_21 = from_html(`<tr class="hover:bg-muted/10 transition-colors cursor-pointer"><td class="p-4 font-mono font-medium text-muted-foreground"> </td><td class="p-4 font-semibold text-foreground"> </td><td class="p-4 font-mono tracking-wider"> </td><td class="p-4 text-right font-bold text-foreground"><!></td><td class="p-4"><span> </span></td><!></tr>`);
var root_22 = from_html(`<button class="p-1.5 hover:bg-muted text-muted-foreground hover:text-foreground rounded-lg transition-colors cursor-pointer"><!></button> <button><!></button>`, 1);
var root_23 = from_html(`<a class="block bg-card border border-border rounded-2xl p-4 space-y-3 hover:border-primary/40 active:bg-muted/5 transition-all text-left"><div class="flex items-center justify-between"><span class="font-bold text-foreground"> </span> <span class="font-mono text-xs"> </span></div> <div class="flex items-center justify-between text-xs pt-1 border-t border-border/40"><span class="text-muted-foreground">Current Balance:</span> <span class="font-bold text-foreground"><!></span></div> <div class="flex items-center justify-between pt-1"><span class="text-[10px] text-muted-foreground"> </span> <div class="flex items-center gap-2"><span> </span> <!></div></div></a>`);
var root_24 = from_html(`<div class="bg-card border border-border rounded-2xl overflow-x-auto shadow-xs max-w-full"><div class="overflow-x-auto"><table class="w-full min-w-[700px] text-left border-collapse text-xs"><thead><tr class="bg-muted/30 border-b border-border text-muted-foreground font-semibold text-[10px] uppercase tracking-wider"><th class="p-4 w-16">ID</th><th class="p-4">Bank Name</th><th class="p-4">Account Number</th><th class="p-4 text-right">Current Balance</th><th class="p-4 w-24">Status</th><!></tr></thead><tbody class="divide-y divide-border/60"></tbody></table></div> <div class="px-4 py-3 border-t border-border/50 text-[10px] text-muted-foreground bg-muted/10">Showing <strong> </strong> bank profiles</div></div> <div class="block md:hidden space-y-3"></div>`, 1);
var root_25 = from_html(`<div class="space-y-6"><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"><div class="flex flex-col gap-1"><h1 class="text-xl font-bold text-foreground flex items-center gap-2"><!> Bank Accounts</h1> <p class="text-xs text-muted-foreground">Review external bank deposits, reconcile treasury ledgers, and manage bank mappings.</p></div> <div class="flex flex-wrap gap-2"><!> <!></div></div> <!> <!> <!> <!></div>`);
function _page($$anchor, $$props) {
	push($$props, true);
	const $currentUser = () => store_get(currentUser, "$currentUser", $$stores);
	const $page = () => store_get(page, "$page", $$stores);
	const [$$stores, $$cleanup] = setup_stores();
	let banks = state(proxy([]));
	let pending = state(proxy([]));
	let loading = state(true);
	let loadingPending = state(false);
	let errorMsg = state(null);
	let correlationId = state("");
	let activeTab = state("list");
	let approvingId = state(null);
	async function loadBanks() {
		set(loading, true);
		set(errorMsg, null);
		set(correlationId, "");
		try {
			const res = await getBanks();
			set(banks, res, true);
		} catch (err) {
			set(errorMsg, err.message || "Failed to load bank accounts.", true);
			set(correlationId, err.correlationId || "", true);
		} finally {
			set(loading, false);
		}
	}
	async function loadPending() {
		set(loadingPending, true);
		try {
			set(pending, await apiFetch("api/pending-approvals?entityType=bank&status=pending") || [], true);
		} catch (err) {
			addToast(err.message || "Failed to load pending requests.", "error");
		} finally {
			set(loadingPending, false);
		}
	}
	async function handleToggleStatus(bank, e) {
		e.stopPropagation();
		if (!hasRole("master_accountant")) {
			addToast("Only a Master Accountant can toggle bank account status.", "error");
			return;
		}
		try {
			await toggleBankStatus(bank.id);
			addToast(`Bank account status toggled successfully.`, "success");
			loadBanks();
		} catch (err) {
			addToast(err.message || "Failed to toggle bank status.", "error");
		}
	}
	async function approveBank(item) {
		set(approvingId, item.id, true);
		try {
			await apiFetch(`api/pending-approvals/${item.id}/approve`, { method: "POST" });
			addToast("Bank account approved and registered.", "success");
			await Promise.all([loadBanks(), loadPending()]);
		} catch (err) {
			addToast(err.message || "Approval failed.", "error");
		} finally {
			set(approvingId, null);
		}
	}
	async function rejectBank(item) {
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
	let bankName = state("");
	let accountNumber = state("");
	let openingBalance = state("");
	let validationErrors = state(proxy({}));
	function validate() {
		const errors = {};
		if (!get(bankName).trim()) errors.bankName = "Bank Name is required.";
		if (!get(accountNumber).trim()) errors.accountNumber = "Account Number is required.";
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
				await updateBank(get(editingId), {
					bankName: get(bankName).trim(),
					accountNumber: get(accountNumber).trim()
				});
				addToast(`Bank account changes saved successfully.`, "success");
				resetForm();
				await loadBanks();
			} else if (isMaster) {
				await createBank({
					bankName: get(bankName).trim(),
					accountNumber: get(accountNumber).trim(),
					openingBalance: Number(get(openingBalance))
				});
				addToast(`Bank account "${get(bankName)}" registered successfully.`, "success");
				resetForm();
				await loadBanks();
			} else {
				const payload = {
					bankName: get(bankName).trim(),
					accountNumber: get(accountNumber).trim(),
					openingBalance: Number(get(openingBalance))
				};
				await apiFetch("api/pending-approvals", {
					method: "POST",
					body: JSON.stringify({
						entityType: "bank",
						payloadJson: JSON.stringify(payload),
						submittedByName: $currentUser()?.name ?? "Accountant"
					})
				});
				addToast(`Bank account registration submitted for master accountant approval.`, "success");
				resetForm();
				await loadPending();
			}
		} catch (err) {
			addToast(err.status === 409 ? "This Account Number is already registered with another bank profile." : err.message || "Failed to save bank account.", "error");
		} finally {
			set(isSaving, false);
		}
	}
	function startEdit(b) {
		set(isEditing, true);
		set(editingId, b.id, true);
		set(showForm, true);
		set(bankName, b.bankName, true);
		set(accountNumber, b.accountNumber, true);
		set(openingBalance, "");
		set(validationErrors, {}, true);
	}
	function resetForm() {
		set(showForm, false);
		set(isEditing, false);
		set(editingId, null);
		set(bankName, "");
		set(accountNumber, "");
		set(openingBalance, "");
		set(validationErrors, {}, true);
	}
	onMount(async () => {
		await loadBanks();
		await loadPending();
		const editIdStr = $page().url.searchParams.get("edit");
		if (editIdStr) {
			const editId = parseInt(editIdStr, 10);
			const match = get(banks).find((b) => b.id === editId);
			if (match && hasRole("master_accountant")) startEdit(match);
		} else if ($page().url.searchParams.get("new") === "true") set(showForm, true);
	});
	var div = root_25();
	head("1l74kdt", ($$anchor) => {
		effect(() => {
			$document.title = "Bank Accounts — Accounts Portal";
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
				template_effect(($0) => set_text(text, ` ${$0 ?? ""}`), [() => hasRole("master_accountant") ? "Register Bank Account" : "Submit Bank Request"]);
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
			loadBanks();
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
		template_effect(() => set_text(text_1, `${get(pending).length ?? ""} bank ${get(pending).length === 1 ? "request" : "requests"} awaiting master accountant approval.`));
		append($$anchor, div_4);
	};
	var d = user_derived(() => !hasRole("master_accountant") && get(pending).length > 0);
	if_block(node_7, ($$render) => {
		if (get(d)) $$render(consequent_1);
	});
	var node_9 = sibling(node_7, 2);
	var consequent_13 = ($$anchor) => {
		var div_6 = root_10();
		var h2 = child(div_6);
		var node_10 = child(h2);
		var consequent_2 = ($$anchor) => {
			var text_2 = text();
			template_effect(() => set_text(text_2, `Editing Bank Account — ${get(bankName) ?? ""}`));
			append($$anchor, text_2);
		};
		var consequent_3 = ($$anchor) => {
			append($$anchor, text("Register New Bank Account"));
		};
		var d_1 = user_derived(() => hasRole("master_accountant"));
		var alternate_1 = ($$anchor) => {
			append($$anchor, text("Submit Bank Registration Request"));
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
			template_effect(() => set_text(text_5, get(validationErrors).bankName));
			append($$anchor, p_2);
		};
		if_block(node_13, ($$render) => {
			if (get(validationErrors).bankName) $$render(consequent_5);
		});
		reset(div_9);
		var div_10 = sibling(div_9, 2);
		var label = child(div_10);
		var node_14 = sibling(child(label), 3);
		var consequent_6 = ($$anchor) => {
			append($$anchor, root_7());
		};
		if_block(node_14, ($$render) => {
			if (get(isEditing)) $$render(consequent_6);
		});
		reset(label);
		var input_1 = sibling(label, 2);
		remove_input_defaults(input_1);
		var node_15 = sibling(input_1, 2);
		var consequent_7 = ($$anchor) => {
			var p_3 = root_6();
			var text_6 = child(p_3, true);
			reset(p_3);
			template_effect(() => set_text(text_6, get(validationErrors).accountNumber));
			append($$anchor, p_3);
		};
		if_block(node_15, ($$render) => {
			if (get(validationErrors).accountNumber) $$render(consequent_7);
		});
		reset(div_10);
		var node_16 = sibling(div_10, 2);
		var consequent_9 = ($$anchor) => {
			var div_11 = root_8();
			var input_2 = sibling(child(div_11), 2);
			remove_input_defaults(input_2);
			var node_17 = sibling(input_2, 2);
			var consequent_8 = ($$anchor) => {
				var p_4 = root_6();
				var text_7 = child(p_4, true);
				reset(p_4);
				template_effect(() => set_text(text_7, get(validationErrors).openingBalance));
				append($$anchor, p_4);
			};
			if_block(node_17, ($$render) => {
				if (get(validationErrors).openingBalance) $$render(consequent_8);
			});
			reset(div_11);
			template_effect(() => input_2.disabled = get(isSaving));
			bind_value(input_2, () => get(openingBalance), ($$value) => set(openingBalance, $$value));
			append($$anchor, div_11);
		};
		if_block(node_16, ($$render) => {
			if (!get(isEditing)) $$render(consequent_9);
		});
		reset(div_8);
		var div_12 = sibling(div_8, 2);
		var node_18 = child(div_12);
		{
			let $0 = user_derived(() => get(isSaving) || !get(bankName).trim() || !get(accountNumber).trim());
			Button(node_18, {
				type: "submit",
				get disabled() {
					return get($0);
				},
				class: "rounded-xl font-semibold text-xs px-5 h-8.5 cursor-pointer",
				children: ($$anchor, $$slotProps) => {
					var fragment_5 = root_9();
					var node_19 = first_child(fragment_5);
					var consequent_10 = ($$anchor) => {
						Loader_circle($$anchor, { class: "h-3.5 w-3.5 mr-1.5 animate-spin" });
					};
					if_block(node_19, ($$render) => {
						if (get(isSaving)) $$render(consequent_10);
					});
					var node_20 = sibling(node_19, 2);
					var consequent_11 = ($$anchor) => {
						append($$anchor, text("Save Changes"));
					};
					var consequent_12 = ($$anchor) => {
						append($$anchor, text("Register Bank"));
					};
					var d_3 = user_derived(() => hasRole("master_accountant"));
					var alternate_3 = ($$anchor) => {
						append($$anchor, text("Submit for Approval"));
					};
					if_block(node_20, ($$render) => {
						if (get(isEditing)) $$render(consequent_11);
						else if (get(d_3)) $$render(consequent_12, 1);
						else $$render(alternate_3, -1);
					});
					append($$anchor, fragment_5);
				},
				$$slots: { default: true }
			});
		}
		Button(sibling(node_18, 2), {
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
		reset(div_12);
		reset(form);
		reset(div_6);
		template_effect(() => {
			input.disabled = get(isSaving);
			input_1.disabled = get(isEditing) || get(isSaving);
		});
		event("submit", form, handleSubmit);
		bind_value(input, () => get(bankName), ($$value) => set(bankName, $$value));
		bind_value(input_1, () => get(accountNumber), ($$value) => set(accountNumber, $$value));
		append($$anchor, div_6);
	};
	if_block(node_9, ($$render) => {
		if (get(showForm)) $$render(consequent_13);
	});
	var node_22 = sibling(node_9, 2);
	var consequent_15 = ($$anchor) => {
		var div_13 = root_12();
		var button = child(div_13);
		var text_12 = child(button);
		reset(button);
		var button_1 = sibling(button, 2);
		var node_23 = child(button_1);
		Clock(node_23, { class: "h-3.5 w-3.5" });
		var node_24 = sibling(node_23, 2);
		var consequent_14 = ($$anchor) => {
			var span_2 = root_11();
			var text_13 = child(span_2, true);
			reset(span_2);
			template_effect(() => set_text(text_13, get(pending).length));
			append($$anchor, span_2);
		};
		if_block(node_24, ($$render) => {
			if (get(pending).length > 0) $$render(consequent_14);
		});
		reset(button_1);
		reset(div_13);
		template_effect(($0, $1) => {
			set_class(button, 1, $0);
			set_text(text_12, `All Banks (${get(banks).length ?? ""})`);
			set_class(button_1, 1, $1);
		}, [() => clsx(["px-4 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer", get(activeTab) === "list" ? "bg-card text-foreground shadow-sm border border-border/30" : "text-muted-foreground hover:text-foreground"].join(" ")), () => clsx(["px-4 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center gap-1.5", get(activeTab) === "pending" ? "bg-card text-foreground shadow-sm border border-border/30" : "text-muted-foreground hover:text-foreground"].join(" "))]);
		delegated("click", button, () => set(activeTab, "list"));
		delegated("click", button_1, () => {
			set(activeTab, "pending");
			loadPending();
		});
		append($$anchor, div_13);
	};
	var d_4 = user_derived(() => hasRole("master_accountant") || get(pending).length > 0);
	if_block(node_22, ($$render) => {
		if (get(d_4)) $$render(consequent_15);
	});
	var node_25 = sibling(node_22, 2);
	var consequent_19 = ($$anchor) => {
		var fragment_7 = comment();
		var node_26 = first_child(fragment_7);
		var consequent_16 = ($$anchor) => {
			append($$anchor, root_13());
		};
		var consequent_17 = ($$anchor) => {
			EmptyState($$anchor, {
				title: "No pending bank registrations",
				description: "All bank account requests have been reviewed.",
				get icon() {
					return Clock;
				}
			});
		};
		var alternate_5 = ($$anchor) => {
			var div_15 = root_17();
			each(div_15, 21, () => get(pending), (item) => item.id, ($$anchor, item) => {
				const p = user_derived(() => getParsedPayload(get(item)));
				var div_16 = root_16();
				var div_17 = child(div_16);
				var div_18 = child(div_17);
				var div_19 = child(div_18);
				var span_3 = child(div_19);
				Clock(child(span_3), { class: "h-2.5 w-2.5" });
				next();
				reset(span_3);
				var span_4 = sibling(span_3, 2);
				var text_14 = child(span_4);
				reset(span_4);
				reset(div_19);
				var p_5 = sibling(div_19, 2);
				var text_15 = child(p_5, true);
				reset(p_5);
				var p_6 = sibling(p_5, 2);
				var text_16 = child(p_6, true);
				reset(p_6);
				var p_7 = sibling(p_6, 2);
				var span_5 = sibling(child(p_7));
				var text_17 = child(span_5);
				reset(span_5);
				reset(p_7);
				var p_8 = sibling(p_7, 2);
				var span_6 = sibling(child(p_8));
				var text_18 = child(span_6, true);
				reset(span_6);
				var text_19 = sibling(span_6);
				reset(p_8);
				reset(div_18);
				var div_20 = sibling(div_18, 2);
				var node_28 = child(div_20);
				var consequent_18 = ($$anchor) => {
					var fragment_9 = root_14();
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
					delegated("click", button_2, () => approveBank(get(item)));
					delegated("click", button_3, () => rejectBank(get(item)));
					append($$anchor, fragment_9);
				};
				var d_5 = user_derived(() => hasRole("master_accountant"));
				var alternate_4 = ($$anchor) => {
					var span_7 = root_15();
					Clock(child(span_7), { class: "h-3 w-3" });
					next();
					reset(span_7);
					append($$anchor, span_7);
				};
				if_block(node_28, ($$render) => {
					if (get(d_5)) $$render(consequent_18);
					else $$render(alternate_4, -1);
				});
				reset(div_20);
				reset(div_17);
				reset(div_16);
				template_effect(($0, $1) => {
					set_text(text_14, `#${get(item).id ?? ""}`);
					set_text(text_15, get(p)?.bankName ?? "—");
					set_text(text_16, get(p)?.accountNumber ?? "—");
					set_text(text_17, `${$0 ?? ""} BHD`);
					set_text(text_18, get(item).submittedByName);
					set_text(text_19, ` ·
									${$1 ?? ""}`);
				}, [() => get(p)?.openingBalance?.toFixed(3) ?? "—", () => new Date(get(item).submittedAt).toLocaleDateString()]);
				append($$anchor, div_16);
			});
			reset(div_15);
			append($$anchor, div_15);
		};
		if_block(node_26, ($$render) => {
			if (get(loadingPending)) $$render(consequent_16);
			else if (get(pending).length === 0) $$render(consequent_17, 1);
			else $$render(alternate_5, -1);
		});
		append($$anchor, fragment_7);
	};
	var alternate_8 = ($$anchor) => {
		var fragment_10 = comment();
		var node_32 = first_child(fragment_10);
		var consequent_20 = ($$anchor) => {
			ErrorState($$anchor, {
				get message() {
					return get(errorMsg);
				},
				get correlationId() {
					return get(correlationId);
				},
				retryAction: loadBanks
			});
		};
		var alternate_7 = ($$anchor) => {
			var fragment_12 = comment();
			var node_33 = first_child(fragment_12);
			var consequent_21 = ($$anchor) => {
				var fragment_13 = root_18();
				var div_21 = first_child(fragment_13);
				FinancialTableSkeleton(child(div_21), {
					rows: 4,
					columns: 5
				});
				reset(div_21);
				var div_22 = sibling(div_21, 2);
				FinancialCardSkeleton(child(div_22), { count: 2 });
				reset(div_22);
				append($$anchor, fragment_13);
			};
			var consequent_22 = ($$anchor) => {
				EmptyState($$anchor, {
					title: "No bank profiles registered",
					description: "There are no active or inactive bank accounts mapped in this system.",
					get icon() {
						return Landmark;
					}
				});
			};
			var alternate_6 = ($$anchor) => {
				var fragment_15 = root_24();
				var div_23 = first_child(fragment_15);
				var div_24 = child(div_23);
				var table = child(div_24);
				var thead = child(table);
				var tr = child(thead);
				var node_36 = sibling(child(tr), 5);
				var consequent_23 = ($$anchor) => {
					append($$anchor, root_19());
				};
				var d_6 = user_derived(() => hasRole("master_accountant"));
				if_block(node_36, ($$render) => {
					if (get(d_6)) $$render(consequent_23);
				});
				reset(tr);
				reset(thead);
				var tbody = sibling(thead);
				each(tbody, 21, () => get(banks), (b) => b.id, ($$anchor, b) => {
					var tr_1 = root_21();
					var td = child(tr_1);
					var text_20 = child(td);
					reset(td);
					var td_1 = sibling(td);
					var text_21 = child(td_1, true);
					reset(td_1);
					var td_2 = sibling(td_1);
					var text_22 = child(td_2, true);
					reset(td_2);
					var td_3 = sibling(td_2);
					MoneyDisplay(child(td_3), { get amount() {
						return get(b).currentBalance;
					} });
					reset(td_3);
					var td_4 = sibling(td_3);
					var span_8 = child(td_4);
					var text_23 = child(span_8, true);
					reset(span_8);
					reset(td_4);
					var node_38 = sibling(td_4);
					var consequent_24 = ($$anchor) => {
						var td_5 = root_20();
						var div_25 = child(td_5);
						var button_4 = child(div_25);
						Pencil(child(button_4), { class: "h-3.5 w-3.5" });
						reset(button_4);
						var button_5 = sibling(button_4, 2);
						Power(child(button_5), { class: "h-3.5 w-3.5" });
						reset(button_5);
						reset(div_25);
						reset(td_5);
						template_effect(($0) => {
							set_class(button_5, 1, $0);
							set_attribute(button_5, "title", get(b).isActive ? "Deactivate" : "Activate");
						}, [() => clsx(["p-1.5 rounded-lg border cursor-pointer", get(b).isActive ? "bg-red-50 text-red-600 border-red-200 hover:bg-red-100" : "bg-emerald-50 text-emerald-600 border-emerald-200 hover:bg-emerald-100"].join(" "))]);
						delegated("click", td_5, (e) => e.stopPropagation());
						delegated("click", button_4, () => startEdit(get(b)));
						delegated("click", button_5, (e) => handleToggleStatus(get(b), e));
						append($$anchor, td_5);
					};
					var d_7 = user_derived(() => hasRole("master_accountant"));
					if_block(node_38, ($$render) => {
						if (get(d_7)) $$render(consequent_24);
					});
					reset(tr_1);
					template_effect(($0) => {
						set_text(text_20, `#${get(b).id ?? ""}`);
						set_text(text_21, get(b).bankName);
						set_text(text_22, get(b).accountNumber);
						set_class(span_8, 1, $0);
						set_text(text_23, get(b).isActive ? "Active" : "Inactive");
					}, [() => clsx(["inline-flex items-center gap-1 font-semibold rounded-full border text-[10px] px-2 py-0.5", get(b).isActive ? "text-emerald-700 bg-emerald-50 border-emerald-200 dark:text-emerald-400 dark:bg-emerald-950/40 dark:border-emerald-800" : "text-muted-foreground bg-muted border-border"].join(" "))]);
					delegated("click", tr_1, () => goto(`/banks/${get(b).id}`));
					append($$anchor, tr_1);
				});
				reset(tbody);
				reset(table);
				reset(div_24);
				var div_26 = sibling(div_24, 2);
				var strong = sibling(child(div_26));
				var text_24 = child(strong, true);
				reset(strong);
				next();
				reset(div_26);
				reset(div_23);
				var div_27 = sibling(div_23, 2);
				each(div_27, 21, () => get(banks), (b) => b.id, ($$anchor, b) => {
					var a = root_23();
					var div_28 = child(a);
					var span_9 = child(div_28);
					var text_25 = child(span_9, true);
					reset(span_9);
					var span_10 = sibling(span_9, 2);
					var text_26 = child(span_10, true);
					reset(span_10);
					reset(div_28);
					var div_29 = sibling(div_28, 2);
					var span_11 = sibling(child(div_29), 2);
					MoneyDisplay(child(span_11), { get amount() {
						return get(b).currentBalance;
					} });
					reset(span_11);
					reset(div_29);
					var div_30 = sibling(div_29, 2);
					var span_12 = child(div_30);
					var text_27 = child(span_12);
					reset(span_12);
					var div_31 = sibling(span_12, 2);
					var span_13 = child(div_31);
					var text_28 = child(span_13, true);
					reset(span_13);
					var node_42 = sibling(span_13, 2);
					var consequent_25 = ($$anchor) => {
						var fragment_16 = root_22();
						var button_6 = first_child(fragment_16);
						Pencil(child(button_6), { class: "h-3.5 w-3.5" });
						reset(button_6);
						var button_7 = sibling(button_6, 2);
						Power(child(button_7), { class: "h-3.5 w-3.5" });
						reset(button_7);
						template_effect(($0) => set_class(button_7, 1, $0), [() => clsx(["p-1.5 rounded-lg border cursor-pointer", get(b).isActive ? "bg-red-50 text-red-600 border-red-200 hover:bg-red-100" : "bg-emerald-50 text-emerald-600 border-emerald-200 hover:bg-emerald-100"].join(" "))]);
						delegated("click", button_6, (e) => {
							e.preventDefault();
							e.stopPropagation();
							startEdit(get(b));
						});
						delegated("click", button_7, (e) => {
							e.preventDefault();
							e.stopPropagation();
							handleToggleStatus(get(b), e);
						});
						append($$anchor, fragment_16);
					};
					var d_8 = user_derived(() => hasRole("master_accountant"));
					if_block(node_42, ($$render) => {
						if (get(d_8)) $$render(consequent_25);
					});
					reset(div_31);
					reset(div_30);
					reset(a);
					template_effect(($0) => {
						set_attribute(a, "href", `/banks/${get(b).id}`);
						set_text(text_25, get(b).bankName);
						set_text(text_26, get(b).accountNumber);
						set_text(text_27, `ID: #${get(b).id ?? ""}`);
						set_class(span_13, 1, $0);
						set_text(text_28, get(b).isActive ? "Active" : "Inactive");
					}, [() => clsx(["text-[9px] font-semibold px-2 py-0.5 rounded-full border", get(b).isActive ? "text-emerald-700 bg-emerald-50 border-emerald-200" : "text-muted-foreground bg-muted border-border"].join(" "))]);
					append($$anchor, a);
				});
				reset(div_27);
				template_effect(() => set_text(text_24, get(banks).length));
				append($$anchor, fragment_15);
			};
			if_block(node_33, ($$render) => {
				if (get(loading)) $$render(consequent_21);
				else if (get(banks).length === 0) $$render(consequent_22, 1);
				else $$render(alternate_6, -1);
			});
			append($$anchor, fragment_12);
		};
		if_block(node_32, ($$render) => {
			if (get(errorMsg)) $$render(consequent_20);
			else $$render(alternate_7, -1);
		});
		append($$anchor, fragment_10);
	};
	if_block(node_25, ($$render) => {
		if (get(activeTab) === "pending") $$render(consequent_19);
		else $$render(alternate_8, -1);
	});
	reset(div);
	append($$anchor, div);
	pop();
	$$cleanup();
}
delegate(["click"]);
//#endregion
export { _page as component };

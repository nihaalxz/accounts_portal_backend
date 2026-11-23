import { B as append, Bt as reset, Ct as user_derived, D as head, G as text, H as from_html, I as if_block, J as event, K as delegate, N as each, Nt as pop, Pt as push, Q as get, R as set_text, T as clsx, _ as set_attribute, b as bind_select_value, bt as state, dt as $document, g as remove_input_defaults, gt as proxy, ht as sibling, it as effect, m as bind_value, ot as template_effect, pt as child, q as delegated, r as onMount, ut as remove_textarea_child, vt as set, w as set_class, zt as next } from "../chunks/dXkmWTgM.js";
import { t as goto } from "../chunks/C3hEdzIU.js";
import "../chunks/DhaYE-8x.js";
import { t as apiFetch } from "../chunks/BrheXSat.js";
import { i as hasRole } from "../chunks/NoQv1diG.js";
import { t as addToast } from "../chunks/CbPRQHfn.js";
import { t as Arrow_left } from "../chunks/Bn7x0kyr.js";
import { t as Check } from "../chunks/blG6JRe72.js";
import { t as Clock } from "../chunks/CZu1L_RP2.js";
import { t as Layers } from "../chunks/CFg-aOba.js";
import { t as Search } from "../chunks/D7t9qluE.js";
import { t as Triangle_alert } from "../chunks/BKenZzGW.js";
import { t as X } from "../chunks/wXHc9RNY.js";
import { t as Button } from "../chunks/BhXsq3bC2.js";
import "../chunks/BKh7yVXb2.js";
import { i as createExpenseHeader, o as getExpenseHeaders } from "../chunks/D98tbcG8.js";
//#region src/routes/(app)/payments/expenses/create-header/+page.svelte
var root = from_html(`<span class="px-3 py-1 bg-amber-500/10 text-amber-600 border border-amber-500/20 rounded-xl text-xs font-semibold flex items-center gap-1"><!> </span>`);
var root_1 = from_html(`<div class="flex items-start gap-3 bg-amber-50 border border-amber-200 dark:bg-amber-950/20 dark:border-amber-800 rounded-2xl px-4 py-3 text-xs text-amber-800 dark:text-amber-300"><!> <div><span class="font-bold"> </span> <span class="ml-1 text-amber-700 dark:text-amber-400"><!></span></div></div>`);
var root_2 = from_html(`<div class="py-12 text-center text-muted-foreground">Loading category headers...</div>`);
var root_3 = from_html(`<div class="py-12 text-center text-muted-foreground space-y-1"><p class="font-semibold text-foreground">No category headers found</p> <p class="text-xs">No headers match your search criteria or none have been created yet.</p></div>`);
var root_4 = from_html(`<th class="p-3 w-24 text-center">Actions</th>`);
var root_5 = from_html(`<span class="px-2 py-0.5 rounded-full text-[9px] font-bold bg-amber-500/10 text-amber-600 border border-amber-500/20 uppercase tracking-wider flex items-center gap-1"><!> Pending Approval</span>`);
var root_6 = from_html(`<span class="text-[10px] text-muted-foreground">Submitted by <span class="font-semibold text-foreground"> </span></span>`);
var root_7 = from_html(`<div class="flex items-center justify-center gap-1"><button class="p-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 text-xs font-semibold cursor-pointer disabled:opacity-50" title="Approve Category Header"><!></button> <button class="p-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 text-xs font-semibold cursor-pointer disabled:opacity-50" title="Reject Request"><!></button></div>`);
var root_8 = from_html(`<span class="text-[10px] text-muted-foreground font-semibold">Active</span>`);
var root_9 = from_html(`<td class="p-3 text-center"><!></td>`);
var root_10 = from_html(`<tr><td class="p-3 text-center text-muted-foreground font-mono"> </td><td class="p-3"><div class="flex flex-col gap-0.5"><span class="font-bold text-foreground flex items-center gap-1.5"> <!></span> <!></div></td><td class="p-3"><span> </span></td><td class="p-3 text-muted-foreground truncate max-w-[200px]"> </td><td class="p-3 text-muted-foreground font-mono text-[11px]"> </td><!></tr>`);
var root_11 = from_html(`<div class="overflow-x-auto border border-border rounded-xl"><table class="w-full text-left border-collapse"><thead><tr class="bg-muted/40 border-b border-border font-semibold text-muted-foreground"><th class="p-3 w-12 text-center">#</th><th class="p-3">Category Name</th><th class="p-3 w-28">Accounting Bucket</th><th class="p-3">Description</th><th class="p-3 w-32">Status / Date</th><!></tr></thead><tbody class="divide-y divide-border/60"></tbody></table></div>`);
var root_12 = from_html(`<div class="max-w-6xl mx-auto space-y-6"><div class="space-y-2"><button class="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground cursor-pointer transition-colors"><!> Back to Treasury Payments</button> <div class="flex items-center justify-between"><div><h1 class="text-xl font-bold text-foreground">Expense Categories & Treasury Headers</h1> <p class="text-xs text-muted-foreground">Register and view classification headers for operational expenses, asset purchases, income receipts, and capital deposits.</p></div> <div class="flex items-center gap-2"><!> <span class="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-xl text-xs font-semibold"> </span></div></div></div> <!> <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"><form class="lg:col-span-4 bg-card border border-border rounded-2xl p-5 shadow-xs space-y-4 text-xs"><div class="flex items-center gap-2 pb-2 border-b border-border"><!> <h2 class="font-bold text-foreground text-sm"> </h2></div> <div class="space-y-1.5"><label for="name" class="font-semibold text-muted-foreground">Category Name</label> <input id="name" type="text" required="" placeholder="e.g., Office Rent, Software Subscriptions" class="h-10 w-full bg-background border border-border rounded-xl px-3 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground"/></div> <div class="space-y-1.5"><label for="category" class="font-semibold text-muted-foreground">Accounting Bucket (Category)</label> <select id="category" class="h-10 w-full bg-background border border-border rounded-xl px-2 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground"><option>Expenses (Operating Payout)</option><option>Asset (Asset Acquisition)</option><option>Liability (Debt / Settlement)</option><option>Income (Incoming Receipt)</option><option>Capital (Owner Investment)</option></select></div> <div class="space-y-1.5"><label for="description" class="font-semibold text-muted-foreground">Description (Optional)</label> <textarea id="description" rows="3" placeholder="Describe what type of charges map to this header..." class="w-full bg-background border border-border rounded-xl p-3 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground resize-y"></textarea></div> <div class="flex items-center justify-end gap-2 pt-3 border-t border-border"><!> <!></div></form> <div class="lg:col-span-8 bg-card border border-border rounded-2xl p-5 shadow-xs space-y-4 text-xs"><div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-border"><div><h2 class="font-bold text-foreground text-sm">Category Headers & Pending Requests</h2> <p class="text-xs text-muted-foreground">List of active expense headers and pending approval requests</p></div> <div class="flex items-center gap-2 w-full sm:w-auto"><div class="relative flex-1 sm:w-48"><!> <input type="text" placeholder="Search headers..." class="h-9 w-full bg-background border border-border rounded-xl pl-8 pr-3 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20"/></div> <select class="h-9 bg-background border border-border rounded-xl px-2 text-xs focus:outline-none"><option>All Buckets</option><option>Expenses</option><option>Asset</option><option>Liability</option><option>Income</option><option>Capital</option></select></div></div> <!></div></div></div>`);
function _page($$anchor, $$props) {
	push($$props, true);
	let name = state("");
	let category = state("Expenses");
	let description = state("");
	let isSubmitting = state(false);
	let isLoadingHeaders = state(true);
	let approvingId = state(null);
	let headers = state(proxy([]));
	let pendingList = state(proxy([]));
	let searchVal = state("");
	let bucketFilter = state("all");
	const allDisplayHeaders = user_derived(() => () => {
		const result = [];
		for (const p of get(pendingList)) try {
			const payload = JSON.parse(p.payloadJson);
			result.push({
				id: -p.id,
				name: payload.name || payload.Name || "Unnamed Header",
				category: payload.category || payload.Category || "Expenses",
				description: payload.description || payload.Description || null,
				createdAt: p.submittedAt,
				isPending: true,
				pendingId: p.id,
				submittedByName: p.submittedByName
			});
		} catch {}
		for (const h of get(headers)) result.push({
			id: h.id,
			name: h.name,
			category: h.category,
			description: h.description,
			createdAt: h.createdAt,
			isPending: false
		});
		return result;
	});
	const filteredHeaders = user_derived(() => () => {
		return get(allDisplayHeaders)().filter((h) => {
			const matchesSearch = !get(searchVal).trim() || h.name.toLowerCase().includes(get(searchVal).toLowerCase()) || (h.description || "").toLowerCase().includes(get(searchVal).toLowerCase());
			const matchesBucket = get(bucketFilter) === "all" || h.category.toLowerCase() === get(bucketFilter).toLowerCase();
			return matchesSearch && matchesBucket;
		});
	});
	async function loadHeaders() {
		try {
			set(isLoadingHeaders, true);
			const [activeRes, pendingRes] = await Promise.all([getExpenseHeaders(), apiFetch("api/pending-approvals?status=pending").catch(() => [])]);
			set(headers, activeRes, true);
			set(pendingList, (pendingRes || []).filter((p) => p.entityType === "payment_header" || p.entityType === "account_category" || p.entityType === "expense_header"), true);
		} catch (err) {
			addToast(err.message || "Failed to fetch existing headers.", "error");
		} finally {
			set(isLoadingHeaders, false);
		}
	}
	async function approvePendingHeader(pendingId) {
		set(approvingId, pendingId, true);
		try {
			await apiFetch(`api/pending-approvals/${pendingId}/approve`, { method: "POST" });
			addToast("Payment Category Header approved and registered successfully.", "success");
			await loadHeaders();
		} catch (err) {
			addToast(err.message || "Failed to approve category header.", "error");
		} finally {
			set(approvingId, null);
		}
	}
	async function rejectPendingHeader(pendingId) {
		set(approvingId, pendingId, true);
		try {
			await apiFetch(`api/pending-approvals/${pendingId}/reject`, { method: "POST" });
			addToast("Pending category header request rejected.", "success");
			await loadHeaders();
		} catch (err) {
			addToast(err.message || "Failed to reject request.", "error");
		} finally {
			set(approvingId, null);
		}
	}
	async function handleSubmit(e) {
		e.preventDefault();
		if (!get(name).trim()) {
			addToast("Please enter a category name.", "error");
			return;
		}
		set(isSubmitting, true);
		try {
			await createExpenseHeader({
				name: get(name).trim(),
				category: get(category),
				description: get(description).trim() ? get(description).trim() : null
			});
			addToast(`Payment Category '${get(name).trim()}' submitted / created successfully.`, "success");
			set(name, "");
			set(description, "");
			await loadHeaders();
		} catch (err) {
			addToast(err.message || "Failed to create expense category.", "error");
		} finally {
			set(isSubmitting, false);
		}
	}
	onMount(() => {
		loadHeaders();
	});
	var div = root_12();
	head("1z0fl6a", ($$anchor) => {
		effect(() => {
			$document.title = "Manage Expense Categories — Accounts Portal";
		});
	});
	var div_1 = child(div);
	var button = child(div_1);
	Arrow_left(child(button), { class: "h-3.5 w-3.5" });
	next();
	reset(button);
	var div_2 = sibling(button, 2);
	var div_3 = sibling(child(div_2), 2);
	var node_1 = child(div_3);
	var consequent = ($$anchor) => {
		var span = root();
		var node_2 = child(span);
		Clock(node_2, { class: "h-3.5 w-3.5" });
		var text = sibling(node_2);
		reset(span);
		template_effect(() => set_text(text, ` ${get(pendingList).length ?? ""} Pending Approval`));
		append($$anchor, span);
	};
	if_block(node_1, ($$render) => {
		if (get(pendingList).length > 0) $$render(consequent);
	});
	var span_1 = sibling(node_1, 2);
	var text_1 = child(span_1);
	reset(span_1);
	reset(div_3);
	reset(div_2);
	reset(div_1);
	var node_3 = sibling(div_1, 2);
	var consequent_2 = ($$anchor) => {
		var div_4 = root_1();
		var node_4 = child(div_4);
		Triangle_alert(node_4, { class: "h-4 w-4 shrink-0 mt-0.5 text-amber-600" });
		var div_5 = sibling(node_4, 2);
		var span_2 = child(div_5);
		var text_2 = child(span_2);
		reset(span_2);
		var span_3 = sibling(span_2, 2);
		var node_5 = child(span_3);
		var consequent_1 = ($$anchor) => {
			append($$anchor, text("You can approve or reject them directly from the table below."));
		};
		var d = user_derived(() => hasRole("master_accountant"));
		var alternate = ($$anchor) => {
			append($$anchor, text("Submitted headers will become active once approved by a Master Accountant."));
		};
		if_block(node_5, ($$render) => {
			if (get(d)) $$render(consequent_1);
			else $$render(alternate, -1);
		});
		reset(span_3);
		reset(div_5);
		reset(div_4);
		template_effect(() => set_text(text_2, `${get(pendingList).length ?? ""} payment category ${get(pendingList).length === 1 ? "header request is" : "header requests are"} awaiting Master Accountant approval.`));
		append($$anchor, div_4);
	};
	if_block(node_3, ($$render) => {
		if (get(pendingList).length > 0) $$render(consequent_2);
	});
	var div_6 = sibling(node_3, 2);
	var form = child(div_6);
	var div_7 = child(form);
	var node_6 = child(div_7);
	Layers(node_6, { class: "h-4 w-4 text-primary shrink-0" });
	var h2 = sibling(node_6, 2);
	var text_5 = child(h2, true);
	reset(h2);
	reset(div_7);
	var div_8 = sibling(div_7, 2);
	var input = sibling(child(div_8), 2);
	remove_input_defaults(input);
	reset(div_8);
	var div_9 = sibling(div_8, 2);
	var select = sibling(child(div_9), 2);
	var option = child(select);
	option.value = option.__value = "Expenses";
	var option_1 = sibling(option);
	option_1.value = option_1.__value = "Asset";
	var option_2 = sibling(option_1);
	option_2.value = option_2.__value = "Liability";
	var option_3 = sibling(option_2);
	option_3.value = option_3.__value = "Income";
	var option_4 = sibling(option_3);
	option_4.value = option_4.__value = "Capital";
	reset(select);
	reset(div_9);
	var div_10 = sibling(div_9, 2);
	var textarea = sibling(child(div_10), 2);
	remove_textarea_child(textarea);
	reset(div_10);
	var div_11 = sibling(div_10, 2);
	var node_7 = child(div_11);
	Button(node_7, {
		variant: "outline",
		class: "rounded-xl px-4 py-4 font-semibold cursor-pointer text-xs",
		get disabled() {
			return get(isSubmitting);
		},
		onclick: () => goto("/payments"),
		children: ($$anchor, $$slotProps) => {
			next();
			append($$anchor, text("Done"));
		},
		$$slots: { default: true }
	});
	Button(sibling(node_7, 2), {
		type: "submit",
		class: "rounded-xl px-4 py-4 font-semibold cursor-pointer text-xs",
		get disabled() {
			return get(isSubmitting);
		},
		children: ($$anchor, $$slotProps) => {
			next();
			var text_7 = text();
			template_effect(($0) => set_text(text_7, $0), [() => get(isSubmitting) ? "Submitting..." : hasRole("master_accountant") ? "Create Header" : "Submit for Approval"]);
			append($$anchor, text_7);
		},
		$$slots: { default: true }
	});
	reset(div_11);
	reset(form);
	var div_12 = sibling(form, 2);
	var div_13 = child(div_12);
	var div_14 = sibling(child(div_13), 2);
	var div_15 = child(div_14);
	var node_9 = child(div_15);
	Search(node_9, { class: "h-3.5 w-3.5 absolute left-2.5 top-3 text-muted-foreground" });
	var input_1 = sibling(node_9, 2);
	remove_input_defaults(input_1);
	reset(div_15);
	var select_1 = sibling(div_15, 2);
	var option_5 = child(select_1);
	option_5.value = option_5.__value = "all";
	var option_6 = sibling(option_5);
	option_6.value = option_6.__value = "Expenses";
	var option_7 = sibling(option_6);
	option_7.value = option_7.__value = "Asset";
	var option_8 = sibling(option_7);
	option_8.value = option_8.__value = "Liability";
	var option_9 = sibling(option_8);
	option_9.value = option_9.__value = "Income";
	var option_10 = sibling(option_9);
	option_10.value = option_10.__value = "Capital";
	reset(select_1);
	reset(div_14);
	reset(div_13);
	var node_10 = sibling(div_13, 2);
	var consequent_3 = ($$anchor) => {
		append($$anchor, root_2());
	};
	var consequent_4 = ($$anchor) => {
		append($$anchor, root_3());
	};
	var d_1 = user_derived(() => get(filteredHeaders)().length === 0);
	var alternate_2 = ($$anchor) => {
		var div_18 = root_11();
		var table = child(div_18);
		var thead = child(table);
		var tr = child(thead);
		var node_11 = sibling(child(tr), 5);
		var consequent_5 = ($$anchor) => {
			append($$anchor, root_4());
		};
		var d_2 = user_derived(() => hasRole("master_accountant"));
		if_block(node_11, ($$render) => {
			if (get(d_2)) $$render(consequent_5);
		});
		reset(tr);
		reset(thead);
		var tbody = sibling(thead);
		each(tbody, 23, () => get(filteredHeaders)(), (h) => h.isPending ? `pending-${h.pendingId}` : `active-${h.id}`, ($$anchor, h, idx) => {
			var tr_1 = root_10();
			var td = child(tr_1);
			var text_8 = child(td, true);
			reset(td);
			var td_1 = sibling(td);
			var div_19 = child(td_1);
			var span_4 = child(div_19);
			var text_9 = child(span_4);
			var node_12 = sibling(text_9);
			var consequent_6 = ($$anchor) => {
				var span_5 = root_5();
				Clock(child(span_5), { class: "h-2.5 w-2.5" });
				next();
				reset(span_5);
				append($$anchor, span_5);
			};
			if_block(node_12, ($$render) => {
				if (get(h).isPending) $$render(consequent_6);
			});
			reset(span_4);
			var node_14 = sibling(span_4, 2);
			var consequent_7 = ($$anchor) => {
				var span_6 = root_6();
				var span_7 = sibling(child(span_6));
				var text_10 = child(span_7, true);
				reset(span_7);
				reset(span_6);
				template_effect(() => set_text(text_10, get(h).submittedByName));
				append($$anchor, span_6);
			};
			if_block(node_14, ($$render) => {
				if (get(h).isPending && get(h).submittedByName) $$render(consequent_7);
			});
			reset(div_19);
			reset(td_1);
			var td_2 = sibling(td_1);
			var span_8 = child(td_2);
			var text_11 = child(span_8, true);
			reset(span_8);
			reset(td_2);
			var td_3 = sibling(td_2);
			var text_12 = child(td_3, true);
			reset(td_3);
			var td_4 = sibling(td_3);
			var text_13 = child(td_4, true);
			reset(td_4);
			var node_15 = sibling(td_4);
			var consequent_9 = ($$anchor) => {
				var td_5 = root_9();
				var node_16 = child(td_5);
				var consequent_8 = ($$anchor) => {
					var div_20 = root_7();
					var button_1 = child(div_20);
					Check(child(button_1), { class: "h-3.5 w-3.5" });
					reset(button_1);
					var button_2 = sibling(button_1, 2);
					X(child(button_2), { class: "h-3.5 w-3.5" });
					reset(button_2);
					reset(div_20);
					template_effect(() => {
						button_1.disabled = get(approvingId) === get(h).pendingId;
						button_2.disabled = get(approvingId) === get(h).pendingId;
					});
					delegated("click", button_1, () => approvePendingHeader(get(h).pendingId));
					delegated("click", button_2, () => rejectPendingHeader(get(h).pendingId));
					append($$anchor, div_20);
				};
				var alternate_1 = ($$anchor) => {
					append($$anchor, root_8());
				};
				if_block(node_16, ($$render) => {
					if (get(h).isPending && get(h).pendingId) $$render(consequent_8);
					else $$render(alternate_1, -1);
				});
				reset(td_5);
				append($$anchor, td_5);
			};
			var d_3 = user_derived(() => hasRole("master_accountant"));
			if_block(node_15, ($$render) => {
				if (get(d_3)) $$render(consequent_9);
			});
			reset(tr_1);
			template_effect(($0, $1) => {
				set_class(tr_1, 1, clsx(get(h).isPending ? "bg-amber-500/5 hover:bg-amber-500/10 transition-colors" : "hover:bg-muted/10 transition-colors"));
				set_text(text_8, get(idx) + 1);
				set_text(text_9, `${get(h).name ?? ""} `);
				set_class(span_8, 1, $0);
				set_text(text_11, get(h).category);
				set_attribute(td_3, "title", get(h).description || "N/A");
				set_text(text_12, get(h).description || "—");
				set_text(text_13, $1);
			}, [() => clsx(["px-2 py-0.5 rounded-full text-[10px] font-bold border uppercase tracking-wider", get(h).category === "Expenses" ? "bg-blue-500/10 text-blue-600 border-blue-500/20" : get(h).category === "Asset" ? "bg-purple-500/10 text-purple-600 border-purple-500/20" : get(h).category === "Income" ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20" : get(h).category === "Capital" ? "bg-amber-500/10 text-amber-600 border-amber-500/20" : "bg-rose-500/10 text-rose-600 border-rose-500/20"].join(" ")), () => new Date(get(h).createdAt).toLocaleDateString()]);
			append($$anchor, tr_1);
		});
		reset(tbody);
		reset(table);
		reset(div_18);
		append($$anchor, div_18);
	};
	if_block(node_10, ($$render) => {
		if (get(isLoadingHeaders)) $$render(consequent_3);
		else if (get(d_1)) $$render(consequent_4, 1);
		else $$render(alternate_2, -1);
	});
	reset(div_12);
	reset(div_6);
	reset(div);
	template_effect(($0) => {
		set_text(text_1, `${get(headers).length ?? ""} Active Headers`);
		set_text(text_5, $0);
	}, [() => hasRole("master_accountant") ? "Create New Category" : "Submit Category Request"]);
	delegated("click", button, () => goto("/payments"));
	event("submit", form, handleSubmit);
	bind_value(input, () => get(name), ($$value) => set(name, $$value));
	bind_select_value(select, () => get(category), ($$value) => set(category, $$value));
	bind_value(textarea, () => get(description), ($$value) => set(description, $$value));
	bind_value(input_1, () => get(searchVal), ($$value) => set(searchVal, $$value));
	bind_select_value(select_1, () => get(bucketFilter), ($$value) => set(bucketFilter, $$value));
	append($$anchor, div);
	pop();
}
delegate(["click"]);
//#endregion
export { _page as component };

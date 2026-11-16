import { B as append, Bt as reset, Ct as user_derived, D as head, G as text, H as from_html, I as if_block, J as event, K as delegate, N as each, Nt as pop, P as index, Pt as push, Q as get, R as set_text, V as comment, b as bind_select_value, bt as state, d as bind_checked, dt as $document, g as remove_input_defaults, gt as proxy, ht as sibling, it as effect, m as bind_value, mt as first_child, ot as template_effect, pt as child, q as delegated, r as onMount, ut as remove_textarea_child, vt as set, w as set_class, zt as next } from "../chunks/dXkmWTgM.js";
import "../chunks/DhaYE-8x.js";
import { t as apiFetch } from "../chunks/B_HuiSEz.js";
import { i as hasRole } from "../chunks/Clfal68w.js";
import { r as toast } from "../chunks/CbPRQHfn.js";
import { t as Circle_check } from "../chunks/qB0lJ_dM2.js";
import { t as Circle_x } from "../chunks/D_QjCLHZ2.js";
import { t as Globe } from "../chunks/MqPvjOPE2.js";
import { t as Package } from "../chunks/BUmdUS28.js";
import { t as Pen_line } from "../chunks/CvjCDChO.js";
import { t as Plus } from "../chunks/BObidJ7B.js";
import { t as Refresh_cw } from "../chunks/DpTJy0Wb.js";
import { t as Search } from "../chunks/D7t9qluE.js";
import { t as Shield_alert } from "../chunks/BqY57apW.js";
import { t as X } from "../chunks/wXHc9RNY.js";
import { t as Button } from "../chunks/BhXsq3bC.js";
//#region src/features/visa-master/api.ts
var BASE = "api/visa-master";
async function getVisaCountries(includeInactive = true) {
	return apiFetch(`${BASE}/countries?includeInactive=${includeInactive}`);
}
async function createVisaCountry(data) {
	return apiFetch(`${BASE}/countries`, {
		method: "POST",
		body: JSON.stringify(data)
	});
}
async function updateVisaCountry(id, data) {
	return apiFetch(`${BASE}/countries/${id}`, {
		method: "PUT",
		body: JSON.stringify(data)
	});
}
async function getVisaPackages(countryId, includeInactive = true) {
	let url = `${BASE}/packages?includeInactive=${includeInactive}`;
	if (countryId) url += `&countryId=${countryId}`;
	return apiFetch(url);
}
async function createVisaPackage(data) {
	return apiFetch(`${BASE}/packages`, {
		method: "POST",
		body: JSON.stringify(data)
	});
}
async function updateVisaPackage(id, data) {
	return apiFetch(`${BASE}/packages/${id}`, {
		method: "PUT",
		body: JSON.stringify(data)
	});
}
//#endregion
//#region src/routes/(app)/master-data/visa/+page.svelte
var root = from_html(`<div class="p-12 text-center border border-border rounded-2xl bg-card space-y-4 max-w-lg mx-auto my-12 shadow-sm"><!> <div class="space-y-1"><h2 class="text-base font-bold text-foreground">Access Restricted</h2> <p class="text-xs text-muted-foreground">Visa Master Data configuration is restricted exclusively to Master Accountants. Please contact your system administrator if you require access.</p></div></div>`);
var root_1 = from_html(`<!> <span>Refresh</span>`, 1);
var root_2 = from_html(`<!> <span>Add Country</span>`, 1);
var root_3 = from_html(`<!> <span>Add Visa Package</span>`, 1);
var root_4 = from_html(`<div class="animate-pulse space-y-4"><div class="h-10 bg-muted rounded-xl w-64"></div> <div class="h-80 bg-muted rounded-2xl"></div></div>`);
var root_5 = from_html(`<!> Add First Country`, 1);
var root_6 = from_html(`<div class="p-12 text-center text-muted-foreground border border-border rounded-2xl bg-card space-y-3"><p>No visa countries found in master records.</p> <!></div>`);
var root_7 = from_html(`<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-600 border border-emerald-500/20"><!> Active</span>`);
var root_8 = from_html(`<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-rose-500/10 text-rose-600 border border-rose-500/20"><!> Inactive</span>`);
var root_9 = from_html(`<!> Edit`, 1);
var root_10 = from_html(`<tr class="hover:bg-muted/10 transition-colors"><td class="p-4 font-mono font-medium text-muted-foreground"> </td><td class="p-4 font-bold text-foreground"> </td><td class="p-4 font-mono text-muted-foreground"> </td><td class="p-4 text-center font-mono font-bold text-foreground"> </td><td class="p-4 text-center"><!></td><td class="p-4 text-right"><div class="flex items-center justify-end gap-2"><!> <!></div></td></tr>`);
var root_11 = from_html(`<div class="bg-card border border-border rounded-2xl overflow-hidden shadow-xs"><div class="overflow-x-auto"><table class="w-full text-left border-collapse text-xs"><thead><tr class="bg-muted/30 border-b border-border text-muted-foreground font-semibold"><th class="p-4 w-20">ID</th><th class="p-4">Country Name</th><th class="p-4 w-32">ISO / Short Code</th><th class="p-4 text-center w-32">Active Packages</th><th class="p-4 text-center w-32">Status</th><th class="p-4 text-right w-40">Actions</th></tr></thead><tbody class="divide-y divide-border/60"></tbody></table></div></div>`);
var root_12 = from_html(`<div class="space-y-4"><div class="relative w-full max-w-[320px]"><span class="absolute inset-y-0 left-3 flex items-center text-muted-foreground/60"><!></span> <input type="text" placeholder="Search country by name or code..." class="w-full pl-9 pr-4 py-1.5 text-xs rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 placeholder-muted-foreground/60"/></div> <!></div>`);
var root_13 = from_html(`<option> </option>`);
var root_14 = from_html(`<!> Add First Visa Package`, 1);
var root_15 = from_html(`<div class="p-12 text-center text-muted-foreground border border-border rounded-2xl bg-card space-y-3"><p>No visa packages found matching your filter.</p> <!></div>`);
var root_16 = from_html(`<tr class="hover:bg-muted/10 transition-colors"><td class="p-4 font-mono font-medium text-muted-foreground"> </td><td class="p-4 font-bold text-foreground"> </td><td class="p-4 font-semibold text-primary"> </td><td class="p-4 text-muted-foreground"> </td><td class="p-4 text-center"><!></td><td class="p-4 text-right"><div class="flex items-center justify-end gap-2"><!> <!></div></td></tr>`);
var root_17 = from_html(`<div class="bg-card border border-border rounded-2xl overflow-hidden shadow-xs"><div class="overflow-x-auto"><table class="w-full text-left border-collapse text-xs"><thead><tr class="bg-muted/30 border-b border-border text-muted-foreground font-semibold"><th class="p-4 w-20">ID</th><th class="p-4">Package Name</th><th class="p-4">Destination Country</th><th class="p-4">Description / Details</th><th class="p-4 text-center w-32">Status</th><th class="p-4 text-right w-40">Actions</th></tr></thead><tbody class="divide-y divide-border/60"></tbody></table></div></div>`);
var root_18 = from_html(`<div class="space-y-4"><div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3"><div class="relative w-full max-w-[320px]"><span class="absolute inset-y-0 left-3 flex items-center text-muted-foreground/60"><!></span> <input type="text" placeholder="Search package by name or description..." class="w-full pl-9 pr-4 py-1.5 text-xs rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 placeholder-muted-foreground/60"/></div> <div class="flex items-center gap-2"><label for="countryFilter" class="text-xs text-muted-foreground font-semibold">Filter Country:</label> <select id="countryFilter" class="h-9 px-3 text-xs bg-background border border-border rounded-xl text-foreground focus:outline-none cursor-pointer"><option>All Countries</option><!></select></div></div> <!></div>`);
var root_19 = from_html(`<div class="flex items-center gap-2 pt-2"><input id="cActive" type="checkbox" class="rounded border-border text-primary"/> <label for="cActive" class="font-semibold text-foreground cursor-pointer">Active Status</label></div>`);
var root_20 = from_html(`<div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-xs animate-in fade-in duration-200"><div class="w-full max-w-md bg-card border border-border rounded-2xl p-6 shadow-lg space-y-4 text-xs"><div class="flex items-center justify-between border-b border-border pb-3"><h2 class="text-sm font-bold text-foreground flex items-center gap-2"><!> <span> </span></h2> <button type="button" class="text-muted-foreground hover:text-foreground"><!></button></div> <form class="space-y-4"><div class="space-y-1.5"><label for="cName" class="font-semibold text-muted-foreground">Country Name *</label> <input id="cName" type="text" required="" placeholder="e.g. Saudi Arabia, Turkey, Japan" class="h-9 w-full bg-background border border-border rounded-xl px-3 text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"/></div> <div class="space-y-1.5"><label for="cCode" class="font-semibold text-muted-foreground">ISO / Short Code (Optional)</label> <input id="cCode" type="text" placeholder="e.g. SA, TR, JP" class="h-9 w-full bg-background border border-border rounded-xl px-3 text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 uppercase"/></div> <!> <div class="flex items-center justify-end gap-2 pt-3 border-t border-border"><!> <!></div></form></div></div>`);
var root_21 = from_html(`<div class="flex items-center gap-2 pt-2"><input id="pActive" type="checkbox" class="rounded border-border text-primary"/> <label for="pActive" class="font-semibold text-foreground cursor-pointer">Active Status</label></div>`);
var root_22 = from_html(`<div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-xs animate-in fade-in duration-200"><div class="w-full max-w-md bg-card border border-border rounded-2xl p-6 shadow-lg space-y-4 text-xs"><div class="flex items-center justify-between border-b border-border pb-3"><h2 class="text-sm font-bold text-foreground flex items-center gap-2"><!> <span> </span></h2> <button type="button" class="text-muted-foreground hover:text-foreground"><!></button></div> <form class="space-y-4"><div class="space-y-1.5"><label for="pCountry" class="font-semibold text-muted-foreground">Destination Country *</label> <select id="pCountry" required="" class="h-9 w-full bg-background border border-border rounded-xl px-3 text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"><option>-- Select Country --</option><!></select></div> <div class="space-y-1.5"><label for="pName" class="font-semibold text-muted-foreground">Visa Package Name *</label> <input id="pName" type="text" required="" placeholder="e.g. Tourist Visa, Umrah Visa, Business Visit" class="h-9 w-full bg-background border border-border rounded-xl px-3 text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"/></div> <div class="space-y-1.5"><label for="pDesc" class="font-semibold text-muted-foreground">Description / Notes (Optional)</label> <textarea id="pDesc" rows="2" placeholder="Enter details, required documents, or validity notes..." class="w-full bg-background border border-border rounded-xl p-3 text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 resize-y"></textarea></div> <!> <div class="flex items-center justify-end gap-2 pt-3 border-t border-border"><!> <!></div></form></div></div>`);
var root_23 = from_html(`<div class="space-y-6"><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"><div class="flex flex-col gap-1"><h1 class="text-xl font-bold text-foreground flex items-center gap-2"><!> Visa Master Management</h1> <p class="text-xs text-muted-foreground">Configure destination countries and visa package types dynamically for sales visa bookings.</p></div> <div class="flex items-center gap-2"><!></div></div> <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border pb-3"><div class="flex items-center gap-2 bg-muted/30 p-1 rounded-xl border border-border/60"><button type="button"><!> <span> </span></button> <button type="button"><!> <span> </span></button></div> <!></div> <!></div> <!> <!>`, 1);
function _page($$anchor, $$props) {
	push($$props, true);
	let activeTab = state("countries");
	let loading = state(true);
	let countries = state(proxy([]));
	let countrySearch = state("");
	let showCountryModal = state(false);
	let editingCountry = state(null);
	let countryFormName = state("");
	let countryFormCode = state("");
	let countryFormActive = state(true);
	let savingCountry = state(false);
	let packages = state(proxy([]));
	let packageSearch = state("");
	let packageCountryFilter = state("");
	let showPackageModal = state(false);
	let editingPackage = state(null);
	let packageFormCountryId = state("");
	let packageFormName = state("");
	let packageFormDescription = state("");
	let packageFormActive = state(true);
	let savingPackage = state(false);
	const filteredCountries = user_derived(() => {
		let list = get(countries);
		if (get(countrySearch).trim()) {
			const term = get(countrySearch).toLowerCase().trim();
			list = list.filter((c) => c.name.toLowerCase().includes(term) || c.code && c.code.toLowerCase().includes(term));
		}
		return list;
	});
	const filteredPackages = user_derived(() => {
		let list = get(packages);
		if (get(packageCountryFilter)) list = list.filter((p) => String(p.countryId) === get(packageCountryFilter));
		if (get(packageSearch).trim()) {
			const term = get(packageSearch).toLowerCase().trim();
			list = list.filter((p) => p.name.toLowerCase().includes(term) || p.countryName.toLowerCase().includes(term) || p.description && p.description.toLowerCase().includes(term));
		}
		return list;
	});
	async function loadAllData() {
		if (!hasRole("master_accountant")) {
			set(loading, false);
			return;
		}
		set(loading, true);
		try {
			const [cList, pList] = await Promise.all([getVisaCountries(true), getVisaPackages(void 0, true)]);
			set(countries, cList || [], true);
			set(packages, pList || [], true);
		} catch (err) {
			toast.error(err.message || "Failed to load visa master data.");
		} finally {
			set(loading, false);
		}
	}
	function openAddCountryModal() {
		set(editingCountry, null);
		set(countryFormName, "");
		set(countryFormCode, "");
		set(countryFormActive, true);
		set(showCountryModal, true);
	}
	function openEditCountryModal(c) {
		set(editingCountry, c, true);
		set(countryFormName, c.name, true);
		set(countryFormCode, c.code || "", true);
		set(countryFormActive, c.isActive, true);
		set(showCountryModal, true);
	}
	async function handleSaveCountry(e) {
		e.preventDefault();
		if (!get(countryFormName).trim()) {
			toast.error("Country name is required.");
			return;
		}
		set(savingCountry, true);
		try {
			if (get(editingCountry)) {
				await updateVisaCountry(get(editingCountry).id, {
					name: get(countryFormName).trim(),
					code: get(countryFormCode).trim() ? get(countryFormCode).trim() : null,
					isActive: get(countryFormActive)
				});
				toast.success(`Country '${get(countryFormName)}' updated successfully.`);
			} else {
				await createVisaCountry({
					name: get(countryFormName).trim(),
					code: get(countryFormCode).trim() ? get(countryFormCode).trim() : null
				});
				toast.success(`Country '${get(countryFormName)}' created successfully.`);
			}
			set(showCountryModal, false);
			await loadAllData();
		} catch (err) {
			toast.error(err.message || "Failed to save country.");
		} finally {
			set(savingCountry, false);
		}
	}
	async function toggleCountryActive(c) {
		try {
			await updateVisaCountry(c.id, {
				name: c.name,
				code: c.code,
				isActive: !c.isActive
			});
			toast.success(`Country '${c.name}' ${!c.isActive ? "activated" : "deactivated"}.`);
			await loadAllData();
		} catch (err) {
			toast.error(err.message || "Failed to update country status.");
		}
	}
	function openAddPackageModal() {
		set(editingPackage, null);
		set(packageFormCountryId, get(countries).length > 0 && get(countries)[0] ? String(get(countries)[0].id) : "", true);
		set(packageFormName, "");
		set(packageFormDescription, "");
		set(packageFormActive, true);
		set(showPackageModal, true);
	}
	function openEditPackageModal(p) {
		set(editingPackage, p, true);
		set(packageFormCountryId, String(p.countryId), true);
		set(packageFormName, p.name, true);
		set(packageFormDescription, p.description || "", true);
		set(packageFormActive, p.isActive, true);
		set(showPackageModal, true);
	}
	async function handleSavePackage(e) {
		e.preventDefault();
		if (!get(packageFormCountryId)) {
			toast.error("Please select a destination country.");
			return;
		}
		if (!get(packageFormName).trim()) {
			toast.error("Visa package name is required.");
			return;
		}
		set(savingPackage, true);
		try {
			const countryId = parseInt(get(packageFormCountryId));
			if (get(editingPackage)) {
				await updateVisaPackage(get(editingPackage).id, {
					countryId,
					name: get(packageFormName).trim(),
					description: get(packageFormDescription).trim() ? get(packageFormDescription).trim() : null,
					isActive: get(packageFormActive)
				});
				toast.success(`Visa package '${get(packageFormName)}' updated successfully.`);
			} else {
				await createVisaPackage({
					countryId,
					name: get(packageFormName).trim(),
					description: get(packageFormDescription).trim() ? get(packageFormDescription).trim() : null
				});
				toast.success(`Visa package '${get(packageFormName)}' created successfully.`);
			}
			set(showPackageModal, false);
			await loadAllData();
		} catch (err) {
			toast.error(err.message || "Failed to save visa package.");
		} finally {
			set(savingPackage, false);
		}
	}
	async function togglePackageActive(p) {
		try {
			await updateVisaPackage(p.id, {
				countryId: p.countryId,
				name: p.name,
				description: p.description,
				isActive: !p.isActive
			});
			toast.success(`Package '${p.name}' ${!p.isActive ? "activated" : "deactivated"}.`);
			await loadAllData();
		} catch (err) {
			toast.error(err.message || "Failed to update package status.");
		}
	}
	onMount(() => {
		loadAllData();
	});
	var fragment = comment();
	head("udzymd", ($$anchor) => {
		effect(() => {
			$document.title = "Visa Master Configuration — Master Accounts";
		});
	});
	var node = first_child(fragment);
	var consequent = ($$anchor) => {
		var div = root();
		Shield_alert(child(div), { class: "h-12 w-12 text-amber-500 mx-auto" });
		next(2);
		reset(div);
		append($$anchor, div);
	};
	var d = user_derived(() => !hasRole("master_accountant"));
	var alternate_6 = ($$anchor) => {
		var fragment_1 = root_23();
		var div_1 = first_child(fragment_1);
		var div_2 = child(div_1);
		var div_3 = child(div_2);
		var h1 = child(div_3);
		Globe(child(h1), { class: "h-5 w-5 text-primary" });
		next();
		reset(h1);
		next(2);
		reset(div_3);
		var div_4 = sibling(div_3, 2);
		Button(child(div_4), {
			variant: "outline",
			class: "h-8.5 rounded-xl cursor-pointer",
			onclick: loadAllData,
			get disabled() {
				return get(loading);
			},
			children: ($$anchor, $$slotProps) => {
				var fragment_2 = root_1();
				var node_4 = first_child(fragment_2);
				{
					let $0 = user_derived(() => ["h-3.5 w-3.5 mr-1.5", get(loading) ? "animate-spin" : ""].join(" "));
					Refresh_cw(node_4, { get class() {
						return get($0);
					} });
				}
				next(2);
				append($$anchor, fragment_2);
			},
			$$slots: { default: true }
		});
		reset(div_4);
		reset(div_2);
		var div_5 = sibling(div_2, 2);
		var div_6 = child(div_5);
		var button = child(div_6);
		var node_5 = child(button);
		Globe(node_5, { class: "h-3.5 w-3.5 text-primary" });
		var span = sibling(node_5, 2);
		var text$1 = child(span);
		reset(span);
		reset(button);
		var button_1 = sibling(button, 2);
		var node_6 = child(button_1);
		Package(node_6, { class: "h-3.5 w-3.5 text-primary" });
		var span_1 = sibling(node_6, 2);
		var text_1 = child(span_1);
		reset(span_1);
		reset(button_1);
		reset(div_6);
		var node_7 = sibling(div_6, 2);
		var consequent_1 = ($$anchor) => {
			Button($$anchor, {
				class: "h-8.5 rounded-xl cursor-pointer flex items-center gap-1.5",
				onclick: openAddCountryModal,
				children: ($$anchor, $$slotProps) => {
					var fragment_4 = root_2();
					Plus(first_child(fragment_4), { class: "h-4 w-4" });
					next(2);
					append($$anchor, fragment_4);
				},
				$$slots: { default: true }
			});
		};
		var alternate = ($$anchor) => {
			Button($$anchor, {
				class: "h-8.5 rounded-xl cursor-pointer flex items-center gap-1.5",
				onclick: openAddPackageModal,
				children: ($$anchor, $$slotProps) => {
					var fragment_6 = root_3();
					Plus(first_child(fragment_6), { class: "h-4 w-4" });
					next(2);
					append($$anchor, fragment_6);
				},
				$$slots: { default: true }
			});
		};
		if_block(node_7, ($$render) => {
			if (get(activeTab) === "countries") $$render(consequent_1);
			else $$render(alternate, -1);
		});
		reset(div_5);
		var node_10 = sibling(div_5, 2);
		var consequent_2 = ($$anchor) => {
			append($$anchor, root_4());
		};
		var consequent_5 = ($$anchor) => {
			var div_8 = root_12();
			var div_9 = child(div_8);
			var span_2 = child(div_9);
			Search(child(span_2), { class: "h-4 w-4" });
			reset(span_2);
			var input = sibling(span_2, 2);
			remove_input_defaults(input);
			reset(div_9);
			var node_12 = sibling(div_9, 2);
			var consequent_3 = ($$anchor) => {
				var div_10 = root_6();
				Button(sibling(child(div_10), 2), {
					variant: "outline",
					size: "sm",
					class: "rounded-xl",
					onclick: openAddCountryModal,
					children: ($$anchor, $$slotProps) => {
						var fragment_7 = root_5();
						Plus(first_child(fragment_7), { class: "h-3.5 w-3.5 mr-1" });
						next();
						append($$anchor, fragment_7);
					},
					$$slots: { default: true }
				});
				reset(div_10);
				append($$anchor, div_10);
			};
			var alternate_2 = ($$anchor) => {
				var div_11 = root_11();
				var div_12 = child(div_11);
				var table = child(div_12);
				var tbody = sibling(child(table));
				each(tbody, 21, () => get(filteredCountries), index, ($$anchor, c) => {
					var tr = root_10();
					var td = child(tr);
					var text_2 = child(td);
					reset(td);
					var td_1 = sibling(td);
					var text_3 = child(td_1, true);
					reset(td_1);
					var td_2 = sibling(td_1);
					var text_4 = child(td_2, true);
					reset(td_2);
					var td_3 = sibling(td_2);
					var text_5 = child(td_3, true);
					reset(td_3);
					var td_4 = sibling(td_3);
					var node_15 = child(td_4);
					var consequent_4 = ($$anchor) => {
						var span_3 = root_7();
						Circle_check(child(span_3), { class: "h-3 w-3" });
						next();
						reset(span_3);
						append($$anchor, span_3);
					};
					var alternate_1 = ($$anchor) => {
						var span_4 = root_8();
						Circle_x(child(span_4), { class: "h-3 w-3" });
						next();
						reset(span_4);
						append($$anchor, span_4);
					};
					if_block(node_15, ($$render) => {
						if (get(c).isActive) $$render(consequent_4);
						else $$render(alternate_1, -1);
					});
					reset(td_4);
					var td_5 = sibling(td_4);
					var div_13 = child(td_5);
					var node_18 = child(div_13);
					Button(node_18, {
						variant: "outline",
						class: "h-7 px-2.5 text-[11px] rounded-lg cursor-pointer flex items-center gap-1",
						onclick: () => openEditCountryModal(get(c)),
						children: ($$anchor, $$slotProps) => {
							var fragment_8 = root_9();
							Pen_line(first_child(fragment_8), { class: "h-3 w-3" });
							next();
							append($$anchor, fragment_8);
						},
						$$slots: { default: true }
					});
					var node_20 = sibling(node_18, 2);
					{
						let $0 = user_derived(() => get(c).isActive ? "text-rose-600 hover:bg-rose-500/10" : "text-emerald-600 hover:bg-emerald-500/10");
						Button(node_20, {
							variant: "ghost",
							get class() {
								return `h-7 px-2 text-[11px] rounded-lg cursor-pointer ${get($0) ?? ""}`;
							},
							onclick: () => toggleCountryActive(get(c)),
							children: ($$anchor, $$slotProps) => {
								next();
								var text_6 = text();
								template_effect(() => set_text(text_6, get(c).isActive ? "Deactivate" : "Activate"));
								append($$anchor, text_6);
							},
							$$slots: { default: true }
						});
					}
					reset(div_13);
					reset(td_5);
					reset(tr);
					template_effect(() => {
						set_text(text_2, `#${get(c).id ?? ""}`);
						set_text(text_3, get(c).name);
						set_text(text_4, get(c).code || "—");
						set_text(text_5, get(c).packagesCount);
					});
					append($$anchor, tr);
				});
				reset(tbody);
				reset(table);
				reset(div_12);
				reset(div_11);
				append($$anchor, div_11);
			};
			if_block(node_12, ($$render) => {
				if (get(filteredCountries).length === 0) $$render(consequent_3);
				else $$render(alternate_2, -1);
			});
			reset(div_8);
			bind_value(input, () => get(countrySearch), ($$value) => set(countrySearch, $$value));
			append($$anchor, div_8);
		};
		var alternate_5 = ($$anchor) => {
			var div_14 = root_18();
			var div_15 = child(div_14);
			var div_16 = child(div_15);
			var span_5 = child(div_16);
			Search(child(span_5), { class: "h-4 w-4" });
			reset(span_5);
			var input_1 = sibling(span_5, 2);
			remove_input_defaults(input_1);
			reset(div_16);
			var div_17 = sibling(div_16, 2);
			var select = sibling(child(div_17), 2);
			var option = child(select);
			option.value = option.__value = "";
			each(sibling(option), 17, () => get(countries), index, ($$anchor, c) => {
				var option_1 = root_13();
				var text_7 = child(option_1, true);
				reset(option_1);
				var option_1_value = {};
				template_effect(($0) => {
					set_text(text_7, get(c).name);
					if (option_1_value !== (option_1_value = $0)) option_1.value = (option_1.__value = $0) ?? "";
				}, [() => String(get(c).id)]);
				append($$anchor, option_1);
			});
			reset(select);
			reset(div_17);
			reset(div_15);
			var node_23 = sibling(div_15, 2);
			var consequent_6 = ($$anchor) => {
				var div_18 = root_15();
				Button(sibling(child(div_18), 2), {
					variant: "outline",
					size: "sm",
					class: "rounded-xl",
					onclick: openAddPackageModal,
					children: ($$anchor, $$slotProps) => {
						var fragment_10 = root_14();
						Plus(first_child(fragment_10), { class: "h-3.5 w-3.5 mr-1" });
						next();
						append($$anchor, fragment_10);
					},
					$$slots: { default: true }
				});
				reset(div_18);
				append($$anchor, div_18);
			};
			var alternate_4 = ($$anchor) => {
				var div_19 = root_17();
				var div_20 = child(div_19);
				var table_1 = child(div_20);
				var tbody_1 = sibling(child(table_1));
				each(tbody_1, 21, () => get(filteredPackages), index, ($$anchor, p) => {
					var tr_1 = root_16();
					var td_6 = child(tr_1);
					var text_8 = child(td_6);
					reset(td_6);
					var td_7 = sibling(td_6);
					var text_9 = child(td_7, true);
					reset(td_7);
					var td_8 = sibling(td_7);
					var text_10 = child(td_8, true);
					reset(td_8);
					var td_9 = sibling(td_8);
					var text_11 = child(td_9, true);
					reset(td_9);
					var td_10 = sibling(td_9);
					var node_26 = child(td_10);
					var consequent_7 = ($$anchor) => {
						var span_6 = root_7();
						Circle_check(child(span_6), { class: "h-3 w-3" });
						next();
						reset(span_6);
						append($$anchor, span_6);
					};
					var alternate_3 = ($$anchor) => {
						var span_7 = root_8();
						Circle_x(child(span_7), { class: "h-3 w-3" });
						next();
						reset(span_7);
						append($$anchor, span_7);
					};
					if_block(node_26, ($$render) => {
						if (get(p).isActive) $$render(consequent_7);
						else $$render(alternate_3, -1);
					});
					reset(td_10);
					var td_11 = sibling(td_10);
					var div_21 = child(td_11);
					var node_29 = child(div_21);
					Button(node_29, {
						variant: "outline",
						class: "h-7 px-2.5 text-[11px] rounded-lg cursor-pointer flex items-center gap-1",
						onclick: () => openEditPackageModal(get(p)),
						children: ($$anchor, $$slotProps) => {
							var fragment_11 = root_9();
							Pen_line(first_child(fragment_11), { class: "h-3 w-3" });
							next();
							append($$anchor, fragment_11);
						},
						$$slots: { default: true }
					});
					var node_31 = sibling(node_29, 2);
					{
						let $0 = user_derived(() => get(p).isActive ? "text-rose-600 hover:bg-rose-500/10" : "text-emerald-600 hover:bg-emerald-500/10");
						Button(node_31, {
							variant: "ghost",
							get class() {
								return `h-7 px-2 text-[11px] rounded-lg cursor-pointer ${get($0) ?? ""}`;
							},
							onclick: () => togglePackageActive(get(p)),
							children: ($$anchor, $$slotProps) => {
								next();
								var text_12 = text();
								template_effect(() => set_text(text_12, get(p).isActive ? "Deactivate" : "Activate"));
								append($$anchor, text_12);
							},
							$$slots: { default: true }
						});
					}
					reset(div_21);
					reset(td_11);
					reset(tr_1);
					template_effect(() => {
						set_text(text_8, `#${get(p).id ?? ""}`);
						set_text(text_9, get(p).name);
						set_text(text_10, get(p).countryName);
						set_text(text_11, get(p).description || "—");
					});
					append($$anchor, tr_1);
				});
				reset(tbody_1);
				reset(table_1);
				reset(div_20);
				reset(div_19);
				append($$anchor, div_19);
			};
			if_block(node_23, ($$render) => {
				if (get(filteredPackages).length === 0) $$render(consequent_6);
				else $$render(alternate_4, -1);
			});
			reset(div_14);
			bind_value(input_1, () => get(packageSearch), ($$value) => set(packageSearch, $$value));
			bind_select_value(select, () => get(packageCountryFilter), ($$value) => set(packageCountryFilter, $$value));
			append($$anchor, div_14);
		};
		if_block(node_10, ($$render) => {
			if (get(loading)) $$render(consequent_2);
			else if (get(activeTab) === "countries") $$render(consequent_5, 1);
			else $$render(alternate_5, -1);
		});
		reset(div_1);
		var node_32 = sibling(div_1, 2);
		var consequent_9 = ($$anchor) => {
			var div_22 = root_20();
			var div_23 = child(div_22);
			var div_24 = child(div_23);
			var h2 = child(div_24);
			var node_33 = child(h2);
			Globe(node_33, { class: "h-4 w-4 text-primary" });
			var span_8 = sibling(node_33, 2);
			var text_13 = child(span_8, true);
			reset(span_8);
			reset(h2);
			var button_2 = sibling(h2, 2);
			X(child(button_2), { class: "h-4 w-4" });
			reset(button_2);
			reset(div_24);
			var form = sibling(div_24, 2);
			var div_25 = child(form);
			var input_2 = sibling(child(div_25), 2);
			remove_input_defaults(input_2);
			reset(div_25);
			var div_26 = sibling(div_25, 2);
			var input_3 = sibling(child(div_26), 2);
			remove_input_defaults(input_3);
			reset(div_26);
			var node_35 = sibling(div_26, 2);
			var consequent_8 = ($$anchor) => {
				var div_27 = root_19();
				var input_4 = child(div_27);
				remove_input_defaults(input_4);
				next(2);
				reset(div_27);
				bind_checked(input_4, () => get(countryFormActive), ($$value) => set(countryFormActive, $$value));
				append($$anchor, div_27);
			};
			if_block(node_35, ($$render) => {
				if (get(editingCountry)) $$render(consequent_8);
			});
			var div_28 = sibling(node_35, 2);
			var node_36 = child(div_28);
			Button(node_36, {
				variant: "outline",
				class: "rounded-xl px-4 h-9",
				get disabled() {
					return get(savingCountry);
				},
				onclick: () => set(showCountryModal, false),
				children: ($$anchor, $$slotProps) => {
					next();
					append($$anchor, text("Cancel"));
				},
				$$slots: { default: true }
			});
			Button(sibling(node_36, 2), {
				type: "submit",
				class: "rounded-xl px-4 h-9",
				get disabled() {
					return get(savingCountry);
				},
				children: ($$anchor, $$slotProps) => {
					next();
					var text_15 = text();
					template_effect(() => set_text(text_15, get(savingCountry) ? "Saving..." : get(editingCountry) ? "Update Country" : "Create Country"));
					append($$anchor, text_15);
				},
				$$slots: { default: true }
			});
			reset(div_28);
			reset(form);
			reset(div_23);
			reset(div_22);
			template_effect(() => set_text(text_13, get(editingCountry) ? "Edit Visa Country" : "Add New Visa Country"));
			delegated("click", button_2, () => set(showCountryModal, false));
			event("submit", form, handleSaveCountry);
			bind_value(input_2, () => get(countryFormName), ($$value) => set(countryFormName, $$value));
			bind_value(input_3, () => get(countryFormCode), ($$value) => set(countryFormCode, $$value));
			append($$anchor, div_22);
		};
		if_block(node_32, ($$render) => {
			if (get(showCountryModal)) $$render(consequent_9);
		});
		var node_38 = sibling(node_32, 2);
		var consequent_11 = ($$anchor) => {
			var div_29 = root_22();
			var div_30 = child(div_29);
			var div_31 = child(div_30);
			var h2_1 = child(div_31);
			var node_39 = child(h2_1);
			Package(node_39, { class: "h-4 w-4 text-primary" });
			var span_9 = sibling(node_39, 2);
			var text_16 = child(span_9, true);
			reset(span_9);
			reset(h2_1);
			var button_3 = sibling(h2_1, 2);
			X(child(button_3), { class: "h-4 w-4" });
			reset(button_3);
			reset(div_31);
			var form_1 = sibling(div_31, 2);
			var div_32 = child(form_1);
			var select_1 = sibling(child(div_32), 2);
			var option_2 = child(select_1);
			option_2.value = option_2.__value = "";
			each(sibling(option_2), 17, () => get(countries), index, ($$anchor, c) => {
				var option_3 = root_13();
				var text_17 = child(option_3, true);
				reset(option_3);
				var option_3_value = {};
				template_effect(($0) => {
					set_text(text_17, get(c).name);
					if (option_3_value !== (option_3_value = $0)) option_3.value = (option_3.__value = $0) ?? "";
				}, [() => String(get(c).id)]);
				append($$anchor, option_3);
			});
			reset(select_1);
			reset(div_32);
			var div_33 = sibling(div_32, 2);
			var input_5 = sibling(child(div_33), 2);
			remove_input_defaults(input_5);
			reset(div_33);
			var div_34 = sibling(div_33, 2);
			var textarea = sibling(child(div_34), 2);
			remove_textarea_child(textarea);
			reset(div_34);
			var node_42 = sibling(div_34, 2);
			var consequent_10 = ($$anchor) => {
				var div_35 = root_21();
				var input_6 = child(div_35);
				remove_input_defaults(input_6);
				next(2);
				reset(div_35);
				bind_checked(input_6, () => get(packageFormActive), ($$value) => set(packageFormActive, $$value));
				append($$anchor, div_35);
			};
			if_block(node_42, ($$render) => {
				if (get(editingPackage)) $$render(consequent_10);
			});
			var div_36 = sibling(node_42, 2);
			var node_43 = child(div_36);
			Button(node_43, {
				variant: "outline",
				class: "rounded-xl px-4 h-9",
				get disabled() {
					return get(savingPackage);
				},
				onclick: () => set(showPackageModal, false),
				children: ($$anchor, $$slotProps) => {
					next();
					append($$anchor, text("Cancel"));
				},
				$$slots: { default: true }
			});
			Button(sibling(node_43, 2), {
				type: "submit",
				class: "rounded-xl px-4 h-9",
				get disabled() {
					return get(savingPackage);
				},
				children: ($$anchor, $$slotProps) => {
					next();
					var text_19 = text();
					template_effect(() => set_text(text_19, get(savingPackage) ? "Saving..." : get(editingPackage) ? "Update Package" : "Create Package"));
					append($$anchor, text_19);
				},
				$$slots: { default: true }
			});
			reset(div_36);
			reset(form_1);
			reset(div_30);
			reset(div_29);
			template_effect(() => set_text(text_16, get(editingPackage) ? "Edit Visa Package" : "Add New Visa Package"));
			delegated("click", button_3, () => set(showPackageModal, false));
			event("submit", form_1, handleSavePackage);
			bind_select_value(select_1, () => get(packageFormCountryId), ($$value) => set(packageFormCountryId, $$value));
			bind_value(input_5, () => get(packageFormName), ($$value) => set(packageFormName, $$value));
			bind_value(textarea, () => get(packageFormDescription), ($$value) => set(packageFormDescription, $$value));
			append($$anchor, div_29);
		};
		if_block(node_38, ($$render) => {
			if (get(showPackageModal)) $$render(consequent_11);
		});
		template_effect(() => {
			set_class(button, 1, `px-4 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer flex items-center gap-2 ${get(activeTab) === "countries" ? "bg-card text-foreground shadow-xs border border-border" : "text-muted-foreground hover:text-foreground"}`);
			set_text(text$1, `Visa Countries (${get(countries).length ?? ""})`);
			set_class(button_1, 1, `px-4 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer flex items-center gap-2 ${get(activeTab) === "packages" ? "bg-card text-foreground shadow-xs border border-border" : "text-muted-foreground hover:text-foreground"}`);
			set_text(text_1, `Visa Packages (${get(packages).length ?? ""})`);
		});
		delegated("click", button, () => set(activeTab, "countries"));
		delegated("click", button_1, () => set(activeTab, "packages"));
		append($$anchor, fragment_1);
	};
	if_block(node, ($$render) => {
		if (get(d)) $$render(consequent);
		else $$render(alternate_6, -1);
	});
	append($$anchor, fragment);
	pop();
}
delegate(["click"]);
//#endregion
export { _page as component };

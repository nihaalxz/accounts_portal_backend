import { B as append, Bt as reset, Ct as user_derived, H as from_html, I as if_block, J as event, K as delegate, N as each, Nt as pop, P as index, Pt as push, Q as get, R as set_text, b as bind_select_value, bt as state, g as remove_input_defaults, gt as proxy, ht as sibling, m as bind_value, mt as first_child, ot as template_effect, pt as child, q as delegated, r as onMount, ut as remove_textarea_child, vt as set, w as set_class, zt as next } from "../chunks/dXkmWTgM.js";
import { t as goto } from "../chunks/CV2055QW.js";
import "../chunks/DhaYE-8x.js";
import { t as Circle_alert } from "../chunks/CHXThoj_.js";
import { t as Circle_check } from "../chunks/qB0lJ_dM.js";
import { t as Credit_card } from "../chunks/DZ-rRKb92.js";
import { t as History } from "../chunks/StzzW3F62.js";
import { t as Pen_line } from "../chunks/CvjCDChO2.js";
import { t as Plus } from "../chunks/BObidJ7B2.js";
import { t as Refresh_cw } from "../chunks/DpTJy0Wb2.js";
import { t as Search } from "../chunks/D7t9qluE.js";
import { t as Send } from "../chunks/CRZ4Mc_s.js";
import { t as User_check } from "../chunks/tSSJYCMY.js";
import { t as X } from "../chunks/wXHc9RNY.js";
import "../chunks/Dd6ISaTp.js";
import { a as getSalaryProfiles, c as updateSalaryProfile, n as createSalaryProfile, o as getSalaryRevisions, r as getAllStaffUsers } from "../chunks/BNQtW1ba2.js";
//#region src/routes/(app)/payroll/salary-profiles/+page.svelte
var root = from_html(`<div class="p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-xs font-semibold flex items-center justify-between"><div class="flex items-center gap-2"><!> <span> </span></div> <button class="hover:opacity-80"><!></button></div>`);
var root_1 = from_html(`<div class="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold flex items-center justify-between"><div class="flex items-center gap-2"><!> <span> </span></div> <button class="hover:opacity-80"><!></button></div>`);
var root_2 = from_html(`<div class="p-12 text-center text-muted-foreground flex flex-col items-center gap-3"><!> <span class="text-xs font-medium">Loading salary profiles...</span></div>`);
var root_3 = from_html(`<div class="p-12 text-center text-muted-foreground flex flex-col items-center gap-2"><!> <p class="text-sm font-semibold text-foreground">No salary profiles found</p> <p class="text-xs">Click "Configure New Profile" to assign salary parameters to a staff member.</p></div>`);
var root_4 = from_html(`<tr class="hover:bg-muted/30 transition-colors"><td class="py-3.5 px-4 font-semibold text-foreground"><div> </div> <div class="text-[10px] text-muted-foreground font-normal"> </div></td><td class="py-3.5 px-4"><span> </span></td><td class="py-3.5 px-4 font-mono text-muted-foreground"> </td><td class="py-3.5 px-4 text-right font-bold text-foreground"> </td><td class="py-3.5 px-4 text-right font-semibold text-emerald-600 dark:text-emerald-400"> </td><td class="py-3.5 px-4 text-muted-foreground"> </td><td class="py-3.5 px-4 text-center"><span> </span></td><td class="py-3.5 px-4 text-right"><div class="flex items-center justify-end gap-1"><button class="p-1.5 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer" title="Edit Salary (Revision)"><!></button> <button class="p-1.5 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer" title="Salary History"><!></button> <button class="p-1.5 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors cursor-pointer ml-1" title="Generate Payroll"><!></button></div></td></tr>`);
var root_5 = from_html(`<div class="overflow-x-auto"><table class="w-full text-left text-xs border-collapse"><thead><tr class="border-b border-border bg-muted/40 text-muted-foreground uppercase text-[10px] font-bold tracking-wider"><th class="py-3 px-4">Employee</th><th class="py-3 px-4">Portal</th><th class="py-3 px-4">Emp Code</th><th class="py-3 px-4 text-right">Basic Salary</th><th class="py-3 px-4 text-right">Monthly Incentive</th><th class="py-3 px-4">Effective Date</th><th class="py-3 px-4 text-center">Status</th><th class="py-3 px-4 text-right">Actions</th></tr></thead><tbody class="divide-y divide-border"></tbody></table></div>`);
var root_6 = from_html(`<button type="button"> </button>`);
var root_7 = from_html(`<option> </option>`);
var root_8 = from_html(`<p class="text-[11px] text-muted-foreground mt-1"> </p>`);
var root_9 = from_html(`<div class="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4"><div class="bg-card border border-border rounded-2xl shadow-xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-200"><div class="flex items-center justify-between p-5 border-b border-border"><h2 class="text-base font-bold text-foreground">Configure Salary Profile</h2> <button class="text-muted-foreground hover:text-foreground"><!></button></div> <form class="p-6 space-y-4"><div><span class="block text-xs font-semibold text-foreground mb-1">Target Portal</span> <div class="grid grid-cols-3 gap-2"></div></div> <div><label for="create-employee-select" class="block text-xs font-semibold text-foreground mb-1">Select Employee</label> <select id="create-employee-select" required="" class="w-full h-10 px-3 rounded-xl border border-input bg-background text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"><option>-- Select Staff Member --</option><!></select> <!></div> <div class="grid grid-cols-2 gap-4"><div><label for="create-code-input" class="block text-xs font-semibold text-foreground mb-1">Employee Code</label> <input id="create-code-input" type="text" required="" class="w-full h-10 px-3 rounded-xl border border-input bg-background text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"/></div> <div><label for="create-currency-input" class="block text-xs font-semibold text-foreground mb-1">Currency</label> <input id="create-currency-input" type="text" required="" class="w-full h-10 px-3 rounded-xl border border-input bg-background text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"/></div></div> <div class="grid grid-cols-2 gap-4"><div><label for="create-basic-input" class="block text-xs font-semibold text-foreground mb-1">Basic Salary</label> <input id="create-basic-input" type="number" step="0.001" required="" class="w-full h-10 px-3 rounded-xl border border-input bg-background text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"/></div> <div><label for="create-incentive-input" class="block text-xs font-semibold text-foreground mb-1">Monthly Incentive</label> <input id="create-incentive-input" type="number" step="0.001" required="" class="w-full h-10 px-3 rounded-xl border border-input bg-background text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"/></div></div> <div><label for="create-remarks-input" class="block text-xs font-semibold text-foreground mb-1">Remarks (Optional)</label> <textarea id="create-remarks-input" rows="2" class="w-full p-3 rounded-xl border border-input bg-background text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"></textarea></div> <div class="flex items-center justify-end gap-3 pt-3 border-t border-border"><button type="button" class="h-10 px-4 rounded-xl border border-border text-xs font-bold hover:bg-muted transition-colors cursor-pointer">Cancel</button> <button type="submit" class="h-10 px-5 rounded-xl bg-primary text-primary-foreground text-xs font-bold hover:bg-primary/90 transition-colors disabled:opacity-50 cursor-pointer flex items-center gap-2"><!> <span>Save Profile</span></button></div></form></div></div>`);
var root_10 = from_html(`<div class="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4"><div class="bg-card border border-border rounded-2xl shadow-xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-200"><div class="flex items-center justify-between p-5 border-b border-border"><div><h2 class="text-base font-bold text-foreground">Record Salary Revision</h2> <p class="text-xs text-muted-foreground mt-0.5"> </p></div> <button class="text-muted-foreground hover:text-foreground"><!></button></div> <form class="p-6 space-y-4"><div class="p-3 rounded-xl bg-muted/40 border border-border text-xs space-y-1"><div class="flex justify-between"><span class="text-muted-foreground">Current Basic Salary:</span> <span class="font-bold text-foreground"> </span></div> <div class="flex justify-between"><span class="text-muted-foreground">Current Monthly Incentive:</span> <span class="font-bold text-foreground"> </span></div></div> <div class="grid grid-cols-2 gap-4"><div><label for="edit-basic-input" class="block text-xs font-semibold text-foreground mb-1">New Basic Salary</label> <input id="edit-basic-input" type="number" step="0.001" required="" class="w-full h-10 px-3 rounded-xl border border-input bg-background text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"/></div> <div><label for="edit-incentive-input" class="block text-xs font-semibold text-foreground mb-1">New Monthly Incentive</label> <input id="edit-incentive-input" type="number" step="0.001" required="" class="w-full h-10 px-3 rounded-xl border border-input bg-background text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"/></div></div> <div><label for="edit-reason-input" class="block text-xs font-semibold text-foreground mb-1">Revision Reason</label> <input id="edit-reason-input" type="text" required="" placeholder="e.g., Annual appraisal, Promotion, Increment" class="w-full h-10 px-3 rounded-xl border border-input bg-background text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"/></div> <div><label for="edit-date-input" class="block text-xs font-semibold text-foreground mb-1">Effective Date</label> <input id="edit-date-input" type="date" required="" class="w-full h-10 px-3 rounded-xl border border-input bg-background text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"/></div> <div class="flex items-center justify-end gap-3 pt-3 border-t border-border"><button type="button" class="h-10 px-4 rounded-xl border border-border text-xs font-bold hover:bg-muted transition-colors cursor-pointer">Cancel</button> <button type="submit" class="h-10 px-5 rounded-xl bg-primary text-primary-foreground text-xs font-bold hover:bg-primary/90 transition-colors disabled:opacity-50 cursor-pointer flex items-center gap-2"><!> <span>Apply Revision</span></button></div></form></div></div>`);
var root_11 = from_html(`<div class="p-8 text-center text-muted-foreground flex flex-col items-center gap-2"><!> <span class="text-xs">Loading revision log...</span></div>`);
var root_12 = from_html(`<div class="p-8 text-center text-muted-foreground text-xs">No revision history recorded for this profile yet.</div>`);
var root_13 = from_html(`<div class="p-4 rounded-xl border border-border bg-muted/20 space-y-2"><div class="flex items-center justify-between text-xs font-bold text-foreground"><span> </span> <span class="text-muted-foreground font-normal"> </span></div> <div class="grid grid-cols-2 gap-4 text-xs"><div class="p-2.5 rounded-lg bg-card border border-border"><div class="text-[10px] text-muted-foreground font-semibold uppercase">Basic Salary</div> <div class="flex items-center gap-2 mt-1"><span class="line-through text-muted-foreground"> </span> <span class="font-bold text-emerald-600 dark:text-emerald-400"> </span></div></div> <div class="p-2.5 rounded-lg bg-card border border-border"><div class="text-[10px] text-muted-foreground font-semibold uppercase">Monthly Incentive</div> <div class="flex items-center gap-2 mt-1"><span class="line-through text-muted-foreground"> </span> <span class="font-bold text-emerald-600 dark:text-emerald-400"> </span></div></div></div></div>`);
var root_14 = from_html(`<div class="space-y-3"></div>`);
var root_15 = from_html(`<div class="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4"><div class="bg-card border border-border rounded-2xl shadow-xl w-full max-w-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"><div class="flex items-center justify-between p-5 border-b border-border"><div><h2 class="text-base font-bold text-foreground">Salary Revision History</h2> <p class="text-xs text-muted-foreground mt-0.5"> </p></div> <button class="text-muted-foreground hover:text-foreground"><!></button></div> <div class="p-6 max-h-[70vh] overflow-y-auto"><!></div> <div class="p-4 border-t border-border bg-muted/10 text-right"><button class="h-9 px-4 rounded-xl border border-border text-xs font-bold hover:bg-muted transition-colors cursor-pointer">Close</button></div></div></div>`);
var root_16 = from_html(`<div class="space-y-6"><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-card p-6 rounded-2xl border border-border shadow-sm"><div><h1 class="text-xl font-bold text-foreground flex items-center gap-2"><!> Staff Salary Profiles</h1> <p class="text-xs text-muted-foreground mt-1">Configure base salaries, monthly incentives, and track salary revisions across Accounts, Sales, and Operational staff.</p></div> <button class="inline-flex items-center gap-2 h-10 px-4 rounded-xl bg-primary text-primary-foreground text-xs font-bold hover:bg-primary/90 transition-all cursor-pointer shadow-sm shrink-0"><!> <span>Configure New Profile</span></button></div> <!> <!> <div class="flex flex-col md:flex-row items-center justify-between gap-4 bg-card p-4 rounded-xl border border-border shadow-sm"><div class="flex items-center gap-1 bg-muted p-1 rounded-lg w-full md:w-auto"><button>All Portals</button> <button>Accounts Staff</button> <button>Sales Staff</button> <button>Operational Staff</button></div> <div class="relative w-full md:w-72"><!> <input type="text" placeholder="Search employee or code..." class="w-full h-9 pl-9 pr-4 rounded-xl border border-input bg-background text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"/></div></div> <div class="bg-card rounded-2xl border border-border shadow-sm overflow-hidden"><!></div></div> <!> <!> <!>`, 1);
function _page($$anchor, $$props) {
	push($$props, true);
	let loading = state(true);
	let error = state(null);
	let successMsg = state(null);
	let profiles = state(proxy([]));
	let staffUsers = state(proxy([]));
	let selectedPortal = state("all");
	let searchQuery = state("");
	let showCreateModal = state(false);
	let showEditModal = state(false);
	let showHistoryModal = state(false);
	let selectedProfile = state(null);
	let revisions = state(proxy([]));
	let loadingRevisions = state(false);
	const todayStr = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
	let createForm = state(proxy({
		portalType: "Account",
		portalUserId: 0,
		employeeCode: "",
		basicSalary: 0,
		defaultMonthlyIncentive: 0,
		currency: "BHD",
		effectiveFrom: todayStr,
		remarks: ""
	}));
	let submittingCreate = state(false);
	let editForm = state(proxy({
		newBasicSalary: 0,
		newMonthlyIncentive: 0,
		reason: "",
		effectiveDate: todayStr,
		remarks: ""
	}));
	let submittingEdit = state(false);
	onMount(async () => {
		await loadData();
	});
	async function loadData() {
		set(loading, true);
		set(error, null);
		try {
			const [profRes, staffRes] = await Promise.all([getSalaryProfiles(), getAllStaffUsers()]);
			set(profiles, profRes, true);
			set(staffUsers, staffRes, true);
		} catch (err) {
			set(error, err?.message || "Failed to load salary profiles", true);
		} finally {
			set(loading, false);
		}
	}
	let filteredProfiles = user_derived(() => {
		return get(profiles).filter((p) => {
			const matchesPortal = get(selectedPortal) === "all" || (p.portalType || "").toLowerCase() === get(selectedPortal).toLowerCase();
			const matchesSearch = !get(searchQuery) || (p.employeeName || "").toLowerCase().includes(get(searchQuery).toLowerCase()) || (p.employeeCode || "").toLowerCase().includes(get(searchQuery).toLowerCase()) || (p.employeeEmail || "").toLowerCase().includes(get(searchQuery).toLowerCase());
			return matchesPortal && matchesSearch;
		});
	});
	let availableStaffForCreate = user_derived(() => {
		const existingKeys = new Set(get(profiles).filter((p) => p.status === "Active").map((p) => `${(p.portalType || "").toLowerCase()}_${p.portalUserId}`));
		return get(staffUsers).filter((u) => {
			const matchesType = (u.portalType || "").toLowerCase() === (get(createForm).portalType || "").toLowerCase();
			const alreadyHasProfile = existingKeys.has(`${(u.portalType || "").toLowerCase()}_${u.portalUserId}`);
			return matchesType && !alreadyHasProfile;
		});
	});
	function openCreateModal() {
		set(createForm, {
			portalType: "Account",
			portalUserId: 0,
			employeeCode: "EMP-" + Math.floor(1e3 + Math.random() * 9e3),
			basicSalary: 0,
			defaultMonthlyIncentive: 0,
			currency: "BHD",
			effectiveFrom: todayStr,
			remarks: ""
		}, true);
		set(showCreateModal, true);
	}
	async function handleCreateSubmit(e) {
		e.preventDefault();
		if (!get(createForm).portalUserId || get(createForm).portalUserId === 0) {
			set(error, "Please select a staff member.");
			return;
		}
		if (get(createForm).basicSalary < 0) {
			set(error, "Basic salary cannot be negative.");
			return;
		}
		set(submittingCreate, true);
		set(error, null);
		try {
			await createSalaryProfile(get(createForm));
			set(showCreateModal, false);
			set(successMsg, "Salary profile created successfully.");
			setTimeout(() => set(successMsg, null), 4e3);
			await loadData();
		} catch (err) {
			set(error, err?.message || "Failed to create salary profile", true);
		} finally {
			set(submittingCreate, false);
		}
	}
	function openEditModal(profile) {
		set(selectedProfile, profile, true);
		set(editForm, {
			newBasicSalary: profile.basicSalary,
			newMonthlyIncentive: profile.defaultMonthlyIncentive,
			reason: "Annual Salary Revision",
			effectiveDate: todayStr,
			remarks: profile.remarks || ""
		}, true);
		set(showEditModal, true);
	}
	async function handleEditSubmit(e) {
		e.preventDefault();
		if (!get(selectedProfile)) return;
		if (get(editForm).newBasicSalary < 0) {
			set(error, "New basic salary cannot be negative.");
			return;
		}
		set(submittingEdit, true);
		set(error, null);
		try {
			await updateSalaryProfile(get(selectedProfile).id, get(editForm));
			set(showEditModal, false);
			set(successMsg, "Salary revision recorded successfully.");
			setTimeout(() => set(successMsg, null), 4e3);
			await loadData();
		} catch (err) {
			set(error, err?.message || "Failed to update salary profile", true);
		} finally {
			set(submittingEdit, false);
		}
	}
	async function openHistoryModal(profile) {
		set(selectedProfile, profile, true);
		set(showHistoryModal, true);
		set(loadingRevisions, true);
		try {
			set(revisions, await getSalaryRevisions(profile.id), true);
		} catch (err) {
			set(error, err?.message || "Failed to fetch revision history", true);
		} finally {
			set(loadingRevisions, false);
		}
	}
	function navigateToPayout(profile) {
		goto(`/payments/new?tab=salary&profileId=${profile.id}`);
	}
	function formatCurrency(val, curr = "BHD") {
		return `${curr} ${(val || 0).toLocaleString("en-US", {
			minimumFractionDigits: 3,
			maximumFractionDigits: 3
		})}`;
	}
	var fragment = root_16();
	var div = first_child(fragment);
	var div_1 = child(div);
	var div_2 = child(div_1);
	var h1 = child(div_2);
	Credit_card(child(h1), { class: "h-6 w-6 text-primary" });
	next();
	reset(h1);
	next(2);
	reset(div_2);
	var button = sibling(div_2, 2);
	Plus(child(button), { class: "h-4 w-4" });
	next(2);
	reset(button);
	reset(div_1);
	var node_2 = sibling(div_1, 2);
	var consequent = ($$anchor) => {
		var div_3 = root();
		var div_4 = child(div_3);
		var node_3 = child(div_4);
		Circle_alert(node_3, { class: "h-4 w-4 shrink-0" });
		var span = sibling(node_3, 2);
		var text = child(span, true);
		reset(span);
		reset(div_4);
		var button_1 = sibling(div_4, 2);
		X(child(button_1), { class: "h-4 w-4" });
		reset(button_1);
		reset(div_3);
		template_effect(() => set_text(text, get(error)));
		delegated("click", button_1, () => set(error, null));
		append($$anchor, div_3);
	};
	if_block(node_2, ($$render) => {
		if (get(error)) $$render(consequent);
	});
	var node_5 = sibling(node_2, 2);
	var consequent_1 = ($$anchor) => {
		var div_5 = root_1();
		var div_6 = child(div_5);
		var node_6 = child(div_6);
		Circle_check(node_6, { class: "h-4 w-4 shrink-0" });
		var span_1 = sibling(node_6, 2);
		var text_1 = child(span_1, true);
		reset(span_1);
		reset(div_6);
		var button_2 = sibling(div_6, 2);
		X(child(button_2), { class: "h-4 w-4" });
		reset(button_2);
		reset(div_5);
		template_effect(() => set_text(text_1, get(successMsg)));
		delegated("click", button_2, () => set(successMsg, null));
		append($$anchor, div_5);
	};
	if_block(node_5, ($$render) => {
		if (get(successMsg)) $$render(consequent_1);
	});
	var div_7 = sibling(node_5, 2);
	var div_8 = child(div_7);
	var button_3 = child(div_8);
	var button_4 = sibling(button_3, 2);
	var button_5 = sibling(button_4, 2);
	var button_6 = sibling(button_5, 2);
	reset(div_8);
	var div_9 = sibling(div_8, 2);
	var node_8 = child(div_9);
	Search(node_8, { class: "h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" });
	var input = sibling(node_8, 2);
	remove_input_defaults(input);
	reset(div_9);
	reset(div_7);
	var div_10 = sibling(div_7, 2);
	var node_9 = child(div_10);
	var consequent_2 = ($$anchor) => {
		var div_11 = root_2();
		Refresh_cw(child(div_11), { class: "h-6 w-6 animate-spin text-primary" });
		next(2);
		reset(div_11);
		append($$anchor, div_11);
	};
	var consequent_3 = ($$anchor) => {
		var div_12 = root_3();
		User_check(child(div_12), { class: "h-10 w-10 text-muted-foreground/40" });
		next(4);
		reset(div_12);
		append($$anchor, div_12);
	};
	var alternate = ($$anchor) => {
		var div_13 = root_5();
		var table = child(div_13);
		var tbody = sibling(child(table));
		each(tbody, 21, () => get(filteredProfiles), index, ($$anchor, profile) => {
			var tr = root_4();
			var td = child(tr);
			var div_14 = child(td);
			var text_2 = child(div_14, true);
			reset(div_14);
			var div_15 = sibling(div_14, 2);
			var text_3 = child(div_15, true);
			reset(div_15);
			reset(td);
			var td_1 = sibling(td);
			var span_2 = child(td_1);
			var text_4 = child(span_2, true);
			reset(span_2);
			reset(td_1);
			var td_2 = sibling(td_1);
			var text_5 = child(td_2, true);
			reset(td_2);
			var td_3 = sibling(td_2);
			var text_6 = child(td_3, true);
			reset(td_3);
			var td_4 = sibling(td_3);
			var text_7 = child(td_4, true);
			reset(td_4);
			var td_5 = sibling(td_4);
			var text_8 = child(td_5, true);
			reset(td_5);
			var td_6 = sibling(td_5);
			var span_3 = child(td_6);
			var text_9 = child(span_3, true);
			reset(span_3);
			reset(td_6);
			var td_7 = sibling(td_6);
			var div_16 = child(td_7);
			var button_7 = child(div_16);
			Pen_line(child(button_7), { class: "h-4 w-4" });
			reset(button_7);
			var button_8 = sibling(button_7, 2);
			History(child(button_8), { class: "h-4 w-4" });
			reset(button_8);
			var button_9 = sibling(button_8, 2);
			Send(child(button_9), { class: "h-4 w-4" });
			reset(button_9);
			reset(div_16);
			reset(td_7);
			reset(tr);
			template_effect(($0, $1, $2) => {
				set_text(text_2, get(profile).employeeName);
				set_text(text_3, get(profile).employeeEmail);
				set_class(span_2, 1, `px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider
										${get(profile).portalType === "Account" ? "bg-blue-500/10 text-blue-600 dark:text-blue-400" : ""}
										${get(profile).portalType === "Sales" ? "bg-amber-500/10 text-amber-600 dark:text-amber-400" : ""}
										${get(profile).portalType === "Operational" ? "bg-purple-500/10 text-purple-600 dark:text-purple-400" : ""}`);
				set_text(text_4, get(profile).portalType);
				set_text(text_5, get(profile).employeeCode);
				set_text(text_6, $0);
				set_text(text_7, $1);
				set_text(text_8, $2);
				set_class(span_3, 1, `px-2 py-0.5 rounded-full text-[10px] font-bold uppercase
										${get(profile).status === "Active" ? "bg-emerald-500/10 text-emerald-600" : "bg-muted text-muted-foreground"}`);
				set_text(text_9, get(profile).status);
			}, [
				() => formatCurrency(get(profile).basicSalary, get(profile).currency),
				() => formatCurrency(get(profile).defaultMonthlyIncentive, get(profile).currency),
				() => new Date(get(profile).effectiveFrom).toLocaleDateString()
			]);
			delegated("click", button_7, () => openEditModal(get(profile)));
			delegated("click", button_8, () => openHistoryModal(get(profile)));
			delegated("click", button_9, () => navigateToPayout(get(profile)));
			append($$anchor, tr);
		});
		reset(tbody);
		reset(table);
		reset(div_13);
		append($$anchor, div_13);
	};
	if_block(node_9, ($$render) => {
		if (get(loading)) $$render(consequent_2);
		else if (get(filteredProfiles).length === 0) $$render(consequent_3, 1);
		else $$render(alternate, -1);
	});
	reset(div_10);
	reset(div);
	var node_15 = sibling(div, 2);
	var consequent_6 = ($$anchor) => {
		var div_17 = root_9();
		var div_18 = child(div_17);
		var div_19 = child(div_18);
		var button_10 = sibling(child(div_19), 2);
		X(child(button_10), { class: "h-5 w-5" });
		reset(button_10);
		reset(div_19);
		var form = sibling(div_19, 2);
		var div_20 = child(form);
		var div_21 = sibling(child(div_20), 2);
		each(div_21, 20, () => [
			"Account",
			"Sales",
			"Operational"
		], index, ($$anchor, portal) => {
			var button_11 = root_6();
			var text_10 = child(button_11, true);
			reset(button_11);
			template_effect(() => {
				set_class(button_11, 1, `py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer
									${get(createForm).portalType === portal ? "bg-primary/10 text-primary border-primary" : "border-border text-muted-foreground hover:bg-muted"}`);
				set_text(text_10, portal);
			});
			delegated("click", button_11, () => {
				get(createForm).portalType = portal;
				get(createForm).portalUserId = 0;
			});
			append($$anchor, button_11);
		});
		reset(div_21);
		reset(div_20);
		var div_22 = sibling(div_20, 2);
		var select = sibling(child(div_22), 2);
		var option = child(select);
		option.value = option.__value = 0;
		each(sibling(option), 17, () => get(availableStaffForCreate), index, ($$anchor, user) => {
			var option_1 = root_7();
			var text_11 = child(option_1);
			reset(option_1);
			var option_1_value = {};
			template_effect(() => {
				set_text(text_11, `${get(user).name ?? ""} (${get(user).email ?? ""})`);
				if (option_1_value !== (option_1_value = get(user).portalUserId)) option_1.value = (option_1.__value = get(user).portalUserId) ?? "";
			});
			append($$anchor, option_1);
		});
		reset(select);
		var node_18 = sibling(select, 2);
		var consequent_4 = ($$anchor) => {
			var p_1 = root_8();
			var text_12 = child(p_1);
			reset(p_1);
			template_effect(() => set_text(text_12, `No unassigned ${get(createForm).portalType ?? ""} staff members available.`));
			append($$anchor, p_1);
		};
		if_block(node_18, ($$render) => {
			if (get(availableStaffForCreate).length === 0) $$render(consequent_4);
		});
		reset(div_22);
		var div_23 = sibling(div_22, 2);
		var div_24 = child(div_23);
		var input_1 = sibling(child(div_24), 2);
		remove_input_defaults(input_1);
		reset(div_24);
		var div_25 = sibling(div_24, 2);
		var input_2 = sibling(child(div_25), 2);
		remove_input_defaults(input_2);
		reset(div_25);
		reset(div_23);
		var div_26 = sibling(div_23, 2);
		var div_27 = child(div_26);
		var input_3 = sibling(child(div_27), 2);
		remove_input_defaults(input_3);
		reset(div_27);
		var div_28 = sibling(div_27, 2);
		var input_4 = sibling(child(div_28), 2);
		remove_input_defaults(input_4);
		reset(div_28);
		reset(div_26);
		var div_29 = sibling(div_26, 2);
		var textarea = sibling(child(div_29), 2);
		remove_textarea_child(textarea);
		reset(div_29);
		var div_30 = sibling(div_29, 2);
		var button_12 = child(div_30);
		var button_13 = sibling(button_12, 2);
		var node_19 = child(button_13);
		var consequent_5 = ($$anchor) => {
			Refresh_cw($$anchor, { class: "h-4 w-4 animate-spin" });
		};
		if_block(node_19, ($$render) => {
			if (get(submittingCreate)) $$render(consequent_5);
		});
		next(2);
		reset(button_13);
		reset(div_30);
		reset(form);
		reset(div_18);
		reset(div_17);
		template_effect(() => button_13.disabled = get(submittingCreate));
		delegated("click", button_10, () => set(showCreateModal, false));
		event("submit", form, handleCreateSubmit);
		bind_select_value(select, () => get(createForm).portalUserId, ($$value) => get(createForm).portalUserId = $$value);
		bind_value(input_1, () => get(createForm).employeeCode, ($$value) => get(createForm).employeeCode = $$value);
		bind_value(input_2, () => get(createForm).currency, ($$value) => get(createForm).currency = $$value);
		bind_value(input_3, () => get(createForm).basicSalary, ($$value) => get(createForm).basicSalary = $$value);
		bind_value(input_4, () => get(createForm).defaultMonthlyIncentive, ($$value) => get(createForm).defaultMonthlyIncentive = $$value);
		bind_value(textarea, () => get(createForm).remarks, ($$value) => get(createForm).remarks = $$value);
		delegated("click", button_12, () => set(showCreateModal, false));
		append($$anchor, div_17);
	};
	if_block(node_15, ($$render) => {
		if (get(showCreateModal)) $$render(consequent_6);
	});
	var node_20 = sibling(node_15, 2);
	var consequent_8 = ($$anchor) => {
		var div_31 = root_10();
		var div_32 = child(div_31);
		var div_33 = child(div_32);
		var div_34 = child(div_33);
		var p_2 = sibling(child(div_34), 2);
		var text_13 = child(p_2);
		reset(p_2);
		reset(div_34);
		var button_14 = sibling(div_34, 2);
		X(child(button_14), { class: "h-5 w-5" });
		reset(button_14);
		reset(div_33);
		var form_1 = sibling(div_33, 2);
		var div_35 = child(form_1);
		var div_36 = child(div_35);
		var span_4 = sibling(child(div_36), 2);
		var text_14 = child(span_4, true);
		reset(span_4);
		reset(div_36);
		var div_37 = sibling(div_36, 2);
		var span_5 = sibling(child(div_37), 2);
		var text_15 = child(span_5, true);
		reset(span_5);
		reset(div_37);
		reset(div_35);
		var div_38 = sibling(div_35, 2);
		var div_39 = child(div_38);
		var input_5 = sibling(child(div_39), 2);
		remove_input_defaults(input_5);
		reset(div_39);
		var div_40 = sibling(div_39, 2);
		var input_6 = sibling(child(div_40), 2);
		remove_input_defaults(input_6);
		reset(div_40);
		reset(div_38);
		var div_41 = sibling(div_38, 2);
		var input_7 = sibling(child(div_41), 2);
		remove_input_defaults(input_7);
		reset(div_41);
		var div_42 = sibling(div_41, 2);
		var input_8 = sibling(child(div_42), 2);
		remove_input_defaults(input_8);
		reset(div_42);
		var div_43 = sibling(div_42, 2);
		var button_15 = child(div_43);
		var button_16 = sibling(button_15, 2);
		var node_22 = child(button_16);
		var consequent_7 = ($$anchor) => {
			Refresh_cw($$anchor, { class: "h-4 w-4 animate-spin" });
		};
		if_block(node_22, ($$render) => {
			if (get(submittingEdit)) $$render(consequent_7);
		});
		next(2);
		reset(button_16);
		reset(div_43);
		reset(form_1);
		reset(div_32);
		reset(div_31);
		template_effect(($0, $1) => {
			set_text(text_13, `${get(selectedProfile).employeeName ?? ""} (${get(selectedProfile).employeeCode ?? ""})`);
			set_text(text_14, $0);
			set_text(text_15, $1);
			button_16.disabled = get(submittingEdit);
		}, [() => formatCurrency(get(selectedProfile).basicSalary, get(selectedProfile).currency), () => formatCurrency(get(selectedProfile).defaultMonthlyIncentive, get(selectedProfile).currency)]);
		delegated("click", button_14, () => set(showEditModal, false));
		event("submit", form_1, handleEditSubmit);
		bind_value(input_5, () => get(editForm).newBasicSalary, ($$value) => get(editForm).newBasicSalary = $$value);
		bind_value(input_6, () => get(editForm).newMonthlyIncentive, ($$value) => get(editForm).newMonthlyIncentive = $$value);
		bind_value(input_7, () => get(editForm).reason, ($$value) => get(editForm).reason = $$value);
		bind_value(input_8, () => get(editForm).effectiveDate, ($$value) => get(editForm).effectiveDate = $$value);
		delegated("click", button_15, () => set(showEditModal, false));
		append($$anchor, div_31);
	};
	if_block(node_20, ($$render) => {
		if (get(showEditModal) && get(selectedProfile)) $$render(consequent_8);
	});
	var node_23 = sibling(node_20, 2);
	var consequent_11 = ($$anchor) => {
		var div_44 = root_15();
		var div_45 = child(div_44);
		var div_46 = child(div_45);
		var div_47 = child(div_46);
		var p_3 = sibling(child(div_47), 2);
		var text_16 = child(p_3);
		reset(p_3);
		reset(div_47);
		var button_17 = sibling(div_47, 2);
		X(child(button_17), { class: "h-5 w-5" });
		reset(button_17);
		reset(div_46);
		var div_48 = sibling(div_46, 2);
		var node_25 = child(div_48);
		var consequent_9 = ($$anchor) => {
			var div_49 = root_11();
			Refresh_cw(child(div_49), { class: "h-5 w-5 animate-spin text-primary" });
			next(2);
			reset(div_49);
			append($$anchor, div_49);
		};
		var consequent_10 = ($$anchor) => {
			append($$anchor, root_12());
		};
		var alternate_1 = ($$anchor) => {
			var div_51 = root_14();
			each(div_51, 21, () => get(revisions), index, ($$anchor, rev) => {
				var div_52 = root_13();
				var div_53 = child(div_52);
				var span_6 = child(div_53);
				var text_17 = child(span_6, true);
				reset(span_6);
				var span_7 = sibling(span_6, 2);
				var text_18 = child(span_7, true);
				reset(span_7);
				reset(div_53);
				var div_54 = sibling(div_53, 2);
				var div_55 = child(div_54);
				var div_56 = sibling(child(div_55), 2);
				var span_8 = child(div_56);
				var text_19 = child(span_8, true);
				reset(span_8);
				var span_9 = sibling(span_8, 2);
				var text_20 = child(span_9);
				reset(span_9);
				reset(div_56);
				reset(div_55);
				var div_57 = sibling(div_55, 2);
				var div_58 = sibling(child(div_57), 2);
				var span_10 = child(div_58);
				var text_21 = child(span_10, true);
				reset(span_10);
				var span_11 = sibling(span_10, 2);
				var text_22 = child(span_11);
				reset(span_11);
				reset(div_58);
				reset(div_57);
				reset(div_54);
				reset(div_52);
				template_effect(($0, $1, $2, $3, $4) => {
					set_text(text_17, get(rev).reason);
					set_text(text_18, $0);
					set_text(text_19, $1);
					set_text(text_20, `➜ ${$2 ?? ""}`);
					set_text(text_21, $3);
					set_text(text_22, `➜ ${$4 ?? ""}`);
				}, [
					() => new Date(get(rev).effectiveDate).toLocaleDateString(),
					() => formatCurrency(get(rev).oldBasicSalary, get(selectedProfile).currency),
					() => formatCurrency(get(rev).newBasicSalary, get(selectedProfile).currency),
					() => formatCurrency(get(rev).oldMonthlyIncentive, get(selectedProfile).currency),
					() => formatCurrency(get(rev).newMonthlyIncentive, get(selectedProfile).currency)
				]);
				append($$anchor, div_52);
			});
			reset(div_51);
			append($$anchor, div_51);
		};
		if_block(node_25, ($$render) => {
			if (get(loadingRevisions)) $$render(consequent_9);
			else if (get(revisions).length === 0) $$render(consequent_10, 1);
			else $$render(alternate_1, -1);
		});
		reset(div_48);
		var div_59 = sibling(div_48, 2);
		var button_18 = child(div_59);
		reset(div_59);
		reset(div_45);
		reset(div_44);
		template_effect(() => set_text(text_16, `${get(selectedProfile).employeeName ?? ""} (${get(selectedProfile).employeeCode ?? ""})`));
		delegated("click", button_17, () => set(showHistoryModal, false));
		delegated("click", button_18, () => set(showHistoryModal, false));
		append($$anchor, div_44);
	};
	if_block(node_23, ($$render) => {
		if (get(showHistoryModal) && get(selectedProfile)) $$render(consequent_11);
	});
	template_effect(() => {
		set_class(button_3, 1, `px-3 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer flex-1 md:flex-initial text-center
					${get(selectedPortal) === "all" ? "bg-card text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"}`);
		set_class(button_4, 1, `px-3 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer flex-1 md:flex-initial text-center
					${get(selectedPortal) === "Account" ? "bg-card text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"}`);
		set_class(button_5, 1, `px-3 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer flex-1 md:flex-initial text-center
					${get(selectedPortal) === "Sales" ? "bg-card text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"}`);
		set_class(button_6, 1, `px-3 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer flex-1 md:flex-initial text-center
					${get(selectedPortal) === "Operational" ? "bg-card text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"}`);
	});
	delegated("click", button, openCreateModal);
	delegated("click", button_3, () => set(selectedPortal, "all"));
	delegated("click", button_4, () => set(selectedPortal, "Account"));
	delegated("click", button_5, () => set(selectedPortal, "Sales"));
	delegated("click", button_6, () => set(selectedPortal, "Operational"));
	bind_value(input, () => get(searchQuery), ($$value) => set(searchQuery, $$value));
	append($$anchor, fragment);
	pop();
}
delegate(["click"]);
//#endregion
export { _page as component };

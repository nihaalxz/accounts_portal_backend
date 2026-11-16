import { B as append, Bt as reset, D as head, G as text, H as from_html, I as if_block, K as delegate, Nt as pop, Pt as push, Q as get, R as set_text, bt as state, dt as $document, g as remove_input_defaults, ht as sibling, it as effect, l as init, m as bind_value, mt as first_child, ot as template_effect, pt as child, q as delegated, r as onMount, vt as set } from "../chunks/dXkmWTgM.js";
import "../chunks/DhaYE-8x.js";
import "../chunks/DZfWAsjW.js";
import { t as staffsStore } from "../chunks/D8IKPTtk.js";
import { s as fetchWorkloadLimits, u as updateWorkloadLimits } from "../chunks/C8eT4-BS.js";
import { n as StaffMetrics, t as StaffTable } from "../chunks/COFAPA_y2.js";
//#region src/features/staffs/components/WorkloadLimitsCard.svelte
var root$1 = from_html(`<div class="loading-skeleton svelte-13t712x">Loading capacity limits…</div>`);
var root_1 = from_html(`<div class="alert alert--success svelte-13t712x"> </div>`);
var root_2 = from_html(`<div class="alert alert--error svelte-13t712x"> </div>`);
var root_3 = from_html(`<div class="limits-grid svelte-13t712x"><div class="limit-box svelte-13t712x"><div class="limit-box__icon visa svelte-13t712x"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg></div> <div class="limit-box__content svelte-13t712x"><label for="visa-limit-input" class="limit-box__label svelte-13t712x">Visa Applications Max Active</label> <span class="limit-box__hint svelte-13t712x"> </span></div> <div class="limit-box__input-wrap"><input id="visa-limit-input" type="number" min="1" max="50" class="limit-input svelte-13t712x" aria-label="Visa Applications Max Active Limit"/></div></div> <div class="limit-box svelte-13t712x"><div class="limit-box__icon vfs svelte-13t712x"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="16" rx="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line></svg></div> <div class="limit-box__content svelte-13t712x"><label for="vfs-limit-input" class="limit-box__label svelte-13t712x">VFS Appointments Max Active</label> <span class="limit-box__hint svelte-13t712x"> </span></div> <div class="limit-box__input-wrap"><input id="vfs-limit-input" type="number" min="1" max="50" class="limit-input svelte-13t712x" aria-label="VFS Appointments Max Active Limit"/></div></div> <div class="limit-box svelte-13t712x"><div class="limit-box__icon holiday svelte-13t712x"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon></svg></div> <div class="limit-box__content svelte-13t712x"><label for="holiday-limit-input" class="limit-box__label svelte-13t712x">Holiday Packages Max Active</label> <span class="limit-box__hint svelte-13t712x"> </span></div> <div class="limit-box__input-wrap"><input id="holiday-limit-input" type="number" min="1" max="50" class="limit-input svelte-13t712x" aria-label="Holiday Packages Max Active Limit"/></div></div></div> <!> <!> <div class="workload-footer svelte-13t712x"><button class="btn btn--primary svelte-13t712x"><!></button></div>`, 1);
var root_4 = from_html(`<div class="workload-card svelte-13t712x"><div class="workload-header svelte-13t712x"><div><h3 class="workload-title svelte-13t712x">Operator Workload Capacity Limits</h3> <p class="workload-sub svelte-13t712x">Configure maximum active pending applications an operator can claim simultaneously per module type</p></div> <button class="btn btn--secondary btn--sm svelte-13t712x"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mr-1 svelte-13t712x"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg> Refresh</button></div> <!></div>`);
function WorkloadLimitsCard($$anchor, $$props) {
	push($$props, true);
	let visaLimit = state(3);
	let vfsLimit = state(3);
	let holidayLimit = state(3);
	let isLoading = state(true);
	let isSaving = state(false);
	let successMsg = state("");
	let errorMsg = state("");
	async function loadLimits() {
		set(isLoading, true);
		set(errorMsg, "");
		try {
			const data = await fetchWorkloadLimits();
			for (const item of data) if (!item.userId) {
				const type = item.entityType.toUpperCase();
				if (type.includes("VISA")) set(visaLimit, item.maxActiveLimit, true);
				else if (type.includes("VFS")) set(vfsLimit, item.maxActiveLimit, true);
				else if (type.includes("HOLIDAY")) set(holidayLimit, item.maxActiveLimit, true);
			}
		} catch (err) {
			set(errorMsg, "Failed to load workload limits from Operational Portal.");
		} finally {
			set(isLoading, false);
		}
	}
	async function handleSave() {
		set(isSaving, true);
		set(successMsg, "");
		set(errorMsg, "");
		try {
			await updateWorkloadLimits([
				{
					entityType: "VISA",
					maxActiveLimit: Math.max(1, get(visaLimit))
				},
				{
					entityType: "VFS",
					maxActiveLimit: Math.max(1, get(vfsLimit))
				},
				{
					entityType: "HOLIDAY",
					maxActiveLimit: Math.max(1, get(holidayLimit))
				}
			]);
			set(successMsg, "Operator workload capacity limits saved successfully!");
			setTimeout(() => set(successMsg, ""), 4e3);
		} catch (err) {
			set(errorMsg, "Error updating workload limits: " + (err?.message || "Server error"));
		} finally {
			set(isSaving, false);
		}
	}
	onMount(() => {
		loadLimits();
	});
	var div = root_4();
	var div_1 = child(div);
	var button = sibling(child(div_1), 2);
	reset(div_1);
	var node = sibling(div_1, 2);
	var consequent = ($$anchor) => {
		append($$anchor, root$1());
	};
	var alternate_1 = ($$anchor) => {
		var fragment = root_3();
		var div_3 = first_child(fragment);
		var div_4 = child(div_3);
		var div_5 = sibling(child(div_4), 2);
		var span = sibling(child(div_5), 2);
		var text$1 = child(span);
		reset(span);
		reset(div_5);
		var div_6 = sibling(div_5, 2);
		var input = child(div_6);
		remove_input_defaults(input);
		reset(div_6);
		reset(div_4);
		var div_7 = sibling(div_4, 2);
		var div_8 = sibling(child(div_7), 2);
		var span_1 = sibling(child(div_8), 2);
		var text_1 = child(span_1);
		reset(span_1);
		reset(div_8);
		var div_9 = sibling(div_8, 2);
		var input_1 = child(div_9);
		remove_input_defaults(input_1);
		reset(div_9);
		reset(div_7);
		var div_10 = sibling(div_7, 2);
		var div_11 = sibling(child(div_10), 2);
		var span_2 = sibling(child(div_11), 2);
		var text_2 = child(span_2);
		reset(span_2);
		reset(div_11);
		var div_12 = sibling(div_11, 2);
		var input_2 = child(div_12);
		remove_input_defaults(input_2);
		reset(div_12);
		reset(div_10);
		reset(div_3);
		var node_1 = sibling(div_3, 2);
		var consequent_1 = ($$anchor) => {
			var div_13 = root_1();
			var text_3 = child(div_13, true);
			reset(div_13);
			template_effect(() => set_text(text_3, get(successMsg)));
			append($$anchor, div_13);
		};
		if_block(node_1, ($$render) => {
			if (get(successMsg)) $$render(consequent_1);
		});
		var node_2 = sibling(node_1, 2);
		var consequent_2 = ($$anchor) => {
			var div_14 = root_2();
			var text_4 = child(div_14, true);
			reset(div_14);
			template_effect(() => set_text(text_4, get(errorMsg)));
			append($$anchor, div_14);
		};
		if_block(node_2, ($$render) => {
			if (get(errorMsg)) $$render(consequent_2);
		});
		var div_15 = sibling(node_2, 2);
		var button_1 = child(div_15);
		var node_3 = child(button_1);
		var consequent_3 = ($$anchor) => {
			append($$anchor, text("Saving Limits…"));
		};
		var alternate = ($$anchor) => {
			append($$anchor, text("Save Workload Capacity Limits"));
		};
		if_block(node_3, ($$render) => {
			if (get(isSaving)) $$render(consequent_3);
			else $$render(alternate, -1);
		});
		reset(button_1);
		reset(div_15);
		template_effect(() => {
			set_text(text$1, `Operators can hold up to ${get(visaLimit) ?? ""} active Visas`);
			set_text(text_1, `Operators can hold up to ${get(vfsLimit) ?? ""} active VFS slots`);
			set_text(text_2, `Operators can hold up to ${get(holidayLimit) ?? ""} active Holidays`);
			button_1.disabled = get(isSaving);
		});
		bind_value(input, () => get(visaLimit), ($$value) => set(visaLimit, $$value));
		bind_value(input_1, () => get(vfsLimit), ($$value) => set(vfsLimit, $$value));
		bind_value(input_2, () => get(holidayLimit), ($$value) => set(holidayLimit, $$value));
		delegated("click", button_1, handleSave);
		append($$anchor, fragment);
	};
	if_block(node, ($$render) => {
		if (get(isLoading)) $$render(consequent);
		else $$render(alternate_1, -1);
	});
	reset(div);
	template_effect(() => button.disabled = get(isLoading) || get(isSaving));
	delegated("click", button, loadLimits);
	append($$anchor, div);
	pop();
}
delegate(["click"]);
//#endregion
//#region src/routes/(app)/staffs/operational/+page.svelte
var root = from_html(`<div class="space-y-6"><!> <!> <!></div>`);
function _page($$anchor, $$props) {
	push($$props, false);
	onMount(() => {
		staffsStore.loadOperational();
	});
	init();
	var div = root();
	head("1wz1yqs", ($$anchor) => {
		effect(() => {
			$document.title = "Operational Staff — Texas Accounts Portal";
		});
	});
	var node = child(div);
	StaffMetrics(node, {
		get users() {
			return staffsStore.operational.data;
		},
		portal: "operational"
	});
	var node_1 = sibling(node, 2);
	WorkloadLimitsCard(node_1, {});
	StaffTable(sibling(node_1, 2), {
		get users() {
			return staffsStore.operational.data;
		},
		portal: "operational",
		get loading() {
			return staffsStore.operational.loading;
		},
		get error() {
			return staffsStore.operational.error;
		},
		showOperationalPermissions: true,
		onRefresh: () => staffsStore.loadOperational(true)
	});
	reset(div);
	append($$anchor, div);
	pop();
}
//#endregion
export { _page as component };

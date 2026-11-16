import { B as append, Bt as reset, Ct as user_derived, G as text, H as from_html, Nt as pop, Pt as push, Q as get, R as set_text, T as clsx, j as snippet, o as prop, ot as template_effect, pt as child, w as set_class, zt as next } from "./dXkmWTgM.js";
import "./DhaYE-8x.js";
import { t as cn } from "./BMnsu3cW.js";
import { t as Badge } from "./DP907Z4e.js";
//#region src/lib/components/PageContainer.svelte
var root = from_html(`<div><!></div>`);
function PageContainer($$anchor, $$props) {
	push($$props, true);
	let className = prop($$props, "class", 3, "");
	var div = root();
	snippet(child(div), () => $$props.children);
	reset(div);
	template_effect(($0) => set_class(div, 1, $0), [() => clsx(cn("max-w-7xl mx-auto w-full space-y-6 pb-12", className()))]);
	append($$anchor, div);
	pop();
}
//#endregion
//#region src/lib/components/StatusBadge.svelte
function StatusBadge($$anchor, $$props) {
	push($$props, true);
	let className = prop($$props, "class", 3, "");
	const formattedStatus = user_derived(() => ($$props.status || "").toLowerCase().trim());
	const config = user_derived(() => () => {
		switch (get(formattedStatus)) {
			case "paid":
			case "approved":
			case "completed":
			case "success":
			case "active": return {
				variant: "success",
				label: $$props.status || "Completed"
			};
			case "pending":
			case "processing":
			case "partial":
			case "draft": return {
				variant: "warning",
				label: $$props.status || "Pending"
			};
			case "cancelled":
			case "failed":
			case "rejected":
			case "overdue": return {
				variant: "destructive",
				label: $$props.status || "Failed"
			};
			default: return {
				variant: "secondary",
				label: $$props.status || "Unknown"
			};
		}
	});
	const activeConfig = user_derived(() => get(config)());
	Badge($$anchor, {
		get variant() {
			return get(activeConfig).variant;
		},
		get class() {
			return className();
		},
		children: ($$anchor, $$slotProps) => {
			next();
			var text$1 = text();
			template_effect(() => set_text(text$1, get(activeConfig).label));
			append($$anchor, text$1);
		},
		$$slots: { default: true }
	});
	pop();
}
//#endregion
export { PageContainer as n, StatusBadge as t };

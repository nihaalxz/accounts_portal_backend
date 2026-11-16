import { t as __exportAll } from "../chunks/BP_521ii.js";
import { B as append, H as from_html } from "../chunks/dXkmWTgM.js";
import "../chunks/DhaYE-8x.js";
import "../chunks/DZfWAsjW.js";
import { t as redirect } from "../chunks/DFjFhk7n2.js";
//#region src/routes/(app)/sales/+page.ts
var _page_exports = /* @__PURE__ */ __exportAll({ load: () => load });
function load() {
	throw redirect(307, "/sales/dashboard");
}
//#endregion
//#region src/routes/(app)/sales/+page.svelte
var root = from_html(`<div class="h-96 flex items-center justify-center text-muted-foreground text-xs font-mono">Redirecting to Sales Entries Dashboard...</div>`);
function _page($$anchor) {
	append($$anchor, root());
}
//#endregion
export { _page as component, _page_exports as universal };

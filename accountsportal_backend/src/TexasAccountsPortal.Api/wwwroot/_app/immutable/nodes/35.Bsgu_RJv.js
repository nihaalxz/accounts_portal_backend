import { B as append, H as from_html, Vt as __exportAll } from "../chunks/CjADOP7e.js";
import { r as Redirect } from "../chunks/C0_FQhCQ.js";
import "../chunks/DhaYE-8x.js";
import "../chunks/CAg53IQA.js";
//#region node_modules/@sveltejs/kit/src/exports/index.js
/** @import { StandardSchemaV1 } from '@standard-schema/spec' */
/**
* Redirect a request. When called during request handling, SvelteKit will return a redirect response.
* Make sure you're not catching the thrown redirect, which would prevent SvelteKit from handling it.
*
* Most common status codes:
*  * `303 See Other`: redirect as a GET request (often used after a form POST request)
*  * `307 Temporary Redirect`: redirect will keep the request method
*  * `308 Permanent Redirect`: redirect will keep the request method, SEO will be transferred to the new page
*
* [See all redirect status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#redirection_messages)
*
* @param {300 | 301 | 302 | 303 | 304 | 305 | 306 | 307 | 308 | ({} & number)} status The [HTTP status code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#redirection_messages). Must be in the range 300-308.
* @param {string | URL} location The location to redirect to.
* @throws {Redirect} This error instructs SvelteKit to redirect to the specified location.
* @throws {Error} If the provided status is invalid or the location cannot be used as a header value.
* @return {never}
*/
function redirect(status, location) {
	throw new Redirect(status, location.toString());
}
//#endregion
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

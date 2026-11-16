import { r as Redirect } from "./C0_FQhCQ.js";
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
export { redirect as t };

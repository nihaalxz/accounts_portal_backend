import { Vt as __exportAll } from "./BdGPDeRo.js";
import { i as setAccessToken, o as REF_TOKEN_COOKIE_NAME, t as apiFetch } from "./D7kp2URN.js";
//#region src/lib/auth/cookies.ts
/**
* Reads a cookie value by name. Returns null if not in browser or not found.
*/
function getCookie(name) {
	const nameEQ = encodeURIComponent(name) + "=";
	const ca = document.cookie.split(";");
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		if (c === void 0) continue;
		while (c.charAt(0) === " ") c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
	}
	return null;
}
/**
* Sets a client-side cookie. Forces SameSite=Strict and Secure by default.
*/
function setCookie(name, value, options = {}) {
	const path = options.path ?? "/";
	const sameSite = options.sameSite ?? "strict";
	let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; path=${path}; samesite=${sameSite}; secure`;
	if (options.expires) {
		const expiresStr = options.expires instanceof Date ? options.expires.toUTCString() : options.expires;
		cookieString += `; expires=${expiresStr}`;
	}
	if (options.maxAge !== void 0) cookieString += `; max-age=${options.maxAge}`;
	document.cookie = cookieString;
}
/**
* Removes a cookie by setting its expiration to the past.
*/
function deleteCookie(name, path = "/") {
	setCookie(name, "", {
		expires: "Thu, 01 Jan 1970 00:00:00 GMT",
		maxAge: -1,
		path
	});
}
//#endregion
//#region src/lib/api/refresh.ts
var refresh_exports = /* @__PURE__ */ __exportAll({ attemptRefresh: () => attemptRefresh });
/**
* Attempts a token refresh via POST /api/auth/refresh.
* Returns the new access token on success, or null on failure.
* Automatically rotates the refresh token stored in the secure SameSite cookie.
*/
async function attemptRefresh() {
	const refreshToken = getCookie(REF_TOKEN_COOKIE_NAME);
	if (!refreshToken) return null;
	try {
		const res = await apiFetch("/api/auth/refresh", {
			method: "POST",
			body: JSON.stringify({ refreshToken }),
			skipRefresh: true
		});
		if (res?.accessToken && res?.refreshToken) {
			setAccessToken(res.accessToken);
			const expires = /* @__PURE__ */ new Date();
			expires.setDate(expires.getDate() + 7);
			setCookie(REF_TOKEN_COOKIE_NAME, res.refreshToken, {
				expires,
				sameSite: "strict"
			});
			return res.accessToken;
		}
		deleteCookie(REF_TOKEN_COOKIE_NAME);
		setAccessToken(null);
		return null;
	} catch {
		deleteCookie(REF_TOKEN_COOKIE_NAME);
		setAccessToken(null);
		return null;
	}
}
//#endregion
export { setCookie as i, refresh_exports as n, deleteCookie as r, attemptRefresh as t };

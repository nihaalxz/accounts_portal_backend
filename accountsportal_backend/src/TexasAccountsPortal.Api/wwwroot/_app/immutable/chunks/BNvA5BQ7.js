import { t as __exportAll } from "./BP_521ii.js";
import { Dt as derived, Ot as get, kt as writable } from "./dXkmWTgM.js";
import "./BZYHaBeJ.js";
import { a as setAccessToken, c as REF_TOKEN_COOKIE_NAME, r as clearAccessToken, t as apiFetch } from "./IBQyGwNz.js";
import { i as setCookie, r as deleteCookie, t as attemptRefresh } from "./Dvl7IFY3.js";
//#region src/lib/stores/auth.ts
var auth_exports = /* @__PURE__ */ __exportAll({
	bootstrapSession: () => bootstrapSession,
	clearSession: () => clearSession,
	currentUser: () => currentUser,
	hasRole: () => hasRole,
	isAuthenticated: () => isAuthenticated,
	isInitializing: () => isInitializing,
	login: () => login,
	logout: () => logout,
	updateCurrentUserProfile: () => updateCurrentUserProfile
});
var _auth = writable({
	user: null,
	isAuthenticated: false,
	isInitializing: true,
	sessionError: null
});
_auth.subscribe;
var currentUser = derived(_auth, ($a) => $a.user);
var isAuthenticated = derived(_auth, ($a) => $a.isAuthenticated);
var isInitializing = derived(_auth, ($a) => $a.isInitializing);
/**
* Checks if the current user matches the specified role name (case-insensitive).
*/
function hasRole(role) {
	const state = get(_auth);
	if (!state.user) return false;
	const normalizedRole = role.toLowerCase().replace(/\s+/g, "_");
	const userRole = state.user.userType.toLowerCase().replace(/\s+/g, "_");
	if (normalizedRole === "accounts" || normalizedRole === "accountant") return userRole === "accounts" || userRole === "accountant" || userRole === "normal_accountant" || userRole === "master_accountant";
	return userRole === normalizedRole;
}
/**
* Bootstraps the session on application initial mount.
* Attempts token rotation using the secure cookie. If successful, fetches profile.
*/
async function bootstrapSession() {
	_auth.update((s) => ({
		...s,
		isInitializing: true,
		sessionError: null
	}));
	try {
		if (!await attemptRefresh()) {
			_auth.set({
				user: null,
				isAuthenticated: false,
				isInitializing: false,
				sessionError: null
			});
			return;
		}
		const me = await apiFetch("/api/auth/me");
		_auth.set({
			user: {
				id: me.id,
				name: me.name,
				email: me.email,
				userType: me.userType,
				permissions: me.portalPermissions,
				profilePicture: me.profilePicture
			},
			isAuthenticated: true,
			isInitializing: false,
			sessionError: null
		});
	} catch (err) {
		clearAccessToken();
		deleteCookie(REF_TOKEN_COOKIE_NAME);
		const message = err instanceof Error ? err.message : "Session restoration failed.";
		_auth.set({
			user: null,
			isAuthenticated: false,
			isInitializing: false,
			sessionError: message
		});
	}
}
/**
* Logs in the user with email and password.
* Stores access token in-memory and sets refresh token in secure SameSite cookie.
*/
async function login(email, password) {
	_auth.update((s) => ({
		...s,
		sessionError: null
	}));
	const res = await apiFetch("/api/auth/login", {
		method: "POST",
		body: JSON.stringify({
			email,
			password
		}),
		skipRefresh: true
	});
	setAccessToken(res.accessToken);
	const expires = /* @__PURE__ */ new Date();
	expires.setDate(expires.getDate() + 7);
	setCookie(REF_TOKEN_COOKIE_NAME, res.refreshToken, {
		expires,
		sameSite: "strict"
	});
	_auth.set({
		user: {
			id: res.id,
			name: res.name,
			email: res.email,
			userType: res.userType,
			permissions: res.portalPermissions,
			profilePicture: res.profilePicture
		},
		isAuthenticated: true,
		isInitializing: false,
		sessionError: null
	});
}
/**
* Logs out the user by revoking the refresh token server-side and clearing client state.
*/
async function logout() {
	try {
		const token = attemptRefresh();
		await apiFetch("/api/auth/logout", {
			method: "POST",
			body: JSON.stringify({ refreshToken: token }),
			skipRefresh: true
		});
	} catch {} finally {
		clearSession();
	}
}
/**
* Clears in-memory session and cookies immediately.
*/
function clearSession() {
	clearAccessToken();
	deleteCookie(REF_TOKEN_COOKIE_NAME);
	_auth.set({
		user: null,
		isAuthenticated: false,
		isInitializing: false,
		sessionError: null
	});
}
/**
* Updates the profile picture of the current user locally.
*/
function updateCurrentUserProfile(profilePicture) {
	_auth.update((s) => {
		if (s.user) return {
			...s,
			user: {
				...s.user,
				profilePicture: profilePicture !== void 0 ? profilePicture : s.user.profilePicture
			}
		};
		return s;
	});
}
//#endregion
export { isAuthenticated as a, logout as c, hasRole as i, updateCurrentUserProfile as l, bootstrapSession as n, isInitializing as o, currentUser as r, login as s, auth_exports as t };

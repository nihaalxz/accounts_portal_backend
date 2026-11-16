const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DIrSJ8Hw.js","./BP_521ii.js","./mpjJheUa.js","./dXkmWTgM.js","./BZYHaBeJ.js"])))=>i.map(i=>d[i]);
import { t as __vitePreload } from "./DHlaQ_oz.js";
//#region \0virtual:env/dynamic/public
var env = globalThis.__sveltekit_12srnxu.env;
/**
* Resolves the backend API base URL from the public environment.
* In dev mode, defaults to http://localhost:5028.
* In production mode, defaults to https://accountstexas.runasp.net unless overridden.
*/
function getBackendUrl() {
	const url = env.PUBLIC_BACKEND_API_URL;
	if (!url) return "https://accountstexas.runasp.net";
	try {
		if (!new URL(url).protocol.startsWith("http")) throw new Error("PUBLIC_BACKEND_API_URL must use HTTP or HTTPS protocol.");
	} catch (err) {
		const detail = err instanceof Error ? err.message : String(err);
		throw new Error(`Invalid PUBLIC_BACKEND_API_URL configuration value: "${url}". Detail: ${detail}`, { cause: err });
	}
	return url;
}
var BACKEND_API_URL = getBackendUrl();
var REF_TOKEN_COOKIE_NAME = "accounts_refresh_token";
function getSalesPortalUrl() {
	const url = env.PUBLIC_SALES_PORTAL_API_URL;
	if (!url) return "https://salestexas.runasp.net";
	try {
		if (!new URL(url).protocol.startsWith("http")) throw new Error("PUBLIC_SALES_PORTAL_API_URL must use HTTP or HTTPS protocol.");
	} catch (err) {
		const detail = err instanceof Error ? err.message : String(err);
		throw new Error(`Invalid PUBLIC_SALES_PORTAL_API_URL configuration value: "${url}". Detail: ${detail}`, { cause: err });
	}
	return url;
}
var SALES_PORTAL_API_URL = getSalesPortalUrl();
function getSignalRHubUrl() {
	const url = env.PUBLIC_SIGNALR_URL || env.PUBLIC_SALES_PORTAL_API_URL;
	if (url) return `${url.endsWith("/") ? url.slice(0, -1) : url}/hubs/texas-sync`;
	return `https://salestexas.runasp.net/hubs/texas-sync`;
}
var REALTIME_SIGNALR_HUB_URL = getSignalRHubUrl();
function getSalesPortalFileUrl(filePath) {
	if (!filePath) return null;
	if (filePath.startsWith("http://") || filePath.startsWith("https://") || filePath.startsWith("data:")) return filePath;
	return `${SALES_PORTAL_API_URL.endsWith("/") ? SALES_PORTAL_API_URL.slice(0, -1) : SALES_PORTAL_API_URL}${filePath.startsWith("/") ? filePath : `/${filePath}`}`;
}
function getOperationalPortalUrl() {
	const url = env.PUBLIC_OPERATIONAL_PORTAL_API_URL;
	if (!url) return "https://operationtexas.runasp.net";
	try {
		if (!new URL(url).protocol.startsWith("http")) throw new Error("PUBLIC_OPERATIONAL_PORTAL_API_URL must use HTTP or HTTPS protocol.");
	} catch (err) {
		const detail = err instanceof Error ? err.message : String(err);
		throw new Error(`Invalid PUBLIC_OPERATIONAL_PORTAL_API_URL configuration value: "${url}". Detail: ${detail}`, { cause: err });
	}
	return url;
}
getOperationalPortalUrl();
//#endregion
//#region src/lib/api/problem-details.ts
var ApiError = class extends Error {
	status;
	title;
	detail;
	instance;
	correlationId;
	constructor(status, title, detail, instance, correlationId) {
		super(`${status} ${title}: ${detail}`);
		this.name = "ApiError";
		this.status = status;
		this.title = title;
		this.detail = detail;
		this.instance = instance;
		this.correlationId = correlationId;
	}
};
var ValidationError = class extends ApiError {
	errors;
	constructor(detail, errors, instance, correlationId) {
		super(400, "Validation Error", detail, instance, correlationId);
		this.name = "ValidationError";
		this.errors = errors;
	}
};
var AuthenticationError = class extends ApiError {
	constructor(detail = "Not authenticated. Please log in.", instance, correlationId) {
		super(401, "Unauthorized", detail, instance, correlationId);
		this.name = "AuthenticationError";
	}
};
var AuthorizationError = class extends ApiError {
	constructor(detail = "You do not have permission to access this resource.", instance, correlationId) {
		super(403, "Forbidden", detail, instance, correlationId);
		this.name = "AuthorizationError";
	}
};
var NotFoundError = class extends ApiError {
	constructor(detail = "The requested resource was not found.", instance, correlationId) {
		super(404, "Not Found", detail, instance, correlationId);
		this.name = "NotFoundError";
	}
};
var ConflictError = class extends ApiError {
	constructor(detail = "A conflict occurred while processing the request.", instance, correlationId) {
		super(409, "Conflict", detail, instance, correlationId);
		this.name = "ConflictError";
	}
};
var ConcurrencyConflictError = class extends ConflictError {
	constructor(detail = "The record has been modified by another process. Please reload and try again.", instance, correlationId) {
		super(detail, instance, correlationId);
		this.name = "ConcurrencyConflictError";
	}
};
var RateLimitError = class extends ApiError {
	constructor(detail = "Too many requests. Please wait a moment before trying again.", instance, correlationId) {
		super(429, "Too Many Requests", detail, instance, correlationId);
		this.name = "RateLimitError";
	}
};
var DownstreamUnavailableError = class extends ApiError {
	constructor(detail = "The service is currently unavailable. Please retry in a moment.", instance, correlationId) {
		super(503, "Service Unavailable", detail, instance, correlationId);
		this.name = "DownstreamUnavailableError";
	}
};
var TimeoutError = class extends ApiError {
	constructor(detail = "The request timed out. Please try again.", instance, correlationId) {
		super(504, "Gateway Timeout", detail, instance, correlationId);
		this.name = "TimeoutError";
	}
};
var NetworkError = class extends Error {
	constructor(message = "Network unavailable. Please check your connection.", options) {
		super(message, options);
		this.name = "NetworkError";
	}
};
var UnknownApiError = class extends ApiError {
	constructor(status, detail = "An unexpected error occurred.", instance, correlationId) {
		super(status, "Unknown Error", detail, instance, correlationId);
		this.name = "UnknownApiError";
	}
};
/**
* Maps standard RFC-7807 response body + HTTP status → typed custom ApiError classes.
*/
function parseProblemDetails(status, body) {
	const b = body;
	const detail = (typeof b?.detail === "string" ? b.detail : void 0) ?? (typeof b?.message === "string" ? b.message : void 0) ?? (typeof b?.Message === "string" ? b.Message : void 0) ?? "An unexpected error occurred.";
	const instance = typeof b?.instance === "string" ? b.instance : void 0;
	const correlationId = typeof b?.traceId === "string" ? b.traceId : typeof b?.correlationId === "string" ? b.correlationId : void 0;
	switch (status) {
		case 400:
		case 422: return new ValidationError(detail, b?.errors && typeof b.errors === "object" ? b.errors : {}, instance, correlationId);
		case 401: return new AuthenticationError(detail, instance, correlationId);
		case 403: return new AuthorizationError(detail, instance, correlationId);
		case 404: return new NotFoundError(detail, instance, correlationId);
		case 409:
			if (detail.toLowerCase().includes("concurrency") || detail.toLowerCase().includes("modified") || detail.toLowerCase().includes("rowversion") || detail.toLowerCase().includes("idempotency")) return new ConcurrencyConflictError(detail, instance, correlationId);
			return new ConflictError(detail, instance, correlationId);
		case 429: return new RateLimitError(detail, instance, correlationId);
		case 502:
		case 503: return new DownstreamUnavailableError(detail, instance, correlationId);
		case 504: return new TimeoutError(detail, instance, correlationId);
		default: return new UnknownApiError(status, detail, instance, correlationId);
	}
}
//#endregion
//#region src/lib/api/api-client.ts
var _accessToken = null;
function setAccessToken(token) {
	_accessToken = token;
}
function getAccessToken() {
	return _accessToken;
}
function clearAccessToken() {
	_accessToken = null;
}
var _getCache = {};
var CACHE_TTL_MS = 5e3;
var _refreshPromise = null;
async function apiFetch(path, options = {}) {
	const { baseUrl = BACKEND_API_URL, params, token, skipRefresh = false, idempotencyKey, timeoutMs = 15e3, headers, signal, ...rest } = options;
	const method = (rest.method || "GET").toUpperCase();
	const cacheKey = `${method}:${path}:${JSON.stringify(params || {})}`;
	if (method === "GET") {
		const cached = _getCache[cacheKey];
		if (cached && Date.now() - cached.timestamp < CACHE_TTL_MS) return cached.data;
	}
	const doFetch = async (tok) => {
		const url = new URL(path.startsWith("/") ? path.slice(1) : path, baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`);
		if (params) Object.entries(params).forEach(([key, val]) => {
			if (val !== void 0 && val !== null) url.searchParams.append(key, String(val));
		});
		const requestHeaders = new Headers(headers);
		if (!requestHeaders.has("Accept")) requestHeaders.set("Accept", "application/json");
		if (!requestHeaders.has("Content-Type") && rest.body && !(rest.body instanceof FormData)) requestHeaders.set("Content-Type", "application/json");
		const activeToken = tok ?? getAccessToken();
		if (activeToken) requestHeaders.set("Authorization", `Bearer ${activeToken}`);
		if (idempotencyKey) requestHeaders.set("Idempotency-Key", idempotencyKey);
		const correlationId = typeof crypto !== "undefined" && typeof crypto.randomUUID === "function" ? crypto.randomUUID() : Math.random().toString(36).substring(2);
		requestHeaders.set("X-Correlation-ID", correlationId);
		let timeoutId;
		let fetchSignal = signal;
		if (!signal && timeoutMs > 0) {
			const controller = new AbortController();
			timeoutId = setTimeout(() => controller.abort(), timeoutMs);
			fetchSignal = controller.signal;
		}
		try {
			return await fetch(url.toString(), {
				headers: requestHeaders,
				signal: fetchSignal,
				...rest
			});
		} finally {
			if (timeoutId !== void 0) clearTimeout(timeoutId);
		}
	};
	let response;
	try {
		response = await doFetch(token ?? null);
	} catch (err) {
		if (err instanceof Error && err.name === "AbortError") {
			if (signal?.aborted) throw err;
			throw new Error("Request timed out or cancelled.", { cause: err });
		}
		throw new NetworkError(void 0, { cause: err });
	}
	if (response.status === 401 && !skipRefresh) {
		if (!_refreshPromise) {
			const { attemptRefresh } = await __vitePreload(async () => {
				const { attemptRefresh } = await import("./DIrSJ8Hw.js").then((n) => n.n);
				return { attemptRefresh };
			}, __vite__mapDeps([0,1]), import.meta.url);
			_refreshPromise = attemptRefresh().finally(() => {
				_refreshPromise = null;
			});
		}
		const newToken = await _refreshPromise;
		if (!newToken) {
			const { clearSession } = await __vitePreload(async () => {
				const { clearSession } = await import("./mpjJheUa.js").then((n) => n.t);
				return { clearSession };
			}, __vite__mapDeps([2,1,3,4,0]), import.meta.url);
			clearSession();
			throw new AuthenticationError("Your session has expired. Please log in again.");
		}
		try {
			response = await doFetch(newToken);
		} catch (err) {
			if (err instanceof Error && err.name === "AbortError") {
				if (signal?.aborted) throw err;
				throw new Error("Request timed out or cancelled.", { cause: err });
			}
			throw new NetworkError(void 0, { cause: err });
		}
	}
	if (response.status === 204) return null;
	const isJson = (response.headers.get("content-type") || "").includes("application/json");
	if (!response.ok) {
		let errorBody = null;
		if (isJson) try {
			errorBody = await response.json();
		} catch {}
		throw parseProblemDetails(response.status, errorBody);
	}
	return (isJson ? response.json() : response.text()).then((data) => {
		if (method === "GET") _getCache[cacheKey] = {
			data,
			timestamp: Date.now()
		};
		else for (const k in _getCache) delete _getCache[k];
		return data;
	});
}
async function apiFetchBlob(path, options = {}) {
	const salesBaseUrl = SALES_PORTAL_API_URL || "http://localhost:5003";
	const { baseUrl = salesBaseUrl, params, token, headers, ...rest } = options;
	const url = new URL(path.startsWith("/") ? path.slice(1) : path, baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`);
	if (params) Object.entries(params).forEach(([key, val]) => {
		if (val !== void 0 && val !== null) url.searchParams.append(key, String(val));
	});
	const requestHeaders = new Headers(headers);
	const activeToken = token ?? getAccessToken();
	if (activeToken) requestHeaders.set("Authorization", `Bearer ${activeToken}`);
	const response = await fetch(url.toString(), {
		headers: requestHeaders,
		credentials: "include",
		...rest
	});
	if (!response.ok) throw new Error(`Failed to fetch PDF: ${response.statusText}`);
	return response.blob();
}
//#endregion
export { setAccessToken as a, REF_TOKEN_COOKIE_NAME as c, getAccessToken as i, SALES_PORTAL_API_URL as l, apiFetchBlob as n, BACKEND_API_URL as o, clearAccessToken as r, REALTIME_SIGNALR_HUB_URL as s, apiFetch as t, getSalesPortalFileUrl as u };

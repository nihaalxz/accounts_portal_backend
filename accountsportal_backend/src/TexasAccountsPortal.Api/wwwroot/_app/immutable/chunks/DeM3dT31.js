import { B as append, Bt as reset, Ct as user_derived, H as from_html, Nt as pop, Pt as push, Q as get, R as set_text, o as prop, ot as template_effect, pt as child, w as set_class } from "./dXkmWTgM.js";
import "./DhaYE-8x.js";
//#region src/lib/formatters/date.ts
/**
* Timezone offset for Bahrain (UTC+3, no DST).
*/
var BAHRAIN_TIMEZONE = "Asia/Bahrain";
/**
* Formats a timezone-naive date-only value (e.g., '2026-07-10').
*/
function formatDateOnly(value, locale = "en-US") {
	if (!value) return "—";
	const date = typeof value === "string" ? new Date(value) : value;
	if (isNaN(date.getTime())) return "—";
	return new Intl.DateTimeFormat(locale, {
		year: "numeric",
		month: "short",
		day: "numeric",
		timeZone: BAHRAIN_TIMEZONE
	}).format(date);
}
/**
* Formats a timezone-aware audit timestamp, accounting for the +03:00 offset.
*/
function formatDateTime(value, locale = "en-US") {
	if (!value) return "—";
	const date = typeof value === "string" ? new Date(value) : value;
	if (isNaN(date.getTime())) return "—";
	return new Intl.DateTimeFormat(locale, {
		year: "numeric",
		month: "short",
		day: "numeric",
		hour: "numeric",
		minute: "2-digit",
		hour12: true,
		timeZone: BAHRAIN_TIMEZONE
	}).format(date);
}
/**
* Returns current date string in Bahrain timezone (YYYY-MM-DD).
*/
function getBahrainDateString(d = /* @__PURE__ */ new Date()) {
	return new Intl.DateTimeFormat("en-CA", { timeZone: BAHRAIN_TIMEZONE }).format(d);
}
/**
* Returns preset date ranges ('today', 'this-week', 'this-month') in Bahrain timezone.
*/
function getBahrainPresetRanges() {
	const now = /* @__PURE__ */ new Date();
	const todayStr = getBahrainDateString(now);
	const parts = new Intl.DateTimeFormat("en-US", {
		timeZone: BAHRAIN_TIMEZONE,
		year: "numeric",
		month: "numeric",
		day: "numeric"
	}).formatToParts(now);
	const year = parseInt(parts.find((p) => p.type === "year")?.value || "2026", 10);
	const month = parseInt(parts.find((p) => p.type === "month")?.value || "1", 10);
	const day = parseInt(parts.find((p) => p.type === "day")?.value || "1", 10);
	const monthStart = `${year}-${String(month).padStart(2, "0")}-01`;
	const lastDayNum = new Date(year, month, 0).getDate();
	const monthEnd = `${year}-${String(month).padStart(2, "0")}-${String(lastDayNum).padStart(2, "0")}`;
	const jsDate = new Date(year, month - 1, day);
	const dayOfWeek = (jsDate.getDay() + 6) % 7;
	const mondayDate = new Date(jsDate);
	mondayDate.setDate(jsDate.getDate() - dayOfWeek);
	const mondayStr = `${mondayDate.getFullYear()}-${String(mondayDate.getMonth() + 1).padStart(2, "0")}-${String(mondayDate.getDate()).padStart(2, "0")}`;
	return {
		today: {
			startDate: todayStr,
			endDate: todayStr
		},
		thisWeek: {
			startDate: mondayStr,
			endDate: todayStr
		},
		thisMonth: {
			startDate: monthStart,
			endDate: monthEnd
		}
	};
}
//#endregion
//#region src/lib/components/DateDisplay.svelte
var root = from_html(`<span> </span>`);
function DateDisplay($$anchor, $$props) {
	push($$props, true);
	let showTime = prop($$props, "showTime", 3, false), className = prop($$props, "class", 3, "");
	const targetDate = user_derived(() => $$props.value ?? $$props.date);
	const shouldShowTime = user_derived(() => showTime() || $$props.format === "datetime");
	var span = root();
	var text = child(span, true);
	reset(span);
	template_effect(($0) => {
		set_class(span, 1, `tabular-nums ${className() ?? ""}`);
		set_text(text, $0);
	}, [() => get(shouldShowTime) ? formatDateTime(get(targetDate)) : formatDateOnly(get(targetDate))]);
	append($$anchor, span);
	pop();
}
//#endregion
export { getBahrainDateString as n, getBahrainPresetRanges as r, DateDisplay as t };

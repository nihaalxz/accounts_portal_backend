import { Et as writable } from "./D1I-S_GP.js";
import "./B4oHdtvm.js";
//#region src/lib/stores/toast.ts
var _toasts = writable([]);
var toasts = { subscribe: _toasts.subscribe };
/**
* Triggers a global toast alert.
*/
function addToast(message, type = "info", duration = 4e3) {
	const id = Math.random().toString(36).substring(2);
	const toast = {
		id,
		type,
		message,
		duration
	};
	_toasts.update((list) => [...list, toast]);
	if (duration > 0) setTimeout(() => {
		removeToast(id);
	}, duration);
}
/**
* Clears a specific toast by its unique id.
*/
function removeToast(id) {
	_toasts.update((list) => list.filter((t) => t.id !== id));
}
var toast = {
	success: (msg, dur) => addToast(msg, "success", dur),
	error: (msg, dur) => addToast(msg, "error", dur),
	warning: (msg, dur) => addToast(msg, "warning", dur),
	info: (msg, dur) => addToast(msg, "info", dur)
};
//#endregion
export { toasts as i, removeToast as n, toast as r, addToast as t };

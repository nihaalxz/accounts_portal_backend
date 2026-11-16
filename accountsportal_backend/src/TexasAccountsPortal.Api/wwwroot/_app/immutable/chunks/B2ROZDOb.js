//#region src/lib/realtime/debounce-manager.ts
/**
* Trailing-edge Debounce Manager for batching rapid REST refresh operations.
*/
function createDebouncedRefetch(fetchFn, delayMs = 200) {
	let timeoutId = null;
	return () => {
		if (timeoutId !== null) clearTimeout(timeoutId);
		timeoutId = setTimeout(() => {
			fetchFn();
			timeoutId = null;
		}, delayMs);
	};
}
//#endregion
export { createDebouncedRefetch as t };

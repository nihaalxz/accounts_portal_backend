import { i as notificationDispatcher, n as signalRService, r as subscriptionManager } from "./QVGQX00H.js";
import { t as createDebouncedRefetch } from "./B2ROZDOb2.js";
//#region src/lib/realtime/realtime-controller.ts
var SalesEntriesRealtimeController = class {
	debouncedRefetch;
	targetEvent = "SalesEntriesChanged";
	targetGroup = "role:accounts";
	handler;
	unsubscribeDispatcher = null;
	constructor(onRefresh, delayMs = 200) {
		this.debouncedRefetch = createDebouncedRefetch(onRefresh, delayMs);
		this.handler = (envelope) => {
			console.log("[SALES ENTRIES CONTROLLER] Received SalesEntriesChanged event:", envelope);
			this.debouncedRefetch();
		};
	}
	async mount() {
		this.unsubscribeDispatcher = notificationDispatcher.on(this.targetEvent, this.handler);
		await signalRService.startConnection();
		await subscriptionManager.subscribe(this.targetGroup);
		console.log(`[SALES ENTRIES CONTROLLER] Subscribed to SignalR group: ${this.targetGroup}`);
	}
	async unmount() {
		if (this.unsubscribeDispatcher) {
			this.unsubscribeDispatcher();
			this.unsubscribeDispatcher = null;
		}
		await subscriptionManager.unsubscribe(this.targetGroup);
	}
};
//#endregion
export { SalesEntriesRealtimeController as t };

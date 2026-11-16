import { i as notificationDispatcher, n as signalRService, r as subscriptionManager, t as SignalRGroups } from "./C2S5odw2.js";
import { t as createDebouncedRefetch } from "./B2ROZDOb2.js";
//#region src/lib/realtime/receipt-realtime-controller.ts
var ReceiptRealtimeController = class {
	getHeadId;
	isApprovalQueue;
	isGlobalList;
	onReceiptChangedCallback;
	debouncedRefetch;
	currentSubscribedGroups = [];
	unsubscribeDispatcher = null;
	constructor(options) {
		this.getHeadId = options.getHeadId;
		this.isApprovalQueue = options.isApprovalQueue ?? false;
		this.isGlobalList = options.isGlobalList ?? false;
		this.onReceiptChangedCallback = options.onReceiptChanged;
		this.debouncedRefetch = createDebouncedRefetch(this.onReceiptChangedCallback, options.debounceMs ?? 200);
	}
	async mount() {
		this.unsubscribeDispatcher = notificationDispatcher.on("ReceiptChanged", (envelope) => {
			const headId = this.getHeadId ? this.getHeadId() : null;
			const isMatchingCustomer = headId && envelope.headId === headId;
			if (this.isApprovalQueue || this.isGlobalList || isMatchingCustomer) {
				console.log(`[RECEIPT REALTIME CONTROLLER] Received ReceiptChanged for Target ${envelope.targetGroup}. Triggering debounced refresh.`);
				this.debouncedRefetch();
			}
		});
		await this.syncSubscriptions();
	}
	async syncSubscriptions() {
		const targetGroups = [];
		if (this.isApprovalQueue) targetGroups.push(SignalRGroups.ReceiptApproval);
		if (this.isGlobalList) targetGroups.push(SignalRGroups.ReceiptList);
		if (this.getHeadId) {
			const headId = this.getHeadId();
			if (headId) targetGroups.push(SignalRGroups.CustomerReceipt(headId));
		}
		for (const oldGroup of this.currentSubscribedGroups) if (!targetGroups.includes(oldGroup)) await subscriptionManager.unsubscribeFromGroup(oldGroup);
		if (targetGroups.length > 0) {
			await signalRService.startConnection();
			for (const group of targetGroups) if (!this.currentSubscribedGroups.includes(group)) {
				await subscriptionManager.subscribeToGroup(group);
				console.log(`[RECEIPT REALTIME CONTROLLER] Subscribed to SignalR group: ${group}`);
			}
		}
		this.currentSubscribedGroups = targetGroups;
	}
	async unmount() {
		if (this.unsubscribeDispatcher) {
			this.unsubscribeDispatcher();
			this.unsubscribeDispatcher = null;
		}
		for (const group of this.currentSubscribedGroups) {
			await subscriptionManager.unsubscribeFromGroup(group);
			console.log(`[RECEIPT REALTIME CONTROLLER] Unsubscribed from SignalR group: ${group}`);
		}
		this.currentSubscribedGroups = [];
	}
};
//#endregion
export { ReceiptRealtimeController as t };

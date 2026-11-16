import { B as append, Bt as reset, Ct as user_derived, D as head, Et as store_get, G as text, H as from_html, I as if_block, J as event, K as delegate, N as each, Nt as pop, P as index, Pt as push, Q as get, R as set_text, Tt as setup_stores, V as comment, _ as set_attribute, b as bind_select_value, bt as state, dt as $document, g as remove_input_defaults, gt as proxy, ht as sibling, it as effect, m as bind_value, mt as first_child, ot as template_effect, pt as child, q as delegated, r as onMount, ut as remove_textarea_child, vt as set, w as set_class, zt as next } from "../chunks/dXkmWTgM.js";
import { t as goto } from "../chunks/Dt-MSBBU.js";
import "../chunks/DhaYE-8x.js";
import { t as apiFetch } from "../chunks/BjifOgip.js";
import { r as toast } from "../chunks/CbPRQHfn.js";
import { t as Arrow_left } from "../chunks/Bn7x0kyr.js";
import { t as Arrow_right } from "../chunks/DZE4Pk63.js";
import { t as Building_2 } from "../chunks/PAfPMPpZ.js";
import { t as Circle_alert } from "../chunks/CHXThoj_2.js";
import { t as Circle_check } from "../chunks/qB0lJ_dM2.js";
import { t as File_text } from "../chunks/NLRKrZbo2.js";
import { t as Plus } from "../chunks/BObidJ7B.js";
import { t as Refresh_cw } from "../chunks/DpTJy0Wb.js";
import { t as Rotate_cw } from "../chunks/D2_M9ozl.js";
import { t as Save } from "../chunks/YnLTLont.js";
import { t as Sparkles } from "../chunks/DEdRl-lg.js";
import { t as User_check } from "../chunks/tSSJYCMY.js";
import { t as Users } from "../chunks/Bja056I7.js";
import { t as Wallet } from "../chunks/BahXSy4P.js";
import { t as page } from "../chunks/DxIIXiJH.js";
import { t as Button } from "../chunks/BhXsq3bC.js";
import "../chunks/ibqKOESP2.js";
import { t as MoneyDisplay } from "../chunks/CIVSRuaR2.js";
import { r as getAccounts } from "../chunks/YyQh1mGh2.js";
import { n as getBanks } from "../chunks/CB63RyXo2.js";
import { t as SearchableSelect } from "../chunks/5jJpT0lD.js";
//#region src/routes/(app)/sales/receipts/new-client/+page.svelte
var root = from_html(`<!> General Receipt`, 1);
var root_1 = from_html(`<div class="bg-card border border-border rounded-2xl p-16 flex flex-col items-center justify-center gap-3 animate-pulse"><!> <span class="text-xs text-muted-foreground font-semibold">Loading receipt workspace...</span></div>`);
var root_2 = from_html(`<!> <span> </span>`, 1);
var root_3 = from_html(`<div class="p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-xs space-y-2"><div class="flex items-center justify-between"><span class="font-bold flex items-center gap-1.5"><!> Sales Portal Sync Error:</span> <!></div> <p class="font-mono text-[11px] opacity-90"> </p></div>`);
var root_4 = from_html(`<div class="flex items-center gap-2"><span class="text-muted-foreground">Client:</span> <span class="font-bold text-foreground"> </span> <span class="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-primary/10 text-primary"> </span></div>`);
var root_5 = from_html(`<div class="flex items-center gap-2"><span class="text-muted-foreground">Salesman:</span> <span class="font-semibold text-foreground"> </span></div>`);
var root_6 = from_html(`<div class="p-4 bg-muted/20 rounded-xl border border-border/40 flex flex-wrap items-center justify-between gap-3 text-xs"><!> <!></div>`);
var root_7 = from_html(`<!> Create Another Client Receipt`, 1);
var root_8 = from_html(`<span>View All Receipts</span> <!>`, 1);
var root_9 = from_html(`<div class="bg-card border border-border rounded-2xl p-6 shadow-sm space-y-6 animate-in fade-in-50 zoom-in-98 duration-200"><div class="flex items-start gap-4"><div><!></div> <div class="space-y-1 flex-1"><div class="flex items-center justify-between"><h2 class="text-base font-bold text-foreground"> </h2> <span> </span></div> <p class="text-xs text-muted-foreground">Receipt voucher <span class="font-mono font-bold text-foreground"> </span> has been recorded in the accounts ledger.</p></div></div> <!> <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs"><div class="p-3.5 bg-muted/30 rounded-xl border border-border/40 space-y-1"><span class="text-muted-foreground text-[10px] uppercase font-bold tracking-wider">Amount Credited</span> <div class="text-base font-black font-mono text-emerald-600"><!></div></div> <div class="p-3.5 bg-muted/30 rounded-xl border border-border/40 space-y-1"><span class="text-muted-foreground text-[10px] uppercase font-bold tracking-wider">Destination Account</span> <div class="font-bold text-foreground truncate"> </div> <span class="text-[10px] text-muted-foreground capitalize"> </span></div> <div class="p-3.5 bg-muted/30 rounded-xl border border-border/40 space-y-1"><span class="text-muted-foreground text-[10px] uppercase font-bold tracking-wider">Sales Portal Doc #</span> <div class="font-mono font-bold text-foreground"> </div></div></div> <!> <div class="flex items-center justify-end gap-3 pt-3 border-t border-border"><!> <!></div></div>`);
var root_10 = from_html(`<span class="text-[10px] text-primary flex items-center gap-1 font-semibold"><!> Loading clients...</span>`);
var root_11 = from_html(`<span class="text-[10px] text-muted-foreground font-mono"> </span>`);
var root_12 = from_html(`<span class="text-xs text-muted-foreground font-mono"> </span>`);
var root_13 = from_html(`<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full font-bold font-mono text-xs bg-emerald-500/20 text-emerald-800 dark:text-emerald-300"> </span>`);
var root_14 = from_html(`<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full font-bold font-mono text-xs bg-rose-500/20 text-rose-800 dark:text-rose-300"> </span>`);
var root_15 = from_html(`<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full font-bold font-mono text-xs bg-muted text-muted-foreground">Settled: 0.000 BHD</span>`);
var root_16 = from_html(`<span class="text-emerald-600 font-bold"> </span>`);
var root_17 = from_html(`<span class="text-amber-600 font-bold"> </span>`);
var root_18 = from_html(`<span class="text-emerald-600 font-bold">Prepaid funds increased</span>`);
var root_19 = from_html(`<div class="p-3 bg-background/80 rounded-xl border border-border/60 text-right space-y-0.5 shrink-0"><span class="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block">Projected Balance After Receipt</span> <div> </div> <span class="text-[10px] font-medium text-muted-foreground block"><!></span></div>`);
var root_20 = from_html(`<div><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"><div class="space-y-1"><div class="flex items-center gap-2"><span class="font-bold text-foreground text-sm"> </span> <span class="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-background border border-border"> </span> <!></div> <div class="flex items-center gap-2 text-xs"><span class="text-muted-foreground font-medium">Current Balance:</span> <!></div></div> <!></div></div>`);
var root_21 = from_html(`<div class="p-4 rounded-xl bg-muted/30 border border-dashed border-border text-center text-xs text-muted-foreground"> </div>`);
var root_22 = from_html(`<option> </option>`);
var root_23 = from_html(`<div class="space-y-1.5 sm:col-span-2"><label for="cashAccSelect" class="text-xs font-semibold text-foreground">Select Cash Account *</label> <select id="cashAccSelect" class="w-full text-xs bg-background border border-border rounded-xl px-3 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 font-semibold cursor-pointer" required=""></select></div>`);
var root_24 = from_html(`<div class="space-y-1.5 sm:col-span-2"><label for="bankAccSelect" class="text-xs font-semibold text-foreground">Select Bank Account *</label> <select id="bankAccSelect" class="w-full text-xs bg-background border border-border rounded-xl px-3 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 font-semibold cursor-pointer" required=""></select></div>`);
var root_25 = from_html(`<p class="text-[11px] text-muted-foreground font-semibold flex items-center gap-1 mt-1"><!> </p>`);
var root_26 = from_html(`<!> <span>Confirming & Syncing Receipt...</span>`, 1);
var root_27 = from_html(`<!> <span>Confirm Receipt & Credit Wallet</span>`, 1);
var root_28 = from_html(`<form class="space-y-6"><div class="bg-card border border-border rounded-2xl p-5 space-y-4 shadow-xs"><div class="flex items-center justify-between border-b border-border/40 pb-3"><div class="space-y-0.5"><h2 class="text-sm font-bold text-foreground flex items-center gap-2"><!> Sales Staff & Client Information</h2> <p class="text-xs text-muted-foreground">Select the responsible salesman and choose their Customer or Agent to credit their wallet.</p></div> <div class="bg-muted/50 p-1 rounded-xl border border-border flex items-center gap-1"><button type="button"><!> <span>Customer (Head)</span></button> <button type="button"><!> <span>Agent</span></button></div></div> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><div class="space-y-1.5"><label for="salesmanSelect" class="text-xs font-semibold text-foreground flex items-center justify-between"><span>Salesman *</span> <span class="text-[10px] text-muted-foreground">Responsible Sales Rep</span></label> <!></div> <div class="space-y-1.5"><label for="clientSelect" class="text-xs font-semibold text-foreground flex items-center justify-between"><span> </span> <!></label> <!></div></div> <!></div> <div class="bg-card border border-border rounded-2xl p-5 space-y-4 shadow-xs"><div class="flex items-center justify-between border-b border-border/40 pb-3"><div class="space-y-0.5"><h2 class="text-sm font-bold text-foreground flex items-center gap-2"><!> Target Destination Account</h2> <p class="text-xs text-muted-foreground">Specify the Cash Drawer or Bank Account where funds were collected.</p></div> <div class="bg-muted/50 p-1 rounded-xl border border-border flex items-center gap-1"><button type="button"><!> <span>Cash Drawer</span></button> <button type="button"><!> <span>Bank Account</span></button></div></div> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><!></div></div> <div class="bg-card border border-border rounded-2xl p-5 space-y-4 shadow-xs"><h2 class="text-sm font-bold text-foreground border-b border-border/40 pb-3 flex items-center gap-2"><!> Receipt Amount & Transaction Details</h2> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><div class="space-y-1.5"><label for="receiptAmount" class="text-xs font-semibold text-foreground">Receipt Amount (BHD) *</label> <div class="flex items-center rounded-xl border border-border bg-background focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary overflow-hidden h-10 shadow-2xs transition-all"><span class="px-3 h-full flex items-center justify-center bg-muted/50 border-r border-border text-xs font-bold text-muted-foreground font-mono select-none">BHD</span> <input id="receiptAmount" type="number" step="0.001" min="0.001" placeholder="0.000" class="flex-1 h-full px-3 bg-transparent text-sm font-bold font-mono text-foreground placeholder:text-muted-foreground/50 focus:outline-none" required=""/></div></div> <div class="space-y-1.5"><label for="referenceIdInput" class="text-xs font-semibold text-foreground flex items-center justify-between"><span>Reference ID *</span> <button type="button" class="text-[10px] text-primary hover:underline font-semibold cursor-pointer">Auto Generate</button></label> <input id="referenceIdInput" type="text" placeholder="e.g. CHEQUE-0982 or TXN-REF" required="" class="w-full h-10 px-3 bg-background border border-border rounded-xl text-xs font-mono text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"/></div></div> <div class="space-y-1.5 pt-1"><label for="receiptDescription" class="text-xs font-semibold text-foreground">Narration / Description (Optional)</label> <textarea id="receiptDescription" rows="2" class="w-full text-xs bg-background border border-border rounded-xl px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"></textarea></div> <div class="space-y-1.5 pt-2 border-t border-border/40"><label for="receiptProofFile" class="text-xs font-semibold text-muted-foreground">Payment Proof / Bank Slip / Cheque Copy (Optional)</label> <input id="receiptProofFile" type="file" accept=".pdf,.png,.jpg,.jpeg" class="w-full text-xs bg-background border border-border rounded-xl px-3 py-2 text-foreground file:mr-2 file:py-1 file:px-2.5 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-primary/10 file:text-primary file:cursor-pointer"/> <!></div></div> <div class="flex items-center justify-end gap-3 pt-2"><!> <!></div></form>`);
var root_29 = from_html(`<div class="max-w-4xl mx-auto space-y-6 pb-12"><div class="space-y-2"><button type="button" class="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground cursor-pointer transition-colors"><!> Back to Receipts Workspace</button> <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"><div class="space-y-1"><h1 class="text-xl font-bold text-foreground tracking-tight flex items-center gap-2"><!> Create Client Receipt</h1> <p class="text-xs text-muted-foreground">Issue receipts against Customer & Agent balances under sales staff, immediately crediting their wallet and target treasury account.</p></div> <div class="flex items-center gap-2"><!></div></div></div> <!></div>`);
function _page($$anchor, $$props) {
	push($$props, true);
	const $page = () => store_get(page, "$page", $$stores);
	const [$$stores, $$cleanup] = setup_stores();
	let salesmen = state(proxy([]));
	let selectedSalesmanId = state("");
	let clientType = state("customer");
	let clients = state(proxy([]));
	let selectedClientId = state("");
	let isLoadingClients = state(false);
	let destinationType = state("account");
	let selectedAccountId = state("");
	let selectedBankId = state("");
	let cashAccounts = state(proxy([]));
	let bankAccounts = state(proxy([]));
	let amount = state("");
	let referenceId = state("");
	let description = state("");
	let paymentProof = state(null);
	let paymentProofFile = state(null);
	let isLoadingInitial = state(true);
	let isSubmitting = state(false);
	let isRetryingSync = state(false);
	let submissionResult = state(null);
	let syncError = state(null);
	const salesmanOptions = user_derived(() => get(salesmen).map((s) => ({
		id: s.id,
		name: s.name,
		subtext: s.email || void 0
	})));
	const selectedSalesman = user_derived(() => get(salesmen).find((s) => String(s.id) === get(selectedSalesmanId)) || null);
	const clientOptions = user_derived(() => get(clients).map((c) => ({
		id: c.id,
		name: c.name,
		subtext: `${c.phone || c.email || "No phone"} • Balance: ${Number(c.wallet).toFixed(3)} BHD`
	})));
	const selectedClient = user_derived(() => get(clients).find((c) => String(c.id) === get(selectedClientId)) || null);
	const selectedCashAccount = user_derived(() => get(cashAccounts).find((a) => String(a.id) === get(selectedAccountId)) || null);
	const selectedBankAccount = user_derived(() => get(bankAccounts).find((b) => String(b.id) === get(selectedBankId)) || null);
	const parsedAmount = user_derived(() => parseFloat(get(amount)) || 0);
	const clientBalance = user_derived(() => get(selectedClient) ? Number(get(selectedClient).wallet) : 0);
	const projectedBalance = user_derived(() => get(selectedClient) ? get(clientBalance) + get(parsedAmount) : 0);
	async function loadDropdowns() {
		set(isLoadingInitial, true);
		try {
			const [cashList, bankList, salesmanList] = await Promise.all([
				getAccounts().catch(() => []),
				getBanks().catch(() => []),
				apiFetch("api/sales-entries/salesmen").catch(() => [])
			]);
			set(cashAccounts, (Array.isArray(cashList) ? cashList : cashList?.items || []).filter((a) => a.isActive), true);
			set(bankAccounts, (Array.isArray(bankList) ? bankList : bankList?.items || []).filter((b) => b.isActive), true);
			set(salesmen, Array.isArray(salesmanList) ? salesmanList : [], true);
			if (get(cashAccounts).length > 0 && get(cashAccounts)[0] && !get(selectedAccountId)) set(selectedAccountId, String(get(cashAccounts)[0].id), true);
			if (get(bankAccounts).length > 0 && get(bankAccounts)[0] && !get(selectedBankId)) set(selectedBankId, String(get(bankAccounts)[0].id), true);
			const qSalesmanId = $page().url.searchParams.get("salesmanId");
			const qClientType = $page().url.searchParams.get("clientType");
			const qHeadId = $page().url.searchParams.get("headId") || $page().url.searchParams.get("clientId");
			const qAgentId = $page().url.searchParams.get("agentId") || $page().url.searchParams.get("clientId");
			if (qClientType === "agent" || qClientType === "customer") set(clientType, qClientType, true);
			if (qSalesmanId) {
				set(selectedSalesmanId, qSalesmanId, true);
				await fetchClients(qSalesmanId, get(clientType));
				if (get(clientType) === "customer" && qHeadId) set(selectedClientId, qHeadId, true);
				else if (get(clientType) === "agent" && qAgentId) set(selectedClientId, qAgentId, true);
			} else if (get(salesmen).length > 0 && get(salesmen)[0]) {
				set(selectedSalesmanId, String(get(salesmen)[0].id), true);
				await fetchClients(get(selectedSalesmanId), get(clientType));
				if (get(clientType) === "customer" && qHeadId) set(selectedClientId, qHeadId, true);
				else if (get(clientType) === "agent" && qAgentId) set(selectedClientId, qAgentId, true);
			}
		} catch (err) {
			console.error("Failed to load initial data:", err);
			toast.error("Failed to load accounts and salesmen data.");
		} finally {
			set(isLoadingInitial, false);
		}
	}
	async function fetchClients(salesmanId, type) {
		if (!salesmanId) {
			set(clients, [], true);
			set(selectedClientId, "");
			return;
		}
		set(isLoadingClients, true);
		try {
			const res = await apiFetch(`api/sales-entries/salesmen/${salesmanId}/clients`, { params: {
				type,
				page: 1,
				pageSize: 500
			} });
			set(clients, (res?.items || []).map((item) => ({
				id: item.id,
				name: item.name,
				phone: item.phone,
				email: item.email,
				clientType: item.clientType,
				wallet: Number(item.wallet ?? 0),
				salesmanId: item.salesmanId,
				status: item.status
			})), true);
			if (!get(clients).some((c) => String(c.id) === get(selectedClientId))) set(selectedClientId, get(clients).length > 0 && get(clients)[0] ? String(get(clients)[0].id) : "", true);
		} catch (err) {
			console.error("Failed to fetch clients:", err);
			toast.error(`Failed to load ${type === "customer" ? "customers" : "agents"} for selected salesman.`);
			set(clients, [], true);
			set(selectedClientId, "");
		} finally {
			set(isLoadingClients, false);
		}
	}
	function handleSalesmanChange(val) {
		set(selectedSalesmanId, String(val), true);
		set(selectedClientId, "");
		fetchClients(get(selectedSalesmanId), get(clientType));
	}
	function handleClientTypeChange(type) {
		set(clientType, type, true);
		set(selectedClientId, "");
		fetchClients(get(selectedSalesmanId), type);
	}
	function handleQuickGenerateRef() {
		const prefix = get(clientType) === "customer" ? "CRCPT" : "ARCPT";
		const datePart = (/* @__PURE__ */ new Date()).toISOString().slice(2, 10).replace(/-/g, "");
		const randPart = Math.floor(1e3 + Math.random() * 9e3);
		set(referenceId, `${prefix}-${datePart}-${randPart}`);
	}
	function handlePaymentProofChange(e) {
		const target = e.target;
		if (target.files && target.files[0]) {
			const file = target.files[0];
			set(paymentProofFile, file, true);
			const reader = new FileReader();
			reader.onload = (event) => {
				set(paymentProof, event.target?.result, true);
			};
			reader.readAsDataURL(file);
		} else {
			set(paymentProofFile, null);
			set(paymentProof, null);
		}
	}
	async function handleSubmit(e) {
		e.preventDefault();
		if (get(parsedAmount) <= 0) {
			toast.error("Please enter a valid receipt amount greater than zero.");
			return;
		}
		if (get(destinationType) === "account" && !get(selectedAccountId)) {
			toast.error("Please select a Destination Cash Account.");
			return;
		}
		if (get(destinationType) === "bank" && !get(selectedBankId)) {
			toast.error("Please select a Destination Bank Account.");
			return;
		}
		if (!get(referenceId).trim()) {
			toast.error("Reference ID is required and must be unique.");
			return;
		}
		if (!get(selectedSalesmanId)) {
			toast.error("Please select a Salesman.");
			return;
		}
		if (!get(selectedClientId)) {
			toast.error(`Please select a ${get(clientType) === "customer" ? "Customer" : "Agent"}.`);
			return;
		}
		set(isSubmitting, true);
		set(syncError, null);
		try {
			get(destinationType) === "account" ? get(selectedCashAccount)?.name : get(selectedBankAccount)?.bankName;
			const payload = {
				destinationType: get(destinationType),
				destinationAccountId: get(destinationType) === "account" ? parseInt(get(selectedAccountId), 10) : null,
				destinationBankId: get(destinationType) === "bank" ? parseInt(get(selectedBankId), 10) : null,
				amount: get(parsedAmount),
				clientType: get(clientType),
				headId: get(clientType) === "customer" ? parseInt(get(selectedClientId), 10) : null,
				agentId: get(clientType) === "agent" ? parseInt(get(selectedClientId), 10) : null,
				salesmanId: get(selectedSalesman) ? get(selectedSalesman).id : null,
				salesmanName: get(selectedSalesman) ? get(selectedSalesman).name : null,
				clientName: get(selectedClient) ? get(selectedClient).name : null,
				agentName: get(clientType) === "agent" && get(selectedClient) ? get(selectedClient).name : null,
				description: get(description).trim() || `Payment Receipt from ${get(selectedClient)?.name || "Client"} (${get(clientType)}) via ${get(selectedSalesman)?.name || "Salesman"}`,
				referenceId: get(referenceId).trim(),
				paymentProof: get(paymentProof),
				receiptDate: (/* @__PURE__ */ new Date()).toISOString()
			};
			const result = await apiFetch("api/sales-entries/receipts", {
				method: "POST",
				body: JSON.stringify(payload)
			});
			set(submissionResult, result, true);
			if (result.syncStatus === "Failed") {
				set(syncError, {
					receiptId: result.id,
					message: result.failureReason || "Failed to sync receipt with Sales Portal."
				}, true);
				toast.error("Receipt saved locally, but Sales Portal sync failed.");
			} else toast.success(`Client receipt recorded! Wallet credited by ${get(parsedAmount).toFixed(3)} BHD.`);
		} catch (err) {
			console.error("Failed to create receipt:", err);
			toast.error(err?.message || "Failed to create payment receipt.");
		} finally {
			set(isSubmitting, false);
		}
	}
	async function handleRetrySync() {
		if (!get(syncError)?.receiptId) return;
		set(isRetryingSync, true);
		try {
			const retried = await apiFetch(`api/sales-entries/accounts-receipts/${get(syncError).receiptId}/retry`, { method: "POST" });
			if (retried.syncStatus === "Synced") {
				set(submissionResult, retried, true);
				set(syncError, null);
				toast.success(`Sync successful! Sales Portal Receipt: ${retried.salesPortalDocumentNumber || retried.salesPortalReceiptId}`);
			} else {
				set(syncError, {
					receiptId: retried.id,
					message: retried.failureReason || "Sync attempt failed again."
				}, true);
				toast.error("Sync attempt failed again.");
			}
		} catch (err) {
			console.error("Retry sync error:", err);
			toast.error(err?.message || "Failed to retry sync.");
		} finally {
			set(isRetryingSync, false);
		}
	}
	function resetForm() {
		set(submissionResult, null);
		set(syncError, null);
		set(amount, "");
		set(referenceId, "");
		set(description, "");
		set(paymentProof, null);
		set(paymentProofFile, null);
		if (get(selectedSalesmanId)) fetchClients(get(selectedSalesmanId), get(clientType));
	}
	onMount(() => {
		loadDropdowns();
	});
	var div = root_29();
	head("1hw2lp9", ($$anchor) => {
		effect(() => {
			$document.title = "Create Client Receipt — Accounts Portal";
		});
	});
	var div_1 = child(div);
	var button = child(div_1);
	Arrow_left(child(button), { class: "h-3.5 w-3.5" });
	next();
	reset(button);
	var div_2 = sibling(button, 2);
	var div_3 = child(div_2);
	var h1 = child(div_3);
	Wallet(child(h1), { class: "h-5 w-5 text-primary" });
	next();
	reset(h1);
	next(2);
	reset(div_3);
	var div_4 = sibling(div_3, 2);
	Button(child(div_4), {
		type: "button",
		variant: "outline",
		size: "sm",
		class: "rounded-xl text-xs font-semibold cursor-pointer",
		onclick: () => goto("/sales/receipts/new"),
		children: ($$anchor, $$slotProps) => {
			var fragment = root();
			Building_2(first_child(fragment), { class: "h-3.5 w-3.5 mr-1" });
			next();
			append($$anchor, fragment);
		},
		$$slots: { default: true }
	});
	reset(div_4);
	reset(div_2);
	reset(div_1);
	var node_4 = sibling(div_1, 2);
	var consequent = ($$anchor) => {
		var div_5 = root_1();
		Refresh_cw(child(div_5), { class: "h-8 w-8 text-primary animate-spin" });
		next(2);
		reset(div_5);
		append($$anchor, div_5);
	};
	var consequent_6 = ($$anchor) => {
		var div_6 = root_9();
		var div_7 = child(div_6);
		var div_8 = child(div_7);
		var node_6 = child(div_8);
		var consequent_1 = ($$anchor) => {
			Circle_alert($$anchor, { class: "h-8 w-8" });
		};
		var alternate = ($$anchor) => {
			Circle_check($$anchor, { class: "h-8 w-8" });
		};
		if_block(node_6, ($$render) => {
			if (get(submissionResult).syncStatus === "Failed") $$render(consequent_1);
			else $$render(alternate, -1);
		});
		reset(div_8);
		var div_9 = sibling(div_8, 2);
		var div_10 = child(div_9);
		var h2 = child(div_10);
		var text = child(h2, true);
		reset(h2);
		var span = sibling(h2, 2);
		var text_1 = child(span, true);
		reset(span);
		reset(div_10);
		var p = sibling(div_10, 2);
		var span_1 = sibling(child(p));
		var text_2 = child(span_1, true);
		reset(span_1);
		next();
		reset(p);
		reset(div_9);
		reset(div_7);
		var node_7 = sibling(div_7, 2);
		var consequent_2 = ($$anchor) => {
			var div_11 = root_3();
			var div_12 = child(div_11);
			var span_2 = child(div_12);
			Circle_alert(child(span_2), { class: "h-4 w-4" });
			next();
			reset(span_2);
			Button(sibling(span_2, 2), {
				type: "button",
				variant: "outline",
				size: "xs",
				get disabled() {
					return get(isRetryingSync);
				},
				onclick: handleRetrySync,
				class: "h-7 text-xs border-destructive/30 hover:bg-destructive/10 text-destructive cursor-pointer flex items-center gap-1",
				children: ($$anchor, $$slotProps) => {
					var fragment_3 = root_2();
					var node_10 = first_child(fragment_3);
					{
						let $0 = user_derived(() => get(isRetryingSync) ? "animate-spin" : "");
						Rotate_cw(node_10, { get class() {
							return `h-3 w-3 ${get($0) ?? ""}`;
						} });
					}
					var span_3 = sibling(node_10, 2);
					var text_3 = child(span_3, true);
					reset(span_3);
					template_effect(() => set_text(text_3, get(isRetryingSync) ? "Retrying..." : "Retry Sync Now"));
					append($$anchor, fragment_3);
				},
				$$slots: { default: true }
			});
			reset(div_12);
			var p_1 = sibling(div_12, 2);
			var text_4 = child(p_1, true);
			reset(p_1);
			reset(div_11);
			template_effect(() => set_text(text_4, get(syncError).message));
			append($$anchor, div_11);
		};
		if_block(node_7, ($$render) => {
			if (get(syncError)) $$render(consequent_2);
		});
		var div_13 = sibling(node_7, 2);
		var div_14 = child(div_13);
		var div_15 = sibling(child(div_14), 2);
		MoneyDisplay(child(div_15), { get amount() {
			return get(submissionResult).amount;
		} });
		reset(div_15);
		reset(div_14);
		var div_16 = sibling(div_14, 2);
		var div_17 = sibling(child(div_16), 2);
		var text_5 = child(div_17, true);
		reset(div_17);
		var span_4 = sibling(div_17, 2);
		var text_6 = child(span_4, true);
		reset(span_4);
		reset(div_16);
		var div_18 = sibling(div_16, 2);
		var div_19 = sibling(child(div_18), 2);
		var text_7 = child(div_19, true);
		reset(div_19);
		reset(div_18);
		reset(div_13);
		var node_12 = sibling(div_13, 2);
		var consequent_5 = ($$anchor) => {
			var div_20 = root_6();
			var node_13 = child(div_20);
			var consequent_3 = ($$anchor) => {
				var div_21 = root_4();
				var span_5 = sibling(child(div_21), 2);
				var text_8 = child(span_5, true);
				reset(span_5);
				var span_6 = sibling(span_5, 2);
				var text_9 = child(span_6, true);
				reset(span_6);
				reset(div_21);
				template_effect(() => {
					set_text(text_8, get(submissionResult).clientName);
					set_text(text_9, get(submissionResult).clientType || "Client");
				});
				append($$anchor, div_21);
			};
			if_block(node_13, ($$render) => {
				if (get(submissionResult).clientName) $$render(consequent_3);
			});
			var node_14 = sibling(node_13, 2);
			var consequent_4 = ($$anchor) => {
				var div_22 = root_5();
				var span_7 = sibling(child(div_22), 2);
				var text_10 = child(span_7, true);
				reset(span_7);
				reset(div_22);
				template_effect(() => set_text(text_10, get(submissionResult).salesmanName));
				append($$anchor, div_22);
			};
			if_block(node_14, ($$render) => {
				if (get(submissionResult).salesmanName) $$render(consequent_4);
			});
			reset(div_20);
			append($$anchor, div_20);
		};
		if_block(node_12, ($$render) => {
			if (get(submissionResult).clientName || get(submissionResult).salesmanName) $$render(consequent_5);
		});
		var div_23 = sibling(node_12, 2);
		var node_15 = child(div_23);
		Button(node_15, {
			type: "button",
			variant: "outline",
			class: "rounded-xl h-9.5 text-xs font-semibold cursor-pointer",
			onclick: resetForm,
			children: ($$anchor, $$slotProps) => {
				var fragment_4 = root_7();
				Plus(first_child(fragment_4), { class: "h-3.5 w-3.5 mr-1" });
				next();
				append($$anchor, fragment_4);
			},
			$$slots: { default: true }
		});
		Button(sibling(node_15, 2), {
			type: "button",
			class: "rounded-xl h-9.5 text-xs font-bold bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer",
			onclick: () => goto("/sales/receipts?tab=sales_portal"),
			children: ($$anchor, $$slotProps) => {
				var fragment_5 = root_8();
				Arrow_right(sibling(first_child(fragment_5), 2), { class: "h-3.5 w-3.5 ml-1" });
				append($$anchor, fragment_5);
			},
			$$slots: { default: true }
		});
		reset(div_23);
		reset(div_6);
		template_effect(() => {
			set_class(div_8, 1, `p-3 rounded-2xl ${get(submissionResult).syncStatus === "Failed" ? "bg-amber-500/10 text-amber-600 border border-amber-500/20" : "bg-emerald-500/10 text-emerald-600 border border-emerald-500/20"}`);
			set_text(text, get(submissionResult).syncStatus === "Failed" ? "Receipt Created (Pending Sync)" : "Receipt Confirmed & Wallet Credited!");
			set_class(span, 1, `inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold ${get(submissionResult).syncStatus === "Synced" ? "bg-emerald-500/10 text-emerald-700 border border-emerald-500/20" : "bg-amber-500/10 text-amber-700 border border-amber-500/20"}`);
			set_text(text_1, get(submissionResult).syncStatus || "Synced");
			set_text(text_2, get(submissionResult).documentNumber || `TXN-${get(submissionResult).id}`);
			set_text(text_5, get(submissionResult).destinationAccountName || get(submissionResult).destinationBankName || "Cash Account");
			set_text(text_6, get(submissionResult).paymentMethod);
			set_text(text_7, get(submissionResult).salesPortalDocumentNumber || get(submissionResult).salesPortalReceiptId || "— (Local Agent Receipt)");
		});
		append($$anchor, div_6);
	};
	var alternate_6 = ($$anchor) => {
		var form = root_28();
		var div_24 = child(form);
		var div_25 = child(div_24);
		var div_26 = child(div_25);
		var h2_1 = child(div_26);
		Users(child(h2_1), { class: "h-4 w-4 text-primary" });
		next();
		reset(h2_1);
		next(2);
		reset(div_26);
		var div_27 = sibling(div_26, 2);
		var button_1 = child(div_27);
		User_check(child(button_1), { class: "h-3.5 w-3.5" });
		next(2);
		reset(button_1);
		var button_2 = sibling(button_1, 2);
		Building_2(child(button_2), { class: "h-3.5 w-3.5" });
		next(2);
		reset(button_2);
		reset(div_27);
		reset(div_25);
		var div_28 = sibling(div_25, 2);
		var div_29 = child(div_28);
		SearchableSelect(sibling(child(div_29), 2), {
			id: "salesmanSelect",
			get options() {
				return get(salesmanOptions);
			},
			placeholder: "-- Select Salesman --",
			searchPlaceholder: "Search salesmen by name...",
			onchange: handleSalesmanChange,
			required: true,
			get value() {
				return get(selectedSalesmanId);
			},
			set value($$value) {
				set(selectedSalesmanId, $$value, true);
			}
		});
		reset(div_29);
		var div_30 = sibling(div_29, 2);
		var label = child(div_30);
		var span_8 = child(label);
		var text_11 = child(span_8, true);
		reset(span_8);
		var node_23 = sibling(span_8, 2);
		var consequent_7 = ($$anchor) => {
			var span_9 = root_10();
			Rotate_cw(child(span_9), { class: "h-3 w-3 animate-spin" });
			next();
			reset(span_9);
			append($$anchor, span_9);
		};
		var alternate_1 = ($$anchor) => {
			var span_10 = root_11();
			var text_12 = child(span_10);
			reset(span_10);
			template_effect(() => set_text(text_12, `${get(clients).length ?? ""} available`));
			append($$anchor, span_10);
		};
		if_block(node_23, ($$render) => {
			if (get(isLoadingClients)) $$render(consequent_7);
			else $$render(alternate_1, -1);
		});
		reset(label);
		var node_25 = sibling(label, 2);
		{
			let $0 = user_derived(() => get(isLoadingClients) ? "Loading clients..." : `-- Select ${get(clientType) === "customer" ? "Customer" : "Agent"} --`);
			let $1 = user_derived(() => `Search ${get(clientType) === "customer" ? "customers" : "agents"}...`);
			let $2 = user_derived(() => get(isLoadingClients) || get(clients).length === 0);
			SearchableSelect(node_25, {
				id: "clientSelect",
				get options() {
					return get(clientOptions);
				},
				get placeholder() {
					return get($0);
				},
				get searchPlaceholder() {
					return get($1);
				},
				get disabled() {
					return get($2);
				},
				required: true,
				get value() {
					return get(selectedClientId);
				},
				set value($$value) {
					set(selectedClientId, $$value, true);
				}
			});
		}
		reset(div_30);
		reset(div_28);
		var node_26 = sibling(div_28, 2);
		var consequent_14 = ($$anchor) => {
			var div_31 = root_20();
			var div_32 = child(div_31);
			var div_33 = child(div_32);
			var div_34 = child(div_33);
			var span_11 = child(div_34);
			var text_13 = child(span_11, true);
			reset(span_11);
			var span_12 = sibling(span_11, 2);
			var text_14 = child(span_12, true);
			reset(span_12);
			var node_27 = sibling(span_12, 2);
			var consequent_8 = ($$anchor) => {
				var span_13 = root_12();
				var text_15 = child(span_13, true);
				reset(span_13);
				template_effect(() => set_text(text_15, get(selectedClient).phone));
				append($$anchor, span_13);
			};
			if_block(node_27, ($$render) => {
				if (get(selectedClient).phone) $$render(consequent_8);
			});
			reset(div_34);
			var div_35 = sibling(div_34, 2);
			var node_28 = sibling(child(div_35), 2);
			var consequent_9 = ($$anchor) => {
				var span_14 = root_13();
				var text_16 = child(span_14);
				reset(span_14);
				template_effect(($0) => set_text(text_16, `Prepaid Surplus: +${$0 ?? ""} BHD`), [() => get(clientBalance).toFixed(3)]);
				append($$anchor, span_14);
			};
			var consequent_10 = ($$anchor) => {
				var span_15 = root_14();
				var text_17 = child(span_15);
				reset(span_15);
				template_effect(($0) => set_text(text_17, `Debt Owed: -${$0 ?? ""} BHD`), [() => Math.abs(get(clientBalance)).toFixed(3)]);
				append($$anchor, span_15);
			};
			var alternate_2 = ($$anchor) => {
				append($$anchor, root_15());
			};
			if_block(node_28, ($$render) => {
				if (get(clientBalance) > 0) $$render(consequent_9);
				else if (get(clientBalance) < 0) $$render(consequent_10, 1);
				else $$render(alternate_2, -1);
			});
			reset(div_35);
			reset(div_33);
			var node_29 = sibling(div_33, 2);
			var consequent_13 = ($$anchor) => {
				var div_36 = root_19();
				var div_37 = sibling(child(div_36), 2);
				var text_18 = child(div_37);
				reset(div_37);
				var span_17 = sibling(div_37, 2);
				var node_30 = child(span_17);
				var consequent_11 = ($$anchor) => {
					var span_18 = root_16();
					var text_19 = child(span_18);
					reset(span_18);
					template_effect(($0) => set_text(text_19, `Debt fully settled! Surplus: +${$0 ?? ""} BHD`), [() => get(projectedBalance).toFixed(3)]);
					append($$anchor, span_18);
				};
				var consequent_12 = ($$anchor) => {
					var span_19 = root_17();
					var text_20 = child(span_19);
					reset(span_19);
					template_effect(($0) => set_text(text_20, `Debt reduced by ${$0 ?? ""} BHD`), [() => get(parsedAmount).toFixed(3)]);
					append($$anchor, span_19);
				};
				var alternate_3 = ($$anchor) => {
					append($$anchor, root_18());
				};
				if_block(node_30, ($$render) => {
					if (get(clientBalance) < 0 && get(projectedBalance) >= 0) $$render(consequent_11);
					else if (get(clientBalance) < 0 && get(projectedBalance) < 0) $$render(consequent_12, 1);
					else $$render(alternate_3, -1);
				});
				reset(span_17);
				reset(div_36);
				template_effect(($0) => {
					set_class(div_37, 1, `text-sm font-black font-mono ${get(projectedBalance) > 0 ? "text-emerald-600" : get(projectedBalance) < 0 ? "text-rose-600" : "text-foreground"}`);
					set_text(text_18, `${$0 ?? ""} BHD`);
				}, [() => get(projectedBalance) >= 0 ? `+${get(projectedBalance).toFixed(3)}` : get(projectedBalance).toFixed(3)]);
				append($$anchor, div_36);
			};
			if_block(node_29, ($$render) => {
				if (get(parsedAmount) > 0) $$render(consequent_13);
			});
			reset(div_32);
			reset(div_31);
			template_effect(() => {
				set_class(div_31, 1, `mt-4 p-4 rounded-xl border transition-all ${get(clientBalance) > 0 ? "bg-emerald-500/10 border-emerald-500/30" : get(clientBalance) < 0 ? "bg-rose-500/10 border-rose-500/30" : "bg-muted/40 border-border"}`);
				set_text(text_13, get(selectedClient).name);
				set_text(text_14, get(clientType));
			});
			append($$anchor, div_31);
		};
		var consequent_15 = ($$anchor) => {
			var div_38 = root_21();
			var text_21 = child(div_38);
			reset(div_38);
			template_effect(() => set_text(text_21, `No ${get(clientType) === "customer" ? "customers (heads)" : "agents"} found assigned to ${(get(selectedSalesman)?.name || "this salesman") ?? ""}.`));
			append($$anchor, div_38);
		};
		if_block(node_26, ($$render) => {
			if (get(selectedClient)) $$render(consequent_14);
			else if (get(selectedSalesmanId) && get(clients).length === 0 && !get(isLoadingClients)) $$render(consequent_15, 1);
		});
		reset(div_24);
		var div_39 = sibling(div_24, 2);
		var div_40 = child(div_39);
		var div_41 = child(div_40);
		var h2_2 = child(div_41);
		Building_2(child(h2_2), { class: "h-4 w-4 text-primary" });
		next();
		reset(h2_2);
		next(2);
		reset(div_41);
		var div_42 = sibling(div_41, 2);
		var button_3 = child(div_42);
		Wallet(child(button_3), { class: "h-3.5 w-3.5" });
		next(2);
		reset(button_3);
		var button_4 = sibling(button_3, 2);
		Building_2(child(button_4), { class: "h-3.5 w-3.5" });
		next(2);
		reset(button_4);
		reset(div_42);
		reset(div_40);
		var div_43 = sibling(div_40, 2);
		var node_34 = child(div_43);
		var consequent_16 = ($$anchor) => {
			var div_44 = root_23();
			var select = sibling(child(div_44), 2);
			each(select, 21, () => get(cashAccounts), index, ($$anchor, acc) => {
				var option = root_22();
				var text_22 = child(option);
				reset(option);
				var option_value = {};
				template_effect(($0, $1) => {
					set_text(text_22, `${get(acc).name ?? ""} — Current Balance: ${$0 ?? ""} BHD`);
					if (option_value !== (option_value = $1)) option.value = (option.__value = $1) ?? "";
				}, [() => Number(get(acc).currentBalance).toFixed(3), () => String(get(acc).id)]);
				append($$anchor, option);
			});
			reset(select);
			reset(div_44);
			bind_select_value(select, () => get(selectedAccountId), ($$value) => set(selectedAccountId, $$value));
			append($$anchor, div_44);
		};
		var alternate_4 = ($$anchor) => {
			var div_45 = root_24();
			var select_1 = sibling(child(div_45), 2);
			each(select_1, 21, () => get(bankAccounts), index, ($$anchor, b) => {
				var option_1 = root_22();
				var text_23 = child(option_1);
				reset(option_1);
				var option_1_value = {};
				template_effect(($0, $1) => {
					set_text(text_23, `${get(b).bankName ?? ""} (${get(b).accountNumber ?? ""}) — Current Balance: ${$0 ?? ""} BHD`);
					if (option_1_value !== (option_1_value = $1)) option_1.value = (option_1.__value = $1) ?? "";
				}, [() => Number(get(b).currentBalance).toFixed(3), () => String(get(b).id)]);
				append($$anchor, option_1);
			});
			reset(select_1);
			reset(div_45);
			bind_select_value(select_1, () => get(selectedBankId), ($$value) => set(selectedBankId, $$value));
			append($$anchor, div_45);
		};
		if_block(node_34, ($$render) => {
			if (get(destinationType) === "account") $$render(consequent_16);
			else $$render(alternate_4, -1);
		});
		reset(div_43);
		reset(div_39);
		var div_46 = sibling(div_39, 2);
		var h2_3 = child(div_46);
		Sparkles(child(h2_3), { class: "h-4 w-4 text-primary" });
		next();
		reset(h2_3);
		var div_47 = sibling(h2_3, 2);
		var div_48 = child(div_47);
		var div_49 = sibling(child(div_48), 2);
		var input = sibling(child(div_49), 2);
		remove_input_defaults(input);
		reset(div_49);
		reset(div_48);
		var div_50 = sibling(div_48, 2);
		var label_1 = child(div_50);
		var button_5 = sibling(child(label_1), 2);
		reset(label_1);
		var input_1 = sibling(label_1, 2);
		remove_input_defaults(input_1);
		reset(div_50);
		reset(div_47);
		var div_51 = sibling(div_47, 2);
		var textarea = sibling(child(div_51), 2);
		remove_textarea_child(textarea);
		reset(div_51);
		var div_52 = sibling(div_51, 2);
		var input_2 = sibling(child(div_52), 2);
		var node_36 = sibling(input_2, 2);
		var consequent_17 = ($$anchor) => {
			var p_2 = root_25();
			var node_37 = child(p_2);
			File_text(node_37, { class: "h-3 w-3 text-primary" });
			var text_24 = sibling(node_37);
			reset(p_2);
			template_effect(() => set_text(text_24, ` Selected: ${get(paymentProofFile).name ?? ""}`));
			append($$anchor, p_2);
		};
		if_block(node_36, ($$render) => {
			if (get(paymentProofFile)) $$render(consequent_17);
		});
		reset(div_52);
		reset(div_46);
		var div_53 = sibling(div_46, 2);
		var node_38 = child(div_53);
		Button(node_38, {
			type: "button",
			variant: "outline",
			class: "rounded-xl h-10 px-5 text-xs font-semibold cursor-pointer",
			get disabled() {
				return get(isSubmitting);
			},
			onclick: () => goto("/sales/receipts?tab=sales_portal"),
			children: ($$anchor, $$slotProps) => {
				next();
				append($$anchor, text("Cancel"));
			},
			$$slots: { default: true }
		});
		var node_39 = sibling(node_38, 2);
		{
			let $0 = user_derived(() => get(isSubmitting) || get(parsedAmount) <= 0);
			Button(node_39, {
				type: "submit",
				class: "rounded-xl h-10 px-6 text-xs font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm cursor-pointer flex items-center gap-1.5",
				get disabled() {
					return get($0);
				},
				children: ($$anchor, $$slotProps) => {
					var fragment_6 = comment();
					var node_40 = first_child(fragment_6);
					var consequent_18 = ($$anchor) => {
						var fragment_7 = root_26();
						Refresh_cw(first_child(fragment_7), { class: "h-4 w-4 animate-spin" });
						next(2);
						append($$anchor, fragment_7);
					};
					var alternate_5 = ($$anchor) => {
						var fragment_8 = root_27();
						Save(first_child(fragment_8), { class: "h-4 w-4" });
						next(2);
						append($$anchor, fragment_8);
					};
					if_block(node_40, ($$render) => {
						if (get(isSubmitting)) $$render(consequent_18);
						else $$render(alternate_5, -1);
					});
					append($$anchor, fragment_6);
				},
				$$slots: { default: true }
			});
		}
		reset(div_53);
		reset(form);
		template_effect(() => {
			set_class(button_1, 1, `px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${get(clientType) === "customer" ? "bg-primary text-primary-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"}`);
			set_class(button_2, 1, `px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${get(clientType) === "agent" ? "bg-primary text-primary-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"}`);
			set_text(text_11, get(clientType) === "customer" ? "Customer (Head) *" : "Agent *");
			set_class(button_3, 1, `px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${get(destinationType) === "account" ? "bg-primary text-primary-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"}`);
			set_class(button_4, 1, `px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${get(destinationType) === "bank" ? "bg-primary text-primary-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"}`);
			set_attribute(textarea, "placeholder", get(selectedClient) ? `Payment collection from ${get(selectedClient).name}...` : "Enter receipt narrative or notes...");
		});
		event("submit", form, handleSubmit);
		delegated("click", button_1, () => handleClientTypeChange("customer"));
		delegated("click", button_2, () => handleClientTypeChange("agent"));
		delegated("click", button_3, () => set(destinationType, "account"));
		delegated("click", button_4, () => set(destinationType, "bank"));
		bind_value(input, () => get(amount), ($$value) => set(amount, $$value));
		delegated("click", button_5, handleQuickGenerateRef);
		bind_value(input_1, () => get(referenceId), ($$value) => set(referenceId, $$value));
		bind_value(textarea, () => get(description), ($$value) => set(description, $$value));
		delegated("change", input_2, handlePaymentProofChange);
		append($$anchor, form);
	};
	if_block(node_4, ($$render) => {
		if (get(isLoadingInitial)) $$render(consequent);
		else if (get(submissionResult)) $$render(consequent_6, 1);
		else $$render(alternate_6, -1);
	});
	reset(div);
	delegated("click", button, () => goto("/sales/receipts?tab=sales_portal"));
	append($$anchor, div);
	pop();
	$$cleanup();
}
delegate(["click", "change"]);
//#endregion
export { _page as component };

import { A as component, B as append, D as head, G as text, H as from_html, I as if_block, K as delegate, Lt as next, Mt as push, N as each, Q as get, R as set_text, Rt as reset, T as clsx, V as comment, dt as child, ft as first_child, g as remove_input_defaults, gt as set, h as attribute_effect, it as effect, j as snippet, jt as pop, lt as remove_textarea_child, m as bind_value, mt as proxy, o as prop, ot as template_effect, pt as sibling, q as delegated, r as onMount, s as rest_props, u as bind_this, ut as $document, v as set_checked, vt as state, w as set_class, xt as user_derived, zt as noop } from "../chunks/CjADOP7e.js";
import "../chunks/DhaYE-8x.js";
import { t as apiFetch } from "../chunks/CZsfkian.js";
import { i as hasRole } from "../chunks/DavB3yv5.js";
import { t as addToast } from "../chunks/_zpa1t7W.js";
import { t as Book_open } from "../chunks/LB2cDZY-.js";
import { t as Check } from "../chunks/BfiA2OEz.js";
import { t as Circle_alert } from "../chunks/DMWQFuZT.js";
import { t as Circle_check } from "../chunks/C_O5GZGO.js";
import { t as Circle_x } from "../chunks/DYs5D3Kz.js";
import { t as Clock } from "../chunks/3haK3Z-k.js";
import { t as Landmark } from "../chunks/BHPrr1Ai2.js";
import { t as Layers } from "../chunks/DIF9wVw42.js";
import { t as Receipt } from "../chunks/L2ko-uPO2.js";
import { t as Refresh_cw } from "../chunks/CfBhdLL12.js";
import { t as Square_check_big } from "../chunks/XMamFxbh.js";
import { t as User_check } from "../chunks/DnEOCY76.js";
import { t as Users } from "../chunks/Cr4apkbu.js";
import { t as Wallet } from "../chunks/CNG10Uve.js";
import { t as X } from "../chunks/Br3xtG5S.js";
import { t as cn } from "../chunks/mLYdPe0M.js";
import { n as tv, t as Button } from "../chunks/Ci9pdkd8.js";
import { t as MoneyDisplay } from "../chunks/yzLuLjlN.js";
import { t as Badge } from "../chunks/CI3P4d6L.js";
import { l as rejectExpense, t as approveExpense } from "../chunks/6VqUPcEG2.js";
//#region src/lib/components/ui/alert/alert.svelte
var alertVariants = tv({
	base: "grid gap-0.5 rounded-lg border px-2.5 py-2 text-left text-sm has-data-[slot=alert-action]:relative has-data-[slot=alert-action]:pr-18 has-[>svg]:grid-cols-[auto_1fr] has-[>svg]:gap-x-2 *:[svg]:row-span-2 *:[svg]:translate-y-0.5 *:[svg]:text-current *:[svg:not([class*='size-'])]:size-4 group/alert relative w-full",
	variants: { variant: {
		default: "bg-card text-card-foreground",
		destructive: "text-destructive bg-card *:data-[slot=alert-description]:text-destructive/90 *:[svg]:text-current"
	} },
	defaultVariants: { variant: "default" }
});
var rest_excludes$8 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref",
	"class",
	"variant",
	"children"
]);
var root$9 = from_html(`<div><!></div>`);
function Alert($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), variant = prop($$props, "variant", 3, "default"), restProps = rest_props($$props, rest_excludes$8);
	var div = root$9();
	attribute_effect(div, ($0) => ({
		"data-slot": "alert",
		role: "alert",
		class: $0,
		...restProps
	}), [() => cn(alertVariants({ variant: variant() }), $$props.class)]);
	snippet(child(div), () => $$props.children ?? noop);
	reset(div);
	bind_this(div, ($$value) => ref($$value), () => ref());
	append($$anchor, div);
	pop();
}
//#endregion
//#region src/lib/components/ui/alert/alert-description.svelte
var rest_excludes$7 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref",
	"class",
	"children"
]);
var root$8 = from_html(`<div><!></div>`);
function Alert_description($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), restProps = rest_props($$props, rest_excludes$7);
	var div = root$8();
	attribute_effect(div, ($0) => ({
		"data-slot": "alert-description",
		class: $0,
		...restProps
	}), [() => cn("text-muted-foreground text-sm text-balance md:text-pretty [&_p:not(:last-child)]:mb-4 [&_a]:hover:text-foreground [&_a]:underline [&_a]:underline-offset-3", $$props.class)]);
	snippet(child(div), () => $$props.children ?? noop);
	reset(div);
	bind_this(div, ($$value) => ref($$value), () => ref());
	append($$anchor, div);
	pop();
}
//#endregion
//#region src/lib/components/ui/alert/alert-title.svelte
var rest_excludes$6 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref",
	"class",
	"children"
]);
var root$7 = from_html(`<div><!></div>`);
function Alert_title($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), restProps = rest_props($$props, rest_excludes$6);
	var div = root$7();
	attribute_effect(div, ($0) => ({
		"data-slot": "alert-title",
		class: $0,
		...restProps
	}), [() => cn("font-medium group-has-[>svg]/alert:col-start-2 [&_a]:hover:text-foreground [&_a]:underline [&_a]:underline-offset-3", $$props.class)]);
	snippet(child(div), () => $$props.children ?? noop);
	reset(div);
	bind_this(div, ($$value) => ref($$value), () => ref());
	append($$anchor, div);
	pop();
}
//#endregion
//#region src/lib/components/ui/card/card.svelte
var rest_excludes$5 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref",
	"class",
	"children",
	"size"
]);
var root$6 = from_html(`<div><!></div>`);
function Card($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), size = prop($$props, "size", 3, "default"), restProps = rest_props($$props, rest_excludes$5);
	var div = root$6();
	attribute_effect(div, ($0) => ({
		"data-slot": "card",
		"data-size": size(),
		class: $0,
		...restProps
	}), [() => cn("ring-foreground/10 bg-card text-card-foreground gap-(--card-spacing) overflow-hidden rounded-xl py-(--card-spacing) text-sm ring-1 [--card-spacing:--spacing(4)] has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl group/card flex flex-col", $$props.class)]);
	snippet(child(div), () => $$props.children ?? noop);
	reset(div);
	bind_this(div, ($$value) => ref($$value), () => ref());
	append($$anchor, div);
	pop();
}
//#endregion
//#region src/lib/components/ui/card/card-content.svelte
var rest_excludes$4 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref",
	"class",
	"children"
]);
var root$5 = from_html(`<div><!></div>`);
function Card_content($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), restProps = rest_props($$props, rest_excludes$4);
	var div = root$5();
	attribute_effect(div, ($0) => ({
		"data-slot": "card-content",
		class: $0,
		...restProps
	}), [() => cn("px-(--card-spacing)", $$props.class)]);
	snippet(child(div), () => $$props.children ?? noop);
	reset(div);
	bind_this(div, ($$value) => ref($$value), () => ref());
	append($$anchor, div);
	pop();
}
//#endregion
//#region src/lib/components/ui/card/card-description.svelte
var rest_excludes$3 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref",
	"class",
	"children"
]);
var root$4 = from_html(`<p><!></p>`);
function Card_description($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), restProps = rest_props($$props, rest_excludes$3);
	var p = root$4();
	attribute_effect(p, ($0) => ({
		"data-slot": "card-description",
		class: $0,
		...restProps
	}), [() => cn("text-muted-foreground text-sm", $$props.class)]);
	snippet(child(p), () => $$props.children ?? noop);
	reset(p);
	bind_this(p, ($$value) => ref($$value), () => ref());
	append($$anchor, p);
	pop();
}
//#endregion
//#region src/lib/components/ui/card/card-footer.svelte
var rest_excludes$2 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref",
	"class",
	"children"
]);
var root$3 = from_html(`<div><!></div>`);
function Card_footer($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), restProps = rest_props($$props, rest_excludes$2);
	var div = root$3();
	attribute_effect(div, ($0) => ({
		"data-slot": "card-footer",
		class: $0,
		...restProps
	}), [() => cn("bg-muted/50 rounded-b-xl border-t p-(--card-spacing) flex items-center", $$props.class)]);
	snippet(child(div), () => $$props.children ?? noop);
	reset(div);
	bind_this(div, ($$value) => ref($$value), () => ref());
	append($$anchor, div);
	pop();
}
//#endregion
//#region src/lib/components/ui/card/card-header.svelte
var rest_excludes$1 = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref",
	"class",
	"children"
]);
var root$2 = from_html(`<div><!></div>`);
function Card_header($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), restProps = rest_props($$props, rest_excludes$1);
	var div = root$2();
	attribute_effect(div, ($0) => ({
		"data-slot": "card-header",
		class: $0,
		...restProps
	}), [() => cn("gap-1 rounded-t-xl px-(--card-spacing) [.border-b]:pb-(--card-spacing) group/card-header @container/card-header grid auto-rows-min items-start has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto]", $$props.class)]);
	snippet(child(div), () => $$props.children ?? noop);
	reset(div);
	bind_this(div, ($$value) => ref($$value), () => ref());
	append($$anchor, div);
	pop();
}
//#endregion
//#region src/lib/components/ui/card/card-title.svelte
var rest_excludes = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"ref",
	"class",
	"children"
]);
var root$1 = from_html(`<div><!></div>`);
function Card_title($$anchor, $$props) {
	push($$props, true);
	let ref = prop($$props, "ref", 15, null), restProps = rest_props($$props, rest_excludes);
	var div = root$1();
	attribute_effect(div, ($0) => ({
		"data-slot": "card-title",
		class: $0,
		...restProps
	}), [() => cn("text-base leading-snug font-medium group-data-[size=sm]/card:text-sm", $$props.class)]);
	snippet(child(div), () => $$props.children ?? noop);
	reset(div);
	bind_this(div, ($$value) => ref($$value), () => ref());
	append($$anchor, div);
	pop();
}
//#endregion
//#region src/routes/(app)/pending-approvals/+page.svelte
var root = from_html(`<!> Refresh Requests`, 1);
var root_1 = from_html(`<!> <!> <!>`, 1);
var root_2 = from_html(`<!> `, 1);
var root_3 = from_html(`<div class="flex items-center gap-2 flex-wrap animate-scaleUp"><!> <!> <!> <button class="text-xs text-muted-foreground hover:text-foreground underline cursor-pointer ml-1">Deselect</button></div>`);
var root_4 = from_html(`<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"><label class="flex items-center gap-2 font-semibold cursor-pointer select-none"><input type="checkbox" class="h-4 w-4 rounded border-border text-primary focus:ring-primary/20 accent-primary cursor-pointer"/> <span> </span></label> <!></div>`);
var root_5 = from_html(`<div class="py-16 text-center text-muted-foreground text-xs flex flex-col items-center gap-2"><!> Loading pending approval requests...</div>`);
var root_6 = from_html(`<!> <p class="font-bold text-foreground text-sm">No Pending Approvals</p> <p class="text-xs max-w-sm mx-auto">All submitted entity registrations, payment headers, and payment vouchers have been approved or processed.</p>`, 1);
var root_7 = from_html(`<input type="checkbox" class="h-4 w-4 rounded border-border text-primary focus:ring-primary/20 accent-primary cursor-pointer"/>`);
var root_8 = from_html(`<div><span class="text-muted-foreground block text-[10px] uppercase tracking-wider font-semibold">Header Name</span> <span class="font-bold text-foreground"> </span></div> <div><span class="text-muted-foreground block text-[10px] uppercase tracking-wider font-semibold">Accounting Bucket</span> <span class="font-bold text-primary"> </span></div> <div class="sm:col-span-2"><span class="text-muted-foreground block text-[10px] uppercase tracking-wider font-semibold">Description</span> <span class="text-foreground"> </span></div>`, 1);
var root_9 = from_html(`<div><span class="text-muted-foreground block text-[10px] uppercase tracking-wider font-semibold">Agent Name</span> <span class="font-bold text-foreground"> </span></div> <div><span class="text-muted-foreground block text-[10px] uppercase tracking-wider font-semibold">Mobile</span> <span class="font-mono text-foreground"> </span></div> <div><span class="text-muted-foreground block text-[10px] uppercase tracking-wider font-semibold">Email</span> <span class="text-foreground"> </span></div> <div><span class="text-muted-foreground block text-[10px] uppercase tracking-wider font-semibold">Nationality</span> <span class="text-foreground"> </span></div>`, 1);
var root_10 = from_html(`<div><span class="text-muted-foreground block text-[10px] uppercase tracking-wider font-semibold">Supplier Name</span> <span class="font-bold text-foreground"> </span></div> <div><span class="text-muted-foreground block text-[10px] uppercase tracking-wider font-semibold">Supplier Code</span> <span class="font-mono text-foreground"> </span></div> <div><span class="text-muted-foreground block text-[10px] uppercase tracking-wider font-semibold">Opening Wallet</span> <span class="font-bold text-emerald-600"> </span></div>`, 1);
var root_11 = from_html(`<div><span class="text-muted-foreground block text-[10px] uppercase tracking-wider font-semibold">Bank Name</span> <span class="font-bold text-foreground"> </span></div> <div><span class="text-muted-foreground block text-[10px] uppercase tracking-wider font-semibold">Account Number</span> <span class="font-mono text-foreground"> </span></div> <div><span class="text-muted-foreground block text-[10px] uppercase tracking-wider font-semibold">Opening Balance</span> <span class="font-bold text-foreground"> </span></div>`, 1);
var root_12 = from_html(`<div><span class="text-muted-foreground block text-[10px] uppercase tracking-wider font-semibold">Account Name</span> <span class="font-bold text-foreground"> </span></div> <div><span class="text-muted-foreground block text-[10px] uppercase tracking-wider font-semibold">Account Type</span> <span class="capitalize text-foreground"> </span></div> <div><span class="text-muted-foreground block text-[10px] uppercase tracking-wider font-semibold">Ledger Type</span> <span class="capitalize text-foreground"> </span></div> <div><span class="text-muted-foreground block text-[10px] uppercase tracking-wider font-semibold">Opening Balance</span> <span class="font-bold text-foreground"> </span></div>`, 1);
var root_13 = from_html(`<!> Reject Request`, 1);
var root_14 = from_html(`<!> Approve Request`, 1);
var root_15 = from_html(`<div class="flex items-center justify-end gap-2 pt-2 border-t border-border/40"><!> <!></div>`);
var root_16 = from_html(`<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/60"><div class="flex items-center gap-3"><!> <!> <span class="text-xs font-mono text-muted-foreground"> </span></div> <div class="text-[11px] text-muted-foreground">Submitted by <span class="font-bold text-foreground"> </span> </div></div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs pt-1"><!></div> <!>`, 1);
var root_17 = from_html(`<!> Payment Voucher`, 1);
var root_18 = from_html(`<!> Reject Voucher`, 1);
var root_19 = from_html(`<!> Approve & Post`, 1);
var root_20 = from_html(`<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/60"><div class="flex items-center gap-3"><!> <!> <span class="text-xs font-mono font-bold text-foreground"> </span></div> <div class="text-[11px] text-muted-foreground">Logged on <span class="font-bold text-foreground"> </span></div></div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs pt-1"><div><span class="text-muted-foreground block text-[10px] uppercase tracking-wider font-semibold">Amount</span> <span class="font-bold text-foreground text-sm"><!></span></div> <div><span class="text-muted-foreground block text-[10px] uppercase tracking-wider font-semibold">Payment Method</span> <span class="capitalize font-semibold text-foreground"> </span></div> <div><span class="text-muted-foreground block text-[10px] uppercase tracking-wider font-semibold">Transaction Date</span> <span class="font-mono text-foreground"> </span></div> <div><span class="text-muted-foreground block text-[10px] uppercase tracking-wider font-semibold">Description</span> <span class="text-foreground truncate block"> </span></div></div> <!>`, 1);
var root_21 = from_html(`<!> Reject Transaction`, 1);
var root_22 = from_html(`<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/60"><div class="flex items-center gap-3"><!> <!> <span class="text-xs font-mono font-bold text-foreground"> </span></div> <div class="text-[11px] text-muted-foreground">Submitted by <span class="font-bold text-foreground"> </span> </div></div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs pt-1"><div><span class="text-muted-foreground block text-[10px] uppercase tracking-wider font-semibold">Amount</span> <span class="font-bold text-foreground text-sm"><!></span></div> <div><span class="text-muted-foreground block text-[10px] uppercase tracking-wider font-semibold">Payment Method</span> <span class="capitalize font-semibold text-foreground"> </span></div> <div><span class="text-muted-foreground block text-[10px] uppercase tracking-wider font-semibold">Accounts / Banks</span> <span class="font-medium text-foreground"> </span></div> <div><span class="text-muted-foreground block text-[10px] uppercase tracking-wider font-semibold">Description</span> <span class="text-foreground truncate block"> </span></div></div> <!>`, 1);
var root_23 = from_html(`<!> Transfer Journal`, 1);
var root_24 = from_html(`<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/60"><div class="flex items-center gap-3"><!> <!> <span class="text-xs font-mono font-bold text-foreground"> </span></div> <div class="text-[11px] text-muted-foreground">Submitted by <span class="font-bold text-foreground"> </span> </div></div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs pt-1"><div><span class="text-muted-foreground block text-[10px] uppercase tracking-wider font-semibold">Amount</span> <span class="font-bold text-foreground text-sm"><!></span></div> <div><span class="text-muted-foreground block text-[10px] uppercase tracking-wider font-semibold">Sender (Debit)</span> <span class="font-semibold text-rose-600 dark:text-rose-400 capitalize"> </span></div> <div><span class="text-muted-foreground block text-[10px] uppercase tracking-wider font-semibold">Receiver (Credit)</span> <span class="font-semibold text-emerald-600 dark:text-emerald-400 capitalize"> </span></div> <div><span class="text-muted-foreground block text-[10px] uppercase tracking-wider font-semibold">Memo / Note</span> <span class="text-foreground truncate block"> </span></div></div> <!>`, 1);
var root_25 = from_html(`<div class="space-y-4"><!> <!> <!> <!></div>`);
var root_26 = from_html(`<!> Confirm Rejection`, 1);
var root_27 = from_html(`<!> <!>`, 1);
var root_28 = from_html(`<label for="modal-rej-reason" class="text-xs font-semibold text-foreground">Rejection Reason</label> <textarea id="modal-rej-reason" rows="3" placeholder="Describe why this request is being rejected..." class="w-full bg-background border border-border rounded-xl p-3 text-xs focus:outline-none focus:ring-2 focus:ring-destructive/20 text-foreground resize-y font-medium"></textarea>`, 1);
var root_29 = from_html(`<div class="fixed inset-0 z-50 bg-background/80 backdrop-blur-xs flex items-center justify-center p-4 animate-scaleUp"><!></div>`);
var root_30 = from_html(`<div class="space-y-6"><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"><div class="space-y-1"><h1 class="text-xl font-bold text-foreground flex items-center gap-2"><!> Pending Approvals Management</h1> <p class="text-xs text-muted-foreground">Review, approve, or reject pending entity registrations, payment headers, and payment vouchers.</p></div> <!></div> <!> <div class="flex flex-wrap gap-1.5 border-b border-border pb-3"><button> </button> <button><!> </button> <button><!> </button> <button><!> </button> <button><!> </button> <button><!> </button> <button><!> </button> <button><!> </button> <button><!> </button></div> <!> <!> <!></div>`);
function _page($$anchor, $$props) {
	push($$props, true);
	let loading = state(true);
	let pendingApprovals = state(proxy([]));
	let pendingExpenses = state(proxy([]));
	let pendingTransactions = state(proxy([]));
	let pendingJournals = state(proxy([]));
	let activeTab = state("all");
	let processingId = state(null);
	let selectedKeys = state(proxy([]));
	let isBulkProcessing = state(false);
	let rejectionModalOpen = state(false);
	let rejectionTarget = state(null);
	let rejectionReason = state("Rejected by Master Accountant");
	async function loadAllPending() {
		set(loading, true);
		set(selectedKeys, [], true);
		try {
			const [approvalsRes, expensesRes, transactionsRes, journalsRes] = await Promise.all([
				apiFetch("api/pending-approvals?status=pending").catch(() => []),
				apiFetch("api/Expenses").catch(() => []),
				apiFetch("api/Transaction?status=pending").catch(() => []),
				apiFetch("api/JournalEntries").catch(() => [])
			]);
			set(pendingApprovals, approvalsRes || [], true);
			set(pendingExpenses, (expensesRes || []).filter((e) => (e.status || "").toLowerCase() === "pendingapproval"), true);
			set(pendingTransactions, (transactionsRes || []).filter((t) => (t.status || "").toLowerCase() === "pending" && ((t.transactionType || "").toLowerCase() === "outgoing" || (t.transactionType || "").toLowerCase() === "contra")), true);
			set(pendingJournals, (journalsRes || []).filter((j) => (j.status || "").toLowerCase() === "pending"), true);
		} catch (err) {
			addToast(err.message || "Failed to load pending requests.", "error");
		} finally {
			set(loading, false);
		}
	}
	function parsePayload(item) {
		try {
			return JSON.parse(item.payloadJson);
		} catch {
			return {};
		}
	}
	const visibleKeys = user_derived(() => () => {
		const keys = [];
		for (const p of get(pendingApprovals)) {
			const type = (p.entityType || "").toLowerCase();
			const isHeader = type === "payment_header" || type === "account_category" || type === "expense_header";
			const isAgent = type === "agent";
			const isSupplier = type === "supplier";
			const isBank = type === "bank";
			const isAccount = type === "account";
			if (get(activeTab) === "all" || get(activeTab) === "headers" && isHeader || get(activeTab) === "agents" && isAgent || get(activeTab) === "suppliers" && isSupplier || get(activeTab) === "banks" && isBank || get(activeTab) === "accounts" && isAccount) keys.push(`approval-${p.id}`);
		}
		if (get(activeTab) === "all" || get(activeTab) === "expenses") for (const exp of get(pendingExpenses)) keys.push(`expense-${exp.id}`);
		if (get(activeTab) === "all" || get(activeTab) === "transactions") for (const tx of get(pendingTransactions)) keys.push(`txn-${tx.id}`);
		if (get(activeTab) === "all" || get(activeTab) === "journals") for (const j of get(pendingJournals)) keys.push(`journal-${j.id}`);
		return keys;
	});
	const isAllSelected = user_derived(() => get(visibleKeys)().length > 0 && get(visibleKeys)().every((k) => get(selectedKeys).includes(k)));
	function toggleSelect(key) {
		if (get(selectedKeys).includes(key)) set(selectedKeys, get(selectedKeys).filter((k) => k !== key), true);
		else set(selectedKeys, [...get(selectedKeys), key], true);
	}
	function toggleSelectAll() {
		const allKeys = get(visibleKeys)();
		if (get(isAllSelected)) set(selectedKeys, get(selectedKeys).filter((k) => !allKeys.includes(k)), true);
		else {
			const union = /* @__PURE__ */ new Set([...get(selectedKeys), ...allKeys]);
			set(selectedKeys, Array.from(union), true);
		}
	}
	const counts = user_derived(() => () => {
		let headersCount = 0;
		let agentsCount = 0;
		let suppliersCount = 0;
		let banksCount = 0;
		let accountsCount = 0;
		for (const p of get(pendingApprovals)) {
			const type = (p.entityType || "").toLowerCase();
			if (type === "payment_header" || type === "account_category" || type === "expense_header") headersCount++;
			else if (type === "agent") agentsCount++;
			else if (type === "supplier") suppliersCount++;
			else if (type === "bank") banksCount++;
			else if (type === "account") accountsCount++;
		}
		const expensesCount = get(pendingExpenses).length;
		const transactionsCount = get(pendingTransactions).length;
		const journalsCount = get(pendingJournals).length;
		return {
			total: get(pendingApprovals).length + expensesCount + transactionsCount + journalsCount,
			headers: headersCount,
			expenses: expensesCount,
			transactions: transactionsCount,
			journals: journalsCount,
			agents: agentsCount,
			suppliers: suppliersCount,
			banks: banksCount,
			accounts: accountsCount
		};
	});
	async function approvePendingItem(item) {
		set(processingId, `approval-${item.id}`);
		try {
			await apiFetch(`api/pending-approvals/${item.id}/approve`, { method: "POST" });
			addToast(`Approved ${item.entityType.replace("_", " ")} request successfully.`, "success");
			await loadAllPending();
		} catch (err) {
			addToast(err.message || "Approval failed.", "error");
		} finally {
			set(processingId, null);
		}
	}
	function openRejectModalForApprovalItem(item) {
		set(rejectionTarget, {
			type: "single-approval",
			item
		}, true);
		set(rejectionReason, "Rejected by Master Accountant");
		set(rejectionModalOpen, true);
	}
	function openRejectModalForExpenseItem(expense) {
		set(rejectionTarget, {
			type: "single-expense",
			item: expense
		}, true);
		set(rejectionReason, "Rejected by Master Accountant");
		set(rejectionModalOpen, true);
	}
	function openRejectModalForTransactionItem(txn) {
		set(rejectionTarget, {
			type: "single-transaction",
			item: txn
		}, true);
		set(rejectionReason, "Rejected by Master Accountant");
		set(rejectionModalOpen, true);
	}
	function openRejectModalForJournalItem(journal) {
		set(rejectionTarget, {
			type: "single-journal",
			item: journal
		}, true);
		set(rejectionReason, "Rejected by Master Accountant");
		set(rejectionModalOpen, true);
	}
	function openBulkRejectModal() {
		if (get(selectedKeys).length === 0) return;
		set(rejectionTarget, { type: "bulk" }, true);
		set(rejectionReason, "Bulk rejected by Master Accountant");
		set(rejectionModalOpen, true);
	}
	async function confirmRejectionModal() {
		if (!get(rejectionTarget)) return;
		set(rejectionModalOpen, false);
		if (get(rejectionTarget).type === "single-approval" && get(rejectionTarget).item) {
			const item = get(rejectionTarget).item;
			set(processingId, `approval-${item.id}`);
			try {
				await apiFetch(`api/pending-approvals/${item.id}/reject`, { method: "POST" });
				addToast("Request rejected.", "success");
				await loadAllPending();
			} catch (err) {
				addToast(err.message || "Rejection failed.", "error");
			} finally {
				set(processingId, null);
			}
		} else if (get(rejectionTarget).type === "single-expense" && get(rejectionTarget).item) {
			const expense = get(rejectionTarget).item;
			set(processingId, `expense-${expense.id}`);
			try {
				await rejectExpense(expense.id, { reason: get(rejectionReason) || "Rejected by Master Accountant" });
				addToast(`Payment voucher ${expense.expenseNumber} rejected.`, "success");
				await loadAllPending();
			} catch (err) {
				addToast(err.message || "Expense rejection failed.", "error");
			} finally {
				set(processingId, null);
			}
		} else if (get(rejectionTarget).type === "single-transaction" && get(rejectionTarget).item) {
			const txn = get(rejectionTarget).item;
			set(processingId, `txn-${txn.id}`);
			try {
				await apiFetch(`api/Transaction/${txn.id}/reject`, {
					method: "POST",
					body: JSON.stringify({ reason: get(rejectionReason) || "Rejected by Master Accountant" })
				});
				addToast(`Transaction #${txn.id} rejected.`, "success");
				await loadAllPending();
			} catch (err) {
				addToast(err.message || "Transaction rejection failed.", "error");
			} finally {
				set(processingId, null);
			}
		} else if (get(rejectionTarget).type === "single-journal" && get(rejectionTarget).item) {
			const journal = get(rejectionTarget).item;
			set(processingId, `journal-${journal.id}`);
			try {
				await apiFetch(`api/JournalEntries/${journal.id}/reject`, { method: "POST" });
				addToast(`Party Transfer Journal ${journal.journalNumber} rejected.`, "success");
				await loadAllPending();
			} catch (err) {
				addToast(err.message || "Journal rejection failed.", "error");
			} finally {
				set(processingId, null);
			}
		} else if (get(rejectionTarget).type === "bulk") {
			set(isBulkProcessing, true);
			let successCount = 0;
			let failCount = 0;
			for (const key of get(selectedKeys)) try {
				if (key.startsWith("approval-")) {
					await apiFetch(`api/pending-approvals/${parseInt(key.replace("approval-", ""), 10)}/reject`, { method: "POST" });
					successCount++;
				} else if (key.startsWith("expense-")) {
					await rejectExpense(parseInt(key.replace("expense-", ""), 10), { reason: get(rejectionReason) || "Bulk rejected by Master Accountant" });
					successCount++;
				} else if (key.startsWith("txn-")) {
					await apiFetch(`api/Transaction/${parseInt(key.replace("txn-", ""), 10)}/reject`, {
						method: "POST",
						body: JSON.stringify({ reason: get(rejectionReason) || "Bulk rejected by Master Accountant" })
					});
					successCount++;
				} else if (key.startsWith("journal-")) {
					await apiFetch(`api/JournalEntries/${parseInt(key.replace("journal-", ""), 10)}/reject`, { method: "POST" });
					successCount++;
				}
			} catch (err) {
				failCount++;
			}
			set(isBulkProcessing, false);
			if (successCount > 0) addToast(`Bulk rejected ${successCount} request${successCount === 1 ? "" : "s"}.`, "success");
			if (failCount > 0) addToast(`Failed to reject ${failCount} request${failCount === 1 ? "" : "s"}.`, "error");
			await loadAllPending();
		}
	}
	async function handleApproveExpense(expense) {
		set(processingId, `expense-${expense.id}`);
		try {
			await approveExpense(expense.id);
			addToast(`Payment voucher ${expense.expenseNumber} approved and posted.`, "success");
			await loadAllPending();
		} catch (err) {
			addToast(err.message || "Expense approval failed.", "error");
		} finally {
			set(processingId, null);
		}
	}
	async function handleApproveTransaction(txn) {
		set(processingId, `txn-${txn.id}`);
		try {
			await apiFetch(`api/Transaction/${txn.id}/approve`, { method: "POST" });
			addToast(`Transaction #${txn.id} approved and posted.`, "success");
			await loadAllPending();
		} catch (err) {
			addToast(err.message || "Transaction approval failed.", "error");
		} finally {
			set(processingId, null);
		}
	}
	async function handleApproveJournal(journal) {
		set(processingId, `journal-${journal.id}`);
		try {
			await apiFetch(`api/JournalEntries/${journal.id}/approve`, {
				method: "POST",
				headers: {
					"Idempotency-Key": `approve-journal-${journal.id}-${Date.now()}`,
					"Row-Version": journal.rowVersion || ""
				}
			});
			addToast(`Party Transfer Journal ${journal.journalNumber} approved and posted.`, "success");
			await loadAllPending();
		} catch (err) {
			addToast(err.message || "Journal approval failed.", "error");
		} finally {
			set(processingId, null);
		}
	}
	async function executeBulkApprove() {
		if (get(selectedKeys).length === 0) return;
		set(isBulkProcessing, true);
		let successCount = 0;
		let failCount = 0;
		for (const key of get(selectedKeys)) try {
			if (key.startsWith("approval-")) {
				await apiFetch(`api/pending-approvals/${parseInt(key.replace("approval-", ""), 10)}/approve`, { method: "POST" });
				successCount++;
			} else if (key.startsWith("expense-")) {
				await approveExpense(parseInt(key.replace("expense-", ""), 10));
				successCount++;
			} else if (key.startsWith("txn-")) {
				await apiFetch(`api/Transaction/${parseInt(key.replace("txn-", ""), 10)}/approve`, { method: "POST" });
				successCount++;
			} else if (key.startsWith("journal-")) {
				const id = parseInt(key.replace("journal-", ""), 10);
				const journal = get(pendingJournals).find((j) => j.id === id);
				await apiFetch(`api/JournalEntries/${id}/approve`, {
					method: "POST",
					headers: {
						"Idempotency-Key": `approve-journal-${id}-${Date.now()}`,
						"Row-Version": journal?.rowVersion || ""
					}
				});
				successCount++;
			}
		} catch (err) {
			failCount++;
		}
		set(isBulkProcessing, false);
		if (successCount > 0) addToast(`Bulk approved ${successCount} request${successCount === 1 ? "" : "s"} successfully.`, "success");
		if (failCount > 0) addToast(`Failed to approve ${failCount} request${failCount === 1 ? "" : "s"}.`, "error");
		await loadAllPending();
	}
	onMount(() => {
		loadAllPending();
	});
	var div = root_30();
	head("1ne6h4w", ($$anchor) => {
		effect(() => {
			$document.title = "Pending Approvals — Accounts Portal";
		});
	});
	var div_1 = child(div);
	var div_2 = child(div_1);
	var h1 = child(div_2);
	Square_check_big(child(h1), { class: "h-5 w-5 text-amber-500" });
	next();
	reset(h1);
	next(2);
	reset(div_2);
	var node_1 = sibling(div_2, 2);
	{
		let $0 = user_derived(() => get(loading) || get(isBulkProcessing));
		Button(node_1, {
			variant: "outline",
			class: "h-8.5 rounded-xl cursor-pointer flex items-center gap-1.5 text-xs font-semibold self-start sm:self-auto",
			onclick: loadAllPending,
			get disabled() {
				return get($0);
			},
			children: ($$anchor, $$slotProps) => {
				var fragment = root();
				var node_2 = first_child(fragment);
				{
					let $0 = user_derived(() => get(loading) ? "animate-spin" : "");
					Refresh_cw(node_2, { get class() {
						return `h-3.5 w-3.5 ${get($0) ?? ""}`;
					} });
				}
				next();
				append($$anchor, fragment);
			},
			$$slots: { default: true }
		});
	}
	reset(div_1);
	var node_3 = sibling(div_1, 2);
	var consequent = ($$anchor) => {
		var fragment_1 = comment();
		component(first_child(fragment_1), () => Alert, ($$anchor, Alert_Root) => {
			Alert_Root($$anchor, {
				class: "rounded-2xl border-amber-500/40 bg-amber-500/10 text-amber-700 dark:text-amber-400",
				children: ($$anchor, $$slotProps) => {
					var fragment_2 = root_1();
					var node_5 = first_child(fragment_2);
					Circle_alert(node_5, { class: "h-4 w-4 text-amber-500" });
					var node_6 = sibling(node_5, 2);
					component(node_6, () => Alert_title, ($$anchor, Alert_Title) => {
						Alert_Title($$anchor, {
							class: "font-bold text-xs",
							children: ($$anchor, $$slotProps) => {
								next();
								append($$anchor, text("Read-Only Approvals View"));
							},
							$$slots: { default: true }
						});
					});
					component(sibling(node_6, 2), () => Alert_description, ($$anchor, Alert_Description) => {
						Alert_Description($$anchor, {
							class: "text-xs text-amber-700/80 dark:text-amber-400/80",
							children: ($$anchor, $$slotProps) => {
								next();
								append($$anchor, text("You are viewing submitted approval requests. Only a Master Accountant can approve or reject items."));
							},
							$$slots: { default: true }
						});
					});
					append($$anchor, fragment_2);
				},
				$$slots: { default: true }
			});
		});
		append($$anchor, fragment_1);
	};
	var d = user_derived(() => !hasRole("master_accountant"));
	if_block(node_3, ($$render) => {
		if (get(d)) $$render(consequent);
	});
	var div_3 = sibling(node_3, 2);
	var button = child(div_3);
	var text_2 = child(button);
	reset(button);
	var button_1 = sibling(button, 2);
	var node_8 = child(button_1);
	Layers(node_8, { class: "h-3.5 w-3.5" });
	var text_3 = sibling(node_8);
	reset(button_1);
	var button_2 = sibling(button_1, 2);
	var node_9 = child(button_2);
	Wallet(node_9, { class: "h-3.5 w-3.5" });
	var text_4 = sibling(node_9);
	reset(button_2);
	var button_3 = sibling(button_2, 2);
	var node_10 = child(button_3);
	Receipt(node_10, { class: "h-3.5 w-3.5" });
	var text_5 = sibling(node_10);
	reset(button_3);
	var button_4 = sibling(button_3, 2);
	var node_11 = child(button_4);
	Book_open(node_11, { class: "h-3.5 w-3.5" });
	var text_6 = sibling(node_11);
	reset(button_4);
	var button_5 = sibling(button_4, 2);
	var node_12 = child(button_5);
	User_check(node_12, { class: "h-3.5 w-3.5" });
	var text_7 = sibling(node_12);
	reset(button_5);
	var button_6 = sibling(button_5, 2);
	var node_13 = child(button_6);
	Users(node_13, { class: "h-3.5 w-3.5" });
	var text_8 = sibling(node_13);
	reset(button_6);
	var button_7 = sibling(button_6, 2);
	var node_14 = child(button_7);
	Landmark(node_14, { class: "h-3.5 w-3.5" });
	var text_9 = sibling(node_14);
	reset(button_7);
	var button_8 = sibling(button_7, 2);
	var node_15 = child(button_8);
	Landmark(node_15, { class: "h-3.5 w-3.5" });
	var text_10 = sibling(node_15);
	reset(button_8);
	reset(div_3);
	var node_16 = sibling(div_3, 2);
	var consequent_2 = ($$anchor) => {
		var fragment_3 = comment();
		component(first_child(fragment_3), () => Card, ($$anchor, Card_Root) => {
			Card_Root($$anchor, {
				class: "p-3.5 rounded-2xl border-border bg-muted/30",
				children: ($$anchor, $$slotProps) => {
					var div_4 = root_4();
					var label = child(div_4);
					var input = child(label);
					remove_input_defaults(input);
					var span = sibling(input, 2);
					var text_11 = child(span);
					reset(span);
					reset(label);
					var node_18 = sibling(label, 2);
					var consequent_1 = ($$anchor) => {
						var div_5 = root_3();
						var node_19 = child(div_5);
						Badge(node_19, {
							variant: "secondary",
							class: "font-bold text-[11px] px-2.5 py-1",
							children: ($$anchor, $$slotProps) => {
								next();
								var text_12 = text();
								template_effect(() => set_text(text_12, `${get(selectedKeys).length ?? ""} Selected`));
								append($$anchor, text_12);
							},
							$$slots: { default: true }
						});
						var node_20 = sibling(node_19, 2);
						Button(node_20, {
							size: "sm",
							class: "rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs h-8 cursor-pointer",
							get disabled() {
								return get(isBulkProcessing);
							},
							onclick: executeBulkApprove,
							children: ($$anchor, $$slotProps) => {
								var fragment_5 = root_2();
								var node_21 = first_child(fragment_5);
								Circle_check(node_21, { class: "h-3.5 w-3.5 mr-1" });
								var text_13 = sibling(node_21);
								template_effect(() => set_text(text_13, ` Approve Selected (${get(selectedKeys).length ?? ""})`));
								append($$anchor, fragment_5);
							},
							$$slots: { default: true }
						});
						var node_22 = sibling(node_20, 2);
						Button(node_22, {
							variant: "outline",
							size: "sm",
							class: "rounded-xl text-red-600 border-red-200 hover:bg-red-50 font-semibold text-xs h-8 cursor-pointer",
							get disabled() {
								return get(isBulkProcessing);
							},
							onclick: openBulkRejectModal,
							children: ($$anchor, $$slotProps) => {
								var fragment_6 = root_2();
								var node_23 = first_child(fragment_6);
								Circle_x(node_23, { class: "h-3.5 w-3.5 mr-1" });
								var text_14 = sibling(node_23);
								template_effect(() => set_text(text_14, ` Reject Selected (${get(selectedKeys).length ?? ""})`));
								append($$anchor, fragment_6);
							},
							$$slots: { default: true }
						});
						var button_9 = sibling(node_22, 2);
						reset(div_5);
						delegated("click", button_9, () => set(selectedKeys, [], true));
						append($$anchor, div_5);
					};
					if_block(node_18, ($$render) => {
						if (get(selectedKeys).length > 0) $$render(consequent_1);
					});
					reset(div_4);
					template_effect(($0) => {
						set_checked(input, get(isAllSelected));
						set_text(text_11, `Select All (${$0 ?? ""} items in view)`);
					}, [() => get(visibleKeys)().length]);
					delegated("change", input, toggleSelectAll);
					append($$anchor, div_4);
				},
				$$slots: { default: true }
			});
		});
		append($$anchor, fragment_3);
	};
	var d_1 = user_derived(() => get(visibleKeys)().length > 0 && hasRole("master_accountant"));
	if_block(node_16, ($$render) => {
		if (get(d_1)) $$render(consequent_2);
	});
	var node_24 = sibling(node_16, 2);
	var consequent_3 = ($$anchor) => {
		var div_6 = root_5();
		Refresh_cw(child(div_6), { class: "h-5 w-5 animate-spin text-primary" });
		next();
		reset(div_6);
		append($$anchor, div_6);
	};
	var consequent_4 = ($$anchor) => {
		var fragment_7 = comment();
		component(first_child(fragment_7), () => Card, ($$anchor, Card_Root_1) => {
			Card_Root_1($$anchor, {
				class: "py-16 text-center text-muted-foreground space-y-2 rounded-2xl p-8",
				children: ($$anchor, $$slotProps) => {
					var fragment_8 = root_6();
					Clock(first_child(fragment_8), { class: "h-10 w-10 text-muted-foreground/40 mx-auto" });
					next(4);
					append($$anchor, fragment_8);
				},
				$$slots: { default: true }
			});
		});
		append($$anchor, fragment_7);
	};
	var d_2 = user_derived(() => get(counts)().total === 0);
	var alternate = ($$anchor) => {
		var div_7 = root_25();
		var node_28 = child(div_7);
		each(node_28, 17, () => get(pendingApprovals), (item) => item.id, ($$anchor, item) => {
			const itemKey = user_derived(() => `approval-${get(item).id}`);
			const isSelected = user_derived(() => get(selectedKeys).includes(get(itemKey)));
			const payload = user_derived(() => parsePayload(get(item)));
			const type = user_derived(() => (get(item).entityType || "").toLowerCase());
			const isHeader = user_derived(() => get(type) === "payment_header" || get(type) === "account_category" || get(type) === "expense_header");
			const isAgent = user_derived(() => get(type) === "agent");
			const isSupplier = user_derived(() => get(type) === "supplier");
			const isBank = user_derived(() => get(type) === "bank");
			const isAccount = user_derived(() => get(type) === "account");
			var fragment_9 = comment();
			var node_29 = first_child(fragment_9);
			var consequent_12 = ($$anchor) => {
				var fragment_10 = comment();
				var node_30 = first_child(fragment_10);
				{
					let $0 = user_derived(() => ["rounded-2xl p-5 shadow-xs space-y-3 relative overflow-hidden transition-all", get(isSelected) ? "border-primary ring-2 ring-primary/20 bg-primary/5" : "border-amber-500/30 hover:border-amber-500/50 bg-card"].join(" "));
					component(node_30, () => Card, ($$anchor, Card_Root_2) => {
						Card_Root_2($$anchor, {
							get class() {
								return get($0);
							},
							children: ($$anchor, $$slotProps) => {
								var fragment_11 = root_16();
								var div_8 = first_child(fragment_11);
								var div_9 = child(div_8);
								var node_31 = child(div_9);
								var consequent_5 = ($$anchor) => {
									var input_1 = root_7();
									remove_input_defaults(input_1);
									template_effect(() => set_checked(input_1, get(isSelected)));
									delegated("change", input_1, () => toggleSelect(get(itemKey)));
									append($$anchor, input_1);
								};
								var d_3 = user_derived(() => hasRole("master_accountant"));
								if_block(node_31, ($$render) => {
									if (get(d_3)) $$render(consequent_5);
								});
								var node_32 = sibling(node_31, 2);
								Badge(node_32, {
									variant: "warning",
									class: "uppercase text-[10px] font-bold tracking-wider",
									children: ($$anchor, $$slotProps) => {
										var fragment_12 = root_2();
										var node_33 = first_child(fragment_12);
										Clock(node_33, { class: "h-3 w-3 mr-1" });
										var text_15 = sibling(node_33);
										template_effect(($0) => set_text(text_15, ` ${$0 ?? ""}`), [() => get(item).entityType.replace("_", " ")]);
										append($$anchor, fragment_12);
									},
									$$slots: { default: true }
								});
								var span_1 = sibling(node_32, 2);
								var text_16 = child(span_1);
								reset(span_1);
								reset(div_9);
								var div_10 = sibling(div_9, 2);
								var span_2 = sibling(child(div_10));
								var text_17 = child(span_2, true);
								reset(span_2);
								var text_18 = sibling(span_2);
								reset(div_10);
								reset(div_8);
								var div_11 = sibling(div_8, 2);
								var node_34 = child(div_11);
								var consequent_6 = ($$anchor) => {
									var fragment_13 = root_8();
									var div_12 = first_child(fragment_13);
									var span_3 = sibling(child(div_12), 2);
									var text_19 = child(span_3, true);
									reset(span_3);
									reset(div_12);
									var div_13 = sibling(div_12, 2);
									var span_4 = sibling(child(div_13), 2);
									var text_20 = child(span_4, true);
									reset(span_4);
									reset(div_13);
									var div_14 = sibling(div_13, 2);
									var span_5 = sibling(child(div_14), 2);
									var text_21 = child(span_5, true);
									reset(span_5);
									reset(div_14);
									template_effect(() => {
										set_text(text_19, get(payload).name || get(payload).Name || "—");
										set_text(text_20, get(payload).category || get(payload).Category || "Expenses");
										set_text(text_21, get(payload).description || get(payload).Description || "No description provided");
									});
									append($$anchor, fragment_13);
								};
								var consequent_7 = ($$anchor) => {
									var fragment_14 = root_9();
									var div_15 = first_child(fragment_14);
									var span_6 = sibling(child(div_15), 2);
									var text_22 = child(span_6);
									reset(span_6);
									reset(div_15);
									var div_16 = sibling(div_15, 2);
									var span_7 = sibling(child(div_16), 2);
									var text_23 = child(span_7, true);
									reset(span_7);
									reset(div_16);
									var div_17 = sibling(div_16, 2);
									var span_8 = sibling(child(div_17), 2);
									var text_24 = child(span_8, true);
									reset(span_8);
									reset(div_17);
									var div_18 = sibling(div_17, 2);
									var span_9 = sibling(child(div_18), 2);
									var text_25 = child(span_9, true);
									reset(span_9);
									reset(div_18);
									template_effect(() => {
										set_text(text_22, `${get(payload).firstName ?? ""} ${get(payload).lastName ?? ""}`);
										set_text(text_23, get(payload).phoneNo || "N/A");
										set_text(text_24, get(payload).emailId || "N/A");
										set_text(text_25, get(payload).nationality || "N/A");
									});
									append($$anchor, fragment_14);
								};
								var consequent_8 = ($$anchor) => {
									var fragment_15 = root_10();
									var div_19 = first_child(fragment_15);
									var span_10 = sibling(child(div_19), 2);
									var text_26 = child(span_10, true);
									reset(span_10);
									reset(div_19);
									var div_20 = sibling(div_19, 2);
									var span_11 = sibling(child(div_20), 2);
									var text_27 = child(span_11, true);
									reset(span_11);
									reset(div_20);
									var div_21 = sibling(div_20, 2);
									var span_12 = sibling(child(div_21), 2);
									var text_28 = child(span_12);
									reset(span_12);
									reset(div_21);
									template_effect(($0) => {
										set_text(text_26, get(payload).name);
										set_text(text_27, get(payload).code);
										set_text(text_28, `BHD ${$0 ?? ""}`);
									}, [() => (get(payload).wallet || 0).toFixed(3)]);
									append($$anchor, fragment_15);
								};
								var consequent_9 = ($$anchor) => {
									var fragment_16 = root_11();
									var div_22 = first_child(fragment_16);
									var span_13 = sibling(child(div_22), 2);
									var text_29 = child(span_13, true);
									reset(span_13);
									reset(div_22);
									var div_23 = sibling(div_22, 2);
									var span_14 = sibling(child(div_23), 2);
									var text_30 = child(span_14, true);
									reset(span_14);
									reset(div_23);
									var div_24 = sibling(div_23, 2);
									var span_15 = sibling(child(div_24), 2);
									var text_31 = child(span_15);
									reset(span_15);
									reset(div_24);
									template_effect(($0) => {
										set_text(text_29, get(payload).bankName);
										set_text(text_30, get(payload).accountNumber);
										set_text(text_31, `BHD ${$0 ?? ""}`);
									}, [() => (get(payload).openingBalance || 0).toFixed(3)]);
									append($$anchor, fragment_16);
								};
								var consequent_10 = ($$anchor) => {
									var fragment_17 = root_12();
									var div_25 = first_child(fragment_17);
									var span_16 = sibling(child(div_25), 2);
									var text_32 = child(span_16, true);
									reset(span_16);
									reset(div_25);
									var div_26 = sibling(div_25, 2);
									var span_17 = sibling(child(div_26), 2);
									var text_33 = child(span_17, true);
									reset(span_17);
									reset(div_26);
									var div_27 = sibling(div_26, 2);
									var span_18 = sibling(child(div_27), 2);
									var text_34 = child(span_18, true);
									reset(span_18);
									reset(div_27);
									var div_28 = sibling(div_27, 2);
									var span_19 = sibling(child(div_28), 2);
									var text_35 = child(span_19);
									reset(span_19);
									reset(div_28);
									template_effect(($0) => {
										set_text(text_32, get(payload).name);
										set_text(text_33, get(payload).type);
										set_text(text_34, get(payload).ledgerType);
										set_text(text_35, `BHD ${$0 ?? ""}`);
									}, [() => (get(payload).openingBalance || 0).toFixed(3)]);
									append($$anchor, fragment_17);
								};
								if_block(node_34, ($$render) => {
									if (get(isHeader)) $$render(consequent_6);
									else if (get(isAgent)) $$render(consequent_7, 1);
									else if (get(isSupplier)) $$render(consequent_8, 2);
									else if (get(isBank)) $$render(consequent_9, 3);
									else if (get(isAccount)) $$render(consequent_10, 4);
								});
								reset(div_11);
								var node_35 = sibling(div_11, 2);
								var consequent_11 = ($$anchor) => {
									var div_29 = root_15();
									var node_36 = child(div_29);
									{
										let $0 = user_derived(() => get(processingId) === `approval-${get(item).id}` || get(isBulkProcessing));
										Button(node_36, {
											variant: "outline",
											size: "sm",
											class: "rounded-xl text-red-600 border-red-200 hover:bg-red-50 text-xs font-semibold cursor-pointer h-8",
											get disabled() {
												return get($0);
											},
											onclick: () => openRejectModalForApprovalItem(get(item)),
											children: ($$anchor, $$slotProps) => {
												var fragment_18 = root_13();
												X(first_child(fragment_18), { class: "h-3.5 w-3.5 mr-1" });
												next();
												append($$anchor, fragment_18);
											},
											$$slots: { default: true }
										});
									}
									var node_38 = sibling(node_36, 2);
									{
										let $0 = user_derived(() => get(processingId) === `approval-${get(item).id}` || get(isBulkProcessing));
										Button(node_38, {
											size: "sm",
											class: "rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold cursor-pointer h-8",
											get disabled() {
												return get($0);
											},
											onclick: () => approvePendingItem(get(item)),
											children: ($$anchor, $$slotProps) => {
												var fragment_19 = root_14();
												Check(first_child(fragment_19), { class: "h-3.5 w-3.5 mr-1" });
												next();
												append($$anchor, fragment_19);
											},
											$$slots: { default: true }
										});
									}
									reset(div_29);
									append($$anchor, div_29);
								};
								var d_4 = user_derived(() => hasRole("master_accountant"));
								if_block(node_35, ($$render) => {
									if (get(d_4)) $$render(consequent_11);
								});
								template_effect(($0) => {
									set_text(text_16, `Request #${get(item).id ?? ""}`);
									set_text(text_17, get(item).submittedByName);
									set_text(text_18, ` · ${$0 ?? ""}`);
								}, [() => new Date(get(item).submittedAt).toLocaleString()]);
								append($$anchor, fragment_11);
							},
							$$slots: { default: true }
						});
					});
				}
				append($$anchor, fragment_10);
			};
			if_block(node_29, ($$render) => {
				if (get(activeTab) === "all" || get(activeTab) === "headers" && get(isHeader) || get(activeTab) === "agents" && get(isAgent) || get(activeTab) === "suppliers" && get(isSupplier) || get(activeTab) === "banks" && get(isBank) || get(activeTab) === "accounts" && get(isAccount)) $$render(consequent_12);
			});
			append($$anchor, fragment_9);
		});
		var node_40 = sibling(node_28, 2);
		var consequent_15 = ($$anchor) => {
			var fragment_20 = comment();
			each(first_child(fragment_20), 17, () => get(pendingExpenses), (exp) => exp.id, ($$anchor, exp) => {
				const itemKey = user_derived(() => `expense-${get(exp).id}`);
				const isSelected = user_derived(() => get(selectedKeys).includes(get(itemKey)));
				var fragment_21 = comment();
				var node_42 = first_child(fragment_21);
				{
					let $0 = user_derived(() => ["rounded-2xl p-5 shadow-xs space-y-3 relative overflow-hidden transition-all", get(isSelected) ? "border-primary ring-2 ring-primary/20 bg-primary/5" : "border-amber-500/30 hover:border-amber-500/50 bg-card"].join(" "));
					component(node_42, () => Card, ($$anchor, Card_Root_3) => {
						Card_Root_3($$anchor, {
							get class() {
								return get($0);
							},
							children: ($$anchor, $$slotProps) => {
								var fragment_22 = root_20();
								var div_30 = first_child(fragment_22);
								var div_31 = child(div_30);
								var node_43 = child(div_31);
								var consequent_13 = ($$anchor) => {
									var input_2 = root_7();
									remove_input_defaults(input_2);
									template_effect(() => set_checked(input_2, get(isSelected)));
									delegated("change", input_2, () => toggleSelect(get(itemKey)));
									append($$anchor, input_2);
								};
								var d_5 = user_derived(() => hasRole("master_accountant"));
								if_block(node_43, ($$render) => {
									if (get(d_5)) $$render(consequent_13);
								});
								var node_44 = sibling(node_43, 2);
								Badge(node_44, {
									variant: "warning",
									class: "uppercase text-[10px] font-bold tracking-wider",
									children: ($$anchor, $$slotProps) => {
										var fragment_23 = root_17();
										Wallet(first_child(fragment_23), { class: "h-3 w-3 mr-1" });
										next();
										append($$anchor, fragment_23);
									},
									$$slots: { default: true }
								});
								var span_20 = sibling(node_44, 2);
								var text_36 = child(span_20, true);
								reset(span_20);
								reset(div_31);
								var div_32 = sibling(div_31, 2);
								var span_21 = sibling(child(div_32));
								var text_37 = child(span_21, true);
								reset(span_21);
								reset(div_32);
								reset(div_30);
								var div_33 = sibling(div_30, 2);
								var div_34 = child(div_33);
								var span_22 = sibling(child(div_34), 2);
								MoneyDisplay(child(span_22), { get amount() {
									return get(exp).amount;
								} });
								reset(span_22);
								reset(div_34);
								var div_35 = sibling(div_34, 2);
								var span_23 = sibling(child(div_35), 2);
								var text_38 = child(span_23, true);
								reset(span_23);
								reset(div_35);
								var div_36 = sibling(div_35, 2);
								var span_24 = sibling(child(div_36), 2);
								var text_39 = child(span_24, true);
								reset(span_24);
								reset(div_36);
								var div_37 = sibling(div_36, 2);
								var span_25 = sibling(child(div_37), 2);
								var text_40 = child(span_25, true);
								reset(span_25);
								reset(div_37);
								reset(div_33);
								var node_47 = sibling(div_33, 2);
								var consequent_14 = ($$anchor) => {
									var div_38 = root_15();
									var node_48 = child(div_38);
									{
										let $0 = user_derived(() => get(processingId) === `expense-${get(exp).id}` || get(isBulkProcessing));
										Button(node_48, {
											variant: "outline",
											size: "sm",
											class: "rounded-xl text-red-600 border-red-200 hover:bg-red-50 text-xs font-semibold cursor-pointer h-8",
											get disabled() {
												return get($0);
											},
											onclick: () => openRejectModalForExpenseItem(get(exp)),
											children: ($$anchor, $$slotProps) => {
												var fragment_24 = root_18();
												X(first_child(fragment_24), { class: "h-3.5 w-3.5 mr-1" });
												next();
												append($$anchor, fragment_24);
											},
											$$slots: { default: true }
										});
									}
									var node_50 = sibling(node_48, 2);
									{
										let $0 = user_derived(() => get(processingId) === `expense-${get(exp).id}` || get(isBulkProcessing));
										Button(node_50, {
											size: "sm",
											class: "rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold cursor-pointer h-8",
											get disabled() {
												return get($0);
											},
											onclick: () => handleApproveExpense(get(exp)),
											children: ($$anchor, $$slotProps) => {
												var fragment_25 = root_19();
												Check(first_child(fragment_25), { class: "h-3.5 w-3.5 mr-1" });
												next();
												append($$anchor, fragment_25);
											},
											$$slots: { default: true }
										});
									}
									reset(div_38);
									append($$anchor, div_38);
								};
								var d_6 = user_derived(() => hasRole("master_accountant"));
								if_block(node_47, ($$render) => {
									if (get(d_6)) $$render(consequent_14);
								});
								template_effect(($0, $1) => {
									set_text(text_36, get(exp).expenseNumber);
									set_text(text_37, $0);
									set_text(text_38, get(exp).paymentMethod);
									set_text(text_39, $1);
									set_text(text_40, get(exp).description);
								}, [() => new Date(get(exp).createdAt).toLocaleString(), () => new Date(get(exp).expenseDate).toLocaleDateString()]);
								append($$anchor, fragment_22);
							},
							$$slots: { default: true }
						});
					});
				}
				append($$anchor, fragment_21);
			});
			append($$anchor, fragment_20);
		};
		if_block(node_40, ($$render) => {
			if (get(activeTab) === "all" || get(activeTab) === "expenses") $$render(consequent_15);
		});
		var node_52 = sibling(node_40, 2);
		var consequent_18 = ($$anchor) => {
			var fragment_26 = comment();
			each(first_child(fragment_26), 17, () => get(pendingTransactions), (tx) => tx.id, ($$anchor, tx) => {
				const itemKey = user_derived(() => `txn-${get(tx).id}`);
				const isSelected = user_derived(() => get(selectedKeys).includes(get(itemKey)));
				var fragment_27 = comment();
				var node_54 = first_child(fragment_27);
				{
					let $0 = user_derived(() => ["rounded-2xl p-5 shadow-xs space-y-3 relative overflow-hidden transition-all", get(isSelected) ? "border-primary ring-2 ring-primary/20 bg-primary/5" : "border-amber-500/30 hover:border-amber-500/50 bg-card"].join(" "));
					component(node_54, () => Card, ($$anchor, Card_Root_4) => {
						Card_Root_4($$anchor, {
							get class() {
								return get($0);
							},
							children: ($$anchor, $$slotProps) => {
								var fragment_28 = root_22();
								var div_39 = first_child(fragment_28);
								var div_40 = child(div_39);
								var node_55 = child(div_40);
								var consequent_16 = ($$anchor) => {
									var input_3 = root_7();
									remove_input_defaults(input_3);
									template_effect(() => set_checked(input_3, get(isSelected)));
									delegated("change", input_3, () => toggleSelect(get(itemKey)));
									append($$anchor, input_3);
								};
								var d_7 = user_derived(() => hasRole("master_accountant"));
								if_block(node_55, ($$render) => {
									if (get(d_7)) $$render(consequent_16);
								});
								var node_56 = sibling(node_55, 2);
								Badge(node_56, {
									variant: "warning",
									class: "uppercase text-[10px] font-bold tracking-wider",
									children: ($$anchor, $$slotProps) => {
										var fragment_29 = root_2();
										var node_57 = first_child(fragment_29);
										Receipt(node_57, { class: "h-3 w-3 mr-1" });
										var text_41 = sibling(node_57);
										template_effect(() => set_text(text_41, ` ${get(tx).transactionType ?? ""} Transaction`));
										append($$anchor, fragment_29);
									},
									$$slots: { default: true }
								});
								var span_26 = sibling(node_56, 2);
								var text_42 = child(span_26);
								reset(span_26);
								reset(div_40);
								var div_41 = sibling(div_40, 2);
								var span_27 = sibling(child(div_41));
								var text_43 = child(span_27, true);
								reset(span_27);
								var text_44 = sibling(span_27);
								reset(div_41);
								reset(div_39);
								var div_42 = sibling(div_39, 2);
								var div_43 = child(div_42);
								var span_28 = sibling(child(div_43), 2);
								MoneyDisplay(child(span_28), { get amount() {
									return get(tx).amount;
								} });
								reset(span_28);
								reset(div_43);
								var div_44 = sibling(div_43, 2);
								var span_29 = sibling(child(div_44), 2);
								var text_45 = child(span_29, true);
								reset(span_29);
								reset(div_44);
								var div_45 = sibling(div_44, 2);
								var span_30 = sibling(child(div_45), 2);
								var text_46 = child(span_30, true);
								reset(span_30);
								reset(div_45);
								var div_46 = sibling(div_45, 2);
								var span_31 = sibling(child(div_46), 2);
								var text_47 = child(span_31, true);
								reset(span_31);
								reset(div_46);
								reset(div_42);
								var node_59 = sibling(div_42, 2);
								var consequent_17 = ($$anchor) => {
									var div_47 = root_15();
									var node_60 = child(div_47);
									{
										let $0 = user_derived(() => get(processingId) === `txn-${get(tx).id}` || get(isBulkProcessing));
										Button(node_60, {
											variant: "outline",
											size: "sm",
											class: "rounded-xl text-red-600 border-red-200 hover:bg-red-50 text-xs font-semibold cursor-pointer h-8",
											get disabled() {
												return get($0);
											},
											onclick: () => openRejectModalForTransactionItem(get(tx)),
											children: ($$anchor, $$slotProps) => {
												var fragment_30 = root_21();
												X(first_child(fragment_30), { class: "h-3.5 w-3.5 mr-1" });
												next();
												append($$anchor, fragment_30);
											},
											$$slots: { default: true }
										});
									}
									var node_62 = sibling(node_60, 2);
									{
										let $0 = user_derived(() => get(processingId) === `txn-${get(tx).id}` || get(isBulkProcessing));
										Button(node_62, {
											size: "sm",
											class: "rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold cursor-pointer h-8",
											get disabled() {
												return get($0);
											},
											onclick: () => handleApproveTransaction(get(tx)),
											children: ($$anchor, $$slotProps) => {
												var fragment_31 = root_19();
												Check(first_child(fragment_31), { class: "h-3.5 w-3.5 mr-1" });
												next();
												append($$anchor, fragment_31);
											},
											$$slots: { default: true }
										});
									}
									reset(div_47);
									append($$anchor, div_47);
								};
								var d_8 = user_derived(() => hasRole("master_accountant"));
								if_block(node_59, ($$render) => {
									if (get(d_8)) $$render(consequent_17);
								});
								template_effect(($0) => {
									set_text(text_42, `#${get(tx).id ?? ""}`);
									set_text(text_43, get(tx).createdByName || `User #${get(tx).createdBy}`);
									set_text(text_44, ` · ${$0 ?? ""}`);
									set_text(text_45, get(tx).paymentMethod);
									set_text(text_46, get(tx).sourceAccountName || get(tx).sourceBankName || get(tx).destinationAccountName || get(tx).destinationBankName || "—");
									set_text(text_47, get(tx).description || "No description");
								}, [() => new Date(get(tx).createdAt).toLocaleString()]);
								append($$anchor, fragment_28);
							},
							$$slots: { default: true }
						});
					});
				}
				append($$anchor, fragment_27);
			});
			append($$anchor, fragment_26);
		};
		if_block(node_52, ($$render) => {
			if (get(activeTab) === "all" || get(activeTab) === "transactions") $$render(consequent_18);
		});
		var node_64 = sibling(node_52, 2);
		var consequent_21 = ($$anchor) => {
			var fragment_32 = comment();
			each(first_child(fragment_32), 17, () => get(pendingJournals), (journal) => journal.id, ($$anchor, journal) => {
				const itemKey = user_derived(() => `journal-${get(journal).id}`);
				const isSelected = user_derived(() => get(selectedKeys).includes(get(itemKey)));
				var fragment_33 = comment();
				var node_66 = first_child(fragment_33);
				{
					let $0 = user_derived(() => ["rounded-2xl p-5 shadow-xs space-y-3 relative overflow-hidden transition-all", get(isSelected) ? "border-primary ring-2 ring-primary/20 bg-primary/5" : "border-amber-500/30 hover:border-amber-500/50 bg-card"].join(" "));
					component(node_66, () => Card, ($$anchor, Card_Root_5) => {
						Card_Root_5($$anchor, {
							get class() {
								return get($0);
							},
							children: ($$anchor, $$slotProps) => {
								var fragment_34 = root_24();
								var div_48 = first_child(fragment_34);
								var div_49 = child(div_48);
								var node_67 = child(div_49);
								var consequent_19 = ($$anchor) => {
									var input_4 = root_7();
									remove_input_defaults(input_4);
									template_effect(() => set_checked(input_4, get(isSelected)));
									delegated("change", input_4, () => toggleSelect(get(itemKey)));
									append($$anchor, input_4);
								};
								var d_9 = user_derived(() => hasRole("master_accountant"));
								if_block(node_67, ($$render) => {
									if (get(d_9)) $$render(consequent_19);
								});
								var node_68 = sibling(node_67, 2);
								Badge(node_68, {
									variant: "warning",
									class: "uppercase text-[10px] font-bold tracking-wider",
									children: ($$anchor, $$slotProps) => {
										var fragment_35 = root_23();
										Book_open(first_child(fragment_35), { class: "h-3 w-3 mr-1" });
										next();
										append($$anchor, fragment_35);
									},
									$$slots: { default: true }
								});
								var span_32 = sibling(node_68, 2);
								var text_48 = child(span_32, true);
								reset(span_32);
								reset(div_49);
								var div_50 = sibling(div_49, 2);
								var span_33 = sibling(child(div_50));
								var text_49 = child(span_33, true);
								reset(span_33);
								var text_50 = sibling(span_33);
								reset(div_50);
								reset(div_48);
								var div_51 = sibling(div_48, 2);
								var div_52 = child(div_51);
								var span_34 = sibling(child(div_52), 2);
								MoneyDisplay(child(span_34), { get amount() {
									return get(journal).amount;
								} });
								reset(span_34);
								reset(div_52);
								var div_53 = sibling(div_52, 2);
								var span_35 = sibling(child(div_53), 2);
								var text_51 = child(span_35);
								reset(span_35);
								reset(div_53);
								var div_54 = sibling(div_53, 2);
								var span_36 = sibling(child(div_54), 2);
								var text_52 = child(span_36);
								reset(span_36);
								reset(div_54);
								var div_55 = sibling(div_54, 2);
								var span_37 = sibling(child(div_55), 2);
								var text_53 = child(span_37, true);
								reset(span_37);
								reset(div_55);
								reset(div_51);
								var node_71 = sibling(div_51, 2);
								var consequent_20 = ($$anchor) => {
									var div_56 = root_15();
									var node_72 = child(div_56);
									{
										let $0 = user_derived(() => get(processingId) === `journal-${get(journal).id}` || get(isBulkProcessing));
										Button(node_72, {
											variant: "outline",
											size: "sm",
											class: "rounded-xl text-red-600 border-red-200 hover:bg-red-50 text-xs font-semibold cursor-pointer h-8",
											get disabled() {
												return get($0);
											},
											onclick: () => openRejectModalForJournalItem(get(journal)),
											children: ($$anchor, $$slotProps) => {
												var fragment_36 = root_13();
												X(first_child(fragment_36), { class: "h-3.5 w-3.5 mr-1" });
												next();
												append($$anchor, fragment_36);
											},
											$$slots: { default: true }
										});
									}
									var node_74 = sibling(node_72, 2);
									{
										let $0 = user_derived(() => get(processingId) === `journal-${get(journal).id}` || get(isBulkProcessing));
										Button(node_74, {
											size: "sm",
											class: "rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold cursor-pointer h-8",
											get disabled() {
												return get($0);
											},
											onclick: () => handleApproveJournal(get(journal)),
											children: ($$anchor, $$slotProps) => {
												var fragment_37 = root_19();
												Check(first_child(fragment_37), { class: "h-3.5 w-3.5 mr-1" });
												next();
												append($$anchor, fragment_37);
											},
											$$slots: { default: true }
										});
									}
									reset(div_56);
									append($$anchor, div_56);
								};
								var d_10 = user_derived(() => hasRole("master_accountant"));
								if_block(node_71, ($$render) => {
									if (get(d_10)) $$render(consequent_20);
								});
								template_effect(($0) => {
									set_text(text_48, get(journal).journalNumber);
									set_text(text_49, get(journal).createdByName || `User #${get(journal).createdBy}`);
									set_text(text_50, ` · ${$0 ?? ""}`);
									set_text(text_51, `${get(journal).debitPartyType ?? ""}: ${get(journal).debitPartyName ?? ""}`);
									set_text(text_52, `${get(journal).creditPartyType ?? ""}: ${get(journal).creditPartyName ?? ""}`);
									set_text(text_53, get(journal).note || "No memo provided");
								}, [() => new Date(get(journal).createdAt).toLocaleString()]);
								append($$anchor, fragment_34);
							},
							$$slots: { default: true }
						});
					});
				}
				append($$anchor, fragment_33);
			});
			append($$anchor, fragment_32);
		};
		if_block(node_64, ($$render) => {
			if (get(activeTab) === "all" || get(activeTab) === "journals") $$render(consequent_21);
		});
		reset(div_7);
		append($$anchor, div_7);
	};
	if_block(node_24, ($$render) => {
		if (get(loading)) $$render(consequent_3);
		else if (get(d_2)) $$render(consequent_4, 1);
		else $$render(alternate, -1);
	});
	var node_76 = sibling(node_24, 2);
	var consequent_23 = ($$anchor) => {
		var div_57 = root_29();
		component(child(div_57), () => Card, ($$anchor, Card_Root_6) => {
			Card_Root_6($$anchor, {
				class: "w-full max-w-md border-destructive/30 shadow-2xl space-y-4 p-6 bg-card",
				children: ($$anchor, $$slotProps) => {
					var fragment_38 = root_1();
					var node_78 = first_child(fragment_38);
					component(node_78, () => Card_header, ($$anchor, Card_Header) => {
						Card_Header($$anchor, {
							class: "p-0 space-y-1",
							children: ($$anchor, $$slotProps) => {
								var fragment_39 = root_27();
								var node_79 = first_child(fragment_39);
								component(node_79, () => Card_title, ($$anchor, Card_Title) => {
									Card_Title($$anchor, {
										class: "text-base font-bold flex items-center gap-2 text-destructive",
										children: ($$anchor, $$slotProps) => {
											var fragment_40 = root_26();
											Circle_x(first_child(fragment_40), { class: "h-5 w-5" });
											next();
											append($$anchor, fragment_40);
										},
										$$slots: { default: true }
									});
								});
								component(sibling(node_79, 2), () => Card_description, ($$anchor, Card_Description) => {
									Card_Description($$anchor, {
										class: "text-xs text-muted-foreground",
										children: ($$anchor, $$slotProps) => {
											var fragment_41 = comment();
											var node_82 = first_child(fragment_41);
											var consequent_22 = ($$anchor) => {
												var text_54 = text();
												template_effect(() => set_text(text_54, `Rejecting ${get(selectedKeys).length ?? ""} selected request(s). Please state a reason below.`));
												append($$anchor, text_54);
											};
											var alternate_1 = ($$anchor) => {
												append($$anchor, text("State the reason for rejecting this approval request."));
											};
											if_block(node_82, ($$render) => {
												if (get(rejectionTarget)?.type === "bulk") $$render(consequent_22);
												else $$render(alternate_1, -1);
											});
											append($$anchor, fragment_41);
										},
										$$slots: { default: true }
									});
								});
								append($$anchor, fragment_39);
							},
							$$slots: { default: true }
						});
					});
					var node_83 = sibling(node_78, 2);
					component(node_83, () => Card_content, ($$anchor, Card_Content) => {
						Card_Content($$anchor, {
							class: "p-0 space-y-2",
							children: ($$anchor, $$slotProps) => {
								var fragment_43 = root_28();
								var textarea = sibling(first_child(fragment_43), 2);
								remove_textarea_child(textarea);
								bind_value(textarea, () => get(rejectionReason), ($$value) => set(rejectionReason, $$value));
								append($$anchor, fragment_43);
							},
							$$slots: { default: true }
						});
					});
					component(sibling(node_83, 2), () => Card_footer, ($$anchor, Card_Footer) => {
						Card_Footer($$anchor, {
							class: "p-0 flex items-center justify-end gap-2 pt-3 border-t border-border",
							children: ($$anchor, $$slotProps) => {
								var fragment_44 = root_27();
								var node_85 = first_child(fragment_44);
								Button(node_85, {
									variant: "outline",
									size: "sm",
									class: "rounded-xl text-xs font-semibold cursor-pointer",
									onclick: () => set(rejectionModalOpen, false),
									children: ($$anchor, $$slotProps) => {
										next();
										append($$anchor, text("Cancel"));
									},
									$$slots: { default: true }
								});
								Button(sibling(node_85, 2), {
									size: "sm",
									variant: "destructive",
									class: "rounded-xl text-xs font-semibold cursor-pointer",
									onclick: confirmRejectionModal,
									children: ($$anchor, $$slotProps) => {
										next();
										append($$anchor, text("Confirm Rejection"));
									},
									$$slots: { default: true }
								});
								append($$anchor, fragment_44);
							},
							$$slots: { default: true }
						});
					});
					append($$anchor, fragment_38);
				},
				$$slots: { default: true }
			});
		});
		reset(div_57);
		append($$anchor, div_57);
	};
	if_block(node_76, ($$render) => {
		if (get(rejectionModalOpen)) $$render(consequent_23);
	});
	reset(div);
	template_effect(($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17) => {
		set_class(button, 1, $0);
		set_text(text_2, `All (${$1 ?? ""})`);
		set_class(button_1, 1, $2);
		set_text(text_3, ` Payment Headers (${$3 ?? ""})`);
		set_class(button_2, 1, $4);
		set_text(text_4, ` Payment Vouchers (${$5 ?? ""})`);
		set_class(button_3, 1, $6);
		set_text(text_5, ` Financial Transactions (${$7 ?? ""})`);
		set_class(button_4, 1, $8);
		set_text(text_6, ` Party Transfer Journals (${$9 ?? ""})`);
		set_class(button_5, 1, $10);
		set_text(text_7, ` Agents (${$11 ?? ""})`);
		set_class(button_6, 1, $12);
		set_text(text_8, ` Suppliers (${$13 ?? ""})`);
		set_class(button_7, 1, $14);
		set_text(text_9, ` Banks (${$15 ?? ""})`);
		set_class(button_8, 1, $16);
		set_text(text_10, ` Cash Accounts (${$17 ?? ""})`);
	}, [
		() => clsx(["px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1.5", get(activeTab) === "all" ? "bg-primary text-primary-foreground shadow-xs" : "bg-muted/40 text-muted-foreground hover:bg-muted hover:text-foreground"].join(" ")),
		() => get(counts)().total,
		() => clsx(["px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1.5", get(activeTab) === "headers" ? "bg-primary text-primary-foreground shadow-xs" : "bg-muted/40 text-muted-foreground hover:bg-muted hover:text-foreground"].join(" ")),
		() => get(counts)().headers,
		() => clsx(["px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1.5", get(activeTab) === "expenses" ? "bg-primary text-primary-foreground shadow-xs" : "bg-muted/40 text-muted-foreground hover:bg-muted hover:text-foreground"].join(" ")),
		() => get(counts)().expenses,
		() => clsx(["px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1.5", get(activeTab) === "transactions" ? "bg-primary text-primary-foreground shadow-xs" : "bg-muted/40 text-muted-foreground hover:bg-muted hover:text-foreground"].join(" ")),
		() => get(counts)().transactions,
		() => clsx(["px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1.5", get(activeTab) === "journals" ? "bg-primary text-primary-foreground shadow-xs" : "bg-muted/40 text-muted-foreground hover:bg-muted hover:text-foreground"].join(" ")),
		() => get(counts)().journals,
		() => clsx(["px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1.5", get(activeTab) === "agents" ? "bg-primary text-primary-foreground shadow-xs" : "bg-muted/40 text-muted-foreground hover:bg-muted hover:text-foreground"].join(" ")),
		() => get(counts)().agents,
		() => clsx(["px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1.5", get(activeTab) === "suppliers" ? "bg-primary text-primary-foreground shadow-xs" : "bg-muted/40 text-muted-foreground hover:bg-muted hover:text-foreground"].join(" ")),
		() => get(counts)().suppliers,
		() => clsx(["px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1.5", get(activeTab) === "banks" ? "bg-primary text-primary-foreground shadow-xs" : "bg-muted/40 text-muted-foreground hover:bg-muted hover:text-foreground"].join(" ")),
		() => get(counts)().banks,
		() => clsx(["px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1.5", get(activeTab) === "accounts" ? "bg-primary text-primary-foreground shadow-xs" : "bg-muted/40 text-muted-foreground hover:bg-muted hover:text-foreground"].join(" ")),
		() => get(counts)().accounts
	]);
	delegated("click", button, () => set(activeTab, "all"));
	delegated("click", button_1, () => set(activeTab, "headers"));
	delegated("click", button_2, () => set(activeTab, "expenses"));
	delegated("click", button_3, () => set(activeTab, "transactions"));
	delegated("click", button_4, () => set(activeTab, "journals"));
	delegated("click", button_5, () => set(activeTab, "agents"));
	delegated("click", button_6, () => set(activeTab, "suppliers"));
	delegated("click", button_7, () => set(activeTab, "banks"));
	delegated("click", button_8, () => set(activeTab, "accounts"));
	append($$anchor, div);
	pop();
}
delegate(["click", "change"]);
//#endregion
export { _page as component };

import { B as append, Bt as reset, Ct as user_derived, H as from_html, I as if_block, K as delegate, N as each, Nt as pop, P as index, Pt as push, Q as get, R as set_text, b as bind_select_value, bt as state, g as remove_input_defaults, gt as proxy, ht as sibling, m as bind_value, mt as first_child, ot as template_effect, pt as child, q as delegated, r as onMount, vt as set, w as set_class, zt as next } from "../chunks/dXkmWTgM.js";
import "../chunks/DhaYE-8x.js";
import { t as Building_2 } from "../chunks/PAfPMPpZ.js";
import { t as Circle_alert } from "../chunks/CHXThoj_2.js";
import { t as File_text } from "../chunks/NLRKrZbo2.js";
import { t as History } from "../chunks/StzzW3F62.js";
import { t as Landmark } from "../chunks/D_q7zQKx2.js";
import { t as Printer } from "../chunks/Ds2DlsUi.js";
import { t as Refresh_cw } from "../chunks/DpTJy0Wb.js";
import { t as Search } from "../chunks/D7t9qluE.js";
import { t as X } from "../chunks/wXHc9RNY.js";
import { i as getSalaryPayments } from "../chunks/CSK2iPEt.js";
//#region src/routes/(app)/payroll/history/+page.svelte
var root = from_html(`<div class="p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-xs font-semibold flex items-center justify-between"><div class="flex items-center gap-2"><!> <span> </span></div> <button class="hover:opacity-80"><!></button></div>`);
var root_1 = from_html(`<div class="p-12 text-center text-muted-foreground flex flex-col items-center gap-3"><!> <span class="text-xs font-medium">Loading payroll history...</span></div>`);
var root_2 = from_html(`<div class="p-12 text-center text-muted-foreground flex flex-col items-center gap-2"><!> <p class="text-sm font-semibold text-foreground">No payroll records found</p> <p class="text-xs">Adjust your search or filter parameters to view records.</p></div>`);
var root_3 = from_html(`<tr class="hover:bg-muted/30 transition-colors cursor-pointer"><td class="py-3.5 px-4 font-semibold text-foreground"><div> </div> <div class="text-[10px] text-muted-foreground font-mono"> </div></td><td class="py-3.5 px-4"><span> </span></td><td class="py-3.5 px-4 font-medium text-foreground"> </td><td class="py-3.5 px-4 text-right font-bold text-foreground"> </td><td class="py-3.5 px-4 text-muted-foreground"><div class="flex items-center gap-1.5"><!> <span> </span></div></td><td class="py-3.5 px-4 text-muted-foreground"> </td><td class="py-3.5 px-4 font-mono text-muted-foreground"> </td><td class="py-3.5 px-4 text-center"><span> </span></td><td class="py-3.5 px-4 text-muted-foreground"> </td><td class="py-3.5 px-4 text-center"><button title="Export Salary Slip PDF" class="p-1.5 rounded-lg border border-border hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer"><!></button></td></tr>`);
var root_4 = from_html(`<div class="overflow-x-auto"><table class="w-full text-left text-xs border-collapse"><thead><tr class="border-b border-border bg-muted/40 text-muted-foreground uppercase text-[10px] font-bold tracking-wider"><th class="py-3 px-4">Employee</th><th class="py-3 px-4">Portal</th><th class="py-3 px-4">Period</th><th class="py-3 px-4 text-right">Net Salary</th><th class="py-3 px-4">Payment Method</th><th class="py-3 px-4">Paid From</th><th class="py-3 px-4">Reference</th><th class="py-3 px-4 text-center">Status</th><th class="py-3 px-4">Paid Date</th><th class="py-3 px-4 text-center">Actions</th></tr></thead><tbody class="divide-y divide-border"></tbody></table></div>`);
var root_5 = from_html(`<div class="pt-1"><span class="block text-[11px] font-semibold text-muted-foreground">Remarks:</span> <p class="text-foreground italic"> </p></div>`);
var root_6 = from_html(`<div class="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4"><div class="bg-card border border-border rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-200"><div class="flex items-center justify-between p-5 border-b border-border"><div><h2 class="text-base font-bold text-foreground">Payroll Payout Details</h2> <p class="text-xs text-muted-foreground mt-0.5"> </p></div> <button class="text-muted-foreground hover:text-foreground"><!></button></div> <div class="p-6 space-y-4 text-xs"><div class="p-4 rounded-xl bg-muted/30 border border-border space-y-2"><div class="flex justify-between"><span class="text-muted-foreground">Employee:</span> <span class="font-bold text-foreground"> </span></div> <div class="flex justify-between"><span class="text-muted-foreground">Portal:</span> <span class="font-semibold text-foreground"> </span></div> <div class="flex justify-between"><span class="text-muted-foreground">Period:</span> <span class="font-semibold text-foreground"> </span></div></div> <div class="space-y-1.5 p-3 rounded-xl border border-border bg-card"><div class="flex justify-between text-muted-foreground"><span>Basic Salary:</span> <span> </span></div> <div class="flex justify-between text-muted-foreground"><span>Incentive:</span> <span> </span></div> <div class="flex justify-between text-muted-foreground"><span>Bonus:</span> <span> </span></div> <div class="flex justify-between text-muted-foreground"><span>Allowance:</span> <span> </span></div> <div class="flex justify-between text-muted-foreground"><span>Deduction:</span> <span> </span></div> <div class="flex justify-between pt-2 border-t border-border font-bold text-sm text-foreground"><span>Net Salary:</span> <span class="text-primary"> </span></div></div> <div class="space-y-2 text-muted-foreground"><div class="flex justify-between"><span>Payment Method:</span> <span class="font-semibold text-foreground"> </span></div> <div class="flex justify-between"><span>Paid From Account:</span> <span class="font-semibold text-foreground"> </span></div> <div class="flex justify-between"><span>Transaction Ref:</span> <span class="font-mono text-foreground"> </span></div> <div class="flex justify-between"><span>Payment Date:</span> <span class="text-foreground"> </span></div> <div class="flex justify-between"><span>Status:</span> <span class="font-bold text-emerald-600"> </span></div> <!></div></div> <div class="p-4 border-t border-border bg-muted/10 flex items-center justify-between"><button class="h-9 px-4 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition-colors cursor-pointer flex items-center gap-2 shadow-xs"><!> <span>Export Salary Slip PDF</span></button> <button class="h-9 px-4 rounded-xl border border-border text-xs font-bold hover:bg-muted transition-colors cursor-pointer">Close</button></div></div></div>`);
var root_7 = from_html(`<div class="space-y-6"><div class="bg-card p-6 rounded-2xl border border-border shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"><div><h1 class="text-xl font-bold text-foreground flex items-center gap-2"><!> Payroll History</h1> <p class="text-xs text-muted-foreground mt-1">Audit trail of past staff salary payments and payouts across all portals. Paid records are completely immutable.</p></div> <button class="h-10 px-4 rounded-xl border border-border text-xs font-bold hover:bg-muted transition-colors cursor-pointer flex items-center gap-2 self-start sm:self-auto"><!> <span>Refresh History</span></button></div> <!> <div class="flex flex-col md:flex-row items-center justify-between gap-4 bg-card p-4 rounded-xl border border-border shadow-sm"><div class="flex flex-wrap items-center gap-2 w-full md:w-auto"><select class="h-9 px-3 rounded-xl border border-input bg-background text-xs font-semibold text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"><option>All Statuses</option><option>Paid</option><option>Pending</option><option>Cancelled</option></select> <select class="h-9 px-3 rounded-xl border border-input bg-background text-xs font-semibold text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"><option>All Portals</option><option>Accounts Staff</option><option>Sales Staff</option><option>Operational Staff</option></select></div> <div class="relative w-full md:w-72"><!> <input type="text" placeholder="Search employee, ref, code..." class="w-full h-9 pl-9 pr-4 rounded-xl border border-input bg-background text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"/></div></div> <div class="bg-card rounded-2xl border border-border shadow-sm overflow-hidden"><!></div></div> <!>`, 1);
function _page($$anchor, $$props) {
	push($$props, true);
	let loading = state(true);
	let error = state(null);
	let payments = state(proxy([]));
	let filterStatus = state("all");
	let filterPortal = state("all");
	let searchQuery = state("");
	let selectedPayment = state(null);
	onMount(async () => {
		await loadHistory();
	});
	async function loadHistory() {
		set(loading, true);
		set(error, null);
		try {
			set(payments, await getSalaryPayments(), true);
		} catch (err) {
			set(error, err?.message || "Failed to load payroll history", true);
		} finally {
			set(loading, false);
		}
	}
	const filteredPayments = user_derived(() => () => {
		return get(payments).filter((p) => {
			const statusStr = p.status || "";
			const portalStr = p.portalType || "";
			const nameStr = p.employeeName || "";
			const codeStr = p.employeeCode || "";
			const refStr = p.transactionReference || "";
			const matchesStatus = get(filterStatus) === "all" || statusStr.toLowerCase() === get(filterStatus).toLowerCase();
			const matchesPortal = get(filterPortal) === "all" || portalStr.toLowerCase() === get(filterPortal).toLowerCase();
			const matchesSearch = !get(searchQuery) || nameStr.toLowerCase().includes(get(searchQuery).toLowerCase()) || codeStr.toLowerCase().includes(get(searchQuery).toLowerCase()) || refStr.toLowerCase().includes(get(searchQuery).toLowerCase());
			return matchesStatus && matchesPortal && matchesSearch;
		});
	});
	function formatCurrency(val, curr = "BHD") {
		return `${curr} ${(val || 0).toLocaleString("en-US", {
			minimumFractionDigits: 3,
			maximumFractionDigits: 3
		})}`;
	}
	const months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec"
	];
	function exportSalarySlipPdf(p) {
		const printWindow = window.open("", "_blank", "width=850,height=950");
		if (!printWindow) return;
		const monthName = months[p.payrollMonth - 1];
		const paidFrom = p.paymentMethod === "Cash Account" ? p.cashAccountName || "Cash Account" : p.bankAccountName || "Bank Account";
		const grossEarnings = (p.basicSalary || 0) + (p.incentive || 0) + (p.bonus || 0) + (p.allowance || 0);
		const remarksHtml = p.remarks ? "<div style=\"font-size:11px; color:#475569; background:#f8fafc; padding:10px 14px; border-radius:6px; border:1px solid #e2e8f0; margin-bottom: 20px;\"><strong>Remarks / Voucher Notes:</strong> " + p.remarks + "</div>" : "";
		const htmlParts = [
			"<!DOCTYPE html><html><head><title>Salary Slip - ",
			p.employeeName,
			" (",
			monthName,
			" ",
			p.payrollYear,
			")</title>",
			"<style>",
			"@page { size: A4; margin: 15mm; }",
			"body { font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif; color: #0f172a; margin: 0; padding: 24px; background: #fff; }",
			".container { max-width: 750px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; padding: 36px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }",
			".header { display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #f1f5f9; padding-bottom: 20px; margin-bottom: 24px; }",
			".logo { height: 55px; object-fit: contain; }",
			".company-title { text-align: right; }",
			".company-title h1 { margin: 0; font-size: 20px; font-weight: 800; color: #0f172a; letter-spacing: 0.5px; }",
			".company-title p { margin: 4px 0 0 0; font-size: 11px; color: #64748b; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }",
			".document-badge { display: inline-block; background: #fef3c7; color: #92400e; font-size: 11px; font-weight: 700; padding: 4px 12px; border-radius: 20px; margin-top: 6px; }",
			".details-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 18px; margin-bottom: 24px; }",
			".detail-item { font-size: 12px; }",
			".detail-label { color: #64748b; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; }",
			".detail-value { color: #0f172a; font-weight: 700; margin-top: 3px; }",
			".tables-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-bottom: 24px; }",
			"table { width: 100%; border-collapse: collapse; font-size: 12px; }",
			"th { background: #f1f5f9; color: #334155; font-size: 11px; font-weight: 700; text-transform: uppercase; padding: 8px 12px; text-align: left; }",
			"td { padding: 8px 12px; border-bottom: 1px solid #f1f5f9; }",
			".text-right { text-align: right; }",
			".total-row td { font-weight: 700; border-top: 2px solid #cbd5e1; border-bottom: none; background: #f8fafc; }",
			".net-banner { background: #0f172a; color: #fff; border-radius: 8px; padding: 16px 20px; display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }",
			".net-label { font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; }",
			".net-amount { font-size: 22px; font-weight: 900; color: #f59e0b; font-family: monospace; }",
			".footer { margin-top: 32px; text-align: center; font-size: 10px; color: #94a3b8; }",
			"@media print { body { padding: 0; } .container { border: none; box-shadow: none; padding: 0; } }",
			"</style>",
			"</head><body>",
			"<div class=\"container\">",
			"<div class=\"header\"><div><img src=\"https://admin.texastravelsbh.com/assets/images/texas-logo.png\" alt=\"Texas Travels\" class=\"logo\" /></div>",
			"<div class=\"company-title\"><h1>TEXAS TRAVELS & TOURISM</h1><p>Official Payslip Voucher</p><div class=\"document-badge\">Ref: ",
			p.transactionReference || "PAY-" + p.id,
			"</div></div></div>",
			"<div class=\"details-grid\">",
			"<div class=\"detail-item\"><div class=\"detail-label\">Employee Name</div><div class=\"detail-value\">",
			p.employeeName,
			"</div></div>",
			"<div class=\"detail-item\"><div class=\"detail-label\">Employee Code</div><div class=\"detail-value\">",
			p.employeeCode,
			"</div></div>",
			"<div class=\"detail-item\"><div class=\"detail-label\">Department / Portal</div><div class=\"detail-value\">",
			p.portalType,
			" Staff</div></div>",
			"<div class=\"detail-item\"><div class=\"detail-label\">Pay Period</div><div class=\"detail-value\">",
			monthName,
			" ",
			p.payrollYear,
			"</div></div>",
			"<div class=\"detail-item\"><div class=\"detail-label\">Payment Date</div><div class=\"detail-value\">",
			new Date(p.paymentDate).toLocaleDateString(),
			"</div></div>",
			"<div class=\"detail-item\"><div class=\"detail-label\">Payment Channel</div><div class=\"detail-value\">",
			p.paymentMethod,
			" (",
			paidFrom,
			")</div></div>",
			"</div>",
			"<div class=\"tables-grid\">",
			"<div><table><thead><tr><th>Earnings</th><th class=\"text-right\">Amount (BHD)</th></tr></thead><tbody>",
			"<tr><td>Basic Salary</td><td class=\"text-right\">",
			p.basicSalary.toFixed(3),
			"</td></tr>",
			"<tr><td>Incentive</td><td class=\"text-right\">",
			p.incentive.toFixed(3),
			"</td></tr>",
			"<tr><td>Bonus</td><td class=\"text-right\">",
			p.bonus.toFixed(3),
			"</td></tr>",
			"<tr><td>Allowance</td><td class=\"text-right\">",
			p.allowance.toFixed(3),
			"</td></tr>",
			"<tr class=\"total-row\"><td>Gross Earnings</td><td class=\"text-right\">",
			grossEarnings.toFixed(3),
			"</td></tr>",
			"</tbody></table></div>",
			"<div><table><thead><tr><th>Deductions</th><th class=\"text-right\">Amount (BHD)</th></tr></thead><tbody>",
			"<tr><td>Salary Deduction</td><td class=\"text-right\">",
			p.deduction.toFixed(3),
			"</td></tr>",
			"<tr class=\"total-row\"><td>Total Deductions</td><td class=\"text-right\">",
			p.deduction.toFixed(3),
			"</td></tr>",
			"</tbody></table></div>",
			"</div>",
			"<div class=\"net-banner\"><div class=\"net-label\">Net Salary Paid</div><div class=\"net-amount\">BHD ",
			p.netSalary.toFixed(3),
			"</div></div>",
			remarksHtml,
			"<div class=\"footer\">This is a computer-generated salary slip created by Texas Accounts Portal.</div>",
			"</div>",
			"<script>",
			"window.onload = function() { setTimeout(function() { window.print(); }, 400); };",
			"<\/script>",
			"</body></html>"
		];
		printWindow.document.write(htmlParts.join(""));
		printWindow.document.close();
	}
	var fragment = root_7();
	var div = first_child(fragment);
	var div_1 = child(div);
	var div_2 = child(div_1);
	var h1 = child(div_2);
	History(child(h1), { class: "h-6 w-6 text-primary" });
	next();
	reset(h1);
	next(2);
	reset(div_2);
	var button = sibling(div_2, 2);
	Refresh_cw(child(button), { class: "h-4 w-4" });
	next(2);
	reset(button);
	reset(div_1);
	var node_2 = sibling(div_1, 2);
	var consequent = ($$anchor) => {
		var div_3 = root();
		var div_4 = child(div_3);
		var node_3 = child(div_4);
		Circle_alert(node_3, { class: "h-4 w-4 shrink-0" });
		var span = sibling(node_3, 2);
		var text = child(span, true);
		reset(span);
		reset(div_4);
		var button_1 = sibling(div_4, 2);
		X(child(button_1), { class: "h-4 w-4" });
		reset(button_1);
		reset(div_3);
		template_effect(() => set_text(text, get(error)));
		delegated("click", button_1, () => set(error, null));
		append($$anchor, div_3);
	};
	if_block(node_2, ($$render) => {
		if (get(error)) $$render(consequent);
	});
	var div_5 = sibling(node_2, 2);
	var div_6 = child(div_5);
	var select = child(div_6);
	var option = child(select);
	option.value = option.__value = "all";
	var option_1 = sibling(option);
	option_1.value = option_1.__value = "Paid";
	var option_2 = sibling(option_1);
	option_2.value = option_2.__value = "Pending";
	var option_3 = sibling(option_2);
	option_3.value = option_3.__value = "Cancelled";
	reset(select);
	var select_1 = sibling(select, 2);
	var option_4 = child(select_1);
	option_4.value = option_4.__value = "all";
	var option_5 = sibling(option_4);
	option_5.value = option_5.__value = "Account";
	var option_6 = sibling(option_5);
	option_6.value = option_6.__value = "Sales";
	var option_7 = sibling(option_6);
	option_7.value = option_7.__value = "Operational";
	reset(select_1);
	reset(div_6);
	var div_7 = sibling(div_6, 2);
	var node_5 = child(div_7);
	Search(node_5, { class: "h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" });
	var input = sibling(node_5, 2);
	remove_input_defaults(input);
	reset(div_7);
	reset(div_5);
	var div_8 = sibling(div_5, 2);
	var node_6 = child(div_8);
	var consequent_1 = ($$anchor) => {
		var div_9 = root_1();
		Refresh_cw(child(div_9), { class: "h-6 w-6 animate-spin text-primary" });
		next(2);
		reset(div_9);
		append($$anchor, div_9);
	};
	var consequent_2 = ($$anchor) => {
		var div_10 = root_2();
		File_text(child(div_10), { class: "h-10 w-10 text-muted-foreground/40" });
		next(4);
		reset(div_10);
		append($$anchor, div_10);
	};
	var d = user_derived(() => get(filteredPayments)().length === 0);
	var alternate_1 = ($$anchor) => {
		var div_11 = root_4();
		var table = child(div_11);
		var tbody = sibling(child(table));
		each(tbody, 21, () => get(filteredPayments)(), index, ($$anchor, p) => {
			const statusStr = user_derived(() => get(p).status);
			const portalStr = user_derived(() => get(p).portalType);
			const methodStr = user_derived(() => get(p).paymentMethod);
			const paidFrom = user_derived(() => get(methodStr) === "Cash Account" ? get(p).cashAccountName : get(p).bankAccountName);
			var tr = root_3();
			var td = child(tr);
			var div_12 = child(td);
			var text_1 = child(div_12, true);
			reset(div_12);
			var div_13 = sibling(div_12, 2);
			var text_2 = child(div_13, true);
			reset(div_13);
			reset(td);
			var td_1 = sibling(td);
			var span_1 = child(td_1);
			var text_3 = child(span_1, true);
			reset(span_1);
			reset(td_1);
			var td_2 = sibling(td_1);
			var text_4 = child(td_2);
			reset(td_2);
			var td_3 = sibling(td_2);
			var text_5 = child(td_3, true);
			reset(td_3);
			var td_4 = sibling(td_3);
			var div_14 = child(td_4);
			var node_9 = child(div_14);
			var consequent_3 = ($$anchor) => {
				Landmark($$anchor, { class: "h-3.5 w-3.5 text-amber-500" });
			};
			var alternate = ($$anchor) => {
				Building_2($$anchor, { class: "h-3.5 w-3.5 text-blue-500" });
			};
			if_block(node_9, ($$render) => {
				if (get(methodStr) === "Cash Account") $$render(consequent_3);
				else $$render(alternate, -1);
			});
			var span_2 = sibling(node_9, 2);
			var text_6 = child(span_2, true);
			reset(span_2);
			reset(div_14);
			reset(td_4);
			var td_5 = sibling(td_4);
			var text_7 = child(td_5, true);
			reset(td_5);
			var td_6 = sibling(td_5);
			var text_8 = child(td_6, true);
			reset(td_6);
			var td_7 = sibling(td_6);
			var span_3 = child(td_7);
			var text_9 = child(span_3, true);
			reset(span_3);
			reset(td_7);
			var td_8 = sibling(td_7);
			var text_10 = child(td_8, true);
			reset(td_8);
			var td_9 = sibling(td_8);
			var button_2 = child(td_9);
			Printer(child(button_2), { class: "h-4 w-4 text-amber-600" });
			reset(button_2);
			reset(td_9);
			reset(tr);
			template_effect(($0, $1) => {
				set_text(text_1, get(p).employeeName);
				set_text(text_2, get(p).employeeCode);
				set_class(span_1, 1, `px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider
										${get(portalStr) === "Account" ? "bg-blue-500/10 text-blue-600" : ""}
										${get(portalStr) === "Sales" ? "bg-amber-500/10 text-amber-600" : ""}
										${get(portalStr) === "Operational" ? "bg-purple-500/10 text-purple-600" : ""}`);
				set_text(text_3, get(portalStr));
				set_text(text_4, `${months[get(p).payrollMonth - 1] ?? ""} ${get(p).payrollYear ?? ""}`);
				set_text(text_5, $0);
				set_text(text_6, get(methodStr));
				set_text(text_7, get(paidFrom) || "—");
				set_text(text_8, get(p).transactionReference || "—");
				set_class(span_3, 1, `px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase
										${get(statusStr) === "Paid" ? "bg-emerald-500/10 text-emerald-600" : ""}
										${get(statusStr) === "Pending" ? "bg-amber-500/10 text-amber-600" : ""}
										${get(statusStr) === "Cancelled" ? "bg-destructive/10 text-destructive" : ""}`);
				set_text(text_9, get(statusStr));
				set_text(text_10, $1);
			}, [() => formatCurrency(get(p).netSalary), () => new Date(get(p).paymentDate).toLocaleDateString()]);
			delegated("click", tr, () => set(selectedPayment, get(p), true));
			delegated("click", td_9, (e) => e.stopPropagation());
			delegated("click", button_2, () => exportSalarySlipPdf(get(p)));
			append($$anchor, tr);
		});
		reset(tbody);
		reset(table);
		reset(div_11);
		append($$anchor, div_11);
	};
	if_block(node_6, ($$render) => {
		if (get(loading)) $$render(consequent_1);
		else if (get(d)) $$render(consequent_2, 1);
		else $$render(alternate_1, -1);
	});
	reset(div_8);
	reset(div);
	var node_11 = sibling(div, 2);
	var consequent_5 = ($$anchor) => {
		const p = user_derived(() => get(selectedPayment));
		const statusStr = user_derived(() => get(p).status);
		const methodStr = user_derived(() => get(p).paymentMethod);
		const paidFrom = user_derived(() => get(methodStr) === "Cash Account" ? get(p).cashAccountName : get(p).bankAccountName);
		var div_15 = root_6();
		var div_16 = child(div_15);
		var div_17 = child(div_16);
		var div_18 = child(div_17);
		var p_1 = sibling(child(div_18), 2);
		var text_11 = child(p_1);
		reset(p_1);
		reset(div_18);
		var button_3 = sibling(div_18, 2);
		X(child(button_3), { class: "h-5 w-5" });
		reset(button_3);
		reset(div_17);
		var div_19 = sibling(div_17, 2);
		var div_20 = child(div_19);
		var div_21 = child(div_20);
		var span_4 = sibling(child(div_21), 2);
		var text_12 = child(span_4);
		reset(span_4);
		reset(div_21);
		var div_22 = sibling(div_21, 2);
		var span_5 = sibling(child(div_22), 2);
		var text_13 = child(span_5, true);
		reset(span_5);
		reset(div_22);
		var div_23 = sibling(div_22, 2);
		var span_6 = sibling(child(div_23), 2);
		var text_14 = child(span_6);
		reset(span_6);
		reset(div_23);
		reset(div_20);
		var div_24 = sibling(div_20, 2);
		var div_25 = child(div_24);
		var span_7 = sibling(child(div_25), 2);
		var text_15 = child(span_7, true);
		reset(span_7);
		reset(div_25);
		var div_26 = sibling(div_25, 2);
		var span_8 = sibling(child(div_26), 2);
		var text_16 = child(span_8);
		reset(span_8);
		reset(div_26);
		var div_27 = sibling(div_26, 2);
		var span_9 = sibling(child(div_27), 2);
		var text_17 = child(span_9);
		reset(span_9);
		reset(div_27);
		var div_28 = sibling(div_27, 2);
		var span_10 = sibling(child(div_28), 2);
		var text_18 = child(span_10);
		reset(span_10);
		reset(div_28);
		var div_29 = sibling(div_28, 2);
		var span_11 = sibling(child(div_29), 2);
		var text_19 = child(span_11);
		reset(span_11);
		reset(div_29);
		var div_30 = sibling(div_29, 2);
		var span_12 = sibling(child(div_30), 2);
		var text_20 = child(span_12, true);
		reset(span_12);
		reset(div_30);
		reset(div_24);
		var div_31 = sibling(div_24, 2);
		var div_32 = child(div_31);
		var span_13 = sibling(child(div_32), 2);
		var text_21 = child(span_13, true);
		reset(span_13);
		reset(div_32);
		var div_33 = sibling(div_32, 2);
		var span_14 = sibling(child(div_33), 2);
		var text_22 = child(span_14, true);
		reset(span_14);
		reset(div_33);
		var div_34 = sibling(div_33, 2);
		var span_15 = sibling(child(div_34), 2);
		var text_23 = child(span_15, true);
		reset(span_15);
		reset(div_34);
		var div_35 = sibling(div_34, 2);
		var span_16 = sibling(child(div_35), 2);
		var text_24 = child(span_16, true);
		reset(span_16);
		reset(div_35);
		var div_36 = sibling(div_35, 2);
		var span_17 = sibling(child(div_36), 2);
		var text_25 = child(span_17, true);
		reset(span_17);
		reset(div_36);
		var node_13 = sibling(div_36, 2);
		var consequent_4 = ($$anchor) => {
			var div_37 = root_5();
			var p_2 = sibling(child(div_37), 2);
			var text_26 = child(p_2, true);
			reset(p_2);
			reset(div_37);
			template_effect(() => set_text(text_26, get(p).remarks));
			append($$anchor, div_37);
		};
		if_block(node_13, ($$render) => {
			if (get(p).remarks) $$render(consequent_4);
		});
		reset(div_31);
		reset(div_19);
		var div_38 = sibling(div_19, 2);
		var button_4 = child(div_38);
		Printer(child(button_4), { class: "h-4 w-4" });
		next(2);
		reset(button_4);
		var button_5 = sibling(button_4, 2);
		reset(div_38);
		reset(div_16);
		reset(div_15);
		template_effect(($0, $1, $2, $3, $4, $5, $6) => {
			set_text(text_11, `Payment Record #${get(p).id ?? ""}`);
			set_text(text_12, `${get(p).employeeName ?? ""} (${get(p).employeeCode ?? ""})`);
			set_text(text_13, get(p).portalType);
			set_text(text_14, `${months[get(p).payrollMonth - 1] ?? ""} ${get(p).payrollYear ?? ""}`);
			set_text(text_15, $0);
			set_text(text_16, `+ ${$1 ?? ""}`);
			set_text(text_17, `+ ${$2 ?? ""}`);
			set_text(text_18, `+ ${$3 ?? ""}`);
			set_text(text_19, `- ${$4 ?? ""}`);
			set_text(text_20, $5);
			set_text(text_21, get(methodStr));
			set_text(text_22, get(paidFrom) || "N/A");
			set_text(text_23, get(p).transactionReference || "N/A");
			set_text(text_24, $6);
			set_text(text_25, get(statusStr));
		}, [
			() => formatCurrency(get(p).basicSalary),
			() => formatCurrency(get(p).incentive),
			() => formatCurrency(get(p).bonus),
			() => formatCurrency(get(p).allowance),
			() => formatCurrency(get(p).deduction),
			() => formatCurrency(get(p).netSalary),
			() => new Date(get(p).paymentDate).toLocaleDateString()
		]);
		delegated("click", button_3, () => set(selectedPayment, null));
		delegated("click", button_4, () => exportSalarySlipPdf(get(p)));
		delegated("click", button_5, () => set(selectedPayment, null));
		append($$anchor, div_15);
	};
	if_block(node_11, ($$render) => {
		if (get(selectedPayment)) $$render(consequent_5);
	});
	delegated("click", button, loadHistory);
	bind_select_value(select, () => get(filterStatus), ($$value) => set(filterStatus, $$value));
	bind_select_value(select_1, () => get(filterPortal), ($$value) => set(filterPortal, $$value));
	bind_value(input, () => get(searchQuery), ($$value) => set(searchQuery, $$value));
	append($$anchor, fragment);
	pop();
}
delegate(["click"]);
//#endregion
export { _page as component };

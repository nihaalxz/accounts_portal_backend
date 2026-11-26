import { A as component, B as append, Bt as reset, Ct as user_derived, D as head, G as text, H as from_html, I as if_block, J as event, K as delegate, N as each, Nt as pop, P as index, Pt as push, Q as get, R as set_text, T as clsx, V as comment, _ as set_attribute, b as bind_select_value, bt as state, dt as $document, g as remove_input_defaults, gt as proxy, ht as sibling, it as effect, m as bind_value, mt as first_child, ot as template_effect, pt as child, q as delegated, r as onMount, ut as remove_textarea_child, vt as set, w as set_class, xt as update, zt as next } from "../chunks/dXkmWTgM.js";
import "../chunks/DhaYE-8x.js";
import { t as apiFetch } from "../chunks/CxnI_tB7.js";
import { i as hasRole } from "../chunks/BeSwqOYU.js";
import { r as toast } from "../chunks/CbPRQHfn.js";
import { t as Arrow_right } from "../chunks/DZE4Pk63.js";
import { t as Arrow_up_down } from "../chunks/CkiGcj23.js";
import { t as Briefcase } from "../chunks/DMJEmKtH.js";
import { t as Building_2 } from "../chunks/PAfPMPpZ.js";
import { t as Calendar } from "../chunks/DxFQ7Qxv.js";
import { n as Car, t as Plane } from "../chunks/DG-SfabB.js";
import { t as Chevron_left } from "../chunks/bgfi4Y0B2.js";
import { t as Chevron_right } from "../chunks/BQLzQDdY2.js";
import { t as Clock } from "../chunks/CZu1L_RP2.js";
import { t as Compass } from "../chunks/CZmkKFe42.js";
import { t as Dollar_sign } from "../chunks/BnaNfP7s2.js";
import { t as External_link } from "../chunks/ifddzD342.js";
import { t as File_spreadsheet } from "../chunks/B4BvDHOF2.js";
import { t as File_text } from "../chunks/NLRKrZbo2.js";
import { t as History } from "../chunks/StzzW3F62.js";
import { t as Layers } from "../chunks/CFg-aOba.js";
import { t as Pen_line } from "../chunks/CvjCDChO.js";
import { t as Refresh_cw } from "../chunks/DpTJy0Wb.js";
import { t as Rotate_ccw } from "../chunks/CEB2WCBr.js";
import { t as Save } from "../chunks/YnLTLont.js";
import { t as Search } from "../chunks/D7t9qluE.js";
import { t as Shield_alert } from "../chunks/BqY57apW.js";
import { t as Sliders_horizontal } from "../chunks/BI9_YWC7.js";
import { t as Trending_up } from "../chunks/dBTjeHCK.js";
import { t as X } from "../chunks/wXHc9RNY.js";
import { a as formatDateTime, n as formatBahrainTime, o as getBahrainDateString, r as formatDate } from "../chunks/CMotoyuB2.js";
import { t as Button } from "../chunks/BhXsq3bC2.js";
import { t as MoneyDisplay } from "../chunks/CIVSRuaR2.js";
import { t as DateDisplay } from "../chunks/CCHT88li2.js";
import "../chunks/i0JnNAgk2.js";
import { t as exportToCSV } from "../chunks/C74Z4VDd2.js";
import { t as SearchableSelect } from "../chunks/DP5NOm4E.js";
//#region src/routes/(app)/sales/profit-management/+page.svelte
var root = from_html(`<div class="p-12 text-center border border-border rounded-2xl bg-card space-y-4 max-w-lg mx-auto my-12 shadow-xs"><!> <div class="space-y-1"><h2 class="text-base font-bold text-foreground">Access Restricted</h2> <p class="text-xs text-muted-foreground">Salesman Profit Management is restricted exclusively to Master Accountants. Please contact your system administrator if you require access.</p></div></div>`);
var root_1 = from_html(`<!> <span>CSV</span>`, 1);
var root_2 = from_html(`<!> <span>History CSV</span>`, 1);
var root_3 = from_html(`<!> <span>Refresh</span>`, 1);
var root_4 = from_html(`<span class="px-2.5 py-0.5 rounded-md bg-primary/10 text-primary font-mono text-[11px] font-semibold"> </span>`);
var root_5 = from_html(`<span class="px-2.5 py-0.5 rounded-md bg-muted text-muted-foreground font-mono text-[11px]">All Time</span>`);
var root_6 = from_html(`<!> <span>Clear Dates</span>`, 1);
var root_7 = from_html(`<div class="h-24 bg-muted rounded-2xl"></div>`);
var root_8 = from_html(`<div class="animate-pulse space-y-6"><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5"></div> <div class="h-96 bg-muted rounded-2xl"></div></div>`);
var root_9 = from_html(`<span> </span>`);
var root_10 = from_html(`<span class="text-[11px] text-muted-foreground font-medium hidden sm:inline">Chronological log of manual profit adjustments & commission overrides</span>`);
var root_11 = from_html(`<button type="button" class="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground cursor-pointer"><!></button>`);
var root_12 = from_html(`<select class="h-8.5 px-3 rounded-xl border border-border bg-background text-xs text-foreground font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/20"><option>All Statuses</option><option>Finalized / Closed</option><option>Estimated / Open</option></select>`);
var root_13 = from_html(`<!> <span>Reset</span>`, 1);
var root_14 = from_html(`<button type="button"><!> <span> </span></button>`);
var root_15 = from_html(`<!> <span>Clear Filters</span>`, 1);
var root_16 = from_html(`<div class="p-12 text-center text-muted-foreground border border-border rounded-2xl bg-card space-y-3"><div class="h-12 w-12 rounded-2xl bg-muted flex items-center justify-center mx-auto text-muted-foreground"><!></div> <h3 class="text-sm font-bold text-foreground">No Matching Profit Records</h3> <p class="text-xs text-muted-foreground max-w-sm mx-auto">No records matched your search criteria. Try adjusting or clearing your filters.</p> <!></div>`);
var root_17 = from_html(`<span class="text-[11px] font-semibold text-foreground/80 block truncate max-w-[160px]"> </span>`);
var root_18 = from_html(`<button type="button" class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-purple-500/10 text-purple-600 hover:bg-purple-500/20 border border-purple-500/20 cursor-pointer transition-colors" title="Click to view modification history for this booking"><!> <span> </span></button>`);
var root_19 = from_html(`<span class="text-[10px] text-muted-foreground/60 font-medium">Standard</span>`);
var root_20 = from_html(`<!> <span>Adjust</span>`, 1);
var root_21 = from_html(`<tr class="hover:bg-muted/10 transition-colors"><td class="py-3 px-4"><div class="flex items-center gap-2"><div><!></div> <div><a class="font-bold text-foreground font-mono hover:text-primary hover:underline flex items-center gap-1"><span> </span> <!></a> <!> <span class="text-[10px] text-muted-foreground"><!></span></div></div></td><td class="py-3 px-4 font-semibold text-foreground"><div class="flex items-center gap-2"><div class="h-6 w-6 rounded-full bg-primary/10 text-primary font-bold text-[10px] flex items-center justify-center shrink-0"> </div> <span class="truncate max-w-[150px]"> </span></div></td><td class="py-3 px-4 text-right font-mono font-bold text-foreground"><!></td><td class="py-3 px-4 text-right"><span class="font-mono text-muted-foreground block"><!></span> <span class="text-[9px] uppercase tracking-wider font-bold text-muted-foreground/80"> </span></td><td class="py-3 px-4 text-right"><span><!></span></td><td class="py-3 px-4 text-center"><!></td><td class="py-3 px-4 text-right"><div class="flex items-center justify-end gap-1.5"><!> <!></div></td></tr>`);
var root_22 = from_html(`<div class="bg-card border border-border rounded-2xl overflow-hidden shadow-xs"><div class="overflow-x-auto"><table class="w-full text-left text-xs border-collapse"><thead><tr class="bg-muted/30 border-b border-border text-muted-foreground font-semibold text-[11px] uppercase tracking-wider select-none"><th class="py-3 px-4 cursor-pointer hover:bg-muted/20 transition-colors"><div class="flex items-center gap-1"><span>Booking Ref</span> <!></div></th><th class="py-3 px-4 cursor-pointer hover:bg-muted/20 transition-colors"><div class="flex items-center gap-1"><span>Salesman</span> <!></div></th><th class="py-3 px-4 text-right cursor-pointer hover:bg-muted/20 transition-colors"><div class="flex items-center justify-end gap-1"><span>Selling Price</span> <!></div></th><th class="py-3 px-4 text-right cursor-pointer hover:bg-muted/20 transition-colors"><div class="flex items-center justify-end gap-1"><span>Supplier Cost</span> <!></div></th><th class="py-3 px-4 text-right cursor-pointer hover:bg-muted/20 transition-colors"><div class="flex items-center justify-end gap-1"><span>Net Profit</span> <!></div></th><th class="py-3 px-4 text-center">Modifications</th><th class="py-3 px-4 text-right">Action</th></tr></thead><tbody class="divide-y divide-border/60"></tbody></table></div> <div class="p-3.5 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-muted-foreground bg-muted/10"><div class="flex items-center gap-2"><span> </span> <select class="h-7 px-2 bg-background border border-border rounded-lg text-xs text-foreground cursor-pointer font-semibold"><option>10 / page</option><option>20 / page</option><option>50 / page</option><option>100 / page</option><option>200 / page</option><option>500 / page</option><option>1000 / page (All)</option></select></div> <div class="flex items-center gap-1.5"><button type="button" class="h-7.5 px-2.5 rounded-lg border border-border bg-background hover:bg-muted text-foreground disabled:opacity-40 disabled:pointer-events-none cursor-pointer flex items-center gap-1 transition-colors"><!> <span>Prev</span></button> <span class="px-2 font-semibold text-foreground"> </span> <button type="button" class="h-7.5 px-2.5 rounded-lg border border-border bg-background hover:bg-muted text-foreground disabled:opacity-40 disabled:pointer-events-none cursor-pointer flex items-center gap-1 transition-colors"><span>Next</span> <!></button></div></div></div>`);
var root_23 = from_html(`<div class="p-12 text-center text-muted-foreground border border-border rounded-2xl bg-card space-y-3"><div class="h-12 w-12 rounded-2xl bg-purple-500/10 flex items-center justify-center mx-auto text-purple-600"><!></div> <h3 class="text-sm font-bold text-foreground">No Profit Modifications Found</h3> <p class="text-xs text-muted-foreground max-w-sm mx-auto">No profit modifications have been recorded yet, or no records matched your search filters.</p> <!></div>`);
var root_24 = from_html(`<span class="text-[11px] font-semibold text-foreground/80 block truncate max-w-[150px]"> </span>`);
var root_25 = from_html(`<tr class="hover:bg-muted/10 transition-colors"><td class="py-3 px-4"><div class="flex items-center gap-1.5 font-mono text-[11px] text-foreground"><!> <div><span class="block font-bold"> </span> <span class="text-[10px] text-muted-foreground"> </span></div></div></td><td class="py-3 px-4"><div class="flex items-center gap-2"><div><!></div> <div><a class="font-bold text-foreground font-mono hover:text-primary hover:underline flex items-center gap-1"><span> </span> <!></a> <!> <span class="text-[10px] text-muted-foreground uppercase font-bold"> </span></div></div></td><td class="py-3 px-4 font-semibold text-foreground"><div class="flex items-center gap-2"><div class="h-6 w-6 rounded-full bg-primary/10 text-primary font-bold text-[10px] flex items-center justify-center shrink-0"> </div> <span class="truncate max-w-[140px]"> </span></div></td><td class="py-3 px-4 text-right font-mono"><div class="flex items-center justify-end gap-1 text-[11px]"><span class="text-muted-foreground line-through opacity-80"> </span> <!> <span class="font-bold text-foreground"> </span></div></td><td class="py-3 px-4 text-center"><span> </span></td><td class="py-3 px-4 max-w-xs"><div class="text-xs text-foreground font-medium line-clamp-2"> </div> <span class="text-[10px] text-muted-foreground block font-mono mt-0.5"> </span></td><td class="py-3 px-4 text-right"><a class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold border border-border bg-background hover:bg-muted text-foreground transition-colors cursor-pointer"><span>View Deal</span> <!></a></td></tr>`);
var root_26 = from_html(`<div class="bg-card border border-border rounded-2xl overflow-hidden shadow-xs"><div class="overflow-x-auto"><table class="w-full text-left text-xs border-collapse"><thead><tr class="border-b border-border bg-purple-500/5 text-[11px] font-bold text-purple-700 dark:text-purple-300 uppercase tracking-wider"><th class="py-3 px-4">Timestamp & Date</th><th class="py-3 px-4">Booking Ref</th><th class="py-3 px-4">Salesman</th><th class="py-3 px-4 text-right">Profit Shift</th><th class="py-3 px-4 text-center">Adjustment Delta</th><th class="py-3 px-4">Reason / Explanation</th><th class="py-3 px-4 text-right">Action</th></tr></thead><tbody class="divide-y divide-border/60"></tbody></table></div> <div class="p-3.5 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-muted-foreground bg-muted/10"><div class="flex items-center gap-2"><span> </span> <select class="h-7 px-2 bg-background border border-border rounded-lg text-xs text-foreground cursor-pointer font-semibold"><option>10 / page</option><option>20 / page</option><option>50 / page</option><option>100 / page</option><option>200 / page</option><option>500 / page</option><option>1000 / page (All)</option></select></div> <div class="flex items-center gap-1.5"><button type="button" class="h-7.5 px-2.5 rounded-lg border border-border bg-background hover:bg-muted text-foreground disabled:opacity-40 disabled:pointer-events-none cursor-pointer flex items-center gap-1 transition-colors"><!> <span>Prev</span></button> <span class="px-2 font-semibold text-foreground"> </span> <button type="button" class="h-7.5 px-2.5 rounded-lg border border-border bg-background hover:bg-muted text-foreground disabled:opacity-40 disabled:pointer-events-none cursor-pointer flex items-center gap-1 transition-colors"><span>Next</span> <!></button></div></div></div>`);
var root_27 = from_html(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5"><div class="bg-card border border-border rounded-2xl p-4 shadow-xs space-y-1"><span class="text-[11px] font-bold text-muted-foreground uppercase tracking-wider block">Total Sales Volume</span> <span class="text-lg font-bold font-mono text-foreground"><!></span></div> <div class="bg-card border border-border rounded-2xl p-4 shadow-xs space-y-1"><div class="flex items-center gap-1"><span class="text-[11px] font-bold text-muted-foreground uppercase tracking-wider block">Finalized Profit</span> <span class="text-[10px] text-muted-foreground/70 cursor-help" title="Realized profit from confirmed/closed bookings">ⓘ</span></div> <span class="text-lg font-bold font-mono text-teal-600 dark:text-teal-400"><!></span></div> <div class="bg-card border border-border rounded-2xl p-4 shadow-xs space-y-1"><span class="text-[11px] font-bold text-muted-foreground uppercase tracking-wider block">Estimated Profit</span> <span class="text-lg font-bold font-mono text-amber-600 dark:text-amber-400"><!></span></div> <div class="bg-card border border-border rounded-2xl p-4 shadow-xs space-y-1"><span class="text-[11px] font-bold text-muted-foreground uppercase tracking-wider block">Net Total Profit</span> <span class="text-lg font-bold font-mono text-emerald-600 dark:text-emerald-400"><!></span></div> <div class="bg-card border border-border rounded-2xl p-4 shadow-xs space-y-1"><span class="text-[11px] font-bold text-muted-foreground uppercase tracking-wider block">Overall Margin</span> <span class="text-xl font-bold font-mono text-foreground"> </span></div></div> <div class="space-y-3"><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-border/60 pb-3"><div class="flex items-center gap-1 bg-muted/40 rounded-xl p-1 border border-border/50"><button type="button"><!> <span>Profit Records</span> <span> </span></button> <button type="button"><!> <span>Modification History</span> <!></button></div> <!></div> <div class="bg-card border border-border rounded-2xl p-4 shadow-xs space-y-3"><div class="flex flex-col lg:flex-row lg:items-center justify-between gap-3"><div class="flex flex-wrap items-center gap-2 flex-1"><div class="relative w-full max-w-[280px]"><span class="absolute inset-y-0 left-3 flex items-center text-muted-foreground/60"><!></span> <input type="text" class="w-full pl-9 pr-8 py-1.5 text-xs rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 placeholder-muted-foreground/60"/> <!></div> <div class="w-[180px]"><!></div> <!> <!></div></div> <div class="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs flex-nowrap scrollbar-thin pt-2 border-t border-border/40"><span class="text-[11px] font-bold text-muted-foreground mr-1 shrink-0">Service:</span> <!></div></div></div> <!>`, 1);
var root_28 = from_html(`<div class="space-y-1.5 animate-in fade-in duration-150"><div class="flex items-center justify-between"><label for="targetProfitInput" class="font-semibold text-foreground">New Profit Amount (BHD) <span class="text-red-500">*</span></label> <div class="flex items-center gap-1.5"><button type="button" class="text-[10px] text-muted-foreground hover:text-foreground underline cursor-pointer"> </button> <span class="text-muted-foreground">•</span> <button type="button" class="text-[10px] text-rose-600 hover:underline cursor-pointer">0.000</button></div></div> <div class="flex items-center rounded-xl border border-border bg-background focus-within:ring-2 focus-within:ring-primary/20 overflow-hidden h-9"><span class="px-3 bg-muted/50 border-r border-border text-xs font-bold text-teal-700 dark:text-teal-400 font-mono">BHD</span> <input id="targetProfitInput" type="number" step="0.001" placeholder="Enter exact new profit..." class="flex-1 h-full px-3 bg-transparent font-mono text-xs font-bold text-foreground focus:outline-none" required=""/></div></div>`);
var root_29 = from_html(`<div class="space-y-1.5 animate-in fade-in duration-150"><label for="adjustAmtInput" class="font-semibold text-foreground">Adjustment Delta (BHD) <span class="text-red-500">*</span></label> <div class="flex items-center rounded-xl border border-border bg-background focus-within:ring-2 focus-within:ring-primary/20 overflow-hidden h-9"><span class="px-3 bg-muted/50 border-r border-border text-xs font-bold text-muted-foreground font-mono">BHD</span> <input id="adjustAmtInput" type="number" step="0.001" placeholder="+10.000 (increase) or -5.000 (deduct)" class="flex-1 h-full px-3 bg-transparent font-mono text-xs font-bold text-foreground focus:outline-none" required=""/></div></div>`);
var root_30 = from_html(`<div class="p-2 rounded-lg bg-muted/40 border border-border/80 text-[11px] space-y-0.5"><div class="flex items-center justify-between font-mono"><span class="text-muted-foreground"> </span> <span> </span></div> <div class="text-foreground text-[10px] font-medium italic"> </div></div>`);
var root_31 = from_html(`<div class="pt-2 border-t border-border space-y-2"><div class="flex items-center gap-1.5 text-muted-foreground font-bold text-[11px]"><!> <span> </span></div> <div class="space-y-1.5 max-h-32 overflow-y-auto"></div></div>`);
var root_32 = from_html(`<!> <span>Applying...</span>`, 1);
var root_33 = from_html(`<!> <span>Save & Apply Adjustment</span>`, 1);
var root_34 = from_html(`<div class="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto" role="dialog" aria-modal="true" tabindex="-1"><div class="bg-card border border-border rounded-2xl max-w-lg w-full shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 my-8"><div class="px-6 py-4 border-b border-border flex items-center justify-between bg-muted/20"><div class="flex items-center gap-2.5"><div class="h-9 w-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shadow-xs"><!></div> <div><h2 class="text-sm font-bold text-foreground">Edit Salesman Profit</h2> <p class="text-[10px] text-muted-foreground font-mono"> </p></div></div> <button type="button" class="h-8 w-8 rounded-lg bg-muted text-muted-foreground hover:text-foreground flex items-center justify-center cursor-pointer transition-colors"><!></button></div> <form class="p-6 space-y-4 text-xs max-h-[80vh] overflow-y-auto"><div class="p-3.5 bg-muted/30 border border-border rounded-xl grid grid-cols-3 gap-2 text-center"><div><span class="text-[10px] font-semibold text-muted-foreground block">Customer Price</span> <span class="font-bold font-mono text-foreground"> </span></div> <div><span class="text-[10px] font-semibold text-muted-foreground block">Supplier Cost</span> <span class="font-bold font-mono text-muted-foreground"> </span></div> <div><span class="text-[10px] font-semibold text-muted-foreground block">Current Profit</span> <span class="font-bold font-mono text-teal-600 dark:text-teal-400"> </span></div></div> <div class="space-y-1.5"><span class="text-[11px] font-semibold text-muted-foreground block">Adjustment Method</span> <div class="grid grid-cols-2 gap-1.5 bg-muted/40 p-1 rounded-xl border border-border/60"><button type="button"><!> <span>Edit Profit Amount</span></button> <button type="button"><!> <span>Adjustment Delta (+/-)</span></button></div></div> <!> <div class="space-y-1.5"><label for="profitReasonInput" class="font-semibold text-foreground flex items-center justify-between"><span>Reason / Explanation <span class="text-rose-500">*</span></span> <span class="text-[10px] text-muted-foreground font-normal">Audit Logged</span></label> <textarea id="profitReasonInput" rows="2" placeholder="Explain why this profit change or commission override is being recorded..." class="w-full p-2.5 bg-background border border-border rounded-xl text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20" required=""></textarea></div> <div class="p-3 bg-primary/5 border border-primary/20 rounded-xl flex items-center justify-between text-xs"><div><span class="text-[10px] font-bold text-muted-foreground block">Projected New Profit</span> <span class="text-sm font-bold font-mono text-teal-600 dark:text-teal-400"> </span></div> <div class="text-right"><span class="text-[10px] font-bold text-muted-foreground block">Calculated Delta</span> <span> </span></div></div> <!> <div class="flex items-center justify-end gap-2 pt-3 border-t border-border"><!> <!></div></form></div></div>`);
var root_35 = from_html(`<div class="p-8 text-center text-muted-foreground space-y-1.5"><!> <p class="font-medium text-xs">No manual modifications recorded for this application.</p></div>`);
var root_36 = from_html(`<div class="p-3 bg-background border border-border rounded-xl space-y-2 relative"><div class="flex items-center justify-between text-[11px]"><div class="flex items-center gap-1.5 text-muted-foreground font-mono"><!> <span> </span></div> <span> </span></div> <div class="flex items-center justify-between text-xs font-mono bg-muted/30 p-2 rounded-lg"><span class="text-muted-foreground">Before: <strong class="text-foreground"> </strong></span> <!> <span class="text-teal-600 dark:text-teal-400 font-bold"> </span></div> <div class="space-y-0.5"><span class="text-[10px] font-bold text-muted-foreground uppercase">Reason / Explanation:</span> <p class="text-xs text-foreground bg-muted/20 p-2 rounded-md font-medium"> </p></div></div>`);
var root_37 = from_html(`<div class="space-y-2.5"></div>`);
var root_38 = from_html(`<div class="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto" role="dialog" aria-modal="true" tabindex="-1"><div class="bg-card border border-border rounded-2xl max-w-lg w-full shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"><div class="px-6 py-4 border-b border-border flex items-center justify-between bg-muted/20"><div class="flex items-center gap-2.5"><div class="h-9 w-9 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center shadow-xs"><!></div> <div><h2 class="text-sm font-bold text-foreground">Profit Modification History</h2> <p class="text-[10px] text-muted-foreground font-mono"> </p></div></div> <button type="button" class="h-8 w-8 rounded-lg bg-muted text-muted-foreground hover:text-foreground flex items-center justify-center cursor-pointer transition-colors"><!></button></div> <div class="p-6 space-y-4 text-xs max-h-[70vh] overflow-y-auto"><div class="p-3.5 bg-muted/30 border border-border rounded-xl flex items-center justify-between text-xs"><div><span class="text-[10px] font-semibold text-muted-foreground block">Current Net Profit</span> <span class="font-bold font-mono text-base text-teal-600 dark:text-teal-400"> </span></div> <div class="text-right"><span class="text-[10px] font-semibold text-muted-foreground block">Modifications</span> <span class="font-bold font-mono text-purple-600"> </span></div></div> <!></div> <div class="px-6 py-3.5 border-t border-border bg-muted/20 flex items-center justify-between"><a class="text-xs font-semibold text-primary hover:underline flex items-center gap-1"><span>Open Full Booking Details</span> <!></a> <!></div></div></div>`);
var root_39 = from_html(`<div class="space-y-6"><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"><div class="flex flex-col gap-1"><h1 class="text-xl font-bold text-foreground flex items-center gap-2"><!> Salesman Profit Management</h1> <p class="text-xs text-muted-foreground">Review recognized profits, modify commissions/profits with audit trail, and track modification history.</p></div> <div class="flex items-center gap-2"><!> <!></div></div> <div class="bg-card border border-border rounded-2xl p-4 shadow-xs space-y-3"><div class="flex flex-col md:flex-row md:items-center justify-between gap-3"><div class="flex items-center gap-2"><!> <span class="text-xs font-bold text-foreground">Date Range Filter</span> <!></div> <div class="flex items-center gap-1.5 text-xs overflow-x-auto flex-nowrap pb-1 scrollbar-thin"><button type="button">All Time</button> <button type="button">Today</button> <button type="button">This Week</button> <button type="button">This Month</button> <button type="button">Last 30 Days</button> <button type="button">This Year</button></div></div> <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 border-t border-border/40 text-xs"><div class="flex items-center gap-2"><label for="startDate" class="text-muted-foreground font-medium text-[11px]">From:</label> <input id="startDate" type="date" class="px-2.5 py-1 rounded-xl border border-border bg-background text-foreground text-xs focus:outline-none focus:ring-2 focus:ring-primary/20"/></div> <div class="flex items-center gap-2"><label for="endDate" class="text-muted-foreground font-medium text-[11px]">To:</label> <input id="endDate" type="date" class="px-2.5 py-1 rounded-xl border border-border bg-background text-foreground text-xs focus:outline-none focus:ring-2 focus:ring-primary/20"/></div> <!></div></div> <!></div> <!> <!>`, 1);
function _page($$anchor, $$props) {
	push($$props, true);
	let loading = state(true);
	let activeViewTab = state("records");
	let salesmen = state(proxy([]));
	let selectedSalesmanId = state("all");
	let selectedServiceType = state("all");
	let selectedStatus = state("all");
	let searchQuery = state("");
	let startDate = state("");
	let endDate = state("");
	let activePreset = state("all");
	let sortField = state("date");
	let sortDirection = state("desc");
	let currentPage = state(1);
	let pageSize = state(20);
	let historyPage = state(1);
	let historyPageSize = state(20);
	let allProfitRecords = state(proxy([]));
	let modificationHistory = state(proxy([]));
	let showAdjustModal = state(false);
	let adjustingRecord = state(null);
	let adjustMode = state("direct");
	let targetProfitAmount = state("");
	let adjustDeltaAmount = state("");
	let adjustReason = state("");
	let isSubmittingAdjustment = state(false);
	let showHistoryModal = state(false);
	let historyModalRecord = state(null);
	const salesmanOptions = user_derived(() => [{
		id: "all",
		name: "All Salesmen"
	}, ...get(salesmen).map((s) => ({
		id: String(s.id),
		name: s.name
	}))]);
	function formatDateForInput(date) {
		return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
	}
	function calculatePresetRange(preset) {
		const now = /* @__PURE__ */ new Date();
		const todayStr = formatDateForInput(now);
		if (preset === "today") return {
			start: todayStr,
			end: todayStr
		};
		else if (preset === "this_week") {
			const startOfWeek = new Date(now);
			const dayOfWeek = (now.getDay() + 6) % 7;
			startOfWeek.setDate(now.getDate() - dayOfWeek);
			startOfWeek.setHours(0, 0, 0, 0);
			return {
				start: formatDateForInput(startOfWeek),
				end: todayStr
			};
		} else if (preset === "this_month") return {
			start: formatDateForInput(new Date(now.getFullYear(), now.getMonth(), 1)),
			end: todayStr
		};
		else if (preset === "last_30") {
			const past30 = /* @__PURE__ */ new Date();
			past30.setDate(now.getDate() - 30);
			return {
				start: formatDateForInput(past30),
				end: todayStr
			};
		} else if (preset === "this_year") return {
			start: formatDateForInput(new Date(now.getFullYear(), 0, 1)),
			end: todayStr
		};
		else return {
			start: "",
			end: ""
		};
	}
	function setPreset(preset) {
		set(activePreset, preset, true);
		const { start, end } = calculatePresetRange(preset);
		set(startDate, start, true);
		set(endDate, end, true);
		set(currentPage, 1);
		set(historyPage, 1);
	}
	function handleCustomDateChange() {
		set(activePreset, "all");
		set(currentPage, 1);
		set(historyPage, 1);
	}
	function getRecordModificationsCount(r) {
		const doc = (r.documentNumber || "").trim().toLowerCase();
		const bId = r.bookingId;
		const bType = (r.bookingType || "").trim().toLowerCase();
		return get(modificationHistory).filter((h) => {
			const hType = (h.bookingType || "").trim().toLowerCase();
			const hDoc = (h.documentNumber || "").trim().toLowerCase();
			return hType === bType && h.bookingId === bId || Boolean(doc) && Boolean(hDoc) && hDoc === doc;
		}).length;
	}
	function getRecordModifications(r) {
		const doc = (r.documentNumber || "").trim().toLowerCase();
		const bId = r.bookingId;
		const bType = (r.bookingType || "").trim().toLowerCase();
		return get(modificationHistory).filter((h) => {
			const hType = (h.bookingType || "").trim().toLowerCase();
			const hDoc = (h.documentNumber || "").trim().toLowerCase();
			return hType === bType && h.bookingId === bId || Boolean(doc) && Boolean(hDoc) && hDoc === doc;
		});
	}
	function handleSort(field) {
		if (get(sortField) === field) set(sortDirection, get(sortDirection) === "asc" ? "desc" : "asc", true);
		else {
			set(sortField, field, true);
			set(sortDirection, "desc");
		}
	}
	const filteredRecords = user_derived(() => {
		let list = get(allProfitRecords).filter((r) => {
			if (get(selectedSalesmanId) !== "all" && String(r.salesmanId) !== get(selectedSalesmanId)) return false;
			if (get(selectedServiceType) !== "all") {
				if (!r.bookingType.toLowerCase().includes(get(selectedServiceType).toLowerCase())) return false;
			}
			if (get(selectedStatus) === "finalized" && !r.isFinal) return false;
			if (get(selectedStatus) === "estimated" && r.isFinal) return false;
			if (get(startDate) && new Date(r.bookingCreatedAt) < new Date(get(startDate))) return false;
			if (get(endDate)) {
				const end = new Date(get(endDate));
				end.setHours(23, 59, 59, 999);
				if (new Date(r.bookingCreatedAt) > end) return false;
			}
			if (get(searchQuery).trim()) {
				const q = get(searchQuery).toLowerCase().trim();
				const doc = (r.documentNumber || "").toLowerCase();
				const client = (r.clientName || "").toLowerCase();
				const sName = (r.salesmanName || "").toLowerCase();
				const bId = String(r.bookingId);
				if (!doc.includes(q) && !client.includes(q) && !sName.includes(q) && !bId.includes(q)) return false;
			}
			return true;
		});
		list = [...list].sort((a, b) => {
			let valA;
			let valB;
			switch (get(sortField)) {
				case "doc":
					valA = a.documentNumber || `#${a.bookingId}`;
					valB = b.documentNumber || `#${b.bookingId}`;
					break;
				case "salesman":
					valA = a.salesmanName || "";
					valB = b.salesmanName || "";
					break;
				case "sale":
					valA = a.payableAmount || 0;
					valB = b.payableAmount || 0;
					break;
				case "cost":
					valA = a.finalSupplierCost || 0;
					valB = b.finalSupplierCost || 0;
					break;
				case "profit":
					valA = a.profitAmount || 0;
					valB = b.profitAmount || 0;
					break;
				default:
					valA = new Date(a.bookingCreatedAt || 0).getTime();
					valB = new Date(b.bookingCreatedAt || 0).getTime();
					break;
			}
			if (typeof valA === "string" && typeof valB === "string") return get(sortDirection) === "asc" ? valA.localeCompare(valB) : valB.localeCompare(valA);
			else return get(sortDirection) === "asc" ? valA - valB : valB - valA;
		});
		return list;
	});
	const filteredHistory = user_derived(() => {
		return get(modificationHistory).filter((h) => {
			if (get(selectedSalesmanId) !== "all" && String(h.salesmanId) !== get(selectedSalesmanId)) return false;
			if (get(selectedServiceType) !== "all") {
				if (!h.bookingType.toLowerCase().includes(get(selectedServiceType).toLowerCase())) return false;
			}
			if (get(startDate) && new Date(h.timestamp) < new Date(get(startDate))) return false;
			if (get(endDate)) {
				const end = new Date(get(endDate));
				end.setHours(23, 59, 59, 999);
				if (new Date(h.timestamp) > end) return false;
			}
			if (get(searchQuery).trim()) {
				const q = get(searchQuery).toLowerCase().trim();
				const doc = (h.documentNumber || "").toLowerCase();
				const client = (h.clientName || "").toLowerCase();
				const sName = (h.salesmanName || "").toLowerCase();
				const bId = String(h.bookingId);
				const reason = (h.reason || "").toLowerCase();
				if (!doc.includes(q) && !client.includes(q) && !sName.includes(q) && !bId.includes(q) && !reason.includes(q)) return false;
			}
			return true;
		});
	});
	const totalPages = user_derived(() => Math.max(1, Math.ceil(get(filteredRecords).length / get(pageSize))));
	const paginatedRecords = user_derived(() => {
		const start = (get(currentPage) - 1) * get(pageSize);
		return get(filteredRecords).slice(start, start + get(pageSize));
	});
	const totalHistoryPages = user_derived(() => Math.max(1, Math.ceil(get(filteredHistory).length / get(historyPageSize))));
	const paginatedHistory = user_derived(() => {
		const start = (get(historyPage) - 1) * get(historyPageSize);
		return get(filteredHistory).slice(start, start + get(historyPageSize));
	});
	const hasActiveFilters = user_derived(() => get(selectedSalesmanId) !== "all" || get(selectedServiceType) !== "all" || get(selectedStatus) !== "all" || Boolean(get(searchQuery).trim()) || Boolean(get(startDate)) || Boolean(get(endDate)));
	const totalProfitAmount = user_derived(() => {
		return get(filteredRecords).reduce((acc, r) => acc + (r.profitAmount || 0), 0);
	});
	const finalizedProfitAmount = user_derived(() => {
		return get(filteredRecords).filter((r) => r.isFinal).reduce((acc, r) => acc + (r.profitAmount || 0), 0);
	});
	const estimatedProfitAmount = user_derived(() => {
		return get(filteredRecords).filter((r) => !r.isFinal).reduce((acc, r) => acc + (r.profitAmount || 0), 0);
	});
	const totalSalesVolume = user_derived(() => {
		return get(filteredRecords).reduce((acc, r) => acc + (r.payableAmount || 0), 0);
	});
	const overallMargin = user_derived(() => {
		if (get(totalSalesVolume) <= 0) return 0;
		return get(totalProfitAmount) / get(totalSalesVolume) * 100;
	});
	const calculatedDelta = user_derived(() => {
		if (!get(adjustingRecord)) return 0;
		if (get(adjustMode) === "direct") {
			const target = parseFloat(get(targetProfitAmount));
			if (isNaN(target)) return 0;
			return target - get(adjustingRecord).profitAmount;
		} else return parseFloat(get(adjustDeltaAmount)) || 0;
	});
	const projectedNewProfit = user_derived(() => {
		if (!get(adjustingRecord)) return 0;
		if (get(adjustMode) === "direct") {
			const target = parseFloat(get(targetProfitAmount));
			return isNaN(target) ? get(adjustingRecord).profitAmount : target;
		} else {
			const delta = parseFloat(get(adjustDeltaAmount)) || 0;
			return get(adjustingRecord).profitAmount + delta;
		}
	});
	function getServiceIcon(type) {
		const norm = (type || "").toLowerCase();
		if (norm.includes("flight")) return Plane;
		if (norm.includes("hotel")) return Building_2;
		if (norm.includes("visa")) return File_text;
		if (norm.includes("vfs")) return Calendar;
		if (norm.includes("holiday")) return Compass;
		if (norm.includes("transport")) return Car;
		return Layers;
	}
	function getServiceBadgeColor(type) {
		const norm = (type || "").toLowerCase();
		if (norm.includes("flight")) return "bg-sky-500/10 text-sky-600 border-sky-500/20";
		if (norm.includes("hotel")) return "bg-indigo-500/10 text-indigo-600 border-indigo-500/20";
		if (norm.includes("visa")) return "bg-purple-500/10 text-purple-600 border-purple-500/20";
		if (norm.includes("vfs")) return "bg-amber-500/10 text-amber-600 border-amber-500/20";
		if (norm.includes("holiday")) return "bg-emerald-500/10 text-emerald-600 border-emerald-500/20";
		if (norm.includes("transport")) return "bg-orange-500/10 text-orange-600 border-orange-500/20";
		return "bg-muted text-muted-foreground border-border";
	}
	function getServiceRouteSlug(type) {
		const norm = (type || "").toLowerCase();
		if (norm.includes("flight")) return "flights";
		if (norm.includes("hotel")) return "hotels";
		if (norm.includes("visa")) return "visa";
		if (norm.includes("vfs")) return "vfs";
		if (norm.includes("holiday")) return "holiday-packages";
		if (norm.includes("transport")) return "transportation";
		return "other-services";
	}
	function loadModificationHistory() {
		if (typeof localStorage === "undefined") return;
		try {
			const stored = localStorage.getItem("tx_profit_modification_history");
			if (stored) set(modificationHistory, JSON.parse(stored), true);
		} catch (e) {
			console.error("Error loading profit modification history from storage:", e);
		}
	}
	function saveModificationHistory(item) {
		set(modificationHistory, [item, ...get(modificationHistory)], true);
		if (typeof localStorage !== "undefined") try {
			localStorage.setItem("tx_profit_modification_history", JSON.stringify(get(modificationHistory)));
		} catch (e) {
			console.error("Error saving profit modification history:", e);
		}
	}
	async function loadAllData() {
		if (!hasRole("master_accountant")) {
			set(loading, false);
			return;
		}
		set(loading, true);
		try {
			loadModificationHistory();
			const [salesmenRes, reportRes, historyRes] = await Promise.all([
				apiFetch("api/sales-entries/salesmen").catch(() => []),
				apiFetch("api/sales-entries/salesmen/report").catch(() => []),
				apiFetch("api/sales-entries/profit-adjustments").catch(() => [])
			]);
			if (Array.isArray(historyRes) && historyRes.length > 0) {
				set(modificationHistory, historyRes.map((h) => ({
					...h,
					id: String(h.id),
					payableAmount: Number(h.payableAmount || 0),
					previousProfit: Number(h.previousProfit || 0),
					newProfit: Number(h.newProfit || 0),
					deltaAmount: Number(h.deltaAmount || 0)
				})), true);
				if (typeof localStorage !== "undefined") try {
					localStorage.setItem("tx_profit_modification_history", JSON.stringify(get(modificationHistory)));
				} catch (e) {}
			}
			const reportMap = /* @__PURE__ */ new Map();
			(Array.isArray(reportRes) ? reportRes : []).forEach((r) => {
				reportMap.set(r.id || r.salesmanId, r);
			});
			set(salesmen, (Array.isArray(salesmenRes) ? salesmenRes : []).map((s) => {
				const rep = reportMap.get(s.id);
				return {
					id: s.id,
					name: s.name || `Salesman #${s.id}`,
					email: s.email,
					totalSales: rep?.totalSalesVolume ?? rep?.totalSales ?? 0,
					totalProfit: rep?.totalProfit ?? s.profitGenerated ?? 0,
					bookingCount: rep?.totalBookingsCount ?? rep?.bookingCount ?? 0,
					monthlyTarget: s.monthlyTarget ?? 0,
					profitTarget: s.profitTarget ?? 0
				};
			}), true);
			const [flightRes, hotelRes, visaRes, vfsRes, holidayRes, transportRes, otherRes] = await Promise.all([
				apiFetch("api/sales-entries/flights", { params: { pageSize: 1e3 } }).catch(() => null),
				apiFetch("api/sales-entries/hotels", { params: { pageSize: 1e3 } }).catch(() => null),
				apiFetch("api/sales-entries/visa", { params: { pageSize: 1e3 } }).catch(() => null),
				apiFetch("api/sales-entries/vfs", { params: { pageSize: 1e3 } }).catch(() => null),
				apiFetch("api/sales-entries/holiday-packages", { params: { pageSize: 1e3 } }).catch(() => null),
				apiFetch("api/sales-entries/transportations", { params: { pageSize: 1e3 } }).catch(() => null),
				apiFetch("api/sales-entries/other-services", { params: { pageSize: 1e3 } }).catch(() => null)
			]);
			const clientMap = /* @__PURE__ */ new Map();
			const registerClient = (type, id, doc, name) => {
				const cleanName = (name || "").trim();
				if (!cleanName) return;
				if (doc) clientMap.set(doc.trim().toLowerCase(), cleanName);
				if (id) clientMap.set(`${type.toLowerCase()}:${id}`, cleanName);
			};
			(flightRes?.items || []).forEach((b) => registerClient("flight", b.id, b.documentNumber, b.headName || b.passengerNames || b.careOf || b.agent));
			(hotelRes?.items || []).forEach((b) => registerClient("hotel", b.id, b.documentNumber, b.headName || b.guestName || b.careOf || b.agent));
			(visaRes?.items || []).forEach((b) => registerClient("visa", b.id, b.documentNumber, b.headName || b.applicantNames || b.agent));
			(vfsRes?.items || []).forEach((b) => registerClient("vfs", b.id, b.documentNumber, b.headName || b.name || b.agent));
			(holidayRes?.items || []).forEach((b) => registerClient("holiday", b.id, b.documentNumber, b.headName || b.passengerName || b.agent));
			(transportRes?.items || []).forEach((b) => registerClient("transport", b.id, b.documentNumber, b.headName || b.name || b.careOf || b.agent));
			(otherRes?.items || []).forEach((b) => registerClient("other", b.id, b.documentNumber, b.headName || b.name || b.serviceName || b.agent));
			const recordPromises = get(salesmen).map((s) => apiFetch(`api/sales-entries/salesmen/${s.id}/profit-records`).then((records) => {
				return (Array.isArray(records) ? records : []).map((r) => {
					const doc = (r.documentNumber || "").trim().toLowerCase();
					const typeKey = `${(r.bookingType || "").trim().toLowerCase()}:${r.bookingId}`;
					const resolvedClient = r.clientName || clientMap.get(doc) || clientMap.get(typeKey) || "";
					return {
						...r,
						salesmanId: s.id,
						salesmanName: s.name,
						clientName: resolvedClient
					};
				});
			}).catch(() => []));
			const rawRecords = (await Promise.all(recordPromises)).flat();
			set(modificationHistory, get(modificationHistory).map((h) => {
				if (h.clientName) return h;
				const doc = (h.documentNumber || "").trim().toLowerCase();
				const typeKey = `${(h.bookingType || "").trim().toLowerCase()}:${h.bookingId}`;
				const resolved = clientMap.get(doc) || clientMap.get(typeKey);
				return resolved ? {
					...h,
					clientName: resolved
				} : h;
			}), true);
			set(allProfitRecords, rawRecords.map((r) => {
				const doc = (r.documentNumber || "").trim().toLowerCase();
				const bId = r.bookingId;
				const bType = (r.bookingType || "").trim().toLowerCase();
				const latestMod = get(modificationHistory).find((h) => {
					const hType = (h.bookingType || "").trim().toLowerCase();
					const hDoc = (h.documentNumber || "").trim().toLowerCase();
					return hType === bType && h.bookingId === bId || Boolean(doc) && Boolean(hDoc) && hDoc === doc;
				});
				if (latestMod && latestMod.newProfit !== void 0) return {
					...r,
					profitAmount: latestMod.newProfit
				};
				return r;
			}), true);
		} catch (err) {
			console.error("Failed to load salesman profit data:", err);
			toast.error("Failed to load salesman profit records.");
		} finally {
			set(loading, false);
		}
	}
	function resetFilters() {
		set(selectedSalesmanId, "all");
		set(selectedServiceType, "all");
		set(selectedStatus, "all");
		set(searchQuery, "");
		set(startDate, "");
		set(endDate, "");
		set(activePreset, "all");
		set(currentPage, 1);
		set(historyPage, 1);
	}
	function openAdjustModal(r) {
		set(adjustingRecord, r, true);
		set(adjustMode, "direct");
		set(targetProfitAmount, r.profitAmount.toFixed(3), true);
		set(adjustDeltaAmount, "");
		set(adjustReason, "");
		set(showAdjustModal, true);
	}
	function openHistoryModal(r) {
		set(historyModalRecord, r, true);
		set(showHistoryModal, true);
	}
	function switchAdjustMode(mode) {
		set(adjustMode, mode, true);
		if (mode === "direct") set(targetProfitAmount, get(projectedNewProfit).toFixed(3), true);
		else set(adjustDeltaAmount, get(calculatedDelta) !== 0 ? get(calculatedDelta).toFixed(3) : "", true);
	}
	async function submitProfitAdjustment(e) {
		e.preventDefault();
		if (!get(adjustingRecord)) return;
		if (!get(adjustReason).trim()) {
			toast.error("A mandatory explanation/reason is required for modifying profit.");
			return;
		}
		const delta = get(calculatedDelta);
		if (Math.abs(delta) < 1e-4) {
			toast.error("Profit has not been changed. Please enter a new profit amount or delta.");
			return;
		}
		set(isSubmittingAdjustment, true);
		const previousProfit = get(adjustingRecord).profitAmount;
		const finalProfit = get(projectedNewProfit);
		const recordDoc = get(adjustingRecord).documentNumber || `#${get(adjustingRecord).bookingId}`;
		try {
			get(adjustingRecord).profitAmount = finalProfit;
			const matchIndex = get(allProfitRecords).findIndex((item) => item.bookingType === get(adjustingRecord).bookingType && item.bookingId === get(adjustingRecord).bookingId);
			if (matchIndex >= 0 && get(allProfitRecords)[matchIndex]) {
				const existing = get(allProfitRecords)[matchIndex];
				get(allProfitRecords)[matchIndex] = {
					...existing,
					profitAmount: finalProfit
				};
			}
			saveModificationHistory({
				id: `mod_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`,
				recordId: get(adjustingRecord).id,
				bookingType: get(adjustingRecord).bookingType,
				bookingId: get(adjustingRecord).bookingId,
				documentNumber: get(adjustingRecord).documentNumber,
				salesmanId: get(adjustingRecord).salesmanId,
				salesmanName: get(adjustingRecord).salesmanName,
				clientName: get(adjustingRecord).clientName,
				payableAmount: get(adjustingRecord).payableAmount,
				previousProfit,
				newProfit: finalProfit,
				deltaAmount: delta,
				reason: get(adjustReason).trim(),
				timestamp: (/* @__PURE__ */ new Date()).toISOString(),
				modifiedBy: "Accountant"
			});
			await apiFetch("api/sales-entries/profit-adjustments", {
				method: "POST",
				body: JSON.stringify({
					bookingType: get(adjustingRecord).bookingType,
					bookingIdOrRef: String(get(adjustingRecord).bookingId),
					adjustmentType: 2,
					amount: delta,
					referenceType: "manual_adjustment",
					referenceId: get(adjustingRecord).documentNumber || String(get(adjustingRecord).bookingId),
					idempotencyKey: `adj_${get(adjustingRecord).bookingType}_${get(adjustingRecord).bookingId}_${Date.now()}`,
					description: get(adjustReason).trim()
				})
			});
			toast.success(`Profit updated to ${finalProfit.toFixed(3)} BHD (${delta >= 0 ? "+" : ""}${delta.toFixed(3)} BHD) for ${recordDoc}`);
			set(showAdjustModal, false);
			await loadAllData();
		} catch (err) {
			console.error("Failed to apply profit adjustment:", err);
			toast.error(err?.message || "Failed to apply profit adjustment.");
		} finally {
			set(isSubmittingAdjustment, false);
		}
	}
	function exportToCSV$1() {
		if (get(filteredRecords).length === 0) {
			toast.error("No profit records to export.");
			return;
		}
		const headers = [
			"Booking Ref",
			"Service Type",
			"Salesman Name",
			"Client Name",
			"Selling Price (BHD)",
			"Supplier Cost (BHD)",
			"Net Profit (BHD)",
			"Cost Source",
			"Modifications",
			"Status",
			"Created Date"
		];
		const rows = get(filteredRecords).map((r) => [
			r.documentNumber || r.bookingId,
			r.bookingType,
			r.salesmanName || "",
			r.clientName || "N/A",
			r.payableAmount.toFixed(3),
			r.finalSupplierCost.toFixed(3),
			r.profitAmount.toFixed(3),
			r.supplierCostSource,
			getRecordModificationsCount(r),
			r.isFinal ? "Finalized / Deal Closed" : "Estimated",
			formatDate(r.bookingCreatedAt)
		]);
		exportToCSV(`Salesman_Profit_Report_${getBahrainDateString()}.csv`, headers, rows);
		toast.success("Profit records exported to CSV.");
	}
	function exportHistoryToCSV() {
		if (get(filteredHistory).length === 0) {
			toast.error("No modification history records to export.");
			return;
		}
		const headers = [
			"Timestamp",
			"Booking Ref",
			"Service Type",
			"Salesman Name",
			"Client Name",
			"Previous Profit (BHD)",
			"New Net Profit (BHD)",
			"Delta Amount (BHD)",
			"Reason / Explanation",
			"Modified By"
		];
		const rows = get(filteredHistory).map((h) => [
			formatDateTime(h.timestamp),
			h.documentNumber || `#${h.bookingId}`,
			h.bookingType,
			h.salesmanName || "",
			h.clientName || "N/A",
			h.previousProfit.toFixed(3),
			h.newProfit.toFixed(3),
			h.deltaAmount >= 0 ? `+${h.deltaAmount.toFixed(3)}` : h.deltaAmount.toFixed(3),
			h.reason || "",
			h.modifiedBy || "Accountant"
		]);
		exportToCSV(`Profit_Modification_History_${getBahrainDateString()}.csv`, headers, rows);
		toast.success("Modification history exported to CSV.");
	}
	onMount(() => {
		loadAllData();
	});
	var fragment = comment();
	head("ja0847", ($$anchor) => {
		effect(() => {
			$document.title = "Salesman Profit Management — Accounts Portal";
		});
	});
	var node = first_child(fragment);
	var consequent = ($$anchor) => {
		var div = root();
		Shield_alert(child(div), { class: "h-12 w-12 text-amber-500 mx-auto" });
		next(2);
		reset(div);
		append($$anchor, div);
	};
	var d = user_derived(() => !hasRole("master_accountant"));
	var alternate_10 = ($$anchor) => {
		var fragment_1 = root_39();
		var div_1 = first_child(fragment_1);
		var div_2 = child(div_1);
		var div_3 = child(div_2);
		var h1 = child(div_3);
		Trending_up(child(h1), { class: "h-5 w-5 text-primary" });
		next();
		reset(h1);
		next(2);
		reset(div_3);
		var div_4 = sibling(div_3, 2);
		var node_3 = child(div_4);
		var consequent_1 = ($$anchor) => {
			{
				let $0 = user_derived(() => get(loading) || get(filteredRecords).length === 0);
				Button($$anchor, {
					variant: "outline",
					class: "h-8.5 rounded-xl cursor-pointer flex items-center gap-1.5",
					onclick: exportToCSV$1,
					get disabled() {
						return get($0);
					},
					children: ($$anchor, $$slotProps) => {
						var fragment_3 = root_1();
						File_spreadsheet(first_child(fragment_3), { class: "h-3.5 w-3.5" });
						next(2);
						append($$anchor, fragment_3);
					},
					$$slots: { default: true }
				});
			}
		};
		var alternate = ($$anchor) => {
			{
				let $0 = user_derived(() => get(loading) || get(filteredHistory).length === 0);
				Button($$anchor, {
					variant: "outline",
					class: "h-8.5 rounded-xl cursor-pointer flex items-center gap-1.5",
					onclick: exportHistoryToCSV,
					get disabled() {
						return get($0);
					},
					children: ($$anchor, $$slotProps) => {
						var fragment_5 = root_2();
						File_spreadsheet(first_child(fragment_5), { class: "h-3.5 w-3.5" });
						next(2);
						append($$anchor, fragment_5);
					},
					$$slots: { default: true }
				});
			}
		};
		if_block(node_3, ($$render) => {
			if (get(activeViewTab) === "records") $$render(consequent_1);
			else $$render(alternate, -1);
		});
		Button(sibling(node_3, 2), {
			variant: "outline",
			class: "h-8.5 rounded-xl cursor-pointer",
			onclick: loadAllData,
			get disabled() {
				return get(loading);
			},
			children: ($$anchor, $$slotProps) => {
				var fragment_6 = root_3();
				var node_7 = first_child(fragment_6);
				{
					let $0 = user_derived(() => ["h-3.5 w-3.5 mr-1.5", get(loading) ? "animate-spin" : ""].join(" "));
					Refresh_cw(node_7, { get class() {
						return get($0);
					} });
				}
				next(2);
				append($$anchor, fragment_6);
			},
			$$slots: { default: true }
		});
		reset(div_4);
		reset(div_2);
		var div_5 = sibling(div_2, 2);
		var div_6 = child(div_5);
		var div_7 = child(div_6);
		var node_8 = child(div_7);
		Calendar(node_8, { class: "h-4 w-4 text-primary" });
		var node_9 = sibling(node_8, 4);
		var consequent_2 = ($$anchor) => {
			var span = root_4();
			var text = child(span);
			reset(span);
			template_effect(() => set_text(text, `${(get(startDate) || "Start") ?? ""} → ${(get(endDate) || "End") ?? ""}`));
			append($$anchor, span);
		};
		var alternate_1 = ($$anchor) => {
			append($$anchor, root_5());
		};
		if_block(node_9, ($$render) => {
			if (get(startDate) || get(endDate)) $$render(consequent_2);
			else $$render(alternate_1, -1);
		});
		reset(div_7);
		var div_8 = sibling(div_7, 2);
		var button = child(div_8);
		var button_1 = sibling(button, 2);
		var button_2 = sibling(button_1, 2);
		var button_3 = sibling(button_2, 2);
		var button_4 = sibling(button_3, 2);
		var button_5 = sibling(button_4, 2);
		reset(div_8);
		reset(div_6);
		var div_9 = sibling(div_6, 2);
		var div_10 = child(div_9);
		var input = sibling(child(div_10), 2);
		remove_input_defaults(input);
		reset(div_10);
		var div_11 = sibling(div_10, 2);
		var input_1 = sibling(child(div_11), 2);
		remove_input_defaults(input_1);
		reset(div_11);
		var node_10 = sibling(div_11, 2);
		var consequent_3 = ($$anchor) => {
			Button($$anchor, {
				variant: "ghost",
				class: "h-7 px-2 text-[11px] text-muted-foreground hover:text-foreground cursor-pointer flex items-center gap-1 sm:ml-auto",
				onclick: () => setPreset("all"),
				children: ($$anchor, $$slotProps) => {
					var fragment_8 = root_6();
					X(first_child(fragment_8), { class: "h-3 w-3" });
					next(2);
					append($$anchor, fragment_8);
				},
				$$slots: { default: true }
			});
		};
		if_block(node_10, ($$render) => {
			if (get(startDate) || get(endDate)) $$render(consequent_3);
		});
		reset(div_9);
		reset(div_5);
		var node_12 = sibling(div_5, 2);
		var consequent_4 = ($$anchor) => {
			var div_12 = root_8();
			var div_13 = child(div_12);
			each(div_13, 20, () => Array(5), index, ($$anchor, _) => {
				append($$anchor, root_7());
			});
			reset(div_13);
			next(2);
			reset(div_12);
			append($$anchor, div_12);
		};
		var alternate_6 = ($$anchor) => {
			var fragment_9 = root_27();
			var div_15 = first_child(fragment_9);
			var div_16 = child(div_15);
			var span_2 = sibling(child(div_16), 2);
			MoneyDisplay(child(span_2), { get amount() {
				return get(totalSalesVolume);
			} });
			reset(span_2);
			reset(div_16);
			var div_17 = sibling(div_16, 2);
			var span_3 = sibling(child(div_17), 2);
			MoneyDisplay(child(span_3), { get amount() {
				return get(finalizedProfitAmount);
			} });
			reset(span_3);
			reset(div_17);
			var div_18 = sibling(div_17, 2);
			var span_4 = sibling(child(div_18), 2);
			MoneyDisplay(child(span_4), { get amount() {
				return get(estimatedProfitAmount);
			} });
			reset(span_4);
			reset(div_18);
			var div_19 = sibling(div_18, 2);
			var span_5 = sibling(child(div_19), 2);
			MoneyDisplay(child(span_5), { get amount() {
				return get(totalProfitAmount);
			} });
			reset(span_5);
			reset(div_19);
			var div_20 = sibling(div_19, 2);
			var span_6 = sibling(child(div_20), 2);
			var text_1 = child(span_6);
			reset(span_6);
			reset(div_20);
			reset(div_15);
			var div_21 = sibling(div_15, 2);
			var div_22 = child(div_21);
			var div_23 = child(div_22);
			var button_6 = child(div_23);
			var node_17 = child(button_6);
			Layers(node_17, { class: "h-3.5 w-3.5" });
			var span_7 = sibling(node_17, 4);
			var text_2 = child(span_7, true);
			reset(span_7);
			reset(button_6);
			var button_7 = sibling(button_6, 2);
			var node_18 = child(button_7);
			History(node_18, { class: "h-3.5 w-3.5" });
			var node_19 = sibling(node_18, 4);
			var consequent_5 = ($$anchor) => {
				var span_8 = root_9();
				var text_3 = child(span_8, true);
				reset(span_8);
				template_effect(() => {
					set_class(span_8, 1, `px-1.5 py-0.2 rounded-md text-[10px] font-mono ${get(activeViewTab) === "history" ? "bg-purple-500/10 text-purple-600 font-bold" : "bg-muted text-muted-foreground"}`);
					set_text(text_3, get(filteredHistory).length);
				});
				append($$anchor, span_8);
			};
			if_block(node_19, ($$render) => {
				if (get(modificationHistory).length > 0) $$render(consequent_5);
			});
			reset(button_7);
			reset(div_23);
			var node_20 = sibling(div_23, 2);
			var consequent_6 = ($$anchor) => {
				append($$anchor, root_10());
			};
			if_block(node_20, ($$render) => {
				if (get(activeViewTab) === "history" && get(modificationHistory).length > 0) $$render(consequent_6);
			});
			reset(div_22);
			var div_24 = sibling(div_22, 2);
			var div_25 = child(div_24);
			var div_26 = child(div_25);
			var div_27 = child(div_26);
			var span_10 = child(div_27);
			Search(child(span_10), { class: "h-4 w-4" });
			reset(span_10);
			var input_2 = sibling(span_10, 2);
			remove_input_defaults(input_2);
			var node_22 = sibling(input_2, 2);
			var consequent_7 = ($$anchor) => {
				var button_8 = root_11();
				X(child(button_8), { class: "h-3.5 w-3.5" });
				reset(button_8);
				delegated("click", button_8, () => set(searchQuery, ""));
				append($$anchor, button_8);
			};
			if_block(node_22, ($$render) => {
				if (get(searchQuery)) $$render(consequent_7);
			});
			reset(div_27);
			var div_28 = sibling(div_27, 2);
			SearchableSelect(child(div_28), {
				get options() {
					return get(salesmanOptions);
				},
				get value() {
					return get(selectedSalesmanId);
				},
				onchange: (val) => {
					set(selectedSalesmanId, val, true);
					set(currentPage, 1);
					set(historyPage, 1);
				},
				placeholder: "Select Salesman",
				searchPlaceholder: "Search salesmen..."
			});
			reset(div_28);
			var node_25 = sibling(div_28, 2);
			var consequent_8 = ($$anchor) => {
				var select = root_12();
				var option = child(select);
				option.value = option.__value = "all";
				var option_1 = sibling(option);
				option_1.value = option_1.__value = "finalized";
				var option_2 = sibling(option_1);
				option_2.value = option_2.__value = "estimated";
				reset(select);
				delegated("change", select, () => set(currentPage, 1));
				bind_select_value(select, () => get(selectedStatus), ($$value) => set(selectedStatus, $$value));
				append($$anchor, select);
			};
			if_block(node_25, ($$render) => {
				if (get(activeViewTab) === "records") $$render(consequent_8);
			});
			var node_26 = sibling(node_25, 2);
			var consequent_9 = ($$anchor) => {
				Button($$anchor, {
					variant: "ghost",
					size: "sm",
					onclick: resetFilters,
					class: "h-8 px-2 text-xs text-rose-600 hover:text-rose-700 hover:bg-rose-500/10 cursor-pointer flex items-center gap-1",
					title: "Reset all filters",
					children: ($$anchor, $$slotProps) => {
						var fragment_11 = root_13();
						Rotate_ccw(first_child(fragment_11), { class: "h-3 w-3" });
						next(2);
						append($$anchor, fragment_11);
					},
					$$slots: { default: true }
				});
			};
			if_block(node_26, ($$render) => {
				if (get(hasActiveFilters)) $$render(consequent_9);
			});
			reset(div_26);
			reset(div_25);
			var div_29 = sibling(div_25, 2);
			each(sibling(child(div_29), 2), 17, () => [
				{
					id: "all",
					label: "All Services",
					icon: Layers
				},
				{
					id: "flight",
					label: "Flights",
					icon: Plane
				},
				{
					id: "hotel",
					label: "Hotels",
					icon: Building_2
				},
				{
					id: "visa",
					label: "Visas",
					icon: File_text
				},
				{
					id: "holiday",
					label: "Holidays",
					icon: Compass
				},
				{
					id: "vfs",
					label: "VFS Appointments",
					icon: Calendar
				},
				{
					id: "transport",
					label: "Transportation",
					icon: Car
				},
				{
					id: "other",
					label: "Other Services",
					icon: Briefcase
				}
			], index, ($$anchor, srv) => {
				const isSrvActive = user_derived(() => get(selectedServiceType) === get(srv).id);
				const SrvIcon = user_derived(() => get(srv).icon);
				var button_9 = root_14();
				var node_29 = child(button_9);
				component(node_29, () => get(SrvIcon), ($$anchor, SrvIcon_1) => {
					SrvIcon_1($$anchor, { class: "h-3 w-3" });
				});
				var span_11 = sibling(node_29, 2);
				var text_4 = child(span_11, true);
				reset(span_11);
				reset(button_9);
				template_effect(() => {
					set_class(button_9, 1, `px-2.5 py-1 rounded-lg border text-[11px] font-medium transition-colors cursor-pointer shrink-0 whitespace-nowrap flex items-center gap-1.5 ${get(isSrvActive) ? "bg-primary text-primary-foreground border-primary font-bold shadow-2xs" : "border-border bg-background hover:bg-muted text-muted-foreground"}`);
					set_text(text_4, get(srv).label);
				});
				delegated("click", button_9, () => {
					set(selectedServiceType, get(srv).id, true);
					set(currentPage, 1);
					set(historyPage, 1);
				});
				append($$anchor, button_9);
			});
			reset(div_29);
			reset(div_24);
			reset(div_21);
			var node_30 = sibling(div_21, 2);
			var consequent_15 = ($$anchor) => {
				var fragment_12 = comment();
				var node_31 = first_child(fragment_12);
				var consequent_11 = ($$anchor) => {
					var div_30 = root_16();
					var div_31 = child(div_30);
					Trending_up(child(div_31), { class: "h-6 w-6" });
					reset(div_31);
					var node_33 = sibling(div_31, 6);
					var consequent_10 = ($$anchor) => {
						Button($$anchor, {
							variant: "outline",
							size: "sm",
							onclick: resetFilters,
							class: "rounded-xl text-xs",
							children: ($$anchor, $$slotProps) => {
								var fragment_14 = root_15();
								Rotate_ccw(first_child(fragment_14), { class: "h-3 w-3 mr-1.5" });
								next(2);
								append($$anchor, fragment_14);
							},
							$$slots: { default: true }
						});
					};
					if_block(node_33, ($$render) => {
						if (get(hasActiveFilters)) $$render(consequent_10);
					});
					reset(div_30);
					append($$anchor, div_30);
				};
				var alternate_3 = ($$anchor) => {
					var div_32 = root_22();
					var div_33 = child(div_32);
					var table = child(div_33);
					var thead = child(table);
					var tr = child(thead);
					var th = child(tr);
					var div_34 = child(th);
					Arrow_up_down(sibling(child(div_34), 2), { class: "h-3 w-3" });
					reset(div_34);
					reset(th);
					var th_1 = sibling(th);
					var div_35 = child(th_1);
					Arrow_up_down(sibling(child(div_35), 2), { class: "h-3 w-3" });
					reset(div_35);
					reset(th_1);
					var th_2 = sibling(th_1);
					var div_36 = child(th_2);
					Arrow_up_down(sibling(child(div_36), 2), { class: "h-3 w-3" });
					reset(div_36);
					reset(th_2);
					var th_3 = sibling(th_2);
					var div_37 = child(th_3);
					Arrow_up_down(sibling(child(div_37), 2), { class: "h-3 w-3" });
					reset(div_37);
					reset(th_3);
					var th_4 = sibling(th_3);
					var div_38 = child(th_4);
					Arrow_up_down(sibling(child(div_38), 2), { class: "h-3 w-3" });
					reset(div_38);
					reset(th_4);
					next(2);
					reset(tr);
					reset(thead);
					var tbody = sibling(thead);
					each(tbody, 21, () => get(paginatedRecords), index, ($$anchor, r) => {
						const ServiceIcon = user_derived(() => getServiceIcon(get(r).bookingType));
						const modCount = user_derived(() => getRecordModificationsCount(get(r)));
						var tr_1 = root_21();
						var td = child(tr_1);
						var div_39 = child(td);
						var div_40 = child(div_39);
						component(child(div_40), () => get(ServiceIcon), ($$anchor, ServiceIcon_1) => {
							ServiceIcon_1($$anchor, { class: "h-3.5 w-3.5" });
						});
						reset(div_40);
						var div_41 = sibling(div_40, 2);
						var a_1 = child(div_41);
						var span_12 = child(a_1);
						var text_5 = child(span_12, true);
						reset(span_12);
						External_link(sibling(span_12, 2), { class: "h-2.5 w-2.5 opacity-60" });
						reset(a_1);
						var node_42 = sibling(a_1, 2);
						var consequent_12 = ($$anchor) => {
							var span_13 = root_17();
							var text_6 = child(span_13, true);
							reset(span_13);
							template_effect(() => {
								set_attribute(span_13, "title", get(r).clientName);
								set_text(text_6, get(r).clientName);
							});
							append($$anchor, span_13);
						};
						if_block(node_42, ($$render) => {
							if (get(r).clientName) $$render(consequent_12);
						});
						var span_14 = sibling(node_42, 2);
						DateDisplay(child(span_14), { get date() {
							return get(r).bookingCreatedAt;
						} });
						reset(span_14);
						reset(div_41);
						reset(div_39);
						reset(td);
						var td_1 = sibling(td);
						var div_42 = child(td_1);
						var div_43 = child(div_42);
						var text_7 = child(div_43, true);
						reset(div_43);
						var span_15 = sibling(div_43, 2);
						var text_8 = child(span_15, true);
						reset(span_15);
						reset(div_42);
						reset(td_1);
						var td_2 = sibling(td_1);
						MoneyDisplay(child(td_2), { get amount() {
							return get(r).payableAmount;
						} });
						reset(td_2);
						var td_3 = sibling(td_2);
						var span_16 = child(td_3);
						MoneyDisplay(child(span_16), { get amount() {
							return get(r).finalSupplierCost;
						} });
						reset(span_16);
						var span_17 = sibling(span_16, 2);
						var text_9 = child(span_17, true);
						reset(span_17);
						reset(td_3);
						var td_4 = sibling(td_3);
						var span_18 = child(td_4);
						MoneyDisplay(child(span_18), { get amount() {
							return get(r).profitAmount;
						} });
						reset(span_18);
						reset(td_4);
						var td_5 = sibling(td_4);
						var node_47 = child(td_5);
						var consequent_13 = ($$anchor) => {
							var button_10 = root_18();
							var node_48 = child(button_10);
							History(node_48, { class: "h-3 w-3" });
							var span_19 = sibling(node_48, 2);
							var text_10 = child(span_19);
							reset(span_19);
							reset(button_10);
							template_effect(() => set_text(text_10, `Modified (${get(modCount) ?? ""})`));
							delegated("click", button_10, () => openHistoryModal(get(r)));
							append($$anchor, button_10);
						};
						var alternate_2 = ($$anchor) => {
							append($$anchor, root_19());
						};
						if_block(node_47, ($$render) => {
							if (get(modCount) > 0) $$render(consequent_13);
							else $$render(alternate_2, -1);
						});
						reset(td_5);
						var td_6 = sibling(td_5);
						var div_44 = child(td_6);
						var node_49 = child(div_44);
						var consequent_14 = ($$anchor) => {
							Button($$anchor, {
								variant: "ghost",
								size: "sm",
								class: "h-7 px-2 rounded-lg text-xs font-semibold cursor-pointer text-purple-600 hover:bg-purple-500/10",
								onclick: () => openHistoryModal(get(r)),
								title: "View modification history",
								children: ($$anchor, $$slotProps) => {
									History($$anchor, { class: "h-3 w-3" });
								},
								$$slots: { default: true }
							});
						};
						if_block(node_49, ($$render) => {
							if (get(modCount) > 0) $$render(consequent_14);
						});
						Button(sibling(node_49, 2), {
							variant: "outline",
							size: "sm",
							class: "h-7 px-2.5 rounded-lg text-xs font-semibold cursor-pointer hover:bg-primary hover:text-primary-foreground transition-all",
							onclick: () => openAdjustModal(get(r)),
							children: ($$anchor, $$slotProps) => {
								var fragment_17 = root_20();
								Pen_line(first_child(fragment_17), { class: "h-3 w-3 mr-1" });
								next(2);
								append($$anchor, fragment_17);
							},
							$$slots: { default: true }
						});
						reset(div_44);
						reset(td_6);
						reset(tr_1);
						template_effect(($0, $1, $2) => {
							set_class(div_40, 1, `p-1.5 rounded-lg border ${$0 ?? ""}`);
							set_attribute(a_1, "href", `/sales/bookings/${$1 ?? ""}/${get(r).bookingId ?? ""}`);
							set_text(text_5, get(r).documentNumber || `#${get(r).bookingId}`);
							set_text(text_7, $2);
							set_text(text_8, get(r).salesmanName || `Salesman #${get(r).salesmanId}`);
							set_text(text_9, get(r).supplierCostSource);
							set_class(span_18, 1, `font-mono font-bold text-sm ${get(r).profitAmount >= 0 ? "text-teal-600 dark:text-teal-400" : "text-rose-600"}`);
						}, [
							() => getServiceBadgeColor(get(r).bookingType),
							() => getServiceRouteSlug(get(r).bookingType),
							() => (get(r).salesmanName || "S").charAt(0).toUpperCase()
						]);
						append($$anchor, tr_1);
					});
					reset(tbody);
					reset(table);
					reset(div_33);
					var div_45 = sibling(div_33, 2);
					var div_46 = child(div_45);
					var span_21 = child(div_46);
					var text_11 = child(span_21);
					reset(span_21);
					var select_1 = sibling(span_21, 2);
					var option_3 = child(select_1);
					option_3.value = option_3.__value = 10;
					var option_4 = sibling(option_3);
					option_4.value = option_4.__value = 20;
					var option_5 = sibling(option_4);
					option_5.value = option_5.__value = 50;
					var option_6 = sibling(option_5);
					option_6.value = option_6.__value = 100;
					var option_7 = sibling(option_6);
					option_7.value = option_7.__value = 200;
					var option_8 = sibling(option_7);
					option_8.value = option_8.__value = 500;
					var option_9 = sibling(option_8);
					option_9.value = option_9.__value = 1e3;
					reset(select_1);
					reset(div_46);
					var div_47 = sibling(div_46, 2);
					var button_11 = child(div_47);
					Chevron_left(child(button_11), { class: "h-3.5 w-3.5" });
					next(2);
					reset(button_11);
					var span_22 = sibling(button_11, 2);
					var text_12 = child(span_22);
					reset(span_22);
					var button_12 = sibling(span_22, 2);
					Chevron_right(sibling(child(button_12), 2), { class: "h-3.5 w-3.5" });
					reset(button_12);
					reset(div_47);
					reset(div_45);
					reset(div_32);
					template_effect(($0) => {
						set_text(text_11, `Showing ${(get(currentPage) - 1) * get(pageSize) + 1} to ${$0 ?? ""} of ${get(filteredRecords).length ?? ""} records`);
						button_11.disabled = get(currentPage) <= 1;
						set_text(text_12, `Page ${get(currentPage) ?? ""} of ${get(totalPages) ?? ""}`);
						button_12.disabled = get(currentPage) >= get(totalPages);
					}, [() => Math.min(get(currentPage) * get(pageSize), get(filteredRecords).length)]);
					delegated("click", th, () => handleSort("doc"));
					delegated("click", th_1, () => handleSort("salesman"));
					delegated("click", th_2, () => handleSort("sale"));
					delegated("click", th_3, () => handleSort("cost"));
					delegated("click", th_4, () => handleSort("profit"));
					delegated("change", select_1, () => set(currentPage, 1));
					bind_select_value(select_1, () => get(pageSize), ($$value) => set(pageSize, $$value));
					delegated("click", button_11, () => update(currentPage, -1));
					delegated("click", button_12, () => update(currentPage));
					append($$anchor, div_32);
				};
				if_block(node_31, ($$render) => {
					if (get(paginatedRecords).length === 0) $$render(consequent_11);
					else $$render(alternate_3, -1);
				});
				append($$anchor, fragment_12);
			};
			var alternate_5 = ($$anchor) => {
				var fragment_18 = comment();
				var node_54 = first_child(fragment_18);
				var consequent_17 = ($$anchor) => {
					var div_48 = root_23();
					var div_49 = child(div_48);
					History(child(div_49), { class: "h-6 w-6" });
					reset(div_49);
					var node_56 = sibling(div_49, 6);
					var consequent_16 = ($$anchor) => {
						Button($$anchor, {
							variant: "outline",
							size: "sm",
							onclick: resetFilters,
							class: "rounded-xl text-xs",
							children: ($$anchor, $$slotProps) => {
								var fragment_20 = root_15();
								Rotate_ccw(first_child(fragment_20), { class: "h-3 w-3 mr-1.5" });
								next(2);
								append($$anchor, fragment_20);
							},
							$$slots: { default: true }
						});
					};
					if_block(node_56, ($$render) => {
						if (get(hasActiveFilters)) $$render(consequent_16);
					});
					reset(div_48);
					append($$anchor, div_48);
				};
				var alternate_4 = ($$anchor) => {
					var div_50 = root_26();
					var div_51 = child(div_50);
					var table_1 = child(div_51);
					var tbody_1 = sibling(child(table_1));
					each(tbody_1, 21, () => get(paginatedHistory), index, ($$anchor, h) => {
						const ServiceIcon = user_derived(() => getServiceIcon(get(h).bookingType));
						var tr_2 = root_25();
						var td_7 = child(tr_2);
						var div_52 = child(td_7);
						var node_58 = child(div_52);
						Clock(node_58, { class: "h-3.5 w-3.5 text-muted-foreground shrink-0" });
						var div_53 = sibling(node_58, 2);
						var span_23 = child(div_53);
						var text_13 = child(span_23, true);
						reset(span_23);
						var span_24 = sibling(span_23, 2);
						var text_14 = child(span_24, true);
						reset(span_24);
						reset(div_53);
						reset(div_52);
						reset(td_7);
						var td_8 = sibling(td_7);
						var div_54 = child(td_8);
						var div_55 = child(div_54);
						component(child(div_55), () => get(ServiceIcon), ($$anchor, ServiceIcon_2) => {
							ServiceIcon_2($$anchor, { class: "h-3.5 w-3.5" });
						});
						reset(div_55);
						var div_56 = sibling(div_55, 2);
						var a_2 = child(div_56);
						var span_25 = child(a_2);
						var text_15 = child(span_25, true);
						reset(span_25);
						External_link(sibling(span_25, 2), { class: "h-2.5 w-2.5 opacity-60" });
						reset(a_2);
						var node_61 = sibling(a_2, 2);
						var consequent_18 = ($$anchor) => {
							var span_26 = root_24();
							var text_16 = child(span_26, true);
							reset(span_26);
							template_effect(() => {
								set_attribute(span_26, "title", get(h).clientName);
								set_text(text_16, get(h).clientName);
							});
							append($$anchor, span_26);
						};
						if_block(node_61, ($$render) => {
							if (get(h).clientName) $$render(consequent_18);
						});
						var span_27 = sibling(node_61, 2);
						var text_17 = child(span_27, true);
						reset(span_27);
						reset(div_56);
						reset(div_54);
						reset(td_8);
						var td_9 = sibling(td_8);
						var div_57 = child(td_9);
						var div_58 = child(div_57);
						var text_18 = child(div_58, true);
						reset(div_58);
						var span_28 = sibling(div_58, 2);
						var text_19 = child(span_28, true);
						reset(span_28);
						reset(div_57);
						reset(td_9);
						var td_10 = sibling(td_9);
						var div_59 = child(td_10);
						var span_29 = child(div_59);
						var text_20 = child(span_29, true);
						reset(span_29);
						var node_62 = sibling(span_29, 2);
						Arrow_right(node_62, { class: "h-3 w-3 text-muted-foreground" });
						var span_30 = sibling(node_62, 2);
						var text_21 = child(span_30);
						reset(span_30);
						reset(div_59);
						reset(td_10);
						var td_11 = sibling(td_10);
						var span_31 = child(td_11);
						var text_22 = child(span_31);
						reset(span_31);
						reset(td_11);
						var td_12 = sibling(td_11);
						var div_60 = child(td_12);
						var text_23 = child(div_60, true);
						reset(div_60);
						var span_32 = sibling(div_60, 2);
						var text_24 = child(span_32);
						reset(span_32);
						reset(td_12);
						var td_13 = sibling(td_12);
						var a_3 = child(td_13);
						External_link(sibling(child(a_3), 2), { class: "h-3 w-3" });
						reset(a_3);
						reset(td_13);
						reset(tr_2);
						template_effect(($0, $1, $2, $3, $4, $5, $6, $7, $8, $9) => {
							set_text(text_13, $0);
							set_text(text_14, $1);
							set_class(div_55, 1, `p-1.5 rounded-lg border ${$2 ?? ""}`);
							set_attribute(a_2, "href", `/sales/bookings/${$3 ?? ""}/${get(h).bookingId ?? ""}`);
							set_text(text_15, get(h).documentNumber || `#${get(h).bookingId}`);
							set_text(text_17, get(h).bookingType);
							set_text(text_18, $4);
							set_text(text_19, get(h).salesmanName || `Salesman #${get(h).salesmanId}`);
							set_text(text_20, $5);
							set_text(text_21, `${$6 ?? ""} BHD`);
							set_class(span_31, 1, $7);
							set_text(text_22, `${get(h).deltaAmount >= 0 ? "+" : ""}${$8 ?? ""} BHD`);
							set_text(text_23, get(h).reason);
							set_text(text_24, `By ${(get(h).modifiedBy || "Accountant") ?? ""}`);
							set_attribute(a_3, "href", `/sales/bookings/${$9 ?? ""}/${get(h).bookingId ?? ""}`);
						}, [
							() => formatDate(get(h).timestamp),
							() => formatBahrainTime(get(h).timestamp),
							() => getServiceBadgeColor(get(h).bookingType),
							() => getServiceRouteSlug(get(h).bookingType),
							() => (get(h).salesmanName || "S").charAt(0).toUpperCase(),
							() => get(h).previousProfit.toFixed(3),
							() => get(h).newProfit.toFixed(3),
							() => clsx(["inline-block px-2.5 py-0.5 rounded-full font-mono text-xs font-bold", get(h).deltaAmount >= 0 ? "bg-emerald-500/10 text-emerald-600 border border-emerald-500/20" : "bg-rose-500/10 text-rose-600 border border-rose-500/20"].join(" ")),
							() => get(h).deltaAmount.toFixed(3),
							() => getServiceRouteSlug(get(h).bookingType)
						]);
						append($$anchor, tr_2);
					});
					reset(tbody_1);
					reset(table_1);
					reset(div_51);
					var div_61 = sibling(div_51, 2);
					var div_62 = child(div_61);
					var span_33 = child(div_62);
					var text_25 = child(span_33);
					reset(span_33);
					var select_2 = sibling(span_33, 2);
					var option_10 = child(select_2);
					option_10.value = option_10.__value = 10;
					var option_11 = sibling(option_10);
					option_11.value = option_11.__value = 20;
					var option_12 = sibling(option_11);
					option_12.value = option_12.__value = 50;
					var option_13 = sibling(option_12);
					option_13.value = option_13.__value = 100;
					var option_14 = sibling(option_13);
					option_14.value = option_14.__value = 200;
					var option_15 = sibling(option_14);
					option_15.value = option_15.__value = 500;
					var option_16 = sibling(option_15);
					option_16.value = option_16.__value = 1e3;
					reset(select_2);
					reset(div_62);
					var div_63 = sibling(div_62, 2);
					var button_13 = child(div_63);
					Chevron_left(child(button_13), { class: "h-3.5 w-3.5" });
					next(2);
					reset(button_13);
					var span_34 = sibling(button_13, 2);
					var text_26 = child(span_34);
					reset(span_34);
					var button_14 = sibling(span_34, 2);
					Chevron_right(sibling(child(button_14), 2), { class: "h-3.5 w-3.5" });
					reset(button_14);
					reset(div_63);
					reset(div_61);
					reset(div_50);
					template_effect(($0) => {
						set_text(text_25, `Showing ${(get(historyPage) - 1) * get(historyPageSize) + 1} to ${$0 ?? ""} of ${get(filteredHistory).length ?? ""} modifications`);
						button_13.disabled = get(historyPage) <= 1;
						set_text(text_26, `Page ${get(historyPage) ?? ""} of ${get(totalHistoryPages) ?? ""}`);
						button_14.disabled = get(historyPage) >= get(totalHistoryPages);
					}, [() => Math.min(get(historyPage) * get(historyPageSize), get(filteredHistory).length)]);
					delegated("change", select_2, () => set(historyPage, 1));
					bind_select_value(select_2, () => get(historyPageSize), ($$value) => set(historyPageSize, $$value));
					delegated("click", button_13, () => update(historyPage, -1));
					delegated("click", button_14, () => update(historyPage));
					append($$anchor, div_50);
				};
				if_block(node_54, ($$render) => {
					if (get(filteredHistory).length === 0) $$render(consequent_17);
					else $$render(alternate_4, -1);
				});
				append($$anchor, fragment_18);
			};
			if_block(node_30, ($$render) => {
				if (get(activeViewTab) === "records") $$render(consequent_15);
				else $$render(alternate_5, -1);
			});
			template_effect(($0) => {
				set_text(text_1, `${$0 ?? ""}%`);
				set_class(button_6, 1, `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${get(activeViewTab) === "records" ? "bg-background text-foreground shadow-xs font-bold" : "text-muted-foreground hover:text-foreground"}`);
				set_class(span_7, 1, `px-1.5 py-0.2 rounded-md text-[10px] font-mono ${get(activeViewTab) === "records" ? "bg-primary/10 text-primary font-bold" : "bg-muted text-muted-foreground"}`);
				set_text(text_2, get(filteredRecords).length);
				set_class(button_7, 1, `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${get(activeViewTab) === "history" ? "bg-background text-foreground shadow-xs font-bold" : "text-muted-foreground hover:text-foreground"}`);
				set_attribute(input_2, "placeholder", get(activeViewTab) === "records" ? "Search by Doc #, Booking ID, Client..." : "Search by Doc #, Client, Reason...");
			}, [() => get(overallMargin).toFixed(1)]);
			delegated("click", button_6, () => set(activeViewTab, "records"));
			delegated("click", button_7, () => set(activeViewTab, "history"));
			bind_value(input_2, () => get(searchQuery), ($$value) => set(searchQuery, $$value));
			append($$anchor, fragment_9);
		};
		if_block(node_12, ($$render) => {
			if (get(loading)) $$render(consequent_4);
			else $$render(alternate_6, -1);
		});
		reset(div_1);
		var node_66 = sibling(div_1, 2);
		var consequent_22 = ($$anchor) => {
			const recordPriorHistory = user_derived(() => getRecordModifications(get(adjustingRecord)));
			var div_64 = root_34();
			var div_65 = child(div_64);
			var div_66 = child(div_65);
			var div_67 = child(div_66);
			var div_68 = child(div_67);
			Pen_line(child(div_68), { class: "h-4.5 w-4.5" });
			reset(div_68);
			var div_69 = sibling(div_68, 2);
			var p = sibling(child(div_69), 2);
			var text_27 = child(p);
			reset(p);
			reset(div_69);
			reset(div_67);
			var button_15 = sibling(div_67, 2);
			X(child(button_15), { class: "h-4 w-4" });
			reset(button_15);
			reset(div_66);
			var form = sibling(div_66, 2);
			var div_70 = child(form);
			var div_71 = child(div_70);
			var span_35 = sibling(child(div_71), 2);
			var text_28 = child(span_35);
			reset(span_35);
			reset(div_71);
			var div_72 = sibling(div_71, 2);
			var span_36 = sibling(child(div_72), 2);
			var text_29 = child(span_36);
			reset(span_36);
			reset(div_72);
			var div_73 = sibling(div_72, 2);
			var span_37 = sibling(child(div_73), 2);
			var text_30 = child(span_37);
			reset(span_37);
			reset(div_73);
			reset(div_70);
			var div_74 = sibling(div_70, 2);
			var div_75 = sibling(child(div_74), 2);
			var button_16 = child(div_75);
			Dollar_sign(child(button_16), { class: "h-3.5 w-3.5 text-teal-600 dark:text-teal-400" });
			next(2);
			reset(button_16);
			var button_17 = sibling(button_16, 2);
			Sliders_horizontal(child(button_17), { class: "h-3.5 w-3.5 text-primary" });
			next(2);
			reset(button_17);
			reset(div_75);
			reset(div_74);
			var node_71 = sibling(div_74, 2);
			var consequent_19 = ($$anchor) => {
				var div_76 = root_28();
				var div_77 = child(div_76);
				var div_78 = sibling(child(div_77), 2);
				var button_18 = child(div_78);
				var text_31 = child(button_18);
				reset(button_18);
				var button_19 = sibling(button_18, 4);
				reset(div_78);
				reset(div_77);
				var div_79 = sibling(div_77, 2);
				var input_3 = sibling(child(div_79), 2);
				remove_input_defaults(input_3);
				reset(div_79);
				reset(div_76);
				template_effect(($0) => set_text(text_31, `Reset to Current (${$0 ?? ""})`), [() => get(adjustingRecord).profitAmount.toFixed(3)]);
				delegated("click", button_18, () => set(targetProfitAmount, get(adjustingRecord)?.profitAmount.toFixed(3) || "0.000", true));
				delegated("click", button_19, () => set(targetProfitAmount, "0.000"));
				bind_value(input_3, () => get(targetProfitAmount), ($$value) => set(targetProfitAmount, $$value));
				append($$anchor, div_76);
			};
			var alternate_7 = ($$anchor) => {
				var div_80 = root_29();
				var div_81 = sibling(child(div_80), 2);
				var input_4 = sibling(child(div_81), 2);
				remove_input_defaults(input_4);
				reset(div_81);
				reset(div_80);
				bind_value(input_4, () => get(adjustDeltaAmount), ($$value) => set(adjustDeltaAmount, $$value));
				append($$anchor, div_80);
			};
			if_block(node_71, ($$render) => {
				if (get(adjustMode) === "direct") $$render(consequent_19);
				else $$render(alternate_7, -1);
			});
			var div_82 = sibling(node_71, 2);
			var textarea = sibling(child(div_82), 2);
			remove_textarea_child(textarea);
			reset(div_82);
			var div_83 = sibling(div_82, 2);
			var div_84 = child(div_83);
			var span_38 = sibling(child(div_84), 2);
			var text_32 = child(span_38);
			reset(span_38);
			reset(div_84);
			var div_85 = sibling(div_84, 2);
			var span_39 = sibling(child(div_85), 2);
			var text_33 = child(span_39);
			reset(span_39);
			reset(div_85);
			reset(div_83);
			var node_72 = sibling(div_83, 2);
			var consequent_20 = ($$anchor) => {
				var div_86 = root_31();
				var div_87 = child(div_86);
				var node_73 = child(div_87);
				History(node_73, { class: "h-3.5 w-3.5 text-purple-600" });
				var span_40 = sibling(node_73, 2);
				var text_34 = child(span_40);
				reset(span_40);
				reset(div_87);
				var div_88 = sibling(div_87, 2);
				each(div_88, 21, () => get(recordPriorHistory), index, ($$anchor, ph) => {
					var div_89 = root_30();
					var div_90 = child(div_89);
					var span_41 = child(div_90);
					var text_35 = child(span_41, true);
					reset(span_41);
					var span_42 = sibling(span_41, 2);
					var text_36 = child(span_42);
					reset(span_42);
					reset(div_90);
					var div_91 = sibling(div_90, 2);
					var text_37 = child(div_91);
					reset(div_91);
					reset(div_89);
					template_effect(($0, $1) => {
						set_text(text_35, $0);
						set_class(span_42, 1, `font-bold ${get(ph).deltaAmount >= 0 ? "text-teal-600 dark:text-teal-400" : "text-rose-600"}`);
						set_text(text_36, `${get(ph).deltaAmount >= 0 ? "+" : ""}${$1 ?? ""} BHD`);
						set_text(text_37, `"${get(ph).reason ?? ""}"`);
					}, [() => new Date(get(ph).timestamp).toLocaleString(), () => get(ph).deltaAmount.toFixed(3)]);
					append($$anchor, div_89);
				});
				reset(div_88);
				reset(div_86);
				template_effect(() => set_text(text_34, `Prior Modifications (${get(recordPriorHistory).length ?? ""})`));
				append($$anchor, div_86);
			};
			if_block(node_72, ($$render) => {
				if (get(recordPriorHistory).length > 0) $$render(consequent_20);
			});
			var div_92 = sibling(node_72, 2);
			var node_74 = child(div_92);
			Button(node_74, {
				variant: "outline",
				class: "h-8.5 rounded-xl cursor-pointer",
				onclick: () => set(showAdjustModal, false),
				get disabled() {
					return get(isSubmittingAdjustment);
				},
				children: ($$anchor, $$slotProps) => {
					next();
					append($$anchor, text("Cancel"));
				},
				$$slots: { default: true }
			});
			var node_75 = sibling(node_74, 2);
			{
				let $0 = user_derived(() => get(isSubmittingAdjustment) || !get(adjustReason).trim() || Math.abs(get(calculatedDelta)) < 1e-4);
				Button(node_75, {
					class: "h-8.5 rounded-xl cursor-pointer flex items-center gap-1.5 font-semibold",
					get disabled() {
						return get($0);
					},
					children: ($$anchor, $$slotProps) => {
						var fragment_21 = comment();
						var node_76 = first_child(fragment_21);
						var consequent_21 = ($$anchor) => {
							var fragment_22 = root_32();
							Refresh_cw(first_child(fragment_22), { class: "h-3.5 w-3.5 animate-spin" });
							next(2);
							append($$anchor, fragment_22);
						};
						var alternate_8 = ($$anchor) => {
							var fragment_23 = root_33();
							Save(first_child(fragment_23), { class: "h-3.5 w-3.5" });
							next(2);
							append($$anchor, fragment_23);
						};
						if_block(node_76, ($$render) => {
							if (get(isSubmittingAdjustment)) $$render(consequent_21);
							else $$render(alternate_8, -1);
						});
						append($$anchor, fragment_21);
					},
					$$slots: { default: true }
				});
			}
			reset(div_92);
			reset(form);
			reset(div_65);
			reset(div_64);
			template_effect(($0, $1, $2, $3, $4, $5, $6, $7) => {
				set_text(text_27, `${(get(adjustingRecord).documentNumber || `#${get(adjustingRecord).bookingId}`) ?? ""} • ${get(adjustingRecord).bookingType ?? ""} • ${get(adjustingRecord).salesmanName ?? ""}`);
				set_text(text_28, `${$0 ?? ""} BHD`);
				set_text(text_29, `${$1 ?? ""} BHD`);
				set_text(text_30, `${$2 ?? ""} BHD`);
				set_class(button_16, 1, $3);
				set_class(button_17, 1, $4);
				set_text(text_32, `${$5 ?? ""} BHD`);
				set_class(span_39, 1, $6);
				set_text(text_33, `${get(calculatedDelta) >= 0 ? "+" : ""}${$7 ?? ""} BHD`);
			}, [
				() => get(adjustingRecord).payableAmount.toFixed(3),
				() => get(adjustingRecord).finalSupplierCost.toFixed(3),
				() => get(adjustingRecord).profitAmount.toFixed(3),
				() => clsx(["py-1.5 text-center rounded-lg font-semibold transition-all cursor-pointer text-xs flex items-center justify-center gap-1.5", get(adjustMode) === "direct" ? "bg-card text-foreground font-bold shadow-xs border border-border" : "text-muted-foreground hover:text-foreground"].join(" ")),
				() => clsx(["py-1.5 text-center rounded-lg font-semibold transition-all cursor-pointer text-xs flex items-center justify-center gap-1.5", get(adjustMode) === "delta" ? "bg-card text-foreground font-bold shadow-xs border border-border" : "text-muted-foreground hover:text-foreground"].join(" ")),
				() => get(projectedNewProfit).toFixed(3),
				() => clsx(["text-xs font-bold font-mono px-2 py-0.5 rounded-md inline-block", get(calculatedDelta) > 0 ? "bg-emerald-500/10 text-emerald-600" : get(calculatedDelta) < 0 ? "bg-rose-500/10 text-rose-600" : "bg-muted text-muted-foreground"].join(" ")),
				() => get(calculatedDelta).toFixed(3)
			]);
			delegated("click", div_64, (e) => e.target === e.currentTarget && set(showAdjustModal, false));
			delegated("keydown", div_64, (e) => e.key === "Escape" && set(showAdjustModal, false));
			delegated("click", button_15, () => set(showAdjustModal, false));
			event("submit", form, submitProfitAdjustment);
			delegated("click", button_16, () => switchAdjustMode("direct"));
			delegated("click", button_17, () => switchAdjustMode("delta"));
			bind_value(textarea, () => get(adjustReason), ($$value) => set(adjustReason, $$value));
			append($$anchor, div_64);
		};
		if_block(node_66, ($$render) => {
			if (get(showAdjustModal) && get(adjustingRecord)) $$render(consequent_22);
		});
		var node_79 = sibling(node_66, 2);
		var consequent_24 = ($$anchor) => {
			const recordHistory = user_derived(() => getRecordModifications(get(historyModalRecord)));
			var div_93 = root_38();
			var div_94 = child(div_93);
			var div_95 = child(div_94);
			var div_96 = child(div_95);
			var div_97 = child(div_96);
			History(child(div_97), { class: "h-4.5 w-4.5" });
			reset(div_97);
			var div_98 = sibling(div_97, 2);
			var p_1 = sibling(child(div_98), 2);
			var text_39 = child(p_1);
			reset(p_1);
			reset(div_98);
			reset(div_96);
			var button_20 = sibling(div_96, 2);
			X(child(button_20), { class: "h-4 w-4" });
			reset(button_20);
			reset(div_95);
			var div_99 = sibling(div_95, 2);
			var div_100 = child(div_99);
			var div_101 = child(div_100);
			var span_43 = sibling(child(div_101), 2);
			var text_40 = child(span_43);
			reset(span_43);
			reset(div_101);
			var div_102 = sibling(div_101, 2);
			var span_44 = sibling(child(div_102), 2);
			var text_41 = child(span_44);
			reset(span_44);
			reset(div_102);
			reset(div_100);
			var node_82 = sibling(div_100, 2);
			var consequent_23 = ($$anchor) => {
				var div_103 = root_35();
				History(child(div_103), { class: "h-6 w-6 mx-auto opacity-40" });
				next(2);
				reset(div_103);
				append($$anchor, div_103);
			};
			var alternate_9 = ($$anchor) => {
				var div_104 = root_37();
				each(div_104, 21, () => get(recordHistory), index, ($$anchor, item) => {
					var div_105 = root_36();
					var div_106 = child(div_105);
					var div_107 = child(div_106);
					var node_84 = child(div_107);
					Clock(node_84, { class: "h-3 w-3 text-purple-500" });
					var span_45 = sibling(node_84, 2);
					var text_42 = child(span_45, true);
					reset(span_45);
					reset(div_107);
					var span_46 = sibling(div_107, 2);
					var text_43 = child(span_46);
					reset(span_46);
					reset(div_106);
					var div_108 = sibling(div_106, 2);
					var span_47 = child(div_108);
					var strong = sibling(child(span_47));
					var text_44 = child(strong);
					reset(strong);
					reset(span_47);
					var node_85 = sibling(span_47, 2);
					Arrow_right(node_85, { class: "h-3 w-3 text-muted-foreground" });
					var span_48 = sibling(node_85, 2);
					var text_45 = child(span_48);
					reset(span_48);
					reset(div_108);
					var div_109 = sibling(div_108, 2);
					var p_2 = sibling(child(div_109), 2);
					var text_46 = child(p_2);
					reset(p_2);
					reset(div_109);
					reset(div_105);
					template_effect(($0, $1, $2, $3, $4) => {
						set_text(text_42, $0);
						set_class(span_46, 1, $1);
						set_text(text_43, `${get(item).deltaAmount >= 0 ? "+" : ""}${$2 ?? ""} BHD`);
						set_text(text_44, `${$3 ?? ""} BHD`);
						set_text(text_45, `After: ${$4 ?? ""} BHD`);
						set_text(text_46, `"${get(item).reason ?? ""}"`);
					}, [
						() => new Date(get(item).timestamp).toLocaleString(),
						() => clsx(["font-mono font-bold px-2 py-0.5 rounded-md text-xs", get(item).deltaAmount >= 0 ? "bg-emerald-500/10 text-emerald-600 border border-emerald-500/20" : "bg-rose-500/10 text-rose-600 border border-rose-500/20"].join(" ")),
						() => get(item).deltaAmount.toFixed(3),
						() => get(item).previousProfit.toFixed(3),
						() => get(item).newProfit.toFixed(3)
					]);
					append($$anchor, div_105);
				});
				reset(div_104);
				append($$anchor, div_104);
			};
			if_block(node_82, ($$render) => {
				if (get(recordHistory).length === 0) $$render(consequent_23);
				else $$render(alternate_9, -1);
			});
			reset(div_99);
			var div_110 = sibling(div_99, 2);
			var a_4 = child(div_110);
			External_link(sibling(child(a_4), 2), { class: "h-3 w-3" });
			reset(a_4);
			Button(sibling(a_4, 2), {
				variant: "outline",
				size: "sm",
				onclick: () => set(showHistoryModal, false),
				class: "rounded-xl text-xs cursor-pointer",
				children: ($$anchor, $$slotProps) => {
					next();
					append($$anchor, text("Close"));
				},
				$$slots: { default: true }
			});
			reset(div_110);
			reset(div_94);
			reset(div_93);
			template_effect(($0, $1) => {
				set_text(text_39, `${(get(historyModalRecord).documentNumber || `#${get(historyModalRecord).bookingId}`) ?? ""} • ${get(historyModalRecord).bookingType ?? ""} • ${get(historyModalRecord).salesmanName ?? ""}`);
				set_text(text_40, `${$0 ?? ""} BHD`);
				set_text(text_41, `${get(recordHistory).length ?? ""} change${get(recordHistory).length === 1 ? "" : "s"} logged`);
				set_attribute(a_4, "href", `/sales/bookings/${$1 ?? ""}/${get(historyModalRecord).bookingId ?? ""}`);
			}, [() => get(historyModalRecord).profitAmount.toFixed(3), () => getServiceRouteSlug(get(historyModalRecord).bookingType)]);
			delegated("click", div_93, (e) => e.target === e.currentTarget && set(showHistoryModal, false));
			delegated("keydown", div_93, (e) => e.key === "Escape" && set(showHistoryModal, false));
			delegated("click", button_20, () => set(showHistoryModal, false));
			append($$anchor, div_93);
		};
		if_block(node_79, ($$render) => {
			if (get(showHistoryModal) && get(historyModalRecord)) $$render(consequent_24);
		});
		template_effect(() => {
			set_class(button, 1, `px-2.5 py-1 rounded-lg border text-[11px] font-medium transition-colors cursor-pointer shrink-0 whitespace-nowrap ${get(activePreset) === "all" && !get(startDate) && !get(endDate) ? "bg-primary text-primary-foreground border-primary" : "border-border bg-background hover:bg-muted text-muted-foreground"}`);
			set_class(button_1, 1, `px-2.5 py-1 rounded-lg border text-[11px] font-medium transition-colors cursor-pointer shrink-0 whitespace-nowrap ${get(activePreset) === "today" ? "bg-primary text-primary-foreground border-primary" : "border-border bg-background hover:bg-muted text-muted-foreground"}`);
			set_class(button_2, 1, `px-2.5 py-1 rounded-lg border text-[11px] font-medium transition-colors cursor-pointer shrink-0 whitespace-nowrap ${get(activePreset) === "this_week" ? "bg-primary text-primary-foreground border-primary" : "border-border bg-background hover:bg-muted text-muted-foreground"}`);
			set_class(button_3, 1, `px-2.5 py-1 rounded-lg border text-[11px] font-medium transition-colors cursor-pointer shrink-0 whitespace-nowrap ${get(activePreset) === "this_month" ? "bg-primary text-primary-foreground border-primary" : "border-border bg-background hover:bg-muted text-muted-foreground"}`);
			set_class(button_4, 1, `px-2.5 py-1 rounded-lg border text-[11px] font-medium transition-colors cursor-pointer shrink-0 whitespace-nowrap ${get(activePreset) === "last_30" ? "bg-primary text-primary-foreground border-primary" : "border-border bg-background hover:bg-muted text-muted-foreground"}`);
			set_class(button_5, 1, `px-2.5 py-1 rounded-lg border text-[11px] font-medium transition-colors cursor-pointer shrink-0 whitespace-nowrap ${get(activePreset) === "this_year" ? "bg-primary text-primary-foreground border-primary" : "border-border bg-background hover:bg-muted text-muted-foreground"}`);
		});
		delegated("click", button, () => setPreset("all"));
		delegated("click", button_1, () => setPreset("today"));
		delegated("click", button_2, () => setPreset("this_week"));
		delegated("click", button_3, () => setPreset("this_month"));
		delegated("click", button_4, () => setPreset("last_30"));
		delegated("click", button_5, () => setPreset("this_year"));
		delegated("change", input, handleCustomDateChange);
		bind_value(input, () => get(startDate), ($$value) => set(startDate, $$value));
		delegated("change", input_1, handleCustomDateChange);
		bind_value(input_1, () => get(endDate), ($$value) => set(endDate, $$value));
		append($$anchor, fragment_1);
	};
	if_block(node, ($$render) => {
		if (get(d)) $$render(consequent);
		else $$render(alternate_10, -1);
	});
	append($$anchor, fragment);
	pop();
}
delegate([
	"click",
	"change",
	"keydown"
]);
//#endregion
export { _page as component };

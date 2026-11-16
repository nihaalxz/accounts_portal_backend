import { B as append, Bt as reset, Ct as user_derived, D as head, Et as store_get, G as text, H as from_html, I as if_block, J as event, K as delegate, N as each, Nt as pop, P as index, Pt as push, Q as get, R as set_text, Tt as setup_stores, V as comment, _ as set_attribute, b as bind_select_value, bt as state, dt as $document, g as remove_input_defaults, gt as proxy, ht as sibling, it as effect, m as bind_value, mt as first_child, ot as template_effect, pt as child, q as delegated, r as onMount, vt as set, w as set_class, zt as next } from "../chunks/dXkmWTgM.js";
import "../chunks/DhaYE-8x.js";
import { t as apiFetch } from "../chunks/CjCU9mU-.js";
import { i as hasRole, r as currentUser } from "../chunks/Cw0w2yMF.js";
import { r as toast } from "../chunks/CbPRQHfn.js";
import { t as Check } from "../chunks/blG6JRe7.js";
import { t as Clock } from "../chunks/CZu1L_RP2.js";
import { t as Globe } from "../chunks/MqPvjOPE2.js";
import { t as Mail } from "../chunks/DhZuqLVV.js";
import { t as Pencil } from "../chunks/C3Ohi_CL.js";
import { t as Phone } from "../chunks/BGwWtEfw.js";
import { t as Plus } from "../chunks/BObidJ7B.js";
import { t as Refresh_cw } from "../chunks/DpTJy0Wb.js";
import { t as Search } from "../chunks/D7t9qluE.js";
import { t as Shield_check } from "../chunks/Ctn9-c3Y.js";
import { t as Trash_2 } from "../chunks/TFHBi7f3.js";
import { t as Triangle_alert } from "../chunks/BKenZzGW.js";
import { t as User_check } from "../chunks/tSSJYCMY.js";
import { t as Wallet } from "../chunks/BahXSy4P.js";
import { t as X } from "../chunks/wXHc9RNY.js";
import { t as Button } from "../chunks/BhXsq3bC.js";
import { t as MoneyDisplay } from "../chunks/CIVSRuaR2.js";
import { t as DateDisplay } from "../chunks/DEr_pDJT2.js";
import "../chunks/CS-Kx6i02.js";
import "../chunks/C74Z4VDd2.js";
import "../chunks/BfVBuygS2.js";
import { t as Input } from "../chunks/C4xMLgho.js";
//#region src/routes/(app)/agents/+page.svelte
var root = from_html(`<!> Cancel`, 1);
var root_1 = from_html(`<!> `, 1);
var root_2 = from_html(`<!> Reload`, 1);
var root_3 = from_html(`<div class="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-2xl px-5 py-4 text-xs text-amber-800"><!> <div><span class="font-bold"> </span> <span class="text-amber-700 ml-1">These will be registered once approved.</span></div></div>`);
var root_4 = from_html(`<p class="text-[11px] text-amber-600 flex items-center gap-1.5 mb-5"><!> Your request will be stored in the database and needs master accountant approval before the agent is registered.</p>`);
var root_5 = from_html(`<div class="mb-5"></div>`);
var root_6 = from_html(`<span class="text-muted-foreground font-normal">(read-only)</span>`);
var root_7 = from_html(`<option> </option>`);
var root_8 = from_html(`<!> <!>`, 1);
var root_9 = from_html(`<div class="bg-card border border-border rounded-2xl p-6 shadow-xs"><h2 class="text-sm font-bold text-foreground mb-1"><!></h2> <!> <form><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs"><div class="space-y-1.5"><label for="a-firstname" class="block font-semibold text-foreground">First Name <span class="text-red-500">*</span></label> <!></div> <div class="space-y-1.5"><label for="a-lastname" class="block font-semibold text-foreground">Last Name <span class="text-red-500">*</span></label> <!></div> <div class="space-y-1.5"><label for="a-salesmanid" class="block font-semibold text-foreground">Sales Portal Salesman ID <!></label> <select id="a-salesmanid" class="flex h-9 w-full rounded-xl border border-input bg-background px-3 py-1 text-xs shadow-xs transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 text-foreground"><option>-- Select Salesman (Optional) --</option><!></select></div> <div class="space-y-1.5"><label for="a-phone" class="block font-semibold text-foreground">Phone Number</label> <div class="flex gap-1.5"><select id="a-countrycode" class="flex h-9 w-36 shrink-0 rounded-xl border border-input bg-background px-2.5 py-1 text-xs shadow-xs transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring text-foreground cursor-pointer"></select> <!></div></div> <div class="space-y-1.5"><label for="a-email" class="block font-semibold text-foreground">Email Address</label> <!></div> <div class="space-y-1.5"><label for="a-nationality" class="block font-semibold text-foreground">Nationality</label> <!></div> <div class="space-y-1.5 sm:col-span-2 lg:col-span-3"><label for="a-address" class="block font-semibold text-foreground">Billing Address</label> <!></div></div> <div class="flex gap-2.5 mt-5 pt-4 border-t border-border/50"><!> <!></div></form></div>`);
var root_10 = from_html(`<span class="inline-flex items-center justify-center h-4 min-w-4 px-1 rounded-full text-[9px] font-bold bg-amber-500 text-white"> </span>`);
var root_11 = from_html(`<div class="bg-card border border-border rounded-2xl h-40 flex items-center justify-center"><!></div>`);
var root_12 = from_html(`<div class="bg-card border border-border rounded-2xl p-16 text-center text-muted-foreground text-xs"><!> No pending agent registration requests.</div>`);
var root_13 = from_html(`<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-primary/10 text-primary font-mono font-bold text-[10px] border border-primary/20"><!> </span>`);
var root_14 = from_html(`<span class="flex items-center gap-1"><!> </span>`);
var root_15 = from_html(`<!> Approve`, 1);
var root_16 = from_html(`<!> Reject`, 1);
var root_17 = from_html(`<div class="flex gap-2 shrink-0"><!> <!></div>`);
var root_18 = from_html(`<span class="text-[10px] text-amber-600 flex items-center gap-1 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-xl font-semibold"><!> Awaiting Approval</span>`);
var root_19 = from_html(`<div class="p-5 flex flex-col sm:flex-row sm:items-center gap-4"><div class="flex-1 space-y-2"><div class="flex items-center gap-2 flex-wrap"><span class="font-bold text-sm text-foreground"> </span> <!></div> <div class="flex flex-wrap gap-4 text-[11px] text-muted-foreground"><!> <!> <!></div> <div class="text-[10px] text-muted-foreground/60 flex items-center gap-1.5"><!> Submitted by <strong class="text-muted-foreground"> </strong> at <!></div></div> <!></div>`);
var root_20 = from_html(`<div class="bg-card border border-border rounded-2xl overflow-hidden shadow-xs"><div class="px-5 py-4 border-b border-border/50 bg-amber-50/50"><h2 class="text-xs font-bold text-amber-800 flex items-center gap-1.5"><!> Pending Agent Registration Requests — awaiting master accountant approval</h2></div> <div class="divide-y divide-border/50"></div></div>`);
var root_21 = from_html(`<div class="bg-card border border-border rounded-2xl h-64 flex items-center justify-center"><!></div>`);
var root_22 = from_html(`<div class="bg-card border border-border rounded-2xl p-16 text-center text-muted-foreground text-xs"> </div>`);
var root_23 = from_html(`<th class="p-4 w-20 text-center print:hidden">Actions</th>`);
var root_24 = from_html(`<span class="text-[10px] text-muted-foreground mt-0.5 block truncate max-w-[200px]"> </span>`);
var root_25 = from_html(`<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-primary/10 text-primary font-semibold text-[10px] border border-primary/20"><!> </span>`);
var root_26 = from_html(`<span class="text-muted-foreground/40 text-[10px]">Not linked</span>`);
var root_27 = from_html(`<div class="flex items-center gap-1 text-muted-foreground"><!><span class="font-mono"> </span></div>`);
var root_28 = from_html(`<div class="flex items-center gap-1 text-muted-foreground"><!><span class="truncate max-w-[150px]"> </span></div>`);
var root_29 = from_html(`<span class="text-muted-foreground/40">—</span>`);
var root_30 = from_html(`<div class="flex items-center gap-1 text-muted-foreground"><!> </div>`);
var root_31 = from_html(`<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200"><!> Verified</span>`);
var root_32 = from_html(`<span class="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold bg-amber-50 text-amber-700 border border-amber-200">Pending</span>`);
var root_33 = from_html(`<td class="p-4 text-center print:hidden"><div class="flex items-center justify-center gap-1"><a class="p-1.5 hover:bg-emerald-500/10 text-muted-foreground hover:text-emerald-600 rounded-lg transition-colors cursor-pointer inline-flex items-center" title="Create Client Receipt (Deposit to Wallet)"><!></a> <button class="p-1.5 hover:bg-muted text-muted-foreground hover:text-foreground rounded-lg transition-colors cursor-pointer" title="Edit agent"><!></button></div></td>`);
var root_34 = from_html(`<tr class="hover:bg-muted/10 transition-colors"><td class="p-4 font-mono text-muted-foreground"> </td><td class="p-4"><span class="font-bold text-foreground block"> </span> <!></td><td class="p-4"><!></td><td class="p-4 space-y-0.5"><!> <!> <!></td><td class="p-4"><!></td><td class="p-4 text-right font-mono font-bold text-emerald-600"><div class="flex items-center justify-end gap-1"><!><!></div></td><td class="p-4 text-center"><!></td><td class="p-4 font-mono text-muted-foreground"><!></td><!></tr>`);
var root_35 = from_html(`<div class="bg-card border border-border rounded-2xl overflow-x-auto shadow-xs max-w-full print:border-none"><table class="w-full min-w-[750px] text-left border-collapse text-xs"><thead><tr class="bg-muted/30 border-b border-border text-muted-foreground font-semibold text-[10px] uppercase tracking-wider"><th class="p-4 w-16">ID</th><th class="p-4">Agent Name</th><th class="p-4 w-40">Salesman</th><th class="p-4">Contact</th><th class="p-4 w-28">Nationality</th><th class="p-4 w-32 text-right">Wallet</th><th class="p-4 w-24 text-center">Verified</th><th class="p-4 w-28">Registered</th><!></tr></thead><tbody class="divide-y divide-border/50"></tbody></table> <div class="px-4 py-3 border-t border-border/50 flex items-center justify-between text-[10px] text-muted-foreground bg-muted/10 print:hidden"><span>Showing <strong> </strong> of <strong> </strong> agents</span> <span>Total wallet: <strong class="text-emerald-600 font-mono"><!></strong></span></div></div>`);
var root_36 = from_html(`<div class="bg-card border border-border rounded-2xl p-4 print:hidden"><div class="relative"><!> <input type="text" placeholder="Search by name, email, phone, or Salesman ID..." class="w-full text-xs pl-10 pr-4 py-2 border border-border rounded-xl bg-background text-foreground placeholder-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20"/></div></div> <!>`, 1);
var root_37 = from_html(`<div class="space-y-6 print:p-0"><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 print:hidden"><div class="flex flex-col gap-1"><h1 class="text-xl font-bold text-foreground flex items-center gap-2"><!> Agent Accounts</h1> <p class="text-xs text-muted-foreground">Sales Portal salesman profiles linked to Accounts Portal agents — wallet balances, contact
				details, and verification status.</p></div> <div class="flex flex-wrap gap-2"><!> <!></div></div> <!> <!> <div class="flex gap-1 bg-muted/40 rounded-xl p-1 w-fit border border-border/50 print:hidden"><button> </button> <button>Pending Approvals <!></button></div> <!> <!></div>`);
function _page($$anchor, $$props) {
	push($$props, true);
	const $currentUser = () => store_get(currentUser, "$currentUser", $$stores);
	const [$$stores, $$cleanup] = setup_stores();
	let agents = state(proxy([]));
	let pending = state(proxy([]));
	let salesmen = state(proxy([]));
	let loadingAgents = state(false);
	let loadingPending = state(false);
	let loadingSalesmen = state(false);
	let searchVal = state("");
	let activeTab = state("list");
	let showForm = state(false);
	let isEditing = state(false);
	let editingId = state(null);
	let isSaving = state(false);
	const COUNTRY_CODES = [
		{
			code: "+973",
			country: "Bahrain",
			flag: "🇧🇭"
		},
		{
			code: "+971",
			country: "UAE",
			flag: "🇦🇪"
		},
		{
			code: "+966",
			country: "Saudi Arabia",
			flag: "🇸🇦"
		},
		{
			code: "+968",
			country: "Oman",
			flag: "🇴🇲"
		},
		{
			code: "+965",
			country: "Kuwait",
			flag: "🇰🇼"
		},
		{
			code: "+974",
			country: "Qatar",
			flag: "🇶🇦"
		},
		{
			code: "+91",
			country: "India",
			flag: "🇮🇳"
		},
		{
			code: "+92",
			country: "Pakistan",
			flag: "🇵🇰"
		},
		{
			code: "+880",
			country: "Bangladesh",
			flag: "🇧🇩"
		},
		{
			code: "+94",
			country: "Sri Lanka",
			flag: "🇱🇰"
		},
		{
			code: "+63",
			country: "Philippines",
			flag: "🇵🇭"
		},
		{
			code: "+20",
			country: "Egypt",
			flag: "🇪🇬"
		},
		{
			code: "+962",
			country: "Jordan",
			flag: "🇯🇴"
		},
		{
			code: "+961",
			country: "Lebanon",
			flag: "🇱🇧"
		},
		{
			code: "+44",
			country: "United Kingdom",
			flag: "🇬🇧"
		},
		{
			code: "+1",
			country: "United States",
			flag: "🇺🇸"
		},
		{
			code: "+1-CA",
			country: "Canada",
			flag: "🇨🇦",
			actualCode: "+1"
		},
		{
			code: "+93",
			country: "Afghanistan",
			flag: "🇦🇫"
		},
		{
			code: "+355",
			country: "Albania",
			flag: "🇦🇱"
		},
		{
			code: "+213",
			country: "Algeria",
			flag: "🇩🇿"
		},
		{
			code: "+376",
			country: "Andorra",
			flag: "🇦🇩"
		},
		{
			code: "+244",
			country: "Angola",
			flag: "🇦🇴"
		},
		{
			code: "+54",
			country: "Argentina",
			flag: "🇦🇷"
		},
		{
			code: "+374",
			country: "Armenia",
			flag: "🇦🇲"
		},
		{
			code: "+61",
			country: "Australia",
			flag: "🇦🇺"
		},
		{
			code: "+43",
			country: "Austria",
			flag: "🇦🇹"
		},
		{
			code: "+994",
			country: "Azerbaijan",
			flag: "🇦🇿"
		},
		{
			code: "+375",
			country: "Belarus",
			flag: "🇧🇾"
		},
		{
			code: "+32",
			country: "Belgium",
			flag: "🇧🇪"
		},
		{
			code: "+501",
			country: "Belize",
			flag: "🇧🇿"
		},
		{
			code: "+229",
			country: "Benin",
			flag: "🇧🇯"
		},
		{
			code: "+975",
			country: "Bhutan",
			flag: "🇧🇹"
		},
		{
			code: "+591",
			country: "Bolivia",
			flag: "🇧🇴"
		},
		{
			code: "+387",
			country: "Bosnia and Herzegovina",
			flag: "🇧🇦"
		},
		{
			code: "+267",
			country: "Botswana",
			flag: "🇧🇼"
		},
		{
			code: "+55",
			country: "Brazil",
			flag: "🇧🇷"
		},
		{
			code: "+673",
			country: "Brunei",
			flag: "🇧🇳"
		},
		{
			code: "+359",
			country: "Bulgaria",
			flag: "🇧🇬"
		},
		{
			code: "+226",
			country: "Burkina Faso",
			flag: "🇧🇫"
		},
		{
			code: "+257",
			country: "Burundi",
			flag: "🇧🇮"
		},
		{
			code: "+855",
			country: "Cambodia",
			flag: "🇰🇭"
		},
		{
			code: "+237",
			country: "Cameroon",
			flag: "🇨🇲"
		},
		{
			code: "+238",
			country: "Cape Verde",
			flag: "🇨🇻"
		},
		{
			code: "+236",
			country: "Central African Republic",
			flag: "🇨🇫"
		},
		{
			code: "+235",
			country: "Chad",
			flag: "🇹🇩"
		},
		{
			code: "+56",
			country: "Chile",
			flag: "🇨🇱"
		},
		{
			code: "+86",
			country: "China",
			flag: "🇨🇳"
		},
		{
			code: "+57",
			country: "Colombia",
			flag: "🇨🇴"
		},
		{
			code: "+269",
			country: "Comoros",
			flag: "🇰🇲"
		},
		{
			code: "+242",
			country: "Congo",
			flag: "🇨🇬"
		},
		{
			code: "+506",
			country: "Costa Rica",
			flag: "🇨🇷"
		},
		{
			code: "+385",
			country: "Croatia",
			flag: "🇭🇷"
		},
		{
			code: "+53",
			country: "Cuba",
			flag: "🇨🇺"
		},
		{
			code: "+357",
			country: "Cyprus",
			flag: "🇨🇾"
		},
		{
			code: "+420",
			country: "Czech Republic",
			flag: "🇨🇿"
		},
		{
			code: "+45",
			country: "Denmark",
			flag: "🇩🇰"
		},
		{
			code: "+253",
			country: "Djibouti",
			flag: "🇩🇯"
		},
		{
			code: "+593",
			country: "Ecuador",
			flag: "🇪🇨"
		},
		{
			code: "+503",
			country: "El Salvador",
			flag: "🇸🇻"
		},
		{
			code: "+240",
			country: "Equatorial Guinea",
			flag: "🇬🇶"
		},
		{
			code: "+291",
			country: "Eritrea",
			flag: "🇪🇷"
		},
		{
			code: "+372",
			country: "Estonia",
			flag: "🇪🇪"
		},
		{
			code: "+251",
			country: "Ethiopia",
			flag: "🇪🇹"
		},
		{
			code: "+679",
			country: "Fiji",
			flag: "🇫🇯"
		},
		{
			code: "+358",
			country: "Finland",
			flag: "🇫🇮"
		},
		{
			code: "+33",
			country: "France",
			flag: "🇫🇷"
		},
		{
			code: "+241",
			country: "Gabon",
			flag: "🇬🇦"
		},
		{
			code: "+220",
			country: "Gambia",
			flag: "🇬🇲"
		},
		{
			code: "+995",
			country: "Georgia",
			flag: "🇬🇪"
		},
		{
			code: "+49",
			country: "Germany",
			flag: "🇩🇪"
		},
		{
			code: "+233",
			country: "Ghana",
			flag: "🇬🇭"
		},
		{
			code: "+30",
			country: "Greece",
			flag: "🇬🇷"
		},
		{
			code: "+502",
			country: "Guatemala",
			flag: "🇬🇹"
		},
		{
			code: "+224",
			country: "Guinea",
			flag: "🇬🇳"
		},
		{
			code: "+509",
			country: "Haiti",
			flag: "🇭🇹"
		},
		{
			code: "+504",
			country: "Honduras",
			flag: "🇭🇳"
		},
		{
			code: "+852",
			country: "Hong Kong",
			flag: "🇭🇰"
		},
		{
			code: "+36",
			country: "Hungary",
			flag: "🇭🇺"
		},
		{
			code: "+354",
			country: "Iceland",
			flag: "🇮🇸"
		},
		{
			code: "+62",
			country: "Indonesia",
			flag: "🇮🇩"
		},
		{
			code: "+98",
			country: "Iran",
			flag: "🇮🇷"
		},
		{
			code: "+964",
			country: "Iraq",
			flag: "🇮🇶"
		},
		{
			code: "+353",
			country: "Ireland",
			flag: "🇮🇪"
		},
		{
			code: "+972",
			country: "Israel",
			flag: "🇮🇱"
		},
		{
			code: "+39",
			country: "Italy",
			flag: "🇮🇹"
		},
		{
			code: "+225",
			country: "Ivory Coast",
			flag: "🇨🇮"
		},
		{
			code: "+81",
			country: "Japan",
			flag: "🇯🇵"
		},
		{
			code: "+7-KZ",
			country: "Kazakhstan",
			flag: "🇰🇿",
			actualCode: "+7"
		},
		{
			code: "+254",
			country: "Kenya",
			flag: "🇰🇪"
		},
		{
			code: "+383",
			country: "Kosovo",
			flag: "🇽🇰"
		},
		{
			code: "+996",
			country: "Kyrgyzstan",
			flag: "🇰🇬"
		},
		{
			code: "+856",
			country: "Laos",
			flag: "🇱🇦"
		},
		{
			code: "+371",
			country: "Latvia",
			flag: "🇱🇻"
		},
		{
			code: "+218",
			country: "Libya",
			flag: "🇱🇾"
		},
		{
			code: "+370",
			country: "Lithuania",
			flag: "🇱🇹"
		},
		{
			code: "+352",
			country: "Luxembourg",
			flag: "🇱🇺"
		},
		{
			code: "+853",
			country: "Macao",
			flag: "🇲🇴"
		},
		{
			code: "+261",
			country: "Madagascar",
			flag: "🇲🇬"
		},
		{
			code: "+265",
			country: "Malawi",
			flag: "🇲🇼"
		},
		{
			code: "+60",
			country: "Malaysia",
			flag: "🇲🇾"
		},
		{
			code: "+960",
			country: "Maldives",
			flag: "🇲🇻"
		},
		{
			code: "+223",
			country: "Mali",
			flag: "🇲🇱"
		},
		{
			code: "+356",
			country: "Malta",
			flag: "🇲🇹"
		},
		{
			code: "+222",
			country: "Mauritania",
			flag: "🇲🇷"
		},
		{
			code: "+230",
			country: "Mauritius",
			flag: "🇲🇺"
		},
		{
			code: "+52",
			country: "Mexico",
			flag: "🇲🇽"
		},
		{
			code: "+373",
			country: "Moldova",
			flag: "🇲🇩"
		},
		{
			code: "+377",
			country: "Monaco",
			flag: "🇲🇨"
		},
		{
			code: "+976",
			country: "Mongolia",
			flag: "🇲🇳"
		},
		{
			code: "+382",
			country: "Montenegro",
			flag: "🇲🇪"
		},
		{
			code: "+212",
			country: "Morocco",
			flag: "🇲🇦"
		},
		{
			code: "+258",
			country: "Mozambique",
			flag: "🇲🇿"
		},
		{
			code: "+95",
			country: "Myanmar",
			flag: "🇲🇲"
		},
		{
			code: "+264",
			country: "Namibia",
			flag: "🇳🇦"
		},
		{
			code: "+977",
			country: "Nepal",
			flag: "🇳🇵"
		},
		{
			code: "+31",
			country: "Netherlands",
			flag: "🇳🇱"
		},
		{
			code: "+64",
			country: "New Zealand",
			flag: "🇳🇿"
		},
		{
			code: "+505",
			country: "Nicaragua",
			flag: "🇳🇮"
		},
		{
			code: "+227",
			country: "Niger",
			flag: "🇳🇪"
		},
		{
			code: "+234",
			country: "Nigeria",
			flag: "🇳🇬"
		},
		{
			code: "+47",
			country: "Norway",
			flag: "🇳🇴"
		},
		{
			code: "+970",
			country: "Palestine",
			flag: "🇵🇸"
		},
		{
			code: "+507",
			country: "Panama",
			flag: "🇵🇦"
		},
		{
			code: "+595",
			country: "Paraguay",
			flag: "🇵🇾"
		},
		{
			code: "+51",
			country: "Peru",
			flag: "🇵🇪"
		},
		{
			code: "+48",
			country: "Poland",
			flag: "🇵🇱"
		},
		{
			code: "+351",
			country: "Portugal",
			flag: "🇵🇹"
		},
		{
			code: "+40",
			country: "Romania",
			flag: "🇷🇴"
		},
		{
			code: "+7",
			country: "Russia",
			flag: "🇷🇺"
		},
		{
			code: "+250",
			country: "Rwanda",
			flag: "🇷🇼"
		},
		{
			code: "+378",
			country: "San Marino",
			flag: "🇸🇲"
		},
		{
			code: "+221",
			country: "Senegal",
			flag: "🇸🇳"
		},
		{
			code: "+381",
			country: "Serbia",
			flag: "🇷🇸"
		},
		{
			code: "+248",
			country: "Seychelles",
			flag: "🇸🇨"
		},
		{
			code: "+232",
			country: "Sierra Leone",
			flag: "🇸🇱"
		},
		{
			code: "+65",
			country: "Singapore",
			flag: "🇸🇬"
		},
		{
			code: "+421",
			country: "Slovakia",
			flag: "🇸🇰"
		},
		{
			code: "+386",
			country: "Slovenia",
			flag: "🇸🇮"
		},
		{
			code: "+252",
			country: "Somalia",
			flag: "🇸🇴"
		},
		{
			code: "+27",
			country: "South Africa",
			flag: "🇿🇦"
		},
		{
			code: "+82",
			country: "South Korea",
			flag: "🇰🇷"
		},
		{
			code: "+34",
			country: "Spain",
			flag: "🇪🇸"
		},
		{
			code: "+249",
			country: "Sudan",
			flag: "🇸🇩"
		},
		{
			code: "+46",
			country: "Sweden",
			flag: "🇸🇪"
		},
		{
			code: "+41",
			country: "Switzerland",
			flag: "🇨🇭"
		},
		{
			code: "+963",
			country: "Syria",
			flag: "🇸🇾"
		},
		{
			code: "+886",
			country: "Taiwan",
			flag: "🇹🇼"
		},
		{
			code: "+992",
			country: "Tajikistan",
			flag: "🇹🇯"
		},
		{
			code: "+255",
			country: "Tanzania",
			flag: "🇹🇿"
		},
		{
			code: "+66",
			country: "Thailand",
			flag: "🇹🇭"
		},
		{
			code: "+216",
			country: "Tunisia",
			flag: "🇹🇳"
		},
		{
			code: "+90",
			country: "Turkey",
			flag: "🇹🇷"
		},
		{
			code: "+993",
			country: "Turkmenistan",
			flag: "🇹🇲"
		},
		{
			code: "+256",
			country: "Uganda",
			flag: "🇺🇬"
		},
		{
			code: "+380",
			country: "Ukraine",
			flag: "🇺🇦"
		},
		{
			code: "+598",
			country: "Uruguay",
			flag: "🇺🇾"
		},
		{
			code: "+998",
			country: "Uzbekistan",
			flag: "🇺🇿"
		},
		{
			code: "+58",
			country: "Venezuela",
			flag: "🇻🇪"
		},
		{
			code: "+84",
			country: "Vietnam",
			flag: "🇻🇳"
		},
		{
			code: "+967",
			country: "Yemen",
			flag: "🇾🇪"
		},
		{
			code: "+260",
			country: "Zambia",
			flag: "🇿🇲"
		},
		{
			code: "+263",
			country: "Zimbabwe",
			flag: "🇿🇼"
		}
	];
	let fFirstName = state("");
	let fLastName = state("");
	let fSalesmanId = state("");
	let fCountryCode = state("+973");
	let fPhone = state("");
	let fEmail = state("");
	let fNationality = state("");
	let fAddress = state("");
	let approvingId = state(null);
	function parsePhoneNumber(phoneStr) {
		if (!phoneStr) return {
			code: "+973",
			phone: ""
		};
		const trimmed = phoneStr.trim();
		const matched = COUNTRY_CODES.find((c) => trimmed.startsWith(c.code));
		if (matched) return {
			code: matched.code,
			phone: trimmed.slice(matched.code.length).trim()
		};
		return {
			code: "+973",
			phone: trimmed
		};
	}
	let filteredAgents = user_derived(() => get(agents).filter((a) => {
		if (!get(searchVal).trim()) return true;
		const q = get(searchVal).toLowerCase();
		const salesmanName = getSalesmanName(a.salesmanId).toLowerCase();
		return a.fullName.toLowerCase().includes(q) || a.emailId?.toLowerCase().includes(q) || a.phoneNo?.includes(q) || String(a.salesmanId).includes(q) || salesmanName.includes(q);
	}));
	async function loadAgents() {
		set(loadingAgents, true);
		try {
			set(agents, await apiFetch("api/agent") || [], true);
		} catch (err) {
			toast.error(err.message || "Failed to load agents.");
		} finally {
			set(loadingAgents, false);
		}
	}
	async function loadPending() {
		set(loadingPending, true);
		try {
			set(pending, await apiFetch("api/pending-approvals?entityType=agent&status=pending") || [], true);
		} catch (err) {
			toast.error(err.message || "Failed to load pending requests.");
		} finally {
			set(loadingPending, false);
		}
	}
	async function loadSalesmen() {
		set(loadingSalesmen, true);
		try {
			set(salesmen, await apiFetch("api/sales-entries/salesmen") || [], true);
		} catch (err) {
			toast.error(err.message || "Failed to load salesmen.");
		} finally {
			set(loadingSalesmen, false);
		}
	}
	function getSalesmanName(id) {
		if (!id) return "";
		const found = get(salesmen).find((sm) => sm.id === id);
		return found ? found.name : `Salesman #${id}`;
	}
	async function handleSubmit(e) {
		e.preventDefault();
		if (!get(fFirstName).trim() || !get(fLastName).trim()) {
			toast.error("First and last name are required.");
			return;
		}
		set(isSaving, true);
		const isMaster = hasRole("master_accountant");
		const fullPhone = get(fPhone).trim() ? `${get(fCountryCode)} ${get(fPhone).trim()}` : null;
		try {
			if (get(isEditing) && get(editingId) !== null) {
				await apiFetch(`api/agent/${get(editingId)}`, {
					method: "PUT",
					body: JSON.stringify({
						firstName: get(fFirstName).trim(),
						lastName: get(fLastName).trim(),
						phoneNo: fullPhone,
						emailId: get(fEmail).trim() || null,
						nationality: get(fNationality).trim() || null,
						address: get(fAddress).trim() || null
					}),
					headers: { "Content-Type": "application/json" }
				});
				toast.success("Agent updated successfully.");
				resetForm();
				await loadAgents();
			} else if (isMaster) {
				await apiFetch("api/agent", {
					method: "POST",
					body: JSON.stringify({
						firstName: get(fFirstName).trim(),
						lastName: get(fLastName).trim(),
						salesmanId: get(fSalesmanId) ? parseInt(get(fSalesmanId), 10) : null,
						phoneNo: fullPhone,
						emailId: get(fEmail).trim() || null,
						nationality: get(fNationality).trim() || null,
						address: get(fAddress).trim() || null
					}),
					headers: { "Content-Type": "application/json" }
				});
				toast.success("Agent registered successfully.");
				resetForm();
				await loadAgents();
			} else {
				const payload = {
					firstName: get(fFirstName).trim(),
					lastName: get(fLastName).trim(),
					salesmanId: get(fSalesmanId) ? parseInt(get(fSalesmanId), 10) : null,
					phoneNo: fullPhone,
					emailId: get(fEmail).trim() || null,
					nationality: get(fNationality).trim() || null,
					address: get(fAddress).trim() || null
				};
				await apiFetch("api/pending-approvals", {
					method: "POST",
					body: JSON.stringify({
						entityType: "agent",
						payloadJson: JSON.stringify(payload),
						submittedByName: $currentUser()?.name ?? "Accountant"
					}),
					headers: { "Content-Type": "application/json" }
				});
				toast.success("Agent registration submitted for master accountant approval.");
				resetForm();
				await loadPending();
			}
		} catch (err) {
			toast.error(err.message || "Failed to save agent.");
		} finally {
			set(isSaving, false);
		}
	}
	async function approveAgent(item) {
		set(approvingId, item.id, true);
		try {
			await apiFetch(`api/pending-approvals/${item.id}/approve`, { method: "POST" });
			toast.success("Agent approved and registered.");
			await Promise.all([loadAgents(), loadPending()]);
		} catch (err) {
			toast.error(err.message || "Approval failed.");
		} finally {
			set(approvingId, null);
		}
	}
	async function rejectAgent(item) {
		set(approvingId, item.id, true);
		try {
			await apiFetch(`api/pending-approvals/${item.id}/reject`, { method: "POST" });
			toast.success("Request rejected.");
			await loadPending();
		} catch (err) {
			toast.error(err.message || "Rejection failed.");
		} finally {
			set(approvingId, null);
		}
	}
	function startEdit(a) {
		set(isEditing, true);
		set(editingId, a.id, true);
		set(showForm, true);
		set(fFirstName, a.firstName, true);
		set(fLastName, a.lastName, true);
		set(fSalesmanId, a.salesmanId ? String(a.salesmanId) : "", true);
		const parsedPhone = parsePhoneNumber(a.phoneNo);
		set(fCountryCode, parsedPhone.code, true);
		set(fPhone, parsedPhone.phone, true);
		set(fEmail, a.emailId ?? "", true);
		set(fNationality, a.nationality ?? "", true);
		set(fAddress, a.address ?? "", true);
	}
	function resetForm() {
		set(showForm, false);
		set(isEditing, false);
		set(editingId, null);
		set(fFirstName, "");
		set(fLastName, "");
		set(fSalesmanId, "");
		set(fCountryCode, "+973");
		set(fPhone, "");
		set(fEmail, "");
		set(fNationality, "");
		set(fAddress, "");
	}
	onMount(() => {
		loadAgents();
		loadPending();
		loadSalesmen();
	});
	var div = root_37();
	head("2504y", ($$anchor) => {
		effect(() => {
			$document.title = "Agent Accounts — Accounts Portal";
		});
	});
	var div_1 = child(div);
	var div_2 = child(div_1);
	var h1 = child(div_2);
	User_check(child(h1), { class: "h-5 w-5 text-primary" });
	next();
	reset(h1);
	next(2);
	reset(div_2);
	var div_3 = sibling(div_2, 2);
	var node_1 = child(div_3);
	Button(node_1, {
		onclick: () => {
			set(showForm, !get(showForm));
			if (!get(showForm)) resetForm();
		},
		class: "h-8.5 rounded-xl cursor-pointer flex items-center gap-1.5 text-xs font-semibold",
		children: ($$anchor, $$slotProps) => {
			var fragment = comment();
			var node_2 = first_child(fragment);
			var consequent = ($$anchor) => {
				var fragment_1 = root();
				X(first_child(fragment_1), { class: "h-3.5 w-3.5" });
				next();
				append($$anchor, fragment_1);
			};
			var alternate = ($$anchor) => {
				var fragment_2 = root_1();
				var node_4 = first_child(fragment_2);
				Plus(node_4, { class: "h-3.5 w-3.5" });
				var text = sibling(node_4);
				template_effect(($0) => set_text(text, ` ${$0 ?? ""}`), [() => hasRole("master_accountant") ? "Register Agent" : "Submit Agent Request"]);
				append($$anchor, fragment_2);
			};
			if_block(node_2, ($$render) => {
				if (get(showForm)) $$render(consequent);
				else $$render(alternate, -1);
			});
			append($$anchor, fragment);
		},
		$$slots: { default: true }
	});
	Button(sibling(node_1, 2), {
		variant: "outline",
		class: "h-8.5 rounded-xl cursor-pointer flex items-center gap-1.5 text-xs font-semibold",
		onclick: () => {
			loadAgents();
			loadPending();
		},
		get disabled() {
			return get(loadingAgents);
		},
		children: ($$anchor, $$slotProps) => {
			var fragment_3 = root_2();
			var node_6 = first_child(fragment_3);
			{
				let $0 = user_derived(() => get(loadingAgents) ? "animate-spin" : "");
				Refresh_cw(node_6, { get class() {
					return `h-3.5 w-3.5 ${get($0) ?? ""}`;
				} });
			}
			next();
			append($$anchor, fragment_3);
		},
		$$slots: { default: true }
	});
	reset(div_3);
	reset(div_1);
	var node_7 = sibling(div_1, 2);
	var consequent_1 = ($$anchor) => {
		var div_4 = root_3();
		var node_8 = child(div_4);
		Clock(node_8, { class: "h-4 w-4 shrink-0 mt-0.5 text-amber-600" });
		var div_5 = sibling(node_8, 2);
		var span = child(div_5);
		var text_1 = child(span);
		reset(span);
		next(2);
		reset(div_5);
		reset(div_4);
		template_effect(() => set_text(text_1, `${get(pending).length ?? ""} agent ${get(pending).length === 1 ? "request" : "requests"} awaiting master accountant approval.`));
		append($$anchor, div_4);
	};
	var d = user_derived(() => !hasRole("master_accountant") && get(pending).length > 0);
	if_block(node_7, ($$render) => {
		if (get(d)) $$render(consequent_1);
	});
	var node_9 = sibling(node_7, 2);
	var consequent_9 = ($$anchor) => {
		var div_6 = root_9();
		var h2 = child(div_6);
		var node_10 = child(h2);
		var consequent_2 = ($$anchor) => {
			var text_2 = text();
			template_effect(() => set_text(text_2, `Editing Agent — ${get(fFirstName) ?? ""} ${get(fLastName) ?? ""}`));
			append($$anchor, text_2);
		};
		var consequent_3 = ($$anchor) => {
			append($$anchor, text("Register New Agent"));
		};
		var d_1 = user_derived(() => hasRole("master_accountant"));
		var alternate_1 = ($$anchor) => {
			append($$anchor, text("Submit Agent Registration Request"));
		};
		if_block(node_10, ($$render) => {
			if (get(isEditing)) $$render(consequent_2);
			else if (get(d_1)) $$render(consequent_3, 1);
			else $$render(alternate_1, -1);
		});
		reset(h2);
		var node_11 = sibling(h2, 2);
		var consequent_4 = ($$anchor) => {
			var p_1 = root_4();
			Triangle_alert(child(p_1), { class: "h-3.5 w-3.5 shrink-0" });
			next();
			reset(p_1);
			append($$anchor, p_1);
		};
		var d_2 = user_derived(() => !get(isEditing) && !hasRole("master_accountant"));
		var alternate_2 = ($$anchor) => {
			append($$anchor, root_5());
		};
		if_block(node_11, ($$render) => {
			if (get(d_2)) $$render(consequent_4);
			else $$render(alternate_2, -1);
		});
		var form = sibling(node_11, 2);
		var div_8 = child(form);
		var div_9 = child(div_8);
		Input(sibling(child(div_9), 2), {
			id: "a-firstname",
			type: "text",
			required: true,
			placeholder: "e.g. Ali",
			get value() {
				return get(fFirstName);
			},
			set value($$value) {
				set(fFirstName, $$value, true);
			}
		});
		reset(div_9);
		var div_10 = sibling(div_9, 2);
		Input(sibling(child(div_10), 2), {
			id: "a-lastname",
			type: "text",
			required: true,
			placeholder: "e.g. Hassan",
			get value() {
				return get(fLastName);
			},
			set value($$value) {
				set(fLastName, $$value, true);
			}
		});
		reset(div_10);
		var div_11 = sibling(div_10, 2);
		var label = child(div_11);
		var node_15 = sibling(child(label));
		var consequent_5 = ($$anchor) => {
			append($$anchor, root_6());
		};
		if_block(node_15, ($$render) => {
			if (get(isEditing)) $$render(consequent_5);
		});
		reset(label);
		var select = sibling(label, 2);
		var option = child(select);
		option.value = option.__value = "";
		each(sibling(option), 17, () => get(salesmen), index, ($$anchor, sm) => {
			var option_1 = root_7();
			var text_5 = child(option_1);
			reset(option_1);
			var option_1_value = {};
			template_effect(($0) => {
				set_text(text_5, `${get(sm).name ?? ""} (${get(sm).email ?? ""})`);
				if (option_1_value !== (option_1_value = $0)) option_1.value = (option_1.__value = $0) ?? "";
			}, [() => String(get(sm).id)]);
			append($$anchor, option_1);
		});
		reset(select);
		reset(div_11);
		var div_12 = sibling(div_11, 2);
		var div_13 = sibling(child(div_12), 2);
		var select_1 = child(div_13);
		each(select_1, 21, () => COUNTRY_CODES, index, ($$anchor, c) => {
			var option_2 = root_7();
			var text_6 = child(option_2);
			reset(option_2);
			var option_2_value = {};
			template_effect(() => {
				set_text(text_6, `${get(c).flag ?? ""} ${(get(c).actualCode || get(c).code) ?? ""} (${get(c).country ?? ""})`);
				if (option_2_value !== (option_2_value = get(c).actualCode || get(c).code)) option_2.value = (option_2.__value = get(c).actualCode || get(c).code) ?? "";
			});
			append($$anchor, option_2);
		});
		reset(select_1);
		Input(sibling(select_1, 2), {
			id: "a-phone",
			type: "text",
			placeholder: "39 000 000",
			class: "flex-1 font-mono",
			get value() {
				return get(fPhone);
			},
			set value($$value) {
				set(fPhone, $$value, true);
			}
		});
		reset(div_13);
		reset(div_12);
		var div_14 = sibling(div_12, 2);
		Input(sibling(child(div_14), 2), {
			id: "a-email",
			type: "email",
			placeholder: "agent@example.com",
			get value() {
				return get(fEmail);
			},
			set value($$value) {
				set(fEmail, $$value, true);
			}
		});
		reset(div_14);
		var div_15 = sibling(div_14, 2);
		Input(sibling(child(div_15), 2), {
			id: "a-nationality",
			type: "text",
			placeholder: "e.g. Pakistani",
			get value() {
				return get(fNationality);
			},
			set value($$value) {
				set(fNationality, $$value, true);
			}
		});
		reset(div_15);
		var div_16 = sibling(div_15, 2);
		Input(sibling(child(div_16), 2), {
			id: "a-address",
			type: "text",
			placeholder: "Full mailing address",
			get value() {
				return get(fAddress);
			},
			set value($$value) {
				set(fAddress, $$value, true);
			}
		});
		reset(div_16);
		reset(div_8);
		var div_17 = sibling(div_8, 2);
		var node_21 = child(div_17);
		{
			let $0 = user_derived(() => get(isSaving) || !get(fFirstName).trim() || !get(fLastName).trim());
			Button(node_21, {
				type: "submit",
				get disabled() {
					return get($0);
				},
				class: "rounded-xl font-semibold text-xs px-5",
				children: ($$anchor, $$slotProps) => {
					var fragment_5 = root_8();
					var node_22 = first_child(fragment_5);
					var consequent_6 = ($$anchor) => {
						Refresh_cw($$anchor, { class: "h-3.5 w-3.5 mr-1.5 animate-spin" });
					};
					if_block(node_22, ($$render) => {
						if (get(isSaving)) $$render(consequent_6);
					});
					var node_23 = sibling(node_22, 2);
					var consequent_7 = ($$anchor) => {
						append($$anchor, text("Save Changes"));
					};
					var consequent_8 = ($$anchor) => {
						append($$anchor, text("Register Agent"));
					};
					var d_3 = user_derived(() => hasRole("master_accountant"));
					var alternate_3 = ($$anchor) => {
						append($$anchor, text("Submit for Approval"));
					};
					if_block(node_23, ($$render) => {
						if (get(isEditing)) $$render(consequent_7);
						else if (get(d_3)) $$render(consequent_8, 1);
						else $$render(alternate_3, -1);
					});
					append($$anchor, fragment_5);
				},
				$$slots: { default: true }
			});
		}
		Button(sibling(node_21, 2), {
			type: "button",
			variant: "outline",
			onclick: resetForm,
			class: "rounded-xl text-xs",
			children: ($$anchor, $$slotProps) => {
				next();
				append($$anchor, text("Cancel"));
			},
			$$slots: { default: true }
		});
		reset(div_17);
		reset(form);
		reset(div_6);
		template_effect(() => select.disabled = get(isEditing));
		event("submit", form, handleSubmit);
		bind_select_value(select, () => get(fSalesmanId), ($$value) => set(fSalesmanId, $$value));
		bind_select_value(select_1, () => get(fCountryCode), ($$value) => set(fCountryCode, $$value));
		append($$anchor, div_6);
	};
	if_block(node_9, ($$render) => {
		if (get(showForm)) $$render(consequent_9);
	});
	var div_18 = sibling(node_9, 2);
	var button = child(div_18);
	var text_11 = child(button);
	reset(button);
	var button_1 = sibling(button, 2);
	var node_25 = sibling(child(button_1));
	var consequent_10 = ($$anchor) => {
		var span_2 = root_10();
		var text_12 = child(span_2, true);
		reset(span_2);
		template_effect(() => set_text(text_12, get(pending).length));
		append($$anchor, span_2);
	};
	if_block(node_25, ($$render) => {
		if (get(pending).length > 0) $$render(consequent_10);
	});
	reset(button_1);
	reset(div_18);
	var node_26 = sibling(div_18, 2);
	var consequent_19 = ($$anchor) => {
		var fragment_7 = comment();
		var node_27 = first_child(fragment_7);
		var consequent_11 = ($$anchor) => {
			var div_19 = root_11();
			Refresh_cw(child(div_19), { class: "h-7 w-7 text-primary animate-spin" });
			reset(div_19);
			append($$anchor, div_19);
		};
		var consequent_12 = ($$anchor) => {
			var div_20 = root_12();
			Shield_check(child(div_20), { class: "h-10 w-10 mx-auto mb-3 text-emerald-400 opacity-60" });
			next();
			reset(div_20);
			append($$anchor, div_20);
		};
		var alternate_6 = ($$anchor) => {
			var div_21 = root_20();
			var div_22 = child(div_21);
			var h2_1 = child(div_22);
			Clock(child(h2_1), { class: "h-3.5 w-3.5" });
			next();
			reset(h2_1);
			reset(div_22);
			var div_23 = sibling(div_22, 2);
			each(div_23, 21, () => get(pending), index, ($$anchor, item) => {
				const p = user_derived(() => JSON.parse(get(item).payloadJson));
				var div_24 = root_19();
				var div_25 = child(div_24);
				var div_26 = child(div_25);
				var span_3 = child(div_26);
				var text_13 = child(span_3);
				reset(span_3);
				var node_31 = sibling(span_3, 2);
				var consequent_13 = ($$anchor) => {
					var span_4 = root_13();
					var node_32 = child(span_4);
					User_check(node_32, { class: "h-3 w-3" });
					var text_14 = sibling(node_32);
					reset(span_4);
					template_effect(() => set_text(text_14, ` #${get(p).salesmanId ?? ""}`));
					append($$anchor, span_4);
				};
				if_block(node_31, ($$render) => {
					if (get(p).salesmanId) $$render(consequent_13);
				});
				reset(div_26);
				var div_27 = sibling(div_26, 2);
				var node_33 = child(div_27);
				var consequent_14 = ($$anchor) => {
					var span_5 = root_14();
					var node_34 = child(span_5);
					Phone(node_34, { class: "h-3 w-3" });
					var text_15 = sibling(node_34, 1, true);
					reset(span_5);
					template_effect(() => set_text(text_15, get(p).phoneNo));
					append($$anchor, span_5);
				};
				if_block(node_33, ($$render) => {
					if (get(p).phoneNo) $$render(consequent_14);
				});
				var node_35 = sibling(node_33, 2);
				var consequent_15 = ($$anchor) => {
					var span_6 = root_14();
					var node_36 = child(span_6);
					Mail(node_36, { class: "h-3 w-3" });
					var text_16 = sibling(node_36, 1, true);
					reset(span_6);
					template_effect(() => set_text(text_16, get(p).emailId));
					append($$anchor, span_6);
				};
				if_block(node_35, ($$render) => {
					if (get(p).emailId) $$render(consequent_15);
				});
				var node_37 = sibling(node_35, 2);
				var consequent_16 = ($$anchor) => {
					var span_7 = root_14();
					var node_38 = child(span_7);
					Globe(node_38, { class: "h-3 w-3" });
					var text_17 = sibling(node_38, 1, true);
					reset(span_7);
					template_effect(() => set_text(text_17, get(p).nationality));
					append($$anchor, span_7);
				};
				if_block(node_37, ($$render) => {
					if (get(p).nationality) $$render(consequent_16);
				});
				reset(div_27);
				var div_28 = sibling(div_27, 2);
				var node_39 = child(div_28);
				Clock(node_39, { class: "h-3 w-3" });
				var strong = sibling(node_39, 2);
				var text_18 = child(strong, true);
				reset(strong);
				DateDisplay(sibling(strong, 2), { get value() {
					return get(item).submittedAt;
				} });
				reset(div_28);
				reset(div_25);
				var node_41 = sibling(div_25, 2);
				var consequent_18 = ($$anchor) => {
					var div_29 = root_17();
					var node_42 = child(div_29);
					{
						let $0 = user_derived(() => get(approvingId) === get(item).id);
						Button(node_42, {
							onclick: () => approveAgent(get(item)),
							get disabled() {
								return get($0);
							},
							class: "rounded-xl h-8 text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white gap-1.5 cursor-pointer",
							children: ($$anchor, $$slotProps) => {
								var fragment_8 = root_15();
								var node_43 = first_child(fragment_8);
								var consequent_17 = ($$anchor) => {
									Refresh_cw($$anchor, { class: "h-3 w-3 animate-spin" });
								};
								var alternate_4 = ($$anchor) => {
									Check($$anchor, { class: "h-3 w-3" });
								};
								if_block(node_43, ($$render) => {
									if (get(approvingId) === get(item).id) $$render(consequent_17);
									else $$render(alternate_4, -1);
								});
								next();
								append($$anchor, fragment_8);
							},
							$$slots: { default: true }
						});
					}
					var node_44 = sibling(node_42, 2);
					{
						let $0 = user_derived(() => get(approvingId) === get(item).id);
						Button(node_44, {
							variant: "outline",
							onclick: () => rejectAgent(get(item)),
							get disabled() {
								return get($0);
							},
							class: "rounded-xl h-8 text-xs font-semibold border-red-200 text-red-600 hover:bg-red-50 gap-1.5 cursor-pointer",
							children: ($$anchor, $$slotProps) => {
								var fragment_11 = root_16();
								Trash_2(first_child(fragment_11), { class: "h-3 w-3" });
								next();
								append($$anchor, fragment_11);
							},
							$$slots: { default: true }
						});
					}
					reset(div_29);
					append($$anchor, div_29);
				};
				var d_4 = user_derived(() => hasRole("master_accountant"));
				var alternate_5 = ($$anchor) => {
					var span_8 = root_18();
					Clock(child(span_8), { class: "h-3 w-3" });
					next();
					reset(span_8);
					append($$anchor, span_8);
				};
				if_block(node_41, ($$render) => {
					if (get(d_4)) $$render(consequent_18);
					else $$render(alternate_5, -1);
				});
				reset(div_24);
				template_effect(() => {
					set_text(text_13, `${get(p).firstName ?? ""} ${get(p).lastName ?? ""}`);
					set_text(text_18, get(item).submittedByName);
				});
				append($$anchor, div_24);
			});
			reset(div_23);
			reset(div_21);
			append($$anchor, div_21);
		};
		if_block(node_27, ($$render) => {
			if (get(loadingPending)) $$render(consequent_11);
			else if (get(pending).length === 0) $$render(consequent_12, 1);
			else $$render(alternate_6, -1);
		});
		append($$anchor, fragment_7);
	};
	if_block(node_26, ($$render) => {
		if (get(activeTab) === "pending") $$render(consequent_19);
	});
	var node_47 = sibling(node_26, 2);
	var consequent_31 = ($$anchor) => {
		var fragment_12 = root_36();
		var div_30 = first_child(fragment_12);
		var div_31 = child(div_30);
		var node_48 = child(div_31);
		Search(node_48, { class: "absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/60" });
		var input = sibling(node_48, 2);
		remove_input_defaults(input);
		reset(div_31);
		reset(div_30);
		var node_49 = sibling(div_30, 2);
		var consequent_20 = ($$anchor) => {
			var div_32 = root_21();
			Refresh_cw(child(div_32), { class: "h-8 w-8 text-primary animate-spin" });
			reset(div_32);
			append($$anchor, div_32);
		};
		var consequent_21 = ($$anchor) => {
			var div_33 = root_22();
			var text_19 = child(div_33, true);
			reset(div_33);
			template_effect(() => set_text(text_19, get(searchVal) ? `No agents matching "${get(searchVal)}".` : "No agents registered yet."));
			append($$anchor, div_33);
		};
		var alternate_10 = ($$anchor) => {
			var div_34 = root_35();
			var table = child(div_34);
			var thead = child(table);
			var tr = child(thead);
			var node_51 = sibling(child(tr), 8);
			var consequent_22 = ($$anchor) => {
				append($$anchor, root_23());
			};
			var d_5 = user_derived(() => hasRole("master_accountant"));
			if_block(node_51, ($$render) => {
				if (get(d_5)) $$render(consequent_22);
			});
			reset(tr);
			reset(thead);
			var tbody = sibling(thead);
			each(tbody, 21, () => get(filteredAgents), index, ($$anchor, agent) => {
				var tr_1 = root_34();
				var td = child(tr_1);
				var text_20 = child(td);
				reset(td);
				var td_1 = sibling(td);
				var span_9 = child(td_1);
				var text_21 = child(span_9, true);
				reset(span_9);
				var node_52 = sibling(span_9, 2);
				var consequent_23 = ($$anchor) => {
					var span_10 = root_24();
					var text_22 = child(span_10, true);
					reset(span_10);
					template_effect(() => set_text(text_22, get(agent).address));
					append($$anchor, span_10);
				};
				if_block(node_52, ($$render) => {
					if (get(agent).address) $$render(consequent_23);
				});
				reset(td_1);
				var td_2 = sibling(td_1);
				var node_53 = child(td_2);
				var consequent_24 = ($$anchor) => {
					var span_11 = root_25();
					var node_54 = child(span_11);
					User_check(node_54, { class: "h-3 w-3" });
					var text_23 = sibling(node_54, 1, true);
					reset(span_11);
					template_effect(($0) => set_text(text_23, $0), [() => getSalesmanName(get(agent).salesmanId)]);
					append($$anchor, span_11);
				};
				var alternate_7 = ($$anchor) => {
					append($$anchor, root_26());
				};
				if_block(node_53, ($$render) => {
					if (get(agent).salesmanId) $$render(consequent_24);
					else $$render(alternate_7, -1);
				});
				reset(td_2);
				var td_3 = sibling(td_2);
				var node_55 = child(td_3);
				var consequent_25 = ($$anchor) => {
					var div_35 = root_27();
					var node_56 = child(div_35);
					Phone(node_56, { class: "h-3 w-3 shrink-0" });
					var span_13 = sibling(node_56);
					var text_24 = child(span_13, true);
					reset(span_13);
					reset(div_35);
					template_effect(() => set_text(text_24, get(agent).phoneNo));
					append($$anchor, div_35);
				};
				if_block(node_55, ($$render) => {
					if (get(agent).phoneNo) $$render(consequent_25);
				});
				var node_57 = sibling(node_55, 2);
				var consequent_26 = ($$anchor) => {
					var div_36 = root_28();
					var node_58 = child(div_36);
					Mail(node_58, { class: "h-3 w-3 shrink-0" });
					var span_14 = sibling(node_58);
					var text_25 = child(span_14, true);
					reset(span_14);
					reset(div_36);
					template_effect(() => set_text(text_25, get(agent).emailId));
					append($$anchor, div_36);
				};
				if_block(node_57, ($$render) => {
					if (get(agent).emailId) $$render(consequent_26);
				});
				var node_59 = sibling(node_57, 2);
				var consequent_27 = ($$anchor) => {
					append($$anchor, root_29());
				};
				if_block(node_59, ($$render) => {
					if (!get(agent).phoneNo && !get(agent).emailId) $$render(consequent_27);
				});
				reset(td_3);
				var td_4 = sibling(td_3);
				var node_60 = child(td_4);
				var consequent_28 = ($$anchor) => {
					var div_37 = root_30();
					var node_61 = child(div_37);
					Globe(node_61, { class: "h-3 w-3 shrink-0" });
					var text_26 = sibling(node_61, 1, true);
					reset(div_37);
					template_effect(() => set_text(text_26, get(agent).nationality));
					append($$anchor, div_37);
				};
				var alternate_8 = ($$anchor) => {
					append($$anchor, root_29());
				};
				if_block(node_60, ($$render) => {
					if (get(agent).nationality) $$render(consequent_28);
					else $$render(alternate_8, -1);
				});
				reset(td_4);
				var td_5 = sibling(td_4);
				var div_38 = child(td_5);
				var node_62 = child(div_38);
				Wallet(node_62, { class: "h-3 w-3 text-emerald-500" });
				MoneyDisplay(sibling(node_62), { get amount() {
					return get(agent).wallet;
				} });
				reset(div_38);
				reset(td_5);
				var td_6 = sibling(td_5);
				var node_64 = child(td_6);
				var consequent_29 = ($$anchor) => {
					var span_17 = root_31();
					Shield_check(child(span_17), { class: "h-3 w-3" });
					next();
					reset(span_17);
					append($$anchor, span_17);
				};
				var alternate_9 = ($$anchor) => {
					append($$anchor, root_32());
				};
				if_block(node_64, ($$render) => {
					if (get(agent).isVerified) $$render(consequent_29);
					else $$render(alternate_9, -1);
				});
				reset(td_6);
				var td_7 = sibling(td_6);
				DateDisplay(child(td_7), { get value() {
					return get(agent).createdAt;
				} });
				reset(td_7);
				var node_67 = sibling(td_7);
				var consequent_30 = ($$anchor) => {
					var td_8 = root_33();
					var div_39 = child(td_8);
					var a_1 = child(div_39);
					Plus(child(a_1), { class: "h-3.5 w-3.5" });
					reset(a_1);
					var button_2 = sibling(a_1, 2);
					Pencil(child(button_2), { class: "h-3.5 w-3.5" });
					reset(button_2);
					reset(div_39);
					reset(td_8);
					template_effect(() => set_attribute(a_1, "href", `/sales/receipts/new-client?clientType=agent&agentId=${get(agent).id ?? ""}&salesmanId=${(get(agent).salesmanId || "") ?? ""}`));
					delegated("click", button_2, () => startEdit(get(agent)));
					append($$anchor, td_8);
				};
				var d_6 = user_derived(() => hasRole("master_accountant"));
				if_block(node_67, ($$render) => {
					if (get(d_6)) $$render(consequent_30);
				});
				reset(tr_1);
				template_effect(() => {
					set_text(text_20, `#${get(agent).id ?? ""}`);
					set_text(text_21, get(agent).fullName);
				});
				append($$anchor, tr_1);
			});
			reset(tbody);
			reset(table);
			var div_40 = sibling(table, 2);
			var span_19 = child(div_40);
			var strong_1 = sibling(child(span_19));
			var text_27 = child(strong_1, true);
			reset(strong_1);
			var strong_2 = sibling(strong_1, 2);
			var text_28 = child(strong_2, true);
			reset(strong_2);
			next();
			reset(span_19);
			var span_20 = sibling(span_19, 2);
			var strong_3 = sibling(child(span_20));
			var node_70 = child(strong_3);
			{
				let $0 = user_derived(() => get(agents).reduce((s, a) => s + a.wallet, 0));
				MoneyDisplay(node_70, { get amount() {
					return get($0);
				} });
			}
			reset(strong_3);
			reset(span_20);
			reset(div_40);
			reset(div_34);
			template_effect(() => {
				set_text(text_27, get(filteredAgents).length);
				set_text(text_28, get(agents).length);
			});
			append($$anchor, div_34);
		};
		if_block(node_49, ($$render) => {
			if (get(loadingAgents)) $$render(consequent_20);
			else if (get(filteredAgents).length === 0) $$render(consequent_21, 1);
			else $$render(alternate_10, -1);
		});
		bind_value(input, () => get(searchVal), ($$value) => set(searchVal, $$value));
		append($$anchor, fragment_12);
	};
	if_block(node_47, ($$render) => {
		if (get(activeTab) === "list") $$render(consequent_31);
	});
	reset(div);
	template_effect(() => {
		set_class(button, 1, `px-4 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${get(activeTab) === "list" ? "bg-card text-foreground shadow-sm border border-border/30" : "text-muted-foreground hover:text-foreground"}`);
		set_text(text_11, `All Agents (${get(agents).length ?? ""})`);
		set_class(button_1, 1, `px-4 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${get(activeTab) === "pending" ? "bg-card text-foreground shadow-sm border border-border/30" : "text-muted-foreground hover:text-foreground"}`);
	});
	delegated("click", button, () => set(activeTab, "list"));
	delegated("click", button_1, () => {
		set(activeTab, "pending");
		loadPending();
	});
	append($$anchor, div);
	pop();
	$$cleanup();
}
delegate(["click"]);
//#endregion
export { _page as component };

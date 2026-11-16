//#region src/lib/types/financial.ts
var TRANSACTION_STATUS_VALUES = [
	"pending",
	"approved",
	"rejected"
];
var TRANSACTION_STATUS_CONFIG = {
	pending: {
		label: "Pending",
		tone: "pending",
		textClass: "text-amber-700 dark:text-amber-400",
		bgClass: "bg-amber-50 dark:bg-amber-950/40",
		borderClass: "border-amber-200 dark:border-amber-800"
	},
	approved: {
		label: "Approved",
		tone: "positive",
		textClass: "text-emerald-700 dark:text-emerald-400",
		bgClass: "bg-emerald-50 dark:bg-emerald-950/40",
		borderClass: "border-emerald-200 dark:border-emerald-800"
	},
	rejected: {
		label: "Rejected",
		tone: "negative",
		textClass: "text-red-700 dark:text-red-400",
		bgClass: "bg-red-50 dark:bg-red-950/40",
		borderClass: "border-red-200 dark:border-red-800"
	}
};
function getStatusConfig(status) {
	return TRANSACTION_STATUS_CONFIG[status] ?? {
		label: status,
		tone: "neutral",
		textClass: "text-muted-foreground",
		bgClass: "bg-muted/50",
		borderClass: "border-border"
	};
}
var TRANSACTION_TYPE_VALUES = [
	"incoming",
	"outgoing",
	"contra",
	"purchasereturn",
	"salesreturn",
	"walletdebit"
];
var TRANSACTION_TYPE_CONFIG = {
	incoming: {
		label: "Incoming",
		direction: "in",
		textClass: "text-emerald-600 dark:text-emerald-400"
	},
	outgoing: {
		label: "Outgoing",
		direction: "out",
		textClass: "text-red-600 dark:text-red-400"
	},
	contra: {
		label: "Contra",
		direction: "neutral",
		textClass: "text-blue-600 dark:text-blue-400"
	},
	purchasereturn: {
		label: "Purchase Return",
		direction: "in",
		textClass: "text-emerald-600 dark:text-emerald-400"
	},
	salesreturn: {
		label: "Sales Return",
		direction: "out",
		textClass: "text-orange-600 dark:text-orange-400"
	},
	walletdebit: {
		label: "Wallet Debit",
		direction: "out",
		textClass: "text-purple-600 dark:text-purple-400"
	}
};
function getTypeConfig(type) {
	return TRANSACTION_TYPE_CONFIG[type] ?? {
		label: type,
		direction: "neutral",
		textClass: "text-muted-foreground"
	};
}
var PAYMENT_METHOD_VALUES = [
	"cash",
	"bank",
	"credit",
	"banktransfer",
	"wallet"
];
var PAYMENT_METHOD_LABELS = {
	cash: "Cash",
	bank: "Bank",
	credit: "Credit",
	banktransfer: "Bank Transfer",
	wallet: "Wallet"
};
function getPaymentMethodLabel(method) {
	return PAYMENT_METHOD_LABELS[method] ?? method;
}
var REFERENCE_TYPE_VALUES = [
	"sale",
	"expense",
	"refund",
	"supplierpayment",
	"openingbalance",
	"correction",
	"transfer",
	"suppliercreditclearance",
	"supplierwallet",
	"salary",
	"advance",
	"loan"
];
var REFERENCE_TYPE_LABELS = {
	sale: "Sale",
	expense: "Expense",
	refund: "Refund",
	supplierpayment: "Supplier Payment",
	openingbalance: "Opening Balance",
	correction: "Correction",
	transfer: "Transfer",
	suppliercreditclearance: "Supplier Credit Clearance",
	supplierwallet: "Supplier Wallet",
	salary: "Salary",
	advance: "Advance",
	loan: "Loan"
};
function getReferenceTypeLabel(refType) {
	return REFERENCE_TYPE_LABELS[refType] ?? refType;
}
var ACCOUNT_TYPE_VALUES = [
	"cash",
	"bank",
	"credit"
];
var ACCOUNT_TYPE_LABELS = {
	cash: "Cash",
	bank: "Bank",
	credit: "Credit"
};
var LEDGER_TYPE_LABELS = {
	asset: "Asset",
	liability: "Liability",
	capital: "Capital",
	income: "Income",
	expense: "Expense"
};
//#endregion
export { PAYMENT_METHOD_VALUES as a, TRANSACTION_STATUS_CONFIG as c, TRANSACTION_TYPE_VALUES as d, getPaymentMethodLabel as f, getTypeConfig as h, PAYMENT_METHOD_LABELS as i, TRANSACTION_STATUS_VALUES as l, getStatusConfig as m, ACCOUNT_TYPE_VALUES as n, REFERENCE_TYPE_LABELS as o, getReferenceTypeLabel as p, LEDGER_TYPE_LABELS as r, REFERENCE_TYPE_VALUES as s, ACCOUNT_TYPE_LABELS as t, TRANSACTION_TYPE_CONFIG as u };

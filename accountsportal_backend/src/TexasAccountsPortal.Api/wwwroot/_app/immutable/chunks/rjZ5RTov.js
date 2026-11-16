//#region src/features/expenses/types.ts
function getBucketDirection(categoryBucket, supplierPaymentType) {
	if (supplierPaymentType === "supplier_refund" || supplierPaymentType === "refund") return "incoming";
	const cat = (categoryBucket || "").toLowerCase();
	if (cat === "income" || cat === "capital") return "incoming";
	return "outgoing";
}
function getBucketSourceLabel(categoryBucket, supplierPaymentType) {
	const dir = getBucketDirection(categoryBucket, supplierPaymentType);
	const cat = (categoryBucket || "").toLowerCase();
	if (dir === "incoming") return cat === "capital" ? "Deposit Into" : "Receive Into";
	return "Pay From";
}
function getBucketHelpText(categoryBucket, supplierPaymentType) {
	if (supplierPaymentType === "supplier_wallet" || supplierPaymentType === "wallet_topup") return "Funds will be paid from selected account to increase Supplier Wallet balance.";
	if (supplierPaymentType === "supplier_credit" || supplierPaymentType === "credit_settlement") return "Funds will be paid from selected account to settle outstanding Supplier Credit.";
	if (supplierPaymentType === "supplier_refund" || supplierPaymentType === "refund") return "Refund from supplier will be deposited into the selected cash or bank account.";
	getBucketDirection(categoryBucket, supplierPaymentType);
	const cat = (categoryBucket || "").toLowerCase();
	if (cat === "income") return "Income receipt will be credited directly into the selected account.";
	if (cat === "capital") return "Capital deposit will be credited directly into the selected account.";
	if (cat === "asset") return "Asset acquisition payment will be deducted from the selected account.";
	if (cat === "liability") return "Liability settlement payment will be deducted from the selected account.";
	return "Operating expense payment will be deducted from the selected account.";
}
/** Valid state transitions for expense actions */
function canSubmitExpense(status) {
	return status === "draft";
}
function canApproveExpense(status) {
	return status === "pendingapproval" || status === "draft";
}
function canRejectExpense(status) {
	return status === "pendingapproval" || status === "draft";
}
function canCancelExpense(status) {
	return status === "draft";
}
var EXPENSE_STATUS_LABELS = {
	draft: "Draft",
	pendingapproval: "Pending Approval",
	approved: "Approved",
	posted: "Posted",
	rejected: "Rejected",
	cancelled: "Cancelled",
	reversed: "Reversed"
};
var PAYMENT_METHOD_LABELS = {
	cash: "Cash",
	bank_transfer: "Bank Transfer",
	bank: "Bank"
};
//#endregion
export { canRejectExpense as a, getBucketHelpText as c, canCancelExpense as i, getBucketSourceLabel as l, PAYMENT_METHOD_LABELS as n, canSubmitExpense as o, canApproveExpense as r, getBucketDirection as s, EXPENSE_STATUS_LABELS as t };

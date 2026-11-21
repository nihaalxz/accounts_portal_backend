//#region src/lib/utils/statement-classifier.ts
function resolveStatementTransactionType(t, isBankStatement, entityId) {
	const refType = (t.referenceType ?? "").toLowerCase();
	const txType = (t.transactionType ?? "").toLowerCase();
	const refId = (t.referenceId ?? "").toUpperCase();
	const desc = (t.description ?? "").toLowerCase();
	if (refType === "receipt" || refType === "sale" || refId.startsWith("RCP") || refId.startsWith("TXSRCP") || refId.startsWith("CRCPT") || desc.includes("receipt")) return "RECEIPT";
	if (txType === "contra" || refType === "transfer" || t.sourceBankId != null && t.destinationBankId != null || t.sourceAccountId != null && t.destinationAccountId != null || t.sourceBankId != null && t.destinationAccountId != null || t.sourceAccountId != null && t.destinationBankId != null) if (isBankStatement) {
		if (t.destinationBankId === entityId && t.sourceAccountId != null) return "DEPOSIT";
		if (t.sourceBankId === entityId && t.destinationAccountId != null) return "WITHDRAWAL";
		if (t.sourceBankId != null && t.destinationBankId != null) return "CONTRA";
		return t.destinationBankId === entityId ? "DEPOSIT" : "WITHDRAWAL";
	} else {
		if (t.sourceAccountId === entityId && t.destinationBankId != null) return "DEPOSIT";
		if (t.destinationAccountId === entityId && t.sourceBankId != null) return "WITHDRAWAL";
		if (t.sourceAccountId != null && t.destinationAccountId != null) return "CONTRA";
		return t.sourceAccountId === entityId ? "DEPOSIT" : "WITHDRAWAL";
	}
	if (refType === "expense" || t.expenseHeaderId != null || desc.includes("expense")) return "EXPENSE";
	if (refType === "salary" || refType === "advance" || refType === "loan" || desc.includes("salary")) return "SALARY";
	if (txType === "purchasereturn" || txType === "salesreturn" || refType === "refund") return "REFUND";
	if (refType === "supplierpayment" || refType === "supplierwallet" || refType === "suppliercreditclearance" || t.supplierId != null || [
		"visa",
		"flight",
		"hotel",
		"holiday",
		"transport",
		"vfs",
		"other"
	].includes(refType)) return "PAYMENT";
	if (txType === "incoming") return isBankStatement ? "DEPOSIT" : "RECEIPT";
	if (txType === "outgoing") return isBankStatement ? "WITHDRAWAL" : "PAYMENT";
	return "CONTRA";
}
function getStatementTypeBadge(type) {
	switch (type.toUpperCase()) {
		case "RECEIPT": return {
			label: "RECEIPT",
			badgeClass: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20"
		};
		case "DEPOSIT": return {
			label: "DEPOSIT",
			badgeClass: "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20"
		};
		case "WITHDRAWAL": return {
			label: "WITHDRAWAL",
			badgeClass: "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20"
		};
		case "CONTRA": return {
			label: "CONTRA",
			badgeClass: "bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border-indigo-500/20"
		};
		case "EXPENSE": return {
			label: "EXPENSE",
			badgeClass: "bg-rose-500/10 text-rose-700 dark:text-rose-400 border-rose-500/20"
		};
		case "SALARY": return {
			label: "SALARY",
			badgeClass: "bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20"
		};
		case "REFUND": return {
			label: "REFUND",
			badgeClass: "bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-500/20"
		};
		case "PAYMENT": return {
			label: "PAYMENT",
			badgeClass: "bg-slate-500/10 text-slate-700 dark:text-slate-400 border-slate-500/20"
		};
		case "OPENING": return {
			label: "OPENING",
			badgeClass: "bg-muted text-muted-foreground border-border"
		};
		default: return {
			label: type,
			badgeClass: "bg-muted text-muted-foreground border-border"
		};
	}
}
//#endregion
export { resolveStatementTransactionType as n, getStatementTypeBadge as t };

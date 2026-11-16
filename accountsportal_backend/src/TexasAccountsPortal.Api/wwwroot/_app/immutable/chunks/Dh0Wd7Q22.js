//#region src/features/chart-of-accounts/types.ts
/** Build a hierarchy tree from a flat list */
function buildAccountTree(accounts) {
	const map = /* @__PURE__ */ new Map();
	const roots = [];
	for (const acc of accounts) map.set(acc.id, {
		...acc,
		children: [],
		depth: 0
	});
	for (const node of map.values()) if (node.parentId !== null) {
		const parent = map.get(node.parentId);
		if (parent) {
			node.depth = parent.depth + 1;
			parent.children.push(node);
		} else roots.push(node);
	} else roots.push(node);
	function sortNodes(nodes) {
		nodes.sort((a, b) => a.code.localeCompare(b.code));
		nodes.forEach((n) => sortNodes(n.children));
	}
	sortNodes(roots);
	return roots;
}
/** Flatten a tree back to a depth-annotated list for table rendering */
function flattenTree(nodes) {
	const result = [];
	function visit(list) {
		for (const n of list) {
			result.push(n);
			visit(n.children);
		}
	}
	visit(nodes);
	return result;
}
var ACCOUNT_TYPE_LABELS = {
	asset: "Asset",
	liability: "Liability",
	equity: "Equity",
	revenue: "Revenue",
	expense: "Expense"
};
var NORMAL_BALANCE_LABELS = {
	debit: "Debit",
	credit: "Credit"
};
//#endregion
export { flattenTree as i, NORMAL_BALANCE_LABELS as n, buildAccountTree as r, ACCOUNT_TYPE_LABELS as t };

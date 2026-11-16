//#region src/lib/utils/csv-exporter.ts
/**
* Centralized, robust CSV export utility.
* Handles UTF-8 BOM encoding for Microsoft Excel, cell escaping for quotes/commas/newlines,
* and uses Blob + URL.createObjectURL to avoid URL length & hash fragment truncation issues.
*/
function exportToCSV(filename, headers, rows) {
	if (!rows || rows.length === 0) return;
	const formatCell = (cell) => {
		if (cell === null || cell === void 0) return "\"\"";
		return `"${String(cell).replace(/"/g, "\"\"").replace(/[\r\n]+/g, " ")}"`;
	};
	const csvLines = [headers.map(formatCell).join(","), ...rows.map((row) => row.map(formatCell).join(","))];
	const blob = new Blob(["﻿" + csvLines.join("\r\n")], { type: "text/csv;charset=utf-8;" });
	const url = URL.createObjectURL(blob);
	const link = document.createElement("a");
	link.setAttribute("href", url);
	link.setAttribute("download", filename.endsWith(".csv") ? filename : `${filename}.csv`);
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
	URL.revokeObjectURL(url);
}
//#endregion
export { exportToCSV as t };

## Sheets in Excel


By default a report is exported as one table to one Excel sheet. Maximal number of rows on a sheet in limited. It depend on the version of Excel and is set using the MaximumSheetHeight static property (by default 1048574 for Excel 2007). If rows are too many then redundant rows will be output on the next sheet. Also it is possible to export each page of a report to the single sheet Excel. To do this, it is necessary to set the ExportEachPageToSheet property to true.


Each page of a report has the ExcelSheet report property to what any expression may be assigned. Numbers of pages with the same value in the "ExcelSheet" are combined and exported to a single sheet of Excel. The name of the sheet becomes the value of the expression.

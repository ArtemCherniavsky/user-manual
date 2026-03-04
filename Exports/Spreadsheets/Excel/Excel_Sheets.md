## Excel Sheets


By default a report is exported as one table to one sheet of Excel. Maximal number of rows on a sheet is unlimited. It depends on the Excel version and is set using the MaximumSheetHeight static property (by default 65534, for Excel XP and Excel 2003). If the number of rows is more than default then odd rows will be carried on the next sheet.


Also it is possible to export each page of a report on a single sheet of Excel. To do this it is possible to set the ExportEachPageToSheet property to true.


Besides the forced Excel sheets creation they can be created using the ExcelSheet page property to what any value can be assigned. If some sheets has the same ExcelSheet value then they are joined and exported as one sheet. In this case the name of a sheet is a name of a value.

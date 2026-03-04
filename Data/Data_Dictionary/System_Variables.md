## System Variables

Stimulsoft Reports offers to use system variables in expressions. System variables are variables which provide information about the current status of a report. The following system variables are available:


Name

Description

Column

Returns the current column number (starts from 1).

Line

Returns the current line number. Used for numbering lines in reports. Numbering starts from 1. Numbering is performed separately for each group.

LineThrough

Returns the sequential line number. Unlike Line, it returns the line number from the very beginning of the report, regardless of report groupings. Numbering starts from 1.;

LineABC

Returns the alphabetical analogue of the current line number.

LineRoman

Returns the current line number in Roman numerals.

GroupLine

Returns the current group line number (starts from 1).

PageLine

Returns the number of the current line on the page, starting from 1. Line numbering is maintained within a single page and is automatically reset when moving to the next page.

PageNumber

Returns the current page number. Page numbering starts from 1. Used for numbering pages.

PageNumberThrough

Returns the current page number (starts from 1). When calculating the PageNumberThrough, all properties ResetPageNumber are ignored and numbering starts from the beginning of a report.

PageNofM

Returns a string in the following format: Page {PageNumber} of {TotalPageCount}. This variable combines the system variables Page Number (PageNumber) and Total Page Count (TotalPageCount), i.e., it displays the current page number in relation to the total number of pages.

PageNofMThrough

Returns a localized string, showing "Page N of M" where N is the current page number and M is the TotalPageCount of a report. When calculating the PageNofMThrough, all properties ResetPageNumber are ignored and numbering starts from the beginning of a report.

TotalPageCount

Returns the number of pages in a report.

TotalPageCountThrough

Returns the number of pages in a report. When calculating the TotalPageCountThrough, all properties ResetPageNumber are ignored and numbering starts from the beginning of report.

IsFirstPage

Returns true, if, in the current moment, the first page of a report is printed.

IsFirstPageThrough

Returns true, if, in the current moment, the first report page is printed. When calculating the IsFirstPageThrough, all ResetPageNumber properties are ignored and numbering starts from the beginning of report. For correct calculation of a variable it is required to execute two passes.

IsLastPage

Returns true, if, in the current moment, the last page of a report is printed. For correct calculation of a variable it is required to execute two passes.

IsLastPageThrough

Returns true, if, in the current moment, the last page of a report is printed. When calculating the IsLastPageThrough, all properties ResetPageNumber are ignored and numbering starts from the beginning of report. For correct calculation of a variable it is required to execute two passes.

PageCopyNumber

Return a number of a current copy of a page (starts from 1).

Report Alias

Returns the report alias. You can change the ReportAlias with help of the ReportAlias property of a report.

Report Author

Returns the report author. You can change ReportAuthor with help of the ReportAuthor property of a report.

Report Changed

The Date when a report was changed.

Report Created

The Date when a report was created.

Report Description

Returns the report description. You can change the ReportName with help of the ReportDescription property of a report.

Report Name

Returns the report name. You can change the ReportName with help of the ReportName property of a report.

Time

Returns the current time.

Today

Returns the current date.

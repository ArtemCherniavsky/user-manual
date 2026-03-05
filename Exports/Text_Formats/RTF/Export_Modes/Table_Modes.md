## Table Mode


In this mode the whole report is converted into a single table. When exporting the report is converted into a single table. The document is easily editable but some objects can be changed.


Depending on the value of the Use Page Headers and Footers property the report is exported as follow:

* value is set to false - the report is exported "as is" and will look the same as in preview;

* value is set to true - the report is additionally processed, all changes are described in the text below.


The list of document changes:

* PageHeaders and PageFooters are exported as MS-Word objects. So they are cut from the table and other bands are converted into a single page. It is very convenient because it is easy to correct the document, for example, to put or edit text in cells, change the cell size; all data are moved, and headers and footers of a page stay on their place. (Notice: the header and the footer are exported from the first page of a report, others are ignored; in addition the improvement was done: now the header is searched on the second page; if the property PrintOn of this header is set to ExceptFirstPage, then everything is exported correctly (using the RTF tags) - the header will not be output on the first page.

* If the Header of the PrintOnAllPages property is enabled, then it is exported as the table header, and is correctly output on each page.

* The height or rows in not exported (the "not set" mode; by default the "precise" mode is set).

* If the Tag field is not empty, then the content of the Tag field is exported. The Text field is not exported. The following expression can be used to change MS-Word commands:


Name

Description

#PageNumber#

The number of the current page (PAGE)

#TotalPageCount#

Total number of pages in the document (NUMPAGES)

#PageRef Bookmark#

The number of pages on what the bookmark is placed (PAGEREF)


For example, the following expression can be written in the Tag field:


Page #PageNumber# of #TotalPageCount#


When exporting, #PageNumber# and #TotalPageCount# will be substituted on the "Page number" field and "Total Page" field. And they will be automatically changed.


The following string-commands can be written in the Tag field:


Name

Description

rtfparagraph

The TextBox, RichTextBox and Image content is output as simple text, in the table break. It is supposed that this is the only component in the row of text, so other components in this row are ignored.

rtfnewpage

The page break is put before the text box


Also it is possible to export a separate sheets of a template to separate sections of the document with the headers/footers. To do this, use the ExcelSheet property. in this case all pages of a report with the same value of the ExcelSheet property are combined in groups, then each group is exported as a separate section of the document with its headers/footers. By default, this property is not filled, and the report is exported as a single partition.

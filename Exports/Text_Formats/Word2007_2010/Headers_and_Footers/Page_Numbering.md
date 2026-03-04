## Page Numbering


If the Tag is not empty then the content of the Tag property is exported. The Text field is not exported. Also the string may contain the following expressions, which are changed on MS-Word commands:


#PageNumber#

The number of the current page (PAGE)

#TotalPageCount#

Total number of pages in a document (NUMPAGES)


For example, in the Tag property the following expression can be written:

Page #PageNumber# of #TotalPageCount#


When exporting #PageNumber# and #TotalPageCount# will be replaced on "PageNumber" field and "TotalPageCount" field and will be automatically changed together with text.

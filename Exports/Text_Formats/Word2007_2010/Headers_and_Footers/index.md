## Headers and Footers


Depending on the value of the Use Page Headers and Footers property a report is exported in the following way:

* the value is false - a report is exported "as is" and looks as in preview;

* the value is true - a report is additionally processed. All changes are described below.


The list of changes of the document:

* PageHeaders and PageFooters are exported as MS-Word objects. So they are cut from a table and all other bands are exported as one table. It is very convenient, if it is necessary to elaborate the document (add rows or edit a text in cells, change cell size); in this case all data are moved but headers and footers stay on their place. (Notice: a header and a footer of the first page are taken, others are ignored).

* Row height is not exported (the "not set" mode; by default - the "precise" mode).

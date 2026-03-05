## Controlling Exports


The following elements can be specified in the Tag property to control export:

* DataType [ : FieldLength [ : DecimalPartLength ] ]

* ExportType : "FieldName"

* Column: "FieldName" "DataString"

Several elements should be separated with the semicolon. The “DataType" element should be only one and should be placed first, other elements – if necessary.


Values of the "DataType" element are shown in the table below. If the data type is not set, then the string data type is taken by default. The "FieldLength" element sets fixed width of a data field. If the field width is not set, then the width is taken from the table. For the string type the default width is the longest string. The "DecimalPartLength" element sets the number of characters after comma. If it is not set, then the default number is taken.


Data type

DBF data type

(default size)

Description

int

Numeric (15 : 0)

Numeric

long

Numeric (25 : 0)

Numeric

float

Numeric (15 : 5)

Decimal

double

Numeric (20 : 10)

Decimal

string

Character (auto)

Text

date

Date (8)

Date


Sample of using elements are shown in the table below.


Type

Description

string : 25

set the column width (25 characters) and cuts all long strings

float

converts decimal digit with the length 15 characters, 5 characters after comma

float :10

converts decimal digit with the length 10 characters,  5 characters after comma

float :10 : 2

converts decimal digit with the length 10 characters, 2 characters after comma

int :10 : 2

converts integer digit with the length 10 characters; the second parameter is ignored


* **Notice:** If the integer part of a digit is long and cannot be placed into the specified field, then it is cut, so data are lost. For example, if the write «-12345,678» in the «float:8:3» field, then the «2345,678» will be output.


The "ExportType" element indicates for which export the field name is set. The values can be used: “dbf”, “csv”, “xml”, “default”. The "FieldName" element indicates the field name in the file (for the DBF the is automatically cut up to 10 characters). The own name can be specified to each type of export. If the name for each export is not specified then the name for the “default” type is taken. For example:

DBF : "Describe" ; XML : "Description" ; default: "Default name"


The "Column" element indicates that the additional field is added to the exported data. The "FieldName" element indicates the name of a new field. The "DataRow" element indicates the content of a new field and can be expression. For example

Column: "SortField" "{Products.Categories.CategoryName}"

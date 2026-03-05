## Controlling Exports


The following elements can be specified in the Tag property to control export to XML:

* DataType

* ExportType : "FieldName"

* Column: "FieldName" "DataRow"

Several elements should be separated with the semicolon. The “DataType" element should be only one and should be placed first, other elements – if necessary.


Values of the "DataType" element are shown in the table below. If the data type is not set, then the string data type is taken by default.


Data type

Description

int

Numeric

long

Numeric

float

Decimal

double

Decimal

string

Text

date

Date


The "ExportType" element indicates for which export the field name is set. The values can be used: “dbf”, “csv”, “xml”, “default”. The "FieldName" element indicates the field name in the file. The own name can be specified to each type of export. If the name for each export is not specified then the name for the “default” type is taken. For example:

DBF : "Describe" ; XML : "Description" ; default: "Default name"


The "Column" element indicates that additional field is added to the exported data. The "FieldName" element indicates the name of a new field. The "DataRow" element indicates the content of a new field and can be expression. For example:

Column: "SortField" "{Products.Categories.CategoryName}"

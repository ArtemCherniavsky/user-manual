## Controlling Exports


The Tag property of each text box in a Data band can be specified with the following elements that control the export:

* Export Type : "FieldName"

* Column: "FieldName" "DataRow"

Several elements should be separated with the semicolon.


The "Export Type" element indicates for which export the field name is set. The values can be used: “dbf”, “csv”, “xml”, “default”. The "FieldName" element indicates the field name in the file. The own name can be specified to each type of export. If the name for each export is not specified then the name for the “default” type is taken. For example:

DBF : "Describe" ; CSV : "Description" ; default: "Default name"


The "Column" element indicates that additional field is added to exported data. The "FieldName" element indicated the name of a new field. The "DataRow" element indicates the content of a new field and can be an expression. For example:

Column: "SortField" "{Products.Categories.CategoryName}"

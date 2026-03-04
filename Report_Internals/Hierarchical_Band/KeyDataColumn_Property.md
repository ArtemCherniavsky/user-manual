## KeyDataColumn Property


The Hierarchical band has the KeyDataColumn property. This property is required for filling. If the KeyDataColumn is not specified, the report generator will not be able to render a report. The value of this property can be any data column from the selected Hierarchical band of the data source, which entries will be keys for creating a report. For example, if the Employees data source is specified to the Hierarchical band, then the value of the KeyDataColumn property is the EmployeesID data column, because the entry of this column is the key and contains unique codes of employees.

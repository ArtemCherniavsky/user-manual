## Data Output


To obtain a structured list in a report as a tree, you must follow these steps:


![](../../images/fly.png) Specify the DataSource for the Hierarchical band using, for example, the DataSource property:


![](../../images/topics/Report_Internals.Hierarchical_Band.Data_Output_1.png)


![](../../images/fly.png) Set the KeyDataColumn, select the data column by what an identification number of data rows will be assigned. For example, a EmployeeID data column;

![](../../images/fly.png) Set the MasterKeyDataColumn, select the data column by which a reference to the primary table key of the parent entry will be specified. For example, a ReportsTo data column;

![](../../images/fly.png) Set the Indent, specify the indent distance of the child entry relative to the parent entry. For example, the Indent value will be equal to 20 units of a report (centimeters, inches, one hundredth inches, pixels);

![](../../images/fly.png) Set the ParentValue, specify an entry that will be a parent for all rows. For example, set the ParentValue property to 2.


The picture below shows an example of a rendered  hierarchical report:


![](../../images/topics/Report_Internals.Hierarchical_Band.Data_Output_2.png)

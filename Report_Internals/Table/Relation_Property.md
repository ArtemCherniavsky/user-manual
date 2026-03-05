## Relation Property


Besides filling the MasterComponent property it is necessary to fill the DataRelation property of the Detail table. The relation is used for selecting the detailed data only for the specific row of the Master table. If the relation will not be specified then all records of the Detail data source of the Detail table will be output for each row of the Master data source of the Master table.


![](../../images/topics/Report_Internals.Table.Relation_Property_1.png)


The relation can be selected using the Data table editor.


![](../../images/topics/Report_Internals.Table.Relation_Property_2.png)


The selection is done between relations which are created between Master and Detail data sources and in what the Detail data source is the child data source.

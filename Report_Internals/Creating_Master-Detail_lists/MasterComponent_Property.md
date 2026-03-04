## MasterComponent Property


Put two Data bands on a page to start creating the Master-Detail report. Specify the Master data source to the first band (this is the Master band). Specify the Detail data source to the second band (this is the Detail). Then, it is necessary to bind these bands using the MasterComponent property of the second band. The Master band should be selected.


![](../../images/topics/Report_Internals.Creating_Master-Detail_lists.MasterComponent_Property_1.png)


The selection can be made in the Data band editor window.


![](../../images/topics/Report_Internals.Creating_Master-Detail_lists.MasterComponent_Property_2.png)


After filling the MasterComponent property two bands will be bound to each other. When printing one row of the Master band, all rows of the Detail band will be output. The Detail band will not be printed itself but only in relation to the Master band.
